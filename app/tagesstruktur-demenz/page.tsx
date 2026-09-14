import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, DunklerAbschnitt, Fragen, Gruppen, HakenListe, Kasten, MehrDazu, RatgeberKopf, RatgeberRumpf, Tabelle, Text,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('tagesstruktur-demenz', '25. April 2026')

const SECTIONS = [
  { id: 'warum', title: 'Warum Tagesstruktur so wichtig ist' },
  { id: 'tagesplan', title: 'Idealer Tagesplan — Beispiel' },
  { id: 'aktivitaeten', title: 'Sinnvolle Aktivitäten je Stadium' },
  { id: 'schlafroutine', title: 'Schlaf & Nachtunruhe' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Tagesstruktur bei Demenz — Tipps & Tagesplan | Primundus',
  description: 'Tagesstruktur bei Demenz: Warum feste Routinen entscheidend sind, ein konkreter Tagesplan mit sinnvollen Aktivitäten und wie 24h-Betreuung den Alltag.',
  alternates: { canonical: 'https://primundus.de/tagesstruktur-demenz' },
  openGraph: {
    title: 'Tagesstruktur bei Demenz | Primundus',
    description: 'Feste Routinen und Tagesstruktur bei Demenz: Warum sie wirken und wie man sie umsetzt.',
    url: 'https://primundus.de/tagesstruktur-demenz',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
    images: [{ url: '/images/primundus_logo_header.webp' }],
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Tagesstruktur bei Demenz — Tagesplan, Aktivitäten & Tipps',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/tagesstruktur-demenz',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Alltag & Angehörige', item: 'https://primundus.de/alltag' },
      { '@type': 'ListItem', position: 3, name: 'Tagesstruktur bei Demenz', item: 'https://primundus.de/tagesstruktur-demenz' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Warum ist Tagesstruktur bei Demenz so wichtig?', acceptedAnswer: { '@type': 'Answer', text: 'Bei Demenz ist das Kurzzeitgedächtnis beeinträchtigt, aber das prozedurale Gedächtnis (Routinen, Abläufe) bleibt lange intakt. Feste Strukturen ermöglichen Orientierung ohne Gedächtnis — der Körper "weiß" was als nächstes kommt. Das reduziert Angst, Unruhe und Verhaltensauffälligkeiten erheblich.' } },
      { '@type': 'Question', name: 'Wie viel Stimulation ist bei Demenz gut?', acceptedAnswer: { '@type': 'Answer', text: 'Weniger ist mehr. Überstimulation durch laute Geräusche, viele Menschen oder zu viele Aufgaben gleichzeitig führt zu Angst und Unruhe. Ruhige Atmosphäre, eine Aktivität nach der anderen, ausreichend Ruhezeiten. Nachmittags sind viele Demenzkranke unruhiger (Sundowning) — dann besonders auf ruhige Umgebung achten.' } },
    ],
  },
]

export default function TagesstrukturDemenz() {
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
            { label: "Tagesstruktur bei Demenz" },
          ]}
          augenbraue="Ratgeber Demenz"
          titel="Tagesstruktur bei Demenz — Tagesplan, Aktivitäten & Tipps"
          einleitung="Feste Tagesstrukturen sind das wirksamste nicht-medikamentöse Mittel bei Demenz. Sie reduzieren Angst, Unruhe und Verhaltensauffälligkeiten erheblich — weil sie Orientierung geben ohne Gedächtnis zu brauchen. Der Körper erinnert sich auch wenn der Kopf es nicht mehr kann."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="6 Min."
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="warum" titel="Warum Tagesstruktur bei Demenz so wichtig ist">
            <Text>
              Das Kurzzeitgedächtnis ist bei Demenz früh beeinträchtigt — aber das prozedurale Gedächtnis bleibt lange intakt. Dieses Gedächtnissystem speichert Routinen und Abläufe: Wie man Kaffee kocht, wie der Tagesablauf war, was nach dem Frühstück kommt. Feste Strukturen nutzen genau dieses intakte System.
            </Text>
            <Text>
              Wenn jeden Morgen um 8 Uhr das Frühstück auf dem Tisch steht, jeden Nachmittag um 15 Uhr Kaffeezeit ist und jeden Abend dieselbe Einschlafroutine folgt — dann weiß der Körper was kommt. Das reduziert die Desorientierung die Angst und Unruhe auslöst.
            </Text>
            <Kasten titel="Was Tagesstruktur konkret bewirkt" ton="gruen">
              <HakenListe punkte={[
                'Reduziert Ängste und Verwirrung durch Vorhersehbarkeit',
                'Weniger Verhaltensauffälligkeiten wie Aggressionen oder Wandern',
                'Besserer Schlaf durch feste Schlaf-Wach-Zeiten',
                'Mehr positive Momente durch gezielte Aktivitäten',
                'Entlastung der Pflegeperson durch klare Abläufe',
              ]} />
            </Kasten>
          </Abschnitt>

          <Abschnitt id="tagesplan" titel="Idealer Tagesplan bei Demenz — Beispiel">
            <Text>
              Dieser Tagesplan ist ein Ausgangspunkt — er sollte an den früheren Lebensrhythmus des Betroffenen angepasst werden. Wer immer Frühaufsteher war, steht früh auf. Wer Nachtmensch war, startet langsamer.
            </Text>
            <Tabelle
              titel="Beispiel-Tagesplan bei mittlerem Demenzstadium"
              zeilen={[
                ['7:30–8:00', 'Aufwachen & Körperpflege', 'Langsam, ohne Druck, vertraute Abläufe'],
                ['8:00–8:30', 'Frühstück', 'Lieblingsessen, ruhige Atmosphäre, kein TV'],
                ['8:30–10:00', 'Ruhige Aktivität', 'Zeitung/Fotos anschauen, leichte Hausarbeit'],
                ['10:00–11:00', 'Bewegung / Spaziergang', 'Immer dieselbe Strecke wenn möglich'],
                ['11:00–12:30', 'Beschäftigung', 'Handwerk, Musik, Gespräche, Gartenarbeit'],
                ['12:30–13:00', 'Mittagessen', 'Hauptmahlzeit — Lieblingsgerichte bevorzugen'],
                ['13:00–14:30', 'Mittagsruhe', 'Schlafen oder entspannen — nicht erzwingen'],
                ['14:30–16:00', 'Aktivität', 'Einfache Spiele, Musik, Biographiearbeit'],
                ['15:30', 'Kaffeezeit', 'Festes Ritual — Kaffee/Tee mit Gebäck'],
                ['16:00–17:30', 'Ruhigere Phase', 'Sundowning-Zeit: Reize reduzieren'],
                ['17:30–18:30', 'Abendessen', 'Leichte Mahlzeit, früh genug'],
                ['18:30–20:00', 'Abendprogramm', 'Vertraute Sendungen, Musik, Gespräche'],
                ['20:00–21:00', 'Einschlafroutine', 'Immer dieselbe Abfolge: Zähneputzen, Pyjama, Bett'],
              ]}
            />
          </Abschnitt>

          <Abschnitt id="aktivitaeten" titel="Sinnvolle Aktivitäten je Stadium">
            <Gruppen
              gruppen={[
                { title: 'Frühes Stadium', punkte: ['Lesen, Kreuzworträtsel, einfache Brettspiele', 'Gartenarbeit, Handwerk, Backen', 'Gesellschaftliche Treffen, Ausflüge', 'Gedächtnisübungen, Musikinstrument spielen'] },
                { title: 'Mittleres Stadium', punkte: ['Fotos sortieren und Geschichten erzählen', 'Musik aus der Jugendzeit hören und mitsingen', 'Einfache Haushaltsaufgaben: Wäsche falten, Tisch decken', 'Spaziergänge auf vertrauten Wegen'] },
                { title: 'Schweres Stadium', punkte: ['Musik hören — auch non-verbal wirksam', 'Berührungen, Massagen, sensorische Reize', 'Vertraute Gerüche: Kaffeduft, Lieblingsparfum', 'Vorlesen bekannter Texte oder Gedichte'] },
              ]}
            />
          </Abschnitt>

          <DunklerAbschnitt
            id="schlafroutine"
            titel="Schlaf & Nachtunruhe — die größte Herausforderung"
            einleitung="Schlafstörungen und Nachtunruhe sind bei Demenz häufig — und eine der größten Belastungen für Angehörige. Das Sundowning-Phänomen (zunehmende Unruhe am Nachmittag und Abend) ist typisch für Alzheimer."
            punkte={[
              { title: 'Feste Schlafenszeit', desc: 'Jeden Abend zur gleichen Zeit das gleiche Ritual. Keine Aufregung, kein Fernsehen kurz vor dem Schlafen. Beruhigende Musik oder Vorlesen als Übergang.' },
              { title: 'Tagschlaf begrenzen', desc: 'Wenn tagsüber viel geschlafen wird, verschiebt sich der Nacht-Schlaf. Mittagsschlaf auf max. 30 Minuten begrenzen.' },
              { title: 'Licht und Aktivität tagsüber', desc: 'Tageslicht und Bewegung regulieren den Schlaf-Wach-Rhythmus. Tägliche Spaziergänge, helle Räume am Morgen.' },
              { title: 'Nächtliche Unterstützung', desc: 'Bei häufiger Nachtunruhe ist eine 24h-Kraft unverzichtbar — Angehörige die jede Nacht unterbrochen werden, erschöpfen schnell.' },
            ]}
          >
            <MehrDazu
              label="Demenz allgemein:"
              links={[{ href: "/demenz-pflege-zuhause", text: "Demenz Pflege zuhause — vollständiger Ratgeber" }, { href: "/kommunikation-mit-demenzkranken", text: "Kommunikation mit Demenzkranken" }]}
            />
          </DunklerAbschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen zur Tagesstruktur bei Demenz">
            <Fragen
              fragen={[
                { q: 'Warum ist Tagesstruktur bei Demenz so wichtig?', a: 'Das prozedurale Gedächtnis (Routinen, Abläufe) bleibt bei Demenz lange intakt. Feste Strukturen geben Orientierung ohne Kurzzeitgedächtnis — das reduziert Angst, Unruhe und Verhaltensauffälligkeiten erheblich.' },
                { q: 'Wie viel Stimulation ist bei Demenz gut?', a: 'Weniger ist mehr — Überstimulation durch Lärm, viele Menschen oder zu viele Aufgaben führt zu Angst. Ruhige Atmosphäre, eine Aktivität nach der anderen, ausreichend Ruhezeiten. Nachmittags besonders ruhig halten (Sundowning-Zeit).' },
                { q: 'Was ist Sundowning bei Demenz?', a: 'Sundowning bezeichnet die verstärkte Unruhe, Verwirrung und manchmal Aggressivität die bei vielen Demenzkranken am Nachmittag und frühen Abend auftritt. Ursache ist wahrscheinlich gestörter zirkadianer Rhythmus. Tipp: Nachmittags Reize reduzieren, ruhige Aktivitäten.' },
                { q: 'Wie geht man mit Nachtunruhe bei Demenz um?', a: 'Feste Schlafenszeit mit beruhigendem Ritual, Tagschlaf begrenzen, tagsüber Licht und Bewegung. Bei häufiger Nachtunruhe ist eine 24h-Betreuungskraft sinnvoll — Angehörige die jede Nacht unterbrochen werden, erschöpfen schnell.' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="tagesstruktur-demenz" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
