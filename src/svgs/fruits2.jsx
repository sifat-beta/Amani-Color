// SVG Coloring Drawings - FRUITS 2 (30 new fruits)
// Same format as fruits.jsx — viewBox 0 0 400 450, strokeWidth 10+

const svgProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 400 450',
  style: { width: '100%', height: '100%', userSelect: 'none' },
};

// ─── 1. PINEAPPLE ─────────────────────────────────────────────────────────────
export function Pineapple({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Crown leaves */}
      <path d="M 200 88 C 195 68 182 50 170 42 C 175 58 178 74 182 90" fill={f('leaves')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round" onClick={() => onRegionClick?.('leaves')} style={{cursor:'pointer'}}/>
      <path d="M 200 88 C 200 65 200 46 200 36 C 200 46 200 65 200 88" fill={f('leaves')} stroke="#1a1a1a" strokeWidth="9" strokeLinecap="round" onClick={() => onRegionClick?.('leaves')} style={{cursor:'pointer'}}/>
      <path d="M 200 88 C 205 68 218 50 230 42 C 225 58 222 74 218 90" fill={f('leaves')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round" onClick={() => onRegionClick?.('leaves')} style={{cursor:'pointer'}}/>
      <path d="M 200 88 C 188 72 172 60 160 58 C 168 70 180 80 192 88" fill={f('leaves')} stroke="#1a1a1a" strokeWidth="8" strokeLinejoin="round" onClick={() => onRegionClick?.('leaves')} style={{cursor:'pointer'}}/>
      <path d="M 200 88 C 212 72 228 60 240 58 C 232 70 220 80 208 88" fill={f('leaves')} stroke="#1a1a1a" strokeWidth="8" strokeLinejoin="round" onClick={() => onRegionClick?.('leaves')} style={{cursor:'pointer'}}/>
      {/* Body */}
      <ellipse cx="200" cy="280" rx="118" ry="158" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Cross-hatch diamond pattern */}
      {[-2,-1,0,1,2].map(row => [-2,-1,0,1,2].map(col => {
        const cx = 200 + col * 44;
        const cy = 280 + row * 50;
        return <path key={`${row},${col}`} d={`M ${cx} ${cy-18} L ${cx+20} ${cy} L ${cx} ${cy+18} L ${cx-20} ${cy} Z`} fill="none" stroke="#1a1a1a" strokeWidth="4" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>;
      }))}
    </svg>
  );
}

// ─── 2. MANGO ─────────────────────────────────────────────────────────────────
export function Mango({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Body — kidney/mango shape */}
      <path d="M 200 410 C 140 390 82 335 78 265 C 74 195 108 140 155 118 C 178 108 200 110 200 110 C 200 110 225 100 252 112 C 305 136 340 195 335 268 C 330 340 268 392 200 410 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Blush/colour patch */}
      <ellipse cx="148" cy="220" rx="48" ry="68" fill={f('blush')} stroke="#1a1a1a" strokeWidth="7" opacity="0.9" onClick={() => onRegionClick?.('blush')} style={{cursor:'pointer'}}/>
      {/* Stem */}
      <path d="M 200 110 C 200 95 202 80 205 68" fill="none" stroke="#1a1a1a" strokeWidth="11" strokeLinecap="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Leaf */}
      <path d="M 205 72 C 222 60 248 58 260 68 C 250 84 226 88 210 82 Z" fill={f('leaf')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round" onClick={() => onRegionClick?.('leaf')} style={{cursor:'pointer'}}/>
    </svg>
  );
}

// ─── 3. PEAR ──────────────────────────────────────────────────────────────────
export function Pear({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Body */}
      <path d="M 200 415 C 128 392 72 330 72 258 C 72 188 112 148 155 138 C 168 134 180 135 188 138 C 180 120 175 100 178 82 C 182 62 192 52 200 52 C 208 52 218 62 222 82 C 225 100 220 120 212 138 C 220 135 232 134 245 138 C 288 148 328 188 328 258 C 328 330 272 392 200 415 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Stem */}
      <path d="M 200 52 C 200 40 202 28 206 20" fill="none" stroke="#1a1a1a" strokeWidth="10" strokeLinecap="round"/>
      {/* Leaf */}
      <path d="M 204 32 C 218 22 240 20 250 30 C 242 44 220 48 206 42 Z" fill={f('leaf')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round" onClick={() => onRegionClick?.('leaf')} style={{cursor:'pointer'}}/>
    </svg>
  );
}

// ─── 4. CHERRY ────────────────────────────────────────────────────────────────
export function Cherry({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Stems */}
      <path d="M 148 245 C 148 210 168 175 200 155 C 232 175 252 210 252 245" fill="none" stroke="#1a1a1a" strokeWidth="11" strokeLinecap="round"/>
      <path d="M 200 155 C 200 135 200 115 200 100" fill="none" stroke="#1a1a1a" strokeWidth="11" strokeLinecap="round"/>
      {/* Leaf */}
      <path d="M 200 118 C 218 105 244 102 255 114 C 246 128 222 132 206 124 Z" fill={f('leaf')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round" onClick={() => onRegionClick?.('leaf')} style={{cursor:'pointer'}}/>
      {/* Left cherry */}
      <circle cx="148" cy="305" r="72" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Right cherry */}
      <circle cx="282" cy="305" r="72" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Highlights */}
      <circle cx="128" cy="282" r="16" fill="white" opacity="0.4" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <circle cx="262" cy="282" r="16" fill="white" opacity="0.4" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
    </svg>
  );
}

