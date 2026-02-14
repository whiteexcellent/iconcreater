// src/lib/image-generation/generators/svg-fallback.ts
// SVG Fallback Generator - Always works!

import { BaseGenerator, GenerationOptions, ModelConfig } from '../types';

export class SVGFallbackGenerator extends BaseGenerator {
  readonly id = 'svg';
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
    console.log('✅ SVG Generator ready');
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
      .split(/[\s,._-]+/)
      .filter(word => word.length > 2);
  }

  private createSVG(keywords: string[], options: GenerationOptions): string {
    const width = options.width || 512;
    const height = options.height || 512;
    
    const colors = this.getColors(keywords);
    const shape = this.getShape(keywords);
    const iconText = this.getIconText(keywords);
    
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${colors[0]};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${colors[1]};stop-opacity:1" />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      <!-- Background -->
      <rect width="${width}" height="${height}" fill="url(#grad)" rx="96"/>
      
      <!-- Shape -->
      ${shape}
      
      <!-- Text -->
      <text x="${width/2}" y="${height*0.75}" 
            font-family="system-ui, -apple-system, sans-serif" 
            font-size="32" 
            fill="white" 
            text-anchor="middle" 
            font-weight="bold"
            filter="url(#glow)">
        ${iconText}
      </text>
      
      <text x="${width/2}" y="${height*0.85}" 
            font-family="system-ui, -apple-system, sans-serif" 
            font-size="14" 
            fill="white" 
            text-anchor="middle"
            opacity="0.8">
        SVG Generated
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
      'yellow': ['#eab308', '#ca8a04'],
      'cyan': ['#06b6d4', '#0891b2'],
      'neon': ['#00ff88', '#00ccff'],
      'dark': ['#1e293b', '#0f172a'],
      'light': ['#f8fafc', '#e2e8f0'],
      'black': ['#374151', '#1f2937'],
      'white': ['#f3f4f6', '#d1d5db']
    };

    for (const keyword of keywords) {
      if (colorMap[keyword]) {
        return colorMap[keyword];
      }
    }

    // Default: Check for themes
    if (keywords.some(k => k.includes('kawaii') || k.includes('cute'))) {
      return ['#ec4899', '#db2777']; // Pink
    }
    if (keywords.some(k => k.includes('neon') || k.includes('cyber'))) {
      return ['#00ff88', '#00ccff']; // Neon
    }
    if (keywords.some(k => k.includes('retro') || k.includes('80s'))) {
      return ['#a855f7', '#ec4899']; // Retro
    }
    if (keywords.some(k => k.includes('minimal'))) {
      return ['#64748b', '#475569']; // Minimal
    }

    return ['#0ea5e9', '#0284c7']; // Default blue
  }

  private getShape(keywords: string[]): string {
    const size = 200;
    const cx = 256;
    const cy = 180;

    // Check for specific shapes
    if (keywords.some(k => ['camera', 'photo', 'picture'].includes(k))) {
      return `<rect x="${cx-size/2}" y="${cy-size/2}" width="${size}" height="${size*0.75}" 
                fill="white" opacity="0.9" rx="20" filter="url(#glow)"/>
              <circle cx="${cx}" cy="${cy}" r="${size*0.25}" fill="none" stroke="${this.getColors(keywords)[1]}" stroke-width="8"/>`;
    }
    
    if (keywords.some(k => ['phone', 'mobile', 'call'].includes(k))) {
      return `<rect x="${cx-size*0.3}" y="${cy-size/2}" width="${size*0.6}" height="${size}" 
                fill="white" opacity="0.9" rx="20" filter="url(#glow)"/>
              <circle cx="${cx}" cy="${cy+size*0.25}" r="${size*0.1}" fill="${this.getColors(keywords)[1]}"/>`;
    }
    
    if (keywords.some(k => ['mail', 'email', 'message'].includes(k))) {
      return `<rect x="${cx-size/2}" y="${cy-size*0.35}" width="${size}" height="${size*0.7}" 
                fill="white" opacity="0.9" rx="10" filter="url(#glow)"/>
              <path d="M ${cx-size/2} ${cy-size*0.35} L ${cx} ${cy} L ${cx+size/2} ${cy-size*0.35}" 
                stroke="${this.getColors(keywords)[1]}" stroke-width="4" fill="none"/>`;
    }
    
    if (keywords.some(k => ['bank', 'money', 'finance'].includes(k))) {
      return `<rect x="${cx-size/2}" y="${cy-size*0.3}" width="${size}" height="${size*0.6}" 
                fill="white" opacity="0.9" rx="10" filter="url(#glow)"/>
              <text x="${cx}" y="${cy+10}" font-size="60" text-anchor="middle" fill="${this.getColors(keywords)[1]}">$</text>`;
    }
    
    if (keywords.some(k => ['music', 'audio', 'sound'].includes(k))) {
      return `<rect x="${cx-size*0.2}" y="${cy-size*0.4}" width="${size*0.15}" height="${size*0.6}" 
                fill="white" opacity="0.9" rx="5" filter="url(#glow)"/>
              <rect x="${cx+size*0.05}" y="${cy-size*0.4}" width="${size*0.15}" height="${size*0.6}" 
                fill="white" opacity="0.9" rx="5" filter="url(#glow)"/>`;
    }

    // Default: Circle
    return `<circle cx="${cx}" cy="${cy}" r="${size/2}" fill="white" opacity="0.9" filter="url(#glow)"/>`;
  }

  private getIconText(keywords: string[]): string {
    const iconKeywords = ['camera', 'phone', 'bank', 'music', 'mail', 'map', 'home', 'user', 'settings', 'search'];
    
    for (const keyword of keywords) {
      if (iconKeywords.includes(keyword)) {
        return keyword.charAt(0).toUpperCase() + keyword.slice(1);
      }
    }
    
    // Extract first meaningful word
    const meaningful = keywords.find(k => k.length > 3);
    if (meaningful) {
      return meaningful.charAt(0).toUpperCase() + meaningful.slice(1, 8);
    }
    
    return 'Icon';
  }

  async dispose(): Promise<void> {
    this.isReady = false;
  }
}
