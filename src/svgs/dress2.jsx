// SVG Coloring Drawings - DRESS UP 2 (30 new items)
// viewBox 0 0 400 450, strokeWidth 10+ for toddler-friendly thick lines

const svgProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 400 450',
  style: { width: '100%', height: '100%', userSelect: 'none' },
};

// ─── 1. PRINCESS DRESS ────────────────────────────────────────────────────────
export function PrincessDress({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Big puffy skirt */}
      <path d="M 105 268 C 72 320 52 372 50 418 C 50 432 68 442 90 442 L 310 442 C 332 442 350 432 350 418 C 348 372 328 320 295 268 Z" fill={f('skirt')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('skirt')} style={{cursor:'pointer'}}/>
      {/* Skirt overlay layers */}
      <path d="M 125 310 C 105 345 92 382 90 418" fill="none" stroke="#1a1a1a" strokeWidth="7" strokeLinecap="round"/>
      <path d="M 200 285 C 200 345 200 400 200 442" fill="none" stroke="#1a1a1a" strokeWidth="7" strokeLinecap="round"/>
      <path d="M 275 310 C 295 345 308 382 310 418" fill="none" stroke="#1a1a1a" strokeWidth="7" strokeLinecap="round"/>
      {/* Stars on skirt */}
      {[[130,360],[200,340],[270,360],[155,415],[245,415]].map(([cx,cy],i)=>(
        <text key={i} x={cx} y={cy} textAnchor="middle" fontSize="26" fill={f('stars')} stroke="#1a1a1a" strokeWidth="3" style={{userSelect:'none',pointerEvents:'none'}} onClick={() => onRegionClick?.('stars')}>★</text>
      ))}
      {/* Bodice */}
      <path d="M 148 155 L 105 268 L 295 268 L 252 155 Z" fill={f('bodice')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('bodice')} style={{cursor:'pointer'}}/>
      {/* Left puff sleeve */}
      <ellipse cx="120" cy="162" rx="50" ry="40" fill={f('sleeves')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('sleeves')} style={{cursor:'pointer'}}/>
      {/* Right puff sleeve */}
      <ellipse cx="280" cy="162" rx="50" ry="40" fill={f('sleeves')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('sleeves')} style={{cursor:'pointer'}}/>
      {/* Neckline */}
      <path d="M 148 155 C 168 148 200 145 252 155" fill="none" stroke="#1a1a1a" strokeWidth="9" strokeLinecap="round"/>
      {/* Waist bow */}
      <path d="M 178 268 C 165 256 152 256 152 268 C 152 280 165 280 178 268 Z" fill={f('bow')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('bow')} style={{cursor:'pointer'}}/>
      <path d="M 222 268 C 235 256 248 256 248 268 C 248 280 235 280 222 268 Z" fill={f('bow')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('bow')} style={{cursor:'pointer'}}/>
      <circle cx="200" cy="268" r="14" fill={f('bow')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('bow')} style={{cursor:'pointer'}}/>
    </svg>
  );
}

// ─── 2. RAINCOAT ──────────────────────────────────────────────────────────────
export function Raincoat({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Left sleeve */}
      <path d="M 75 130 L 52 215 C 49 228 56 240 70 242 L 125 248 L 132 175 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Right sleeve */}
      <path d="M 325 130 L 348 215 C 351 228 344 240 330 242 L 275 248 L 268 175 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Main body */}
      <path d="M 132 175 L 75 130 C 100 115 130 105 165 102 C 172 115 180 125 200 128 C 220 125 228 115 235 102 C 270 105 300 115 325 130 L 268 175 L 268 428 L 132 428 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Hood */}
      <path d="M 148 102 C 142 80 145 55 158 42 C 170 30 180 28 200 28 C 220 28 230 30 242 42 C 255 55 258 80 252 102 Z" fill={f('hood')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('hood')} style={{cursor:'pointer'}}/>
      {/* Hood brim */}
      <path d="M 140 105 C 155 95 178 90 200 90 C 222 90 245 95 260 105" fill="none" stroke="#1a1a1a" strokeWidth="9" strokeLinecap="round"/>
      {/* Buttons */}
      {[185,230,278,325,372].map((y,i)=>(
        <circle key={i} cx="200" cy={y} r="12" fill={f('buttons')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('buttons')} style={{cursor:'pointer'}}/>
      ))}
      {/* Pocket */}
      <rect x="235" y="278" width="58" height="52" rx="10" fill={f('body')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Rain drops pattern */}
      {[[118,218],[145,248],[165,225],[285,228],[310,252],[330,225]].map(([cx,cy],i)=>(
        <path key={i} d={`M ${cx} ${cy+12} C ${cx-8} ${cy+5} ${cx-8} ${cy-5} ${cx} ${cy-12} C ${cx+8} ${cy-5} ${cx+8} ${cy+5} ${cx} ${cy+12}`} fill={f('drops')} stroke="#1a1a1a" strokeWidth="5" onClick={() => onRegionClick?.('drops')} style={{cursor:'pointer'}}/>
      ))}
    </svg>
  );
}

// ─── 3. SWIMSUIT ──────────────────────────────────────────────────────────────
export function Swimsuit({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Bottom half */}
      <path d="M 135 268 C 118 325 108 378 105 428 L 295 428 C 292 378 282 325 265 268 Z" fill={f('bottom')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('bottom')} style={{cursor:'pointer'}}/>
      {/* Top half */}
      <path d="M 135 268 L 295 268 L 278 155 C 270 138 245 128 225 132 C 215 135 205 142 200 148 C 195 142 185 135 175 132 C 155 128 130 138 122 155 Z" fill={f('top')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('top')} style={{cursor:'pointer'}}/>
      {/* Straps */}
      <path d="M 175 132 C 172 105 174 82 180 68" fill="none" stroke="#1a1a1a" strokeWidth="12" strokeLinecap="round" onClick={() => onRegionClick?.('straps')} style={{cursor:'pointer'}}/>
      <path d="M 175 132 C 172 105 174 82 180 68" fill="none" stroke={f('straps')} strokeWidth="5"/>
      <path d="M 225 132 C 228 105 226 82 220 68" fill="none" stroke="#1a1a1a" strokeWidth="12" strokeLinecap="round" onClick={() => onRegionClick?.('straps')} style={{cursor:'pointer'}}/>
      <path d="M 225 132 C 228 105 226 82 220 68" fill="none" stroke={f('straps')} strokeWidth="5"/>
      {/* Waist band */}
      <path d="M 135 268 L 265 268" stroke="#1a1a1a" strokeWidth="10" strokeLinecap="round"/>
      {/* Star pattern */}
      {[[160,200],[200,185],[240,200],[178,238],[222,238]].map(([cx,cy],i)=>(
        <text key={i} x={cx} y={cy} textAnchor="middle" fontSize="22" fill={f('pattern')} stroke="#1a1a1a" strokeWidth="3" style={{userSelect:'none',pointerEvents:'none'}} onClick={() => onRegionClick?.('pattern')}>★</text>
      ))}
      {/* Wave pattern on bottom */}
      <path d="M 112 345 C 135 335 160 348 185 338 C 210 328 235 342 260 332 C 280 324 292 332 295 340" fill="none" stroke="#1a1a1a" strokeWidth="7" strokeLinecap="round"/>
    </svg>
  );
}

// ─── 4. WINTER COAT ───────────────────────────────────────────────────────────
export function WinterCoat({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Left sleeve with fur cuff */}
      <path d="M 72 128 L 48 210 C 45 224 52 238 68 240 L 128 248 L 135 172 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <ellipse cx="62" cy="238" rx="24" ry="14" fill={f('fur')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('fur')} style={{cursor:'pointer'}}/>
      {/* Right sleeve with fur cuff */}
      <path d="M 328 128 L 352 210 C 355 224 348 238 332 240 L 272 248 L 265 172 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <ellipse cx="338" cy="238" rx="24" ry="14" fill={f('fur')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('fur')} style={{cursor:'pointer'}}/>
      {/* Body */}
      <path d="M 135 172 L 72 128 C 98 112 130 102 168 100 C 174 115 184 124 200 126 C 216 124 226 115 232 100 C 270 102 302 112 328 128 L 265 172 L 265 435 L 135 435 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Fur collar */}
      <path d="M 158 100 C 162 82 168 65 175 55 C 182 65 188 78 192 92" fill="none" stroke="#1a1a1a" strokeWidth="22" strokeLinecap="round" onClick={() => onRegionClick?.('fur')} style={{cursor:'pointer'}}/>
      <path d="M 158 100 C 162 82 168 65 175 55 C 182 65 188 78 192 92" fill="none" stroke={f('fur')} strokeWidth="10"/>
      <path d="M 242 100 C 238 82 232 65 225 55 C 218 65 212 78 208 92" fill="none" stroke="#1a1a1a" strokeWidth="22" strokeLinecap="round" onClick={() => onRegionClick?.('fur')} style={{cursor:'pointer'}}/>
      <path d="M 242 100 C 238 82 232 65 225 55 C 218 65 212 78 208 92" fill="none" stroke={f('fur')} strokeWidth="10"/>
      {/* Fur hem */}
      <rect x="135" y="415" width="130" height="22" rx="10" fill={f('fur')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('fur')} style={{cursor:'pointer'}}/>
      {/* Buttons */}
      {[155,200,248,295,342].map((y,i)=>(
        <circle key={i} cx="200" cy={y} r="12" fill={f('buttons')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('buttons')} style={{cursor:'pointer'}}/>
      ))}
      {/* Belt */}
      <rect x="135" y="268" width="130" height="28" rx="8" fill={f('belt')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('belt')} style={{cursor:'pointer'}}/>
      <rect x="186" y="273" width="28" height="18" rx="4" fill="white" stroke="#1a1a1a" strokeWidth="6"/>
    </svg>
  );
}

