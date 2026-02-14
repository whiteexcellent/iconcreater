export interface Icon {
  id: string;
  name: string;
  emoji: string;
  category: IconCategory;
  baseShape: 'circle' | 'square' | 'rounded' | 'hexagon';
  description: string;
}

export type IconCategory = 
  | 'media' 
  | 'communication' 
  | 'finance' 
  | 'navigation' 
  | 'system' 
  | 'transport' 
  | 'commerce' 
  | 'services' 
  | 'utility';

export interface Theme {
  id: string;
  name: string;
  emoji: string;
  description: string;
  style: string;
  negative: string;
  previewColor: string;
  icon: string;
}

export interface GenerationResult {
  id: string;
  iconId: string;
  themeId: string;
  prompt: string;
  pngData: string;
  svgData: string;
  timestamp: string;
  model: string;
}

export interface GeneratorState {
  selectedIcon: Icon | null;
  selectedTheme: Theme;
  customPrompt: string;
  isGenerating: boolean;
  progress: number;
  stageMessage: string;
  currentResult: GenerationResult | null;
  generationHistory: GenerationResult[];
}

export interface AnimationState {
  isFunMode: boolean;
  currentMascot: 'robot' | 'alien' | 'ninja' | 'cat' | 'wizard';
  showConfetti: boolean;
  easterEggsFound: string[];
  particlesEnabled: boolean;
}

export type GenerationStage = 
  | 'idle'
  | 'encoding'
  | 'denoising'
  | 'decoding'
  | 'vectorizing'
  | 'optimizing'
  | 'complete'
  | 'error';
