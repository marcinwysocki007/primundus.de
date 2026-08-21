#!/usr/bin/env node
// check-fakten.mjs — Stolperdraht gegen veraltete/falsche Beträge und Widersprüche im QUELLCODE.
// Verifizierte Soll-Werte (Stand 21.08.2026, Quellen: §37/§36/§45b/§42a SGB XI, BMG):
//   Pflegegeld 347/599/800/990 · Sachleistungen 796/1.497/1.859/2.299 · Entlastungsbetrag 131 · Budget 3.539
// --warn-only: meldet Funde, bricht aber nicht ab (Übergangsmodus bis Batch B6 die Altwerte entfernt).
import fs from 'node:fs'
import path from 'node:path'

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..')
const WARN_ONLY = process.argv.includes('--warn-only')

// Muster: [Beschreibung, Regex, erlaubte Dateien (Regex) — z. B. dieser Check selbst]
const STALE = [
  ['Pflegegeld PG3 alt (573 €, 2024)', /573\s*€/g],
  ['Pflegegeld PG5 alt (947 €, 2024)', /947\s*€/g],
  ['Verhinderungspflege alt (1.612 €)', /1\.612\s*€/g],
  ['Verhinderungspflege alt (1.774 € Kurzzeit)', /1\.774\s*€/g],
  ['Verhinderungspflege alt (3.224 €)', /3\.224\s*€/g],
  ['Falsche Preisspanne (2.500–4.500)', /2\.500\s*(?:und|bis|–|-)\s*4\.500/g],
  ['Entlastungsbetrag alt (125 €)', /125\s*€\s*(?:monatlich|pro Monat|\/\s*Monat)/g],
]

const SCAN_DIRS = ['app', 'components', 'lib']
const SCAN_FILES = ['public/llms.txt']
const SELF = path.join('scripts', 'check-fakten.mjs')

const findings = []
function scanFile(file) {
  const rel = path.relative(ROOT, file)
  if (rel === SELF) return
  const text = fs.readFileSync(file, 'utf8')
  for (const [desc, re] of STALE) {
    re.lastIndex = 0
    let m
    while ((m = re.exec(text))) {
      const line = text.slice(0, m.index).split('\n').length
      findings.push(`${rel}:${line}  ${desc}`)
    }
  }
}
function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name)
    if (e.isDirectory()) walk(p)
    else if (/\.(tsx?|mjs|txt|md)$/.test(e.name)) scanFile(p)
  }
}
for (const d of SCAN_DIRS) walk(path.join(ROOT, d))
for (const f of SCAN_FILES) { const p = path.join(ROOT, f); if (fs.existsSync(p)) scanFile(p) }

if (findings.length) {
  const level = WARN_ONLY ? 'WARNUNG (bekannt, Fix = B6)' : 'FEHLER'
  console.log(`check-fakten ${level}: ${findings.length} Funde veralteter Werte:`)
  findings.forEach((f) => console.log('  ' + f))
  if (!WARN_ONLY) process.exit(1)
} else {
  console.log('check-fakten ✓ — keine veralteten Beträge im Quellcode')
}
