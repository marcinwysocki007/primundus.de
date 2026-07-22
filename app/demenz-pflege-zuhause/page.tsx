import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [
  { id: 'moeglich', title: 'Was ist zuhause möglich?' },
  { id: 'alltag', title: 'Alltag mit Demenz gestalten' },
  { id: 'pflege-24h', title: 'Wann braucht es 24h-Pflege?' },
  { id: 'pflegegrad', title: 'Pflegegrad & Leistungen' },
  { id: 'grenzen', title: 'Grenzen der häuslichen Pflege' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Demenz Pflege zuhause — was möglich ist & wann 24h-Pflege hilft | Primundus',
  description: 'Demenzpflege zuhause: Was Angehörige leisten können, ab wann 24h-Pflege sinnvoll ist und welche Kassenzuschüsse 2026 helfen. Mit konkreten Alltagstipps.',
  alternates: { canonical: 'https://primundus.de/demenz-pflege-zuhause/' },
  openGraph: {
    title: 'Demenz Pflege zuhause | Primundus',
    description: 'Was bei Demenz zuhause möglich ist, ab wann 24h-Pflege nötig wird und welche Leistungen die Pflegekasse zahlt.',
    url: 'https://primundus.de/demenz-pflege-zuhause/',
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
    headline: 'Demenzpflege zuhause — was möglich ist und wann 24h-Pflege hilft',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/demenz-pflege-zuhause/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Krankheiten', item: 'https://primundus.de/krankheiten/' },
      { '@type': 'ListItem', position: 3, name: 'Demenz Pflege zuhause', item: 'https://primundus.de/demenz-pflege-zuhause/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Kann man Demenzkranke zuhause pflegen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja — in den meisten Stadien ist Demenzpflege zuhause möglich, besonders mit einer 24h-Betreuungskraft. Die vertraute Umgebung verlangsamt nachweislich den Krankheitsverlauf. Die eigene Küche, die bekannten Räume, der gewohnte Garten — das gibt Orientierung und Sicherheit.' } },
      { '@type': 'Question', name: 'Ab wann braucht man 24h-Pflege bei Demenz?', acceptedAnswer: { '@type': 'Answer', text: 'Spätestens wenn der Demenzkranke nicht mehr allein gelassen werden kann — also wenn Weglaufen (Hinlaufen), Herdplatten-Vergessen oder nächtliche Unruhe zur Gefahr werden. Auch wenn pflegende Angehörige an ihre Belastungsgrenze kommen, ist eine professionelle 24h-Kraft die richtige Lösung.' } },
      { '@type': 'Question', name: 'Welchen Pflegegrad bekommt man bei Demenz?', acceptedAnswer: { '@type': 'Answer', text: 'Das hängt vom Stadium ab. Leichte Demenz führt oft zu Pflegegrad 2 oder 3, mittlere Demenz zu PG 3 oder 4, schwere Demenz zu PG 4 oder 5. Seit 2017 werden kognitive Einschränkungen im Begutachtungsinstrument (NBA) stärker gewichtet als früher.' } },
      { '@type': 'Question', name: 'Wie viel kostet Demenzpflege zuhause?', acceptedAnswer: { '@type': 'Answer', text: 'Mit einer 24h-Betreuungskraft von Primundus: 2.200–3.500 €/Monat je nach Pflegebedarf. Mit Pflegegeld (z.B. 599–800 €/Monat bei PG 3–4) und Entlastungsbetrag (131 €/Monat) sinkt der Eigenanteil auf ca. 1.500–2.500 €/Monat.' } },
      { '@type': 'Question', name: 'Wie gestaltet man den Alltag mit Demenzkranken?', acceptedAnswer: { '@type': 'Answer', text: 'Feste Tagesstrukturen geben Orientierung. Bekannte Rituale beibehalten — Kaffeezeit, Lieblingsmusik, täglicher Spaziergang. Überreizung vermeiden. Kurze, einfache Sätze. Sanfte Beschäftigung die an frühere Interessen anknüpft. Konfrontation mit dem Vergessen vermeiden.' } },
    ],
  },
]

