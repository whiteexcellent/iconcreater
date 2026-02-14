import { Variants } from 'framer-motion';

export const easings = {
  bounce: [0.68, -0.55, 0.265, 1.55],
  smooth: [0.4, 0, 0.2, 1],
  snappy: [0.25, 0.1, 0.25, 1]
};

export const durations = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.8
};

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 40 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: durations.normal, ease: easings.smooth }
  }
};

export const fadeInDown: Variants = {
  initial: { opacity: 0, y: -40 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: durations.normal, ease: easings.smooth }
  }
};

export const scaleUp: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: durations.normal, ease: easings.bounce }
  }
};

export const staggerContainer: Variants = {
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

export const staggerItem: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: durations.normal, ease: easings.smooth }
  }
};

export const funnyBounce: Variants = {
  animate: {
    y: [0, -30, 0],
    scale: [1, 1.1, 1],
    transition: { duration: 0.8, ease: easings.bounce, repeat: Infinity, repeatDelay: 2 }
  }
};

export const funnyWiggle: Variants = {
  animate: {
    x: [0, -5, 5, -5, 5, 0],
    rotate: [0, -5, 5, -5, 5, 0],
    transition: { duration: 0.6, ease: easings.bounce }
  }
};
