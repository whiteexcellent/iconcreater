// src/lib/image-generation/manager.ts
// Smart Image Generation Manager with all backends

import { 
  BaseGenerator, 
  GenerationOptions, 
  GenerationResult,
  BackendCapabilities 
} from './types';
import { detectCapabilities, getRecommendedBackend } from './detector';
import { WebNNGenerator } from './generators/webnn-sd15';
import { ButtermanGenerator } from './generators/butterman-xs';
import { TransformersGenerator } from './generators/transformers-janus';
import { SVGFallbackGenerator } from './generators/svg-fallback';
import { getModelCache } from './cache';

export class ImageGenerationManager {
  private generators: Map<string, BaseGenerator> = new Map();
  private availableGenerators: string[] = [];
  private activeBackend: string = 'svg';
  private isInitialized = false;
  private capabilities: BackendCapabilities | null = null;
  private cache = getModelCache();

  constructor() {
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
    
    // Initialize cache
    await this.cache.initialize();
    
    // Detect browser capabilities
    this.capabilities = await detectCapabilities();
    
    // Check which generators are available
    for (const [id, generator] of this.generators) {
      try {
        const isAvailable = await generator.checkAvailability();
        if (isAvailable) {
          this.availableGenerators.push(id);
          console.log(`✅ ${generator.name} available`);
        } else {
          console.log(`❌ ${generator.name} not available`);
        }
      } catch (error) {
        console.log(`❌ ${generator.name} check failed:`, error);
      }
    }

    // Select initial backend
    if (preferredBackend && this.availableGenerators.includes(preferredBackend)) {
      this.activeBackend = preferredBackend;
    } else {
      this.activeBackend = getRecommendedBackend(this.capabilities);
    }

    // Initialize selected backend
    await this.initializeBackend(this.activeBackend);

    this.isInitialized = true;
    console.log(`✅ Manager ready. Active: ${this.getActiveBackendName()}`);
  }

  private async initializeBackend(backendId: string): Promise<boolean> {
    const generator = this.generators.get(backendId);
    if (!generator) return false;

    try {
      generator.setProgressCallback((progress) => {
        console.log(`[${generator.name}] Loading: ${progress.toFixed(0)}%`);
      });
      
      await generator.initialize();
      return true;
    } catch (error) {
      console.error(`Failed to initialize ${backendId}:`, error);
      return false;
    }
  }

  async generate(options: GenerationOptions): Promise<GenerationResult> {
    if (!this.isInitialized) {
      throw new Error('Manager not initialized. Call initialize() first.');
    }

    const startTime = Date.now();
    const backendsToTry = this.getBackendPriority();

    for (const backendId of backendsToTry) {
      const generator = this.generators.get(backendId);
      if (!generator) continue;

      try {
        console.log(`🎨 Trying ${generator.name}...`);

        // Initialize if needed
        if (!generator.isInitialized()) {
          const initialized = await this.initializeBackend(backendId);
          if (!initialized) continue;
        }

        // Generate
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
        console.warn(`${generator.name} failed:`, error);
        continue;
      }
    }

    throw new Error('All generation backends failed');
  }

  private getBackendPriority(): string[] {
    // Priority order: active -> webnn -> butterman -> transformers -> svg
    const order = ['webnn', 'butterman', 'transformers', 'svg'];
    const priority: string[] = [];

    // Active backend first
    if (this.activeBackend && this.availableGenerators.includes(this.activeBackend)) {
      priority.push(this.activeBackend);
    }

    // Then others in priority order
    for (const backend of order) {
      if (backend !== this.activeBackend && this.availableGenerators.includes(backend)) {
        priority.push(backend);
      }
    }

    return priority;
  }

  async switchBackend(backendId: string): Promise<boolean> {
    if (!this.availableGenerators.includes(backendId)) {
      console.error(`Backend ${backendId} not available`);
      return false;
    }

    // Dispose current
    const current = this.generators.get(this.activeBackend);
    if (current) {
      await current.dispose();
    }

    // Initialize new
    const initialized = await this.initializeBackend(backendId);
    if (initialized) {
      this.activeBackend = backendId;
      console.log(`✅ Switched to ${this.getActiveBackendName()}`);
      return true;
    }

    return false;
  }

  getAvailableBackends(): Array<{ id: string; name: string; size: number; requirements: string[] }> {
    return this.availableGenerators.map(id => {
      const gen = this.generators.get(id)!;
      return {
        id: gen.id,
        name: gen.name,
        size: gen.config.size,
        requirements: gen.config.requires
      };
    });
  }

  getActiveBackendName(): string {
    const gen = this.generators.get(this.activeBackend);
    return gen?.name || 'Unknown';
  }

  getActiveBackendId(): string {
    return this.activeBackend;
  }

  getCapabilities(): BackendCapabilities | null {
    return this.capabilities;
  }

  async preloadBackend(backendId: string): Promise<boolean> {
    if (!this.availableGenerators.includes(backendId)) {
      return false;
    }

    const generator = this.generators.get(backendId);
    if (!generator || generator.isInitialized()) {
      return true;
    }

    return await this.initializeBackend(backendId);
  }

  isReady(): boolean {
    return this.isInitialized;
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

// Singleton
let managerInstance: ImageGenerationManager | null = null;

export function getImageGenerationManager(): ImageGenerationManager {
  if (!managerInstance) {
    managerInstance = new ImageGenerationManager();
  }
  return managerInstance;
}

export function resetImageGenerationManager(): void {
  managerInstance = null;
}
