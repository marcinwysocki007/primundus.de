import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, DunklerAbschnitt, Fragen, Kasten, MehrDazu, Punkte, RatgeberKopf, RatgeberRumpf, Text, Vorspann,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('pflege-aus-der-ferne-koordinieren', '25. April 2026')

const SECTIONS = [
  { id: 'herausforderung', title: 'Die Herausforderung der Fernbetreuung' },
  { id: 'struktur', title: 'Struktur & Kommunikation aufbauen' },
  { id: 'digital', title: 'Digitale Hilfsmittel' },
  { id: 'notfall', title: 'Notfallplan & lokale Unterstützung' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflege aus der Ferne koordinieren — so geht es | Primundus',
  description: 'Pflege aus der Ferne koordinieren: Wie man Kommunikation strukturiert, welche digitalen Hilfsmittel helfen und warum eine 24h-Betreuungskraft die.',
  alternates: { canonical: 'https://primundus.de/pflege-aus-der-ferne-koordinieren' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Pflege aus der Ferne koordinieren | Primundus',
    description: 'Wie man häusliche Pflege aus der Entfernung organisiert und koordiniert.',
    url: 'https://primundus.de/pflege-aus-der-ferne-koordinieren',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pflege aus der Ferne koordinieren — so geht es',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/pflege-aus-der-ferne-koordinieren',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Organisation', item: 'https://primundus.de/organisation' },
      { '@type': 'ListItem', position: 3, name: 'Pflege aus der Ferne koordinieren', item: 'https://primundus.de/pflege-aus-der-ferne-koordinieren' },
    ],
  },
]

