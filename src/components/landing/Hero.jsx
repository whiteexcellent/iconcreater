import { motion } from 'framer-motion';

export function Hero({ onLaunch }) {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 md:px-8">
            {/* Ambient Animated Background (Aurora) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        opacity: [0.1, 0.3, 0.1]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full blur-[120px] bg-purple-600/30"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.5, 1],
                        rotate: [0, -90, 0],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full blur-[120px] bg-blue-600/20"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto mt-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs md:text-sm font-medium tracking-wide mb-8 backdrop-blur-md">
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        Introducing Premium SVG Studio
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white/90 to-white/30 drop-shadow-2xl leading-[1.1] mb-6">
                        Design vectors at <br className="hidden md:block" /> the speed of thought.
                    </h1>
                    <p className="text-lg md:text-2xl text-white/40 font-medium tracking-wide max-w-3xl mx-auto mb-10 leading-relaxed">
                        A next-generation icon engine for FiveM developers. Generate, customize, and batch export 33+ premium SVG interfaces instantly.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col sm:flex-row items-center gap-4"
                >
                    <button
                        onClick={onLaunch}
                        className="group relative px-8 py-4 bg-white text-black font-bold tracking-wide rounded-full overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_80px_rgba(255,255,255,0.5)] transition-all duration-500 hover:scale-105 active:scale-95"
                    >
                        <span className="relative z-10">Launch Studio</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-200 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </button>
                    <a
                        href="#features"
                        className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-medium tracking-wide rounded-full border border-white/10 transition-all duration-300 backdrop-blur-md"
                    >
                        Explore Engines
                    </a>
                </motion.div>
            </div>

            {/* 3D Floating Mockup Placeholder */}
            {/* We will add 3D drifting icons here later via a separate floating component */}
        </section>
    );
}
