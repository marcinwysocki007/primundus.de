// Zentrale Faktenbasis für alle Anbieter-Vergleichsseiten.
// JEDE Fremdangabe stammt von der eigenen Website des Anbieters (inkl. dort veröffentlichter
// Unterlagen wie Broschüre oder Mustervertrag) — Quelle + Stand stehen pro Anbieter dabei,
// die einzelne Fundstelle in der Fußnote (§ 6 UWG: objektiv, nachprüfbar, nicht herabsetzend).
// Bei Änderungen: erst die Quelle prüfen, dann hier ändern — die
// Seiten (/anbieter-vergleich, /promedica24-alternative, …)
// rendern ausschließlich aus dieser Datei.
//
// Neuprüfung 30.09.2026 (seo-reports/analysen/vergleich-neupruefung-2026-09-30/ERGEBNIS.md):
// 15 von 16 Feldern „k. A." waren falsch, die Anbieter nennen die Angaben auf ihrer Website.
// Regel seitdem: gleicher Ablauf, gleiche Wertung — auch für Primundus.
//
// E1/E2 (Preis und Betreuungskräfte sofort sehen), Martin 30.09.2026: Angaben zur Kalkulation, Datenschutz und
// Kontaktdaten sind normal; danach erscheinen bei Primundus Preis und passende Kräfte sofort. Regel für alle gleich:
// ✓ = sofort online, auch wenn vorher Angaben zur Kalkulation, Kontaktdaten oder eine kostenlose Registrierung nötig
// sind; ◐ = nur Beispielpreise oder Beispielrechnung. Deshalb stehen auch Linara (Preis nach Kontaktdaten) und
// marta (Profile nach Registrierung) auf ✓.
// Dann Kurzwert und Text mitziehen und die Fragen auf /anbieter-vergleich angleichen.

export type Wertung = 'ja' | 'teils' | 'nein' | 'ka';

export interface Kriterium {
  wertung: Wertung;   // steuert das Icon
  kurz: string;       // knapper Tabellenwert („Ja", „Nein", „418 € Pauschale")
  text: string;       // der belegbare Wortlaut (Arbeitsgrundlage; sichtbar sind kurz + Fußnote)
}

export interface Anbieter {
  slug: string;
  name: string;
  kurz: string;                 // Einordnung in einem Satz
  preisAb: string;              // Bruttopreis ab (E3: einheitlich brutto, kein Eigenanteil)
  sofortpreis: Kriterium;       // Preis sofort online (✓ auch nach Angaben/Kontaktdaten/Registrierung, ◐ nur Beispiele)
  kraefteSofort: Kriterium;     // passende Kräfte sofort sehen & vergleichen
  auswahlVorVertrag: Kriterium; // erst Kraft auswählen, dann Vertrag
  gebuehr: Kriterium;           // Vermittlungs-/Aufnahme-/Pauschalgebühren
  bindung: Kriterium;           // Mindestlaufzeit / Vertragsbindung
  abrechnung: Kriterium;        // taggenau / Tagespreise / k.A.
  ansprechpartner: Kriterium;   // persönlicher Ansprechpartner VOR ORT
  erreichbarkeit: Kriterium;    // wann persönlich erreichbar
  modell: string;               // wer beschäftigt die Kraft
  staerken: string[];           // was der Anbieter gut macht (Ehrlichkeit)
  quelle: string;
  stand: string;
}

export const STAND = '30. September 2026';

