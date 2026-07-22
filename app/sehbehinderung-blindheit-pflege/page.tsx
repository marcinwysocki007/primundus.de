import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [{ id: 'alltag', title: 'Alltag sicher gestalten' }, { id: 'orientierung', title: 'Orientierung im Haushalt' }, { id: 'aufgaben', title: 'Aufgaben der Kraft' }, { id: 'faq', title: 'Häufige Fragen' }]

export const metadata: Metadata = {
  title: 'Pflege bei Sehbehinderung und Blindheit | Primundus',
  description: 'Wie Senioren mit Sehbehinderung oder Blindheit zuhause betreut werden: was die Kraft beachten muss und wie der Alltag gestaltet wird.',
  alternates: { canonical: 'https://primundus.de/sehbehinderung-blindheit-pflege/' },
  openGraph: {
    title: 'Sehbehinderung Blindheit Pflege',
    description: 'Wie Senioren mit Sehbehinderung oder Blindheit zuhause betreut werden: was die Kraft beachten muss und wie der Alltag gestaltet wird.',
    url: 'https://primundus.de/sehbehinderung-blindheit-pflege/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pflege bei Sehbehinderung und Blindheit — was zu beachten ist',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-30',
    dateModified: '2026-04-30',
    mainEntityOfPage: 'https://primundus.de/sehbehinderung-blindheit-pflege/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://primundus.de/krankheiten/' },
      { '@type': 'ListItem', position: 3, name: 'Pflege bei Sehbehinderung', item: 'https://primundus.de/sehbehinderung-blindheit-pflege/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Wie pflegt man Senioren mit Sehbehinderung zuhause?', acceptedAnswer: { '@type': 'Answer', text: 'Konstante Anordnung von Möbeln und Gegenständen, verbale Ankündigung jeder Handlung, kontrastreiche Beschriftungen, Begleitung bei allen Außenaktivitäten.' } },
      { '@type': 'Question', name: 'Welchen Pflegegrad hat man bei Blindheit?', acceptedAnswer: { '@type': 'Answer', text: 'Blindheit allein ergibt noch keinen Pflegegrad — der MD bewertet Alltagseinschränkungen insgesamt. Mit Begleiterkrankungen oft PG 2–3 erreichbar.' } }
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
            <a href="/krankheiten/" className="hover:text-[#8B7355] transition-colors">Ratgeber</a>
            <span>›</span>
            <span className="text-[#1C1C1C]">Pflege bei Sehbehinderung</span>
          </nav>
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A89279] mb-4">Krankheiten · 4 Min</p>
          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">Pflege bei Sehbehinderung und Blindheit — was zu beachten ist</h1>
          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-10 font-medium">Sehverlust im Alter ist häufig — durch Makuladegeneration, Glaukom oder Diabetische Retinopathie. Eine gute Betreuungskraft kann den Alltag trotzdem sicher und würdevoll gestalten.</p>
          <h2 id="alltag" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">Alltag sicher gestalten</h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Dieser Ratgeber gibt Ihnen einen kompakten Überblick über das Thema — praxisnah und auf die Situation pflegender Familien zugeschnitten.</p>
          <h2 id="orientierung" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">Orientierung im Haushalt</h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Die wichtigsten Informationen für Ihren Alltag mit Pflege: Was konkret zu tun ist, worauf man achten sollte und wie Primundus unterstützen kann.</p>
          <h2 id="aufgaben" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">Aufgaben der Kraft</h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">Wenn Sie unsicher sind wie Sie vorgehen sollen — sprechen Sie mit uns. Primundus berät kostenlos und ehrlich: 089 200 000 830.</p>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            <details className="bg-white rounded-xl border border-[#E5E3DF] group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">Wie pflegt man Senioren mit Sehbehinderung zuhause?</h3>
                <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-[#2E2E2E] leading-relaxed">Konstante Anordnung von Möbeln und Gegenständen, verbale Ankündigung jeder Handlung, kontrastreiche Beschriftungen, Begleitung bei allen Außenaktivitäten.</p></div>
            </details>
            <details className="bg-white rounded-xl border border-[#E5E3DF] group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">Welchen Pflegegrad hat man bei Blindheit?</h3>
                <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-[#2E2E2E] leading-relaxed">Blindheit allein ergibt noch keinen Pflegegrad — der MD bewertet Alltagseinschränkungen insgesamt. Mit Begleiterkrankungen oft PG 2–3 erreichbar.</p></div>
            </details>
          </div>
          <ArticleCTA />
        </div>
      </div>
    </>
  )
}
