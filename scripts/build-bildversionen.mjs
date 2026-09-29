#!/usr/bin/env node
// build-bildversionen.mjs — Prüfsumme je Datei in public/images → lib/bild-versionen.json (läuft im prebuild).
// lib/bild.ts hängt sie als ?v=… an; next.config.js erlaubt nur solchen Adressen ein Jahr Browser-Cache.
// Ändert sich eine Datei, ändert sich ihre Prüfsumme und damit die Adresse — nie ein veraltetes Bild im Browser.
import { createHash } from 'node:crypto'
import fs from 'node:fs'
import path from 'node:path'

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..')
const ORDNER = path.join(ROOT, 'public', 'images')
const ZIEL = path.join(ROOT, 'lib', 'bild-versionen.json')

const versionen = {}
function lauf(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name)
    if (e.isDirectory()) lauf(p)
    else if (/\.(webp|avif|png|jpe?g|svg|gif)$/i.test(e.name)) {
      const rel = '/' + path.relative(path.join(ROOT, 'public'), p).split(path.sep).join('/')
      versionen[rel] = createHash('sha1').update(fs.readFileSync(p)).digest('hex').slice(0, 10)
    }
  }
}
lauf(ORDNER)
const sortiert = Object.fromEntries(Object.entries(versionen).sort(([a], [b]) => a.localeCompare(b)))
const neu = JSON.stringify(sortiert, null, 2) + '\n'
if (!fs.existsSync(ZIEL) || fs.readFileSync(ZIEL, 'utf8') !== neu) fs.writeFileSync(ZIEL, neu)
console.log(`build-bildversionen: ${Object.keys(sortiert).length} Bilder`)
