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
              href="https://kostenrechner.primundus.de/?start=1&amp;src=ort-hochtaunuskreis"
              className="inline-flex items-center gap-2 bg-pm-coral hover:bg-pm-coral-deep text-white font-bold text-[14px] py-3 px-6 rounded-full transition-colors"
            >
              Ihren Preis in 2 Minuten berechnen
            </a>
            <a href="/pflegegrad-rechner" className="block mt-4 text-[15px] text-pm-taupe font-semibold hover:underline">
              → Unsicher beim Pflegegrad? Hier mit denselben sechs Modulen rechnen wie bei der Begutachtung
            </a>
          </div>

          {/* ③b POLEN */}
          <h2 className="text-h2 md:text-h2-lg font-bold text-pm-ink mb-4">Polnische Betreuungskräfte im Hochtaunuskreis</h2>
          <p className="text-[15px] leading-relaxed text-pm-body mb-4">
            Wer im Hochtaunuskreis nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe:
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
            Der Kostenvergleich fällt im Hochtaunuskreis deutlich aus: Bei Pflegegrad 3 bleiben nach Pflegegeld,
            Entlastungsbetrag und Entlastungsbudget meist rund 1.500 bis 2.400 Euro Eigenanteil.
            Ein Heimplatz kostet in Hessen im ersten Jahr im Schnitt rund 3.230 Euro
            im Monat — und die vertraute Wohnung bleibt dabei auf der Strecke.
          </p>
          <p className="text-[15px] leading-relaxed text-pm-body mb-8">
            Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie
            schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Pflegekraft aus Polen — Kosten, Recht und Ablauf</a>.
          </p>

          {/* ⑤c VOR ORT — aus Zensus-2022-Daten, je Ort verschieden */}
          <h2 className="text-h2 md:text-h2-lg font-bold text-pm-ink mb-4">Was die Pflege zu Hause in Hochtaunuskreis ausmacht</h2>
          <p className="text-[15px] leading-relaxed text-pm-body mb-4">
            Der Wohnungsbestand von Hochtaunuskreis erzählt etwas über den Pflegealltag. 34,0 Prozent der Wohnungen wurden zwischen 1970 und 1989 gebaut, in Hessen 25,5 Prozent. In 26,6 Prozent der Haushalte leben ausschließlich Menschen ab 65 — in Hessen sind es 23,1 Prozent. Dort ist niemand im Haus, der nachts einspringen könnte.
          </p>
          <p className="text-[15px] leading-relaxed text-pm-body mb-4">
            Hochtaunuskreis ist älter als das Land: 12,6 Prozent der Einwohner sind 75 Jahre oder älter — das sind 30.010 Menschen, in Hessen sind es 10,5 Prozent. Die durchschnittliche Wohnung misst 106,2 Quadratmeter und damit rund 8 Quadratmeter mehr als im Schnitt von Hessen (98,3).
          </p>
          <p className="text-[15px] leading-relaxed text-pm-body mb-4">
            Altbau vor 1950 macht in Hochtaunuskreis 13,9 Prozent des Bestands aus, in Hessen 20,4 Prozent. Mit 9,23 Euro Nettokaltmiete je Quadratmeter wohnt es sich in Hochtaunuskreis teurer als im Schnitt von Hessen (8,21 Euro) — ein Umzug in eine größere Wohnung ist für die meisten keine Option.
          </p>
          <p className="text-[15px] leading-relaxed text-pm-body mb-4">
            In Zahlen: 30.010 Menschen in Hochtaunuskreis sind 75 Jahre oder älter, und es gibt 116.461 Wohnungen in 55.882 Gebäuden. Ob darunter eine ist, in der eine Betreuungskraft ein eigenes Zimmer bekommt, entscheidet sich nicht an der Statistik, sondern an Ihrem Grundriss — und das klären wir vorab.
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
