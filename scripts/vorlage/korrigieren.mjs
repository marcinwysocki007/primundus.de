#!/usr/bin/env node
// Wendet eine freigegebene Korrekturliste an (scripts/vorlage/korrekturen-*.json).
// Jede Korrektur: seite, alt (exakter Wortlaut, Leerraum egal), neu. Ohne "mehrfach"
// muss der alte Wortlaut genau einmal vorkommen — sonst wird nichts geändert und die
// Stelle gemeldet. Ausgabe: je Korrektur Treffer und Ergebnis.
//
// Aufruf: node scripts/vorlage/korrigieren.mjs <liste.json> [--trocken]
import { readFileSync, writeFileSync } from 'node:fs'

const [liste] = process.argv.slice(2).filter((a) => !a.startsWith('--'))
const TROCKEN = process.argv.includes('--trocken')
const { korrekturen } = JSON.parse(readFileSync(liste, 'utf8'))

const muster = (t) => new RegExp(t.trim().split(/\s+/).map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('\\s+'), 'g')

let fehler = 0
const dateien = new Map()
for (const k of korrekturen) {
  const datei = `app/${k.seite}/page.tsx`
  const src = dateien.get(datei) ?? readFileSync(datei, 'utf8')
  const loeschen = !k.neu.trim()
  // Wird ein Satz gestrichen, das folgende Leerzeichen mitnehmen — nur an dieser Stelle
  const rx = loeschen ? new RegExp(muster(k.alt).source + '[ \\t]*', 'g') : muster(k.alt)
  const treffer = src.match(rx)?.length ?? 0
  if (k.optional && treffer === 0) {
    console.log(`– ${k.seite} · 0× (optional) · ${k.alt.slice(0, 70)}`)
    continue
  }
  const ok = k.mehrfach ? treffer >= 1 : treffer === 1
  console.log(`${ok ? '✓' : '✗'} ${k.seite} · ${treffer}× · ${k.alt.slice(0, 70)}`)
  if (!ok) {
    fehler++
    continue
  }
  dateien.set(datei, src.replace(rx, loeschen ? '' : k.neu))
}
if (!TROCKEN) for (const [datei, src] of dateien) writeFileSync(datei, src)
console.log(`${korrekturen.length - fehler} von ${korrekturen.length} Korrekturen ${TROCKEN ? 'anwendbar' : 'angewendet'}`)
process.exit(fehler ? 1 : 0)
