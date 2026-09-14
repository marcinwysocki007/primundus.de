import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, DunklerAbschnitt, Fragen, HakenListe, Kasten, Punkte, RatgeberKopf, RatgeberRumpf, Text, Vorspann,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('ernaehrung-pflegebeduerftige-senioren', '25. April 2026')

const SECTIONS = [
  { id: 'grundlagen', title: 'Grundlagen der Seniorenernährung' },
  { id: 'haeufige-probleme', title: 'Häufige Ernährungsprobleme' },
  { id: 'mangelernährung', title: 'Mangelernährung erkennen & verhindern' },
  { id: 'kochpraxis', title: 'Kochpraxis für Betreuungskräfte' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Ernährung pflegebedürftiger Senioren — was wichtig ist',
  description: 'Ernährung pflegebedürftiger Senioren: Grundlagen, häufige Probleme, Mangelernährung erkennen und praktische Tipps für Betreuungskräfte und Angehörige.',
  alternates: { canonical: 'https://primundus.de/ernaehrung-pflegebeduerftige-senioren' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Ernährung pflegebedürftiger Senioren | Primundus',
    description: 'Was pflegebedürftige Senioren essen sollten und wie man Mangelernährung verhindert.',
    url: 'https://primundus.de/ernaehrung-pflegebeduerftige-senioren',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Ernährung pflegebedürftiger Senioren — was wichtig ist',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/ernaehrung-pflegebeduerftige-senioren',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Alltag & Angehörige', item: 'https://primundus.de/alltag' },
      { '@type': 'ListItem', position: 3, name: 'Ernährung pflegebedürftiger Senioren', item: 'https://primundus.de/ernaehrung-pflegebeduerftige-senioren' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was sollten pflegebedürftige Senioren essen?', acceptedAnswer: { '@type': 'Answer', text: 'Pflegebedürftige Senioren brauchen energie- und nährstoffdichte Kost: genug Protein (ca. 1–1,2 g/kg Körpergewicht/Tag) zur Muskelpflege, viel Flüssigkeit (1,5–2 Liter/Tag, da Durstgefühl nachlässt), Vitamin D und Kalzium für Knochen, und leicht verdauliche, gut kauffähige Lebensmittel. Mahlzeiten nach Vorlieben und Gewohnheiten richten.' } },
    ],
  },
]

export default function ErnaehrungPflegebeduerftigeSenioren() {
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
            { label: "Ernährung pflegebedürftiger Senioren" },
          ]}
          augenbraue="Ratgeber Ernährung"
          titel="Ernährung pflegebedürftiger Senioren — was wirklich wichtig ist"
          einleitung="Gute Ernährung ist in der Pflege oft unterschätzt — dabei ist sie eine der wirksamsten Maßnahmen für Wohlbefinden, Heilung und Lebensqualität. Pflegebedürftige Senioren haben andere Bedürfnisse als jüngere Menschen: weniger Hunger, aber höherer Nährstoffbedarf, vermindertes Durstgefühl, oft Schluckprobleme. Eine 24h-Betreuungskraft die frisch kocht macht den Unterschied."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="7 Min."
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Vorspann>
            <Kasten augenbraue="Die wichtigsten Grundsätze">
              <HakenListe punkte={[
                'Energie- und nährstoffdichte Kost — nicht wenig, aber kompakt',
                'Protein: ca. 1–1,2 g/kg Körpergewicht täglich (Muskelerhalt)',
                'Flüssigkeit: mind. 1,5 Liter täglich — Senioren trinken zu wenig weil Durstgefühl nachlässt',
                'Vitamin D + Kalzium: täglich für Knochengesundheit',
                'Regelmäßige Mahlzeiten als Tagesstruktur — 5–6 kleinere statt 3 große',
                'Essen nach Vorlieben und Gewohnheiten — Genuss ist Therapie',
              ]} />
            </Kasten>
          </Vorspann>

          <DunklerAbschnitt
            id="grundlagen"
            titel="Grundlagen der Seniorenernährung"
            einleitung="Mit zunehmendem Alter verändern sich Nährstoffbedarf, Verdauung und Appetit. Diese Veränderungen systematisch zu berücksichtigen ist der Kern einer guten Seniorenernährung."
            punkte={[
              { title: 'Protein — wichtiger als oft gedacht', desc: 'Muskelmasse schwindet im Alter automatisch (Sarkopenie). Ausreichend Protein (Fleisch, Fisch, Hülsenfrüchte, Milchprodukte, Eier) verlangsamt diesen Prozess. Pflegebedürftige Senioren brauchen ca. 1–1,2 g Protein pro kg Körpergewicht täglich — deutlich mehr als jüngere Erwachsene.' },
              { title: 'Flüssigkeit — das größte Risiko', desc: 'Das Durstgefühl nimmt im Alter ab — viele Senioren trinken chronisch zu wenig. Dehydration führt zu Verwirrtheit, Stürzen, Harnwegsinfektionen und verschlechtert alle Erkrankungen. 1,5–2 Liter täglich sind das Minimum. Betreuungskraft bietet aktiv Getränke an.' },
              { title: 'Vitamin D', desc: 'Vitamin-D-Mangel ist bei Senioren extrem verbreitet — besonders im Winter und bei eingeschränkter Mobilität (wenig Sonne). Betrifft Knochen, Muskeln, Immunsystem. Supplementierung fast immer sinnvoll — Arzt fragen.' },
              { title: 'Ballaststoffe', desc: 'Verstopfung ist bei pflegebedürftigen Senioren häufig — durch Bewegungsmangel, Medikamente und zu wenig Ballaststoffe. Vollkornprodukte, Gemüse, Hülsenfrüchte, viel Flüssigkeit helfen.' },
            ]}
          />

          <Abschnitt id="haeufige-probleme" titel="Häufige Ernährungsprobleme — und was hilft">
            <Punkte
              punkte={[
                { title: 'Appetitlosigkeit', desc: 'Kleine Portionen, 5–6 Mahlzeiten täglich. Lieblingsspeisen bevorzugen — Genuss vor Gesundheit. Schöne Anrichtung, Tischgemeinschaft. Bitterstofftropfen vorab regen Appetit an.' },
                { title: 'Schluckstörungen (Dysphagie)', desc: 'Weiche, pürierte oder angedickte Speisen. Logopädie konsultieren. Niemals Tabletten in der Ernährung verstecken ohne Arztfreigabe. Trinken mit angedickten Getränken.' },
                { title: 'Zahnprobleme', desc: 'Weiche Konsistenz — gut gegartes Gemüse, Fischgerichte, Suppen, Brei, Joghurt, Quark. Kein Zwang zu harten Speisen. Zahnarzt für regelmäßige Kontrolle.' },
                { title: 'Demenz und Vergessen zu essen', desc: 'Feste Mahlzeitenzeiten als Tagesstruktur. Essen in Sichtweite stellen als Erinnerung. Fingerfoods wenn Besteck schwierig wird. Genug Zeit und Ruhe beim Essen.' },
                { title: 'Diabetes-Management', desc: 'Zuckerarme Kost, regelmäßige Mahlzeiten für stabilen Blutzucker. Betreuungskraft lernt Blutzuckermessen und kennt Hypoglykämie-Symptome.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="mangelernährung" titel="Mangelernährung erkennen & verhindern">
            <Text>
              Mangelernährung bei Senioren ist häufig und oft unentdeckt. Sie verschlechtert alle Erkrankungen, verlangsamt Wundheilung, erhöht Sturzrisiko und Infektanfälligkeit.
            </Text>
            <Punkte
              punkte={[
                { title: 'Unbeabsichtigter Gewichtsverlust', desc: 'Mehr als 5 % des Körpergewichts in 3 Monaten ohne Diät — sofort Arzt konsultieren.' },
                { title: 'Kleidung sitzt zu weit', desc: 'Hosen und Hemden die früher gepasst haben, hängen nun — oft unbemerkt.' },
                { title: 'Apathie und Schwäche', desc: 'Wenn jemand "nur noch sitzt" und kaum noch aufsteht — Mangelernährung ist oft mitverantwortlich.' },
                { title: 'Häufige Infektionen', desc: 'Schlechtes Immunsystem durch Protein- und Vitaminmangel.' },
                { title: 'Wunden heilen schlecht', desc: 'Druckgeschwüre und Wunden die nicht heilen — Proteinstatus prüfen lassen.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="kochpraxis" titel="Kochpraxis für Betreuungskräfte — konkrete Tipps">
            <Punkte
              punkte={[
                { title: 'Biografische Lieblingsgerichte kochen', desc: 'Was hat der Senior früher gerne gegessen? Welche Gerichte erinnern an schöne Zeiten? Diese Gerichte zubereiten — Essen ist Erinnerung und Genuss.' },
                { title: 'Vollwertig aber weich', desc: 'Vollwertige Mahlzeiten müssen nicht hart sein: Lachsfilet, weiches Gemüse (Möhren, Zucchini, Kürbis), Quark, Joghurt, Suppen — alles nährstoffreich und leicht zu essen.' },
                { title: 'Flüssigkeit aktiv anbieten', desc: 'Nicht darauf warten dass getrunken wird — alle 1–2 Stunden aktiv Tee, Wasser, verdünnter Saft anbieten. Trinkprotokoll bei Bedarf führen.' },
                { title: 'Gute Küche kaufen — nicht sparen', desc: 'Frische, hochwertige Lebensmittel sind in der Pflege keine Luxus — sie sind Therapie. Das Budget für gutes Essen ist gut investiert.' },
                { title: 'Mahlzeiten als soziales Erlebnis', desc: 'Gemeinsam essen, am Tisch — nicht beim Fernsehen. Schönes Geschirr, Kerze, kurzes Gespräch. Mahlzeiten als Ritual des Tages.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen">
            <Fragen
              fragen={[
                { q: 'Was sollten pflegebedürftige Senioren essen?', a: 'Energie- und nährstoffdichte Kost: genug Protein (1–1,2 g/kg/Tag), viel Flüssigkeit (1,5+ Liter), Vitamin D und Kalzium, Ballaststoffe. Kleine Mahlzeiten 5–6× täglich. Nach Vorlieben und Gewohnheiten kochen.' },
                { q: 'Wie viel sollten Senioren trinken?', a: 'Mindestens 1,5 Liter täglich — besser 2 Liter. Das Durstgefühl lässt im Alter nach — Flüssigkeit muss aktiv angeboten werden.' },
                { q: 'Was tun wenn ein Pflegebedürftiger kaum noch isst?', a: 'Ursache suchen (Zahnprobleme, Schluckstörungen, Depressionen, Medikamentennebenwirkungen). Lieblingsessen anbieten. Kleine Portionen. Hochkalorische Ergänzung (Trinknahrung). Arzt einschalten wenn Gewichtsverlust anhält.' },
                { q: 'Kocht die Betreuungskraft von Primundus frisch?', a: 'Ja — frische, altersgerechte Mahlzeiten sind Bestandteil der 24h-Betreuung. Die Kraft kocht nach Vorlieben, Diät und Ernährungsempfehlungen.' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="ernaehrung-pflegebeduerftige-senioren" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
