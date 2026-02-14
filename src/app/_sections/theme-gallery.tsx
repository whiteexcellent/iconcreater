"use client";

import { useGeneratorStore } from '@/stores/generator-store';
import { themes } from '@/data/themes';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Sparkles, Zap, Minimize, Lightbulb, CassetteTape } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  heart: <Sparkles className="h-6 w-6" />,
  zap: <Zap className="h-6 w-6" />,
  minimize: <Minimize className="h-6 w-6" />,
  lightbulb: <Lightbulb className="h-6 w-6" />,
  'cassette-tape': <CassetteTape className="h-6 w-6" />
};

export function ThemeGallery() {
  const { selectedTheme, setSelectedTheme } = useGeneratorStore();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {themes.map((theme) => (
        <Card
          key={theme.id}
          onClick={() => setSelectedTheme(theme)}
          className={cn(
            'cursor-pointer transition-all duration-300 hover:scale-[1.02]',
            selectedTheme.id === theme.id
              ? 'ring-2 ring-primary ring-offset-2 ring-offset-background'
              : 'hover:border-primary/50'
          )}
        >
          <div
            className="h-2 rounded-t-lg"
            style={{ backgroundColor: theme.previewColor }}
          />
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="p-2 rounded-lg"
                  style={{ backgroundColor: `${theme.previewColor}20` }}
                >
                  <div style={{ color: theme.previewColor }}>
                    {iconMap[theme.icon]}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold">{theme.name}</h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {theme.description}
                  </p>
                </div>
              </div>
              {selectedTheme.id === theme.id && (
                <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center">
                  <svg
                    className="h-3 w-3 text-primary-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
