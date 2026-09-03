import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { AuthorByline } from '@/components/AuthorByline'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('pflegegrad-ohne-diagnose', '30. April 2026')

const SECTIONS = [{ id: 'grundsatz', title: 'Was bewertet der MD?' }, { id: 'diagnose', title: 'Wann hilft eine Diagnose?' }, { id: 'vorgehen', title: 'Wie vorgehen' }, { id: 'faq', title: 'Häufige Fragen' }]

export const metadata: Metadata = {
  title: 'Pflegegrad ohne Diagnose — geht das? | Primundus',
  description: 'Kann man einen Pflegegrad beantragen ohne offizielle Diagnose? Was der MD bewertet und warum eine Diagnose oft trotzdem hilfreich ist.',
  alternates: { canonical: 'https://primundus.de/pflegegrad-ohne-diagnose' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Pflegegrad ohne Diagnose',
    description: 'Kann man einen Pflegegrad beantragen ohne offizielle Diagnose? Was der MD bewertet und warum eine Diagnose oft trotzdem hilfreich ist.',
    url: 'https://primundus.de/pflegegrad-ohne-diagnose',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pflegegrad ohne Diagnose — was Sie wissen sollten',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-30',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/pflegegrad-ohne-diagnose',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://primundus.de/ratgeber' },
      { '@type': 'ListItem', position: 3, name: 'Pflegegrad ohne Diagnose', item: 'https://primundus.de/pflegegrad-ohne-diagnose' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Brauche ich eine Diagnose für einen Pflegegrad?', acceptedAnswer: { '@type': 'Answer', text: 'Nein — der MD bewertet konkrete Alltagsbeeinträchtigungen in 6 Modulen. Keine Diagnose nötig, aber ärztliche Berichte stützen die Begutachtung.' } },
      { '@type': 'Question', name: 'Was wenn der Arzt keine Diagnose stellt?', acceptedAnswer: { '@type': 'Answer', text: 'Trotzdem Antrag stellen. Der MD bewertet was die Person wirklich nicht mehr kann — unabhängig von der ärztlichen Diagnose.' } }
    ],
  },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      <ArticleProgressBar />
      <ArticleTOC sections={SECTIONS} />
      <div className="min-h-screen bg-pm-paper">
        <div className="max-w-article mx-auto px-5 py-10 md:py-16">
          <nav className="min-h-[24px] text-sm text-pm-mute mb-6 flex items-center gap-2 flex-wrap">
            <a href="/" className="hover:text-pm-taupe transition-colors">Startseite</a>
            <span>›</span>
            <a href="/ratgeber" className="hover:text-pm-taupe transition-colors">Ratgeber</a>
            <span>›</span>
            <span className="text-pm-ink">Pflegegrad ohne Diagnose</span>
          </nav>
          <p className="text-meta font-bold uppercase tracking-[0.1em] text-pm-taupe-light mb-4">Ratgeber · 4 Min</p>
          <h1 className="text-h1 md:text-h1-lg font-bold text-pm-ink mb-6">Pflegegrad ohne Diagnose — was Sie wissen sollten</h1>

          <AuthorByline updated={AKTUALISIERT.sichtbar} />
          <p className="text-[17px] md:text-[19px] leading-relaxed text-pm-body mb-10 font-medium">Viele fragen sich: Brauche ich eine Diagnose für einen Pflegegrad? Die kurze Antwort: Nein — der MD bewertet Alltagsbeeinträchtigungen, nicht Diagnosen. Aber eine Diagnose kann helfen.</p>
          <h2 id="grundsatz" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">Was bewertet der MD?</h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-4">Dieser Ratgeber gibt Ihnen einen kompakten Überblick über das Thema — praxisnah und auf die Situation pflegender Familien zugeschnitten.</p>
          <h2 id="diagnose" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">Wann hilft eine Diagnose?</h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-4">Die wichtigsten Informationen für Ihren Alltag mit Pflege: Was konkret zu tun ist, worauf man achten sollte und wie Primundus unterstützen kann.</p>
          <h2 id="vorgehen" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">Wie vorgehen</h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-4">Wenn Sie unsicher sind wie Sie vorgehen sollen — sprechen Sie mit uns. Primundus berät kostenlos und ehrlich: 089 200 000 830.</p>

          <h2 id="faq" className="text-h2 md:text-h2-lg font-bold text-pm-ink mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            <details className="bg-white rounded-xl border border-pm-line group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-pm-ink pr-4">Brauche ich eine Diagnose für einen Pflegegrad?</h3>
                <span className="text-pm-taupe font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-pm-body leading-relaxed">Nein — der MD bewertet konkrete Alltagsbeeinträchtigungen in 6 Modulen. Keine Diagnose nötig, aber ärztliche Berichte stützen die Begutachtung.</p></div>
            </details>
            <details className="bg-white rounded-xl border border-pm-line group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-pm-ink pr-4">Was wenn der Arzt keine Diagnose stellt?</h3>
                <span className="text-pm-taupe font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-pm-body leading-relaxed">Trotzdem Antrag stellen. Der MD bewertet was die Person wirklich nicht mehr kann — unabhängig von der ärztlichen Diagnose.</p></div>
            </details>
          </div>
          <Weiterlesen aktuell="pflegegrad-ohne-diagnose" />
          <ArticleCTA />
        </div>
      </div>
    </>
  )
}
