import Link from 'next/link';
import ScrollTriggerFadeIn from '@/components/ScrollTriggerFadeIn';
import ScrollTriggerSlideIn from '@/components/ScrollTriggerSlideIn';
import { Button } from '@/components/ui/button';
import { Home, Users, Utensils, Music, Phone, Mail, ArrowRight, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Vereinsheim mieten – FC Lahr-West 1975 e.V.',
  description:
    'Unser Vereinsheim am Sportplatz Lahr-West steht für Feiern, Veranstaltungen und Familienfeste zur Verfügung. Anfragen jederzeit willkommen.',
};

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&q=80',
    alt: 'Innenraum Vereinsheim (Platzhalter)',
  },
  {
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80',
    alt: 'Bereich für Feiern (Platzhalter)',
  },
  {
    src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&q=80',
    alt: 'Außenbereich (Platzhalter)',
  },
  {
    src: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=1200&q=80',
    alt: 'Theke und Bar (Platzhalter)',
  },
];

const highlights = [
  { icon: Users, title: 'Bis zu 80 Personen', desc: 'Platz für größere Feiern und Veranstaltungen.' },
  { icon: Utensils, title: 'Voll ausgestattete Küche', desc: 'Eigene Bewirtung möglich, Geschirr inklusive.' },
  { icon: Music, title: 'Bühne & Soundanlage', desc: 'Geeignet für Live-Musik, Vorträge und Feste.' },
  { icon: Home, title: 'Eigene Sanitäranlagen', desc: 'Direkt am Vereinsheim, getrennte Bereiche.' },
];

export default function VereinshausPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center pt-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1600&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <ScrollTriggerFadeIn>
            <div className="max-w-3xl">
              <p className="text-primary font-semibold mb-4 uppercase tracking-wider text-sm">
                Vereinsheim
              </p>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance leading-tight">
                Unser Vereinsheim – auf Anfrage offen für dich.
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Geburtstag, Familienfeier, Vereinsfest, Workshop? Unser Vereinsheim am
                Sportplatz Lahr-West kannst du für Veranstaltungen mieten. Schreib uns
                einfach an.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/#contact">
                  Anfrage senden <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </ScrollTriggerFadeIn>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollTriggerFadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Einblicke</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ein paar Eindrücke vom Vereinsheim und der Anlage.
              </p>
            </div>
          </ScrollTriggerFadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {galleryImages.map((img, i) => (
              <ScrollTriggerFadeIn key={img.src} delay={i * 0.05}>
                <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                </div>
              </ScrollTriggerFadeIn>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground mt-6 italic">
            Bilder sind Platzhalter und werden bald durch echte Aufnahmen ersetzt.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 md:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollTriggerFadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Was wir bieten</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Alles, was du für eine entspannte Veranstaltung brauchst.
              </p>
            </div>
          </ScrollTriggerFadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h, i) => (
              <ScrollTriggerFadeIn key={h.title} delay={i * 0.05}>
                <div className="bg-card border border-border rounded-2xl p-6 h-full">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <h.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{h.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{h.desc}</p>
                </div>
              </ScrollTriggerFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollTriggerFadeIn>
            <div className="bg-accent text-accent-foreground rounded-2xl shadow-xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Interesse?</h2>
              <p className="text-lg opacity-90 mb-8 leading-relaxed">
                Schick uns eine kurze Nachricht mit deinem Anlass, dem Wunschdatum und der
                ungefähren Personenzahl. Wir melden uns mit Details und Preis zurück.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/#contact">
                    Anfrage über Formular <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 hover:text-white bg-transparent"
                >
                  <a href="tel:+4978214913">
                    <Phone className="mr-2 h-5 w-5" /> 07821 4913
                  </a>
                </Button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left pt-8 border-t border-white/20 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1">Vor Ort</p>
                    <p className="opacity-80">
                      Sportplatz Lahr-West<br />
                      Flugplatzstraße 105<br />
                      77933 Lahr/Schwarzwald
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1">E-Mail</p>
                    <a href="mailto:fclahrwest@aol.com" className="opacity-80 hover:opacity-100 hover:underline">
                      fclahrwest@aol.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollTriggerFadeIn>
        </div>
      </section>
    </>
  );
}
