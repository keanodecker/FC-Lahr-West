'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Wo befindet sich der FC Lahr-West?',
    answer:
      'Unser Sportplatz befindet sich in der Flugplatzstraße 105, 77933 Lahr/Schwarzwald. Du findest uns mitten im Stadtteil Lahr-West – gut erreichbar mit dem Auto und öffentlichen Verkehrsmitteln.',
  },
  {
    question: 'Wie kann ich Mitglied beim FC Lahr-West werden?',
    answer:
      'Um Mitglied zu werden, kontaktiere uns einfach telefonisch unter 07821 4913 oder per E-Mail an fclahrwest@aol.com. Wir freuen uns über jeden, der unsere Leidenschaft für den Fußball teilt – egal ob jung oder alt.',
  },
  {
    question: 'Wie kann ich ein Probetraining vereinbaren?',
    answer:
      'Probetraining ist jederzeit möglich! Schreib uns eine E-Mail oder ruf uns an, und wir stimmen einen Termin ab. Du kannst auch einfach zu einer unserer regulären Trainingseinheiten vorbeikommen und dich vorstellen.',
  },
  {
    question: 'Brauche ich Vorkenntnisse oder Vorbedingungen?',
    answer:
      'Nein! Wir nehmen Spieler aller Erfahrungsstufen auf. Ob Anfänger oder erfahrener Kicker – bei uns zählen Teamgeist, Leidenschaft und der Spaß am Spiel. Wichtig ist nur die Freude am Fußball.',
  },
  {
    question: 'Welche Mannschaften hat der FC Lahr-West?',
    answer:
      'Wir haben aktuell zwei Herrenmannschaften: Die 1. Herren spielen in der Kreisliga B Staffel III, während die 2. Herren regelmäßig Freundschaftsspiele bestreiten. Beide Teams trainieren engagiert und freuen sich über Verstärkung.',
  },
  {
    question: 'Wie oft und wann wird trainiert?',
    answer:
      'Beide Mannschaften trainieren regelmäßig unter der Woche. Genaue Trainingszeiten und -tage erfährst du bei der Kontaktaufnahme oder direkt vor Ort. In der Regel finden pro Woche zwei bis drei Trainingseinheiten statt.',
  },
  {
    question: 'Ab welchem Alter kann man beim FC Lahr-West spielen?',
    answer:
      'Unsere Herrenmannschaften sind für Spieler ab 18 Jahren offen. Für jüngere Fußballbegeisterte empfehlen wir den Kontakt zu benachbarten Vereinen mit Jugendabteilungen, wobei wir gerne weiterhelfen können.',
  },
];

export default function FAQSection() {
  return (
    <section className="bg-accent text-accent-foreground min-h-screen py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">FAQ</h1>
          <p className="text-accent-foreground/70 text-lg">
            Häufig gestellte Fragen – hier findest du schnelle Antworten.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-white/10 rounded-xl px-6 bg-white/5 hover:bg-white/10 transition-colors duration-200"
            >
              <AccordionTrigger className="text-base font-semibold text-accent-foreground hover:no-underline py-5 [&>svg]:text-primary [&>svg]:h-5 [&>svg]:w-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-accent-foreground/70 leading-relaxed pb-5 text-sm md:text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
