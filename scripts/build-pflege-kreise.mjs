#!/usr/bin/env node
// build-pflege-kreise.mjs — erzeugt lib/pflege-kreise.ts und public/downloads/pflege-im-kreis-2023.csv
// aus den Kreistabellen der Regionaldatenbank Deutschland (02.10.2026).
//
// Wofür: Die Seite /pflege-im-kreis zeigt für alle 400 Kreise Pflegebedürftige, den Anteil zu Hause
// Versorgter, Dauerpflegeplätze je 100 Einwohner ab 80 und die Veränderung der vollstationär Versorgten
// seit 2019; die Ortsseiten zeigen dieselben Zahlen ihres Kreises in einem Kasten (OrtPflegeImKreis).
// Beides liest nur die erzeugte Datei. Neuer Datenstand = Abruf + dieses Skript, sonst nichts.
//
// EINGABE (scripts/daten/pflege-kreise/)
//   kreise-2023.csv, kreise-2019-2023.csv, deutschland.csv
//       erzeugt von seo-reports/analysen/linkaufbau-2026-10/digital-pr/daten/abruf_regionaldaten.py
//       (Aufruf: --ziel <ordner> --zeitreihe), danach hierher kopieren. Tabellen 22411-02-05-4,
//       22411-01-02-4, 12411-09-01-4; Lizenz dl-de/by-2-0, © Statistische Ämter des Bundes und der Länder.
//       Gebietsstand: Eisenach (16056) ist für 2019 dem Wartburgkreis (16063) zugeschlagen (Abrufskript).
//   orte-kreis.csv
//       Zuordnung Ortsseite → Kreis (Kreisschlüssel). Herleitung: Regionalschlüssel der Gemeinde aus dem
//       Zensus 2022 (seo-reports/daten/zensus_orte.json), die ersten fünf Stellen sind der Kreis; kreisfreie
//       Städte sind eigene Kreise (München Stadt 09162, Landkreis München 09184). kasten=nein heißt: kein
//       Kasten, Grund in der Spalte hinweis.
//
// PRÜFUNG (bricht mit Fehler ab)
//   - 400 Kreise, jeder Wert vorhanden; Summe der Kreise = Bundeszeile (Abweichung höchstens 1 je Spalte)
//   - jede Ortsseite der Vorlage (OrtSeite) steht in orte-kreis.csv, jede Zeile hat eine Seite
//   - Kreisschlüssel = erste fünf Stellen des Regionalschlüssels; Kreis kommt in den Daten vor
//   - kreisfrei laut Daten = kreisfrei laut lib/orte-beratung.ts
//   - nennt die Seite im Feld `kreis:` einen Kreis, muss es der Kreis aus den Daten sein, sonst braucht
//     die Zeile einen Hinweis (z. B. Einzugsgebiet „östlichen Landkreis München“ bei Vaterstetten)
//
// Aufruf: node scripts/build-pflege-kreise.mjs
import fs from 'node:fs'
import path from 'node:path'

const WURZEL = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..')
const DATEN = path.join(WURZEL, 'scripts/daten/pflege-kreise')
const ZIEL_TS = path.join(WURZEL, 'lib/pflege-kreise.ts')
const ZIEL_CSV = path.join(WURZEL, 'public/downloads/pflege-im-kreis-2023.csv')

const LAND = {
  '01': 'Schleswig-Holstein', '02': 'Hamburg', '03': 'Niedersachsen', '04': 'Bremen', '05': 'Nordrhein-Westfalen',
  '06': 'Hessen', '07': 'Rheinland-Pfalz', '08': 'Baden-Württemberg', '09': 'Bayern', '10': 'Saarland', '11': 'Berlin',
  '12': 'Brandenburg', '13': 'Mecklenburg-Vorpommern', '14': 'Sachsen', '15': 'Sachsen-Anhalt', '16': 'Thüringen',
}
// Hessen nennt diese drei amtlich „Kreis“, die Regionaldatenbank „Landkreis“ (wie lib/orte-beratung.ts)
const HESSEN_KREIS = new Set(['Bergstraße', 'Groß-Gerau', 'Offenbach'])
// Suchbegriffe für Orte, die zu einem Kreis gehören, aber keine eigene Zeile haben (Ortsseiten kommen
// automatisch dazu). Hanau gehörte Ende 2023 zum Main-Kinzig-Kreis und ist seit 1. Januar 2026 kreisfrei.
const WEITERE_SUCHBEGRIFFE = { '06435': ['Hanau'], '06439': ['Taunusstein'], '08315': ['Breisach'] }

