import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, Fragen, Punkte, RatgeberKopf, RatgeberRumpf, Schritte, Text,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('wenn-eltern-pflege-verweigern', '25. April 2026')

const SECTIONS = [
  { id: 'warum', title: 'Warum lehnen Eltern Pflege ab?' },
  { id: 'strategien', title: 'Strategien die wirklich helfen' },
  { id: 'grenzen', title: 'Grenzen der Selbstbestimmung' },
  { id: 'praktisch', title: 'Erste praktische Schritte' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Wenn Eltern Pflege verweigern — was jetzt hilft | Primundus',
  description: 'Eltern verweigern Pflege oder Betreuungskraft? Warum das passiert, welche Strategien wirklich helfen und wo die Grenzen der Selbstbestimmung liegen.',
  alternates: { canonical: 'https://primundus.de/wenn-eltern-pflege-verweigern' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Wenn Eltern Pflege verweigern | Primundus',
    description: 'Was man tun kann wenn Eltern Pflege oder eine Betreuungskraft ablehnen.',
    url: 'https://primundus.de/wenn-eltern-pflege-verweigern',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Wenn Eltern Pflege verweigern — was jetzt hilft',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/wenn-eltern-pflege-verweigern',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Alltag & Angehörige', item: 'https://primundus.de/alltag' },
      { '@type': 'ListItem', position: 3, name: 'Wenn Eltern Pflege verweigern', item: 'https://primundus.de/wenn-eltern-pflege-verweigern' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was kann ich tun wenn meine Eltern Pflege verweigern?', acceptedAnswer: { '@type': 'Answer', text: 'Nicht konfrontativ vorgehen. Ursache der Ablehnung verstehen (Angst vor Kontrollverlust, Scham, Verleugnung). Schrittweise kleine Unterstützungen einführen. Dritte einbeziehen (Hausarzt, Vertrauensperson). Autonomie respektieren solange keine Selbstgefährdung vorliegt.' } },
      { '@type': 'Question', name: 'Darf ich meinen Eltern Pflege aufzwingen?', acceptedAnswer: { '@type': 'Answer', text: 'Nein — Erwachsene haben das Recht auf Selbstbestimmung, auch wenn sie schlechte Entscheidungen treffen. Ausnahme: Bei Demenz oder Geschäftsunfähigkeit kann eine Betreuung vom Gericht angeordnet werden. Bis dahin gilt: überzeugen statt erzwingen.' } },
    ],
  },
]

export default function WennElternPflegeVerweigern() {
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
            { label: "Wenn Eltern Pflege verweigern" },
          ]}
          augenbraue="Ratgeber Angehörige"
          titel="Wenn Eltern Pflege verweigern — was jetzt hilft"
          einleitung={"\"Ich brauche keine Hilfe\" — drei Wörter die pflegende Kinder verzweifeln lassen. Gleichzeitig sehen sie wie der Vater immer schwächer wird, die Mutter Medikamente vergisst, die Wohnung verwahrlost. Die Ablehnung von Pflege ist häufig — und fast immer versteht man sie erst wenn man den wahren Grund dahinter kennt."}
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="7 Min."
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="warum" titel="Warum lehnen Eltern Pflege ab?">
            <Text>
              Hinter der Ablehnung steckt fast nie Sturheit — sondern Angst, Scham oder Verleugnung. Wer den wahren Grund kennt, kann gezielt ansetzen.
            </Text>
            <Punkte
              punkte={[
                { title: 'Angst vor Kontrollverlust', desc: '"Wenn ich jemanden ins Haus lasse, verliere ich meine Selbstständigkeit." Die Wohnung ist das letzte Terrain das noch vollständig kontrolliert wird. Eine fremde Person darin zu haben fühlt sich wie Kapitulation an.' },
                { title: 'Scham', desc: 'Hilfe bei der Körperpflege bedeutet: Jemand sieht meine Schwäche, meine Einschränkungen, meinen alternden Körper. Das ist zutiefst beschämend — besonders für Menschen die ihr Leben lang selbstständig und stark waren.' },
                { title: 'Verleugnung', desc: '"Mir geht es gut, ich komme zurecht." Manchmal ist das ehrlich — manchmal ist es Verleugnung. Der eigene Hilfebedarf nicht akzeptieren können ist psychologisch verständlich, kann aber gefährlich werden.' },
                { title: 'Angst vor dem Pflegeheim', desc: 'Viele Menschen verbinden Pflege automatisch mit Pflegeheim — und lehnen deshalb jede Unterstützung ab, aus Angst dass Pflegeheim als nächstes kommt. Eine 24h-Betreuungskraft zuhause ist das Gegenteil davon.' },
                { title: 'Schlechte frühere Erfahrungen', desc: 'Eine unpassende Haushaltshilfe, ein überfordernder Pflegedienst — wer einmal schlechte Erfahrungen gemacht hat, sperrt sich gegen alle weitere Hilfe.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="strategien" titel="Strategien die wirklich helfen">
            <Punkte
              punkte={[
                { title: 'Den richtigen Zeitpunkt wählen', desc: 'Nicht nach einem Sturz oder in der Akutphase das Thema aufbringen — dann ist die Abwehr am höchsten. Besser in einem ruhigen Moment, bei gutem Befinden. Als Gespräch unter Gleichen, nicht als Anordnung.' },
                { title: 'Mit dem Hausarzt sprechen', desc: 'Ein Arzt hat eine andere Autorität als die eigenen Kinder. "Der Arzt meint es wäre jetzt Zeit für etwas Unterstützung" wirkt oft anders als dasselbe aus dem Mund der Tochter. Hausarzt vorab informieren und um Unterstützung bitten.' },
                { title: 'Klein anfangen', desc: 'Nicht mit "Wir brauchen jetzt eine 24h-Pflege" starten — das überfordert. Mit einem kleinen Schritt beginnen: "Könntest du dir vorstellen dass jemand einmal pro Woche hilft?" Schrittweise ausbauen wenn das Vertrauen wächst.' },
                { title: 'Autonomie betonen', desc: 'Den Kontrollwunsch ernst nehmen: "Du entscheidest wann und wie viel Hilfe du möchtest." "Du kannst die Person jederzeit schicken." Eine 24h-Kraft ist kein Kontrollverlust — sie ermöglicht ein selbstbestimmteres Leben.' },
                { title: 'Probezeit vorschlagen', desc: '"Können wir das mal 4 Wochen ausprobieren?" Eine zeitlich begrenzte Probezeit fühlt sich weniger endgültig an als eine dauerhafte Entscheidung. Viele die skeptisch starten, möchten nach 4 Wochen nicht mehr ohne.' },
                { title: 'Vertrauensperson einbeziehen', desc: 'Geschwister, gute Freunde, Pfarrer — manchmal hört man auf jemanden der nicht der eigene Sohn oder die eigene Tochter ist. Nicht allein kämpfen.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="grenzen" titel="Grenzen der Selbstbestimmung — wann muss gehandelt werden?">
            <Text>
              Erwachsene haben das Recht auf Selbstbestimmung — auch das Recht schlechte Entscheidungen zu treffen. Solange keine akute Selbstgefährdung vorliegt, muss die Entscheidung respektiert werden.
            </Text>
            <Text>
              Es gibt aber Situationen wo gehandelt werden muss:
            </Text>
            <Punkte
              punkte={[
                { title: 'Akute Selbstgefährdung', desc: 'Wenn jemand durch Verwahrlosung, Mangelernährung, vergessene Medikamente oder häufige Stürze akut gefährdet ist — ärztliche Einschätzung einholen. Der Arzt kann eine Krankenhauseinweisung oder Betreuungsverfahren einleiten.' },
                { title: 'Demenz und fehlende Einsichtsfähigkeit', desc: 'Bei fortgeschrittener Demenz kann die Fähigkeit zur Einwilligung fehlen. Dann kann eine gesetzliche Betreuung beim Amtsgericht beantragt werden — die bevollmächtigte Person (oder ein gerichtlich bestellter Betreuer) trifft Entscheidungen.' },
                { title: 'Gefährdung anderer', desc: 'Wenn das Verhalten des Pflegebedürftigen andere Menschen gefährdet (z.B. vergessener Herd, Weglaufen bei Demenz), kann unabhängig vom eigenen Willen gehandelt werden.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="praktisch" titel="Erste praktische Schritte">
            <Schritte
              schritte={[
                { title: 'Ursache der Ablehnung verstehen', desc: 'Mit dem Elternteil sprechen — nicht über Pflege, sondern über seine Ängste. Was genau stört? Fremde im Haus? Angst vor Pflegeheim? Scham?' },
                { title: 'Hausarzt einweihen', desc: 'Arzt vorab anrufen und Situation schildern. Bitten beim nächsten Termin das Thema anzusprechen.' },
                { title: 'Probezeit als Einstieg', desc: '"4 Wochen Probezeit — wenn es nicht passt, hören wir auf." Fast immer der beste Einstieg.' },
                { title: 'Passende Persönlichkeit der Betreuungskraft wählen', desc: 'Bei Primundus Telefonat vorab möglich — Kraft mit Charakter wählen der zur Persönlichkeit passt. Manchmal stimmt die Chemie von Anfang an.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen">
            <Fragen
              fragen={[
                { q: 'Was kann ich tun wenn meine Eltern Pflege verweigern?', a: 'Ursache verstehen (Angst, Scham, Verleugnung). Nicht konfrontativ vorgehen. Hausarzt einbeziehen. Klein anfangen — Probezeit vorschlagen. Autonomie betonen. Vertrauensperson einbeziehen.' },
                { q: 'Darf ich meinen Eltern Pflege aufzwingen?', a: 'Nein — Erwachsene haben das Recht auf Selbstbestimmung. Ausnahme: Bei Demenz oder fehlender Einsichtsfähigkeit kann eine gesetzliche Betreuung beantragt werden. Bei akuter Selbstgefährdung Arzt einschalten.' },
                { q: 'Wie spreche ich das Thema Pflege mit meinen Eltern an?', a: 'Im ruhigen Moment, nicht nach einem Sturz. Als Gespräch unter Gleichen: "Ich mache mir Sorgen um dich." Nicht über Pflegeheim reden — sondern über Unterstützung zuhause. Probezeit vorschlagen.' },
                { q: 'Was wenn ein Elternteil sagt "Ich will nicht in ein Heim"?', a: 'Dann genau das versichern: Eine 24h-Betreuungskraft zuhause ist das Gegenteil eines Pflegeheims. Sie ermöglicht das Leben in der eigenen Wohnung zu erhalten. Das Framing als "Alternative zum Pflegeheim" hilft oft.' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="wenn-eltern-pflege-verweigern" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
