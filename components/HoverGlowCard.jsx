'use client';

import { motion } from 'framer-motion';

export default function HoverGlowCard({ children, className = '' }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        boxShadow: '0 0 30px rgba(200, 16, 46, 0.6)',
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
