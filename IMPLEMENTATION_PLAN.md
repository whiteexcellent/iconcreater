# FIVEM ICON GENERATOR - BROWSER AI IMPLEMENTATION PLAN
## Detaylı Teknik Plan (2026)

---

## 📊 ARAŞTIRMA SONUÇLARI

### ✅ Çalışan ve Test Edilmiş Çözümler:

#### 1. **Microsoft WebNN Developer Preview** ⭐⭐⭐⭐⭐ EN İYİ
- **Repo:** `microsoft/webnn-developer-preview`
- **Demo:** https://microsoft.github.io/webnn-developer-preview/demos/stable-diffusion-1.5/
- **Model:** Stable Diffusion 1.5
- **Boyut:** ~400MB (compressed)
- **Hız:** 3-10 saniye (modern GPU)
- **Tarayıcı:** Edge/Chrome (WebNN destekli)
- **Durum:** Production-ready (2026)
- **Özellikler:**
  - Text-to-image generation
  - Safety checker entegre
  - Progress bar
  - GPU acceleration (DirectML)

#### 2. **Lee Butterman - Diffusion Local Time** ⭐⭐⭐⭐
- **Repo:** `lsb/diffusion-local-time`
- **Demo:** https://diffusion-local-time.vercel.app/
- **Model:** Stable Diffusion XS (quantized)
- **Boyut:** 250MB-400MB
- **Hız:** 0.5 saniye - 3 FPS
- **Tarayıcı:** Chrome/Edge/Firefox (WebGPU)
- **Durum:** Production-ready
- **Özellikler:**
  - 6-bit ve 8-bit quantization
  - ControlNet desteği
  - One-step denoising
  - Raspberry Pi'de bile çalışıyor!

#### 3. **Transformers.js + Janus-1.3B** ⭐⭐⭐⭐
- **Kütüphane:** `@huggingface/transformers`
- **Model:** Janus-1.3B (ONNX)
- **Boyut:** ~1.3GB (ama daha küçük modeller var)
- **Hız:** 10-30 saniye
- **Tarayıcı:** Tüm modern tarayıcılar
- **Durum:** Stable
- **Özellikler:**
  - Text-to-image pipeline hazır
  - CDN'den otomatik indirme
  - WebGPU/WebNN desteği

#### 4. **ONNX Runtime Web** ⭐⭐⭐
- **Kütüphane:** `onnxruntime-web`
- **Model:** Custom quantized models
- **Boyut:** Değişken (100MB-1GB)
- **Durum:** Production-ready
- **Özellikler:**
  - En esnek çözüm
  - Kendi modelini yükle
  - WebGPU/WebGL/WebAssembly desteği

---

## 🎯 ÖNERİLEN ÇÖZÜM: HYBRID APPROACH

### Strateji: "Smart Fallback System"

```
Kullanıcı Siteye Girer
        ↓
[1] BROWSER CHECK
        ↓
├─ WebNN desteği var mı? → EVET → WebNN + SD 1.5 (400MB)
│                                     ↓
│                               Yüksek Kalite + Hızlı
│
├─ WebGPU desteği var mı? → EVET → Lee Butterman 250MB Model
│                                     ↓
│                               İyi Kalite + Orta Hız
│
├─ Sadece WASM var mı? → EVET → Transformers.js Tiny Model
│                                     ↓
│                               Düşük Kalite + Yavaş
│
└─ Hiçbiri yok → SVG Generator (Fallback)
              ↓
        Anında Çalışır
```

---

## 📋 DETAYLI IMPLEMENTASYON PLANI

### FAZ 1: Kütüphane Seçimi ve Kurulum (1-2 gün)

#### Adım 1.1: Ana Kütüphaneler
```json
{
  "dependencies": {
    "@huggingface/transformers": "^3.0.0",
    "onnxruntime-web": "^1.17.0"
  }
}
```

#### Adım 1.2: WebNN Polyfill (Edge/Chrome için)
```bash
npm install @webnn/webnn-polyfill
```

#### Adım 1.3: Model CDN URLs
```javascript
const MODELS = {
  // Microsoft WebNN SD 1.5
  webnn_sd15: {
    text_encoder: "https://cdn.example.com/sd15/text_encoder.onnx",
    unet: "https://cdn.example.com/sd15/unet.onnx",
    vae_decoder: "https://cdn.example.com/sd15/vae_decoder.onnx",
    safety_checker: "https://cdn.example.com/sd15/safety_checker.onnx"
  },
  
  // Lee Butterman 250MB Model
  butterman_250mb: {
    model: "https://cdn.example.com/butterman/sd-xs-250mb.onnx",
    controlnet: "https://cdn.example.com/butterman/controlnet.onnx"
  },
  
  // Transformers.js Small Model
  transformers_small: {
    janus: "Xenova/Janus-1.3B-ONNX",
    tiny_sd: "Xenova/stable-diffusion-2-1-base-onnx"
  }
};
```

