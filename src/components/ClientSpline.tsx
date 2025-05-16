'use client';

import { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

interface ClientSplineProps {
  splineUrl: string;
  className?: string;
  onAnimationTrigger?: boolean;
  resetKey?: string;
}

export default function ClientSpline({ splineUrl, className = '', onAnimationTrigger, resetKey }: ClientSplineProps) {
  const splineRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  useEffect(() => {
    if (splineRef.current && theme) {
      splineRef.current.setVariables({ red: theme === "dark" ? 100 : 0 });
    }
  }, [theme])

  useEffect(() => {
    if (splineRef.current && onAnimationTrigger) {
      try {
        splineRef.current.emitEvent('mouseDown', 'Cube');
      } catch (e) {
      }
    }
  }, [onAnimationTrigger]);

  useEffect(() => {
    if (splineRef.current && resetKey) {
      try {
        splineRef.current.setState('Base State');
      } catch (e) { }
    }
  }, [resetKey]);

  function logSplineObjects(obj: any) {
    if (obj.name) {
    }
    if (obj.children) {
      obj.children.forEach(logSplineObjects);
    }
  }

  const onLoad = (splineApp: any) => {
    splineRef.current = splineApp;

    if (splineApp && splineApp._scene) {
      logSplineObjects(splineApp._scene);
      splineRef.current.setVariables({ red: theme === "dark" ? 100 : 0 });
    }
  };

  return (
    <motion.div
      ref={containerRef}
      className={`relative ${className}`}
      style={{ scale }}
    >
      <Spline
        scene={splineUrl}
        onLoad={onLoad}
        style={{ width: '100%', height: '100%' }}
      />
    </motion.div>
  );
}