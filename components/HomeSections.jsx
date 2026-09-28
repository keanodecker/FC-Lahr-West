import AboutSection from '@/components/AboutSection';
import TrainersSection from '@/components/TrainersSection';
import TeamsSection from '@/components/TeamsSection';
import StatisticsSection from '@/components/StatisticsSection';
import AchievementsSection from '@/components/AchievementsSection';
import ContactSection from '@/components/ContactSection';

// Alles unterhalb des Heros. Die Startseite und die alternativen Einstiege
// unter /einstieg teilen sich diese Liste, damit sie nicht auseinanderlaufen.
export default function HomeSections() {
  return (
    <>
      <AboutSection />
      <TeamsSection />
      <TrainersSection />
      <StatisticsSection />
      <AchievementsSection />
      <ContactSection />
    </>
  );
}
