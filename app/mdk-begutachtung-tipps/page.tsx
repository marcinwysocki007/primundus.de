import type { Metadata } from 'next'
import { ArticleCTA } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

const SECTIONS = [
  { id: 'ablauf', title: 'Wie die MDK-Begutachtung abläuft' },
  { id: 'vorbereitung', title: 'Konkrete Vorbereitung' },
  { id: 'pflegetagebuch', title: 'Das Pflegetagebuch' },
  { id: 'am-tag', title: 'Am Begutachtungstag' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'MDK-Begutachtung Tipps — so bereiten Sie sich vor | Primundus',
  description: 'MDK-Begutachtung vorbereiten: Wie der Besuch abläuft, was geprüft wird, welche Tipps wirklich helfen und wie ein Pflegetagebuch den Pflegegrad sichert.',
  alternates: { canonical: 'https://primundus.de/mdk-begutachtung-tipps/' },
  openGraph: {
    title: 'MDK-Begutachtung Tipps 2026 | Primundus',
    description: 'MDK-Besuch vorbereiten: Ablauf, Checkliste, Pflegetagebuch — so sichern Sie den richtigen Pflegegrad.',
    url: 'https://primundus.de/mdk-begutachtung-tipps/',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'MDK-Begutachtung Tipps — so bereiten Sie sich richtig vor',
    author: { '@type': 'Person', name: 'Ilka Wysocki', worksFor: { '@type': 'Organization', name: 'Primundus' } },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    dateModified: '2026-04-25',
    mainEntityOfPage: 'https://primundus.de/mdk-begutachtung-tipps/',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Pflegegrade', item: 'https://primundus.de/pflegegrade/' },
      { '@type': 'ListItem', position: 3, name: 'MDK-Begutachtung Tipps', item: 'https://primundus.de/mdk-begutachtung-tipps/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Wie bereitet man sich auf die MDK-Begutachtung vor?',
        acceptedAnswer: { '@type': 'Answer', text: 'Pflegetagebuch führen (mindestens 2 Wochen vor dem Besuch), alle Medikamente und Diagnosen auflisten, Hilfsmittel sichtbar platzieren, Angehörige beim Termin dabei haben, den schlechtesten Tag schildern — nicht den guten Tag.' },
      },
    ],
  },
]

