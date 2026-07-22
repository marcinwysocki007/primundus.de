import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [
  { id: 'wege', title: 'Wege zur Pflegekraft' },
  { id: 'agentur', title: 'Über eine Agentur — Vorteile' },
  { id: 'worauf-achten', title: 'Worauf bei der Auswahl achten?' },
  { id: 'ablauf', title: 'Ablauf bei Primundus' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflegekraft finden — worauf achten & wie vorgehen 2026 | Primundus',
  description: 'Pflegekraft finden: Agentur, Direktsuche oder Selbstständige? Worauf bei der Auswahl zu achten ist, welche Qualifikationen wichtig sind und wie Primundus dabei hilft.',
  alternates: { canonical: 'https://primundus.de/pflegekraft-finden/' },
  openGraph: {
    title: 'Pflegekraft finden 2026 | Primundus',
    description: 'Wie man eine zuverlässige Pflegekraft findet — Agentur vs. Direktsuche, Qualifikationen, Auswahlkriterien.',
    url: 'https://primundus.de/pflegekraft-finden/',
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
    headline: 'Pflegekraft finden — worauf achten und wie vorgehen 2026',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/pflegekraft-finden/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Organisation', item: 'https://primundus.de/organisation/' },
      { '@type': 'ListItem', position: 3, name: 'Pflegekraft finden', item: 'https://primundus.de/pflegekraft-finden/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Wie findet man eine gute Pflegekraft?', acceptedAnswer: { '@type': 'Answer', text: 'Der zuverlässigste Weg ist die Vermittlung über eine seriöse Agentur wie Primundus. Die Agentur prüft Qualifikation, Erfahrung und Deutschkenntnisse, stellt Ersatz bei Ausfall und regelt das Rechtliche. Direktsuche über Portale ist möglich, erfordert aber mehr Eigenaufwand und rechtliches Know-how.' } },
      { '@type': 'Question', name: 'Worauf sollte man bei der Auswahl einer Pflegekraft achten?', acceptedAnswer: { '@type': 'Answer', text: 'Deutschkenntnisse (Grundkommunikation Pflicht), Pflegeerfahrung (Anzahl und Art früherer Einsätze), Referenzen, Führerschein wenn nötig, Persönlichkeit und Passung zur Pflegesituation. Bei spezifischen Diagnosen (Demenz, Parkinson) auf Spezialerfahrung achten.' } },
      { '@type': 'Question', name: 'Wie schnell findet Primundus eine Pflegekraft?', acceptedAnswer: { '@type': 'Answer', text: 'Primundus findet typischerweise innerhalb von 4–7 Tagen nach dem ersten Beratungsgespräch eine passende Betreuungskraft. In dringenden Fällen ist ein schnellerer Start möglich.' } },
    ],
  },
]

