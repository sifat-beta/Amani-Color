// SVG Coloring Drawings - FLOWERS 2 (30 new flowers)
// viewBox 0 0 400 450, strokeWidth 10+ for toddler-friendly thick lines

const svgProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 400 450',
  style: { width: '100%', height: '100%', userSelect: 'none' },
};

// ─── 1. HIBISCUS ──────────────────────────────────────────────────────────────
export function Hibiscus({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  const petals = [0, 72, 144, 216, 288];
  return (
    <svg {...svgProps}>
      {/* Stem */}
      <path d="M 200 330 C 198 365 196 392 195 418" fill="none" stroke="#1a1a1a" strokeWidth="12" strokeLinecap="round" onClick={() => onRegionClick?.('stem')} style={{cursor:'pointer'}}/>
      {/* Leaf */}
      <path d="M 197 375 C 175 362 150 358 136 368 C 143 382 165 387 185 380 Z" fill={f('leaf')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('leaf')} style={{cursor:'pointer'}}/>
      {/* 5 wide petals */}
      {petals.map((angle, i) => {
        const rad = (angle - 90) * Math.PI / 180;
        const cx = 200 + 108 * Math.cos(rad);
        const cy = 215 + 108 * Math.sin(rad);
        return (
          <ellipse key={i} cx={cx} cy={cy} rx="52" ry="78"
            transform={`rotate(${angle} ${cx} ${cy})`}
            fill={f('petals')} stroke="#1a1a1a" strokeWidth="10"
            onClick={() => onRegionClick?.('petals')} style={{cursor:'pointer'}}/>
        );
      })}
      {/* Stamen tube */}
      <rect x="188" y="155" width="24" height="85" rx="12"
        fill={f('stamen')} stroke="#1a1a1a" strokeWidth="9"
        onClick={() => onRegionClick?.('stamen')} style={{cursor:'pointer'}}/>
      {/* Stamen tip dots */}
      {[[-12,0],[0,-12],[12,0],[0,8]].map(([dx,dy],i)=>(
        <circle key={i} cx={200+dx} cy={158+dy} r="8"
          fill={f('stamen')} stroke="#1a1a1a" strokeWidth="6"
          onClick={() => onRegionClick?.('stamen')} style={{cursor:'pointer'}}/>
      ))}
    </svg>
  );
}

// ─── 2. LAVENDER ──────────────────────────────────────────────────────────────
export function Lavender({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Stem */}
      <path d="M 200 345 C 200 378 200 405 200 430" fill="none" stroke="#1a1a1a" strokeWidth="12" strokeLinecap="round" onClick={() => onRegionClick?.('stem')} style={{cursor:'pointer'}}/>
      {/* Two side stems */}
      <path d="M 200 360 C 182 350 165 345 155 348" fill="none" stroke="#1a1a1a" strokeWidth="9" strokeLinecap="round"/>
      <path d="M 200 360 C 218 350 235 345 245 348" fill="none" stroke="#1a1a1a" strokeWidth="9" strokeLinecap="round"/>
      {/* Leaves */}
      <path d="M 200 370 C 180 358 155 355 142 365 C 149 380 172 384 192 377 Z" fill={f('leaf')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('leaf')} style={{cursor:'pointer'}}/>
      <path d="M 200 385 C 220 373 245 370 258 380 C 251 395 228 399 208 392 Z" fill={f('leaf')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('leaf')} style={{cursor:'pointer'}}/>
      {/* Spike — stacked floret ovals */}
      {[335,308,282,258,235,212,190,170,152,136,122,110].map((y, i) => (
        <ellipse key={i} cx={200 + (i%2===0 ? -10 : 10)} cy={y} rx="22" ry="15"
          fill={f('florets')} stroke="#1a1a1a" strokeWidth="8"
          onClick={() => onRegionClick?.('florets')} style={{cursor:'pointer'}}/>
      ))}
    </svg>
  );
}

// ─── 3. ORCHID ────────────────────────────────────────────────────────────────
export function Orchid({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Stem */}
      <path d="M 200 318 C 200 355 200 388 200 418" fill="none" stroke="#1a1a1a" strokeWidth="12" strokeLinecap="round" onClick={() => onRegionClick?.('stem')} style={{cursor:'pointer'}}/>
      {/* Leaves */}
      <path d="M 200 380 C 175 365 148 360 132 372 C 140 388 165 393 188 385 Z" fill={f('leaf')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('leaf')} style={{cursor:'pointer'}}/>
      <path d="M 200 395 C 225 380 252 375 268 387 C 260 403 235 408 212 400 Z" fill={f('leaf')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('leaf')} style={{cursor:'pointer'}}/>
      {/* Two side petals */}
      <ellipse cx="130" cy="205" rx="65" ry="38" transform="rotate(-25 130 205)"
        fill={f('petals')} stroke="#1a1a1a" strokeWidth="10"
        onClick={() => onRegionClick?.('petals')} style={{cursor:'pointer'}}/>
      <ellipse cx="270" cy="205" rx="65" ry="38" transform="rotate(25 270 205)"
        fill={f('petals')} stroke="#1a1a1a" strokeWidth="10"
        onClick={() => onRegionClick?.('petals')} style={{cursor:'pointer'}}/>
      {/* Top two petals */}
      <ellipse cx="160" cy="138" rx="42" ry="68" transform="rotate(-35 160 138)"
        fill={f('petals')} stroke="#1a1a1a" strokeWidth="10"
        onClick={() => onRegionClick?.('petals')} style={{cursor:'pointer'}}/>
      <ellipse cx="240" cy="138" rx="42" ry="68" transform="rotate(35 240 138)"
        fill={f('petals')} stroke="#1a1a1a" strokeWidth="10"
        onClick={() => onRegionClick?.('petals')} style={{cursor:'pointer'}}/>
      {/* Lip petal (bottom) */}
      <path d="M 168 232 C 162 255 165 278 180 292 C 188 300 200 305 200 305 C 200 305 212 300 220 292 C 235 278 238 255 232 232 C 222 220 210 215 200 215 C 190 215 178 220 168 232 Z"
        fill={f('lip')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round"
        onClick={() => onRegionClick?.('lip')} style={{cursor:'pointer'}}/>
      {/* Center column */}
      <ellipse cx="200" cy="212" rx="22" ry="30"
        fill={f('lip')} stroke="#1a1a1a" strokeWidth="9"
        onClick={() => onRegionClick?.('lip')} style={{cursor:'pointer'}}/>
    </svg>
  );
}

