import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [
  { id: 'wann-melden', title: 'Wann eine Beschwerde sinnvoll ist' },
  { id: 'an-wen', title: 'An wen wendet man sich?' },
  { id: 'wie-melden', title: 'Wie eine Beschwerde einreichen' },
  { id: 'heimaufsicht', title: 'Heimaufsicht & MDK' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflegemangel melden — Beschwerden richtig einreichen | Primundus',
  description: 'Pflegemangel melden: An wen man sich bei Problemen in der Pflege wendet, wie eine Beschwerde eingereicht wird und welche Stellen zuständig sind.',
  alternates: { canonical: 'https://primundus.de/pflegemangel-melden-beschwerden/' },
  openGraph: {
    title: 'Pflegemangel melden | Primundus',
    description: 'Probleme in der Pflege melden — welche Stellen zuständig sind und wie man vorgeht.',
    url: 'https://primundus.de/pflegemangel-melden-beschwerden/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pflegemangel melden — Beschwerden richtig einreichen',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/pflegemangel-melden-beschwerden/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Rechtliches', item: 'https://primundus.de/rechtliches/' },
      { '@type': 'ListItem', position: 3, name: 'Pflegemangel melden', item: 'https://primundus.de/pflegemangel-melden-beschwerden/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Wo kann man Pflegemängel melden?',
        acceptedAnswer: { '@type': 'Answer', text: 'Bei Problemen in der häuslichen Pflege: zunächst direkt bei der Pflegeagentur (z.B. Primundus), dann bei der Pflegekasse. Bei Pflegeheimen: Heimaufsicht des zuständigen Bundeslandes und Medizinischer Dienst (MD). Für Beratung: Pflegestützpunkte bieten kostenlose unabhängige Unterstützung.' },
      },
    ],
  },
]