// ─── 5. HOODIE ────────────────────────────────────────────────────────────────
export function Hoodie({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Left sleeve */}
      <path d="M 72 135 L 48 218 C 45 232 54 244 70 246 L 128 252 L 135 178 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Right sleeve */}
      <path d="M 328 135 L 352 218 C 355 232 346 244 330 246 L 272 252 L 265 178 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Body */}
      <path d="M 135 178 L 72 135 C 98 118 132 108 168 106 C 174 120 182 128 200 130 C 218 128 226 120 232 106 C 268 108 302 118 328 135 L 265 178 L 265 435 L 135 435 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Hood */}
      <path d="M 155 106 C 148 82 148 58 158 42 C 170 28 180 25 200 25 C 220 25 230 28 242 42 C 252 58 252 82 245 106 Z" fill={f('hood')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('hood')} style={{cursor:'pointer'}}/>
      {/* Hood tunnel edge */}
      <path d="M 155 106 C 170 98 185 94 200 94 C 215 94 230 98 245 106" fill="none" stroke="#1a1a1a" strokeWidth="9" strokeLinecap="round"/>
      {/* Kangaroo pocket */}
      <path d="M 148 298 C 142 318 142 348 148 368 L 252 368 C 258 348 258 318 252 298 Z" fill={f('pocket')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round" onClick={() => onRegionClick?.('pocket')} style={{cursor:'pointer'}}/>
      <line x1="200" y1="298" x2="200" y2="368" stroke="#1a1a1a" strokeWidth="7" strokeLinecap="round"/>
      {/* Drawstrings */}
      <path d="M 182 106 C 178 118 175 130 173 142" fill="none" stroke="#1a1a1a" strokeWidth="7" strokeLinecap="round"/>
      <path d="M 218 106 C 222 118 225 130 227 142" fill="none" stroke="#1a1a1a" strokeWidth="7" strokeLinecap="round"/>
      <circle cx="170" cy="148" r="9" fill={f('pocket')} stroke="#1a1a1a" strokeWidth="6" onClick={() => onRegionClick?.('pocket')} style={{cursor:'pointer'}}/>
      <circle cx="230" cy="148" r="9" fill={f('pocket')} stroke="#1a1a1a" strokeWidth="6" onClick={() => onRegionClick?.('pocket')} style={{cursor:'pointer'}}/>
      {/* Cuffs */}
      <ellipse cx="62" cy="244" rx="22" ry="11" fill={f('cuffs')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('cuffs')} style={{cursor:'pointer'}}/>
      <ellipse cx="338" cy="244" rx="22" ry="11" fill={f('cuffs')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('cuffs')} style={{cursor:'pointer'}}/>
      <ellipse cx="200" cy="435" rx="65" ry="12" fill={f('cuffs')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('cuffs')} style={{cursor:'pointer'}}/>
    </svg>
  );
}

// ─── 6. BOOTS ─────────────────────────────────────────────────────────────────
export function Boots({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Left boot */}
      <path d="M 88 75 L 88 308 C 88 322 80 335 68 342 C 52 352 38 368 38 390 C 38 418 58 432 90 432 L 188 432 C 215 432 228 418 225 395 C 222 375 212 360 202 355 L 188 345 L 188 75 Z" fill={f('boot')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('boot')} style={{cursor:'pointer'}}/>
      {/* Left sole */}
      <path d="M 35 410 C 35 425 55 435 90 435 C 125 435 195 430 220 418 C 210 405 188 400 165 400 L 68 400 C 52 400 35 404 35 410 Z" fill={f('sole')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round" onClick={() => onRegionClick?.('sole')} style={{cursor:'pointer'}}/>
      {/* Left top fold */}
      <rect x="88" y="58" width="100" height="30" rx="10" fill={f('top')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('top')} style={{cursor:'pointer'}}/>
      {/* Left buckle */}
      <rect x="108" y="198" width="72" height="20" rx="8" fill={f('buckle')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('buckle')} style={{cursor:'pointer'}}/>
      <rect x="136" y="202" width="16" height="12" rx="3" fill="white" stroke="#1a1a1a" strokeWidth="5"/>
      {/* Right boot */}
      <path d="M 212 75 L 212 308 C 212 322 220 335 232 342 C 248 352 362 368 362 390 C 362 418 342 432 310 432 L 212 432 C 185 432 172 418 175 395 C 178 375 188 360 198 355 L 212 345 L 212 75 Z" fill={f('boot')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('boot')} style={{cursor:'pointer'}}/>
      {/* Right sole */}
      <path d="M 365 410 C 365 425 345 435 310 435 C 275 435 205 430 180 418 C 190 405 212 400 235 400 L 332 400 C 348 400 365 404 365 410 Z" fill={f('sole')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round" onClick={() => onRegionClick?.('sole')} style={{cursor:'pointer'}}/>
      {/* Right top fold */}
      <rect x="212" y="58" width="100" height="30" rx="10" fill={f('top')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('top')} style={{cursor:'pointer'}}/>
      {/* Right buckle */}
      <rect x="220" y="198" width="72" height="20" rx="8" fill={f('buckle')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('buckle')} style={{cursor:'pointer'}}/>
      <rect x="248" y="202" width="16" height="12" rx="3" fill="white" stroke="#1a1a1a" strokeWidth="5"/>
    </svg>
  );
}

// ─── 7. SUNGLASSES ────────────────────────────────────────────────────────────
export function Sunglasses({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Left arm */}
      <path d="M 58 210 C 38 210 28 220 28 235 C 28 250 38 255 55 252" fill="none" stroke="#1a1a1a" strokeWidth="16" strokeLinecap="round" onClick={() => onRegionClick?.('frame')} style={{cursor:'pointer'}}/>
      <path d="M 58 210 C 38 210 28 220 28 235 C 28 250 38 255 55 252" fill="none" stroke={f('frame')} strokeWidth="6"/>
      {/* Right arm */}
      <path d="M 342 210 C 362 210 372 220 372 235 C 372 250 362 255 345 252" fill="none" stroke="#1a1a1a" strokeWidth="16" strokeLinecap="round" onClick={() => onRegionClick?.('frame')} style={{cursor:'pointer'}}/>
      <path d="M 342 210 C 362 210 372 220 372 235 C 372 250 362 255 345 252" fill="none" stroke={f('frame')} strokeWidth="6"/>
      {/* Left lens */}
      <rect x="58" y="175" width="128" height="92" rx="32" fill={f('leftLens')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('leftLens')} style={{cursor:'pointer'}}/>
      {/* Right lens */}
      <rect x="214" y="175" width="128" height="92" rx="32" fill={f('rightLens')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('rightLens')} style={{cursor:'pointer'}}/>
      {/* Bridge */}
      <path d="M 186 218 C 192 210 208 210 214 218" fill="none" stroke="#1a1a1a" strokeWidth="12" strokeLinecap="round" onClick={() => onRegionClick?.('frame')} style={{cursor:'pointer'}}/>
      <path d="M 186 218 C 192 210 208 210 214 218" fill="none" stroke={f('frame')} strokeWidth="5"/>
      {/* Lens shine */}
      <ellipse cx="98" cy="198" rx="22" ry="16" fill="white" opacity="0.3"/>
      <ellipse cx="254" cy="198" rx="22" ry="16" fill="white" opacity="0.3"/>
    </svg>
  );
}

// ─── 8. BACKPACK ──────────────────────────────────────────────────────────────
export function Backpack({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Shoulder straps */}
      <path d="M 148 108 C 128 128 118 158 118 192 L 118 380" fill="none" stroke="#1a1a1a" strokeWidth="22" strokeLinecap="round" onClick={() => onRegionClick?.('straps')} style={{cursor:'pointer'}}/>
      <path d="M 148 108 C 128 128 118 158 118 192 L 118 380" fill="none" stroke={f('straps')} strokeWidth="10"/>
      <path d="M 252 108 C 272 128 282 158 282 192 L 282 380" fill="none" stroke="#1a1a1a" strokeWidth="22" strokeLinecap="round" onClick={() => onRegionClick?.('straps')} style={{cursor:'pointer'}}/>
      <path d="M 252 108 C 272 128 282 158 282 192 L 282 380" fill="none" stroke={f('straps')} strokeWidth="10"/>
      {/* Main body */}
      <rect x="88" y="108" width="224" height="308" rx="28" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Front pocket */}
      <rect x="112" y="245" width="176" height="132" rx="18" fill={f('pocket')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('pocket')} style={{cursor:'pointer'}}/>
      {/* Zipper pockets */}
      <path d="M 125 245 C 165 235 235 235 275 245" fill="none" stroke="#1a1a1a" strokeWidth="8" strokeLinecap="round"/>
      <circle cx="200" cy="238" r="10" fill={f('zipper')} stroke="#1a1a1a" strokeWidth="7" onClick={() => onRegionClick?.('zipper')} style={{cursor:'pointer'}}/>
      {/* Top handle */}
      <path d="M 172 108 C 172 88 228 88 228 108" fill="none" stroke="#1a1a1a" strokeWidth="16" strokeLinecap="round" onClick={() => onRegionClick?.('straps')} style={{cursor:'pointer'}}/>
      <path d="M 172 108 C 172 88 228 88 228 108" fill="none" stroke={f('straps')} strokeWidth="7"/>
      {/* Main zipper */}
      <path d="M 100 200 C 148 188 252 188 300 200" fill="none" stroke="#1a1a1a" strokeWidth="8" strokeLinecap="round"/>
      <circle cx="200" cy="188" r="10" fill={f('zipper')} stroke="#1a1a1a" strokeWidth="7" onClick={() => onRegionClick?.('zipper')} style={{cursor:'pointer'}}/>
      {/* Star patch */}
      <text x="200" y="165" textAnchor="middle" fontSize="38" fill={f('zipper')} stroke="#1a1a1a" strokeWidth="3" style={{userSelect:'none',pointerEvents:'none'}}>★</text>
    </svg>
  );
}

