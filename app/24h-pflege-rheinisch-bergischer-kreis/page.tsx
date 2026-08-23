import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { NearbyCities } from '@/components/NearbyCities'

// Nachfrage-Lücke (GSC 08/2026): "24 stunden pflege in lk rheinisch
// bergischer kreis" rankte OHNE Seite auf Pos. 9,2 (33 Impr.). Kreisstadt
// Bergisch Gladbach hat eine eigene Seite — wird verlinkt, kein Duplikat.

export const metadata: Metadata = {
  title: '24-Stunden-Pflege & Betreuung in Rheinisch-Bergischer Kreis',
  description:
    '24h-Pflege im Rheinisch-Bergischen Kreis: Betreuungskraft zuhause in Wermelskirchen, Overath, Rösrath & dem ganzen Kreis. Täglich kündbar, Start in 4–7 Tagen.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-rheinisch-bergischer-kreis' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege im Rheinisch-Bergischen Kreis | Primundus',
    description: 'Geprüfte 24h-Betreuungskraft im Rheinisch-Bergischen Kreis. Täglich kündbar, rechtssicher, startklar.',
    url: 'https://primundus.de/24h-pflege-rheinisch-bergischer-kreis',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Primundus — 24h-Pflege Rheinisch-Bergischer Kreis',
    description: '24h-Betreuungskräfte im Rheinisch-Bergischen Kreis. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-rheinisch-bergischer-kreis',
    telephone: '+4989200000830',
    email: 'info@primundus.de',
    areaServed: { '@type': 'AdministrativeArea', name: 'Rheinisch-Bergischer Kreis' },
    priceRange: '2.200–3.500 €/Monat',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24h-Pflege Rheinisch-Bergischer Kreis', item: 'https://primundus.de/24h-pflege-rheinisch-bergischer-kreis' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was kostet eine 24h-Pflegekraft im Rheinisch-Bergischen Kreis?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Meist zwischen 2.200 und 3.500 Euro im Monat, je nach Pflegesituation. Mit den Zuschüssen der Pflegekasse bleiben bei Pflegegrad 3 oft rund 1.500 bis 2.400 Euro selbst zu tragen — in der Regel weniger als ein Heimplatz im Rheinland.',
        },
      },
      {
        '@type': 'Question',
        name: 'Welche Orte im Rheinisch-Bergischen Kreis deckt Primundus ab?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Den ganzen Kreis: Bergisch Gladbach, Wermelskirchen, Overath, Rösrath, Leichlingen, Burscheid, Odenthal und Kürten — von der Kölner Stadtgrenze bis ins Bergische Land.',
        },
      },
      {
        '@type': 'Question',
        name: 'Wie schnell kann die Betreuung im Bergischen starten?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'In der Regel innerhalb von 4 bis 7 Tagen nach dem ersten Gespräch — bei dringendem Bedarf, etwa nach einem Klinikaufenthalt, oft auch schneller.',
        },
      },
    ],
  },
]

