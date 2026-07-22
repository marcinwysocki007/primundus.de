import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [
  { id: 'was-ist', title: 'Was bedeutet Pflegegrad 5?' },
  { id: 'leistungen', title: 'Leistungen & Beträge 2026' },
  { id: 'alltag', title: 'Zuhause mit Pflegegrad 5' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflegegrad 5 — Leistungen & 990 € Pflegegeld 2026 | Primundus',
  description: 'Pflegegrad 5: 990 € Pflegegeld/Monat, 2.299 € Sachleistungen, 3.539 € Entlastungsbudget/Jahr. Höchster Pflegegrad — alle Leistungen und zuhause bleiben mit 24h-Pflege.',
  alternates: { canonical: 'https://primundus.de/pflegegrad-5/' },
  openGraph: {
    title: 'Pflegegrad 5 — Leistungen & Beträge 2026 | Primundus',
    description: 'Pflegegrad 5: 990 € Pflegegeld + 2.299 € Sachleistungen. Höchster Pflegegrad — alle Leistungen 2026.',
    url: 'https://primundus.de/pflegegrad-5/',
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
    headline: 'Pflegegrad 5 — Leistungen, Beträge & Voraussetzungen 2026',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/pflegegrad-5/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Pflegegrade', item: 'https://primundus.de/pflegegrade/' },
      { '@type': 'ListItem', position: 3, name: 'Pflegegrad 5', item: 'https://primundus.de/pflegegrad-5/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was bekommt man bei Pflegegrad 5?', acceptedAnswer: { '@type': 'Answer', text: 'Bei Pflegegrad 5 gibt es 990 € Pflegegeld/Monat, 2.299 € Pflegesachleistungen/Monat, 131 € Entlastungsbetrag/Monat und 3.539 € Entlastungsbudget/Jahr. PG 5 ist der höchste Pflegegrad — er setzt schwerste Beeinträchtigung plus besonderen Beaufsichtigungsbedarf voraus.' } },
      { '@type': 'Question', name: 'Was unterscheidet Pflegegrad 5 von Pflegegrad 4?', acceptedAnswer: { '@type': 'Answer', text: 'PG 5 erfordert 90–100 NBA-Punkte (PG 4: 70–89,9). Zusätzlich zu schwersten körperlichen Einschränkungen muss ein besonderer Bedarf an Beaufsichtigung und Begleitung vorliegen — z.B. durch Weglaufen, Selbstgefährdung oder extreme Verhaltensauffälligkeiten bei Demenz.' } },
    ],
  },
]

