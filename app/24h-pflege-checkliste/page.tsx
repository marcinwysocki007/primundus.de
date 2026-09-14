import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, Fragen, Kasten, Liste, RatgeberKopf, RatgeberRumpf, Vorspann,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('24h-pflege-checkliste', '30. April 2026')

const SECTIONS = [{ id: 'wohnung', title: 'Wohnung vorbereiten' }, { id: 'dokumente', title: 'Dokumente & Informationen' }, { id: 'erster-tag', title: 'Erster Tag' }, { id: 'laufend', title: 'Laufende Betreuung' }, { id: 'faq', title: 'Häufige Fragen' }]

export const metadata: Metadata = {
  title: '24h-Pflege Checkliste — alles was Familien brauchen',
  description: 'Vollständige Checkliste für den Start der 24h-Pflege: Was vorzubereiten ist, welche Dokumente gebraucht werden, wie der erste Tag abläuft.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-checkliste' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege Checkliste 2026 | Primundus',
    description: 'Vollständige Checkliste für den Start der 24h-Pflege: Was vorzubereiten ist, welche Dokumente gebraucht werden, wie der erste Tag abläuft.',
    url: 'https://primundus.de/24h-pflege-checkliste',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '24h-Pflege Checkliste — alles was Familien vor dem Start vorbereiten sollten',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-30',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/24h-pflege-checkliste',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://primundus.de/ratgeber' },
      { '@type': 'ListItem', position: 3, name: '24h-Pflege Checkliste', item: 'https://primundus.de/24h-pflege-checkliste' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was muss ich vor dem Start der 24h-Pflege vorbereiten?', acceptedAnswer: { '@type': 'Answer', text: 'Zimmer für die Kraft einrichten, Medikamentenliste aktualisieren, Dokumente (Pflegekarte, Vollmachten) bereitstellen, Tagesablauf aufschreiben.' } },
      { '@type': 'Question', name: 'Wie viel Platz braucht die Betreuungskraft?', acceptedAnswer: { '@type': 'Answer', text: 'Ein eigenes Zimmer ist notwendig — Mindestgröße ca. 10 m². Mit eigenem Bett, Schrank und idealerweise Internetzugang.' } },
      { '@type': 'Question', name: 'Was wenn ich etwas vergessen habe?', acceptedAnswer: { '@type': 'Answer', text: 'Kein Problem — Primundus begleitet den Start aktiv und steht Mo–Fr 9–18 Uhr telefonisch zur Verfügung.' } }
    ],
  },
]

export default function Page() {
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
            { label: "Ratgeber", href: "/ratgeber" },
            { label: "24h-Pflege Checkliste" },
          ]}
          augenbraue="Ratgeber Checkliste"
          titel="24h-Pflege Checkliste — alles was Familien vor dem Start vorbereiten sollten"
          einleitung="Eine Betreuungskraft zieht ein — und die Familie möchte, dass alles reibungslos läuft. Diese Checkliste zeigt was vorzubereiten ist: von der Wohnung bis zu den Dokumenten, vom ersten Tag bis zur laufenden Betreuung."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="5 Min."
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Vorspann>
            <Kasten augenbraue="Wohnung vorbereiten" ton="gruen">
              <Liste punkte={["Zimmer für die Kraft einrichten — mit Bett, Schrank, Internetzugang", "Schlüssel und Zugangscodes bereitstellen", "Einkauf für die erste Woche erledigen", "Wichtige Gegenstände beschriften (Medikamente, Hilfsmittel)", "Notfallnummern sichtbar aufhängen"]} />
            </Kasten>
            <Kasten augenbraue="Dokumente & Informationen zusammenstellen">
              <Liste punkte={["Medikamentenliste aktuell und vollständig", "Arzt- und Therapietermine der nächsten Wochen", "Pflegeversicherungskarte und Pflegegeld-Bescheid", "Hausarzt-Kontaktdaten für die Kraft", "Vorsorgevollmacht und Patientenverfügung griffbereit", "Allergien und Unverträglichkeiten notiert", "Gewohnheiten und Tagesstruktur aufgeschrieben"]} />
            </Kasten>
            <Kasten augenbraue="Erster Tag — das ist wichtig" ton="gruen">
              <Liste punkte={["Zeit nehmen für ausführliche Einführung", "Wohnung gemeinsam abgehen — wo ist was", "Tagesablauf und Vorlieben erklären", "Primundus-Kontakt der Kraft mitgeben", "Erste Tage: Familie erreichbar bleiben"]} />
            </Kasten>
            <Kasten augenbraue="Laufende Betreuung — regelmäßig prüfen" ton="gruen">
              <Liste punkte={["Wöchentlich kurz nachfragen wie es läuft", "Medikamentenliste aktuell halten", "Arzttermine koordinieren", "Bei Problemen: sofort Primundus anrufen (089 200 000 830)", "Kraftwechsel ca. alle 6–8 Wochen planen"]} />
            </Kasten>
          </Vorspann>

          <Abschnitt id="faq" titel="Häufige Fragen">
            <Fragen
              fragen={[
                { q: "Was muss ich vor dem Start der 24h-Pflege vorbereiten?", a: "Zimmer für die Kraft einrichten, Medikamentenliste aktualisieren, Dokumente (Pflegekarte, Vollmachten) bereitstellen, Tagesablauf aufschreiben." },
                { q: "Wie viel Platz braucht die Betreuungskraft?", a: "Ein eigenes Zimmer ist notwendig — Mindestgröße ca. 10 m². Mit eigenem Bett, Schrank und idealerweise Internetzugang." },
                { q: "Was wenn ich etwas vergessen habe?", a: "Kein Problem — Primundus begleitet den Start aktiv und steht Mo–Fr 9–18 Uhr telefonisch zur Verfügung." },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="24h-pflege-checkliste" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
