import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { BatchExportButton } from '../studio/BatchExportButton';
import { playClickSound, playHoverSound } from '../../utils/audio';
import { Search } from 'lucide-react';

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

    const activeIndex = themes.findIndex(t => t.id === activeTheme.id);

    return (
        <div className="w-full md:w-[320px] flex flex-col h-auto md:h-[calc(100vh-32px)] md:my-4 md:ml-4 rounded-b-[24px] md:rounded-[32px] bg-[#050505]/80 md:bg-[#050505]/60 md:border border-b border-white/[0.04] backdrop-blur-[40px] md:backdrop-blur-[80px] shrink-0 z-50 shadow-2xl md:shadow-[0_20px_80px_rgba(0,0,0,0.8)] relative overflow-hidden transition-all duration-500">
            <div className="p-4 md:p-8 pb-2 md:pb-6 flex items-center justify-between">
                <div>
                    <h2 className="text-xl md:text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60 flex items-center gap-3">
                        <svg className="w-8 h-8 md:w-10 md:h-10 drop-shadow-[0_0_12px_rgba(168,85,247,0.6)]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                    <p className="text-[11px] md:text-sm text-white/40 mt-1 md:mt-2 font-medium tracking-wide hidden md:block">Premium SVG Assets</p>
                </div>
                {/* Mobile Search Icon */}
                <button
                    onClick={() => {
                        playClickSound();
                        window.dispatchEvent(new CustomEvent('OPEN_SPOTLIGHT'));
                    }}
                    className="md:hidden p-2.5 rounded-full bg-white/[0.05] border border-white/10 text-white/60 hover:text-white"
                >
                    <Search size={18} />
                </button>
            </div>

            <div className="flex-1 py-2 md:py-6 space-y-1 overflow-hidden flex flex-col">
                {/* Minimalist Spotlight Search - Desktop Only */}
                <div className="px-6 mb-8 hidden md:block">
                    <button
                        onClick={() => {
                            playClickSound();
                            window.dispatchEvent(new CustomEvent('OPEN_SPOTLIGHT'));
                        }}
                        className="w-full bg-black/40 hover:bg-black/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)] transition-all duration-300 rounded-full p-3.5 px-5 flex items-center justify-between text-white/40 group border border-transparent hover:border-white/10"
                    >
                        <div className="flex items-center gap-3">
                            <Search size={16} className="text-white/30 group-hover:text-white/70 transition-colors duration-300" />
                            <span className="text-[13px] font-medium tracking-wide">Search Icons...</span>
                        </div>
                        <div className="flex items-center gap-1 opacity-50 group-hover:opacity-100 transition-opacity">
                            <kbd className="px-1.5 py-0.5 rounded-md bg-white/10 text-[10px] font-sans font-bold text-white/60">⌘</kbd>
                            <kbd className="px-1.5 py-0.5 rounded-md bg-white/10 text-[10px] font-sans font-bold text-white/60">K</kbd>
                        </div>
                    </button>
                </div>

                <div className="px-6 mb-3 hidden md:flex items-center gap-3">
                    <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent flex-1" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                        Art Engines
                    </span>
                    <div className="h-px bg-gradient-to-r from-white/10 via-transparent to-transparent flex-1" />
                </div>

                <div className="flex-none md:flex-1 w-full overflow-x-auto md:overflow-y-auto px-4 md:px-4 pb-4 md:pb-8 custom-scrollbar relative">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                        className="flex flex-row md:flex-col space-x-3 md:space-x-0 md:space-y-2 py-2 md:py-4 w-max md:w-full"
                    >
                        {themes.map((theme, index) => {
                            return (
                                <motion.button
                                    key={theme.id}
                                    variants={itemVariants}
                                    onMouseEnter={playHoverSound}
                                    onClick={() => {
                                        playClickSound();
                                        setActiveTheme(theme);
                                    }}
                                    className={`w-max md:w-full flex-none text-left px-5 md:px-5 py-3 md:py-4 rounded-full md:rounded-[20px] text-[12px] md:text-[13px] relative transition-all duration-300 z-10 flex items-center justify-between gap-4 md:gap-0 group border border-transparent ${theme.id === activeTheme.id
                                        ? 'text-white font-semibold tracking-wide border-white/10 shadow-lg md:shadow-2xl bg-white/[0.08] md:bg-transparent'
                                        : 'text-white/50 hover:text-white/90 hover:bg-white/[0.04] md:hover:bg-white/[0.02] font-medium tracking-wide hover:border-white/5 bg-white/[0.02] md:bg-transparent'
                                        }`}
                                >
                                    {/* The Physical Background Tab that smoothly animates between active items */}
                                    {theme.id === activeTheme.id && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute inset-0 bg-white/[0.06] rounded-[20px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
                                            transition={{ type: "spring", stiffness: 350, damping: 35 }}
                                        />
                                    )}
                                    <span className="relative z-20 flex flex-col">
                                        {theme.name}
                                    </span>
                                    <span className="relative z-20 flex items-center justify-center">
                                        <div
                                            className={`w-2 h-2 rounded-full transition-all duration-500 ${theme.id === activeTheme.id ? 'scale-100 opacity-100' : 'scale-75 opacity-20 group-hover:scale-100 group-hover:opacity-70'}`}
                                            style={{
                                                backgroundColor: theme.colors.accent,
                                                boxShadow: theme.id === activeTheme.id ? `0 0 16px ${theme.colors.accent}` : 'none'
                                            }}
                                        />
                                    </span>
                                </motion.button>
                            )
                        })}
                    </motion.div>
                </div>
            </div>

            <div className="border-t border-white/[0.04] p-2 flex-col gap-4 relative z-20 bg-transparent mb-1 hidden md:flex">
                <BatchExportButton themes={themes} />
            </div>

            <div className="p-5 relative overflow-hidden flex-col items-center justify-center hidden md:flex">
                <div className="w-8 h-[2px] bg-white-[0.05] rounded-full mb-3 relative z-10" />
                <div className="relative z-10 text-[9px] text-white/20 font-bold tracking-[0.2em] uppercase text-center opacity-60">
                    Handcrafted Vectors
                </div>
            </div>
        </div>
    );
}
