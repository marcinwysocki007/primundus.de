import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { AuthorByline } from '@/components/AuthorByline'

const SECTIONS = [{ id: 'konflikte', title: 'Typische Konflikte' }, { id: 'aufteilen', title: 'Wie aufteilen?' }, { id: 'externe-hilfe', title: 'Wann externe Hilfe?' }, { id: 'faq', title: 'Häufige Fragen' }]

export const metadata: Metadata = {
  title: 'Pflegeverantwortung unter Geschwistern aufteilen | Primundus',
  description: 'Wenn Geschwister sich die Pflege der Eltern aufteilen müssen: wie man faire Vereinbarungen trifft und Konflikte vermeidet.',
  alternates: { canonical: 'https://primundus.de/pflegeverantwortung-unter-geschwistern/' },
  openGraph: {
    title: 'Pflegeverantwortung Geschwister',
    description: 'Wenn Geschwister sich die Pflege der Eltern aufteilen müssen: wie man faire Vereinbarungen trifft und Konflikte vermeidet.',
    url: 'https://primundus.de/pflegeverantwortung-unter-geschwistern/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pflegeverantwortung unter Geschwistern — fair aufteilen ohne Streit',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-30',
    dateModified: '2026-04-30',
    mainEntityOfPage: 'https://primundus.de/pflegeverantwortung-unter-geschwistern/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://primundus.de/alltag/' },
      { '@type': 'ListItem', position: 3, name: 'Pflegeverantwortung unter Geschwistern', item: 'https://primundus.de/pflegeverantwortung-unter-geschwistern/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Wie teilt man Pflegeverantwortung fair auf?', acceptedAnswer: { '@type': 'Answer', text: 'Klare Aufgabenverteilung: wer übernimmt was (Arztbegleitung, Finanzen, Organisation, Besuche). Regelmäßige Gespräche. Schriftliche Vereinbarung empfehlenswert.' } },
      { '@type': 'Question', name: 'Was wenn Geschwister sich nicht einigen können?', acceptedAnswer: { '@type': 'Answer', text: 'Mediator einschalten (Sozialdienste, Pflegestützpunkt). Im Extremfall: Gericht kann Betreuung regeln.' } }
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
            <span className="text-[#1C1C1C]">Pflegeverantwortung unter Geschwistern</span>
          </nav>
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A89279] mb-4">Alltag · 5 Min</p>
          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">Pflegeverantwortung unter Geschwistern — fair aufteilen ohne Streit</h1>

          <AuthorByline updated="30. April 2026" />
          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-10 font-medium">Wenn Eltern Pflege brauchen, werden alte Geschwisterdynamiken aktiviert. Wer wohnt näher? Wer hat weniger gearbeitet? Dieser Ratgeber hilft faire Lösungen zu finden.</p>
          <h2 id="konflikte" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">Typische Konflikte</h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Dieser Ratgeber gibt Ihnen einen kompakten Überblick über das Thema — praxisnah und auf die Situation pflegender Familien zugeschnitten.</p>
          <h2 id="aufteilen" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">Wie aufteilen?</h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Die wichtigsten Informationen für Ihren Alltag mit Pflege: Was konkret zu tun ist, worauf man achten sollte und wie Primundus unterstützen kann.</p>
          <h2 id="externe-hilfe" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">Wann externe Hilfe?</h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Wenn Sie unsicher sind wie Sie vorgehen sollen — sprechen Sie mit uns. Primundus berät kostenlos und ehrlich: 089 200 000 830.</p>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            <details className="bg-white rounded-xl border border-[#E5E3DF] group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">Wie teilt man Pflegeverantwortung fair auf?</h3>
                <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-[#2E2E2E] leading-relaxed">Klare Aufgabenverteilung: wer übernimmt was (Arztbegleitung, Finanzen, Organisation, Besuche). Regelmäßige Gespräche. Schriftliche Vereinbarung empfehlenswert.</p></div>
            </details>
            <details className="bg-white rounded-xl border border-[#E5E3DF] group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">Was wenn Geschwister sich nicht einigen können?</h3>
                <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-[#2E2E2E] leading-relaxed">Mediator einschalten (Sozialdienste, Pflegestützpunkt). Im Extremfall: Gericht kann Betreuung regeln.</p></div>
            </details>
          </div>
          <ArticleCTA />
        </div>
      </div>
    </>
  )
}
