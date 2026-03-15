// SVG Coloring Drawings - FLOWERS
const svgProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 400 450',
  style: { width: '100%', height: '100%', userSelect: 'none' },
};

// ─── SUNFLOWER ────────────────────────────────────────────────────────────────
export function Sunflower({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  const petalAngles = Array.from({ length: 12 }, (_, i) => i * 30);
  return (
    <svg {...svgProps}>
      {/* Stem */}
      <path d="M 200 330 C 198 365 196 390 195 415"
        fill="none" stroke="#1a1a1a" strokeWidth="12" strokeLinecap="round"
        onClick={() => onRegionClick?.('stem')} style={{ cursor: 'pointer' }}
      />
      {/* Leaf left */}
      <path
        d="M 196 370 C 175 360 148 350 132 358 C 140 372 162 380 186 374 Z"
        fill={f('leaf')} stroke="#1a1a1a" strokeWidth="9" strokeLinejoin="round"
        onClick={() => onRegionClick?.('leaf')} style={{ cursor: 'pointer' }}
      />
      {/* Petals */}
      {petalAngles.map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const cx = 200 + 108 * Math.cos(rad);
        const cy = 218 + 108 * Math.sin(rad);
        return (
          <ellipse key={i}
            cx={cx} cy={cy} rx="30" ry="52"
            transform={`rotate(${angle} ${cx} ${cy})`}
            fill={f('petals')} stroke="#1a1a1a" strokeWidth="9"
            onClick={() => onRegionClick?.('petals')} style={{ cursor: 'pointer' }}
          />
        );
      })}
      {/* Center disc */}
      <circle cx="200" cy="218" r="72"
        fill={f('center')} stroke="#1a1a1a" strokeWidth="11"
        onClick={() => onRegionClick?.('center')} style={{ cursor: 'pointer' }}
      />
      {/* Center texture dots */}
      {[
        [200,218],[180,205],[220,205],[185,232],[215,232],[200,248],
        [175,218],[225,218],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="8"
          fill={f('center')} stroke="#1a1a1a" strokeWidth="4"
          onClick={() => onRegionClick?.('center')} style={{ cursor: 'pointer' }}
        />
      ))}
    </svg>
  );
}

// ─── ROSE ─────────────────────────────────────────────────────────────────────
export function Rose({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Stem */}
      <path d="M 200 305 C 200 345 198 385 196 415"
        fill="none" stroke="#1a1a1a" strokeWidth="12" strokeLinecap="round"
        onClick={() => onRegionClick?.('stem')} style={{ cursor: 'pointer' }}
      />
      {/* Thorn */}
      <path d="M 199 350 C 182 344 172 338 170 330"
        fill="none" stroke="#1a1a1a" strokeWidth="8" strokeLinecap="round"
      />
      {/* Leaves */}
      <path
        d="M 200 360 C 218 348 240 345 252 355 C 244 368 222 372 206 365 Z"
        fill={f('leaf')} stroke="#1a1a1a" strokeWidth="9"
        onClick={() => onRegionClick?.('leaf')} style={{ cursor: 'pointer' }}
      />
      <path
        d="M 200 330 C 178 318 155 315 142 325 C 148 340 170 346 188 340 Z"
        fill={f('leaf')} stroke="#1a1a1a" strokeWidth="9"
        onClick={() => onRegionClick?.('leaf')} style={{ cursor: 'pointer' }}
      />
      {/* Outer petals (sepals) */}
      <path
        d="M 200 308 C 165 295 138 275 132 250 C 128 232 138 215 155 210
           C 162 245 178 278 200 308 Z"
        fill={f('petals')} stroke="#1a1a1a" strokeWidth="9"
        onClick={() => onRegionClick?.('petals')} style={{ cursor: 'pointer' }}
      />
      <path
        d="M 200 308 C 235 295 262 275 268 250 C 272 232 262 215 245 210
           C 238 245 222 278 200 308 Z"
        fill={f('petals')} stroke="#1a1a1a" strokeWidth="9"
        onClick={() => onRegionClick?.('petals')} style={{ cursor: 'pointer' }}
      />
      {/* Main rose bud */}
      <path
        d="M 152 230 C 148 195 162 160 185 142 C 192 138 200 136 200 136
           C 200 136 208 138 215 142 C 238 160 252 195 248 230
           C 240 260 222 285 200 298 C 178 285 160 260 152 230 Z"
        fill={f('petals')} stroke="#1a1a1a" strokeWidth="11"
        onClick={() => onRegionClick?.('petals')} style={{ cursor: 'pointer' }}
      />
      {/* Inner petal swirl */}
      <path
        d="M 180 168 C 178 185 180 205 190 220 C 195 228 200 232 200 232
           C 200 232 205 228 210 220 C 220 205 222 185 220 168"
        fill="none" stroke="#1a1a1a" strokeWidth="7" strokeLinecap="round"
      />
      <path
        d="M 200 136 C 200 150 200 168 200 185"
        fill="none" stroke="#1a1a1a" strokeWidth="6" strokeLinecap="round"
      />
    </svg>
  );
}

