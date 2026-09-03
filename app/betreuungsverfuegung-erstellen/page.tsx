import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { AuthorByline } from '@/components/AuthorByline'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('betreuungsverfuegung-erstellen', '30. April 2026')

const SECTIONS = [{ id: 'was-ist', title: 'Was ist eine Betreuungsverfügung?' }, { id: 'unterschied', title: 'Unterschied zur Vorsorgevollmacht' }, { id: 'erstellen', title: 'Wie erstellen' }, { id: 'faq', title: 'Häufige Fragen' }]

export const metadata: Metadata = {
  title: 'Betreuungsverfügung erstellen — Anleitung & Muster 2026',
  description: 'Betreuungsverfügung erstellen: was sie ist, wie sie sich von der Vorsorgevollmacht unterscheidet und was reingehört. Mit Checkliste.',
  alternates: { canonical: 'https://primundus.de/betreuungsverfuegung-erstellen' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Betreuungsverfügung erstellen',
    description: 'Betreuungsverfügung erstellen: was sie ist, wie sie sich von der Vorsorgevollmacht unterscheidet und was reingehört. Mit Checkliste.',
    url: 'https://primundus.de/betreuungsverfuegung-erstellen',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Betreuungsverfügung erstellen — was ist zu beachten?',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-30',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/betreuungsverfuegung-erstellen',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://primundus.de/rechtliches' },
      { '@type': 'ListItem', position: 3, name: 'Betreuungsverfügung erstellen', item: 'https://primundus.de/betreuungsverfuegung-erstellen' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was ist der Unterschied zwischen Betreuungsverfügung und Vorsorgevollmacht?', acceptedAnswer: { '@type': 'Answer', text: 'Vorsorgevollmacht: Sie bevollmächtigen eine Vertrauensperson direkt. Betreuungsverfügung: Sie schlagen dem Gericht eine Person vor — das Gericht entscheidet. Vorsorgevollmacht ist stärker und bevorzugt.' } },
      { '@type': 'Question', name: 'Muss eine Betreuungsverfügung notariell beglaubigt sein?', acceptedAnswer: { '@type': 'Answer', text: 'Nein — sie ist formlos gültig. Empfehlung: handschriftlich unterschreiben, beim zentralen Vorsorgeregister hinterlegen.' } }
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
            <a href="/rechtliches" className="hover:text-pm-taupe transition-colors">Ratgeber</a>
            <span>›</span>
            <span className="text-pm-ink">Betreuungsverfügung erstellen</span>
          </nav>
          <p className="text-meta font-bold uppercase tracking-[0.1em] text-pm-taupe-light mb-4">Rechtliches · 5 Min</p>
          <h1 className="text-h1 md:text-h1-lg font-bold text-pm-ink mb-6">Betreuungsverfügung erstellen — was ist zu beachten?</h1>

          <AuthorByline updated={AKTUALISIERT.sichtbar} />
          <p className="text-[17px] md:text-[19px] leading-relaxed text-pm-body mb-10 font-medium">Die Betreuungsverfügung legt fest wer als Betreuer eingesetzt werden soll wenn man selbst keine Entscheidungen mehr treffen kann. Sie ergänzt die Vorsorgevollmacht — und ist besonders wichtig wenn keine Vertrauensperson vorhanden ist.</p>
          <h2 id="was-ist" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">Was ist eine Betreuungsverfügung?</h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-4">Dieser Ratgeber gibt Ihnen einen kompakten Überblick über das Thema — praxisnah und auf die Situation pflegender Familien zugeschnitten.</p>
          <h2 id="unterschied" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">Unterschied zur Vorsorgevollmacht</h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-4">Die wichtigsten Informationen für Ihren Alltag mit Pflege: Was konkret zu tun ist, worauf man achten sollte und wie Primundus unterstützen kann.</p>
          <h2 id="erstellen" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">Wie erstellen</h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-4">Wenn Sie unsicher sind wie Sie vorgehen sollen — sprechen Sie mit uns. Primundus berät kostenlos und ehrlich: 089 200 000 830.</p>

          <h2 id="faq" className="text-h2 md:text-h2-lg font-bold text-pm-ink mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            <details className="bg-white rounded-xl border border-pm-line group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-pm-ink pr-4">Was ist der Unterschied zwischen Betreuungsverfügung und Vorsorgevollmacht?</h3>
                <span className="text-pm-taupe font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-pm-body leading-relaxed">Vorsorgevollmacht: Sie bevollmächtigen eine Vertrauensperson direkt. Betreuungsverfügung: Sie schlagen dem Gericht eine Person vor — das Gericht entscheidet. Vorsorgevollmacht ist stärker und bevorzugt.</p></div>
            </details>
            <details className="bg-white rounded-xl border border-pm-line group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-pm-ink pr-4">Muss eine Betreuungsverfügung notariell beglaubigt sein?</h3>
                <span className="text-pm-taupe font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-pm-body leading-relaxed">Nein — sie ist formlos gültig. Empfehlung: handschriftlich unterschreiben, beim zentralen Vorsorgeregister hinterlegen.</p></div>
            </details>
          </div>
          <Weiterlesen aktuell="betreuungsverfuegung-erstellen" />
          <ArticleCTA />
        </div>
      </div>
    </>
  )
}
