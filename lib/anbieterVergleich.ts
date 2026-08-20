// Zentrale Faktenbasis für alle Anbieter-Vergleichsseiten.
// JEDE Fremdangabe stammt von der eigenen Website des Anbieters —
// Quelle + Stand stehen pro Anbieter dabei und werden auf den Seiten
// ausgewiesen (§ 6 UWG: objektiv, nachprüfbar, nicht herabsetzend).
// Bei Änderungen: erst die Quelle prüfen, dann hier ändern — die
// Seiten (/24h-pflege-anbieter-vergleich, /pflegehelden-alternative, …)
// rendern ausschließlich aus dieser Datei.

export type Wertung = 'ja' | 'teils' | 'nein' | 'ka';

export interface Kriterium {
  wertung: Wertung;   // steuert das Icon
  kurz: string;       // knapper Tabellenwert („Ja", „Nein", „418 € Pauschale")
  text: string;       // der belegbare Wortlaut — erscheint als Fußnote/im Profil
}

export interface Anbieter {
  slug: string;
  name: string;
  kurz: string;                 // Einordnung in einem Satz
  preisAb: string;
  sofortpreis: Kriterium;       // Preis online sehen, ohne Kontakt
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

export const STAND = 'August 2026';

export const PRIMUNDUS: Anbieter = {
  slug: 'primundus',
  name: 'Primundus',
  kurz: 'Eigenes Betreuungspersonal, Preis und Kräfte sofort online',
  preisAb: 'ab 2.200 €/Monat',
  sofortpreis: { wertung: 'ja', kurz: 'Ja — in 2 Minuten', text: 'Preis in 2 Minuten online — ohne Rückruf, ohne Termin' },
  kraefteSofort: { wertung: 'ja', kurz: 'Ja — direkt mit dem Angebot', text: 'Direkt mit dem Angebot: passende Betreuungskräfte mit Erfahrung und Sprachkenntnissen einsehen und vergleichen' },
  auswahlVorVertrag: { wertung: 'ja', kurz: 'Ja', text: 'Erst wählen Sie Ihre Betreuungskraft aus — dann erst kommt der Vertrag' },
  gebuehr: { wertung: 'ja', kurz: 'Keine', text: 'Keine Vermittlungsgebühr, keine Aufnahme- oder Bearbeitungspauschale' },
  bindung: { wertung: 'ja', kurz: 'Keine — täglich kündbar', text: 'Keine Mindestlaufzeit — täglich kündbar' },
  abrechnung: { wertung: 'ja', kurz: 'Taggenau', text: 'Taggenau: bezahlt wird nur, was stattfindet' },
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
    sofortpreis: { wertung: 'nein', kurz: 'Nein — Angebot nach Anfrage', text: 'Angebot „innerhalb eines Tages" nach Fragebogen — kein Online-Preis' },
    kraefteSofort: { wertung: 'nein', kurz: 'Nein', text: 'Keine offen einsehbaren Profile; Vorschläge kommen im Vermittlungsprozess' },
    auswahlVorVertrag: { wertung: 'teils', kurz: 'Teils¹', text: 'Laut eigenem Ablauf: „Sie entscheiden sich für eine Zusammenarbeit und wählen Ihre gewünschte Pflegekraft aus" — Auswahl nach der Entscheidung' },
    gebuehr: { wertung: 'teils', kurz: 'Einkalkuliert²', text: 'Keine separate Gebühr ausgewiesen — „Agenturgebühren einkalkuliert"' },
    bindung: { wertung: 'ja', kurz: '„Jederzeit kündbar“', text: '„Jederzeit kündbar" (eigene Angabe); konkrete Frist nicht genannt — die AGB sind nicht öffentlich einsehbar' },
    abrechnung: { wertung: 'teils', kurz: 'Tagespreise³', text: 'Kosten werden pro Tag dargestellt; taggenaue Abrechnung nicht ausdrücklich zugesagt' },
    ansprechpartner: { wertung: 'ja', kurz: 'Ja — vor Ort (Franchise)', text: 'Persönliche Ansprechpartner vor Ort (Franchise-Partner)' },
    erreichbarkeit: { wertung: 'teils', kurz: 'Geschäftszeiten⁷', text: 'Laut FAQ zu Geschäftszeiten erreichbar, in Notfällen auch außerhalb' },
    modell: 'Vermittlung über Franchise-System, überwiegend polnische Betreuungskräfte',
    staerken: ['Seit 2005 am Markt', 'Regionale Ansprechpartner in allen Bundesländern', 'Breites Standortnetz'],
    quelle: 'pflegehelden.de',
    stand: STAND,
  },
  {
    slug: 'promedica24',
    name: 'Promedica24',
    kurz: 'Großer Entsende-Anbieter mit Franchise-Partnern (Promedica Plus)',
    preisAb: 'Preis erst nach Beratung',
    sofortpreis: { wertung: 'nein', kurz: 'Nein — erst nach Beratung', text: '„Ein preisliches Angebot kann erst nach einer individuellen Beratung gemacht werden"' },
    kraefteSofort: { wertung: 'nein', kurz: 'Nein', text: 'Zentrale in Warschau wählt aus dem eigenen Pool aus — keine offenen Profile' },
    auswahlVorVertrag: { wertung: 'ka', kurz: 'k. A.', text: 'Kein offener Auswahlschritt beschrieben' },
    gebuehr: { wertung: 'ka', kurz: 'k. A.', text: 'Keine Angabe auf der Website' },
    bindung: { wertung: 'ka', kurz: 'k. A.', text: 'Keine Angabe auf der Website' },
    abrechnung: { wertung: 'ka', kurz: 'k. A.', text: 'Keine Angabe auf der Website' },
    ansprechpartner: { wertung: 'ja', kurz: 'Ja — vor Ort (Franchise)', text: 'Franchise-Partner als „erster Ansprechpartner vor Ort"' },
    erreichbarkeit: { wertung: 'ka', kurz: 'k. A.', text: 'Keine Angabe auf der Website' },
    modell: 'Entsendemodell, Betreuungskräfte aus Osteuropa',
    staerken: ['Über 6.800 Betreuungskräfte im Pool (eigene Angabe)', 'Ansprechpartner vor Ort'],
    quelle: 'promedica24.de',
    stand: STAND,
  },
  {
    slug: 'hausengel',
    name: 'Hausengel',
    kurz: 'Vermittlung selbstständiger Betreuungskräfte',
    preisAb: 'ab 945 € Eigenanteil (eigene Angabe — nach Abzug von Zuschüssen, kein Gesamtpreis)',
    sofortpreis: { wertung: 'nein', kurz: 'Nein', text: 'Kein Online-Preis — kostenloses Beratungsgespräch als Einstieg' },
    kraefteSofort: { wertung: 'nein', kurz: 'Nein', text: 'Keine offen einsehbaren Profile' },
    auswahlVorVertrag: { wertung: 'teils', kurz: 'Teils⁴', text: '„Sie lernen Ihre Betreuungskraft vorab kennen" — vor der Anreise, Details zum Zeitpunkt offen' },
    gebuehr: { wertung: 'ka', kurz: 'k. A.', text: 'Keine Angabe auf der Website' },
    bindung: { wertung: 'ka', kurz: 'k. A.', text: 'Keine Angabe auf der Website' },
    abrechnung: { wertung: 'ka', kurz: 'k. A.', text: 'Keine Angabe auf der Website' },
    ansprechpartner: { wertung: 'teils', kurz: 'Teils', text: '„Wir sind persönlich für Sie da" — regionale Struktur nicht ausgewiesen' },
    erreichbarkeit: { wertung: 'ka', kurz: 'k. A.', text: 'Keine Angabe auf der Website' },
    modell: 'Selbstständige Betreuungskräfte',
    staerken: ['Bekannte Marke', 'Kennenlernen der Betreuungskraft vorab'],
    quelle: 'hausengel.de',
    stand: STAND,
  },
  {
    slug: 'marta',
    name: 'marta',
    kurz: 'Online-Plattform, Familien wählen aus Profilen',
    preisAb: 'ab ca. 2.005 €/Monat Eigenanteil (eigene Angabe, je nach Plan)',
    sofortpreis: { wertung: 'ja', kurz: 'Ja — Preistabellen', text: 'Preistabellen offen auf der Website' },
    kraefteSofort: { wertung: 'teils', kurz: 'Nach Registrierung', text: 'Profile einsehbar — nach kostenloser Registrierung' },
    auswahlVorVertrag: { wertung: 'ja', kurz: 'Ja', text: 'Familie wählt das Profil aus, Kennenlernen vorab möglich' },
    gebuehr: { wertung: 'nein', kurz: '99–999 € + laufende Gebühr⁶', text: 'Aufnahmegebühr je nach Plan 99 € bis 999 €; nach Vertragsabschluss fällt laut Nutzungsbedingungen zusätzlich eine wiederkehrende Plattformnutzungsgebühr an' },
    bindung: { wertung: 'nein', kurz: '3–12 Monate + 1 Monat Frist⁶', text: 'Pläne mit 3 bzw. 12 Monaten Laufzeit; laut Nutzungsbedingungen gilt nach der Mindestlaufzeit eine Kündigungsfrist von einem Monat' },
    abrechnung: { wertung: 'ka', kurz: 'k. A.', text: 'Keine Angabe zur taggenauen Abrechnung' },
    ansprechpartner: { wertung: 'nein', kurz: 'Nein — zentral', text: 'Persönlicher Ansprechpartner (zentral), nicht vor Ort' },
    erreichbarkeit: { wertung: 'ka', kurz: 'k. A.', text: 'Keine Angabe auf der Website' },
    modell: 'Plattform — der Betreuungsvertrag entsteht ausschließlich zwischen Familie und Betreuungsdienstleister',
    staerken: ['Profile online vergleichbar', 'Transparente Preistabellen'],
    quelle: 'marta.de inkl. Nutzungsbedingungen',
    stand: STAND,
  },
  {
    slug: 'linara',
    name: 'Linara',
    kurz: 'Vermittlung selbstständiger Betreuungspersonen, seit 2006',
    preisAb: 'ab ca. 2.800 €/Monat (eigene Angabe)',
    sofortpreis: { wertung: 'teils', kurz: 'Teils — Beispiele', text: 'Beispielrechnungen online — individueller Preis erst nach Anfrage' },
    kraefteSofort: { wertung: 'nein', kurz: 'Nein', text: 'Keine offen einsehbaren Profile' },
    auswahlVorVertrag: { wertung: 'ka', kurz: 'k. A.', text: '„Sorgfältige Auswahl" beschrieben — Zeitpunkt der Kundenauswahl offen' },
    gebuehr: { wertung: 'nein', kurz: '418 € Pauschale', text: 'Erstaufnahmepauschale 418 € (eigene Angabe, mit Geld-zurück-Zusage)' },
    bindung: { wertung: 'ka', kurz: 'k. A.', text: 'Keine Angabe auf der Website' },
    abrechnung: { wertung: 'teils', kurz: 'Tagespreise', text: 'Kalkulation in Tagespreisen (z. B. 104 €/Tag)' },
    ansprechpartner: { wertung: 'teils', kurz: 'Teils', text: 'Mehrere Standorte, Beraterinnen und Berater' },
    erreichbarkeit: { wertung: 'ka', kurz: 'k. A.', text: 'Keine Angabe auf der Website' },
    modell: 'Ausschließlich selbstständige Betreuungspersonen (eigene Angabe)',
    staerken: ['Lange am Markt', 'Transparente Beispielrechnungen'],
    quelle: 'linara.de',
    stand: STAND,
  },
  {
    slug: 'deutsche-seniorenbetreuung',
    name: 'Deutsche Seniorenbetreuung',
    kurz: 'Vermittlungsnetzwerk mit regionalen Partnern',
    preisAb: 'ab 2.990 €/Monat (eigene Angabe)',
    sofortpreis: { wertung: 'teils', kurz: 'Richtwert-Rechner', text: 'Online-Richtwertrechner — verbindliches Angebot erst nach Telefonberatung' },
    kraefteSofort: { wertung: 'nein', kurz: 'Nein', text: 'Keine offen einsehbaren Profile' },
    auswahlVorVertrag: { wertung: 'teils', kurz: 'Teils⁵', text: '„Pflegekräfte kontaktieren und kennen lernen" vor der Anreise' },
    gebuehr: { wertung: 'teils', kurz: '280 € unter 40 Tagen', text: 'Kurzeinsatzpauschale 280 € bei Einsätzen unter 40 Tagen (eigene Angabe)' },
    bindung: { wertung: 'ka', kurz: 'k. A.', text: 'Keine Angabe auf der Website' },
    abrechnung: { wertung: 'ja', kurz: 'Nach Vor-Ort-Zeit', text: '„Abrechnung … nur für den Zeitraum, in dem die Betreuungskraft vor Ort ist"' },
    ansprechpartner: { wertung: 'teils', kurz: 'Teils', text: 'Regionale Partner erwähnt' },
    erreichbarkeit: { wertung: 'ka', kurz: 'k. A.', text: 'Keine Angabe auf der Website' },
    modell: 'Entsendemodell, osteuropäische Betreuungskräfte',
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

// Fußnoten zu den Kurzwerten in den Vergleichstabellen — die wörtlichen
// Belege von den Anbieter-Websites (rechtlich relevant, nicht kürzen).
export const FUSSNOTEN: { nr: string; text: string }[] = [
  { nr: '¹', text: 'Pflegehelden beschreibt den Ablauf so: „Sie entscheiden sich für eine Zusammenarbeit und wählen Ihre gewünschte Pflegekraft aus" — die Auswahl folgt auf die Entscheidung.' },
  { nr: '²', text: 'Pflegehelden weist keine separate Vermittlungsgebühr aus; laut Website sind „Agenturgebühren einkalkuliert".' },
  { nr: '³', text: 'Pflegehelden stellt Kosten pro Tag dar; eine taggenaue Abrechnung wird nicht ausdrücklich zugesagt.' },
  { nr: '⁴', text: 'Hausengel: „Sie lernen Ihre Betreuungskraft vorab kennen" — der Zeitpunkt im Prozess bleibt offen.' },
  { nr: '⁵', text: 'Deutsche Seniorenbetreuung: „Pflegekräfte kontaktieren und kennen lernen" vor der Anreise.' },
  { nr: '⁶', text: 'marta-Nutzungsbedingungen: nach der Mindestlaufzeit jederzeitiges Kündigungsrecht mit einer Frist von einem Monat; nach Vertragsabschluss fällt eine wiederkehrende Plattformnutzungsgebühr an.' },
  { nr: '⁷', text: 'Pflegehelden-FAQ: „Unsere Ansprechpartner:innen stehen Ihnen für allgemeine Fragen jederzeit zu ihren Geschäftszeiten zur Verfügung. In Notfällen können Sie sie auch außerhalb dieser Zeiten kontaktieren."' },
]
