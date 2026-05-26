import type { Metadata } from 'next'
import { ZuschussRechnerClient } from './ZuschussRechnerClient'

export const metadata: Metadata = {
  title: 'Pflegezuschüsse 2026 — alle Leistungen im Überblick | Primundus',
  description: 'Welche Zuschüsse stehen Ihnen zu? Pflegegrad wählen und sofort alle Leistungen 2026 sehen: Pflegegeld, Entlastungsbudget und Steuerabzug.',
  alternates: { canonical: 'https://primundus.de/zuschuss-rechner/' },
  openGraph: {
    title: 'Zuschuss & Förderung 2026 | Primundus',
    description: 'Alle Pflegeleistungen nach Pflegegrad — Pflegegeld, Entlastungsbudget, Steuerabzug. Eigenanteil für 24h-Pflege sofort berechnen.',
    url: 'https://primundus.de/zuschuss-rechner/',
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
      { '@type': 'ListItem', position: 3, name: 'Zuschuss & Förderung 2026', item: 'https://primundus.de/zuschuss-rechner/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was ist der Unterschied zwischen Pflegegeld und Sachleistung?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pflegegeld erhalten Sie als Geldbetrag direkt ausgezahlt — wenn Sie die Pflege durch Angehörige oder eine Privatperson organisieren. Sachleistungen hingegen sind Geldbeträge, die direkt an einen zugelassenen Pflegedienst gezahlt werden. Bei einer 24h-Betreuungskraft kombinieren viele Familien Pflegegeld (Angehörige bleiben Hauptpflegeperson) mit privaten Betreuungsleistungen.',
        },
      },
      {
        '@type': 'Question',
        name: 'Was ändert sich beim Entlastungsbudget ab Juli 2025?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ab Juli 2025 werden Verhinderungspflege und Kurzzeitpflege zum Entlastungsbudget zusammengeführt. Ab Pflegegrad 2 stehen 3.539 €/Jahr flexibel für beide Leistungsarten zur Verfügung — deutlich mehr Gestaltungsfreiheit als vorher.',
        },
      },
      {
        '@type': 'Question',
        name: 'Kann ich Pflegegeld und eine 24h-Betreuungskraft gleichzeitig haben?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ja. Das Pflegegeld wird weiterhin ausgezahlt, solange Angehörige als Hauptpflegepersonen bei der Pflegekasse anerkannt sind. Die 24h-Betreuungskraft übernimmt die Alltagsbegleitung und Betreuung, während Angehörige die pflegerische Verantwortung tragen.',
        },
      },
      {
        '@type': 'Question',
        name: 'Wie viel Steuern kann ich für Pflegekosten absetzen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '20 % der Aufwendungen für haushaltsnahe Dienstleistungen und Pflege können direkt von der Steuerschuld abgezogen werden — bis zu 4.000 €/Jahr. Das entspricht bei Pflegekosten von 20.000 €/Jahr einer Steuerersparnis von bis zu 4.000 €, also ca. 333 €/Monat.',
        },
      },
    ],
  },
])

const leistungen = [
  {
    name: 'Pflegegeld',
    beschreibung: 'Direktzahlung an die Familie — für Pflege durch Angehörige oder Privatpersonen. Auch bei 24h-Betreuungskraft kombinierbar, wenn Angehörige Hauptpflegepersonen bleiben.',
    ab: 'Pflegegrad 2',
    max: '990 €/Monat (PG 5)',
  },
  {
    name: 'Entlastungsbetrag',
    beschreibung: 'Für alle Pflegegrade: 131 €/Monat für Betreuungs- und Entlastungsleistungen. Nicht kombinierbar, aber separat zur anderen Förderung.',
    ab: 'Pflegegrad 1',
    max: '131 €/Monat',
  },
  {
    name: 'Entlastungsbudget (ab Juli 2025)',
    beschreibung: 'Zusammenführung von Verhinderungspflege und Kurzzeitpflege zu einem flexiblen Jahresbudget — z.B. für Vertretungskräfte im Urlaub der Betreuungskraft.',
    ab: 'Pflegegrad 2',
    max: '3.539 €/Jahr',
  },
  {
    name: 'Steuerabzug',
    beschreibung: '20 % der Pflegekosten können direkt von der Steuerschuld abgezogen werden (§ 35a EStG) — max. 4.000 €/Jahr Ersparnis, also ca. 333 €/Monat.',
    ab: 'Alle Pflegegrade',
    max: 'bis 4.000 €/Jahr',
  },
  {
    name: 'Pflegehilfsmittel',
    beschreibung: 'Monatliches Budget für Verbrauchsmaterialien: Einmalhandschuhe, Desinfektionsmittel, Bettschutz u.ä. Direkt von der Pflegekasse bezuschusst.',
    ab: 'Pflegegrad 1',
    max: '42 €/Monat',
  },
  {
    name: 'Wohnraumanpassung',
    beschreibung: 'Einmaliger Zuschuss für barrierefreien Umbau: Badumbau, Treppenlift, Türverbreiterung. Pro Maßnahme, mehrfach nutzbar.',
    ab: 'Pflegegrad 1',
    max: 'bis 4.180 €/Maßnahme',
  },
]