const fehler = []
const warnungen = []

function lies(datei) {
  const text = fs.readFileSync(path.join(DATEN, datei), 'utf8').replace(/^﻿/, '')
  const [kopf, ...zeilen] = text.split(/\r?\n/).filter((z) => z.trim())
  const spalten = kopf.split(';')
  return zeilen.map((z) => {
    const werte = z.split(';')
    if (werte.length !== spalten.length) fehler.push(`${datei}: Zeile mit ${werte.length} statt ${spalten.length} Feldern: ${z}`)
    return Object.fromEntries(spalten.map((s, i) => [s, (werte[i] ?? '').trim()]))
  })
}
const ganz = (s) => (s === '' || s == null ? null : Number.parseInt(s, 10))
// Kaufmännisch auf eine Stelle, auch bei negativen Werten (Math.round rundet −2,35 sonst auf −2,3)
const eins = (x) => (x == null ? null : (Math.sign(x) * Math.round(Math.abs(x) * 10 + 1e-9)) / 10)

// „München, kreisfreie Stadt" → Name, Art, Präpositionalform
function benenne(ags, roh) {
  const [kern, ...zusatz] = roh.split(',').map((s) => s.trim())
  const z = zusatz[0] ?? ''
  if (ags === '02000' || ags === '11000') return { name: kern, art: 'Stadtstaat', typ: 'kreisfrei', im: `in ${kern}` }
  if (z === 'kreisfreie Stadt') return { name: kern, art: 'kreisfreie Stadt', typ: 'kreisfrei', im: `in ${kern}` }
  if (z === 'Stadtkreis') return { name: kern, art: 'Stadtkreis', typ: 'kreisfrei', im: `in ${kern}` }
  let name
  if (z === 'Regionalverband') name = `Regionalverband ${kern}`
  else if (/kreis/i.test(kern) || /^(Region|Städteregion|Landkreis) /.test(kern)) name = kern
  else if (ags.startsWith('05') || ags.startsWith('01')) name = `Kreis ${kern}`
  else if (ags.startsWith('06') && HESSEN_KREIS.has(kern)) name = `Kreis ${kern}`
  else name = `Landkreis ${kern}`
  let im
  if (/^(Region|Städteregion) /.test(name)) im = `in der ${name}`
  else if (/er Kreis$/.test(name)) im = `im ${name.replace(/er Kreis$/, 'en Kreis')}` // Märkischer → im Märkischen Kreis
  else im = `im ${name}`
  let art = 'Landkreis'
  if (name.startsWith('Region ')) art = 'Region'
  else if (z === 'Regionalverband') art = 'Regionalverband'
  else if (name.startsWith('Kreis ') || z === 'Kreis' || (!z && (ags.startsWith('05') || ags.startsWith('01')))) art = 'Kreis'
  return { name, art, typ: 'kreis', im }
}

// Wortstämme ohne Beugungsendung: „Mecklenburgischen Seenplatte" ≙ „Mecklenburgische Seenplatte"
const staemme = (s) => normal(s).split(' ').map((w) => w.replace(/(en|er|n|r|e)$/, ''))

const normal = (s) =>
  s.toLowerCase().replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]+/g, ' ').trim()

