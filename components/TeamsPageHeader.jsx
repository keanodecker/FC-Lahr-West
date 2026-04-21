'use client';

import { motion } from 'framer-motion';

export default function TeamsPageHeader() {
  return (
    <div className="bg-primary/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <motion.img
            src="https://horizons-cdn.hostinger.com/5253aa88-5df7-412d-839f-0a29150c6335/a050f4f0a8ae68318c3faec4baec3687.png"
            alt="FC Lahr-West 1975 e.V. Logo"
            className="h-24 md:h-32 w-auto object-contain"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="flex-grow text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Unsere Teams</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Lernen Sie unsere Mannschaften kennen. Von der Kreisliga bis zu den
              Freundschaftsspielen – wir geben immer 100%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
