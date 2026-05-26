import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'

export const metadata: Metadata = {
  title: 'Ratgeber 24h-Pflege 2026 — alle Themen für Angehörige | Primundus',
  description: 'Alle Themen rund um 24-Stunden-Pflege: Pflegegrade, Finanzierung, Kosten, Rechtliches und Unterstützung für pflegende Angehörige. Aktuell 2026.',
  alternates: {
    canonical: 'https://primundus.de/ratgeber/',
  },
  openGraph: {
    title: 'Ratgeber 24h-Pflege | Primundus',
    description: 'Alle Themen rund um 24-Stunden-Pflege: Pflegegrade, Finanzierung, Organisation, Krankheiten, Alltag, Rechtliches und Unterstützung für Angehörige.',
    url: 'https://primundus.de/ratgeber/',
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
      { "@type": "ListItem", "position": 2, "name": "Ratgeber 24h-Pflege", "item": "https://primundus.de/ratgeber/" }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Was kostet eine 24-Stunden-Pflegekraft im Monat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Die Kosten für eine 24h-Pflegekraft liegen in Deutschland typischerweise zwischen 2.500 und 4.500 Euro pro Monat, abhängig von Pflegegrad, Leistungsumfang und Herkunftsland der Pflegekraft. Pflegegeld und andere Leistungen der Pflegekasse können die Eigenkosten deutlich reduzieren."
        }
      },
      {
        "@type": "Question",
        "name": "Welcher Pflegegrad ist für 24h-Pflege erforderlich?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Für 24h-Pflege gibt es keinen Mindest-Pflegegrad. In der Praxis kommt häufig ab Pflegegrad 3 eine Rund-um-die-Uhr-Betreuung in Betracht. Ab Pflegegrad 4 und 5 sind die Zuschüsse der Pflegekasse deutlich höher und decken einen größeren Teil der Kosten."
        }
      },
      {
        "@type": "Question",
        "name": "Wie finde ich eine seriöse 24h-Pflegeagentur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Seriöse Agenturen arbeiten transparent, stellen legal beschäftigte Pflegekräfte aus EU-Ländern und begleiten den gesamten Prozess von der Beratung bis zur Einarbeitung. Achten Sie auf klare Vertragsstrukturen, Qualifikationsnachweise der Pflegekräfte und erreichbare Ansprechpartner."
        }
      },
      {
        "@type": "Question",
        "name": "Kann ich 24h-Pflege steuerlich absetzen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, Kosten für haushaltsnahe Dienstleistungen und Pflege lassen sich teilweise von der Steuer absetzen. Bis zu 20 Prozent der Aufwendungen (maximal 4.000 Euro pro Jahr) können als haushaltsnahe Dienstleistung geltend gemacht werden. Bei anerkannter Pflegebedürftigkeit bestehen zusätzliche Abzugsmöglichkeiten."
        }
      },
      {
        "@type": "Question",
        "name": "Was ist der Unterschied zwischen Pflegegeld und Pflegesachleistung?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pflegegeld erhalten Pflegebedürftige als monatlichen Geldbetrag, wenn sie von Angehörigen oder privat organisierten Kräften gepflegt werden. Pflegesachleistungen werden direkt an zugelassene Pflegedienste ausgezahlt. Bei 24h-Pflegeagenturen kommt in der Regel das Pflegegeld zum Einsatz."
        }
      }
    ]
  }
])

