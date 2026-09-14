import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, Fragen, Kasten, Liste, RatgeberKopf, RatgeberRumpf, Text,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('24h-pflege-fuer-angehoerige', '30. April 2026')

const SECTIONS = [{ id: 'einstieg', title: 'Wann ist der richtige Zeitpunkt?' }, { id: 'ablauf', title: 'Wie läuft die Organisation ab?' }, { id: 'kosten', title: 'Was kostet es die Familie?' }, { id: 'entlastung', title: 'Entlastung für pflegende Angehörige' }, { id: 'faq', title: 'Häufige Fragen' }]

export const metadata: Metadata = {
  title: '24h-Pflege für Angehörige organisieren — Leitfaden für Familien | Primundus',
  description: '24h-Pflege für Eltern oder Angehörige organisieren: was zu beachten ist, wie der Ablauf läuft, welche Kosten entstehen und wie Primundus unterstützt.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-fuer-angehoerige' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege für Angehörige | Primundus',
    description: '24h-Pflege für Eltern oder Angehörige organisieren: was zu beachten ist, wie der Ablauf läuft, welche Kosten entstehen und wie Primundus unterstützt.',
    url: 'https://primundus.de/24h-pflege-fuer-angehoerige',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '24h-Pflege für Angehörige — wie Familien die Betreuung organisieren',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-30',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/24h-pflege-fuer-angehoerige',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://primundus.de/ratgeber' },
      { '@type': 'ListItem', position: 3, name: '24h-Pflege für Angehörige', item: 'https://primundus.de/24h-pflege-fuer-angehoerige' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Wie organisiere ich 24h-Pflege für meine Eltern?', acceptedAnswer: { '@type': 'Answer', text: 'Primundus anrufen (089 200 000 830) oder online anfragen. Im Beratungsgespräch wird die Situation besprochen, eine passende Kraft ausgewählt, und der Start organisiert — in 4–7 Tagen.' } },
      { '@type': 'Question', name: 'Was kostet 24h-Pflege für meine Mutter / meinen Vater?', acceptedAnswer: { '@type': 'Answer', text: '2.200–3.500 €/Monat. Mit Kassenzuschüssen sinkt der Eigenanteil bei PG 3 auf ca. 1.500–2.000 €/Monat.' } },
      { '@type': 'Question', name: 'Kann ich täglich kündbar sein?', acceptedAnswer: { '@type': 'Answer', text: 'Ja — Primundus ist täglich kündbar. Keine Mindestlaufzeit, keine Kündigungsfristen.' } }
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
            { label: "24h-Pflege für Angehörige" },
          ]}
          augenbraue="Ratgeber Angehörige"
          titel="24h-Pflege für Angehörige — wie Familien die Betreuung organisieren"
          einleitung="Die Eltern brauchen Pflege — aber das Pflegeheim kommt nicht in Frage. Und selbst rund um die Uhr da sein ist nicht möglich. 24h-Pflege ist die Lösung: eine Betreuungskraft zieht ein, übernimmt alles, und die Familie kann wieder aufatmen."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="7 Min."
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="einstieg" titel="Wann ist der richtige Zeitpunkt?">
            <Text>
              Viele Familien warten zu lange. Die Zeichen sind oft schleichend: der Herd bleibt an, Medikamente werden vergessen, die Wohnung vernachlässigt. Der richtige Zeitpunkt ist nicht wenn nichts mehr geht — sondern wenn man merkt, dass die aktuelle Situation nicht mehr sicher ist.
            </Text>
            <Kasten augenbraue="Typische Auslöser für den Entschluss" ton="gruen">
              <Liste punkte={["Elternteil lebt allein und hatte einen Sturz", "Demenz-Symptome nehmen zu — Orientierung lässt nach", "Pflegender Ehepartner ist selbst krank oder erschöpft", "Familie lebt weit weg und kann nicht täglich helfen", "Krankenhausaufenthalt — was danach?"]} />
            </Kasten>
          </Abschnitt>

          <Abschnitt id="ablauf" titel="Wie läuft die Organisation ab?">
            <Text>
              Primundus übernimmt die gesamte Organisation: Beratungsgespräch, Auswahl der Kraft, Koordination des Starts, laufende Betreuung. Familien müssen nicht selbst suchen, prüfen oder verwalten.
            </Text>
            <Text>
              Vom ersten Anruf bis zum Start der Betreuung vergehen typisch 4–7 Tage. In dringenden Situationen auch schneller.
            </Text>
          </Abschnitt>

          <Abschnitt id="entlastung" titel="Entlastung für pflegende Angehörige">
            <Text>
              Wer Eltern oder Partner pflegt, gibt oft die eigene Gesundheit dafür her. Die 24h-Kraft übernimmt nicht nur die Pflege — sie gibt Angehörigen ihr Leben zurück. Beruf, eigene Kinder, Erholung, Schlaf.
            </Text>
            <Text>
              Dazu kommt: Pflegende Angehörige haben Anspruch auf Pflegegeld wenn sie die Pflege selbst übernehmen. Mit einer 24h-Kraft geht das Pflegegeld direkt an die Familie.
            </Text>
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen">
            <Fragen
              fragen={[
                { q: "Wie organisiere ich 24h-Pflege für meine Eltern?", a: "Primundus anrufen (089 200 000 830) oder online anfragen. Im Beratungsgespräch wird die Situation besprochen, eine passende Kraft ausgewählt, und der Start organisiert — in 4–7 Tagen." },
                { q: "Was kostet 24h-Pflege für meine Mutter / meinen Vater?", a: "2.200–3.500 €/Monat. Mit Kassenzuschüssen sinkt der Eigenanteil bei PG 3 auf ca. 1.500–2.000 €/Monat." },
                { q: "Kann ich täglich kündbar sein?", a: "Ja — Primundus ist täglich kündbar. Keine Mindestlaufzeit, keine Kündigungsfristen." },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="24h-pflege-fuer-angehoerige" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
