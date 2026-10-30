// Pola segitiga geometris (merah, navy, abu) seperti di referensi
const CELL = 40;
const SHAPES = [
  [0, 0, 'tl', 'r'], [1, 0, 'br', 'n'], [2, 0, 'tl', 'g'],
  [0, 1, 'tr', 'n'], [1, 1, 'bl', 'r'], [2, 1, 'tl', 'n'], [3, 1, 'br', 'r'],
  [0, 2, 'br', 'r'], [1, 2, 'tl', 'g'], [2, 2, 'br', 'n'], [3, 2, 'tr', 'g'],
  [0, 3, 'tl', 'g'], [1, 3, 'tr', 'r'], [2, 3, 'bl', 'n'], [3, 3, 'tl', 'r'],
];
const POINTS = {
  tl: (x, y) => `${x},${y} ${x + CELL},${y} ${x},${y + CELL}`,
  tr: (x, y) => `${x},${y} ${x + CELL},${y} ${x + CELL},${y + CELL}`,
  bl: (x, y) => `${x},${y} ${x + CELL},${y + CELL} ${x},${y + CELL}`,
  br: (x, y) => `${x + CELL},${y} ${x + CELL},${y + CELL} ${x},${y + CELL}`,
};
const COLORS = {
  light: { r: '#E11D2E', n: '#1B2340', g: '#D5D9E2' },
  dark: { r: '#E11D2E', n: '#2B3556', g: '#3B4468' },
};

export default function TriangleArt({ theme = 'light', className = '' }) {
  const c = COLORS[theme];
  return (
    <svg viewBox="0 0 160 160" className={className} aria-hidden="true">
      {SHAPES.map(([cx, cy, t, col], i) => (
        <polygon key={i} points={POINTS[t](cx * CELL, cy * CELL)} fill={c[col]} />
      ))}
    </svg>
  );
}
