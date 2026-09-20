// lib/begutachtung.ts — das Begutachtungsinstrument nach § 15 SGB XI mit Anlage 1 (Einzelpunkte)
// und Anlage 2 (gewichtete Punkte), Rechtsstand gesetze-im-internet.de, gelesen am 20.09.2026.
//
// Alle Kriterien, Kategorien, Einzelpunkte, Punktbereiche und die Pflegegrad-Grenzen stehen hier
// wörtlich nach dem Gesetz. Die Erklärungen zu den Kriterien sind unsere Kurzfassung der
// Begutachtungs-Richtlinien für Angehörige. Der Rechner in components/werkzeuge/PflegegradRechner.tsx
// liest nur diese Datei; scripts/test-begutachtung.mjs prüft die Rechnung gegen Beispiele.

/** Die vier Stufen der Selbständigkeit (Module 1, 4, 6 und Kriterium 5.16) */
export const STUFEN_SELBSTAENDIG = ['selbständig', 'überwiegend selbständig', 'überwiegend unselbständig', 'unselbständig'] as const
/** Die vier Stufen der Fähigkeit (Modul 2) */
export const STUFEN_FAEHIGKEIT = ['vorhanden', 'größtenteils vorhanden', 'in geringem Maße vorhanden', 'nicht vorhanden'] as const
/** Die vier Häufigkeiten (Modul 3) */
export const STUFEN_HAEUFIGKEIT = ['nie oder sehr selten', 'selten (1- bis 3-mal in zwei Wochen)', 'häufig (mehrmals pro Woche, nicht täglich)', 'täglich'] as const

export const ERKLAERUNG_STUFEN: Record<'selbstaendig' | 'faehigkeit' | 'haeufigkeit', string[]> = {
  selbstaendig: [
    'Die Person schafft es allein, auch mit Hilfsmitteln oder wenn es länger dauert.',
    'Es reicht wenig Hilfe: etwas zurechtlegen, erinnern, anleiten, kurz beaufsichtigen.',
    'Andere übernehmen den größeren Teil; die Person macht noch mit.',
    'Andere übernehmen fast alles; die Person kann sich kaum beteiligen.',
  ],
  faehigkeit: [
    'Die Fähigkeit ist da, keine Einschränkung im Alltag.',
    'Meist da, gelegentlich Fehler oder Unsicherheit.',
    'Nur noch in Ansätzen da, viele Fehler, oft Hilfe nötig.',
    'Die Fähigkeit fehlt ganz oder fast ganz.',
  ],
  haeufigkeit: [
    'Kommt nicht oder nur ausnahmsweise vor.',
    'Ein- bis dreimal innerhalb von zwei Wochen.',
    'Zweimal bis mehrmals in der Woche, aber nicht täglich.',
    'Jeden Tag.',
  ],
}

export type Kriterium = { nr: string; name: string; erklaerung: string; punkte: readonly number[] }

/** Modul 1 (10 %): fünf Kriterien, 0/1/2/3 Punkte */
export const MODUL1: Kriterium[] = [
  { nr: '1.1', name: 'Positionswechsel im Bett', erklaerung: 'Sich im Liegen drehen, aufsetzen, wieder hinlegen.', punkte: [0, 1, 2, 3] },
  { nr: '1.2', name: 'Halten einer stabilen Sitzposition', erklaerung: 'Auf einem Stuhl oder an der Bettkante sitzen, ohne zu kippen oder abzurutschen.', punkte: [0, 1, 2, 3] },
  { nr: '1.3', name: 'Umsetzen', erklaerung: 'Vom Bett auf den Stuhl, Rollstuhl oder Toilettenstuhl wechseln und zurück.', punkte: [0, 1, 2, 3] },
  { nr: '1.4', name: 'Fortbewegen innerhalb des Wohnbereichs', erklaerung: 'Von einem Raum in den anderen kommen, auch mit Rollator oder Rollstuhl, wenn es ohne Hilfe geht.', punkte: [0, 1, 2, 3] },
  { nr: '1.5', name: 'Treppensteigen', erklaerung: 'Eine Etage hinauf und hinunter. Wird auch bewertet, wenn es in der Wohnung keine Treppe gibt.', punkte: [0, 1, 2, 3] },
]