// ─── 5. LEMON ─────────────────────────────────────────────────────────────────
export function Lemon({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Body — lemon oval with pointed ends */}
      <path d="M 72 228 C 72 158 120 100 160 82 C 172 76 185 75 200 78 C 215 75 228 76 240 82 C 280 100 328 158 328 228 C 328 298 280 356 240 374 C 228 380 215 381 200 378 C 185 381 172 380 160 374 C 120 356 72 298 72 228 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Nub top */}
      <path d="M 195 78 C 192 62 188 50 185 42 C 196 48 204 48 215 42 C 212 50 208 62 205 78 Z" fill={f('nub')} stroke="#1a1a1a" strokeWidth="8" strokeLinejoin="round" onClick={() => onRegionClick?.('nub')} style={{cursor:'pointer'}}/>
      {/* Nub bottom */}
      <path d="M 195 378 C 192 394 188 406 185 414 C 196 408 204 408 215 414 C 212 406 208 394 205 378 Z" fill={f('nub')} stroke="#1a1a1a" strokeWidth="8" strokeLinejoin="round" onClick={() => onRegionClick?.('nub')} style={{cursor:'pointer'}}/>
      {/* Highlight line */}
      <path d="M 132 168 C 128 195 130 225 136 252" fill="none" stroke="#1a1a1a" strokeWidth="6" strokeLinecap="round"/>
    </svg>
  );
}

