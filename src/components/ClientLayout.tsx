'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Loading } from './Loading/Loading';
import Navbar from './Navbar';
import { motion } from 'framer-motion';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Return a simple div during SSR and initial mount
  if (!mounted) {
    return (
      <div className="min-h-screen bg-white dark:bg-black">
        <Loading />
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <motion.div
            key={pathname}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
} 