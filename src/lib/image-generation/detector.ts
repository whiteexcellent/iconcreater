// src/lib/image-generation/detector.ts
// Browser capability detection for AI backends

import { BackendCapabilities } from './types';

export async function detectCapabilities(): Promise<BackendCapabilities> {
  const capabilities: BackendCapabilities = {
    webnn: false,
    webgpu: false,
    webgl: false,
    wasm: false
  };

  // WebNN Detection (Edge/Chrome experimental)
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

  console.log('🔍 Browser capabilities:', capabilities);
  return capabilities;
}

export function getRecommendedBackend(capabilities: BackendCapabilities): string {
  if (capabilities.webnn) return 'webnn';
  if (capabilities.webgpu) return 'butterman';
  if (capabilities.wasm) return 'transformers';
  return 'svg';
}

export function getBackendRequirements(backend: string): string[] {
  const requirements: Record<string, string[]> = {
    'webnn': ['WebNN API (Edge/Chrome)'],
    'butterman': ['WebGPU', 'Modern GPU'],
    'transformers': ['WebAssembly', '2GB+ RAM'],
    'svg': ['None - Works everywhere']
  };
  return requirements[backend] || ['Unknown'];
}