// ─── 9. SCARF ─────────────────────────────────────────────────────────────────
export function Scarf({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Hanging end left */}
      <path d="M 115 268 C 108 315 102 362 98 415" fill="none" stroke="#1a1a1a" strokeWidth="52" strokeLinecap="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <path d="M 115 268 C 108 315 102 362 98 415" fill="none" stroke={f('body')} strokeWidth="38"/>
      {/* Fringe left */}
      {[85,95,105,115].map((x,i)=>(
        <line key={i} x1={x} y1="415" x2={x-4+i*3} y2="438" stroke="#1a1a1a" strokeWidth="7" strokeLinecap="round" onClick={() => onRegionClick?.('fringe')} style={{cursor:'pointer'}}/>
      ))}
      {/* Hanging end right */}
      <path d="M 285 268 C 292 315 298 362 302 415" fill="none" stroke="#1a1a1a" strokeWidth="52" strokeLinecap="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <path d="M 285 268 C 292 315 298 362 302 415" fill="none" stroke={f('body')} strokeWidth="38"/>
      {/* Fringe right */}
      {[285,295,305,315].map((x,i)=>(
        <line key={i} x1={x} y1="415" x2={x-4+i*3} y2="438" stroke="#1a1a1a" strokeWidth="7" strokeLinecap="round" onClick={() => onRegionClick?.('fringe')} style={{cursor:'pointer'}}/>
      ))}
      {/* Main wrapped section */}
      <ellipse cx="200" cy="205" rx="145" ry="88" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Stripe patterns */}
      {[155,175,195,215,235,255,275].map((x,i)=>(
        <ellipse key={i} cx={x} cy="205" rx="8" ry="88" fill={f('stripes')} stroke="#1a1a1a" strokeWidth="5" onClick={() => onRegionClick?.('stripes')} style={{cursor:'pointer'}}/>
      ))}
      {/* Knot */}
      <ellipse cx="200" cy="268" rx="55" ry="38" fill={f('knot')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('knot')} style={{cursor:'pointer'}}/>
      <path d="M 178 252 C 178 268 185 278 200 278 C 215 278 222 268 222 252" fill="none" stroke="#1a1a1a" strokeWidth="8" strokeLinecap="round"/>
    </svg>
  );
}

// ─── 10. MITTENS ──────────────────────────────────────────────────────────────
export function Mittens({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* String connecting mittens */}
      <path d="M 102 178 C 148 158 200 152 252 158 L 298 178" fill="none" stroke="#1a1a1a" strokeWidth="9" strokeLinecap="round" onClick={() => onRegionClick?.('string')} style={{cursor:'pointer'}}/>
      <path d="M 102 178 C 148 158 200 152 252 158 L 298 178" fill="none" stroke={f('string')} strokeWidth="4"/>
      {/* Left mitten — thumb */}
      <path d="M 78 192 C 62 185 52 195 55 212 C 58 228 72 232 85 225 Z" fill={f('mitten')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('mitten')} style={{cursor:'pointer'}}/>
      {/* Left mitten — body */}
      <path d="M 55 285 C 48 255 52 218 68 205 L 102 192 C 122 185 142 188 152 202 C 162 215 162 238 155 258 C 148 278 138 295 128 305 C 112 318 88 318 72 308 C 60 300 57 292 55 285 Z" fill={f('mitten')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('mitten')} style={{cursor:'pointer'}}/>
      {/* Left cuff */}
      <rect x="75" y="168" width="82" height="32" rx="12" fill={f('cuff')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('cuff')} style={{cursor:'pointer'}}/>
      {/* Right mitten — thumb */}
      <path d="M 322 192 C 338 185 348 195 345 212 C 342 228 328 232 315 225 Z" fill={f('mitten')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('mitten')} style={{cursor:'pointer'}}/>
      {/* Right mitten — body */}
      <path d="M 345 285 C 352 255 348 218 332 205 L 298 192 C 278 185 258 188 248 202 C 238 215 238 238 245 258 C 252 278 262 295 272 305 C 288 318 312 318 328 308 C 340 300 343 292 345 285 Z" fill={f('mitten')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('mitten')} style={{cursor:'pointer'}}/>
      {/* Right cuff */}
      <rect x="243" y="168" width="82" height="32" rx="12" fill={f('cuff')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('cuff')} style={{cursor:'pointer'}}/>
      {/* Snowflake on mittens */}
      {[[115,262],[285,262]].map(([cx,cy],i)=>(
        <g key={i}>
          <line x1={cx-18} y1={cy} x2={cx+18} y2={cy} stroke={f('cuff')} strokeWidth="8" strokeLinecap="round"/>
          <line x1={cx} y1={cy-18} x2={cx} y2={cy+18} stroke={f('cuff')} strokeWidth="8" strokeLinecap="round"/>
          <line x1={cx-13} y1={cy-13} x2={cx+13} y2={cy+13} stroke={f('cuff')} strokeWidth="6" strokeLinecap="round"/>
          <line x1={cx+13} y1={cy-13} x2={cx-13} y2={cy+13} stroke={f('cuff')} strokeWidth="6" strokeLinecap="round"/>
        </g>
      ))}
    </svg>
  );
}

// ─── 11. TUTU SKIRT ───────────────────────────────────────────────────────────
export function Tutu({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Waistband */}
      <rect x="105" y="148" width="190" height="38" rx="14" fill={f('waistband')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('waistband')} style={{cursor:'pointer'}}/>
      {/* Tulle layers — many overlapping petal shapes */}
      {Array.from({length:12},(_,i)=>{
        const angle=(i*30-90)*Math.PI/180;
        const cx=200+148*Math.cos(angle), cy=285+148*Math.sin(angle);
        return <ellipse key={i} cx={cx} cy={cy} rx="38" ry="88" transform={`rotate(${i*30} ${cx} ${cy})`} fill={f('tulle')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('tulle')} style={{cursor:'pointer'}}/>;
      })}
      {/* Inner layer */}
      {Array.from({length:8},(_,i)=>{
        const angle=(i*45-67)*Math.PI/180;
        const cx=200+95*Math.cos(angle), cy=268+95*Math.sin(angle);
        return <ellipse key={i} cx={cx} cy={cy} rx="28" ry="62" transform={`rotate(${i*45} ${cx} ${cy})`} fill={f('inner')} stroke="#1a1a1a" strokeWidth="7" onClick={() => onRegionClick?.('inner')} style={{cursor:'pointer'}}/>;
      })}
      {/* Stars scattered */}
      {[[148,248],[255,252],[128,322],[272,328],[155,395],[245,398],[200,268]].map(([cx,cy],i)=>(
        <text key={i} x={cx} y={cy} textAnchor="middle" fontSize="20" fill={f('waistband')} style={{userSelect:'none',pointerEvents:'none'}}>✦</text>
      ))}
      {/* Ballet ribbon ties */}
      <path d="M 155 148 C 145 118 132 95 122 78" fill="none" stroke="#1a1a1a" strokeWidth="9" strokeLinecap="round" onClick={() => onRegionClick?.('waistband')} style={{cursor:'pointer'}}/>
      <path d="M 245 148 C 255 118 268 95 278 78" fill="none" stroke="#1a1a1a" strokeWidth="9" strokeLinecap="round" onClick={() => onRegionClick?.('waistband')} style={{cursor:'pointer'}}/>
    </svg>
  );
}

