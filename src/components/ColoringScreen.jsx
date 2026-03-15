import { useState, useEffect, useRef, Suspense, lazy } from 'react';
import { getSVGComponent } from '../data/levels.js';

const COLORS = [
  { id: 'red',    hex: '#FF3B30', label: '🔴' },
  { id: 'orange', hex: '#FF9F0A', label: '🟠' },
  { id: 'yellow', hex: '#FFD60A', label: '🟡' },
  { id: 'green',  hex: '#30D158', label: '🟢' },
  { id: 'blue',   hex: '#0A84FF', label: '🔵' },
  { id: 'purple', hex: '#BF5AF2', label: '🟣' },
  { id: 'pink',   hex: '#FF375F', label: '🩷' },
  { id: 'brown',  hex: '#AC6F3A', label: '🟤' },
  { id: 'white',  hex: '#FFFFFF', label: '⬜', isEraser: true },
];

function Confetti({ active }) {
  const pieces = useRef(
    Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      color: ['#FF6B6B','#FFD93D','#6BCB77','#4D96FF','#C77DFF','#FF85A1','#FF9F43'][i % 7],
      size: 8 + Math.random() * 10,
      delay: Math.random() * 0.8,
      duration: 1.8 + Math.random() * 1.2,
      shape: i % 3,
    }))
  );
  if (!active) return null;
  return (
    <div style={{
      position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 100, overflow: 'hidden',
    }}>
      {pieces.current.map(p => (
        <div key={p.id} style={{
          position: 'absolute',
          left: `${p.x}%`,
          top: -20,
          width: p.size,
          height: p.size * (p.shape === 2 ? 0.4 : 1),
          background: p.color,
          borderRadius: p.shape === 0 ? '50%' : p.shape === 1 ? 4 : 2,
          animation: `confettiFall ${p.duration}s ${p.delay}s ease-in forwards`,
          transform: 'rotate(45deg)',
        }} />
      ))}
    </div>
  );
}

