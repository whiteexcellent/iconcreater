import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Hero } from './Hero';
import { BentoGrid } from './BentoGrid';
import { ThemeMarquee } from './ThemeMarquee';

export function LandingPage({ onLaunch }) {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-[#020202] text-white selection:bg-white/30 font-sans"
        >
            <main>
                <Hero onLaunch={onLaunch} />
                <BentoGrid />
                <ThemeMarquee />

                {/* Minimal Footer */}
                <footer className="py-12 border-t border-white/5 mt-20 text-center">
                    <p className="text-white/30 text-sm font-medium tracking-wide">
                        Crafted for the FiveM Community. Experience the Next-Gen UI.
                    </p>
                </footer>
            </main>
        </motion.div>
    );
}