// ─── 6. KIWI (SLICE) ──────────────────────────────────────────────────────────
export function Kiwi({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  const seeds = [
    [200,215],[170,228],[188,252],[215,255],[235,238],[222,218],
    [200,275],[175,272],[225,275],
  ];
  return (
    <svg {...svgProps}>
      {/* Outer skin ring */}
      <circle cx="200" cy="240" r="165" fill={f('skin')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('skin')} style={{cursor:'pointer'}}/>
      {/* White inner ring */}
      <circle cx="200" cy="240" r="148" fill={f('flesh')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('flesh')} style={{cursor:'pointer'}}/>
      {/* Center */}
      <circle cx="200" cy="240" r="52" fill={f('center')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('center')} style={{cursor:'pointer'}}/>
      {/* Radiating lines */}
      {Array.from({length:12},(_,i)=>{
        const angle = i*30*Math.PI/180;
        return <line key={i} x1={200+52*Math.cos(angle)} y1={240+52*Math.sin(angle)} x2={200+148*Math.cos(angle)} y2={240+148*Math.sin(angle)} stroke="#1a1a1a" strokeWidth="5" onClick={() => onRegionClick?.('flesh')} style={{cursor:'pointer'}}/>;
      })}
      {/* Seeds */}
      {seeds.map(([cx,cy],i)=>(
        <ellipse key={i} cx={cx} cy={cy} rx="9" ry="14" transform={`rotate(${i*40} ${cx} ${cy})`} fill={f('center')} stroke="#1a1a1a" strokeWidth="5" onClick={() => onRegionClick?.('center')} style={{cursor:'pointer'}}/>
      ))}
    </svg>
  );
}

// ─── 7. PEACH ─────────────────────────────────────────────────────────────────
export function Peach({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Body */}
      <path d="M 200 415 C 125 390 68 325 68 248 C 68 170 118 108 175 96 C 188 92 200 98 200 98 C 200 98 212 92 225 96 C 282 108 332 170 332 248 C 332 325 275 390 200 415 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Blush patch */}
      <ellipse cx="155" cy="230" rx="52" ry="72" fill={f('blush')} stroke="#1a1a1a" strokeWidth="7" onClick={() => onRegionClick?.('blush')} style={{cursor:'pointer'}}/>
      {/* Center crease line */}
      <path d="M 200 98 C 200 160 200 280 200 415" fill="none" stroke="#1a1a1a" strokeWidth="7" strokeLinecap="round"/>
      {/* Stem */}
      <path d="M 200 98 C 200 82 202 68 206 56" fill="none" stroke="#1a1a1a" strokeWidth="10" strokeLinecap="round"/>
      {/* Leaf */}
      <path d="M 204 62 C 220 50 244 48 256 58 C 248 74 224 78 208 70 Z" fill={f('leaf')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round" onClick={() => onRegionClick?.('leaf')} style={{cursor:'pointer'}}/>
    </svg>
  );
}

// ─── 8. BLUEBERRIES ───────────────────────────────────────────────────────────
export function Blueberries({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  const berries = [
    [152,265,52],[255,272,52],[200,225,52],
    [120,340,48],[285,335,48],[200,348,52],
    [162,408,45],[242,412,45],
  ];
  return (
    <svg {...svgProps}>
      {/* Stem/branch */}
      <path d="M 200 100 C 200 130 200 155 200 175" fill="none" stroke="#1a1a1a" strokeWidth="11" strokeLinecap="round"/>
      <path d="M 200 130 C 178 118 155 122 145 138" fill="none" stroke="#1a1a1a" strokeWidth="9" strokeLinecap="round"/>
      <path d="M 200 140 C 222 128 245 132 255 148" fill="none" stroke="#1a1a1a" strokeWidth="9" strokeLinecap="round"/>
      {/* Leaf */}
      <path d="M 200 100 C 178 85 155 80 142 90 C 150 106 172 110 192 104 Z" fill={f('leaf')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round" onClick={() => onRegionClick?.('leaf')} style={{cursor:'pointer'}}/>
      <path d="M 200 100 C 222 85 245 80 258 90 C 250 106 228 110 208 104 Z" fill={f('leaf')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round" onClick={() => onRegionClick?.('leaf')} style={{cursor:'pointer'}}/>
      {/* Berries */}
      {berries.map(([cx,cy,r],i)=>(
        <g key={i}>
          <circle cx={cx} cy={cy} r={r} fill={f('body')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
          {/* Crown mark at top */}
          <path d={`M ${cx-10} ${cy-r+8} C ${cx-5} ${cy-r+2} ${cx} ${cy-r} ${cx+5} ${cy-r+2} C ${cx+10} ${cy-r+8} ${cx+6} ${cy-r+5} ${cx} ${cy-r+10} C ${cx-6} ${cy-r+5} ${cx-10} ${cy-r+8}`} fill="none" stroke="#1a1a1a" strokeWidth="5"/>
        </g>
      ))}
    </svg>
  );
}

// ─── 9. RASPBERRY ─────────────────────────────────────────────────────────────
export function Raspberry({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  const drupelets = [
    [200,128],[168,148],[232,148],
    [148,182],[200,175],[252,182],
    [138,222],[185,215],[218,215],[265,222],
    [148,265],[192,258],[212,258],[258,265],
    [162,308],[200,302],[242,308],
    [178,348],[225,348],
    [200,385],
  ];
  return (
    <svg {...svgProps}>
      {/* Calyx */}
      <path d="M 168 128 C 165 105 168 85 172 72 C 178 82 180 98 182 115" fill={f('leaf')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round" onClick={() => onRegionClick?.('leaf')} style={{cursor:'pointer'}}/>
      <path d="M 200 120 C 200 98 200 78 200 65 C 200 78 200 98 200 120" fill={f('leaf')} stroke="#1a1a1a" strokeWidth="9" strokeLinecap="round" onClick={() => onRegionClick?.('leaf')} style={{cursor:'pointer'}}/>
      <path d="M 232 128 C 235 105 232 85 228 72 C 222 82 220 98 218 115" fill={f('leaf')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round" onClick={() => onRegionClick?.('leaf')} style={{cursor:'pointer'}}/>
      {/* All drupelets */}
      {drupelets.map(([cx,cy],i)=>(
        <circle key={i} cx={cx} cy={cy} r="34" fill={f('body')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      ))}
      {/* Highlight dots */}
      {drupelets.map(([cx,cy],i)=>(
        <circle key={`h${i}`} cx={cx-10} cy={cy-10} r="7" fill="white" opacity="0.4" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      ))}
    </svg>
  );
}

// ─── 10. COCONUT ──────────────────────────────────────────────────────────────
export function Coconut({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Husk body */}
      <ellipse cx="200" cy="268" rx="148" ry="158" fill={f('husk')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('husk')} style={{cursor:'pointer'}}/>
      {/* Husk texture lines */}
      <path d="M 90 215 C 115 238 148 255 172 268" fill="none" stroke="#1a1a1a" strokeWidth="6" strokeLinecap="round"/>
      <path d="M 82 268 C 105 278 138 285 175 288" fill="none" stroke="#1a1a1a" strokeWidth="6" strokeLinecap="round"/>
      <path d="M 90 320 C 115 308 148 300 172 295" fill="none" stroke="#1a1a1a" strokeWidth="6" strokeLinecap="round"/>
      <path d="M 310 215 C 285 238 252 255 228 268" fill="none" stroke="#1a1a1a" strokeWidth="6" strokeLinecap="round"/>
      <path d="M 318 268 C 295 278 262 285 225 288" fill="none" stroke="#1a1a1a" strokeWidth="6" strokeLinecap="round"/>
      <path d="M 310 320 C 285 308 252 300 228 295" fill="none" stroke="#1a1a1a" strokeWidth="6" strokeLinecap="round"/>
      {/* Three eyes/spots */}
      <circle cx="180" cy="152" r="14" fill={f('eyes')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('eyes')} style={{cursor:'pointer'}}/>
      <circle cx="210" cy="142" r="14" fill={f('eyes')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('eyes')} style={{cursor:'pointer'}}/>
      <circle cx="238" cy="155" r="14" fill={f('eyes')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('eyes')} style={{cursor:'pointer'}}/>
      {/* Top tuft */}
      <path d="M 200 110 C 195 88 180 72 168 65 C 178 78 186 94 188 110" fill={f('husk')} stroke="#1a1a1a" strokeWidth="8" strokeLinecap="round"/>
      <path d="M 200 110 C 200 85 200 68 200 55 C 200 68 200 85 200 110" fill={f('husk')} stroke="#1a1a1a" strokeWidth="8" strokeLinecap="round"/>
      <path d="M 200 110 C 205 88 220 72 232 65 C 222 78 214 94 212 110" fill={f('husk')} stroke="#1a1a1a" strokeWidth="8" strokeLinecap="round"/>
    </svg>
  );
}

// ─── 11. DRAGON FRUIT ─────────────────────────────────────────────────────────
export function DragonFruit({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Body */}
      <ellipse cx="200" cy="258" rx="138" ry="175" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Scale flaps — left side */}
      {[[-1,135],[-1,185],[-1,235],[-1,285],[-1,335],[-1,385]].map(([side,y],i)=>(
        <path key={`l${i}`} d={`M 62 ${y} C 40 ${y-15} 35 ${y-35} 45 ${y-50} C 60 ${y-30} 68 ${y-15} 62 ${y}`} fill={f('scales')} stroke="#1a1a1a" strokeWidth="8" strokeLinejoin="round" onClick={() => onRegionClick?.('scales')} style={{cursor:'pointer'}}/>
      ))}
      {/* Scale flaps — right side */}
      {[[1,145],[1,195],[1,245],[1,295],[1,345],[1,390]].map(([side,y],i)=>(
        <path key={`r${i}`} d={`M 338 ${y} C 360 ${y-15} 365 ${y-35} 355 ${y-50} C 340 ${y-30} 332 ${y-15} 338 ${y}`} fill={f('scales')} stroke="#1a1a1a" strokeWidth="8" strokeLinejoin="round" onClick={() => onRegionClick?.('scales')} style={{cursor:'pointer'}}/>
      ))}
      {/* Top crown */}
      {[[-35,0],[0,0],[35,0]].map(([dx],i)=>(
        <path key={`t${i}`} d={`M ${200+dx} 85 C ${195+dx} 65 ${188+dx} 48 ${182+dx} 38 C ${192+dx} 50 ${200+dx} 65 ${200+dx} 85`} fill={f('scales')} stroke="#1a1a1a" strokeWidth="8" strokeLinejoin="round" onClick={() => onRegionClick?.('scales')} style={{cursor:'pointer'}}/>
      ))}
    </svg>
  );
}

// ─── 12. PAPAYA ───────────────────────────────────────────────────────────────
export function Papaya({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Leaves on top */}
      <path d="M 200 88 C 185 68 165 55 148 58 C 155 75 172 84 190 88" fill={f('leaf')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round" onClick={() => onRegionClick?.('leaf')} style={{cursor:'pointer'}}/>
      <path d="M 200 88 C 200 65 200 48 200 36 C 200 48 200 65 200 88" fill={f('leaf')} stroke="#1a1a1a" strokeWidth="9" strokeLinecap="round" onClick={() => onRegionClick?.('leaf')} style={{cursor:'pointer'}}/>
      <path d="M 200 88 C 215 68 235 55 252 58 C 245 75 228 84 210 88" fill={f('leaf')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round" onClick={() => onRegionClick?.('leaf')} style={{cursor:'pointer'}}/>
      {/* Body — elongated oval */}
      <path d="M 200 415 C 135 400 82 345 82 270 C 82 185 120 108 165 92 C 180 87 200 90 200 90 C 200 90 220 87 235 92 C 280 108 318 185 318 270 C 318 345 265 400 200 415 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Seed cavity (oval center) */}
      <ellipse cx="200" cy="265" rx="55" ry="85" fill={f('seeds')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('seeds')} style={{cursor:'pointer'}}/>
      {/* Seeds */}
      {[[-15,215],[12,222],[-8,248],[14,255],[-12,278],[10,285],[0,308]].map(([dx,cy],i)=>(
        <ellipse key={i} cx={200+dx} cy={cy} rx="8" ry="11" fill={f('seeds')} stroke="#1a1a1a" strokeWidth="5" onClick={() => onRegionClick?.('seeds')} style={{cursor:'pointer'}}/>
      ))}
    </svg>
  );
}

// ─── 13. POMEGRANATE ──────────────────────────────────────────────────────────
export function Pomegranate({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Crown */}
      <path d="M 165 112 L 155 78 L 172 100 L 183 62 L 193 95 L 200 58 L 207 95 L 217 62 L 228 100 L 245 78 L 235 112 Z" fill={f('crown')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round" onClick={() => onRegionClick?.('crown')} style={{cursor:'pointer'}}/>
      {/* Body */}
      <path d="M 200 415 C 122 395 62 328 62 248 C 62 168 112 108 165 108 L 235 108 C 288 108 338 168 338 248 C 338 328 278 395 200 415 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Interior arils hint */}
      <path d="M 140 195 C 168 188 200 185 232 188" fill="none" stroke="#1a1a1a" strokeWidth="6" strokeLinecap="round"/>
      <path d="M 120 258 C 155 248 200 245 245 248" fill="none" stroke="#1a1a1a" strokeWidth="6" strokeLinecap="round"/>
      <path d="M 130 325 C 162 315 200 312 240 315" fill="none" stroke="#1a1a1a" strokeWidth="6" strokeLinecap="round"/>
      {/* Decorative dots */}
      {[[155,222],[200,218],[245,222],[145,288],[200,282],[255,288],[170,352],[230,352]].map(([cx,cy],i)=>(
        <circle key={i} cx={cx} cy={cy} r="11" fill={f('arils')} stroke="#1a1a1a" strokeWidth="6" onClick={() => onRegionClick?.('arils')} style={{cursor:'pointer'}}/>
      ))}
    </svg>
  );
}

// ─── 14. FIG ──────────────────────────────────────────────────────────────────
export function Fig({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Body */}
      <path d="M 200 415 C 128 395 72 335 72 262 C 72 192 112 148 155 132 C 170 126 185 128 192 135 C 185 118 182 100 185 85 C 188 68 195 60 200 60 C 205 60 212 68 215 85 C 218 100 215 118 208 135 C 215 128 230 126 245 132 C 288 148 328 192 328 262 C 328 335 272 395 200 415 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Eye / ostiole at bottom */}
      <ellipse cx="200" cy="398" rx="22" ry="10" fill={f('eye')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('eye')} style={{cursor:'pointer'}}/>
      {/* Skin veins */}
      <path d="M 200 135 C 200 220 200 320 200 415" fill="none" stroke="#1a1a1a" strokeWidth="7" strokeLinecap="round"/>
      <path d="M 200 185 C 175 205 155 235 148 270" fill="none" stroke="#1a1a1a" strokeWidth="5" strokeLinecap="round"/>
      <path d="M 200 185 C 225 205 245 235 252 270" fill="none" stroke="#1a1a1a" strokeWidth="5" strokeLinecap="round"/>
    </svg>
  );
}

// ─── 15. AVOCADO ──────────────────────────────────────────────────────────────
export function Avocado({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Outer skin */}
      <path d="M 200 415 C 125 390 70 325 70 248 C 70 170 110 110 155 90 C 170 83 185 85 192 92 C 185 72 183 52 186 38 C 190 24 196 18 200 18 C 204 18 210 24 214 38 C 217 52 215 72 208 92 C 215 85 230 83 245 90 C 290 110 330 170 330 248 C 330 325 275 390 200 415 Z" fill={f('skin')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('skin')} style={{cursor:'pointer'}}/>
      {/* Flesh inner */}
      <path d="M 200 405 C 140 385 92 328 92 260 C 92 192 128 138 168 118 C 180 112 192 115 200 122 C 208 115 220 112 232 118 C 272 138 308 192 308 260 C 308 328 260 385 200 405 Z" fill={f('flesh')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round" onClick={() => onRegionClick?.('flesh')} style={{cursor:'pointer'}}/>
      {/* Pit / stone */}
      <ellipse cx="200" cy="288" rx="68" ry="80" fill={f('pit')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('pit')} style={{cursor:'pointer'}}/>
      {/* Pit highlight */}
      <ellipse cx="182" cy="268" rx="18" ry="24" fill="white" opacity="0.3"/>
    </svg>
  );
}

// ─── 16. STAR FRUIT ───────────────────────────────────────────────────────────
export function StarFruit({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  // Star fruit cross-section — 5-pointed star shape
  const starPath = Array.from({length:5},(_,i)=>{
    const outerR=170, innerR=75;
    const oa=(i*72-90)*Math.PI/180;
    const ia=((i*72+36)-90)*Math.PI/180;
    const ox=200+outerR*Math.cos(oa), oy=230+outerR*Math.sin(oa);
    const ix=200+innerR*Math.cos(ia), iy=230+innerR*Math.sin(ia);
    return `${i===0?'M':'L'} ${ox.toFixed(1)} ${oy.toFixed(1)} L ${ix.toFixed(1)} ${iy.toFixed(1)}`;
  }).join(' ')+'Z';
  return (
    <svg {...svgProps}>
      <path d={starPath} fill={f('body')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Rim ridge lines along each arm */}
      {Array.from({length:5},(_,i)=>{
        const angle=(i*72-90)*Math.PI/180;
        return <line key={i} x1="200" y1="230" x2={(200+170*Math.cos(angle)).toFixed(1)} y2={(230+170*Math.sin(angle)).toFixed(1)} stroke="#1a1a1a" strokeWidth="6" strokeLinecap="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>;
      })}
      {/* Center */}
      <circle cx="200" cy="230" r="30" fill={f('center')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('center')} style={{cursor:'pointer'}}/>
      {/* Seeds */}
      {[[185,228],[215,228],[200,215],[200,242]].map(([cx,cy],i)=>(
        <ellipse key={i} cx={cx} cy={cy} rx="6" ry="9" fill={f('center')} stroke="#1a1a1a" strokeWidth="4" onClick={() => onRegionClick?.('center')} style={{cursor:'pointer'}}/>
      ))}
    </svg>
  );
}

// ─── 17. PASSION FRUIT ────────────────────────────────────────────────────────
export function PassionFruit({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Body */}
      <circle cx="200" cy="235" r="185" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Inner pulp */}
      <circle cx="200" cy="235" r="155" fill={f('pulp')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('pulp')} style={{cursor:'pointer'}}/>
      {/* Arils in a circle */}
      {Array.from({length:10},(_,i)=>{
        const a=i*36*Math.PI/180;
        const cx=200+95*Math.cos(a), cy=235+95*Math.sin(a);
        return <ellipse key={i} cx={cx} cy={cy} rx="18" ry="22" transform={`rotate(${i*36} ${cx} ${cy})`} fill={f('arils')} stroke="#1a1a1a" strokeWidth="7" onClick={() => onRegionClick?.('arils')} style={{cursor:'pointer'}}/>;
      })}
      {/* Center */}
      <circle cx="200" cy="235" r="42" fill={f('arils')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('arils')} style={{cursor:'pointer'}}/>
      {/* Stem stub */}
      <path d="M 200 52 C 200 38 202 26 206 18" fill="none" stroke="#1a1a1a" strokeWidth="10" strokeLinecap="round"/>
    </svg>
  );
}

// ─── 18. LYCHEE ───────────────────────────────────────────────────────────────
export function Lychee({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Stem */}
      <path d="M 200 108 C 200 90 202 75 205 62" fill="none" stroke="#1a1a1a" strokeWidth="11" strokeLinecap="round"/>
      {/* Leaf */}
      <path d="M 203 70 C 220 58 244 56 255 66 C 246 80 222 84 207 77 Z" fill={f('leaf')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round" onClick={() => onRegionClick?.('leaf')} style={{cursor:'pointer'}}/>
      {/* Body */}
      <circle cx="200" cy="268" r="158" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Bumpy skin texture */}
      {[
        [200,130],[148,155],[252,155],[112,200],[288,200],
        [100,258],[300,258],[112,318],[288,318],
        [140,370],[260,370],[200,395],
      ].map(([cx,cy],i)=>(
        <circle key={i} cx={cx} cy={cy} r="16" fill={f('body')} stroke="#1a1a1a" strokeWidth="7" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      ))}
    </svg>
  );
}

// ─── 19. GUAVA ────────────────────────────────────────────────────────────────
export function Guava({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Body */}
      <ellipse cx="200" cy="258" rx="148" ry="168" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Crown / calyx */}
      <path d="M 172 102 L 162 72 L 178 94 L 188 62 L 196 88 L 200 58 L 204 88 L 212 62 L 222 94 L 238 72 L 228 102 Z" fill={f('crown')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round" onClick={() => onRegionClick?.('crown')} style={{cursor:'pointer'}}/>
      {/* Stem stub at bottom */}
      <path d="M 200 422 C 200 436 202 445 205 450" fill="none" stroke="#1a1a1a" strokeWidth="9" strokeLinecap="round"/>
      {/* Skin spots */}
      {[[155,185],[240,175],[128,268],[278,260],[148,352],[255,345]].map(([cx,cy],i)=>(
        <circle key={i} cx={cx} cy={cy} r="12" fill={f('body')} stroke="#1a1a1a" strokeWidth="6" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      ))}
      {/* Highlight */}
      <ellipse cx="155" cy="198" rx="30" ry="42" fill="white" opacity="0.25" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
    </svg>
  );
}

// ─── 20. MELON / CANTALOUPE ───────────────────────────────────────────────────
export function Melon({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Body */}
      <ellipse cx="200" cy="248" rx="168" ry="188" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Net pattern - horizontal arcs */}
      {[90,140,190,240,290,340,390].map((y,i)=>(
        <path key={`h${i}`} d={`M ${200-155*Math.sqrt(1-((y-248)/188)**2)|0} ${y} Q 200 ${y+18} ${200+155*Math.sqrt(1-((y-248)/188)**2)|0} ${y}`} fill="none" stroke="#1a1a1a" strokeWidth="5" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      ))}
      {/* Net pattern - vertical arcs */}
      {[80,130,175,225,270,320].map((x,i)=>(
        <path key={`v${i}`} d={`M ${x} ${248-188*Math.sqrt(1-((x-200)/168)**2)|0} Q ${x+12} 248 ${x} ${248+188*Math.sqrt(1-((x-200)/168)**2)|0}`} fill="none" stroke="#1a1a1a" strokeWidth="5" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      ))}
      {/* Stem */}
      <path d="M 200 62 C 200 45 202 32 206 22" fill="none" stroke="#1a1a1a" strokeWidth="10" strokeLinecap="round"/>
      {/* Leaf */}
      <path d="M 204 28 C 222 16 246 14 258 25 C 249 40 225 44 208 36 Z" fill={f('leaf')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round" onClick={() => onRegionClick?.('leaf')} style={{cursor:'pointer'}}/>
    </svg>
  );
}

// ─── 21. PLUM ─────────────────────────────────────────────────────────────────
export function Plum({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Body */}
      <path d="M 200 415 C 118 395 58 325 58 245 C 58 162 108 102 155 85 C 170 79 185 82 192 90 C 185 70 183 50 186 35 C 190 20 196 14 200 14 C 204 14 210 20 214 35 C 217 50 215 70 208 90 C 215 82 230 79 245 85 C 292 102 342 162 342 245 C 342 325 282 395 200 415 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Crease line */}
      <path d="M 200 90 C 200 200 200 310 200 415" fill="none" stroke="#1a1a1a" strokeWidth="7" strokeLinecap="round"/>
      {/* Bloom (waxy coating) */}
      <ellipse cx="148" cy="210" rx="42" ry="58" fill="white" opacity="0.22" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
    </svg>
  );
}

// ─── 22. APRICOT ──────────────────────────────────────────────────────────────
export function Apricot({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Body */}
      <path d="M 200 410 C 125 388 68 322 68 245 C 68 168 112 108 158 90 C 172 84 186 87 192 95 C 185 75 183 55 186 40 C 190 25 196 18 200 18 C 204 18 210 25 214 40 C 217 55 215 75 208 95 C 214 87 228 84 242 90 C 288 108 332 168 332 245 C 332 322 275 388 200 410 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Blush */}
      <ellipse cx="155" cy="238" rx="50" ry="68" fill={f('blush')} stroke="#1a1a1a" strokeWidth="7" onClick={() => onRegionClick?.('blush')} style={{cursor:'pointer'}}/>
      {/* Crease */}
      <path d="M 200 95 C 200 200 200 310 200 410" fill="none" stroke="#1a1a1a" strokeWidth="7" strokeLinecap="round"/>
    </svg>
  );
}

