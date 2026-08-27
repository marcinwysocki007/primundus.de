import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { NearbyCities } from '@/components/NearbyCities'

// Nachfrage-Lücke (GSC 08/2026): "24 stunden pflege in rhein pfalz kreis"
// rankte OHNE Seite auf Pos. 14,5 (34 Impr.). Ludwigshafen (vom Kreis
// umschlossen) hat eine eigene Seite — wird verlinkt.

export const metadata: Metadata = {
  title: '24-Stunden-Pflege & Betreuung in Rhein-Pfalz-Kreis',
  description:
    '24h-Pflege im Rhein-Pfalz-Kreis: Betreuungskraft zuhause in Schifferstadt, Limburgerhof, Mutterstadt & dem ganzen Kreis. Täglich kündbar, Start in 4–7 Tagen.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-rhein-pfalz-kreis' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege im Rhein-Pfalz-Kreis | Primundus',
    description: 'Geprüfte 24h-Betreuungskraft im Rhein-Pfalz-Kreis. Täglich kündbar, rechtssicher, startklar.',
    url: 'https://primundus.de/24h-pflege-rhein-pfalz-kreis',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Primundus — 24h-Pflege Rhein-Pfalz-Kreis',
    description: '24h-Betreuungskräfte im Rhein-Pfalz-Kreis. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-rhein-pfalz-kreis',
    telephone: '+4989200000830',
    email: 'info@primundus.de',
    areaServed: { '@type': 'AdministrativeArea', name: 'Rhein-Pfalz-Kreis' },
    priceRange: '2.200–3.500 €/Monat',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24h-Pflege Rhein-Pfalz-Kreis', item: 'https://primundus.de/24h-pflege-rhein-pfalz-kreis' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was kostet eine 24h-Pflegekraft im Rhein-Pfalz-Kreis?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Meist zwischen 2.200 und 3.500 Euro im Monat, je nach Pflegesituation. Mit den Zuschüssen der Pflegekasse bleiben bei Pflegegrad 3 oft rund 1.500 bis 2.400 Euro selbst zu tragen.',
        },
      },
      {
        '@type': 'Question',
        name: 'Welche Orte im Rhein-Pfalz-Kreis deckt Primundus ab?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Den ganzen Kreis rund um Ludwigshafen: Schifferstadt, Limburgerhof, Mutterstadt, Maxdorf, Böhl-Iggelheim, Dudenhofen, Römerberg, Altrip und alle weiteren Gemeinden der Vorderpfalz.',
        },
      },
      {
        '@type': 'Question',
        name: 'Wie schnell kann die Betreuung in der Vorderpfalz starten?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'In der Regel innerhalb von 4 bis 7 Tagen nach dem ersten Gespräch — bei dringendem Bedarf oft auch schneller.',
        },
      },
    ],
  },
]

