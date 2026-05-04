'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, Shield, Settings } from 'lucide-react';

type ConsentPreferences = {
  necessary: true;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
};

type StoredConsent = ConsentPreferences & { timestamp: string };

const STORAGE_KEY = 'cookieConsent';

function loadConsent(): StoredConsent | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as StoredConsent) : null;
  } catch {
    return null;
  }
}

function saveConsent(prefs: ConsentPreferences) {
  const stored: StoredConsent = { ...prefs, timestamp: new Date().toISOString() };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
}

export default function CookieBanner() {
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(false);
  const [configOpen, setConfigOpen] = useState(false);
  const [functional, setFunctional] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    setMounted(true);
    const consent = loadConsent();
    if (process.env.NODE_ENV !== 'production') {
      console.log('[CookieBanner] init, consent =', consent);
    }
    if (!consent) {
      setShow(true);
    } else {
      setFunctional(consent.functional);
      setAnalytics(consent.analytics);
      setMarketing(consent.marketing);
    }
  }, []);

  useEffect(() => {
    const handler = () => {
      const consent = loadConsent();
      if (consent) {
        setFunctional(consent.functional);
        setAnalytics(consent.analytics);
        setMarketing(consent.marketing);
      }
      setConfigOpen(false);
      setShow(true);
    };
    window.addEventListener('openCookieBanner', handler);
    return () => window.removeEventListener('openCookieBanner', handler);
  }, []);

  const acceptAll = () => {
    if (process.env.NODE_ENV !== 'production') console.log('[CookieBanner] acceptAll clicked');
    saveConsent({ necessary: true, functional: true, analytics: true, marketing: true });
    setFunctional(true);
    setAnalytics(true);
    setMarketing(true);
    setConfigOpen(false);
    setShow(false);
  };

  const rejectAll = () => {
    if (process.env.NODE_ENV !== 'production') console.log('[CookieBanner] rejectAll clicked');
    saveConsent({ necessary: true, functional: false, analytics: false, marketing: false });
    setFunctional(false);
    setAnalytics(false);
    setMarketing(false);
    setConfigOpen(false);
    setShow(false);
  };

  const saveCustom = () => {
    if (process.env.NODE_ENV !== 'production') console.log('[CookieBanner] saveCustom clicked');
    saveConsent({ necessary: true, functional, analytics, marketing });
    setConfigOpen(false);
    setShow(false);
  };

  if (!mounted || !show) return null;

  return (
    <>
      {!configOpen && (
        <div
          className="cookie-banner-wrapper fixed bottom-0 left-0 right-0 z-[2147483647] p-4 md:p-6 pointer-events-none"
          style={{ paddingBottom: 'max(1rem, env(safe-area-inset-bottom))' }}
        >
          <div className="cookie-banner-card max-w-5xl mx-auto bg-background border border-border rounded-2xl shadow-2xl p-5 md:p-6 pointer-events-auto">
            <div className="flex flex-col lg:flex-row lg:items-center gap-4">
              <div className="flex items-start gap-3 flex-1">
                <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm mb-1">Wir verwenden Cookies</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Wir nutzen Cookies, um Ihnen die bestmögliche Nutzererfahrung zu bieten und unsere
                    Website kontinuierlich zu verbessern. Weitere Informationen finden Sie in unserer{' '}
                    <Link href="/datenschutz" className="text-primary hover:underline">
                      Datenschutzerklärung
                    </Link>
                    .
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 lg:flex lg:items-center lg:gap-3 lg:flex-shrink-0">
                <button
                  type="button"
                  onClick={rejectAll}
                  className="px-4 py-2.5 text-sm font-medium rounded-xl border border-border hover:bg-muted transition-colors whitespace-nowrap"
                >
                  Reject all
                </button>
                <button
                  type="button"
                  onClick={() => setConfigOpen(true)}
                  className="px-4 py-2.5 text-sm font-medium rounded-xl border border-primary text-primary hover:bg-primary/10 transition-colors whitespace-nowrap"
                >
                  Configure
                </button>
                <button
                  type="button"
                  onClick={acceptAll}
                  className="px-4 py-2.5 text-sm font-medium rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors whitespace-nowrap"
                >
                  Accept all
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {configOpen && (
        <div
          className="fixed inset-0 z-[2147483647] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setConfigOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-background rounded-2xl shadow-2xl border border-border w-full max-w-lg max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold">Cookie-Einstellungen</h2>
              </div>
              <button
                type="button"
                onClick={() => setConfigOpen(false)}
                className="p-1 rounded-lg hover:bg-muted transition-colors"
                aria-label="Schließen"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Hier können Sie Ihre Cookie-Präferenzen verwalten. Notwendige Cookies sind immer aktiv,
                da sie für den Betrieb der Website erforderlich sind.
              </p>

              <CategoryToggle
                title="Notwendige Cookies"
                description="Ermöglichen grundlegende Funktionen wie Seitennavigation und Zugang zu sicheren Bereichen. Die Website kann ohne diese Cookies nicht ordnungsgemäß funktionieren."
                checked={true}
                locked
              />
              <CategoryToggle
                title="Funktionale Cookies"
                description="Ermöglichen der Website, erweiterte Funktionalität und Personalisierung bereitzustellen, z.B. das Speichern Ihrer Spracheinstellungen."
                checked={functional}
                onChange={setFunctional}
              />
              <CategoryToggle
                title="Analyse-Cookies"
                description="Helfen uns zu verstehen, wie Besucher mit der Website interagieren, indem Informationen anonym gesammelt und gemeldet werden."
                checked={analytics}
                onChange={setAnalytics}
              />
              <CategoryToggle
                title="Marketing-Cookies"
                description="Werden verwendet, um Besucher über verschiedene Websites hinweg zu verfolgen und relevante Werbung anzuzeigen."
                checked={marketing}
                onChange={setMarketing}
              />
            </div>

            <div className="p-6 border-t border-border grid grid-cols-3 gap-3">
              <button
                type="button"
                onClick={rejectAll}
                className="px-4 py-2.5 text-sm font-medium rounded-xl border border-border hover:bg-muted transition-colors"
              >
                Reject all
              </button>
              <button
                type="button"
                onClick={saveCustom}
                className="px-4 py-2.5 text-sm font-medium rounded-xl border border-primary text-primary hover:bg-primary/10 transition-colors"
              >
                Save settings
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="px-4 py-2.5 text-sm font-medium rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Accept all
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

type CategoryToggleProps = {
  title: string;
  description: string;
  checked: boolean;
  locked?: boolean;
  onChange?: (val: boolean) => void;
};

function CategoryToggle({ title, description, checked, locked, onChange }: CategoryToggleProps) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl bg-muted">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-sm font-medium">{title}</span>
          {locked && (
            <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
              Immer aktiv
            </span>
          )}
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={locked}
        onClick={() => onChange?.(!checked)}
        className={`relative inline-flex h-6 w-11 flex-shrink-0 rounded-full border-2 border-transparent transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 mt-0.5 ${
          locked ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'
        } ${checked ? 'bg-primary' : 'bg-muted-foreground/30'}`}
      >
        <span
          className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
            checked ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </button>
    </div>
  );
}