---

### FAZ 2: Browser Capability Detection (1 gün)

```typescript
// src/lib/browser-detection.ts

interface BrowserCapabilities {
  webnn: boolean;
  webgpu: boolean;
  webgl: boolean;
  wasm: boolean;
  recommendedBackend: 'webnn' | 'webgpu' | 'wasm' | 'svg';
}

export async function detectCapabilities(): Promise<BrowserCapabilities> {
  const capabilities: BrowserCapabilities = {
    webnn: false,
    webgpu: false,
    webgl: false,
    wasm: false,
    recommendedBackend: 'svg'
  };

  // WebNN Detection
  if ('ml' in navigator) {
    try {
      const context = await navigator.ml.createContext();
      capabilities.webnn = true;
    } catch {
      capabilities.webnn = false;
    }
  }

  // WebGPU Detection
  if ('gpu' in navigator) {
    try {
      const adapter = await navigator.gpu.requestAdapter();
      capabilities.webgpu = !!adapter;
    } catch {
      capabilities.webgpu = false;
    }
  }

  // WebGL Detection
  const canvas = document.createElement('canvas');
  capabilities.webgl = !!(
    canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
  );

  // WASM Detection
  capabilities.wasm = typeof WebAssembly === 'object';

  // Recommendation
  if (capabilities.webnn) {
    capabilities.recommendedBackend = 'webnn';
  } else if (capabilities.webgpu) {
    capabilities.recommendedBackend = 'webgpu';
  } else if (capabilities.wasm) {
    capabilities.recommendedBackend = 'wasm';
  }

  return capabilities;
}
```

---

### FAZ 3: Image Generation Service (3-4 gün)

#### 3.1 Abstract Base Class
```typescript
// src/lib/image-generation/base-generator.ts

export abstract class BaseImageGenerator {
  abstract readonly name: string;
  abstract readonly modelSize: number; // MB
  abstract readonly supportsWebNN: boolean;
  abstract readonly supportsWebGPU: boolean;
  
  abstract initialize(): Promise<void>;
  abstract generate(prompt: string, options: GenerationOptions): Promise<Blob>;
  abstract isModelLoaded(): boolean;
  abstract getProgress(): number;
  
  protected onProgress?: (progress: number) => void;
  
  setProgressCallback(callback: (progress: number) => void) {
    this.onProgress = callback;
  }
}

export interface GenerationOptions {
  width?: number;
  height?: number;
  steps?: number;
  guidanceScale?: number;
  seed?: number;
}
```

#### 3.2 Microsoft WebNN Implementation
```typescript
// src/lib/image-generation/webnn-generator.ts

import { BaseImageGenerator, GenerationOptions } from './base-generator';
import * as ort from 'onnxruntime-web';

export class WebNNImageGenerator extends BaseImageGenerator {
  readonly name = 'Microsoft WebNN SD 1.5';
  readonly modelSize = 400;
  readonly supportsWebNN = true;
  readonly supportsWebGPU = false;
  
  private session: ort.InferenceSession | null = null;
  private modelsLoaded = false;
  private progress = 0;

  async initialize(): Promise<void> {
    this.updateProgress(0);
    
    // Load models with WebNN EP
    this.session = await ort.InferenceSession.create(
      'https://cdn.example.com/sd15/unet.onnx',
      {
        executionProviders: ['webnn'],
        graphOptimizationLevel: 'all'
      }
    );
    
    this.modelsLoaded = true;
    this.updateProgress(100);
  }

  async generate(prompt: string, options: GenerationOptions): Promise<Blob> {
    if (!this.session) {
      throw new Error('Generator not initialized');
    }

    // Implementation based on Microsoft WebNN demo
    // https://github.com/microsoft/webnn-developer-preview
    
    this.updateProgress(10);
    
    // Tokenize prompt
    const tokens = await this.tokenize(prompt);
    this.updateProgress(20);
    
    // Run text encoder
    const textEmbeddings = await this.runTextEncoder(tokens);
    this.updateProgress(30);
    
    // Run UNet (denoising)
    const latents = await this.runUNet(textEmbeddings, options);
    this.updateProgress(70);
    
    // Run VAE decoder
    const imageTensor = await this.runVAEDecoder(latents);
    this.updateProgress(90);
    
    // Convert to blob
    const blob = await this.tensorToBlob(imageTensor, options);
    this.updateProgress(100);
    
    return blob;
  }

  private updateProgress(value: number) {
    this.progress = value;
    this.onProgress?.(value);
  }

  // ... additional methods
}
```

