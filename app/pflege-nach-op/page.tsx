import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, DunklerAbschnitt, Fragen, Gruppen, Kasten, Punkte, RatgeberKopf, RatgeberRumpf, Text, Vorspann,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('pflege-nach-op', '21. August 2026')

const SECTIONS = [
  { id: 'nach-entlassung', title: 'Die Zeit nach der Entlassung' },
  { id: 'haeufige-ops', title: 'Häufige OPs im Alter' },
  { id: 'betreuung', title: 'Was die Betreuungskraft übernimmt' },
  { id: 'leistungen', title: 'Kassenzuschüsse nach OP' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflege nach OP zuhause — Betreuung & Unterstützung',
  description: 'Pflege nach Operation zuhause: Was nach Hüft-OP, Knie-OP und Herzoperationen zu beachten ist, welche Unterstützung nötig ist und welche Kassenzuschüsse greifen.',
  alternates: { canonical: 'https://primundus.de/pflege-nach-op' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Pflege nach OP zuhause | Primundus',
    description: 'Häusliche Betreuung nach einer Operation — was nötig ist und wer die Kosten trägt.',
    url: 'https://primundus.de/pflege-nach-op',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pflege nach OP zuhause — Betreuung und Unterstützung',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/pflege-nach-op',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Krankheiten', item: 'https://primundus.de/krankheiten' },
      { '@type': 'ListItem', position: 3, name: 'Pflege nach OP', item: 'https://primundus.de/pflege-nach-op' },
    ],
  },
]