const zuschussFaqs = [
  {
    q: 'Was ist der Unterschied zwischen Pflegegeld und Sachleistung?',
    a: 'Pflegegeld erhalten Sie als Direktzahlung — wenn Angehörige oder Privatpersonen pflegen. Sachleistungen gehen direkt an zugelassene Pflegedienste. Bei einer 24h-Betreuungskraft kombinieren viele Familien Pflegegeld (Angehörige bleiben Hauptpflegeperson) mit den privaten Betreuungsleistungen.',
  },
  {
    q: 'Was ändert sich beim Entlastungsbudget ab Juli 2025?',
    a: 'Verhinderungspflege und Kurzzeitpflege werden zu einem gemeinsamen Entlastungsbudget (3.539 €/Jahr ab PG 2) zusammengeführt. Das Budget kann flexibel auf beide Leistungen aufgeteilt werden.',
  },
  {
    q: 'Kann ich Pflegegeld und eine 24h-Betreuungskraft gleichzeitig haben?',
    a: 'Ja. Das Pflegegeld wird weiter ausgezahlt, solange Angehörige als Hauptpflegepersonen bei der Pflegekasse anerkannt sind. Die 24h-Betreuungskraft übernimmt Alltagsbegleitung und Betreuung.',
  },
  {
    q: 'Wie viel Steuern kann ich für Pflegekosten absetzen?',
    a: '20 % der Aufwendungen für haushaltsnahe Dienstleistungen und Pflege können direkt von der Steuerschuld abgezogen werden (§ 35a EStG) — maximal 4.000 €/Jahr, also ca. 333 €/Monat.',
  },
]

export default function ZuschussRechnerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaMarkup }}
      />
      <ZuschussRechnerClient />

      {/* SEO Content Section */}
      <div className="bg-[#F8F7F5]">
        <div className="max-w-[720px] mx-auto px-5 pb-16">

          {/* Leistungsübersicht */}
          <section className="mb-12">
            <h2 className="text-[22px] font-bold text-[#3D3D3D] mb-3">
              Alle Pflegeleistungen 2026 im Überblick
            </h2>
            <p className="text-[15px] text-[#5A5A5A] leading-relaxed mb-6">
              Die Pflegekasse leistet mehrere unabhängige Zuschüsse — viele davon können kombiniert werden.
              Hier ein Überblick über alle wichtigen Leistungen, die bei 24h-Pflege zuhause relevant sind.
            </p>
            <div className="flex flex-col gap-3">
              {leistungen.map((l) => (
                <div key={l.name} className="bg-white border border-[#E5E3DF] rounded-xl px-5 py-4">
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <p className="text-[14px] font-bold text-[#3D3D3D]">{l.name}</p>
                    <span className="text-[13px] font-bold text-[#3D7A5C] whitespace-nowrap">{l.max}</span>
                  </div>
                  <p className="text-[13px] text-[#5A5A5A] leading-relaxed mb-1">{l.beschreibung}</p>
                  <p className="text-[11px] text-[#A89279] font-semibold uppercase tracking-wide">Ab {l.ab}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-[22px] font-bold text-[#3D3D3D] mb-6">
              Häufige Fragen zu Zuschüssen & Förderung
            </h2>
            <div className="flex flex-col gap-3">
              {zuschussFaqs.map((faq) => (
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

          {/* Related tools */}
          <section>
            <h2 className="text-[18px] font-bold text-[#3D3D3D] mb-4">Weitere hilfreiche Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/pflegegrad-rechner/', label: 'Pflegegrad-Rechner', desc: 'Pflegebedarf in 3 Minuten einschätzen' },
                { href: 'https://kostenrechner.primundus.de', label: '24h-Kosten berechnen', desc: 'Eigenanteil individuell berechnen', external: true },
                { href: '/pflegeheim-kostenvergleich/', label: 'Pflegeheim-Vergleich', desc: 'Pflegeheim vs. 24h-Pflege im Vergleich' },
                { href: '/pflegegeld/', label: 'Pflegegeld-Übersicht', desc: 'Alle Beträge 2026 auf einen Blick' },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  {...('external' in item && item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
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
