// src/app/api/generate/route.ts
// Hugging Face Inference API - Ücretsiz Tier (Günlük limit var ama deneme için yeterli)

import { NextRequest, NextResponse } from 'next/server';
import { PromptBuilder } from '@/lib/utils/prompt-builder';
import { getThemeById } from '@/data/themes';
import { getIconById } from '@/data/icons';

// Rate limiting
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 60 * 1000; // 1 saat
  const maxRequests = 5; // Saatte 5 görsel (ücretsiz tier için güvenli)
  
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
    // Rate limit kontrolü
    const clientIp = getClientIp(req);
    if (!checkRateLimit(clientIp)) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Max 5 images per hour.' },
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

    // Prompt oluştur
    const prompt = PromptBuilder.buildPrompt(icon, theme, customPrompt);
    const encodedPrompt = encodeURIComponent(prompt);
    const seed = Math.floor(Math.random() * 1000000);
    
    // Hugging Face Inference API (Yeni Router URL)
    // Model: stabilityai/stable-diffusion-xl-base-1.0
    const hfApiUrl = `https://router.huggingface.co/hf-inference/models/stabilityai/stable-diffusion-xl-base-1.0`;
    
    console.log('Generating image for:', icon.name, '| Theme:', theme.name);

    const hfResponse = await fetch(hfApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Ücretsiz tier - API key gerekmez (rate limited)
        // Eğer 402 hatası alırsanız, token oluşturmanız gerekir
      },
      body: JSON.stringify({
        inputs: prompt,
        parameters: {
          negative_prompt: theme.negative,
          width: 512,
          height: 512,
          seed: seed,
          num_inference_steps: 20,
          guidance_scale: 7.5,
        }
      }),
    });

    if (!hfResponse.ok) {
      const errorText = await hfResponse.text();
      console.error('HF API error:', hfResponse.status, errorText);
      
      if (hfResponse.status === 402 || hfResponse.status === 403) {
        // Limit aşıldı veya ücretli hesap gerekli
        return NextResponse.json(
          { 
            error: 'Hugging Face free tier limit reached. Please try again later or create a free account.',
            details: 'Free tier allows limited requests per day.'
          },
          { status: 503 }
        );
      }
      
      if (hfResponse.status === 503) {
        // Model loading
        return NextResponse.json(
          { 
            error: 'Model is loading, please try again in 30 seconds',
            details: 'First request wakes up the model'
          },
          { status: 503 }
        );
      }
      
      return NextResponse.json(
        { error: `Image generation failed: ${errorText}` },
        { status: 502 }
      );
    }

    // Hugging Face binary görsel döndürür
    const imageBuffer = await hfResponse.arrayBuffer();
    const base64Image = Buffer.from(imageBuffer).toString('base64');
    const dataUrl = `data:image/png;base64,${base64Image}`;

    console.log('Image generated successfully');

    return NextResponse.json({
      success: true,
      data: {
        id: crypto.randomUUID(),
        iconId,
        themeId,
        prompt,
        pngData: dataUrl,
        svgData: '',
        timestamp: new Date().toISOString(),
        model: 'Hugging Face (SDXL)',
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
