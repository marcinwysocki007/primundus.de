// lib/lastmod.ts — echtes Änderungsdatum je Seite für die Sitemap (zur Buildzeit gelesen).
// Quelle 1: dateModified: 'YYYY-MM-DD' im JSON-LD der Seite (123 Seiten)
// Quelle 2: sichtbares „Aktualisiert <Monat> <Jahr>" bzw. „Aktualisiert am <Tag>. <Monat> <Jahr>"
// Quelle 3: echtes Commit-Datum aus lib/lastmod-git.json (scripts/build-lastmod.mjs).
// Sonst: undefined → das Feld wird in der Sitemap weggelassen.
// Hintergrund: Vorher stand an allen ~358 URLs derselbe Build-Zeitstempel — für
// Suchmaschinen/AI-Retrieval wertlos. Ehrliches Weglassen schlägt falsche Frische.
import fs from 'fs'
import path from 'path'
import gitDaten from './lastmod-git.json'

const MONATE: Record<string, number> = {
  Januar: 0, Februar: 1, 'März': 2, Maerz: 2, April: 3, Mai: 4, Juni: 5,
  Juli: 6, August: 7, September: 8, Oktober: 9, November: 10, Dezember: 11,
}

const cache = new Map<string, Date | undefined>()

export function lastmodFuerSlug(slug: string): Date | undefined {
  if (cache.has(slug)) return cache.get(slug)
  let result: Date | undefined
  try {
    const file = slug === ''
      ? path.join(process.cwd(), 'app', 'page.tsx')
      : path.join(process.cwd(), 'app', slug, 'page.tsx')
    const src = fs.readFileSync(file, 'utf8')
    const dm = src.match(/dateModified['"]?\s*:\s*['"](\d{4}-\d{2}-\d{2})/)
    if (dm) {
      result = new Date(dm[1] + 'T00:00:00.000Z')
    } else {
      // Der Tag wurde bisher zwar gelesen, aber weggeworfen — jede Seite mit
      // sichtbarem Datum meldete den Monatsersten. Fuer die 208 Ortsseiten mit
      // "Aktualisiert August 2026" stand deshalb der 1. August in der Sitemap,
      // auch fuer die, die Ende August komplett neu geschrieben wurden. Google
      // bekam damit ausgerechnet fuer die verbesserten Seiten das Signal
      // "unveraendert". Steht ein Tag da, zaehlt er jetzt; steht keiner da,
      // bleibt es beim Monatsersten — das ist dann die ehrliche Genauigkeit.
      // Seit 03.09.2026 steht das sichtbare Datum oft als aktualisiertAm('slug', '25. April 2026')
      const deklariert = src.match(/aktualisiertAm\('[^']*',\s*'(\d{1,2})\. (\S+) (\d{4})'\)/)
      if (deklariert && MONATE[deklariert[2]] !== undefined) {
        result = new Date(Date.UTC(parseInt(deklariert[3], 10), MONATE[deklariert[2]], parseInt(deklariert[1], 10)))
      }
      const akt = result ? null : src.match(
        /Aktualisiert(?:\s+am)?\s+(?:(\d{1,2})\.\s*)?(Januar|Februar|März|Maerz|April|Mai|Juni|Juli|August|September|Oktober|November|Dezember)\s+(\d{4})/
      )
      if (akt) {
        const tag = akt[1] ? parseInt(akt[1], 10) : 1
        result = new Date(Date.UTC(parseInt(akt[3], 10), MONATE[akt[2]], tag))
      }
    }
    // Rueckfallebene: echtes Commit-Datum aus Git — aber NUR, wenn die Seite
    // selbst gar kein Datum ausweist. Ein sichtbares Datum behaelt Vorrang.
    //
    // Die Versuchung, das Git-Datum immer gewinnen zu lassen, ist gross und
    // falsch: Ein Commit ist nicht gleich eine inhaltliche Aenderung. Die
    // Design-Token-Umstellung vom 23.08. hat jede einzelne Seite angefasst,
    // ohne ein Wort am Inhalt zu aendern. Liesse man Git gewinnen, meldete die
    // Sitemap fuer alle 357 URLs dasselbe Datum — also wieder den wertlosen
    // Einheits-Zeitstempel, den diese Datei gerade abschaffen sollte.
    if (!result) {
      const git = (gitDaten as Record<string, string>)[slug]
      if (git) {
        const gitDatum = new Date(git + 'T00:00:00.000Z')
        if (!isNaN(gitDatum.getTime())) result = gitDatum
      }
    }
    if (result && isNaN(result.getTime())) result = undefined
    // Zukunftsdaten (Tippfehler) nicht ausliefern
    if (result && result.getTime() > Date.now()) result = undefined
  } catch {
    result = undefined
  }
  cache.set(slug, result)
  return result
}

const MONATSNAMEN = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August',
  'September', 'Oktober', 'November', 'Dezember']

/**
 * EINE Datumsquelle je Artikel (03.09.2026, nach dem externen Audit).
 *
 * Vorher standen auf jeder Artikelseite drei voneinander unabhaengige Daten:
 * dateModified im JSON-LD (bei 112 von 122 Seiten eingefroren gleich
 * datePublished), die sichtbare Byline ("Aktualisiert am ...") und daraus
 * abgeleitet das lastmod der Sitemap. Sie konnten auseinanderlaufen -- und
 * taten es: Seiten, die im August umgeschrieben wurden, meldeten April.
 *
 * Jetzt deklariert die Seite genau einmal, was sie weiss: das sichtbar
 * genannte Datum, falls die Redaktion eines gesetzt hat. Fehlt es, gilt der
 * letzte Commit, der die Seite angefasst hat (lib/lastmod-git.json). Beides
 * ist ueberpruefbar; nichts wird geschaetzt. Ein Reviewer wird NICHT
 * ausgewiesen, weil es keinen Pruefprozess gibt -- den vorzutaeuschen waere
 * genau das, was der Audit anprangert.
 */
export function aktualisiertAm(slug: string, sichtbar?: string): { iso: string; sichtbar: string } {
  if (sichtbar) {
    const m = sichtbar.match(/^(\d{1,2})\. (\S+) (\d{4})$/)
    if (m && MONATE[m[2]] !== undefined) {
      const d = new Date(Date.UTC(parseInt(m[3], 10), MONATE[m[2]], parseInt(m[1], 10)))
      return { iso: d.toISOString().slice(0, 10), sichtbar }
    }
  }
  const git = (gitDaten as Record<string, string>)[slug]
  if (git) {
    const d = new Date(git + 'T00:00:00.000Z')
    return { iso: git, sichtbar: `${d.getUTCDate()}. ${MONATSNAMEN[d.getUTCMonth()]} ${d.getUTCFullYear()}` }
  }
  return { iso: '', sichtbar: '' }
}
