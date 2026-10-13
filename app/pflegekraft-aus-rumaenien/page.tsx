import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, DunklerAbschnitt, Fragen, Kasten, Liste, MehrDazu, Punkte, RatgeberKopf, RatgeberRumpf, RechnerKasten, Schritte,
  Text, Zwischentitel,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

// Neufassung 13.10.2026 als neutraler Ratgeber, Wortlaut aus dem Entwurf Fassung 6e
// (seo-reports/entwuerfe/pflegekraft-aus-rumaenien-2026-10-13.md): Primundus tritt nur als Herausgeber auf, ohne eigene
// Preise und ohne Aussage, ob Primundus Kräfte aus Rumänien hat. Deshalb ist auch der Rahmen neutral (RechnerKasten,
// Seitenleiste und Schlussband mit `neutral`, Schlussband ohne Bewertungen). Reihenfolge nach den Suchanteilen
// (Search Console, 480 Tage): Aufgaben, Kosten mit Pflegekasse und Finanzamt, 24 Stunden mit Moldau, Erfahrungen, Legal,
// Anmelden, danach Anreise und Prüfliste. Zahlen nur mit Quelle (Abschnitt „Quellen“).

const AKTUALISIERT = aktualisiertAm('pflegekraft-aus-rumaenien', '13. Oktober 2026')
const SRC = 'apex-pflegekraft-rumaenien'
const LINK = 'font-semibold text-pm-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors'

const SECTIONS = [
  { id: 'alltag', title: 'Haushaltshilfe und Alltag' },
  { id: 'kosten', title: 'Kosten, Kasse und Steuer' },
  { id: 'arbeitszeit', title: '24 Stunden: Arbeitszeit und Nächte' },
  { id: 'moldau', title: 'Kräfte aus Moldau' },
  { id: 'erfahrungen', title: 'Erfahrungen' },
  { id: 'legal', title: 'Drei legale Wege' },
  { id: 'anmelden', title: 'Selbst anstellen und anmelden' },
  { id: 'anreise', title: 'Anreise, Dauer, Wechsel' },
  { id: 'pruefliste', title: 'Prüfliste für Angebote' },
  { id: 'faq', title: 'Häufige Fragen' },
  { id: 'quellen', title: 'Quellen' },
]

