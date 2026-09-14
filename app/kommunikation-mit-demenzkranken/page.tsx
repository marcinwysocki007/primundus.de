import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, DunklerAbschnitt, Fragen, Gegenueber, MehrDazu, Punkte, RatgeberKopf, RatgeberRumpf,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('kommunikation-mit-demenzkranken', '25. April 2026')

const SECTIONS = [
  { id: 'grundprinzipien', title: 'Die 5 Grundprinzipien' },
  { id: 'konkret', title: 'Was konkret helfen' },
  { id: 'schwierig', title: 'Schwierige Situationen meistern' },
  { id: 'fuer-betreuungskraefte', title: 'Tipps für Betreuungskräfte' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Kommunikation mit Demenzkranken — was hilft & was schadet',
  description: 'Kommunikation mit Demenzkranken: 5 Grundprinzipien, konkrete Gesprächstipps und wie man schwierige Situationen (Aggression, Verweigerung, Weinen) meistert.',
  alternates: { canonical: 'https://primundus.de/kommunikation-mit-demenzkranken' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Kommunikation mit Demenzkranken | Primundus',
    description: 'Was bei der Kommunikation mit Demenzkranken hilft und was schadet — 5 Grundprinzipien und konkrete Tipps.',
    url: 'https://primundus.de/kommunikation-mit-demenzkranken',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Kommunikation mit Demenzkranken — was hilft und was schadet',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/kommunikation-mit-demenzkranken',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Alltag & Angehörige', item: 'https://primundus.de/alltag' },
      { '@type': 'ListItem', position: 3, name: 'Kommunikation mit Demenzkranken', item: 'https://primundus.de/kommunikation-mit-demenzkranken' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Wie kommuniziert man mit Demenzkranken?', acceptedAnswer: { '@type': 'Answer', text: 'Die wichtigsten Prinzipien: Kurze, einfache Sätze. Augenkontakt herstellen. Nicht korrigieren oder widersprechen. In die Realität des Betroffenen einsteigen. Emotionen ernst nehmen auch wenn der Inhalt falsch ist. Berührung als Kommunikationsmittel nutzen.' } },
      { '@type': 'Question', name: 'Was sollte man bei Demenzkranken nicht sagen?', acceptedAnswer: { '@type': 'Answer', text: 'Niemals sagen: "Das hast du doch gerade erst gefragt." "Das weißt du doch." "Papa ist schon lange tot." Korrekturen und Konfrontationen mit der Realität führen zu Distress ohne therapeutischen Nutzen.' } },
      { '@type': 'Question', name: 'Was tun wenn Demenzkranke aggressiv werden?', acceptedAnswer: { '@type': 'Answer', text: 'Ruhe bewahren, nicht gegenhalten. Auf Augenhöhe gehen, sanfte Berührung anbieten. Thema wechseln statt Konflikt eskalieren. Ursache suchen: Schmerzen, Hunger, Toilettenbedarf, Überreizung. Sicheren Abstand schaffen wenn nötig.' } },
    ],
  },
]

export default function KommunikationMitDemenzkranken() {
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
            { label: "Kommunikation mit Demenzkranken" },
          ]}
          augenbraue="Ratgeber Demenz"
          titel="Kommunikation mit Demenzkranken — was hilft & was schadet"
          einleitung="Mit einem demenzkranken Menschen zu kommunizieren bedeutet: In seine Welt einsteigen statt ihn in unsere zu holen. Korrekturen, Konfrontationen mit der Realität und Ungeduld führen zu Distress ohne jeden Nutzen. Fünf Grundprinzipien verändern die tägliche Kommunikation grundlegend — und erleichtern den Alltag für alle Beteiligten."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="7 Min."
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="grundprinzipien" titel="Die 5 Grundprinzipien">
            <Punkte
              punkte={[
                {
                  title: 'In die Welt des Betroffenen einsteigen',
                  desc: (
                    <>
                      <p>{'Demenzkranke leben in ihrer eigenen Realität — einer die von Erinnerungen aus früheren Jahrzehnten geprägt sein kann. Statt zu korrigieren: mitgehen. Wenn Großvater fragt ob er zur Arbeit muss, ist es besser zu sagen "Die haben angerufen, heute frei" als "Du bist seit 30 Jahren in Rente".'}</p>
                      <div className="mt-4">
                        <Gegenueber
                          seiten={[
                            { titel: 'Nicht:', ton: 'koralle', text: '"Das stimmt nicht, Papa ist schon seit 10 Jahren tot."' },
                            { titel: 'Besser:', ton: 'gruen', text: '"Er ist nicht hier gerade. Magst du mir von ihm erzählen?"' },
                          ]}
                        />
                      </div>
                    </>
                  ),
                },
                {
                  title: 'Kurze, einfache Sätze',
                  desc: 'Maximal eine Information pro Satz. Langsam sprechen, Pausen lassen. Keine rhetorischen Fragen, keine Mehrfachanweisungen. "Komm, wir waschen jetzt deine Hände" statt "Meinst du nicht auch, dass wir jetzt vielleicht die Hände waschen sollten bevor wir essen?"',
                },
                {
                  title: 'Emotionen ernst nehmen',
                  desc: 'Das Gefühl ist immer real — auch wenn der Inhalt falsch ist. Wenn jemand weint weil er glaubt sein Kind ist krank, ist der Schmerz echt. Nicht den Irrtum korrigieren — den Schmerz anerkennen. "Ich sehe dass du dir Sorgen machst. Ich bin bei dir."',
                },
                {
                  title: 'Augenkontakt und Körperhöhe',
                  desc: 'Immer auf Augenhöhe kommunizieren — hinknien oder hinsetzen wenn die Person sitzt. Augenkontakt herstellen bevor man spricht. Berührung (Hand halten, Schulter berühren) kann mehr sagen als Worte.',
                },
                {
                  title: 'Nie korrigieren, nie streiten',
                  desc: (
                    <>
                      <p>{'Eine Korrektur bewirkt nur Distress — keine Einsicht. Das Kurzgedächtnis speichert die Korrektur nicht. Was bleibt ist das negative Gefühl. Kein "Das weißt du doch", kein "Das hast du gerade erst gefragt".'}</p>
                      <div className="mt-4">
                        <Gegenueber
                          seiten={[
                            { titel: 'Nicht:', ton: 'koralle', text: '"Das habe ich dir doch gerade erst erklärt!"' },
                            { titel: 'Besser:', ton: 'gruen', text: 'Ruhig nochmals antworten — gern zum zehnten Mal.' },
                          ]}
                        />
                      </div>
                    </>
                  ),
                },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="konkret" titel="Was konkret hilft — praktische Tipps">
            <Punkte
              punkte={[
                { title: 'Namen verwenden', desc: 'Den Vornamen der Person am Anfang des Gesprächs nennen: "Maria, magst du jetzt frühstücken?" Das holt die Person ab und gibt Orientierung.' },
                { title: 'Fragen statt Befehle', desc: '"Magst du jetzt..." wirkt besser als "Du musst jetzt..." Wahlmöglichkeiten geben: "Möchtest du das rote oder das blaue Hemd?" — nie mehr als zwei Optionen.' },
                { title: 'Musik als Brücke', desc: 'Musik aus der Jugend (1950er–70er) ist oft noch tief verankert und ermöglicht Kommunikation wenn Worte nicht mehr funktionieren. Gemeinsames Summen oder Mitsingen schafft Verbindung.' },
                { title: 'Berührung bewusst einsetzen', desc: 'Handhalten, Schulter berühren, Streicheln — Körperkontakt kommuniziert Sicherheit und Wärme wenn Sprache schwieriger wird. Immer ankündigen: "Ich nehme jetzt deine Hand."' },
                { title: 'Gesicht und Ton wichtiger als Worte', desc: 'Im fortgeschrittenen Stadium versteht die Person vielleicht nicht mehr den Inhalt — aber Mimik, Tonfall und Körpersprache bleiben verständlich. Ruhig und warm sprechen.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="schwierig" titel="Schwierige Situationen meistern">
            <Punkte
              punkte={[
                { title: 'Aggression und Wutausbrüche', desc: 'Nicht gegenhalten — das eskaliert. Ruhe bewahren, Abstand schaffen, sanft ansprechen. Ursache suchen: Schmerzen? Hunger? Toilette? Überreizung durch Lärm? Thema wechseln: "Weißt du noch, wie du früher..." Sicheren Abstand wahren bis die Situation sich beruhigt.' },
                { title: 'Verweigerung von Pflege', desc: 'Nicht erzwingen — das traumatisiert. Kurze Pause machen und es später nochmals versuchen. Andere Betreuungsperson versuchen lassen. Den Sinn der Handlung verständlich machen: "Wir waschen die Hände damit sie nicht kalt sind." Positiv einleiten: Lieblingslied spielen vor dem Waschen.' },
                { title: 'Wiederholte Fragen', desc: 'Geduldig dieselbe Antwort geben — auch zum zehnten Mal. Die Frage ist ein Zeichen von Unsicherheit, kein böser Wille. Ursache der Unsicherheit ansprechen: "Ich bin bei dir. Alles ist in Ordnung." Manchmal hilft eine schriftliche Notiz an gut sichtbarer Stelle.' },
                { title: 'Weinen und Traurigkeit', desc: 'Nicht ablenken oder aufheitern — das Gefühl anerkennen. "Ich sehe dass du traurig bist. Das ist in Ordnung." Körperkontakt anbieten. Nicht nach dem Grund fragen — einfach da sein.' },
              ]}
            />
          </Abschnitt>

          <DunklerAbschnitt
            id="fuer-betreuungskraefte"
            titel="Besondere Tipps für 24h-Betreuungskräfte"
            einleitung="Eine 24h-Betreuungskraft verbringt den ganzen Tag mit dem demenzkranken Menschen — das ist besonders intensiv. Einige Dinge helfen besonders:"
            punkte={[
              { title: 'Biografiearbeit am Anfang', desc: 'In den ersten Tagen: Familie erzählt über Vorlieben, Berufe, wichtige Lebenserinnerungen. Diese Informationen sind Gold wert für Gespräche und Beschäftigung.' },
              { title: 'Routine schafft Sicherheit', desc: 'Immer dieselbe Reihenfolge beim Aufstehen, Waschen, Frühstücken. Vorhersehbarkeit reduziert Angst und Aggressionen erheblich.' },
              { title: 'Pausen einplanen', desc: '24h Betreuung ist emotional intensiv. Wer sich nicht erholt, verliert die Geduld. Strukturierte Ruhephasen und regelmäßiger Kraftwechsel schützt vor Burnout.' },
              { title: 'Sprachbarriere', desc: 'Bei Betreuungskräften aus dem Ausland: Einfache Sprache, viele Gesten, Mimik und Berührung sind internationale Kommunikation — funktionieren oft besser als kompliziertes Deutsch.' },
            ]}
          >
            <MehrDazu
              label="Mehr:"
              links={[{ href: "/demenz-pflege-zuhause", text: "Demenzpflege zuhause" }, { href: "/tagesstruktur-demenz", text: "Tagesstruktur bei Demenz" }, { href: "/alzheimer-betreuung-zuhause", text: "Alzheimer zuhause betreuen" }]}
            />
          </DunklerAbschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen">
            <Fragen
              fragen={[
                { q: 'Wie kommuniziert man mit Demenzkranken?', a: 'Kurze einfache Sätze. Augenkontakt. Nicht korrigieren. In ihre Realität einsteigen. Emotionen ernst nehmen. Berührung nutzen. Nie streiten oder auf Korrektheit bestehen.' },
                { q: 'Was sollte man bei Demenzkranken nicht sagen?', a: '"Das hast du gerade erst gefragt." "Das weißt du doch." "Papa ist schon lange tot." Korrektionen und Realitätskonfrontationen führen nur zu Distress ohne Nutzen.' },
                { q: 'Was tun wenn Demenzkranke aggressiv werden?', a: 'Ruhe bewahren, nicht gegenhalten. Sicheren Abstand schaffen. Ursache suchen (Schmerzen, Hunger, Überforderung). Thema wechseln. Warten bis die Situation sich beruhigt.' },
                { q: 'Wie reagiert man auf ständig wiederholte Fragen?', a: 'Geduldig dieselbe Antwort geben — auch zum zehnten Mal. Die Frage kommt aus Unsicherheit, nicht böser Absicht. Manchmal hilft eine schriftliche Notiz an sichtbarer Stelle.' },
                { q: 'Kann eine Betreuungskraft die Deutsch nicht fließend spricht mit Demenzkranken kommunizieren?', a: 'Ja — im fortgeschrittenen Stadium ist Mimik, Tonfall und Berührung oft wichtiger als der Wortinhalt. Einfache, ruhige Sprache plus viel Körperkontakt funktionieren sprachübergreifend sehr gut.' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="kommunikation-mit-demenzkranken" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