/** Modul 2 (15 % gemeinsam mit Modul 3): elf Kriterien, 0/1/2/3 Punkte */
export const MODUL2: Kriterium[] = [
  { nr: '2.1', name: 'Erkennen von Personen aus dem näheren Umfeld', erklaerung: 'Angehörige, Nachbarn, die Pflegeperson erkennen und einordnen.', punkte: [0, 1, 2, 3] },
  { nr: '2.2', name: 'Örtliche Orientierung', erklaerung: 'Wissen, wo man ist; den Weg in der Wohnung und in der Nachbarschaft finden.', punkte: [0, 1, 2, 3] },
  { nr: '2.3', name: 'Zeitliche Orientierung', erklaerung: 'Tageszeit, Wochentag, Monat und Jahreszeit einordnen.', punkte: [0, 1, 2, 3] },
  { nr: '2.4', name: 'Erinnern an wesentliche Ereignisse oder Beobachtungen', erklaerung: 'Was heute Morgen war, wer zu Besuch war, wichtige Stationen des eigenen Lebens.', punkte: [0, 1, 2, 3] },
  { nr: '2.5', name: 'Steuern von mehrschrittigen Alltagshandlungen', erklaerung: 'Eine Handlung mit mehreren Schritten in der richtigen Reihenfolge schaffen, zum Beispiel Kaffee kochen oder sich anziehen.', punkte: [0, 1, 2, 3] },
  { nr: '2.6', name: 'Treffen von Entscheidungen im Alltag', erklaerung: 'Selbst entscheiden, was man anzieht, isst oder wann man aufsteht, und diese Entscheidung sinnvoll treffen.', punkte: [0, 1, 2, 3] },
  { nr: '2.7', name: 'Verstehen von Sachverhalten und Informationen', erklaerung: 'Erklärungen, Nachrichten oder einen Brief inhaltlich verstehen.', punkte: [0, 1, 2, 3] },
  { nr: '2.8', name: 'Erkennen von Risiken und Gefahren', erklaerung: 'Herdplatte, Straßenverkehr, Glatteis, Stolperfallen als Gefahr erkennen.', punkte: [0, 1, 2, 3] },
  { nr: '2.9', name: 'Mitteilen von elementaren Bedürfnissen', erklaerung: 'Hunger, Durst, Schmerzen, Kälte oder den Gang zur Toilette verständlich machen, auch ohne Worte.', punkte: [0, 1, 2, 3] },
  { nr: '2.10', name: 'Verstehen von Aufforderungen', erklaerung: 'Einfache Bitten verstehen und umsetzen, zum Beispiel „Bitte setzen Sie sich".', punkte: [0, 1, 2, 3] },
  { nr: '2.11', name: 'Beteiligen an einem Gespräch', erklaerung: 'Einem Gespräch folgen, passend antworten, selbst etwas beitragen.', punkte: [0, 1, 2, 3] },
]

