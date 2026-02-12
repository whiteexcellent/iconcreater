import { Icon, Theme } from '@/types';

interface PromptParts {
  subject: string;
  style: string;
  composition: string;
  technical: string;
  negative: string;
}

export class PromptBuilder {
  private static readonly COMPOSITION = 'centered composition, isolated object, white background, clean presentation';
  
  private static readonly TECHNICAL = 'vector art style, masterpiece, sharp edges, simple geometric shapes, clean lines, professional, app icon design';
  
  private static readonly BASE_NEGATIVE = 'photo, realistic, 3d render, photograph, text, watermark, signature, logo, brand, ugly, blurry, low quality, distorted, cropped, frame, border, background elements, shadow, noise, grain';

  private static readonly ICON_DESCRIPTIONS: Record<string, string> = {
    camera: 'camera lens, aperture, photography equipment, shutter, digital camera, photo capture',
    bank: 'bank building, columns, financial institution, money symbol, vault, secure banking',
    car: 'vehicle silhouette, sports car, automobile, sleek design, automotive, transportation',
    phone: 'smartphone, mobile device, touchscreen, communication, cellular, handset',
    message: 'chat bubble, speech bubble, communication icon, conversation, texting, messaging',
    map: 'map pin, location marker, navigation pointer, gps, positioning, direction',
    settings: 'gear, cogwheel, mechanical, configuration, options, preferences, system',
    gallery: 'picture frame, image icon, photos, album, collection, portfolio',
    music: 'music note, headphones, sound waves, audio, melody, rhythm, musical',
    weather: 'sun, cloud, weather symbol, forecast, climate, meteorology, sky',
    wallet: 'wallet, money, cash, payment, finance, currency, bills',
    house: 'house, home, building, residence, property, dwelling, estate',
    shop: 'shop, store, market, commerce, retail, marketplace, business',
    police: 'police badge, shield, law enforcement, security, protection, authority',
    hospital: 'hospital, medical cross, healthcare, clinic, emergency, medicine, health'
  };

  static buildPrompt(icon: Icon, theme: Theme, customPrompt?: string): string {
    const parts = this.buildPromptParts(icon, theme, customPrompt);
    return `${parts.subject}, ${parts.style}, ${parts.composition}, ${parts.technical}`;
  }

  static buildNegativePrompt(theme: Theme): string {
    return `${this.BASE_NEGATIVE}, ${theme.negative}`;
  }

  private static buildPromptParts(
    icon: Icon, 
    theme: Theme, 
    customPrompt?: string
  ): PromptParts {
    const subject = this.buildSubject(icon);
    const style = this.buildStyle(theme, customPrompt);
    
    return {
      subject,
      style,
      composition: this.COMPOSITION,
      technical: this.TECHNICAL,
      negative: this.buildNegativePrompt(theme)
    };
  }

  private static buildSubject(icon: Icon): string {
    const description = this.ICON_DESCRIPTIONS[icon.id] || icon.id;
    return `app icon design, ${description} icon, ${icon.name} symbol`;
  }

  private static buildStyle(theme: Theme, customPrompt?: string): string {
    let style = theme.style;
    
    if (customPrompt && customPrompt.trim()) {
      style = `${style}, ${customPrompt.trim()}`;
    }
    
    return style;
  }

  static estimateTokenCount(prompt: string): number {
    // Rough estimation: ~0.75 tokens per word on average for CLIP
    const wordCount = prompt.split(/\s+/).length;
    return Math.ceil(wordCount * 0.75);
  }

  static validatePrompt(prompt: string): { valid: boolean; error?: string } {
    if (!prompt || prompt.trim().length === 0) {
      return { valid: false, error: 'Prompt cannot be empty' };
    }

    if (prompt.length > 500) {
      return { valid: false, error: 'Prompt too long (max 500 chars)' };
    }

    const tokens = this.estimateTokenCount(prompt);
    if (tokens > 77) {
      return { valid: false, error: `Prompt too long (~${tokens} tokens, max 77)` };
    }

    return { valid: true };
  }
}
