import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'

export const metadata: Metadata = {
  title: '24h-Pflege-Anbieter im Vergleich 2026 | Primundus',
  description: 'Primundus im Vergleich: Sofortangebot, täglich kündbar, tagsgenaue Abrechnung, Pflegekräfte im Kundenportal. Was andere 24h-Pflege-Anbieter nicht leisten.',
  alternates: { canonical: 'https://primundus.de/anbieter-vergleich/' },
  openGraph: {
    title: '24h-Pflege-Anbieter im Vergleich 2026 | Primundus',
    description: 'Sofortangebot statt Wartezeit, täglich kündbar statt 14 Tage, tagsgenaue Abrechnung — Primundus vs. andere 24h-Anbieter.',
    url: 'https://primundus.de/anbieter-vergleich/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: '/images/primundus_logo_header.webp' }],
  },
}

const schemaMarkup = JSON.stringify([
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Tools & Rechner', item: 'https://primundus.de/tools/' },
      { '@type': 'ListItem', position: 3, name: 'Anbieter-Vergleich', item: 'https://primundus.de/anbieter-vergleich/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was unterscheidet Primundus von anderen 24h-Pflegeanbietern?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Primundus ist Testsieger bei DIE WELT und bietet als einziger Anbieter ein Sofortangebot mit direkt einsehbaren Pflegekräften im Kundenportal. Verträge sind täglich kündbar (andere: meist 14 Tage), die Abrechnung erfolgt tagesgenau, und alle Pflegekräfte sind fest bei Primundus angestellt.',
        },
      },
      {
        '@type': 'Question',
        name: 'Kann ich den Vertrag bei Primundus jederzeit kündigen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ja. Primundus-Verträge sind täglich kündbar — ohne Mindestlaufzeit, ohne Fristen. Die meisten anderen 24h-Anbieter haben Kündigungsfristen von 14 Tagen oder mehr.',
        },
      },
      {
        '@type': 'Question',
        name: 'Was bedeutet tagsgenaue Abrechnung?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sie zahlen nur für Tage, an denen die Betreuungskraft tatsächlich im Einsatz ist — nicht für Ausfälle, Krankheit oder Urlaub der Kraft. Bei monatlichen Pauschalen zahlen Sie immer den vollen Betrag.',
        },
      },
      {
        '@type': 'Question',
        name: 'Was ist das Primundus Kundenportal?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Im Primundus Kundenportal sehen Familien verfügbare Pflegekräfte sofort — mit Profil, Erfahrung und Verfügbarkeit. Dieses Feature gibt es ausschließlich bei Primundus.',
        },
      },
    ],
  },
])

const rows: { feature: string; desc: string; primundus: string; andere: string; noIcon?: boolean }[] = [
  {
    feature: 'Angebot',
    desc: 'Wie schnell erhalten Sie ein Angebot?',
    primundus: 'Sofortangebot',
    andere: '2–5 Werktage',
  },
  {
    feature: 'Pflegekräfte einsehen',
    desc: 'Vorab im Kundenportal einsehbar?',
    primundus: 'Sofort im Kundenportal',
    andere: 'Nicht möglich',
  },
  {
    feature: 'Erfahrung',
    desc: 'Nachgewiesene Einsätze',
    primundus: '60.000+ Einsätze',
    andere: 'Oft keine Angaben',
  },
  {
    feature: 'Kündigung',
    desc: 'Wie kurzfristig kündbar?',
    primundus: 'Täglich',
    andere: 'Meist 14 Tage',
  },
  {
    feature: 'Abrechnung',
    desc: 'Wie wird abgerechnet?',
    primundus: 'Tagesgenau',
    andere: 'Monatspauschale',
  },
  {
    feature: 'Pflegekräfte',
    desc: 'Angestellt oder vermittelt?',
    primundus: 'Eigene Festangestellte',
    andere: 'Oft Vermittlung',
  },
  {
    feature: 'Qualitätskontrolle',
    desc: 'Werden Einsätze geprüft?',
    primundus: 'Regelmäßig & systematisch',
    andere: 'Selten',
  },
  {
    feature: 'Beratung',
    desc: 'Persönliche Erreichbarkeit',
    primundus: 'Mo–So 8–20 Uhr',
    andere: 'Eingeschränkt',
  },
  {
    feature: 'Preistransparenz',
    desc: 'Alle Kosten klar ausgewiesen?',
    primundus: 'Vollständig transparent',
    andere: 'Oft versteckte Kosten',
  },
  {
    feature: 'Kosten',
    desc: 'Monatlich (ohne Zuschüsse)',
    primundus: 'Ab 2.200 €/Monat',
    andere: 'Oft ab 2.500 €',
    noIcon: true,
  },
  {
    feature: 'Auszeichnung',
    desc: 'Unabhängige Bewertung',
    primundus: 'Testsieger DIE WELT',
    andere: '—',
  },
]

