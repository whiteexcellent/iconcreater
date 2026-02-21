import React from 'react';
import { motion } from 'framer-motion';

export function Sidebar({ themes, activeTheme, onSelectTheme }) {
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
                    <svg className="w-8 h-8 text-indigo-400 drop-shadow-[0_0_12px_rgba(99,102,241,0.8)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
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
                        const isActive = activeTheme.id === theme.id;
                        return (
                            <motion.button
                                key={theme.id}
                                variants={itemVariants}
                                onClick={() => onSelectTheme(theme)}
                                className={`w-full text-left px-4 py-3.5 rounded-2xl text-sm relative transition-colors duration-300 z-10 ${isActive
                                    ? 'text-white font-semibold tracking-wide'
                                    : 'text-white/40 hover:text-white hover:bg-white-[0.02] font-medium tracking-wide'
                                    }`}
                            >
                                {/* The Physical Background Tab that smoothly animates between active items */}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeThemeBubble"
                                        className="absolute inset-0 bg-white/[0.08] backdrop-blur-xl border border-white/10 rounded-2xl -z-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
                                        transition={{ type: "spring", stiffness: 400, damping: 35 }}
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
