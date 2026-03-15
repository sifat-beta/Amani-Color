// SVG Coloring Drawings - OBJECTS 2 (30 new objects)
// viewBox 0 0 400 450, strokeWidth 10+ for toddler-friendly thick lines

const svgProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 400 450',
  style: { width: '100%', height: '100%', userSelect: 'none' },
};

// ─── 1. ROCKET ────────────────────────────────────────────────────────────────
export function Rocket({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Flame */}
      <path d="M 172 388 C 165 408 158 428 162 445 C 178 435 192 422 200 408 C 208 422 222 435 238 445 C 242 428 235 408 228 388 Z" fill={f('flame')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round" onClick={() => onRegionClick?.('flame')} style={{cursor:'pointer'}}/>
      {/* Left fin */}
      <path d="M 148 330 L 95 385 L 148 368 Z" fill={f('fins')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('fins')} style={{cursor:'pointer'}}/>
      {/* Right fin */}
      <path d="M 252 330 L 305 385 L 252 368 Z" fill={f('fins')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('fins')} style={{cursor:'pointer'}}/>
      {/* Body */}
      <path d="M 148 368 L 148 230 C 148 165 168 110 200 82 C 232 110 252 165 252 230 L 252 368 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Nose cone */}
      <path d="M 148 230 C 148 165 168 110 200 82 C 232 110 252 165 252 230 Z" fill={f('nose')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('nose')} style={{cursor:'pointer'}}/>
      {/* Window */}
      <circle cx="200" cy="255" r="42" fill={f('window')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('window')} style={{cursor:'pointer'}}/>
      <circle cx="200" cy="255" r="26" fill={f('window')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('window')} style={{cursor:'pointer'}}/>
      {/* Rivets */}
      {[[155,310],[245,310],[155,345],[245,345]].map(([cx,cy],i)=>(
        <circle key={i} cx={cx} cy={cy} r="8" fill={f('body')} stroke="#1a1a1a" strokeWidth="6" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      ))}
    </svg>
  );
}

// ─── 2. TRAIN ─────────────────────────────────────────────────────────────────
export function Train({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Track */}
      <rect x="30" y="392" width="340" height="18" rx="9" fill={f('track')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('track')} style={{cursor:'pointer'}}/>
      {[65,115,165,215,265,315].map((x,i)=>(
        <rect key={i} x={x} y="392" width="22" height="38" rx="5" fill={f('track')} stroke="#1a1a1a" strokeWidth="7" onClick={() => onRegionClick?.('track')} style={{cursor:'pointer'}}/>
      ))}
      {/* Wheels */}
      {[95,200,305].map((cx,i)=>(
        <g key={i}>
          <circle cx={cx} cy="390" r="42" fill={f('wheels')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('wheels')} style={{cursor:'pointer'}}/>
          <circle cx={cx} cy="390" r="22" fill="white" stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('wheels')} style={{cursor:'pointer'}}/>
          <circle cx={cx} cy="390" r="8" fill="#1a1a1a"/>
        </g>
      ))}
      {/* Body */}
      <rect x="48" y="268" width="304" height="130" rx="22" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Cab roof */}
      <rect x="225" y="195" width="120" height="78" rx="18" fill={f('cab')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('cab')} style={{cursor:'pointer'}}/>
      {/* Boiler */}
      <ellipse cx="148" cy="268" rx="100" ry="38" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Smokestack */}
      <rect x="82" y="185" width="42" height="85" rx="14" fill={f('stack')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('stack')} style={{cursor:'pointer'}}/>
      <ellipse cx="103" cy="185" rx="30" ry="14" fill={f('stack')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('stack')} style={{cursor:'pointer'}}/>
      {/* Smoke puffs */}
      {[[88,155],[110,135],[95,115]].map(([cx,cy],i)=>(
        <circle key={i} cx={cx} cy={cy} r={18-i*2} fill="white" stroke="#1a1a1a" strokeWidth="7" onClick={() => onRegionClick?.('stack')} style={{cursor:'pointer'}}/>
      ))}
      {/* Windows */}
      <rect x="240" y="212" width="50" height="42" rx="10" fill={f('window')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('window')} style={{cursor:'pointer'}}/>
      <rect x="302" y="212" width="38" height="42" rx="10" fill={f('window')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('window')} style={{cursor:'pointer'}}/>
      {/* Headlight */}
      <circle cx="348" cy="285" r="18" fill="white" stroke="#1a1a1a" strokeWidth="8"/>
    </svg>
  );
}

// ─── 3. CASTLE ────────────────────────────────────────────────────────────────
export function Castle({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Main wall */}
      <rect x="62" y="248" width="276" height="192" rx="6" fill={f('walls')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('walls')} style={{cursor:'pointer'}}/>
      {/* Center tower */}
      <rect x="145" y="148" width="110" height="252" rx="6" fill={f('tower')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('tower')} style={{cursor:'pointer'}}/>
      {/* Left tower */}
      <rect x="42" y="188" width="80" height="252" rx="6" fill={f('tower')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('tower')} style={{cursor:'pointer'}}/>
      {/* Right tower */}
      <rect x="278" y="188" width="80" height="252" rx="6" fill={f('tower')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('tower')} style={{cursor:'pointer'}}/>
      {/* Battlements center */}
      {[152,175,198,222,245].map((x,i)=>(
        <rect key={i} x={x} y="120" width="18" height="32" rx="4" fill={f('tower')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('tower')} style={{cursor:'pointer'}}/>
      ))}
      {/* Battlements left */}
      {[48,68,88,108].map((x,i)=>(
        <rect key={i} x={x} y="162" width="14" height="28" rx="4" fill={f('tower')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('tower')} style={{cursor:'pointer'}}/>
      ))}
      {/* Battlements right */}
      {[284,304,324,344].map((x,i)=>(
        <rect key={i} x={x} y="162" width="14" height="28" rx="4" fill={f('tower')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('tower')} style={{cursor:'pointer'}}/>
      ))}
      {/* Flag */}
      <path d="M 200 68 L 200 122" stroke="#1a1a1a" strokeWidth="8" strokeLinecap="round"/>
      <path d="M 200 72 L 238 82 L 200 96 Z" fill={f('flag')} stroke="#1a1a1a" strokeWidth="8" strokeLinejoin="round" onClick={() => onRegionClick?.('flag')} style={{cursor:'pointer'}}/>
      {/* Gate arch */}
      <path d="M 170 440 L 170 332 C 170 316 182 305 200 305 C 218 305 230 316 230 332 L 230 440 Z" fill={f('gate')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('gate')} style={{cursor:'pointer'}}/>
      {/* Windows */}
      {[[82,248],[318,248],[200,220]].map(([cx,cy],i)=>(
        <path key={i} d={`M ${cx-15} ${cy+20} L ${cx-15} ${cy} C ${cx-15} ${cy-18} ${cx+15} ${cy-18} ${cx+15} ${cy} L ${cx+15} ${cy+20} Z`} fill={f('window')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('window')} style={{cursor:'pointer'}}/>
      ))}
    </svg>
  );
}

// ─── 4. BIRTHDAY CAKE ─────────────────────────────────────────────────────────
export function BirthdayCake({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Candles */}
      {[120,160,200,240,280].map((cx,i)=>(
        <g key={i}>
          <rect x={cx-10} y={158} width="20" height="52" rx="8" fill={f('candles')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('candles')} style={{cursor:'pointer'}}/>
          <path d={`M ${cx} 158 C ${cx-8} 140 ${cx-6} 122 ${cx} 112 C ${cx+6} 122 ${cx+8} 140 ${cx} 158`} fill={f('flame')} stroke="#1a1a1a" strokeWidth="7" strokeLinejoin="round" onClick={() => onRegionClick?.('flame')} style={{cursor:'pointer'}}/>
        </g>
      ))}
      {/* Top layer */}
      <rect x="88" y="208" width="224" height="75" rx="12" fill={f('top')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('top')} style={{cursor:'pointer'}}/>
      {/* Frosting drips top */}
      {[108,145,182,218,255,292].map((x,i)=>(
        <path key={i} d={`M ${x} 208 Q ${x+10} 228 ${x+18} 208`} fill={f('frosting')} stroke="#1a1a1a" strokeWidth="8" strokeLinejoin="round" onClick={() => onRegionClick?.('frosting')} style={{cursor:'pointer'}}/>
      ))}
      {/* Bottom layer */}
      <rect x="55" y="283" width="290" height="100" rx="14" fill={f('bottom')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('bottom')} style={{cursor:'pointer'}}/>
      {/* Frosting drips bottom */}
      {[78,118,155,192,228,265,302].map((x,i)=>(
        <path key={i} d={`M ${x} 283 Q ${x+12} 306 ${x+22} 283`} fill={f('frosting')} stroke="#1a1a1a" strokeWidth="8" strokeLinejoin="round" onClick={() => onRegionClick?.('frosting')} style={{cursor:'pointer'}}/>
      ))}
      {/* Plate */}
      <ellipse cx="200" cy="383" rx="165" ry="22" fill={f('plate')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('plate')} style={{cursor:'pointer'}}/>
      {/* Sprinkles */}
      {[[130,240,30],[160,250,-20],[200,235,10],[240,248,-35],[270,238,25],[150,310,15],[200,305,-25],[250,312,20]].map(([cx,cy,r],i)=>(
        <rect key={i} x={cx-8} y={cy-4} width="16" height="8" rx="4" transform={`rotate(${r} ${cx} ${cy})`} fill={f('sprinkles')} stroke="#1a1a1a" strokeWidth="4" onClick={() => onRegionClick?.('sprinkles')} style={{cursor:'pointer'}}/>
      ))}
    </svg>
  );
}

