import { Resend } from 'resend';
import { MAIL_FROM, CONTACT_RECIPIENT } from '@/lib/mail';

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/\n/g, '<br>');
}

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json({ error: 'Fehlende Felder' }, { status: 400 });
    }

    const { error: sendError } = await resend.emails.send({
      from: MAIL_FROM,
      to: CONTACT_RECIPIENT,
      replyTo: email,
      subject: `Neue Kontaktanfrage von ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #c8102e;">Neue Kontaktanfrage – FC Lahr-West</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 100px;">Name:</td>
              <td style="padding: 8px 0;">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">E-Mail:</td>
              <td style="padding: 8px 0;">
                <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>
              </td>
            </tr>
          </table>
          <hr style="border: 1px solid #eee; margin: 16px 0;" />
          <p style="font-weight: bold;">Nachricht:</p>
          <p style="line-height: 1.6; color: #333;">${escapeHtml(message)}</p>
          <hr style="border: 1px solid #eee; margin: 16px 0;" />
          <p style="font-size: 12px; color: #999;">
            Diese E-Mail wurde über das Kontaktformular auf der Website des FC Lahr-West 1975 e.V. gesendet.
          </p>
        </div>
      `,
    });

    // Das Resend-SDK wirft bei einem Fehlschlag keine Exception, sondern
    // liefert ihn im error-Feld zurück. Ohne diese Prüfung würde der Absender
    // eine Erfolgsmeldung sehen, obwohl die Mail nie rausgeht.
    if (sendError) {
      console.error('Resend error:', sendError);
      return Response.json({ error: 'E-Mail konnte nicht gesendet werden' }, { status: 502 });
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error('Resend error:', error);
    return Response.json({ error: 'E-Mail konnte nicht gesendet werden' }, { status: 500 });
  }
}