/** Modul 3 (15 % gemeinsam mit Modul 2): 13 Kriterien nach Häufigkeit, 0/1/3/5 Punkte */
export const MODUL3: Kriterium[] = [
  { nr: '3.1', name: 'Motorisch geprägte Verhaltensauffälligkeiten', erklaerung: 'Zielloses Umherlaufen, Weglaufen, ständiges Aufstehen, Nesteln.', punkte: [0, 1, 3, 5] },
  { nr: '3.2', name: 'Nächtliche Unruhe', erklaerung: 'Nachts aufstehen, umherwandern, den Tag-Nacht-Rhythmus verlieren.', punkte: [0, 1, 3, 5] },
  { nr: '3.3', name: 'Selbstschädigendes und autoaggressives Verhalten', erklaerung: 'Sich selbst verletzen, Ungenießbares essen, sich schlagen.', punkte: [0, 1, 3, 5] },
  { nr: '3.4', name: 'Beschädigen von Gegenständen', erklaerung: 'Dinge zerreißen, umwerfen, zerbrechen.', punkte: [0, 1, 3, 5] },
  { nr: '3.5', name: 'Physisch aggressives Verhalten gegenüber anderen Personen', erklaerung: 'Schlagen, Kratzen, Beißen, Wegstoßen.', punkte: [0, 1, 3, 5] },
  { nr: '3.6', name: 'Verbale Aggression', erklaerung: 'Beschimpfen, Drohen, Beleidigen.', punkte: [0, 1, 3, 5] },
  { nr: '3.7', name: 'Andere pflegerelevante vokale Auffälligkeiten', erklaerung: 'Lautes Rufen, Schreien, Klagen, ständiges Wiederholen von Sätzen.', punkte: [0, 1, 3, 5] },
  { nr: '3.8', name: 'Abwehr pflegerischer und anderer unterstützender Maßnahmen', erklaerung: 'Waschen, Anziehen, Medikamente oder Hilfe verweigern, wegdrücken.', punkte: [0, 1, 3, 5] },
  { nr: '3.9', name: 'Wahnvorstellungen', erklaerung: 'Sich verfolgt oder bestohlen fühlen, Menschen oder Dinge sehen, die nicht da sind.', punkte: [0, 1, 3, 5] },
  { nr: '3.10', name: 'Ängste', erklaerung: 'Panik, Angst vor dem Alleinsein, vor Menschen oder Situationen, die den Alltag einschränken.', punkte: [0, 1, 3, 5] },
  { nr: '3.11', name: 'Antriebslosigkeit bei depressiver Stimmungslage', erklaerung: 'Nichts von sich aus beginnen, sich zurückziehen, Interesse an allem verlieren.', punkte: [0, 1, 3, 5] },
  { nr: '3.12', name: 'Sozial inadäquate Verhaltensweisen', erklaerung: 'Distanzlosigkeit, unpassende Bemerkungen, Fremde anfassen, sich entkleiden.', punkte: [0, 1, 3, 5] },
  { nr: '3.13', name: 'Sonstige pflegerelevante inadäquate Handlungen', erklaerung: 'Mit Kot schmieren, Dinge verstecken oder horten, Essbares wegwerfen.', punkte: [0, 1, 3, 5] },
]

