// SVG Coloring Drawings - ANIMALS 2 (30 new animals)
// viewBox 0 0 400 450, strokeWidth 10+ for toddler-friendly thick lines

const svgProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 400 450',
  style: { width: '100%', height: '100%', userSelect: 'none' },
};

// ─── 1. LION ──────────────────────────────────────────────────────────────────
export function Lion({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Body */}
      <ellipse cx="200" cy="328" rx="118" ry="100" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Paws */}
      <ellipse cx="148" cy="418" rx="38" ry="22" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <ellipse cx="252" cy="418" rx="38" ry="22" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Tail */}
      <path d="M 318 310 C 350 290 368 268 360 245 C 354 228 340 228 332 238 C 325 248 328 268 330 285" fill="none" stroke="#1a1a1a" strokeWidth="20" strokeLinecap="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <path d="M 318 310 C 350 290 368 268 360 245 C 354 228 340 228 332 238 C 325 248 328 268 330 285" fill="none" stroke={f('body')} strokeWidth="8" strokeLinecap="round"/>
      {/* Tail tuft */}
      <circle cx="330" cy="275" r="22" fill={f('mane')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('mane')} style={{cursor:'pointer'}}/>
      {/* Mane (big circle behind head) */}
      <circle cx="200" cy="200" r="112" fill={f('mane')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('mane')} style={{cursor:'pointer'}}/>
      {/* Face */}
      <circle cx="200" cy="198" r="82" fill={f('face')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('face')} style={{cursor:'pointer'}}/>
      {/* Ears */}
      <circle cx="148" cy="130" r="28" fill={f('face')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('face')} style={{cursor:'pointer'}}/>
      <circle cx="252" cy="130" r="28" fill={f('face')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('face')} style={{cursor:'pointer'}}/>
      {/* Eyes */}
      <ellipse cx="175" cy="182" rx="18" ry="20" fill="white" stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('face')} style={{cursor:'pointer'}}/>
      <ellipse cx="225" cy="182" rx="18" ry="20" fill="white" stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('face')} style={{cursor:'pointer'}}/>
      <circle cx="175" cy="182" r="9" fill="#1a1a1a"/>
      <circle cx="225" cy="182" r="9" fill="#1a1a1a"/>
      <circle cx="170" cy="177" r="4" fill="white"/>
      <circle cx="220" cy="177" r="4" fill="white"/>
      {/* Snout */}
      <ellipse cx="200" cy="220" rx="38" ry="28" fill={f('face')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('face')} style={{cursor:'pointer'}}/>
      {/* Nose */}
      <path d="M 186 212 L 200 220 L 214 212 Z" fill="#1a1a1a"/>
      {/* Mouth */}
      <path d="M 200 220 C 188 230 178 232 172 228" fill="none" stroke="#1a1a1a" strokeWidth="5" strokeLinecap="round"/>
      <path d="M 200 220 C 212 230 222 232 228 228" fill="none" stroke="#1a1a1a" strokeWidth="5" strokeLinecap="round"/>
      {/* Whisker dots */}
      {[[155,216],[162,222],[162,228],[238,216],[245,222],[245,228]].map(([cx,cy],i)=>(
        <circle key={i} cx={cx} cy={cy} r="4" fill="#1a1a1a"/>
      ))}
    </svg>
  );
}

// ─── 2. TIGER ─────────────────────────────────────────────────────────────────
export function Tiger({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Body */}
      <ellipse cx="200" cy="322" rx="118" ry="102" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Stripes on body */}
      {[[160,270,25],[200,262,25],[242,270,25],[170,338,22],[230,338,22]].map(([cx,cy,r],i)=>(
        <ellipse key={i} cx={cx} cy={cy} rx="10" ry={r} fill={f('stripes')} stroke="#1a1a1a" strokeWidth="6" onClick={() => onRegionClick?.('stripes')} style={{cursor:'pointer'}}/>
      ))}
      {/* Paws */}
      <ellipse cx="148" cy="415" rx="38" ry="22" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <ellipse cx="252" cy="415" rx="38" ry="22" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Head */}
      <circle cx="200" cy="195" r="88" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Ears */}
      <path d="M 135 148 L 112 88 L 168 122 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <path d="M 265 148 L 288 88 L 232 122 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <path d="M 138 142 L 120 100 L 162 124 Z" fill={f('stripes')} stroke="#1a1a1a" strokeWidth="4"/>
      <path d="M 262 142 L 280 100 L 238 124 Z" fill={f('stripes')} stroke="#1a1a1a" strokeWidth="4"/>
      {/* Forehead stripes */}
      {[-20,0,20].map((dx,i)=>(
        <path key={i} d={`M ${200+dx} 108 C ${200+dx} 125 ${200+dx} 140 ${200+dx} 152`} fill="none" stroke="#1a1a1a" strokeWidth="7" strokeLinecap="round" onClick={() => onRegionClick?.('stripes')} style={{cursor:'pointer'}}/>
      ))}
      {/* Eyes */}
      <ellipse cx="172" cy="182" rx="18" ry="22" fill="white" stroke="#1a1a1a" strokeWidth="8"/>
      <ellipse cx="228" cy="182" rx="18" ry="22" fill="white" stroke="#1a1a1a" strokeWidth="8"/>
      <circle cx="172" cy="182" r="10" fill="#1a1a1a"/>
      <circle cx="228" cy="182" r="10" fill="#1a1a1a"/>
      <circle cx="167" cy="177" r="4" fill="white"/>
      <circle cx="223" cy="177" r="4" fill="white"/>
      {/* Snout */}
      <ellipse cx="200" cy="220" rx="40" ry="28" fill="white" stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <ellipse cx="200" cy="210" rx="14" ry="10" fill="#1a1a1a"/>
      <path d="M 200 220 C 185 232 175 234 168 230" fill="none" stroke="#1a1a1a" strokeWidth="6" strokeLinecap="round"/>
      <path d="M 200 220 C 215 232 225 234 232 230" fill="none" stroke="#1a1a1a" strokeWidth="6" strokeLinecap="round"/>
      <line x1="125" y1="212" x2="178" y2="215" stroke="#1a1a1a" strokeWidth="4" strokeLinecap="round"/>
      <line x1="222" y1="215" x2="275" y2="212" stroke="#1a1a1a" strokeWidth="4" strokeLinecap="round"/>
    </svg>
  );
}

// ─── 3. GIRAFFE ───────────────────────────────────────────────────────────────
export function Giraffe({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Neck */}
      <path d="M 175 225 L 168 78 L 228 78 L 225 225 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Body */}
      <ellipse cx="200" cy="345" rx="118" ry="92" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Legs */}
      {[130,165,235,270].map((x,i)=>(
        <rect key={i} x={x-18} y={408} width="36" height="40" rx="16" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      ))}
      {/* Spots */}
      {[[188,345,32,28],[240,305,28,24],[155,308,25,22],[205,395,26,22],[272,355,24,20],[148,378,22,18]].map(([cx,cy,rx,ry],i)=>(
        <ellipse key={i} cx={cx} cy={cy} rx={rx} ry={ry} fill={f('spots')} stroke="#1a1a1a" strokeWidth="7" onClick={() => onRegionClick?.('spots')} style={{cursor:'pointer'}}/>
      ))}
      {/* Neck spots */}
      {[[188,150,16,14],[200,175,14,12],[192,120,12,10]].map(([cx,cy,rx,ry],i)=>(
        <ellipse key={i} cx={cx} cy={cy} rx={rx} ry={ry} fill={f('spots')} stroke="#1a1a1a" strokeWidth="6" onClick={() => onRegionClick?.('spots')} style={{cursor:'pointer'}}/>
      ))}
      {/* Head */}
      <ellipse cx="198" cy="62" rx="48" ry="38" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Ossicones */}
      <rect x="178" y="25" width="14" height="32" rx="7" fill={f('body')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <rect x="208" y="25" width="14" height="32" rx="7" fill={f('body')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <circle cx="185" cy="24" r="9" fill={f('body')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <circle cx="215" cy="24" r="9" fill={f('body')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Eyes */}
      <circle cx="178" cy="58" r="12" fill="white" stroke="#1a1a1a" strokeWidth="7"/>
      <circle cx="178" cy="58" r="6" fill="#1a1a1a"/>
      <circle cx="175" cy="55" r="2" fill="white"/>
      {/* Mouth */}
      <path d="M 200 76 C 210 82 220 82 226 78" fill="none" stroke="#1a1a1a" strokeWidth="7" strokeLinecap="round"/>
      {/* Ear */}
      <ellipse cx="248" cy="62" rx="18" ry="24" transform="rotate(15 248 62)" fill={f('body')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Tail */}
      <path d="M 318 345 C 338 332 345 318 338 305" fill="none" stroke="#1a1a1a" strokeWidth="12" strokeLinecap="round"/>
      <circle cx="338" cy="302" r="14" fill={f('spots')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('spots')} style={{cursor:'pointer'}}/>
    </svg>
  );
}

// ─── 4. PENGUIN ───────────────────────────────────────────────────────────────
export function Penguin({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Body */}
      <ellipse cx="200" cy="305" rx="112" ry="128" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* White belly */}
      <ellipse cx="200" cy="315" rx="68" ry="98" fill={f('belly')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('belly')} style={{cursor:'pointer'}}/>
      {/* Wings */}
      <path d="M 88 268 C 62 250 52 278 55 308 C 58 335 75 348 95 340 C 110 333 118 315 112 295 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <path d="M 312 268 C 338 250 348 278 345 308 C 342 335 325 348 305 340 C 290 333 282 315 288 295 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Head */}
      <circle cx="200" cy="178" r="82" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* White face patch */}
      <ellipse cx="200" cy="192" rx="52" ry="58" fill={f('belly')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('belly')} style={{cursor:'pointer'}}/>
      {/* Eyes */}
      <circle cx="178" cy="168" r="18" fill="white" stroke="#1a1a1a" strokeWidth="8"/>
      <circle cx="222" cy="168" r="18" fill="white" stroke="#1a1a1a" strokeWidth="8"/>
      <circle cx="178" cy="168" r="10" fill="#1a1a1a"/>
      <circle cx="222" cy="168" r="10" fill="#1a1a1a"/>
      <circle cx="174" cy="164" r="4" fill="white"/>
      <circle cx="218" cy="164" r="4" fill="white"/>
      {/* Beak */}
      <path d="M 185 200 L 200 218 L 215 200 Z" fill={f('beak')} stroke="#1a1a1a" strokeWidth="8" strokeLinejoin="round" onClick={() => onRegionClick?.('beak')} style={{cursor:'pointer'}}/>
      {/* Feet */}
      <path d="M 165 428 L 148 445 M 165 428 L 158 448 M 165 428 L 168 448" stroke="#1a1a1a" strokeWidth="9" strokeLinecap="round" onClick={() => onRegionClick?.('beak')} style={{cursor:'pointer'}}/>
      <path d="M 235 428 L 218 445 M 235 428 L 228 448 M 235 428 L 238 448" stroke="#1a1a1a" strokeWidth="9" strokeLinecap="round" onClick={() => onRegionClick?.('beak')} style={{cursor:'pointer'}}/>
      <ellipse cx="165" cy="424" rx="16" ry="10" fill={f('beak')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('beak')} style={{cursor:'pointer'}}/>
      <ellipse cx="235" cy="424" rx="16" ry="10" fill={f('beak')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('beak')} style={{cursor:'pointer'}}/>
    </svg>
  );
}

