import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { NearbyCities } from '@/components/NearbyCities'

// Nachfrage-Lücke (GSC 08/2026): "24 stunden pflege wittmund" hatte 84
// Impressionen in 3 Monaten (meiste aller fehlenden Orte) auf Pos. 44 —
// ohne jede Seite. Ostfriesland: weite Wege, wenige Heimplätze.

export const metadata: Metadata = {
  title: '24-Stunden-Pflege & Betreuung in Wittmund | Primundus',
  description:
    '24h-Pflege im Kreis Wittmund: Betreuungskraft zuhause in Wittmund, Esens, Carolinensiel & ganz Ostfriesland. Täglich kündbar, Start in 4–7 Tagen.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-wittmund' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege in Wittmund & Harlingerland | Primundus',
    description: 'Geprüfte 24h-Betreuungskraft im Kreis Wittmund. Täglich kündbar, rechtssicher, startklar.',
    url: 'https://primundus.de/24h-pflege-wittmund',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Primundus — 24h-Pflege Wittmund',
    description: '24h-Betreuungskräfte im Landkreis Wittmund. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-wittmund',
    telephone: '+4989200000830',
    email: 'info@primundus.de',
    areaServed: { '@type': 'AdministrativeArea', name: 'Landkreis Wittmund' },
    priceRange: '2.200–3.500 €/Monat',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24h-Pflege Wittmund', item: 'https://primundus.de/24h-pflege-wittmund' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was kostet eine 24h-Pflegekraft in Wittmund?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Meist zwischen 2.200 und 3.500 Euro im Monat, je nach Pflegesituation. Mit den Zuschüssen der Pflegekasse bleiben bei Pflegegrad 3 oft rund 1.500 bis 2.400 Euro selbst zu tragen.',
        },
      },
      {
        '@type': 'Question',
        name: 'Welche Orte im Kreis Wittmund deckt Primundus ab?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Das ganze Harlingerland: Wittmund, Esens, Carolinensiel, Harlesiel, Neuharlingersiel, Westerholt, Friedeburg und alle Dörfer dazwischen — bis an die Küste.',
        },
      },
      {
        '@type': 'Question',
        name: 'Lohnt sich 24h-Pflege auch auf dem Land in Ostfriesland?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Gerade dort: Heimplätze sind rar und weit entfernt, ambulante Dienste haben lange Anfahrten. Eine Betreuungskraft, die mit im Haus wohnt, macht Wege überflüssig — und das Zuhause bleibt erhalten.',
        },
      },
    ],
  },
]

