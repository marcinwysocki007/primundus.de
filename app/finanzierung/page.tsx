import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import { Abschnitt, Fragen, MehrDazu, Punkte, RatgeberKopf, RatgeberRumpf, StandardUnterzeile, Tabelle, Text } from '@/components/vorlage/Ratgeber'
import { KostenAufteilung } from '@/components/grafik/Grafik'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'

// Übersichtsseite Finanzierung in der Seitenvorlage (Paket 3, 19.09.2026). Inhalt wie bisher (Zuschüsse 2026, drei Linklisten,
// Tabelle nach Pflegegrad), dazu die Grafik „Wer zahlt was" der Hauptseite und ein Absatz, wie sich die Zuschüsse zum Eigenanteil
// verrechnen. Beträge 2026 = 2025 (GKV-Spitzenverband), Entlastungsbetrag nur für anerkannte Alltagshilfen.

const AKTUALISIERT = aktualisiertAm('finanzierung', '19. September 2026')
const RECHNER = 'https://kostenrechner.primundus.de/?start=1&src=apex-finanzierung'
const LINK = 'font-semibold text-pm-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors'

const SECTIONS = [
  { id: 'rechnung', title: 'Was am Ende bleibt' },
  { id: 'pflegegeld', title: 'Pflegegeld & Kasse' },
  { id: 'entlastung', title: 'Entlastungsbudget' },
  { id: 'steuer', title: 'Steuer & Förderung' },
  { id: 'tabelle', title: 'Leistungen nach Pflegegrad' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: '24h-Pflege finanzieren: alle Kassenzuschüsse 2026',
  description:
    '24-Stunden-Pflege finanzieren: Pflegegeld bis 990 €, Entlastungsbudget 3.539 €/Jahr, Steuer bis 4.000 €. Alle Zuschüsse und was selbst bleibt.',
  alternates: { canonical: 'https://primundus.de/finanzierung' },
  openGraph: {
    title: '24h-Pflege finanzieren: alle Kassenzuschüsse 2026',
    description: 'Pflegegeld, Entlastungsbudget, Steuerermäßigung: was bei Pflegegrad 2 bis 5 selbst zu tragen bleibt.',
    url: 'https://primundus.de/finanzierung',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
  },
}

// Sichtbare Fragen = Daten für Google (eine Quelle)
const FRAGEN = [
  {
    q: 'Wie kann ich 24-Stunden-Pflege finanzieren?',
    a: 'Mit drei Bausteinen: Pflegegeld (347 bis 990 € im Monat je nach Pflegegrad), Entlastungsbudget (3.539 € im Jahr, wenn die Kasse den Einsatz als Verhinderungspflege anerkennt) und Steuerermäßigung (20 % der Kosten, höchstens 4.000 € im Jahr). Den Entlastungsbetrag von 131 € im Monat zahlt die Kasse nur für anerkannte Alltagshilfen, in der Regel nicht für die Betreuungskraft. Bei Pflegegrad 3 bleiben so ab ca. 923 € im Monat selbst zu tragen.',
  },
  {
    q: 'Was ist das Entlastungsbudget 2026?',
    a: 'Das Entlastungsbudget von 3.539 € im Jahr fasst seit Juli 2025 Verhinderungspflege und Kurzzeitpflege zusammen. Es gilt ab Pflegegrad 2 und lässt sich frei aufteilen. 2026 ist das erste volle Jahr ohne Übergangsregelungen.',
  },
  {
    q: 'Bekomme ich Pflegegeld, wenn eine Betreuungskraft im Haus ist?',
    a: 'Ja. Pflegegeld gibt es, wenn die Pflege zu Hause selbst organisiert ist, mit Angehörigen oder einer Betreuungskraft. Es geht direkt an Ihren Angehörigen; bei Pflegegrad 3 sind das 599 € im Monat.',
  },
]

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://primundus.de/ratgeber' },
      { '@type': 'ListItem', position: 3, name: 'Finanzierung & Zuschüsse', item: 'https://primundus.de/finanzierung' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FRAGEN.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  },
]

const l = (href: string, text: string) => <a href={href} className={LINK}>{text}</a>

