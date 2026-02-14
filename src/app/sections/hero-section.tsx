'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-sm font-medium mb-6">
            ✨ AI-Powered Icon Generator
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 bg-clip-text text-transparent">
            Icon Generator
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Yapay zeka ile{' '}
          <span className="text-accent-400 font-bold">saniyeler içinde</span>{' '}
          profesyonel ikonlar oluştur! 🎨
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/generate">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white px-8 py-6 text-lg font-bold group"
              >
                <Sparkles className="mr-2 h-5 w-5 group-hover:animate-spin" />
                Hemen Başla
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </Link>
          
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-6xl mt-4 sm:mt-0"
          >
            🚀
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 flex justify-center gap-8 text-slate-400"
        >
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-primary-400">20+</span>
            <span className="text-sm">Icon Types</span>
          </div>
          <div className="w-px h-12 bg-slate-700" />
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-accent-400">5</span>
            <span className="text-sm">Themes</span>
          </div>
          <div className="w-px h-12 bg-slate-700" />
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-success-500">%100</span>
            <span className="text-sm">Free</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-slate-500 text-sm flex flex-col items-center gap-2"
        >
          <span>Aşağı kaydır</span>
          <span className="text-2xl">👇</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
