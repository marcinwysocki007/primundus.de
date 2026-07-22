import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [
  { id: 'risikofaktoren', title: 'Risikofaktoren erkennen' },
  { id: 'wohnung', title: 'Wohnung sichern' },
  { id: 'uebungen', title: 'Übungen & Training' },
  { id: 'hilfsmittel', title: 'Hilfsmittel & Hilfsmittelversorgung' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Sturzprävention Senioren — wie man Stürze verhindert | Primundus',
  description: 'Sturzprävention Senioren 2026: Risikofaktoren erkennen, Wohnung sichern, Gleichgewichtsübungen und Hilfsmittel — wie man Stürze im Alter effektiv verhindert.',
  alternates: { canonical: 'https://primundus.de/sturzpraevention-senioren/' },
  openGraph: {
    title: 'Sturzprävention Senioren | Primundus',
    description: 'Wie man Stürze im Alter verhindert — Risikofaktoren, Wohnungssicherung, Übungen, Hilfsmittel.',
    url: 'https://primundus.de/sturzpraevention-senioren/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Sturzprävention Senioren — wie man Stürze verhindert',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/sturzpraevention-senioren/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Alltag & Angehörige', item: 'https://primundus.de/alltag/' },
      { '@type': 'ListItem', position: 3, name: 'Sturzprävention Senioren', item: 'https://primundus.de/sturzpraevention-senioren/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Wie kann man Stürze im Alter verhindern?', acceptedAnswer: { '@type': 'Answer', text: 'Die wirksamsten Maßnahmen: Gleichgewichtstraining (nachweislich Sturzrisiko um 30–40 % reduzierend), Wohnungssicherung (Haltegriffe, rutschfeste Böden, gute Beleuchtung), Medikamente überprüfen lassen (Schwindel als Nebenwirkung), geeignetes Schuhwerk, Sehvermögen regelmäßig prüfen.' } },
      { '@type': 'Question', name: 'Welche Übungen helfen gegen Sturzgefahr?', acceptedAnswer: { '@type': 'Answer', text: 'Gleichgewichtsübungen: Einbeinstand (mit Festhalten anfangen), Tandemgang, Tai Chi, Yoga für Senioren. Kraftübungen für die Beinmuskulatur: Aufstehen vom Stuhl ohne Hände, Zehenspitzenstand. Täglich 10–15 Minuten sind wirksamer als einmal pro Woche viel.' } },
    ],
  },
]