// ─── 5. OWL ───────────────────────────────────────────────────────────────────
export function Owl({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Branch */}
      <rect x="42" y="388" width="316" height="40" rx="20" fill={f('branch')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('branch')} style={{cursor:'pointer'}}/>
      {/* Feet */}
      <path d="M 168 388 L 155 405 M 168 388 L 162 408 M 168 388 L 175 408" stroke="#1a1a1a" strokeWidth="9" strokeLinecap="round"/>
      <path d="M 232 388 L 218 405 M 232 388 L 226 408 M 232 388 L 238 408" stroke="#1a1a1a" strokeWidth="9" strokeLinecap="round"/>
      {/* Body */}
      <ellipse cx="200" cy="305" rx="105" ry="118" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Belly feather pattern */}
      <ellipse cx="200" cy="328" rx="65" ry="72" fill={f('belly')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('belly')} style={{cursor:'pointer'}}/>
      {[0,1,2].map(row=>[0,1,2].map(col=>(
        <path key={`${row}${col}`} d={`M ${148+col*28} ${285+row*32} Q ${162+col*28} ${272+row*32} ${176+col*28} ${285+row*32}`} fill="none" stroke="#1a1a1a" strokeWidth="5" strokeLinecap="round" onClick={() => onRegionClick?.('belly')} style={{cursor:'pointer'}}/>
      )))}
      {/* Wings */}
      <path d="M 95 290 C 68 268 65 295 68 322 C 72 348 90 355 108 345 C 118 338 122 318 118 300 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <path d="M 305 290 C 332 268 335 295 332 322 C 328 348 310 355 292 345 C 282 338 278 318 282 300 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Head */}
      <circle cx="200" cy="188" r="88" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Ear tufts */}
      <path d="M 148 122 L 128 75 L 168 108 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <path d="M 252 122 L 272 75 L 232 108 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Big eye circles */}
      <circle cx="172" cy="188" r="38" fill="white" stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('eyes')} style={{cursor:'pointer'}}/>
      <circle cx="228" cy="188" r="38" fill="white" stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('eyes')} style={{cursor:'pointer'}}/>
      <circle cx="172" cy="188" r="24" fill={f('eyes')} stroke="#1a1a1a" strokeWidth="7" onClick={() => onRegionClick?.('eyes')} style={{cursor:'pointer'}}/>
      <circle cx="228" cy="188" r="24" fill={f('eyes')} stroke="#1a1a1a" strokeWidth="7" onClick={() => onRegionClick?.('eyes')} style={{cursor:'pointer'}}/>
      <circle cx="172" cy="188" r="12" fill="#1a1a1a"/>
      <circle cx="228" cy="188" r="12" fill="#1a1a1a"/>
      <circle cx="166" cy="182" r="5" fill="white"/>
      <circle cx="222" cy="182" r="5" fill="white"/>
      {/* Beak */}
      <path d="M 188 212 L 200 228 L 212 212 Z" fill={f('beak')} stroke="#1a1a1a" strokeWidth="8" strokeLinejoin="round" onClick={() => onRegionClick?.('beak')} style={{cursor:'pointer'}}/>
    </svg>
  );
}

// ─── 6. BEAR ──────────────────────────────────────────────────────────────────
export function Bear({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Body */}
      <ellipse cx="200" cy="320" rx="120" ry="108" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Belly */}
      <ellipse cx="200" cy="335" rx="72" ry="78" fill={f('belly')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('belly')} style={{cursor:'pointer'}}/>
      {/* Paws */}
      <ellipse cx="140" cy="418" rx="40" ry="22" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <ellipse cx="260" cy="418" rx="40" ry="22" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Head */}
      <circle cx="200" cy="192" r="90" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Ears */}
      <circle cx="140" cy="122" r="35" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <circle cx="260" cy="122" r="35" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <circle cx="140" cy="122" r="20" fill={f('belly')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('belly')} style={{cursor:'pointer'}}/>
      <circle cx="260" cy="122" r="20" fill={f('belly')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('belly')} style={{cursor:'pointer'}}/>
      {/* Eyes */}
      <circle cx="172" cy="178" r="18" fill="white" stroke="#1a1a1a" strokeWidth="8"/>
      <circle cx="228" cy="178" r="18" fill="white" stroke="#1a1a1a" strokeWidth="8"/>
      <circle cx="172" cy="178" r="10" fill="#1a1a1a"/>
      <circle cx="228" cy="178" r="10" fill="#1a1a1a"/>
      <circle cx="167" cy="173" r="4" fill="white"/>
      <circle cx="223" cy="173" r="4" fill="white"/>
      {/* Muzzle */}
      <ellipse cx="200" cy="220" rx="42" ry="32" fill={f('belly')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('belly')} style={{cursor:'pointer'}}/>
      {/* Nose */}
      <ellipse cx="200" cy="210" rx="16" ry="12" fill="#1a1a1a"/>
      <circle cx="194" cy="206" r="4" fill="white"/>
      {/* Mouth */}
      <path d="M 200 222 C 188 232 178 235 172 230" fill="none" stroke="#1a1a1a" strokeWidth="6" strokeLinecap="round"/>
      <path d="M 200 222 C 212 232 222 235 228 230" fill="none" stroke="#1a1a1a" strokeWidth="6" strokeLinecap="round"/>
    </svg>
  );
}

// ─── 7. MONKEY ────────────────────────────────────────────────────────────────
export function Monkey({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Body */}
      <ellipse cx="200" cy="318" rx="110" ry="100" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Belly */}
      <ellipse cx="200" cy="330" rx="65" ry="72" fill={f('belly')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('belly')} style={{cursor:'pointer'}}/>
      {/* Arms */}
      <path d="M 92 290 C 68 272 52 285 50 308 C 48 330 62 345 82 340 C 92 337 98 325 96 310 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <path d="M 308 290 C 332 272 348 285 350 308 C 352 330 338 345 318 340 C 308 337 302 325 304 310 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Tail */}
      <path d="M 310 318 C 345 300 365 278 358 252 C 352 232 335 228 322 238 C 312 248 315 268 318 285" fill="none" stroke="#1a1a1a" strokeWidth="18" strokeLinecap="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <path d="M 310 318 C 345 300 365 278 358 252 C 352 232 335 228 322 238 C 312 248 315 268 318 285" fill="none" stroke={f('body')} strokeWidth="6"/>
      {/* Head */}
      <circle cx="200" cy="195" r="88" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Ears */}
      <circle cx="118" cy="195" r="32" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <circle cx="282" cy="195" r="32" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <circle cx="118" cy="195" r="18" fill={f('belly')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('belly')} style={{cursor:'pointer'}}/>
      <circle cx="282" cy="195" r="18" fill={f('belly')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('belly')} style={{cursor:'pointer'}}/>
      {/* Face */}
      <ellipse cx="200" cy="215" rx="65" ry="60" fill={f('belly')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('belly')} style={{cursor:'pointer'}}/>
      {/* Eyes */}
      <circle cx="172" cy="182" r="15" fill="#1a1a1a"/>
      <circle cx="228" cy="182" r="15" fill="#1a1a1a"/>
      <circle cx="167" cy="177" r="5" fill="white"/>
      <circle cx="223" cy="177" r="5" fill="white"/>
      {/* Nose */}
      <ellipse cx="200" cy="210" rx="14" ry="10" fill="#1a1a1a"/>
      <circle cx="194" cy="207" r="4" fill={f('belly')}/>
      <circle cx="206" cy="207" r="4" fill={f('belly')}/>
      {/* Mouth / smile */}
      <path d="M 178 230 C 188 242 212 242 222 230" fill="none" stroke="#1a1a1a" strokeWidth="8" strokeLinecap="round"/>
    </svg>
  );
}

