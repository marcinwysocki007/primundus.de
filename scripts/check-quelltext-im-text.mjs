#!/usr/bin/env node
// check-quelltext-im-text.mjs — findet Code, der versehentlich als Text auf der Seite landet.
//
// Warum es das gibt: Am 23.09.2026 habe ich eine Begründung als `//`-Kommentar in einen
// JSX-Block geschrieben. In JSX ist `//` aber kein Kommentar, sondern gewöhnlicher Text.
// Die vollständige Begründung — fünfzehn Zeilen über Pixelmessungen und Martins Zitate —
// stand als Fließtext ganz oben auf der Testsieger-Seite.
//
// `npm run verify` hat das durchgewinkt: Der Build war fehlerfrei, TypeScript zufrieden,
// die Links stimmten. Es IST gültiges JSX. Aufgefallen ist es erst, als ich ein
// Bildschirmfoto gemacht habe — und das war Zufall, nicht Methode.
//
// Dieser Wächter liest den GEBAUTEN sichtbaren Text und sucht nach Spuren von Quelltext:
//   `//` ausserhalb von URLs · `{/*` oder `*/` · `className=` · `=> {` · `const `/`import `
// Er läuft nach dem Build, weil er das Ergebnis prüft und nicht die Absicht.
//
// Aufruf:  node scripts/check-quelltext-im-text.mjs
import fs from 'node:fs'
import path from 'node:path'

const WURZEL = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..')
const GEBAUT = path.join(WURZEL, '.next/server/app')

if (!fs.existsSync(GEBAUT)) {
  console.log('check-quelltext-im-text: kein Build gefunden — erst `next build` laufen lassen.')
  process.exit(0)
}

// Spuren, die in sichtbarem Text nichts zu suchen haben.
const SPUREN = [
  // `//` am Zeilenanfang oder nach einem Leerzeichen, aber NICHT als Teil von https://
  { name: '// als Text (JSX kennt keine //-Kommentare)', re: /(^|[^:\w])\/\/\s+[A-Za-zÄÖÜäöü]/ },
  { name: 'JSX-Kommentarzeichen {/* oder */}', re: /\{\/\*|\*\/\}/ },
  { name: 'className= im Text', re: /className=/ },
  { name: 'Pfeilfunktion => {', re: /=>\s*\{/ },
  { name: 'const/import am Textanfang', re: /(^|\s)(const|import)\s+[A-Za-z_$][\w$]*\s*[=f]/ },
]

function sichtbarerText(html) {
  let s = html
  s = s.replace(/<script[\s\S]*?<\/script>/g, ' ')
  s = s.replace(/<style[\s\S]*?<\/style>/g, ' ')
  s = s.replace(/<!--[\s\S]*?-->/g, ' ')
  s = s.replace(/<[^>]+>/g, ' ')
  s = s
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&nbsp;/g, ' ')
  return s.replace(/\s+/g, ' ').trim()
}

const dateien = fs.readdirSync(GEBAUT).filter((f) => f.endsWith('.html'))
const funde = []

for (const datei of dateien) {
  const html = fs.readFileSync(path.join(GEBAUT, datei), 'utf8')
  const text = sichtbarerText(html)
  for (const spur of SPUREN) {
    const m = text.match(spur.re)
    if (!m) continue
    const i = Math.max(0, m.index - 40)
    funde.push({
      seite: '/' + datei.replace(/\.html$/, '').replace(/^index$/, ''),
      was: spur.name,
      stelle: text.slice(i, i + 130),
    })
  }
}

console.log(`check-quelltext-im-text: ${dateien.length} gebaute Seiten`)
if (funde.length) {
  for (const f of funde) {
    console.log(`  ✗ ${f.seite}  ${f.was}`)
    console.log(`      …${f.stelle}…`)
  }
  console.log(`\ncheck-quelltext-im-text FEHLER: ${funde.length} Stellen mit Quelltext im sichtbaren Text.`)
  console.log('In JSX ist // KEIN Kommentar. Kommentare gehören dort in {/* … */} oder vor die Komponente.')
  process.exit(1)
}
console.log('check-quelltext-im-text ✓ — kein Quelltext im sichtbaren Text')