// Sichtbare Fragen = Daten für das FAQ-Schema (eine Quelle, Zeichen für Zeichen gleich)
const FRAGEN = [
  { q: 'Was macht eine Haushaltshilfe aus Rumänien?', a: 'Sie hilft im Haushalt und bei der Grundpflege: Sie kocht, kauft ein und macht die Wäsche, hilft Ihrer Mutter beim Waschen, Anziehen und Essen und begleitet sie zum Arzt. Spritzen, Verbände und das Stellen von Medikamenten gehören zur Behandlungspflege und nicht zu den Aufgaben der Betreuungskraft; dafür kann die Hausärztin häusliche Krankenpflege verordnen. Die Kraft wohnt mit im Haus, arbeitet aber nicht 24 Stunden. Arbeitszeit, Bereitschaftszeiten, freie Tage und Ruhezeiten müssen vertraglich geregelt werden; als Grenze nennt die Verbraucherzentrale 48 Stunden pro Woche.' },
  { q: 'Wie viel kostet eine Pflegekraft aus Rumänien?', a: 'Eine eigene Preisübersicht nur für Kräfte aus Rumänien gibt es nicht. Für alle entsandten Kräfte aus Osteuropa zusammen nennt die Verbraucherzentrale etwa 2.800 bis 3.500 € im Monat; die Preise richten sich nach Hilfebedarf und Deutschkenntnissen. Zimmer und Verpflegung stellen Sie zusätzlich, je nach Angebot kommen Anreise, Feiertage oder Gebühren dazu. Braucht Ihre Mutter nachts regelmäßig Hilfe, braucht die Kraft dafür einen Ausgleich; Bereitschaft im Haushalt zählt als Arbeitszeit. Das Pflegegeld von 347 bis 990 € ab Pflegegrad 2 kann Ihre Mutter dafür einsetzen.' },
  { q: 'Dürfen Pflegekräfte aus Moldawien in Deutschland arbeiten?', a: 'Das hängt vom Pass ab: Mit rumänischem Pass dürfen sie arbeiten wie jede EU-Bürgerin, mit moldauischem Pass allein nur mit einem Aufenthaltstitel, der die Arbeit erlaubt. Die Republik Moldau gehört nicht zur EU; mit biometrischem Pass sind ohne Visum bis zu 90 Tage in 180 Tagen erlaubt, aber keine Arbeit. Einen rumänischen Pass haben laut Bundeszentrale für politische Bildung über eine Million Menschen aus Moldau.' },
  { q: 'Welche Erfahrungen machen Familien mit Pflegekräften aus Rumänien?', a: 'Prüfbare Erfahrungsberichte gibt es kaum; belegt sind Probleme der Betreuung im Haushalt allgemein, unabhängig vom Herkunftsland. Der Bericht der Bundesministerien von 2024 nennt undurchsichtige Verträge, begrenzte Deutschkenntnisse und unklare Grenzen zwischen Arbeits- und Ruhezeit. Vorbeugen können Sie mit einem Videogespräch vor der Zusage, der A1-Bescheinigung für genau diese Kraft und schriftlichen Regeln für freie Zeit und Ersatz.' },
  { q: 'Ist eine Pflegekraft aus Rumänien illegal?', a: 'Nein, rumänische Staatsangehörige dürfen seit 2014 ohne Arbeitserlaubnis in Deutschland arbeiten. Illegal wird es bei Schwarzarbeit oder wenn eine angeblich selbstständige Kraft bei Ihnen wohnt und nach Ihren Vorgaben arbeitet. Legal sind die Entsendung mit A1-Bescheinigung, die eigene Anstellung mit Anmeldung und, in engen Grenzen, eine echte Selbstständigkeit.' },
  { q: 'Wie funktioniert das Entsendemodell mit einer Kraft aus Rumänien?', a: 'Die Kraft ist bei einer Firma in Rumänien angestellt und dort sozialversichert; die Firma schickt sie für eine befristete Zeit in Ihren Haushalt. Die A1-Bescheinigung der rumänischen Rentenkasse CNPP belegt, dass rumänisches Sozialversicherungsrecht gilt; ob das Modell insgesamt passt, entscheiden der Vertrag und wie die Betreuung im Alltag tatsächlich läuft. Sie schließen einen Dienstleistungsvertrag mit der Firma oder einem Anbieter und werden nicht Arbeitgeber.' },
  { q: 'Wie melde ich eine rumänische Pflegekraft an?', a: 'Wenn Sie die Kraft selbst anstellen, melden Sie sie bei ihrer Krankenkasse zur Sozialversicherung an; vorher brauchen Sie eine Betriebsnummer der Bundesagentur für Arbeit. Dazu kommen die Meldung bei der Unfallkasse und die Lohnsteuer beim Finanzamt. Der Haushaltsscheck gilt nur für Minijobs. Bei einer Entsendung ist die Kraft über ihre Firma in Rumänien versichert, und Sie melden sie nicht zur Sozialversicherung an.' },
  { q: 'Wie finde ich eine private Pflegekraft aus Rumänien?', a: 'Ohne Anbieter suchen Sie selbst, etwa über Empfehlungen, und stellen die Kraft dann als Arbeitgeber an. In einigen Regionen helfen nach dem Bericht der Bundesministerien von 2024 gemeinnützige Projekte von Caritas und Diakonie beim Anstellen, eines auch mit Lohnabrechnung und Meldungen. Führen Sie vor der Zusage ein Videogespräch und halten Sie Aufgaben, Arbeitszeit und Lohn schriftlich fest.' },
]

const PRUEFLISTE = [
  'Wer ist mein Vertragspartner, mit Name, Sitz und Land?',
  'Bei wem ist die Kraft angestellt, und in welchem Land ist sie sozialversichert?',
  'Bekomme ich vor Arbeitsbeginn eine Kopie der A1-Bescheinigung für genau diese Kraft? Ist sie noch nicht ausgestellt, zuerst den Antrag darauf und später die Bescheinigung. Für eine Firma in Rumänien stellt sie die Rentenkasse CNPP aus. Heften Sie die Kopien ab.',
  'Was kommt zum Monatspreis dazu: Anreise, Nächte, Feiertage, Gebühren?',
  'Verlangen Sie eine Vermittlungsgebühr oder eine Anzahlung?',
  'Wie lange bin ich gebunden, und wie kündige ich?',
  'Wie schnell kommt Ersatz, wenn die Kraft krank wird, und wer zahlt die Fahrt?',
  'Kann ich vorher mit der Kraft sprechen, und wer hat ihre Deutschkenntnisse geprüft?',
  'Wen erreiche ich am Wochenende, wenn etwas ist?',
  'Bekomme ich Rechnungen zum Überweisen? Nur dann gilt bei einem Anbieter die Steuerermäßigung.',
]

