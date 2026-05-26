import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [
  { id: 'was-ist', title: 'Was ist 24-Stunden-Pflege?' },
  { id: 'leistungen', title: 'Was leistet Primundus?' },
  { id: 'kosten', title: 'Kosten & Kassenzuschüsse' },
  { id: 'ablauf', title: 'Ablauf & Start' },
  { id: 'vorteile', title: 'Vorteile gegenüber Pflegeheim' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege — Testsieger & täglich kündbar | Primundus',
  description: '24h-Pflege von Primundus: Geprüfte Betreuungskraft im Haushalt, täglich kündbar, in 4–7 Tagen startklar. Testsieger DIE WELT. Ab 2.200 €/Monat.',
  alternates: { canonical: 'https://primundus.de/24-stunden-pflege/' },
  openGraph: {
    title: '24-Stunden-Pflege | Primundus — Testsieger & 20 Jahre Erfahrung',
    description: 'Geprüfte Betreuungskraft im Haushalt, täglich kündbar, in 4–7 Tagen startklar. Testsieger DIE WELT.',
    url: 'https://primundus.de/24-stunden-pflege/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: '/images/primundus_logo_header.webp' }],
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: '24-Stunden-Pflege',
    provider: {
      '@type': 'Organization',
      name: 'Primundus',
      url: 'https://primundus.de',
      telephone: '+4989200000830',
      award: 'Testsieger DIE WELT',
    },
    description: 'Vermittlung geprüfter Betreuungskräfte für die häusliche 24-Stunden-Pflege in Deutschland. Täglich kündbar, taggenaue Abrechnung, Start in 4–7 Tagen.',
    areaServed: 'DE',
    serviceType: '24-Stunden-Pflege',
    offers: { '@type': 'Offer', priceRange: '2200-3500 €/Monat' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24-Stunden-Pflege', item: 'https://primundus.de/24-stunden-pflege/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was ist 24-Stunden-Pflege?', acceptedAnswer: { '@type': 'Answer', text: '24-Stunden-Pflege bedeutet: Eine Betreuungskraft lebt dauerhaft im Haushalt des Pflegebedürftigen und ist rund um die Uhr erreichbar — für Grundpflege, Haushaltsführung und Gesellschaft. Sie ist die meistgenutzte Alternative zum Pflegeheim in Deutschland.' } },
      { '@type': 'Question', name: 'Was kostet 24-Stunden-Pflege bei Primundus?', acceptedAnswer: { '@type': 'Answer', text: 'Bei Primundus kostet 24h-Pflege 2.200–3.500 Euro pro Monat, je nach Pflegebedarf. Mit Pflegegeld (bis 990 €/Monat) und Entlastungsbudget (3.539 €/Jahr) sinkt der Eigenanteil deutlich. Kostenlose Beratung: 089 200 000 830.' } },
      { '@type': 'Question', name: 'Wie schnell kann 24h-Pflege starten?', acceptedAnswer: { '@type': 'Answer', text: 'Mit Primundus ist die Betreuungskraft typischerweise innerhalb von 4 bis 7 Tagen nach dem ersten Gespräch vor Ort — täglich kündbar, taggenaue Abrechnung.' } },
      { '@type': 'Question', name: 'Ist 24-Stunden-Pflege bei Primundus legal?', acceptedAnswer: { '@type': 'Answer', text: 'Ja — Primundus vermittelt ausschließlich im rechtssicheren Entsendemodell. Alle Betreuungskräfte sind im Heimatland sozialversichert und mit A1-Bescheinigung legal in Deutschland tätig.' } },
      { '@type': 'Question', name: 'Warum ist Primundus Testsieger?', acceptedAnswer: { '@type': 'Answer', text: 'Primundus wurde bei DIE WELT im größten deutschen 24h-Pflege Vergleichstest als Testsieger ausgezeichnet — für die beste Kombination aus Preis, Qualität und Kundenservice. Seit 2004 über 60.000 Betreuungen vermittelt.' } },
    ],
  },
]

export default function VierUndZwanzigStundenPflege() {
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
            <span className="text-[#1C1C1C]">24-Stunden-Pflege</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            Testsieger DIE WELT · 20+ Jahre Erfahrung · 60.000+ Betreuungen
          </p>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            24-Stunden-Pflege — geprüft, rechtssicher & täglich kündbar
          </h1>

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            Primundus vermittelt seit 2004 geprüfte Betreuungskräfte für die häusliche 24-Stunden-Pflege — rechtssicher im Entsendemodell, täglich kündbar, in 4–7 Tagen startklar. Ab 2.200 Euro pro Monat. Testsieger DIE WELT.
          </p>

          {/* USP-Box */}
          <div className="bg-white border-2 border-[#8B7355] rounded-2xl p-6 mb-10 shadow-sm">
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#A89279] mb-3">Warum Primundus?</p>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { icon: '★', title: 'Testsieger DIE WELT', desc: 'Bestes Preis-Leistungs-Verhältnis im größten deutschen Vergleichstest' },
                { icon: '✓', title: 'Rechtssicher', desc: 'Entsendemodell mit A1-Bescheinigung — kein rechtliches Risiko für die Familie' },
                { icon: '↺', title: 'Täglich kündbar', desc: 'Keine Mindestlaufzeit, taggenaue Abrechnung — volle Flexibilität' },
                { icon: '⚡', title: 'In 4–7 Tagen startklar', desc: 'Vom ersten Gespräch bis zur Anreise der Betreuungskraft' },
                { icon: '🛡', title: 'Ersatzkraft bei Ausfall', desc: 'Primundus stellt sofort Ersatz — kein Versorgungsausfall' },
                { icon: '♥', title: 'Persönliche Beratung', desc: 'Ilka Wysocki & Team, Mo – So 8 – 20 Uhr, 7 Tage/Woche erreichbar' },
              ].map((usp) => (
                <div key={usp.title} className="flex items-start gap-3">
                  <span className="text-[#8B7355] text-[18px] flex-shrink-0 w-6 text-center">{usp.icon}</span>
                  <div>
                    <p className="text-[14px] font-bold text-[#1C1C1C]">{usp.title}</p>
                    <p className="text-[13px] text-[#8B8B8B]">{usp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 1 */}
          <h2 id="was-ist" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Was ist 24-Stunden-Pflege?
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">
            24-Stunden-Pflege bedeutet: Eine Betreuungskraft zieht dauerhaft in den Haushalt des Pflegebedürftigen ein und ist rund um die Uhr vor Ort. Sie übernimmt Grundpflege, Haushaltsführung und Gesellschaft — und ermöglicht es, im eigenen Zuhause zu bleiben statt ins Pflegeheim zu wechseln.
          </p>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            In Deutschland nutzen schätzungsweise 300.000 bis 400.000 Haushalte eine 24h-Betreuung durch Kräfte aus EU-Ländern. Von den rund 6 Millionen Pflegebedürftigen werden 86 Prozent zu Hause versorgt — 24h-Pflege ist damit die intensivste Form der häuslichen Betreuung.
          </p>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Ausführliche Erklärung:{' '}
            <a href="/was-ist-24-stunden-pflege/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Was ist 24-Stunden-Pflege? — alle Fakten</a>
          </p>

          {/* SECTION 2 */}
          <h2 id="leistungen" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Was leistet Primundus?
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Primundus vermittelt — das bedeutet: Wir suchen, prüfen und organisieren die passende Betreuungskraft für Ihre Situation. Die Kraft ist bei einem EU-Partnerunternehmen angestellt und wird im Entsendemodell nach Deutschland entsandt.
          </p>
          <div className="space-y-3 mb-6">
            {[
              { title: 'Grundpflege', desc: 'Körperhygiene, Ankleiden, Nahrungsaufnahme, Lagerung, Mobilisierung — die tägliche körperliche Unterstützung.' },
              { title: 'Haushaltsführung', desc: 'Kochen, Einkaufen, Putzen, Wäsche, Begleitung zu Arztterminen — vollständige Haushaltsführung.' },
              { title: 'Betreuung und Gesellschaft', desc: 'Gespräche, Spaziergänge, Tagesstruktur, emotionale Begleitung — besonders wertvoll bei Demenz.' },
              { title: 'Qualitätssicherung', desc: 'Regelmäßiger Kontakt mit Primundus, Qualitätschecks, nahtloser Kraftwechsel alle 6–8 Wochen.' },
              { title: 'Ersatzkraft bei Ausfall', desc: 'Wird die Betreuungskraft krank oder fällt aus — Primundus stellt sofort Ersatz. Kein Versorgungsausfall.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.title}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Vollständige Leistungsübersicht:{' '}
            <a href="/leistungen/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Was Primundus leistet</a>
            {' · '}
            <a href="/rechtssicher/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Rechtssicherheit & Entsendemodell</a>
          </p>

          {/* SECTION 3 */}
          <h2 id="kosten" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Kosten & Kassenzuschüsse 2026
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Die monatlichen Kosten liegen bei 2.200–3.500 Euro je nach Pflegebedarf. Mit Kassenzuschüssen sinkt der Eigenanteil deutlich — und ist oft günstiger als ein Pflegeheim.
          </p>

          <div className="bg-white rounded-2xl border border-[#E5E3DF] overflow-hidden mb-6 shadow-sm">
            <div className="px-5 py-3 bg-[#F8F7F5] border-b border-[#E5E3DF]">
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#8B8B8B]">Kassenzuschüsse 2026 — Pflegegeld je Pflegegrad</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#F8F7F5]">
                    {['Pflegegrad', 'Pflegegeld/Monat', '+ Entlastungsbetrag', 'Entlastungsbudget/Jahr'].map(h => (
                      <th key={h} className="px-4 py-3 text-[12px] font-semibold text-[#8B8B8B] text-left border-b border-[#E5E3DF]">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['PG 2', '347 €', '131 €', '3.539 €'],
                    ['PG 3', '599 €', '131 €', '3.539 €'],
                    ['PG 4', '800 €', '131 €', '3.539 €'],
                    ['PG 5', '990 €', '131 €', '3.539 €'],
                  ].map(([grad, pg, eb, budget], i) => (
                    <tr key={grad} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8F7F5]'}>
                      <td className="px-4 py-3 text-[14px] font-semibold text-[#1C1C1C] border-b border-[#E5E3DF]">{grad}</td>
                      <td className="px-4 py-3 text-[14px] font-bold text-[#3D7A5C] border-b border-[#E5E3DF]">{pg}</td>
                      <td className="px-4 py-3 text-[14px] text-[#2E2E2E] border-b border-[#E5E3DF]">{eb}</td>
                      <td className="px-4 py-3 text-[14px] text-[#2E2E2E] border-b border-[#E5E3DF]">{budget}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-5 py-2">
              <p className="text-[11px] text-[#8B8B8B]">Stand 2026 · Entlastungsbudget: gemeinsames Budget für Verhinderungs- und Kurzzeitpflege seit Juli 2025</p>
            </div>
          </div>

          <p className="text-[15px] text-[#2E2E2E] mb-3">
            → Alle Kosten im Detail:{' '}
            <a href="/kosten/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Was kostet 24h-Pflege? — vollständige Übersicht</a>
          </p>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Alle Zuschüsse optimal nutzen:{' '}
            <a href="/finanzierung/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Finanzierung — alle Kassenzuschüsse 2026</a>
          </p>

          {/* SECTION 4 */}
          <h2 id="ablauf" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Ablauf — in 4–7 Tagen zur Betreuungskraft
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Von der ersten Anfrage bis zur Anreise der Betreuungskraft vergehen bei Primundus typischerweise 4 bis 7 Tage.
          </p>
          <ol className="space-y-3 mb-6">
            {[
              { n: '1', title: 'Kostenloses Beratungsgespräch', desc: 'Pflegesituation, Erkrankungen, besondere Anforderungen erfassen. Kein Auftrag, kein Risiko.' },
              { n: '2', title: 'Individuelles Angebot', desc: 'Transparente Kosten, klarer Leistungsumfang, faire Vertragsbedingungen — meist innerhalb von Stunden.' },
              { n: '3', title: 'Kraft auswählen', desc: 'Profil prüfen, Telefonat vorab möglich. A1-Bescheinigung liegt vor.' },
              { n: '4', title: 'Anreise & Start', desc: 'Betreuungskraft trifft ein, Angehörige übergeben alle relevanten Informationen.' },
              { n: '5', title: 'Laufende Betreuung', desc: 'Qualitätssicherung durch Primundus, Kraftwechsel alle 6–8 Wochen, Ersatz bei Ausfall.' },
            ].map((step) => (
              <li key={step.n} className="flex gap-4 bg-white rounded-xl p-5 border border-[#E5E3DF] list-none">
                <span className="w-8 h-8 rounded-full bg-[#8B7355] text-white font-bold text-[15px] flex items-center justify-center flex-shrink-0">{step.n}</span>
                <div>
                  <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{step.title}</p>
                  <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Schritt für Schritt erklärt:{' '}
            <a href="/ablauf/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Ablauf der 24h-Pflege bei Primundus</a>
          </p>

          {/* SECTION 5 */}
          <h2 id="vorteile" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Vorteile gegenüber dem Pflegeheim
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Der Eigenanteil im Pflegeheim liegt bundesweit bei durchschnittlich 2.871 Euro pro Monat — und steigt jährlich. 24h-Pflege zuhause ist damit oft nicht teurer, bietet aber deutlich mehr.
          </p>
          <div className="bg-white rounded-2xl border border-[#E5E3DF] overflow-hidden mb-6 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#F8F7F5]">
                    <th className="px-5 py-3 text-[12px] font-semibold text-[#8B8B8B] text-left border-b border-[#E5E3DF]">Kriterium</th>
                    <th className="px-5 py-3 text-[12px] font-semibold text-[#8B7355] text-left border-b border-[#E5E3DF]">24h-Pflege zuhause</th>
                    <th className="px-5 py-3 text-[12px] font-semibold text-[#8B8B8B] text-left border-b border-[#E5E3DF]">Pflegeheim</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Eigenanteil/Monat', 'ab ca. 1.500 € (mit Zuschüssen)', 'Ø 2.871 € (2026)'],
                    ['Vertraute Umgebung', '✓ Eigenes Zuhause', '✗ Neue Einrichtung'],
                    ['Betreuungsintensität', '1:1 rund um die Uhr', 'Geteilte Betreuung'],
                    ['Eigener Tagesrhythmus', '✓ Vollständig erhalten', '✗ Heimstruktur'],
                    ['Angehörige einbinden', '✓ Jederzeit möglich', 'Besuchszeiten'],
                    ['Kündigung', 'Täglich möglich', 'Meist Kündigungsfristen'],
                  ].map(([kriterium, zuhause, heim], i) => (
                    <tr key={kriterium} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8F7F5]'}>
                      <td className="px-5 py-3 text-[14px] font-semibold text-[#1C1C1C] border-b border-[#E5E3DF]">{kriterium}</td>
                      <td className="px-5 py-3 text-[14px] text-[#3D7A5C] font-medium border-b border-[#E5E3DF]">{zuhause}</td>
                      <td className="px-5 py-3 text-[14px] text-[#8B8B8B] border-b border-[#E5E3DF]">{heim}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Detaillierter Vergleich:{' '}
            <a href="/24h-pflege-vs-pflegeheim-kosten/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">24h-Pflege vs. Pflegeheim — Kostenvergleich 2026</a>
          </p>

          {/* FAQ */}
          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">
            Häufige Fragen zur 24-Stunden-Pflege
          </h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Was ist 24-Stunden-Pflege?', a: 'Eine Betreuungskraft lebt dauerhaft im Haushalt und ist rund um die Uhr erreichbar — für Grundpflege, Haushalt und Gesellschaft. Sie ist die meistgenutzte Alternative zum Pflegeheim in Deutschland.' },
              { q: 'Was kostet 24-Stunden-Pflege bei Primundus?', a: '2.200–3.500 €/Monat je nach Pflegebedarf. Mit Pflegegeld (bis 990 €/Monat) und Entlastungsbudget (3.539 €/Jahr) sinkt der Eigenanteil erheblich. Kostenlose Beratung: 089 200 000 830.' },
              { q: 'Wie schnell kann 24h-Pflege bei Primundus starten?', a: 'In 4–7 Tagen nach dem ersten Gespräch — täglich kündbar, taggenaue Abrechnung.' },
              { q: 'Ist 24-Stunden-Pflege bei Primundus legal?', a: 'Ja — Primundus vermittelt ausschließlich im Entsendemodell mit A1-Bescheinigung. Vollständig rechtssicher, kein Risiko für die Familie.' },
              { q: 'Warum ist Primundus Testsieger?', a: 'Testsieger DIE WELT im größten deutschen Vergleichstest — für beste Kombination aus Preis, Qualität und Kundenservice. Seit 2004, 60.000+ Betreuungen.' },
              { q: 'Was passiert wenn die Betreuungskraft krank wird?', a: 'Primundus stellt sofort eine Ersatzkraft — ohne Versorgungslücke. Das ist einer der zentralen Vorteile der Agenturvermittlung.' },
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

          {/* Weitere Artikel */}
          <div className="mt-12 mb-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#A89279] mb-2">Alle Artikel zur 24h-Pflege</p>
            <h2 className="text-[22px] font-bold text-[#1C1C1C] mb-6">Weitere Themen im Überblick</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Grundlagen */}
              <div className="bg-white border border-[#E5E3DF] rounded-xl p-4">
                <p className="text-[14px] font-bold text-[#3D3D3D] mb-2">Grundlagen</p>
                <a href="/was-ist-24-stunden-pflege/" className="text-[13px] text-[#8B7355] hover:underline block py-0.5">› Was ist 24h-Pflege?</a>
                <a href="/wann-brauche-ich-24h-pflege/" className="text-[13px] text-[#8B7355] hover:underline block py-0.5">› Wann brauche ich 24h-Pflege?</a>
                <a href="/vorteile-24h-pflege/" className="text-[13px] text-[#8B7355] hover:underline block py-0.5">› Vorteile der 24h-Pflege</a>
                <a href="/nachteile-24h-pflege/" className="text-[13px] text-[#8B7355] hover:underline block py-0.5">› Nachteile ehrlich betrachtet</a>
              </div>

              {/* Ablauf & Organisation */}
              <div className="bg-white border border-[#E5E3DF] rounded-xl p-4">
                <p className="text-[14px] font-bold text-[#3D3D3D] mb-2">Ablauf & Organisation</p>
                <a href="/ablauf/" className="text-[13px] text-[#8B7355] hover:underline block py-0.5">› So läuft's ab</a>
                <a href="/24h-pflege-organisieren/" className="text-[13px] text-[#8B7355] hover:underline block py-0.5">› 24h-Pflege organisieren</a>
                <a href="/pflegekraft-finden/" className="text-[13px] text-[#8B7355] hover:underline block py-0.5">› Pflegekraft finden</a>
                <a href="/checkliste-pflegekraft-einstellen/" className="text-[13px] text-[#8B7355] hover:underline block py-0.5">› Checkliste: Pflegekraft einstellen</a>
              </div>

              {/* Vergleiche */}
              <div className="bg-white border border-[#E5E3DF] rounded-xl p-4">
                <p className="text-[14px] font-bold text-[#3D3D3D] mb-2">Vergleiche</p>
                <a href="/24h-pflege-vs-pflegeheim/" className="text-[13px] text-[#8B7355] hover:underline block py-0.5">› 24h-Pflege vs. Pflegeheim</a>
                <a href="/24h-pflege-vs-ambulante-pflege/" className="text-[13px] text-[#8B7355] hover:underline block py-0.5">› vs. ambulante Pflege</a>
                <a href="/selbst-pflegen-oder-24h-pflege/" className="text-[13px] text-[#8B7355] hover:underline block py-0.5">› Selbst pflegen oder 24h-Pflege?</a>
                <a href="/tagespflege-vs-24h-betreuung/" className="text-[13px] text-[#8B7355] hover:underline block py-0.5">› vs. Tagespflege</a>
              </div>

              {/* Pflegekräfte */}
              <div className="bg-white border border-[#E5E3DF] rounded-xl p-4">
                <p className="text-[14px] font-bold text-[#3D3D3D] mb-2">Pflegekräfte</p>
                <a href="/pflegekraft-aus-rumaenien/" className="text-[13px] text-[#8B7355] hover:underline block py-0.5">› Pflegekraft aus Rumänien</a>
                <a href="/pflegekraft-aus-polen/" className="text-[13px] text-[#8B7355] hover:underline block py-0.5">› aus Polen</a>
                <a href="/pflegekraft-aus-bulgarien/" className="text-[13px] text-[#8B7355] hover:underline block py-0.5">› aus Bulgarien</a>
                <a href="/eu-pflegekraft-rechte-pflichten/" className="text-[13px] text-[#8B7355] hover:underline block py-0.5">› EU-Pflegekraft: Rechte & Pflichten</a>
              </div>
            </div>
          </div>

          <ArticleCTA />
        </div>
      </div>
    </>
  )
}
