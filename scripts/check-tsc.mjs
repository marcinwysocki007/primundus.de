#!/usr/bin/env node
// check-tsc.mjs — Typecheck-Gate mit Baseline: Der Bestand hat historische TS-Fehler
// (Build ignoriert sie per next.config). Dieses Gate schlägt NUR bei NEUEN Fehlern an.
// --update-baseline: schreibt scripts/tsc-baseline.txt neu (bewusst, nach Review).
import { execSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..')
const BASELINE = path.join(ROOT, 'scripts', 'tsc-baseline.txt')
const UPDATE = process.argv.includes('--update-baseline')

let out = ''
try {
  out = execSync('npx tsc --noEmit --pretty false', { cwd: ROOT, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 })
} catch (e) {
  out = (e.stdout || '') + (e.stderr || '')
}

// Fehler normalisieren: "datei(zeile,spalte): error TSxxxx: msg" -> "datei: TSxxxx msg" (zeilenstabil)
const errs = out
  .split('\n')
  .filter((l) => /error TS\d+/.test(l))
  .map((l) => l.replace(/\(\d+,\d+\)/, '').trim())
  .sort()

if (UPDATE) {
  fs.writeFileSync(BASELINE, errs.join('\n') + '\n')
  console.log(`check-tsc: Baseline aktualisiert (${errs.length} bekannte Fehler).`)
  process.exit(0)
}

if (!fs.existsSync(BASELINE)) {
  console.error('FEHLER: scripts/tsc-baseline.txt fehlt — einmalig mit --update-baseline erzeugen.')
  process.exit(2)
}

const baseline = new Set(fs.readFileSync(BASELINE, 'utf8').split('\n').filter(Boolean))
const current = new Set(errs)
const neu = [...current].filter((e) => !baseline.has(e))
const behoben = [...baseline].filter((e) => !current.has(e))

console.log(`check-tsc: ${current.size} Fehler gesamt · Baseline ${baseline.size} · neu ${neu.length} · behoben ${behoben.length}`)
if (behoben.length) console.log('  Hinweis: Baseline enthält behobene Fehler — bei Gelegenheit --update-baseline ausführen.')
if (neu.length) {
  console.error('\ncheck-tsc FEHLGESCHLAGEN — NEUE TypeScript-Fehler:')
  neu.slice(0, 20).forEach((e) => console.error('  ' + e))
  process.exit(1)
}
console.log('check-tsc ✓ — keine neuen Fehler')
