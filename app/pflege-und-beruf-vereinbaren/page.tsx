import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { AuthorByline } from '@/components/AuthorByline'

const SECTIONS = [
  { id: 'herausforderung', title: 'Die Herausforderung' },
  { id: 'rechte', title: 'Ihre Rechte als pflegender Angehöriger' },
  { id: 'loesungen', title: 'Praktische Lösungen' },
  { id: 'finanziell', title: 'Finanzielle Absicherung' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflege und Beruf vereinbaren — Rechte, Tipps & Lösungen 2026 | Primundus',
  description: 'Pflege und Beruf vereinbaren: Pflegezeit, Familienpflegezeit, Freistellungsansprüche und wie eine 24h-Betreuungskraft die Doppelbelastung löst.',
  alternates: { canonical: 'https://primundus.de/pflege-und-beruf-vereinbaren/' },
  openGraph: {
    title: 'Pflege und Beruf vereinbaren 2026 | Primundus',
    description: 'Rechte, Freistellungen und praktische Lösungen wenn Pflege und Beruf zusammenkommen.',
    url: 'https://primundus.de/pflege-und-beruf-vereinbaren/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pflege und Beruf vereinbaren — Rechte, Tipps und Lösungen 2026',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/pflege-und-beruf-vereinbachen/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Alltag & Angehörige', item: 'https://primundus.de/alltag/' },
      { '@type': 'ListItem', position: 3, name: 'Pflege und Beruf vereinbaren', item: 'https://primundus.de/pflege-und-beruf-vereinbaren/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Welche Freistellungsrechte haben pflegende Angehörige?', acceptedAnswer: { '@type': 'Answer', text: 'Pflegende Angehörige haben Anspruch auf: Kurzzeitige Arbeitsverhinderung (10 Tage, bezahlt mit Pflegeunterstützungsgeld), Pflegezeit (bis 6 Monate, unbezahlt, Kündigungsschutz), Familienpflegezeit (bis 24 Monate Teilzeit bis 15 Stunden/Woche). Alle Regelungen gelten für Betriebe ab 15 Beschäftigte.' } },
      { '@type': 'Question', name: 'Was ist das Pflegeunterstützungsgeld?', acceptedAnswer: { '@type': 'Answer', text: 'Das Pflegeunterstützungsgeld ist eine Lohnersatzleistung die pflegende Angehörige erhalten wenn sie kurzfristig die Arbeit unterbrechen müssen — max. 10 Arbeitstage pro Pflegefall, ca. 90 % des Nettoentgelts, bezahlt durch die Pflegekasse.' } },
    ],
  },
]

