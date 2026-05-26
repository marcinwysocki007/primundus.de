import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [
  { id: 'wann', title: 'Wann Höherstufung beantragen?' },
  { id: 'antrag', title: 'Antrag stellen — so geht es' },
  { id: 'vorbereitung', title: 'Begutachtung vorbereiten' },
  { id: 'unterschied', title: 'Was sich finanziell ändert' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflegegrad erhöhen — wann & wie Höherstufung beantragen | Primundus',
  description: 'Pflegegrad erhöhen 2026: Wann ein Antrag auf Höherstufung sinnvoll ist, wie man ihn stellt und wie die Begutachtung vorbereitet wird. Mit Checkliste.',
  alternates: { canonical: 'https://primundus.de/pflegegrad-erhoehen/' },
  openGraph: {
    title: 'Pflegegrad erhöhen — Höherstufung beantragen | Primundus',
    description: 'Wann und wie man einen höheren Pflegegrad beantragt — Anleitung und Vorbereitung.',
    url: 'https://primundus.de/pflegegrad-erhoehen/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pflegegrad erhöhen — wann und wie Höherstufung beantragen 2026',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/pflegegrad-erhoehen/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Pflegegrade', item: 'https://primundus.de/pflegegrade/' },
      { '@type': 'ListItem', position: 3, name: 'Pflegegrad erhöhen', item: 'https://primundus.de/pflegegrad-erhoehen/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Wie beantrage ich einen höheren Pflegegrad?', acceptedAnswer: { '@type': 'Answer', text: 'Formloser schriftlicher Antrag bei der Pflegekasse: "Ich beantrage eine Überprüfung meines Pflegegrades aufgrund einer Verschlechterung meines Pflegezustands." Danach neue Begutachtung durch den MD. Pflegetagebuch 1–2 Wochen führen um die Verschlechterung zu dokumentieren.' } },
      { '@type': 'Question', name: 'Gibt es eine Sperrfrist beim Antrag auf Höherstufung?', acceptedAnswer: { '@type': 'Answer', text: 'Nein — einen Antrag auf Höherstufung kann man jederzeit stellen, es gibt keine Sperrfrist. Bei einer Wiederbegutachtung wird der aktuelle Pflegebedarf neu bewertet.' } },
    ],
  },
]

