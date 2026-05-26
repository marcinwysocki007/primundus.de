import type { Metadata } from 'next'
import VollmachtClient from './VollmachtClient'

export const metadata: Metadata = {
  title: 'Vorsorgevollmacht-Generator 2026 — kostenlos | Primundus',
  description: 'Kostenlose Vorsorgevollmacht in 5 Minuten erstellen. Gesundheitssorge, Vermögen, Wohnung — individuell konfigurierbar, sofort als PDF drucken.',
  alternates: {
    canonical: 'https://primundus.de/vollmacht-generator/',
  },
  openGraph: {
    title: 'Vorsorgevollmacht-Generator 2026 — kostenlos | Primundus',
    description: 'Kostenlose Vorsorgevollmacht in 5 Minuten erstellen. Gesundheitssorge, Vermögen, Wohnung — individuell konfigurierbar, sofort als PDF drucken.',
    url: 'https://primundus.de/vollmacht-generator/',
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
      { "@type": "ListItem", "position": 3, "name": "Vorsorgevollmacht-Generator", "item": "https://primundus.de/vollmacht-generator/" },
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Was ist eine Vorsorgevollmacht?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Eine Vorsorgevollmacht ermächtigt eine Vertrauensperson, für Sie zu entscheiden, wenn Sie es selbst nicht mehr können — z.B. bei Krankheit oder Pflegebedürftigkeit. Sie regelt Gesundheitssorge, Vermögen, Wohnung und Behördenangelegenheiten."
        }
      },
      {
        "@type": "Question",
        "name": "Muss die Vorsorgevollmacht notariell beglaubigt werden?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Für die meisten Bereiche (Gesundheit, Aufenthalt) reicht eine handschriftlich unterschriebene Vollmacht. Für Immobilien oder Bankgeschäfte empfiehlt sich eine notarielle Beglaubigung."
        }
      },
      {
        "@type": "Question",
        "name": "Was ist der Unterschied zwischen Vorsorgevollmacht und Betreuungsverfügung?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Die Vorsorgevollmacht bevollmächtigt eine Person Ihrer Wahl. Ohne Vollmacht bestellt das Gericht einen gesetzlichen Betreuer — das kann auch ein Fremder sein. Die Vollmacht gibt Ihnen die Kontrolle darüber, wer entscheidet."
        }
      },
      {
        "@type": "Question",
        "name": "Ab wann gilt die Vorsorgevollmacht?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sie können wählen: Die Vollmacht kann sofort gelten (auch wenn Sie noch handlungsfähig sind) oder erst im Vorsorgefall (wenn Sie nicht mehr selbst entscheiden können). Für die meisten Bereiche empfiehlt sich 'sofort', da ein Nachweis der Handlungsunfähigkeit oft schwierig ist."
        }
      }
    ]
  }
])

const vollmachtBereiche = [
  {
    title: 'Gesundheitssorge',
    icon: '🏥',
    desc: 'Einwilligung in Behandlungen, Operationen und Krankenhausaufenthalte. Der Bevollmächtigte kann Ärzte und Therapeuten beauftragen und Patientenakten einsehen.',
  },
  {
    title: 'Aufenthaltsbestimmung',
    icon: '🏠',
    desc: 'Entscheidung über Wohnort, Aufnahme in ein Pflegeheim und sonstige Unterbringung — auch freiheitsentziehende Maßnahmen (mit Gerichtsgenehmigung).',
  },
  {
    title: 'Vermögenssorge',
    icon: '💼',
    desc: 'Verwaltung von beweglichem und unbeweglichem Eigentum. Abschluss und Kündigung von Verträgen, Geltendmachung von Forderungen und Begleichung von Verbindlichkeiten.',
  },
  {
    title: 'Bankgeschäfte',
    icon: '🏦',
    desc: 'Verfügung über Konten und Depots, Überweisungen, Kreditverträge. Für Bankgeschäfte wird eine notarielle Beglaubigung der Vollmacht empfohlen.',
  },
  {
    title: 'Wohnungsangelegenheiten',
    icon: '🔑',
    desc: 'Abschluss, Änderung und Kündigung von Mietverträgen. Entscheidung über Haushaltsauflösungen und alle Angelegenheiten gegenüber Vermietern und Hausverwaltungen.',
  },
  {
    title: 'Behördenangelegenheiten',
    icon: '📋',
    desc: 'Vertretung gegenüber Behörden, Ämtern, Sozialversicherungsträgern und Versicherungen. Antragstellung, Einlegung von Rechtsmitteln, Post entgegennehmen und öffnen.',
  },
]

