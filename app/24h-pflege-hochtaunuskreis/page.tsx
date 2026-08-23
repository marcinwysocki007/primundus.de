import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { NearbyCities } from '@/components/NearbyCities'

// Quick-Win-Seite (GSC 08/2026): "24 stunden pflege in hochtaunuskreis"
// rankte OHNE eigene Seite auf Pos. 11,2 (25 Impr.). Individuell getextet.
// Bad Homburg hat eine eigene Seite — wird hier verlinkt, kein Duplikat.

export const metadata: Metadata = {
  title: '24-Stunden-Pflege & Betreuung in Hochtaunuskreis | Primundus',
  description:
    '24h-Pflege im Hochtaunuskreis: Betreuungskraft zuhause in Oberursel, Königstein, Kronberg, Usingen & Umgebung. Täglich kündbar, Start in 4–7 Tagen.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-hochtaunuskreis' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege im Hochtaunuskreis — Betreuung zuhause | Primundus',
    description: 'Geprüfte 24h-Betreuungskraft im Hochtaunuskreis. Täglich kündbar, rechtssicher, startklar.',
    url: 'https://primundus.de/24h-pflege-hochtaunuskreis',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Primundus — 24h-Pflege Hochtaunuskreis',
    description: '24h-Betreuungskräfte im Hochtaunuskreis. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-hochtaunuskreis',
    telephone: '+4989200000830',
    email: 'info@primundus.de',
    areaServed: { '@type': 'AdministrativeArea', name: 'Hochtaunuskreis' },
    priceRange: '2.200–3.500 €/Monat',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24h-Pflege Hochtaunuskreis', item: 'https://primundus.de/24h-pflege-hochtaunuskreis' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was kostet eine 24h-Pflegekraft im Hochtaunuskreis?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Meist zwischen 2.200 und 3.500 Euro im Monat — und damit oft weniger als ein Heimplatz im Taunus, wo die Eigenanteile zu den höchsten in Hessen gehören. Mit den Zuschüssen der Pflegekasse bleiben bei Pflegegrad 3 häufig rund 1.500 bis 2.400 Euro selbst zu tragen.',
        },
      },
      {
        '@type': 'Question',
        name: 'Welche Orte im Hochtaunuskreis deckt Primundus ab?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Den ganzen Kreis: Bad Homburg, Oberursel, Königstein, Kronberg, Friedrichsdorf, Steinbach, Schmitten, Usingen, Neu-Anspach, Wehrheim und alle Gemeinden im Usinger Land.',
        },
      },
      {
        '@type': 'Question',
        name: 'Wie schnell kann eine Betreuungskraft im Taunus starten?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'In der Regel innerhalb von 4 bis 7 Tagen nach dem ersten Gespräch — bei dringendem Bedarf, etwa nach einem Sturz oder Klinikaufenthalt, oft auch schneller.',
        },
      },
    ],
  },
]