export const PRIMUNDUS: Anbieter = {
  slug: 'primundus',
  name: 'Primundus',
  kurz: 'Eigenes Betreuungspersonal; Preis und passende Kräfte sofort online, nach den Angaben zur Kalkulation',
  preisAb: 'ab 2.150 €/Monat (zzgl. An- und Abreise 125 € je Strecke)',
  sofortpreis: { wertung: 'ja', kurz: 'Ja — sofort nach den Angaben, in 2 Minuten', text: 'Preis in 2 Minuten online, sofort nach den Angaben zur Kalkulation und den Kontaktdaten; ohne Rückruf, ohne Termin' },
  kraefteSofort: { wertung: 'ja', kurz: 'Ja — sofort mit dem Angebot', text: 'Direkt mit dem Angebot, sofort nach den Angaben zur Kalkulation und den Kontaktdaten: passende Betreuungskräfte mit Erfahrung und Sprachkenntnissen einsehen und vergleichen' },
  auswahlVorVertrag: { wertung: 'ja', kurz: 'Ja', text: 'Erst wählen Sie Ihre Betreuungskraft aus — dann erst kommt der Vertrag' },
  gebuehr: { wertung: 'ja', kurz: 'Keine', text: 'Keine Vermittlungsgebühr, keine Aufnahme- oder Bearbeitungspauschale' },
  bindung: { wertung: 'ja', kurz: 'Keine — täglich kündbar', text: 'Keine Mindestlaufzeit — täglich kündbar' },
  abrechnung: { wertung: 'ja', kurz: 'Taggenau', text: 'Taggenau nach tatsächlichen Betreuungstagen (AGB § 6 Abs. 2)' },
  ansprechpartner: { wertung: 'teils', kurz: 'Fester Ansprechpartner, zentral', text: 'Ein fester persönlicher Ansprechpartner begleitet Sie durchgehend — zentral, kein Partnernetz vor Ort' },
  erreichbarkeit: { wertung: 'ja', kurz: '7 Tage die Woche', text: 'Persönlich erreichbar Montag bis Sonntag, 8–20 Uhr' },
  modell: 'Eigenes Betreuungspersonal, bei Primundus beschäftigt',
  staerken: [],
  quelle: 'primundus.de',
  stand: STAND,
};

