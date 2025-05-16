'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
}

export function AnimatedButton({
  children,
  onClick,
  className = '',
  variant = 'primary',
}: AnimatedButtonProps) {
  const baseStyles = 'px-8 py-3 rounded-full text-lg font-semibold transition-colors relative overflow-hidden';
  const variantStyles = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white',
  };

  return (
    <motion.button
      className={`${baseStyles} ${variantStyles[variant]} ${className} ripple`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
      <span className="absolute inset-0 bg-white opacity-0 hover:opacity-20 transition-opacity" />
    </motion.button>
  );
} 