#!/usr/bin/env node
// check-sitemap.mjs — prüft die gebaute sitemap.xml gegen die gebauten Routen:
//  1) alle URLs slash-los + richtiger Host
//  2) jede Sitemap-URL existiert als gebaute Route
//  3) keine noindex-Seite in der Sitemap
//  4) lastmod: nicht in der Zukunft; Warnung, wenn alle Werte identisch (Build-Zeitstempel-Problem)
//  5) wichtige Seiten enthalten (z. B. /pflegegeld — Warnung bis B4 sie aufnimmt)
import fs from 'node:fs'
import path from 'node:path'

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..')
const APP_OUT = path.join(ROOT, '.next', 'server', 'app')
const APP_SRC = path.join(ROOT, 'app')
const HOST = 'https://primundus.de'

function findSitemapXml() {
  const candidates = [
    path.join(APP_OUT, 'sitemap.xml.body'),
    path.join(APP_OUT, 'sitemap.xml'),
    path.join(APP_OUT, 'sitemap.xml', 'index.body'),
  ]
  for (const c of candidates) if (fs.existsSync(c) && fs.statSync(c).isFile()) return fs.readFileSync(c, 'utf8')
  return null
}

const xml = findSitemapXml()
if (!xml) {
  console.error('FEHLER: gebaute sitemap.xml nicht gefunden — erst "npm run build"; erwartet unter .next/server/app/sitemap.xml(.body)')
  process.exit(2)
}

const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
const lastmods = [...xml.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)].map((m) => m[1])

// Gebaute Routen
const builtRoutes = new Set(['/'])
;(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name)
    if (e.isDirectory()) walk(p)
    else if (e.name.endsWith('.html')) {
      const rel = path.relative(APP_OUT, p).replace(/\\/g, '/')
      if (rel !== 'index.html') builtRoutes.add('/' + rel.replace(/\.html$/, ''))
    }
  }
})(APP_OUT)

// noindex-Seiten aus dem Quellcode ermitteln
const noindexSlugs = new Set()
for (const dir of fs.readdirSync(APP_SRC, { withFileTypes: true })) {
  if (!dir.isDirectory()) continue
  const pageFile = path.join(APP_SRC, dir.name, 'page.tsx')
  if (!fs.existsSync(pageFile)) continue
  const src = fs.readFileSync(pageFile, 'utf8')
  if (/robots:\s*\{[^}]*index:\s*false/s.test(src)) noindexSlugs.add('/' + dir.name)
}

const errors = []
const warnings = []

for (const u of urls) {
  if (!u.startsWith(HOST)) { errors.push(`Fremder Host: ${u}`); continue }
  const p = u.slice(HOST.length) || '/'
  if (p !== '/' && p.endsWith('/')) errors.push(`Trailing-Slash in Sitemap: ${u}`)
  const clean = p !== '/' && p.endsWith('/') ? p.slice(0, -1) : p
  if (!builtRoutes.has(clean)) errors.push(`Sitemap-URL ohne gebaute Route: ${p}`)
  if (noindexSlugs.has(clean)) errors.push(`noindex-Seite in Sitemap: ${p}`)
}

const now = new Date()
for (const lm of lastmods) {
  const d = new Date(lm)
  if (isNaN(d)) errors.push(`Unparsebarer lastmod: ${lm}`)
  else if (d.getTime() > now.getTime() + 86400000) errors.push(`lastmod in der Zukunft: ${lm}`)
}
if (lastmods.length > 10 && new Set(lastmods).size === 1)
  warnings.push(`Alle ${lastmods.length} lastmod-Werte identisch (${lastmods[0]}) — Build-Zeitstempel, kein echtes Änderungsdatum (Fix = B4)`)

if (!urls.some((u) => u === `${HOST}/pflegegeld`))
  warnings.push('/pflegegeld fehlt in der Sitemap (Fix = B4)')

console.log(`check-sitemap: ${urls.length} URLs, ${new Set(lastmods).size} unterschiedliche lastmod-Werte, ${noindexSlugs.size} noindex-Seiten im Quellcode`)
warnings.forEach((w) => console.log('  WARN ' + w))
if (errors.length) {
  console.error(`\ncheck-sitemap FEHLGESCHLAGEN (${errors.length}):`)
  errors.slice(0, 20).forEach((e) => console.error('  ' + e))
  process.exit(1)
}
console.log('check-sitemap ✓')
