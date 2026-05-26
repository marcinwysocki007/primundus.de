import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [
  { id: 'was-ist', title: 'Was bedeutet Pflegegrad 2?' },
  { id: 'leistungen', title: 'Leistungen & Beträge 2026' },
  { id: 'voraussetzungen', title: 'Voraussetzungen & Einstufung' },
  { id: 'alltag', title: '24h-Pflege bei Pflegegrad 2' },
  { id: 'hoeher', title: 'Höherstufung auf PG 3' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflegegrad 2 — Leistungen & 347 € Pflegegeld 2026 | Primundus',
  description: 'Pflegegrad 2: 347 € Pflegegeld/Monat, 796 € Sachleistungen, 3.539 € Entlastungsbudget/Jahr. Alle Leistungen, Voraussetzungen und ob 24h-Pflege sinnvoll ist.',
  alternates: { canonical: 'https://primundus.de/pflegegrad-2/' },
  openGraph: {
    title: 'Pflegegrad 2 — Leistungen & Beträge 2026 | Primundus',
    description: 'Pflegegrad 2: 347 € Pflegegeld + 796 € Sachleistungen + 3.539 € Entlastungsbudget. Alle Leistungen 2026.',
    url: 'https://primundus.de/pflegegrad-2/',
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
    headline: 'Pflegegrad 2 — Leistungen, Beträge & Voraussetzungen 2026',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/pflegegrad-2/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Pflegegrade', item: 'https://primundus.de/pflegegrade/' },
      { '@type': 'ListItem', position: 3, name: 'Pflegegrad 2', item: 'https://primundus.de/pflegegrad-2/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was bekommt man bei Pflegegrad 2?', acceptedAnswer: { '@type': 'Answer', text: 'Bei Pflegegrad 2 gibt es 347 € Pflegegeld/Monat (wenn Angehörige pflegen), 796 € Pflegesachleistungen (für ambulante Pflegedienste), 131 € Entlastungsbetrag/Monat und 3.539 € Entlastungsbudget/Jahr für Verhinderungs- und Kurzzeitpflege. Stand 2026, identisch zu 2025.' } },
      { '@type': 'Question', name: 'Was sind die Voraussetzungen für Pflegegrad 2?', acceptedAnswer: { '@type': 'Answer', text: 'Pflegegrad 2 wird vergeben wenn beim NBA-Begutachtungsverfahren 27 bis 47,4 Punkte erreicht werden. Es liegt erhebliche Beeinträchtigung der Selbstständigkeit vor — Hilfe bei mehreren Alltagsaktivitäten nötig, aber noch weitgehend eigenständig.' } },
      { '@type': 'Question', name: 'Kann man mit Pflegegrad 2 eine 24h-Betreuungskraft bekommen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja — 24h-Pflege ist ab Pflegegrad 2 möglich. Bei PG 2 ist der Pflegebedarf noch moderat, aber eine rund um die Uhr präsente Betreuungskraft kann sinnvoll sein wenn der Pflegebedürftige allein lebt, Sicherheitsrisiken bestehen oder Angehörige nicht täglich präsent sein können.' } },
    ],
  },
]

