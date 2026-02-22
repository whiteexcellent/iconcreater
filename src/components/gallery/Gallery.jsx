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
import { CarbonTacticalEngine } from '../icons/CarbonTacticalEngine';
import { ViceCityEngine } from '../icons/ViceCityEngine';
import { VisionDayEngine } from '../icons/VisionDayEngine';
import { EcommerceMinimalEngine } from '../icons/EcommerceMinimalEngine';
import { DropzoneTransformer } from '../studio/DropzoneTransformer';
import { SpotlightModal } from '../layout/SpotlightModal';
import { useTheme } from '../../context/ThemeContext';
import { compileSVGWithSettings } from '../../utils/engineCompiler';
import { useMouseTilt } from '../../hooks/useMouseTilt';
import { playClickSound, playHoverSound, playSnapSound } from '../../utils/audio';

function PreviewModal({ app, theme, onClose, rawSvg }) {
    const [copied, setCopied] = useState(false);
    const [scale, setScale] = useState(1);
    const [particles, setParticles] = useState([]);

    if (!app) return null;

    const handleCopy = (e) => {
        playSnapSound();
        navigator.clipboard.writeText(rawSvg);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);

        const rect = e.currentTarget.getBoundingClientRect();
        const startX = e.clientX - rect.left;
        const startY = e.clientY - rect.top;

        const newParticles = Array.from({ length: 20 }).map((_, i) => ({
            id: Date.now() + i,
            x: startX,
            y: startY,
            angle: Math.random() * Math.PI * 2,
            velocity: 60 + Math.random() * 80,
            size: 4 + Math.random() * 6,
            rotation: Math.random() * 360
        }));

        setParticles(newParticles);
        setTimeout(() => setParticles([]), 1000);
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
                className="w-full max-w-4xl max-h-[95vh] overflow-y-auto md:overflow-hidden bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[24px] md:rounded-3xl shadow-2xl flex flex-col md:flex-row relative"
                onClick={e => e.stopPropagation()}
            >
                {/* Left Side: Large Preview with Zoom Controls */}
                <div className={`w-full md:w-5/12 p-6 md:p-8 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-white/5 relative min-h-[350px] md:min-h-[400px] shrink-0 ${previewBg} overflow-hidden`}>

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
                    >
                        <div
                            className="drop-shadow-2xl transition-transform duration-200 w-full h-full"
                            style={{ width: 192, height: 192, transform: `scale(${scale})` }}
                            dangerouslySetInnerHTML={{ __html: rawSvg }}
                        />
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
                <div className="w-full md:w-7/12 p-6 md:p-8 flex flex-col relative min-h-[450px] md:min-h-[500px] bg-[#0A0A0A] shrink-0">
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
                        className={`w-full relative overflow-hidden py-4 px-6 rounded-2xl font-medium tracking-wide flex items-center justify-center gap-3 transition-colors duration-200 border shadow-lg`}
                    >
                        {particles.map(p => (
                            <motion.div
                                key={p.id}
                                className="absolute rounded-sm pointer-events-none"
                                initial={{ x: p.x, y: p.y, opacity: 1, scale: 0, rotate: p.rotation }}
                                animate={{
                                    x: p.x + Math.cos(p.angle) * p.velocity,
                                    y: p.y + Math.sin(p.angle) * p.velocity,
                                    opacity: 0,
                                    scale: 1,
                                    rotate: p.rotation + 180
                                }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                style={{
                                    width: p.size,
                                    height: p.size,
                                    backgroundColor: theme.colors.accent || '#10B981'
                                }}
                            />
                        ))}
                        <span className="relative z-10 flex items-center justify-center gap-3">
                            {copied ? (
                                <><Check size={20} /> Copied entirely to Clipboard!</>
                            ) : (
                                <><Copy size={20} /> Copy SVG Document</>
                            )}
                        </span>
                    </motion.button>
                </div>
            </motion.div>
        </motion.div>,
        document.body
    );
}

