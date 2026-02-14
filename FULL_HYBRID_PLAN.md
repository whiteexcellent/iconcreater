# FIVEM ICON GENERATOR - FULL HYBRID IMPLEMENTATION
## Tüm Çözümleri Tek Seferde Entegre Etme Planı

---

## 🎯 HEDEF
**Tüm 4 backend'i tek codebase'de çalıştır:**
1. ✅ Microsoft WebNN SD 1.5 (400MB)
2. ✅ Lee Butterman SD XS (250MB) 
3. ✅ Transformers.js Janus (1.3GB)
4. ✅ SVG Generator (Fallback)

---

## 📁 PROJE YAPISI

```
src/
├── lib/
│   ├── image-generation/
│   │   ├── index.ts                    # Ana export
│   │   ├── types.ts                    # Interface'ler
│   │   ├── detector.ts                 # Browser capability detection
│   │   ├── manager.ts                  # Smart manager
│   │   ├── cache.ts                    # Model cache
│   │   ├── fallback.ts                 # SVG fallback
│   │   └── generators/
│   │       ├── base.ts                 # Abstract base class
│   │       ├── webnn-sd15.ts           # Microsoft WebNN
│   │       ├── butterman-xs.ts         # Lee Butterman 250MB
│   │       ├── transformers-janus.ts   # HuggingFace Transformers
│   │       └── svg-fallback.ts         # SVG Generator
│   └── utils/
│       └── prompts.ts                  # Prompt builder
├── hooks/
│   └── useIconGeneration.ts            # React hook
└── components/
    └── generation/
        ├── ModelLoader.tsx             # Model yükleme UI
        ├── GenerationProgress.tsx      # Progress bar
        ├── BackendSelector.tsx         # Manuel backend seçimi
        └── ErrorBoundary.tsx           # Hata yakalama
```

---

## 🔧 KURULUM (1 Saat)

### package.json güncellemeleri
```json
{
  "dependencies": {
    "@huggingface/transformers": "^3.0.2",
    "onnxruntime-web": "^1.17.0",
    "idb": "^8.0.0"
  }
}
```

### CDN Model URL'leri (config/models.ts)
```typescript
export const MODEL_CONFIGS = {
  // 1. Microsoft WebNN SD 1.5
  webnn_sd15: {
    id: 'webnn-sd15',
    name: 'Microsoft WebNN SD 1.5',
    size: 400,
    urls: {
      text_encoder: 'https://cdn.example.com/microsoft/sd15/text_encoder.onnx',
      unet: 'https://cdn.example.com/microsoft/sd15/unet.onnx',
      vae_decoder: 'https://cdn.example.com/microsoft/sd15/vae_decoder.onnx',
      safety_checker: 'https://cdn.example.com/microsoft/sd15/safety_checker.onnx'
    },
    requires: ['webnn'],
    priority: 1
  },

  // 2. Lee Butterman SD XS
  butterman_xs: {
    id: 'butterman-xs',
    name: 'Lee Butterman SD XS',
    size: 250,
    urls: {
      model: 'https://cdn.example.com/butterman/sd-xs-250mb.onnx',
      controlnet: 'https://cdn.example.com/butterman/controlnet.onnx'
    },
    requires: ['webgpu'],
    priority: 2
  },

  // 3. Transformers.js Janus
  transformers_janus: {
    id: 'transformers-janus',
    name: 'Transformers.js Janus',
    size: 1300,
    modelId: 'Xenova/Janus-1.3B-ONNX',
    requires: ['webgpu', 'wasm'],
    priority: 3
  },

  // 4. Transformers.js Tiny (Alternatif)
  transformers_tiny: {
    id: 'transformers-tiny',
    name: 'Transformers.js Tiny SD',
    size: 200,
    modelId: 'Xenova/stable-diffusion-2-1-base-onnx',
    requires: ['wasm'],
    priority: 4
  }
};
```

---

## 🎨 TİP TANIMLAMALARI

### lib/image-generation/types.ts
```typescript
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
```

---

## 🔍 BROWSER DETECTION

