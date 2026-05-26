import type { Metadata } from 'next'
import { PflegeheimVergleichClient } from './PflegeheimVergleichClient'

export const metadata: Metadata = {
  title: 'Pflegeheim vs. 24h-Pflege Kostenvergleich 2026 | Primundus',
  description: 'Pflegeheim kostet 2026 im Schnitt 2.871 €/Monat Eigenanteil. 24h-Pflege zuhause oft günstiger — jetzt Kosten nach Pflegegrad und Bundesland vergleichen.',
  alternates: { canonical: 'https://primundus.de/pflegeheim-kostenvergleich/' },
  openGraph: {
    title: 'Pflegeheim vs. 24h-Pflege — Kostenvergleich 2026 | Primundus',
    description: 'Direkter Vergleich der Eigenanteile — Pflegegrad und Bundesland wählen, sofort sehen wie viel 24h-Pflege spart.',
    url: 'https://primundus.de/pflegeheim-kostenvergleich/',
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
      { '@type': 'ListItem', position: 3, name: 'Pflegeheim-Kostenvergleich', item: 'https://primundus.de/pflegeheim-kostenvergleich/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was kostet ein Pflegeheim 2026 im Monat?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Der durchschnittliche Eigenanteil im Pflegeheim liegt 2026 bei rund 2.871 €/Monat — bundesweit. In Bayern (≈ 3.389 €) und Baden-Württemberg (≈ 3.273 €) deutlich höher, in Sachsen-Anhalt und Thüringen (≈ 2.240 €) deutlich niedriger. Hinzu kommen pflegegradabhängige Pflegekosten zwischen 805 € (PG 2) und 2.096 € (PG 5).',
        },
      },
      {
        '@type': 'Question',
        name: 'Ist 24h-Pflege günstiger als ein Pflegeheim?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'In den meisten Fällen ja — vor allem ab Pflegegrad 3. Der durchschnittliche Eigenanteil bei 24h-Pflege zuhause liegt bei 1.500–2.500 €/Monat, bei einem Pflegeheim oft bei 2.700–3.500 €. Hochgerechnet sind das 8.000–12.000 € Ersparnis pro Jahr — bei gleichzeitig vertrautem Umfeld und persönlicher 1:1-Betreuung.',
        },
      },
      {
        '@type': 'Question',
        name: 'Warum sind Pflegeheime in Bayern und BW so teuer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Höhere Personal- und Tarifkosten, höhere Immobilienpreise sowie höhere Investitionskosten treiben den Eigenanteil in Bayern, Baden-Württemberg und Hamburg deutlich nach oben. In den neuen Bundesländern ist das Lohnniveau im Pflegesektor niedriger — die Eigenanteile entsprechend geringer.',
        },
      },
      {
        '@type': 'Question',
        name: 'Was ist der einrichtungseinheitliche Eigenanteil (EEE)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Seit 2017 zahlen alle Bewohner einer stationären Pflegeeinrichtung — unabhängig vom Pflegegrad — denselben Eigenanteil für die Pflegekosten. Die Pflegeversicherung übernimmt nur einen fixen Sachleistungsanteil pro Pflegegrad. Der EEE wird durch Pflegekassenzuschläge (5–75 % je nach Verweildauer) gemindert.',
        },
      },
      {
        '@type': 'Question',
        name: 'Welche versteckten Kosten gibt es im Pflegeheim?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Zusätzlich zum Eigenanteil können anfallen: Friseur, Fußpflege, Wäscheservice (oft pauschal 50–80 €/Monat), Bewohnerkonto-Gebühren, Therapien (Ergo, Physio), Mahlzeiten für Besucher sowie Komfortleistungen wie Telefon oder TV. In Summe oft 200–400 €/Monat zusätzlich.',
        },
      },
    ],
  },
])

const argumente = [
  {
    name: '1:1-Betreuung',
    desc: 'Im Pflegeheim teilt sich eine Pflegekraft im Schnitt 8–12 Bewohner. Bei 24h-Pflege zuhause ist die Betreuungskraft ausschließlich für eine Person da — mit allem, was an Aufmerksamkeit, Geduld und persönlicher Zuwendung möglich ist.',
  },
  {
    name: 'Vertrautes Umfeld',
    desc: 'Studien zeigen: bei Demenz verschlechtert sich der Zustand nach einem Umzug ins Pflegeheim oft deutlich. Im eigenen Zuhause bleiben Erinnerungsstützen, Tagesabläufe und das soziale Umfeld erhalten — das stabilisiert messbar.',
  },
  {
    name: 'Flexibilität',
    desc: 'Aufstehen, Essen, Spaziergänge — die Tagesstruktur richtet sich nach der pflegebedürftigen Person, nicht nach dem Schichtplan einer Einrichtung. Besuche durch Angehörige sind jederzeit ohne Anmeldung möglich.',
  },
  {
    name: 'Pflegegeld bleibt erhalten',
    desc: 'Bei 24h-Pflege bleiben Angehörige Hauptpflegeperson — das Pflegegeld wird (anteilig oder voll) weiter ausgezahlt. Im Pflegeheim entfällt das Pflegegeld komplett.',
  },
  {
    name: 'Keine Wartelisten',
    desc: 'In Ballungsräumen wie München, Hamburg oder Berlin gibt es teils 12+ Monate Wartezeit auf einen Heimplatz. Eine 24h-Pflege ist innerhalb von 1–2 Wochen organisierbar.',
  },
]

