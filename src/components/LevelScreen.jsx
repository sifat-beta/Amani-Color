import { CATEGORIES, LEVELS } from '../data/levels.js';

export default function LevelScreen({ categoryId, onSelectLevel, onBack, progress }) {
  const allLevels = categoryId === 'all'
    ? CATEGORIES.flatMap(cat => (LEVELS[cat.id] || []).map(l => ({ ...l, catId: cat.id })))
    : (LEVELS[categoryId] || []).map(l => ({ ...l, catId: categoryId }));

  const cat = CATEGORIES.find(c => c.id === categoryId);
  const gradient = categoryId === 'all'
    ? 'linear-gradient(135deg, #43E97B 0%, #38F9D7 100%)'
    : catGradient(categoryId);

  return (
    <div style={{
      display: 'flex', flexDirection: 'column', height: '100%',
      background: 'linear-gradient(160deg, #FFF8EE 0%, #FFE8D6 100%)',
    }}>
      {/* Header */}
      <div style={{
        background: gradient,
        padding: '20px 20px 24px',
        borderBottom: '3px solid #1a1a1a',
        flexShrink: 0,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button
            onClick={onBack}
            style={{
              background: 'rgba(255,255,255,0.3)',
              border: '3px solid rgba(255,255,255,0.6)',
              borderRadius: 16, width: 48, height: 48,
              fontSize: 22, cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'white', flexShrink: 0,
            }}
          >←</button>
          <div>
            <div style={{
              fontFamily: "'Fredoka One', cursive",
              fontSize: 28, color: 'white',
              textShadow: '2px 2px 0 rgba(0,0,0,0.2)',
            }}>
              {categoryId === 'all' ? '🌈 All Drawings' : `${cat?.emoji} ${cat?.label}`}
            </div>
            <div style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: 14, color: 'rgba(255,255,255,0.9)', fontWeight: 700,
            }}>
              {allLevels.filter(l => !l.locked).length} drawings to color!
            </div>
          </div>
        </div>
      </div>

      {/* Level grid */}
      <div style={{
        flex: 1, overflowY: 'auto',
        padding: '16px 14px 24px',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 10,
        alignContent: 'start',
      }}>
        {allLevels.map((level, idx) => {
          const key = `${level.catId || categoryId}_${level.id}`;
          const isDone = progress?.[key]?.completed;
          const isStarted = progress?.[key]?.started;
          if (level.locked) return <LockedCard key={idx} num={idx + 1} />;
          return (
            <LevelCard
              key={key}
              level={level}
              num={idx + 1}
              done={isDone}
              started={isStarted}
              catId={level.catId || categoryId}
              onClick={() => onSelectLevel(level.catId || categoryId, level.id, level)}
            />
          );
        })}
      </div>
    </div>
  );
}

function LevelCard({ level, num, done, started, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        background: done ? 'linear-gradient(135deg, #43E97B, #38F9D7)' : 'white',
        border: `3px solid ${done ? '#2ECC71' : '#1a1a1a'}`,
        borderRadius: 18, padding: '10px 6px',
        cursor: 'pointer', textAlign: 'center',
        boxShadow: done
          ? '0 6px 18px rgba(67,233,123,0.4)'
          : '0 4px 12px rgba(0,0,0,0.1)',
        position: 'relative',
        transition: 'transform 0.12s',
        userSelect: 'none',
      }}
      onPointerDown={e => e.currentTarget.style.transform = 'scale(0.92)'}
      onPointerUp={e => e.currentTarget.style.transform = 'scale(1)'}
      onPointerLeave={e => e.currentTarget.style.transform = 'scale(1)'}
    >
      {done && (
        <div style={{
          position: 'absolute', top: -8, right: -8,
          background: '#FFD93D', border: '3px solid #1a1a1a',
          borderRadius: '50%', width: 26, height: 26,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 14, fontWeight: 900,
        }}>⭐</div>
      )}
      <div style={{ fontSize: 30, lineHeight: 1, marginBottom: 4 }}>{level.emoji}</div>
      <div style={{
        fontFamily: "'Nunito', sans-serif",
        fontSize: 11, fontWeight: 800,
        color: done ? 'white' : '#333',
        lineHeight: 1.2,
      }}>
        {level.label}
      </div>
      <div style={{
        fontFamily: "'Fredoka One', cursive",
        fontSize: 10, color: done ? 'rgba(255,255,255,0.8)' : '#aaa',
        marginTop: 2,
      }}>
        #{num}
      </div>
      {started && !done && (
        <div style={{
          position: 'absolute', bottom: 4, left: '50%',
          transform: 'translateX(-50%)',
          background: '#4D96FF', borderRadius: 99,
          height: 4, width: '60%',
        }} />
      )}
    </div>
  );
}

function LockedCard({ num }) {
  return (
    <div style={{
      background: '#F5F5F5', border: '3px dashed #DDD',
      borderRadius: 18, padding: '10px 6px',
      textAlign: 'center', opacity: 0.7,
      userSelect: 'none',
    }}>
      <div style={{ fontSize: 26, lineHeight: 1, marginBottom: 4 }}>🔒</div>
      <div style={{
        fontFamily: "'Nunito', sans-serif",
        fontSize: 10, fontWeight: 800, color: '#BBB',
      }}>Soon!</div>
      <div style={{
        fontFamily: "'Fredoka One', cursive",
        fontSize: 10, color: '#CCC', marginTop: 2,
      }}>#{num}</div>
    </div>
  );
}

function catGradient(id) {
  const map = {
    fruits: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)',
    flowers: 'linear-gradient(135deg, #FF85A1 0%, #FF6FA3 100%)',
    animals: 'linear-gradient(135deg, #4D96FF 0%, #5AC8FA 100%)',
    dress: 'linear-gradient(135deg, #C77DFF 0%, #A56BEF 100%)',
    objects: 'linear-gradient(135deg, #FFD93D 0%, #FF9F43 100%)',
  };
  return map[id] || 'linear-gradient(135deg, #999, #777)';
}
