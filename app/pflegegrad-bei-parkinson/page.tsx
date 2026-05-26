import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [
  { id: 'welcher-pflegegrad', title: 'Welcher Pflegegrad bei Parkinson?' },
  { id: 'besonderheiten', title: 'Besonderheiten der Begutachtung' },
  { id: 'leistungen', title: 'Leistungen & Kassenzuschüsse' },
  { id: 'hoehergruppierung', title: 'Höherstufung bei Parkinson' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflegegrad bei Parkinson — welcher Grad & wie beantragen | Primundus',
  description: 'Pflegegrad bei Parkinson 2026: Welcher Grad ist realistisch, was bei der Begutachtung zu beachten ist und wie die Leistungen sich staffeln. Vollständiger Ratgeber.',
  alternates: { canonical: 'https://primundus.de/pflegegrad-bei-parkinson/' },
  openGraph: {
    title: 'Pflegegrad bei Parkinson 2026 | Primundus',
    description: 'Welcher Pflegegrad bei Parkinson — Begutachtung, Leistungen und Höherstufung.',
    url: 'https://primundus.de/pflegegrad-bei-parkinson/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pflegegrad bei Parkinson — welcher Grad und wie beantragen 2026',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/pflegegrad-bei-parkinson/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Pflegegrade', item: 'https://primundus.de/pflegegrade/' },
      { '@type': 'ListItem', position: 3, name: 'Pflegegrad bei Parkinson', item: 'https://primundus.de/pflegegrad-bei-parkinson/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Welchen Pflegegrad bekommt man bei Parkinson?', acceptedAnswer: { '@type': 'Answer', text: 'Je nach Stadium: Frühes Parkinson mit leichten Einschränkungen: PG 1–2. Moderates Parkinson mit Gangstörungen und Hilfebedarf: PG 2–3. Fortgeschrittenes Parkinson mit erheblichem Hilfebedarf: PG 3–4. Schwerstes Parkinson mit vollständiger Pflegeabhängigkeit: PG 4–5.' } },
      { '@type': 'Question', name: 'Was ist die größte Herausforderung bei der Parkinson-Begutachtung?', acceptedAnswer: { '@type': 'Answer', text: 'Das sogenannte "On-Off-Phänomen": Parkinson-Patienten haben Phasen guter Mobilität (On) und schlechter Mobilität (Off). Die Begutachtung fällt oft in eine On-Phase — der tatsächliche Hilfebedarf wird unterschätzt. Deshalb: Tagebuch führen, Off-Phasen dokumentieren, alle Phasen dem Gutachter erklären.' } },
    ],
  },
]

