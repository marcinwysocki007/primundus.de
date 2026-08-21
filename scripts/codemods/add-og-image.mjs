#!/usr/bin/env node
// add-og-image.mjs — trägt das Standard-Vorschaubild in openGraph-Blöcke ohne images ein.
// Hintergrund: Next.js merged page-level openGraph NICHT tief — Seiten ohne eigenes
// images-Feld verlieren das Layout-Default komplett (304 Seiten ohne og:image).
// Die opengraph-image-File-Convention kaskadiert auf 13.5.1 nachweislich nicht.
import fs from 'node:fs'
import path from 'node:path'

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..', '..')
const APP = path.join(ROOT, 'app')
const DRY = process.argv.includes('--dry')
const INSERT = "\n    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],"

let changed = 0
for (const dir of fs.readdirSync(APP, { withFileTypes: true })) {
  const files = []
  if (dir.isDirectory()) files.push(path.join(APP, dir.name, 'page.tsx'))
  else if (dir.name === 'page.tsx') files.push(path.join(APP, dir.name))
  for (const f of files) {
    if (!fs.existsSync(f)) continue
    const src = fs.readFileSync(f, 'utf8')
    if (!src.includes('openGraph: {')) continue
    if (/openGraph:\s*\{[^}]*images:/s.test(src)) continue
    const out = src.replace('openGraph: {', 'openGraph: {' + INSERT)
    if (out !== src) {
      changed++
      if (!DRY) fs.writeFileSync(f, out)
      console.log('  ' + path.relative(ROOT, f))
    }
  }
}
console.log(`${DRY ? '[DRY] ' : ''}add-og-image: ${changed} Dateien ergänzt`)
