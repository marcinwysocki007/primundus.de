import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [
  { id: 'besonderheiten', title: 'Besonderheiten bei Diabetes im Alter' },
  { id: 'alltag', title: 'Diabetesmanagement im Alltag' },
  { id: 'hypo', title: 'Hypoglykämie erkennen & handeln' },
  { id: 'pflegegrad', title: 'Pflegegrad & Kassenzuschüsse' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Diabetes Pflege Senioren — Blutzucker, Hypoglykämie & 24h-Betreuung | Primundus',
  description: 'Diabetes Pflege bei älteren Menschen: Blutzuckermessen, Insulingabe, Hypoglykämie erkennen, richtige Ernährung und ab wann eine 24h-Betreuungskraft sinnvoll ist.',
  alternates: { canonical: 'https://primundus.de/diabetes-pflege-senioren/' },
  openGraph: {
    title: 'Diabetes Pflege Senioren | Primundus',
    description: 'Diabetesmanagement bei pflegebedürftigen Senioren — Blutzucker, Hypoglykämie, 24h-Betreuung.',
    url: 'https://primundus.de/diabetes-pflege-senioren/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Diabetes Pflege Senioren — Blutzucker, Hypoglykämie und 24h-Betreuung',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/diabetes-pflege-senioren/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Krankheiten', item: 'https://primundus.de/krankheiten/' },
      { '@type': 'ListItem', position: 3, name: 'Diabetes Pflege Senioren', item: 'https://primundus.de/diabetes-pflege-senioren/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was macht eine 24h-Betreuungskraft bei Diabetes?', acceptedAnswer: { '@type': 'Answer', text: 'Eine Betreuungskraft kann: Blutzucker messen, an Medikamenteneinnahme erinnern, zuckerarme Mahlzeiten kochen, Hypoglykämie-Zeichen beobachten und sofort reagieren. Was eine Betreuungskraft nicht tut: Insulin spritzen (das ist Behandlungspflege und übernimmt der ambulante Pflegedienst).' } },
      { '@type': 'Question', name: 'Was sind Zeichen einer Unterzuckerung (Hypoglykämie)?', acceptedAnswer: { '@type': 'Answer', text: 'Frühe Zeichen: Zittern, Schwitzen, Blässe, Herzrasen, Hunger. Fortgeschrittene Zeichen: Verwirrtheit, undeutliche Sprache, Aggression, Koordinationsstörungen. Schwere Hypoglykämie: Bewusstlosigkeit — sofort Rettungsdienst rufen.' } },
    ],
  },
]

