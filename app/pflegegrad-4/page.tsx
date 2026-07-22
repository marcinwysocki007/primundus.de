import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { AuthorByline } from '@/components/AuthorByline'

const SECTIONS = [
  { id: 'was-ist', title: 'Was bedeutet Pflegegrad 4?' },
  { id: 'leistungen', title: 'Leistungen & Beträge 2026' },
  { id: 'voraussetzungen', title: 'Voraussetzungen & Einstufung' },
  { id: 'alltag', title: '24h-Pflege bei Pflegegrad 4' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflegegrad 4 — Leistungen & 800 € Pflegegeld 2026 | Primundus',
  description: 'Pflegegrad 4: 800 € Pflegegeld/Monat, 1.859 € Sachleistungen, 3.539 € Entlastungsbudget/Jahr. Schwerste Beeinträchtigung — alle Leistungen und ob 24h-Pflege möglich ist.',
  alternates: { canonical: 'https://primundus.de/pflegegrad-4/' },
  openGraph: {
    title: 'Pflegegrad 4 — Leistungen & Beträge 2026 | Primundus',
    description: 'Pflegegrad 4: 800 € Pflegegeld + 1.859 € Sachleistungen. Schwerste Beeinträchtigung — alle Leistungen 2026.',
    url: 'https://primundus.de/pflegegrad-4/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
    images: [{ url: '/images/primundus_logo_header.webp' }],
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pflegegrad 4 — Leistungen, Beträge & Voraussetzungen 2026',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/pflegegrad-4/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Pflegegrade', item: 'https://primundus.de/pflegegrade/' },
      { '@type': 'ListItem', position: 3, name: 'Pflegegrad 4', item: 'https://primundus.de/pflegegrad-4/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was bekommt man bei Pflegegrad 4?', acceptedAnswer: { '@type': 'Answer', text: 'Bei Pflegegrad 4 gibt es 800 € Pflegegeld/Monat, 1.859 € Pflegesachleistungen/Monat, 131 € Entlastungsbetrag/Monat und 3.539 € Entlastungsbudget/Jahr. Zusätzlich: erhöhte Zuschläge im Pflegeheim (30 % ab 13. Monat).' } },
      { '@type': 'Question', name: 'Was sind die Voraussetzungen für Pflegegrad 4?', acceptedAnswer: { '@type': 'Answer', text: 'Pflegegrad 4 wird vergeben wenn beim NBA 70 bis 89,9 Punkte erreicht werden. Es liegt schwerste Beeinträchtigung der Selbstständigkeit vor — kaum eigenständige Körperpflege, umfangreiche Mobilitätshilfe, oft Inkontinenz.' } },
      { '@type': 'Question', name: 'Kann man mit Pflegegrad 4 zuhause bleiben?', acceptedAnswer: { '@type': 'Answer', text: 'Ja — mit einer 24h-Betreuungskraft ist zuhause bleiben bei PG 4 in den meisten Fällen möglich. Der Pflegebedarf ist hoch, aber eine professionelle Kraft kann das sicher leisten. Primundus vermittelt in 4–7 Tagen.' } },
    ],
  },
]