export default function MdkBegutachtungTipps() {
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
            <span className="text-[#1C1C1C]">MDK-Begutachtung Tipps</span>
          </nav>

          <p className="flex items-center gap-1.5 text-[11px] text-[#A89279] mb-4">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>8 Min Lesezeit · Apr. 2026
          </p>

          <h1 className="text-[32px] md:text-[42px] font-bold text-[#1C1C1C] leading-tight mb-6">
            MDK-Begutachtung Tipps — so bereiten Sie sich richtig vor
          </h1>

          <p className="text-[17px] md:text-[19px] leading-relaxed text-[#2E2E2E] mb-8 font-medium">
            Die MDK-Begutachtung (seit 2023: MDS — Medizinischer Dienst) entscheidet über den Pflegegrad — und damit über hunderte Euro monatlich an Kassenzuschüssen. Viele Familien unterschätzen wie wichtig die Vorbereitung ist. Der Gutachter sieht den Pflegebedürftigen einmal, für etwa eine Stunde. Was in dieser Stunde gesagt und gezeigt wird, zählt.
          </p>

          <div className="bg-[#FDF0EE] border border-[rgba(231,111,99,0.2)] rounded-2xl p-5 mb-10">
            <p className="text-[14px] font-bold text-[#8B3E2F] mb-2">Der häufigste Fehler</p>
            <p className="text-[14px] text-[#8B3E2F] leading-relaxed">
              Pflegebedürftige geben sich beim Besuch des Gutachters mehr Mühe als sonst — aus Stolz oder um niemanden zu belasten. Das Ergebnis: zu niedriger Pflegegrad, zu wenig Zuschüsse. Den Gutachter interessiert der schlechteste typische Tag — nicht der gute Tag.
            </p>
          </div>

          <h2 id="ablauf" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Wie die MDK-Begutachtung abläuft
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Nach dem Pflegekassen-Antrag beauftragt die Kasse den Medizinischen Dienst mit einer Begutachtung. Ein Gutachter (Arzt oder Pflegefachkraft) kommt zu einem angekündigten Termin nach Hause.
          </p>
          <ol className="space-y-3 mb-10">
            {[
              { n: '1', title: 'Terminankündigung', desc: 'Kasse teilt Termin mit — in der Regel 1–2 Wochen Vorlauf. Termin kann verschoben werden wenn nötig.' },
              { n: '2', title: 'Hausbesuch ca. 60–90 Minuten', desc: 'Gutachter befragt Pflegebedürftigen und Angehörige. Prüft 6 Lebensbereiche (Module). Schaut sich die Wohnsituation an.' },
              { n: '3', title: 'Die 6 Module des NBA', desc: 'Mobilität, kognitive Fähigkeiten, Verhaltensweisen, Selbstversorgung, Umgang mit Erkrankungen, Alltagsleben. Jedes Modul wird einzeln bewertet und gewichtet.' },
              { n: '4', title: 'Gutachten und Bescheid', desc: 'Gutachter erstellt Bericht, Pflegekasse erteilt Bescheid. Dauer: 4–6 Wochen. Bei Widerspruch: erneute Begutachtung möglich.' },
            ].map((step) => (
              <li key={step.n} className="flex gap-4 bg-white rounded-xl p-5 border border-[#E5E3DF] list-none">
                <span className="w-8 h-8 rounded-full bg-[#8B7355] text-white font-bold text-[15px] flex items-center justify-center flex-shrink-0">{step.n}</span>
                <div>
                  <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{step.title}</p>
                  <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>

          <h2 id="vorbereitung" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Konkrete Vorbereitung — Checkliste
          </h2>
          <div className="space-y-2 mb-10">
            {[
              ['Pflegetagebuch mindestens 2 Wochen vor dem Termin beginnen', true],
              ['Medikamentenliste aktuell und vollständig ausdrucken', true],
              ['Alle Diagnosen und Krankenhausberichte bereithalten', true],
              ['Hilfsmittel sichtbar platzieren (Rollator, Badehilfen, Haltegriffe)', true],
              ['Angehörige oder Vertrauensperson beim Termin dabei haben', true],
              ['Liste aller benötigten Hilfen beim Waschen, Anziehen, Essen notieren', true],
              ['Nächtliche Unterbrechungen dokumentieren (wie oft, warum)', true],
              ['Den schlechtesten typischen Tag beschreiben — nicht den guten', true],
              ['Vorsorgevollmacht und Patientenverfügung griffbereit haben', false],
              ['Hausarzt informieren dass Begutachtung stattfindet', false],
            ].map(([item, pflicht]) => (
              <div key={item as string} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-[#E5E3DF]">
                <span className={`w-5 h-5 rounded flex-shrink-0 mt-0.5 flex items-center justify-center border-2 ${pflicht ? 'border-[#8B7355]' : 'border-[#C8C3BA]'}`}>
                  {pflicht && <span className="text-[#8B7355] text-[10px] font-bold">✓</span>}
                </span>
                <div>
                  <p className="text-[14px] text-[#2E2E2E]">{item as string}</p>
                  {pflicht && <p className="text-[11px] text-[#A89279] mt-0.5">Besonders wichtig</p>}
                </div>
              </div>
            ))}
          </div>

          <h2 id="pflegetagebuch" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Das Pflegetagebuch — das wichtigste Vorbereitungsinstrument
          </h2>
          <p className="text-[16px] leading-relaxed text-[#2E2E2E] mb-6">
            Ein Pflegetagebuch dokumentiert täglich welche Hilfe geleistet wurde — mit Zeitangaben. Es ist das stärkste Argument wenn der Gutachter fragt wie viel Unterstützung wirklich nötig ist.
          </p>
          <div className="bg-white rounded-2xl border border-[#E5E3DF] overflow-hidden mb-6">
            <div className="bg-[#F8F7F5] px-5 py-3 border-b border-[#E5E3DF]">
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#8B8B8B]">Was ins Pflegetagebuch gehört</p>
            </div>
            <div className="divide-y divide-[#E5E3DF]">
              {[
                { bereich: 'Morgens', inhalt: 'Aufstehen (alleine? mit Hilfe?), Waschen, Ankleiden, Frühstück — Zeit und Art der Hilfe' },
                { bereich: 'Tagsüber', inhalt: 'Toilettengänge, Medikamente, Mahlzeiten, Mobilität, Stürze, Verwirrtheitsepisoden' },
                { bereich: 'Abends', inhalt: 'Abendessen, Abendroutine, Zubettgehen — wie lange dauert es, wer hilft' },
                { bereich: 'Nachts', inhalt: 'Wie oft aufgewacht, warum, wer musste helfen, wie lange dauerte es' },
                { bereich: 'Besonderheiten', inhalt: 'Schlechte Tage dokumentieren — Aggressivität, Orientierungslosigkeit, Stürze, Schmerzen' },
              ].map((item) => (
                <div key={item.bereich} className="px-5 py-3">
                  <p className="text-[13px] font-bold text-[#1C1C1C] mb-0.5">{item.bereich}</p>
                  <p className="text-[13px] text-[#2E2E2E] leading-relaxed">{item.inhalt}</p>
                </div>
              ))}
            </div>
          </div>

          <h2 id="am-tag" className="text-[24px] md:text-[30px] font-bold text-[#1C1C1C] mt-10 mb-4 leading-snug">
            Am Begutachtungstag — was zu beachten ist
          </h2>
          <div className="space-y-3 mb-10">
            {[
              { tip: 'Angehörigen dabeihaben', desc: 'Eine vertraute Person ergänzt und korrigiert wenn der Pflegebedürftige etwas vergisst oder unterschätzt.' },
              { tip: 'Nicht übertreiben — aber auch nicht untertreiben', desc: 'Den normalen schwierigen Alltag beschreiben. Keine Dramatisierung nötig, aber auch kein Schönreden.' },
              { tip: 'Konkrete Beispiele nennen', desc: '"Er kann die Hose nicht alleine anziehen weil er das Gleichgewicht verliert" ist stärker als "Er braucht manchmal Hilfe."' },
              { tip: 'Pflegetagebuch bereithalten', desc: 'Dem Gutachter zeigen. Es belegt was verbal gesagt wird.' },
              { tip: 'Hilfsmittel nicht verstecken', desc: 'Rollator, Haltegriffe, Inkontinenzmaterial — alles sichtbar lassen. Das zeigt den tatsächlichen Versorgungsbedarf.' },
              { tip: 'Nachfragen erlaubt', desc: 'Was wurde in welchem Modul wie bewertet? Gutachter müssen Auskunft geben.' },
            ].map((item) => (
              <div key={item.tip} className="bg-white rounded-xl p-5 border border-[#E5E3DF]">
                <p className="text-[15px] font-bold text-[#1C1C1C] mb-1">{item.tip}</p>
                <p className="text-[14px] text-[#2E2E2E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#E8F5EE] border border-[rgba(61,122,92,0.2)] rounded-2xl p-5 mb-10">
            <p className="text-[14px] font-bold text-[#2A5C3F] mb-2">Ergebnis zu niedrig? Widerspruch einlegen!</p>
            <p className="text-[14px] text-[#2A5C3F] leading-relaxed">
              Wer den Bescheid für zu niedrig hält, kann innerhalb von 4 Wochen Widerspruch einlegen — kostenlos und ohne Risiko. Eine erneute Begutachtung wird angesetzt.{' '}
              <a href="/widerspruch-pflegekasse-einlegen/" className="underline font-semibold">Widerspruch einlegen — wie es geht</a>
            </p>
          </div>

          <h2 id="faq" className="text-[24px] md:text-[28px] font-bold text-[#1C1C1C] mb-6">Häufige Fragen</h2>
          <div className="space-y-4 mb-12">
            {[
              { q: 'Wie bereitet man sich auf die MDK-Begutachtung vor?', a: 'Pflegetagebuch führen (2+ Wochen vorher), Medikamente und Diagnosen auflisten, Hilfsmittel sichtbar lassen, Angehörige dabei haben, schlechtesten typischen Tag beschreiben — nicht den guten.' },
              { q: 'Was prüft der MDK-Gutachter genau?', a: 'Das NBA (Neue Begutachtungsassessment) prüft 6 Module: Mobilität, kognitive Fähigkeiten, Verhaltensweisen, Selbstversorgung, Umgang mit Erkrankungen, Alltagsleben. Jedes Modul wird gewichtet — Selbstversorgung zählt am stärksten.' },
              { q: 'Darf jemand beim MDK-Termin dabei sein?', a: 'Ja — und es ist sehr empfehlenswert. Eine vertraute Person ergänzt, korrigiert und stellt sicher dass alle relevanten Einschränkungen genannt werden.' },
              { q: 'Was wenn der Pflegegrad zu niedrig ist?', a: 'Innerhalb von 4 Wochen Widerspruch einlegen — kostenlos, ohne Risiko. Kasse muss erneut begutachten. Mit Pflegetagebuch und konkreten Beispielen ist der Widerspruch oft erfolgreich.' },
              { q: 'Was ist ein Pflegetagebuch und wie schreibt man es?', a: 'Tägliche Aufzeichnung welche Hilfe geleistet wurde — mit Zeitangaben. Morgens, tagsüber, abends, nachts. Besondere Ereignisse (Stürze, Verwirrtheit) dokumentieren. Mindestens 2 Wochen vor dem Termin beginnen.' },
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
