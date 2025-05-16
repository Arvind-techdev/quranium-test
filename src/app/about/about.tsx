import { motion } from 'framer-motion';

export const AboutPage = () => {
  return (
    <main className="min-h-screen pt-40 px-4 bg-white dark:bg-black transition-colors duration-300 scroll-effects-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto mt-28"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-300 bg-clip-text text-transparent">
          Welcome to Quranium,
          Home to the Uncrackable
          Digital Future
        </h1>

        <div className="space-y-6 text-lg text-gray-800 dark:text-gray-200">
          <p>
            Founded in early 2024 by Web3 visionaries from top tech and consulting firms, Quranium is here with a mission that matters: to be the unbreakable foundation in a fast-evolving digital world. Our 120+ experts from across the globe—from Switzerland to Singapore, California to Dubai—share one vision: making the digital world accessible, secure, and a trusted space where innovation thrives.
          </p>

          <p>
            Quranium isn’t just a platform; it’s a movement. And it’s built for you.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">Key Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Interactive 3D animations powered by Spline</li>
            <li>Responsive design that works on all devices</li>
            <li>Smooth page transitions and animations</li>
            <li>Dark mode support</li>
            <li>Modern UI with glassmorphism effects</li>
          </ul>
        </div>
      </motion.div>
    </main>
  );
};