// ─── 4. DAFFODIL ──────────────────────────────────────────────────────────────
export function Daffodil({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  const angles = [0, 60, 120, 180, 240, 300];
  return (
    <svg {...svgProps}>
      {/* Stem */}
      <path d="M 200 318 C 200 355 200 390 200 425" fill="none" stroke="#1a1a1a" strokeWidth="12" strokeLinecap="round" onClick={() => onRegionClick?.('stem')} style={{cursor:'pointer'}}/>
      {/* Leaf */}
      <path d="M 200 390 C 178 372 152 368 136 378 C 144 394 170 400 192 392 Z" fill={f('leaf')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('leaf')} style={{cursor:'pointer'}}/>
      {/* 6 petals */}
      {angles.map((angle, i) => {
        const rad = (angle - 90) * Math.PI / 180;
        const cx = 200 + 100 * Math.cos(rad);
        const cy = 218 + 100 * Math.sin(rad);
        return (
          <ellipse key={i} cx={cx} cy={cy} rx="28" ry="65"
            transform={`rotate(${angle} ${cx} ${cy})`}
            fill={f('petals')} stroke="#1a1a1a" strokeWidth="10"
            onClick={() => onRegionClick?.('petals')} style={{cursor:'pointer'}}/>
        );
      })}
      {/* Trumpet */}
      <path d="M 165 218 C 165 185 178 165 200 162 C 222 165 235 185 235 218 C 235 240 222 258 200 262 C 178 258 165 240 165 218 Z"
        fill={f('trumpet')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round"
        onClick={() => onRegionClick?.('trumpet')} style={{cursor:'pointer'}}/>
      {/* Trumpet rim */}
      <ellipse cx="200" cy="260" rx="36" ry="14"
        fill={f('trumpet')} stroke="#1a1a1a" strokeWidth="9"
        onClick={() => onRegionClick?.('trumpet')} style={{cursor:'pointer'}}/>
    </svg>
  );
}

// ─── 5. POPPY ─────────────────────────────────────────────────────────────────
export function Poppy({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Stem — curved */}
      <path d="M 200 298 C 210 335 218 375 220 418" fill="none" stroke="#1a1a1a" strokeWidth="12" strokeLinecap="round" onClick={() => onRegionClick?.('stem')} style={{cursor:'pointer'}}/>
      {/* Leaf on stem */}
      <path d="M 212 355 C 228 340 252 338 262 350 C 254 365 230 368 215 360 Z" fill={f('leaf')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('leaf')} style={{cursor:'pointer'}}/>
      {/* 4 big round petals */}
      <circle cx="148" cy="185" r="88" fill={f('petals')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('petals')} style={{cursor:'pointer'}}/>
      <circle cx="252" cy="185" r="88" fill={f('petals')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('petals')} style={{cursor:'pointer'}}/>
      <circle cx="148" cy="268" r="75" fill={f('petals')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('petals')} style={{cursor:'pointer'}}/>
      <circle cx="252" cy="268" r="75" fill={f('petals')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('petals')} style={{cursor:'pointer'}}/>
      {/* Center */}
      <circle cx="200" cy="225" r="52" fill={f('center')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('center')} style={{cursor:'pointer'}}/>
      {/* Stigma rays */}
      {Array.from({length:8},(_,i)=>{
        const a=i*45*Math.PI/180;
        return <line key={i} x1="200" y1="225" x2={(200+45*Math.cos(a)).toFixed(1)} y2={(225+45*Math.sin(a)).toFixed(1)} stroke="#1a1a1a" strokeWidth="5"/>;
      })}
    </svg>
  );
}

// ─── 6. LILY ──────────────────────────────────────────────────────────────────
export function Lily({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  const angles = [0, 60, 120, 180, 240, 300];
  return (
    <svg {...svgProps}>
      {/* Stem */}
      <path d="M 200 310 C 200 350 200 388 200 425" fill="none" stroke="#1a1a1a" strokeWidth="12" strokeLinecap="round" onClick={() => onRegionClick?.('stem')} style={{cursor:'pointer'}}/>
      {/* Leaves */}
      <path d="M 200 375 C 175 358 148 354 132 366 C 140 382 165 387 190 379 Z" fill={f('leaf')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('leaf')} style={{cursor:'pointer'}}/>
      <path d="M 200 348 C 225 332 252 328 266 340 C 258 356 233 361 208 353 Z" fill={f('leaf')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('leaf')} style={{cursor:'pointer'}}/>
      {/* 6 recurved petals */}
      {angles.map((angle, i) => {
        const rad = (angle - 90) * Math.PI / 180;
        const cx = 200 + 110 * Math.cos(rad);
        const cy = 210 + 110 * Math.sin(rad);
        return (
          <path key={i}
            d={`M 200 210 C ${200+50*Math.cos(rad)} ${210+50*Math.sin(rad)} ${cx-12*Math.sin(rad)} ${cy+12*Math.cos(rad)} ${cx} ${cy} C ${cx+10*Math.sin(rad)} ${cy-10*Math.cos(rad)} ${200+80*Math.cos(rad)} ${210+80*Math.sin(rad)} 200 210`}
            fill={f('petals')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round"
            onClick={() => onRegionClick?.('petals')} style={{cursor:'pointer'}}/>
        );
      })}
      {/* Stamens */}
      {[-20,-8,8,20].map((dx,i)=>(
        <line key={i} x1={200+dx} y1="210" x2={200+dx*1.5} y2="172" stroke="#1a1a1a" strokeWidth="7" strokeLinecap="round" onClick={() => onRegionClick?.('stamen')} style={{cursor:'pointer'}}/>
      ))}
      {[-20,-8,8,20].map((dx,i)=>(
        <circle key={`d${i}`} cx={200+dx*1.5} cy="168" r="10" fill={f('stamen')} stroke="#1a1a1a" strokeWidth="7" onClick={() => onRegionClick?.('stamen')} style={{cursor:'pointer'}}/>
      ))}
      {/* Center */}
      <circle cx="200" cy="210" r="30" fill={f('center')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('center')} style={{cursor:'pointer'}}/>
    </svg>
  );
}

// ─── 7. PEONY ─────────────────────────────────────────────────────────────────
export function Peony({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Stem */}
      <path d="M 200 335 C 200 368 200 398 200 428" fill="none" stroke="#1a1a1a" strokeWidth="12" strokeLinecap="round" onClick={() => onRegionClick?.('stem')} style={{cursor:'pointer'}}/>
      {/* Leaf */}
      <path d="M 200 388 C 175 372 148 368 132 380 C 140 396 165 401 190 393 Z" fill={f('leaf')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('leaf')} style={{cursor:'pointer'}}/>
      {/* Outer petals ring */}
      {[0,45,90,135,180,225,270,315].map((angle,i)=>{
        const rad=(angle-90)*Math.PI/180;
        const cx=200+118*Math.cos(rad), cy=210+118*Math.sin(rad);
        return <ellipse key={i} cx={cx} cy={cy} rx="42" ry="62" transform={`rotate(${angle} ${cx} ${cy})`} fill={f('outerPetals')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('outerPetals')} style={{cursor:'pointer'}}/>;
      })}
      {/* Mid petals ring */}
      {[22,67,112,157,202,247,292,337].map((angle,i)=>{
        const rad=(angle-90)*Math.PI/180;
        const cx=200+75*Math.cos(rad), cy=210+75*Math.sin(rad);
        return <ellipse key={i} cx={cx} cy={cy} rx="32" ry="50" transform={`rotate(${angle} ${cx} ${cy})`} fill={f('innerPetals')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('innerPetals')} style={{cursor:'pointer'}}/>;
      })}
      {/* Center */}
      <circle cx="200" cy="210" r="45" fill={f('center')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('center')} style={{cursor:'pointer'}}/>
    </svg>
  );
}

// ─── 8. CHERRY BLOSSOM ────────────────────────────────────────────────────────
export function CherryBlossom({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  const angles = [0, 72, 144, 216, 288];
  return (
    <svg {...svgProps}>
      {/* Branch */}
      <path d="M 200 295 C 200 330 198 368 196 418" fill="none" stroke="#1a1a1a" strokeWidth="14" strokeLinecap="round" onClick={() => onRegionClick?.('branch')} style={{cursor:'pointer'}}/>
      <path d="M 200 320 C 178 305 155 298 138 305" fill="none" stroke="#1a1a1a" strokeWidth="12" strokeLinecap="round" onClick={() => onRegionClick?.('branch')} style={{cursor:'pointer'}}/>
      <path d="M 200 340 C 225 325 248 318 265 325" fill="none" stroke="#1a1a1a" strokeWidth="12" strokeLinecap="round" onClick={() => onRegionClick?.('branch')} style={{cursor:'pointer'}}/>
      {/* 5 notched petals */}
      {angles.map((angle, i) => {
        const rad = (angle - 90) * Math.PI / 180;
        const cx = 200 + 95 * Math.cos(rad);
        const cy = 195 + 95 * Math.sin(rad);
        return (
          <path key={i}
            d={`M 200 195 C ${200+40*Math.cos(rad-0.3)} ${195+40*Math.sin(rad-0.3)} ${cx-10} ${cy-10} ${cx} ${cy} C ${cx+10} ${cy-10} ${200+40*Math.cos(rad+0.3)} ${195+40*Math.sin(rad+0.3)} 200 195`}
            fill={f('petals')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round"
            onClick={() => onRegionClick?.('petals')} style={{cursor:'pointer'}}/>
        );
      })}
      {/* Center */}
      <circle cx="200" cy="195" r="32" fill={f('center')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('center')} style={{cursor:'pointer'}}/>
      {/* Stamens */}
      {angles.map((angle,i)=>{
        const rad=(angle-90)*Math.PI/180;
        return <line key={i} x1="200" y1="195" x2={(200+28*Math.cos(rad)).toFixed(1)} y2={(195+28*Math.sin(rad)).toFixed(1)} stroke="#1a1a1a" strokeWidth="5"/>;
      })}
    </svg>
  );
}

// ─── 9. MARIGOLD ──────────────────────────────────────────────────────────────
export function Marigold({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Stem */}
      <path d="M 200 322 C 200 358 200 392 200 428" fill="none" stroke="#1a1a1a" strokeWidth="12" strokeLinecap="round" onClick={() => onRegionClick?.('stem')} style={{cursor:'pointer'}}/>
      {/* Leaf */}
      <path d="M 200 378 C 178 362 152 358 136 370 C 144 386 168 392 190 384 Z" fill={f('leaf')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('leaf')} style={{cursor:'pointer'}}/>
      {/* Dense outer petals */}
      {Array.from({length:16},(_,i)=>{
        const rad=(i*22.5-90)*Math.PI/180;
        const cx=200+105*Math.cos(rad), cy=210+105*Math.sin(rad);
        return <ellipse key={i} cx={cx} cy={cy} rx="18" ry="48" transform={`rotate(${i*22.5} ${cx} ${cy})`} fill={f('outerPetals')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('outerPetals')} style={{cursor:'pointer'}}/>;
      })}
      {/* Inner petals */}
      {Array.from({length:12},(_,i)=>{
        const rad=(i*30-90)*Math.PI/180;
        const cx=200+62*Math.cos(rad), cy=210+62*Math.sin(rad);
        return <ellipse key={i} cx={cx} cy={cy} rx="14" ry="38" transform={`rotate(${i*30} ${cx} ${cy})`} fill={f('innerPetals')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('innerPetals')} style={{cursor:'pointer'}}/>;
      })}
      {/* Center */}
      <circle cx="200" cy="210" r="38" fill={f('center')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('center')} style={{cursor:'pointer'}}/>
    </svg>
  );
}

// ─── 10. BLUEBELL ─────────────────────────────────────────────────────────────
export function Bluebell({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Main stem */}
      <path d="M 200 350 C 200 380 200 408 200 435" fill="none" stroke="#1a1a1a" strokeWidth="12" strokeLinecap="round" onClick={() => onRegionClick?.('stem')} style={{cursor:'pointer'}}/>
      {/* Side drooping stems */}
      <path d="M 200 295 C 185 305 168 318 160 338" fill="none" stroke="#1a1a1a" strokeWidth="10" strokeLinecap="round"/>
      <path d="M 200 270 C 228 285 248 305 252 330" fill="none" stroke="#1a1a1a" strokeWidth="10" strokeLinecap="round"/>
      <path d="M 200 315 C 190 322 182 332 178 348" fill="none" stroke="#1a1a1a" strokeWidth="9" strokeLinecap="round"/>
      {/* Leaves */}
      <path d="M 200 380 C 178 365 152 362 138 374 C 146 390 170 395 192 387 Z" fill={f('leaf')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('leaf')} style={{cursor:'pointer'}}/>
      {/* Bell flowers (drooping) */}
      {[
        [200,105,90],[160,158,80],[252,148,75],[178,205,72],
      ].map(([cx,cy,scale],i)=>(
        <path key={i}
          d={`M ${cx-scale*0.42} ${cy} C ${cx-scale*0.42} ${cy+scale*0.5} ${cx-scale*0.58} ${cy+scale*0.85} ${cx} ${cy+scale} C ${cx+scale*0.58} ${cy+scale*0.85} ${cx+scale*0.42} ${cy+scale*0.5} ${cx+scale*0.42} ${cy} Z`}
          fill={f('bells')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round"
          onClick={() => onRegionClick?.('bells')} style={{cursor:'pointer'}}/>
      ))}
      {/* Bell rims */}
      {[[200,105,90],[160,158,80],[252,148,75],[178,205,72]].map(([cx,cy,scale],i)=>(
        <ellipse key={i} cx={cx} cy={cy+scale} rx={scale*0.42} ry={scale*0.16} fill={f('bells')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('bells')} style={{cursor:'pointer'}}/>
      ))}
    </svg>
  );
}

// ─── 11. PANSY ────────────────────────────────────────────────────────────────
export function Pansy({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Stem */}
      <path d="M 200 318 C 200 355 200 390 200 425" fill="none" stroke="#1a1a1a" strokeWidth="12" strokeLinecap="round" onClick={() => onRegionClick?.('stem')} style={{cursor:'pointer'}}/>
      {/* Leaf */}
      <path d="M 200 378 C 178 362 152 358 136 370 C 144 386 168 392 190 384 Z" fill={f('leaf')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('leaf')} style={{cursor:'pointer'}}/>
      {/* 2 top petals */}
      <ellipse cx="162" cy="148" rx="52" ry="72" transform="rotate(20 162 148)" fill={f('topPetals')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('topPetals')} style={{cursor:'pointer'}}/>
      <ellipse cx="238" cy="148" rx="52" ry="72" transform="rotate(-20 238 148)" fill={f('topPetals')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('topPetals')} style={{cursor:'pointer'}}/>
      {/* 2 side petals */}
      <ellipse cx="118" cy="230" rx="70" ry="48" fill={f('sidePetals')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('sidePetals')} style={{cursor:'pointer'}}/>
      <ellipse cx="282" cy="230" rx="70" ry="48" fill={f('sidePetals')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('sidePetals')} style={{cursor:'pointer'}}/>
      {/* 1 bottom petal */}
      <ellipse cx="200" cy="290" rx="60" ry="55" fill={f('bottomPetal')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('bottomPetal')} style={{cursor:'pointer'}}/>
      {/* Face lines */}
      <path d="M 200 218 C 192 235 185 248 185 258" fill="none" stroke="#1a1a1a" strokeWidth="6" strokeLinecap="round"/>
      <path d="M 200 218 C 208 235 215 248 215 258" fill="none" stroke="#1a1a1a" strokeWidth="6" strokeLinecap="round"/>
      {/* Center */}
      <circle cx="200" cy="215" r="28" fill={f('center')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('center')} style={{cursor:'pointer'}}/>
    </svg>
  );
}

// ─── 12. WATER LILY ───────────────────────────────────────────────────────────
export function WaterLily({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Lily pad */}
      <path d="M 200 355 C 130 355 72 328 72 298 C 72 268 130 252 200 252 C 270 252 328 268 328 298 C 328 328 270 355 200 355 Z" fill={f('pad')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('pad')} style={{cursor:'pointer'}}/>
      {/* Pad notch */}
      <path d="M 200 252 L 200 295" fill="none" stroke="#1a1a1a" strokeWidth="8" strokeLinecap="round"/>
      {/* Pad veins */}
      {[-60,-30,0,30,60].map((angle,i)=>{
        const rad=angle*Math.PI/180;
        return <path key={i} d={`M 200 298 C ${200+80*Math.cos(rad)} ${298+60*Math.sin(rad)} ${200+128*Math.cos(rad)} ${298+50*Math.sin(rad)}`} fill="none" stroke="#1a1a1a" strokeWidth="5" strokeLinecap="round"/>;
      })}
      {/* Outer petals */}
      {[0,45,90,135,180,225,270,315].map((angle,i)=>{
        const rad=(angle-90)*Math.PI/180;
        const cx=200+90*Math.cos(rad), cy=228+60*Math.sin(rad);
        return <ellipse key={i} cx={cx} cy={cy} rx="24" ry="58" transform={`rotate(${angle} ${cx} ${cy})`} fill={f('outerPetals')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('outerPetals')} style={{cursor:'pointer'}}/>;
      })}
      {/* Inner petals */}
      {[22,67,112,157,202,247].map((angle,i)=>{
        const rad=(angle-90)*Math.PI/180;
        const cx=200+52*Math.cos(rad), cy=225+38*Math.sin(rad);
        return <ellipse key={i} cx={cx} cy={cy} rx="18" ry="42" transform={`rotate(${angle} ${cx} ${cy})`} fill={f('innerPetals')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('innerPetals')} style={{cursor:'pointer'}}/>;
      })}
      {/* Center */}
      <circle cx="200" cy="222" r="38" fill={f('center')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('center')} style={{cursor:'pointer'}}/>
    </svg>
  );
}

// ─── 13. CARNATION ────────────────────────────────────────────────────────────
export function Carnation({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Stem */}
      <path d="M 200 318 C 200 355 200 390 200 425" fill="none" stroke="#1a1a1a" strokeWidth="12" strokeLinecap="round" onClick={() => onRegionClick?.('stem')} style={{cursor:'pointer'}}/>
      {/* Calyx */}
      <path d="M 178 318 C 178 308 182 300 188 295 L 200 318 L 212 295 C 218 300 222 308 222 318 Z" fill={f('calyx')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round" onClick={() => onRegionClick?.('calyx')} style={{cursor:'pointer'}}/>
      {/* Leaf */}
      <path d="M 200 375 C 178 360 152 356 136 368 C 144 384 168 390 190 382 Z" fill={f('leaf')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('leaf')} style={{cursor:'pointer'}}/>
      {/* Frilly petal rings — 3 layers of scalloped ellipses */}
      {[0,30,60,90,120,150,180,210,240,270,300,330].map((angle,i)=>{
        const rad=(angle-90)*Math.PI/180;
        const cx=200+88*Math.cos(rad), cy=205+88*Math.sin(rad);
        return <ellipse key={i} cx={cx} cy={cy} rx="26" ry="50" transform={`rotate(${angle} ${cx} ${cy})`} fill={f('petals')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('petals')} style={{cursor:'pointer'}}/>;
      })}
      {[15,55,95,135,175,215,255,295].map((angle,i)=>{
        const rad=(angle-90)*Math.PI/180;
        const cx=200+52*Math.cos(rad), cy=205+52*Math.sin(rad);
        return <ellipse key={i} cx={cx} cy={cy} rx="20" ry="38" transform={`rotate(${angle} ${cx} ${cy})`} fill={f('innerPetals')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('innerPetals')} style={{cursor:'pointer'}}/>;
      })}
      <circle cx="200" cy="205" r="32" fill={f('innerPetals')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('innerPetals')} style={{cursor:'pointer'}}/>
    </svg>
  );
}

// ─── 14. IRIS ─────────────────────────────────────────────────────────────────
export function Iris({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Stem */}
      <path d="M 200 308 C 200 345 200 385 200 425" fill="none" stroke="#1a1a1a" strokeWidth="12" strokeLinecap="round" onClick={() => onRegionClick?.('stem')} style={{cursor:'pointer'}}/>
      {/* Long leaf */}
      <path d="M 200 385 C 175 362 148 355 132 368 C 142 388 170 396 195 388 Z" fill={f('leaf')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('leaf')} style={{cursor:'pointer'}}/>
      {/* 3 falls (drooping petals) */}
      <path d="M 200 205 C 178 218 155 242 148 268 C 145 288 152 305 165 310 C 180 315 195 302 200 285 Z" fill={f('falls')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('falls')} style={{cursor:'pointer'}}/>
      <path d="M 200 205 C 222 218 245 242 252 268 C 255 288 248 305 235 310 C 220 315 205 302 200 285 Z" fill={f('falls')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('falls')} style={{cursor:'pointer'}}/>
      <path d="M 200 205 C 200 225 200 255 200 285" fill="none" stroke="#1a1a1a" strokeWidth="8"/>
      {/* 3 standards (upright petals) */}
      <path d="M 200 205 C 178 188 160 162 162 138 C 164 118 178 108 190 112 C 198 115 200 128 200 145 Z" fill={f('standards')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('standards')} style={{cursor:'pointer'}}/>
      <path d="M 200 205 C 222 188 240 162 238 138 C 236 118 222 108 210 112 C 202 115 200 128 200 145 Z" fill={f('standards')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('standards')} style={{cursor:'pointer'}}/>
      <path d="M 200 205 C 200 185 200 162 200 145" fill="none" stroke="#1a1a1a" strokeWidth="8"/>
      {/* Center */}
      <circle cx="200" cy="205" r="28" fill={f('center')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('center')} style={{cursor:'pointer'}}/>
    </svg>
  );
}

