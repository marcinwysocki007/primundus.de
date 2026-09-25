import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, Fragen, Liste, MehrDazu, Punkte, RatgeberKopf, RatgeberRumpf, Schritte, StandardUnterzeile, Text,
} from '@/components/vorlage/Ratgeber'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

// Kernseite in der Seitenvorlage (17.09.2026). Ablauf wie im Kostenrechner (seit 19.09. 10:32 wieder: Fragen, Kontaktdaten,
// dann Preis und Pflegekräfte im Portal; „Preis zuerst" ist aus), Plaketten „Bewerbungen am selben Werktag" und „Anreise in 3 Tagen möglich". Wechsel und Ersatz nach dem
// Mustervertrag (§ 1: Ersatz schnellstmöglich, in der Regel innerhalb von 3 Tagen; § 4: Krankheitstage ohne Honorar,
// Reisekostenpauschale 125 € je Fahrt). Der alte Zeitplan „Tag 1–2 / Tag 2–3" war nicht belegt und ist raus.
// Martin 17.09.: Abholung ist normalerweise nicht nötig (Kraft wird zur Adresse gebracht); Wechseltag für beide Kräfte
// berechnet ist normal, weil An- und Abreisetag Arbeitstage sind; Wechsel alle 6–8 Wochen stimmt.

const AKTUALISIERT = aktualisiertAm('ablauf', '17. September 2026')
const RECHNER_SEITE = 'https://kostenrechner.primundus.de/?start=1&src=apex-ablauf'
const MUSTERVERTRAG = 'https://kundenportal.primundus.de/primundus-mustervertrag.pdf'

