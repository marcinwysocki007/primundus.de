#!/usr/bin/env node
// chunk-archiv-start.mjs — Startliste für den ERSTEN Deploy mit dem Chunk-Archiv (23.10.2026, Entscheidung G1).
//
// Warum: scripts/chunk-archiv.mjs übernimmt beim Build die Programmdateien der Live-Fassung anhand ihrer Liste
// /_archiv/liste.json. Die Fassung, die beim ersten Deploy mit dem Archiv live ist, hat diese Liste noch nicht. Ohne
// Startliste wären genau ihre Dateien nach dem Deploy weg — die Lücke, die das Archiv schließen soll.
//
// Was es tut (nur GET, höflich: höchstens 4 Abrufe gleichzeitig):
//   1. Alle Seiten aus <ARCHIV_BASIS>/sitemap.xml abrufen (dazu / und eine nicht vorhandene Adresse für die 404-Seite).
//   2. Aus HTML und eingebettetem RSC-Text (self.__next_f.push, zusammengesetzt, weil Namen über Grenzen hinweg
//      zerschnitten sind) alle /_next/static/…-Pfade und static/chunks|css|media/…-Namen ziehen, dazu die buildId.
//   3. Jede gefundene Datei laden; JS-Dateien nach weiteren Namen durchsuchen, in der Webpack-Laufzeit (webpack-*.js) die
//      Namen- und Hash-Tabelle der Dateinamen-Funktion auswerten (dynamisch geladene Chunks), CSS nach url(…) (Schriften,
//      Bilder). Dazu /_next/static/<buildId>/_buildManifest.js und _ssgManifest.js.
//   4. Alles mit Größe und sha256 als Startliste schreiben (gleiches Format wie /_archiv/liste.json, quelle „start“).
// Geladene Dateien werden nur gehasht und als Text durchsucht, nie ausgeführt.
//
// Aufruf (kurz vor dem Release, Datei danach committen; sie muss zur dann laufenden Fassung passen):
//   node scripts/chunk-archiv-start.mjs                      → scripts/daten/chunk-archiv-start.json
//   node scripts/chunk-archiv-start.mjs --ziel /tmp/x.json   → andere Zieldatei (zum Ansehen)
//   ARCHIV_BASIS=http://localhost:3611 node scripts/chunk-archiv-start.mjs   (Test gegen einen lokalen Server)
// Bricht ab (Fehlercode 1), wenn unterwegs eine zweite buildId auftaucht (Deploy während des Sammelns) oder Seiten fehlen.
import crypto from 'node:crypto'
import fs from 'node:fs'
import path from 'node:path'

const BASIS = (process.env.ARCHIV_BASIS || 'https://primundus.de').replace(/\/+$/, '')
const zielArg = process.argv.indexOf('--ziel')
const ZIEL = path.resolve(zielArg > 0 ? process.argv[zielArg + 1] : path.join('scripts', 'daten', 'chunk-archiv-start.json'))
const PARALLEL = 4
const VERSUCHE = 3
const ZEITLIMIT_MS = 30_000
const USER_AGENT = 'primundus-chunk-archiv-start/1 (+https://primundus.de)'
const ENDUNG = 'js|css|woff2?|ttf|otf|eot|png|jpe?g|gif|svg|webp|avif|ico|json|txt'
// Pfad nach /_next/static/ (HTML-Attribute, CSS) bzw. static/… ohne Präfix (RSC-Text, Webpack-Laufzeit, Chunks).
const MIT_PRAEFIX = new RegExp(`/_next/static/([^"'\\\\\\s)(<>,;]+?\\.(?:${ENDUNG}))(?![A-Za-z0-9_])`, 'g')
const OHNE_PRAEFIX = new RegExp(`(?<![A-Za-z0-9_/])static/((?:chunks|css|media)/[^"'\\\\\\s)(<>,;:]+?\\.(?:${ENDUNG}))(?![A-Za-z0-9_])`, 'g')
const PFAD_OK = /^(?!.*\.\.)[A-Za-z0-9._\-\/\[\]@~+%()]+$/

const mb = (b) => (b / 1024 / 1024).toFixed(1).replace('.', ',') + ' MB'
const sha256 = (buf) => crypto.createHash('sha256').update(buf).digest('hex')

