import { motion } from 'framer-motion';

export function BentoGrid() {
    return (
        <section id="features" className="py-24 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-4">
                    Architectural Excellence
                </h2>
                <p className="text-white/40 text-lg max-w-2xl mx-auto">
                    A suite of professional tools designed to perfectly match any server aesthetic.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-none md:grid-rows-2 gap-4 md:gap-6 md:h-[600px]">
                {/* Large Featured Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="md:col-span-2 md:row-span-2 bg-[#050505] border border-white/10 rounded-3xl p-8 relative overflow-hidden group flex flex-col justify-end"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10">
                        <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                            <span className="text-2xl">🎨</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">AI-Driven Art Engines</h3>
                        <p className="text-white/50 max-w-md leading-relaxed">
                            Switch between completely distinct rendering pipelines instantly. From Liquid Chrome and Vision OS glassmorphism to 80s Synthwave and Carbon Tactical HUDs.
                        </p>
                    </div>
                    {/* Placeholder for mockups */}
                    <div className="absolute top-8 right-8 w-64 h-64 bg-white/5 rounded-2xl border border-white/10 shadow-2xl skew-x-[-10deg] skew-y-[10deg] opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                </motion.div>

                {/* Smaller top right card */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-[#050505] border border-white/10 rounded-3xl p-8 relative overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10 h-full flex flex-col justify-between">
                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                            <span className="text-xl">🎛️</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">Real-time Override</h3>
                            <p className="text-white/50 text-sm leading-relaxed">
                                Finetune glass blurs, border radiuses, and stroke widths instantly via the Engine Builder.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Smaller bottom right card */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-[#050505] border border-white/10 rounded-3xl p-8 relative overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10 h-full flex flex-col justify-between">
                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                            <span className="text-xl">⚡</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">Batch Export</h3>
                            <p className="text-white/50 text-sm leading-relaxed">
                                Don't waste time downloading icons one by one. Zip all 33 variants instantly with one click.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
