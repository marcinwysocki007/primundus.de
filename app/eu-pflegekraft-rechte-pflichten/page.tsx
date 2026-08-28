import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { AuthorByline } from '@/components/AuthorByline'

const SECTIONS = [
  { id: 'entsendemodell', title: 'Das Entsendemodell erklärt' },
  { id: 'rechte-kraft', title: 'Rechte der Betreuungskraft' },
  { id: 'pflichten-kraft', title: 'Pflichten der Betreuungskraft' },
  { id: 'rechte-familie', title: 'Rechte & Pflichten der Familie' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'EU-Pflegekraft — Rechte und Pflichten im Entsendemodell',
  description: 'EU-Pflegekraft Rechte und Pflichten: Was das Entsendemodell regelt, welche Rechte Betreuungskräfte haben und was Familien wissen müssen.',
  alternates: { canonical: 'https://primundus.de/eu-pflegekraft-rechte-pflichten' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'EU-Pflegekraft Rechte & Pflichten | Primundus',
    description: 'Rechte und Pflichten im Entsendemodell — für Betreuungskräfte und Familien.',
    url: 'https://primundus.de/eu-pflegekraft-rechte-pflichten',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'EU-Pflegekraft — Rechte und Pflichten im Entsendemodell',
    author: { '@type': 'Person', name: 'Marta Kapcio', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/eu-pflegekraft-rechte-pflichten',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Rechtliches', item: 'https://primundus.de/rechtliches' },
      { '@type': 'ListItem', position: 3, name: 'EU-Pflegekraft Rechte & Pflichten', item: 'https://primundus.de/eu-pflegekraft-rechte-pflichten' },
    ],
  },
]