const faqs = [
  {
    q: 'Was unterscheidet Primundus von anderen 24h-Pflegeanbietern?',
    a: 'Primundus ist Testsieger bei DIE WELT und bietet als einziger Anbieter ein Sofortangebot mit direkt einsehbaren Pflegekräften im Kundenportal. Verträge sind täglich kündbar, die Abrechnung erfolgt tagesgenau, alle Pflegekräfte sind fest bei Primundus angestellt.',
  },
  {
    q: 'Kann ich den Vertrag bei Primundus jederzeit kündigen?',
    a: 'Ja. Primundus-Verträge sind täglich kündbar — ohne Mindestlaufzeit, ohne Fristen. Die meisten anderen 24h-Anbieter haben Kündigungsfristen von 14 Tagen oder mehr.',
  },
  {
    q: 'Was bedeutet tagsgenaue Abrechnung?',
    a: 'Sie zahlen nur für Tage, an denen die Betreuungskraft tatsächlich im Einsatz ist. Bei monatlichen Pauschalen (üblich bei anderen Anbietern) zahlen Sie auch für krankheits- oder urlaubsbedingte Ausfälle.',
  },
  {
    q: 'Was ist das Primundus Kundenportal?',
    a: 'Im Primundus Kundenportal sehen Familien verfügbare Pflegekräfte sofort — mit Profil, Erfahrung und Verfügbarkeit. Dieses Feature gibt es ausschließlich bei Primundus.',
  },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaMarkup }} />
      <div className="min-h-screen bg-[#F8F7F5]">
        <div className="max-w-[800px] mx-auto px-5 py-14">

          {/* Breadcrumb */}
          <nav className="text-sm text-[#8B8B8B] mb-8 flex items-center gap-2 flex-wrap" aria-label="Breadcrumb">
            <a href="/" className="hover:text-[#8B7355] transition-colors">Startseite</a>
            <span aria-hidden="true">›</span>
            <a href="/tools/" className="hover:text-[#8B7355] transition-colors">Tools & Rechner</a>
            <span aria-hidden="true">›</span>
            <span className="text-[#3D3D3D]">Anbieter-Vergleich</span>
          </nav>

          {/* Header */}
          <p className="text-[11px] font-bold uppercase tracking-wider text-[#A89279] mb-3">TOOLS & RECHNER</p>
          <h1 className="text-[32px] md:text-[40px] font-bold text-[#3D3D3D] leading-tight mb-4">
            Primundus vs. andere 24h-Anbieter
          </h1>
          <p className="text-[16px] text-[#5A5A5A] leading-relaxed mb-10 max-w-[680px]">
            Primundus ist <strong className="text-[#3D3D3D]">Testsieger bei DIE WELT</strong> und mit über <strong className="text-[#3D3D3D]">60.000 erfolgreichen Einsätzen</strong> einer der erfahrensten 24h-Pflegeanbieter in Deutschland.
            Während andere Anbieter Tage brauchen, gibt es bei Primundus ein <strong className="text-[#3D3D3D]">Sofortangebot</strong> — mit verfügbaren Pflegekräften sofort im Kundenportal einsehbar, so bei keinem anderen Anbieter.
            Verträge sind <strong className="text-[#3D3D3D]">täglich kündbar</strong> (andere: meist 14 Tage), die Abrechnung erfolgt <strong className="text-[#3D3D3D]">tagesgenau</strong> statt als Monatspauschale, alle Pflegekräfte sind fest bei Primundus angestellt — ohne Vermittler dazwischen, weshalb die Kosten <strong className="text-[#3D3D3D]">ab 2.200 €/Monat</strong> statt oft 2.500 € bei anderen Anbietern beginnen. Das Beratungsteam ist <strong className="text-[#3D3D3D]">Mo–So 8–20 Uhr</strong> erreichbar.
          </p>

          {/* Comparison Table */}
          <section className="mb-14">
            <h2 className="text-[22px] font-bold text-[#3D3D3D] mb-6">Direkter Vergleich</h2>

            <div className="overflow-x-auto -mx-5 px-5">
            <div className="rounded-2xl overflow-hidden border border-[#E5E3DF] min-w-[520px]">
              <table className="w-full border-collapse">
                <colgroup>
                  <col style={{ width: '38%' }} />
                  <col style={{ width: '33%' }} />
                  <col style={{ width: '29%' }} />
                </colgroup>
                <thead>
                  <tr>
                    <th className="bg-[#F8F7F5] px-3 py-3 text-left text-[11px] font-bold uppercase tracking-wider text-[#8B8B8B] border-b border-[#E5E3DF]">
                      Kriterium
                    </th>
                    <th className="bg-[#2E2319] px-3 py-3 text-left border-b border-[#1A110A]">
                      <span className="block text-[13px] font-black text-white">Primundus</span>
                      <span className="block text-[10px] text-[#C5B89E] mt-0.5">24h-Pflege</span>
                    </th>
                    <th className="bg-[#F8F7F5] px-3 py-3 text-left text-[11px] font-bold text-[#8B8B8B] border-b border-[#E5E3DF]">
                      Andere<br />24h-Anbieter
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={i % 2 === 0 ? 'bg-white' : 'bg-[#FDFCFA]'}
                    >
                      <td className={`px-3 py-3 align-middle ${i < rows.length - 1 ? 'border-b border-[#F0EDE8]' : ''}`}>
                        <p className="text-[13px] font-semibold text-[#3D3D3D]">{row.feature}</p>
                        <p className="text-[11px] text-[#A0A0A0] mt-0.5 leading-snug">{row.desc}</p>
                      </td>
                      <td className={`px-3 py-3 bg-[#F8F4EF] align-middle border-x border-[#E5DDD3] ${i < rows.length - 1 ? 'border-b border-[#EAE3D8]' : ''}`}>
                        <span className="flex items-center gap-1">
                          <span className="text-[#3D7A5C] font-bold text-[12px] flex-shrink-0">✓</span>
                          <span className="text-[12px] font-semibold text-[#3D3D3D] leading-snug">{row.primundus}</span>
                        </span>
                      </td>
                      <td className={`px-3 py-3 align-middle ${i < rows.length - 1 ? 'border-b border-[#F0EDE8]' : ''}`}>
                        <span className="flex items-center gap-1">
                          {row.andere !== '—' && !row.noIcon && <span className="text-[#B91C1C] font-bold text-[12px] flex-shrink-0">✗</span>}
                          <span className="text-[12px] text-[#8B8B8B] leading-snug">{row.andere}</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            </div>
          </section>

          {/* CTA Banner */}
          <div className="bg-[#2E2319] rounded-2xl p-6 md:p-8 mb-14 flex flex-col md:flex-row gap-5 md:items-center">
            <div className="flex-1">
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#C5B89E] mb-2">Kostenlos & unverbindlich</p>
              <h2 className="text-[20px] font-bold text-white mb-2">Sofortangebot anfordern</h2>
              <p className="text-[14px] text-[#C5B89E] leading-relaxed max-w-[380px]">
                In 2 Minuten zum persönlichen Angebot — inkl. Kosten, Zuschüsse und passende
                Pflegekräfte für Ihre Region.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a
                href="https://kostenrechner.primundus.de"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#E76F63] hover:bg-[#D45F53] transition-colors text-white font-bold text-[15px] px-6 py-3.5 rounded-xl"
              >
                Angebot anfordern →
              </a>
              <a
                href="tel:+4989200000830"
                className="inline-flex items-center justify-center border border-[#C5B89E] text-[#C5B89E] hover:bg-[#3D2E22] transition-colors font-semibold text-[14px] px-5 py-3.5 rounded-xl"
              >
                089 200 000 830
              </a>
            </div>
          </div>

          {/* FAQ */}
          <section className="mb-14">
            <h2 className="text-[22px] font-bold text-[#3D3D3D] mb-6">Häufige Fragen</h2>
            <div className="flex flex-col gap-3">
              {faqs.map((faq) => (
                <details key={faq.q} className="bg-white border border-[#E5E3DF] rounded-2xl overflow-hidden group">
                  <summary className="px-5 py-4 flex items-center justify-between gap-3 cursor-pointer list-none select-none hover:bg-[#FDFCFA] transition-colors">
                    <span className="text-[15px] font-semibold text-[#3D3D3D] leading-snug">{faq.q}</span>
                    <span className="text-[#8B7355] text-[20px] flex-shrink-0 leading-none transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <div className="px-5 pb-5 pt-1 border-t border-[#F0EDE8]">
                    <p className="text-[14px] text-[#5A5A5A] leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Related tools */}
          <section className="mb-14">
            <h2 className="text-[18px] font-bold text-[#3D3D3D] mb-4">Weitere hilfreiche Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { href: '/pflegeheim-kostenvergleich/', label: 'Pflegeheim-Kostenvergleich', desc: 'Pflegeheim vs. 24h-Pflege im Vergleich' },
                { href: '/zuschuss-rechner/', label: 'Zuschuss-Rechner', desc: 'Alle Förderleistungen 2026' },
                { href: 'https://kostenrechner.primundus.de', label: '24h-Kosten berechnen', desc: 'Eigenanteil individuell ermitteln', external: true },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  {...('external' in item && item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="bg-white border border-[#E5E3DF] rounded-xl px-4 py-3.5 hover:border-[#8B7355] transition-colors"
                >
                  <p className="text-[14px] font-semibold text-[#3D3D3D] mb-0.5">→ {item.label}</p>
                  <p className="text-[12px] text-[#8B8B8B]">{item.desc}</p>
                </a>
              ))}
            </div>
          </section>

          <ArticleCTA />

        </div>
      </div>
    </>
  )
}
