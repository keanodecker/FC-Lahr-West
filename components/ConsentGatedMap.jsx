'use client';

import useCookieConsent from '@/hooks/useCookieConsent';
import { MapPin, ExternalLink } from 'lucide-react';

/**
 * Google-Karte, die erst nach ausdrücklicher Einwilligung geladen wird.
 *
 * Ohne Einwilligung wird der iframe gar nicht erst eingebunden – so geht keine
 * Anfrage und damit keine IP-Adresse an Google. Stattdessen erscheint eine
 * Platzhalterfläche mit einer Schaltfläche, die den Cookie-Banner erneut
 * öffnet. Sagt der Besucher dort zu, erscheint die Karte sofort, ohne dass
 * die Seite neu geladen werden muss.
 */
export default function ConsentGatedMap({ title, src, mapsUrl }) {
  const { functional, ready } = useCookieConsent();

  const openBanner = () => window.dispatchEvent(new Event('openCookieBanner'));

  if (ready && functional) {
    return (
      <iframe
        title={title}
        src={src}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    );
  }

  return (
    <div className="h-full w-full bg-muted flex flex-col items-center justify-center text-center px-6 py-8">
      <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
        <MapPin className="h-7 w-7 text-primary" />
      </div>
      <p className="font-semibold mb-2">Karte ist ausgeblendet</p>
      <p className="text-sm text-muted-foreground max-w-md leading-relaxed mb-5">
        Um die Karte anzuzeigen, wird eine Verbindung zu Google Maps aufgebaut. Dabei wird
        Ihre IP-Adresse an Google übertragen. Die Karte wird deshalb erst geladen, wenn Sie
        funktionale Cookies zulassen.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          type="button"
          onClick={openBanner}
          className="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium
                     hover:bg-primary/90 transition-colors"
        >
          Karte laden &amp; Cookies zulassen
        </button>
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-xl border border-border text-sm font-medium
                     hover:bg-background transition-colors inline-flex items-center justify-center gap-2"
        >
          In Google Maps öffnen <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
