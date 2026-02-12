'use client';

import { useState, useCallback, useRef } from 'react';
import { GenerationResult, ModelStatus } from '@/types';
import { PromptBuilder } from '@/lib/utils/prompt-builder';
import { checkBrowserCompatibility } from '@/lib/utils';

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
  const svgWorkerRef = useRef<Worker | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  // Worker'ları başlat
  const initWorkers = useCallback(() => {
    if (!aiWorkerRef.current) {
      aiWorkerRef.current = new Worker(
        new URL('@/workers/ai-worker.ts', import.meta.url)
      );
    }
    if (!svgWorkerRef.current) {
      svgWorkerRef.current = new Worker(
        new URL('@/workers/svg-converter.worker.ts', import.meta.url)
      );
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

        // 1. Prompt oluştur
        const { selectedIcon, selectedTheme } = useGeneratorStore.getState();
        if (!selectedIcon || !selectedTheme) {
          throw new Error('Icon or theme not selected');
        }

        const prompt = PromptBuilder.buildPrompt(
          selectedIcon,
          selectedTheme,
          customPrompt
        );

        // 2. AI ile görsel üret (WebWorker'da)
        const imageDataUrl = await generateImageWithAI(prompt);

        onProgress('vectorizing', 60);

        // 3. SVG'ye çevir (WebWorker'da)
        const svgResult = await convertToSVG(imageDataUrl);

        onProgress('complete', 100);

        // 4. Sonuç oluştur
        const result: GenerationResult = {
          id: crypto.randomUUID(),
          iconId,
          themeId,
          prompt,
          pngData: imageDataUrl,
          svgData: svgResult.svg,
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

  // AI ile görsel üret (Worker'da)
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
          onProgress(stage || 'generating', Math.round(progress * 0.6)); // 0-60%
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

  // PNG'den SVG'ye çevir (Worker'da)
  const convertToSVG = (imageDataUrl: string): Promise<{ svg: string }> => {
    return new Promise((resolve, reject) => {
      if (!svgWorkerRef.current) {
        reject(new Error('SVG worker not initialized'));
        return;
      }

      const worker = svgWorkerRef.current;

      worker.onmessage = (e) => {
        const { type, result, error, progress } = e.data;

        if (type === 'progress') {
          onProgress('vectorizing', 60 + Math.round(progress * 0.4)); // 60-100%
        }

        if (type === 'complete') {
          resolve(result);
        }

        if (type === 'error') {
          reject(new Error(error));
        }
      };

      worker.postMessage({
        type: 'convert',
        payload: { imageDataUrl }
      });
    });
  };

  // Generation'ı iptal et
  const abortGeneration = useCallback(() => {
    abortControllerRef.current?.abort();
    aiWorkerRef.current?.terminate();
    svgWorkerRef.current?.terminate();
    aiWorkerRef.current = null;
    svgWorkerRef.current = null;
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

// Store'a erişim için (circular dependency önlemek için)
import { useGeneratorStore } from '@/stores/generator-store';
