import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, Fragen, Gegenueber, Gruppen, Kasten, MehrDazu, Punkte, RatgeberKopf, RatgeberRumpf, RechnerKasten, Schritte, Tabelle, Text,
} from '@/components/vorlage/Ratgeber'
import { AblaufZeitstrahl, Beispieltag, HeimVsZuhause, KostenAufteilung, ZuhauseQuote } from '@/components/grafik/Grafik'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { ORG_ID } from '@/lib/schema'

// Ausbau 19.09.2026 (Martin: „wir brauchen viel mehr Content, um ernsthaft Chancen zu haben, mit eigenen Grafiken"):
// Seiten auf Platz 2–3 für „24 stunden pflege" haben 2.900–4.900 Wörter und 14–22 Bilder, wir hatten 920 Wörter und keine.
// Neue Abschnitte nach den Fragen, die Google zum Begriff zeigt (Pflegekasse, Nachteile, Heim oder zu Hause, Kosten im Monat,
// Voraussetzungen, Arbeitszeit, Erfahrungen, deutsche Pflegekräfte), fünf eigene Grafiken (components/grafik/Grafik.tsx).
// Kernseite in der Seitenvorlage (17.09.2026). Inhalt gegen Kostenrechner, Startseite und Mustervertrag geprüft:
// Preise aus dem Rechner (ab 2.150 €, Pflegegrad 3 ab ca. 923 €), Nächte „bei Bedarf auch nachts",
// Ersatzkraft nach Vertrag § 1 („schnellstmöglich, in der Regel innerhalb von 3 Tagen", Krankheitstage ohne
// Honorar nach § 4), Ablauf in drei Schritten wie auf der Startseite und im Rechner.

const AKTUALISIERT = aktualisiertAm('24-stunden-pflege', '19. September 2026')
const RECHNER_SEITE = 'https://kostenrechner.primundus.de/?start=1&src=apex-24-stunden-pflege'
const MUSTERVERTRAG = 'https://kundenportal.primundus.de/primundus-mustervertrag.pdf'

const SECTIONS = [
  { id: 'was-ist', title: 'Was ist 24-Stunden-Pflege?' },
  { id: 'fuer-wen', title: 'Für wen sie passt' },
  { id: 'leistungen', title: 'Was leistet Primundus?' },
  { id: 'modelle', title: 'Legal: die drei Modelle' },
  { id: 'kosten', title: 'Kosten & Kassenzuschüsse' },
  { id: 'vorteile', title: 'Vergleich mit dem Pflegeheim' },
  { id: 'ablauf', title: 'Ablauf & Start' },
  { id: 'betreuungskraefte', title: 'Die Betreuungskräfte' },
  { id: 'nachteile', title: 'Nachteile & seriöse Anbieter' },
  { id: 'faq', title: 'Häufige Fragen' },
  { id: 'themen', title: 'Weitere Themen' },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege — Testsieger & täglich kündbar | Primundus',
  description: 'Geprüfte Betreuungskraft im Haushalt, täglich kündbar, Anreise in 3 Tagen möglich. 6× Testsieger DIE WELT – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24-stunden-pflege' },
  openGraph: {
    title: '24-Stunden-Pflege | Primundus — Testsieger & 20 Jahre Erfahrung',
    description: 'Geprüfte Betreuungskraft im Haushalt, täglich kündbar, Anreise in 3 Tagen möglich. 6× Testsieger DIE WELT.',
    url: 'https://primundus.de/24-stunden-pflege',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: '/images/primundus_logo_header.webp' }],
  },
}

