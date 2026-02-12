// Core types for the icon generator

export interface Icon {
  id: string;
  name: string;
  category: IconCategory;
  baseShape: string;
  description?: string;
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
  | 'utility' 
  | 'real_estate';

export interface Theme {
  id: string;
  name: string;
  description: string;
  style: string;
  negative: string;
  previewColor: string;
  controlNetStrength: number;
  icon: string;
}

export interface GenerationResult {
  id: string;
  iconId: string;
  themeId: string;
  prompt: string;
  pngData: string;
  svgData: string;
  timestamp: Date;
  downloadUrl?: string;
}

export interface GenerationOptions {
  iconId: string;
  themeId: string;
  customPrompt?: string;
  resolution?: 256 | 512 | 768;
  seed?: number;
}

export interface ModelStatus {
  status: 'idle' | 'checking' | 'downloading' | 'loading' | 'ready' | 'error';
  progress: number;
  message: string;
  error?: string;
}

export interface CacheEntry {
  key: string;
  result: GenerationResult;
  timestamp: number;
}

export interface AIConfig {
  modelId: string;
  modelUrl: string;
  tokenizerUrl: string;
  vaeUrl: string;
  unetUrl: string;
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

export interface ProgressUpdate {
  stage: GenerationStage;
  progress: number;
  message: string;
}

export interface FiveMConfig {
  theme: string;
  icons: Record<string, string>;
}
