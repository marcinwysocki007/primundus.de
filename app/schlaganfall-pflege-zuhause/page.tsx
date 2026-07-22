import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { AuthorByline } from '@/components/AuthorByline'

const SECTIONS = [
  { id: 'was-kann', title: 'Was nach Schlaganfall möglich ist' },
  { id: 'reha', title: 'Reha und häusliche Pflege' },
  { id: 'pflegegrad', title: 'Pflegegrad & Leistungen' },
  { id: '24h', title: '24h-Pflege nach Schlaganfall' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflege nach Schlaganfall zuhause — Reha, Kosten & 24h-Pflege | Primundus',
  description: 'Pflege nach Schlaganfall: Was zuhause möglich ist, wie die Reha-Phase organisiert wird und wann eine 24h-Betreuungskraft die richtige Lösung ist. Alle Infos 2026.',
  alternates: { canonical: 'https://primundus.de/schlaganfall-pflege-zuhause/' },
  openGraph: {
    title: 'Pflege nach Schlaganfall zuhause | Primundus',
    description: 'Was nach Schlaganfall zuhause möglich ist und wie 24h-Pflege die Reha-Phase sicher macht.',
    url: 'https://primundus.de/schlaganfall-pflege-zuhause/',
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
    headline: 'Pflege nach Schlaganfall zuhause — Reha, Organisation & 24h-Pflege',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/schlaganfall-pflege-zuhause/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Krankheiten', item: 'https://primundus.de/krankheiten/' },
      { '@type': 'ListItem', position: 3, name: 'Schlaganfall Pflege zuhause', item: 'https://primundus.de/schlaganfall-pflege-zuhause/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was kann man nach einem Schlaganfall noch tun?', acceptedAnswer: { '@type': 'Answer', text: 'Das hängt von Schwere und Ort der Hirnschädigung ab. Viele Schlaganfall-Betroffene erholen sich durch intensive Reha teilweise oder vollständig. Häufige Folgen: Lähmungen (Hemiparese), Sprachstörungen (Aphasie), Schluckstörungen, kognitive Einschränkungen, Depressionen.' } },
      { '@type': 'Question', name: 'Wann kann man nach einem Schlaganfall nach Hause?', acceptedAnswer: { '@type': 'Answer', text: 'Nach der Akutbehandlung und der Reha — typischerweise 2–8 Wochen nach dem Schlaganfall. Die Entlassung setzt voraus dass die häusliche Versorgung sichergestellt ist. Eine 24h-Betreuungskraft ermöglicht frühzeitige Entlassung ohne Pflegeheimaufenthalt.' } },
      { '@type': 'Question', name: 'Welchen Pflegegrad bekommt man nach einem Schlaganfall?', acceptedAnswer: { '@type': 'Answer', text: 'Je nach Schwere des Schlaganfalls PG 2 bis 5. Leichte Folgeschäden: PG 2–3. Schwere Hemiplegie mit umfangreicher Hilfe: PG 4. Bei Kommunikationsverlust und vollständiger Abhängigkeit: PG 5.' } },
    ],
  },
]

