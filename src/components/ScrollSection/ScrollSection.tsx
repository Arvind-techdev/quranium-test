import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useSplineAnimation } from '@/hooks/useSplineAnimation';

export function ScrollSection() {
  const { progress, opacity, scale, y } = useScrollAnimation({
    startOffset: 0,
    endOffset: 1000,
  });

  const { scaleObject } = useSplineAnimation({
    objectName: 'Cube',
  });

  const handleScroll = () => {
    const newScale = 1 + progress.get() * 0.5;
    scaleObject(newScale);
  };

  return (
    <section className="min-h-screen relative">
      <motion.div 
        className="sticky top-0 h-screen flex items-center justify-center"
        style={{ scale }}
      >
        <div className="text-center">
          <motion.h2 
            className="text-4xl font-bold mb-4"
            style={{ opacity, y }}
          >
            Scroll to Explore
          </motion.h2>
          
          <motion.p 
            className="text-xl"
            style={{ opacity, y }}
          >
            Watch the 3D object transform as you scroll
          </motion.p>
        </div>
      </motion.div>

      {/* Parallax Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500 rounded-full"
          style={{
            x: progress.get() * 100,
            y: progress.get() * -50,
            opacity: progress.get(),
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-purple-500 rounded-full"
          style={{
            x: progress.get() * -100,
            y: progress.get() * 50,
            opacity: progress.get(),
          }}
        />
      </div>
    </section>
  );
} 