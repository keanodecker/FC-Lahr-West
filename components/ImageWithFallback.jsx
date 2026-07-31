'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Bild mit Ausweichmotiv.
 *
 * Lädt zuerst `src`. Schlägt das fehl (toter Link, blockierter Host,
 * Netzwerkfehler), wird still auf `fallbackSrc` umgeschaltet – statt das
 * kaputte Bildsymbol mit Alt-Text anzuzeigen.
 *
 * Es gibt zwei Wege zum Fehler, beide müssen abgedeckt sein:
 *  1. onError – wenn das Bild scheitert, nachdem React die Seite übernommen hat.
 *  2. Die Prüfung in useEffect – der Browser lädt Bilder schon aus dem
 *     servergerenderten HTML. Scheitert das Bild vor der Hydration, ist das
 *     error-Ereignis längst verpufft, bevor React seinen Handler anhängt.
 *     `complete && naturalWidth === 0` erkennt genau diesen Fall nachträglich.
 */
export default function ImageWithFallback({ src, fallbackSrc, alt, className, ...rest }) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const imgRef = useRef(null);

  useEffect(() => {
    setCurrentSrc(src);
  }, [src]);

  useEffect(() => {
    const img = imgRef.current;
    if (!img || currentSrc === fallbackSrc) return;
    if (img.complete && img.naturalWidth === 0) {
      setCurrentSrc(fallbackSrc);
    }
  }, [currentSrc, fallbackSrc]);

  return (
    <img
      ref={imgRef}
      src={currentSrc}
      alt={alt}
      className={className}
      onError={() => {
        if (currentSrc !== fallbackSrc) setCurrentSrc(fallbackSrc);
      }}
      {...rest}
    />
  );
}
