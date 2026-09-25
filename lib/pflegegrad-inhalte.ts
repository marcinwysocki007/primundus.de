// lib/pflegegrad-inhalte.ts — Inhalte der fünf Pflegegrad-Seiten (20.09.2026). Beträge aus lib/fakten.ts und den Paragrafen des
// SGB XI (§ 15 Punktbereiche, § 36, § 37, § 41 Tages-/Nachtpflege 721/1.357/1.685/2.085 €, § 42a, § 43, § 45b), Rechner-Beispiele mit
// lib/begutachtung.ts nachgerechnet (Ergebnisse 21,25 / 35 / 66,25 / 87,5 / 95 Punkte). Eigenanteil zu Hause wie auf /kosten:
// Preis ab 2.150 € minus Pflegegeld, anteiliges Entlastungsbudget 295 € (ab Pflegegrad 2) und Steuerermäßigung bis 333 €;
// Entlastungsbetrag nie eingerechnet. Preisregel 25.09. (Martin): Aufschläge (Pflegegrad 5, bettlägerig, Nächte) werden
// benannt, nicht beziffert — deshalb bei Pflegegrad 5 kein Preis und kein Eigenanteil, sondern die Zuschüsse und der Rechner.
import { ENTLASTUNGSBETRAG, ENTLASTUNGSBUDGET, PFLEGEGELD, PFLEGESACHLEISTUNGEN } from '@/lib/fakten'
import { HEIM_LEISTUNG } from '@/lib/heimkosten'

export const TAGESPFLEGE: Record<2 | 3 | 4 | 5, number> = { 2: 721, 3: 1357, 4: 1685, 5: 2085 }

export type Grad = 1 | 2 | 3 | 4 | 5

export type BeispielZeile = { modul: string; punkte: string; gewichtet: string }

export type PflegegradInhalt = {
  grad: Grad
  punkte: string
  name: string
  titel: string
  beschreibung: string
  h1: string
  einleitung: string
  blick: string[]
  typisch: { title: string; desc: string }[]
  beispiel: { titel: string; person: string; zeilen: BeispielZeile[]; gesamt: string; fazit: string }
  versorgung: { title: string; desc: string }[]
  /** null = kein Beispiel mit Preis (Pflegegrad 5: Preisregel 25.09., der Aufschlag wird nicht beziffert) */
  eigenanteil: number | null
  preis: number | null
  naechster: { grad: Grad; fehlen: string; mehr: string } | null
  fragen: { q: string; a: string }[]
}

const euro = (n: number) => n.toLocaleString('de-DE') + ' €'
const euroHalb = (n: number) => (n / 2).toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' €'