export default function PflegeAusDerFerneKoordinieren() {
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
            { label: "Organisation", href: "/organisation" },
            { label: "Pflege aus der Ferne" },
          ]}
          augenbraue="Ratgeber Organisation"
          titel="Pflege aus der Ferne koordinieren — so geht es"
          einleitung="Viele Kinder leben hunderte Kilometer von ihren Eltern entfernt — und tragen trotzdem Verantwortung für die Pflege. Fernbetreuung ist anspruchsvoll: die ständige Sorge, die Hilflosigkeit bei Problemen, die Schuldgefühle wenn man nicht vor Ort ist. Eine 24h-Betreuungskraft mit Primundus als Ansprechpartner verändert diese Situation grundlegend."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="6 Min."
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Vorspann>
            <Kasten titel="Die beste Antwort auf Fernbetreuung: 24h-Kraft + Primundus als Ansprechpartner" ton="gruen">
              <Text>Mit einer 24h-Betreuungskraft ist die Versorgung durchgehend gesichert — ohne Lücken, ohne Koordinationsaufwand für die Familie. Primundus bleibt laufender Ansprechpartner für alle organisatorischen Fragen. Angehörige können aus der Ferne loslassen ohne sich um die Versorgung sorgen zu müssen.</Text>
            </Kasten>
          </Vorspann>

          <Abschnitt id="herausforderung" titel="Die Herausforderung der Fernbetreuung">
            <Punkte
              punkte={[
                { title: 'Keine direkte Kontrolle', desc: 'Man sieht nicht wie es wirklich geht. Regelmäßige Videotelefonate und kurze tägliche Check-ins mit der Betreuungskraft schaffen Sichtbarkeit.' },
                { title: 'Koordinationsaufwand', desc: 'Arzttermine, Pflegedienst, Apotheke, Hausnotruf — alles muss aus der Ferne koordiniert werden. Mit Primundus als Ansprechpartner fällt ein Großteil dieses Aufwands weg.' },
                { title: 'Notfallmanagement', desc: 'Was wenn etwas passiert und man nicht sofort vor Ort sein kann? Klarer Notfallplan mit lokalen Kontakten ist essenziell.' },
                { title: 'Vertrauen in die Pflegekraft', desc: 'Man kann die Kraft nicht täglich sehen. Regelmäßige Kommunikation und Vertrauen in die Agentur (Primundus prüft und vermittelt) sind die Antwort.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="struktur" titel="Struktur & Kommunikation aufbauen">
            <Punkte
              punkte={[
                { title: 'Täglicher Kurzkontakt mit der Kraft', desc: 'Kurze tägliche Nachricht oder 5-Minuten-Telefonat: "Wie war heute?" reicht. Sofortige Problemmeldung vereinbaren.' },
                { title: 'Wöchentliches Videotelefon-Ritual', desc: 'Fester Wochentermin für Videoanruf mit dem Pflegebedürftigen — das gibt Sicherheit und zeigt Präsenz auch aus der Ferne.' },
                { title: 'Klares Eskalationsprotokoll', desc: 'Die Kraft weiß: Bei X ruft sie Primundus an, bei Y den Arzt, bei Z sofort den Rettungsdienst. Alles schriftlich festhalten.' },
                { title: 'Familien-WhatsApp-Gruppe', desc: 'Alle Familienmitglieder in einer Gruppe — Informationen müssen nur einmal geteilt werden, jeder ist auf dem gleichen Stand.' },
                { title: 'Digitales Pflegetagebuch', desc: 'Kurze tägliche Notizen der Kraft (Stimmung, Auffälligkeiten, Mahlzeiten, Medikamente) — einsehbar für alle Angehörigen.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="digital" titel="Digitale Hilfsmittel für die Fernbetreuung">
            <Punkte
              punkte={[
                { title: 'Videotelefonie (FaceTime, WhatsApp, Zoom)', desc: 'Wöchentliche Gesichts-zu-Gesicht-Verbindung mit dem Pflegebedürftigen und der Betreuungskraft. Tablet mit großem Display für Senioren empfohlen.' },
                { title: 'Hausnotruf mit GPS', desc: 'Sicherheitsnetz: Im Notfall direkte Verbindung zu Leitstelle oder Angehörigen — auch wenn die Kraft kurz abwesend ist.' },
                { title: 'Smarte Türklingel mit Kamera', desc: 'Zeigt wer kommt und geht (Pflegedienst, Besucher). Aus der Ferne einsehbar. Erhöht das Sicherheitsgefühl der Angehörigen.' },
                { title: 'Geteilter Familienkalender (Google/Apple)', desc: 'Arzttermine, Kraftwechsel, Besuche — alle Familienmitglieder sehen dieselbe Planung. Kein Koordinationschaos.' },
                { title: 'Digitale Medikamentenerinnerung', desc: 'App oder Pillendose mit Alarm — schafft Struktur auch wenn die Kraft kurz beschäftigt ist.' },
              ]}
            />
          </Abschnitt>

          <DunklerAbschnitt
            id="notfall"
            titel="Notfallplan & lokale Unterstützung"
            einleitung="Für alle Situationen die nicht warten können bis die Angehörigen ankommen, braucht es lokale Unterstützung."
            punkte={[
              { title: 'Nachbar mit Schlüssel', desc: 'Kann kurzfristig nach dem Rechten sehen, Pakete entgegennehmen, im Notfall vor Ort sein.' },
              { title: 'Lokaler Freund / Bekannter der Familie', desc: 'Besucht regelmäßig, gibt ehrliches Feedback wie es wirklich geht.' },
              { title: 'Hausarzt', desc: 'Gut erreichbarer Hausarzt mit Hausbesuchsbereitschaft. Direktnummer der Praxis hinterlegt.' },
              { title: 'Primundus', desc: 'Ansprechpartner für alle Organisationsfragen, Kraftwechsel, Probleme mit der Betreuungskraft. 089 200 000 830.' },
            ]}
          >
            <MehrDazu
              label="Notfallplan erstellen:"
              links={[{ href: "/notfallplan-pflege", text: "Notfallplan Pflege — was reingehört" }]}
            />
          </DunklerAbschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen">
            <Fragen
              fragen={[
                { q: 'Wie koordiniert man Pflege aus der Ferne?', a: 'Täglicher Kurzkontakt mit der Kraft, wöchentliches Videotelefon, klares Eskalationsprotokoll, Familien-Gruppe für Kommunikation, lokale Vertrauensperson als Backup. Primundus als laufender Ansprechpartner.' },
                { q: 'Welche digitalen Hilfsmittel helfen bei der Fernbetreuung?', a: 'Videotelefonie (Tablet), Hausnotruf mit GPS, smarte Türklingel, geteilter Familienkalender, digitale Medikamentenerinnerung.' },
                { q: 'Was tun wenn man aus der Ferne nicht sicher ist ob alles gut läuft?', a: 'Lokale Vertrauensperson (Nachbar, Freund) bitten vorbeizuschauen. Primundus ansprechen. Video-Hausbesuch vereinbaren. Im Zweifel selbst hinfahren.' },
                { q: 'Erleichtert eine 24h-Betreuungskraft die Fernbetreuung?', a: 'Enorm — weil die Versorgung durchgehend gesichert ist, ohne Lücken. Statt ständiger Koordination (ambulanter Dienst, Angehörige, Nachbarn) hat man eine Ansprechpartnerin die alles kennt und immer da ist.' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="pflege-aus-der-ferne-koordinieren" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
