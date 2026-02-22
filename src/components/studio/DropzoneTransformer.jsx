import React, { useState, useCallback } from 'react';
import { UploadCloud } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function DropzoneTransformer({ children, onSvgDrop }) {
    const [isDragging, setIsDragging] = useState(false);

    const handleDragEnter = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    }, []);

    const handleDrop = useCallback(
        (e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsDragging(false);

            const files = Array.from(e.dataTransfer.files);
            const svgFiles = files.filter(file => file.type === 'image/svg+xml' || file.name.endsWith('.svg'));

            svgFiles.forEach(file => {
                const reader = new FileReader();
                reader.onload = (event) => {
                    const rawSvg = event.target.result;
                    // Auto-extract basic details
                    const name = file.name.replace('.svg', '').replace(/[-_]/g, ' ');
                    const appObj = {
                        id: `custom_${Date.now()}_${Math.random().toString(36).substring(7)}`,
                        name: name.charAt(0).toUpperCase() + name.slice(1),
                        rawSvg: rawSvg,
                    };
                    if (onSvgDrop) onSvgDrop(appObj);
                };
                reader.readAsText(file);
            });
        },
        [onSvgDrop]
    );

    return (
        <div
            onDragEnter={handleDragEnter}
            onDragOver={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className="w-full h-full relative"
        >
            {children}

            <AnimatePresence>
                {isDragging && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-md rounded-3xl border-2 border-dashed border-white/50 m-4"
                    >
                        <div className="flex flex-col items-center gap-6 p-12 bg-white/5 rounded-3xl border border-white/10 shadow-2xl">
                            <motion.div
                                animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
                                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                            >
                                <UploadCloud size={80} className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
                            </motion.div>
                            <div className="text-center">
                                <h2 className="text-3xl font-black tracking-tight text-white mb-2">Drop SVG Assets Here</h2>
                                <p className="text-white/60 font-medium max-w-sm">
                                    The system will instantly parse the vector path data and inject it into the active Art Engine framework, bypassing standard compilation.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
