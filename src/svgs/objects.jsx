// SVG Coloring Drawings - OBJECTS
const svgProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 400 450',
  style: { width: '100%', height: '100%', userSelect: 'none' },
};

// ─── HOUSE ────────────────────────────────────────────────────────────────────
export function House({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Walls */}
      <rect x="72" y="238" width="256" height="192" rx="8"
        fill={f('walls')} stroke="#1a1a1a" strokeWidth="11"
        onClick={() => onRegionClick?.('walls')} style={{ cursor: 'pointer' }}
      />
      {/* Roof */}
      <path d="M 52 250 L 200 88 L 348 250 Z"
        fill={f('roof')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round"
        onClick={() => onRegionClick?.('roof')} style={{ cursor: 'pointer' }}
      />
      {/* Chimney */}
      <rect x="268" y="110" width="40" height="75" rx="5"
        fill={f('roof')} stroke="#1a1a1a" strokeWidth="10"
        onClick={() => onRegionClick?.('roof')} style={{ cursor: 'pointer' }}
      />
      {/* Door */}
      <path d="M 170 430 L 170 320 C 170 308 178 300 190 300 L 210 300 C 222 300 230 308 230 320 L 230 430 Z"
        fill={f('door')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round"
        onClick={() => onRegionClick?.('door')} style={{ cursor: 'pointer' }}
      />
      {/* Door knob */}
      <circle cx="222" cy="365" r="8" fill="#1a1a1a" />
      {/* Left window */}
      <rect x="92" y="268" width="72" height="65" rx="8"
        fill={f('window')} stroke="#1a1a1a" strokeWidth="10"
        onClick={() => onRegionClick?.('window')} style={{ cursor: 'pointer' }}
      />
      {/* Right window */}
      <rect x="236" y="268" width="72" height="65" rx="8"
        fill={f('window')} stroke="#1a1a1a" strokeWidth="10"
        onClick={() => onRegionClick?.('window')} style={{ cursor: 'pointer' }}
      />
      {/* Window cross bars */}
      <line x1="128" y1="268" x2="128" y2="333" stroke="#1a1a1a" strokeWidth="7" />
      <line x1="92" y1="300" x2="164" y2="300" stroke="#1a1a1a" strokeWidth="7" />
      <line x1="272" y1="268" x2="272" y2="333" stroke="#1a1a1a" strokeWidth="7" />
      <line x1="236" y1="300" x2="308" y2="300" stroke="#1a1a1a" strokeWidth="7" />
      {/* Roof ridge */}
      <line x1="200" y1="90" x2="200" y2="250" stroke="#1a1a1a" strokeWidth="5" strokeDasharray="8 8" />
    </svg>
  );
}

// ─── STAR ─────────────────────────────────────────────────────────────────────
export function Star({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  const points = Array.from({ length: 5 }, (_, i) => {
    const outerR = 172, innerR = 75;
    const outerAngle = (i * 72 - 90) * Math.PI / 180;
    const innerAngle = ((i * 72 + 36) - 90) * Math.PI / 180;
    return [
      200 + outerR * Math.cos(outerAngle), 232 + outerR * Math.sin(outerAngle),
      200 + innerR * Math.cos(innerAngle), 232 + innerR * Math.sin(innerAngle),
    ];
  }).flat().reduce((acc, v, i) => {
    if (i % 4 === 0) acc.push(`${v},`);
    else if (i % 4 === 1) acc.push(`${v} `);
    else if (i % 4 === 2) acc.push(`${v},`);
    else acc.push(`${v} `);
    return acc;
  }, []).join('');

  const starPath = Array.from({ length: 5 }, (_, i) => {
    const outerR = 172, innerR = 75;
    const outerAngle = (i * 72 - 90) * Math.PI / 180;
    const innerAngle = ((i * 72 + 36) - 90) * Math.PI / 180;
    const ox = 200 + outerR * Math.cos(outerAngle);
    const oy = 232 + outerR * Math.sin(outerAngle);
    const ix = 200 + innerR * Math.cos(innerAngle);
    const iy = 232 + innerR * Math.sin(innerAngle);
    return `${i === 0 ? 'M' : 'L'} ${ox.toFixed(1)} ${oy.toFixed(1)} L ${ix.toFixed(1)} ${iy.toFixed(1)}`;
  }).join(' ') + ' Z';

  return (
    <svg {...svgProps}>
      <path
        d={starPath}
        fill={f('body')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round"
        onClick={() => onRegionClick?.('body')} style={{ cursor: 'pointer' }}
      />
      {/* Face */}
      <circle cx="170" cy="215" r="12" fill="#1a1a1a" />
      <circle cx="230" cy="215" r="12" fill="#1a1a1a" />
      <path d="M 175 248 C 188 258 212 258 225 248" fill="none" stroke="#1a1a1a" strokeWidth="8" strokeLinecap="round" />
    </svg>
  );
}

// ─── HEART ────────────────────────────────────────────────────────────────────
export function Heart({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Heart shape */}
      <path
        d="M 200 405 C 165 378 65 315 55 230 C 45 158 88 108 138 100 C 162 96 185 106 200 125
           C 215 106 238 96 262 100 C 312 108 355 158 345 230 C 335 315 235 378 200 405 Z"
        fill={f('body')} stroke="#1a1a1a" strokeWidth="12" strokeLinejoin="round"
        onClick={() => onRegionClick?.('body')} style={{ cursor: 'pointer' }}
      />
      {/* Heart line */}
      <path d="M 200 125 C 200 165 200 200 200 238" fill="none" stroke="#1a1a1a" strokeWidth="7" strokeLinecap="round" />
      {/* Face */}
      <circle cx="165" cy="235" r="14" fill="#1a1a1a" />
      <circle cx="235" cy="235" r="14" fill="#1a1a1a" />
      <circle cx="159" cy="229" r="5" fill="white" />
      <circle cx="229" cy="229" r="5" fill="white" />
      <path d="M 172 272 C 186 285 214 285 228 272" fill="none" stroke="#1a1a1a" strokeWidth="9" strokeLinecap="round" />
      {/* Cheek blushes */}
      <ellipse cx="142" cy="260" rx="18" ry="10" fill="#FF85A1" opacity="0.5" />
      <ellipse cx="258" cy="260" rx="18" ry="10" fill="#FF85A1" opacity="0.5" />
    </svg>
  );
}

// ─── CAR ──────────────────────────────────────────────────────────────────────
export function Car({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Body */}
      <path
        d="M 42 295 L 42 355 C 42 372 55 385 72 385 L 328 385 C 345 385 358 372 358 355 L 358 295
           C 358 280 348 272 332 270 L 282 265 L 118 265 L 68 270 C 52 272 42 280 42 295 Z"
        fill={f('body')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round"
        onClick={() => onRegionClick?.('body')} style={{ cursor: 'pointer' }}
      />
      {/* Roof */}
      <path
        d="M 118 265 C 122 230 138 200 165 185 L 235 185 C 262 200 278 230 282 265 Z"
        fill={f('roof')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round"
        onClick={() => onRegionClick?.('roof')} style={{ cursor: 'pointer' }}
      />
      {/* Window */}
      <path
        d="M 128 263 C 132 232 146 208 168 196 L 232 196 C 254 208 268 232 272 263 Z"
        fill={f('window')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round"
        onClick={() => onRegionClick?.('window')} style={{ cursor: 'pointer' }}
      />
      {/* Window divider */}
      <line x1="200" y1="196" x2="200" y2="263" stroke="#1a1a1a" strokeWidth="7" />
      {/* Left wheel */}
      <circle cx="112" cy="380" r="52"
        fill={f('wheels')} stroke="#1a1a1a" strokeWidth="11"
        onClick={() => onRegionClick?.('wheels')} style={{ cursor: 'pointer' }}
      />
      <circle cx="112" cy="380" r="28" fill="white" stroke="#1a1a1a" strokeWidth="9"
        onClick={() => onRegionClick?.('wheels')} style={{ cursor: 'pointer' }}
      />
      <circle cx="112" cy="380" r="10" fill="#1a1a1a" />
      {/* Right wheel */}
      <circle cx="288" cy="380" r="52"
        fill={f('wheels')} stroke="#1a1a1a" strokeWidth="11"
        onClick={() => onRegionClick?.('wheels')} style={{ cursor: 'pointer' }}
      />
      <circle cx="288" cy="380" r="28" fill="white" stroke="#1a1a1a" strokeWidth="9"
        onClick={() => onRegionClick?.('wheels')} style={{ cursor: 'pointer' }}
      />
      <circle cx="288" cy="380" r="10" fill="#1a1a1a" />
      {/* Headlight */}
      <ellipse cx="345" cy="308" rx="18" ry="14" fill="white" stroke="#1a1a1a" strokeWidth="8" />
      {/* Tail light */}
      <ellipse cx="55" cy="308" rx="18" ry="14" fill="white" stroke="#1a1a1a" strokeWidth="8" />
      {/* Door line */}
      <path d="M 200 270 L 200 360" stroke="#1a1a1a" strokeWidth="7" strokeLinecap="round" />
      {/* Door handle */}
      <rect x="232" y="312" width="32" height="10" rx="5" fill="white" stroke="#1a1a1a" strokeWidth="6" />
    </svg>
  );
}

// ─── BALLOON ──────────────────────────────────────────────────────────────────
export function Balloon({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Balloon */}
      <ellipse cx="200" cy="198" rx="142" ry="165"
        fill={f('body')} stroke="#1a1a1a" strokeWidth="11"
        onClick={() => onRegionClick?.('body')} style={{ cursor: 'pointer' }}
      />
      {/* Highlight */}
      <ellipse cx="155" cy="148" rx="35" ry="48"
        fill="white" stroke="none" opacity="0.35"
        onClick={() => onRegionClick?.('body')} style={{ cursor: 'pointer' }}
      />
      {/* Knot */}
      <path d="M 192 362 C 188 370 185 375 188 382 C 192 390 208 390 212 382 C 215 375 212 370 208 362 L 200 368 Z"
        fill={f('body')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round"
        onClick={() => onRegionClick?.('body')} style={{ cursor: 'pointer' }}
      />
      {/* String */}
      <path d="M 200 386 C 215 400 195 418 205 430 C 212 438 225 440 232 438"
        fill="none" stroke="#1a1a1a" strokeWidth="6" strokeLinecap="round"
      />
      {/* Ribbon bow */}
      <path d="M 178 370 C 168 360 158 360 158 368 C 158 376 168 376 178 370 Z"
        fill={f('ribbon')} stroke="#1a1a1a" strokeWidth="7"
        onClick={() => onRegionClick?.('ribbon')} style={{ cursor: 'pointer' }}
      />
      <path d="M 222 370 C 232 360 242 360 242 368 C 242 376 232 376 222 370 Z"
        fill={f('ribbon')} stroke="#1a1a1a" strokeWidth="7"
        onClick={() => onRegionClick?.('ribbon')} style={{ cursor: 'pointer' }}
      />
      <circle cx="200" cy="370" r="9" fill={f('ribbon')} stroke="#1a1a1a" strokeWidth="7"
        onClick={() => onRegionClick?.('ribbon')} style={{ cursor: 'pointer' }}
      />
      {/* Face on balloon */}
      <circle cx="170" cy="198" r="12" fill="#1a1a1a" />
      <circle cx="230" cy="198" r="12" fill="#1a1a1a" />
      <circle cx="165" cy="193" r="4" fill="white" />
      <circle cx="225" cy="193" r="4" fill="white" />
      <path d="M 175 235 C 188 248 212 248 225 235" fill="none" stroke="#1a1a1a" strokeWidth="9" strokeLinecap="round" />
    </svg>
  );
}

// ─── UMBRELLA ─────────────────────────────────────────────────────────────────
export function Umbrella({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Main canopy */}
      <path
        d="M 48 245 C 48 155 115 85 200 78 C 285 85 352 155 352 245 Z"
        fill={f('canopy')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round"
        onClick={() => onRegionClick?.('canopy')} style={{ cursor: 'pointer' }}
      />
      {/* Canopy segments - 4 panels */}
      <path d="M 200 78 L 200 245" stroke="#1a1a1a" strokeWidth="8" />
      <path d="M 200 80 C 168 95 145 145 140 245" stroke="#1a1a1a" strokeWidth="7" strokeLinecap="round" />
      <path d="M 200 80 C 232 95 255 145 260 245" stroke="#1a1a1a" strokeWidth="7" strokeLinecap="round" />
      <path d="M 200 78 C 138 88 90 145 55 245" stroke="#1a1a1a" strokeWidth="7" />
      <path d="M 200 78 C 262 88 310 145 345 245" stroke="#1a1a1a" strokeWidth="7" />
      {/* Bottom edge scallops */}
      {[0, 1, 2, 3].map(i => {
        const x1 = 48 + i * 76;
        const x2 = x1 + 76;
        const mx = (x1 + x2) / 2;
        return (
          <path key={i}
            d={`M ${x1} 245 Q ${mx} 272 ${x2} 245`}
            fill={f('canopy')} stroke="#1a1a1a" strokeWidth="9"
            onClick={() => onRegionClick?.('canopy')} style={{ cursor: 'pointer' }}
          />
        );
      })}
      {/* Handle */}
      <path
        d="M 200 245 L 200 390 C 200 408 215 420 230 415 C 245 410 248 395 238 385 C 228 375 215 375 210 382"
        fill="none" stroke={f('handle')} strokeWidth="18" strokeLinecap="round" strokeLinejoin="round"
        onClick={() => onRegionClick?.('handle')} style={{ cursor: 'pointer' }}
      />
      <path
        d="M 200 245 L 200 390 C 200 408 215 420 230 415 C 245 410 248 395 238 385 C 228 375 215 375 210 382"
        fill="none" stroke="#1a1a1a" strokeWidth="28" strokeLinecap="round" strokeLinejoin="round"
        onClick={() => onRegionClick?.('handle')} style={{ cursor: 'pointer' }}
      />
      <path
        d="M 200 245 L 200 390 C 200 408 215 420 230 415 C 245 410 248 395 238 385 C 228 375 215 375 210 382"
        fill="none" stroke={f('handle')} strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"
        onClick={() => onRegionClick?.('handle')} style={{ cursor: 'pointer' }}
      />
      {/* Top tip */}
      <circle cx="200" cy="73" r="12" fill={f('canopy')} stroke="#1a1a1a" strokeWidth="9"
        onClick={() => onRegionClick?.('canopy')} style={{ cursor: 'pointer' }}
      />
    </svg>
  );
}
