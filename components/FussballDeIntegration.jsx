'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Trophy, Activity, CalendarDays } from 'lucide-react';

export default function FussballDeIntegration() {
  const [iframeFailed, setIframeFailed] = useState(false);
  const fussballDeUrl =
    'https://www.fussball.de/verein/fc-lahr-west-suedbaden/-/id/00ES8GN9DO00006NVV0AG08LVUPGND5I#!/';

  useEffect(() => {
    const timer = setTimeout(() => {
      setIframeFailed(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">
            Offizielle Statistiken
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Verfolgen Sie alle unsere Mannschaften, Tabellenstände und detaillierte Spielverläufe
            direkt über das offizielle DFB-Portal.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {!iframeFailed ? (
            <div className="responsive-iframe-container bg-card rounded-2xl shadow-sm border border-border overflow-hidden h-[600px] flex items-center justify-center">
              <div className="flex flex-col items-center text-muted-foreground animate-pulse">
                <Activity className="h-8 w-8 mb-4" />
                <p>Lade fussball.de Integration...</p>
              </div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="link-card-hover relative bg-card rounded-3xl shadow-lg border border-border overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>

              <div className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="flex-shrink-0 bg-primary/10 p-6 rounded-full group-hover:scale-110 transition-transform duration-500">
                  <Trophy className="h-16 w-16 text-primary" />
                </div>

                <div className="flex-grow text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">
                    Alle Spiele auf fussball.de
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Aktuelle Spielpläne, Ergebnisse und Statistiken des FC Lahr-West 1975 e.V.
                  </p>

                  <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
                    <div className="flex items-center gap-2 text-sm font-medium bg-muted px-4 py-2 rounded-full">
                      <CalendarDays className="h-4 w-4 text-primary" />
                      <span>Spielpläne</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium bg-muted px-4 py-2 rounded-full">
                      <Activity className="h-4 w-4 text-primary" />
                      <span>Live-Ticker</span>
                    </div>
                  </div>

                  <a
                    href={fussballDeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 active:scale-[0.98] transition-all shadow-md hover:shadow-xl"
                  >
                    <span>Zu fussball.de wechseln</span>
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