export default function SchlaganfallPflegeZuhause() {
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
            <a href="/krankheiten/" className="hover:text-[#8B7355] transition-colors">Krankheiten</a>
            <span>›</span>
            <span className="text-[#1C1C1C]">Schlaganfall Pflege zuhause</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>7 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            Pflege nach Schlaganfall zuhause — was möglich ist
          </h1>

          <AuthorByline updated="25. April 2026" />

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            Nach einem Schlaganfall stellen sich Familien sofort die Frage: Pflegeheim oder zuhause? In den meisten Fällen ist häusliche Pflege mit einer 24h-Betreuungskraft möglich — und ermöglicht eine frühzeitige Entlassung aus Krankenhaus oder Reha. Die vertraute Umgebung fördert die Erholung nachweislich.
          </p>

          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 mb-10 shadow-sm">
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#A89279] mb-3">Auf einen Blick</p>
            <ul className="space-y-2.5">
              {[
                'Häusliche Pflege nach Schlaganfall in den meisten Fällen möglich',
                'Frühzeitige Entlassung aus Klinik durch 24h-Betreuungskraft möglich',
                'Vertraute Umgebung fördert Reha-Erfolg nachweislich',
                'Pflegegrad 2–5 je nach Schwere — sofort nach Entlassung beantragen',
                'Primundus startet in 4–7 Tagen — auch als Überbrückung nach Klinik',
                'Physiotherapie und Logopädie können zuhause fortgesetzt werden',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-[#2E2E2E]">
                  <span className="w-5 h-5 rounded-full bg-[#E8F5EE] text-[#3D7A5C] flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <h2 id="was-kann" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Was nach einem Schlaganfall möglich ist
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Schlaganfall ist nicht gleich Schlaganfall — Art, Schwere und Ort der Hirnschädigung bestimmen die Folgen. Viele Betroffene erholen sich durch intensive Reha teilweise oder sogar vollständig. Was bleibt, hängt davon ab wie schnell die Akutbehandlung begann und wie konsequent die Reha ist.
          </p>
          <div className="space-y-3 mb-6">
            {[
              { title: 'Lähmungen (Hemiparese/Hemiplegie)', desc: 'Halbseitige Lähmung ist die häufigste Schlaganfall-Folge. Schwere variiert von leichter Kraftminderung bis vollständiger Lähmung. Physiotherapie kann Funktion teilweise zurückbringen.' },
              { title: 'Sprachstörungen (Aphasie)', desc: 'Sprachverständnis oder Sprachproduktion eingeschränkt. Logopädie ist entscheidend — am effektivsten in vertrauter Umgebung mit bekannten Gesprächspartnern.' },
              { title: 'Schluckstörungen (Dysphagie)', desc: 'Häufig nach schwerem Schlaganfall — erhöhtes Aspirationsrisiko. Besondere Sorgfalt bei der Ernährung, angepasste Konsistenz der Speisen.' },
              { title: 'Kognitive Einschränkungen', desc: 'Gedächtnis, Aufmerksamkeit, Orientierung können betroffen sein. Oft nur vorübergehend — gezielte Förderung zuhause ist wirksamer als in einer Einrichtung.' },
              { title: 'Depressionen', desc: 'Post-Stroke-Depression bei 30–40 % der Betroffenen. Regelmäßige menschliche Nähe und Aktivität — was eine 24h-Kraft besser bieten kann als ein Heim — reduziert das Risiko.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.title}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 id="reha" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Reha und häusliche Pflege — wie das zusammenpasst
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Nach der Akutbehandlung folgt in der Regel eine stationäre oder ambulante Rehabilitation. Das Ziel: so viel Selbstständigkeit zurückgewinnen wie möglich. Eine 24h-Betreuungskraft ermöglicht die frühzeitige Entlassung nach Hause — und setzt die Reha-Maßnahmen kontinuierlich im Alltag fort.
          </p>
          <div className="space-y-3 mb-6">
            {[
              { title: 'Frühzeitige Entlassung möglich', desc: 'Das Krankenhaus kann den Patienten früher entlassen wenn die häusliche Versorgung sichergestellt ist. Primundus kann eine Betreuungskraft in 4–7 Tagen bereitstellen — oft schneller als ein Pflegeheimplatz gefunden ist.' },
              { title: 'Reha-Therapien zuhause fortsetzen', desc: 'Physiotherapeuten und Logopäden kommen nach Hause. Die Betreuungskraft begleitet die Übungen im Alltag — konsequenter als eine Einrichtung es könnte.' },
              { title: 'Kurzzeitpflege als Überbrückung', desc: 'Wenn die Wohnungssituation erst angepasst werden muss (Badumbau, Rollstuhlzugang) kann das Entlastungsbudget für Kurzzeitpflege genutzt werden.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.title}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 id="pflegegrad" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Pflegegrad nach Schlaganfall & Kassenzuschüsse
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Den Pflegegrad sofort nach der Entlassung beantragen — die Leistungen gelten rückwirkend ab Antragsdatum. Bei einem Krankenhausaufenthalt verkürzt sich die Entscheidungsfrist der Pflegekasse auf eine Woche.
          </p>
          <div className="bg-white rounded-2xl border border-[#E5E3DF] overflow-hidden mb-6 shadow-sm">
            <div className="px-5 py-3 bg-[#F8F7F5] border-b border-[#E5E3DF]">
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#8B8B8B]">Typische Pflegegrade nach Schlaganfall</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#F8F7F5]">
                    {['Schwere', 'Typischer PG', 'Pflegegeld/Monat'].map(h => (
                      <th key={h} className="px-4 py-3 text-[12px] font-semibold text-[#8B8B8B] text-left border-b border-[#E5E3DF]">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Leichte Folgeschäden', 'PG 2–3', '347–599 €'],
                    ['Hemiplegie mit Hilfebedarf', 'PG 3–4', '599–800 €'],
                    ['Schwere Hemiplegie + Aphasie', 'PG 4–5', '800–990 €'],
                  ].map(([schwere, pg, pflegegeld], i) => (
                    <tr key={schwere} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8F7F5]'}>
                      <td className="px-4 py-3 text-[14px] text-[#2E2E2E] border-b border-[#E5E3DF]">{schwere}</td>
                      <td className="px-4 py-3 text-[14px] font-semibold text-[#1C1C1C] border-b border-[#E5E3DF]">{pg}</td>
                      <td className="px-4 py-3 text-[14px] font-bold text-[#3D7A5C] border-b border-[#E5E3DF]">{pflegegeld}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-3">
            → Pflegegrad schnell beantragen:{' '}
            <a href="/pflegegrad-beantragen/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Pflegegrad beantragen — Schritt für Schritt</a>
          </p>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Pflegegrad nach Schlaganfall:{' '}
            <a href="/pflegegrad-nach-schlaganfall/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Welcher Pflegegrad nach Schlaganfall?</a>
          </p>

          <h2 id="24h" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            24h-Pflege nach Schlaganfall — wann und wie
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Eine 24h-Betreuungskraft ist nach Schlaganfall die häufigste Lösung für Familien die den Angehörigen zuhause versorgen wollen. Primundus kann in 4–7 Tagen eine Kraft bereitstellen — auch als Überbrückung direkt nach Krankenhausentlassung.
          </p>
          <div className="space-y-3 mb-6">
            {[
              { title: 'Was die Betreuungskraft nach Schlaganfall macht', desc: 'Körperpflege und Transfer aus dem Bett, Unterstützung bei Essen (ggf. angepasste Konsistenz), Begleitung bei Physiotherapie-Übungen im Alltag, Sprache fördern durch Gespräche, Sturzsicherheit gewährleisten, emotionale Begleitung.' },
              { title: 'Qualifikation beachten', desc: 'Bei Schluckstörungen oder intensivpflegerischen Anforderungen sollte die Kraft nachgewiesene Pflegeerfahrung haben. Primundus berücksichtigt das bei der Auswahl.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.title}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Mehr zu 24h-Pflege allgemein:{' '}
            <a href="/was-ist-24-stunden-pflege/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Was ist 24-Stunden-Pflege?</a>
            {' · '}
            <a href="/kosten/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Kosten & Kassenzuschüsse 2026</a>
          </p>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">
            Häufige Fragen zur Pflege nach Schlaganfall
          </h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Wann kann man nach einem Schlaganfall nach Hause?', a: 'Nach Akutbehandlung und Reha — typischerweise 2–8 Wochen nach dem Schlaganfall. Eine 24h-Betreuungskraft ermöglicht frühere Entlassung weil die häusliche Versorgung damit sichergestellt ist.' },
              { q: 'Welchen Pflegegrad bekommt man nach einem Schlaganfall?', a: 'Je nach Schwere PG 2–5. Leichte Folgeschäden: PG 2–3. Schwere Hemiplegie: PG 4. Vollständige Abhängigkeit mit Kommunikationsverlust: PG 5. Antrag sofort nach Entlassung stellen — gilt rückwirkend.' },
              { q: 'Kann man nach schwerem Schlaganfall zuhause bleiben?', a: 'In den meisten Fällen ja — mit einer 24h-Betreuungskraft. Nicht möglich bei intensivmedizinischem Dauerbedarf (Beatmung etc.) oder wenn Wohnraum nicht angepasst werden kann.' },
              { q: 'Wie fördert man Erholung nach Schlaganfall zuhause?', a: 'Regelmäßige Physiotherapie und Logopädie — idealerweise täglich. Alltägliche Bewegung und Beschäftigung. Vertraute Umgebung, bekannte Menschen. Kognitive Förderung durch Gespräche, Vorlesen, einfache Aktivitäten.' },
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