export default function PflegegradErhoehen() {
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
            <span className="text-[#1C1C1C]">Pflegegrad erhöhen</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>5 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            Pflegegrad erhöhen — wann & wie Höherstufung beantragen
          </h1>

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            Wenn sich der Pflegebedarf verschlechtert, sollte sofort ein Antrag auf Höherstufung gestellt werden — denn jede Pflegegrad-Stufe bedeutet hunderte Euro mehr Kassenzuschuss pro Monat. Es gibt keine Sperrfrist. Der Antrag ist formlos, die Leistungen gelten ab Antragsdatum.
          </p>

          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 mb-10 shadow-sm">
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#A89279] mb-3">Was sich bei Höherstufung ändert</p>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    {['Von → Nach', 'Mehr Pflegegeld/Monat', 'Mehr/Jahr (Pflegegeld)'].map(h => (
                      <th key={h} className="text-left text-[12px] font-semibold text-[#8B8B8B] pb-2 pr-4">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E3DF]">
                  {[
                    ['PG 1 → PG 2', '+ 347 €/Monat', '+ 4.164 €/Jahr'],
                    ['PG 2 → PG 3', '+ 252 €/Monat', '+ 3.024 €/Jahr'],
                    ['PG 3 → PG 4', '+ 201 €/Monat', '+ 2.412 €/Jahr'],
                    ['PG 4 → PG 5', '+ 190 €/Monat', '+ 2.280 €/Jahr'],
                  ].map(([stufe, mehr, jahr]) => (
                    <tr key={stufe}>
                      <td className="py-2 pr-4 text-[14px] font-semibold text-[#1C1C1C]">{stufe}</td>
                      <td className="py-2 pr-4 text-[14px] font-bold text-[#3D7A5C]">{mehr}</td>
                      <td className="py-2 text-[14px] text-[#2E2E2E]">{jahr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <h2 id="wann" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Wann sollte man Höherstufung beantragen?
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Ein Antrag auf Höherstufung ist sinnvoll wenn der Pflegebedarf dauerhaft gestiegen ist. Das kann durch Verschlechterung einer bestehenden Erkrankung, eine neue Diagnose oder eine allgemeine Zunahme der Abhängigkeit passieren.
          </p>
          <div className="space-y-3 mb-10">
            {[
              { signal: 'Körperliche Verschlechterung', desc: 'Neuer Sturz mit Folgen, Zunahme von Schmerzen oder Einschränkungen, Erkrankungsschübe, Verlust von Alltagsfähigkeiten.' },
              { signal: 'Kognitive Verschlechterung', desc: 'Demenzverlauf schreitet fort — mehr Orientierungslosigkeit, neue Verhaltensauffälligkeiten (Weglaufen), nächtliche Unruhe nimmt zu.' },
              { signal: 'Neue Diagnose', desc: 'Zusätzliche Erkrankung (Schlaganfall, Parkinson-Fortschritt, Herzinsuffizienz) erhöht den Pflegebedarf deutlich.' },
              { signal: 'Erhöhter Pflegeaufwand', desc: 'Angehörige bemerken: Die Pflege dauert länger, ist körperlich anstrengender, erfordert Hilfe bei mehr Bereichen als früher.' },
            ].map((item) => (
              <div key={item.signal} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.signal}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 id="antrag" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Antrag stellen — so einfach geht es
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">
            Der Antrag auf Höherstufung ist formlos — ein kurzes Schreiben an die Pflegekasse reicht aus. Kein spezielles Formular nötig.
          </p>
          <div className="bg-[#E8F5EE] border border-[rgba(61,122,92,0.2)] rounded-2xl p-5 mb-6">
            <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#2A5C3F] mb-2">Musterformulierung für den Antrag</p>
            <p className="text-[14px] text-[#2A5C3F] leading-relaxed italic">
              "Sehr geehrte Damen und Herren, hiermit beantrage ich für [Name des Versicherten], geb. [Datum], Versichertennummer [Nummer], eine Überprüfung des aktuellen Pflegegrades aufgrund einer erheblichen Verschlechterung des Gesundheitszustands. Ich bitte um zeitnahe Begutachtung. Mit freundlichen Grüßen, [Unterschrift]"
            </p>
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-6">
            <strong>Wichtig:</strong> Das Datum des Antrags ist entscheidend — ab diesem Datum gelten höhere Leistungen wenn die Höherstufung bewilligt wird. Nicht warten.
          </p>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Antrag vollständig erklärt:{' '}
            <a href="/pflegegrad-beantragen/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Pflegegrad beantragen — Schritt für Schritt</a>
          </p>

          <h2 id="vorbereitung" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Begutachtung für Höherstufung vorbereiten
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Nach dem Antrag kommt ein neuer Begutachtungstermin. Die Vorbereitung ist dieselbe wie beim Erstantrag — mit besonderem Fokus auf die Verschlechterungen seit der letzten Begutachtung.
          </p>
          <div className="space-y-3 mb-6">
            {[
              { check: 'Pflegetagebuch der letzten 2 Wochen — mit konkreten Beispielen der Verschlechterung' },
              { check: 'Neue Arztberichte und Befunde seit der letzten Begutachtung' },
              { check: 'Vertrauensperson dabei haben die die Verschlechterung schildern kann' },
              { check: 'Schlechtesten Tag schildern — nicht den guten Tag' },
              { check: 'Konkret benennen was früher noch ging und jetzt nicht mehr' },
            ].map((item) => (
              <div key={item.check} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-[#E5E3DF]">
                <span className="w-5 h-5 rounded-full bg-[#E8F5EE] text-[#3D7A5C] flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">✓</span>
                <p className="text-[14px] text-[#2E2E2E]">{item.check}</p>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Alle Tipps:{' '}
            <a href="/pflegegrad-begutachtung-vorbereiten/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">MD-Begutachtung vorbereiten — Checkliste & 7 Tipps</a>
          </p>

          <h2 id="unterschied" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Was sich bei Höherstufung finanziell ändert
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Jede Pflegegrad-Stufe bedeutet mehr Kassenzuschüsse — und damit einen niedrigeren Eigenanteil bei der 24h-Pflege.
          </p>
          <div className="bg-white rounded-2xl border border-[#E5E3DF] overflow-hidden mb-10 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#F8F7F5]">
                    {['Pflegegrad', 'Pflegegeld/Mo', 'Sachleistungen/Mo', 'Entlastungsbudget/Jahr'].map(h => (
                      <th key={h} className="px-4 py-3 text-[12px] font-semibold text-[#8B8B8B] text-left border-b border-[#E5E3DF]">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['PG 1', '—', '—', '—'],
                    ['PG 2', '347 €', '796 €', '3.539 €'],
                    ['PG 3', '599 €', '1.497 €', '3.539 €'],
                    ['PG 4', '800 €', '1.859 €', '3.539 €'],
                    ['PG 5', '990 €', '2.299 €', '3.539 €'],
                  ].map(([grad, pg, sach, budget], i) => (
                    <tr key={grad} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8F7F5]'}>
                      <td className="px-4 py-3 text-[14px] font-semibold text-[#1C1C1C] border-b border-[#E5E3DF]">{grad}</td>
                      <td className={`px-4 py-3 text-[14px] font-bold border-b border-[#E5E3DF] ${pg === '—' ? 'text-[#C8C3BA]' : 'text-[#3D7A5C]'}`}>{pg}</td>
                      <td className={`px-4 py-3 text-[14px] border-b border-[#E5E3DF] ${sach === '—' ? 'text-[#C8C3BA]' : 'text-[#2E2E2E]'}`}>{sach}</td>
                      <td className={`px-4 py-3 text-[14px] border-b border-[#E5E3DF] ${budget === '—' ? 'text-[#C8C3BA]' : 'text-[#2E2E2E]'}`}>{budget}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen zur Höherstufung</h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Wie beantrage ich einen höheren Pflegegrad?', a: 'Formloser schriftlicher Antrag bei der Pflegekasse: "Ich beantrage eine Überprüfung meines Pflegegrades aufgrund einer Verschlechterung." Danach neue MD-Begutachtung. Pflegetagebuch 1–2 Wochen führen.' },
              { q: 'Gibt es eine Sperrfrist?', a: 'Nein — Antrag auf Höherstufung kann jederzeit gestellt werden. Der aktuelle Pflegebedarf wird neu bewertet.' },
              { q: 'Ab wann gelten die höheren Leistungen?', a: 'Ab Antragsdatum — nicht ab dem Begutachtungstermin. Deshalb sofort Antrag stellen, auch wenn die Begutachtung erst Wochen später stattfindet.' },
              { q: 'Was wenn die Höherstufung abgelehnt wird?', a: 'Innerhalb eines Monats Widerspruch einlegen. Neues Pflegetagebuch und aktualisierte Arztberichte nachreichen. Widersprüche sind bei Höherstufungsanträgen häufig erfolgreich.' },
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
