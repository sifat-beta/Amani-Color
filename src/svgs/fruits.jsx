// SVG Coloring Drawings - FRUITS
// Each takes { colors: {regionId: hexColor}, onRegionClick: (id) => void }
// viewBox: 0 0 400 450 | strokeWidth: 10+ for thick toddler-friendly lines

const S = ({ id, fill, stroke = '#1a1a1a', sw = 10, onClick, children, ...rest }) => (
  <path
    d={rest.d}
    fill={fill}
    stroke={stroke}
    strokeWidth={sw}
    strokeLinejoin="round"
    strokeLinecap="round"
    onClick={() => onClick?.(id)}
    style={{ cursor: 'pointer' }}
    {...Object.fromEntries(Object.entries(rest).filter(([k]) => !['d'].includes(k)))}
  />
);

const C = ({ id, fill, onClick, ...rest }) => (
  <circle
    fill={fill}
    stroke="#1a1a1a"
    strokeWidth={10}
    onClick={() => onClick?.(id)}
    style={{ cursor: 'pointer' }}
    {...rest}
  />
);

const svgProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 400 450',
  style: { width: '100%', height: '100%', userSelect: 'none' },
};

// ─── STRAWBERRY ──────────────────────────────────────────────────────────────
export function Strawberry({ colors = {}, onRegionClick }) {
  const f = (id) => colors[id] || '#FFFFFF';
  const seeds = [
    [148,190],[172,162],[202,155],[232,168],[256,192],
    [143,232],[168,252],[200,246],[232,254],[257,236],
    [152,278],[180,295],[210,290],[238,282],
    [165,325],[200,334],[232,322],
    [182,368],[218,366],
  ];
  return (
    <svg {...svgProps}>
      {/* Body */}
      <path
        d="M 200 415 C 125 370 72 298 72 228 C 72 148 118 100 172 100 C 188 100 200 112 200 112 C 200 112 212 100 228 100 C 282 100 328 148 328 228 C 328 298 275 370 200 415 Z"
        fill={f('body')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round"
        onClick={() => onRegionClick?.('body')} style={{ cursor: 'pointer' }}
      />
      {/* Calyx / Leaves */}
      <path
        d="M 148 110 C 152 88 160 65 168 55 C 174 68 178 86 182 100
           C 184 76 190 52 200 44 C 210 52 216 76 218 100
           C 222 86 226 68 232 55 C 240 65 248 88 252 110
           C 264 92 275 78 282 72 C 278 88 270 102 262 112
           C 240 106 220 102 200 105 C 180 102 160 106 138 112
           C 130 102 122 88 118 72 C 125 78 136 92 148 110 Z"
        fill={f('leaves')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round"
        onClick={() => onRegionClick?.('leaves')} style={{ cursor: 'pointer' }}
      />
      {/* Seeds – decorative (inherit body click area color) */}
      {seeds.map(([cx, cy], i) => (
        <ellipse key={i} cx={cx} cy={cy} rx="7" ry="9"
          fill={f('body')} stroke="#1a1a1a" strokeWidth="5"
          onClick={() => onRegionClick?.('body')} style={{ cursor: 'pointer' }}
        />
      ))}
    </svg>
  );
}

// ─── APPLE ───────────────────────────────────────────────────────────────────
export function Apple({ colors = {}, onRegionClick }) {
  const f = (id) => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Body */}
      <path
        d="M 200 140 C 142 132 80 162 72 228 C 60 312 110 390 160 415 C 178 424 200 422 200 422
           C 200 422 222 424 240 415 C 290 390 340 312 328 228 C 320 162 258 132 200 140 Z"
        fill={f('body')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round"
        onClick={() => onRegionClick?.('body')} style={{ cursor: 'pointer' }}
      />
      {/* Indent at top */}
      <path d="M 185 138 C 192 125 200 118 200 118 C 200 118 208 125 215 138"
        fill="none" stroke="#1a1a1a" strokeWidth="9" strokeLinecap="round"
      />
      {/* Stem */}
      <path d="M 200 118 C 200 105 204 88 210 76 C 214 68 220 62 224 58"
        fill="none" stroke="#1a1a1a" strokeWidth="11" strokeLinecap="round"
        onClick={() => onRegionClick?.('stem')} style={{ cursor: 'pointer' }}
      />
      {/* Leaf */}
      <path
        d="M 212 80 C 228 70 255 65 268 75 C 260 90 240 98 222 95 C 216 90 212 84 212 80 Z"
        fill={f('leaf')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round"
        onClick={() => onRegionClick?.('leaf')} style={{ cursor: 'pointer' }}
      />
      {/* Leaf vein */}
      <path d="M 215 82 C 228 78 248 76 262 78" fill="none" stroke="#1a1a1a" strokeWidth="4" />
      {/* Shine */}
      <ellipse cx="145" cy="205" rx="18" ry="28"
        fill={f('body')} stroke="#1a1a1a" strokeWidth="4"
        onClick={() => onRegionClick?.('body')} style={{ cursor: 'pointer' }}
      />
    </svg>
  );
}

// ─── BANANA ──────────────────────────────────────────────────────────────────
export function Banana({ colors = {}, onRegionClick }) {
  const f = (id) => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Banana skin – curved shape */}
      <path
        d="M 130 100 C 110 108 95 125 92 148 C 88 178 100 215 120 252
           C 148 302 188 345 228 368 C 254 382 278 385 296 374
           C 318 360 322 334 312 308 C 304 286 288 268 270 255
           C 240 232 208 210 188 185 C 168 160 158 132 162 112
           C 164 102 152 95 130 100 Z"
        fill={f('skin')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round"
        onClick={() => onRegionClick?.('skin')} style={{ cursor: 'pointer' }}
      />
      {/* Inner lighter highlight stripe */}
      <path
        d="M 148 118 C 140 145 148 178 162 210 C 178 245 205 278 232 305 C 252 324 272 340 290 348"
        fill="none" stroke="#1a1a1a" strokeWidth="6" strokeLinecap="round"
      />
      {/* Tip top */}
      <path
        d="M 130 100 C 122 90 118 78 122 66 C 126 56 136 50 146 54 C 152 57 158 64 162 74 C 158 88 154 98 150 106 Z"
        fill={f('tip')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round"
        onClick={() => onRegionClick?.('tip')} style={{ cursor: 'pointer' }}
      />
      {/* Tip bottom */}
      <path
        d="M 296 374 C 302 380 305 390 302 400 C 298 410 288 414 280 410 C 272 406 268 396 270 386 C 275 378 285 372 296 374 Z"
        fill={f('tip')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round"
        onClick={() => onRegionClick?.('tip')} style={{ cursor: 'pointer' }}
      />
    </svg>
  );
}

// ─── ORANGE ──────────────────────────────────────────────────────────────────
export function Orange({ colors = {}, onRegionClick }) {
  const f = (id) => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Body */}
      <circle cx="200" cy="255" r="155"
        fill={f('body')} stroke="#1a1a1a" strokeWidth="11"
        onClick={() => onRegionClick?.('body')} style={{ cursor: 'pointer' }}
      />
      {/* Segment lines */}
      {[0, 60, 120, 180, 240, 300].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        return (
          <line key={i}
            x1="200" y1="255"
            x2={200 + 150 * Math.cos(rad)} y2={255 + 150 * Math.sin(rad)}
            stroke="#1a1a1a" strokeWidth="5"
            onClick={() => onRegionClick?.('body')} style={{ cursor: 'pointer' }}
          />
        );
      })}
      {/* Stem */}
      <path d="M 200 100 C 200 90 203 78 207 70"
        fill="none" stroke="#1a1a1a" strokeWidth="11" strokeLinecap="round"
        onClick={() => onRegionClick?.('body')} style={{ cursor: 'pointer' }}
      />
      {/* Leaf */}
      <path
        d="M 200 95 C 215 78 240 72 255 80 C 248 96 228 105 210 100 Z"
        fill={f('leaf')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round"
        onClick={() => onRegionClick?.('leaf')} style={{ cursor: 'pointer' }}
      />
    </svg>
  );
}