export default function HochtaunuskreisPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      <ArticleProgressBar />

      <div className="min-h-screen bg-pm-paper">
        <div className="max-w-article mx-auto px-5 py-10 md:py-16">

          <nav className="min-h-[24px] text-sm text-pm-mute mb-6 flex items-center gap-2 flex-wrap">
            <a href="/" className="hover:text-pm-taupe transition-colors">Startseite</a>
            <span>›</span>
            <span className="text-pm-ink">24h-Pflege Hochtaunuskreis</span>
          </nav>

          <p className="text-meta font-bold uppercase tracking-[0.1em] text-pm-taupe-light mb-4">
            24h-Pflege im Hochtaunuskreis · Aktualisiert August 2026
          </p>
          <h1 className="text-h1 md:text-h1-lg font-bold text-pm-ink mb-6">
            24h-Pflege im Hochtaunuskreis — Betreuung im eigenen Zuhause
          </h1>
          <p className="text-[17px] md:text-[19px] leading-relaxed text-pm-body mb-10 font-medium">
            Viele, die im Taunus alt geworden sind, haben ihr Haus über Jahrzehnte aufgebaut — in Oberursel,
            Königstein oder einem der Dörfer im Usinger Land. Wenn plötzlich Pflege nötig wird, stellt sich
            nicht die Frage nach dem „ob", sondern nach dem „wie": Heim — oder zuhause bleiben? Eine
            Betreuungskraft von Primundus zieht mit ein und macht das Zuhausebleiben möglich. Täglich
            kündbar, rechtssicher, meist startklar in 4–7 Tagen.
          </p>

          {/* ① SITUATION VOR ORT */}
          <h2 className="text-h2 md:text-h2-lg font-bold text-pm-ink mb-4">
            Pflege im Taunus: Gute Heime, lange Wartelisten, hohe Preise
          </h2>
          <div className="bg-white border border-pm-line rounded-2xl p-6 mb-8">
            <p className="text-[15px] leading-relaxed text-pm-body mb-4">
              Der Hochtaunuskreis gehört zu den Regionen mit den höchsten Heimkosten in Hessen — und trotzdem
              sind die Wartelisten lang. Viele Familien pendeln zwischen Frankfurt und dem Elternhaus im
              Taunus und merken: So geht es auf Dauer nicht. Die 24h-Betreuung ist der dritte Weg — persönlicher
              als jedes Heim, planbarer als jeder ambulante Dienst, und ohne Warteliste.
            </p>
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: '🏡', title: 'Zuhause bleiben', desc: 'Haus, Garten und Nachbarschaft bleiben erhalten' },
                { icon: '⏱️', title: 'Keine Warteliste', desc: 'Start meist in 4–7 Tagen statt Monaten' },
                { icon: '💶', title: 'Oft günstiger als das Heim', desc: 'Gerade im Taunus mit seinen hohen Heimkosten' },
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
            Unser Einsatzgebiet im Hochtaunuskreis
          </h2>
          <div className="bg-white border border-pm-line rounded-2xl p-6 mb-8">
            <p className="text-[15px] leading-relaxed text-pm-body">
              Wir sind im ganzen Kreis im Einsatz: <a href="/24h-pflege-bad-homburg" className="text-pm-taupe underline underline-offset-2">Bad Homburg</a>,{' '}
              <strong>Oberursel</strong>, <strong>Königstein</strong>, <strong>Kronberg</strong>,{' '}
              <strong>Friedrichsdorf</strong>, <strong>Steinbach</strong> — und genauso im Usinger Land:{' '}
              <strong>Usingen</strong>, <strong>Neu-Anspach</strong>, <strong>Wehrheim</strong>,{' '}
              <strong>Schmitten</strong>, <strong>Grävenwiesbach</strong>. Auch{' '}
              <a href="/24h-pflege-eschborn" className="text-pm-taupe underline underline-offset-2">Eschborn</a> und{' '}
              <a href="/24h-pflege-frankfurt" className="text-pm-taupe underline underline-offset-2">Frankfurt</a>{' '}
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
              abhängig davon, ob eine oder zwei Personen betreut werden, wie mobil Ihre Angehörigen sind und
              ob nachts Hilfe nötig ist. Mit Pflegegeld, Entlastungsbetrag und Verhinderungspflege bleiben
              bei Pflegegrad 3 oft <strong>rund 1.500 bis 2.400 Euro</strong> selbst zu tragen. Gerade im
              Hochtaunuskreis, wo Heimplätze besonders teuer sind, rechnet sich das Zuhausebleiben doppelt.
            </p>
            <a
              href="https://kostenrechner.primundus.de/"
              className="inline-flex items-center gap-2 bg-pm-coral hover:bg-pm-coral-deep text-white font-bold text-[14px] py-3 px-6 rounded-full transition-colors"
            >
              Ihren Preis in 2 Minuten berechnen
            </a>
          </div>

          {/* ④ FAQ — Texte identisch zum FAQPage-Schema */}
          <h2 className="text-h2 md:text-h2-lg font-bold text-pm-ink mb-4">
            Häufige Fragen aus der Region
          </h2>
          <div className="space-y-4 mb-8">
            <div className="bg-white border border-pm-line rounded-2xl p-6">
              <p className="text-[16px] font-bold text-pm-ink mb-2">Was kostet eine 24h-Pflegekraft im Hochtaunuskreis?</p>
              <p className="text-[15px] leading-relaxed text-pm-body">
                Meist zwischen 2.200 und 3.500 Euro im Monat — und damit oft weniger als ein Heimplatz im
                Taunus, wo die Eigenanteile zu den höchsten in Hessen gehören. Mit den Zuschüssen der
                Pflegekasse bleiben bei Pflegegrad 3 häufig rund 1.500 bis 2.400 Euro selbst zu tragen.
              </p>
            </div>
            <div className="bg-white border border-pm-line rounded-2xl p-6">
              <p className="text-[16px] font-bold text-pm-ink mb-2">Welche Orte im Hochtaunuskreis deckt Primundus ab?</p>
              <p className="text-[15px] leading-relaxed text-pm-body">
                Den ganzen Kreis: Bad Homburg, Oberursel, Königstein, Kronberg, Friedrichsdorf, Steinbach,
                Schmitten, Usingen, Neu-Anspach, Wehrheim und alle Gemeinden im Usinger Land.
              </p>
            </div>
            <div className="bg-white border border-pm-line rounded-2xl p-6">
              <p className="text-[16px] font-bold text-pm-ink mb-2">Wie schnell kann eine Betreuungskraft im Taunus starten?</p>
              <p className="text-[15px] leading-relaxed text-pm-body">
                In der Regel innerhalb von 4 bis 7 Tagen nach dem ersten Gespräch — bei dringendem Bedarf,
                etwa nach einem Sturz oder Klinikaufenthalt, oft auch schneller.
              </p>
            </div>
          </div>

          <NearbyCities current="hochtaunuskreis" />

          <ArticleCTA
            headline="Ist 24h-Pflege im Hochtaunuskreis die richtige Lösung?"
            subline="Sprechen Sie jetzt mit uns — kostenlos und unverbindlich."
          />
        </div>
      </div>
    </>
  )
}
