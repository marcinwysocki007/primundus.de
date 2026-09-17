import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import {
  RatgeberKopf, RatgeberRumpf, Abschnitt, DunklerAbschnitt, Text, Punkte, Tabelle, MehrDazu, Fragen,
} from '@/components/vorlage/Ratgeber'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('alzheimer-betreuung-zuhause', '25. April 2026')

const SECTIONS = [
  { id: 'verlauf', title: 'Alzheimer verstehen — Stadien & Verlauf' },
  { id: 'zuhause', title: 'Was zuhause möglich ist' },
  { id: 'alltag', title: 'Alltagsgestaltung bei Alzheimer' },
  { id: 'pflege24h', title: 'Wann 24h-Pflege die richtige Lösung ist' },
  { id: 'pflegegrad', title: 'Pflegegrad & Kassenzuschüsse' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Alzheimer Betreuung zuhause — was möglich ist & wie 24h-Pflege hilft | Primundus',
  description: 'Alzheimer Betreuung zuhause: Was in welchem Stadium möglich ist, wie der Alltag gestaltet wird und wann eine 24h-Betreuungskraft die richtige Unterstützung.',
  alternates: { canonical: 'https://primundus.de/alzheimer-betreuung-zuhause' },
  openGraph: {
    title: 'Alzheimer Betreuung zuhause | Primundus',
    description: 'Alzheimer zuhause betreuen: Was in welchem Stadium möglich ist und wie 24h-Pflege hilft.',
    url: 'https://primundus.de/alzheimer-betreuung-zuhause',
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
    headline: 'Alzheimer Betreuung zuhause — Stadien, Alltag & 24h-Pflege',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/alzheimer-betreuung-zuhause',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Krankheiten', item: 'https://primundus.de/krankheiten' },
      { '@type': 'ListItem', position: 3, name: 'Alzheimer Betreuung zuhause', item: 'https://primundus.de/alzheimer-betreuung-zuhause' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Kann man Alzheimer-Patienten zuhause betreuen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja — in allen Stadien ist häusliche Betreuung grundsätzlich möglich. Die vertraute Umgebung gibt Orientierung und Halt und erhält Würde. Ab dem mittleren Stadium ist eine 24h-Betreuungskraft empfehlenswert, um Sicherheit und Tagesstruktur rund um die Uhr zu gewährleisten.' } },
      { '@type': 'Question', name: 'Welchen Pflegegrad hat man bei Alzheimer?', acceptedAnswer: { '@type': 'Answer', text: 'Leichtes Stadium: oft PG 2–3. Mittleres Stadium: PG 3–4. Schweres Stadium: PG 4–5. Seit 2017 werden kognitive Einschränkungen im NBA-Begutachtungsverfahren deutlich stärker gewichtet — Alzheimer-Betroffene werden besser eingestuft als früher.' } },
      { '@type': 'Question', name: 'Wie unterscheidet sich Alzheimer von Demenz?', acceptedAnswer: { '@type': 'Answer', text: 'Alzheimer ist die häufigste Form der Demenz (ca. 60–70 % aller Demenzkranken). Demenz ist der Oberbegriff — Alzheimer ist eine spezifische neurodegenerative Erkrankung mit typischem Verlaufsmuster: Gedächtnisverlust beginnt mit Kurzzeitspeicher, Langzeitgedächtnis ist lange intakt.' } },
    ],
  },
]

