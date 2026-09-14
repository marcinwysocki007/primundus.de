import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, DunklerAbschnitt, Fragen, Kasten, MehrDazu, Punkte, RatgeberKopf, RatgeberRumpf, Schritte, Tabelle, Text, Werte, Zwischentitel,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('pflegegrad-beantragen', '25. April 2026')

const SECTIONS = [
  { id: 'voraussetzungen', title: 'Wer kann Pflegegrad beantragen?' },
  { id: 'antrag', title: 'Antrag stellen — Schritt für Schritt' },
  { id: 'begutachtung', title: 'Die Begutachtung durch den MD' },
  { id: 'pflegegrade', title: 'Pflegegrade und ihre Leistungen 2026' },
  { id: 'widerspruch', title: 'Widerspruch einlegen' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflegegrad beantragen — Schritt für Schritt 2026 | Primundus',
  description: 'Pflegegrad beantragen: Antrag bei der Pflegekasse, MD-Begutachtung, Einstufung in 5 Schritten. Mit Tipps für höhere Einstufung. Aktuell für 2026.',
  alternates: {
    canonical: 'https://primundus.de/pflegegrad-beantragen',
  },
  openGraph: {
    title: 'Pflegegrad beantragen — Schritt für Schritt 2026 | Primundus',
    description: 'Pflegegrad beantragen: Antrag bei der Pflegekasse, MD-Begutachtung, Einstufung in 5 Schritten. Mit Tipps für höhere Einstufung. Aktuell für 2026.',
    url: 'https://primundus.de/pflegegrad-beantragen',
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
    headline: 'Pflegegrad beantragen — Schritt für Schritt 2026',
    description: 'Wie man einen Pflegegrad beantragt, was bei der MD-Begutachtung passiert und wie man eine höhere Einstufung erreicht.',
    author: { '@id': PERSON_MARTA_ID },
    publisher: {
      '@type': 'Organization',
      name: 'Primundus',
      logo: 'https://primundus.de/images/primundus_logo_header.webp',
    },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/pflegegrad-beantragen',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Pflegegrade', item: 'https://primundus.de/pflegegrade' },
      { '@type': 'ListItem', position: 3, name: 'Pflegegrad beantragen', item: 'https://primundus.de/pflegegrad-beantragen' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Pflegegrad beantragen — Schritt für Schritt',
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Antrag stellen', text: 'Schriftlich oder telefonisch bei der Pflegekasse (Krankenversicherung) Antrag auf Pflegeleistungen stellen.' },
      { '@type': 'HowToStep', position: 2, name: 'Begutachtungstermin', text: 'Der Medizinische Dienst (MD) kommt nach Hause und bewertet die Selbstständigkeit in sechs Lebensbereichen.' },
      { '@type': 'HowToStep', position: 3, name: 'Pflegetagebuch führen', text: 'Vor dem Termin 1–2 Wochen lang dokumentieren, welche Hilfe täglich benötigt wird.' },
      { '@type': 'HowToStep', position: 4, name: 'Bescheid abwarten', text: 'Die Pflegekasse teilt das Ergebnis schriftlich mit — in der Regel innerhalb von 25 Arbeitstagen.' },
      { '@type': 'HowToStep', position: 5, name: 'Bei Ablehnung: Widerspruch', text: 'Innerhalb eines Monats nach Bescheid schriftlich Widerspruch einlegen und Gegengutachten beantragen.' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Wie beantrage ich einen Pflegegrad?',
        acceptedAnswer: { '@type': 'Answer', text: 'Pflegegrad beantragen läuft in zwei Schritten: Zunächst stellt man schriftlich oder telefonisch einen Antrag bei der Pflegekasse (Krankenkasse). Dann kommt der Medizinische Dienst (MD) nach Hause und bewertet die Selbstständigkeit in sechs Lebensbereichen. Die Pflegekasse teilt das Ergebnis innerhalb von 25 Arbeitstagen schriftlich mit.' },
      },
      {
        '@type': 'Question',
        name: 'Wer kann einen Pflegegrad beantragen?',
        acceptedAnswer: { '@type': 'Answer', text: 'Einen Pflegegrad kann jeder beantragen, der mindestens 6 Monate lang auf Hilfe im Alltag angewiesen ist — wegen einer körperlichen, geistigen oder psychischen Erkrankung. Auch Kinder und Demenzkranke können einen Pflegegrad erhalten. Den Antrag können auch Angehörige oder Bevollmächtigte stellen.' },
      },
      {
        '@type': 'Question',
        name: 'Wie lange dauert es, bis der Pflegegrad bewilligt wird?',
        acceptedAnswer: { '@type': 'Answer', text: 'Die Pflegekasse muss innerhalb von 25 Arbeitstagen nach Eingang des Antrags entscheiden. Bei stationärem Krankenhausaufenthalt oder ambulanter Reha verkürzt sich die Frist auf eine Woche. Bei Nichteinhaltung hat der Antragsteller Anspruch auf 70 Euro Entschädigung pro Woche Verzögerung.' },
      },
      {
        '@type': 'Question',
        name: 'Was passiert bei der MD-Begutachtung?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ein Gutachter des Medizinischen Dienstes (MD) kommt nach Hause und bewertet die Selbstständigkeit in sechs Lebensbereichen: Mobilität, kognitive Fähigkeiten, Verhaltensweisen, Selbstversorgung, Umgang mit krankheitsbedingten Anforderungen und Gestaltung des Alltagslebens. Das Ergebnis bestimmt den Pflegegrad.' },
      },
      {
        '@type': 'Question',
        name: 'Was sind die Pflegegeld-Beträge 2026?',
        acceptedAnswer: { '@type': 'Answer', text: 'Pflegegeld 2026: Pflegegrad 2 = 347 €/Monat, Pflegegrad 3 = 599 €/Monat, Pflegegrad 4 = 800 €/Monat, Pflegegrad 5 = 990 €/Monat. Dazu kommen 131 €/Monat Entlastungsbetrag für alle Pflegegrade und das Entlastungsbudget von 3.539 €/Jahr für Verhinderungs- und Kurzzeitpflege. Keine Erhöhung für 2026 geplant — nächste Dynamisierung frühestens Januar 2028.' },
      },
      {
        '@type': 'Question',
        name: 'Was tun wenn der Pflegegrad abgelehnt oder zu niedrig eingestuft wird?',
        acceptedAnswer: { '@type': 'Answer', text: 'Innerhalb eines Monats nach Bescheid schriftlich Widerspruch bei der Pflegekasse einlegen. Gleichzeitig ein Pflegetagebuch nachreichen und ein Gegengutachten durch einen unabhängigen Gutachter beauftragen. Widersprüche sind in vielen Fällen erfolgreich — besonders wenn der tatsächliche Pflegebedarf gut dokumentiert ist.' },
      },
      {
        '@type': 'Question',
        name: 'Ab wann gelten die Pflegeleistungen nach dem Antrag?',
        acceptedAnswer: { '@type': 'Answer', text: 'Pflegeleistungen gelten rückwirkend ab dem Datum des Antragseingangs bei der Pflegekasse — nicht erst ab dem Begutachtungstermin oder dem Bescheid. Deshalb ist es wichtig, den Antrag so früh wie möglich zu stellen, auch wenn der Pflegebedarf noch unklar ist.' },
      },
      {
        '@type': 'Question',
        name: 'Kann ich den Pflegegrad später erhöhen lassen?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ja — wenn sich der Pflegebedarf verschlechtert, kann jederzeit ein Antrag auf Höherstufung gestellt werden. Der Medizinische Dienst begutachtet dann erneut. Es gibt keine Sperrfrist zwischen den Anträgen.' },
      },
    ],
  },
]