// ─── TULIP ────────────────────────────────────────────────────────────────────
export function Tulip({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Stem */}
      <path d="M 200 320 C 200 355 200 385 200 415"
        fill="none" stroke="#1a1a1a" strokeWidth="12" strokeLinecap="round"
        onClick={() => onRegionClick?.('stem')} style={{ cursor: 'pointer' }}
      />
      {/* Left leaf */}
      <path
        d="M 200 370 C 185 355 160 338 140 342 C 138 358 150 375 170 378 C 182 380 196 376 200 370 Z"
        fill={f('leaf')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round"
        onClick={() => onRegionClick?.('leaf')} style={{ cursor: 'pointer' }}
      />
      {/* Right leaf */}
      <path
        d="M 200 345 C 215 330 240 313 260 317 C 262 333 250 350 230 353 C 218 355 204 351 200 345 Z"
        fill={f('leaf')} stroke="#1a1a1a" strokeWidth="10" strokeLinejoin="round"
        onClick={() => onRegionClick?.('leaf')} style={{ cursor: 'pointer' }}
      />
      {/* Left petal */}
      <path
        d="M 200 315 C 185 295 162 268 155 235 C 148 205 158 175 172 160
           C 182 150 196 145 200 145 Z"
        fill={f('petals')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round"
        onClick={() => onRegionClick?.('petals')} style={{ cursor: 'pointer' }}
      />
      {/* Right petal */}
      <path
        d="M 200 315 C 215 295 238 268 245 235 C 252 205 242 175 228 160
           C 218 150 204 145 200 145 Z"
        fill={f('petals')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round"
        onClick={() => onRegionClick?.('petals')} style={{ cursor: 'pointer' }}
      />
      {/* Center petal */}
      <path
        d="M 200 315 C 195 290 188 260 188 228 C 188 192 196 165 200 145
           C 204 165 212 192 212 228 C 212 260 205 290 200 315 Z"
        fill={f('petals')} stroke="#1a1a1a" strokeWidth="11" strokeLinejoin="round"
        onClick={() => onRegionClick?.('petals')} style={{ cursor: 'pointer' }}
      />
    </svg>
  );
}

// ─── DAISY ────────────────────────────────────────────────────────────────────
export function Daisy({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  const angles = Array.from({ length: 10 }, (_, i) => i * 36);
  return (
    <svg {...svgProps}>
      {/* Stem */}
      <path d="M 200 310 C 200 345 200 380 200 415"
        fill="none" stroke="#1a1a1a" strokeWidth="12" strokeLinecap="round"
        onClick={() => onRegionClick?.('stem')} style={{ cursor: 'pointer' }}
      />
      {/* Leaf */}
      <path
        d="M 200 365 C 180 352 155 348 142 358 C 148 373 168 378 188 372 Z"
        fill={f('stem')} stroke="#1a1a1a" strokeWidth="9"
        onClick={() => onRegionClick?.('stem')} style={{ cursor: 'pointer' }}
      />
      {/* Petals */}
      {angles.map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const cx = 200 + 95 * Math.cos(rad);
        const cy = 215 + 95 * Math.sin(rad);
        return (
          <ellipse key={i}
            cx={cx} cy={cy} rx="18" ry="52"
            transform={`rotate(${angle} ${cx} ${cy})`}
            fill={f('petals')} stroke="#1a1a1a" strokeWidth="9"
            onClick={() => onRegionClick?.('petals')} style={{ cursor: 'pointer' }}
          />
        );
      })}
      {/* Center */}
      <circle cx="200" cy="215" r="58"
        fill={f('center')} stroke="#1a1a1a" strokeWidth="11"
        onClick={() => onRegionClick?.('center')} style={{ cursor: 'pointer' }}
      />
    </svg>
  );
}

// ─── SIMPLE FLOWER ────────────────────────────────────────────────────────────
export function SimpleFlower({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  const angles = [0, 72, 144, 216, 288];
  return (
    <svg {...svgProps}>
      {/* Stem */}
      <path d="M 200 315 C 200 350 200 385 200 415"
        fill="none" stroke="#1a1a1a" strokeWidth="12" strokeLinecap="round"
        onClick={() => onRegionClick?.('stem')} style={{ cursor: 'pointer' }}
      />
      {/* Leaves */}
      <path
        d="M 200 370 C 178 356 152 352 138 362 C 145 378 168 384 190 376 Z"
        fill={f('leaf')} stroke="#1a1a1a" strokeWidth="10"
        onClick={() => onRegionClick?.('leaf')} style={{ cursor: 'pointer' }}
      />
      <path
        d="M 200 342 C 222 328 248 324 262 334 C 255 350 232 356 210 348 Z"
        fill={f('leaf')} stroke="#1a1a1a" strokeWidth="10"
        onClick={() => onRegionClick?.('leaf')} style={{ cursor: 'pointer' }}
      />
      {/* 5 large round petals */}
      {angles.map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const cx = 200 + 105 * Math.cos(rad);
        const cy = 215 + 105 * Math.sin(rad);
        return (
          <circle key={i} cx={cx} cy={cy} r="55"
            fill={f('petals')} stroke="#1a1a1a" strokeWidth="10"
            onClick={() => onRegionClick?.('petals')} style={{ cursor: 'pointer' }}
          />
        );
      })}
      {/* Center */}
      <circle cx="200" cy="215" r="62"
        fill={f('center')} stroke="#1a1a1a" strokeWidth="11"
        onClick={() => onRegionClick?.('center')} style={{ cursor: 'pointer' }}
      />
    </svg>
  );
}

