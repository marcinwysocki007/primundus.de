import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [
  { id: 'bundesweit', title: 'Bundesweite Kassenzuschüsse' },
  { id: 'laender', title: 'Zusatzförderungen der Bundesländer' },
  { id: 'kfw', title: 'KfW-Förderung & Steuervorteil' },
  { id: 'checkliste', title: 'Checkliste: Alle Förderungen nutzen' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Förderungen nach Bundesland — alle Pflegezuschüsse 2026 | Primundus',
  description: 'Pflege-Förderungen 2026: Bundesweite Pflegekasse-Leistungen plus Landesförderungen in Bayern, NRW, BW und weiteren Bundesländern. Mit vollständiger Checkliste.',
  alternates: { canonical: 'https://primundus.de/foerderungen-nach-bundesland/' },
  openGraph: {
    title: 'Förderungen nach Bundesland — Pflegezuschüsse 2026 | Primundus',
    description: 'Welche Pflege-Förderungen gibt es 2026 — bundesweit und je Bundesland?',
    url: 'https://primundus.de/foerderungen-nach-bundesland/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Förderungen nach Bundesland — alle Pflegezuschüsse 2026',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/foerderungen-nach-bundesland/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Finanzierung', item: 'https://primundus.de/finanzierung/' },
      { '@type': 'ListItem', position: 3, name: 'Förderungen nach Bundesland', item: 'https://primundus.de/foerderungen-nach-bundesland/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Gibt es Pflegeförderungen die über die Pflegekasse hinausgehen?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ja — zusätzlich zur Pflegekasse gibt es: KfW-Förderung für barrierefreien Umbau (Kredit bis 50.000 €), steuerliche Absetzbarkeit der Pflegekosten (bis 4.000 €/Jahr), und einige Bundesländer bieten eigene Landespflegegeld- oder Beratungsleistungen. Primundus informiert im Beratungsgespräch über alle relevanten Möglichkeiten.' },
      },
    ],
  },
]

