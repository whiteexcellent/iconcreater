import { motion } from 'framer-motion';
import { Paintbrush, Settings2, DownloadCloud } from 'lucide-react';

export function BentoGrid() {
    return (
        <section id="features" className="py-24 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white/90 mb-5">
                    Architectural Excellence
                </h2>
                <p className="text-white/40 text-lg md:text-xl font-medium tracking-wide max-w-2xl mx-auto">
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
                    className="md:col-span-2 md:row-span-2 bg-[#050505] border border-white/5 rounded-3xl p-8 md:p-12 relative overflow-hidden group flex flex-col justify-end hover:bg-white/[0.02] hover:border-white/10 transition-all duration-500"
                >
                    <div className="relative z-10 w-full max-w-lg">
                        <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center mb-8 group-hover:bg-white/10 group-hover:scale-105 transition-all duration-500">
                            <Paintbrush className="w-5 h-5 text-white/70" />
                        </div>
                        <h3 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white/90 mb-4">AI-Driven Art Engines</h3>
                        <p className="text-white/40 text-lg leading-relaxed font-medium">
                            Switch between totally distinct rendering pipelines instantly. Experience the precision of Vision OS glassmorphism or the stark contrast of Brutalism.
                        </p>
                    </div>
                </motion.div>

                {/* Smaller top right card */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-[#050505] border border-white/5 rounded-3xl p-8 relative overflow-hidden group hover:bg-white/[0.02] hover:border-white/10 transition-all duration-500"
                >
                    <div className="relative z-10 h-full flex flex-col justify-between">
                        <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 group-hover:scale-105 transition-all duration-500">
                            <Settings2 className="w-4 h-4 text-white/70" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold tracking-tight text-white/90 mb-3">Real-time Override</h3>
                            <p className="text-white/40 text-sm leading-relaxed font-medium">
                                Finetune glass blurs, border radiuses, and stroke widths instantly via the precision Engine Builder.
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
                    className="bg-[#050505] border border-white/5 rounded-3xl p-8 relative overflow-hidden group hover:bg-white/[0.02] hover:border-white/10 transition-all duration-500"
                >
                    <div className="relative z-10 h-full flex flex-col justify-between">
                        <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 group-hover:scale-105 transition-all duration-500">
                            <DownloadCloud className="w-4 h-4 text-white/70" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold tracking-tight text-white/90 mb-3">Batch Export</h3>
                            <p className="text-white/40 text-sm leading-relaxed font-medium">
                                Compile and download all 33 variants simultaneously in a clean Zip package without friction.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
