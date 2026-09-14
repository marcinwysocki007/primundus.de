import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, DunklerAbschnitt, Fragen, MehrDazu, Punkte, RatgeberKopf, RatgeberRumpf, Schritte, Tabelle, Text,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('pflegegrad-begutachtung-vorbereiten', '25. April 2026')

const SECTIONS = [
  { id: 'vorbereitung', title: 'Die wichtigste Vorbereitung' },
  { id: 'checkliste', title: 'Checkliste für den Termin' },
  { id: 'tipps', title: '7 Tipps für höhere Einstufung' },
  { id: 'ablauf', title: 'Was beim Termin passiert' },
  { id: 'danach', title: 'Nach der Begutachtung' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'MD-Begutachtung vorbereiten — Checkliste & 7 Tipps',
  description: 'MD-Begutachtung vorbereiten: Pflegetagebuch führen, den schlechtesten Tag schildern, Vertrauensperson einladen.',
  alternates: { canonical: 'https://primundus.de/pflegegrad-begutachtung-vorbereiten' },
  openGraph: {
    title: 'MD-Begutachtung vorbereiten | Primundus',
    description: 'Checkliste und 7 Tipps für die MD-Begutachtung — so erreichen Sie eine faire und korrekte Einstufung.',
    url: 'https://primundus.de/pflegegrad-begutachtung-vorbereiten',
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
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/pflegegrad-begutachtung-vorbereiten',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Pflegegrade', item: 'https://primundus.de/pflegegrade' },
      { '@type': 'ListItem', position: 3, name: 'Begutachtung vorbereiten', item: 'https://primundus.de/pflegegrad-begutachtung-vorbereiten' },
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
      { '@type': 'Question', name: 'Wie lange dauert die Begutachtung?', acceptedAnswer: { '@type': 'Answer', text: 'Typischerweise 30–90 Minuten — je nach Pflegesituation und wie viele Unterlagen vorliegen. Der Gutachter stellt Fragen zu den einzelnen Lebensbereichen und beobachtet teilweise direkt.' } },
      { '@type': 'Question', name: 'Was ist das Pflegetagebuch und warum ist es wichtig?', acceptedAnswer: { '@type': 'Answer', text: 'Das Pflegetagebuch ist eine tägliche Dokumentation welche Hilfe bei welchen Tätigkeiten benötigt wird und wie lange das dauert. Es ist das stärkste Argument für eine korrekte und faire Einstufung — weil es Schwankungen im Pflegebedarf objektiv belegt.' } },
    ],
  },
]

