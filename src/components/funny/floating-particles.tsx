'use client';

import { motion } from 'framer-motion';
import { useAnimationStore } from '@/stores/animation-store';

export function FloatingParticles() {
  const { particlesEnabled } = useAnimationStore();
  
  if (!particlesEnabled) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
        >
          {['✨', '🎯', '🚀', '💎', '🔥', '⚡', '🎨', '💡'][i % 8]}
        </motion.div>
      ))}
    </div>
  );
}