// ─── 5. RAINBOW ───────────────────────────────────────────────────────────────
export function Rainbow({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  const arcs = [
    ['red',    190],['orange',162],['yellow',134],
    ['green',  106],['blue',   78],['purple',  50],
  ];
  return (
    <svg {...svgProps}>
      {/* Clouds left */}
      {[[62,370,38],[35,348,30],[88,345,26]].map(([cx,cy,r],i)=>(
        <circle key={i} cx={cx} cy={cy} r={r} fill={f('cloud')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('cloud')} style={{cursor:'pointer'}}/>
      ))}
      {/* Clouds right */}
      {[[338,370,38],[365,348,30],[312,345,26]].map(([cx,cy,r],i)=>(
        <circle key={i} cx={cx} cy={cy} r={r} fill={f('cloud')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('cloud')} style={{cursor:'pointer'}}/>
      ))}
      {/* Rainbow arcs — outer to inner */}
      {arcs.map(([id, r], i) => (
        <path key={i}
          d={`M ${200-r*1.8} 370 A ${r*1.8} ${r*1.8} 0 0 1 ${200+r*1.8} 370`}
          fill="none" stroke={f(id)} strokeWidth="24"
          strokeLinecap="round"
          onClick={() => onRegionClick?.(id)} style={{cursor:'pointer'}}/>
      ))}
      {arcs.map(([id, r], i) => (
        <path key={`o${i}`}
          d={`M ${200-r*1.8} 370 A ${r*1.8} ${r*1.8} 0 0 1 ${200+r*1.8} 370`}
          fill="none" stroke="#1a1a1a" strokeWidth="3"
          strokeLinecap="round"/>
      ))}
      {/* Sun in center top */}
      <circle cx="200" cy="105" r="42" fill={f('yellow')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('yellow')} style={{cursor:'pointer'}}/>
      {Array.from({length:8},(_,i)=>{
        const a=i*45*Math.PI/180;
        return <line key={i} x1={(200+46*Math.cos(a)).toFixed(1)} y1={(105+46*Math.sin(a)).toFixed(1)} x2={(200+68*Math.cos(a)).toFixed(1)} y2={(105+68*Math.sin(a)).toFixed(1)} stroke="#1a1a1a" strokeWidth="8" strokeLinecap="round"/>;
      })}
    </svg>
  );
}

// ─── 6. ICE CREAM ─────────────────────────────────────────────────────────────
export function IceCream({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Cone */}
      <path d="M 148 285 L 200 438 L 252 285 Z" fill={f('cone')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('cone')} style={{cursor:'pointer'}}/>
      {/* Waffle grid */}
      {[295,315,338,362,385,410].map((y,i)=>(
        <path key={i} d={`M ${148+(y-285)*0.38} ${y} L ${252-(y-285)*0.38} ${y}`} fill="none" stroke="#1a1a1a" strokeWidth="5" strokeLinecap="round" onClick={() => onRegionClick?.('cone')} style={{cursor:'pointer'}}/>
      ))}
      {[162,178,195,212,228,244].map((x,i)=>(
        <path key={i} d={`M ${x} ${285+(x-148)*1.2} L ${x} ${438-20}`} fill="none" stroke="#1a1a1a" strokeWidth="5" strokeLinecap="round" onClick={() => onRegionClick?.('cone')} style={{cursor:'pointer'}}/>
      ))}
      {/* Bottom scoop */}
      <ellipse cx="200" cy="245" rx="90" ry="82" fill={f('scoop1')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('scoop1')} style={{cursor:'pointer'}}/>
      {/* Middle scoop */}
      <ellipse cx="200" cy="182" rx="78" ry="70" fill={f('scoop2')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('scoop2')} style={{cursor:'pointer'}}/>
      {/* Top scoop */}
      <ellipse cx="200" cy="128" rx="62" ry="58" fill={f('scoop3')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('scoop3')} style={{cursor:'pointer'}}/>
      {/* Cherry on top */}
      <circle cx="200" cy="82" r="22" fill={f('cherry')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('cherry')} style={{cursor:'pointer'}}/>
      <path d="M 200 60 C 200 48 205 38 208 30" fill="none" stroke="#1a1a1a" strokeWidth="8" strokeLinecap="round"/>
      {/* Sprinkles */}
      {[[170,218,20],[220,225,-30],[185,175,15],[215,168,-25],[195,132,35]].map(([cx,cy,r],i)=>(
        <rect key={i} x={cx-9} y={cy-4} width="18" height="8" rx="4" transform={`rotate(${r} ${cx} ${cy})`} fill={f('sprinkles')} stroke="#1a1a1a" strokeWidth="4" onClick={() => onRegionClick?.('sprinkles')} style={{cursor:'pointer'}}/>
      ))}
    </svg>
  );
}

// ─── 7. BUTTERFLY KITE ────────────────────────────────────────────────────────
export function Kite({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Kite string */}
      <path d="M 200 310 C 215 340 225 370 230 400 C 222 408 215 418 210 432" fill="none" stroke="#1a1a1a" strokeWidth="6" strokeLinecap="round"/>
      {/* Tail bows */}
      {[340,368,396,424].map((y,i)=>(
        <g key={i}>
          <path d={`M ${200+i*4} ${y} C ${188+i*4} ${y-8} ${185+i*4} ${y+8} ${200+i*4} ${y} C ${215+i*4} ${y-8} ${218+i*4} ${y+8} ${200+i*4} ${y}`} fill={f('tail')} stroke="#1a1a1a" strokeWidth="7" strokeLinejoin="round" onClick={() => onRegionClick?.('tail')} style={{cursor:'pointer'}}/>
        </g>
      ))}
      {/* Top diamond half */}
      <path d="M 200 80 L 305 220 L 200 310 L 95 220 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Cross spars */}
      <line x1="200" y1="80" x2="200" y2="310" stroke="#1a1a1a" strokeWidth="8" strokeLinecap="round"/>
      <line x1="95" y1="220" x2="305" y2="220" stroke="#1a1a1a" strokeWidth="8" strokeLinecap="round"/>
      {/* Color panels */}
      <path d="M 200 80 L 305 220 L 200 220 Z" fill={f('panel1')} stroke="#1a1a1a" strokeWidth="7" onClick={() => onRegionClick?.('panel1')} style={{cursor:'pointer'}}/>
      <path d="M 200 80 L 95 220 L 200 220 Z" fill={f('panel2')} stroke="#1a1a1a" strokeWidth="7" onClick={() => onRegionClick?.('panel2')} style={{cursor:'pointer'}}/>
      <path d="M 200 310 L 305 220 L 200 220 Z" fill={f('panel3')} stroke="#1a1a1a" strokeWidth="7" onClick={() => onRegionClick?.('panel3')} style={{cursor:'pointer'}}/>
      <path d="M 200 310 L 95 220 L 200 220 Z" fill={f('panel4')} stroke="#1a1a1a" strokeWidth="7" onClick={() => onRegionClick?.('panel4')} style={{cursor:'pointer'}}/>
      {/* Center star */}
      <circle cx="200" cy="220" r="22" fill={f('tail')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('tail')} style={{cursor:'pointer'}}/>
    </svg>
  );
}

