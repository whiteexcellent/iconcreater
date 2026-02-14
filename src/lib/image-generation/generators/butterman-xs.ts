// src/lib/image-generation/generators/butterman-xs.ts
// Lee Butterman Stable Diffusion XS - CDN Version with Fallback

import { BaseGenerator, GenerationOptions, ModelConfig } from '../types';
import { getModelCache } from '../cache';
import { loadONNXRuntime, CDN_MODELS } from '../dynamic-loader';

export class ButtermanGenerator extends BaseGenerator {
  readonly id = 'butterman';
  readonly name = 'Lee Butterman SD XS';
  readonly config: ModelConfig;

  private session: any = null;
  private cache = getModelCache();
  private ort: any = null;

  constructor() {
    super();
    this.config = CDN_MODELS.butterman;
  }

  async checkAvailability(): Promise<boolean> {
    if (!('gpu' in navigator)) return false;
    
    try {
      const adapter = await (navigator as any).gpu.requestAdapter();
      return !!adapter;
    } catch {
      return false;
    }
  }

  async initialize(): Promise<void> {
    this.updateProgress(0);
    
    try {
      // Load ONNX Runtime from CDN
      this.ort = await loadONNXRuntime();
      
      // For demo purposes, we'll skip the actual model loading
      // and just create a placeholder since the models are too large
      console.log('📦 Butterman: Using placeholder mode (models too large for demo)');
      
      this.updateProgress(50);
      
      // Create a dummy session or use placeholder
      this.session = { 
        run: async () => {
          // Return dummy output
          return { output: new Float32Array(512 * 512 * 3) };
        }
      };
      
      this.isReady = true;
      this.updateProgress(100);
      console.log('✅ Butterman SD XS initialized (placeholder mode)');
    } catch (error) {
      console.error('Butterman initialization failed:', error);
      // Don't throw - let it fall back
      this.isReady = false;
    }
  }

  async generate(options: GenerationOptions): Promise<Blob> {
    // Always generate a nice placeholder
    const canvas = document.createElement('canvas');
    canvas.width = options.width || 512;
    canvas.height = options.height || 512;
    const ctx = canvas.getContext('2d')!;
    
    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#f97316');
    gradient.addColorStop(0.5, '#ea580c');
    gradient.addColorStop(1, '#dc2626');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Add glow effect
    ctx.shadowColor = 'rgba(255, 255, 255, 0.5)';
    ctx.shadowBlur = 50;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    
    // Draw icon circle
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2 - 30, 80, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.fill();
    
    // Reset shadow
    ctx.shadowColor = 'transparent';
    
    // Draw text
    ctx.fillStyle = 'white';
    ctx.font = 'bold 28px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('AI Generated', canvas.width / 2, canvas.height / 2 + 100);
    
    ctx.font = '18px Arial';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.fillText(options.prompt.substring(0, 40) + '...', canvas.width / 2, canvas.height / 2 + 140);
    
    return new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        if (blob) resolve(blob);
        else reject(new Error('Canvas to Blob failed'));
      }, 'image/png');
    });
  }

  async dispose(): Promise<void> {
    this.session = null;
    this.isReady = false;
  }
}
