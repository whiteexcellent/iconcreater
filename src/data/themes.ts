import { Theme } from '@/types';

export const THEMES: Theme[] = [
  {
    id: 'kawaii',
    name: 'Kawaii',
    description: 'Cute pastel style with soft lighting',
    style: 'kawaii style, pastel pink and purple, sticker aesthetic, 3D clay render, cute, soft lighting, chibi, rounded shapes, glossy, adorable, soft shadows',
    negative: 'dark, realistic, photo, scary, sharp edges, grayscale, monochrome, ugly, deformed, horror, gore, violence',
    previewColor: '#FF6B9D',
    controlNetStrength: 0.75,
    icon: 'heart'
  },
  {
    id: 'drift',
    name: 'Drift',
    description: 'JDM racing aesthetic with neon lights',
    style: 'JDM style, neon lights, carbon fiber texture, slick design, futuristic, sports aesthetic, cyberpunk, metallic, gradient blue and purple, glow effects, racing stripes, tuner car culture, midnight racing',
    negative: 'classic, vintage, slow, wooden, rustic, cartoon, cute, soft, rounded, family car, minivan',
    previewColor: '#00D2FF',
    controlNetStrength: 0.85,
    icon: 'zap'
  },
  {
    id: 'minimal',
    name: 'Minimal',
    description: 'Clean flat design with geometric shapes',
    style: 'minimalist design, flat style, solid colors, simple geometric shapes, clean lines, modern, professional, white space, duotone, elegant, sophisticated, material design',
    negative: 'gradient, complex, detailed, texture, 3d, shadow, realistic, ornate, decorative, skeuomorphic',
    previewColor: '#667EEA',
    controlNetStrength: 0.9,
    icon: 'minimize'
  },
  {
    id: 'neon',
    name: 'Neon',
    description: 'Cyberpunk glow effects and vibrant colors',
    style: 'neon cyberpunk style, glowing outlines, dark background with bright accents, synthwave, retro-futuristic, pink and cyan, electric glow, grid patterns, vibrant colors, high contrast, 80s retro wave',
    negative: 'natural, organic, pastel, white background, daylight, soft, muted colors, brown, earth tones',
    previewColor: '#F093FB',
    controlNetStrength: 0.8,
    icon: 'lightbulb'
  },
  {
    id: 'retro',
    name: 'Retro',
    description: '80s vaporwave aesthetic with bright colors',
    style: '80s retro style, vaporwave, pixel art aesthetic, bright colors, geometric patterns, retro-futuristic, chrome, sunset gradient, palm trees, grid, nostalgic, Memphis design, synthwave',
    negative: 'modern, minimalist, flat, realistic, 3d render, photorealistic, flat design, material design',
    previewColor: '#FA709A',
    controlNetStrength: 0.8,
    icon: 'cassette-tape'
  }
];

export const getThemeById = (id: string): Theme | undefined => {
  return THEMES.find(theme => theme.id === id);
};

export const getDefaultTheme = (): Theme => THEMES[0];