export default function Pflegegrad5() {
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
            <span className="text-[#1C1C1C]">Pflegegrad 5</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>5 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            Pflegegrad 5 — Leistungen & Beträge 2026
          </h1>

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            Pflegegrad 5 ist der höchste Pflegegrad — er bedeutet schwerste Beeinträchtigung plus besonderen Beaufsichtigungsbedarf. Betroffene erhalten 990 € Pflegegeld pro Monat und 2.299 € Sachleistungen. Mit einer 24h-Betreuungskraft ist zuhause bleiben auch bei PG 5 in vielen Fällen möglich.
          </p>

          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 mb-10 shadow-sm">
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#A89279] mb-3">Auf einen Blick — Pflegegrad 5</p>
            <ul className="space-y-2.5">
              {[
                'Pflegegeld: 990 €/Monat — höchster Satz',
                'Pflegesachleistungen: 2.299 €/Monat',
                'Entlastungsbetrag: 131 €/Monat zusätzlich',
                'Entlastungsbudget: 3.539 €/Jahr',
                'Voraussetzung: 90–100 Punkte NBA + besonderer Beaufsichtigungsbedarf',
                'Stand 2026: Identisch zu 2025',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-[#2E2E2E]">
                  <span className="w-5 h-5 rounded-full bg-[#E8F5EE] text-[#3D7A5C] flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <h2 id="was-ist" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Was bedeutet Pflegegrad 5?
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">
            Pflegegrad 5 wird vergeben wenn bei der NBA-Begutachtung <strong>90 bis 100 Punkte</strong> erreicht werden und <strong>zusätzlich ein besonderer Beaufsichtigungs- und Begleitungsbedarf</strong> vorliegt. Dieser besondere Bedarf ist das entscheidende Kriterium — er grenzt PG 5 von PG 4 ab.
          </p>
          <div className="space-y-3 mb-6">
            {[
              { title: 'Schwerste Beeinträchtigung', desc: 'Vollständige Abhängigkeit bei Körperpflege, Mobilität, Ernährung. Kaum eigenständige Aktivitäten möglich.' },
              { title: 'Besonderer Beaufsichtigungsbedarf', desc: 'Weglaufen bei Demenz mit Selbstgefährdung, extreme Verhaltensauffälligkeiten, Selbst- oder Fremdgefährdung — eine Person muss dauerhaft anwesend sein.' },
              { title: 'Typische Erkrankungen bei PG 5', desc: 'Schwere Demenz im Endstadium, schwerster Schlaganfall mit Aphasie und Hemiplegie, ALS (Amyotrophe Lateralsklerose), schwerstes Schädel-Hirn-Trauma.' },
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
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#8B8B8B]">Alle Leistungen bei Pflegegrad 5 — Stand 2026</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody>
                  {[
                    ['Pflegegeld', '990 €/Monat', 'Höchster Satz — wenn Angehörige pflegen'],
                    ['Pflegesachleistungen', '2.299 €/Monat', 'Für ambulante Pflegedienste'],
                    ['Entlastungsbetrag', '131 €/Monat', 'Für anerkannte Betreuungsangebote'],
                    ['Entlastungsbudget', '3.539 €/Jahr', 'Verhinderungs- & Kurzzeitpflege'],
                    ['Tages-/Nachtpflege', '2.085 €/Monat', 'Eigenes Budget, keine Anrechnung'],
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
              <p className="text-[11px] text-[#8B8B8B]">Stand 2026 · Identisch zu 2025 · Quelle: GKV-Spitzenverband</p>
            </div>
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Alle Zuschüsse optimal nutzen:{' '}
            <a href="/finanzierung/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Finanzierung — alle Kassenzuschüsse 2026</a>
          </p>

          <h2 id="alltag" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Zuhause mit Pflegegrad 5 — ist das möglich?
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Bei PG 5 ist die Frage "zuhause oder Pflegeheim" am dringlichsten. Eine 24h-Betreuungskraft ermöglicht zuhause bleiben in vielen Fällen — aber nicht bei jedem Pflegebedarf.
          </p>
          <div className="space-y-3 mb-6">
            {[
              { title: 'Zuhause möglich wenn...', desc: 'Der besondere Beaufsichtigungsbedarf durch eine Betreuungskraft rund um die Uhr abgedeckt werden kann. Kein intensivmedizinischer Dauerbedarf besteht. Ausreichend Wohnraum für die Betreuungskraft vorhanden ist.' },
              { title: 'Pflegeheim notwendig wenn...', desc: 'Intensivpflege (Beatmung, kontinuierliche medizinische Überwachung) rund um die Uhr nötig ist. Aggressive Verhaltensweisen die Sicherheit der Betreuungskraft gefährden.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.title}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Vergleich:{' '}
            <a href="/24h-pflege-vs-pflegeheim-kosten/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">24h-Pflege vs. Pflegeheim</a>
            {' · '}
            <a href="/pflegegrad-4/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Pflegegrad 4</a>
          </p>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">
            Häufige Fragen zu Pflegegrad 5
          </h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Was bekommt man bei Pflegegrad 5?', a: '990 € Pflegegeld/Monat (höchster Satz), 2.299 € Sachleistungen/Monat, 131 € Entlastungsbetrag/Monat, 3.539 € Entlastungsbudget/Jahr. Stand 2026, identisch zu 2025.' },
              { q: 'Was unterscheidet PG 5 von PG 4?', a: 'PG 5 erfordert 90–100 NBA-Punkte plus besonderen Beaufsichtigungs- und Begleitungsbedarf. Bei PG 4 reichen 70–89,9 Punkte. Pflegegeld PG 5: 990 € (+190 € gegenüber PG 4).' },
              { q: 'Kann man mit Pflegegrad 5 zuhause bleiben?', a: 'In vielen Fällen ja — mit einer 24h-Betreuungskraft die rund um die Uhr präsent ist. Nicht möglich bei intensivmedizinischem Dauerbedarf (Beatmung etc.) oder wenn aggressive Verhaltensweisen die Betreuungssicherheit gefährden.' },
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