// ─── 12. JEANS ────────────────────────────────────────────────────────────────
export function Jeans({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Left leg */}
      <path d="M 118 248 L 95 435 L 188 435 L 200 248 Z" fill={f('jeans')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('jeans')} style={{cursor:'pointer'}}/>
      {/* Right leg */}
      <path d="M 282 248 L 305 435 L 212 435 L 200 248 Z" fill={f('jeans')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('jeans')} style={{cursor:'pointer'}}/>
      {/* Crotch curve */}
      <path d="M 118 248 C 135 275 165 285 200 285 C 235 285 265 275 282 248 Z" fill={f('jeans')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round" onClick={() => onRegionClick?.('jeans')} style={{cursor:'pointer'}}/>
      {/* Waistband */}
      <rect x="105" y="118" width="190" height="38" rx="10" fill={f('waistband')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('waistband')} style={{cursor:'pointer'}}/>
      {/* Belt loops */}
      {[132,160,200,240,268].map((x,i)=>(
        <rect key={i} x={x-8} y="112" width="16" height="48" rx="6" fill={f('waistband')} stroke="#1a1a1a" strokeWidth="7" onClick={() => onRegionClick?.('waistband')} style={{cursor:'pointer'}}/>
      ))}
      {/* Fly */}
      <line x1="200" y1="155" x2="200" y2="268" stroke="#1a1a1a" strokeWidth="7" strokeLinecap="round"/>
      {/* Right pocket */}
      <path d="M 238 162 C 255 162 270 175 270 192 L 258 225 C 245 218 235 205 232 190 Z" fill={f('pocket')} stroke="#1a1a1a" strokeWidth="8" strokeLinejoin="round" onClick={() => onRegionClick?.('pocket')} style={{cursor:'pointer'}}/>
      {/* Left pocket */}
      <path d="M 162 162 C 145 162 130 175 130 192 L 142 225 C 155 218 165 205 168 190 Z" fill={f('pocket')} stroke="#1a1a1a" strokeWidth="8" strokeLinejoin="round" onClick={() => onRegionClick?.('pocket')} style={{cursor:'pointer'}}/>
      {/* Back pocket */}
      <rect x="122" y="290" width="62" height="58" rx="8" fill={f('pocket')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('pocket')} style={{cursor:'pointer'}}/>
      {/* Stitch lines */}
      <path d="M 165 295 L 148 435" fill="none" stroke="#1a1a1a" strokeWidth="4" strokeDasharray="8 6" strokeLinecap="round"/>
      <path d="M 235 295 L 252 435" fill="none" stroke="#1a1a1a" strokeWidth="4" strokeDasharray="8 6" strokeLinecap="round"/>
      {/* Button */}
      <circle cx="200" cy="140" r="11" fill={f('pocket')} stroke="#1a1a1a" strokeWidth="7" onClick={() => onRegionClick?.('pocket')} style={{cursor:'pointer'}}/>
    </svg>
  );
}

