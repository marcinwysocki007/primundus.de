import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, DunklerAbschnitt, Fragen, MehrDazu, Punkte, RatgeberKopf, RatgeberRumpf, Tabelle, Text,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('parkinson-pflege-zuhause', '25. April 2026')

const SECTIONS = [
  { id: 'herausforderungen', title: 'Besonderheiten der Parkinson-Pflege' },
  { id: 'alltag', title: 'Alltag gestalten' },
  { id: 'pflegegrad', title: 'Pflegegrad & Leistungen' },
  { id: '24h', title: 'Wann 24h-Pflege sinnvoll wird' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Parkinson Pflege zuhause — Alltag, Tipps & 24h-Pflege',
  description: 'Parkinson Pflege zuhause: Besonderheiten, Alltagstipps, welcher Pflegegrad möglich ist und wann eine 24h-Betreuungskraft die richtige Unterstützung bietet.',
  alternates: { canonical: 'https://primundus.de/parkinson-pflege-zuhause' },
  openGraph: {
    title: 'Parkinson Pflege zuhause | Primundus',
    description: 'Parkinson-Pflege zuhause: Alltagstipps, Pflegegrade und wie 24h-Pflege hilft.',
    url: 'https://primundus.de/parkinson-pflege-zuhause',
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
    headline: 'Parkinson Pflege zuhause — Alltag, Pflegegrad & 24h-Pflege',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/parkinson-pflege-zuhause',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Krankheiten', item: 'https://primundus.de/krankheiten' },
      { '@type': 'ListItem', position: 3, name: 'Parkinson Pflege zuhause', item: 'https://primundus.de/parkinson-pflege-zuhause' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was sind die besonderen Herausforderungen der Parkinson-Pflege?', acceptedAnswer: { '@type': 'Answer', text: 'Parkinson hat einen schwankenden Tagesverlauf: Morgens nach dem Aufwachen und am späten Nachmittag ("Off-Phasen") sind Betroffene steifer und langsamer — kurz nach der Medikation ("On-Phase") funktioniert vieles wieder. Dieser Rhythmus muss in der Pflege konsequent berücksichtigt werden.' } },
      { '@type': 'Question', name: 'Welchen Pflegegrad hat man bei Parkinson?', acceptedAnswer: { '@type': 'Answer', text: 'Je nach Stadium PG 2 bis 5. Frühes Stadium: PG 2. Mittleres Stadium mit Sturzgefahr und Alltagshilfe: PG 3. Fortgeschrittenes Stadium mit vollständiger Pflegebedürftigkeit: PG 4–5.' } },
      { '@type': 'Question', name: 'Kann man mit Parkinson zuhause bleiben?', acceptedAnswer: { '@type': 'Answer', text: 'In den meisten Stadien ja — eine 24h-Betreuungskraft, die den Medikationsrhythmus kennt und auf On- und Off-Phasen reagieren kann, ermöglicht ein sicheres Leben im eigenen Zuhause.' } },
    ],
  },
]