// ─── 8. GUITAR ────────────────────────────────────────────────────────────────
export function Guitar({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Neck */}
      <rect x="185" y="62" width="30" height="188" rx="12" fill={f('neck')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('neck')} style={{cursor:'pointer'}}/>
      {/* Frets */}
      {[88,108,128,148,168,188,208].map((y,i)=>(
        <line key={i} x1="185" y1={y} x2="215" y2={y} stroke="#1a1a1a" strokeWidth="6"/>
      ))}
      {/* Headstock */}
      <rect x="178" y="38" width="44" height="58" rx="14" fill={f('neck')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('neck')} style={{cursor:'pointer'}}/>
      {/* Tuning pegs */}
      {[[168,52],[168,68],[168,84],[232,52],[232,68],[232,84]].map(([cx,cy],i)=>(
        <circle key={i} cx={cx} cy={cy} r="10" fill={f('tuners')} stroke="#1a1a1a" strokeWidth="7" onClick={() => onRegionClick?.('tuners')} style={{cursor:'pointer'}}/>
      ))}
      {/* Body — figure 8 */}
      <path d="M 200 420 C 145 415 95 385 85 345 C 75 305 98 270 128 262 C 108 248 95 225 98 202 C 102 175 125 158 155 158 C 170 158 183 165 192 175 C 196 162 200 152 200 250 C 200 152 204 162 208 175 C 217 165 230 158 245 158 C 275 158 298 175 302 202 C 305 225 292 248 272 262 C 302 270 325 305 315 345 C 305 385 255 415 200 420 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Sound hole */}
      <circle cx="200" cy="318" r="42" fill={f('hole')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('hole')} style={{cursor:'pointer'}}/>
      <circle cx="200" cy="318" r="28" fill={f('hole')} stroke="#1a1a1a" strokeWidth="7" onClick={() => onRegionClick?.('hole')} style={{cursor:'pointer'}}/>
      {/* Strings */}
      {[-10,-5,0,5,10,15].map((dx,i)=>(
        <line key={i} x1={200+dx} y1="245" x2={200+dx} y2="390" stroke="#1a1a1a" strokeWidth="3"/>
      ))}
      {/* Bridge */}
      <rect x="175" y="385" width="50" height="14" rx="6" fill={f('neck')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('neck')} style={{cursor:'pointer'}}/>
    </svg>
  );
}

// ─── 9. LIGHTHOUSE ────────────────────────────────────────────────────────────
export function Lighthouse({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Sea */}
      <path d="M 28 400 C 80 388 130 395 200 392 C 270 389 320 395 372 400 C 340 418 260 428 200 428 C 140 428 60 418 28 400 Z" fill={f('sea')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('sea')} style={{cursor:'pointer'}}/>
      {/* Base rocks */}
      <ellipse cx="200" cy="405" rx="95" ry="28" fill={f('rocks')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('rocks')} style={{cursor:'pointer'}}/>
      {/* Tower body */}
      <path d="M 155 380 L 140 172 L 260 172 L 245 380 Z" fill={f('tower')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('tower')} style={{cursor:'pointer'}}/>
      {/* Stripe bands */}
      {[215,258,302,345].map((y,i)=>(
        <path key={i} d={`M ${155+(380-y)*0.094} ${y} L ${245-(380-y)*0.094} ${y} L ${245-(380-y+40)*0.094} ${y+40} L ${155+(380-y+40)*0.094} ${y+40} Z`} fill={f('stripes')} stroke="#1a1a1a" strokeWidth="7" onClick={() => onRegionClick?.('stripes')} style={{cursor:'pointer'}}/>
      ))}
      {/* Lamp room */}
      <rect x="142" y="130" width="116" height="48" rx="8" fill={f('lamp')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('lamp')} style={{cursor:'pointer'}}/>
      {/* Roof */}
      <path d="M 130 132 L 200 80 L 270 132 Z" fill={f('roof')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('roof')} style={{cursor:'pointer'}}/>
      {/* Light beams */}
      <path d="M 270 155 L 355 115 M 270 155 L 358 155 M 270 155 L 352 195" fill="none" stroke={f('lamp')} strokeWidth="8" strokeLinecap="round" onClick={() => onRegionClick?.('lamp')} style={{cursor:'pointer'}}/>
      {/* Door */}
      <path d="M 185 380 L 185 332 C 185 322 192 315 200 315 C 208 315 215 322 215 332 L 215 380 Z" fill={f('door')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('door')} style={{cursor:'pointer'}}/>
      {/* Windows */}
      {[[200,268],[200,220]].map(([cx,cy],i)=>(
        <rect key={i} x={cx-16} y={cy-18} width="32" height="36" rx="14" fill={f('window')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('window')} style={{cursor:'pointer'}}/>
      ))}
    </svg>
  );
}

// ─── 10. PIANO ────────────────────────────────────────────────────────────────
export function Piano({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Body */}
      <rect x="38" y="178" width="324" height="235" rx="18" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Lid */}
      <rect x="38" y="148" width="324" height="38" rx="10" fill={f('lid')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('lid')} style={{cursor:'pointer'}}/>
      {/* Legs */}
      <rect x="72" y="408" width="38" height="42" rx="14" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <rect x="290" y="408" width="38" height="42" rx="14" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* White keys */}
      {Array.from({length:8},(_,i)=>(
        <rect key={i} x={52+i*38} y="216" width="32" height="125" rx="8" fill={f('whiteKeys')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('whiteKeys')} style={{cursor:'pointer'}}/>
      ))}
      {/* Black keys */}
      {[0,1,3,4,5].map((pos,i)=>(
        <rect key={i} x={72+pos*38} y="216" width="22" height="78" rx="6" fill={f('blackKeys')} stroke="#1a1a1a" strokeWidth="7" onClick={() => onRegionClick?.('blackKeys')} style={{cursor:'pointer'}}/>
      ))}
      {/* Music notes */}
      <text x="168" y="395" fontSize="42" fill={f('lid')} stroke="#1a1a1a" strokeWidth="3" style={{userSelect:'none',pointerEvents:'none'}}>♪</text>
      <text x="218" y="385" fontSize="36" fill={f('lid')} stroke="#1a1a1a" strokeWidth="3" style={{userSelect:'none',pointerEvents:'none'}}>♫</text>
    </svg>
  );
}

// ─── 11. CROWN (SIMPLE ROYAL) ─────────────────────────────────────────────────
export function SimpleCrown({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Base */}
      <path d="M 55 365 L 55 425 C 55 438 66 448 80 448 L 320 448 C 334 448 345 438 345 425 L 345 365 Z" fill={f('base')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('base')} style={{cursor:'pointer'}}/>
      {/* Spiky crown top */}
      <path d="M 55 365 L 55 215 L 122 295 L 168 148 L 200 258 L 232 148 L 278 295 L 345 215 L 345 365 Z" fill={f('crown')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('crown')} style={{cursor:'pointer'}}/>
      {/* Gems on tips */}
      <circle cx="168" cy="145" r="26" fill={f('gems')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('gems')} style={{cursor:'pointer'}}/>
      <circle cx="200" cy="256" r="22" fill={f('gems')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('gems')} style={{cursor:'pointer'}}/>
      <circle cx="232" cy="145" r="26" fill={f('gems')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('gems')} style={{cursor:'pointer'}}/>
      {/* Base gems */}
      {[95,145,200,255,305].map((cx,i)=>(
        <circle key={i} cx={cx} cy="406" r="18" fill={f('gems')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('gems')} style={{cursor:'pointer'}}/>
      ))}
      {/* Gem crosses */}
      {[[168,145],[232,145],[200,256]].map(([cx,cy],i)=>(
        <g key={i}>
          <line x1={cx-12} y1={cy} x2={cx+12} y2={cy} stroke="#1a1a1a" strokeWidth="5"/>
          <line x1={cx} y1={cy-12} x2={cx} y2={cy+12} stroke="#1a1a1a" strokeWidth="5"/>
        </g>
      ))}
    </svg>
  );
}