// ─── 13. VEST ─────────────────────────────────────────────────────────────────
export function Vest({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Body */}
      <path d="M 145 112 L 95 148 L 95 428 L 305 428 L 305 148 L 255 112 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Left armhole cutout */}
      <path d="M 145 112 L 95 148 C 95 148 115 165 145 165 Z" fill={f('lining')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round" onClick={() => onRegionClick?.('lining')} style={{cursor:'pointer'}}/>
      {/* Right armhole cutout */}
      <path d="M 255 112 L 305 148 C 305 148 285 165 255 165 Z" fill={f('lining')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round" onClick={() => onRegionClick?.('lining')} style={{cursor:'pointer'}}/>
      {/* Lapels */}
      <path d="M 145 112 C 155 132 168 148 172 165 L 200 195 L 228 165 C 232 148 245 132 255 112 Z" fill={f('lining')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('lining')} style={{cursor:'pointer'}}/>
      {/* Center line */}
      <line x1="200" y1="195" x2="200" y2="428" stroke="#1a1a1a" strokeWidth="8" strokeLinecap="round"/>
      {/* Buttons */}
      {[228,278,328,378].map((y,i)=>(
        <circle key={i} cx="200" cy={y} r="12" fill={f('buttons')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('buttons')} style={{cursor:'pointer'}}/>
      ))}
      {/* Pockets */}
      <rect x="112" y="268" width="65" height="55" rx="10" fill={f('pockets')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('pockets')} style={{cursor:'pointer'}}/>
      <rect x="223" y="268" width="65" height="55" rx="10" fill={f('pockets')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('pockets')} style={{cursor:'pointer'}}/>
      {/* Pocket flaps */}
      <rect x="112" y="258" width="65" height="20" rx="8" fill={f('body')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <rect x="223" y="258" width="65" height="20" rx="8" fill={f('body')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
    </svg>
  );
}

// ─── 14. TIARA ────────────────────────────────────────────────────────────────
export function Tiara({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Band */}
      <path d="M 45 308 C 45 308 100 288 200 288 C 300 288 355 308 355 308 L 348 338 C 348 338 298 318 200 318 C 102 318 52 338 52 338 Z" fill={f('band')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('band')} style={{cursor:'pointer'}}/>
      {/* Side spires */}
      <path d="M 85 298 C 80 270 82 242 90 222 C 98 242 100 270 95 298 Z" fill={f('spires')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round" onClick={() => onRegionClick?.('spires')} style={{cursor:'pointer'}}/>
      <path d="M 315 298 C 320 270 318 242 310 222 C 302 242 300 270 305 298 Z" fill={f('spires')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round" onClick={() => onRegionClick?.('spires')} style={{cursor:'pointer'}}/>
      <path d="M 130 295 C 125 255 128 215 138 188 C 148 215 148 258 142 295 Z" fill={f('spires')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round" onClick={() => onRegionClick?.('spires')} style={{cursor:'pointer'}}/>
      <path d="M 270 295 C 275 255 272 215 262 188 C 252 215 252 258 258 295 Z" fill={f('spires')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round" onClick={() => onRegionClick?.('spires')} style={{cursor:'pointer'}}/>
      {/* Center tall spire */}
      <path d="M 183 290 C 176 245 178 195 185 158 C 192 175 200 195 200 215 C 200 195 208 175 215 158 C 222 195 224 245 217 290 Z" fill={f('spires')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('spires')} style={{cursor:'pointer'}}/>
      {/* Gems on spires */}
      <circle cx="200" cy="175" r="24" fill={f('gems')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('gems')} style={{cursor:'pointer'}}/>
      <circle cx="136" cy="205" r="18" fill={f('gems')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('gems')} style={{cursor:'pointer'}}/>
      <circle cx="264" cy="205" r="18" fill={f('gems')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('gems')} style={{cursor:'pointer'}}/>
      <circle cx="88" cy="232" r="14" fill={f('gems')} stroke="#1a1a1a" strokeWidth="7" onClick={() => onRegionClick?.('gems')} style={{cursor:'pointer'}}/>
      <circle cx="312" cy="232" r="14" fill={f('gems')} stroke="#1a1a1a" strokeWidth="7" onClick={() => onRegionClick?.('gems')} style={{cursor:'pointer'}}/>
      {/* Small gems on band */}
      {[100,145,200,255,300].map((cx,i)=>(
        <circle key={i} cx={cx} cy="323" r="10" fill={f('gems')} stroke="#1a1a1a" strokeWidth="7" onClick={() => onRegionClick?.('gems')} style={{cursor:'pointer'}}/>
      ))}
      {/* Gem sparkles */}
      {[[200,175]].map(([cx,cy],i)=>(
        <g key={i}>
          <line x1={cx-14} y1={cy} x2={cx+14} y2={cy} stroke="white" strokeWidth="4" strokeLinecap="round"/>
          <line x1={cx} y1={cy-14} x2={cx} y2={cy+14} stroke="white" strokeWidth="4" strokeLinecap="round"/>
        </g>
      ))}
    </svg>
  );
}

// ─── 15. OVERALLS ─────────────────────────────────────────────────────────────
export function Overalls({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Left leg */}
      <path d="M 112 268 L 88 435 L 188 435 L 200 268 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Right leg */}
      <path d="M 288 268 L 312 435 L 212 435 L 200 268 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Bib front */}
      <rect x="142" y="118" width="116" height="152" rx="12" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Bib pocket */}
      <rect x="160" y="140" width="80" height="65" rx="8" fill={f('pocket')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('pocket')} style={{cursor:'pointer'}}/>
      {/* Left strap */}
      <path d="M 148 118 C 145 88 148 68 152 52 C 160 62 162 80 162 105 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Right strap */}
      <path d="M 252 118 C 255 88 252 68 248 52 C 240 62 238 80 238 105 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Strap buttons */}
      <circle cx="155" cy="112" r="13" fill={f('buttons')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('buttons')} style={{cursor:'pointer'}}/>
      <circle cx="245" cy="112" r="13" fill={f('buttons')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('buttons')} style={{cursor:'pointer'}}/>
      {/* Star on pocket */}
      <text x="200" y="182" textAnchor="middle" fontSize="34" fill={f('buttons')} stroke="#1a1a1a" strokeWidth="3" style={{userSelect:'none',pointerEvents:'none'}}>★</text>
      {/* Stitch details */}
      <path d="M 160 270 L 145 435" fill="none" stroke="#1a1a1a" strokeWidth="4" strokeDasharray="8 6"/>
      <path d="M 240 270 L 255 435" fill="none" stroke="#1a1a1a" strokeWidth="4" strokeDasharray="8 6"/>
    </svg>
  );
}

// ─── 16. CAPE ─────────────────────────────────────────────────────────────────
export function Cape({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Cape body — flowing */}
      <path d="M 148 108 C 115 155 85 218 72 285 C 58 355 65 415 80 438 L 200 438 L 320 438 C 335 415 342 355 328 285 C 315 218 285 155 252 108 Z" fill={f('cape')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('cape')} style={{cursor:'pointer'}}/>
      {/* Inner lining */}
      <path d="M 175 108 C 158 152 145 205 140 262 C 135 320 138 378 145 438 L 200 438 L 255 438 C 262 378 265 320 260 262 C 255 205 242 152 225 108 Z" fill={f('lining')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round" onClick={() => onRegionClick?.('lining')} style={{cursor:'pointer'}}/>
      {/* Collar */}
      <path d="M 148 108 C 165 95 180 88 200 86 C 220 88 235 95 252 108 C 240 122 220 128 200 128 C 180 128 160 122 148 108 Z" fill={f('collar')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('collar')} style={{cursor:'pointer'}}/>
      {/* Clasp */}
      <circle cx="200" cy="128" r="16" fill={f('clasp')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('clasp')} style={{cursor:'pointer'}}/>
      <circle cx="200" cy="128" r="8" fill="white" stroke="#1a1a1a" strokeWidth="6"/>
      {/* Star symbol */}
      <text x="200" y="282" textAnchor="middle" fontSize="62" fill={f('clasp')} stroke="#1a1a1a" strokeWidth="4" style={{userSelect:'none',pointerEvents:'none'}}>★</text>
      {/* Zigzag bottom hem */}
      {Array.from({length:8},(_,i)=>{
        const x1=80+i*30, x2=x1+15, x3=x1+30;
        return <path key={i} d={`M ${x1} 438 L ${x2} 420 L ${x3} 438`} fill="none" stroke="#1a1a1a" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>;
      })}
    </svg>
  );
}

// ─── 17. GLOVES ───────────────────────────────────────────────────────────────
export function Gloves({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* LEFT GLOVE */}
      {/* Fingers left */}
      {[[88,205,18],[110,192,17],[132,190,17],[155,195,17]].map(([cx,cy,r],i)=>(
        <ellipse key={i} cx={cx} cy={cy} rx={r} ry={32} fill={f('glove')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('glove')} style={{cursor:'pointer'}}/>
      ))}
      {/* Thumb left */}
      <ellipse cx="66" cy="238" rx="14" ry="26" transform="rotate(-30 66 238)" fill={f('glove')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('glove')} style={{cursor:'pointer'}}/>
      {/* Palm left */}
      <rect x="62" y="218" width="108" height="85" rx="12" fill={f('glove')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('glove')} style={{cursor:'pointer'}}/>
      {/* Cuff left */}
      <rect x="62" y="298" width="108" height="38" rx="12" fill={f('cuff')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('cuff')} style={{cursor:'pointer'}}/>
      {/* Knuckle lines left */}
      <path d="M 72 228 C 92 222 132 220 168 225" fill="none" stroke="#1a1a1a" strokeWidth="5" strokeLinecap="round"/>
      {/* RIGHT GLOVE */}
      {[[312,205,18],[290,192,17],[268,190,17],[245,195,17]].map(([cx,cy,r],i)=>(
        <ellipse key={i} cx={cx} cy={cy} rx={r} ry={32} fill={f('glove')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('glove')} style={{cursor:'pointer'}}/>
      ))}
      {/* Thumb right */}
      <ellipse cx="334" cy="238" rx="14" ry="26" transform="rotate(30 334 238)" fill={f('glove')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('glove')} style={{cursor:'pointer'}}/>
      {/* Palm right */}
      <rect x="230" y="218" width="108" height="85" rx="12" fill={f('glove')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('glove')} style={{cursor:'pointer'}}/>
      {/* Cuff right */}
      <rect x="230" y="298" width="108" height="38" rx="12" fill={f('cuff')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('cuff')} style={{cursor:'pointer'}}/>
      {/* Knuckle lines right */}
      <path d="M 328 228 C 308 222 268 220 232 225" fill="none" stroke="#1a1a1a" strokeWidth="5" strokeLinecap="round"/>
      {/* Star gems on cuffs */}
      <circle cx="116" cy="317" r="12" fill={f('gem')} stroke="#1a1a1a" strokeWidth="7" onClick={() => onRegionClick?.('gem')} style={{cursor:'pointer'}}/>
      <circle cx="284" cy="317" r="12" fill={f('gem')} stroke="#1a1a1a" strokeWidth="7" onClick={() => onRegionClick?.('gem')} style={{cursor:'pointer'}}/>
    </svg>
  );
}

// ─── 18. PAJAMAS ──────────────────────────────────────────────────────────────
export function Pajamas({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Left sleeve */}
      <path d="M 72 138 L 48 215 C 45 228 54 240 68 242 L 125 248 L 132 175 Z" fill={f('top')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('top')} style={{cursor:'pointer'}}/>
      {/* Right sleeve */}
      <path d="M 328 138 L 352 215 C 355 228 346 240 332 242 L 275 248 L 268 175 Z" fill={f('top')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('top')} style={{cursor:'pointer'}}/>
      {/* Shirt body */}
      <path d="M 132 175 L 72 138 C 98 122 130 112 168 110 C 175 124 184 132 200 134 C 216 132 225 124 232 110 C 270 112 302 122 328 138 L 268 175 L 268 278 L 132 278 Z" fill={f('top')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('top')} style={{cursor:'pointer'}}/>
      {/* Waistband */}
      <rect x="120" y="272" width="160" height="22" rx="9" fill={f('waistband')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('waistband')} style={{cursor:'pointer'}}/>
      {/* Pants */}
      <path d="M 120 290 L 95 435 L 188 435 L 200 290 Z" fill={f('pants')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('pants')} style={{cursor:'pointer'}}/>
      <path d="M 280 290 L 305 435 L 212 435 L 200 290 Z" fill={f('pants')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('pants')} style={{cursor:'pointer'}}/>
      {/* Moon and stars pattern */}
      {[[148,185],[200,168],[252,180],[145,235],[255,235]].map(([cx,cy],i)=>(
        <text key={i} x={cx} y={cy} textAnchor="middle" fontSize="22" fill={f('pattern')} stroke="#1a1a1a" strokeWidth="2" style={{userSelect:'none',pointerEvents:'none'}}>☽</text>
      ))}
      {[[130,315],[170,335],[200,312],[232,338],[270,318]].map(([cx,cy],i)=>(
        <text key={i} x={cx} y={cy} textAnchor="middle" fontSize="18" fill={f('pattern')} stroke="#1a1a1a" strokeWidth="2" style={{userSelect:'none',pointerEvents:'none'}}>★</text>
      ))}
      {/* Shirt buttons */}
      {[148,178,208].map((y,i)=>(
        <circle key={i} cx="200" cy={y} r="9" fill={f('waistband')} stroke="#1a1a1a" strokeWidth="6" onClick={() => onRegionClick?.('waistband')} style={{cursor:'pointer'}}/>
      ))}
    </svg>
  );
}

// ─── 19. APRON ────────────────────────────────────────────────────────────────
export function Apron({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Neck strap */}
      <path d="M 165 105 C 165 82 200 72 200 72 C 200 72 235 82 235 105" fill="none" stroke="#1a1a1a" strokeWidth="14" strokeLinecap="round" onClick={() => onRegionClick?.('straps')} style={{cursor:'pointer'}}/>
      <path d="M 165 105 C 165 82 200 72 200 72 C 200 72 235 82 235 105" fill="none" stroke={f('straps')} strokeWidth="6"/>
      {/* Waist ties */}
      <path d="M 118 268 C 92 265 68 255 52 260 C 48 272 55 282 68 278 L 118 275" fill="none" stroke="#1a1a1a" strokeWidth="14" strokeLinecap="round" onClick={() => onRegionClick?.('straps')} style={{cursor:'pointer'}}/>
      <path d="M 118 268 C 92 265 68 255 52 260 C 48 272 55 282 68 278 L 118 275" fill="none" stroke={f('straps')} strokeWidth="6"/>
      <path d="M 282 268 C 308 265 332 255 348 260 C 352 272 345 282 332 278 L 282 275" fill="none" stroke="#1a1a1a" strokeWidth="14" strokeLinecap="round" onClick={() => onRegionClick?.('straps')} style={{cursor:'pointer'}}/>
      <path d="M 282 268 C 308 265 332 255 348 260 C 352 272 345 282 332 278 L 282 275" fill="none" stroke={f('straps')} strokeWidth="6"/>
      {/* Apron body */}
      <path d="M 165 105 L 118 268 L 118 438 L 282 438 L 282 268 L 235 105 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Bib top pocket */}
      <rect x="158" y="128" width="84" height="68" rx="10" fill={f('pocket')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('pocket')} style={{cursor:'pointer'}}/>
      {/* Big front pocket */}
      <rect x="130" y="318" width="140" height="88" rx="14" fill={f('pocket')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('pocket')} style={{cursor:'pointer'}}/>
      <line x1="200" y1="318" x2="200" y2="406" stroke="#1a1a1a" strokeWidth="7" strokeLinecap="round"/>
      {/* Cupcake on bib pocket */}
      <text x="200" y="172" textAnchor="middle" fontSize="38" fill={f('straps')} style={{userSelect:'none',pointerEvents:'none'}}>🧁</text>
    </svg>
  );
}

// ─── 20. WITCH HAT ────────────────────────────────────────────────────────────
export function WitchHat({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Wide brim */}
      <ellipse cx="200" cy="338" rx="185" ry="48" fill={f('brim')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('brim')} style={{cursor:'pointer'}}/>
      {/* Hat cone */}
      <path d="M 118 338 C 128 285 155 215 178 148 C 185 118 192 92 200 68 C 208 92 215 118 222 148 C 245 215 272 285 282 338 Z" fill={f('hat')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('hat')} style={{cursor:'pointer'}}/>
      {/* Hat band */}
      <path d="M 148 320 C 162 308 200 302 252 308 L 260 338 C 240 328 200 322 148 332 Z" fill={f('band')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round" onClick={() => onRegionClick?.('band')} style={{cursor:'pointer'}}/>
      {/* Buckle */}
      <rect x="185" y="308" width="32" height="26" rx="5" fill={f('band')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('band')} style={{cursor:'pointer'}}/>
      <rect x="193" y="314" width="16" height="14" rx="3" fill="#1a1a1a" stroke="#1a1a1a" strokeWidth="3"/>
      {/* Stars on hat */}
      {[[158,222],[242,218],[178,278],[222,282],[200,172]].map(([cx,cy],i)=>(
        <text key={i} x={cx} y={cy} textAnchor="middle" fontSize={i===4?28:22} fill={f('band')} stroke="#1a1a1a" strokeWidth="3" style={{userSelect:'none',pointerEvents:'none'}}>✦</text>
      ))}
      {/* Brim wave underside */}
      <path d="M 25 338 C 65 325 128 318 200 318 C 272 318 335 325 375 338" fill="none" stroke="#1a1a1a" strokeWidth="7" strokeLinecap="round"/>
    </svg>
  );
}

// ─── 21. TRACKSUIT ────────────────────────────────────────────────────────────
export function Tracksuit({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Jacket left sleeve */}
      <path d="M 72 132 L 48 212 C 45 226 53 238 68 240 L 126 247 L 132 172 Z" fill={f('jacket')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('jacket')} style={{cursor:'pointer'}}/>
      {/* Jacket right sleeve */}
      <path d="M 328 132 L 352 212 C 355 226 347 238 332 240 L 274 247 L 268 172 Z" fill={f('jacket')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('jacket')} style={{cursor:'pointer'}}/>
      {/* Jacket body */}
      <path d="M 132 172 L 72 132 C 98 115 130 105 168 103 C 175 118 184 126 200 128 C 216 126 225 118 232 103 C 270 105 302 115 328 132 L 268 172 L 268 275 L 132 275 Z" fill={f('jacket')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('jacket')} style={{cursor:'pointer'}}/>
      {/* Stripe down sleeves */}
      <path d="M 78 135 C 72 165 65 195 58 215" fill="none" stroke="#1a1a1a" strokeWidth="14" strokeLinecap="round" onClick={() => onRegionClick?.('stripe')} style={{cursor:'pointer'}}/>
      <path d="M 78 135 C 72 165 65 195 58 215" fill="none" stroke={f('stripe')} strokeWidth="6"/>
      <path d="M 322 135 C 328 165 335 195 342 215" fill="none" stroke="#1a1a1a" strokeWidth="14" strokeLinecap="round" onClick={() => onRegionClick?.('stripe')} style={{cursor:'pointer'}}/>
      <path d="M 322 135 C 328 165 335 195 342 215" fill="none" stroke={f('stripe')} strokeWidth="6"/>
      {/* Collar zip */}
      <path d="M 162 103 C 172 118 184 126 200 128 C 216 126 228 118 238 103" fill="none" stroke="#1a1a1a" strokeWidth="9" strokeLinecap="round"/>
      <line x1="200" y1="128" x2="200" y2="275" stroke="#1a1a1a" strokeWidth="7"/>
      {/* Pants */}
      <path d="M 118 280 L 92 435 L 188 435 L 200 280 Z" fill={f('pants')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('pants')} style={{cursor:'pointer'}}/>
      <path d="M 282 280 L 308 435 L 212 435 L 200 280 Z" fill={f('pants')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('pants')} style={{cursor:'pointer'}}/>
      {/* Pants side stripes */}
      <line x1="120" y1="285" x2="95" y2="435" stroke="#1a1a1a" strokeWidth="10" strokeLinecap="round" onClick={() => onRegionClick?.('stripe')} style={{cursor:'pointer'}}/>
      <line x1="120" y1="285" x2="95" y2="435" stroke={f('stripe')} strokeWidth="4"/>
      <line x1="280" y1="285" x2="305" y2="435" stroke="#1a1a1a" strokeWidth="10" strokeLinecap="round" onClick={() => onRegionClick?.('stripe')} style={{cursor:'pointer'}}/>
      <line x1="280" y1="285" x2="305" y2="435" stroke={f('stripe')} strokeWidth="4"/>
      {/* Number on jacket */}
      <text x="200" y="238" textAnchor="middle" fontSize="48" fill={f('stripe')} stroke="#1a1a1a" strokeWidth="3" style={{userSelect:'none',pointerEvents:'none'}}>10</text>
    </svg>
  );
}

