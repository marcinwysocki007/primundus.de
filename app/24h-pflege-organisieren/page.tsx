import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, Fragen, Gruppen, Punkte, RatgeberKopf, RatgeberRumpf, Text,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('24h-pflege-organisieren', '25. April 2026')

const SECTIONS = [
  { id: 'schritt-fuer-schritt', title: 'Schritt-für-Schritt-Planung' },
  { id: 'was-regeln', title: 'Was vor dem Start geregelt sein muss' },
  { id: 'wohnen', title: 'Wohnen, Zimmer, Alltag' },
  { id: 'laufend', title: 'Laufende Organisation' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: '24h-Pflege organisieren — Checkliste & Schritt-für-Schritt',
  description: '24h-Pflege organisieren: Was vor dem Start geregelt sein muss, wie man Wohnraum vorbereitet und was laufend zu organisieren ist. Mit vollständiger Checkliste.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-organisieren' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege organisieren | Primundus',
    description: 'Schritt-für-Schritt: Was vor und nach dem Start der 24h-Pflege organisiert werden muss.',
    url: 'https://primundus.de/24h-pflege-organisieren',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '24h-Pflege organisieren — Checkliste und Schritt-für-Schritt',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/24h-pflege-organisieren',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Organisation', item: 'https://primundus.de/organisation' },
      { '@type': 'ListItem', position: 3, name: '24h-Pflege organisieren', item: 'https://primundus.de/24h-pflege-organisieren' },
    ],
  },
]

