// Etappe C (vorgezogen nach Martins Feedback 23.08.): EINE Seiten-Shell.
// Jede Seite startet identisch: max-w-article mx-auto px-5 py-10 md:py-16.
// Einzige Breiten-Ausnahme: anbieter-vergleich (max-w-wide, 8-Spalten-Tabelle).
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

const STANDARD = 'max-w-article mx-auto px-5 py-10 md:py-16';
const ERSATZ = [
  // Hub-/Marketing-Shells → Standard
  ['max-w-[900px] mx-auto px-5 py-14', STANDARD],
  ['max-w-[1100px] mx-auto px-5 py-16', STANDARD],
  ['max-w-[1100px] mx-auto px-5 py-14', STANDARD],
  ['max-w-article mx-auto px-5 py-14', STANDARD],
  ['max-w-article mx-auto px-5 py-16', STANDARD],
  ['max-w-[860px] mx-auto px-5 pt-10 pb-20', STANDARD],
  ['max-w-[720px] mx-auto px-5 py-14', STANDARD],
  ['max-w-narrow mx-auto px-5 py-14', STANDARD],
  // Vergleichs-Hub: breite Tabelle, gleicher Rhythmus
  ['max-w-[980px] mx-auto px-5 py-14', 'max-w-wide mx-auto px-5 py-10 md:py-16'],
  // Rest-Breiten ohne py im selben String
  ['max-w-[900px] mx-auto px-5', 'max-w-article mx-auto px-5'],
  ['max-w-[860px] mx-auto px-5', 'max-w-article mx-auto px-5'],
];

let touched = 0;
for (const f of files) {
  let src = readFileSync(f, 'utf8');
  const before = src;
  for (const [a, b] of ERSATZ) src = src.replaceAll(a, b);
  if (src !== before) { writeFileSync(f, src); touched++; }
}
console.log(`geändert: ${touched} Dateien`);
// Rest-Kontrolle: Seiten-Shells, die noch abweichen
for (const f of files) {
  const t = readFileSync(f, 'utf8');
  const m = t.match(/max-w-(\[[0-9]+px\]|narrow|wide) mx-auto px-5 py-[^ "]*/g);
  if (m) {
    const abw = m.filter((x) => !x.startsWith('max-w-wide mx-auto px-5 py-10'));
    if (abw.length) console.log('  Abweichung:', f, '→', [...new Set(abw)].join(' | '));
  }
}
