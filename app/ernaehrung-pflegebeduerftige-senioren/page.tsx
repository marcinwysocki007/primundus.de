import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [
  { id: 'grundlagen', title: 'Grundlagen der Seniorenernährung' },
  { id: 'haeufige-probleme', title: 'Häufige Ernährungsprobleme' },
  { id: 'mangelernährung', title: 'Mangelernährung erkennen & verhindern' },
  { id: 'kochpraxis', title: 'Kochpraxis für Betreuungskräfte' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Ernährung pflegebedürftiger Senioren — was wichtig ist | Primundus',
  description: 'Ernährung pflegebedürftiger Senioren: Grundlagen, häufige Probleme, Mangelernährung erkennen und praktische Tipps für Betreuungskräfte und Angehörige.',
  alternates: { canonical: 'https://primundus.de/ernaehrung-pflegebeduerftige-senioren/' },
  openGraph: {
    title: 'Ernährung pflegebedürftiger Senioren | Primundus',
    description: 'Was pflegebedürftige Senioren essen sollten und wie man Mangelernährung verhindert.',
    url: 'https://primundus.de/ernaehrung-pflegebeduerftige-senioren/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Ernährung pflegebedürftiger Senioren — was wichtig ist',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/ernaehrung-pflegebeduerftige-senioren/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Alltag & Angehörige', item: 'https://primundus.de/alltag/' },
      { '@type': 'ListItem', position: 3, name: 'Ernährung pflegebedürftiger Senioren', item: 'https://primundus.de/ernaehrung-pflegebeduerftige-senioren/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was sollten pflegebedürftige Senioren essen?', acceptedAnswer: { '@type': 'Answer', text: 'Pflegebedürftige Senioren brauchen energie- und nährstoffdichte Kost: genug Protein (ca. 1–1,2 g/kg Körpergewicht/Tag) zur Muskelpflege, viel Flüssigkeit (1,5–2 Liter/Tag, da Durstgefühl nachlässt), Vitamin D und Kalzium für Knochen, und leicht verdauliche, gut kauffähige Lebensmittel. Mahlzeiten nach Vorlieben und Gewohnheiten richten.' } },
    ],
  },
]