export default function PflegeUndBerufVereinbaren() {
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
            <span className="text-[#1C1C1C]">Pflege und Beruf vereinbaren</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>7 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            Pflege und Beruf vereinbaren — Rechte, Tipps & Lösungen
          </h1>

          <AuthorByline updated="25. April 2026" />

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            Über 2 Millionen Berufstätige in Deutschland pflegen gleichzeitig einen Angehörigen — die meisten ohne zu wissen welche Rechte sie haben. Das Gesetz schützt pflegende Angehörige: Freistellungsansprüche, Kündigungsschutz, Pflegeunterstützungsgeld. Und eine 24h-Betreuungskraft löst die Doppelbelastung oft grundlegend.
          </p>

          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 mb-10 shadow-sm">
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#A89279] mb-3">Ihre Rechte als pflegender Angehöriger</p>
            <ul className="space-y-2.5">
              {[
                'Kurzzeitige Arbeitsverhinderung: 10 Tage, ca. 90 % Lohnersatz durch Pflegeunterstützungsgeld',
                'Pflegezeit: bis 6 Monate vollständige Freistellung, Kündigungsschutz, zinsloses Darlehen',
                'Familienpflegezeit: bis 24 Monate Teilzeit (mind. 15 Std./Woche), Kündigungsschutz',
                'Rentenbeiträge: Pflegekasse zahlt Rentenbeiträge für pflegende Angehörige (ab PG 2)',
                'Unfallversicherung: Pflegende Angehörige sind gesetzlich unfallversichert',
                'Gilt ab: Betriebe mit mindestens 15 Beschäftigten',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-[#2E2E2E]">
                  <span className="w-5 h-5 rounded-full bg-[#E8F5EE] text-[#3D7A5C] flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <h2 id="herausforderung" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Die Herausforderung — Zahlen und Fakten
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">
            In Deutschland pflegen schätzungsweise 2,5 Millionen berufstätige Menschen gleichzeitig einen pflegebedürftigen Angehörigen. Über zwei Drittel davon sind Frauen. Viele reduzieren ihre Arbeitszeit deutlich oder geben den Beruf ganz auf — mit erheblichen Auswirkungen auf das eigene Einkommen und die spätere Rente.
          </p>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-10">
            Die gute Nachricht: Das Gesetz schützt pflegende Angehörige besser als viele wissen. Und eine professionelle 24h-Betreuungskraft ermöglicht es, den Beruf weiterzuführen ohne den Pflegebedarf zu vernachlässigen.
          </p>

          <h2 id="rechte" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Ihre Rechte als pflegender Angehöriger
          </h2>
          <div className="space-y-4 mb-10">
            {[
              {
                titel: 'Kurzzeitige Arbeitsverhinderung (§ 2 PflegeZG)',
                details: 'Bis zu 10 Arbeitstage pro Pflegefall, wenn eine akute Pflegesituation entsteht und die Versorgung noch nicht organisiert ist. Bezahlter Lohnersatz: Pflegeunterstützungsgeld (ca. 90 % des Nettoentgelts) von der Pflegekasse. Gilt ab dem ersten Beschäftigten.',
              },
              {
                titel: 'Pflegezeit (§ 3 PflegeZG)',
                details: 'Vollständige oder teilweise Freistellung für bis zu 6 Monate zur häuslichen Pflege eines nahen Angehörigen. Unbezahlt, aber mit Kündigungsschutz. Zinsloses Darlehen über das Bundesamt für Familie und zivilgesellschaftliche Aufgaben (BAFzA) möglich. Gilt ab 15 Beschäftigten im Betrieb.',
              },
              {
                titel: 'Familienpflegezeit (§ 2 FPfZG)',
                details: 'Reduzierung der Arbeitszeit auf mindestens 15 Stunden pro Woche für bis zu 24 Monate. Kündigungsschutz während der Familienpflegezeit. Zinsloses Darlehen möglich. Gilt ab 25 Beschäftigten im Betrieb.',
              },
              {
                titel: 'Rentenversicherungsschutz',
                details: 'Die Pflegekasse zahlt für pflegende Angehörige (die nicht mehr als 30 Stunden/Woche berufstätig sind) Beiträge zur gesetzlichen Rentenversicherung — ab PG 2, mindestens 14 Stunden wöchentliche Pflegetätigkeit.',
              },
              {
                titel: 'Gesetzliche Unfallversicherung',
                details: 'Pflegende Angehörige sind während der Pflegetätigkeit gesetzlich unfallversichert — ohne eigene Beitragszahlung. Der Schutz gilt auch auf dem Weg zum Pflegebedürftigen.',
              },
            ].map((item) => (
              <div key={item.titel} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-2">{item.titel}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.details}</p>
              </div>
            ))}
          </div>

          <h2 id="loesungen" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Praktische Lösungen — was wirklich hilft
          </h2>
          <div className="space-y-3 mb-10">
            {[
              {
                loesung: '24h-Betreuungskraft — die grundlegende Lösung',
                desc: 'Eine 24h-Betreuungskraft übernimmt die vollständige Betreuung — rund um die Uhr. Angehörige können ihrem Beruf nachgehen ohne Sorgen um die Versorgung. Das ist für viele Familien die einzige Möglichkeit Vollzeitberuf und Pflege zu vereinbaren.',
                highlight: true,
              },
              {
                loesung: 'Tagespflege für Berufstätige',
                desc: 'Der Pflegebedürftige verbringt den Tag in einer Tagespflegeeinrichtung — Angehörige arbeiten. Abends Heimkehr. Kosten teilweise durch Tages-/Nachtpflege-Sachleistungen der Kasse gedeckt (721–2.085 €/Monat).',
                highlight: false,
              },
              {
                loesung: 'Homeoffice und flexible Arbeitszeiten',
                desc: 'Mit dem Arbeitgeber über flexible Modelle sprechen — Homeoffice-Tage, Gleitzeit, angepasste Schichtpläne. Viele Arbeitgeber sind bei Pflege kooperativ wenn das Gespräch frühzeitig gesucht wird.',
                highlight: false,
              },
              {
                loesung: 'Geschwister und Familie einbinden',
                desc: 'Pflegeverantwortung fair aufteilen. Konkrete Wochenpläne erstellen: Wer übernimmt was an welchem Tag? Digitale Organisationstools (Familien-Kalender) helfen bei der Koordination.',
                highlight: false,
              },
            ].map((item) => (
              <div key={item.loesung} className={`rounded-xl p-5 border ${item.highlight ? 'bg-white border-[#8B7355] border-2' : 'bg-white border-[#E5E3DF]'}`}>
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.loesung}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 id="finanziell" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Finanzielle Absicherung beim Ausfall der Arbeit
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Wer vorübergehend weniger arbeitet oder ausfällt, hat mehrere finanzielle Absicherungen:
          </p>
          <div className="bg-white rounded-2xl border border-[#E5E3DF] overflow-hidden mb-10 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#F8F7F5]">
                    {['Leistung', 'Höhe', 'Wer zahlt', 'Dauer'].map(h => (
                      <th key={h} className="px-4 py-3 text-[12px] font-semibold text-[#8B8B8B] text-left border-b border-[#E5E3DF]">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Pflegeunterstützungsgeld', 'ca. 90 % Nettoentgelt', 'Pflegekasse', 'Max. 10 Tage/Pflegefall'],
                    ['Zinsloses Darlehen (Pflegezeit)', 'Bis 50 % Nettogehalt', 'BAFzA (Bundesbehörde)', 'Für Dauer der Pflegezeit'],
                    ['Rentenbeiträge', 'Abhängig von PG', 'Pflegekasse', 'Während Pflegetätigkeit'],
                  ].map(([leistung, hoehe, wer, dauer], i) => (
                    <tr key={leistung} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8F7F5]'}>
                      <td className="px-4 py-3 text-[14px] font-semibold text-[#1C1C1C] border-b border-[#E5E3DF]">{leistung}</td>
                      <td className="px-4 py-3 text-[14px] text-[#3D7A5C] font-medium border-b border-[#E5E3DF]">{hoehe}</td>
                      <td className="px-4 py-3 text-[13px] text-[#2E2E2E] border-b border-[#E5E3DF]">{wer}</td>
                      <td className="px-4 py-3 text-[13px] text-[#8B8B8B] border-b border-[#E5E3DF]">{dauer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Angehörigen-Burnout vermeiden:{' '}
            <a href="/burnout-pflegende-angehoerige/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Burnout pflegender Angehöriger — Warnsignale & Hilfe</a>
          </p>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Welche Freistellungsrechte haben pflegende Angehörige?', a: 'Kurzzeitige Arbeitsverhinderung (10 Tage, Pflegeunterstützungsgeld), Pflegezeit (bis 6 Monate, Kündigungsschutz, zinsloses Darlehen), Familienpflegezeit (bis 24 Monate Teilzeit). Gilt ab 15 bzw. 25 Beschäftigten.' },
              { q: 'Was ist das Pflegeunterstützungsgeld?', a: 'Lohnersatzleistung bei kurzzeitiger Arbeitsunterbrechung wegen Pflege: ca. 90 % des Nettoentgelts, max. 10 Arbeitstage pro Pflegefall, bezahlt von der Pflegekasse.' },
              { q: 'Kann man mit 24h-Pflege weiter Vollzeit arbeiten?', a: 'Ja — genau das ist der Zweck einer 24h-Betreuungskraft. Sie übernimmt die vollständige Versorgung rund um die Uhr. Angehörige können ihrem Beruf nachgehen ohne Sorgen um die Pflege.' },
              { q: 'Bekomme ich Rentenbeiträge wenn ich einen Angehörigen pflege?', a: 'Ja — die Pflegekasse zahlt Rentenbeiträge für pflegende Angehörige die nicht mehr als 30 Stunden/Woche berufstätig sind, ab PG 2 und mindestens 14 Stunden wöchentlicher Pflegetätigkeit.' },
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
