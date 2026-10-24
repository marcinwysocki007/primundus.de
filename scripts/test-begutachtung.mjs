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

// ── Kinder bis 18 Monate (Begutachtungs-Richtlinien des MD Bund vom 26.08.2026, in Kraft seit 01.10.2026, Kap. 6 und 6.6.1):
// Es zählen nur Modul 3, Modul 5, die Frage 4.K und die besondere Bedarfskonstellation. Module 1, 2 und 6 „entfallen bei Kindern im
// Alter bis zu 18 Monaten“, weil jedes Kind in diesem Alter dort unselbständig ist. Fehler bis 02.10.2026: Der Rechner zählte sie mit.
// Ein gesunder Säugling, bei dem die Eltern Mobilität, Kognition und Alltag wahrheitsgemäß als unselbständig angeben, hat keinen Pflegegrad.
const baby = B.leereAntworten('saeugling')
baby.m1 = baby.m1.map(() => 3); baby.m2 = baby.m2.map(() => 3); baby.m6 = baby.m6.map(() => 3)
const be = B.berechnen(baby)
gleich('Säugling: Modul 1, 2 und 6 entfallen → 0 Punkte, kein Pflegegrad', [be.module.m1.summe, be.module.m2.summe, be.module.m6.summe, be.gesamt, be.pflegegrad], [0, 0, 0, 0, 0])
// Höchstwert bis 18 Monate: 15 (Modul 3) + 30 (4.K, 20 Einzelpunkte) + 20 (Modul 5) = 65 → Pflegegrad 4; Pflegegrad 5 nur über die Bedarfskonstellation
const babyMax = B.leereAntworten('saeugling')
babyMax.m3 = babyMax.m3.map(() => 3); babyMax.kindNahrung = true
babyMax.m5teil1 = babyMax.m5teil1.map(() => ({ einheit: 'tag', anzahl: 2 })); babyMax.m5teil3[0] = { einheit: 'tag', anzahl: 1 }; babyMax.m5diaet = 3
const bm = B.berechnen(babyMax)
gleich('Säugling: Höchstwert 65 Punkte → Pflegegrad 4, kein unerreichbares „fehlen bis Pflegegrad 5“', [bm.gesamt, bm.pflegegrad, bm.bisNaechster], [65, 4, null])
babyMax.bedarfskonstellation = true
gleich('Säugling mit Bedarfskonstellation → Pflegegrad 5 (BRi Kap. 6.6.1)', B.berechnen(babyMax).pflegegrad, 5)

