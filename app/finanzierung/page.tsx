import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'

export const metadata: Metadata = {
  title: '24h-Pflege finanzieren — alle Kassenzuschüsse 2026 | Primundus',
  description: '24h-Pflege finanzieren: Pflegegeld bis 990 €/Monat + Entlastungsbudget 3.539 €/Jahr + 4.000 € Steuerersparnis. Alle Zuschüsse 2026 optimal kombiniert.',
  alternates: { canonical: 'https://primundus.de/finanzierung/' },
  openGraph: {
    title: '24h-Pflege finanzieren — alle Zuschüsse 2026 | Primundus',
    description: 'Pflegegeld + Entlastungsbudget + Steuerabzug: So senken Sie den Eigenanteil der 24h-Pflege.',
    url: 'https://primundus.de/finanzierung/',
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
      { '@type': 'ListItem', position: 3, name: 'Finanzierung & Zuschüsse', item: 'https://primundus.de/finanzierung/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Wie kann ich 24h-Pflege finanzieren?', acceptedAnswer: { '@type': 'Answer', text: 'Die wichtigsten Zuschüsse: Pflegegeld (347–990 €/Monat je nach Pflegegrad), Entlastungsbetrag (131 €/Monat), Entlastungsbudget (3.539 €/Jahr für Verhinderungs- und Kurzzeitpflege) und steuerlicher Abzug (20 % der Kosten, max. 4.000 € Ersparnis/Jahr). Richtig kombiniert sinkt der Eigenanteil bei PG 3 auf unter 1.800 €/Monat.' } },
      { '@type': 'Question', name: 'Was ist das Entlastungsbudget 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Das Entlastungsbudget (3.539 €/Jahr) fasst seit Juli 2025 Verhinderungspflege und Kurzzeitpflege zusammen. Es gilt für PG 2–5, ist flexibel aufteilbar und ersetzt die frühere getrennte Beantragung. 2026 ist das erste volle Jahr ohne Übergangsregelungen.' } },
      { '@type': 'Question', name: 'Kann man Pflegegeld und 24h-Pflege kombinieren?', acceptedAnswer: { '@type': 'Answer', text: 'Ja — Pflegegeld wird auch bei einer 24h-Betreuungskraft ausgezahlt, solange Angehörige als Hauptpflegepersonen anerkannt sind. Die Betreuungskraft unterstützt, die Familie bleibt formell Hauptpflegeperson.' } },
    ],
  },
])