// ─── 8. DUCK ──────────────────────────────────────────────────────────────────
export function Duck({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Water */}
      <path d="M 42 385 C 100 370 155 375 200 378 C 245 375 300 370 358 385 C 310 398 255 405 200 405 C 145 405 90 398 42 385 Z" fill={f('water')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('water')} style={{cursor:'pointer'}}/>
      {/* Body */}
      <ellipse cx="200" cy="340" rx="138" ry="82" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Wing detail */}
      <path d="M 145 310 C 175 295 225 295 258 308" fill="none" stroke="#1a1a1a" strokeWidth="8" strokeLinecap="round"/>
      {/* Tail */}
      <path d="M 338 332 C 358 318 368 305 362 290 C 356 278 344 280 338 292 C 333 302 336 318 338 332 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Neck */}
      <path d="M 155 282 C 148 248 152 212 162 188 L 228 188 C 238 212 242 248 245 282 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Head */}
      <circle cx="195" cy="165" r="75" fill={f('head')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('head')} style={{cursor:'pointer'}}/>
      {/* Eye */}
      <circle cx="172" cy="152" r="18" fill="white" stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('head')} style={{cursor:'pointer'}}/>
      <circle cx="172" cy="152" r="10" fill="#1a1a1a"/>
      <circle cx="167" cy="147" r="4" fill="white"/>
      {/* Bill */}
      <path d="M 120 175 C 108 175 100 182 102 190 C 104 198 115 202 128 198 L 155 192 L 148 175 Z" fill={f('bill')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round" onClick={() => onRegionClick?.('bill')} style={{cursor:'pointer'}}/>
      {/* Collar ring (for mallard style) */}
      <path d="M 155 282 C 160 270 162 256 162 240 C 175 248 210 248 228 240 C 228 256 230 270 235 282 Z" fill={f('collar')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('collar')} style={{cursor:'pointer'}}/>
    </svg>
  );
}

// ─── 9. PANDA ─────────────────────────────────────────────────────────────────
export function Panda({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Body */}
      <ellipse cx="200" cy="322" rx="118" ry="105" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Paw pads */}
      <ellipse cx="148" cy="415" rx="38" ry="22" fill={f('patches')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('patches')} style={{cursor:'pointer'}}/>
      <ellipse cx="252" cy="415" rx="38" ry="22" fill={f('patches')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('patches')} style={{cursor:'pointer'}}/>
      {/* Arm patches */}
      <path d="M 82 282 C 62 265 55 285 58 308 C 62 330 78 340 98 332 C 110 326 115 310 110 295 Z" fill={f('patches')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('patches')} style={{cursor:'pointer'}}/>
      <path d="M 318 282 C 338 265 345 285 342 308 C 338 330 322 340 302 332 C 290 326 285 310 290 295 Z" fill={f('patches')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('patches')} style={{cursor:'pointer'}}/>
      {/* Head */}
      <circle cx="200" cy="195" r="88" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Ear patches */}
      <circle cx="140" cy="125" r="34" fill={f('patches')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('patches')} style={{cursor:'pointer'}}/>
      <circle cx="260" cy="125" r="34" fill={f('patches')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('patches')} style={{cursor:'pointer'}}/>
      {/* Eye patches */}
      <ellipse cx="168" cy="185" rx="30" ry="26" transform="rotate(-15 168 185)" fill={f('patches')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('patches')} style={{cursor:'pointer'}}/>
      <ellipse cx="232" cy="185" rx="30" ry="26" transform="rotate(15 232 185)" fill={f('patches')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('patches')} style={{cursor:'pointer'}}/>
      {/* Eyes */}
      <circle cx="168" cy="185" r="14" fill="white" stroke="#1a1a1a" strokeWidth="7"/>
      <circle cx="232" cy="185" r="14" fill="white" stroke="#1a1a1a" strokeWidth="7"/>
      <circle cx="168" cy="185" r="8" fill="#1a1a1a"/>
      <circle cx="232" cy="185" r="8" fill="#1a1a1a"/>
      <circle cx="164" cy="181" r="3" fill="white"/>
      <circle cx="228" cy="181" r="3" fill="white"/>
      {/* Nose */}
      <ellipse cx="200" cy="218" rx="16" ry="11" fill="#1a1a1a"/>
      <circle cx="194" cy="214" r="4" fill="white"/>
      {/* Mouth */}
      <path d="M 200 229 C 188 239 178 241 172 236" fill="none" stroke="#1a1a1a" strokeWidth="6" strokeLinecap="round"/>
      <path d="M 200 229 C 212 239 222 241 228 236" fill="none" stroke="#1a1a1a" strokeWidth="6" strokeLinecap="round"/>
    </svg>
  );
}

// ─── 10. FROG ─────────────────────────────────────────────────────────────────
export function Frog({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Body */}
      <ellipse cx="200" cy="310" rx="130" ry="110" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Belly */}
      <ellipse cx="200" cy="325" rx="78" ry="82" fill={f('belly')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('belly')} style={{cursor:'pointer'}}/>
      {/* Back legs */}
      <path d="M 88 355 C 62 342 45 358 42 378 C 40 398 58 412 82 408 C 105 405 118 388 115 368 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <path d="M 312 355 C 338 342 355 358 358 378 C 360 398 342 412 318 408 C 295 405 282 388 285 368 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Front feet */}
      <path d="M 135 410 L 115 428 M 135 410 L 125 432 M 135 410 L 138 435" stroke="#1a1a1a" strokeWidth="9" strokeLinecap="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <path d="M 265 410 L 248 428 M 265 410 L 258 432 M 265 410 L 268 435" stroke="#1a1a1a" strokeWidth="9" strokeLinecap="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Head — wide */}
      <ellipse cx="200" cy="195" rx="108" ry="80" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Bulging eyes on top */}
      <circle cx="148" cy="148" r="40" fill="white" stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('eyes')} style={{cursor:'pointer'}}/>
      <circle cx="252" cy="148" r="40" fill="white" stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('eyes')} style={{cursor:'pointer'}}/>
      <circle cx="148" cy="148" r="24" fill={f('eyes')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('eyes')} style={{cursor:'pointer'}}/>
      <circle cx="252" cy="148" r="24" fill={f('eyes')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('eyes')} style={{cursor:'pointer'}}/>
      <circle cx="148" cy="148" r="12" fill="#1a1a1a"/>
      <circle cx="252" cy="148" r="12" fill="#1a1a1a"/>
      <circle cx="142" cy="142" r="5" fill="white"/>
      <circle cx="246" cy="142" r="5" fill="white"/>
      {/* Wide mouth */}
      <path d="M 108 218 C 140 238 165 245 200 245 C 235 245 260 238 292 218" fill="none" stroke="#1a1a1a" strokeWidth="9" strokeLinecap="round"/>
      {/* Nostril dots */}
      <circle cx="182" cy="195" r="7" fill="#1a1a1a"/>
      <circle cx="218" cy="195" r="7" fill="#1a1a1a"/>
    </svg>
  );
}

// ─── 11. TURTLE ───────────────────────────────────────────────────────────────
export function Turtle({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Shell */}
      <ellipse cx="200" cy="268" rx="155" ry="130" fill={f('shell')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('shell')} style={{cursor:'pointer'}}/>
      {/* Shell pattern */}
      <ellipse cx="200" cy="268" rx="75" ry="62" fill={f('shellCenter')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('shellCenter')} style={{cursor:'pointer'}}/>
      {[[-70,0],[70,0],[0,-68],[0,68],[-48,-44],[48,-44],[-48,44],[48,44]].map(([dx,dy],i)=>(
        <ellipse key={i} cx={200+dx} cy={268+dy} rx="32" ry="26" fill={f('shellCenter')} stroke="#1a1a1a" strokeWidth="7" onClick={() => onRegionClick?.('shellCenter')} style={{cursor:'pointer'}}/>
      ))}
      {/* Head */}
      <ellipse cx="200" cy="138" rx="58" ry="50" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Neck */}
      <rect x="172" y="138" width="56" height="42" rx="10" fill={f('body')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Eyes */}
      <circle cx="180" cy="128" r="15" fill="white" stroke="#1a1a1a" strokeWidth="8"/>
      <circle cx="220" cy="128" r="15" fill="white" stroke="#1a1a1a" strokeWidth="8"/>
      <circle cx="180" cy="128" r="8" fill="#1a1a1a"/>
      <circle cx="220" cy="128" r="8" fill="#1a1a1a"/>
      <circle cx="176" cy="124" r="3" fill="white"/>
      <circle cx="216" cy="124" r="3" fill="white"/>
      {/* Smile */}
      <path d="M 178 152 C 188 160 212 160 222 152" fill="none" stroke="#1a1a1a" strokeWidth="7" strokeLinecap="round"/>
      {/* Legs */}
      {[[62,245],[62,325],[338,245],[338,325]].map(([cx,cy],i)=>(
        <ellipse key={i} cx={cx} cy={cy} rx="42" ry="28" transform={`rotate(${i<2?-20:20} ${cx} ${cy})`} fill={f('body')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      ))}
      {/* Tail */}
      <path d="M 265 388 C 278 408 282 428 278 440" fill="none" stroke="#1a1a1a" strokeWidth="12" strokeLinecap="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
    </svg>
  );
}