// ─── LOTUS ────────────────────────────────────────────────────────────────────
export function Lotus({ colors = {}, onRegionClick }) {
  const f = id => colors[id] || '#FFFFFF';
  return (
    <svg {...svgProps}>
      {/* Water / base leaves */}
      <ellipse cx="200" cy="360" rx="165" ry="30"
        fill={f('outer')} stroke="#1a1a1a" strokeWidth="10"
        onClick={() => onRegionClick?.('outer')} style={{ cursor: 'pointer' }}
      />
      {/* Outer petals */}
      {[-60, -30, 0, 30, 60].map((angle, i) => {
        const rad = ((angle - 90) * Math.PI) / 180;
        const cx = 200 + 110 * Math.cos(rad);
        const cy = 330 + 110 * Math.sin(rad);
        return (
          <ellipse key={i}
            cx={cx} cy={cy} rx="32" ry="75"
            transform={`rotate(${angle} ${cx} ${cy})`}
            fill={f('outer')} stroke="#1a1a1a" strokeWidth="9"
            onClick={() => onRegionClick?.('outer')} style={{ cursor: 'pointer' }}
          />
        );
      })}
      {/* Inner petals */}
      {[-35, 0, 35].map((angle, i) => {
        const rad = ((angle - 90) * Math.PI) / 180;
        const cx = 200 + 72 * Math.cos(rad);
        const cy = 310 + 72 * Math.sin(rad);
        return (
          <ellipse key={i}
            cx={cx} cy={cy} rx="26" ry="60"
            transform={`rotate(${angle} ${cx} ${cy})`}
            fill={f('inner')} stroke="#1a1a1a" strokeWidth="9"
            onClick={() => onRegionClick?.('inner')} style={{ cursor: 'pointer' }}
          />
        );
      })}
      {/* Center */}
      <circle cx="200" cy="265" r="48"
        fill={f('center')} stroke="#1a1a1a" strokeWidth="11"
        onClick={() => onRegionClick?.('center')} style={{ cursor: 'pointer' }}
      />
      {/* Center dots */}
      {[[-15,-12],[0,-18],[15,-12],[0,0]].map(([dx,dy],i)=>(
        <circle key={i} cx={200+dx} cy={265+dy} r="7"
          fill={f('center')} stroke="#1a1a1a" strokeWidth="4"
          onClick={() => onRegionClick?.('center')} style={{ cursor: 'pointer' }}
        />
      ))}
    </svg>
  );
}
