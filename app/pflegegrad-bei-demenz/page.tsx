import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [
  { id: 'wie-hoch', title: 'Welcher Pflegegrad bei Demenz?' },
  { id: 'begutachtung', title: 'Die Begutachtung bei Demenz' },
  { id: 'leistungen', title: 'Leistungen 2026' },
  { id: 'tipps', title: 'Tipps für höhere Einstufung' },
  { id: 'verlauf', title: 'Pflegegrad bei Demenzfortschritt' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflegegrad bei Demenz — welcher Grad & wie beantragen? 2026 | Primundus',
  description: 'Pflegegrad bei Demenz 2026: Leichte Demenz meist PG 2–3, mittlere PG 3–4, schwere PG 4–5. Begutachtung vorbereiten, höhere Einstufung erreichen — alle Tipps.',
  alternates: { canonical: 'https://primundus.de/pflegegrad-bei-demenz/' },
  openGraph: {
    title: 'Pflegegrad bei Demenz 2026 | Primundus',
    description: 'Welcher Pflegegrad bei Demenz? Einstufung, Tipps für höheren Grad und alle Leistungen 2026.',
    url: 'https://primundus.de/pflegegrad-bei-demenz/',
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
    headline: 'Pflegegrad bei Demenz — welcher Grad und wie beantragen 2026',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/pflegegrad-bei-demenz/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Pflegegrade', item: 'https://primundus.de/pflegegrade/' },
      { '@type': 'ListItem', position: 3, name: 'Pflegegrad bei Demenz', item: 'https://primundus.de/pflegegrad-bei-demenz/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Welchen Pflegegrad bekommt man bei Demenz?', acceptedAnswer: { '@type': 'Answer', text: 'Leichte Demenz: meist Pflegegrad 2 oder 3. Mittlere Demenz: PG 3 oder 4. Schwere Demenz: PG 4 oder 5. Seit 2017 werden kognitive Einschränkungen im NBA-Verfahren deutlich stärker gewichtet als früher — Demenzbetroffene werden besser eingestuft.' } },
      { '@type': 'Question', name: 'Wie wird Demenz beim Pflegegrad bewertet?', acceptedAnswer: { '@type': 'Answer', text: 'Beim NBA-Begutachtungsverfahren werden kognitive Fähigkeiten (15 %), Verhaltensweisen (15 %) und Selbstversorgung (36 %) bewertet — alles Bereiche die bei Demenz stark betroffen sind. Die Gesamtpunktzahl bestimmt den Pflegegrad.' } },
      { '@type': 'Question', name: 'Wie bereite ich die Begutachtung bei Demenz vor?', acceptedAnswer: { '@type': 'Answer', text: 'Pflegetagebuch führen das explizit kognitive Einschränkungen dokumentiert: Weglaufen, Vergessen, Orientierungslosigkeit, Nachtunruhe, Verhaltensauffälligkeiten. Vertrauensperson beim Termin dabei haben die diese Punkte schildern kann — Demenzkranke minimieren oft selbst.' } },
    ],
  },
]

