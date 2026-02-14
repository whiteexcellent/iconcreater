// src/lib/image-generation/types.ts
// Type definitions for browser-based AI image generation

export interface GenerationOptions {
  prompt: string;
  width?: number;
  height?: number;
  steps?: number;
  guidanceScale?: number;
  seed?: number;
  negativePrompt?: string;
}

export interface GenerationResult {
  blob: Blob;
  url: string;
  backend: string;
  generationTime: number;
  isAIGenerated: boolean;
}

export interface BackendCapabilities {
  webnn: boolean;
  webgpu: boolean;
  webgl: boolean;
  wasm: boolean;
}

export interface ModelConfig {
  id: string;
  name: string;
  size: number;
  priority: number;
  requires: string[];
  urls?: Record<string, string>;
  modelId?: string;
}

export abstract class BaseGenerator {
  abstract readonly id: string;
  abstract readonly name: string;
  abstract readonly config: ModelConfig;
  
  protected progress: number = 0;
  protected isReady: boolean = false;
  protected onProgressCallback?: (progress: number) => void;

  abstract checkAvailability(): Promise<boolean>;
  abstract initialize(): Promise<void>;
  abstract generate(options: GenerationOptions): Promise<Blob>;
  abstract dispose(): Promise<void>;

  setProgressCallback(callback: (progress: number) => void) {
    this.onProgressCallback = callback;
  }

  protected updateProgress(value: number) {
    this.progress = value;
    this.onProgressCallback?.(value);
  }

  getProgress(): number {
    return this.progress;
  }

  isInitialized(): boolean {
    return this.isReady;
  }
}

export type BackendType = 'webnn' | 'webgpu' | 'wasm' | 'svg';