export default function RheinPfalzKreisPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      <ArticleProgressBar />

      <div className="min-h-screen bg-pm-paper">
        <div className="max-w-article mx-auto px-5 py-10 md:py-16">

          <nav className="min-h-[24px] text-sm text-pm-mute mb-6 flex items-center gap-2 flex-wrap">
            <a href="/" className="hover:text-pm-taupe transition-colors">Startseite</a>
            <span>›</span>
            <span className="text-pm-ink">24h-Pflege Rhein-Pfalz-Kreis</span>
          </nav>

          <p className="text-meta font-bold uppercase tracking-[0.1em] text-pm-taupe-light mb-4">
            24h-Pflege im Rhein-Pfalz-Kreis · Aktualisiert August 2026
          </p>
          <h1 className="text-h1 md:text-h1-lg font-bold text-pm-ink mb-6">
            24h-Pflege im Rhein-Pfalz-Kreis — Betreuung im eigenen Zuhause
          </h1>
          <p className="text-[17px] md:text-[19px] leading-relaxed text-pm-body mb-10 font-medium">
            Im Gemüsegarten Deutschlands wohnt man bodenständig: das Haus in Schifferstadt oder Mutterstadt,
            der Garten in Limburgerhof, die Felder vor der Tür. Viele haben ein Leben lang bei der BASF
            gearbeitet und möchten ihren Ruhestand genau hier verbringen — nicht im Heim. Eine
            Betreuungskraft von Primundus zieht mit ein und ist rund um die Uhr da. Täglich kündbar,
            rechtssicher, meist startklar in 4–7 Tagen.
          </p>

          {/* ① SITUATION VOR ORT */}
          <h2 className="text-h2 md:text-h2-lg font-bold text-pm-ink mb-4">
            Pflege in der Vorderpfalz: Nah an allem — und trotzdem zuhause
          </h2>
          <div className="bg-white border border-pm-line rounded-2xl p-6 mb-8">
            <p className="text-[15px] leading-relaxed text-pm-body mb-4">
              Der Rhein-Pfalz-Kreis liegt zwischen Ludwigshafen, Speyer und den Weindörfern — die Kinder
              arbeiten oft in Mannheim oder bei der BASF, die Eltern wohnen im Eigenheim ein paar Orte
              weiter. Wenn plötzlich mehr Hilfe nötig ist, scheitert der Alltag selten an der Entfernung,
              sondern an der Zeit. Eine Betreuungskraft, die mit im Haus wohnt, löst genau das.
            </p>
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: '🏡', title: 'Eigenheim bleibt', desc: 'Haus und Garten müssen nicht aufgegeben werden' },
                { icon: '🥬', title: 'Vertraute Dörfer', desc: 'Bäcker, Verein, Nachbarschaft — alles bleibt' },
                { icon: '🌙', title: 'Nachts abgesichert', desc: 'Jemand ist da, wenn etwas passiert' },
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
            Unser Einsatzgebiet im Rhein-Pfalz-Kreis
          </h2>
          <div className="bg-white border border-pm-line rounded-2xl p-6 mb-8">
            <p className="text-[15px] leading-relaxed text-pm-body">
              Wir sind im gesamten Kreis im Einsatz: <strong>Schifferstadt</strong>, <strong>Limburgerhof</strong>,{' '}
              <strong>Mutterstadt</strong>, <strong>Maxdorf</strong>, <strong>Böhl-Iggelheim</strong>,{' '}
              <strong>Dudenhofen</strong>, <strong>Römerberg</strong>, <strong>Altrip</strong> und allen
              weiteren Gemeinden. Für die Nachbarstädte gibt es eigene Seiten:{' '}
              <a href="/24h-pflege-ludwigshafen" className="text-pm-taupe underline underline-offset-2">Ludwigshafen</a>,{' '}
              <a href="/24h-pflege-speyer" className="text-pm-taupe underline underline-offset-2">Speyer</a> und{' '}
              <a href="/24h-pflege-mannheim" className="text-pm-taupe underline underline-offset-2">Mannheim</a>.
            </p>
          </div>

          {/* ③ KOSTEN */}
          <h2 className="text-h2 md:text-h2-lg font-bold text-pm-ink mb-4">
            Was kostet das — und was zahlt die Pflegekasse dazu?
          </h2>
          <div className="bg-white border border-pm-line rounded-2xl p-6 mb-8">
            <p className="text-[15px] leading-relaxed text-pm-body mb-4">
              Eine 24h-Betreuung kostet über Primundus meist <strong>2.200 bis 3.500 Euro im Monat</strong>.
              Die Pflegekasse zahlt kräftig mit: Mit Pflegegeld, Entlastungsbetrag und Verhinderungspflege
              bleiben bei Pflegegrad 3 oft <strong>rund 1.500 bis 2.400 Euro</strong> im Monat selbst zu
              tragen. Ihren genauen Preis für Ihre Situation zeigt der Kostenrechner in 2 Minuten.
            </p>
            <a
              href="https://kostenrechner.primundus.de/?start=1&amp;src=ort-rhein-pfalz-kreis"
              className="inline-flex items-center gap-2 bg-pm-coral hover:bg-pm-coral-deep text-white font-bold text-[14px] py-3 px-6 rounded-full transition-colors"
            >
              Ihren Preis in 2 Minuten berechnen
            </a>
            <a href="/pflegegrad-rechner" className="block mt-4 text-[15px] text-pm-taupe font-semibold hover:underline">
              → Unsicher beim Pflegegrad? Hier mit denselben sechs Modulen rechnen wie bei der Begutachtung
            </a>
          </div>

          {/* ③b POLEN */}
          <h2 className="text-h2 md:text-h2-lg font-bold text-pm-ink mb-4">Polnische Betreuungskräfte im Rhein-Pfalz-Kreis</h2>
          <p className="text-[15px] leading-relaxed text-pm-body mb-4">
            Wer im Rhein-Pfalz-Kreis nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe:
            jemanden, der im Haushalt lebt und rund um die Uhr da ist. Genau das leisten unsere
            Betreuungskräfte. Die meisten kommen aus Polen, einige aus Rumänien oder Bulgarien —
            und sie sind im gesamten Kreisgebiet im Einsatz.
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
            Der Kostenvergleich fällt im Rhein-Pfalz-Kreis deutlich aus: Bei Pflegegrad 3 bleiben nach Pflegegeld,
            Entlastungsbetrag und Entlastungsbudget meist rund 1.500 bis 2.400 Euro Eigenanteil.
            Ein Heimplatz kostet in Rheinland-Pfalz im ersten Jahr im Schnitt rund 3.220 Euro
            im Monat — und die vertraute Wohnung bleibt dabei auf der Strecke.
          </p>
          <p className="text-[15px] leading-relaxed text-pm-body mb-8">
            Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie
            schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Pflegekraft aus Polen — Kosten, Recht und Ablauf</a>.
          </p>

          {/* ⑤c VOR ORT — aus Zensus-2022-Daten, je Ort verschieden */}
          <h2 className="text-h2 md:text-h2-lg font-bold text-pm-ink mb-4">Was die Pflege zu Hause in Rhein-Pfalz-Kreis ausmacht</h2>
          <p className="text-[15px] leading-relaxed text-pm-body mb-4">
            Ob jemand zur Miete oder im Eigentum wohnt, ändert in Rhein-Pfalz-Kreis die Möglichkeiten. 65,0 Prozent der Haushalte wohnen im Eigentum, in Rheinland-Pfalz sind es 54,4 Prozent. Wer im eigenen Haus lebt, kann über ein freies Zimmer meist selbst entscheiden. Nur 8,6 Prozent der Wohnungen liegen unter 60 Quadratmetern, in Rheinland-Pfalz sind es 15,4 Prozent. Platz ist hier häufiger vorhanden als anderswo im Land.
          </p>
          <p className="text-[15px] leading-relaxed text-pm-body mb-4">
            Die durchschnittliche Wohnung misst 115,1 Quadratmeter und damit rund 7 Quadratmeter mehr als im Schnitt von Rheinland-Pfalz (107,7). 34,3 Prozent der Haushalte bestehen aus einer Person, in Rheinland-Pfalz 40,4 Prozent.
          </p>
          <p className="text-[15px] leading-relaxed text-pm-body mb-4">
            Altbau vor 1950 macht in Rhein-Pfalz-Kreis 15,6 Prozent des Bestands aus, in Rheinland-Pfalz 21,5 Prozent.
          </p>
          <p className="text-[15px] leading-relaxed text-pm-body mb-4">
            In Zahlen: 17.908 Menschen in Rhein-Pfalz-Kreis sind 75 Jahre oder älter, und es gibt 74.069 Wohnungen in 48.337 Gebäuden. Ob darunter eine ist, in der eine Betreuungskraft ein eigenes Zimmer bekommt, entscheidet sich nicht an der Statistik, sondern an Ihrem Grundriss — und das klären wir vorab.
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
            Häufige Fragen aus der Region
          </h2>
          <div className="space-y-4 mb-8">
            <div className="bg-white border border-pm-line rounded-2xl p-6">
              <p className="text-[16px] font-bold text-pm-ink mb-2">Was kostet eine 24h-Pflegekraft im Rhein-Pfalz-Kreis?</p>
              <p className="text-[15px] leading-relaxed text-pm-body">
                Meist zwischen 2.200 und 3.500 Euro im Monat, je nach Pflegesituation. Mit den Zuschüssen
                der Pflegekasse bleiben bei Pflegegrad 3 oft rund 1.500 bis 2.400 Euro selbst zu tragen.
              </p>
            </div>
            <div className="bg-white border border-pm-line rounded-2xl p-6">
              <p className="text-[16px] font-bold text-pm-ink mb-2">Welche Orte im Rhein-Pfalz-Kreis deckt Primundus ab?</p>
              <p className="text-[15px] leading-relaxed text-pm-body">
                Den ganzen Kreis rund um Ludwigshafen: Schifferstadt, Limburgerhof, Mutterstadt, Maxdorf,
                Böhl-Iggelheim, Dudenhofen, Römerberg, Altrip und alle weiteren Gemeinden der Vorderpfalz.
              </p>
            </div>
            <div className="bg-white border border-pm-line rounded-2xl p-6">
              <p className="text-[16px] font-bold text-pm-ink mb-2">Wie schnell kann die Betreuung in der Vorderpfalz starten?</p>
              <p className="text-[15px] leading-relaxed text-pm-body">
                In der Regel innerhalb von 4 bis 7 Tagen nach dem ersten Gespräch — bei dringendem Bedarf
                oft auch schneller.
              </p>
            </div>
          </div>

          <NearbyCities current="rhein-pfalz-kreis" />

          <ArticleCTA
            headline="Ist 24h-Pflege im Rhein-Pfalz-Kreis die richtige Lösung?"
            subline="Sprechen Sie jetzt mit uns — kostenlos und unverbindlich."
          />
        </div>
      </div>
    </>
  )
}
