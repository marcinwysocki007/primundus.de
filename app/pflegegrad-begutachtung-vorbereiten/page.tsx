import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [
  { id: 'vorbereitung', title: 'Die wichtigste Vorbereitung' },
  { id: 'checkliste', title: 'Checkliste für den Termin' },
  { id: 'tipps', title: '7 Tipps für höhere Einstufung' },
  { id: 'ablauf', title: 'Was beim Termin passiert' },
  { id: 'danach', title: 'Nach der Begutachtung' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'MD-Begutachtung vorbereiten — Checkliste & 7 Tipps | Primundus',
  description: 'MD-Begutachtung vorbereiten: Pflegetagebuch führen, den schlechtesten Tag schildern, Vertrauensperson einladen. Checkliste + 7 Tipps für höhere Pflegegrad-Einstufung.',
  alternates: { canonical: 'https://primundus.de/pflegegrad-begutachtung-vorbereiten/' },
  openGraph: {
    title: 'MD-Begutachtung vorbereiten | Primundus',
    description: 'Checkliste und 7 Tipps für die MD-Begutachtung — so erreichen Sie eine faire und korrekte Einstufung.',
    url: 'https://primundus.de/pflegegrad-begutachtung-vorbereiten/',
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
    headline: 'MD-Begutachtung vorbereiten — Checkliste & 7 Tipps für höhere Einstufung',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/pflegegrad-begutachtung-vorbereiten/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Pflegegrade', item: 'https://primundus.de/pflegegrade/' },
      { '@type': 'ListItem', position: 3, name: 'Begutachtung vorbereiten', item: 'https://primundus.de/pflegegrad-begutachtung-vorbereiten/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'MD-Begutachtung optimal vorbereiten',
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Pflegetagebuch führen', text: '1–2 Wochen vor dem Termin täglich dokumentieren: Welche Hilfe ist bei welcher Tätigkeit nötig, wie lange dauert es?' },
      { '@type': 'HowToStep', position: 2, name: 'Unterlagen zusammenstellen', text: 'Aktuelle Arztberichte, Krankenhausentlassbriefe, Medikamentenliste, Befundberichte bereithalten.' },
      { '@type': 'HowToStep', position: 3, name: 'Vertrauensperson einladen', text: 'Eine Vertrauensperson darf beim Termin dabei sein und wichtige Details ergänzen.' },
      { '@type': 'HowToStep', position: 4, name: 'Schlechtesten Tag schildern', text: 'Den tatsächlichen schlechtesten Tagesverlauf beschreiben — nicht den guten Tag. Nichts beschönigen.' },
      { '@type': 'HowToStep', position: 5, name: 'Bescheid prüfen', text: 'Nach dem Bescheid prüfen: Stimmt der Pflegegrad? Bei Zweifeln innerhalb eines Monats Widerspruch einlegen.' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was passiert bei der MD-Begutachtung?', acceptedAnswer: { '@type': 'Answer', text: 'Ein Gutachter des Medizinischen Dienstes (MD) kommt nach Hause und bewertet die Selbstständigkeit in sechs Lebensbereichen: Mobilität, kognitive Fähigkeiten, Verhaltensweisen, Selbstversorgung, krankheitsbedingte Anforderungen und Alltagsleben. Die Punktzahl bestimmt den Pflegegrad.' } },
      { '@type': 'Question', name: 'Wie lange dauert die MD-Begutachtung?', acceptedAnswer: { '@type': 'Answer', text: 'Typischerweise 30–90 Minuten — je nach Pflegesituation und wie viele Unterlagen vorliegen. Der Gutachter stellt Fragen zu den einzelnen Lebensbereichen und beobachtet teilweise direkt.' } },
      { '@type': 'Question', name: 'Was ist das Pflegetagebuch und warum ist es so wichtig?', acceptedAnswer: { '@type': 'Answer', text: 'Das Pflegetagebuch ist eine tägliche Dokumentation welche Hilfe bei welchen Tätigkeiten benötigt wird und wie lange das dauert. Es ist das stärkste Argument für eine korrekte und faire Einstufung — weil es Schwankungen im Pflegebedarf objektiv belegt.' } },
    ],
  },
]

export default function BegutachtungVorbereiten() {
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
            <a href="/pflegegrade/" className="hover:text-[#8B7355] transition-colors">Pflegegrade</a>
            <span>›</span>
            <span className="text-[#1C1C1C]">Begutachtung vorbereiten</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>7 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            MD-Begutachtung vorbereiten — Checkliste & 7 Tipps
          </h1>

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            Die MD-Begutachtung entscheidet über den Pflegegrad — und damit über hunderte Euro Kassenzuschuss pro Monat. Wer gut vorbereitet ist, bekommt eine faire Einstufung. Wer aus Scham minimiert, verschenkt Geld. Die wichtigste Vorbereitung: Das Pflegetagebuch. Es dauert 5 Minuten täglich und macht den größten Unterschied.
          </p>

          <div className="bg-white border border-[#E5E3DF] rounded-2xl p-6 mb-10 shadow-sm">
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#A89279] mb-3">Auf einen Blick</p>
            <ul className="space-y-2.5">
              {[
                'Pflegetagebuch: 1–2 Wochen vor dem Termin beginnen — wichtigstes Vorbereitungsmittel',
                'Vertrauensperson: Angehöriger beim Termin dabei — darf ergänzen und korrigieren',
                'Unterlagen: Arztberichte, Medikamentenliste, Krankenhausbriefe bereithalten',
                'Schlechtesten Tag schildern: Nicht den guten Tag — den schwersten Tagesverlauf',
                'Nichts beschönigen: Aus Scham minimieren kostet monatlich hunderte Euro',
                'Nach Bescheid: Innerhalb eines Monats Widerspruch wenn Einstufung zu niedrig',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-[#2E2E2E]">
                  <span className="w-5 h-5 rounded-full bg-[#E8F5EE] text-[#3D7A5C] flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* SECTION 1 */}
          <h2 id="vorbereitung" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Die wichtigste Vorbereitung: Das Pflegetagebuch
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-4">
            Das Pflegetagebuch ist die wirkungsvollste Vorbereitung auf die MD-Begutachtung. Es dokumentiert täglich — möglichst 1–2 Wochen vor dem Termin — welche Hilfe bei welchen Tätigkeiten nötig ist und wie lange das dauert.
          </p>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Warum ist es so wichtig? Der Gutachter bewertet einen einzigen Besuch. Pflege schwankt aber — manche Tage sind besser, manche schlechter. Das Pflegetagebuch belegt den tatsächlichen Pflegebedarf über mehrere Tage und gibt dem Gutachter ein realistisches Bild.
          </p>

          <div className="bg-white rounded-2xl border border-[#E5E3DF] overflow-hidden mb-6 shadow-sm">
            <div className="px-5 py-3 bg-[#F8F7F5] border-b border-[#E5E3DF]">
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#8B8B8B]">Was ins Pflegetagebuch gehört — täglich eintragen</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#F8F7F5]">
                    {['Bereich', 'Konkrete Fragen'].map(h => (
                      <th key={h} className="px-4 py-3 text-[12px] font-semibold text-[#8B8B8B] text-left border-b border-[#E5E3DF]">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Körperpflege', 'Wer hilft beim Waschen, Anziehen, Zähneputzen? Wie lange braucht es?'],
                    ['Mobilität', 'Kann die Person allein aufstehen, gehen, Treppen steigen? Mit oder ohne Hilfe?'],
                    ['Ernährung', 'Wer kocht, wer hilft beim Essen? Kann die Person allein essen?'],
                    ['Medikamente', 'Wer gibt Medikamente? Kann die Person das selbst verwalten?'],
                    ['Orientierung', 'Weiß die Person wo sie ist, welcher Tag es ist? Gibt es Verwirrung?'],
                    ['Nacht', 'Wie oft muss in der Nacht geholfen werden? Schlafstörungen?'],
                    ['Arzttermine', 'Wer begleitet zu Arztterminen? Kann die Person das allein?'],
                  ].map(([bereich, fragen], i) => (
                    <tr key={bereich} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8F7F5]'}>
                      <td className="px-4 py-3 text-[14px] font-semibold text-[#1C1C1C] border-b border-[#E5E3DF] w-[35%]">{bereich}</td>
                      <td className="px-4 py-3 text-[13px] text-[#2E2E2E] border-b border-[#E5E3DF]">{fragen}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* SECTION 2 */}
          <h2 id="checkliste" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Checkliste für den Begutachtungstermin
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Diese Unterlagen und Vorbereitungen sollten am Tag des Termins bereitliegen:
          </p>
          <div className="space-y-3 mb-10">
            {[
              { done: true, item: 'Pflegetagebuch der letzten 1–2 Wochen' },
              { done: true, item: 'Aktuelle Arztberichte und Befunde (möglichst nicht älter als 6 Monate)' },
              { done: true, item: 'Krankenhausentlassbriefe' },
              { done: true, item: 'Vollständige Medikamentenliste mit Dosierungen' },
              { done: true, item: 'Vertrauensperson (Angehöriger, Freund) angefragt und bereit' },
              { done: true, item: 'Pflegehilfsmittel sichtbar aufgestellt (Rollator, Pflegebett, Badewannenlifter)' },
              { done: true, item: 'Notizen zu schwierigen Tagen und Situationen der letzten Wochen' },
              { done: true, item: 'Vorsorgevollmacht oder Betreuungsbeschluss wenn relevant' },
            ].map((item) => (
              <div key={item.item} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-[#E5E3DF]">
                <span className="w-5 h-5 rounded-full bg-[#E8F5EE] text-[#3D7A5C] flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">✓</span>
                <p className="text-[14px] text-[#2E2E2E]">{item.item}</p>
              </div>
            ))}
          </div>

          {/* SECTION 3 */}
          <h2 id="tipps" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            7 Tipps für eine korrekte und faire Einstufung
          </h2>
          <div className="space-y-4 mb-10">
            {[
              { n: '1', title: 'Den schlechtesten Tag schildern', desc: 'Der Gutachter fragt nach dem typischen schlechtesten Tagesverlauf. Nicht den durchschnittlichen guten Tag beschreiben — sondern den Tag wenn es wirklich schlecht läuft. Dieser Tag ist die Grundlage der Einstufung.' },
              { n: '2', title: 'Vertrauensperson mitnehmen', desc: 'Eine Begleitperson darf beim Termin dabei sein — und sollte es. Sie kann Details ergänzen die dem Pflegebedürftigen entfallen, und beschönigendes Verhalten sanft korrigieren. Das ist ausdrücklich erlaubt.' },
              { n: '3', title: 'Nichts aus Scham verschweigen', desc: 'Viele Menschen minimieren aus Scham: "Ich schaffe das noch selbst" — obwohl es mit großer Anstrengung oder Hilfe geschieht. Was nur mit Hilfe möglich ist, gilt als nicht selbstständig. Das muss gesagt werden.' },
              { n: '4', title: 'Hilfe beim Anziehen demonstrieren', desc: 'Der Gutachter schaut manchmal zu. Wenn möglich, soll die pflegende Person normal helfen — so wie es jeden Tag ist. Keine "Sondervorstellung" für den Gutachter.' },
              { n: '5', title: 'Schwankungen im Pflegebedarf benennen', desc: 'Wenn mancher Tage besser, manche schlechter sind — das explizit sagen und mit dem Pflegetagebuch belegen. Schwankungen werden für die Einstufung berücksichtigt.' },
              { n: '6', title: 'Nächteproble ansprechen', desc: 'Nächtlicher Hilfebedarf wird oft vergessen. Wie oft muss in der Nacht geholfen werden? Wer ist dann wach? Nachtunruhe, Toilettengänge, Orientierungslosigkeit — alles relevant.' },
              { n: '7', title: 'Nach dem Termin: Gutachten anfordern', desc: 'Das Gutachten des MD kann angefordert werden. Es zeigt wie der Gutachter jeden einzelnen Bereich bewertet hat — und ist die Grundlage für einen gezielten Widerspruch wenn nötig.' },
            ].map((tip) => (
              <div key={tip.n} className="flex gap-4 bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <span className="w-8 h-8 rounded-full bg-[#8B7355] text-white font-bold text-[15px] flex items-center justify-center flex-shrink-0 mt-0.5">{tip.n}</span>
                <div>
                  <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{tip.title}</p>
                  <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* SECTION 4 */}
          <h2 id="ablauf" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Was beim Termin passiert
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Der MD-Gutachter bewertet sechs Lebensbereiche — je nach Selbstständigkeit in jedem Bereich werden Punkte vergeben. Die Punktsumme ergibt den Pflegegrad.
          </p>
          <div className="space-y-3 mb-6">
            {[
              { bereich: 'Mobilität (10 %)', desc: 'Aufstehen, Gehen, Positionswechsel, Treppensteigen. Kann die Person das selbstständig, mit Aufsicht, mit Hilfe oder gar nicht?' },
              { bereich: 'Kognition & Kommunikation (15 %)', desc: 'Örtliche/zeitliche Orientierung, Gedächtnis, Entscheidungen treffen, Gespräche führen, Gefahren verstehen.' },
              { bereich: 'Verhaltensweisen & Psyche (15 %)', desc: 'Ängste, Aggressionen, Schlafstörungen, Selbst-/Fremdgefährdung — besonders relevant bei Demenz.' },
              { bereich: 'Selbstversorgung (40 %)', desc: 'Körperpflege, Ankleiden, Essen und Trinken, Ausscheidungen, Medikamente. Höchste Gewichtung — hier zählt jedes Detail.' },
              { bereich: 'Krankheitsbedingte Anforderungen (20 %)', desc: 'Medikamente, Verbandswechsel, Arztbesuche, Therapien — was ist nötig und wie viel Hilfe wird dabei gebraucht?' },
              { bereich: 'Alltagsleben (keine eigene Gewichtung)', desc: 'Tagesstruktur, soziale Kontakte, Freizeitgestaltung — fließt in die Gesamtbewertung ein.' },
            ].map((item) => (
              <div key={item.bereich} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.bereich}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* SECTION 5 */}
          <h2 id="danach" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Nach der Begutachtung — Bescheid prüfen
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Innerhalb von 25 Arbeitstagen kommt der Bescheid der Pflegekasse. Jetzt heißt es: kritisch prüfen.
          </p>
          <div className="space-y-3 mb-6">
            {[
              { title: 'Stimmt der Pflegegrad?', desc: 'Entspricht er dem tatsächlichen Pflegebedarf? Wurden alle geschilderten Einschränkungen im Gutachten berücksichtigt? Das Gutachten kann angefordert werden.' },
              { title: 'Zu niedrige Einstufung — was tun?', desc: 'Innerhalb eines Monats schriftlich Widerspruch einlegen. Pflegetagebuch nachreichen, aktualisierte Arztberichte beilegen. Widersprüche sind häufig erfolgreich.' },
              { title: 'Gutachten anfordern', desc: 'Das vollständige MD-Gutachten kann bei der Pflegekasse angefordert werden. Es zeigt wie jeder Bereich bewertet wurde — Grundlage für gezielten Widerspruch.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.title}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-[#2E2E2E] mb-10">
            → Widerspruch einlegen:{' '}
            <a href="/pflegegrad-widerspruch-einlegen/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Pflegegrad Widerspruch — Muster & Tipps</a>
            {' · '}
            <a href="/pflegegrad-beantragen/" className="text-[#8B7355] underline hover:text-[#7D6E5D]">Pflegegrad beantragen — vollständige Anleitung</a>
          </p>

          {/* FAQ */}
          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">
            Häufige Fragen zur MD-Begutachtung
          </h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Was passiert bei der MD-Begutachtung?', a: 'Ein Gutachter kommt nach Hause und bewertet die Selbstständigkeit in sechs Bereichen: Mobilität, Kognition, Verhaltensweisen, Selbstversorgung, krankheitsbedingte Anforderungen und Alltagsleben. Die Punktsumme bestimmt den Pflegegrad.' },
              { q: 'Wie lange dauert die Begutachtung?', a: 'Typischerweise 30–90 Minuten, je nach Pflegesituation und Unterlagenmenge.' },
              { q: 'Was ist das Pflegetagebuch und warum ist es wichtig?', a: 'Eine tägliche Dokumentation welche Hilfe wann nötig ist und wie lange. Es ist das stärkste Argument für eine korrekte Einstufung — weil es Schwankungen im Pflegebedarf objektiv belegt. 1–2 Wochen vor dem Termin beginnen.' },
              { q: 'Darf jemand beim Termin dabei sein?', a: 'Ja — und es ist ausdrücklich empfohlen. Eine Vertrauensperson kann Details ergänzen, die dem Pflegebedürftigen entfallen, und beschönigendes Verhalten sanft korrigieren.' },
              { q: 'Was tue ich wenn der Pflegegrad zu niedrig ist?', a: 'Innerhalb eines Monats schriftlich Widerspruch bei der Pflegekasse einlegen. Pflegetagebuch nachreichen, aktualisierte Arztberichte beilegen. MD-Gutachten anfordern um zu verstehen welche Bereiche zu niedrig bewertet wurden.' },
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
