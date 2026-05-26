import type { Metadata } from 'next'
import { ChecklisteClient } from './ChecklisteClient'

export const metadata: Metadata = {
  title: 'Checkliste Pflegeübernahme — 30 Schritte in 5 Phasen | Primundus',
  description: 'Strukturierte Checkliste für die Pflegeübernahme — von den ersten Tagen bis zur stabilen Pflegesituation. 30 konkrete Schritte, Fortschritt wird gespeichert.',
  alternates: { canonical: 'https://primundus.de/checkliste-pflegeuebernahme/' },
  openGraph: {
    title: 'Checkliste Pflegeübernahme | Primundus',
    description: '30 konkrete Schritte in 5 Phasen — vom ersten Tag bis zur stabilen Pflegesituation. Mit Fortschrittsanzeige.',
    url: 'https://primundus.de/checkliste-pflegeuebernahme/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: '/images/primundus_logo_header.webp' }],
  },
}

const schemaMarkup = JSON.stringify([
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Tools & Rechner', item: 'https://primundus.de/tools/' },
      { '@type': 'ListItem', position: 3, name: 'Checkliste Pflegeübernahme', item: 'https://primundus.de/checkliste-pflegeuebernahme/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was sind die ersten Schritte bei der Pflegeübernahme?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Die wichtigsten Sofortmaßnahmen sind: Hausarzt einbinden, Pflegegrad-Antrag bei der Pflegekasse stellen (der Antragsmonat zählt rückwirkend), Vorsorgevollmacht und Patientenverfügung prüfen, Medikamentenliste erstellen sowie wichtige Kontakte zentral hinterlegen. Ein Hausnotruf wird ab PG 1 mit 25,50 €/Monat bezuschusst.',
        },
      },
      {
        '@type': 'Question',
        name: 'Wie lange dauert es, bis die Pflege stabil organisiert ist?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'In der Regel 2–3 Monate. Die ersten 2 Wochen sind für Sofortmaßnahmen und Anträge nötig, weitere 4–6 Wochen bis zur MDK-Begutachtung und dem Pflegegrad-Bescheid. Eine 24h-Betreuungskraft kann parallel innerhalb von 1–2 Wochen vermittelt werden — der finale Pflegegrad wird dann rückwirkend ab dem Antragsmonat berechnet.',
        },
      },
      {
        '@type': 'Question',
        name: 'Wer hilft bei der Organisation der Pflege?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Erste Anlaufstelle sind die kostenlosen Pflegestützpunkte (bundesweit ca. 500), die Pflegeberatung der Pflegekasse (§ 7a SGB XI — gesetzlicher Anspruch) sowie spezialisierte Vermittlungsagenturen für 24h-Pflege. Bei finanziellen Engpässen hilft das Sozialamt mit Hilfe zur Pflege.',
        },
      },
      {
        '@type': 'Question',
        name: 'Welche Pflicht-Beratungsbesuche gibt es?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Bei reiner Pflege durch Angehörige (Pflegegeld-Bezug) sind Beratungsbesuche nach § 37 Abs. 3 SGB XI verpflichtend: halbjährlich bei PG 2 und 3, vierteljährlich bei PG 4 und 5. Werden die Termine versäumt, kann das Pflegegeld gekürzt oder eingestellt werden. Die Beratung selbst ist kostenlos und wird durch zugelassene Pflegedienste durchgeführt.',
        },
      },
      {
        '@type': 'Question',
        name: 'Wie schütze ich mich vor einem Pflege-Burnout?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Wichtigste Maßnahmen: Verhinderungspflege rechtzeitig planen (bis 1.612 €/Jahr für Vertretung), regelmäßige Auszeiten einplanen, Pflegekurse besuchen (kostenlos über Pflegekasse), Pflegeverantwortung unter Geschwistern fair aufteilen, soziale Kontakte erhalten sowie professionelle Hilfe in Anspruch nehmen — z.B. durch 24h-Betreuungskraft als dauerhafte Entlastung.',
        },
      },
    ],
  },
])

const phasen = [
  { nr: 1, titel: 'Die ersten Tage', anzahl: 6, focus: 'Sofortmaßnahmen — Arzt, Pflegekasse, Vollmachten' },
  { nr: 2, titel: 'Pflegegrad und Finanzierung', anzahl: 6, focus: 'Begutachtung, Zuschüsse, steuerliche Absetzung' },
  { nr: 3, titel: 'Pflege organisieren', anzahl: 6, focus: 'Lösung wählen, Verträge, Arbeitgeber, Versicherungen' },
  { nr: 4, titel: 'Pflegekraft einarbeiten', anzahl: 6, focus: 'Zimmer, Tagesablauf, Notfallplan, Kommunikation' },
  { nr: 5, titel: 'Langfristig stabil', anzahl: 6, focus: 'Auszeiten, Pflegekurse, Beratungsbesuche, Anpassungen' },
]

