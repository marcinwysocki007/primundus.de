// Erzeugt lib/artikel.ts — das Register der Ratgeber-Artikel je Rubrik.
//
// Anlass (28.08.2026): Die Erreichbarkeitspruefung (seo-reports/erreichbarkeit.py)
// hat 43 fertige Seiten gefunden, die Google in 90 Tagen kein einziges Mal
// ausgeliefert hat. Bei den Ratgeber-Artikeln war die Ursache immer dieselbe:
// genau EIN eingehender interner Link, naemlich von der eigenen Rubrik-Seite.
// Wer den Artikel nicht ueber die Rubrik findet, findet ihn gar nicht.
//
// Die Rubrik und den kurzen Anzeigenamen zieht das Skript aus dem
// BreadcrumbList-Schema, das ohnehin in jeder Artikelseite steht — also aus der
// Quelle, die auch Google sieht. Kein zweites, driftendes Register von Hand.
//
// Aufruf: node scripts/build-artikel.mjs   (laeuft in `npm run build` mit)
import { readdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const APP = 'app'
const ZIEL = 'lib/artikel.ts'

// Rubriken, unter denen echte Ratgeber-Artikel haengen. Bewusst eine
// Positivliste: /kosten und /anbieter-vergleich sind Geldseiten, keine
// Rubriken — ihre Unterseiten gehoeren nicht in einen "Weiterlesen"-Block.
const RUBRIKEN = new Set([
  'ratgeber', 'alltag', 'krankheiten', 'pflegegrade',
  'rechtliches', 'finanzierung', 'organisation', 'vergleiche',
])

// Ausgeschlossen: /24h-pflege-anbieter-vergleich ist eine tote Dublette von
// /anbieter-vergleich (2.016 gegen 6.230 Woerter), steht nicht in der Sitemap
// und wurde nie ausgeliefert. Sie hier zu verlinken hiesse, eine Seite
// erreichbar zu machen, die wir Google gleichzeitig vorenthalten — und wuerde
// der offenen Empfehlung an Martin (301 auf /anbieter-vergleich)
// vorgreifen. Bis das entschieden ist, bleibt sie draussen.
const AUSGESCHLOSSEN = new Set(['24h-pflege-anbieter-vergleich'])

const artikel = []
for (const eintrag of readdirSync(APP, { withFileTypes: true })) {
  if (!eintrag.isDirectory() || eintrag.name.startsWith('_')) continue
  if (AUSGESCHLOSSEN.has(eintrag.name)) continue
  // Die Rubrik-Seiten selbst sind keine Artikel. /organisation traegt den
  // Breadcrumb Startseite > Ratgeber > Organisation und sah dadurch aus wie
  // ein Beitrag der Rubrik 'ratgeber' — im Weiterlesen-Block stand dann
  // woertlich "Organisation" zwischen vier Fachartikeln.
  if (RUBRIKEN.has(eintrag.name)) continue
  const datei = join(APP, eintrag.name, 'page.tsx')
  if (!existsSync(datei)) continue
  const src = readFileSync(datei, 'utf8')

  // Nur die Liste innerhalb des BreadcrumbList-Blocks betrachten
  const bc = src.indexOf('BreadcrumbList')
  if (bc < 0) continue
  const ausschnitt = src.slice(bc, bc + 1600)
  const stufen = [...ausschnitt.matchAll(
    /position:\s*(\d+),\s*name:\s*'([^']+)',\s*item:\s*'https:\/\/primundus\.de\/([^']*)'/g)]
  if (stufen.length < 3) continue

  const letzte = stufen[stufen.length - 1]
  const vorletzte = stufen[stufen.length - 2]
  if (letzte[3].replace(/\/$/, '') !== eintrag.name) continue
  const rubrik = vorletzte[3].replace(/\/$/, '')
  if (!RUBRIKEN.has(rubrik)) continue

  artikel.push({ slug: eintrag.name, titel: letzte[2], rubrik })
}

artikel.sort((a, b) => a.slug.localeCompare(b.slug, 'de'))

const kopf = `// GENERIERT von scripts/build-artikel.mjs — nicht von Hand aendern.
// Quelle ist das BreadcrumbList-Schema der jeweiligen Seite.
export interface Artikel {
  slug: string
  titel: string
  rubrik: string
}

export const ARTIKEL: Artikel[] = [
`
const zeilen = artikel.map(
  (a) => `  { slug: '${a.slug}', titel: ${JSON.stringify(a.titel)}, rubrik: '${a.rubrik}' },`)
writeFileSync(ZIEL, kopf + zeilen.join('\n') + '\n]\n')

const proRubrik = {}
for (const a of artikel) proRubrik[a.rubrik] = (proRubrik[a.rubrik] ?? 0) + 1
console.log(`build-artikel: ${artikel.length} Artikel ->`, proRubrik)