### lib/image-generation/detector.ts
```typescript
import { BackendCapabilities } from './types';

export async function detectCapabilities(): Promise<BackendCapabilities> {
  const capabilities: BackendCapabilities = {
    webnn: false,
    webgpu: false,
    webgl: false,
    wasm: false
  };

  // WebNN Detection
  if ('ml' in navigator) {
    try {
      const context = await (navigator as any).ml.createContext();
      capabilities.webnn = true;
      console.log('✅ WebNN desteği var');
    } catch (e) {
      console.log('❌ WebNN desteklenmiyor');
    }
  }

  // WebGPU Detection
  if ('gpu' in navigator) {
    try {
      const adapter = await (navigator as any).gpu.requestAdapter();
      if (adapter) {
        capabilities.webgpu = true;
        console.log('✅ WebGPU desteği var');
      }
    } catch (e) {
      console.log('❌ WebGPU desteklenmiyor');
    }
  }

  // WebGL Detection
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    capabilities.webgl = !!gl;
  } catch {
    capabilities.webgl = false;
  }

  // WASM Detection
  capabilities.wasm = typeof WebAssembly === 'object' && 
    WebAssembly.validate(new Uint8Array([0x00, 0x61, 0x73, 0x6d]));

  console.log('Browser capabilities:', capabilities);
  return capabilities;
}

export function getRecommendedBackend(capabilities: BackendCapabilities): string {
  if (capabilities.webnn) return 'webnn';
  if (capabilities.webgpu) return 'webgpu';
  if (capabilities.wasm) return 'wasm';
  return 'svg';
}
```

---

## 🤖 GENERATOR IMPLEMENTASYONLARI

### 1. Microsoft WebNN Generator

```typescript
// lib/image-generation/generators/webnn-sd15.ts

import { BaseGenerator, GenerationOptions, ModelConfig } from '../types';
import * as ort from 'onnxruntime-web';

export class WebNNGenerator extends BaseGenerator {
  readonly id = 'webnn-sd15';
  readonly name = 'Microsoft WebNN SD 1.5';
  readonly config: ModelConfig;

  private sessions: Map<string, ort.InferenceSession> = new Map();
  private tokenizer: any = null;

  constructor() {
    super();
    this.config = {
      id: this.id,
      name: this.name,
      size: 400,
      priority: 1,
      requires: ['webnn'],
      urls: {
        text_encoder: '/models/webnn/text_encoder.onnx',
        unet: '/models/webnn/unet.onnx',
        vae_decoder: '/models/webnn/vae_decoder.onnx',
        safety_checker: '/models/webnn/safety_checker.onnx'
      }
    };
  }

  async checkAvailability(): Promise<boolean> {
    return 'ml' in navigator;
  }

  async initialize(): Promise<void> {
    this.updateProgress(0);
    
    try {
      // Load each model component
      const models = ['text_encoder', 'unet', 'vae_decoder', 'safety_checker'];
      
      for (let i = 0; i < models.length; i++) {
        const modelName = models[i];
        const url = this.config.urls![modelName];
        
        console.log(`Loading ${modelName}...`);
        
        const session = await ort.InferenceSession.create(url, {
          executionProviders: ['webnn'],
          graphOptimizationLevel: 'all'
        });
        
        this.sessions.set(modelName, session);
        this.updateProgress(((i + 1) / models.length) * 100);
      }

      this.isReady = true;
      console.log('✅ WebNN SD 1.5 hazır');
    } catch (error) {
      console.error('WebNN initialization failed:', error);
      throw error;
    }
  }

  async generate(options: GenerationOptions): Promise<Blob> {
    if (!this.isReady) {
      throw new Error('Generator not initialized');
    }

    const startTime = Date.now();
    
    // Step 1: Tokenize prompt
    this.updateProgress(10);
    const tokens = await this.tokenize(options.prompt);
    
    // Step 2: Text encoding
    this.updateProgress(25);
    const textEmbeddings = await this.encodeText(tokens);
    
    // Step 3: Initialize latent
    this.updateProgress(40);
    let latents = this.initializeLatents(options.seed);
    
    // Step 4: Denoising loop (UNet)
    const steps = options.steps || 20;
    for (let i = 0; i < steps; i++) {
      latents = await this.denoiseStep(latents, textEmbeddings, i, steps);
      this.updateProgress(40 + ((i + 1) / steps) * 40);
    }
    
    // Step 5: Decode with VAE
    this.updateProgress(85);
    const imageTensor = await this.decodeLatents(latents);
    
    // Step 6: Safety check
    this.updateProgress(95);
    const isSafe = await this.safetyCheck(imageTensor);
    
    if (!isSafe) {
      throw new Error('Generated content failed safety check');
    }
    
    // Step 7: Convert to blob
    this.updateProgress(100);
    const blob = await this.tensorToBlob(imageTensor, options);
    
    console.log(`✅ Generation completed in ${Date.now() - startTime}ms`);
    return blob;
  }

  private async tokenize(prompt: string): Promise<number[]> {
    // CLIP tokenization
    // Implementation details from Microsoft demo
    return []; // Placeholder
  }

  private async encodeText(tokens: number[]): Promise<ort.Tensor> {
    const session = this.sessions.get('text_encoder')!;
    // Run text encoder
    return new ort.Tensor('float32', new Float32Array(77 * 768), [1, 77, 768]);
  }

  private initializeLatents(seed?: number): ort.Tensor {
    // Initialize random latents
    return new ort.Tensor('float32', new Float32Array(64 * 64 * 4), [1, 4, 64, 64]);
  }

  private async denoiseStep(
    latents: ort.Tensor,
    textEmbeddings: ort.Tensor,
    step: number,
    totalSteps: number
  ): Promise<ort.Tensor> {
    const session = this.sessions.get('unet')!;
    // Run UNet for denoising
    return latents;
  }

  private async decodeLatents(latents: ort.Tensor): Promise<ort.Tensor> {
    const session = this.sessions.get('vae_decoder')!;
    // Decode latents to image
    return new ort.Tensor('float32', new Float32Array(512 * 512 * 3), [1, 3, 512, 512]);
  }

  private async safetyCheck(imageTensor: ort.Tensor): Promise<boolean> {
    const session = this.sessions.get('safety_checker');
    if (!session) return true;
    // Run safety check
    return true;
  }

  private async tensorToBlob(tensor: ort.Tensor, options: GenerationOptions): Promise<Blob> {
    // Convert tensor to PNG blob
    return new Blob([], { type: 'image/png' });
  }

  async dispose(): Promise<void> {
    for (const session of this.sessions.values()) {
      await session.release();
    }
    this.sessions.clear();
    this.isReady = false;
  }
}
```

