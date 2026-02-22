import React from 'react';
import { motion } from 'framer-motion';
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

            <div className="flex-1 py-6 space-y-1 overflow-hidden flex flex-col">
                {/* Minimalist Spotlight Search */}
                <div className="px-6 mb-8">
                    <button
                        onClick={() => {
                            playClickSound();
                            window.dispatchEvent(new CustomEvent('OPEN_SPOTLIGHT'));
                        }}
                        className="w-full bg-white/[0.03] hover:bg-white/[0.08] transition-all duration-300 rounded-2xl p-3.5 flex items-center justify-between text-white/40 group border border-transparent hover:border-white/10"
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

                <div className="px-6 mb-3 flex items-center gap-3">
                    <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent flex-1" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                        Art Engines
                    </span>
                    <div className="h-px bg-gradient-to-r from-white/10 via-transparent to-transparent flex-1" />
                </div>

                <div className="flex-1 overflow-y-auto px-4 pb-8 custom-scrollbar">
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
                                    className={`w-full text-left px-4 py-3.5 rounded-2xl text-[13px] relative transition-all duration-300 z-10 flex items-center justify-between group ${theme.id === activeTheme.id
                                        ? 'text-white font-semibold tracking-wide'
                                        : 'text-white/40 hover:text-white/90 hover:bg-white/[0.03] font-medium tracking-wide'
                                        }`}
                                >
                                    {/* The Physical Background Tab that smoothly animates between active items */}
                                    {theme.id === activeTheme.id && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute inset-0 bg-white/[0.08] rounded-2xl border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
                                            transition={{ type: "spring", stiffness: 350, damping: 35 }}
                                        />
                                    )}
                                    <span className="relative z-20 flex flex-col">
                                        {theme.name}
                                    </span>
                                    <span className="relative z-20 flex items-center justify-center">
                                        <div
                                            className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${theme.id === activeTheme.id ? 'scale-100 opacity-100' : 'scale-50 opacity-30 group-hover:scale-75 group-hover:opacity-70'}`}
                                            style={{
                                                backgroundColor: theme.colors.accent,
                                                boxShadow: theme.id === activeTheme.id ? `0 0 12px ${theme.colors.accent}` : 'none'
                                            }}
                                        />
                                    </span>
                                </motion.button>
                            )
                        })}
                    </motion.div>
                </div>
            </div>

            <div className="border-t border-white/5 p-4 flex flex-col gap-4 relative z-20 bg-black/40 backdrop-blur-md">
                <BatchExportButton themes={themes} />
            </div>

            <div className="p-6 relative overflow-hidden flex flex-col items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                <div className="w-12 h-1 bg-white/10 rounded-full mb-4 relative z-10" />
                <div className="relative z-10 text-[10px] text-white/30 font-medium tracking-wider uppercase leading-relaxed text-center">
                    Handcrafted Vectors
                </div>
            </div>
        </div>
    );
}