// ─── 15. CHRYSANTHEMUM ────────────────────────────────────────────────────────
export function Chrysanthemum({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Stem */}
      <path d="M 200 325 C 200 360 200 395 200 430" fill="none" stroke="#1a1a1a" strokeWidth="12" strokeLinecap="round" onClick={() => onRegionClick?.('stem')} style={{cursor:'pointer'}}/>
      {/* Leaf */}
      <path d="M 200 382 C 175 367 148 363 132 375 C 140 391 165 397 190 389 Z" fill={f('leaf')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('leaf')} style={{cursor:'pointer'}}/>
      {/* Many thin petals - outer */}
      {Array.from({length:20},(_,i)=>{
        const rad=(i*18-90)*Math.PI/180;
        const cx=200+108*Math.cos(rad), cy=212+108*Math.sin(rad);
        return <ellipse key={i} cx={cx} cy={cy} rx="11" ry="55" transform={`rotate(${i*18} ${cx} ${cy})`} fill={f('outerPetals')} stroke="#1a1a1a" strokeWidth="7" onClick={() => onRegionClick?.('outerPetals')} style={{cursor:'pointer'}}/>;
      })}
      {/* Mid */}
      {Array.from({length:16},(_,i)=>{
        const rad=(i*22.5-90)*Math.PI/180;
        const cx=200+68*Math.cos(rad), cy=212+68*Math.sin(rad);
        return <ellipse key={i} cx={cx} cy={cy} rx="9" ry="42" transform={`rotate(${i*22.5} ${cx} ${cy})`} fill={f('midPetals')} stroke="#1a1a1a" strokeWidth="7" onClick={() => onRegionClick?.('midPetals')} style={{cursor:'pointer'}}/>;
      })}
      {/* Center */}
      <circle cx="200" cy="212" r="35" fill={f('center')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('center')} style={{cursor:'pointer'}}/>
    </svg>
  );
}