const faqs = [
  {
    q: 'Was kostet ein Pflegeheim 2026 im Monat?',
    a: 'Bundesweit im Schnitt 2.871 € Eigenanteil/Monat. In Bayern (≈ 3.389 €) und BW (≈ 3.273 €) deutlich höher, in Sachsen-Anhalt und Thüringen (≈ 2.240 €) deutlich niedriger. Hinzu kommen pflegegradabhängige Pflegekosten von 805–2.096 €.',
  },
  {
    q: 'Ist 24h-Pflege günstiger als ein Pflegeheim?',
    a: 'In den meisten Fällen ja — vor allem ab PG 3. Eigenanteil 24h-Pflege: 1.500–2.500 €/Monat, Pflegeheim: 2.700–3.500 €. Hochgerechnet 8.000–12.000 € Ersparnis pro Jahr.',
  },
  {
    q: 'Warum sind Pflegeheime in Bayern und BW so teuer?',
    a: 'Höhere Personal- und Tarifkosten, höhere Immobilienpreise, höhere Investitionskosten. In den neuen Bundesländern ist das Lohnniveau im Pflegesektor niedriger — entsprechend geringere Eigenanteile.',
  },
  {
    q: 'Was ist der einrichtungseinheitliche Eigenanteil (EEE)?',
    a: 'Seit 2017 zahlen alle Bewohner einer Einrichtung — unabhängig vom Pflegegrad — denselben Eigenanteil für die Pflegekosten. Pflegekassenzuschläge mindern den EEE je nach Verweildauer um 5–75 %.',
  },
  {
    q: 'Welche versteckten Kosten gibt es im Pflegeheim?',
    a: 'Friseur, Fußpflege, Wäscheservice (50–80 €/Mo), Bewohnerkonto-Gebühren, Therapien, Telefon/TV. Summe oft 200–400 €/Monat zusätzlich.',
  },
  {
    q: 'Was ist mit medizinischer Versorgung bei 24h-Pflege?',
    a: 'Hausarzt-Besuche, Behandlungspflege (Insulin, Verbände) übernimmt ein ambulanter Pflegedienst — komplett über die Krankenkasse abgerechnet. Die Betreuungskraft übernimmt Grundpflege, Haushalt und Begleitung.',
  },
]

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaMarkup }}
      />
      <PflegeheimVergleichClient />

      <div className="bg-[#F8F7F5]">
        <div className="max-w-[720px] mx-auto px-5 pb-16">

          <section className="mb-12">
            <h2 className="text-[22px] font-bold text-[#3D3D3D] mb-3">
              5 Gründe, warum 24h-Pflege oft die bessere Wahl ist
            </h2>
            <p className="text-[15px] text-[#5A5A5A] leading-relaxed mb-6">
              Neben dem reinen Kostenvergleich gibt es Argumente, die sich nicht in Zahlen ausdrücken lassen.
              Hier die wichtigsten:
            </p>
            <div className="flex flex-col gap-3">
              {argumente.map((a) => (
                <div key={a.name} className="bg-white border border-[#E5E3DF] rounded-xl px-5 py-4">
                  <p className="text-[14px] font-bold text-[#3D3D3D] mb-1">{a.name}</p>
                  <p className="text-[13px] text-[#5A5A5A] leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-[22px] font-bold text-[#3D3D3D] mb-6">Häufige Fragen zum Kostenvergleich</h2>
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
            <h2 className="text-[18px] font-bold text-[#3D3D3D] mb-4">Vertiefende Vergleiche</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/24h-pflege-vs-pflegeheim/', label: '24h-Pflege vs. Pflegeheim', desc: 'Detaillierter Vergleich mit allen Vor- und Nachteilen' },
                { href: '/24h-pflege-vs-pflegeheim-kosten/', label: 'Kosten im Detail', desc: 'Tiefer Einblick in Kostenstrukturen' },
                { href: '/pflegeheim-kosten-deutschland/', label: 'Pflegeheim-Kosten nach Region', desc: 'Eigenanteile in allen Bundesländern' },
                { href: 'https://kostenrechner.primundus.de', label: '24h-Kosten berechnen', desc: 'Eigenanteil individuell ermitteln', external: true },
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
