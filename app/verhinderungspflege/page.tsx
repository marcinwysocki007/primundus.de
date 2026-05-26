import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [
  { id: 'was-ist', title: 'Was ist das Entlastungsbudget?' },
  { id: 'neu-2026', title: 'Was sich 2026 geändert hat' },
  { id: 'beantragen', title: 'Beantragen & nutzen' },
  { id: 'kombinieren', title: 'Mit 24h-Pflege kombinieren' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Verhinderungspflege 2026 — neues Entlastungsbudget erklärt | Primundus',
  description: 'Verhinderungspflege 2026: Seit Juli 2025 gemeinsames Entlastungsbudget von 3.539 €/Jahr. Was sich geändert hat, wie man es beantragt und wie es mit 24h-Pflege kombiniert wird.',
  alternates: { canonical: 'https://primundus.de/verhinderungspflege/' },
  openGraph: {
    title: 'Verhinderungspflege 2026 — neues Entlastungsbudget | Primundus',
    description: 'Verhinderungspflege und Kurzzeitpflege wurden zum Entlastungsbudget (3.539 €/Jahr) zusammengelegt. Alles erklärt.',
    url: 'https://primundus.de/verhinderungspflege/',
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
    headline: 'Verhinderungspflege 2026 — das neue Entlastungsbudget erklärt',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/verhinderungspflege/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Finanzierung', item: 'https://primundus.de/finanzierung/' },
      { '@type': 'ListItem', position: 3, name: 'Verhinderungspflege', item: 'https://primundus.de/verhinderungspflege/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was ist Verhinderungspflege 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Seit 1. Juli 2025 gibt es keine eigenständige Verhinderungspflege mehr. Sie wurde mit der Kurzzeitpflege zum gemeinsamen Entlastungsbudget von 3.539 Euro pro Jahr zusammengefasst. Das Budget gilt für Pflegegrad 2–5 und kann flexibel für beide Leistungsarten genutzt werden.' } },
      { '@type': 'Question', name: 'Wie hoch ist das Entlastungsbudget 2026?', acceptedAnswer: { '@type': 'Answer', text: '3.539 Euro pro Jahr — für Pflegegrad 2 bis 5. Es fasst die frühere Verhinderungspflege (bis 1.685 €) und Kurzzeitpflege (bis 1.854 €) zusammen. Die Vorpflegezeit von 6 Monaten entfällt. Das Budget läuft am 31. Dezember ab.' } },
      { '@type': 'Question', name: 'Wer hat Anspruch auf das Entlastungsbudget?', acceptedAnswer: { '@type': 'Answer', text: 'Pflegebedürftige mit Pflegegrad 2 bis 5, die zu Hause gepflegt werden. Die frühere Voraussetzung von 6 Monaten häuslicher Pflege (Vorpflegezeit) entfällt seit Juli 2025.' } },
      { '@type': 'Question', name: 'Verfällt das Entlastungsbudget am Jahresende?', acceptedAnswer: { '@type': 'Answer', text: 'Ja — nicht genutztes Entlastungsbudget verfällt am 31. Dezember. Wichtig: Belege und Rechnungen rechtzeitig bei der Pflegekasse einreichen. Eine Übertragung ins Folgejahr ist nicht möglich.' } },
    ],
  },
]