export default function ParkinsonPflegeZuhause() {
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
            { label: "Krankheiten", href: "/krankheiten" },
            { label: "Parkinson Pflege zuhause" },
          ]}
          augenbraue="Ratgeber Parkinson"
          titel="Parkinson Pflege zuhause — Alltag, Tipps & 24h-Pflege"
          einleitung="Parkinson-Pflege zuhause ist in den meisten Stadien möglich — aber sie erfordert Wissen über den schwankenden Tagesverlauf der Erkrankung. Eine Betreuungskraft die On- und Off-Phasen kennt und den Medikationsrhythmus versteht, macht den entscheidenden Unterschied."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="7 Min."
          blick={[
                'Zuhause bleiben in den meisten Parkinson-Stadien möglich',
                'Tagesverlauf schwankt: On-Phasen (gut beweglich) und Off-Phasen (steif, langsam)',
                'Sturzprävention ist entscheidend — 24h-Präsenz schützt',
                'Medikamenten-Timing kritisch — Betreuungskraft muss das kennen',
                'Pflegegrad 2–5 je nach Stadium — frühzeitig beantragen',
                'Physio- und Ergotherapie zuhause fortsetzen',
              ]}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="herausforderungen" titel="Besonderheiten der Parkinson-Pflege">
            <Text>
              Parkinson ist eine chronisch fortschreitende Erkrankung des Nervensystems. Das zentrale Merkmal das Pflege besonders herausfordernd macht: der schwankende Tagesverlauf.
            </Text>
            <Punkte
              punkte={[
                { title: 'On-Phasen und Off-Phasen', desc: 'Kurz nach der Medikamenteneinnahme funktioniert die Bewegung oft gut (On-Phase). Gegen Ende der Wirkdauer — morgens nach dem Aufwachen, nachmittags — wird Bewegung sehr schwer (Off-Phase). Pflege muss auf diesen Rhythmus abgestimmt sein.' },
                { title: 'Sturzgefahr', desc: 'Gangunsicherheit, Einfrieren (Freezing), Gleichgewichtsstörungen machen Stürze zur größten akuten Gefahr. Eine ständig präsente Betreuungsperson reduziert das Risiko massiv.' },
                { title: 'Medikamenten-Timing', desc: 'Die Einnahme von L-Dopa muss präzise getaktet werden — zu früh, zu spät oder gemeinsam mit Protein kann die Wirkung erheblich beeinflussen. Die Betreuungskraft muss das verstehen.' },
                { title: 'Schluckstörungen im Spätstadium', desc: 'Dysphagie tritt im fortgeschrittenen Stadium auf — Ernährung muss angepasst werden, Aspirationspneumonie ist ein ernstes Risiko.' },
                { title: 'Kognition und Demenz', desc: 'Bis zu 80 % der Parkinson-Patienten entwickeln im Verlauf kognitive Einschränkungen. Im Spätstadium können Halluzinationen und Demenz hinzukommen.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="alltag" titel="Alltag mit Parkinson gestalten — praktische Tipps">
            <Punkte
              punkte={[
                { title: 'Pflege in On-Phasen planen', desc: 'Körperpflege, Essen und Bewegungsübungen wenn möglich in On-Phasen legen — kurz nach Medikamenteneinnahme wenn die Motorik am besten ist.' },
                { title: 'Sturzprävention im Haushalt', desc: 'Stolperfallen beseitigen, Haltegriffe im Bad, rutschfeste Matten, freie Wege ohne Hindernisse. Rollator oder Gehstock bereithalten.' },
                { title: 'Kommunikation anpassen', desc: 'Sprechen kann bei Parkinson leiser und undeutlicher werden. Geduld, Rückfragen, schriftliche Alternativen anbieten.' },
                { title: 'Bewegung fördern', desc: 'Tägliche Physiotherapie-Übungen — idealerweise angeleitet. Tanzen und Rhythmus helfen vielen Menschen mit Parkinson. Spaziergänge wenn möglich.' },
                { title: 'Ernährung anpassen', desc: 'Proteinreiche Mahlzeiten zeitlich von L-Dopa-Einnahme trennen (min. 30 Min). Bei Schluckproblemen angepasste Konsistenz. Ausreichend Flüssigkeit.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="pflegegrad" titel="Pflegegrad bei Parkinson & Kassenzuschüsse 2026">
            <Text>
              Parkinson führt je nach Stadium zu unterschiedlichen Pflegegraden. Den Antrag frühzeitig stellen — auch wenn noch viel selbstständig möglich ist, sind die Einschränkungen real und sollten anerkannt werden.
            </Text>
            <Tabelle
              titel="Typische Pflegegrade bei Parkinson"
              kopf={['Stadium', 'Typischer PG', 'Pflegegeld']}
              zeilen={[
                ['Frühes Stadium (Tremor, leichte Einschränkungen)', 'PG 2', '347 €/Monat'],
                ['Mittleres Stadium (Sturzgefahr, Alltagshilfe)', 'PG 3', '599 €/Monat'],
                ['Fortgeschrittenes Stadium (umfangreiche Hilfe)', 'PG 4', '800 €/Monat'],
                ['Spätstadium + kognitive Einschränkungen', 'PG 4–5', '800–990 €/Monat'],
              ]}
              betont={2}
            />
            <MehrDazu
              label="Pflegegrad beantragen:"
              links={[{ href: "/pflegegrad-beantragen", text: "Schritt für Schritt Anleitung" }, { href: "/pflegegrad-bei-parkinson", text: "Pflegegrad bei Parkinson — Details" }]}
            />
          </Abschnitt>

          <DunklerAbschnitt
            id="24h"
            titel="Wann wird 24h-Pflege bei Parkinson sinnvoll?"
            einleitung="Eine 24h-Betreuungskraft ist bei Parkinson spätestens dann sinnvoll wenn Stürze, Off-Phasen oder nächtliche Beschwerden ein Sicherheitsrisiko darstellen — oder wenn Angehörige nicht täglich präsent sein können."
            punkte={[
              { title: 'Sturzgefahr rund um die Uhr', desc: 'Gangunsicherheit und Freezing können jederzeit auftreten — auch nachts. Eine ständig anwesende Kraft gibt Sicherheit und reagiert sofort.' },
              { title: 'Medikamenten-Management', desc: 'Die Betreuungskraft kennt das Medikationsschema, gibt zur richtigen Zeit, beobachtet die Wirkung und informiert bei Auffälligkeiten den behandelnden Arzt.' },
              { title: 'Tagesrhythmus kennen und einhalten', desc: 'Eine feste Kraft die den individuellen On-Off-Rhythmus des Pflegebedürftigen kennt, bietet bessere Pflege als wechselndes Personal.' },
            ]}
          >
            <MehrDazu
              label="Kosten & Zuschüsse:"
              links={[{ href: "/kosten", text: "Was kostet 24h-Pflege 2026?" }]}
            />
          </DunklerAbschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen zur Parkinson-Pflege">
            <Fragen
              fragen={[
                { q: 'Was sind die besonderen Herausforderungen der Parkinson-Pflege?', a: 'Der schwankende Tagesverlauf mit On- und Off-Phasen, hohes Sturzrisiko, kritisches Medikamenten-Timing und im Spätstadium kognitive Einschränkungen. Pflege muss auf den individuellen Rhythmus abgestimmt sein.' },
                { q: 'Welchen Pflegegrad hat man bei Parkinson?', a: 'Je nach Stadium PG 2–5. Frühes Stadium: PG 2 (347 €/Monat). Mittleres Stadium: PG 3 (599 €/Monat). Fortgeschrittenes Stadium: PG 4–5 (800–990 €/Monat).' },
                { q: 'Kann man mit Parkinson zuhause bleiben?', a: 'In den meisten Stadien ja — eine 24h-Betreuungskraft die den Tagesrhythmus kennt und auf On- und Off-Phasen reagieren kann, ermöglicht sicheres Leben im eigenen Zuhause.' },
                { q: 'Was muss eine Pflegekraft über Parkinson wissen?', a: 'On- und Off-Phasen kennen und einplanen. Medikamenten-Timing exakt einhalten. Sturzprävention konsequent umsetzen. Bei Schluckproblemen Ernährung anpassen. Bewegungsförderung täglich einbauen.' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="parkinson-pflege-zuhause" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