export default function DiabetesPflegeSenioren() {
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
            <span className="text-[#1C1C1C]">Diabetes Pflege Senioren</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>6 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            Diabetes Pflege Senioren — was bei der Betreuung zuhause wichtig ist
          </h1>

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            Diabetes Typ 2 ist bei Senioren über 70 eine der häufigsten Erkrankungen — und bei pflegebedürftigen Menschen oft eines von mehreren gleichzeitigen Problemen. Die häusliche Pflege von Menschen mit Diabetes erfordert strukturiertes Management: regelmäßige Mahlzeiten, Blutzuckerkontrolle, Medikamentensicherheit und das sichere Erkennen einer Unterzuckerung.
          </p>

          <div className="bg-[#FDF0EE] border border-[rgba(231,111,99,0.2)] rounded-2xl p-5 mb-10">
            <p className="text-[14px] font-bold text-[#8B3E2F] mb-2">Achtung: Hypoglykämie bei Demenz oft schwer erkennbar</p>
            <p className="text-[14px] text-[#8B3E2F] leading-relaxed">
              Wenn Demenz und Diabetes zusammentreffen, ist die Hypoglykämie-Erkennung besonders schwierig — Verwirrung und Aggression können sowohl Demenz-Symptom als auch Unterzuckerung sein. Im Zweifel immer Blutzucker messen.
            </p>
          </div>

          <h2 id="besonderheiten" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Besonderheiten bei Diabetes im Alter
          </h2>
          <div className="space-y-3 mb-10">
            {[
              { thema: 'Hypoglykämie-Risiko ist höher', desc: 'Bei älteren Menschen treten Unterzuckerungen häufiger auf — durch unregelmäßiges Essen, nachlassendes Nierenfilterung (langsamerer Medikamentenabbau) und veränderte Gegenregulation. Hypoglykämien werden oft erst spät bemerkt.' },
              { thema: 'Zielblutzucker ist anders', desc: 'Ältere Pflegebedürftige brauchen oft höhere Zielblutzucker-Werte als jüngere Diabetiker — weil Hypoglykämien für sie gefährlicher sind als leicht erhöhte Werte. Arzt bestimmt individuellen Zielbereich.' },
              { thema: 'Medikamente wechselwirken', desc: 'Viele Senioren nehmen 5+ Medikamente gleichzeitig. Wechselwirkungen mit Diabetesmedikamenten sind häufig. Regelmäßige Medikamentengabe zur selben Zeit nach den Mahlzeiten ist entscheidend.' },
              { thema: 'Dehydration verschlechtert Blutzucker', desc: 'Zu wenig Trinken erhöht den Blutzucker erheblich. Aktives Flüssigkeitsanbieten ist bei Diabetikern besonders wichtig.' },
            ].map((item) => (
              <div key={item.thema} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.thema}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 id="alltag" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Diabetesmanagement im Alltag — was die Betreuungskraft übernimmt
          </h2>
          <div className="space-y-3 mb-6">
            {[
              { aufgabe: '✓ Blutzucker messen', detail: 'Betreuungskraft lernt das Blutzuckermessen und führt es zu festgelegten Zeiten durch. Werte werden dokumentiert und bei Auffälligkeiten Angehörige und Arzt informiert.' },
              { aufgabe: '✓ Medikamentenerinnerung', detail: 'Orale Diabetesmedikamente werden zur richtigen Zeit und nach den Mahlzeiten erinnert. Keine Medikamentengabe gegen den Willen des Betroffenen.' },
              { aufgabe: '✓ Diabetesgerechte Mahlzeiten kochen', detail: 'Kohlenhydratreduzierte, ausgewogene Mahlzeiten zu festen Zeiten. Keine süßen Getränke. Frisches Obst in Maßen. Vollkornprodukte. Betreuungskraft lernt die Grundlagen der Diabeteskost.' },
              { aufgabe: '✓ Flüssigkeit aktiv anbieten', detail: 'Regelmäßig Wasser, ungesüßten Tee, Mineralwasser anbieten. Keine zuckerhaltigen Getränke. Trinkprotokoll bei Bedarf.' },
              { aufgabe: '✓ Hypoglykämie-Zeichen beobachten', detail: 'Betreuungskraft ist geschult auf frühe und späte Zeichen einer Unterzuckerung — und weiß wie zu handeln.' },
              { aufgabe: '✗ Insulin spritzen — Pflegedienst', detail: 'Insulininjektionen sind Behandlungspflege — übernimmt der ambulante Pflegedienst. Primundus koordiniert auf Wunsch die Zusammenarbeit.' },
            ].map((item) => (
              <div key={item.aufgabe} className={`rounded-xl p-5 border ${item.aufgabe.startsWith('✗') ? 'bg-[#FDF0EE] border-[rgba(231,111,99,0.15)]' : 'bg-white border-[#E5E3DF]'}`}>
                <p className={`text-[14px] font-bold mb-1 ${item.aufgabe.startsWith('✗') ? 'text-[#8B3E2F]' : 'text-[#1C1C1C]'}`}>{item.aufgabe}</p>
                <p className={`text-[14px] leading-relaxed ${item.aufgabe.startsWith('✗') ? 'text-[#8B3E2F]' : 'text-[#2E2E2E]'}`}>{item.detail}</p>
              </div>
            ))}
          </div>

          <h2 id="hypo" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Hypoglykämie erkennen & richtig handeln
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Eine Hypoglykämie (Unterzuckerung) ist ein Notfall — besonders bei älteren Menschen. Jede Betreuungskraft muss die Zeichen kennen und sofort handeln.
          </p>
          <div className="space-y-3 mb-6">
            {[
              { phase: 'Frühe Zeichen', zeichen: 'Zittern, Schwitzen, Blässe, Herzrasen, Hunger, Unruhe', handlung: 'Sofort Traubenzucker (15–20 g), Fruchtsaft oder Orangensaft geben. Blutzucker nach 15 Minuten nochmals messen.' },
              { phase: 'Fortgeschrittene Zeichen', zeichen: 'Verwirrtheit, undeutliche Sprache, Aggression, Koordinationsstörungen', handlung: 'Sofortige Glukosegabe wenn noch schlucken möglich. Arzt oder Rettungsdienst anrufen. Nicht alleine lassen.' },
              { phase: 'Schwere Hypoglykämie', zeichen: 'Bewusstlosigkeit, Krampfanfall', handlung: 'SOFORT Rettungsdienst (112) rufen. Nichts in den Mund. Stabile Seitenlage wenn möglich.' },
            ].map((item) => (
              <div key={item.phase} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#A89279] mb-1">{item.phase}</p>
                <p className="text-[14px] font-semibold text-[#1C1C1C] mb-1">Zeichen: {item.zeichen}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">Handlung: {item.handlung}</p>
              </div>
            ))}
          </div>

          <h2 id="pflegegrad" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Pflegegrad & Kassenzuschüsse bei Diabetes
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Diabetes allein führt oft zu PG 2–3. Wenn zusätzlich Einschränkungen durch Folgekomplikationen (Neuropathie, Niereninsuffizienz, eingeschränkte Mobilität) bestehen, sind höhere Pflegegrade möglich.
          </p>
          <div className="space-y-3 mb-10">
            {[
              ['Kein weiterer Hilfebedarf durch Diabetes', 'Ggf. kein PG', '—'],
              ['Leichter Hilfebedarf, Blutzuckerkontrolle nötig', 'PG 1–2', '— bis 347 €/Mo'],
              ['Erheblicher Hilfebedarf durch Diabetes + Folgekomplikationen', 'PG 2–3', '347–599 €/Mo'],
              ['Schwerer Hilfebedarf (Mobilität, Wundversorgung, Sehverlust)', 'PG 3–4', '599–800 €/Mo'],
            ].map(([situation, pg, pgeld]) => (
              <div key={situation} className="flex items-center justify-between bg-white rounded-xl px-5 py-3 border border-[#E5E3DF]">
                <span className="text-[13px] text-[#2E2E2E] flex-1">{situation}</span>
                <span className="text-[13px] font-bold text-[#1C1C1C] px-4">{pg}</span>
                <span className={`text-[13px] font-bold ${pgeld === '—' ? 'text-[#C8C3BA]' : 'text-[#3D7A5C]'}`}>{pgeld}</span>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Pflegegrad beantragen:{' '}
            <a href="/pflegegrad-beantragen/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Schritt-für-Schritt Anleitung</a>
          </p>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Was macht eine 24h-Betreuungskraft bei Diabetes?', a: 'Blutzucker messen, Medikamentenerinnerung, diabetesgerechte Mahlzeiten kochen, Flüssigkeit anbieten, Hypoglykämie-Zeichen beobachten. Insulin spritzen ist Behandlungspflege — übernimmt ambulanter Pflegedienst.' },
              { q: 'Was sind Zeichen einer Unterzuckerung?', a: 'Früh: Zittern, Schwitzen, Herzrasen. Fortgeschritten: Verwirrtheit, Aggression, undeutliche Sprache. Schwer: Bewusstlosigkeit. Bei Bewusstlosigkeit: sofort 112 rufen.' },
              { q: 'Was darf eine Betreuungskraft bei Diabetes NICHT tun?', a: 'Insulin spritzen — das ist Behandlungspflege und darf nur von examinierten Pflegekräften oder Ärzten durchgeführt werden. Primundus koordiniert auf Wunsch die Zusammenarbeit mit einem Pflegedienst.' },
              { q: 'Wie hoch ist der Pflegegrad bei Diabetes?', a: 'Diabetes allein führt oft zu PG 1–2. Mit Folgekomplikationen (Neuropathie, Sehverlust, Niereninsuffizienz, Mobilitätseinschränkungen) sind PG 2–4 möglich.' },
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
