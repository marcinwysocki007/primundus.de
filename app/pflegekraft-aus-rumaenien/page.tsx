import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, DunklerAbschnitt, Fragen, Kasten, Liste, MehrDazu, Punkte, RatgeberKopf, RatgeberRumpf, RechnerKasten, Schritte,
  Tabelle, Text, Zwischentitel,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

// Neufassung 13.10.2026 als neutraler Ratgeber: Primundus tritt nur als Herausgeber auf, ohne eigene Preise und ohne
// Aussage, ob Primundus Kräfte aus Rumänien hat. Deshalb ist auch der Rahmen neutral (RechnerKasten, Seitenleiste und
// Schlussband mit `neutral`, Schlussband ohne Bewertungen). Zahlen nur mit Quelle (Abschnitt „Quellen“).

const AKTUALISIERT = aktualisiertAm('pflegekraft-aus-rumaenien', '13. Oktober 2026')
const SRC = 'apex-pflegekraft-rumaenien'

const SECTIONS = [
  { id: 'kosten', title: 'Was sie im Monat kostet' },
  { id: 'zuschuesse', title: 'Was Kasse und Steuer tragen' },
  { id: 'legal', title: 'Drei legale Wege' },
  { id: 'anmelden', title: 'Selbst anstellen und anmelden' },
  { id: 'alltag', title: 'Was sie im Haushalt übernimmt' },
  { id: 'anreise', title: 'Anreise, Dauer, Wechsel' },
  { id: 'erfahrungen', title: 'Erfahrungen und Probleme' },
  { id: 'pruefliste', title: 'Prüfliste für Angebote' },
  { id: 'moldau', title: 'Kräfte aus Moldau' },
  { id: 'faq', title: 'Häufige Fragen' },
  { id: 'quellen', title: 'Quellen' },
]

// Sichtbare Fragen = Daten für das FAQ-Schema (eine Quelle, Zeichen für Zeichen gleich)
const FRAGEN = [
  { q: 'Wie viel kostet eine Pflegekraft aus Rumänien?', a: 'Für eine entsandte Kraft nennt die Verbraucherzentrale etwa 2.800 bis 3.500 € im Monat, für eine eigene Anstellung mindestens 2.800 €. Zimmer und Verpflegung stellen Sie zusätzlich, je nach Angebot kommt die Anreise dazu. Ihren Anteil senken das Pflegegeld von 347 bis 990 € ab Pflegegrad 2 und die Steuerermäßigung von bis zu 4.000 € im Jahr. Bei Pflegegrad 3 und voller Steuerermäßigung bleiben von 3.000 € ca. 2.068 € im Monat.' },
  { q: 'Ist eine Pflegekraft aus Rumänien illegal?', a: 'Nein, rumänische Staatsangehörige dürfen seit 2014 ohne Arbeitserlaubnis in Deutschland arbeiten. Illegal wird es bei Schwarzarbeit oder wenn eine angeblich selbstständige Kraft bei Ihnen wohnt und nach Ihren Vorgaben arbeitet. Legal sind die Entsendung mit A1-Bescheinigung, die eigene Anstellung mit Anmeldung und, in engen Grenzen, eine echte Selbstständigkeit.' },
  { q: 'Wie melde ich eine rumänische Pflegekraft an?', a: 'Wenn Sie die Kraft selbst anstellen, melden Sie sie bei ihrer Krankenkasse zur Sozialversicherung an; vorher brauchen Sie eine Betriebsnummer der Bundesagentur für Arbeit. Dazu kommen die Meldung bei der Unfallkasse und die Lohnsteuer beim Finanzamt. Der Haushaltsscheck gilt nur für Minijobs. Bei einer Entsendung ist die Kraft über ihre Firma in Rumänien versichert, und Sie melden sie nicht an.' },
  { q: 'Wie funktioniert das Entsendemodell mit einer Kraft aus Rumänien?', a: 'Die Kraft ist bei einer Firma in Rumänien angestellt und dort sozialversichert; die Firma schickt sie für eine befristete Zeit in Ihren Haushalt. Die A1-Bescheinigung der rumänischen Rentenkasse CNPP belegt, dass rumänisches Sozialversicherungsrecht gilt; ob das Modell insgesamt passt, entscheiden Vertrag und gelebter Alltag. Sie schließen einen Dienstleistungsvertrag mit der Firma oder einem Anbieter und werden nicht Arbeitgeber.' },
  { q: 'Was macht eine Haushaltshilfe aus Rumänien?', a: 'Sie hilft im Haushalt und bei der Grundpflege. Sie kocht, kauft ein und macht die Wäsche; Ihrer Mutter hilft sie beim Waschen, Anziehen und Essen und begleitet sie zum Arzt. Spritzen, Verbände und das Stellen von Medikamenten gehören zur Behandlungspflege; die Betreuungskraft sollte sie nicht übernehmen. Klären Sie mit der Hausärztin oder einem Pflegedienst, wer sie sicher ausführt; auf ärztliche Verordnung übernimmt sie ein ambulanter Pflegedienst. Sie wohnt mit im Haus, ist aber keine 24-Stunden-Kraft: Arbeitszeit, Bereitschaftszeiten, freie Tage und Ruhezeiten müssen geplant und vertraglich geregelt werden; als Obergrenze nennt die Verbraucherzentrale in der Regel 48 Stunden pro Woche.' },
  { q: 'Welche Erfahrungen machen Familien mit Pflegekräften aus Rumänien?', a: 'Prüfbare Erfahrungsberichte gibt es kaum; belegt sind Probleme der Betreuung im Haushalt allgemein, unabhängig vom Herkunftsland. Der Bericht der Bundesministerien von 2024 nennt undurchsichtige Verträge, begrenzte Deutschkenntnisse und unklare Grenzen zwischen Arbeits- und Ruhezeit. Vorbeugen können Sie mit einem Videogespräch vor der Zusage, der A1-Bescheinigung für genau diese Kraft und schriftlichen Regeln für freie Zeit und Ersatz.' },
  { q: 'Wie finde ich eine private Pflegekraft aus Rumänien?', a: 'Ohne Anbieter suchen Sie selbst, etwa über Empfehlungen, und stellen die Kraft dann als Arbeitgeber an. In einigen Regionen helfen nach dem Bericht der Bundesministerien von 2024 gemeinnützige Projekte von Caritas und Diakonie beim Anstellen, eines auch mit Lohnabrechnung und Meldungen. Führen Sie vor der Zusage ein Videogespräch und halten Sie Aufgaben, Arbeitszeit und Lohn schriftlich fest.' },
  { q: 'Dürfen Pflegekräfte aus Moldawien in Deutschland arbeiten?', a: 'Das hängt vom Pass ab: Mit rumänischem Pass dürfen sie arbeiten wie jede EU-Bürgerin, mit moldauischem Pass allein nur mit einem Aufenthaltstitel, der die Arbeit erlaubt. Die Republik Moldau gehört nicht zur EU; ohne Visum sind bis zu 90 Tage in 180 Tagen erlaubt, aber keine Arbeit. Einen rumänischen Pass haben laut Bundeszentrale für politische Bildung über eine Million Menschen aus Moldau.' },
]

