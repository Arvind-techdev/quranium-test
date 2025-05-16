'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const features = [
  {
    title: 'Interactive 3D Experience',
    description: 'Engage with our dynamic 3D scene that responds to your every movement and scroll.',
    icon: '🎮'
  },
  {
    title: 'Smooth Animations',
    description: 'Experience fluid transitions and animations that bring the interface to life.',
    icon: '✨'
  },
  {
    title: 'Responsive Design',
    description: 'Seamlessly adapts to any screen size while maintaining performance and visual quality.',
    icon: '📱'
  },
  {
    title: 'Dark Mode Support',
    description: 'Toggle between light and dark themes with smooth transitions and optimized visuals.',
    icon: '🌓'
  },
  {
    title: 'Performance Optimized',
    description: 'Built with performance in mind, ensuring smooth interactions even on mobile devices.',
    icon: '⚡'
  }
];

export default function ScrollEffectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const featuresY = useTransform(scrollYProgress, [0, 1], [200, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} className="scroll-effects-container bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black transition-colors duration-300">
      <motion.div 
        className="scroll-title"
        style={{ y: titleY, opacity }}
      >
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Discover More</h2>
        <p className="text-gray-600 dark:text-gray-300">Explore our features and see how they come to life</p>
      </motion.div>

      <motion.div 
        className="features-grid"
        style={{ y: featuresY, opacity }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="feature-card bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg dark:shadow-gray-900/20 transition-colors duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="feature-icon text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}