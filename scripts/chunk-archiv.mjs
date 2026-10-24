#!/usr/bin/env node
// chunk-archiv.mjs — hält die Programmdateien früherer Veröffentlichungen 60 Tage lang erreichbar
// (23.10.2026, Entscheidung G1, Martin: „Ja, 60 Tage“).
//
// Warum: Nach jedem Deploy waren die Dateien unter /_next/static/ der Vorversion weg (404). Google lädt eine Seite und
// rendert sie oft erst Tage später; dann fehlen die alten Programmteile, und im Index landete unsere Fehlerseite statt des
// Artikels (/demenz-pflege-zuhause, Abruf 04.10.; fünf Seiten als Duplikat von /krankheiten, Abruf 15.10.). Der Schutz in
// app/error.tsx (22.10.) fängt den Ladefehler ab; dieses Skript sorgt dafür, dass er gar nicht erst entsteht.
//
// Ablauf (läuft in `npm run build` direkt nach `next build`, also VOR `next start`; nur Dateien, die beim Serverstart in
// .next/static liegen, liefert Next 13.5 aus):
//   1. Alle Dateien des frischen Builds in .next/static erfassen (Pfad, Größe, sha256).
//   2. Die Liste der LIVE-Fassung holen: <ARCHIV_BASIS>/_archiv/liste.json (Abfrage-Parameter + no-store, nie zwischengespeichert).
//   3. Jede Datei der Live-Liste, die im neuen Build fehlt und vor weniger als 60 Tagen zuletzt in einer Live-Fassung
//      gebraucht wurde, von <ARCHIV_BASIS>/_next/static/<pfad> laden, Größe und sha256 prüfen, an denselben Pfad legen.
//   4. Neue Liste schreiben: public/_archiv/liste.json (ausgeliefert unter /_archiv/liste.json, ohne Zwischenspeicher, siehe
//      next.config.js). Die Liste enthält eigene und archivierte Dateien; so reicht jede Fassung das Archiv an die nächste weiter.
//
// Felder je Datei: pfad (relativ zu .next/static), groesse, sha256, erstesAuftreten (erste Fassung mit dieser Datei),
// zuletztAktiv (bis wann sie zu einer Live-Fassung gehörte), eigen (gehört zu diesem Build). Die 60 Tage zählen ab
// zuletztAktiv, nicht ab erstesAuftreten: Eine Datei, die seit Monaten unverändert in jeder Fassung steckt und heute
// herausfällt, braucht Google noch für jede Seite, die es gestern abgerufen hat.
//
// Fehlerverhalten: Fehlt die Live-Liste, scheitert ein Download oder stimmt eine Prüfsumme nicht, bricht der Build auf Render
// (Variable RENDER, laut Render-Doku auch beim Build gesetzt) oder in CI mit Fehlercode ab; Render lässt dann die alte Fassung
// laufen. Lokal gibt es nur eine Warnung, damit ein Build ohne Netz weitergeht.
// Einzige Ausnahme: Erster Deploy mit diesem Skript. Die Live-Fassung hat dann noch keine Liste (404); liegt
// scripts/daten/chunk-archiv-start.json (erzeugt von scripts/chunk-archiv-start.mjs kurz vor dem Release), wird sie
// stattdessen genommen.
//
// Schalter (Umgebungsvariablen):
//   ARCHIV=aus        kein Abruf, Liste nur mit den eigenen Dateien. Auf Render NUR im Notfall (primundus.de nicht
//                     erreichbar, Fehler muss trotzdem raus): Danach sind die Dateien aller früheren Fassungen weg.
//   ARCHIV=streng     lokal wie auf Render abbrechen statt warnen.
//   ARCHIV_BASIS      Adresse der Live-Fassung, Standard https://primundus.de (für Tests z. B. http://localhost:3611).
//   ARCHIV_TAGE       Aufbewahrung in Tagen, Standard 60.
//   ARCHIV_JETZT      Zeitpunkt im ISO-Format statt der Uhr (nur für Tests).
//
// Prüfen der Live-Fassung nach einem Deploy (lädt jede Datei der Live-Liste und vergleicht Größe und sha256):
//   node scripts/chunk-archiv.mjs --live-pruefen
import crypto from 'node:crypto'
import fs from 'node:fs'
import path from 'node:path'