const QUELLEN = [
  'Verbraucherzentrale: Ausländische Betreuungskräfte, wie geht das legal? (Kosten bei Entsendung, 48-Stunden-Grenze, A1, Krankenversicherung bei Selbstständigen)',
  'Pflegewegweiser NRW (Verbraucherzentrale NRW): So viel kostet eine ausländische Haushalts- und Betreuungskraft (Verhinderungspflege)',
  'GKV-Spitzenverband: Gemeinsames Rundschreiben zu den leistungsrechtlichen Vorschriften des SGB XI, 2026 (Verhinderungspflege)',
  'Abschlussbericht der Arbeitsgruppe von Bundesarbeitsministerium, Bundesgesundheitsministerium und Pflegebevollmächtigter zur Live-In-Betreuung, November 2024',
  'Bundesministerium für Gesundheit: Online-Ratgeber Demenz, Teilnahme am täglichen Leben',
  'Gemeinsamer Bundesausschuss: Häusliche-Krankenpflege-Richtlinie, Nr. 26 (Medikamente)',
  'Bundesministerium für Arbeit und Soziales: Pressemitteilung vom Dezember 2013 zur Freizügigkeit ab 2014',
  'Europäische Union, Your Europe: Stellen, die die A1-Bescheinigung ausstellen',
  'Deutsche Verbindungsstelle Krankenversicherung Ausland (DVKA): Länderseite Rumänien, Entsendung von abhängig beschäftigten Personen',
  'Bundeszentrale für politische Bildung: Kührer-Wielach/Suveica, Zwischen den Mächten (APuZ, 2024)',
  'Deutsche Botschaft Chișinău: Visa; BAMF: Einreisebestimmungen',
  'Minijob-Zentrale: Haushaltsscheck nur für Minijobs; Unfallkasse NRW: Haushaltshilfen',
  'Gesetze: § 37, § 39, § 42, § 42a SGB XI; § 37 SGB V; § 35a, § 38, § 41a EStG; § 7, § 18i SGB IV; § 192 SGB VII; § 3 Entgeltfortzahlungsgesetz; § 27 Bundesmeldegesetz; § 2 Nachweisgesetz; § 4a Aufenthaltsgesetz; § 404 SGB III; Art. 12 Verordnung (EG) 883/2004',
]