const SECTIONS = [
  { id: 'schritte', title: 'Schritt für Schritt' },
  { id: 'auswahl', title: 'Betreuungskraft auswählen' },
  { id: 'wechsel', title: 'Wechsel und Ersatz' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Ablauf der 24h-Pflege mit Primundus — von Anfrage bis Start',
  description: 'So läuft die 24h-Pflege mit Primundus ab: Preis und Pflegekräfte sofort sehen, Bewerbungen erhalten, selbst auswählen, dann der Vertrag. Anreise in 3 Tagen möglich.',
  alternates: { canonical: 'https://primundus.de/ablauf' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Ablauf der 24h-Pflege mit Primundus | Primundus',
    description: 'Von der Anfrage bis zur Betreuungskraft zuhause: der vollständige Ablauf erklärt.',
    url: 'https://primundus.de/ablauf',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const FRAGEN = [
  { q: 'Wie schnell kann eine 24h-Pflegekraft starten?', a: 'Eine Anreise ist in 3 Tagen möglich. Wann genau, richtet sich nach Ihrem Wunschtermin und danach, wann Sie sich für eine Betreuungskraft entscheiden. Wenn es dringend ist, rufen Sie an: 089 200 000 830.' },
  { q: 'Was kostet das Beratungsgespräch?', a: 'Nichts. Beratung, Angebot und die Profile der Pflegekräfte sind kostenlos und unverbindlich. Einen Vertrag gibt es erst, wenn Sie eine Betreuungskraft ausgewählt haben.' },
  { q: 'Muss ich einen Vertrag mit langer Laufzeit abschließen?', a: 'Nein. Der Vertrag hat keine Mindestlaufzeit und ist täglich kündbar, per Brief oder E-Mail. Abgerechnet wird taggenau.' },
  { q: 'Werde ich Arbeitgeber der Betreuungskraft?', a: 'Nein. Die Betreuungskraft ist bei Primundus angestellt und kommt mit A1-Bescheinigung. Sie schließen mit uns einen Betreuungsvertrag.' },
  { q: 'Was passiert, wenn die Betreuungskraft krank wird?', a: 'Wir stellen schnellstmöglich eine Ersatzkraft, laut Vertrag in der Regel innerhalb von 3 Tagen. Für die Tage, an denen die Betreuungskraft krank ist, berechnen wir nichts. Der Wechsel kostet nichts extra, es fallen nur die An- und Abreisekosten an.' },
]

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Ablauf der 24h-Pflege mit Primundus — von Angebot bis Start',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/ablauf',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Ablauf', item: 'https://primundus.de/ablauf' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FRAGEN.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  },
]

const LINK = 'text-pm-taupe-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors'

export default function Ablauf() {
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
            { label: 'Startseite', href: '/' },
            { label: 'Ablauf' },
          ]}
          augenbraue="So funktioniert es"
          titel="Ablauf der 24h-Pflege mit Primundus — von Angebot bis Start"
          // Knopf direkt unter die Überschrift mit der Unterzeile der Startseite (25.09.2026, Martin: „nehme all deine Vorschläge“):
          // Beim Erstbesuch lag er am iPhone 13 bei 561–621 px unter der Cookie-Leiste (ab 553 px). Die alte Einleitung
          // wiederholte danach Preis in 2 Minuten und Anreise in 3 Tagen; Zwischenüberschrift und Einleitung nach zwei
          // OpenAI-Runden (Doppelungen mit Unterzeile, Punkten und „Auf einen Blick“ raus).
          knopfOben
          unterzeile={<StandardUnterzeile />}
          einleitungTitel="Sie sehen vorab, wer kommt"
          einleitung="Das Profil der Betreuungskraft zeigt Foto, Deutschkenntnisse und Erfahrung. Sie entscheiden, wer zu Ihnen passt."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="4 Min."
          knopf={{ href: RECHNER_SEITE, text: 'Preis & Pflegekräfte ansehen' }}
          blick={[
            'Preis und passende Pflegekräfte sofort, in unter 2 Minuten',
            'Bewerbungen am selben Werktag',
            'Sie wählen selbst aus, erst dann kommt der Vertrag',
            'Anreise in 3 Tagen möglich',
            'Täglich kündbar, keine Vermittlungsgebühr',
          ]}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="schritte" titel="Schritt für Schritt — der vollständige Ablauf">
            <Schritte
              schritte={[
                {
                  title: 'Sofort Angebot und Pflegekräfte einsehen',
                  desc: 'Sie machen wenige preisrelevante Angaben und hinterlassen Ihre Kontaktdaten. Sofort danach sehen Sie Ihr Angebot samt Zuschüssen und Steuervorteilen sowie die passenden Pflegekräfte. Eine Kopie kommt zusätzlich per E-Mail.',
                  tag: 'Unter 2 Minuten',
                  tagTon: 'gruen',
                },
                {
                  title: 'Profil vervollständigen — Bewerbungen erhalten',
                  desc: 'Passt das für Sie, ergänzen Sie die Angaben zu Ihrem Angehörigen. Dann bewerben sich Pflegekräfte bei Ihnen — mit Foto, Erfahrung und Verfügbarkeit. Zusätzlich können Sie Pflegekräfte aus den gezeigten Profilen gezielt einladen. Wer sich beworben hat, sehen Sie jederzeit im Kundenportal.',
                  tag: 'Bewerbungen am selben Werktag',
                  tagTon: 'gruen',
                },
                {
                  title: 'Aussuchen — erst dann der Vertrag',
                  desc: <>Sie entscheiden, wer es wird. Erst nach Ihrer Auswahl kommt der Betreuungsvertrag — den <a href={MUSTERVERTRAG} className={LINK}>Mustervertrag</a> können Sie jederzeit vorher lesen. Der Vertrag hat keine Mindestlaufzeit und ist täglich kündbar.</>,
                  tag: 'Keine Vermittlungsgebühr',
                  tagTon: 'gruen',
                },
                {
                  title: 'Anreise der Betreuungskraft',
                  desc: 'Die Betreuungskraft reist zum vereinbarten Termin an. Wir organisieren die Fahrt, in der Regel wird sie direkt zu Ihnen nach Hause gebracht. An- und Abreise kosten 125 € je Strecke.',
                  tag: 'Anreise in 3 Tagen möglich',
                  tagTon: 'gruen',
                },
                {
                  title: 'Die ersten Tage',
                  desc: 'Die Betreuungskraft lernt Ihren Angehörigen, den Haushalt und die Abläufe kennen. Bei Fragen erreichen Sie Ihre Ansprechpartnerin täglich von 8 bis 20 Uhr.',
                },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="auswahl" titel="Betreuungskraft auswählen — worauf Sie achten können">
            <Text>
              Sie entscheiden, wer zu Ihrem Angehörigen kommt. In den Profilen sehen Sie Foto, Erfahrung, Deutschkenntnisse
              und Verfügbarkeit der Betreuungskräfte. Diese Wünsche geben Sie schon im Kostenrechner an, weil sie den Preis
              beeinflussen:
            </Text>
            <Liste
              punkte={[
                'Deutschkenntnisse der Betreuungskraft',
                'Führerschein, zum Beispiel für Arzttermine auf dem Land',
                'Betreuerin oder Betreuer',
                'Hilfe in der Nacht: gelegentlich, jede Nacht einmal oder mehrmals',
              ]}
            />
          </Abschnitt>

          <Abschnitt id="wechsel" titel="Wechsel und Ersatz">
            <Text>
              Betreuungskräfte wechseln sich in der Regel alle 6–8 Wochen ab. Für den Wechsel sehen Sie wieder Profile
              und Bewerbungen und wählen selbst aus, wie beim ersten Mal.
            </Text>
            <Punkte
              punkte={[
                { title: 'Die Betreuungskraft wird krank', desc: 'Wir stellen schnellstmöglich eine Ersatzkraft, laut Vertrag in der Regel innerhalb von 3 Tagen. Für die Tage, an denen die Betreuungskraft krank ist, berechnen wir nichts.' },
                { title: 'Die Betreuungskraft passt nicht', desc: 'Sagen Sie uns, was nicht passt. Wir organisieren einen Wechsel, und Sie wählen wieder aus den Bewerbungen aus.' },
                { title: 'Die Betreuungskraft passt sehr gut', desc: 'Sagen Sie es uns. Wir berücksichtigen das, wenn wir die nächsten Einsätze planen.' },
                { title: 'Kosten beim Wechsel', desc: 'An- und Abreisetag sind Arbeitstage. Am Wechseltag berechnen wir deshalb den Tagessatz für beide Betreuungskräfte, dazu An- und Abreise mit 125 € je Strecke.' },
              ]}
            />
            <MehrDazu label="Alle Kosten im Überblick:" links={[{ href: '/kosten', text: 'Was kostet 24-Stunden-Pflege? Kosten & Zuschüsse 2026' }]} />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
