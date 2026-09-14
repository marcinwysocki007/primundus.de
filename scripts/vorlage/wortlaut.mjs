#!/usr/bin/env node
// Wortlaut-Prüfung für den Umbau auf die neuen Seitenvorlagen (14.09.2026).
//
// Martins Regel: Beim Optik-Umbau ändert sich kein Wort. Dieses Skript vergleicht
// den Quelltext einer Seite mit ihrem Stand in einem Git-Ref (Standard: main) und
// meldet
//   FEHLT  — Textstücke der alten Fassung, die in der neuen nicht mehr stehen
//   NEU    — Textstücke der neuen Fassung, die es vorher nicht gab
// Geprüft werden Zeichenketten und JSX-Texte ab drei Wörtern, Leerraum egal.
// Bekannte Umformungen der Vorlage sind erlaubt: „→ " vor Linkzeilen, Symbole
// (✓ ! +), die Kopfzeile mit Lesezeit/Datum (steht jetzt in der Autorenzeile).
//
// Aufruf: node scripts/vorlage/wortlaut.mjs <slug> [<slug> …] [--ref main] [--still]
// Ausgang 1, wenn eine Seite FEHLT- oder NEU-Stücke hat.
import { execFileSync } from 'node:child_process'
import { readFileSync } from 'node:fs'

const args = process.argv.slice(2)
const refIdx = args.indexOf('--ref')
const REF = refIdx >= 0 ? args[refIdx + 1] : 'main'
const STILL = args.includes('--still')
const slugs = args.filter((a, i) => !a.startsWith('--') && (refIdx < 0 || i !== refIdx + 1))

const norm = (t) =>
  t
    .replace(/\{' '\}/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/\\'/g, "'")
    .replace(/\\"/g, '"')
    .replace(/\s+/g, ' ')
    .trim()

// Klassenlisten, Pfade und Code sind kein Text
const istCode = (t) =>
  /(^|\s)(text|bg|border|rounded|flex|grid|px|py|pt|pb|mt|mb|mx|my|gap|w|h|max|min|font|leading|tracking|items|justify|space|shadow|overflow|hover|md|sm|lg|group|inline|block|hidden|sr|divide|order|col|row|place|self|z|top|left|right|bottom|inset)-/.test(t) ||
  /^[/#@.,]/.test(t) || /[{}]|=>|\(\)|===|\bconst\b|\bimport\b/.test(t) || /^https?:/.test(t)

// Erlaubte Umformungen der Vorlage vor dem Vergleich entfernen
const glaetten = (t) =>
  norm(t)
    .replace(/^→\s*/, '')
    .replace(/^[✓!+]\s*/, '')
    .trim()

// Texte, die jetzt die Bausteine selbst setzen (components/vorlage)
const VORLAGE_TEXTE = new Set(['Auf einen Blick'])
// Themenzeile der Vorlage („Ratgeber Multiple Sklerose") ist gewollt neu
const augenbraue = (t) => /^Ratgeber( [\wÄÖÜäöüß-]+){0,3}$/.test(t)

function stuecke(src) {
  // Kommentare sind kein Seitentext
  const body = src.replace(/\/\*[\s\S]*?\*\//g, ' ').replace(/^\s*\/\/.*$/gm, ' ').replace(/\{\/\*[\s\S]*?\*\/\}/g, ' ')
  const out = new Set()
  // Zeichenketten in '…' und "…" (auch mehrzeilig nicht nötig: Quelltexte nutzen einzeilige Strings)
  for (const m of body.matchAll(/'((?:[^'\\\n]|\\.){12,})'|"((?:[^"\\\n]|\\.){12,})"|`([^`]{12,})`/g)) {
    const t = glaetten(m[1] ?? m[2] ?? m[3] ?? '')
    if (t.split(' ').length >= 3 && !istCode(t)) out.add(t)
  }
  // JSX-Texte zwischen > und < bzw. {
  for (const m of body.matchAll(/>([^<>{}]{12,})(?=[<{])/g)) {
    const t = glaetten(m[1])
    if (t.split(' ').length >= 3 && !istCode(t)) out.add(t)
  }
  return out
}

// Kopfzeile „8 Min Lesezeit · Apr. 2026" / „Ratgeber · 5 Min Lesezeit · Aktualisiert August 2026"
// ist in die Autorenzeile gewandert.
const kopfzeile = (t) => /Min\.?( Lesezeit)?\b|Aktualisiert/.test(t) && t.length < 90

let fehler = 0
for (const slug of slugs) {
  const datei = `app/${slug}/page.tsx`
  let alt
  try {
    alt = execFileSync('git', ['show', `${REF}:${datei}`], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] })
  } catch {
    console.log(`${slug}: nicht in ${REF} — übersprungen`)
    continue
  }
  const neu = readFileSync(datei, 'utf8')
  const neuFlach = glaetten(neu.replace(/\{' '\}/g, ' '))
  const altFlach = glaetten(alt.replace(/\{' '\}/g, ' '))
  const a = stuecke(alt.replace(/<ArticleCTA[\s\S]*?\/>/g, ''))
  const n = stuecke(neu)
  const fehlt = [...a].filter((t) => !kopfzeile(t) && !VORLAGE_TEXTE.has(t) && !neuFlach.includes(t))
  const dazu = [...n].filter((t) => !altFlach.includes(t) && !augenbraue(t))
  if (fehlt.length || dazu.length) fehler++
  if (!STILL || fehlt.length || dazu.length) {
    console.log(`${fehlt.length || dazu.length ? '✗' : '✓'} ${slug}: ${a.size} Stücke, ${fehlt.length} fehlen, ${dazu.length} neu`)
    for (const t of fehlt) console.log(`   FEHLT  ${t.slice(0, 160)}`)
    for (const t of dazu) console.log(`   NEU    ${t.slice(0, 160)}`)
  }
}
process.exit(fehler ? 1 : 0)