export default function WittmundPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      <ArticleProgressBar />

      <div className="min-h-screen bg-pm-paper">
        <div className="max-w-article mx-auto px-5 py-10 md:py-16">

          <nav className="min-h-[24px] text-sm text-pm-mute mb-6 flex items-center gap-2 flex-wrap">
            <a href="/" className="hover:text-pm-taupe transition-colors">Startseite</a>
            <span>›</span>
            <span className="text-pm-ink">24h-Pflege Wittmund</span>
          </nav>

          <p className="text-meta font-bold uppercase tracking-[0.1em] text-pm-taupe-light mb-4">
            24h-Pflege im Landkreis Wittmund · Aktualisiert August 2026
          </p>
          <h1 className="text-h1 md:text-h1-lg font-bold text-pm-ink mb-6">
            24h-Pflege in Wittmund und dem Harlingerland — Betreuung im eigenen Zuhause
          </h1>
          <p className="text-[17px] md:text-[19px] leading-relaxed text-pm-body mb-10 font-medium">
            Wer zwischen Wittmund, Esens und der Küste zuhause ist, hat meist ein Haus mit Geschichte —
            und keinen Grund, es im Alter zu verlassen. Doch Heimplätze sind hier rar, und der nächste
            Pflegedienst fährt weit. Die Lösung wohnt mit ein: Eine Betreuungskraft von Primundus ist
            rund um die Uhr da, im vertrauten Zuhause hinterm Deich. Täglich kündbar, rechtssicher,
            meist startklar in 4–7 Tagen.
          </p>

          {/* ① SITUATION VOR ORT */}
          <h2 className="text-h2 md:text-h2-lg font-bold text-pm-ink mb-4">
            Pflege in Ostfriesland: Weite Wege, knappe Plätze — und eine bessere Lösung
          </h2>
          <div className="bg-white border border-pm-line rounded-2xl p-6 mb-8">
            <p className="text-[15px] leading-relaxed text-pm-body mb-4">
              Im Harlingerland ist Pflege vor allem eine Frage der Entfernung: Die Kinder wohnen oft in
              Oldenburg, Bremen oder noch weiter — und ein Heimplatz bedeutet für Besucher jedes Mal eine
              halbe Tagesreise. Eine Betreuungskraft, die mit im Haus lebt, dreht das um: Die Hilfe ist
              immer da, die Familie kommt zu Besuch wie früher, und das Zuhause bleibt der Mittelpunkt.
            </p>
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: '🏡', title: 'Das Haus bleibt', desc: 'Kein Verkauf, keine Auflösung nach Generationen' },
                { icon: '🌊', title: 'Küste & Dorf vertraut', desc: 'Deich, Nachbarn, Teezeit — alles wie gewohnt' },
                { icon: '🚘', title: 'Keine weiten Wege mehr', desc: 'Die Hilfe wohnt im Haus, nicht 40 km entfernt' },
              ].map((item) => (
                <div key={item.title} className="bg-pm-paper rounded-xl p-4 text-center">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <p className="text-[13px] font-bold text-pm-ink mb-1">{item.title}</p>
                  <p className="text-[12px] text-pm-mute leading-snug">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ② EINSATZGEBIET */}
          <h2 className="text-h2 md:text-h2-lg font-bold text-pm-ink mb-4">
            Unser Einsatzgebiet im Landkreis Wittmund
          </h2>
          <div className="bg-white border border-pm-line rounded-2xl p-6 mb-8">
            <p className="text-[15px] leading-relaxed text-pm-body">
              Wir sind im ganzen Harlingerland im Einsatz: <strong>Wittmund</strong>, <strong>Esens</strong>,{' '}
              <strong>Carolinensiel</strong> und <strong>Harlesiel</strong>, <strong>Neuharlingersiel</strong>,{' '}
              <strong>Westerholt</strong>, <strong>Friedeburg</strong> und allen Dörfern dazwischen — bis an
              die Nordseeküste. Auch{' '}
              <a href="/24h-pflege-oldenburg" className="text-pm-taupe underline underline-offset-2">Oldenburg</a>{' '}
              und <a href="/24h-pflege-bremerhaven" className="text-pm-taupe underline underline-offset-2">Bremerhaven</a>{' '}
              haben eigene Seiten.
            </p>
          </div>

          {/* ③ KOSTEN */}
          <h2 className="text-h2 md:text-h2-lg font-bold text-pm-ink mb-4">
            Was kostet das — und was zahlt die Pflegekasse dazu?
          </h2>
          <div className="bg-white border border-pm-line rounded-2xl p-6 mb-8">
            <p className="text-[15px] leading-relaxed text-pm-body mb-4">
              Eine 24h-Betreuung kostet über Primundus meist <strong>2.200 bis 3.500 Euro im Monat</strong>.
              Mit Pflegegeld, Entlastungsbetrag und Verhinderungspflege bleiben bei Pflegegrad 3 oft{' '}
              <strong>rund 1.500 bis 2.400 Euro</strong> selbst zu tragen — und anders als beim Heimplatz
              bleibt das Haus im Familienbesitz.
            </p>
            <a
              href="https://kostenrechner.primundus.de/?start=1&amp;src=ort-wittmund"
              className="inline-flex items-center gap-2 bg-pm-coral hover:bg-pm-coral-deep text-white font-bold text-[14px] py-3 px-6 rounded-full transition-colors"
            >
              Ihren Preis in 2 Minuten berechnen
            </a>
            <a href="/pflegegrad-rechner" className="block mt-4 text-[15px] text-pm-taupe font-semibold hover:underline">
              → Unsicher beim Pflegegrad? Hier mit denselben sechs Modulen rechnen wie bei der Begutachtung
            </a>
          </div>

          {/* ③b POLEN */}
          <h2 className="text-h2 md:text-h2-lg font-bold text-pm-ink mb-4">Polnische Betreuungskräfte in Wittmund</h2>
          <p className="text-[15px] leading-relaxed text-pm-body mb-4">
            Wer in Wittmund nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe:
            jemanden, der im Haushalt lebt und rund um die Uhr da ist. Genau das leisten unsere
            Betreuungskräfte. Die meisten kommen aus Polen, einige aus Rumänien oder Bulgarien —
            und sie sind in Wittmund und im gesamten Umland im Einsatz.
          </p>
          <div className="bg-white border border-pm-line rounded-2xl p-6 mb-4">
            <p className="text-[15px] font-bold text-pm-ink mb-2">Angestellt statt vermittelt</p>
            <p className="text-[15px] leading-relaxed text-pm-body">
              Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte
              fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum
              Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland,
              Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine
              Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren
              wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.
            </p>
          </div>
          <p className="text-[15px] leading-relaxed text-pm-body mb-4">
            <strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte
            Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der
            Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen
            mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei
            vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.
          </p>
          <p className="text-[15px] leading-relaxed text-pm-body mb-4">
            Der Kostenvergleich fällt in Wittmund deutlich aus: Bei Pflegegrad 3 bleiben nach Pflegegeld,
            Entlastungsbetrag und Entlastungsbudget meist rund 1.500 bis 2.400 Euro Eigenanteil.
            Ein Heimplatz kostet in Niedersachsen im ersten Jahr im Schnitt rund 3.010 Euro
            im Monat — und die vertraute Wohnung bleibt dabei auf der Strecke.
          </p>
          <p className="text-[15px] leading-relaxed text-pm-body mb-8">
            Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie
            schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Pflegekraft aus Polen — Kosten, Recht und Ablauf</a>.
          </p>

          {/* ⑤c VOR ORT — aus Zensus-2022-Daten, je Ort verschieden */}
          <h2 className="text-h2 md:text-h2-lg font-bold text-pm-ink mb-4">Was die Pflege zu Hause in Wittmund ausmacht</h2>
          <p className="text-[15px] leading-relaxed text-pm-body mb-4">
            Ob jemand zur Miete oder im Eigentum wohnt, ändert in Wittmund die Möglichkeiten. 62,2 Prozent der Haushalte wohnen im Eigentum, in Niedersachsen sind es 51,1 Prozent. Wer im eigenen Haus lebt, kann über ein freies Zimmer meist selbst entscheiden. In 28,7 Prozent der Haushalte leben ausschließlich Menschen ab 65 — in Niedersachsen sind es 25,0 Prozent. Dort ist niemand im Haus, der nachts einspringen könnte.
          </p>
          <p className="text-[15px] leading-relaxed text-pm-body mb-4">
            Reihenhäuser sind in Wittmund mit 4,4 Prozent seltener als in Niedersachsen (12,9 Prozent). 5,2 Prozent der Wohnungen stehen leer, in Niedersachsen 4,0 Prozent. Wo ein Zimmer fehlt, ist eine größere Wohnung hier eher zu finden als anderswo.
          </p>
          <p className="text-[15px] leading-relaxed text-pm-body mb-4">
            In Zahlen: 6.648 Menschen in Wittmund sind 75 Jahre oder älter, und der Ort zählt 31.761 Wohnungen in 23.407 Gebäuden. Ob darunter eine ist, in der eine Betreuungskraft ein eigenes Zimmer bekommt, entscheidet sich nicht an der Statistik, sondern an Ihrem Grundriss — und das klären wir vorab.
          </p>
          <p className="text-[15px] leading-relaxed text-pm-body mb-10">
            Was davon auf Ihre Situation zutrifft, klären wir vor jeder Entscheidung —
            insbesondere die Frage nach dem eigenen Zimmer für die Betreuungskraft.
            Und lassen Sie sich unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI
            ist kostenlos, trägerunabhängig und kommt auf Wunsch zu Ihnen nach Hause.
          </p>
          <p className="text-[13px] text-pm-mute mb-10">
            Zahlen zu Wohnen und Haushalten: Zensus 2022, Statistische Ämter des Bundes
            und der Länder, Stichtag 15. Mai 2022.
          </p>

          {/* ④ FAQ — identisch zum FAQPage-Schema */}
          <h2 className="text-h2 md:text-h2-lg font-bold text-pm-ink mb-4">
            Häufige Fragen aus dem Harlingerland
          </h2>
          <div className="space-y-4 mb-8">
            <div className="bg-white border border-pm-line rounded-2xl p-6">
              <p className="text-[16px] font-bold text-pm-ink mb-2">Was kostet eine 24h-Pflegekraft in Wittmund?</p>
              <p className="text-[15px] leading-relaxed text-pm-body">
                Meist zwischen 2.200 und 3.500 Euro im Monat, je nach Pflegesituation. Mit den Zuschüssen
                der Pflegekasse bleiben bei Pflegegrad 3 oft rund 1.500 bis 2.400 Euro selbst zu tragen.
              </p>
            </div>
            <div className="bg-white border border-pm-line rounded-2xl p-6">
              <p className="text-[16px] font-bold text-pm-ink mb-2">Welche Orte im Kreis Wittmund deckt Primundus ab?</p>
              <p className="text-[15px] leading-relaxed text-pm-body">
                Das ganze Harlingerland: Wittmund, Esens, Carolinensiel, Harlesiel, Neuharlingersiel,
                Westerholt, Friedeburg und alle Dörfer dazwischen — bis an die Küste.
              </p>
            </div>
            <div className="bg-white border border-pm-line rounded-2xl p-6">
              <p className="text-[16px] font-bold text-pm-ink mb-2">Lohnt sich 24h-Pflege auch auf dem Land in Ostfriesland?</p>
              <p className="text-[15px] leading-relaxed text-pm-body">
                Gerade dort: Heimplätze sind rar und weit entfernt, ambulante Dienste haben lange
                Anfahrten. Eine Betreuungskraft, die mit im Haus wohnt, macht Wege überflüssig — und das
                Zuhause bleibt erhalten.
              </p>
            </div>
          </div>

          <NearbyCities current="wittmund" />

          <ArticleCTA
            headline="Ist 24h-Pflege in Wittmund die richtige Lösung?"
            subline="Sprechen Sie jetzt mit uns — kostenlos und unverbindlich."
          />
        </div>
      </div>
    </>
  )
}
