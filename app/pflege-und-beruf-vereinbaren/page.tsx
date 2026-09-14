import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, Fragen, HakenListe, Kasten, MehrDazu, Punkte, RatgeberKopf, RatgeberRumpf, Tabelle, Text, Vorspann,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('pflege-und-beruf-vereinbaren', '25. April 2026')

const SECTIONS = [
  { id: 'herausforderung', title: 'Die Herausforderung' },
  { id: 'rechte', title: 'Ihre Rechte als pflegender Angehöriger' },
  { id: 'loesungen', title: 'Praktische Lösungen' },
  { id: 'finanziell', title: 'Finanzielle Absicherung' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflege und Beruf vereinbaren — Rechte, Tipps & Lösungen 2026',
  description: 'Pflege und Beruf vereinbaren: Pflegezeit, Familienpflegezeit, Freistellungsansprüche und wie eine 24h-Betreuungskraft die Doppelbelastung löst.',
  alternates: { canonical: 'https://primundus.de/pflege-und-beruf-vereinbaren' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Pflege und Beruf vereinbaren 2026 | Primundus',
    description: 'Rechte, Freistellungen und praktische Lösungen wenn Pflege und Beruf zusammenkommen.',
    url: 'https://primundus.de/pflege-und-beruf-vereinbaren',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pflege und Beruf vereinbaren — Rechte, Tipps und Lösungen 2026',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/pflege-und-beruf-vereinbachen',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Alltag & Angehörige', item: 'https://primundus.de/alltag' },
      { '@type': 'ListItem', position: 3, name: 'Pflege und Beruf vereinbaren', item: 'https://primundus.de/pflege-und-beruf-vereinbaren' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Welche Freistellungsrechte haben pflegende Angehörige?', acceptedAnswer: { '@type': 'Answer', text: 'Pflegende Angehörige haben Anspruch auf: Kurzzeitige Arbeitsverhinderung (10 Tage, bezahlt mit Pflegeunterstützungsgeld), Pflegezeit (bis 6 Monate, unbezahlt, Kündigungsschutz), Familienpflegezeit (bis 24 Monate Teilzeit bis 15 Stunden/Woche). Alle Regelungen gelten für Betriebe ab 15 Beschäftigte.' } },
      { '@type': 'Question', name: 'Was ist das Pflegeunterstützungsgeld?', acceptedAnswer: { '@type': 'Answer', text: 'Das Pflegeunterstützungsgeld ist eine Lohnersatzleistung die pflegende Angehörige erhalten wenn sie kurzfristig die Arbeit unterbrechen müssen — max. 10 Arbeitstage pro Pflegefall, ca. 90 % des Nettoentgelts, bezahlt durch die Pflegekasse.' } },
    ],
  },
]

export default function PflegeUndBerufVereinbaren() {
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
            { label: "Alltag & Angehörige", href: "/alltag" },
            { label: "Pflege und Beruf vereinbaren" },
          ]}
          augenbraue="Ratgeber Angehörige"
          titel="Pflege und Beruf vereinbaren — Rechte, Tipps & Lösungen"
          einleitung="Über 2 Millionen Berufstätige in Deutschland pflegen gleichzeitig einen Angehörigen — die meisten ohne zu wissen welche Rechte sie haben. Das Gesetz schützt pflegende Angehörige: Freistellungsansprüche, Kündigungsschutz, Pflegeunterstützungsgeld. Und eine 24h-Betreuungskraft löst die Doppelbelastung oft grundlegend."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="7 Min."
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Vorspann>
            <Kasten augenbraue="Ihre Rechte als pflegender Angehöriger">
              <HakenListe punkte={[
                'Kurzzeitige Arbeitsverhinderung: 10 Tage, ca. 90 % Lohnersatz durch Pflegeunterstützungsgeld',
                'Pflegezeit: bis 6 Monate vollständige Freistellung, Kündigungsschutz, zinsloses Darlehen',
                'Familienpflegezeit: bis 24 Monate Teilzeit (mind. 15 Std./Woche), Kündigungsschutz',
                'Rentenbeiträge: Pflegekasse zahlt Rentenbeiträge für pflegende Angehörige (ab PG 2)',
                'Unfallversicherung: Pflegende Angehörige sind gesetzlich unfallversichert',
                'Gilt ab: Betriebe mit mindestens 15 Beschäftigten',
              ]} />
            </Kasten>
          </Vorspann>

          <Abschnitt id="herausforderung" titel="Die Herausforderung — Zahlen und Fakten">
            <Text>
              In Deutschland pflegen schätzungsweise 2,5 Millionen berufstätige Menschen gleichzeitig einen pflegebedürftigen Angehörigen. Über zwei Drittel davon sind Frauen. Viele reduzieren ihre Arbeitszeit deutlich oder geben den Beruf ganz auf — mit erheblichen Auswirkungen auf das eigene Einkommen und die spätere Rente.
            </Text>
            <Text>
              Die gute Nachricht: Das Gesetz schützt pflegende Angehörige besser als viele wissen. Und eine professionelle 24h-Betreuungskraft ermöglicht es, den Beruf weiterzuführen ohne den Pflegebedarf zu vernachlässigen.
            </Text>
          </Abschnitt>

          <Abschnitt id="rechte" titel="Ihre Rechte als pflegender Angehöriger">
            <Punkte
              punkte={[
                { title: 'Kurzzeitige Arbeitsverhinderung (§ 2 PflegeZG)', desc: 'Bis zu 10 Arbeitstage pro Pflegefall, wenn eine akute Pflegesituation entsteht und die Versorgung noch nicht organisiert ist. Bezahlter Lohnersatz: Pflegeunterstützungsgeld (ca. 90 % des Nettoentgelts) von der Pflegekasse. Gilt ab dem ersten Beschäftigten.' },
                { title: 'Pflegezeit (§ 3 PflegeZG)', desc: 'Vollständige oder teilweise Freistellung für bis zu 6 Monate zur häuslichen Pflege eines nahen Angehörigen. Unbezahlt, aber mit Kündigungsschutz. Zinsloses Darlehen über das Bundesamt für Familie und zivilgesellschaftliche Aufgaben (BAFzA) möglich. Gilt ab 15 Beschäftigten im Betrieb.' },
                { title: 'Familienpflegezeit (§ 2 FPfZG)', desc: 'Reduzierung der Arbeitszeit auf mindestens 15 Stunden pro Woche für bis zu 24 Monate. Kündigungsschutz während der Familienpflegezeit. Zinsloses Darlehen möglich. Gilt ab 25 Beschäftigten im Betrieb.' },
                { title: 'Rentenversicherungsschutz', desc: 'Die Pflegekasse zahlt für pflegende Angehörige (die nicht mehr als 30 Stunden/Woche berufstätig sind) Beiträge zur gesetzlichen Rentenversicherung — ab PG 2, mindestens 14 Stunden wöchentliche Pflegetätigkeit.' },
                { title: 'Gesetzliche Unfallversicherung', desc: 'Pflegende Angehörige sind während der Pflegetätigkeit gesetzlich unfallversichert — ohne eigene Beitragszahlung. Der Schutz gilt auch auf dem Weg zum Pflegebedürftigen.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="loesungen" titel="Praktische Lösungen — was wirklich hilft">
            <Punkte
              punkte={[
                { title: '24h-Betreuungskraft — die grundlegende Lösung', desc: 'Eine 24h-Betreuungskraft übernimmt die vollständige Betreuung — rund um die Uhr. Angehörige können ihrem Beruf nachgehen ohne Sorgen um die Versorgung. Das ist für viele Familien die einzige Möglichkeit Vollzeitberuf und Pflege zu vereinbaren.' },
                { title: 'Tagespflege für Berufstätige', desc: 'Der Pflegebedürftige verbringt den Tag in einer Tagespflegeeinrichtung — Angehörige arbeiten. Abends Heimkehr. Kosten teilweise durch Tages-/Nachtpflege-Sachleistungen der Kasse gedeckt (721–2.085 €/Monat).' },
                { title: 'Homeoffice und flexible Arbeitszeiten', desc: 'Mit dem Arbeitgeber über flexible Modelle sprechen — Homeoffice-Tage, Gleitzeit, angepasste Schichtpläne. Viele Arbeitgeber sind bei Pflege kooperativ wenn das Gespräch frühzeitig gesucht wird.' },
                { title: 'Geschwister und Familie einbinden', desc: 'Pflegeverantwortung fair aufteilen. Konkrete Wochenpläne erstellen: Wer übernimmt was an welchem Tag? Digitale Organisationstools (Familien-Kalender) helfen bei der Koordination.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="finanziell" titel="Finanzielle Absicherung beim Ausfall der Arbeit">
            <Text>
              Wer vorübergehend weniger arbeitet oder ausfällt, hat mehrere finanzielle Absicherungen:
            </Text>
            <Tabelle
              titel=""
              kopf={['Leistung', 'Höhe', 'Wer zahlt', 'Dauer']}
              zeilen={[
                ['Pflegeunterstützungsgeld', 'ca. 90 % Nettoentgelt', 'Pflegekasse', 'Max. 10 Tage/Pflegefall'],
                ['Zinsloses Darlehen (Pflegezeit)', 'Bis 50 % Nettogehalt', 'BAFzA (Bundesbehörde)', 'Für Dauer der Pflegezeit'],
                ['Rentenbeiträge', 'Abhängig von PG', 'Pflegekasse', 'Während Pflegetätigkeit'],
              ]}
              betont={1}
            />
            <MehrDazu
              label="Angehörigen-Burnout vermeiden:"
              links={[{ href: "/burnout-pflegende-angehoerige", text: "Burnout pflegender Angehöriger — Warnsignale & Hilfe" }]}
            />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen">
            <Fragen
              fragen={[
                { q: 'Welche Freistellungsrechte haben pflegende Angehörige?', a: 'Kurzzeitige Arbeitsverhinderung (10 Tage, Pflegeunterstützungsgeld), Pflegezeit (bis 6 Monate, Kündigungsschutz, zinsloses Darlehen), Familienpflegezeit (bis 24 Monate Teilzeit). Gilt ab 15 bzw. 25 Beschäftigten.' },
                { q: 'Was ist das Pflegeunterstützungsgeld?', a: 'Lohnersatzleistung bei kurzzeitiger Arbeitsunterbrechung wegen Pflege: ca. 90 % des Nettoentgelts, max. 10 Arbeitstage pro Pflegefall, bezahlt von der Pflegekasse.' },
                { q: 'Kann man mit 24h-Pflege weiter Vollzeit arbeiten?', a: 'Ja — genau das ist der Zweck einer 24h-Betreuungskraft. Sie übernimmt die vollständige Versorgung rund um die Uhr. Angehörige können ihrem Beruf nachgehen ohne Sorgen um die Pflege.' },
                { q: 'Bekomme ich Rentenbeiträge wenn ich einen Angehörigen pflege?', a: 'Ja — die Pflegekasse zahlt Rentenbeiträge für pflegende Angehörige die nicht mehr als 30 Stunden/Woche berufstätig sind, ab PG 2 und mindestens 14 Stunden wöchentlicher Pflegetätigkeit.' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="pflege-und-beruf-vereinbaren" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
