import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, Fragen, Kasten, Punkte, RatgeberKopf, RatgeberRumpf, Schritte, Text, Vorspann,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('mdk-begutachtung-tipps', '25. April 2026')

const SECTIONS = [
  { id: 'ablauf', title: 'Wie die MDK-Begutachtung abläuft' },
  { id: 'vorbereitung', title: 'Konkrete Vorbereitung' },
  { id: 'pflegetagebuch', title: 'Das Pflegetagebuch' },
  { id: 'am-tag', title: 'Am Begutachtungstag' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'MDK-Begutachtung Tipps — so bereiten Sie sich vor',
  description: 'MDK-Begutachtung vorbereiten: Wie der Besuch abläuft, was geprüft wird, welche Tipps wirklich helfen und wie ein Pflegetagebuch den Pflegegrad sichert.',
  alternates: { canonical: 'https://primundus.de/mdk-begutachtung-tipps' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'MDK-Begutachtung Tipps 2026 | Primundus',
    description: 'MDK-Besuch vorbereiten: Ablauf, Checkliste, Pflegetagebuch — so sichern Sie den richtigen Pflegegrad.',
    url: 'https://primundus.de/mdk-begutachtung-tipps',
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
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/mdk-begutachtung-tipps',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Pflegegrade', item: 'https://primundus.de/pflegegrade' },
      { '@type': 'ListItem', position: 3, name: 'MDK-Begutachtung Tipps', item: 'https://primundus.de/mdk-begutachtung-tipps' },
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
      <div className="lg:hidden">
        <ArticleTOC sections={SECTIONS} />
      </div>

      <div className="bg-pm-paper">
        <RatgeberKopf
          pfad={[
            { label: "Startseite", href: "/" },
            { label: "Pflegegrade", href: "/pflegegrade" },
            { label: "MDK-Begutachtung Tipps" },
          ]}
          augenbraue="Ratgeber Pflegegrad"
          titel="MDK-Begutachtung Tipps — so bereiten Sie sich richtig vor"
          einleitung="Die MDK-Begutachtung (seit 2023: MDS — Medizinischer Dienst) entscheidet über den Pflegegrad — und damit über hunderte Euro monatlich an Kassenzuschüssen. Viele Familien unterschätzen wie wichtig die Vorbereitung ist. Der Gutachter sieht den Pflegebedürftigen einmal, für etwa eine Stunde. Was in dieser Stunde gesagt und gezeigt wird, zählt."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="8 Min."
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Vorspann>
            <Kasten titel="Der häufigste Fehler" ton="koralle">
              <Text>Pflegebedürftige geben sich beim Besuch des Gutachters mehr Mühe als sonst — aus Stolz oder um niemanden zu belasten. Das Ergebnis: zu niedriger Pflegegrad, zu wenig Zuschüsse. Den Gutachter interessiert der schlechteste typische Tag — nicht der gute Tag.</Text>
            </Kasten>
          </Vorspann>

          <Abschnitt id="ablauf" titel="Wie die MDK-Begutachtung abläuft">
            <Text>
              Nach dem Pflegekassen-Antrag beauftragt die Kasse den Medizinischen Dienst mit einer Begutachtung. Ein Gutachter (Arzt oder Pflegefachkraft) kommt zu einem angekündigten Termin nach Hause.
            </Text>
            <Schritte
              schritte={[
                { title: 'Terminankündigung', desc: 'Kasse teilt Termin mit — in der Regel 1–2 Wochen Vorlauf. Termin kann verschoben werden wenn nötig.' },
                { title: 'Hausbesuch ca. 60–90 Minuten', desc: 'Gutachter befragt Pflegebedürftigen und Angehörige. Prüft 6 Lebensbereiche (Module). Schaut sich die Wohnsituation an.' },
                { title: 'Die 6 Module des NBA', desc: 'Mobilität, kognitive Fähigkeiten, Verhaltensweisen, Selbstversorgung, Umgang mit Erkrankungen, Alltagsleben. Jedes Modul wird einzeln bewertet und gewichtet.' },
                { title: 'Gutachten und Bescheid', desc: 'Gutachter erstellt Bericht, Pflegekasse erteilt Bescheid. Dauer: 4–6 Wochen. Bei Widerspruch: erneute Begutachtung möglich.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="vorbereitung" titel="Konkrete Vorbereitung — Checkliste">
            {/* VORLAGE: unverändert übernommen */}
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
              <div key={item as string} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-pm-line">
                <span className={`w-5 h-5 rounded flex-shrink-0 mt-0.5 flex items-center justify-center border-2 ${pflicht ? 'border-pm-taupe' : 'border-[#C8C3BA]'}`}>
                  {pflicht && <span className="text-pm-taupe text-[10px] font-bold">✓</span>}
                </span>
                <div>
                  <p className="text-[14px] text-pm-body">{item as string}</p>
                  {pflicht && <p className="text-[11px] text-pm-taupe-light mt-0.5">Besonders wichtig</p>}
                </div>
              </div>
            ))}
          </div>
          </Abschnitt>

          <Abschnitt id="pflegetagebuch" titel="Das Pflegetagebuch — das wichtigste Vorbereitungsinstrument">
            <Text>
              Ein Pflegetagebuch dokumentiert täglich welche Hilfe geleistet wurde — mit Zeitangaben. Es ist das stärkste Argument wenn der Gutachter fragt wie viel Unterstützung wirklich nötig ist.
            </Text>
            {/* VORLAGE: unverändert übernommen */}
            <div className="bg-white rounded-2xl border border-pm-line overflow-hidden mb-6">
            <div className="bg-pm-paper px-5 py-3 border-b border-pm-line">
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-pm-mute">Was ins Pflegetagebuch gehört</p>
            </div>
            <div className="divide-y divide-pm-line">
              {[
                { bereich: 'Morgens', inhalt: 'Aufstehen (alleine? mit Hilfe?), Waschen, Ankleiden, Frühstück — Zeit und Art der Hilfe' },
                { bereich: 'Tagsüber', inhalt: 'Toilettengänge, Medikamente, Mahlzeiten, Mobilität, Stürze, Verwirrtheitsepisoden' },
                { bereich: 'Abends', inhalt: 'Abendessen, Abendroutine, Zubettgehen — wie lange dauert es, wer hilft' },
                { bereich: 'Nachts', inhalt: 'Wie oft aufgewacht, warum, wer musste helfen, wie lange dauerte es' },
                { bereich: 'Besonderheiten', inhalt: 'Schlechte Tage dokumentieren — Aggressivität, Orientierungslosigkeit, Stürze, Schmerzen' },
              ].map((item) => (
                <div key={item.bereich} className="px-5 py-3">
                  <p className="text-[13px] font-bold text-pm-ink mb-0.5">{item.bereich}</p>
                  <p className="text-[13px] text-pm-body leading-relaxed">{item.inhalt}</p>
                </div>
              ))}
            </div>
          </div>
          </Abschnitt>

          <Abschnitt id="am-tag" titel="Am Begutachtungstag — was zu beachten ist">
            <Punkte
              punkte={[
                { title: 'Angehörigen dabeihaben', desc: 'Eine vertraute Person ergänzt und korrigiert wenn der Pflegebedürftige etwas vergisst oder unterschätzt.' },
                { title: 'Nicht übertreiben — aber auch nicht untertreiben', desc: 'Den normalen schwierigen Alltag beschreiben. Keine Dramatisierung nötig, aber auch kein Schönreden.' },
                { title: 'Konkrete Beispiele nennen', desc: '"Er kann die Hose nicht alleine anziehen weil er das Gleichgewicht verliert" ist stärker als "Er braucht manchmal Hilfe."' },
                { title: 'Pflegetagebuch bereithalten', desc: 'Dem Gutachter zeigen. Es belegt was verbal gesagt wird.' },
                { title: 'Hilfsmittel nicht verstecken', desc: 'Rollator, Haltegriffe, Inkontinenzmaterial — alles sichtbar lassen. Das zeigt den tatsächlichen Versorgungsbedarf.' },
                { title: 'Nachfragen erlaubt', desc: 'Was wurde in welchem Modul wie bewertet? Gutachter müssen Auskunft geben.' },
              ]}
            />
            <Kasten titel="Ergebnis zu niedrig? Widerspruch einlegen!" ton="gruen">
              <Text>Wer den Bescheid für zu niedrig hält, kann innerhalb von 4 Wochen Widerspruch einlegen — kostenlos und ohne Risiko. Eine erneute Begutachtung wird angesetzt.{' '}
              <a href="/widerspruch-pflegekasse-einlegen" className="underline font-semibold">Widerspruch einlegen — wie es geht</a></Text>
            </Kasten>
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen">
            <Fragen
              fragen={[
                { q: 'Wie bereitet man sich auf die MDK-Begutachtung vor?', a: 'Pflegetagebuch führen (2+ Wochen vorher), Medikamente und Diagnosen auflisten, Hilfsmittel sichtbar lassen, Angehörige dabei haben, schlechtesten typischen Tag beschreiben — nicht den guten.' },
                { q: 'Was prüft der MDK-Gutachter genau?', a: 'Das NBA (Neue Begutachtungsassessment) prüft 6 Module: Mobilität, kognitive Fähigkeiten, Verhaltensweisen, Selbstversorgung, Umgang mit Erkrankungen, Alltagsleben. Jedes Modul wird gewichtet — Selbstversorgung zählt am stärksten.' },
                { q: 'Darf jemand beim MDK-Termin dabei sein?', a: 'Ja — und es ist sehr empfehlenswert. Eine vertraute Person ergänzt, korrigiert und stellt sicher dass alle relevanten Einschränkungen genannt werden.' },
                { q: 'Was wenn der Pflegegrad zu niedrig ist?', a: 'Innerhalb von 4 Wochen Widerspruch einlegen — kostenlos, ohne Risiko. Kasse muss erneut begutachten. Mit Pflegetagebuch und konkreten Beispielen ist der Widerspruch oft erfolgreich.' },
                { q: 'Was ist ein Pflegetagebuch und wie schreibt man es?', a: 'Tägliche Aufzeichnung welche Hilfe geleistet wurde — mit Zeitangaben. Morgens, tagsüber, abends, nachts. Besondere Ereignisse (Stürze, Verwirrtheit) dokumentieren. Mindestens 2 Wochen vor dem Termin beginnen.' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="mdk-begutachtung-tipps" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
