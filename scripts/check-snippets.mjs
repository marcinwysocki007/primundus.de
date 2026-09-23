#!/usr/bin/env node
// check-snippets.mjs — prüft jeden Titel und jede Beschreibung, bevor sie live gehen (23.09.2026).
//
// Warum es das gibt: Am 23.09. schickte Martin ein Bildschirmfoto der Google-Suche nach
// „primundus" — mit einem Preis in der Beschreibung. Die Regel „keine Preise im Snippet" gilt
// seit dem 21.09., aber sie war nie gegen den Bestand geprüft worden. Beim Nachsehen fanden sich
// Preise auf /kosten (im Titel UND in der Beschreibung UND in openGraph), auf /24-stunden-pflege
// und auf vier weiteren Kostenseiten. Sie standen dort seit Monaten.
//
// Am selben Tag kam die zweite Regel dazu: „Ich wollte die polnischen Pflegekräfte nur bei den
// Seiten Pflegekräfte aus Polen, niemals auf der Startseite oder den lokalen Seiten." Auch die
// war auf 207 Ortsseiten verletzt, weil ich sie dort selbst eingebaut hatte.
//
// Beide Male war der Ablauf derselbe: Regel bekannt, Regel zitiert, Bestand nie geprüft.
// Dieser Wächter schließt das.
//
// GEPRÜFT WIRD JE SEITE
//   1. Unser eigener Preis (2.150 / 923) in title, description oder openGraph.
//      Fremde Beträge sind erlaubt: 131 € Entlastungsbetrag, 3.539 € Kurzzeitpflege,
//      990 € Pflegegeld, 3.364 € Heim-Eigenanteil. Das sind Kassen- und Marktzahlen.
//   2. „polnisch" ausserhalb der Polen-Seiten.
//   3. Titel über 580 px, Beschreibung über 920 px — Googles Darstellungsgrössen
//      (20px bzw. 14px Arial). Was darüber liegt, wird abgeschnitten.
//
// Die Pixelbreite kommt aus scripts/daten/arial-breiten.json, einer Zeichentabelle, die einmal
// im Browser gemessen wurde. Abweichung gegen die echte Canvas-Messung: 2 px. Deshalb liegt die
// Warnschwelle 8 px unter der harten Grenze, damit ein Grenzfall nicht durchrutscht.
//
// GRUNDLINIE
// Beim ersten Lauf am 23.09. fanden sich 92 Altlasten — fast alle zu breite Titel und
// Beschreibungen auf Ratgeber-Seiten, die dort seit Monaten stehen. Sie alle sofort zu beheben
// waere ein eigener Arbeitsblock. Damit der Waechter trotzdem ab heute wirkt, arbeitet er wie
// check-tsc mit einer Grundlinie: Bekanntes wird gezaehlt, NEUES laesst den Build scheitern.
// Die Grundlinie steht in scripts/daten/snippets-grundlinie.json.
//
// Aufruf:  node scripts/check-snippets.mjs
//          node scripts/check-snippets.mjs --grundlinie-neu    (nach einer Aufraeumrunde)
import fs from 'node:fs'
import path from 'node:path'

const WURZEL = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..')
const APP = path.join(WURZEL, 'app')
const BREITEN = JSON.parse(fs.readFileSync(path.join(WURZEL, 'scripts/daten/arial-breiten.json'), 'utf8'))

const TITEL_GRENZE = 580
const BESCH_GRENZE = 920
const PUFFER = 8

// Unser eigener Preis. Bewusst eng: 2.150 ist der Monatspreis, 923 der Eigenanteil bei PG 3.
const UNSER_PREIS = /\b2\.?150\b|\b923\b/
// Seiten, auf denen „polnisch" stehen darf.
const POLEN_SEITEN = /polen|polnisch/i

function breite(text, font) {
  const tab = BREITEN[font]
  const standard = tab['__standard']
  let px = 0
  for (const z of text) px += tab[z] ?? standard
  return Math.round(px)
}

function metadatenBlock(quelle) {
  const i = quelle.indexOf('export const metadata')
  if (i < 0) return null
  const j = quelle.indexOf('\n}\n', i)
  return quelle.slice(i, j > 0 ? j : i + 4000)
}

function felder(block, name) {
  // Deckt beide Schreibweisen ab: Wert auf derselben Zeile und Wert auf der naechsten.
  const re = new RegExp(`${name}:\\s*\\n?\\s*'([^']*)'`, 'g')
  return [...block.matchAll(re)].map((m) => m[1])
}