export default function Pflegegrad2() {
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
            <span className="text-[#1C1C1C]">Pflegegrad 2</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>6 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            Pflegegrad 2 — Leistungen & Beträge 2026
          </h1>

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            Pflegegrad 2 ist der Einstiegspflegegrad für regelmäßige Kassenleistungen. Betroffene erhalten 347 € Pflegegeld pro Monat, 796 € Sachleistungen und 3.539 € Entlastungsbudget pro Jahr. PG 2 bedeutet erhebliche Beeinträchtigung — Hilfe bei mehreren Alltagsaktivitäten nötig, aber noch weitgehende Selbstständigkeit.
          </p>

          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 mb-10 shadow-sm">
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#A89279] mb-3">Auf einen Blick — Pflegegrad 2</p>
            <ul className="space-y-2.5">
              {[
                'Pflegegeld: 347 €/Monat (wenn Angehörige oder private Kräfte pflegen)',
                'Pflegesachleistungen: 796 €/Monat (für ambulante Pflegedienste)',
                'Entlastungsbetrag: 131 €/Monat zusätzlich',
                'Entlastungsbudget: 3.539 €/Jahr für Verhinderungs- und Kurzzeitpflege',
                'Voraussetzung: 27–47,4 Punkte im NBA-Begutachtungsverfahren',
                'Keine Erhöhung 2026 — nächste Dynamisierung frühestens Januar 2028',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-[#2E2E2E]">
                  <span className="w-5 h-5 rounded-full bg-[#E8F5EE] text-[#3D7A5C] flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <h2 id="was-ist" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Was bedeutet Pflegegrad 2?
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">
            Pflegegrad 2 steht für <strong>erhebliche Beeinträchtigung der Selbstständigkeit</strong>. Betroffene brauchen regelmäßige Unterstützung bei mehreren Alltagsaktivitäten — sind aber noch in vielen Bereichen selbstständig.
          </p>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Typische Situationen bei Pflegegrad 2: Leichte Demenz mit Orientierungsproblemen, eingeschränkte Mobilität nach Sturz oder OP, beginnende Parkinson-Erkrankung, Herzinsuffizienz mit Erschöpfung, Sehbehinderung die Alltagsaktivitäten erschwert.
          </p>
          <div className="space-y-3 mb-10">
            {[
              { title: 'Was noch selbstständig möglich ist', desc: 'Einfache Körperpflege, kurze Wege ohne Hilfsmittel, einfache Mahlzeiten, Gespräche führen. Die Selbstständigkeit ist erheblich — aber nicht vollständig — eingeschränkt.' },
              { title: 'Wo regelmäßige Hilfe nötig ist', desc: 'Körperpflege (Dusche, Haarpflege), Mobilität außer Haus, Kochen komplexerer Mahlzeiten, Medikamentenverwaltung, Behördenkommunikation.' },
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
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#8B8B8B]">Alle Leistungen bei Pflegegrad 2 — Stand 2026</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody>
                  {[
                    ['Pflegegeld', '347 €/Monat', 'Wenn Angehörige oder private Kräfte pflegen'],
                    ['Pflegesachleistungen', '796 €/Monat', 'Für ambulante Pflegedienste'],
                    ['Entlastungsbetrag', '131 €/Monat', 'Für anerkannte Betreuungsangebote'],
                    ['Entlastungsbudget', '3.539 €/Jahr', 'Verhinderungs- & Kurzzeitpflege'],
                    ['Tages-/Nachtpflege', '721 €/Monat', 'Eigenes Budget, keine Anrechnung'],
                    ['Pflegehilfsmittel', '42 €/Monat', 'Handschuhe, Desinfektionsmittel etc.'],
                    ['Wohnraumanpassung', 'bis 4.180 €/Maßnahme', 'Treppenlift, Badumbau etc.'],
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
            → Alle Zuschüsse kombinieren:{' '}
            <a href="/finanzierung/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Finanzierung der 24h-Pflege — alle Zuschüsse 2026</a>
          </p>

          <h2 id="voraussetzungen" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Voraussetzungen & Einstufung
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Pflegegrad 2 wird vergeben wenn beim NBA-Begutachtungsverfahren <strong>27 bis 47,4 Punkte</strong> erreicht werden. Der Medizinische Dienst bewertet sechs Lebensbereiche — Selbstversorgung hat mit 36 % das höchste Gewicht.
          </p>
          <div className="bg-white rounded-2xl border border-[#E5E3DF] overflow-hidden mb-6 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#F8F7F5]">
                    {['Pflegegrad', 'Punkte', 'Pflegegeld', 'Bezeichnung'].map(h => (
                      <th key={h} className="px-4 py-3 text-[12px] font-semibold text-[#8B8B8B] text-left border-b border-[#E5E3DF]">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['PG 1', '12,5–26,9', '—', 'Geringe Beeinträchtigung'],
                    ['PG 2', '27–47,4', '347 €', 'Erhebliche Beeinträchtigung'],
                    ['PG 3', '47,5–69,9', '599 €', 'Schwere Beeinträchtigung'],
                    ['PG 4', '70–89,9', '800 €', 'Schwerste Beeinträchtigung'],
                    ['PG 5', '90–100', '990 €', 'Schwerste + besondere Anforderungen'],
                  ].map(([grad, punkte, pg, text], i) => (
                    <tr key={grad} className={i === 1 ? 'bg-[#F2EDE6]' : i % 2 === 0 ? 'bg-white' : 'bg-[#F8F7F5]'}>
                      <td className={`px-4 py-3 text-[14px] font-semibold border-b border-[#E5E3DF] ${i === 1 ? 'text-[#8B7355]' : 'text-[#1C1C1C]'}`}>{grad}</td>
                      <td className="px-4 py-3 text-[13px] text-[#8B8B8B] border-b border-[#E5E3DF]">{punkte}</td>
                      <td className={`px-4 py-3 text-[14px] font-bold border-b border-[#E5E3DF] ${i === 1 ? 'text-[#8B7355]' : 'text-[#3D7A5C]'}`}>{pg}</td>
                      <td className="px-4 py-3 text-[13px] text-[#2E2E2E] border-b border-[#E5E3DF]">{text}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Pflegegrad beantragen:{' '}
            <a href="/pflegegrad-beantragen/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Schritt für Schritt Anleitung</a>
            {' · '}
            <a href="/pflegegrad-begutachtung-vorbereiten/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Begutachtung vorbereiten</a>
          </p>

          <h2 id="alltag" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            24h-Pflege bei Pflegegrad 2 — wann sinnvoll?
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Bei Pflegegrad 2 ist der Pflegebedarf noch moderat — aber eine 24h-Betreuungskraft kann schon jetzt sinnvoll sein, besonders in diesen Situationen:
          </p>
          <div className="space-y-3 mb-6">
            {[
              { title: 'Alleinlebend', desc: 'Wenn der Pflegebedürftige allein lebt und niemand täglich vorbeischauen kann. Die Betreuungskraft gibt Sicherheit und Gesellschaft.' },
              { title: 'Beginnende Demenz', desc: 'Schon im frühen Stadium bietet eine feste Bezugsperson Orientierung und verlangsamt den Verlauf.' },
              { title: 'Sturzrisiko', desc: 'Bei eingeschränkter Mobilität und Sturzgefahr ist permanente Präsenz eine wichtige Prävention.' },
              { title: 'Angehörige überlastet', desc: 'Wenn Kinder oder Partner an ihre Belastungsgrenze kommen — bevor es zum Burnout kommt.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.title}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Wann 24h-Pflege die richtige Lösung ist:{' '}
            <a href="/wann-brauche-ich-24h-pflege/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Wann brauche ich 24h-Pflege?</a>
          </p>

          <h2 id="hoeher" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Höherstufung auf Pflegegrad 3
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Bei PG 3 steigt das Pflegegeld auf 599 €/Monat (+252 €) und die Sachleistungen auf 1.497 €/Monat. Ein Antrag auf Höherstufung lohnt sich wenn sich der Pflegebedarf verschlechtert hat — keine Sperrfrist, jederzeit möglich.
          </p>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Details:{' '}
            <a href="/pflegegrad-3/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Pflegegrad 3 — Leistungen & Beträge</a>
            {' · '}
            <a href="/pflegegrad-erhoehen/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Pflegegrad erhöhen — wann und wie</a>
          </p>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">
            Häufige Fragen zu Pflegegrad 2
          </h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Was bekommt man bei Pflegegrad 2?', a: '347 € Pflegegeld/Monat, 796 € Sachleistungen/Monat, 131 € Entlastungsbetrag/Monat und 3.539 € Entlastungsbudget/Jahr. Alle Beträge 2026 identisch zu 2025.' },
              { q: 'Was sind die Voraussetzungen für Pflegegrad 2?', a: '27–47,4 Punkte im NBA-Begutachtungsverfahren. Erhebliche Beeinträchtigung der Selbstständigkeit — regelmäßige Hilfe bei mehreren Alltagsaktivitäten nötig.' },
              { q: 'Kann man mit Pflegegrad 2 eine 24h-Betreuungskraft bekommen?', a: 'Ja — 24h-Pflege ist ab PG 2 möglich. Besonders sinnvoll wenn der Pflegebedürftige allein lebt, Sicherheitsrisiken bestehen oder Angehörige nicht täglich präsent sein können.' },
              { q: 'Wie beantrage ich Pflegegrad 2?', a: 'Antrag bei der Pflegekasse stellen, MD-Begutachtung abwarten. Pflegetagebuch führen und beim Termin den schlechtesten Tagesverlauf schildern. Leistungen gelten rückwirkend ab Antragsdatum.' },
              { q: 'Wann lohnt sich die Höherstufung auf PG 3?', a: 'Wenn sich der Pflegebedarf verschlechtert hat. Bei PG 3 steigt das Pflegegeld auf 599 €/Monat (+252 €) und Sachleistungen auf 1.497 €/Monat. Keine Sperrfrist — jederzeit beantragbar.' },
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
