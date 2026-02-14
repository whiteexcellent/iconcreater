// src/lib/image-generation/index.ts
// Main exports for image generation module

export type { 
  GenerationOptions, 
  GenerationResult,
  BackendCapabilities,
  ModelConfig,
  BackendType 
} from './types';

export { BaseGenerator } from './types';
export { detectCapabilities, getRecommendedBackend } from './detector';
export { ImageGenerationManager, getImageGenerationManager, resetImageGenerationManager } from './manager';
export { getModelCache } from './cache';

// AI Generators - loaded dynamically from CDN
export { WebNNGenerator } from './generators/webnn-sd15';
export { ButtermanGenerator } from './generators/butterman-xs';
export { TransformersGenerator } from './generators/transformers-janus';
export { SVGFallbackGenerator } from './generators/svg-fallback';

// Dynamic loader utilities
export { 
  CDN_MODELS, 
  loadONNXRuntime, 
  loadTransformers,
  checkCDNAvailability 
} from './dynamic-loader';