async function holen(url) {
  let letzter
  for (let v = 1; v <= VERSUCHE; v++) {
    try {
      const r = await fetch(url, {
        redirect: 'follow',
        cache: 'no-store',
        headers: { 'User-Agent': USER_AGENT, Accept: '*/*' },
        signal: AbortSignal.timeout(ZEITLIMIT_MS),
      })
      const buf = Buffer.from(await r.arrayBuffer())
      if (r.status < 500) return { status: r.status, buf, typ: r.headers.get('content-type') || '', url: r.url }
      letzter = new Error(`HTTP ${r.status}`)
    } catch (e) {
      letzter = e
    }
    if (v < VERSUCHE) await new Promise((ok) => setTimeout(ok, 1000 * v))
  }
  throw new Error(`${url}: ${letzter?.cause?.code || letzter?.message || letzter}`)
}

async function parallel(eintraege, arbeit) {
  let i = 0
  await Promise.all(
    Array.from({ length: Math.min(PARALLEL, eintraege.length) }, async () => {
      while (i < eintraege.length) await arbeit(eintraege[i++])
    }),
  )
}

const dekodiert = (p) => {
  try {
    return decodeURI(p)
  } catch {
    return p
  }
}

function namenAus(text) {
  const aus = new Set()
  for (const m of text.matchAll(MIT_PRAEFIX)) aus.add(dekodiert(m[1]))
  for (const m of text.matchAll(OHNE_PRAEFIX)) aus.add(dekodiert(m[1]))
  return aus
}

// RSC-Text der Seite: self.__next_f.push([1,"…"]) aneinandergehängt und als JSON-String dekodiert.
function rscText(html) {
  const teile = []
  for (const m of html.matchAll(/self\.__next_f\.push\(\[1,("(?:[^"\\]|\\.)*")\]\)/g)) {
    try {
      teile.push(JSON.parse(m[1]))
    } catch {}
  }
  return teile.join('')
}

// Dateinamen-Funktion der Webpack-Laufzeit, z. B.
//   d.u=function(e){return"static/chunks/"+({123:"name"}[e]||e)+"."+{123:"0a1b…",456:"…"}[e]+".js"}
//   d.miniCssF=function(e){return"static/css/"+{789:"…"}[e]+".css"}
// Feste Namen (return"static/css/abc.css") findet schon namenAus(). Hier kommen die Tabellen dazu.
function laufzeitKandidaten(js) {
  const aus = new Set()
  const tabelle = (s) => {
    const t = {}
    for (const m of s.matchAll(/(\d+):"([^"]+)"/g)) t[m[1]] = m[2]
    return t
  }
  for (const [kennung, ordner, endung] of [['.u=function', 'chunks', 'js'], ['.miniCssF=function', 'css', 'css']]) {
    const start = js.indexOf(kennung)
    if (start < 0) continue
    const rumpf = js.slice(start, start + 20000).split(/\},\w\.\w+=/)[0]
    const objekte = [...rumpf.matchAll(/\{(\d+:"[^"]*"(?:,\d+:"[^"]*")*)\}/g)].map((m) => tabelle(m[1]))
    const hashes = objekte.filter((o) => Object.values(o).every((v) => /^[0-9a-f]{8,}$/.test(v)))
    const namen = Object.assign({}, ...objekte.filter((o) => !hashes.includes(o)))
    const trenner = rumpf.match(/\)\+"([.\-])"\+/)?.[1] || rumpf.match(/\+"([.\-])"\+\{/)?.[1] || '.'
    for (const h of hashes)
      for (const [id, hash] of Object.entries(h)) {
        aus.add(`${ordner}/${namen[id] || id}${trenner}${hash}.${endung}`)
        if (ordner === 'css') aus.add(`css/${hash}.css`)
      }
  }
  return aus
}

async function seitenAusSitemap() {
  const pfade = new Set()
  const offen = [`${BASIS}/sitemap.xml`]
  while (offen.length) {
    const url = offen.shift()
    const r = await holen(url)
    if (r.status !== 200) throw new Error(`${url}: HTTP ${r.status}`)
    const xml = r.buf.toString('utf8')
    const locs = [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1].replace(/&amp;/g, '&'))
    if (/<sitemapindex/i.test(xml)) offen.push(...locs.map((l) => BASIS + new URL(l).pathname))
    else for (const l of locs) pfade.add(new URL(l).pathname + new URL(l).search)
  }
  return [...pfade]
}

