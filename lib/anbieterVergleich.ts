// Zentrale Faktenbasis für alle Anbieter-Vergleichsseiten.
// JEDE Fremdangabe stammt von der eigenen Website des Anbieters (inkl. dort veröffentlichter
// Unterlagen wie Broschüre oder Mustervertrag) — Quelle + Stand stehen pro Anbieter dabei,
// die einzelne Fundstelle in der Fußnote (§ 6 UWG: objektiv, nachprüfbar, nicht herabsetzend).
// Bei Änderungen: erst die Quelle prüfen, dann hier ändern — die
// Seiten (/anbieter-vergleich, /pflegehelden-alternative, …)
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
    slug: 'pflegehelden',
    name: 'Pflegehelden',
    kurz: 'Franchise-System mit regionalen Partnern, seit 2005',
    preisAb: 'ab 2.850 €/Monat (eigene Angabe)',
    sofortpreis: { wertung: 'teils', kurz: 'Teils — Beispielpreise³', text: 'Beispielpreise online (drei Betreuungssituationen ab 95 € pro Tag, ab 2.850 €/Monat); individuelles Angebot innerhalb eines Tages nach Anfrage' },
    kraefteSofort: { wertung: 'nein', kurz: 'Nein', text: 'Keine Profile im Online-Ablauf; Vorschläge kommen im Vermittlungsprozess' },
    auswahlVorVertrag: { wertung: 'nein', kurz: 'Nein — erst Vermittlungsvertrag¹', text: 'Erst die Entscheidung für die Zusammenarbeit (Vermittlungsvertrag), danach die Auswahl aus den Personalvorschlägen' },
    gebuehr: { wertung: 'teils', kurz: 'Einkalkuliert²', text: 'Keine separate Gebühr ausgewiesen — „Agenturgebühren einkalkuliert"' },
    bindung: { wertung: 'ja', kurz: '„Jederzeit kündbar“', text: '„Jederzeit kündbar" (eigene Angabe); konkrete Frist nicht genannt — die AGB sind nicht öffentlich einsehbar' },
    abrechnung: { wertung: 'ja', kurz: 'Taggenau³', text: 'Kosten pro Tag dargestellt; taggenaue Abrechnung laut Infobroschüre 06/25' },
    ansprechpartner: { wertung: 'ja', kurz: 'Ja — vor Ort (Franchise)', text: 'Persönliche Ansprechpartner vor Ort (Franchise-Partner)' },
    erreichbarkeit: { wertung: 'teils', kurz: 'Geschäftszeiten⁷', text: 'Laut FAQ zu Geschäftszeiten erreichbar, in Notfällen auch außerhalb' },
    modell: 'Vermittlung über Franchise-System, überwiegend polnische Betreuungskräfte',
    staerken: ['Seit 2005 am Markt', 'Regionale Ansprechpartner in allen Bundesländern', 'Über 100 Standorte (eigene Angabe)'],
    quelle: 'pflegehelden.de inkl. Infobroschüre 06/25',
    stand: STAND,
  },
  {
    slug: 'promedica24',
    name: 'Promedica24',
    kurz: 'Entsende-Anbieter mit Franchise-Partnern (Promedica Plus)',
    preisAb: 'ab 105 €/Tag laut Preisliste, inkl. Fahrtkosten (eigene Angabe; bei 30 Tagen 3.150 €)',
    sofortpreis: { wertung: 'ja', kurz: 'Ja — Preisliste⁸', text: 'Preispakete mit Tagespreisen ab 105 € online; ein preisliches Angebot laut FAQ nach individueller Beratung' },
    kraefteSofort: { wertung: 'nein', kurz: 'Nein', text: 'Zentrale in Warschau wählt aus dem eigenen Pool aus — keine Profile im Online-Ablauf' },
    auswahlVorVertrag: { wertung: 'teils', kurz: 'Teils⁸', text: 'Landingpage: Auswahl der Betreuungskraft gemeinsam mit dem Berater vor dem unverbindlichen Angebot; Startseite: Mitarbeiter der Hauptstelle in Warschau suchen die Kraft aus' },
    gebuehr: { wertung: 'teils', kurz: 'Im Tagespreis enthalten⁸', text: 'Laut Preisseite umfasst der Tagespreis Betreuungs- und Vermittlungsgebühren; keine separate Vermittlungsgebühr' },
    bindung: { wertung: 'nein', kurz: '2 Monate Mindestlaufzeit laut Franchise-FAQ⁸', text: 'Laut Franchise-FAQ beträgt die Mindestvertragslaufzeit 2 Monate; eine Kündigungsfrist nennt die Website nicht' },
    abrechnung: { wertung: 'ja', kurz: 'Tagesgenau⁸', text: 'Laut Franchise-FAQ ermöglicht der Tagespreis eine tagesgenaue Abrechnung' },
    ansprechpartner: { wertung: 'ja', kurz: 'Ja — vor Ort (Franchise)', text: 'Franchise-Partner als „erster Ansprechpartner vor Ort"' },
    erreichbarkeit: { wertung: 'ja', kurz: 'Rund um die Uhr⁸', text: 'Laut FAQ deutschsprachiger Kundenservice rund um die Uhr, 365 Tage' },
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
    sofortpreis: { wertung: 'teils', kurz: 'Teils — Beispielrechnung⁹', text: 'Beispielrechnung online (Gesamtbelastung 3.010 €/Monat); verbindlicher Preis nach Beratungsgespräch' },
    kraefteSofort: { wertung: 'nein', kurz: 'Nein', text: 'Keine Profile im Online-Ablauf' },
    auswahlVorVertrag: { wertung: 'ja', kurz: 'Ja⁴', text: 'Telefonisches Kennenlernen der vorgeschlagenen Betreuungskräfte, danach Entscheidung über die Auftragsvergabe' },
    gebuehr: { wertung: 'teils', kurz: 'Vermittlung 220 € + Franchise ca. 490 €/Monat⁹', text: 'Beispielrechnung: Vermittlungstätigkeit 220 € und Franchisegebühr ca. 490 € pro Monat; Vermittlung laut Hausengel in der Regel über die Pflegekasse erstattungsfähig' },
    bindung: { wertung: 'teils', kurz: '1 Monat Kündigungsfrist⁹', text: 'Muster-Dienstleistungsvertrag § 7: Kündigung mit einer Frist von einem Monat' },
    abrechnung: { wertung: 'teils', kurz: 'Monatlich nach Leistung⁹', text: 'Muster-Dienstleistungsvertrag § 4: monatliche Rechnung über erbrachte Leistungen, keine Vorauszahlungen' },
    ansprechpartner: { wertung: 'ja', kurz: 'Ja — regionale Beratung⁹', text: 'Standortseite: persönliche Beratung vor Ort, Suche nach Pflegeberaterinnen und -beratern per Postleitzahl' },
    erreichbarkeit: { wertung: 'ja', kurz: 'Rund um die Uhr⁹', text: 'Laut Website rund um die Uhr erreichbar, 24/7 an 365 Tagen' },
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
    gebuehr: { wertung: 'nein', kurz: '0–999 € + Plattformgebühr⁶', text: 'Aufnahmegebühr je nach Plan 0 € (12 Monate), 499 € (3 Monate) oder 999 € (Notfallbetreuung); dazu laut Nutzungsbedingungen eine wiederkehrende Plattformnutzungsgebühr, die nicht erhoben wird, solange eine Betreuungskraft vor Ort tätig ist' },
    bindung: { wertung: 'nein', kurz: '3–12 Monate + 1 Monat Frist⁶', text: 'Pläne mit 3 bzw. 12 Monaten Mindestlaufzeit, danach automatische Verlängerung mit einem Monat Kündigungsfrist; Notfallbetreuung ohne Mindestlaufzeit' },
    abrechnung: { wertung: 'ja', kurz: 'Tagesgenau⁶', text: 'Laut Website tagesgenaue Abrechnung, bezahlt werden nur erbrachte Leistungen' },
    ansprechpartner: { wertung: 'teils', kurz: 'Teils — persönlich, vor Ort nicht angegeben⁶', text: 'Persönlicher Ansprechpartner in den 3- und 12-Monats-Plänen; eine Betreuung vor Ort nennt die Website für Familien nicht; laut Franchise-Seite über 45 Franchise-Partner deutschlandweit' },
    erreichbarkeit: { wertung: 'teils', kurz: 'Im Notfall rund um die Uhr⁶', text: 'Laut Website während der Betreuung im Notfall rund um die Uhr erreichbar' },
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
    sofortpreis: { wertung: 'ja', kurz: 'Ja — Rechner, sofort nach den Angaben¹⁰', text: 'Online-Preisrechner: voraussichtliche Monatskosten sofort nach Eingabe der Kontaktdaten; dazu Beispielrechnungen ab 104 €/Tag' },
    kraefteSofort: { wertung: 'nein', kurz: 'Nein', text: 'Keine Profile im Online-Ablauf' },
    auswahlVorVertrag: { wertung: 'ka', kurz: 'k. A.', text: 'Betreuungsvorschlag nach Bedarfsanalyse, Anreise nach der Entscheidung der Familie; Zeitpunkt des Vertrags nicht beschrieben' },
    gebuehr: { wertung: 'nein', kurz: '418 € Pauschale', text: 'Erstaufnahmepauschale 418 € (eigene Angabe, mit Geld-zurück-Zusage)' },
    bindung: { wertung: 'teils', kurz: '14 Tage Kündigungsfrist¹⁰', text: 'Laut FAQ schriftliche Kündigung mit einer Frist von 14 Tagen, im Todesfall 7 Tage' },
    abrechnung: { wertung: 'teils', kurz: 'Tagespreise', text: 'Kalkulation in Tagespreisen (z. B. 104 €/Tag)' },
    ansprechpartner: { wertung: 'teils', kurz: 'Teils — Standorte mit Beratern¹⁰', text: 'Netzwerk von 19 Standorten mit Beraterinnen und Beratern; fester Ansprechpartner während der Vertragslaufzeit' },
    erreichbarkeit: { wertung: 'teils', kurz: 'Jederzeit für Vertragsfragen, ohne Zeiten¹⁰', text: 'Laut FAQ steht der feste Ansprechpartner bei Vertrags- und Rechnungsfragen jederzeit zur Verfügung; Zeiten oder Notfalldienst nennt die Website nicht' },
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
    sofortpreis: { wertung: 'ja', kurz: 'Ja — Rechner (Schätzung), ohne Kontaktdaten⁵', text: 'Online-Kostenrechner ohne Kontaktdaten als unverbindliche Schätzung; verbindliches Angebot nach Telefonberatung' },
    kraefteSofort: { wertung: 'nein', kurz: 'Nein', text: 'Keine Profile im Online-Ablauf' },
    auswahlVorVertrag: { wertung: 'ja', kurz: 'Ja — Vermittlung erst nach der Auswahl⁵', text: 'Auswahl aus Personalvorschlägen mit Lebenslauf und Telefonnummer; Vermittlung und Kosten erst nach der Entscheidung für eine Betreuungskraft' },
    gebuehr: { wertung: 'teils', kurz: 'ca. 17,85 €/Tag + 280 € unter 40 Tagen⁵', text: 'Vermittlungs- und Betreuungsleistung durchschnittlich 17,85 € pro Tag auf eigener Rechnung, keine Einmalgebühr; Kurzeinsatzpauschale 280 € bei Einsätzen unter 40 Tagen (eigene Angabe)' },
    bindung: { wertung: 'teils', kurz: 'Keine Mindestlaufzeit, 7 Tage Frist⁵', text: 'Keine Mindestlaufzeit, Kündigungsfrist 7 Tage, im Todesfall 3 Tage (eigene Angabe)' },
    abrechnung: { wertung: 'ja', kurz: 'Nach Vor-Ort-Zeit', text: '„Abrechnung … nur für den Zeitraum, in dem die Betreuungskraft vor Ort ist"' },
    ansprechpartner: { wertung: 'teils', kurz: 'Teils — regionaler Ansprechpartner⁵', text: 'Ansprechpartner aus der Region, laut Website mehr als 20 Geschäftsstellen in Deutschland, Österreich und der Schweiz; Termine vor Ort nennt die Website nicht ausdrücklich' },
    erreichbarkeit: { wertung: 'ja', kurz: 'Täglich, auch am Wochenende⁵', text: 'Fester Kundenbetreuer täglich erreichbar, telefonischer Bereitschaftsdienst am Wochenende (eigene Angabe)' },
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
// Angaben der Neuprüfung (⁵ DSB, ⁶ marta, ⁸ Promedica24, ⁹ Hausengel, ¹⁰ Linara).
export const FUSSNOTEN: { nr: string; text: string }[] = [
  { nr: '¹', text: 'Pflegehelden beschreibt den Ablauf so: „Personalvorschläge: Sie entscheiden sich für eine Zusammenarbeit und wählen Ihre gewünschte Pflegekraft aus." Laut der Seite zur Vermittlung von Pflegekräften (pflegehelden.de/leistungen/vermittlung-pflegekraefte/) folgen die Personalvorschläge, nachdem der Kunde das Angebot angenommen hat; Kundinnen und Kunden schließen laut pflegehelden.de einen Vermittlungsvertrag, auch das Anfrageformular spricht vom „Vermittlungsvertrag". Die Auswahl der Pflegekraft folgt damit auf die Annahme des Angebots.' },
  { nr: '²', text: 'Pflegehelden weist keine separate Vermittlungsgebühr aus; laut Website sind „Agenturgebühren einkalkuliert".' },
  { nr: '³', text: 'Pflegehelden zeigt auf der Kostenseite drei Beispielsituationen mit Kosten pro Tag (ab 95 € pro Tag) und nennt Kosten ab 2.850 € im Monat; ein individuelles Angebot gibt es nach Anfrage innerhalb eines Tages. Die Infobroschüre der Zentrale (06/25, auf pflegehelden.de) nennt eine taggenaue Abrechnung.' },
  { nr: '⁴', text: 'Hausengel: Die Familie lernt die in Frage kommenden Betreuungskräfte zunächst telefonisch kennen und entscheidet dann, an wen sie den Auftrag vergibt (hausengel.de/24-stunden-pflege/).' },
  { nr: '⁵', text: 'Deutsche Seniorenbetreuung: Ablauf „Pflegekräfte kontaktieren und kennen lernen" vor der Anreise; Familien wählen aus Personalvorschlägen mit Lebenslauf und Telefonnummer; die Vermittlung koordiniert die Deutsche Seniorenbetreuung laut eigener Angabe „nach Ihrer Entscheidung", Kosten entstehen erst nach der Entscheidung für eine Betreuungskraft. Kostenrechner ohne Kontaktdaten als unverbindliche Schätzung. Vermittlungs- und Betreuungsleistung durchschnittlich 17,85 € pro Tag auf eigener Rechnung, keine Einmalgebühr, 280 € bei Einsätzen unter 40 Tagen; keine Mindestlaufzeit, Kündigungsfrist 7 Tage. Mehr als 20 Geschäftsstellen, fester Kundenbetreuer täglich erreichbar, telefonischer Bereitschaftsdienst am Wochenende (deutsche-seniorenbetreuung.de, u. a. /24-stunden-pflege/, /regional/so-arbeiten-wir/, /pflegevermittlung/).' },
  { nr: '⁶', text: 'marta: Aufnahmegebühr laut Planübersicht 0 € (12 Monate), 499 € (3 Monate) oder 999 € (Notfallbetreuung), Planpreise ab 2.799 €; einen Einstieg ab 2.299 € nennt marta.de/24-stunden-betreuung. Nutzungsbedingungen: Mindestlaufzeit je Plan mit automatischer Verlängerung, danach Kündigungsfrist von einem Monat (Ziff. 5.1); wiederkehrende Plattformnutzungsgebühr ab der Betreuungsvereinbarung (Ziff. 4.1.2), nicht erhoben, solange eine Betreuungskraft vor Ort tätig ist (Ziff. 4.1.3). Die Startseite wirbt zudem mit einer Kündigung innerhalb von 7 Tagen bei Unzufriedenheit und nennt Notfallkontakt rund um die Uhr während der Betreuung; tagesgenaue Abrechnung laut marta.de/24-stunden-pflege; persönlicher Ansprechpartner in den 3- und 12-Monats-Plänen, über 45 Franchise-Partner laut marta.de/franchise.' },
  { nr: '⁷', text: 'Pflegehelden-FAQ: „Unsere Ansprechpartner*innen stehen Ihnen für allgemeine Fragen jederzeit zu ihren Geschäftszeiten zur Verfügung. In Notfällen können Sie sie auch außerhalb dieser Zeiten kontaktieren."' },
  { nr: '⁸', text: 'Promedica24: Preisliste auf promedica24.de/betreuungskosten/ mit drei Paketen und Tagespreisen ab 105 €, laut Fußnote dort inklusive Steuern, Sozialabgaben, Fahrtkosten, Betreuungs- und Vermittlungsgebühren sowie Versicherungen; andere Promedica24-Seiten werben mit einem Verzicht auf Vermittlungsgebühren; ein preisliches Angebot laut FAQ nach individueller Beratung, der Ablauf auf der Startseite beginnt mit einem Erstgespräch und einem Beratungstermin zu Hause; deutschsprachiger Kundenservice laut FAQ rund um die Uhr, 365 Tage. Die öffentlich abrufbare Franchise-FAQ (promedica24.de/franchise/haeufige-fragen/) nennt für Kundenverträge eine Mindestvertragslaufzeit von 2 Monaten und eine tagesgenaue Abrechnung über den Tagespreis. Zur Auswahl der Betreuungskraft nennt die Landingpage promedica24.de/24h-betreuung-promedica24/ einen gemeinsamen Schritt vor dem Angebot, die Startseite die Auswahl durch die Hauptstelle in Warschau.' },
  { nr: '⁹', text: 'Hausengel: Beispielrechnung auf hausengel.de/24-stunden-pflege/ (Gesamtbelastung 3.010 € im Monat, darin Vermittlung 220 € und Franchisegebühr ca. 490 €; Kosten laut Website ab 2.500 € im Monat); Muster-Dienstleistungsvertrag, dort verlinkt: § 4 monatliche Abrechnung der erbrachten Leistungen, § 7 Kündigungsfrist ein Monat. Persönlicher Ansprechpartner laut Website rund um die Uhr (24/7, 365 Tage); Beratung vor Ort mit Postleitzahlsuche auf hausengel.de/standorte-und-ansprechpartner/.' },
  { nr: '¹⁰', text: 'Linara: Online-Preisrechner (linara.de/preisrechner) mit den voraussichtlichen Monatskosten nach Eingabe der Kontaktdaten; Beispielrechnungen ab 104 € pro Tag (linara.de/leistungen-tarife). Laut FAQ auf linara.de/24-stunden-betreuung Kündigungsfrist 14 Tage (im Todesfall 7 Tage) und ein fester Ansprechpartner, der bei Vertrags- und Rechnungsfragen jederzeit zur Verfügung steht. 19 Standorte mit Beraterinnen und Beratern laut linara.de/standorte; Gründung 2008 laut linara.de/team.' },
]