// ─── 22. BANDANA ──────────────────────────────────────────────────────────────
export function Bandana({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Main triangle */}
      <path d="M 42 148 L 358 148 L 200 418 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Top folded band */}
      <rect x="42" y="118" width="316" height="38" rx="8" fill={f('band')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('band')} style={{cursor:'pointer'}}/>
      {/* Knot tails */}
      <path d="M 358 132 C 378 125 395 118 405 128 C 398 142 382 145 365 138 Z" fill={f('band')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round" onClick={() => onRegionClick?.('band')} style={{cursor:'pointer'}}/>
      <path d="M 358 148 C 375 158 390 162 398 172 C 388 180 372 175 360 165 Z" fill={f('band')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round" onClick={() => onRegionClick?.('band')} style={{cursor:'pointer'}}/>
      {/* Paisley pattern */}
      {[[148,225],[200,268],[255,222],[175,315],[225,318]].map(([cx,cy],i)=>(
        <path key={i} d={`M ${cx} ${cy+20} C ${cx-15} ${cy+10} ${cx-15} ${cy-10} ${cx} ${cy-20} C ${cx+15} ${cy-10} ${cx+15} ${cy+10} ${cx} ${cy+20}`} fill={f('pattern')} stroke="#1a1a1a" strokeWidth="6" onClick={() => onRegionClick?.('pattern')} style={{cursor:'pointer'}}/>
      ))}
      {/* Dot pattern */}
      {[[120,195],[172,182],[230,185],[282,195],[155,268],[245,272],[200,358]].map(([cx,cy],i)=>(
        <circle key={i} cx={cx} cy={cy} r="9" fill={f('pattern')} stroke="#1a1a1a" strokeWidth="5" onClick={() => onRegionClick?.('pattern')} style={{cursor:'pointer'}}/>
      ))}
    </svg>
  );
}

// ─── 23. PARTY HAT ────────────────────────────────────────────────────────────
export function PartyHat({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Hat cone */}
      <path d="M 58 412 L 200 68 L 342 412 Z" fill={f('hat')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('hat')} style={{cursor:'pointer'}}/>
      {/* Brim */}
      <ellipse cx="200" cy="412" rx="145" ry="30" fill={f('brim')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('brim')} style={{cursor:'pointer'}}/>
      {/* Pom pom */}
      {[[-15,0],[15,0],[0,-18],[0,16],[12,12],[-12,12],[12,-12],[-12,-12]].map(([dx,dy],i)=>(
        <circle key={i} cx={200+dx} cy={68+dy} r="14" fill={f('pompom')} stroke="#1a1a1a" strokeWidth="7" onClick={() => onRegionClick?.('pompom')} style={{cursor:'pointer'}}/>
      ))}
      {/* Elastic string */}
      <path d="M 88 415 C 88 432 112 442 148 442 C 172 442 200 440 200 440 C 200 440 228 442 252 442 C 288 442 312 432 312 415" fill="none" stroke="#1a1a1a" strokeWidth="7" strokeLinecap="round"/>
      {/* Polka dots */}
      {[[148,205],[222,185],[175,268],[248,255],[128,312],[272,305],[200,345],[162,385],[238,385]].map(([cx,cy],i)=>(
        <circle key={i} cx={cx} cy={cy} r={14-i%3*2} fill={f('dots')} stroke="#1a1a1a" strokeWidth="7" onClick={() => onRegionClick?.('dots')} style={{cursor:'pointer'}}/>
      ))}
      {/* Zigzag stripe */}
      <path d="M 96 370 C 118 355 140 375 162 360 C 184 345 206 365 228 350 C 250 335 270 355 292 342" fill="none" stroke="#1a1a1a" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M 96 370 C 118 355 140 375 162 360 C 184 345 206 365 228 350 C 250 335 270 355 292 342" fill="none" stroke={f('dots')} strokeWidth="4"/>
    </svg>
  );
}