// ---------- Daten ----------
const k23 = lies('kreise-2023.csv')
const k19 = Object.fromEntries(lies('kreise-2019-2023.csv').map((z) => [z.kreis_schluessel, z]))
const bund = Object.fromEntries(lies('deutschland.csv').map((z) => [z.jahr, z]))
const orte = lies('orte-kreis.csv')
const jahrAlt = Object.keys(k19[Object.keys(k19)[0]] ?? {}).map((s) => s.match(/^vollstationaer_(\d{4})$/)?.[1]).filter(Boolean).sort()[0]
if (jahrAlt !== '2019') fehler.push(`Zeitreihe beginnt ${jahrAlt}, erwartet 2019 — Texte der Seite prüfen`)

const kreise = k23.map((z) => {
  const ags = z.kreis_schluessel
  const p = ganz(z.pflegebeduerftige)
  const v = ganz(z.vollstationaer)
  const dp = ganz(z.plaetze_dauerpflege)
  const a80 = ganz(z.einwohner_ab_80)
  if (!p || v == null || !dp || !a80) fehler.push(`${ags}: Wert fehlt (p=${p}, v=${v}, dp=${dp}, a80=${a80})`)
  const alt = k19[ags]
  const v19 = alt ? ganz(alt.vollstationaer_2019) : null
  if (alt && ganz(alt.vollstationaer_2023) !== v) fehler.push(`${ags}: vollstationär 2023 in beiden Dateien verschieden`)
  return {
    ags,
    ...benenne(ags, z.kreis),
    land: LAND[ags.slice(0, 2)],
    p, v, dp, a80, v19,
    pg: ganz(z.nur_pflegegeld), amb: ganz(z.ambulant), pg1: ganz(z.pg1_ohne_leistungen),
    zh: eins(((p - v) / p) * 100),
    d: eins((dp / a80) * 100),
    ch: v19 ? eins(((v - v19) / v19) * 100) : null,
  }
})
if (kreise.length !== 400) fehler.push(`${kreise.length} Kreise statt 400`)
if (new Set(kreise.map((k) => k.ags)).size !== kreise.length) fehler.push('Kreisschlüssel doppelt')
for (const k of kreise) if (!k.land) fehler.push(`${k.ags}: Land unbekannt`)

// Bundeszeile gegen die Summe der Kreise
const D23 = bund['2023']
const D19 = bund['2019']
const summe = (f) => kreise.reduce((s, k) => s + k[f], 0)
for (const [feld, spalte] of [['p', 'pflegebeduerftige'], ['v', 'vollstationaer'], ['dp', 'plaetze_dauerpflege'], ['a80', 'einwohner_ab_80']]) {
  const diff = summe(feld) - ganz(D23[spalte])
  if (Math.abs(diff) > 1) fehler.push(`Summe der Kreise ${feld} weicht um ${diff} von der Bundeszeile ab`)
  else if (diff) warnungen.push(`Summe der Kreise ${spalte} 2023: ${summe(feld)}, Bundeszeile ${D23[spalte]} (Differenz ${diff}, Quelle)`)
}
const B = {
  p: ganz(D23.pflegebeduerftige), v: ganz(D23.vollstationaer), dp: ganz(D23.plaetze_dauerpflege), a80: ganz(D23.einwohner_ab_80),
  pg: ganz(D23.nur_pflegegeld), amb: ganz(D23.ambulant), pg1: ganz(D23.pg1_ohne_leistungen),
  v19: ganz(D19.vollstationaer), p19: ganz(D19.pflegebeduerftige), pg1_19: ganz(D19.pg1_ohne_leistungen),
}
const DEUTSCHLAND = {
  ...B,
  zh: eins(((B.p - B.v) / B.p) * 100),
  d: eins((B.dp / B.a80) * 100),
  ch: eins(((B.v - B.v19) / B.v19) * 100),
  // Pflegebedürftige ohne „Pflegegrad 1 ohne Leistungen" (2019 unvollständig erfasst)
  pOhnePg1_19: B.p19 - B.pg1_19,
  pOhnePg1: B.p - B.pg1,
  chOhnePg1: eins((((B.p - B.pg1) - (B.p19 - B.pg1_19)) / (B.p19 - B.pg1_19)) * 100),
}