export const ANBIETER: Anbieter[] = [
  {
    slug: 'promedica24',
    name: 'Promedica24',
    kurz: 'Entsende-Anbieter mit Franchise-Partnern (Promedica Plus)',
    preisAb: 'ab 105 €/Tag laut Preisliste, inkl. Fahrtkosten (eigene Angabe; bei 30 Tagen 3.150 €)',
    sofortpreis: { wertung: 'ja', kurz: 'Ja — Preisliste⁴', text: 'Preispakete mit Tagespreisen ab 105 € online; ein preisliches Angebot laut FAQ nach individueller Beratung' },
    kraefteSofort: { wertung: 'nein', kurz: 'Nein', text: 'Zentrale in Warschau wählt aus dem eigenen Pool aus — keine Profile im Online-Ablauf' },
    auswahlVorVertrag: { wertung: 'teils', kurz: 'Teils⁴', text: 'Landingpage: Auswahl der Betreuungskraft gemeinsam mit dem Berater vor dem unverbindlichen Angebot; Startseite: Mitarbeiter der Hauptstelle in Warschau suchen die Kraft aus' },
    gebuehr: { wertung: 'teils', kurz: 'Im Tagespreis enthalten⁴', text: 'Laut Preisseite umfasst der Tagespreis Betreuungs- und Vermittlungsgebühren; keine separate Vermittlungsgebühr' },
    bindung: { wertung: 'nein', kurz: '2 Monate Mindestlaufzeit laut Franchise-FAQ⁴', text: 'Laut Franchise-FAQ beträgt die Mindestvertragslaufzeit 2 Monate; eine Kündigungsfrist nennt die Website nicht' },
    abrechnung: { wertung: 'ja', kurz: 'Tagesgenau⁴', text: 'Laut Franchise-FAQ ermöglicht der Tagespreis eine tagesgenaue Abrechnung' },
    ansprechpartner: { wertung: 'ja', kurz: 'Ja — vor Ort (Franchise)', text: 'Franchise-Partner als „erster Ansprechpartner vor Ort"' },
    erreichbarkeit: { wertung: 'ja', kurz: 'Rund um die Uhr⁴', text: 'Laut FAQ deutschsprachiger Kundenservice rund um die Uhr, 365 Tage' },
    modell: 'Entsendemodell, Betreuungskräfte aus Osteuropa',
    staerken: ['Über 6.800 Betreuungskräfte im Pool (eigene Angabe)', 'Ansprechpartner vor Ort'],
    quelle: 'promedica24.de inkl. Franchise-FAQ',
    stand: STAND,
  },
  {
    slug: 'hausengel',
    name: 'Hausengel',
    kurz: 'Vermittlung selbstständiger Betreuungskräfte',
    preisAb: 'ab 2.500 €/Monat (eigene Angabe)',
    sofortpreis: { wertung: 'teils', kurz: 'Teils — Beispielrechnung⁵', text: 'Beispielrechnung online (Gesamtbelastung 3.010 €/Monat); verbindlicher Preis nach Beratungsgespräch' },
    kraefteSofort: { wertung: 'nein', kurz: 'Nein', text: 'Keine Profile im Online-Ablauf' },
    auswahlVorVertrag: { wertung: 'ja', kurz: 'Ja¹', text: 'Telefonisches Kennenlernen der vorgeschlagenen Betreuungskräfte, danach Entscheidung über die Auftragsvergabe' },
    gebuehr: { wertung: 'teils', kurz: 'Vermittlung 220 € + Franchise ca. 490 €/Monat⁵', text: 'Beispielrechnung: Vermittlungstätigkeit 220 € und Franchisegebühr ca. 490 € pro Monat; Vermittlung laut Hausengel in der Regel über die Pflegekasse erstattungsfähig' },
    bindung: { wertung: 'teils', kurz: '1 Monat Kündigungsfrist⁵', text: 'Muster-Dienstleistungsvertrag § 7: Kündigung mit einer Frist von einem Monat' },
    abrechnung: { wertung: 'teils', kurz: 'Monatlich nach Leistung⁵', text: 'Muster-Dienstleistungsvertrag § 4: monatliche Rechnung über erbrachte Leistungen, keine Vorauszahlungen' },
    ansprechpartner: { wertung: 'ja', kurz: 'Ja — regionale Beratung⁵', text: 'Standortseite: persönliche Beratung vor Ort, Suche nach Pflegeberaterinnen und -beratern per Postleitzahl' },
    erreichbarkeit: { wertung: 'ja', kurz: 'Rund um die Uhr⁵', text: 'Laut Website rund um die Uhr erreichbar, 24/7 an 365 Tagen' },
    modell: 'Selbstständige Betreuungskräfte',
    staerken: ['Über 200.000 Vermittlungen seit 2005 (eigene Angabe)', 'Kennenlernen der Betreuungskraft vorab'],
    quelle: 'hausengel.de inkl. Muster-Dienstleistungsvertrag',
    stand: STAND,
  },
  {
    slug: 'marta',
    name: 'marta',
    kurz: 'Online-Plattform, Familien wählen aus Profilen',
    preisAb: 'ab 2.299 €/Monat (eigene Angabe; Planübersicht ab 2.799 €)',
    sofortpreis: { wertung: 'ja', kurz: 'Ja — Preistabellen', text: 'Preistabellen offen auf der Website' },
    kraefteSofort: { wertung: 'ja', kurz: 'Ja — nach kostenloser Registrierung', text: 'Profile einsehbar — nach kostenloser Registrierung mit Fragebogen' },
    auswahlVorVertrag: { wertung: 'ja', kurz: 'Ja', text: 'Familie wählt das Profil aus, Kennenlernen vorab möglich' },
    gebuehr: { wertung: 'nein', kurz: '0–999 € + Plattformgebühr³', text: 'Aufnahmegebühr je nach Plan 0 € (12 Monate), 499 € (3 Monate) oder 999 € (Notfallbetreuung); dazu laut Nutzungsbedingungen eine wiederkehrende Plattformnutzungsgebühr, die nicht erhoben wird, solange eine Betreuungskraft vor Ort tätig ist' },
    bindung: { wertung: 'nein', kurz: '3–12 Monate + 1 Monat Frist³', text: 'Pläne mit 3 bzw. 12 Monaten Mindestlaufzeit, danach automatische Verlängerung mit einem Monat Kündigungsfrist; Notfallbetreuung ohne Mindestlaufzeit' },
    abrechnung: { wertung: 'ja', kurz: 'Tagesgenau³', text: 'Laut Website tagesgenaue Abrechnung, bezahlt werden nur erbrachte Leistungen' },
    ansprechpartner: { wertung: 'teils', kurz: 'Teils — persönlich, vor Ort nicht angegeben³', text: 'Persönlicher Ansprechpartner in den 3- und 12-Monats-Plänen; eine Betreuung vor Ort nennt die Website für Familien nicht; laut Franchise-Seite über 45 Franchise-Partner deutschlandweit' },
    erreichbarkeit: { wertung: 'teils', kurz: 'Im Notfall rund um die Uhr³', text: 'Laut Website während der Betreuung im Notfall rund um die Uhr erreichbar' },
    modell: 'Plattform — der Betreuungsvertrag entsteht ausschließlich zwischen Familie und Betreuungsdienstleister',
    staerken: ['Profile online vergleichbar', 'Preistabellen online'],
    quelle: 'marta.de inkl. Nutzungsbedingungen',
    stand: STAND,
  },
  {
    slug: 'linara',
    name: 'Linara',
    kurz: 'Vermittlung selbstständiger Betreuungspersonen, seit 2008',
    preisAb: 'ab ca. 2.800 €/Monat (eigene Angabe)',
    sofortpreis: { wertung: 'ja', kurz: 'Ja — Rechner, sofort nach den Angaben⁶', text: 'Online-Preisrechner: voraussichtliche Monatskosten sofort nach Eingabe der Kontaktdaten; dazu Beispielrechnungen ab 104 €/Tag' },
    kraefteSofort: { wertung: 'nein', kurz: 'Nein', text: 'Keine Profile im Online-Ablauf' },
    auswahlVorVertrag: { wertung: 'ka', kurz: 'k. A.', text: 'Betreuungsvorschlag nach Bedarfsanalyse, Anreise nach der Entscheidung der Familie; Zeitpunkt des Vertrags nicht beschrieben' },
    gebuehr: { wertung: 'nein', kurz: '418 € Pauschale', text: 'Erstaufnahmepauschale 418 € (eigene Angabe, mit Geld-zurück-Zusage)' },
    bindung: { wertung: 'teils', kurz: '14 Tage Kündigungsfrist⁶', text: 'Laut FAQ schriftliche Kündigung mit einer Frist von 14 Tagen, im Todesfall 7 Tage' },
    abrechnung: { wertung: 'teils', kurz: 'Tagespreise', text: 'Kalkulation in Tagespreisen (z. B. 104 €/Tag)' },
    ansprechpartner: { wertung: 'teils', kurz: 'Teils — Standorte mit Beratern⁶', text: 'Netzwerk von 19 Standorten mit Beraterinnen und Beratern; fester Ansprechpartner während der Vertragslaufzeit' },
    erreichbarkeit: { wertung: 'teils', kurz: 'Jederzeit für Vertragsfragen, ohne Zeiten⁶', text: 'Laut FAQ steht der feste Ansprechpartner bei Vertrags- und Rechnungsfragen jederzeit zur Verfügung; Zeiten oder Notfalldienst nennt die Website nicht' },
    modell: 'Ausschließlich selbstständige Betreuungspersonen (eigene Angabe)',
    staerken: ['Seit 2008 am Markt', 'Beispielrechnungen und Preisrechner online'],
    quelle: 'linara.de',
    stand: STAND,
  },
  {
    slug: 'deutsche-seniorenbetreuung',
    name: 'Deutsche Seniorenbetreuung',
    kurz: 'Vermittlungsnetzwerk mit regionalen Partnern',
    preisAb: 'ab 2.990 €/Monat (eigene Angabe)',
    sofortpreis: { wertung: 'ja', kurz: 'Ja — Rechner (Schätzung), ohne Kontaktdaten²', text: 'Online-Kostenrechner ohne Kontaktdaten als unverbindliche Schätzung; verbindliches Angebot nach Telefonberatung' },
    kraefteSofort: { wertung: 'nein', kurz: 'Nein', text: 'Keine Profile im Online-Ablauf' },
    auswahlVorVertrag: { wertung: 'ja', kurz: 'Ja — Vermittlung erst nach der Auswahl²', text: 'Auswahl aus Personalvorschlägen mit Lebenslauf und Telefonnummer; Vermittlung und Kosten erst nach der Entscheidung für eine Betreuungskraft' },
    gebuehr: { wertung: 'teils', kurz: 'ca. 17,85 €/Tag + 280 € unter 40 Tagen²', text: 'Vermittlungs- und Betreuungsleistung durchschnittlich 17,85 € pro Tag auf eigener Rechnung, keine Einmalgebühr; Kurzeinsatzpauschale 280 € bei Einsätzen unter 40 Tagen (eigene Angabe)' },
    bindung: { wertung: 'teils', kurz: 'Keine Mindestlaufzeit, 7 Tage Frist²', text: 'Keine Mindestlaufzeit, Kündigungsfrist 7 Tage, im Todesfall 3 Tage (eigene Angabe)' },
    abrechnung: { wertung: 'ja', kurz: 'Nach Vor-Ort-Zeit', text: '„Abrechnung … nur für den Zeitraum, in dem die Betreuungskraft vor Ort ist"' },
    ansprechpartner: { wertung: 'teils', kurz: 'Teils — regionaler Ansprechpartner²', text: 'Ansprechpartner aus der Region, laut Website mehr als 20 Geschäftsstellen in Deutschland, Österreich und der Schweiz; Termine vor Ort nennt die Website nicht ausdrücklich' },
    erreichbarkeit: { wertung: 'ja', kurz: 'Täglich, auch am Wochenende²', text: 'Fester Kundenbetreuer täglich erreichbar, telefonischer Bereitschaftsdienst am Wochenende (eigene Angabe)' },
    modell: 'Vermittlung im Entsende- und im Selbstständigenmodell (eigene Angabe)',
    staerken: ['Kostenrechner als Orientierung', 'Abrechnung nach Vor-Ort-Zeit'],
    quelle: 'deutsche-seniorenbetreuung.de',
    stand: STAND,
  },
];

