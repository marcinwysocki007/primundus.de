import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, Fragen, Gruppen, Liste, Punkte, RatgeberKopf, RatgeberRumpf, Text,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('checkliste-pflegekraft-einstellen', '25. April 2026')

const SECTIONS = [
  { id: 'vor-der-auswahl', title: 'Vor der Auswahl' },
  { id: 'auswahlgespräch', title: 'Auswahlgespräch & Fragen' },
  { id: 'vor-anreise', title: 'Vor der Anreise' },
  { id: 'erste-woche', title: 'Erste Woche' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Checkliste Pflegekraft einstellen — vollständige Anleitung',
  description: 'Checkliste Pflegekraft einstellen: Was vor der Auswahl, beim Gespräch, vor Anreise und in der ersten Woche zu beachten ist.',
  alternates: { canonical: 'https://primundus.de/checkliste-pflegekraft-einstellen' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Checkliste Pflegekraft einstellen | Primundus',
    description: 'Vollständige Checkliste: Was bei der Einstellung einer 24h-Betreuungskraft zu beachten ist.',
    url: 'https://primundus.de/checkliste-pflegekraft-einstellen',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Checkliste Pflegekraft einstellen — vollständige Anleitung',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/checkliste-pflegekraft-einstellen',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Organisation', item: 'https://primundus.de/organisation' },
      { '@type': 'ListItem', position: 3, name: 'Checkliste Pflegekraft einstellen', item: 'https://primundus.de/checkliste-pflegekraft-einstellen' },
    ],
  },
]

