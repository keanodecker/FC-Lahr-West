'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Startseite', href: '/' },
    { label: 'Über uns', href: '/about' },
    { label: 'Mannschaften', href: '/teams' },
    { label: 'Statistik', href: '/statistics' },
    { label: 'FAQ', href: '/faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className="flex items-center transition-all duration-200 hover:opacity-80"
            aria-label="FC Lahr-West 1975 e.V. - Zur Startseite"
          >
            <img
              src="https://horizons-cdn.hostinger.com/5253aa88-5df7-412d-839f-0a29150c6335/a050f4f0a8ae68318c3faec4baec3687.png"
              alt="FC Lahr-West 1975 e.V. Logo"
              className="h-12 md:h-16 w-auto object-contain"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="flex items-center gap-4 ml-4 border-l pl-4">
              <a
                href="https://instagram.com/fc_lahr_west"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <Button asChild variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/#contact">Kontakt</Link>
              </Button>
            </div>
          </nav>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col gap-6 mt-8">
                <img
                  src="https://horizons-cdn.hostinger.com/5253aa88-5df7-412d-839f-0a29150c6335/a050f4f0a8ae68318c3faec4baec3687.png"
                  alt="FC Lahr-West 1975 e.V. Logo"
                  className="h-12 w-auto object-contain"
                />
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium transition-all duration-200 ${
                      pathname === link.href ? 'text-primary' : 'text-foreground hover:text-primary'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="flex items-center gap-4 mt-4 pt-4 border-t">
                  <a
                    href="https://instagram.com/fc_lahr_west"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <Button asChild className="w-full" onClick={() => setIsOpen(false)}>
                    <Link href="/#contact">Kontakt</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