export default function PflegeNachOp() {
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
            { label: "Krankheiten", href: "/krankheiten" },
            { label: "Pflege nach OP" },
          ]}
          augenbraue="Ratgeber Pflege nach OP"
          titel="Pflege nach OP zuhause — Betreuung & Unterstützung"
          einleitung="Nach einer Operation werden ältere Menschen heute schnell aus dem Krankenhaus entlassen — oft schneller als ihre Angehörigen gewappnet sind. Die ersten Wochen zuhause sind kritisch: Wundversorgung durch den Pflegedienst, Mobilisierung, Hilfsbedarf bei allen Alltagsaufgaben. Eine 24h-Betreuungskraft überbrückt diese Zeit — und lässt sich schon vor der OP planen."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="6 Min."
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Vorspann>
            <Kasten titel="Wichtig: Betreuungskraft VOR der OP organisieren" ton="gruen">
              <Text>Bei geplanten Operationen (Hüft-TEP, Knie-TEP, Herzeingriff): Primundus-Anfrage idealerweise 2–3 Wochen vor dem OP-Termin stellen. So ist die Kraft pünktlich zur Krankenhausentlassung bereit — ohne Versorgungslücke.</Text>
            </Kasten>
          </Vorspann>

          <DunklerAbschnitt
            id="nach-entlassung"
            titel="Die Zeit nach der Entlassung — was zuhause nötig ist"
            einleitung="Krankenhäuser entlassen heute früh — oft wenn die Person noch erhebliche Unterstützung braucht. Der Sozialdienst des Krankenhauses hilft bei der Planung der Nachversorgung — diesen Ansprechpartner frühzeitig ansprechen."
            punkte={[
              { title: 'Erste Woche zuhause', desc: 'Vollständige Hilfe bei Körperpflege, Ankleiden, Mobilisierung. Wundversorgung durch ambulanten Pflegedienst (Behandlungspflege). Schmerzmittelgabe nach Zeitplan. Keine Eigenbelastung.' },
              { title: 'Wochen 2–6', desc: 'Zunehmend selbstständiger — aber Hilfe noch bei allen körperlichen Aktivitäten. Physiotherapie zu Hause oder begleitete Fahrten. Wunden heilen, Schwellung geht zurück.' },
              { title: 'Ab Woche 6–8', desc: 'Viele Patienten sind deutlich selbstständiger. Entscheidung: Braucht es weitere Unterstützung oder kann auf Alltagsunterstützung durch ambulante Dienste umgestellt werden?' },
            ]}
          />

          <Abschnitt id="haeufige-ops" titel="Häufige OPs im Alter — was zu beachten ist">
            <Gruppen
              gruppen={[
                {
                  title: 'Hüft-TEP (Hüftgelenkersatz)',
                  zusatz: '6–12 Wochen Erholungsphase',
                  punkte: [
                    'Kein Beugen des Hüftgelenks über 90° in ersten Wochen',
                    'Speziell erhöhte Toilette und Sitzerhöhung nötig',
                    'Keine Schuhe alleine anziehen in ersten Wochen',
                    'Thrombose-Prophylaxe: tägliche Injektion durch Pflegedienst',
                  ],
                },
                {
                  title: 'Knie-TEP (Kniegelenkersatz)',
                  zusatz: '6–8 Wochen Erholungsphase',
                  punkte: [
                    'Treppensteigen eingeschränkt — Schlafplatz idealerweise im Erdgeschoss',
                    'Kühlpacks regelmäßig für Schwellung',
                    'Intensive Physiotherapie wichtig für gutes Langzeitergebnis',
                    'Schmerzmanagement in ersten Wochen oft aufwändig',
                  ],
                },
                {
                  title: 'Herzeingriff (Bypass, Klappenersatz)',
                  zusatz: '4–8 Wochen Erholungsphase',
                  punkte: [
                    'Brustbein heilt ca. 6 Wochen — keine Hebung von Lasten',
                    'Herzrhythmus und Blutdruck täglich messen und dokumentieren',
                    'Wundkontrolle an Narbe',
                    'Keine Fahrerlaubnis in ersten Wochen',
                  ],
                },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="betreuung" titel="Was die Betreuungskraft nach OP übernimmt">
            <Punkte
              punkte={[
                { title: '✓ Körperpflege & Ankleiden', desc: 'Vollständige Unterstützung in den ersten Wochen — langsam, sorgfältig, die Operationsstelle schonend.' },
                { title: '✓ Mobilisierung & Sicherheit', desc: 'Aufstehen, Gehen, Treppensteigen begleiten. Die 24h-Kraft kennt die Bewegungseinschränkungen und handelt entsprechend.' },
                { title: '✓ Physiotherapie-Übungen begleiten', desc: 'Übungen die der Physiotherapeut verordnet hat täglich begleiten und dokumentieren.' },
                { title: '✓ Medikamentenerinnerung', desc: 'Schmerzmedikamente, Blutverdünner, Herzmedikamente — zur richtigen Zeit erinnern und dokumentieren.' },
                { title: '✓ Arzt- und Physiotherapeut-Termine begleiten', desc: 'Fahren, begleiten, Informationen weiterleiten.' },
                { title: '✗ Wundversorgung', desc: 'Verbandswechsel und Nahtversorgung ist Behandlungspflege — übernimmt ambulanter Pflegedienst täglich oder nach Bedarf.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="leistungen" titel="Kassenzuschüsse nach OP">
            <Punkte
              punkte={[
                { title: 'Pflegegrad beantragen', desc: 'Nach einer OP mit Einschränkungen sofort Antrag stellen. Rückwirkend ab Antragsdatum. Typisch nach Hüft- oder Knie-OP: PG 1–3 je nach verbleibendem Hilfebedarf.' },
                { title: 'Kurzzeitpflege (§ 42 SGB XI)', desc: 'Bis zu 3.539 €/Jahr aus dem gemeinsamen Entlastungsbudget, wenn nach dem Krankenhausaufenthalt vorübergehend vollstationäre Pflege nötig ist. Alternativ: zu Hause durch Betreuungskraft organisiert.' },
                { title: 'Behandlungspflege (SGB V)', desc: 'Wundversorgung, Injektionen durch Pflegedienst — von der Krankenversicherung übernommen. Hausarzt-Verordnung holen.' },
                { title: 'Hilfsmittelversorgung (SGB V)', desc: 'Rollator, Gehstock, Sitzerhöhung, Badehilfen — mit Rezept von der Krankenkasse. Nach OP schnell verordnen lassen.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen">
            <Fragen
              fragen={[
                { q: 'Wann brauche ich nach einer OP eine Betreuungskraft?', a: 'Immer wenn man alleine lebt oder Angehörige nicht dauerhaft die Betreuung übernehmen können. Nach Hüft-OP, Knie-OP oder Herzeingriff: 4–12 Wochen intensive Unterstützung nötig.' },
                { q: 'Wann sollte ich die Betreuungskraft für die Zeit nach der OP organisieren?', a: 'Bei geplanter OP: 2–3 Wochen vorher Primundus kontaktieren. So ist die Kraft pünktlich zur Entlassung bereit.' },
                { q: 'Was kostet eine Betreuungskraft nach der OP?', a: 'Ab 2.150 €/Monat über Primundus. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei Pflegegrad 3 ab ca. 923 €/Monat.' },
                { q: 'Zahlt die Krankenkasse die Betreuung nach einer OP?', a: 'Behandlungspflege (Wundversorgung, Injektionen): Ja, über Krankenversicherung. Grundpflege und Betreuung: über Pflegekasse wenn Pflegegrad vorhanden. Die Betreuungskraft selbst: privat mit Kassenzuschüssen.' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="pflege-nach-op" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
