import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [{ id: 'wohnung', title: 'Wohnung vorbereiten' }, { id: 'dokumente', title: 'Dokumente & Informationen' }, { id: 'erster-tag', title: 'Erster Tag' }, { id: 'laufend', title: 'Laufende Betreuung' }, { id: 'faq', title: 'Häufige Fragen' }]

export const metadata: Metadata = {
  title: '24h-Pflege Checkliste — alles was Familien brauchen | Primundus',
  description: 'Vollständige Checkliste für den Start der 24h-Pflege: Was vorzubereiten ist, welche Dokumente gebraucht werden, wie der erste Tag abläuft.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-checkliste/' },
  openGraph: {
    title: '24h-Pflege Checkliste 2026 | Primundus',
    description: 'Vollständige Checkliste für den Start der 24h-Pflege: Was vorzubereiten ist, welche Dokumente gebraucht werden, wie der erste Tag abläuft.',
    url: 'https://primundus.de/24h-pflege-checkliste/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '24h-Pflege Checkliste — alles was Familien vor dem Start vorbereiten sollten',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-30',
    dateModified: '2026-04-30',
    mainEntityOfPage: 'https://primundus.de/24h-pflege-checkliste/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://primundus.de/ratgeber/' },
      { '@type': 'ListItem', position: 3, name: '24h-Pflege Checkliste', item: 'https://primundus.de/24h-pflege-checkliste/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was muss ich vor dem Start der 24h-Pflege vorbereiten?', acceptedAnswer: { '@type': 'Answer', text: 'Zimmer für die Kraft einrichten, Medikamentenliste aktualisieren, Dokumente (Pflegekarte, Vollmachten) bereitstellen, Tagesablauf aufschreiben.' } },
      { '@type': 'Question', name: 'Wie viel Platz braucht die Betreuungskraft?', acceptedAnswer: { '@type': 'Answer', text: 'Ein eigenes Zimmer ist notwendig — Mindestgröße ca. 10 m². Mit eigenem Bett, Schrank und idealerweise Internetzugang.' } },
      { '@type': 'Question', name: 'Was wenn ich etwas vergessen habe?', acceptedAnswer: { '@type': 'Answer', text: 'Kein Problem — Primundus begleitet den Start aktiv und steht Mo–Fr 9–18 Uhr telefonisch zur Verfügung.' } }
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
            <span className="text-[#1C1C1C]">24h-Pflege Checkliste</span>
          </nav>
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A89279] mb-4">Ratgeber · 5 Min Lesezeit · Aktualisiert April 2026</p>
          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">24h-Pflege Checkliste — alles was Familien vor dem Start vorbereiten sollten</h1>
          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-10 font-medium">Eine Betreuungskraft zieht ein — und die Familie möchte, dass alles reibungslos läuft. Diese Checkliste zeigt was vorzubereiten ist: von der Wohnung bis zu den Dokumenten, vom ersten Tag bis zur laufenden Betreuung.</p>
          <div className="bg-[#E8F5EE] border-[rgba(61,122,92,0.2)] border rounded-2xl p-5 mb-6">
            <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#2A5C3F] mb-3">Wohnung vorbereiten</p>
              <div className="flex gap-2 text-[13px] text-[#2A5C3F] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>Zimmer für die Kraft einrichten — mit Bett, Schrank, Internetzugang</div>
              <div className="flex gap-2 text-[13px] text-[#2A5C3F] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>Schlüssel und Zugangscodes bereitstellen</div>
              <div className="flex gap-2 text-[13px] text-[#2A5C3F] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>Einkauf für die erste Woche erledigen</div>
              <div className="flex gap-2 text-[13px] text-[#2A5C3F] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>Wichtige Gegenstände beschriften (Medikamente, Hilfsmittel)</div>
              <div className="flex gap-2 text-[13px] text-[#2A5C3F] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>Notfallnummern sichtbar aufhängen</div>
          </div>          <div className="bg-[#F2EDE6] border-[rgba(139,115,85,0.2)] border rounded-2xl p-5 mb-6">
            <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#6B5A44] mb-3">Dokumente & Informationen zusammenstellen</p>
              <div className="flex gap-2 text-[13px] text-[#6B5A44] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>Medikamentenliste aktuell und vollständig</div>
              <div className="flex gap-2 text-[13px] text-[#6B5A44] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>Arzt- und Therapietermine der nächsten Wochen</div>
              <div className="flex gap-2 text-[13px] text-[#6B5A44] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>Pflegeversicherungskarte und Pflegegeld-Bescheid</div>
              <div className="flex gap-2 text-[13px] text-[#6B5A44] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>Hausarzt-Kontaktdaten für die Kraft</div>
              <div className="flex gap-2 text-[13px] text-[#6B5A44] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>Vorsorgevollmacht und Patientenverfügung griffbereit</div>
              <div className="flex gap-2 text-[13px] text-[#6B5A44] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>Allergien und Unverträglichkeiten notiert</div>
              <div className="flex gap-2 text-[13px] text-[#6B5A44] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>Gewohnheiten und Tagesstruktur aufgeschrieben</div>
          </div>          <div className="bg-[#E8F5EE] border-[rgba(61,122,92,0.2)] border rounded-2xl p-5 mb-6">
            <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#2A5C3F] mb-3">Erster Tag — das ist wichtig</p>
              <div className="flex gap-2 text-[13px] text-[#2A5C3F] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>Zeit nehmen für ausführliche Einführung</div>
              <div className="flex gap-2 text-[13px] text-[#2A5C3F] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>Wohnung gemeinsam abgehen — wo ist was</div>
              <div className="flex gap-2 text-[13px] text-[#2A5C3F] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>Tagesablauf und Vorlieben erklären</div>
              <div className="flex gap-2 text-[13px] text-[#2A5C3F] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>Primundus-Kontakt der Kraft mitgeben</div>
              <div className="flex gap-2 text-[13px] text-[#2A5C3F] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>Erste Tage: Familie erreichbar bleiben</div>
          </div>          <div className="bg-[#E8F5EE] border-[rgba(61,122,92,0.2)] border rounded-2xl p-5 mb-6">
            <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#2A5C3F] mb-3">Laufende Betreuung — regelmäßig prüfen</p>
              <div className="flex gap-2 text-[13px] text-[#2A5C3F] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>Wöchentlich kurz nachfragen wie es läuft</div>
              <div className="flex gap-2 text-[13px] text-[#2A5C3F] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>Medikamentenliste aktuell halten</div>
              <div className="flex gap-2 text-[13px] text-[#2A5C3F] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>Arzttermine koordinieren</div>
              <div className="flex gap-2 text-[13px] text-[#2A5C3F] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>Bei Problemen: sofort Primundus anrufen (089 200 000 830)</div>
              <div className="flex gap-2 text-[13px] text-[#2A5C3F] py-1.5 border-b border-[rgba(0,0,0,0.06)] last:border-0"><span>→</span>Kraftwechsel ca. alle 6–8 Wochen planen</div>
          </div>
          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            <details className="bg-white rounded-xl border border-[#E5E3DF] group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">Was muss ich vor dem Start der 24h-Pflege vorbereiten?</h3>
                <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-[#2E2E2E] leading-relaxed">Zimmer für die Kraft einrichten, Medikamentenliste aktualisieren, Dokumente (Pflegekarte, Vollmachten) bereitstellen, Tagesablauf aufschreiben.</p></div>
            </details>
            <details className="bg-white rounded-xl border border-[#E5E3DF] group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">Wie viel Platz braucht die Betreuungskraft?</h3>
                <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-[#2E2E2E] leading-relaxed">Ein eigenes Zimmer ist notwendig — Mindestgröße ca. 10 m². Mit eigenem Bett, Schrank und idealerweise Internetzugang.</p></div>
            </details>
            <details className="bg-white rounded-xl border border-[#E5E3DF] group">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">Was wenn ich etwas vergessen habe?</h3>
                <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-4"><p className="text-[15px] text-[#2E2E2E] leading-relaxed">Kein Problem — Primundus begleitet den Start aktiv und steht Mo–Fr 9–18 Uhr telefonisch zur Verfügung.</p></div>
            </details>
          </div>
          <ArticleCTA />
        </div>
      </div>
    </>
  )
}
