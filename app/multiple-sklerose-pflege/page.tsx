import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { AuthorByline } from '@/components/AuthorByline'

const SECTIONS = [
  { id: 'ms-pflege', title: 'MS-Pflege zuhause' },
  { id: 'verlauf', title: 'Pflege je nach MS-Verlauf' },
  { id: 'alltag', title: 'Alltagsherausforderungen & Lösungen' },
  { id: 'pflegegrad', title: 'Pflegegrad & Leistungen' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Multiple Sklerose Pflege zuhause — was möglich ist | Primundus',
  description: 'Multiple Sklerose Pflege zuhause: Was in welchem MS-Verlauf möglich ist, konkrete Alltagstipps und ab wann eine 24h-Betreuungskraft sinnvoll wird. 2026.',
  alternates: { canonical: 'https://primundus.de/multiple-sklerose-pflege/' },
  openGraph: {
    title: 'Multiple Sklerose Pflege zuhause | Primundus',
    description: 'Was bei MS zuhause möglich ist und ab wann 24h-Pflege sinnvoll wird.',
    url: 'https://primundus.de/multiple-sklerose-pflege/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Multiple Sklerose Pflege zuhause 2026',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/multiple-sklerose-pflege/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Krankheiten', item: 'https://primundus.de/krankheiten/' },
      { '@type': 'ListItem', position: 3, name: 'Multiple Sklerose Pflege', item: 'https://primundus.de/multiple-sklerose-pflege/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Kann man Multiple Sklerose zuhause pflegen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja — in den meisten MS-Verläufen ist häusliche Pflege gut möglich. Bei schubförmigem MS mit stabilen Phasen ist oft ambulante Unterstützung ausreichend. Bei sekundär-progredientem oder primär-progredientem Verlauf kann eine 24h-Betreuungskraft notwendig werden.' } },
      { '@type': 'Question', name: 'Welchen Pflegegrad bekommt man bei Multipler Sklerose?', acceptedAnswer: { '@type': 'Answer', text: 'Je nach Einschränkungen: Leichte MS meist PG 1–2. Moderate Einschränkungen PG 2–3. Schwere Einschränkungen PG 3–4. Rollstuhlpflicht und vollständige Pflegeabhängigkeit PG 4–5. Die Einstufung hängt vom tatsächlichen Alltagsbeeinträchtigungen ab, nicht von der Diagnose allein.' } },
    ],
  },
]

