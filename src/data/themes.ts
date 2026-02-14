import { Theme } from '@/types';

export const themes: Theme[] = [
  {
    id: 'minimal',
    name: 'Minimal',
    emoji: '⚪',
    description: 'Clean, simple, modern',
    style: 'minimalist design, flat style, solid colors, simple geometric shapes, clean lines, modern, professional, white space, duotone, elegant, sophisticated, material design',
    negative: 'cluttered, complex, gradients, shadows, ornate, decorative, busy',
    previewColor: '#64748b',
    icon: '⚪'
  },
  {
    id: 'neon',
    name: 'Neon',
    emoji: '🌟',
    description: 'Cyberpunk, glowing, vibrant',
    style: 'neon lights, cyberpunk, glowing edges, electric blue, hot pink, lime green, synthwave, futuristic, high contrast, black background, luminescent, vibrant colors, tech noir',
    negative: 'muted colors, pastel, natural, organic, soft, vintage',
    previewColor: '#06b6d4',
    icon: '🌟'
  },
  {
    id: 'retro',
    name: 'Retro',
    emoji: '🕹️',
    description: '80s style, vaporwave',
    style: '80s retro style, vaporwave, pixel art aesthetic, bright colors, geometric patterns, retro-futuristic, chrome, sunset gradient, palm trees, grid, nostalgic, Memphis design, synthwave',
    negative: 'modern minimal, flat design, monochrome, contemporary',
    previewColor: '#f97316',
    icon: '🕹️'
  },
  {
    id: 'kawaii',
    name: 'Kawaii',
    emoji: '🌸',
    description: 'Cute, pastel, Japanese',
    style: 'kawaii style, cute, pastel colors, pink, soft gradients, rounded shapes, adorable, Japanese aesthetic, anime influence, sparkles, hearts, bows, cheerful, playful, soft lighting',
    negative: 'dark, serious, angular, harsh, realistic, violent, scary',
    previewColor: '#ec4899',
    icon: '🌸'
  },
  {
    id: 'drift',
    name: 'Drift',
    emoji: '🏎️',
    description: 'Racing, speed, dynamic',
    style: 'racing style, JDM, drift culture, speed lines, motion blur, flames, checkered flag, tire marks, street racing, dynamic angles, aggressive, sporty, red and black, flames, nitro',
    negative: 'static, slow, calm, peaceful, soft, gentle, quiet',
    previewColor: '#dc2626',
    icon: '🏎️'
  }
];

export const getThemeById = (id: string): Theme | undefined => 
  themes.find(theme => theme.id === id);

export const getDefaultTheme = (): Theme => themes[0];
