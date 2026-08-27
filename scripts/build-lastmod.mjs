#!/usr/bin/env node
// Schreibt lib/lastmod-git.json: slug -> echtes Aenderungsdatum aus der Git-Historie.
//
// Warum: lib/lastmod.ts liest das Datum aus dem JSON-LD (dateModified) oder aus
// dem sichtbaren „Aktualisiert <Monat> <Jahr>" der Seite. Wo beides fehlt, liess
// es das Feld bisher weg — mit der richtigen Begruendung, dass ein erfundener
// Zeitstempel schlimmer ist als gar keiner. Die Folge war allerdings, dass 27
// URLs komplett ohne Frischesignal in der Sitemap standen, darunter
// /24-stunden-pflege, /kontakt, /pflegegrad-rechner und saemtliche Hubs.
//
// Diese Seiten HABEN ein echtes Aenderungsdatum, es steht nur in Git. Genau das
// traegt diese Datei nach — als Rueckfallebene, nicht als Ersatz. Ein auf der
// Seite sichtbares Datum hat weiterhin Vorrang, sonst widerspraechen sich
// Sitemap und Seiteninhalt.
//
// Die erzeugte JSON-Datei wird mitversioniert, damit der Build auch dort
// funktioniert, wo keine vollstaendige Git-Historie liegt. Faellt Git aus,
// bleibt die vorhandene Datei unveraendert stehen.
import { execFileSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'

const wurzel = process.cwd()
const appDir = path.join(wurzel, 'app')
const ziel = path.join(wurzel, 'lib', 'lastmod-git.json')

function gitDatum(datei) {
  try {
    const out = execFileSync('git', ['log', '-1', '--format=%aI', '--', datei], {
      cwd: wurzel,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim()
    return out ? out.slice(0, 10) : undefined
  } catch {
    return undefined
  }
}

function main() {
  // Erst pruefen, ob Git ueberhaupt nutzbar ist — sonst die bestehende Datei behalten.
  if (!gitDatum(path.join(appDir, 'page.tsx'))) {
    console.log('build-lastmod: keine Git-Historie verfuegbar, vorhandene Datei bleibt.')
    return
  }

  const karte = {}
  const eintragen = (slug, datei) => {
    const d = gitDatum(datei)
    if (d) karte[slug] = d
  }

  eintragen('', path.join(appDir, 'page.tsx'))
  for (const name of fs.readdirSync(appDir, { withFileTypes: true })) {
    if (!name.isDirectory() || name.name.startsWith('_') || name.name.startsWith('(')) continue
    const datei = path.join(appDir, name.name, 'page.tsx')
    if (fs.existsSync(datei)) eintragen(name.name, datei)
  }

  const sortiert = Object.fromEntries(Object.entries(karte).sort())
  fs.writeFileSync(ziel, JSON.stringify(sortiert, null, 2) + '\n')
  console.log(`build-lastmod: ${Object.keys(sortiert).length} Aenderungsdaten aus Git geschrieben.`)
}

main()
