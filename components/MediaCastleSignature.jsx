'use client';

/**
 * Media-Castle-Signatur „visualized by media castle".
 * Design-Handoff: Poppins 400/600, Burg-Wappen, verlinkt auf media-castle.de.
 * Der komplette Block ist ein Link; der Text ist echter, markierbarer Text
 * (jeder Buchstabe lässt sich einzeln mit der Maus markieren).
 *
 * variant: "dark" = weißes Logo + heller Text (für dunklen Grund)
 *          "light" = navy Logo + dunkler Text (für hellen Grund)
 */
export default function MediaCastleSignature({ variant = 'dark', size = 13 }) {
  const isDark = variant === 'dark';
  const logo = isDark ? '/mc-logo-white.png' : '/mc-logo-navy.png';
  const brand = isDark ? '#ffffff' : '#041833';
  const label = isDark ? 'rgba(255,255,255,.6)' : 'rgba(4,24,51,.55)';
  const px = Math.round(size * 1.4);

  return (
    <a
      href="https://www.media-castle.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="visualized by media castle – zur Media-Castle-Website"
      className="inline-flex items-center no-underline transition-opacity duration-200 hover:opacity-80"
      style={{
        gap: '8px',
        fontFamily: 'Poppins, system-ui, sans-serif',
        color: brand,
        fontSize: `${size}px`,
        userSelect: 'text',
        WebkitUserSelect: 'text',
      }}
    >
      <img
        src={logo}
        alt="Media Castle Wappen"
        width={px}
        height={px}
        className="flex-shrink-0"
        style={{ width: px, height: px }}
        draggable={false}
      />
      <span style={{ fontWeight: 400, color: label, userSelect: 'text' }}>
        visualized by
      </span>
      <span style={{ fontWeight: 600, userSelect: 'text' }}>media castle</span>
    </a>
  );
}
