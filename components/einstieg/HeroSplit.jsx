'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const facts = [
  { value: '1975', label: 'gegründet' },
  { value: '2', label: 'Herrenteams' },
  { value: '100+', label: 'Mitglieder' },
];

// Variante 1 – „Split“: Text und Foto nebeneinander. Das Mannschaftsfoto wird
// nicht von Schrift überlagert, jeder Spieler bleibt erkennbar.
export default function HeroSplit() {
  const reduceMotion = useReducedMotion();
  const fade = (delay) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.6, ease: 'easeOut' },
  });

  return (
    <section
      id="hero"
      className="relative grid w-full overflow-hidden bg-neutral-950 pt-16 md:pt-20 lg:min-h-[100svh] lg:grid-cols-[5fr_7fr]"
    >
      {/* Die rot-weißen Trikotstreifen als dezentes Muster hinter dem Text. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-full opacity-[0.04] lg:w-5/12"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, #fff 0 28px, transparent 28px 56px)',
        }}
      />

      <div className="relative z-10 order-2 flex flex-col justify-center px-6 py-12 sm:px-10 lg:order-1 lg:py-20 xl:px-16">
        <motion.p
          {...fade(0.1)}
          className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-sm font-semibold uppercase tracking-widest text-primary"
        >
          <span className="h-2 w-2 rounded-full bg-primary" />
          Kreisliga B · Lahr/Schwarzwald
        </motion.p>

        <motion.h1
          {...fade(0.25)}
          className="text-5xl font-extrabold leading-[0.95] text-white sm:text-6xl xl:text-7xl"
        >
          FC Lahr-West
          <span className="block text-primary">seit 1975.</span>
        </motion.h1>

        <motion.p {...fade(0.4)} className="mt-6 max-w-md text-lg text-white/70">
          Leidenschaft. Teamgeist. Heimat. Zwei Herrenmannschaften, ein Verein – und
          immer Platz für neue Gesichter auf und neben dem Platz.
        </motion.p>

        <motion.div {...fade(0.55)} className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button
            size="lg"
            asChild
            className="bg-primary px-8 text-lg text-primary-foreground shadow-lg transition-all duration-200 hover:bg-primary/90 active:scale-[0.98]"
          >
            <Link href="/mitglied-werden">
              Mitglied werden <ArrowRight className="ml-1 h-5 w-5" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border-white/30 bg-transparent px-8 text-lg text-white transition-all duration-200 hover:bg-white/10 hover:text-white active:scale-[0.98]"
          >
            <Link href="/teams">Mannschaften</Link>
          </Button>
        </motion.div>

        <motion.dl
          {...fade(0.7)}
          className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-white/10 pt-6"
        >
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className="sr-only">{fact.label}</dt>
              <dd className="text-3xl font-bold text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>{fact.value}</dd>
              <dd className="text-sm text-white/50">{fact.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
        className="relative order-1 aspect-[3/2] lg:order-2 lg:aspect-auto"
      >
        <img
          src="/team-1-herren.jpg"
          alt="Mannschaftsfoto der 1. Herren des FC Lahr-West 1975 e.V."
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        {/* Weicher Übergang vom Foto in die dunkle Textspalte. */}
        <div className="absolute inset-0 hidden bg-gradient-to-r from-neutral-950 via-neutral-950/10 to-transparent lg:block lg:w-1/4" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-neutral-950 to-transparent lg:hidden" />
        <span className="absolute bottom-4 right-4 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
          1. Herren
        </span>
      </motion.div>
    </section>
  );
}
