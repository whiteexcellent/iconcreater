'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const funnyMessages = [
  "AI sanatçımız kahve molasında... ☕",
  "Pikseller dans ediyor... 💃",
  "Binlerce ikon arasından seçiyoruz... 🎨",
  "Kedi resmi mi dediniz? Hemen yapıyoruz! 🐱",
  "Bir dakika, kafamdaki ampul yanıyor... 💡",
  "Rengarenk şeyler oluyor... 🌈",
  "Sihirli değnek hazırlanıyor... ✨",
  "Hamur yoğuruluyor... 🍞",
  "Sanal fırında pişiyor... 🔥",
  "Son dokunuşlar yapılıyor... ✨",
];

const mascots = ['🤖', '👽', '🥷', '🐱', '🧙‍♂️'];

export function FunnyLoader({ progress }: { progress: number }) {
  const [messageIndex, setMessageIndex] = useState(0);
  const [mascotIndex, setMascotIndex] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % funnyMessages.length);
      setMascotIndex((prev) => (prev + 1) % mascots.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 42) {
      setShowEasterEgg(true);
      setTimeout(() => setShowEasterEgg(false), 4000);
    }
  }, [progress]);

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-slate-800 rounded-2xl border border-primary-500/20 relative overflow-hidden">
      <AnimatePresence>
        {showEasterEgg && (
          <motion.div
            initial={{ opacity: 0, scale: 0, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0 }}
            className="absolute top-4 bg-gradient-to-r from-accent-500 to-red-500 text-white px-6 py-3 rounded-full font-bold shadow-lg z-20"
          >
            🎉 42! Yaşamın anlamı! 
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="text-8xl mb-6"
        animate={{
          y: [0, -20, 0],
          rotate: [0, -10, 10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {mascots[mascotIndex]}
      </motion.div>

      <motion.p
        key={messageIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="text-lg text-slate-300 mb-6 text-center min-h-[3.5rem] max-w-md"
      >
        {funnyMessages[messageIndex]}
      </motion.p>

      <div className="w-72 h-4 bg-slate-700 rounded-full overflow-hidden relative">
        <motion.div
          className="h-full bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="absolute top-0 h-full w-20 bg-gradient-to-r from-transparent via-white/40 to-transparent"
          animate={{ left: ['-20%', '120%'] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <p className="mt-3 text-sm text-slate-400 font-mono">{progress}%</p>

      {progress > 80 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 flex gap-2"
        >
          {['✨', '🎨', '🚀', '💎'].map((emoji, i) => (
            <motion.span
              key={i}
              animate={{ y: [0, -10, 0], rotate: [0, 360] }}
              transition={{ duration: 1, delay: i * 0.2, repeat: Infinity }}
              className="text-2xl"
            >
              {emoji}
            </motion.span>
          ))}
        </motion.div>
      )}
    </div>
  );
}
