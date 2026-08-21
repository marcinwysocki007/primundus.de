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

      <div className="min-h-screen bg-[#F8F7F5]">
        <div className="max-w-[860px] mx-auto px-5 py-10 md:py-16">

          <nav className="h-[24px] text-sm text-[#8B8B8B] mb-6 flex items-center gap-2">
            <a href="/" className="hover:text-[#8B7355] transition-colors">Startseite</a>
            <span>›</span>
            <span className="text-[#1C1C1C]">24h-Pflege Wittmund</span>
          </nav>

          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A89279] mb-4">
            24h-Pflege im Landkreis Wittmund · Aktualisiert August 2026
          </p>
          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            24h-Pflege in Wittmund und dem Harlingerland — Betreuung im eigenen Zuhause
          </h1>
          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-10 font-medium">
            Wer zwischen Wittmund, Esens und der Küste zuhause ist, hat meist ein Haus mit Geschichte —
            und keinen Grund, es im Alter zu verlassen. Doch Heimplätze sind hier rar, und der nächste
            Pflegedienst fährt weit. Die Lösung wohnt mit ein: Eine Betreuungskraft von Primundus ist
            rund um die Uhr da, im vertrauten Zuhause hinterm Deich. Täglich kündbar, rechtssicher,
            meist startklar in 4–7 Tagen.
          </p>

          {/* ① SITUATION VOR ORT */}
          <h2 className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mb-4 leading-snug">
            Pflege in Ostfriesland: Weite Wege, knappe Plätze — und eine bessere Lösung
          </h2>
          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 mb-8">
            <p className="text-[15px] leading-relaxed text-[#2E2E2E] mb-4">
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
            Unser Einsatzgebiet im Landkreis Wittmund
          </h2>
          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 mb-8">
            <p className="text-[15px] leading-relaxed text-[#2E2E2E]">
              Wir sind im ganzen Harlingerland im Einsatz: <strong>Wittmund</strong>, <strong>Esens</strong>,{' '}
              <strong>Carolinensiel</strong> und <strong>Harlesiel</strong>, <strong>Neuharlingersiel</strong>,{' '}
              <strong>Westerholt</strong>, <strong>Friedeburg</strong> und allen Dörfern dazwischen — bis an
              die Nordseeküste. Auch{' '}
              <a href="/24h-pflege-oldenburg" className="text-[#8B7355] underline underline-offset-2">Oldenburg</a>{' '}
              und <a href="/24h-pflege-bremerhaven" className="text-[#8B7355] underline underline-offset-2">Bremerhaven</a>{' '}
              haben eigene Seiten.
            </p>
          </div>

          {/* ③ KOSTEN */}
          <h2 className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mb-4 leading-snug">
            Was kostet das — und was zahlt die Pflegekasse dazu?
          </h2>
          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 mb-8">
            <p className="text-[15px] leading-relaxed text-[#2E2E2E] mb-4">
              Eine 24h-Betreuung kostet über Primundus meist <strong>2.200 bis 3.500 Euro im Monat</strong>.
              Mit Pflegegeld, Entlastungsbetrag und Verhinderungspflege bleiben bei Pflegegrad 3 oft{' '}
              <strong>rund 1.500 bis 2.400 Euro</strong> selbst zu tragen — und anders als beim Heimplatz
              bleibt das Haus im Familienbesitz.
            </p>
            <a
              href="https://kostenrechner.primundus.de/"
              className="inline-flex items-center gap-2 bg-[#E76F63] hover:bg-[#D45F53] text-white font-bold text-[14px] py-3 px-6 rounded-xl transition-colors"
            >
              Ihren Preis in 2 Minuten berechnen
            </a>
          </div>

          {/* ④ FAQ — identisch zum FAQPage-Schema */}
          <h2 className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mb-4 leading-snug">
            Häufige Fragen aus dem Harlingerland
          </h2>
          <div className="space-y-4 mb-8">
            <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6">
              <p className="text-[16px] font-bold text-[#1C1C1C] mb-2">Was kostet eine 24h-Pflegekraft in Wittmund?</p>
              <p className="text-[15px] leading-relaxed text-[#2E2E2E]">
                Meist zwischen 2.200 und 3.500 Euro im Monat, je nach Pflegesituation. Mit den Zuschüssen
                der Pflegekasse bleiben bei Pflegegrad 3 oft rund 1.500 bis 2.400 Euro selbst zu tragen.
              </p>
            </div>
            <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6">
              <p className="text-[16px] font-bold text-[#1C1C1C] mb-2">Welche Orte im Kreis Wittmund deckt Primundus ab?</p>
              <p className="text-[15px] leading-relaxed text-[#2E2E2E]">
                Das ganze Harlingerland: Wittmund, Esens, Carolinensiel, Harlesiel, Neuharlingersiel,
                Westerholt, Friedeburg und alle Dörfer dazwischen — bis an die Küste.
              </p>
            </div>
            <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6">
              <p className="text-[16px] font-bold text-[#1C1C1C] mb-2">Lohnt sich 24h-Pflege auch auf dem Land in Ostfriesland?</p>
              <p className="text-[15px] leading-relaxed text-[#2E2E2E]">
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
