import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'

// Ziel-Queries (GSC 08/2026): "24 stunden pflege testsieger" (270 Impr./4 Wo.,
// Pos. 8,7), "24-stunden pflege testsieger" (248 Impr.), "…testsieger 2025".
// Formulierungslinie (Martin, 14.08.2026): keine Prozentzahlen, Nr.-1-Claim
// wörtlich vom Siegel, Preis/Qualität-Botschaft als Eigenaussage (kein Zitat).
// Beleg (PDF + Siegel) liegt lokal unter /downloads bzw. /images.

export const metadata: Metadata = {
  title: 'Testsieger 24-Stunden-Pflege: Primundus ist die Nr. 1',
  description:
    'Primundus ist Testsieger: Nr. 1 der Pflegekräfte-Vermittler, ausgezeichnet von DIE WELT und ServiceValue. Jetzt Beleg ansehen und Kosten in 2 Minuten berechnen.',
  alternates: { canonical: 'https://primundus.de/testsieger-24-stunden-pflege' },
  openGraph: {
    title: 'Testsieger 24-Stunden-Pflege: Primundus ist die Nr. 1',
    description:
      'Nr. 1 der Pflegekräfte-Vermittler — ausgezeichnet von DIE WELT und ServiceValue. Mit Original-Beleg als PDF.',
    url: 'https://primundus.de/testsieger-24-stunden-pflege',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Testsieger 24-Stunden-Pflege', item: 'https://primundus.de/testsieger-24-stunden-pflege' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Wer ist Testsieger in der 24-Stunden-Pflege?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Primundus wurde von DIE WELT und ServiceValue als Nr. 1 der Pflegekräfte-Vermittler ausgezeichnet (Service-Champions, Veröffentlichung Oktober 2021).',
        },
      },
      {
        '@type': 'Question',
        name: 'Worauf beruht die Auszeichnung?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Auf einer der größten Kundenbefragungen Deutschlands: Die ServiceValue GmbH wertet gemeinsam mit DIE WELT jährlich Millionen Kundenurteile zu mehr als 380 Branchen aus. Bewertet wird der erlebte Kundenservice.',
        },
      },
      {
        '@type': 'Question',
        name: 'Was kostet die 24-Stunden-Pflege beim Testsieger?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Eine 24-Stunden-Betreuung kostet bei Primundus meist zwischen 2.200 und 3.500 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen der Betreuungskraft. Nach Abzug der Pflegekassen-Zuschüsse bleiben oft rund 1.500 bis 2.500 Euro selbst zu tragen.',
        },
      },
    ],
  },
]

