'use client';

import { useState, useEffect } from 'react';

export function useScrollBlur(maxBlur = 12, fadeInEnd = 400, fadeOutStart = 800, fadeOutEnd = 1200) {
  const [blur, setBlur] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      let currentBlur = 0;

      if (y <= fadeInEnd) {
        currentBlur = (y / fadeInEnd) * maxBlur;
      } else if (y <= fadeOutStart) {
        currentBlur = maxBlur;
      } else if (y <= fadeOutEnd) {
        const progress = (y - fadeOutStart) / (fadeOutEnd - fadeOutStart);
        currentBlur = maxBlur * (1 - progress);
      } else {
        currentBlur = 0;
      }

      setBlur(Math.max(0, currentBlur));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [maxBlur, fadeInEnd, fadeOutStart, fadeOutEnd]);

  return blur;
}