// ─── GRAPES ───────────────────────────────────────────────────────────────────
export function Grapes({ colors = {}, onRegionClick }) {
  const f = (id) => colors[id] || '#FFFFFF';
  const grapePositions = [
    [165, 200], [235, 200],
    [130, 258], [200, 258], [270, 258],
    [160, 316], [240, 316],
    [200, 374],
  ];
  return (
    <svg {...svgProps}>
      {/* Stem */}
      <path d="M 200 108 C 200 130 200 150 200 165"
        fill="none" stroke="#1a1a1a" strokeWidth="11" strokeLinecap="round"
        onClick={() => onRegionClick?.('stem')} style={{ cursor: 'pointer' }}
      />
      {/* Tendril */}
      <path d="M 200 118 C 220 110 238 100 248 90 C 255 82 258 70 252 62"
        fill="none" stroke="#1a1a1a" strokeWidth="7" strokeLinecap="round"
      />
      {/* Leaf */}
      <path
        d="M 200 108 C 182 90 162 80 148 86 C 138 92 135 108 142 120 C 150 132 168 138 185 132
           C 190 128 196 120 200 112 Z"
        fill={f('leaf')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round"
        onClick={() => onRegionClick?.('leaf')} style={{ cursor: 'pointer' }}
      />
      {/* Leaf veins */}
      <path d="M 200 108 C 190 114 180 120 172 128" fill="none" stroke="#1a1a1a" strokeWidth="4" />
      <path d="M 182 100 C 178 108 174 116 172 124" fill="none" stroke="#1a1a1a" strokeWidth="3" />
      {/* Grapes */}
      {grapePositions.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="38"
          fill={f('grapes')} stroke="#1a1a1a" strokeWidth="10"
          onClick={() => onRegionClick?.('grapes')} style={{ cursor: 'pointer' }}
        />
      ))}
      {/* Grape highlights */}
      {grapePositions.map(([cx, cy], i) => (
        <circle key={`h${i}`} cx={cx - 12} cy={cy - 12} r="8"
          fill="white" stroke="none" opacity="0.5"
          onClick={() => onRegionClick?.('grapes')} style={{ cursor: 'pointer' }}
        />
      ))}
    </svg>
  );
}

