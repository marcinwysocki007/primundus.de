import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import { Abschnitt, Fragen, Kasten, MehrDazu, RatgeberKopf, RatgeberRumpf, Text } from '@/components/vorlage/Ratgeber'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { AuszeichnungsJahre, SiegelZeile, VorteileKasten } from '@/components/vertrauen/Vertrauen'

// Kernseite in der Seitenvorlage. 20.09.2026 umgestellt (Martin: „wir sind jetzt 6 Jahre in Folge ausgezeichnet — man muss
// da nicht explizit auf die Siegel eingehen, weil wir sie nicht gekauft haben, aber trotzdem Sieger sind — also sinnvoll
// schreiben ohne zu negieren"). Grund: „24 stunden pflege testsieger" ist mit 1.252 Impressionen in 90 Tagen unser größter
// Begriff, brachte auf Position 10 aber nur 5 Klicks. Wer so sucht, will wissen, WER auszeichnet und WIE — das steht jetzt
// zuerst; das Siegel bleibt als Nachweis, rutscht aber nach unten. Keine Prozentzahlen, nie „Vermittler", keine Negation
// anderer Tests. Martins Wortlaut „6× Testsieger / DIE WELT / Preis & Qualität" bleibt gültig..
//
// 23.09.2026 abends, Martin: „ab 2021 wurden wir jedes Jahr in Folge ausgezeichnet … nenne die Zahlen. Weil so ist das
// nun mal." Regel: Wo ein Jahr der Auszeichnung steht, stehen alle sechs — nie „2021" allein (las sich wie EINE
// Auszeichnung). Ausgeschrieben zweimal: im Familie-Satz (Martins Wortlaut) und in der Frage „Wie oft …"; viermal
// wirkte aufdringlich (OpenAI-Prüfung 23.09.). Und: „dass man uns transparent sofort Preis und Pflegekräfte direkt einsehen kann … damit das immer
// gleich ist" — die Vorteile im Abschnitt #familie stehen in der Reihenfolge der USPs und im Wortlaut von Startseite
// und Rechner (Hero-Punkte, Ablauf, Bestpreisgarantie).

const AKTUALISIERT = aktualisiertAm('testsieger-24-stunden-pflege', '23. September 2026')
const RECHNER = 'https://kostenrechner.primundus.de/?start=1&src=apex-testsieger'
const PDF = '/downloads/die-welt-service-champions-2021.pdf'
const LINK = 'text-pm-taupe-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors'

// 23.09.2026, Martin: „6x in Folge bei DIE WELT fand ich besser in den Snippets. Und sollten wir das Siegel nicht schon
// früher zeigen — also Auf einen Blick oder ein eigener Bereich direkt darüber, so die Box wie im Kostenrechner?“
// Titel zurück auf seinen Wortlaut vom 16.09.; das Siegel steht jetzt oben im Kasten (seine Wahl: „A ist gut“), der Abschnitt
// „Das Siegel“ weiter unten fällt dafür weg, sonst stünde es zweimal auf der Seite.
// Beschreibung D2 nach OpenAI-Prüfung (23.09.): stärkste Klickrate, führt in den Rechner, 106 Zeichen — am Handy vollständig
const BESCHREIBUNG = 'Primundus ist 6× in Folge Testsieger bei DIE WELT. Preis und passende Pflegekräfte sehen Sie in 2 Minuten.'
const PDF_LINK = <a href={PDF} target="_blank" rel="noopener" className={`font-semibold ${LINK}`}>Veröffentlichung ansehen (PDF)</a>

