import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [
  { id: 'massnahmen', title: 'Die wichtigsten Maßnahmen' },
  { id: 'bad', title: 'Bad & WC sichern' },
  { id: 'foerderung', title: 'Förderung bis 4.180 € je Maßnahme' },
  { id: 'checkliste', title: 'Raum-für-Raum Checkliste' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Barrierefreies Zuhause gestalten — Tipps & Förderung 2026 | Primundus',
  description: 'Barrierefreies Zuhause: Die wichtigsten Maßnahmen, wie Pflegekasse bis 4.180 €/Maßnahme fördert und was sofort umgesetzt werden kann. Mit Raum-für-Raum Checkliste.',
  alternates: { canonical: 'https://primundus.de/barrierefreies-zuhause-gestalten/' },
  openGraph: {
    title: 'Barrierefreies Zuhause gestalten 2026 | Primundus',
    description: 'Wohnraumanpassung: Maßnahmen, Förderung bis 4.180 €/Maßnahme und Checkliste.',
    url: 'https://primundus.de/barrierefreies-zuhause-gestalten/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Barrierefreies Zuhause gestalten — Tipps und Förderung 2026',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/barrierefreies-zuhause-gestalten/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Alltag & Angehörige', item: 'https://primundus.de/alltag/' },
      { '@type': 'ListItem', position: 3, name: 'Barrierefreies Zuhause', item: 'https://primundus.de/barrierefreies-zuhause-gestalten/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was fördert die Pflegekasse bei Wohnraumanpassung?', acceptedAnswer: { '@type': 'Answer', text: 'Die Pflegekasse fördert Maßnahmen zur Wohnraumanpassung mit bis zu 4.180 € je Maßnahme (§ 40 SGB XI). Bei mehreren Personen im Haushalt bis zu 16.720 €. Typische Maßnahmen: Treppenlift, Badumbau, Türverbreiterung, Haltegriffe, Rampen. Antrag vor Beginn der Maßnahme stellen.' } },
      { '@type': 'Question', name: 'Welche Maßnahmen sind die wichtigsten für ein barrierefreies Zuhause?', acceptedAnswer: { '@type': 'Answer', text: 'Die wichtigsten Maßnahmen: Badumbau (begehbare Dusche, Haltegriffe), Treppenlift oder Rampen, Türverbreiterung auf 90 cm, rutschfeste Böden, Haltegriffe an Toilette, höhenverstellbares Bett, ausreichend Beleuchtung.' } },
    ],
  },
]

