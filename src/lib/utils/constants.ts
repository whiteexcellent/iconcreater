import { AIConfig } from '@/types';

// Model configuration for browser-based AI
export const AI_MODELS: Record<string, AIConfig> = {
  // Lightweight model for fast generation
  'sd-turbo': {
    modelId: 'stabilityai/sd-turbo',
    modelUrl: 'https://huggingface.co/stabilityai/sd-turbo/resolve/main/unet/model.onnx',
    tokenizerUrl: 'https://huggingface.co/stabilityai/sd-turbo/resolve/main/tokenizer',
    vaeUrl: 'https://huggingface.co/stabilityai/sd-turbo/resolve/main/vae_decoder/model.onnx',
    unetUrl: 'https://huggingface.co/stabilityai/sd-turbo/resolve/main/unet/model.onnx'
  },
  // Standard SD 1.5 (smaller variant)
  'sd-1.5-small': {
    modelId: 'segmind/small-sd',
    modelUrl: 'https://huggingface.co/segmind/small-sd/resolve/main/unet/model.onnx',
    tokenizerUrl: 'https://huggingface.co/segmind/small-sd/resolve/main/tokenizer',
    vaeUrl: 'https://huggingface.co/segmind/small-sd/resolve/main/vae_decoder/model.onnx',
    unetUrl: 'https://huggingface.co/segmind/small-sd/resolve/main/unet/model.onnx'
  }
};

export const DEFAULT_MODEL = 'sd-turbo';

// Generation settings
export const GENERATION_CONFIG = {
  defaultResolution: 512,
  minResolution: 256,
  maxResolution: 768,
  defaultSteps: 4, // Turbo uses 4 steps
  minSteps: 1,
  maxSteps: 50,
  defaultGuidanceScale: 0.0, // Turbo doesn't use guidance
  maxGuidanceScale: 20,
  defaultSeed: -1, // Random
};

// Cache settings
export const CACHE_CONFIG = {
  dbName: 'FiveMIconGenerator',
  storeName: 'generations',
  version: 1,
  maxCacheSize: 100, // Max 100 cached results
  expirationTime: 30 * 24 * 60 * 60 * 1000, // 30 days in ms
};

// Model download settings
export const DOWNLOAD_CONFIG = {
  chunkSize: 1024 * 1024, // 1MB chunks for progress tracking
  retryAttempts: 3,
  retryDelay: 1000, // 1 second
  timeout: 300000, // 5 minutes
};

// UI Settings
export const UI_CONFIG = {
  maxCustomPromptLength: 100,
  animationDuration: 300,
  toastDuration: 4000,
  debounceDelay: 300,
};

// SVG optimization settings
export const SVG_CONFIG = {
  viewBox: '0 0 512 512',
  width: '512',
  height: '512',
  potrace: {
    turnPolicy: 'minority',
    turdSize: 4,
    alphaMax: 1.0,
    curveThreshold: 0.5,
    optTolerance: 0.2,
  }
};

// FiveM integration
export const FIVEM_CONFIG = {
  resourceName: 'fivem-icon-generator',
  configFileName: 'config.lua',
  iconFolder: 'assets/icons',
};