// ─── 12. DRUM ─────────────────────────────────────────────────────────────────
export function Drum({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Drumsticks */}
      <path d="M 145 155 C 130 135 115 112 105 90" fill="none" stroke="#1a1a1a" strokeWidth="12" strokeLinecap="round" onClick={() => onRegionClick?.('sticks')} style={{cursor:'pointer'}}/>
      <path d="M 145 155 C 130 135 115 112 105 90" fill="none" stroke={f('sticks')} strokeWidth="5"/>
      <circle cx="103" cy="87" r="16" fill={f('sticks')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('sticks')} style={{cursor:'pointer'}}/>
      <path d="M 255 155 C 270 135 285 112 295 90" fill="none" stroke="#1a1a1a" strokeWidth="12" strokeLinecap="round" onClick={() => onRegionClick?.('sticks')} style={{cursor:'pointer'}}/>
      <path d="M 255 155 C 270 135 285 112 295 90" fill="none" stroke={f('sticks')} strokeWidth="5"/>
      <circle cx="297" cy="87" r="16" fill={f('sticks')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('sticks')} style={{cursor:'pointer'}}/>
      {/* Drum body */}
      <ellipse cx="200" cy="195" rx="162" ry="38" fill={f('top')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('top')} style={{cursor:'pointer'}}/>
      <path d="M 38 195 L 38 375 C 38 395 112 415 200 415 C 288 415 362 395 362 375 L 362 195 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Decorative bands */}
      <path d="M 38 255 C 38 270 112 285 200 285 C 288 285 362 270 362 255" fill="none" stroke="#1a1a1a" strokeWidth="8"/>
      <path d="M 38 315 C 38 330 112 345 200 345 C 288 345 362 330 362 315" fill="none" stroke="#1a1a1a" strokeWidth="8"/>
      {/* Lug bolts */}
      {[0,45,90,135,180,225,270,315].map((angle,i)=>{
        const rad=angle*Math.PI/180;
        return <circle key={i} cx={(200+158*Math.cos(rad)).toFixed(1)} cy={(225+36*Math.sin(rad)).toFixed(1)} r="9" fill={f('top')} stroke="#1a1a1a" strokeWidth="7" onClick={() => onRegionClick?.('top')} style={{cursor:'pointer'}}/>;
      })}
      {/* Bottom ellipse */}
      <ellipse cx="200" cy="375" rx="162" ry="38" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Zigzag decorative stripe */}
      <path d="M 38 285 C 60 275 82 295 105 285 C 128 275 150 295 173 285 C 196 275 218 295 242 285 C 265 275 288 295 310 285 C 332 275 348 285 362 285" fill="none" stroke={f('stripe')} strokeWidth="12" strokeLinecap="round" onClick={() => onRegionClick?.('stripe')} style={{cursor:'pointer'}}/>
      <path d="M 38 285 C 60 275 82 295 105 285 C 128 275 150 295 173 285 C 196 275 218 295 242 285 C 265 275 288 295 310 285 C 332 275 348 285 362 285" fill="none" stroke="#1a1a1a" strokeWidth="5"/>
    </svg>
  );
}

// ─── 13. WATERING CAN ─────────────────────────────────────────────────────────
export function WateringCan({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Water drops */}
      {[[268,88],[288,110],[308,92],[278,130],[298,148]].map(([cx,cy],i)=>(
        <path key={i} d={`M ${cx} ${cy+18} C ${cx-12} ${cy+8} ${cx-12} ${cy-8} ${cx} ${cy-18} C ${cx+12} ${cy-8} ${cx+12} ${cy+8} ${cx} ${cy+18}`} fill={f('water')} stroke="#1a1a1a" strokeWidth="7" strokeLinejoin="round" onClick={() => onRegionClick?.('water')} style={{cursor:'pointer'}}/>
      ))}
      {/* Spout */}
      <path d="M 255 198 C 268 175 278 158 285 148 C 295 135 308 128 318 132 C 328 136 325 150 315 155 C 308 158 298 162 288 172 C 278 182 270 195 262 208 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Spout nozzle */}
      <ellipse cx="305" cy="140" rx="18" ry="12" transform="rotate(30 305 140)" fill={f('body')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Body */}
      <path d="M 55 278 C 52 238 68 205 95 195 L 258 195 C 278 205 292 235 288 278 C 282 328 258 385 200 405 C 142 385 60 328 55 278 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Handle */}
      <path d="M 95 195 C 78 178 68 155 72 132 C 75 112 90 102 108 105 C 125 108 130 125 125 142 C 120 158 108 170 95 178" fill="none" stroke="#1a1a1a" strokeWidth="18" strokeLinecap="round" onClick={() => onRegionClick?.('handle')} style={{cursor:'pointer'}}/>
      <path d="M 95 195 C 78 178 68 155 72 132 C 75 112 90 102 108 105 C 125 108 130 125 125 142 C 120 158 108 170 95 178" fill="none" stroke={f('handle')} strokeWidth="8"/>
      {/* Decorative flowers */}
      {[[148,285],[200,268],[148,335]].map(([cx,cy],i)=>(
        <g key={i}>
          {[0,72,144,216,288].map((a,j)=>(
            <circle key={j} cx={(cx+15*Math.cos(a*Math.PI/180)).toFixed(1)} cy={(cy+15*Math.sin(a*Math.PI/180)).toFixed(1)} r="8" fill={f('flowers')} stroke="#1a1a1a" strokeWidth="5" onClick={() => onRegionClick?.('flowers')} style={{cursor:'pointer'}}/>
          ))}
          <circle cx={cx} cy={cy} r="8" fill="white" stroke="#1a1a1a" strokeWidth="5"/>
        </g>
      ))}
    </svg>
  );
}

// ─── 14. ROBOT ────────────────────────────────────────────────────────────────
export function Robot({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Legs */}
      <rect x="138" y="348" width="52" height="82" rx="18" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <rect x="210" y="348" width="52" height="82" rx="18" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Feet */}
      <rect x="128" y="412" width="70" height="30" rx="14" fill={f('details')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('details')} style={{cursor:'pointer'}}/>
      <rect x="202" y="412" width="70" height="30" rx="14" fill={f('details')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('details')} style={{cursor:'pointer'}}/>
      {/* Arms */}
      <rect x="52" y="188" width="52" height="125" rx="22" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <rect x="296" y="188" width="52" height="125" rx="22" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Claws */}
      <ellipse cx="78" cy="322" rx="30" ry="20" fill={f('details')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('details')} style={{cursor:'pointer'}}/>
      <ellipse cx="322" cy="322" rx="30" ry="20" fill={f('details')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('details')} style={{cursor:'pointer'}}/>
      {/* Body */}
      <rect x="102" y="178" width="196" height="175" rx="22" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Body details */}
      <rect x="130" y="225" width="58" height="42" rx="10" fill={f('screen')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('screen')} style={{cursor:'pointer'}}/>
      <circle cx="255" cy="246" r="22" fill={f('details')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('details')} style={{cursor:'pointer'}}/>
      {[145,175,205,230].map((x,i)=>(
        <circle key={i} cx={x} cy="310" r="10" fill={f('details')} stroke="#1a1a1a" strokeWidth="7" onClick={() => onRegionClick?.('details')} style={{cursor:'pointer'}}/>
      ))}
      {/* Neck */}
      <rect x="175" y="148" width="50" height="35" rx="10" fill={f('body')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Head */}
      <rect x="118" y="68" width="164" height="88" rx="22" fill={f('head')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('head')} style={{cursor:'pointer'}}/>
      {/* Antenna */}
      <line x1="200" y1="68" x2="200" y2="42" stroke="#1a1a1a" strokeWidth="9" strokeLinecap="round"/>
      <circle cx="200" cy="36" r="14" fill={f('details')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('details')} style={{cursor:'pointer'}}/>
      {/* Eyes */}
      <rect x="138" y="88" width="42" height="38" rx="10" fill={f('eyes')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('eyes')} style={{cursor:'pointer'}}/>
      <rect x="220" y="88" width="42" height="38" rx="10" fill={f('eyes')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('eyes')} style={{cursor:'pointer'}}/>
      <circle cx="159" cy="107" r="10" fill="#1a1a1a"/>
      <circle cx="241" cy="107" r="10" fill="#1a1a1a"/>
      <circle cx="155" cy="103" r="4" fill="white"/>
      <circle cx="237" cy="103" r="4" fill="white"/>
      {/* Mouth grid */}
      <rect x="158" y="136" width="84" height="22" rx="8" fill={f('eyes')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('eyes')} style={{cursor:'pointer'}}/>
      {[172,186,200,214,228].map((x,i)=>(
        <line key={i} x1={x} y1="136" x2={x} y2="158" stroke="#1a1a1a" strokeWidth="5"/>
      ))}
    </svg>
  );
}

// ─── 15. BOAT / SAILBOAT ──────────────────────────────────────────────────────
export function Sailboat({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Water waves */}
      <path d="M 28 368 C 70 352 115 360 155 355 C 195 350 235 358 275 352 C 315 346 348 355 372 368 C 340 388 270 400 200 400 C 130 400 60 388 28 368 Z" fill={f('water')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('water')} style={{cursor:'pointer'}}/>
      {/* Wave lines */}
      <path d="M 48 378 C 88 366 128 374 168 368" fill="none" stroke="#1a1a1a" strokeWidth="6" strokeLinecap="round"/>
      <path d="M 230 372 C 270 360 310 368 350 362" fill="none" stroke="#1a1a1a" strokeWidth="6" strokeLinecap="round"/>
      {/* Hull */}
      <path d="M 68 342 L 52 385 C 52 398 118 412 200 412 C 282 412 348 398 348 385 L 332 342 Z" fill={f('hull')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('hull')} style={{cursor:'pointer'}}/>
      {/* Deck stripe */}
      <path d="M 68 342 L 332 342" stroke="#1a1a1a" strokeWidth="9" strokeLinecap="round"/>
      {/* Hull windows */}
      {[118,168,232,282].map((cx,i)=>(
        <circle key={i} cx={cx} cy="370" r="14" fill="white" stroke="#1a1a1a" strokeWidth="7"/>
      ))}
      {/* Mast */}
      <line x1="200" y1="342" x2="200" y2="100" stroke="#1a1a1a" strokeWidth="12" strokeLinecap="round"/>
      {/* Main sail */}
      <path d="M 200 110 L 200 322 L 82 265 Z" fill={f('sail')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('sail')} style={{cursor:'pointer'}}/>
      {/* Front sail */}
      <path d="M 200 118 L 200 280 L 302 200 Z" fill={f('sail2')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('sail2')} style={{cursor:'pointer'}}/>
      {/* Flag */}
      <path d="M 200 100 L 232 118 L 200 135 Z" fill={f('flag')} stroke="#1a1a1a" strokeWidth="8" strokeLinejoin="round" onClick={() => onRegionClick?.('flag')} style={{cursor:'pointer'}}/>
    </svg>
  );
}

