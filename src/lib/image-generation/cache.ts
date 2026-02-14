// src/lib/image-generation/cache.ts
// Model caching using IndexedDB

import { openDB, DBSchema, IDBPDatabase } from 'idb';

interface ModelCacheSchema extends DBSchema {
  models: {
    key: string;
    value: {
      url: string;
      blob: Blob;
      size: number;
      timestamp: number;
    };
  };
}

export class ModelCache {
  private db: IDBPDatabase<ModelCacheSchema> | null = null;
  private readonly DB_NAME = 'fivem-icon-model-cache';
  private readonly DB_VERSION = 1;
  private readonly MAX_CACHE_SIZE = 2 * 1024 * 1024 * 1024; // 2GB

  async initialize(): Promise<void> {
    this.db = await openDB<ModelCacheSchema>(this.DB_NAME, this.DB_VERSION, {
      upgrade(db) {
        if (!db.objectStoreNames.contains('models')) {
          db.createObjectStore('models', { keyPath: 'url' });
        }
      }
    });
    console.log('✅ Model cache initialized');
  }

  async getModel(url: string): Promise<Blob | null> {
    if (!this.db) await this.initialize();
    
    try {
      const entry = await this.db!.get('models', url);
      if (entry) {
        console.log(`📦 Cache hit: ${url}`);
        return entry.blob;
      }
    } catch (error) {
      console.error('Cache read error:', error);
    }
    
    return null;
  }

  async setModel(url: string, blob: Blob): Promise<void> {
    if (!this.db) await this.initialize();

    try {
      // Check cache size
      const currentSize = await this.getCacheSize();
      if (currentSize + blob.size > this.MAX_CACHE_SIZE) {
        await this.cleanupCache();
      }

      await this.db!.put('models', {
        url,
        blob,
        size: blob.size,
        timestamp: Date.now()
      });
      
      console.log(`💾 Cached: ${url} (${(blob.size / 1024 / 1024).toFixed(2)}MB)`);
    } catch (error) {
      console.error('Cache write error:', error);
    }
  }

  async getCacheSize(): Promise<number> {
    if (!this.db) await this.initialize();
    
    const allModels = await this.db!.getAll('models');
    return allModels.reduce((total, model) => total + model.size, 0);
  }

  async cleanupCache(): Promise<void> {
    if (!this.db) return;

    const allModels = await this.db.getAll('models');
    
    // Sort by timestamp (oldest first)
    allModels.sort((a, b) => a.timestamp - b.timestamp);
    
    // Remove oldest 25%
    const toRemove = Math.floor(allModels.length * 0.25);
    for (let i = 0; i < toRemove; i++) {
      await this.db.delete('models', allModels[i].url);
    }
    
    console.log(`🧹 Cleaned up ${toRemove} cached models`);
  }

  async clearCache(): Promise<void> {
    if (!this.db) return;
    await this.db.clear('models');
    console.log('🗑️ Cache cleared');
  }

  async hasModel(url: string): Promise<boolean> {
    if (!this.db) await this.initialize();
    const entry = await this.db!.get('models', url);
    return !!entry;
  }
}

// Singleton instance
let cacheInstance: ModelCache | null = null;

export function getModelCache(): ModelCache {
  if (!cacheInstance) {
    cacheInstance = new ModelCache();
  }
  return cacheInstance;
}
