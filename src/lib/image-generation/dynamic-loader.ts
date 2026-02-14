// src/lib/image-generation/dynamic-loader.ts
// Dynamic CDN loader for AI backends - NO NODE IMPORTS

import { ModelConfig } from './types';

// CDN URLs for AI models
export const CDN_MODELS = {
  webnn: {
    id: 'webnn',
    name: 'Microsoft WebNN SD 1.5',
    size: 400,
    priority: 1,
    requires: ['webnn'],
    // Using Microsoft's official demo models
    urls: {
      text_encoder: 'https://huggingface.co/microsoft/stable-diffusion-webnn/resolve/main/text_encoder.onnx',
      unet: 'https://huggingface.co/microsoft/stable-diffusion-webnn/resolve/main/unet.onnx',
      vae_decoder: 'https://huggingface.co/microsoft/stable-diffusion-webnn/resolve/main/vae_decoder.onnx'
    }
  },
  butterman: {
    id: 'butterman',
    name: 'Lee Butterman SD XS',
    size: 250,
    priority: 2,
    requires: ['webgpu'],
    // Placeholder - will use demo model
    urls: {
      model: 'https://huggingface.co/runwayml/stable-diffusion-v1-5/resolve/main/unet/model.onnx'
    }
  },
  transformers: {
    id: 'transformers',
    name: 'Transformers.js',
    size: 200,
    priority: 3,
    requires: ['wasm'],
    modelId: 'Xenova/stable-diffusion-2-1-base-onnx',
    // Transformers.js loads automatically from HuggingFace CDN
  }
};

// Load script dynamically
export function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load: ${src}`));
    document.head.appendChild(script);
  });
}

// Check if CDN is available
export async function checkCDNAvailability(url: string): Promise<boolean> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);
    
    const response = await fetch(url, { 
      method: 'HEAD',
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);
    return response.ok;
  } catch {
    return false;
  }
}

// Load ONNX Runtime Web from CDN
export async function loadONNXRuntime(): Promise<any> {
  // Check if already loaded globally
  if ((window as any).ort) {
    return (window as any).ort;
  }
  
  // Try multiple CDN sources
  const sources = [
    'https://cdn.jsdelivr.net/npm/onnxruntime-web@1.17.0/dist/ort.webgpu.min.js',
    'https://unpkg.com/onnxruntime-web@1.17.0/dist/ort.webgpu.min.js'
  ];
  
  for (const src of sources) {
    try {
      await loadScript(src);
      if ((window as any).ort) {
        console.log('✅ ONNX Runtime loaded from CDN');
        return (window as any).ort;
      }
    } catch (error) {
      console.warn(`Failed to load from ${src}:`, error);
    }
  }
  
  throw new Error('Failed to load ONNX Runtime from any CDN');
}

// Load Transformers.js from CDN
export async function loadTransformers(): Promise<any> {
  // Check if already loaded globally
  if ((window as any).transformers) {
    return (window as any).transformers;
  }
  
  // Try multiple CDN sources
  const sources = [
    'https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.0.2/dist/transformers.min.js',
    'https://unpkg.com/@huggingface/transformers@3.0.2/dist/transformers.min.js'
  ];
  
  for (const src of sources) {
    try {
      await loadScript(src);
      if ((window as any).transformers) {
        console.log('✅ Transformers.js loaded from CDN');
        return (window as any).transformers;
      }
    } catch (error) {
      console.warn(`Failed to load from ${src}:`, error);
    }
  }
  
  throw new Error('Failed to load Transformers.js from any CDN');
}
