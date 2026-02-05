import React, { useState, useMemo } from 'react';
import { ICONS, THEME_PRESETS, CATEGORIES, THEME_EXTRA_ICONS, getIconsForTheme } from './data/icons';
import ThemeIcon from './components/ThemeIcon';
import { renderToStaticMarkup } from 'react-dom/server';
import {
  Search, Download, Copy, Heart, Palette, Sparkles, Smartphone, Terminal,
  Zap, Shield, Crown, Box, Droplets, Cloud, Check, Eye, Layers, Grid3X3,
  PenTool, Cpu, Building2, Pill, X, Menu, Package, Upload, Pencil
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import JSZip from 'jszip';
import DrawingModal from './components/drawing/DrawingModal';
import ImportModal from './components/drawing/ImportModal';

function App() {
  const [activeTheme, setActiveTheme] = useState('v13');
  const [colors, setColors] = useState(THEME_PRESETS.v13.colors);
  const [search, setSearch] = useState('');
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null); // null = all
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem('favs') || '[]'));
  const [copied, setCopied] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDownloadingAll, setIsDownloadingAll] = useState(false);
  const [drawingModalOpen, setDrawingModalOpen] = useState(false);
  const [importModalOpen, setImportModalOpen] = useState(false);

  const handleThemeChange = (id) => {
    setActiveTheme(id);
    setColors(THEME_PRESETS[id].colors);
  };

  const toggleFavorite = (iconId) => {
    const newFavs = favorites.includes(iconId)
      ? favorites.filter(f => f !== iconId)
      : [...favorites, iconId];
    setFavorites(newFavs);
    localStorage.setItem('favs', JSON.stringify(newFavs));
  };

  // Get icons including theme-specific extras
  const allIconsForTheme = useMemo(() => getIconsForTheme(activeTheme), [activeTheme]);

  const filteredIcons = useMemo(() => {
    return allIconsForTheme.filter(i => {
      const matchesSearch = i.name.toLowerCase().includes(search.toLowerCase()) ||
        i.category.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = selectedCategory ? i.category === selectedCategory : true;
      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory, allIconsForTheme]);

  const generateExportSVG = (icon, theme, currentColors) => {
    const exportUid = Math.random().toString(36).substr(2, 9);
    const svgString = renderToStaticMarkup(
      <ThemeIcon theme={theme} icon={icon} colors={currentColors} size={64} uid={exportUid} showBackground={showBackground} />
    );
    return `<?xml version="1.0" encoding="UTF-8"?>\n${svgString}`;
  };

  const downloadSVG = (icon) => {
    const finalSvg = generateExportSVG(icon, activeTheme, colors);
    const blob = new Blob([finalSvg], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${icon.id}-${THEME_PRESETS[activeTheme].name.replace(/\s+/g, '-').toLowerCase()}.svg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const downloadAllZIP = async () => {
    setIsDownloadingAll(true);
    try {
      const zip = new JSZip();
      const themeName = THEME_PRESETS[activeTheme].name.replace(/\s+/g, '-').toLowerCase();

      for (const icon of filteredIcons) {
        const svgContent = generateExportSVG(icon, activeTheme, colors);
        zip.file(`${icon.id}.svg`, svgContent);
      }

      const blob = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${themeName}-icons-${filteredIcons.length}.zip`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('ZIP creation failed:', err);
    } finally {
      setIsDownloadingAll(false);
    }
  };

  const copySVG = async (icon) => {
    const finalSvg = generateExportSVG(icon, activeTheme, colors);
    try {
      await navigator.clipboard.writeText(finalSvg);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  const getThemeIcon = (id) => {
    const iconMap = {
      'v1': <Box size={16} />,
      'v2': <Droplets size={16} />,
      'v3': <Heart size={16} />,
      'v4': <Cloud size={16} />,
      'v7': <Zap size={16} />,
      'v8': <Grid3X3 size={16} />,
      'v12': <Layers size={16} />,
      'v13': <Smartphone size={16} />,
      'v14': <Terminal size={16} />,
      'v17': <PenTool size={16} />,
      'v19': <Pill size={16} />,
      'v20': <PenTool size={16} />,
      'v24': <Crown size={16} />,
      'v28': <Heart size={16} />,
    };
    return iconMap[id] || <Sparkles size={16} />;
  };

  const currentPreset = THEME_PRESETS[activeTheme];

  return (
    <div className="h-screen bg-slate-50 text-slate-900 flex font-sans overflow-hidden">

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 w-10 h-10 rounded-xl bg-white shadow-lg border border-slate-200 flex items-center justify-center"
      >
        <Menu size={20} />
      </button>

      {/* LEFT SIDEBAR: Themes */}
      <aside className={`
        fixed lg:relative inset-y-0 left-0 z-40
        w-72 bg-white border-r border-slate-200 flex flex-col shadow-lg
        transform transition-transform duration-300 ease-in-out
        ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-5 border-b border-slate-100 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 to-fuchsia-500 flex items-center justify-center text-white shadow-lg shadow-violet-200">
            <Sparkles size={20} />
          </div>
          <div>
            <h1 className="text-lg font-bold text-slate-900 tracking-tight">Icon Engine</h1>
            <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Studio v2.0</p>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-3">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 block px-2">
            Art Engines ({Object.keys(THEME_PRESETS).length})
          </label>
          <div className="space-y-1">
            {Object.entries(THEME_PRESETS).map(([id, t]) => (
              <button
                key={id}
                onClick={() => handleThemeChange(id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 ${activeTheme === id
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'text-slate-600 hover:bg-slate-50'
                  }`}
              >
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${activeTheme === id ? 'bg-white/20' : 'bg-slate-100'}`}>
                  {getThemeIcon(id)}
                </div>
                <div className="text-left flex-1 min-w-0">
                  <div className="font-semibold text-sm truncate">{t.name}</div>
                  <div className="text-[9px] opacity-60 truncate">{t.description}</div>
                </div>
                {activeTheme === id && <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />}
              </button>
            ))}
          </div>
        </div>

        {/* Theme Preview */}
        <div className="p-4 border-t border-slate-100 bg-slate-50/50">
          <div className="flex gap-2 justify-center">
            {['phone', 'camera', 'games'].map(iconId => {
              const icon = ICONS.find(i => i.id === iconId);
              return icon && (
                <div key={iconId} className="w-10 h-10 rounded-lg bg-white shadow-sm border border-slate-100 flex items-center justify-center">
                  <ThemeIcon theme={activeTheme} icon={icon} colors={colors} size={28} showBackground={false} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Custom Icon Actions */}
        <div className="p-3 border-t border-slate-100">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block px-2">
            Custom Icons
          </label>
          <div className="flex gap-2">
            <button
              onClick={() => setDrawingModalOpen(true)}
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-sm font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              <Pencil size={14} />
              Create
            </button>
            <button
              onClick={() => setImportModalOpen(true)}
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-slate-100 text-slate-600 text-sm font-medium hover:bg-slate-200 transition-all"
            >
              <Upload size={14} />
              Import
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* MAIN AREA: Icon Grid */}
      <main className="flex-1 flex flex-col bg-slate-50/50 relative">
        {/* Header */}
        <header className="px-6 py-4 flex items-center gap-4 sticky top-0 bg-slate-50/95 backdrop-blur-md z-10 border-b border-slate-200/50">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search icons..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-violet-200 focus:border-violet-300 transition-all text-sm"
            />
          </div>

          {/* Category Chips */}
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${!selectedCategory
                ? 'bg-violet-600 text-white shadow-md'
                : 'bg-white text-slate-500 border border-slate-200 hover:bg-slate-50'
                }`}
            >
              All
            </button>
            {CATEGORIES.slice(0, 6).map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id === selectedCategory ? null : cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${selectedCategory === cat.id
                  ? 'bg-violet-600 text-white shadow-md'
                  : 'bg-white text-slate-500 border border-slate-200 hover:bg-slate-50'
                  }`}
              >
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>

          <div className="flex gap-2 items-center ml-auto">
            <span className="text-xs font-medium text-slate-500 bg-white px-3 py-1.5 rounded-lg border border-slate-200">
              {filteredIcons.length} icons
            </span>
            <button
              onClick={downloadAllZIP}
              disabled={isDownloadingAll}
              className="flex items-center gap-2 px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-xs font-semibold shadow-md transition-all disabled:opacity-50 disabled:cursor-wait"
            >
              <Package size={14} />
              {isDownloadingAll ? 'Creating ZIP...' : 'Download All'}
            </button>
          </div>
        </header>

        {/* Scrollable Grid */}
        <div className="flex-1 overflow-y-auto p-6">
          <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-3 md:gap-4">
            <AnimatePresence>
              {filteredIcons.map((icon) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -2 }}
                  key={icon.id}
                  onClick={() => setSelectedIcon(icon)}
                  className={`relative group aspect-square rounded-2xl cursor-pointer transition-all duration-200 flex flex-col items-center justify-center ${selectedIcon?.id === icon.id
                    ? 'bg-white ring-2 ring-violet-500 shadow-xl z-10'
                    : 'bg-white border border-slate-100 shadow-sm hover:shadow-lg hover:border-slate-200'
                    }`}
                >
                  {/* Favorite Button */}
                  <button
                    onClick={(e) => { e.stopPropagation(); toggleFavorite(icon.id); }}
                    className={`absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center transition-all ${favorites.includes(icon.id)
                      ? 'bg-pink-500 text-white'
                      : 'bg-slate-100 text-slate-400 opacity-0 group-hover:opacity-100'
                      }`}
                  >
                    <Heart size={12} fill={favorites.includes(icon.id) ? 'currentColor' : 'none'} />
                  </button>

                  <div className="w-12 h-12 flex items-center justify-center">
                    <ThemeIcon theme={activeTheme} icon={icon} colors={colors} size={48} showBackground={showBackground} />
                  </div>

                  {/* Always visible name */}
                  <span className="mt-2 text-[10px] font-semibold text-slate-500 truncate max-w-[90%]">
                    {icon.name}
                  </span>

                  {selectedIcon?.id === icon.id && (
                    <div className="absolute top-2 left-2 text-violet-500">
                      <Check size={14} strokeWidth={3} />
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

      {/* RIGHT SIDEBAR: Inspector */}
      <aside className="hidden lg:flex w-80 bg-white border-l border-slate-200 flex-col shadow-xl">
        {selectedIcon ? (
          <div className="flex flex-col h-full">
            {/* Close Button */}
            <button
              onClick={() => setSelectedIcon(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 z-10"
            >
              <X size={16} />
            </button>

            {/* Preview */}
            <div className="p-6 border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white">
              <div className="aspect-square bg-white rounded-2xl border border-slate-100 shadow-inner flex items-center justify-center mb-4 relative overflow-hidden">
                <div className="scale-[1.8]">
                  <ThemeIcon theme={activeTheme} icon={selectedIcon} colors={colors} size={80} showBackground={showBackground} />
                </div>
              </div>
              <h2 className="text-xl font-bold text-slate-800 text-center">{selectedIcon.name}</h2>
              <p className="text-center text-[10px] text-slate-400 uppercase tracking-widest font-semibold mt-1">
                {currentPreset.name} • {selectedIcon.category}
              </p>
            </div>

            {/* Controls */}
            <div className="flex-1 overflow-y-auto p-5 space-y-5">
              {/* Colors */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <Palette size={12} /> Colors
                </h3>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl">
                    <span className="text-xs font-medium text-slate-600">Primary</span>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-slate-400">{colors.primary}</span>
                      <div className="relative w-7 h-7 rounded-full overflow-hidden shadow-sm border border-slate-200">
                        <input type="color" value={colors.primary} onChange={(e) => setColors({ ...colors, primary: e.target.value })} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                        <div className="w-full h-full" style={{ backgroundColor: colors.primary }} />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl">
                    <span className="text-xs font-medium text-slate-600">Background</span>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-slate-400">{colors.bg}</span>
                      <div className="relative w-7 h-7 rounded-full overflow-hidden shadow-sm border border-slate-200">
                        <input type="color" value={colors.bg} onChange={(e) => setColors({ ...colors, bg: e.target.value })} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                        <div className="w-full h-full" style={{ backgroundColor: colors.bg }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Options */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <Layers size={12} /> Options
                </h3>
                <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl">
                  <span className="text-xs font-medium text-slate-600">Show Background</span>
                  <button
                    onClick={() => setShowBackground(!showBackground)}
                    className={`relative w-10 h-5 rounded-full transition-colors ${showBackground ? 'bg-violet-500' : 'bg-slate-300'}`}
                  >
                    <span className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${showBackground ? 'left-5' : 'left-0.5'}`} />
                  </button>
                </div>
              </div>

              {/* Quick Colors */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Quick Palettes</h3>
                <div className="flex gap-2 flex-wrap">
                  {[
                    { primary: '#000000', bg: '#ffffff' },
                    { primary: '#ffffff', bg: '#000000' },
                    { primary: '#ef4444', bg: '#fee2e2' },
                    { primary: '#3b82f6', bg: '#dbeafe' },
                    { primary: '#22c55e', bg: '#dcfce7' },
                    { primary: '#f59e0b', bg: '#fef3c7' },
                    { primary: '#8b5cf6', bg: '#ede9fe' },
                    { primary: '#ec4899', bg: '#fce7f3' },
                  ].map((palette, i) => (
                    <button
                      key={i}
                      onClick={() => setColors(palette)}
                      className="w-8 h-8 rounded-lg overflow-hidden border border-slate-200 hover:scale-110 transition-transform shadow-sm"
                    >
                      <div className="w-full h-1/2" style={{ backgroundColor: palette.bg }} />
                      <div className="w-full h-1/2" style={{ backgroundColor: palette.primary }} />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Export Actions */}
            <div className="p-5 border-t border-slate-100 bg-slate-50/50 space-y-2">
              <button
                onClick={() => downloadSVG(selectedIcon)}
                className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold text-sm shadow-md transition-all active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <Download size={16} /> Download SVG
              </button>
              <button
                onClick={() => copySVG(selectedIcon)}
                className="w-full py-3 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl font-semibold text-sm transition-all active:scale-[0.98] flex items-center justify-center gap-2"
              >
                {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                {copied ? 'Copied!' : 'Copy Code'}
              </button>
            </div>
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center p-8 text-center text-slate-400">
            <div className="w-20 h-20 mb-4 rounded-full bg-slate-100 flex items-center justify-center">
              <Eye size={28} className="opacity-30" />
            </div>
            <h3 className="text-base font-semibold text-slate-600">Inspector</h3>
            <p className="text-xs max-w-[180px] mt-2">Select an icon to customize and export.</p>
          </div>
        )}
      </aside>

      {/* Drawing Modal */}
      <DrawingModal
        isOpen={drawingModalOpen}
        onClose={() => setDrawingModalOpen(false)}
        onSave={(savedIcon) => {
          console.log('Icon saved:', savedIcon);
          setDrawingModalOpen(false);
        }}
      />

      {/* Import Modal */}
      <ImportModal
        isOpen={importModalOpen}
        onClose={() => setImportModalOpen(false)}
        onImport={(importedIcon) => {
          console.log('Icon imported:', importedIcon);
          setImportModalOpen(false);
        }}
      />
    </div>
  );
}

export default App;