/** Modul 4 (40 %): 4.1 bis 4.12 mit Selbständigkeitsstufen (Essen, Trinken und Toilette zählen mehr), 4.13 gesondert */
export const MODUL4: Kriterium[] = [
  { nr: '4.1', name: 'Waschen des vorderen Oberkörpers', erklaerung: 'Gesicht, Hals, Arme, Hände und Brust am Waschbecken waschen und abtrocknen.', punkte: [0, 1, 2, 3] },
  { nr: '4.2', name: 'Körperpflege im Bereich des Kopfes', erklaerung: 'Kämmen, Zähne putzen oder Prothese reinigen, Rasieren.', punkte: [0, 1, 2, 3] },
  { nr: '4.3', name: 'Waschen des Intimbereichs', erklaerung: 'Den Intimbereich waschen und abtrocknen.', punkte: [0, 1, 2, 3] },
  { nr: '4.4', name: 'Duschen und Baden einschließlich Waschen der Haare', erklaerung: 'In die Dusche oder Wanne steigen, sich ganz waschen, Haare waschen, abtrocknen.', punkte: [0, 1, 2, 3] },
  { nr: '4.5', name: 'An- und Auskleiden des Oberkörpers', erklaerung: 'Unterhemd, Hemd, Pullover, Jacke an- und ausziehen, Knöpfe schließen.', punkte: [0, 1, 2, 3] },
  { nr: '4.6', name: 'An- und Auskleiden des Unterkörpers', erklaerung: 'Unterhose, Hose, Strümpfe und Schuhe an- und ausziehen.', punkte: [0, 1, 2, 3] },
  { nr: '4.7', name: 'Mundgerechtes Zubereiten der Nahrung und Eingießen von Getränken', erklaerung: 'Brot schneiden und belegen, Fleisch klein schneiden, Getränke eingießen. Nicht: Kochen.', punkte: [0, 1, 2, 3] },
  { nr: '4.8', name: 'Essen', erklaerung: 'Nahrung zum Mund führen, kauen, schlucken; dabei ausreichend und regelmäßig essen. Zählt dreifach.', punkte: [0, 3, 6, 9] },
  { nr: '4.9', name: 'Trinken', erklaerung: 'Aus Glas oder Tasse trinken und genug trinken, auch ans Trinken denken. Zählt doppelt.', punkte: [0, 2, 4, 6] },
  { nr: '4.10', name: 'Benutzen einer Toilette oder eines Toilettenstuhls', erklaerung: 'Hingehen, Kleidung richten, hinsetzen, Intimhygiene, aufstehen. Zählt doppelt.', punkte: [0, 2, 4, 6] },
  { nr: '4.11', name: 'Bewältigen der Folgen einer Harninkontinenz und Umgang mit Dauerkatheter und Urostoma', erklaerung: 'Einlagen wechseln, Katheterbeutel leeren, Hautpflege. Zählt nur bei überwiegender oder vollständiger Inkontinenz oder künstlicher Ableitung.', punkte: [0, 1, 2, 3] },
  { nr: '4.12', name: 'Bewältigen der Folgen einer Stuhlinkontinenz und Umgang mit Stoma', erklaerung: 'Einlagen wechseln, Stoma versorgen, reinigen. Zählt nur bei überwiegender oder vollständiger Inkontinenz oder Stoma.', punkte: [0, 1, 2, 3] },
]
/** 4.13: entfällt / teilweise / vollständig (Anlage 1: teilweise 6, vollständig 3 Punkte) */
export const MODUL4_SONDE: Kriterium = {
  nr: '4.13',
  name: 'Ernährung parenteral oder über Sonde',
  erklaerung: 'Nur wenn auf Dauer, voraussichtlich mindestens sechs Monate, täglich Sondenkost oder Infusionen nötig sind und die Person sie nicht selbst durchführen kann. „Teilweise" heißt: zusätzlich zum normalen Essen (6 Punkte, weil beides Hilfe braucht). „Vollständig" heißt: fast ausschließlich über Sonde oder Infusion (3 Punkte).',
  punkte: [0, 6, 3],
}
export const STUFEN_SONDE = ['entfällt', 'teilweise', 'vollständig'] as const
/** 4.K ersetzt bei Kindern bis 18 Monate die Kriterien 4.1 bis 4.13: 20 Punkte, wenn gravierende Probleme bei der Nahrungsaufnahme bestehen */
export const MODUL4_KIND = {
  nr: '4.K',
  name: 'Gravierende Probleme bei der Nahrungsaufnahme',
  erklaerung: 'Bei Kindern bis 18 Monate ersetzt diese eine Frage die Selbstversorgung: Bestehen gravierende Probleme bei der Nahrungsaufnahme, die einen außergewöhnlich pflegeintensiven Hilfebedarf auslösen? Dann gibt es 20 Punkte.',
  punkte: 20,
}

