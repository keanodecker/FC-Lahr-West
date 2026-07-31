import { Resend } from 'resend';
import { MAIL_FROM, MAIL_RECIPIENT } from '@/lib/mail';

const resend = new Resend(process.env.RESEND_API_KEY);

// Konservatives Limit: der Upload muss durch die Serverless-Funktion des
// Hosters passen (Vercel erlaubt 4,5 MB pro Request). Base64 bläht die
// Datei im Anhang nochmal um ca. 33 % auf, deshalb bleiben wir darunter.
export const MAX_UPLOAD_BYTES = 4 * 1024 * 1024;

// Geprüft wird über die Dateiendung, nicht über den MIME-Typ: Browser melden
// für Druckdaten wie .ai, .eps oder .cdr je nach System einen leeren oder
// generischen Typ (application/octet-stream). Eine reine MIME-Prüfung würde
// entweder diese Formate blockieren oder – wenn man leere Typen durchlässt –
// beliebige Dateien akzeptieren.
const ALLOWED_EXTENSIONS = new Set([
  // Vektor / Druckdaten (bevorzugt)
  'ai', 'eps', 'pdf', 'svg', 'cdr',
  // Pixeldaten
  'png', 'jpg', 'jpeg', 'webp', 'tif', 'tiff',
  // Sammelcontainer
  'zip',
]);

function extensionOf(filename) {
  const match = /\.([a-z0-9]+)$/i.exec(String(filename || ''));
  return match ? match[1].toLowerCase() : '';
}

const INTEREST_LABELS = {
  trikot: 'Trikotwerbung',
  bande: 'Bandenwerbung',
  beides: 'Trikot- und Bandenwerbung',
  anderes: 'Etwas anderes (siehe Nachricht)',
  offen: 'Noch offen',
  // Altwert aus einer früheren Fassung des Formulars – bleibt stehen, damit
  // eine noch offene Seite im Browser keine kryptische Mail erzeugt.
  sonstiges: 'Sonstiges / noch offen',
};

function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function nl2br(str) {
  return escapeHtml(str).replace(/\n/g, '<br>');
}

function row(label, value) {
  if (!value) return '';
  return `
    <tr>
      <td style="padding:8px 0;font-weight:bold;width:150px;vertical-align:top;">${label}:</td>
      <td style="padding:8px 0;">${value}</td>
    </tr>`;
}

export async function POST(request) {
  try {
    const form = await request.formData();

    const company = form.get('company');
    const contact = form.get('contact');
    const email = form.get('email');
    const phone = form.get('phone');
    const interest = form.get('interest');
    const message = form.get('message');
    const fileLink = form.get('fileLink');

    if (!company || !contact || !email) {
      return Response.json(
        { error: 'Firma, Ansprechpartner und E-Mail sind Pflichtfelder.' },
        { status: 400 }
      );
    }

    // Anhänge einsammeln und prüfen
    const files = form.getAll('files').filter((f) => f && typeof f === 'object' && f.size > 0);
    let totalBytes = 0;
    const attachments = [];

    for (const file of files) {
      if (!ALLOWED_EXTENSIONS.has(extensionOf(file.name))) {
        return Response.json(
          { error: `Dateityp nicht erlaubt: ${file.name}` },
          { status: 400 }
        );
      }
      totalBytes += file.size;
      if (totalBytes > MAX_UPLOAD_BYTES) {
        return Response.json(
          { error: 'Die Dateien sind zusammen zu groß (max. 4 MB). Bitte nutzen Sie das Link-Feld.' },
          { status: 413 }
        );
      }
      const buffer = Buffer.from(await file.arrayBuffer());
      attachments.push({ filename: file.name, content: buffer });
    }

    const attachmentList = attachments.length
      ? attachments
          .map((a) => `<li>${escapeHtml(a.filename)}</li>`)
          .join('')
      : '';

    const { error: sendError } = await resend.emails.send({
      from: MAIL_FROM,
      to: MAIL_RECIPIENT,
      replyTo: String(email),
      subject: `Sponsoring-Anfrage von ${company}`,
      attachments: attachments.length ? attachments : undefined,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color:#c8102e;">Neue Sponsoring-Anfrage – FC Lahr-West</h2>
          <table style="width:100%;border-collapse:collapse;">
            ${row('Firma', escapeHtml(company))}
            ${row('Ansprechpartner', escapeHtml(contact))}
            ${row('E-Mail', `<a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>`)}
            ${row('Telefon', phone ? `<a href="tel:${escapeHtml(phone)}">${escapeHtml(phone)}</a>` : '')}
            ${row('Interesse', escapeHtml(INTEREST_LABELS[interest] || interest))}
            ${row('Datei-Link', fileLink ? `<a href="${escapeHtml(fileLink)}">${escapeHtml(fileLink)}</a>` : '')}
          </table>

          ${
            message
              ? `<hr style="border:1px solid #eee;margin:16px 0;" />
                 <p style="font-weight:bold;">Nachricht:</p>
                 <p style="line-height:1.6;color:#333;">${nl2br(message)}</p>`
              : ''
          }

          ${
            attachmentList
              ? `<hr style="border:1px solid #eee;margin:16px 0;" />
                 <p style="font-weight:bold;">Angehängte Dateien:</p>
                 <ul style="color:#333;">${attachmentList}</ul>`
              : ''
          }

          <hr style="border:1px solid #eee;margin:16px 0;" />
          <p style="font-size:12px;color:#999;">
            Diese E-Mail wurde über das Sponsoren-Formular auf der Website des
            FC Lahr-West 1975 e.V. gesendet.
          </p>
        </div>
      `,
    });

    // Das Resend-SDK wirft bei einem Fehlschlag keine Exception, sondern
    // liefert ihn im error-Feld zurück. Ohne diese Prüfung würde der Absender
    // eine Erfolgsmeldung sehen, obwohl die Mail nie rausgeht.
    if (sendError) {
      console.error('Sponsoring-Formular – Resend-Fehler:', sendError);
      return Response.json({ error: 'E-Mail konnte nicht gesendet werden' }, { status: 502 });
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error('Sponsoring-Formular – unerwarteter Fehler:', error);
    return Response.json({ error: 'E-Mail konnte nicht gesendet werden' }, { status: 500 });
  }
}