const WURZEL = process.cwd()
const NEXT_DIR = path.join(WURZEL, '.next')
const STATIC_DIR = path.join(NEXT_DIR, 'static')
const LISTE_DATEI = path.join(WURZEL, 'public', '_archiv', 'liste.json')
const LISTE_ADRESSE = '/_archiv/liste.json'
const EIGEN_MARKE = path.join(NEXT_DIR, 'chunk-archiv-eigen.json')
const START_DATEI = path.join(WURZEL, 'scripts', 'daten', 'chunk-archiv-start.json')

const BASIS = (process.env.ARCHIV_BASIS || 'https://primundus.de').replace(/\/+$/, '')
const TAGE = Number(process.env.ARCHIV_TAGE || 60)
const JETZT = process.env.ARCHIV_JETZT ? new Date(process.env.ARCHIV_JETZT) : new Date()
const gesetzt = (v) => Boolean(v) && !['0', 'false', 'nein', 'no'].includes(String(v).toLowerCase())
const STRENG = gesetzt(process.env.RENDER) || gesetzt(process.env.CI) || process.env.ARCHIV === 'streng'
const AUS = process.env.ARCHIV === 'aus'
const PARALLEL = 8
const VERSUCHE = 4
const ZEITLIMIT_MS = 30_000
const USER_AGENT = 'primundus-chunk-archiv/1 (+https://primundus.de)'
const TAG_MS = 24 * 60 * 60 * 1000
// Nur harmlose Zeichen; die Liste kommt zwar von uns, landet aber als Dateipfad auf der Platte.
const PFAD_OK = /^(?!.*\.\.)[A-Za-z0-9._\-\/\[\]@~+%()]+$/

const mb = (bytes) => (bytes / 1024 / 1024).toFixed(1).replace('.', ',') + ' MB'
const log = (...a) => console.log('chunk-archiv:', ...a)
const warn = (...a) => console.warn('chunk-archiv: WARNUNG:', ...a)

class ArchivFehler extends Error {}

function alleDateien(dir, basis = dir) {
  if (!fs.existsSync(dir)) return []
  const aus = []
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const voll = path.join(dir, e.name)
    if (e.isDirectory()) aus.push(...alleDateien(voll, basis))
    else if (e.isFile()) aus.push(path.relative(basis, voll).split(path.sep).join('/'))
  }
  return aus.sort()
}

const sha256 = (buf) => crypto.createHash('sha256').update(buf).digest('hex')

function eintragAusDatei(pfad) {
  const buf = fs.readFileSync(path.join(STATIC_DIR, pfad))
  return { pfad, groesse: buf.length, sha256: sha256(buf) }
}

// Welche Dateien gehören zu DIESEM Build? Beim ersten Lauf nach `next build` alle in .next/static (next build leert .next
// außer .next/cache). Die Marke hält das fest, damit ein zweiter Lauf archivierte Dateien nicht für eigene hält.
function eigeneDateien(buildId) {
  if (fs.existsSync(EIGEN_MARKE)) {
    try {
      const marke = JSON.parse(fs.readFileSync(EIGEN_MARKE, 'utf8'))
      if (marke.buildId === buildId && Array.isArray(marke.dateien)) return marke.dateien
    } catch {}
  }
  const dateien = alleDateien(STATIC_DIR).map(eintragAusDatei)
  fs.writeFileSync(EIGEN_MARKE, JSON.stringify({ buildId, dateien }) + '\n')
  return dateien
}

async function holen(url, { erlaubt404 = false } = {}) {
  let letzter
  for (let versuch = 1; versuch <= VERSUCHE; versuch++) {
    try {
      const r = await fetch(url, {
        cache: 'no-store',
        redirect: 'follow',
        headers: { 'User-Agent': USER_AGENT, 'Cache-Control': 'no-cache', Pragma: 'no-cache' },
        signal: AbortSignal.timeout(ZEITLIMIT_MS),
      })
      if (r.status === 404 && erlaubt404) return null
      if (r.status === 200) return Buffer.from(await r.arrayBuffer())
      letzter = new Error(`HTTP ${r.status}`)
      // 4xx außer 408/429 wird durch Wiederholen nicht besser.
      if (r.status >= 400 && r.status < 500 && r.status !== 408 && r.status !== 429) break
    } catch (e) {
      letzter = e
    }
    if (versuch < VERSUCHE) await new Promise((ok) => setTimeout(ok, 500 * 2 ** (versuch - 1)))
  }
  const grund = letzter?.cause?.code || letzter?.cause?.errors?.[0]?.code || letzter?.cause?.message || letzter?.message
  throw new ArchivFehler(`${url}: ${grund || letzter}`)
}