// ─── 16. TEDDY BEAR ───────────────────────────────────────────────────────────
export function TeddyBear({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Body */}
      <ellipse cx="200" cy="318" rx="120" ry="108" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Belly */}
      <ellipse cx="200" cy="332" rx="70" ry="78" fill={f('belly')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('belly')} style={{cursor:'pointer'}}/>
      {/* Arms */}
      <ellipse cx="88" cy="298" rx="42" ry="62" transform="rotate(-20 88 298)" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <ellipse cx="312" cy="298" rx="42" ry="62" transform="rotate(20 312 298)" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Legs */}
      <ellipse cx="148" cy="418" rx="52" ry="30" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <ellipse cx="252" cy="418" rx="52" ry="30" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Head */}
      <circle cx="200" cy="192" r="90" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Ears */}
      <circle cx="138" cy="120" r="38" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <circle cx="262" cy="120" r="38" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <circle cx="138" cy="120" r="22" fill={f('belly')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('belly')} style={{cursor:'pointer'}}/>
      <circle cx="262" cy="120" r="22" fill={f('belly')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('belly')} style={{cursor:'pointer'}}/>
      {/* Eyes */}
      <circle cx="172" cy="178" r="20" fill={f('eyes')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('eyes')} style={{cursor:'pointer'}}/>
      <circle cx="228" cy="178" r="20" fill={f('eyes')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('eyes')} style={{cursor:'pointer'}}/>
      <circle cx="172" cy="178" r="10" fill="#1a1a1a"/>
      <circle cx="228" cy="178" r="10" fill="#1a1a1a"/>
      <circle cx="167" cy="173" r="4" fill="white"/>
      <circle cx="223" cy="173" r="4" fill="white"/>
      {/* Nose */}
      <ellipse cx="200" cy="215" rx="20" ry="14" fill="#1a1a1a" stroke="#1a1a1a" strokeWidth="8"/>
      <circle cx="194" cy="211" r="5" fill="white"/>
      {/* Mouth */}
      <path d="M 200 229 C 186 242 175 244 168 238" fill="none" stroke="#1a1a1a" strokeWidth="7" strokeLinecap="round"/>
      <path d="M 200 229 C 214 242 225 244 232 238" fill="none" stroke="#1a1a1a" strokeWidth="7" strokeLinecap="round"/>
      {/* Bow tie */}
      <path d="M 178 290 C 168 280 158 280 158 290 C 158 300 168 300 178 290 Z" fill={f('bow')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('bow')} style={{cursor:'pointer'}}/>
      <path d="M 222 290 C 232 280 242 280 242 290 C 242 300 232 300 222 290 Z" fill={f('bow')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('bow')} style={{cursor:'pointer'}}/>
      <circle cx="200" cy="290" r="12" fill={f('bow')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('bow')} style={{cursor:'pointer'}}/>
    </svg>
  );
}

// ─── 17. BUCKET AND SPADE ─────────────────────────────────────────────────────
export function BucketSpade({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Sand */}
      <ellipse cx="200" cy="428" rx="175" ry="22" fill={f('sand')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('sand')} style={{cursor:'pointer'}}/>
      {/* Spade handle */}
      <rect x="290" y="115" width="22" height="192" rx="10" fill={f('spade')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('spade')} style={{cursor:'pointer'}}/>
      {/* Spade head */}
      <path d="M 268 305 L 258 355 C 255 368 265 378 280 378 L 324 378 C 338 378 348 368 345 355 L 335 305 Z" fill={f('spade')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('spade')} style={{cursor:'pointer'}}/>
      <ellipse cx="302" cy="305" rx="38" ry="15" fill={f('spade')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('spade')} style={{cursor:'pointer'}}/>
      {/* Spade T-grip */}
      <rect x="272" y="108" width="62" height="22" rx="11" fill={f('spade')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('spade')} style={{cursor:'pointer'}}/>
      {/* Bucket body */}
      <path d="M 85 215 L 72 395 C 72 412 115 425 165 425 C 215 425 258 412 258 395 L 245 215 Z" fill={f('bucket')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('bucket')} style={{cursor:'pointer'}}/>
      {/* Bucket top ellipse */}
      <ellipse cx="165" cy="215" rx="82" ry="28" fill={f('bucket')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('bucket')} style={{cursor:'pointer'}}/>
      {/* Handle arc */}
      <path d="M 108 215 C 108 178 135 155 165 155 C 195 155 222 178 222 215" fill="none" stroke="#1a1a1a" strokeWidth="14" strokeLinecap="round" onClick={() => onRegionClick?.('handle')} style={{cursor:'pointer'}}/>
      <path d="M 108 215 C 108 178 135 155 165 155 C 195 155 222 178 222 215" fill="none" stroke={f('handle')} strokeWidth="5"/>
      {/* Bucket stripe */}
      <path d="M 80 295 C 80 310 115 322 165 322 C 215 322 250 310 252 295" fill="none" stroke="#1a1a1a" strokeWidth="8" strokeLinecap="round"/>
      {/* Stars on bucket */}
      {[[132,260],[165,260],[198,260]].map(([cx,cy],i)=>(
        <text key={i} x={cx} y={cy} textAnchor="middle" fontSize="22" fill={f('stars')} stroke="#1a1a1a" strokeWidth="3" style={{userSelect:'none',pointerEvents:'none'}} onClick={() => onRegionClick?.('stars')}>★</text>
      ))}
    </svg>
  );
}

// ─── 18. MAGNIFYING GLASS ─────────────────────────────────────────────────────
export function MagnifyingGlass({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Handle */}
      <path d="M 248 295 C 265 315 285 340 308 368 C 320 383 322 402 310 412 C 298 422 280 418 268 405 C 245 380 222 352 205 332" fill="none" stroke="#1a1a1a" strokeWidth="30" strokeLinecap="round" onClick={() => onRegionClick?.('handle')} style={{cursor:'pointer'}}/>
      <path d="M 248 295 C 265 315 285 340 308 368 C 320 383 322 402 310 412 C 298 422 280 418 268 405 C 245 380 222 352 205 332" fill="none" stroke={f('handle')} strokeWidth="16"/>
      {/* Lens ring */}
      <circle cx="165" cy="188" r="145" fill={f('ring')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('ring')} style={{cursor:'pointer'}}/>
      {/* Lens */}
      <circle cx="165" cy="188" r="122" fill={f('lens')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('lens')} style={{cursor:'pointer'}}/>
      {/* Shine */}
      <ellipse cx="125" cy="148" rx="28" ry="42" transform="rotate(-20 125 148)" fill="white" opacity="0.4" onClick={() => onRegionClick?.('lens')} style={{cursor:'pointer'}}/>
    </svg>
  );
}

