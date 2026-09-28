'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Users, UserPlus, Handshake, Home } from 'lucide-react';

const quickLinks = [
  { href: '/mitglied-werden', label: 'Mitglied werden', hint: 'Spielen oder unterstützen', icon: UserPlus },
  { href: '/teams', label: 'Mannschaften', hint: '1. & 2. Herren', icon: Users },
  { href: '/sponsoren', label: 'Sponsoren', hint: 'Partner werden', icon: Handshake },
  { href: '/vereinshaus', label: 'Vereinshaus', hint: 'Mieten & feiern', icon: Home },
];

// Variante 2 – „Kino“: Bildschirmfüllendes Foto mit langsamem Zoom, die
// Überschrift unten links wie ein Filmtitel und darunter vier direkte Wege
// in die Seite, damit niemand erst scrollen muss.
export default function HeroCinematic() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] w-full flex-col justify-end overflow-hidden bg-black"
    >
      <motion.img
        src="/team-1-herren.jpg"
        alt="Mannschaftsfoto der 1. Herren des FC Lahr-West 1975 e.V."
        className="absolute inset-0 h-full w-full object-cover object-[50%_65%]"
        initial={reduceMotion ? false : { scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 12, ease: 'easeOut' }}
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-8 pt-28 sm:px-6 lg:px-8 lg:pb-12">
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-3 flex items-center gap-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-white/80 sm:tracking-[0.3em]"
        >
          <span className="h-px w-10 bg-primary" />
          Flugplatzstraße 105 · Lahr
        </motion.p>

        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl text-5xl font-extrabold uppercase leading-[0.9] text-white sm:text-7xl lg:text-8xl"
        >
          Das ist <span className="text-primary">West.</span>
        </motion.h1>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-4 max-w-xl text-lg text-white/80 sm:text-xl"
        >
          FC Lahr-West 1975 e.V. – Leidenschaft. Teamgeist. Heimat.
        </motion.p>

        <motion.nav
          aria-label="Schnellzugriff"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/15 lg:grid-cols-4"
        >
          {quickLinks.map(({ href, label, hint, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="group flex items-start justify-between gap-2 bg-black/55 p-4 backdrop-blur-md transition-colors hover:bg-primary focus-visible:bg-primary focus-visible:outline-none sm:p-5"
            >
              <span>
                <Icon className="mb-3 h-5 w-5 text-primary transition-colors group-hover:text-white" />
                <span className="block font-semibold text-white">{label}</span>
                <span className="hidden text-sm text-white/60 group-hover:text-white/80 sm:block">{hint}</span>
              </span>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-white/40 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
            </Link>
          ))}
        </motion.nav>
      </div>
    </section>
  );
}