// ─── 12. HORSE ────────────────────────────────────────────────────────────────
export function Horse({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Body */}
      <ellipse cx="205" cy="310" rx="135" ry="100" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Legs */}
      {[[120,388],[162,392],[240,392],[282,388]].map(([x,y],i)=>(
        <rect key={i} x={x-18} y={y-32} width="36" height="56" rx="16" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      ))}
      {/* Hooves */}
      {[[120,420],[162,424],[240,424],[282,420]].map(([x,y],i)=>(
        <rect key={i} x={x-18} y={y} width="36" height="22" rx="10" fill={f('hooves')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('hooves')} style={{cursor:'pointer'}}/>
      ))}
      {/* Tail */}
      <path d="M 338 310 C 358 290 365 268 358 248 C 350 228 335 228 328 240 C 322 252 326 275 330 295" fill="none" stroke="#1a1a1a" strokeWidth="16" strokeLinecap="round" onClick={() => onRegionClick?.('mane')} style={{cursor:'pointer'}}/>
      <path d="M 338 310 C 358 290 365 268 358 248 C 350 228 335 228 328 240 C 322 252 326 275 330 295" fill="none" stroke={f('mane')} strokeWidth="6"/>
      {/* Neck */}
      <path d="M 115 268 C 108 235 112 195 125 165 L 192 168 C 195 198 195 235 190 268 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Head */}
      <path d="M 115 165 C 108 142 115 112 132 98 C 148 85 168 84 182 92 C 195 100 198 120 195 145 L 192 168 L 125 165 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Ear */}
      <path d="M 148 88 L 138 62 L 166 80 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Mane */}
      <path d="M 168 88 C 162 115 158 148 158 168" fill="none" stroke="#1a1a1a" strokeWidth="16" strokeLinecap="round" onClick={() => onRegionClick?.('mane')} style={{cursor:'pointer'}}/>
      <path d="M 168 88 C 162 115 158 148 158 168" fill="none" stroke={f('mane')} strokeWidth="6"/>
      {/* Eye */}
      <circle cx="162" cy="122" r="16" fill="white" stroke="#1a1a1a" strokeWidth="8"/>
      <circle cx="162" cy="122" r="9" fill="#1a1a1a"/>
      <circle cx="158" cy="118" r="4" fill="white"/>
      {/* Nostril */}
      <ellipse cx="130" cy="148" rx="10" ry="7" fill={f('hooves')} stroke="#1a1a1a" strokeWidth="6" onClick={() => onRegionClick?.('hooves')} style={{cursor:'pointer'}}/>
    </svg>
  );
}

// ─── 13. COW ──────────────────────────────────────────────────────────────────
export function Cow({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Body */}
      <ellipse cx="200" cy="318" rx="128" ry="105" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Spots */}
      <path d="M 145 265 C 128 258 115 270 118 285 C 122 300 140 305 155 298 C 168 292 170 278 165 270 Z" fill={f('spots')} stroke="#1a1a1a" strokeWidth="7" onClick={() => onRegionClick?.('spots')} style={{cursor:'pointer'}}/>
      <path d="M 248 335 C 230 328 218 340 222 355 C 226 370 244 375 258 368 C 270 362 272 348 268 340 Z" fill={f('spots')} stroke="#1a1a1a" strokeWidth="7" onClick={() => onRegionClick?.('spots')} style={{cursor:'pointer'}}/>
      {/* Udder */}
      <ellipse cx="200" cy="415" rx="55" ry="28" fill={f('belly')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('belly')} style={{cursor:'pointer'}}/>
      {[178,200,222].map((x,i)=>(
        <rect key={i} x={x-7} y={430} width="14" height="18" rx="7" fill={f('belly')} stroke="#1a1a1a" strokeWidth="7" onClick={() => onRegionClick?.('belly')} style={{cursor:'pointer'}}/>
      ))}
      {/* Legs */}
      {[[120,382],[165,386],[238,386],[282,382]].map(([x,y],i)=>(
        <rect key={i} x={x-18} y={y-28} width="36" height="50" rx="16" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      ))}
      {/* Head */}
      <ellipse cx="200" cy="195" rx="88" ry="80" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Horns */}
      <path d="M 148 132 C 138 108 125 98 118 105 C 118 118 128 128 142 135 Z" fill={f('horns')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round" onClick={() => onRegionClick?.('horns')} style={{cursor:'pointer'}}/>
      <path d="M 252 132 C 262 108 275 98 282 105 C 282 118 272 128 258 135 Z" fill={f('horns')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round" onClick={() => onRegionClick?.('horns')} style={{cursor:'pointer'}}/>
      {/* Ears */}
      <ellipse cx="115" cy="185" rx="28" ry="20" fill={f('body')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <ellipse cx="285" cy="185" rx="28" ry="20" fill={f('body')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Eyes */}
      <circle cx="170" cy="178" r="18" fill="white" stroke="#1a1a1a" strokeWidth="8"/>
      <circle cx="230" cy="178" r="18" fill="white" stroke="#1a1a1a" strokeWidth="8"/>
      <circle cx="170" cy="178" r="10" fill="#1a1a1a"/>
      <circle cx="230" cy="178" r="10" fill="#1a1a1a"/>
      {/* Muzzle */}
      <ellipse cx="200" cy="225" rx="45" ry="32" fill={f('belly')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('belly')} style={{cursor:'pointer'}}/>
      <circle cx="188" cy="220" r="8" fill="#1a1a1a"/>
      <circle cx="212" cy="220" r="8" fill="#1a1a1a"/>
      <path d="M 178 238 C 190 248 210 248 222 238" fill="none" stroke="#1a1a1a" strokeWidth="7" strokeLinecap="round"/>
    </svg>
  );
}

// ─── 14. SHEEP ────────────────────────────────────────────────────────────────
export function Sheep({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Fluffy body — many overlapping circles */}
      {[
        [200,305,82],[148,295,68],[252,295,68],[118,328,58],[282,328,58],
        [165,355,62],[235,355,62],[200,358,68],[138,350,52],[262,350,52],
      ].map(([cx,cy,r],i)=>(
        <circle key={i} cx={cx} cy={cy} r={r} fill={f('wool')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('wool')} style={{cursor:'pointer'}}/>
      ))}
      {/* Legs */}
      {[[142,408],[178,415],[222,415],[258,408]].map(([x,y],i)=>(
        <rect key={i} x={x-15} y={y-25} width="30" height="48" rx="14" fill={f('legs')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('legs')} style={{cursor:'pointer'}}/>
      ))}
      {/* Head (outside the wool) */}
      <ellipse cx="200" cy="188" rx="65" ry="58" fill={f('legs')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('legs')} style={{cursor:'pointer'}}/>
      {/* Ears */}
      <ellipse cx="140" cy="192" rx="22" ry="30" transform="rotate(-15 140 192)" fill={f('legs')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('legs')} style={{cursor:'pointer'}}/>
      <ellipse cx="260" cy="192" rx="22" ry="30" transform="rotate(15 260 192)" fill={f('legs')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('legs')} style={{cursor:'pointer'}}/>
      {/* Eyes */}
      <circle cx="178" cy="180" r="16" fill="white" stroke="#1a1a1a" strokeWidth="8"/>
      <circle cx="222" cy="180" r="16" fill="white" stroke="#1a1a1a" strokeWidth="8"/>
      <circle cx="178" cy="180" r="9" fill="#1a1a1a"/>
      <circle cx="222" cy="180" r="9" fill="#1a1a1a"/>
      <circle cx="174" cy="176" r="4" fill="white"/>
      <circle cx="218" cy="176" r="4" fill="white"/>
      {/* Nose */}
      <ellipse cx="200" cy="212" rx="18" ry="12" fill={f('legs')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('legs')} style={{cursor:'pointer'}}/>
      <circle cx="193" cy="210" r="5" fill="#1a1a1a"/>
      <circle cx="207" cy="210" r="5" fill="#1a1a1a"/>
    </svg>
  );
}

// ─── 15. CROCODILE ────────────────────────────────────────────────────────────
export function Crocodile({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Body */}
      <ellipse cx="200" cy="318" rx="155" ry="80" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Belly */}
      <ellipse cx="200" cy="328" rx="105" ry="52" fill={f('belly')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('belly')} style={{cursor:'pointer'}}/>
      {/* Back scales/spikes */}
      {[108,142,175,208,242,275,308].map((x,i)=>(
        <path key={i} d={`M ${x-12} 248 L ${x} 222 L ${x+12} 248 Z`} fill={f('scales')} stroke="#1a1a1a" strokeWidth="8" strokeLinejoin="round" onClick={() => onRegionClick?.('scales')} style={{cursor:'pointer'}}/>
      ))}
      {/* Tail */}
      <path d="M 355 318 C 378 308 392 295 388 278 C 384 262 370 260 360 270 C 352 280 355 300 358 315 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Legs */}
      {[[105,385],[155,392],[248,392],[298,385]].map(([x,y],i)=>(
        <ellipse key={i} cx={x} cy={y} rx="32" ry="20" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      ))}
      {/* Snout — long */}
      <path d="M 50 280 C 38 272 28 278 28 290 C 28 302 38 308 52 305 L 100 305 L 100 280 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Upper jaw */}
      <path d="M 52 280 L 102 270 L 145 268 L 145 292 L 102 290 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Teeth */}
      {[60,78,96,114].map((x,i)=>(
        <path key={i} d={`M ${x} 288 L ${x+6} 298 L ${x+12} 288`} fill="white" stroke="#1a1a1a" strokeWidth="5" strokeLinejoin="round"/>
      ))}
      {/* Eyes (on top of head) */}
      <circle cx="140" cy="260" r="20" fill="white" stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <circle cx="168" cy="260" r="20" fill="white" stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <circle cx="140" cy="260" r="11" fill={f('eyes')} stroke="#1a1a1a" strokeWidth="7" onClick={() => onRegionClick?.('eyes')} style={{cursor:'pointer'}}/>
      <circle cx="168" cy="260" r="11" fill={f('eyes')} stroke="#1a1a1a" strokeWidth="7" onClick={() => onRegionClick?.('eyes')} style={{cursor:'pointer'}}/>
      <circle cx="140" cy="260" r="5" fill="#1a1a1a"/>
      <circle cx="168" cy="260" r="5" fill="#1a1a1a"/>
    </svg>
  );
}