// Kennzahlen über die Kreise
const median = (xs) => {
  const s = [...xs].sort((a, b) => a - b)
  const m = Math.floor(s.length / 2)
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2
}
const mitAenderung = kreise.filter((k) => k.ch != null)
const roheDichte = (k) => k.dp / k.a80
const nachDichte = [...kreise].sort((a, b) => roheDichte(a) - roheDichte(b))
const KENNZAHLEN = {
  kreise: kreise.length,
  mitAenderung: mitAenderung.length,
  // gezählt an den ungerundeten Werten
  gesunken: kreise.filter((k) => k.v19 && k.v < k.v19).length,
  gestiegen: kreise.filter((k) => k.v19 && k.v > k.v19).length,
  gleich: kreise.filter((k) => k.v19 && k.v === k.v19).length,
  medianD: eins(median(kreise.map((k) => (k.dp / k.a80) * 100))),
  medianZh: eins(median(kreise.map((k) => ((k.p - k.v) / k.p) * 100))),
  medianCh: eins(median(mitAenderung.map((k) => ((k.v - k.v19) / k.v19) * 100))),
  niedrigsteD: nachDichte.slice(0, 3).map((k) => k.ags),
  hoechsteD: nachDichte.slice(-3).reverse().map((k) => k.ags),
}

