'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGeneratorStore } from '@/stores/generator-store';
import { useAnimationStore } from '@/stores/animation-store';
import { icons } from '@/data/icons';
import { themes } from '@/data/themes';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ConfettiButton } from '@/components/funny/confetti-button';
import { FunnyLoader } from '@/components/funny/funny-loader';
import { FloatingParticles } from '@/components/funny/floating-particles';
import { fadeInUp, staggerContainer, staggerItem, funnyWiggle } from '@/lib/animations';
import { Check, Copy, Download, RefreshCcw, Sparkles, Wand2, AlertCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function GeneratePage() {
  const [copied, setCopied] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  
  const {
    selectedIcon,
    selectedTheme,
    customPrompt,
    isGenerating,
    progress,
    stageMessage,
    currentResult,
    setSelectedIcon,
    setSelectedTheme,
    setCustomPrompt,
    startGeneration,
    updateProgress,
    setResult,
    setError,
    canGenerate
  } = useGeneratorStore();

  const { triggerConfetti } = useAnimationStore();

  const handleGenerate = async () => {
    if (!canGenerate()) return;
    
    setApiError(null);
    startGeneration();
    
    try {
      updateProgress(10, 'Preparing...');
      
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          iconId: selectedIcon?.id,
          themeId: selectedTheme.id,
          customPrompt: customPrompt || undefined,
        }),
      });

      updateProgress(50, 'Generating image...');

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Generation failed');
      }

      const result = await response.json();
      
      if (!result.success) {
        throw new Error(result.error || 'Unknown error');
      }

      updateProgress(100, 'Complete!');
      setResult(result.data);
      triggerConfetti();
      
    } catch (error) {
      console.error('Generation error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      setError(errorMessage);
      setApiError(errorMessage);
    }
  };

  const handleCopy = () => {
    if (currentResult?.pngData) {
      navigator.clipboard.writeText(currentResult.pngData);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownload = async () => {
    if (currentResult?.pngData) {
      try {
        // Base64 data URL'den indirme
        const link = document.createElement('a');
        link.href = currentResult.pngData;
        link.download = `fivem-icon-${selectedIcon?.id}-${selectedTheme.id}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (error) {
        console.error('Download failed:', error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <FloatingParticles />
      
      {/* API Error */}
      {apiError && (
        <div className="bg-red-500/20 border-b border-red-500/50 px-4 py-3">
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-red-400">
            <AlertCircle className="h-5 w-5" />
            <span className="font-medium">Error:</span>
            <span>{apiError}</span>
          </div>
        </div>
      )}
      
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/">
            <motion.div 
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
            >
              <div className="p-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg">
                <Wand2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-100">FiveM Icon Generator</h1>
                <p className="text-xs text-slate-400">AI-powered generation</p>
              </div>
            </motion.div>
          </Link>

          {selectedIcon && (
            <div className="hidden sm:flex items-center gap-2 text-sm text-slate-400">
              <span>Selected:</span>
              <span className="font-medium text-primary-400">{selectedIcon.name}</span>
              <span className="text-slate-600">×</span>
              <span className="font-medium text-accent-400">{selectedTheme.name}</span>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Left Panel */}
          <motion.div variants={fadeInUp} className="space-y-6">
            {/* Icon Selection */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-slate-100">
                  <span className="text-2xl">🎨</span>
                  Select Icon
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
                  {icons.map((icon) => (
                    <motion.button
                      key={icon.id}
                      onClick={() => setSelectedIcon(icon)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      animate={selectedIcon?.id === icon.id ? {
                        scale: [1, 1.1, 1],
                        borderColor: ['#0ea5e9', '#f97316', '#0ea5e9']
                      } : {}}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        selectedIcon?.id === icon.id
                          ? 'bg-primary-500/20 border-primary-500 shadow-lg shadow-primary-500/50'
                          : 'bg-slate-700/50 border-slate-600 hover:border-primary-500/50'
                      }`}
                    >
                      <motion.div
                        className="text-3xl mb-1"
                        animate={selectedIcon?.id === icon.id ? {
                          y: [0, -10, 0],
                          rotate: [0, 360]
                        } : {}}
                        transition={{ duration: 0.5 }}
                      >
                        {icon.emoji}
                      </motion.div>
                      <div className="text-xs text-slate-300 font-medium truncate">{icon.name}</div>
                    </motion.button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Theme Selection */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-slate-100">
                  <span className="text-2xl">✨</span>
                  Choose Theme
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {themes.map((theme) => (
                    <motion.button
                      key={theme.id}
                      onClick={() => setSelectedTheme(theme)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`p-4 rounded-xl border-2 text-left transition-all ${
                        selectedTheme.id === theme.id
                          ? 'bg-primary-500/20 border-primary-500'
                          : 'bg-slate-700/50 border-slate-600 hover:border-primary-500/50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{theme.emoji}</span>
                        <div>
                          <div className="font-semibold text-slate-200">{theme.name}</div>
                          <div className="text-xs text-slate-400">{theme.description}</div>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Custom Prompt */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-slate-100">
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
                  className="bg-slate-900 border-slate-600 text-slate-200 placeholder:text-slate-500"
                />
                <p className="text-xs text-slate-500 text-right">
                  {customPrompt.length}/100 characters
                </p>
              </CardContent>
            </Card>

            {/* Generate Button */}
            <ConfettiButton
              onClick={handleGenerate}
              disabled={!canGenerate()}
            >
              {isGenerating ? (
                <>
                  <RefreshCcw className="mr-2 h-5 w-5 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-5 w-5" />
                  Generate Icon
                </>
              )}
            </ConfettiButton>

            {!selectedIcon && (
              <motion.div 
                variants={funnyWiggle}
                animate="animate"
                className="flex items-center gap-2 text-sm text-accent-400 justify-center"
              >
                <span>🎯</span>
                <span>Select an icon to enable generation</span>
              </motion.div>
            )}
          </motion.div>

          {/* Right Panel - Preview */}
          <motion.div variants={fadeInUp} className="lg:sticky lg:top-24 lg:h-[calc(100vh-8rem)]">
            <Card className="bg-slate-800/50 border-slate-700 h-full">
              <CardHeader>
                <CardTitle className="text-slate-100">Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex-1 flex items-center justify-center min-h-[400px] bg-slate-900/50 rounded-xl border-2 border-dashed border-slate-700 relative overflow-hidden">
                  <AnimatePresence mode="wait">
                    {!currentResult && !isGenerating && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-center text-slate-500"
                      >
                        <div className="text-6xl mb-4">🎨</div>
                        <p>Select an icon and theme to start</p>
                      </motion.div>
                    )}

                    {isGenerating && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="w-full max-w-sm"
                      >
                        <FunnyLoader progress={progress} />
                      </motion.div>
                    )}

                    {currentResult && !isGenerating && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-full flex flex-col items-center p-4"
                      >
                        <div className="relative w-full max-w-[300px] aspect-square mb-6 rounded-xl overflow-hidden bg-slate-800 shadow-2xl">
                          <Image
                            src={currentResult.pngData}
                            alt="Generated icon"
                            fill
                            className="object-contain"
                            unoptimized
                          />
                        </div>

                        <div className="flex gap-3 w-full max-w-[300px]">
                          <Button 
                            onClick={handleDownload}
                            className="flex-1 bg-primary-500 hover:bg-primary-600"
                          >
                            <Download className="mr-2 h-4 w-4" />
                            Download
                          </Button>
                          <Button 
                            variant="outline" 
                            onClick={handleCopy}
                            className="border-slate-600 hover:bg-slate-700 text-slate-200"
                          >
                            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                          </Button>
                        </div>

                        <div className="mt-4 text-center text-sm text-slate-400 space-y-1">
                          <p>Icon: <span className="text-primary-400">{selectedIcon?.name}</span></p>
                          <p>Theme: <span className="text-accent-400">{selectedTheme.name}</span></p>
                          <p>Resolution: 512x512</p>
                        </div>

                        <div className="mt-4 p-3 bg-slate-900 rounded-lg max-w-[300px] w-full">
                          <p className="text-xs text-slate-500 mb-1">Model:</p>
                          <p className="text-xs text-primary-400">{currentResult.model}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