// ─── 19. TROPHY ───────────────────────────────────────────────────────────────
export function Trophy({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Base plate */}
      <rect x="105" y="398" width="190" height="38" rx="12" fill={f('base')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('base')} style={{cursor:'pointer'}}/>
      {/* Stem */}
      <rect x="172" y="342" width="56" height="62" rx="10" fill={f('base')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('base')} style={{cursor:'pointer'}}/>
      {/* Cup body */}
      <path d="M 95 148 C 88 215 108 288 148 320 C 162 330 180 338 200 340 C 220 338 238 330 252 320 C 292 288 312 215 305 148 Z" fill={f('cup')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('cup')} style={{cursor:'pointer'}}/>
      {/* Handles */}
      <path d="M 95 148 C 68 148 48 165 48 188 C 48 212 68 228 95 225" fill="none" stroke="#1a1a1a" strokeWidth="20" strokeLinecap="round" onClick={() => onRegionClick?.('handles')} style={{cursor:'pointer'}}/>
      <path d="M 95 148 C 68 148 48 165 48 188 C 48 212 68 228 95 225" fill="none" stroke={f('handles')} strokeWidth="9"/>
      <path d="M 305 148 C 332 148 352 165 352 188 C 352 212 332 228 305 225" fill="none" stroke="#1a1a1a" strokeWidth="20" strokeLinecap="round" onClick={() => onRegionClick?.('handles')} style={{cursor:'pointer'}}/>
      <path d="M 305 148 C 332 148 352 165 352 188 C 352 212 332 228 305 225" fill="none" stroke={f('handles')} strokeWidth="9"/>
      {/* Lid / top */}
      <ellipse cx="200" cy="148" rx="110" ry="28" fill={f('cup')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('cup')} style={{cursor:'pointer'}}/>
      {/* Star on cup */}
      <text x="200" y="262" textAnchor="middle" fontSize="72" fill={f('star')} stroke="#1a1a1a" strokeWidth="4" style={{userSelect:'none',pointerEvents:'none'}} onClick={() => onRegionClick?.('star')}>★</text>
      {/* Shine */}
      <ellipse cx="155" cy="205" rx="16" ry="42" transform="rotate(-15 155 205)" fill="white" opacity="0.3"/>
    </svg>
  );
}

// ─── 20. ANCHOR ───────────────────────────────────────────────────────────────
export function Anchor({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Rope curl around shank */}
      <path d="M 200 208 C 228 228 240 260 232 290" fill="none" stroke="#1a1a1a" strokeWidth="9" strokeLinecap="round" onClick={() => onRegionClick?.('rope')} style={{cursor:'pointer'}}/>
      {/* Main shank */}
      <line x1="200" y1="115" x2="200" y2="385" stroke="#1a1a1a" strokeWidth="22" strokeLinecap="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <line x1="200" y1="115" x2="200" y2="385" stroke={f('body')} strokeWidth="10"/>
      {/* Crossbar */}
      <line x1="100" y1="155" x2="300" y2="155" stroke="#1a1a1a" strokeWidth="22" strokeLinecap="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <line x1="100" y1="155" x2="300" y2="155" stroke={f('body')} strokeWidth="10"/>
      {/* Crossbar balls */}
      <circle cx="100" cy="155" r="20" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <circle cx="300" cy="155" r="20" fill={f('body')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Ring at top */}
      <circle cx="200" cy="105" r="38" fill="none" stroke="#1a1a1a" strokeWidth="18" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <circle cx="200" cy="105" r="38" fill="none" stroke={f('body')} strokeWidth="6"/>
      {/* Flukes at bottom */}
      <path d="M 200 385 C 175 385 115 395 88 418 C 98 432 122 435 145 425 C 160 418 180 405 200 405 Z" fill={f('flukes')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('flukes')} style={{cursor:'pointer'}}/>
      <path d="M 200 385 C 225 385 285 395 312 418 C 302 432 278 435 255 425 C 240 418 220 405 200 405 Z" fill={f('flukes')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('flukes')} style={{cursor:'pointer'}}/>
    </svg>
  );
}

// ─── 21. PRESENT / GIFT BOX ───────────────────────────────────────────────────
export function GiftBox({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Box body */}
      <rect x="55" y="228" width="290" height="200" rx="12" fill={f('box')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('box')} style={{cursor:'pointer'}}/>
      {/* Lid */}
      <rect x="42" y="188" width="316" height="48" rx="12" fill={f('lid')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('lid')} style={{cursor:'pointer'}}/>
      {/* Vertical ribbon on box */}
      <rect x="182" y="228" width="36" height="200" rx="0" fill={f('ribbon')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('ribbon')} style={{cursor:'pointer'}}/>
      {/* Horizontal ribbon on box */}
      <rect x="55" y="308" width="290" height="36" rx="0" fill={f('ribbon')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('ribbon')} style={{cursor:'pointer'}}/>
      {/* Vertical ribbon on lid */}
      <rect x="182" y="188" width="36" height="48" rx="0" fill={f('ribbon')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('ribbon')} style={{cursor:'pointer'}}/>
      {/* Bow loops */}
      <path d="M 200 188 C 175 165 148 155 140 165 C 132 175 148 192 175 192 C 188 192 200 188 200 188 Z" fill={f('bow')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round" onClick={() => onRegionClick?.('bow')} style={{cursor:'pointer'}}/>
      <path d="M 200 188 C 225 165 252 155 260 165 C 268 175 252 192 225 192 C 212 192 200 188 200 188 Z" fill={f('bow')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round" onClick={() => onRegionClick?.('bow')} style={{cursor:'pointer'}}/>
      {/* Bow tails */}
      <path d="M 192 190 C 180 200 168 210 158 218" fill="none" stroke="#1a1a1a" strokeWidth="12" strokeLinecap="round" onClick={() => onRegionClick?.('bow')} style={{cursor:'pointer'}}/>
      <path d="M 192 190 C 180 200 168 210 158 218" fill="none" stroke={f('bow')} strokeWidth="5"/>
      <path d="M 208 190 C 220 200 232 210 242 218" fill="none" stroke="#1a1a1a" strokeWidth="12" strokeLinecap="round" onClick={() => onRegionClick?.('bow')} style={{cursor:'pointer'}}/>
      <path d="M 208 190 C 220 200 232 210 242 218" fill="none" stroke={f('bow')} strokeWidth="5"/>
      <circle cx="200" cy="190" r="16" fill={f('bow')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('bow')} style={{cursor:'pointer'}}/>
      {/* Stars on box */}
      {[[110,285],[310,285],[110,375],[310,375]].map(([cx,cy],i)=>(
        <text key={i} x={cx} y={cy} textAnchor="middle" fontSize="28" fill={f('lid')} style={{userSelect:'none',pointerEvents:'none'}}>★</text>
      ))}
    </svg>
  );
}

// ─── 22. TELEPHONE ────────────────────────────────────────────────────────────
export function Telephone({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Body */}
      <rect x="88" y="148" width="224" height="282" rx="32" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Screen */}
      <rect x="108" y="170" width="184" height="148" rx="18" fill={f('screen')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('screen')} style={{cursor:'pointer'}}/>
      {/* Speaker */}
      <rect x="170" y="158" width="60" height="14" rx="7" fill={f('button')} stroke="#1a1a1a" strokeWidth="7" onClick={() => onRegionClick?.('button')} style={{cursor:'pointer'}}/>
      {/* Home button */}
      <circle cx="200" cy="392" r="24" fill={f('button')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('button')} style={{cursor:'pointer'}}/>
      <circle cx="200" cy="392" r="14" fill={f('body')} stroke="#1a1a1a" strokeWidth="7" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* App icons on screen */}
      {[[132,205],[175,205],[218,205],[261,205],[132,248],[175,248],[218,248],[261,248],[132,291],[175,291],[218,291],[261,291]].map(([cx,cy],i)=>(
        <rect key={i} x={cx-17} y={cy-17} width="34" height="34" rx="8" fill={f('apps')} stroke="#1a1a1a" strokeWidth="6" onClick={() => onRegionClick?.('apps')} style={{cursor:'pointer'}}/>
      ))}
    </svg>
  );
}

// ─── 23. PENCIL ───────────────────────────────────────────────────────────────
export function Pencil({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Eraser */}
      <rect x="148" y="52" width="104" height="52" rx="14" fill={f('eraser')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('eraser')} style={{cursor:'pointer'}}/>
      {/* Ferrule band */}
      <rect x="148" y="100" width="104" height="28" rx="5" fill={f('ferrule')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('ferrule')} style={{cursor:'pointer'}}/>
      {/* Body */}
      <rect x="148" y="125" width="104" height="248" rx="0" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Side facets hint */}
      <line x1="172" y1="125" x2="172" y2="372" stroke="#1a1a1a" strokeWidth="5"/>
      <line x1="228" y1="125" x2="228" y2="372" stroke="#1a1a1a" strokeWidth="5"/>
      {/* Wooden tip */}
      <path d="M 148 372 L 200 438 L 252 372 Z" fill={f('wood')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('wood')} style={{cursor:'pointer'}}/>
      {/* Lead tip */}
      <path d="M 184 415 L 200 438 L 216 415 Z" fill={f('lead')} stroke="#1a1a1a" strokeWidth="8" strokeLinejoin="round" onClick={() => onRegionClick?.('lead')} style={{cursor:'pointer'}}/>
    </svg>
  );
}

