import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, DunklerAbschnitt, Fragen, Kasten, MehrDazu, Punkte, RatgeberKopf, RatgeberRumpf, Schritte, Text, Vorspann,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('widerspruch-pflegekasse-einlegen', '25. April 2026')

const SECTIONS = [
  { id: 'wann', title: 'Wann Widerspruch einlegen?' },
  { id: 'wie', title: 'So wird Widerspruch eingelegt' },
  { id: 'muster', title: 'Musterbrief & Formulierung' },
  { id: 'erfolgschancen', title: 'Erfolgschancen & nächste Schritte' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Widerspruch Pflegekasse einlegen — Muster & Tipps 2026',
  description: 'Widerspruch gegen Pflegegrad-Bescheid: Wie man ihn einlegt, Musterschreiben und welche Erfolgschancen realistisch sind. Frist: 1 Monat nach Bescheid.',
  alternates: { canonical: 'https://primundus.de/widerspruch-pflegekasse-einlegen' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Widerspruch Pflegekasse 2026 | Primundus',
    description: 'Widerspruch gegen zu niedrigen Pflegegrad — Muster, Fristen und Erfolgschancen.',
    url: 'https://primundus.de/widerspruch-pflegekasse-einlegen',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Widerspruch Pflegekasse einlegen — Muster & Tipps 2026',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/widerspruch-pflegekasse-einlegen',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Pflegegrade', item: 'https://primundus.de/pflegegrade' },
      { '@type': 'ListItem', position: 3, name: 'Widerspruch einlegen', item: 'https://primundus.de/widerspruch-pflegekasse-einlegen' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Wie lege ich Widerspruch gegen den Pflegegrad ein?', acceptedAnswer: { '@type': 'Answer', text: 'Schriftlich innerhalb eines Monats nach dem Bescheiddatum an die Pflegekasse: "Ich lege Widerspruch gegen den Bescheid vom [Datum] ein." Kein Formular nötig, formloser Brief reicht. Danach das MD-Gutachten anfordern, Pflegetagebuch und neue Arztberichte nachreichen.' } },
      { '@type': 'Question', name: 'Wie hoch sind die Erfolgschancen?', acceptedAnswer: { '@type': 'Answer', text: 'Rund ein Drittel aller Widersprüche gegen Pflegegrad-Bescheide sind erfolgreich. Die Chancen steigen erheblich wenn ein neues Pflegetagebuch nachgereicht wird und konkrete Beispiele der Einschränkungen dokumentiert sind.' } },
      { '@type': 'Question', name: 'Wie lange hat man Zeit für den Widerspruch?', acceptedAnswer: { '@type': 'Answer', text: 'Genau einen Monat nach dem Datum des Bescheids — nicht nach Eingang des Bescheids. Bei Versäumnis der Frist kann in Ausnahmefällen Wiedereinsetzung beantragt werden.' } },
    ],
  },
]

export default function WiderspruchPflegekasseEinlegen() {
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
            { label: "Widerspruch einlegen" },
          ]}
          augenbraue="Ratgeber Pflegegrad"
          titel="Widerspruch Pflegekasse einlegen — Muster & Tipps"
          einleitung="Rund ein Drittel aller Widersprüche gegen Pflegegrad-Bescheide sind erfolgreich. Das Zeitfenster ist eng: genau ein Monat nach dem Bescheiddatum. Der Widerspruch selbst ist formlos — was danach kommt, entscheidet über den Erfolg: Pflegetagebuch, Arztberichte, konkretes Gutachten."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="6 Min."
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Vorspann>
            <Kasten titel="⏱ Frist: 1 Monat nach Bescheiddatum" ton="koralle">
              <Text>Die Widerspruchsfrist beträgt exakt einen Monat ab dem im Bescheid genannten Datum — nicht ab Eingang. Bei Fristversäumnis kann in Ausnahmefällen Wiedereinsetzung beantragt werden (z.B. bei Krankheit). Lieber zu früh als zu spät.</Text>
            </Kasten>
          </Vorspann>

          <DunklerAbschnitt
            id="wann"
            titel="Wann sollte man Widerspruch einlegen?"
            einleitung="Widerspruch lohnt sich wenn der Pflegegrad zu niedrig erscheint — und besonders dann wenn konkrete Gründe für eine falsche Bewertung vorliegen."
            punkte={[
              { title: 'Begutachtung war schlecht vorbereitet', desc: 'Kein Pflegetagebuch geführt, schlechtester Tag nicht geschildert, keine Vertrauensperson dabei — dann wurde der tatsächliche Bedarf wahrscheinlich unterschätzt.' },
              { title: 'Der Pflegebedarf wurde offensichtlich falsch eingeschätzt', desc: 'Beim Vergleich mit den NBA-Kriterien wird klar: Bestimmte Einschränkungen wurden nicht oder zu niedrig bewertet.' },
              { title: 'Neue Diagnosen oder Befunde seit der Begutachtung', desc: 'Neue Arztberichte belegen einen höheren Pflegebedarf als zum Zeitpunkt der Begutachtung dokumentiert war.' },
              { title: 'Kognitive Einschränkungen (Demenz) wurden unterschätzt', desc: 'Betroffene wirken beim Gutachtertermin oft kompetenter als im Alltag — wenn das nicht durch Vertrauensperson oder Tagebuch belegt wurde, ist Widerspruch sinnvoll.' },
            ]}
          />

          <Abschnitt id="wie" titel="So wird Widerspruch eingelegt — Schritt für Schritt">
            <Schritte
              schritte={[
                { title: 'Sofort schriftlich Widerspruch einlegen', desc: 'Formloser Brief oder E-Mail an die Pflegekasse reicht. Kein Formular nötig, keine ausführliche Begründung notwendig. Wichtig: Das Datum des Bescheids und die Versichertennummer angeben.' },
                { title: 'MD-Gutachten anfordern', desc: 'Das vollständige MD-Gutachten kann kostenlos bei der Pflegekasse angefordert werden. Es zeigt wie jeder NBA-Bereich bewertet wurde — und wo Verbesserungspotenzial liegt.' },
                { title: 'Schwachstellen im Gutachten identifizieren', desc: 'Welche Bereiche wurden zu niedrig eingestuft? Welche Einschränkungen wurden nicht erwähnt? Das ist die Grundlage für die Widerspruchsbegründung.' },
                { title: 'Pflegetagebuch und Arztberichte nachreichen', desc: 'Neues Pflegetagebuch (1–2 Wochen) mit konkreten Beispielen. Aktuelle Arztberichte und Befunde. Diese Unterlagen schriftlich an die Pflegekasse schicken — mit Bezug auf den Widerspruch.' },
                { title: 'Ggf. neue Begutachtung', desc: 'Oft ordnet die Pflegekasse eine neue Begutachtung an. Diesmal besser vorbereiten: Vertrauensperson dabei, schlechtesten Tag schildern, Pflegetagebuch vorzeigen.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="muster" titel="Musterschreiben für den Widerspruch">
            <Kasten>
              <Text>[Vorname Nachname]<br />[Straße Hausnummer]<br />[PLZ Ort]<br />[Telefon / E-Mail]</Text>
              <Text>[Name der Pflegekasse]<br />[Adresse]</Text>
              <Text>[Ort, Datum]</Text>
              <Text>Widerspruch gegen Ihren Bescheid vom [Datum des Bescheids]<br />Versicherte/r: [Name], geb. [Datum], Vers.-Nr.: [Nummer]</Text>
              <Text>Sehr geehrte Damen und Herren,</Text>
              <Text>gegen den o.g. Bescheid über die Feststellung des Pflegegrades lege ich fristgerecht Widerspruch ein.</Text>
              <Text>Die festgestellte Einstufung entspricht nach meiner Einschätzung nicht dem tatsächlichen Pflegebedarf. Ich werde die Begründung nach Erhalt des Gutachtens des Medizinischen Dienstes nachreichen. Ich bitte um Übersendung des Gutachtens.</Text>
              <Text>Mit freundlichen Grüßen,<br />[Unterschrift]<br />[Name]</Text>
            </Kasten>
          </Abschnitt>

          <Abschnitt id="erfolgschancen" titel="Erfolgschancen & nächste Schritte">
            <Text>
              Rund ein Drittel aller Widersprüche gegen Pflegegrad-Bescheide sind erfolgreich. Die Chancen steigen erheblich wenn konkrete Belege nachgereicht werden.
            </Text>
            <Punkte
              punkte={[
                { title: 'Widerspruch erfolgreich', desc: 'Die Pflegekasse erkennt den Widerspruch an und stuft höher ein. Leistungen gelten rückwirkend ab dem ursprünglichen Antragsdatum.' },
                { title: 'Neue Begutachtung', desc: 'Die Pflegekasse ordnet eine neue MD-Begutachtung an. Diesmal optimal vorbereiten: Pflegetagebuch, Vertrauensperson, konkreter Beschreibung der Verschlechterungen.' },
                { title: 'Widerspruch abgelehnt — Klage', desc: 'Wenn der Widerspruch abgelehnt wird, kann Klage beim Sozialgericht eingereicht werden. Kostenlos, keine Anwaltspflicht. Empfehlung: Sozialrechtsberater oder VdK einschalten.' },
              ]}
            />
            <MehrDazu
              label="Begutachtung besser vorbereiten:"
              links={[{ href: "/pflegegrad-begutachtung-vorbereiten", text: "MD-Begutachtung — Checkliste & 7 Tipps" }, { href: "/pflegegrad-erhoehen", text: "Höherstufungsantrag stellen" }]}
            />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen zum Widerspruch">
            <Fragen
              fragen={[
                { q: 'Wie lege ich Widerspruch gegen den Pflegegrad ein?', a: 'Schriftlich innerhalb eines Monats nach Bescheiddatum. Formloser Brief reicht: "Ich lege Widerspruch gegen den Bescheid vom [Datum] ein." Danach MD-Gutachten anfordern, Pflegetagebuch und Arztberichte nachreichen.' },
                { q: 'Wie lange hat man Zeit für den Widerspruch?', a: 'Genau einen Monat nach dem im Bescheid genannten Datum — nicht nach Eingang. Bei Fristversäumnis in Ausnahmefällen Wiedereinsetzung beantragen.' },
                { q: 'Wie hoch sind die Erfolgschancen?', a: 'Rund ein Drittel aller Widersprüche sind erfolgreich. Chancen steigen deutlich wenn Pflegetagebuch und aktualisierte Arztberichte nachgereicht werden.' },
                { q: 'Was kostet ein Widerspruch?', a: 'Nichts — der Widerspruch ist kostenlos. Auch eine Klage beim Sozialgericht ist kostenfrei. Kosten entstehen nur wenn ein Anwalt eingeschaltet wird (freiwillig).' },
                { q: 'Was wenn der Widerspruch abgelehnt wird?', a: 'Klage beim Sozialgericht einreichen — kostenlos, keine Anwaltspflicht. Sozialrechtsberater (VdK, SoVD) können unterstützen.' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="widerspruch-pflegekasse-einlegen" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
