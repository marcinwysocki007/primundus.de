import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { AuthorByline } from '@/components/AuthorByline'

// Aus der Wettbewerbsanalyse 14.08.: Kein Anbieter zeigt eine ehrliche
// Gesamtrechnung — stattdessen Tagespreis-Anker, "ab"-Lockpreise und
// unbezifferte Nebenkosten. Dieser Artikel erklärt die Mechanismen OHNE
// Firmennamen (rechtlich sauber) und stellt unsere transparente Rechnung
// dagegen. Transparenz ist Primundus' stärkste Positionierung.

export const metadata: Metadata = {
  title: 'Was kostet 24-Stunden-Pflege wirklich? Die ehrliche Gesamtrechnung | Primundus',
  description:
    'Tagespreise, „ab"-Angebote, versteckte Nebenkosten: Woran Sie Lockangebote in der 24-Stunden-Pflege erkennen — und die ehrliche Gesamtrechnung mit allen Posten.',
  alternates: { canonical: 'https://primundus.de/24-stunden-pflege-wirkliche-kosten' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Was kostet 24-Stunden-Pflege wirklich? | Primundus',
    description: 'Die ehrliche Gesamtrechnung — und die 7 Fragen, die Sie jedem Anbieter stellen sollten.',
    url: 'https://primundus.de/24-stunden-pflege-wirkliche-kosten',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Was kostet 24-Stunden-Pflege wirklich? Die ehrliche Gesamtrechnung',
    author: { '@type': 'Person', name: 'Marta Kapcio', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-08-14',
    dateModified: '2026-08-14',
    mainEntityOfPage: 'https://primundus.de/24-stunden-pflege-wirkliche-kosten',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Warum wirken manche 24h-Pflege-Angebote so günstig?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Drei verbreitete Mechanismen: Tagespreise statt Monatssummen (105 Euro am Tag klingt klein, sind aber über 3.100 Euro im Monat), „ab"-Preise, die nur für die einfachste Konstellation gelten, und unbezifferte Nebenkosten wie Kost und Logis, Fahrtkosten oder Feiertagszuschläge, die erst im Vertrag auftauchen.',
        },
      },
      {
        '@type': 'Question',
        name: 'Welche Nebenkosten kommen bei der 24-Stunden-Pflege üblicherweise dazu?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Typisch sind: Kost und Logis für die Betreuungskraft (bei Primundus mit 200 bis 300 Euro monatlich beziffert), An- und Abreisekosten bei Kraftwechseln sowie Zuschläge an Feiertagen. Seriöse Anbieter nennen diese Posten mit konkreten Zahlen, bevor Sie unterschreiben.',
        },
      },
      {
        '@type': 'Question',
        name: 'Was kostet 24-Stunden-Pflege bei Pflegegrad 3 effektiv im Monat?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Beispielrechnung: 2.800 Euro Betreuungskosten minus 599 Euro Pflegegeld, 131 Euro Entlastungsbetrag, rund 295 Euro anteilige Verhinderungspflege und etwa 333 Euro monatliche Steuerersparnis — es bleiben rund 1.450 Euro effektiv selbst zu tragen (Stand August 2026).',
        },
      },
    ],
  },
]

const FRAGEN = [
  'Wie hoch ist der Gesamtpreis pro Monat — nicht pro Tag, nicht „ab"?',
  'Was kommt für Kost und Logis der Betreuungskraft dazu — in Euro?',
  'Was kosten An- und Abreise, auch bei jedem Kraftwechsel?',
  'Wie hoch sind Feiertags- und Weihnachtszuschläge — konkret in Euro?',
  'Wie schnell kann ich kündigen, und kostet ein Wechsel der Kraft etwas?',
  'Was zahle ich, wenn meine Mutter ins Krankenhaus muss?',
  'Ist Ihre Auszeichnung oder Bewertung belegt — mit Link oder Dokument?',
]

