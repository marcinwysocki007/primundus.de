import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [
  { id: 'auswahl', title: 'Wie Primundus Kräfte auswählt' },
  { id: 'pruefung', title: 'Was aktiv geprüft wird' },
  { id: 'laufend', title: 'Laufende Qualitätssicherung' },
  { id: 'wechsel', title: 'Was wenn es nicht passt?' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Qualität der 24h-Pflege bei Primundus — wie wir Kräfte prüfen | Primundus',
  description: 'Wie Primundus die Qualität der Betreuungskräfte sicherstellt: aktive Prüfung von Deutschkenntnissen, Erfahrung und Referenzen. Laufende Qualitätssicherung, täglich kündbar.',
  alternates: { canonical: 'https://primundus.de/qualitaet/' },
  openGraph: {
    title: 'Qualität der 24h-Pflege | Primundus',
    description: 'Wie Primundus Betreuungskräfte prüft und Qualität dauerhaft sicherstellt.',
    url: 'https://primundus.de/qualitaet/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Qualität der 24h-Pflege bei Primundus — wie wir Kräfte prüfen',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/qualitaet/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Qualität', item: 'https://primundus.de/qualitaet/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Wie stellt Primundus die Qualität der Betreuungskräfte sicher?',
        acceptedAnswer: { '@type': 'Answer', text: 'Primundus prüft alle Betreuungskräfte aktiv: Deutschkenntnisse werden im Gespräch bewertet (nicht nur selbst angegeben), Pflegeerfahrung und Referenzen aus früheren Einsätzen geprüft. Laufende Qualitätssicherung durch Primundus als Ansprechpartner. Bei Nichterfüllung: sofortiger Wechsel, täglich kündbar.' },
      },
    ],
  },
]

