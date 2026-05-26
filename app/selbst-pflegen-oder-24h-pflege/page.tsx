import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [
  { id: 'ehrliche-fragen', title: 'Die ehrlichen Fragen' },
  { id: 'wenn-selbst', title: 'Wann Selbstpflege funktioniert' },
  { id: 'grenzen', title: 'Grenzen der Selbstpflege' },
  { id: 'kombination', title: 'Kombination: Angehörige + 24h-Kraft' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Selbst pflegen oder 24h-Pflege? — Ehrlicher Vergleich | Primundus',
  description: 'Selbst pflegen oder eine 24h-Betreuungskraft? Ein ehrlicher Vergleich: wann Angehörigenpflege funktioniert, wann sie an Grenzen stößt und welche Kombination am besten trägt.',
  alternates: { canonical: 'https://primundus.de/selbst-pflegen-oder-24h-pflege/' },
  openGraph: {
    title: 'Selbst pflegen oder 24h-Pflege? | Primundus',
    description: 'Wann Angehörigenpflege reicht — und wann eine 24h-Kraft die bessere Entscheidung ist.',
    url: 'https://primundus.de/selbst-pflegen-oder-24h-pflege/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Selbst pflegen oder 24h-Pflege — ehrlicher Vergleich',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/selbst-pflegen-oder-24h-pflege/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Vergleiche', item: 'https://primundus.de/vergleiche/' },
      { '@type': 'ListItem', position: 3, name: 'Selbst pflegen oder 24h-Pflege', item: 'https://primundus.de/selbst-pflegen-oder-24h-pflege/' },
    ],
  },
]