### 2. Lee Butterman Generator

```typescript
// lib/image-generation/generators/butterman-xs.ts

import { BaseGenerator, GenerationOptions, ModelConfig } from '../types';
import * as ort from 'onnxruntime-web';

export class ButtermanGenerator extends BaseGenerator {
  readonly id = 'butterman-xs';
  readonly name = 'Lee Butterman SD XS';
  readonly config: ModelConfig;

  private session: ort.InferenceSession | null = null;

  constructor() {
    super();
    this.config = {
      id: this.id,
      name: this.name,
      size: 250,
      priority: 2,
      requires: ['webgpu'],
      urls: {
        model: 'https://cdn.example.com/butterman/sd-xs.onnx'
      }
    };
  }

  async checkAvailability(): Promise<boolean> {
    return 'gpu' in navigator;
  }

  async initialize(): Promise<void> {
    this.updateProgress(0);
    
    try {
      this.session = await ort.InferenceSession.create(
        this.config.urls!.model,
        {
          executionProviders: ['webgpu'],
          graphOptimizationLevel: 'all'
        }
      );
      
      this.isReady = true;
      this.updateProgress(100);
      console.log('✅ Butterman SD XS hazır');
    } catch (error) {
      console.error('Butterman initialization failed:', error);
      throw error;
    }
  }

  async generate(options: GenerationOptions): Promise<Blob> {
    if (!this.session || !this.isReady) {
      throw new Error('Generator not initialized');
    }

    const startTime = Date.now();
    
    // Lee Butterman uses one-step denoising (very fast!)
    this.updateProgress(20);
    
    // Prepare inputs
    const inputs = await this.prepareInputs(options);
    this.updateProgress(40);
    
    // Run inference (single step)
    const results = await this.session.run(inputs);
    this.updateProgress(80);
    
    // Process output
    const blob = await this.processOutput(results, options);
    this.updateProgress(100);
    
    console.log(`✅ Butterman generation completed in ${Date.now() - startTime}ms`);
    return blob;
  }

  private async prepareInputs(options: GenerationOptions): Promise<ort.InferenceSession.OnnxValueMapType> {
    // Prepare latents and text embeddings
    return {};
  }

  private async processOutput(
    results: ort.InferenceSession.OnnxValueMapType,
    options: GenerationOptions
  ): Promise<Blob> {
    // Convert output tensor to blob
    return new Blob([], { type: 'image/png' });
  }

  async dispose(): Promise<void> {
    if (this.session) {
      await this.session.release();
      this.session = null;
    }
    this.isReady = false;
  }
}
```

