import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { AuthorByline } from '@/components/AuthorByline'

// Nachfrage-Lücke (GSC 08/2026): "24 stunden pflege kostenübernahme"
// 38 Impr. auf Pos. 66 — keine fokussierte Seite. Kaufnahe Query; die
// Kernfrage dahinter ist fast immer: "Zahlt das jemand für uns — und
// müssen am Ende die Kinder ran?" (Antwort: 100.000-€-Regel).

export const metadata: Metadata = {
  title: 'Kostenübernahme 24-Stunden-Pflege: Wer zahlt was?',
  description:
    'Wer übernimmt die Kosten der 24-Stunden-Pflege? Pflegekasse, Sozialamt, Steuervorteil — und wann Kinder zahlen müssen (100.000-€-Grenze). Einfach erklärt.',
  alternates: { canonical: 'https://primundus.de/24-stunden-pflege-kostenuebernahme' },
  openGraph: {
    title: 'Kostenübernahme 24-Stunden-Pflege: Wer zahlt was? | Primundus',
    description: 'Pflegekasse, Sozialamt, Steuervorteil — und die 100.000-€-Regel für Angehörige. Einfach erklärt.',
    url: 'https://primundus.de/24-stunden-pflege-kostenuebernahme',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Kostenübernahme bei der 24-Stunden-Pflege: Wer zahlt was?',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-08-14',
    dateModified: '2026-08-14',
    mainEntityOfPage: 'https://primundus.de/24-stunden-pflege-kostenuebernahme',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Übernimmt die Pflegekasse die 24-Stunden-Pflege komplett?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nein. Die Pflegekasse zahlt feste Zuschüsse — Pflegegeld (347 bis 990 Euro je nach Pflegegrad), Entlastungsbetrag (131 Euro monatlich) und Verhinderungspflege (bis 3.539 Euro im Jahr). Zusammen deckt das oft 700 bis 1.200 Euro im Monat, den Rest tragen die Familien selbst.',
        },
      },
      {
        '@type': 'Question',
        name: 'Zahlt das Sozialamt die 24-Stunden-Pflege, wenn das Geld nicht reicht?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Reichen Rente, Pflegegeld und Erspartes nicht, kann beim Sozialamt „Hilfe zur Pflege" beantragt werden. Ein Schonvermögen von 10.000 Euro pro Person bleibt dabei geschützt. Das Sozialamt prüft den Einzelfall und übernimmt anerkannte, angemessene Pflegekosten.',
        },
      },
      {
        '@type': 'Question',
        name: 'Müssen Kinder für die Pflege ihrer Eltern zahlen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nur bei sehr hohem Einkommen: Seit dem Angehörigen-Entlastungsgesetz müssen Kinder erst ab 100.000 Euro Bruttojahreseinkommen zum Elternunterhalt beitragen. Wer darunter liegt, wird vom Sozialamt nicht herangezogen — das Vermögen der Kinder spielt keine Rolle.',
        },
      },
      {
        '@type': 'Question',
        name: 'Kann man die 24-Stunden-Pflege von der Steuer absetzen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ja. Für haushaltsnahe Dienstleistungen erkennt das Finanzamt bis zu 4.000 Euro Steuerermäßigung pro Jahr an — das entspricht gut 330 Euro im Monat zusätzlicher Entlastung.',
        },
      },
    ],
  },
]