export const metadata: Metadata = {
  title: 'Pflegekraft aus Rumänien: Aufgaben, Kosten und legale Wege',
  description: 'Pflegekräfte aus Rumänien helfen im Haushalt und bei der Grundpflege. Mit rumänischem Pass brauchen sie seit 2014 keine Arbeitserlaubnis.',
  alternates: { canonical: 'https://primundus.de/pflegekraft-aus-rumaenien' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Pflegekraft aus Rumänien: Aufgaben und Kosten',
    description: 'Eine Betreuungskraft aus Rumänien hilft im Haushalt und bei der Grundpflege; sie wohnt mit im Haus und darf nicht rund um die Uhr arbeiten.',
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
    headline: 'Pflegekraft aus Rumänien: was sie im Haushalt übernimmt und was sie kostet',
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
          titel="Pflegekraft aus Rumänien: was sie im Haushalt übernimmt und was sie kostet"
          einleitung={
            <>
              Eine Pflegekraft aus Rumänien zieht bei Ihrer Mutter ein und begleitet sie durch den Tag. Sie kocht, kauft ein, macht
              die Wäsche, geht mit ihr zum Arzt und hilft beim Waschen und Anziehen. „24 Stunden“ heißt: Sie wohnt im Haus; arbeiten
              darf sie nach der Verbraucherzentrale höchstens 48 Stunden pro Woche. Spritzen, Verbände und das Stellen von Medikamenten gehören nicht zu ihren Aufgaben; dafür kann die Hausärztin häusliche Krankenpflege durch einen Pflegedienst verordnen. Eine Arbeitserlaubnis brauchen
              Kräfte mit rumänischem Pass seit 2014 nicht; legal arbeiten sie vor allem entsandt von einer Firma oder bei Ihnen
              angestellt. Bevor Sie unterschreiben, gehen Sie jedes Angebot mit den zehn Fragen der{' '}
              <a href="#pruefliste" className={LINK}>Prüfliste</a> durch.
            </>
          }
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="13 Min."
          blickVerweise={[
            { href: '#alltag', titel: 'Aufgaben', text: 'was eine Haushaltshilfe aus Rumänien übernimmt und wie Sie den Alltag vorbereiten' },
            { href: '#kosten', titel: 'Kosten', text: 'was in ein Angebot gehört und was Pflegekasse und Finanzamt beitragen' },
            { href: '#arbeitszeit', titel: '24 Stunden', text: 'wie viel die Kraft arbeiten darf und was für Kräfte aus Moldawien gilt' },
            { href: '#erfahrungen', titel: 'Erfahrungen', text: 'was belegt ist und wo es in der Betreuung zu Hause hakt' },
            { href: '#legal', titel: 'Legal', text: 'Entsendung, eigene Anstellung oder Selbstständigkeit, und wo das Risiko für Sie liegt' },
            { href: '#pruefliste', titel: 'Prüfliste', text: 'zehn Fragen, die ein seriöser Anbieter ohne Zögern beantwortet' },
          ]}
        />

        <RatgeberRumpf abschnitte={SECTIONS} src={SRC} neutral>
          <Abschnitt id="alltag" titel="Haushaltshilfe aus Rumänien: kochen, waschen, begleiten, aber keine Spritzen">
            <Text>
              Eine Haushaltshilfe aus Rumänien hilft im Haushalt, betreut Ihre Mutter und übernimmt die Grundpflege. Der Bericht der Bundesministerien für Arbeit und für Gesundheit von 2024 weist darauf hin, dass rechtlich nur Haushalt, Betreuung und Grundpflege erlaubt sind; Behandlungspflege gehört nicht dazu. Das gilt unabhängig davon, ob ein Angebot von Haushaltshilfe, Betreuungskraft oder Pflegekraft spricht.
            </Text>
            <Text>
              Im Haushalt kocht die Kraft, wie Ihre Mutter es gewohnt ist, kauft ein, macht die Wäsche und hält die genutzten Räume sauber.
              Sie leistet Ihrer Mutter Gesellschaft, geht mit ihr spazieren, begleitet sie zum Arzt und sorgt für feste Zeiten im Tag, die bei
              Demenz Orientierung geben. In der Grundpflege hilft sie beim Waschen, Anziehen und Essen und begleitet sie zur Toilette.
            </Text>
            <Text>
              Spritzen, Wundversorgung und das Stellen von Medikamenten gehören zur Behandlungspflege und nicht zu den Aufgaben der
              Betreuungskraft. Die Hausärztin kann häusliche Krankenpflege verordnen; genehmigt die Krankenkasse sie, übernimmt ein
              ambulanter Pflegedienst diese Behandlungspflege, und Ihre Mutter trägt nur die gesetzliche Zuzahlung.
            </Text>
            <Text>
              Die Arbeitsgruppe der Ministerien empfiehlt einen Pflege-Mix: Betreuungskraft, Familie und Pflegedienst teilen sich die
              Aufgaben.
            </Text>
            <Zwischentitel>Zimmer, Kost und freie Zeit</Zwischentitel>
            <Text>
              Sie stellen ein eigenes Zimmer, das die Kraft abschließen kann, dazu Verpflegung, Bad und Küche zum Mitbenutzen und Internet für
              die Anrufe nach Hause. Planen Sie feste freie Zeiten ein, auch am Wochenende, und sprechen Sie sie vor dem Start ab.
            </Text>
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

          <Abschnitt id="kosten" titel="Was kostet eine rumänische Pflegekraft? Einen eigenen Länderpreis gibt es nicht">
            <Text>
              Eine neutrale Preisübersicht nur für Kräfte aus Rumänien gibt es nicht. Die Verbraucherzentrale nennt für entsandte Kräfte aus
              Osteuropa allgemein etwa 2.800 bis 3.500 € im Monat, ohne nach Herkunftsland zu unterscheiden. Vergleichen lassen sich Angebote
              erst, wenn klar ist, was im Monatspreis steckt.
            </Text>
            <Text>
              Mit dem Monatspreis einer Entsendung bezahlen Sie die Dienstleistung des Anbieters; darin stecken Vergütung, Sozialversicherung
              im Entsendeland und Organisation. Lassen Sie sich die A1-Bescheinigung vorlegen und schriftlich bestätigen, wie Arbeitszeit und Ausgleich für regelmäßige Nacht- oder Bereitschaftszeiten geregelt sind. Prüfen Sie
              außerdem An- und Abreise, Feiertage, Ersatz und Wechsel, Vermittlungsgebühren und Kündigungsfristen.
            </Text>
            <Zwischentitel>Was Pflegekasse und Finanzamt beitragen</Zwischentitel>
            <Text>
              An die Betreuungskraft selbst zahlt die Pflegekasse nichts. Ihre Mutter bekommt ab Pflegegrad 2 Pflegegeld, 347 bis 990 € im
              Monat, und setzt es frei ein, auch für eine Betreuungskraft (§ 37 SGB XI).
            </Text>
            <Text>
              Das Finanzamt zieht 20 Prozent der Kosten von der Einkommensteuer ab, höchstens 4.000 € im Jahr, wenn Sie überweisen und bei
              einem Anbieter eine Rechnung haben (§ 35a EStG). Den Gemeinsamen Jahresbetrag von bis zu 3.539 €, oft Entlastungsbudget genannt, zahlt die Kasse nur für
              Verhinderungs- und Kurzzeitpflege, nicht für die laufende Betreuung durch eine Kraft, die bei Ihnen wohnt (Pflegewegweiser NRW).
            </Text>
            <MehrDazu
              label="Mehr zu Kosten und Zuschüssen:"
              links={[
                { href: '/kosten', text: 'Was 24-Stunden-Pflege insgesamt kostet' },
                { href: '/eigenanteil-24h-pflege-senken', text: 'Eigenanteil senken: alle Möglichkeiten' },
              ]}
            />
            <RechnerKasten src={SRC} neutral />
          </Abschnitt>

          <Abschnitt id="arbeitszeit" titel="24-Stunden-Pflege aus Rumänien: im Haus wohnen, bis zu 48 Stunden arbeiten">
            <Text>
              Die Kraft wohnt bei Ihrer Mutter und ist deshalb auch nachts in der Nähe. Arbeiten darf sie trotzdem nicht 24 Stunden: Die
              Verbraucherzentrale nennt 48 Stunden pro Woche als Grenze.
            </Text>
            <Text>
              Hilft die Kraft Ihrer Mutter jede Nacht mehrmals beim Aufstehen, ist das Arbeit. Muss sie nachts im Haushalt bereitstehen, zählt
              diese Bereitschaftszeit als Arbeitszeit. Dafür braucht die Kraft einen Ausgleich, etwa freie Stunden am Tag, in denen Sie oder
              ein Pflegedienst da sind.
            </Text>
          </Abschnitt>

          <Abschnitt id="moldau" titel="24-Stunden-Pflegekräfte aus Moldawien: Es kommt auf den Pass an">
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
              passenden Aufenthaltstitel bei Ihnen arbeitet, mit folgenden Konsequenzen für die Familie: Die Kraft darf nicht weiter bei
              Ihnen arbeiten. Haben Sie sie selbst angestellt, können die Behörden ein Bußgeld gegen Sie verhängen (§ 404 SGB III).
            </Text>
            <Text>
              Fragen Sie deshalb vor dem Start, welchen Pass die Kraft hat. Mit moldauischem Pass allein braucht sie einen deutschen Aufenthaltstitel, der die Arbeit erlaubt.
            </Text>
          </Abschnitt>

          <Abschnitt id="erfahrungen" titel="Erfahrungen mit Pflegekräften aus Rumänien: ob es klappt, hängt an Vertrag, Sprache und Arbeitszeit">
            <Text>
              Die belegten Probleme betreffen die Betreuung im Haushalt allgemein, unabhängig vom Herkunftsland. Einzelne Erfahrungsberichte im
              Netz lassen sich kaum prüfen. Belastbar sind diese Befunde:
            </Text>
            <Liste
              punkte={[
                'Der Bericht der Ministerien (2024) nennt für die Betreuung im Haushalt undurchsichtige Vertragsbeziehungen, begrenzte Deutschkenntnisse und die schwierige Trennung von Arbeits- und Ruhezeit als typische Probleme.',
                'Bei selbstständigen Kräften im Franchise-Modell fehlt laut Verbraucherzentrale oft eine ausreichende Krankenversicherung.',
                'Für regulär beschäftigte Kräfte zeigen Studien nach demselben Bericht, dass sich die Betreuung mit angemessenen Arbeitsbedingungen rechtssicher gestalten lässt.',
              ]}
            />
          </Abschnitt>

          <DunklerAbschnitt
            id="legal"
            titel="Ist eine Pflegekraft aus Rumänien legal? Ja, auf drei Wegen"
            einleitung="Für rumänische Staatsangehörige gilt seit 2014 die volle Freizügigkeit. Ob die Betreuung bei Ihnen legal ist, entscheiden der Vertrag und die Art, wie die Kraft tatsächlich arbeitet."
            punkte={[
              { title: 'Entsendung mit A1-Bescheinigung', desc: 'Die Kraft ist bei einer Firma in Rumänien angestellt und dort sozialversichert. Eine Entsendung ist auf höchstens 24 Monate begrenzt (Art. 12 Verordnung (EG) 883/2004); Einsatzdauer, Wechsel und Ersatz regelt der Vertrag. Lassen Sie sich vor Beginn die A1-Bescheinigung zeigen; ist sie noch nicht ausgestellt, zuerst den Antrag darauf und später die Bescheinigung. Sie belegt, dass das rumänische Sozialversicherungsrecht gilt; ausgestellt wird sie von der staatlichen Rentenkasse CNPP. Sie sind nicht Arbeitgeber. ' },
              { title: 'Eigene Anstellung', desc: 'Sie schließen einen Arbeitsvertrag und werden Arbeitgeber. Dazu gehören Anmeldung und Beiträge, Lohn nach deutschem Recht, Urlaub und Lohnfortzahlung bei Krankheit. Dafür bestimmen Sie den Alltag selbst. ' },
              { title: 'Selbstständige Betreuungskraft', desc: 'Die Kraft hat ein eigenes Gewerbe, in Deutschland oder in Rumänien, und schreibt Ihnen Rechnungen. Legal ist das nur, wenn sie selbst über Zeit und Ablauf ihrer Arbeit entscheidet und weitere Auftraggeber haben kann.' },
            ]}
          >
            <Text>
              <strong>Hinweis:</strong> Es besteht die Gefahr der Scheinselbstständigkeit, wenn die Kraft bei Ihnen wohnt, nach Ihren Vorgaben
              arbeitet und nur Sie als Auftraggeber hat, mit folgenden Konsequenzen für die Familie: Sie gelten als Arbeitgeber. Die
              Sozialversicherungsbeiträge zahlen Sie nach.
            </Text>
            <Text>
              <strong>Hinweis:</strong> Es besteht die Gefahr von Schwarzarbeit, wenn die Kraft ohne Anmeldung gegen bar bei Ihnen arbeitet, mit folgenden Konsequenzen für die Familie: Sozialversicherungsträger fordern Beiträge nach; die Steuerermäßigung nach § 35a EStG entfällt.
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
              Ersatz selbst.
            </Text>
            <MehrDazu
              label="Alle Meldungen im Detail:"
              links={[{ href: '/pflegekraft-sozialversicherung-anmelden', text: 'Pflegekraft bei der Sozialversicherung anmelden' }]}
            />
          </Abschnitt>

          <Abschnitt id="anreise" titel="Anreise aus Rumänien: was Sie vor dem Start klären">
            <Text>Klären Sie vor dem Start zwei Fragen: wie lange eine Kraft bleibt und wie schnell Ersatz kommt.</Text>
            <Punkte
              punkte={[
                { title: 'Dauer eines Einsatzes', desc: 'Rechtlich ist eine Entsendung nicht auf drei Monate begrenzt. Wie lange eine Kraft tatsächlich bleibt, vereinbaren Anbieter, Kraft und Familie; wichtig sind klare Regeln zu Wechsel und Ersatz.' },
                { title: 'Wechsel bei einer Entsendung', desc: 'Eine entsandte Kraft darf nicht als Ersatz für eine andere entsandte Person eingesetzt werden (Art. 12 Abs. 1 Verordnung (EG) 883/2004). Eine Ausnahme nennt die Deutsche Verbindungsstelle Krankenversicherung Ausland (DVKA): Musste die Vorgängerin unplanmäßig gehen, etwa wegen schwerer Krankheit, darf eine andere Kraft die restliche geplante Zeit übernehmen.' },
                { title: 'Ersatz bei Krankheit', desc: 'Wird die Kraft krank oder muss sie zu ihrer Familie, braucht Ihre Mutter Hilfe, bis die nächste Kraft ankommt. Lassen Sie sich schriftlich geben, wie schnell Ersatz kommt, wer die Fahrt bezahlt und wer in der Zwischenzeit einspringt.' },
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
