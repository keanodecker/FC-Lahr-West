import './globals.css';
import Providers from '@/components/Providers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticleSystem from '@/components/ParticleSystem';
import ScrollBlurOverlay from '@/components/ScrollBlurOverlay';
import { Toaster } from '@/components/ui/sonner';
import CookieBanner from '@/components/CookieBanner';

export const metadata = {
  title: 'FC Lahr-West 1975 e.V. - Leidenschaft. Teamgeist. Heimat.',
  description:
    'FC Lahr-West 1975 e.V. - Fußballverein in Lahr/Schwarzwald. Mitglied im Südbadischen Fußballverband. Zwei Mannschaften, eine Leidenschaft.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body>
        <Providers>
          {/* overflow-x-clip schneidet ab, was seitlich übersteht – etwa Inhalte,
              die beim Einblenden von rechts hereingleiten. Das overflow-x am
              body reicht dafür nicht: Mobile Browser verbreitern die Seite
              trotzdem, und man kann sie nach links und rechts wischen. */}
          <div className="min-h-screen flex flex-col relative overflow-x-clip">
            <ParticleSystem />
            <ScrollBlurOverlay />
            <Header />
            <main className="flex-grow relative z-10">{children}</main>
            <Footer />
            <Toaster />
            <CookieBanner />
          </div>
        </Providers>
      </body>
    </html>
  );
}