export default function TestsiegerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      <ArticleProgressBar />

      <div className="min-h-screen bg-[#F8F7F5]">
        <div className="max-w-[860px] mx-auto px-5 py-10 md:py-16">

          <nav className="h-[24px] text-sm text-[#8B8B8B] mb-6 flex items-center gap-2">
            <a href="/" className="hover:text-[#8B7355] transition-colors">Startseite</a>
            <span>›</span>
            <span className="text-[#1C1C1C]">Testsieger 24-Stunden-Pflege</span>
          </nav>

          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A89279] mb-4">
            Auszeichnung · Aktualisiert August 2026
          </p>
          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            Testsieger in der 24-Stunden-Pflege: Primundus ist die Nr. 1
          </h1>
          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-10 font-medium">
            Primundus wurde von DIE WELT und der ServiceValue GmbH als <strong>Nr. 1 der Pflegekräfte-Vermittler</strong> ausgezeichnet
            — als Service-Champion im erlebten Kundenservice, ermittelt in Deutschlands großer Service-Studie mit mehr als
            380 untersuchten Branchen (Veröffentlichung: Oktober 2021). Als bester Vermittler von 24-Stunden-Pflegekräften
            steht Primundus für die beste Kombination aus Preis, Qualität und Kundenservice.
          </p>

          {/* ① SIEGEL + BELEG */}
          <div className="bg-white border-2 border-[#D4A843] rounded-2xl p-6 md:p-8 mb-10">
            <div className="flex flex-col md:flex-row md:items-center gap-6 text-center md:text-left">
              <img
                src="/images/service-champions-2021.png"
                alt="Siegel DIE WELT Service-Champions: primundus.de Nr. 1 der Pflegekräfte-Vermittler"
                className="w-44 h-auto mx-auto md:mx-0 flex-shrink-0"
              />
              <div>
                <h2 className="text-[22px] font-bold text-[#1C1C1C] mb-2">Das Original-Siegel</h2>
                <p className="text-[15px] leading-relaxed text-[#2E2E2E] mb-4">
                  „DIE WELT Service-Champions im erlebten Kundenservice: primundus.de — Nr. 1 der Pflegekräfte-Vermittler"
                  (ServiceValue GmbH, 10/2021). Die vollständige Veröffentlichung können Sie hier ansehen:
                </p>
                <a
                  href="/downloads/die-welt-service-champions-2021.pdf"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#8B7355] hover:text-[#6B5738] underline underline-offset-2 transition-colors"
                >
                  Original-Veröffentlichung ansehen (PDF)
                </a>
              </div>
            </div>
          </div>

          {/* ② WAS BEDEUTET DIE AUSZEICHNUNG */}
          <h2 className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mb-4 leading-snug">
            Was bedeutet die Auszeichnung?
          </h2>
          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 mb-8">
            <p className="text-[15px] leading-relaxed text-[#2E2E2E]">
              DIE WELT und die ServiceValue GmbH untersuchen jedes Jahr, wie zufrieden Kundinnen und Kunden mit deutschen
              Unternehmen sind. Dafür werden Millionen von Kundenurteilen ausgewertet — über alle Branchen hinweg, von Banken
              bis zur Pflege. Im Ranking der Pflegekräfte-Vermittler erreichte primundus.de <strong>Platz 1</strong>.
              Ausgezeichnet wird dabei das, worauf es in der Pflege am meisten ankommt: der <strong>erlebte Kundenservice</strong> —
              also wie gut sich Familien beraten, begleitet und betreut fühlen.
            </p>
          </div>

          {/* ③ WAS HEISST DAS FÜR SIE */}
          <h2 className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mb-4 leading-snug">
            Was heißt das für Sie als Familie?
          </h2>
          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 mb-8">
            <p className="text-[15px] leading-relaxed text-[#2E2E2E] mb-6">
              Wenn Sie eine Betreuungskraft für Ihre Eltern oder Ihren Partner suchen, wollen Sie sich auf den Vermittler
              verlassen können. Die Auszeichnung zeigt: Familien, die mit Primundus gearbeitet haben, waren zufriedener als
              bei allen anderen bewerteten Vermittlern. Dazu kommen Leistungen, die Sie so nur bei uns bekommen:
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { icon: '💶', title: 'Bestpreis-Garantie', desc: 'Faire, transparente Preise ohne versteckte Gebühren' },
                { icon: '📅', title: 'Täglich kündbar', desc: 'Keine Mindestlaufzeit, kein Risiko' },
                { icon: '🧾', title: 'Taggenaue Abrechnung', desc: 'Sie zahlen erst, wenn die Betreuungskraft da ist' },
                { icon: '⚡', title: 'Start in 4–7 Tagen', desc: 'Auch bei dringendem Bedarf' },
                { icon: '👩', title: 'Persönliche Ansprechpartnerin', desc: 'Ilka Wysocki begleitet Sie von der Anfrage bis zum Start' },
                { icon: '🛡️', title: 'Rechtssicher', desc: 'Offiziell in der EU angestellte, sozialversicherte Betreuungskräfte' },
              ].map((item) => (
                <div key={item.title} className="bg-[#F8F7F5] rounded-xl p-4 flex gap-3 items-start">
                  <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <p className="text-[13px] font-bold text-[#1C1C1C] mb-1">{item.title}</p>
                    <p className="text-[12px] text-[#8B8B8B] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ④ FAQ — Texte identisch zum FAQPage-Schema oben */}
          <h2 className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mb-4 leading-snug">
            Häufige Fragen zur Auszeichnung
          </h2>
          <div className="space-y-4 mb-10">
            <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6">
              <p className="text-[16px] font-bold text-[#1C1C1C] mb-2">Wer ist Testsieger in der 24-Stunden-Pflege?</p>
              <p className="text-[15px] leading-relaxed text-[#2E2E2E]">
                Primundus wurde von DIE WELT und ServiceValue als Nr. 1 der Pflegekräfte-Vermittler ausgezeichnet
                (Service-Champions, Veröffentlichung Oktober 2021). Die vollständige Veröffentlichung können Sie{' '}
                <a href="/downloads/die-welt-service-champions-2021.pdf" target="_blank" rel="noopener" className="text-[#8B7355] underline underline-offset-2">
                  als PDF ansehen
                </a>.
              </p>
            </div>
            <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6">
              <p className="text-[16px] font-bold text-[#1C1C1C] mb-2">Worauf beruht die Auszeichnung?</p>
              <p className="text-[15px] leading-relaxed text-[#2E2E2E]">
                Auf einer der größten Kundenbefragungen Deutschlands: Die ServiceValue GmbH wertet gemeinsam mit DIE WELT
                jährlich Millionen Kundenurteile zu mehr als 380 Branchen aus. Bewertet wird der erlebte Kundenservice —
                nicht Werbung, sondern echte Erfahrungen von Familien.
              </p>
            </div>
            <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6">
              <p className="text-[16px] font-bold text-[#1C1C1C] mb-2">Was kostet die 24-Stunden-Pflege beim Testsieger?</p>
              <p className="text-[15px] leading-relaxed text-[#2E2E2E]">
                Eine 24-Stunden-Betreuung kostet bei Primundus meist zwischen 2.200 und 3.500 Euro im Monat — je nach
                Pflegesituation (Anzahl der Personen, Mobilität, nächtlicher Hilfebedarf) und Deutschkenntnissen der
                Betreuungskraft. Nach Abzug der Pflegekassen-Zuschüsse bleiben oft rund 1.500 bis 2.500 Euro selbst zu
                tragen. Ihren genauen Preis zeigt der{' '}
                <a href="https://kostenrechner.primundus.de/" className="text-[#8B7355] underline underline-offset-2">
                  Kostenrechner in 2 Minuten
                </a>.
              </p>
            </div>
            <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6">
              <p className="text-[16px] font-bold text-[#1C1C1C] mb-2">Ist Primundus auch aktuell ausgezeichnet?</p>
              <p className="text-[15px] leading-relaxed text-[#2E2E2E]">
                Die Auszeichnung stammt aus der Veröffentlichung von Oktober 2021. An unserem Anspruch hat sich seitdem
                nichts geändert: gleiche Ansprechpartner, gleiche Qualität, täglich kündbar. Überzeugen Sie sich am
                einfachsten selbst — mit einem unverbindlichen Angebot in 2 Minuten.
              </p>
            </div>
          </div>

          <ArticleCTA
            headline="Berechnen Sie jetzt, was gute Betreuung kostet."
            subline="In 2 Minuten zu Ihrem persönlichen Angebot — kostenlos und unverbindlich, vom Testsieger."
          />
        </div>
      </div>
    </>
  )
}