export default function FoerderungenNachBundesland() {
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
            <span className="text-[#1C1C1C]">Förderungen nach Bundesland</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>7 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            Förderungen nach Bundesland — alle Pflegezuschüsse 2026
          </h1>

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            Viele Familien kennen die Pflegekassen-Zuschüsse — aber nicht alle wissen: Darüber hinaus gibt es KfW-Förderkredite für Wohnraumanpassung, steuerliche Absetzbarkeit, und in mehreren Bundesländern eigene Landeszuschüsse. Wer alle Förderungen kombiniert, kann den Eigenanteil bei der 24h-Pflege erheblich senken.
          </p>

          <h2 id="bundesweit" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-6 mb-4 leading-snug">
            Bundesweite Kassenzuschüsse 2026 — die Basis
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Diese Leistungen gelten in allen 16 Bundesländern identisch — für jeden Pflegebedürftigen mit anerkanntem Pflegegrad.
          </p>
          <div className="bg-white rounded-2xl border border-[#E5E3DF] overflow-hidden mb-10 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#F8F7F5]">
                    {['Leistung', 'PG 2', 'PG 3', 'PG 4', 'PG 5', 'Besonderheit'].map(h => (
                      <th key={h} className="px-3 py-3 text-[11px] font-semibold text-[#8B8B8B] text-left border-b border-[#E5E3DF]">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Pflegegeld/Mo', '347 €', '599 €', '800 €', '990 €', 'Für private Pflege'],
                    ['Sachleistungen/Mo', '796 €', '1.497 €', '1.859 €', '2.299 €', 'Für Pflegedienste'],
                    ['Entlastungsbetrag/Mo', '131 €', '131 €', '131 €', '131 €', 'Auch PG 1'],
                    ['Entlastungsbudget/Jahr', '3.539 €', '3.539 €', '3.539 €', '3.539 €', 'Angesammelt 3 Jahre'],
                    ['Wohnraumanpassung/Maßnahme', '4.180 €', '4.180 €', '4.180 €', '4.180 €', 'Antrag vor Beginn'],
                    ['Pflegehilfsmittel/Mo', '42 €', '42 €', '42 €', '42 €', 'Pauschale'],
                  ].map(([leistung, pg2, pg3, pg4, pg5, hinweis], i) => (
                    <tr key={leistung} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8F7F5]'}>
                      <td className="px-3 py-3 text-[13px] font-semibold text-[#1C1C1C] border-b border-[#E5E3DF]">{leistung}</td>
                      {[pg2, pg3, pg4, pg5].map((v, j) => (
                        <td key={j} className="px-3 py-3 text-[13px] font-bold text-[#3D7A5C] border-b border-[#E5E3DF]">{v}</td>
                      ))}
                      <td className="px-3 py-3 text-[11px] text-[#8B8B8B] border-b border-[#E5E3DF]">{hinweis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-5 py-2">
              <p className="text-[11px] text-[#8B8B8B]">§36–45b SGB XI · Stand 2026 · Identisch zu 2025</p>
            </div>
          </div>

          <h2 id="laender" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Zusatzförderungen der Bundesländer
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Zusätzlich zu den bundesweiten Pflegekasse-Leistungen bieten einige Bundesländer eigene Pflegeprogramme. Diese variieren stark und werden regelmäßig angepasst — vor Antragstellung immer beim zuständigen Landesamt prüfen.
          </p>
          <div className="space-y-4 mb-10">
            {[
              {
                land: 'Bayern',
                leistungen: [
                  { name: 'Landespflegegeld', detail: '1.000 €/Jahr für Pflegebedürftige mit PG 2–5 die zuhause gepflegt werden. Antrag beim Landesamt für Pflege (LfP). Kumulierbar mit Pflegekasse-Leistungen.' },
                  { name: 'Pflegeberatung (FQA)', detail: 'Kostenlose Fachberatung durch Fachstellen für Pflege- und Behinderteneinrichtungen – Qualitätsentwicklung und Aufsicht.' },
                ],
              },
              {
                land: 'Baden-Württemberg',
                leistungen: [
                  { name: 'Landesberatungsstellen', detail: 'Kostenlose Pflegestützpunkte in allen Kreisen. Beratung über kommunale Angebote und ergänzende Förderungen.' },
                  { name: 'Kommunale Pflegefonds', detail: 'Einige Landkreise bieten zusätzliche Entlastungsangebote — regional unterschiedlich.' },
                ],
              },
              {
                land: 'NRW',
                leistungen: [
                  { name: 'Pflegestützpunkte', detail: '100+ Pflegestützpunkte in NRW für kostenlose, unabhängige Beratung zu allen Pflegefragen.' },
                  { name: 'Programm "Pflege in NRW"', detail: 'Landesförderprogramme für niedrigschwellige Angebote und Ehrenamt in der Pflege.' },
                ],
              },
              {
                land: 'Alle Bundesländer',
                leistungen: [
                  { name: 'Pflegestützpunkte', detail: 'Jedes Bundesland betreibt ein Netz aus kostenlosen Pflegestützpunkten für unabhängige Beratung.' },
                  { name: 'Verhinderungspflege', detail: 'Bis 1.612 €/Jahr (bundesweit) für Ersatzpflege wenn die Hauptpflegeperson ausfällt.' },
                ],
              },
            ].map((block) => (
              <div key={block.land} className="bg-white rounded-xl border border-[#E5E3DF] overflow-hidden">
                <div className="bg-[#F8F7F5] px-5 py-3 border-b border-[#E5E3DF]">
                  <p className="text-[13px] font-bold text-[#1C1C1C]">{block.land}</p>
                </div>
                <div className="divide-y divide-[#E5E3DF]">
                  {block.leistungen.map((l) => (
                    <div key={l.name} className="px-5 py-3">
                      <p className="text-[13px] font-semibold text-[#8B7355] mb-0.5">{l.name}</p>
                      <p className="text-[13px] text-[#2E2E2E] leading-relaxed">{l.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="bg-[#F2EDE6] border border-[rgba(139,115,85,0.2)] rounded-2xl p-5 mb-10">
            <p className="text-[14px] font-bold text-[#6B5A44] mb-2">Hinweis zu Landesförderungen</p>
            <p className="text-[14px] text-[#6B5A44] leading-relaxed">
              Landesförderungen werden regelmäßig angepasst, eingestellt oder neu aufgelegt. Die hier genannten Leistungen entsprechen dem Stand April 2026. Vor der Antragstellung immer beim zuständigen Landesamt oder Pflegestützpunkt prüfen.
            </p>
          </div>

          <h2 id="kfw" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            KfW-Förderung & Steuerabzug — unterschätzte Möglichkeiten
          </h2>
          <div className="space-y-4 mb-10">
            <div className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
              <p className="text-[15px] font-bold text-[#1C1C1C] mb-2">KfW-Programm 159 — Altersgerecht Umbauen</p>
              <p className="text-[14px] text-[#2E2E2E] leading-relaxed mb-3">
                KfW-Kredit bis 50.000 € für barrierefreie Wohnraumanpassung — zu günstigen Zinsen. Kombinierbar mit dem Pflegekasse-Zuschuss (4.180 €/Maßnahme). Für Maßnahmen die über den Pflegekasse-Zuschuss hinausgehen (z.B. Treppenlift, größerer Badumbau).
              </p>
              <p className="text-[13px] text-[#8B8B8B]">Antrag über Hausbank · kfw.de · Vor Beginn der Maßnahme beantragen</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
              <p className="text-[15px] font-bold text-[#1C1C1C] mb-2">Steuerliche Absetzbarkeit — bis 4.000 €/Jahr</p>
              <p className="text-[14px] text-[#2E2E2E] leading-relaxed mb-3">
                Pflege- und Betreuungskosten können bis zu 4.000 € pro Jahr als außergewöhnliche Belastung oder haushaltsnahe Dienstleistung von der Steuer abgesetzt werden. Bei Primundus-Kosten von 2.200–3.500 €/Monat ist der Steuereffekt erheblich.
              </p>
              <p className="text-[13px] text-[#8B8B8B]">→ Details: <a href="/pflege-steuerlich-absetzen/" className="text-[#8B7355] underline">Pflege steuerlich absetzen</a></p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
              <p className="text-[15px] font-bold text-[#1C1C1C] mb-2">Verhinderungspflege — bis 1.612 €/Jahr</p>
              <p className="text-[14px] text-[#2E2E2E] leading-relaxed mb-3">
                Wenn die Hauptpflegeperson ausfällt (Urlaub, Krankheit), zahlt die Pflegekasse bis 1.612 €/Jahr für eine Ersatzkraft — ab PG 2, wenn die Hauptpflegeperson seit mindestens 6 Monaten pflegt.
              </p>
              <p className="text-[13px] text-[#8B8B8B]">→ Details: <a href="/verhinderungspflege/" className="text-[#8B7355] underline">Verhinderungspflege erklärt</a></p>
            </div>
          </div>

          <h2 id="checkliste" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Checkliste: Alle Förderungen nutzen
          </h2>
          <div className="space-y-2 mb-10">
            {[
              { check: 'Pflegegrad beantragt (Antrag sofort stellen — rückwirkend ab Antragsdatum)', link: '/pflegegrad-beantragen/' },
              { check: 'Pflegegeld oder Sachleistungen gewählt (oder Kombinationsleistung)', link: '/kombinationsleistung-pflege/' },
              { check: 'Entlastungsbetrag (131 €/Mo) separat bei Pflegekasse beantragt', link: '/entlastungsbetrag/' },
              { check: 'Entlastungsbudget für anerkannte Leistungen genutzt (3.539 €/Jahr)', link: '/entlastungsbetrag/' },
              { check: 'Wohnraumanpassung beantragt (bis 4.180 €/Maßnahme, VOR Beginn beantragen)', link: '/barrierefreies-zuhause-gestalten/' },
              { check: 'Pflegehilfsmittel-Pauschale (42 €/Mo) genutzt', link: null },
              { check: 'Verhinderungspflege eingeplant (bis 1.612 €/Jahr)', link: '/verhinderungspflege/' },
              { check: 'Steuerliche Absetzbarkeit geprüft (bis 4.000 €/Jahr)', link: '/pflege-steuerlich-absetzen/' },
              { check: 'KfW-Kredit für größere Wohnraumanpassung geprüft (kfw.de)', link: null },
              { check: 'Landespflegegeld Bayern (1.000 €/Jahr) beantragt — falls zutreffend', link: null },
              { check: 'Lokalen Pflegestützpunkt kontaktiert für weitere Beratung', link: null },
            ].map((item) => (
              <div key={item.check} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-[#E5E3DF]">
                <span className="w-5 h-5 rounded border-2 border-[#8B7355] flex-shrink-0 mt-0.5" />
                <p className="text-[14px] text-[#2E2E2E]">
                  {item.link ? (
                    <a href={item.link} className="text-[#8B7355] hover:underline">{item.check}</a>
                  ) : item.check}
                </p>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Alle Kassenzuschüsse kombiniert:{' '}
            <a href="/eigenanteil-24h-pflege-senken/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Eigenanteil bei 24h-Pflege senken</a>
            {' · '}
            <a href="/finanzierung/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Finanzierungsübersicht 2026</a>
          </p>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Gibt es Pflegeförderungen die über die Pflegekasse hinausgehen?', a: 'Ja: KfW-Förderkredit (bis 50.000 €) für Wohnraumanpassung, Steuerabzug (bis 4.000 €/Jahr), Landespflegegeld Bayern (1.000 €/Jahr), kommunale Zuschüsse regional. Pflegestützpunkt berät kostenlos.' },
              { q: 'Wie viel Landespflegegeld gibt es in Bayern?', a: '1.000 €/Jahr für Pflegebedürftige mit PG 2–5 die zuhause gepflegt werden. Antrag beim Landesamt für Pflege (LfP) in Bayern.' },
              { q: 'Kann man KfW-Kredit und Pflegekasse-Zuschuss kombinieren?', a: 'Ja — KfW-Kredit (bis 50.000 € für barrierefreien Umbau) läuft zusätzlich zu den Pflegekasse-Zuschüssen (4.180 €/Maßnahme). Beide kombinieren für größere Projekte.' },
              { q: 'Wer berät kostenlos über alle Förderungen?', a: 'Pflegestützpunkte in jedem Bundesland bieten kostenlose, unabhängige Beratung. Primundus berät im kostenlosen Erstgespräch über alle relevanten Kassenzuschüsse.' },
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
