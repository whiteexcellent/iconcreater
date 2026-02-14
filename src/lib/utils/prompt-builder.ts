import { Icon, Theme } from '@/types';

export class PromptBuilder {
  static buildPrompt(icon: Icon, theme: Theme, customPrompt?: string): string {
    const basePrompt = `app icon design, ${icon.baseShape} shape, ${icon.description}, ${icon.name} symbol`;
    const stylePrompt = theme.style;
    const qualityPrompt = 'centered composition, isolated object, white background, clean presentation, vector art style, masterpiece, sharp edges, simple geometric shapes, clean lines, professional, app icon design';
    
    let prompt = `${basePrompt}, ${stylePrompt}, ${qualityPrompt}`;
    
    if (customPrompt && customPrompt.trim()) {
      prompt += `, ${customPrompt.trim()}`;
    }
    
    return prompt;
  }

  static buildNegativePrompt(theme: Theme): string {
    const baseNegative = 'blurry, low quality, distorted, ugly, bad anatomy, watermark, signature, text, words, letters, cropped, out of frame';
    return `${baseNegative}, ${theme.negative}`;
  }
}
