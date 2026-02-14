// src/lib/image-generation/generators/svg-fallback.ts
// Enhanced SVG Generator - Professional Icon Generator

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
    return true;
  }

  async initialize(): Promise<void> {
    this.isReady = true;
    this.updateProgress(100);
    console.log('✅ SVG Generator ready');
  }

  async generate(options: GenerationOptions): Promise<Blob> {
    const startTime = Date.now();
    
    const keywords = this.extractKeywords(options.prompt);
    const theme = this.detectTheme(keywords);
    const iconType = this.detectIconType(keywords);
    
    const svg = this.createAdvancedSVG({
      width: options.width || 512,
      height: options.height || 512,
      theme,
      iconType,
      keywords
    });
    
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

  private detectTheme(keywords: string[]): string {
    if (keywords.some(k => k.includes('kawaii') || k.includes('cute') || k.includes('pink'))) return 'kawaii';
    if (keywords.some(k => k.includes('neon') || k.includes('cyber') || k.includes('glow'))) return 'neon';
    if (keywords.some(k => k.includes('retro') || k.includes('80s') || k.includes('vaporwave'))) return 'retro';
    if (keywords.some(k => k.includes('minimal') || k.includes('flat') || k.includes('simple'))) return 'minimal';
    if (keywords.some(k => k.includes('dark') || k.includes('black') || k.includes('night'))) return 'dark';
    if (keywords.some(k => k.includes('gradient') || k.includes('modern'))) return 'gradient';
    return 'default';
  }

  private detectIconType(keywords: string[]): string {
    const iconMap: Record<string, string[]> = {
      'camera': ['camera', 'photo', 'picture', 'image', 'gallery'],
      'phone': ['phone', 'mobile', 'call', 'telephone', 'cell'],
      'mail': ['mail', 'email', 'message', 'envelope', 'letter'],
      'bank': ['bank', 'money', 'finance', 'dollar', 'cash', 'wallet'],
      'music': ['music', 'audio', 'sound', 'song', 'play', 'note'],
      'map': ['map', 'location', 'pin', 'gps', 'navigation', 'place'],
      'home': ['home', 'house', 'building', 'residence'],
      'user': ['user', 'person', 'profile', 'account', 'avatar'],
      'settings': ['settings', 'gear', 'config', 'preferences'],
      'search': ['search', 'find', 'magnifier', 'look'],
      'heart': ['heart', 'love', 'favorite', 'like'],
      'star': ['star', 'rating', 'favorite', 'bookmark'],
      'cloud': ['cloud', 'weather', 'sky', 'storage'],
      'lock': ['lock', 'security', 'privacy', 'password', 'secure'],
      'key': ['key', 'password', 'access', 'unlock'],
      'calendar': ['calendar', 'date', 'schedule', 'event'],
      'clock': ['clock', 'time', 'watch', 'timer'],
      'chat': ['chat', 'message', 'conversation', 'talk', 'bubble'],
      'bell': ['bell', 'notification', 'alert', 'reminder'],
      'cart': ['cart', 'shopping', 'buy', 'store', 'basket'],
      'trash': ['trash', 'delete', 'remove', 'bin'],
      'edit': ['edit', 'write', 'pen', 'pencil', 'modify'],
      'share': ['share', 'send', 'forward', 'export'],
      'download': ['download', 'save', 'import', 'get'],
      'upload': ['upload', 'export', 'send', 'cloud'],
      'wifi': ['wifi', 'signal', 'network', 'connection', 'internet'],
      'bluetooth': ['bluetooth', 'wireless', 'connect'],
      'battery': ['battery', 'power', 'charge', 'energy'],
      'flash': ['flash', 'lightning', 'bolt', 'electric', 'power'],
      'bookmark': ['bookmark', 'save', 'favorite', 'mark']
    };

    for (const [icon, words] of Object.entries(iconMap)) {
      if (words.some(w => keywords.includes(w))) return icon;
    }
    
    return 'default';
  }

  private createAdvancedSVG({
    width,
    height,
    theme,
    iconType,
    keywords
  }: {
    width: number;
    height: number;
    theme: string;
    iconType: string;
    keywords: string[];
  }): string {
    const colors = this.getThemeColors(theme);
    const cx = width / 2;
    const cy = height / 2;
    const size = Math.min(width, height) * 0.4;
    
    const defs = this.createDefs(theme, colors);
    const background = this.createBackground(width, height, theme, colors);
    const icon = this.createIcon(iconType, cx, cy, size, colors, theme);
    const decorations = this.createDecorations(width, height, theme, colors);
    
    return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  ${defs}
  ${background}
  ${decorations}
  ${icon}
</svg>`;
  }

  private createDefs(theme: string, colors: string[]): string {
    const gradientId = 'mainGradient';
    const glowId = 'glow';
    const shadowId = 'shadow';
    
    let defs = `
  <defs>
    <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${colors[0]};stop-opacity:1" />
      <stop offset="50%" style="stop-color:${colors[1]};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${colors[2] || colors[1]};stop-opacity:1" />
    </linearGradient>
    
    <filter id="${glowId}" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="15" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
    
    <filter id="${shadowId}" x="-50%" y="-50%" width="200%" height="200%">
      <feDropShadow dx="0" dy="10" stdDeviation="20" flood-color="black" flood-opacity="0.3"/>
    </filter>
    
    <filter id="innerShadow">
      <feOffset dx="0" dy="5"/>
      <feGaussianBlur stdDeviation="5" result="offset-blur"/>
      <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse"/>
      <feFlood flood-color="black" flood-opacity="0.2" result="color"/>
      <feComposite operator="in" in="color" in2="inverse" result="shadow"/>
      <feComposite operator="over" in="shadow" in2="SourceGraphic"/>
    </filter>
  </defs>`;
    
    return defs;
  }

  private createBackground(width: number, height: number, theme: string, colors: string[]): string {
    const radius = Math.min(width, height) * 0.2;
    
    if (theme === 'kawaii') {
      return `
  <!-- Kawaii Background -->
  <rect width="${width}" height="${height}" fill="url(#mainGradient)" rx="${radius}"/>
  <circle cx="${width * 0.2}" cy="${height * 0.2}" r="${width * 0.08}" fill="white" opacity="0.3"/>
  <circle cx="${width * 0.8}" cy="${height * 0.15}" r="${width * 0.06}" fill="white" opacity="0.2"/>
  <circle cx="${width * 0.85}" cy="${height * 0.8}" r="${width * 0.1}" fill="white" opacity="0.25"/>`;
    }
    
    if (theme === 'neon') {
      return `
  <!-- Neon Background -->
  <rect width="${width}" height="${height}" fill="#0a0a0a" rx="${radius}"/>
  <rect width="${width}" height="${height}" fill="url(#mainGradient)" rx="${radius}" opacity="0.8"/>
  <rect x="20" y="20" width="${width - 40}" height="${height - 40}" fill="none" stroke="${colors[0]}" stroke-width="4" rx="${radius - 20}" filter="url(#glow)"/>`;
    }
    
    if (theme === 'minimal') {
      return `
  <!-- Minimal Background -->
  <rect width="${width}" height="${height}" fill="#ffffff" rx="${radius}"/>
  <rect x="${width * 0.1}" y="${height * 0.1}" width="${width * 0.8}" height="${height * 0.8}" fill="${colors[0]}" rx="${radius * 0.5}"/>`;
    }
    
    // Default gradient background
    return `
  <!-- Default Gradient Background -->
  <rect width="${width}" height="${height}" fill="url(#mainGradient)" rx="${radius}" filter="url(#shadow)"/>`;
  }

  private createDecorations(width: number, height: number, theme: string, colors: string[]): string {
    if (theme === 'kawaii') {
      return `
  <!-- Kawaii Decorations -->
  <text x="${width * 0.15}" y="${height * 0.9}" font-family="Arial" font-size="40" fill="white" opacity="0.6">✨</text>
  <text x="${width * 0.85}" y="${height * 0.25}" font-family="Arial" font-size="30" fill="white" opacity="0.5">💖</text>`;
    }
    
    if (theme === 'retro') {
      return `
  <!-- Retro Grid -->
  <defs>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" stroke-width="0.5" opacity="0.1"/>
    </pattern>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#grid)"/>`;
    }
    
    return '';
  }

  private createIcon(iconType: string, cx: number, cy: number, size: number, colors: string[], theme: string): string {
    const iconSize = size * 0.6;
    const x = cx - iconSize / 2;
    const y = cy - iconSize / 2;
    
    const iconColor = theme === 'minimal' ? '#ffffff' : 'white';
    const accentColor = colors[1];
    
    const icons: Record<string, string> = {
      camera: this.createCameraIcon(cx, cy, iconSize, iconColor, accentColor),
      phone: this.createPhoneIcon(cx, cy, iconSize, iconColor, accentColor),
      mail: this.createMailIcon(cx, cy, iconSize, iconColor, accentColor),
      bank: this.createBankIcon(cx, cy, iconSize, iconColor, accentColor),
      music: this.createMusicIcon(cx, cy, iconSize, iconColor, accentColor),
      map: this.createMapIcon(cx, cy, iconSize, iconColor, accentColor),
      home: this.createHomeIcon(cx, cy, iconSize, iconColor, accentColor),
      user: this.createUserIcon(cx, cy, iconSize, iconColor, accentColor),
      settings: this.createSettingsIcon(cx, cy, iconSize, iconColor, accentColor),
      search: this.createSearchIcon(cx, cy, iconSize, iconColor, accentColor),
      heart: this.createHeartIcon(cx, cy, iconSize, iconColor, accentColor),
      star: this.createStarIcon(cx, cy, iconSize, iconColor, accentColor),
      cloud: this.createCloudIcon(cx, cy, iconSize, iconColor, accentColor),
      lock: this.createLockIcon(cx, cy, iconSize, iconColor, accentColor),
      key: this.createKeyIcon(cx, cy, iconSize, iconColor, accentColor),
      calendar: this.createCalendarIcon(cx, cy, iconSize, iconColor, accentColor),
      clock: this.createClockIcon(cx, cy, iconSize, iconColor, accentColor),
      chat: this.createChatIcon(cx, cy, iconSize, iconColor, accentColor),
      bell: this.createBellIcon(cx, cy, iconSize, iconColor, accentColor),
      cart: this.createCartIcon(cx, cy, iconSize, iconColor, accentColor),
      trash: this.createTrashIcon(cx, cy, iconSize, iconColor, accentColor),
      edit: this.createEditIcon(cx, cy, iconSize, iconColor, accentColor),
      share: this.createShareIcon(cx, cy, iconSize, iconColor, accentColor),
      download: this.createDownloadIcon(cx, cy, iconSize, iconColor, accentColor),
      upload: this.createUploadIcon(cx, cy, iconSize, iconColor, accentColor),
      wifi: this.createWifiIcon(cx, cy, iconSize, iconColor, accentColor),
      bluetooth: this.createBluetoothIcon(cx, cy, iconSize, iconColor, accentColor),
      battery: this.createBatteryIcon(cx, cy, iconSize, iconColor, accentColor),
      flash: this.createFlashIcon(cx, cy, iconSize, iconColor, accentColor),
      bookmark: this.createBookmarkIcon(cx, cy, iconSize, iconColor, accentColor)
    };
    
    return icons[iconType] || this.createDefaultIcon(cx, cy, iconSize, iconColor);
  }

  // Icon creation methods
  private createCameraIcon(cx: number, cy: number, size: number, color: string, accent: string): string {
    const w = size;
    const h = size * 0.75;
    const x = cx - w / 2;
    const y = cy - h / 2;
    return `
  <!-- Camera Icon -->
  <rect x="${x}" y="${y + h * 0.15}" width="${w}" height="${h * 0.7}" rx="${w * 0.1}" fill="${color}" filter="url(#innerShadow)"/>
  <rect x="${cx - w * 0.15}" y="${y}" width="${w * 0.3}" height="${h * 0.2}" rx="${w * 0.05}" fill="${color}"/>
  <circle cx="${cx}" cy="${cy}" r="${w * 0.25}" fill="none" stroke="${accent}" stroke-width="${w * 0.05}"/>`;
  }

  private createPhoneIcon(cx: number, cy: number, size: number, color: string, accent: string): string {
    const w = size * 0.6;
    const h = size;
    const x = cx - w / 2;
    const y = cy - h / 2;
    return `
  <!-- Phone Icon -->
  <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${w * 0.15}" fill="${color}" filter="url(#innerShadow)"/>
  <circle cx="${cx}" cy="${cy + h * 0.35}" r="${w * 0.12}" fill="${accent}"/>`;
  }

  private createMailIcon(cx: number, cy: number, size: number, color: string, accent: string): string {
    const w = size;
    const h = size * 0.7;
    const x = cx - w / 2;
    const y = cy - h / 2;
    return `
  <!-- Mail Icon -->
  <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${w * 0.05}" fill="${color}" filter="url(#innerShadow)"/>
  <path d="M ${x} ${y} L ${cx} ${cy} L ${x + w} ${y}" stroke="${accent}" stroke-width="${w * 0.03}" fill="none"/>
  <path d="M ${x} ${y + h} L ${cx} ${cy} L ${x + w} ${y + h}" stroke="${accent}" stroke-width="${w * 0.03}" fill="none"/>`;
  }

  private createBankIcon(cx: number, cy: number, size: number, color: string, accent: string): string {
    const w = size;
    const h = size * 0.6;
    const x = cx - w / 2;
    const y = cy - h / 2;
    return `
  <!-- Bank Icon -->
  <rect x="${x}" y="${y + h * 0.3}" width="${w}" height="${h * 0.7}" fill="${color}" filter="url(#innerShadow)"/>
  <path d="M ${x} ${y + h * 0.3} L ${cx} ${y} L ${x + w} ${y + h * 0.3} Z" fill="${color}"/>
  <text x="${cx}" y="${cy + h * 0.2}" font-family="Arial" font-size="${w * 0.5}" fill="${accent}" text-anchor="middle" font-weight="bold">$</text>`;
  }

  private createMusicIcon(cx: number, cy: number, size: number, color: string, accent: string): string {
    const w = size * 0.6;
    const h = size;
    const x = cx - w / 2;
    const y = cy - h / 2;
    return `
  <!-- Music Icon -->
  <rect x="${x + w * 0.3}" y="${y}" width="${w * 0.15}" height="${h * 0.7}" fill="${color}" rx="${w * 0.05}" filter="url(#innerShadow)"/>
  <rect x="${x + w * 0.6}" y="${y}" width="${w * 0.15}" height="${h * 0.7}" fill="${color}" rx="${w * 0.05}" filter="url(#innerShadow)"/>
  <circle cx="${x + w * 0.375}" cy="${y + h * 0.75}" r="${w * 0.15}" fill="${color}"/>
  <circle cx="${x + w * 0.675}" cy="${y + h * 0.75}" r="${w * 0.15}" fill="${color}"/>`;
  }

  private createMapIcon(cx: number, cy: number, size: number, color: string, accent: string): string {
    return `
  <!-- Map Pin Icon -->
  <path d="M ${cx} ${cy - size * 0.4} 
           C ${cx - size * 0.3} ${cy - size * 0.4}, ${cx - size * 0.3} ${cy}, ${cx} ${cy + size * 0.3}
           C ${cx + size * 0.3} ${cy}, ${cx + size * 0.3} ${cy - size * 0.4}, ${cx} ${cy - size * 0.4} Z" 
        fill="${color}" filter="url(#innerShadow)"/>
  <circle cx="${cx}" cy="${cy - size * 0.1}" r="${size * 0.15}" fill="${accent}"/>`;
  }

  private createHomeIcon(cx: number, cy: number, size: number, color: string, accent: string): string {
    const s = size * 0.8;
    const x = cx - s / 2;
    const y = cy - s / 2;
    return `
  <!-- Home Icon -->
  <path d="M ${cx} ${y} L ${x} ${cy} L ${x + s * 0.2} ${cy} L ${x + s * 0.2} ${y + s} L ${x + s * 0.8} ${y + s} L ${x + s * 0.8} ${cy} L ${x + s} ${cy} Z" 
        fill="${color}" filter="url(#innerShadow)"/>
  <rect x="${cx - s * 0.15}" y="${cy + s * 0.1}" width="${s * 0.3}" height="${s * 0.4}" fill="${accent}" rx="${s * 0.05}"/>`;
  }

  private createUserIcon(cx: number, cy: number, size: number, color: string, accent: string): string {
    return `
  <!-- User Icon -->
  <circle cx="${cx}" cy="${cy - size * 0.15}" r="${size * 0.25}" fill="${color}" filter="url(#innerShadow)"/>
  <path d="M ${cx - size * 0.4} ${cy + size * 0.45} 
           C ${cx - size * 0.4} ${cy + size * 0.15}, ${cx + size * 0.4} ${cy + size * 0.15}, ${cx + size * 0.4} ${cy + size * 0.45} Z" 
        fill="${color}" filter="url(#innerShadow)"/>`;
  }

  private createSettingsIcon(cx: number, cy: number, size: number, color: string, accent: string): string {
    const teeth = 8;
    let path = '';
    const outerRadius = size * 0.45;
    const innerRadius = size * 0.3;
    
    for (let i = 0; i < teeth * 2; i++) {
      const angle = (i * Math.PI) / teeth;
      const radius = i % 2 === 0 ? outerRadius : innerRadius;
      const x = cx + Math.cos(angle) * radius;
      const y = cy + Math.sin(angle) * radius;
      path += (i === 0 ? 'M' : 'L') + ` ${x} ${y}`;
    }
    path += ' Z';
    
    return `
  <!-- Settings Gear Icon -->
  <path d="${path}" fill="${color}" filter="url(#innerShadow)"/>
  <circle cx="${cx}" cy="${cy}" r="${size * 0.15}" fill="${accent}"/>`;
  }

  private createSearchIcon(cx: number, cy: number, size: number, color: string, accent: string): string {
    return `
  <!-- Search Icon -->
  <circle cx="${cx - size * 0.1}" cy="${cy - size * 0.1}" r="${size * 0.3}" fill="none" stroke="${color}" stroke-width="${size * 0.08}" filter="url(#innerShadow)"/>
  <line x1="${cx + size * 0.15}" y1="${cy + size * 0.15}" x2="${cx + size * 0.4}" y2="${cy + size * 0.4}" stroke="${color}" stroke-width="${size * 0.08}" stroke-linecap="round"/>`;
  }

  private createHeartIcon(cx: number, cy: number, size: number, color: string, accent: string): string {
    return `
  <!-- Heart Icon -->
  <path d="M ${cx} ${cy + size * 0.35}
           C ${cx} ${cy + size * 0.35}, ${cx - size * 0.5} ${cy}, ${cx - size * 0.5} ${cy - size * 0.15}
           C ${cx - size * 0.5} ${cy - size * 0.45}, ${cx - size * 0.25} ${cy - size * 0.45}, ${cx} ${cy - size * 0.25}
           C ${cx + size * 0.25} ${cy - size * 0.45}, ${cx + size * 0.5} ${cy - size * 0.45}, ${cx + size * 0.5} ${cy - size * 0.15}
           C ${cx + size * 0.5} ${cy}, ${cx} ${cy + size * 0.35}, ${cx} ${cy + size * 0.35} Z"
        fill="${color}" filter="url(#innerShadow)"/>`;
  }

  private createStarIcon(cx: number, cy: number, size: number, color: string, accent: string): string {
    let path = '';
    const points = 5;
    const outerRadius = size * 0.5;
    const innerRadius = size * 0.2;
    
    for (let i = 0; i < points * 2; i++) {
      const angle = (i * Math.PI) / points - Math.PI / 2;
      const radius = i % 2 === 0 ? outerRadius : innerRadius;
      const x = cx + Math.cos(angle) * radius;
      const y = cy + Math.sin(angle) * radius;
      path += (i === 0 ? 'M' : 'L') + ` ${x} ${y}`;
    }
    path += ' Z';
    
    return `
  <!-- Star Icon -->
  <path d="${path}" fill="${color}" filter="url(#innerShadow)"/>`;
  }

  private createCloudIcon(cx: number, cy: number, size: number, color: string, accent: string): string {
    return `
  <!-- Cloud Icon -->
  <ellipse cx="${cx - size * 0.2}" cy="${cy}" rx="${size * 0.25}" ry="${size * 0.2}" fill="${color}" filter="url(#innerShadow)"/>
  <ellipse cx="${cx + size * 0.2}" cy="${cy}" rx="${size * 0.25}" ry="${size * 0.2}" fill="${color}" filter="url(#innerShadow)"/>
  <ellipse cx="${cx}" cy="${cy - size * 0.1}" rx="${size * 0.3}" ry="${size * 0.25}" fill="${color}" filter="url(#innerShadow)"/>`;
  }

  private createLockIcon(cx: number, cy: number, size: number, color: string, accent: string): string {
    const w = size * 0.7;
    const h = size * 0.6;
    const x = cx - w / 2;
    const y = cy;
    return `
  <!-- Lock Icon -->
  <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${w * 0.1}" fill="${color}" filter="url(#innerShadow)"/>
  <path d="M ${x + w * 0.2} ${y} L ${x + w * 0.2} ${y - h * 0.5} 
           C ${x + w * 0.2} ${y - h * 0.8}, ${x + w * 0.8} ${y - h * 0.8}, ${x + w * 0.8} ${y - h * 0.5}
           L ${x + w * 0.8} ${y}" 
        stroke="${color}" stroke-width="${w * 0.12}" fill="none" stroke-linecap="round"/>
  <circle cx="${cx}" cy="${y + h * 0.45}" r="${w * 0.12}" fill="${accent}"/>`;
  }

  private createKeyIcon(cx: number, cy: number, size: number, color: string, accent: string): string {
    return `
  <!-- Key Icon -->
  <circle cx="${cx - size * 0.25}" cy="${cy}" r="${size * 0.25}" fill="none" stroke="${color}" stroke-width="${size * 0.1}" filter="url(#innerShadow)"/>
  <circle cx="${cx - size * 0.25}" cy="${cy}" r="${size * 0.08}" fill="${accent}"/>
  <line x1="${cx}" y1="${cy}" x2="${cx + size * 0.4}" y2="${cy}" stroke="${color}" stroke-width="${size * 0.1}" stroke-linecap="round"/>
  <line x1="${cx + size * 0.25}" y1="${cy}" x2="${cx + size * 0.25}" y2="${cy + size * 0.15}" stroke="${color}" stroke-width="${size * 0.08}"/>`;
  }

  private createCalendarIcon(cx: number, cy: number, size: number, color: string, accent: string): string {
    const w = size * 0.8;
    const h = size * 0.75;
    const x = cx - w / 2;
    const y = cy - h / 2;
    return `
  <!-- Calendar Icon -->
  <rect x="${x}" y="${y + h * 0.15}" width="${w}" height="${h * 0.85}" rx="${w * 0.08}" fill="${color}" filter="url(#innerShadow)"/>
  <line x1="${x}" y1="${y + h * 0.35}" x2="${x + w}" y2="${y + h * 0.35}" stroke="${accent}" stroke-width="${w * 0.06}"/>`;
  }

  private createClockIcon(cx: number, cy: number, size: number, color: string, accent: string): string {
    return `
  <!-- Clock Icon -->
  <circle cx="${cx}" cy="${cy}" r="${size * 0.45}" fill="none" stroke="${color}" stroke-width="${size * 0.08}" filter="url(#innerShadow)"/>
  <line x1="${cx}" y1="${cy}" x2="${cx}" y2="${cy - size * 0.25}" stroke="${color}" stroke-width="${size * 0.06}" stroke-linecap="round"/>
  <line x1="${cx}" y1="${cy}" x2="${cx + size * 0.2}" y2="${cy}" stroke="${color}" stroke-width="${size * 0.06}" stroke-linecap="round"/>`;
  }

  private createChatIcon(cx: number, cy: number, size: number, color: string, accent: string): string {
    const w = size;
    const h = size * 0.75;
    const x = cx - w / 2;
    const y = cy - h / 2;
    return `
  <!-- Chat Bubble Icon -->
  <path d="M ${x + w * 0.1} ${y} 
           L ${x + w * 0.9} ${y} 
           Q ${x + w} ${y} ${x + w} ${y + h * 0.15}
           L ${x + w} ${y + h * 0.6}
           Q ${x + w} ${y + h * 0.75} ${x + w * 0.9} ${y + h * 0.75}
           L ${x + w * 0.4} ${y + h * 0.75}
           L ${x} ${y + h}
           L ${x + w * 0.15} ${y + h * 0.75}
           Q ${x} ${y + h * 0.75} ${x} ${y + h * 0.6}
           L ${x} ${y + h * 0.15}
           Q ${x} ${y} ${x + w * 0.1} ${y} Z"
        fill="${color}" filter="url(#innerShadow)"/>`;
  }

  private createBellIcon(cx: number, cy: number, size: number, color: string, accent: string): string {
    return `
  <!-- Bell Icon -->
  <path d="M ${cx - size * 0.4} ${cy + size * 0.2}
           Q ${cx - size * 0.4} ${cy - size * 0.4}, ${cx} ${cy - size * 0.4}
           Q ${cx + size * 0.4} ${cy - size * 0.4}, ${cx + size * 0.4} ${cy + size * 0.2}
           L ${cx + size * 0.35} ${cy + size * 0.35}
           L ${cx - size * 0.35} ${cy + size * 0.35} Z"
        fill="${color}" filter="url(#innerShadow)"/>
  <path d="M ${cx - size * 0.15} ${cy + size * 0.35} 
           Q ${cx} ${cy + size * 0.5}, ${cx + size * 0.15} ${cy + size * 0.35}" 
        stroke="${color}" stroke-width="${size * 0.08}" fill="none" stroke-linecap="round"/>`;
  }

  private createCartIcon(cx: number, cy: number, size: number, color: string, accent: string): string {
    return `
  <!-- Shopping Cart Icon -->
  <path d="M ${cx - size * 0.4} ${cy - size * 0.2} 
           L ${cx - size * 0.25} ${cy + size * 0.2}
           L ${cx + size * 0.35} ${cy + size * 0.2}" 
        stroke="${color}" stroke-width="${size * 0.08}" fill="none" stroke-linecap="round"/>
  <circle cx="${cx - size * 0.15}" cy="${cy + size * 0.35}" r="${size * 0.1}" fill="${color}"/>
  <circle cx="${cx + size * 0.25}" cy="${cy + size * 0.35}" r="${size * 0.1}" fill="${color}"/>
  <rect x="${cx - size * 0.2}" y="${cy - size * 0.3}" width="${size * 0.5}" height="${size * 0.35}" fill="${color}" rx="${size * 0.03}" filter="url(#innerShadow)"/>`;
  }

  private createTrashIcon(cx: number, cy: number, size: number, color: string, accent: string): string {
    const w = size * 0.7;
    const h = size * 0.8;
    const x = cx - w / 2;
    const y = cy - h / 2;
    return `
  <!-- Trash Icon -->
  <rect x="${x}" y="${y + h * 0.15}" width="${w}" height="${h * 0.85}" rx="${w * 0.08}" fill="${color}" filter="url(#innerShadow)"/>
  <rect x="${x + w * 0.2}" y="${y + h * 0.3}" width="${w * 0.15}" height="${h * 0.5}" fill="${accent}" rx="${w * 0.03}" opacity="0.5"/>
  <rect x="${x + w * 0.5}" y="${y + h * 0.3}" width="${w * 0.15}" height="${h * 0.5}" fill="${accent}" rx="${w * 0.03}" opacity="0.5"/>
  <rect x="${x - w * 0.05}" y="${y}" width="${w * 1.1}" height="${h * 0.12}" rx="${w * 0.06}" fill="${color}"/>`;
  }

  private createEditIcon(cx: number, cy: number, size: number, color: string, accent: string): string {
    return `
  <!-- Edit/Pen Icon -->
  <path d="M ${cx + size * 0.3} ${cy - size * 0.4}
           L ${cx - size * 0.1} ${cy}
           L ${cx - size * 0.35} ${cy + size * 0.4}
           L ${cx + size * 0.1} ${cy + size * 0.2}
           L ${cx + size * 0.35} ${cy - size * 0.2} Z"
        fill="${color}" filter="url(#innerShadow)"/>
  <line x1="${cx - size * 0.35}" y1="${cy + size * 0.4}" x2="${cx - size * 0.45}" y2="${cy + size * 0.5}" stroke="${color}" stroke-width="${size * 0.08}" stroke-linecap="round"/>`;
  }

  private createShareIcon(cx: number, cy: number, size: number, color: string, accent: string): string {
    return `
  <!-- Share Icon -->
  <circle cx="${cx + size * 0.25}" cy="${cy - size * 0.25}" r="${size * 0.12}" fill="${color}" filter="url(#innerShadow)"/>
  <circle cx="${cx - size * 0.25}" cy="${cy}" r="${size * 0.12}" fill="${color}" filter="url(#innerShadow)"/>
  <circle cx="${cx + size * 0.25}" cy="${cy + size * 0.25}" r="${size * 0.12}" fill="${color}" filter="url(#innerShadow)"/>
  <line x1="${cx + size * 0.15}" y1="${cy - size * 0.2}" x2="${cx - size * 0.15}" y2="${cy - size * 0.05}" stroke="${color}" stroke-width="${size * 0.06}" stroke-linecap="round"/>
  <line x1="${cx + size * 0.15}" y1="${cy + size * 0.2}" x2="${cx - size * 0.15}" y2="${cy + size * 0.05}" stroke="${color}" stroke-width="${size * 0.06}" stroke-linecap="round"/>`;
  }

  private createDownloadIcon(cx: number, cy: number, size: number, color: string, accent: string): string {
    return `
  <!-- Download Icon -->
  <path d="M ${cx - size * 0.2} ${cy - size * 0.1} 
           L ${cx} ${cy + size * 0.2} 
           L ${cx + size * 0.2} ${cy - size * 0.1}" 
        stroke="${color}" stroke-width="${size * 0.08}" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="${cx}" y1="${cy - size * 0.35}" x2="${cx}" y2="${cy + size * 0.1}" stroke="${color}" stroke-width="${size * 0.08}" stroke-linecap="round"/>
  <line x1="${cx - size * 0.35}" y1="${cy + size * 0.35}" x2="${cx + size * 0.35}" y2="${cy + size * 0.35}" stroke="${color}" stroke-width="${size * 0.08}" stroke-linecap="round"/>`;
  }

  private createUploadIcon(cx: number, cy: number, size: number, color: string, accent: string): string {
    return `
  <!-- Upload Icon -->
  <path d="M ${cx - size * 0.2} ${cy + size * 0.1} 
           L ${cx} ${cy - size * 0.2} 
           L ${cx + size * 0.2} ${cy + size * 0.1}" 
        stroke="${color}" stroke-width="${size * 0.08}" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="${cx}" y1="${cy + size * 0.35}" x2="${cx}" y2="${cy - size * 0.1}" stroke="${color}" stroke-width="${size * 0.08}" stroke-linecap="round"/>
  <line x1="${cx - size * 0.35}" y1="${cy + size * 0.35}" x2="${cx + size * 0.35}" y2="${cy + size * 0.35}" stroke="${color}" stroke-width="${size * 0.08}" stroke-linecap="round"/>`;
  }

  private createWifiIcon(cx: number, cy: number, size: number, color: string, accent: string): string {
    return `
  <!-- WiFi Icon -->
  <path d="M ${cx - size * 0.4} ${cy + size * 0.2}
           Q ${cx} ${cy - size * 0.3}, ${cx + size * 0.4} ${cy + size * 0.2}" 
        stroke="${color}" stroke-width="${size * 0.08}" fill="none" stroke-linecap="round"/>
  <path d="M ${cx - size * 0.25} ${cy + size * 0.1}
           Q ${cx} ${cy - size * 0.15}, ${cx + size * 0.25} ${cy + size * 0.1}" 
        stroke="${color}" stroke-width="${size * 0.08}" fill="none" stroke-linecap="round"/>
  <circle cx="${cx}" cy="${cy + size * 0.25}" r="${size * 0.08}" fill="${color}"/>`;
  }

  private createBluetoothIcon(cx: number, cy: number, size: number, color: string, accent: string): string {
    return `
  <!-- Bluetooth Icon -->
  <path d="M ${cx - size * 0.2} ${cy - size * 0.35}
           L ${cx + size * 0.15} ${cy}
           L ${cx - size * 0.2} ${cy + size * 0.35}
           L ${cx + size * 0.2} ${cy + size * 0.15}
           L ${cx - size * 0.2} ${cy - size * 0.35}
           L ${cx + size * 0.2} ${cy - size * 0.15} Z"
        stroke="${color}" stroke-width="${size * 0.08}" fill="none" stroke-linejoin="round" stroke-linecap="round"/>`;
  }

  private createBatteryIcon(cx: number, cy: number, size: number, color: string, accent: string): string {
    const w = size * 0.7;
    const h = size * 0.4;
    const x = cx - w / 2;
    const y = cy - h / 2;
    return `
  <!-- Battery Icon -->
  <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${h * 0.1}" fill="none" stroke="${color}" stroke-width="${w * 0.08}" filter="url(#innerShadow)"/>
  <rect x="${x + w * 0.1}" y="${y + h * 0.2}" width="${w * 0.5}" height="${h * 0.6}" rx="${h * 0.05}" fill="${color}"/>
  <rect x="${x + w}" y="${cy - h * 0.15}" width="${w * 0.08}" height="${h * 0.3}" rx="${h * 0.03}" fill="${color}"/>`;
  }

  private createFlashIcon(cx: number, cy: number, size: number, color: string, accent: string): string {
    return `
  <!-- Flash/Lightning Icon -->
  <path d="M ${cx + size * 0.1} ${cy - size * 0.45}
           L ${cx - size * 0.2} ${cy - size * 0.05}
           L ${cx + size * 0.05} ${cy - size * 0.05}
           L ${cx - size * 0.1} ${cy + size * 0.45}
           L ${cx + size * 0.3} ${cy}
           L ${cx + size * 0.05} ${cy} Z"
        fill="${color}" filter="url(#innerShadow)"/>`;
  }

  private createBookmarkIcon(cx: number, cy: number, size: number, color: string, accent: string): string {
    const w = size * 0.6;
    const h = size * 0.8;
    const x = cx - w / 2;
    const y = cy - h / 2;
    return `
  <!-- Bookmark Icon -->
  <path d="M ${x} ${y} 
           L ${x + w} ${y}
           L ${x + w} ${y + h}
           L ${cx} ${y + h * 0.8}
           L ${x} ${y + h} Z"
        fill="${color}" filter="url(#innerShadow)"/>`;
  }

  private createDefaultIcon(cx: number, cy: number, size: number, color: string): string {
    return `
  <!-- Default Icon -->
  <circle cx="${cx}" cy="${cy}" r="${size * 0.4}" fill="${color}" filter="url(#innerShadow)"/>
  <circle cx="${cx - size * 0.1}" cy="${cy - size * 0.1}" r="${size * 0.08}" fill="white" opacity="0.8"/>
  <circle cx="${cx + size * 0.15}" cy="${cy - size * 0.1}" r="${size * 0.08}" fill="white" opacity="0.8"/>
  <path d="M ${cx - size * 0.15} ${cy + size * 0.15} Q ${cx} ${cy + size * 0.25}, ${cx + size * 0.15} ${cy + size * 0.15}" stroke="white" stroke-width="${size * 0.05}" fill="none" stroke-linecap="round"/>`;
  }

  private getThemeColors(theme: string): string[] {
    const themes: Record<string, string[]> = {
      kawaii: ['#ff6b9d', '#c44569', '#f8b500'],
      neon: ['#00ff88', '#00d4ff', '#0099ff'],
      retro: ['#ff006e', '#8338ec', '#3a86ff'],
      minimal: ['#2d3436', '#636e72', '#b2bec3'],
      dark: ['#2d3436', '#000000', '#1e272e'],
      gradient: ['#667eea', '#764ba2', '#f093fb'],
      default: ['#0ea5e9', '#0284c7', '#0369a1']
    };
    
    return themes[theme] || themes.default;
  }

  async dispose(): Promise<void> {
    this.isReady = false;
  }
}
