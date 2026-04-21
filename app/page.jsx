'use client';

import { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TeamsSection from '@/components/TeamsSection';
import StatisticsSection from '@/components/StatisticsSection';
import ContactSection from '@/components/ContactSection';

export default function HomePage() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <AboutSection />
      <TeamsSection />
      <StatisticsSection />
      <ContactSection />
    </div>
  );
}
