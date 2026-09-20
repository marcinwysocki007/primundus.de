#!/usr/bin/env node
// test-begutachtung.mjs — prüft lib/begutachtung.ts gegen Anlage 1 und 2 zu § 15 SGB XI.
// Übersetzt die Datei mit tsc nach .next/cache und rechnet Beispiele durch. Aufruf: node scripts/test-begutachtung.mjs
import { execSync } from 'node:child_process'
import path from 'node:path'
import fs from 'node:fs'
import { createRequire } from 'node:module'

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..')
const OUT = path.join(ROOT, '.next', 'cache', 'begutachtung-test')
fs.mkdirSync(OUT, { recursive: true })
execSync(`npx tsc lib/begutachtung.ts --outDir ${OUT} --module commonjs --target es2020 --skipLibCheck`, { cwd: ROOT, stdio: 'inherit' })
const B = createRequire(import.meta.url)(path.join(OUT, 'begutachtung.js'))

let fehler = 0
function gleich(name, ist, soll) {
  const ok = JSON.stringify(ist) === JSON.stringify(soll)
  if (!ok) fehler += 1
  console.log(`${ok ? '✓' : '✗'} ${name}: ${JSON.stringify(ist)}${ok ? '' : ' — erwartet ' + JSON.stringify(soll)}`)
}

// Anlage 2: Punktbereiche je Modul (untere Grenzen 0 / 2 / 4 / 6 / 10 usw.)
gleich('Modul 1: 1 Punkt → 0', B.gewichtetePunkte(1, B.GEWICHTET.modul1), 0)
gleich('Modul 1: 2 Punkte → 2,5', B.gewichtetePunkte(2, B.GEWICHTET.modul1), 2.5)
gleich('Modul 1: 9 Punkte → 7,5', B.gewichtetePunkte(9, B.GEWICHTET.modul1), 7.5)
gleich('Modul 1: 10 Punkte → 10', B.gewichtetePunkte(10, B.GEWICHTET.modul1), 10)
gleich('Modul 2: 16 → 11,25', B.gewichtetePunkte(16, B.GEWICHTET.modul2), 11.25)
gleich('Modul 2: 17 → 15', B.gewichtetePunkte(17, B.GEWICHTET.modul2), 15)
gleich('Modul 3: 1 → 3,75', B.gewichtetePunkte(1, B.GEWICHTET.modul3), 3.75)
gleich('Modul 3: 7 → 15', B.gewichtetePunkte(7, B.GEWICHTET.modul3), 15)
gleich('Modul 4: 2 → 0', B.gewichtetePunkte(2, B.GEWICHTET.modul4), 0)
gleich('Modul 4: 3 → 10', B.gewichtetePunkte(3, B.GEWICHTET.modul4), 10)
gleich('Modul 4: 18 → 20', B.gewichtetePunkte(18, B.GEWICHTET.modul4), 20)
gleich('Modul 4: 36 → 30', B.gewichtetePunkte(36, B.GEWICHTET.modul4), 30)
gleich('Modul 4: 37 → 40', B.gewichtetePunkte(37, B.GEWICHTET.modul4), 40)
gleich('Modul 5: 1 → 5', B.gewichtetePunkte(1, B.GEWICHTET.modul5), 5)
gleich('Modul 5: 3 → 10', B.gewichtetePunkte(3, B.GEWICHTET.modul5), 10)
gleich('Modul 5: 5 → 15', B.gewichtetePunkte(5, B.GEWICHTET.modul5), 15)
gleich('Modul 5: 6 → 20', B.gewichtetePunkte(6, B.GEWICHTET.modul5), 20)
gleich('Modul 6: 3 → 3,75', B.gewichtetePunkte(3, B.GEWICHTET.modul6), 3.75)
gleich('Modul 6: 12 → 15', B.gewichtetePunkte(12, B.GEWICHTET.modul6), 15)

