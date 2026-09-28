'use client';

import { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import HomeSections from '@/components/HomeSections';

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
      <HomeSections />
    </div>
  );
}
