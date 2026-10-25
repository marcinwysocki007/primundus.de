#!/usr/bin/env node
// check-fakten.mjs — Stolperdraht gegen veraltete/falsche Beträge und Widersprüche im QUELLCODE.
// Verifizierte Soll-Werte (Stand 21.08.2026, Quellen: §37/§36/§45b/§42a SGB XI, BMG):
//   Pflegegeld 347/599/800/990 · Sachleistungen 796/1.497/1.859/2.299 · Entlastungsbetrag 131 · Budget 3.539
// --warn-only: meldet Funde, bricht aber nicht ab (Übergangsmodus bis Batch B6 die Altwerte entfernt).
import fs from 'node:fs'
import path from 'node:path'

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..')
const WARN_ONLY = process.argv.includes('--warn-only')

// Muster: [Beschreibung, Regex, erlaubte Dateien (Regex) — z. B. dieser Check selbst]
const STALE = [
  // Pflegegeld seit 01.01.2025, § 37 Abs. 1 SGB XI: 347 / 599 / 800 / 990 €. Alle vier alten Werte
  // gesperrt (Martin 21.09.: „die Pflegegeld-Beträge müssen natürlich aktuell sein und überall
  // gleich"); geprüft am 21.09.2026: 1.026 Angaben im Bestand, null Abweichungen.
  ['Pflegegeld PG2 alt (332 €, 2024)', /332\s*€/g],
  ['Pflegegeld PG3 alt (573 €, 2024)', /573\s*€/g],
  ['Pflegegeld PG4 alt (765 €, 2024)', /765\s*€/g],
  ['Pflegegeld PG5 alt (947 €, 2024)', /947\s*€/g],
  ['Verhinderungspflege alt (1.612 €)', /1\.612\s*€/g],
  ['Verhinderungspflege alt (1.774 € Kurzzeit)', /1\.774\s*€/g],
  ['Verhinderungspflege alt (3.224 €)', /3\.224\s*€/g],
  ['Falsche Preisspanne (2.500–4.500)', /2\.500\s*(?:und|bis|–|-)\s*4\.500/g],
  ['Entlastungsbetrag alt (125 €)', /125\s*€\s*(?:monatlich|pro Monat|\/\s*Monat)/g],
  // Preis aus dem Kostenrechner: ab 2.150 € (Martin 17.09.2026), keine Spanne. Werkzeuge mit eigener Rechnung
  // (Pflegeheim-Kostenvergleich, Zuschuss-Rechner) folgen mit ihrer Seitenart.
  ['Alte Preisspanne (2.200–3.500)', /2\.200\s*(?:€\s*)?(?:und|bis|–|-)\s*3\.500/g],
  ['Alter Einstiegspreis (ab 2.200 €/Monat)', /\b[Aa]b\s+(?:ca\.\s+)?2\.200\s*(?:€\s*\/\s*Mo|Euro|€\s+gegenüber)/g],
  // Bayerisches Landespflegegeld seit Pflegegeldjahr 2026: 500 € (LfP Bayern).
  // Zeilenumbrüche sind erlaubt, weil der alte Wert am 20.09. auf 51 Ortsseiten stand, wo das Wort in der
  // Kasten-Überschrift und die Zahl im Text darunter steht — mit [^.\n(] rutschte das durch. „(" beendet die
  // Suche weiterhin, damit der historische Hinweis „(bis 2025: 1.000 €)" erlaubt bleibt.
  ['Landespflegegeld Bayern alt (1.000 €)', /Landespflegegeld[^.(]{0,120}1\.000\s*(?:€|Euro)/g],
  ['Eigenanteil mit Entlastungsbetrag gerechnet', /(?:Pflegegeld|Pflegegeld\s+und),?\s+Entlastungsbetrag\s+und\s+(?:Entlastungsbudget|Verhinderungspflege)/g],
  // Herkunft der eigenen Betreuungskräfte (Martin 19.09.2026): derzeit nur Polen — nicht „nur" schreiben,
  // aber auch keine anderen Länder als unsere Kräfte ausgeben. Am 20.09. stand die Aufzählung noch auf
  // 207 Ortsseiten. Die Ratgeber /pflegekraft-aus-rumaenien und /pflegekraft-aus-bulgarien bleiben erlaubt:
  // Diese Regel trifft nur die Aufzählung, mit der wir eigene Kräfte beschreiben. Seit 13.10.2026 auch im Code
  // ausgenommen: Die neutrale Rumänien-Seite beschreibt den Markt („Entsandte Kräfte, auch aus Rumänien, kosten
  // laut Verbraucherzentrale …“), nicht unsere Kräfte.
  ['Herkunft aufgezählt (nur Polen)', /(?:einige|überwiegend|teils|auch)\s+aus\s+(?:Rumänien|Bulgarien)/g,
    { ohneDateien: [path.join('app', 'pflegekraft-aus-rumaenien', 'page.tsx'), path.join('app', 'pflegekraft-aus-bulgarien', 'page.tsx')] }],
  // Betreuungsrecht seit 01.01.2023 neu nummeriert (Reform des Vormundschafts- und Betreuungsrechts). Am 02.10.2026
  // nannte das Dokument des Vollmacht-Generators noch „§ 1906 BGB“ (heute § 1831). Gesperrt sind die aufgehobenen
  // Fassungen: § 1896 (heute § 1814), § 1901a (§ 1827), § 1904 (§ 1829), § 1906 (§ 1831), § 1906a (§ 1832).
  ['Betreuungsrecht alt (§ 1896/1901a/1904/1906/1906a BGB)', /§\s*(?:1896|1901\s*a|1904|1906\s*a?)\b[^.\n]{0,20}BGB/g],
  // Pflegegeld im Krankenhaus: seit 01.01.2026 acht Wochen (§ 34 Abs. 2 SGB XI), vorher vier. Am 02.10.2026 stand die
  // alte Regel noch dreimal auf /24-stunden-pflege-krankenhausaufenthalt. Erlaubt bleibt der Rückblick „waren es vier Wochen“.
  ['Pflegegeld im Krankenhaus alt (vier Wochen)', /(?:bis zu|ersten)\s+vier\s+Wochen\s+(?:weiter|einer\s+vollstationären)/g],
  // Hamburger Telefonnummer (Martin 02.10.2026): 040 468 95 8181 wie im Google-Profil. Die Ortsseite zeigte 040 468 951 181,
  // eine Ziffer anders; dieselbe falsche Nummer steht in alten Verzeichniseinträgen.
  ['Hamburger Nummer falsch (040 468951181)', /468\s?95\s?1\s?181|4940468951181/g],
  // Zensus-Haushaltstyp HHTYP_SENIOR_HH__1 heißt „Haushalte mit ausschließlich Seniorinnen/Senioren",
  // Senior = 65. Lebensjahr vollendet (Methodikblatt der Regionaltabelle Haushalte). Das Ehepaar mit 70 und
  // 72 ist so ein Haushalt — „nachts ist niemand da" behauptet deshalb mehr, als die Zahl hergibt, und zwar
  // zugunsten des eigenen Angebots. Stand am 21.09. auf 152 Ortsseiten (Codemod 24).
  // 02.10.2026: Die erste Hälfte fing nur diesen einen Wortlaut. Auf 30 Seiten stand dieselbe Deutung anders —
  // „Wenn dort nachts etwas passiert, ist niemand da, der es mitbekommt“, „dort ist niemand im Haus, der nachts
  // einspringen könnte“, „ist also niemand da“ (Codemod 39). Die zweite Hälfte sucht deshalb ab dem Senioren-Anteil
  // („ab 65“ / „schon 65“) bis in den nächsten Satz nach „ist/lebt/wohnt … niemand da/im Haus“. Der Satz zu den
  // Einpersonenhaushalten („Alleinlebend heißt im Pflegefall: Es ist niemand da …“) bleibt erlaubt: Wer allein lebt, ist allein.
  ['Senioren-Haushalt als „niemand da" gedeutet', /(?:ist|lebt|wohnt)\s+(?:nachts\s+)?niemand\s+(?:mehr\s+)?da[^.]{0,60}einspringen|(?:ab|schon)\s+65\b[^.]{0,120}(?:\.\s*[^.]{0,80})?\b(?:ist|lebt|wohnt)\s+(?:(?:also|dort|nachts)\s+)*niemand\s+(?:mehr\s+)?(?:da|im\s+Haus)\b/g],
  // Preisregel (Martin 25.09.2026, schon am 17.09. so gemeint und am 20.09. beim Ausbau von /kosten gebrochen):
  // Genannt wird der Grundpreis ab 2.150 € und eine Beispielrechnung; die Aufschläge des Rechners (Nächte, Deutsch,
  // Ehepaar, weitere Personen, Mobilität, Führerschein, Frau, Pflegegrad 5) werden benannt, aber nicht beziffert.
  // Deshalb sind Aufschlagsbeträge, der Ehepaar-Preis und die Pflegegrad-5-/Rollstuhl-Preise im Text gesperrt.
  // Die zwei Schätzrechner rechnen weiter mit ihren Werten (ALLOW_FILES).
  ['Preisregel: Aufschlag beziffert (+50/100/200/250/300/450 €)', /\+\s?(?:50|100|200|250|300|450)\s*€/g],
  ['Preisregel: Aufschlag beziffert („… € mehr")', /\b(?:50|100|200|250|300|450)\s*€\s*(?:im\s+Monat\s+)?mehr\b/g],
  ['Preisregel: Nacht-Aufschlag beziffert', /(?:pro\s+Nacht|Nachteins[aä]tze?)[^.]{0,40}\b(?:50|100|300)\s*€/g],
  ['Preisregel: Nacht-Aufschlag als Spanne (50 bis 300 €)', /N[aä]cht[^.]{0,60}\+?50\s*(?:bis|–|-)\s*\+?300\s*€/g],
  ['Preisregel: Ehepaar-Preis (2.600 €)', /2\.600\s*€/g],
  ['Preisregel: Pflegegrad-5-/Rollstuhl-Preis (2.200 / 2.250 / 2.300 €)', /2\.(?:200|250|300)\s*€/g],
  // Vertragspartner (Martin 12.09. und 30.09.2026, Mustervertrag): Die Familie schließt den Vertrag mit der PRIMUNDUS
  // Sp. z o.o., bei der die Betreuungskräfte angestellt sind. Am 01.10. nannten fünf Ratgeber Primundus noch eine
  // „deutsche Agentur“, sprachen vom „Agenturvertrag“ oder schrieben „Primundus prüft und vermittelt“, während /ueber-uns
  // „Angestellt, nicht vermittelt“ sagt. Kommentarzeilen zählen nicht (dort steht der alte Wortlaut als Beleg).
  ['Primundus als deutsche Agentur/Vermittler (Vertragspartner ist die PRIMUNDUS Sp. z o.o.)',
    /[Dd]eutsche[nmr]?\s+(?:Vermittlungs)?[Aa]gentur|Agenturvertrag|Primundus\s+(?:prüft\s+und\s+)?vermittelt/g, { ohneKommentare: true }],
  // Ersatz „schnellstmöglich (in der Regel innerhalb von 3 Tagen)“ (Mustervertrag § 1 Nr. 4; Martin 01.10.: „ist auch richtig“).
  // Am 01.10. versprachen zehn Seiten „sofort“ oder „unverzüglich“ Ersatz,
  // „sofortige Ablösung“, einen „unmittelbaren Wechsel“ oder Ersatz „ohne Vorlaufzeit“, während /ueber-uns „in der Regel
  // innerhalb von 3 Tagen“ sagt.
  ['Ersatz „sofort“/„unverzüglich“ (Mustervertrag § 1 Nr. 4: in der Regel innerhalb von 3 Tagen)',
    /(?:sofort(?:ig(?:e[rnms]?)?)?|unverzüglich|unmittelbar(?:e[rnms]?)?)\s+(?:eine\s+)?(?:Ersatz|Ablösung|Wechsel)|Ersatz(?:kraft)?\s+sofort|sofortige[nmrs]?\s+Ersatzorganisation|ohne\s+Vorlaufzeit/gi,
    { ohneKommentare: true }],
  // Verhinderungspflege-Frist: Sachfehler auf /verhinderungspflege, behoben in 038df3df (01.10.2026, Quellen und Wortlaut
  // dort und in der Fakten-Memory pflege-leistungsfakten-2026). Die 30.-Juni-Regel gilt nur für den Entlastungsbetrag (§ 45b).
  ['Verhinderungspflege: Belege „vor dem 31. Dezember“ (Antrag bis Ende des Folgejahres, § 39 Abs. 1)',
    /Belege\s+(?:bis\s+)?(?:vor\s+dem|zum|spätestens\s+(?:am|zum)|bis\s+zum)\s+(?:31\.\s*Dezember|31\.\s*12\.|Jahresende)/gi, { ohneKommentare: true }],
  ['Verhinderungspflege „keine eigenständige“ (Leistung besteht weiter, § 42a)',
    /keine\s+eigenst[aä]ndige\s+Verhinderungspflege/gi, { ohneKommentare: true }],
  // Sachfehler, die Martin am 13.10.2026 finden musste („warum muss ich jedes mal solche fehler finden“). Behoben in
  // b6a8c8e5 und dd07e3f2 (Wortlaut von OpenAI, Beleg seo-reports/analysen/sachfehler_openai_2026-10-13.md). Die Regeln
  // sorgen dafür, dass derselbe Satz nicht über eine andere Seite oder einen neuen Entwurf zurückkommt.
  // BAG 24.06.2021, 5 AZR 505/20: Bereitschaftsdienst einer entsandten Betreuungskraft im Haushalt ist Arbeitszeit.
  ['Bereitschaft als „keine Arbeitszeit“ (BAG 24.06.2021, 5 AZR 505/20)',
    /Bereitschaft(?:sdienst|szeit(?:en)?)?\s+(?:ist|sind|gilt|gelten|zählt|zählen)\s+(?:als\s+)?(?:keine|nicht\s+als)\s+Arbeitszeit/gi,
    { ohneKommentare: true }],
  // Die A1-Bescheinigung stellt der Sozialversicherungsträger des Entsendestaats aus; der Arbeitgeber beantragt sie nur.
  ['A1 „vom Arbeitgeber ausgestellt“ (stellt der Sozialversicherungsträger im Entsendestaat aus)',
    /vom\s+Arbeitgeber(?:\s+im\s+(?:Heimatland|Herkunftsland|Entsendestaat))?\s+ausgestellt/gi, { ohneKommentare: true }],
  // Kost und Logis ersetzen den Mindestlohn grundsätzlich nicht.
  ['Sachbezüge auf den Mindestlohn angerechnet', /Sachbez(?:ü|ue)ge[^.]{0,60}(?:angerechnet|anrechenbar)/gi,
    { ohneKommentare: true }],
  // Regel 12.09.2026: Mindestlohn-Beträge stehen nicht auf Kundenseiten (am 13.10. stand dort noch der Wert von 2025).
  ['Mindestlohn mit Betrag (Regel 12.09.: keine Beträge auf Kundenseiten)',
    /Mindestlohn[^.;"'<]{0,40}\d{1,2},\d{2}\s*(?:€|Euro)/g, { ohneKommentare: true }],
  // Sachfehler vom 25.10.2026 (Wortlaut von OpenAI geprüft; § 37 Abs. 3 und § 15 Abs. 2 SGB XI, gesetze-im-internet.de,
  // gelesen am 25.10.2026). Beratungsbesuch: Pflicht ist ab Pflegegrad 2 einmal im Halbjahr; Pflegegrad 4 und 5 DÜRFEN
  // ihn zusätzlich bis zu einmal im Quartal abrufen. Auf /checkliste-pflegeuebernahme und /eigenanteil-24h-pflege-senken
  // stand „vierteljährlich bei PG 4–5“ als Pflicht. Erlaubt bleibt „vierteljährlich möglich/abrufen/auf Wunsch“.
  ['Beratungsbesuch vierteljährlich als Pflicht bei PG 4/5 (§ 37 Abs. 3: Pflicht halbjährlich, vierteljährlich möglich)',
    /vierteljährlich\s+(?:bei|für|ab)\s+(?:PG|Pflegegrad(?:en?)?)\s*4|(?:PG|Pflegegrad(?:en?)?)\s*4\s*(?:–|-|bis|und)\s*5\s*:\s*vierteljährlich|vierteljährlich\s*(?:—|–|-)?\s*(?:Pflicht|verpflichtend|vorgeschrieben)|halbjährlich\s+bei\s+(?:PG|Pflegegrad(?:en?)?)\s*2\s*(?:–|-|bis|und)\s*3|(?:PG|Pflegegrad(?:en?)?)\s*2\s*(?:–|-|bis|und)\s*3\s*:\s*halbjährlich/gi,
    { ohneKommentare: true }],
  // § 15 Abs. 2 SGB XI: Modul 6 (Alltagsleben und soziale Kontakte) zählt mit 15 %. Auf /pflegegrad-begutachtung-vorbereiten
  // stand „Alltagsleben (keine eigene Gewichtung)“.
  ['Alltagsleben „keine eigene Gewichtung“ (§ 15 Abs. 2: Modul 6 zählt 15 %)', /keine\s+eigene\s+Gewichtung/gi,
    { ohneKommentare: true }],
]

// Zeilen, die nur Kommentar sind (// …, * … in Blockkommentaren, {/* … in JSX)
const KOMMENTARZEILE = /^\s*(?:\/\/|\/?\*|\{\/\*)/

const SCAN_DIRS = ['app', 'components', 'lib']
const SCAN_FILES = ['public/llms.txt']
const SELF = path.join('scripts', 'check-fakten.mjs')

// Erlaubte Vorkommen: historische Vorher/Nachher-Darstellung der Pflegereform
// (dort sind die Altwerte 1.612/1.774/3.224 € bewusst und korrekt als "bis Juni 2025" benannt).
const ALLOW_FILES = new Set([
  path.join('app', 'pflegereform-2025', 'page.tsx'),
  // Schätzrechner: rechnen für Pflegegrad 5 mit 2.200 € und zeigen es im Ergebnis (Preisregel 25.09., Entscheidung 4)
  path.join('components', 'werkzeuge', 'HeimRechner.tsx'),
  path.join('components', 'werkzeuge', 'PflegegradRechner.tsx'),
])

const findings = []
function scanFile(file) {
  const rel = path.relative(ROOT, file)
  if (rel === SELF || ALLOW_FILES.has(rel)) return
  const text = fs.readFileSync(file, 'utf8')
  const zeilen = text.split('\n')
  for (const [desc, re, optionen] of STALE) {
    if (optionen?.ohneDateien?.includes(rel)) continue
    re.lastIndex = 0
    let m
    while ((m = re.exec(text))) {
      const line = text.slice(0, m.index).split('\n').length
      if (optionen?.ohneKommentare && KOMMENTARZEILE.test(zeilen[line - 1])) continue
      findings.push(`${rel}:${line}  ${desc}`)
    }
  }
}
function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name)
    if (e.isDirectory()) walk(p)
    else if (/\.(tsx?|mjs|txt|md)$/.test(e.name)) scanFile(p)
  }
}
for (const d of SCAN_DIRS) walk(path.join(ROOT, d))
for (const f of SCAN_FILES) { const p = path.join(ROOT, f); if (fs.existsSync(p)) scanFile(p) }

if (findings.length) {
  const level = WARN_ONLY ? 'WARNUNG (bekannt, Fix = B6)' : 'FEHLER'
  console.log(`check-fakten ${level}: ${findings.length} Funde veralteter Werte:`)
  findings.forEach((f) => console.log('  ' + f))
  if (!WARN_ONLY) process.exit(1)
} else {
  console.log('check-fakten ✓ — keine veralteten Beträge im Quellcode')
}