export default function ColoringScreen({ categoryId, levelId, levelData, onBack, onComplete, savedColors, onSaveColors }) {
  const [selectedColor, setSelectedColor] = useState(COLORS[0].hex);
  const [colors, setColors] = useState(savedColors || {});
  const [SVGComponent, setSVGComponent] = useState(null);
  const [completed, setCompleted] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  useEffect(() => {
    getSVGComponent(categoryId, levelId).then(Comp => {
      if (Comp) setSVGComponent(() => Comp);
    });
  }, [categoryId, levelId]);

  const handleRegionClick = (regionId) => {
    if (completed) return;
    const newColors = { ...colors, [regionId]: selectedColor };
    setColors(newColors);
    onSaveColors?.(newColors);

    // Check completion
    if (levelData?.regions) {
      const allFilled = levelData.regions.every(r => newColors[r] && newColors[r] !== '#FFFFFF');
      if (allFilled && !completed) {
        setCompleted(true);
        setShowCelebration(true);
        onComplete?.();
        setTimeout(() => setShowCelebration(false), 3500);
      }
    }
  };

  const handleClear = () => {
    setColors({});
    onSaveColors?.({});
    setCompleted(false);
    setShowCelebration(false);
  };

  return (
    <div style={{
      display: 'flex', flexDirection: 'column', height: '100%',
      background: '#FFF8EE', position: 'relative',
    }}>
      <Confetti active={showCelebration} />

      {/* Celebration Banner */}
      {showCelebration && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 50,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'rgba(0,0,0,0.4)',
          animation: 'bounceIn 0.5s ease',
        }}>
          <div style={{
            background: 'white', borderRadius: 32,
            padding: '32px 40px', textAlign: 'center',
            border: '4px solid #1a1a1a',
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
            animation: 'bounceIn 0.4s ease',
          }}>
            <div style={{ fontSize: 72, lineHeight: 1 }}>🎉</div>
            <div style={{
              fontFamily: "'Fredoka One', cursive",
              fontSize: 36, color: '#FF6B6B',
              textShadow: '3px 3px 0 #FFD93D',
              marginTop: 8,
            }}>Amazing!</div>
            <div style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: 18, color: '#666',
              fontWeight: 700, marginTop: 6,
            }}>You colored the {levelData?.label}! ⭐</div>
            <button
              onClick={() => setShowCelebration(false)}
              style={{
                marginTop: 20,
                background: 'linear-gradient(135deg, #FF6B6B, #FF8E53)',
                border: '3px solid #1a1a1a', borderRadius: 18,
                padding: '12px 32px', fontSize: 20,
                fontFamily: "'Fredoka One', cursive",
                color: 'white', cursor: 'pointer',
                boxShadow: '0 6px 0 #c0392b',
              }}
            >
              Keep Coloring! 🎨
            </button>
          </div>
        </div>
      )}

      {/* Top Bar */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        padding: '12px 14px', flexShrink: 0,
        background: 'white', borderBottom: '3px solid #1a1a1a',
        boxShadow: '0 3px 12px rgba(0,0,0,0.08)',
      }}>
        <button
          onClick={onBack}
          style={{
            background: '#FF6B6B', border: '3px solid #1a1a1a',
            borderRadius: 16, width: 46, height: 46, flexShrink: 0,
            fontSize: 20, cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'white', boxShadow: '0 4px 0 #c0392b',
          }}
        >←</button>

        <div style={{ flex: 1, textAlign: 'center' }}>
          <div style={{
            fontFamily: "'Fredoka One', cursive",
            fontSize: 22, color: '#333',
            lineHeight: 1,
          }}>
            {levelData?.emoji} {levelData?.label}
          </div>
        </div>

        <button
          onClick={handleClear}
          style={{
            background: '#4D96FF', border: '3px solid #1a1a1a',
            borderRadius: 16, padding: '0 14px', height: 46,
            fontFamily: "'Fredoka One', cursive",
            fontSize: 16, color: 'white', cursor: 'pointer',
            boxShadow: '0 4px 0 #2563eb', flexShrink: 0,
          }}
        >Clear</button>
      </div>

      {/* SVG Canvas */}
      <div style={{
        flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '10px', overflow: 'hidden', position: 'relative',
      }}>
        <div style={{
          width: '100%', height: '100%',
          maxWidth: 420, maxHeight: 480,
          background: 'white',
          borderRadius: 24, border: '3px solid #e0e0e0',
          boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
          overflow: 'hidden',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          {SVGComponent ? (
            <SVGComponent colors={colors} onRegionClick={handleRegionClick} />
          ) : (
            <div style={{
              fontFamily: "'Fredoka One', cursive",
              fontSize: 24, color: '#ccc',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: 48, marginBottom: 8 }}>🎨</div>
              Loading...
            </div>
          )}
        </div>
      </div>

      {/* Color Palette */}
      <div style={{
        background: 'white', borderTop: '3px solid #1a1a1a',
        padding: '12px 10px 16px', flexShrink: 0,
        boxShadow: '0 -4px 20px rgba(0,0,0,0.08)',
      }}>
        <div style={{
          display: 'flex', justifyContent: 'center',
          gap: 8, flexWrap: 'nowrap',
          overflowX: 'auto',
          paddingBottom: 2,
        }}>
          {COLORS.map(color => (
            <ColorSwatch
              key={color.id}
              color={color}
              selected={selectedColor === color.hex}
              onSelect={() => setSelectedColor(color.hex)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ColorSwatch({ color, selected, onSelect }) {
  return (
    <button
      onClick={onSelect}
      style={{
        width: selected ? 54 : 46,
        height: selected ? 54 : 46,
        borderRadius: '50%',
        background: color.hex,
        border: selected
          ? '4px solid #1a1a1a'
          : '3px solid #e0e0e0',
        cursor: 'pointer',
        flexShrink: 0,
        boxShadow: selected
          ? '0 0 0 4px #FFD93D, 0 6px 16px rgba(0,0,0,0.2)'
          : '0 3px 8px rgba(0,0,0,0.12)',
        transition: 'all 0.15s cubic-bezier(0.34, 1.56, 0.64, 1)',
        transform: selected ? 'scale(1.15) translateY(-4px)' : 'scale(1)',
        position: 'relative',
      }}
      title={color.id}
    >
      {color.isEraser && (
        <span style={{
          fontSize: 18, position: 'absolute',
          inset: 0, display: 'flex',
          alignItems: 'center', justifyContent: 'center',
        }}>✏️</span>
      )}
      {selected && !color.isEraser && (
        <span style={{
          fontSize: 12, position: 'absolute',
          inset: 0, display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          color: 'white', filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.5))',
        }}>✓</span>
      )}
    </button>
  );
}
