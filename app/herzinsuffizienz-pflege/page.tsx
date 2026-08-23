import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { AuthorByline } from '@/components/AuthorByline'

const SECTIONS = [
  { id: 'zuhause', title: 'Herzinsuffizienz zuhause pflegen' },
  { id: 'alltag', title: 'Alltag & was zu beachten ist' },
  { id: 'wann-24h', title: 'Wann braucht es 24h-Pflege?' },
  { id: 'pflegegrad', title: 'Pflegegrad & Leistungen' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Herzinsuffizienz Pflege zuhause — was möglich ist 2026',
  description: 'Herzinsuffizienz Pflege zuhause: Was in welchem NYHA-Stadium möglich ist, worauf täglich geachtet werden muss und ab wann eine 24h-Betreuungskraft sinnvoll ist.',
  alternates: { canonical: 'https://primundus.de/herzinsuffizienz-pflege' },
  openGraph: {
    title: 'Herzinsuffizienz Pflege zuhause | Primundus',
    description: 'Was bei Herzinsuffizienz zuhause möglich ist und ab wann 24h-Pflege sinnvoll wird.',
    url: 'https://primundus.de/herzinsuffizienz-pflege',
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
    headline: 'Herzinsuffizienz Pflege zuhause 2026',
    author: { '@type': 'Person', name: 'Marta Kapcio', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/herzinsuffizienz-pflege',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Krankheiten', item: 'https://primundus.de/krankheiten' },
      { '@type': 'ListItem', position: 3, name: 'Herzinsuffizienz Pflege', item: 'https://primundus.de/herzinsuffizienz-pflege' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Kann man bei Herzinsuffizienz zuhause gepflegt werden?', acceptedAnswer: { '@type': 'Answer', text: 'Ja — Herzinsuffizienz-Pflege zuhause ist in den meisten Fällen möglich. Wichtig ist die konsequente Medikamentengabe, tägliche Gewichtskontrolle, Flüssigkeitsbilanz und die Vermeidung von Überlastung. Eine 24h-Betreuungskraft überwacht diese Punkte rund um die Uhr.' } },
      { '@type': 'Question', name: 'Welchen Pflegegrad bekommt man bei Herzinsuffizienz?', acceptedAnswer: { '@type': 'Answer', text: 'Je nach NYHA-Stadium und Einschränkungen im Alltag: Leichte Herzinsuffizienz meist PG 1–2, moderate PG 2–3, schwere PG 3–4, schwerste PG 4–5. Entscheidend ist wie stark die körperliche Belastbarkeit und Selbstständigkeit eingeschränkt sind.' } },
    ],
  },
]

export default function HerzinsuffizienzPflege() {
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
            <a href="/krankheiten" className="hover:text-pm-taupe transition-colors">Krankheiten</a>
            <span>›</span>
            <span className="text-pm-ink">Herzinsuffizienz Pflege</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-pm-taupe-light mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>6 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-h1 md:text-h1-lg font-bold text-pm-ink mb-6">
            Herzinsuffizienz Pflege zuhause — was möglich ist
          </h1>

          <AuthorByline updated="25. April 2026" />

          <p className="text-[17px] md:text-[19px] leading-relaxed text-pm-body mb-8 font-medium">
            Herzinsuffizienz ist eine der häufigsten Ursachen für Pflegebedürftigkeit im Alter — und in den meisten Fällen ist die Pflege zuhause gut möglich. Entscheidend ist die konsequente Medikamentengabe, tägliche Gewichtskontrolle und Belastungsanpassung. Eine 24h-Betreuungskraft überwacht diese Punkte rund um die Uhr und erkennt Verschlechterungen frühzeitig.
          </p>

          <div className="bg-white border border-pm-line rounded-2xl p-6 mb-10 shadow-sm">
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-pm-taupe-light mb-3">Auf einen Blick</p>
            <ul className="space-y-2.5">
              {[
                'Herzinsuffizienz-Pflege zuhause ist in den meisten Fällen gut möglich',
                'Tägliche Gewichtskontrolle und Flüssigkeitsbilanz sind entscheidend',
                'Medikamentengabe: Pünktlichkeit und Dosierung kritisch — Betreuungskraft überwacht',
                'Pflegegrad 2–4 typisch je nach NYHA-Stadium und Einschränkungen',
                'Kassenzuschüsse: 347–800 €/Monat + 3.539 €/Jahr Entlastungsbudget',
                'Notfallzeichen kennen: Plötzliche Gewichtszunahme, Atemnot, Unterschenkelödeme',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-pm-body">
                  <span className="w-5 h-5 rounded-full bg-pm-mint text-pm-green flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <h2 id="zuhause" className="text-[24px] md:text-[30px] font-bold text-pm-ink mt-10 mb-4 leading-snug">
            Herzinsuffizienz zuhause pflegen — was möglich ist
          </h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-6">
            Die Herzinsuffizienz wird nach NYHA (New York Heart Association) in vier Stadien eingeteilt — von NYHA I (keine Symptome bei normaler Belastung) bis NYHA IV (Symptome bereits in Ruhe). Je nach Stadium unterscheiden sich die Anforderungen an die häusliche Pflege erheblich.
          </p>
          <div className="space-y-3 mb-10">
            {[
              { stadium: 'NYHA I–II', desc: 'Pflege durch Angehörige meist ausreichend. Unterstützung bei schweren Haushaltsarbeiten, Begleitung zu Arztterminen, Medikamentenerinnerung. Selbstständigkeit weitgehend erhalten.' },
              { stadium: 'NYHA III', desc: 'Deutliche Einschränkung der Belastbarkeit — bereits bei leichter Aktivität Atemnot. Unterstützung bei Körperpflege, Kochen, Einkaufen. 24h-Präsenz empfehlenswert.' },
              { stadium: 'NYHA IV', desc: 'Symptome in Ruhe — vollständige Pflegeabhängigkeit. 24h-Betreuungskraft notwendig. Engmaschige ärztliche Kontrolle. Palliative Begleitung möglicherweise sinnvoll.' },
            ].map((item) => (
              <div key={item.stadium} className="bg-white rounded-xl p-5 border border-pm-line">
                <p className="text-[15px] font-bold text-pm-ink mb-1">{item.stadium}</p>
                <p className="text-[14px] text-pm-body leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 id="alltag" className="text-[24px] md:text-[30px] font-bold text-pm-ink mt-10 mb-4 leading-snug">
            Alltag bei Herzinsuffizienz — worauf täglich geachtet wird
          </h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-6">
            Bei Herzinsuffizienz gibt es tägliche Maßnahmen die konsequent eingehalten werden müssen. Eine Betreuungskraft übernimmt diese Überwachung zuverlässig und erkennt Alarmzeichen früher als Betroffene selbst.
          </p>
          <div className="space-y-3 mb-6">
            {[
              { title: 'Tägliche Gewichtskontrolle', desc: 'Jeden Morgen zur gleichen Zeit wiegen — vor dem Frühstück, nach dem ersten Toilettengang. Mehr als 2 kg Gewichtszunahme in 2–3 Tagen kann auf Wasseransammlungen hinweisen — sofort Arzt informieren.' },
              { title: 'Flüssigkeitsbilanz', desc: 'Je nach ärztlicher Anweisung Trinkmenge begrenzen (oft 1,5–2 l/Tag). Betreuungskraft protokolliert Einfuhr und Ausscheidung, informiert Arzt bei Auffälligkeiten.' },
              { title: 'Medikamentengabe', desc: 'Pünktliche und korrekte Medikamentengabe ist entscheidend — ACE-Hemmer, Betablocker, Diuretika müssen exakt eingenommen werden. Betreuungskraft überwacht und erinnert.' },
              { title: 'Belastungsanpassung', desc: 'Körperliche Aktivität nach ärztlicher Anweisung — nicht zu wenig (schadet), nicht zu viel (überfordert). Spaziergänge planen, Treppen nur wenn medizinisch erlaubt.' },
              { title: 'Notfallzeichen erkennen', desc: 'Plötzliche Atemnot, starke Wassereinlagerungen in Beinen, Brustschmerzen, Bewusstlosigkeit — sofort Notarzt rufen. Betreuungskraft kennt diese Zeichen und handelt.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-pm-line">
                <p className="text-[15px] font-bold text-pm-ink mb-1">{item.title}</p>
                <p className="text-[14px] text-pm-body leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 id="wann-24h" className="text-[24px] md:text-[30px] font-bold text-pm-ink mt-10 mb-4 leading-snug">
            Wann braucht es eine 24h-Betreuungskraft?
          </h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-6">
            Bei Herzinsuffizienz ist eine professionelle 24h-Betreuung sinnvoll wenn:
          </p>
          <div className="space-y-3 mb-6">
            {[
              'Tägliche Überwachung (Gewicht, Flüssigkeit, Medikamente) nicht zuverlässig durch Angehörige gewährleistet werden kann',
              'NYHA III oder IV — deutliche Einschränkung der Alltagsaktivitäten',
              'Wiederholte Krankenhausaufenthalte durch Dekompensation (Wasseransammlung)',
              'Angehörige können Überwachungspflichten nicht dauerhaft übernehmen',
              'Weitere Erkrankungen (Diabetes, Niereninsuffizienz) erhöhen den Pflegebedarf',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-pm-line">
                <span className="w-5 h-5 rounded-full bg-pm-mint text-pm-green flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">✓</span>
                <p className="text-[14px] text-pm-body">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-pm-body mb-10">
            → Kosten und Zuschüsse:{' '}
            <a href="/kosten" className="text-pm-taupe underline hover:text-pm-taupe-deep">Was kostet 24h-Pflege?</a>
            {' · '}
            <a href="/finanzierung" className="text-pm-taupe underline hover:text-pm-taupe-deep">Alle Kassenzuschüsse 2026</a>
          </p>

          <h2 id="pflegegrad" className="text-[24px] md:text-[30px] font-bold text-pm-ink mt-10 mb-4 leading-snug">
            Pflegegrad bei Herzinsuffizienz
          </h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-6">
            Der Pflegegrad hängt nicht von der Diagnose ab — sondern davon wie stark die Selbstständigkeit im Alltag eingeschränkt ist. Bei Herzinsuffizienz ist die körperliche Belastbarkeit oft das entscheidende Kriterium.
          </p>
          <div className="bg-white rounded-2xl border border-pm-line overflow-hidden mb-6 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-pm-paper">
                    {['NYHA Stadium', 'Typischer Pflegegrad', 'Pflegegeld/Monat'].map(h => (
                      <th key={h} className="px-4 py-3 text-[12px] font-semibold text-pm-mute text-left border-b border-pm-line">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['NYHA I–II', 'PG 1–2', '— bis 347 €'],
                    ['NYHA III', 'PG 2–3', '347–599 €'],
                    ['NYHA IV', 'PG 3–5', '599–990 €'],
                  ].map(([nyha, pg, pflegegeld], i) => (
                    <tr key={nyha} className={i % 2 === 0 ? 'bg-white' : 'bg-pm-paper'}>
                      <td className="px-4 py-3 text-[14px] text-pm-body border-b border-pm-line">{nyha}</td>
                      <td className="px-4 py-3 text-[14px] font-semibold text-pm-ink border-b border-pm-line">{pg}</td>
                      <td className="px-4 py-3 text-[14px] font-bold text-pm-green border-b border-pm-line">{pflegegeld}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-5 py-2">
              <p className="text-[11px] text-pm-mute">Richtwerte — individuelle Einstufung durch MD · Stand 2026</p>
            </div>
          </div>
          <p className="text-[15px] text-pm-body mb-10">
            → Pflegegrad beantragen:{' '}
            <a href="/pflegegrad-beantragen" className="text-pm-taupe underline hover:text-pm-taupe-deep">Schritt für Schritt Anleitung</a>
          </p>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-pm-ink mb-6">
            Häufige Fragen
          </h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Kann man bei Herzinsuffizienz zuhause gepflegt werden?', a: 'Ja — in den meisten Fällen ist Herzinsuffizienz-Pflege zuhause gut möglich. Wichtig sind tägliche Gewichtskontrolle, Flüssigkeitsbilanz, pünktliche Medikamentengabe und Belastungsanpassung. Eine 24h-Betreuungskraft überwacht diese Punkte zuverlässig.' },
              { q: 'Welchen Pflegegrad bekommt man bei Herzinsuffizienz?', a: 'Je nach NYHA-Stadium und Alltagseinschränkungen: NYHA I–II meist PG 1–2, NYHA III meist PG 2–3, NYHA IV meist PG 3–5. Der Pflegegrad hängt vom tatsächlichen Hilfebedarf ab, nicht von der Diagnose allein.' },
              { q: 'Was muss bei der Pflege von Herzinsuffizienz täglich beachtet werden?', a: 'Tägliche Gewichtskontrolle (Zunahme von 2+ kg = Arzt informieren), Flüssigkeitsbilanz nach ärztlicher Anweisung, pünktliche Medikamentengabe, Belastungsanpassung, Notfallzeichen (Atemnot, Ödeme, Brustschmerzen) erkennen.' },
              { q: 'Ab wann braucht man bei Herzinsuffizienz eine 24h-Betreuungskraft?', a: 'Ab NYHA III mit deutlichen Alltagseinschränkungen, bei wiederholten Krankenhausaufenthalten durch Dekompensation, wenn Überwachungspflichten nicht durch Angehörige gewährleistet werden können.' },
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
