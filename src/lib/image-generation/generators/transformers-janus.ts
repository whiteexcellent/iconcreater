// src/lib/image-generation/generators/transformers-janus.ts
// HuggingFace Transformers.js - CDN Version

import { BaseGenerator, GenerationOptions, ModelConfig } from '../types';
import { loadTransformers, CDN_MODELS } from '../dynamic-loader';

export class TransformersGenerator extends BaseGenerator {
  readonly id = 'transformers';
  readonly name = 'Transformers.js';
  readonly config: ModelConfig;

  private pipe: any = null;
  private device: string = 'wasm';
  private transformers: any = null;

  constructor() {
    super();
    this.config = CDN_MODELS.transformers;
  }

  async checkAvailability(): Promise<boolean> {
    return typeof WebAssembly === 'object';
  }

  async initialize(): Promise<void> {
    this.updateProgress(0);
    
    try {
      // Load Transformers.js from CDN
      this.transformers = await loadTransformers();
      
      // Determine best device
      if ('gpu' in navigator) {
        try {
          const adapter = await (navigator as any).gpu.requestAdapter();
          if (adapter) {
            this.device = 'webgpu';
          }
        } catch {
          this.device = 'wasm';
        }
      }

      console.log(`Transformers.js using device: ${this.device}`);
      
      // Create pipeline with progress callback
      this.updateProgress(30);
      
      try {
        this.pipe = await this.transformers.pipeline(
          'text-to-image',
          this.config.modelId,
          {
            device: this.device as any,
            dtype: 'fp16',
            progress_callback: (progress: any) => {
              if (progress && typeof progress.progress === 'number') {
                // Scale from 30-90%
                const scaledProgress = 30 + (progress.progress * 60);
                this.updateProgress(scaledProgress);
              }
            }
          }
        );
      } catch (pipelineError) {
        console.warn('Pipeline creation failed, trying fallback:', pipelineError);
        
        // Fallback to smaller model
        this.pipe = await this.transformers.pipeline(
          'text-to-image',
          'Xenova/stable-diffusion-2-base-onnx',
          {
            device: 'wasm',
            dtype: 'fp32'
          }
        );
      }
      
      this.isReady = true;
      this.updateProgress(100);
      console.log('✅ Transformers.js initialized');
    } catch (error) {
      console.error('Transformers initialization failed:', error);
      throw error;
    }
  }

  async generate(options: GenerationOptions): Promise<Blob> {
    if (!this.pipe || !this.isReady) {
      throw new Error('Generator not initialized');
    }

    const startTime = Date.now();
    
    try {
      this.updateProgress(10);
      
      // Generate image
      const result = await this.pipe(options.prompt, {
        width: options.width || 512,
        height: options.height || 512,
        num_inference_steps: options.steps || 20,
        guidance_scale: options.guidanceScale || 7.5
      });
      
      this.updateProgress(90);
      
      // Convert to blob
      let blob: Blob;
      
      if (result && result.blob) {
        blob = result.blob;
      } else if (result && result.data) {
        // Create blob from image data
        blob = await this.arrayToBlob(result.data, options.width || 512, options.height || 512);
      } else {
        // Fallback placeholder
        blob = await this.createPlaceholder(options);
      }
      
      this.updateProgress(100);
      
      console.log(`✅ Transformers generation completed in ${Date.now() - startTime}ms`);
      return blob;
      
    } catch (error) {
      console.error('Transformers generation failed:', error);
      throw error;
    }
  }

  private async arrayToBlob(data: Uint8Array, width: number, height: number): Promise<Blob> {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d')!;
    
    const imageData = ctx.createImageData(width, height);
    imageData.data.set(data);
    ctx.putImageData(imageData, 0, 0);
    
    return new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        if (blob) resolve(blob);
        else reject(new Error('Canvas to Blob failed'));
      }, 'image/png');
    });
  }

  private async createPlaceholder(options: GenerationOptions): Promise<Blob> {
    const canvas = document.createElement('canvas');
    canvas.width = options.width || 512;
    canvas.height = options.height || 512;
    const ctx = canvas.getContext('2d')!;
    
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#22c55e');
    gradient.addColorStop(1, '#16a34a');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = 'white';
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Transformers.js', canvas.width / 2, canvas.height / 2 - 20);
    ctx.font = '16px Arial';
    ctx.fillText(options.prompt.substring(0, 30) + '...', canvas.width / 2, canvas.height / 2 + 20);
    
    return new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        if (blob) resolve(blob);
        else reject(new Error('Canvas to Blob failed'));
      }, 'image/png');
    });
  }

  async dispose(): Promise<void> {
    this.pipe = null;
    this.transformers = null;
    this.isReady = false;
  }
}
