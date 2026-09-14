import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, Fragen, Gruppen, MehrDazu, Punkte, RatgeberKopf, RatgeberRumpf, Text,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('sturzpraevention-senioren', '25. April 2026')

const SECTIONS = [
  { id: 'risikofaktoren', title: 'Risikofaktoren erkennen' },
  { id: 'wohnung', title: 'Wohnung sichern' },
  { id: 'uebungen', title: 'Übungen & Training' },
  { id: 'hilfsmittel', title: 'Hilfsmittel & Hilfsmittelversorgung' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Sturzprävention Senioren — wie man Stürze verhindert',
  description: 'Sturzprävention Senioren 2026: Risikofaktoren erkennen, Wohnung sichern, Gleichgewichtsübungen und Hilfsmittel — wie man Stürze im Alter effektiv verhindert.',
  alternates: { canonical: 'https://primundus.de/sturzpraevention-senioren' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Sturzprävention Senioren | Primundus',
    description: 'Wie man Stürze im Alter verhindert — Risikofaktoren, Wohnungssicherung, Übungen, Hilfsmittel.',
    url: 'https://primundus.de/sturzpraevention-senioren',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Sturzprävention Senioren — wie man Stürze verhindert',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/sturzpraevention-senioren',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Alltag & Angehörige', item: 'https://primundus.de/alltag' },
      { '@type': 'ListItem', position: 3, name: 'Sturzprävention Senioren', item: 'https://primundus.de/sturzpraevention-senioren' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Wie kann man Stürze im Alter verhindern?', acceptedAnswer: { '@type': 'Answer', text: 'Die wirksamsten Maßnahmen: Gleichgewichtstraining (nachweislich Sturzrisiko um 30–40 % reduzierend), Wohnungssicherung (Haltegriffe, rutschfeste Böden, gute Beleuchtung), Medikamente überprüfen lassen (Schwindel als Nebenwirkung), geeignetes Schuhwerk, Sehvermögen regelmäßig prüfen.' } },
      { '@type': 'Question', name: 'Welche Übungen helfen gegen Sturzgefahr?', acceptedAnswer: { '@type': 'Answer', text: 'Gleichgewichtsübungen: Einbeinstand (mit Festhalten anfangen), Tandemgang, Tai Chi, Yoga für Senioren. Kraftübungen für die Beinmuskulatur: Aufstehen vom Stuhl ohne Hände, Zehenspitzenstand. Täglich 10–15 Minuten sind wirksamer als einmal pro Woche viel.' } },
    ],
  },
]

export default function SturzpraventionSenioren() {
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
            { label: "Sturzprävention Senioren" },
          ]}
          augenbraue="Ratgeber Sicherheit"
          titel="Sturzprävention Senioren — wie man Stürze wirklich verhindert"
          einleitung="Stürze sind die häufigste Unfallursache bei Menschen über 65 — und einer der häufigsten Auslöser für den Einstieg in intensive Pflege. Das Gute: Sturzrisiko ist zu einem erheblichen Teil vermeidbar. Gleichgewichtstraining allein reduziert das Sturzrisiko nachweislich um 30–40 Prozent. Die Wohnungssicherung tut ihr Übriges."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="6 Min."
          blick={[
                'Gleichgewichtstraining: reduziert Sturzrisiko um 30–40 % (täglich 10–15 Min reichen)',
                'Haltegriffe im Bad und an der Toilette: günstiger Einbau, sofort wirksam',
                'Medikamente überprüfen: Schwindel als Nebenwirkung ist häufig unterschätzt',
                'Gutes Schuhwerk: feste Sohle, kein offenes Fersenteil, keine Hausschuhe ohne Halt',
                'Beleuchtung: Nachtlicht auf Toilettenweg, Bewegungsmelder im Flur',
                'Sehvermögen: regelmäßige Augencheck — schlechtes Sehen = hohes Sturzrisiko',
              ]}
          blickTitel="Auf einen Blick — die wirksamsten Maßnahmen"
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="risikofaktoren" titel="Risikofaktoren erkennen">
            <Text>
              Wer die Risikofaktoren kennt, kann gezielt ansetzen. Viele sind modifizierbar — das heißt: behandelbar oder ausschaltbar.
            </Text>
            <Gruppen
              gruppen={[
                { title: 'Körperliche Faktoren', punkte: ['Muskelschwäche in Beinen und Rumpf', 'Eingeschränktes Gleichgewicht', 'Gangstörungen, Parkinson-Tremor', 'Schwindel, Kreislaufprobleme', 'Eingeschränktes Sehvermögen'] },
                { title: 'Medikamente', punkte: ['Beruhigungsmittel, Schlaftabletten', 'Blutdruckmittel (Schwindel)', 'Diuretika (schnelles Aufstehen nötig)', 'Mehr als 4 Medikamente gleichzeitig', 'Neue Medikamente → Arzt fragen'] },
                { title: 'Umgebungsrisiken', punkte: ['Lose Teppiche, Kabel am Boden', 'Schlechte Beleuchtung', 'Fehlende Haltegriffe', 'Nasse Böden im Bad', 'Ungeeignetes Schuhwerk'] },
                { title: 'Psychische Faktoren', punkte: ['Sturzangst (paradoxerweise erhöht Sturzrisiko)', 'Unterschätzung eigener Einschränkungen', 'Eile, Ungeduld', 'Nachts keine Brille aufsetzen'] },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="wohnung" titel="Wohnung sichern — die wichtigsten Maßnahmen">
            <Punkte
              punkte={[
                { title: 'Bad & WC', desc: 'Haltegriffe neben Dusche, Badewanne und WC (wichtigste Einzelmaßnahme). Rutschfeste Matten. Erhöhter WC-Sitz. Badewannenlifter oder begehbare Dusche.' },
                { title: 'Flur & Treppenhaus', desc: 'Handläufe beidseitig an Treppen. Gut befestigte Teppichläufer oder entfernen. Nachtlicht mit Bewegungsmelder auf dem Weg zur Toilette.' },
                { title: 'Schlafzimmer', desc: 'Bett auf optimale Höhe einstellen (Fußsohlen vollständig auf dem Boden beim Sitzen). Nachtlampe griffbereit. Rutschfeste Schuhe neben dem Bett.' },
                { title: 'Wohnzimmer', desc: 'Lose Teppiche entfernen oder befestigen. Kabel wegräumen. Freie Wege ohne Hindernisse. Sessel und Sofa auf optimale Aufstehehöhe prüfen.' },
              ]}
            />
            <MehrDazu
              label="Förderung bis 4.180 €/Maßnahme:"
              links={[{ href: "/barrierefreies-zuhause-gestalten", text: "Barrierefreies Zuhause gestalten" }]}
            />
          </Abschnitt>

          <Abschnitt id="uebungen" titel="Übungen & Training — was wirklich hilft">
            <Text>
              Gleichgewichts- und Krafttraining sind die wirksamsten Maßnahmen gegen Sturzrisiko. Studien zeigen: Regelmäßiges Training reduziert das Sturzrisiko um 30–40 %. Täglich 10–15 Minuten sind wirksamer als ein langer Sporttag pro Woche.
            </Text>
            <Gruppen
              gruppen={[
                { title: 'Einbeinstand', zusatz: 'Gleichgewicht', punkte: ['An Küchentisch oder Stuhl festhalten, ein Bein heben, 10–30 Sekunden halten. Täglich 3×, jedes Bein. Wenn sicher: Festhalten loslassen.'] },
                { title: 'Aufstehen vom Stuhl ohne Hände', zusatz: 'Kraft & Balance', punkte: ['Langsam ohne Zuhilfenahme der Hände aufstehen und hinsetzen. 10 Wiederholungen. Stärkt Beinmuskulatur und verbessert Gleichgewicht.'] },
                { title: 'Tandemgang', zusatz: 'Gleichgewicht', punkte: ['Fuß vor Fuß auf einer Linie gehen (wie auf einem Seil balancieren). Entlang Küchentisch oder Wand zur Sicherheit. Täglich 5 Meter vor und zurück.'] },
                { title: 'Zehenspitzenstand', zusatz: 'Kraft', punkte: ['An Stuhl festhalten, auf Zehenspitzen heben und langsam senken. 15 Wiederholungen. Stärkt Unterschenkelmuskulatur und verbessert Gleichgewicht.'] },
                { title: 'Tai Chi oder Yoga für Senioren', zusatz: 'Gleichgewicht & Kraft', punkte: ['Kurse in Volkshochschulen oder Sportvereinen, auch als Video möglich. Besonders wirksam in Studien — reduziert Sturzrisiko um bis zu 40 %.'] },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="hilfsmittel" titel="Hilfsmittel & Versorgung">
            <Gruppen
              gruppen={[
                { title: 'Gehstock / Rollator', zusatz: 'Krankenkasse', punkte: ['Arztrezept nötig. Rollator hat mehr Stabilität als Gehstock — bei höherem Sturzrisiko bevorzugen.'] },
                { title: 'Hüftprotektor', zusatz: 'Hilfsmittelliste', punkte: ['Polstereinlage in der Unterwäsche die bei Sturz Hüfte schützt. Besonders bei erhöhtem Sturzrisiko und Osteoporose sinnvoll.'] },
                { title: 'Hausnotruf', zusatz: 'Entlastungsbetrag (131 €/Mo)', punkte: ['Wenn Sturz passiert und niemand da ist: Hausnotruf ermöglicht schnelle Hilfe.'] },
                { title: 'Orthopädische Schuhe', zusatz: 'Krankenkasse (ärztl. Verordnung)', punkte: ['Bei Gangstörungen oder Fehlstellungen die Sturzrisiko erhöhen.'] },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen">
            <Fragen
              fragen={[
                { q: 'Wie kann man Stürze im Alter verhindern?', a: 'Die wirksamsten Maßnahmen: Gleichgewichtstraining (30–40 % weniger Stürze), Wohnungssicherung (Haltegriffe, rutschfreie Böden), Medikamente auf Schwindelnebenwirkungen überprüfen lassen, gutes Schuhwerk, regelmäßiger Sehcheck.' },
                { q: 'Welche Übungen helfen gegen Sturzgefahr?', a: 'Einbeinstand, Aufstehen vom Stuhl ohne Hände, Tandemgang, Zehenspitzenstand. Tai Chi und Yoga für Senioren sind in Studien besonders wirksam. Täglich 10–15 Minuten sind wirksamer als ein langer Sporttag.' },
                { q: 'Bezahlt die Krankenkasse Hilfsmittel zur Sturzprävention?', a: 'Rollator und Gehstock: Krankenkasse mit Rezept. Hausnotruf: über Entlastungsbetrag (131 €/Monat) der Pflegekasse. Hüftprotektor: oft über Hilfsmittelliste. Wohnraumanpassungen: Pflegekasse bis 4.180 €/Maßnahme.' },
                { q: 'Was tun wenn jemand gestürzt ist?', a: 'Nicht sofort aufrichten wenn Verletzung möglich. Notarzt rufen bei Verdacht auf Knochenbruch, Kopfverletzung oder Bewusstlosigkeit. Danach Arzt aufsuchen, Ursache des Sturzes analysieren, Präventionsmaßnahmen anpassen.' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="sturzpraevention-senioren" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