export default function Qualitaet() {
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
            <span className="text-[#1C1C1C]">Qualität</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            Über Primundus · Aktualisiert April 2026
          </p>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            Qualität der 24h-Pflege — wie Primundus Kräfte prüft und sichert
          </h1>

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-10 font-medium">
            Über 20 Jahre, mehr als 60.000 Betreuungen, Testsieger DIE WELT — diese Zahlen entstehen nicht durch Zufall. Sie entstehen durch ein konsequentes Qualitätssystem: aktive Prüfung vor jedem Einsatz, laufende Betreuung während des Einsatzes, und die Bereitschaft sofort zu reagieren wenn etwas nicht stimmt.
          </p>

          {/* Trust-Zahlen */}
          <div className="grid grid-cols-3 gap-4 mb-10">
            {[
              { zahl: '20+', label: 'Jahre Erfahrung' },
              { zahl: '60.000+', label: 'Betreuungen' },
              { zahl: 'Testsieger', label: 'DIE WELT' },
            ].map((item) => (
              <div key={item.label} className="bg-white border border-[#E5E3DF] rounded-2xl p-5 text-center shadow-sm">
                <p className="text-[24px] font-bold text-[#8B7355]">{item.zahl}</p>
                <p className="text-[13px] text-[#8B8B8B] mt-1">{item.label}</p>
              </div>
            ))}
          </div>

          <h2 id="auswahl" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Wie Primundus Betreuungskräfte auswählt
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Nicht jede Kraft die sich bewirbt wird vermittelt. Primundus trifft eine gezielte Auswahl — basierend auf Erfahrung, Qualifikation, Persönlichkeit und dem spezifischen Bedarf der Familie.
          </p>
          <div className="space-y-3 mb-10">
            {[
              { schritt: 'Bewerbung und Erstgespräch', desc: 'Jede Kraft durchläuft ein strukturiertes Gespräch. Erfahrung, Motivation und Persönlichkeit werden bewertet — nicht nur Unterlagen geprüft.' },
              { schritt: 'Aktive Deutschprüfung', desc: 'Deutschkenntnisse werden im Gespräch aktiv bewertet — nicht auf Selbstauskunft verlassen. Grundkommunikation ist Mindestanforderung. Viele Kräfte sprechen gut Deutsch durch frühere Einsätze.' },
              { schritt: 'Referenzprüfung', desc: 'Kontakt zu früheren Familien möglich. Primundus prüft Anzahl und Art früherer Einsätze.' },
              { schritt: 'Spezialerfahrung abgleichen', desc: 'Bei Demenz, Parkinson, Schlaganfall oder anderen Diagnosen: Kraft mit entsprechender Vorerfahrung zuordnen.' },
              { schritt: 'Matching zur Familie', desc: 'Persönlichkeit, Interessen, Erfahrungsprofil — Primundus wählt die Kraft die zur spezifischen Situation passt. Telefonat vorab auf Wunsch möglich.' },
            ].map((item, i) => (
              <div key={item.schritt} className="flex gap-4 bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <span className="w-8 h-8 rounded-full bg-[#8B7355] text-white font-bold text-[15px] flex items-center justify-center flex-shrink-0">{i + 1}</span>
                <div>
                  <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.schritt}</p>
                  <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 id="pruefung" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Was aktiv geprüft wird — und was nicht reicht
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            <div className="bg-[#E8F5EE] border border-[rgba(61,122,92,0.2)] rounded-2xl p-5">
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#2A5C3F] mb-3">Primundus prüft aktiv</p>
              {[
                'Deutschkenntnisse im Gespräch bewertet',
                'Anzahl und Art früherer Einsätze dokumentiert',
                'Referenzen aus früheren Familien möglich',
                'Spezialerfahrung (Demenz, Parkinson etc.) abgefragt',
                'Führerschein verifiziert wenn relevant',
                'Persönlichkeit und Kommunikationsstil eingeschätzt',
              ].map((item) => (
                <div key={item} className="flex gap-2 text-[13px] text-[#2A5C3F] py-1.5 border-b border-[rgba(61,122,92,0.1)] last:border-0">
                  <span className="flex-shrink-0">✓</span>{item}
                </div>
              ))}
            </div>
            <div className="bg-[#FDF0EE] border border-[rgba(231,111,99,0.15)] rounded-2xl p-5">
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#8B3E2F] mb-3">Was nicht ausreicht</p>
              {[
                'Nur Selbstauskunft der Kraft ohne Prüfung',
                'Zertifikate ohne Verifizierung der Praxiserfahrung',
                'Deutschniveau-Angaben ohne Gespräch',
                'Profile aus Online-Marktplätzen ohne Hintergrundprüfung',
                'Kräfte ohne nachweisbare 24h-Einsatzerfahrung',
              ].map((item) => (
                <div key={item} className="flex gap-2 text-[13px] text-[#8B3E2F] py-1.5 border-b border-[rgba(231,111,99,0.1)] last:border-0">
                  <span className="flex-shrink-0">✗</span>{item}
                </div>
              ))}
            </div>
          </div>

          <h2 id="laufend" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Laufende Qualitätssicherung während des Einsatzes
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Qualität endet nicht nach der Vermittlung. Primundus bleibt laufender Ansprechpartner — für Familien und für Kräfte.
          </p>
          <div className="space-y-3 mb-10">
            {[
              { aspekt: 'Erreichbarkeit Mo – So 8 – 20 Uhr', desc: 'Primundus ist für alle Fragen, Anliegen und Probleme direkt erreichbar — per Telefon und E-Mail.' },
              { aspekt: 'Regelmäßige Rückmeldungen', desc: 'Primundus holt aktiv Feedback von Familien ein — besonders nach Kraftwechseln und in der Eingewöhnungsphase.' },
              { aspekt: 'Sofortreaktion bei Problemen', desc: 'Wenn die Qualität nicht stimmt: Primundus handelt sofort — Gespräch mit der Kraft, und wenn nötig unmittelbarer Wechsel.' },
              { aspekt: 'Kraftwechsel ohne Lücke', desc: 'Alle 6–8 Wochen regulärer Wechsel — nahtlos organisiert. Primundus stellt sicher dass die neue Kraft das Profil der Familie kennt.' },
            ].map((item) => (
              <div key={item.aspekt} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.aspekt}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 id="wechsel" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Was wenn es nicht passt — täglich kündbar
          </h2>
          <div className="bg-white border-2 border-[#8B7355] rounded-2xl p-6 mb-10">
            <p className="text-[16px] font-bold text-[#1C1C1C] mb-3">Die Primundus-Garantie</p>
            <div className="space-y-3">
              {[
                { punkt: 'Täglich kündbar', desc: 'Keine Mindestlaufzeit, keine Fristen. Wenn die Kraft nicht passt — ein Anruf genügt.' },
                { punkt: 'Sofortiger Ersatz', desc: 'Primundus stellt unverzüglich eine neue Kraft — keine Versorgungslücke, kein Organisationsaufwand für die Familie.' },
                { punkt: 'Keine Zusatzkosten beim Wechsel', desc: 'Wechsel aus Qualitätsgründen kostet nichts zusätzlich. Primundus trägt das Vermittlungsrisiko.' },
              ].map((item) => (
                <div key={item.punkt} className="flex gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#E8F5EE] text-[#3D7A5C] flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">✓</span>
                  <div>
                    <p className="text-[14px] font-bold text-[#1C1C1C]">{item.punkt}</p>
                    <p className="text-[13px] text-[#2E2E2E]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen zur Qualität</h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Wie stellt Primundus die Qualität der Betreuungskräfte sicher?', a: 'Aktive Prüfung vor jedem Einsatz: Deutschkenntnisse im Gespräch bewertet, Erfahrung und Referenzen geprüft, Spezialerfahrung abgeglichen. Laufende Betreuung durch Primundus als Ansprechpartner. Bei Qualitätsproblemen sofortiger Wechsel — täglich kündbar.' },
              { q: 'Kann ich die Kraft vorher kennenlernen?', a: 'Auf Wunsch ist ein Telefonat mit der Kraft vorab möglich. So kann ein erster Eindruck von Sprachkenntnissen und Persönlichkeit gewonnen werden.' },
              { q: 'Was passiert wenn die Kraft nicht gut ist?', a: 'Sofort Primundus informieren. Primundus reagiert unverzüglich — Gespräch mit der Kraft und wenn nötig sofortiger Wechsel. Keine Zusatzkosten, keine langen Fristen. Täglich kündbar.' },
              { q: 'Woher weiß Primundus ob eine Kraft gut ist?', a: 'Aus 20+ Jahren Erfahrung und 60.000+ Einsätzen. Primundus kennt die Qualitätskriterien die in der Praxis entscheiden — Deutschkenntnisse, Belastbarkeit, Empathie, Strukturfähigkeit. Und holt aktiv Feedback von Familien ein.' },
            ].map((item, i) => (
              <details key={i} className="bg-white rounded-xl border border-[#E5E3DF] group">
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                  <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">{item.q}</h3>
                  <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-4">
                  <p className="text-[15px] text-[#2E2E2E] leading-relaxed">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
          <ArticleCTA />
        </div>
      </div>
    </>
  )
}
