import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, DunklerAbschnitt, Fragen, Kasten, Liste, MehrDazu, RatgeberKopf, RatgeberRumpf, Tabelle, Text, Vorspann,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('pflegegrad-bei-parkinson', '25. April 2026')

const SECTIONS = [
  { id: 'welcher-pflegegrad', title: 'Welcher Pflegegrad bei Parkinson?' },
  { id: 'besonderheiten', title: 'Besonderheiten der Begutachtung' },
  { id: 'leistungen', title: 'Leistungen & Kassenzuschüsse' },
  { id: 'hoehergruppierung', title: 'Höherstufung bei Parkinson' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflegegrad bei Parkinson — welcher Grad & wie beantragen',
  description: 'Pflegegrad bei Parkinson 2026: Welcher Grad ist realistisch, was bei der Begutachtung zu beachten ist und wie die Leistungen sich staffeln.',
  alternates: { canonical: 'https://primundus.de/pflegegrad-bei-parkinson' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Pflegegrad bei Parkinson 2026 | Primundus',
    description: 'Welcher Pflegegrad bei Parkinson — Begutachtung, Leistungen und Höherstufung.',
    url: 'https://primundus.de/pflegegrad-bei-parkinson',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pflegegrad bei Parkinson — welcher Grad und wie beantragen 2026',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/pflegegrad-bei-parkinson',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Pflegegrade', item: 'https://primundus.de/pflegegrade' },
      { '@type': 'ListItem', position: 3, name: 'Pflegegrad bei Parkinson', item: 'https://primundus.de/pflegegrad-bei-parkinson' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Welchen Pflegegrad bekommt man bei Parkinson?', acceptedAnswer: { '@type': 'Answer', text: 'Je nach Stadium: Frühes Parkinson mit leichten Einschränkungen: PG 1–2. Moderates Parkinson mit Gangstörungen und Hilfebedarf: PG 2–3. Fortgeschrittenes Parkinson mit erheblichem Hilfebedarf: PG 3–4. Schwerstes Parkinson mit vollständiger Pflegeabhängigkeit: PG 4–5.' } },
      { '@type': 'Question', name: 'Was ist die größte Herausforderung bei der Parkinson-Begutachtung?', acceptedAnswer: { '@type': 'Answer', text: 'Das sogenannte "On-Off-Phänomen": Parkinson-Patienten haben Phasen guter Mobilität (On) und schlechter Mobilität (Off). Die Begutachtung fällt oft in eine On-Phase — der tatsächliche Hilfebedarf wird unterschätzt. Deshalb: Tagebuch führen, Off-Phasen dokumentieren, alle Phasen dem Gutachter erklären.' } },
    ],
  },
]

export default function PflegegradBeiParkinson() {
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
            { label: "Pflegegrad bei Parkinson" },
          ]}
          augenbraue="Ratgeber Pflegegrad"
          titel="Pflegegrad bei Parkinson — welcher Grad & wie beantragen"
          einleitung="Parkinson ist eine progrediente Erkrankung — der Pflegebedarf nimmt über Zeit zu, der Pflegegrad auch. Was Menschen mit Parkinson bei der Begutachtung wissen müssen: Das On-Off-Phänomen führt häufig zu Untereinstufungen, weil der Gutachtertermin in einer guten Phase liegen kann. Dieses Risiko lässt sich durch gute Vorbereitung minimieren."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="6 Min."
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Vorspann>
            <Kasten titel="Das On-Off-Problem bei der Begutachtung" ton="koralle">
              <Text>Parkinson-Patienten erleben "On-Phasen" (gute Mobilität) und "Off-Phasen" (schlechte Mobilität, Starre, Freezing). Fällt die Begutachtung in eine On-Phase — was häufig passiert, weil Stress kurzfristig mobilisiert — wird der tatsächliche Pflegebedarf unterschätzt. Lösung: Off-Phasen im Tagebuch dokumentieren und dem Gutachter erklären.</Text>
            </Kasten>
          </Vorspann>

          <Abschnitt id="welcher-pflegegrad" titel="Welcher Pflegegrad bei Parkinson?">
            <Tabelle
              titel=""
              kopf={['Parkinson-Stadium / Einschränkungen', 'Typischer Pflegegrad', 'Pflegegeld/Monat']}
              zeilen={[
                ['Frühes Stadium, leichter Tremor, weitgehend selbstständig', 'PG 1', '— (131 € EB)'],
                ['Moderates Parkinson, Gangstörungen, Hilfe bei einigen Bereichen', 'PG 2', '347 €'],
                ['Fortgeschrittenes Parkinson, erheblicher Hilfebedarf', 'PG 2–3', '347–599 €'],
                ['Schweres Parkinson, On-Off stark ausgeprägt, starke Einschränkungen', 'PG 3–4', '599–800 €'],
                ['Schwerste Einschränkungen, vollständige Pflegeabhängigkeit', 'PG 4–5', '800–990 €'],
              ]}
              betont={2}
              fuss="Richtwerte · EB = Entlastungsbetrag · Individuelle Einstufung durch MD · Stand 2026"
            />
          </Abschnitt>

          <DunklerAbschnitt
            id="besonderheiten"
            titel="Besonderheiten der Begutachtung bei Parkinson"
            einleitung="Parkinson hat einige Besonderheiten die bei der Begutachtung besonders wichtig sind und systematisch kommuniziert werden müssen."
            punkte={[
              { title: 'On-Off-Phasen dokumentieren', desc: 'Tagebuch führen: Wann sind On-Phasen, wann Off-Phasen? Wie lange dauern Off-Phasen? Was ist in der Off-Phase nicht möglich? Diese Dokumentation ist das stärkste Argument für eine faire Einstufung.' },
              { title: 'Freezing erklären und demonstrieren', desc: 'Freezing (plötzliches "Einfrieren" beim Gehen) ist für Außenstehende schwer einzuschätzen. Dem Gutachter konkret erklären wie häufig und wie lang Freezing-Episoden auftreten und welche Hilfe dann nötig ist.' },
              { title: 'Zeitbedarf für Alltagsaufgaben benennen', desc: 'Nicht nur "brauche Hilfe beim Ankleiden" — sondern: "Das Ankleiden dauert 60 Minuten und braucht Hilfe bei jedem Schritt." Zeitangaben machen den Hilfebedarf greifbar.' },
              { title: 'Schluck- und Sprachprobleme nicht vergessen', desc: 'Dysphagie (Schluckstörungen) und leises, undeutliches Sprechen (Hypophonie) können erheblichen Pflegebedarf verursachen und werden bei der Begutachtung berücksichtigt.' },
              { title: 'Psychische Begleiterscheinungen benennen', desc: 'Depressionen, Angststörungen, Demenz (bei fortgeschrittenem Parkinson häufig) erhöhen die Punktzahl in der NBA-Bewertung erheblich. Diese müssen aktiv angesprochen werden.' },
            ]}
          >
            <MehrDazu
              label="Vollständige Vorbereitung:"
              links={[{ href: "/pflegegrad-begutachtung-vorbereiten", text: "MD-Begutachtung vorbereiten" }]}
            />
          </DunklerAbschnitt>

          <Abschnitt id="leistungen" titel="Leistungen & Kassenzuschüsse bei Parkinson">
            <Tabelle
              titel=""
              kopf={['Leistung', 'PG 2', 'PG 3', 'PG 4']}
              zeilen={[
                ['Pflegegeld/Monat', '347 €', '599 €', '800 €'],
                ['Sachleistungen/Monat', '796 €', '1.497 €', '1.859 €'],
                ['Entlastungsbetrag/Monat', '131 €', '131 €', '131 €'],
                ['Wohnraumanpassung/Maßnahme', '4.180 €', '4.180 €', '4.180 €'],
              ]}
              betont={1}
            />
          </Abschnitt>

          <Abschnitt id="hoehergruppierung" titel="Höherstufung bei Parkinson — wann und wie">
            <Text>
              Parkinson ist eine progrediente Erkrankung — der Pflegebedarf nimmt regelmäßig zu. Angehörige sollten proaktiv prüfen ob eine Höherstufung angezeigt ist. Typische Signale:
            </Text>
            <Liste punkte={[
              'On-Off-Phasen werden häufiger und länger',
              'Freezing tritt öfter auf und dauert länger',
              'Neue Symptome: Schluckstörungen, Sprachprobleme, kognitive Einschränkungen',
              'Die Morgenpflege dauert deutlich länger als früher',
              'Alleinbleiben ist nicht mehr sicher (Sturzrisiko)',
            ]} />
            <MehrDazu
              label="Höherstufungsantrag:"
              links={[{ href: "/pflegegrad-erhoehen", text: "Pflegegrad erhöhen — wann und wie" }, { href: "/parkinson-pflege-zuhause", text: "Parkinson Pflege zuhause" }]}
            />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen">
            <Fragen
              fragen={[
                { q: 'Welchen Pflegegrad bekommt man bei Parkinson?', a: 'Je nach Stadium: PG 1 bei leichten Einschränkungen, PG 2–3 bei moderaten Gangstörungen und Hilfebedarf, PG 3–4 bei schwerem Parkinson mit On-Off-Phasen, PG 4–5 bei vollständiger Pflegeabhängigkeit.' },
                { q: 'Was ist das On-Off-Problem bei der Begutachtung?', a: 'Parkinson-Patienten haben Phasen guter (On) und schlechter (Off) Mobilität. Der Begutachtungstermin fällt oft in eine On-Phase — der tatsächliche Hilfebedarf wird unterschätzt. Lösung: Off-Phasen im Tagebuch dokumentieren.' },
                { q: 'Wie oft muss bei Parkinson der Pflegegrad angepasst werden?', a: 'Parkinson ist progressiv — der Pflegebedarf nimmt zu. Höherstufungsantrag stellen wenn neue oder verstärkte Einschränkungen auftreten. Kein fester Rhythmus, aber proaktiv beobachten.' },
                { q: 'Was zahlt die Krankenversicherung bei Parkinson?', a: 'Physiotherapie, Ergotherapie, Logopädie (Schlucktherapie), Medikamente. Hilfsmittel wie Rollator, Rollstuhl, Badehilfen. Das läuft parallel zu den Pflegekasse-Leistungen.' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="pflegegrad-bei-parkinson" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