const FRAGEN = [
  { q: 'Was ist 24-Stunden-Pflege?', a: 'Eine Betreuungskraft zieht bei dem Pflegebedürftigen ein und hilft im Alltag: bei der Körperpflege, im Haushalt und mit Gesellschaft. Sie wohnt mit im Haus und ist bei Bedarf auch nachts da. Dabei hat sie geregelte Arbeitszeiten mit Pausen und Ruhezeiten.' },
  { q: 'Was kostet 24-Stunden-Pflege bei Primundus?', a: 'Ab 2.150 € im Monat für eine Person. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei Pflegegrad 3 ab ca. 923 € im Monat selbst zu tragen. Dazu kommen An- und Abreise mit 125 € je Strecke. Kostenlose Beratung: 089 200 000 830.' },
  { q: 'Wie schnell kann 24h-Pflege bei Primundus starten?', a: 'Eine Anreise ist in 3 Tagen möglich. Preis und passende Betreuungskräfte sehen Sie sofort online; ein Beratungsgespräch ist möglich, aber keine Voraussetzung.' },
  { q: 'Ist 24-Stunden-Pflege bei Primundus legal?', a: 'Ja. Die Betreuungskräfte sind bei uns angestellt und arbeiten im Entsendemodell mit A1-Bescheinigung: Sie sind in Polen sozialversichert und legal in Deutschland tätig. Sie als Familie werden nicht Arbeitgeber.' },
  { q: 'Warum ist Primundus Testsieger?', a: 'Primundus ist sechsmal in Folge Testsieger bei DIE WELT. Primundus steht für die beste Kombination aus Preis, Qualität und Kundenservice, getragen von 20 Jahren Erfahrung und über 60.000 Betreuungen.' },
  { q: 'Was passiert, wenn die Betreuungskraft krank wird?', a: 'Wir stellen schnellstmöglich eine Ersatzkraft, laut Vertrag in der Regel innerhalb von 3 Tagen. Für die Tage, an denen die Betreuungskraft krank ist, berechnen wir nichts. Der Wechsel kostet nichts extra, es fallen nur die An- und Abreisekosten an.' },
  { q: 'Was zahlt die Pflegekasse bei einer 24-Stunden-Pflege?', a: 'Das Pflegegeld, je nach Pflegegrad 347 bis 990 € im Monat, und das Entlastungsbudget von 3.539 € im Jahr für Verhinderungs- und Kurzzeitpflege. Dazu kommt die Steuerermäßigung von 20 %, höchstens 4.000 € im Jahr. Die Krankenkasse zahlt nichts, und der Entlastungsbetrag von 131 € im Monat ist nur für anerkannte Alltagshilfen gedacht, in der Regel nicht für die Betreuungskraft.' },
  { q: 'Was sind die Nachteile der 24-Stunden-Pflege?', a: 'Die Betreuungskraft braucht ein eigenes Zimmer, Kost und Logis stellen Sie. Sie hat geregelte Arbeitszeiten mit Pausen und Ruhezeiten, eine Überwachung rund um die Uhr gibt es nicht. Alle 6 bis 8 Wochen wechselt die Betreuungskraft, und medizinische Behandlungspflege übernimmt weiter ein Pflegedienst. Für Menschen, die dauerhaft Fachpflege brauchen, passt sie nicht.' },
  { q: 'Was ist billiger, Pflegeheim oder 24-Stunden-Pflege?', a: 'Meist die 24-Stunden-Pflege. Im Pflegeheim zahlen Sie bundesweit im Durchschnitt 3.364 € im Monat selbst (vdek, Stand 1. Juli 2026). Bei der 24-Stunden-Pflege bleiben bei Pflegegrad 3 nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 € im Monat, zzgl. An- und Abreise sowie Kost und Logis.' },
  { q: 'Wie lange arbeitet eine Betreuungskraft am Tag?', a: 'Sie hat geregelte Arbeitszeiten mit Pausen und Ruhezeiten, so wie jede Arbeitnehmerin. Den Tagesablauf legen Sie gemeinsam fest: Hilfe am Morgen, im Haushalt, am Nachmittag und am Abend, dazwischen ihre Ruhezeit. Nachts schläft sie im Haus und hilft, wenn etwas ist; wie oft nachts Hilfe nötig ist, fließt in den Preis ein.' },
  { q: 'Woran erkenne ich einen seriösen Anbieter?', a: 'An vier Dingen: Für jede Betreuungskraft liegt eine A1-Bescheinigung vor. Sie sehen Preis und Betreuungskräfte, bevor Sie etwas unterschreiben. Der Vertrag nennt An- und Abreise, Ersatz bei Krankheit und die Kündigung klar. Und es gibt keine Vermittlungsgebühr oder Anzahlung. Den Mustervertrag von Primundus können Sie vorab lesen.' },
]

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: '24-Stunden-Pflege',
    provider: { '@id': ORG_ID },
    description: '24-Stunden-Betreuung zu Hause durch eigene, bei Primundus angestellte Betreuungskräfte im Entsendemodell mit A1-Bescheinigung. Täglich kündbar, taggenaue Abrechnung, Anreise in 3 Tagen möglich.',
    areaServed: 'DE',
    serviceType: '24-Stunden-Pflege',
    offers: { '@type': 'Offer', priceRange: 'ab 2150 €/Monat' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24-Stunden-Pflege', item: 'https://primundus.de/24-stunden-pflege' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FRAGEN.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  },
]