export default function WirklicheKostenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      <ArticleProgressBar />

      <div className="min-h-screen bg-pm-paper">
        <div className="max-w-article mx-auto px-5 py-10 md:py-16">

          <nav className="min-h-[24px] text-sm text-pm-mute mb-6 flex items-center gap-2 flex-wrap">
            <a href="/" className="hover:text-pm-taupe transition-colors">Startseite</a>
            <span>›</span>
            <a href="/kosten" className="hover:text-pm-taupe transition-colors">Kosten</a>
            <span>›</span>
            <span className="text-pm-ink">Die ehrliche Gesamtrechnung</span>
          </nav>

          <p className="text-meta font-bold uppercase tracking-[0.1em] text-pm-taupe-light mb-4">
            Kosten &amp; Finanzierung · Aktualisiert August 2026
          </p>
          <h1 className="text-h1 md:text-h1-lg font-bold text-pm-ink mb-6">
            Was kostet 24-Stunden-Pflege wirklich? Die ehrliche Gesamtrechnung
          </h1>

          <AuthorByline updated="14. August 2026" />

          <p className="text-[17px] md:text-[19px] leading-relaxed text-pm-body mb-10 font-medium">
            Wer Angebote für 24-Stunden-Pflege vergleicht, stößt auf erstaunlich unterschiedliche Zahlen:
            mal „105 Euro am Tag", mal „ab 945 Euro Eigenanteil", mal „ab 2.850 Euro". Alle drei Angaben
            können sich am Ende auf denselben Monatsbetrag summieren — sie sind nur unterschiedlich
            verpackt. Hier lesen Sie, wie Sie Preisangaben richtig deuten, welche Nebenkosten oft fehlen
            und wie eine vollständige Rechnung aussieht.
          </p>

          {/* ① DIE DREI VERPACKUNGEN */}
          <h2 className="text-h2 md:text-h2-lg font-bold text-pm-ink mb-4">
            Drei Preis-Verpackungen, die Sie kennen sollten
          </h2>
          <div className="bg-white border border-pm-line rounded-2xl p-6 mb-8">
            <div className="space-y-5">
              <div>
                <p className="text-[15px] font-bold text-pm-ink mb-1">1. Der Tagespreis-Anker</p>
                <p className="text-[15px] leading-relaxed text-pm-body">
                  „105 Euro am Tag" klingt überschaubar — ein Restaurantbesuch für zwei. Gerechnet auf den
                  Monat sind es aber über <strong>3.100 Euro</strong>. Rechnen Sie Tagespreise immer mal 30,
                  bevor Sie vergleichen.
                </p>
              </div>
              <div>
                <p className="text-[15px] font-bold text-pm-ink mb-1">2. Der „ab"-Preis</p>
                <p className="text-[15px] leading-relaxed text-pm-body">
                  „Ab"-Preise gelten für die einfachste denkbare Situation: eine mobile Person, keine
                  Nachteinsätze, einfache Sprachkenntnisse der Kraft. Realistische Situationen liegen fast
                  immer darüber — fragen Sie deshalb nach der <strong>Spanne mit Obergrenze</strong>, nicht
                  nach dem Einstiegspreis. Und Vorsicht bei „ab"-Angaben, die bereits alle Zuschüsse
                  abgezogen haben: Das ist kein Preis, sondern ein Rechenergebnis für den günstigsten Fall.
                </p>
              </div>
              <div>
                <p className="text-[15px] font-bold text-pm-ink mb-1">3. Die unbezifferten Nebenkosten</p>
                <p className="text-[15px] leading-relaxed text-pm-body">
                  Kost und Logis, An- und Abreise der Betreuungskraft, Feiertagszuschläge, Kosten bei einem
                  Kraftwechsel: Diese Posten gehören zu jeder 24h-Betreuung — aber nicht jeder Anbieter
                  beziffert sie vor Vertragsschluss. Was vorher nicht in Euro dasteht, steht später auf der
                  Rechnung.
                </p>
              </div>
            </div>
          </div>

          {/* ② DIE EHRLICHE RECHNUNG */}
          <h2 className="text-h2 md:text-h2-lg font-bold text-pm-ink mb-4">
            So sieht die vollständige Rechnung aus (Beispiel Pflegegrad 3)
          </h2>
          <div className="bg-white border border-pm-line rounded-2xl p-6 mb-8 overflow-x-auto">
            <table className="w-full text-[14px] text-pm-body">
              <tbody>
                <tr className="border-b border-pm-line-soft">
                  <td className="py-2.5 pr-4">Betreuung (mittlere Anforderungen, gute Deutschkenntnisse)</td>
                  <td className="py-2.5 text-right font-semibold whitespace-nowrap">2.800 €</td>
                </tr>
                <tr className="border-b border-pm-line-soft">
                  <td className="py-2.5 pr-4">Kost &amp; Logis für die Betreuungskraft (bei Primundus beziffert)</td>
                  <td className="py-2.5 text-right font-semibold whitespace-nowrap">+ 200–300 €</td>
                </tr>
                <tr className="border-b-2 border-pm-line">
                  <td className="py-2.5 pr-4 font-bold text-pm-ink">Ehrliche Gesamtkosten</td>
                  <td className="py-2.5 text-right font-bold text-pm-ink whitespace-nowrap">≈ 3.050 €</td>
                </tr>
                <tr className="border-b border-pm-line-soft">
                  <td className="py-2.5 pr-4">Pflegegeld (Pflegegrad 3)</td>
                  <td className="py-2.5 text-right font-semibold text-[#5C9F6E] whitespace-nowrap">− 599 €</td>
                </tr>
                <tr className="border-b border-pm-line-soft">
                  <td className="py-2.5 pr-4">Entlastungsbetrag</td>
                  <td className="py-2.5 text-right font-semibold text-[#5C9F6E] whitespace-nowrap">− 131 €</td>
                </tr>
                <tr className="border-b border-pm-line-soft">
                  <td className="py-2.5 pr-4">Verhinderungspflege (3.539 €/Jahr, monatlich verteilt)</td>
                  <td className="py-2.5 text-right font-semibold text-[#5C9F6E] whitespace-nowrap">− 295 €</td>
                </tr>
                <tr className="border-b-2 border-pm-line">
                  <td className="py-2.5 pr-4">Steuerermäßigung § 35a EStG (bis 4.000 €/Jahr)</td>
                  <td className="py-2.5 text-right font-semibold text-[#5C9F6E] whitespace-nowrap">− 333 €</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-bold text-[16px] text-pm-ink">Effektiv selbst zu tragen</td>
                  <td className="py-3 text-right font-bold text-[16px] text-pm-ink whitespace-nowrap">≈ 1.450–1.700 €</td>
                </tr>
              </tbody>
            </table>
            <p className="text-[13px] text-pm-mute mt-4">
              Stand August 2026, Beispielwerte. Der Unterschied zu „ab 945 €"-Werbung: Wir zeigen den
              Rechenweg — jede Zeile können Sie bei Ihrer Pflegekasse und Ihrem Steuerberater nachprüfen.
              Ihre persönliche Rechnung erstellt der{' '}
              <a href="https://kostenrechner.primundus.de/" className="text-pm-taupe underline underline-offset-2">Kostenrechner in 2 Minuten</a>.
            </p>
          </div>

          {/* ③ CHECKLISTE */}
          <h2 className="text-h2 md:text-h2-lg font-bold text-pm-ink mb-4">
            Diese 7 Fragen stellen Sie jedem Anbieter
          </h2>
          <div className="bg-white border border-pm-line rounded-2xl p-6 mb-8">
            <p className="text-[15px] leading-relaxed text-pm-body mb-4">
              Egal, bei wem Sie anfragen — auch bei uns: Ein seriöser Anbieter beantwortet alle sieben
              Fragen sofort und in Euro. Ausweichende Antworten sind ein Warnsignal.
            </p>
            <ol className="space-y-3">
              {FRAGEN.map((f, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="w-7 h-7 rounded-full bg-pm-taupe text-white text-[13px] font-bold flex items-center justify-center flex-shrink-0">{i + 1}</span>
                  <span className="text-[15px] leading-relaxed text-pm-body pt-0.5">{f}</span>
                </li>
              ))}
            </ol>
            <div className="bg-pm-shell rounded-xl p-5 mt-5">
              <p className="text-[13px] text-pm-taupe-ink leading-relaxed">
                <strong>Unsere Antworten:</strong> Gesamtpreis 2.200–3.500 € je nach Situation, Kost &amp;
                Logis 200–300 €, täglich kündbar ohne Mindestlaufzeit, Start meist in 4–7 Tagen — und die
                Auszeichnung als Nr. 1 der Pflegekräfte-Vermittler ist{' '}
                <a href="/testsieger-24-stunden-pflege" className="underline underline-offset-2 font-semibold text-pm-taupe">mit dem Original-Dokument belegt</a>.
              </p>
            </div>
          </div>

          {/* ④ FAQ — identisch zum Schema */}
          <h2 className="text-h2 md:text-h2-lg font-bold text-pm-ink mb-4">
            Häufige Fragen
          </h2>
          <div className="space-y-4 mb-8">
            <div className="bg-white border border-pm-line rounded-2xl p-6">
              <p className="text-[16px] font-bold text-pm-ink mb-2">Warum wirken manche 24h-Pflege-Angebote so günstig?</p>
              <p className="text-[15px] leading-relaxed text-pm-body">
                Drei verbreitete Mechanismen: Tagespreise statt Monatssummen (105 Euro am Tag klingt klein,
                sind aber über 3.100 Euro im Monat), „ab"-Preise, die nur für die einfachste Konstellation
                gelten, und unbezifferte Nebenkosten wie Kost und Logis, Fahrtkosten oder
                Feiertagszuschläge, die erst im Vertrag auftauchen.
              </p>
            </div>
            <div className="bg-white border border-pm-line rounded-2xl p-6">
              <p className="text-[16px] font-bold text-pm-ink mb-2">Welche Nebenkosten kommen üblicherweise dazu?</p>
              <p className="text-[15px] leading-relaxed text-pm-body">
                Typisch sind: Kost und Logis für die Betreuungskraft (bei Primundus mit 200 bis 300 Euro
                monatlich beziffert), An- und Abreisekosten bei Kraftwechseln sowie Zuschläge an
                Feiertagen. Seriöse Anbieter nennen diese Posten mit konkreten Zahlen, bevor Sie
                unterschreiben.
              </p>
            </div>
            <div className="bg-white border border-pm-line rounded-2xl p-6">
              <p className="text-[16px] font-bold text-pm-ink mb-2">Was kostet 24-Stunden-Pflege bei Pflegegrad 3 effektiv?</p>
              <p className="text-[15px] leading-relaxed text-pm-body">
                Beispielrechnung: 2.800 Euro Betreuungskosten minus 599 Euro Pflegegeld, 131 Euro
                Entlastungsbetrag, rund 295 Euro anteilige Verhinderungspflege und etwa 333 Euro monatliche
                Steuerersparnis — es bleiben rund 1.450 Euro effektiv selbst zu tragen. Alle Details:{' '}
                <a href="/24-stunden-pflege-kostenuebernahme" className="text-pm-taupe underline underline-offset-2">Wer übernimmt die Kosten?</a>
              </p>
            </div>
          </div>

          {/* WEITERLESEN */}
          <div className="bg-white border border-pm-line rounded-2xl p-6 mb-8">
            <p className="text-[12px] font-bold uppercase tracking-[0.07em] text-pm-taupe mb-3">Weiterlesen</p>
            <div className="flex flex-wrap gap-2">
              <a href="/kosten" className="text-[13px] font-semibold text-pm-taupe bg-pm-paper hover:bg-pm-shell rounded-full px-4 py-2 transition-colors">Kosten &amp; Finanzierung</a>
              <a href="/24-stunden-pflege-kostenuebernahme" className="text-[13px] font-semibold text-pm-taupe bg-pm-paper hover:bg-pm-shell rounded-full px-4 py-2 transition-colors">Wer übernimmt die Kosten?</a>
              <a href="/eigenanteil-24h-pflege-senken" className="text-[13px] font-semibold text-pm-taupe bg-pm-paper hover:bg-pm-shell rounded-full px-4 py-2 transition-colors">Eigenanteil senken</a>
              <a href="/testsieger-24-stunden-pflege" className="text-[13px] font-semibold text-pm-taupe bg-pm-paper hover:bg-pm-shell rounded-full px-4 py-2 transition-colors">Unsere Auszeichnung mit Beleg</a>
            </div>
          </div>

          <ArticleCTA
            headline="Ihre ehrliche Gesamtrechnung — in 2 Minuten"
            subline="Alle Posten, alle Zuschüsse, Ihr effektiver Eigenanteil. Kostenlos und unverbindlich."
          />
        </div>
      </div>
    </>
  )
}
