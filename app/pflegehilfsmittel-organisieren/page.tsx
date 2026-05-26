import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [{ id: 'uebersicht', title: 'Übersicht Hilfsmittel' }, { id: 'technisch', title: 'Technische Hilfsmittel' }, { id: 'verbrauch', title: 'Verbrauchsprodukte' }, { id: 'faq', title: 'Häufige Fragen' }]

export const metadata: Metadata = {
  title: 'Pflegehilfsmittel organisieren & verwalten | Primundus',
  description: 'Alle Pflegehilfsmittel im Überblick: technische Hilfsmittel, Verbrauchsprodukte, wie man alles organisiert und was Betreuungskräfte brauchen.',
  alternates: { canonical: 'https://primundus.de/pflegehilfsmittel-organisieren/' },
  openGraph: {
    title: 'Pflegehilfsmittel organisieren',
    description: 'Alle Pflegehilfsmittel im Überblick: technische Hilfsmittel, Verbrauchsprodukte, wie man alles organisiert und was Betreuungskräfte brauchen.',
    url: 'https://primundus.de/pflegehilfsmittel-organisieren/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pflegehilfsmittel organisieren — was braucht man wirklich?',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    dateModified: '2026-04-30',
    mainEntityOfPage: 'https://primundus.de/pflegehilfsmittel-organisieren/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://primundus.de/ratgeber/' },
      { '@type': 'ListItem', position: 3, name: 'Pflegehilfsmittel organisieren', item: 'https://primundus.de/pflegehilfsmittel-organisieren/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Welche Pflegehilfsmittel sind am wichtigsten?', acceptedAnswer: { '@type': 'Answer', text: 'Rollator/Rollstuhl, Pflegebett, Badewannenlift, Haltegriffe — für Mobilität und Sicherheit. Dazu Verbrauchsprodukte (Einmalhandschuhe, Bettschutz) monatlich bis 42 €.' } },
      { '@type': 'Question', name: 'Was zahlt die Kasse, was muss selbst gezahlt werden?', acceptedAnswer: { '@type': 'Answer', text: 'Technische Hilfsmittel (Rollator, Rollstuhl): Kasse zahlt als Leihgabe oder Kauf. Verbrauchsprodukte: 42 €/Monat Pauschale. Wohnraumanpassung: bis 4.000 €/Maßnahme.' } }
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
            <a href="/ratgeber/" className="hover:text-[#8B7355] transition-colors">Ratgeber</a>
            <span>›</span>
            <span className="text-[#1C1C1C]">Pflegehilfsmittel organisieren</span>
          </nav>
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A89279] mb-4">Ratgeber · 4 Min</p>
          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">Pflegehilfsmittel organisieren — was braucht man wirklich?</h1>
          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-10 font-medium">Von Rollator bis Bettschutzeinlage: Wer den Überblick über Pflegehilfsmittel hat, spart Zeit, Geld und Nerven. Diese Liste hilft.</p>
          <h2 id="uebersicht" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">Übersicht Hilfsmittel</h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Dieser Ratgeber gibt Ihnen einen kompakten Überblick über das Thema — praxisnah und auf die Situation pflegender Familien zugeschnitten.</p>
          <h2 id="technisch" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">Technische Hilfsmittel</h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Die wichtigsten Informationen für Ihren Alltag mit Pflege: Was konkret zu tun ist, worauf man achten sollte und wie Primundus unterstützen kann.</p>
          <h2 id="verbrauch" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">Verbrauchsprodukte</h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Wenn Sie unsicher sind wie Sie vorgehen sollen — sprechen Sie mit uns. Primundus berät kostenlos und ehrlich: 089 200 000 830.</p>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            <details className="bg-white rounded-xl border border-[#E5E3DF] group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">Welche Pflegehilfsmittel sind am wichtigsten?</h3>
                <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-[#2E2E2E] leading-relaxed">Rollator/Rollstuhl, Pflegebett, Badewannenlift, Haltegriffe — für Mobilität und Sicherheit. Dazu Verbrauchsprodukte (Einmalhandschuhe, Bettschutz) monatlich bis 42 €.</p></div>
            </details>
            <details className="bg-white rounded-xl border border-[#E5E3DF] group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">Was zahlt die Kasse, was muss selbst gezahlt werden?</h3>
                <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-[#2E2E2E] leading-relaxed">Technische Hilfsmittel (Rollator, Rollstuhl): Kasse zahlt als Leihgabe oder Kauf. Verbrauchsprodukte: 42 €/Monat Pauschale. Wohnraumanpassung: bis 4.000 €/Maßnahme.</p></div>
            </details>
          </div>
          <ArticleCTA />
        </div>
      </div>
    </>
  )
}