const vollmachtFaqs = [
  {
    q: 'Was ist eine Vorsorgevollmacht?',
    a: 'Eine Vorsorgevollmacht ermächtigt eine Vertrauensperson, für Sie zu entscheiden, wenn Sie es selbst nicht mehr können — z.B. bei Krankheit oder Pflegebedürftigkeit. Sie regelt Gesundheitssorge, Vermögen, Wohnung und Behördenangelegenheiten.',
  },
  {
    q: 'Muss die Vorsorgevollmacht notariell beglaubigt werden?',
    a: 'Für die meisten Bereiche (Gesundheit, Aufenthalt) reicht eine handschriftlich unterschriebene Vollmacht. Für Immobilien oder Bankgeschäfte empfiehlt sich eine notarielle Beglaubigung. Die einfache Unterschrift reicht nicht mehr für Grundstücksgeschäfte oder bestimmte Bankverträge.',
  },
  {
    q: 'Was ist der Unterschied zwischen Vorsorgevollmacht und Betreuungsverfügung?',
    a: 'Die Vorsorgevollmacht bevollmächtigt eine Person Ihrer Wahl. Ohne Vollmacht bestellt das Gericht einen gesetzlichen Betreuer — das kann auch ein Fremder sein. Die Vollmacht gibt Ihnen die Kontrolle darüber, wer entscheidet.',
  },
  {
    q: 'Ab wann gilt die Vorsorgevollmacht?',
    a: "Sie können wählen: Die Vollmacht kann sofort gelten (auch wenn Sie noch handlungsfähig sind) oder erst im Vorsorgefall (wenn Sie nicht mehr selbst entscheiden können). Für die meisten Bereiche empfiehlt sich 'sofort', da ein Nachweis der Handlungsunfähigkeit oft schwierig ist.",
  },
]

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaMarkup }}
      />
      <VollmachtClient />

      {/* SEO Content Section */}
      <div className="bg-[#F8F7F5]">
        <div className="max-w-[720px] mx-auto px-5 pb-16">

          {/* Was regelt eine Vorsorgevollmacht */}
          <section className="mb-12">
            <h2 className="text-[22px] font-bold text-[#3D3D3D] mb-3">
              Was regelt eine Vorsorgevollmacht?
            </h2>
            <p className="text-[15px] text-[#5A5A5A] leading-relaxed mb-6">
              Eine Vorsorgevollmacht kann für verschiedene Lebensbereiche gelten. Je nach Ihrer Situation
              können Sie einzelne Bereiche auswählen oder eine umfassende Vollmacht für alle Bereiche erteilen.
              Die folgende Übersicht zeigt, was jeder Bereich umfasst.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {vollmachtBereiche.map((item) => (
                <div key={item.title} className="bg-white border border-[#E5E3DF] rounded-xl px-5 py-4">
                  <p className="text-[14px] font-bold text-[#3D3D3D] mb-1 flex items-center gap-2">
                    <span>{item.icon}</span>
                    <span>{item.title}</span>
                  </p>
                  <p className="text-[13px] text-[#5A5A5A] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-[22px] font-bold text-[#3D3D3D] mb-6">
              Häufige Fragen zur Vorsorgevollmacht
            </h2>
            <div className="flex flex-col gap-3">
              {vollmachtFaqs.map((faq) => (
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

          {/* Related Tools */}
          <section>
            <h2 className="text-[18px] font-bold text-[#3D3D3D] mb-4">Weitere hilfreiche Tools & Ratgeber</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/pflegegrad-rechner/', label: 'Pflegegrad-Rechner', desc: 'Pflegebedarf selbst einschätzen — in 3 Minuten' },
                { href: '/pflegevertrag-generator/', label: 'Pflegevertrag-Generator', desc: 'Rechtssicheren Pflegevertrag kostenlos erstellen' },
                { href: 'https://kostenrechner.primundus.de', label: '24h-Kosten berechnen', desc: 'Eigenanteil für 24h-Pflege sofort sehen', external: true },
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
