import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { NearbyCities } from '@/components/NearbyCities'

// Quick-Win-Seite (GSC 08/2026): "24 stunden pflege in alzey worms" rankte
// OHNE eigene Seite auf Pos. 8,1 (79 Impr./3 Mon.). Individuell getextet —
// bewusst KEIN Klon des Städte-Templates (92 % Duplikat-Befund 14.08.).

export const metadata: Metadata = {
  title: '24h-Pflege im Kreis Alzey-Worms — Betreuung zuhause',
  description:
    '24h-Pflege im Landkreis Alzey-Worms: geprüfte Betreuungskraft zuhause in Alzey, Wörrstadt, Osthofen & Umgebung. Täglich kündbar, Start in 4–7 Tagen.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-alzey-worms' },
  openGraph: {
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

      <div className="min-h-screen bg-[#F8F7F5]">
        <div className="max-w-[860px] mx-auto px-5 py-10 md:py-16">

          <nav className="h-[24px] text-sm text-[#8B8B8B] mb-6 flex items-center gap-2">
            <a href="/" className="hover:text-[#8B7355] transition-colors">Startseite</a>
            <span>›</span>
            <span className="text-[#1C1C1C]">24h-Pflege Alzey-Worms</span>
          </nav>

          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A89279] mb-4">
            24h-Pflege im Landkreis Alzey-Worms · Aktualisiert August 2026
          </p>
          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            24h-Pflege im Kreis Alzey-Worms — Betreuung im eigenen Zuhause
          </h1>
          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-10 font-medium">
            Zwischen Alzey und dem Rhein leben viele Familien seit Generationen im eigenen Haus — mit Garten,
            Weinbergen vor der Tür und Nachbarn, die man beim Namen kennt. Wenn die Eltern Hilfe brauchen,
            soll genau das nicht verloren gehen. Eine Betreuungskraft von Primundus zieht mit ein und ist da,
            rund um die Uhr: in Alzey, Wörrstadt, Osthofen und im ganzen Landkreis. Täglich kündbar,
            rechtssicher, meist startklar in 4–7 Tagen.
          </p>

          {/* ① SITUATION VOR ORT */}
          <h2 className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mb-4 leading-snug">
            Pflege auf dem Land: Warum Bleiben hier die bessere Lösung ist
          </h2>
          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 mb-8">
            <p className="text-[15px] leading-relaxed text-[#2E2E2E] mb-4">
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
                <div key={item.title} className="bg-[#F8F7F5] rounded-xl p-4 text-center">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <p className="text-[13px] font-bold text-[#1C1C1C] mb-1">{item.title}</p>
                  <p className="text-[12px] text-[#8B8B8B] leading-snug">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ② EINSATZGEBIET */}
          <h2 className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mb-4 leading-snug">
            Unser Einsatzgebiet im Kreis Alzey-Worms
          </h2>
          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 mb-8">
            <p className="text-[15px] leading-relaxed text-[#2E2E2E]">
              Wir sind im gesamten Landkreis im Einsatz: in <strong>Alzey</strong> und
              <strong> Wörrstadt</strong> genauso wie in <strong>Osthofen</strong>, <strong>Westhofen</strong>,
              <strong> Gau-Odernheim</strong>, <strong>Flonheim</strong>, <strong>Wöllstein</strong> und den
              kleineren Gemeinden dazwischen. Auch wenn Ihr Ort hier nicht steht: Rheinhessen ist unser
              Einsatzgebiet — fragen Sie einfach an. Für die Nachbarstädte gibt es eigene Seiten:{' '}
              <a href="/24h-pflege-worms" className="text-[#8B7355] underline underline-offset-2">Worms</a> und{' '}
              <a href="/24h-pflege-mainz" className="text-[#8B7355] underline underline-offset-2">Mainz</a>.
            </p>
          </div>

          {/* ③ KOSTEN */}
          <h2 className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mb-4 leading-snug">
            Was kostet das — und was zahlt die Pflegekasse dazu?
          </h2>
          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 mb-8">
            <p className="text-[15px] leading-relaxed text-[#2E2E2E] mb-4">
              Eine 24h-Betreuung kostet über Primundus meist <strong>2.200 bis 3.500 Euro im Monat</strong> —
              je nachdem, ob eine oder zwei Personen betreut werden, wie mobil Ihre Angehörigen sind und ob
              nachts Hilfe nötig ist. Die Pflegekasse zahlt kräftig mit: Mit Pflegegeld, Entlastungsbetrag
              und Verhinderungspflege bleiben bei Pflegegrad 3 oft nur <strong>rund 1.500 bis 2.400 Euro</strong>{' '}
              im Monat selbst zu tragen. Zum Vergleich: Ein Heimplatz in Rheinland-Pfalz kostet im Schnitt
              deutlich über 2.500 Euro Eigenanteil — ohne dass jemand rund um die Uhr nur für Ihre Mutter da wäre.
            </p>
            <a
              href="https://kostenrechner.primundus.de/"
              className="inline-flex items-center gap-2 bg-[#E76F63] hover:bg-[#D45F53] text-white font-bold text-[14px] py-3 px-6 rounded-xl transition-colors"
            >
              Ihren Preis in 2 Minuten berechnen
            </a>
          </div>

          {/* ④ FAQ — Texte identisch zum FAQPage-Schema */}
          <h2 className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mb-4 leading-snug">
            Häufige Fragen aus der Region
          </h2>
          <div className="space-y-4 mb-8">
            <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6">
              <p className="text-[16px] font-bold text-[#1C1C1C] mb-2">Was kostet eine 24h-Pflegekraft im Kreis Alzey-Worms?</p>
              <p className="text-[15px] leading-relaxed text-[#2E2E2E]">
                Meist zwischen 2.200 und 3.500 Euro im Monat, je nach Pflegesituation. Mit Pflegegeld und den
                weiteren Zuschüssen der Pflegekasse bleiben bei Pflegegrad 3 oft rund 1.500 bis 2.400 Euro
                selbst zu tragen — deutlich weniger als ein Heimplatz in Rheinhessen.
              </p>
            </div>
            <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6">
              <p className="text-[16px] font-bold text-[#1C1C1C] mb-2">In welchen Orten des Kreises Alzey-Worms ist Primundus tätig?</p>
              <p className="text-[15px] leading-relaxed text-[#2E2E2E]">
                Im gesamten Landkreis — unter anderem in Alzey, Wörrstadt, Osthofen, Westhofen, Gau-Odernheim,
                Wonsheim und allen umliegenden Gemeinden. Auch Worms und Mainz sind über eigene Seiten abgedeckt.
              </p>
            </div>
            <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6">
              <p className="text-[16px] font-bold text-[#1C1C1C] mb-2">Wie schnell kann die Betreuung in Alzey-Worms starten?</p>
              <p className="text-[15px] leading-relaxed text-[#2E2E2E]">
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