// ─── 24. SNEAKERS ─────────────────────────────────────────────────────────────
export function Sneakers({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* LEFT SNEAKER */}
      {/* Sole left */}
      <path d="M 32 358 C 28 375 38 395 65 405 L 195 405 C 215 405 225 392 220 375 L 210 345 Z" fill={f('sole')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('sole')} style={{cursor:'pointer'}}/>
      {/* Upper left */}
      <path d="M 62 345 C 58 315 62 278 72 255 C 82 232 100 220 125 218 L 178 218 C 200 220 210 235 212 258 C 215 282 210 318 208 345 Z" fill={f('upper')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('upper')} style={{cursor:'pointer'}}/>
      {/* Toe box left */}
      <path d="M 32 358 C 35 320 52 290 72 275 C 58 305 52 338 52 358 Z" fill={f('upper')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round" onClick={() => onRegionClick?.('upper')} style={{cursor:'pointer'}}/>
      {/* Tongue left */}
      <path d="M 135 218 C 132 248 130 278 132 308 C 138 305 152 302 160 305 C 162 278 162 248 158 218 Z" fill={f('tongue')} stroke="#1a1a1a" strokeWidth="8" strokeLinejoin="round" onClick={() => onRegionClick?.('tongue')} style={{cursor:'pointer'}}/>
      {/* Lace eyelets left */}
      {[228,250,272,295].map((y,i)=>(
        <g key={i}>
          <circle cx="130" cy={y} r="7" fill="white" stroke="#1a1a1a" strokeWidth="5"/>
          <circle cx="164" cy={y} r="7" fill="white" stroke="#1a1a1a" strokeWidth="5"/>
        </g>
      ))}
      {/* Laces left */}
      {[228,250,272,295].map((y,i)=>(
        <line key={i} x1="130" y1={y} x2="164" y2={y} stroke="#1a1a1a" strokeWidth="5" strokeLinecap="round"/>
      ))}
      {/* Stripe on upper left */}
      <path d="M 72 285 C 108 270 158 268 205 278" fill="none" stroke="#1a1a1a" strokeWidth="10" strokeLinecap="round" onClick={() => onRegionClick?.('stripe')} style={{cursor:'pointer'}}/>
      <path d="M 72 285 C 108 270 158 268 205 278" fill="none" stroke={f('stripe')} strokeWidth="4"/>

      {/* RIGHT SNEAKER */}
      {/* Sole right */}
      <path d="M 368 358 C 372 375 362 395 335 405 L 205 405 C 185 405 175 392 180 375 L 190 345 Z" fill={f('sole')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('sole')} style={{cursor:'pointer'}}/>
      {/* Upper right */}
      <path d="M 338 345 C 342 315 338 278 328 255 C 318 232 300 220 275 218 L 222 218 C 200 220 190 235 188 258 C 185 282 190 318 192 345 Z" fill={f('upper')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('upper')} style={{cursor:'pointer'}}/>
      {/* Toe box right */}
      <path d="M 368 358 C 365 320 348 290 328 275 C 342 305 348 338 348 358 Z" fill={f('upper')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round" onClick={() => onRegionClick?.('upper')} style={{cursor:'pointer'}}/>
      {/* Tongue right */}
      <path d="M 265 218 C 268 248 270 278 268 308 C 262 305 248 302 240 305 C 238 278 238 248 242 218 Z" fill={f('tongue')} stroke="#1a1a1a" strokeWidth="8" strokeLinejoin="round" onClick={() => onRegionClick?.('tongue')} style={{cursor:'pointer'}}/>
      {/* Lace eyelets right */}
      {[228,250,272,295].map((y,i)=>(
        <g key={i}>
          <circle cx="270" cy={y} r="7" fill="white" stroke="#1a1a1a" strokeWidth="5"/>
          <circle cx="236" cy={y} r="7" fill="white" stroke="#1a1a1a" strokeWidth="5"/>
        </g>
      ))}
      {[228,250,272,295].map((y,i)=>(
        <line key={i} x1="236" y1={y} x2="270" y2={y} stroke="#1a1a1a" strokeWidth="5" strokeLinecap="round"/>
      ))}
      {/* Stripe right */}
      <path d="M 328 285 C 292 270 242 268 195 278" fill="none" stroke="#1a1a1a" strokeWidth="10" strokeLinecap="round" onClick={() => onRegionClick?.('stripe')} style={{cursor:'pointer'}}/>
      <path d="M 328 285 C 292 270 242 268 195 278" fill="none" stroke={f('stripe')} strokeWidth="4"/>
    </svg>
  );
}

// ─── 25. KIMONO ───────────────────────────────────────────────────────────────
export function Kimono({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Wide sleeves */}
      <path d="M 28 175 L 28 288 C 28 302 40 312 55 308 L 118 295 L 118 162 Z" fill={f('sleeve')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('sleeve')} style={{cursor:'pointer'}}/>
      <path d="M 372 175 L 372 288 C 372 302 360 312 345 308 L 282 295 L 282 162 Z" fill={f('sleeve')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('sleeve')} style={{cursor:'pointer'}}/>
      {/* Body */}
      <path d="M 118 162 L 118 438 L 282 438 L 282 162 C 268 148 240 138 200 138 C 160 138 132 148 118 162 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Left collar */}
      <path d="M 200 138 C 185 148 172 162 165 180 L 118 162 Z" fill={f('collar')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('collar')} style={{cursor:'pointer'}}/>
      {/* Right collar */}
      <path d="M 200 138 C 215 148 228 162 235 180 L 282 162 Z" fill={f('collar')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('collar')} style={{cursor:'pointer'}}/>
      {/* Obi belt */}
      <rect x="118" y="275" width="164" height="58" rx="8" fill={f('obi')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('obi')} style={{cursor:'pointer'}}/>
      {/* Obi bow */}
      <path d="M 178 304 C 165 292 150 292 150 304 C 150 316 165 316 178 304 Z" fill={f('bow')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('bow')} style={{cursor:'pointer'}}/>
      <path d="M 222 304 C 235 292 250 292 250 304 C 250 316 235 316 222 304 Z" fill={f('bow')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('bow')} style={{cursor:'pointer'}}/>
      <circle cx="200" cy="304" r="14" fill={f('bow')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('bow')} style={{cursor:'pointer'}}/>
      {/* Cherry blossom pattern */}
      {[[148,218],[248,215],[148,358],[252,352]].map(([cx,cy],i)=>(
        <g key={i}>
          {[0,72,144,216,288].map((angle,j)=>{
            const rad=(angle-90)*Math.PI/180;
            return <circle key={j} cx={(cx+12*Math.cos(rad)).toFixed(1)} cy={(cy+12*Math.sin(rad)).toFixed(1)} r="6" fill={f('pattern')} stroke="#1a1a1a" strokeWidth="4" onClick={() => onRegionClick?.('pattern')} style={{cursor:'pointer'}}/>;
          })}
          <circle cx={cx} cy={cy} r="5" fill="white" stroke="#1a1a1a" strokeWidth="3"/>
        </g>
      ))}
    </svg>
  );
}

// ─── 26. BASEBALL CAP ─────────────────────────────────────────────────────────
export function BaseballCap({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Brim / visor */}
      <path d="M 65 295 C 52 295 38 305 38 320 C 38 338 55 348 80 342 L 200 335 L 200 295 Z" fill={f('brim')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('brim')} style={{cursor:'pointer'}}/>
      {/* Under-brim line */}
      <path d="M 65 318 C 90 312 148 308 200 308" fill="none" stroke="#1a1a1a" strokeWidth="7" strokeLinecap="round"/>
      {/* Cap dome */}
      <path d="M 65 295 C 62 255 72 198 98 168 C 120 142 152 130 200 128 C 248 128 280 142 302 168 C 328 198 338 255 335 295 Z" fill={f('cap')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('cap')} style={{cursor:'pointer'}}/>
      {/* Button on top */}
      <circle cx="200" cy="130" r="18" fill={f('brim')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('brim')} style={{cursor:'pointer'}}/>
      {/* Panel seams */}
      <path d="M 200 130 C 200 200 200 270 200 295" stroke="#1a1a1a" strokeWidth="7" strokeLinecap="round"/>
      <path d="M 200 130 C 165 158 142 198 132 248 C 126 272 125 285 125 295" stroke="#1a1a1a" strokeWidth="7" strokeLinecap="round"/>
      <path d="M 200 130 C 235 158 258 198 268 248 C 274 272 275 285 275 295" stroke="#1a1a1a" strokeWidth="7" strokeLinecap="round"/>
      {/* Sweatband */}
      <path d="M 65 295 C 100 288 155 283 200 283 C 245 283 290 288 335 295" fill="none" stroke="#1a1a1a" strokeWidth="9" strokeLinecap="round"/>
      {/* Logo patch */}
      <circle cx="200" cy="218" r="32" fill={f('logo')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('logo')} style={{cursor:'pointer'}}/>
      <text x="200" y="226" textAnchor="middle" fontSize="28" fill="white" style={{userSelect:'none',pointerEvents:'none'}}>★</text>
      {/* Strap back */}
      <path d="M 275 295 C 298 292 318 295 335 295" fill="none" stroke="#1a1a1a" strokeWidth="12" strokeLinecap="round" onClick={() => onRegionClick?.('brim')} style={{cursor:'pointer'}}/>
    </svg>
  );
}

// ─── 27. BOW TIE ──────────────────────────────────────────────────────────────
export function BowTie({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Left wing */}
      <path d="M 200 225 C 188 202 162 178 132 168 C 105 158 78 162 65 178 C 52 195 58 222 78 238 C 100 256 142 258 175 248 C 190 243 200 235 200 225 Z" fill={f('bow')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('bow')} style={{cursor:'pointer'}}/>
      {/* Right wing */}
      <path d="M 200 225 C 212 202 238 178 268 168 C 295 158 322 162 335 178 C 348 195 342 222 322 238 C 300 256 258 258 225 248 C 210 243 200 235 200 225 Z" fill={f('bow')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('bow')} style={{cursor:'pointer'}}/>
      {/* Center knot */}
      <ellipse cx="200" cy="225" rx="32" ry="42" fill={f('knot')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('knot')} style={{cursor:'pointer'}}/>
      {/* Wing folds */}
      <path d="M 172 215 C 155 220 138 228 128 238" fill="none" stroke="#1a1a1a" strokeWidth="6" strokeLinecap="round"/>
      <path d="M 228 215 C 245 220 262 228 272 238" fill="none" stroke="#1a1a1a" strokeWidth="6" strokeLinecap="round"/>
      {/* Polka dots */}
      {[[108,192],[148,185],[255,188],[292,195],[118,240],[272,242],[158,228],[242,228]].map(([cx,cy],i)=>(
        <circle key={i} cx={cx} cy={cy} r="10" fill={f('dots')} stroke="#1a1a1a" strokeWidth="6" onClick={() => onRegionClick?.('dots')} style={{cursor:'pointer'}}/>
      ))}
    </svg>
  );
}