export const INHALTE: Record<Grad, PflegegradInhalt> = {
  1: {
    grad: 1,
    punkte: '12,5 bis unter 27',
    name: 'geringe Beeinträchtigungen der Selbständigkeit',
    titel: 'Pflegegrad 1: Leistungen 2026, Punkte, Beispiel',
    beschreibung: `Pflegegrad 1: 12,5 bis unter 27 Punkte, kein Pflegegeld, aber ${euro(ENTLASTUNGSBETRAG)} Entlastungsbetrag, Hilfsmittel, Wohnumfeld. Beispiel, Antrag, Weg zu Pflegegrad 2.`,
    h1: 'Pflegegrad 1: Was er bedeutet, was Sie 2026 bekommen und wie es weitergeht',
    einleitung: `Pflegegrad 1 ist die Einstiegsstufe: Die Person schafft den Alltag noch weitgehend allein, braucht aber an einigen Stellen Hilfe. Pflegegeld gibt es noch nicht; dafür ${euro(ENTLASTUNGSBETRAG)} im Monat für Alltagshilfen, Zuschüsse für Hilfsmittel und den Umbau der Wohnung und der Anspruch auf Beratung. Wer den Pflegegrad 1 hat, sollte die nächste Begutachtung früh vorbereiten: Die Grenze zu Pflegegrad 2 liegt bei 27 Punkten.`,
    blick: [
      'Punkte: 12,5 bis unter 27 im Begutachtungsinstrument',
      `Kein Pflegegeld, aber ${euro(ENTLASTUNGSBETRAG)} Entlastungsbetrag im Monat für anerkannte Alltagshilfen`,
      'Pflegehilfsmittel 42 € im Monat, Wohnumfeld bis 4.180 € je Maßnahme, Hausnotruf',
      'Beratung zu Hause: Anspruch alle sechs Monate',
      'Beispiel aus dem Rechner: 21,25 Punkte, 5,75 Punkte bis Pflegegrad 2',
      'Betreuungskraft im Haus ab 2.150 €; ohne Pflegegeld bleiben ab ca. 1.817 € selbst zu tragen',
    ],
    typisch: [
      { title: 'Treppen und längere Wege werden unsicher', desc: 'Im Haus geht es noch, die Treppe braucht das Geländer und Zeit; Einkäufe tragen geht nicht mehr.' },
      { title: 'Duschen mit Unterstützung', desc: 'Waschen am Waschbecken klappt, in die Wanne oder Dusche steigen nur mit Duschhocker und jemandem in Rufweite.' },
      { title: 'Strümpfe, Schuhe, Knöpfe', desc: 'Der Oberkörper geht allein, beim Unterkörper hilft jemand: Strümpfe, Schuhe zubinden.' },
      { title: 'Medikamente werden vergessen', desc: 'Der Wochenspender wird gerichtet und an die Einnahme erinnert; Arzttermine plant ein Angehöriger mit.' },
    ],
    beispiel: {
      titel: 'Beispiel: Frau, 81, allein lebend, Arthrose in Knien und Händen',
      person: 'Sie geht in der Wohnung selbst, die Treppe nur mit Geländer und Pause. Duschen, Strümpfe und Schuhe, Brot schneiden und Getränke eingießen gehen mit etwas Hilfe. Die Tochter richtet die Tabletten für die Woche und plant die Termine.',
      zeilen: [
        { modul: 'Mobilität: Fortbewegen und Treppe überwiegend selbständig', punkte: '2 von 15', gewichtet: '2,5' },
        { modul: 'Kognition und Verhalten: ohne Einschränkung', punkte: '0', gewichtet: '0' },
        { modul: 'Selbstversorgung: Duschen, Unterkörper anziehen, Zubereiten überwiegend selbständig', punkte: '3 von 54', gewichtet: '10' },
        { modul: 'Krankheit und Therapie: Medikamente einmal täglich richten', punkte: '1 von 15', gewichtet: '5' },
        { modul: 'Alltag und Kontakte: Planungen überwiegend selbständig', punkte: '1 von 18', gewichtet: '3,75' },
      ],
      gesamt: '21,25 Punkte = Pflegegrad 1',
      fazit: 'Bis Pflegegrad 2 fehlen 5,75 Punkte. Kommt Hilfe beim Waschen des Oberkörpers oder beim Anziehen des Oberkörpers dazu, ist die Grenze erreicht.',
    },
    versorgung: [
      { title: 'Alltagshilfe über den Entlastungsbetrag', desc: `Die ${euro(ENTLASTUNGSBETRAG)} im Monat zahlt die Kasse gegen Rechnung anerkannter Anbieter: Haushaltshilfe, Betreuungsgruppe, Alltagsbegleiter, auch Tagespflege. Nicht genutzte Beträge sammeln sich bis zum Ende des folgenden Halbjahres an.` },
      { title: 'Wohnung sicher machen', desc: 'Haltegriffe, Duschsitz, Badumbau: bis 4.180 € je Maßnahme von der Pflegekasse. Hausnotruf und Pflegehilfsmittel zum Verbrauch (42 € im Monat) kommen dazu.' },
      { title: 'Betreuungskraft im Haus, wenn niemand da ist', desc: 'Wer allein lebt und Gesellschaft, Haushalt und Sicherheit braucht, kann auch mit Pflegegrad 1 eine Betreuungskraft ins Haus holen. Ohne Pflegegeld bleiben ab ca. 1.817 € im Monat selbst zu tragen; die Steuerermäßigung von bis zu 333 € ist eingerechnet.' },
      { title: 'Die nächste Begutachtung vorbereiten', desc: 'Pflegegrad 1 ist oft ein Zwischenschritt. Führen Sie ein Pflegetagebuch, und beantragen Sie die Höherstufung, sobald Hilfe beim Waschen, Anziehen oder Essen dazukommt.' },
    ],
    eigenanteil: 2150 - 333,
    preis: 2150,
    naechster: { grad: 2, fehlen: 'ab 27 Punkten', mehr: `${euro(PFLEGEGELD[2])} Pflegegeld, ${euro(PFLEGESACHLEISTUNGEN[2])} Sachleistungen, ${euro(ENTLASTUNGSBUDGET)} Entlastungsbudget im Jahr` },
    fragen: [
      { q: 'Was bekommt man bei Pflegegrad 1?', a: `Keinen Pflegegeld-Anspruch, aber ${euro(ENTLASTUNGSBETRAG)} Entlastungsbetrag im Monat für anerkannte Alltagshilfen, Pflegehilfsmittel zum Verbrauch für 42 € im Monat, bis 4.180 € je Maßnahme für den Umbau der Wohnung, einen Zuschuss zum Hausnotruf, kostenlose Pflegekurse und Beratung zu Hause. Im Pflegeheim zahlt die Kasse ${euro(ENTLASTUNGSBETRAG)} im Monat.` },
      { q: 'Wie viele Punkte braucht man für Pflegegrad 1?', a: '12,5 bis unter 27 Punkte im Begutachtungsinstrument. Unter 12,5 Punkten gibt es keinen Pflegegrad, ab 27 Punkten Pflegegrad 2. Die Punkte kommen aus sechs Modulen; die Selbstversorgung zählt 40 Prozent.' },
      { q: 'Gibt es bei Pflegegrad 1 Pflegegeld?', a: `Nein. Pflegegeld gibt es ab Pflegegrad 2 (${euro(PFLEGEGELD[2])} im Monat). Bei Pflegegrad 1 ersetzt der Entlastungsbetrag von ${euro(ENTLASTUNGSBETRAG)} das Pflegegeld teilweise; er wird aber nicht ausgezahlt, sondern gegen Rechnung erstattet.` },
      { q: 'Kann man mit Pflegegrad 1 eine 24-Stunden-Betreuung bekommen?', a: 'Ja, der Pflegegrad ist keine Voraussetzung. Die Betreuungskraft kostet bei Primundus ab 2.150 € im Monat; ohne Pflegegeld und Entlastungsbudget bleiben nach der Steuerermäßigung ab ca. 1.817 € selbst zu tragen. Sinnvoll ist das, wenn die Person allein lebt und Sicherheit und Gesellschaft braucht.' },
      { q: 'Wie komme ich von Pflegegrad 1 auf Pflegegrad 2?', a: 'Mit einem Antrag auf Höherstufung bei der Pflegekasse, sobald der Hilfebedarf gewachsen ist. Es fehlen im Beispiel oben 5,75 Punkte; Hilfe beim Waschen und Anziehen des Oberkörpers oder eine beginnende Vergesslichkeit reichen oft. Führen Sie zwei Wochen Pflegetagebuch vor dem Termin.' },
      { q: 'Zahlt die Kasse bei Pflegegrad 1 die Tagespflege?', a: `Einen eigenen Tagespflege-Betrag gibt es erst ab Pflegegrad 2. Bei Pflegegrad 1 können Sie den Entlastungsbetrag von ${euro(ENTLASTUNGSBETRAG)} für die Tagespflege einsetzen.` },
    ],
  },
  2: {
    grad: 2,
    punkte: '27 bis unter 47,5',
    name: 'erhebliche Beeinträchtigungen der Selbständigkeit',
    titel: 'Pflegegrad 2: Leistungen 2026, Geld, Punkte, Beispiel',
    beschreibung: `Pflegegrad 2: 27 bis unter 47,5 Punkte, ${euro(PFLEGEGELD[2])} Pflegegeld, ${euro(PFLEGESACHLEISTUNGEN[2])} Sachleistungen, ${euro(ENTLASTUNGSBUDGET)} Budget, Tagespflege. Beispiel, Antrag, Kosten zu Hause.`,
    h1: 'Pflegegrad 2: Was er bedeutet, welches Geld es 2026 gibt und was zu Hause bleibt',
    einleitung: `Mit Pflegegrad 2 beginnt das Pflegegeld: ${euro(PFLEGEGELD[2])} im Monat, dazu ${euro(PFLEGESACHLEISTUNGEN[2])} für einen Pflegedienst, ${euro(ENTLASTUNGSBUDGET)} im Jahr für Vertretung und Kurzzeitpflege und ein eigener Betrag für die Tagespflege. Die Person braucht bei mehreren Dingen im Alltag Hilfe, schafft aber vieles noch selbst. Hier lesen Sie, wie die Punkte zustande kommen, was Ihnen zusteht und was eine Betreuung zu Hause bei Pflegegrad 2 kostet.`,
    blick: [
      'Punkte: 27 bis unter 47,5 im Begutachtungsinstrument',
      `Pflegegeld ${euro(PFLEGEGELD[2])} im Monat, Sachleistungen ${euro(PFLEGESACHLEISTUNGEN[2])} für den Pflegedienst`,
      `Entlastungsbudget ${euro(ENTLASTUNGSBUDGET)} im Jahr, Tagespflege bis ${euro(TAGESPFLEGE[2])} zusätzlich, Entlastungsbetrag ${euro(ENTLASTUNGSBETRAG)}`,
      'Beispiel aus dem Rechner: 35 Punkte, 12,5 Punkte bis Pflegegrad 3',
      'Betreuungskraft im Haus: ab 2.150 €, selbst zu tragen ab ca. 1.175 € im Monat',
      `Pflegeheim: Kasse zahlt ${euro(HEIM_LEISTUNG[2])}, Eigenanteil im Schnitt 3.364 €`,
    ],
    typisch: [
      { title: 'Duschen und Anziehen nur mit Hilfe', desc: 'Der Oberkörper wird noch selbst gewaschen, Duschen und Strümpfe, Hose, Schuhe übernimmt jemand zum größeren Teil.' },
      { title: 'Treppe kaum noch, Wege mit Rollator', desc: 'In der Wohnung geht es mit Rollator; die Treppe geht nur mit Begleitung oder gar nicht mehr.' },
      { title: 'Beginnende Vergesslichkeit', desc: 'Termine und Tageszeiten geraten durcheinander, kürzlich Erlebtes wird vergessen; die Orientierung zu Hause ist noch da.' },
      { title: 'Tabletten, Toilette, Mahlzeiten', desc: 'Medikamente werden gerichtet und angereicht, auf der Toilette hilft jemand beim Richten der Kleidung, Brot wird geschnitten.' },
    ],
    beispiel: {
      titel: 'Beispiel: Mann, 83, nach Oberschenkelhalsbruch, beginnende Vergesslichkeit',
      person: 'Er geht mit Rollator, die Treppe nur begleitet. Beim Duschen und beim Anziehen des Unterkörpers übernimmt die Ehefrau den größeren Teil, beim Waschen des Oberkörpers hilft sie etwas. Tabletten zweimal täglich richtet sie, einmal im Monat fährt sie ihn zum Arzt. Tageszeiten und Erlebtes von gestern verwechselt er manchmal.',
      zeilen: [
        { modul: 'Mobilität: Fortbewegen überwiegend selbständig, Treppe überwiegend unselbständig', punkte: '3 von 15', gewichtet: '2,5' },
        { modul: 'Kognition: zeitliche Orientierung und Erinnern größtenteils vorhanden', punkte: '2 von 33', gewichtet: '3,75' },
        { modul: 'Selbstversorgung: Duschen und Unterkörper überwiegend unselbständig, Oberkörper, Zubereiten, Toilette überwiegend selbständig', punkte: '8 von 54', gewichtet: '20' },
        { modul: 'Krankheit und Therapie: Medikamente zweimal täglich, Arztbesuch monatlich', punkte: '1 von 15', gewichtet: '5' },
        { modul: 'Alltag und Kontakte: Tagesablauf und Planung überwiegend selbständig', punkte: '2 von 18', gewichtet: '3,75' },
      ],
      gesamt: '35 Punkte = Pflegegrad 2',
      fazit: 'Bis Pflegegrad 3 fehlen 12,5 Punkte. Braucht er beim Waschen des Oberkörpers, beim Essen und auf der Toilette den größeren Teil Hilfe, springt die Selbstversorgung auf 30 gewichtete Punkte, und Pflegegrad 3 ist erreicht.',
    },
    versorgung: [
      { title: 'Angehörige pflegen, Pflegegeld kommt aufs Konto', desc: `${euro(PFLEGEGELD[2])} im Monat, frei verwendbar, alle sechs Monate ein Beratungsbesuch. Wer daneben einen Pflegedienst nutzt, bekommt die Kombinationsleistung: 50 Prozent Sachleistung lassen 50 Prozent Pflegegeld, also ${euroHalb(PFLEGEGELD[2])}.` },
      { title: 'Tagespflege als Entlastung', desc: `Bis ${euro(TAGESPFLEGE[2])} im Monat zusätzlich zum Pflegegeld, ohne Anrechnung (§ 41 SGB XI). Für Familien, die tagsüber arbeiten, die wichtigste Leistung bei Pflegegrad 2.` },
      { title: 'Betreuungskraft im Haus', desc: 'Ab 2.150 € im Monat. Davon gehen 347 € Pflegegeld, 295 € anteiliges Entlastungsbudget (wenn die Kasse den Einsatz als Verhinderungspflege anerkennt) und bis zu 333 € Steuerermäßigung ab: ab ca. 1.175 € selbst zu tragen. Lohnt sich, wenn die Person allein lebt oder die Angehörigen nachts Ruhe brauchen.' },
      { title: 'Vertretung und Kurzzeitpflege', desc: `${euro(ENTLASTUNGSBUDGET)} im Jahr aus dem Entlastungsbudget, ab dem ersten Tag des Pflegegrads. Für Urlaub, Krankheit der Pflegeperson oder die Zeit nach einem Krankenhausaufenthalt.` },
    ],
    eigenanteil: 2150 - PFLEGEGELD[2] - 295 - 333,
    preis: 2150,
    naechster: { grad: 3, fehlen: 'ab 47,5 Punkten', mehr: `${euro(PFLEGEGELD[3] - PFLEGEGELD[2])} mehr Pflegegeld (${euro(PFLEGEGELD[3])}), ${euro(PFLEGESACHLEISTUNGEN[3])} Sachleistungen, Tagespflege ${euro(TAGESPFLEGE[3])}` },
    fragen: [
      { q: 'Wie viel Geld bekommt man bei Pflegegrad 2?', a: `${euro(PFLEGEGELD[2])} Pflegegeld im Monat, wenn Angehörige oder eine Betreuungskraft zu Hause pflegen. Alternativ ${euro(PFLEGESACHLEISTUNGEN[2])} im Monat für einen ambulanten Pflegedienst oder eine Kombination aus beidem. Dazu ${euro(ENTLASTUNGSBETRAG)} Entlastungsbetrag im Monat, ${euro(ENTLASTUNGSBUDGET)} im Jahr für Verhinderungs- und Kurzzeitpflege, Tagespflege bis ${euro(TAGESPFLEGE[2])}, Hilfsmittel 42 € und bis 4.180 € für den Wohnungsumbau.` },
      { q: 'Wie viele Punkte braucht man für Pflegegrad 2?', a: '27 bis unter 47,5 Punkte. Im Beispiel oben reichen ein Rollator, Hilfe beim Duschen und Anziehen des Unterkörpers, gerichtete Tabletten und leichte Vergesslichkeit für 35 Punkte. Unser Pflegegrad-Rechner rechnet Ihre Situation nach demselben Schema.' },
      { q: 'Was bedeutet Pflegegrad 2 im Alltag?', a: 'Erhebliche Beeinträchtigungen der Selbständigkeit: Die Person braucht bei mehreren Alltagsdingen Hilfe, etwa beim Duschen, Anziehen, bei Treppen oder Medikamenten, schafft aber Essen, Trinken und die Wege in der Wohnung meist noch selbst. Sie kann stundenweise allein bleiben.' },
      { q: 'Was kostet 24-Stunden-Pflege bei Pflegegrad 2?', a: `Bei Primundus ab 2.150 € im Monat. Nach ${euro(PFLEGEGELD[2])} Pflegegeld, 295 € anteiligem Entlastungsbudget und bis zu 333 € Steuerermäßigung bleiben ab ca. 1.175 € selbst zu tragen. Dazu kommen An- und Abreise mit 125 € je Strecke; Kost und Logis stellen Sie.` },
      { q: 'Wie hoch ist der Eigenanteil im Pflegeheim bei Pflegegrad 2?', a: `Im ersten Jahr bundesweit durchschnittlich 3.364 € im Monat (vdek, Juli 2026); die Kasse zahlt ${euro(HEIM_LEISTUNG[2])} an das Heim. Der Eigenanteil ist bei Pflegegrad 2 bis 5 gleich hoch.` },
      { q: 'Wann gibt es Pflegegrad 3 statt 2?', a: `Ab 47,5 Punkten. Typisch ist der Sprung, wenn die Selbstversorgung von „erheblich" auf „schwer" wechselt: Hilfe beim Waschen des ganzen Körpers, beim Essen und auf der Toilette. Dann steigt das Pflegegeld auf ${euro(PFLEGEGELD[3])}.` },
      { q: 'Kann man mit Pflegegrad 2 Tagespflege und Pflegegeld zusammen bekommen?', a: `Ja. Die Tagespflege hat seit 2015 einen eigenen Betrag (${euro(TAGESPFLEGE[2])} im Monat bei Pflegegrad 2), der nicht auf das Pflegegeld angerechnet wird. Unterkunft und Verpflegung in der Tagespflege zahlen Sie selbst, dafür können Sie den Entlastungsbetrag nutzen.` },
    ],
  },
  3: {
    grad: 3,
    punkte: '47,5 bis unter 70',
    name: 'schwere Beeinträchtigungen der Selbständigkeit',
    titel: 'Pflegegrad 3: Leistungen 2026, Pflegegeld 599 €, Beispiel',
    beschreibung: `Pflegegrad 3: 47,5 bis unter 70 Punkte, ${euro(PFLEGEGELD[3])} Pflegegeld, ${euro(PFLEGESACHLEISTUNGEN[3])} Sachleistungen, ${euro(ENTLASTUNGSBUDGET)} Budget, Tagespflege. Beispiel, Antrag, Kosten zu Hause.`,
    h1: 'Pflegegrad 3: Was er bedeutet, welches Geld es 2026 gibt und was zu Hause bleibt',
    einleitung: `Pflegegrad 3 ist der Punkt, an dem Angehörige allein meist nicht mehr durchhalten: Die Person braucht bei Körperpflege, Anziehen, Essen und Wegen den größeren Teil Hilfe, oft auch Aufsicht. Die Kasse zahlt ${euro(PFLEGEGELD[3])} Pflegegeld oder ${euro(PFLEGESACHLEISTUNGEN[3])} Sachleistungen, ${euro(ENTLASTUNGSBUDGET)} im Jahr für Vertretung und Tagespflege bis ${euro(TAGESPFLEGE[3])}. Hier lesen Sie, wie die Punkte zustande kommen, was Ihnen zusteht und was eine Betreuungskraft im Haus bei Pflegegrad 3 kostet.`,
    blick: [
      'Punkte: 47,5 bis unter 70 im Begutachtungsinstrument',
      `Pflegegeld ${euro(PFLEGEGELD[3])} im Monat, Sachleistungen ${euro(PFLEGESACHLEISTUNGEN[3])} für den Pflegedienst`,
      `Entlastungsbudget ${euro(ENTLASTUNGSBUDGET)} im Jahr, Tagespflege bis ${euro(TAGESPFLEGE[3])} zusätzlich, Entlastungsbetrag ${euro(ENTLASTUNGSBETRAG)}`,
      'Beispiel aus dem Rechner: 66,25 Punkte, 3,75 Punkte bis Pflegegrad 4',
      'Betreuungskraft im Haus: ab 2.150 €, selbst zu tragen ab ca. 923 € im Monat',
      `Pflegeheim: Kasse zahlt ${euro(HEIM_LEISTUNG[3])}, Eigenanteil im Schnitt 3.364 €`,
    ],
    typisch: [
      { title: 'Waschen und Anziehen übernimmt zum größeren Teil jemand anderes', desc: 'Die Person macht noch mit, hält den Waschlappen, streckt den Arm, aber ohne Hilfe bleibt die Körperpflege liegen.' },
      { title: 'Aufstehen, Umsetzen, Gehen nur mit Hilfe', desc: 'Vom Bett auf den Stuhl mit Stütze, Wege in der Wohnung mit Rollator und Begleitung, Treppe gar nicht mehr.' },
      { title: 'Orientierung und Gedächtnis lassen deutlich nach', desc: 'Bei Demenz im mittleren Stadium: Tageszeit, Termine und Handlungsschritte gehen verloren; die Person braucht Anleitung und darf nicht lange allein sein.' },
      { title: 'Medikamente, Kompressionsstrümpfe, Arztbegleitung', desc: 'Mehrere Maßnahmen am Tag, die jemand übernimmt: Tabletten richten und geben, Strümpfe anziehen, Blutdruck messen, zu Terminen begleiten.' },
    ],
    beispiel: {
      titel: 'Beispiel: Frau, 84, Gehbehinderung und Demenz im mittleren Stadium',
      person: 'Sie steht mit Hilfe auf und geht am Rollator nur begleitet, die Treppe nicht mehr. Waschen, Duschen und Anziehen übernimmt die Betreuungskraft zum größeren Teil, beim Essen und Trinken erinnert und hilft sie. Tageszeit, Termine und Handlungsabläufe geraten durcheinander, Gefahren erkennt sie nicht mehr sicher. Tabletten zweimal täglich, Kompressionsstrümpfe morgens und abends, einmal im Monat zum Arzt.',
      zeilen: [
        { modul: 'Mobilität: Umsetzen und Gehen überwiegend unselbständig, Treppe unselbständig', punkte: '9 von 15', gewichtet: '7,5' },
        { modul: 'Kognition: Orientierung, Erinnern, Handlungen steuern, Gefahren erkennen eingeschränkt', punkte: '10 von 33', gewichtet: '7,5' },
        { modul: 'Selbstversorgung: Waschen und Anziehen überwiegend unselbständig, Essen, Trinken, Toilette überwiegend selbständig', punkte: '22 von 54', gewichtet: '30' },
        { modul: 'Krankheit und Therapie: Medikamente und Strümpfe viermal täglich, Arztbesuch monatlich', punkte: '2 von 15', gewichtet: '10' },
        { modul: 'Alltag und Kontakte: Tagesablauf und Planung überwiegend unselbständig, Kontakte mit Hilfe', punkte: '8 von 18', gewichtet: '11,25' },
      ],
      gesamt: '66,25 Punkte = Pflegegrad 3',
      fazit: 'Bis Pflegegrad 4 fehlen 3,75 Punkte. Kommt nächtliche Unruhe oder Abwehr bei der Pflege dazu (Modul 3) oder werden Essen und Toilette überwiegend unselbständig, ist Pflegegrad 4 erreicht.',
    },
    versorgung: [
      { title: 'Betreuungskraft im Haus: bei Pflegegrad 3 die häufigste Wahl', desc: 'Ab 2.150 € im Monat für eine Person. Davon gehen 599 € Pflegegeld, 295 € anteiliges Entlastungsbudget (wenn die Kasse den Einsatz als Verhinderungspflege anerkennt) und bis zu 333 € Steuerermäßigung ab: ab ca. 923 € selbst zu tragen. Die Betreuungskraft übernimmt Körperpflege, Haushalt, Begleitung, ist bei Bedarf auch nachts da.' },
      { title: 'Pflegedienst dazu für die Behandlungspflege', desc: 'Spritzen, Verbände, Blutzucker verordnet der Arzt; die Krankenkasse zahlt, das Pflegegeld bleibt voll. Grundpflege durch den Pflegedienst geht über die Sachleistungen und mindert das Pflegegeld anteilig.' },
      { title: 'Tagespflege, wenn Angehörige tagsüber pflegen', desc: `Bis ${euro(TAGESPFLEGE[3])} im Monat zusätzlich zum Pflegegeld. Zwei bis drei Tage in der Woche Tagespflege plus Familie am Abend und am Wochenende tragen viele bis in die späte Phase.` },
      { title: 'Pflegeheim', desc: `Die Kasse zahlt ${euro(HEIM_LEISTUNG[3])} an das Heim; der Eigenanteil liegt im ersten Jahr bundesweit bei durchschnittlich 3.364 € im Monat, in Bayern bei rund 3.200 €, in Nordrhein-Westfalen bei rund 3.580 €. Bei Pflegegrad 3 ist das Heim selten die günstigere Lösung.` },
    ],
    eigenanteil: 2150 - PFLEGEGELD[3] - 295 - 333,
    preis: 2150,
    naechster: { grad: 4, fehlen: 'ab 70 Punkten', mehr: `${euro(PFLEGEGELD[4] - PFLEGEGELD[3])} mehr Pflegegeld (${euro(PFLEGEGELD[4])}), ${euro(PFLEGESACHLEISTUNGEN[4])} Sachleistungen, Tagespflege ${euro(TAGESPFLEGE[4])}` },
    fragen: [
      { q: 'Was bekommt man bei Pflegegrad 3?', a: `${euro(PFLEGEGELD[3])} Pflegegeld im Monat oder ${euro(PFLEGESACHLEISTUNGEN[3])} Sachleistungen für den Pflegedienst, wahlweise kombiniert. Dazu ${euro(ENTLASTUNGSBETRAG)} Entlastungsbetrag im Monat, ${euro(ENTLASTUNGSBUDGET)} im Jahr für Verhinderungs- und Kurzzeitpflege, Tagespflege bis ${euro(TAGESPFLEGE[3])}, Pflegehilfsmittel 42 € im Monat, bis 4.180 € für den Wohnungsumbau. Alle Beträge gelten 2026 unverändert.` },
      { q: 'Wie hoch ist das Pflegegeld bei Pflegegrad 3 im Jahr 2026?', a: `${euro(PFLEGEGELD[3])} im Monat, wie 2025. Die nächste Anpassung ist gesetzlich für Januar 2028 vorgesehen. Wer daneben einen Pflegedienst nutzt, bekommt das Pflegegeld anteilig: bei 50 Prozent Sachleistung noch ${euroHalb(PFLEGEGELD[3])}.` },
      { q: 'Wie viele Punkte braucht man für Pflegegrad 3?', a: '47,5 bis unter 70 Punkte. Die Selbstversorgung wiegt 40 Prozent: Wer beim Waschen und Anziehen den größeren Teil Hilfe braucht, hat dort schon 30 gewichtete Punkte. Im Beispiel oben kommen mit Mobilität, Orientierung, Medikamenten und Alltag 66,25 Punkte zusammen.' },
      { q: 'Was bedeutet Pflegegrad 3 im Alltag?', a: 'Schwere Beeinträchtigungen der Selbständigkeit: Ohne Hilfe bleiben Körperpflege, Anziehen und Wege liegen; die Person kann nicht mehr lange allein bleiben. Meist braucht sie tagsüber jemanden im Haus und nachts jemanden in Rufweite.' },
      { q: 'Was kostet 24-Stunden-Pflege bei Pflegegrad 3?', a: `Bei Primundus ab 2.150 € im Monat. Nach ${euro(PFLEGEGELD[3])} Pflegegeld, 295 € anteiligem Entlastungsbudget und bis zu 333 € Steuerermäßigung bleiben ab ca. 923 € selbst zu tragen. Dazu An- und Abreise 125 € je Strecke; Kost und Logis stellen Sie. Nachteinsätze und bessere Deutschkenntnisse kosten mehr.` },
      { q: 'Wie hoch ist der Eigenanteil im Pflegeheim bei Pflegegrad 3?', a: `Bundesweit durchschnittlich 3.364 € im Monat im ersten Jahr (vdek, Juli 2026), unabhängig vom Pflegegrad; die Kasse zahlt ${euro(HEIM_LEISTUNG[3])} an das Heim. Ab dem zweiten Jahr sinkt der Eigenanteil durch den Leistungszuschlag.` },
      { q: 'Was ist der Unterschied zwischen Pflegegrad 3 und 4?', a: `Pflegegrad 4 beginnt bei 70 Punkten und bedeutet schwerste Beeinträchtigungen: Die Person braucht bei fast allem Hilfe, oft auch nachts. Das Pflegegeld steigt auf ${euro(PFLEGEGELD[4])}, die Sachleistungen auf ${euro(PFLEGESACHLEISTUNGEN[4])}, die Tagespflege auf ${euro(TAGESPFLEGE[4])}.` },
      { q: 'Kann man mit Pflegegrad 3 zu Hause bleiben?', a: 'Ja, in den meisten Fällen. Mit einer Betreuungskraft, die mit im Haus wohnt, und einem Pflegedienst für die Behandlungspflege bleibt die Person in ihrer Wohnung; bei Primundus ist die Anreise 3 Tage nach der Auswahl möglich. Das Heim wird nötig, wenn Fachkräfte rund um die Uhr gebraucht werden.' },
    ],
  },
  4: {
    grad: 4,
    punkte: '70 bis unter 90',
    name: 'schwerste Beeinträchtigungen der Selbständigkeit',
    titel: 'Pflegegrad 4: Leistungen 2026, Pflegegeld 800 €, Beispiel',
    beschreibung: `Pflegegrad 4: 70 bis unter 90 Punkte, ${euro(PFLEGEGELD[4])} Pflegegeld, ${euro(PFLEGESACHLEISTUNGEN[4])} Sachleistungen, ${euro(ENTLASTUNGSBUDGET)} Budget, Tagespflege. Beispiel, Antrag, Kosten zu Hause.`,
    h1: 'Pflegegrad 4: Was er bedeutet, welches Geld es 2026 gibt und was zu Hause bleibt',
    einleitung: `Pflegegrad 4 heißt: Die Person braucht bei fast allem Hilfe, beim Waschen, Anziehen, Essen, auf der Toilette und beim Umsetzen, oft auch nachts. Die Kasse zahlt ${euro(PFLEGEGELD[4])} Pflegegeld oder ${euro(PFLEGESACHLEISTUNGEN[4])} Sachleistungen, ${euro(ENTLASTUNGSBUDGET)} im Jahr für Vertretung und Tagespflege bis ${euro(TAGESPFLEGE[4])}. Zu Hause geht das mit einer Betreuungskraft im Haus und einem Pflegedienst; hier lesen Sie, wie die Punkte zustande kommen und was selbst zu tragen bleibt.`,
    blick: [
      'Punkte: 70 bis unter 90 im Begutachtungsinstrument',
      `Pflegegeld ${euro(PFLEGEGELD[4])} im Monat, Sachleistungen ${euro(PFLEGESACHLEISTUNGEN[4])} für den Pflegedienst`,
      `Entlastungsbudget ${euro(ENTLASTUNGSBUDGET)} im Jahr, Tagespflege bis ${euro(TAGESPFLEGE[4])} zusätzlich, Entlastungsbetrag ${euro(ENTLASTUNGSBETRAG)}`,
      'Beispiel aus dem Rechner: 87,5 Punkte, 2,5 Punkte bis Pflegegrad 5',
      'Betreuungskraft im Haus: ab 2.150 €, selbst zu tragen ab ca. 722 € (Rollstuhl oder bettlägerig: Aufschlag, im Rechner)',
      `Pflegeheim: Kasse zahlt ${euro(HEIM_LEISTUNG[4])}, Eigenanteil im Schnitt 3.364 €`,
    ],
    typisch: [
      { title: 'Rollstuhl oder Bett, Umsetzen mit zwei Händen', desc: 'Aufstehen, Umsetzen und jeder Weg brauchen Hilfe; die Person kann sich noch beteiligen, aber nichts davon allein.' },
      { title: 'Körperpflege, Anziehen, Toilette fast vollständig übernommen', desc: 'Waschen, Duschen, Anziehen und der Toilettengang werden übernommen; oft kommt eine Inkontinenz dazu, die versorgt werden muss.' },
      { title: 'Sprechen oder Verstehen eingeschränkt', desc: 'Nach Schlaganfall oder bei fortgeschrittener Demenz: Bedürfnisse mitteilen, Aufforderungen verstehen und Gespräche führen gelingen nur noch in Ansätzen.' },
      { title: 'Mehrere Maßnahmen täglich', desc: 'Medikamente dreimal am Tag, Blutdruck messen, Physiotherapie mehrmals in der Woche, dazu Lagerung und Hautpflege.' },
    ],
    beispiel: {
      titel: 'Beispiel: Mann, 86, nach Schlaganfall mit Sprachstörung, Rollstuhl, Inkontinenz',
      person: 'Er wird morgens und abends mit zwei Händen umgesetzt, im Rollstuhl geschoben, die Treppe geht nicht. Waschen, Anziehen und Toilette übernimmt die Betreuungskraft fast vollständig, beim Essen braucht er den größeren Teil Hilfe, beim Trinken etwas. Er versteht einfache Aufforderungen, kann sich aber kaum mitteilen. Tabletten dreimal täglich, Blutdruck einmal, Physiotherapie zweimal in der Woche.',
      zeilen: [
        { modul: 'Mobilität: Position und Sitzen überwiegend unselbständig, Umsetzen, Gehen, Treppe unselbständig', punkte: '13 von 15', gewichtet: '10' },
        { modul: 'Kognition: Mitteilen und Gespräch in geringem Maße, Verstehen größtenteils vorhanden', punkte: '6 von 33', gewichtet: '7,5' },
        { modul: 'Selbstversorgung: Körperpflege, Anziehen, Toilette unselbständig, Essen überwiegend unselbständig, Inkontinenz', punkte: '40 von 54', gewichtet: '40' },
        { modul: 'Krankheit und Therapie: vier Maßnahmen täglich, Physiotherapie zweimal wöchentlich', punkte: '4 von 15', gewichtet: '15' },
        { modul: 'Alltag und Kontakte: Beschäftigung, Planung, Kontakte nach außen unselbständig', punkte: '15 von 18', gewichtet: '15' },
      ],
      gesamt: '87,5 Punkte = Pflegegrad 4',
      fazit: 'Bis Pflegegrad 5 fehlen 2,5 Punkte. Geht die Sprache weiter verloren oder wird das Trinken unselbständig, ist die Grenze überschritten.',
    },
    versorgung: [
      { title: 'Betreuungskraft im Haus plus Pflegedienst', desc: 'Die Betreuungskraft übernimmt Körperpflege, Umsetzen, Essen anreichen, Haushalt und ist bei Bedarf nachts da; der Pflegedienst kommt für Verbände, Spritzen und Katheter. Preis ab 2.150 €; bei Rollstuhl, Bettlägerigkeit und Nachteinsätzen kommen Aufschläge dazu, den Preis zeigt der Rechner. Beim Grundpreis bleiben nach 800 € Pflegegeld, 295 € Budget und 333 € Steuer ab ca. 722 € selbst zu tragen.' },
      { title: 'Hilfsmittel und Umbau zuerst', desc: 'Pflegebett, Lifter, Rollstuhl und Duschliege verordnet der Arzt, die Krankenkasse zahlt; Badumbau und Rampe bezuschusst die Pflegekasse mit bis zu 4.180 € je Maßnahme. Ohne beides ist die Pflege zu Hause für alle Beteiligten zu schwer.' },
      { title: 'Angehörige mit Tagespflege und Pflegedienst', desc: `Bis ${euro(TAGESPFLEGE[4])} im Monat Tagespflege zusätzlich zum Pflegegeld; wer die Nächte selbst übernimmt, braucht das Entlastungsbudget für Auszeiten. Bei Pflegegrad 4 ist die Grenze für Angehörige allein meist erreicht.` },
      { title: 'Pflegeheim', desc: `Die Kasse zahlt ${euro(HEIM_LEISTUNG[4])} an das Heim; der Eigenanteil ist derselbe wie bei Pflegegrad 2, im Schnitt 3.364 € im ersten Jahr. Nötig wird das Heim, wenn Behandlungspflege rund um die Uhr durch Fachkräfte gebraucht wird.` },
    ],
    eigenanteil: 2150 - PFLEGEGELD[4] - 295 - 333,
    preis: 2150,
    naechster: { grad: 5, fehlen: 'ab 90 Punkten', mehr: `${euro(PFLEGEGELD[5] - PFLEGEGELD[4])} mehr Pflegegeld (${euro(PFLEGEGELD[5])}), ${euro(PFLEGESACHLEISTUNGEN[5])} Sachleistungen, Tagespflege ${euro(TAGESPFLEGE[5])}` },
    fragen: [
      { q: 'Was bekommt man bei Pflegegrad 4?', a: `${euro(PFLEGEGELD[4])} Pflegegeld im Monat oder ${euro(PFLEGESACHLEISTUNGEN[4])} Sachleistungen für den Pflegedienst, wahlweise kombiniert. Dazu ${euro(ENTLASTUNGSBETRAG)} Entlastungsbetrag, ${euro(ENTLASTUNGSBUDGET)} im Jahr für Verhinderungs- und Kurzzeitpflege, Tagespflege bis ${euro(TAGESPFLEGE[4])}, Hilfsmittel 42 € im Monat, bis 4.180 € für den Umbau. Beratungsbesuche können Sie vierteljährlich abrufen.` },
      { q: 'Wie viele Punkte braucht man für Pflegegrad 4?', a: '70 bis unter 90 Punkte. Im Beispiel oben bringen Rollstuhl, fast vollständige Übernahme der Selbstversorgung, Inkontinenz, vier Maßnahmen am Tag und ein Alltag, der ohne Hilfe nicht mehr stattfindet, 87,5 Punkte.' },
      { q: 'Was bedeutet Pflegegrad 4 im Alltag?', a: 'Schwerste Beeinträchtigungen der Selbständigkeit: Bei fast allem ist Hilfe nötig, die Person kann nicht allein bleiben, und nachts braucht sie oft jemanden. Zu Hause geht das mit einer Betreuungskraft im Haus und einem Pflegedienst; Angehörige allein schaffen es selten.' },
      { q: 'Was kostet 24-Stunden-Pflege bei Pflegegrad 4?', a: `Bei Primundus ab 2.150 € im Monat; bei Rollstuhl, Bettlägerigkeit und Nachteinsätzen kommen Aufschläge dazu, den Preis für Ihre Situation zeigt der Rechner. Beim Grundpreis bleiben nach ${euro(PFLEGEGELD[4])} Pflegegeld, 295 € anteiligem Entlastungsbudget und bis zu 333 € Steuerermäßigung ab ca. 722 € selbst zu tragen.` },
      { q: 'Wie hoch ist der Eigenanteil im Pflegeheim bei Pflegegrad 4?', a: `Wie bei jedem Pflegegrad ab 2: bundesweit durchschnittlich 3.364 € im Monat im ersten Jahr (vdek, Juli 2026). Die Kasse zahlt ${euro(HEIM_LEISTUNG[4])} an das Heim.` },
      { q: 'Wann gibt es Pflegegrad 5 statt 4?', a: 'Ab 90 Punkten oder bei einer besonderen Bedarfskonstellation: Sind beide Arme und beide Beine gebrauchsunfähig, gilt Pflegegrad 5 unabhängig von den Punkten (§ 15 Abs. 4 SGB XI). Im Beispiel oben fehlen 2,5 Punkte.' },
      { q: 'Wie oft muss der Beratungsbesuch bei Pflegegrad 4 sein?', a: 'Wer Pflegegeld bezieht, muss alle sechs Monate eine Beratung zu Hause abrufen; bei Pflegegrad 4 und 5 können Sie sie vierteljährlich nutzen (§ 37 Abs. 3 SGB XI). Versäumte Besuche können das Pflegegeld kürzen.' },
    ],
  },
  5: {
    grad: 5,
    punkte: '90 bis 100',
    name: 'schwerste Beeinträchtigungen der Selbständigkeit mit besonderen Anforderungen an die pflegerische Versorgung',
    titel: 'Pflegegrad 5: Leistungen 2026, Pflegegeld 990 €, Beispiel',
    beschreibung: `Pflegegrad 5: 90 bis 100 Punkte, ${euro(PFLEGEGELD[5])} Pflegegeld, ${euro(PFLEGESACHLEISTUNGEN[5])} Sachleistungen, ${euro(ENTLASTUNGSBUDGET)} Budget, Tagespflege. Beispiel, Antrag, Kosten zu Hause.`,
    h1: 'Pflegegrad 5: Was er bedeutet, welches Geld es 2026 gibt und was zu Hause bleibt',
    einleitung: `Pflegegrad 5 ist die höchste Stufe: Die Person braucht bei allem Hilfe, Tag und Nacht, und oft besondere Pflege wie Lagerung, Sondenernährung oder Wundversorgung. Die Kasse zahlt ${euro(PFLEGEGELD[5])} Pflegegeld oder ${euro(PFLEGESACHLEISTUNGEN[5])} Sachleistungen, ${euro(ENTLASTUNGSBUDGET)} im Jahr für Vertretung und Tagespflege bis ${euro(TAGESPFLEGE[5])}. Auch bei Pflegegrad 5 bleiben viele Menschen zu Hause; hier lesen Sie, wie, was es kostet und wo die Grenze liegt.`,
    blick: [
      'Punkte: 90 bis 100, oder Pflegegrad 5 wegen besonderer Bedarfskonstellation',
      `Pflegegeld ${euro(PFLEGEGELD[5])} im Monat, Sachleistungen ${euro(PFLEGESACHLEISTUNGEN[5])} für den Pflegedienst`,
      `Entlastungsbudget ${euro(ENTLASTUNGSBUDGET)} im Jahr, Tagespflege bis ${euro(TAGESPFLEGE[5])} zusätzlich, Entlastungsbetrag ${euro(ENTLASTUNGSBETRAG)}`,
      'Beispiel aus dem Rechner: 95 Punkte',
      'Betreuungskraft im Haus: Preis etwas über dem Grundpreis von 2.150 €, Zuschüsse bis zu 1.618 € im Monat',
      `Pflegeheim: Kasse zahlt ${euro(HEIM_LEISTUNG[5])}, Eigenanteil im Schnitt 3.364 €`,
    ],
    typisch: [
      { title: 'Bettlägerig oder vollständig auf den Rollstuhl angewiesen', desc: 'Jede Bewegung wird übernommen: Lagern, Aufsetzen, Umsetzen mit Lifter, Wege im Rollstuhl.' },
      { title: 'Körperpflege, Essen, Trinken, Toilette vollständig übernommen', desc: 'Nahrung wird angereicht oder über eine Sonde gegeben, Inkontinenz versorgt, die Haut täglich gepflegt.' },
      { title: 'Kaum noch Verständigung', desc: 'Bei schwerer Demenz oder nach schweren Schlaganfällen: Angehörige werden nicht mehr erkannt, Bedürfnisse können nicht mitgeteilt werden.' },
      { title: 'Besondere Pflege mehrmals täglich', desc: 'Medikamente, Einreibungen, Wundversorgung, Absaugen oder Sauerstoff; ein Teil davon ist Behandlungspflege durch den Pflegedienst.' },
    ],
    beispiel: {
      titel: 'Beispiel: Frau, 90, schwere Demenz, bettlägerig, Inkontinenz',
      person: 'Sie wird gelagert, gewaschen, angezogen, gefüttert und mit Getränken versorgt; die Inkontinenz wird versorgt. Sie erkennt niemanden mehr und kann sich nicht mitteilen. Tabletten dreimal täglich, Einreibungen morgens und abends, täglich ein Verbandswechsel an der Ferse durch den Pflegedienst.',
      zeilen: [
        { modul: 'Mobilität: alle fünf Kriterien unselbständig', punkte: '15 von 15', gewichtet: '10' },
        { modul: 'Kognition: alle elf Fähigkeiten nicht vorhanden', punkte: '33 von 33', gewichtet: '15' },
        { modul: 'Selbstversorgung: alles unselbständig, Harn- und Stuhlinkontinenz', punkte: '48 von 54', gewichtet: '40' },
        { modul: 'Krankheit und Therapie: fünf Maßnahmen täglich, Verbandswechsel täglich', punkte: '4 von 15', gewichtet: '15' },
        { modul: 'Alltag und Kontakte: alle sechs Kriterien unselbständig', punkte: '18 von 18', gewichtet: '15' },
      ],
      gesamt: '95 Punkte = Pflegegrad 5',
      fazit: 'Pflegegrad 5 gibt es auch unter 90 Punkten, wenn beide Arme und beide Beine gebrauchsunfähig sind (§ 15 Abs. 4 SGB XI, besondere Bedarfskonstellation).',
    },
    versorgung: [
      { title: 'Betreuungskraft im Haus plus Pflegedienst', desc: 'Die Betreuungskraft übernimmt Grundpflege, Lagerung, Essen anreichen, Haushalt und ist nachts da; Wundversorgung, Sonde, Katheter und Spritzen bleiben beim Pflegedienst. Der Preis liegt bei Pflegegrad 5 etwas über dem Grundpreis von 2.150 €; bettlägerig und mit Nachteinsätzen kommen Aufschläge dazu. Dagegen stehen 990 € Pflegegeld, 295 € anteiliges Entlastungsbudget und bis zu 333 € Steuerermäßigung, zusammen bis zu 1.618 € im Monat. Ihren Eigenanteil zeigt der Rechner.' },
      { title: 'Wo die Grenze liegt', desc: 'Beatmung, Trachealkanüle oder ständige Überwachung sind außerklinische Intensivpflege nach § 37c SGB V durch Pflegefachkräfte, organisiert von der Krankenkasse. Das leistet keine Betreuungskraft. Alles andere ist zu Hause möglich.' },
      { title: 'Hilfsmittel, die die Pflege tragen', desc: 'Pflegebett mit Wechseldruckmatratze, Lifter, Pflegerollstuhl, Duschliege: verordnet der Arzt, zahlt die Krankenkasse. Pflegehilfsmittel zum Verbrauch 42 € im Monat, Umbau bis 4.180 € je Maßnahme.' },
      { title: 'Pflegeheim', desc: `Die Kasse zahlt ${euro(HEIM_LEISTUNG[5])} an das Heim; der Eigenanteil ist derselbe wie bei Pflegegrad 2, im Schnitt 3.364 € im ersten Jahr. Bei Pflegegrad 5 ist der Unterschied zum Eigenanteil zu Hause am größten.` },
    ],
    eigenanteil: null,
    preis: null,
    naechster: null,
    fragen: [
      { q: 'Was bekommt man bei Pflegegrad 5?', a: `${euro(PFLEGEGELD[5])} Pflegegeld im Monat oder ${euro(PFLEGESACHLEISTUNGEN[5])} Sachleistungen für den Pflegedienst, wahlweise kombiniert. Dazu ${euro(ENTLASTUNGSBETRAG)} Entlastungsbetrag, ${euro(ENTLASTUNGSBUDGET)} im Jahr für Verhinderungs- und Kurzzeitpflege, Tagespflege bis ${euro(TAGESPFLEGE[5])}, Hilfsmittel 42 € im Monat, bis 4.180 € für den Umbau, Beratungsbesuche vierteljährlich.` },
      { q: 'Wie viele Punkte braucht man für Pflegegrad 5?', a: '90 bis 100 Punkte. Oder eine besondere Bedarfskonstellation: Sind beide Arme und beide Beine gebrauchsunfähig, gilt Pflegegrad 5 auch mit weniger Punkten (§ 15 Abs. 4 SGB XI).' },
      { q: 'Was bedeutet Pflegegrad 5 im Alltag?', a: 'Schwerste Beeinträchtigungen mit besonderen Anforderungen an die Pflege: Die Person braucht bei allem Hilfe, Tag und Nacht, meist ist sie bettlägerig oder vollständig auf den Rollstuhl angewiesen und kann sich kaum noch verständigen.' },
      { q: 'Kann man mit Pflegegrad 5 zu Hause bleiben?', a: 'Ja, mit einer Betreuungskraft im Haus für Grundpflege und Betreuung und einem Pflegedienst für die Behandlungspflege. Die Grenze ist die außerklinische Intensivpflege, etwa bei Beatmung; die organisiert die Krankenkasse mit Pflegefachkräften.' },
      { q: 'Was kostet 24-Stunden-Pflege bei Pflegegrad 5?', a: `Bei Primundus etwas über dem Grundpreis von 2.150 € im Monat; bettlägerig und bei Nachteinsätzen kommen Aufschläge dazu, den Preis für Ihre Situation zeigt der Rechner. Dagegen stehen ${euro(PFLEGEGELD[5])} Pflegegeld, 295 € anteiliges Entlastungsbudget und bis zu 333 € Steuerermäßigung, zusammen bis zu 1.618 € im Monat.` },
      { q: 'Wie hoch ist der Eigenanteil im Pflegeheim bei Pflegegrad 5?', a: `Bundesweit durchschnittlich 3.364 € im Monat im ersten Jahr (vdek, Juli 2026), gleich hoch wie bei Pflegegrad 2 bis 4. Die Kasse zahlt ${euro(HEIM_LEISTUNG[5])} an das Heim.` },
      { q: 'Gibt es bei Pflegegrad 5 mehr Beratung oder Kurzzeitpflege?', a: `Die Beratung zu Hause können Sie vierteljährlich abrufen. Das Entlastungsbudget von ${euro(ENTLASTUNGSBUDGET)} im Jahr ist bei allen Pflegegraden ab 2 gleich; Kurzzeitpflege gibt es bis zu acht Wochen im Jahr.` },
    ],
  },
}

export const ALLE_GRADE: { grad: Grad; punkte: string; pflegegeld: string; name: string }[] = [
  { grad: 1, punkte: '12,5 bis unter 27', pflegegeld: '–', name: 'geringe Beeinträchtigungen' },
  { grad: 2, punkte: '27 bis unter 47,5', pflegegeld: euro(PFLEGEGELD[2]), name: 'erhebliche Beeinträchtigungen' },
  { grad: 3, punkte: '47,5 bis unter 70', pflegegeld: euro(PFLEGEGELD[3]), name: 'schwere Beeinträchtigungen' },
  { grad: 4, punkte: '70 bis unter 90', pflegegeld: euro(PFLEGEGELD[4]), name: 'schwerste Beeinträchtigungen' },
  { grad: 5, punkte: '90 bis 100', pflegegeld: euro(PFLEGEGELD[5]), name: 'schwerste Beeinträchtigungen mit besonderen Anforderungen' },
]
