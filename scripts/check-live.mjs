#!/usr/bin/env node
// check-live.mjs — prüft die LIVE-Seite, nicht den Build (21.09.2026).
//
// Warum es das gibt: Am 20.09. lieferte die Startseite einen 304 ohne Inhalt — weiße Seite für
// jeden Besucher ohne Cache, und Googlebot bekam dasselbe (Next 13.5.1, Issue #56018). Die
// Lehre „nach jedem Deploy curlen" stand danach in den Notizen, aber niemand hat sie
// automatisiert. Am 21.09. fiel beim Nachsehen auf: /kosten UND /regionen tun seitdem genau
// das, unbemerkt. /kosten ist eine der vier Kernseiten, /regionen der Hub, über den Google
// alle 207 Ortsseiten findet.
//
// Der Fehler ist im Build NICHT sichtbar — `next build` erzeugt die Seiten fehlerfrei, der
// vergiftete Eintrag entsteht erst im ISR-Cache des Hosts. Deshalb ein eigener Prüfer gegen
// die echte Adresse, und deshalb läuft er NICHT in `npm run verify` (das prüft vor dem
// Deploy), sondern danach:
//
//     node scripts/check-live.mjs
//     node scripts/check-live.mjs --alle     (alle Seiten aus der Sitemap, dauert)
//
// Geprüft wird je Adresse: Status 200, ein Rumpf, der groß genug für eine echte Seite ist,
// ein <title> und ein Canonical. Ein 304 ohne Rumpf ist genau der Fall, den wir suchen.
const BASIS = 'https://primundus.de'
const ALLE = process.argv.includes('--alle')

// Die Seiten, die weh tun, wenn sie ausfallen: die vier Kernseiten, die Hubs und je eine
// Ortsseite als Stichprobe. Bei --alle kommt die Sitemap dazu.
const WICHTIG = [
  '/', '/kosten', '/24-stunden-pflege', '/pflegekraft-aus-polen',
  '/regionen', '/ratgeber', '/tools', '/leistungen', '/ablauf',
  '/erfahrungen', '/testsieger-24-stunden-pflege', '/ueber-uns', '/kontakt',
  '/24h-pflege-muenchen', '/24h-pflege-hamburg', '/24h-pflege-koeln',
]

// Unter dieser Größe ist es keine ausgelieferte Seite mehr, sondern ein Rumpf.
const MIN_BYTES = 20_000

async function ausSitemap() {
  // Die Sitemap wird von Next erzeugt und liegt nicht im Repo — deshalb live holen.
  // Das ist ohnehin richtiger: Geprüft werden soll, was Google zu sehen bekommt.
  try {
    const r = await fetch(`${BASIS}/sitemap.xml`, { headers: { 'User-Agent': 'primundus-check-live' } })
    const x = await r.text()
    return [...x.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(BASIS, '') || '/')
  } catch {
    console.log('  (Sitemap nicht erreichbar — nur die wichtigen Adressen)')
    return []
  }
}

async function pruefe(pfad) {
  const url = BASIS + pfad
  try {
    const r = await fetch(url, {
      redirect: 'follow',
      headers: {
        // Bewusst OHNE If-None-Match: Ein 304 darf hier gar nicht vorkommen.
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/128.0 Safari/537.36',
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'de-DE,de;q=0.9',
        'Cache-Control': 'no-cache',
      },
    })
    const text = await r.text()
    if (r.status === 304) return { pfad, fehler: '304 ohne Rumpf — weiße Seite (Next-ISR-Bug)' }
    if (r.status !== 200) return { pfad, fehler: `Status ${r.status}` }
    if (text.length < MIN_BYTES) return { pfad, fehler: `nur ${text.length} Bytes — kein vollständiger Inhalt` }
    if (!/<title>[^<]{5,}<\/title>/.test(text)) return { pfad, fehler: 'kein Titel im HTML' }
    if (!/<link rel="canonical"/.test(text)) return { pfad, fehler: 'kein Canonical' }
    return { pfad, ok: true, bytes: text.length }
  } catch (e) {
    return { pfad, fehler: `nicht erreichbar: ${e.message}` }
  }
}

const pfade = ALLE ? [...new Set([...WICHTIG, ...(await ausSitemap())])] : WICHTIG
console.log(`check-live: ${pfade.length} Adressen gegen ${BASIS}`)

const funde = []
// In kleinen Gruppen, damit wir die eigene Seite nicht fluten.
for (let i = 0; i < pfade.length; i += 6) {
  const gruppe = await Promise.all(pfade.slice(i, i + 6).map(pruefe))
  for (const g of gruppe) {
    if (g.ok) continue
    funde.push(g)
    console.log(`  ✗ ${g.pfad}  ${g.fehler}`)
  }
}

if (funde.length) {
  console.log(`\ncheck-live FEHLER: ${funde.length} von ${pfade.length} Adressen liefern keine vollständige Seite.`)
  console.log('Ein 304 ohne Rumpf heißt: Besucher ohne Cache sehen nichts, Googlebot auch nicht.')
  process.exit(1)
}
console.log(`check-live ✓ — alle ${pfade.length} Adressen liefern eine vollständige Seite`)