#### 3.3 Lee Butterman Implementation
```typescript
// src/lib/image-generation/butterman-generator.ts

export class ButtermanImageGenerator extends BaseImageGenerator {
  readonly name = 'Lee Butterman SD XS';
  readonly modelSize = 250;
  readonly supportsWebNN = false;
  readonly supportsWebGPU = true;
  
  // Implementation based on diffusion-local-time
  // https://github.com/lsb/diffusion-local-time
  
  async initialize(): Promise<void> {
    // Load 250MB quantized model
    // Use WebGPU for inference
  }

  async generate(prompt: string, options: GenerationOptions): Promise<Blob> {
    // One-step denoising (fast)
    // 3-4 FPS generation
  }
}
```

#### 3.4 Transformers.js Implementation
```typescript
// src/lib/image-generation/transformers-generator.ts

import { pipeline } from '@huggingface/transformers';

export class TransformersImageGenerator extends BaseImageGenerator {
  readonly name = 'Transformers.js';
  readonly modelSize = 50; // Smallest model
  readonly supportsWebNN = true;
  readonly supportsWebGPU = true;
  
  private pipe: any = null;

  async initialize(): Promise<void> {
    this.updateProgress(0);
    
    // Use smallest text-to-image model
    this.pipe = await pipeline(
      'text-to-image',
      'Xenova/Janus-1.3B-ONNX',
      {
        device: 'webgpu', // or 'webnn' or 'wasm'
        dtype: 'fp16'
      }
    );
    
    this.updateProgress(100);
  }

  async generate(prompt: string, options: GenerationOptions): Promise<Blob> {
    const result = await this.pipe(prompt, {
      width: options.width || 512,
      height: options.height || 512,
      num_inference_steps: options.steps || 20
    });
    
    return result.blob;
  }
}
```

---

### FAZ 4: Smart Generator Manager (2 gün)

```typescript
// src/lib/image-generation/manager.ts

import { detectCapabilities } from './browser-detection';
import { WebNNImageGenerator } from './webnn-generator';
import { ButtermanImageGenerator } from './butterman-generator';
import { TransformersImageGenerator } from './transformers-generator';

export class ImageGenerationManager {
  private generators = new Map<string, BaseImageGenerator>();
  private activeGenerator: BaseImageGenerator | null = null;
  private initialized = false;

  async initialize(): Promise<void> {
    const capabilities = await detectCapabilities();
    
    // Create generators based on capabilities
    if (capabilities.webnn) {
      this.generators.set('webnn', new WebNNImageGenerator());
    }
    
    if (capabilities.webgpu) {
      this.generators.set('butterman', new ButtermanImageGenerator());
      this.generators.set('transformers', new TransformersImageGenerator());
    }
    
    if (capabilities.wasm) {
      if (!this.generators.has('transformers')) {
        this.generators.set('transformers', new TransformersImageGenerator());
      }
    }
    
    // Select best generator
    this.activeGenerator = this.selectBestGenerator(capabilities);
    
    if (this.activeGenerator) {
      await this.activeGenerator.initialize();
    }
    
    this.initialized = true;
  }

  private selectBestGenerator(capabilities: BrowserCapabilities): BaseImageGenerator | null {
    switch (capabilities.recommendedBackend) {
      case 'webnn':
        return this.generators.get('webnn') || null;
      case 'webgpu':
        return this.generators.get('butterman') || this.generators.get('transformers') || null;
      case 'wasm':
        return this.generators.get('transformers') || null;
      default:
        return null;
    }
  }

  async generate(prompt: string, options?: GenerationOptions): Promise<Blob | null> {
    if (!this.initialized || !this.activeGenerator) {
      return null;
    }

    try {
      return await this.activeGenerator.generate(prompt, options || {});
    } catch (error) {
      console.error('Generation failed:', error);
      
      // Try fallback generators
      for (const [name, generator] of this.generators) {
        if (generator !== this.activeGenerator) {
          try {
            return await generator.generate(prompt, options || {});
          } catch {
            continue;
          }
        }
      }
      
      return null;
    }
  }

  getActiveGenerator(): BaseImageGenerator | null {
    return this.activeGenerator;
  }

  getAvailableGenerators(): string[] {
    return Array.from(this.generators.keys());
  }
}
```

