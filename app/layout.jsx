import './globals.css';
import Providers from '@/components/Providers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticleSystem from '@/components/ParticleSystem';
import ScrollBlurOverlay from '@/components/ScrollBlurOverlay';
import { Toaster } from '@/components/ui/sonner';

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
          <div className="min-h-screen flex flex-col relative">
            <ParticleSystem />
            <ScrollBlurOverlay />
            <Header />
            <main className="flex-grow relative z-10">{children}</main>
            <Footer />
            <Toaster />
          </div>
        </Providers>
      </body>
    </html>
  );
}
