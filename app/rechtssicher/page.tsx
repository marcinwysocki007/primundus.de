import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { AuthorByline } from '@/components/AuthorByline'

const SECTIONS = [
  { id: 'das-problem', title: 'Das rechtliche Problem' },
  { id: 'entsendemodell', title: 'Die Lösung: Entsendemodell' },
  { id: 'primundus', title: 'Wie Primundus Rechtssicherheit herstellt' },
  { id: 'kontrolle', title: 'Was bei einer Kontrolle passiert' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Rechtssichere 24h-Pflege — wie es funktioniert | Primundus',
  description: '24h-Pflege rechtssicher organisieren: Warum das Entsendemodell die einzig sichere Lösung ist, wie A1-Bescheinigung schützt und was bei einer Kontrolle passiert.',
  alternates: { canonical: 'https://primundus.de/rechtssicher/' },
  openGraph: {
    title: 'Rechtssichere 24h-Pflege | Primundus',
    description: 'Wie 24h-Pflege rechtssicher funktioniert — Entsendemodell, A1-Bescheinigung, keine Scheinselbstständigkeit.',
    url: 'https://primundus.de/rechtssicher/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Rechtssichere 24h-Pflege — wie es funktioniert',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/rechtssicher/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Rechtssicher', item: 'https://primundus.de/rechtssicher/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Wie ist 24h-Pflege rechtssicher zu organisieren?', acceptedAnswer: { '@type': 'Answer', text: 'Über das Entsendemodell mit A1-Bescheinigung. Die Betreuungskraft ist bei einem EU-Unternehmen angestellt, kommt mit A1-Bescheinigung nach Deutschland und ist vollständig sozialversicherungsrechtlich im Heimatland abgesichert. Die Familie hat kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Bei Kontrollen: A1-Bescheinigung vorzeigen.' } },
    ],
  },
]