export const KRITERIEN: { key: keyof Pick<Anbieter,'sofortpreis'|'kraefteSofort'|'auswahlVorVertrag'|'gebuehr'|'bindung'|'abrechnung'|'ansprechpartner'|'erreichbarkeit'>; label: string }[] = [
  { key: 'sofortpreis',       label: 'Preis sofort online sehen' },
  { key: 'kraefteSofort',     label: 'Passende Betreuungskräfte sofort sehen & vergleichen' },
  { key: 'auswahlVorVertrag', label: 'Erst Betreuungskraft auswählen, dann Vertrag' },
  { key: 'gebuehr',           label: 'Vermittlungs- & Aufnahmegebühren' },
  { key: 'bindung',           label: 'Vertragsbindung & Mindestlaufzeit' },
  { key: 'abrechnung',        label: 'Abrechnung' },
  { key: 'ansprechpartner',   label: 'Persönlicher Ansprechpartner vor Ort' },
  { key: 'erreichbarkeit',    label: 'Erreichbarkeit' },
];

// Wertungsregeln je Zeile (30.09.2026, nach OpenAI-Prüfung): steht unter jeder Tabelle, damit ein
// gleicher Ablauf nachprüfbar gleich gewertet ist. `nein` ist das Zeichen der jeweiligen Tabelle
// (— auf /anbieter-vergleich, ✕ auf den Duell-Seiten).
export function wertungsRegeln(nein: string = '—'): string {
  return `So gewertet: Preis und Betreuungskräfte sofort sehen ✓ sofort online ohne Rückruf und ohne Beratungstermin, auch wenn vorher Angaben zur Kalkulation, Kontaktdaten oder eine kostenlose Registrierung nötig sind (Preis auch als unverbindliche Rechnerschätzung, Kräfte als Profile echter Betreuungskräfte), ◐ nur Beispielpreise oder Beispielrechnung · Gebühren ✓ keine, ◐ laufende Vermittlungsgebühr (im Preis oder gesondert), ${nein} zusätzlich einmalige Aufnahmegebühr · Bindung ✓ jederzeit bzw. täglich kündbar, ◐ mit Kündigungsfrist, ${nein} mit Mindestlaufzeit · Erreichbarkeit ✓ an allen sieben Tagen, ◐ Geschäftszeiten, nur Notfälle oder ohne Zeitangabe · Preis ab: Bruttopreis laut Anbieter; Kost und Logis stellt die Familie; Reisekosten kommen meist hinzu, bei Promedica24 sind sie laut Preisliste im Tagespreis enthalten.`
}