export default function Finanzierung() {
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
            <span className="text-[#5A5A5A]">Finanzierung & Zuschüsse</span>
          </nav>

          {/* Header */}
          <p className="text-[11px] font-bold uppercase tracking-wider text-[#A89279] mb-3">
            RATGEBER
          </p>
          <h1 className="text-[32px] md:text-[42px] font-bold text-[#3D3D3D] leading-tight mb-4">
            Finanzierung & Zuschüsse
          </h1>
          <p className="text-[17px] text-[#5A5A5A] leading-relaxed mb-10 max-w-[620px]">
            Pflegegeld, Entlastungsbudget, Steuerabzug und mehr — alle Zuschüsse 2026 auf einen Blick und wie man sie optimal kombiniert.
          </p>

          {/* Auf einen Blick */}
          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 mb-10 shadow-sm">
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#A89279] mb-3">Alle Zuschüsse 2026 — auf einen Blick</p>
            <ul className="space-y-2.5">
              {[
                'Pflegegeld: 347–990 €/Monat je nach Pflegegrad (ab PG 2)',
                'Entlastungsbetrag: 131 €/Monat für alle Pflegegrade',
                'Entlastungsbudget: 3.539 €/Jahr für Verhinderungs- und Kurzzeitpflege (ab PG 2)',
                'Steuerabzug: 20 % der Kosten, max. 4.000 € Ersparnis/Jahr',
                'Pflegehilfsmittel: 42 €/Monat (Handschuhe, Desinfektionsmittel etc.)',
                'Wohnraumanpassung: bis 4.180 € je Maßnahme (PG 1–5)',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14px] text-[#5A5A5A]">
                  <span className="w-5 h-5 rounded-full bg-[#E8F5EE] text-[#3D7A5C] flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Pflegegeld & Kassenzuschüsse */}
          <h2 className="text-[20px] font-bold text-[#3D3D3D] mb-4">Pflegegeld & Kassenzuschüsse</h2>
          <div className="grid gap-3 mb-10">
            {[
              { titel: 'Pflegegeld 2026 — Beträge & Anspruch', href: '/pflegegeld/', desc: 'Wer Pflegegeld bekommt, wie hoch es ist und was bei gleichzeitiger 24h-Pflege gilt.' },
              { titel: 'Pflegegeld & 24h-Pflege kombinieren', href: '/pflegegeld-und-24h-pflege-kombinieren/', desc: 'Wie Pflegegeld und 24h-Betreuungskraft gleichzeitig möglich sind.' },
              { titel: 'Pflegesachleistungen', href: '/pflegesachleistungen/', desc: 'Wann Pflegesachleistungen statt Pflegegeld sinnvoll sind und wie man sie beantragt.' },
              { titel: 'Kombinationsleistung Pflege', href: '/kombinationsleistung-pflege/', desc: 'Pflegegeld und Sachleistungen gleichzeitig nutzen — wie das geht.' },
              { titel: 'Pflegeversicherung Leistungen Übersicht', href: '/pflegeversicherung-leistungen-uebersicht/', desc: 'Vollständige Übersicht aller Leistungen der Pflegeversicherung 2026.' },
            ].map((item) => (
              <a key={item.titel} href={item.href} className="bg-white border border-[#E5E3DF] rounded-xl p-5 hover:border-[#8B7355] hover:shadow-sm transition-all group">
                <p className="text-[15px] font-bold text-[#3D3D3D] group-hover:text-[#8B7355] transition-colors mb-1">{item.titel} →</p>
                <p className="text-[13px] text-[#8B8B8B]">{item.desc}</p>
              </a>
            ))}
          </div>

          {/* Entlastungsbudget & Kurzzeitpflege */}
          <h2 className="text-[20px] font-bold text-[#3D3D3D] mb-4">Entlastungsbudget & Kurzzeitpflege</h2>
          <div className="grid gap-3 mb-10">
            {[
              { titel: 'Verhinderungspflege & Entlastungsbudget 2026', href: '/verhinderungspflege/', desc: '3.539 €/Jahr flexibel für Verhinderungs- und Kurzzeitpflege — alle Regeln 2026.' },
              { titel: 'Kurzzeitpflege', href: '/kurzzeitpflege/', desc: 'Kurzzeitpflege beantragen, Kosten und wie das Budget optimal genutzt wird.' },
              { titel: 'Kurzzeitpflege oder 24h-Pflege', href: '/kurzzeitpflege-oder-24h-pflege/', desc: 'Wann Kurzzeitpflege reicht und wann eine 24h-Kraft die bessere Lösung ist.' },
              { titel: 'Entlastungsbetrag — 131 €/Monat nutzen', href: '/entlastungsbetrag/', desc: 'Was der Entlastungsbetrag ist, für was er genutzt werden kann und wie man ihn beantragt.' },
            ].map((item) => (
              <a key={item.titel} href={item.href} className="bg-white border border-[#E5E3DF] rounded-xl p-5 hover:border-[#8B7355] hover:shadow-sm transition-all group">
                <p className="text-[15px] font-bold text-[#3D3D3D] group-hover:text-[#8B7355] transition-colors mb-1">{item.titel} →</p>
                <p className="text-[13px] text-[#8B8B8B]">{item.desc}</p>
              </a>
            ))}
          </div>

          {/* Steuer & weitere Förderungen */}
          <h2 className="text-[20px] font-bold text-[#3D3D3D] mb-4">Steuer & weitere Förderungen</h2>
          <div className="grid gap-3 mb-10">
            {[
              { titel: 'Pflege steuerlich absetzen', href: '/pflege-steuerlich-absetzen/', desc: 'Bis zu 4.000 €/Jahr Steuerersparnis — was absetzbar ist und wie man es richtig macht.' },
              { titel: 'Eigenanteil 24h-Pflege senken', href: '/eigenanteil-24h-pflege-senken/', desc: 'Alle Möglichkeiten 2026 um den monatlichen Eigenanteil zu reduzieren.' },
              { titel: 'Sozialhilfe bei Pflegebedarf', href: '/sozialhilfe-bei-pflegebedarf/', desc: 'Wenn das Einkommen nicht reicht — Hilfe zur Pflege und Sozialhilfe im Überblick.' },
              { titel: 'Förderungen nach Bundesland', href: '/foerderungen-nach-bundesland/', desc: 'Landesspezifische Förderprogramme für Pflege — alle Bundesländer im Überblick.' },
              { titel: 'Pflegehilfsmittel beantragen', href: '/pflegehilfsmittel-beantragen/', desc: '42 €/Monat für Pflegehilfsmittel zum Verbrauch — was dazugehört und wie man es beantragt.' },
              { titel: 'Wohnraumanpassung — Förderung beantragen', href: '/wohnraumanpassung-foerderung/', desc: 'Bis zu 4.180 € je Maßnahme — welche Umbaumaßnahmen gefördert werden und wie man den Zuschuss beantragt.' },
            ].map((item) => (
              <a key={item.titel} href={item.href} className="bg-white border border-[#E5E3DF] rounded-xl p-5 hover:border-[#8B7355] hover:shadow-sm transition-all group">
                <p className="text-[15px] font-bold text-[#3D3D3D] group-hover:text-[#8B7355] transition-colors mb-1">{item.titel} →</p>
                <p className="text-[13px] text-[#8B8B8B]">{item.desc}</p>
              </a>
            ))}
          </div>

          {/* Leistungsbeträge Tabelle */}
          <h2 className="text-[20px] font-bold text-[#3D3D3D] mb-4">Alle Leistungen nach Pflegegrad 2026</h2>
          <div className="bg-white rounded-2xl border border-[#E5E3DF] overflow-hidden mb-4 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#F8F7F5]">
                    {['Leistung', 'PG 1', 'PG 2', 'PG 3', 'PG 4', 'PG 5'].map(h => (
                      <th key={h} className="px-3 py-3 text-[12px] font-semibold text-[#8B8B8B] text-left border-b border-[#E5E3DF]">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Pflegegeld/Monat', '—', '347 €', '599 €', '800 €', '990 €'],
                    ['Sachleistungen/Monat', '—', '796 €', '1.497 €', '1.859 €', '2.299 €'],
                    ['Entlastungsbetrag/Monat', '131 €', '131 €', '131 €', '131 €', '131 €'],
                    ['Entlastungsbudget/Jahr', '—', '3.539 €', '3.539 €', '3.539 €', '3.539 €'],
                    ['Pflegehilfsmittel/Monat', '42 €', '42 €', '42 €', '42 €', '42 €'],
                  ].map(([leistung, ...werte], i) => (
                    <tr key={leistung} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8F7F5]'}>
                      <td className="px-3 py-3 text-[13px] font-semibold text-[#3D3D3D] border-b border-[#E5E3DF]">{leistung}</td>
                      {werte.map((w, j) => (
                        <td key={j} className={`px-3 py-3 text-[13px] border-b border-[#E5E3DF] whitespace-nowrap tabular-nums text-right ${w === '—' ? 'text-[#C8C3BA]' : 'text-[#3D7A5C] font-semibold'}`}>{w}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-5 py-2">
              <p className="text-[11px] text-[#8B8B8B]">Quelle: GKV-Spitzenverband · SGB XI · Stand 2026 · Identisch zu 2025</p>
            </div>
          </div>
          <p className="text-[14px] text-[#5A5A5A] mb-12">
            → Welcher Pflegegrad gilt für Sie?{' '}
            <a href="/pflegegrade/" className="text-[#8B7355] underline hover:text-[#7D6848]">Alle Pflegegrade 2026 im Überblick</a>
          </p>

          <ArticleCTA />
        </div>
      </div>
    </>
  )
}
