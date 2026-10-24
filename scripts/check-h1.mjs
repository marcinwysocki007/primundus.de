#!/usr/bin/env node
// check-h1.mjs — prüft die H1 jeder gebauten Seite gegen ihren Titel (16.10.2026).
//
// Warum es das gibt: Am 15.10. bekamen 208 Seiten neue Titel und Beschreibungen, die H1 blieb, wie sie war:
// „24h-Pflege Sachsen — Betreuungskraft zuhause“ auf 13 Länderseiten, „Demenz: zu Hause pflegen …“ unter dem neuen
// Titel „Demenzbetreuung zu Hause …“, „Herzinsuffizienz Pflege zuhause — was möglich ist“ unter „Pflegegrad bei
// Herzinsuffizienz …“. Martin am 16.10.: „es kann nicht sein, dass du grundlegende dinge wie keywords in der h1 und
// somit auch wichtige erklärung für nutzer nicht auf den seiten hattest.“ Titel und H1 gehören zusammen; dieser
// Wächter merkt, wenn sie auseinanderlaufen.
//
// GEPRÜFT WIRD JE SEITE (aus dem gebauten HTML, .next/server/app/<seite>.html, das `npm run verify` vorher erzeugt)
//   1. genau eine H1
//   2. kein „24h“ in der H1 (der Hauptbegriff heißt „24-Stunden-Pflege“)
//   3. kein Gedankenstrich als Trenner (Doppelpunkt; RatgeberKopf teilt die H1 am Handy am ersten Doppelpunkt)
//   4. der Kern des Titels (bis zum ersten „:“, „|“ oder „?“) steht in der H1: mindestens 60 % seiner Wörter, ohne
//      Füllwörter, Umlaute und Endungen angeglichen, „24h“ gleich „24 Stunden“
//
// GRUNDLINIE wie check-snippets: Bekanntes wird gezählt, NEUES lässt den Build scheitern
// (scripts/daten/h1-grundlinie.json). Ohne Build meldet der Wächter alle Seiten als ungeprüft.
//
// Aufruf:  node scripts/check-h1.mjs
//          node scripts/check-h1.mjs --grundlinie-neu      (nach einer Aufräumrunde)
//          node scripts/check-h1.mjs --gebaut <ordner>     (anderer Build, etwa ein zweiter Arbeitsbaum)
import fs from 'node:fs'
import path from 'node:path'

const WURZEL = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..')
const APP = path.join(WURZEL, 'app')
const i = process.argv.indexOf('--gebaut')
const GEBAUT = i > 0 ? process.argv[i + 1] : path.join(WURZEL, '.next/server/app')
const GRUNDLINIE = path.join(WURZEL, 'scripts/daten/h1-grundlinie.json')

const FUELL = new Set('in im am an auf aus bei bis der die das den dem des ein eine einen einer eines und oder fuer fur von vom zu zum zur mit nach ab als was wie wo wer welche welcher welches ist sind kann man es gibt sie ihr ihre ihren vs bzw so wenn dann um uber unter pro je primundus'.split(' '))

function text(html) {
  return html.replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'")
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;| /g, ' ').replace(/\s+/g, ' ').trim()
}
function woerter(s) {
  let t = s.toLowerCase().replace(/ß/g, 'ss').replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/ü/g, 'u')
  t = t.replace(/24\s*-?\s*h(?=\b|-)/g, '24 stunden').replace(/zu\s+hause/g, 'zuhause')
  return t.replace(/[^a-z0-9]+/g, ' ').trim().split(' ').filter(Boolean)
}
function stamm(w) {
  for (const s of ['innen', 'ungen', 'ern', 'en', 'er', 'es', 'e', 'n', 's']) if (w.length - s.length >= 4 && w.endsWith(s)) return w.slice(0, -s.length)
  return w
}
const kern = (w) => w.filter((x) => !FUELL.has(x) && (!/^\d+$/.test(x) || x === '24')).map(stamm)