export default function BegutachtungVorbereiten() {
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
            { label: "Begutachtung vorbereiten" },
          ]}
          augenbraue="Ratgeber Pflegegrad"
          titel="MD-Begutachtung vorbereiten — Checkliste & 7 Tipps"
          einleitung="Die MD-Begutachtung entscheidet über den Pflegegrad — und damit über hunderte Euro Kassenzuschuss pro Monat. Wer gut vorbereitet ist, bekommt eine faire Einstufung. Wer aus Scham minimiert, verschenkt Geld. Die wichtigste Vorbereitung: Das Pflegetagebuch. Es dauert 5 Minuten täglich und macht den größten Unterschied."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="7 Min."
          blick={[
                'Pflegetagebuch: 1–2 Wochen vor dem Termin beginnen — wichtigstes Vorbereitungsmittel',
                'Vertrauensperson: Angehöriger beim Termin dabei — darf ergänzen und korrigieren',
                'Unterlagen: Arztberichte, Medikamentenliste, Krankenhausbriefe bereithalten',
                'Schlechtesten Tag schildern: Nicht den guten Tag — den schwersten Tagesverlauf',
                'Nichts beschönigen: Aus Scham minimieren kostet monatlich hunderte Euro',
                'Nach Bescheid: Innerhalb eines Monats Widerspruch wenn Einstufung zu niedrig',
              ]}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="vorbereitung" titel="Die wichtigste Vorbereitung: Das Pflegetagebuch">
            <Text>
              Das Pflegetagebuch ist die wirkungsvollste Vorbereitung auf die MD-Begutachtung. Es dokumentiert täglich — möglichst 1–2 Wochen vor dem Termin — welche Hilfe bei welchen Tätigkeiten nötig ist und wie lange das dauert.
            </Text>
            <Text>
              Warum ist es so wichtig? Der Gutachter bewertet einen einzigen Besuch. Pflege schwankt aber — manche Tage sind besser, manche schlechter. Das Pflegetagebuch belegt den tatsächlichen Pflegebedarf über mehrere Tage und gibt dem Gutachter ein realistisches Bild.
            </Text>
            <Tabelle
              titel="Was ins Pflegetagebuch gehört — täglich eintragen"
              kopf={['Bereich', 'Konkrete Fragen']}
              zeilen={[
                ['Körperpflege', 'Wer hilft beim Waschen, Anziehen, Zähneputzen? Wie lange braucht es?'],
                ['Mobilität', 'Kann die Person allein aufstehen, gehen, Treppen steigen? Mit oder ohne Hilfe?'],
                ['Ernährung', 'Wer kocht, wer hilft beim Essen? Kann die Person allein essen?'],
                ['Medikamente', 'Wer gibt Medikamente? Kann die Person das selbst verwalten?'],
                ['Orientierung', 'Weiß die Person wo sie ist, welcher Tag es ist? Gibt es Verwirrung?'],
                ['Nacht', 'Wie oft muss in der Nacht geholfen werden? Schlafstörungen?'],
                ['Arzttermine', 'Wer begleitet zu Arztterminen? Kann die Person das allein?'],
              ]}
            />
          </Abschnitt>

          <Abschnitt id="checkliste" titel="Checkliste für den Begutachtungstermin">
            <Text>
              Diese Unterlagen und Vorbereitungen sollten am Tag des Termins bereitliegen:
            </Text>
            {/* VORLAGE: unverändert übernommen */}
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
              <div key={item.item} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-pm-line">
                <span className="w-5 h-5 rounded-full bg-pm-mint text-pm-green flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">✓</span>
                <p className="text-[14px] text-pm-body">{item.item}</p>
              </div>
            ))}
          </div>
          </Abschnitt>

          <Abschnitt id="tipps" titel="7 Tipps für eine korrekte und faire Einstufung">
            <Schritte
              schritte={[
                { title: 'Den schlechtesten Tag schildern', desc: 'Der Gutachter fragt nach dem typischen schlechtesten Tagesverlauf. Nicht den durchschnittlichen guten Tag beschreiben — sondern den Tag wenn es wirklich schlecht läuft. Dieser Tag ist die Grundlage der Einstufung.' },
                { title: 'Vertrauensperson mitnehmen', desc: 'Eine Begleitperson darf beim Termin dabei sein — und sollte es. Sie kann Details ergänzen die dem Pflegebedürftigen entfallen, und beschönigendes Verhalten sanft korrigieren. Das ist ausdrücklich erlaubt.' },
                { title: 'Nichts aus Scham verschweigen', desc: 'Viele Menschen minimieren aus Scham: "Ich schaffe das noch selbst" — obwohl es mit großer Anstrengung oder Hilfe geschieht. Was nur mit Hilfe möglich ist, gilt als nicht selbstständig. Das muss gesagt werden.' },
                { title: 'Hilfe beim Anziehen demonstrieren', desc: 'Der Gutachter schaut manchmal zu. Wenn möglich, soll die pflegende Person normal helfen — so wie es jeden Tag ist. Keine "Sondervorstellung" für den Gutachter.' },
                { title: 'Schwankungen im Pflegebedarf benennen', desc: 'Wenn mancher Tage besser, manche schlechter sind — das explizit sagen und mit dem Pflegetagebuch belegen. Schwankungen werden für die Einstufung berücksichtigt.' },
                { title: 'Nächteproble ansprechen', desc: 'Nächtlicher Hilfebedarf wird oft vergessen. Wie oft muss in der Nacht geholfen werden? Wer ist dann wach? Nachtunruhe, Toilettengänge, Orientierungslosigkeit — alles relevant.' },
                { title: 'Nach dem Termin: Gutachten anfordern', desc: 'Das Gutachten des MD kann angefordert werden. Es zeigt wie der Gutachter jeden einzelnen Bereich bewertet hat — und ist die Grundlage für einen gezielten Widerspruch wenn nötig.' },
              ]}
            />
          </Abschnitt>

          <DunklerAbschnitt
            id="ablauf"
            titel="Was beim Termin passiert"
            einleitung="Der MD-Gutachter bewertet sechs Lebensbereiche — je nach Selbstständigkeit in jedem Bereich werden Punkte vergeben. Die Punktsumme ergibt den Pflegegrad."
            punkte={[
              { title: 'Mobilität (10 %)', desc: 'Aufstehen, Gehen, Positionswechsel, Treppensteigen. Kann die Person das selbstständig, mit Aufsicht, mit Hilfe oder gar nicht?' },
              { title: 'Kognition & Kommunikation (15 %)', desc: 'Örtliche/zeitliche Orientierung, Gedächtnis, Entscheidungen treffen, Gespräche führen, Gefahren verstehen.' },
              { title: 'Verhaltensweisen & Psyche (15 %)', desc: 'Ängste, Aggressionen, Schlafstörungen, Selbst-/Fremdgefährdung — besonders relevant bei Demenz.' },
              { title: 'Selbstversorgung (40 %)', desc: 'Körperpflege, Ankleiden, Essen und Trinken, Ausscheidungen, Medikamente. Höchste Gewichtung — hier zählt jedes Detail.' },
              { title: 'Krankheitsbedingte Anforderungen (20 %)', desc: 'Medikamente, Verbandswechsel, Arztbesuche, Therapien — was ist nötig und wie viel Hilfe wird dabei gebraucht?' },
              { title: 'Alltagsleben (keine eigene Gewichtung)', desc: 'Tagesstruktur, soziale Kontakte, Freizeitgestaltung — fließt in die Gesamtbewertung ein.' },
            ]}
          />

          <Abschnitt id="danach" titel="Nach der Begutachtung — Bescheid prüfen">
            <Text>
              Innerhalb von 25 Arbeitstagen kommt der Bescheid der Pflegekasse. Jetzt heißt es: kritisch prüfen.
            </Text>
            <Punkte
              punkte={[
                { title: 'Stimmt der Pflegegrad?', desc: 'Entspricht er dem tatsächlichen Pflegebedarf? Wurden alle geschilderten Einschränkungen im Gutachten berücksichtigt? Das Gutachten kann angefordert werden.' },
                { title: 'Zu niedrige Einstufung — was tun?', desc: 'Innerhalb eines Monats schriftlich Widerspruch einlegen. Pflegetagebuch nachreichen, aktualisierte Arztberichte beilegen. Widersprüche sind häufig erfolgreich.' },
                { title: 'Gutachten anfordern', desc: 'Das vollständige MD-Gutachten kann bei der Pflegekasse angefordert werden. Es zeigt wie jeder Bereich bewertet wurde — Grundlage für gezielten Widerspruch.' },
              ]}
            />
            <MehrDazu
              label="Widerspruch einlegen:"
              links={[{ href: "/pflegegrad-widerspruch-einlegen", text: "Pflegegrad Widerspruch — Muster & Tipps" }, { href: "/pflegegrad-beantragen", text: "Pflegegrad beantragen — vollständige Anleitung" }]}
            />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen zur MD-Begutachtung">
            <Fragen
              fragen={[
                { q: 'Was passiert bei der MD-Begutachtung?', a: 'Ein Gutachter kommt nach Hause und bewertet die Selbstständigkeit in sechs Bereichen: Mobilität, Kognition, Verhaltensweisen, Selbstversorgung, krankheitsbedingte Anforderungen und Alltagsleben. Die Punktsumme bestimmt den Pflegegrad.' },
                { q: 'Wie lange dauert die Begutachtung?', a: 'Typischerweise 30–90 Minuten, je nach Pflegesituation und Unterlagenmenge.' },
                { q: 'Was ist das Pflegetagebuch und warum ist es wichtig?', a: 'Eine tägliche Dokumentation welche Hilfe wann nötig ist und wie lange. Es ist das stärkste Argument für eine korrekte Einstufung — weil es Schwankungen im Pflegebedarf objektiv belegt. 1–2 Wochen vor dem Termin beginnen.' },
                { q: 'Darf jemand beim Termin dabei sein?', a: 'Ja — und es ist ausdrücklich empfohlen. Eine Vertrauensperson kann Details ergänzen, die dem Pflegebedürftigen entfallen, und beschönigendes Verhalten sanft korrigieren.' },
                { q: 'Was tue ich wenn der Pflegegrad zu niedrig ist?', a: 'Innerhalb eines Monats schriftlich Widerspruch bei der Pflegekasse einlegen. Pflegetagebuch nachreichen, aktualisierte Arztberichte beilegen. MD-Gutachten anfordern um zu verstehen welche Bereiche zu niedrig bewertet wurden.' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="pflegegrad-begutachtung-vorbereiten" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
