import type { Metadata } from 'next'
import Image from 'next/image'
import { KontaktBand } from '@/components/ArticleCTA'
import { Abschnitt, Fragen, Kasten, MehrDazu, Punkte, RatgeberKopf, RatgeberRumpf, Text } from '@/components/vorlage/Ratgeber'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'

// Kernseite in der Seitenvorlage. 20.09.2026 umgestellt (Martin: „wir sind jetzt 6 Jahre in Folge ausgezeichnet — man muss
// da nicht explizit auf die Siegel eingehen, weil wir sie nicht gekauft haben, aber trotzdem Sieger sind — also sinnvoll
// schreiben ohne zu negieren"). Grund: „24 stunden pflege testsieger" ist mit 1.252 Impressionen in 90 Tagen unser größter
// Begriff, brachte auf Position 10 aber nur 5 Klicks. Wer so sucht, will wissen, WER auszeichnet und WIE — das steht jetzt
// zuerst; das Siegel bleibt als Nachweis, rutscht aber nach unten. Keine Prozentzahlen, nie „Vermittler", keine Negation
// anderer Tests. Martins Wortlaut „6× Testsieger / DIE WELT / Preis & Qualität" bleibt gültig..

const AKTUALISIERT = aktualisiertAm('testsieger-24-stunden-pflege', '20. September 2026')
const RECHNER = 'https://kostenrechner.primundus.de/?start=1&src=apex-testsieger'
const PDF = '/downloads/die-welt-service-champions-2021.pdf'
const LINK = 'text-pm-taupe-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors'

