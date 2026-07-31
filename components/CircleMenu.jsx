'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

// Das Wappen sitzt in der linken oberen Ecke der Seite. Ein voller Kreis würde
// die Hälfte der Punkte über den oberen und linken Bildschirmrand schieben,
// deshalb fächern wir nur in den freien Bereich auf: von knapp unterhalb der
// Navigationsleiste (14°) bis fast senkrecht nach unten (96°). Der Radius ist
// so gewählt, dass sich die Punkte auf diesem Bogen nicht berühren.
const MENU = {
  itemSize: 42,
  radius: 255,
  startAngle: 16,
  endAngle: 94,
  stagger: 0.035,
  // Zwischen Wappen und Menüpunkten liegt eine gute Bildschirmhälfte Luft.
  // Solange die Maus dort unterwegs ist, zeigt sie auf nichts – das Menü darf
  // deshalb nicht sofort zuklappen, sondern lässt zwei Sekunden Zeit, einen
  // Punkt anzusteuern. Ein Klick auf einen Punkt und Escape schließen weiterhin
  // sofort.
  closeDelay: 2000,
};

function pointOnArc(index, total, radius, startAngle, endAngle) {
  const ratio = total > 1 ? index / (total - 1) : 0.5;
  const angle = ((startAngle + (endAngle - startAngle) * ratio) * Math.PI) / 180;
  return { x: radius * Math.cos(angle), y: radius * Math.sin(angle) };
}

function MenuItem({ item, index, total, isOpen, isActive, reduceMotion, onSelect }) {
  const { x, y } = pointOnArc(index, total, MENU.radius, MENU.startAngle, MENU.endAngle);
  const [hovering, setHovering] = useState(false);
  const Icon = item.icon;
  const isExternal = item.href.startsWith('http');

  const inner = (
    <>
      <Icon className="h-5 w-5" aria-hidden="true" />
      {/* Das Label sitzt rechts neben dem Punkt: Der Bogen läuft nach unten
          links, dort würde die Beschriftung unter dem nächsten Punkt
          verschwinden. */}
      <span
        className={cn(
          'pointer-events-none absolute left-full top-1/2 ml-2 -translate-y-1/2 whitespace-nowrap',
          'rounded-full bg-foreground px-2.5 py-1 text-xs font-medium text-background shadow-md',
          'transition-opacity duration-150',
          hovering && isOpen ? 'opacity-100' : 'opacity-0'
        )}
      >
        {item.label}
      </span>
    </>
  );

  const linkClass = cn(
    'relative flex h-full w-full items-center justify-center rounded-full border shadow-lg',
    'transition-colors duration-200',
    isActive
      ? 'bg-primary text-primary-foreground border-primary'
      : 'bg-white text-primary border-border hover:bg-primary hover:text-primary-foreground hover:border-primary'
  );

  return (
    <motion.div
      className={cn(
        'absolute left-0 top-0',
        isOpen ? 'pointer-events-auto' : 'pointer-events-none'
      )}
      style={{
        width: MENU.itemSize,
        height: MENU.itemSize,
        marginLeft: -MENU.itemSize / 2,
        marginTop: -MENU.itemSize / 2,
        // Der Punkt unter der Maus muss vor seinen Nachbarn liegen, sonst
        // verschwindet sein Label darunter.
        zIndex: hovering ? 2 : 1,
      }}
      initial={false}
      animate={{
        x: isOpen ? x : 0,
        y: isOpen ? y : 0,
        opacity: isOpen ? 1 : 0,
        scale: isOpen ? 1 : 0.4,
      }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : {
              // Beim Öffnen laufen die Punkte von innen nach außen los, beim
              // Schließen in umgekehrter Reihenfolge wieder ein.
              delay: (isOpen ? index : total - 1 - index) * MENU.stagger,
              type: 'spring',
              stiffness: 300,
              damping: 30,
            }
      }
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {isExternal ? (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          className={linkClass}
          tabIndex={isOpen ? 0 : -1}
          onFocus={() => setHovering(true)}
          onBlur={() => setHovering(false)}
          onClick={onSelect}
        >
          {inner}
        </a>
      ) : (
        <Link
          href={item.href}
          aria-label={item.label}
          aria-current={isActive ? 'page' : undefined}
          className={linkClass}
          tabIndex={isOpen ? 0 : -1}
          onFocus={() => setHovering(true)}
          onBlur={() => setHovering(false)}
          onClick={onSelect}
        >
          {inner}
        </Link>
      )}
    </motion.div>
  );
}

export default function CircleMenu({ items }) {
  const [isOpen, setIsOpen] = useState(false);
  const closeTimer = useRef(null);
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  const open = useCallback(() => {
    clearTimeout(closeTimer.current);
    setIsOpen(true);
  }, []);

  const scheduleClose = useCallback(() => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setIsOpen(false), MENU.closeDelay);
  }, []);

  const closeNow = useCallback(() => {
    clearTimeout(closeTimer.current);
    setIsOpen(false);
  }, []);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  // Nach einem Seitenwechsel soll das Menü nicht offen stehen bleiben.
  useEffect(() => {
    closeNow();
  }, [pathname, closeNow]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeNow();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, closeNow]);

  return (
    <div
      className="relative"
      onMouseEnter={open}
      onMouseLeave={scheduleClose}
      onFocus={open}
      onBlur={(event) => {
        // Nur schließen, wenn der Fokus den gesamten Bereich verlässt – nicht
        // beim Weiterspringen von einem Menüpunkt zum nächsten.
        if (!event.currentTarget.contains(event.relatedTarget)) closeNow();
      }}
    >
      <Link
        href="/"
        aria-label="FC Lahr-West 1975 e.V. – Zur Startseite. Zeigen Sie auf das Wappen für das Menü."
        aria-expanded={isOpen}
        className="relative z-10 block transition-all duration-200 hover:opacity-80"
      >
        <motion.img
          src="/logo-mark.png"
          alt="FC Lahr-West 1975 e.V. Logo"
          className="h-[54px] md:h-[72px] w-auto object-contain"
          animate={{ scale: isOpen && !reduceMotion ? 1.08 : 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        />
      </Link>

      <div className="absolute left-1/2 top-1/2 h-0 w-0" aria-hidden={!isOpen}>
        {items.map((item, index) => (
          <MenuItem
            key={item.href}
            item={item}
            index={index}
            total={items.length}
            isOpen={isOpen}
            isActive={pathname === item.href}
            reduceMotion={reduceMotion}
            onSelect={closeNow}
          />
        ))}
      </div>
    </div>
  );
}
