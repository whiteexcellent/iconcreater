import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { EngineBuilder } from '../studio/EngineBuilder';
import { BatchExportButton } from '../studio/BatchExportButton';
import { playClickSound, playHoverSound } from '../../utils/audio';

export function Sidebar({ themes }) {
    const { activeTheme, setActiveTheme } = useTheme();
    // Animation variants for the staggered list
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        show: { opacity: 1, x: 0 }
    };

    return (
        <div className="w-72 flex flex-col h-full bg-black/20 border-r border-white-[0.02] backdrop-blur-[40px] shrink-0 z-20 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
            <div className="p-8 pb-6">
                <h2 className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60 flex items-center gap-3">
                    <svg className="w-10 h-10 drop-shadow-[0_0_12px_rgba(168,85,247,0.6)]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M50 15L85 35V65L50 85L15 65V35L50 15Z" stroke="url(#logoGrad1)" strokeWidth="6" strokeLinejoin="round" />
                        <path d="M50 85V50M15 35L50 50M85 35L50 50" stroke="url(#logoGrad2)" strokeWidth="4" strokeLinecap="round" />
                        <circle cx="50" cy="50" r="8" fill="url(#logoGrad3)" />
                        <circle cx="50" cy="15" r="4" fill="#38BDF8" />
                        <circle cx="85" cy="35" r="4" fill="#6366F1" />
                        <circle cx="85" cy="65" r="4" fill="#3B82F6" />
                        <circle cx="50" cy="85" r="4" fill="#8B5CF6" />
                        <circle cx="15" cy="65" r="4" fill="#6366F1" />
                        <circle cx="15" cy="35" r="4" fill="#06B6D4" />
                        <defs>
                            <linearGradient id="logoGrad1" x1="15" y1="15" x2="85" y2="85" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#38BDF8" />
                                <stop offset="0.5" stopColor="#3B82F6" />
                                <stop offset="1" stopColor="#8B5CF6" />
                            </linearGradient>
                            <linearGradient id="logoGrad2" x1="15" y1="35" x2="85" y2="85" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#8B5CF6" />
                                <stop offset="1" stopColor="#6366F1" />
                            </linearGradient>
                            <radialGradient id="logoGrad3" cx="50" cy="50" r="8" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#FFFFFF" />
                                <stop offset="1" stopColor="#3B82F6" />
                            </radialGradient>
                        </defs>
                    </svg>
                    FiveM Studio
                </h2>
                <p className="text-sm text-white/40 mt-2 font-medium tracking-wide">Premium SVG Assets</p>
            </div>

            <div className="flex-1 py-4 px-3 space-y-1">
                <div className="px-3 mb-4 text-xs font-semibold uppercase tracking-wider text-white/40">
                    Art Engines
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="flex flex-col space-y-1"
                >
                    {themes.map(theme => {
                        return (
                            <motion.button
                                key={theme.id}
                                variants={itemVariants}
                                onMouseEnter={playHoverSound}
                                onClick={() => {
                                    playClickSound();
                                    setActiveTheme(theme);
                                }}
                                className={`w-full text-left px-4 py-3.5 rounded-2xl text-sm relative transition-colors duration-300 z-10 ${theme.id === activeTheme.id
                                    ? 'text-white font-semibold tracking-wide'
                                    : 'text-white/40 hover:text-white hover:bg-white-[0.02] font-medium tracking-wide'
                                    }`}
                            >
                                {/* The Physical Background Tab that smoothly animates between active items */}
                                {theme.id === activeTheme.id && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-white/10 rounded-2xl border border-white/10"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-20 flex items-center justify-between">
                                    {theme.name}
                                    {/* Small colored dot to indicate theme accent */}
                                    <span
                                        className="w-2.5 h-2.5 rounded-full"
                                        style={{ backgroundColor: theme.colors.accent, boxShadow: `0 0 12px ${theme.colors.accent}` }}
                                    />
                                </span>
                            </motion.button>
                        )
                    })}
                </motion.div>
            </div>

            <div className="p-8 mt-auto relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                <div className="relative z-10 text-xs text-white/30 font-medium tracking-wide leading-relaxed text-center">
                    SVG Paths are manually crafted,<br />not generated.
                </div>
            </div>
        </div>
    );
}
