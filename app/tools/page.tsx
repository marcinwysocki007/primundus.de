import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'

export const metadata: Metadata = {
  title: 'Kostenlose Pflege-Tools & Rechner 2026 für Angehörige | Primundus',
  description: 'Kostenloser Pflegegrad-Rechner, Zuschuss-Rechner und 24h-Pflegekostenrechner — alle Tools für Ihre Pflegeplanung 2026. Anonym, kostenlos, sofort nutzbar.',
  alternates: {
    canonical: 'https://primundus.de/tools/',
  },
  openGraph: {
    title: 'Kostenlose Pflege-Tools & Rechner 2026 für Angehörige | Primundus',
    description: 'Pflegegrad einschätzen, Zuschüsse berechnen, Kosten vergleichen — alle Werkzeuge für Ihre Pflegeplanung.',
    url: 'https://primundus.de/tools/',
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
      { '@type': 'ListItem', position: 2, name: 'Pflege-Tools & Rechner', item: 'https://primundus.de/tools/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Sind die Pflege-Tools wirklich kostenlos?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ja, alle Rechner auf dieser Seite sind vollständig kostenlos und ohne Registrierung nutzbar. Primundus stellt sie bereit, damit Angehörige sich schnell und unkompliziert orientieren können.',
        },
      },
      {
        '@type': 'Question',
        name: 'Wie genau ist der Pflegegrad-Rechner?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Der Pflegegrad-Rechner basiert auf den offiziellen Begutachtungskriterien des MDK und gibt eine realistische Orientierung vor der Antragstellung. Er ersetzt kein offizielles Gutachten.',
        },
      },
      {
        '@type': 'Question',
        name: 'Was kostet 24h-Pflege im Monat nach Abzug aller Zuschüsse?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Die Kosten für eine 24h-Betreuungskraft bei Primundus liegen zwischen 2.200 und 3.500 €/Monat. Nach Abzug von Pflegegeld, Entlastungsbudget und Steuervorteilen reduziert sich der Eigenanteil je nach Pflegegrad auf ca. 500 bis 1.800 €/Monat.',
        },
      },
      {
        '@type': 'Question',
        name: 'Kann ich gleichzeitig Pflegegeld und eine 24h-Betreuungskraft haben?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ja. Pflegegeld wird weiter ausgezahlt, solange Angehörige als Hauptpflegepersonen anerkannt sind — auch bei einer 24h-Betreuungskraft im Haushalt.',
        },
      },
    ],
  },
])

const gridTools = [
  {
    href: '/pflegegrad-rechner/',
    external: false,
    name: 'Pflegegrad-Rechner',
    description: 'Pflegebedarf selbst einschätzen — 15 Fragen, 3 Minuten. Gibt einen ersten Hinweis auf den Pflegegrad vor der offiziellen Begutachtung.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8B7355" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
        <rect x="9" y="3" width="6" height="4" rx="1" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    href: '/zuschuss-rechner/',
    external: false,
    name: 'Zuschuss & Förderung 2026',
    description: 'Pflegegrad wählen — alle Leistungen sofort sehen: Pflegegeld, Entlastungsbudget, Steuerabzug und Eigenanteil bei 24h-Pflege.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8B7355" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M14.5 8.5a3 3 0 0 0-5 2.5c0 2 3 3 3 5" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    href: '/pflegevertrag-generator/',
    external: false,
    name: 'Pflegevertrag-Generator',
    description: 'Rechtssicheren Pflegevertrag erstellen — individuell anpassbar, sofort zum Download.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8B7355" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    href: '/vollmacht-generator/',
    external: false,
    name: 'Vollmacht-Generator',
    description: 'Vorsorgevollmacht Schritt für Schritt erstellen — das wichtigste Vorsorgedokument, schnell und rechtssicher.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8B7355" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    href: '/anbieter-vergleich/',
    external: false,
    name: 'Anbieter-Vergleich',
    description: '24h-Pflege-Anbieter neutral vergleichen — Preise, Leistungen und Bewertungen auf einen Blick.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8B7355" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="8" y1="6" x2="21" y2="6" />
        <line x1="8" y1="12" x2="21" y2="12" />
        <line x1="8" y1="18" x2="21" y2="18" />
        <line x1="3" y1="6" x2="3.01" y2="6" />
        <line x1="3" y1="12" x2="3.01" y2="12" />
        <line x1="3" y1="18" x2="3.01" y2="18" />
      </svg>
    ),
  },
  {
    href: '/pflegeheim-kostenvergleich/',
    external: false,
    name: 'Pflegeheim-Kostenvergleich',
    description: 'Pflegeheim vs. 24h-Pflege im direkten Kostenvergleich — mit aktuellen Durchschnittswerten für alle Bundesländer.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8B7355" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
        <line x1="2" y1="20" x2="22" y2="20" />
      </svg>
    ),
  },
]

