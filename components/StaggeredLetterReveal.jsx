'use client';

import { motion } from 'framer-motion';

export default function StaggeredLetterReveal({ text, className = '' }) {
  const words = text.split(' ');

  return (
    <div className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block">
          {word.split('').map((letter, letterIndex) => {
            const totalIndex =
              words.slice(0, wordIndex).reduce((acc, w) => acc + w.length, 0) + letterIndex;
            return (
              <motion.span
                key={letterIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: totalIndex * 0.05,
                  duration: 0.4,
                  ease: 'easeOut',
                }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            );
          })}
          {wordIndex < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </div>
  );
}
