'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu,
  Instagram,
  Home,
  UserPlus,
  Info,
  Users,
  Handshake,
  HelpCircle,
  Mail,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import CircleMenu from '@/components/CircleMenu';

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
    { label: 'Startseite', href: '/', icon: Home },
    { label: 'Mitglied werden', href: '/mitglied-werden', icon: UserPlus },
    { label: 'Über uns', href: '/about', icon: Info },
    { label: 'Mannschaften', href: '/teams', icon: Users },
    { label: 'Sponsoren', href: '/sponsoren', icon: Handshake },
    { label: 'FAQ', href: '/faq', icon: HelpCircle },
  ];

  // Das Kreismenü am Wappen zeigt zusätzlich zu den Navigationspunkten die
  // beiden Einträge, die in der Leiste rechts als Icon bzw. Button stehen.
  const circleMenuItems = [
    ...navLinks,
    { label: 'Kontakt', href: '/#contact', icon: Mail },
    { label: 'Instagram', href: 'https://instagram.com/fc_lahr_west', icon: Instagram },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* logo-mark.png ist die freigestellte Variante ohne transparenten
              Rand – dadurch wirkt das Wappen deutlich größer, ohne dass die
              Höhe der Navigationsleiste (h-16 / md:h-20) sich ändert. */}
          <Link
            href="/"
            className="flex items-center transition-all duration-200 hover:opacity-80 md:hidden"
            aria-label="FC Lahr-West 1975 e.V. - Zur Startseite"
          >
            <img
              src="/logo-mark.png"
              alt="FC Lahr-West 1975 e.V. Logo"
              className="h-[54px] w-auto object-contain"
            />
          </Link>

          {/* Auf dem Handy bleibt das Wappen ein reiner Link zur Startseite:
              Dort gibt es kein Hovern, und das Hamburger-Menü deckt die
              Navigation bereits ab. */}
          <div className="hidden md:block">
            <CircleMenu items={circleMenuItems} />
          </div>

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
                  src="/logo-mark.png"
                  alt="FC Lahr-West 1975 e.V. Logo"
                  className="h-14 w-auto object-contain"
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
