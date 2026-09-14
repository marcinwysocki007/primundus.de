import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, DunklerAbschnitt, Fragen, MehrDazu, Punkte, RatgeberKopf, RatgeberRumpf, Tabelle, Text,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('pflegegrad-bei-demenz', '25. April 2026')

const SECTIONS = [
  { id: 'wie-hoch', title: 'Welcher Pflegegrad bei Demenz?' },
  { id: 'begutachtung', title: 'Die Begutachtung bei Demenz' },
  { id: 'leistungen', title: 'Leistungen 2026' },
  { id: 'tipps', title: 'Tipps für höhere Einstufung' },
  { id: 'verlauf', title: 'Pflegegrad bei Demenzfortschritt' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflegegrad bei Demenz — welcher Grad & wie beantragen? 2026',
  description: 'Pflegegrad bei Demenz 2026: Leichte Demenz meist PG 2–3, mittlere PG 3–4, schwere PG 4–5. Begutachtung vorbereiten, höhere Einstufung erreichen — alle Tipps.',
  alternates: { canonical: 'https://primundus.de/pflegegrad-bei-demenz' },
  openGraph: {
    title: 'Pflegegrad bei Demenz 2026 | Primundus',
    description: 'Welcher Pflegegrad bei Demenz? Einstufung, Tipps für höheren Grad und alle Leistungen 2026.',
    url: 'https://primundus.de/pflegegrad-bei-demenz',
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
    headline: 'Pflegegrad bei Demenz — welcher Grad und wie beantragen 2026',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/pflegegrad-bei-demenz',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Pflegegrade', item: 'https://primundus.de/pflegegrade' },
      { '@type': 'ListItem', position: 3, name: 'Pflegegrad bei Demenz', item: 'https://primundus.de/pflegegrad-bei-demenz' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Welchen Pflegegrad bekommt man bei Demenz?', acceptedAnswer: { '@type': 'Answer', text: 'Leichte Demenz: meist Pflegegrad 2 oder 3. Mittlere Demenz: PG 3 oder 4. Schwere Demenz: PG 4 oder 5. Seit 2017 werden kognitive Einschränkungen im NBA-Verfahren deutlich stärker gewichtet als früher — Demenzbetroffene werden besser eingestuft.' } },
      { '@type': 'Question', name: 'Wie wird Demenz beim Pflegegrad bewertet?', acceptedAnswer: { '@type': 'Answer', text: 'Beim NBA-Begutachtungsverfahren werden kognitive Fähigkeiten (15 %), Verhaltensweisen (15 %) und Selbstversorgung (36 %) bewertet — alles Bereiche die bei Demenz stark betroffen sind. Die Gesamtpunktzahl bestimmt den Pflegegrad.' } },
      { '@type': 'Question', name: 'Wie bereite ich die Begutachtung bei Demenz vor?', acceptedAnswer: { '@type': 'Answer', text: 'Pflegetagebuch führen das explizit kognitive Einschränkungen dokumentiert: Weglaufen, Vergessen, Orientierungslosigkeit, Nachtunruhe, Verhaltensauffälligkeiten. Vertrauensperson beim Termin dabei haben die diese Punkte schildern kann — Demenzkranke minimieren oft selbst.' } },
    ],
  },
]