export default function ChecklistePflegekraftEinstellen() {
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
            { label: "Checkliste Pflegekraft einstellen" },
          ]}
          augenbraue="Ratgeber Checkliste"
          titel="Checkliste Pflegekraft einstellen — vollständige Anleitung"
          einleitung="Die Entscheidung für eine 24h-Betreuungskraft ist richtig — aber worauf kommt es bei der Auswahl an? Was muss vor der Anreise vorbereitet sein? Und wie gelingt der Start in der ersten Woche? Diese Checkliste führt durch jeden Schritt — mit konkreten Fragen für das Auswahlgespräch."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="6 Min."
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="vor-der-auswahl" titel="Vor der Auswahl — was klar sein muss">
            <Punkte
              punkte={[
                { title: 'Pflegebedarf definiert', desc: 'Welche Hilfe ist nötig (Körperpflege, Haushalt, Mobilisierung, Demenz)?' },
                { title: 'Spezialanforderungen notiert', desc: 'Welche Erkrankungen, Medikamente, Allergien, Ernährungsbesonderheiten?' },
                { title: 'Führerschein nötig?', desc: 'Arzttermine, Einkaufen — braucht die Kraft ein Auto oder den eigenen Führerschein?' },
                { title: 'Sprachkenntnisse', desc: 'Wie gut muss Deutsch sein? Was ist das Minimum für gute Kommunikation?' },
                { title: 'Zimmersituation geklärt', desc: 'Eigenes Zimmer für die Kraft vorhanden und vorbereitet?' },
                { title: 'Beschäftigungsmodell gewählt', desc: 'Entsendemodell (empfohlen), Direktanstellung oder andere Lösung?' },
                { title: 'Budget definiert', desc: 'Was kann und soll monatlich ausgegeben werden (inkl. Kassenzuschüsse)?' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="auswahlgespräch" titel="Auswahlgespräch — diese Fragen stellen">
            <Text>
              Ein Telefonat vorab ist möglich — nutzen Sie es. Diese Fragen helfen einzuschätzen ob die Kraft wirklich passt.
            </Text>
            <Gruppen
              gruppen={[
                {
                  title: 'Erfahrung',
                  punkte: [
                    'Wie viele Einsätze in der häuslichen 24h-Pflege haben Sie bisher gemacht?',
                    'Was waren die häufigsten Diagnosen bei Ihren bisherigen Pflegebedürftigen?',
                    'Haben Sie Erfahrung mit [spezifische Diagnose — Demenz, Parkinson etc.]?',
                    'Darf ich Kontakt zu einer früheren Familie aufnehmen?',
                  ],
                },
                {
                  title: 'Praktisches',
                  punkte: [
                    'Kochen Sie gerne und was kochen Sie am liebsten?',
                    'Haben Sie Erfahrung mit [spezifische Diät — Diabeteskost, pürierte Speisen]?',
                    'Haben Sie einen Führerschein und würden Sie das Auto der Familie nutzen?',
                    'Haben Sie Haustiere lieb oder gibt es Probleme damit?',
                  ],
                },
                {
                  title: 'Persönlichkeit & Sprache',
                  punkte: [
                    'Erzählen Sie mir etwas über sich — auf Deutsch. (Sprachniveau selbst beurteilen)',
                    'Wie gehen Sie mit einem Bewohner um der manchmal aggressiv ist?',
                    'Was tun Sie wenn jemand nicht essen oder Medikamente nehmen möchte?',
                    'Wie verbringen Sie Ihre Freizeit wenn der Pflegebedürftige ruht?',
                  ],
                },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="vor-anreise" titel="Vor der Anreise — Checkliste">
            <Liste punkte={[
              'Zimmer der Betreuungskraft sauber und möbliert (Bett, Schrank, Tisch)',
              'WLAN-Passwort notiert und zugänglich',
              'Schlüssel bereit (Haustür, Briefkasten, Keller)',
              'Medikamentenliste ausgedruckt — mit Einnahmezeiten',
              'Notfallkontakte aufgehängt (Arzt, Primundus, nächste Angehörige)',
              'Kühlschrank aufgefüllt für erste Woche',
              'Hilfsmittel überprüft (Rollator, Rollstuhl, Badehilfen funktionsfähig?)',
              'A1-Bescheinigung der Kraft liegt vor (bei Entsendemodell)',
              'Pflegevertrag unterzeichnet',
              'Pflegekasse über neue Versorgungsform informiert',
            ]} />
          </Abschnitt>

          <Abschnitt id="erste-woche" titel="Erste Woche — so gelingt die Eingewöhnung">
            <Punkte
              punkte={[
                { title: 'Tag 1', desc: 'Kraft im Haushalt vorstellen: Wo ist was? Wie funktionieren Herd, Waschmaschine, Heizung? Hausapotheke zeigen.' },
                { title: 'Tag 1–2', desc: 'Routinen und Tagesablauf erklären: Wann steht die Person auf, wann isst sie, wann schläft sie? Lieblingsgerichte, Gewohnheiten, No-Gos.' },
                { title: 'Tag 2–3', desc: 'Arzt vorstellen (Hausarzt anrufen), Physiotherapeut- und Ergotherapeut-Termine mitteilen. Apotheke zeigen.' },
                { title: 'Ganze erste Woche', desc: 'Erreichbar bleiben für Rückfragen. Nicht zu viele Anweisungen auf einmal. Der Kraft Raum geben eigene Beziehung mit dem Pflegebedürftigen aufzubauen.' },
                { title: 'Ende erste Woche', desc: 'Kurzes Feedbackgespräch: Was läuft gut? Was braucht die Kraft noch? Gibt es Probleme? Primundus informieren wenn nötig.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen">
            <Fragen
              fragen={[
                { q: 'Wie wähle ich die richtige Betreuungskraft aus?', a: 'Erfahrung mit der spezifischen Diagnose, aktive Deutschkenntnisse, Persönlichkeit die passt. Telefonat vorab nutzen. Bei Primundus Profil anfordern, Referenzen prüfen.' },
                { q: 'Was sind die wichtigsten Fragen im Auswahlgespräch?', a: 'Erfahrung mit der Diagnose, Kochkenntnisse, Umgang mit schwierigen Situationen (Verweigerung, Aggression), Deutschkenntnisse selbst beurteilen durch das Gespräch.' },
                { q: 'Was wenn die Kraft in der ersten Woche nicht passt?', a: 'Täglich kündbar bei Primundus. Einfach mitteilen — Primundus stellt sofort Ersatz. Keine langen Kündigungsfristen, kein Risiko.' },
                { q: 'Muss ich bei Primundus selbst die Kraft auswählen?', a: 'Nein — Primundus wählt die passende Kraft aus und schlägt sie vor. Auf Wunsch ist ein Telefonat vorab möglich. Die Auswahl kann aber auch komplett Primundus überlassen werden.' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="checkliste-pflegekraft-einstellen" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