// ─── 16. BUTTERFLY ────────────────────────────────────────────────────────────
export function Butterfly({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Body */}
      <ellipse cx="200" cy="235" rx="15" ry="105" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Antennae */}
      <path d="M 196 130 C 185 108 172 92 165 80" fill="none" stroke="#1a1a1a" strokeWidth="7" strokeLinecap="round"/>
      <path d="M 204 130 C 215 108 228 92 235 80" fill="none" stroke="#1a1a1a" strokeWidth="7" strokeLinecap="round"/>
      <circle cx="165" cy="78" r="10" fill="#1a1a1a"/>
      <circle cx="235" cy="78" r="10" fill="#1a1a1a"/>
      {/* Upper wings */}
      <path d="M 198 170 C 175 148 130 132 95 148 C 62 162 52 200 65 232 C 78 262 112 275 148 265 C 178 256 198 235 198 215 Z" fill={f('upperWings')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('upperWings')} style={{cursor:'pointer'}}/>
      <path d="M 202 170 C 225 148 270 132 305 148 C 338 162 348 200 335 232 C 322 262 288 275 252 265 C 222 256 202 235 202 215 Z" fill={f('upperWings')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('upperWings')} style={{cursor:'pointer'}}/>
      {/* Lower wings */}
      <path d="M 198 248 C 172 260 135 268 108 258 C 80 248 68 222 78 200 C 88 180 110 175 135 185 C 162 195 192 225 198 248 Z" fill={f('lowerWings')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('lowerWings')} style={{cursor:'pointer'}}/>
      <path d="M 202 248 C 228 260 265 268 292 258 C 320 248 332 222 322 200 C 312 180 290 175 265 185 C 238 195 208 225 202 248 Z" fill={f('lowerWings')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('lowerWings')} style={{cursor:'pointer'}}/>
      {/* Wing spots */}
      {[[132,185],[268,185],[118,230],[282,230],[148,260],[252,260]].map(([cx,cy],i)=>(
        <circle key={i} cx={cx} cy={cy} r="18" fill={f('spots')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('spots')} style={{cursor:'pointer'}}/>
      ))}
    </svg>
  );
}

// ─── 17. SNAIL ────────────────────────────────────────────────────────────────
export function Snail({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Body/foot */}
      <path d="M 58 358 C 42 348 38 330 45 315 C 52 300 70 296 90 300 L 310 300 C 342 300 360 318 358 340 C 356 360 338 372 315 370 L 92 370 C 75 370 60 368 58 358 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Foot front curve */}
      <path d="M 318 300 C 342 290 365 278 368 258 C 372 238 358 225 345 228 C 332 232 328 248 332 265" fill="none" stroke="#1a1a1a" strokeWidth="14" strokeLinecap="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <path d="M 318 300 C 342 290 365 278 368 258 C 372 238 358 225 345 228 C 332 232 328 248 332 265" fill="none" stroke={f('body')} strokeWidth="4"/>
      {/* Shell spiral */}
      <circle cx="188" cy="232" r="95" fill={f('shell')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('shell')} style={{cursor:'pointer'}}/>
      <circle cx="188" cy="232" r="65" fill={f('shellInner')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('shellInner')} style={{cursor:'pointer'}}/>
      <circle cx="188" cy="232" r="38" fill={f('shell')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('shell')} style={{cursor:'pointer'}}/>
      <circle cx="188" cy="232" r="16" fill={f('shellInner')} stroke="#1a1a1a" strokeWidth="7" onClick={() => onRegionClick?.('shellInner')} style={{cursor:'pointer'}}/>
      {/* Antennae */}
      <path d="M 348 260 C 362 242 370 222 368 205" fill="none" stroke="#1a1a1a" strokeWidth="9" strokeLinecap="round"/>
      <path d="M 345 255 C 352 235 355 215 352 200" fill="none" stroke="#1a1a1a" strokeWidth="9" strokeLinecap="round"/>
      <circle cx="368" cy="204" r="12" fill="white" stroke="#1a1a1a" strokeWidth="8"/>
      <circle cx="352" cy="198" r="12" fill="white" stroke="#1a1a1a" strokeWidth="8"/>
      <circle cx="368" cy="204" r="6" fill="#1a1a1a"/>
      <circle cx="352" cy="198" r="6" fill="#1a1a1a"/>
    </svg>
  );
}

// ─── 18. HEDGEHOG ─────────────────────────────────────────────────────────────
export function Hedgehog({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Spiny back — semicircle with spikes */}
      <path d="M 68 305 C 68 195 120 115 200 105 C 280 115 332 195 332 305 Z" fill={f('spines')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('spines')} style={{cursor:'pointer'}}/>
      {/* Spines */}
      {[
        [200,106],[162,115],[228,115],[128,145],[272,145],
        [100,185],[302,185],[85,232],[318,230],
        [78,278],[325,275],
      ].map(([cx,cy],i)=>(
        <path key={i}
          d={`M ${cx-10} ${cy+15} L ${cx} ${cy-22} L ${cx+10} ${cy+15}`}
          fill={f('spines')} stroke="#1a1a1a" strokeWidth="7" strokeLinejoin="round"
          onClick={() => onRegionClick?.('spines')} style={{cursor:'pointer'}}/>
      ))}
      {/* Belly/face area */}
      <path d="M 68 305 C 68 360 118 415 200 428 C 282 415 332 360 332 305 Z" fill={f('belly')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('belly')} style={{cursor:'pointer'}}/>
      {/* Face snout */}
      <path d="M 200 428 C 240 425 278 405 300 375 C 285 375 268 385 252 395 C 248 380 240 368 230 360 L 200 355 L 170 360 C 160 368 152 380 148 395 C 132 385 115 375 100 375 C 122 405 160 425 200 428 Z" fill={f('belly')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round" onClick={() => onRegionClick?.('belly')} style={{cursor:'pointer'}}/>
      {/* Legs */}
      <ellipse cx="148" cy="428" rx="32" ry="18" fill={f('belly')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('belly')} style={{cursor:'pointer'}}/>
      <ellipse cx="252" cy="428" rx="32" ry="18" fill={f('belly')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('belly')} style={{cursor:'pointer'}}/>
      {/* Eyes */}
      <circle cx="172" cy="318" r="18" fill="white" stroke="#1a1a1a" strokeWidth="8"/>
      <circle cx="228" cy="318" r="18" fill="white" stroke="#1a1a1a" strokeWidth="8"/>
      <circle cx="172" cy="318" r="10" fill="#1a1a1a"/>
      <circle cx="228" cy="318" r="10" fill="#1a1a1a"/>
      <circle cx="167" cy="313" r="4" fill="white"/>
      <circle cx="223" cy="313" r="4" fill="white"/>
      {/* Nose */}
      <ellipse cx="200" cy="355" rx="20" ry="14" fill={f('spines')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('spines')} style={{cursor:'pointer'}}/>
      <circle cx="193" cy="352" r="5" fill="white"/>
    </svg>
  );
}

// ─── 19. DEER ─────────────────────────────────────────────────────────────────
export function Deer({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Body */}
      <ellipse cx="205" cy="318" rx="125" ry="100" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Belly */}
      <ellipse cx="205" cy="335" rx="72" ry="58" fill={f('belly')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('belly')} style={{cursor:'pointer'}}/>
      {/* Legs */}
      {[[128,385],[165,392],[248,392],[285,385]].map(([x,y],i)=>(
        <rect key={i} x={x-17} y={y-30} width="34" height="55" rx="15" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      ))}
      {/* Tail */}
      <ellipse cx="328" cy="295" rx="22" ry="28" fill="white" stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('belly')} style={{cursor:'pointer'}}/>
      {/* Neck */}
      <path d="M 120 268 C 112 235 116 198 128 172 L 190 175 C 192 205 192 240 188 268 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Head */}
      <ellipse cx="158" cy="152" rx="70" ry="58" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Antlers */}
      <path d="M 140 108 C 132 88 128 65 130 48 M 130 80 C 118 70 108 62 102 55 M 130 65 C 140 55 148 45 148 35" fill="none" stroke="#1a1a1a" strokeWidth="11" strokeLinecap="round"/>
      <path d="M 175 110 C 182 90 185 68 183 50 M 183 78 C 195 68 205 60 210 53 M 183 62 C 172 52 164 43 163 33" fill="none" stroke="#1a1a1a" strokeWidth="11" strokeLinecap="round"/>
      {/* Ear */}
      <ellipse cx="228" cy="148" rx="22" ry="32" transform="rotate(15 228 148)" fill={f('body')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Eye */}
      <circle cx="142" cy="145" r="16" fill="white" stroke="#1a1a1a" strokeWidth="8"/>
      <circle cx="142" cy="145" r="9" fill="#1a1a1a"/>
      <circle cx="138" cy="141" r="4" fill="white"/>
      {/* Nose/snout */}
      <ellipse cx="100" cy="162" rx="32" ry="22" fill={f('belly')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('belly')} style={{cursor:'pointer'}}/>
      <circle cx="90" cy="160" r="7" fill="#1a1a1a"/>
      <circle cx="108" cy="160" r="7" fill="#1a1a1a"/>
      {/* Spots on body */}
      {[[215,285],[248,305],[225,328]].map(([cx,cy],i)=>(
        <circle key={i} cx={cx} cy={cy} r="12" fill="white" stroke="#1a1a1a" strokeWidth="5" onClick={() => onRegionClick?.('belly')} style={{cursor:'pointer'}}/>
      ))}
    </svg>
  );
}

