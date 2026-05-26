import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [{ id: 'notfallplan', title: 'Notfallplan' }, { id: 'sturz', title: 'Bei einem Sturz' }, { id: 'notruf', title: 'Notruf richtig stellen' }, { id: 'faq', title: 'Häufige Fragen' }]

export const metadata: Metadata = {
  title: 'Erste Hilfe bei Pflegenotfall — was zu tun ist | Primundus',
  description: 'Was tun bei Sturz, Bewusstlosigkeit oder Herzprobleme in der Pflegesituation? Schritt-für-Schritt-Anleitung und Notfallplan.',
  alternates: { canonical: 'https://primundus.de/erste-hilfe-bei-pflegenotfall/' },
  openGraph: {
    title: 'Erste Hilfe Pflegenotfall',
    description: 'Was tun bei Sturz, Bewusstlosigkeit oder Herzprobleme in der Pflegesituation? Schritt-für-Schritt-Anleitung und Notfallplan.',
    url: 'https://primundus.de/erste-hilfe-bei-pflegenotfall/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Erste Hilfe bei Pflegenotfall — Schritt-für-Schritt',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    dateModified: '2026-04-30',
    mainEntityOfPage: 'https://primundus.de/erste-hilfe-bei-pflegenotfall/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://primundus.de/alltag/' },
      { '@type': 'ListItem', position: 3, name: 'Erste Hilfe Pflegenotfall', item: 'https://primundus.de/erste-hilfe-bei-pflegenotfall/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was tun wenn der Pflegebedürftige stürzt?', acceptedAnswer: { '@type': 'Answer', text: 'Ruhe bewahren, nicht hochheben wenn Verletzung möglich. Notruf 112 wenn Schmerzen, Bewusstseinsverlust oder Verdacht auf Fraktur. Erst Lagebericht, dann Hilfe.' } },
      { '@type': 'Question', name: 'Welche Nummer ist der Pflegenotruf?', acceptedAnswer: { '@type': 'Answer', text: 'Medizinischer Notfall: 112. Nicht-medizinische Krisen: Hausnotruf-Gerät, Primundus (089 200 000 830) für organisatorische Probleme.' } }
    ],
  },
]

export default function Page() {
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
            <a href="/alltag/" className="hover:text-[#8B7355] transition-colors">Ratgeber</a>
            <span>›</span>
            <span className="text-[#1C1C1C]">Erste Hilfe Pflegenotfall</span>
          </nav>
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A89279] mb-4">Ratgeber · 4 Min</p>
          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">Erste Hilfe bei Pflegenotfall — Schritt-für-Schritt</h1>
          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-10 font-medium">Ein Sturz, plötzliche Bewusstlosigkeit, Atemnot — in der Pflegesituation sind Notfälle keine Seltenheit. Eine 24h-Kraft die immer da ist kann im Ernstfall Leben retten.</p>
          <h2 id="notfallplan" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">Notfallplan</h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Dieser Ratgeber gibt Ihnen einen kompakten Überblick über das Thema — praxisnah und auf die Situation pflegender Familien zugeschnitten.</p>
          <h2 id="sturz" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">Bei einem Sturz</h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Die wichtigsten Informationen für Ihren Alltag mit Pflege: Was konkret zu tun ist, worauf man achten sollte und wie Primundus unterstützen kann.</p>
          <h2 id="notruf" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">Notruf richtig stellen</h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Wenn Sie unsicher sind wie Sie vorgehen sollen — sprechen Sie mit uns. Primundus berät kostenlos und ehrlich: 089 200 000 830.</p>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            <details className="bg-white rounded-xl border border-[#E5E3DF] group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">Was tun wenn der Pflegebedürftige stürzt?</h3>
                <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-[#2E2E2E] leading-relaxed">Ruhe bewahren, nicht hochheben wenn Verletzung möglich. Notruf 112 wenn Schmerzen, Bewusstseinsverlust oder Verdacht auf Fraktur. Erst Lagebericht, dann Hilfe.</p></div>
            </details>
            <details className="bg-white rounded-xl border border-[#E5E3DF] group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">Welche Nummer ist der Pflegenotruf?</h3>
                <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-[#2E2E2E] leading-relaxed">Medizinischer Notfall: 112. Nicht-medizinische Krisen: Hausnotruf-Gerät, Primundus (089 200 000 830) für organisatorische Probleme.</p></div>
            </details>
          </div>
          <ArticleCTA />
        </div>
      </div>
    </>
  )
}
