// src/workers/svg-converter.worker.ts
// PNG'den SVG'ye çevirme - Tarayıcıda çalışır!

importScripts('https://cdn.jsdelivr.net/npm/potrace@2.1.8/dist/potrace.min.js');

interface PotraceResult {
  svg: string;
  width: number;
  height: number;
}

class SVGConverter {
  private canvas: OffscreenCanvas | null = null;
  private ctx: OffscreenCanvasRenderingContext2D | null = null;

  async convertToSVG(imageDataUrl: string, options: any = {}): Promise<PotraceResult> {
    try {
      // 1. Resmi yükle
      const bitmap = await createImageBitmap(await (await fetch(imageDataUrl)).blob());
      
      // 2. Canvas oluştur
      this.canvas = new OffscreenCanvas(bitmap.width, bitmap.height);
      this.ctx = this.canvas.getContext('2d', { willReadFrequently: true })!;
      
      // 3. Resmi çiz
      this.ctx.drawImage(bitmap, 0, 0);
      
      // 4. ImageData al
      const imageData = this.ctx.getImageData(0, 0, bitmap.width, bitmap.height);
      
      // 5. Potrace ile vektörleştir
      self.postMessage({ type: 'progress', stage: 'Vectorizing...', progress: 50 });
      
      const potrace = (self as any).Potrace;
      potrace.setParameters({
        turnPolicy: potrace.TurnPolicies.MINORITY,
        turdSize: 4,
        alphaMax: 1.0,
        curveTreshold: 0.5,
        optTolerance: 0.2,
        ...options
      });
      
      potrace.loadImage(imageDataUrl);
      
      const svg = potrace.getSVG(1);
      
      // 6. Optimize et (FiveM uyumluluğu için)
      self.postMessage({ type: 'progress', stage: 'Optimizing...', progress: 90 });
      
      const optimizedSvg = this.optimizeForFiveM(svg);
      
      self.postMessage({ type: 'progress', stage: 'Complete!', progress: 100 });
      
      return {
        svg: optimizedSvg,
        width: bitmap.width,
        height: bitmap.height
      };
      
    } catch (error) {
      throw new Error(`SVG conversion failed: ${error.message}`);
    }
  }

  private optimizeForFiveM(svg: string): string {
    return svg
      // Namespace temizle (FiveM CEF'de sorun çıkarabilir)
      .replace(/xmlns="[^"]*"/g, '')
      .replace(/xmlns:xlink="[^"]*"/g, '')
      // Fazla whitespace'i kaldır
      .replace(/>\s+</g, '><')
      .replace(/\s{2,}/g, ' ')
      // ViewBox ekle (yoksa)
      .replace(/<svg/, '<svg viewBox="0 0 512 512"')
      // Width/height ayarla
      .replace(/width="[^"]*"/, 'width="100%"')
      .replace(/height="[^"]*"/, 'height="100%"')
      // Gereksiz attributeleri kaldır
      .replace(/version="[^"]*"/g, '')
      .replace(/id="[^"]*"/g, '');
  }
}

// Worker message handler
const converter = new SVGConverter();

self.onmessage = async (e) => {
  const { type, payload } = e.data;

  if (type === 'convert') {
    try {
      const { imageDataUrl, options } = payload;
      const result = await converter.convertToSVG(imageDataUrl, options);
      self.postMessage({ type: 'complete', result });
    } catch (error) {
      self.postMessage({ type: 'error', error: error.message });
    }
  }
};

export {};
