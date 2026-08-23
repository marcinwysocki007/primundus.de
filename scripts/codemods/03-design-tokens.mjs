// Etappe A der Design-Vereinheitlichung: Hex-Klassen → pm-Tokens.
// Pass 1 ersetzt exakte Klassenketten (pixelidentisch), Pass 2 einzelne
// Utilities je Kernfarbe. Excludes: Seiten mit offener fremder Arbeit
// (Startseite, ueber-uns, franchisepartner — folgen in Etappe B/D) und
// components/ui (CookieConsent/shadcn, Etappe E).
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

function walk(dir, out = []) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) {
      if (p.startsWith('components/ui')) continue;
      walk(p, out);
    } else if (p.endsWith('.tsx')) out.push(p);
  }
  return out;
}

const EXCLUDE = [];  // seit Etappe B/C: keine Ausnahmen mehr
const files = [
  ...walk('app'),
  ...walk('components'),
  'scripts/generate-pages.mjs',
  'scripts/regenerate-hubs.mjs',
].filter((f) => !EXCLUDE.includes(f));

// Pass 1 — exakte Ketten (Reihenfolge: lang vor kurz)
const KETTEN = [
  ['text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6',
   'text-h1 md:text-h1-lg font-bold text-pm-ink mb-6'],
  ['text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mb-4 leading-snug',
   'text-h2 md:text-h2-lg font-bold text-pm-ink mb-4'],
  ['max-w-[860px] mx-auto px-5', 'max-w-article mx-auto px-5'],
];

// Hover-Vereinheitlichung (einzige gewollte Farbänderung in Etappe A — nur Hover-Zustand)
const HOVER = [
  ['hover:bg-[#D65E52]', 'hover:bg-pm-coral-deep'],
  ['hover:bg-[#D4625A]', 'hover:bg-pm-coral-deep'],
];

// Pass 2 — Einzel-Utilities je Kernfarbe (Präfixe wie hover:/md: bleiben intakt,
// weil nur der Utility-Kern ersetzt wird)
const FARBEN = {
  '1C1C1C': 'pm-ink', '2E2E2E': 'pm-body', '8B8B8B': 'pm-mute',
  '8B7355': 'pm-taupe', 'A89279': 'pm-taupe-light', '7D6E5D': 'pm-taupe-deep',
  '6B5A44': 'pm-taupe-ink', 'F8F7F5': 'pm-paper', 'F2EDE6': 'pm-shell',
  'E5E3DF': 'pm-line', 'F0EDE8': 'pm-line-soft', '3D7A5C': 'pm-green', '2A5C3F': 'pm-green-deep', 'E8F5EE': 'pm-mint',
  'E76F63': 'pm-coral', 'D45F53': 'pm-coral-deep', 'FDF0EE': 'pm-coral-tint',
  '8B3E2F': 'pm-coral-ink', '3D2314': 'pm-cocoa',
};
const UTILS = ['text', 'bg', 'border', 'from', 'to', 'via', 'ring', 'divide', 'fill', 'stroke', 'decoration', 'outline'];

let touched = 0;
for (const f of files) {
  let src = readFileSync(f, 'utf8');
  const before = src;
  for (const [a, b] of [...KETTEN, ...HOVER]) src = src.replaceAll(a, b);
  for (const [hex, token] of Object.entries(FARBEN)) {
    for (const u of UTILS) {
      src = src.replaceAll(`${u}-[#${hex}]`, `${u}-${token}`);
      src = src.replaceAll(`${u}-[#${hex.toLowerCase()}]`, `${u}-${token}`);
    }
  }
  if (src !== before) { writeFileSync(f, src); touched++; }
}
console.log(`geändert: ${touched} von ${files.length} Dateien`);

// Rest-Erkennung
// 3D3D3D/5A5A5A/6B6B6B = Marketing-Grau, wird in Etappe B auf ink/body vereinheitlicht
const WHITELIST = /25D366|20C05A|5C9F6E|F0EBE3|708A95|E8F5E3|D4A843|3D3D3D|5A5A5A|6B6B6B/i;
const rest = new Map();
for (const f of files) {
  const hits = readFileSync(f, 'utf8').match(/[a-z]+-\[#[0-9A-Fa-f]{6}\]/g) || [];
  const echt = hits.filter((h) => !WHITELIST.test(h));
  if (echt.length) rest.set(f, [...new Set(echt)]);
}
console.log(`Dateien mit Rest-Hex (ohne Whitelist): ${rest.size}`);
let n = 0;
for (const [f, hits] of rest) { if (n++ < 15) console.log(' ', f, '→', hits.slice(0, 6).join(' ')); }
