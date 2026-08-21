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

      <div className="min-h-screen bg-[#F8F7F5]">
        <div className="max-w-[860px] mx-auto px-5 py-10 md:py-16">

          <nav className="h-[24px] text-sm text-[#8B8B8B] mb-6 flex items-center gap-2">
            <a href="/" className="hover:text-[#8B7355] transition-colors">Startseite</a>
            <span>›</span>
            <span className="text-[#1C1C1C]">24h-Pflege Rhein-Pfalz-Kreis</span>
          </nav>

          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A89279] mb-4">
            24h-Pflege im Rhein-Pfalz-Kreis · Aktualisiert August 2026
          </p>
          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            24h-Pflege im Rhein-Pfalz-Kreis — Betreuung im eigenen Zuhause
          </h1>
          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-10 font-medium">
            Im Gemüsegarten Deutschlands wohnt man bodenständig: das Haus in Schifferstadt oder Mutterstadt,
            der Garten in Limburgerhof, die Felder vor der Tür. Viele haben ein Leben lang bei der BASF
            gearbeitet und möchten ihren Ruhestand genau hier verbringen — nicht im Heim. Eine
            Betreuungskraft von Primundus zieht mit ein und ist rund um die Uhr da. Täglich kündbar,
            rechtssicher, meist startklar in 4–7 Tagen.
          </p>

          {/* ① SITUATION VOR ORT */}
          <h2 className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mb-4 leading-snug">
            Pflege in der Vorderpfalz: Nah an allem — und trotzdem zuhause
          </h2>
          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 mb-8">
            <p className="text-[15px] leading-relaxed text-[#2E2E2E] mb-4">
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
            Unser Einsatzgebiet im Rhein-Pfalz-Kreis
          </h2>
          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 mb-8">
            <p className="text-[15px] leading-relaxed text-[#2E2E2E]">
              Wir sind im gesamten Kreis im Einsatz: <strong>Schifferstadt</strong>, <strong>Limburgerhof</strong>,{' '}
              <strong>Mutterstadt</strong>, <strong>Maxdorf</strong>, <strong>Böhl-Iggelheim</strong>,{' '}
              <strong>Dudenhofen</strong>, <strong>Römerberg</strong>, <strong>Altrip</strong> und allen
              weiteren Gemeinden. Für die Nachbarstädte gibt es eigene Seiten:{' '}
              <a href="/24h-pflege-ludwigshafen" className="text-[#8B7355] underline underline-offset-2">Ludwigshafen</a>,{' '}
              <a href="/24h-pflege-speyer" className="text-[#8B7355] underline underline-offset-2">Speyer</a> und{' '}
              <a href="/24h-pflege-mannheim" className="text-[#8B7355] underline underline-offset-2">Mannheim</a>.
            </p>
          </div>

          {/* ③ KOSTEN */}
          <h2 className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mb-4 leading-snug">
            Was kostet das — und was zahlt die Pflegekasse dazu?
          </h2>
          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 mb-8">
            <p className="text-[15px] leading-relaxed text-[#2E2E2E] mb-4">
              Eine 24h-Betreuung kostet über Primundus meist <strong>2.200 bis 3.500 Euro im Monat</strong>.
              Die Pflegekasse zahlt kräftig mit: Mit Pflegegeld, Entlastungsbetrag und Verhinderungspflege
              bleiben bei Pflegegrad 3 oft <strong>rund 1.500 bis 2.400 Euro</strong> im Monat selbst zu
              tragen. Ihren genauen Preis für Ihre Situation zeigt der Kostenrechner in 2 Minuten.
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
            Häufige Fragen aus der Region
          </h2>
          <div className="space-y-4 mb-8">
            <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6">
              <p className="text-[16px] font-bold text-[#1C1C1C] mb-2">Was kostet eine 24h-Pflegekraft im Rhein-Pfalz-Kreis?</p>
              <p className="text-[15px] leading-relaxed text-[#2E2E2E]">
                Meist zwischen 2.200 und 3.500 Euro im Monat, je nach Pflegesituation. Mit den Zuschüssen
                der Pflegekasse bleiben bei Pflegegrad 3 oft rund 1.500 bis 2.400 Euro selbst zu tragen.
              </p>
            </div>
            <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6">
              <p className="text-[16px] font-bold text-[#1C1C1C] mb-2">Welche Orte im Rhein-Pfalz-Kreis deckt Primundus ab?</p>
              <p className="text-[15px] leading-relaxed text-[#2E2E2E]">
                Den ganzen Kreis rund um Ludwigshafen: Schifferstadt, Limburgerhof, Mutterstadt, Maxdorf,
                Böhl-Iggelheim, Dudenhofen, Römerberg, Altrip und alle weiteren Gemeinden der Vorderpfalz.
              </p>
            </div>
            <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6">
              <p className="text-[16px] font-bold text-[#1C1C1C] mb-2">Wie schnell kann die Betreuung in der Vorderpfalz starten?</p>
              <p className="text-[15px] leading-relaxed text-[#2E2E2E]">
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