export default function SturzpraventionSenioren() {
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
            <span className="text-[#1C1C1C]">Sturzprävention Senioren</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>6 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            Sturzprävention Senioren — wie man Stürze wirklich verhindert
          </h1>

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            Stürze sind die häufigste Unfallursache bei Menschen über 65 — und einer der häufigsten Auslöser für den Einstieg in intensive Pflege. Das Gute: Sturzrisiko ist zu einem erheblichen Teil vermeidbar. Gleichgewichtstraining allein reduziert das Sturzrisiko nachweislich um 30–40 Prozent. Die Wohnungssicherung tut ihr Übriges.
          </p>

          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 mb-10 shadow-sm">
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#A89279] mb-3">Auf einen Blick — die wirksamsten Maßnahmen</p>
            <ul className="space-y-2.5">
              {[
                'Gleichgewichtstraining: reduziert Sturzrisiko um 30–40 % (täglich 10–15 Min reichen)',
                'Haltegriffe im Bad und an der Toilette: günstiger Einbau, sofort wirksam',
                'Medikamente überprüfen: Schwindel als Nebenwirkung ist häufig unterschätzt',
                'Gutes Schuhwerk: feste Sohle, kein offenes Fersenteil, keine Hausschuhe ohne Halt',
                'Beleuchtung: Nachtlicht auf Toilettenweg, Bewegungsmelder im Flur',
                'Sehvermögen: regelmäßige Augencheck — schlechtes Sehen = hohes Sturzrisiko',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-[#2E2E2E]">
                  <span className="w-5 h-5 rounded-full bg-[#E8F5EE] text-[#3D7A5C] flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <h2 id="risikofaktoren" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Risikofaktoren erkennen
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Wer die Risikofaktoren kennt, kann gezielt ansetzen. Viele sind modifizierbar — das heißt: behandelbar oder ausschaltbar.
          </p>
          <div className="grid md:grid-cols-2 gap-3 mb-10">
            {[
              { kategorie: 'Körperliche Faktoren', items: ['Muskelschwäche in Beinen und Rumpf', 'Eingeschränktes Gleichgewicht', 'Gangstörungen, Parkinson-Tremor', 'Schwindel, Kreislaufprobleme', 'Eingeschränktes Sehvermögen'] },
              { kategorie: 'Medikamente', items: ['Beruhigungsmittel, Schlaftabletten', 'Blutdruckmittel (Schwindel)', 'Diuretika (schnelles Aufstehen nötig)', 'Mehr als 4 Medikamente gleichzeitig', 'Neue Medikamente → Arzt fragen'] },
              { kategorie: 'Umgebungsrisiken', items: ['Lose Teppiche, Kabel am Boden', 'Schlechte Beleuchtung', 'Fehlende Haltegriffe', 'Nasse Böden im Bad', 'Ungeeignetes Schuhwerk'] },
              { kategorie: 'Psychische Faktoren', items: ['Sturzangst (paradoxerweise erhöht Sturzrisiko)', 'Unterschätzung eigener Einschränkungen', 'Eile, Ungeduld', 'Nachts keine Brille aufsetzen'] },
            ].map((item) => (
              <div key={item.kategorie} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[14px] font-bold text-[#1C1C1C] mb-3">{item.kategorie}</p>
                <ul className="space-y-1">
                  {item.items.map(i => (
                    <li key={i} className="text-[13px] text-[#2E2E2E] flex gap-2">
                      <span className="text-[#E76F63] flex-shrink-0">!</span>{i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 id="wohnung" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Wohnung sichern — die wichtigsten Maßnahmen
          </h2>
          <div className="space-y-3 mb-10">
            {[
              { ort: 'Bad & WC', massnahmen: 'Haltegriffe neben Dusche, Badewanne und WC (wichtigste Einzelmaßnahme). Rutschfeste Matten. Erhöhter WC-Sitz. Badewannenlifter oder begehbare Dusche.' },
              { ort: 'Flur & Treppenhaus', massnahmen: 'Handläufe beidseitig an Treppen. Gut befestigte Teppichläufer oder entfernen. Nachtlicht mit Bewegungsmelder auf dem Weg zur Toilette.' },
              { ort: 'Schlafzimmer', massnahmen: 'Bett auf optimale Höhe einstellen (Fußsohlen vollständig auf dem Boden beim Sitzen). Nachtlampe griffbereit. Rutschfeste Schuhe neben dem Bett.' },
              { ort: 'Wohnzimmer', massnahmen: 'Lose Teppiche entfernen oder befestigen. Kabel wegräumen. Freie Wege ohne Hindernisse. Sessel und Sofa auf optimale Aufstehehöhe prüfen.' },
            ].map((item) => (
              <div key={item.ort} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.ort}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.massnahmen}</p>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Förderung bis 4.180 €/Maßnahme:{' '}
            <a href="/barrierefreies-zuhause-gestalten/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Barrierefreies Zuhause gestalten</a>
          </p>

          <h2 id="uebungen" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Übungen & Training — was wirklich hilft
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Gleichgewichts- und Krafttraining sind die wirksamsten Maßnahmen gegen Sturzrisiko. Studien zeigen: Regelmäßiges Training reduziert das Sturzrisiko um 30–40 %. Täglich 10–15 Minuten sind wirksamer als ein langer Sporttag pro Woche.
          </p>
          <div className="space-y-3 mb-10">
            {[
              { uebung: 'Einbeinstand', ablauf: 'An Küchentisch oder Stuhl festhalten, ein Bein heben, 10–30 Sekunden halten. Täglich 3×, jedes Bein. Wenn sicher: Festhalten loslassen.', schwerpunkt: 'Gleichgewicht' },
              { uebung: 'Aufstehen vom Stuhl ohne Hände', ablauf: 'Langsam ohne Zuhilfenahme der Hände aufstehen und hinsetzen. 10 Wiederholungen. Stärkt Beinmuskulatur und verbessert Gleichgewicht.', schwerpunkt: 'Kraft & Balance' },
              { uebung: 'Tandemgang', ablauf: 'Fuß vor Fuß auf einer Linie gehen (wie auf einem Seil balancieren). Entlang Küchentisch oder Wand zur Sicherheit. Täglich 5 Meter vor und zurück.', schwerpunkt: 'Gleichgewicht' },
              { uebung: 'Zehenspitzenstand', ablauf: 'An Stuhl festhalten, auf Zehenspitzen heben und langsam senken. 15 Wiederholungen. Stärkt Unterschenkelmuskulatur und verbessert Gleichgewicht.', schwerpunkt: 'Kraft' },
              { uebung: 'Tai Chi oder Yoga für Senioren', ablauf: 'Kurse in Volkshochschulen oder Sportvereinen, auch als Video möglich. Besonders wirksam in Studien — reduziert Sturzrisiko um bis zu 40 %.', schwerpunkt: 'Gleichgewicht & Kraft' },
            ].map((item) => (
              <div key={item.uebung} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <div className="flex items-center gap-3 mb-2">
                  <p className="text-[15px] font-bold text-[#1C1C1C]">{item.uebung}</p>
                  <span className="text-[11px] bg-[#F2EDE6] text-[#8B7355] font-semibold px-2 py-0.5 rounded-full">{item.schwerpunkt}</span>
                </div>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.ablauf}</p>
              </div>
            ))}
          </div>

          <h2 id="hilfsmittel" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Hilfsmittel & Versorgung
          </h2>
          <div className="space-y-3 mb-10">
            {[
              { hilfsmittel: 'Gehstock / Rollator', erstattung: 'Krankenkasse', hinweis: 'Arztrezept nötig. Rollator hat mehr Stabilität als Gehstock — bei höherem Sturzrisiko bevorzugen.' },
              { hilfsmittel: 'Hüftprotektor', erstattung: 'Hilfsmittelliste', hinweis: 'Polstereinlage in der Unterwäsche die bei Sturz Hüfte schützt. Besonders bei erhöhtem Sturzrisiko und Osteoporose sinnvoll.' },
              { hilfsmittel: 'Hausnotruf', erstattung: 'Entlastungsbetrag (131 €/Mo)', hinweis: 'Wenn Sturz passiert und niemand da ist: Hausnotruf ermöglicht schnelle Hilfe.' },
              { hilfsmittel: 'Orthopädische Schuhe', erstattung: 'Krankenkasse (ärztl. Verordnung)', hinweis: 'Bei Gangstörungen oder Fehlstellungen die Sturzrisiko erhöhen.' },
            ].map((item) => (
              <div key={item.hilfsmittel} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <div className="flex items-start justify-between gap-4 mb-1">
                  <p className="text-[15px] font-bold text-[#1C1C1C]">{item.hilfsmittel}</p>
                  <span className="text-[12px] bg-[#E8F5EE] text-[#3D7A5C] font-semibold px-2 py-0.5 rounded-full flex-shrink-0">{item.erstattung}</span>
                </div>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.hinweis}</p>
              </div>
            ))}
          </div>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Wie kann man Stürze im Alter verhindern?', a: 'Die wirksamsten Maßnahmen: Gleichgewichtstraining (30–40 % weniger Stürze), Wohnungssicherung (Haltegriffe, rutschfreie Böden), Medikamente auf Schwindelnebenwirkungen überprüfen lassen, gutes Schuhwerk, regelmäßiger Sehcheck.' },
              { q: 'Welche Übungen helfen gegen Sturzgefahr?', a: 'Einbeinstand, Aufstehen vom Stuhl ohne Hände, Tandemgang, Zehenspitzenstand. Tai Chi und Yoga für Senioren sind in Studien besonders wirksam. Täglich 10–15 Minuten sind wirksamer als ein langer Sporttag.' },
              { q: 'Bezahlt die Krankenkasse Hilfsmittel zur Sturzprävention?', a: 'Rollator und Gehstock: Krankenkasse mit Rezept. Hausnotruf: über Entlastungsbetrag (131 €/Monat) der Pflegekasse. Hüftprotektor: oft über Hilfsmittelliste. Wohnraumanpassungen: Pflegekasse bis 4.180 €/Maßnahme.' },
              { q: 'Was tun wenn jemand gestürzt ist?', a: 'Nicht sofort aufrichten wenn Verletzung möglich. Notarzt rufen bei Verdacht auf Knochenbruch, Kopfverletzung oder Bewusstlosigkeit. Danach Arzt aufsuchen, Ursache des Sturzes analysieren, Präventionsmaßnahmen anpassen.' },
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
