"use client";

import { useState } from 'react';
import { useGeneratorStore } from '@/stores/generator-store';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ImageIcon, Download, RefreshCw, CheckCircle2, ExternalLink } from 'lucide-react';

export function PreviewPanel() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  const {
    selectedIcon,
    selectedTheme,
    isGenerating,
    progress,
    stageMessage,
    currentResult
  } = useGeneratorStore();

  const handleDownload = async () => {
    if (currentResult?.pngData) {
      try {
        window.open(currentResult.pngData, '_blank');
      } catch (error) {
        console.error('Download failed:', error);
      }
    }
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(false);
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
                <p className="font-medium text-primary-400">
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
            <div className="w-full h-full flex flex-col items-center justify-center p-4">
              {/* Görsel Container */}
              <div className="relative w-full max-w-[300px] h-[300px] flex items-center justify-center">
                {/* Loading State */}
                {!imageLoaded && !imageError && (
                  <div className="absolute inset-0 flex items-center justify-center bg-secondary rounded-lg">
                    <div className="text-center">
                      <RefreshCw className="h-8 w-8 mx-auto animate-spin text-primary mb-2" />
                      <p className="text-sm text-muted-foreground">Loading image...</p>
                      <p className="text-xs text-muted-foreground mt-1">This may take 5-10 seconds</p>
                    </div>
                  </div>
                )}
                
                {/* Error State */}
                {imageError && (
                  <div className="absolute inset-0 flex items-center justify-center bg-secondary rounded-lg">
                    <div className="text-center p-4">
                      <p className="text-red-500 mb-2">Failed to load image</p>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => {
                          setImageError(false);
                          setImageLoaded(false);
                          // Force re-render by updating key
                          window.location.reload();
                        }}
                      >
                        <RefreshCw className="h-4 w-4 mr-2" />
                        Retry
                      </Button>
                    </div>
                  </div>
                )}
                
                {/* Actual Image */}
                <img 
                  src={currentResult.pngData} 
                  alt={`Generated ${selectedIcon?.name} icon`}
                  className={cn(
                    "max-w-full max-h-full object-contain rounded-lg transition-opacity duration-500",
                    imageLoaded ? "opacity-100" : "opacity-0"
                  )}
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                  style={{ maxWidth: '300px', maxHeight: '300px' }}
                />
              </div>
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
                <ExternalLink className="h-4 w-4 mr-2" />
                View Image
              </Button>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => {
                  if (currentResult?.pngData) {
                    navigator.clipboard.writeText(currentResult.pngData);
                    alert('URL copied to clipboard!');
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
            
            {/* Debug - URL göster */}
            <div className="mt-2 p-2 bg-muted rounded text-xs break-all">
              <p className="font-medium mb-1">Image URL:</p>
              <a 
                href={currentResult.pngData} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {currentResult.pngData.substring(0, 60)}...
              </a>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