// ─── 23. BLACKBERRY ───────────────────────────────────────────────────────────
export function Blackberry({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  const drupelets = [
    [200,112],[168,132],[232,132],
    [145,162],[200,158],[255,162],
    [132,200],[182,192],[222,192],[272,200],
    [140,242],[188,235],[215,235],[262,242],
    [150,285],[198,278],[218,278],[255,285],
    [165,325],[202,318],[240,325],
    [180,362],[222,362],[200,398],
  ];
  return (
    <svg {...svgProps}>
      {/* Stem */}
      <path d="M 200 112 C 200 92 200 75 200 60" fill="none" stroke="#1a1a1a" strokeWidth="11" strokeLinecap="round"/>
      {/* Leaf */}
      <path d="M 200 72 C 182 58 158 55 145 65 C 152 80 174 85 193 78 Z" fill={f('leaf')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round" onClick={() => onRegionClick?.('leaf')} style={{cursor:'pointer'}}/>
      <path d="M 200 72 C 218 58 242 55 255 65 C 248 80 226 85 207 78 Z" fill={f('leaf')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round" onClick={() => onRegionClick?.('leaf')} style={{cursor:'pointer'}}/>
      {/* Drupelets */}
      {drupelets.map(([cx,cy],i)=>(
        <circle key={i} cx={cx} cy={cy} r="30" fill={f('body')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      ))}
      {drupelets.map(([cx,cy],i)=>(
        <circle key={`h${i}`} cx={cx-8} cy={cy-8} r="6" fill="white" opacity="0.35"/>
      ))}
    </svg>
  );
}

// ─── 24. CRANBERRY ────────────────────────────────────────────────────────────
export function Cranberry({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  const berries = [
    [200,95,50],[148,145,48],[255,148,48],
    [112,210,50],[200,202,52],[292,208,50],
    [118,278,48],[200,270,52],[285,275,48],
    [140,342,45],[200,338,48],[262,340,45],
    [172,398,42],[230,395,42],
  ];
  return (
    <svg {...svgProps}>
      {/* Branch lines */}
      <path d="M 200 95 C 200 130 200 175 200 215" fill="none" stroke="#1a1a1a" strokeWidth="9" strokeLinecap="round"/>
      <path d="M 200 135 C 168 122 145 130 135 148" fill="none" stroke="#1a1a1a" strokeWidth="7" strokeLinecap="round"/>
      <path d="M 200 135 C 232 122 255 130 265 148" fill="none" stroke="#1a1a1a" strokeWidth="7" strokeLinecap="round"/>
      <path d="M 200 195 C 165 182 140 195 130 215" fill="none" stroke="#1a1a1a" strokeWidth="7" strokeLinecap="round"/>
      <path d="M 200 195 C 235 182 260 195 270 215" fill="none" stroke="#1a1a1a" strokeWidth="7" strokeLinecap="round"/>
      {berries.map(([cx,cy,r],i)=>(
        <g key={i}>
          <circle cx={cx} cy={cy} r={r} fill={f('body')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
          <circle cx={cx-r*0.3} cy={cy-r*0.3} r={r*0.2} fill="white" opacity="0.35"/>
        </g>
      ))}
    </svg>
  );
}

// ─── 25. LIME ─────────────────────────────────────────────────────────────────
export function Lime({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Body (rounder than lemon) */}
      <circle cx="200" cy="240" r="178" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Nub */}
      <path d="M 192 64 C 188 50 186 38 188 28 C 196 34 204 34 212 28 C 214 38 212 50 208 64 Z" fill={f('nub')} stroke="#1a1a1a" strokeWidth="8" strokeLinejoin="round" onClick={() => onRegionClick?.('nub')} style={{cursor:'pointer'}}/>
      {/* Bottom nub */}
      <path d="M 192 416 C 188 430 186 442 188 452 C 196 446 204 446 212 452 C 214 442 212 430 208 416 Z" fill={f('nub')} stroke="#1a1a1a" strokeWidth="8" strokeLinejoin="round" onClick={() => onRegionClick?.('nub')} style={{cursor:'pointer'}}/>
      {/* Highlight */}
      <ellipse cx="148" cy="180" rx="34" ry="46" fill="white" opacity="0.28" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Skin dimple texture */}
      {[[155,145],[240,138],[118,235],[285,230],[138,325],[265,318],[185,395]].map(([cx,cy],i)=>(
        <circle key={i} cx={cx} cy={cy} r="8" fill="none" stroke="#1a1a1a" strokeWidth="4"/>
      ))}
    </svg>
  );
}

// ─── 26. GRAPEFRUIT ───────────────────────────────────────────────────────────
export function Grapefruit({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Outer skin */}
      <circle cx="200" cy="235" r="190" fill={f('skin')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('skin')} style={{cursor:'pointer'}}/>
      {/* Inner flesh ring */}
      <circle cx="200" cy="235" r="160" fill={f('flesh')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('flesh')} style={{cursor:'pointer'}}/>
      {/* Segment lines */}
      {Array.from({length:10},(_,i)=>{
        const angle=i*36*Math.PI/180;
        return <line key={i} x1="200" y1="235" x2={(200+160*Math.cos(angle)).toFixed(1)} y2={(235+160*Math.sin(angle)).toFixed(1)} stroke="#1a1a1a" strokeWidth="6" onClick={() => onRegionClick?.('flesh')} style={{cursor:'pointer'}}/>;
      })}
      {/* Center */}
      <circle cx="200" cy="235" r="38" fill={f('center')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('center')} style={{cursor:'pointer'}}/>
      {/* Stem stub */}
      <path d="M 200 47 C 200 35 202 24 205 16" fill="none" stroke="#1a1a1a" strokeWidth="10" strokeLinecap="round"/>
    </svg>
  );
}

// ─── 27. TANGERINE ────────────────────────────────────────────────────────────
export function Tangerine({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Body — slightly squat */}
      <ellipse cx="200" cy="270" rx="165" ry="152" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Segment ridges */}
      {[-72,-36,0,36,72,108].map((angle,i)=>{
        const rad=angle*Math.PI/180;
        return <path key={i} d={`M 200 270 C ${200+90*Math.cos(rad)} ${270+90*Math.sin(rad)} ${200+150*Math.cos(rad)} ${270+150*Math.sin(rad)}`} fill="none" stroke="#1a1a1a" strokeWidth="6" strokeLinecap="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>;
      })}
      {/* Stem */}
      <path d="M 200 120 C 200 105 202 90 206 80" fill="none" stroke="#1a1a1a" strokeWidth="11" strokeLinecap="round"/>
      {/* Leaf */}
      <path d="M 204 86 C 222 74 248 72 260 83 C 251 98 226 102 209 94 Z" fill={f('leaf')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round" onClick={() => onRegionClick?.('leaf')} style={{cursor:'pointer'}}/>
      {/* Indentation at top */}
      <circle cx="200" cy="122" r="12" fill={f('body')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
    </svg>
  );
}

// ─── 28. JACKFRUIT ────────────────────────────────────────────────────────────
export function Jackfruit({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Body — large elongated */}
      <ellipse cx="200" cy="268" rx="145" ry="195" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Bumpy surface — hex-ish pattern */}
      {[
        [200,95],[158,118],[242,118],[125,155],[200,152],[275,155],
        [105,202],[168,198],[235,198],[300,202],[108,255],[175,250],
        [228,250],[298,255],[112,308],[175,305],[228,305],[292,308],
        [128,358],[200,355],[275,358],[148,405],[255,405],
      ].map(([cx,cy],i)=>(
        <path key={i} d={`M ${cx} ${cy-14} L ${cx+12} ${cy-7} L ${cx+12} ${cy+7} L ${cx} ${cy+14} L ${cx-12} ${cy+7} L ${cx-12} ${cy-7} Z`} fill={f('body')} stroke="#1a1a1a" strokeWidth="5" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      ))}
      {/* Stem */}
      <path d="M 200 75 C 200 58 202 44 205 34" fill="none" stroke="#1a1a1a" strokeWidth="11" strokeLinecap="round"/>
      {/* Leaf */}
      <path d="M 203 40 C 220 28 244 26 256 37 C 247 52 223 56 207 48 Z" fill={f('leaf')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round" onClick={() => onRegionClick?.('leaf')} style={{cursor:'pointer'}}/>
    </svg>
  );
}

// ─── 29. DURIAN ───────────────────────────────────────────────────────────────
export function Durian({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Stem */}
      <path d="M 200 88 C 200 70 202 55 205 42" fill="none" stroke="#1a1a1a" strokeWidth="11" strokeLinecap="round"/>
      {/* Body — large oval */}
      <ellipse cx="200" cy="278" rx="158" ry="175" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Spiky sections — draw spike triangles all over */}
      {[
        [200,108],[158,128],[245,132],[115,168],[290,172],[98,222],[308,228],
        [92,278],[312,280],[100,335],[308,338],[120,385],[282,388],[200,415],
        [162,408],[240,408],[148,158],[255,162],
      ].map(([cx,cy],i)=>(
        <path key={i} d={`M ${cx-14} ${cy+6} L ${cx} ${cy-22} L ${cx+14} ${cy+6} Z`} fill={f('spikes')} stroke="#1a1a1a" strokeWidth="7" strokeLinejoin="round" onClick={() => onRegionClick?.('spikes')} style={{cursor:'pointer'}}/>
      ))}
      {/* Segment lines */}
      <path d="M 200 108 C 200 225 200 345 200 440" fill="none" stroke="#1a1a1a" strokeWidth="7" strokeLinecap="round"/>
      <path d="M 112 178 C 145 238 152 328 138 400" fill="none" stroke="#1a1a1a" strokeWidth="6" strokeLinecap="round"/>
      <path d="M 288 178 C 255 238 248 328 262 400" fill="none" stroke="#1a1a1a" strokeWidth="6" strokeLinecap="round"/>
    </svg>
  );
}

