// Zentrale Stelle für den E-Mail-Versand über Resend.
//
// Die beiden Formulare der Website gehen an unterschiedliche Empfänger. Die
// Adressen stehen bewusst nur hier, damit sie beim nächsten Wechsel nicht in
// den Routen gesucht werden müssen.

// Kontaktformular: allgemeine Anfragen an den Verein.
export const CONTACT_RECIPIENT = 'alex.roccaro@web.de';

// Sponsorenformular: geht an die betreuende Stelle. Diese Adresse wird dem
// Absender bewusst nicht angezeigt – sie steht nur hier im Server-Code und
// taucht weder im Formular noch in der versendeten Bestätigung auf.
export const SPONSOR_RECIPIENT = 'mail@cesardienstleistungen.de';

// Absender aller Formular-Mails. Die Domain fclahrwest.de muss dafür in Resend
// verifiziert sein (SPF- und DKIM-Einträge im DNS), sonst verweigert Resend den
// Versand. Die Empfänger dagegen brauchen keinerlei DNS-Einstellungen.
export const MAIL_FROM = 'FC Lahr-West <noreply@fclahrwest.de>';