/** Modul 5 (20 %), Teil 1: 5.1 bis 5.7, Häufigkeit der Maßnahmen, die die Person nicht selbst durchführen kann */
export const MODUL5_TEIL1: Kriterium[] = [
  { nr: '5.1', name: 'Medikation', erklaerung: 'Tabletten richten und geben, Tropfen, Salben, Augentropfen, Inhalation.', punkte: [] },
  { nr: '5.2', name: 'Injektionen', erklaerung: 'Spritzen unter die Haut oder in den Muskel, zum Beispiel Insulin oder Thrombosespritzen.', punkte: [] },
  { nr: '5.3', name: 'Versorgung intravenöser Zugänge (Port)', erklaerung: 'Port oder Venenzugang spülen, Verband wechseln.', punkte: [] },
  { nr: '5.4', name: 'Absaugen und Sauerstoffgabe', erklaerung: 'Atemwege absaugen, Sauerstoffgerät anlegen und bedienen.', punkte: [] },
  { nr: '5.5', name: 'Einreibungen oder Kälte- und Wärmeanwendungen', erklaerung: 'Ärztlich verordnete Einreibungen, Kühlpacks, Wärmflasche, Rotlicht.', punkte: [] },
  { nr: '5.6', name: 'Messung und Deutung von Körperzuständen', erklaerung: 'Blutzucker, Blutdruck, Gewicht, Temperatur messen und die Werte einordnen.', punkte: [] },
  { nr: '5.7', name: 'Körpernahe Hilfsmittel', erklaerung: 'Kompressionsstrümpfe, Prothesen, Orthesen, Hörgerät oder Brille anlegen, reinigen, warten.', punkte: [] },
]
/** Modul 5, Teil 2: 5.8 bis 5.11 */
export const MODUL5_TEIL2: Kriterium[] = [
  { nr: '5.8', name: 'Verbandswechsel und Wundversorgung', erklaerung: 'Wunden reinigen, Verbände und Pflaster wechseln.', punkte: [] },
  { nr: '5.9', name: 'Versorgung mit Stoma', erklaerung: 'Künstlichen Darm- oder Blasenausgang versorgen, Beutel wechseln.', punkte: [] },
  { nr: '5.10', name: 'Regelmäßige Einmalkatheterisierung und Nutzung von Abführmethoden', erklaerung: 'Einmalkatheter, Einläufe, Zäpfchen, digitales Ausräumen.', punkte: [] },
  { nr: '5.11', name: 'Therapiemaßnahmen in häuslicher Umgebung', erklaerung: 'Übungen aus Krankengymnastik, Logopädie oder Ergotherapie, die zu Hause mit Hilfe gemacht werden müssen.', punkte: [] },
]
/** Modul 5, Teil 3: 5.12 bis 5.15 und 5.K (Kinder) mit Multiplikatoren nach Anlage 1 */
export const MODUL5_TEIL3 = [
  { nr: '5.12', name: 'Zeit- und technikintensive Maßnahmen in häuslicher Umgebung', erklaerung: 'Heimdialyse, Beatmung, Wechsel großer Verbände. Täglich = 60 Punkte, jede wöchentliche Maßnahme 8,6, jede monatliche 2.', taeglich: 60, woche: 8.6, monat: 2 },
  { nr: '5.13', name: 'Arztbesuche', erklaerung: 'Regelmäßige Besuche beim Hausarzt oder Facharzt, zu denen die Person begleitet werden muss. Jede Woche 4,3 Punkte, jeden Monat 1 Punkt.', taeglich: null, woche: 4.3, monat: 1 },
  { nr: '5.14', name: 'Besuch anderer medizinischer oder therapeutischer Einrichtungen (bis zu drei Stunden)', erklaerung: 'Physiotherapie, Ergotherapie, Logopädie, Fußpflege beim Podologen. Jede Woche 4,3 Punkte, jeden Monat 1 Punkt.', taeglich: null, woche: 4.3, monat: 1 },
  { nr: '5.15', name: 'Zeitlich ausgedehnte Besuche anderer medizinischer oder therapeutischer Einrichtungen (länger als drei Stunden)', erklaerung: 'Dialyse, Chemotherapie, Tagesklinik. Jede Woche 8,6 Punkte, jeden Monat 2 Punkte.', taeglich: null, woche: 8.6, monat: 2 },
  { nr: '5.K', name: 'Besuche von Einrichtungen zur Frühförderung bei Kindern', erklaerung: 'Nur bei Kindern: Frühförderstelle, sozialpädiatrisches Zentrum. Jede Woche 4,3 Punkte, jeden Monat 1 Punkt.', taeglich: null, woche: 4.3, monat: 1, nurKinder: true },
] as const
/** 5.16 mit Selbständigkeitsstufen */
export const MODUL5_DIAET: Kriterium = {
  nr: '5.16',
  name: 'Einhaltung einer Diät und anderer krankheits- oder therapiebedingter Verhaltensvorschriften',
  erklaerung: 'Diabetes-Diät, Flüssigkeitsbegrenzung bei Nierenschwäche, Bettruhe, Schonung nach einer Operation.',
  punkte: [0, 1, 2, 3],
}