// ─── 28. SWIMTRUNKS ───────────────────────────────────────────────────────────
export function SwimTrunks({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Left leg */}
      <path d="M 118 205 L 88 395 L 190 395 L 200 205 Z" fill={f('trunks')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('trunks')} style={{cursor:'pointer'}}/>
      {/* Right leg */}
      <path d="M 282 205 L 312 395 L 210 395 L 200 205 Z" fill={f('trunks')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('trunks')} style={{cursor:'pointer'}}/>
      {/* Crotch */}
      <path d="M 118 205 C 135 235 165 248 200 248 C 235 248 265 235 282 205 Z" fill={f('trunks')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('trunks')} style={{cursor:'pointer'}}/>
      {/* Waistband */}
      <rect x="105" y="148" width="190" height="65" rx="14" fill={f('waistband')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('waistband')} style={{cursor:'pointer'}}/>
      {/* Drawstring */}
      <path d="M 175 175 C 175 190 185 198 200 198 C 215 198 225 190 225 175" fill="none" stroke="#1a1a1a" strokeWidth="8" strokeLinecap="round"/>
      {/* Tie end */}
      <path d="M 175 175 C 165 168 152 162 145 165" fill="none" stroke="#1a1a1a" strokeWidth="8" strokeLinecap="round"/>
      <path d="M 225 175 C 235 168 248 162 255 165" fill="none" stroke="#1a1a1a" strokeWidth="8" strokeLinecap="round"/>
      {/* Wave pattern */}
      <path d="M 108 258 C 132 245 155 258 178 245 C 201 232 224 245 248 232 C 265 222 278 232 285 242" fill="none" stroke="#1a1a1a" strokeWidth="7" strokeLinecap="round"/>
      <path d="M 108 290 C 132 277 155 290 178 277 C 201 264 224 277 248 264 C 265 254 278 264 285 274" fill="none" stroke="#1a1a1a" strokeWidth="7" strokeLinecap="round"/>
      {/* Side pocket */}
      <rect x="248" y="235" width="46" height="58" rx="10" fill={f('waistband')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('waistband')} style={{cursor:'pointer'}}/>
      {/* Palm tree print */}
      <text x="155" y="325" textAnchor="middle" fontSize="38" fill={f('waistband')} style={{userSelect:'none',pointerEvents:'none'}}>🌴</text>
    </svg>
  );
}

// ─── 29. NECKLACE ─────────────────────────────────────────────────────────────
export function Necklace({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Clasp at top */}
      <rect x="182" y="68" width="36" height="22" rx="10" fill={f('chain')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('chain')} style={{cursor:'pointer'}}/>
      {/* Chain */}
      <path d="M 200 88 C 175 92 135 108 105 132 C 75 158 58 195 55 235 C 53 268 62 295 80 315 C 100 338 130 352 160 358 C 178 362 200 365 200 365 C 200 365 222 362 240 358 C 270 352 300 338 320 315 C 338 295 347 268 345 235 C 342 195 325 158 295 132 C 265 108 225 92 200 88 Z" fill="none" stroke="#1a1a1a" strokeWidth="18" strokeLinecap="round" onClick={() => onRegionClick?.('chain')} style={{cursor:'pointer'}}/>
      <path d="M 200 88 C 175 92 135 108 105 132 C 75 158 58 195 55 235 C 53 268 62 295 80 315 C 100 338 130 352 160 358 C 178 362 200 365 200 365 C 200 365 222 362 240 358 C 270 352 300 338 320 315 C 338 295 347 268 345 235 C 342 195 325 158 295 132 C 265 108 225 92 200 88 Z" fill="none" stroke={f('chain')} strokeWidth="8"/>
      {/* Chain links */}
      {Array.from({length:16},(_,i)=>{
        const t=i/15;
        const angle=(t*180-90)*Math.PI/180;
        const r=148;
        const cx=200+r*Math.cos(angle), cy=230+r*Math.sin(angle);
        return <circle key={i} cx={cx.toFixed(1)} cy={cy.toFixed(1)} r="8" fill={f('chain')} stroke="#1a1a1a" strokeWidth="6" onClick={() => onRegionClick?.('chain')} style={{cursor:'pointer'}}/>;
      })}
      {/* Pendant */}
      <path d="M 200 365 C 200 378 200 395 200 408 C 190 400 183 388 183 375 C 183 368 191 363 200 365 Z" fill={f('chain')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round" onClick={() => onRegionClick?.('chain')} style={{cursor:'pointer'}}/>
      {/* Big gem pendant */}
      <path d="M 200 408 C 175 405 152 390 148 368 C 145 348 162 332 185 330 C 192 330 200 332 200 332 C 200 332 208 330 215 330 C 238 332 255 348 252 368 C 248 390 225 405 200 408 Z" fill={f('gem')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('gem')} style={{cursor:'pointer'}}/>
      {/* Gem facets */}
      <path d="M 200 332 L 180 365 L 200 408 L 220 365 Z" fill="none" stroke="#1a1a1a" strokeWidth="5"/>
      <path d="M 148 368 L 200 365 L 252 368" fill="none" stroke="#1a1a1a" strokeWidth="5"/>
      {/* Gem sparkle */}
      <line x1="184" y1="354" x2="216" y2="354" stroke="white" strokeWidth="4" strokeLinecap="round" opacity="0.6"/>
      <line x1="200" y1="338" x2="200" y2="368" stroke="white" strokeWidth="4" strokeLinecap="round" opacity="0.6"/>
    </svg>
  );
}

// ─── 30. SUPERHERO SUIT ───────────────────────────────────────────────────────
export function SuperheroSuit({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Left sleeve */}
      <path d="M 72 128 L 48 210 C 45 224 53 238 68 240 L 126 247 L 132 170 Z" fill={f('suit')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('suit')} style={{cursor:'pointer'}}/>
      {/* Right sleeve */}
      <path d="M 328 128 L 352 210 C 355 224 347 238 332 240 L 274 247 L 268 170 Z" fill={f('suit')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('suit')} style={{cursor:'pointer'}}/>
      {/* Suit body */}
      <path d="M 132 170 L 72 128 C 98 112 130 102 168 100 C 174 115 184 124 200 126 C 216 124 226 115 232 100 C 270 102 302 112 328 128 L 268 170 L 268 435 L 132 435 Z" fill={f('suit')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('suit')} style={{cursor:'pointer'}}/>
      {/* Chest emblem area */}
      <ellipse cx="200" cy="230" rx="72" ry="88" fill={f('emblem')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('emblem')} style={{cursor:'pointer'}}/>
      {/* Lightning bolt / star on chest */}
      <path d="M 200 168 L 178 222 L 200 218 L 178 280 L 222 218 L 200 225 Z" fill={f('suit')} stroke="#1a1a1a" strokeWidth="8" strokeLinejoin="round" onClick={() => onRegionClick?.('suit')} style={{cursor:'pointer'}}/>
      {/* Belt */}
      <rect x="132" y="310" width="136" height="28" rx="8" fill={f('belt')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('belt')} style={{cursor:'pointer'}}/>
      {/* Belt buckle */}
      <rect x="183" y="312" width="34" height="24" rx="5" fill="white" stroke="#1a1a1a" strokeWidth="7"/>
      <text x="200" y="328" textAnchor="middle" fontSize="14" fill="#1a1a1a" style={{userSelect:'none',pointerEvents:'none'}}>★</text>
      {/* Cape back hint */}
      <path d="M 148 100 C 130 88 118 70 125 55 C 132 42 148 42 160 52 C 170 60 175 78 172 100 Z" fill={f('cape')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round" onClick={() => onRegionClick?.('cape')} style={{cursor:'pointer'}}/>
      <path d="M 252 100 C 270 88 282 70 275 55 C 268 42 252 42 240 52 C 230 60 225 78 228 100 Z" fill={f('cape')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round" onClick={() => onRegionClick?.('cape')} style={{cursor:'pointer'}}/>
      {/* Gloves color on wrists */}
      <ellipse cx="60" cy="238" rx="22" ry="11" fill={f('belt')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('belt')} style={{cursor:'pointer'}}/>
      <ellipse cx="340" cy="238" rx="22" ry="11" fill={f('belt')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('belt')} style={{cursor:'pointer'}}/>
      {/* Boots top line */}
      <line x1="132" y1="378" x2="268" y2="378" stroke="#1a1a1a" strokeWidth="8" strokeLinecap="round"/>
      <rect x="132" y="378" width="136" height="58" rx="0" fill={f('belt')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('belt')} style={{cursor:'pointer'}}/>
    </svg>
  );
}
