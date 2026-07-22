import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [
  { id: 'was-ist', title: 'Was ist Scheinselbstständigkeit?' },
  { id: 'kriterien', title: 'Woran erkennen Behörden sie?' },
  { id: 'folgen', title: 'Folgen & Risiken' },
  { id: 'vermeiden', title: 'Wie man das Risiko vermeidet' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Scheinselbstständigkeit in der Pflege vermeiden | Primundus',
  description: 'Scheinselbstständigkeit bei Pflegekräften: Was sie ist, woran Behörden sie erkennen, welche Folgen drohen und wie man das Risiko vollständig vermeidet.',
  alternates: { canonical: 'https://primundus.de/scheinselbststaendigkeit-pflege-vermeiden/' },
  openGraph: {
    title: 'Scheinselbstständigkeit in der Pflege vermeiden | Primundus',
    description: 'Was Scheinselbstständigkeit ist und wie man das Risiko bei der 24h-Pflege vollständig vermeidet.',
    url: 'https://primundus.de/scheinselbststaendigkeit-pflege-vermeiden/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Scheinselbstständigkeit in der Pflege vermeiden',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/scheinselbststaendigkeit-pflege-vermeiden/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Rechtliches', item: 'https://primundus.de/rechtliches/' },
      { '@type': 'ListItem', position: 3, name: 'Scheinselbstständigkeit vermeiden', item: 'https://primundus.de/scheinselbststaendigkeit-pflege-vermeiden/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was ist Scheinselbstständigkeit in der Pflege?', acceptedAnswer: { '@type': 'Answer', text: 'Scheinselbstständigkeit liegt vor wenn eine Pflegekraft als "selbstständig" abgerechnet wird, tatsächlich aber wie eine Angestellte arbeitet: feste Arbeitszeiten, persönliche Leistungserbringung, keine eigenen Auftraggeber, kein eigenes Unternehmerrisiko. Die Behörden stufen sie als verstecktes Arbeitsverhältnis ein — mit erheblichen rechtlichen Folgen.' } },
      { '@type': 'Question', name: 'Welche Konsequenzen drohen bei Scheinselbstständigkeit?', acceptedAnswer: { '@type': 'Answer', text: 'Nachzahlung aller Sozialversicherungsbeiträge (Arbeitgeber- und Arbeitnehmeranteil) für bis zu 4 Jahre rückwirkend. Bußgelder. Strafrechtliche Verfolgung wegen Vorenthaltung von Sozialversicherungsbeiträgen. Die Familie haftet als Arbeitgeberin.' } },
    ],
  },
]