// Fußnoten zu den Kurzwerten in den Vergleichstabellen — die Belege von den Anbieter-Websites
// mit Fundstelle (rechtlich relevant, nicht kürzen). Je Anbieter eine Sammel-Fußnote für die
// Angaben der Neuprüfung (² DSB, ³ marta, ⁴ Promedica24, ⁵ Hausengel, ⁶ Linara).
export const FUSSNOTEN: { nr: string; text: string }[] = [
  { nr: '¹', text: 'Hausengel: Die Familie lernt die in Frage kommenden Betreuungskräfte zunächst telefonisch kennen und entscheidet dann, an wen sie den Auftrag vergibt (hausengel.de/24-stunden-pflege/).' },
  { nr: '²', text: 'Deutsche Seniorenbetreuung: Ablauf „Pflegekräfte kontaktieren und kennen lernen" vor der Anreise; Familien wählen aus Personalvorschlägen mit Lebenslauf und Telefonnummer; die Vermittlung koordiniert die Deutsche Seniorenbetreuung laut eigener Angabe „nach Ihrer Entscheidung", Kosten entstehen erst nach der Entscheidung für eine Betreuungskraft. Kostenrechner ohne Kontaktdaten als unverbindliche Schätzung. Vermittlungs- und Betreuungsleistung durchschnittlich 17,85 € pro Tag auf eigener Rechnung, keine Einmalgebühr, 280 € bei Einsätzen unter 40 Tagen; keine Mindestlaufzeit, Kündigungsfrist 7 Tage. Mehr als 20 Geschäftsstellen, fester Kundenbetreuer täglich erreichbar, telefonischer Bereitschaftsdienst am Wochenende (deutsche-seniorenbetreuung.de, u. a. /24-stunden-pflege/, /regional/so-arbeiten-wir/, /pflegevermittlung/).' },
  { nr: '³', text: 'marta: Aufnahmegebühr laut Planübersicht 0 € (12 Monate), 499 € (3 Monate) oder 999 € (Notfallbetreuung), Planpreise ab 2.799 €; einen Einstieg ab 2.299 € nennt marta.de/24-stunden-betreuung. Nutzungsbedingungen: Mindestlaufzeit je Plan mit automatischer Verlängerung, danach Kündigungsfrist von einem Monat (Ziff. 5.1); wiederkehrende Plattformnutzungsgebühr ab der Betreuungsvereinbarung (Ziff. 4.1.2), nicht erhoben, solange eine Betreuungskraft vor Ort tätig ist (Ziff. 4.1.3). Die Startseite wirbt zudem mit einer Kündigung innerhalb von 7 Tagen bei Unzufriedenheit und nennt Notfallkontakt rund um die Uhr während der Betreuung; tagesgenaue Abrechnung laut marta.de/24-stunden-pflege; persönlicher Ansprechpartner in den 3- und 12-Monats-Plänen, über 45 Franchise-Partner laut marta.de/franchise.' },
  { nr: '⁴', text: 'Promedica24: Preisliste auf promedica24.de/betreuungskosten/ mit drei Paketen und Tagespreisen ab 105 €, laut Fußnote dort inklusive Steuern, Sozialabgaben, Fahrtkosten, Betreuungs- und Vermittlungsgebühren sowie Versicherungen; andere Promedica24-Seiten werben mit einem Verzicht auf Vermittlungsgebühren; ein preisliches Angebot laut FAQ nach individueller Beratung, der Ablauf auf der Startseite beginnt mit einem Erstgespräch und einem Beratungstermin zu Hause; deutschsprachiger Kundenservice laut FAQ rund um die Uhr, 365 Tage. Die öffentlich abrufbare Franchise-FAQ (promedica24.de/franchise/haeufige-fragen/) nennt für Kundenverträge eine Mindestvertragslaufzeit von 2 Monaten und eine tagesgenaue Abrechnung über den Tagespreis. Zur Auswahl der Betreuungskraft nennt die Landingpage promedica24.de/24h-betreuung-promedica24/ einen gemeinsamen Schritt vor dem Angebot, die Startseite die Auswahl durch die Hauptstelle in Warschau.' },
  { nr: '⁵', text: 'Hausengel: Beispielrechnung auf hausengel.de/24-stunden-pflege/ (Gesamtbelastung 3.010 € im Monat, darin Vermittlung 220 € und Franchisegebühr ca. 490 €; Kosten laut Website ab 2.500 € im Monat); Muster-Dienstleistungsvertrag, dort verlinkt: § 4 monatliche Abrechnung der erbrachten Leistungen, § 7 Kündigungsfrist ein Monat. Persönlicher Ansprechpartner laut Website rund um die Uhr (24/7, 365 Tage); Beratung vor Ort mit Postleitzahlsuche auf hausengel.de/standorte-und-ansprechpartner/.' },
  { nr: '⁶', text: 'Linara: Online-Preisrechner (linara.de/preisrechner) mit den voraussichtlichen Monatskosten nach Eingabe der Kontaktdaten; Beispielrechnungen ab 104 € pro Tag (linara.de/leistungen-tarife). Laut FAQ auf linara.de/24-stunden-betreuung Kündigungsfrist 14 Tage (im Todesfall 7 Tage) und ein fester Ansprechpartner, der bei Vertrags- und Rechnungsfragen jederzeit zur Verfügung steht. 19 Standorte mit Beraterinnen und Beratern laut linara.de/standorte; Gründung 2008 laut linara.de/team.' },
]
