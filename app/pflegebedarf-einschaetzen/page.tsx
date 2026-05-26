import type { Metadata } from 'next'
import { PflegebedarfClient } from './PflegebedarfClient'

export const metadata: Metadata = {
  title: 'Pflegebedarf einschätzen — kostenloser Self-Check | Primundus',
  description: 'In 3 Minuten den Pflegebedarf einschätzen. 20 Fragen aus 6 Bereichen — Sofort-Auswertung mit voraussichtlichem Pflegegrad und Empfehlung.',
  alternates: { canonical: 'https://primundus.de/pflegebedarf-einschaetzen/' },
  openGraph: {
    title: 'Pflegebedarf einschätzen — Self-Check 2026 | Primundus',
    description: '20 Fragen, sofort Auswertung: voraussichtlicher Pflegegrad + konkrete Empfehlung für die nächsten Schritte.',
    url: 'https://primundus.de/pflegebedarf-einschaetzen/',
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
      { '@type': 'ListItem', position: 3, name: 'Pflegebedarf einschätzen', item: 'https://primundus.de/pflegebedarf-einschaetzen/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Wie genau ist der Pflegebedarf-Check?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Der Self-Check liefert eine erste Orientierung anhand der gleichen sechs Bereiche, die auch der MDK in der Begutachtung bewertet. Die endgültige Pflegegrad-Einstufung erfolgt durch eine offizielle Begutachtung — der Self-Check ersetzt diese nicht, gibt aber in der Regel eine realistische Tendenz.',
        },
      },
      {
        '@type': 'Question',
        name: 'Welche sechs Bereiche werden bewertet?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Mobilität, kognitive Fähigkeiten, Verhaltensweisen, Selbstversorgung, Umgang mit krankheitsbedingten Anforderungen sowie Gestaltung des Alltags. Diese sechs Module bilden die Grundlage für die offizielle Pflegegrad-Einstufung nach § 14 SGB XI.',
        },
      },
      {
        '@type': 'Question',
        name: 'Was tun nach dem Self-Check?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Bei einem voraussichtlichen Pflegegrad von 2 oder höher empfiehlt sich umgehend ein formloser Antrag bei der Pflegekasse — denn der Pflegegrad gilt rückwirkend ab dem Monat der Antragstellung. Parallel können Sie ein unverbindliches Beratungsgespräch zu 24h-Pflege vereinbaren.',
        },
      },
      {
        '@type': 'Question',
        name: 'Wer sollte den Pflegegrad-Antrag stellen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Der Antrag wird durch die pflegebedürftige Person selbst oder durch eine bevollmächtigte Person (mit Vorsorgevollmacht) gestellt. Bei Demenz oder anderen kognitiven Einschränkungen sollten Angehörige rechtzeitig eine Vorsorgevollmacht einrichten — sonst ist eine gerichtliche Betreuung erforderlich.',
        },
      },
      {
        '@type': 'Question',
        name: 'Ab welchem Bedarf ist 24h-Pflege sinnvoll?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ab Pflegegrad 2 mit nächtlichem Betreuungsbedarf, beginnender Demenz oder erhöhtem Sturzrisiko ist eine 24h-Pflege oft die richtige Lösung. Ab Pflegegrad 3 ist sie meist deutlich wirtschaftlicher als ein Pflegeheim — bei gleichzeitig höherer Lebensqualität im vertrauten Zuhause.',
        },
      },
    ],
  },
])

const bereiche = [
  { name: 'Mobilität', desc: 'Aufstehen, Treppensteigen, Fortbewegung in der Wohnung — wie viel körperliche Hilfe ist nötig?' },
  { name: 'Kognition', desc: 'Orientierung, Entscheidungsfähigkeit, Kommunikation — wichtig bei Demenz und Schlaganfall.' },
  { name: 'Verhalten', desc: 'Unruhe, Aggression, Ängste, Niedergeschlagenheit — häufig bei demenziellen Erkrankungen.' },
  { name: 'Selbstversorgung', desc: 'Waschen, Anziehen, Toilette, Essen, Kontinenz — Kern der täglichen Pflege.' },
  { name: 'Medizinische Versorgung', desc: 'Medikamente, Arzttermine, Wundversorgung — Bedarf an Behandlungspflege.' },
  { name: 'Alltagsgestaltung', desc: 'Tagesstruktur, Haushalt, soziale Kontakte, Nachtbetreuung.' },
]

