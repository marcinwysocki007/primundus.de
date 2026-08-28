// Setzt <Weiterlesen> vor <ArticleCTA /> in genau die Artikel, die im
// generierten Register stehen. Kein Blindschuss ueber alle 346 Seiten mit
// ArticleCTA — Ortsseiten haben ihren eigenen Nachbarort-Block.
import { readFileSync, writeFileSync } from 'node:fs'

const register = readFileSync('lib/artikel.ts', 'utf8')
const slugs = [...register.matchAll(/\{ slug: '([^']+)'/g)].map((m) => m[1])

let gesetzt = 0
const ohneAnker = []
for (const slug of slugs) {
  const datei = `app/${slug}/page.tsx`
  let src = readFileSync(datei, 'utf8')
  if (src.includes('<Weiterlesen')) continue
  // Die meisten Seiten haben <ArticleCTA />, drei uebergeben Props und
  // schreiben <ArticleCTA ... /> ueber mehrere Zeilen. Deshalb auf das
  // oeffnende Tag pruefen, nicht auf die selbstschliessende Kurzform.
  const anker = src.match(/^([ \t]*)<ArticleCTA(\s|\/|>)/m)
  if (!anker) { ohneAnker.push(slug); continue }
  const einzug = anker[1]
  src = src.slice(0, anker.index)
    + `${einzug}<Weiterlesen aktuell="${slug}" />\n`
    + src.slice(anker.index)
  // Import direkt hinter den ArticleCTA-Import, damit die Reihenfolge stimmt
  src = src.replace(
    /(import \{ ArticleCTA \} from '@\/components\/ArticleCTA'\n)/,
    `$1import { Weiterlesen } from '@/components/Weiterlesen'\n`)
  if (!src.includes("from '@/components/Weiterlesen'")) { ohneAnker.push(slug + ' (Import)'); continue }
  writeFileSync(datei, src)
  gesetzt++
}
console.log(`09-weiterlesen: ${gesetzt} Artikel ergaenzt`)
if (ohneAnker.length) console.log('  ohne Anker:', ohneAnker.join(', '))
