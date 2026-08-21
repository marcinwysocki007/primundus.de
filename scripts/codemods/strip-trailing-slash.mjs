#!/usr/bin/env node
// strip-trailing-slash.mjs — normalisiert interne Linkziele auf die slash-lose Form.
// Hintergrund: trailingSlash ist false; Canonicals/Sitemap/Index sind slash-los —
// 671 interne hrefs zeigten auf /pfad/ und liefen damit durch einen 308.
// Drei Muster, bewusst eng gefasst (nur Kleinbuchstaben/Ziffern/Bindestrich-Pfade):
//   A) JSX:        href="/pfad/"            -> href="/pfad"
//   B) Datenobjekte: href: '/pfad/'  bzw. link: '/pfad/'  -> ohne Slash
//   C) Absolute eigene URLs in Strings (z. B. Breadcrumb-JSON-LD):
//      'https://primundus.de/pfad/' -> ohne Slash (Root "https://primundus.de/" bleibt).
// href="/" bleibt konstruktionsbedingt unangetastet (Muster verlangen ein Pfadsegment).
import fs from 'node:fs'
import path from 'node:path'

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..', '..')
const DIRS = ['app', 'components', 'lib']
const DRY = process.argv.includes('--dry')

const PATTERNS = [
  [/href="\/([a-z0-9-]+(?:\/[a-z0-9-]+)*)\/"/g, 'href="/$1"'],
  [/href="\/([a-z0-9-]+(?:\/[a-z0-9-]+)*)\/(#[^"]*)"/g, 'href="/$1$2"'],
  [/(href|link): '\/([a-z0-9-]+(?:\/[a-z0-9-]+)*)\/'/g, "$1: '/$2'"],
  [/'https:\/\/primundus\.de\/([a-z0-9-]+(?:\/[a-z0-9-]+)*)\/'/g, "'https://primundus.de/$1'"],
]

let filesChanged = 0
let totalRepl = 0

function processFile(file) {
  const before = fs.readFileSync(file, 'utf8')
  let after = before
  let count = 0
  for (const [re, sub] of PATTERNS) {
    const matches = after.match(re)
    if (matches) count += matches.length
    after = after.replace(re, sub)
  }
  if (count > 0) {
    filesChanged++
    totalRepl += count
    if (!DRY) fs.writeFileSync(file, after)
    console.log(`  ${count}\t${path.relative(ROOT, file)}`)
  }
}

function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name)
    if (e.isDirectory()) walk(p)
    else if (/\.(tsx|ts)$/.test(e.name)) processFile(p)
  }
}

for (const d of DIRS) walk(path.join(ROOT, d))
console.log(`${DRY ? '[DRY-RUN] ' : ''}strip-trailing-slash: ${totalRepl} Ersetzungen in ${filesChanged} Dateien`)
