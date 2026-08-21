#!/usr/bin/env node
// check-jsonld.mjs — extrahiert alle <script type="application/ld+json">-Blöcke aus dem Build
// und prüft: (1) valides JSON, (2) Pflichtfelder je @type, (3) @id-Referenzen auflösbar (Warnung).
import fs from 'node:fs'
import path from 'node:path'

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..')
const APP_OUT = path.join(ROOT, '.next', 'server', 'app')

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

const LD_RE = /<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g
const errors = []
const warnings = []
let blockCount = 0
const typeCount = {}

function nodesOf(parsed) {
  const arr = Array.isArray(parsed) ? parsed : [parsed]
  const out = []
  for (const n of arr) {
    if (n && n['@graph']) out.push(...n['@graph'])
    else if (n) out.push(n)
  }
  return out
}

function checkNode(node, page) {
  const t = node['@type']
  if (!t) return
  const types = Array.isArray(t) ? t : [t]
  for (const type of types) {
    typeCount[type] = (typeCount[type] || 0) + 1
    switch (type) {
      case 'Article':
      case 'BlogPosting':
        for (const f of ['headline', 'datePublished', 'dateModified', 'author'])
          if (!node[f]) errors.push(`${page}: ${type} ohne ${f}`)
        break
      case 'FAQPage': {
        const q = node.mainEntity
        if (!Array.isArray(q) || q.length === 0) { errors.push(`${page}: FAQPage ohne mainEntity`); break }
        q.forEach((item, i) => {
          if (!item?.name) errors.push(`${page}: FAQPage Frage ${i + 1} ohne name`)
          if (!item?.acceptedAnswer?.text) errors.push(`${page}: FAQPage Frage ${i + 1} ohne acceptedAnswer.text`)
        })
        break
      }
      case 'BreadcrumbList': {
        const items = node.itemListElement
        if (!Array.isArray(items) || !items.length) { errors.push(`${page}: BreadcrumbList leer`); break }
        items.forEach((el, i) => {
          if (el.position !== i + 1) errors.push(`${page}: BreadcrumbList Position ${i + 1} falsch (${el.position})`)
        })
        break
      }
      case 'Organization':
        if (!node.name) errors.push(`${page}: Organization ohne name`)
        break
      case 'LocalBusiness':
        if (!node.address) warnings.push(`${page}: LocalBusiness ohne address (invalide für Rich Results; B9 stellt auf Service um)`)
        break
      case 'Service':
        if (!node.provider) errors.push(`${page}: Service ohne provider`)
        if (!node.areaServed) warnings.push(`${page}: Service ohne areaServed`)
        break
      case 'AggregateRating':
      case 'Review':
        errors.push(`${page}: ${type} gefunden — nur mit echten, belegten Bewertungen zulässig (Richtlinie)`)
        break
    }
  }
}

for (const f of htmlFiles) {
  const page = '/' + path.relative(APP_OUT, f).replace(/\\/g, '/').replace(/\.html$/, '').replace(/^index$/, '')
  const html = fs.readFileSync(f, 'utf8')
  const ids = new Set()
  const refs = []
  let m
  while ((m = LD_RE.exec(html))) {
    blockCount++
    let parsed
    try {
      parsed = JSON.parse(m[1])
    } catch (e) {
      errors.push(`${page}: JSON-LD nicht parsebar (${e.message.slice(0, 60)})`)
      continue
    }
    for (const node of nodesOf(parsed)) {
      checkNode(node, page)
      if (node['@id']) ids.add(node['@id'])
      for (const v of Object.values(node)) {
        if (v && typeof v === 'object' && !Array.isArray(v) && v['@id'] && Object.keys(v).length === 1) refs.push(v['@id'])
      }
    }
  }
  for (const r of refs) if (!ids.has(r)) warnings.push(`${page}: @id-Referenz ${r} auf dieser Seite nicht aufgelöst`)
}

console.log(`check-jsonld: ${blockCount} Blöcke auf ${htmlFiles.length} Seiten`)
console.log('  Typen:', Object.entries(typeCount).sort((a, b) => b[1] - a[1]).map(([t, c]) => `${t}:${c}`).join(' '))
if (warnings.length) {
  console.log(`  Warnungen: ${warnings.length}`)
  warnings.slice(0, 8).forEach((w) => console.log(`  WARN ${w}`))
  if (warnings.length > 8) console.log(`  … und ${warnings.length - 8} weitere`)
}
if (errors.length) {
  console.error(`\ncheck-jsonld FEHLGESCHLAGEN (${errors.length} Fehler):`)
  errors.slice(0, 20).forEach((e) => console.error('  ' + e))
  if (errors.length > 20) console.error(`  … und ${errors.length - 20} weitere`)
  process.exit(1)
}
console.log('check-jsonld ✓')
