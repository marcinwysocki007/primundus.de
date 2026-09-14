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

const AKTUALISIERT = aktualisiertAm('schlaganfall-pflege-zuhause', '25. April 2026')

const SECTIONS = [
  { id: 'was-kann', title: 'Was nach Schlaganfall möglich ist' },
  { id: 'reha', title: 'Reha und häusliche Pflege' },
  { id: 'pflegegrad', title: 'Pflegegrad & Leistungen' },
  { id: '24h', title: '24h-Pflege nach Schlaganfall' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflege nach Schlaganfall zuhause — Reha, Kosten & 24h-Pflege',
  description: 'Pflege nach Schlaganfall: Was zuhause möglich ist, wie die Reha-Phase organisiert wird und wann eine 24h-Betreuungskraft die richtige Lösung ist.',
  alternates: { canonical: 'https://primundus.de/schlaganfall-pflege-zuhause' },
  openGraph: {
    title: 'Pflege nach Schlaganfall zuhause | Primundus',
    description: 'Was nach Schlaganfall zuhause möglich ist und wie 24h-Pflege die Reha-Phase sicher macht.',
    url: 'https://primundus.de/schlaganfall-pflege-zuhause',
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
    headline: 'Pflege nach Schlaganfall zuhause — Reha, Organisation & 24h-Pflege',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/schlaganfall-pflege-zuhause',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Krankheiten', item: 'https://primundus.de/krankheiten' },
      { '@type': 'ListItem', position: 3, name: 'Schlaganfall Pflege zuhause', item: 'https://primundus.de/schlaganfall-pflege-zuhause' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was kann man nach einem Schlaganfall noch tun?', acceptedAnswer: { '@type': 'Answer', text: 'Das hängt von Schwere und Ort der Hirnschädigung ab. Viele Schlaganfall-Betroffene erholen sich durch intensive Reha teilweise oder vollständig. Häufige Folgen: Lähmungen (Hemiparese), Sprachstörungen (Aphasie), Schluckstörungen, kognitive Einschränkungen, Depressionen.' } },
      { '@type': 'Question', name: 'Wann kann man nach einem Schlaganfall nach Hause?', acceptedAnswer: { '@type': 'Answer', text: 'Nach der Akutbehandlung und der Reha — typischerweise 2–8 Wochen nach dem Schlaganfall. Die Entlassung setzt voraus dass die häusliche Versorgung sichergestellt ist. Eine 24h-Betreuungskraft ermöglicht frühzeitige Entlassung ohne Pflegeheimaufenthalt.' } },
      { '@type': 'Question', name: 'Welchen Pflegegrad bekommt man nach einem Schlaganfall?', acceptedAnswer: { '@type': 'Answer', text: 'Je nach Schwere des Schlaganfalls PG 2 bis 5. Leichte Folgeschäden: PG 2–3. Schwere Hemiplegie mit umfangreicher Hilfe: PG 4. Bei Kommunikationsverlust und vollständiger Abhängigkeit: PG 5.' } },
    ],
  },
]

