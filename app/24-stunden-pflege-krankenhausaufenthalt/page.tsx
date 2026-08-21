import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { AuthorByline } from '@/components/AuthorByline'

// Wettbewerbs-Lücke (Analyse 14.08.): KEIN Anbieter beantwortet öffentlich,
// was bei Krankenhausaufenthalt, Ausfall der Kraft oder Wechsel gilt.
// Fakten von Martin bestätigt (14.08., Memory primundus-vertragsfakten):
// Krankenhaus = weiter zahlen wenn Kraft bleibt, sonst bis Abreise (2-3 Tage);
// Ersatz/Wechsel ohne Zusatzkosten (nur An-/Abreise); Feiertag = doppelter
// Tagessatz (Tagessatz = Monatspreis/30).

export const metadata: Metadata = {
  title: 'Krankenhaus, Ausfall, Wechsel: Was gilt bei der 24h-Pflege?',
  description:
    'Mutter im Krankenhaus — zahle ich die 24h-Pflege weiter? Was gilt, wenn die Betreuungskraft krank wird? Die klaren Antworten, die sonst keiner gibt.',
  alternates: { canonical: 'https://primundus.de/24-stunden-pflege-krankenhausaufenthalt' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Krankenhaus, Ausfall, Wechsel: Was gilt bei der 24h-Pflege? | Primundus',
    description: 'Die klaren Antworten auf die Fragen, die sonst kein Anbieter öffentlich beantwortet.',
    url: 'https://primundus.de/24-stunden-pflege-krankenhausaufenthalt',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Krankenhaus, Ausfall, Wechsel: Was gilt bei der 24-Stunden-Pflege?',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-08-14',
    dateModified: '2026-08-14',
    mainEntityOfPage: 'https://primundus.de/24-stunden-pflege-krankenhausaufenthalt',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Muss ich die 24-Stunden-Pflege weiterzahlen, wenn meine Mutter ins Krankenhaus kommt?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Bei Primundus entscheiden Sie: Bleibt die Betreuungskraft im Haus (führt den Haushalt weiter und ist bei der Rückkehr sofort da), läuft die Zahlung weiter. Soll sie abreisen, zahlen Sie nur noch bis zur Abreise — in der Regel 2 bis 3 Tage. Zusätzlich zahlt die Pflegekasse das Pflegegeld bei Krankenhausaufenthalten bis zu vier Wochen weiter.',
        },
      },
      {
        '@type': 'Question',
        name: 'Was passiert, wenn die Betreuungskraft krank wird oder ausfällt?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Primundus stellt eine Ersatzkraft — ohne Zusatzkosten für die Vermittlung. Es fallen wie bei jedem Kraftwechsel nur die An- und Abreisekosten an. Durch das große Netzwerk ist Ersatz in der Regel innerhalb weniger Tage vor Ort.',
        },
      },
      {
        '@type': 'Question',
        name: 'Kostet ein Wechsel der Betreuungskraft etwas?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nein — der Wechsel selbst kostet bei Primundus nichts, egal ob turnusmäßig oder weil die Chemie nicht stimmt. Berechnet werden ausschließlich die An- und Abreisekosten der Kräfte.',
        },
      },
      {
        '@type': 'Question',
        name: 'Wie hoch sind die Feiertagszuschläge bei der 24-Stunden-Pflege?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Bei Primundus gilt an gesetzlichen Feiertagen der doppelte Tagessatz. Beispiel: Bei 2.800 Euro Monatspreis beträgt der Tagessatz rund 93 Euro — ein Feiertag kostet also etwa 93 Euro Aufschlag. Je nach Bundesland sind das 9 bis 13 Feiertage im Jahr.',
        },
      },
    ],
  },
]