// Modul 5: Häufigkeiten (Beispiel aus Anlage 1: 3× täglich Medikamente + 1× Blutzucker = 4 pro Tag → 2 Punkte)
gleich('5.1–5.7: 3× täglich + 1× täglich → 2', B.punkteTeil1([{ einheit: 'tag', anzahl: 3 }, { einheit: 'tag', anzahl: 1 }]), 2)
gleich('5.1–5.7: 1× täglich → 1', B.punkteTeil1([{ einheit: 'tag', anzahl: 1 }]), 1)
gleich('5.1–5.7: 6× wöchentlich (0,86/Tag) → 0', B.punkteTeil1([{ einheit: 'woche', anzahl: 6 }]), 0)
gleich('5.1–5.7: 7× wöchentlich (1/Tag) → 1', B.punkteTeil1([{ einheit: 'woche', anzahl: 7 }]), 1)
gleich('5.1–5.7: 9× täglich → 3', B.punkteTeil1([{ einheit: 'tag', anzahl: 9 }]), 3)
gleich('5.8–5.11: 1× wöchentlich → 1', B.punkteTeil2([{ einheit: 'woche', anzahl: 1 }]), 1)
gleich('5.8–5.11: 2× monatlich (0,07/Tag) → 0', B.punkteTeil2([{ einheit: 'monat', anzahl: 2 }]), 0)
gleich('5.8–5.11: 1× täglich → 2', B.punkteTeil2([{ einheit: 'tag', anzahl: 1 }]), 2)
gleich('5.8–5.11: 3× täglich → 3', B.punkteTeil2([{ einheit: 'tag', anzahl: 3 }]), 3)
gleich('5.12 täglich → 60 → 6 Punkte', B.punkteTeil3([{ h: { einheit: 'tag', anzahl: 1 }, taeglich: 60, woche: 8.6, monat: 2 }]).punkte, 6)
gleich('5.13 1× wöchentlich → 4,3 → 1 Punkt', B.punkteTeil3([{ h: { einheit: 'woche', anzahl: 1 }, taeglich: null, woche: 4.3, monat: 1 }]).punkte, 1)
gleich('5.13 2× monatlich → 2 → 0 Punkte', B.punkteTeil3([{ h: { einheit: 'monat', anzahl: 2 }, taeglich: null, woche: 4.3, monat: 1 }]).punkte, 0)
gleich('5.15 2× wöchentlich → 17,2 → 3 Punkte', B.punkteTeil3([{ h: { einheit: 'woche', anzahl: 2 }, taeglich: null, woche: 8.6, monat: 2 }]).punkte, 3)

// Pflegegrade nach § 15 Abs. 3 und Abs. 7
gleich('12,4 Punkte → kein Pflegegrad', B.pflegegrad(12.4, 'erwachsen'), 0)
gleich('12,5 → PG 1', B.pflegegrad(12.5, 'erwachsen'), 1)
gleich('27 → PG 2', B.pflegegrad(27, 'erwachsen'), 2)
gleich('47,5 → PG 3', B.pflegegrad(47.5, 'erwachsen'), 3)
gleich('70 → PG 4', B.pflegegrad(70, 'erwachsen'), 4)
gleich('90 → PG 5', B.pflegegrad(90, 'erwachsen'), 5)
gleich('Kind bis 18 Monate: 12,5 → PG 2', B.pflegegrad(12.5, 'saeugling'), 2)
gleich('Kind bis 18 Monate: 70 → PG 5', B.pflegegrad(70, 'saeugling'), 5)

// Ganze Rechnung: leer → 0 Punkte, kein Pflegegrad
const leer = B.leereAntworten('erwachsen')
gleich('leer → 0 Punkte', B.berechnen(leer).gesamt, 0)

