'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Sparkles } from 'lucide-react';

interface ModelLoaderProps {
  onReady: () => void;
}

export function ModelLoader({ onReady }: ModelLoaderProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-mesh">
      <Card className="max-w-md w-full">
        <CardContent className="pt-6 space-y-6">
          <div className="text-center space-y-2">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-2xl font-bold">FiveM Icon Generator</h1>
            <p className="text-muted-foreground">
              AI-powered icon generation for FiveM
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-muted rounded-lg p-4 space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>Secure API integration</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>High-quality AI generation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>Instant results</span>
              </div>
            </div>

            <Button onClick={onReady} className="w-full" size="lg">
              Start Generating
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              Powered by Fal.ai • Fast & Secure
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