export default function AlzheimerBetreuungZuhause() {
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
            { label: 'Krankheiten', href: '/krankheiten' },
            { label: 'Alzheimer Betreuung zuhause' },
          ]}
          augenbraue="Ratgeber Alzheimer"
          titel="Alzheimer Betreuung zuhause — was möglich ist & wie 24h-Pflege hilft"
          einleitung="Alzheimer ist die häufigste Demenzform — und häusliche Betreuung ist in allen Stadien grundsätzlich möglich. Die vertraute Umgebung mit den bekannten Geräuschen, Gerüchen und Gesichtern gibt Orientierung, die kein Pflegeheim ersetzen kann. Mit einer 24h-Betreuungskraft bleibt das eigene Zuhause auch bei fortgeschrittenem Alzheimer erhalten."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="8 Min."
          blick={[
            'Häusliche Betreuung ist in allen Alzheimer-Stadien grundsätzlich möglich',
            'Vertraute Umgebung gibt Orientierung und Halt',
            'Ab mittlerem Stadium: 24h-Präsenz für Sicherheit und Tagesstruktur notwendig',
            'Pflegegrad 2–5 je nach Stadium — frühzeitig beantragen',
            'Pflegegeld: 347–990 €/Monat · Entlastungsbudget: 3.539 €/Jahr',
            'Primundus setzt eigene Kräfte mit Alzheimer/Demenz-Erfahrung ein — Anreise in 3 Tagen möglich',
          ]}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="verlauf" titel="Alzheimer verstehen — Stadien & Verlauf">
            <Text>
              Alzheimer ist eine progressive neurodegenerative Erkrankung — sie schreitet unaufhaltsam fort, aber die Geschwindigkeit variiert stark. Manche Betroffene leben 5 Jahre mit der Diagnose, andere 15 oder mehr. Der Verlauf bestimmt was häusliche Betreuung leisten muss.
            </Text>
            <Text>
              <strong>Wichtig:</strong> Alzheimer ist die häufigste Demenzform (60–70 % aller Demenzkranken). Der Unterschied zu anderen Demenzformen: Beim Alzheimer ist das Kurzzeitgedächtnis zuerst betroffen, das Langzeitgedächtnis bleibt oft lange intakt. Betroffene erinnern sich an ihre Hochzeit vor 50 Jahren — aber nicht was sie heute gefrühstückt haben.
            </Text>
            <Punkte
              punkte={[
                { title: 'Frühes Stadium', desc: 'Vergesslichkeit beim Kurzzeitspeicher, Wortfindungsstörungen, Schwierigkeiten bei komplexen Aufgaben (Finanzen, Reisen). Weitgehend selbstständig, aber zunehmend überfordert. Häusliche Pflege durch Angehörige meist gut möglich.' },
                { title: 'Mittleres Stadium', desc: 'Deutliche Orientierungslosigkeit, Verwechslung von Personen und Zeiten, Verlaufen auch in vertrauter Umgebung, Nachtunruhe, erste Körperpflegedefizite. 24h-Präsenz wird notwendig.' },
                { title: 'Schweres Stadium', desc: 'Kaum Kommunikation möglich, vollständige Fremdversorgung, Immobilität, Schluckstörungen, Bettlägerigkeit. Intensive Pflege durch Betreuungskraft oder Pflegeheim.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="zuhause" titel="Was zuhause möglich ist">
            <Text>
              Das eigene Zuhause ist für Alzheimer-Betroffene kein Luxus — es gibt Halt. Bekannte Bilder an der Wand, der vertraute Geruch der Küche, der gewohnte Blick aus dem Fenster: Das alles gibt Orientierung wenn das Kurzzeitgedächtnis versagt.
            </Text>
            <Punkte
              punkte={[
                { title: 'Frühes Stadium — Angehörige mit Unterstützung', desc: 'Stundenweise Betreuung, Erinnerungshilfen (Kalender, Beschriftungen), Routinen etablieren, soziale Kontakte aufrechterhalten. Angehörige können die Hauptrolle spielen.' },
                { title: 'Mittleres Stadium — 24h-Kraft empfohlen', desc: 'Wann 24h-Präsenz nötig wird: wenn der Betroffene nicht mehr allein gelassen werden kann, wenn Weglaufen droht, wenn nachts Hilfe nötig ist. Eine feste Bezugsperson gibt Sicherheit.' },
                { title: 'Schweres Stadium — intensive Betreuung', desc: 'Vollständige Körperpflege, Lagerung, Ernährung, Dekubitusprophylaxe. In den meisten Fällen noch zuhause möglich — außer bei intensivmedizinischem Dauerbedarf.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="alltag" titel="Alltagsgestaltung bei Alzheimer — was wirklich hilft">
            <Punkte
              punkte={[
                { title: 'Feste Tagesstruktur', desc: 'Aufstehen, Mahlzeiten, Aktivitäten, Schlafenszeit — immer zur gleichen Uhrzeit. Vorhersehbarkeit gibt Sicherheit wenn das Kurzzeitgedächtnis fehlt.' },
                { title: 'Validierung statt Korrektur', desc: 'Nicht korrigieren wenn etwas falsch erinnert wird. Stattdessen in die emotionale Realität des Betroffenen einsteigen. "Erzähl mir von deinem Mann" — nicht "Dein Mann ist schon lange gestorben."' },
                { title: 'Biographiearbeit', desc: 'Alte Fotos, Musik aus der Jugend, Erinnerungsgegenstände aktivieren das intakte Langzeitgedächtnis. Das schafft positive Momente auch im fortgeschrittenen Stadium.' },
                { title: 'Bewegung täglich', desc: 'Spaziergänge in gewohnter Umgebung. Tanzen oder Schunkeln zu vertrauter Musik. Gartenarbeit wenn möglich. Bewegung verbessert Stimmung und Schlaf.' },
                { title: 'Reizarme Umgebung', desc: 'Kein Nachrichtenlärm, keine überfordernden Gespräche, ruhige Atmosphäre. Zu viele Stimuli führen zu Unruhe und Angst.' },
                { title: 'Sicherheit im Haushalt', desc: 'Herd sichern, Türen sichern (Weglaufschutz), scharfe Gegenstände wegräumen, Teppiche fixieren. Die Wohnung sturzfrei und sicher machen.' },
              ]}
            />
            <MehrDazu
              label="Kommunikation bei Demenz:"
              links={[
                { href: '/kommunikation-mit-demenzkranken', text: 'Kommunikation mit Demenzkranken — was hilft' },
                { href: '/tagesstruktur-demenz', text: 'Tagesstruktur bei Demenz' },
              ]}
            />
          </Abschnitt>

          <DunklerAbschnitt
            id="pflege24h"
            titel="Wann 24h-Pflege bei Alzheimer die richtige Lösung ist"
            einleitung="Ab dem mittleren Stadium ist eine feste Bezugsperson rund um die Uhr in den meisten Fällen die beste Lösung — sowohl für Sicherheit als auch für Lebensqualität."
            punkte={[
              { title: 'Was eine Primundus-Kraft bei Alzheimer leistet', desc: 'Tagesstruktur und Rituale konsequent einhalten. Bei Bedarf auch nachts vor Ort. Weglaufen und Sicherheitsrisiken verhindern. Körperpflege und Mahlzeiten. Biographiearbeit und emotionale Begleitung. Entlastung der Familie.' },
              { title: 'Erfahrung mit Alzheimer wichtig', desc: 'Eine Kraft die Alzheimer kennt weiß: nicht korrigieren, in die Welt des Betroffenen einsteigen, mit Validierung und nicht mit Realitätsorientierung arbeiten. Primundus wählt gezielt Kräfte mit Demenz-Erfahrung.' },
            ]}
          >
            <MehrDazu
              label="Allgemeine Demenzpflege:"
              links={[{ href: '/demenz-pflege-zuhause', text: 'Demenz Pflege zuhause — vollständiger Ratgeber' }]}
            />
            <MehrDazu
              label="Kosten & Zuschüsse:"
              links={[{ href: '/kosten', text: 'Was kostet 24h-Pflege 2026?' }]}
            />
          </DunklerAbschnitt>

          <Abschnitt id="pflegegrad" titel="Pflegegrad bei Alzheimer & Kassenzuschüsse 2026">
            <Tabelle
              titel="Pflegegrade bei Alzheimer & Leistungen 2026"
              kopf={['Stadium', 'Typischer PG', 'Pflegegeld', 'Entlastungsbetrag']}
              zeilen={[
                ['Leichtes Stadium', 'PG 2–3', '347–599 €', '131 €'],
                ['Mittleres Stadium', 'PG 3–4', '599–800 €', '131 €'],
                ['Schweres Stadium', 'PG 4–5', '800–990 €', '131 €'],
              ]}
              betont={2}
              fuss="Richtwerte · Einstufung durch MD · Zusätzlich: Entlastungsbudget 3.539 €/Jahr (ab PG 2) · Stand 2026"
            />
            <MehrDazu
              label="Pflegegrad beantragen:"
              links={[
                { href: '/pflegegrad-beantragen', text: 'Schritt für Schritt Anleitung' },
                { href: '/pflegegrad-bei-demenz', text: 'Pflegegrad bei Demenz' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen zur Alzheimer-Betreuung">
            <Fragen
              fragen={[
                { q: 'Kann man Alzheimer-Patienten zuhause betreuen?', a: 'Ja — in allen Stadien ist häusliche Betreuung grundsätzlich möglich. Die vertraute Umgebung gibt Orientierung und Halt und erhält Würde. Ab dem mittleren Stadium ist eine 24h-Betreuungskraft empfehlenswert.' },
                { q: 'Welchen Pflegegrad hat man bei Alzheimer?', a: 'Je nach Stadium PG 2–5. Seit 2017 werden kognitive Einschränkungen im NBA-Begutachtungsverfahren deutlich stärker gewichtet — Alzheimer-Betroffene werden besser eingestuft als früher.' },
                { q: 'Wie unterscheidet sich Alzheimer von Demenz?', a: 'Alzheimer ist die häufigste Demenzform (60–70 % aller Fälle). Typisch: Kurzzeitspeicher zuerst betroffen, Langzeitgedächtnis lange intakt. Demenz ist der Oberbegriff — Alzheimer eine spezifische Ursache.' },
                { q: 'Was sind die häufigsten Herausforderungen bei der Alzheimer-Betreuung?', a: 'Weglaufen (Hinlaufen), Nachtunruhe, Verweigerung von Körperpflege und Mahlzeiten, Verhaltensveränderungen wie Aggressionen oder Ängste, Kommunikation wenn Sprache abnimmt.' },
                { q: 'Was kostet Alzheimer-Betreuung zuhause?', a: 'Mit einer 24h-Betreuungskraft von Primundus: ab 2.150 €/Monat. Nach Pflegegeld (599 € bei Pflegegrad 3), Entlastungsbudget und Steuerermäßigung bleiben ab ca. 923 € im Monat. Den Entlastungsbetrag von 131 € zahlt die Kasse nur für anerkannte Alltagshilfen, in der Regel nicht für die Betreuungskraft.' },
              ]}
            />
          </Abschnitt>

          <Weiterlesen aktuell="alzheimer-betreuung-zuhause" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