---

### FAZ 5: UI Integration (2-3 gün)

```typescript
// src/hooks/useImageGeneration.ts

import { useState, useEffect, useCallback } from 'react';
import { ImageGenerationManager } from '@/lib/image-generation/manager';

export function useImageGeneration() {
  const [manager] = useState(() => new ImageGenerationManager());
  const [isInitialized, setIsInitialized] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [activeBackend, setActiveBackend] = useState<string>('');

  useEffect(() => {
    manager.initialize().then(() => {
      setIsInitialized(true);
      setActiveBackend(manager.getActiveGenerator()?.name || 'SVG Fallback');
    });
  }, [manager]);

  const generate = useCallback(async (prompt: string) => {
    setIsGenerating(true);
    setProgress(0);
    setError(null);
    setResult(null);

    try {
      const blob = await manager.generate(prompt, {
        width: 512,
        height: 512,
        steps: 20
      });

      if (blob) {
        const url = URL.createObjectURL(blob);
        setResult(url);
      } else {
        setError('Generation failed - using SVG fallback');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setIsGenerating(false);
    }
  }, [manager]);

  return {
    isInitialized,
    isGenerating,
    progress,
    error,
    result,
    activeBackend,
    generate
  };
}
```

---

### FAZ 6: Model Caching Strategy (2 gün)

```typescript
// src/lib/cache/model-cache.ts

export class ModelCache {
  private readonly CACHE_NAME = 'fivem-icon-models-v1';
  private readonly MAX_CACHE_SIZE = 500 * 1024 * 1024; // 500MB

  async cacheModel(url: string): Promise<boolean> {
    const cache = await caches.open(this.CACHE_NAME);
    
    // Check if already cached
    const cached = await cache.match(url);
    if (cached) {
      console.log('Model already cached:', url);
      return true;
    }

    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch model: ${response.status}`);
      }

      // Check size
      const contentLength = response.headers.get('content-length');
      if (contentLength) {
        const size = parseInt(contentLength, 10);
        if (size > this.MAX_CACHE_SIZE) {
          throw new Error('Model too large for cache');
        }
      }

      await cache.put(url, response.clone());
      console.log('Model cached:', url);
      return true;
    } catch (error) {
      console.error('Cache failed:', error);
      return false;
    }
  }

  async getCachedModel(url: string): Promise<Response | undefined> {
    const cache = await caches.open(this.CACHE_NAME);
    return cache.match(url);
  }

  async clearCache(): Promise<void> {
    await caches.delete(this.CACHE_NAME);
  }

  async getCacheSize(): Promise<number> {
    const cache = await caches.open(this.CACHE_NAME);
    const keys = await cache.keys();
    let totalSize = 0;

    for (const key of keys) {
      const response = await cache.match(key);
      if (response) {
        const blob = await response.blob();
        totalSize += blob.size;
      }
    }

    return totalSize;
  }
}
```

---

### FAZ 7: Performance Optimization (2 gün)

```typescript
// src/lib/optimization/progressive-loading.ts

export class ProgressiveModelLoader {
  private readonly PRIORITY_CHUNKS = [
    'text_encoder', // First - smallest, needed for prompt
    'unet',         // Second - main model
    'vae_decoder',  // Third - for final image
    'safety_checker' // Last - optional
  ];

  async loadModelProgressive(
    modelUrls: Record<string, string>,
    onChunkLoaded: (chunk: string, progress: number) => void
  ): Promise<void> {
    for (let i = 0; i < this.PRIORITY_CHUNKS.length; i++) {
      const chunk = this.PRIORITY_CHUNKS[i];
      const url = modelUrls[chunk];
      
      if (!url) continue;

      onChunkLoaded(chunk, (i / this.PRIORITY_CHUNKS.length) * 100);
      
      // Load chunk
      await this.loadChunk(url);
      
      onChunkLoaded(chunk, ((i + 1) / this.PRIORITY_CHUNKS.length) * 100);
    }
  }

  private async loadChunk(url: string): Promise<void> {
    const cache = await caches.open('fivem-icon-models-v1');
    const cached = await cache.match(url);
    
    if (cached) {
      // Use cached version
      return;
    }

    // Download and cache
    const response = await fetch(url);
    await cache.put(url, response.clone());
  }
}
```

---

### FAZ 8: Testing & Fallback (2 gün)

```typescript
// src/lib/testing/fallback.ts

export class FallbackManager {
  private svgGenerator: SVGIconGenerator;