async function main() {
  const erzeugt = new Date().toISOString()
  const t0 = Date.now()
  const seiten = await seitenAusSitemap()
  // Feste Adressen: Startseite, 404-Seite (nicht vorhandene Adresse) und die eigene 404-Route von Next.
  const proben = new Set(['/__chunk-archiv-start-404', '/_not-found'])
  const welle1 = [...new Set(['/', ...proben, ...seiten])]
  console.log(`chunk-archiv-start: ${seiten.length} Seiten aus ${BASIS}/sitemap.xml, dazu ${welle1.length - seiten.length} feste Adressen.`)

  const gefunden = new Map() // pfad → Fundstelle
  const buildIds = new Map() // buildId → Seitenzahl
  const seitenFehler = []
  const links = new Set()
  const besucht = new Set(welle1)
  let gelesen = 0
  const merke = (namen, wo) => {
    for (const n of namen) if (PFAD_OK.test(n) && !gefunden.has(n)) gefunden.set(n, wo)
  }
  const ursprung = new URL(BASIS).origin
  const seiteLesen = (pflicht) => async (pfad) => {
    try {
      const r = await holen(BASIS + pfad)
      // Weiterleitungen zu anderen Seiten (z. B. kostenrechner.primundus.de) gehören nicht zu diesem Build.
      if (new URL(r.url).origin !== ursprung || !/text\/html/.test(r.typ)) return
      if (pflicht && r.status !== 200 && !proben.has(pfad)) seitenFehler.push(`${pfad}: HTTP ${r.status}`)
      if (r.status !== 200 && !proben.has(pfad)) return
      gelesen++
      const html = r.buf.toString('utf8')
      const rsc = rscText(html)
      merke(namenAus(html), pfad)
      merke(namenAus(rsc), pfad)
      const id = (rsc.match(/"buildId":"([A-Za-z0-9_-]+)"/) || html.match(/buildId\\?"\s*:\s*\\?"([A-Za-z0-9_-]+)/))?.[1]
      if (id) buildIds.set(id, (buildIds.get(id) || 0) + 1)
      // Interne Links für eine zweite Runde: Seiten, die nicht in der Sitemap stehen (Impressum, Datenschutz, …).
      for (const m of html.matchAll(/href="([^"#]+)"/g)) {
        let u
        try {
          u = new URL(m[1].replace(/&amp;/g, '&'), BASIS + pfad)
        } catch {
          continue
        }
        if (u.origin !== ursprung || /^\/(_next|api)\//.test(u.pathname) || /\.[a-z0-9]{2,5}$/i.test(u.pathname)) continue
        links.add(u.pathname)
      }
    } catch (e) {
      if (pflicht) seitenFehler.push(e.message)
    }
  }
  await parallel(welle1, seiteLesen(true))
  const welle2 = [...links].filter((p) => !besucht.has(p) && !besucht.has(p.replace(/\/$/, '')) && !besucht.has(p + '/'))
  await parallel(welle2, seiteLesen(false))
  const ids = [...buildIds.keys()]
  console.log(
    `chunk-archiv-start: ${gelesen} Seiten gelesen (${welle2.length} zusätzlich über interne Links), buildId ${ids.join(', ') || '—'}, ${gefunden.size} Dateinamen.`,
  )
  if (ids.length !== 1) throw new Error(`Erwartet genau eine buildId, gefunden: ${ids.join(', ') || 'keine'} (Deploy während des Sammelns?).`)
  // Einzelne kaputte Sitemap-Adressen sollen den Release nicht blockieren; viele deuten auf ein Problem mit der Seite.
  for (const f of seitenFehler.slice(0, 15)) console.warn('  Seite:', f)
  if (seitenFehler.length > welle1.length * 0.05) throw new Error(`${seitenFehler.length} Seiten nicht wie erwartet geladen.`)
  const buildId = ids[0]
  // Manifeste der Pages-Laufzeit: im HTML nicht verwiesen, aber Teil jedes Builds.
  const kandidaten = new Set([`${buildId}/_buildManifest.js`, `${buildId}/_ssgManifest.js`])

  // Dateien laden; JS/CSS liefern weitere Namen. Was im HTML einer Seite steht, muss es geben (sonst Abbruch); Namen aus
  // Programmdateien, der Laufzeit-Tabelle und die Manifeste sind Vermutungen und dürfen fehlen.
  const dateien = new Map()
  const nichtGefunden = []
  const fehler = []
  let welle = [...gefunden.keys(), ...kandidaten]
  const gesehen = new Set(welle)
  while (welle.length) {
    const neu = []
    await parallel(welle, async (pfad) => {
      try {
        const r = await holen(`${BASIS}/_next/static/${encodeURI(pfad)}`)
        if (r.status !== 200) {
          ;(gefunden.has(pfad) ? fehler : nichtGefunden).push(`${pfad}: HTTP ${r.status}`)
          return
        }
        dateien.set(pfad, { pfad, groesse: r.buf.length, sha256: sha256(r.buf) })
        let weitere = new Set()
        if (pfad.endsWith('.js')) {
          const js = r.buf.toString('utf8')
          weitere = namenAus(js)
          if (/(^|\/)webpack-[0-9a-f]+\.js$/.test(pfad)) for (const k of laufzeitKandidaten(js)) weitere.add(k)
        } else if (pfad.endsWith('.css')) {
          const css = r.buf.toString('utf8')
          for (const m of css.matchAll(/url\(\s*["']?([^"')]+)["']?\s*\)/g)) {
            if (m[1].startsWith('data:')) continue
            const voll = new URL(m[1], `${BASIS}/_next/static/${pfad}`)
            if (voll.origin === new URL(BASIS).origin && voll.pathname.startsWith('/_next/static/'))
              weitere.add(dekodiert(voll.pathname.slice('/_next/static/'.length)))
          }
        }
        for (const w of weitere)
          if (PFAD_OK.test(w) && !gesehen.has(w)) {
            gesehen.add(w)
            neu.push(w)
          }
      } catch (e) {
        fehler.push(e.message)
      }
    })
    welle = neu
  }
  if (fehler.length) {
    for (const f of fehler.slice(0, 15)) console.warn('  Datei:', f)
    throw new Error(`${fehler.length} gefundene Dateien nicht ladbar.`)
  }

  const eintraege = [...dateien.values()]
    .sort((a, b) => (a.pfad < b.pfad ? -1 : 1))
    .map((d) => ({ ...d, erstesAuftreten: erzeugt, zuletztAktiv: erzeugt, eigen: true, quelle: 'start' }))
  const summe = eintraege.reduce((s, d) => s + d.groesse, 0)
  const art = {}
  for (const d of eintraege) {
    const k = d.pfad.startsWith(buildId) ? 'manifeste' : d.pfad.startsWith('chunks/app/') ? 'chunks/app' : d.pfad.split('/')[0]
    art[k] = (art[k] || 0) + 1
  }
  const kopf = {
    version: 1,
    quelle: 'start',
    erzeugt,
    basis: BASIS,
    buildId,
    seiten: gelesen,
    dauerSekunden: Math.round((Date.now() - t0) / 1000),
    nichtGefunden,
    dateien: [],
  }
  const text =
    JSON.stringify(kopf, null, 1).replace(/"dateien": \[\]\n\}$/, '"dateien": [\n') +
    eintraege.map((d) => '  ' + JSON.stringify(d)).join(',\n') +
    '\n ]\n}\n'
  JSON.parse(text)
  fs.mkdirSync(path.dirname(ZIEL), { recursive: true })
  fs.writeFileSync(ZIEL, text)
  console.log(`chunk-archiv-start: ${eintraege.length} Dateien, ${mb(summe)} (${Object.entries(art).map(([k, v]) => `${k} ${v}`).join(', ')}).`)
  if (nichtGefunden.length) console.log(`chunk-archiv-start: ${nichtGefunden.length} vermutete Namen ohne Datei: ${nichtGefunden.slice(0, 5).join(' | ')}`)
  console.log(`chunk-archiv-start: geschrieben ${ZIEL} (${Math.round((Date.now() - t0) / 1000)} s).`)
}

main().catch((e) => {
  console.error(`chunk-archiv-start: FEHLER: ${e.message}`)
  process.exit(1)
})