export default function MultipleSklerosePflege() {
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
            <a href="/krankheiten/" className="hover:text-[#8B7355] transition-colors">Krankheiten</a>
            <span>›</span>
            <span className="text-[#1C1C1C]">Multiple Sklerose Pflege</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>6 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            Multiple Sklerose Pflege zuhause — was möglich ist
          </h1>

          <AuthorByline updated="25. April 2026" />

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            Multiple Sklerose (MS) ist eine chronisch-entzündliche Erkrankung des Nervensystems — mit sehr unterschiedlichem Verlauf. Während manche Menschen mit MS jahrzehntelang nahezu symptomfrei leben, brauchen andere bereits im mittleren Lebensalter intensive Pflege. Die häusliche Pflege ist in den meisten Stadien nicht nur möglich, sondern oft die bessere Wahl.
          </p>

          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 mb-10 shadow-sm">
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#A89279] mb-3">Auf einen Blick</p>
            <ul className="space-y-2.5">
              {[
                'MS-Pflege zuhause ist in den meisten Verläufen gut möglich',
                'Pflegebedarf variiert stark — von zeitweiser Unterstützung bis zu 24h-Betreuung',
                'Besonderheit: Fatigue (Erschöpfung) ist bei MS oft das führende Pflegeproblem',
                'Wärme verschlechtert Symptome — kühle Umgebung und Hilfsmittel wichtig',
                'Pflegegrad 1–5 je nach Einschränkungsgrad und Verlauf',
                'Kassenzuschüsse: bis 990 €/Monat Pflegegeld + 3.539 €/Jahr Entlastungsbudget',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-[#2E2E2E]">
                  <span className="w-5 h-5 rounded-full bg-[#E8F5EE] text-[#3D7A5C] flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <h2 id="ms-pflege" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Multiple Sklerose zuhause pflegen — was möglich ist
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">
            MS verläuft sehr individuell. Der Pflegebedarf hängt vom Verlaufstyp, der bisherigen Krankheitsdauer und den betroffenen neurologischen Funktionen ab. Was bei einem Menschen mit MS vollständig erhalten ist, kann beim anderen stark beeinträchtigt sein.
          </p>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-10">
            Die häusliche Pflege hat bei MS besondere Vorteile: Die vertraute Umgebung ermöglicht Selbstständigkeit durch eingeprägte Routinen, Hilfsmittel können passgenau eingerichtet werden, und die emotionale Belastung eines Heimumzugs entfällt.
          </p>

          <h2 id="verlauf" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Pflege je nach MS-Verlaufstyp
          </h2>
          <div className="space-y-3 mb-10">
            {[
              {
                verlauf: 'Schubförmig-remittierend (RRMS)',
                beschreibung: 'Häufigste Form. Schübe mit anschließender vollständiger oder teilweiser Erholung. In stabilen Phasen oft weitgehend selbstständig. Während Schüben vorübergehend mehr Unterstützung nötig.',
                pflege: 'Ambulante Pflege und Angehörigen-Unterstützung oft ausreichend. Krisenplan für Schübe erstellen.',
              },
              {
                verlauf: 'Sekundär-progredient (SPMS)',
                beschreibung: 'Entwickelt sich aus RRMS. Zunehmende Behinderung auch ohne Schübe. Mobilität, Koordination, Blasenfunktion oft betroffen.',
                pflege: 'Steigender Pflegebedarf über Zeit. 24h-Betreuung ab mittlerer bis schwerer Beeinträchtigung sinnvoll.',
              },
              {
                verlauf: 'Primär-progredient (PPMS)',
                beschreibung: 'Von Beginn an kontinuierliche Verschlechterung ohne Schübe. Häufig schwere Gehbehinderung.',
                pflege: '24h-Betreuungskraft oft früh notwendig. Rollstuhlgerechte Wohnung und spezifische Hilfsmittel wichtig.',
              },
            ].map((item) => (
              <div key={item.verlauf} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.verlauf}</p>
                <p className="text-[13px] text-[#8B8B8B] mb-2">{item.beschreibung}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed font-medium">{item.pflege}</p>
              </div>
            ))}
          </div>

          <h2 id="alltag" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Alltagsherausforderungen & Lösungen bei MS
          </h2>
          <div className="space-y-3 mb-10">
            {[
              {
                challenge: 'Fatigue (extreme Erschöpfung)',
                loesung: 'Die MS-typische Erschöpfung ist anders als normale Müdigkeit — sie kommt plötzlich und ist lähmend. Energiemanagement ist entscheidend: wichtige Aktivitäten auf die Zeiten legen wenn Energie vorhanden ist. Pausen einplanen. Betreuungskraft übernimmt körperlich anstrengende Aufgaben damit Energie für Wichtiges bleibt.',
              },
              {
                challenge: 'Wärmeempfindlichkeit (Uhthoff-Phänomen)',
                loesung: 'Wärme verschlechtert bei vielen MS-Betroffenen die Symptome vorübergehend stark. Kühle Raumtemperatur, keine heißen Bäder, Klimaanlage oder Ventilatoren im Sommer, Kühlwesten. Betreuungskraft kennt diese Reaktionen und handelt entsprechend.',
              },
              {
                challenge: 'Blasen- und Darmprobleme',
                loesung: 'Blasenschwäche, Harninkontinenz und Darmprobleme sind bei MS häufig. Regelmäßige Toilettengänge einplanen, Inkontinenzmaterial, ggf. Katheterversorgung durch Pflegedienst. Betreuungskraft begleitet diskret und würdevoll.',
              },
              {
                challenge: 'Spastiken und Gleichgewichtsprobleme',
                loesung: 'Sturzsicherheit hat höchste Priorität. Haltegriffe, Rollator oder Rollstuhl, rutschfeste Matten. Lagerungstechniken bei Spastiken erlernen. Physiotherapie unterstützen und begleiten.',
              },
              {
                challenge: 'Kognitive Einschränkungen',
                loesung: 'Gedächtnis- und Konzentrationsprobleme bei MS sind häufig unterschätzt. Klare Strukturen, schriftliche Erinnerungen, ruhige Umgebung ohne Ablenkung. Betreuungskraft gibt Orientierung ohne zu überfordern.',
              },
            ].map((item) => (
              <div key={item.challenge} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-2">{item.challenge}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.loesung}</p>
              </div>
            ))}
          </div>

          <h2 id="pflegegrad" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Pflegegrad & Kassenzuschüsse bei MS
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Der Pflegegrad richtet sich nach dem tatsächlichen Alltagsbeeinträchtigungen — nicht nach der Diagnose. Bei MS können die Einschränkungen stark schwanken (in Schüben) oder kontinuierlich zunehmen.
          </p>
          <div className="bg-white rounded-2xl border border-[#E5E3DF] overflow-hidden mb-6 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#F8F7F5]">
                    {['MS-Einschränkung', 'Typischer Pflegegrad', 'Pflegegeld/Monat'].map(h => (
                      <th key={h} className="px-4 py-3 text-[12px] font-semibold text-[#8B8B8B] text-left border-b border-[#E5E3DF]">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Leichte Einschränkungen, weitgehend selbstständig', 'PG 1–2', '— bis 347 €'],
                    ['Moderate Einschränkungen, Hilfe bei mehreren Bereichen', 'PG 2–3', '347–599 €'],
                    ['Schwere Einschränkungen, erheblicher Hilfebedarf', 'PG 3–4', '599–800 €'],
                    ['Rollstuhl, vollständige Pflegeabhängigkeit', 'PG 4–5', '800–990 €'],
                  ].map(([ms, pg, pflegegeld], i) => (
                    <tr key={ms} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8F7F5]'}>
                      <td className="px-4 py-3 text-[13px] text-[#2E2E2E] border-b border-[#E5E3DF]">{ms}</td>
                      <td className="px-4 py-3 text-[14px] font-semibold text-[#1C1C1C] border-b border-[#E5E3DF]">{pg}</td>
                      <td className="px-4 py-3 text-[14px] font-bold text-[#3D7A5C] border-b border-[#E5E3DF]">{pflegegeld}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-5 py-2">
              <p className="text-[11px] text-[#8B8B8B]">Richtwerte — individuelle Einstufung durch MD · Stand 2026</p>
            </div>
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Pflegegrad beantragen:{' '}
            <a href="/pflegegrad-beantragen/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Schritt-für-Schritt Anleitung</a>
            {' · '}
            <a href="/finanzierung/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Alle Kassenzuschüsse 2026</a>
          </p>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Kann man bei Multipler Sklerose zuhause gepflegt werden?', a: 'Ja — in den meisten MS-Verläufen ist häusliche Pflege gut möglich. Die vertraute Umgebung und eingeprägte Routinen fördern die Selbstständigkeit. Mit einer 24h-Betreuungskraft bleibt das eigene Zuhause auch bei zunehmendem Pflegebedarf möglich.' },
              { q: 'Welchen Pflegegrad bekommt man bei MS?', a: 'Je nach Einschränkungen: PG 1–2 bei leichter MS, PG 2–3 bei moderaten Einschränkungen, PG 3–4 bei schwerer MS, PG 4–5 bei Rollstuhl und vollständiger Pflegeabhängigkeit.' },
              { q: 'Was ist Fatigue bei MS und wie geht man damit um?', a: 'MS-Fatigue ist eine extreme Erschöpfung die anders ist als normale Müdigkeit — sie kommt plötzlich und kann lähmend sein. Energiemanagement ist entscheidend: wichtige Aktivitäten in Zeiten mit Energie legen, Pausen einplanen, körperlich anstrengende Aufgaben delegieren.' },
              { q: 'Warum sollte man bei MS auf Wärme achten?', a: 'Das Uhthoff-Phänomen: Wärme verschlechtert bei vielen MS-Betroffenen die Symptome vorübergehend stark. Kühle Raumtemperatur halten, keine heißen Bäder, im Sommer Ventilatoren oder Klimaanlage nutzen.' },
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
