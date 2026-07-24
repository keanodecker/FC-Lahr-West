'use client';

/**
 * Media-Castle-Signatur „visualized by media castle".
 * Design-Handoff: Poppins, Burg-Wappen, verlinkt auf media-castle.com.
 * Der komplette Block ist ein Link; der Text ist echter, markierbarer Text
 * (jeder Buchstabe lässt sich einzeln mit der Maus markieren).
 *
 * layout:  "stacked" = Logo links, „VISUALIZED BY" (getrackt, uppercase) über
 *                       „media castle" (Standard-Variante aus dem Handoff)
 *          "inline"  = alles einzeilig
 * variant: "dark"  = weißes Logo + heller Text (für dunklen Grund)
 *          "light" = navy Logo + dunkler Text (für hellen Grund)
 * size:    Schriftgröße der Wortmarke „media castle" in px.
 */
export default function MediaCastleSignature({
  layout = 'stacked',
  variant = 'dark',
  size = 20,
}) {
  const isDark = variant === 'dark';
  const logo = isDark ? '/mc-logo-white.png' : '/mc-logo-navy.png';
  const brand = isDark ? '#ffffff' : '#041833';
  const label = isDark ? 'rgba(255,255,255,.6)' : 'rgba(4,24,51,.55)';

  const linkBase =
    'inline-flex items-center no-underline transition-opacity duration-200 hover:opacity-80';
  const linkStyle = {
    fontFamily: 'Poppins, system-ui, sans-serif',
    color: brand,
    userSelect: 'text',
    WebkitUserSelect: 'text',
  };

  if (layout === 'inline') {
    const px = Math.round(size * 1.4);
    return (
      <a
        href="https://www.media-castle.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="visualized by media castle – zur Media-Castle-Website"
        className={linkBase}
        style={{ ...linkStyle, gap: '8px', fontSize: `${size}px` }}
      >
        <img
          src={logo}
          alt="Media Castle Wappen"
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

  // stacked (Standard)
  const logoPx = Math.round(size * 2);
  const labelPx = Math.max(9, Math.round(size * 0.52));
  return (
    <a
      href="https://www.media-castle.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="visualized by media castle – zur Media-Castle-Website"
      className={linkBase}
      style={{ ...linkStyle, gap: `${Math.round(size * 0.6)}px` }}
    >
      <img
        src={logo}
        alt="Media Castle Wappen"
        className="flex-shrink-0"
        style={{ width: logoPx, height: logoPx }}
        draggable={false}
      />
      <span className="flex flex-col" style={{ lineHeight: 1.02 }}>
        <span
          style={{
            fontSize: `${labelPx}px`,
            fontWeight: 500,
            letterSpacing: '2.2px',
            textTransform: 'uppercase',
            color: label,
            userSelect: 'text',
          }}
        >
          visualized by
        </span>
        <span
          style={{
            fontSize: `${size}px`,
            fontWeight: 600,
            letterSpacing: '-0.3px',
            userSelect: 'text',
          }}
        >
          media castle
        </span>
      </span>
    </a>
  );
}