// ─── 30. PERSIMMON ────────────────────────────────────────────────────────────
export function Persimmon({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Calyx (4 big sepals) */}
      <path d="M 200 118 C 178 105 155 100 142 108 C 148 125 165 132 182 125 Z" fill={f('calyx')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round" onClick={() => onRegionClick?.('calyx')} style={{cursor:'pointer'}}/>
      <path d="M 200 118 C 222 105 245 100 258 108 C 252 125 235 132 218 125 Z" fill={f('calyx')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round" onClick={() => onRegionClick?.('calyx')} style={{cursor:'pointer'}}/>
      <path d="M 200 118 C 188 98 182 75 188 60 C 200 68 210 80 208 98 Z" fill={f('calyx')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round" onClick={() => onRegionClick?.('calyx')} style={{cursor:'pointer'}}/>
      <path d="M 200 118 C 212 98 218 75 212 60 C 200 68 190 80 192 98 Z" fill={f('calyx')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round" onClick={() => onRegionClick?.('calyx')} style={{cursor:'pointer'}}/>
      {/* Stem */}
      <path d="M 200 60 C 200 46 202 34 205 25" fill="none" stroke="#1a1a1a" strokeWidth="10" strokeLinecap="round"/>
      {/* Body — wide rounded square */}
      <rect x="62" y="115" width="276" height="288" rx="88"
        fill={f('body')} stroke="#1a1a1a" strokeWidth="11"
        onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Vertical lines */}
      <path d="M 200 118 C 200 230 200 340 200 402" fill="none" stroke="#1a1a1a" strokeWidth="7" strokeLinecap="round"/>
      <path d="M 140 125 C 135 230 135 335 140 400" fill="none" stroke="#1a1a1a" strokeWidth="6" strokeLinecap="round"/>
      <path d="M 260 125 C 265 230 265 335 260 400" fill="none" stroke="#1a1a1a" strokeWidth="6" strokeLinecap="round"/>
    </svg>
  );
}