function listePruefen(liste, herkunft) {
  if (!liste || !Array.isArray(liste.dateien)) throw new ArchivFehler(`${herkunft}: kein gültiges Format (dateien fehlt)`)
  for (const d of liste.dateien) {
    if (typeof d.pfad !== 'string' || !PFAD_OK.test(d.pfad) || d.pfad.startsWith('/'))
      throw new ArchivFehler(`${herkunft}: unzulässiger Pfad ${JSON.stringify(d.pfad)}`)
    if (!Number.isInteger(d.groesse) || !/^[0-9a-f]{64}$/.test(d.sha256 || ''))
      throw new ArchivFehler(`${herkunft}: Eintrag ${d.pfad} ohne Größe/sha256`)
  }
  return liste
}

async function liveListe() {
  const url = `${BASIS}${LISTE_ADRESSE}?t=${Date.now()}`
  const buf = await holen(url, { erlaubt404: true })
  if (!buf) return null
  let liste
  try {
    liste = JSON.parse(buf.toString('utf8'))
  } catch {
    throw new ArchivFehler(`${url}: keine JSON-Antwort`)
  }
  return listePruefen(liste, 'Live-Liste')
}

async function liveBuildId() {
  const html = (await holen(`${BASIS}/?t=${Date.now()}`)).toString('utf8')
  return html.match(/buildId\\?"\s*:\s*\\?"([A-Za-z0-9_-]+)/)?.[1] ?? null
}

async function parallel(eintraege, arbeit) {
  let i = 0
  const fehler = []
  async function arbeiter() {
    while (i < eintraege.length) {
      const e = eintraege[i++]
      try {
        await arbeit(e)
      } catch (err) {
        fehler.push(`${e.pfad}: ${err.message}`)
      }
    }
  }
  await Promise.all(Array.from({ length: Math.min(PARALLEL, eintraege.length) }, arbeiter))
  return fehler
}

// Pfade stehen unkodiert in der Liste (wie auf der Platte); Next vergleicht mit encodeURI(dateiname).
const dateiUrl = (pfad) => `${BASIS}/_next/static/${encodeURI(pfad)}`

async function archivieren(eintrag) {
  const ziel = path.join(STATIC_DIR, eintrag.pfad)
  if (fs.existsSync(ziel)) {
    const vorhanden = fs.readFileSync(ziel)
    if (vorhanden.length === eintrag.groesse && sha256(vorhanden) === eintrag.sha256) return 'vorhanden'
  }
  const buf = await holen(dateiUrl(eintrag.pfad))
  if (buf.length !== eintrag.groesse) throw new ArchivFehler(`Größe ${buf.length} statt ${eintrag.groesse}`)
  const hash = sha256(buf)
  if (hash !== eintrag.sha256) throw new ArchivFehler(`sha256 ${hash.slice(0, 12)}… statt ${eintrag.sha256.slice(0, 12)}…`)
  fs.mkdirSync(path.dirname(ziel), { recursive: true })
  fs.writeFileSync(ziel, buf)
  return 'geladen'
}

function listeSchreiben(meta, dateien) {
  const sortiert = [...dateien].sort((a, b) => (a.pfad < b.pfad ? -1 : a.pfad > b.pfad ? 1 : 0))
  const liste = { version: 1, ...meta, dateien: sortiert }
  // Eine Zeile je Datei: lesbar und bei einigen tausend Einträgen trotzdem klein.
  const kopf = JSON.stringify({ ...liste, dateien: [] }, null, 1).replace(/"dateien": \[\]\n\}$/, '"dateien": [\n')
  const text = kopf + sortiert.map((d) => '  ' + JSON.stringify(d)).join(',\n') + '\n ]\n}\n'
  JSON.parse(text)
  fs.mkdirSync(path.dirname(LISTE_DATEI), { recursive: true })
  fs.writeFileSync(LISTE_DATEI, text)
  return liste
}