export default function EuPflegekraftRechtenPflichten() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      <ArticleProgressBar />
      <ArticleTOC sections={SECTIONS} />

      <div className="min-h-screen bg-pm-paper">
        <div className="max-w-article mx-auto px-5 py-10 md:py-16">

          <nav className="min-h-[24px] text-sm text-pm-mute mb-6 flex items-center gap-2 flex-wrap">
            <a href="/" className="hover:text-pm-taupe transition-colors">Startseite</a>
            <span>›</span>
            <a href="/rechtliches" className="hover:text-pm-taupe transition-colors">Rechtliches</a>
            <span>›</span>
            <span className="text-pm-ink">EU-Pflegekraft Rechte & Pflichten</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-pm-taupe-light mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>6 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-h1 md:text-h1-lg font-bold text-pm-ink mb-6">
            EU-Pflegekraft — Rechte & Pflichten im Entsendemodell
          </h1>

          <AuthorByline updated="25. April 2026" />

          <p className="text-[17px] md:text-[19px] leading-relaxed text-pm-body mb-10 font-medium">
            Das Entsendemodell ist die rechtssichere Grundlage für die meisten 24h-Betreuungsverhältnisse in Deutschland. Es schützt beide Seiten — die Familie und die Betreuungskraft. Trotzdem gibt es häufige Missverständnisse: Was darf die Familie verlangen? Was hat die Kraft Anspruch auf? Dieser Ratgeber klärt auf.
          </p>

          <h2 id="entsendemodell" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-6 mb-4 leading-snug">
            Das Entsendemodell — wie es funktioniert
          </h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-6">
            Beim Entsendemodell ist die Betreuungskraft nicht bei der deutschen Familie angestellt — sie ist bei einem Unternehmen im EU-Heimatland (z.B. Polen, Bulgarien, Rumänien) angestellt und wird mit einer A1-Bescheinigung für typischerweise 6–8 Wochen nach Deutschland entsandt.
          </p>
          <div className="space-y-3 mb-10">
            {[
              { partei: 'Betreuungskraft', status: 'Angestellt beim EU-Unternehmen im Heimatland. Dort sozialversichert (Rente, Kranken-, Pflegeversicherung). A1-Bescheinigung belegt den legalen Entsendestatus in Deutschland.' },
              { partei: 'EU-Unternehmen (Entsendefirma)', status: 'Arbeitgeber der Betreuungskraft. Zahlt Lohn, stellt A1-Bescheinigung aus, ist verantwortlich für Sozialversicherungsbeiträge im Heimatland.' },
              { partei: 'Deutsche Agentur (Primundus)', status: 'Vermittelt und koordiniert. Ist Vertragspartner der deutschen Familie. Schnittstelle zwischen Familie, EU-Unternehmen und Betreuungskraft.' },
              { partei: 'Familie', status: 'Kein eigenes Arbeitsverhältnis mit der Kraft. Vertrag nur mit Primundus. Keine deutschen Sozialabgaben. A1-Bescheinigung bei Kontrollen vorzeigen.' },
            ].map((item) => (
              <div key={item.partei} className="bg-white rounded-xl p-5 border border-pm-line">
                <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-pm-taupe-light mb-1">{item.partei}</p>
                <p className="text-[14px] text-pm-body leading-relaxed">{item.status}</p>
              </div>
            ))}
          </div>

          <h2 id="rechte-kraft" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">
            Rechte der Betreuungskraft
          </h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-6">
            Auch im Entsendemodell gelten für entsandte Arbeitnehmer bestimmte deutsche Mindeststandards (EU-Entsenderichtlinie, § 2 AEntG). Kein seriöser Betreiber unterschreitet diese.
          </p>
          <div className="space-y-3 mb-10">
            {[
              { recht: 'Mindestlohn', detail: 'Entsandte Arbeitnehmer haben Anspruch auf den deutschen Mindestlohn (2026: 12,82 €/Stunde). Sachbezüge (Kost & Logis) können angerechnet werden.' },
              { recht: 'Eigenes Zimmer & Privatsphäre', detail: 'Die Betreuungskraft hat Anspruch auf ein eigenes Zimmer mit Privatsphäre. Das ist Pflicht — kein Schlafen auf dem Sofa oder ohne abschließbaren Rückzugsort.' },
              { recht: 'Ruhezeiten', detail: 'Gesetzliche tägliche Ruhezeit von mindestens 11 Stunden. Bereitschaft ist keine Arbeitszeit wenn sie tatsächlich ungestört ist.' },
              { recht: 'Urlaub', detail: 'Gesetzlicher Mindesturlaub (4 Wochen/Jahr). Für die Dauer eines Einsatzes (6–8 Wochen) anteilig.' },
              { recht: 'Krankenversicherung', detail: 'Über das EU-Unternehmen im Heimatland sozialversichert. Bei Erkrankung in Deutschland: Behandlung über europäische Krankenversicherungskarte (EHIC) möglich.' },
              { recht: 'Würdevoller Umgang', detail: 'Die Kraft ist kein "Personal" das jederzeit Befehle entgegennehmen muss. Sie ist ein Mensch in einem Arbeitsverhältnis der Respekt verdient.' },
            ].map((item) => (
              <div key={item.recht} className="bg-white rounded-xl p-5 border border-pm-line">
                <p className="text-[15px] font-bold text-pm-ink mb-1">{item.recht}</p>
                <p className="text-[14px] text-pm-body leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>

          <h2 id="pflichten-kraft" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">
            Pflichten der Betreuungskraft
          </h2>
          <div className="space-y-3 mb-10">
            {[
              { pflicht: 'Pflege- und Betreuungsleistungen erbringen', detail: 'Die vertraglich vereinbarten Leistungen zuverlässig und sorgfältig erbringen — Körperpflege, Haushalt, Betreuung, Gesellschaft.' },
              { pflicht: 'Verschwiegenheit', detail: 'Über alle persönlichen und gesundheitlichen Informationen des Pflegebedürftigen und der Familie ist absolute Verschwiegenheit zu wahren — auch nach dem Einsatz.' },
              { pflicht: 'A1-Bescheinigung mitführen', detail: 'Die A1-Bescheinigung belegt den legalen Entsendestatus und muss bei einer Kontrolle durch Behörden vorgezeigt werden können.' },
              { pflicht: 'Pünktlichkeit und Zuverlässigkeit', detail: 'An- und Abreise zum vereinbarten Zeitpunkt. Krankmeldung so früh wie möglich damit Ersatz organisiert werden kann.' },
              { pflicht: 'Umgang mit Wertgegenständen', detail: 'Sorgfältiger Umgang mit dem Eigentum der Familie und des Pflegebedürftigen. Keine Annahme von Geldgeschenken ohne Absprache.' },
            ].map((item) => (
              <div key={item.pflicht} className="bg-white rounded-xl p-5 border border-pm-line">
                <p className="text-[15px] font-bold text-pm-ink mb-1">{item.pflicht}</p>
                <p className="text-[14px] text-pm-body leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>

          <h2 id="rechte-familie" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">
            Rechte & Pflichten der Familie
          </h2>
          <div className="space-y-3 mb-10">
            {[
              { aspekt: 'Familie hat Anspruch auf:', items: ['Vertragsgemäße Leistungserbringung', 'Informationen über Veränderungen im Pflegezustand', 'Verschwiegenheit über familiäre Angelegenheiten', 'A1-Bescheinigung der Kraft vorab'], positive: true },
              { aspekt: 'Familie ist verpflichtet:', items: ['Eigenes Zimmer mit Privatsphäre bereitzustellen', 'Kost und Logis zu gewähren', 'Würdevollen Umgang zu pflegen', 'Vertraglich vereinbarte Vergütung pünktlich zu zahlen (an Primundus)', 'Die Kraft nicht zu Leistungen zu verpflichten die nicht vereinbart sind'], positive: false },
            ].map((block) => (
              <div key={block.aspekt} className={`rounded-xl p-5 border ${block.positive ? 'bg-pm-mint border-[rgba(61,122,92,0.15)]' : 'bg-white border-pm-line'}`}>
                <p className={`text-[13px] font-bold uppercase tracking-[0.08em] mb-3 ${block.positive ? 'text-pm-green-deep' : 'text-pm-taupe-light'}`}>{block.aspekt}</p>
                <ul className="space-y-1">
                  {block.items.map(i => (
                    <li key={i} className={`text-[14px] flex gap-2 ${block.positive ? 'text-pm-green-deep' : 'text-pm-body'}`}>
                      <span className="flex-shrink-0">{block.positive ? '✓' : '→'}</span>{i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-pm-shell border border-[rgba(139,115,85,0.2)] rounded-2xl p-5 mb-10">
            <p className="text-[14px] font-bold text-pm-taupe-ink mb-2">Gute Zusammenarbeit als Grundprinzip</p>
            <p className="text-[14px] text-pm-taupe-ink leading-relaxed">
              Die besten Pflegeverhältnisse entstehen wenn Familie und Betreuungskraft einander mit Respekt begegnen. Eine Kraft die sich wohlfühlt und wertgeschätzt wird, bleibt länger, engagiert sich mehr und pflegt mit mehr Herz. Das liegt im Interesse aller.
            </p>
          </div>

          <h2 id="faq" className="text-h2 md:text-h2-lg font-bold text-pm-ink mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Welche Rechte hat eine EU-Pflegekraft in Deutschland?', a: 'Anspruch auf deutschen Mindestlohn, eigenes Zimmer, Ruhezeiten (min. 11 Std./Tag), anteiligen Urlaub, Krankenversicherung über EHIC und würdevollen Umgang.' },
              { q: 'Muss die Familie soziale Abgaben für die EU-Pflegekraft zahlen?', a: 'Nein — beim Entsendemodell über Primundus zahlt die Familie keine deutschen Sozialabgaben. Die Kraft ist im EU-Heimatland sozialversichert.' },
              { q: 'Was passiert wenn eine EU-Pflegekraft in Deutschland krank wird?', a: 'Behandlung über europäische Krankenversicherungskarte (EHIC) möglich. Das EU-Unternehmen ist verantwortlicher Arbeitgeber. Primundus organisiert sofort Ersatzkraft.' },
              { q: 'Darf die Familie der Pflegekraft Anweisungen geben?', a: 'Im Rahmen des vereinbarten Leistungsumfangs: Ja. Aber die Kraft ist kein "Personal auf Abruf" — Grundpflicht ist die vertraglich vereinbarte Tätigkeit, nicht unbegrenzte Verfügbarkeit für beliebige Aufgaben.' },
            ].map((item, i) => (
              <details key={i} className="bg-white rounded-xl border border-pm-line group">
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                  <h3 className="text-[15px] font-semibold text-pm-ink pr-4">{item.q}</h3>
                  <span className="text-pm-taupe font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-4">
                  <p className="text-[15px] text-pm-body leading-relaxed">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
          <Weiterlesen aktuell="eu-pflegekraft-rechte-pflichten" />
          <ArticleCTA />
        </div>
      </div>
    </>
  )
}