const faqs = [
  {
    q: 'Was sind die ersten Schritte bei der Pflegeübernahme?',
    a: 'Hausarzt einbinden, Pflegegrad-Antrag bei der Pflegekasse stellen (Antragsmonat zählt!), Vorsorgevollmacht/Patientenverfügung prüfen, Medikamentenliste erstellen, Kontakte zentral hinterlegen. Hausnotruf wird ab PG 1 mit 25,50 €/Monat bezuschusst.',
  },
  {
    q: 'Wie lange bis die Pflege stabil organisiert ist?',
    a: 'In der Regel 2–3 Monate. Erste 2 Wochen: Sofortmaßnahmen. 4–6 Wochen bis MDK-Begutachtung. Eine 24h-Betreuungskraft kann parallel in 1–2 Wochen vermittelt werden — Pflegegrad wird rückwirkend ab Antragsmonat angerechnet.',
  },
  {
    q: 'Wer hilft bei der Organisation der Pflege?',
    a: 'Pflegestützpunkte (kostenlos, bundesweit ca. 500), Pflegeberatung der Pflegekasse (§ 7a SGB XI — gesetzlicher Anspruch), spezialisierte Vermittlungsagenturen für 24h-Pflege. Bei finanziellen Engpässen: Sozialamt (Hilfe zur Pflege).',
  },
  {
    q: 'Welche Pflicht-Beratungsbesuche gibt es?',
    a: 'Bei Pflegegeld-Bezug: halbjährlich bei PG 2–3, vierteljährlich bei PG 4–5. Bei Versäumnis kann das Pflegegeld gekürzt werden. Die Beratung ist kostenlos und wird durch zugelassene Pflegedienste durchgeführt.',
  },
  {
    q: 'Wie schütze ich mich vor Pflege-Burnout?',
    a: 'Verhinderungspflege planen (bis 1.612 €/Jahr für Vertretung), Auszeiten einplanen, Pflegekurse (kostenlos über Pflegekasse) besuchen, Verantwortung unter Geschwistern fair teilen, professionelle Hilfe wie 24h-Betreuungskraft als dauerhafte Entlastung.',
  },
  {
    q: 'Werden meine Häkchen gespeichert?',
    a: 'Ja — Ihr Fortschritt wird lokal in Ihrem Browser gespeichert (LocalStorage). Beim nächsten Besuch sind die Häkchen wieder da. Es werden keine Daten an Server übertragen oder mit Dritten geteilt.',
  },
]

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaMarkup }}
      />
      <ChecklisteClient />

      <div className="bg-[#F8F7F5]">
        <div className="max-w-[720px] mx-auto px-5 pb-16">

          <section className="mb-12">
            <h2 className="text-[22px] font-bold text-[#3D3D3D] mb-3">
              Pflegeübernahme in 5 Phasen — der vollständige Überblick
            </h2>
            <p className="text-[15px] text-[#5A5A5A] leading-relaxed mb-6">
              Pflege übernehmen ist kein Sprint, sondern ein Marathon. Diese Checkliste teilt die Aufgaben
              in fünf logische Phasen — von akuter Soforthilfe bis zur dauerhaft stabilen Pflegesituation.
            </p>
            <div className="flex flex-col gap-3">
              {phasen.map((p) => (
                <div key={p.nr} className="bg-white border border-[#E5E3DF] rounded-xl px-5 py-4 flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-[#F2EDE6] text-[#8B7355] font-bold text-[14px] flex items-center justify-center flex-shrink-0">
                    {p.nr}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-3 mb-1">
                      <p className="text-[14px] font-bold text-[#3D3D3D]">{p.titel}</p>
                      <span className="text-[11px] font-bold text-[#A89279] whitespace-nowrap">{p.anzahl} Schritte</span>
                    </div>
                    <p className="text-[13px] text-[#5A5A5A] leading-relaxed">{p.focus}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-[22px] font-bold text-[#3D3D3D] mb-6">Häufige Fragen zur Pflegeübernahme</h2>
            <div className="flex flex-col gap-3">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="bg-white border border-[#E5E3DF] rounded-2xl overflow-hidden group"
                >
                  <summary className="px-5 py-4 flex items-center justify-between gap-3 cursor-pointer list-none select-none hover:bg-[#FDFCFA] transition-colors">
                    <span className="text-[14px] font-semibold text-[#3D3D3D] leading-snug">{faq.q}</span>
                    <span className="text-[#8B7355] text-[20px] flex-shrink-0 leading-none transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <div className="px-5 pb-4 pt-1 border-t border-[#F0EDE8]">
                    <p className="text-[13px] text-[#5A5A5A] leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-[18px] font-bold text-[#3D3D3D] mb-4">Vertiefende Themen</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/pflegegrad-beantragen/', label: 'Pflegegrad beantragen', desc: 'Schritt für Schritt zum Bescheid' },
                { href: '/burnout-pflegende-angehoerige/', label: 'Burnout vermeiden', desc: 'Strategien für pflegende Angehörige' },
                { href: '/pflegekraft-finden/', label: 'Pflegekraft finden', desc: 'Die richtige Betreuungskraft auswählen' },
                { href: '/pflegevertrag-generator/', label: 'Pflegevertrag erstellen', desc: 'Rechtssichere Vorlage' },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="bg-white border border-[#E5E3DF] rounded-xl px-4 py-3.5 hover:border-[#8B7355] transition-colors"
                >
                  <p className="text-[14px] font-semibold text-[#3D3D3D] mb-0.5">→ {item.label}</p>
                  <p className="text-[12px] text-[#8B8B8B]">{item.desc}</p>
                </a>
              ))}
            </div>
          </section>

        </div>
      </div>
    </>
  )
}
