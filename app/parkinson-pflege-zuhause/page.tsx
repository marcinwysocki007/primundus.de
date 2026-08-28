import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { AuthorByline } from '@/components/AuthorByline'

const SECTIONS = [
  { id: 'herausforderungen', title: 'Besonderheiten der Parkinson-Pflege' },
  { id: 'alltag', title: 'Alltag gestalten' },
  { id: 'pflegegrad', title: 'Pflegegrad & Leistungen' },
  { id: '24h', title: 'Wann 24h-Pflege sinnvoll wird' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Parkinson Pflege zuhause — Alltag, Tipps & 24h-Pflege',
  description: 'Parkinson Pflege zuhause: Besonderheiten, Alltagstipps, welcher Pflegegrad möglich ist und wann eine 24h-Betreuungskraft die richtige Unterstützung bietet.',
  alternates: { canonical: 'https://primundus.de/parkinson-pflege-zuhause' },
  openGraph: {
    title: 'Parkinson Pflege zuhause | Primundus',
    description: 'Parkinson-Pflege zuhause: Alltagstipps, Pflegegrade und wie 24h-Pflege hilft.',
    url: 'https://primundus.de/parkinson-pflege-zuhause',
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
    headline: 'Parkinson Pflege zuhause — Alltag, Pflegegrad & 24h-Pflege',
    author: { '@type': 'Person', name: 'Marta Kapcio', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/parkinson-pflege-zuhause',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Krankheiten', item: 'https://primundus.de/krankheiten' },
      { '@type': 'ListItem', position: 3, name: 'Parkinson Pflege zuhause', item: 'https://primundus.de/parkinson-pflege-zuhause' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was sind die besonderen Herausforderungen der Parkinson-Pflege?', acceptedAnswer: { '@type': 'Answer', text: 'Parkinson hat einen schwankenden Tagesverlauf: Morgens nach dem Aufwachen und am späten Nachmittag ("Off-Phasen") sind Betroffene steifer und langsamer — kurz nach der Medikation ("On-Phase") funktioniert vieles wieder. Dieser Rhythmus muss in der Pflege konsequent berücksichtigt werden.' } },
      { '@type': 'Question', name: 'Welchen Pflegegrad hat man bei Parkinson?', acceptedAnswer: { '@type': 'Answer', text: 'Je nach Stadium PG 2 bis 5. Frühes Stadium: PG 2. Mittleres Stadium mit Sturzgefahr und Alltagshilfe: PG 3. Fortgeschrittenes Stadium mit vollständiger Pflegebedürftigkeit: PG 4–5.' } },
      { '@type': 'Question', name: 'Kann man mit Parkinson zuhause bleiben?', acceptedAnswer: { '@type': 'Answer', text: 'In den meisten Stadien ja — eine 24h-Betreuungskraft, die den Medikationsrhythmus kennt und auf On- und Off-Phasen reagieren kann, ermöglicht ein sicheres Leben im eigenen Zuhause.' } },
    ],
  },
]

export default function ParkinsonPflegeZuhause() {
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
            <span className="text-pm-ink">Parkinson Pflege zuhause</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-pm-taupe-light mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>7 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-h1 md:text-h1-lg font-bold text-pm-ink mb-6">
            Parkinson Pflege zuhause — Alltag, Tipps & 24h-Pflege
          </h1>

          <AuthorByline updated="25. April 2026" />

          <p className="text-[17px] md:text-[19px] leading-relaxed text-pm-body mb-10 font-medium">
            Parkinson-Pflege zuhause ist in den meisten Stadien möglich — aber sie erfordert Wissen über den schwankenden Tagesverlauf der Erkrankung. Eine Betreuungskraft die On- und Off-Phasen kennt und den Medikationsrhythmus versteht, macht den entscheidenden Unterschied.
          </p>

          <div className="bg-white border border-pm-line rounded-2xl p-6 mb-10 shadow-sm">
            <p className="text-meta font-bold uppercase tracking-[0.1em] text-pm-taupe-light mb-4">Auf einen Blick</p>
            <ul className="space-y-2.5">
              {[
                'Zuhause bleiben in den meisten Parkinson-Stadien möglich',
                'Tagesverlauf schwankt: On-Phasen (gut beweglich) und Off-Phasen (steif, langsam)',
                'Sturzprävention ist entscheidend — 24h-Präsenz schützt',
                'Medikamenten-Timing kritisch — Betreuungskraft muss das kennen',
                'Pflegegrad 2–5 je nach Stadium — frühzeitig beantragen',
                'Physio- und Ergotherapie zuhause fortsetzen',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-pm-body">
                  <span className="w-5 h-5 rounded-full bg-pm-mint text-pm-green flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <h2 id="herausforderungen" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">
            Besonderheiten der Parkinson-Pflege
          </h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-6">
            Parkinson ist eine chronisch fortschreitende Erkrankung des Nervensystems. Das zentrale Merkmal das Pflege besonders herausfordernd macht: der schwankende Tagesverlauf.
          </p>
          <div className="space-y-3 mb-6">
            {[
              { title: 'On-Phasen und Off-Phasen', desc: 'Kurz nach der Medikamenteneinnahme funktioniert die Bewegung oft gut (On-Phase). Gegen Ende der Wirkdauer — morgens nach dem Aufwachen, nachmittags — wird Bewegung sehr schwer (Off-Phase). Pflege muss auf diesen Rhythmus abgestimmt sein.' },
              { title: 'Sturzgefahr', desc: 'Gangunsicherheit, Einfrieren (Freezing), Gleichgewichtsstörungen machen Stürze zur größten akuten Gefahr. Eine ständig präsente Betreuungsperson reduziert das Risiko massiv.' },
              { title: 'Medikamenten-Timing', desc: 'Die Einnahme von L-Dopa muss präzise getaktet werden — zu früh, zu spät oder gemeinsam mit Protein kann die Wirkung erheblich beeinflussen. Die Betreuungskraft muss das verstehen.' },
              { title: 'Schluckstörungen im Spätstadium', desc: 'Dysphagie tritt im fortgeschrittenen Stadium auf — Ernährung muss angepasst werden, Aspirationspneumonie ist ein ernstes Risiko.' },
              { title: 'Kognition und Demenz', desc: 'Bis zu 80 % der Parkinson-Patienten entwickeln im Verlauf kognitive Einschränkungen. Im Spätstadium können Halluzinationen und Demenz hinzukommen.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-pm-line">
                <p className="text-[15px] font-bold text-pm-ink mb-1">{item.title}</p>
                <p className="text-[14px] text-pm-body leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 id="alltag" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">
            Alltag mit Parkinson gestalten — praktische Tipps
          </h2>
          <div className="space-y-3 mb-10">
            {[
              { title: 'Pflege in On-Phasen planen', desc: 'Körperpflege, Essen und Bewegungsübungen wenn möglich in On-Phasen legen — kurz nach Medikamenteneinnahme wenn die Motorik am besten ist.' },
              { title: 'Sturzprävention im Haushalt', desc: 'Stolperfallen beseitigen, Haltegriffe im Bad, rutschfeste Matten, freie Wege ohne Hindernisse. Rollator oder Gehstock bereithalten.' },
              { title: 'Kommunikation anpassen', desc: 'Sprechen kann bei Parkinson leiser und undeutlicher werden. Geduld, Rückfragen, schriftliche Alternativen anbieten.' },
              { title: 'Bewegung fördern', desc: 'Tägliche Physiotherapie-Übungen — idealerweise angeleitet. Tanzen und Rhythmus sind nachweislich hilfreich bei Parkinson. Spaziergänge wenn möglich.' },
              { title: 'Ernährung anpassen', desc: 'Proteinreiche Mahlzeiten zeitlich von L-Dopa-Einnahme trennen (min. 30 Min). Bei Schluckproblemen angepasste Konsistenz. Ausreichend Flüssigkeit.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-pm-line">
                <p className="text-[15px] font-bold text-pm-ink mb-1">{item.title}</p>
                <p className="text-[14px] text-pm-body leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 id="pflegegrad" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">
            Pflegegrad bei Parkinson & Kassenzuschüsse 2026
          </h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-6">
            Parkinson führt je nach Stadium zu unterschiedlichen Pflegegraden. Den Antrag frühzeitig stellen — auch wenn noch viel selbstständig möglich ist, sind die Einschränkungen real und sollten anerkannt werden.
          </p>
          <div className="bg-white rounded-2xl border border-pm-line overflow-hidden mb-6 shadow-sm">
            <div className="px-5 py-3 bg-pm-paper border-b border-pm-line">
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-pm-mute">Typische Pflegegrade bei Parkinson</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-pm-paper">
                    {['Stadium', 'Typischer PG', 'Pflegegeld'].map(h => (
                      <th key={h} className="px-4 py-3 text-[12px] font-semibold text-pm-mute text-left border-b border-pm-line">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Frühes Stadium (Tremor, leichte Einschränkungen)', 'PG 2', '347 €/Monat'],
                    ['Mittleres Stadium (Sturzgefahr, Alltagshilfe)', 'PG 3', '599 €/Monat'],
                    ['Fortgeschrittenes Stadium (umfangreiche Hilfe)', 'PG 4', '800 €/Monat'],
                    ['Spätstadium + kognitive Einschränkungen', 'PG 4–5', '800–990 €/Monat'],
                  ].map(([stadium, pg, pflegegeld], i) => (
                    <tr key={stadium} className={i % 2 === 0 ? 'bg-white' : 'bg-pm-paper'}>
                      <td className="px-4 py-3 text-[14px] text-pm-body border-b border-pm-line">{stadium}</td>
                      <td className="px-4 py-3 text-[14px] font-semibold text-pm-ink border-b border-pm-line">{pg}</td>
                      <td className="px-4 py-3 text-[14px] font-bold text-pm-green border-b border-pm-line">{pflegegeld}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-[15px] text-pm-body mb-10">
            → Pflegegrad beantragen:{' '}
            <a href="/pflegegrad-beantragen" className="text-pm-taupe underline hover:text-pm-taupe-deep">Schritt für Schritt Anleitung</a>
            {' · '}
            <a href="/pflegegrad-bei-parkinson" className="text-pm-taupe underline hover:text-pm-taupe-deep">Pflegegrad bei Parkinson — Details</a>
          </p>

          <h2 id="24h" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">
            Wann wird 24h-Pflege bei Parkinson sinnvoll?
          </h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-6">
            Eine 24h-Betreuungskraft ist bei Parkinson spätestens dann sinnvoll wenn Stürze, Off-Phasen oder nächtliche Beschwerden ein Sicherheitsrisiko darstellen — oder wenn Angehörige nicht täglich präsent sein können.
          </p>
          <div className="space-y-3 mb-6">
            {[
              { title: 'Sturzgefahr rund um die Uhr', desc: 'Gangunsicherheit und Freezing können jederzeit auftreten — auch nachts. Eine ständig anwesende Kraft gibt Sicherheit und reagiert sofort.' },
              { title: 'Medikamenten-Management', desc: 'Die Betreuungskraft kennt das Medikationsschema, gibt zur richtigen Zeit, beobachtet die Wirkung und informiert bei Auffälligkeiten den behandelnden Arzt.' },
              { title: 'Tagesrhythmus kennen und einhalten', desc: 'Eine feste Kraft die den individuellen On-Off-Rhythmus des Pflegebedürftigen kennt, bietet bessere Pflege als wechselndes Personal.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-pm-line">
                <p className="text-[15px] font-bold text-pm-ink mb-1">{item.title}</p>
                <p className="text-[14px] text-pm-body leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-pm-body mb-10">
            → Kosten & Zuschüsse:{' '}
            <a href="/kosten" className="text-pm-taupe underline hover:text-pm-taupe-deep">Was kostet 24h-Pflege 2026?</a>
          </p>

          <h2 id="faq" className="text-h2 md:text-h2-lg font-bold text-pm-ink mb-6">
            Häufige Fragen zur Parkinson-Pflege
          </h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Was sind die besonderen Herausforderungen der Parkinson-Pflege?', a: 'Der schwankende Tagesverlauf mit On- und Off-Phasen, hohes Sturzrisiko, kritisches Medikamenten-Timing und im Spätstadium kognitive Einschränkungen. Pflege muss auf den individuellen Rhythmus abgestimmt sein.' },
              { q: 'Welchen Pflegegrad hat man bei Parkinson?', a: 'Je nach Stadium PG 2–5. Frühes Stadium: PG 2 (347 €/Monat). Mittleres Stadium: PG 3 (599 €/Monat). Fortgeschrittenes Stadium: PG 4–5 (800–990 €/Monat).' },
              { q: 'Kann man mit Parkinson zuhause bleiben?', a: 'In den meisten Stadien ja — eine 24h-Betreuungskraft die den Tagesrhythmus kennt und auf On- und Off-Phasen reagieren kann, ermöglicht sicheres Leben im eigenen Zuhause.' },
              { q: 'Was muss eine Pflegekraft über Parkinson wissen?', a: 'On- und Off-Phasen kennen und einplanen. Medikamenten-Timing exakt einhalten. Sturzprävention konsequent umsetzen. Bei Schluckproblemen Ernährung anpassen. Bewegungsförderung täglich einbauen.' },
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
          <Weiterlesen aktuell="parkinson-pflege-zuhause" />
          <ArticleCTA />
        </div>
      </div>
    </>
  )
}
