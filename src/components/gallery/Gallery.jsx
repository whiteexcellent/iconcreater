import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, Check } from 'lucide-react';
import { KawaiiEngine } from '../icons/KawaiiEngine';
import { KawaiiDecoraEngine } from '../icons/KawaiiDecoraEngine';
import { IOSEngine } from '../icons/iOSEngine';
import { CyberEngine } from '../icons/CyberEngine';
import { NeoBrutalEngine } from '../icons/NeoBrutalEngine';
import { HoloGhostEngine } from '../icons/HoloGhostEngine';
import { LiquidChromeEngine } from '../icons/LiquidChromeEngine';

function PreviewModal({ app, theme, onClose, rawSvg }) {
    const [copied, setCopied] = useState(false);
    const [scale, setScale] = useState(1);

    if (!app) return null;

    const handleCopy = () => {
        navigator.clipboard.writeText(rawSvg);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const renderIcon = () => {
        switch (theme.id) {
            case 'kawaii': return <KawaiiEngine icon={app.id} />;
            case 'kawaii-decora': return <KawaiiDecoraEngine icon={app.id} />;
            case 'ios': return <IOSEngine icon={app.id} />;
            case 'cyber': return <CyberEngine icon={app.id} />;
            case 'neo-brutal': return <NeoBrutalEngine icon={app.id} />;
            case 'holo-ghost': return <HoloGhostEngine icon={app.id} />;
            case 'liquid-chrome': return <LiquidChromeEngine icon={app.id} />;
            default: return null;
        }
    };

    const previewBg = theme.id === 'ios' ? 'bg-zinc-800/80' : 'bg-black/40';

    // Modal Animation Variants
    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { type: "spring", damping: 25, stiffness: 300 }
        },
        exit: { opacity: 0, scale: 0.9, y: 20 }
    };

    return createPortal(
        <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
            onClick={onClose}
        >
            <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="w-full max-w-4xl bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row relative"
                onClick={e => e.stopPropagation()}
            >
                {/* Left Side: Large Preview with Zoom Controls */}
                <div className={`w-full md:w-5/12 p-8 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-white/5 relative min-h-[300px] ${previewBg} overflow-hidden`}>

                    {/* Ambient Modal Glow behind SVG */}
                    <div
                        className="absolute inset-0 opacity-20 blur-[60px] pointer-events-none"
                        style={{ background: `radial-gradient(circle at center, ${theme.colors.primary}, transparent 70%)` }}
                    />

                    <button
                        onClick={onClose}
                        className="absolute top-4 left-4 p-2 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors md:hidden z-20"
                    >
                        <X size={20} />
                    </button>

                    {/* Floating Zoomable Container */}
                    <motion.div
                        className="flex-1 flex items-center justify-center w-full overflow-hidden mb-6 z-10"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    >
                        <div
                            className="drop-shadow-2xl transition-transform duration-200"
                            style={{ width: 192, height: 192, transform: `scale(${scale})` }}
                        >
                            {renderIcon()}
                        </div>
                    </motion.div>

                    {/* Zoom Slider */}
                    <div className="w-full flex items-center gap-4 px-6 mb-8 mt-auto z-10 bg-black/40 p-3 rounded-2xl border border-white/5 backdrop-blur-md">
                        <span className="text-xs text-white/60 font-medium">Zoom</span>
                        <input
                            type="range"
                            min="0.5"
                            max="2.5"
                            step="0.1"
                            value={scale}
                            onChange={(e) => setScale(parseFloat(e.target.value))}
                            className="flex-1 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white"
                        />
                        <span className="text-xs text-white/60 font-mono w-8 text-right">{(scale * 100).toFixed(0)}%</span>
                    </div>

                    <div className="text-center z-10">
                        <h3 className="text-2xl font-bold text-white drop-shadow-md">{app.name}</h3>
                        <span className="text-sm text-white/50 mt-2 block uppercase tracking-widest drop-shadow-md">{theme.name} Theme</span>
                    </div>
                </div>

                {/* Right Side: Code & Actions */}
                <div className="w-full md:w-7/12 p-8 flex flex-col relative h-[500px] bg-[#0A0A0A]">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 rounded-full text-white/30 hover:text-white hover:bg-white/10 transition-colors hidden md:block"
                    >
                        <X size={20} />
                    </button>

                    <div className="flex items-center justify-between mb-4 mt-2">
                        <h4 className="text-sm font-semibold text-white/70 uppercase tracking-widest">Raw SVG Document</h4>
                    </div>

                    <div className="flex-1 bg-black/60 rounded-2xl p-5 font-mono text-xs text-white/50 overflow-y-auto mb-6 border border-white/5 shadow-inner custom-scrollbar relative">
                        <pre className="whitespace-pre-wrap break-all relative z-10">{rawSvg || '<!-- SVG Path Not Found -->'}</pre>
                        {/* Overlay subtle gradient inside code block */}
                        <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-inset ring-white/5" />
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleCopy}
                        style={{
                            backgroundColor: copied ? '#10B981' : 'rgba(255,255,255,0.05)',
                            borderColor: copied ? 'transparent' : 'rgba(255,255,255,0.1)',
                            color: copied ? '#fff' : '#fff'
                        }}
                        className={`w-full py-4 px-6 rounded-2xl font-medium tracking-wide flex items-center justify-center gap-3 transition-colors duration-200 border shadow-lg`}
                    >
                        {copied ? (
                            <><Check size={20} /> Copied entirely to Clipboard!</>
                        ) : (
                            <><Copy size={20} /> Copy SVG Document</>
                        )}
                    </motion.button>
                </div>
            </motion.div>
        </motion.div>,
        document.body
    );
}

