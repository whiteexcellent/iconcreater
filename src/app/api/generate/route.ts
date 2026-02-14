// src/app/api/generate/route.ts
// MOCK API - Demo görsel üretimi (API çalışmayınca kullanılır)
// Kullanıcı kendi API token'ını ekleyince gerçek API'ye geçilebilir

import { NextRequest, NextResponse } from 'next/server';
import { PromptBuilder } from '@/lib/utils/prompt-builder';
import { getThemeById } from '@/data/themes';
import { getIconById } from '@/data/icons';

// Gerçek API kullanılsın mı?
const USE_REAL_API = false; // Şimdilik mock kullanıyoruz

// Rate limiting
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 60 * 1000;
  const maxRequests = 50;
  
  const current = rateLimitMap.get(ip);
  
  if (!current || now > current.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }
  
  if (current.count >= maxRequests) {
    return false;
  }
  
  current.count++;
  return true;
}

function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get('x-forwarded-for');
  return forwarded ? forwarded.split(',')[0].trim() : 'unknown';
}

// Basit placeholder SVG oluşturucu
function createPlaceholderSVG(iconName: string, themeName: string, themeColor: string): string {
  // Farklı şekiller için farklı SVG'ler
  const shapes = [
    // Circle
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${themeColor};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${adjustColor(themeColor, -40)};stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="512" height="512" fill="url(#grad1)" rx="64"/>
      <circle cx="256" cy="200" r="100" fill="white" opacity="0.9"/>
      <text x="256" y="380" font-family="Arial, sans-serif" font-size="48" fill="white" text-anchor="middle" font-weight="bold">${iconName}</text>
      <text x="256" y="440" font-family="Arial, sans-serif" font-size="24" fill="white" text-anchor="middle" opacity="0.8">${themeName}</text>
    </svg>`,
    // Square
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <defs>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${themeColor};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${adjustColor(themeColor, -40)};stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="512" height="512" fill="url(#grad2)" rx="32"/>
      <rect x="106" y="106" width="300" height="200" fill="white" opacity="0.9" rx="16"/>
      <text x="256" y="380" font-family="Arial, sans-serif" font-size="48" fill="white" text-anchor="middle" font-weight="bold">${iconName}</text>
      <text x="256" y="440" font-family="Arial, sans-serif" font-size="24" fill="white" text-anchor="middle" opacity="0.8">${themeName}</text>
    </svg>`,
    // Hexagon
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <defs>
        <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${themeColor};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${adjustColor(themeColor, -40)};stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="512" height="512" fill="url(#grad3)" rx="64"/>
      <polygon points="256,100 356,175 356,275 256,350 156,275 156,175" fill="white" opacity="0.9"/>
      <text x="256" y="420" font-family="Arial, sans-serif" font-size="40" fill="white" text-anchor="middle" font-weight="bold">${iconName}</text>
    </svg>`
  ];
  
  // Rastgele şekil seç
  const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
  
  // SVG'yi base64'e çevir
  return `data:image/svg+xml;base64,${Buffer.from(randomShape).toString('base64')}`;
}

// Renk ayarlama yardımcı fonksiyon
function adjustColor(color: string, amount: number): string {
  const num = parseInt(color.replace('#', ''), 16);
  const r = Math.max(0, Math.min(255, (num >> 16) + amount));
  const g = Math.max(0, Math.min(255, ((num >> 8) & 0x00FF) + amount));
  const b = Math.max(0, Math.min(255, (num & 0x0000FF) + amount));
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
}

export async function POST(req: NextRequest) {
  try {
    // Rate limit kontrolü
    const clientIp = getClientIp(req);
    if (!checkRateLimit(clientIp)) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { iconId, themeId, customPrompt } = body;

    if (!iconId || !themeId) {
      return NextResponse.json(
        { error: 'Missing iconId or themeId' },
        { status: 400 }
      );
    }

    const icon = getIconById(iconId);
    const theme = getThemeById(themeId);

    if (!icon || !theme) {
      return NextResponse.json(
        { error: 'Invalid icon or theme' },
        { status: 400 }
      );
    }

    // Prompt oluştur (log için)
    const prompt = PromptBuilder.buildPrompt(icon, theme, customPrompt);
    console.log('Generating placeholder for:', icon.name, '| Theme:', theme.name);

    // MOCK: Placeholder SVG oluştur
    // 2 saniye gecikme ekleyelim (gerçek API gibi hissettirsin)
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const placeholderUrl = createPlaceholderSVG(icon.name, theme.name, theme.previewColor);

    return NextResponse.json({
      success: true,
      data: {
        id: crypto.randomUUID(),
        iconId,
        themeId,
        prompt,
        pngData: placeholderUrl,
        svgData: placeholderUrl,
        timestamp: new Date().toISOString(),
        model: 'Demo Mode (Placeholder)',
        isPlaceholder: true,
        message: 'This is a demo placeholder. Connect a real AI API for actual image generation.'
      }
    });

  } catch (error) {
    console.error('Generate API error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