const LINK = 'text-pm-taupe-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors'

const THEMEN = [
  {
    title: 'Grundlagen',
    links: [
      { href: '/was-ist-24-stunden-pflege', text: 'Was ist 24h-Pflege?' },
      { href: '/wann-brauche-ich-24h-pflege', text: 'Wann brauche ich 24h-Pflege?' },
      { href: '/vorteile-24h-pflege', text: 'Vorteile der 24h-Pflege' },
      { href: '/nachteile-24h-pflege', text: 'Nachteile ehrlich betrachtet' },
    ],
  },
  {
    title: 'Ablauf & Organisation',
    links: [
      { href: '/ablauf', text: 'So läuft es ab' },
      { href: '/24h-pflege-organisieren', text: '24h-Pflege organisieren' },
      { href: '/pflegekraft-finden', text: 'Pflegekraft finden' },
      { href: '/checkliste-pflegekraft-einstellen', text: 'Checkliste: Pflegekraft einstellen' },
    ],
  },
  {
    title: 'Vergleiche',
    links: [
      { href: '/24h-pflege-vs-pflegeheim', text: '24h-Pflege oder Pflegeheim' },
      { href: '/24h-pflege-vs-ambulante-pflege', text: '24h-Pflege oder ambulante Pflege' },
      { href: '/selbst-pflegen-oder-24h-pflege', text: 'Selbst pflegen oder 24h-Pflege?' },
      { href: '/tagespflege-vs-24h-betreuung', text: 'Tagespflege oder 24h-Betreuung' },
    ],
  },
  {
    title: 'Pflegekräfte',
    links: [
      { href: '/pflegekraft-aus-polen', text: 'Pflegekraft aus Polen' },
      { href: '/pflegekraft-aus-rumaenien', text: 'Pflegekraft aus Rumänien' },
      { href: '/pflegekraft-aus-bulgarien', text: 'Pflegekraft aus Bulgarien' },
      { href: '/eu-pflegekraft-rechte-pflichten', text: 'EU-Pflegekraft: Rechte & Pflichten' },
    ],
  },
]