const seiten = []
const start = path.join(APP, 'page.tsx')
if (fs.existsSync(start)) seiten.push(['/', start])
for (const d of fs.readdirSync(APP, { withFileTypes: true })) {
  if (!d.isDirectory() || d.name.startsWith('[')) continue
  const datei = path.join(APP, d.name, 'page.tsx')
  if (fs.existsSync(datei)) seiten.push(['/' + d.name, datei])
}

const fehler = new Set()
const warnungen = new Set()
let geprueft = 0

for (const [slug, datei] of seiten) {
  const quelle = fs.readFileSync(datei, 'utf8')
  const block = metadatenBlock(quelle)
  if (!block) continue
  geprueft++
  const darfPolen = POLEN_SEITEN.test(slug)

  // Set, damit metadata und openGraph mit demselben Wert nur einmal gemeldet werden.
  for (const t of new Set(felder(block, 'title'))) {
    if (UNSER_PREIS.test(t)) fehler.add(`${slug}  Titel enthält unseren Preis: „${t}"`)
    if (!darfPolen && /oln/i.test(t)) fehler.add(`${slug}  Titel sagt „polnisch", obwohl es keine Polen-Seite ist: „${t}"`)
    const px = breite(t, '20px Arial')
    if (px > TITEL_GRENZE + PUFFER) fehler.add(`${slug}  Titel ${px} px, Grenze ${TITEL_GRENZE}: „${t}"`)
    else if (px > TITEL_GRENZE - PUFFER) warnungen.add(`${slug}  Titel ${px} px — dicht an der Grenze`)
  }
  for (const b of new Set(felder(block, 'description'))) {
    if (UNSER_PREIS.test(b)) fehler.add(`${slug}  Beschreibung enthält unseren Preis: „${b.slice(0, 76)}…"`)
    if (!darfPolen && /oln/i.test(b)) fehler.add(`${slug}  Beschreibung sagt „polnisch", obwohl es keine Polen-Seite ist`)
    const px = breite(b, '14px Arial')
    if (px > BESCH_GRENZE + PUFFER) fehler.add(`${slug}  Beschreibung ${px} px, Grenze ${BESCH_GRENZE}: „${b.slice(0, 66)}…"`)
    else if (px > BESCH_GRENZE - PUFFER) warnungen.add(`${slug}  Beschreibung ${px} px — dicht an der Grenze`)
  }
}

const GRUNDLINIE = path.join(WURZEL, 'scripts/daten/snippets-grundlinie.json')
const jetzt = [...fehler].sort()

if (process.argv.includes('--grundlinie-neu')) {
  fs.writeFileSync(GRUNDLINIE, JSON.stringify(jetzt, null, 1) + '\n')
  console.log(`check-snippets: Grundlinie neu geschrieben — ${jetzt.length} bekannte Befunde`)
  process.exit(0)
}

const bekannt = fs.existsSync(GRUNDLINIE) ? new Set(JSON.parse(fs.readFileSync(GRUNDLINIE, 'utf8'))) : new Set()
const neuDazu = jetzt.filter((f) => !bekannt.has(f))
const behoben = [...bekannt].filter((f) => !fehler.has(f))

console.log(`check-snippets: ${geprueft} Seiten · ${jetzt.length} Befunde · Grundlinie ${bekannt.size} · neu ${neuDazu.length} · behoben ${behoben.length}`)
if (warnungen.size) {
  console.log(`  ${warnungen.size} Grenzfälle innerhalb der Messungenauigkeit von ±${PUFFER} px`)
}
if (neuDazu.length) {
  for (const f of neuDazu) console.log('  ✗ NEU: ' + f)
  console.log(`\ncheck-snippets FEHLER: ${neuDazu.length} neue Befunde.`)
  console.log('Regeln: keine eigenen Preise im Snippet · „polnisch" nur auf den Polen-Seiten ·')
  console.log('Titel höchstens 580 px, Beschreibung höchstens 920 px (Googles Darstellung).')
  process.exit(1)
}
if (behoben.length) {
  console.log(`  ${behoben.length} Altlasten behoben — bei Gelegenheit --grundlinie-neu ausführen.`)
}
console.log('check-snippets ✓ — keine neuen Befunde')
