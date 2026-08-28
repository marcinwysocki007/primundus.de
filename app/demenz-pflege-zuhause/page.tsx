import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { AuthorByline } from '@/components/AuthorByline'

const SECTIONS = [
  { id: 'moeglich', title: 'Was ist zuhause möglich?' },
  { id: 'alltag', title: 'Alltag mit Demenz gestalten' },
  { id: 'pflege-24h', title: 'Wann braucht es 24h-Pflege?' },
  { id: 'zuhause-oder-heim', title: 'Zuhause oder Heim?' },
  { id: 'pflegegrad', title: 'Pflegegrad & Leistungen' },
  { id: 'grenzen', title: 'Grenzen der häuslichen Pflege' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Demenzbetreuung zu Hause: Was möglich ist & wann 24h-Pflege hilft | Primundus',
  description: 'Demenzbetreuung zu Hause: Was Angehörige leisten können, ab wann eine 24-Stunden-Betreuung bei Demenz sinnvoll ist und welche Kassenzuschüsse 2026 helfen.',
  alternates: { canonical: 'https://primundus.de/demenz-pflege-zuhause' },
  openGraph: {
    title: 'Demenzbetreuung zu Hause: 24h-Pflege bei Demenz | Primundus',
    description: 'Was bei Demenz zuhause möglich ist, ab wann 24h-Pflege nötig wird und welche Leistungen die Pflegekasse zahlt.',
    url: 'https://primundus.de/demenz-pflege-zuhause',
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
    author: { '@type': 'Person', name: 'Marta Kapcio', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/demenz-pflege-zuhause',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Krankheiten', item: 'https://primundus.de/krankheiten' },
      { '@type': 'ListItem', position: 3, name: 'Demenz Pflege zuhause', item: 'https://primundus.de/demenz-pflege-zuhause' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Kann man Demenzkranke zuhause pflegen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja — in den meisten Stadien ist Demenzpflege zuhause möglich und empfehlenswert. Die vertraute Umgebung gibt Orientierung und verlangsamt nachweislich den Krankheitsverlauf. Mit einer 24h-Betreuungskraft bleibt das eigene Zuhause auch bei zunehmendem Pflegebedarf erhalten.' } },
      { '@type': 'Question', name: 'Ab wann braucht man 24h-Pflege bei Demenz?', acceptedAnswer: { '@type': 'Answer', text: 'Spätestens wenn der Demenzkranke nicht mehr allein gelassen werden kann — bei Weglaufen, gefährlichem Vergessen (Herd), Nachtunruhe oder wenn Angehörige erschöpft sind. Dann ist eine rund um die Uhr präsente Betreuungskraft die richtige Lösung.' } },
      { '@type': 'Question', name: 'Welchen Pflegegrad bekommt man bei Demenz?', acceptedAnswer: { '@type': 'Answer', text: 'Je nach Stadium PG 2–5. Leichte Demenz: oft PG 2–3. Mittlere Demenz: PG 3–4. Schwere Demenz: PG 4–5. Seit 2017 werden kognitive Einschränkungen im Begutachtungsverfahren stärker gewichtet — Demenzbetroffene werden besser eingestuft als früher.' } },
      { '@type': 'Question', name: 'Wie viel kostet Demenzpflege zuhause?', acceptedAnswer: { '@type': 'Answer', text: 'Mit einer 24h-Betreuungskraft von Primundus: 2.200–3.500 €/Monat. Mit Pflegegeld (z.B. 599 €/Monat bei PG 3) und Entlastungsbetrag (131 €/Monat) sinkt der Eigenanteil auf ca. 1.500–2.800 €/Monat.' } },
      { '@type': 'Question', name: 'Ist bei Demenz das Zuhause oder das Pflegeheim besser?', acceptedAnswer: { '@type': 'Answer', text: 'Solange die Sicherheit gewährleistet ist, spricht bei Demenz vieles für das Zuhause: Die vertraute Umgebung gibt Orientierung, eine feste Betreuungskraft ist eine verlässliche Bezugsperson. Das Heim ist die bessere Wahl bei ausgeprägter Selbst- oder Fremdgefährdung oder wenn intensive medizinische Versorgung zuhause nicht sicherzustellen ist.' } },
      { '@type': 'Question', name: 'Wie gestaltet man den Alltag mit Demenzkranken?', acceptedAnswer: { '@type': 'Answer', text: 'Feste Tagesstrukturen, bekannte Rituale beibehalten, kurze einfache Kommunikation, keine Korrektur des Vergessens. Sinnvolle Beschäftigung die an frühere Interessen anknüpft. Überreizung und Konfrontation mit dem Vergessen vermeiden.' } },
      { '@type': 'Question', name: 'Wann ist ein Pflegeheim besser als Demenzpflege zuhause?', acceptedAnswer: { '@type': 'Answer', text: 'Wenn intensivmedizinische Behandlungspflege rund um die Uhr nötig ist, wenn aggressive Verhaltensweisen die Sicherheit gefährden, oder wenn kein geeigneter Wohnraum für eine Betreuungskraft vorhanden ist.' } }
    ],
  },
]

export default function DemenzPflegeZuhause() {
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
            <a href="/krankheiten" className="hover:text-pm-taupe transition-colors">Krankheiten</a>
            <span>›</span>
            <span className="text-pm-ink">Demenz Pflege zuhause</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-pm-taupe-light mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>8 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-h1 md:text-h1-lg font-bold text-pm-ink mb-6">
            Demenzbetreuung zu Hause: Was möglich ist — und wann 24h-Pflege hilft
          </h1>

          <AuthorByline updated="25. April 2026" />

          <p className="text-[17px] md:text-[19px] leading-relaxed text-pm-body mb-10 font-medium">
            Demenzpflege zuhause ist in den meisten Stadien möglich — und oft die bessere Wahl. Die vertraute Umgebung gibt Orientierung, verlangsamt nachweislich den Krankheitsverlauf und bewahrt die Würde. Mit einer 24h-Betreuungskraft bleibt die eigene Wohnung erhalten, auch wenn der Pflegebedarf wächst.
          </p>

          <div className="bg-white border border-pm-line rounded-2xl p-6 mb-10 shadow-sm">
            <p className="text-meta font-bold uppercase tracking-[0.1em] text-pm-taupe-light mb-4">Auf einen Blick</p>
            <ul className="space-y-2.5">
              {[
                'Häusliche Pflege ist bei Demenz in den meisten Stadien möglich und empfehlenswert',
                'Vertraute Umgebung verlangsamt den Krankheitsverlauf nachweislich',
                '24h-Pflege spätestens wenn der Betroffene nicht mehr allein gelassen werden kann',
                'Pflegegrad 2–5 je nach Stadium — kognitive Einschränkungen werden seit 2017 stärker gewichtet',
                'Pflegegeld: 347–990 €/Monat · Entlastungsbudget: 3.539 €/Jahr',
                'Pflegeheim erst wenn häusliche Pflege medizinisch nicht mehr ausreicht',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-pm-body">
                  <span className="w-5 h-5 rounded-full bg-pm-mint text-pm-green flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* SECTION 1 */}
          <h2 id="moeglich" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">
            Was ist bei der Demenzpflege zuhause möglich?
          </h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-4">
            In den meisten Demenzstadien ist die häusliche Pflege nicht nur möglich — sie ist die empfohlene Versorgungsform. Studien zeigen: Demenzkranke in ihrer vertrauten Umgebung sind ruhiger, orientierter und kognitiv länger stabiler als in Pflegeheimen.
          </p>
          <p className="text-[16px] leading-relaxed text-pm-body mb-6">
            Was zuhause gut funktioniert: Tagesstruktur schaffen, bekannte Rituale beibehalten, menschliche Nähe geben. Was schwieriger wird: Sicherheit rund um die Uhr gewährleisten, mit Nachtunruhe umgehen, Weglaufen verhindern. Genau hier macht eine 24h-Betreuungskraft den Unterschied.
          </p>
          <div className="space-y-3 mb-6">
            {[
              { title: 'Frühes Stadium', desc: 'Gedächtnisprobleme, Wortfindungsstörungen, Orientierungsprobleme im Neuen. Häusliche Pflege durch Angehörige meist noch gut möglich. Entlastung durch stundenweise Betreuung oder Tagespflege.' },
              { title: 'Mittleres Stadium', desc: 'Deutliche kognitive Einschränkungen, Alltagsaktivitäten nicht mehr selbstständig möglich, Weglaufen möglich. 24h-Präsenz wird wichtig — entweder durch Angehörige oder Betreuungskraft.' },
              { title: 'Schweres Stadium', desc: 'Weitgehender Verlust der Selbstständigkeit, kaum Kommunikation möglich, vollständige Pflege nötig. 24h-Betreuungskraft oder Pflegeheim — je nach körperlichem Zusatzbedarf.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-pm-line">
                <p className="text-[15px] font-bold text-pm-ink mb-1">{item.title}</p>
                <p className="text-[14px] text-pm-body leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-pm-body mb-10">
            → Alzheimer im Speziellen:{' '}
            <a href="/alzheimer-betreuung-zuhause" className="text-pm-taupe underline hover:text-pm-taupe-deep">Alzheimer Betreuung zuhause</a>
            {' · '}
            <a href="/pflegegrad-bei-demenz" className="text-pm-taupe underline hover:text-pm-taupe-deep">Pflegegrad bei Demenz — Einstufung</a>
          </p>

          {/* SECTION 2 */}
          <h2 id="alltag" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">
            Alltag mit Demenz zuhause gestalten
          </h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-6">
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
              <div key={item.title} className="bg-white rounded-xl p-5 border border-pm-line">
                <p className="text-[15px] font-bold text-pm-ink mb-1">{item.title}</p>
                <p className="text-[14px] text-pm-body leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-pm-body mb-10">
            → Tagesstruktur bei Demenz:{' '}
            <a href="/tagesstruktur-demenz" className="text-pm-taupe underline hover:text-pm-taupe-deep">Tagesstruktur bei Demenz — praktische Tipps</a>
            {' · '}
            <a href="/kommunikation-mit-demenzkranken" className="text-pm-taupe underline hover:text-pm-taupe-deep">Kommunikation mit Demenzkranken</a>
          </p>

          {/* SECTION 3 */}
          <h2 id="pflege-24h" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">
            Wann braucht es 24h-Pflege bei Demenz?
          </h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-6">
            Spätestens wenn eines dieser Zeichen auftritt, ist 24h-Präsenz notwendig — entweder durch Angehörige rund um die Uhr, oder professioneller durch eine Betreuungskraft.
          </p>
          <div className="space-y-3 mb-6">
            {[
              { title: 'Weglaufen (Hinlaufen)', desc: 'Der Demenzkranke verlässt die Wohnung ohne es zu merken — besonders nachts eine ernsthafte Gefahr. Ständige Präsenz und Türsicherung notwendig.' },
              { title: 'Nachtunruhe', desc: 'Schlafen am Tag, wach in der Nacht — ein häufiges Demenz-Symptom das Angehörige schnell an ihre Grenzen bringt. Eine Betreuungskraft übernimmt die Nachtwache.' },
              { title: 'Selbstgefährdung', desc: 'Vergessen den Herd abzustellen, falsche Medikamentendosierung, Stürze durch Orientierungslosigkeit. Ständige Aufsicht notwendig.' },
              { title: 'Angehörige erschöpft', desc: 'Burnout bei pflegenden Angehörigen ist häufig. Wenn die Belastung zu groß wird, ist eine professionelle 24h-Kraft die beste Lösung — auch für die Beziehung.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-pm-line">
                <p className="text-[15px] font-bold text-pm-ink mb-1">{item.title}</p>
                <p className="text-[14px] text-pm-body leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-pm-mint border border-[rgba(61,122,92,0.2)] rounded-2xl p-5 mb-6">
            <p className="text-[14px] font-bold text-pm-green-deep mb-2">Was eine Primundus-Betreuungskraft bei Demenz konkret leistet</p>
            <ul className="space-y-1.5">
              {[
                'Tagesstruktur schaffen und Rituale konsequent einhalten',
                'Rund um die Uhr präsent — auch nachts ansprechbar',
                'Sicherheit im Haushalt gewährleisten — Weglaufen verhindern',
                'Körperpflege, Mahlzeiten, Medikamentengabe',
                'Emotionale Begleitung und Beschäftigung',
                'Entlastung der Angehörigen — Familienleben wieder möglich',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-[14px] text-pm-green-deep">
                  <span className="font-bold mt-0.5 flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <p className="text-[15px] text-pm-body mb-10">
            → Was 24h-Pflege kostet:{' '}
            <a href="/kosten" className="text-pm-taupe underline hover:text-pm-taupe-deep">Kosten der 24h-Pflege 2026</a>
            {' · '}
            <a href="/burnout-pflegende-angehoerige" className="text-pm-taupe underline hover:text-pm-taupe-deep">Burnout pflegende Angehörige</a>
          </p>

          {/* SECTION 3b — Zuhause oder Heim */}
          <h2 id="zuhause-oder-heim" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">
            Demenz: zu Hause pflegen oder ins Heim?
          </h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-4">
            Die Frage stellt sich in fast jeder Familie — und sie hat keine pauschale Antwort. Was sich
            sagen lässt: Bei Demenz wiegt das Vertraute schwerer als bei jeder anderen Erkrankung. Wer die
            eigene Küche, den Blick aus dem Fenster und die gewohnten Wege verliert, verliert Orientierung —
            ein Umzug ist für Demenzkranke oft ein spürbarer Einschnitt. Zuhause mit einer festen
            Betreuungskraft gibt es 1:1-Zuwendung von einem vertrauten Gesicht; im Heim wechseln
            Bezugspersonen im Schichtdienst.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white border border-pm-line rounded-2xl p-5">
              <p className="text-[13px] font-bold text-pm-green mb-2">Was für das Zuhause spricht</p>
              <p className="text-[14px] text-pm-body leading-relaxed">Vertraute Umgebung gibt Orientierung und Ruhe · eine feste Bezugsperson statt wechselnder Schichten · Tagesablauf nach den eigenen Gewohnheiten · Angehörige bleiben nah — und mit Kassenzuschüssen ist der Eigenanteil oft niedriger als der Heim-Eigenanteil von bundesweit Ø 3.364 €/Monat (vdek, Stand Juli 2026).</p>
            </div>
            <div className="bg-white border border-pm-line rounded-2xl p-5">
              <p className="text-[13px] font-bold text-pm-taupe mb-2">Wann das Heim die bessere Wahl sein kann</p>
              <p className="text-[14px] text-pm-body leading-relaxed">Bei ausgeprägter Weglauftendenz mit Selbstgefährdung, die auch eine anwesende Betreuungskraft nicht auffangen kann · bei schweren Verhaltensauffälligkeiten mit Fremdgefährdung · wenn zusätzlich intensive medizinische Versorgung nötig ist, die zuhause nicht sicherzustellen ist. Spezialisierte Demenz-Wohnbereiche sind dafür eingerichtet.</p>
            </div>
          </div>
          <p className="text-[15px] text-pm-body mb-10">
            → Zahlen im Detail: <a href="/pflegeheim-kostenvergleich" className="text-pm-taupe underline hover:text-pm-taupe-deep">24h-Pflege und Pflegeheim im Kostenvergleich</a>
          </p>

          {/* SECTION 4 */}
          <h2 id="pflegegrad" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">
            Pflegegrad bei Demenz & Kassenzuschüsse 2026
          </h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-6">
            Seit der Pflegereform 2017 werden kognitive Einschränkungen bei der Begutachtung deutlich stärker gewichtet. Demenzbetroffene bekommen heute in der Regel höhere Pflegegrade als unter dem alten Pflegestufensystem.
          </p>

          <div className="bg-white rounded-2xl border border-pm-line overflow-hidden mb-6 shadow-sm">
            <div className="px-5 py-3 bg-pm-paper border-b border-pm-line">
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-pm-mute">Typische Pflegegrade bei Demenz & Leistungen 2026</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-pm-paper">
                    {['Demenzstadium', 'Typischer PG', 'Pflegegeld', 'Entlastungsbetrag'].map(h => (
                      <th key={h} className="px-4 py-3 text-[12px] font-semibold text-pm-mute text-left border-b border-pm-line">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Leicht', 'PG 2–3', '347–599 €', '131 €'],
                    ['Mittel', 'PG 3–4', '599–800 €', '131 €'],
                    ['Schwer', 'PG 4–5', '800–990 €', '131 €'],
                  ].map(([stadium, pg, pflegegeld, entlastung], i) => (
                    <tr key={stadium} className={i % 2 === 0 ? 'bg-white' : 'bg-pm-paper'}>
                      <td className="px-4 py-3 text-[14px] text-pm-body border-b border-pm-line">{stadium}</td>
                      <td className="px-4 py-3 text-[14px] font-semibold text-pm-ink border-b border-pm-line">{pg}</td>
                      <td className="px-4 py-3 text-[14px] font-bold text-pm-green border-b border-pm-line">{pflegegeld}</td>
                      <td className="px-4 py-3 text-[14px] text-pm-body border-b border-pm-line">{entlastung}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-5 py-2">
              <p className="text-[11px] text-pm-mute">Richtwerte · Einstufung durch MD · Zusätzlich: Entlastungsbudget 3.539 €/Jahr (ab PG 2)</p>
            </div>
          </div>

          <p className="text-[15px] text-pm-body mb-3">
            → Pflegegrad bei Demenz beantragen:{' '}
            <a href="/pflegegrad-bei-demenz" className="text-pm-taupe underline hover:text-pm-taupe-deep">Pflegegrad bei Demenz — Einstufung & Tipps</a>
          </p>
          <p className="text-[15px] text-pm-body mb-10">
            → Alle Zuschüsse kombinieren:{' '}
            <a href="/finanzierung" className="text-pm-taupe underline hover:text-pm-taupe-deep">Finanzierung der 24h-Pflege — alle Zuschüsse 2026</a>
          </p>

          {/* SECTION 5 */}
          <h2 id="grenzen" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">
            Wann stößt häusliche Pflege an ihre Grenzen?
          </h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-6">
            Häusliche Demenzpflege — auch mit professioneller Betreuungskraft — hat Grenzen. Ein Pflegeheim wird dann zur besseren Option wenn:
          </p>
          <div className="space-y-3 mb-6">
            {[
              'Intensivmedizinische Behandlungspflege rund um die Uhr nötig ist (z.B. Beatmung, Dauerkatheter-Management)',
              'Der Demenzkranke so aggressiv wird dass die Sicherheit der Betreuungsperson gefährdet ist',
              'Kein geeigneter Wohnraum für eine Betreuungskraft vorhanden ist',
              'Der Betroffene ausdrücklich selbst ins Pflegeheim möchte (wenn noch entscheidungsfähig)',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-pm-line">
                <span className="w-5 h-5 rounded-xl bg-pm-coral-tint text-pm-coral flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">!</span>
                <p className="text-[14px] text-pm-body leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-pm-body mb-10">
            → Häusliche vs. stationäre Pflege:{' '}
            <a href="/24h-pflege-vs-pflegeheim-kosten" className="text-pm-taupe underline hover:text-pm-taupe-deep">24h-Pflege vs. Pflegeheim — was ist besser?</a>
          </p>

          {/* FAQ */}
          <h2 id="faq" className="text-h2 md:text-h2-lg font-bold text-pm-ink mb-6">
            Häufige Fragen zur Demenzpflege zuhause
          </h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Kann man Demenzkranke zuhause pflegen?', a: 'Ja — in den meisten Stadien ist Demenzpflege zuhause möglich und empfehlenswert. Die vertraute Umgebung gibt Orientierung und verlangsamt nachweislich den Krankheitsverlauf. Mit einer 24h-Betreuungskraft bleibt das eigene Zuhause auch bei zunehmendem Pflegebedarf erhalten.' },
              { q: 'Ab wann braucht man 24h-Pflege bei Demenz?', a: 'Spätestens wenn der Demenzkranke nicht mehr allein gelassen werden kann — bei Weglaufen, gefährlichem Vergessen (Herd), Nachtunruhe oder wenn Angehörige erschöpft sind. Dann ist eine rund um die Uhr präsente Betreuungskraft die richtige Lösung.' },
              { q: 'Welchen Pflegegrad bekommt man bei Demenz?', a: 'Je nach Stadium PG 2–5. Leichte Demenz: oft PG 2–3. Mittlere Demenz: PG 3–4. Schwere Demenz: PG 4–5. Seit 2017 werden kognitive Einschränkungen im Begutachtungsverfahren stärker gewichtet — Demenzbetroffene werden besser eingestuft als früher.' },
              { q: 'Wie viel kostet Demenzpflege zuhause?', a: 'Mit einer 24h-Betreuungskraft von Primundus: 2.200–3.500 €/Monat. Mit Pflegegeld (z.B. 599 €/Monat bei PG 3) und Entlastungsbetrag (131 €/Monat) sinkt der Eigenanteil auf ca. 1.500–2.800 €/Monat.' },
              { q: 'Ist bei Demenz das Zuhause oder das Pflegeheim besser?', a: 'Solange die Sicherheit gewährleistet ist, spricht bei Demenz vieles für das Zuhause: Die vertraute Umgebung gibt Orientierung, eine feste Betreuungskraft ist eine verlässliche Bezugsperson. Das Heim ist die bessere Wahl bei ausgeprägter Selbst- oder Fremdgefährdung oder wenn intensive medizinische Versorgung zuhause nicht sicherzustellen ist.' },
              { q: 'Wie gestaltet man den Alltag mit Demenzkranken?', a: 'Feste Tagesstrukturen, bekannte Rituale beibehalten, kurze einfache Kommunikation, keine Korrektur des Vergessens. Sinnvolle Beschäftigung die an frühere Interessen anknüpft. Überreizung und Konfrontation mit dem Vergessen vermeiden.' },
              { q: 'Wann ist ein Pflegeheim besser als Demenzpflege zuhause?', a: 'Wenn intensivmedizinische Behandlungspflege rund um die Uhr nötig ist, wenn aggressive Verhaltensweisen die Sicherheit gefährden, oder wenn kein geeigneter Wohnraum für eine Betreuungskraft vorhanden ist.' },
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

          <Weiterlesen aktuell="demenz-pflege-zuhause" />
          <ArticleCTA />
        </div>
      </div>
    </>
  )
}
