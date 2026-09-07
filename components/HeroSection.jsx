'use client';

import { useCallback, useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import StaggeredLetterReveal from './StaggeredLetterReveal';

const slides = [
  {
    src: '/hero-team.jpg',
    alt: 'Die Mannschaften des FC Lahr-West 1975 e.V. auf dem Sportplatz',
  },
  {
    src: '/team-1-herren.jpg',
    alt: 'Mannschaftsfoto der 1. Herren des FC Lahr-West 1975 e.V.',
  },
  {
    src: '/team-2-herren-2026.jpg',
    alt: 'Mannschaftsfoto der 2. Herren des FC Lahr-West 1975 e.V.',
  },
  {
    src: '/team-2-kreis-2026.jpg',
    alt: 'Die 2. Herren des FC Lahr-West 1975 e.V. im Mannschaftskreis vor dem Anpfiff',
  },
];

const SLIDE_DURATION = 6000;

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  const goTo = useCallback((next) => {
    setIndex((current) => (next + slides.length) % slides.length);
  }, []);

  // Der Timer hängt am index: Blättert jemand von Hand weiter, beginnt die
  // Wartezeit für das nächste Bild von vorn, statt sofort umzuspringen.
  useEffect(() => {
    if (paused || reduceMotion || slides.length < 2) return undefined;
    const id = setTimeout(() => goTo(index + 1), SLIDE_DURATION);
    return () => clearTimeout(id);
  }, [index, paused, reduceMotion, goTo]);

  const handleScroll = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      // Früher bestimmte die Höhe des einen Fotos die Höhe der Sektion. Bei
      // mehreren Motiven mit leicht unterschiedlichen Kantenlängen würde die
      // Seite bei jedem Wechsel springen, deshalb gibt jetzt das Verhältnis des
      // ursprünglichen Hero-Fotos (1448x1014) den Rahmen vor – die Sektion ist
      // damit exakt so hoch wie zuvor.
      className="relative w-full overflow-hidden aspect-[1448/1014]"
      aria-roledescription="Bildergalerie"
      aria-label="Mannschaften des FC Lahr-West"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {slides.map((slide, i) => (
        <motion.img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          aria-hidden={i !== index}
          className="absolute inset-0 h-full w-full object-cover"
          initial={false}
          animate={{ opacity: i === index ? 1 : 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.9, ease: 'easeInOut' }}
          loading={i === 0 ? 'eager' : 'lazy'}
        />
      ))}

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

      {/* Auf dem Handy ist der Hero nur gut 250 px hoch – dort würden die Pfeile
          mitten im Titel sitzen. Deshalb erst ab sm, darunter führen die Punkte
          und der automatische Wechsel durch die Bilder. */}
      <button
        type="button"
        onClick={() => goTo(index - 1)}
        aria-label="Vorheriges Bild"
        className="absolute left-4 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur-sm transition-colors hover:bg-black/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:flex"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        type="button"
        onClick={() => goTo(index + 1)}
        aria-label="Nächstes Bild"
        className="absolute right-4 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur-sm transition-colors hover:bg-black/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:flex"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Rechts unten statt mittig: In der Mitte sitzt bereits der Pfeil, der
          zum nächsten Abschnitt scrollt. */}
      <div className="absolute bottom-6 right-6 z-20 flex gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Bild ${i + 1} von ${slides.length}`}
            aria-current={i === index}
            className={`h-2.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
              i === index ? 'w-6 bg-white' : 'w-2.5 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
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
