import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FIVEM_APPS, THEMES } from './data/icons';
import { Gallery } from './components/gallery/Gallery';
import { Sidebar } from './components/layout/Sidebar';
import { useTheme } from './context/ThemeContext';
import { EngineBuilder } from './components/studio/EngineBuilder';

function App() {
  const { activeTheme } = useTheme();

  return (
    <div className="flex h-screen w-screen bg-[#020202] text-white overflow-hidden font-sans relative">

      {/* Dynamic Ambient Background Orbs */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`orb-1-${activeTheme.id}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-[100px] blur-[120px] pointer-events-none"
          style={{ backgroundColor: activeTheme.colors.accent || activeTheme.colors.primary }}
        />
        <motion.div
          key={`orb-2-${activeTheme.id}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.08, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
          className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-[80px] blur-[100px] pointer-events-none"
          style={{ backgroundColor: activeTheme.colors.primary }}
        />
      </AnimatePresence>

      {/* Full-bleed Spatial Shell */}
      <div className="w-full h-full flex flex-col md:flex-row relative z-10 bg-white/[0.01] backdrop-blur-2xl border-[0px] md:border-white/5">

        {/* Sidebar for Themes */}
        <Sidebar themes={THEMES} />

        {/* Main Gallery Area */}
        <main className="flex-1 overflow-y-auto relative z-10 scrollbar-hide pt-6 pb-24 md:py-16 px-4 md:px-12 lg:px-24">
          <div className="max-w-screen-2xl mx-auto relative z-10">
            <header className="mb-10 md:mb-20 relative z-20 flex flex-col items-center md:items-start text-center md:text-left">
              <motion.h1
                key={`title-${activeTheme.id}`}
                initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  textShadow: `0px 0px 15px ${activeTheme.colors.accent}`
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut"
                }}
                className="text-3xl md:text-6xl font-black tracking-tighter mb-4 md:mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60 drop-shadow-xl"
              >
                {activeTheme.name}
              </motion.h1>
              <motion.p
                key={`desc-${activeTheme.id}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                className="text-white/50 text-base md:text-xl max-w-2xl font-medium tracking-wide leading-relaxed"
              >
                {activeTheme.description}
              </motion.p>

              {/* Animated underline decorative element */}
              <motion.div
                key={`line-${activeTheme.id}`}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: 0.6, duration: 1, ease: "easeInOut" }}
                className="h-1 w-24 md:w-32 mt-6 md:mt-8 rounded-full origin-center md:origin-left"
                style={{
                  backgroundColor: activeTheme.colors.accent,
                  boxShadow: `0 0 20px ${activeTheme.colors.accent}`
                }}
              />
            </header>

            <Gallery theme={activeTheme} apps={FIVEM_APPS} />
          </div>
        </main>

        <EngineBuilder />

      </div >
    </div >
  );
}

export default App;