const seiten = []
for (const d of fs.readdirSync(APP, { withFileTypes: true })) {
  if (!d.isDirectory() || d.name.startsWith('[') || d.name.startsWith('(') || d.name.startsWith('_')) continue
  if (fs.existsSync(path.join(APP, d.name, 'page.tsx'))) seiten.push(d.name)
}
seiten.push('index')

const befunde = new Set()
const ungeprueft = []
let geprueft = 0
for (const name of seiten) {
  const datei = path.join(GEBAUT, name + '.html')
  if (!fs.existsSync(datei)) { ungeprueft.push(name); continue }
  const html = fs.readFileSync(datei, 'utf8')
  if (/<meta name="robots" content="[^"]*noindex/.test(html)) continue
  if (html.includes('NEXT_REDIRECT')) continue // Weiterleitungsseiten (/kostenrechner u. a.) haben keine H1
  geprueft++
  const slug = name === 'index' ? '/' : '/' + name
  const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => text(m[1]))
  const titel = text((html.match(/<title>([^<]*)<\/title>/) || [, ''])[1])
  if (h1s.length !== 1) { befunde.add(`${slug}  ${h1s.length} H1 statt einer`); continue }
  const h1 = h1s[0]
  if (/\b24h\b|24h-/i.test(h1)) befunde.add(`${slug}  H1 mit „24h“: „${h1}“`)
  if (/\s[—–]\s/.test(h1)) befunde.add(`${slug}  H1 mit Gedankenstrich: „${h1}“`)
  const kernTitel = kern(woerter(titel.split(/\?\s|\s[|:—–-]\s|:\s/)[0]))
  const h1Woerter = new Set(kern(woerter(h1)))
  const h1Zusammen = woerter(h1).join('')
  const fehlt = kernTitel.filter((w) => !h1Woerter.has(w) && !h1Zusammen.includes(w))
  if (kernTitel.length && fehlt.length / kernTitel.length > 0.4) befunde.add(`${slug}  Titel-Kern fehlt in der H1 (${fehlt.join(', ')}): Titel „${titel}“ · H1 „${h1}“`)
}

const jetzt = [...befunde].sort()
if (process.argv.includes('--grundlinie-neu')) {
  fs.writeFileSync(GRUNDLINIE, JSON.stringify(jetzt, null, 1) + '\n')
  console.log(`check-h1: Grundlinie neu geschrieben — ${jetzt.length} bekannte Befunde`)
  process.exit(0)
}
if (!geprueft) {
  console.log(`check-h1: kein Build unter ${path.relative(WURZEL, GEBAUT) || GEBAUT}, ${ungeprueft.length} Seiten ungeprüft (erst npm run build)`)
  process.exit(0)
}
const bekannt = fs.existsSync(GRUNDLINIE) ? new Set(JSON.parse(fs.readFileSync(GRUNDLINIE, 'utf8'))) : new Set()
const neuDazu = jetzt.filter((f) => !bekannt.has(f))
const behoben = [...bekannt].filter((f) => !befunde.has(f))
console.log(`check-h1: ${geprueft} Seiten · ${jetzt.length} Befunde · Grundlinie ${bekannt.size} · neu ${neuDazu.length} · behoben ${behoben.length}`)
if (neuDazu.length) {
  for (const f of neuDazu) console.log('  ✗ NEU: ' + f)
  console.log(`\ncheck-h1 FEHLER: ${neuDazu.length} neue Befunde.`)
  console.log('Regeln: genau eine H1 · kein „24h“ · kein Gedankenstrich · der Kern des Titels steht in der H1.')
  process.exit(1)
}
if (behoben.length) console.log(`  ${behoben.length} Altlasten behoben — bei Gelegenheit --grundlinie-neu ausführen.`)
console.log('check-h1 ✓ — keine neuen Befunde')
