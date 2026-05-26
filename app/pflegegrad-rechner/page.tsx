import type { Metadata } from 'next'
import PflegegradRechnerClient from './PflegegradRechnerClient'

export const metadata: Metadata = {
  title: 'Kostenloser Pflegegrad-Rechner 2026 | Primundus',
  description: 'Pflegebedarf selbst einschätzen — in 3 Minuten. Unser kostenloser Rechner gibt einen ersten Hinweis auf Ihren Pflegegrad vor der offiziellen Begutachtung.',
  alternates: {
    canonical: 'https://primundus.de/pflegegrad-rechner/',
  },
  openGraph: {
    title: 'Kostenloser Pflegegrad-Rechner 2026 | Primundus',
    description: 'Pflegebedarf selbst einschätzen — in 3 Minuten. Unser kostenloser Rechner gibt einen ersten Hinweis auf Ihren Pflegegrad vor der offiziellen Begutachtung.',
    url: 'https://primundus.de/pflegegrad-rechner/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: '/images/primundus_logo_header.webp' }],
  },
}

const schemaMarkup = JSON.stringify([
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://primundus.de/" },
      { "@type": "ListItem", "position": 2, "name": "Tools & Rechner", "item": "https://primundus.de/tools/" },
      { "@type": "ListItem", "position": 3, "name": "Pflegegrad-Rechner", "item": "https://primundus.de/pflegegrad-rechner/" },
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Wie genau ist der Pflegegrad-Rechner?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Der Rechner liefert eine erste Orientierung und ist keine offizielle Begutachtung. Das tatsächliche Ergebnis hängt von einer persönlichen Begutachtung durch den MDK oder MEDICPROOF ab."
        }
      },
      {
        "@type": "Question",
        "name": "Ab welchem Score wird ein Pflegegrad anerkannt?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ab Pflegegrad 1 besteht Anspruch auf Leistungen der Pflegekasse. Ab Pflegegrad 2 wird Pflegegeld ausgezahlt — für häusliche Pflege durch Angehörige."
        }
      },
      {
        "@type": "Question",
        "name": "Was kostet die Beantragung des Pflegegrads?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Die Beantragung ist kostenlos. Sie stellen einen formlosen Antrag bei Ihrer Pflegekasse, woraufhin ein Gutachter die Begutachtung vornimmt."
        }
      }
    ]
  }
])

const pflegegrade = [
  { pg: 1, title: 'Pflegegrad 1 — Geringe Beeinträchtigungen', desc: 'Ab PG 1 besteht Anspruch auf den Entlastungsbetrag (131 €/Monat). Kein Pflegegeld, aber Hilfsmittel und Wohnraumanpassungen werden bezuschusst.' },
  { pg: 2, title: 'Pflegegrad 2 — Erhebliche Beeinträchtigungen', desc: 'Ab PG 2 wird Pflegegeld (347 €/Monat) ausgezahlt. Zusätzlich stehen Sachleistungen, Kurzzeitpflege und das Entlastungsbudget zur Verfügung.' },
  { pg: 3, title: 'Pflegegrad 3 — Schwere Beeinträchtigungen', desc: 'PG 3 bedeutet 599 €/Monat Pflegegeld und erweiterte Leistungen. Bei 24h-Pflege zuhause sind Sachleistungen und Entlastungsbudget kombinierbar.' },
  { pg: 4, title: 'Pflegegrad 4 — Schwerste Beeinträchtigungen', desc: 'Ab PG 4 steigen alle Leistungen deutlich: 800 €/Monat Pflegegeld, höhere Sachleistungen, vollständiger Entlastungsbetrag.' },
  { pg: 5, title: 'Pflegegrad 5 — Besondere Anforderungen', desc: 'PG 5 ist die höchste Einstufung: 990 €/Monat Pflegegeld und maximale Sachleistungen. Häufig bei Demenz mit vollständiger Pflegebedürftigkeit.' },
]

const pgFaqs = [
  {
    q: 'Wie beantrage ich einen Pflegegrad offiziell?',
    a: 'Sie stellen einen formlosen schriftlichen Antrag bei Ihrer Pflegekasse. Danach beauftragt die Kasse den MDK (GKV) oder MEDICPROOF (PKV) mit einer Begutachtung — in der Regel innerhalb von 25 Arbeitstagen. Der Antrag ist kostenlos.',
  },
  {
    q: 'Kann der Pflegegrad rückwirkend anerkannt werden?',
    a: 'Ja. Der Pflegegrad gilt ab dem Monat der Antragstellung, nicht erst ab dem Begutachtungstermin. Deshalb lohnt es sich, den Antrag früh zu stellen — auch wenn das Gutachten noch aussteht.',
  },
  {
    q: 'Was passiert, wenn der MDK einen niedrigeren Pflegegrad feststellt?',
    a: 'Sie können Widerspruch einlegen — und zwar innerhalb von einem Monat nach dem Bescheid. Circa 40–50 % der Widersprüche führen zu einer Höherstufung. Eine gute Vorbereitung auf die Begutachtung ist entscheidend.',
  },
  {
    q: 'Was ist der Unterschied zwischen Pflegegrad und Pflegestufe?',
    a: 'Pflegestufen (0–3) wurden 2017 durch das neue System der Pflegegrade (1–5) abgelöst. Die Pflegegrade berücksichtigen neben körperlichen auch kognitive und psychische Einschränkungen — z.B. bei Demenz.',
  },
]

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaMarkup }}
      />
      <PflegegradRechnerClient />

      {/* SEO Content Section */}
      <div className="bg-[#F8F7F5]">
        <div className="max-w-[720px] mx-auto px-5 pb-16">

          {/* Was sind Pflegegrade */}
          <section className="mb-12">
            <h2 className="text-[22px] font-bold text-[#3D3D3D] mb-3">
              Was sind Pflegegrade? — Alle 5 Stufen erklärt
            </h2>
            <p className="text-[15px] text-[#5A5A5A] leading-relaxed mb-6">
              Pflegegrade bestimmen, welche Leistungen die Pflegekasse übernimmt. Die Einstufung erfolgt durch
              den MDK anhand von sechs Bereichen — von Mobilität über Kognition bis zur Selbstversorgung.
              Seit 2017 gibt es fünf Pflegegrade (PG 1–5), die körperliche und geistige Einschränkungen gleichwertig bewerten.
            </p>
            <div className="flex flex-col gap-3">
              {pflegegrade.map((item) => (
                <div key={item.pg} className="bg-white border border-[#E5E3DF] rounded-xl px-5 py-4">
                  <p className="text-[14px] font-bold text-[#3D3D3D] mb-1">{item.title}</p>
                  <p className="text-[13px] text-[#5A5A5A] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-[22px] font-bold text-[#3D3D3D] mb-6">
              Häufige Fragen zum Pflegegrad
            </h2>
            <div className="flex flex-col gap-3">
              {pgFaqs.map((faq) => (
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
            <h2 className="text-[18px] font-bold text-[#3D3D3D] mb-4">Nächste Schritte</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/zuschuss-rechner/', label: 'Zuschüsse berechnen', desc: 'Alle Leistungen nach Pflegegrad im Überblick' },
                { href: 'https://kostenrechner.primundus.de', label: '24h-Kosten berechnen', desc: 'Eigenanteil für 24h-Pflege sofort sehen', external: true },
                { href: '/pflegegrad-beantragen/', label: 'Pflegegrad beantragen', desc: 'Schritt-für-Schritt Anleitung' },
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