/** Modul 6 (15 %): sechs Kriterien, 0/1/2/3 Punkte */
export const MODUL6: Kriterium[] = [
  { nr: '6.1', name: 'Gestaltung des Tagesablaufs und Anpassung an Veränderungen', erklaerung: 'Den Tag selbst einteilen, mit ungeplanten Änderungen zurechtkommen.', punkte: [0, 1, 2, 3] },
  { nr: '6.2', name: 'Ruhen und Schlafen', erklaerung: 'Einen Schlafrhythmus halten, zur Ruhe kommen, bei Bedarf tagsüber ruhen.', punkte: [0, 1, 2, 3] },
  { nr: '6.3', name: 'Sichbeschäftigen', erklaerung: 'Lesen, Radio hören, Handarbeit, Rätsel, Gartenarbeit: sich allein sinnvoll beschäftigen.', punkte: [0, 1, 2, 3] },
  { nr: '6.4', name: 'Vornehmen von in die Zukunft gerichteten Planungen', erklaerung: 'Termine vereinbaren, einen Besuch oder Ausflug planen, Vorräte im Blick haben.', punkte: [0, 1, 2, 3] },
  { nr: '6.5', name: 'Interaktion mit Personen im direkten Kontakt', erklaerung: 'Auf Menschen im Raum reagieren, Gespräch, Blick, Gestik erwidern.', punkte: [0, 1, 2, 3] },
  { nr: '6.6', name: 'Kontaktpflege zu Personen außerhalb des direkten Umfelds', erklaerung: 'Telefonieren, schreiben, Freunde und Verwandte treffen oder einladen.', punkte: [0, 1, 2, 3] },
]

/** Anlage 2: Summe der Einzelpunkte je Modul → gewichtete Punkte (Punktbereich 0 bis 4) */
export const GEWICHTET = {
  modul1: { grenzen: [2, 4, 6, 10], punkte: [0, 2.5, 5, 7.5, 10] },
  modul2: { grenzen: [2, 6, 11, 17], punkte: [0, 3.75, 7.5, 11.25, 15] },
  modul3: { grenzen: [1, 3, 5, 7], punkte: [0, 3.75, 7.5, 11.25, 15] },
  modul4: { grenzen: [3, 8, 19, 37], punkte: [0, 10, 20, 30, 40] },
  modul5: { grenzen: [1, 2, 4, 6], punkte: [0, 5, 10, 15, 20] },
  modul6: { grenzen: [1, 4, 7, 12], punkte: [0, 3.75, 7.5, 11.25, 15] },
} as const
export const GEWICHTE_PROZENT = { modul1: 10, modul2und3: 15, modul4: 40, modul5: 20, modul6: 15 } as const
export const SCHWEREGRAD = ['keine', 'geringe', 'erhebliche', 'schwere', 'schwerste'] as const

/** Punktbereich 0–4 aus der Summe der Einzelpunkte */
export function punktbereich(summe: number, g: { grenzen: readonly number[] }): number {
  let bereich = 0
  for (const grenze of g.grenzen) if (summe >= grenze) bereich += 1
  return bereich
}
export function gewichtetePunkte(summe: number, g: { grenzen: readonly number[]; punkte: readonly number[] }): number {
  return g.punkte[punktbereich(summe, g)]
}

/** Häufigkeit einer Maßnahme, wie der Gutachter sie erfasst */
export type Haeufigkeit = { einheit: 'keine' | 'tag' | 'woche' | 'monat'; anzahl: number }
export const KEINE: Haeufigkeit = { einheit: 'keine', anzahl: 0 }

