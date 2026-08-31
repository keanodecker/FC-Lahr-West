import Link from 'next/link';
import ScrollTriggerFadeIn from '@/components/ScrollTriggerFadeIn';
import ScrollTriggerSlideIn from '@/components/ScrollTriggerSlideIn';
import ImageWithFallback from '@/components/ImageWithFallback';
import { Button } from '@/components/ui/button';
import {
  Users,
  Trophy,
  Heart,
  Calendar,
  Home,
  Phone,
  ArrowRight,
  Star,
} from 'lucide-react';

export const metadata = {
  title: 'Mitglied werden – FC Lahr-West 1975 e.V.',
  description:
    'Werde Teil des FC Lahr-West. Egal ob Anfänger, Wiedereinsteiger oder erfahrener Spieler — bei uns ist jeder willkommen und jeder wird gebraucht.',
};

export default function MitgliedWerdenPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[75vh] flex items-center pt-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1600&q=80), url(/team-wide.jpg)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <ScrollTriggerFadeIn>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-10 text-balance leading-[1.05]">
              Schreib mit uns das nächste Kapitel.
            </h1>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Link href="/#contact">
                  Jetzt Kontakt aufnehmen <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur border-white text-white hover:bg-white/20 hover:text-white"
              >
                <a href="tel:+4917621050524">
                  <Phone className="mr-2 h-5 w-5" /> 0176 21050524
                </a>
              </Button>
            </div>
          </ScrollTriggerFadeIn>
        </div>
      </section>

      {/* Willkommens-Absatz */}
      <section className="py-20 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollTriggerFadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-balance">
              Bei uns ist jeder willkommen
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed text-balance">
              Egal ob du als <strong className="text-foreground">Anfänger</strong> noch
              nie einen Ball gespielt hast, als{' '}
              <strong className="text-foreground">Wiedereinsteiger</strong> zurück auf
              den Platz willst oder als{' '}
              <strong className="text-foreground">erfahrener Spieler</strong> ein neues
              Zuhause suchst — bei uns findest du deinen Platz.
            </p>
          </ScrollTriggerFadeIn>
        </div>
      </section>

      {/* Du wirst gefragt + Was dich erwartet (verbunden) */}
      <section className="bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollTriggerSlideIn direction="left">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1551958219-acbc608c6377?w=1200&q=80"
                  fallbackSrc="/team-1-herren.jpg"
                  alt="Mannschaft des FC Lahr-West 1975 e.V. auf dem Sportplatz"
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
            </ScrollTriggerSlideIn>

            <ScrollTriggerSlideIn direction="right">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                  Du wirst gefragt.
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Was das für dich konkret bedeutet:
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-primary text-primary-foreground w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Du prägst die Zukunft mit</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Der Vorstand ist neu, die Richtung wird gerade gesetzt. Jeder, der jetzt
                        einsteigt, gestaltet aktiv mit, wohin der Verein geht.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="bg-primary text-primary-foreground w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Jede Hand wird gebraucht</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Spieler, Trainer, Schiedsrichter, Helfer bei Festen, Sponsoren — wir
                        brauchen jede einzelne helfende Kraft. Du musst kein Profi sein,
                        um wichtig zu sein.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="bg-primary text-primary-foreground w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Niemand sitzt nur auf der Bank</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Bei uns bekommst du Spielzeit. Wir haben keine 30-Mann-Kader — du wirst
                        eingesetzt, gefordert und gebraucht.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollTriggerSlideIn>
          </div>
        </div>

        {/* Verbindung: Benefits direkt unten dran, gleicher Hintergrund */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 pb-20 md:pb-24">
          <ScrollTriggerFadeIn>
            <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center text-balance">
              Was dich bei uns erwartet
            </h3>
          </ScrollTriggerFadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Calendar,
                title: 'Regelmäßiges Training',
                desc: 'Strukturierter Trainingsalltag mit erfahrenem Trainerteam.',
              },
              {
                icon: Users,
                title: 'Echte Mannschaft',
                desc: 'Kameradschaft, die über den Platz hinausgeht.',
              },
              {
                icon: Home,
                title: 'Eigenes Vereinsheim',
                desc: 'Treffpunkt, drittes Wohnzimmer, Vereinsleben pur.',
              },
              {
                icon: Trophy,
                title: 'Punktspiele in der Kreisliga',
                desc: 'Echte Wettkämpfe in einer offiziellen Liga des SBFV.',
              },
              {
                icon: Heart,
                title: 'Lockere Atmosphäre',
                desc: 'Spaß steht vor Leistung. Verein soll Freude machen.',
              },
              {
                icon: Star,
                title: '50 Jahre Geschichte',
                desc: 'Gegründet 1975 — Tradition, die du mitschreibst.',
              },
            ].map((item, i) => (
              <ScrollTriggerFadeIn key={item.title} delay={i * 0.05}>
                <div className="bg-card border border-border rounded-2xl p-6 h-full hover:shadow-lg transition-all">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollTriggerFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-accent text-accent-foreground relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-40 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1600&q=80), url(/vereinsheim-kiosk-2026.jpg)',
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollTriggerFadeIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Bereit?</h2>
            <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto leading-relaxed">
              Schreib uns, ruf an, oder komm einfach beim nächsten Training vorbei.
              Sportplatz Lahr-West, Flugplatzstraße 105.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Link href="/#contact">
                  Nachricht schreiben <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 hover:text-white bg-transparent"
              >
                <a href="tel:+4917621050524">
                  <Phone className="mr-2 h-5 w-5" /> 0176 21050524
                </a>
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left max-w-3xl mx-auto pt-8 border-t border-white/20">
              <div>
                <p className="font-semibold mb-2">Adresse</p>
                <p className="opacity-80 text-sm leading-relaxed">
                  Sportplatz Lahr-West<br />
                  Flugplatzstraße 105<br />
                  77933 Lahr/Schwarzwald
                </p>
              </div>
              <div>
                <p className="font-semibold mb-2">Trainer</p>
                <a
                  href="tel:+4917621050524"
                  className="opacity-80 text-sm hover:opacity-100 hover:underline block"
                >
                  0176 21050524
                </a>
                <p className="opacity-60 text-xs mt-1">Andi Paschke</p>
              </div>
              <div>
                <p className="font-semibold mb-2">E-Mail</p>
                <a
                  href="mailto:alex.roccaro@web.de"
                  className="opacity-80 text-sm hover:opacity-100 hover:underline"
                >
                  alex.roccaro@web.de
                </a>
              </div>
            </div>
          </ScrollTriggerFadeIn>
        </div>
      </section>
    </>
  );
}