// ─── 16. DANDELION ────────────────────────────────────────────────────────────
export function Dandelion({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Stem */}
      <path d="M 200 305 C 200 345 200 385 200 425" fill="none" stroke="#1a1a1a" strokeWidth="12" strokeLinecap="round" onClick={() => onRegionClick?.('stem')} style={{cursor:'pointer'}}/>
      {/* Jagged leaves */}
      <path d="M 200 368 C 185 355 162 348 145 355 C 150 368 165 375 182 370 Z" fill={f('leaf')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('leaf')} style={{cursor:'pointer'}}/>
      <path d="M 200 385 C 218 372 242 365 258 372 C 252 385 237 392 220 387 Z" fill={f('leaf')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('leaf')} style={{cursor:'pointer'}}/>
      {/* Seed rays with round tips */}
      {Array.from({length:18},(_,i)=>{
        const rad=(i*20-90)*Math.PI/180;
        const x1=200+22*Math.cos(rad), y1=200+22*Math.sin(rad);
        const x2=200+115*Math.cos(rad), y2=200+115*Math.sin(rad);
        return (
          <g key={i}>
            <line x1={x1.toFixed(1)} y1={y1.toFixed(1)} x2={x2.toFixed(1)} y2={y2.toFixed(1)} stroke="#1a1a1a" strokeWidth="5" strokeLinecap="round" onClick={() => onRegionClick?.('seeds')} style={{cursor:'pointer'}}/>
            <circle cx={x2.toFixed(1)} cy={y2.toFixed(1)} r="12" fill={f('seeds')} stroke="#1a1a1a" strokeWidth="7" onClick={() => onRegionClick?.('seeds')} style={{cursor:'pointer'}}/>
          </g>
        );
      })}
      {/* Center sphere */}
      <circle cx="200" cy="200" r="28" fill={f('center')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('center')} style={{cursor:'pointer'}}/>
    </svg>
  );
}