export default function PflegemangelMeldenBeschwerden() {
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
            <a href="/rechtliches/" className="hover:text-[#8B7355] transition-colors">Rechtliches</a>
            <span>›</span>
            <span className="text-[#1C1C1C]">Pflegemangel melden</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>5 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            Pflegemangel melden — Beschwerden richtig einreichen
          </h1>

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            Wer Pflegemängel erlebt — schlechte Versorgung, Vernachlässigung, unwürdige Behandlung — hat das Recht etwas dagegen zu tun. Dieser Ratgeber zeigt wann und wie man Beschwerden einreicht, an wen man sich wendet, und welche Stellen in Deutschland zuständig sind.
          </p>

          <h2 id="wann-melden" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-6 mb-4 leading-snug">
            Wann eine Beschwerde sinnvoll ist
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Nicht jede Unzufriedenheit rechtfertigt sofort eine formelle Beschwerde — manchmal hilft ein direktes Gespräch. Aber in bestimmten Situationen ist schnelles Handeln nötig.
          </p>
          <div className="space-y-3 mb-10">
            {[
              { situation: 'Sofort handeln — akute Gefahr', items: ['Körperliche oder psychische Gewalt gegen Pflegebedürftigen', 'Grobe Vernachlässigung (kein Essen, keine Pflege)', 'Medikamentenfehler mit Auswirkungen', 'Freiheitsentzug ohne rechtliche Grundlage'], dringend: true },
              { situation: 'Eskalation wenn direktes Gespräch scheitert', items: ['Wiederholt schlechte Pflege trotz Hinweis', 'Nicht eingehaltene Leistungsvereinbarungen', 'Unzumutbare Wohnverhältnisse der Pflegekraft', 'Abrechnungsprobleme und Intransparenz'], dringend: false },
            ].map((block) => (
              <div key={block.situation} className={`rounded-2xl p-5 border ${block.dringend ? 'bg-[#FDF0EE] border-[rgba(231,111,99,0.2)]' : 'bg-white border-[#E5E3DF]'}`}>
                <p className={`text-[12px] font-bold uppercase tracking-[0.08em] mb-3 ${block.dringend ? 'text-[#8B3E2F]' : 'text-[#A89279]'}`}>{block.situation}</p>
                <ul className="space-y-1.5">
                  {block.items.map(item => (
                    <li key={item} className={`text-[14px] flex gap-2 ${block.dringend ? 'text-[#8B3E2F]' : 'text-[#2E2E2E]'}`}>
                      <span className="flex-shrink-0 mt-0.5">{block.dringend ? '!' : '→'}</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 id="an-wen" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            An wen wendet man sich?
          </h2>
          <div className="space-y-3 mb-10">
            {[
              {
                stelle: 'Primundus (bei häuslicher Pflege)',
                kontakt: '089 200 000 830 · info@primundus.de',
                wann: 'Erste Anlaufstelle bei allen Problemen mit der Betreuungskraft. Primundus reagiert sofort — Gespräch mit Kraft, und wenn nötig unmittelbarer Wechsel. Täglich kündbar.',
                primaer: true,
              },
              {
                stelle: 'Pflegekasse',
                kontakt: 'Telefonnummer auf der Versicherungskarte',
                wann: 'Wenn ambulante Pflegeleistungen nicht vertragsgemäß erbracht werden. Pflegekasse kann Qualitätsprüfungen veranlassen.',
                primaer: false,
              },
              {
                stelle: 'Pflegestützpunkt',
                kontakt: 'Lokalen Stützpunkt über pflegestuetzpunkte.de finden',
                wann: 'Kostenlose unabhängige Beratung bei Problemen in der Pflege — für Betroffene und Angehörige. In allen Bundesländern.',
                primaer: false,
              },
              {
                stelle: 'Heimaufsicht (bei Pflegeheim)',
                kontakt: 'Zuständige Behörde im Bundesland (variiert)',
                wann: 'Zuständig für stationäre Pflegeeinrichtungen. Nimmt Beschwerden entgegen, führt unangekündigte Kontrollen durch.',
                primaer: false,
              },
              {
                stelle: 'Medizinischer Dienst (MD)',
                kontakt: 'md-bund.de',
                wann: 'Prüft Qualität von Pflegediensten und Pflegeheimen. Kann Beschwerden aufnehmen und Sonderprüfungen veranlassen.',
                primaer: false,
              },
            ].map((item) => (
              <div key={item.stelle} className={`rounded-xl p-5 border ${item.primaer ? 'bg-white border-[#8B7355] border-2' : 'bg-white border-[#E5E3DF]'}`}>
                <div className="flex items-start justify-between gap-3 mb-1">
                  <p className="text-[15px] font-bold text-[#1C1C1C]">{item.stelle}</p>
                  {item.primaer && <span className="bg-[#F2EDE6] text-[#8B7355] text-[11px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">Erste Anlaufstelle</span>}
                </div>
                <p className="text-[12px] font-semibold text-[#8B7355] mb-1">{item.kontakt}</p>
                <p className="text-[13px] text-[#2E2E2E] leading-relaxed">{item.wann}</p>
              </div>
            ))}
          </div>

          <h2 id="wie-melden" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Wie eine Beschwerde einreichen — Schritt für Schritt
          </h2>
          <ol className="space-y-3 mb-10">
            {[
              { n: '1', title: 'Dokumentieren', desc: 'Vorfälle schriftlich festhalten — Datum, Uhrzeit, was genau passiert ist. Fotos wenn relevant (z.B. Wunden, Wohnzustand). Zeugen notieren.' },
              { n: '2', title: 'Direktes Gespräch versuchen', desc: 'Bei Primundus: sofort anrufen. Oft lässt sich das Problem schnell lösen — Gespräch mit der Kraft, Wechsel, Nachschulung.' },
              { n: '3', title: 'Schriftliche Beschwerde', desc: 'Falls Gespräch scheitert: Beschwerde schriftlich einreichen (per E-Mail oder Brief). Sachlich und konkret — was wann passiert ist, welche Abhilfe erwartet wird.' },
              { n: '4', title: 'Externe Stelle einschalten', desc: 'Bei schwerwiegenden Mängeln oder ausbleibendem Ergebnis: Pflegekasse, Pflegestützpunkt oder Heimaufsicht informieren.' },
              { n: '5', title: 'Bei akuter Gefahr: sofort', desc: 'Körperliche Gewalt oder akute Vernachlässigung sofort der Polizei melden (110) und Pflegekasse informieren.' },
            ].map((step) => (
              <li key={step.n} className="flex gap-4 bg-white rounded-xl p-5 border border-[#E5E3DF] list-none">
                <span className="w-8 h-8 rounded-full bg-[#8B7355] text-white font-bold text-[15px] flex items-center justify-center flex-shrink-0">{step.n}</span>
                <div>
                  <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{step.title}</p>
                  <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>

          <h2 id="heimaufsicht" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Heimaufsicht & Medizinischer Dienst
          </h2>
          <div className="space-y-3 mb-10">
            <div className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
              <p className="text-[15px] font-bold text-[#1C1C1C] mb-2">Heimaufsicht — zuständig für stationäre Pflege</p>
              <p className="text-[14px] text-[#2E2E2E] leading-relaxed">Jedes Bundesland hat eine Heimaufsichtsbehörde die Pflegeheime überwacht. Bei Beschwerden über ein Pflegeheim: Heimaufsicht des zuständigen Bundeslandes kontaktieren. Diese kann unangekündigte Kontrollen durchführen und Maßnahmen anordnen.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
              <p className="text-[15px] font-bold text-[#1C1C1C] mb-2">Medizinischer Dienst (MD) — prüft ambulante und stationäre Pflege</p>
              <p className="text-[14px] text-[#2E2E2E] leading-relaxed">Der MD prüft regelmäßig Qualität von Pflegeeinrichtungen und ambulanten Diensten. Beschwerden können über md-bund.de eingereicht werden. Bei begründetem Verdacht: Sonderprüfung möglich.</p>
            </div>
            <div className="bg-[#E8F5EE] border border-[rgba(61,122,92,0.2)] rounded-xl p-5">
              <p className="text-[14px] font-bold text-[#2A5C3F] mb-1">Kostenlose Beratung: Pflegestützpunkt</p>
              <p className="text-[14px] text-[#2A5C3F] leading-relaxed">Pflegestützpunkte in jedem Bundesland bieten kostenlose, unabhängige Beratung — auch bei Beschwerden und Konflikten. Lokalen Stützpunkt finden: pflegestuetzpunkte.de</p>
            </div>
          </div>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Wo kann man Pflegemängel melden?', a: 'Bei häuslicher Pflege: zunächst direkt bei der Agentur (Primundus: 089 200 000 830), dann bei der Pflegekasse. Bei Pflegeheimen: Heimaufsicht des Bundeslandes und Medizinischer Dienst. Für Beratung: Pflegestützpunkt kostenlos und unabhängig.' },
              { q: 'Kann ich die Betreuungskraft sofort abberufen?', a: 'Ja — bei Primundus täglich kündbar. Bei akuten Problemen sofort anrufen: 089 200 000 830. Primundus stellt unverzüglich Ersatz.' },
              { q: 'Was tun wenn jemand in einem Pflegeheim vernachlässigt wird?', a: 'Vorfälle dokumentieren, mit Heimleitung sprechen. Wenn ohne Ergebnis: Heimaufsicht des Bundeslandes einschalten. Bei akuter Gefahr: Polizei (110) und Pflegekasse informieren.' },
              { q: 'Ist eine Beschwerde beim MD kostenlos?', a: 'Ja — der Medizinische Dienst nimmt Beschwerden kostenlos entgegen. Auch Pflegestützpunkte beraten kostenlos.' },
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
