'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const variants = [
  { href: '/', label: 'Aktuell' },
  { href: '/einstieg/1', label: '1 · Split' },
  { href: '/einstieg/2', label: '2 · Kino' },
  { href: '/einstieg/3', label: '3 · Mosaik' },
];

// Nur für die Vergleichsseiten: schwebende Leiste, um zwischen den Entwürfen
// hin- und herzuspringen.
export default function VariantSwitcher() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Entwürfe vergleichen"
      className="fixed bottom-4 left-1/2 z-[60] flex max-w-[calc(100vw-2rem)] -translate-x-1/2 gap-1 overflow-x-auto rounded-full bg-black/80 p-1 text-sm shadow-xl backdrop-blur"
    >
      {variants.map((v) => (
        <Link
          key={v.href}
          href={v.href}
          aria-current={pathname === v.href ? 'page' : undefined}
          className={`whitespace-nowrap rounded-full px-3 py-1.5 font-medium transition-colors ${
            pathname === v.href ? 'bg-white text-black' : 'text-white/80 hover:bg-white/15'
          }`}
        >
          {v.label}
        </Link>
      ))}
    </nav>
  );
}
