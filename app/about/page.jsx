import AboutSection from '@/components/AboutSection';

export const metadata = {
  title: 'Über uns | FC Lahr-West 1975 e.V.',
  description:
    'Erfahren Sie mehr über die Geschichte und den Standort des FC Lahr-West 1975 e.V.',
};

export default function AboutPage() {
  return (
    <div className="pt-20 min-h-screen bg-background">
      <div className="bg-muted py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Vereinsgeschichte
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Seit 1975 prägen wir den Fußball in Lahr. Erfahren Sie alles über unsere Wurzeln,
            unsere Werte und unsere Vision für die Zukunft.
          </p>
        </div>
      </div>

      <AboutSection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none text-muted-foreground">
          <h2 className="text-2xl font-bold text-foreground mb-4">Unsere Philosophie</h2>
          <p className="mb-6">
            Der FC Lahr-West 1975 e.V. ist mehr als nur ein Fußballverein. Wir sind eine
            Gemeinschaft, die Menschen jeden Alters und jeder Herkunft durch die gemeinsame
            Leidenschaft für den Sport verbindet. Unser Fokus liegt nicht nur auf dem sportlichen
            Erfolg, sondern auch auf der Vermittlung von Werten wie Respekt, Toleranz und Fairplay.
          </p>
          <h2 className="text-2xl font-bold text-foreground mb-4">Jugendarbeit</h2>
          <p>
            Die Förderung des Nachwuchses liegt uns besonders am Herzen. Mit engagierten Trainern
            und modernen Trainingsmethoden bieten wir Kindern und Jugendlichen ein optimales
            Umfeld, um ihre fußballerischen Fähigkeiten zu entwickeln und gleichzeitig wichtige
            soziale Kompetenzen zu erlernen.
          </p>
        </div>
      </div>
    </div>
  );
}