export default function PflegeOrganisieren() {
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
            { label: "24h-Pflege organisieren" },
          ]}
          augenbraue="Ratgeber Organisation"
          titel="24h-Pflege organisieren — Checkliste & Schritt-für-Schritt"
          einleitung="Die Organisation der 24h-Pflege wirkt am Anfang überwältigend — ist es aber nicht wenn man es systematisch angeht. Wer mit Primundus arbeitet, hat einen festen Ansprechpartner der die meiste Arbeit übernimmt. Trotzdem gibt es Dinge die die Familie selbst regeln muss. Hier ist die vollständige Übersicht."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="7 Min."
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="schritt-fuer-schritt" titel="Schritt-für-Schritt-Planung">
            {/* Gruppen hat keine Nummernkreise: die Phasennummer steht vor dem Titel */}
            <Gruppen
              haken
              gruppen={[
                { n: '1', phase: 'Sofort (wenn Pflege nötig wird)', aufgaben: ['Pflegekasse-Antrag stellen (formlos, per Telefon — Datum sichern)', 'Primundus anrufen: 089 200 000 830 — kostenlose Beratung', 'Pflegetagebuch beginnen für spätere Begutachtung'] },
                { n: '2', phase: 'Innerhalb 1–2 Wochen', aufgaben: ['Beschäftigungsmodell wählen (Empfehlung: Entsendemodell via Primundus)', 'Passende Kraft auswählen (Profil prüfen, Telefonat vorab)', 'Zimmer für die Betreuungskraft vorbereiten', 'Familienmitglieder informieren und einbeziehen'] },
                { n: '3', phase: 'Vor Anreise der Kraft', aufgaben: ['Schlüssel bereitstellen, Hausordnung erklären', 'Kühlschrank und Vorräte auffüllen', 'Medikamentenliste und Arztdaten bereithalten', 'Pflegetagebuch und Routinepläne vorbereiten'] },
                { n: '4', phase: 'Erste Woche — Eingewöhnung', aufgaben: ['Kraft in Haushalt, Routinen und Besonderheiten einführen', 'Lieblingsgerichte, Gewohnheiten, Vorlieben erklären', 'Arzt und Physiotherapeut vorstellen', 'Erreichbarkeit für Rückfragen sicherstellen'] },
                { n: '5', phase: 'Laufend', aufgaben: ['Kraftwechsel alle 6–8 Wochen: Primundus organisiert nahtlos', 'Kassenzuschüsse monatlich optimieren', 'Pflegegrad regelmäßig auf Höherstufung prüfen', 'Primundus als laufenden Ansprechpartner nutzen'] },
              ].map((s) => ({ title: `${s.n}. ${s.phase}`, punkte: s.aufgaben }))}
            />
          </Abschnitt>

          <Abschnitt id="was-regeln" titel="Was vor dem Start geregelt sein muss">
            <Punkte
              punkte={[
                { title: 'Pflegekasse informieren', desc: 'Pflegekasse-Antrag gestellt? Pflegegrad bekannt oder in Beantragung? Entlastungsbetrag aktiviert? Wenn noch kein Pflegegrad: Antrag sofort stellen — rückwirkend ab Antragsdatum.' },
                { title: 'Vorsorgevollmacht & Patientenverfügung', desc: 'Sind diese Dokumente vorhanden? Wer trifft Entscheidungen wenn der Pflegebedürftige das nicht mehr kann? Ohne Vollmacht entscheidet das Gericht — das kostet Zeit und Geld.' },
                { title: 'Hausarzt informieren', desc: 'Hausarzt über den Start der 24h-Pflege informieren. Medikamentenliste aktualisieren. Hausbesuche vereinbaren wenn nötig. Arztdaten der Betreuungskraft zugänglich machen.' },
                { title: 'Schlüssel & Zugänge', desc: 'Reserveschlüssel für Betreuungskraft. Codes für Alarmanlage, Briefkasten, Keller. Notfallkontakte aufschreiben und gut sichtbar aufhängen.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="wohnen" titel="Wohnen, Zimmer & Alltag vorbereiten">
            <Text>
              Die Betreuungskraft lebt dauerhaft im Haushalt. Ein eigenes Zimmer mit Privatsphäre ist Pflicht — kein Luxus, sondern Voraussetzung für eine gute Zusammenarbeit.
            </Text>
            <Gruppen
              haken
              gruppen={[
                { title: 'Zimmer der Betreuungskraft', punkte: ['Eigenes Zimmer mit Tür (Privatsphäre)', 'Bett oder Einzelbett, Schrank, Tisch', 'WLAN-Zugang', 'Kost und Logis werden auf die Vergütung angerechnet (ca. 300–400 €/Mo)'] },
                { title: 'Küche & Lebensmittel', punkte: ['Kühlschrank zugänglich für Betreuungskraft', 'Vorräte für erste Woche auffüllen', 'Diät- und Allergiehinweise kommunizieren', 'Budget für Lebensmitteleinkäufe klären'] },
                { title: 'Medikamente & Hilfsmittel', punkte: ['Medikamentenliste mit Einnahmezeitpunkten ausdrucken', 'Hilfsmittel (Rollator, Rollstuhl) zugänglich und funktionsfähig', 'Pflegehilfsmittel (Einmalhandschuhe, Inkontinenzmaterial) vorrätig', 'Verbandsmaterial und Erste-Hilfe-Kasten'] },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="laufend" titel="Laufende Organisation — was regelmäßig anfällt">
            <Punkte
              punkte={[
                { title: 'Wöchentlich', desc: 'Einkaufsliste abgleichen, Arzttermine koordinieren, kurzes Gespräch mit Kraft über die Woche.' },
                { title: 'Monatlich', desc: 'Kassenzuschüsse prüfen (Entlastungsbetrag ausgegeben?), Abrechnung mit Primundus, Medikamente auffüllen.' },
                { title: 'Alle 6–8 Wochen', desc: 'Kraftwechsel: Primundus organisiert nahtlos. Übergabegespräch mit alter und neuer Kraft.' },
                { title: 'Jährlich', desc: 'Steuerliche Absetzbarkeit prüfen (bis 4.000 €), Pflegegrad auf Höherstufungsbedarf prüfen, Entlastungsbudget-Saldo prüfen.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen">
            <Fragen
              fragen={[
                { q: 'Was muss ich vor dem Start der 24h-Pflege organisieren?', a: 'Pflegekasse-Antrag stellen, Beschäftigungsmodell wählen, Kraft auswählen, Zimmer vorbereiten, Schlüssel bereitstellen, Hausarzt informieren, Medikamentenliste bereithalten, Vorsorgevollmacht prüfen.' },
                { q: 'Muss die Betreuungskraft ein eigenes Zimmer haben?', a: 'Ja — eigenes Zimmer mit Privatsphäre ist Pflichtvoraussetzung. Kost und Logis werden auf die Vergütung angerechnet (ca. 300–400 €/Monat).' },
                { q: 'Wie oft wechselt die Betreuungskraft?', a: 'In der Regel alle 6–8 Wochen. Primundus organisiert jeden Wechsel nahtlos — die Familie muss sich darum nicht kümmern.' },
                { q: 'Was passiert wenn die Kraft krank wird?', a: 'Primundus stellt unverzüglich eine Ersatzkraft. Die Familie bleibt nie ohne Versorgung.' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="24h-pflege-organisieren" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