// ─── 17. MAGNOLIA ─────────────────────────────────────────────────────────────
export function Magnolia({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Branch */}
      <path d="M 200 305 C 200 345 200 385 200 425" fill="none" stroke="#1a1a1a" strokeWidth="14" strokeLinecap="round" onClick={() => onRegionClick?.('branch')} style={{cursor:'pointer'}}/>
      <path d="M 200 340 C 175 325 148 320 130 330" fill="none" stroke="#1a1a1a" strokeWidth="12" strokeLinecap="round"/>
      {/* 6 large cupped petals */}
      <path d="M 200 200 C 172 188 145 165 138 138 C 132 115 142 95 158 92 C 172 90 186 102 192 122 C 196 138 198 168 200 200 Z" fill={f('petals')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('petals')} style={{cursor:'pointer'}}/>
      <path d="M 200 200 C 228 188 255 165 262 138 C 268 115 258 95 242 92 C 228 90 214 102 208 122 C 204 138 202 168 200 200 Z" fill={f('petals')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('petals')} style={{cursor:'pointer'}}/>
      <path d="M 200 200 C 182 175 172 148 178 122 C 182 102 196 92 200 90 C 204 92 218 102 222 122 C 228 148 218 175 200 200 Z" fill={f('petals')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('petals')} style={{cursor:'pointer'}}/>
      <path d="M 200 200 C 175 212 148 215 128 205 C 110 195 105 178 112 165 C 120 152 138 150 155 158 C 170 165 188 182 200 200 Z" fill={f('outerPetals')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('outerPetals')} style={{cursor:'pointer'}}/>
      <path d="M 200 200 C 225 212 252 215 272 205 C 290 195 295 178 288 165 C 280 152 262 150 245 158 C 230 165 212 182 200 200 Z" fill={f('outerPetals')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('outerPetals')} style={{cursor:'pointer'}}/>
      <path d="M 200 200 C 200 222 200 250 200 278 C 188 268 175 252 170 235 C 165 218 172 205 200 200 Z" fill={f('outerPetals')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('outerPetals')} style={{cursor:'pointer'}}/>
      {/* Center cone */}
      <ellipse cx="200" cy="200" rx="32" ry="42" fill={f('center')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('center')} style={{cursor:'pointer'}}/>
    </svg>
  );
}

// ─── 18. CACTUS FLOWER ────────────────────────────────────────────────────────
export function CactusFlower({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Cactus body */}
      <path d="M 175 425 L 175 275 C 175 265 165 258 155 262 L 105 262 C 95 262 88 252 90 242 L 95 215 C 97 205 108 200 118 205 L 155 225 L 155 215 C 155 205 165 198 175 202 L 175 192" fill={f('cactus')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('cactus')} style={{cursor:'pointer'}}/>
      <path d="M 225 425 L 225 285 C 225 275 235 268 245 272 L 285 272 C 295 272 302 262 300 252 L 295 225 C 293 215 282 210 272 215 L 245 232 L 245 222 C 245 212 235 205 225 208 L 225 192" fill={f('cactus')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('cactus')} style={{cursor:'pointer'}}/>
      {/* Spines */}
      {[[155,310],[155,340],[155,370],[245,315],[245,345],[245,375]].map(([x,y],i)=>(
        <line key={i} x1={x} y1={y} x2={x+(x<200?-16:16)} y2={y-5} stroke="#1a1a1a" strokeWidth="5" strokeLinecap="round"/>
      ))}
      {/* Flower on top */}
      {[0,72,144,216,288].map((angle,i)=>{
        const rad=(angle-90)*Math.PI/180;
        const cx=200+62*Math.cos(rad), cy=148+62*Math.sin(rad);
        return <ellipse key={i} cx={cx} cy={cy} rx="28" ry="48" transform={`rotate(${angle} ${cx} ${cy})`} fill={f('petals')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('petals')} style={{cursor:'pointer'}}/>;
      })}
      <circle cx="200" cy="148" r="38" fill={f('center')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('center')} style={{cursor:'pointer'}}/>
    </svg>
  );
}

