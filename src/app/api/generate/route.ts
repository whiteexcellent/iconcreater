// src/app/api/generate/route.ts
// Pollinations.ai - Ücretsiz, API Key Gerektirmez, Anında Görsel

import { NextRequest, NextResponse } from 'next/server';
import { PromptBuilder } from '@/lib/utils/prompt-builder';
import { getThemeById } from '@/data/themes';
import { getIconById } from '@/data/icons';

// Rate limiting için basit memory store
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

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
    
    console.log('Generating image with prompt:', prompt);

    // 5. Pollinations.ai API'den görsel URL'si oluştur
    // URL format: https://image.pollinations.ai/prompt/{prompt}?width=512&height=512&seed={seed}&nologo=true
    const encodedPrompt = encodeURIComponent(prompt);
    const imageUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=512&height=512&seed=${seed}&nologo=true&enhance=true`;
    
    console.log('Generated image URL:', imageUrl);

    // 6. Görseli indir
    const imageResponse = await fetch(imageUrl);
    
    if (!imageResponse.ok) {
      console.error('Pollinations API error:', imageResponse.status);
      return NextResponse.json(
        { error: 'Image generation failed' },
        { status: 502 }
      );
    }

    // 7. Görseli base64'e çevir
    const imageBuffer = await imageResponse.arrayBuffer();
    const base64Image = Buffer.from(imageBuffer).toString('base64');
    const dataUrl = `data:image/png;base64,${base64Image}`;

    console.log('Image downloaded successfully, size:', imageBuffer.byteLength);

    // 8. SVG placeholder oluştur
    const svgData = createSVGFromImage(icon.name, theme.name, theme.previewColor);

    // 9. Başarılı yanıt döndür
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
        model: 'Pollinations.ai',
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