// ─── 20. FLAMINGO ─────────────────────────────────────────────────────────────
export function Flamingo({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Long leg */}
      <path d="M 205 395 C 205 415 205 432 205 448" fill="none" stroke="#1a1a1a" strokeWidth="13" strokeLinecap="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <path d="M 205 440 C 190 442 175 442 165 438" fill="none" stroke="#1a1a1a" strokeWidth="11" strokeLinecap="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Body */}
      <ellipse cx="200" cy="335" rx="98" ry="72" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Wing fold */}
      <path d="M 145 305 C 180 290 225 292 258 310" fill="none" stroke="#1a1a1a" strokeWidth="8" strokeLinecap="round"/>
      {/* Long S-curve neck */}
      <path d="M 200 268 C 205 245 215 222 225 200 C 235 178 240 155 232 135 C 225 118 212 112 200 115" fill="none" stroke="#1a1a1a" strokeWidth="26" strokeLinecap="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <path d="M 200 268 C 205 245 215 222 225 200 C 235 178 240 155 232 135 C 225 118 212 112 200 115" fill="none" stroke={f('body')} strokeWidth="12"/>
      {/* Head */}
      <circle cx="198" cy="108" r="42" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Eye */}
      <circle cx="210" cy="100" r="12" fill="white" stroke="#1a1a1a" strokeWidth="7"/>
      <circle cx="210" cy="100" r="6" fill="#1a1a1a"/>
      <circle cx="207" cy="97" r="2" fill="white"/>
      {/* Bent beak */}
      <path d="M 188 118 C 172 125 160 132 158 142 C 157 152 168 158 182 154 C 194 150 200 138 200 128 Z" fill={f('beak')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round" onClick={() => onRegionClick?.('beak')} style={{cursor:'pointer'}}/>
      {/* Beak tip (dark) */}
      <path d="M 158 142 C 157 152 165 160 178 156 L 182 154 C 168 158 157 152 158 142 Z" fill="#1a1a1a" stroke="#1a1a1a" strokeWidth="5"/>
    </svg>
  );
}

// ─── 21. KOALA ────────────────────────────────────────────────────────────────
export function Koala({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Body */}
      <ellipse cx="200" cy="322" rx="115" ry="105" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Belly */}
      <ellipse cx="200" cy="338" rx="68" ry="78" fill={f('belly')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('belly')} style={{cursor:'pointer'}}/>
      {/* Arms */}
      <path d="M 86 285 C 62 268 55 288 58 312 C 62 335 78 345 98 338 C 108 332 112 315 108 298 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <path d="M 314 285 C 338 268 345 288 342 312 C 338 335 322 345 302 338 C 292 332 288 315 292 298 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Paws */}
      <ellipse cx="148" cy="418" rx="36" ry="22" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <ellipse cx="252" cy="418" rx="36" ry="22" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Head */}
      <circle cx="200" cy="195" r="88" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Big fluffy ears */}
      <circle cx="132" cy="122" r="48" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <circle cx="268" cy="122" r="48" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <circle cx="132" cy="122" r="30" fill={f('belly')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('belly')} style={{cursor:'pointer'}}/>
      <circle cx="268" cy="122" r="30" fill={f('belly')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('belly')} style={{cursor:'pointer'}}/>
      {/* Eyes */}
      <circle cx="172" cy="182" r="18" fill="white" stroke="#1a1a1a" strokeWidth="8"/>
      <circle cx="228" cy="182" r="18" fill="white" stroke="#1a1a1a" strokeWidth="8"/>
      <circle cx="172" cy="182" r="10" fill="#1a1a1a"/>
      <circle cx="228" cy="182" r="10" fill="#1a1a1a"/>
      <circle cx="167" cy="177" r="4" fill="white"/>
      <circle cx="223" cy="177" r="4" fill="white"/>
      {/* Big nose */}
      <ellipse cx="200" cy="215" rx="28" ry="20" fill="#1a1a1a" stroke="#1a1a1a" strokeWidth="9"/>
      <circle cx="193" cy="210" r="7" fill={f('belly')}/>
      <circle cx="207" cy="210" r="7" fill={f('belly')}/>
      {/* Mouth */}
      <path d="M 182 232 C 190 242 210 242 218 232" fill="none" stroke="#1a1a1a" strokeWidth="7" strokeLinecap="round"/>
    </svg>
  );
}

// ─── 22. PARROT ───────────────────────────────────────────────────────────────
export function Parrot({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Perch */}
      <rect x="42" y="395" width="316" height="30" rx="15" fill={f('perch')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('perch')} style={{cursor:'pointer'}}/>
      {/* Feet */}
      <path d="M 165 395 L 150 410 M 165 395 L 158 415 M 165 395 L 172 415" stroke="#1a1a1a" strokeWidth="9" strokeLinecap="round"/>
      <path d="M 235 395 L 220 410 M 235 395 L 228 415 M 235 395 L 242 415" stroke="#1a1a1a" strokeWidth="9" strokeLinecap="round"/>
      {/* Body */}
      <ellipse cx="200" cy="312" rx="100" ry="108" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Wing */}
      <path d="M 105 285 C 78 262 72 288 75 315 C 78 342 95 355 115 345 C 128 338 132 318 128 300 Z" fill={f('wing')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('wing')} style={{cursor:'pointer'}}/>
      {/* Tail feathers */}
      <path d="M 170 415 C 158 430 148 445 145 450 C 158 445 170 438 178 428 Z" fill={f('tail')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round" onClick={() => onRegionClick?.('tail')} style={{cursor:'pointer'}}/>
      <path d="M 200 420 C 200 438 200 448 200 455 C 205 448 208 438 205 425 Z" fill={f('tail')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round" onClick={() => onRegionClick?.('tail')} style={{cursor:'pointer'}}/>
      <path d="M 230 415 C 242 430 252 445 255 450 C 242 445 230 438 222 428 Z" fill={f('tail')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round" onClick={() => onRegionClick?.('tail')} style={{cursor:'pointer'}}/>
      {/* Head */}
      <circle cx="200" cy="195" r="80" fill={f('head')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('head')} style={{cursor:'pointer'}}/>
      {/* Eye */}
      <circle cx="165" cy="178" r="22" fill="white" stroke="#1a1a1a" strokeWidth="9"/>
      <circle cx="165" cy="178" r="13" fill="#1a1a1a"/>
      <circle cx="160" cy="173" r="5" fill="white"/>
      {/* Beak */}
      <path d="M 155 212 C 140 218 130 230 135 242 C 140 252 155 254 168 248 C 178 243 182 232 178 222 Z" fill={f('beak')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round" onClick={() => onRegionClick?.('beak')} style={{cursor:'pointer'}}/>
      <path d="M 155 212 C 148 220 145 232 150 242" fill="none" stroke="#1a1a1a" strokeWidth="6" strokeLinecap="round"/>
      {/* Cheek patch */}
      <circle cx="185" cy="210" r="22" fill={f('cheek')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('cheek')} style={{cursor:'pointer'}}/>
      {/* Crest */}
      <path d="M 200 118 C 195 98 185 80 178 68 C 186 80 195 95 200 115" fill={f('crest')} stroke="#1a1a1a" strokeWidth="9" strokeLinecap="round" onClick={() => onRegionClick?.('crest')} style={{cursor:'pointer'}}/>
      <path d="M 200 118 C 200 96 200 78 200 62 C 200 78 200 96 200 118" fill={f('crest')} stroke="#1a1a1a" strokeWidth="9" strokeLinecap="round" onClick={() => onRegionClick?.('crest')} style={{cursor:'pointer'}}/>
      <path d="M 200 118 C 205 98 215 80 222 68 C 214 80 205 95 200 115" fill={f('crest')} stroke="#1a1a1a" strokeWidth="9" strokeLinecap="round" onClick={() => onRegionClick?.('crest')} style={{cursor:'pointer'}}/>
    </svg>
  );
}

// ─── 23. HIPPO ────────────────────────────────────────────────────────────────
export function Hippo({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Huge body */}
      <ellipse cx="200" cy="330" rx="155" ry="105" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Stubby legs */}
      {[[98,412],[152,418],[248,418],[302,412]].map(([x,y],i)=>(
        <ellipse key={i} cx={x} cy={y} rx="38" ry="24" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      ))}
      {/* Huge head */}
      <ellipse cx="200" cy="215" rx="138" ry="105" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Ears */}
      <circle cx="88" cy="148" r="32" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <circle cx="312" cy="148" r="32" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <circle cx="88" cy="148" r="18" fill={f('belly')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('belly')} style={{cursor:'pointer'}}/>
      <circle cx="312" cy="148" r="18" fill={f('belly')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('belly')} style={{cursor:'pointer'}}/>
      {/* Eyes on top */}
      <circle cx="155" cy="160" r="24" fill="white" stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <circle cx="245" cy="160" r="24" fill="white" stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <circle cx="155" cy="160" r="14" fill="#1a1a1a"/>
      <circle cx="245" cy="160" r="14" fill="#1a1a1a"/>
      <circle cx="149" cy="154" r="5" fill="white"/>
      <circle cx="239" cy="154" r="5" fill="white"/>
      {/* Wide muzzle */}
      <ellipse cx="200" cy="255" rx="105" ry="58" fill={f('belly')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('belly')} style={{cursor:'pointer'}}/>
      {/* Nostrils */}
      <ellipse cx="175" cy="245" rx="18" ry="12" fill={f('body')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <ellipse cx="225" cy="245" rx="18" ry="12" fill={f('body')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Mouth line */}
      <path d="M 108 278 C 148 295 200 300 252 295 C 280 292 308 282 308 278" fill="none" stroke="#1a1a1a" strokeWidth="8" strokeLinecap="round"/>
    </svg>
  );
}