async function bauen() {
  const start = Date.now()
  const jetzt = JETZT.toISOString()
  const buildIdDatei = path.join(NEXT_DIR, 'BUILD_ID')
  if (!fs.existsSync(buildIdDatei)) throw new ArchivFehler('.next/BUILD_ID fehlt — läuft das Skript nach `next build`?')
  const buildId = fs.readFileSync(buildIdDatei, 'utf8').trim()
  const meta = {
    erzeugt: jetzt,
    buildId,
    commit: process.env.RENDER_GIT_COMMIT || null,
    aufbewahrungTage: TAGE,
    vorgaenger: null,
  }

  const eigene = eigeneDateien(buildId)
  const eigenePfade = new Map(eigene.map((d) => [d.pfad, d]))
  const eigenBytes = eigene.reduce((s, d) => s + d.groesse, 0)
  log(`Build ${buildId}: ${eigene.length} eigene Dateien, ${mb(eigenBytes)}.`)

  const eigeneEintraege = (alt) =>
    eigene.map((d) => ({
      ...d,
      erstesAuftreten: alt.get(d.pfad)?.sha256 === d.sha256 ? alt.get(d.pfad).erstesAuftreten || jetzt : jetzt,
      zuletztAktiv: jetzt,
      eigen: true,
    }))

  if (AUS) {
    warn('ARCHIV=aus — keine Dateien früherer Fassungen übernommen. Auf Render bricht das die Archiv-Kette.')
    listeSchreiben({ ...meta, archivAus: true }, eigeneEintraege(new Map()))
    return
  }

  // Live-Liste holen; ohne sie nur mit Startliste weiter (erster Deploy).
  let quelle
  let vorlage = await liveListe()
  if (vorlage) {
    quelle = `Live-Liste ${BASIS}${LISTE_ADRESSE} (Build ${vorlage.buildId || '?'}, ${vorlage.dateien.length} Dateien)`
  } else if (fs.existsSync(START_DATEI)) {
    let start
    try {
      start = listePruefen(JSON.parse(fs.readFileSync(START_DATEI, 'utf8')), 'Startliste')
    } catch (e) {
      throw e instanceof ArchivFehler ? e : new ArchivFehler(`Startliste nicht lesbar: ${e.message}`)
    }
    const live = await liveBuildId()
    if (start.buildId && live && start.buildId !== live)
      throw new ArchivFehler(
        `Startliste gehört zu Build ${start.buildId}, live ist ${live}. Startliste mit scripts/chunk-archiv-start.mjs neu erzeugen.`,
      )
    // Alles aus der Startliste gehört zur laufenden Fassung, war also bis jetzt aktiv.
    vorlage = { ...start, dateien: start.dateien.map((d) => ({ ...d, eigen: true })) }
    quelle = `Startliste ${path.relative(WURZEL, START_DATEI)} (Build ${start.buildId}, ${start.dateien.length} Dateien), Live-Liste fehlt`
  } else {
    throw new ArchivFehler(
      `Live-Liste ${BASIS}${LISTE_ADRESSE} fehlt (404) und es gibt keine ${path.relative(WURZEL, START_DATEI)}. ` +
        'Vor dem ersten Deploy scripts/chunk-archiv-start.mjs laufen lassen und die Datei committen.',
    )
  }
  log(`Vorgänger: ${quelle}.`)
  meta.vorgaenger = { buildId: vorlage.buildId || null, quelle: vorlage.quelle === 'start' ? 'start' : 'live', dateien: vorlage.dateien.length }

  const alt = new Map(vorlage.dateien.map((d) => [d.pfad, d]))
  const grenze = JETZT.getTime() - TAGE * TAG_MS
  const archiv = []
  let abgelaufen = 0
  let gleicherName = 0
  for (const d of vorlage.dateien) {
    if (eigenePfade.has(d.pfad)) {
      if (eigenePfade.get(d.pfad).sha256 !== d.sha256) {
        gleicherName++
        warn(`${d.pfad}: gleicher Name, anderer Inhalt als live — neue Fassung gewinnt.`)
      }
      continue
    }
    // Eigene Dateien der Live-Fassung waren bis zu diesem Deploy aktiv; archivierte behalten ihr Datum.
    const zuletztAktiv = d.eigen ? jetzt : d.zuletztAktiv || d.erstesAuftreten || jetzt
    if (new Date(zuletztAktiv).getTime() < grenze) {
      abgelaufen++
      continue
    }
    archiv.push({
      pfad: d.pfad,
      groesse: d.groesse,
      sha256: d.sha256,
      erstesAuftreten: d.erstesAuftreten || zuletztAktiv,
      zuletztAktiv,
      eigen: false,
      ...(d.quelle ? { quelle: d.quelle } : {}),
    })
  }

  let geladen = 0
  let vorhanden = 0
  const fehler = await parallel(archiv, async (e) => {
    const r = await archivieren(e)
    if (r === 'geladen') geladen++
    else vorhanden++
  })
  const archivBytes = archiv.reduce((s, d) => s + d.groesse, 0)
  log(
    `Archiv: ${archiv.length} Dateien früherer Fassungen (${mb(archivBytes)}), davon ${geladen} geladen, ${vorhanden} schon da; ` +
      `${abgelaufen} älter als ${TAGE} Tage entfernt${gleicherName ? `, ${gleicherName} Namensgleiche mit anderem Inhalt` : ''}.`,
  )
  if (fehler.length) {
    for (const f of fehler.slice(0, 20)) warn(f)
    if (fehler.length > 20) warn(`… und ${fehler.length - 20} weitere`)
    const nachricht = `${fehler.length} von ${archiv.length} Dateien nicht übernommen`
    if (STRENG) throw new ArchivFehler(nachricht)
    warn(`${nachricht} — lokal geht es trotzdem weiter.`)
  }
  const ok = archiv.filter((e) => !fehler.some((f) => f.startsWith(`${e.pfad}: `)))
  // Nur bei einem zweiten Lauf auf demselben Build: Dateien eines früheren Laufs, die nicht mehr in die Liste gehören
  // (abgelaufen), wieder entfernen. Nach `next build` liegt hier nichts Fremdes.
  const behalten = new Set([...eigenePfade.keys(), ...ok.map((e) => e.pfad)])
  const ueberzaehlig = alleDateien(STATIC_DIR).filter((p) => !behalten.has(p))
  for (const p of ueberzaehlig) fs.rmSync(path.join(STATIC_DIR, p))
  if (ueberzaehlig.length) log(`${ueberzaehlig.length} Dateien eines früheren Laufs entfernt.`)
  const liste = listeSchreiben(meta, [...eigeneEintraege(alt), ...ok])
  const gesamt = liste.dateien.reduce((s, d) => s + d.groesse, 0)
  if (gesamt > 300 * 1024 * 1024) warn(`.next/static ist mit Archiv ${mb(gesamt)} groß — Aufbewahrung prüfen.`)
  log(`Liste geschrieben: ${path.relative(WURZEL, LISTE_DATEI)} — ${liste.dateien.length} Dateien, ${mb(gesamt)}, ${((Date.now() - start) / 1000).toFixed(1)} s.`)
}

