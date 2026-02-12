import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { 
  Icon, 
  Theme, 
  GenerationResult, 
  ModelStatus, 
  GenerationStage 
} from '@/types';
import { getDefaultTheme } from '@/data/themes';

interface GeneratorState {
  // Selection State
  selectedIcon: Icon | null;
  selectedTheme: Theme;
  customPrompt: string;
  
  // Generation State
  isGenerating: boolean;
  generationStage: GenerationStage;
  progress: number;
  stageMessage: string;
  currentResult: GenerationResult | null;
  generationHistory: GenerationResult[];
  
  // Model State
  modelStatus: ModelStatus;
  
  // Actions
  setSelectedIcon: (icon: Icon | null) => void;
  setSelectedTheme: (theme: Theme) => void;
  setCustomPrompt: (prompt: string) => void;
  
  startGeneration: () => void;
  updateProgress: (stage: GenerationStage, progress: number, message: string) => void;
  setResult: (result: GenerationResult) => void;
  setError: (error: string) => void;
  resetGeneration: () => void;
  addToHistory: (result: GenerationResult) => void;
  clearHistory: () => void;
  
  setModelStatus: (status: ModelStatus) => void;
  updateModelProgress: (progress: number, message: string) => void;
  
  canGenerate: () => boolean;
  resetAll: () => void;
}

export const useGeneratorStore = create<GeneratorState>()(
  immer(
    persist(
      (set, get) => ({
        // Initial State
        selectedIcon: null,
        selectedTheme: getDefaultTheme(),
        customPrompt: '',
        
        isGenerating: false,
        generationStage: 'idle',
        progress: 0,
        stageMessage: '',
        currentResult: null,
        generationHistory: [],
        
        modelStatus: {
          status: 'idle',
          progress: 0,
          message: ''
        },
        
        // Actions
        setSelectedIcon: (icon) => {
          set((state) => {
            state.selectedIcon = icon;
          });
        },
        
        setSelectedTheme: (theme) => {
          set((state) => {
            state.selectedTheme = theme;
          });
        },
        
        setCustomPrompt: (prompt) => {
          set((state) => {
            state.customPrompt = prompt.slice(0, 100); // Limit 100 chars
          });
        },
        
        startGeneration: () => {
          set((state) => {
            state.isGenerating = true;
            state.generationStage = 'encoding';
            state.progress = 0;
            state.stageMessage = 'Initializing AI...';
            state.currentResult = null;
          });
        },
        
        updateProgress: (stage, progress, message) => {
          set((state) => {
            state.generationStage = stage;
            state.progress = progress;
            state.stageMessage = message;
          });
        },
        
        setResult: (result) => {
          set((state) => {
            state.currentResult = result;
            state.isGenerating = false;
            state.generationStage = 'complete';
            state.progress = 100;
            state.stageMessage = 'Generation complete!';
          });
          get().addToHistory(result);
        },
        
        setError: (error) => {
          set((state) => {
            state.isGenerating = false;
            state.generationStage = 'error';
            state.stageMessage = error;
          });
        },
        
        resetGeneration: () => {
          set((state) => {
            state.isGenerating = false;
            state.generationStage = 'idle';
            state.progress = 0;
            state.stageMessage = '';
            state.currentResult = null;
          });
        },
        
        addToHistory: (result) => {
          set((state) => {
            state.generationHistory.unshift(result);
            // Keep only last 50
            if (state.generationHistory.length > 50) {
              state.generationHistory = state.generationHistory.slice(0, 50);
            }
          });
        },
        
        clearHistory: () => {
          set((state) => {
            state.generationHistory = [];
          });
        },
        
        setModelStatus: (status) => {
          set((state) => {
            state.modelStatus = status;
          });
        },
        
        updateModelProgress: (progress, message) => {
          set((state) => {
            state.modelStatus.progress = progress;
            state.modelStatus.message = message;
          });
        },
        
        canGenerate: () => {
          const { selectedIcon, isGenerating, modelStatus } = get();
          return !!selectedIcon && !isGenerating && modelStatus.status === 'ready';
        },
        
        resetAll: () => {
          set((state) => {
            state.selectedIcon = null;
            state.selectedTheme = getDefaultTheme();
            state.customPrompt = '';
            state.isGenerating = false;
            state.generationStage = 'idle';
            state.progress = 0;
            state.stageMessage = '';
            state.currentResult = null;
          });
        }
      }),
      {
        name: 'fivem-icon-generator-storage',
        partialize: (state) => ({
          selectedTheme: state.selectedTheme,
          customPrompt: state.customPrompt,
          generationHistory: state.generationHistory.slice(0, 10) // Persist only last 10
        })
      }
    )
  )
);