const SECTIONS = [
  { id: 'wer', title: 'Wer auszeichnet und wie' },
  { id: 'familie', title: 'Was das für Sie heißt' },
  { id: 'siegel', title: 'Der Nachweis' },
  { id: 'vergleich', title: 'Vergleichen Sie selbst' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege Testsieger: ausgezeichnet von DIE WELT',
  description:
    'Testsieger in der 24-Stunden-Pflege: Primundus ist sechs Jahre in Folge ausgezeichnet. Grundlage sind Kundenurteile aus der Service-Studie von DIE WELT.',
  alternates: { canonical: 'https://primundus.de/testsieger-24-stunden-pflege' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege Testsieger: ausgezeichnet von DIE WELT',
    description:
      'Sechs Jahre in Folge ausgezeichnet. Grundlage sind Kundenurteile aus der Service-Studie von DIE WELT und ServiceValue.',
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
    a: 'Primundus ist sechs Jahre in Folge ausgezeichnet, zuletzt 2026. Vergeben wird die Auszeichnung von DIE WELT gemeinsam mit der ServiceValue GmbH auf Grundlage von Kundenurteilen; 2021 stand primundus.de in seiner Kategorie auf Platz 1 im erlebten Kundenservice.',
  },
  {
    q: 'Wer vergibt die Auszeichnung und wie wird gemessen?',
    a: 'DIE WELT und die ServiceValue GmbH, ein Analyse-Institut aus Köln. Für die jährliche Service-Studie werten sie Millionen Kundenurteile zu mehr als 380 Branchen aus. Gefragt wird nach dem erlebten Kundenservice: Erreichbarkeit, Verständlichkeit und Verlässlichkeit. Ausgezeichnet wird, wer in seiner Kategorie am besten abschneidet.',
  },
  {
    q: 'Wie oft wurde Primundus ausgezeichnet?',
    a: 'Sechs Jahre in Folge, zuletzt 2026. Die Studie wird jedes Jahr neu erhoben, die Auszeichnung gilt jeweils für ein Jahr. Stellvertretend zeigen wir auf dieser Seite das Siegel von 2021 mit der vollständigen Veröffentlichung als PDF.',
  },
  {
    q: 'Was kostet die 24-Stunden-Pflege beim Testsieger?',
    a: 'Eine 24-Stunden-Betreuung kostet bei Primundus ab 2.150 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen der Betreuungskraft. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei Pflegegrad 3 ab ca. 923 Euro im Monat selbst zu tragen. Den Preis für Ihre Situation zeigt der Kostenrechner in zwei Minuten.',
  },
  {
    q: 'Worauf sollte ich neben einer Auszeichnung achten?',
    a: 'Auf die Konditionen: ob eine Vermittlungsgebühr anfällt, wie lange Sie gebunden sind, ob taggenau abgerechnet wird und ob Sie die Betreuungskraft vor dem Vertrag selbst auswählen. Bei Primundus gilt: keine Gebühr, täglich kündbar, taggenaue Abrechnung, Auswahl vor dem Vertrag. Unser Anbieter-Vergleich stellt die bekannten Anbieter nebeneinander.',
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
          titel="Testsieger in der 24-Stunden-Pflege: sechs Jahre in Folge ausgezeichnet"
          einleitung={<>DIE WELT hat Primundus <strong className="text-pm-ink">sechs Jahre in Folge</strong> ausgezeichnet, zuletzt 2026. Entschieden haben das die Kundinnen und Kunden: DIE WELT und die ServiceValue GmbH werten jedes Jahr Millionen Urteile darüber aus, wie Menschen den Service der Unternehmen erleben, mit denen sie zu tun hatten. 2021 stand primundus.de in seiner Kategorie auf Platz 1. Hier lesen Sie, wer da untersucht, wie das abläuft und was davon bei Ihnen zu Hause ankommt.</>}
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="3 Min."
          knopf={{ href: RECHNER, text: 'Preis & Pflegekräfte ansehen' }}
          blickTitel="Auf einen Blick"
          blick={[
            'Sechs Jahre in Folge ausgezeichnet, zuletzt 2026',
            'Grundlage: Kundenurteile aus einer der größten Service-Studien Deutschlands',
            'Untersucht von DIE WELT und der ServiceValue GmbH, jedes Jahr neu',
            '2021: Platz 1 im erlebten Kundenservice, Siegel und Veröffentlichung auf dieser Seite',
            'Keine Vermittlungsgebühr, täglich kündbar, taggenaue Abrechnung',
            'Anreise in 3 Tagen möglich, Ansprechpartnerin täglich 8–20 Uhr',
          ]}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="wer" titel="Wer auszeichnet und wie">
            <Text>
              Hinter der Auszeichnung steht die <strong className="text-pm-ink">Service-Studie von DIE WELT und der ServiceValue GmbH</strong>,
              einem Kölner Analyse-Institut. Sie läuft jedes Jahr neu und ist eine der größten Kundenbefragungen des Landes: mehr als
              380 Branchen, von Banken über Versicherungen bis zur Pflege, bewertet von Millionen Menschen, die mit diesen Unternehmen
              tatsächlich zu tun hatten.
            </Text>
            <Text>
              Gefragt wird nach dem <strong className="text-pm-ink">erlebten Kundenservice</strong>: wie erreichbar das Unternehmen war,
              wie verständlich es erklärt hat, wie zuverlässig es gehalten hat, was es versprochen hat. Ausgezeichnet wird, wer in seiner
              Kategorie die besten Urteile bekommt. 2021 war das in unserer Kategorie primundus.de — und seither jedes Jahr wieder,
              sechs Jahre in Folge, zuletzt 2026.
            </Text>
            <Kasten augenbraue="Was das bedeutet" titel="Die Urteile kommen von Familien, nicht von uns" ton="gruen">
              <Text>
                Über die Auszeichnung entscheiden die Antworten der Befragten. Genau deshalb sagt sie etwas über den Alltag aus: darüber,
                wie Familien die Zusammenarbeit erlebt haben, als es ernst wurde.
              </Text>
            </Kasten>
          </Abschnitt>

          <Abschnitt id="familie" titel="Was heißt das für Sie als Familie?">
            <Text>
              Wenn Sie eine Betreuungskraft für einen Angehörigen suchen, wollen Sie sich auf Ihren Anbieter
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

          <Abschnitt id="siegel" titel="Der Nachweis: Siegel und Veröffentlichung">
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
                    Stellvertretend für die sechs Jahre zeigen wir dieses Siegel mit der vollständigen Veröffentlichung:
                  </Text>
                  <p className="mt-3 text-[17px]">
                    <a href={PDF} target="_blank" rel="noopener" className={`font-semibold ${LINK}`}>Veröffentlichung ansehen (PDF)</a>
                  </p>
                </div>
              </div>
            </Kasten>
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
