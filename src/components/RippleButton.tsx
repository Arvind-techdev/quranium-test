'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface RippleButtonProps {
  onClick?: () => void;
}

export function RippleButton({ onClick }: RippleButtonProps) {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple = {
      x,
      y,
      id: Date.now(),
    };

    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
    }, 1000);

    if (onClick) {
      onClick();
    }
    };

  return (
    <motion.button
      className="relative px-8 py-4 text-lg bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-500 dark:to-blue-400 text-white rounded-full cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105"
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Get Started
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          className="absolute rounded-full bg-white/30"
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 1 }}
          style={{
            left: ripple.x,
            top: ripple.y,
            width: '100px',
            height: '100px',
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </motion.button>
  );
} 