export default function KrankenhausPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      <ArticleProgressBar />

      <div className="min-h-screen bg-[#F8F7F5]">
        <div className="max-w-[860px] mx-auto px-5 py-10 md:py-16">

          <nav className="h-[24px] text-sm text-[#8B8B8B] mb-6 flex items-center gap-2">
            <a href="/" className="hover:text-[#8B7355] transition-colors">Startseite</a>
            <span>›</span>
            <a href="/ratgeber" className="hover:text-[#8B7355] transition-colors">Ratgeber</a>
            <span>›</span>
            <span className="text-[#1C1C1C]">Krankenhaus, Ausfall &amp; Wechsel</span>
          </nav>

          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A89279] mb-4">
            Organisation · Aktualisiert August 2026
          </p>
          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            Krankenhaus, Ausfall, Wechsel: Was gilt bei der 24-Stunden-Pflege wirklich?
          </h1>

          <AuthorByline updated="14. August 2026" />

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            Es sind die Fragen, die Familien nachts wachhalten — und auf die man bei den meisten
            Anbietern keine öffentliche Antwort findet: Was passiert, wenn Mutter plötzlich ins
            Krankenhaus muss? Was, wenn die Betreuungskraft selbst krank wird? Und was kostet es,
            wenn die Chemie einfach nicht stimmt? Hier sind unsere Antworten — schriftlich, konkret
            und mit Zahlen. Genau so, wie Sie es von jedem Anbieter verlangen sollten.
          </p>

          {/* ① KRANKENHAUS */}
          <h2 className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mb-4 leading-snug">
            Fall 1: Ihre Mutter muss ins Krankenhaus — zahlen Sie weiter?
          </h2>
          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 mb-8">
            <p className="text-[15px] leading-relaxed text-[#2E2E2E] mb-5">
              Bei Primundus entscheiden Sie selbst — es gibt zwei ehrliche Wege, beide mit klaren Kosten:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-5">
              <div className="bg-[#F8F7F5] rounded-xl p-5">
                <p className="text-[14px] font-bold text-[#1C1C1C] mb-2">Die Betreuungskraft bleibt im Haus</p>
                <p className="text-[13px] text-[#5A5A5A] leading-relaxed">
                  Die Zahlung läuft weiter — dafür bleibt das Zuhause versorgt: Wäsche, Post, Blumen,
                  Haustier. Ihre Mutter kommt in ein geführtes Zuhause zurück, nicht in eine verwaiste
                  Wohnung, und die vertraute Kraft ist vom ersten Tag an wieder da. Bei kurzen
                  Aufenthalten meist die bessere Wahl.
                </p>
              </div>
              <div className="bg-[#F8F7F5] rounded-xl p-5">
                <p className="text-[14px] font-bold text-[#1C1C1C] mb-2">Die Betreuungskraft reist ab</p>
                <p className="text-[13px] text-[#5A5A5A] leading-relaxed">
                  Sie zahlen nur noch bis zur Abreise — in der Regel 2 bis 3 Tage. Bei längeren
                  Klinik- oder Reha-Aufenthalten die wirtschaftliche Wahl; zur Rückkehr organisieren
                  wir rechtzeitig eine neue Kraft (es fallen nur die üblichen Anreisekosten an).
                </p>
              </div>
            </div>
            <div className="bg-[#F2EDE6] rounded-xl p-5">
              <p className="text-[13px] text-[#6B5A44] leading-relaxed">
                <strong>Gut zu wissen:</strong> Das Pflegegeld der Pflegekasse wird bei einem
                Krankenhausaufenthalt bis zu vier Wochen weitergezahlt — die wichtigste Förderung
                läuft also zunächst ungekürzt weiter.
              </p>
            </div>
          </div>

          {/* ② KRAFT FÄLLT AUS */}
          <h2 className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mb-4 leading-snug">
            Fall 2: Die Betreuungskraft wird krank oder fällt aus
          </h2>
          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 mb-8">
            <p className="text-[15px] leading-relaxed text-[#2E2E2E]">
              Dann ist es unsere Aufgabe, nicht Ihre: Primundus stellt eine Ersatzkraft — <strong>ohne
              Zusatzkosten für die Vermittlung</strong>. Berechnet werden ausschließlich die An- und
              Abreisekosten, wie bei jedem regulären Wechsel auch. Durch unser Netzwerk aus tausenden
              geprüften Kräften ist der Ersatz in der Regel innerhalb weniger Tage im Haus. Sie müssen
              nichts organisieren, niemanden suchen, nichts verhandeln — ein Anruf genügt.
            </p>
          </div>

          {/* ③ WECHSEL */}
          <h2 className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mb-4 leading-snug">
            Fall 3: Die Chemie stimmt nicht — was kostet ein Wechsel?
          </h2>
          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 mb-8">
            <p className="text-[15px] leading-relaxed text-[#2E2E2E]">
              Nichts — der Wechsel selbst ist bei Primundus <strong>kostenlos</strong>, ob turnusmäßig
              nach einigen Wochen oder weil es menschlich einfach nicht passt. Es fallen immer nur die
              An- und Abreisekosten der Kräfte an. Das nimmt den Druck aus der Entscheidung: Sie müssen
              mit niemandem „auskommen", der nicht zu Ihrer Familie passt.
            </p>
          </div>

          {/* ④ FEIERTAGE */}
          <h2 className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mb-4 leading-snug">
            Fall 4: Weihnachten, Ostern &amp; Co. — was kosten Feiertage?
          </h2>
          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 mb-8">
            <p className="text-[15px] leading-relaxed text-[#2E2E2E]">
              An gesetzlichen Feiertagen gilt der <strong>doppelte Tagessatz</strong> — und weil wir
              Preise ehrlich nennen, hier die Rechnung: Bei 2.800 Euro Monatspreis beträgt der Tagessatz
              rund 93 Euro (Monatspreis geteilt durch 30). Ein Feiertag kostet also etwa <strong>93 Euro
              Aufschlag</strong>. Je nach Bundesland sind das 9 bis 13 Feiertage im Jahr — zusammen rund
              850 bis 1.200 Euro jährlich. Das steht so in unserer Kalkulation, bevor Sie unterschreiben,
              nicht danach auf der Rechnung.
            </p>
          </div>

          {/* ④ FAQ — identisch zum FAQPage-Schema */}
          <h2 className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mb-4 leading-snug">
            Die Antworten auf einen Blick
          </h2>
          <div className="space-y-4 mb-8">
            <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6">
              <p className="text-[16px] font-bold text-[#1C1C1C] mb-2">Muss ich die 24-Stunden-Pflege weiterzahlen, wenn meine Mutter ins Krankenhaus kommt?</p>
              <p className="text-[15px] leading-relaxed text-[#2E2E2E]">
                Bei Primundus entscheiden Sie: Bleibt die Betreuungskraft im Haus (führt den Haushalt
                weiter und ist bei der Rückkehr sofort da), läuft die Zahlung weiter. Soll sie abreisen,
                zahlen Sie nur noch bis zur Abreise — in der Regel 2 bis 3 Tage. Zusätzlich zahlt die
                Pflegekasse das Pflegegeld bei Krankenhausaufenthalten bis zu vier Wochen weiter.
              </p>
            </div>
            <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6">
              <p className="text-[16px] font-bold text-[#1C1C1C] mb-2">Was passiert, wenn die Betreuungskraft krank wird oder ausfällt?</p>
              <p className="text-[15px] leading-relaxed text-[#2E2E2E]">
                Primundus stellt eine Ersatzkraft — ohne Zusatzkosten für die Vermittlung. Es fallen wie
                bei jedem Kraftwechsel nur die An- und Abreisekosten an. Durch das große Netzwerk ist
                Ersatz in der Regel innerhalb weniger Tage vor Ort.
              </p>
            </div>
            <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6">
              <p className="text-[16px] font-bold text-[#1C1C1C] mb-2">Kostet ein Wechsel der Betreuungskraft etwas?</p>
              <p className="text-[15px] leading-relaxed text-[#2E2E2E]">
                Nein — der Wechsel selbst kostet bei Primundus nichts, egal ob turnusmäßig oder weil die
                Chemie nicht stimmt. Berechnet werden ausschließlich die An- und Abreisekosten der Kräfte.
              </p>
            </div>
            <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6">
              <p className="text-[16px] font-bold text-[#1C1C1C] mb-2">Wie hoch sind die Feiertagszuschläge?</p>
              <p className="text-[15px] leading-relaxed text-[#2E2E2E]">
                An gesetzlichen Feiertagen gilt der doppelte Tagessatz — bei 2.800 Euro Monatspreis rund
                93 Euro Aufschlag pro Feiertag. Mehr zu ehrlichen Gesamtkosten:{' '}
                <a href="/24-stunden-pflege-wirkliche-kosten" className="text-[#8B7355] underline underline-offset-2">Die ehrliche Gesamtrechnung</a>.
              </p>
            </div>
          </div>

          {/* WEITERLESEN */}
          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 mb-8">
            <p className="text-[12px] font-bold uppercase tracking-[0.07em] text-[#8B7355] mb-3">Weiterlesen</p>
            <div className="flex flex-wrap gap-2">
              <a href="/24-stunden-pflege-wirkliche-kosten" className="text-[13px] font-semibold text-[#8B7355] bg-[#F8F7F5] hover:bg-[#F2EDE6] rounded-full px-4 py-2 transition-colors">Die ehrliche Gesamtrechnung</a>
              <a href="/24-stunden-pflege-kostenuebernahme" className="text-[13px] font-semibold text-[#8B7355] bg-[#F8F7F5] hover:bg-[#F2EDE6] rounded-full px-4 py-2 transition-colors">Wer übernimmt die Kosten?</a>
              <a href="/pflegekraft-wechseln" className="text-[13px] font-semibold text-[#8B7355] bg-[#F8F7F5] hover:bg-[#F2EDE6] rounded-full px-4 py-2 transition-colors">Pflegekraft wechseln</a>
              <a href="/erste-hilfe-bei-pflegenotfall" className="text-[13px] font-semibold text-[#8B7355] bg-[#F8F7F5] hover:bg-[#F2EDE6] rounded-full px-4 py-2 transition-colors">Erste Hilfe im Pflegenotfall</a>
            </div>
          </div>

          <ArticleCTA
            headline="Noch eine Frage, die Ihnen niemand beantwortet?"
            subline="Rufen Sie uns an — wir antworten konkret und mit Zahlen. Kostenlos und unverbindlich."
          />
        </div>
      </div>
    </>
  )
}
