import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { AuthorByline } from '@/components/AuthorByline'

const SECTIONS = [{ id: 'grundsatz', title: 'Was gilt?' }, { id: 'praxis', title: 'Praktische Regeln' }, { id: 'rechte', title: 'Rechte der Betreuten' }, { id: 'faq', title: 'Häufige Fragen' }]

export const metadata: Metadata = {
  title: 'Datenschutz in der Pflegesituation — was Familien wissen müssen | Primundus',
  description: 'Datenschutz in der Pflege: Was darf die Kraft, was darf die Agentur, welche Rechte haben Pflegebedürftige? Praxistipps.',
  alternates: { canonical: 'https://primundus.de/datenschutz-pflegesituation' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Datenschutz Pflege',
    description: 'Datenschutz in der Pflege: Was darf die Kraft, was darf die Agentur, welche Rechte haben Pflegebedürftige? Praxistipps.',
    url: 'https://primundus.de/datenschutz-pflegesituation',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Datenschutz in der Pflegesituation — Rechte und Pflichten',
    author: { '@type': 'Person', name: 'Marta Kapcio', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-30',
    dateModified: '2026-04-30',
    mainEntityOfPage: 'https://primundus.de/datenschutz-pflegesituation',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://primundus.de/rechtliches' },
      { '@type': 'ListItem', position: 3, name: 'Datenschutz Pflege', item: 'https://primundus.de/datenschutz-pflegesituation' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was darf die Betreuungskraft über den Pflegebedürftigen wissen?', acceptedAnswer: { '@type': 'Answer', text: 'Gesundheitsinformationen die für die Pflege nötig sind, Tagesablauf, Medikamente. Keine Finanzdaten außer wenn für Einkäufe nötig.' } },
      { '@type': 'Question', name: 'Darf die Agentur Daten weitergeben?', acceptedAnswer: { '@type': 'Answer', text: 'Nein — ohne Einwilligung dürfen keine persönlichen Daten an Dritte weitergegeben werden. DSGVO gilt.' } }
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
          <nav className="h-[24px] text-sm text-pm-mute mb-6 flex items-center gap-2">
            <a href="/" className="hover:text-pm-taupe transition-colors">Startseite</a>
            <span>›</span>
            <a href="/rechtliches" className="hover:text-pm-taupe transition-colors">Ratgeber</a>
            <span>›</span>
            <span className="text-pm-ink">Datenschutz Pflege</span>
          </nav>
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-pm-taupe-light mb-4">Rechtliches · 4 Min</p>
          <h1 className="text-h1 md:text-h1-lg font-bold text-pm-ink mb-6">Datenschutz in der Pflegesituation — Rechte und Pflichten</h1>

          <AuthorByline updated="30. April 2026" />
          <p className="text-[17px] md:text-[19px] leading-relaxed text-pm-body mb-10 font-medium">Eine Betreuungskraft hat Zugang zu sensiblen Informationen: Gesundheitsdaten, Bankdaten, persönliche Unterlagen. Dieser Ratgeber erklärt was erlaubt ist und was nicht.</p>
          <h2 id="grundsatz" className="text-[24px] md:text-[30px] font-bold text-pm-ink mt-10 mb-4 leading-snug">Was gilt?</h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-4">Dieser Ratgeber gibt Ihnen einen kompakten Überblick über das Thema — praxisnah und auf die Situation pflegender Familien zugeschnitten.</p>
          <h2 id="praxis" className="text-[24px] md:text-[30px] font-bold text-pm-ink mt-10 mb-4 leading-snug">Praktische Regeln</h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-4">Die wichtigsten Informationen für Ihren Alltag mit Pflege: Was konkret zu tun ist, worauf man achten sollte und wie Primundus unterstützen kann.</p>
          <h2 id="rechte" className="text-[24px] md:text-[30px] font-bold text-pm-ink mt-10 mb-4 leading-snug">Rechte der Betreuten</h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-4">Wenn Sie unsicher sind wie Sie vorgehen sollen — sprechen Sie mit uns. Primundus berät kostenlos und ehrlich: 089 200 000 830.</p>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-pm-ink mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            <details className="bg-white rounded-xl border border-pm-line group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-pm-ink pr-4">Was darf die Betreuungskraft über den Pflegebedürftigen wissen?</h3>
                <span className="text-pm-taupe font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-pm-body leading-relaxed">Gesundheitsinformationen die für die Pflege nötig sind, Tagesablauf, Medikamente. Keine Finanzdaten außer wenn für Einkäufe nötig.</p></div>
            </details>
            <details className="bg-white rounded-xl border border-pm-line group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-pm-ink pr-4">Darf die Agentur Daten weitergeben?</h3>
                <span className="text-pm-taupe font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-pm-body leading-relaxed">Nein — ohne Einwilligung dürfen keine persönlichen Daten an Dritte weitergegeben werden. DSGVO gilt.</p></div>
            </details>
          </div>
          <ArticleCTA />
        </div>
      </div>
    </>
  )
}