export default function SelbstPflegenOder24h() {
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
            <a href="/vergleiche/" className="hover:text-[#8B7355] transition-colors">Vergleiche</a>
            <span>›</span>
            <span className="text-[#1C1C1C]">Selbst pflegen oder 24h-Pflege</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>7 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            Selbst pflegen oder 24h-Pflege? — Ehrlicher Vergleich
          </h1>

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            Die Entscheidung zwischen Selbstpflege und professioneller 24h-Betreuung ist eine der schwierigsten die pflegende Familien treffen. Sie ist emotional aufgeladen — und wird oft zu lange hinausgezögert. Dieser Ratgeber gibt keine schnelle Antwort. Aber er stellt die Fragen die gestellt werden müssen.
          </p>

          <h2 id="ehrliche-fragen" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-6 mb-4 leading-snug">
            Die ehrlichen Fragen — Selbsttest
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Beantworten Sie diese Fragen ehrlich — sie zeigen wo Sie heute stehen.
          </p>
          <div className="space-y-3 mb-10">
            {[
              { frage: 'Schlafen Sie durch?', bedeutung: 'Wenn die Pflege nächtliche Unterbrechungen bedeutet — wer übernimmt das? Dauerhafter Schlafentzug macht die eigene Pflege unmöglich.' },
              { frage: 'Haben Sie noch Zeit für sich?', bedeutung: 'Mindestens 2 Stunden täglich die nur Ihnen gehören? Wenn nicht: Burnout ist nah.' },
              { frage: 'Können Sie sich noch Fehler erlauben?', bedeutung: 'Wer pflegt ist irgendwann müde und macht Fehler. Wer springt ein? Gibt es Backup?' },
              { frage: 'Ist die Pflege körperlich für Sie noch machbar?', bedeutung: 'Heben, Transfers, Körperpflege — das geht an die Grenzen. Rückenverletzungen durch Pflegearbeit sind häufig.' },
              { frage: 'Haben Sie noch eine Beziehung — nicht nur eine Pflegebeziehung?', bedeutung: 'Wer 24h pflegt hört irgendwann auf, Sohn oder Tochter zu sein und wird zur Pflegekraft. Das belastet beide Seiten.' },
              { frage: 'Was würde passieren wenn Sie morgen ausfallen?', bedeutung: 'Gibt es einen Plan B? Wenn nicht: Das Risiko liegt vollständig bei Ihnen.' },
            ].map((item) => (
              <div key={item.frage} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">→ {item.frage}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.bedeutung}</p>
              </div>
            ))}
          </div>

          <h2 id="wenn-selbst" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Wann Selbstpflege funktioniert
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Angehörigenpflege kann sehr gut funktionieren — unter bestimmten Voraussetzungen.
          </p>
          <div className="space-y-3 mb-10">
            {[
              'Pflegebedarf ist klar begrenzt und berechenbar (keine Nacht-Situationen)',
              'Mehrere Angehörige teilen die Verantwortung fair und verlässlich',
              'Die pflegende Person hat eigene Auszeiten und Erholung',
              'Es gibt einen klaren Notfallplan wenn jemand ausfällt',
              'Die Beziehung zwischen Pflegenden und Pflegebedürftigem bleibt gut',
              'Körperlich ist die Pflege ohne Eigengefährdung machbar',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-[#E8F5EE] rounded-xl p-4 border border-[rgba(61,122,92,0.15)]">
                <span className="text-[#3D7A5C] flex-shrink-0 font-bold mt-0.5">✓</span>
                <p className="text-[14px] text-[#2A5C3F]">{item}</p>
              </div>
            ))}
          </div>

          <h2 id="grenzen" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Grenzen der Selbstpflege — Warnsignale
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Diese Signale zeigen dass die Selbstpflege an ihre Grenzen stößt — und professionelle Unterstützung nötig wird.
          </p>
          <div className="space-y-3 mb-10">
            {[
              { signal: 'Chronische Erschöpfung', detail: 'Ständige Müdigkeit trotz Schlaf, keine Energie mehr für eigene Bedürfnisse. Das ist kein Durchhänger — das ist Erschöpfung.' },
              { signal: 'Gefühle der Überforderung und Hilflosigkeit', detail: '"Ich kann nicht mehr aber ich kann nicht aufhören." Wenn das die tägliche Erfahrung ist, ist professionelle Hilfe keine Schwäche — sie ist die einzig richtige Entscheidung.' },
              { signal: 'Vernachlässigung der eigenen Gesundheit', detail: 'Eigene Arzttermine werden abgesagt, eigene Erkrankungen werden ignoriert. Wer sich selbst nicht mehr pflegen kann, kann andere nicht gut pflegen.' },
              { signal: 'Beziehungsschäden', detail: 'Wenn die Pflege die Beziehung zur pflegebedürftigen Person zerstört — beide leiden. Eine Betreuungskraft gibt der Beziehung wieder Raum.' },
              { signal: 'Sicherheitsrisiken', detail: 'Wenn durch Erschöpfung Fehler passieren die die Sicherheit des Pflegebedürftigen gefährden.' },
            ].map((item) => (
              <div key={item.signal} className="flex items-start gap-3 bg-[#FDF0EE] rounded-xl p-5 border border-[rgba(231,111,99,0.15)]">
                <span className="text-[#E76F63] flex-shrink-0 font-bold mt-0.5">!</span>
                <div>
                  <p className="text-[14px] font-bold text-[#8B3E2F] mb-0.5">{item.signal}</p>
                  <p className="text-[14px] text-[#8B3E2F] leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Burnout erkennen:{' '}
            <a href="/burnout-pflegende-angehoerige/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Burnout pflegender Angehöriger — Warnsignale & Hilfe</a>
          </p>

          <h2 id="kombination" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Die beste Lösung: Kombination aus Angehörigen + 24h-Kraft
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Die häufigste und meist beste Lösung ist nicht entweder-oder — sondern beides: Eine 24h-Betreuungskraft übernimmt die durchgehende Versorgung und Haushaltsführung. Angehörige können Tochter oder Sohn bleiben — für Besuche, Gespräche, gemeinsame Aktivitäten. Die Pflege wird zur Beziehung, nicht zur Last.
          </p>
          <div className="bg-white rounded-2xl border border-[#E5E3DF] overflow-hidden mb-10 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#F8F7F5]">
                    <th className="px-5 py-3 text-[12px] font-semibold text-[#8B8B8B] text-left border-b border-[#E5E3DF]">Aufgabe</th>
                    <th className="px-5 py-3 text-[12px] font-semibold text-[#8B8B8B] text-left border-b border-[#E5E3DF]">Betreuungskraft</th>
                    <th className="px-5 py-3 text-[12px] font-semibold text-[#8B7355] text-left border-b border-[#E5E3DF]">Angehörige</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Körperpflege täglich', '✓', '—'],
                    ['Haushalt & Kochen', '✓', '—'],
                    ['Nachtbereitschaft', '✓', '—'],
                    ['Medikamentenerinnerung', '✓', '—'],
                    ['Arzt- und Behördengänge', '✓ (begleiten)', '✓ (koordinieren)'],
                    ['Gesellschaft & Gespräch', '✓', '✓'],
                    ['Entscheidungen treffen', '—', '✓'],
                    ['Qualitätssicherung Kraft', '—', '✓'],
                    ['Besuche, Ausflüge, Feiern', '—', '✓'],
                  ].map(([aufg, kraft, ang], i) => (
                    <tr key={aufg} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8F7F5]'}>
                      <td className="px-5 py-3 text-[14px] text-[#2E2E2E] border-b border-[#E5E3DF]">{aufg}</td>
                      <td className="px-5 py-3 text-[14px] text-center font-bold text-[#3D7A5C] border-b border-[#E5E3DF]">{kraft}</td>
                      <td className="px-5 py-3 text-[14px] text-center font-bold text-[#8B7355] border-b border-[#E5E3DF]">{ang}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Wann reicht Angehörigenpflege aus?', a: 'Wenn: Pflegebedarf klar begrenzt, mehrere Angehörige teilen die Last, es gibt Auszeiten und einen Notfallplan, körperliche und emotionale Grenzen noch nicht erreicht.' },
              { q: 'Wann wird eine 24h-Kraft nötig?', a: 'Wenn: Chronische Erschöpfung, Schlafentzug, keine eigene Zeit, Sicherheitsrisiken durch Erschöpfung, die Beziehung leidet, oder der Pflegebedarf die verfügbare Kapazität übersteigt.' },
              { q: 'Ist es ein Versagen wenn man professionelle Hilfe holt?', a: 'Nein — es ist die verantwortungsvolle Entscheidung. Eine 24h-Kraft ermöglicht es, wieder Tochter oder Sohn zu sein statt Vollzeit-Pflegerin. Die Beziehungsqualität steigt oft durch professionelle Entlastung.' },
              { q: 'Können Angehörige und 24h-Kraft zusammenarbeiten?', a: 'Ja — das ist die häufigste und beste Lösung. Die Kraft übernimmt die tägliche Versorgung, Angehörige koordinieren, besuchen und entscheiden. Klare Aufgabenteilung schafft Vertrauen für alle.' },
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