// ─── 24. LADYBUG ──────────────────────────────────────────────────────────────
export function Ladybug({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Body — shell */}
      <ellipse cx="200" cy="282" rx="158" ry="148" fill={f('shell')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('shell')} style={{cursor:'pointer'}}/>
      {/* Center divide line */}
      <line x1="200" y1="134" x2="200" y2="430" stroke="#1a1a1a" strokeWidth="10"/>
      {/* Spots */}
      {[
        [145,200,30],[255,200,30],[128,278,26],[272,278,26],
        [148,358,24],[252,358,24],[200,175,22],
      ].map(([cx,cy,r],i)=>(
        <circle key={i} cx={cx} cy={cy} r={r} fill="#1a1a1a" stroke="#1a1a1a" strokeWidth="5" onClick={() => onRegionClick?.('shell')} style={{cursor:'pointer'}}/>
      ))}
      {/* Head */}
      <circle cx="200" cy="120" r="72" fill={f('head')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('head')} style={{cursor:'pointer'}}/>
      {/* Eyes */}
      <circle cx="168" cy="108" r="18" fill="white" stroke="#1a1a1a" strokeWidth="8"/>
      <circle cx="232" cy="108" r="18" fill="white" stroke="#1a1a1a" strokeWidth="8"/>
      <circle cx="168" cy="108" r="10" fill="#1a1a1a"/>
      <circle cx="232" cy="108" r="10" fill="#1a1a1a"/>
      <circle cx="163" cy="103" r="4" fill="white"/>
      <circle cx="227" cy="103" r="4" fill="white"/>
      {/* Antennae */}
      <path d="M 175 60 C 162 40 152 25 145 15" fill="none" stroke="#1a1a1a" strokeWidth="8" strokeLinecap="round"/>
      <path d="M 225 60 C 238 40 248 25 255 15" fill="none" stroke="#1a1a1a" strokeWidth="8" strokeLinecap="round"/>
      <circle cx="145" cy="13" r="10" fill="#1a1a1a"/>
      <circle cx="255" cy="13" r="10" fill="#1a1a1a"/>
      {/* Legs */}
      {[[-95,290,-20],[-98,338,-10],[95,290,20],[98,338,10]].map(([dx,y,angle],i)=>(
        <path key={i} d={`M ${200+dx} ${y} C ${200+dx+Math.cos(angle*0.1)*40} ${y+20} ${200+dx+Math.cos(angle*0.1)*70} ${y+10}`} fill="none" stroke="#1a1a1a" strokeWidth="9" strokeLinecap="round"/>
      ))}
    </svg>
  );
}

// ─── 25. WHALE ────────────────────────────────────────────────────────────────
export function Whale({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Water spout */}
      <path d="M 200 88 C 192 68 185 50 182 35 M 200 88 C 200 65 200 45 200 30 M 200 88 C 208 68 215 50 218 35" fill="none" stroke="#1a1a1a" strokeWidth="8" strokeLinecap="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Body */}
      <path d="M 200 420 C 108 408 42 355 38 280 C 35 210 78 152 138 128 C 162 118 185 118 200 122 C 215 118 238 118 262 128 C 322 152 365 210 362 280 C 358 355 292 408 200 420 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Belly */}
      <ellipse cx="200" cy="310" rx="98" ry="88" fill={f('belly')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('belly')} style={{cursor:'pointer'}}/>
      {/* Flipper left */}
      <path d="M 68 305 C 40 285 28 258 35 235 C 42 215 62 210 80 220 C 95 228 102 248 100 270 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Tail flukes */}
      <path d="M 155 415 C 135 430 108 438 88 432 C 80 412 95 398 118 405 C 138 410 152 408 162 415 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <path d="M 245 415 C 265 430 292 438 312 432 C 320 412 305 398 282 405 C 262 410 248 408 238 415 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Eye */}
      <circle cx="128" cy="188" r="22" fill="white" stroke="#1a1a1a" strokeWidth="9"/>
      <circle cx="128" cy="188" r="12" fill="#1a1a1a"/>
      <circle cx="123" cy="183" r="5" fill="white"/>
      {/* Mouth curve */}
      <path d="M 85 240 C 118 260 155 268 190 268" fill="none" stroke="#1a1a1a" strokeWidth="8" strokeLinecap="round"/>
    </svg>
  );
}

// ─── 26. SQUIRREL ─────────────────────────────────────────────────────────────
export function Squirrel({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Big fluffy tail */}
      <path d="M 270 385 C 305 355 338 318 345 278 C 352 238 335 205 312 195 C 290 186 268 198 260 220 C 252 242 260 268 268 288 C 275 308 278 335 268 358 Z" fill={f('tail')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('tail')} style={{cursor:'pointer'}}/>
      {/* Tail inner */}
      <path d="M 265 375 C 295 348 322 315 328 280 C 334 248 320 218 300 210 C 282 202 265 218 258 240 C 252 262 260 290 266 312 C 272 332 272 355 265 375 Z" fill={f('tailInner')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('tailInner')} style={{cursor:'pointer'}}/>
      {/* Body */}
      <ellipse cx="185" cy="315" rx="105" ry="95" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Belly */}
      <ellipse cx="178" cy="328" rx="58" ry="68" fill={f('belly')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('belly')} style={{cursor:'pointer'}}/>
      {/* Front paw holding nut */}
      <ellipse cx="200" cy="408" rx="38" ry="22" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <circle cx="200" cy="408" r="18" fill={f('belly')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('belly')} style={{cursor:'pointer'}}/>
      {/* Head */}
      <circle cx="175" cy="205" r="78" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Ears */}
      <path d="M 128 148 L 108 102 L 158 132 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <path d="M 218 148 L 230 102 L 198 135 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Eyes */}
      <circle cx="150" cy="195" r="18" fill="white" stroke="#1a1a1a" strokeWidth="8"/>
      <circle cx="200" cy="192" r="18" fill="white" stroke="#1a1a1a" strokeWidth="8"/>
      <circle cx="150" cy="195" r="10" fill="#1a1a1a"/>
      <circle cx="200" cy="192" r="10" fill="#1a1a1a"/>
      <circle cx="145" cy="190" r="4" fill="white"/>
      <circle cx="195" cy="187" r="4" fill="white"/>
      {/* Chubby cheeks / nose */}
      <ellipse cx="172" cy="228" rx="35" ry="22" fill={f('belly')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('belly')} style={{cursor:'pointer'}}/>
      <circle cx="162" cy="222" r="6" fill="#1a1a1a"/>
      <circle cx="182" cy="222" r="6" fill="#1a1a1a"/>
      {/* Whiskers */}
      <line x1="110" y1="225" x2="158" y2="228" stroke="#1a1a1a" strokeWidth="4" strokeLinecap="round"/>
      <line x1="108" y1="233" x2="156" y2="234" stroke="#1a1a1a" strokeWidth="4" strokeLinecap="round"/>
    </svg>
  );
}

// ─── 27. OCTOPUS ──────────────────────────────────────────────────────────────
export function Octopus({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  const tentacles = [
    "M 200 280 C 175 310 145 335 128 365 C 118 385 122 408 135 415",
    "M 200 280 C 185 320 178 355 182 385 C 184 405 192 420 200 425",
    "M 200 280 C 215 320 222 355 218 385 C 216 405 208 420 200 425",
    "M 200 280 C 225 310 255 335 272 365 C 282 385 278 408 265 415",
    "M 200 280 C 248 298 278 312 302 335 C 318 352 318 378 308 388",
    "M 200 280 C 152 298 122 312 98 335 C 82 352 82 378 92 388",
    "M 200 280 C 258 278 290 265 315 248 C 332 235 335 215 325 208",
    "M 200 280 C 142 278 110 265 85 248 C 68 235 65 215 75 208",
  ];
  return (
    <svg {...svgProps}>
      {/* Tentacles */}
      {tentacles.map((d,i)=>(
        <path key={i} d={d} fill="none" stroke="#1a1a1a" strokeWidth="22" strokeLinecap="round" onClick={() => onRegionClick?.('tentacles')} style={{cursor:'pointer'}}/>
      ))}
      {tentacles.map((d,i)=>(
        <path key={`c${i}`} d={d} fill="none" stroke={f('tentacles')} strokeWidth="10" strokeLinecap="round" onClick={() => onRegionClick?.('tentacles')} style={{cursor:'pointer'}}/>
      ))}
      {/* Suckers */}
      {[[148,338],[178,368],[165,400],[222,362],[250,330],[235,395]].map(([cx,cy],i)=>(
        <circle key={i} cx={cx} cy={cy} r="9" fill="white" stroke="#1a1a1a" strokeWidth="5" onClick={() => onRegionClick?.('tentacles')} style={{cursor:'pointer'}}/>
      ))}
      {/* Head/mantle */}
      <ellipse cx="200" cy="182" rx="118" ry="112" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Eyes */}
      <circle cx="162" cy="165" r="28" fill="white" stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <circle cx="238" cy="165" r="28" fill="white" stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <circle cx="162" cy="165" r="16" fill={f('eyes')} stroke="#1a1a1a" strokeWidth="7" onClick={() => onRegionClick?.('eyes')} style={{cursor:'pointer'}}/>
      <circle cx="238" cy="165" r="16" fill={f('eyes')} stroke="#1a1a1a" strokeWidth="7" onClick={() => onRegionClick?.('eyes')} style={{cursor:'pointer'}}/>
      <circle cx="162" cy="165" r="8" fill="#1a1a1a"/>
      <circle cx="238" cy="165" r="8" fill="#1a1a1a"/>
      <circle cx="157" cy="160" r="4" fill="white"/>
      <circle cx="233" cy="160" r="4" fill="white"/>
      {/* Mouth */}
      <path d="M 178 215 C 190 228 210 228 222 215" fill="none" stroke="#1a1a1a" strokeWidth="8" strokeLinecap="round"/>
    </svg>
  );
}