// ── Kinder ab 18 Monate bis unter 11 Jahre: Punkte nur für den Abstand zur Stufe eines gesund entwickelten Kindes gleichen Alters
// (§ 15 Abs. 6 SGB XI; BRi Kap. 6, „Tabelle zur Berechnungssystematik“ und Alterstabellen zu Modul 1, 2, 4 und 6). Die Beispiele
// stehen wörtlich in den Richtlinien. Fehler bis 02.10.2026: Der Rechner zählte die volle Stufe und überließ den Vergleich den Eltern.
// Gegenprobe zur Tabelle: BRi Kap. 6.6.1 listet, was erst ab einem bestimmten Alter bewertet wird (ab 2 Jahren 4.1, 4.3, 4.7;
// ab 2½ Jahren 2.3, 2.8, 6.1, 6.4; ab 3½ Jahren 4.4; ab 4 Jahren 2.7; ab 5 Jahren 4.11, 4.12). Alles andere ab 18 Monaten.
const SPAETER = { '4.1': 24, '4.3': 24, '4.7': 24, '2.3': 30, '2.8': 30, '6.1': 30, '6.4': 30, '4.4': 42, '2.7': 48, '4.11': 60, '4.12': 60 }
const abweichend = Object.entries(B.ALTER_KIND).filter(([nr, g]) => g[0] !== (SPAETER[nr] ?? g[0]) || (!SPAETER[nr] && g[0] > 18) || g[0] > g[1] || g[1] > g[2])
gleich('Alterstabelle: 34 Kriterien, erste Bewertung wie in BRi Kap. 6.6.1, Grenzen aufsteigend', [Object.keys(B.ALTER_KIND).length, abweichend.map(([nr]) => nr)], [34, []])
gleich('Alterstabelle: Essen mit 24 Monaten → gleichaltrige Kinder überwiegend selbständig (Stufe 1)', B.altersstufe('4.8', 24), 1)
gleich('Alterstabelle: An- und Auskleiden Oberkörper mit 36 Monaten → überwiegend unselbständig (Stufe 2)', B.altersstufe('4.5', 36), 2)
gleich('Alterstabelle: Zeitliche Orientierung mit 29 Monaten → noch nicht vorhanden (Stufe 3, keine Bewertung)', B.altersstufe('2.3', 29), 3)
gleich('Alterstabelle: Ruhen und Schlafen mit 131 Monaten → überwiegend selbständig; mit 11 Jahren selbständig', [B.altersstufe('6.2', 131), B.altersstufe('6.2', 132)], [1, 0])
const kindAlt = (monate) => { const k = B.leereAntworten('kind'); k.alterMonate = monate; return k }
const k1 = kindAlt(24); k1.m4[7] = 3
gleich('BRi-Beispiel: Essen unselbständig, Gleichaltrige überwiegend selbständig → 6 Punkte (Dreifachwertung)', B.berechnen(k1).module.m4.summe, 6)
const k2 = kindAlt(72); k2.m4[9] = 2
gleich('BRi-Beispiel: Toilette überwiegend unselbständig, Gleichaltrige selbständig → 4 Punkte (Doppelwertung)', B.berechnen(k2).module.m4.summe, 4)
const k3 = kindAlt(36); k3.m4[4] = 2
gleich('BRi-Beispiel: überwiegend unselbständig wie Gleichaltrige → 0 Punkte', B.berechnen(k3).module.m4.summe, 0)
const k4 = kindAlt(24); k4.m2[1] = 2
gleich('BRi-Beispiel: Fähigkeit in geringem Maße, Gleichaltrige größtenteils → 1 Punkt', B.berechnen(k4).module.m2.summe, 1)
const k5 = kindAlt(24); k5.m1[4] = 3
gleich('BRi-Beispiel: unselbständig, Gleichaltrige überwiegend selbständig → 2 Punkte', B.berechnen(k5).module.m1.summe, 2)
const k6 = kindAlt(48); k6.inkontinenz = true; k6.m4[10] = 3; k6.m4[11] = 3
gleich('Kind 4 Jahre: Folgen der Inkontinenz (4.11/4.12) werden erst ab 5 Jahren bewertet → 0', B.berechnen(k6).module.m4.summe, 0)
k6.alterMonate = 60
gleich('Kind 5 Jahre: 4.11/4.12 wie bei Erwachsenen → 6', B.berechnen(k6).module.m4.summe, 6)
const k7 = kindAlt(30); k7.m3[1] = 3; k7.m5teil1[0] = { einheit: 'tag', anzahl: 2 }
gleich('Kind: Modul 3 und 5 sind altersunabhängig (wie Erwachsene)', [B.berechnen(k7).module.m3.summe, B.berechnen(k7).module.m5.summe], [5, 1])
gleich('Kriterium wird bewertet? Säugling Modul 1 nein, Modul 3 ja; Kind 29 Monate 2.3 nein, 2.2 ja', [B.wirdBewertet('1.1', 'saeugling', null), B.wirdBewertet('3.1', 'saeugling', null), B.wirdBewertet('2.3', 'kind', 29), B.wirdBewertet('2.2', 'kind', 29)], [false, true, false, true])
// Gleiches Kind, alles „unselbständig“: mit 3 Jahren zählt nur der Abstand, mit 11 Jahren die volle Stufe wie bei Erwachsenen
const k8 = kindAlt(36)
k8.m1 = k8.m1.map(() => 3); k8.m2 = k8.m2.map(() => 3); k8.m4 = k8.m4.map(() => 3); k8.m6 = k8.m6.map(() => 3)
const k8a = B.berechnen(k8)
k8.alterMonate = 132
const k8b = B.berechnen(k8)
gleich('Kind 3 Jahre, alles unselbständig: Abstand statt voller Stufe (Modul 1/2/4/6 = 15/21/23/11)', [k8a.module.m1.summe, k8a.module.m2.summe, k8a.module.m4.summe, k8a.module.m6.summe], [15, 21, 23, 11])
gleich('Kind 11 Jahre, alles unselbständig: volle Stufe wie Erwachsene (15/33/42/18)', [k8b.module.m1.summe, k8b.module.m2.summe, k8b.module.m4.summe, k8b.module.m6.summe], [15, 33, 42, 18])

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