const steps = [
  { num: '1', title: 'Pflegegrad einschätzen', desc: 'Mit dem Pflegegrad-Rechner den Hilfebedarf ermitteln und vorbereitet in die Begutachtung gehen.' },
  { num: '2', title: 'Zuschüsse kennen', desc: 'Im Zuschuss-Rechner alle Leistungen nach Pflegegrad auf einen Blick — Pflegegeld, Entlastungsbudget, Steuerabzug.' },
  { num: '3', title: 'Kosten vergleichen', desc: '24h-Pflege zuhause vs. Pflegeheim — der Kostenvergleich zeigt oft: zuhause ist günstiger als erwartet.' },
  { num: '4', title: 'Persönliches Angebot', desc: 'Im 24h-Kostenrechner individuelle Kosten berechnen und direkt ein unverbindliches Angebot anfordern.' },
]

const faqs = [
  {
    q: 'Sind die Pflege-Tools wirklich kostenlos?',
    a: 'Ja, alle Rechner sind vollständig kostenlos und ohne Anmeldung nutzbar. Primundus stellt sie bereit, damit pflegende Angehörige sich schnell und unkompliziert orientieren können — ohne Verpflichtungen.',
  },
  {
    q: 'Wie genau ist der Pflegegrad-Rechner?',
    a: 'Der Rechner basiert auf den offiziellen Begutachtungskriterien des MDK (Neue Begutachtungsassessment, NBA) und gibt eine realistische Einschätzung. Er ersetzt jedoch kein offizielles Gutachten — die endgültige Einstufung erfolgt durch den MDK oder MEDICPROOF.',
  },
  {
    q: 'Was kostet 24h-Pflege nach Abzug aller Zuschüsse?',
    a: 'Bei Primundus liegen die Kosten zwischen 2.200 und 3.500 €/Monat. Nach Abzug von Pflegegeld, Entlastungsbudget und Steuervorteilen reduziert sich der Eigenanteil je nach Pflegegrad auf ca. 500 bis 1.800 €/Monat — oft günstiger als ein Pflegeheimplatz.',
  },
  {
    q: 'Kann ich gleichzeitig Pflegegeld und eine 24h-Betreuungskraft haben?',
    a: 'Ja. Das Pflegegeld wird weiter ausgezahlt, solange Angehörige als Hauptpflegepersonen anerkannt sind — auch wenn eine 24h-Betreuungskraft im Haushalt lebt. Zusätzlich kann das Entlastungsbudget für Vertretungskräfte genutzt werden.',
  },
]

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaMarkup }}
      />
      <div className="min-h-screen bg-[#F8F7F5]">
        <div className="max-w-[900px] mx-auto px-5 py-14">

          {/* Breadcrumb */}
          <nav className="text-sm text-[#8B8B8B] mb-8 flex items-center gap-2" aria-label="Breadcrumb">
            <a href="/" className="hover:text-[#8B7355] transition-colors">Startseite</a>
            <span aria-hidden="true">›</span>
            <span className="text-[#3D3D3D]">Tools & Rechner</span>
          </nav>

          {/* Header */}
          <p className="text-[11px] font-bold uppercase tracking-wider text-[#A89279] mb-3">
            TOOLS & RECHNER
          </p>
          <h1 className="text-[32px] md:text-[42px] font-bold text-[#3D3D3D] leading-tight mb-4">
            Kostenlose Pflege-Tools & Rechner 2026
          </h1>
          <p className="text-[17px] text-[#5A5A5A] leading-relaxed mb-10 max-w-[640px]">
            Mit diesen kostenlosen Werkzeugen planen Sie die häusliche Betreuung von A bis Z — Pflegegrad einschätzen,
            Zuschüsse berechnen und Kosten vergleichen. Anonym, ohne Registrierung, sofort nutzbar.
          </p>

          {/* Featured Hero Tool */}
          <a
            href="https://kostenrechner.primundus.de"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-[#2E2319] rounded-2xl p-6 md:p-8 mb-5 group no-underline"
          >
            <div className="flex flex-col md:flex-row gap-5 md:items-center">
              <div className="flex-1 min-w-0">
                <span className="inline-block bg-[#E76F63] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                  Meistgenutzt
                </span>
                <h2 className="text-[22px] md:text-[26px] font-bold text-white leading-snug mb-2">
                  24h-Pflegekosten berechnen
                </h2>
                <p className="text-[15px] text-[#C5B89E] leading-relaxed max-w-[480px]">
                  In 2 Minuten zum persönlichen Angebot — Gesamtkosten, mögliche Zuschüsse und passende
                  Pflegekräfte für Ihre Region sofort sehen.
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="inline-flex items-center gap-2 bg-[#E76F63] group-hover:bg-[#D45F53] transition-colors text-white font-bold text-[15px] px-6 py-3.5 rounded-xl">
                  Kosten berechnen →
                </span>
              </div>
            </div>
          </a>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
            {gridTools.map((tool) => (
              <div
                key={tool.href}
                className="bg-white border border-[#E5E3DF] rounded-2xl p-5 flex flex-col gap-4 hover:border-[#C5B89E] transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#F3EFE9] rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    {tool.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-[15px] font-bold text-[#3D3D3D] mb-1 leading-snug">
                      {tool.name}
                    </h2>
                    <p className="text-[13px] text-[#5A5A5A] leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                </div>
                <a
                  href={tool.href}
                  {...(tool.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="inline-flex items-center gap-1.5 self-start border border-[#C5B89E] hover:border-[#8B7355] hover:bg-[#F8F4EF] text-[#8B7355] text-[13px] font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  Jetzt nutzen →
                </a>
              </div>
            ))}
          </div>

          {/* Steps Section */}
          <section className="mb-14">
            <h2 className="text-[24px] font-bold text-[#3D3D3D] mb-2">
              Pflegeplanung in 4 Schritten
            </h2>
            <p className="text-[15px] text-[#5A5A5A] mb-8 max-w-[580px]">
              Diese Tools bauen aufeinander auf — so bekommen Sie in wenigen Minuten ein vollständiges Bild Ihrer Situation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {steps.map((step) => (
                <div key={step.num} className="bg-white border border-[#E5E3DF] rounded-2xl p-5 flex gap-4">
                  <div className="w-9 h-9 bg-[#F3EFE9] rounded-xl flex items-center justify-center flex-shrink-0 text-[16px] font-black text-[#8B7355]">
                    {step.num}
                  </div>
                  <div>
                    <p className="text-[14px] font-bold text-[#3D3D3D] mb-1">{step.title}</p>
                    <p className="text-[13px] text-[#5A5A5A] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-14">
            <h2 className="text-[24px] font-bold text-[#3D3D3D] mb-6">
              Häufige Fragen
            </h2>
            <div className="flex flex-col gap-3">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="bg-white border border-[#E5E3DF] rounded-2xl overflow-hidden group"
                >
                  <summary className="px-5 py-4 flex items-center justify-between gap-3 cursor-pointer list-none select-none hover:bg-[#FDFCFA] transition-colors">
                    <span className="text-[15px] font-semibold text-[#3D3D3D] leading-snug">
                      {faq.q}
                    </span>
                    <span className="text-[#8B7355] text-[20px] flex-shrink-0 leading-none transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <div className="px-5 pb-5 pt-1 border-t border-[#F0EDE8]">
                    <p className="text-[14px] text-[#5A5A5A] leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>

          <ArticleCTA />

        </div>
      </div>
    </>
  )
}