export default function SchlaganfallPflegeZuhause() {
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
            { label: "Schlaganfall Pflege zuhause" },
          ]}
          augenbraue="Ratgeber Schlaganfall"
          titel="Pflege nach Schlaganfall zuhause — was möglich ist"
          einleitung="Nach einem Schlaganfall stellen sich Familien sofort die Frage: Pflegeheim oder zuhause? In den meisten Fällen ist häusliche Pflege mit einer 24h-Betreuungskraft möglich — und ermöglicht eine frühzeitige Entlassung aus Krankenhaus oder Reha. Die vertraute Umgebung gibt Orientierung und Halt."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="7 Min."
          blick={[
                'Häusliche Pflege nach Schlaganfall in den meisten Fällen möglich',
                'Frühzeitige Entlassung aus Klinik durch 24h-Betreuungskraft möglich',
                'Vertraute Umgebung gibt Orientierung und Halt',
                'Pflegegrad 2–5 je nach Schwere — sofort nach Entlassung beantragen',
                'Primundus startet in 4–7 Tagen — auch als Überbrückung nach Klinik',
                'Physiotherapie und Logopädie können zuhause fortgesetzt werden',
              ]}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-kann" titel="Was nach einem Schlaganfall möglich ist">
            <Text>
              Schlaganfall ist nicht gleich Schlaganfall — Art, Schwere und Ort der Hirnschädigung bestimmen die Folgen. Viele Betroffene erholen sich durch intensive Reha teilweise oder sogar vollständig. Was bleibt, hängt davon ab wie schnell die Akutbehandlung begann und wie konsequent die Reha ist.
            </Text>
            <Punkte
              punkte={[
                { title: 'Lähmungen (Hemiparese/Hemiplegie)', desc: 'Halbseitige Lähmung ist die häufigste Schlaganfall-Folge. Schwere variiert von leichter Kraftminderung bis vollständiger Lähmung. Physiotherapie kann Funktion teilweise zurückbringen.' },
                { title: 'Sprachstörungen (Aphasie)', desc: 'Sprachverständnis oder Sprachproduktion eingeschränkt. Logopädie ist entscheidend — am effektivsten in vertrauter Umgebung mit bekannten Gesprächspartnern.' },
                { title: 'Schluckstörungen (Dysphagie)', desc: 'Häufig nach schwerem Schlaganfall — erhöhtes Aspirationsrisiko. Besondere Sorgfalt bei der Ernährung, angepasste Konsistenz der Speisen.' },
                { title: 'Kognitive Einschränkungen', desc: 'Gedächtnis, Aufmerksamkeit, Orientierung können betroffen sein. Oft nur vorübergehend — gezielte Förderung zuhause ist wirksamer als in einer Einrichtung.' },
                { title: 'Depressionen', desc: 'Post-Stroke-Depression bei 30–40 % der Betroffenen. Regelmäßige menschliche Nähe und Aktivität — was eine 24h-Kraft besser bieten kann als ein Heim — reduziert das Risiko.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="reha" titel="Reha und häusliche Pflege — wie das zusammenpasst">
            <Text>
              Nach der Akutbehandlung folgt in der Regel eine stationäre oder ambulante Rehabilitation. Das Ziel: so viel Selbstständigkeit zurückgewinnen wie möglich. Eine 24h-Betreuungskraft ermöglicht die frühzeitige Entlassung nach Hause — und setzt die Reha-Maßnahmen kontinuierlich im Alltag fort.
            </Text>
            <Punkte
              punkte={[
                { title: 'Frühzeitige Entlassung möglich', desc: 'Das Krankenhaus kann den Patienten früher entlassen wenn die häusliche Versorgung sichergestellt ist. Primundus kann eine Betreuungskraft in 4–7 Tagen bereitstellen — oft schneller als ein Pflegeheimplatz gefunden ist.' },
                { title: 'Reha-Therapien zuhause fortsetzen', desc: 'Physiotherapeuten und Logopäden kommen nach Hause. Die Betreuungskraft begleitet die Übungen im Alltag — konsequenter als eine Einrichtung es könnte.' },
                { title: 'Kurzzeitpflege als Überbrückung', desc: 'Wenn die Wohnungssituation erst angepasst werden muss (Badumbau, Rollstuhlzugang) kann das Entlastungsbudget für Kurzzeitpflege genutzt werden.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="pflegegrad" titel="Pflegegrad nach Schlaganfall & Kassenzuschüsse">
            <Text>
              Den Pflegegrad sofort nach der Entlassung beantragen — die Leistungen gelten rückwirkend ab Antragsdatum. Bei einem Krankenhausaufenthalt verkürzt sich die Entscheidungsfrist der Pflegekasse auf eine Woche.
            </Text>
            <Tabelle
              titel="Typische Pflegegrade nach Schlaganfall"
              kopf={['Schwere', 'Typischer PG', 'Pflegegeld/Monat']}
              zeilen={[
                ['Leichte Folgeschäden', 'PG 2–3', '347–599 €'],
                ['Hemiplegie mit Hilfebedarf', 'PG 3–4', '599–800 €'],
                ['Schwere Hemiplegie + Aphasie', 'PG 4–5', '800–990 €'],
              ]}
              betont={2}
            />
            <MehrDazu
              label="Pflegegrad schnell beantragen:"
              links={[{ href: "/pflegegrad-beantragen", text: "Pflegegrad beantragen — Schritt für Schritt" }]}
            />
            <MehrDazu
              label="Pflegegrad nach Schlaganfall:"
              links={[{ href: "/pflegegrad-nach-schlaganfall", text: "Welcher Pflegegrad nach Schlaganfall?" }]}
            />
          </Abschnitt>

          <DunklerAbschnitt
            id="24h"
            titel="24h-Pflege nach Schlaganfall — wann und wie"
            einleitung="Eine 24h-Betreuungskraft ist nach Schlaganfall die häufigste Lösung für Familien die den Angehörigen zuhause versorgen wollen. Primundus kann in 4–7 Tagen eine Kraft bereitstellen — auch als Überbrückung direkt nach Krankenhausentlassung."
            punkte={[
              { title: 'Was die Betreuungskraft nach Schlaganfall macht', desc: 'Körperpflege und Transfer aus dem Bett, Unterstützung bei Essen (ggf. angepasste Konsistenz), Begleitung bei Physiotherapie-Übungen im Alltag, Sprache fördern durch Gespräche, Sturzsicherheit gewährleisten, emotionale Begleitung.' },
              { title: 'Qualifikation beachten', desc: 'Bei Schluckstörungen oder intensivpflegerischen Anforderungen sollte die Kraft nachgewiesene Pflegeerfahrung haben. Primundus berücksichtigt das bei der Auswahl.' },
            ]}
          >
            <MehrDazu
              label="Mehr zu 24h-Pflege allgemein:"
              links={[{ href: "/was-ist-24-stunden-pflege", text: "Was ist 24-Stunden-Pflege?" }, { href: "/kosten", text: "Kosten & Kassenzuschüsse 2026" }]}
            />
          </DunklerAbschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen zur Pflege nach Schlaganfall">
            <Fragen
              fragen={[
                { q: 'Wann kann man nach einem Schlaganfall nach Hause?', a: 'Nach Akutbehandlung und Reha — typischerweise 2–8 Wochen nach dem Schlaganfall. Eine 24h-Betreuungskraft ermöglicht frühere Entlassung weil die häusliche Versorgung damit sichergestellt ist.' },
                { q: 'Welchen Pflegegrad bekommt man nach einem Schlaganfall?', a: 'Je nach Schwere PG 2–5. Leichte Folgeschäden: PG 2–3. Schwere Hemiplegie: PG 4. Vollständige Abhängigkeit mit Kommunikationsverlust: PG 5. Antrag sofort nach Entlassung stellen — gilt rückwirkend.' },
                { q: 'Kann man nach schwerem Schlaganfall zuhause bleiben?', a: 'In den meisten Fällen ja — mit einer 24h-Betreuungskraft. Nicht möglich bei intensivmedizinischem Dauerbedarf (Beatmung etc.) oder wenn Wohnraum nicht angepasst werden kann.' },
                { q: 'Wie fördert man Erholung nach Schlaganfall zuhause?', a: 'Regelmäßige Physiotherapie und Logopädie — idealerweise täglich. Alltägliche Bewegung und Beschäftigung. Vertraute Umgebung, bekannte Menschen. Kognitive Förderung durch Gespräche, Vorlesen, einfache Aktivitäten.' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="schlaganfall-pflege-zuhause" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