export default function ErnaehrungPflegebeduerftigeSenioren() {
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
            <span className="text-[#1C1C1C]">Ernährung pflegebedürftiger Senioren</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>7 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            Ernährung pflegebedürftiger Senioren — was wirklich wichtig ist
          </h1>

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            Gute Ernährung ist in der Pflege oft unterschätzt — dabei ist sie eine der wirksamsten Maßnahmen für Wohlbefinden, Heilung und Lebensqualität. Pflegebedürftige Senioren haben andere Bedürfnisse als jüngere Menschen: weniger Hunger, aber höherer Nährstoffbedarf, vermindertes Durstgefühl, oft Schluckprobleme. Eine 24h-Betreuungskraft die frisch kocht macht den Unterschied.
          </p>

          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 mb-10 shadow-sm">
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#A89279] mb-3">Die wichtigsten Grundsätze</p>
            <ul className="space-y-2.5">
              {[
                'Energie- und nährstoffdichte Kost — nicht wenig, aber kompakt',
                'Protein: ca. 1–1,2 g/kg Körpergewicht täglich (Muskelerhalt)',
                'Flüssigkeit: mind. 1,5 Liter täglich — Senioren trinken zu wenig weil Durstgefühl nachlässt',
                'Vitamin D + Kalzium: täglich für Knochengesundheit',
                'Regelmäßige Mahlzeiten als Tagesstruktur — 5–6 kleinere statt 3 große',
                'Essen nach Vorlieben und Gewohnheiten — Genuss ist Therapie',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-[#2E2E2E]">
                  <span className="w-5 h-5 rounded-full bg-[#E8F5EE] text-[#3D7A5C] flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <h2 id="grundlagen" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Grundlagen der Seniorenernährung
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Mit zunehmendem Alter verändern sich Nährstoffbedarf, Verdauung und Appetit. Diese Veränderungen systematisch zu berücksichtigen ist der Kern einer guten Seniorenernährung.
          </p>
          <div className="space-y-3 mb-10">
            {[
              { nährstoff: 'Protein — wichtiger als oft gedacht', erklaerung: 'Muskelmasse schwindet im Alter automatisch (Sarkopenie). Ausreichend Protein (Fleisch, Fisch, Hülsenfrüchte, Milchprodukte, Eier) verlangsamt diesen Prozess. Pflegebedürftige Senioren brauchen ca. 1–1,2 g Protein pro kg Körpergewicht täglich — deutlich mehr als jüngere Erwachsene.' },
              { nährstoff: 'Flüssigkeit — das größte Risiko', erklaerung: 'Das Durstgefühl nimmt im Alter ab — viele Senioren trinken chronisch zu wenig. Dehydration führt zu Verwirrtheit, Stürzen, Harnwegsinfektionen und verschlechtert alle Erkrankungen. 1,5–2 Liter täglich sind das Minimum. Betreuungskraft bietet aktiv Getränke an.' },
              { nährstoff: 'Vitamin D', erklaerung: 'Vitamin-D-Mangel ist bei Senioren extrem verbreitet — besonders im Winter und bei eingeschränkter Mobilität (wenig Sonne). Betrifft Knochen, Muskeln, Immunsystem. Supplementierung fast immer sinnvoll — Arzt fragen.' },
              { nährstoff: 'Ballaststoffe', erklaerung: 'Verstopfung ist bei pflegebedürftigen Senioren häufig — durch Bewegungsmangel, Medikamente und zu wenig Ballaststoffe. Vollkornprodukte, Gemüse, Hülsenfrüchte, viel Flüssigkeit helfen.' },
            ].map((item) => (
              <div key={item.nährstoff} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.nährstoff}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.erklaerung}</p>
              </div>
            ))}
          </div>

          <h2 id="haeufige-probleme" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Häufige Ernährungsprobleme — und was hilft
          </h2>
          <div className="space-y-3 mb-10">
            {[
              { problem: 'Appetitlosigkeit', loesung: 'Kleine Portionen, 5–6 Mahlzeiten täglich. Lieblingsspeisen bevorzugen — Genuss vor Gesundheit. Schöne Anrichtung, Tischgemeinschaft. Bitterstofftropfen vorab regen Appetit an.' },
              { problem: 'Schluckstörungen (Dysphagie)', loesung: 'Weiche, pürierte oder angedickte Speisen. Logopädie konsultieren. Niemals Tabletten in der Ernährung verstecken ohne Arztfreigabe. Trinken mit angedickten Getränken.' },
              { problem: 'Zahnprobleme', loesung: 'Weiche Konsistenz — gut gegartes Gemüse, Fischgerichte, Suppen, Brei, Joghurt, Quark. Kein Zwang zu harten Speisen. Zahnarzt für regelmäßige Kontrolle.' },
              { problem: 'Demenz und Vergessen zu essen', loesung: 'Feste Mahlzeitenzeiten als Tagesstruktur. Essen in Sichtweite stellen als Erinnerung. Fingerfoods wenn Besteck schwierig wird. Genug Zeit und Ruhe beim Essen.' },
              { problem: 'Diabetes-Management', loesung: 'Zuckerarme Kost, regelmäßige Mahlzeiten für stabilen Blutzucker. Betreuungskraft lernt Blutzuckermessen und kennt Hypoglykämie-Symptome.' },
            ].map((item) => (
              <div key={item.problem} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.problem}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.loesung}</p>
              </div>
            ))}
          </div>

          <h2 id="mangelernährung" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Mangelernährung erkennen & verhindern
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Mangelernährung bei Senioren ist häufig und oft unentdeckt. Sie verschlechtert alle Erkrankungen, verlangsamt Wundheilung, erhöht Sturzrisiko und Infektanfälligkeit.
          </p>
          <div className="space-y-3 mb-6">
            {[
              { zeichen: 'Unbeabsichtigter Gewichtsverlust', detail: 'Mehr als 5 % des Körpergewichts in 3 Monaten ohne Diät — sofort Arzt konsultieren.' },
              { zeichen: 'Kleidung sitzt zu weit', detail: 'Hosen und Hemden die früher gepasst haben, hängen nun — oft unbemerkt.' },
              { zeichen: 'Apathie und Schwäche', detail: 'Wenn jemand "nur noch sitzt" und kaum noch aufsteht — Mangelernährung ist oft mitverantwortlich.' },
              { zeichen: 'Häufige Infektionen', detail: 'Schlechtes Immunsystem durch Protein- und Vitaminmangel.' },
              { zeichen: 'Wunden heilen schlecht', detail: 'Druckgeschwüre und Wunden die nicht heilen — Proteinstatus prüfen lassen.' },
            ].map((item) => (
              <div key={item.zeichen} className="flex gap-4 bg-white rounded-xl p-4 border border-[#E5E3DF]">
                <span className="w-5 h-5 rounded-full bg-[#FDF0EE] text-[#E76F63] flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">!</span>
                <div>
                  <p className="text-[14px] font-bold text-[#1C1C1C] mb-0.5">{item.zeichen}</p>
                  <p className="text-[13px] text-[#2E2E2E]">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 id="kochpraxis" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Kochpraxis für Betreuungskräfte — konkrete Tipps
          </h2>
          <div className="space-y-3 mb-10">
            {[
              { tip: 'Biografische Lieblingsgerichte kochen', desc: 'Was hat der Senior früher gerne gegessen? Welche Gerichte erinnern an schöne Zeiten? Diese Gerichte zubereiten — Essen ist Erinnerung und Genuss.' },
              { tip: 'Vollwertig aber weich', desc: 'Vollwertige Mahlzeiten müssen nicht hart sein: Lachsfilet, weiches Gemüse (Möhren, Zucchini, Kürbis), Quark, Joghurt, Suppen — alles nährstoffreich und leicht zu essen.' },
              { tip: 'Flüssigkeit aktiv anbieten', desc: 'Nicht darauf warten dass getrunken wird — alle 1–2 Stunden aktiv Tee, Wasser, verdünnter Saft anbieten. Trinkprotokoll bei Bedarf führen.' },
              { tip: 'Gute Küche kaufen — nicht sparen', desc: 'Frische, hochwertige Lebensmittel sind in der Pflege keine Luxus — sie sind Therapie. Das Budget für gutes Essen ist gut investiert.' },
              { tip: 'Mahlzeiten als soziales Erlebnis', desc: 'Gemeinsam essen, am Tisch — nicht beim Fernsehen. Schönes Geschirr, Kerze, kurzes Gespräch. Mahlzeiten als Ritual des Tages.' },
            ].map((item) => (
              <div key={item.tip} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.tip}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Was sollten pflegebedürftige Senioren essen?', a: 'Energie- und nährstoffdichte Kost: genug Protein (1–1,2 g/kg/Tag), viel Flüssigkeit (1,5+ Liter), Vitamin D und Kalzium, Ballaststoffe. Kleine Mahlzeiten 5–6× täglich. Nach Vorlieben und Gewohnheiten kochen.' },
              { q: 'Wie viel sollten Senioren trinken?', a: 'Mindestens 1,5 Liter täglich — besser 2 Liter. Das Durstgefühl lässt im Alter nach — Flüssigkeit muss aktiv angeboten werden.' },
              { q: 'Was tun wenn ein Pflegebedürftiger kaum noch isst?', a: 'Ursache suchen (Zahnprobleme, Schluckstörungen, Depressionen, Medikamentennebenwirkungen). Lieblingsessen anbieten. Kleine Portionen. Hochkalorische Ergänzung (Trinknahrung). Arzt einschalten wenn Gewichtsverlust anhält.' },
              { q: 'Kocht die Betreuungskraft von Primundus frisch?', a: 'Ja — frische, altersgerechte Mahlzeiten sind Bestandteil der 24h-Betreuung. Die Kraft kocht nach Vorlieben, Diät und Ernährungsempfehlungen.' },
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
