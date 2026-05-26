import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [
  { id: 'modell', title: 'Kündigung je nach Beschäftigungsmodell' },
  { id: 'entsendemodell', title: 'Kündigung beim Entsendemodell (Primundus)' },
  { id: 'direktanstellung', title: 'Kündigung bei Direktanstellung' },
  { id: 'sonderfall', title: 'Kündigung aus wichtigem Grund' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflegekraft kündigen — Fristen, Muster & Ablauf 2026 | Primundus',
  description: 'Pflegekraft kündigen 2026: Kündigungsfristen je nach Beschäftigungsmodell, Musterschreiben und was bei Kündigung aus wichtigem Grund gilt.',
  alternates: { canonical: 'https://primundus.de/pflegekraft-kuendigen/' },
  openGraph: {
    title: 'Pflegekraft kündigen 2026 | Primundus',
    description: 'Kündigungsfristen, Musterschreiben und Ablauf — je nach Beschäftigungsmodell.',
    url: 'https://primundus.de/pflegekraft-kuendigen/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pflegekraft kündigen — Fristen, Muster und Ablauf 2026',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/pflegekraft-kuendigen/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Organisation', item: 'https://primundus.de/organisation/' },
      { '@type': 'ListItem', position: 3, name: 'Pflegekraft kündigen', item: 'https://primundus.de/pflegekraft-kuendigen/' },
    ],
  },
]