export default function KostenuebernahmePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      <ArticleProgressBar />

      <div className="min-h-screen bg-[#F8F7F5]">
        <div className="max-w-[860px] mx-auto px-5 py-10 md:py-16">

          <nav className="h-[24px] text-sm text-[#8B8B8B] mb-6 flex items-center gap-2">
            <a href="/" className="hover:text-[#8B7355] transition-colors">Startseite</a>
            <span>›</span>
            <a href="/kosten" className="hover:text-[#8B7355] transition-colors">Kosten</a>
            <span>›</span>
            <span className="text-[#1C1C1C]">Kostenübernahme</span>
          </nav>

          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A89279] mb-4">
            Kosten &amp; Finanzierung · Aktualisiert August 2026
          </p>
          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            Kostenübernahme bei der 24-Stunden-Pflege: Wer zahlt was?
          </h1>

          <AuthorByline updated="14. August 2026" />

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            Die kurze, ehrliche Antwort: <strong>Komplett übernimmt die Kosten niemand</strong> — aber es
            zahlen mehr Stellen mit, als die meisten Familien denken. Die Pflegekasse steuert je nach
            Pflegegrad oft 700 bis 1.200 Euro im Monat bei, das Finanzamt bis zu 4.000 Euro im Jahr, und
            wenn das Geld trotzdem nicht reicht, springt das Sozialamt ein. Die wichtigste Beruhigung
            vorweg: <strong>Kinder müssen erst ab 100.000 Euro Bruttojahreseinkommen für die Pflege ihrer
            Eltern zahlen.</strong>
          </p>

          {/* ① WER ZAHLT WAS — TABELLE */}
          <h2 className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mb-4 leading-snug">
            Die drei Töpfe: Pflegekasse, Finanzamt, Sozialamt
          </h2>
          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 mb-8 overflow-x-auto">
            <table className="w-full text-[14px] text-[#2E2E2E]">
              <thead>
                <tr className="border-b-2 border-[#E5E3DF] text-left">
                  <th className="py-3 pr-4 font-bold text-[#1C1C1C]">Wer zahlt?</th>
                  <th className="py-3 pr-4 font-bold text-[#1C1C1C]">Was genau?</th>
                  <th className="py-3 font-bold text-[#1C1C1C]">Wie viel?</th>
                </tr>
              </thead>
              <tbody className="align-top">
                <tr className="border-b border-[#F0EDE8]">
                  <td className="py-3 pr-4 font-semibold">Pflegekasse</td>
                  <td className="py-3 pr-4">Pflegegeld (bei Pflege zuhause)</td>
                  <td className="py-3">347 € (PG 2) · 599 € (PG 3) · 800 € (PG 4) · 990 € (PG 5) monatlich</td>
                </tr>
                <tr className="border-b border-[#F0EDE8]">
                  <td className="py-3 pr-4 font-semibold">Pflegekasse</td>
                  <td className="py-3 pr-4">Entlastungsbetrag</td>
                  <td className="py-3">131 € monatlich (ab PG 1)</td>
                </tr>
                <tr className="border-b border-[#F0EDE8]">
                  <td className="py-3 pr-4 font-semibold">Pflegekasse</td>
                  <td className="py-3 pr-4">Verhinderungspflege (gemeinsamer Jahresbetrag mit Kurzzeitpflege)</td>
                  <td className="py-3">bis 3.539 € im Jahr (≈ 295 € monatlich)</td>
                </tr>
                <tr className="border-b border-[#F0EDE8]">
                  <td className="py-3 pr-4 font-semibold">Finanzamt</td>
                  <td className="py-3 pr-4">Steuerermäßigung für haushaltsnahe Dienstleistungen (§ 35a EStG)</td>
                  <td className="py-3">bis 4.000 € im Jahr (≈ 333 € monatlich)</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">Sozialamt</td>
                  <td className="py-3 pr-4">„Hilfe zur Pflege", wenn Einkommen und Vermögen nicht reichen</td>
                  <td className="py-3">einzelfallabhängig; 10.000 € Schonvermögen bleiben geschützt</td>
                </tr>
              </tbody>
            </table>
            <p className="text-[13px] text-[#8B8B8B] mt-4">
              Stand: August 2026. Alle Beträge sind gesetzliche Leistungen — sie gelten unabhängig davon,
              über welchen Anbieter die Betreuung organisiert wird.
            </p>
          </div>

          {/* ② RECHENBEISPIEL */}
          <h2 className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mb-4 leading-snug">
            Was bleibt am Ende wirklich zu zahlen?
          </h2>
          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 mb-8">
            <p className="text-[15px] leading-relaxed text-[#2E2E2E] mb-4">
              Ein typisches Beispiel mit Pflegegrad 3: Die Betreuung kostet 2.800 Euro im Monat. Davon
              gehen ab: 599 Euro Pflegegeld, 131 Euro Entlastungsbetrag, rund 295 Euro anteilige
              Verhinderungspflege und etwa 333 Euro Steuerersparnis. <strong>Es bleiben rund 1.450 Euro
              im Monat</strong> — für eine Kraft, die rund um die Uhr im Haus ist. Zum Vergleich: Ein
              Heimplatz kostet im Bundesdurchschnitt deutlich über 2.500 Euro Eigenanteil, und das Haus
              steht leer.
            </p>
            <a
              href="https://kostenrechner.primundus.de/"
              className="inline-flex items-center gap-2 bg-[#E76F63] hover:bg-[#D45F53] text-white font-bold text-[14px] py-3 px-6 rounded-xl transition-colors"
            >
              Ihre Zuschüsse in 2 Minuten berechnen
            </a>
          </div>

          {/* ③ SOZIALAMT */}
          <h2 className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mb-4 leading-snug">
            Wenn das Geld nicht reicht: Hilfe zur Pflege vom Sozialamt
          </h2>
          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 mb-8">
            <p className="text-[15px] leading-relaxed text-[#2E2E2E] mb-4">
              Reichen Rente, Pflegegeld und Erspartes nicht aus, muss niemand auf Betreuung verzichten:
              Beim Sozialamt kann <strong>„Hilfe zur Pflege"</strong> beantragt werden. Dabei gilt ein{' '}
              <strong>Schonvermögen von 10.000 Euro pro Person</strong> (bei Ehepaaren 20.000 Euro), das
              nicht angetastet wird. Auch das selbst bewohnte Haus ist in der Regel geschützt, solange der
              Ehepartner darin wohnt.
            </p>
            <div className="bg-[#F2EDE6] rounded-xl p-5">
              <p className="text-[12px] font-bold uppercase tracking-[0.07em] text-[#8B7355] mb-2">
                Die 100.000-Euro-Regel — die wichtigste Entlastung für Angehörige
              </p>
              <p className="text-[13px] text-[#6B5A44] leading-relaxed">
                Seit dem Angehörigen-Entlastungsgesetz zieht das Sozialamt Kinder erst dann zum
                Elternunterhalt heran, wenn ihr <strong>Bruttojahreseinkommen über 100.000 Euro</strong>{' '}
                liegt — pro Kind gerechnet, Vermögen zählt nicht. Für die allermeisten Familien heißt das:
                Die Kinder zahlen nichts, auch wenn das Sozialamt einspringt.
              </p>
            </div>
          </div>

          {/* ④ FAQ — identisch zum FAQPage-Schema */}
          <h2 className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mb-4 leading-snug">
            Häufige Fragen zur Kostenübernahme
          </h2>
          <div className="space-y-4 mb-8">
            <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6">
              <p className="text-[16px] font-bold text-[#1C1C1C] mb-2">Übernimmt die Pflegekasse die 24-Stunden-Pflege komplett?</p>
              <p className="text-[15px] leading-relaxed text-[#2E2E2E]">
                Nein. Die Pflegekasse zahlt feste Zuschüsse — Pflegegeld (347 bis 990 Euro je nach
                Pflegegrad), Entlastungsbetrag (131 Euro monatlich) und Verhinderungspflege (bis 3.539
                Euro im Jahr). Zusammen deckt das oft 700 bis 1.200 Euro im Monat, den Rest tragen die
                Familien selbst.
              </p>
            </div>
            <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6">
              <p className="text-[16px] font-bold text-[#1C1C1C] mb-2">Zahlt das Sozialamt die 24-Stunden-Pflege, wenn das Geld nicht reicht?</p>
              <p className="text-[15px] leading-relaxed text-[#2E2E2E]">
                Reichen Rente, Pflegegeld und Erspartes nicht, kann beim Sozialamt „Hilfe zur Pflege"
                beantragt werden. Ein Schonvermögen von 10.000 Euro pro Person bleibt dabei geschützt.
                Das Sozialamt prüft den Einzelfall und übernimmt anerkannte, angemessene Pflegekosten.
              </p>
            </div>
            <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6">
              <p className="text-[16px] font-bold text-[#1C1C1C] mb-2">Müssen Kinder für die Pflege ihrer Eltern zahlen?</p>
              <p className="text-[15px] leading-relaxed text-[#2E2E2E]">
                Nur bei sehr hohem Einkommen: Seit dem Angehörigen-Entlastungsgesetz müssen Kinder erst
                ab 100.000 Euro Bruttojahreseinkommen zum Elternunterhalt beitragen. Wer darunter liegt,
                wird vom Sozialamt nicht herangezogen — das Vermögen der Kinder spielt keine Rolle.
              </p>
            </div>
            <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6">
              <p className="text-[16px] font-bold text-[#1C1C1C] mb-2">Kann man die 24-Stunden-Pflege von der Steuer absetzen?</p>
              <p className="text-[15px] leading-relaxed text-[#2E2E2E]">
                Ja. Für haushaltsnahe Dienstleistungen erkennt das Finanzamt bis zu 4.000 Euro
                Steuerermäßigung pro Jahr an — das entspricht gut 330 Euro im Monat zusätzlicher
                Entlastung. Mehr dazu:{' '}
                <a href="/pflege-steuerlich-absetzen" className="text-[#8B7355] underline underline-offset-2">
                  Pflege steuerlich absetzen
                </a>.
              </p>
            </div>
          </div>

          {/* WEITERLESEN */}
          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 mb-8">
            <p className="text-[12px] font-bold uppercase tracking-[0.07em] text-[#8B7355] mb-3">Weiterlesen</p>
            <div className="flex flex-wrap gap-2">
              <a href="/kosten" className="text-[13px] font-semibold text-[#8B7355] bg-[#F8F7F5] hover:bg-[#F2EDE6] rounded-full px-4 py-2 transition-colors">Was kostet 24h-Pflege?</a>
              <a href="/pflegegeld-und-24h-pflege-kombinieren" className="text-[13px] font-semibold text-[#8B7355] bg-[#F8F7F5] hover:bg-[#F2EDE6] rounded-full px-4 py-2 transition-colors">Pflegegeld & 24h-Pflege kombinieren</a>
              <a href="/sozialhilfe-bei-pflegebedarf" className="text-[13px] font-semibold text-[#8B7355] bg-[#F8F7F5] hover:bg-[#F2EDE6] rounded-full px-4 py-2 transition-colors">Sozialhilfe bei Pflegebedarf</a>
              <a href="/eigenanteil-24h-pflege-senken" className="text-[13px] font-semibold text-[#8B7355] bg-[#F8F7F5] hover:bg-[#F2EDE6] rounded-full px-4 py-2 transition-colors">Eigenanteil senken</a>
            </div>
          </div>

          <ArticleCTA
            headline="Wie viel Zuschuss steht Ihrer Familie zu?"
            subline="Der Kostenrechner zeigt es in 2 Minuten — kostenlos und unverbindlich."
          />
        </div>
      </div>
    </>
  )
}
