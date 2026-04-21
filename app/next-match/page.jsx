import FussballDeIntegration from '@/components/FussballDeIntegration';

export const metadata = {
  title: 'Nächste Spiele | FC Lahr-West 1975 e.V.',
  description:
    'Verpassen Sie kein Spiel! Alle Informationen zu den kommenden Begegnungen des FC Lahr-West.',
};

export default function NextMatchPage() {
  return (
    <div className="pt-20 min-h-screen bg-background">
      <div className="bg-accent text-accent-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Spielplan</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Unterstützen Sie uns bei unseren nächsten Herausforderungen. Wir freuen uns auf Ihren
            Besuch am Spielfeldrand!
          </p>
        </div>
      </div>
      <FussballDeIntegration />
    </div>
  );
}
