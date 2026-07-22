import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { AuthorByline } from '@/components/AuthorByline'

const SECTIONS = [
  { id: 'modelle', title: 'Die 3 Beschäftigungsmodelle' },
  { id: 'entsendemodell', title: 'Entsendemodell — der sichere Weg' },
  { id: 'direktanstellung', title: 'Direktanstellung' },
  { id: 'scheinselbststaendigkeit', title: 'Scheinselbstständigkeit vermeiden' },
  { id: 'a1-bescheinigung', title: 'Die A1-Bescheinigung' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflegekraft legal beschäftigen — die 3 Modelle 2026 | Primundus',
  description: 'Pflegekraft legal beschäftigen: Entsendemodell, Direktanstellung oder Selbstständigkeit? Was legal ist, was Scheinselbstständigkeit kostet und was die A1-Bescheinigung bedeutet.',
  alternates: { canonical: 'https://primundus.de/pflegekraft-legal-beschaeftigen/' },
  openGraph: {
    title: 'Pflegekraft legal beschäftigen — 3 Modelle | Primundus',
    description: 'Entsendemodell, Direktanstellung, Scheinselbstständigkeit: Was legal ist und was teuer werden kann.',
    url: 'https://primundus.de/pflegekraft-legal-beschaeftigen/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
    images: [{ url: '/images/primundus_logo_header.webp' }],
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pflegekraft legal beschäftigen — die 3 Modelle 2026',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/pflegekraft-legal-beschaeftigen/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Organisation', item: 'https://primundus.de/organisation/' },
      { '@type': 'ListItem', position: 3, name: 'Pflegekraft legal beschäftigen', item: 'https://primundus.de/pflegekraft-legal-beschaeftigen/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Wie kann ich eine Pflegekraft legal beschäftigen?', acceptedAnswer: { '@type': 'Answer', text: 'Es gibt drei legale Wege: Das Entsendemodell (empfohlen) über eine Agentur — die Kraft ist im EU-Heimatland angestellt und kommt mit A1-Bescheinigung; die Direktanstellung — die Familie ist Arbeitgeberin; oder als angemeldete Selbstständige. Scheinselbstständigkeit ist illegal und führt zu Nachzahlungen.' } },
      { '@type': 'Question', name: 'Was ist das Entsendemodell?', acceptedAnswer: { '@type': 'Answer', text: 'Beim Entsendemodell ist die Pflegekraft bei einem Unternehmen im EU-Heimatland angestellt und wird für typischerweise 6–8 Wochen nach Deutschland entsandt. Mit A1-Bescheinigung ist sie rechtlich abgesichert. Die Familie schließt einen Vertrag mit der deutschen Agentur — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben.' } },
      { '@type': 'Question', name: 'Was ist Scheinselbstständigkeit bei Pflegekräften?', acceptedAnswer: { '@type': 'Answer', text: 'Scheinselbstständigkeit liegt vor wenn eine Pflegekraft formal als Selbstständige bezeichnet wird, faktisch aber weisungsgebunden im Haushalt lebt und arbeitet. Die Folge: Nachzahlung aller Sozialabgaben der letzten 4 Jahre plus Bußgelder — ein erhebliches finanzielles Risiko für die Familie.' } },
      { '@type': 'Question', name: 'Was ist die A1-Bescheinigung?', acceptedAnswer: { '@type': 'Answer', text: 'Die A1-Bescheinigung ist ein EU-Dokument das belegt, dass die Pflegekraft in ihrem Heimatland (z.B. Polen) sozialversichert ist. Damit fallen in Deutschland keine Sozialabgaben an. Sie wird vom Arbeitgeber im Heimatland ausgestellt und muss bei der Kraft vorliegen.' } },
    ],
  },
]