const PRUEFLISTE = [
  'Wer ist mein Vertragspartner, mit Name, Sitz und Land?',
  'Bei wem ist die Kraft angestellt, und in welchem Land ist sie sozialversichert?',
  'Bekomme ich vor Arbeitsbeginn eine Kopie der A1-Bescheinigung für genau diese Kraft? Für eine Firma in Rumänien stellt sie die Rentenkasse CNPP aus. Heften Sie die Kopie ab.',
  'Was kommt zum Monatspreis dazu: Anreise, Nächte, Feiertage, Gebühren?',
  'Verlangen Sie eine Vermittlungsgebühr oder eine Anzahlung?',
  'Wie lange bin ich gebunden, und wie kündige ich?',
  'Wie schnell kommt Ersatz, wenn die Kraft krank wird, und wer zahlt die Fahrt?',
  'Kann ich vorher mit der Kraft sprechen, und wer hat ihre Deutschkenntnisse geprüft?',
  'Wen erreiche ich am Wochenende, wenn etwas ist?',
  'Bekomme ich Rechnungen zum Überweisen? Nur dann gilt bei einem Anbieter die Steuerermäßigung.',
]

const QUELLEN = [
  'Verbraucherzentrale: Ausländische Betreuungskräfte, wie geht das legal? (Kosten je Modell, 48-Stunden-Grenze, A1, Krankenversicherung bei Selbstständigen)',
  'Pflegewegweiser NRW (Verbraucherzentrale NRW): So viel kostet eine ausländische Haushalts- und Betreuungskraft (Kosten Selbstständige, Verhinderungspflege); Frage des Monats Mai 2023 (zusätzliche Stunden bei Kräften im Haushalt)',
  'GKV-Spitzenverband: Gemeinsames Rundschreiben zu den leistungsrechtlichen Vorschriften des SGB XI, 2026 (Verhinderungspflege)',
  'Bundesregierung: Gesetzentwurf zum Pflegeneuordnungsgesetz, 2026 (geplante Änderungen ab 2027)',
  'Abschlussbericht der Arbeitsgruppe von Bundesarbeitsministerium, Bundesgesundheitsministerium und Pflegebevollmächtigter zur Live-In-Betreuung, November 2024',
  'Bundesministerium für Gesundheit: Online-Ratgeber Demenz, Teilnahme am täglichen Leben',
  'Gemeinsamer Bundesausschuss: Häusliche-Krankenpflege-Richtlinie, Nr. 26 (Medikamente)',
  'Bundesministerium für Arbeit und Soziales: Pressemitteilung vom Dezember 2013 zur Freizügigkeit ab 2014',
  'Europäische Union: Länderprofil Rumänien; Your Europe: Stellen, die die A1-Bescheinigung ausstellen',
  'Deutsche Verbindungsstelle Krankenversicherung Ausland (DVKA): Länderseite Rumänien, Entsendung von abhängig beschäftigten Personen',
  'Bundeszentrale für politische Bildung: Kührer-Wielach/Suveica, Zwischen den Mächten (APuZ, 2024)',
  'Deutsche Botschaft Chișinău: Visa; BAMF: Einreisebestimmungen',
  'Minijob-Zentrale: Haushaltsscheck nur für Minijobs; Unfallkasse NRW: Haushaltshilfen',
  'Gesetze: § 19, § 36, § 37, § 39, § 42, § 42a, § 45b SGB XI; § 37 SGB V; § 35a, § 38, § 41a EStG; § 94 SGB XII; § 7, § 7a, § 18i, § 25 SGB IV; § 192 SGB VII; § 3 Entgeltfortzahlungsgesetz; § 27 Bundesmeldegesetz; § 2 Nachweisgesetz; § 4a Aufenthaltsgesetz; § 404 SGB III; Art. 12 Verordnung (EG) 883/2004',
  'Entfernung: eigene Berechnung der Luftlinie zwischen den Stadtzentren',
]

