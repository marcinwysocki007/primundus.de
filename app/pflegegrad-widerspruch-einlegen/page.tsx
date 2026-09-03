import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { AuthorByline } from '@/components/AuthorByline'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('pflegegrad-widerspruch-einlegen', '30. April 2026')

const SECTIONS = [{ id: 'fristen', title: 'Fristen' }, { id: 'begruendung', title: 'Begründung' }, { id: 'ablauf', title: 'Ablauf' }, { id: 'faq', title: 'Häufige Fragen' }]

export const metadata: Metadata = {
  title: 'Pflegegrad Widerspruch einlegen — Schritt für Schritt',
  description: 'Pflegegrad Widerspruch einlegen: Fristen, Begründung, Chancen. Wie man gegen einen zu niedrigen Bescheid vorgeht.',
  alternates: { canonical: 'https://primundus.de/pflegegrad-widerspruch-einlegen' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Pflegegrad Widerspruch einlegen',
    description: 'Pflegegrad Widerspruch einlegen: Fristen, Begründung, Chancen. Wie man gegen einen zu niedrigen Bescheid vorgeht.',
    url: 'https://primundus.de/pflegegrad-widerspruch-einlegen',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pflegegrad Widerspruch einlegen — so gehen Sie vor',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-30',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/pflegegrad-widerspruch-einlegen',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://primundus.de/ratgeber' },
      { '@type': 'ListItem', position: 3, name: 'Pflegegrad Widerspruch einlegen', item: 'https://primundus.de/pflegegrad-widerspruch-einlegen' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Wie lange habe ich für den Widerspruch?', acceptedAnswer: { '@type': 'Answer', text: '1 Monat nach Zustellung des Bescheids. Bei versäumter Frist: Antrag auf Überprüfung noch möglich.' } },
      { '@type': 'Question', name: 'Wie begründe ich den Widerspruch?', acceptedAnswer: { '@type': 'Answer', text: 'Konkrete Beispiele was der Pflegebedürftige nicht mehr kann, Pflegetagebuch beilegen, ärztliche Atteste anfordern, Einschränkungen detailliert schildern.' } }
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
            <span className="text-pm-ink">Pflegegrad Widerspruch einlegen</span>
          </nav>
          <p className="text-meta font-bold uppercase tracking-[0.1em] text-pm-taupe-light mb-4">Ratgeber · 5 Min</p>
          <h1 className="text-h1 md:text-h1-lg font-bold text-pm-ink mb-6">Pflegegrad Widerspruch einlegen — so gehen Sie vor</h1>

          <AuthorByline updated={AKTUALISIERT.sichtbar} />
          <p className="text-[17px] md:text-[19px] leading-relaxed text-pm-body mb-10 font-medium">Pflegegrad zu niedrig? Innerhalb von einem Monat Widerspruch einlegen — kostenlos, ohne Risiko. Viele Widersprüche sind erfolgreich. Dieser Ratgeber zeigt wie.</p>
          <h2 id="fristen" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">Fristen</h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-4">Dieser Ratgeber gibt Ihnen einen kompakten Überblick über das Thema — praxisnah und auf die Situation pflegender Familien zugeschnitten.</p>
          <h2 id="begruendung" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">Begründung</h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-4">Die wichtigsten Informationen für Ihren Alltag mit Pflege: Was konkret zu tun ist, worauf man achten sollte und wie Primundus unterstützen kann.</p>
          <h2 id="ablauf" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">Ablauf</h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-4">Wenn Sie unsicher sind wie Sie vorgehen sollen — sprechen Sie mit uns. Primundus berät kostenlos und ehrlich: 089 200 000 830.</p>

          <h2 id="faq" className="text-h2 md:text-h2-lg font-bold text-pm-ink mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            <details className="bg-white rounded-xl border border-pm-line group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-pm-ink pr-4">Wie lange habe ich für den Widerspruch?</h3>
                <span className="text-pm-taupe font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-pm-body leading-relaxed">1 Monat nach Zustellung des Bescheids. Bei versäumter Frist: Antrag auf Überprüfung noch möglich.</p></div>
            </details>
            <details className="bg-white rounded-xl border border-pm-line group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-pm-ink pr-4">Wie begründe ich den Widerspruch?</h3>
                <span className="text-pm-taupe font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-pm-body leading-relaxed">Konkrete Beispiele was der Pflegebedürftige nicht mehr kann, Pflegetagebuch beilegen, ärztliche Atteste anfordern, Einschränkungen detailliert schildern.</p></div>
            </details>
          </div>
          <Weiterlesen aktuell="pflegegrad-widerspruch-einlegen" />
          <ArticleCTA />
        </div>
      </div>
    </>
  )
}