export default function PflegekraftFinden() {
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
            <span className="text-[#1C1C1C]">Pflegekraft finden</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>6 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            Pflegekraft finden — worauf achten & wie vorgehen
          </h1>

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            Eine zuverlässige Pflegekraft zu finden ist die wichtigste Entscheidung bei der Organisation der 24h-Pflege. Der sicherste Weg führt über eine seriöse Agentur — sie prüft Qualifikation und Erfahrung, stellt Ersatz bei Ausfall und regelt alles Rechtliche. Bei Primundus ist die passende Kraft in 4–7 Tagen vor Ort.
          </p>

          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 mb-10 shadow-sm">
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#A89279] mb-3">Auf einen Blick</p>
            <ul className="space-y-2.5">
              {[
                'Agentur wie Primundus: sicherster Weg — Prüfung, Ersatz, Rechtssicherheit',
                'Direktsuche: möglich, aber mehr Aufwand und rechtliches Risiko',
                'Deutschkenntnisse: Grundkommunikation ist Mindestanforderung',
                'Pflegeerfahrung: Anzahl und Art früherer Einsätze prüfen',
                'Persönlichkeit: Telefonat vorab möglich — Passung zur Pflegesituation zählt',
                'Start: Mit Primundus in 4–7 Tagen nach Erstgespräch',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-[#2E2E2E]">
                  <span className="w-5 h-5 rounded-full bg-[#E8F5EE] text-[#3D7A5C] flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <h2 id="wege" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Wege zur Pflegekraft — was gibt es?
          </h2>
          <div className="space-y-3 mb-10">
            {[
              {
                weg: 'Über eine Agentur (empfohlen)',
                beschreibung: 'Die Agentur übernimmt Suche, Prüfung und Vermittlung. Bei Primundus: Rechtssicheres Entsendemodell mit A1-Bescheinigung, Ersatz bei Ausfall, persönliche Beratung.',
                highlight: true,
              },
              {
                weg: 'Direktsuche über Portale',
                beschreibung: 'Plattformen wie Pflegemarkt.de, care.de oder Kleinanzeigen. Mehr Eigenaufwand bei Prüfung und Rechtlichem — aber potenziell günstigere Preise.',
                highlight: false,
              },
              {
                weg: 'Weiterempfehlung im Bekanntenkreis',
                beschreibung: 'Oft der persönlichste Weg — aber Rechtliches (Arbeitsvertrag, Sozialversicherung) muss trotzdem sorgfältig geregelt werden.',
                highlight: false,
              },
            ].map((item) => (
              <div key={item.weg} className={`rounded-xl p-5 border ${item.highlight ? 'bg-white border-[#8B7355] border-2' : 'bg-white border-[#E5E3DF]'}`}>
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.weg}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.beschreibung}</p>
              </div>
            ))}
          </div>

          <h2 id="agentur" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Über eine Agentur — was die Vorteile sind
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Eine seriöse Agentur wie Primundus übernimmt alles was bei der Direktsuche an der Familie hängenbleibt — und liefert zusätzliche Sicherheitsnetze.
          </p>
          <div className="space-y-3 mb-10">
            {[
              { vorteil: 'Geprüfte Qualifikation', beschreibung: 'Pflegeerfahrung, Deutschkenntnisse, Referenzen — alles wird vor der Vermittlung geprüft. Kein Risiko mit ungeprüften Personen.' },
              { vorteil: 'Rechtliche Absicherung', beschreibung: 'Entsendemodell mit A1-Bescheinigung — vollständig rechtssicher. Die Familie hat kein eigenes Arbeitsverhältnis.' },
              { vorteil: 'Ersatz bei Ausfall', beschreibung: 'Wird die Betreuungskraft krank oder muss wechseln — Primundus stellt sofort eine Ersatzkraft. Kein Versorgungsausfall.' },
              { vorteil: 'Nahtlose Rotation', beschreibung: 'Wechsel der Kraft alle 6–8 Wochen ist organisiert und wird von Primundus koordiniert — Familie muss sich nicht selbst darum kümmern.' },
              { vorteil: 'Persönliche Beratung', beschreibung: 'Ilka Wysocki und das Primundus-Team begleiten die Familie — von der ersten Anfrage bis zur laufenden Betreuung.' },
            ].map((item) => (
              <div key={item.vorteil} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.vorteil}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.beschreibung}</p>
              </div>
            ))}
          </div>

          <h2 id="worauf-achten" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Worauf bei der Auswahl zu achten ist
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Diese Kriterien sollten bei jeder Pflegekraft — ob über Agentur oder direkt — geprüft werden:
          </p>
          <div className="space-y-3 mb-6">
            {[
              { kriterium: 'Deutschkenntnisse', wichtigkeit: 'Pflicht', beschreibung: 'Grundlegende Kommunikation auf Deutsch ist Mindestanforderung. Bei Demenzbetroffenen kann emotionale Verbindung wichtiger sein als perfektes Deutsch.' },
              { kriterium: 'Pflegeerfahrung', wichtigkeit: 'Pflicht', beschreibung: 'Wie viele Einsätze? Welche Pflegesituationen? Erfahrung mit spezifischen Erkrankungen (Demenz, Parkinson, Schlaganfall) bei Bedarf prüfen.' },
              { kriterium: 'Referenzen', wichtigkeit: 'Empfohlen', beschreibung: 'Kontakt zu früheren Familien aufnehmen — falls verfügbar. Seriöse Agenturen stellen Referenzen auf Anfrage bereit.' },
              { kriterium: 'Führerschein', wichtigkeit: 'Je nach Situation', beschreibung: 'Wenn Arztbesuche oder Einkaufsfahrten in ländlichen Gebieten zu den Aufgaben gehören.' },
              { kriterium: 'Persönlichkeit & Passung', wichtigkeit: 'Sehr wichtig', beschreibung: 'Ein Telefonat vorab gibt einen ersten Eindruck. Schnuppertage in der ersten Woche helfen bei der endgültigen Entscheidung.' },
            ].map((item) => (
              <div key={item.kriterium} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <div className="flex items-center gap-3 mb-1">
                  <p className="text-[15px] font-bold text-[#1C1C1C]">{item.kriterium}</p>
                  <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${item.wichtigkeit === 'Pflicht' ? 'bg-[#FDF0EE] text-[#8B3E2F]' : item.wichtigkeit === 'Sehr wichtig' ? 'bg-[#F2EDE6] text-[#8B7355]' : 'bg-[#F8F7F5] text-[#8B8B8B]'}`}>{item.wichtigkeit}</span>
                </div>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.beschreibung}</p>
              </div>
            ))}
          </div>

          <h2 id="ablauf" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Ablauf bei Primundus — von Anfrage bis Start
          </h2>
          <ol className="space-y-3 mb-10">
            {[
              { n: '1', title: 'Kostenloses Beratungsgespräch', desc: 'Pflegesituation, Diagnosen, besondere Anforderungen erfassen. Kein Auftrag, kein Risiko.' },
              { n: '2', title: 'Passende Kraft vorschlagen', desc: 'Primundus schlägt eine geprüfte Kraft vor — Profil mit Erfahrung, Qualifikation und Foto. Telefonat vorab möglich.' },
              { n: '3', title: 'Angebot & Vertrag', desc: 'Transparentes Angebot mit allen Kosten. Vertrag mit Primundus — kein direktes Arbeitsverhältnis mit der Kraft.' },
              { n: '4', title: 'Anreise in 4–7 Tagen', desc: 'Betreuungskraft reist an. A1-Bescheinigung liegt vor. Übergabe durch Primundus-Team begleitet.' },
              { n: '5', title: 'Laufende Betreuung', desc: 'Primundus bleibt Ansprechpartner — Qualitätssicherung, Kraftwechsel, Ersatz bei Ausfall.' },
            ].map((step) => (
              <li key={step.n} className="flex gap-4 bg-white rounded-xl p-5 border border-[#E5E3DF] list-none">
                <span className="w-8 h-8 rounded-full bg-[#8B7355] text-white font-bold text-[15px] flex items-center justify-center flex-shrink-0">{step.n}</span>
                <div>
                  <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{step.title}</p>
                  <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">
            Häufige Fragen
          </h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Wie findet man eine gute Pflegekraft?', a: 'Der sicherste Weg ist eine seriöse Agentur wie Primundus — sie prüft Qualifikation, stellt Ersatz bei Ausfall und regelt das Rechtliche. Direktsuche ist möglich, erfordert aber mehr Eigenaufwand.' },
              { q: 'Worauf sollte man bei der Auswahl achten?', a: 'Deutschkenntnisse (Grundkommunikation Pflicht), Pflegeerfahrung und Referenzen prüfen, Führerschein wenn nötig, Persönlichkeit und Passung zur Pflegesituation. Bei spezifischen Diagnosen auf Spezialerfahrung achten.' },
              { q: 'Wie schnell findet Primundus eine Pflegekraft?', a: 'Typischerweise 4–7 Tage nach dem ersten Beratungsgespräch. In dringenden Situationen ist oft ein schnellerer Start möglich.' },
              { q: 'Kann ich vor dem Einsatz mit der Pflegekraft sprechen?', a: 'Ja — Primundus ermöglicht ein Telefonat vorab. So kann die Familie einen ersten Eindruck gewinnen bevor die Kraft anreist.' },
              { q: 'Was passiert wenn die Pflegekraft nicht passt?', a: 'Bei Primundus ist der Vertrag täglich kündbar. Primundus findet unverzüglich eine Ersatzkraft — kein Versorgungsausfall.' },
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
