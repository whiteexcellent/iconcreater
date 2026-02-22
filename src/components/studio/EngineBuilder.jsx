import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { Settings2, SlidersHorizontal } from 'lucide-react';

export function EngineBuilder() {
    const { customSettings, setCustomSettings } = useTheme();

    const handleToggle = () => {
        setCustomSettings(prev => ({ ...prev, enabled: !prev.enabled }));
    };

    const handleChange = (key, value) => {
        setCustomSettings(prev => ({ ...prev, [key]: value }));
    };

    return (
        <div className="hidden lg:flex w-72 flex-col h-full bg-black/20 border-l border-white-[0.02] backdrop-blur-[40px] shrink-0 z-20 shadow-[0_0_40px_rgba(0,0,0,0.5)] right-0 relative top-0 bottom-0">
            <div className="p-8 pb-6 flex items-center justify-between border-b border-white/5">
                <h2 className="text-sm font-semibold text-white/70 uppercase tracking-widest flex items-center gap-2">
                    <Settings2 size={16} />
                    Engine Builder
                </h2>

                {/* Custom Override Toggle */}
                <button
                    onClick={handleToggle}
                    className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors duration-300 focus:outline-none ${customSettings.enabled ? 'bg-indigo-500' : 'bg-white/10'}`}
                >
                    <span
                        className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform duration-300 ${customSettings.enabled ? 'translate-x-5' : 'translate-x-1'}`}
                    />
                </button>
            </div>

            <div className={`flex-1 overflow-y-auto p-6 space-y-8 scrollbar-hide transition-opacity duration-300 ${customSettings.enabled ? 'opacity-100' : 'opacity-30 pointer-events-none'}`}>

                {/* Color Hooks */}
                <div className="space-y-4">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40 flex items-center gap-2">
                        <SlidersHorizontal size={12} />
                        Global Color Hooks
                    </h3>

                    <div className="space-y-3">
                        {/* Primary Color */}
                        <div className="flex flex-col gap-2">
                            <label className="text-xs text-white/50 flex justify-between">
                                Primary Accent
                                <span className="font-mono">{customSettings.primaryColor}</span>
                            </label>
                            <div className="flex gap-3 items-center">
                                <input
                                    type="color"
                                    value={customSettings.primaryColor}
                                    onChange={(e) => handleChange('primaryColor', e.target.value)}
                                    className="w-8 h-8 rounded-full border-0 bg-transparent cursor-pointer [&::-webkit-color-swatch-wrapper]:p-0 [&::-webkit-color-swatch]:border-none [&::-webkit-color-swatch]:rounded-full shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                                    style={{ boxShadow: `0 0 15px ${customSettings.primaryColor}40` }}
                                />
                                <div className="flex-1 h-2 rounded-full overflow-hidden bg-white/5">
                                    <div className="h-full rounded-full" style={{ width: '100%', backgroundColor: customSettings.primaryColor }} />
                                </div>
                            </div>
                        </div>

                        {/* Secondary Color */}
                        <div className="flex flex-col gap-2">
                            <label className="text-xs text-white/50 flex justify-between">
                                Deep Shadow
                                <span className="font-mono">{customSettings.secondaryColor}</span>
                            </label>
                            <div className="flex gap-3 items-center">
                                <input
                                    type="color"
                                    value={customSettings.secondaryColor}
                                    onChange={(e) => handleChange('secondaryColor', e.target.value)}
                                    className="w-8 h-8 rounded-full border-0 bg-transparent cursor-pointer [&::-webkit-color-swatch-wrapper]:p-0 [&::-webkit-color-swatch]:border-none [&::-webkit-color-swatch]:rounded-full shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                                    style={{ boxShadow: `0 0 15px ${customSettings.secondaryColor}40` }}
                                />
                                <div className="flex-1 h-2 rounded-full overflow-hidden bg-white/5">
                                    <div className="h-full rounded-full" style={{ width: '100%', backgroundColor: customSettings.secondaryColor }} />
                                </div>
                            </div>
                        </div>

                        {/* Accent Light */}
                        <div className="flex flex-col gap-2">
                            <label className="text-xs text-white/50 flex justify-between">
                                Neon Glow
                                <span className="font-mono">{customSettings.accentColor}</span>
                            </label>
                            <div className="flex gap-3 items-center">
                                <input
                                    type="color"
                                    value={customSettings.accentColor}
                                    onChange={(e) => handleChange('accentColor', e.target.value)}
                                    className="w-8 h-8 rounded-full border-0 bg-transparent cursor-pointer [&::-webkit-color-swatch-wrapper]:p-0 [&::-webkit-color-swatch]:border-none [&::-webkit-color-swatch]:rounded-full shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                                    style={{ boxShadow: `0 0 15px ${customSettings.accentColor}60` }}
                                />
                                <div className="flex-1 h-2 rounded-full overflow-hidden bg-white/5">
                                    <div className="h-full rounded-full" style={{ width: '100%', backgroundColor: customSettings.accentColor }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="h-px w-full bg-white/5" />

                {/* Spatial Parameters */}
                <div className="space-y-6">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40 flex items-center gap-2">
                        <SlidersHorizontal size={12} />
                        Spatial Geometry
                    </h3>

                    {/* Glassmorphism Blur */}
                    <div className="space-y-2">
                        <div className="flex justify-between items-center text-xs">
                            <span className="text-white/50">Glass Blur Intensity</span>
                            <span className="text-white/80 font-mono bg-white/10 px-2 py-0.5 rounded-md">{customSettings.blurIntensity}px</span>
                        </div>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={customSettings.blurIntensity}
                            onChange={(e) => handleChange('blurIntensity', parseInt(e.target.value))}
                            className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white"
                        />
                    </div>

                    {/* Border Radius */}
                    <div className="space-y-2">
                        <div className="flex justify-between items-center text-xs">
                            <span className="text-white/50">Corner Radius</span>
                            <span className="text-white/80 font-mono bg-white/10 px-2 py-0.5 rounded-md">{customSettings.borderRadius}px</span>
                        </div>
                        <input
                            type="range"
                            min="0"
                            max="50"
                            value={customSettings.borderRadius}
                            onChange={(e) => handleChange('borderRadius', parseInt(e.target.value))}
                            className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white"
                        />
                    </div>

                    {/* Stroke Width */}
                    <div className="space-y-2">
                        <div className="flex justify-between items-center text-xs">
                            <span className="text-white/50">Vector Stroke Width</span>
                            <span className="text-white/80 font-mono bg-white/10 px-2 py-0.5 rounded-md">{customSettings.strokeWidth}px</span>
                        </div>
                        <input
                            type="range"
                            min="0"
                            max="10"
                            step="0.5"
                            value={customSettings.strokeWidth}
                            onChange={(e) => handleChange('strokeWidth', parseFloat(e.target.value))}
                            className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white"
                        />
                    </div>
                </div>
            </div>

            <div className="p-6 mt-auto">
                <p className="text-[10px] text-white/30 text-center uppercase tracking-widest font-medium leading-relaxed">
                    Custom Engine overwrites active theme properties in real-time.
                </p>
            </div>
        </div>
    );
}