// ─── 24. FOOTBALL ─────────────────────────────────────────────────────────────
export function Football({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Ball */}
      <circle cx="200" cy="230" r="185" fill={f('ball')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('ball')} style={{cursor:'pointer'}}/>
      {/* Pentagon patches */}
      {[
        [200,145,0],[200,315,0],[102,200,-36],[298,200,36],
        [148,115,15],[252,115,-15],[140,338,20],[260,338,-20],
        [78,268,-45],[322,268,45],
      ].map(([cx,cy,rot],i)=>{
        const s=38;
        const pts=Array.from({length:5},(_,j)=>{
          const a=(j*72-90+rot)*Math.PI/180;
          return `${cx+s*Math.cos(a)},${cy+s*Math.sin(a)}`;
        }).join(' ');
        return <polygon key={i} points={pts} fill={f('patches')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('patches')} style={{cursor:'pointer'}}/>;
      })}
      {/* Shine */}
      <ellipse cx="148" cy="162" rx="35" ry="50" fill="white" opacity="0.25"/>
    </svg>
  );
}

// ─── 25. LOLLIPOP ─────────────────────────────────────────────────────────────
export function Lollipop({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Stick */}
      <path d="M 200 310 C 205 345 210 380 218 415" fill="none" stroke="#1a1a1a" strokeWidth="18" strokeLinecap="round" onClick={() => onRegionClick?.('stick')} style={{cursor:'pointer'}}/>
      <path d="M 200 310 C 205 345 210 380 218 415" fill="none" stroke={f('stick')} strokeWidth="7"/>
      {/* Candy swirl layers */}
      <circle cx="200" cy="185" r="135" fill={f('outer')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('outer')} style={{cursor:'pointer'}}/>
      <circle cx="200" cy="185" r="100" fill={f('mid')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('mid')} style={{cursor:'pointer'}}/>
      <circle cx="200" cy="185" r="65" fill={f('inner')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('inner')} style={{cursor:'pointer'}}/>
      <circle cx="200" cy="185" r="30" fill={f('center')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('center')} style={{cursor:'pointer'}}/>
      {/* Swirl lines */}
      <path d="M 200 55 C 245 60 278 100 280 145" fill="none" stroke="#1a1a1a" strokeWidth="7" strokeLinecap="round"/>
      <path d="M 200 85 C 235 90 258 120 258 158" fill="none" stroke="#1a1a1a" strokeWidth="6" strokeLinecap="round"/>
      {/* Shine */}
      <ellipse cx="155" cy="135" rx="28" ry="42" fill="white" opacity="0.3"/>
    </svg>
  );
}

// ─── 26. CLOCK ────────────────────────────────────────────────────────────────
export function Clock({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Bell left */}
      <ellipse cx="118" cy="92" rx="42" ry="52" fill={f('bells')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('bells')} style={{cursor:'pointer'}}/>
      {/* Bell right */}
      <ellipse cx="282" cy="92" rx="42" ry="52" fill={f('bells')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('bells')} style={{cursor:'pointer'}}/>
      {/* Hammer */}
      <ellipse cx="200" cy="98" rx="22" ry="16" fill={f('bells')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('bells')} style={{cursor:'pointer'}}/>
      {/* Feet */}
      <ellipse cx="148" cy="428" rx="38" ry="16" fill={f('bells')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('bells')} style={{cursor:'pointer'}}/>
      <ellipse cx="252" cy="428" rx="38" ry="16" fill={f('bells')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('bells')} style={{cursor:'pointer'}}/>
      {/* Face */}
      <circle cx="200" cy="262" r="172" fill={f('face')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('face')} style={{cursor:'pointer'}}/>
      {/* Face inner ring */}
      <circle cx="200" cy="262" r="148" fill={f('face')} stroke="#1a1a1a" strokeWidth="7" onClick={() => onRegionClick?.('face')} style={{cursor:'pointer'}}/>
      {/* Hour markers */}
      {Array.from({length:12},(_,i)=>{
        const a=(i*30-90)*Math.PI/180;
        const r1=128, r2=148;
        return <line key={i} x1={(200+r1*Math.cos(a)).toFixed(1)} y1={(262+r1*Math.sin(a)).toFixed(1)} x2={(200+r2*Math.cos(a)).toFixed(1)} y2={(262+r2*Math.sin(a)).toFixed(1)} stroke="#1a1a1a" strokeWidth={i%3===0?10:6} strokeLinecap="round"/>;
      })}
      {/* Hour hand */}
      <line x1="200" y1="262" x2="200" y2="168" stroke="#1a1a1a" strokeWidth="12" strokeLinecap="round"/>
      {/* Minute hand */}
      <line x1="200" y1="262" x2="272" y2="220" stroke="#1a1a1a" strokeWidth="9" strokeLinecap="round"/>
      {/* Center dot */}
      <circle cx="200" cy="262" r="14" fill={f('bells')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('bells')} style={{cursor:'pointer'}}/>
    </svg>
  );
}

// ─── 27. BICYCLE ──────────────────────────────────────────────────────────────
export function Bicycle({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Left wheel */}
      <circle cx="105" cy="318" r="108" fill={f('wheels')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('wheels')} style={{cursor:'pointer'}}/>
      <circle cx="105" cy="318" r="80" fill="white" stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('wheels')} style={{cursor:'pointer'}}/>
      {/* Spokes left */}
      {Array.from({length:8},(_,i)=>{
        const a=i*45*Math.PI/180;
        return <line key={i} x1="105" y1="318" x2={(105+78*Math.cos(a)).toFixed(1)} y2={(318+78*Math.sin(a)).toFixed(1)} stroke="#1a1a1a" strokeWidth="5"/>;
      })}
      <circle cx="105" cy="318" r="14" fill="#1a1a1a"/>
      {/* Right wheel */}
      <circle cx="295" cy="318" r="108" fill={f('wheels')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('wheels')} style={{cursor:'pointer'}}/>
      <circle cx="295" cy="318" r="80" fill="white" stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('wheels')} style={{cursor:'pointer'}}/>
      {Array.from({length:8},(_,i)=>{
        const a=i*45*Math.PI/180;
        return <line key={i} x1="295" y1="318" x2={(295+78*Math.cos(a)).toFixed(1)} y2={(318+78*Math.sin(a)).toFixed(1)} stroke="#1a1a1a" strokeWidth="5"/>;
      })}
      <circle cx="295" cy="318" r="14" fill="#1a1a1a"/>
      {/* Frame */}
      <line x1="200" y1="225" x2="105" y2="318" stroke="#1a1a1a" strokeWidth="16" strokeLinecap="round" onClick={() => onRegionClick?.('frame')} style={{cursor:'pointer'}}/>
      <line x1="200" y1="225" x2="200" y2="225" stroke={f('frame')} strokeWidth="6"/>
      <line x1="200" y1="225" x2="295" y2="318" stroke="#1a1a1a" strokeWidth="16" strokeLinecap="round" onClick={() => onRegionClick?.('frame')} style={{cursor:'pointer'}}/>
      <line x1="175" y1="198" x2="105" y2="318" stroke="#1a1a1a" strokeWidth="16" strokeLinecap="round" onClick={() => onRegionClick?.('frame')} style={{cursor:'pointer'}}/>
      <line x1="175" y1="198" x2="295" y2="318" stroke="#1a1a1a" strokeWidth="16" strokeLinecap="round" onClick={() => onRegionClick?.('frame')} style={{cursor:'pointer'}}/>
      {/* Color over frame */}
      <line x1="200" y1="225" x2="105" y2="318" stroke={f('frame')} strokeWidth="7"/>
      <line x1="200" y1="225" x2="295" y2="318" stroke={f('frame')} strokeWidth="7"/>
      <line x1="175" y1="198" x2="105" y2="318" stroke={f('frame')} strokeWidth="7"/>
      <line x1="175" y1="198" x2="295" y2="318" stroke={f('frame')} strokeWidth="7"/>
      {/* Seat post */}
      <line x1="175" y1="198" x2="165" y2="152" stroke="#1a1a1a" strokeWidth="16" strokeLinecap="round"/>
      <line x1="175" y1="198" x2="165" y2="152" stroke={f('frame')} strokeWidth="6"/>
      {/* Seat */}
      <rect x="128" y="138" width="82" height="20" rx="10" fill={f('seat')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('seat')} style={{cursor:'pointer'}}/>
      {/* Handlebar post */}
      <line x1="200" y1="225" x2="212" y2="168" stroke="#1a1a1a" strokeWidth="14" strokeLinecap="round"/>
      <line x1="200" y1="225" x2="212" y2="168" stroke={f('frame')} strokeWidth="6"/>
      {/* Handlebar */}
      <path d="M 188 162 C 195 148 220 145 235 158" fill="none" stroke="#1a1a1a" strokeWidth="12" strokeLinecap="round"/>
      {/* Pedal crank */}
      <circle cx="200" cy="225" r="20" fill={f('frame')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('frame')} style={{cursor:'pointer'}}/>
    </svg>
  );
}

