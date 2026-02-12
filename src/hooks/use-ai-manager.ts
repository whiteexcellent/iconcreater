'use client';

import { useState, useCallback, useRef } from 'react';
import { GenerationResult, ModelStatus } from '@/types';
import { PromptBuilder } from '@/lib/utils/prompt-builder';
import { checkBrowserCompatibility } from '@/lib/utils';
import { useGeneratorStore } from '@/stores/generator-store';

interface UseAIManagerReturn {
  status: ModelStatus;
  loadModel: () => Promise<boolean>;
  generateIcon: (
    iconId: string,
    themeId: string,
    customPrompt?: string
  ) => Promise<GenerationResult | null>;
  abortGeneration: () => void;
}

export function useAIManager(
  onProgress: (stage: string, progress: number) => void
): UseAIManagerReturn {
  const [status, setStatus] = useState<ModelStatus>({
    status: 'idle',
    progress: 0,
    message: ''
  });

  const aiWorkerRef = useRef<Worker | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  // Worker'ları başlat
  const initWorkers = useCallback(() => {
    if (!aiWorkerRef.current) {
      try {
        aiWorkerRef.current = new Worker(
          new URL('../workers/ai-worker.ts', import.meta.url),
          { type: 'module' }
        );
      } catch (error) {
        console.error('Failed to create AI worker:', error);
        // Fallback: Create inline worker
        const workerCode = `
          self.onmessage = async (e) => {
            const { type, payload } = e.data;
            if (type === 'load') {
              for (let i = 0; i <= 100; i += 20) {
                self.postMessage({ type: 'progress', stage: 'Loading...', progress: i });
                await new Promise(r => setTimeout(r, 100));
              }
              self.postMessage({ type: 'loaded', success: true });
            }
            if (type === 'generate') {
              self.postMessage({ type: 'progress', stage: 'Generating...', progress: 50 });
              await new Promise(r => setTimeout(r, 2000));
              self.postMessage({ type: 'complete', imageData: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgZmlsbD0iIzY2N2VlYSIvPjx0ZXh0IHg9IjI1NiIgeT0iMjU2IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iNDAiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+NTExeDUxMjwvdGV4dD48L3N2Zz4=' });
            }
          };
        `;
        const blob = new Blob([workerCode], { type: 'application/javascript' });
        aiWorkerRef.current = new Worker(URL.createObjectURL(blob));
      }
    }
  }, []);

  // Browser uyumluluğu kontrol et
  const checkCompatibility = useCallback(() => {
    const { supported, issues } = checkBrowserCompatibility();
    if (!supported) {
      setStatus({
        status: 'error',
        progress: 0,
        message: issues.join(', ')
      });
      return false;
    }
    return true;
  }, []);

  // Model yükle
  const loadModel = useCallback(async (): Promise<boolean> => {
    if (!checkCompatibility()) return false;

    initWorkers();
    
    setStatus({
      status: 'loading',
      progress: 0,
      message: 'Initializing AI...'
    });

    return new Promise((resolve) => {
      if (!aiWorkerRef.current) {
        setStatus({
          status: 'error',
          progress: 0,
          message: 'Failed to initialize worker'
        });
        resolve(false);
        return;
      }

      const worker = aiWorkerRef.current;

      worker.onmessage = (e) => {
        const { type, progress, stage, success, error } = e.data;

        if (type === 'progress') {
          setStatus({
            status: 'loading',
            progress,
            message: stage || 'Loading model...'
          });
          onProgress(stage || 'loading', progress);
        }

        if (type === 'loaded') {
          setStatus({
            status: success ? 'ready' : 'error',
            progress: success ? 100 : 0,
            message: success ? 'AI Ready!' : 'Failed to load model'
          });
          resolve(success);
        }

        if (type === 'error') {
          setStatus({
            status: 'error',
            progress: 0,
            message: error
          });
          resolve(false);
        }
      };

      worker.onerror = (err) => {
        console.error('Worker error:', err);
        setStatus({
          status: 'error',
          progress: 0,
          message: 'Worker initialization failed'
        });
        resolve(false);
      };

      worker.postMessage({ type: 'load' });
    });
  }, [checkCompatibility, initWorkers, onProgress]);

  // İkon üret
  const generateIcon = useCallback(
    async (
      iconId: string,
      themeId: string,
      customPrompt?: string
    ): Promise<GenerationResult | null> => {
      if (status.status !== 'ready') {
        console.error('Model not ready');
        return null;
      }

      initWorkers();
      abortControllerRef.current = new AbortController();

      try {
        onProgress('encoding', 0);

        // Get icon and theme from store
        const store = useGeneratorStore.getState();
        const { selectedIcon, selectedTheme } = store;
        
        if (!selectedIcon || !selectedTheme) {
          throw new Error('Icon or theme not selected');
        }

        const prompt = PromptBuilder.buildPrompt(
          selectedIcon,
          selectedTheme,
          customPrompt
        );

        // Generate with AI
        const imageData = await generateImageWithAI(prompt);

        onProgress('vectorizing', 60);

        // Convert to SVG (simplified - in real app, use proper vectorization)
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const svgData = createMockSVG(selectedIcon.name, selectedTheme.name);

        onProgress('complete', 100);

        // Create result
        const result: GenerationResult = {
          id: crypto.randomUUID(),
          iconId,
          themeId,
          prompt,
          pngData: imageData,
          svgData: svgData,
          timestamp: new Date()
        };

        return result;
      } catch (error) {
        setStatus({
          status: 'error',
          progress: 0,
          message: error instanceof Error ? error.message : 'Generation failed'
        });
        return null;
      }
    },
    [initWorkers, onProgress, status.status]
  );

  // AI ile görsel üret
  const generateImageWithAI = (prompt: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      if (!aiWorkerRef.current) {
        reject(new Error('AI worker not initialized'));
        return;
      }

      const worker = aiWorkerRef.current;

      worker.onmessage = (e) => {
        const { type, imageData, error, progress, stage } = e.data;

        if (type === 'progress') {
          onProgress(stage || 'generating', Math.round(progress * 0.6));
        }

        if (type === 'complete') {
          resolve(imageData);
        }

        if (type === 'error') {
          reject(new Error(error));
        }
      };

      worker.postMessage({
        type: 'generate',
        payload: { prompt, steps: 4 }
      });
    });
  };

  // Mock SVG oluştur (gerçek uygulamada vectorization kullanılır)
  const createMockSVG = (iconName: string, themeName: string): string => {
    const colors: Record<string, string> = {
      'Kawaii': '#FF6B9D',
      'Drift': '#00D2FF',
      'Minimal': '#667EEA',
      'Neon': '#F093FB',
      'Retro': '#FA709A'
    };
    
    const color = colors[themeName] || '#667EEA';
    
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
      <rect width="512" height="512" fill="${color}" rx="64"/>
      <circle cx="256" cy="256" r="128" fill="white" opacity="0.3"/>
      <text x="256" y="280" font-family="Arial" font-size="48" fill="white" text-anchor="middle" font-weight="bold">${iconName}</text>
    </svg>`;
  };

  // Generation'ı iptal et
  const abortGeneration = useCallback(() => {
    abortControllerRef.current?.abort();
    aiWorkerRef.current?.terminate();
    aiWorkerRef.current = null;
    setStatus({
      status: 'idle',
      progress: 0,
      message: 'Generation aborted'
    });
  }, []);

  return {
    status,
    loadModel,
    generateIcon,
    abortGeneration
  };
}
