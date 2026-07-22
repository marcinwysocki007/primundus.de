import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [
  { id: 'verlauf', title: 'Alzheimer verstehen — Stadien & Verlauf' },
  { id: 'zuhause', title: 'Was zuhause möglich ist' },
  { id: 'alltag', title: 'Alltagsgestaltung bei Alzheimer' },
  { id: 'pflege24h', title: 'Wann 24h-Pflege die richtige Lösung ist' },
  { id: 'pflegegrad', title: 'Pflegegrad & Kassenzuschüsse' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Alzheimer Betreuung zuhause — was möglich ist & wie 24h-Pflege hilft | Primundus',
  description: 'Alzheimer Betreuung zuhause: Was in welchem Stadium möglich ist, wie der Alltag gestaltet wird und wann eine 24h-Betreuungskraft die richtige Unterstützung bietet.',
  alternates: { canonical: 'https://primundus.de/alzheimer-betreuung-zuhause/' },
  openGraph: {
    title: 'Alzheimer Betreuung zuhause | Primundus',
    description: 'Alzheimer zuhause betreuen: Was in welchem Stadium möglich ist und wie 24h-Pflege hilft.',
    url: 'https://primundus.de/alzheimer-betreuung-zuhause/',
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
    headline: 'Alzheimer Betreuung zuhause — Stadien, Alltag & 24h-Pflege',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/alzheimer-betreuung-zuhause/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Krankheiten', item: 'https://primundus.de/krankheiten/' },
      { '@type': 'ListItem', position: 3, name: 'Alzheimer Betreuung zuhause', item: 'https://primundus.de/alzheimer-betreuung-zuhause/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Kann man Alzheimer-Patienten zuhause betreuen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja — in allen Stadien ist häusliche Betreuung grundsätzlich möglich. Die vertraute Umgebung verlangsamt den Krankheitsverlauf, gibt Orientierung und erhält Würde. Ab dem mittleren Stadium ist eine 24h-Betreuungskraft empfehlenswert, um Sicherheit und Tagesstruktur rund um die Uhr zu gewährleisten.' } },
      { '@type': 'Question', name: 'Welchen Pflegegrad hat man bei Alzheimer?', acceptedAnswer: { '@type': 'Answer', text: 'Leichtes Stadium: oft PG 2–3. Mittleres Stadium: PG 3–4. Schweres Stadium: PG 4–5. Seit 2017 werden kognitive Einschränkungen im NBA-Begutachtungsverfahren deutlich stärker gewichtet — Alzheimer-Betroffene werden besser eingestuft als früher.' } },
      { '@type': 'Question', name: 'Wie unterscheidet sich Alzheimer von Demenz?', acceptedAnswer: { '@type': 'Answer', text: 'Alzheimer ist die häufigste Form der Demenz (ca. 60–70 % aller Demenzkranken). Demenz ist der Oberbegriff — Alzheimer ist eine spezifische neurodegenerative Erkrankung mit typischem Verlaufsmuster: Gedächtnisverlust beginnt mit Kurzzeitspeicher, Langzeitgedächtnis ist lange intakt.' } },
    ],
  },
]

