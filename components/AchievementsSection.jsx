'use client';

import ScrollTriggerFadeIn from './ScrollTriggerFadeIn';
import HoverGlowCard from './HoverGlowCard';
import { Trophy, Building2, Handshake, Accessibility, Star } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: 'Meister Bezirksliga',
    description: 'Der Aufstieg in die Bezirksliga zählt zu den größten Erfolgen unserer Vereinsgeschichte.',
  },
  {
    icon: Trophy,
    title: 'Meister Kreisklasse A & B',
    description: 'Titelgewinne in der Kreisklasse A und B – erkämpft mit Einsatz und Zusammenhalt.',
  },
  {
    icon: Building2,
    title: 'Stadtmeister',
    description: 'Als Stadtmeister haben wir uns gegen die stärksten Vereine aus Lahr durchgesetzt.',
  },
  {
    icon: Handshake,
    title: 'Fairplay-Preis',
    description: 'Ausgezeichnet für vorbildliches Verhalten auf und neben dem Platz. Fairplay ist bei uns keine Floskel.',
  },
  {
    icon: Accessibility,
    title: 'Barrierefreiheit',
    description: 'Unsere Anlage und unser Vereinsleben stehen allen offen – dafür wurden wir ausgezeichnet.',
  },
  {
    icon: Star,
    title: 'Jugendmeisterschaften',
    description: 'Mehrfache Meistertitel im Nachwuchsbereich – der beste Beleg für unsere Jugendarbeit.',
  },
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-14 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollTriggerFadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
            Erfolge & Auszeichnungen
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-10 md:mb-16">
            Titel auf dem Platz, Anerkennung daneben. Was wir seit 1975 erreicht haben –
            sportlich wie menschlich.
          </p>
        </ScrollTriggerFadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollTriggerFadeIn key={item.title} delay={index * 0.1} className="h-full">
                <HoverGlowCard className="bg-card border border-border rounded-2xl p-5 sm:p-8 h-full flex flex-col transition-all duration-300">
                  {/* Auf dem Handy steht das Symbol neben dem Titel statt darüber –
                      das spart pro Karte gut 70 px Höhe. */}
                  <div className="flex items-center gap-4 mb-3 sm:block">
                    <div className="bg-primary/10 w-11 h-11 sm:w-14 sm:h-14 rounded-xl flex flex-shrink-0 items-center justify-center sm:mb-5">
                      <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold sm:mb-3">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </HoverGlowCard>
              </ScrollTriggerFadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
