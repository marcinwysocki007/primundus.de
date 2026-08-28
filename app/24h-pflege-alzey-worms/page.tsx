import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { NearbyCities } from '@/components/NearbyCities'

// Quick-Win-Seite (GSC 08/2026): "24 stunden pflege in alzey worms" rankte
// OHNE eigene Seite auf Pos. 8,1 (79 Impr./3 Mon.). Individuell getextet —
// bewusst KEIN Klon des Städte-Templates (92 % Duplikat-Befund 14.08.).

export const metadata: Metadata = {
  title: '24-Stunden-Pflege & Betreuung in Kreis Alzey-Worms',
  description:
    '24h-Pflege im Landkreis Alzey-Worms: geprüfte Betreuungskraft zuhause in Alzey, Wörrstadt, Osthofen & Umgebung. Täglich kündbar, Start in 4–7 Tagen.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-alzey-worms' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege im Kreis Alzey-Worms — Betreuung zuhause | Primundus',
    description: 'Geprüfte 24h-Betreuungskraft in Alzey-Worms. Täglich kündbar, rechtssicher, startklar.',
    url: 'https://primundus.de/24h-pflege-alzey-worms',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Primundus — 24h-Pflege Landkreis Alzey-Worms',
    description: '24h-Betreuungskräfte im Landkreis Alzey-Worms. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-alzey-worms',
    telephone: '+4989200000830',
    email: 'info@primundus.de',
    areaServed: { '@type': 'AdministrativeArea', name: 'Landkreis Alzey-Worms' },
    priceRange: '2.200–3.500 €/Monat',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24h-Pflege Alzey-Worms', item: 'https://primundus.de/24h-pflege-alzey-worms' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was kostet eine 24h-Pflegekraft im Kreis Alzey-Worms?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Meist zwischen 2.200 und 3.500 Euro im Monat, je nach Pflegesituation. Mit Pflegegeld und den weiteren Zuschüssen der Pflegekasse bleiben bei Pflegegrad 3 oft rund 1.500 bis 2.400 Euro selbst zu tragen — deutlich weniger als ein Heimplatz in Rheinhessen.',
        },
      },
      {
        '@type': 'Question',
        name: 'In welchen Orten des Kreises Alzey-Worms ist Primundus tätig?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Im gesamten Landkreis — unter anderem in Alzey, Wörrstadt, Osthofen, Westhofen, Gau-Odernheim, Wonsheim und allen umliegenden Gemeinden. Auch Worms und Mainz sind über eigene Seiten abgedeckt.',
        },
      },
      {
        '@type': 'Question',
        name: 'Wie schnell kann die Betreuung in Alzey-Worms starten?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'In der Regel innerhalb von 4 bis 7 Tagen nach dem ersten Gespräch — bei dringendem Bedarf, etwa nach einem Krankenhausaufenthalt, oft auch schneller.',
        },
      },
    ],
  },
]

