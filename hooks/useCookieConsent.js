'use client';

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'cookieConsent';
export const CONSENT_CHANGED_EVENT = 'cookieConsentChanged';

function read() {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

/**
 * Liefert den aktuellen Einwilligungsstand.
 *
 * `null` bedeutet: noch keine Entscheidung getroffen (Banner läuft noch).
 * Das ist bewusst von "abgelehnt" unterschieden, damit eingebettete Dienste
 * vor der Entscheidung nicht laden – Einwilligung muss aktiv erteilt werden.
 *
 * Aktualisiert sich sofort, wenn der Banner eine neue Auswahl speichert
 * (eigenes Ereignis) oder in einem anderen Tab etwas geändert wird (storage).
 */
export default function useCookieConsent() {
  const [consent, setConsent] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setConsent(read());
    setReady(true);

    const update = () => setConsent(read());
    window.addEventListener(CONSENT_CHANGED_EVENT, update);
    window.addEventListener('storage', update);
    return () => {
      window.removeEventListener(CONSENT_CHANGED_EVENT, update);
      window.removeEventListener('storage', update);
    };
  }, []);

  return {
    consent,
    ready,
    functional: Boolean(consent?.functional),
    analytics: Boolean(consent?.analytics),
    marketing: Boolean(consent?.marketing),
  };
}
