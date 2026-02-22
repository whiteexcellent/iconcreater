import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Command, AppWindow, Palette } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { THEMES, FIVEM_APPS } from '../../data/icons';

export function SpotlightModal({ onSelectApp }) {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);
    const inputRef = useRef(null);
    const { setActiveTheme } = useTheme();

    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setIsOpen((prev) => !prev);
                setQuery('');
                setSelectedIndex(0);
            }
            if (e.key === 'Escape') {
                setIsOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            setTimeout(() => inputRef.current.focus(), 50);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const searchTerm = query.toLowerCase();

    const filteredThemes = THEMES.filter(t => t.name.toLowerCase().includes(searchTerm) || t.description.toLowerCase().includes(searchTerm));
    const filteredApps = FIVEM_APPS.filter(a => a.name.toLowerCase().includes(searchTerm) || a.id.toLowerCase().includes(searchTerm));

    const results = [
        ...filteredThemes.map(t => ({ ...t, type: 'theme' })),
        ...filteredApps.map(a => ({ ...a, type: 'app' }))
    ].slice(0, 8);

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setSelectedIndex(prev => (prev < results.length - 1 ? prev + 1 : prev));
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setSelectedIndex(prev => (prev > 0 ? prev - 1 : 0));
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (results[selectedIndex]) {
                handleSelect(results[selectedIndex]);
            }
        }
    };

    const handleSelect = (item) => {
        if (item.type === 'theme') {
            setActiveTheme(item);
        } else if (item.type === 'app') {
            if (onSelectApp) onSelectApp(item);
        }
        setIsOpen(false);
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="fixed inset-0 z-[300] flex items-start justify-center pt-[15vh] px-4 bg-black/50 backdrop-blur-sm"
                onClick={() => setIsOpen(false)}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -20 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className="w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                    onClick={e => e.stopPropagation()}
                >
                    <div className="flex items-center px-4 py-4 border-b border-white/10">
                        <Search className="text-white/40 mr-3" size={24} />
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="Search apps, themes, or commands..."
                            className="flex-1 bg-transparent text-white text-xl outline-none placeholder:text-white/20"
                            value={query}
                            onChange={(e) => {
                                setQuery(e.target.value);
                                setSelectedIndex(0);
                            }}
                            onKeyDown={handleKeyDown}
                        />
                        <div className="flex items-center gap-1 text-xs text-white/30 font-mono bg-white/5 px-2 py-1 rounded-md">
                            <Command size={12} /> K
                        </div>
                    </div>

                    <div className="max-h-[60vh] overflow-y-auto p-2">
                        {results.length === 0 ? (
                            <div className="py-12 text-center text-white/40">
                                No results found for "{query}"
                            </div>
                        ) : (
                            <div className="flex flex-col gap-1">
                                {results.map((item, index) => {
                                    const isSelected = index === selectedIndex;
                                    const Icon = item.type === 'theme' ? Palette : AppWindow;

                                    return (
                                        <div
                                            key={`${item.type}-${item.id}`}
                                            className={`flex items-center px-4 py-3 rounded-xl cursor-pointer transition-colors ${isSelected ? 'bg-white/10 text-white' : 'text-white/60 hover:bg-white/5'}`}
                                            onClick={() => handleSelect(item)}
                                            onMouseEnter={() => setSelectedIndex(index)}
                                        >
                                            <Icon size={18} className={`mr-3 ${item.type === 'theme' ? 'text-emerald-400' : 'text-blue-400'}`} />
                                            <div className="flex-1">
                                                <div className="font-semibold text-sm">{item.name}</div>
                                                <div className="text-xs text-white/40 mt-0.5 max-w-sm truncate whitespace-nowrap">
                                                    {item.type === 'theme' ? item.description : `Icon ID: ${item.id}`}
                                                </div>
                                            </div>
                                            <div className="text-[10px] uppercase tracking-widest font-bold opacity-50 px-2 py-1 rounded-full bg-black/40 border border-white/5">
                                                {item.type}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