export default function Rechtssicher() {
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
            <span className="text-[#1C1C1C]">Rechtssicher</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            Über Primundus · Aktualisiert April 2026
          </p>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            Rechtssichere 24h-Pflege — wie Primundus das sicherstellt
          </h1>

          <AuthorByline updated="25. April 2026" />

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            Das Thema Rechtssicherheit ist in der 24h-Pflege entscheidend — und wird von vielen Familien unterschätzt. Tausende Haushalte in Deutschland beschäftigen Pflegekräfte auf unsichere Weise und wissen es nicht. Primundus arbeitet seit über 20 Jahren ausschließlich im rechtssicheren Entsendemodell. Kein einziger Kundenfall mit rechtlichen Konsequenzen.
          </p>

          {/* Trust-Indikatoren */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            {[
              { zahl: '20+', label: 'Jahre Erfahrung' },
              { zahl: '60.000+', label: 'Betreuungen' },
              { zahl: '0', label: 'Rechtliche Probleme' },
              { zahl: 'Testsieger', label: 'DIE WELT' },
            ].map((item) => (
              <div key={item.label} className="bg-white border border-[#E5E3DF] rounded-xl p-4 text-center">
                <p className="text-[20px] font-bold text-[#8B7355]">{item.zahl}</p>
                <p className="text-[12px] text-[#8B8B8B] mt-0.5">{item.label}</p>
              </div>
            ))}
          </div>

          <h2 id="das-problem" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Das rechtliche Problem bei unseriösen Modellen
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Viele Familien glauben sie seien rechtlich abgesichert wenn sie mit einer Agentur arbeiten — das stimmt nicht automatisch. Es kommt darauf an wie die Agentur das Beschäftigungsverhältnis gestaltet.
          </p>
          <div className="space-y-3 mb-10">
            {[
              { modell: '❌ "Selbstständige Pflegekraft"', risiko: 'Scheinselbstständigkeit — in der Praxis bei 24h-Pflege fast immer vorhanden. Behörden prüfen aktiv. Folge: Nachzahlung aller Sozialversicherungsbeiträge (bis 4 Jahre rückwirkend), Bußgelder, Strafverfolgung.' },
              { modell: '⚠️ Direktanstellung ohne korrekte Anmeldung', risiko: 'Lohnsteuerhinterziehung und fehlende Sozialversicherungsanmeldung. Ebenfalls strafbar. Häufig als "günstigere Alternative" beworben.' },
              { modell: '✓ Entsendemodell über seriöse Agentur', risiko: 'Vollständig rechtssicher. EU-Recht, A1-Bescheinigung, kein eigenes Arbeitsverhältnis der Familie. Das Modell das Primundus seit über 20 Jahren anwendet.' },
            ].map((item) => (
              <div key={item.modell} className={`rounded-xl p-5 border ${item.modell.startsWith('✓') ? 'bg-white border-[#8B7355] border-2' : item.modell.startsWith('⚠️') ? 'bg-[#FDF0EE] border-[rgba(231,111,99,0.15)]' : 'bg-[#FDF0EE] border-[rgba(231,111,99,0.2)]'}`}>
                <p className={`text-[15px] font-bold mb-1 ${item.modell.startsWith('✓') ? 'text-[#1C1C1C]' : 'text-[#8B3E2F]'}`}>{item.modell}</p>
                <p className={`text-[14px] leading-relaxed ${item.modell.startsWith('✓') ? 'text-[#2E2E2E]' : 'text-[#8B3E2F]'}`}>{item.risiko}</p>
              </div>
            ))}
          </div>

          <h2 id="entsendemodell" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Die Lösung: Das Entsendemodell
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Das Entsendemodell basiert auf EU-Recht und deutschem Recht: Eine Betreuungskraft die in einem EU-Mitgliedsland angestellt ist kann für begrenzte Zeit (typisch 6–8 Wochen) nach Deutschland entsandt werden. Ihr Sozialversicherungsstatus im Heimatland wird durch die A1-Bescheinigung dokumentiert und anerkannt.
          </p>
          <div className="space-y-3 mb-10">
            {[
              { schritt: 'Kraft angestellt bei EU-Unternehmen', detail: 'Reguläres Arbeitsverhältnis in Polen, Bulgarien oder Rumänien. Dort kranken- und rentenversichert. Kein Scheinselbstständigkeitsrisiko.' },
              { schritt: 'A1-Bescheinigung ausgestellt', detail: 'Offizielle Bescheinigung der Heimatbehörde die den EU-Entsendestatus belegt. Muss bei Kontrollen vorgezeigt werden können.' },
              { schritt: 'Entsendung nach Deutschland', detail: 'Die Kraft arbeitet für 6–8 Wochen in Deutschland — vollständig legal, ohne deutsches Arbeitsverhältnis.' },
              { schritt: 'Familie hat kein eigenes Arbeitsverhältnis', detail: 'Vertrag nur mit Primundus als deutscher Agentur. Keine deutschen Sozialabgaben, keine Lohnsteuerpflicht für die Familie.' },
            ].map((item) => (
              <div key={item.schritt} className="flex gap-4 bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <span className="w-5 h-5 rounded-full bg-[#3D7A5C] text-white font-bold text-[10px] flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                <div>
                  <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.schritt}</p>
                  <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 id="primundus" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Wie Primundus Rechtssicherheit herstellt
          </h2>
          <div className="space-y-3 mb-10">
            {[
              'Jede Kraft kommt mit gültiger A1-Bescheinigung — kein Einsatz ohne',
              'Vertrag mit der Familie über Primundus als Agentur — kein verstecktes Arbeitsverhältnis',
              'Klare Leistungsbeschreibung die den Entsendecharakter dokumentiert',
              'Laufende Rechtsprüfung der Modellgestaltung — Änderungen in EU-Recht werden sofort umgesetzt',
              'Über 20 Jahre und 60.000+ Betreuungen: null rechtliche Probleme für Kundefamilien',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-[#E5E3DF]">
                <span className="w-5 h-5 rounded-full bg-[#E8F5EE] text-[#3D7A5C] flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">✓</span>
                <p className="text-[14px] text-[#2E2E2E]">{item}</p>
              </div>
            ))}
          </div>

          <h2 id="kontrolle" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Was bei einer Kontrolle passiert
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Kontrollen durch den Zoll (FKS), die Rentenversicherung oder Ausländerbehörde sind möglich — und seit Jahren häufiger. Was dann zu tun ist:
          </p>
          <div className="space-y-3 mb-6">
            {[
              { schritt: 'Ruhe bewahren', detail: 'Eine Kontrolle ist kein Problem wenn das Entsendemodell korrekt umgesetzt ist.' },
              { schritt: 'A1-Bescheinigung vorzeigen', detail: 'Das zentrale Dokument. Liegt immer bei der Betreuungskraft. Belegt den legalen EU-Entsendestatus.' },
              { schritt: 'Primundus-Vertrag parat haben', detail: 'Der Vertrag mit Primundus belegt das korrekte Agenturverhältnis — kein eigenes Arbeitsverhältnis der Familie.' },
              { schritt: 'Primundus sofort anrufen', detail: '089 200 000 830 — Primundus unterstützt bei allen behördlichen Rückfragen.' },
            ].map((item, i) => (
              <div key={item.schritt} className="flex gap-4 bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <span className="w-8 h-8 rounded-full bg-[#8B7355] text-white font-bold text-[15px] flex items-center justify-center flex-shrink-0">{i + 1}</span>
                <div>
                  <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.schritt}</p>
                  <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Hintergründe:{' '}
            <a href="/pflegekraft-legal-beschaeftigen/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Pflegekraft legal beschäftigen — die 3 Modelle</a>
            {' · '}
            <a href="/scheinselbststaendigkeit-pflege-vermeiden/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Scheinselbstständigkeit vermeiden</a>
          </p>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Wie ist 24h-Pflege rechtssicher zu organisieren?', a: 'Über das Entsendemodell mit A1-Bescheinigung. Kraft ist im EU-Heimatland angestellt, kommt mit A1-Bescheinigung, Familie hat kein eigenes Arbeitsverhältnis.' },
              { q: 'Was passiert bei einer behördlichen Kontrolle?', a: 'A1-Bescheinigung vorzeigen, Primundus-Vertrag zeigen, Primundus anrufen (089 200 000 830). Kein Problem bei korrektem Entsendemodell.' },
              { q: 'Warum ist "selbstständige Pflegekraft" riskant?', a: 'Scheinselbstständigkeit — bei 24h-Pflege fast immer vorhanden. Behörden fordern Sozialversicherungsbeiträge für bis zu 4 Jahre nach, plus Bußgelder und Strafverfolgung.' },
              { q: 'Ist das Entsendemodell in ganz Deutschland legal?', a: 'Ja — das Entsendemodell basiert auf EU-Recht und gilt in allen 16 Bundesländern. Primundus wendet es seit über 20 Jahren ohne einen einzigen Rechtsfall an.' },
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