export default function PflegegradBeiDemenz() {
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
            { label: "Pflegegrad bei Demenz" },
          ]}
          augenbraue="Ratgeber Pflegegrad"
          titel="Pflegegrad bei Demenz — welcher Grad & wie beantragen?"
          einleitung="Seit der Pflegereform 2017 werden kognitive Einschränkungen bei der Begutachtung deutlich stärker bewertet. Demenzkranke erhalten heute erheblich höhere Pflegegrade als früher. Leichte Demenz führt meist zu PG 2–3, mittlere zu PG 3–4, schwere zu PG 4–5. Die Begutachtung muss gut vorbereitet sein — weil Betroffene ihre eigenen Einschränkungen oft minimieren."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="7 Min."
          blick={[
                'Leichte Demenz: meist Pflegegrad 2–3 (347–599 €/Monat)',
                'Mittlere Demenz: meist Pflegegrad 3–4 (599–800 €/Monat)',
                'Schwere Demenz: meist Pflegegrad 4–5 (800–990 €/Monat)',
                'Seit 2017: kognitive Einschränkungen stark gewichtet im NBA-Verfahren',
                'Begutachtung: Vertrauensperson muss kognitive Defizite explizit schildern',
                'Demenzdiagnose allein reicht nicht — Auswirkung auf Alltag entscheidet',
              ]}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="wie-hoch" titel="Welcher Pflegegrad bei welchem Demenzstadium?">
            <Text>
              Die Einstufung hängt nicht von der Demenzdiagnose allein ab — sondern davon wie stark die Selbstständigkeit im Alltag eingeschränkt ist. Zwei Menschen mit derselben Diagnose können unterschiedliche Pflegegrade bekommen.
            </Text>
            <Tabelle
              titel="Pflegegrad nach Demenzstadium — Richtwerte 2026"
              kopf={['Stadium', 'Typische Merkmale', 'Pflegegrad', 'Pflegegeld']}
              zeilen={[
                ['Leicht', 'Gedächtnisprobleme, Wortfindungsstörungen, leichte Orientierungsdefizite', 'PG 2–3', '347–599 €'],
                ['Mittel', 'Deutliche Orientierungslosigkeit, Hilfe bei Alltagsaktivitäten, Weglaufen möglich', 'PG 3–4', '599–800 €'],
                ['Schwer', 'Kaum Kommunikation, vollständige Pflege, ständige Beaufsichtigung nötig', 'PG 4–5', '800–990 €'],
              ]}
              betont={3}
              fuss="Richtwerte — individuelle Einstufung durch MD · Stand 2026"
            />
          </Abschnitt>

          <DunklerAbschnitt
            id="begutachtung"
            titel="Die Begutachtung bei Demenz — was besonders zählt"
            einleitung={"Bei Demenz liegt die größte Gefahr in der Begutachtung selbst: Betroffene geben sich oft Mühe \"normal\" zu wirken und unterschätzen ihre eigenen Einschränkungen. Eine Vertrauensperson die die tatsächlichen Defizite schildert ist bei Demenz besonders wichtig."}
            punkte={[
              { title: 'Was der Gutachter bei Demenz bewertet', desc: 'Örtliche und zeitliche Orientierung, Kurzzeitgedächtnis, Entscheidungsfähigkeit, Kommunikation, Verhaltensauffälligkeiten (Aggressionen, Weglaufen, Schlafstörungen), Selbstversorgung im Alltag.' },
              { title: 'Was im Pflegetagebuch stehen muss', desc: 'Täglich dokumentieren: Weglaufen oder Hinlaufen, vergessene Medikamente, nächtliche Unruhe, Orientierungslosigkeit, Aggressionen, Situationen in denen Hilfe nötig war und warum.' },
              { title: 'Was die Vertrauensperson schildern sollte', desc: 'Konkrete Vorfälle der letzten Wochen: "Am Dienstag wollte er um 3 Uhr nachts das Haus verlassen." "Sie erkennt mich manchmal nicht mehr." Diese Beispiele sind für den Gutachter wertvoller als allgemeine Aussagen.' },
            ]}
          />

          <Abschnitt id="leistungen" titel="Leistungen 2026 nach Pflegegrad">
            <Tabelle
              titel=""
              kopf={['Pflegegrad', 'Pflegegeld', 'Sachleistungen', 'Entlastungsbetrag']}
              zeilen={[
                ['PG 2', '347 €/Monat', '796 €/Monat', '131 €/Monat'],
                ['PG 3', '599 €/Monat', '1.497 €/Monat', '131 €/Monat'],
                ['PG 4', '800 €/Monat', '1.859 €/Monat', '131 €/Monat'],
                ['PG 5', '990 €/Monat', '2.299 €/Monat', '131 €/Monat'],
              ]}
              betont={1}
              fuss="Stand 2026 · Alle PG 2–5 erhalten zusätzlich 3.539 €/Jahr Entlastungsbudget"
            />
            <MehrDazu
              label="Alle Zuschüsse:"
              links={[{ href: "/finanzierung", text: "Finanzierung der 24h-Pflege" }, { href: "/demenz-pflege-zuhause", text: "Demenz Pflege zuhause" }]}
            />
          </Abschnitt>

          <Abschnitt id="tipps" titel="Tipps für höhere Einstufung bei Demenz">
            <Punkte
              punkte={[
                { title: 'Kognitive Defizite explizit dokumentieren', desc: 'Im Pflegetagebuch nicht nur körperliche Hilfe notieren — Orientierungslosigkeit, Vergessen, Verhaltensänderungen, Nachtunruhe täglich mit Beispielen dokumentieren.' },
                { title: 'Demenzkranker soll nicht allein beim Termin antworten', desc: 'Betroffene geben sich beim Gutachtertermin Mühe — und wirken dann kompetenter als sie im Alltag sind. Vertrauensperson muss aktiv die tatsächlichen Einschränkungen schildern.' },
                { title: 'Schlechtesten Tag schildern', desc: 'Nicht den guten Sonntag schildern — den Mittwoch wenn Vater um 3 Uhr nachts das Haus verlassen wollte. Genau dieser Tag ist die Grundlage für die Einstufung.' },
                { title: 'Verhaltensauffälligkeiten dokumentieren', desc: 'Aggressionen, Schlafstörungen, Selbstgefährdung — dieser NBA-Bereich (15 % Gewicht) wird bei Demenz oft unterschätzt aber kann die Einstufung erheblich beeinflussen.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="verlauf" titel="Pflegegrad bei Demenzfortschritt anpassen">
            <Text>
              Demenz schreitet fort — der Pflegegrad muss angepasst werden. Wer heute PG 2 hat und sich verschlechtert, sollte einen Antrag auf Höherstufung stellen. Es gibt keine Sperrfrist.
            </Text>
            <Text>
              Anzeichen für Höherstufung: Neue Verhaltensauffälligkeiten, Weglaufen beginnt, Körperpflege nicht mehr möglich, Nahrungsaufnahme braucht Hilfe, nächtliche Unruhe intensiver. Dann: Antrag auf Höherstufung plus neue Pflegetagebücher.
            </Text>
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen — Pflegegrad bei Demenz">
            <Fragen
              fragen={[
                { q: 'Welchen Pflegegrad bekommt man bei Demenz?', a: 'Leichte Demenz: meist PG 2–3. Mittlere Demenz: PG 3–4. Schwere Demenz: PG 4–5. Entscheidend ist nicht die Diagnose sondern wie stark die Selbstständigkeit im Alltag eingeschränkt ist.' },
                { q: 'Wie wird Demenz beim Pflegegrad bewertet?', a: 'Im NBA werden kognitive Fähigkeiten (15 %), Verhaltensweisen (15 %) und Selbstversorgung (36 %) bewertet — alle bei Demenz stark betroffenen Bereiche. Seit 2017 werden kognitive Einschränkungen deutlich stärker gewichtet.' },
                { q: 'Wie bereite ich die Begutachtung bei Demenz vor?', a: 'Pflegetagebuch mit konkreten Beispielen kognitiver Defizite: Weglaufen, Vergessen, Nachtunruhe, Orientierungslosigkeit. Vertrauensperson muss beim Termin die tatsächlichen Einschränkungen schildern — Betroffene minimieren oft selbst.' },
                { q: 'Was passiert wenn der Pflegegrad bei Demenz zu niedrig ist?', a: 'Innerhalb eines Monats Widerspruch einlegen, neues Pflegetagebuch mit explizit kognitiven Beispielen nachreichen. Bei Demenz sind Widersprüche besonders häufig erfolgreich wenn kognitive Defizite besser dokumentiert werden.' },
                { q: 'Kann man bei Demenz zuhause bleiben?', a: 'In den meisten Stadien ja — mit einer 24h-Betreuungskraft die dauerhaft im Haushalt lebt. Die vertraute Umgebung verlangsamt nachweislich den Krankheitsverlauf.' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="pflegegrad-bei-demenz" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
