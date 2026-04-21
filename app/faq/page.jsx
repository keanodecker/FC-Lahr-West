import FAQSection from '@/components/FAQSection';

export const metadata = {
  title: 'FAQ | FC Lahr-West 1975 e.V.',
  description:
    'Häufig gestellte Fragen zum FC Lahr-West 1975 e.V. – Mitgliedschaft, Training, Mannschaften und mehr.',
};

export default function FAQPage() {
  return (
    <div className="pt-20 min-h-screen bg-background">
      <div className="bg-muted py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">FAQ</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Häufig gestellte Fragen – hier findest du schnelle Antworten rund um den FC Lahr-West.
          </p>
        </div>
      </div>
      <FAQSection />
    </div>
  );
}
