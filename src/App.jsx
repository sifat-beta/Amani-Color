import { useState, useEffect } from 'react';
import HomeScreen from './components/HomeScreen.jsx';
import LevelScreen from './components/LevelScreen.jsx';
import ColoringScreen from './components/ColoringScreen.jsx';

// ─── LOCAL STORAGE HELPERS ────────────────────────────────────────────────────
const STORAGE_KEY = 'colorplay_v1';

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : { progress: {}, savedColors: {} };
  } catch { return { progress: {}, savedColors: {} }; }
}

function saveState(state) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch {}
}

// ─── SCREEN TRANSITIONS ───────────────────────────────────────────────────────
const Screen = ({ children, visible }) => (
  <div style={{
    position: 'absolute', inset: 0,
    transition: 'opacity 0.25s ease, transform 0.25s ease',
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(24px)',
    pointerEvents: visible ? 'auto' : 'none',
    zIndex: visible ? 1 : 0,
  }}>
    {children}
  </div>
);

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [screen, setScreen] = useState('home'); // 'home' | 'levels' | 'coloring'
  const [categoryId, setCategoryId] = useState(null);
  const [levelId, setLevelId] = useState(null);
  const [levelData, setLevelData] = useState(null);
  const [state, setState] = useState(loadState);

  const { progress, savedColors } = state;

  const updateState = (newState) => {
    setState(newState);
    saveState(newState);
  };

  const handleSelectCategory = (catId) => {
    setCategoryId(catId);
    setScreen('levels');
  };

  const handleSelectLevel = (catId, lvlId, lvlData) => {
    setCategoryId(catId);
    setLevelId(lvlId);
    setLevelData(lvlData);
    setScreen('coloring');

    // Mark as started
    const key = `${catId}_${lvlId}`;
    if (!progress[key]?.started) {
      const newProgress = {
        ...progress,
        [key]: { ...progress[key], started: true },
      };
      updateState({ ...state, progress: newProgress });
    }
  };

  const handleComplete = () => {
    const key = `${categoryId}_${levelId}`;
    const newProgress = {
      ...progress,
      [key]: { ...progress[key], started: true, completed: true },
    };
    updateState({ ...state, progress: newProgress });
  };

  const handleSaveColors = (colors) => {
    const key = `${categoryId}_${levelId}`;
    const newSavedColors = { ...savedColors, [key]: colors };
    updateState({ ...state, savedColors: newSavedColors });
  };

  const currentKey = categoryId && levelId ? `${categoryId}_${levelId}` : null;
  const currentSavedColors = currentKey ? (savedColors[currentKey] || {}) : {};

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', background: '#FFF8EE' }}>
      <Screen visible={screen === 'home'}>
        <HomeScreen
          onSelectCategory={handleSelectCategory}
          progress={
            // Convert flat progress keys to category buckets
            Object.fromEntries(
              ['fruits','flowers','animals','dress','objects'].map(cat => [
                cat,
                Object.fromEntries(
                  Object.entries(progress)
                    .filter(([k]) => k.startsWith(cat + '_'))
                    .map(([k, v]) => [k, v])
                ),
              ])
            )
          }
        />
      </Screen>

      <Screen visible={screen === 'levels'}>
        <LevelScreen
          categoryId={categoryId}
          onSelectLevel={handleSelectLevel}
          onBack={() => setScreen('home')}
          progress={progress}
        />
      </Screen>

      <Screen visible={screen === 'coloring'}>
        <ColoringScreen
          categoryId={categoryId}
          levelId={levelId}
          levelData={levelData}
          onBack={() => setScreen('levels')}
          onComplete={handleComplete}
          savedColors={currentSavedColors}
          onSaveColors={handleSaveColors}
        />
      </Screen>
    </div>
  );
}
