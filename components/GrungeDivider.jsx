// Rauer Pinselstrich-Übergang zwischen Sektionen — greift die roten
// Kratzer-Akzente aus den Vereinsfotos auf. `fill` bestimmt die Farbe
// der Zielsektion, in die übergeleitet wird.
export default function GrungeDivider({
  fill = 'hsl(var(--background))',
  flip = false,
  className = '',
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none w-full overflow-hidden leading-[0] ${
        flip ? 'rotate-180' : ''
      } ${className}`}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block w-full h-14 md:h-20 lg:h-24"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Rote Kratzer-Schicht — blitzt über der Risskante hervor */}
        <path
          className="text-primary"
          fill="currentColor"
          d="M0,120 L0,46 L24,72 L52,40 L76,78 L108,50 L134,82 L168,44 L198,76 L232,52 L262,84 L296,42 L328,74 L362,56 L392,86 L428,46 L458,78 L494,52 L524,82 L560,44 L592,76 L626,54 L656,84 L692,46 L722,74 L758,52 L790,82 L824,42 L856,74 L890,56 L920,86 L956,46 L988,78 L1022,52 L1052,82 L1088,44 L1120,76 L1154,54 L1184,84 L1220,46 L1250,74 L1286,52 L1318,82 L1352,42 L1384,72 L1414,50 L1440,70 L1440,120 Z"
        />
        {/* Einzelne rote Splitter über der Kante */}
        <g className="text-primary" fill="currentColor">
          <polygon points="60,30 78,36 64,44" />
          <polygon points="210,26 224,34 208,40" />
          <polygon points="410,32 428,36 414,46" />
          <polygon points="650,24 662,34 646,38" />
          <polygon points="880,30 898,34 884,44" />
          <polygon points="1090,26 1104,34 1088,40" />
          <polygon points="1330,30 1348,36 1334,44" />
        </g>
        {/* Risskante in Farbe der nächsten Sektion */}
        <path
          fill={fill}
          d="M0,120 L0,76 L34,92 L66,68 L102,94 L140,72 L178,96 L214,70 L252,94 L290,66 L326,92 L364,64 L402,94 L440,72 L476,96 L514,68 L552,92 L590,70 L628,96 L666,68 L704,94 L742,66 L780,92 L818,64 L856,94 L894,70 L930,96 L968,68 L1006,92 L1044,70 L1082,96 L1120,68 L1158,94 L1196,66 L1234,92 L1272,64 L1310,94 L1348,72 L1384,96 L1414,70 L1440,88 L1440,120 Z"
        />
      </svg>
    </div>
  );
}