export default function VierUndZwanzigStundenPflege() {
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
            { label: '24-Stunden-Pflege' },
          ]}
          augenbraue="6× Testsieger DIE WELT"
          titel="24-Stunden-Pflege zu Hause — rechtssicher und täglich kündbar"
          einleitung={<>Eine Betreuungskraft zieht bei Ihrem Angehörigen ein, hilft im Alltag und ist bei Bedarf auch nachts da. Unsere Betreuungskräfte sind bei uns angestellt, der Vertrag ist täglich kündbar, und eine Anreise ist in 3 Tagen möglich. Die Betreuung kostet ab 2.150&nbsp;€ im Monat; bei Pflegegrad 3 bleiben davon nach Kassenleistungen und Steuerermäßigung ab ca. 923&nbsp;€ selbst zu tragen.</>}
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="11 Min."
          knopf={{ href: RECHNER_SEITE, text: 'Kosten & Pflegekräfte ansehen' }}
          blickTitel="Warum Primundus"
          blick={[
            '6× Testsieger DIE WELT',
            'Betreuungskräfte bei uns angestellt, Einsatz mit A1-Bescheinigung',
            'Preis und passende Pflegekräfte sofort sehen, Vertrag erst nach Ihrer Auswahl',
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich, Ersatzkraft bei Ausfall',
            'Ansprechpartnerin täglich 8–20 Uhr',
          ]}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist" titel="Was ist 24-Stunden-Pflege?">
            <Text>
              Bei der 24-Stunden-Pflege zieht eine Betreuungskraft in den Haushalt des Pflegebedürftigen. Sie hilft bei
              der Körperpflege, führt den Haushalt und leistet Gesellschaft. So kann Ihr Angehöriger in seiner Wohnung
              bleiben und muss nicht in ein Pflegeheim ziehen.
            </Text>
            <Kasten titel="Was „24 Stunden“ bedeutet">
              <Text>
                Die Betreuungskraft wohnt mit im Haus und ist bei Bedarf auch nachts da. Sie hat geregelte Arbeitszeiten
                mit Pausen und Ruhezeiten, so wie jede Arbeitnehmerin. „24 Stunden“ heißt also: Sie ist rund um die Uhr
                erreichbar, nicht rund um die Uhr im Einsatz. Medizinische Behandlungspflege wie Spritzen oder Verbände
                übernimmt ein ambulanter Pflegedienst.
              </Text>
            </Kasten>
            <Text>
              Wie ein Tag aussieht, legen Sie mit der Betreuungskraft fest. Typisch ist ein Rhythmus aus Hilfe am Morgen,
              Haushalt am Vormittag, einer Ruhezeit am Nachmittag und Gesellschaft am Abend. Nachts schläft die
              Betreuungskraft im Haus. Braucht Ihr Angehöriger regelmäßig nachts Hilfe, sagen Sie uns das bei der
              Preisberechnung; es fließt in den Preis ein und wird ausgeglichen.
            </Text>
            <Beispieltag />
            <Text>
              Die meisten Familien in Deutschland organisieren die Pflege zu Hause, mit Angehörigen, einem Pflegedienst
              oder einer Betreuungskraft. Das Pflegeheim ist die Ausnahme, nicht die Regel:
            </Text>
            <ZuhauseQuote />
            <MehrDazu
              label="Mehr dazu:"
              links={[
                { href: '/was-ist-24-stunden-pflege', text: 'Was ist 24-Stunden-Pflege? Alle Fakten' },
                { href: '/wann-brauche-ich-24h-pflege', text: 'Wann braucht es 24h-Pflege?' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="fuer-wen" titel="Für wen 24-Stunden-Pflege passt, und für wen nicht">
            <Text>
              24-Stunden-Pflege passt, wenn Ihr Angehöriger zu Hause bleiben möchte und im Alltag durchgehend Hilfe
              braucht: bei Demenz, nach einem Schlaganfall oder einer Operation, bei Parkinson, Herzschwäche oder wenn
              das Sturzrisiko allein zu Hause zu groß wird. Voraussetzung ist ein Pflegegrad ab 2, damit Pflegegeld und
              Entlastungsbudget den Eigenanteil senken; die Betreuung selbst ist auch ohne Pflegegrad möglich.
            </Text>
            <Gegenueber
              seiten={[
                {
                  titel: 'Das braucht es zu Hause',
                  ton: 'gruen',
                  punkte: [
                    'Ein eigenes, abschließbares Zimmer mit Bett für die Betreuungskraft',
                    'Küche, Bad und Internetanschluss zur Mitbenutzung',
                    'Eine gewisse Grundmobilität des Angehörigen, etwa Gehen mit Unterstützung',
                    'Kost und Logis stellen Sie, wie bei einem Mitbewohner',
                  ],
                },
                {
                  titel: 'Dafür ist sie nicht gedacht',
                  ton: 'koralle',
                  punkte: [
                    'Intensivpflege oder dauerhafte medizinische Behandlungspflege, dafür braucht es Fachkräfte',
                    'Eine Aufsicht rund um die Uhr ohne Pausen, das leistet kein einzelner Mensch',
                    'Haushalte ohne freies Zimmer',
                    'Wenn Ihr Angehöriger ausdrücklich ins Heim möchte',
                  ],
                },
              ]}
            />
            <MehrDazu
              label="Mehr dazu:"
              links={[
                { href: '/demenz-pflege-zuhause', text: 'Demenzbetreuung zu Hause' },
                { href: '/pflege-nach-op', text: 'Pflege nach einer Operation' },
                { href: '/pflegedienst-oder-24h-kraft', text: 'Pflegedienst oder Betreuungskraft?' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="leistungen" titel="Was leistet Primundus?">
            <Text>
              Zwischen Ihnen und der Betreuungskraft steht kein Vermittler. Sie wählen aus den Bewerbungen die
              Betreuungskraft aus, die zu Ihrem Angehörigen passt, und wir setzen sie im Entsendemodell
              mit A1-Bescheinigung bei Ihnen ein. Sie haben einen Vertrag und eine Ansprechpartnerin.
            </Text>
            <Punkte
              punkte={[
                { title: 'Grundpflege', desc: 'Waschen, Duschen, An- und Auskleiden, Hilfe beim Essen, beim Aufstehen und beim Zubettgehen.' },
                { title: 'Haushalt', desc: 'Kochen, Einkaufen, Wäsche und Ordnung in den Räumen, die Ihr Angehöriger nutzt.' },
                { title: 'Betreuung und Gesellschaft', desc: 'Gespräche, Spaziergänge, Begleitung zu Arztterminen und ein fester Tagesablauf, der gerade bei Demenz wichtig ist.' },
                { title: 'Wechsel und Ersatz', desc: 'Betreuungskräfte wechseln sich in der Regel alle 6–8 Wochen ab, und Sie wählen jedes Mal selbst aus. Wird eine Betreuungskraft krank, stellen wir schnellstmöglich Ersatz, in der Regel innerhalb von 3 Tagen; die Krankheitstage berechnen wir nicht.' },
                { title: 'Ansprechpartnerin', desc: 'Marta Kapcio und ihr Team sind an 7 Tagen die Woche von 8 bis 20 Uhr erreichbar.' },
              ]}
            />
            <Kasten augenbraue="Nicht enthalten" titel="Was die Betreuungskraft nicht übernimmt">
              <Text>
                Medizinische Behandlungspflege wie Injektionen, Verbandswechsel oder das Stellen von Medikamenten nach
                ärztlicher Anordnung bleibt Sache eines ambulanten Pflegedienstes; beides lässt sich gut kombinieren.
                Auch Fensterputzen und die Reinigung von Garage, Heizraum und Nebengebäuden gehören laut
                Betreuungsvertrag nicht dazu.
              </Text>
            </Kasten>
            <MehrDazu
              label="Mehr dazu:"
              links={[
                { href: '/leistungen', text: 'Alle Leistungen im Detail' },
                { href: '/24h-pflege-vs-ambulante-pflege', text: 'Betreuungskraft und Pflegedienst kombinieren' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="modelle" titel="Legal zu Hause betreuen: die drei Modelle">
            <Text>
              Eine Betreuungskraft aus dem EU-Ausland kann auf drei Wegen bei Ihnen arbeiten. Entscheidend ist, wer
              ihr Arbeitgeber ist und wer die Sozialabgaben zahlt. Bei Primundus arbeiten die Betreuungskräfte im
              Entsendemodell: Sie sind bei uns angestellt, in Polen sozialversichert und für jeden Einsatz liegt eine
              A1-Bescheinigung vor. Sie als Familie werden nicht Arbeitgeber.
            </Text>
            <Tabelle
              kopf={['', 'Entsendemodell (Primundus)', 'Arbeitgebermodell', 'Selbstständige Kraft']}
              zeilen={[
                ['Arbeitgeber', 'Primundus', 'Sie als Familie', 'niemand, die Kraft arbeitet auf eigene Rechnung'],
                ['Sozialabgaben', 'zahlt Primundus in Polen, Nachweis A1-Bescheinigung', 'zahlen Sie in Deutschland', 'zahlt die Kraft selbst'],
                ['Ihr Aufwand', 'ein Vertrag mit uns', 'Anmeldung, Lohnabrechnung, Urlaub, Krankheit, Ersatz', 'Verträge und Nachweise selbst prüfen'],
                ['Risiko', 'keines für Sie, Arbeitszeitregeln liegen bei uns', 'Arbeitgeberpflichten liegen bei Ihnen', 'Scheinselbstständigkeit: Nachzahlungen und Bußgelder möglich'],
                ['Ersatz bei Ausfall', 'in der Regel innerhalb von 3 Tagen', 'müssen Sie selbst organisieren', 'müssen Sie selbst organisieren'],
              ]}
              fuss="Entsendung nach EU-Verordnung 883/2004, die A1-Bescheinigung weist die Sozialversicherung im Heimatland nach. Wer eine weisungsgebunden im Haushalt lebende Kraft als „selbstständig“ beauftragt, riskiert Nachzahlungen von Sozialabgaben."
            />
            <MehrDazu
              label="Mehr dazu:"
              links={[
                { href: '/rechtssicher', text: 'Rechtssicherheit und Entsendemodell' },
                { href: '/pflegekraft-legal-beschaeftigen', text: 'Pflegekraft legal beschäftigen' },
                { href: '/eu-pflegekraft-rechte-pflichten', text: 'EU-Pflegekraft: Rechte und Pflichten' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="kosten" titel="Kosten & Kassenzuschüsse 2026">
            <Text>
              Die Betreuung einer Person kostet ab 2.150 € im Monat. Wie viel genau, hängt zum Beispiel davon ab, ob die
              Betreuungskraft nachts gebraucht wird oder einen Führerschein haben soll. Pflegegeld, Entlastungsbudget und
              Steuerermäßigung senken den Betrag, den Sie selbst tragen:
            </Text>
            {/* Alle drei Abzüge als Spalten wie auf /kosten (Martin 18.09.: „Pflegegeld und das Budget sind immer zu berücksichtigen. Immer.") */}
            <Tabelle
              kopf={['Pflegegrad', 'Betreuung', 'Pflegegeld', 'Entlastungsbudget', 'Steuer', 'Selbst zu tragen']}
              zeilen={[
                ['Pflegegrad 2', 'ab 2.150 €', '− 347 €', '− 295 €', '− 333 €', 'ab ca. 1.175 €'],
                ['Pflegegrad 3', 'ab 2.150 €', '− 599 €', '− 295 €', '− 333 €', 'ab ca. 923 €'],
                ['Pflegegrad 4', 'ab 2.150 €', '− 800 €', '− 295 €', '− 333 €', 'ab ca. 722 €'],
                ['Pflegegrad 5', 'ab 2.200 €', '− 990 €', '− 295 €', '− 333 €', 'ab ca. 582 €'],
              ]}
              betont={5}
              fuss="Entlastungsbudget: 3.539 € im Jahr, anteilig je Monat · Steuerermäßigung: 20 %, bis 4.000 € im Jahr · zzgl. An- und Abreise 125 € je Strecke · Kost und Logis stellen Sie · Stand September 2026, Werte aus unserem Kostenrechner"
            />
            <KostenAufteilung />
            <Kasten augenbraue="Was zahlt wer" titel="Pflegekasse ja, Krankenkasse nein">
              <Text>
                Die Pflegekasse zahlt das Pflegegeld direkt an Ihren Angehörigen, unabhängig davon, ob Angehörige oder
                eine Betreuungskraft helfen. Das Entlastungsbudget von 3.539 € im Jahr für Verhinderungs- und
                Kurzzeitpflege können Sie für die Betreuungskraft nutzen, wenn Ihre Kasse den Einsatz als
                Verhinderungspflege anerkennt. Die Krankenkasse zahlt für die Betreuung nichts. Der Entlastungsbetrag von
                131 € im Monat ist für anerkannte Alltagshilfen gedacht, in der Regel nicht für die Betreuungskraft.
                Die Steuerermäßigung holen Sie sich mit der Steuererklärung: 20 % der Kosten, höchstens 4.000 € im Jahr.
              </Text>
            </Kasten>
            <Text>
              Was den Preis nach oben oder unten bewegt: die Zahl der zu betreuenden Personen, wie oft nachts Hilfe nötig
              ist, ob die Betreuungskraft einen Führerschein braucht, und wie gut sie Deutsch spricht. Nicht im Preis:
              An- und Abreise mit 125 € je Strecke, Kost und Logis, und an neun Feiertagen im Jahr der doppelte
              Tagessatz.
            </Text>
            <RechnerKasten src="apex-24-stunden-pflege" />
            <MehrDazu
              label="Mehr dazu:"
              links={[
                { href: '/kosten', text: 'Alle Kosten der 24-Stunden-Pflege im Detail' },
                { href: '/finanzierung', text: 'Alle Kassenzuschüsse 2026' },
                { href: '/pflegegeld-und-24h-pflege-kombinieren', text: 'Pflegegeld und 24h-Pflege kombinieren' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="ablauf" titel="Ablauf: Anreise in 3 Tagen möglich">
            <Schritte
              schritte={[
                {
                  title: 'Sofort Angebot und Pflegekräfte einsehen',
                  desc: 'Sie machen wenige preisrelevante Angaben und hinterlassen für die Kopie des Angebots Ihre Kontaktdaten. Sofort danach sehen Sie Ihr Angebot samt Zuschüssen und Steuervorteilen sowie die passenden Pflegekräfte — die Kopie kommt zusätzlich per E-Mail.',
                  tag: 'Unter 2 Minuten',
                  tagTon: 'gruen',
                },
                {
                  title: 'Profil vervollständigen — Bewerbungen erhalten',
                  desc: 'Passt das für Sie, ergänzen Sie die Angaben zu Ihrem Angehörigen. Dann bewerben sich Pflegekräfte bei Ihnen — mit Foto, Erfahrung und Verfügbarkeit.',
                  tag: 'Bewerbungen am selben Werktag',
                  tagTon: 'gruen',
                },
                {
                  title: 'Aussuchen — erst dann der Vertrag',
                  desc: <>Sie entscheiden, wer es wird. Erst nach Ihrer Auswahl kommt der Betreuungsvertrag — den <a href={MUSTERVERTRAG} className={LINK}>Mustervertrag</a> können Sie jederzeit vorher lesen. Danach reist Ihre Betreuungskraft an.</>,
                  tag: 'Anreise in 3 Tagen möglich',
                  tagTon: 'gruen',
                },
              ]}
            />
            <AblaufZeitstrahl />
            <MehrDazu label="Schritt für Schritt erklärt:" links={[{ href: '/ablauf', text: 'Ablauf der 24h-Pflege bei Primundus' }]} />
          </Abschnitt>

          <Abschnitt id="betreuungskraefte" titel="Die Betreuungskräfte: Herkunft, Deutsch, Erfahrung">
            <Text>
              Unsere Betreuungskräfte kommen aus Polen. Viele sind seit
              Jahren in der häuslichen Betreuung tätig und waren schon mehrfach über Primundus im Einsatz. Deutsche
              Pflegekräfte, die im Haushalt wohnen, gibt es in diesem Modell praktisch nicht; die Frage nach der
              Verständigung beantworten wir deshalb offen: Wie gut eine Betreuungskraft Deutsch spricht, steht als
              Stufe in ihrem Profil, und gute Deutschkenntnisse fließen in den Preis ein.
            </Text>
            <Punkte
              punkte={[
                { title: 'Sie sehen vorab, wer kommt', desc: 'Foto, Alter, Deutschkenntnisse, Jahre Erfahrung und die Zahl der Einsätze über Primundus stehen im Profil jeder Betreuungskraft, die sich bei Ihnen bewirbt.' },
                { title: 'Bei uns angestellt', desc: 'Kein Vermittler dazwischen: Die Betreuungskräfte sind bei Primundus angestellt und in Polen sozialversichert. Sie wählen aus, wir setzen sie bei Ihnen ein.' },
                { title: 'Wechsel alle 6–8 Wochen', desc: 'Die Betreuungskräfte wechseln sich in der Regel alle 6–8 Wochen ab. Sie sehen vorher, wer kommt, und wählen jedes Mal selbst aus.' },
                { title: 'Bewertungen echter Familien', desc: 'Was Familien über ihre Betreuungskräfte schreiben, lesen Sie auf der Seite Erfahrungen: Google-Rezensionen und Rückmeldungen über unser Formular, jeweils mit Quelle.' },
              ]}
            />
            <MehrDazu
              label="Mehr dazu:"
              links={[
                { href: '/pflegekraft-aus-polen', text: 'Pflegekraft aus Polen' },
                { href: '/qualitaet', text: 'Wie wir Betreuungskräfte auswählen' },
                { href: '/erfahrungen', text: 'Erfahrungen und Bewertungen' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="nachteile" titel="Nachteile, und woran Sie einen seriösen Anbieter erkennen">
            <Text>
              24-Stunden-Pflege ist für viele Familien die beste Lösung, aber nicht für alle. Das sollten Sie vorher
              wissen:
            </Text>
            <Punkte
              punkte={[
                { title: 'Ein Mensch, keine Rundumüberwachung', desc: 'Die Betreuungskraft hat Pausen und Ruhezeiten und schläft nachts. Wer eine lückenlose Aufsicht braucht, etwa bei schwerer Demenz mit Weglauftendenz, braucht zusätzlich Technik oder Angehörige.' },
                { title: 'Platz und Privatsphäre', desc: 'Sie brauchen ein freies Zimmer, und es lebt ein weiterer Mensch im Haus. Manche Angehörige brauchen ein paar Wochen, bis sich das vertraut anfühlt.' },
                { title: 'Wechsel', desc: 'Alle 6–8 Wochen kommt eine andere Betreuungskraft. Sie sehen vorher, wer kommt, und wählen wieder selbst aus.' },
                { title: 'Keine Fachpflege', desc: 'Spritzen, Verbände und Medikamente nach ärztlicher Anordnung bleiben beim Pflegedienst. Bei sehr hohem medizinischem Bedarf reicht eine Betreuungskraft nicht.' },
                { title: 'Kost und Logis, Reisen, Feiertage', desc: 'Neben dem Monatspreis stellen Sie Kost und Logis, zahlen An- und Abreise mit 125 € je Strecke und an neun Feiertagen im Jahr den doppelten Tagessatz.' },
              ]}
            />
            <Kasten augenbraue="Seriös oder nicht" titel="Vier Dinge, die Sie vor der Unterschrift sehen sollten">
              <Punkte
                punkte={[
                  { title: 'A1-Bescheinigung für jede Betreuungskraft', desc: 'Sie belegt, dass die Betreuungskraft im Heimatland sozialversichert ist. Ohne A1 fehlt dieser Nachweis.' },
                  { title: 'Preis und Betreuungskraft vor dem Vertrag', desc: 'Ein seriöser Anbieter nennt den Monatspreis vorher und zeigt, wer kommt. Bei Primundus sehen Sie beides online, bevor Sie etwas unterschreiben.' },
                  { title: 'Klare Regeln im Vertrag', desc: 'An- und Abreise, Ersatz bei Krankheit, Feiertage und Kündigung stehen schwarz auf weiß. Unseren Mustervertrag können Sie vorab lesen.' },
                  { title: 'Keine Vermittlungsgebühr, keine Anzahlung', desc: 'Sie zahlen erst, wenn die Betreuungskraft da ist, und können täglich kündigen.' },
                ]}
              />
            </Kasten>
            <MehrDazu
              label="Mehr dazu:"
              links={[
                { href: '/nachteile-24h-pflege', text: 'Nachteile ehrlich betrachtet' },
                { href: '/anbieter-vergleich', text: '24h-Pflege-Anbieter im Vergleich 2026' },
                { href: '/24-stunden-pflege-wirkliche-kosten', text: 'Die ehrliche Gesamtrechnung' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="vorteile" titel="24-Stunden-Pflege oder Pflegeheim?">
            <Text>
              Der durchschnittliche Eigenanteil im Pflegeheim beträgt 2026 bundesweit 3.364 € im Monat (vdek-Auswertung,
              Stand 1. Juli 2026). Bei der 24-Stunden-Pflege tragen Sie bei Pflegegrad 3 ab ca. 923 € im Monat selbst,
              und Ihr Angehöriger bleibt in seiner vertrauten Umgebung.
            </Text>
            <HeimVsZuhause />
            <Tabelle
              kopf={['', '24-Stunden-Pflege', 'Pflegeheim']}
              zeilen={[
                ['Selbst zu tragen im Monat', 'ab ca. 923 €', 'Ø 3.364 €'],
                ['Wohnen', 'im eigenen Zuhause', 'Umzug ins Heim'],
                ['Betreuung', '1:1, bei Bedarf auch nachts', 'Pflegepersonal für mehrere Bewohner'],
                ['Tagesablauf', 'nach eigenen Gewohnheiten', 'nach den Abläufen im Heim'],
                ['Kündigung', 'täglich', 'mit Frist zum Monatsende'],
              ]}
              betont={1}
              fuss="24-Stunden-Pflege: eine Person, Pflegegrad 3, Werte aus unserem Kostenrechner, zzgl. An- und Abreise · Pflegeheim: bundesweiter Durchschnitt, vdek-Auswertung, Stand 1. Juli 2026"
            />
            <MehrDazu label="Detaillierter Vergleich:" links={[{ href: '/24h-pflege-vs-pflegeheim-kosten', text: '24h-Pflege vs. Pflegeheim — Kostenvergleich 2026' }]} />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen zur 24-Stunden-Pflege">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>

          <Abschnitt id="themen" titel="Weitere Themen zur 24-Stunden-Pflege">
            <Gruppen
              gruppen={THEMEN.map((g) => ({
                title: g.title,
                punkte: g.links.map((l) => <a key={l.href} href={l.href} className={LINK}>{l.text}</a>),
              }))}
            />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
