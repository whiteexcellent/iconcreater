import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { THEMES, FIVEM_APPS } from './data/icons';
import { Gallery } from './components/gallery/Gallery';
import { Sidebar } from './components/layout/Sidebar';

function App() {
  const [activeTheme, setActiveTheme] = useState(THEMES[0]);

  return (
    <div className="flex h-screen w-screen bg-[#020202] text-white overflow-hidden font-sans relative">

      {/* Dynamic Ambient Background Orbs - EXTREME ANIMATION LOGIC */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`orb-1-${activeTheme.id}`}
          initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
          animate={{
            opacity: [0.10, 0.20, 0.10],
            scale: [1, 1.15, 1],
            rotate: [0, 90, 180, 270, 360],
            x: [0, 50, 0, -50, 0],
            y: [0, -30, 0, 30, 0]
          }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{
            opacity: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 12, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 45, repeat: Infinity, ease: "linear" },
            x: { duration: 15, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 20, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-[100px] blur-[120px] pointer-events-none"
          style={{ backgroundColor: activeTheme.colors.accent || activeTheme.colors.primary }}
        />
        <motion.div
          key={`orb-2-${activeTheme.id}`}
          initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
          animate={{
            opacity: [0.05, 0.15, 0.05],
            scale: [1, 1.2, 1],
            rotate: [360, 270, 180, 90, 0],
            x: [0, -40, 0, 40, 0],
            y: [0, 40, 0, -40, 0]
          }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{
            opacity: { duration: 10, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 15, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 60, repeat: Infinity, ease: "linear" },
            x: { duration: 20, repeat: Infinity, ease: "easeInOut", delay: 1 },
            y: { duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }
          }}
          className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-[80px] blur-[100px] pointer-events-none"
          style={{ backgroundColor: activeTheme.colors.primary }}
        />
      </AnimatePresence>

      {/* Full-bleed Spatial Shell */}
      <div className="w-full h-full flex relative z-10 bg-white/[0.01] backdrop-blur-2xl border-white/5">

        {/* Sidebar for Themes */}
        <Sidebar
          themes={THEMES}
          activeTheme={activeTheme}
          onSelectTheme={setActiveTheme}
        />

        {/* Main Gallery Area */}
        <main className="flex-1 overflow-y-auto relative z-10 scrollbar-hide py-16 px-12 lg:px-24">
          <div className="max-w-screen-2xl mx-auto relative z-10">
            <header className="mb-20 relative z-20">
              <motion.h1
                key={`title-${activeTheme.id}`}
                initial={{ opacity: 0, y: -30, filter: "blur(20px)" }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  textShadow: [`0px 0px 0px ${activeTheme.colors.accent}`, `0px 0px 30px ${activeTheme.colors.accent}`, `0px 0px 0px ${activeTheme.colors.accent}`]
                }}
                transition={{
                  duration: 0.8,
                  ease: "backOut",
                  textShadow: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }
                }}
                className="text-6xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60 drop-shadow-xl"
              >
                {activeTheme.name}
              </motion.h1>
              <motion.p
                key={`desc-${activeTheme.id}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                className="text-white/50 text-xl max-w-2xl font-medium tracking-wide leading-relaxed"
              >
                {activeTheme.description}
              </motion.p>

              {/* Animated underline decorative element */}
              <motion.div
                key={`line-${activeTheme.id}`}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: 0.6, duration: 1, ease: "easeInOut" }}
                className="h-1 w-32 mt-8 rounded-full origin-left"
                style={{
                  backgroundColor: activeTheme.colors.accent,
                  boxShadow: `0 0 20px ${activeTheme.colors.accent}`
                }}
              />
            </header>

            <Gallery theme={activeTheme} apps={FIVEM_APPS} />
          </div>
        </main>

      </div >
    </div >
  );
}

export default App;