export default function AlzeyWormsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      <ArticleProgressBar />

      <div className="min-h-screen bg-pm-paper">
        <div className="max-w-article mx-auto px-5 py-10 md:py-16">

          <nav className="min-h-[24px] text-sm text-pm-mute mb-6 flex items-center gap-2 flex-wrap">
            <a href="/" className="hover:text-pm-taupe transition-colors">Startseite</a>
            <span>›</span>
            <span className="text-pm-ink">24h-Pflege Alzey-Worms</span>
          </nav>

          <p className="text-meta font-bold uppercase tracking-[0.1em] text-pm-taupe-light mb-4">
            24h-Pflege im Landkreis Alzey-Worms · Aktualisiert August 2026
          </p>
          <h1 className="text-h1 md:text-h1-lg font-bold text-pm-ink mb-6">
            24h-Pflege im Kreis Alzey-Worms — Betreuung im eigenen Zuhause
          </h1>
          <p className="text-[17px] md:text-[19px] leading-relaxed text-pm-body mb-10 font-medium">
            Zwischen Alzey und dem Rhein leben viele Familien seit Generationen im eigenen Haus — mit Garten,
            Weinbergen vor der Tür und Nachbarn, die man beim Namen kennt. Wenn die Eltern Hilfe brauchen,
            soll genau das nicht verloren gehen. Eine Betreuungskraft von Primundus zieht mit ein und ist da,
            rund um die Uhr: in Alzey, Wörrstadt, Osthofen und im ganzen Landkreis. Täglich kündbar,
            rechtssicher, meist startklar in 4–7 Tagen.
          </p>

          {/* ① SITUATION VOR ORT */}
          <h2 className="text-h2 md:text-h2-lg font-bold text-pm-ink mb-4">
            Pflege auf dem Land: Warum Bleiben hier die bessere Lösung ist
          </h2>
          <div className="bg-white border border-pm-line rounded-2xl p-6 mb-8">
            <p className="text-[15px] leading-relaxed text-pm-body mb-4">
              Der Landkreis Alzey-Worms ist ländlich geprägt — und genau das macht den Umzug ins Heim oft
              besonders schwer: Das nächste Pflegeheim mit freiem Platz liegt schnell eine halbe Stunde
              entfernt, Besuche werden zur Tagesreise, und das vertraute Dorf fällt von einem Tag auf den
              anderen weg. Die 24h-Betreuung dreht das um: Nicht Ihre Mutter zieht zur Pflege — die Pflege
              zieht zu ihr.
            </p>
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: '🏡', title: 'Haus & Garten bleiben', desc: 'Kein Verkauf, kein Auflösen des Elternhauses' },
                { icon: '🍷', title: 'Vertrautes Umfeld', desc: 'Dorfgemeinschaft, Kirche, Nachbarn — alles bleibt' },
                { icon: '🚗', title: 'Familie in der Nähe', desc: 'Besuch ohne lange Wege — spontan vorbeikommen' },
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
            Unser Einsatzgebiet im Kreis Alzey-Worms
          </h2>
          <div className="bg-white border border-pm-line rounded-2xl p-6 mb-8">
            <p className="text-[15px] leading-relaxed text-pm-body">
              Wir sind im gesamten Landkreis im Einsatz: in <strong>Alzey</strong> und
              <strong> Wörrstadt</strong> genauso wie in <strong>Osthofen</strong>, <strong>Westhofen</strong>,
              <strong> Gau-Odernheim</strong>, <strong>Flonheim</strong>, <strong>Wöllstein</strong> und den
              kleineren Gemeinden dazwischen. Auch wenn Ihr Ort hier nicht steht: Rheinhessen ist unser
              Einsatzgebiet — fragen Sie einfach an. Für die Nachbarstädte gibt es eigene Seiten:{' '}
              <a href="/24h-pflege-worms" className="text-pm-taupe underline underline-offset-2">Worms</a> und{' '}
              <a href="/24h-pflege-mainz" className="text-pm-taupe underline underline-offset-2">Mainz</a>.
            </p>
          </div>

          {/* ③ KOSTEN */}
          <h2 className="text-h2 md:text-h2-lg font-bold text-pm-ink mb-4">
            Was kostet das — und was zahlt die Pflegekasse dazu?
          </h2>
          <div className="bg-white border border-pm-line rounded-2xl p-6 mb-8">
            <p className="text-[15px] leading-relaxed text-pm-body mb-4">
              Eine 24h-Betreuung kostet über Primundus meist <strong>2.200 bis 3.500 Euro im Monat</strong> —
              je nachdem, ob eine oder zwei Personen betreut werden, wie mobil Ihre Angehörigen sind und ob
              nachts Hilfe nötig ist. Die Pflegekasse zahlt kräftig mit: Mit Pflegegeld, Entlastungsbetrag
              und Verhinderungspflege bleiben bei Pflegegrad 3 oft nur <strong>rund 1.500 bis 2.400 Euro</strong>{' '}
              im Monat selbst zu tragen. Zum Vergleich: Ein Heimplatz in Rheinland-Pfalz kostet im Schnitt
              rund 3.364 Euro Eigenanteil — ohne dass jemand rund um die Uhr nur für Ihre Mutter da wäre.
            </p>
            <a
              href="https://kostenrechner.primundus.de/?start=1&amp;src=ort-alzey-worms"
              className="inline-flex items-center gap-2 bg-pm-coral hover:bg-pm-coral-deep text-white font-bold text-[14px] py-3 px-6 rounded-full transition-colors"
            >
              Ihren Preis in 2 Minuten berechnen
            </a>
            <a href="/pflegegrad-rechner" className="block mt-4 text-[15px] text-pm-taupe font-semibold hover:underline">
              → Unsicher beim Pflegegrad? Hier mit denselben sechs Modulen rechnen wie bei der Begutachtung
            </a>
          </div>

          {/* ③b POLEN */}
          <h2 className="text-h2 md:text-h2-lg font-bold text-pm-ink mb-4">Polnische Betreuungskräfte im Kreis Alzey-Worms</h2>
          <p className="text-[15px] leading-relaxed text-pm-body mb-4">
            Wer im Kreis Alzey-Worms nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe:
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
            Der Kostenvergleich fällt im Kreis Alzey-Worms deutlich aus: Bei Pflegegrad 3 bleiben nach Pflegegeld,
            Entlastungsbetrag und Entlastungsbudget meist rund 1.500 bis 2.400 Euro Eigenanteil.
            Ein Heimplatz kostet in Rheinland-Pfalz im ersten Jahr im Schnitt rund 3.220 Euro
            im Monat — und die vertraute Wohnung bleibt dabei auf der Strecke.
          </p>
          <p className="text-[15px] leading-relaxed text-pm-body mb-8">
            Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie
            schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Pflegekraft aus Polen — Kosten, Recht und Ablauf</a>.
          </p>

          {/* ⑤c VOR ORT — aus Zensus-2022-Daten, je Ort verschieden */}
          <h2 className="text-h2 md:text-h2-lg font-bold text-pm-ink mb-4">Was die Pflege zu Hause in Kreis Alzey-Worms ausmacht</h2>
          <p className="text-[15px] leading-relaxed text-pm-body mb-4">
            Knapp zwei von drei Haushalten in Kreis Alzey-Worms wohnen im Eigentum — in Rheinland-Pfalz sind es 54,4 Prozent. Wer im eigenen Haus lebt, entscheidet über ein freies Zimmer selbst und muss niemanden fragen. Die durchschnittliche Wohnung misst 117,4 Quadratmeter und damit rund 10 Quadratmeter mehr als im Schnitt von Rheinland-Pfalz (107,7).
          </p>
          <p className="text-[15px] leading-relaxed text-pm-body mb-4">
            Nur 16,9 Prozent der Wohnungen stammen aus den Jahren 1950 bis 1969, in Rheinland-Pfalz sind es 25,9 Prozent. 33,8 Prozent der Haushalte bestehen aus einer Person, in Rheinland-Pfalz 40,4 Prozent.
          </p>
          <p className="text-[15px] leading-relaxed text-pm-body mb-4">
            Beim Platz steht Kreis Alzey-Worms besser da als das Land: Nur 9,2 Prozent der Wohnungen liegen unter 60 Quadratmetern, in Rheinland-Pfalz sind es 15,4 Prozent. Das Zimmer für eine Betreuungskraft ist hier meist schon vorhanden. Gemessen am Landesschnitt ist Kreis Alzey-Worms jünger — 9,2 Prozent der Einwohner sind 75 oder älter — das sind 11.945 Menschen, in Rheinland-Pfalz 10,7 Prozent. Das heißt nicht, dass weniger Pflege gebraucht wird: Der Anteil ist niedrig, die absolute Zahl bleibt.
          </p>
          <p className="text-[15px] leading-relaxed text-pm-body mb-4">
            In Zahlen: 11.945 Menschen in Kreis Alzey-Worms sind 75 Jahre oder älter, und es gibt 61.870 Wohnungen in 43.077 Gebäuden. Ob darunter eine ist, in der eine Betreuungskraft ein eigenes Zimmer bekommt, entscheidet sich nicht an der Statistik, sondern an Ihrem Grundriss — und das klären wir vorab.
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

          {/* ④ FAQ — Texte identisch zum FAQPage-Schema */}
          <h2 className="text-h2 md:text-h2-lg font-bold text-pm-ink mb-4">
            Häufige Fragen aus der Region
          </h2>
          <div className="space-y-4 mb-8">
            <div className="bg-white border border-pm-line rounded-2xl p-6">
              <p className="text-[16px] font-bold text-pm-ink mb-2">Was kostet eine 24h-Pflegekraft im Kreis Alzey-Worms?</p>
              <p className="text-[15px] leading-relaxed text-pm-body">
                Meist zwischen 2.200 und 3.500 Euro im Monat, je nach Pflegesituation. Mit Pflegegeld und den
                weiteren Zuschüssen der Pflegekasse bleiben bei Pflegegrad 3 oft rund 1.500 bis 2.400 Euro
                selbst zu tragen — deutlich weniger als ein Heimplatz in Rheinhessen.
              </p>
            </div>
            <div className="bg-white border border-pm-line rounded-2xl p-6">
              <p className="text-[16px] font-bold text-pm-ink mb-2">In welchen Orten des Kreises Alzey-Worms ist Primundus tätig?</p>
              <p className="text-[15px] leading-relaxed text-pm-body">
                Im gesamten Landkreis — unter anderem in Alzey, Wörrstadt, Osthofen, Westhofen, Gau-Odernheim,
                Wonsheim und allen umliegenden Gemeinden. Auch Worms und Mainz sind über eigene Seiten abgedeckt.
              </p>
            </div>
            <div className="bg-white border border-pm-line rounded-2xl p-6">
              <p className="text-[16px] font-bold text-pm-ink mb-2">Wie schnell kann die Betreuung in Alzey-Worms starten?</p>
              <p className="text-[15px] leading-relaxed text-pm-body">
                In der Regel innerhalb von 4 bis 7 Tagen nach dem ersten Gespräch — bei dringendem Bedarf,
                etwa nach einem Krankenhausaufenthalt, oft auch schneller.
              </p>
            </div>
          </div>

          <NearbyCities current="alzey-worms" />

          <ArticleCTA
            headline="Ist 24h-Pflege in Alzey-Worms die richtige Lösung?"
            subline="Sprechen Sie jetzt mit uns — kostenlos und unverbindlich."
          />
        </div>
      </div>
    </>
  )
}