const SECTIONS = [
  { id: 'wer', title: 'Wer auszeichnet und wie' },
  { id: 'familie', title: 'Was das für Sie heißt' },
  { id: 'vergleich', title: 'Vergleichen Sie selbst' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege Testsieger: 6× in Folge bei DIE WELT',
  description: BESCHREIBUNG,
  alternates: { canonical: 'https://primundus.de/testsieger-24-stunden-pflege' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege Testsieger: 6× in Folge bei DIE WELT',
    description: BESCHREIBUNG,
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
    a: 'Primundus ist sechs Jahre in Folge Testsieger bei DIE WELT, zuletzt 2026. Vergeben wird die Auszeichnung gemeinsam mit der ServiceValue GmbH, auf Grundlage von Kundenurteilen zum erlebten Kundenservice.',
  },
  {
    q: 'Wer vergibt die Auszeichnung und wie wird gemessen?',
    a: 'DIE WELT und die ServiceValue GmbH, ein Analyse-Institut aus Köln. Für die jährliche Service-Studie werten sie Millionen Kundenurteile zu mehr als 380 Branchen aus. Gefragt wird nach dem erlebten Kundenservice: Erreichbarkeit, Verständlichkeit und Verlässlichkeit. Ausgezeichnet wird, wer in seiner Kategorie am besten abschneidet.',
  },
  {
    q: 'Wie oft wurde Primundus ausgezeichnet?',
    a: 'Sechs Jahre in Folge: 2021, 2022, 2023, 2024, 2025 und 2026. Die Studie wird jedes Jahr neu erhoben; die Auszeichnung gilt jeweils für ein Jahr. Siegel und vollständige Veröffentlichung finden Sie oben auf dieser Seite.',
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
// wer auszeichnet und worauf es beruht. Die Jahre stehen ausgeschrieben (2021 bis 2026 einzeln)
// in „Was heißt das für Sie" und in der Frage „Wie oft wurde Primundus ausgezeichnet?".
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
          siegelZiel="#wer"
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
          blickKopf={<SiegelZeile link={PDF_LINK} />}
          // Martin 23.09.2026: „sechsmal ausgezeichnet, Grundlage, Untersuchung, keine Vermittlungsgebühr, Anreise …
          // das passt doch irgendwie nicht zusammen … man kann sagen, warum … fair wegen keine Vermittlungsgebühr,
          // täglich kündbar, taggenaue Abrechnung … vielleicht als eine Art Inhaltsverzeichnis". Jede Zeile ist ein
          // Grund und springt zu dem Abschnitt, der ihn belegt. „Warum Preis-Leistungssieger" steht bewusst NICHT
          // da: Die Studie bewertet den erlebten Kundenservice, nicht die Konditionen.
          blickVerweise={[
            { href: '#wer', titel: 'Wer uns auszeichnet', text: 'DIE WELT, auf Grundlage von Kundenurteilen' },
            // „Faire Konditionen" statt „Fair im Preis" (OpenAI-Prüfung 23.09.): „täglich kündbar" ist keine Preisangabe.
            // 23.09. abends (Martin: „transparent sofort Preis und Pflegekräfte direkt einsehen"): der Vorteil selbst ist der
            // Titel; „Transparent und fair" war als Titel eine Floskel ohne den Text dahinter (OpenAI-Prüfung).
            { href: '#familie', titel: 'Preis und Pflegekräfte sofort sehen', text: 'dazu keine Vermittlungsgebühr, täglich kündbar, Bestpreisgarantie' },
            { href: '#vergleich', titel: 'Vergleichen Sie selbst', text: 'Gebühren, Bindung und Auswahl bei den bekannten Anbietern' },
            { href: '#faq', titel: 'Häufige Fragen', text: 'zur Auszeichnung und zu den Kosten' },
          ]}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="wer" titel="Wer auszeichnet und wie">
            {/* 24.09.2026: die sechs Jahre direkt unter der Abschnitts-Überschrift (Martin: „6× in Folge ausgezeichnet" muss oben stehen). */}
            <AuszeichnungsJahre link={PDF_LINK} />
            <Text>
              Hinter der Auszeichnung steht die <strong className="text-pm-ink">Service-Studie von DIE WELT und der ServiceValue GmbH</strong>,
              einem Kölner Analyse-Institut. Sie läuft jedes Jahr neu und ist eine der größten Kundenbefragungen des Landes: mehr als
              380 Branchen, von Banken über Versicherungen bis zur Pflege, bewertet von Millionen Menschen, die mit diesen Unternehmen
              tatsächlich zu tun hatten.
            </Text>
            <Text>
              Gefragt wird nach dem <strong className="text-pm-ink">erlebten Kundenservice</strong>: wie erreichbar das Unternehmen war,
              wie verständlich es erklärt hat, wie zuverlässig es gehalten hat, was es versprochen hat. Ausgezeichnet wird, wer in seiner
              Kategorie die besten Urteile bekommt. In unserer Kategorie war das primundus.de, sechs Jahre in Folge.
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
              verlassen können. In den Service-Studien 2021, 2022, 2023, 2024, 2025 und 2026 bewerteten Familien Primundus besser
              als alle anderen untersuchten Anbieter der Kategorie. Dazu kommen diese Leistungen:
            </Text>
            {/* 24.09.2026, Martin: „das ist doch der Vorteil … kompakter und nicht wie so eine ewig lange Liste" — die sechs
                wichtigsten Vorteile im weißen Kasten (Wortlaut aus Vertrauen.tsx, wie unter dem Rechner-Knopf). Ansprechpartnerin
                steht im Kontaktbereich am Seitenende; „Rechtssicher" hat /rechtssicher. */}
            <VorteileKasten />
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