export default function PflegegradBeantragen() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      <ArticleProgressBar />
      <div className="lg:hidden">
        <ArticleTOC sections={SECTIONS} />
      </div>

      <div className="bg-pm-paper">
        <RatgeberKopf
          pfad={[
            { label: "Startseite", href: "/" },
            { label: "Pflegegrade", href: "/pflegegrade" },
            { label: "Pflegegrad beantragen" },
          ]}
          augenbraue="Ratgeber Pflegegrad"
          titel="Pflegegrad beantragen — Schritt für Schritt"
          einleitung="Pflegegrad beantragen geht in zwei Schritten: Antrag bei der Pflegekasse stellen, dann kommt der Medizinische Dienst zur Begutachtung nach Hause. Die Entscheidung fällt innerhalb von 25 Arbeitstagen. Wer gut vorbereitet ist, erreicht einen höheren Pflegegrad — mit deutlich mehr Leistungen."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="7 Min."
          blick={[
                'Antrag schriftlich oder telefonisch bei der Pflegekasse (Krankenkasse) stellen',
                'Pflegeleistungen gelten rückwirkend ab Datum des Antragseingangs',
                'MD-Gutachter bewertet Selbstständigkeit in 6 Lebensbereichen zu Hause',
                'Entscheidung innerhalb von 25 Arbeitstagen — bei Verzögerung: 70 € Entschädigung/Woche',
                'Pflegetagebuch führen: stärkstes Hilfsmittel für höhere Einstufung',
                'Ablehnung oder zu niedrige Einstufung: Widerspruch innerhalb eines Monats möglich',
              ]}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="voraussetzungen" titel="Wer kann einen Pflegegrad beantragen?">
            <Text>
              Einen Pflegegrad kann jeder beantragen, der wegen einer körperlichen, geistigen oder psychischen Erkrankung auf dauerhafte Hilfe im Alltag angewiesen ist — und das voraussichtlich für mindestens sechs Monate. Alter spielt dabei keine Rolle: Pflegegrade werden sowohl für Kinder als auch für Hochbetagte vergeben.
            </Text>
            <Text>
              Den Antrag können stellen: der Pflegebedürftige selbst, nahe Angehörige, oder Personen mit schriftlicher Vollmacht. Eine Vorsorgevollmacht vereinfacht den Prozess erheblich, wenn die betroffene Person nicht mehr selbst handeln kann.
            </Text>
            <Text>
              <strong>Wichtig:</strong> Die Pflegeleistungen gelten rückwirkend ab dem Tag, an dem der Antrag bei der Pflegekasse eingegangen ist — nicht erst ab dem Begutachtungstermin. Deshalb lohnt es sich, den Antrag so früh wie möglich zu stellen, auch wenn der genaue Pflegebedarf noch unklar ist.
            </Text>
            <Punkte
              punkte={[
                { title: 'Körperliche Erkrankungen', desc: 'Nach Schlaganfall, bei Herzinsuffizienz, Parkinson, MS, Osteoporose, nach Hüft- oder Knie-OP, bei Krebs oder chronischen Erkrankungen.' },
                { title: 'Kognitive und psychische Erkrankungen', desc: 'Demenz, Alzheimer, Depression, geistige Behinderung, Psychosen. Demenz wird beim Pflegegrad oft besser berücksichtigt als früher bei Pflegestufen.' },
                { title: 'Kinder mit Pflegebedarf', desc: 'Kinder unter 18 Jahren werden mit einem Vergleichskind gleichen Alters gemessen — der Mehrbedarf gegenüber altersüblicher Entwicklung zählt.' },
              ]}
            />
            <MehrDazu
              label="Welcher Pflegegrad bei welcher Erkrankung in Frage kommt:"
              links={[{ href: "/pflegegrad-bei-demenz", text: "Pflegegrad bei Demenz" }, { href: "/pflegegrad-nach-schlaganfall", text: "Pflegegrad nach Schlaganfall" }, { href: "/pflegegrad-bei-parkinson", text: "Pflegegrad bei Parkinson" }]}
            />
          </Abschnitt>

          <Abschnitt id="antrag" titel="Antrag stellen — Schritt für Schritt">
            <Text>
              Der Antrag läuft über die Pflegekasse — das ist immer der Pflegebereich der gesetzlichen Krankenkasse. Bei privat Versicherten übernimmt das private Pflegeversicherungsunternehmen.
            </Text>
            <Schritte
              schritte={[
                { title: 'Antrag bei der Pflegekasse stellen', desc: 'Telefonisch, schriftlich oder per Online-Formular — je nach Krankenkasse. Ein einfaches Schreiben reicht: "Ich beantrage hiermit die Feststellung der Pflegebedürftigkeit nach SGB XI." Das Datum des Eingangs gilt rückwirkend für alle Leistungen.', tag: 'Sofort erledigen', tagTon: 'gruen' },
                { title: 'Pflegetagebuch beginnen', desc: 'Mindestens 1–2 Wochen vor der Begutachtung täglich dokumentieren: Welche Hilfe wird bei welcher Tätigkeit benötigt? Wie lange dauert das? Was kann selbst gemacht werden, was nicht? Das Pflegetagebuch ist das stärkste Argument für eine höhere Einstufung.', tag: 'Wichtigstes Vorbereitungsmittel', tagTon: 'gruen' },
                { title: 'Begutachtungstermin vereinbaren', desc: 'Der MD (Medizinischer Dienst bei gesetzlich Versicherten) oder MEDICPROOF (bei privat Versicherten) meldet sich und vereinbart einen Termin. Die Begutachtung findet zu Hause statt — Krankenhäuser und Pflegeheime sind ebenfalls möglich.', tag: 'Wird von der Pflegekasse organisiert', tagTon: 'neutral' },
                { title: 'Begutachtungstermin wahrnehmen', desc: 'Den Gutachter empfangen, Pflegetagebuch und ärztliche Atteste bereithalten. Eine Vertrauensperson darf anwesend sein — das ist ausdrücklich empfohlen. Nichts beschönigen: Den tatsächlichen schlechtesten Tagesverlauf schildern, nicht den guten Tag.', tag: 'Vertrauensperson einladen', tagTon: 'neutral' },
                { title: 'Bescheid abwarten und prüfen', desc: 'Die Pflegekasse schickt den schriftlichen Bescheid. Prüfen: Ist der Pflegegrad korrekt? Stimmen die angegebenen Einschränkungen? Bei Zweifeln sofort Widerspruch einlegen — die Frist beträgt einen Monat ab Bescheiddatum.', tag: 'Frist: 1 Monat ab Bescheid', tagTon: 'koralle' },
              ]}
            />
            <Kasten augenbraue="Gesetzliche Fristen — Rechte kennen" ton="gruen">
              <Werte ton="gruen" zeilen={[['25 Arbeitstage', 'Entscheidungsfrist der Pflegekasse nach Antragseingang'], ['1 Woche', 'Verkürzte Frist bei Krankenhausaufenthalt oder ambulanter Reha'], ['70 €/Woche', 'Entschädigung wenn die Pflegekasse die 25-Tage-Frist überschreitet'], ['1 Monat', 'Widerspruchsfrist nach Bescheiddatum — danach verfällt der Anspruch']]} />
            </Kasten>
          </Abschnitt>

          <Abschnitt id="begutachtung" titel="Die Begutachtung durch den MD">
            <Text>
              Der Gutachter des Medizinischen Dienstes bewertet die Selbstständigkeit in sechs Lebensbereichen. Das Ergebnis ist eine Punktzahl — sie bestimmt den Pflegegrad. Entscheidend ist nicht die Diagnose, sondern wie stark die Selbstständigkeit tatsächlich eingeschränkt ist.
            </Text>
            <Tabelle
              titel="Die 6 Lebensbereiche der Begutachtung (NBA)"
              zeilen={[
                ['Mobilität', 'Aufstehen, Gehen, Treppensteigen, Positionswechsel'],
                ['Kognition & Kommunikation', 'Orientierung, Gedächtnis, Entscheidungen treffen, Gespräche führen'],
                ['Verhaltensweisen & psychische Probleme', 'Ängste, Aggressionen, Schlafstörungen, Selbstgefährdung'],
                ['Selbstversorgung', 'Körperpflege, Ankleiden, Essen, Trinken, Ausscheidungen'],
                ['Krankheitsbedingte Anforderungen', 'Medikamente, Verbandswechsel, Arztbesuche, Therapien'],
                ['Alltagsleben & soziale Kontakte', 'Tagesstruktur, Freizeitgestaltung, Kontakte zu anderen Menschen'],
              ]}
            />
            <Text>
              Jeder Bereich wird gewichtet und in Punkte umgerechnet. Die Summe ergibt den Pflegegrad. Der Bereich <strong>Selbstversorgung</strong> hat das höchste Gewicht (36 %), danach folgen kognitive Fähigkeiten und krankheitsbedingte Anforderungen.
            </Text>
            <Zwischentitel>Die 5 wichtigsten Tipps für die Begutachtung:</Zwischentitel>
            <Punkte
              punkte={[
                { title: 'Den schlechtesten Tag schildern', desc: 'Nicht den guten Durchschnittstag beschreiben. Der Gutachter fragt nach dem typischen schlechtesten Verlauf — genau das berichten.' },
                { title: 'Pflegetagebuch vorlegen', desc: 'Tagesprotokoll der letzten 1–2 Wochen zeigen: Was wurde wann gemacht, welche Hilfe war nötig, wie lange hat es gedauert?' },
                { title: 'Vertrauensperson dabei haben', desc: 'Angehörige können wichtige Details ergänzen die dem Pflegebedürftigen entfallen. Das ist ausdrücklich erlaubt.' },
                { title: 'Nichts übertreiben — aber nichts verschweigen', desc: 'Reale Einschränkungen vollständig schildern. Wer aus Scham minimiert, bekommt einen zu niedrigen Pflegegrad.' },
                { title: 'Arztberichte und Atteste bereithalten', desc: 'Aktuelle ärztliche Unterlagen, Krankenhausentlassbriefe, Medikamentenliste — alles was den Pflegebedarf belegt.' },
              ]}
            />
            <MehrDazu
              label="Ausführliche Vorbereitung:"
              links={[{ href: "/pflegegrad-begutachtung-vorbereiten", text: "MD-Begutachtung vorbereiten — Checkliste und Tipps" }]}
            />
          </Abschnitt>

          <Abschnitt id="pflegegrade" titel="Pflegegrade und ihre Leistungen 2026">
            <Text>
              Je höher der Pflegegrad, desto mehr Leistungen zahlt die Pflegekasse. Die Beträge 2026 sind identisch zu 2025 — keine Erhöhung, nächste Dynamisierung frühestens Januar 2028.
            </Text>
            <Tabelle
              titel="Pflegegeld & Sachleistungen 2026 — alle Pflegegrade"
              kopf={['Pflegegrad', 'Punkte NBA', 'Pflegegeld/Monat', 'Pflegesachleistungen', '+ Entlastungsbetrag']}
              zeilen={[
                ['PG 1', '12,5–26,9', '—', '—', '131 €'],
                ['PG 2', '27–47,4', '347 €', '796 €', '131 €'],
                ['PG 3', '47,5–69,9', '599 €', '1.497 €', '131 €'],
                ['PG 4', '70–89,9', '800 €', '1.859 €', '131 €'],
                ['PG 5', '90–100', '990 €', '2.299 €', '131 €'],
              ]}
              betont={2}
              fuss="Stand: 2026 — identisch zu 2025 (4,5 % Erhöhung ab Jan. 2025). Nächste Dynamisierung frühestens Jan. 2028. Quelle: GKV-Spitzenverband"
            />
            <Kasten augenbraue="Zusätzlich — Entlastungsbudget 2026" titel="3.539 € pro Jahr für Verhinderungs- und Kurzzeitpflege (ab PG 2)" ton="gruen">
              <Text>Das gemeinsame Entlastungsbudget seit Juli 2025 ersetzt die frühere getrennte Verhinderungs- und Kurzzeitpflege. Es kann flexibel aufgeteilt werden — max. 8 Wochen pro Leistungsart. 2026 ist das erste volle Jahr ohne Übergangsregelungen.</Text>
            </Kasten>
            <MehrDazu
              label="Einzelne Pflegegrade im Detail:"
              links={[{ href: "/pflegegrad-2", text: "PG 2" }, { href: "/pflegegrad-3", text: "PG 3" }, { href: "/pflegegrad-4", text: "PG 4" }, { href: "/pflegegrad-5", text: "PG 5" }]}
            />
            <MehrDazu
              label="Wie alle Zuschüsse kombiniert werden:"
              links={[{ href: "/finanzierung", text: "Finanzierung der 24h-Pflege — alle Zuschüsse 2026" }]}
            />
          </Abschnitt>

          <DunklerAbschnitt
            id="widerspruch"
            titel="Widerspruch einlegen — wenn die Einstufung zu niedrig ist"
            einleitung="Wer mit dem Bescheid nicht einverstanden ist, hat einen Monat Zeit für den Widerspruch. Widersprüche sind häufig erfolgreich — besonders wenn der Pflegebedarf nicht gut dokumentiert war. Die Pflegekasse muss dann erneut prüfen."
            punkte={[
              { title: 'Widerspruch einlegen', desc: 'Schriftlich innerhalb eines Monats nach Bescheiddatum — per Brief oder E-Mail an die Pflegekasse. Begründung mitschicken: Was wurde falsch bewertet? Welche Einschränkungen hat der Gutachter übersehen?' },
              { title: 'Pflegetagebuch nachreichen', desc: 'Das nachgereichte Pflegetagebuch ist das stärkste Argument im Widerspruchsverfahren. Tagesprotokoll für die nächsten 2–4 Wochen führen und dem Widerspruch beilegen.' },
              { title: 'Gegengutachten beauftragen', desc: 'Ein unabhängiger Pflegegutachter kann die Begutachtung wiederholen. Die Kosten trägt in der Regel der Antragsteller (ca. 150–400 €), können aber im Erfolgsfall erstattet werden.' },
              { title: 'Klage beim Sozialgericht', desc: 'Wenn der Widerspruch abgelehnt wird, ist eine Klage beim Sozialgericht möglich — kostenlos, kein Anwalt nötig. Erfolgsquote ist hoch wenn der Pflegebedarf gut belegt ist.' },
            ]}
          >
            <MehrDazu
              label="Schritt für Schritt:"
              links={[{ href: "/pflegegrad-widerspruch-einlegen", text: "Pflegegrad Widerspruch einlegen — Muster und Tipps" }, { href: "/pflegegrad-erhoehen", text: "Pflegegrad erhöhen — wann und wie" }]}
            />
          </DunklerAbschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen zum Pflegegrad beantragen">
            <Fragen
              fragen={[
                { q: 'Wie beantrage ich einen Pflegegrad?', a: 'Schriftlich oder telefonisch bei der Pflegekasse (Krankenkasse) einen Antrag auf Pflegeleistungen stellen. Dann kommt der Medizinische Dienst zur Begutachtung nach Hause. Die Pflegekasse entscheidet innerhalb von 25 Arbeitstagen und schickt den Bescheid.' },
                { q: 'Wer kann einen Pflegegrad beantragen?', a: 'Jeder der wegen einer körperlichen, geistigen oder psychischen Erkrankung voraussichtlich mindestens 6 Monate auf Hilfe im Alltag angewiesen ist. Den Antrag können auch Angehörige oder Bevollmächtigte stellen.' },
                { q: 'Wie lange dauert es bis der Pflegegrad bewilligt wird?', a: 'Maximal 25 Arbeitstage nach Antragseingang — gesetzlich vorgeschrieben. Bei Krankenhausaufenthalt oder Reha nur eine Woche. Hält die Pflegekasse die Frist nicht ein, hat der Antragsteller Anspruch auf 70 Euro Entschädigung pro Woche Verzögerung.' },
                { q: 'Was passiert bei der MD-Begutachtung?', a: 'Ein Gutachter des Medizinischen Dienstes bewertet die Selbstständigkeit in sechs Lebensbereichen: Mobilität, Kognition, Verhaltensweisen, Selbstversorgung, krankheitsbedingte Anforderungen und Alltagsleben. Die Punktzahl bestimmt den Pflegegrad.' },
                { q: 'Was sind die Pflegegeld-Beträge 2026?', a: 'Pflegegrad 2: 347 €/Monat · Pflegegrad 3: 599 €/Monat · Pflegegrad 4: 800 €/Monat · Pflegegrad 5: 990 €/Monat. Dazu 131 €/Monat Entlastungsbetrag und 3.539 €/Jahr Entlastungsbudget für Verhinderungs- und Kurzzeitpflege. Keine Erhöhung für 2026 — nächste Dynamisierung frühestens Januar 2028.' },
                { q: 'Was tun wenn der Pflegegrad abgelehnt oder zu niedrig ist?', a: 'Innerhalb eines Monats schriftlich Widerspruch bei der Pflegekasse einlegen. Pflegetagebuch nachreichen und ggf. ein Gegengutachten beauftragen. Widersprüche sind häufig erfolgreich wenn der Pflegebedarf gut dokumentiert ist.' },
                { q: 'Ab wann gelten die Pflegeleistungen?', a: 'Rückwirkend ab dem Datum des Antragseingangs bei der Pflegekasse — nicht erst ab dem Begutachtungstermin oder dem Bescheid. Deshalb: Antrag so früh wie möglich stellen.' },
                { q: 'Kann ich den Pflegegrad später erhöhen lassen?', a: 'Ja — jederzeit wenn sich der Pflegebedarf verschlechtert. Antrag auf Höherstufung bei der Pflegekasse stellen, der MD begutachtet erneut. Es gibt keine Sperrfrist.' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="pflegegrad-beantragen" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