export default function RheinischBergischerKreisPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      <ArticleProgressBar />

      <div className="min-h-screen bg-pm-paper">
        <div className="max-w-article mx-auto px-5 py-10 md:py-16">

          <nav className="min-h-[24px] text-sm text-pm-mute mb-6 flex items-center gap-2 flex-wrap">
            <a href="/" className="hover:text-pm-taupe transition-colors">Startseite</a>
            <span>›</span>
            <span className="text-pm-ink">24h-Pflege Rheinisch-Bergischer Kreis</span>
          </nav>

          <p className="text-meta font-bold uppercase tracking-[0.1em] text-pm-taupe-light mb-4">
            24h-Pflege im Rheinisch-Bergischen Kreis · Aktualisiert August 2026
          </p>
          <h1 className="text-h1 md:text-h1-lg font-bold text-pm-ink mb-6">
            24h-Pflege im Rheinisch-Bergischen Kreis — Betreuung im eigenen Zuhause
          </h1>
          <p className="text-[17px] md:text-[19px] leading-relaxed text-pm-body mb-10 font-medium">
            Vom Haus am Hang in Wermelskirchen bis zum Garten in Rösrath: Im Bergischen wohnt man mit
            Aussicht — und bleibt gern, auch wenn die Kinder längst in Köln arbeiten. Wenn Mutter oder
            Vater mehr Hilfe brauchen, als Wochenendbesuche leisten können, zieht eine Betreuungskraft
            von Primundus mit ein und ist rund um die Uhr da. Täglich kündbar, rechtssicher, meist
            startklar in 4–7 Tagen.
          </p>

          {/* ① SITUATION VOR ORT */}
          <h2 className="text-h2 md:text-h2-lg font-bold text-pm-ink mb-4">
            Pflege im Bergischen: Hanglagen, weite Wege, volle Heime
          </h2>
          <div className="bg-white border border-pm-line rounded-2xl p-6 mb-8">
            <p className="text-[15px] leading-relaxed text-pm-body mb-4">
              Zwischen Kölner Stadtrand und Bergischem Land ist das Eigenheim die Regel — oft mit Treppen,
              Garten und ohne Bus vor der Tür. Genau das macht ambulante Versorgung schwer planbar und den
              Heimplatz zur ungeliebten Notlösung. Die 24h-Betreuung löst beides: Eine Kraft wohnt mit im
              Haus, die Wege entfallen, und das Zuhause bleibt der Lebensmittelpunkt.
            </p>
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: '🏡', title: 'Haus & Hanglage bleiben', desc: 'Kein Umzug, keine Haushaltsauflösung' },
                { icon: '🌳', title: 'Vertrautes Bergisches', desc: 'Nachbarn, Kirche, Verein — alles bleibt nah' },
                { icon: '🚗', title: 'Köln-Pendler entlastet', desc: 'Die Familie muss nicht täglich rausfahren' },
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
            Unser Einsatzgebiet im Rheinisch-Bergischen Kreis
          </h2>
          <div className="bg-white border border-pm-line rounded-2xl p-6 mb-8">
            <p className="text-[15px] leading-relaxed text-pm-body">
              Wir sind im gesamten Kreis im Einsatz:{' '}
              <a href="/24h-pflege-bergisch-gladbach" className="text-pm-taupe underline underline-offset-2">Bergisch Gladbach</a>{' '}
              mit Bensberg und Refrath, <strong>Wermelskirchen</strong>, <strong>Overath</strong>,{' '}
              <strong>Rösrath</strong>, <strong>Leichlingen</strong>, <strong>Burscheid</strong>,{' '}
              <strong>Odenthal</strong> und <strong>Kürten</strong>. Auch{' '}
              <a href="/24h-pflege-koeln" className="text-pm-taupe underline underline-offset-2">Köln</a> und{' '}
              <a href="/24h-pflege-leverkusen" className="text-pm-taupe underline underline-offset-2">Leverkusen</a>{' '}
              haben eigene Seiten.
            </p>
          </div>

          {/* ③ KOSTEN */}
          <h2 className="text-h2 md:text-h2-lg font-bold text-pm-ink mb-4">
            Was kostet das — und was zahlt die Pflegekasse dazu?
          </h2>
          <div className="bg-white border border-pm-line rounded-2xl p-6 mb-8">
            <p className="text-[15px] leading-relaxed text-pm-body mb-4">
              Eine 24h-Betreuung kostet über Primundus meist <strong>2.200 bis 3.500 Euro im Monat</strong> —
              abhängig von Pflegesituation, nächtlichem Hilfebedarf und Deutschkenntnissen der Betreuungskraft.
              Mit Pflegegeld, Entlastungsbetrag und Verhinderungspflege bleiben bei Pflegegrad 3 oft{' '}
              <strong>rund 1.500 bis 2.400 Euro</strong> selbst zu tragen — meist weniger als ein Heimplatz
              im Rheinland, und ohne dass jemand sein Bergisches aufgeben muss.
            </p>
            <a
              href="https://kostenrechner.primundus.de/"
              className="inline-flex items-center gap-2 bg-pm-coral hover:bg-pm-coral-deep text-white font-bold text-[14px] py-3 px-6 rounded-full transition-colors"
            >
              Ihren Preis in 2 Minuten berechnen
            </a>
          </div>

          {/* ④ FAQ — identisch zum FAQPage-Schema */}
          <h2 className="text-h2 md:text-h2-lg font-bold text-pm-ink mb-4">
            Häufige Fragen aus dem Kreis
          </h2>
          <div className="space-y-4 mb-8">
            <div className="bg-white border border-pm-line rounded-2xl p-6">
              <p className="text-[16px] font-bold text-pm-ink mb-2">Was kostet eine 24h-Pflegekraft im Rheinisch-Bergischen Kreis?</p>
              <p className="text-[15px] leading-relaxed text-pm-body">
                Meist zwischen 2.200 und 3.500 Euro im Monat, je nach Pflegesituation. Mit den Zuschüssen
                der Pflegekasse bleiben bei Pflegegrad 3 oft rund 1.500 bis 2.400 Euro selbst zu tragen —
                in der Regel weniger als ein Heimplatz im Rheinland.
              </p>
            </div>
            <div className="bg-white border border-pm-line rounded-2xl p-6">
              <p className="text-[16px] font-bold text-pm-ink mb-2">Welche Orte im Rheinisch-Bergischen Kreis deckt Primundus ab?</p>
              <p className="text-[15px] leading-relaxed text-pm-body">
                Den ganzen Kreis: Bergisch Gladbach, Wermelskirchen, Overath, Rösrath, Leichlingen,
                Burscheid, Odenthal und Kürten — von der Kölner Stadtgrenze bis ins Bergische Land.
              </p>
            </div>
            <div className="bg-white border border-pm-line rounded-2xl p-6">
              <p className="text-[16px] font-bold text-pm-ink mb-2">Wie schnell kann die Betreuung im Bergischen starten?</p>
              <p className="text-[15px] leading-relaxed text-pm-body">
                In der Regel innerhalb von 4 bis 7 Tagen nach dem ersten Gespräch — bei dringendem Bedarf,
                etwa nach einem Klinikaufenthalt, oft auch schneller.
              </p>
            </div>
          </div>

          <NearbyCities current="rheinisch-bergischer-kreis" />

          <ArticleCTA
            headline="Ist 24h-Pflege im Rheinisch-Bergischen Kreis die richtige Lösung?"
            subline="Sprechen Sie jetzt mit uns — kostenlos und unverbindlich."
          />
        </div>
      </div>
    </>
  )
}
