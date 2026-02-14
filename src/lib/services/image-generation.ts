// src/lib/services/image-generation.ts
// Multi-provider AI image generation service
// Tries multiple free APIs in sequence until one works

export interface GenerationResult {
  success: boolean;
  imageUrl?: string;
  base64Data?: string;
  provider: string;
  error?: string;
}

interface GenerationParams {
  prompt: string;
  width?: number;
  height?: number;
  seed?: number;
}

// Provider 1: AI Horde (Community-powered, completely free)
async function generateWithAIHorde(params: GenerationParams): Promise<GenerationResult> {
  try {
    console.log('[AI Horde] Starting generation...');
    
    const submitResponse = await fetch('https://aihorde.net/api/v2/generate/async', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': '0000000000', // Anonymous key - no registration needed
      },
      body: JSON.stringify({
        prompt: params.prompt,
        params: {
          width: params.width || 512,
          height: params.height || 512,
          steps: 25,
          cfg_scale: 7.5,
          sampler_name: 'k_euler_a',
        },
        models: ['stable_diffusion'],
      }),
    });

    if (!submitResponse.ok) {
      throw new Error(`Submit failed: ${submitResponse.status}`);
    }

    const { id } = await submitResponse.json();
    
    // Poll for completion
    let attempts = 0;
    const maxAttempts = 45; // 45 seconds max
    
    while (attempts < maxAttempts) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const checkResponse = await fetch(`https://aihorde.net/api/v2/generate/check/${id}`, {
        headers: { 'apikey': '0000000000' }
      });
      
      if (!checkResponse.ok) continue;
      
      const status = await checkResponse.json();
      
      if (status.done) {
        const resultResponse = await fetch(`https://aihorde.net/api/v2/generate/status/${id}`, {
          headers: { 'apikey': '0000000000' }
        });
        
        if (!resultResponse.ok) {
          throw new Error('Failed to get result');
        }
        
        const result = await resultResponse.json();
        
        if (result.generations?.length > 0) {
          const imageUrl = result.generations[0].img;
          
          // Download and convert to base64
          const imageResponse = await fetch(imageUrl);
          if (!imageResponse.ok) {
            throw new Error('Failed to download image');
          }
          
          const blob = await imageResponse.blob();
          const base64 = await new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result as string);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
          });
          
          return {
            success: true,
            base64Data: base64,
            provider: 'AI Horde',
          };
        }
      }
      
      attempts++;
    }
    
    throw new Error('Timeout');
  } catch (error) {
    return {
      success: false,
      provider: 'AI Horde',
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

// Provider 2: DeepAI Text-to-Image (Free tier, no API key needed for basic usage)
async function generateWithDeepAI(params: GenerationParams): Promise<GenerationResult> {
  try {
    console.log('[DeepAI] Starting generation...');
    
    const response = await fetch('https://api.deepai.org/api/text2img', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': 'quickstart-QUdJIGlzIGNvbWluZy4uLi4K', // Demo key for testing
      },
      body: JSON.stringify({
        text: params.prompt,
        width: params.width || 512,
        height: params.height || 512,
      }),
    });

    if (!response.ok) {
      throw new Error(`DeepAI error: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.output_url) {
      // Download and convert to base64
      const imageResponse = await fetch(data.output_url);
      if (!imageResponse.ok) {
        throw new Error('Failed to download image');
      }
      
      const blob = await imageResponse.blob();
      const base64 = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
      
      return {
        success: true,
        base64Data: base64,
        provider: 'DeepAI',
      };
    }
    
    throw new Error('No output URL');
  } catch (error) {
    return {
      success: false,
      provider: 'DeepAI',
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

// Provider 3: Pollinations.ai (Retry with different parameters)
async function generateWithPollinations(params: GenerationParams): Promise<GenerationResult> {
  try {
    console.log('[Pollinations] Starting generation...');
    
    const seed = params.seed || Math.floor(Math.random() * 100000);
    const encodedPrompt = encodeURIComponent(params.prompt);
    const url = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=${params.width || 512}&height=${params.height || 512}&seed=${seed}&nologo=true&enhance=true`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Pollinations error: ${response.status}`);
    }

    const blob = await response.blob();
    const base64 = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
    
    return {
      success: true,
      base64Data: base64,
      provider: 'Pollinations.ai',
    };
  } catch (error) {
    return {
      success: false,
      provider: 'Pollinations.ai',
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

// Provider 4: Stable Diffusion via Hugging Face (Free inference)
async function generateWithHuggingFace(params: GenerationParams): Promise<GenerationResult> {
  try {
    console.log('[HuggingFace] Starting generation...');
    
    // Using a free Stable Diffusion model
    const response = await fetch(
      'https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2-1',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer hf_demo_token', // Some endpoints work without token
        },
        body: JSON.stringify({
          inputs: params.prompt,
          parameters: {
            width: params.width || 512,
            height: params.height || 512,
            seed: params.seed || Math.floor(Math.random() * 100000),
          },
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`HuggingFace error: ${response.status}`);
    }

    const blob = await response.blob();
    const base64 = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
    
    return {
      success: true,
      base64Data: base64,
      provider: 'HuggingFace',
    };
  } catch (error) {
    return {
      success: false,
      provider: 'HuggingFace',
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

// Fallback: Generate a simple SVG placeholder
function generatePlaceholder(prompt: string): GenerationResult {
  console.log('[Placeholder] Generating fallback SVG...');
  
  const colors = ['#0ea5e9', '#f97316', '#22c55e', '#a855f7', '#ef4444'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const darkerColor = randomColor + '80'; // 50% opacity
  
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${randomColor};stop-opacity:1" />
        <stop offset="100%" style="stop-color:${darkerColor};stop-opacity:1" />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <rect width="512" height="512" fill="url(#grad)" rx="96"/>
    <circle cx="256" cy="200" r="80" fill="white" opacity="0.9" filter="url(#glow)"/>
    <circle cx="256" cy="200" r="60" fill="${randomColor}" opacity="0.8"/>
    <text x="256" y="360" font-family="Arial, sans-serif" font-size="32" fill="white" text-anchor="middle" font-weight="bold">AI Icon</text>
    <text x="256" y="400" font-family="Arial, sans-serif" font-size="16" fill="white" text-anchor="middle" opacity="0.7">Free Generation</text>
  </svg>`;
  
  const base64 = `data:image/svg+xml;base64,${btoa(svg)}`;
  
  return {
    success: true,
    base64Data: base64,
    provider: 'Placeholder (SVG)',
  };
}

// Main function: Try all providers in sequence
export async function generateImage(params: GenerationParams): Promise<GenerationResult> {
  const providers = [
    generateWithPollinations,
    generateWithAIHorde,
    generateWithDeepAI,
    generateWithHuggingFace,
  ];
  
  const errors: string[] = [];
  
  for (const provider of providers) {
    const result = await provider(params);
    
    if (result.success) {
      console.log(`[Success] Generated with ${result.provider}`);
      return result;
    }
    
    errors.push(`${result.provider}: ${result.error}`);
    console.log(`[Failed] ${result.provider}: ${result.error}`);
  }
  
  // All providers failed, use placeholder
  console.log('[All Failed] Using placeholder fallback');
  const placeholder = generatePlaceholder(params.prompt);
  placeholder.error = `All providers failed: ${errors.join('; ')}`;
  return placeholder;
}

// Export individual providers for testing
export const ImageProviders = {
  aiHorde: generateWithAIHorde,
  deepAI: generateWithDeepAI,
  pollinations: generateWithPollinations,
  huggingFace: generateWithHuggingFace,
};
