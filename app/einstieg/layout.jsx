import VariantSwitcher from '@/components/einstieg/VariantSwitcher';

// Entwürfe für einen neuen Einstieg – nicht für Suchmaschinen gedacht.
export const metadata = {
  title: 'Entwurf Startseite | FC Lahr-West 1975 e.V.',
  robots: { index: false, follow: false },
};

export default function EinstiegLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {children}
      <VariantSwitcher />
    </div>
  );
}