async function livePruefen() {
  const liste = await liveListe()
  if (!liste) throw new ArchivFehler(`${BASIS}${LISTE_ADRESSE} liefert 404.`)
  const archiviert = liste.dateien.filter((d) => !d.eigen).length
  log(`Live-Liste: Build ${liste.buildId}, erzeugt ${liste.erzeugt}, ${liste.dateien.length} Dateien (${archiviert} archiviert).`)
  const fehler = await parallel(liste.dateien, async (d) => {
    const buf = await holen(dateiUrl(d.pfad))
    if (buf.length !== d.groesse || sha256(buf) !== d.sha256) throw new Error('Größe/sha256 weicht ab')
  })
  if (fehler.length) {
    for (const f of fehler.slice(0, 20)) warn(f)
    throw new ArchivFehler(`${fehler.length} von ${liste.dateien.length} Dateien live nicht in Ordnung.`)
  }
  log(`Alle ${liste.dateien.length} Dateien live mit 200 und passender Prüfsumme.`)
}

const modus = process.argv.includes('--live-pruefen') ? livePruefen : bauen
modus().catch((e) => {
  if (!(e instanceof ArchivFehler)) throw e
  if (STRENG || modus === livePruefen) {
    console.error(`chunk-archiv: FEHLER: ${e.message}`)
    console.error('chunk-archiv: Build abgebrochen, damit die laufende Fassung stehen bleibt (Notschalter: ARCHIV=aus, siehe Kopf der Datei).')
    process.exit(1)
  }
  warn(`${e.message}`)
  warn('Lokal ohne Archiv weiter; die Liste enthält nur die eigenen Dateien.')
  const buildId = fs.existsSync(path.join(NEXT_DIR, 'BUILD_ID')) ? fs.readFileSync(path.join(NEXT_DIR, 'BUILD_ID'), 'utf8').trim() : null
  if (buildId) {
    const jetzt = JETZT.toISOString()
    listeSchreiben(
      { erzeugt: jetzt, buildId, commit: null, aufbewahrungTage: TAGE, vorgaenger: null, ohneArchiv: true },
      eigeneDateien(buildId).map((d) => ({ ...d, erstesAuftreten: jetzt, zuletztAktiv: jetzt, eigen: true })),
    )
  }
})