export default function ScheinselbststaendigkeitVermeiden() {
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
            <a href="/rechtliches/" className="hover:text-[#8B7355] transition-colors">Rechtliches</a>
            <span>›</span>
            <span className="text-[#1C1C1C]">Scheinselbstständigkeit vermeiden</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>6 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            Scheinselbstständigkeit in der Pflege — was es ist & wie man es vermeidet
          </h1>

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            Tausende Familien beschäftigen "selbstständige Pflegekräfte" ohne zu wissen dass sie damit ein erhebliches rechtliches Risiko eingehen. Scheinselbstständigkeit bedeutet: Die Behörden werten das Verhältnis als verstecktes Arbeitsverhältnis — und fordern alle Sozialversicherungsbeiträge nach. Rückwirkend. Für bis zu vier Jahre.
          </p>

          <div className="bg-[#FDF0EE] border border-[rgba(231,111,99,0.2)] rounded-2xl p-5 mb-10">
            <p className="text-[14px] font-bold text-[#8B3E2F] mb-2">Das Risiko ist real — und wächst</p>
            <p className="text-[14px] text-[#8B3E2F] leading-relaxed">
              Die Behörden (Rentenversicherung, Zoll, Staatsanwaltschaft) prüfen die häusliche Pflege zunehmend aktiv. Betriebsprüfungen, Nachbarsanzeigen, Beschwerden von Konkurrenten — die Wege zur Entdeckung sind vielfältig. Wer auf Nummer sicher gehen will, wählt das Entsendemodell.
            </p>
          </div>

          <h2 id="was-ist" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Was ist Scheinselbstständigkeit?
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Scheinselbstständigkeit liegt vor wenn jemand formal als Selbstständige(r) abgerechnet wird, die tatsächliche Tätigkeit aber einem Arbeitsverhältnis entspricht. In der Pflege ist das besonders häufig: Eine Pflegekraft, die dauerhaft in einem Haushalt tätig ist, feste Arbeitszeiten hat, persönlich leistet und kein eigenes Unternehmerrisiko trägt, ist faktisch eine Angestellte — unabhängig davon wie das Vertragsdokument es nennt.
          </p>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-10">
            Der Begriff kommt daher dass Selbstständigkeit nur "vorgetäuscht" wird — um Sozialversicherungsbeiträge und Arbeitsrecht zu umgehen. Das ist strafbar.
          </p>

          <h2 id="kriterien" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Woran erkennen Behörden Scheinselbstständigkeit?
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Die Deutsche Rentenversicherung prüft nach diesen Kriterien — je mehr zutreffen, desto größer das Risiko:
          </p>
          <div className="space-y-3 mb-10">
            {[
              { kriterium: 'Nur ein Auftraggeber', risiko: 'Wer ausschließlich für eine Familie tätig ist und keine anderen Kunden hat, ist faktisch angestellt — das ist das stärkste Indiz für Scheinselbstständigkeit.' },
              { kriterium: 'Weisungsgebundenheit', risiko: 'Wenn die Familie vorgibt wann, wie und was die Kraft zu tun hat — also Weisungen erteilt wie ein Arbeitgeber — liegt ein Arbeitsverhältnis vor.' },
              { kriterium: 'Persönliche Leistungserbringung', risiko: 'Wer keine Mitarbeiter einstellt und sich nicht vertreten lassen kann, hat kein Unternehmerrisiko — das spricht gegen echte Selbstständigkeit.' },
              { kriterium: 'Feste Arbeitszeiten', risiko: 'Feste Anwesenheitszeiten (7–19 Uhr, oder 24h) sind typisch für Angestelltenverhältnisse.' },
              { kriterium: 'Keine eigenen Betriebsmittel', risiko: 'Wer alle Arbeitsmittel vom "Auftraggeber" gestellt bekommt, trägt kein Unternehmerrisiko.' },
              { kriterium: 'Kein eigenes Unternehmerrisiko', risiko: 'Festes monatliches Entgelt unabhängig vom Arbeitsvolumen ist ein Arbeitslohn — kein Honorar.' },
            ].map((item) => (
              <div key={item.kriterium} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.kriterium}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.risiko}</p>
              </div>
            ))}
          </div>

          <h2 id="folgen" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Folgen & Risiken bei Scheinselbstständigkeit
          </h2>
          <div className="space-y-3 mb-10">
            {[
              { folge: 'Nachzahlung Sozialversicherungsbeiträge', detail: 'Beide Seiten — Arbeitnehmer- und Arbeitgeberanteil — werden nachgefordert. Für bis zu 4 Jahre rückwirkend. Bei Vorsatz bis zu 30 Jahre. Bei 2.000 €/Monat Honorar für 3 Jahre: leicht 40.000–50.000 € Nachforderung.' },
              { folge: 'Bußgelder', detail: 'Ordnungswidrigkeiten nach SGB IV. Zusätzlich zu den Nachzahlungen.' },
              { folge: 'Strafrechtliche Verfolgung', detail: 'Vorenthaltung von Sozialversicherungsbeiträgen ist eine Straftat (§ 266a StGB) — Freiheitsstrafe bis zu 5 Jahre möglich.' },
              { folge: 'Nachzahlung Lohnsteuer', detail: 'Das Finanzamt fordert ebenfalls nach — Lohnsteuer wurde auf das "Honorar" nicht einbehalten.' },
            ].map((item) => (
              <div key={item.folge} className="bg-[#FDF0EE] rounded-xl p-5 border border-[rgba(231,111,99,0.15)]">
                <p className="text-[15px] font-bold text-[#8B3E2F] mb-1">{item.folge}</p>
                <p className="text-[14px] text-[#8B3E2F] leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>

          <h2 id="vermeiden" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Wie man das Risiko vollständig vermeidet
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Es gibt zwei legale Wege — mit klar unterschiedlichem Aufwand für die Familie:
          </p>
          <div className="space-y-4 mb-10">
            {[
              {
                modell: 'Entsendemodell (empfohlen)',
                beschreibung: 'Die Betreuungskraft ist bei einem EU-Unternehmen (z.B. in Polen, Bulgarien, Rumänien) angestellt und wird mit A1-Bescheinigung nach Deutschland entsandt. Die Familie schließt nur einen Vertrag mit der deutschen Agentur (z.B. Primundus). Kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben, vollständig rechtssicher.',
                highlight: true,
              },
              {
                modell: 'Direktanstellung',
                beschreibung: 'Die Familie stellt die Pflegekraft direkt an — mit deutschem Arbeitsvertrag, Anmeldung bei Sozialversicherungsträgern, Lohnabrechnung, Urlaubsplanung. Rechtssicher, aber erheblicher Verwaltungsaufwand. Auch im Krankheitsfall muss die Familie selbst für Ersatz sorgen.',
                highlight: false,
              },
            ].map((item) => (
              <div key={item.modell} className={`rounded-2xl p-5 border ${item.highlight ? 'bg-white border-[#8B7355] border-2' : 'bg-white border-[#E5E3DF]'}`}>
                <p className="text-[16px] font-bold text-[#1C1C1C] mb-2">{item.modell}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.beschreibung}</p>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Vollständige Erklärung:{' '}
            <a href="/pflegekraft-legal-beschaeftigen/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Pflegekraft legal beschäftigen — die 3 Modelle</a>
          </p>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Was ist Scheinselbstständigkeit in der Pflege?', a: 'Wenn eine "selbstständige" Pflegekraft faktisch wie eine Angestellte tätig ist — feste Zeiten, nur ein Auftraggeber, persönliche Leistungserbringung. Die Behörden werten das als verstecktes Arbeitsverhältnis.' },
              { q: 'Welche Konsequenzen drohen?', a: 'Nachzahlung aller Sozialversicherungsbeiträge (bis 4 Jahre rückwirkend), Bußgelder, strafrechtliche Verfolgung nach §266a StGB (bis 5 Jahre Freiheitsstrafe). Die Familie haftet als Arbeitgeberin.' },
              { q: 'Wie vermeidet man Scheinselbstständigkeit?', a: 'Entsendemodell über eine seriöse Agentur — kein eigenes Arbeitsverhältnis, A1-Bescheinigung aus EU-Land, vollständig rechtssicher. Alternative: Direktanstellung mit Arbeitsvertrag und Sozialversicherungsanmeldung.' },
              { q: 'Ist das Entsendemodell wirklich legal?', a: 'Ja — das Entsendemodell ist nach EU-Recht und deutschem Recht vollständig legal. Die A1-Bescheinigung belegt den legalen EU-Entsendestatus. Primundus hat in über 20 Jahren und 60.000+ Betreuungen kein einziges rechtliches Problem dieser Art gehabt.' },
            ].map((item, i) => (
              <details key={i} className="bg-white rounded-xl border border-[#E5E3DF] group">
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                  <h3 className="text-[15px] font-semibold text-[#1C1C1C] pr-4">{item.q}</h3>
                  <span className="text-[#8B7355] font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-4">
                  <p className="text-[15px] text-[#2E2E2E] leading-relaxed">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
          <ArticleCTA />
        </div>
      </div>
    </>
  )
}