// ─── 19. FORGET-ME-NOT ────────────────────────────────────────────────────────
export function ForgetMeNot({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  // cluster of 7 tiny flowers
  const flowerPositions = [
    [200,148],[152,188],[248,185],[128,248],[272,245],[165,305],[238,308],
  ];
  return (
    <svg {...svgProps}>
      {/* Stems */}
      <path d="M 200 380 C 200 408 200 428 200 448" fill="none" stroke="#1a1a1a" strokeWidth="11" strokeLinecap="round" onClick={() => onRegionClick?.('stem')} style={{cursor:'pointer'}}/>
      <path d="M 200 310 C 185 340 172 365 165 390" fill="none" stroke="#1a1a1a" strokeWidth="9" strokeLinecap="round"/>
      <path d="M 200 275 C 220 305 235 335 240 365" fill="none" stroke="#1a1a1a" strokeWidth="9" strokeLinecap="round"/>
      {/* Leaves */}
      <path d="M 200 392 C 178 378 152 374 136 386 C 144 402 168 408 192 400 Z" fill={f('leaf')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('leaf')} style={{cursor:'pointer'}}/>
      {/* Small 5-petal flowers */}
      {flowerPositions.map(([fx,fy],fi)=>(
        <g key={fi}>
          {[0,72,144,216,288].map((angle,i)=>{
            const rad=(angle-90)*Math.PI/180;
            const cx=fx+32*Math.cos(rad), cy=fy+32*Math.sin(rad);
            return <circle key={i} cx={cx} cy={cy} r="18" fill={f('petals')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('petals')} style={{cursor:'pointer'}}/>;
          })}
          <circle cx={fx} cy={fy} r="14" fill={f('center')} stroke="#1a1a1a" strokeWidth="7" onClick={() => onRegionClick?.('center')} style={{cursor:'pointer'}}/>
        </g>
      ))}
    </svg>
  );
}

// ─── 20. ANTHURIUM ────────────────────────────────────────────────────────────
export function Anthurium({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Stem */}
      <path d="M 200 335 C 200 368 200 398 200 428" fill="none" stroke="#1a1a1a" strokeWidth="12" strokeLinecap="round" onClick={() => onRegionClick?.('stem')} style={{cursor:'pointer'}}/>
      {/* Leaf */}
      <path d="M 200 385 C 175 370 148 366 132 378 C 140 394 165 400 190 392 Z" fill={f('leaf')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('leaf')} style={{cursor:'pointer'}}/>
      {/* Spathe — large heart-shaped bract */}
      <path d="M 200 335 C 175 318 140 285 128 248 C 115 208 125 168 148 148 C 165 133 185 132 200 142 C 215 132 235 133 252 148 C 275 168 285 208 272 248 C 260 285 225 318 200 335 Z" fill={f('spathe')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('spathe')} style={{cursor:'pointer'}}/>
      {/* Spathe veins */}
      <path d="M 200 142 C 200 220 200 295 200 335" fill="none" stroke="#1a1a1a" strokeWidth="7" strokeLinecap="round"/>
      {[-30,30].map((angle,i)=>(
        <path key={i} d={`M 200 200 C ${200+50*Math.cos(angle*Math.PI/180)} ${200+80*Math.sin(angle*Math.PI/180)} ${200+90*Math.cos(angle*Math.PI/180)} ${200+120*Math.sin(angle*Math.PI/180)}`} fill="none" stroke="#1a1a1a" strokeWidth="5" strokeLinecap="round"/>
      ))}
      {/* Spadix */}
      <path d="M 200 142 C 215 128 225 110 225 92 C 225 75 218 65 210 65 C 202 65 196 72 196 85 C 196 100 200 118 200 142 Z" fill={f('spadix')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round" onClick={() => onRegionClick?.('spadix')} style={{cursor:'pointer'}}/>
    </svg>
  );
}

// ─── 21. BIRD OF PARADISE ─────────────────────────────────────────────────────
export function BirdOfParadise({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Stem */}
      <path d="M 200 348 C 200 378 200 408 200 438" fill="none" stroke="#1a1a1a" strokeWidth="12" strokeLinecap="round" onClick={() => onRegionClick?.('stem')} style={{cursor:'pointer'}}/>
      {/* Large leaf */}
      <path d="M 200 395 C 168 372 135 362 112 375 C 122 398 155 408 185 398 Z" fill={f('leaf')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('leaf')} style={{cursor:'pointer'}}/>
      {/* Spathe boat */}
      <path d="M 118 280 C 118 258 138 248 200 248 L 298 260 C 305 262 308 270 305 278 L 298 295 C 295 303 285 308 278 305 L 118 285 Z" fill={f('spathe')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('spathe')} style={{cursor:'pointer'}}/>
      {/* Orange petals shooting up */}
      <path d="M 175 255 C 165 228 158 195 162 165 C 165 145 178 132 188 138 C 196 143 198 162 195 182 C 192 202 185 228 175 255 Z" fill={f('orangePetals')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('orangePetals')} style={{cursor:'pointer'}}/>
      <path d="M 200 252 C 195 225 192 192 196 162 C 200 142 210 130 218 136 C 226 142 228 162 225 182 C 222 202 212 228 200 252 Z" fill={f('orangePetals')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('orangePetals')} style={{cursor:'pointer'}}/>
      <path d="M 225 255 C 220 228 218 198 222 168 C 225 148 236 135 245 140 C 252 145 254 164 250 185 C 246 205 236 230 225 255 Z" fill={f('orangePetals')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('orangePetals')} style={{cursor:'pointer'}}/>
      {/* Blue arrow petals */}
      <path d="M 168 258 C 162 235 158 205 165 180 L 188 200 L 175 258 Z" fill={f('bluePetals')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round" onClick={() => onRegionClick?.('bluePetals')} style={{cursor:'pointer'}}/>
      <path d="M 232 260 C 238 237 242 207 235 182 L 212 202 L 225 260 Z" fill={f('bluePetals')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round" onClick={() => onRegionClick?.('bluePetals')} style={{cursor:'pointer'}}/>
    </svg>
  );
}

// ─── 22. CLOVER ───────────────────────────────────────────────────────────────
export function Clover({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Stem */}
      <path d="M 200 315 C 200 352 200 388 200 425" fill="none" stroke="#1a1a1a" strokeWidth="12" strokeLinecap="round" onClick={() => onRegionClick?.('stem')} style={{cursor:'pointer'}}/>
      {/* 4 heart-shaped leaflets */}
      {[[-90,0],[0,90],[90,0],[0,-90]].map(([angle,offset],i)=>{
        const rad=angle*Math.PI/180;
        const cx=200+80*Math.cos(rad), cy=235+80*Math.sin(rad);
        return (
          <path key={i}
            d={`M ${cx} ${cy+25} C ${cx-35} ${cy+15} ${cx-48} ${cy-8} ${cx-40} ${cy-25} C ${cx-32} ${cy-42} ${cx-10} ${cy-42} ${cx} ${cy-28} C ${cx+10} ${cy-42} ${cx+32} ${cy-42} ${cx+40} ${cy-25} C ${cx+48} ${cy-8} ${cx+35} ${cy+15} ${cx} ${cy+25} Z`}
            fill={f('leaves')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round"
            onClick={() => onRegionClick?.('leaves')} style={{cursor:'pointer'}}/>
        );
      })}
      {/* Center join */}
      <circle cx="200" cy="235" r="20" fill={f('leaves')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('leaves')} style={{cursor:'pointer'}}/>
      {/* Vein marks */}
      {[[-90,0],[0,90],[90,0],[0,-90]].map(([angle],i)=>{
        const rad=angle*Math.PI/180;
        return <path key={i} d={`M 200 235 C ${200+40*Math.cos(rad)} ${235+40*Math.sin(rad)} ${200+70*Math.cos(rad)} ${235+70*Math.sin(rad)}`} fill="none" stroke="#1a1a1a" strokeWidth="5" strokeLinecap="round"/>;
      })}
    </svg>
  );
}

// ─── 23. PROTEA ───────────────────────────────────────────────────────────────
export function Protea({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Stem */}
      <path d="M 200 325 C 200 360 200 395 200 428" fill="none" stroke="#1a1a1a" strokeWidth="12" strokeLinecap="round" onClick={() => onRegionClick?.('stem')} style={{cursor:'pointer'}}/>
      {/* Broad leaves */}
      <path d="M 200 382 C 175 366 148 362 130 375 C 138 392 165 398 192 390 Z" fill={f('leaf')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('leaf')} style={{cursor:'pointer'}}/>
      {/* Bracts — pointy oval layers */}
      {[0,30,60,90,120,150,180,210,240,270,300,330].map((angle,i)=>{
        const rad=(angle-90)*Math.PI/180;
        const cx=200+105*Math.cos(rad), cy=215+105*Math.sin(rad);
        return <ellipse key={i} cx={cx} cy={cy} rx="22" ry="62" transform={`rotate(${angle} ${cx} ${cy})`} fill={f('bracts')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('bracts')} style={{cursor:'pointer'}}/>;
      })}
      {/* Inner fuzzy dome */}
      <circle cx="200" cy="215" r="72" fill={f('dome')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('dome')} style={{cursor:'pointer'}}/>
      {/* Dome texture */}
      {Array.from({length:12},(_,i)=>{
        const a=i*30*Math.PI/180;
        return <circle key={i} cx={(200+48*Math.cos(a)).toFixed(1)} cy={(215+48*Math.sin(a)).toFixed(1)} r="9" fill={f('dome')} stroke="#1a1a1a" strokeWidth="5" onClick={() => onRegionClick?.('dome')} style={{cursor:'pointer'}}/>;
      })}
    </svg>
  );
}

// ─── 24. SNAPDRAGON ───────────────────────────────────────────────────────────
export function Snapdragon({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  const blooms = [
    [200, 105, 58],
    [185, 165, 52],
    [215, 222, 52],
    [188, 278, 48],
    [212, 328, 45],
  ];
  return (
    <svg {...svgProps}>
      {/* Stem */}
      <path d="M 200 388 C 200 408 200 428 200 448" fill="none" stroke="#1a1a1a" strokeWidth="12" strokeLinecap="round" onClick={() => onRegionClick?.('stem')} style={{cursor:'pointer'}}/>
      <path d="M 200 388 C 200 320 200 220 200 142" fill="none" stroke="#1a1a1a" strokeWidth="11" strokeLinecap="round" onClick={() => onRegionClick?.('stem')} style={{cursor:'pointer'}}/>
      {/* Leaves */}
      <path d="M 200 330 C 178 318 152 315 138 328 C 146 345 170 350 192 342 Z" fill={f('leaf')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('leaf')} style={{cursor:'pointer'}}/>
      <path d="M 200 298 C 222 286 248 283 262 296 C 254 313 228 318 208 310 Z" fill={f('leaf')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('leaf')} style={{cursor:'pointer'}}/>
      {/* Snapdragon blooms */}
      {blooms.map(([cx,cy,r],i)=>(
        <g key={i}>
          {/* Upper lip */}
          <path d={`M ${cx-r} ${cy} C ${cx-r} ${cy-r*0.5} ${cx-r*0.5} ${cy-r*0.75} ${cx} ${cy-r*0.75} C ${cx+r*0.5} ${cy-r*0.75} ${cx+r} ${cy-r*0.5} ${cx+r} ${cy} Z`} fill={f('petals')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('petals')} style={{cursor:'pointer'}}/>
          {/* Lower lip */}
          <path d={`M ${cx-r} ${cy} C ${cx-r} ${cy+r*0.5} ${cx-r*0.5} ${cy+r*0.8} ${cx} ${cy+r*0.8} C ${cx+r*0.5} ${cy+r*0.8} ${cx+r} ${cy+r*0.5} ${cx+r} ${cy} Z`} fill={f('petals')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('petals')} style={{cursor:'pointer'}}/>
          {/* Throat */}
          <ellipse cx={cx} cy={cy} rx={r*0.38} ry={r*0.32} fill={f('throat')} stroke="#1a1a1a" strokeWidth="7" onClick={() => onRegionClick?.('throat')} style={{cursor:'pointer'}}/>
        </g>
      ))}
    </svg>
  );
}

// ─── 25. ASTER ────────────────────────────────────────────────────────────────
export function Aster({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Stem */}
      <path d="M 200 315 C 200 352 200 388 200 425" fill="none" stroke="#1a1a1a" strokeWidth="12" strokeLinecap="round" onClick={() => onRegionClick?.('stem')} style={{cursor:'pointer'}}/>
      {/* Leaf */}
      <path d="M 200 375 C 178 360 152 357 136 370 C 144 386 168 392 190 384 Z" fill={f('leaf')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('leaf')} style={{cursor:'pointer'}}/>
      {/* Many narrow petals */}
      {Array.from({length:24},(_,i)=>{
        const rad=(i*15-90)*Math.PI/180;
        const cx=200+100*Math.cos(rad), cy=210+100*Math.sin(rad);
        return <ellipse key={i} cx={cx} cy={cy} rx="10" ry="52" transform={`rotate(${i*15} ${cx} ${cy})`} fill={f('petals')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('petals')} style={{cursor:'pointer'}}/>;
      })}
      {/* Center */}
      <circle cx="200" cy="210" r="42" fill={f('center')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('center')} style={{cursor:'pointer'}}/>
      {/* Center dots */}
      {Array.from({length:8},(_,i)=>{
        const a=i*45*Math.PI/180;
        return <circle key={i} cx={(200+24*Math.cos(a)).toFixed(1)} cy={(210+24*Math.sin(a)).toFixed(1)} r="7" fill={f('center')} stroke="#1a1a1a" strokeWidth="5" onClick={() => onRegionClick?.('center')} style={{cursor:'pointer'}}/>;
      })}
    </svg>
  );
}

// ─── 26. FOXGLOVE ─────────────────────────────────────────────────────────────
export function Foxglove({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  const bells = [
    [200,108,72],[182,172,65],[218,232,62],[185,288,58],[215,340,55],
  ];
  return (
    <svg {...svgProps}>
      <path d="M 200 388 C 200 408 200 428 200 448" fill="none" stroke="#1a1a1a" strokeWidth="12" strokeLinecap="round" onClick={() => onRegionClick?.('stem')} style={{cursor:'pointer'}}/>
      <path d="M 200 388 C 200 300 200 200 200 142" fill="none" stroke="#1a1a1a" strokeWidth="11" strokeLinecap="round" onClick={() => onRegionClick?.('stem')} style={{cursor:'pointer'}}/>
      {/* Leaves */}
      <path d="M 200 355 C 175 340 148 336 132 349 C 140 366 165 372 190 364 Z" fill={f('leaf')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('leaf')} style={{cursor:'pointer'}}/>
      <path d="M 200 318 C 225 303 252 299 266 312 C 258 329 232 335 210 327 Z" fill={f('leaf')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('leaf')} style={{cursor:'pointer'}}/>
      {bells.map(([cx,cy,r],i)=>(
        <g key={i}>
          <path d={`M ${cx-r*0.52} ${cy} C ${cx-r*0.55} ${cy+r*0.65} ${cx-r*0.38} ${cy+r} ${cx} ${cy+r} C ${cx+r*0.38} ${cy+r} ${cx+r*0.55} ${cy+r*0.65} ${cx+r*0.52} ${cy} C ${cx+r*0.38} ${cy-r*0.5} ${cx+r*0.18} ${cy-r*0.55} ${cx} ${cy-r*0.55} C ${cx-r*0.18} ${cy-r*0.55} ${cx-r*0.38} ${cy-r*0.5} ${cx-r*0.52} ${cy} Z`} fill={f('bells')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('bells')} style={{cursor:'pointer'}}/>
          {/* Spots */}
          {[[-12,30],[5,42],[18,28],[-5,52]].map(([dx,dy],j)=>(
            <circle key={j} cx={cx+dx} cy={cy+dy} r="6" fill={f('spots')} stroke="#1a1a1a" strokeWidth="4" onClick={() => onRegionClick?.('spots')} style={{cursor:'pointer'}}/>
          ))}
        </g>
      ))}
    </svg>
  );
}

// ─── 27. WISTERIA ─────────────────────────────────────────────────────────────
export function Wisteria({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  const clusters = [
    [200,80],[148,100],[255,98],[115,155],[285,152],[132,225],[268,220],[155,295],[248,292],
    [178,355],[225,358],[200,410],
  ];
  return (
    <svg {...svgProps}>
      {/* Vine/branch across top */}
      <path d="M 45 88 C 100 75 155 70 200 72 C 245 70 300 75 355 88" fill="none" stroke="#1a1a1a" strokeWidth="14" strokeLinecap="round" onClick={() => onRegionClick?.('vine')} style={{cursor:'pointer'}}/>
      {/* Hanging tendrils */}
      {[80,148,200,255,320].map((x,i)=>(
        <path key={i} d={`M ${x} 88 C ${x} 200 ${x+(i%2===0?10:-10)} 320 ${x+(i%2===0?5:-5)} 448`} fill="none" stroke="#1a1a1a" strokeWidth="7" strokeLinecap="round"/>
      ))}
      {/* Florets */}
      {clusters.map(([cx,cy],i)=>(
        <g key={i}>
          {[0,72,144,216,288].map((angle,j)=>{
            const rad=(angle-90)*Math.PI/180;
            return <circle key={j} cx={(cx+20*Math.cos(rad)).toFixed(1)} cy={(cy+20*Math.sin(rad)).toFixed(1)} r="16" fill={f('florets')} stroke="#1a1a1a" strokeWidth="7" onClick={() => onRegionClick?.('florets')} style={{cursor:'pointer'}}/>;
          })}
          <circle cx={cx} cy={cy} r="12" fill={f('center')} stroke="#1a1a1a" strokeWidth="6" onClick={() => onRegionClick?.('center')} style={{cursor:'pointer'}}/>
        </g>
      ))}
    </svg>
  );
}

// ─── 28. COSMOS ───────────────────────────────────────────────────────────────
export function Cosmos({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Stem — thin and tall */}
      <path d="M 200 305 C 200 345 200 385 200 425" fill="none" stroke="#1a1a1a" strokeWidth="11" strokeLinecap="round" onClick={() => onRegionClick?.('stem')} style={{cursor:'pointer'}}/>
      {/* Feathery leaves */}
      <path d="M 200 358 C 182 342 165 328 155 330 C 158 345 168 355 180 355 Z" fill={f('leaf')} stroke="#1a1a1a" strokeWidth="8" strokeLinejoin="round" onClick={() => onRegionClick?.('leaf')} style={{cursor:'pointer'}}/>
      <path d="M 200 340 C 218 324 235 310 245 312 C 242 327 232 337 220 337 Z" fill={f('leaf')} stroke="#1a1a1a" strokeWidth="8" strokeLinejoin="round" onClick={() => onRegionClick?.('leaf')} style={{cursor:'pointer'}}/>
      {/* 8 notched petals */}
      {Array.from({length:8},(_,i)=>{
        const rad=(i*45-90)*Math.PI/180;
        const cx=200+98*Math.cos(rad), cy=198+98*Math.sin(rad);
        return (
          <path key={i}
            d={`M ${(200+42*Math.cos(rad-0.2)).toFixed(1)} ${(198+42*Math.sin(rad-0.2)).toFixed(1)} C ${(cx-15).toFixed(1)} ${(cy-8).toFixed(1)} ${cx.toFixed(1)} ${cy.toFixed(1)} ${cx.toFixed(1)} ${cy.toFixed(1)} C ${cx.toFixed(1)} ${cy.toFixed(1)} ${(cx+15).toFixed(1)} ${(cy-8).toFixed(1)} ${(200+42*Math.cos(rad+0.2)).toFixed(1)} ${(198+42*Math.sin(rad+0.2)).toFixed(1)} Z`}
            fill={f('petals')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round"
            onClick={() => onRegionClick?.('petals')} style={{cursor:'pointer'}}/>
        );
      })}
      {/* Center */}
      <circle cx="200" cy="198" r="40" fill={f('center')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('center')} style={{cursor:'pointer'}}/>
      {/* Center ring */}
      <circle cx="200" cy="198" r="24" fill="none" stroke="#1a1a1a" strokeWidth="6" onClick={() => onRegionClick?.('center')} style={{cursor:'pointer'}}/>
    </svg>
  );
}

// ─── 29. ZINNIA ───────────────────────────────────────────────────────────────
export function Zinnia({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Stem */}
      <path d="M 200 318 C 200 355 200 390 200 425" fill="none" stroke="#1a1a1a" strokeWidth="12" strokeLinecap="round" onClick={() => onRegionClick?.('stem')} style={{cursor:'pointer'}}/>
      {/* Leaf */}
      <path d="M 200 378 C 178 363 152 360 136 372 C 144 388 168 394 190 386 Z" fill={f('leaf')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('leaf')} style={{cursor:'pointer'}}/>
      {/* 3 rows of petals */}
      {Array.from({length:10},(_,i)=>{
        const rad=(i*36-90)*Math.PI/180;
        const cx=200+105*Math.cos(rad), cy=210+105*Math.sin(rad);
        return <ellipse key={i} cx={cx} cy={cy} rx="22" ry="58" transform={`rotate(${i*36} ${cx} ${cy})`} fill={f('outerPetals')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('outerPetals')} style={{cursor:'pointer'}}/>;
      })}
      {Array.from({length:8},(_,i)=>{
        const rad=(i*45-90+22.5)*Math.PI/180;
        const cx=200+68*Math.cos(rad), cy=210+68*Math.sin(rad);
        return <ellipse key={i} cx={cx} cy={cy} rx="18" ry="42" transform={`rotate(${i*45+22.5} ${cx} ${cy})`} fill={f('midPetals')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('midPetals')} style={{cursor:'pointer'}}/>;
      })}
      {/* Center dome */}
      <circle cx="200" cy="210" r="40" fill={f('center')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('center')} style={{cursor:'pointer'}}/>
    </svg>
  );
}

// ─── 30. JASMINE ──────────────────────────────────────────────────────────────
export function Jasmine({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  const flowers = [
    [200,105],[148,162],[255,158],[118,235],[282,230],
    [145,310],[258,305],[185,378],[218,382],
  ];
  return (
    <svg {...svgProps}>
      {/* Vines */}
      <path d="M 200 105 C 200 200 200 310 200 420" fill="none" stroke="#1a1a1a" strokeWidth="10" strokeLinecap="round"/>
      <path d="M 200 160 C 175 175 150 180 130 170" fill="none" stroke="#1a1a1a" strokeWidth="8" strokeLinecap="round"/>
      <path d="M 200 230 C 225 248 250 250 270 240" fill="none" stroke="#1a1a1a" strokeWidth="8" strokeLinecap="round"/>
      <path d="M 200 305 C 175 320 150 322 132 312" fill="none" stroke="#1a1a1a" strokeWidth="8" strokeLinecap="round"/>
      {/* Leaves */}
      <path d="M 200 380 C 178 366 152 363 136 375 C 144 391 168 397 192 389 Z" fill={f('leaf')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('leaf')} style={{cursor:'pointer'}}/>
      {/* 5-petal tubular flowers */}
      {flowers.map(([fx,fy],fi)=>(
        <g key={fi}>
          {[0,72,144,216,288].map((angle,i)=>{
            const rad=(angle-90)*Math.PI/180;
            const cx=fx+30*Math.cos(rad), cy=fy+30*Math.sin(rad);
            return <ellipse key={i} cx={cx} cy={cy} rx="14" ry="22" transform={`rotate(${angle} ${cx} ${cy})`} fill={f('petals')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('petals')} style={{cursor:'pointer'}}/>;
          })}
          <circle cx={fx} cy={fy} r="12" fill={f('center')} stroke="#1a1a1a" strokeWidth="7" onClick={() => onRegionClick?.('center')} style={{cursor:'pointer'}}/>
        </g>
      ))}
    </svg>
  );
}
