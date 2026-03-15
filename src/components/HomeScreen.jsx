import { CATEGORIES } from '../data/levels.js';

const styles = {
  screen: {
    display: 'flex', flexDirection: 'column', height: '100%',
    background: 'linear-gradient(160deg, #FFF8EE 0%, #FFE8D6 100%)',
    overflow: 'hidden',
  },
  header: {
    textAlign: 'center', padding: '28px 20px 18px',
    flexShrink: 0,
  },
  logo: {
    fontSize: 52, lineHeight: 1,
    animation: 'float 3s ease-in-out infinite',
    display: 'block', marginBottom: 8,
  },
  title: {
    fontFamily: "'Fredoka One', cursive",
    fontSize: 38, color: '#FF6B6B',
    letterSpacing: 1,
    textShadow: '3px 3px 0px #FFD93D',
    margin: 0,
  },
  subtitle: {
    fontFamily: "'Nunito', sans-serif",
    fontSize: 18, color: '#888', fontWeight: 700,
    margin: '6px 0 0',
  },
  grid: {
    flex: 1, display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '14px', padding: '12px 18px 20px',
    overflowY: 'auto',
    alignContent: 'center',
  },
};

const categoryGradients = [
  'linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)',
  'linear-gradient(135deg, #FF85A1 0%, #FF6FA3 100%)',
  'linear-gradient(135deg, #4D96FF 0%, #5AC8FA 100%)',
  'linear-gradient(135deg, #C77DFF 0%, #A56BEF 100%)',
  'linear-gradient(135deg, #FFD93D 0%, #FF9F43 100%)',
];

export default function HomeScreen({ onSelectCategory, progress }) {
  return (
    <div style={styles.screen}>
      <div style={styles.header}>
        <span style={styles.logo}>🎨</span>
        <h1 style={styles.title}>Color & Play!</h1>
        <p style={styles.subtitle}>Pick a category to start</p>
      </div>

      <div style={styles.grid}>
        {CATEGORIES.map((cat, i) => {
          const completed = Object.values(progress[cat.id] || {}).filter(Boolean).length;
          const total = 6;
          return (
            <CategoryCard
              key={cat.id}
              cat={cat}
              gradient={categoryGradients[i]}
              completed={completed}
              total={total}
              onClick={() => onSelectCategory(cat.id)}
            />
          );
        })}
        {/* Wide "All" button or fun bottom card */}
        <div style={{
          gridColumn: '1 / -1',
          background: 'linear-gradient(135deg, #43E97B 0%, #38F9D7 100%)',
          borderRadius: 24, padding: '18px 24px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          cursor: 'pointer', boxShadow: '0 6px 20px rgba(67,233,123,0.35)',
          border: '3px solid #1a1a1a',
        }}
          onClick={() => onSelectCategory('all')}
        >
          <div>
            <div style={{ fontFamily: "'Fredoka One',cursive", fontSize: 24, color: 'white', textShadow: '2px 2px 0 rgba(0,0,0,0.2)' }}>⭐ All Drawings</div>
            <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 15, color: 'rgba(255,255,255,0.9)', fontWeight: 700 }}>Mix everything!</div>
          </div>
          <div style={{ fontSize: 42 }}>🌈</div>
        </div>
      </div>
    </div>
  );
}

function CategoryCard({ cat, gradient, completed, total, onClick }) {
  const pct = (completed / total) * 100;
  return (
    <div
      onClick={onClick}
      style={{
        background: gradient,
        borderRadius: 24, padding: '20px 16px',
        cursor: 'pointer',
        boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
        border: '3px solid #1a1a1a',
        transition: 'transform 0.15s, box-shadow 0.15s',
        position: 'relative', overflow: 'hidden',
        userSelect: 'none',
      }}
      onPointerDown={e => e.currentTarget.style.transform = 'scale(0.95)'}
      onPointerUp={e => { e.currentTarget.style.transform = 'scale(1)'; }}
      onPointerLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
    >
      {/* Decorative circle */}
      <div style={{
        position: 'absolute', right: -20, top: -20,
        width: 90, height: 90,
        background: 'rgba(255,255,255,0.15)',
        borderRadius: '50%',
      }} />
      <div style={{ fontSize: 44, marginBottom: 8, display: 'block' }}>{cat.emoji}</div>
      <div style={{
        fontFamily: "'Fredoka One', cursive",
        fontSize: 22, color: 'white',
        textShadow: '2px 2px 0 rgba(0,0,0,0.2)',
        marginBottom: 10,
      }}>
        {cat.label}
      </div>
      {/* Progress bar */}
      <div style={{
        background: 'rgba(0,0,0,0.2)', borderRadius: 99,
        height: 10, overflow: 'hidden',
      }}>
        <div style={{
          width: `${pct}%`, height: '100%',
          background: 'rgba(255,255,255,0.8)',
          borderRadius: 99,
          transition: 'width 0.5s ease',
        }} />
      </div>
      <div style={{
        fontFamily: "'Nunito',sans-serif",
        fontSize: 13, color: 'rgba(255,255,255,0.9)',
        fontWeight: 800, marginTop: 4,
      }}>
        {completed}/{total} done
      </div>
    </div>
  );
}
