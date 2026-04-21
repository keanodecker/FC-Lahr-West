'use client';

import ScrollTriggerFadeIn from './ScrollTriggerFadeIn';
import ScrollTriggerSlideIn from './ScrollTriggerSlideIn';
import { MapPin, Calendar, Award } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollTriggerFadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">
            Über uns
          </h2>
        </ScrollTriggerFadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollTriggerSlideIn direction="left">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Calendar className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Unsere Geschichte</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Seit 1975 ist der FC Lahr-West 1975 e.V. ein fester Bestandteil der lokalen
                    Fußballgemeinschaft. Mit Leidenschaft und Engagement fördern wir den
                    Fußballsport in Lahr und Umgebung. Unser Verein steht für Teamgeist, Fairplay
                    und die Liebe zum Spiel.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Unser Standort</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    In der Siedlung 12<br />
                    77933 Lahr/Schwarzwald<br />
                    Mitten im Herzen der Gemeinde gelegen, bietet unser Sportplatz optimale
                    Bedingungen für Training und Wettkämpfe.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Award className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Landesverband</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Als stolzes Mitglied im Südbadischen Fußballverband pflegen wir die Traditionen
                    des regionalen Fußballs und fördern den sportlichen Austausch in der Region.
                  </p>
                </div>
              </div>
            </div>
          </ScrollTriggerSlideIn>

          <ScrollTriggerSlideIn direction="right">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1700917488610-2b4abd28e5a3"
                alt="Local football stadium with green grass field"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/60 to-transparent" />
            </div>
          </ScrollTriggerSlideIn>
        </div>
      </div>
    </section>
  );
}
