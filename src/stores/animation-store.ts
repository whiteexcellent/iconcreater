'use client';

import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface AnimationState {
  isFunMode: boolean;
  currentMascot: 'robot' | 'alien' | 'ninja' | 'cat' | 'wizard';
  showConfetti: boolean;
  easterEggsFound: string[];
  particlesEnabled: boolean;
  
  setFunMode: (enabled: boolean) => void;
  setMascot: (mascot: AnimationState['currentMascot']) => void;
  triggerConfetti: () => void;
  addEasterEgg: (eggId: string) => void;
  toggleParticles: () => void;
}

export const useAnimationStore = create<AnimationState>()(
  immer((set) => ({
    isFunMode: true,
    currentMascot: 'robot',
    showConfetti: false,
    easterEggsFound: [],
    particlesEnabled: true,
    
    setFunMode: (enabled) => {
      set((state) => { state.isFunMode = enabled; });
    },
    
    setMascot: (mascot) => {
      set((state) => { state.currentMascot = mascot; });
    },
    
    triggerConfetti: () => {
      set((state) => { state.showConfetti = true; });
      setTimeout(() => {
        set((state) => { state.showConfetti = false; });
      }, 5000);
    },
    
    addEasterEgg: (eggId) => {
      set((state) => {
        if (!state.easterEggsFound.includes(eggId)) {
          state.easterEggsFound.push(eggId);
        }
      });
    },
    
    toggleParticles: () => {
      set((state) => { state.particlesEnabled = !state.particlesEnabled; });
    }
  }))
);
