'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMousePosition } from '@/hooks/useMousePosition';

export default function ParticleSystem() {
  const mousePosition = useMousePosition();
  const [particles, setParticles] = useState([]);
  const [isMobile, setIsMobile] = useState(true);
  const particleIdCounter = useRef(0);
  const lastSpawnTime = useRef(0);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    if (mousePosition.x === null || mousePosition.y === null) return;

    const now = Date.now();
    if (now - lastSpawnTime.current > 150) {
      const newParticle = {
        id: particleIdCounter.current++,
        x: mousePosition.x,
        y: mousePosition.y,
      };

      setParticles((prev) => [...prev.slice(-20), newParticle]);
      lastSpawnTime.current = now;

      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
      }, 2000);
    }
  }, [mousePosition, isMobile]);

  if (isMobile) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ opacity: 1, x: particle.x, y: particle.y, scale: 0.5, rotate: 0 }}
            animate={{
              opacity: 0,
              y: particle.y + 300,
              x: particle.x + (Math.random() * 100 - 50),
              rotate: Math.random() * 360,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: 'easeIn' }}
            className="absolute text-2xl"
            style={{ left: -12, top: -12 }}
          >
            ⚽
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
