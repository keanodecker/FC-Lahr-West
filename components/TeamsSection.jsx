'use client';

import ScrollTriggerFadeIn from './ScrollTriggerFadeIn';
import HoverGlowCard from './HoverGlowCard';
import ImageWithFallback from './ImageWithFallback';
import { Users } from 'lucide-react';

// Beide Mannschaften zeigen eigene Vereinsfotos – lokal ausgeliefert, deshalb
// ist image und fallback jeweils dieselbe Datei.
// 1. Herren: das offizielle Mannschaftsfoto der Saison im Vereinstrikot.
// 2. Herren: das Gruppenfoto der ganzen Truppe vom Trainingsgelände.
const teams = [
  {
    name: '1. Herren',
    league: 'Kreisliga B Staffel III',
    description:
      'Unsere erste Mannschaft kämpft mit vollem Einsatz in der Kreisliga B.',
    image: '/team-1-herren.jpg',
    fallback: '/team-1-herren.jpg',
  },
  {
    name: '2. Herren',
    league: 'Freundschaftsspiele',
    description:
      'Die zweite Mannschaft bestreitet regelmäßig Freundschaftsspiele und fördert den Teamgeist.',
    image: '/team-wide.jpg',
    fallback: '/team-wide.jpg',
  },
];

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
                  <ImageWithFallback
                    src={team.image}
                    fallbackSrc={team.fallback}
                    alt={`${team.name} des FC Lahr-West 1975 e.V.`}
                    className="w-full h-full object-cover"
                  />
                  {/* Nur der untere Bereich wird abgedunkelt, damit Liga und
                      Mannschaftsname lesbar bleiben – das Foto selbst bleibt frei. */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-accent/85 via-accent/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
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
