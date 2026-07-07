'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import StaggeredLetterReveal from './StaggeredLetterReveal';

export default function HeroSection() {
  const handleScroll = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative w-full overflow-hidden">
      {/* Ganzes Foto randlos in voller Breite – Bäume oben, Logo/Banner
          unten komplett sichtbar. Die Bildhöhe bestimmt die Sektionshöhe. */}
      <img
        src="/hero-team.jpg"
        alt="Mannschaft des FC Lahr-West 1975 e.V."
        className="block w-full h-auto"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 mt-8">
        <StaggeredLetterReveal
          text="FC Lahr-West 1975"
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 text-balance drop-shadow-lg"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-12 font-medium drop-shadow-md"
        >
          Leidenschaft. Teamgeist. Heimat.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98] text-lg px-8 shadow-lg"
          >
            <Link href="/teams">Jetzt Beitreten</Link>
          </Button>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => handleScroll('#contact')}
            className="bg-white text-foreground hover:bg-gray-100 transition-all duration-200 active:scale-[0.98] text-lg px-8 shadow-lg"
          >
            Kontakt
          </Button>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 cursor-pointer"
        onClick={() => handleScroll('#about')}
      >
        <ChevronDown className="h-8 w-8 text-white drop-shadow-md" />
      </motion.div>
    </section>
  );
}
