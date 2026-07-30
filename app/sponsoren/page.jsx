import Link from 'next/link';
import ScrollTriggerFadeIn from '@/components/ScrollTriggerFadeIn';
import SponsorForm from '@/components/SponsorForm';
import { Button } from '@/components/ui/button';
import { Shirt, Fence, Users, Heart, MapPin, Handshake, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Sponsoren & Partner – FC Lahr-West 1975 e.V.',
  description:
    'Werden Sie Partner des FC Lahr-West 1975 e.V. – mit Trikotwerbung oder Bandenwerbung am Sportplatz. Jetzt unverbindlich anfragen und Designs direkt einreichen.',
};

const packages = [
  {
    icon: Shirt,
    title: 'Trikotwerbung',
    lead: 'Ihr Logo läuft mit – bei jedem Spiel.',
    points: [
      'Präsenz auf den Trikots unserer Mannschaften',
      'Sichtbar bei jedem Punktspiel – zuhause und auswärts',
      'Auch auf Mannschaftsfotos und in unseren Social-Media-Beiträgen',
      'Platzierung auf Brust, Rücken oder Ärmel möglich',
    ],
  },
  {
    icon: Fence,
    title: 'Bandenwerbung',
    lead: 'Dauerhaft sichtbar auf unserem Sportplatz.',
    points: [
      'Ihre Werbebande direkt am Spielfeldrand',
      'Ganzjährig präsent – bei Spielen, Training und Vereinsfesten',
      'Wahrgenommen von Zuschauern, Gastvereinen und Nachbarschaft',
      'Verschiedene Bandengrößen möglich',
    ],
  },
];

const reasons = [
  {
    icon: Users,
    title: 'Rund 100 Mitglieder',
    desc: 'Eine gewachsene Gemeinschaft aus Spielern, Familien und Freunden des Vereins.',
  },
  {
    icon: Heart,
    title: 'Jugendarbeit im Fokus',
    desc: 'Ihre Unterstützung fließt direkt in die Förderung des Nachwuchses vor Ort.',
  },
  {
    icon: MapPin,
    title: 'Fest in Lahr verwurzelt',
    desc: 'Seit 1975 Teil des Stadtteils – Sie zeigen Flagge genau dort, wo Ihre Kunden sind.',
  },
  {
    icon: Handshake,
    title: 'Partnerschaft auf Augenhöhe',
    desc: 'Kurze Wege, persönlicher Kontakt und Lösungen, die zu Ihrem Budget passen.',
  },
];

export default function SponsorenPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden bg-accent">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: 'url(/hero-team.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-accent/80 via-accent/70 to-accent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollTriggerFadeIn>
            <h1 className="text-4xl md:text-6xl font-bold text-accent-foreground mb-6 text-balance leading-tight">
              Werden Sie Partner des FC Lahr-West
            </h1>
            <p className="text-lg md:text-xl text-accent-foreground/80 max-w-2xl mx-auto leading-relaxed mb-10">
              Trikot- oder Bandenwerbung: Zeigen Sie Ihr Unternehmen dort, wo seit 1975
              Woche für Woche Menschen zusammenkommen. Wir freuen uns auf Ihre Anfrage.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8"
            >
              <Link href="#anfrage">
                Jetzt anfragen <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </ScrollTriggerFadeIn>
        </div>
      </section>

      {/* Möglichkeiten */}
      <section className="py-20 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollTriggerFadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
              Ihre Möglichkeiten
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16">
              Zwei Wege, Ihr Unternehmen bei uns sichtbar zu machen – gerne auch kombiniert.
            </p>
          </ScrollTriggerFadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {packages.map((item, index) => {
              const Icon = item.icon;
              return (
                <ScrollTriggerFadeIn key={item.title} delay={index * 0.15} className="h-full">
                  <div className="bg-card border border-border rounded-2xl p-8 h-full flex flex-col hover:shadow-lg transition-all duration-300">
                    <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-5">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-primary font-medium mb-6">{item.lead}</p>
                    <ul className="space-y-3 text-muted-foreground">
                      {item.points.map((point) => (
                        <li key={point} className="flex gap-3 leading-relaxed">
                          <span className="text-primary font-bold flex-shrink-0">→</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollTriggerFadeIn>
              );
            })}
          </div>

          <ScrollTriggerFadeIn delay={0.3}>
            <p className="text-center text-muted-foreground mt-10 max-w-2xl mx-auto">
              Konditionen und Laufzeiten stimmen wir individuell mit Ihnen ab – schreiben Sie uns
              einfach, was Sie sich vorstellen.
            </p>
          </ScrollTriggerFadeIn>
        </div>
      </section>

      {/* Warum */}
      <section className="py-20 md:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollTriggerFadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">
              Warum FC Lahr-West?
            </h2>
          </ScrollTriggerFadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((item, index) => {
              const Icon = item.icon;
              return (
                <ScrollTriggerFadeIn key={item.title} delay={index * 0.1} className="h-full">
                  <div className="bg-card border border-border rounded-2xl p-6 h-full">
                    <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </ScrollTriggerFadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Anfrage-Formular */}
      <section id="anfrage" className="py-20 md:py-24 bg-background scroll-mt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollTriggerFadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
              Anfrage stellen
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              Unverbindlich und in zwei Minuten ausgefüllt. Sie können Ihr Logo oder ein fertiges
              Design gleich mitschicken – wir melden uns zeitnah bei Ihnen zurück.
            </p>
          </ScrollTriggerFadeIn>

          <ScrollTriggerFadeIn delay={0.15}>
            <div className="bg-card border border-border rounded-2xl shadow-lg p-6 md:p-8">
              <SponsorForm />
            </div>
          </ScrollTriggerFadeIn>

          <ScrollTriggerFadeIn delay={0.25}>
            <p className="text-center text-muted-foreground mt-8">
              Lieber persönlich? Rufen Sie an:{' '}
              <a href="tel:+491713274609" className="text-primary hover:underline font-medium">
                0171 3274609
              </a>{' '}
              (Alexandro Roccaro)
            </p>
          </ScrollTriggerFadeIn>
        </div>
      </section>
    </>
  );
}
