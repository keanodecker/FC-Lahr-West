'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import ScrollTriggerFadeIn from './ScrollTriggerFadeIn';
import ScrollTriggerSlideIn from './ScrollTriggerSlideIn';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Mail, Phone, MapPin, Send, ExternalLink, Star } from 'lucide-react';

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
                  src="https://horizons-cdn.hostinger.com/5253aa88-5df7-412d-839f-0a29150c6335/a050f4f0a8ae68318c3faec4baec3687.png"
                  alt="FC Lahr-West 1975 e.V. Logo"
                  className="h-20 w-auto object-contain"
                />
                <div>
                  <h3 className="text-2xl font-semibold">FC Lahr-West 1975 e.V.</h3>
                  <div className="flex items-center gap-1 mt-2">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground ml-2">3.9 (14 Bewertungen)</span>
                  </div>
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
                    <a href="tel:+4978214913" className="text-primary hover:underline">
                      07821 4913
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">E-Mail</p>
                    <a href="mailto:fclahrwest@aol.com" className="text-primary hover:underline">
                      fclahrwest@aol.com
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
                </form>
              </Form>
            </div>
          </ScrollTriggerSlideIn>
        </div>

        <div className="mt-12">
          <ScrollTriggerFadeIn>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-border h-80">
              <iframe
                title="FC Lahr-West Standort"
                src="https://maps.google.com/maps?q=Flugplatzstra%C3%9Fe+105,+77933+Lahr&output=embed&hl=de"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollTriggerFadeIn>
        </div>
      </div>
    </section>
  );
}
