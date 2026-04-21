'use client';

import ScrollTriggerFadeIn from './ScrollTriggerFadeIn';
import AnimatedCounter from './AnimatedCounter';
import { Trophy, Users, Calendar } from 'lucide-react';

const stats = [
  { icon: Calendar, label: 'Gegründet', value: 1975, suffix: '' },
  { icon: Users, label: 'Mannschaften', value: 2, suffix: '' },
  { icon: Trophy, label: 'Mitglieder', value: 120, suffix: '+' },
];

export default function StatisticsSection() {
  return (
    <section id="statistics" className="relative py-20 md:py-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1700917488610-2b4abd28e5a3)',
        }}
      >
        <div className="absolute inset-0 bg-accent/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollTriggerFadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance text-accent-foreground">
            Unsere Zahlen
          </h2>
        </ScrollTriggerFadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <ScrollTriggerFadeIn key={stat.label} delay={index * 0.2}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-xl mb-4">
                    <Icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div
                    className="text-5xl md:text-6xl font-extrabold text-white mb-2"
                    style={{ fontVariantNumeric: 'tabular-nums' }}
                  >
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-lg text-white/80 font-medium">{stat.label}</p>
                </div>
              </ScrollTriggerFadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
