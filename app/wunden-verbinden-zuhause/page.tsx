import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { AuthorByline } from '@/components/AuthorByline'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('wunden-verbinden-zuhause', '30. April 2026')

const SECTIONS = [{ id: 'darf-kraft', title: 'Was darf die Kraft?' }, { id: 'pflegedienst', title: 'Wann Pflegedienst?' }, { id: 'praxis', title: 'Praktisch vorgehen' }, { id: 'faq', title: 'Häufige Fragen' }]

export const metadata: Metadata = {
  title: 'Wunden verbinden zuhause — was Betreuungskräfte dürfen',
  description: 'Was bei der häuslichen Wundversorgung zu beachten ist: Was die Betreuungskraft darf, wann der Pflegedienst nötig ist.',
  alternates: { canonical: 'https://primundus.de/wunden-verbinden-zuhause' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Wunden verbinden zuhause',
    description: 'Was bei der häuslichen Wundversorgung zu beachten ist: Was die Betreuungskraft darf, wann der Pflegedienst nötig ist.',
    url: 'https://primundus.de/wunden-verbinden-zuhause',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Wunden verbinden zuhause — was erlaubt ist und was nicht',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-30',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/wunden-verbinden-zuhause',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://primundus.de/krankheiten' },
      { '@type': 'ListItem', position: 3, name: 'Wunden verbinden zuhause', item: 'https://primundus.de/wunden-verbinden-zuhause' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was darf eine Betreuungskraft bei der Wundversorgung?', acceptedAnswer: { '@type': 'Answer', text: 'Kleine, oberflächliche Wunden reinigen und verbinden, Wundsalbe auftragen, auf Veränderungen beobachten. Keine komplexe Wundversorgung.' } },
      { '@type': 'Question', name: 'Wann muss ein Pflegedienst die Wundversorgung übernehmen?', acceptedAnswer: { '@type': 'Answer', text: 'Bei chronischen Wunden, tiefen Wunden, Infektionszeichen, Dekubitus, Wunden nach Operationen — immer professionelle Behandlungspflege.' } }
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
            <a href="/krankheiten" className="hover:text-pm-taupe transition-colors">Ratgeber</a>
            <span>›</span>
            <span className="text-pm-ink">Wunden verbinden zuhause</span>
          </nav>
          <p className="text-meta font-bold uppercase tracking-[0.1em] text-pm-taupe-light mb-4">Krankheiten · 4 Min</p>
          <h1 className="text-h1 md:text-h1-lg font-bold text-pm-ink mb-6">Wunden verbinden zuhause — was erlaubt ist und was nicht</h1>

          <AuthorByline updated={AKTUALISIERT.sichtbar} />
          <p className="text-[17px] md:text-[19px] leading-relaxed text-pm-body mb-10 font-medium">Kleine Wunden, Schürfungen, Druckstellen — Betreuungskräfte können Erstversorgung leisten. Chronische Wunden, Ulcus cruris, tiefe Wunden: das ist Sache des Pflegedienstes.</p>
          <h2 id="darf-kraft" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">Was darf die Kraft?</h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-4">Dieser Ratgeber gibt Ihnen einen kompakten Überblick über das Thema — praxisnah und auf die Situation pflegender Familien zugeschnitten.</p>
          <h2 id="pflegedienst" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">Wann Pflegedienst?</h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-4">Die wichtigsten Informationen für Ihren Alltag mit Pflege: Was konkret zu tun ist, worauf man achten sollte und wie Primundus unterstützen kann.</p>
          <h2 id="praxis" className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4 leading-snug">Praktisch vorgehen</h2>
          <p className="text-[16px] leading-relaxed text-pm-body mb-4">Wenn Sie unsicher sind wie Sie vorgehen sollen — sprechen Sie mit uns. Primundus berät kostenlos und ehrlich: 089 200 000 830.</p>

          <h2 id="faq" className="text-h2 md:text-h2-lg font-bold text-pm-ink mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            <details className="bg-white rounded-xl border border-pm-line group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-pm-ink pr-4">Was darf eine Betreuungskraft bei der Wundversorgung?</h3>
                <span className="text-pm-taupe font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-pm-body leading-relaxed">Kleine, oberflächliche Wunden reinigen und verbinden, Wundsalbe auftragen, auf Veränderungen beobachten. Keine komplexe Wundversorgung.</p></div>
            </details>
            <details className="bg-white rounded-xl border border-pm-line group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-pm-ink pr-4">Wann muss ein Pflegedienst die Wundversorgung übernehmen?</h3>
                <span className="text-pm-taupe font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-pm-body leading-relaxed">Bei chronischen Wunden, tiefen Wunden, Infektionszeichen, Dekubitus, Wunden nach Operationen — immer professionelle Behandlungspflege.</p></div>
            </details>
          </div>
          <Weiterlesen aktuell="wunden-verbinden-zuhause" />
          <ArticleCTA />
        </div>
      </div>
    </>
  )
}
