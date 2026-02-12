'use client';

import { useState } from 'react';
import { useGeneratorStore } from '@/stores/generator-store';
import { useAIManager } from '@/hooks/use-ai-manager';
import { ModelLoader } from '@/components/model-loader';
import { IconSelector } from './_sections/icon-selector';
import { ThemeGallery } from './_sections/theme-gallery';
import { PreviewPanel } from './_sections/preview-panel';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Sparkles, Wand2, AlertCircle } from 'lucide-react';

export default function HomePage() {
  const [modelReady, setModelReady] = useState(false);
  
  const {
    selectedIcon,
    selectedTheme,
    customPrompt,
    setCustomPrompt,
    isGenerating,
    canGenerate,
    startGeneration,
    setResult,
    setError,
    updateProgress
  } = useGeneratorStore();

  const { generateIcon } = useAIManager((stage, progress) => {
    updateProgress(stage as any, progress, stage);
  });

  const handleGenerate = async () => {
    if (!selectedIcon) return;
    
    startGeneration();
    
    try {
      const result = await generateIcon(
        selectedIcon.id,
        selectedTheme.id,
        customPrompt
      );
      
      if (result) {
        setResult(result);
      } else {
        setError('Generation failed. Please try again.');
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Unknown error');
    }
  };

  // Model hazır değilse loader göster
  if (!modelReady) {
    return <ModelLoader onReady={() => setModelReady(true)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-mesh">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Wand2 className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-bold">FiveM Icon Generator</h1>
              <p className="text-xs text-muted-foreground">
                AI-powered browser icon generation
              </p>
            </div>
          </div>

          {selectedIcon && (
            <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
              <span>Selected:</span>
              <span className="font-medium text-foreground">
                {selectedIcon.name}
              </span>
              <span>×</span>
              <span className="font-medium text-foreground">
                {selectedTheme.name}
              </span>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Panel - Controls */}
          <div className="space-y-6">
            {/* Icon Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">🎨</span>
                  Select Icon
                </CardTitle>
              </CardHeader>
              <CardContent>
                <IconSelector />
              </CardContent>
            </Card>

            {/* Theme Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">✨</span>
                  Choose Theme
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ThemeGallery />
              </CardContent>
            </Card>

            {/* Custom Prompt */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">💭</span>
                  Custom Style (Optional)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  placeholder="Add custom keywords (e.g., 'glowing edges', 'metallic finish')..."
                  value={customPrompt}
                  onChange={(e) => setCustomPrompt(e.target.value)}
                  maxLength={100}
                  disabled={isGenerating}
                />
                <p className="text-xs text-muted-foreground">
                  {customPrompt.length}/100 characters
                </p>
              </CardContent>
            </Card>

            {/* Generate Button */}
            <Button
              size="lg"
              className="w-full h-14 text-lg font-semibold"
              disabled={!canGenerate()}
              onClick={handleGenerate}
            >
              {isGenerating ? (
                <>
                  <Sparkles className="h-5 w-5 mr-2 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="h-5 w-5 mr-2" />
                  Generate Icon
                </>
              )}
            </Button>

            {!selectedIcon && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground justify-center">
                <AlertCircle className="h-4 w-4" />
                <span>Select an icon to enable generation</span>
              </div>
            )}
          </div>

          {/* Right Panel - Preview */}
          <div className="lg:sticky lg:top-24 lg:h-[calc(100vh-8rem)]">
            <PreviewPanel />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-16 py-8 bg-background/50">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>FiveM Icon Generator v3.0 - Browser AI - 100% Free</p>
          <p className="mt-1">
            Powered by Stable Diffusion • Running in your browser
          </p>
        </div>
      </footer>
    </div>
  );
}
