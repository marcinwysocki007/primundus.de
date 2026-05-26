import type { Metadata } from 'next'
import PflegevertragClient from './PflegevertragClient'

export const metadata: Metadata = {
  title: 'Pflegevertrag-Generator 2026 — kostenlos | Primundus',
  description: 'Kostenlosen Pflegevertrag erstellen — in 5 Minuten. Für Pflege durch Angehörige, individuell anpassbar, sofort als PDF drucken.',
  alternates: {
    canonical: 'https://primundus.de/pflegevertrag-generator/',
  },
  openGraph: {
    title: 'Pflegevertrag-Generator 2026 — kostenlos | Primundus',
    description: 'Kostenlosen Pflegevertrag erstellen — in 5 Minuten. Für Pflege durch Angehörige, individuell anpassbar, sofort als PDF drucken.',
    url: 'https://primundus.de/pflegevertrag-generator/',
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
      { "@type": "ListItem", "position": 3, "name": "Pflegevertrag-Generator", "item": "https://primundus.de/pflegevertrag-generator/" },
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Brauche ich einen Pflegevertrag?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ein schriftlicher Pflegevertrag zwischen Pflegebedürftigen und pflegenden Angehörigen ist wichtig für die steuerliche Anerkennung der Pflegekosten und das Pflegegeld. Er regelt Leistungen, Vergütung und Kündigung transparent."
        }
      },
      {
        "@type": "Question",
        "name": "Kann ich den Pflegevertrag selbst erstellen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, ein Pflegevertrag kann formlos schriftlich geschlossen werden. Wichtig ist, dass Leistungsumfang, Vergütung und Kündigungsfristen klar geregelt sind — genau das macht dieser Generator."
        }
      },
      {
        "@type": "Question",
        "name": "Muss der Pflegevertrag vom Notar beglaubigt werden?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nein. Ein Pflegevertrag zwischen Angehörigen bedarf keiner notariellen Beglaubigung. Er sollte aber schriftlich und von beiden Parteien unterschrieben vorliegen."
        }
      }
    ]
  }
])

const infoCards = [
  {
    title: 'Vertragsparteien',
    desc: 'Vollständige Namen und Adressen beider Parteien — der pflegebedürftigen Person und der Pflegeperson.',
  },
  {
    title: 'Pflegeleistungen',
    desc: 'Konkreter Umfang der Leistungen: Was wird gepflegt, wie häufig und in welchem Rahmen.',
  },
  {
    title: 'Vergütung',
    desc: 'Vereinbarter Betrag (auch 0 € möglich), Zahlungstermin und Zahlungsweg.',
  },
  {
    title: 'Kündigung',
    desc: 'Frist und Form der Kündigung — schützt beide Seiten und schafft Planungssicherheit.',
  },
  {
    title: 'Aufwandsersatz',
    desc: 'Erstattung von Fahrtkosten und sonstigen Auslagen, die bei der Pflege entstehen.',
  },
]

const faqs = [
  {
    q: 'Brauche ich einen Pflegevertrag?',
    a: 'Ein schriftlicher Pflegevertrag zwischen Pflegebedürftigen und pflegenden Angehörigen ist wichtig für die steuerliche Anerkennung der Pflegekosten und das Pflegegeld. Er regelt Leistungen, Vergütung und Kündigung transparent.',
  },
  {
    q: 'Kann ich den Pflegevertrag selbst erstellen?',
    a: 'Ja, ein Pflegevertrag kann formlos schriftlich geschlossen werden. Wichtig ist, dass Leistungsumfang, Vergütung und Kündigungsfristen klar geregelt sind — genau das macht dieser Generator.',
  },
  {
    q: 'Muss der Pflegevertrag vom Notar beglaubigt werden?',
    a: 'Nein. Ein Pflegevertrag zwischen Angehörigen bedarf keiner notariellen Beglaubigung. Er sollte aber schriftlich und von beiden Parteien unterschrieben vorliegen.',
  },
]

const relatedTools = [
  { href: '/zuschuss-rechner/', label: 'Zuschuss-Rechner', desc: 'Alle Leistungen nach Pflegegrad berechnen' },
  { href: 'https://kostenrechner.primundus.de', label: '24h-Kosten berechnen', desc: 'Eigenanteil für 24h-Pflege sofort sehen', external: true },
  { href: '/vollmacht-generator/', label: 'Vollmacht-Generator', desc: 'Vorsorgevollmacht erstellen und drucken' },
  { href: '/pflegegeld/', label: 'Pflegegeld-Übersicht', desc: 'Alle Pflegegeld-Beträge 2026 auf einen Blick' },
]

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaMarkup }}
      />
      <PflegevertragClient />

      {/* SEO Content Section */}
      <div className="bg-[#F8F7F5]">
        <div className="max-w-[720px] mx-auto px-5 pb-16">

          {/* Was gehört in einen Pflegevertrag */}
          <section className="mb-12">
            <h2 className="text-[22px] font-bold text-[#3D3D3D] mb-3">
              Was gehört in einen Pflegevertrag?
            </h2>
            <p className="text-[15px] text-[#5A5A5A] leading-relaxed mb-6">
              Ein rechtssicherer Pflegevertrag zwischen Angehörigen regelt alle wesentlichen Punkte
              der Pflegebeziehung schriftlich. Das schützt beide Seiten und ist Voraussetzung für
              die steuerliche Anerkennung der Pflegekosten. Diese fünf Elemente sollte jeder
              Pflegevertrag enthalten:
            </p>
            <div className="flex flex-col gap-3">
              {infoCards.map((card) => (
                <div key={card.title} className="bg-white border border-[#E5E3DF] rounded-xl px-5 py-4">
                  <p className="text-[14px] font-bold text-[#3D3D3D] mb-1">{card.title}</p>
                  <p className="text-[13px] text-[#5A5A5A] leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-[22px] font-bold text-[#3D3D3D] mb-6">
              Häufige Fragen zum Pflegevertrag
            </h2>
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

          {/* Related tools */}
          <section>
            <h2 className="text-[18px] font-bold text-[#3D3D3D] mb-4">Weitere Tools & Rechner</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {relatedTools.map((item) => (
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