export default function PflegekraftLegalBeschaeftigen() {
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
            <a href="/organisation/" className="hover:text-[#8B7355] transition-colors">Organisation</a>
            <span>›</span>
            <span className="text-[#1C1C1C]">Pflegekraft legal beschäftigen</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>7 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            Pflegekraft legal beschäftigen — die 3 Wege
          </h1>

          <AuthorByline updated="25. April 2026" />

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            Es gibt drei Wege eine Pflegekraft zu beschäftigen — nur zwei davon sind legal, einer ist eindeutig empfehlenswert. Das Entsendemodell über eine Agentur ist der rechtssicherste, unkomplizierteste und meistgenutzte Weg. Scheinselbstständigkeit dagegen ist strafbar und kostet im Ernstfall tausende Euro.
          </p>

          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 mb-10 shadow-sm">
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#A89279] mb-3">Auf einen Blick</p>
            <ul className="space-y-2.5">
              {[
                'Entsendemodell: Empfohlen — Kraft ist im EU-Heimatland angestellt, A1-Bescheinigung',
                'Direktanstellung: Legal, aber hoher Aufwand für die Familie als Arbeitgeberin',
                'Scheinselbstständigkeit: Illegal — Nachzahlungen Sozialabgaben + Bußgelder',
                'A1-Bescheinigung: Muss immer vorliegen — belegt legale EU-Entsendung',
                'Mindestlohn: Auch für entsandte EU-Kräfte gilt der deutsche Mindestlohn',
                'Primundus: Ausschließlich Entsendemodell — vollständige Rechtssicherheit',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-[#2E2E2E]">
                  <span className="w-5 h-5 rounded-full bg-[#E8F5EE] text-[#3D7A5C] flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* SECTION 1 */}
          <h2 id="modelle" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Die 3 Beschäftigungsmodelle im Überblick
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Für Familien die eine 24h-Betreuungskraft suchen, gibt es drei Modelle. Sie unterscheiden sich in Rechtssicherheit, Aufwand und Kosten erheblich.
          </p>

          <div className="bg-white rounded-2xl border border-[#E5E3DF] overflow-hidden mb-8 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#F8F7F5]">
                    {['Modell', 'Rechtssicherheit', 'Aufwand Familie', 'Empfehlung'].map(h => (
                      <th key={h} className="px-4 py-3 text-[12px] font-semibold text-[#8B8B8B] text-left border-b border-[#E5E3DF]">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Entsendemodell', '✓ Vollständig', 'Gering', '★ Empfohlen'],
                    ['Direktanstellung', '✓ Legal', 'Hoch', 'Möglich'],
                    ['Scheinselbstständigkeit', '✗ Illegal', '—', '✗ Verboten'],
                  ].map(([modell, recht, aufwand, empf], i) => (
                    <tr key={modell} className={i === 0 ? 'bg-[#F2EDE6]' : i % 2 === 0 ? 'bg-white' : 'bg-[#F8F7F5]'}>
                      <td className={`px-4 py-3 text-[14px] font-semibold border-b border-[#E5E3DF] ${i === 0 ? 'text-[#8B7355]' : 'text-[#1C1C1C]'}`}>{modell}</td>
                      <td className={`px-4 py-3 text-[14px] border-b border-[#E5E3DF] ${recht.startsWith('✓') ? 'text-[#3D7A5C]' : 'text-[#E76F63]'}`}>{recht}</td>
                      <td className="px-4 py-3 text-[14px] text-[#2E2E2E] border-b border-[#E5E3DF]">{aufwand}</td>
                      <td className={`px-4 py-3 text-[14px] font-semibold border-b border-[#E5E3DF] ${i === 0 ? 'text-[#8B7355]' : i === 2 ? 'text-[#E76F63]' : 'text-[#2E2E2E]'}`}>{empf}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* SECTION 2 */}
          <h2 id="entsendemodell" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Entsendemodell — der rechtssichere Weg
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Beim Entsendemodell ist die Pflegekraft bei einem Unternehmen in ihrem EU-Heimatland (z.B. Polen, Bulgarien, Rumänien) angestellt. Sie wird für typischerweise 6–8 Wochen nach Deutschland entsandt — mit A1-Bescheinigung als EU-rechtlichem Absicherungsdokument. Die Familie schließt einen Vertrag mit der deutschen Vermittlungsagentur.
          </p>
          <div className="space-y-3 mb-6">
            {[
              { title: 'Für die Familie', desc: 'Kein eigenes Arbeitsverhältnis mit der Kraft. Keine deutschen Lohnabrechnungen. Keine Sozialversicherungspflichten in Deutschland. Klare Vertragspartnerschaft mit der Agentur — bei Problemen ist die Agentur der Ansprechpartner.' },
              { title: 'Für die Betreuungskraft', desc: 'Angestellt im Heimatland mit allen Sozialversicherungsleistungen. A1-Bescheinigung sichert legalen Status in Deutschland. Regelmäßiger Wechsel alle 6–8 Wochen ermöglicht Rückkehr zur Familie.' },
              { title: 'Für die Rechtssicherheit', desc: 'Vollständig konform mit EU-Recht und deutschem Arbeitsrecht. Mindestlohn gilt auch für entsandte Kräfte. Bei Kontrolle durch Zoll oder Finanzkontrolle Schwarzarbeit: A1-Bescheinigung sofort vorzeigen.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.title}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Pflegekraft aus Polen im Entsendemodell:{' '}
            <a href="/pflegekraft-aus-polen/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Pflegekraft aus Polen — legal & sicher</a>
          </p>

          {/* SECTION 3 */}
          <h2 id="direktanstellung" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Direktanstellung — legal aber aufwendig
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Die Familie stellt die Betreuungskraft selbst als Arbeitgeberin an. Das ist rechtlich eindeutig — bedeutet aber erheblichen Aufwand.
          </p>
          <div className="space-y-3 mb-6">
            {[
              { title: 'Was die Familie übernimmt', desc: 'Lohnabrechnung jeden Monat, Anmeldung bei Krankenkasse und Rentenversicherung, Urlaubsansprüche, Lohnfortzahlung bei Krankheit, Kündigung nach Arbeitsrecht, Suche nach Urlaubsvertretung.' },
              { title: 'Wann sinnvoll', desc: 'Wenn eine langfristige Beziehung mit einer bestimmten Kraft angestrebt wird und die Familie bereit ist, Arbeitgeberpflichten zu übernehmen. Oder wenn kein Entsendemodell verfügbar ist.' },
              { title: 'Was zu beachten ist', desc: 'Mindestlohn gilt. Arbeitszeitgesetz gilt — max. 8 Stunden täglich reguläre Arbeitszeit, Ruhezeiten müssen eingehalten werden. Wohn- und Verpflegungsleistungen können angerechnet werden.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.title}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* SECTION 4 */}
          <h2 id="scheinselbststaendigkeit" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Scheinselbstständigkeit — das größte Risiko
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Scheinselbstständigkeit liegt vor wenn eine Pflegekraft formal als Selbstständige bezeichnet wird, tatsächlich aber weisungsgebunden, dauerhaft und ausschließlich in einem Haushalt tätig ist. Das ist keine Grauzone — es ist eindeutig illegal.
          </p>

          <div className="bg-[#FDF0EE] border border-[rgba(231,111,99,0.2)] rounded-2xl p-6 mb-6">
            <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#8B3E2F] mb-3">Was Scheinselbstständigkeit konkret kostet</p>
            <div className="space-y-2">
              {[
                ['Nachzahlung Sozialabgaben', 'Arbeitgeber- und Arbeitnehmeranteil der letzten 4 Jahre'],
                ['Bußgelder', 'Bis zu 500.000 € bei gewerbsmäßiger Scheinselbstständigkeit'],
                ['Strafverfolgung', 'Vorenthalten von Sozialabgaben ist ein Straftatbestand'],
                ['Rückwirkende Lohnfortzahlung', 'Urlaub, Krankheit, Mutterschutz rückwirkend nachzuzahlen'],
              ].map(([was, folge]) => (
                <div key={was} className="flex gap-3">
                  <span className="text-[#E76F63] font-bold text-[14px] flex-shrink-0 w-[180px]">{was}</span>
                  <span className="text-[14px] text-[#8B3E2F]">{folge}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Anzeichen für Scheinselbstständigkeit die Behörden prüfen: Die Kraft hat nur einen Auftraggeber. Sie ist in die Haushaltsorganisation vollständig eingebunden. Sie hat keine eigenen Betriebsmittel. Sie kann ihre Arbeitszeit nicht frei gestalten.
          </p>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Mehr zum Thema:{' '}
            <a href="/scheinselbststaendigkeit-pflege-vermeiden/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Scheinselbstständigkeit vermeiden — alle Risiken</a>
          </p>

          {/* SECTION 5 */}
          <h2 id="a1-bescheinigung" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Die A1-Bescheinigung — was sie bedeutet
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Die A1-Bescheinigung ist das zentrale Dokument im Entsendemodell. Sie wird vom Arbeitgeber im Heimatland ausgestellt und belegt: Diese Person ist in ihrem Heimatland sozialversichert und darf deshalb in Deutschland ohne zusätzliche Sozialabgaben tätig sein.
          </p>
          <div className="space-y-3 mb-6">
            {[
              { title: 'Wer stellt sie aus?', desc: 'Der Arbeitgeber im Heimatland — also das polnische, bulgarische oder rumänische Pflegeunternehmen — beantragt sie bei der zuständigen Sozialversicherungsbehörde.' },
              { title: 'Was sie belegt', desc: 'Sozialversicherungspflicht im Heimatland. Dass in Deutschland keine doppelten Sozialabgaben anfallen. Dass die Entsendung zeitlich begrenzt ist (max. 24 Monate).' },
              { title: 'Was bei Kontrolle passiert', desc: 'Bei Kontrolle durch die Finanzkontrolle Schwarzarbeit (FKS) muss die A1-Bescheinigung sofort vorgezeigt werden können. Fehlt sie, können Bußgelder verhängt werden — auch gegen die Familie als Auftraggeber.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.title}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Vertragsgestaltung:{' '}
            <a href="/pflegevertrag-aufsetzen/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Pflegevertrag aufsetzen — was muss rein?</a>
          </p>

          {/* FAQ */}
          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">
            Häufige Fragen zur legalen Beschäftigung
          </h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Wie kann ich eine Pflegekraft legal beschäftigen?', a: 'Drei Wege: Entsendemodell über Agentur (empfohlen, kein eigenes Arbeitsverhältnis), Direktanstellung (legal, aber hoher Aufwand), oder angemeldete Selbstständigkeit (nur wenn echte unternehmerische Freiheit besteht). Scheinselbstständigkeit ist illegal.' },
              { q: 'Was ist das Entsendemodell?', a: 'Die Pflegekraft ist bei einem EU-Unternehmen angestellt und wird mit A1-Bescheinigung nach Deutschland entsandt. Die Familie hat Vertrag mit der Agentur — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben.' },
              { q: 'Was ist Scheinselbstständigkeit?', a: 'Wenn eine Pflegekraft formal als Selbstständige gilt, aber faktisch weisungsgebunden dauerhaft in einem Haushalt arbeitet. Folge: Nachzahlung aller Sozialabgaben der letzten 4 Jahre plus Bußgelder.' },
              { q: 'Was ist die A1-Bescheinigung?', a: 'EU-Dokument das belegt, dass die Pflegekraft im Heimatland sozialversichert ist. Muss bei der Kraft immer vorliegen. Bei Kontrolle sofort vorzeigen. Fehlt sie, drohen Bußgelder.' },
              { q: 'Gilt der Mindestlohn auch für Pflegekräfte aus Polen?', a: 'Ja — der deutsche Mindestlohn gilt für alle in Deutschland tätigen Personen, auch für entsandte EU-Kräfte. Beim Entsendemodell stellt das Heimatunternehmen sicher dass Mindestlohn und Arbeitszeitrecht eingehalten werden.' },
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
