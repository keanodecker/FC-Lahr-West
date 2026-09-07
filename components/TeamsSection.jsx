'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollTriggerFadeIn from './ScrollTriggerFadeIn';
import HoverGlowCard from './HoverGlowCard';
import { Users, ChevronLeft, ChevronRight } from 'lucide-react';

// Beide Mannschaften zeigen eigene Vereinsfotos, lokal ausgeliefert.
// Wer mehr als ein Motiv hat, bekommt in der Karte Pfeile zum Blättern – die
// 2. Herren also das offizielle Mannschaftsfoto und den Mannschaftskreis.
const teams = [
  {
    name: '1. Herren',
    league: 'Kreisliga B Staffel III',
    description:
      'Unsere erste Mannschaft kämpft mit vollem Einsatz in der Kreisliga B.',
    images: [
      {
        src: '/team-1-herren.jpg',
        alt: 'Mannschaftsfoto der 1. Herren des FC Lahr-West 1975 e.V.',
      },
    ],
  },
  {
    name: '2. Herren',
    league: 'Freundschaftsspiele',
    description:
      'Die zweite Mannschaft bestreitet regelmäßig Freundschaftsspiele und fördert den Teamgeist.',
    images: [
      {
        src: '/team-2-herren-2026.jpg',
        alt: 'Mannschaftsfoto der 2. Herren des FC Lahr-West 1975 e.V.',
      },
      {
        src: '/team-2-kreis-2026.jpg',
        alt: 'Die 2. Herren des FC Lahr-West 1975 e.V. im Mannschaftskreis vor dem Anpfiff',
      },
    ],
  },
];

function TeamPhotos({ images, teamName }) {
  const [index, setIndex] = useState(0);
  const hasMultiple = images.length > 1;

  const goTo = (next) => setIndex((next + images.length) % images.length);

  return (
    <>
      {images.map((image, i) => (
        <motion.img
          key={image.src}
          src={image.src}
          alt={image.alt}
          aria-hidden={i !== index}
          className="absolute inset-0 h-full w-full object-cover"
          initial={false}
          animate={{ opacity: i === index ? 1 : 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          loading="lazy"
        />
      ))}

      {hasMultiple && (
        <>
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label={`${teamName}: vorheriges Bild`}
            className="absolute left-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label={`${teamName}: nächstes Bild`}
            className="absolute right-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Rechts unten – links unten stehen Liga und Mannschaftsname. */}
          <div className="absolute bottom-4 right-4 z-20 flex gap-1.5">
            {images.map((image, i) => (
              <button
                key={image.src}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`${teamName}: Bild ${i + 1} von ${images.length}`}
                aria-current={i === index}
                className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                  i === index ? 'w-5 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default function TeamsSection() {
  return (
    <section id="teams" className="py-20 md:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollTriggerFadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">
            Unsere Mannschaften
          </h2>
        </ScrollTriggerFadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {teams.map((team, index) => (
            <ScrollTriggerFadeIn key={team.name} delay={index * 0.2} className="h-full">
              <HoverGlowCard className="bg-card rounded-2xl overflow-hidden shadow-lg transition-all duration-300 h-full flex flex-col">
                <div className="relative h-64 flex-shrink-0">
                  <TeamPhotos images={team.images} teamName={team.name} />
                  {/* Nur der untere Bereich wird abgedunkelt, damit Liga und
                      Mannschaftsname lesbar bleiben – das Foto selbst bleibt frei. */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-accent/85 via-accent/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium text-white">{team.league}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">{team.name}</h3>
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <p className="text-muted-foreground leading-relaxed">{team.description}</p>
                </div>
              </HoverGlowCard>
            </ScrollTriggerFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
