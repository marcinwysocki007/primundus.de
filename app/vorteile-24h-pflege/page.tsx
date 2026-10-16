import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, Fragen, Punkte, RatgeberKopf, RatgeberRumpf, Text,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('vorteile-24h-pflege', '16. Oktober 2026')

const SECTIONS = [{ id: 'zuhause', title: 'Im eigenen Zuhause bleiben' }, { id: 'eins-zu-eins', title: '1:1-Betreuung' }, { id: 'kosten', title: 'Kosten oft günstiger' }, { id: 'rechtssicher', title: 'Rechtssicher & flexibel' }, { id: 'faq', title: 'Häufige Fragen' }]

export const metadata: Metadata = {
  title: 'Vorteile der 24-Stunden-Pflege zu Hause: 1:1-Betreuung',
  description: 'Alle Vorteile der 24h-Pflege zuhause im Überblick: eigenes Zuhause, 1:1-Betreuung, günstiger als Pflegeheim, täglich kündbar. Mit ehrlichem Vergleich.',
  alternates: { canonical: 'https://primundus.de/vorteile-24h-pflege' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Vorteile der 24-Stunden-Pflege zu Hause: 1:1-Betreuung',
    description: 'Alle Vorteile der 24h-Pflege zuhause im Überblick: eigenes Zuhause, 1:1-Betreuung, günstiger als Pflegeheim, täglich kündbar. Mit ehrlichem Vergleich.',
    url: 'https://primundus.de/vorteile-24h-pflege',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Vorteile der 24-Stunden-Pflege zu Hause: was sie von anderen Lösungen unterscheidet',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-30',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/vorteile-24h-pflege',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://primundus.de/ratgeber' },
      { '@type': 'ListItem', position: 3, name: 'Vorteile der 24h-Pflege', item: 'https://primundus.de/vorteile-24h-pflege' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was sind die größten Vorteile der 24h-Pflege?', acceptedAnswer: { '@type': 'Answer', text: 'Eigenes Zuhause bleibt, 1:1-Betreuung durch eine Kraft im Haus, Unterstützung im Haushalt, täglich kündbar, oft günstiger als Pflegeheim.' } },
      { '@type': 'Question', name: 'Ist 24h-Pflege wirklich günstiger als ein Pflegeheim?', acceptedAnswer: { '@type': 'Answer', text: 'Oft ja — nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat. Der durchschnittliche Pflegeheim-Eigenanteil liegt 2026 bei 3.364 €/Monat.' } },
      { '@type': 'Question', name: 'Welche Vorteile hat 24h-Pflege bei Demenz?', acceptedAnswer: { '@type': 'Answer', text: 'Vertraute Umgebung bleibt erhalten, eine feste Bezugsperson lebt mit im Haus. Das gibt Orientierung und Sicherheit.' } }
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
            { label: "Vorteile der 24h-Pflege" },
          ]}
          augenbraue="Ratgeber 24-Stunden-Pflege"
          titel="Vorteile der 24-Stunden-Pflege zu Hause: was sie von anderen Lösungen unterscheidet"
          einleitung="24h-Pflege zuhause ist keine Notlösung — sie ist für viele Menschen die bessere Lösung. Warum? Weil das eigene Zuhause bleibt, weil eine vertraute Person mit im Haus lebt und weil die Kosten oft günstiger sind als ein Pflegeheim. Hier alle Vorteile im Überblick."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="6 Min."
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="zuhause" titel="Im eigenen Zuhause bleiben">
            <Text>
              Das eigene Zuhause ist mehr als vier Wände — es ist Identität, Erinnerung, Sicherheit. Jeder gewohnte Handgriff, jedes vertraute Gesicht in der Nachbarschaft, der eigene Garten. Ein Pflegeheim kann das nicht ersetzen.
            </Text>
            <Text>
              Bei der 24h-Pflege bleibt das alles erhalten. Die Betreuungskraft kommt in das Zuhause des Pflegebedürftigen — nicht umgekehrt. Das gibt Orientierung, besonders bei Demenz.
            </Text>
          </Abschnitt>

          <Abschnitt id="eins-zu-eins" titel="1:1-Betreuung: eine Kraft für eine Person">
            <Text>
              Im Pflegeheim teilen sich viele Bewohner eine Pflegekraft. Zu Stoßzeiten fehlt die Zeit für den Einzelnen. Bei der 24-Stunden-Pflege ist eine Kraft nur für eine Person da: im Alltag, bei Arztbesuchen, beim Kochen und bei Bedarf auch nachts.
            </Text>
            <Text>
              Das schafft Vertrauen, Kontinuität und echte Beziehung — besonders wichtig bei Demenz, Parkinson oder nach einem Schlaganfall.
            </Text>
            <Punkte
              punkte={[
                { title: "Täglich kündbar", desc: "Keine Mindestlaufzeit, keine Fristen — maximale Flexibilität für die Familie." },
                { title: "Anreise in 3 Tagen möglich", desc: "Primundus organisiert den Start schnell — auch in dringenden Situationen." },
                { title: "Haushalt vollständig übernommen", desc: "Kochen, Putzen, Einkaufen, Wäsche — alles inklusive." },
                { title: "Auch nachts im Haus", desc: "Bei Bedarf auch nachts da, etwa bei Unruhe oder einem Sturz. Regelmäßige Einsätze in der Nacht müssen ausgeglichen werden." },
                { title: "Günstiger als Pflegeheim", desc: "Mit Kassenzuschüssen oft unter dem Pflegeheim-Eigenanteil." },
                { title: "Rechtssicher", desc: "Entsendemodell mit A1-Bescheinigung — keine deutschen Sozialabgaben." },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="kosten" titel="Kosten oft günstiger als das Pflegeheim">
            <Text>
              Der durchschnittliche Pflegeheim-Eigenanteil liegt 2026 bei 3.364 €/Monat — Tendenz steigend. 24h-Pflege über Primundus kostet ab 2.150 €/Monat; davon gehen Pflegegeld, Entlastungsbudget und Steuerermäßigung ab.
            </Text>
            <Text>
              Bei Pflegegrad 3 bleiben so ab ca. 923 €/Monat. Das ist deutlich weniger als viele Pflegeheime — bei deutlich besserer Betreuungsqualität.
            </Text>
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen">
            <Fragen
              fragen={[
                { q: "Was sind die größten Vorteile der 24h-Pflege?", a: "Eigenes Zuhause bleibt, 1:1-Betreuung durch eine Kraft im Haus, Unterstützung im Haushalt, täglich kündbar, oft günstiger als Pflegeheim." },
                { q: "Ist 24h-Pflege wirklich günstiger als ein Pflegeheim?", a: "Oft ja — nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat. Der durchschnittliche Pflegeheim-Eigenanteil liegt 2026 bei 3.364 €/Monat." },
                { q: "Welche Vorteile hat 24h-Pflege bei Demenz?", a: "Vertraute Umgebung bleibt erhalten, eine feste Bezugsperson lebt mit im Haus. Das gibt Orientierung und Sicherheit." },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="vorteile-24h-pflege" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
