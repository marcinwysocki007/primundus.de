import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import { Abschnitt, Fragen, MehrDazu, Punkte, RatgeberKopf, RatgeberRumpf, RechnerKasten, Schritte, Text } from '@/components/vorlage/Ratgeber'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

// Kernseite in der Seitenvorlage (Paket 3, 19.09.2026). Vorher eine leere Hülle („Dieser Ratgeber gibt Ihnen einen kompakten
// Überblick …") mit „15–20 Minuten" und „Am Ende kennen Sie Ihren Eigenanteil", was seit „Preis zuerst" (17.09.) nicht mehr
// stimmt: Den Preis zeigt der Rechner vorab. Jetzt: was wir fragen (die Fragen des Rechners), was Sie fragen sollten (Vertrag,
// Kosten, Krankheit, Kündigung), was danach passiert. Keine Dauer-Angabe, kein „kein Verkaufsgespräch".

const AKTUALISIERT = aktualisiertAm('beratungsgespraech', '19. September 2026')
const RECHNER = 'https://kostenrechner.primundus.de/?start=1&src=apex-beratungsgespraech'
const MUSTERVERTRAG = 'https://kundenportal.primundus.de/primundus-mustervertrag.pdf'
const LINK = 'text-pm-taupe-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors'

const SECTIONS = [
  { id: 'vorab', title: 'Vor dem Gespräch' },
  { id: 'fragen', title: 'Was wir fragen' },
  { id: 'ihre-fragen', title: 'Was Sie fragen sollten' },
  { id: 'danach', title: 'Was danach passiert' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Beratungsgespräch zur 24-Stunden-Pflege: so läuft es ab',
  description:
    'Was wir im Beratungsgespräch fragen, was Sie fragen sollten und was danach passiert. Kostenlos, täglich 8 bis 20 Uhr; den Preis sehen Sie schon vorher.',
  alternates: { canonical: 'https://primundus.de/beratungsgespraech' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Beratungsgespräch zur 24-Stunden-Pflege: so läuft es ab',
    description: 'Was wir fragen, was Sie fragen sollten und was danach passiert. Kostenlos, täglich 8–20 Uhr.',
    url: 'https://primundus.de/beratungsgespraech',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

// Sichtbare Fragen = Daten für Google (eine Quelle)
const FRAGEN = [
  {
    q: 'Ist das Beratungsgespräch kostenlos?',
    a: 'Ja. Das Gespräch kostet nichts und verpflichtet zu nichts. Sie zahlen erst, wenn eine Betreuungskraft bei Ihnen ist, und können täglich kündigen.',
  },
  {
    q: 'Brauche ich einen Termin?',
    a: 'Nein. Rufen Sie täglich zwischen 8 und 20 Uhr an, auch am Wochenende. Wenn Sie lieber schreiben, geht das per WhatsApp oder E-Mail.',
  },
  {
    q: 'Muss ich vorher den Kostenrechner benutzen?',
    a: 'Nein, aber es hilft: Nach 2 Minuten kennen Sie Ihren Monatspreis und sehen passende Pflegekräfte, und im Gespräch geht es dann um Ihre Fragen statt um Zahlen.',
  },
  {
    q: 'Was sollte ich zum Gespräch bereithalten?',
    a: 'Den Pflegegrad, falls vorhanden, ein paar Angaben zur Pflegesituation (Mobilität, Demenz, nächtliche Hilfe) und den gewünschten Starttermin. Ein Pflegegradbescheid ist hilfreich, aber nicht nötig.',
  },
]

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Beratungsgespräch zur 24-Stunden-Pflege: so läuft es ab',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-30',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/beratungsgespraech',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://primundus.de/ratgeber' },
      { '@type': 'ListItem', position: 3, name: 'Beratungsgespräch', item: 'https://primundus.de/beratungsgespraech' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FRAGEN.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  },
]

export default function BeratungsgespraechPage() {
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
            { label: 'Beratungsgespräch' },
          ]}
          augenbraue="Über Primundus"
          titel={<>Beratungsgespräch zur <span className="min-[375px]:whitespace-nowrap">24-Stunden-Pflege</span>: so läuft es ab</>}
          einleitung={<>Sie müssen nicht anrufen, um den Preis zu erfahren: Der steht nach <strong className="text-pm-ink">2 Minuten</strong> im Kostenrechner. Wenn Sie lieber sprechen oder Fragen haben, erreichen Sie Marta Kapcio und ihr Team <strong className="text-pm-ink">täglich von 8 bis 20 Uhr</strong>. Hier lesen Sie, was wir fragen, was Sie fragen sollten und was nach dem Gespräch passiert.</>}
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="4 Min."
          knopf={{ href: RECHNER, text: 'Preis & Pflegekräfte ansehen' }}
          blickTitel="Auf einen Blick"
          blick={[
            'Kostenlos, ohne Termin, täglich 8–20 Uhr',
            'Preis und Pflegekräfte vorab online, in 2 Minuten',
            'Wir fragen nach Pflegegrad, Alltag, Nacht, Wohnung und Wünschen',
            'Sie sehen Profile und wählen selbst aus',
            'Vertrag erst nach Ihrer Auswahl, täglich kündbar',
          ]}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="vorab" titel="Vor dem Gespräch: der Preis in 2 Minuten">
            <Text>
              Früher war das Beratungsgespräch der erste Schritt zum Preis. Heute ist es umgekehrt: Sie beantworten im Kostenrechner
              ein paar Fragen zur Pflegesituation und hinterlassen Ihre Kontaktdaten. Sofort danach sehen Sie Ihren Monatspreis, dazu
              was nach Pflegegeld, Entlastungsbudget und Steuerermäßigung selbst zu tragen bleibt, und passende Pflegekräfte. Das
              Gespräch ist dann für die Fragen da, die ein Rechner nicht beantwortet.
            </Text>
            <RechnerKasten src="apex-beratungsgespraech" />
          </Abschnitt>

          <Abschnitt id="fragen" titel="Was wir Sie fragen">
            <Text>
              Am Telefon stellen wir dieselben Fragen wie der Kostenrechner, weil daran hängt, welche Betreuungskraft passt und was
              die Betreuung kostet:
            </Text>
            <Punkte
              punkte={[
                { title: 'Pflegegrad und Hilfebedarf', desc: 'Welcher Pflegegrad besteht oder beantragt ist, wobei Ihr Angehöriger Hilfe braucht: Körperpflege, Aufstehen, Essen, Haushalt, Begleitung.' },
                { title: 'Tag und Nacht', desc: 'Ob nachts regelmäßig Hilfe nötig ist, etwa bei Demenz oder Toilettengängen. Das fließt in den Preis ein.' },
                { title: 'Wohnung', desc: 'Ob ein eigenes Zimmer für die Betreuungskraft frei ist (das ist Voraussetzung) und ob eine oder zwei Personen betreut werden.' },
                { title: 'Wünsche an die Betreuungskraft', desc: 'Deutschkenntnisse, Führerschein, Erfahrung mit Demenz oder Schlaganfall. Gute Deutschkenntnisse erhöhen den Preis.' },
                { title: 'Start', desc: 'Wann die Betreuung beginnen soll. Eine Anreise ist in 3 Tagen möglich.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="ihre-fragen" titel="Was Sie uns fragen sollten">
            <Text>Diese fünf Fragen sollten Sie jedem Anbieter stellen. So beantworten wir sie:</Text>
            <Punkte
              punkte={[
                { title: 'Wer ist Arbeitgeber der Betreuungskraft?', desc: 'Wir. Die Betreuungskräfte sind bei uns angestellt und sozialversichert, für jeden Einsatz liegt eine A1-Bescheinigung vor. Sie werden nicht Arbeitgeber.' },
                { title: 'Was kostet es genau, und was kommt dazu?', desc: 'Der Monatspreis aus dem Rechner, ab 2.150 €. Dazu An- und Abreise mit 125 € je Strecke, Kost und Logis, und an neun Feiertagen im Jahr der doppelte Tagessatz. Eine Vermittlungsgebühr gibt es nicht.' },
                { title: 'Was passiert, wenn die Betreuungskraft krank wird?', desc: 'Wir stellen schnellstmöglich Ersatz, laut Vertrag in der Regel innerhalb von 3 Tagen. Die Krankheitstage berechnen wir nicht.' },
                { title: 'Wie komme ich wieder raus?', desc: 'Täglich kündbar, taggenau abgerechnet. Keine Mindestlaufzeit.' },
                { title: 'Sehe ich vorher, wer kommt?', desc: <>Ja. Sie sehen Profile mit Foto, Alter, Erfahrung, Einsätzen über Primundus und Deutschkenntnissen und wählen selbst. Den <a href={MUSTERVERTRAG} target="_blank" rel="noopener" className={LINK}>Mustervertrag</a> können Sie vorher lesen.</> },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="danach" titel="Was nach dem Gespräch passiert">
            <Schritte
              schritte={[
                { title: 'Berechnung speichern', desc: 'Sie speichern die Berechnung mit Ihren Kontaktdaten und sehen sofort passende Pflegekräfte im Kundenportal.', tag: 'Sofort' },
                { title: 'Bewerbungen ansehen', desc: 'Betreuungskräfte bewerben sich auf Ihre Betreuung, mit Foto, Erfahrung und Verfügbarkeit. Bewerbungen kommen am selben Werktag.', tag: 'Bewerbungen am selben Werktag' },
                { title: 'Aussuchen, dann Vertrag', desc: 'Sie entscheiden, wer kommt. Erst danach kommt der Betreuungsvertrag, dann reist die Betreuungskraft an.', tag: 'Anreise in 3 Tagen möglich' },
              ]}
            />
            <MehrDazu label="Mehr dazu:" links={[{ href: '/ablauf', text: 'So läuft es ab' }, { href: '/kontakt', text: 'Kontakt' }, { href: '/kosten', text: 'Was 24-Stunden-Pflege kostet' }]} />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen zum Beratungsgespräch">
            <Fragen fragen={FRAGEN} />
            <MehrDazu label="Ihr Preis:" links={[{ href: RECHNER, text: 'Preis und passende Pflegekräfte in 2 Minuten' }]} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