// ─── 28. SNOWMAN ──────────────────────────────────────────────────────────────
export function Snowman({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Snow ground */}
      <ellipse cx="200" cy="435" rx="175" ry="22" fill={f('snow')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('snow')} style={{cursor:'pointer'}}/>
      {/* Bottom ball */}
      <circle cx="200" cy="350" r="115" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Middle ball */}
      <circle cx="200" cy="218" r="82" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Arms */}
      <path d="M 118 215 C 88 200 62 188 45 182" fill="none" stroke="#1a1a1a" strokeWidth="14" strokeLinecap="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <path d="M 48 182 C 42 172 42 162 48 175" fill="none" stroke="#1a1a1a" strokeWidth="10" strokeLinecap="round"/>
      <path d="M 48 182 C 38 178 32 168 42 178" fill="none" stroke="#1a1a1a" strokeWidth="10" strokeLinecap="round"/>
      <path d="M 282 215 C 312 200 338 188 355 182" fill="none" stroke="#1a1a1a" strokeWidth="14" strokeLinecap="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      <path d="M 352 182 C 358 172 358 162 352 175" fill="none" stroke="#1a1a1a" strokeWidth="10" strokeLinecap="round"/>
      <path d="M 352 182 C 362 178 368 168 358 178" fill="none" stroke="#1a1a1a" strokeWidth="10" strokeLinecap="round"/>
      {/* Scarf */}
      <path d="M 122 268 C 148 280 175 285 200 285 C 225 285 252 280 278 268 C 265 260 238 255 200 255 C 162 255 135 260 122 268 Z" fill={f('scarf')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('scarf')} style={{cursor:'pointer'}}/>
      <path d="M 165 285 C 158 300 152 315 148 328" fill="none" stroke="#1a1a1a" strokeWidth="16" strokeLinecap="round" onClick={() => onRegionClick?.('scarf')} style={{cursor:'pointer'}}/>
      <path d="M 165 285 C 158 300 152 315 148 328" fill="none" stroke={f('scarf')} strokeWidth="7"/>
      {/* Hat */}
      <rect x="148" y="98" width="104" height="72" rx="8" fill={f('hat')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('hat')} style={{cursor:'pointer'}}/>
      <rect x="125" y="166" width="150" height="22" rx="8" fill={f('hat')} stroke="#1a1a1a" strokeWidth="10" onClick={() => onRegionClick?.('hat')} style={{cursor:'pointer'}}/>
      {/* Eyes */}
      <circle cx="178" cy="198" r="12" fill="#1a1a1a"/>
      <circle cx="222" cy="198" r="12" fill="#1a1a1a"/>
      {/* Carrot nose */}
      <path d="M 200 215 L 238 222 L 200 228 Z" fill={f('nose')} stroke="#1a1a1a" strokeWidth="8" strokeLinejoin="round" onClick={() => onRegionClick?.('nose')} style={{cursor:'pointer'}}/>
      {/* Mouth buttons */}
      {[-22,-10,0,12,22].map((dx,i)=>(
        <circle key={i} cx={200+dx} cy={240} r="7" fill="#1a1a1a"/>
      ))}
      {/* Body buttons */}
      {[308,352,395].map((cy,i)=>(
        <circle key={i} cx="200" cy={cy} r="12" fill="#1a1a1a"/>
      ))}
    </svg>
  );
}

// ─── 29. TENT / CAMPING ───────────────────────────────────────────────────────
export function Tent({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Ground */}
      <ellipse cx="200" cy="415" rx="185" ry="22" fill={f('ground')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('ground')} style={{cursor:'pointer'}}/>
      {/* Back tent panel */}
      <path d="M 42 415 L 200 85 L 358 415 Z" fill={f('back')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('back')} style={{cursor:'pointer'}}/>
      {/* Left tent panel */}
      <path d="M 42 415 L 200 85 L 200 415 Z" fill={f('front')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('front')} style={{cursor:'pointer'}}/>
      {/* Door opening */}
      <path d="M 200 415 L 200 265 C 200 248 215 240 230 248 L 310 415 Z" fill={f('door')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('door')} style={{cursor:'pointer'}}/>
      {/* Pole */}
      <line x1="200" y1="88" x2="200" y2="415" stroke="#1a1a1a" strokeWidth="10" strokeLinecap="round"/>
      {/* Guy ropes */}
      <line x1="200" y1="88" x2="65" y2="378" stroke="#1a1a1a" strokeWidth="5" strokeLinecap="round"/>
      <line x1="200" y1="88" x2="335" y2="378" stroke="#1a1a1a" strokeWidth="5" strokeLinecap="round"/>
      {/* Stakes */}
      <path d="M 60 375 L 55 398 M 56 380 L 70 385" stroke="#1a1a1a" strokeWidth="8" strokeLinecap="round"/>
      <path d="M 340 375 L 345 398 M 344 380 L 330 385" stroke="#1a1a1a" strokeWidth="8" strokeLinecap="round"/>
      {/* Stars on tent */}
      <text x="120" y="295" textAnchor="middle" fontSize="32" fill={f('door')} style={{userSelect:'none',pointerEvents:'none'}}>★</text>
      <text x="140" y="355" textAnchor="middle" fontSize="24" fill={f('door')} style={{userSelect:'none',pointerEvents:'none'}}>✦</text>
    </svg>
  );
}

// ─── 30. SPACESHIP ────────────────────────────────────────────────────────────
export function Spaceship({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Engine glow */}
      <ellipse cx="200" cy="420" rx="68" ry="22" fill={f('engine')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('engine')} style={{cursor:'pointer'}}/>
      {/* Exhaust */}
      <path d="M 165 400 C 158 415 152 432 158 445 C 172 438 185 428 200 425 C 215 428 228 438 242 445 C 248 432 242 415 235 400 Z" fill={f('engine')} stroke="#1a1a1a" strokeWidth="8" strokeLinejoin="round" onClick={() => onRegionClick?.('engine')} style={{cursor:'pointer'}}/>
      {/* Left wing */}
      <path d="M 132 318 L 42 375 L 42 405 L 132 368 Z" fill={f('wings')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('wings')} style={{cursor:'pointer'}}/>
      {/* Right wing */}
      <path d="M 268 318 L 358 375 L 358 405 L 268 368 Z" fill={f('wings')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('wings')} style={{cursor:'pointer'}}/>
      {/* Body */}
      <path d="M 132 368 L 132 248 C 132 178 158 118 200 88 C 242 118 268 178 268 248 L 268 368 Z" fill={f('body')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round" onClick={() => onRegionClick?.('body')} style={{cursor:'pointer'}}/>
      {/* Cockpit dome */}
      <path d="M 148 248 C 148 178 168 122 200 95 C 232 122 252 178 252 248 Z" fill={f('cockpit')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round" onClick={() => onRegionClick?.('cockpit')} style={{cursor:'pointer'}}/>
      {/* Window */}
      <ellipse cx="200" cy="222" rx="40" ry="48" fill={f('window')} stroke="#1a1a1a" strokeWidth="9" onClick={() => onRegionClick?.('window')} style={{cursor:'pointer'}}/>
      <ellipse cx="200" cy="222" rx="24" ry="30" fill={f('window')} stroke="#1a1a1a" strokeWidth="7" onClick={() => onRegionClick?.('window')} style={{cursor:'pointer'}}/>
      {/* Alien face in window */}
      <circle cx="190" cy="218" r="6" fill="#1a1a1a"/>
      <circle cx="210" cy="218" r="6" fill="#1a1a1a"/>
      <path d="M 186 232 C 193 238 207 238 214 232" fill="none" stroke="#1a1a1a" strokeWidth="5" strokeLinecap="round"/>
      {/* Portholes */}
      {[[148,300],[252,300],[148,340],[252,340]].map(([cx,cy],i)=>(
        <circle key={i} cx={cx} cy={cy} r="16" fill={f('window')} stroke="#1a1a1a" strokeWidth="8" onClick={() => onRegionClick?.('window')} style={{cursor:'pointer'}}/>
      ))}
      {/* Stars around */}
      {[[52,88],[348,92],[38,188],[362,192]].map(([cx,cy],i)=>(
        <path key={i} d={`M ${cx} ${cy-16} L ${cx+5} ${cy-5} L ${cx+16} ${cy-5} L ${cx+8} ${cy+4} L ${cx+10} ${cy+15} L ${cx} ${cy+9} L ${cx-10} ${cy+15} L ${cx-8} ${cy+4} L ${cx-16} ${cy-5} L ${cx-5} ${cy-5} Z`} fill={f('wings')} stroke="#1a1a1a" strokeWidth="5" onClick={() => onRegionClick?.('wings')} style={{cursor:'pointer'}}/>
      ))}
    </svg>
  );
}
