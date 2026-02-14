// src/app/api/generate/route.ts
// Hugging Face Inference API - Ücretsiz, Yüksek Kaliteli AI Görsel Üretimi

import { NextRequest, NextResponse } from 'next/server';
import { PromptBuilder } from '@/lib/utils/prompt-builder';
import { getThemeById } from '@/data/themes';
import { getIconById } from '@/data/icons';

// Rate limiting için basit memory store
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

// Hugging Face Model - FLUX.1 Schnell (Yüksek Kalite, Hızlı)
const HF_MODEL = 'black-forest-labs/FLUX.1-schnell';
// Alternatif: 'stabilityai/stable-diffusion-xl-base-1.0'

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 dakika
  const maxRequests = parseInt(process.env.RATE_LIMIT_REQUESTS_PER_MINUTE || '5'); // HF limit daha düşük
  
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

    // 2. Hugging Face API Key Kontrolü
    const apiKey = process.env.HUGGING_FACE_API_KEY;
    if (!apiKey) {
      console.error('HUGGING_FACE_API_KEY not configured');
      return NextResponse.json(
        { error: 'Server configuration error - API key missing' },
        { status: 500 }
      );
    }

    // 3. Request Body'yi al
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

    // 5. Prompt oluştur (Detaylı ve kaliteli)
    const prompt = PromptBuilder.buildPrompt(icon, theme, customPrompt);
    const negativePrompt = theme.negative || 'blurry, low quality, distorted, ugly, bad anatomy';
    
    console.log('Generating image with prompt:', prompt);

    // 6. Hugging Face Inference API'ye istek at
    const hfResponse = await fetch(
      `https://router.huggingface.co/hf-inference/models/${HF_MODEL}`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          inputs: prompt,
          parameters: {
            negative_prompt: negativePrompt,
            width: 512,
            height: 512,
            num_inference_steps: 4, // FLUX Schnell için optimum
            guidance_scale: 7.5,
            seed: Math.floor(Math.random() * 1000000),
          },
        }),
      }
    );

    if (!hfResponse.ok) {
      const errorText = await hfResponse.text();
      console.error('Hugging Face API error:', errorText);
      
      // Model loading durumunu kontrol et
      if (errorText.includes('loading') || hfResponse.status === 503) {
        return NextResponse.json(
          { error: 'Model is loading, please try again in 10-20 seconds' },
          { status: 503 }
        );
      }
      
      return NextResponse.json(
        { error: `Image generation failed: ${errorText}` },
        { status: 502 }
      );
    }

    // 7. Hugging Face blob olarak görsel döndürür
    const imageBlob = await hfResponse.blob();
    const arrayBuffer = await imageBlob.arrayBuffer();
    const base64Image = Buffer.from(arrayBuffer).toString('base64');
    const dataUrl = `data:image/png;base64,${base64Image}`;

    console.log('Image generated successfully, size:', arrayBuffer.byteLength);

    // 8. SVG'ye çevir
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
        model: HF_MODEL,
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

// Basit SVG oluşturucu
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
