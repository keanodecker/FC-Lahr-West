'use client';

import ScrollTriggerFadeIn from './ScrollTriggerFadeIn';
import AnimatedCounter from './AnimatedCounter';
import { Trophy, Users, Calendar, Shield } from 'lucide-react';

const stats = [
  { icon: Calendar, label: 'Gegründet', value: 1975, suffix: '' },
  { icon: Users, label: 'Mitglieder', value: 100, suffix: '' },
  { icon: Shield, label: 'Mannschaften', value: 2, suffix: '' },
  { icon: Trophy, label: 'Meistertitel', value: 2, suffix: '' },
];

export default function StatisticsSection() {
  return (
    <section id="statistics" className="relative py-14 md:py-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          // Zwei Ebenen: das Stimmungsbild liegt oben, das eigene Foto darunter.
          // Lädt die erste URL nicht, wird sie einfach nicht gezeichnet und die
          // zweite bleibt sichtbar – ganz ohne JavaScript.
          backgroundImage:
            'url(https://images.unsplash.com/photo-1700917488610-2b4abd28e5a3?w=1600&q=80), url(/team-wide.jpg)',
        }}
      >
        {/* Deutlich transparenter als zuvor (war /90), damit das Mannschaftsfoto
            sichtbar bleibt. Die Kacheln bringen ihren eigenen Kontrast mit. */}
        <div className="absolute inset-0 bg-accent/65" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollTriggerFadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 md:mb-16 text-balance text-accent-foreground drop-shadow-lg">
            Unsere Zahlen
          </h2>
        </ScrollTriggerFadeIn>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <ScrollTriggerFadeIn key={stat.label} delay={index * 0.15}>
                <div className="bg-white/15 backdrop-blur-md rounded-2xl p-4 sm:p-8 text-center border border-white/25 h-full shadow-lg">
                  <div className="inline-flex items-center justify-center w-11 h-11 sm:w-16 sm:h-16 bg-primary rounded-xl mb-3 sm:mb-4">
                    <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary-foreground" />
                  </div>
                  <div
                    className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-1 sm:mb-2"
                    style={{ fontVariantNumeric: 'tabular-nums' }}
                  >
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm sm:text-lg text-white/80 font-medium">{stat.label}</p>
                </div>
              </ScrollTriggerFadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