export const metadata: Metadata = {
  title: 'Pflegekraft aus Rumänien 2026: Kosten und legale Wege',
  description: 'Entsandte Kräfte, auch aus Rumänien, kosten laut Verbraucherzentrale etwa 2.800 bis 3.500 € im Monat. Bei Pflegegrad 3 zahlt die Kasse 599 € Pflegegeld.',
  alternates: { canonical: 'https://primundus.de/pflegekraft-aus-rumaenien' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Pflegekraft aus Rumänien: Kosten und legale Wege',
    description: 'Was eine Betreuungskraft aus Rumänien kostet und was nach Pflegegeld und Steuer bleibt.',
    url: 'https://primundus.de/pflegekraft-aus-rumaenien',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pflegekraft aus Rumänien: Was sie kostet, welche Wege legal sind und was die Kasse zahlt',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/pflegekraft-aus-rumaenien',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Organisation', item: 'https://primundus.de/organisation' },
      { '@type': 'ListItem', position: 3, name: 'Pflegekraft aus Rumänien', item: 'https://primundus.de/pflegekraft-aus-rumaenien' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FRAGEN.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  },
]

// Nummerierte Prüfliste im Kasten (zehn Fragen in fester Reihenfolge)
function NummernListe({ punkte }: { punkte: string[] }) {
  return (
    <ol className="border-t border-pm-line">
      {punkte.map((p, i) => (
        <li key={p} className="flex gap-4 py-3.5 border-b border-pm-line last:border-0 text-[17px] leading-[1.6] text-pm-body">
          <span aria-hidden="true" className="mt-[1px] w-7 h-7 rounded-full bg-pm-shell text-pm-taupe-ink font-bold text-[14px] flex items-center justify-center flex-none [font-variant-numeric:tabular-nums]">
            {i + 1}
          </span>
          <span className="min-w-0">{p}</span>
        </li>
      ))}
    </ol>
  )
}

export default function PflegekraftAusRumaenien() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      <ArticleProgressBar />
      <div className="lg:hidden">
        <ArticleTOC sections={SECTIONS} />
      </div>

      <div className="bg-pm-paper">
        <RatgeberKopf
          pfad={[
            { label: 'Startseite', href: '/' },
            { label: 'Organisation', href: '/organisation' },
            { label: 'Pflegekraft aus Rumänien' },
          ]}
          augenbraue="Ratgeber Pflegekräfte"
          titel="Pflegekraft aus Rumänien: Was sie kostet, welche Wege legal sind und was die Kasse zahlt"
          einleitung="Schickt eine Firma aus dem EU-Ausland die Betreuungskraft zu Ihnen (Entsendung), kostet das nach Angaben der Verbraucherzentrale etwa 2.800 bis 3.500 € im Monat. Bei Pflegegrad 3 bleiben von einem Angebot über 3.000 € nach Pflegegeld und voller Steuerermäßigung ca. 2.068 €. Legale Wege sind die Entsendung, die Anstellung bei Ihnen oder, in engen Grenzen, eine selbstständige Kraft; ob das Modell passt, entscheiden Vertrag und gelebter Alltag. Eine Arbeitserlaubnis brauchen Kräfte mit rumänischem Pass seit 2014 nicht."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="16 Min."
          blickVerweise={[
            { href: '#kosten', titel: 'Kosten', text: 'etwa 2.800 bis 3.500 € im Monat für eine entsandte Kraft, Zimmer und Verpflegung kommen dazu' },
            { href: '#zuschuesse', titel: 'Zuschüsse', text: 'Pflegegeld und Steuerermäßigung, mit Rechenbeispiel für Pflegegrad 3' },
            { href: '#legal', titel: 'Legal', text: 'Entsendung, eigene Anstellung oder Selbstständigkeit, und wo das Risiko für Sie liegt' },
            { href: '#anmelden', titel: 'Anmelden', text: 'sechs Schritte, wenn Sie selbst Arbeitgeber werden' },
            { href: '#pruefliste', titel: 'Prüfliste', text: 'zehn Fragen, die ein seriöser Anbieter ohne Zögern beantwortet' },
            { href: '#moldau', titel: 'Moldau', text: 'warum es bei Kräften aus Moldawien auf den Pass ankommt' },
          ]}
        />

        <RatgeberRumpf abschnitte={SECTIONS} src={SRC} neutral>
          <Abschnitt id="kosten" titel="Was kostet eine rumänische Pflegekraft im Monat?">
            <Text>
              Laut Verbraucherzentrale zahlen Sie für eine entsandte Kraft etwa 2.800 bis 3.500 € im Monat, für eine eigene Anstellung
              mindestens 2.800 €. Die Anbieter staffeln ihre Preise nach Hilfebedarf und Deutschkenntnissen. So unterscheiden sich die Modelle:
            </Text>
            <Tabelle
              kopf={['Modell', 'Kosten im Monat', 'Was dazukommt']}
              zeilen={[
                ['Entsendung durch eine Firma im EU-Ausland, etwa in Rumänien', 'etwa 2.800 bis 3.500 €', 'oft Gebühren der Vermittlungsagentur'],
                ['Eigene Anstellung im Haushalt', 'mindestens 2.800 €', 'Telefon, Internet, Fahrten'],
                ['Selbstständige Betreuungskraft', 'etwa 1.500 bis 3.000 €', 'Risiko der Scheinselbstständigkeit'],
              ]}
              betont={1}
              fuss="Quellen: Verbraucherzentrale (Entsendung, Anstellung), Pflegewegweiser NRW (Selbstständige). Zimmer und Verpflegung stellen Sie in jedem Modell zusätzlich."
            />
            <Zwischentitel>Das gehört in ein Angebot</Zwischentitel>
            <Text>
              Mit dem Monatspreis einer Entsendung bezahlen Sie den Lohn der Kraft, ihre Sozialbeiträge in Rumänien und die Arbeit des
              Anbieters. Was sonst noch im Preis steckt, ist von Anbieter zu Anbieter verschieden. Fragen Sie nach:
            </Text>
            <Liste
              punkte={[
                'An- und Abreise der Kraft, auch bei jedem Wechsel',
                'Zuschläge für Nächte, für eine zweite Person im Haushalt und für Feiertage',
                'eine Vermittlungsgebühr oder eine Anzahlung',
                'Kosten, wenn Sie auf eigenen Wunsch eine andere Kraft möchten',
              ]}
            />
            <Text>
              Mehr kostet es, wenn die Kraft besser Deutsch sprechen soll, wenn Ihre Mutter nachts regelmäßig Hilfe braucht oder wenn die
              Kraft zwei Personen betreut. Wie hoch die Aufschläge sind, legt jeder Anbieter selbst fest. Vergleichen Sie deshalb nur
              Angebote, die für dieselbe Situation gerechnet sind.
            </Text>
          </Abschnitt>

          <Abschnitt id="zuschuesse" titel="Was Pflegekasse und Finanzamt bei einer Kraft aus Rumänien übernehmen">
            <Text>
              Zwei Leistungen senken laufend, was bei Ihnen bleibt: Pflegegeld und Steuerermäßigung. An die Betreuungskraft selbst zahlt
              die Pflegekasse nichts. Einen dritten Betrag zahlt die Kasse nur, wenn Sie als pflegende Angehörige verhindert sind oder Ihre
              Mutter vorübergehend zur Kurzzeitpflege in ein Heim muss.
            </Text>
            <Punkte
              punkte={[
                { title: 'Pflegegeld: 347 bis 990 € im Monat', desc: 'Ihre Mutter bekommt das Pflegegeld ab Pflegegrad 2 von der Kasse überwiesen und setzt es frei ein, auch für eine Betreuungskraft (§ 37 SGB XI). Die Beträge: 347 € bei Pflegegrad 2, 599 € bei Pflegegrad 3, 800 € bei Pflegegrad 4 und 990 € bei Pflegegrad 5.' },
                { title: 'Steuerermäßigung: bis 4.000 € im Jahr', desc: 'Das Finanzamt zieht 20 Prozent der Kosten für Pflege und Betreuung im Haushalt von der Einkommensteuer ab (§ 35a EStG). Das gilt auch für eine selbst angestellte Kraft. Bei einem Anbieter brauchen Sie dafür eine Rechnung. Bezahlen Sie per Überweisung, auch den Lohn einer Angestellten: Das Gesetz verlangt die Zahlung auf ein Konto, Barzahlung zählt nicht (§ 35a Abs. 5 EStG). Wer wenig Einkommensteuer zahlt, nutzt die Ermäßigung nur zum Teil.' },
                { title: 'Gemeinsamer Jahresbetrag: bis 3.539 € im Jahr, für Verhinderungs- und Kurzzeitpflege', desc: 'Viele nennen ihn Entlastungsbudget. Aus ihm zahlt die Kasse Verhinderungs- und Kurzzeitpflege (§ 42a SGB XI). Weil die Kraft durchgängig im Haushalt lebt, lässt sich das Geld nach dem Pflegewegweiser NRW nicht für die laufende Betreuung nutzen. Für Verhinderungspflege erstattet die Kasse nur Kosten, die zusätzlich entstehen, während Sie als pflegende Angehörige verhindert sind (§ 39 SGB XI). Das können Extra-Stunden der Kraft mit eigener Rechnung sein, solange sie die 48-Stunden-Woche nicht überschreitet. Fällt die Kraft selbst aus, kann Ihre Mutter in die Kurzzeitpflege; die Kosten für Pflege und Betreuung dort zahlt die Kasse aus diesem Betrag. Klären Sie vorher schriftlich mit der Kasse, was sie anerkennt.' },
              ]}
            />
            <Text>
              Zwei weitere Leistungen gibt es in der Regel nicht für die Betreuungskraft. Den Entlastungsbetrag von 131 € im Monat erstattet
              die Kasse nur für Tages- und Nachtpflege, Kurzzeitpflege, Pflegedienste und nach Landesrecht anerkannte Angebote.
              Pflegesachleistungen rechnen nur Pflegedienste und Einzelpersonen ab, die einen Vertrag mit der Pflegekasse haben (§ 36 Abs. 4
              SGB XI).
            </Text>
            <Text>
              <strong>Geplant ab 2027:</strong> Nach dem Gesetzentwurf der Bundesregierung zum Pflegeneuordnungsgesetz soll das Pflegegeld bei
              Pflegegrad 3 dann von 599 auf 630 € im Monat steigen. Den Gemeinsamen Jahresbetrag soll es nicht mehr geben; sein Geld soll in
              neue Budgets fließen. Die Beträge auf dieser Seite gelten für 2026.
            </Text>
            <Text>
              Reichen Rente und Erspartes nicht, kann das Sozialamt Hilfe zur Pflege leisten. Ob es eine Betreuungskraft mitfinanziert,
              entscheidet das Amt im Einzelfall. Kinder müssen sich erst an den Kosten beteiligen, wenn ihr Gesamteinkommen über 100.000 € im
              Jahr liegt (§ 94 Abs. 1a SGB XII).
            </Text>
            <Tabelle
              titel="Rechenbeispiel: Pflegegrad 3, Angebot über 3.000 € im Monat"
              kopf={['Posten', 'Betrag', 'Hinweis']}
              zeilen={[
                ['Monatspreis laut Angebot', '3.000 €', 'Beispielwert aus der Spanne der Verbraucherzentrale'],
                ['Pflegegeld', '− 599 €', 'Pflegegrad 3'],
                ['Steuerermäßigung', '− 333 €', '4.000 € geteilt durch 12; kommt über die Einkommensteuer des Jahres, voll nur ab 4.000 € Steuer; mit Rechnung und Überweisung'],
                ['Bleibt im Monat', 'ca. 2.068 €', 'dazu Zimmer, Verpflegung und, je nach Angebot, die Anreise'],
              ]}
              betont={1}
              fuss="Der Gemeinsame Jahresbetrag fehlt in der Rechnung, weil er den Monatspreis nicht senkt."
            />
            <MehrDazu
              label="Mehr zu Kosten und Zuschüssen:"
              links={[
                { href: '/kosten', text: 'Was 24-Stunden-Pflege insgesamt kostet' },
                { href: '/eigenanteil-24h-pflege-senken', text: 'Eigenanteil senken: alle Möglichkeiten' },
              ]}
            />
            <RechnerKasten src={SRC} neutral />
          </Abschnitt>

          <DunklerAbschnitt
            id="legal"
            titel="Ist eine Pflegekraft aus Rumänien legal? Ja, auf drei Wegen"
            einleitung="Für rumänische Staatsangehörige gilt seit 2014 die volle Freizügigkeit, sie brauchen in Deutschland keine Arbeitserlaubnis. Ob die Betreuung bei Ihnen legal ist, entscheiden Vertrag und gelebter Alltag."
            punkte={[
              { title: 'Entsendung mit A1-Bescheinigung', desc: 'Die Kraft ist bei einer Firma in Rumänien angestellt und dort sozialversichert. Die Firma schickt sie zu Ihnen, höchstens 24 Monate am Stück, und sie darf keine zuvor entsandte Kraft ablösen (Art. 12 Verordnung (EG) 883/2004). Lassen Sie sich vor Beginn die A1-Bescheinigung zeigen: Sie belegt, dass das rumänische Sozialversicherungsrecht gilt; ausgestellt wird sie von der staatlichen Rentenkasse CNPP. Sie sind nicht Arbeitgeber. Die Aufgaben der Kraft legen Sie vorher im Vertrag fest.' },
              { title: 'Eigene Anstellung', desc: 'Sie schließen einen Arbeitsvertrag und werden Arbeitgeber. Dazu gehören Anmeldung und Beiträge, Lohn nach deutschem Recht, Urlaub und Lohnfortzahlung bei Krankheit. Dafür bestimmen Sie den Alltag selbst. Die Schritte stehen im nächsten Abschnitt.' },
              { title: 'Selbstständige Betreuungskraft', desc: 'Die Kraft hat ein eigenes Gewerbe, in Deutschland oder in Rumänien, und schreibt Ihnen Rechnungen. Legal ist das nur, wenn sie selbst über Zeit und Ablauf ihrer Arbeit entscheidet und weitere Auftraggeber haben kann. Arbeitet sie nur für Ihren Haushalt, setzt das deutsche Recht dem enge Grenzen, schreibt der Bericht der Bundesministerien für Arbeit und für Gesundheit von 2024.' },
            ]}
          >
            <Text>
              <strong>Hinweis:</strong> Es besteht die Gefahr der Scheinselbstständigkeit, wenn die Betreuungskraft bei Ihnen wohnt, nach Ihren
              Vorgaben arbeitet und nur Sie als Auftraggeber hat, mit folgenden Konsequenzen für die Familie: Sie gelten als Arbeitgeber und
              zahlen die Sozialversicherungsbeiträge nach; hinzu kommen Bußgelder, bei Vorsatz ein Strafverfahren.
            </Text>
            <Text>
              Die Forderungen verjähren erst nach vier Jahren, bei Vorsatz nach 30 Jahren (§ 25 SGB IV). Ob eine Tätigkeit selbstständig ist,
              klärt auf Antrag die Deutsche Rentenversicherung Bund im Statusfeststellungsverfahren (§ 7a SGB IV).
            </Text>
            <Text>
              Branchenexperten gehen nach dem Bericht der Ministerien davon aus, dass ein wesentlicher Teil der Betreuungsverhältnisse
              informell läuft, ohne schriftlichen Vertrag.
            </Text>
            <Text>
              <strong>Hinweis:</strong> Es besteht die Gefahr der Schwarzarbeit, wenn für die Kraft keine Sozialbeiträge gezahlt werden, etwa
              weil sie ohne Anmeldung und gegen bar bei Ihnen arbeitet, mit folgenden Konsequenzen für die Familie: Die
              Sozialversicherungsträger fordern die Beiträge nach, und die Steuerermäßigung entfällt.
            </Text>
            <MehrDazu
              label="Im Detail:"
              links={[
                { href: '/pflegekraft-legal-beschaeftigen', text: 'Pflegekraft legal beschäftigen: die drei Modelle' },
                { href: '/scheinselbststaendigkeit-pflege-vermeiden', text: 'woran Prüfer Scheinselbstständigkeit erkennen' },
              ]}
            />
            <MehrDazu
              label="Andere Herkunftsländer:"
              links={[
                { href: '/pflegekraft-aus-polen', text: 'Pflegekraft aus Polen' },
                { href: '/pflegekraft-aus-bulgarien', text: 'Pflegekraft aus Bulgarien' },
              ]}
            />
          </DunklerAbschnitt>

          <Abschnitt id="anmelden" titel="Rumänische Pflegekraft anmelden: sechs Schritte für die eigene Anstellung">
            <Text>
              Wenn Sie die Kraft selbst anstellen, erledigen Sie als Arbeitgeber die Meldungen. Bei einer Entsendung ist die Kraft über ihre
              Firma in Rumänien versichert, und Sie melden sie nicht zur Sozialversicherung an.
            </Text>
            <Schritte
              schritte={[
                { title: 'Arbeitsvertrag schriftlich', desc: 'Halten Sie Aufgaben, Arbeitszeit, freie Tage, Lohn, Urlaub sowie Kost und Logis fest. Die wesentlichen Bedingungen bekommt die Kraft von Ihnen schriftlich. Per E-Mail reicht es, wenn sie das Dokument speichern und ausdrucken kann und Sie um eine Empfangsbestätigung bitten. Auf Wunsch bekommt sie es unterschrieben auf Papier (§ 2 Nachweisgesetz).' },
                { title: 'Betriebsnummer beantragen', desc: 'Ihr Haushalt braucht eine Betriebsnummer der Bundesagentur für Arbeit; ohne sie können Sie nichts melden (§ 18i SGB IV).' },
                { title: 'Bei der Krankenkasse anmelden', desc: 'Die Anmeldung zur Sozialversicherung geht an die Krankenkasse der Kraft. Der Haushaltsscheck der Minijob-Zentrale gilt nur für Minijobs bis 603 € im Monat.' },
                { title: 'Bei der Unfallkasse anmelden', desc: 'Beschäftigte im Haushalt sind gesetzlich unfallversichert. Melden Sie die Beschäftigung innerhalb einer Woche bei der Unfallkasse an, die für Ihren Wohnort zuständig ist (§ 192 SGB VII).' },
                { title: 'Lohnsteuer abführen', desc: 'Als Arbeitgeber behalten Sie die Lohnsteuer ein und melden sie dem Finanzamt. Die Lohnabrechnung kann ein Steuerbüro übernehmen.' },
                { title: 'Wohnsitz anmelden', desc: 'Bleibt die Kraft länger als drei Monate, meldet sie sich beim Bürgeramt an (§ 27 Bundesmeldegesetz).' },
              ]}
            />
            <Text>
              Wird Ihre Angestellte krank, zahlen Sie den Lohn bis zu sechs Wochen weiter (§ 3 Entgeltfortzahlungsgesetz) und organisieren den
              Ersatz selbst. Diese Zeit kann Ihre Mutter in der Kurzzeitpflege überbrücken. Die Kosten für Pflege und Betreuung dort übernimmt
              die Kasse bis zur Höhe des Gemeinsamen Jahresbetrags. Unterkunft, Verpflegung und den Investitionsanteil des Heims zahlt Ihre
              Mutter selbst; das Pflegegeld läuft bis zu acht Wochen im Jahr zur Hälfte weiter.
            </Text>
            <Text>
              In einigen Regionen helfen gemeinnützige Projekte beim Anstellen. Nach dem Bericht der Ministerien unterstützt die Caritas
              Familien bei den Arbeitgeberpflichten, ein Projekt mit der Diakonie in Württemberg übernimmt Lohnabrechnung und Meldungen.
            </Text>
            <MehrDazu
              label="Alle Meldungen im Detail:"
              links={[{ href: '/pflegekraft-sozialversicherung-anmelden', text: 'Pflegekraft bei der Sozialversicherung anmelden' }]}
            />
          </Abschnitt>

          <Abschnitt id="alltag" titel="Haushaltshilfe aus Rumänien: was sie übernimmt und was nicht">
            <Text>
              Eine Haushaltshilfe aus Rumänien hilft im Haushalt, betreut Ihre Mutter und übernimmt die Grundpflege. Nach dem Bericht der
              Ministerien sind das die erlaubten Aufgaben, egal ob ein Angebot von Haushaltshilfe, Betreuungskraft oder Pflegekraft spricht.
            </Text>
            <Text>
              Im Haushalt kocht die Kraft, wie Ihre Mutter es gewohnt ist, kauft ein, macht die Wäsche und hält die genutzten Räume sauber.
              Sie leistet Ihrer Mutter Gesellschaft, geht mit ihr spazieren, begleitet sie zum Arzt und sorgt für feste Zeiten im Tag, die bei
              Demenz Orientierung geben. In der Grundpflege hilft sie beim Waschen, Anziehen und Essen und begleitet sie zur Toilette.
            </Text>
            <Text>
              Spritzen, Wundversorgung und das Stellen von Medikamenten gehören zur Behandlungspflege. Die Betreuungskraft sollte diese
              Aufgaben nicht übernehmen. Klären Sie mit der Hausärztin oder einem Pflegedienst, wer sie sicher ausführt; auf ärztliche
              Verordnung übernimmt sie ein ambulanter Pflegedienst, den die Krankenkasse bezahlt. Ihre Mutter trägt dann nur die gesetzliche
              Zuzahlung.
            </Text>
            <Zwischentitel>24-Stunden-Pflege aus Rumänien: Arbeitszeit und Nächte</Zwischentitel>
            <Text>
              Die Kraft wohnt bei Ihrer Mutter und ist deshalb auch nachts in der Nähe. Arbeiten darf sie trotzdem nicht 24 Stunden: Die
              Verbraucherzentrale nennt 48 Stunden pro Woche als Grenze.
            </Text>
            <Text>
              Hilft die Kraft Ihrer Mutter jede Nacht mehrmals beim Aufstehen, ist das Arbeit. Dafür braucht die Kraft einen Ausgleich, etwa
              freie Stunden am Tag, in denen Sie oder ein Pflegedienst da sind. Die Arbeitsgruppe der Ministerien empfiehlt einen Pflege-Mix:
              Betreuungskraft, Familie und Pflegedienst teilen sich die Aufgaben.
            </Text>
            <Zwischentitel>Zimmer, Kost und freie Zeit</Zwischentitel>
            <Text>
              Sie stellen ein eigenes Zimmer, das die Kraft abschließen kann, dazu Verpflegung, Bad und Küche zum Mitbenutzen und Internet für
              die Anrufe nach Hause. Planen Sie feste freie Zeiten ein, auch am Wochenende, und sprechen Sie sie vor dem Start ab.
            </Text>
          </Abschnitt>

          <Abschnitt id="anreise" titel="Anreise aus Rumänien, Einsatzdauer und Wechsel">
            <Text>
              Bukarest liegt rund 1.300 Kilometer Luftlinie von Berlin entfernt. Bei dieser Entfernung zählen zwei Fragen besonders: wie lange
              eine Kraft bleibt und wie schnell Ersatz kommt.
            </Text>
            <Punkte
              punkte={[
                { title: 'Dauer eines Einsatzes', desc: 'Eine Entsendung darf bis zu 24 Monate dauern; nach drei Monaten heimfahren muss die Kraft nicht. Wie lange sie am Stück bleibt, vereinbaren Anbieter, Kraft und Familie. Ein längerer Einsatz bedeutet weniger Wechsel für Ihre Mutter, aber auch weniger Erholung für die Kraft.' },
                { title: 'Wechsel bei einer Entsendung', desc: 'Eine entsandte Kraft darf keine Kraft ablösen, die zuvor nach Deutschland entsandt war (Art. 12 Verordnung (EG) 883/2004). Eine Ausnahme nennt die Deutsche Verbindungsstelle Krankenversicherung Ausland (DVKA): Musste die Vorgängerin unplanmäßig gehen, etwa wegen schwerer Krankheit, darf eine andere Kraft die restliche geplante Zeit übernehmen.' },
                { title: 'Ersatz bei Krankheit', desc: 'Wird die Kraft krank oder muss sie zu ihrer Familie, braucht Ihre Mutter Hilfe, bis die nächste Kraft ankommt. Lassen Sie sich schriftlich geben, wie schnell Ersatz kommt, wer die Fahrt bezahlt und wer in der Zwischenzeit einspringt.' },
              ]}
            />
            <Text>
              Kommt eine neue Kraft, solange die bisherige noch da ist, hilft eine Übergabe im Haus: Die Neue hört, was Ihre Mutter morgens
              braucht, und Sie müssen nicht alles neu erklären.
            </Text>
          </Abschnitt>

          <Abschnitt id="erfahrungen" titel="Erfahrungen mit Pflegekräften aus Rumänien: was gut läuft und wo es hakt">
            <Text>
              Die belegten Probleme betreffen die Betreuung im Haushalt allgemein, unabhängig vom Herkunftsland. Einzelne Erfahrungsberichte im
              Netz lassen sich kaum prüfen. Nach dem Bericht der Ministerien schwanken die Schätzungen zwischen 100.000 und 210.000
              Betreuungskräften, die an einem Stichtag in Deutschland im Einsatz sind. Belastbar sind diese Befunde:
            </Text>
            <Liste
              punkte={[
                'Der Bericht der Ministerien (2024) nennt für die Betreuung im Haushalt undurchsichtige Vertragsbeziehungen, begrenzte Deutschkenntnisse und die schwierige Trennung von Arbeits- und Ruhezeit als typische Probleme.',
                'Bei selbstständigen Kräften im Franchise-Modell fehlt laut Verbraucherzentrale oft eine ausreichende Krankenversicherung.',
                'Für regulär beschäftigte Kräfte zeigen Studien nach demselben Bericht, dass sich die Betreuung mit angemessenen Arbeitsbedingungen rechtssicher gestalten lässt.',
              ]}
            />
            <Zwischentitel>Vor dem Start und in den ersten Wochen</Zwischentitel>
            <Liste
              punkte={[
                'Führen Sie vor der Zusage ein Videogespräch. Bitten Sie die Kraft zu erzählen, wie sie einen Morgen mit Ihrer Mutter beginnen würde.',
                'Schreiben Sie den Tag Ihrer Mutter auf eine Seite: Aufstehen, Mahlzeiten, Tabletten, Lieblingssendung und was sie beruhigt, wenn sie unruhig wird.',
                'Hängen Sie Notrufnummern und die Nummer der Hausarztpraxis gut sichtbar neben das Telefon.',
                'Verabreden Sie nach zwei Wochen ein Gespräch zu dritt, mit Ihrer Mutter, der Kraft und Ihnen. Dann kann jede sagen, was gut läuft und was nicht.',
              ]}
            />
          </Abschnitt>

          <Abschnitt id="pruefliste" titel="Prüfliste: zehn Fragen an jedes Angebot">
            <Kasten titel="Zehn Fragen, bevor Sie unterschreiben">
              <Text>Ein seriöser Anbieter beantwortet diese Fragen schriftlich und ohne Zögern.</Text>
              <NummernListe punkte={PRUEFLISTE} />
              <Text>Weicht ein Anbieter bei den ersten drei Fragen aus, unterschreiben Sie besser nicht.</Text>
            </Kasten>
          </Abschnitt>

          <Abschnitt id="moldau" titel="24-Stunden-Pflegekräfte aus Moldawien: was für sie gilt">
            <Text>
              Bei Kräften aus der Republik Moldau, oft Moldawien genannt, kommt es auf den Pass an. Moldau gehört nicht zur EU, deshalb gilt
              die EU-Freizügigkeit für moldauische Staatsangehörige nicht.
            </Text>
            <Text>
              Mit biometrischem Pass dürfen sie ohne Visum bis zu 90 Tage innerhalb von 180 Tagen nach Deutschland reisen, etwa zu Besuch.
              Arbeiten dürfen sie erst mit einem Aufenthaltstitel, der das erlaubt; den Titel beantragen sie als nationales Visum bei der
              deutschen Botschaft (BAMF, § 4a Aufenthaltsgesetz).
            </Text>
            <Text>
              Mit rumänischem Pass ist es anders. Über eine Million Menschen aus Moldau haben auch die rumänische Staatsangehörigkeit,
              berichtet die Bundeszentrale für politische Bildung. Mit diesem Pass sind sie EU-Bürger und können entsandt, angestellt oder
              selbstständig tätig sein wie jede Rumänin.
            </Text>
            <Text>
              <strong>Hinweis:</strong> Es besteht die Gefahr illegaler Beschäftigung, wenn eine Kraft nur mit moldauischem Pass und ohne
              passenden Aufenthaltstitel bei Ihnen arbeitet, mit folgenden Konsequenzen für die Familie: Beschäftigen Sie die Kraft selbst,
              können die Behörden ein Bußgeld gegen Sie verhängen (§ 404 SGB III); in jedem Fall darf die Kraft nicht weiter bei Ihnen arbeiten.
            </Text>
            <Text>
              Fragen Sie deshalb vor dem Start, welchen Pass die Kraft hat. Kommt sie über eine Firma in Rumänien, gehört eine
              A1-Bescheinigung dazu; mit moldauischem Pass allein braucht sie zusätzlich einen deutschen Aufenthaltstitel.
            </Text>
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen zur Pflegekraft aus Rumänien">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>

          <Abschnitt id="quellen" titel="Quellen">
            <Liste punkte={QUELLEN} />
          </Abschnitt>

          <Weiterlesen aktuell="pflegekraft-aus-rumaenien" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand src={SRC} neutral ohneBewertungen />
      </div>
    </>
  )
}
