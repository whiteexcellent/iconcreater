'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useAIManager } from '@/hooks/use-ai-manager';
import { AlertCircle, Download, CheckCircle2 } from 'lucide-react';
import { checkBrowserCompatibility } from '@/lib/utils';

interface ModelLoaderProps {
  onReady: () => void;
}

export function ModelLoader({ onReady }: ModelLoaderProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState('Checking browser...');

  const { status, loadModel } = useAIManager((s, p) => {
    setStage(s);
    setProgress(p);
  });

  useEffect(() => {
    // Browser uyumluluğunu kontrol et
    const { supported, issues } = checkBrowserCompatibility();
    if (!supported) {
      setError(issues.join('. '));
    }
  }, []);

  const handleLoad = async () => {
    setIsLoading(true);
    setError(null);
    
    const success = await loadModel();
    
    if (success) {
      onReady();
    } else {
      setError('Failed to load AI model. Please refresh and try again.');
    }
    
    setIsLoading(false);
  };

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <AlertCircle className="h-12 w-12 text-red-500 mx-auto" />
              <h2 className="text-xl font-bold text-red-500">Error</h2>
              <p className="text-muted-foreground">{error}</p>
              <div className="text-sm text-muted-foreground">
                <p>Requirements:</p>
                <ul className="list-disc text-left pl-6 mt-2 space-y-1">
                  <li>Chrome/Edge 113+ or Firefox</li>
                  <li>WebGPU support enabled</li>
                  <li>~2GB free RAM</li>
                </ul>
              </div>
              <Button onClick={() => window.location.reload()} className="w-full">
                Refresh Page
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-mesh">
      <Card className="max-w-md w-full">
        <CardContent className="pt-6 space-y-6">
          <div className="text-center space-y-2">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              {isLoading ? (
                <Download className="h-8 w-8 text-primary animate-bounce" />
              ) : (
                <span className="text-4xl">🤖</span>
              )}
            </div>
            <h1 className="text-2xl font-bold">FiveM Icon Generator</h1>
            <p className="text-muted-foreground">
              AI-powered icon generation in your browser
            </p>
          </div>

          {isLoading ? (
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">{stage}</span>
                <span className="font-medium">{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-2" />
              <p className="text-xs text-muted-foreground text-center">
                Downloading AI model (~1.5GB)...<br />
                This only happens once. Future visits will be instant.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="bg-muted rounded-lg p-4 space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span>Browser compatible</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span>WebGPU available</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-4 h-4 rounded-full border-2 border-muted-foreground/30" />
                  <span>AI model ready to download</span>
                </div>
              </div>

              <Button onClick={handleLoad} className="w-full" size="lg">
                Start AI Setup
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                First-time setup only. Model will be cached for future visits.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
