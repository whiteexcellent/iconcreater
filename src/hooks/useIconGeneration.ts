// src/hooks/useIconGeneration.ts
// React hook for icon generation with all backends

import { useState, useEffect, useCallback, useRef } from 'react';
import { 
  getImageGenerationManager, 
  GenerationOptions,
  GenerationResult
} from '@/lib/image-generation';

interface BackendInfo {
  id: string;
  name: string;
  size: number;
  requirements: string[];
}

interface UseIconGenerationReturn {
  // State
  isInitialized: boolean;
  isGenerating: boolean;
  progress: number;
  error: string | null;
  result: GenerationResult | null;
  activeBackend: string;
  availableBackends: BackendInfo[];
  
  // Actions
  generate: (prompt: string, options?: Partial<GenerationOptions>) => Promise<void>;
  switchBackend: (backendId: string) => Promise<boolean>;
  reset: () => void;
}

export function useIconGeneration(): UseIconGenerationReturn {
  const managerRef = useRef(getImageGenerationManager());
  const manager = managerRef.current;

  // State
  const [isInitialized, setIsInitialized] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<GenerationResult | null>(null);
  const [activeBackend, setActiveBackend] = useState('');
  const [availableBackends, setAvailableBackends] = useState<BackendInfo[]>([]);

  // Initialize on mount
  useEffect(() => {
    const init = async () => {
      try {
        await manager.initialize();
        setIsInitialized(true);
        setActiveBackend(manager.getActiveBackendName());
        setAvailableBackends(manager.getAvailableBackends());
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Initialization failed');
      }
    };

    init();

    return () => {
      // Don't dispose on unmount, manager is singleton
    };
  }, [manager]);

  // Generate icon
  const generate = useCallback(async (
    prompt: string, 
    options?: Partial<GenerationOptions>
  ) => {
    if (!isInitialized) {
      setError('Not initialized yet');
      return;
    }

    setIsGenerating(true);
    setProgress(0);
    setError(null);
    setResult(null);

    try {
      const generationOptions: GenerationOptions = {
        prompt,
        width: 512,
        height: 512,
        steps: 20,
        guidanceScale: 7.5,
        ...options
      };

      const generationResult = await manager.generate(generationOptions);
      setResult(generationResult);
      
      // Update active backend (might have changed due to fallback)
      setActiveBackend(manager.getActiveBackendName());
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Generation failed');
    } finally {
      setIsGenerating(false);
      setProgress(100);
    }
  }, [isInitialized, manager]);

  // Switch backend
  const switchBackend = useCallback(async (backendId: string) => {
    const success = await manager.switchBackend(backendId);
    if (success) {
      setActiveBackend(manager.getActiveBackendName());
    }
    return success;
  }, [manager]);

  // Reset state
  const reset = useCallback(() => {
    setError(null);
    setResult(null);
    setProgress(0);
  }, []);

  return {
    // State
    isInitialized,
    isGenerating,
    progress,
    error,
    result,
    activeBackend,
    availableBackends,
    
    // Actions
    generate,
    switchBackend,
    reset
  };
}
