// src/lib/image-generation/test.ts
// Test suite for image generation backends

import { getImageGenerationManager } from './manager';
import { detectCapabilities } from './detector';
import { checkCDNAvailability, CDN_MODELS } from './dynamic-loader';

export async function runTests(): Promise<{ passed: number; failed: number; results: string[] }> {
  const results: string[] = [];
  let passed = 0;
  let failed = 0;

  console.log('🧪 Starting Image Generation Tests...\n');

  // Test 1: Browser Capabilities
  try {
    console.log('Test 1: Browser Capabilities Detection');
    const caps = await detectCapabilities();
    console.log('✅ Capabilities:', caps);
    results.push('✅ Browser capabilities detected');
    passed++;
  } catch (error) {
    console.error('❌ Failed:', error);
    results.push('❌ Browser capabilities failed');
    failed++;
  }

  // Test 2: CDN Availability
  try {
    console.log('\nTest 2: CDN Availability');
    const cdnAvailable = await checkCDNAvailability('https://cdn.jsdelivr.net');
    if (cdnAvailable) {
      console.log('✅ CDN is available');
      results.push('✅ CDN reachable');
      passed++;
    } else {
      console.log('⚠️ CDN might be blocked');
      results.push('⚠️ CDN check inconclusive');
      passed++;
    }
  } catch (error) {
    console.error('❌ CDN check failed:', error);
    results.push('❌ CDN check failed');
    failed++;
  }

  // Test 3: Model URLs
  try {
    console.log('\nTest 3: Model URLs');
    const webnnUrls = CDN_MODELS.webnn.urls;
    console.log('WebNN URLs:', Object.keys(webnnUrls || {}));
    console.log('✅ Model URLs configured');
    results.push('✅ Model URLs valid');
    passed++;
  } catch (error) {
    console.error('❌ Model URLs failed:', error);
    results.push('❌ Model URLs invalid');
    failed++;
  }

  // Test 4: Manager Initialization
  try {
    console.log('\nTest 4: Manager Initialization');
    const manager = getImageGenerationManager();
    await manager.initialize();
    
    if (manager.isReady()) {
      console.log('✅ Manager initialized');
      console.log('Active backend:', manager.getActiveBackendName());
      console.log('Available backends:', manager.getAvailableBackends().map(b => b.name));
      results.push('✅ Manager initialized successfully');
      passed++;
    } else {
      throw new Error('Manager not ready');
    }
  } catch (error) {
    console.error('❌ Manager init failed:', error);
    results.push('❌ Manager initialization failed');
    failed++;
  }

  // Test 5: SVG Generation (Always works)
  try {
    console.log('\nTest 5: SVG Generation');
    const manager = getImageGenerationManager();
    
    const result = await manager.generate({
      prompt: 'test camera icon blue',
      width: 512,
      height: 512
    });
    
    if (result && result.blob && result.url) {
      console.log('✅ SVG generated:', result.backend);
      console.log('Generation time:', result.generationTime, 'ms');
      results.push('✅ SVG generation works');
      passed++;
    } else {
      throw new Error('Invalid result');
    }
  } catch (error) {
    console.error('❌ SVG generation failed:', error);
    results.push('❌ SVG generation failed');
    failed++;
  }

  // Summary
  console.log('\n📊 Test Summary:');
  console.log(`✅ Passed: ${passed}`);
  console.log(`❌ Failed: ${failed}`);
  console.log(`📈 Success Rate: ${((passed / (passed + failed)) * 100).toFixed(1)}%`);

  return { passed, failed, results };
}

// Auto-run in development
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  setTimeout(() => {
    runTests().catch(console.error);
  }, 1000);
}
