'use client';

import { Mail, Phone, MapPin, Instagram, ExternalLink } from 'lucide-react';
import Link from 'next/link';

function openCookieBanner() {
  window.dispatchEvent(new Event('openCookieBanner'));
}

export default function Footer() {
  const mapsUrl = 'https://maps.google.com/?q=Flugplatzstraße+105,+77933+Lahr';

  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <img
              src="https://horizons-cdn.hostinger.com/5253aa88-5df7-412d-839f-0a29150c6335/a050f4f0a8ae68318c3faec4baec3687.png"
              alt="FC Lahr-West 1975 e.V. Logo"
              className="h-16 w-auto object-contain mb-4"
            />
            <p className="text-sm opacity-80">Gegründet 1975</p>
            <p className="mt-2 text-sm opacity-80">Mitglied im Südbadischen Fußballverband</p>
          </div>

          <div>
            <span className="text-lg font-semibold mb-4 block">Kontakt</span>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="tel:+4978214913" className="hover:text-primary transition-all duration-200">
                  07821 4913
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="mailto:fclahrwest@aol.com" className="hover:text-primary transition-all duration-200">
                  fclahrwest@aol.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <span className="text-lg font-semibold mb-4 block">Adresse</span>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-all duration-200 flex items-center gap-1"
                >
                  <span>
                    Flugplatzstraße 105<br />
                    77933 Lahr/Schwarzwald
                  </span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Instagram className="h-4 w-4 text-primary" />
                <a
                  href="https://instagram.com/fc_lahr_west"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-all duration-200"
                >
                  @fc_lahr_west
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-accent-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
            <p>&copy; 2026 FC Lahr-West 1975 e.V. Alle Rechte vorbehalten.</p>
            <div className="flex gap-6">
              <Link href="/datenschutz" className="hover:text-primary transition-all duration-200">Datenschutz</Link>
              <a href="#" className="hover:text-primary transition-all duration-200">Impressum</a>
              <button
                onClick={openCookieBanner}
                className="hover:text-primary transition-all duration-200"
              >
                Cookie-Einstellungen
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
