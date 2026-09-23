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
  { id: 'siegel', title: 'Das Siegel' },
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
    a: 'Sechs Jahre in Folge, zuletzt 2026. Die Studie wird jedes Jahr neu erhoben; die Auszeichnung gilt jeweils für ein Jahr. Siegel und vollständige Veröffentlichung finden Sie auf dieser Seite.',
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


// Kopf am 23.09.2026 zurueck auf die kompakte Fassung — Martin: „Die vorherige Seite war
// viel besser. Die Ueberschrift war kuerzer, kompakter. Besser verstaendlich. Darunter war
// kuerzer, sodass ich auf den Button und die passenden Pflegekraefte sofort sehen konnte."
//
// Gemessen am 23.09. auf dem iPhone (390 x 664 px sichtbar):
//     vor dem 20.09.  Ueberschrift 108 px (3 Zeilen), Knopf bei 552 px — SICHTBAR
//     nach dem Umbau  Ueberschrift 144 px (4 Zeilen), Knopf bei 771 px — 107 px zu tief
// Die laengere Ueberschrift und die auf vier Saetze gewachsene Einleitung kosteten zusammen
// 219 px und schoben damit den Weg zur Anfrage aus dem ersten Bildschirm.
//
// Zurueck ist aber NICHT die alte Einleitung. Die sagte „Stellvertretend zeigen wir hier
// das Original-Siegel von 2021" — genau der rechtfertigende Ton, den Martin kritisiert hat.
// Die neue ist kuerzer als beide bisherigen Fassungen und nennt 2021 gar nicht: zwei Saetze,
// wer auszeichnet und worauf es beruht. Die Jahreszahl steht dort, wo sie hingehoert — im
// Abschnitt „Der Nachweis".
//
// Die Abschnittsfolge vom 20.09. bleibt: erst wer auszeichnet und wie, dann was es fuer die
// Familie heisst, dann der Nachweis. Das war richtig; falsch war nur der gewanderte Knopf.
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
          einleitung={<>DIE WELT hat Primundus <strong className="text-pm-ink">sechs Jahre in Folge</strong> ausgezeichnet, zuletzt 2026. Entschieden haben das die Kunden — in einer der größten Service-Studien Deutschlands.</>}
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="3 Min."
          knopf={{ href: RECHNER, text: 'Preis & Pflegekräfte ansehen' }}
          blickTitel="Auf einen Blick"
          blick={[
            'Sechs Jahre in Folge ausgezeichnet, zuletzt 2026',
            'Grundlage: Kundenurteile aus einer der größten Service-Studien Deutschlands',
            'Untersucht von DIE WELT und der ServiceValue GmbH, jedes Jahr neu',
            'Siegel und Veröffentlichung im Original auf dieser Seite',
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

          {/* Siegel klein und ohne Erklaerung (23.09.2026). Martin: „Das mit dem Nachweis
              interessiert keine Sau. Das ist schlecht geschrieben, viel zu grosses Icon. Mach doch
              einfach, wie wir das sonst verwenden … Einfach nur Veroeffentlichung ansehen reicht.
              Du brauchst nicht Nachweis und irgend so einen Scheiss. Dann hoert sich das an, als
              wuerde man betruegen."
              Vorher: Ueberschrift „Der Nachweis: Siegel und Veroeffentlichung", Siegel 160 px breit,
              davor ein Satz mit Institut, Monat und Jahr. Jetzt: Siegel in derselben Groesse wie im
              Hero der Startseite, die Zeile darunter wie im Rechner, und ein Link. Nichts erklaert
              sich mehr selbst. */}
          <Abschnitt id="siegel" titel="Das Siegel">
            <Kasten>
              <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
                <Image
                  src="/images/siegel-welt-2021-352.webp"
                  alt="Siegel DIE WELT Service-Champions: primundus.de"
                  width={352}
                  height={528}
                  className="h-[110px] w-auto flex-none rounded-[5px] shadow-[0_2px_10px_rgba(0,0,0,0.2)] md:h-[130px]"
                />
                <div>
                  <p className="text-[19px] font-bold leading-[1.3] tracking-[-0.015em] text-pm-ink">
                    6× Testsieger bei DIE WELT
                  </p>
                  <p className="mt-1 text-[17px] leading-[1.5] text-pm-body">Preis &amp; Qualität</p>
                  <p className="mt-4 text-[17px]">
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
