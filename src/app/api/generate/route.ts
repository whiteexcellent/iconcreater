// src/app/api/generate/route.ts
// Pollinations.ai - Ücretsiz, API Key Gerektirmez
// NOT: Görsel URL'si döndürülür, client tarafından yüklenir

import { NextRequest, NextResponse } from 'next/server';
import { PromptBuilder } from '@/lib/utils/prompt-builder';
import { getThemeById } from '@/data/themes';
import { getIconById } from '@/data/icons';

// Rate limiting için basit memory store
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 1000;
  const maxRequests = parseInt(process.env.RATE_LIMIT_REQUESTS_PER_MINUTE || '10');
  
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

export async function POST(req: NextRequest) {
  try {
    // 1. Rate Limit Kontrolü
    const clientIp = getClientIp(req);
    if (!checkRateLimit(clientIp)) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please try again later.' },
        { status: 429 }
      );
    }

    // 2. Request Body'yi al
    const body = await req.json();
    const { iconId, themeId, customPrompt } = body;

    if (!iconId || !themeId) {
      return NextResponse.json(
        { error: 'Missing required fields: iconId and themeId' },
        { status: 400 }
      );
    }

    // 3. Icon ve Theme'yi bul
    const icon = getIconById(iconId);
    const theme = getThemeById(themeId);

    if (!icon || !theme) {
      return NextResponse.json(
        { error: 'Invalid icon or theme' },
        { status: 400 }
      );
    }

    // 4. Prompt oluştur
    const prompt = PromptBuilder.buildPrompt(icon, theme, customPrompt);
    const seed = Math.floor(Math.random() * 1000000);
    
    console.log('Generating image for:', icon.name, '| Theme:', theme.name);
    console.log('Prompt:', prompt);

    // 5. Pollinations.ai URL oluştur
    const encodedPrompt = encodeURIComponent(prompt);
    const imageUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=512&height=512&seed=${seed}&nologo=true`;
    
    console.log('Image URL:', imageUrl);

    // 6. URL'yi doğrula (HEAD request - hızlı)
    try {
      const headResponse = await fetch(imageUrl, { 
        method: 'HEAD',
        signal: AbortSignal.timeout(5000) // 5 saniye timeout
      });
      
      if (!headResponse.ok) {
        console.error('Pollinations HEAD check failed:', headResponse.status);
        throw new Error('Pollinations service unavailable');
      }
    } catch (headError) {
      console.error('HEAD request error:', headError);
      // HEAD request başarısız olsa bile devam et, görsel yine de oluşabilir
    }

    // 7. SVG placeholder oluştur
    const svgData = createSVGFromImage(icon.name, theme.name, theme.previewColor);

    // 8. Başarılı yanıt döndür (URL'yi client'a gönder)
    return NextResponse.json({
      success: true,
      data: {
        id: crypto.randomUUID(),
        iconId,
        themeId,
        prompt,
        pngData: imageUrl, // Direkt URL döndür
        svgData,
        timestamp: new Date().toISOString(),
        model: 'Pollinations.ai',
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

// Basit SVG oluşturucu (placeholder)
function createSVGFromImage(iconName: string, themeName: string, color: string): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
    <rect width="512" height="512" fill="${color}" rx="64"/>
    <circle cx="256" cy="200" r="100" fill="white" opacity="0.9"/>
    <text x="256" y="380" font-family="Arial, sans-serif" font-size="48" fill="white" text-anchor="middle" font-weight="bold">${iconName}</text>
    <text x="256" y="440" font-family="Arial, sans-serif" font-size="24" fill="white" text-anchor="middle" opacity="0.8">${themeName}</text>
  </svg>`;
}

// CORS ayarları
export async function OPTIONS() {
  return NextResponse.json({}, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