// ─── WATERMELON ───────────────────────────────────────────────────────────────
export function Watermelon({ colors = {}, onRegionClick }) {
  const f = (id) => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Outer rind (half circle) */}
      <path
        d="M 48 290 A 160 160 0 0 1 352 290 Z"
        fill={f('rind')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round"
        onClick={() => onRegionClick?.('rind')} style={{ cursor: 'pointer' }}
      />
      {/* Inner flesh */}
      <path
        d="M 72 290 A 133 133 0 0 1 328 290 Z"
        fill={f('flesh')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round"
        onClick={() => onRegionClick?.('flesh')} style={{ cursor: 'pointer' }}
      />
      {/* Rind stripe */}
      <path
        d="M 52 290 A 156 156 0 0 1 348 290"
        fill="none" stroke="#1a1a1a" strokeWidth="6"
      />
      {/* White rind inner line */}
      <path
        d="M 68 290 A 137 137 0 0 1 332 290"
        fill="none" stroke="#1a1a1a" strokeWidth="5"
      />
      {/* Seeds */}
      {[
        [140, 260, 25], [185, 235, 25], [230, 238, 25],
        [275, 258, 25], [158, 278, 25], [240, 277, 25],
      ].map(([cx, cy, angle], i) => (
        <ellipse key={i}
          cx={cx} cy={cy} rx="8" ry="14"
          transform={`rotate(${angle} ${cx} ${cy})`}
          fill={f('flesh')} stroke="#1a1a1a" strokeWidth="5"
          onClick={() => onRegionClick?.('flesh')} style={{ cursor: 'pointer' }}
        />
      ))}
      {/* Bottom flat edge */}
      <line x1="48" y1="290" x2="352" y2="290" stroke="#1a1a1a" strokeWidth="11" strokeLinecap="round" />
    </svg>
  );
}