export default function Verhinderungspflege() {
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
            <a href="/finanzierung/" className="hover:text-[#8B7355] transition-colors">Finanzierung</a>
            <span>›</span>
            <span className="text-[#1C1C1C]">Verhinderungspflege 2026</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>6 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            Verhinderungspflege 2026 — das neue Entlastungsbudget
          </h1>

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            Seit 1. Juli 2025 gibt es keine eigenständige Verhinderungspflege mehr. Sie wurde mit der Kurzzeitpflege zum gemeinsamen Entlastungsbudget von 3.539 Euro pro Jahr zusammengefasst. 2026 ist das erste volle Jahr ohne Übergangsregelungen — wer das Budget nicht kennt, verschenkt bares Geld.
          </p>

          <div className="bg-[#E8F5EE] border border-[rgba(61,122,92,0.2)] rounded-2xl p-6 mb-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#2A5C3F] mb-3">Das Entlastungsbudget 2026 auf einen Blick</p>
            <div className="space-y-2">
              {[
                { key: 'Betrag', val: '3.539 €/Jahr' },
                { key: 'Für wen', val: 'Pflegegrad 2 bis 5, häusliche Pflege' },
                { key: 'Wofür', val: 'Verhinderungs- und Kurzzeitpflege flexibel kombinierbar' },
                { key: 'Vorpflegezeit', val: 'Entfällt — frühere 6-Monats-Pflicht abgeschafft' },
                { key: 'Max. pro Leistungsart', val: '8 Wochen Verhinderungspflege · 8 Wochen Kurzzeitpflege' },
                { key: 'Pflegegeld während Nutzung', val: 'Wird zur Hälfte weitergezahlt' },
                { key: 'Verfallsfrist', val: '31. Dezember — kein Übertrag ins Folgejahr möglich' },
              ].map((item) => (
                <div key={item.key} className="flex gap-3">
                  <span className="text-[14px] font-bold text-[#2A5C3F] flex-shrink-0 w-[140px]">{item.key}:</span>
                  <span className="text-[14px] text-[#2A5C3F]">{item.val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 1 */}
          <h2 id="was-ist" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Was ist das Entlastungsbudget? (früher: Verhinderungspflege)
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">
            Das Entlastungsbudget ist eine Jahresleistung der Pflegekasse die es Angehörigen ermöglicht, sich eine Auszeit zu nehmen — ohne dass die Pflege unterbrochen wird. Es greift immer dann wenn die pflegende Person vorübergehend ausfällt oder Urlaub braucht.
          </p>
          <div className="space-y-3 mb-6">
            {[
              { title: 'Verhinderungspflege (Teil des Entlastungsbudgets)', desc: 'Wenn die pflegende Person krank wird, Urlaub macht oder vorübergehend ausfällt. Eine andere Person — professionell oder privat — übernimmt die Pflege. Bezahlt wird aus dem gemeinsamen Entlastungsbudget.' },
              { title: 'Kurzzeitpflege (Teil des Entlastungsbudgets)', desc: 'Wenn der Pflegebedürftige vorübergehend in einer Pflegeeinrichtung betreut wird — z.B. nach einem Krankenhausaufenthalt oder in der Überbrückungszeit bis zur Betreuungskraft.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.title}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* SECTION 2 */}
          <h2 id="neu-2026" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Was sich 2026 geändert hat
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Die Reform zum 1. Juli 2025 hat die Verhinderungspflege und Kurzzeitpflege grundlegend vereinfacht. 2026 gilt erstmals für ein volles Kalenderjahr ohne Übergangsregelungen.
          </p>

          <div className="bg-white rounded-2xl border border-[#E5E3DF] overflow-hidden mb-6 shadow-sm">
            <div className="px-5 py-3 bg-[#F8F7F5] border-b border-[#E5E3DF]">
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#8B8B8B]">Alt vs. Neu — was sich geändert hat</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#F8F7F5]">
                    {['Regelung', 'Bis Juni 2025', 'Ab Juli 2025 (gilt 2026)'].map(h => (
                      <th key={h} className="px-4 py-3 text-[12px] font-semibold text-[#8B8B8B] text-left border-b border-[#E5E3DF]">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Budget', 'Verhinderungspflege 1.685 € + Kurzzeitpflege 1.854 € getrennt', 'Gemeinsames Entlastungsbudget 3.539 €/Jahr'],
                    ['Vorpflegezeit', '6 Monate Pflege durch Angehörige Voraussetzung', 'Entfällt vollständig'],
                    ['Flexibilität', 'Budget nicht oder nur begrenzt übertragbar', 'Frei zwischen beiden Leistungsarten aufteilbar'],
                    ['Pflegegeld', 'Wurde während Verhinderungspflege halbiert', 'Wird zur Hälfte weitergezahlt (unverändert)'],
                    ['Verfallsfrist', '30. Juni des Folgejahres', '31. Dezember des gleichen Jahres'],
                  ].map(([regelung, alt, neu], i) => (
                    <tr key={regelung} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8F7F5]'}>
                      <td className="px-4 py-3 text-[14px] font-semibold text-[#1C1C1C] border-b border-[#E5E3DF]">{regelung}</td>
                      <td className="px-4 py-3 text-[13px] text-[#8B8B8B] border-b border-[#E5E3DF]">{alt}</td>
                      <td className="px-4 py-3 text-[13px] text-[#3D7A5C] font-medium border-b border-[#E5E3DF]">{neu}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-[#FDF0EE] border border-[rgba(231,111,99,0.15)] rounded-2xl p-5 mb-10">
            <p className="text-[14px] font-bold text-[#8B3E2F] mb-2">Wichtig: Neue Verfallsfrist beachten</p>
            <p className="text-[14px] text-[#8B3E2F] leading-relaxed">
              Früher konnte nicht genutztes Budget bis zum 30. Juni des Folgejahres übertragen werden. Jetzt verfällt es am 31. Dezember. Wer das Budget nicht rechtzeitig einreicht, verliert es. Belege und Rechnungen also zeitnah bei der Pflegekasse einreichen.
            </p>
          </div>

          {/* SECTION 3 */}
          <h2 id="beantragen" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Entlastungsbudget beantragen & nutzen
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Das Entlastungsbudget muss nicht separat beantragt werden — es steht automatisch zur Verfügung wenn ein Pflegegrad 2–5 vorliegt. Man muss es nur abrufen.
          </p>
          <ol className="space-y-3 mb-6">
            {[
              { n: '1', title: 'Pflegekasse informieren', desc: 'Mitteilen dass Verhinderungspflege oder Kurzzeitpflege genutzt werden soll. Die Pflegekasse bestätigt das verfügbare Budget.' },
              { n: '2', title: 'Vertretungspflege organisieren', desc: 'Professionellen Ersatz (z.B. ambulanten Pflegedienst) oder private Person (Angehörige, Nachbarn) für die Überbrückungszeit organisieren. Angehörige haben Anspruch auf eine Aufwandsentschädigung.' },
              { n: '3', title: 'Rechnungen sammeln', desc: 'Alle Belege für Vertretungspflege aufbewahren. Bei Kurzzeitpflege: Heimrechnung. Bei Verhinderungspflege: Nachweis über die Vertretungskosten.' },
              { n: '4', title: 'Rechtzeitig einreichen', desc: 'Belege vor dem 31. Dezember bei der Pflegekasse einreichen. Kein Übertrag möglich — nicht genutztes Budget verfällt.' },
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

          {/* SECTION 4 */}
          <h2 id="kombinieren" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Mit 24h-Pflege kombinieren
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Das Entlastungsbudget lässt sich mit einer 24h-Betreuungskraft von Primundus sinnvoll kombinieren — besonders in der Übergangsphase oder bei Wechseln.
          </p>
          <div className="space-y-3 mb-6">
            {[
              { title: 'Überbrückung bis zur Betreuungskraft', desc: 'Wenn die erste Kraft noch nicht da ist oder ein Wechsel stattfindet — Kurzzeitpflege überbrückt aus dem Entlastungsbudget.' },
              { title: 'Urlaub für Angehörige', desc: 'Auch wenn eine 24h-Kraft da ist: Wenn Angehörige als Hauptpflegeperson anerkannt sind und Urlaub brauchen, greift Verhinderungspflege aus dem Budget.' },
              { title: 'Kraftwechsel-Überbrückung', desc: 'Beim Wechsel zwischen zwei Betreuungskräften (alle 6–8 Wochen) gibt es manchmal kurze Lücken — Kurzzeitpflege überbrückt diese nahtlos.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.title}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Alle Zuschüsse kombinieren:{' '}
            <a href="/finanzierung/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Finanzierung der 24h-Pflege — alle Zuschüsse 2026</a>
            {' · '}
            <a href="/pflegegeld/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Pflegegeld 2026 — Beträge & Kombinationen</a>
          </p>

          {/* FAQ */}
          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">
            Häufige Fragen zur Verhinderungspflege 2026
          </h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Was ist Verhinderungspflege 2026?', a: 'Seit Juli 2025 gibt es keine eigenständige Verhinderungspflege mehr. Sie wurde mit der Kurzzeitpflege zum gemeinsamen Entlastungsbudget von 3.539 €/Jahr zusammengefasst. Das Budget gilt für PG 2–5 und ist flexibel für beide Leistungsarten nutzbar.' },
              { q: 'Wie hoch ist das Entlastungsbudget 2026?', a: '3.539 Euro pro Jahr für Pflegegrad 2–5. Es fasst frühere Verhinderungspflege (bis 1.685 €) und Kurzzeitpflege (bis 1.854 €) zusammen. Vorpflegezeit entfällt. Verfällt am 31. Dezember.' },
              { q: 'Wer hat Anspruch auf das Entlastungsbudget?', a: 'Pflegebedürftige mit Pflegegrad 2 bis 5, die zu Hause gepflegt werden. Die frühere Voraussetzung von 6 Monaten häuslicher Pflege entfällt seit Juli 2025.' },
              { q: 'Verfällt das Entlastungsbudget am Jahresende?', a: 'Ja — nicht genutztes Budget verfällt am 31. Dezember. Eine Übertragung ins Folgejahr ist nicht mehr möglich (früher bis 30. Juni). Belege rechtzeitig einreichen.' },
              { q: 'Wie wird Pflegegeld während des Entlastungsbudgets behandelt?', a: 'Das Pflegegeld wird während der Nutzung des Entlastungsbudgets zur Hälfte weitergezahlt — bei PG 3 also 299,50 €/Monat statt 599 €.' },
              { q: 'Kann ich Verhinderungspflege und Kurzzeitpflege gleichzeitig nutzen?', a: 'Aus demselben Budget — ja, aber max. 8 Wochen je Leistungsart innerhalb eines Jahres. Das Budget kann also nicht gleichzeitig für Verhinderungs- und Kurzzeitpflege des gleichen Zeitraums genutzt werden.' },
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
