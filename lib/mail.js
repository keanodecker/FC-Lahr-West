// Zentrale Stelle für den E-Mail-Versand über Resend.
//
// Beide Formulare der Website (Kontakt und Sponsoring) schicken ihre Anfragen
// an dieselbe Adresse. Sie steht bewusst nur hier, damit sie beim nächsten
// Wechsel nicht an zwei Stellen geändert werden muss und die Formulare nicht
// unbemerkt auseinanderlaufen.
export const MAIL_RECIPIENT = 'alex.roccaro@web.de';

// Absender aller Formular-Mails. Die Domain fclahrwest.de muss dafür in Resend
// verifiziert sein (SPF- und DKIM-Einträge im DNS), sonst verweigert Resend den
// Versand. Der Empfänger dagegen braucht keinerlei DNS-Einstellungen.
export const MAIL_FROM = 'FC Lahr-West <noreply@fclahrwest.de>';
