import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [
  { id: 'welcher-pflegegrad', title: 'Welcher Pflegegrad nach Schlaganfall?' },
  { id: 'begutachtung', title: 'Begutachtung vorbereiten' },
  { id: 'leistungen', title: 'Leistungen & Kassenzuschüsse' },
  { id: 'rehabilitation', title: 'Pflege während der Rehabilitation' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflegegrad nach Schlaganfall — welcher Grad & wie beantragen | Primundus',
  description: 'Pflegegrad nach Schlaganfall: Welcher Grad ist realistisch, wie bereitet man die Begutachtung vor und welche Leistungen stehen zu? Alles erklärt für 2026.',
  alternates: { canonical: 'https://primundus.de/pflegegrad-nach-schlaganfall/' },
  openGraph: {
    title: 'Pflegegrad nach Schlaganfall 2026 | Primundus',
    description: 'Welcher Pflegegrad nach Schlaganfall — Begutachtung, Leistungen und Antrag.',
    url: 'https://primundus.de/pflegegrad-nach-schlaganfall/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pflegegrad nach Schlaganfall — welcher Grad und wie beantragen',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/pflegegrad-nach-schlaganfall/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Pflegegrade', item: 'https://primundus.de/pflegegrade/' },
      { '@type': 'ListItem', position: 3, name: 'Pflegegrad nach Schlaganfall', item: 'https://primundus.de/pflegegrad-nach-schlaganfall/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Welchen Pflegegrad bekommt man nach einem Schlaganfall?', acceptedAnswer: { '@type': 'Answer', text: 'Je nach Schwere der Folgeschäden: Leichter Schlaganfall ohne bleibende Einschränkungen: kein Pflegegrad. Mittelschwerer Schlaganfall (Halbseitenlähmung, Sprachstörungen): PG 2–3. Schwerer Schlaganfall (vollständige Pflegeabhängigkeit, Schluckstörungen, Rollstuhl): PG 3–5. Der Pflegegrad richtet sich nach den tatsächlichen Alltagseinschränkungen, nicht nach der Diagnose.' } },
    ],
  },
]