export default function BarrierefreiesZuhause() {
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
            <a href="/alltag/" className="hover:text-[#8B7355] transition-colors">Alltag & Angehörige</a>
            <span>›</span>
            <span className="text-[#1C1C1C]">Barrierefreies Zuhause</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>6 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            Barrierefreies Zuhause gestalten — Tipps & Förderung 2026
          </h1>

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            Ein sicheres, barrierefreies Zuhause ist die Grundlage für häusliche Pflege. Die Pflegekasse fördert Wohnraumanpassungen mit bis zu 4.180 Euro je Maßnahme — und viele der wirksamsten Maßnahmen kosten nur wenige hundert Euro. Wichtig: Antrag vor Beginn der Maßnahme stellen.
          </p>

          <div className="bg-[#E8F5EE] border border-[rgba(61,122,92,0.2)] rounded-2xl p-5 mb-10">
            <p className="text-[14px] font-bold text-[#2A5C3F] mb-2">Pflegekassen-Förderung: bis 4.180 € je Maßnahme</p>
            <p className="text-[14px] text-[#2A5C3F] leading-relaxed">
              §40 SGB XI: Die Pflegekasse fördert Maßnahmen zur Wohnraumanpassung mit bis zu 4.180 € je Maßnahme. Bei mehreren pflegebedürftigen Personen im Haushalt bis zu 16.720 €. <strong>Wichtig: Antrag vor Beginn stellen</strong> — nachträglich wird nicht gefördert.
            </p>
          </div>

          <h2 id="massnahmen" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Die wichtigsten Maßnahmen im Überblick
          </h2>
          <div className="bg-white rounded-2xl border border-[#E5E3DF] overflow-hidden mb-10 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#F8F7F5]">
                    {['Maßnahme', 'Typische Kosten', 'Förderung', 'Priorität'].map(h => (
                      <th key={h} className="px-4 py-3 text-[12px] font-semibold text-[#8B8B8B] text-left border-b border-[#E5E3DF]">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Haltegriffe (Bad, WC)', '50–300 €', 'Bis 4.180 €', 'Sofort'],
                    ['Rutschfeste Matten/Böden', '20–200 €', 'Bis 4.180 €', 'Sofort'],
                    ['Badewannenlifter', '200–800 €', 'Bis 4.180 €', 'Hoch'],
                    ['Begehbare Dusche', '1.500–8.000 €', 'Bis 4.180 €', 'Hoch'],
                    ['Erhöhter WC-Sitz', '30–200 €', 'Bis 4.180 €', 'Hoch'],
                    ['Treppenlift', '3.000–15.000 €', 'Bis 4.180 €', 'Je nach Wohnsituation'],
                    ['Türverbreiterung (auf 90 cm)', '500–3.000 €', 'Bis 4.180 €', 'Bei Rollstuhl'],
                    ['Rampe statt Stufen', '300–2.000 €', 'Bis 4.180 €', 'Bei Gehbehinderung'],
                    ['Höhenverstellbares Pflegebett', '500–3.000 €', 'Hilfsmittel (KV)', 'Bei Bettlägerigkeit'],
                  ].map(([massnahme, kosten, foerderung, prio], i) => (
                    <tr key={massnahme} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8F7F5]'}>
                      <td className="px-4 py-3 text-[14px] font-semibold text-[#1C1C1C] border-b border-[#E5E3DF]">{massnahme}</td>
                      <td className="px-4 py-3 text-[13px] text-[#2E2E2E] border-b border-[#E5E3DF]">{kosten}</td>
                      <td className="px-4 py-3 text-[13px] font-bold text-[#3D7A5C] border-b border-[#E5E3DF]">{foerderung}</td>
                      <td className="px-4 py-3 text-[13px] text-[#8B8B8B] border-b border-[#E5E3DF]">{prio}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-5 py-2">
              <p className="text-[11px] text-[#8B8B8B]">§40 SGB XI · Antrag vor Beginn stellen · Stand 2026</p>
            </div>
          </div>

          <h2 id="bad" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Bad & WC sichern — die wichtigsten Räume
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Bad und WC sind die gefährlichsten Räume für Senioren — nasse Böden, enge Räume, Badewannen ohne Haltegriff. Gleichzeitig sind es die Bereiche wo mit kleinem Aufwand die größte Sicherheit gewonnen wird.
          </p>
          <div className="space-y-3 mb-10">
            {[
              { bereich: 'Dusche & Badewanne', massnahmen: ['Haltegriffe neben Dusche und Badewanne', 'Rutschfeste Einlagen oder Matten', 'Badewannenlifter wenn Badewanne behalten wird', 'Begehbare Dusche (ebenerdig) als beste Lösung', 'Klappsitz in der Dusche'] },
              { bereich: 'WC', massnahmen: ['Haltegriffe links und rechts neben WC', 'Erhöhter WC-Sitz (10–15 cm Erhöhung)', 'Ausreichend Platz zum seitlichen Transfer (Rollstuhl)', 'WC auf Toilettenhöhe nach DIN 18040-2 (46–48 cm)'] },
              { bereich: 'Allgemeines Bad', massnahmen: ['Waschtisch griffnah und unterfahrbar (für Rollstuhl)', 'Spiegel in geeigneter Höhe', 'Ausreichende Beleuchtung ohne Blendung', 'Türöffnung nach außen oder Schiebetür (Rettungszugang)'] },
            ].map((item) => (
              <div key={item.bereich} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-3">{item.bereich}</p>
                <ul className="space-y-1">
                  {item.massnahmen.map(m => (
                    <li key={m} className="text-[14px] text-[#2E2E2E] flex gap-2">
                      <span className="text-[#3D7A5C] flex-shrink-0">✓</span>{m}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 id="foerderung" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Förderung beantragen — so geht es
          </h2>
          <ol className="space-y-3 mb-10">
            {[
              { n: '1', title: 'Antrag VOR Beginn der Maßnahme stellen', desc: 'Bei der Pflegekasse (nicht Krankenkasse!) schriftlich Förderantrag stellen. Maßnahme beschreiben, Kostenvoranschlag beilegen. Nachträgliche Anträge werden nicht bewilligt.' },
              { n: '2', title: 'Schriftliche Genehmigung abwarten', desc: 'Die Pflegekasse hat 3 Wochen Bearbeitungszeit. Erst nach Genehmigung mit der Maßnahme beginnen (außer bei Notfällen — dann sofort Pflegekasse anrufen).' },
              { n: '3', title: 'Maßnahme durchführen', desc: 'Fachbetrieb beauftragen, Rechnung aufbewahren.' },
              { n: '4', title: 'Erstattung beantragen', desc: 'Rechnung bei der Pflegekasse einreichen — bis zu 4.180 € werden erstattet.' },
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

          <h2 id="checkliste" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Raum-für-Raum Checkliste
          </h2>
          <div className="space-y-4 mb-10">
            {[
              { raum: 'Eingang & Flur', punkte: ['Schwellen entfernen oder rampen', 'Breite Türen (mind. 80 cm, ideal 90 cm)', 'Haltegriffe an Haustür', 'Ausreichende Beleuchtung mit Bewegungsmelder'] },
              { raum: 'Wohnzimmer & Schlafzimmer', punkte: ['Freie Durchgänge ≥ 120 cm (Rollstuhlbreite)', 'Rutschfeste Teppiche oder befestigte Teppiche', 'Höhenverstellbares Bett', 'Nachttischlampe gut erreichbar', 'Telefon immer in Reichweite'] },
              { raum: 'Küche', punkte: ['Unterfahrbare Arbeitsflächen wenn Rollstuhl', 'Herdschutz (automatische Abschaltung)', 'Griffige Griffe an Schränken', 'Rutschfester Bodenbelag'] },
              { raum: 'Treppe', punkte: ['Handläufe beidseitig', 'Rutschfeste Stufen oder Stufenmatten', 'Treppenlift bei dauerhafter Gehbehinderung', 'Gute Beleuchtung der gesamten Treppe'] },
            ].map((item) => (
              <div key={item.raum} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-3">{item.raum}</p>
                <ul className="space-y-1">
                  {item.punkte.map(p => (
                    <li key={p} className="text-[14px] text-[#2E2E2E] flex gap-2">
                      <span className="text-[#8B7355] flex-shrink-0">□</span>{p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Was fördert die Pflegekasse bei der Wohnraumanpassung?', a: 'Bis zu 4.180 € je Maßnahme (§40 SGB XI). Typische Maßnahmen: Treppenlift, Badumbau, Haltegriffe, Türverbreiterung, Rampen. Antrag muss vor Beginn der Maßnahme gestellt werden.' },
              { q: 'Muss man Pflegegrad haben um die Förderung zu bekommen?', a: 'Ja — Förderung nach §40 SGB XI setzt einen Pflegegrad (1–5) voraus. Der Antrag läuft über die Pflegekasse.' },
              { q: 'Welche Maßnahme hat die höchste Priorität?', a: 'Haltegriffe im Bad und an der Toilette haben das beste Kosten-Nutzen-Verhältnis — günstiger Einbau, sofort wirksam für Sturzprävention. Danach begehbare Dusche und Türschwellen entfernen.' },
              { q: 'Kann man mehrere Maßnahmen gleichzeitig fördern lassen?', a: 'Ja — jede Maßnahme kann separat bis 4.180 € gefördert werden. Bei mehreren Personen im Haushalt sogar bis 16.720 € insgesamt.' },
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