/** Umrechnung in Maßnahmen pro Tag (Anlage 1: Woche ÷ 7, Monat ÷ 30) */
export function proTag(liste: Haeufigkeit[]): number {
  let summe = 0
  for (const h of liste) {
    if (h.einheit === 'tag') summe += h.anzahl
    else if (h.einheit === 'woche') summe += h.anzahl / 7
    else if (h.einheit === 'monat') summe += h.anzahl / 30
  }
  return summe
}
/** 5.1 bis 5.7: seltener als 1× täglich 0 · 1 bis 3× täglich 1 · mehr als 3 bis 8× 2 · mehr als 8× 3 */
export function punkteTeil1(liste: Haeufigkeit[]): number {
  const d = proTag(liste)
  if (d < 1) return 0
  if (d <= 3) return 1
  if (d <= 8) return 2
  return 3
}
/** 5.8 bis 5.11: seltener als 1× wöchentlich 0 · ein- bis mehrmals wöchentlich 1 · ein- bis unter 3× täglich 2 · mindestens 3× täglich 3 */
export function punkteTeil2(liste: Haeufigkeit[]): number {
  const d = proTag(liste)
  if (d < 1 / 7) return 0
  if (d < 1) return 1
  if (d < 3) return 2
  return 3
}
/** 5.12 bis 5.15 (und 5.K): gewichtete Häufigkeiten addieren, dann Einzelpunkte 0/1/2/3/6 */
export function punkteTeil3(liste: { h: Haeufigkeit; taeglich: number | null; woche: number; monat: number }[]): { summe: number; punkte: number } {
  let summe = 0
  for (const e of liste) {
    if (e.h.einheit === 'tag') summe += e.taeglich ?? e.woche * 7 * e.h.anzahl
    else if (e.h.einheit === 'woche') summe += e.woche * e.h.anzahl
    else if (e.h.einheit === 'monat') summe += e.monat * e.h.anzahl
  }
  let punkte = 0
  if (summe >= 60) punkte = 6
  else if (summe >= 12.9) punkte = 3
  else if (summe >= 8.6) punkte = 2
  else if (summe >= 4.3) punkte = 1
  return { summe, punkte }
}

export type Person = 'erwachsen' | 'kind' | 'saeugling'

/** Pflegegrad aus den Gesamtpunkten (§ 15 Abs. 3; Kinder bis 18 Monate nach Abs. 7 eine Stufe höher) */
export function pflegegrad(gesamt: number, person: Person): number {
  if (gesamt < 12.5) return 0
  const stufe = gesamt < 27 ? 1 : gesamt < 47.5 ? 2 : gesamt < 70 ? 3 : gesamt < 90 ? 4 : 5
  if (person === 'saeugling') return Math.min(5, stufe + 1)
  return stufe
}
/** Untere Punktgrenzen der Pflegegrade */
export const GRENZEN_PFLEGEGRAD = [12.5, 27, 47.5, 70, 90] as const

export type Antworten = {
  person: Person
  aktuellerPflegegrad: number | null
  /** 0–3 je Kriterium, Index wie in MODUL1 … MODUL6 */
  m1: number[]
  m2: number[]
  m3: number[]
  m4: number[]
  /** 4.11/4.12 zählen nur bei überwiegender oder vollständiger Inkontinenz oder künstlicher Ableitung */
  inkontinenz: boolean
  /** 4.13: 0 entfällt, 1 teilweise, 2 vollständig */
  sonde: number
  /** 4.K bei Kindern bis 18 Monate */
  kindNahrung: boolean
  m5teil1: Haeufigkeit[]
  m5teil2: Haeufigkeit[]
  m5teil3: Haeufigkeit[]
  m5diaet: number
  m6: number[]
  /** § 15 Abs. 4: besondere Bedarfskonstellation (Gebrauchsunfähigkeit beider Arme und beider Beine) */
  bedarfskonstellation: boolean
}

export function leereAntworten(person: Person = 'erwachsen'): Antworten {
  return {
    person,
    aktuellerPflegegrad: null,
    m1: MODUL1.map(() => 0),
    m2: MODUL2.map(() => 0),
    m3: MODUL3.map(() => 0),
    m4: MODUL4.map(() => 0),
    inkontinenz: false,
    sonde: 0,
    kindNahrung: false,
    m5teil1: MODUL5_TEIL1.map(() => ({ ...KEINE })),
    m5teil2: MODUL5_TEIL2.map(() => ({ ...KEINE })),
    m5teil3: MODUL5_TEIL3.map(() => ({ ...KEINE })),
    m5diaet: 0,
    m6: MODUL6.map(() => 0),
    bedarfskonstellation: false,
  }
}

