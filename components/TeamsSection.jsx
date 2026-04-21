'use client';

import ScrollTriggerFadeIn from './ScrollTriggerFadeIn';
import HoverGlowCard from './HoverGlowCard';
import { Users } from 'lucide-react';

const teams = [
  {
    name: '1. Herren',
    league: 'Kreisliga B Staffel III',
    description:
      'Unsere erste Mannschaft kämpft mit vollem Einsatz in der Kreisliga B.',
    image: 'https://images.unsplash.com/photo-1529932892568-43f5d5c07da5',
  },
  {
    name: '2. Herren',
    league: 'Freundschaftsspiele',
    description:
      'Die zweite Mannschaft bestreitet regelmäßig Freundschaftsspiele und fördert den Teamgeist.',
    image: 'https://images.unsplash.com/photo-1529932892568-43f5d5c07da5',
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teams.map((team, index) => (
            <ScrollTriggerFadeIn key={team.name} delay={index * 0.2}>
              <HoverGlowCard className="bg-card rounded-2xl overflow-hidden shadow-lg transition-all duration-300">
                <div className="relative h-64">
                  <img
                    src={team.image}
                    alt={`${team.name} team huddle on football field`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium text-white">{team.league}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">{team.name}</h3>
                  </div>
                </div>
                <div className="p-6">
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
