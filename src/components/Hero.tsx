'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import ClientSpline from './ClientSpline';
import { RippleButton } from './RippleButton';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const pathname = usePathname();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const handleButtonClick = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  return (
    <div ref={containerRef} className="relative lg:min-h-screen mt-[90px] md:mt-0 lg:mt-0 md:flex lg:flex block items-center justify-between px-4 md:px-8 lg:px-16 overflow-hidden ">
      {/* Left Content */}
      <motion.div
        className="flex-1 max-w-2xl z-10 pb-10 mr-14"
        style={{ opacity, y }}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-300 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Your Crypto is
          not safe!
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Quantum computing - once a sci-fi dream - is now on our doorstep, bringing immense power and profound risks.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <RippleButton onClick={handleButtonClick} />
        </motion.div>
      </motion.div>

      {/* Right Spline Scene */}
      <motion.div
        className="flex-1 h-[400px] md:h-[600px] lg:h-[600px] relative max-w-3xl"
        style={{ scale }}
      >
        <ClientSpline
          splineUrl="https://prod.spline.design/G-PJ89xpKucP4yik/scene.splinecode"
          className="w-full h-full"
          onAnimationTrigger={isAnimating}
          resetKey={pathname}
        />
      </motion.div>
    </div>
  );
} 