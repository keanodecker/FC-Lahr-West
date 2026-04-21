'use client';

import { useScrollBlur } from '@/hooks/useScrollBlur';

export default function ScrollBlurOverlay() {
  const blur = useScrollBlur(12, 400, 800, 1200);

  if (blur === 0) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[30vh] pointer-events-none z-30"
      style={{
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`,
        backgroundColor: `rgba(255, 255, 255, ${blur / 80})`,
        maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%)',
        transition: 'backdrop-filter 0.1s ease-out, background-color 0.1s ease-out',
      }}
    />
  );
}
