'use client';

import ScrollTriggerFadeIn from './ScrollTriggerFadeIn';
import { Compass, TrendingUp, Sprout } from 'lucide-react';

const milestones = [
  {
    year: '2025',
    icon: Compass,
    title: 'Neustrukturierung',
    description:
      'Wir haben den Verein von Grund auf neu aufgestellt: klare Strukturen, neue Verantwortlichkeiten und ein starkes Fundament für alles, was kommt.',
  },
  {
    year: '2026',
    icon: TrendingUp,
    title: 'Investition & Wachstum',
    description:
      'Neuzugänge für unsere Mannschaften und gezielte Investitionen in die Infrastruktur – vom Sportplatz bis zum Vereinsheim.',
  },
  {
    year: '2027',
    icon: Sprout,
    title: 'Jugend im Fokus',
    description:
      'Der Nachwuchs rückt in den Mittelpunkt: Ausbau der Jugendabteilung, mehr Trainerkapazität und langfristige Nachwuchsförderung.',
  },
];

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="py-20 md:py-24 bg-muted">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollTriggerFadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
            Wohin wir wollen
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Unser Weg für die kommenden Jahre – Schritt für Schritt, mit klarem Ziel.
          </p>
        </ScrollTriggerFadeIn>

        <div className="relative">
          {/* Vertikale Linie mit rotem Verlauf */}
          <div
            className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-2 bottom-2 w-0.5
                       bg-gradient-to-b from-primary via-primary/60 to-primary/10"
            aria-hidden="true"
          />

          <div className="space-y-12">
            {milestones.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;

              return (
                <ScrollTriggerFadeIn key={item.year} delay={index * 0.15}>
                  <div className="relative flex items-start gap-6 md:gap-0">
                    {/* Punkt auf der Linie */}
                    <div
                      className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-primary
                                 flex items-center justify-center shadow-lg ring-4 ring-muted
                                 md:absolute md:left-1/2 md:-translate-x-1/2"
                    >
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>

                    {/* Inhaltskarte */}
                    <div
                      className={`flex-1 md:w-1/2 ${
                        isLeft
                          ? 'md:pr-16 md:mr-auto md:text-right'
                          : 'md:pl-16 md:ml-auto'
                      }`}
                    >
                      <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                        <span className="inline-block text-3xl md:text-4xl font-extrabold text-primary mb-2">
                          {item.year}
                        </span>
                        <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollTriggerFadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
