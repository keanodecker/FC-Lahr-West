'use client';

import { useRef, useState } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Send } from 'lucide-react';

const interests = [
  { value: 'trikot', label: 'Trikotwerbung' },
  { value: 'bande', label: 'Bandenwerbung' },
  { value: 'beides', label: 'Beides' },
  { value: 'sonstiges', label: 'Noch offen' },
];

export default function SponsorForm() {
  const [interest, setInterest] = useState('trikot');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const data = new FormData(formRef.current);
      data.set('interest', interest);

      const res = await fetch('/api/sponsoring', { method: 'POST', body: data });
      const json = await res.json().catch(() => ({}));

      if (res.ok) {
        toast.success('Vielen Dank! Ihre Anfrage ist bei uns – wir melden uns zeitnah.');
        formRef.current.reset();
        setInterest('trikot');
      } else {
        toast.error(json.error || 'Fehler beim Senden. Bitte versuchen Sie es später erneut.');
      }
    } catch {
      toast.error('Fehler beim Senden. Bitte versuchen Sie es später erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={onSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="company">Firma *</Label>
          <Input id="company" name="company" required placeholder="Muster GmbH" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact">Ansprechpartner *</Label>
          <Input id="contact" name="contact" required placeholder="Vor- und Nachname" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">E-Mail *</Label>
          <Input id="email" name="email" type="email" required placeholder="kontakt@firma.de" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Telefon</Label>
          <Input id="phone" name="phone" type="tel" placeholder="07821 123456" />
        </div>
      </div>

      <div className="space-y-3">
        <Label>Woran haben Sie Interesse?</Label>
        <div className="flex flex-wrap gap-2">
          {interests.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => setInterest(option.value)}
              aria-pressed={interest === option.value}
              className={`px-4 py-2 rounded-xl border text-sm font-medium transition-all duration-200 ${
                interest === option.value
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-background border-border text-foreground hover:border-primary'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Nachricht</Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Erzählen Sie uns kurz, was Sie vorhaben – Zeitraum, Budgetrahmen, Wünsche…"
          className="resize-none"
        />
      </div>

      {/* Der Datei-Upload ist vorerst deaktiviert. Logo und Druckdaten klären
          wir nach der Anfrage direkt per E-Mail – so läuft es in der Branche
          ohnehin meistens. Die Gegenstelle in app/api/sponsoring nimmt
          Anhänge weiterhin entgegen, falls wir das später wieder aktivieren. */}
      <div className="bg-muted/60 border border-border rounded-xl p-4 text-xs text-muted-foreground leading-relaxed">
        <p className="font-medium text-foreground mb-1">Logo und Druckdaten</p>
        Schicken Sie hier noch keine Dateien mit – wir melden uns nach Ihrer Anfrage per
        E-Mail und stimmen Logo, Format und Druckdaten dann in Ruhe direkt mit Ihnen ab.
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full transition-all duration-200 active:scale-[0.98]"
      >
        {isSubmitting ? (
          'Wird gesendet...'
        ) : (
          <>
            <Send className="h-4 w-4 mr-2" />
            Anfrage senden
          </>
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        Mit dem Absenden erklären Sie sich einverstanden, dass wir Ihre Angaben zur Bearbeitung
        der Anfrage verwenden. Mehr dazu in unserer{' '}
        <a href="/datenschutz" className="text-primary hover:underline">
          Datenschutzerklärung
        </a>
        .
      </p>
    </form>
  );
}