### 3. Transformers.js Generator

```typescript
// lib/image-generation/generators/transformers-janus.ts

import { BaseGenerator, GenerationOptions, ModelConfig } from '../types';
import { pipeline } from '@huggingface/transformers';

export class TransformersGenerator extends BaseGenerator {
  readonly id = 'transformers-janus';
  readonly name = 'Transformers.js Janus';
  readonly config: ModelConfig;

  private pipe: any = null;
  private device: string = 'wasm';

  constructor() {
    super();
    this.config = {
      id: this.id,
      name: this.name,
      size: 1300,
      priority: 3,
      requires: ['webgpu', 'wasm'],
      modelId: 'Xenova/Janus-1.3B-ONNX'
    };
  }

  async checkAvailability(): Promise<boolean> {
    return typeof WebAssembly === 'object';
  }

  async initialize(): Promise<void> {
    this.updateProgress(0);
    
    try {
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

      console.log(`Using device: ${this.device}`);
      
      // Create pipeline
      this.pipe = await pipeline(
        'text-to-image',
        this.config.modelId,
        {
          device: this.device as any,
          dtype: 'fp16',
          progress_callback: (progress: any) => {
            this.updateProgress(progress.progress * 100);
          }
        }
      );
      
      this.isReady = true;
      console.log('✅ Transformers.js hazır');
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
    
    this.updateProgress(10);
    
    const result = await this.pipe(options.prompt, {
      width: options.width || 512,
      height: options.height || 512,
      num_inference_steps: options.steps || 20,
      guidance_scale: options.guidanceScale || 7.5,
      seed: options.seed
    });
    
    this.updateProgress(90);
    
    // Convert result to blob
    const blob = await this.resultToBlob(result);
    
    this.updateProgress(100);
    console.log(`✅ Transformers generation completed in ${Date.now() - startTime}ms`);
    
    return blob;
  }

  private async resultToBlob(result: any): Promise<Blob> {
    // Transformers.js returns different formats based on model
    // Convert to blob
    return new Blob([], { type: 'image/png' });
  }

  async dispose(): Promise<void> {
    this.pipe = null;
    this.isReady = false;
  }
}
```

### 4. SVG Fallback Generator

