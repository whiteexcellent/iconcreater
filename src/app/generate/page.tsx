'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGeneratorStore } from '@/stores/generator-store';
import { useAnimationStore } from '@/stores/animation-store';
import { icons } from '@/data/icons';
import { themes } from '@/data/themes';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { BackendSelector } from '@/components/generation/BackendSelector';
import { ConfettiButton } from '@/components/funny/confetti-button';
import { FunnyLoader } from '@/components/funny/funny-loader';
import { FloatingParticles } from '@/components/funny/floating-particles';
import { useIconGeneration } from '@/hooks/useIconGeneration';
import { fadeInUp, staggerContainer, staggerItem, funnyWiggle } from '@/lib/animations';
import { 
  Check, 
  Copy, 
  Download, 
  RefreshCcw, 
  Sparkles, 
  Wand2, 
  AlertCircle,
  Cpu,
  Zap,
  Wifi
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function GeneratePage() {
  const [copied, setCopied] = useState(false);
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(null);
  
  const {
    selectedIcon,
    selectedTheme,
    customPrompt,
    setSelectedIcon,
    setSelectedTheme,
    setCustomPrompt,
  } = useGeneratorStore();

  const { triggerConfetti } = useAnimationStore();

  // Icon generation hook with all backends
  const {
    isInitialized,
    isGenerating,
    progress,
    error,
    result,
    activeBackend,
    availableBackends,
    generate,
    switchBackend,
  } = useIconGeneration();

  // Update image URL when result changes
  useEffect(() => {
    if (result?.url) {
      setGeneratedImageUrl(result.url);
      triggerConfetti();
    }
  }, [result, triggerConfetti]);

  const handleGenerate = async () => {
    if (!selectedIcon) return;

    const basePrompt = `app icon design, ${selectedIcon.name}, ${selectedIcon.description}, ${selectedTheme.style}, centered composition, isolated on white background, professional, high quality`;
    const fullPrompt = customPrompt 
      ? `${basePrompt}, ${customPrompt}` 
      : basePrompt;

    await generate(fullPrompt, {
      width: 512,
      height: 512,
      steps: 20,
      guidanceScale: 7.5,
    });
  };

  const handleCopy = async () => {
    if (result?.blob) {
      try {
        await navigator.clipboard.write([
          new ClipboardItem({ 'image/png': result.blob })
        ]);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Copy failed:', err);
      }
    }
  };

  const handleDownload = () => {
    if (result?.url) {
      const link = document.createElement('a');
      link.href = result.url;
      link.download = `fivem-icon-${selectedIcon?.id || 'generated'}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const getBackendIcon = () => {
    if (!result) return null;
    
    switch (result.backend.toLowerCase()) {
      case 'microsoft webnn sd 1.5': 
        return <Zap className="h-4 w-4 text-yellow-400" />;
      case 'lee butterman sd xs': 
        return <Cpu className="h-4 w-4 text-orange-400" />;
      case 'transformers.js': 
        return <Wifi className="h-4 w-4 text-green-400" />;
      default: 
        return <AlertCircle className="h-4 w-4 text-blue-400" />;
    }
  };

  return (
    <main className="min-h-screen relative overflow-hidden">
      <FloatingParticles />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Header */}
        <motion.div 
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <Link href="/" className="inline-block mb-6">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sky-400 to-orange-400 bg-clip-text text-transparent">
              Generate Icon
            </h1>
          </Link>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Choose an icon and theme, then let AI create the perfect image 
            <span className="text-sky-400 font-semibold"> - 100% Free, No API Keys!</span>
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Selection */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-6"
          >
            {/* Backend Selector */}
            {isInitialized && availableBackends.length > 1 && (
              <motion.div variants={staggerItem}>
                <Card className="bg-slate-900/80 border-slate-800 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Cpu className="h-5 w-5 text-sky-400" />
                      AI Backend
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <BackendSelector
                      backends={availableBackends}
                      activeBackend={activeBackend}
                      onBackendChange={switchBackend}
                      disabled={isGenerating}
                    />
                    <p className="text-xs text-slate-500 mt-2">
                      Automatically selects the best available backend. Models load from CDN on first use.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Icon Selection */}
            <motion.div variants={staggerItem}>
              <Card className="bg-slate-900/80 border-slate-800 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-sky-400" />
                    Select Icon
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.div 
                    className="grid grid-cols-4 sm:grid-cols-5 gap-3"
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                  >
                    {icons.map((icon) => (
                      <motion.button
                        key={icon.id}
                        variants={staggerItem}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedIcon(icon)}
                        className={`p-3 rounded-xl transition-all ${
                          selectedIcon?.id === icon.id
                            ? 'bg-gradient-to-br from-sky-500 to-sky-600 shadow-lg shadow-sky-500/25'
                            : 'bg-slate-800 hover:bg-slate-700'
                        }`}
                        title={icon.name}
                      >
                        <span className="text-2xl">{icon.emoji}</span>
                      </motion.button>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Theme Selection */}
            <motion.div variants={staggerItem}>
              <Card className="bg-slate-900/80 border-slate-800 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Wand2 className="h-5 w-5 text-orange-400" />
                    Select Theme
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.div 
                    className="grid grid-cols-2 sm:grid-cols-3 gap-3"
                    variants={staggerContainer}
                  >
                    {themes.map((theme) => (
                      <motion.button
                        key={theme.id}
                        variants={staggerItem}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedTheme(theme)}
                        className={`p-4 rounded-xl text-left transition-all ${
                          selectedTheme.id === theme.id
                            ? 'bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg shadow-orange-500/25'
                            : 'bg-slate-800 hover:bg-slate-700'
                        }`}
                      >
                        <div className="text-2xl mb-1">{theme.emoji}</div>
                        <div className="text-sm font-medium">{theme.name}</div>
                      </motion.button>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Custom Prompt */}
            <motion.div variants={staggerItem}>
              <Card className="bg-slate-900/80 border-slate-800 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg">Custom Details (Optional)</CardTitle>
                </CardHeader>
                <CardContent>
                  <Input
                    placeholder="e.g., with neon glow effects, cyberpunk style..."
                    value={customPrompt}
                    onChange={(e) => setCustomPrompt(e.target.value)}
                    className="bg-slate-800 border-slate-700 text-slate-200 placeholder:text-slate-500"
                  />
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Right Column - Preview & Generate */}
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="lg:sticky lg:top-24 h-fit"
          >
            <Card className="bg-slate-900/80 border-slate-800 backdrop-blur-sm overflow-hidden">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <RefreshCcw className="h-5 w-5 text-sky-400" />
                  Preview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Preview Area */}
                <div className="relative aspect-square bg-slate-800 rounded-xl overflow-hidden">
                  <AnimatePresence mode="wait">
                    {generatedImageUrl ? (
                      <motion.div
                        key="result"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={generatedImageUrl}
                          alt="Generated icon"
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="placeholder"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 flex flex-col items-center justify-center p-8"
                      >
                        {isGenerating ? (
                          <div className="w-full max-w-sm">
                            <FunnyLoader progress={progress} />
                            <div className="text-center space-y-1 mt-2">
                              <p className="text-xs text-slate-400">
                                {progress < 30 ? 'Loading AI model from CDN...' : 
                                 progress < 70 ? 'Generating image...' : 
                                 'Finalizing...'}
                              </p>
                              <p className="text-xs text-slate-500">
                                This may take 10-60 seconds on first run
                              </p>
                            </div>
                          </div>
                        ) : (
                          <>
                            <motion.div
                              animate={funnyWiggle}
                              className="text-6xl mb-4"
                            >
                              {selectedIcon?.emoji || '🎨'}
                            </motion.div>
                            <p className="text-slate-400 text-center">
                              {selectedIcon 
                                ? `Ready to generate ${selectedIcon.name} icon`
                                : 'Select an icon to start'
                              }
                            </p>
                          </>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Backend Info */}
                {result && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-center gap-2 text-sm text-slate-400"
                  >
                    {getBackendIcon()}
                    <span>Generated with {result.backend}</span>
                    <span className="text-slate-600">•</span>
                    <span>{result.generationTime}ms</span>
                  </motion.div>
                )}

                {/* Error Display */}
                {error && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg"
                  >
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-red-200">
                        <p className="font-medium mb-1">Generation failed</p>
                        <p className="text-red-300/80">{error}</p>
                        <p className="text-xs text-red-300/60 mt-2">
                          The system automatically tried all available backends. 
                          Please try again or select a different backend.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Action Buttons */}
                <div className="space-y-3">
                  {!generatedImageUrl ? (
                    <ConfettiButton
                      onClick={handleGenerate}
                      disabled={!selectedIcon || isGenerating || !isInitialized}
                      className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-400 hover:to-sky-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isGenerating ? (
                        <span className="flex items-center gap-2">
                          <RefreshCcw className="h-5 w-5 animate-spin" />
                          Generating...
                        </span>
                      ) : !isInitialized ? (
                        <span className="flex items-center gap-2">
                          <Cpu className="h-5 w-5 animate-pulse" />
                          Initializing...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Sparkles className="h-5 w-5" />
                          Generate Icon
                        </span>
                      )}
                    </ConfettiButton>
                  ) : (
                    <div className="grid grid-cols-2 gap-3">
                      <Button
                        variant="outline"
                        onClick={handleCopy}
                        className="h-12 border-slate-700 hover:bg-slate-800"
                      >
                        {copied ? (
                          <span className="flex items-center gap-2 text-green-400">
                            <Check className="h-5 w-5" />
                            Copied!
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            <Copy className="h-5 w-5" />
                            Copy
                          </span>
                        )}
                      </Button>
                      
                      <Button
                        onClick={handleDownload}
                        className="h-12 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500"
                      >
                        <span className="flex items-center gap-2">
                          <Download className="h-5 w-5" />
                          Download
                        </span>
                      </Button>
                      
                      <Button
                        variant="outline"
                        onClick={() => {
                          setGeneratedImageUrl(null);
                          handleGenerate();
                        }}
                        disabled={isGenerating}
                        className="col-span-2 h-12 border-slate-700 hover:bg-slate-800"
                      >
                        <span className="flex items-center gap-2">
                          <RefreshCcw className="h-5 w-5" />
                          Generate New
                        </span>
                      </Button>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="text-center space-y-1">
                  <p className="text-xs text-slate-500">
                    {result?.isAIGenerated 
                      ? '🤖 AI Generated • Powered by Browser AI'
                      : '🎨 SVG Generated • Fallback Mode'
                    }
                  </p>
                  <p className="text-xs text-slate-600">
                    100% Free • No API Keys • Runs in Your Browser
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