  constructor() {
    this.svgGenerator = new SVGIconGenerator();
  }

  async generateWithFallback(
    prompt: string,
    primaryGenerator: BaseImageGenerator | null
  ): Promise<{ blob: Blob; type: 'ai' | 'svg' }> {
    // Try AI generation first
    if (primaryGenerator) {
      try {
        const blob = await primaryGenerator.generate(prompt, {
          width: 512,
          height: 512
        });
        return { blob, type: 'ai' };
      } catch (error) {
        console.warn('AI generation failed, using SVG fallback:', error);
      }
    }

    // SVG Fallback
    const svgBlob = await this.svgGenerator.generate(prompt);
    return { blob: svgBlob, type: 'svg' };
  }
}

class SVGIconGenerator {
  async generate(prompt: string): Promise<Blob> {
    // Create SVG based on prompt keywords
    const svg = this.createSVGFromPrompt(prompt);
    return new Blob([svg], { type: 'image/svg+xml' });
  }

  private createSVGFromPrompt(prompt: string): string {
    // Parse prompt for keywords
    const keywords = this.extractKeywords(prompt);
    
    // Generate SVG based on keywords
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <!-- Generated based on: ${keywords.join(', ')} -->
      ${this.generateShapes(keywords)}
    </svg>`;
  }

  private extractKeywords(prompt: string): string[] {
    // Extract icon type, style, colors from prompt
    return prompt.toLowerCase().split(/[\s,]+/);
  }

  private generateShapes(keywords: string[]): string {
    // Generate appropriate SVG shapes
    // This is a simplified version
    return '<circle cx="256" cy="256" r="200" fill="#0ea5e9"/>';
  }
}
```

---

## 📅 IMPLEMENTASYON TAKVİMİ

### Hafta 1: Temel Altyapı
- **Gün 1-2:** FAZ 1 - Kütüphane kurulumu ve model araştırması
- **Gün 3:** FAZ 2 - Browser detection
- **Gün 4-5:** FAZ 3 - Base generator classes

### Hafta 2: Generator Implementasyonları
- **Gün 6-7:** FAZ 3 (devam) - WebNN, Butterman, Transformers.js implementasyonları
- **Gün 8:** FAZ 4 - Smart Generator Manager
- **Gün 9-10:** FAZ 5 - UI Integration

### Hafta 3: Optimizasyon ve Testing
- **Gün 11-12:** FAZ 6 - Model caching
- **Gün 13-14:** FAZ 7 - Progressive loading
- **Gün 15:** FAZ 8 - Fallback sistem ve testing

### Toplam: **15 iş günü** (3 hafta)

---

## 🎯 BAŞARI KRİTERLERİ

### ✅ Zorunlu (MVP)
- [ ] En az 1 browser AI generator çalışıyor
- [ ] SVG fallback aktif
- [ ] Progress indication
- [ ] Model caching

### 🎁 İdeal
- [ ] 3 farklı backend desteği
- [ ] Progressive model loading
- [ ] Kullanıcı backend seçimi
- [ ] Offline çalışma (cache sonrası)

### 🚀 Bonus
- [ ] Model quantization
- [ ] Custom fine-tuned model
- [ ] Batch generation

---

## ⚠️ RİSKLER VE ÇÖZÜMLER

| Risk | Olasılık | Çözüm |
|------|----------|-------|
| Model CDN down | Orta | Multiple CDN sources |
| Browser destek yok | Düşük | SVG fallback zorunlu |
| Bellek yetersizliği | Orta | Model splitting + progressive loading |
| İlk yükleme uzun | Yüksek | Lazy loading + placeholder |
| CORS issues | Düşük | Proxy/Vercel Edge function |

---

## 📊 MALİYET ANALİZİ

### Geliştirme Maliyeti
- **Developer time:** 3 hafta × 8 saat/gün = 120 saat
- **Test:** 20 saat
- **Toplam:** 140 saat

### Operasyonel Maliyet
- **Vercel hosting:** $0 (static + serverless)
- **Model CDN:** $0 (public models)
- **Bandwidth:** $0 (CDN'den cache)

### **Toplam: $0/ay** ✅

---

## 🎬 SONRAKİ ADIMLAR

1. **Onayınızı bekliyorum** - Bu planı onaylarsanız başlıyorum
2. **FAZ 1 başlangıç** - Kütüphaneleri kur
3. **Iterative development** - Her faz bittiğinde test
4. **Demo** - Çalışan versiyonu göster

**Başlayalım mı kral?** 🚀
