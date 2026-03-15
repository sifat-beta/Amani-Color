// SVG Coloring Drawings - DRESS UP
const svgProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 400 450',
  style: { width: '100%', height: '100%', userSelect: 'none' },
};

// ─── DRESS ────────────────────────────────────────────────────────────────────
export function Dress({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Skirt */}
      <path
        d="M 132 230 C 108 285 88 340 78 398 C 78 418 95 430 115 430
           L 285 430 C 305 430 322 418 322 398 C 312 340 292 285 268 230 Z"
        fill={f('skirt')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round"
        onClick={() => onRegionClick?.('skirt')} style={{ cursor: 'pointer' }}
      />
      {/* Skirt decoration line */}
      <path d="M 105 340 C 145 345 200 348 295 340" fill="none" stroke="#1a1a1a" strokeWidth="6" strokeLinecap="round" />
      {/* Bodice */}
      <path
        d="M 145 138 C 145 138 132 160 132 200 C 132 220 132 228 132 230
           L 268 230 C 268 228 268 220 268 200 C 268 160 255 138 255 138 Z"
        fill={f('bodice')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round"
        onClick={() => onRegionClick?.('bodice')} style={{ cursor: 'pointer' }}
      />
      {/* Left strap */}
      <path
        d="M 145 138 C 142 115 146 95 150 82 C 158 88 165 100 165 120 C 165 130 162 138 162 138 Z"
        fill={f('straps')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round"
        onClick={() => onRegionClick?.('straps')} style={{ cursor: 'pointer' }}
      />
      {/* Right strap */}
      <path
        d="M 255 138 C 258 115 254 95 250 82 C 242 88 235 100 235 120 C 235 130 238 138 238 138 Z"
        fill={f('straps')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round"
        onClick={() => onRegionClick?.('straps')} style={{ cursor: 'pointer' }}
      />
      {/* Neckline curve */}
      <path d="M 145 138 C 165 148 200 152 255 138" fill="none" stroke="#1a1a1a" strokeWidth="8" strokeLinecap="round" />
      {/* Belt/waist line */}
      <path d="M 134 228 L 266 228" stroke="#1a1a1a" strokeWidth="8" strokeLinecap="round" />
      {/* Bow at waist */}
      <path d="M 188 228 C 178 220 165 220 165 228 C 165 236 178 236 188 228 Z" fill={f('straps')} stroke="#1a1a1a" strokeWidth="7" />
      <path d="M 212 228 C 222 220 235 220 235 228 C 235 236 222 236 212 228 Z" fill={f('straps')} stroke="#1a1a1a" strokeWidth="7" />
      <circle cx="200" cy="228" r="8" fill={f('straps')} stroke="#1a1a1a" strokeWidth="6" />
    </svg>
  );
}

// ─── T-SHIRT ──────────────────────────────────────────────────────────────────
export function TShirt({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Left sleeve */}
      <path
        d="M 75 118 L 55 195 C 52 208 58 218 70 220 L 125 228 L 132 165 Z"
        fill={f('sleeves')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round"
        onClick={() => onRegionClick?.('sleeves')} style={{ cursor: 'pointer' }}
      />
      {/* Right sleeve */}
      <path
        d="M 325 118 L 345 195 C 348 208 342 218 330 220 L 275 228 L 268 165 Z"
        fill={f('sleeves')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round"
        onClick={() => onRegionClick?.('sleeves')} style={{ cursor: 'pointer' }}
      />
      {/* Main body */}
      <path
        d="M 132 165 L 75 118 C 100 105 130 98 160 96
           C 168 110 180 120 200 122 C 220 120 232 110 240 96
           C 270 98 300 105 325 118
           L 268 165 L 268 408 L 132 408 Z"
        fill={f('body')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round"
        onClick={() => onRegionClick?.('body')} style={{ cursor: 'pointer' }}
      />
      {/* Neckline */}
      <path d="M 160 96 C 172 115 188 124 200 122 C 212 124 228 115 240 96"
        fill="none" stroke="#1a1a1a" strokeWidth="9" strokeLinecap="round"
      />
      {/* Bottom hem */}
      <path d="M 132 408 L 268 408" stroke="#1a1a1a" strokeWidth="10" strokeLinecap="round" />
      {/* Side seams */}
      <path d="M 132 165 L 132 408" stroke="#1a1a1a" strokeWidth="6" />
      <path d="M 268 165 L 268 408" stroke="#1a1a1a" strokeWidth="6" />
      {/* Pocket */}
      <rect x="152" y="200" width="48" height="40" rx="6"
        fill={f('body')} stroke="#1a1a1a" strokeWidth="7"
        onClick={() => onRegionClick?.('body')} style={{ cursor: 'pointer' }}
      />
    </svg>
  );
}

// ─── HAT ──────────────────────────────────────────────────────────────────────
export function Hat({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Brim */}
      <ellipse cx="200" cy="318" rx="175" ry="42"
        fill={f('brim')} stroke="#1a1a1a" strokeWidth="11"
        onClick={() => onRegionClick?.('brim')} style={{ cursor: 'pointer' }}
      />
      {/* Crown */}
      <rect x="112" y="118" width="176" height="200" rx="18"
        fill={f('crown')} stroke="#1a1a1a" strokeWidth="11"
        onClick={() => onRegionClick?.('crown')} style={{ cursor: 'pointer' }}
      />
      {/* Crown top curve */}
      <ellipse cx="200" cy="118" rx="88" ry="28"
        fill={f('crown')} stroke="#1a1a1a" strokeWidth="11"
        onClick={() => onRegionClick?.('crown')} style={{ cursor: 'pointer' }}
      />
      {/* Band */}
      <rect x="112" y="265" width="176" height="42" rx="5"
        fill={f('band')} stroke="#1a1a1a" strokeWidth="9"
        onClick={() => onRegionClick?.('band')} style={{ cursor: 'pointer' }}
      />
      {/* Band buckle */}
      <rect x="178" y="274" width="44" height="24" rx="4"
        fill={f('band')} stroke="#1a1a1a" strokeWidth="7"
        onClick={() => onRegionClick?.('band')} style={{ cursor: 'pointer' }}
      />
      <rect x="193" y="280" width="14" height="12" rx="2"
        fill="#1a1a1a" stroke="#1a1a1a" strokeWidth="3"
      />
    </svg>
  );
}

// ─── SHOE ─────────────────────────────────────────────────────────────────────
export function Shoe({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Sole */}
      <path
        d="M 55 345 C 52 365 62 385 88 395 L 320 395 C 348 395 358 378 355 360 C 352 345 335 335 312 335 L 200 335 Z"
        fill={f('sole')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round"
        onClick={() => onRegionClick?.('sole')} style={{ cursor: 'pointer' }}
      />
      {/* Upper shoe */}
      <path
        d="M 95 335 C 88 308 85 278 90 252 C 96 228 115 210 140 205
           L 240 200 C 268 198 288 210 298 232 C 308 255 308 292 308 335 Z"
        fill={f('upper')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round"
        onClick={() => onRegionClick?.('upper')} style={{ cursor: 'pointer' }}
      />
      {/* Toe cap */}
      <path
        d="M 55 345 C 55 305 68 278 92 262 C 70 285 62 315 55 345 Z"
        fill={f('upper')} stroke="#1a1a1a" strokeWidth="9"
        onClick={() => onRegionClick?.('upper')} style={{ cursor: 'pointer' }}
      />
      {/* Laces area */}
      <path d="M 155 205 C 158 220 160 245 162 270" fill="none" stroke="#1a1a1a" strokeWidth="7" strokeLinecap="round" />
      <path d="M 200 200 C 200 218 200 242 200 268" fill="none" stroke="#1a1a1a" strokeWidth="7" strokeLinecap="round" />
      <path d="M 245 205 C 242 220 240 245 238 270" fill="none" stroke="#1a1a1a" strokeWidth="7" strokeLinecap="round" />
      {/* Lace ties */}
      {[215, 235, 255].map((y, i) => (
        <line key={i} x1="162" y1={y} x2="238" y2={y} stroke="#1a1a1a" strokeWidth="6" strokeLinecap="round" />
      ))}
      {/* Laces */}
      <path
        d="M 178 270 C 188 275 200 278 215 275 C 225 273 232 268 240 268"
        fill="none" stroke={f('laces')} strokeWidth="8" strokeLinecap="round"
        onClick={() => onRegionClick?.('laces')} style={{ cursor: 'pointer' }}
      />
      <circle cx="178" cy="272" r="8" fill={f('laces')} stroke="#1a1a1a" strokeWidth="6" onClick={() => onRegionClick?.('laces')} style={{ cursor: 'pointer' }} />
      <circle cx="222" cy="272" r="8" fill={f('laces')} stroke="#1a1a1a" strokeWidth="6" onClick={() => onRegionClick?.('laces')} style={{ cursor: 'pointer' }} />
    </svg>
  );
}

// ─── SOCK ─────────────────────────────────────────────────────────────────────
export function Sock({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Leg */}
      <path
        d="M 148 70 L 148 295 C 148 295 145 310 138 328 C 125 355 108 368 98 385 C 88 402 92 422 110 430
           C 128 438 185 440 215 435 C 240 430 255 418 252 400 C 250 385 238 372 228 360
           C 215 345 208 325 208 295 L 208 70 Z"
        fill={f('leg')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round"
        onClick={() => onRegionClick?.('leg')} style={{ cursor: 'pointer' }}
      />
      {/* Top stripe */}
      <path
        d="M 148 70 C 148 90 148 108 148 108 L 208 108 C 208 108 208 90 208 70 Z"
        fill={f('stripe')} stroke="#1a1a1a" strokeWidth="9"
        onClick={() => onRegionClick?.('stripe')} style={{ cursor: 'pointer' }}
      />
      {/* Mid stripe */}
      <path
        d="M 148 135 L 208 135 L 208 162 L 148 162 Z"
        fill={f('stripe')} stroke="#1a1a1a" strokeWidth="9"
        onClick={() => onRegionClick?.('stripe')} style={{ cursor: 'pointer' }}
      />
      {/* Top cuff line */}
      <line x1="148" y1="70" x2="208" y2="70" stroke="#1a1a1a" strokeWidth="11" strokeLinecap="round" />
      {/* Heel area */}
      <path d="M 148 295 C 135 310 125 328 115 348 C 135 355 160 352 175 345 C 168 328 158 310 155 295 Z"
        fill={f('foot')} stroke="#1a1a1a" strokeWidth="8"
        onClick={() => onRegionClick?.('foot')} style={{ cursor: 'pointer' }}
      />
      {/* Toe area */}
      <ellipse cx="180" cy="432" rx="52" ry="20"
        fill={f('foot')} stroke="#1a1a1a" strokeWidth="9"
        onClick={() => onRegionClick?.('foot')} style={{ cursor: 'pointer' }}
      />
    </svg>
  );
}

// ─── CROWN ────────────────────────────────────────────────────────────────────
export function Crown({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Base band */}
      <path
        d="M 55 330 L 55 378 C 55 395 68 408 85 408 L 315 408 C 332 408 345 395 345 378 L 345 330 Z"
        fill={f('base')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round"
        onClick={() => onRegionClick?.('base')} style={{ cursor: 'pointer' }}
      />
      {/* Spikes - 5 points */}
      <path
        d="M 55 330 L 55 195 L 110 268 L 148 148 L 200 255 L 252 148 L 290 268 L 345 195 L 345 330 Z"
        fill={f('spikes')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round"
        onClick={() => onRegionClick?.('spikes')} style={{ cursor: 'pointer' }}
      />
      {/* Gem circles on spikes */}
      <circle cx="200" cy="182" r="22" fill={f('gems')} stroke="#1a1a1a" strokeWidth="9"
        onClick={() => onRegionClick?.('gems')} style={{ cursor: 'pointer' }} />
      <circle cx="110" cy="238" r="18" fill={f('gems')} stroke="#1a1a1a" strokeWidth="9"
        onClick={() => onRegionClick?.('gems')} style={{ cursor: 'pointer' }} />
      <circle cx="290" cy="238" r="18" fill={f('gems')} stroke="#1a1a1a" strokeWidth="9"
        onClick={() => onRegionClick?.('gems')} style={{ cursor: 'pointer' }} />
      {/* Small gems on base */}
      {[100, 145, 200, 255, 300].map((cx, i) => (
        <circle key={i} cx={cx} cy="368" r="14" fill={f('gems')} stroke="#1a1a1a" strokeWidth="8"
          onClick={() => onRegionClick?.('gems')} style={{ cursor: 'pointer' }} />
      ))}
      {/* Star on center gem */}
      <text x="200" y="188" textAnchor="middle" dominantBaseline="middle"
        fontSize="22" fill="#1a1a1a" style={{ userSelect: 'none', pointerEvents: 'none' }}>✦</text>
    </svg>
  );
}
