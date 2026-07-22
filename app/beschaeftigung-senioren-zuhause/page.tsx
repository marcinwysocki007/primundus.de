import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { AuthorByline } from '@/components/AuthorByline'

const SECTIONS = [{ id: 'ideen', title: 'Praktische Ideen' }, { id: 'demenz', title: 'Bei Demenz' }, { id: 'tagesstruktur', title: 'Tagesstruktur' }, { id: 'faq', title: 'Häufige Fragen' }]

export const metadata: Metadata = {
  title: 'Beschäftigung von Senioren zuhause — Ideen & Tipps | Primundus',
  description: 'Wie Senioren zuhause aktiv und geistig fit bleiben: praktische Ideen für Beschäftigung, Tagesstruktur und soziale Teilhabe.',
  alternates: { canonical: 'https://primundus.de/beschaeftigung-senioren-zuhause/' },
  openGraph: {
    title: 'Beschäftigung Senioren zuhause',
    description: 'Wie Senioren zuhause aktiv und geistig fit bleiben: praktische Ideen für Beschäftigung, Tagesstruktur und soziale Teilhabe.',
    url: 'https://primundus.de/beschaeftigung-senioren-zuhause/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Senioren zuhause beschäftigen — Ideen für jeden Tag',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-30',
    dateModified: '2026-04-30',
    mainEntityOfPage: 'https://primundus.de/beschaeftigung-senioren-zuhause/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://primundus.de/alltag/' },
      { '@type': 'ListItem', position: 3, name: 'Beschäftigung Senioren zuhause', item: 'https://primundus.de/beschaeftigung-senioren-zuhause/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Wie beschäftige ich einen Senioren sinnvoll zuhause?', acceptedAnswer: { '@type': 'Answer', text: 'Gemeinsames Kochen, Musik hören, Spiele spielen, Spaziergänge, Gartenarbeit, Fotos anschauen, Briefe schreiben — individuell angepasst an frühere Interessen.' } },
      { '@type': 'Question', name: 'Was hilft bei Demenz?', acceptedAnswer: { '@type': 'Answer', text: 'Routinen und vertraute Aktivitäten — Musik aus der Jugend, bekannte Handgriffe, einfache repetitive Tätigkeiten die Sicherheit geben.' } }
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
            <span className="text-[#1C1C1C]">Beschäftigung Senioren zuhause</span>
          </nav>
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A89279] mb-4">Alltag · 5 Min</p>
          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">Senioren zuhause beschäftigen — Ideen für jeden Tag</h1>

          <AuthorByline updated="30. April 2026" />
          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-10 font-medium">Aktivität und geistige Anregung sind für Senioren genauso wichtig wie körperliche Pflege. Eine gute Betreuungskraft kennt das und gestaltet den Alltag aktiv mit.</p>
          <h2 id="ideen" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">Praktische Ideen</h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Dieser Ratgeber gibt Ihnen einen kompakten Überblick über das Thema — praxisnah und auf die Situation pflegender Familien zugeschnitten.</p>
          <h2 id="demenz" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">Bei Demenz</h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Die wichtigsten Informationen für Ihren Alltag mit Pflege: Was konkret zu tun ist, worauf man achten sollte und wie Primundus unterstützen kann.</p>
          <h2 id="tagesstruktur" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">Tagesstruktur</h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Wenn Sie unsicher sind wie Sie vorgehen sollen — sprechen Sie mit uns. Primundus berät kostenlos und ehrlich: 089 200 000 830.</p>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            <details className="bg-white rounded-xl border border-[#E5E3DF] group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">Wie beschäftige ich einen Senioren sinnvoll zuhause?</h3>
                <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-[#2E2E2E] leading-relaxed">Gemeinsames Kochen, Musik hören, Spiele spielen, Spaziergänge, Gartenarbeit, Fotos anschauen, Briefe schreiben — individuell angepasst an frühere Interessen.</p></div>
            </details>
            <details className="bg-white rounded-xl border border-[#E5E3DF] group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">Was hilft bei Demenz?</h3>
                <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-[#2E2E2E] leading-relaxed">Routinen und vertraute Aktivitäten — Musik aus der Jugend, bekannte Handgriffe, einfache repetitive Tätigkeiten die Sicherheit geben.</p></div>
            </details>
          </div>
          <ArticleCTA />
        </div>
      </div>
    </>
  )
}