export default function Pflegegrad4() {
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
            <a href="/pflegegrade/" className="hover:text-[#8B7355] transition-colors">Pflegegrade</a>
            <span>›</span>
            <span className="text-[#1C1C1C]">Pflegegrad 4</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>6 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            Pflegegrad 4 — Leistungen & Beträge 2026
          </h1>

          <AuthorByline updated="25. April 2026" />

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            Pflegegrad 4 bedeutet schwerste Beeinträchtigung der Selbstständigkeit. Betroffene erhalten 800 € Pflegegeld pro Monat, 1.859 € Sachleistungen und 3.539 € Entlastungsbudget pro Jahr. Mit einer 24h-Betreuungskraft ist zuhause bleiben bei PG 4 in den meisten Fällen möglich.
          </p>

          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 mb-10 shadow-sm">
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#A89279] mb-3">Auf einen Blick — Pflegegrad 4</p>
            <ul className="space-y-2.5">
              {[
                'Pflegegeld: 800 €/Monat (wenn Angehörige oder private Kräfte pflegen)',
                'Pflegesachleistungen: 1.859 €/Monat (für ambulante Pflegedienste)',
                'Entlastungsbetrag: 131 €/Monat zusätzlich',
                'Entlastungsbudget: 3.539 €/Jahr für Verhinderungs- und Kurzzeitpflege',
                'Voraussetzung: 70–89,9 Punkte im NBA-Begutachtungsverfahren',
                'Stand 2026: Identisch zu 2025 — nächste Dynamisierung frühestens Jan. 2028',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-[#2E2E2E]">
                  <span className="w-5 h-5 rounded-full bg-[#E8F5EE] text-[#3D7A5C] flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <h2 id="was-ist" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Was bedeutet Pflegegrad 4?
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">
            Pflegegrad 4 steht für <strong>schwerste Beeinträchtigung der Selbstständigkeit</strong>. Eigenständige Körperpflege ist kaum noch möglich, umfangreiche Mobilitätshilfe wird benötigt, oft liegt Inkontinenz vor. Eine kontinuierliche Betreuungspräsenz ist in aller Regel notwendig.
          </p>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Typisch bei PG 4: Fortgeschrittene Demenz mit vollständiger Fremdversorgung, Zustand nach schwerem Schlaganfall mit Hemiplegie, schweres Parkinson-Stadium, Multimorbidität mit vollständiger Abhängigkeit.
          </p>
          <div className="space-y-3 mb-10">
            {[
              { title: 'Körperpflege', desc: 'Vollständige Übernahme von Waschen, Anziehen, Zahnpflege, Haarpflege. Eigenständiges Waschen nicht möglich.' },
              { title: 'Mobilität', desc: 'Transfer aus Bett, Rollstuhlversorgung, Umlagerung zur Dekubitusprophylaxe. Sturzgefahr sehr hoch.' },
              { title: 'Ernährung', desc: 'Hilfe bei allen Mahlzeiten, häufig Schluckstörungen (Dysphagie). Angepasste Nahrungszubereitung erforderlich.' },
              { title: 'Kognition', desc: 'Bei Demenz: weitgehender Verlust der Selbstständigkeit, Desorientierung, ständige Aufsicht notwendig.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.title}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 id="leistungen" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Leistungen & Beträge 2026
          </h2>
          <div className="bg-white rounded-2xl border border-[#E5E3DF] overflow-hidden mb-6 shadow-sm">
            <div className="px-5 py-3 bg-[#F8F7F5] border-b border-[#E5E3DF]">
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#8B8B8B]">Alle Leistungen bei Pflegegrad 4 — Stand 2026</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody>
                  {[
                    ['Pflegegeld', '800 €/Monat', 'Wenn Angehörige oder private Kräfte pflegen'],
                    ['Pflegesachleistungen', '1.859 €/Monat', 'Für ambulante Pflegedienste'],
                    ['Entlastungsbetrag', '131 €/Monat', 'Für anerkannte Betreuungsangebote'],
                    ['Entlastungsbudget', '3.539 €/Jahr', 'Verhinderungs- & Kurzzeitpflege'],
                    ['Tages-/Nachtpflege', '1.685 €/Monat', 'Eigenes Budget, keine Anrechnung'],
                    ['Pflegehilfsmittel', '42 €/Monat', 'Handschuhe, Desinfektionsmittel etc.'],
                  ].map(([leistung, betrag, hinweis], i) => (
                    <tr key={leistung} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8F7F5]'}>
                      <td className="px-5 py-3 text-[14px] font-semibold text-[#1C1C1C] border-b border-[#E5E3DF]">{leistung}</td>
                      <td className="px-5 py-3 text-[14px] font-bold text-[#3D7A5C] border-b border-[#E5E3DF]">{betrag}</td>
                      <td className="px-5 py-3 text-[13px] text-[#8B8B8B] border-b border-[#E5E3DF]">{hinweis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-5 py-2">
              <p className="text-[11px] text-[#8B8B8B]">Quelle: GKV-Spitzenverband · Stand 2026 · Identisch zu 2025</p>
            </div>
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Alle Zuschüsse:{' '}
            <a href="/finanzierung/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Finanzierung der 24h-Pflege</a>
            {' · '}
            <a href="/pflegegeld/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Pflegegeld 2026</a>
          </p>

          <h2 id="voraussetzungen" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Voraussetzungen — Pflegegrad im Vergleich
          </h2>
          <div className="bg-white rounded-2xl border border-[#E5E3DF] overflow-hidden mb-10 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#F8F7F5]">
                    {['Pflegegrad', 'Punkte NBA', 'Pflegegeld', 'Bezeichnung'].map(h => (
                      <th key={h} className="px-4 py-3 text-[12px] font-semibold text-[#8B8B8B] text-left border-b border-[#E5E3DF]">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['PG 2', '27–47,4', '347 €', 'Erhebliche Beeinträchtigung'],
                    ['PG 3', '47,5–69,9', '599 €', 'Schwere Beeinträchtigung'],
                    ['PG 4', '70–89,9', '800 €', 'Schwerste Beeinträchtigung'],
                    ['PG 5', '90–100', '990 €', 'Schwerste + besondere Anforderungen'],
                  ].map(([grad, punkte, pg, text], i) => (
                    <tr key={grad} className={i === 2 ? 'bg-[#F2EDE6]' : i % 2 === 0 ? 'bg-white' : 'bg-[#F8F7F5]'}>
                      <td className={`px-4 py-3 text-[14px] font-semibold border-b border-[#E5E3DF] ${i === 2 ? 'text-[#8B7355]' : 'text-[#1C1C1C]'}`}>{grad}</td>
                      <td className="px-4 py-3 text-[13px] text-[#8B8B8B] border-b border-[#E5E3DF]">{punkte}</td>
                      <td className={`px-4 py-3 text-[14px] font-bold border-b border-[#E5E3DF] ${i === 2 ? 'text-[#8B7355]' : 'text-[#3D7A5C]'}`}>{pg}</td>
                      <td className="px-4 py-3 text-[13px] text-[#2E2E2E] border-b border-[#E5E3DF]">{text}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <h2 id="alltag" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            24h-Pflege bei Pflegegrad 4 — zuhause bleiben
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            PG 4 ist der häufigste Pflegegrad bei dem Familien überlegen ins Pflegeheim zu wechseln. Mit einer 24h-Betreuungskraft ist zuhause bleiben in den meisten Fällen aber weiterhin möglich und wird von Betroffenen meist klar bevorzugt.
          </p>
          <div className="bg-[#E8F5EE] border border-[rgba(61,122,92,0.2)] rounded-2xl p-5 mb-6">
            <p className="text-[14px] font-bold text-[#2A5C3F] mb-2">Kostenvergleich bei PG 4</p>
            <div className="space-y-1.5">
              {[
                ['24h-Pflege Primundus (brutto)', 'ca. 3.000 €/Monat'],
                ['Abzüglich Pflegegeld PG 4', '– 800 €/Monat'],
                ['Abzüglich Entlastungsbetrag', '– 131 €/Monat'],
                ['Eigenanteil ca.', 'ca. 2.070 €/Monat'],
                ['Pflegeheim Eigenanteil Ø', '2.871 €/Monat (steigend)'],
              ].map(([label, wert]) => (
                <div key={label} className="flex justify-between text-[14px] text-[#2A5C3F]">
                  <span>{label}</span>
                  <span className="font-bold">{wert}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Direkter Vergleich:{' '}
            <a href="/24h-pflege-vs-pflegeheim-kosten/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">24h-Pflege vs. Pflegeheim — Kostenvergleich 2026</a>
          </p>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">
            Häufige Fragen zu Pflegegrad 4
          </h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Was bekommt man bei Pflegegrad 4?', a: '800 € Pflegegeld/Monat, 1.859 € Sachleistungen/Monat, 131 € Entlastungsbetrag/Monat und 3.539 € Entlastungsbudget/Jahr. Alle Beträge 2026 identisch zu 2025.' },
              { q: 'Was sind die Voraussetzungen für Pflegegrad 4?', a: '70–89,9 Punkte im NBA-Begutachtungsverfahren. Schwerste Beeinträchtigung — kaum eigenständige Körperpflege, umfangreiche Mobilitätshilfe, oft Inkontinenz.' },
              { q: 'Kann man mit Pflegegrad 4 zuhause bleiben?', a: 'Ja — mit einer 24h-Betreuungskraft von Primundus ist zuhause bleiben bei PG 4 in den meisten Fällen möglich. Der Eigenanteil ist bei 24h-Pflege oft günstiger als beim Pflegeheim.' },
              { q: 'Wie unterscheidet sich PG 4 von PG 5?', a: 'Bei PG 5 (90–100 Punkte) liegt zusätzlich zu schwersten Beeinträchtigungen ein besonderer Bedarf an Beaufsichtigung und Begleitung vor. Pflegegeld steigt auf 990 €/Monat.' },
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