const faqs = [
  {
    q: 'Wie genau ist der Pflegebedarf-Check?',
    a: 'Der Self-Check liefert eine erste Orientierung anhand der sechs Module, die auch der MDK bewertet. Die endgültige Einstufung erfolgt durch eine offizielle Begutachtung — der Self-Check ersetzt diese nicht, gibt aber meist eine realistische Tendenz.',
  },
  {
    q: 'Welche sechs Bereiche werden bewertet?',
    a: 'Mobilität, kognitive Fähigkeiten, Verhaltensweisen, Selbstversorgung, Umgang mit krankheitsbedingten Anforderungen und Alltagsgestaltung. Diese Module sind in § 14 SGB XI als Grundlage der Pflegegrad-Einstufung verankert.',
  },
  {
    q: 'Was tun direkt nach dem Self-Check?',
    a: 'Bei voraussichtlichem Pflegegrad 2 oder höher: sofort einen formlosen Antrag bei der Pflegekasse stellen — der Pflegegrad gilt rückwirkend ab dem Antragsmonat. Parallel ein Beratungsgespräch zu 24h-Pflege vereinbaren.',
  },
  {
    q: 'Wer stellt den Pflegegrad-Antrag?',
    a: 'Die pflegebedürftige Person selbst oder eine bevollmächtigte Person mit Vorsorgevollmacht. Bei Demenz sollten Angehörige rechtzeitig eine Vorsorgevollmacht einrichten — sonst ist eine gerichtliche Betreuung notwendig.',
  },
  {
    q: 'Ab welchem Bedarf ist 24h-Pflege sinnvoll?',
    a: 'Ab PG 2 mit nächtlichem Betreuungsbedarf, beginnender Demenz oder Sturzrisiko ist 24h-Pflege oft die richtige Lösung. Ab PG 3 ist sie meist deutlich günstiger als ein Pflegeheim — bei höherer Lebensqualität.',
  },
  {
    q: 'Kostet der Self-Check etwas?',
    a: 'Nein. Der Self-Check ist kostenlos und ohne Anmeldung nutzbar. Es werden keine personenbezogenen Daten gespeichert — die Auswertung erfolgt direkt im Browser.',
  },
]

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaMarkup }}
      />
      <PflegebedarfClient />

      <div className="bg-[#F8F7F5]">
        <div className="max-w-[720px] mx-auto px-5 pb-16">

          <section className="mb-12">
            <h2 className="text-[22px] font-bold text-[#3D3D3D] mb-3">
              Die sechs Bereiche der Pflegebegutachtung
            </h2>
            <p className="text-[15px] text-[#5A5A5A] leading-relaxed mb-6">
              Seit der Pflegereform 2017 bewertet der Medizinische Dienst (MDK) den Pflegebedarf anhand
              von sechs gleichwertigen Modulen. Körperliche und kognitive Einschränkungen werden dabei
              gleich behandelt — wichtig vor allem für Menschen mit Demenz.
            </p>
            <div className="flex flex-col gap-3">
              {bereiche.map((b) => (
                <div key={b.name} className="bg-white border border-[#E5E3DF] rounded-xl px-5 py-4">
                  <p className="text-[14px] font-bold text-[#3D3D3D] mb-1">{b.name}</p>
                  <p className="text-[13px] text-[#5A5A5A] leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-[22px] font-bold text-[#3D3D3D] mb-6">Häufige Fragen zum Pflegebedarf</h2>
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
            <h2 className="text-[18px] font-bold text-[#3D3D3D] mb-4">Weitere hilfreiche Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/pflegegrad-rechner/', label: 'Pflegegrad-Rechner', desc: 'Detaillierte Pflegegrad-Einschätzung' },
                { href: '/zuschuss-rechner/', label: 'Zuschüsse berechnen', desc: 'Alle Leistungen nach Pflegegrad' },
                { href: 'https://kostenrechner.primundus.de', label: '24h-Kosten berechnen', desc: 'Eigenanteil sofort ermitteln', external: true },
                { href: '/pflegegrad-beantragen/', label: 'Pflegegrad beantragen', desc: 'Schritt-für-Schritt Anleitung' },
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
