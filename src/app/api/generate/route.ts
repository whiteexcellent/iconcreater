// src/app/api/generate/route.ts
// SERVER-SIDE: API Key burada güvenle saklanır, client'a asla gitmez!

import { NextRequest, NextResponse } from 'next/server';
import { PromptBuilder } from '@/lib/utils/prompt-builder';
import { getThemeById } from '@/data/themes';
import { getIconById } from '@/data/icons';

// Rate limiting için basit memory store (production'da Redis kullanılabilir)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

// Güvenlik: Rate Limiting
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 dakika
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

// Güvenlik: IP adresini al
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

    // 2. API Key Kontrolü (Server-side only!)
    const apiKey = process.env.FAL_AI_API_KEY;
    if (!apiKey) {
      console.error('FAL_AI_API_KEY not configured');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // 3. Request Body'yi al ve doğrula
    const body = await req.json();
    const { iconId, themeId, customPrompt } = body;

    if (!iconId || !themeId) {
      return NextResponse.json(
        { error: 'Missing required fields: iconId and themeId' },
        { status: 400 }
      );
    }

    // 4. Icon ve Theme'yi bul
    const icon = getIconById(iconId);
    const theme = getThemeById(themeId);

    if (!icon || !theme) {
      return NextResponse.json(
        { error: 'Invalid icon or theme' },
        { status: 400 }
      );
    }

    // 5. Prompt oluştur
    const prompt = PromptBuilder.buildPrompt(icon, theme, customPrompt);
    
    // 6. Fal.ai API'ye istek at (API Key SADECE server'da!)
    const falResponse = await fetch('https://fal.run/fal-ai/fast-sdxl', {
      method: 'POST',
      headers: {
        'Authorization': `Key ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt,
        negative_prompt: theme.negative,
        image_size: 'square_hd', // 1024x1024
        num_inference_steps: 4,
        guidance_scale: 7.5,
      }),
    });

    if (!falResponse.ok) {
      const errorText = await falResponse.text();
      console.error('Fal.ai API error:', errorText);
      return NextResponse.json(
        { error: 'Image generation failed' },
        { status: 502 }
      );
    }

    // 7. Fal.ai'den gelen cevabı işle
    const falData = await falResponse.json();
    
    if (!falData.images || falData.images.length === 0) {
      return NextResponse.json(
        { error: 'No image generated' },
        { status: 500 }
      );
    }

    const imageUrl = falData.images[0].url;

    // 8. Görseli indir ve base64'e çevir (opsiyonel - güvenlik için)
    const imageResponse = await fetch(imageUrl);
    const imageBuffer = await imageResponse.arrayBuffer();
    const base64Image = Buffer.from(imageBuffer).toString('base64');
    const dataUrl = `data:image/png;base64,${base64Image}`;

    // 9. SVG'ye çevir (basit placeholder - gerçek uygulamada vectorization yapılmalı)
    const svgData = createSVGFromImage(icon.name, theme.name, theme.previewColor);

    // 10. Başarılı yanıt döndür
    return NextResponse.json({
      success: true,
      data: {
        id: crypto.randomUUID(),
        iconId,
        themeId,
        prompt,
        pngData: dataUrl,
        svgData,
        timestamp: new Date().toISOString(),
      }
    });

  } catch (error) {
    console.error('Generate API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
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
      'Access-Control-Allow-Origin': process.env.ALLOWED_ORIGINS || '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