// ─── 28. FOX ──────────────────────────────────────────────────────────────────
export function Fox({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Big fluffy tail */}
      <path d="M 305 362 C 340 340 368 308 368 275 C 368 245 350 225 330 222 C 310 220 295 238 292 260 C 289 282 298 305 305 328 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Tail tip */}
      <circle cx="356" cy="218" r="30" fill="white" stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('tip')} style={{cursor:'pointer'}}/>
      {/* Body */}
      <ellipse cx="188" cy="320" rx="112" ry="98" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Belly */}
      <ellipse cx="182" cy="335" rx="62" ry="70" fill="white" stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('tip')} style={{cursor:'pointer'}}/>
      {/* Legs */}
      {[[110,405],[155,412],[222,412],[268,405]].map(([x,y],i)=>(
        <rect key={i} x={x-17} y={y-28} width="34" height="50" rx="15" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      ))}
      {/* Head */}
      <circle cx="175" cy="205" r="80" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Pointy ears */}
      <path d="M 118 148 L 95 90 L 158 128 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <path d="M 222 150 L 238 92 L 200 132 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Ear inner */}
      <path d="M 122 144 L 105 100 L 154 126 Z" fill={f('earInner')} stroke="#1a1a1a" strokeWidth="5" onClick={() => onRegionClick?.('earInner')} style={{cursor:'pointer'}}/>
      <path d="M 218 146 L 232 102 L 202 128 Z" fill={f('earInner')} stroke="#1a1a1a" strokeWidth="5" onClick={() => onRegionClick?.('earInner')} style={{cursor:'pointer'}}/>
      {/* White muzzle */}
      <ellipse cx="160" cy="235" rx="52" ry="40" fill="white" stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('tip')} style={{cursor:'pointer'}}/>
      {/* Eyes */}
      <ellipse cx="142" cy="192" rx="16" ry="18" fill="white" stroke="#1a1a1a" strokeWidth="8"/>
      <ellipse cx="200" cy="190" rx="16" ry="18" fill="white" stroke="#1a1a1a" strokeWidth="8"/>
      <circle cx="142" cy="192" r="9" fill="#1a1a1a"/>
      <circle cx="200" cy="190" r="9" fill="#1a1a1a"/>
      <circle cx="138" cy="188" r="4" fill="white"/>
      <circle cx="196" cy="186" r="4" fill="white"/>
      {/* Nose */}
      <ellipse cx="148" cy="238" rx="12" ry="9" fill="#1a1a1a"/>
      <circle cx="143" cy="235" r="3" fill="white"/>
      {/* Whiskers */}
      <line x1="95" y1="232" x2="143" y2="236" stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round"/>
      <line x1="92" y1="242" x2="140" y2="243" stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}

// ─── 29. CRAB ─────────────────────────────────────────────────────────────────
export function Crab({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Left big claw */}
      <path d="M 75 245 C 48 228 32 238 30 258 C 28 278 45 292 68 288 C 80 285 90 275 90 262 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <path d="M 75 285 C 48 295 32 285 30 268 C 28 252 42 240 65 245 C 78 250 88 262 88 275 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Left claw arm */}
      <path d="M 88 265 C 100 252 118 248 132 255" fill="none" stroke="#1a1a1a" strokeWidth="16" strokeLinecap="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <path d="M 88 265 C 100 252 118 248 132 255" fill="none" stroke={f('body')} strokeWidth="4"/>
      {/* Right big claw */}
      <path d="M 325 245 C 352 228 368 238 370 258 C 372 278 355 292 332 288 C 320 285 310 275 310 262 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <path d="M 325 285 C 352 295 368 285 370 268 C 372 252 358 240 335 245 C 322 250 312 262 312 275 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Right claw arm */}
      <path d="M 312 265 C 300 252 282 248 268 255" fill="none" stroke="#1a1a1a" strokeWidth="16" strokeLinecap="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <path d="M 312 265 C 300 252 282 248 268 255" fill="none" stroke={f('body')} strokeWidth="4"/>
      {/* Walking legs left */}
      {[300,330,360].map((y,i)=>(
        <path key={i} d={`M 132 ${255+i*18} C 105 ${y} 85 ${y+10}`} fill="none" stroke="#1a1a1a" strokeWidth="10" strokeLinecap="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      ))}
      {/* Walking legs right */}
      {[300,330,360].map((y,i)=>(
        <path key={i} d={`M 268 ${255+i*18} C 295 ${y} 315 ${y+10}`} fill="none" stroke="#1a1a1a" strokeWidth="10" strokeLinecap="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      ))}
      {/* Shell body */}
      <ellipse cx="200" cy="305" rx="125" ry="85" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Shell lines */}
      <path d="M 200 222 L 200 385" stroke="#1a1a1a" strokeWidth="6" strokeLinecap="round"/>
      <path d="M 105 285 C 148 270 200 265 252 270 C 295 275 315 285" fill="none" stroke="#1a1a1a" strokeWidth="6" strokeLinecap="round"/>
      {/* Eyes on stalks */}
      <path d="M 162 225 C 155 205 150 190 148 178" fill="none" stroke="#1a1a1a" strokeWidth="9" strokeLinecap="round"/>
      <path d="M 238 225 C 245 205 250 190 252 178" fill="none" stroke="#1a1a1a" strokeWidth="9" strokeLinecap="round"/>
      <circle cx="148" cy="172" r="22" fill="white" stroke="#1a1a1a" strokeWidth="9"/>
      <circle cx="252" cy="172" r="22" fill="white" stroke="#1a1a1a" strokeWidth="9"/>
      <circle cx="148" cy="172" r="12" fill={f('eyes')} stroke="#1a1a1a" strokeWidth="7" onClick={() => onRegionClick?.('eyes')} style={{cursor:'pointer'}}/>
      <circle cx="252" cy="172" r="12" fill={f('eyes')} stroke="#1a1a1a" strokeWidth="7" onClick={() => onRegionClick?.('eyes')} style={{cursor:'pointer'}}/>
      <circle cx="148" cy="172" r="6" fill="#1a1a1a"/>
      <circle cx="252" cy="172" r="6" fill="#1a1a1a"/>
    </svg>
  );
}

// ─── 30. POLAR BEAR ───────────────────────────────────────────────────────────
export function PolarBear({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Body */}
      <ellipse cx="200" cy="322" rx="128" ry="110" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Paws */}
      <ellipse cx="140" cy="420" rx="42" ry="24" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <ellipse cx="260" cy="420" rx="42" ry="24" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Arms */}
      <path d="M 74 288 C 48 270 40 292 43 318 C 46 342 65 355 88 346 C 102 338 108 320 104 302 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <path d="M 326 288 C 352 270 360 292 357 318 C 354 342 335 355 312 346 C 298 338 292 320 296 302 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Head */}
      <circle cx="200" cy="195" r="90" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Ears */}
      <circle cx="138" cy="122" r="36" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <circle cx="262" cy="122" r="36" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Eyes */}
      <circle cx="170" cy="178" r="19" fill={f('detail')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('detail')} style={{cursor:'pointer'}}/>
      <circle cx="230" cy="178" r="19" fill={f('detail')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('detail')} style={{cursor:'pointer'}}/>
      <circle cx="170" cy="178" r="10" fill="#1a1a1a"/>
      <circle cx="230" cy="178" r="10" fill="#1a1a1a"/>
      <circle cx="165" cy="173" r="4" fill="white"/>
      <circle cx="225" cy="173" r="4" fill="white"/>
      {/* Muzzle */}
      <ellipse cx="200" cy="228" rx="45" ry="35" fill={f('detail')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('detail')} style={{cursor:'pointer'}}/>
      {/* Nose */}
      <ellipse cx="200" cy="215" rx="18" ry="13" fill="#1a1a1a"/>
      <circle cx="194" cy="211" r="5" fill="white"/>
      {/* Mouth */}
      <path d="M 200 228 C 187 238 177 240 170 235" fill="none" stroke="#1a1a1a" strokeWidth="6" strokeLinecap="round"/>
      <path d="M 200 228 C 213 238 223 240 230 235" fill="none" stroke="#1a1a1a" strokeWidth="6" strokeLinecap="round"/>
      {/* Ice floe under feet */}
      <ellipse cx="200" cy="442" rx="165" ry="22" fill={f('ice')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('ice')} style={{cursor:'pointer'}}/>
    </svg>
  );
}
