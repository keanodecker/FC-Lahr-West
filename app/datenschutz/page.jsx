export const metadata = {
  title: 'Datenschutzerklärung – FC Lahr-West 1975 e.V.',
  description: 'Datenschutzerklärung des FC Lahr-West 1975 e.V. gemäß DSGVO.',
};

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-background pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-2">Datenschutzerklärung</h1>
        <p className="text-muted-foreground mb-10">Stand: Mai 2026</p>

        <Section title="1. Verantwortlicher">
          <p>
            Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
          </p>
          <address className="not-italic mt-3 space-y-1 text-muted-foreground">
            <p className="font-medium text-foreground">FC Lahr-West 1975 e.V.</p>
            <p>Flugplatzstraße 105</p>
            <p>77933 Lahr/Schwarzwald</p>
            <p>Telefon: 07821 4913</p>
            <p>E-Mail: fclahrwest@aol.com</p>
          </address>
        </Section>

        <Section title="2. Allgemeines zur Datenverarbeitung">
          <p>
            Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur
            Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen
            erforderlich ist. Die Verarbeitung personenbezogener Daten unserer Nutzer erfolgt
            regelmäßig nur nach Einwilligung des Nutzers. Eine Ausnahme gilt in solchen Fällen, in
            denen eine vorherige Einholung einer Einwilligung aus tatsächlichen Gründen nicht möglich
            ist und die Verarbeitung der Daten durch gesetzliche Vorschriften gestattet ist.
          </p>
        </Section>

        <Section title="3. Cookies">
          <p className="mb-4">
            Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät
            gespeichert werden und bestimmte Einstellungen und Daten zum Austausch mit unserem System
            über Ihren Browser speichern. Ein Cookie enthält in der Regel den Namen der Domain, von
            der die Cookie-Daten gesendet wurden, sowie Informationen über das Alter des Cookies und
            eine alphanumerische Kennung.
          </p>
          <p className="mb-6">
            Wir verwenden die folgenden Kategorien von Cookies:
          </p>

          <div className="space-y-4">
            <CookieCategory
              name="Notwendige Cookies"
              basis="Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO)"
              alwaysActive
              description="Diese Cookies sind für den Betrieb der Website unbedingt erforderlich und können nicht
                deaktiviert werden. Sie werden in der Regel als Reaktion auf von Ihnen durchgeführte
                Aktionen gesetzt, wie z.B. das Festlegen Ihrer Datenschutzeinstellungen. Sie können
                Ihren Browser so einstellen, dass er diese Cookies blockiert, aber dann werden einige
                Teile der Website möglicherweise nicht funktionieren."
            />
            <CookieCategory
              name="Funktionale Cookies"
              basis="Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)"
              description="Diese Cookies ermöglichen der Website, erweiterte Funktionalität und Personalisierung
                bereitzustellen. Sie können von uns oder von Drittanbietern gesetzt werden, deren
                Dienste wir auf unseren Seiten eingebunden haben. Wenn Sie diese Cookies nicht
                zulassen, funktionieren einige oder alle dieser Dienste möglicherweise nicht
                einwandfrei."
            />
            <CookieCategory
              name="Analyse-Cookies"
              basis="Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)"
              description="Diese Cookies ermöglichen es uns, Besuche und Verkehrsquellen zu zählen, damit wir
                die Leistung unserer Website messen und verbessern können. Sie helfen uns zu wissen,
                welche Seiten am beliebtesten und welche am wenigsten beliebt sind, und zu sehen, wie
                sich Besucher auf der Website bewegen. Alle von diesen Cookies gesammelten
                Informationen werden aggregiert und sind daher anonym."
            />
            <CookieCategory
              name="Marketing-Cookies"
              basis="Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)"
              description="Diese Cookies können über unsere Website von unseren Werbepartnern gesetzt werden.
                Sie können von diesen Unternehmen verwendet werden, um ein Profil Ihrer Interessen
                zu erstellen und Ihnen relevante Werbung auf anderen Websites zu zeigen. Sie
                speichern keine direkten persönlichen Informationen, basieren jedoch auf der
                eindeutigen Identifizierung Ihres Browsers und Internet-Geräts."
            />
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            Ihre Cookie-Einstellungen werden im lokalen Speicher (localStorage) Ihres Browsers unter
            dem Schlüssel <code className="bg-muted px-1 py-0.5 rounded text-xs">cookieConsent</code> gespeichert.
            Sie können Ihre Einwilligung jederzeit über den Link „Cookie-Einstellungen" im Footer
            dieser Website widerrufen oder anpassen.
          </p>
        </Section>

        <Section title="4. Kontaktformular">
          <p>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
            Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung
            der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben
            wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung der in das Kontaktformular
            eingegebenen Daten erfolgt ausschließlich auf Grundlage Ihrer Einwilligung
            (Art. 6 Abs. 1 lit. a DSGVO). Wir verwenden den Dienst Resend (Resend Inc.,
            2261 Market Street #5039, San Francisco, CA 94114, USA) zur Übermittlung von E-Mails.
          </p>
        </Section>

        <Section title="5. Google Maps">
          <p>
            Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited,
            Gordon House, Barrow Street, Dublin 4, Irland. Zur Nutzung der Funktionen von Google Maps
            ist es notwendig, Ihre IP-Adresse zu speichern. Diese Informationen werden in der Regel
            an einen Server von Google in den USA übertragen und dort gespeichert. Der Anbieter dieser
            Seite hat keinen Einfluss auf diese Datenübertragung. Die Nutzung von Google Maps erfolgt
            im Interesse einer ansprechenden Darstellung unserer Online-Angebote und an einer leichten
            Auffindbarkeit der von uns auf der Website angegebenen Orte. Dies stellt ein berechtigtes
            Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar. Mehr Informationen zum Umgang mit
            Nutzerdaten finden Sie in der Datenschutzerklärung von Google.
          </p>
        </Section>

        <Section title="6. Ihre Rechte">
          <p className="mb-3">Sie haben das Recht:</p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen;</li>
            <li>gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen;</li>
            <li>gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen;</li>
            <li>gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen;</li>
            <li>gemäß Art. 20 DSGVO Ihre personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten;</li>
            <li>gemäß Art. 7 Abs. 3 DSGVO Ihre einmal erteilte Einwilligung jederzeit gegenüber uns zu widerrufen;</li>
            <li>gemäß Art. 77 DSGVO sich bei einer Aufsichtsbehörde zu beschweren.</li>
          </ul>
        </Section>

        <Section title="7. Widerrufsrecht">
          <p>
            Sie haben das Recht, Ihre datenschutzrechtliche Einwilligungserklärung jederzeit zu
            widerrufen. Durch den Widerruf der Einwilligung wird die Rechtmäßigkeit der aufgrund der
            Einwilligung bis zum Widerruf erfolgten Verarbeitung nicht berührt. Ihre
            Cookie-Einstellungen können Sie jederzeit über den Link „Cookie-Einstellungen" im Footer
            dieser Website anpassen oder widerrufen.
          </p>
        </Section>

        <Section title="8. Aktualität und Änderung dieser Datenschutzerklärung">
          <p>
            Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Mai 2026. Durch die
            Weiterentwicklung unserer Website und Angebote oder aufgrund geänderter gesetzlicher
            beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese
            Datenschutzerklärung zu ändern.
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
      <div className="text-muted-foreground leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

function CookieCategory({ name, basis, description, alwaysActive }) {
  return (
    <div className="rounded-xl border border-border p-4">
      <div className="flex items-start justify-between gap-4 mb-2">
        <div>
          <span className="font-medium text-foreground">{name}</span>
          <p className="text-xs text-muted-foreground mt-0.5">Rechtsgrundlage: {basis}</p>
        </div>
        {alwaysActive && (
          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full whitespace-nowrap flex-shrink-0">
            Immer aktiv
          </span>
        )}
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
