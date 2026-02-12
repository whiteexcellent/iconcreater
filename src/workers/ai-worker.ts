// src/workers/ai-worker.ts
// AI işlemleri burada çalışır - UI donmaz!

import * as ort from 'onnxruntime-web/webgpu';
import { AutoTokenizer } from '@huggingface/transformers';

// Model URLs (Hugging Face'den)
const MODEL_URLS = {
  textEncoder: 'https://huggingface.co/Xenova/clip-vit-base-patch32/resolve/main/onnx/text_model.onnx',
  unet: 'https://huggingface.co/segmind/small-sd/resolve/main/unet/model.onnx',
  vaeDecoder: 'https://huggingface.co/segmind/small-sd/resolve/main/vae_decoder/model.onnx',
};

// Stable Diffusion Pipeline
class StableDiffusionPipeline {
  private textEncoder: ort.InferenceSession | null = null;
  private unet: ort.InferenceSession | null = null;
  private vae: ort.InferenceSession | null = null;
  private tokenizer: any = null;

  async load(onProgress: (progress: number) => void) {
    try {
      // 1. Text Encoder yükle (~200MB)
      self.postMessage({ type: 'progress', stage: 'Loading Text Encoder...', progress: 10 });
      this.textEncoder = await ort.InferenceSession.create(MODEL_URLS.textEncoder, {
        executionProviders: ['webgpu'],
      });

      // 2. UNet yükle (~800MB)
      self.postMessage({ type: 'progress', stage: 'Loading UNet Model...', progress: 40 });
      this.unet = await ort.InferenceSession.create(MODEL_URLS.unet, {
        executionProviders: ['webgpu'],
      });

      // 3. VAE Decoder yükle (~200MB)
      self.postMessage({ type: 'progress', stage: 'Loading VAE Decoder...', progress: 70 });
      this.vae = await ort.InferenceSession.create(MODEL_URLS.vaeDecoder, {
        executionProviders: ['webgpu'],
      });

      // 4. Tokenizer yükle
      self.postMessage({ type: 'progress', stage: 'Loading Tokenizer...', progress: 90 });
      this.tokenizer = await AutoTokenizer.from_pretrained('Xenova/clip-vit-base-patch32');

      self.postMessage({ type: 'progress', stage: 'Ready!', progress: 100 });
      return true;
    } catch (error) {
      self.postMessage({ type: 'error', error: error.message });
      return false;
    }
  }

  async generate(prompt: string, steps: number = 4) {
    if (!this.textEncoder || !this.unet || !this.vae) {
      throw new Error('Models not loaded');
    }

    // 1. Prompt'u tokenize et
    self.postMessage({ type: 'stage', stage: 'encoding' });
    const textTokens = await this.tokenizer(prompt, { padding: 'max_length', max_length: 77, truncation: true, return_tensor: 'np' });
    
    // 2. Text embeddings
    const textEncoderOutputs = await this.textEncoder.run({ input_ids: textTokens.input_ids });
    const textEmbeddings = textEncoderOutputs.last_hidden_state;

    // 3. UNet inference (Denoising)
    let latent = new Float32Array(4 * 64 * 64).map(() => Math.random() * 2 - 1);
    
    for (let i = 0; i < steps; i++) {
      self.postMessage({ 
        type: 'progress', 
        stage: 'Denoising...',
        progress: Math.round((i / steps) * 100) 
      });

      const timestep = new Int32Array([999 - Math.round((999 / steps) * i)]);
      const unetOutputs = await this.unet.run({
        sample: latent,
        timestep: timestep,
        encoder_hidden_states: textEmbeddings,
      });

      latent = unetOutputs.noise_pred;
    }

    // 4. VAE decode (Görsele çevir)
    self.postMessage({ type: 'stage', stage: 'decoding' });
    const vaeOutputs = await this.vae.run({ latent_sample: latent });
    const imageData = vaeOutputs.sample;

    // 5. ImageData formatına çevir
    const canvas = new OffscreenCanvas(512, 512);
    const ctx = canvas.getContext('2d');
    const imgData = ctx.createImageData(512, 512);
    
    // Normalize ve RGBA'ya çevir
    for (let i = 0; i < imageData.length; i++) {
      const val = Math.round(((imageData[i] + 1) / 2) * 255);
      imgData.data[i * 4] = val;     // R
      imgData.data[i * 4 + 1] = val; // G
      imgData.data[i * 4 + 2] = val; // B
      imgData.data[i * 4 + 3] = 255; // A
    }

    ctx.putImageData(imgData, 0, 0);
    
    // PNG olarak döndür
    const blob = await canvas.convertToBlob({ type: 'image/png' });
    const reader = new FileReader();
    
    return new Promise<string>((resolve) => {
      reader.onloadend = () => resolve(reader.result as string);
      reader.readAsDataURL(blob);
    });
  }
}

// Worker message handler
const pipeline = new StableDiffusionPipeline();

self.onmessage = async (e) => {
  const { type, payload } = e.data;

  if (type === 'load') {
    const success = await pipeline.load((progress) => {
      self.postMessage({ type: 'progress', progress });
    });
    self.postMessage({ type: 'loaded', success });
  }

  if (type === 'generate') {
    try {
      const { prompt, steps } = payload;
      const imageData = await pipeline.generate(prompt, steps);
      self.postMessage({ type: 'complete', imageData });
    } catch (error) {
      self.postMessage({ type: 'error', error: error.message });
    }
  }
};

export {};
