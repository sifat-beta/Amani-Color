# 🎨 Color & Play — Toddler Coloring App

A fully touch-friendly, toddler-ready coloring app with 30 hand-crafted SVG drawings organized into 5 categories. Built with React + Vite, ready for Vercel deployment.

## Features
- 🍓 **30 unique drawings** — 6 per category (fruits, flowers, animals, dress-up, objects)
- 🌈 **9 bright colors** + eraser tool
- ⭐ **Star celebrations** when a drawing is complete
- 🎉 **Confetti burst** on completion
- 💾 **Auto-save** — progress saved to localStorage
- 📱 **Touch optimized** — large hit targets, no zoom, smooth finger painting
- 🔒 **150-level structure** — 30 playable + 120 locked "coming soon" slots

## Getting Started

```bash
# Install dependencies
npm install

# Run locally
npm run dev

# Build for production
npm run build
```

## Deploy to Vercel

### Option 1: Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option 2: GitHub Import
1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → Import Project
3. Select the repo → Deploy

The included `vercel.json` handles SPA routing automatically.

## Project Structure

```
src/
├── App.jsx              # Main app with screen routing
├── App.css              # Global styles & animations
├── main.jsx             # React entry point
├── data/
│   └── levels.js        # 150-level definitions
├── components/
│   ├── HomeScreen.jsx   # Category selection
│   ├── LevelScreen.jsx  # Level grid (30 per category)
│   └── ColoringScreen.jsx  # Coloring + palette
└── svgs/
    ├── fruits.jsx       # 🍓 Strawberry, Apple, Banana, Orange, Grapes, Watermelon
    ├── flowers.jsx      # 🌻 Sunflower, Rose, Tulip, Daisy, Simple Flower, Lotus
    ├── animals.jsx      # 🐱 Cat, Dog, Fish, Bird, Elephant, Rabbit
    ├── dress.jsx        # 👗 Dress, T-Shirt, Hat, Shoe, Sock, Crown
    └── objects.jsx      # ⭐ House, Star, Heart, Car, Balloon, Umbrella
```

## Adding More Drawings

1. Create your SVG component in the appropriate `src/svgs/*.jsx` file
2. Add the level entry to `src/data/levels.js`
3. Add the import mapping in `getSVGComponent()` in `levels.js`

Each SVG component receives:
```jsx
{ colors: { regionId: '#hexColor' }, onRegionClick: (regionId) => void }
```

## SVG Design Guidelines
- `viewBox="0 0 400 450"`
- `strokeWidth` ≥ 10 for thick toddler-friendly lines
- `fill={colors[regionId] || '#FFFFFF'}` for each colorable region
- Large clickable areas — minimum ~40×40px per region
- Bold `stroke="#1a1a1a"` on all colored regions
