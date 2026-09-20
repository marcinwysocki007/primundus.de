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

// Seiten, deren Brotkrume bewusst unter einer Geldseite haengt, die aber in ihrer Rubrik
// verlinkt bleiben muessen. /pflegekraft-aus-polen wurde am 20.09. auf
// "Startseite > 24-Stunden-Pflege" umgehaengt; damit fiel es aus dem Register und die
// Rubrik /organisation verlor den Link auf eine Geldseite. Die Brotkrume bleibt wie
// entworfen, die Liste bleibt vollstaendig (Regel: interne Linklisten nie kuerzen).
const RUBRIK_ERSATZ = new Map([['pflegekraft-aus-polen', 'organisation']])

// Vorher-Stand, um stille Verluste zu melden: Seit dem Umbau auf gemeinsame Vorlagen
// (20.09.) koennen Seiten aus dem Register fallen, ohne dass es jemandem auffaellt.
const VORHER = new Set()
try {
  for (const m of readFileSync(ZIEL, 'utf8').matchAll(/slug: '([^']+)'/g)) VORHER.add(m[1])
} catch { /* erster Lauf */ }

// Brotkrume aus einer Vorlage-Komponente holen, wenn die Seite selbst keine mehr hat.
// `<PflegegradSeite grad={3} />` liefert die Props, mit denen `${grad}` aufgeloest wird.
function ausVorlage(src, ordner) {
  for (const imp of src.matchAll(/from '@\/(components\/vorlage\/[A-Za-z0-9_-]+)'/g)) {
    const datei = imp[1] + '.tsx'
    if (!existsSync(datei)) continue
    const komponente = readFileSync(datei, 'utf8')
    if (!komponente.includes('BreadcrumbList')) continue
    const props = {}
    for (const p of src.matchAll(/(\w+)=\{(?:'([^']*)'|"([^"]*)"|([^}]*))\}/g)) {
      props[p[1]] = (p[2] ?? p[3] ?? p[4] ?? '').trim()
    }
    const fuellen = (s) => s.replace(/\$\{(\w+)\}/g, (_, k) => props[k] ?? `\${${k}}`)
    const bc = komponente.indexOf('BreadcrumbList')
    const stufen = [...komponente.slice(bc, bc + 1600).matchAll(
      /position:\s*(\d+),\s*name:\s*['`]([^'`]+)['`],\s*item:\s*['`]https:\/\/primundus\.de\/([^'`]*)['`]/g)]
      .map((m) => [m[0], m[1], fuellen(m[2]), fuellen(m[3])])
    if (stufen.length >= 3 && stufen[stufen.length - 1][3].replace(/\/$/, '') === ordner) return stufen
  }
  return null
}

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

  // Nur die Liste innerhalb des BreadcrumbList-Blocks betrachten. Steht dort keine
  // (Seite baut auf einer gemeinsamen Vorlage), wird die Komponente gelesen.
  const bc = src.indexOf('BreadcrumbList')
  let stufen = bc < 0 ? null : [...src.slice(bc, bc + 1600).matchAll(
    /position:\s*(\d+),\s*name:\s*'([^']+)',\s*item:\s*'https:\/\/primundus\.de\/([^']*)'/g)]
  if (!stufen || stufen.length < 3) stufen = ausVorlage(src, eintrag.name)
  if (!stufen || stufen.length < 3) continue

  const letzte = stufen[stufen.length - 1]
  const vorletzte = stufen[stufen.length - 2]
  if (letzte[3].replace(/\/$/, '') !== eintrag.name) continue
  const rubrik = RUBRIK_ERSATZ.get(eintrag.name) ?? vorletzte[3].replace(/\/$/, '')
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

// Stille Verluste sichtbar machen. Wer eine Seite loescht oder umleitet, soll den Eintrag
// hier bestaetigt sehen; wer nur umbaut, soll stutzig werden.
const jetzt = new Set(artikel.map((a) => a.slug))
const weggefallen = [...VORHER].filter((s) => !jetzt.has(s))
if (weggefallen.length) {
  console.log(`build-artikel: ${weggefallen.length} nicht mehr im Register — ${weggefallen.join(', ')}`)
  console.log('  Absicht? Sonst verliert die Seite ihre internen Links aus der Rubrik.')
}
