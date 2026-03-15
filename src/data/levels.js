// Level data: 5 categories × 30 levels = 150 total
// Levels 1-6 per category are unique drawings; 7-30 are locked (coming soon)

export const CATEGORIES = [
  { id: 'fruits',  label: 'Fruits',   emoji: '🍓', color: '#FF6B6B', bg: '#FFF0F0' },
  { id: 'flowers', label: 'Flowers',  emoji: '🌸', color: '#FF85A1', bg: '#FFF0F5' },
  { id: 'animals', label: 'Animals',  emoji: '🐱', color: '#4D96FF', bg: '#F0F5FF' },
  { id: 'dress',   label: 'Dress Up', emoji: '👗', color: '#C77DFF', bg: '#F8F0FF' },
  { id: 'objects', label: 'Objects',  emoji: '⭐', color: '#FFD93D', bg: '#FFFBF0' },
];

export const LEVELS = {
  fruits: [
    { id: 'strawberry',  label: 'Strawberry', emoji: '🍓', regions: ['body','leaves'] },
    { id: 'apple',       label: 'Apple',       emoji: '🍎', regions: ['body','leaf','stem'] },
    { id: 'banana',      label: 'Banana',      emoji: '🍌', regions: ['skin','tip'] },
    { id: 'orange',      label: 'Orange',      emoji: '🍊', regions: ['body','leaf'] },
    { id: 'grapes',      label: 'Grapes',      emoji: '🍇', regions: ['grapes','leaf','stem'] },
    { id: 'watermelon',  label: 'Watermelon',  emoji: '🍉', regions: ['flesh','rind'] },
    ...Array.from({length: 24}, (_, i) => ({ id: `fruit_soon_${i}`, label: 'Coming Soon', emoji: '🔒', locked: true })),
  ],
  flowers: [
    { id: 'sunflower',   label: 'Sunflower',  emoji: '🌻', regions: ['petals','center','stem','leaf'] },
    { id: 'rose',        label: 'Rose',        emoji: '🌹', regions: ['petals','stem','leaf'] },
    { id: 'tulip',       label: 'Tulip',       emoji: '🌷', regions: ['petals','stem','leaf'] },
    { id: 'daisy',       label: 'Daisy',       emoji: '🌼', regions: ['petals','center','stem'] },
    { id: 'simpleflower',label: 'Flower',      emoji: '🌺', regions: ['petals','center','stem','leaf'] },
    { id: 'lotus',       label: 'Lotus',       emoji: '🪷', regions: ['outer','inner','center'] },
    ...Array.from({length: 24}, (_, i) => ({ id: `flower_soon_${i}`, label: 'Coming Soon', emoji: '🔒', locked: true })),
  ],
  animals: [
    { id: 'cat',       label: 'Cat',      emoji: '🐱', regions: ['body','head','ears','face','tail'] },
    { id: 'dog',       label: 'Dog',      emoji: '🐶', regions: ['body','head','ears','tail'] },
    { id: 'fish',      label: 'Fish',     emoji: '🐟', regions: ['body','tail','fin'] },
    { id: 'bird',      label: 'Bird',     emoji: '🐥', regions: ['body','wing','beak'] },
    { id: 'elephant',  label: 'Elephant', emoji: '🐘', regions: ['body','ear','trunk'] },
    { id: 'rabbit',    label: 'Rabbit',   emoji: '🐰', regions: ['body','ears','face'] },
    ...Array.from({length: 24}, (_, i) => ({ id: `animal_soon_${i}`, label: 'Coming Soon', emoji: '🔒', locked: true })),
  ],
  dress: [
    { id: 'dress',   label: 'Dress',   emoji: '👗', regions: ['skirt','bodice','straps'] },
    { id: 'tshirt',  label: 'T-Shirt', emoji: '👕', regions: ['body','sleeves'] },
    { id: 'hat',     label: 'Hat',     emoji: '🎩', regions: ['brim','crown','band'] },
    { id: 'shoe',    label: 'Shoe',    emoji: '👟', regions: ['sole','upper','laces'] },
    { id: 'sock',    label: 'Sock',    emoji: '🧦', regions: ['leg','foot','stripe'] },
    { id: 'crown',   label: 'Crown',   emoji: '👑', regions: ['base','spikes','gems'] },
    ...Array.from({length: 24}, (_, i) => ({ id: `dress_soon_${i}`, label: 'Coming Soon', emoji: '🔒', locked: true })),
  ],
  objects: [
    { id: 'house',     label: 'House',    emoji: '🏠', regions: ['walls','roof','door','window'] },
    { id: 'star',      label: 'Star',     emoji: '⭐', regions: ['body'] },
    { id: 'heart',     label: 'Heart',    emoji: '❤️',  regions: ['body'] },
    { id: 'car',       label: 'Car',      emoji: '🚗', regions: ['body','roof','wheels','window'] },
    { id: 'balloon',   label: 'Balloon',  emoji: '🎈', regions: ['body','ribbon'] },
    { id: 'umbrella',  label: 'Umbrella', emoji: '☂️',  regions: ['canopy','handle'] },
    ...Array.from({length: 24}, (_, i) => ({ id: `object_soon_${i}`, label: 'Coming Soon', emoji: '🔒', locked: true })),
  ],
};