export default function PflegekraftKuendigen() {
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
            <a href="/organisation/" className="hover:text-[#8B7355] transition-colors">Organisation</a>
            <span>›</span>
            <span className="text-[#1C1C1C]">Pflegekraft kündigen</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>5 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            Pflegekraft kündigen — Fristen, Muster & Ablauf 2026
          </h1>

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            Wie man eine Pflegekraft kündigt hängt komplett vom Beschäftigungsmodell ab. Beim Entsendemodell über Primundus ist die Kündigung denkbar einfach: täglich kündbar, ein Anruf genügt, Primundus stellt sofort Ersatz. Bei der Direktanstellung gelten die gesetzlichen Kündigungsfristen nach deutschem Arbeitsrecht.
          </p>

          <h2 id="modell" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-6 mb-4 leading-snug">
            Kündigung je nach Beschäftigungsmodell
          </h2>
          <div className="bg-white rounded-2xl border border-[#E5E3DF] overflow-hidden mb-10 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#F8F7F5]">
                    {['Modell', 'Kündigung durch Familie', 'Frist', 'Ersatz'].map(h => (
                      <th key={h} className="px-4 py-3 text-[12px] font-semibold text-[#8B8B8B] text-left border-b border-[#E5E3DF]">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Entsendemodell (Primundus)', 'Kündigung des Agenturvertrags', 'Täglich kündbar', 'Primundus stellt sofort Ersatz'],
                    ['Direktanstellung', 'Arbeitgeberkündigung an Kraft', 'Probezeit: 2 Wo · danach: 4 Wo', 'Familie muss selbst organisieren'],
                  ].map(([modell, art, frist, ersatz], i) => (
                    <tr key={modell} className={i === 0 ? 'bg-[#E8F5EE]' : 'bg-white'}>
                      <td className="px-4 py-3 text-[14px] font-semibold text-[#1C1C1C] border-b border-[#E5E3DF]">{modell}</td>
                      <td className="px-4 py-3 text-[13px] text-[#2E2E2E] border-b border-[#E5E3DF]">{art}</td>
                      <td className={`px-4 py-3 text-[14px] font-bold border-b border-[#E5E3DF] ${i === 0 ? 'text-[#3D7A5C]' : 'text-[#1C1C1C]'}`}>{frist}</td>
                      <td className="px-4 py-3 text-[13px] text-[#8B8B8B] border-b border-[#E5E3DF]">{ersatz}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <h2 id="entsendemodell" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Kündigung beim Entsendemodell (Primundus) — so einfach geht es
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Beim Entsendemodell über Primundus gibt es kein direktes Arbeitsverhältnis zwischen Familie und Betreuungskraft. Die Familie kündigt den Vertrag mit Primundus — nicht die Kraft direkt. Das macht es unkompliziert.
          </p>
          <ol className="space-y-3 mb-6">
            {[
              { n: '1', title: 'Primundus anrufen oder schreiben', desc: '089 200 000 830 oder info@primundus.de — mitteilen dass der Einsatz beendet werden soll.' },
              { n: '2', title: 'Wunschtermin nennen', desc: 'Ab wann soll die Kraft abreisen? Bei dringendem Bedarf sofort — Primundus organisiert die Abreise.' },
              { n: '3', title: 'Primundus regelt alles', desc: 'Die Abreise der Kraft, eventuelle Ersatzorganisation, Schlussabrechnung. Kein direktes Gespräch der Familie mit der Kraft nötig.' },
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
          <div className="bg-[#E8F5EE] border border-[rgba(61,122,92,0.2)] rounded-2xl p-5 mb-10">
            <p className="text-[14px] font-bold text-[#2A5C3F] mb-1">Kein Risiko, keine Fristen</p>
            <p className="text-[14px] text-[#2A5C3F]">Täglich kündbar, keine Mindestlaufzeit, kein Aufwand. So ist es bei Primundus seit über 20 Jahren.</p>
          </div>

          <h2 id="direktanstellung" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Kündigung bei Direktanstellung — gesetzliche Fristen
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Wer die Pflegekraft direkt angestellt hat, ist Arbeitgeber im deutschen Sinne. Die Kündigung muss schriftlich erfolgen und die gesetzlichen Fristen einhalten.
          </p>
          <div className="space-y-3 mb-6">
            {[
              { phase: 'Probezeit (max. 6 Monate)', frist: '2 Wochen', detail: 'Schriftliche Kündigung, keine Begründung nötig. Kündigung muss innerhalb der Probezeit zugehen.' },
              { phase: 'Nach Probezeit (bis 2 Jahre)', frist: '4 Wochen zum 15. oder Monatsende', detail: 'Gesetzliche Grundkündigung nach § 622 Abs. 1 BGB.' },
              { phase: 'Ab 2 Jahren Betriebszugehörigkeit', frist: '1 Monat zum Monatsende', detail: 'Verlängert sich stufenweise mit Dauer (ab 5 Jahre: 2 Monate, ab 8 Jahre: 3 Monate usw.).' },
            ].map((item) => (
              <div key={item.phase} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-[15px] font-bold text-[#1C1C1C]">{item.phase}</p>
                  <span className="text-[13px] font-bold text-[#8B7355] bg-[#F2EDE6] px-3 py-1 rounded-full">{item.frist}</span>
                </div>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#F8F7F5] border border-[#E5E3DF] rounded-2xl p-6 mb-10 font-mono text-[13px] leading-[1.8] text-[#2E2E2E]">
            <p className="font-sans text-[12px] font-bold uppercase tracking-[0.08em] text-[#A89279] mb-3">Musterschreiben Kündigung (Direktanstellung)</p>
            <p>[Name Arbeitgeber]<br />[Adresse]<br />[Datum]</p>
            <p className="mt-3">Kündigung des Arbeitsverhältnisses<br />Arbeitnehmer: [Name der Pflegekraft]</p>
            <p className="mt-3">Sehr geehrte/r [Name],</p>
            <p>hiermit kündige ich das mit Ihnen bestehende Arbeitsverhältnis fristgerecht zum [Datum, z.B. 31.05.2026].</p>
            <p className="mt-3">Bitte bestätigen Sie den Erhalt dieses Schreibens.</p>
            <p className="mt-3">Mit freundlichen Grüßen,<br />[Unterschrift]<br />[Name]</p>
          </div>

          <h2 id="sonderfall" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Kündigung aus wichtigem Grund — fristlos
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Bei schwerem Fehlverhalten ist eine außerordentliche (fristlose) Kündigung möglich. Die Familie muss schnell handeln — die Kündigung muss innerhalb von 2 Wochen nach Bekanntwerden des Grundes ausgesprochen werden.
          </p>
          <div className="space-y-3 mb-10">
            {[
              { grund: 'Diebstahl oder Unterschlagung', vorgehen: 'Sofortige fristlose Kündigung. Beweise sichern. Primundus informieren. Ggf. Anzeige erstatten.' },
              { grund: 'Schwere Pflichtverletzungen', vorgehen: 'Z.B. grobe Vernachlässigung des Pflegebedürftigen, Dokumentenfälschung, Alkohol im Dienst. Fristlose Kündigung möglich, Begründungspflicht.' },
              { grund: 'Beim Entsendemodell', vorgehen: 'Sofort Primundus anrufen — Primundus organisiert die sofortige Ablösung und regelt alle weiteren Schritte. Keine direkte Kündigung der Familie gegenüber der Kraft nötig.' },
            ].map((item) => (
              <div key={item.grund} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.grund}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.vorgehen}</p>
              </div>
            ))}
          </div>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Wie kündige ich eine Pflegekraft beim Entsendemodell?', a: 'Primundus anrufen (089 200 000 830) — fertig. Täglich kündbar, kein Formular, keine Fristen.' },
              { q: 'Was sind die Kündigungsfristen bei Direktanstellung?', a: 'Probezeit: 2 Wochen. Nach Probezeit bis 2 Jahre: 4 Wochen zum 15. oder Monatsende. Ab 2 Jahren: 1 Monat zum Monatsende.' },
              { q: 'Muss die Kündigung schriftlich sein?', a: 'Bei Direktanstellung: Ja — Schriftform ist Pflicht. Beim Entsendemodell über Primundus: Kündigung des Agenturvertrags genügt, formlos per Telefon.' },
              { q: 'Was wenn die Kraft sofort gehen soll?', a: 'Beim Entsendemodell: Primundus anrufen, sofortige Beendigung möglich. Bei Direktanstellung: nur bei wichtigem Grund (fristlose Kündigung) oder gegen Zahlung einer Abfindung.' },
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
