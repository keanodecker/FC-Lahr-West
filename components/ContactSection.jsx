'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import ScrollTriggerFadeIn from './ScrollTriggerFadeIn';
import ScrollTriggerSlideIn from './ScrollTriggerSlideIn';
import ConsentGatedMap from './ConsentGatedMap';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Mail, Phone, MapPin, Send, ExternalLink } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Name muss mindestens 2 Zeichen lang sein'),
  email: z.string().email('Ungültige E-Mail-Adresse'),
  message: z.string().min(10, 'Nachricht muss mindestens 10 Zeichen lang sein'),
});

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const mapsUrl = 'https://maps.google.com/?q=Flugplatzstraße+105,+77933+Lahr';

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', email: '', message: '' },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        toast.success('Nachricht gesendet! Wir melden uns so bald wie möglich.');
        form.reset();
      } else {
        toast.error('Fehler beim Senden. Bitte versuche es später erneut.');
      }
    } catch {
      toast.error('Fehler beim Senden. Bitte versuche es später erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollTriggerFadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">
            Kontakt
          </h2>
        </ScrollTriggerFadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ScrollTriggerSlideIn direction="left">
            <div className="space-y-8">
              <div className="flex items-center gap-6 mb-8">
                <img
                  src="/logo.png"
                  alt="FC Lahr-West 1975 e.V. Logo"
                  className="h-20 w-auto object-contain"
                />
                <div>
                  <h3 className="text-2xl font-semibold">FC Lahr-West 1975 e.V.</h3>
                  <p className="text-sm text-muted-foreground mt-1">Gegründet 1975 · Lahr/Schwarzwald</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6">Kontaktieren Sie uns</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Haben Sie Fragen oder möchten Sie Teil unseres Vereins werden? Wir freuen uns auf
                  Ihre Nachricht!
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Telefon</p>
                    <a href="tel:+491713274609" className="text-primary hover:underline">
                      0171 3274609
                    </a>
                    <p className="text-xs text-muted-foreground mt-1">Trainer Alexandro Roccaro</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">E-Mail</p>
                    <a href="mailto:alex.roccaro@web.de" className="text-primary hover:underline">
                      alex.roccaro@web.de
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Adresse</p>
                    <a
                      href={mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline flex items-center gap-1"
                    >
                      <span>
                        Flugplatzstraße 105<br />
                        77933 Lahr/Schwarzwald
                      </span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    <Link
                      href="/vereinshaus"
                      className="block mt-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      Vereinsheim auf Anfrage zu mieten →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </ScrollTriggerSlideIn>

          <ScrollTriggerSlideIn direction="right">
            <div className="bg-card rounded-2xl shadow-lg p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Ihr Name"
                            {...field}
                            className="text-foreground placeholder:text-muted-foreground"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-Mail</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="ihre.email@beispiel.de"
                            {...field}
                            className="text-foreground placeholder:text-muted-foreground"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nachricht</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Ihre Nachricht an uns..."
                            rows={5}
                            {...field}
                            className="text-foreground placeholder:text-muted-foreground resize-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full transition-all duration-200 active:scale-[0.98]"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Wird gesendet...'
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Nachricht senden
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center leading-relaxed">
                    Große Designs bitte direkt an{' '}
                    <a
                      href="mailto:mail@cesardienstleistungen.de"
                      className="text-primary hover:underline"
                    >
                      mail@cesardienstleistungen.de
                    </a>{' '}
                    schicken.
                  </p>
                </form>
              </Form>
            </div>
          </ScrollTriggerSlideIn>
        </div>

        <div className="mt-12">
          <ScrollTriggerFadeIn>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-border h-80">
              <ConsentGatedMap
                title="FC Lahr-West Standort"
                src="https://maps.google.com/maps?q=Flugplatzstra%C3%9Fe+105,+77933+Lahr&output=embed&hl=de"
                mapsUrl={mapsUrl}
              />
            </div>
          </ScrollTriggerFadeIn>
        </div>
      </div>
    </section>
  );
}
