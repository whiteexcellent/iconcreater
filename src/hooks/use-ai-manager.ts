'use client';

import { useState, useCallback } from 'react';
import { GenerationResult, ModelStatus } from '@/types';
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

  const abortControllerRef = useCallback(() => new AbortController(), []);
  const currentController = useState<AbortController | null>(null);

  // Model yükle (API'de gerek yok, direkt hazır kabul edelim)
  const loadModel = useCallback(async (): Promise<boolean> => {
    setStatus({
      status: 'ready',
      progress: 100,
      message: 'Ready!'
    });
    return true;
  }, []);

  // İkon üret - API Key YOK! Sadece server'a istek atıyoruz
  const generateIcon = useCallback(
    async (
      iconId: string,
      themeId: string,
      customPrompt?: string
    ): Promise<GenerationResult | null> => {
      const store = useGeneratorStore.getState();
      
      if (!store.selectedIcon || !store.selectedTheme) {
        setStatus({
          status: 'error',
          progress: 0,
          message: 'Icon or theme not selected'
        });
        return null;
      }

      setStatus({
        status: 'loading',
        progress: 0,
        message: 'Generating...'
      });

      const controller = new AbortController();
      currentController[1](controller);

      try {
        onProgress('sending', 10);

        // 🎯 ÖNEMLİ: API Key YOK! Sadece iconId ve themeId gönderiyoruz
        // API Key server'da (route.ts içinde) güvenle saklanıyor
        const response = await fetch('/api/generate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            iconId,
            themeId,
            customPrompt
          }),
          signal: controller.signal
        });

        onProgress('processing', 50);

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Generation failed');
        }

        const result = await response.json();

        if (!result.success) {
          throw new Error(result.error || 'Unknown error');
        }

        onProgress('complete', 100);

        setStatus({
          status: 'ready',
          progress: 100,
          message: 'Complete!'
        });

        return result.data as GenerationResult;

      } catch (error) {
        if (error instanceof Error && error.name === 'AbortError') {
          setStatus({
            status: 'idle',
            progress: 0,
            message: 'Aborted'
          });
          return null;
        }

        console.error('Generation error:', error);
        setStatus({
          status: 'error',
          progress: 0,
          message: error instanceof Error ? error.message : 'Generation failed'
        });
        return null;
      }
    },
    [onProgress]
  );

  // Generation'ı iptal et
  const abortGeneration = useCallback(() => {
    currentController[0]?.abort();
    setStatus({
      status: 'idle',
      progress: 0,
      message: 'Aborted'
    });
  }, [currentController]);

  return {
    status,
    loadModel,
    generateIcon,
    abortGeneration
  };
}
