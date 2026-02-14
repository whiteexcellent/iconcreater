"use client";

import { useGeneratorStore } from '@/stores/generator-store';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { cn, downloadFile } from '@/lib/utils';
import { ImageIcon, Download, RefreshCw, CheckCircle2 } from 'lucide-react';

export function PreviewPanel() {
  const {
    selectedIcon,
    selectedTheme,
    isGenerating,
    generationStage,
    progress,
    stageMessage,
    currentResult
  } = useGeneratorStore();

  const handleDownload = async () => {
    if (currentResult?.pngData) {
      try {
        // URL'den görseli indir
        const response = await fetch(currentResult.pngData);
        const blob = await response.blob();
        
        // İndirme linki oluştur
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `fivem-icon-${selectedIcon?.id}-${selectedTheme.id}.png`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      } catch (error) {
        console.error('Download failed:', error);
        // Hata durumunda URL'yi yeni sekmede aç
        window.open(currentResult.pngData, '_blank');
      }
    }
  };

  const getStageColor = () => {
    switch (generationStage) {
      case 'complete':
        return 'text-green-500';
      case 'error':
        return 'text-red-500';
      default:
        return 'text-primary';
    }
  };

  return (
    <Card className="h-full">
      <CardContent className="p-6 h-full flex flex-col">
        <h3 className="text-lg font-semibold mb-4">Preview</h3>

        <div className="flex-1 flex items-center justify-center min-h-[300px] bg-secondary/50 rounded-lg border-2 border-dashed border-border relative overflow-hidden">
          {!currentResult && !isGenerating && (
            <div className="text-center text-muted-foreground">
              <ImageIcon className="h-12 w-12 mx-auto mb-2 opacity-50" />
              <p>Select an icon and theme to start</p>
            </div>
          )}

          {isGenerating && (
            <div className="w-full max-w-xs space-y-4">
              <div className="text-center space-y-2">
                <RefreshCw className="h-8 w-8 mx-auto animate-spin text-primary" />
                <p className={cn("font-medium", getStageColor())}>
                  {stageMessage}
                </p>
              </div>
              <Progress value={progress} className="h-2" />
              <p className="text-center text-xs text-muted-foreground">
                {progress}%
              </p>
            </div>
          )}

          {currentResult && !isGenerating && (
            <div className="w-full h-full flex items-center justify-center p-4">
              {currentResult.pngData.startsWith('http') ? (
                // URL olarak gelen görsel
                <img 
                  src={currentResult.pngData} 
                  alt="Generated icon"
                  className="w-full h-full max-w-[300px] max-h-[300px] object-contain rounded-lg"
                />
              ) : (
                // Base64 olarak gelen görsel
                <img 
                  src={currentResult.pngData} 
                  alt="Generated icon"
                  className="w-full h-full max-w-[300px] max-h-[300px] object-contain rounded-lg"
                />
              )}
            </div>
          )}
        </div>

        {currentResult && (
          <div className="mt-4 space-y-3">
            <div className="flex items-center gap-2 text-green-500">
              <CheckCircle2 className="h-5 w-5" />
              <span className="text-sm font-medium">Generation complete!</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <Button onClick={handleDownload} className="w-full">
                <Download className="h-4 w-4 mr-2" />
                Download PNG
              </Button>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => {
                  if (currentResult?.pngData) {
                    navigator.clipboard.writeText(currentResult.pngData);
                  }
                }}
              >
                Copy URL
              </Button>
            </div>

            <div className="text-xs text-muted-foreground space-y-1">
              <p>Icon: {selectedIcon?.name}</p>
              <p>Theme: {selectedTheme.name}</p>
              <p>Resolution: 512x512</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
