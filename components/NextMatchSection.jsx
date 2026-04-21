'use client';

import ScrollTriggerFadeIn from './ScrollTriggerFadeIn';
import HoverGlowCard from './HoverGlowCard';
import { Calendar, Clock, MapPin, Home } from 'lucide-react';

export default function NextMatchSection() {
  return (
    <section id="next-match" className="py-20 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollTriggerFadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">
            Nächstes Spiel
          </h2>
        </ScrollTriggerFadeIn>

        <ScrollTriggerFadeIn delay={0.2}>
          <div className="max-w-3xl mx-auto">
            <HoverGlowCard className="bg-card rounded-2xl shadow-xl overflow-hidden transition-all duration-300">
              <div className="bg-gradient-to-r from-primary to-primary/80 p-6 text-primary-foreground">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Home className="h-5 w-5" />
                    <span className="text-sm font-medium">Heimspiel</span>
                  </div>
                  <div className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                    Kreisliga B
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl md:text-4xl font-bold mb-2">
                    FC Lahr-West <span className="text-white/60">vs.</span> FC Langenwinkel
                  </h3>
                </div>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Datum</p>
                      <p className="font-semibold">19.04.2026</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Uhrzeit</p>
                      <p className="font-semibold">15:00 Uhr</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Ort</p>
                      <p className="font-semibold">Lahr-West</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-muted rounded-xl text-center">
                  <p className="text-sm text-muted-foreground">
                    Kommt vorbei und unterstützt unsere Mannschaft!
                  </p>
                </div>
              </div>
            </HoverGlowCard>
          </div>
        </ScrollTriggerFadeIn>
      </div>
    </section>
  );
}
