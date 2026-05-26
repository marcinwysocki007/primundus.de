import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'

export const metadata: Metadata = {
  title: 'Pflege vergleichen — alle Vergleiche auf einen Blick | Primundus',
  description: 'Pflegeformen, Kosten und Betreuungsmodelle vergleichen: 24h-Pflege vs. Pflegeheim, ambulante Pflege, Tagespflege, osteuropäische Pflegekräfte. Alle Vergleiche.',
  alternates: { canonical: 'https://primundus.de/vergleiche/' },
  openGraph: {
    title: 'Pflege vergleichen | Primundus',
    description: 'Alle Pflegevergleiche auf einen Blick — von Pflegeheim vs. 24h bis ambulant vs. stationär.',
    url: 'https://primundus.de/vergleiche/',
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
      { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://primundus.de/ratgeber/' },
      { '@type': 'ListItem', position: 3, name: 'Vergleiche', item: 'https://primundus.de/vergleiche/' },
    ],
  },
])

export default function Vergleiche() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaMarkup }} />

      <div className="min-h-screen bg-[#F8F7F5]">
        <div className="max-w-[900px] mx-auto px-5 py-14">

          {/* Breadcrumb */}
          <nav className="text-[13px] text-[#8B8B8B] mb-8 flex items-center gap-2">
            <a href="/" className="hover:text-[#8B7355] transition-colors">Startseite</a>
            <span>›</span>
            <a href="/ratgeber/" className="hover:text-[#8B7355] transition-colors">Ratgeber</a>
            <span>›</span>
            <span className="text-[#5A5A5A]">Vergleiche</span>
          </nav>

          {/* Header */}
          <p className="text-[11px] font-bold uppercase tracking-wider text-[#A89279] mb-3">
            RATGEBER
          </p>
          <h1 className="text-[32px] md:text-[42px] font-bold text-[#3D3D3D] leading-tight mb-4">
            Pflege vergleichen
          </h1>
          <p className="text-[17px] text-[#5A5A5A] leading-relaxed mb-12 max-w-[620px]">
            Alle ehrlichen Vergleiche — mit konkreten Zahlen, klaren Kriterien und ohne Schönfärberei.
          </p>

          {/* Pflegeformen vergleichen */}
          <h2 className="text-[20px] font-bold text-[#3D3D3D] mb-4">Pflegeformen vergleichen</h2>
          <div className="grid gap-3 mb-10">
            {[
              { titel: '24h-Pflege vs. Pflegeheim', href: '/24h-pflege-vs-pflegeheim/', desc: 'Der vollständige Vergleich — Kosten, Lebensqualität und wann welche Form besser passt.' },
              { titel: '24h-Pflege vs. Pflegeheim — Kosten', href: '/24h-pflege-vs-pflegeheim-kosten/', desc: 'Detaillierter Kostenvergleich mit konkreten Zahlen für 2026.' },
              { titel: '24h-Pflege vs. ambulante Pflege', href: '/24h-pflege-vs-ambulante-pflege/', desc: 'Wann reicht ein ambulanter Pflegedienst — und wann wird eine 24h-Kraft nötig?' },
              { titel: 'Ambulante vs. stationäre Pflege', href: '/ambulante-vs-stationaere-pflege/', desc: 'Unterschiede, Kosten und wann welche Versorgungsform die richtige Wahl ist.' },
              { titel: 'Tagespflege vs. 24h-Betreuung', href: '/tagespflege-vs-24h-betreuung/', desc: 'Tagespflege entlastet tagsüber — 24h-Betreuung ist immer da. Wann was besser passt.' },
              { titel: 'Pflegedienst oder 24h-Kraft', href: '/pflegedienst-oder-24h-kraft/', desc: 'Ambulanter Pflegedienst vs. 24h-Betreuungskraft — der direkte Vergleich.' },
              { titel: 'Kurzzeitpflege oder 24h-Pflege', href: '/kurzzeitpflege-oder-24h-pflege/', desc: 'Wann Kurzzeitpflege reicht und wann eine dauerhaft 24h-Kraft nötig ist.' },
            ].map((item) => (
              <a key={item.titel} href={item.href} className="bg-white border border-[#E5E3DF] rounded-xl p-5 hover:border-[#8B7355] hover:shadow-sm transition-all group">
                <p className="text-[15px] font-bold text-[#3D3D3D] group-hover:text-[#8B7355] transition-colors mb-1">{item.titel} →</p>
                <p className="text-[13px] text-[#8B8B8B]">{item.desc}</p>
              </a>
            ))}
          </div>

          {/* Kostenvergleiche */}
          <h2 className="text-[20px] font-bold text-[#3D3D3D] mb-4">Kostenvergleiche</h2>

          {/* Vergleichstabelle */}
          <div className="bg-white rounded-2xl border border-[#E5E3DF] overflow-hidden mb-6 shadow-sm">
            <div className="px-5 py-3 bg-[#F8F7F5] border-b border-[#E5E3DF]">
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#8B8B8B]">Eigenanteil im Vergleich — Beispiel Pflegegrad 3 (2026)</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    {['Pflegeform', 'Gesamtkosten/Mo', 'Eigenanteil/Mo', 'Besonderheit'].map(h => (
                      <th key={h} className="px-4 py-3 text-[12px] font-semibold text-[#8B8B8B] text-left border-b border-[#E5E3DF]">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Pflegeheim', '2.500–5.000 €', '~2.871 € Ø', 'Kein eigenes Zuhause'],
                    ['24h-Pflege (Primundus)', '2.200–3.500 €', 'ca. 1.500–2.000 €', 'Eigenes Zuhause, 24h Betreuung'],
                    ['Ambulante Pflege', '800–2.500 €', 'ca. 0–1.000 €', 'Nur zu Einsatzzeiten da'],
                    ['Tagespflege', '800–2.000 €', 'ca. 0–500 €', 'Nur tagsüber, keine Nacht'],
                  ].map(([form, gesamt, eigenanteil, besonderheit], i) => (
                    <tr key={form} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8F7F5]'}>
                      <td className="px-4 py-3 text-[14px] font-semibold text-[#3D3D3D] border-b border-[#E5E3DF]">{form}</td>
                      <td className="px-4 py-3 text-[13px] text-[#5A5A5A] border-b border-[#E5E3DF] whitespace-nowrap">{gesamt}</td>
                      <td className="px-4 py-3 text-[14px] font-bold text-[#3D7A5C] border-b border-[#E5E3DF] whitespace-nowrap">{eigenanteil}</td>
                      <td className="px-4 py-3 text-[13px] text-[#8B8B8B] border-b border-[#E5E3DF]">{besonderheit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-5 py-2">
              <p className="text-[11px] text-[#8B8B8B]">Eigenanteil 24h-Pflege mit Pflegegeld + Entlastungsbetrag + Entlastungsbudget optimiert · Stand 2026</p>
            </div>
          </div>

          <div className="grid gap-3 mb-10">
            {[
              { titel: 'Pflegeheim Kosten in Deutschland', href: '/pflegeheim-kosten-deutschland/', desc: 'Was ein Pflegeheim kostet, regionale Unterschiede und warum 24h-Pflege oft günstiger ist.' },
              { titel: 'Pflegeheim Kostenvergleich', href: '/pflegeheim-kostenvergleich/', desc: 'Interaktiver Vergleich: Was zahlen Sie im Pflegeheim vs. 24h-Pflege zuhause?' },
              { titel: 'Eigenanteil bei 24h-Pflege senken', href: '/eigenanteil-24h-pflege-senken/', desc: 'Alle Möglichkeiten 2026 um den monatlichen Eigenanteil zu reduzieren.' },
              { titel: 'Was kostet 24h-Pflege?', href: '/kosten/', desc: 'Vollständige Kostenübersicht mit allen Zuschüssen und realistischen Eigenanteilen.' },
            ].map((item) => (
              <a key={item.titel} href={item.href} className="bg-white border border-[#E5E3DF] rounded-xl p-5 hover:border-[#8B7355] hover:shadow-sm transition-all group">
                <p className="text-[15px] font-bold text-[#3D3D3D] group-hover:text-[#8B7355] transition-colors mb-1">{item.titel} →</p>
                <p className="text-[13px] text-[#8B8B8B]">{item.desc}</p>
              </a>
            ))}
          </div>

          {/* Anbieter vergleichen */}
          <h2 className="text-[20px] font-bold text-[#3D3D3D] mb-4">Anbieter & Modelle vergleichen</h2>
          <div className="grid gap-3 mb-10">
            {[
              { titel: 'Osteuropäische Pflegekraft oder Agentur', href: '/osteuropaeische-pflegekraft-oder-agentur/', desc: 'Direkte Suche vs. Agentur — Risiken, Aufwand und was wirklich besser ist.' },
              { titel: 'Selbst pflegen oder 24h-Pflege', href: '/selbst-pflegen-oder-24h-pflege/', desc: 'Wann die Familie an ihre Grenzen stößt und professionelle Unterstützung nötig wird.' },
              { titel: '24h-Pflege Anbieter vergleichen', href: '/anbieter-vergleich/', desc: 'Neutraler Vergleich der wichtigsten 24h-Pflegeagenturen.' },
            ].map((item) => (
              <a key={item.titel} href={item.href} className="bg-white border border-[#E5E3DF] rounded-xl p-5 hover:border-[#8B7355] hover:shadow-sm transition-all group">
                <p className="text-[15px] font-bold text-[#3D3D3D] group-hover:text-[#8B7355] transition-colors mb-1">{item.titel} →</p>
                <p className="text-[13px] text-[#8B8B8B]">{item.desc}</p>
              </a>
            ))}
          </div>

          {/* Pflegekräfte nach Herkunftsland */}
          <h2 className="text-[20px] font-bold text-[#3D3D3D] mb-4">Pflegekräfte aus EU-Ländern</h2>
          <div className="grid gap-3 mb-12">
            {[
              { titel: 'Pflegekraft aus Polen', href: '/pflegekraft-aus-polen/', desc: 'Polen — das häufigste Herkunftsland. Entsendemodell, Kosten, Qualifikation.' },
              { titel: 'Pflegekraft aus Bulgarien', href: '/pflegekraft-aus-bulgarien/', desc: 'Bulgarische Pflegekräfte im Entsendemodell — was zu beachten ist.' },
              { titel: 'Pflegekraft aus Rumänien', href: '/pflegekraft-aus-rumaenien/', desc: 'Rumänien — zweithäufigstes Herkunftsland. Rechtlich und preislich identisch.' },
            ].map((item) => (
              <a key={item.titel} href={item.href} className="bg-white border border-[#E5E3DF] rounded-xl p-5 hover:border-[#8B7355] hover:shadow-sm transition-all group">
                <p className="text-[15px] font-bold text-[#3D3D3D] group-hover:text-[#8B7355] transition-colors mb-1">{item.titel} →</p>
                <p className="text-[13px] text-[#8B8B8B]">{item.desc}</p>
              </a>
            ))}
          </div>

          <ArticleCTA />
        </div>
      </div>
    </>
  )
}
