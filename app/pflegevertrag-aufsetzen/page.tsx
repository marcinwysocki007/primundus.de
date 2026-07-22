import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [
  { id: 'warum', title: 'Warum ein Pflegevertrag wichtig ist' },
  { id: 'inhalte', title: 'Was in den Vertrag gehört' },
  { id: 'modelle', title: 'Vertrag je nach Beschäftigungsmodell' },
  { id: 'kuendigung', title: 'Kündigung & Fristen' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflegevertrag aufsetzen — was muss rein? Muster & Tipps | Primundus',
  description: 'Pflegevertrag aufsetzen: Was in einen Pflegevertrag gehört, welches Modell für wen gilt und worauf bei der Kündigung geachtet werden muss. Mit Checkliste.',
  alternates: { canonical: 'https://primundus.de/pflegevertrag-aufsetzen/' },
  openGraph: {
    title: 'Pflegevertrag aufsetzen | Primundus',
    description: 'Was in einen Pflegevertrag gehört, Beschäftigungsmodelle und Kündigungsfristen — Checkliste und Tipps.',
    url: 'https://primundus.de/pflegevertrag-aufsetzen/',
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
    headline: 'Pflegevertrag aufsetzen — was muss rein?',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/pflegevertrag-aufsetzen/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Organisation', item: 'https://primundus.de/organisation/' },
      { '@type': 'ListItem', position: 3, name: 'Pflegevertrag aufsetzen', item: 'https://primundus.de/pflegevertrag-aufsetzen/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was muss in einen Pflegevertrag?', acceptedAnswer: { '@type': 'Answer', text: 'Ein Pflegevertrag sollte enthalten: Vertragsparteien, Leistungsumfang (konkrete Tätigkeiten), Arbeitszeit und Dienstplan, Vergütung und Zahlungsmodalitäten, Kost und Logis, Urlaubs- und Krankheitsregelungen, Kündigungsfristen und Datenschutz.' } },
      { '@type': 'Question', name: 'Wer schließt den Pflegevertrag beim Entsendemodell?', acceptedAnswer: { '@type': 'Answer', text: 'Beim Entsendemodell schließt die Familie einen Vertrag mit der deutschen Vermittlungsagentur (z.B. Primundus) — nicht direkt mit der Betreuungskraft. Die Kraft hat einen Arbeitsvertrag mit dem entsendenden Unternehmen im EU-Heimatland.' } },
    ],
  },
]

