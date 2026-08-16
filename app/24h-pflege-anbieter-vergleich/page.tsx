import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { AuthorByline } from '@/components/AuthorByline'

const SECTIONS = [{ id: 'kriterien', title: 'Die wichtigsten Kriterien' }, { id: 'rechtssicherheit', title: 'Rechtssicherheit zuerst' }, { id: 'qualitaet', title: 'Qualitätsprüfung' }, { id: 'transparenz', title: 'Kosten & Transparenz' }, { id: 'unterschied', title: 'Sofort-Transparenz statt Callcenter' }, { id: 'faq', title: 'Häufige Fragen' }]

export const metadata: Metadata = {
  title: '24h-Pflege Anbieter Vergleich 2026 — worauf es ankommt | Primundus',
  description: 'Worauf man beim Vergleich von 24h-Pflege-Anbietern achten sollte: Rechtssicherheit, Qualitätsprüfung, Transparenz, Kosten. Primundus im Vergleich.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-anbieter-vergleich' },
  openGraph: {
    title: '24h-Pflege Anbieter Vergleich 2026 | Primundus',
    description: 'Worauf man beim Vergleich von 24h-Pflege-Anbietern achten sollte: Rechtssicherheit, Qualitätsprüfung, Transparenz, Kosten. Primundus im Vergleich.',
    url: 'https://primundus.de/24h-pflege-anbieter-vergleich',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '24h-Pflege Anbieter vergleichen — worauf es wirklich ankommt',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-30',
    dateModified: '2026-04-30',
    mainEntityOfPage: 'https://primundus.de/24h-pflege-anbieter-vergleich',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://primundus.de/ratgeber' },
      { '@type': 'ListItem', position: 3, name: '24h-Pflege Anbieter Vergleich', item: 'https://primundus.de/24h-pflege-anbieter-vergleich' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Worauf muss ich beim Vergleich von 24h-Pflege-Anbietern achten?', acceptedAnswer: { '@type': 'Answer', text: 'Rechtssicherheit (Entsendemodell mit A1), aktive Qualitätsprüfung der Kräfte, transparente Kosten, tägliche Kündbarkeit, persönlicher Ansprechpartner.' } },
      { '@type': 'Question', name: 'Was ist der Unterschied zwischen Agentur und Vermittlungsportal?', acceptedAnswer: { '@type': 'Answer', text: 'Eine seriöse Agentur prüft Kräfte aktiv, stellt das Beschäftigungsverhältnis rechtssicher und bleibt laufender Ansprechpartner. Portale vermitteln oft nur Kontakte ohne Qualitätskontrolle.' } },
      { '@type': 'Question', name: 'Wie erkenne ich Scheinselbstständigkeit?', acceptedAnswer: { '@type': 'Answer', text: "Wenn die Kraft als 'selbstständig' gilt, aber feste Arbeitszeiten hat und weisungsgebunden ist — das ist Scheinselbstständigkeit. Folge: Nachzahlung aller Sozialabgaben." } }
    ],
  },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      <ArticleProgressBar />
      <ArticleTOC sections={SECTIONS} />
      <div className="min-h-screen bg-[#F8F7F5]">
        <div className="max-w-[860px] mx-auto px-5 py-10 md:py-16">
          <nav className="h-[24px] text-sm text-[#8B8B8B] mb-6 flex items-center gap-2">
            <a href="/" className="hover:text-[#8B7355] transition-colors">Startseite</a>
            <span>›</span>
            <a href="/ratgeber/" className="hover:text-[#8B7355] transition-colors">Ratgeber</a>
            <span>›</span>
            <span className="text-[#1C1C1C]">24h-Pflege Anbieter Vergleich</span>
          </nav>
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A89279] mb-4">Ratgeber · 6 Min Lesezeit · Aktualisiert April 2026</p>
          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">24h-Pflege Anbieter vergleichen — worauf es wirklich ankommt</h1>

          <AuthorByline updated="30. April 2026" />
          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-10 font-medium">Nicht jeder 24h-Pflege-Anbieter ist gleich. Manche vermitteln über Marktplätze ohne Qualitätskontrolle, andere arbeiten im rechtlichen Graubereich. Diese Seite zeigt die entscheidenden Kriterien beim Anbietervergleich.</p>
          <h2 id="kriterien" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">Die wichtigsten Kriterien beim Anbietervergleich</h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Der Markt für 24h-Pflege ist unübersichtlich — von seriösen Agenturen bis zu fragwürdigen Vermittlungsportalen. Drei Kriterien sind entscheidend: Rechtssicherheit des Modells, aktive Qualitätsprüfung der Kräfte, und Transparenz bei Kosten und Vertrag.</p>
          <div className="space-y-3 mb-8">
            <div className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
              <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">Rechtssicherheit des Modells</p>
              <p className="text-[14px] text-[#2E2E2E] leading-relaxed">Entsendemodell mit A1-Bescheinigung ist die einzige rechtssichere Lösung. Direktanstellung oder inoffizielle Beschäftigung führt zu Nachzahlungen und Strafen.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
              <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">Aktive Qualitätsprüfung</p>
              <p className="text-[14px] text-[#2E2E2E] leading-relaxed">Werden Kräfte wirklich geprüft? Deutschkenntnisse, Referenzen, Erfahrung — oder nur Profile aus einer Datenbank?</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
              <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">Transparenz bei Kosten</p>
              <p className="text-[14px] text-[#2E2E2E] leading-relaxed">Alle Kosten klar ausgewiesen? Keine versteckten Gebühren für Wechsel oder Kündigung?</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
              <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">Erreichbarkeit & Support</p>
              <p className="text-[14px] text-[#2E2E2E] leading-relaxed">Wer ist Ansprechpartner wenn Probleme auftreten? Gibt es eine persönliche Beratung?</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
              <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">Kündigungsbedingungen</p>
              <p className="text-[14px] text-[#2E2E2E] leading-relaxed">Täglich kündbar oder lange Bindungsfristen? Das ist entscheidend wenn die Kraft nicht passt.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
              <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">Erfahrung & Referenzen</p>
              <p className="text-[14px] text-[#2E2E2E] leading-relaxed">Wie lange am Markt, wie viele Betreuungen, welche Auszeichnungen?</p>
            </div>
          </div>          <h2 id="rechtssicherheit" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">Rechtssicherheit zuerst</h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Das häufigste Problem in der Branche: Kräfte die offiziell selbstständig sind aber faktisch weisungsgebunden arbeiten — Scheinselbstständigkeit. Das kann für Familien teuer werden: Nachzahlungen von Sozialabgaben, Bußgelder, strafrechtliche Konsequenzen.</p>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Die einzige saubere Lösung ist das Entsendemodell: Die Kraft wird von einer Agentur in ihrem Heimatland (z.B. Polen) beschäftigt und nach Deutschland entsendet. Mit A1-Bescheinigung, vollem Krankenversicherungsschutz, ohne deutsche Sozialabgaben für die Familie.</p>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Primundus arbeitet seit über 20 Jahren ausschließlich in diesem Modell — über 60.000 Betreuungen ohne einen einzigen Rechtsfall für Kundenfamilien.</p>

          <h2 id="unterschied" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">Der große Unterschied: Sofort-Transparenz statt Callcenter-Modell</h2>
          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 mb-8 overflow-x-auto">
            <p className="text-[15px] leading-relaxed text-[#2E2E2E] mb-4">
              Fast alle großen Vermittler arbeiten nach demselben Muster: Erst Fragebogen oder
              Beratungsgespräch, dann Rückruf, dann irgendwann ein Preis. Wir haben die Websites der
              größten Anbieter analysiert (Stand: August 2026) — und uns bewusst anders aufgestellt:
            </p>
            <table className="w-full text-[14px] text-[#2E2E2E]">
              <thead>
                <tr className="border-b-2 border-[#E5E3DF] text-left">
                  <th className="py-3 pr-4 font-bold text-[#1C1C1C]"></th>
                  <th className="py-3 pr-4 font-bold text-[#1C1C1C]">Primundus</th>
                  <th className="py-3 font-bold text-[#1C1C1C]">Typische Vermittler (Callcenter-Modell)</th>
                </tr>
              </thead>
              <tbody className="align-top">
                <tr className="border-b border-[#F0EDE8]">
                  <td className="py-3 pr-4 font-semibold">Preis erfahren</td>
                  <td className="py-3 pr-4">✅ Sofortangebot online in 2 Minuten — ohne Gespräch</td>
                  <td className="py-3">Erst Fragebogen oder Beratungsgespräch, Preis oft erst nach Rückruf</td>
                </tr>
                <tr className="border-b border-[#F0EDE8]">
                  <td className="py-3 pr-4 font-semibold">Pflegekräfte sehen</td>
                  <td className="py-3 pr-4">✅ Sofort und kostenlos einsehen — vor jeder Entscheidung</td>
                  <td className="py-3">Meist erst nach Gespräch oder Vertragsschluss</td>
                </tr>
                <tr className="border-b border-[#F0EDE8]">
                  <td className="py-3 pr-4 font-semibold">Vertrag</td>
                  <td className="py-3 pr-4">✅ Kein Vertrag nötig, bevor Sie Ihre Pflegekraft ausgewählt haben</td>
                  <td className="py-3">Vertrag häufig vor der Kraft-Auswahl</td>
                </tr>
                <tr className="border-b border-[#F0EDE8]">
                  <td className="py-3 pr-4 font-semibold">Vermittlungsgebühr</td>
                  <td className="py-3 pr-4">✅ Keine</td>
                  <td className="py-3">Teils Aufnahme-/Vermittlungsgebühren, oft erst spät beziffert</td>
                </tr>
                <tr className="border-b border-[#F0EDE8]">
                  <td className="py-3 pr-4 font-semibold">Kündigung</td>
                  <td className="py-3 pr-4">✅ Täglich kündbar, taggenaue Abrechnung</td>
                  <td className="py-3">Fristen auf den Websites oft nicht genannt</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">Erfahrung &amp; Beleg</td>
                  <td className="py-3 pr-4">✅ 20+ Jahre, 60.000+ Betreuungen — Auszeichnung <a href="/testsieger-24-stunden-pflege" className="text-[#8B7355] underline underline-offset-2">mit Original-Beleg</a></td>
                  <td className="py-3">Siegel und Bewertungen häufig ohne verlinkten Nachweis</td>
                </tr>
              </tbody>
            </table>
            <p className="text-[13px] text-[#8B8B8B] mt-4">
              Warum das für Sie zählt: Angehörige in einer Pflegesituation haben keine Zeit für
              Rückruf-Schleifen — und verdienen Preise, die man vergleichen kann, bevor man seine
              Telefonnummer hergibt. Prüfen Sie uns an unserem eigenen Maßstab:{' '}
              <a href="/24-stunden-pflege-wirkliche-kosten" className="text-[#8B7355] underline underline-offset-2">die 7 Fragen an jeden Anbieter</a>.
            </p>
          </div>
          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            <details className="bg-white rounded-xl border border-[#E5E3DF] group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">Worauf muss ich beim Vergleich von 24h-Pflege-Anbietern achten?</h3>
                <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-[#2E2E2E] leading-relaxed">Rechtssicherheit (Entsendemodell mit A1), aktive Qualitätsprüfung der Kräfte, transparente Kosten, tägliche Kündbarkeit, persönlicher Ansprechpartner.</p></div>
            </details>
            <details className="bg-white rounded-xl border border-[#E5E3DF] group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">Was ist der Unterschied zwischen Agentur und Vermittlungsportal?</h3>
                <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-[#2E2E2E] leading-relaxed">Eine seriöse Agentur prüft Kräfte aktiv, stellt das Beschäftigungsverhältnis rechtssicher und bleibt laufender Ansprechpartner. Portale vermitteln oft nur Kontakte ohne Qualitätskontrolle.</p></div>
            </details>
            <details className="bg-white rounded-xl border border-[#E5E3DF] group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">Wie erkenne ich Scheinselbstständigkeit?</h3>
                <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-[#2E2E2E] leading-relaxed">Wenn die Kraft als 'selbstständig' gilt, aber feste Arbeitszeiten hat und weisungsgebunden ist — das ist Scheinselbstständigkeit. Folge: Nachzahlung aller Sozialabgaben.</p></div>
            </details>
          </div>
          <ArticleCTA />
        </div>
      </div>
    </>
  )
}
