'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { GenerationResult, Icon, Theme } from '@/types';
import { getDefaultTheme } from '@/data/themes';

interface GeneratorState {
  selectedIcon: Icon | null;
  selectedTheme: Theme;
  customPrompt: string;
  isGenerating: boolean;
  progress: number;
  stageMessage: string;
  currentResult: GenerationResult | null;
  generationHistory: GenerationResult[];
  
  setSelectedIcon: (icon: Icon | null) => void;
  setSelectedTheme: (theme: Theme) => void;
  setCustomPrompt: (prompt: string) => void;
  startGeneration: () => void;
  updateProgress: (progress: number, message: string) => void;
  setResult: (result: GenerationResult) => void;
  setError: (error: string) => void;
  resetGeneration: () => void;
  canGenerate: () => boolean;
}

export const useGeneratorStore = create<GeneratorState>()(
  immer(
    persist(
      (set, get) => ({
        selectedIcon: null,
        selectedTheme: getDefaultTheme(),
        customPrompt: '',
        isGenerating: false,
        progress: 0,
        stageMessage: '',
        currentResult: null,
        generationHistory: [],
        
        setSelectedIcon: (icon) => {
          set((state) => { state.selectedIcon = icon; });
        },
        
        setSelectedTheme: (theme) => {
          set((state) => { state.selectedTheme = theme; });
        },
        
        setCustomPrompt: (prompt) => {
          set((state) => { state.customPrompt = prompt.slice(0, 100); });
        },
        
        startGeneration: () => {
          set((state) => {
            state.isGenerating = true;
            state.progress = 0;
            state.stageMessage = 'Starting generation...';
            state.currentResult = null;
          });
        },
        
        updateProgress: (progress, message) => {
          set((state) => {
            state.progress = Math.min(progress, 100);
            state.stageMessage = message;
          });
        },
        
        setResult: (result) => {
          set((state) => {
            state.currentResult = result;
            state.isGenerating = false;
            state.progress = 100;
            state.stageMessage = 'Generation complete!';
            state.generationHistory.unshift(result);
            if (state.generationHistory.length > 50) {
              state.generationHistory = state.generationHistory.slice(0, 50);
            }
          });
        },
        
        setError: (error) => {
          set((state) => {
            state.isGenerating = false;
            state.progress = 0;
            state.stageMessage = `Error: ${error}`;
          });
        },
        
        resetGeneration: () => {
          set((state) => {
            state.isGenerating = false;
            state.progress = 0;
            state.stageMessage = '';
            state.currentResult = null;
          });
        },
        
        canGenerate: () => {
          const { selectedIcon, isGenerating } = get();
          return !!selectedIcon && !isGenerating;
        }
      }),
      {
        name: 'generator-storage',
        partialize: (state) => ({
          selectedTheme: state.selectedTheme,
          customPrompt: state.customPrompt,
          generationHistory: state.generationHistory.slice(0, 10)
        })
      }
    )
  )
);

export const useSelectedIcon = () => 
  useGeneratorStore((state) => state.selectedIcon);

export const useSelectedTheme = () => 
  useGeneratorStore((state) => state.selectedTheme);

export const useGenerationProgress = () => 
  useGeneratorStore((state) => ({
    isGenerating: state.isGenerating,
    progress: state.progress,
    message: state.stageMessage
  }));

export const useCanGenerate = () => 
  useGeneratorStore((state) => state.canGenerate());