export default function PflegegradBeiDemenz() {
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
            <span className="text-[#1C1C1C]">Pflegegrad bei Demenz</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>7 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            Pflegegrad bei Demenz — welcher Grad & wie beantragen?
          </h1>

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            Seit der Pflegereform 2017 werden kognitive Einschränkungen bei der Begutachtung deutlich stärker bewertet. Demenzkranke erhalten heute erheblich höhere Pflegegrade als früher. Leichte Demenz führt meist zu PG 2–3, mittlere zu PG 3–4, schwere zu PG 4–5. Die Begutachtung muss gut vorbereitet sein — weil Betroffene ihre eigenen Einschränkungen oft minimieren.
          </p>

          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 mb-10 shadow-sm">
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#A89279] mb-3">Auf einen Blick</p>
            <ul className="space-y-2.5">
              {[
                'Leichte Demenz: meist Pflegegrad 2–3 (347–599 €/Monat)',
                'Mittlere Demenz: meist Pflegegrad 3–4 (599–800 €/Monat)',
                'Schwere Demenz: meist Pflegegrad 4–5 (800–990 €/Monat)',
                'Seit 2017: kognitive Einschränkungen stark gewichtet im NBA-Verfahren',
                'Begutachtung: Vertrauensperson muss kognitive Defizite explizit schildern',
                'Demenzdiagnose allein reicht nicht — Auswirkung auf Alltag entscheidet',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-[#2E2E2E]">
                  <span className="w-5 h-5 rounded-full bg-[#E8F5EE] text-[#3D7A5C] flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <h2 id="wie-hoch" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Welcher Pflegegrad bei welchem Demenzstadium?
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Die Einstufung hängt nicht von der Demenzdiagnose allein ab — sondern davon wie stark die Selbstständigkeit im Alltag eingeschränkt ist. Zwei Menschen mit derselben Diagnose können unterschiedliche Pflegegrade bekommen.
          </p>
          <div className="bg-white rounded-2xl border border-[#E5E3DF] overflow-hidden mb-6 shadow-sm">
            <div className="px-5 py-3 bg-[#F8F7F5] border-b border-[#E5E3DF]">
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#8B8B8B]">Pflegegrad nach Demenzstadium — Richtwerte 2026</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#F8F7F5]">
                    {['Stadium', 'Typische Merkmale', 'Pflegegrad', 'Pflegegeld'].map(h => (
                      <th key={h} className="px-4 py-3 text-[12px] font-semibold text-[#8B8B8B] text-left border-b border-[#E5E3DF]">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Leicht', 'Gedächtnisprobleme, Wortfindungsstörungen, leichte Orientierungsdefizite', 'PG 2–3', '347–599 €'],
                    ['Mittel', 'Deutliche Orientierungslosigkeit, Hilfe bei Alltagsaktivitäten, Weglaufen möglich', 'PG 3–4', '599–800 €'],
                    ['Schwer', 'Kaum Kommunikation, vollständige Pflege, ständige Beaufsichtigung nötig', 'PG 4–5', '800–990 €'],
                  ].map(([stadium, merkmale, pg, pflegegeld], i) => (
                    <tr key={stadium} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8F7F5]'}>
                      <td className="px-4 py-3 text-[14px] font-semibold text-[#1C1C1C] border-b border-[#E5E3DF]">{stadium}</td>
                      <td className="px-4 py-3 text-[13px] text-[#2E2E2E] border-b border-[#E5E3DF]">{merkmale}</td>
                      <td className="px-4 py-3 text-[14px] font-bold text-[#8B7355] border-b border-[#E5E3DF]">{pg}</td>
                      <td className="px-4 py-3 text-[14px] font-bold text-[#3D7A5C] border-b border-[#E5E3DF]">{pflegegeld}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-5 py-2">
              <p className="text-[11px] text-[#8B8B8B]">Richtwerte — individuelle Einstufung durch MD · Stand 2026</p>
            </div>
          </div>

          <h2 id="begutachtung" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Die Begutachtung bei Demenz — was besonders zählt
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Bei Demenz liegt die größte Gefahr in der Begutachtung selbst: Betroffene geben sich oft Mühe "normal" zu wirken und unterschätzen ihre eigenen Einschränkungen. Eine Vertrauensperson die die tatsächlichen Defizite schildert ist bei Demenz besonders wichtig.
          </p>
          <div className="space-y-3 mb-6">
            {[
              { title: 'Was der Gutachter bei Demenz bewertet', desc: 'Örtliche und zeitliche Orientierung, Kurzzeitgedächtnis, Entscheidungsfähigkeit, Kommunikation, Verhaltensauffälligkeiten (Aggressionen, Weglaufen, Schlafstörungen), Selbstversorgung im Alltag.' },
              { title: 'Was im Pflegetagebuch stehen muss', desc: 'Täglich dokumentieren: Weglaufen oder Hinlaufen, vergessene Medikamente, nächtliche Unruhe, Orientierungslosigkeit, Aggressionen, Situationen in denen Hilfe nötig war und warum.' },
              { title: 'Was die Vertrauensperson schildern sollte', desc: 'Konkrete Vorfälle der letzten Wochen: "Am Dienstag wollte er um 3 Uhr nachts das Haus verlassen." "Sie erkennt mich manchmal nicht mehr." Diese Beispiele sind für den Gutachter wertvoller als allgemeine Aussagen.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.title}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 id="leistungen" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Leistungen 2026 nach Pflegegrad
          </h2>
          <div className="bg-white rounded-2xl border border-[#E5E3DF] overflow-hidden mb-6 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#F8F7F5]">
                    {['Pflegegrad', 'Pflegegeld', 'Sachleistungen', 'Entlastungsbetrag'].map(h => (
                      <th key={h} className="px-4 py-3 text-[12px] font-semibold text-[#8B8B8B] text-left border-b border-[#E5E3DF]">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['PG 2', '347 €/Monat', '796 €/Monat', '131 €/Monat'],
                    ['PG 3', '599 €/Monat', '1.497 €/Monat', '131 €/Monat'],
                    ['PG 4', '800 €/Monat', '1.859 €/Monat', '131 €/Monat'],
                    ['PG 5', '990 €/Monat', '2.299 €/Monat', '131 €/Monat'],
                  ].map(([grad, pg, sach, eb], i) => (
                    <tr key={grad} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8F7F5]'}>
                      <td className="px-4 py-3 text-[14px] font-semibold text-[#1C1C1C] border-b border-[#E5E3DF]">{grad}</td>
                      <td className="px-4 py-3 text-[14px] font-bold text-[#3D7A5C] border-b border-[#E5E3DF]">{pg}</td>
                      <td className="px-4 py-3 text-[14px] text-[#2E2E2E] border-b border-[#E5E3DF]">{sach}</td>
                      <td className="px-4 py-3 text-[14px] text-[#2E2E2E] border-b border-[#E5E3DF]">{eb}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-5 py-2">
              <p className="text-[11px] text-[#8B8B8B]">Stand 2026 · Alle PG 2–5 erhalten zusätzlich 3.539 €/Jahr Entlastungsbudget</p>
            </div>
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Alle Zuschüsse:{' '}
            <a href="/finanzierung/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Finanzierung der 24h-Pflege</a>
            {' · '}
            <a href="/demenz-pflege-zuhause/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Demenz Pflege zuhause</a>
          </p>

          <h2 id="tipps" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Tipps für höhere Einstufung bei Demenz
          </h2>
          <div className="space-y-3 mb-10">
            {[
              { tip: 'Kognitive Defizite explizit dokumentieren', desc: 'Im Pflegetagebuch nicht nur körperliche Hilfe notieren — Orientierungslosigkeit, Vergessen, Verhaltensänderungen, Nachtunruhe täglich mit Beispielen dokumentieren.' },
              { tip: 'Demenzkranker soll nicht allein beim Termin antworten', desc: 'Betroffene geben sich beim Gutachtertermin Mühe — und wirken dann kompetenter als sie im Alltag sind. Vertrauensperson muss aktiv die tatsächlichen Einschränkungen schildern.' },
              { tip: 'Schlechtesten Tag schildern', desc: 'Nicht den guten Sonntag schildern — den Mittwoch wenn Vater um 3 Uhr nachts das Haus verlassen wollte. Genau dieser Tag ist die Grundlage für die Einstufung.' },
              { tip: 'Verhaltensauffälligkeiten dokumentieren', desc: 'Aggressionen, Schlafstörungen, Selbstgefährdung — dieser NBA-Bereich (15 % Gewicht) wird bei Demenz oft unterschätzt aber kann die Einstufung erheblich beeinflussen.' },
            ].map((item) => (
              <div key={item.tip} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.tip}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 id="verlauf" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Pflegegrad bei Demenzfortschritt anpassen
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Demenz schreitet fort — der Pflegegrad muss angepasst werden. Wer heute PG 2 hat und sich verschlechtert, sollte einen Antrag auf Höherstufung stellen. Es gibt keine Sperrfrist.
          </p>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-10">
            Anzeichen für Höherstufung: Neue Verhaltensauffälligkeiten, Weglaufen beginnt, Körperpflege nicht mehr möglich, Nahrungsaufnahme braucht Hilfe, nächtliche Unruhe intensiver. Dann: Antrag auf Höherstufung plus neue Pflegetagebücher.
          </p>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">
            Häufige Fragen — Pflegegrad bei Demenz
          </h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Welchen Pflegegrad bekommt man bei Demenz?', a: 'Leichte Demenz: meist PG 2–3. Mittlere Demenz: PG 3–4. Schwere Demenz: PG 4–5. Entscheidend ist nicht die Diagnose sondern wie stark die Selbstständigkeit im Alltag eingeschränkt ist.' },
              { q: 'Wie wird Demenz beim Pflegegrad bewertet?', a: 'Im NBA werden kognitive Fähigkeiten (15 %), Verhaltensweisen (15 %) und Selbstversorgung (36 %) bewertet — alle bei Demenz stark betroffenen Bereiche. Seit 2017 werden kognitive Einschränkungen deutlich stärker gewichtet.' },
              { q: 'Wie bereite ich die Begutachtung bei Demenz vor?', a: 'Pflegetagebuch mit konkreten Beispielen kognitiver Defizite: Weglaufen, Vergessen, Nachtunruhe, Orientierungslosigkeit. Vertrauensperson muss beim Termin die tatsächlichen Einschränkungen schildern — Betroffene minimieren oft selbst.' },
              { q: 'Was passiert wenn der Pflegegrad bei Demenz zu niedrig ist?', a: 'Innerhalb eines Monats Widerspruch einlegen, neues Pflegetagebuch mit explizit kognitiven Beispielen nachreichen. Bei Demenz sind Widersprüche besonders häufig erfolgreich wenn kognitive Defizite besser dokumentiert werden.' },
              { q: 'Kann man bei Demenz zuhause bleiben?', a: 'In den meisten Stadien ja — mit einer 24h-Betreuungskraft die dauerhaft im Haushalt lebt. Die vertraute Umgebung verlangsamt nachweislich den Krankheitsverlauf.' },
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
