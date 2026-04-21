import StatisticsSection from '@/components/StatisticsSection';

export const metadata = {
  title: 'Statistik | FC Lahr-West 1975 e.V.',
  description: 'Zahlen, Daten und Fakten rund um den FC Lahr-West 1975 e.V.',
};

export default function StatisticsPage() {
  return (
    <div className="pt-20 min-h-screen bg-background">
      <div className="bg-muted py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Zahlen & Fakten</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ein Blick auf die beeindruckenden Statistiken unseres Vereins seit der Gründung im Jahr
            1975.
          </p>
        </div>
      </div>

      <StatisticsSection />
    </div>
  );
}