export default function FinanzierungPage() {
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
            { label: 'Ratgeber', href: '/ratgeber' },
            { label: 'Finanzierung & Zuschüsse' },
          ]}
          augenbraue="Ratgeber"
          titel={<><span className="min-[375px]:whitespace-nowrap">24-Stunden-Pflege</span> finanzieren: alle Zuschüsse 2026</>}
          einleitung={<>Pflegegeld, Entlastungsbudget und Steuerermäßigung senken den Betrag, den Sie selbst tragen: Bei Pflegegrad 3 sind das zusammen <strong className="text-pm-ink">bis zu 1.227 € im Monat</strong>. Hier stehen alle Zuschüsse 2026, was die Kasse wofür zahlt, und die Ratgeber zu jedem einzelnen.</>}
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="5 Min."
          knopf={{ href: RECHNER, text: 'Preis & Pflegekräfte ansehen' }}
          knopfOben
          unterzeile={<StandardUnterzeile />}
          einleitungTitel="Was die Zuschüsse bewirken"
          blickTitel="Alle Zuschüsse 2026"
          blick={[
            'Pflegegeld: 347 bis 990 € im Monat je nach Pflegegrad (ab Pflegegrad 2)',
            'Entlastungsbudget: 3.539 € im Jahr für Verhinderungs- und Kurzzeitpflege (ab Pflegegrad 2)',
            'Steuerermäßigung: 20 % der Kosten, höchstens 4.000 € im Jahr',
            'Entlastungsbetrag: 131 € im Monat, nur für anerkannte Alltagshilfen',
            'Pflegehilfsmittel: 42 € im Monat für Verbrauchsmittel',
            'Wohnraumanpassung: bis 4.180 € je Maßnahme',
          ]}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="rechnung" titel="Was am Ende bleibt">
            <Text>
              Drei Zuschüsse zählen bei der 24-Stunden-Pflege: Das Pflegegeld zahlt die Pflegekasse jeden Monat direkt an Ihren
              Angehörigen. Das Entlastungsbudget können Sie für die Betreuungskraft einsetzen, wenn Ihre Kasse den Einsatz als
              Verhinderungspflege anerkennt, anteilig 295 € im Monat. Die Steuerermäßigung holen Sie sich mit der Steuererklärung:
              20 % der Kosten, höchstens 4.000 € im Jahr, anteilig 333 € im Monat. Der Preis bleibt der Preis; die Zuschüsse
              bekommen Sie daneben.
            </Text>
            <KostenAufteilung />
            <MehrDazu label="Mehr dazu:" links={[{ href: '/kosten', text: 'Alle Kosten der 24-Stunden-Pflege im Detail' }, { href: '/eigenanteil-24h-pflege-senken', text: 'Eigenanteil senken' }]} />
          </Abschnitt>

          <Abschnitt id="pflegegeld" titel="Pflegegeld und Kassenleistungen">
            <Punkte
              punkte={[
                { title: l('/pflegegeld', 'Pflegegeld 2026: Beträge und Anspruch'), desc: 'Wer Pflegegeld bekommt, wie hoch es ist und was bei einer Betreuungskraft im Haus gilt.' },
                { title: l('/pflegegeld-und-24h-pflege-kombinieren', 'Pflegegeld und 24h-Pflege kombinieren'), desc: 'Wie Pflegegeld und Betreuungskraft gleichzeitig möglich sind.' },
                { title: l('/pflegesachleistungen', 'Pflegesachleistungen'), desc: 'Nur für zugelassene Pflegedienste, nicht für die Betreuungskraft; wann sie sich trotzdem lohnen.' },
                { title: l('/kombinationsleistung-pflege', 'Kombinationsleistung'), desc: 'Pflegegeld und Sachleistungen gleichzeitig nutzen, wenn ein Pflegedienst dazukommt.' },
                { title: l('/pflegeversicherung-leistungen-uebersicht', 'Alle Leistungen der Pflegeversicherung'), desc: 'Die vollständige Übersicht 2026.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="entlastung" titel="Entlastungsbudget und Kurzzeitpflege">
            <Punkte
              punkte={[
                { title: l('/verhinderungspflege', 'Verhinderungspflege und Entlastungsbudget 2026'), desc: '3.539 € im Jahr, frei aufteilbar auf Verhinderungs- und Kurzzeitpflege; alle Regeln.' },
                { title: l('/kurzzeitpflege', 'Kurzzeitpflege'), desc: 'Beantragen, Kosten, und wie das Budget genutzt wird.' },
                { title: l('/kurzzeitpflege-oder-24h-pflege', 'Kurzzeitpflege oder 24h-Pflege'), desc: 'Wann Kurzzeitpflege reicht und wann eine Betreuungskraft zu Hause die bessere Lösung ist.' },
                { title: l('/pflegereform-2025', 'Pflegereform 2025'), desc: 'Gemeinsamer Jahresbetrag, höhere Leistungen: was die Reform für Familien bedeutet.' },
                { title: l('/entlastungsbetrag', 'Entlastungsbetrag: 131 € im Monat'), desc: 'Wofür die Kasse ihn zahlt und warum er in der Regel nicht für die Betreuungskraft gilt.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="steuer" titel="Steuer und weitere Förderungen">
            <Punkte
              punkte={[
                { title: l('/pflege-steuerlich-absetzen', 'Pflege steuerlich absetzen'), desc: 'Bis zu 4.000 € Ersparnis im Jahr: was absetzbar ist und wie Sie es angeben.' },
                { title: l('/eigenanteil-24h-pflege-senken', 'Eigenanteil der 24h-Pflege senken'), desc: 'Alle Möglichkeiten 2026, den monatlichen Eigenanteil zu verringern.' },
                { title: l('/sozialhilfe-bei-pflegebedarf', 'Sozialhilfe bei Pflegebedarf'), desc: 'Wenn das Einkommen nicht reicht: Hilfe zur Pflege im Überblick.' },
                { title: l('/foerderungen-nach-bundesland', 'Förderungen nach Bundesland'), desc: 'Landespflegegeld und Programme der Länder, etwa 500 € im Jahr in Bayern ab Pflegegrad 2.' },
                { title: l('/pflegehilfsmittel-beantragen', 'Pflegehilfsmittel beantragen'), desc: '42 € im Monat für Verbrauchsmittel: was dazugehört und wie Sie es beantragen.' },
                { title: l('/wohnraumanpassung-foerderung', 'Wohnraumanpassung: Förderung beantragen'), desc: 'Bis zu 4.180 € je Maßnahme, welche Umbauten gefördert werden.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="tabelle" titel="Alle Leistungen nach Pflegegrad 2026">
            <Tabelle
              kopf={['Leistung', 'PG 1', 'PG 2', 'PG 3', 'PG 4', 'PG 5']}
              zeilen={[
                ['Pflegegeld im Monat', '—', '347 €', '599 €', '800 €', '990 €'],
                ['Sachleistungen im Monat', '—', '796 €', '1.497 €', '1.859 €', '2.299 €'],
                ['Entlastungsbetrag im Monat', '131 €', '131 €', '131 €', '131 €', '131 €'],
                ['Entlastungsbudget im Jahr', '—', '3.539 €', '3.539 €', '3.539 €', '3.539 €'],
                ['Pflegehilfsmittel im Monat', '42 €', '42 €', '42 €', '42 €', '42 €'],
              ]}
              betont={[2, 3, 4, 5]}
              fuss="Quelle: GKV-Spitzenverband, SGB XI, Stand 2026 (identisch zu 2025). Sachleistungen nur für zugelassene Pflegedienste, nicht für die Betreuungskraft."
            />
            <MehrDazu label="Welcher Pflegegrad gilt für Sie?" links={[{ href: '/pflegegrade', text: 'Alle Pflegegrade 2026 im Überblick' }, { href: '/pflegegrad-rechner', text: 'Pflegegrad-Rechner' }]} />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen zur Finanzierung">
            <Fragen fragen={FRAGEN} />
            <MehrDazu label="Ihr Preis:" links={[{ href: RECHNER, text: 'Preis und passende Pflegekräfte in 2 Minuten' }]} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
