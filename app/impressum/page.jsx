export const metadata = {
  title: 'Impressum – FC Lahr-West 1975 e.V.',
  description: 'Impressum und Anbieterkennzeichnung des FC Lahr-West 1975 e.V.',
};

/**
 * Das Registergericht ergibt sich aus dem Vereinssitz: Die Vereinsregister in
 * Baden-Württemberg werden seit 2014 zentral bei den Amtsgerichten Freiburg,
 * Mannheim, Stuttgart und Ulm geführt. Für den Ortenaukreis – und damit für
 * Lahr – ist das Amtsgericht Freiburg zuständig.
 *
 * NOCH ZU ERGÄNZEN: die Vereinsregisternummer. Sie steht im Registerauszug und
 * meist auch auf dem Freistellungsbescheid des Finanzamts. Vereine, die früher
 * beim Amtsgericht Lahr geführt wurden, haben bei der Umstellung die Kennziffer
 * 39 vorangestellt bekommen (Format: 'VR 39...'). Sobald die Nummer hier
 * eingetragen ist, erscheint die Zeile automatisch im Impressum – bis dahin
 * bleibt sie weg, statt eine erfundene Nummer auszuweisen.
 */
const REGISTER = {
  gericht: 'Amtsgericht Freiburg',
  nummer: null,
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-background pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-2">Impressum</h1>
        <p className="text-muted-foreground mb-10">
          Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)
        </p>

        <Section title="Anbieter">
          <address className="not-italic space-y-1">
            <p className="font-medium text-foreground">FC Lahr-West 1975 e.V.</p>
            <p>Doler Platz 3</p>
            <p>77933 Lahr/Schwarzwald</p>
          </address>
        </Section>

        <Section title="Vertreten durch">
          <p className="font-medium text-foreground">Sezer Ülker</p>
          <p>1. Vorsitzender</p>
        </Section>

        <Section title="Kontakt">
          <p>
            Telefon:{' '}
            <a href="tel:+4978214913" className="text-primary hover:underline">
              07821 4913
            </a>
          </p>
          <p>
            E-Mail:{' '}
            <a href="mailto:fclahrwest@aol.com" className="text-primary hover:underline">
              fclahrwest@aol.com
            </a>
          </p>
        </Section>

        <Section title="Registereintrag">
          <p>
            Eintragung im Vereinsregister
            <br />
            Registergericht: {REGISTER.gericht}
            {REGISTER.nummer && (
              <>
                <br />
                Registernummer: {REGISTER.nummer}
              </>
            )}
          </p>
        </Section>

        <Section title="Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV">
          <address className="not-italic space-y-1">
            <p className="font-medium text-foreground">Sezer Ülker</p>
            <p>Doler Platz 3</p>
            <p>77933 Lahr/Schwarzwald</p>
          </address>
        </Section>

        <Section title="Streitschlichtung">
          <p className="mb-3">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
            bereit:{' '}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
          </p>
          <p>
            Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </Section>

        <Section title="Haftung für Inhalte">
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten
            nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als
            Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
            Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
            Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine
            diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
            Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden
            wir diese Inhalte umgehend entfernen.
          </p>
        </Section>

        <Section title="Haftung für Links">
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
            Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
            übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
            Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
            Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
            Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der
            verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
            zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend
            entfernen.
          </p>
        </Section>

        <Section title="Urheberrecht">
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
            dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
            der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
            Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind
            nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf
            dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
            beachtet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten
            wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir
            derartige Inhalte umgehend entfernen.
          </p>
        </Section>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold mb-4 text-foreground">{title}</h2>
      <div className="text-muted-foreground leading-relaxed space-y-2">{children}</div>
    </section>
  );
}
