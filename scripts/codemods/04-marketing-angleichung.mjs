// Etappe B: Marketing-/Hub-Seiten auf die Artikel-Linie.
// - Grau-Familie B (#3D3D3D/#5A5A5A/#6B6B6B) → pm-ink/body/mute
// - H1-Sondergrößen (36/50, 32/46, 30/40, 32/40, 28/36) → h1/h1-lg
// Läuft über ALLE Seiten inkl. der in Etappe A ausgeklammerten.
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
const files = [...walk('app'), ...walk('components'), 'scripts/generate-pages.mjs', 'scripts/regenerate-hubs.mjs'];

const ERSATZ = [
  // Grau-Familie B → A (alle Utility-Formen)
  ['text-[#3D3D3D]', 'text-pm-ink'], ['text-[#5A5A5A]', 'text-pm-body'], ['text-[#6B6B6B]', 'text-pm-mute'],
  ['bg-[#3D3D3D]', 'bg-pm-ink'], ['border-[#3D3D3D]', 'border-pm-ink'],
  ['text-[#5a5a5a]', 'text-pm-body'],
  // H1-Sondergrößen → Standard (Reihenfolge egal, exakte Paare)
  ['text-[36px] md:text-[50px]', 'text-h1 md:text-h1-lg'],
  ['text-[32px] md:text-[46px]', 'text-h1 md:text-h1-lg'],
  ['text-[32px] md:text-[42px]', 'text-h1 md:text-h1-lg'],
  ['text-[32px] md:text-[40px]', 'text-h1 md:text-h1-lg'],
  ['text-[30px] md:text-[40px]', 'text-h1 md:text-h1-lg'],
  ['text-[28px] md:text-[36px]', 'text-h1 md:text-h1-lg'],
  // H2-Marketing-Variante → Standard
  ['text-[24px] md:text-[30px]', 'text-h2 md:text-h2-lg'],
  ['text-[24px] md:text-[28px]', 'text-h2 md:text-h2-lg'],
];

let touched = 0;
for (const f of files) {
  let src = readFileSync(f, 'utf8');
  const before = src;
  for (const [a, b] of ERSATZ) src = src.replaceAll(a, b);
  if (src !== before) { writeFileSync(f, src); touched++; }
}
console.log(`geändert: ${touched} Dateien`);
// Reste der Familie B
let rest = 0;
for (const f of files) {
  const t = readFileSync(f, 'utf8');
  if (/#3D3D3D|#5A5A5A|#6B6B6B/i.test(t)) { rest++; if (rest <= 8) console.log('  Rest:', f); }
}
console.log(`Dateien mit Familie-B-Resten: ${rest}`);