// Beispiel Demenz: Modul 2 überall „in geringem Maße" (22 Punkte → 15), Modul 3 nächtliche Unruhe täglich + Abwehr häufig (8 → 15),
// Modul 4: Waschen/Ankleiden überwiegend unselbständig (4.1–4.6 je 2 = 12, 4.7 = 2, Essen 3, Trinken 2, Toilette 2 → 21 → 30),
// Modul 5: Medikamente 2× täglich (Teil 1 → 1), Arztbesuch 1× monatlich (1 → 0) → Summe 1 → 5, Modul 6 alle 2 (12 → 15).
// Mobilität selbständig (0). Gesamt = 0 + 15 + 30 + 5 + 15 = 65 → Pflegegrad 3, 5 Punkte bis Pflegegrad 4.
const demenz = B.leereAntworten('erwachsen')
demenz.m2 = demenz.m2.map(() => 2)
demenz.m3[1] = 3
demenz.m3[7] = 2
demenz.m4 = [2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 0, 0]
demenz.m5teil1[0] = { einheit: 'tag', anzahl: 2 }
demenz.m5teil3[1] = { einheit: 'monat', anzahl: 1 }
demenz.m6 = demenz.m6.map(() => 2)
const e = B.berechnen(demenz)
gleich('Demenz-Beispiel: Modul 2 Summe', e.module.m2.summe, 22)
gleich('Demenz-Beispiel: Modul 3 Summe', e.module.m3.summe, 8)
gleich('Demenz-Beispiel: Modul 4 Summe', e.module.m4.summe, 21)
gleich('Demenz-Beispiel: Modul 5 Summe', e.module.m5.summe, 1)
gleich('Demenz-Beispiel: gesamt 65', e.gesamt, 65)
gleich('Demenz-Beispiel: Pflegegrad 3', e.pflegegrad, 3)
gleich('Demenz-Beispiel: 5 Punkte bis Pflegegrad 4', e.bisNaechster, 5)

// Inkontinenz: 4.11/4.12 zählen nur mit Feststellung
const ink = B.leereAntworten('erwachsen')
ink.m4[10] = 3
ink.m4[11] = 3
gleich('4.11/4.12 ohne Inkontinenz-Feststellung → 0', B.berechnen(ink).module.m4.summe, 0)
ink.inkontinenz = true
gleich('4.11/4.12 mit Feststellung → 6', B.berechnen(ink).module.m4.summe, 6)

// Sonde: teilweise 6, vollständig 3
const sonde = B.leereAntworten('erwachsen')
sonde.sonde = 1
gleich('4.13 teilweise → 6', B.berechnen(sonde).module.m4.summe, 6)
sonde.sonde = 2
gleich('4.13 vollständig → 3', B.berechnen(sonde).module.m4.summe, 3)

// Kind bis 18 Monate: 4.K 20 Punkte → Modul 4 = 30 gewichtet; 30 Punkte → PG 3 (statt 2)
const kind = B.leereAntworten('saeugling')
kind.kindNahrung = true
const ke = B.berechnen(kind)
gleich('Kind: 4.K → Modul 4 Summe 20', ke.module.m4.summe, 20)
gleich('Kind: 30 gewichtete Punkte → Pflegegrad 3', [ke.gesamt, ke.pflegegrad], [30, 3])

// Besondere Bedarfskonstellation → Pflegegrad 5
const bk = B.leereAntworten('erwachsen')
bk.bedarfskonstellation = true
gleich('Bedarfskonstellation → PG 5', B.berechnen(bk).pflegegrad, 5)

// Höchstwerte: alles unselbständig → 100 Punkte, PG 5
const max = B.leereAntworten('erwachsen')
max.m1 = max.m1.map(() => 3); max.m2 = max.m2.map(() => 3); max.m3 = max.m3.map(() => 3)
max.m4 = max.m4.map(() => 3); max.inkontinenz = true; max.sonde = 1
max.m5teil1 = max.m5teil1.map(() => ({ einheit: 'tag', anzahl: 2 })); max.m5teil2 = max.m5teil2.map(() => ({ einheit: 'tag', anzahl: 1 }))
max.m5teil3[0] = { einheit: 'tag', anzahl: 1 }; max.m5diaet = 3; max.m6 = max.m6.map(() => 3)
const me = B.berechnen(max)
gleich('Maximum: Modul 4 Summe 54', me.module.m4.summe, 54)
gleich('Maximum: Modul 5 Summe 15', me.module.m5.summe, 15)
gleich('Maximum: 100 Punkte, PG 5', [me.gesamt, me.pflegegrad], [100, 5])

console.log(fehler ? `\n${fehler} Fehler` : '\nAlle Prüfungen bestanden')
process.exit(fehler ? 1 : 0)