export default function PflegegradNachSchlaganfall() {
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
            <span className="text-[#1C1C1C]">Pflegegrad nach Schlaganfall</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>6 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            Pflegegrad nach Schlaganfall — welcher Grad & wie beantragen
          </h1>

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            Nach einem Schlaganfall ändert sich oft alles innerhalb von Stunden. Der Pflegegrad bestimmt welche Kassenzuschüsse zur Verfügung stehen — und sollte so früh wie möglich beantragt werden, da er rückwirkend ab Antragsdatum gilt. Welcher Pflegegrad realistisch ist, hängt vom tatsächlichen Ausmaß der Folgeschäden ab.
          </p>

          <div className="bg-[#FDF0EE] border border-[rgba(231,111,99,0.2)] rounded-2xl p-5 mb-10">
            <p className="text-[14px] font-bold text-[#8B3E2F] mb-2">Wichtig: Antrag sofort stellen</p>
            <p className="text-[14px] text-[#8B3E2F] leading-relaxed">
              Der Pflegegrad gilt rückwirkend ab Antragsdatum — nicht ab Begutachtungstermin. Deshalb: Antrag formlos bei der Pflegekasse stellen sobald klar ist dass Pflege nötig sein wird — auch noch aus dem Krankenhaus heraus.
            </p>
          </div>

          <h2 id="welcher-pflegegrad" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Welcher Pflegegrad nach Schlaganfall?
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Der Pflegegrad richtet sich nach den tatsächlichen Alltagseinschränkungen — nicht nach der Diagnose "Schlaganfall". Zwei Menschen mit "Schlaganfall" können völlig unterschiedliche Pflegegrade haben, je nach Schwere der Folgeschäden.
          </p>
          <div className="bg-white rounded-2xl border border-[#E5E3DF] overflow-hidden mb-10 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#F8F7F5]">
                    {['Folgeschäden nach Schlaganfall', 'Typischer Pflegegrad', 'Pflegegeld/Monat'].map(h => (
                      <th key={h} className="px-4 py-3 text-[12px] font-semibold text-[#8B8B8B] text-left border-b border-[#E5E3DF]">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Vollständige Erholung, keine bleibenden Schäden', 'Kein PG', '—'],
                    ['Leichte Einschränkungen (leichte Lähmung, Wortfindung)', 'PG 1–2', '— bis 347 €'],
                    ['Mittelschwere Halbseitenlähmung, Sprachstörungen', 'PG 2–3', '347–599 €'],
                    ['Schwere Einschränkungen, Rollstuhl, Schluckstörungen', 'PG 3–4', '599–800 €'],
                    ['Vollständige Pflegeabhängigkeit, Bewusstseinsstörungen', 'PG 4–5', '800–990 €'],
                  ].map(([folge, pg, pgeld], i) => (
                    <tr key={folge} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8F7F5]'}>
                      <td className="px-4 py-3 text-[13px] text-[#2E2E2E] border-b border-[#E5E3DF]">{folge}</td>
                      <td className="px-4 py-3 text-[14px] font-semibold text-[#1C1C1C] border-b border-[#E5E3DF]">{pg}</td>
                      <td className={`px-4 py-3 text-[14px] font-bold border-b border-[#E5E3DF] ${pgeld === '—' ? 'text-[#C8C3BA]' : 'text-[#3D7A5C]'}`}>{pgeld}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-5 py-2">
              <p className="text-[11px] text-[#8B8B8B]">Richtwerte · Individuelle Einstufung durch MD · Stand 2026</p>
            </div>
          </div>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-10">
            Wichtig: Die Begutachtung findet nach der akuten Phase statt — oft noch während der Rehabilitation. Gute Vorbereitung ist entscheidend, da der Schlaganfall-Patient beim Gutachtertermin oft besser wirkt als im Alltag.
          </p>

          <h2 id="begutachtung" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Begutachtung nach Schlaganfall — optimal vorbereiten
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Schlaganfall-Patienten zeigen beim Gutachtertermin oft bessere Leistungen als im Alltag — weil Stress und Anspannung kurzzeitig mobilisieren. Deshalb ist Vorbereitung besonders wichtig.
          </p>
          <div className="space-y-3 mb-6">
            {[
              { tip: 'Pflegetagebuch führen', desc: '1–2 Wochen vor dem Termin täglich dokumentieren: Was kann der Betroffene nicht ohne Hilfe? Wie lange dauert die Morgenpflege? Wie viele Male wird nächtlich Hilfe gebraucht?' },
              { tip: 'Schlechtesten Tag schildern', desc: 'Dem Gutachter den typisch schwierigen Tag beschreiben — nicht den außergewöhnlich guten. Konkrete Beispiele: "Das Ankleiden dauert 45 Minuten und braucht durchgehende Hilfe."' },
              { tip: 'Alle Spezialisten miteinbeziehen', desc: 'Arztberichte von Neurologe, Physiotherapeut, Logopäde, Ergotherapeut mitbringen. Diese dokumentieren fachlich die Einschränkungen.' },
              { tip: 'Vertrauensperson dabei haben', desc: 'Eine Person die den Alltag kennt und ergänzen kann wenn der Betroffene etwas vergisst oder bagatellisiert.' },
              { tip: 'Kognitive Einschränkungen dokumentieren', desc: 'Konzentrationsprobleme, Gedächtnis, Wortfindungsstörungen — diese werden oft unterschätzt. Konkrete Beispiele: "Er vergisst mitten im Satz was er sagen wollte."' },
            ].map((item) => (
              <div key={item.tip} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.tip}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Vollständige Checkliste:{' '}
            <a href="/pflegegrad-begutachtung-vorbereiten/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">MD-Begutachtung vorbereiten — 7 Tipps</a>
          </p>

          <h2 id="leistungen" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Leistungen & Kassenzuschüsse nach Schlaganfall
          </h2>
          <div className="bg-white rounded-2xl border border-[#E5E3DF] overflow-hidden mb-6 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#F8F7F5]">
                    {['Leistung', 'PG 2', 'PG 3', 'PG 4'].map(h => (
                      <th key={h} className="px-4 py-3 text-[12px] font-semibold text-[#8B8B8B] text-left border-b border-[#E5E3DF]">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Pflegegeld/Monat', '347 €', '599 €', '800 €'],
                    ['Sachleistungen/Monat', '796 €', '1.497 €', '1.859 €'],
                    ['Entlastungsbetrag/Monat', '131 €', '131 €', '131 €'],
                    ['Entlastungsbudget/Jahr', '3.539 €', '3.539 €', '3.539 €'],
                    ['Wohnraumanpassung/Maßnahme', '4.180 €', '4.180 €', '4.180 €'],
                  ].map(([leistung, pg2, pg3, pg4], i) => (
                    <tr key={leistung} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8F7F5]'}>
                      <td className="px-4 py-3 text-[14px] font-semibold text-[#1C1C1C] border-b border-[#E5E3DF]">{leistung}</td>
                      <td className="px-4 py-3 text-[14px] font-bold text-[#3D7A5C] border-b border-[#E5E3DF]">{pg2}</td>
                      <td className="px-4 py-3 text-[14px] font-bold text-[#3D7A5C] border-b border-[#E5E3DF]">{pg3}</td>
                      <td className="px-4 py-3 text-[14px] font-bold text-[#3D7A5C] border-b border-[#E5E3DF]">{pg4}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Zusätzlich: Krankenversicherung übernimmt Behandlungspflege (Physiotherapie, Ergotherapie, Logopädie) und Hilfsmittel (Rollstuhl, Rollator, Badehilfen) separat.
          </p>

          <h2 id="rehabilitation" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Pflege während der Rehabilitation — was parallel läuft
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Nach dem Schlaganfall folgt oft Rehabilitation (neurologische Reha, geriatrische Reha). Während der Reha kann der Pflegegrad bereits beantragt werden — auch wenn die Begutachtung erst nach der Entlassung stattfindet.
          </p>
          <div className="space-y-3 mb-10">
            {[
              { phase: 'Im Krankenhaus', was: 'Pflegekasse benachrichtigen, formlosen Antrag stellen. Sozialdienst des Krankenhauses kann unterstützen und Überleitung nach Hause organisieren.' },
              { phase: 'Während der Reha', was: 'Pflegegrad-Antrag läuft — Begutachtung erfolgt nach Entlassung. Häusliche Pflege planen, Betreuungskraft organisieren, Wohnraumanpassung beantragen.' },
              { phase: 'Nach Entlassung', was: 'MD-Begutachtung zu Hause. Kassenzuschüsse fließen ab Antragsdatum (nicht erst ab Begutachtung). 24h-Betreuung hilft bei Wiedereingliederung in den Alltag.' },
            ].map((item) => (
              <div key={item.phase} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#A89279] mb-1">{item.phase}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.was}</p>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Mehr zur Pflege nach Schlaganfall:{' '}
            <a href="/schlaganfall-pflege-zuhause/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Schlaganfall Pflege zuhause</a>
          </p>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Welchen Pflegegrad bekommt man nach einem Schlaganfall?', a: 'Je nach Folgeschäden: Leichte Einschränkungen PG 1–2 (— bis 347 €/Monat). Mittelschwere Halbseitenlähmung PG 2–3 (347–599 €). Schwerer Schlaganfall mit Rollstuhl PG 3–4 (599–800 €). Vollständige Abhängigkeit PG 4–5 (800–990 €).' },
              { q: 'Wann soll man den Pflegegrad nach Schlaganfall beantragen?', a: 'So früh wie möglich — idealerweise noch aus dem Krankenhaus. Der Pflegegrad gilt rückwirkend ab Antragsdatum, nicht ab Begutachtung.' },
              { q: 'Kann der Pflegegrad nach Schlaganfall wieder sinken?', a: 'Ja — wenn durch Rehabilitation Verbesserungen eintreten, kann bei einer neuen Begutachtung der Pflegegrad angepasst werden. Das ist positiv — aber die Kassenzuschüsse sinken entsprechend.' },
              { q: 'Was zahlt die Krankenversicherung nach einem Schlaganfall?', a: 'Krankenversicherung übernimmt: Rehabilitation, Physiotherapie, Ergotherapie, Logopädie, Hilfsmittel (Rollstuhl, Rollator, Badehilfen). Pflegekasse übernimmt: Pflegegeld, Sachleistungen, Entlastungsbudget.' },
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