export const getSVGComponent = async (categoryId, levelId) => {
  const modules = {
    // Fruits
    strawberry:   () => import('../svgs/fruits.jsx').then(m => m.Strawberry),
    apple:        () => import('../svgs/fruits.jsx').then(m => m.Apple),
    banana:       () => import('../svgs/fruits.jsx').then(m => m.Banana),
    orange:       () => import('../svgs/fruits.jsx').then(m => m.Orange),
    grapes:       () => import('../svgs/fruits.jsx').then(m => m.Grapes),
    watermelon:   () => import('../svgs/fruits.jsx').then(m => m.Watermelon),
    // Flowers
    sunflower:    () => import('../svgs/flowers.jsx').then(m => m.Sunflower),
    rose:         () => import('../svgs/flowers.jsx').then(m => m.Rose),
    tulip:        () => import('../svgs/flowers.jsx').then(m => m.Tulip),
    daisy:        () => import('../svgs/flowers.jsx').then(m => m.Daisy),
    simpleflower: () => import('../svgs/flowers.jsx').then(m => m.SimpleFlower),
    lotus:        () => import('../svgs/flowers.jsx').then(m => m.Lotus),
    // Animals
    cat:          () => import('../svgs/animals.jsx').then(m => m.Cat),
    dog:          () => import('../svgs/animals.jsx').then(m => m.Dog),
    fish:         () => import('../svgs/animals.jsx').then(m => m.Fish),
    bird:         () => import('../svgs/animals.jsx').then(m => m.Bird),
    elephant:     () => import('../svgs/animals.jsx').then(m => m.Elephant),
    rabbit:       () => import('../svgs/animals.jsx').then(m => m.Rabbit),
    // Dress
    dress:        () => import('../svgs/dress.jsx').then(m => m.Dress),
    tshirt:       () => import('../svgs/dress.jsx').then(m => m.TShirt),
    hat:          () => import('../svgs/dress.jsx').then(m => m.Hat),
    shoe:         () => import('../svgs/dress.jsx').then(m => m.Shoe),
    sock:         () => import('../svgs/dress.jsx').then(m => m.Sock),
    crown:        () => import('../svgs/dress.jsx').then(m => m.Crown),
    // Objects
    house:        () => import('../svgs/objects.jsx').then(m => m.House),
    star:         () => import('../svgs/objects.jsx').then(m => m.Star),
    heart:        () => import('../svgs/objects.jsx').then(m => m.Heart),
    car:          () => import('../svgs/objects.jsx').then(m => m.Car),
    balloon:      () => import('../svgs/objects.jsx').then(m => m.Balloon),
    umbrella:     () => import('../svgs/objects.jsx').then(m => m.Umbrella),
  };
  if (modules[levelId]) return modules[levelId]();
  return null;
};
