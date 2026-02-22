import { useState, useRef, useCallback } from 'react';
import { useSpring, useTransform } from 'framer-motion';

export function useMouseTilt(config = { intensity: 15, spring: { stiffness: 400, damping: 30 } }) {
    const ref = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    // Spring configuration for buttery smooth follow-through
    const x = useSpring(0, config.spring);
    const y = useSpring(0, config.spring);

    // Map the relative pixel coordinates to degrees of rotation
    const rotateX = useTransform(y, [-0.5, 0.5], [config.intensity, -config.intensity]);
    const rotateY = useTransform(x, [-0.5, 0.5], [-config.intensity, config.intensity]);

    const handleMouseMove = useCallback((e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();

        // Calculate mouse position relative to the element's center (from -0.5 to 0.5)
        const relX = (e.clientX - rect.left) / rect.width - 0.5;
        const relY = (e.clientY - rect.top) / rect.height - 0.5;

        x.set(relX);
        y.set(relY);
    }, [x, y]);

    const handleMouseEnter = useCallback(() => {
        setIsHovered(true);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setIsHovered(false);
        // Reset to flat when mouse leaves
        x.set(0);
        y.set(0);
    }, [x, y]);

    return {
        ref,
        isHovered,
        handleMouseMove,
        handleMouseEnter,
        handleMouseLeave,
        rotateX,
        rotateY
    };
}
