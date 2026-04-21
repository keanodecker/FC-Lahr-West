import TeamsSection from '@/components/TeamsSection';
import TeamsPageHeader from '@/components/TeamsPageHeader';

export const metadata = {
  title: 'Mannschaften | FC Lahr-West 1975 e.V.',
  description:
    'Unsere Mannschaften im Überblick. 1. Herren und 2. Herren des FC Lahr-West 1975 e.V.',
};

export default function TeamsPage() {
  return (
    <div className="pt-20 min-h-screen bg-background">
      <TeamsPageHeader />
      <TeamsSection />
    </div>
  );
}