export default function PflegegradBeiParkinson() {
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
            <span className="text-[#1C1C1C]">Pflegegrad bei Parkinson</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>6 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            Pflegegrad bei Parkinson — welcher Grad & wie beantragen
          </h1>

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            Parkinson ist eine progrediente Erkrankung — der Pflegebedarf nimmt über Zeit zu, der Pflegegrad auch. Was Menschen mit Parkinson bei der Begutachtung wissen müssen: Das On-Off-Phänomen führt häufig zu Untereinstufungen, weil der Gutachtertermin in einer guten Phase liegen kann. Dieses Risiko lässt sich durch gute Vorbereitung minimieren.
          </p>

          <div className="bg-[#FDF0EE] border border-[rgba(231,111,99,0.2)] rounded-2xl p-5 mb-10">
            <p className="text-[14px] font-bold text-[#8B3E2F] mb-2">Das On-Off-Problem bei der Begutachtung</p>
            <p className="text-[14px] text-[#8B3E2F] leading-relaxed">
              Parkinson-Patienten erleben "On-Phasen" (gute Mobilität) und "Off-Phasen" (schlechte Mobilität, Starre, Freezing). Fällt die Begutachtung in eine On-Phase — was häufig passiert, weil Stress kurzfristig mobilisiert — wird der tatsächliche Pflegebedarf unterschätzt. Lösung: Off-Phasen im Tagebuch dokumentieren und dem Gutachter erklären.
            </p>
          </div>

          <h2 id="welcher-pflegegrad" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Welcher Pflegegrad bei Parkinson?
          </h2>
          <div className="bg-white rounded-2xl border border-[#E5E3DF] overflow-hidden mb-10 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#F8F7F5]">
                    {['Parkinson-Stadium / Einschränkungen', 'Typischer Pflegegrad', 'Pflegegeld/Monat'].map(h => (
                      <th key={h} className="px-4 py-3 text-[12px] font-semibold text-[#8B8B8B] text-left border-b border-[#E5E3DF]">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Frühes Stadium, leichter Tremor, weitgehend selbstständig', 'PG 1', '— (131 € EB)'],
                    ['Moderates Parkinson, Gangstörungen, Hilfe bei einigen Bereichen', 'PG 2', '347 €'],
                    ['Fortgeschrittenes Parkinson, erheblicher Hilfebedarf', 'PG 2–3', '347–599 €'],
                    ['Schweres Parkinson, On-Off stark ausgeprägt, starke Einschränkungen', 'PG 3–4', '599–800 €'],
                    ['Schwerste Einschränkungen, vollständige Pflegeabhängigkeit', 'PG 4–5', '800–990 €'],
                  ].map(([stadium, pg, pgeld], i) => (
                    <tr key={stadium} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8F7F5]'}>
                      <td className="px-4 py-3 text-[13px] text-[#2E2E2E] border-b border-[#E5E3DF]">{stadium}</td>
                      <td className="px-4 py-3 text-[14px] font-semibold text-[#1C1C1C] border-b border-[#E5E3DF]">{pg}</td>
                      <td className="px-4 py-3 text-[14px] font-bold text-[#3D7A5C] border-b border-[#E5E3DF]">{pgeld}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-5 py-2">
              <p className="text-[11px] text-[#8B8B8B]">Richtwerte · EB = Entlastungsbetrag · Individuelle Einstufung durch MD · Stand 2026</p>
            </div>
          </div>

          <h2 id="besonderheiten" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Besonderheiten der Begutachtung bei Parkinson
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Parkinson hat einige Besonderheiten die bei der Begutachtung besonders wichtig sind und systematisch kommuniziert werden müssen.
          </p>
          <div className="space-y-3 mb-6">
            {[
              { thema: 'On-Off-Phasen dokumentieren', desc: 'Tagebuch führen: Wann sind On-Phasen, wann Off-Phasen? Wie lange dauern Off-Phasen? Was ist in der Off-Phase nicht möglich? Diese Dokumentation ist das stärkste Argument für eine faire Einstufung.' },
              { thema: 'Freezing erklären und demonstrieren', desc: 'Freezing (plötzliches "Einfrieren" beim Gehen) ist für Außenstehende schwer einzuschätzen. Dem Gutachter konkret erklären wie häufig und wie lang Freezing-Episoden auftreten und welche Hilfe dann nötig ist.' },
              { thema: 'Zeitbedarf für Alltagsaufgaben benennen', desc: 'Nicht nur "brauche Hilfe beim Ankleiden" — sondern: "Das Ankleiden dauert 60 Minuten und braucht Hilfe bei jedem Schritt." Zeitangaben machen den Hilfebedarf greifbar.' },
              { thema: 'Schluck- und Sprachprobleme nicht vergessen', desc: 'Dysphagie (Schluckstörungen) und leises, undeutliches Sprechen (Hypophonie) können erheblichen Pflegebedarf verursachen und werden bei der Begutachtung berücksichtigt.' },
              { thema: 'Psychische Begleiterscheinungen benennen', desc: 'Depressionen, Angststörungen, Demenz (bei fortgeschrittenem Parkinson häufig) erhöhen die Punktzahl in der NBA-Bewertung erheblich. Diese müssen aktiv angesprochen werden.' },
            ].map((item) => (
              <div key={item.thema} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.thema}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Vollständige Vorbereitung:{' '}
            <a href="/pflegegrad-begutachtung-vorbereiten/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">MD-Begutachtung vorbereiten</a>
          </p>

          <h2 id="leistungen" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Leistungen & Kassenzuschüsse bei Parkinson
          </h2>
          <div className="bg-white rounded-2xl border border-[#E5E3DF] overflow-hidden mb-10 shadow-sm">
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

          <h2 id="hoehergruppierung" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Höherstufung bei Parkinson — wann und wie
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Parkinson ist eine progrediente Erkrankung — der Pflegebedarf nimmt regelmäßig zu. Angehörige sollten proaktiv prüfen ob eine Höherstufung angezeigt ist. Typische Signale:
          </p>
          <div className="space-y-3 mb-10">
            {[
              'On-Off-Phasen werden häufiger und länger',
              'Freezing tritt öfter auf und dauert länger',
              'Neue Symptome: Schluckstörungen, Sprachprobleme, kognitive Einschränkungen',
              'Die Morgenpflege dauert deutlich länger als früher',
              'Alleinbleiben ist nicht mehr sicher (Sturzrisiko)',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-[#E5E3DF]">
                <span className="w-5 h-5 rounded-full bg-[#FDF0EE] text-[#E76F63] flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">!</span>
                <p className="text-[14px] text-[#2E2E2E]">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Höherstufungsantrag:{' '}
            <a href="/pflegegrad-erhoehen/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Pflegegrad erhöhen — wann und wie</a>
            {' · '}
            <a href="/parkinson-pflege-zuhause/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Parkinson Pflege zuhause</a>
          </p>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Welchen Pflegegrad bekommt man bei Parkinson?', a: 'Je nach Stadium: PG 1 bei leichten Einschränkungen, PG 2–3 bei moderaten Gangstörungen und Hilfebedarf, PG 3–4 bei schwerem Parkinson mit On-Off-Phasen, PG 4–5 bei vollständiger Pflegeabhängigkeit.' },
              { q: 'Was ist das On-Off-Problem bei der Begutachtung?', a: 'Parkinson-Patienten haben Phasen guter (On) und schlechter (Off) Mobilität. Der Begutachtungstermin fällt oft in eine On-Phase — der tatsächliche Hilfebedarf wird unterschätzt. Lösung: Off-Phasen im Tagebuch dokumentieren.' },
              { q: 'Wie oft muss bei Parkinson der Pflegegrad angepasst werden?', a: 'Parkinson ist progressiv — der Pflegebedarf nimmt zu. Höherstufungsantrag stellen wenn neue oder verstärkte Einschränkungen auftreten. Kein fester Rhythmus, aber proaktiv beobachten.' },
              { q: 'Was zahlt die Krankenversicherung bei Parkinson?', a: 'Physiotherapie, Ergotherapie, Logopädie (Schlucktherapie), Medikamente. Hilfsmittel wie Rollator, Rollstuhl, Badehilfen. Das läuft parallel zu den Pflegekasse-Leistungen.' },
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
