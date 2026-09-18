import type { Metadata } from 'next'
import Image from 'next/image'
import { KontaktBand } from '@/components/ArticleCTA'
import { Abschnitt, Fragen, Kasten, MehrDazu, Punkte, RatgeberKopf, RatgeberRumpf, Text } from '@/components/vorlage/Ratgeber'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'

// Kernseite in der Seitenvorlage (Paket 2, 18.09.2026). Inhalt unverändert gegenüber dem 15.09. (Martins Wortlaut:
// „6× Testsieger / DIE WELT / Preis & Qualität" wie im Rechner; sechsmal in Folge, Siegel + Veröffentlichung 2021 als
// Nachweis; Jahreszahlen nur, wo nötig; keine Prozentzahlen; Preis/Qualität als Eigenaussage, nie als Zitat).
// Ziel-Queries (GSC 08/2026): "24 stunden pflege testsieger" (270 Impr./4 Wo., Pos. 8,7), "24-stunden pflege testsieger".

const AKTUALISIERT = aktualisiertAm('testsieger-24-stunden-pflege', '15. September 2026')
const RECHNER = 'https://kostenrechner.primundus.de/?start=1&src=apex-testsieger'
const PDF = '/downloads/die-welt-service-champions-2021.pdf'
const LINK = 'text-pm-taupe-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors'

