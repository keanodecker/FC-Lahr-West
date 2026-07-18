'use client';

import ScrollTriggerFadeIn from './ScrollTriggerFadeIn';
import HoverGlowCard from './HoverGlowCard';
import { Phone, Mail, User } from 'lucide-react';

const trainers = [
  {
    name: 'Andi Paschke',
    role: 'Trainer',
    phone: '0176 21050524',
    phoneHref: 'tel:+4917621050524',
    email: null,
  },
  {
    name: 'Alexandro Roccaro',
    role: 'Trainer',
    phone: '0171 3274609',
    phoneHref: 'tel:+491713274609',
    email: 'alex.roccaro@web.de',
  },
];

export default function TrainersSection() {
  return (
    <section id="trainers" className="py-20 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollTriggerFadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
            Unser Trainerteam
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Die Menschen, die unsere Mannschaften Woche für Woche auf den Platz bringen.
            Meld dich direkt bei uns – wir freuen uns über jeden, der mitmachen will.
          </p>
        </ScrollTriggerFadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {trainers.map((trainer, index) => (
            <ScrollTriggerFadeIn key={trainer.name} delay={index * 0.15}>
              <HoverGlowCard className="bg-card border border-border rounded-2xl p-8 h-full flex flex-col items-center text-center transition-all duration-300">
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mb-5">
                  <User className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-1">{trainer.name}</h3>
                <p className="text-primary font-medium mb-5">{trainer.role}</p>

                <div className="space-y-3 w-full mt-auto">
                  <a
                    href={trainer.phoneHref}
                    className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="h-4 w-4 flex-shrink-0" />
                    {trainer.phone}
                  </a>
                  {trainer.email && (
                    <a
                      href={`mailto:${trainer.email}`}
                      className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                    >
                      <Mail className="h-4 w-4 flex-shrink-0" />
                      {trainer.email}
                    </a>
                  )}
                </div>
              </HoverGlowCard>
            </ScrollTriggerFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