export function Gallery({ theme, apps }) {
    const [selectedApp, setSelectedApp] = useState(null);

    const renderIcon = (appId) => {
        switch (theme.id) {
            case 'kawaii': return <KawaiiEngine icon={appId} />;
            case 'kawaii-decora': return <KawaiiDecoraEngine icon={appId} />;
            case 'ios': return <IOSEngine icon={appId} />;
            case 'cyber': return <CyberEngine icon={appId} />;
            case 'neo-brutal': return <NeoBrutalEngine icon={appId} />;
            case 'holo-ghost': return <HoloGhostEngine icon={appId} />;
            case 'liquid-chrome': return <LiquidChromeEngine icon={appId} />;
            default: return null;
        }
    }

    const getRawSvgStr = (appId) => {
        switch (theme.id) {
            case 'kawaii': return KawaiiEngine.getRawSVG(appId);
            case 'kawaii-decora': return KawaiiDecoraEngine.getRawSVG(appId);
            case 'ios': return IOSEngine.getRawSVG(appId);
            case 'cyber': return CyberEngine.getRawSVG(appId);
            case 'neo-brutal': return NeoBrutalEngine.getRawSVG(appId);
            case 'holo-ghost': return HoloGhostEngine.getRawSVG(appId);
            case 'liquid-chrome': return LiquidChromeEngine.getRawSVG(appId);
            default: return '';
        }
    }

    // Expansive Spatial Grid Variants
    const gridVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 30 },
        show: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { type: "spring", stiffness: 200, damping: 20 }
        }
    };

    return (
        <>
            <motion.div
                key={theme.id} // Re-trigger initial animation on theme change
                variants={gridVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
            >
                {apps.map((app, index) => (
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ scale: 1.15, zIndex: 10, y: -15, transition: { duration: 0.3 } }}
                        whileTap={{ scale: 0.9 }}
                        key={app.id}
                        className="group flex flex-col items-center justify-center p-6 cursor-pointer relative rounded-3xl transition-colors duration-300 hover:bg-white/[0.04] border border-transparent hover:border-white/10"
                        onClick={() => setSelectedApp(app)}
                    >
                        {/* Interactive Spatial SVG Projection - FIXED ALIGNMENT */}
                        <div className="w-[100px] h-[100px] mb-4 relative z-10 drop-shadow-2xl flex items-center justify-center">
                            {/* Make inner render icon fill exactly */}
                            <div className="w-full h-full flex items-center justify-center">
                                {renderIcon(app.id)}
                            </div>

                            {/* Deep Spatial Hover Ambient Glow */}
                            <div
                                className="absolute inset-0 -z-10 blur-[30px] opacity-0 group-hover:opacity-80 transition-opacity duration-300 rounded-full scale-150"
                                style={{ backgroundColor: theme.colors.accent || theme.colors.primary }}
                            />
                        </div>

                        <span className="text-sm font-bold tracking-wider text-white/40 group-hover:text-white transition-colors truncate w-full text-center drop-shadow-sm">
                            {app.name}
                        </span>
                    </motion.div>
                ))}
            </motion.div>

            {/* Premium Animated Modal Overlay */}
            <AnimatePresence>
                {selectedApp && (
                    <PreviewModal
                        app={selectedApp}
                        theme={theme}
                        onClose={() => setSelectedApp(null)}
                        rawSvg={getRawSvgStr(selectedApp.id)}
                    />
                )}
            </AnimatePresence>
        </>
    );
}
