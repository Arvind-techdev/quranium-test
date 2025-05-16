'use client';

import ScrollEffectsSection from '../components/ScrollEffectsSection';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <Hero />
      <ScrollEffectsSection />
    </main>
  );
} 