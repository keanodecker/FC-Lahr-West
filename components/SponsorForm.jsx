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
  { value: 'anderes', label: 'Etwas anderes' },
  { value: 'offen', label: 'Noch offen' },
];

export default function SponsorForm() {
  // Mehrfachauswahl: „Beides“ entfällt, man wählt einfach Trikot- und
  // Bandenwerbung zusammen an.
  const [selected, setSelected] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  const toggleInterest = (value) => {
    setSelected((current) =>
      current.includes(value) ? current.filter((v) => v !== value) : [...current, value]
    );
  };

  // Bei „Etwas anderes“ steht im Formular sonst nichts Verwertbares – ohne ein
  // paar Zeilen wüssten wir nicht, worum es überhaupt geht.
  const needsDetails = selected.includes('anderes');

  const onSubmit = async (e) => {
    e.preventDefault();

    if (selected.length === 0) {
      toast.error('Bitte wählen Sie mindestens eine Möglichkeit aus.');
      return;
    }

    setIsSubmitting(true);

    try {
      const data = new FormData(formRef.current);
      // Die Reihenfolge der Buttons beibehalten, nicht die Klick-Reihenfolge –
      // so liest sich die Anfrage in der Mail immer gleich.
      const ordered = interests.filter((o) => selected.includes(o.value)).map((o) => o.value);
      data.set('interest', ordered.join(','));

      const res = await fetch('/api/sponsoring', { method: 'POST', body: data });
      const json = await res.json().catch(() => ({}));

      if (res.ok) {
        toast.success('Vielen Dank! Ihre Anfrage ist bei uns – wir melden uns zeitnah.');
        formRef.current.reset();
        setSelected([]);
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
        <div className="space-y-1">
          <Label>Woran haben Sie Interesse?</Label>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Mehrfachauswahl möglich. Trikot- und Bandenwerbung sind unsere gängigsten Wege. Sie
            haben etwas anderes im Sinn – etwa eine Aktion, eine Sachspende oder die Unterstützung
            einer einzelnen Mannschaft? Wählen Sie „Etwas anderes“ und schreiben Sie uns kurz, was
            Ihnen vorschwebt.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {interests.map((option) => {
            const active = selected.includes(option.value);
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => toggleInterest(option.value)}
                aria-pressed={active}
                className={`px-4 py-2 rounded-xl border text-sm font-medium transition-all duration-200 ${
                  active
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-background border-border text-foreground hover:border-primary'
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Nachricht{needsDetails ? ' *' : ''}</Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          required={needsDetails}
          placeholder={
            needsDetails
              ? 'Was schwebt Ihnen vor? Beschreiben Sie kurz Ihre Idee – wir schauen, wie wir sie umsetzen können.'
              : 'Erzählen Sie uns kurz, was Sie vorhaben – Zeitraum, Budgetrahmen, Wünsche…'
          }
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
        E-Mail und stimmen Logo, Format und Druckdaten dann in Ruhe direkt mit Ihnen ab. Große
        Designs können Sie direkt an{' '}
        <a
          href="mailto:mail@cesardienstleistungen.de"
          className="text-primary hover:underline"
        >
          mail@cesardienstleistungen.de
        </a>{' '}
        schicken.
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
