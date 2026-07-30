'use client';

import { useRef, useState } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Send, Upload, X, FileText } from 'lucide-react';

const MAX_UPLOAD_BYTES = 4 * 1024 * 1024;
const ACCEPT = '.png,.jpg,.jpeg,.webp,.svg,.pdf,.ai,.eps,.zip';

const interests = [
  { value: 'trikot', label: 'Trikotwerbung' },
  { value: 'bande', label: 'Bandenwerbung' },
  { value: 'beides', label: 'Beides' },
  { value: 'sonstiges', label: 'Noch offen' },
];

function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

export default function SponsorForm() {
  const [files, setFiles] = useState([]);
  const [interest, setInterest] = useState('trikot');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef(null);
  const formRef = useRef(null);

  const totalBytes = files.reduce((sum, f) => sum + f.size, 0);
  const tooLarge = totalBytes > MAX_UPLOAD_BYTES;

  const handleFileChange = (e) => {
    const picked = Array.from(e.target.files || []);
    setFiles((prev) => {
      const merged = [...prev];
      picked.forEach((f) => {
        if (!merged.some((m) => m.name === f.name && m.size === f.size)) merged.push(f);
      });
      return merged;
    });
    // damit dieselbe Datei erneut ausgewählt werden kann
    e.target.value = '';
  };

  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (tooLarge) {
      toast.error('Die Dateien sind zusammen zu groß. Bitte nutzen Sie das Link-Feld darunter.');
      return;
    }

    setIsSubmitting(true);
    try {
      const data = new FormData(formRef.current);
      data.delete('files');
      files.forEach((f) => data.append('files', f));
      data.set('interest', interest);

      const res = await fetch('/api/sponsoring', { method: 'POST', body: data });
      const json = await res.json().catch(() => ({}));

      if (res.ok) {
        toast.success('Vielen Dank! Ihre Anfrage ist bei uns – wir melden uns zeitnah.');
        formRef.current.reset();
        setFiles([]);
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

      {/* Datei-Upload */}
      <div className="space-y-3">
        <Label>Logo oder Design mitschicken</Label>

        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="w-full border-2 border-dashed border-border rounded-xl p-6 text-center
                     hover:border-primary hover:bg-primary/5 transition-all duration-200"
        >
          <Upload className="h-6 w-6 text-primary mx-auto mb-2" />
          <span className="block text-sm font-medium">Dateien auswählen</span>
          <span className="block text-xs text-muted-foreground mt-1">
            PNG, JPG, SVG, PDF, AI, EPS oder ZIP · zusammen max. 4 MB
          </span>
        </button>

        <input
          ref={fileInputRef}
          type="file"
          name="files"
          multiple
          accept={ACCEPT}
          onChange={handleFileChange}
          className="sr-only"
        />

        {files.length > 0 && (
          <ul className="space-y-2">
            {files.map((file, index) => (
              <li
                key={`${file.name}-${index}`}
                className="flex items-center gap-3 bg-muted rounded-lg px-3 py-2 text-sm"
              >
                <FileText className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="flex-1 truncate">{file.name}</span>
                <span className="text-xs text-muted-foreground flex-shrink-0">
                  {formatSize(file.size)}
                </span>
                <button
                  type="button"
                  onClick={() => removeFile(index)}
                  aria-label={`${file.name} entfernen`}
                  className="text-muted-foreground hover:text-primary transition-colors flex-shrink-0"
                >
                  <X className="h-4 w-4" />
                </button>
              </li>
            ))}
          </ul>
        )}

        {files.length > 0 && (
          <p className={`text-xs ${tooLarge ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
            {formatSize(totalBytes)} von 4 MB belegt
            {tooLarge && ' – zu groß, bitte nutzen Sie stattdessen das Link-Feld.'}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="fileLink">Link zu großen Dateien</Label>
        <Input
          id="fileLink"
          name="fileLink"
          type="url"
          placeholder="https://wetransfer.com/…"
        />
        <p className="text-xs text-muted-foreground">
          Für druckfertige Daten über 4 MB: einfach per WeTransfer, Dropbox oder Google Drive
          hochladen und den Link hier einfügen.
        </p>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting || tooLarge}
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