export default function PflegevertragAufsetzen() {
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
            <a href="/organisation/" className="hover:text-[#8B7355] transition-colors">Organisation</a>
            <span>›</span>
            <span className="text-[#1C1C1C]">Pflegevertrag aufsetzen</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>6 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            Pflegevertrag aufsetzen — was muss rein?
          </h1>

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            Ein schriftlicher Pflegevertrag schützt beide Seiten — die Familie und die Betreuungskraft. Er regelt Leistungen, Arbeitszeiten, Vergütung und Kündigungsmodalitäten klar und verbindlich. Was genau hineingehört, hängt vom Beschäftigungsmodell ab. Beim Entsendemodell über Primundus ist der Vertrag standardisiert und rechtssicher.
          </p>

          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 mb-10 shadow-sm">
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#A89279] mb-3">Pflicht-Inhalte jedes Pflegevertrags</p>
            <ul className="space-y-2.5">
              {[
                'Vertragsparteien: vollständige Namen und Adressen beider Seiten',
                'Leistungsumfang: konkrete Tätigkeiten (Grundpflege, Haushalt, Betreuung)',
                'Arbeitszeit: Wochenstunden, Dienstzeiten, Bereitschaftszeiten',
                'Vergütung: Höhe, Zahlungsmodalitäten, Datum',
                'Kost und Logis: Wert und Anrechnung auf Vergütung',
                'Urlaubs- und Krankheitsregelungen',
                'Kündigungsfristen',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-[#2E2E2E]">
                  <span className="w-5 h-5 rounded-full bg-[#E8F5EE] text-[#3D7A5C] flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <h2 id="warum" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Warum ein Pflegevertrag so wichtig ist
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">
            Ohne schriftlichen Vertrag entstehen schnell Missverständnisse: Welche Tätigkeiten sind inbegriffen? Wie viele Stunden? Was passiert bei Krankheit der Betreuungskraft? Wer kümmert sich um Ersatz? Ein klarer Vertrag schafft von Anfang an Klarheit und vermeidet Konflikte.
          </p>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-10">
            Rechtlich ist ein schriftlicher Vertrag bei Direktanstellung Pflicht. Beim Entsendemodell regelt der Vertrag mit der Agentur alle wesentlichen Punkte. Auf keinen Fall sollte auf einen Vertrag verzichtet werden — auch nicht bei vertrauensvollen Verhältnissen.
          </p>

          <h2 id="inhalte" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Was in den Pflegevertrag gehört — vollständige Checkliste
          </h2>
          <div className="space-y-3 mb-10">
            {[
              { titel: 'Vertragsparteien', inhalt: 'Vollständige Namen, Adressen, Geburtsdaten beider Seiten. Bei Entsendemodell: Agentur als Vertragspartner, Name der Betreuungskraft als Anlage.' },
              { titel: 'Leistungsumfang', inhalt: 'Konkret benennen: Körperpflege (Waschen, Anziehen, Zahnpflege), Haushalt (Kochen, Reinigung, Einkauf), Betreuung (Spaziergänge, Gespräche, Arztbegleitung). Was NICHT inbegriffen ist ebenfalls festhalten.' },
              { titel: 'Arbeitszeit & Dienstplan', inhalt: 'Wochenstunden, Kern-Dienstzeiten, Bereitschaftsdienst-Regelung (Nacht/Wochenende). In Deutschland gilt das Arbeitszeitgesetz — max. 8 Stunden täglich reguläre Arbeitszeit.' },
              { titel: 'Vergütung', inhalt: 'Monatliches Bruttogehalt, Zahlungsdatum, Zahlungsweg (Überweisung). Mindestlohn einhalten. Kost und Logis: Wert schriftlich festhalten und Anrechnung auf Vergütung regeln.' },
              { titel: 'Urlaub & Krankheit', inhalt: 'Urlaubsanspruch (mind. 4 Wochen nach Bundesurlaubsgesetz), Krankheitsregelung (Lohnfortzahlung 6 Wochen), Vertretungsregelung bei Ausfall.' },
              { titel: 'Kündigungsregelung', inhalt: 'Kündigungsfristen für beide Seiten, außerordentliche Kündigung bei schwerem Fehlverhalten, Übergabeprozess bei Kündigung.' },
              { titel: 'Datenschutz', inhalt: 'Einwilligung für die Verarbeitung personenbezogener Daten der pflegebedürftigen Person, Schweigepflicht der Betreuungskraft.' },
            ].map((item) => (
              <div key={item.titel} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.titel}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.inhalt}</p>
              </div>
            ))}
          </div>

          <h2 id="modelle" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Vertrag je nach Beschäftigungsmodell
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Das Beschäftigungsmodell bestimmt wer mit wem einen Vertrag schließt.
          </p>
          <div className="space-y-3 mb-6">
            {[
              {
                modell: 'Entsendemodell (über Agentur wie Primundus)',
                vertrag: 'Familie schließt Vertrag mit der deutschen Agentur. Die Betreuungskraft hat eigenen Arbeitsvertrag mit dem entsendenden EU-Unternehmen. Einfach, rechtssicher, klar geregelt.',
                highlight: true,
              },
              {
                modell: 'Direktanstellung',
                vertrag: 'Familie ist Arbeitgeberin — schließt Arbeitsvertrag direkt mit der Betreuungskraft. Alle Arbeitgebergerechtlichen Pflichten liegen bei der Familie: Lohnabrechnung, Sozialversicherung, Urlaubsplanung.',
                highlight: false,
              },
            ].map((item) => (
              <div key={item.modell} className={`rounded-xl p-5 border ${item.highlight ? 'bg-white border-[#8B7355] border-2' : 'bg-white border-[#E5E3DF]'}`}>
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.modell}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.vertrag}</p>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Alle Modelle erklärt:{' '}
            <a href="/pflegekraft-legal-beschaeftigen/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Pflegekraft legal beschäftigen — die 3 Wege</a>
          </p>

          <h2 id="kuendigung" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Kündigung & Fristen
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Bei Primundus ist der Vertrag täglich kündbar — das ist ein zentraler Vorteil des Entsendemodells. Bei Direktanstellung gelten die gesetzlichen Kündigungsfristen nach Beschäftigungsdauer.
          </p>
          <div className="bg-white rounded-2xl border border-[#E5E3DF] overflow-hidden mb-6 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#F8F7F5]">
                    {['Modell', 'Kündigungsfrist', 'Ersatz bei Kündigung'].map(h => (
                      <th key={h} className="px-4 py-3 text-[12px] font-semibold text-[#8B8B8B] text-left border-b border-[#E5E3DF]">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Primundus (Entsendung)', 'Täglich kündbar', 'Primundus stellt sofort Ersatzkraft'],
                    ['Direktanstellung <6 Monate', '2 Wochen', 'Familie muss selbst suchen'],
                    ['Direktanstellung >2 Jahre', '2 Monate', 'Familie muss selbst suchen'],
                  ].map(([modell, frist, ersatz], i) => (
                    <tr key={modell} className={i === 0 ? 'bg-[#F2EDE6]' : i % 2 === 0 ? 'bg-white' : 'bg-[#F8F7F5]'}>
                      <td className={`px-4 py-3 text-[14px] font-semibold border-b border-[#E5E3DF] ${i === 0 ? 'text-[#8B7355]' : 'text-[#1C1C1C]'}`}>{modell}</td>
                      <td className="px-4 py-3 text-[14px] text-[#2E2E2E] border-b border-[#E5E3DF]">{frist}</td>
                      <td className="px-4 py-3 text-[13px] text-[#8B8B8B] border-b border-[#E5E3DF]">{ersatz}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Pflegekraft wechseln:{' '}
            <a href="/pflegekraft-wechseln/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Pflegekraft wechseln — so geht es reibungslos</a>
          </p>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">
            Häufige Fragen zum Pflegevertrag
          </h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Was muss in einen Pflegevertrag?', a: 'Vertragsparteien, Leistungsumfang (konkrete Tätigkeiten), Arbeitszeiten, Vergütung, Kost und Logis, Urlaubs- und Krankheitsregelungen, Kündigungsfristen, Datenschutz.' },
              { q: 'Wer schließt beim Entsendemodell den Vertrag?', a: 'Die Familie schließt den Vertrag mit der deutschen Agentur (z.B. Primundus) — nicht direkt mit der Betreuungskraft. Die Kraft hat einen Arbeitsvertrag mit dem entsendenden EU-Unternehmen.' },
              { q: 'Kann man den Pflegevertrag bei Primundus täglich kündigen?', a: 'Ja — Primundus-Verträge sind täglich kündbar, taggenaue Abrechnung. Das ist einer der zentralen Vorteile des Entsendemodells.' },
              { q: 'Muss der Pflegevertrag schriftlich sein?', a: 'Bei Direktanstellung ist Schriftform Pflicht. Beim Entsendemodell regelt der Agenturvertrag alle wesentlichen Punkte schriftlich. Auf einen schriftlichen Vertrag sollte in keinem Fall verzichtet werden.' },
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