export const GalleryItem = ({ app, theme, customSettings, onClick, itemVariants, rawSvgStr }) => {
    const tilt = useMouseTilt({ intensity: 25, spring: { stiffness: 300, damping: 20 } });

    return (
        <motion.div
            ref={tilt.ref}
            variants={itemVariants}
            style={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY, perspective: 1200 }}
            onMouseMove={tilt.handleMouseMove}
            onMouseEnter={(e) => {
                tilt.handleMouseEnter(e);
                playHoverSound();
            }}
            onMouseLeave={tilt.handleMouseLeave}
            whileHover={{ scale: 1.15, zIndex: 10, y: -15, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.9 }}
            className="group flex flex-col items-center justify-center p-6 cursor-pointer relative rounded-3xl transition-colors duration-300 hover:bg-white/[0.04] border border-transparent hover:border-white/10"
            onClick={(e) => {
                playClickSound();
                onClick(e);
            }}
        >
            <div className="w-[100px] h-[100px] mb-4 relative z-10 drop-shadow-2xl flex items-center justify-center" style={{ transformStyle: "preserve-3d", transform: "translateZ(30px)" }}>
                <div className="w-full h-full flex items-center justify-center">
                    <div className="w-full h-full" dangerouslySetInnerHTML={{ __html: rawSvgStr }} />
                </div>

                <div
                    className="absolute inset-0 -z-10 blur-[30px] opacity-0 group-hover:opacity-80 transition-opacity duration-300 rounded-full scale-150"
                    style={{ backgroundColor: theme.colors.accent || theme.colors.primary, transform: "translateZ(-10px)" }}
                />
            </div>

            <span className="text-sm font-bold tracking-wider text-white/40 group-hover:text-white transition-colors truncate w-full text-center drop-shadow-sm">
                {app.name}
            </span>
        </motion.div>
    );
};

export function Gallery({ theme, apps }) {
    const [selectedApp, setSelectedApp] = useState(null);
    const [customApps, setCustomApps] = useState([]);
    const { customSettings } = useTheme();

    const getRawSvgStr = (appId) => {
        const customIcon = customApps.find(a => a.id === appId);
        if (customIcon) {
            let baseSvg = '';
            switch (theme.id) {
                case 'kawaii': baseSvg = KawaiiEngine.getRawSVG('undefined'); break;
                case 'kawaii-decora': baseSvg = KawaiiDecoraEngine.getRawSVG('undefined'); break;
                case 'ios': baseSvg = IOSEngine.getRawSVG('undefined'); break;
                case 'cyber': baseSvg = CyberEngine.getRawSVG('undefined'); break;
                case 'neo-brutal': baseSvg = NeoBrutalEngine.getRawSVG('undefined'); break;
                case 'holo-ghost': baseSvg = HoloGhostEngine.getRawSVG('undefined'); break;
                case 'liquid-chrome': baseSvg = LiquidChromeEngine.getRawSVG('undefined'); break;
                default: return '';
            }

            const nestedInner = customIcon.rawSvg
                .replace(/width="[^"]*"/g, '')
                .replace(/height="[^"]*"/g, '')
                .replace(/<svg\s/, '<svg x="40" y="40" width="120" height="120" ');

            return baseSvg.replace(/<\/svg>$/, `\n${nestedInner}\n</svg>`);
        }
        switch (theme.id) {
            case 'kawaii': return KawaiiEngine.getRawSVG(appId);
            case 'kawaii-decora': return KawaiiDecoraEngine.getRawSVG(appId);
            case 'ios': return IOSEngine.getRawSVG(appId);
            case 'cyber': return CyberEngine.getRawSVG(appId);
            case 'neo-brutal': return NeoBrutalEngine.getRawSVG(appId);
            case 'holo-ghost': return HoloGhostEngine.getRawSVG(appId);
            case 'liquid-chrome': return LiquidChromeEngine.getRawSVG(appId);
            case 'carbon-tactical': return CarbonTacticalEngine.getRawSVG(appId);
            case 'vice-city': return ViceCityEngine.getRawSVG(appId);
            case 'vision-day': return VisionDayEngine.getRawSVG(appId);
            case 'ecommerce-minimal': return EcommerceMinimalEngine.getRawSVG(appId);
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

    const allApps = [...apps, ...customApps];

    return (
        <DropzoneTransformer onSvgDrop={(appObj) => setCustomApps([appObj, ...customApps])}>
            <motion.div
                key={theme.id} // Re-trigger initial animation on theme change
                variants={gridVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
            >
                {allApps.map((app) => (
                    <GalleryItem
                        key={app.id}
                        app={app}
                        theme={theme}
                        customSettings={customSettings}
                        itemVariants={itemVariants}
                        onClick={() => setSelectedApp(app)}
                        rawSvgStr={compileSVGWithSettings(getRawSvgStr(app.id), theme, customSettings)}
                    />
                ))}
            </motion.div>

            {/* Command Palette / Spotlight Search */}
            <SpotlightModal onSelectApp={setSelectedApp} />

            {/* Premium Animated Modal Overlay */}
            <AnimatePresence>
                {selectedApp && (
                    <PreviewModal
                        app={selectedApp}
                        theme={theme}
                        onClose={() => setSelectedApp(null)}
                        rawSvg={compileSVGWithSettings(getRawSvgStr(selectedApp.id), theme, customSettings)}
                    />
                )}
            </AnimatePresence>
        </DropzoneTransformer>
    );
}