export type ModulErgebnis = { summe: number; bereich: number; gewichtet: number }
export type Ergebnis = {
  module: { m1: ModulErgebnis; m2: ModulErgebnis; m3: ModulErgebnis; m4: ModulErgebnis; m5: ModulErgebnis; m6: ModulErgebnis }
  /** gewichtete Punkte der Module 2 und 3 gemeinsam (der höhere Wert) */
  m2und3: number
  gesamt: number
  pflegegrad: number
  /** Punkte bis zur nächsten Stufe (null bei Pflegegrad 5) */
  bisNaechster: number | null
  teil3Summe: number
}

export function berechnen(a: Antworten): Ergebnis {
  const summe = (liste: Kriterium[], antworten: number[]) => liste.reduce((s, k, i) => s + (k.punkte[antworten[i] ?? 0] ?? 0), 0)
  const m1s = summe(MODUL1, a.m1)
  const m2s = summe(MODUL2, a.m2)
  const m3s = summe(MODUL3, a.m3)
  let m4s: number
  if (a.person === 'saeugling') {
    m4s = a.kindNahrung ? MODUL4_KIND.punkte : 0
  } else {
    m4s = MODUL4.reduce((s, k, i) => {
      if ((k.nr === '4.11' || k.nr === '4.12') && !a.inkontinenz) return s
      return s + (k.punkte[a.m4[i] ?? 0] ?? 0)
    }, 0)
    m4s += MODUL4_SONDE.punkte[a.sonde] ?? 0
  }
  const teil3 = punkteTeil3(
    MODUL5_TEIL3.map((k, i) => ({ h: a.m5teil3[i] ?? KEINE, taeglich: k.taeglich, woche: k.woche, monat: k.monat })).filter((_, i) => !(MODUL5_TEIL3[i] as { nurKinder?: boolean }).nurKinder || a.person !== 'erwachsen'),
  )
  const m5s = punkteTeil1(a.m5teil1) + punkteTeil2(a.m5teil2) + teil3.punkte + (MODUL5_DIAET.punkte[a.m5diaet] ?? 0)
  const m6s = summe(MODUL6, a.m6)

  const modul = (s: number, g: { grenzen: readonly number[]; punkte: readonly number[] }): ModulErgebnis => ({ summe: s, bereich: punktbereich(s, g), gewichtet: gewichtetePunkte(s, g) })
  const module = {
    m1: modul(m1s, GEWICHTET.modul1),
    m2: modul(m2s, GEWICHTET.modul2),
    m3: modul(m3s, GEWICHTET.modul3),
    m4: modul(m4s, GEWICHTET.modul4),
    m5: modul(m5s, GEWICHTET.modul5),
    m6: modul(m6s, GEWICHTET.modul6),
  }
  const m2und3 = Math.max(module.m2.gewichtet, module.m3.gewichtet)
  const gesamt = Math.round((module.m1.gewichtet + m2und3 + module.m4.gewichtet + module.m5.gewichtet + module.m6.gewichtet) * 100) / 100
  let grad = pflegegrad(gesamt, a.person)
  if (a.bedarfskonstellation) grad = 5
  const naechste = GRENZEN_PFLEGEGRAD.find((g) => g > gesamt)
  const bisNaechster = grad >= 5 || naechste === undefined ? null : Math.round((naechste - gesamt) * 100) / 100
  return { module, m2und3, gesamt, pflegegrad: grad, bisNaechster, teil3Summe: teil3.summe }
}

/** Leistungen je Pflegegrad 2026 (lib/fakten.ts ist die Quelle der Beträge) */
export const PFLEGEGRAD_NAMEN: Record<number, string> = {
  0: 'kein Pflegegrad',
  1: 'Pflegegrad 1: geringe Beeinträchtigungen',
  2: 'Pflegegrad 2: erhebliche Beeinträchtigungen',
  3: 'Pflegegrad 3: schwere Beeinträchtigungen',
  4: 'Pflegegrad 4: schwerste Beeinträchtigungen',
  5: 'Pflegegrad 5: schwerste Beeinträchtigungen mit besonderen Anforderungen',
}