const SECTIONS = [
  { id: 'siegel', title: 'Das Original-Siegel' },
  { id: 'bedeutung', title: 'Was die Auszeichnung bedeutet' },
  { id: 'familie', title: 'Was das für Sie heißt' },
  { id: 'vergleich', title: 'Vergleichen Sie selbst' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege Testsieger: 6× in Folge bei DIE WELT',
  description:
    'Primundus ist sechsmal in Folge Testsieger bei DIE WELT. Mit dem Original-Siegel von 2021 und der Veröffentlichung als PDF.',
  alternates: { canonical: 'https://primundus.de/testsieger-24-stunden-pflege' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege Testsieger: 6× in Folge bei DIE WELT',
    description:
      'Sechsmal in Folge Testsieger bei DIE WELT. Mit Original-Siegel und Veröffentlichung als PDF.',
    url: 'https://primundus.de/testsieger-24-stunden-pflege',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

// Sichtbare Fragen = Daten für Google (eine Quelle)
const FRAGEN = [
  {
    q: 'Wer ist Testsieger in der 24-Stunden-Pflege?',
    a: 'Primundus ist sechsmal in Folge Testsieger bei DIE WELT. Die Veröffentlichung von 2021 (Service-Champion im erlebten Kundenservice, ServiceValue GmbH) können Sie als PDF ansehen.',
  },
  {
    q: 'Worauf beruht die Auszeichnung?',
    a: 'Auf einer der größten Kundenbefragungen Deutschlands: Die ServiceValue GmbH wertet gemeinsam mit DIE WELT jährlich Millionen Kundenurteile zu mehr als 380 Branchen aus. 2021 ging es um den erlebten Kundenservice. primundus.de erreichte in seiner Kategorie Platz 1.',
  },
  {
    q: 'Was kostet die 24-Stunden-Pflege beim Testsieger?',
    a: 'Eine 24-Stunden-Betreuung kostet bei Primundus ab 2.150 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen der Betreuungskraft. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei Pflegegrad 3 ab ca. 923 Euro selbst zu tragen.',
  },
  {
    q: 'Ist Primundus auch aktuell ausgezeichnet?',
    a: 'Ja. Primundus wurde sechsmal in Folge ausgezeichnet, zuletzt 2026. Auf dieser Seite zeigen wir stellvertretend das Siegel von 2021.',
  },
]

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Testsieger 24-Stunden-Pflege', item: 'https://primundus.de/testsieger-24-stunden-pflege' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FRAGEN.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  },
]

export default function TestsiegerPage() {
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
            { label: 'Testsieger 24-Stunden-Pflege' },
          ]}
          augenbraue="Auszeichnung"
          titel="Testsieger in der 24-Stunden-Pflege: 6× in Folge bei DIE WELT"
          einleitung={<>DIE WELT hat Primundus <strong className="text-pm-ink">sechsmal in Folge</strong> ausgezeichnet. Primundus steht für die beste Kombination aus Preis, Qualität und Kundenservice. Stellvertretend zeigen wir hier das Original-Siegel von 2021 mit der vollständigen Veröffentlichung.</>}
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="3 Min."
          knopf={{ href: RECHNER, text: 'Preis & Pflegekräfte ansehen' }}
          blickTitel="Auf einen Blick"
          blick={[
            'Sechsmal in Folge ausgezeichnet, zuletzt 2026',
            '2021: Platz 1 im erlebten Kundenservice (DIE WELT und ServiceValue GmbH)',
            'Original-Siegel und Veröffentlichung als PDF auf dieser Seite',
            'Keine Vermittlungsgebühr, täglich kündbar, taggenaue Abrechnung',
            'Anreise in 3 Tagen möglich',
            'Ansprechpartnerin täglich 8–20 Uhr',
          ]}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="siegel" titel="Das Original-Siegel von 2021">
            <Kasten>
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                <Image
                  src="/images/siegel-welt-2021-352.webp"
                  alt="Siegel DIE WELT Service-Champions 2021: primundus.de"
                  width={352}
                  height={528}
                  className="h-auto w-40 flex-none rounded-[6px] shadow-[0_2px_10px_rgba(0,0,0,0.2)] sm:w-44"
                />
                <div>
                  <Text>
                    „DIE WELT Service-Champions im erlebten Kundenservice: primundus.de" (ServiceValue GmbH, Oktober 2021).
                    Die vollständige Veröffentlichung können Sie hier ansehen:
                  </Text>
                  <p className="mt-3 text-[17px]">
                    <a href={PDF} target="_blank" rel="noopener" className={`font-semibold ${LINK}`}>Veröffentlichung ansehen (PDF)</a>
                  </p>
                </div>
              </div>
            </Kasten>
          </Abschnitt>

          <Abschnitt id="bedeutung" titel="Was bedeutet die Auszeichnung?">
            <Text>
              DIE WELT und die ServiceValue GmbH untersuchen jedes Jahr, wie zufrieden Kundinnen und Kunden mit deutschen
              Unternehmen sind. Dafür werden Millionen von Kundenurteilen ausgewertet, über alle Branchen hinweg, von Banken
              bis zur Pflege. Primundus wurde sechsmal in Folge ausgezeichnet. 2021 erreichte primundus.de in seiner
              Kategorie <strong className="text-pm-ink">Platz 1</strong> im <strong className="text-pm-ink">erlebten Kundenservice</strong>,
              also darin, wie gut sich Familien beraten, begleitet und betreut fühlen.
            </Text>
          </Abschnitt>

          <Abschnitt id="familie" titel="Was heißt das für Sie als Familie?">
            <Text>
              Wenn Sie eine Betreuungskraft für Ihre Eltern oder Ihren Partner suchen, wollen Sie sich auf Ihren Anbieter
              verlassen können. In der Service-Studie 2021 bewerteten Familien Primundus besser als alle anderen
              untersuchten Anbieter der Kategorie. Dazu kommen diese Leistungen:
            </Text>
            <Punkte
              punkte={[
                { title: 'Keine Vermittlungsgebühr', desc: 'Keine Anzahlung, keine Aufnahmegebühr. Der Monatspreis ist der Preis.' },
                { title: 'Täglich kündbar', desc: 'Keine Mindestlaufzeit, kein Risiko.' },
                { title: 'Taggenaue Abrechnung', desc: 'Sie zahlen erst, wenn die Betreuungskraft da ist.' },
                { title: 'Anreise in 3 Tagen möglich', desc: 'Auch bei dringendem Bedarf.' },
                { title: 'Persönliche Ansprechpartnerin', desc: 'Marta Kapcio begleitet Sie von der Anfrage bis zum Start.' },
                { title: 'Rechtssicher', desc: 'Offiziell in der EU angestellte, sozialversicherte Betreuungskräfte.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="vergleich" titel="Vergleichen Sie selbst">
            <Text>
              Eine Auszeichnung ist ein Anhaltspunkt, die Konditionen entscheiden. Wir haben die bekannten Anbieter
              nebeneinandergelegt: Preise, Gebühren, Vertragsbindung und wann Sie die Betreuungskraft auswählen.
            </Text>
            <MehrDazu
              label="Zum Vergleich:"
              links={[
                { href: '/anbieter-vergleich', text: '24h-Pflege-Anbieter im Vergleich 2026' },
                { href: '/pflegehelden-alternative', text: 'Pflegehelden oder Primundus? Der direkte Vergleich' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen zur Auszeichnung">
            <Fragen fragen={FRAGEN} />
            <MehrDazu label="Ihr Preis:" links={[{ href: RECHNER, text: 'Preis und passende Pflegekräfte in 2 Minuten' }]} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