export default function DemenzPflegeZuhause() {
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
            <span className="text-[#1C1C1C]">Demenz Pflege zuhause</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>8 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            Demenz Pflege zuhause — was möglich ist & wann 24h-Pflege hilft
          </h1>

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            Demenzpflege zuhause ist in den meisten Stadien möglich — und oft die bessere Wahl. Die vertraute Umgebung gibt Orientierung, verlangsamt nachweislich den Krankheitsverlauf und bewahrt die Würde. Mit einer 24h-Betreuungskraft bleibt die eigene Wohnung erhalten, auch wenn der Pflegebedarf wächst.
          </p>

          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 mb-10 shadow-sm">
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#A89279] mb-3">Auf einen Blick</p>
            <ul className="space-y-2.5">
              {[
                'Häusliche Pflege ist bei Demenz in den meisten Stadien möglich und empfehlenswert',
                'Vertraute Umgebung verlangsamt den Krankheitsverlauf nachweislich',
                '24h-Pflege spätestens wenn der Betroffene nicht mehr allein gelassen werden kann',
                'Pflegegrad 2–5 je nach Stadium — kognitive Einschränkungen werden seit 2017 stärker gewichtet',
                'Pflegegeld: 347–990 €/Monat · Entlastungsbudget: 3.539 €/Jahr',
                'Pflegeheim erst wenn häusliche Pflege medizinisch nicht mehr ausreicht',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-[#2E2E2E]">
                  <span className="w-5 h-5 rounded-full bg-[#E8F5EE] text-[#3D7A5C] flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* SECTION 1 */}
          <h2 id="moeglich" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Was ist bei der Demenzpflege zuhause möglich?
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">
            In den meisten Demenzstadien ist die häusliche Pflege nicht nur möglich — sie ist die empfohlene Versorgungsform. Studien zeigen: Demenzkranke in ihrer vertrauten Umgebung sind ruhiger, orientierter und kognitiv länger stabiler als in Pflegeheimen.
          </p>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Was zuhause gut funktioniert: Tagesstruktur schaffen, bekannte Rituale beibehalten, menschliche Nähe geben. Was schwieriger wird: Sicherheit rund um die Uhr gewährleisten, mit Nachtunruhe umgehen, Weglaufen verhindern. Genau hier macht eine 24h-Betreuungskraft den Unterschied.
          </p>
          <div className="space-y-3 mb-6">
            {[
              { title: 'Frühes Stadium', desc: 'Gedächtnisprobleme, Wortfindungsstörungen, Orientierungsprobleme im Neuen. Häusliche Pflege durch Angehörige meist noch gut möglich. Entlastung durch stundenweise Betreuung oder Tagespflege.' },
              { title: 'Mittleres Stadium', desc: 'Deutliche kognitive Einschränkungen, Alltagsaktivitäten nicht mehr selbstständig möglich, Weglaufen möglich. 24h-Präsenz wird wichtig — entweder durch Angehörige oder Betreuungskraft.' },
              { title: 'Schweres Stadium', desc: 'Weitgehender Verlust der Selbstständigkeit, kaum Kommunikation möglich, vollständige Pflege nötig. 24h-Betreuungskraft oder Pflegeheim — je nach körperlichem Zusatzbedarf.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.title}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Alzheimer im Speziellen:{' '}
            <a href="/alzheimer-betreuung-zuhause/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Alzheimer Betreuung zuhause</a>
            {' · '}
            <a href="/pflegegrad-bei-demenz/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Pflegegrad bei Demenz — Einstufung</a>
          </p>

          {/* SECTION 2 */}
          <h2 id="alltag" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Alltag mit Demenz zuhause gestalten
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Gute Demenzpflege zuhause folgt klaren Prinzipien — unabhängig davon ob Angehörige oder eine professionelle Betreuungskraft die Hauptpflege übernimmt.
          </p>
          <div className="space-y-3 mb-6">
            {[
              { title: 'Feste Tagesstruktur', desc: 'Aufstehen, Mahlzeiten, Spaziergang, Schlafenszeit — immer zur gleichen Zeit. Vorhersehbarkeit gibt Sicherheit und reduziert Angst und Unruhe erheblich.' },
              { title: 'Bekannte Rituale bewahren', desc: 'Lieblingsmusik, täglicher Kaffee mit Gebäck, der vertraute Stammplatz im Wohnzimmer. Was früher selbstverständlich war, ist heute wertvolles therapeutisches Mittel.' },
              { title: 'Kommunikation anpassen', desc: 'Kurze, einfache Sätze. Nicht korrigieren wenn etwas Vergessenes falsch erinnert wird. In die Welt des Demenzkranken einsteigen statt ihn in die Realität zu zerren.' },
              { title: 'Beschäftigung sinnvoll gestalten', desc: 'Aktivitäten die an frühere Interessen anknüpfen: Fotos sortieren, Musik hören, einfache Handarbeiten, Gartenarbeit. Überforderung durch zu viele Reize vermeiden.' },
              { title: 'Sicherheit im Haushalt', desc: 'Herd sichern, scharfe Gegenstände wegräumen, Türen sichern wenn Weglaufen ein Thema ist. Ein Hausnotruf gibt zusätzliche Sicherheit.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.title}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Tagesstruktur bei Demenz:{' '}
            <a href="/tagesstruktur-demenz/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Tagesstruktur bei Demenz — praktische Tipps</a>
            {' · '}
            <a href="/kommunikation-mit-demenzkranken/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Kommunikation mit Demenzkranken</a>
          </p>

          {/* SECTION 3 */}
          <h2 id="pflege-24h" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Wann braucht es 24h-Pflege bei Demenz?
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Spätestens wenn eines dieser Zeichen auftritt, ist 24h-Präsenz notwendig — entweder durch Angehörige rund um die Uhr, oder professioneller durch eine Betreuungskraft.
          </p>
          <div className="space-y-3 mb-6">
            {[
              { title: 'Weglaufen (Hinlaufen)', desc: 'Der Demenzkranke verlässt die Wohnung ohne es zu merken — besonders nachts eine ernsthafte Gefahr. Ständige Präsenz und Türsicherung notwendig.' },
              { title: 'Nachtunruhe', desc: 'Schlafen am Tag, wach in der Nacht — ein häufiges Demenz-Symptom das Angehörige schnell an ihre Grenzen bringt. Eine Betreuungskraft übernimmt die Nachtwache.' },
              { title: 'Selbstgefährdung', desc: 'Vergessen den Herd abzustellen, falsche Medikamentendosierung, Stürze durch Orientierungslosigkeit. Ständige Aufsicht notwendig.' },
              { title: 'Angehörige erschöpft', desc: 'Burnout bei pflegenden Angehörigen ist häufig. Wenn die Belastung zu groß wird, ist eine professionelle 24h-Kraft die beste Lösung — auch für die Beziehung.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.title}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#E8F5EE] border border-[rgba(61,122,92,0.2)] rounded-2xl p-5 mb-6">
            <p className="text-[14px] font-bold text-[#2A5C3F] mb-2">Was eine Primundus-Betreuungskraft bei Demenz konkret leistet</p>
            <ul className="space-y-1.5">
              {[
                'Tagesstruktur schaffen und Rituale konsequent einhalten',
                'Rund um die Uhr präsent — auch nachts ansprechbar',
                'Sicherheit im Haushalt gewährleisten — Weglaufen verhindern',
                'Körperpflege, Mahlzeiten, Medikamentengabe',
                'Emotionale Begleitung und Beschäftigung',
                'Entlastung der Angehörigen — Familienleben wieder möglich',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-[14px] text-[#2A5C3F]">
                  <span className="font-bold mt-0.5 flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Was 24h-Pflege kostet:{' '}
            <a href="/kosten/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Kosten der 24h-Pflege 2026</a>
            {' · '}
            <a href="/burnout-pflegende-angehoerige/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Burnout pflegende Angehörige</a>
          </p>

          {/* SECTION 4 */}
          <h2 id="pflegegrad" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Pflegegrad bei Demenz & Kassenzuschüsse 2026
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Seit der Pflegereform 2017 werden kognitive Einschränkungen bei der Begutachtung deutlich stärker gewichtet. Demenzbetroffene bekommen heute in der Regel höhere Pflegegrade als unter dem alten Pflegestufensystem.
          </p>

          <div className="bg-white rounded-2xl border border-[#E5E3DF] overflow-hidden mb-6 shadow-sm">
            <div className="px-5 py-3 bg-[#F8F7F5] border-b border-[#E5E3DF]">
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#8B8B8B]">Typische Pflegegrade bei Demenz & Leistungen 2026</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#F8F7F5]">
                    {['Demenzstadium', 'Typischer PG', 'Pflegegeld', 'Entlastungsbetrag'].map(h => (
                      <th key={h} className="px-4 py-3 text-[12px] font-semibold text-[#8B8B8B] text-left border-b border-[#E5E3DF]">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Leicht', 'PG 2–3', '347–599 €', '131 €'],
                    ['Mittel', 'PG 3–4', '599–800 €', '131 €'],
                    ['Schwer', 'PG 4–5', '800–990 €', '131 €'],
                  ].map(([stadium, pg, pflegegeld, entlastung], i) => (
                    <tr key={stadium} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8F7F5]'}>
                      <td className="px-4 py-3 text-[14px] text-[#2E2E2E] border-b border-[#E5E3DF]">{stadium}</td>
                      <td className="px-4 py-3 text-[14px] font-semibold text-[#1C1C1C] border-b border-[#E5E3DF]">{pg}</td>
                      <td className="px-4 py-3 text-[14px] font-bold text-[#3D7A5C] border-b border-[#E5E3DF]">{pflegegeld}</td>
                      <td className="px-4 py-3 text-[14px] text-[#2E2E2E] border-b border-[#E5E3DF]">{entlastung}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-5 py-2">
              <p className="text-[11px] text-[#8B8B8B]">Richtwerte · Einstufung durch MD · Zusätzlich: Entlastungsbudget 3.539 €/Jahr (ab PG 2)</p>
            </div>
          </div>

          <p className="text-[15px] text-[#2E2E2E] mb-3">
            → Pflegegrad bei Demenz beantragen:{' '}
            <a href="/pflegegrad-bei-demenz/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Pflegegrad bei Demenz — Einstufung & Tipps</a>
          </p>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Alle Zuschüsse kombinieren:{' '}
            <a href="/finanzierung/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Finanzierung der 24h-Pflege — alle Zuschüsse 2026</a>
          </p>

          {/* SECTION 5 */}
          <h2 id="grenzen" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Wann stößt häusliche Pflege an ihre Grenzen?
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Häusliche Demenzpflege — auch mit professioneller Betreuungskraft — hat Grenzen. Ein Pflegeheim wird dann zur besseren Option wenn:
          </p>
          <div className="space-y-3 mb-6">
            {[
              'Intensivmedizinische Behandlungspflege rund um die Uhr nötig ist (z.B. Beatmung, Dauerkatheter-Management)',
              'Der Demenzkranke so aggressiv wird dass die Sicherheit der Betreuungsperson gefährdet ist',
              'Kein geeigneter Wohnraum für eine Betreuungskraft vorhanden ist',
              'Der Betroffene ausdrücklich selbst ins Pflegeheim möchte (wenn noch entscheidungsfähig)',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-[#E5E3DF]">
                <span className="w-5 h-5 rounded-full bg-[#FDF0EE] text-[#E76F63] flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">!</span>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Häusliche vs. stationäre Pflege:{' '}
            <a href="/24h-pflege-vs-pflegeheim-kosten/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">24h-Pflege vs. Pflegeheim — was ist besser?</a>
          </p>

          {/* FAQ */}
          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">
            Häufige Fragen zur Demenzpflege zuhause
          </h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Kann man Demenzkranke zuhause pflegen?', a: 'Ja — in den meisten Stadien ist Demenzpflege zuhause möglich und empfehlenswert. Die vertraute Umgebung gibt Orientierung und verlangsamt nachweislich den Krankheitsverlauf. Mit einer 24h-Betreuungskraft bleibt das eigene Zuhause auch bei zunehmendem Pflegebedarf erhalten.' },
              { q: 'Ab wann braucht man 24h-Pflege bei Demenz?', a: 'Spätestens wenn der Demenzkranke nicht mehr allein gelassen werden kann — bei Weglaufen, gefährlichem Vergessen (Herd), Nachtunruhe oder wenn Angehörige erschöpft sind. Dann ist eine rund um die Uhr präsente Betreuungskraft die richtige Lösung.' },
              { q: 'Welchen Pflegegrad bekommt man bei Demenz?', a: 'Je nach Stadium PG 2–5. Leichte Demenz: oft PG 2–3. Mittlere Demenz: PG 3–4. Schwere Demenz: PG 4–5. Seit 2017 werden kognitive Einschränkungen im Begutachtungsverfahren stärker gewichtet — Demenzbetroffene werden besser eingestuft als früher.' },
              { q: 'Wie viel kostet Demenzpflege zuhause?', a: 'Mit einer 24h-Betreuungskraft von Primundus: 2.200–3.500 €/Monat. Mit Pflegegeld (z.B. 599 €/Monat bei PG 3) und Entlastungsbetrag (131 €/Monat) sinkt der Eigenanteil auf ca. 1.500–2.800 €/Monat.' },
              { q: 'Wie gestaltet man den Alltag mit Demenzkranken?', a: 'Feste Tagesstrukturen, bekannte Rituale beibehalten, kurze einfache Kommunikation, keine Korrektur des Vergessens. Sinnvolle Beschäftigung die an frühere Interessen anknüpft. Überreizung und Konfrontation mit dem Vergessen vermeiden.' },
              { q: 'Wann ist ein Pflegeheim besser als Demenzpflege zuhause?', a: 'Wenn intensivmedizinische Behandlungspflege rund um die Uhr nötig ist, wenn aggressive Verhaltensweisen die Sicherheit gefährden, oder wenn kein geeigneter Wohnraum für eine Betreuungskraft vorhanden ist.' },
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
