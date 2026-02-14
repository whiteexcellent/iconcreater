'use client';

import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Button } from '@/components/ui/button';
import { ReactNode } from 'react';

interface ConfettiButtonProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export function ConfettiButton({ children, onClick, disabled, className }: ConfettiButtonProps) {
  const handleClick = () => {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      
      confetti({
        ...defaults, 
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#0ea5e9', '#f97316', '#10b981', '#f59e0b']
      });
      confetti({
        ...defaults, 
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#0ea5e9', '#f97316', '#10b981', '#f59e0b']
      });
    }, 250);

    onClick?.();
  };

  return (
    <motion.div
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
    >
      <Button 
        onClick={handleClick} 
        disabled={disabled}
        className={`bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white font-bold text-lg px-8 py-6 ${className}`}
      >
        {children}
      </Button>
    </motion.div>
  );
}