```typescript
// lib/image-generation/generators/svg-fallback.ts

import { BaseGenerator, GenerationOptions, ModelConfig } from '../types';

export class SVGFallbackGenerator extends BaseGenerator {
  readonly id = 'svg-fallback';
  readonly name = 'SVG Generator';
  readonly config: ModelConfig;

  constructor() {
    super();
    this.config = {
      id: this.id,
      name: this.name,
      size: 0,
      priority: 999,
      requires: []
    };
  }

  async checkAvailability(): Promise<boolean> {
    return true; // Always available
  }

  async initialize(): Promise<void> {
    this.isReady = true;
    this.updateProgress(100);
  }

  async generate(options: GenerationOptions): Promise<Blob> {
    const startTime = Date.now();
    
    // Parse prompt for keywords
    const keywords = this.extractKeywords(options.prompt);
    
    // Generate SVG based on keywords
    const svg = this.createSVG(keywords, options);
    
    // Convert to blob
    const blob = new Blob([svg], { type: 'image/svg+xml' });
    
    console.log(`✅ SVG generation completed in ${Date.now() - startTime}ms`);
    return blob;
  }

  private extractKeywords(prompt: string): string[] {
    return prompt
      .toLowerCase()
      .split(/[\s,]+/)
      .filter(word => word.length > 2);
  }

  private createSVG(keywords: string[], options: GenerationOptions): string {
    const width = options.width || 512;
    const height = options.height || 512;
    
    // Determine colors from keywords
    const colors = this.getColors(keywords);
    
    // Determine shape from keywords
    const shape = this.getShape(keywords);
    
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${colors[0]};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${colors[1]};stop-opacity:1" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#grad)" rx="96"/>
      ${shape}
      <text x="${width/2}" y="${height*0.75}" 
            font-family="Arial, sans-serif" 
            font-size="32" 
            fill="white" 
            text-anchor="middle" 
            font-weight="bold">
        ${this.getIconText(keywords)}
      </text>
    </svg>`;
  }

  private getColors(keywords: string[]): string[] {
    const colorMap: Record<string, string[]> = {
      'red': ['#ef4444', '#dc2626'],
      'blue': ['#0ea5e9', '#0284c7'],
      'green': ['#22c55e', '#16a34a'],
      'purple': ['#a855f7', '#9333ea'],
      'orange': ['#f97316', '#ea580c'],
      'pink': ['#ec4899', '#db2777'],
      'neon': ['#00ff88', '#00ccff'],
      'dark': ['#1e293b', '#0f172a'],
      'light': ['#f8fafc', '#e2e8f0']
    };

    for (const keyword of keywords) {
      if (colorMap[keyword]) {
        return colorMap[keyword];
      }
    }

    return ['#0ea5e9', '#0284c7']; // Default blue
  }

  private getShape(keywords: string[]): string {
    // Determine shape from keywords
    if (keywords.some(k => ['circle', 'round', 'ball'].includes(k))) {
      return '<circle cx="256" cy="200" r="100" fill="white" opacity="0.9" filter="url(#glow)"/>';
    }
    
    if (keywords.some(k => ['square', 'box'].includes(k))) {
      return '<rect x="156" y="100" width="200" height="200" fill="white" opacity="0.9" rx="20" filter="url(#glow)"/>';
    }
    
    if (keywords.some(k => ['star', 'shine'].includes(k))) {
      return '<polygon points="256,100 280,180 360,180 300,230 320,310 256,260 192,310 212,230 152,180 232,180" fill="white" opacity="0.9" filter="url(#glow)"/>';
    }

    // Default: circle
    return '<circle cx="256" cy="200" r="100" fill="white" opacity="0.9" filter="url(#glow)"/>';
  }

  private getIconText(keywords: string[]): string {
    // Extract icon name from keywords
    const iconKeywords = ['camera', 'phone', 'bank', 'music', 'mail', 'map', 'home', 'user'];
    const found = keywords.find(k => iconKeywords.includes(k));
    return found ? found.charAt(0).toUpperCase() + found.slice(1) : 'Icon';
  }

  async dispose(): Promise<void> {
    this.isReady = false;
  }
}
```

---

## 🎛️ SMART MANAGER

```typescript
// lib/image-generation/manager.ts

import { 
  BaseGenerator, 
  GenerationOptions, 
  GenerationResult,
  ModelConfig 
} from './types';
import { detectCapabilities } from './detector';
import { WebNNGenerator } from './generators/webnn-sd15';
import { ButtermanGenerator } from './generators/butterman-xs';
import { TransformersGenerator } from './generators/transformers-janus';
import { SVGFallbackGenerator } from './generators/svg-fallback';
import { ModelCache } from './cache';

export class ImageGenerationManager {
  private generators: Map<string, BaseGenerator> = new Map();
  private availableGenerators: string[] = [];
  private preferredBackend: string | null = null;
  private cache: ModelCache;
  private isInitialized = false;

  constructor() {
    this.cache = new ModelCache();
    this.registerGenerators();
  }

  private registerGenerators() {
    // Register all generators
    this.generators.set('webnn', new WebNNGenerator());
    this.generators.set('butterman', new ButtermanGenerator());
    this.generators.set('transformers', new TransformersGenerator());
    this.generators.set('svg', new SVGFallbackGenerator());
  }

