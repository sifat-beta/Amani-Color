// SVG Coloring Drawings - ANIMALS
const svgProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 400 450',
  style: { width: '100%', height: '100%', userSelect: 'none' },
};

// ─── CAT ──────────────────────────────────────────────────────────────────────
export function Cat({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Body */}
      <ellipse cx="200" cy="310" rx="115" ry="105"
        fill={f('body')} stroke="#1a1a1a" strokeWidth="11"
        onClick={() => onRegionClick?.('body')} style={{ cursor: 'pointer' }}
      />
      {/* Front paws */}
      <ellipse cx="155" cy="408" rx="35" ry="22"
        fill={f('body')} stroke="#1a1a1a" strokeWidth="10"
        onClick={() => onRegionClick?.('body')} style={{ cursor: 'pointer' }}
      />
      <ellipse cx="245" cy="408" rx="35" ry="22"
        fill={f('body')} stroke="#1a1a1a" strokeWidth="10"
        onClick={() => onRegionClick?.('body')} style={{ cursor: 'pointer' }}
      />
      {/* Tail */}
      <path
        d="M 315 310 C 345 295 368 305 372 330 C 376 355 358 370 338 358 C 322 348 320 330 325 318"
        fill="none" stroke="#1a1a1a" strokeWidth="22" strokeLinecap="round"
        onClick={() => onRegionClick?.('tail')} style={{ cursor: 'pointer' }}
      />
      <path
        d="M 315 310 C 345 295 368 305 372 330 C 376 355 358 370 338 358 C 322 348 320 330 325 318"
        fill="none" stroke={f('tail')} strokeWidth="10" strokeLinecap="round"
        onClick={() => onRegionClick?.('tail')} style={{ cursor: 'pointer' }}
      />
      {/* Head */}
      <circle cx="200" cy="188" r="92"
        fill={f('head')} stroke="#1a1a1a" strokeWidth="11"
        onClick={() => onRegionClick?.('head')} style={{ cursor: 'pointer' }}
      />
      {/* Left ear */}
      <path d="M 132 130 L 110 70 L 162 102 Z"
        fill={f('ears')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round"
        onClick={() => onRegionClick?.('ears')} style={{ cursor: 'pointer' }}
      />
      {/* Right ear */}
      <path d="M 268 130 L 290 70 L 238 102 Z"
        fill={f('ears')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round"
        onClick={() => onRegionClick?.('ears')} style={{ cursor: 'pointer' }}
      />
      {/* Inner ears */}
      <path d="M 136 124 L 118 84 L 156 108 Z" fill={f('face')} stroke="#1a1a1a" strokeWidth="4" />
      <path d="M 264 124 L 282 84 L 244 108 Z" fill={f('face')} stroke="#1a1a1a" strokeWidth="4" />
      {/* Eyes */}
      <ellipse cx="170" cy="178" rx="18" ry="22"
        fill={f('face')} stroke="#1a1a1a" strokeWidth="8"
        onClick={() => onRegionClick?.('face')} style={{ cursor: 'pointer' }}
      />
      <ellipse cx="230" cy="178" rx="18" ry="22"
        fill={f('face')} stroke="#1a1a1a" strokeWidth="8"
        onClick={() => onRegionClick?.('face')} style={{ cursor: 'pointer' }}
      />
      <circle cx="170" cy="178" r="8" fill="#1a1a1a" />
      <circle cx="230" cy="178" r="8" fill="#1a1a1a" />
      <circle cx="173" cy="174" r="3" fill="white" />
      <circle cx="233" cy="174" r="3" fill="white" />
      {/* Nose */}
      <path d="M 192 210 L 200 218 L 208 210 Z" fill="#1a1a1a" />
      {/* Mouth */}
      <path d="M 200 218 C 188 226 178 228 172 224" fill="none" stroke="#1a1a1a" strokeWidth="5" strokeLinecap="round" />
      <path d="M 200 218 C 212 226 222 228 228 224" fill="none" stroke="#1a1a1a" strokeWidth="5" strokeLinecap="round" />
      {/* Whiskers */}
      <line x1="120" y1="205" x2="175" y2="208" stroke="#1a1a1a" strokeWidth="4" strokeLinecap="round" />
      <line x1="115" y1="215" x2="173" y2="215" stroke="#1a1a1a" strokeWidth="4" strokeLinecap="round" />
      <line x1="225" y1="208" x2="280" y2="205" stroke="#1a1a1a" strokeWidth="4" strokeLinecap="round" />
      <line x1="227" y1="215" x2="285" y2="215" stroke="#1a1a1a" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

// ─── DOG ──────────────────────────────────────────────────────────────────────
export function Dog({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Body */}
      <ellipse cx="200" cy="318" rx="118" ry="100"
        fill={f('body')} stroke="#1a1a1a" strokeWidth="11"
        onClick={() => onRegionClick?.('body')} style={{ cursor: 'pointer' }}
      />
      {/* Front legs */}
      <rect x="148" y="390" width="44" height="42" rx="20"
        fill={f('body')} stroke="#1a1a1a" strokeWidth="10"
        onClick={() => onRegionClick?.('body')} style={{ cursor: 'pointer' }}
      />
      <rect x="208" y="390" width="44" height="42" rx="20"
        fill={f('body')} stroke="#1a1a1a" strokeWidth="10"
        onClick={() => onRegionClick?.('body')} style={{ cursor: 'pointer' }}
      />
      {/* Tail */}
      <path d="M 318 295 C 348 275 368 252 360 228 C 355 215 342 215 334 224 C 326 234 328 250 330 268"
        fill="none" stroke="#1a1a1a" strokeWidth="22" strokeLinecap="round"
        onClick={() => onRegionClick?.('tail')} style={{ cursor: 'pointer' }}
      />
      <path d="M 318 295 C 348 275 368 252 360 228 C 355 215 342 215 334 224 C 326 234 328 250 330 268"
        fill="none" stroke={f('body')} strokeWidth="10" strokeLinecap="round"
        onClick={() => onRegionClick?.('body')} style={{ cursor: 'pointer' }}
      />
      {/* Head */}
      <circle cx="200" cy="192" r="90"
        fill={f('head')} stroke="#1a1a1a" strokeWidth="11"
        onClick={() => onRegionClick?.('head')} style={{ cursor: 'pointer' }}
      />
      {/* Left floppy ear */}
      <path
        d="M 118 155 C 100 138 88 165 90 198 C 92 228 110 252 130 248 C 145 245 152 228 148 208 C 144 188 135 165 118 155 Z"
        fill={f('ears')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round"
        onClick={() => onRegionClick?.('ears')} style={{ cursor: 'pointer' }}
      />
      {/* Right floppy ear */}
      <path
        d="M 282 155 C 300 138 312 165 310 198 C 308 228 290 252 270 248 C 255 245 248 228 252 208 C 256 188 265 165 282 155 Z"
        fill={f('ears')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round"
        onClick={() => onRegionClick?.('ears')} style={{ cursor: 'pointer' }}
      />
      {/* Eyes */}
      <circle cx="172" cy="178" r="18" fill="#1a1a1a" />
      <circle cx="228" cy="178" r="18" fill="#1a1a1a" />
      <circle cx="166" cy="172" r="6" fill="white" />
      <circle cx="222" cy="172" r="6" fill="white" />
      {/* Snout */}
      <ellipse cx="200" cy="218" rx="40" ry="30"
        fill={f('head')} stroke="#1a1a1a" strokeWidth="8"
        onClick={() => onRegionClick?.('head')} style={{ cursor: 'pointer' }}
      />
      {/* Nose */}
      <ellipse cx="200" cy="208" rx="16" ry="12" fill="#1a1a1a" />
      <circle cx="194" cy="204" r="4" fill="white" />
      {/* Mouth */}
      <path d="M 200 220 C 188 230 178 232 172 228" fill="none" stroke="#1a1a1a" strokeWidth="5" strokeLinecap="round" />
      <path d="M 200 220 C 212 230 222 232 228 228" fill="none" stroke="#1a1a1a" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

// ─── FISH ─────────────────────────────────────────────────────────────────────
export function Fish({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Body */}
      <ellipse cx="195" cy="228" rx="145" ry="100"
        fill={f('body')} stroke="#1a1a1a" strokeWidth="11"
        onClick={() => onRegionClick?.('body')} style={{ cursor: 'pointer' }}
      />
      {/* Tail fin */}
      <path
        d="M 332 228 L 382 165 L 382 292 Z"
        fill={f('tail')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round"
        onClick={() => onRegionClick?.('tail')} style={{ cursor: 'pointer' }}
      />
      {/* Top dorsal fin */}
      <path
        d="M 195 128 C 215 102 248 88 270 100 C 258 118 235 130 215 132 Z"
        fill={f('fin')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round"
        onClick={() => onRegionClick?.('fin')} style={{ cursor: 'pointer' }}
      />
      {/* Bottom fin */}
      <path
        d="M 200 328 C 218 350 240 358 258 348 C 248 332 228 325 210 328 Z"
        fill={f('fin')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round"
        onClick={() => onRegionClick?.('fin')} style={{ cursor: 'pointer' }}
      />
      {/* Scale lines */}
      <path d="M 250 175 Q 265 200 250 225" fill="none" stroke="#1a1a1a" strokeWidth="5" />
      <path d="M 215 162 Q 230 190 215 220" fill="none" stroke="#1a1a1a" strokeWidth="5" />
      <path d="M 280 190 Q 292 215 280 240" fill="none" stroke="#1a1a1a" strokeWidth="5" />
      {/* Eye */}
      <circle cx="105" cy="210" r="30"
        fill={f('body')} stroke="#1a1a1a" strokeWidth="10"
        onClick={() => onRegionClick?.('body')} style={{ cursor: 'pointer' }}
      />
      <circle cx="105" cy="210" r="16" fill="#1a1a1a" />
      <circle cx="98" cy="204" r="6" fill="white" />
      {/* Mouth */}
      <path d="M 52 228 C 58 240 68 248 80 246" fill="none" stroke="#1a1a1a" strokeWidth="8" strokeLinecap="round" />
    </svg>
  );
}

// ─── BIRD / CHICK ─────────────────────────────────────────────────────────────
export function Bird({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Body */}
      <ellipse cx="200" cy="295" rx="120" ry="115"
        fill={f('body')} stroke="#1a1a1a" strokeWidth="11"
        onClick={() => onRegionClick?.('body')} style={{ cursor: 'pointer' }}
      />
      {/* Wing left */}
      <path
        d="M 118 272 C 85 250 65 268 68 295 C 72 322 95 335 120 325 C 135 318 140 300 140 285 Z"
        fill={f('wing')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round"
        onClick={() => onRegionClick?.('wing')} style={{ cursor: 'pointer' }}
      />
      {/* Wing right */}
      <path
        d="M 282 272 C 315 250 335 268 332 295 C 328 322 305 335 280 325 C 265 318 260 300 260 285 Z"
        fill={f('wing')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round"
        onClick={() => onRegionClick?.('wing')} style={{ cursor: 'pointer' }}
      />
      {/* Head */}
      <circle cx="200" cy="178" r="82"
        fill={f('body')} stroke="#1a1a1a" strokeWidth="11"
        onClick={() => onRegionClick?.('body')} style={{ cursor: 'pointer' }}
      />
      {/* Tuft feathers */}
      <path d="M 200 96 C 196 78 185 65 178 58 C 186 68 194 80 196 92" fill={f('body')} stroke="#1a1a1a" strokeWidth="9" strokeLinecap="round" />
      <path d="M 200 96 C 200 76 200 60 200 50 C 200 60 200 76 200 96" fill={f('body')} stroke="#1a1a1a" strokeWidth="9" strokeLinecap="round" />
      <path d="M 200 96 C 204 78 215 65 222 58 C 214 68 206 80 204 92" fill={f('body')} stroke="#1a1a1a" strokeWidth="9" strokeLinecap="round" />
      {/* Eyes */}
      <circle cx="172" cy="165" r="20" fill="white" stroke="#1a1a1a" strokeWidth="8" />
      <circle cx="228" cy="165" r="20" fill="white" stroke="#1a1a1a" strokeWidth="8" />
      <circle cx="172" cy="165" r="10" fill="#1a1a1a" />
      <circle cx="228" cy="165" r="10" fill="#1a1a1a" />
      <circle cx="168" cy="161" r="4" fill="white" />
      <circle cx="224" cy="161" r="4" fill="white" />
      {/* Beak */}
      <path d="M 182 195 L 200 215 L 218 195 Z"
        fill={f('beak')} stroke="#1a1a1a" strokeWidth="8" strokeLinejoin="round"
        onClick={() => onRegionClick?.('beak')} style={{ cursor: 'pointer' }}
      />
      {/* Feet */}
      <path d="M 170 408 L 155 428 M 170 408 L 160 432 M 170 408 L 170 432" stroke="#1a1a1a" strokeWidth="8" strokeLinecap="round" />
      <path d="M 230 408 L 215 428 M 230 408 L 220 432 M 230 408 L 230 432" stroke="#1a1a1a" strokeWidth="8" strokeLinecap="round" />
      <circle cx="170" cy="405" r="10" fill={f('beak')} stroke="#1a1a1a" strokeWidth="7" />
      <circle cx="230" cy="405" r="10" fill={f('beak')} stroke="#1a1a1a" strokeWidth="7" />
    </svg>
  );
}

// ─── ELEPHANT ─────────────────────────────────────────────────────────────────
export function Elephant({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Body */}
      <ellipse cx="205" cy="310" rx="140" ry="105"
        fill={f('body')} stroke="#1a1a1a" strokeWidth="11"
        onClick={() => onRegionClick?.('body')} style={{ cursor: 'pointer' }}
      />
      {/* Legs */}
      {[[120,390],[165,395],[240,395],[285,390]].map(([x,y],i)=>(
        <rect key={i} x={x-25} y={y-30} width="50" height="52" rx="22"
          fill={f('body')} stroke="#1a1a1a" strokeWidth="10"
          onClick={() => onRegionClick?.('body')} style={{ cursor: 'pointer' }}
        />
      ))}
      {/* Tail */}
      <path d="M 344 300 C 358 288 365 278 362 268 C 360 260 354 260 350 265"
        fill="none" stroke="#1a1a1a" strokeWidth="10" strokeLinecap="round"
        onClick={() => onRegionClick?.('body')} style={{ cursor: 'pointer' }}
      />
      {/* Head */}
      <circle cx="148" cy="200" r="88"
        fill={f('body')} stroke="#1a1a1a" strokeWidth="11"
        onClick={() => onRegionClick?.('body')} style={{ cursor: 'pointer' }}
      />
      {/* Left ear (big) */}
      <path
        d="M 80 165 C 42 145 22 178 25 215 C 28 255 55 278 85 268 C 105 260 112 238 108 215 C 104 192 96 172 80 165 Z"
        fill={f('ear')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round"
        onClick={() => onRegionClick?.('ear')} style={{ cursor: 'pointer' }}
      />
      {/* Trunk */}
      <path
        d="M 90 240 C 68 258 52 278 50 302 C 48 322 58 338 75 340 C 90 342 102 330 102 315 C 102 300 95 285 95 272"
        fill="none" stroke="#1a1a1a" strokeWidth="32" strokeLinecap="round"
        onClick={() => onRegionClick?.('trunk')} style={{ cursor: 'pointer' }}
      />
      <path
        d="M 90 240 C 68 258 52 278 50 302 C 48 322 58 338 75 340 C 90 342 102 330 102 315 C 102 300 95 285 95 272"
        fill="none" stroke={f('trunk')} strokeWidth="18" strokeLinecap="round"
        onClick={() => onRegionClick?.('trunk')} style={{ cursor: 'pointer' }}
      />
      {/* Trunk wrinkles */}
      <path d="M 62 280 C 68 278 74 280 78 278" fill="none" stroke="#1a1a1a" strokeWidth="4" strokeLinecap="round" />
      <path d="M 56 298 C 62 296 68 298 74 296" fill="none" stroke="#1a1a1a" strokeWidth="4" strokeLinecap="round" />
      {/* Eye */}
      <circle cx="170" cy="188" r="20" fill="white" stroke="#1a1a1a" strokeWidth="8" />
      <circle cx="170" cy="188" r="11" fill="#1a1a1a" />
      <circle cx="165" cy="183" r="4" fill="white" />
      {/* Tusk */}
      <path d="M 105 230 C 92 238 82 248 80 260 C 78 272 86 278 96 272" fill="none" stroke="#1a1a1a" strokeWidth="10" strokeLinecap="round" />
    </svg>
  );
}

// ─── RABBIT ───────────────────────────────────────────────────────────────────
export function Rabbit({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Body */}
      <ellipse cx="200" cy="325" rx="112" ry="98"
        fill={f('body')} stroke="#1a1a1a" strokeWidth="11"
        onClick={() => onRegionClick?.('body')} style={{ cursor: 'pointer' }}
      />
      {/* Fluffy tail */}
      <circle cx="316" cy="342" r="28"
        fill={f('body')} stroke="#1a1a1a" strokeWidth="10"
        onClick={() => onRegionClick?.('body')} style={{ cursor: 'pointer' }}
      />
      {/* Front paws */}
      <ellipse cx="160" cy="415" rx="38" ry="22"
        fill={f('body')} stroke="#1a1a1a" strokeWidth="10"
        onClick={() => onRegionClick?.('body')} style={{ cursor: 'pointer' }}
      />
      <ellipse cx="240" cy="415" rx="38" ry="22"
        fill={f('body')} stroke="#1a1a1a" strokeWidth="10"
        onClick={() => onRegionClick?.('body')} style={{ cursor: 'pointer' }}
      />
      {/* Head */}
      <circle cx="200" cy="210" r="82"
        fill={f('body')} stroke="#1a1a1a" strokeWidth="11"
        onClick={() => onRegionClick?.('body')} style={{ cursor: 'pointer' }}
      />
      {/* Left long ear */}
      <path
        d="M 162 140 C 148 108 142 72 146 45 C 150 22 162 12 175 15 C 188 18 195 32 192 58 C 190 80 184 112 178 140 Z"
        fill={f('ears')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round"
        onClick={() => onRegionClick?.('ears')} style={{ cursor: 'pointer' }}
      />
      {/* Right long ear */}
      <path
        d="M 238 140 C 252 108 258 72 254 45 C 250 22 238 12 225 15 C 212 18 205 32 208 58 C 210 80 216 112 222 140 Z"
        fill={f('ears')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round"
        onClick={() => onRegionClick?.('ears')} style={{ cursor: 'pointer' }}
      />
      {/* Inner ears */}
      <path d="M 166 135 C 155 105 150 75 153 52 C 156 32 165 23 172 25 C 180 27 184 40 183 62 C 181 82 176 112 170 135 Z"
        fill={f('face')} stroke="#1a1a1a" strokeWidth="5"
        onClick={() => onRegionClick?.('face')} style={{ cursor: 'pointer' }}
      />
      <path d="M 234 135 C 245 105 250 75 247 52 C 244 32 235 23 228 25 C 220 27 216 40 217 62 C 219 82 224 112 230 135 Z"
        fill={f('face')} stroke="#1a1a1a" strokeWidth="5"
        onClick={() => onRegionClick?.('face')} style={{ cursor: 'pointer' }}
      />
      {/* Eyes */}
      <circle cx="172" cy="195" r="18" fill="white" stroke="#1a1a1a" strokeWidth="8" />
      <circle cx="228" cy="195" r="18" fill="white" stroke="#1a1a1a" strokeWidth="8" />
      <circle cx="172" cy="195" r="10" fill="#1a1a1a" />
      <circle cx="228" cy="195" r="10" fill="#1a1a1a" />
      <circle cx="167" cy="190" r="4" fill="white" />
      <circle cx="223" cy="190" r="4" fill="white" />
      {/* Nose */}
      <ellipse cx="200" cy="224" rx="10" ry="7" fill="#FF85A1" stroke="#1a1a1a" strokeWidth="5" />
      {/* Mouth */}
      <path d="M 200 231 C 190 240 182 242 176 238" fill="none" stroke="#1a1a1a" strokeWidth="5" strokeLinecap="round" />
      <path d="M 200 231 C 210 240 218 242 224 238" fill="none" stroke="#1a1a1a" strokeWidth="5" strokeLinecap="round" />
      {/* Whiskers */}
      <line x1="128" y1="220" x2="180" y2="222" stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round" />
      <line x1="124" y1="230" x2="178" y2="230" stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round" />
      <line x1="220" y1="222" x2="272" y2="220" stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round" />
      <line x1="222" y1="230" x2="276" y2="230" stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
