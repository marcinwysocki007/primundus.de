import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { AuthorByline } from '@/components/AuthorByline'

const SECTIONS = [
  { id: 'was-ist', title: 'Was ist Sozialhilfe in der Pflege?' },
  { id: 'voraussetzungen', title: 'Voraussetzungen & Vermögen' },
  { id: 'unterhalt', title: 'Müssen Kinder zahlen?' },
  { id: 'antrag', title: 'Antrag stellen' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Sozialhilfe bei Pflegebedarf — Hilfe zur Pflege beantragen',
  description: 'Sozialhilfe Pflege 2026: Was Hilfe zur Pflege (§61 SGB XII) ist, wer Anspruch hat, ob Kinder zahlen müssen und wie man den Antrag stellt.',
  alternates: { canonical: 'https://primundus.de/sozialhilfe-bei-pflegebedarf' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Sozialhilfe bei Pflegebedarf 2026 | Primundus',
    description: 'Hilfe zur Pflege (§61 SGB XII): Wer Anspruch hat, ob Kinder zahlen müssen und wie man Antrag stellt.',
    url: 'https://primundus.de/sozialhilfe-bei-pflegebedarf',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Sozialhilfe bei Pflegebedarf — Hilfe zur Pflege beantragen 2026',
    author: { '@type': 'Person', name: 'Marta Kapcio', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/sozialhilfe-bei-pflegebedarf',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Finanzierung', item: 'https://primundus.de/finanzierung' },
      { '@type': 'ListItem', position: 3, name: 'Sozialhilfe bei Pflegebedarf', item: 'https://primundus.de/sozialhilfe-bei-pflegebedarf' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Müssen Kinder für Pflege der Eltern zahlen?', acceptedAnswer: { '@type': 'Answer', text: 'Grundsätzlich ja — Kinder sind gegenüber Eltern unterhaltspflichtig. Jedoch gilt seit 2020: Elternunterhalt für Pflegekosten wird erst verlangt wenn das eigene Jahreseinkommen des Kindes über 100.000 € brutto liegt. Unter dieser Grenze müssen Kinder nicht zahlen.' } },
      { '@type': 'Question', name: 'Was ist Hilfe zur Pflege?', acceptedAnswer: { '@type': 'Answer', text: 'Hilfe zur Pflege ist die Sozialhilfeleistung die greift wenn Rente, Vermögen und Pflegekasse-Leistungen die Pflegekosten nicht decken. Das Sozialamt übernimmt dann den nicht gedeckten Teil — nach Prüfung von Einkommen und Vermögen.' } },
    ],
  },
]

export default function SozialhilfeBeiPflegebedarf() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      <ArticleProgressBar />
      <ArticleTOC sections={SECTIONS} />

      <div className="min-h-screen bg-pm-paper">
        <div className="max-w-article mx-auto px-5 py-10 md:py-16">

          <nav className="h-[24px] text-sm text-pm-mute mb-6 flex items-center gap-2">
            <a href="/" className="hover:text-pm-taupe transition-colors">Startseite</a>
            <span>›</span>
            <a href="/finanzierung" className="hover:text-pm-taupe transition-colors">Finanzierung</a>
            <span>›</span>
            <span className="text-pm-ink">Sozialhilfe bei Pflegebedarf</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-pm-taupe-light mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>6 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-h1 md:text-h1-lg font-bold text-pm-ink mb-6">
            Sozialhilfe bei Pflegebedarf — Hilfe zur Pflege beantragen
          </h1>

          <AuthorByline updated="25. April 2026" />

          <p className="text-[17px] md:text-[19px] leading-relaxed text-pm-body mb-8 font-medium">
            Wenn Rente, Ersparnisse und Pflegekasse-Leistungen die Pflegekosten nicht decken, greift die Hilfe zur Pflege nach §61 SGB XII. Das Sozialamt übernimmt den nicht gedeckten Teil. Und seit 2020 gilt: Kinder müssen erst dann für elterliche Pflegekosten aufkommen wenn ihr eigenes Jahreseinkommen 100.000 Euro brutto übersteigt.
          </p>

          <div className="bg-pm-mint border border-[rgba(61,122,92,0.2)] rounded-2xl p-5 mb-10">
            <p className="text-[14px] font-bold text-pm-green-deep mb-2">Wichtige Änderung seit 2020: Angehörigen-Entlastungsgesetz</p>
            <p className="text-[14px] text-pm-green-deep leading-relaxed">
              Seit dem Angehörigen-Entlastungsgesetz (Januar 2020) müssen Kinder erst dann Elternunterhalt für Pflegekosten zahlen wenn ihr eigenes Jahreseinkommen über 100.000 € brutto liegt. Darunter bleibt das Sozialamt beim Elternteil und fragt nicht bei den Kindern an.
            </p>
          </div>

          <h2 id="was-ist" className="text-[24px] md:text-[30px] font-bold text-pm-ink mt-10 mb-4 leading-snug">
            Was ist Hilfe zur Pflege (§61 SGB XII)?
          </h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-4">
            Hilfe zur Pflege ist eine nachrangige Sozialhilfeleistung — das heißt: Sie greift erst wenn alle anderen Mittel ausgeschöpft sind. Die Reihenfolge:
          </p>
          <ol className="space-y-2 mb-6">
            {[
              'Rente und eigenes Einkommen des Pflegebedürftigen',
              'Pflegekasse-Leistungen (Pflegegeld, Sachleistungen)',
              'Vermögen des Pflegebedürftigen (mit Freibetrag)',
              'Unterhaltsansprüche gegen Kinder (nur über 100.000 €/Jahr)',
              'Dann erst: Hilfe zur Pflege durch das Sozialamt',
            ].map((item, i) => (
              <li key={item} className="flex gap-3 text-[15px] text-pm-body">
                <span className="w-6 h-6 rounded-full bg-pm-taupe text-white font-bold text-[12px] flex items-center justify-center flex-shrink-0">{i + 1}</span>
                {item}
              </li>
            ))}
          </ol>
          <p className="text-[16px] leading-relaxed text-pm-body mb-10">
            Das Sozialamt übernimmt dann die Differenz zwischen den verfügbaren Mitteln und den tatsächlichen Pflegekosten — in der Regel für Heimkosten oder anerkannte ambulante Pflegeleistungen.
          </p>

          <h2 id="voraussetzungen" className="text-[24px] md:text-[30px] font-bold text-pm-ink mt-10 mb-4 leading-snug">
            Voraussetzungen & Vermögen
          </h2>
          <div className="space-y-3 mb-10">
            {[
              { thema: 'Einkommen', detail: 'Das gesamte Einkommen des Pflegebedürftigen wird angerechnet (Rente, Zinsen, Mieteinnahmen). Ein kleiner Barbetrag (ca. 130 €/Monat) verbleibt für persönliche Bedürfnisse.' },
              { thema: 'Vermögen', detail: 'Vermögen über dem Schonbetrag wird eingesetzt. Schonvermögen: ca. 10.000 € für den Pflegebedürftigen. Das Elternhaus ist Schonvermögen wenn der Ehepartner noch darin wohnt oder es selbst bewohnt wird.' },
              { thema: 'Selbst bewohntes Haus', detail: 'Solange der Pflegebedürftige oder nahe Angehörige das Haus bewohnen, ist es Schonvermögen und wird nicht verwertet. Erst bei vollstationärer Pflege kann das Sozialamt nach dem Tod Ansprüche geltend machen.' },
              { thema: 'Pflegegrad', detail: 'Ab Pflegegrad 1 besteht grundsätzlich Anspruch auf Hilfe zur Pflege wenn die eigenen Mittel nicht reichen.' },
            ].map((item) => (
              <div key={item.thema} className="bg-white rounded-xl p-5 border border-pm-line">
                <p className="text-[15px] font-bold text-pm-ink mb-1">{item.thema}</p>
                <p className="text-[14px] text-pm-body leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>

          <h2 id="unterhalt" className="text-[24px] md:text-[30px] font-bold text-pm-ink mt-10 mb-4 leading-snug">
            Müssen Kinder für die Pflege der Eltern zahlen?
          </h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-6">
            Grundsätzlich sind Kinder ihren Eltern gegenüber unterhaltspflichtig. Das Angehörigen-Entlastungsgesetz (seit Januar 2020) hat dies jedoch erheblich eingeschränkt:
          </p>
          <div className="bg-white rounded-2xl border border-pm-line overflow-hidden mb-6 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-pm-paper">
                    {['Situation', 'Pflicht der Kinder'].map(h => (
                      <th key={h} className="px-5 py-3 text-[12px] font-semibold text-pm-mute text-left border-b border-pm-line">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Eigenes Jahreseinkommen des Kindes unter 100.000 € brutto', 'Kein Elternunterhalt — Sozialamt fragt nicht an'],
                    ['Eigenes Jahreseinkommen des Kindes über 100.000 € brutto', 'Elternunterhalt möglich — aber nur der über 100.000 € liegende Teil'],
                    ['Vermögen des Kindes', 'Wird grundsätzlich nicht angetastet (nur Einkommen wird geprüft)'],
                    ['Geschwister', 'Jedes Kind wird separat beurteilt — keine Solidarhaftung'],
                  ].map(([sit, pflicht], i) => (
                    <tr key={sit} className={i % 2 === 0 ? 'bg-white' : 'bg-pm-paper'}>
                      <td className="px-5 py-3 text-[14px] text-pm-body border-b border-pm-line">{sit}</td>
                      <td className="px-5 py-3 text-[14px] font-semibold text-pm-green border-b border-pm-line">{pflicht}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <h2 id="antrag" className="text-[24px] md:text-[30px] font-bold text-pm-ink mt-10 mb-4 leading-snug">
            Antrag stellen — so geht es
          </h2>
          <ol className="space-y-3 mb-10">
            {[
              { n: '1', title: 'Zuständiges Sozialamt ermitteln', desc: 'Das Sozialamt am Wohnort des Pflegebedürftigen ist zuständig.' },
              { n: '2', title: 'Antrag auf Hilfe zur Pflege stellen', desc: 'Formloser Antrag oder Antrag auf dem Formular des Sozialamts. Datum notieren — Leistungen gelten ab Antragsdatum.' },
              { n: '3', title: 'Einkommens- und Vermögensnachweise vorlegen', desc: 'Renten-, Konten- und Vermögensnachweise. Das Sozialamt prüft die Bedürftigkeit.' },
              { n: '4', title: 'Pflegekasse-Bescheid vorlegen', desc: 'Pflegegrad und Leistungsbescheid miteinreichen.' },
              { n: '5', title: 'Sozialamt übernimmt Differenz', desc: 'Das Sozialamt zahlt den Differenzbetrag direkt an den Leistungsanbieter.' },
            ].map((step) => (
              <li key={step.n} className="flex gap-4 bg-white rounded-xl p-5 border border-pm-line list-none">
                <span className="w-8 h-8 rounded-full bg-pm-taupe text-white font-bold text-[15px] flex items-center justify-center flex-shrink-0">{step.n}</span>
                <div>
                  <p className="text-[15px] font-bold text-pm-ink mb-1">{step.title}</p>
                  <p className="text-[14px] text-pm-body leading-relaxed">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-pm-ink mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Was ist Hilfe zur Pflege?', a: 'Die Sozialhilfeleistung nach §61 SGB XII — greift wenn Rente, Vermögen und Pflegekasse nicht reichen. Das Sozialamt übernimmt den Differenzbetrag zwischen verfügbaren Mitteln und Pflegekosten.' },
              { q: 'Müssen Kinder für die Pflege der Eltern zahlen?', a: 'Nur wenn das eigene Jahreseinkommen über 100.000 € brutto liegt (seit Angehörigen-Entlastungsgesetz 2020). Darunter zahlen Kinder nichts — das Sozialamt trägt die Kosten.' },
              { q: 'Muss man das Haus verkaufen für die Pflege?', a: 'Nicht solange es selbst bewohnt wird oder nahe Angehörige darin wohnen — es ist Schonvermögen. Erst nach Tod des Pflegebedürftigen kann das Sozialamt beim Pflegeheim-Finanzierung Regressforderungen stellen.' },
              { q: 'Gilt Hilfe zur Pflege auch für 24h-Pflege zuhause?', a: 'In der Regel nicht — Hilfe zur Pflege wird meist für stationäre Pflegeheimkosten gewährt. Für häusliche 24h-Pflege empfiehlt sich zuerst alle Kassenzuschüsse und Steuervorteile auszuschöpfen.' },
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
          <ArticleCTA />
        </div>
      </div>
    </>
  )
}
