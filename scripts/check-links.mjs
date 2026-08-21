#!/usr/bin/env node
// check-links.mjs — prüft den gebauten HTML-Output (.next/server/app) auf:
//  1) interne hrefs mit Trailing-Slash (außer "/") -> 308-Hops
//  2) interne hrefs, die auf keine gebaute Route / public-Datei / erlaubte Redirect-Quelle zeigen
//  3) fehlendes og:image im <head>
// --live: startet KEINEN Server, sondern prüft jede gefundene interne URL per fetch
//         gegen BASE_URL (Default http://localhost:3210) mit redirect:manual -> alles muss 200 sein.
import fs from 'node:fs'
import path from 'node:path'

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..')
const APP_OUT = path.join(ROOT, '.next', 'server', 'app')
const PUBLIC_DIR = path.join(ROOT, 'public')
const LIVE = process.argv.includes('--live')
const SKIP_OG = process.argv.includes('--skip-og') // Übergang bis B3 (og:image-Fix)
const BASE_URL = process.env.BASE_URL || 'http://localhost:3210'

// Quellen, die absichtlich redirecten (next.config.js) — als Linkziel erlaubt:
const REDIRECT_SOURCES = new Set(['/pflegegeld-2025', '/kostenrechner', '/eigenanteil-rechner'])

if (!fs.existsSync(APP_OUT)) {
  console.error(`FEHLER: ${APP_OUT} fehlt — erst "npm run build" ausführen.`)
  process.exit(2)
}

const htmlFiles = []
;(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name)
    if (e.isDirectory()) walk(p)
    else if (e.name.endsWith('.html')) htmlFiles.push(p)
  }
})(APP_OUT)

// Gebaute Routen aus den HTML-Dateien ableiten: .next/server/app/foo.html -> /foo
const builtRoutes = new Set(['/'])
for (const f of htmlFiles) {
  const rel = path.relative(APP_OUT, f).replace(/\\/g, '/')
  if (rel === 'index.html') continue
  builtRoutes.add('/' + rel.replace(/\.html$/, ''))
}

const errors = []
const slashLinks = new Map() // href -> [files]
const badTargets = new Map()
const noOgImage = []
const allInternalHrefs = new Set()

const HREF_RE = /href="(\/[^"#?]*)(?:[?#][^"]*)?"/g

for (const f of htmlFiles) {
  const html = fs.readFileSync(f, 'utf8')
  const relName = '/' + path.relative(APP_OUT, f).replace(/\\/g, '/').replace(/\.html$/, '').replace(/^index$/, '')

  // og:image im head?
  if (!/property="og:image"/.test(html)) noOgImage.push(relName || '/')

  let m
  while ((m = HREF_RE.exec(html))) {
    const href = m[1]
    if (href.startsWith('/_next/')) continue
    allInternalHrefs.add(href)
    if (href !== '/' && href.endsWith('/')) {
      if (!slashLinks.has(href)) slashLinks.set(href, [])
      if (slashLinks.get(href).length < 3) slashLinks.get(href).push(relName)
    }
    const clean = href !== '/' && href.endsWith('/') ? href.slice(0, -1) : href
    const isRoute = builtRoutes.has(clean)
    const isPublic = fs.existsSync(path.join(PUBLIC_DIR, clean.replace(/^\//, '')))
    const isRedirect = REDIRECT_SOURCES.has(clean)
    if (!isRoute && !isPublic && !isRedirect && clean !== '') {
      if (!badTargets.has(clean)) badTargets.set(clean, [])
      if (badTargets.get(clean).length < 3) badTargets.get(clean).push(relName)
    }
  }
}

console.log(`check-links: ${htmlFiles.length} gebaute Seiten, ${allInternalHrefs.size} eindeutige interne hrefs`)

if (slashLinks.size) {
  errors.push(`Trailing-Slash-Links: ${slashLinks.size} eindeutige (308-Hops)`)
  let i = 0
  for (const [href, files] of slashLinks) {
    if (i++ >= 15) { console.log(`  … und ${slashLinks.size - 15} weitere`); break }
    console.log(`  SLASH ${href}  (z. B. auf ${files[0]})`)
  }
}
if (badTargets.size) {
  errors.push(`Kaputte interne Linkziele: ${badTargets.size}`)
  for (const [href, files] of badTargets) console.log(`  KAPUTT ${href}  (z. B. auf ${files[0]})`)
}
if (noOgImage.length && !SKIP_OG) {
  errors.push(`Seiten ohne og:image: ${noOgImage.length}`)
  noOgImage.slice(0, 10).forEach((p) => console.log(`  KEIN og:image: ${p}`))
  if (noOgImage.length > 10) console.log(`  … und ${noOgImage.length - 10} weitere`)
}

if (LIVE) {
  const urls = [...allInternalHrefs].filter((h) => !h.startsWith('/_next/'))
  console.log(`check-links --live: prüfe ${urls.length} URLs gegen ${BASE_URL} …`)
  let bad = 0
  for (const u of urls) {
    try {
      const res = await fetch(BASE_URL + u, { redirect: 'manual' })
      const ok = res.status === 200 || (REDIRECT_SOURCES.has(u.replace(/\/$/, '')) && [301, 302, 307, 308].includes(res.status))
      if (!ok) { bad++; console.log(`  LIVE ${res.status} ${u}`) }
    } catch (e) { bad++; console.log(`  LIVE FETCH-FEHLER ${u}: ${e.message}`) }
  }
  if (bad) errors.push(`Live-Crawl: ${bad} URLs nicht 200/erlaubter Redirect`)
  else console.log('Live-Crawl: alle URLs 200 ✓')
}

if (errors.length) {
  console.error('\ncheck-links FEHLGESCHLAGEN:\n- ' + errors.join('\n- '))
  process.exit(1)
}
console.log('check-links ✓')