const categories = [
  {
    href: '/pflegegrade/',
    title: 'Pflegegrade',
    description: 'Pflegegrad beantragen, erhöhen und verstehen',
    articles: [
      { label: 'Pflegegrad beantragen', href: '/pflegegrad-beantragen/' },
      { label: 'Pflegegrad erhöhen', href: '/pflegegrad-erhoehen/' },
      { label: 'Begutachtung vorbereiten', href: '/pflegegrad-begutachtung-vorbereiten/' },
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8B7355" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
        <rect x="9" y="3" width="6" height="4" rx="1" />
        <line x1="9" y1="12" x2="15" y2="12" />
        <line x1="9" y1="16" x2="13" y2="16" />
      </svg>
    ),
  },
  {
    href: '/finanzierung/',
    title: 'Finanzierung & Zuschüsse',
    description: 'Pflegegeld, Entlastungsbudget, Steuer & Sozialhilfe',
    articles: [
      { label: 'Pflegegeld', href: '/pflegegeld/' },
      { label: 'Entlastungsbetrag', href: '/entlastungsbetrag/' },
      { label: 'Steuerlich absetzen', href: '/pflege-steuerlich-absetzen/' },
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8B7355" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M14.5 9a2.5 2.5 0 0 0-5 0c0 1.5 1 2 2.5 2.5S15 13 15 14.5a2.5 2.5 0 0 1-5 0" />
        <line x1="12" y1="6.5" x2="12" y2="7.5" />
        <line x1="12" y1="16.5" x2="12" y2="17.5" />
      </svg>
    ),
  },
  {
    href: '/organisation/',
    title: 'Organisation',
    description: 'Pflegekraft finden, Vertrag, Wechsel & Alltag',
    articles: [
      { label: 'Pflegekraft finden', href: '/pflegekraft-finden/' },
      { label: 'Ablauf & Prozess', href: '/ablauf/' },
      { label: 'Pflegevertrag aufsetzen', href: '/pflegevertrag-aufsetzen/' },
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8B7355" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <line x1="8" y1="14" x2="10" y2="14" />
        <line x1="14" y1="14" x2="16" y2="14" />
        <line x1="8" y1="18" x2="10" y2="18" />
      </svg>
    ),
  },
  {
    href: '/krankheiten/',
    title: 'Pflege bei Krankheiten',
    description: 'Demenz, Alzheimer, Parkinson, Schlaganfall & mehr',
    articles: [
      { label: 'Demenz', href: '/demenz-pflege-zuhause/' },
      { label: 'Alzheimer', href: '/alzheimer-betreuung-zuhause/' },
      { label: 'Parkinson', href: '/parkinson-pflege-zuhause/' },
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8B7355" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        <line x1="12" y1="9" x2="12" y2="15" />
        <line x1="9" y1="12" x2="15" y2="12" />
      </svg>
    ),
  },
  {
    href: '/alltag/',
    title: 'Alltag & Betreuung',
    description: 'Bewegung, Ernährung, Beschäftigung & Sturzprävention',
    articles: [
      { label: 'Beschäftigung Senioren', href: '/beschaeftigung-senioren-zuhause/' },
      { label: 'Ernährung', href: '/ernaehrung-pflegebeduerftige-senioren/' },
      { label: 'Sturzprävention', href: '/sturzpraevention-senioren/' },
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8B7355" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9,22 9,12 15,12 15,22" />
      </svg>
    ),
  },
  {
    href: '/rechtliches/',
    title: 'Rechtliches & Vorsorge',
    description: 'Patientenverfügung, Vollmacht & rechtliche Absicherung',
    articles: [
      { label: 'Patientenverfügung', href: '/patientenverfuegung-aufsetzen/' },
      { label: 'Vorsorgevollmacht', href: '/vorsorgevollmacht-erstellen/' },
      { label: 'Betreuungsverfügung', href: '/betreuungsverfuegung-erstellen/' },
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8B7355" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9,12 11,14 15,10" />
      </svg>
    ),
  },
  {
    href: '/24h-pflege-fuer-angehoerige/',
    title: 'Für Angehörige',
    description: 'Pflege koordinieren, Belastung erkennen & Unterstützung finden',
    articles: [
      { label: 'Pflege und Beruf', href: '/pflege-und-beruf-vereinbaren/' },
      { label: 'Burnout Angehörige', href: '/burnout-pflegende-angehoerige/' },
      { label: 'Pflege aus der Ferne', href: '/pflege-aus-der-ferne-koordinieren/' },
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8B7355" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
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
          <nav className="text-[13px] text-[#8B8B8B] mb-8 flex items-center gap-2">
            <a href="/" className="hover:text-[#8B7355] transition-colors">Startseite</a>
            <span>›</span>
            <span className="text-[#5A5A5A]">Ratgeber</span>
          </nav>

          {/* Eyebrow + H1 + Intro */}
          <p className="text-[11px] font-bold uppercase tracking-widest text-[#A89279] mb-3">
            Ratgeber
          </p>
          <h1 className="text-[30px] md:text-[40px] font-bold text-[#3D3D3D] leading-tight mb-5">
            Ratgeber 24-Stunden-Pflege
          </h1>
          <p className="text-[17px] text-[#5A5A5A] leading-relaxed mb-12 max-w-[640px]">
            Fundierte Informationen zu allen Fragen rund um die 24h-Pflege zu Hause — von Pflegegraden und Finanzierung bis zu praktischen Tipps für Angehörige.
          </p>

          {/* Category Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {categories.map((cat) => (
              <div
                key={cat.href}
                className="bg-white border border-[#E5E3DF] rounded-2xl shadow-sm hover:shadow-md hover:border-[#C9B89A] transition-all p-6 flex flex-col"
              >
                {/* Card header */}
                <div className="flex items-start gap-3 mb-3">
                  <div className="mt-0.5 shrink-0">{cat.icon}</div>
                  <div>
                    <p className="text-[17px] font-bold text-[#3D3D3D] leading-snug">{cat.title}</p>
                    <p className="text-[13px] text-[#8B8B8B] mt-0.5 leading-snug">{cat.description}</p>
                  </div>
                </div>

                {/* Article links */}
                <ul className="flex flex-col gap-1.5 mt-2 mb-4">
                  {cat.articles.map((article) => (
                    <li key={article.href}>
                      <a
                        href={article.href}
                        className="text-[13px] text-[#5A5A5A] hover:text-[#8B7355] transition-colors"
                      >
                        › {article.label}
                      </a>
                    </li>
                  ))}
                </ul>

                {/* "Alle Artikel" link */}
                <div className="mt-auto flex justify-end">
                  <a
                    href={cat.href}
                    className="text-[13px] font-medium text-[#8B7355] hover:text-[#7D6848] transition-colors"
                  >
                    Alle Artikel →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Tools Teaser */}
          <div className="bg-[#F2ECE4] border border-[#DDD3C2] rounded-2xl px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-12">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#A89279] mb-1">Tools</p>
              <p className="text-[15px] font-semibold text-[#3D3D3D]">Kostenrechner, Pflegegrad-Rechner & mehr</p>
              <p className="text-[13px] text-[#5A5A5A] mt-0.5">Interaktive Rechner für Ihre Pflegesituation</p>
            </div>
            <a
              href="/tools/"
              className="shrink-0 inline-flex items-center gap-2 text-[14px] font-semibold text-[#8B7355] hover:text-[#7D6848] transition-colors whitespace-nowrap"
            >
              Zu den Tools →
            </a>
          </div>

          <ArticleCTA />

        </div>
      </div>
    </>
  )
}