export default function AlzheimerBetreuungZuhause() {
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
            <span className="text-[#1C1C1C]">Alzheimer Betreuung zuhause</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>8 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            Alzheimer Betreuung zuhause — was möglich ist & wie 24h-Pflege hilft
          </h1>

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            Alzheimer ist die häufigste Demenzform — und häusliche Betreuung ist in allen Stadien grundsätzlich möglich. Die vertraute Umgebung mit den bekannten Geräuschen, Gerüchen und Gesichtern gibt Orientierung, die kein Pflegeheim ersetzen kann. Mit einer 24h-Betreuungskraft bleibt das eigene Zuhause auch bei fortgeschrittenem Alzheimer erhalten.
          </p>

          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 mb-10 shadow-sm">
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#A89279] mb-3">Auf einen Blick</p>
            <ul className="space-y-2.5">
              {[
                'Häusliche Betreuung ist in allen Alzheimer-Stadien grundsätzlich möglich',
                'Vertraute Umgebung verlangsamt nachweislich den kognitiven Abbau',
                'Ab mittlerem Stadium: 24h-Präsenz für Sicherheit und Tagesstruktur notwendig',
                'Pflegegrad 2–5 je nach Stadium — frühzeitig beantragen',
                'Pflegegeld: 347–990 €/Monat · Entlastungsbudget: 3.539 €/Jahr',
                'Primundus vermittelt Kräfte mit Alzheimer/Demenz-Erfahrung in 4–7 Tagen',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-[#2E2E2E]">
                  <span className="w-5 h-5 rounded-full bg-[#E8F5EE] text-[#3D7A5C] flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <h2 id="verlauf" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Alzheimer verstehen — Stadien & Verlauf
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">
            Alzheimer ist eine progressive neurodegenerative Erkrankung — sie schreitet unaufhaltsam fort, aber die Geschwindigkeit variiert stark. Manche Betroffene leben 5 Jahre mit der Diagnose, andere 15 oder mehr. Der Verlauf bestimmt was häusliche Betreuung leisten muss.
          </p>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">
            <strong>Wichtig:</strong> Alzheimer ist die häufigste Demenzform (60–70 % aller Demenzkranken). Der Unterschied zu anderen Demenzformen: Beim Alzheimer ist das Kurzzeitgedächtnis zuerst betroffen, das Langzeitgedächtnis bleibt oft lange intakt. Betroffene erinnern sich an ihre Hochzeit vor 50 Jahren — aber nicht was sie heute gefrühstückt haben.
          </p>
          <div className="space-y-3 mb-10">
            {[
              { title: 'Frühes Stadium', desc: 'Vergesslichkeit beim Kurzzeitspeicher, Wortfindungsstörungen, Schwierigkeiten bei komplexen Aufgaben (Finanzen, Reisen). Weitgehend selbstständig, aber zunehmend überfordert. Häusliche Pflege durch Angehörige meist gut möglich.' },
              { title: 'Mittleres Stadium', desc: 'Deutliche Orientierungslosigkeit, Verwechslung von Personen und Zeiten, Verlaufen auch in vertrauter Umgebung, Nachtunruhe, erste Körperpflegedefizite. 24h-Präsenz wird notwendig.' },
              { title: 'Schweres Stadium', desc: 'Kaum Kommunikation möglich, vollständige Fremdversorgung, Immobilität, Schluckstörungen, Bettlägerigkeit. Intensive Pflege durch Betreuungskraft oder Pflegeheim.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.title}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 id="zuhause" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Was zuhause möglich ist
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Das eigene Zuhause ist für Alzheimer-Betroffene kein Luxus — es ist therapeutisch wirksam. Bekannte Bilder an der Wand, der vertraute Geruch der Küche, der gewohnte Blick aus dem Fenster: Das alles gibt Orientierung wenn das Kurzzeitgedächtnis versagt.
          </p>
          <div className="space-y-3 mb-10">
            {[
              { title: 'Frühes Stadium — Angehörige mit Unterstützung', desc: 'Stundenweise Betreuung, Erinnerungshilfen (Kalender, Beschriftungen), Routinen etablieren, soziale Kontakte aufrechterhalten. Angehörige können die Hauptrolle spielen.' },
              { title: 'Mittleres Stadium — 24h-Kraft empfohlen', desc: 'Wann 24h-Präsenz nötig wird: wenn der Betroffene nicht mehr allein gelassen werden kann, wenn Weglaufen droht, wenn nachts Hilfe nötig ist. Eine feste Bezugsperson gibt Sicherheit.' },
              { title: 'Schweres Stadium — intensive Betreuung', desc: 'Vollständige Körperpflege, Lagerung, Ernährung, Dekubitusprophylaxe. In den meisten Fällen noch zuhause möglich — außer bei intensivmedizinischem Dauerbedarf.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.title}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 id="alltag" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Alltagsgestaltung bei Alzheimer — was wirklich hilft
          </h2>
          <div className="space-y-3 mb-6">
            {[
              { title: 'Feste Tagesstruktur', desc: 'Aufstehen, Mahlzeiten, Aktivitäten, Schlafenszeit — immer zur gleichen Uhrzeit. Vorhersehbarkeit gibt Sicherheit wenn das Kurzzeitgedächtnis fehlt.' },
              { title: 'Validierung statt Korrektur', desc: 'Nicht korrigieren wenn etwas falsch erinnert wird. Stattdessen in die emotionale Realität des Betroffenen einsteigen. "Erzähl mir von deinem Mann" — nicht "Dein Mann ist schon lange gestorben."' },
              { title: 'Biographiearbeit', desc: 'Alte Fotos, Musik aus der Jugend, Erinnerungsgegenstände aktivieren das intakte Langzeitgedächtnis. Das schafft positive Momente auch im fortgeschrittenen Stadium.' },
              { title: 'Bewegung täglich', desc: 'Spaziergänge in gewohnter Umgebung. Tanzen oder Schunkeln zu vertrauter Musik. Gartenarbeit wenn möglich. Bewegung verbessert Stimmung und Schlaf.' },
              { title: 'Reizarme Umgebung', desc: 'Kein Nachrichtenlärm, keine überfordernden Gespräche, ruhige Atmosphäre. Zu viele Stimuli führen zu Unruhe und Angst.' },
              { title: 'Sicherheit im Haushalt', desc: 'Herd sichern, Türen sichern (Weglaufschutz), scharfe Gegenstände wegräumen, Teppiche fixieren. Die Wohnung sturzfrei und sicher machen.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.title}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Kommunikation bei Demenz:{' '}
            <a href="/kommunikation-mit-demenzkranken/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Kommunikation mit Demenzkranken — was hilft</a>
            {' · '}
            <a href="/tagesstruktur-demenz/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Tagesstruktur bei Demenz</a>
          </p>

          <h2 id="pflege24h" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Wann 24h-Pflege bei Alzheimer die richtige Lösung ist
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Ab dem mittleren Stadium ist eine feste Bezugsperson rund um die Uhr in den meisten Fällen die beste Lösung — sowohl für Sicherheit als auch für Lebensqualität.
          </p>
          <div className="space-y-3 mb-6">
            {[
              { title: 'Was eine Primundus-Kraft bei Alzheimer leistet', desc: 'Tagesstruktur und Rituale konsequent einhalten. Rund um die Uhr ansprechbar. Weglaufen und Sicherheitsrisiken verhindern. Körperpflege und Mahlzeiten. Biographiearbeit und emotionale Begleitung. Entlastung der Familie.' },
              { title: 'Erfahrung mit Alzheimer wichtig', desc: 'Eine Kraft die Alzheimer kennt weiß: nicht korrigieren, in die Welt des Betroffenen einsteigen, mit Validierung und nicht mit Realitätsorientierung arbeiten. Primundus wählt gezielt Kräfte mit Demenz-Erfahrung.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.title}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-3">
            → Allgemeine Demenzpflege:{' '}
            <a href="/demenz-pflege-zuhause/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Demenz Pflege zuhause — vollständiger Ratgeber</a>
          </p>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Kosten & Zuschüsse:{' '}
            <a href="/kosten/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Was kostet 24h-Pflege 2026?</a>
          </p>

          <h2 id="pflegegrad" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Pflegegrad bei Alzheimer & Kassenzuschüsse 2026
          </h2>
          <div className="bg-white rounded-2xl border border-[#E5E3DF] overflow-hidden mb-6 shadow-sm">
            <div className="px-5 py-3 bg-[#F8F7F5] border-b border-[#E5E3DF]">
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#8B8B8B]">Pflegegrade bei Alzheimer & Leistungen 2026</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#F8F7F5]">
                    {['Stadium', 'Typischer PG', 'Pflegegeld', 'Entlastungsbetrag'].map(h => (
                      <th key={h} className="px-4 py-3 text-[12px] font-semibold text-[#8B8B8B] text-left border-b border-[#E5E3DF]">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Leichtes Stadium', 'PG 2–3', '347–599 €', '131 €'],
                    ['Mittleres Stadium', 'PG 3–4', '599–800 €', '131 €'],
                    ['Schweres Stadium', 'PG 4–5', '800–990 €', '131 €'],
                  ].map(([stadium, pg, pflegegeld, eb], i) => (
                    <tr key={stadium} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8F7F5]'}>
                      <td className="px-4 py-3 text-[14px] text-[#2E2E2E] border-b border-[#E5E3DF]">{stadium}</td>
                      <td className="px-4 py-3 text-[14px] font-semibold text-[#1C1C1C] border-b border-[#E5E3DF]">{pg}</td>
                      <td className="px-4 py-3 text-[14px] font-bold text-[#3D7A5C] border-b border-[#E5E3DF]">{pflegegeld}</td>
                      <td className="px-4 py-3 text-[14px] text-[#2E2E2E] border-b border-[#E5E3DF]">{eb}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-5 py-2">
              <p className="text-[11px] text-[#8B8B8B]">Richtwerte · Einstufung durch MD · Zusätzlich: Entlastungsbudget 3.539 €/Jahr (ab PG 2) · Stand 2026</p>
            </div>
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Pflegegrad beantragen:{' '}
            <a href="/pflegegrad-beantragen/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Schritt für Schritt Anleitung</a>
            {' · '}
            <a href="/pflegegrad-bei-demenz/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Pflegegrad bei Demenz</a>
          </p>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">
            Häufige Fragen zur Alzheimer-Betreuung
          </h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Kann man Alzheimer-Patienten zuhause betreuen?', a: 'Ja — in allen Stadien ist häusliche Betreuung grundsätzlich möglich. Die vertraute Umgebung verlangsamt den kognitiven Abbau, gibt Orientierung und erhält Würde. Ab dem mittleren Stadium ist eine 24h-Betreuungskraft empfehlenswert.' },
              { q: 'Welchen Pflegegrad hat man bei Alzheimer?', a: 'Je nach Stadium PG 2–5. Seit 2017 werden kognitive Einschränkungen im NBA-Begutachtungsverfahren deutlich stärker gewichtet — Alzheimer-Betroffene werden besser eingestuft als früher.' },
              { q: 'Wie unterscheidet sich Alzheimer von Demenz?', a: 'Alzheimer ist die häufigste Demenzform (60–70 % aller Fälle). Typisch: Kurzzeitspeicher zuerst betroffen, Langzeitgedächtnis lange intakt. Demenz ist der Oberbegriff — Alzheimer eine spezifische Ursache.' },
              { q: 'Was sind die häufigsten Herausforderungen bei der Alzheimer-Betreuung?', a: 'Weglaufen (Hinlaufen), Nachtunruhe, Verweigerung von Körperpflege und Mahlzeiten, Verhaltensveränderungen wie Aggressionen oder Ängste, Kommunikation wenn Sprache abnimmt.' },
              { q: 'Was kostet Alzheimer-Betreuung zuhause?', a: 'Mit einer 24h-Betreuungskraft von Primundus: 2.200–3.500 €/Monat. Mit Pflegegeld (z.B. 599 €/Monat bei PG 3) und Entlastungsbetrag (131 €/Monat) sinkt der Eigenanteil auf ca. 1.500–2.800 €/Monat.' },
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
