'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const tiles = [
  {
    src: '/team-1-herren.jpg',
    alt: 'Mannschaftsfoto der 1. Herren des FC Lahr-West 1975 e.V.',
    label: '1. Herren',
    className: 'col-span-2 row-span-2',
  },
  {
    src: '/team-2-herren-2026.jpg',
    alt: 'Mannschaftsfoto der 2. Herren des FC Lahr-West 1975 e.V.',
    label: '2. Herren',
    className: '',
  },
  {
    src: '/vereinsheim-kiosk-2026.jpg',
    alt: 'Vereinsheim-Kiosk am Sportplatz Lahr-West',
    label: 'Vereinsheim',
    className: '',
  },
];

// Variante 3 – „Vereinsheft“: Heller Einstieg mit Wappen und Mosaik. Die
// 1. Herren stehen groß im Mittelpunkt, daneben zeigen kleinere Kacheln,
// dass der Verein mehr ist als eine Mannschaft.
export default function HeroMosaic() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="hero" className="relative w-full overflow-hidden bg-white pt-16 md:pt-20">
      {/* Trikotstreifen als schmales Band am oberen Rand. */}
      <div
        aria-hidden
        className="h-5 w-full"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, hsl(var(--primary)) 0 24px, #fff 24px 48px)',
        }}
      />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-8 sm:px-6 sm:py-12 lg:grid-cols-[4fr_6fr] lg:gap-14 lg:px-8 lg:py-20">
        <motion.div
          className="order-2 lg:order-1"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h1 className="text-4xl font-extrabold leading-tight text-foreground sm:text-5xl xl:text-6xl">
            Fußball in <span className="whitespace-nowrap">Lahr-West.</span>
            <span className="block text-primary">Seit 1975.</span>
          </h1>
          <p className="mt-5 max-w-md text-lg text-muted-foreground">
            Zwei Herrenmannschaften, rund 100 Mitglieder und ein Vereinsheim, in dem nach dem
            Abpfiff noch lange zusammengesessen wird.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              asChild
              className="bg-primary px-8 text-lg text-primary-foreground shadow-lg transition-all duration-200 hover:bg-primary/90 active:scale-[0.98]"
            >
              <Link href="/mitglied-werden">Mitglied werden</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="px-8 text-lg transition-all duration-200 active:scale-[0.98]"
            >
              <Link href="/#contact">Kontakt</Link>
            </Button>
          </div>
        </motion.div>

        <div className="order-1 grid aspect-[4/3] grid-cols-3 lg:order-2 grid-rows-2 gap-3 sm:gap-4">
          {tiles.map((tile, i) => (
            <motion.figure
              key={tile.src}
              initial={reduceMotion ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.15, duration: 0.6, ease: 'easeOut' }}
              className={`group relative overflow-hidden rounded-2xl bg-muted ${tile.className}`}
            >
              <img
                src={tile.src}
                alt={tile.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading={i === 0 ? 'eager' : 'lazy'}
              />
              <figcaption className="absolute bottom-2 left-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-foreground shadow sm:bottom-3 sm:left-3 sm:text-sm">
                {tile.label}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