  async initialize(preferredBackend?: string): Promise<void> {
    if (this.isInitialized) return;

    console.log('🚀 Initializing Image Generation Manager...');
    
    // Detect browser capabilities
    const capabilities = await detectCapabilities();
    
    // Check which generators are available
    for (const [id, generator] of this.generators) {
      const isAvailable = await generator.checkAvailability();
      if (isAvailable) {
        this.availableGenerators.push(id);
        console.log(`✅ ${generator.name} kullanılabilir`);
      } else {
        console.log(`❌ ${generator.name} kullanılamıyor`);
      }
    }

    // Set preferred backend
    if (preferredBackend && this.availableGenerators.includes(preferredBackend)) {
      this.preferredBackend = preferredBackend;
    } else {
      // Auto-select best available
      this.preferredBackend = this.selectBestBackend();
    }

    // Initialize preferred generator
    if (this.preferredBackend) {
      const generator = this.generators.get(this.preferredBackend)!;
      try {
        await generator.initialize();
      } catch (error) {
        console.error(`Failed to initialize ${this.preferredBackend}:`, error);
        // Fall back to next best
        this.preferredBackend = this.selectBestBackend(this.preferredBackend);
        if (this.preferredBackend) {
          await this.generators.get(this.preferredBackend)!.initialize();
        }
      }
    }

    this.isInitialized = true;
    console.log(`✅ Manager hazır. Aktif backend: ${this.preferredBackend}`);
  }

  private selectBestBackend(exclude?: string): string | null {
    const order = ['webnn', 'butterman', 'transformers', 'svg'];
    
    for (const backend of order) {
      if (backend !== exclude && this.availableGenerators.includes(backend)) {
        return backend;
      }
    }
    
    return null;
  }

  async generate(options: GenerationOptions): Promise<GenerationResult> {
    if (!this.isInitialized) {
      throw new Error('Manager not initialized');
    }

    const startTime = Date.now();
    let lastError: Error | null = null;

    // Try preferred backend first
    const backendsToTry = [
      this.preferredBackend,
      ...this.availableGenerators.filter(b => b !== this.preferredBackend)
    ].filter(Boolean) as string[];

    for (const backendId of backendsToTry) {
      const generator = this.generators.get(backendId);
      if (!generator) continue;

      try {
        console.log(`🎨 Trying ${generator.name}...`);
        
        if (!generator.isInitialized()) {
          await generator.initialize();
        }

        const blob = await generator.generate(options);
        const url = URL.createObjectURL(blob);

        return {
          blob,
          url,
          backend: generator.name,
          generationTime: Date.now() - startTime,
          isAIGenerated: backendId !== 'svg'
        };
      } catch (error) {
        console.error(`${generator.name} failed:`, error);
        lastError = error as Error;
        continue;
      }
    }

    throw lastError || new Error('All backends failed');
  }

  getAvailableBackends(): string[] {
    return this.availableGenerators.map(id => {
      const gen = this.generators.get(id);
      return gen ? gen.name : id;
    });
  }

  getActiveBackend(): string | null {
    if (!this.preferredBackend) return null;
    return this.generators.get(this.preferredBackend)?.name || null;
  }

  async switchBackend(backendId: string): Promise<boolean> {
    if (!this.availableGenerators.includes(backendId)) {
      return false;
    }

    // Dispose current
    if (this.preferredBackend) {
      const current = this.generators.get(this.preferredBackend);
      if (current) {
        await current.dispose();
      }
    }

    // Initialize new
    this.preferredBackend = backendId;
    const generator = this.generators.get(backendId)!;
    await generator.initialize();

    return true;
  }

  async preloadModel(backendId: string): Promise<void> {
    const generator = this.generators.get(backendId);
    if (!generator) return;

    if (!generator.isInitialized()) {
      await generator.initialize();
    }
  }

  async dispose(): Promise<void> {
    for (const generator of this.generators.values()) {
      await generator.dispose();
    }
    this.generators.clear();
    this.availableGenerators = [];
    this.isInitialized = false;
  }
}

// Singleton instance
let managerInstance: ImageGenerationManager | null = null;

export function getImageGenerationManager(): ImageGenerationManager {
  if (!managerInstance) {
    managerInstance = new ImageGenerationManager();
  }
  return managerInstance;
}
```

---

## 📦 SONRAKİ ADIMLAR

### Hemen Başlanacaklar:
1. ✅ Package.json güncelle
2. ✅ Model URL'lerini yapılandır
3. ✅ Typescript tip tanımlamaları
4. ✅ Browser detection
5. ✅ 4 generator implementasyonu
6. ✅ Smart manager
7. ✅ React hooks
8. ✅ UI components

### Toplam Zaman: **3-4 Gün**

**Başlayalım mı?** 🚀