// ---------- Zuordnung Ortsseite → Kreis ----------
const nachAgs = Object.fromEntries(kreise.map((k) => [k.ags, k]))
const seiten = {}
for (const ordner of fs.readdirSync(path.join(WURZEL, 'app'))) {
  if (!ordner.startsWith('24h-pflege-')) continue
  const datei = path.join(WURZEL, 'app', ordner, 'page.tsx')
  if (!fs.existsSync(datei)) continue
  const src = fs.readFileSync(datei, 'utf8')
  const vorlage = /<OrtSeite\b/.test(src)
  const slug = ordner.replace('24h-pflege-', '')
  const ortFeld = src.match(/\n\s+ort:\s*'((?:[^'\\]|\\.)*)'/)?.[1]
  const kreisFeld = src.match(/\n\s+kreis:\s*'((?:[^'\\]|\\.)*)'/)?.[1]
  // Alte Vorlage: nur Seiten, die in lib/staedte.ts als Ort stehen (z. B. Wittmund)
  seiten[slug] = { vorlage, ort: ortFeld, kreis: vorlage ? kreisFeld : undefined, datei: `app/${ordner}/page.tsx` }
}
const staedte = new Set([...fs.readFileSync(path.join(WURZEL, 'lib/staedte.ts'), 'utf8').matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1]))
const beratung = Object.fromEntries(
  [...fs.readFileSync(path.join(WURZEL, 'lib/orte-beratung.ts'), 'utf8').matchAll(/'([^']+)': \{ kreis: '((?:[^'\\]|\\.)*)', kreisfrei: (true|false)/g)]
    .map((m) => [m[1], { kreis: m[2], kreisfrei: m[3] === 'true' }]),
)

const ORT_KREIS = {}
const ohneKasten = []
const zuordnung = new Set()
for (const o of orte) {
  const s = seiten[o.slug]
  zuordnung.add(o.slug)
  if (!s) { fehler.push(`orte-kreis.csv: ${o.slug} hat keine Seite`); continue }
  if (!s.vorlage && !staedte.has(o.slug)) { fehler.push(`orte-kreis.csv: ${o.slug} ist keine Ortsseite`); continue }
  const rs = o.regionalschluessel_zensus2022
  const agsAusRs = rs.startsWith('11') ? '11000' : rs.startsWith('02') ? '02000' : rs.slice(0, 5)
  if (agsAusRs !== o.kreis_schluessel) fehler.push(`${o.slug}: Kreisschlüssel ${o.kreis_schluessel} passt nicht zum Regionalschlüssel ${rs}`)
  const k = nachAgs[o.kreis_schluessel]
  if (!k) { fehler.push(`${o.slug}: Kreis ${o.kreis_schluessel} nicht in den Daten`); continue }
  if (o.kasten !== 'ja') {
    if (!o.hinweis) fehler.push(`${o.slug}: ohne Kasten, aber ohne Grund`)
    ohneKasten.push(`${o.slug}: ${o.hinweis}`)
    continue
  }
  const b = beratung[o.slug]
  if (b && b.kreisfrei !== (k.typ === 'kreisfrei')) fehler.push(`${o.slug}: kreisfrei laut orte-beratung.ts ${b.kreisfrei}, laut Daten ${k.typ}`)
  // Feld kreis: der Seite (Einzugsgebiet) gegen den Kreis aus den Daten — Kern des Namens ohne Zusätze
  if (s.kreis && k.typ === 'kreis') {
    // „Mühldorf a.Inn" → „Mühldorf", „Neumarkt i.d.OPf." → „Neumarkt": Zusätze der amtlichen Kurzform zählen nicht
    const kern = staemme(k.name.replace(/^(Landkreis|Kreis|Regionalverband) /, '').replace(/ (a|i|d)\b.*$/, ''))
    const seite = new Set(staemme(s.kreis))
    if (!kern.every((w) => seite.has(w)) && !o.hinweis) fehler.push(`${o.slug}: Seite nennt „${s.kreis}", Daten sagen ${k.name} — prüfen oder Hinweis eintragen`)
  }
  if (k.typ === 'kreisfrei' && s.ort && !normal(k.name).includes(normal(s.ort).split(' ')[0]) && !o.hinweis) {
    fehler.push(`${o.slug}: Ort „${s.ort}" ist nicht die kreisfreie Stadt ${k.name} — prüfen oder Hinweis eintragen`)
  }
  ORT_KREIS[o.slug] = o.kreis_schluessel
}
for (const [slug, s] of Object.entries(seiten)) {
  if ((s.vorlage || staedte.has(slug)) && !zuordnung.has(slug)) fehler.push(`Ortsseite ${slug} fehlt in orte-kreis.csv`)
}

// Suchbegriffe: Name, Land, Art, Orte mit Ortsseite im Kreis
const orteJeKreis = {}
for (const o of orte) {
  if (o.kasten !== 'ja') continue
  ;(orteJeKreis[o.kreis_schluessel] ??= []).push(o.ort)
}
for (const k of kreise) {
  // Der Name bleibt vollständig („Baden-Baden" trägt „baden" zweimal, die Suche verlangt das), die übrigen Begriffe nur,
  // wenn sie nicht schon im Namen stehen — sonst träfe „Baden-Baden" auch Wiesbaden mit seiner gleichnamigen Ortsseite
  const imNamen = normal(k.name).split(' ')
  const dazu = normal([k.art, k.land, ...(orteJeKreis[k.ags] ?? []), ...(WEITERE_SUCHBEGRIFFE[k.ags] ?? [])].join(' ')).split(' ')
  k.such = [...imNamen, ...new Set(dazu.filter((w) => !imNamen.includes(w)))].join(' ')
}

if (fehler.length) {
  console.error(`build-pflege-kreise: ${fehler.length} Fehler`)
  fehler.forEach((f) => console.error('  ' + f))
  process.exit(1)
}

// ---------- lib/pflege-kreise.ts ----------
const zeile = (k) =>
  `  { ags: '${k.ags}', name: ${JSON.stringify(k.name)}, im: ${JSON.stringify(k.im)}, typ: '${k.typ}', art: '${k.art}', land: '${k.land}', ` +
  `p: ${k.p}, v: ${k.v}, dp: ${k.dp}, a80: ${k.a80}, v19: ${k.v19 ?? 'null'}, zh: ${k.zh}, d: ${k.d}, ch: ${k.ch ?? 'null'}, such: '${k.such}' },`
const ts = `// lib/pflege-kreise.ts — ERZEUGT von scripts/build-pflege-kreise.mjs, nicht von Hand ändern.
//
// Pflegestatistik je Kreis, Stand Dezember 2023 (Pflegebedürftige 31.12., Einrichtungen 15.12.), Bevölkerung
// 31.12.2023, Vergleich 31.12.2019. Quelle: Regionaldatenbank Deutschland, Tabellen 22411-02-05-4,
// 22411-01-02-4, 12411-09-01-4. © Statistische Ämter des Bundes und der Länder, Datenlizenz Deutschland –
// Namensnennung – Version 2.0. Anteile, Quoten und Veränderungen sind eigene Berechnungen.
// Nur in Server-Bausteinen importieren — die Datei landet sonst im Browser-Paket.

export interface PflegeKreis {
  /** Kreisschlüssel (AGS, fünfstellig) */
  ags: string
  /** Anzeigename: „München", „Landkreis München", „Märkischer Kreis", „Region Hannover" */
  name: string
  /** Für Überschriften: „in München", „im Märkischen Kreis", „in der Region Hannover" */
  im: string
  typ: 'kreisfrei' | 'kreis'
  /** kreisfreie Stadt · Stadtkreis · Stadtstaat · Landkreis · Kreis · Region · Regionalverband */
  art: string
  land: string
  /** Pflegebedürftige insgesamt */
  p: number
  /** davon vollstationär im Pflegeheim (Dauer- und Kurzzeitpflege) */
  v: number
  /** verfügbare Plätze für vollstationäre Dauerpflege */
  dp: number
  /** Einwohner ab 80 Jahre */
  a80: number
  /** vollstationär Versorgte Ende 2019 (Gebietsstand 2023) */
  v19: number | null
  /** zu Hause versorgt (alle außer vollstationär) in Prozent, eine Stelle */
  zh: number
  /** Dauerpflegeplätze je 100 Einwohner ab 80, eine Stelle */
  d: number
  /** Veränderung der vollstationär Versorgten 2019–2023 in Prozent, eine Stelle */
  ch: number | null
  /** Suchbegriffe, kleingeschrieben, Umlaute aufgelöst (inkl. Orte mit Ortsseite im Kreis) */
  such: string
}

export const STAND = {
  sichtbar: 'Dezember 2023',
  vergleich: '${jahrAlt}',
  tabellen: ['22411-02-05-4', '22411-01-02-4', '12411-09-01-4'],
}

/** Bundeswerte aus der Zeile „Deutschland" derselben Tabellen */
export const DEUTSCHLAND = ${JSON.stringify(DEUTSCHLAND, null, 2).replace(/"(\w+)":/g, '$1:')}

// Bewusst ohne „as const": Texte rechnen mit diesen Werten, und mit Literaltypen bräche der Build beim nächsten Datenstand
export const KENNZAHLEN = ${JSON.stringify(KENNZAHLEN, null, 2).replace(/"(\w+)":/g, '$1:').replace(/"/g, "'")}

export const KREISE: PflegeKreis[] = [
${kreise.map(zeile).join('\n')}
]

/** Ortsseite (Slug ohne „24h-pflege-") → Kreisschlüssel; Zuordnung und Prüfung: scripts/daten/pflege-kreise/orte-kreis.csv */
export const ORT_KREIS: Record<string, string> = {
${Object.entries(ORT_KREIS).sort().map(([s, a]) => `  '${s}': '${a}',`).join('\n')}
}

const NACH_AGS = new Map(KREISE.map((k) => [k.ags, k]))

export function kreisNachAgs(ags: string): PflegeKreis | undefined {
  return NACH_AGS.get(ags)
}

/** Der Kreis einer Ortsseite — undefined, wo die Zuordnung offen ist (dann kein Kasten) */
export function kreisFuerOrt(slug: string): PflegeKreis | undefined {
  const ags = ORT_KREIS[slug]
  return ags ? NACH_AGS.get(ags) : undefined
}
`
fs.writeFileSync(ZIEL_TS, ts)

// ---------- CSV zum Herunterladen ----------
const dez = (x, stellen = 1) => (x == null ? '' : x.toFixed(stellen).replace('.', ','))
const csvZeilen = [
  ['Kreisschluessel', 'Kreis', 'Art', 'Bundesland', 'Pflegebeduerftige_2023', 'davon_vollstationaer_2023', 'davon_nur_Pflegegeld_2023',
    'davon_ambulant_2023', 'davon_Pflegegrad1_ohne_Leistungen_2023', 'zu_Hause_versorgt_Prozent', 'Dauerpflegeplaetze_2023',
    'Einwohner_ab_80_2023', 'Dauerpflegeplaetze_je_100_ab_80', 'vollstationaer_2019', 'Veraenderung_vollstationaer_2019_2023_Prozent'],
  ['DG', 'Deutschland', '', '', B.p, B.v, B.pg, B.amb, B.pg1, dez(DEUTSCHLAND.zh), B.dp, B.a80, dez(DEUTSCHLAND.d), B.v19, dez(DEUTSCHLAND.ch)],
  ...kreise.map((k) => [k.ags, k.name, k.art, k.land, k.p, k.v, k.pg ?? '', k.amb ?? '', k.pg1 ?? '', dez(k.zh), k.dp, k.a80, dez(k.d), k.v19 ?? '', dez(k.ch)]),
]
const csv =
  '﻿' +
  csvZeilen.map((z) => z.join(';')).join('\r\n') +
  '\r\n\r\n' +
  '# Quelle: Statistische Ämter des Bundes und der Länder, Regionaldatenbank Deutschland, Tabellen 22411-02-05-4, 22411-01-02-4, 12411-09-01-4 (https://www.regionalstatistik.de). Datenlizenz Deutschland – Namensnennung – Version 2.0 (https://www.govdata.de/dl-de/by-2-0).\r\n' +
  '# Bearbeitung: Primundus (https://primundus.de/pflege-im-kreis). Anteile, Plätze je 100 Einwohner ab 80 und Veränderungen berechnet. Stand der Daten: Dezember 2023, Vergleich Dezember 2019 (Eisenach 2019 dem Wartburgkreis zugerechnet). Leere Zellen: in der Quelle gesperrt.\r\n'
fs.mkdirSync(path.dirname(ZIEL_CSV), { recursive: true })
fs.writeFileSync(ZIEL_CSV, csv)

// ---------- Bericht ----------
console.log(`build-pflege-kreise ✓ — ${kreise.length} Kreise → ${path.relative(WURZEL, ZIEL_TS)}, ${path.relative(WURZEL, ZIEL_CSV)}`)
console.log(`  Deutschland: ${B.p} Pflegebedürftige, zu Hause ${DEUTSCHLAND.zh} %, ${DEUTSCHLAND.d} Dauerpflegeplätze je 100 ab 80, vollstationär ${B.v19} → ${B.v} (${DEUTSCHLAND.ch} %)`)
console.log(`  ohne PG-1-Gruppe: ${DEUTSCHLAND.pOhnePg1_19} → ${DEUTSCHLAND.pOhnePg1} (${DEUTSCHLAND.chOhnePg1} %)`)
console.log(`  Kreise: vollstationär gesunken ${KENNZAHLEN.gesunken}, gestiegen ${KENNZAHLEN.gestiegen}, gleich ${KENNZAHLEN.gleich} (von ${KENNZAHLEN.mitAenderung}); Median Dichte ${KENNZAHLEN.medianD}`)
console.log(`  Ortsseiten mit Kasten: ${Object.keys(ORT_KREIS).length}, ohne: ${ohneKasten.length}`)
ohneKasten.forEach((z) => console.log('    ohne Kasten — ' + z))
warnungen.forEach((w) => console.log('  Hinweis: ' + w))
