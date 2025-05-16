'use client';

import { useEffect, useState } from 'react';
import { useScroll, useTransform } from 'framer-motion';

interface UseScrollAnimationProps {
  startOffset?: number;
  endOffset?: number;
  inputRange?: [number, number];
  outputRange?: [number, number];
}

export function useScrollAnimation({
  startOffset = 0,
  endOffset = 1000,
  inputRange = [0, 1000],
  outputRange = [0, 1],
}: UseScrollAnimationProps = {}) {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  const progress = useTransform(scrollY, inputRange, outputRange);
  const opacity = useTransform(scrollY, inputRange, [0, 1]);
  const scale = useTransform(scrollY, inputRange, [0.8, 1]);
  const y = useTransform(scrollY, inputRange, [100, 0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > startOffset && scrollPosition < endOffset);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [startOffset, endOffset]);

  return {
    progress,
    opacity,
    scale,
    y,
    isVisible,
  };
} 