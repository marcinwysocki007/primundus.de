import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, DunklerAbschnitt, Fragen, HakenListe, MehrDazu, Punkte, RatgeberKopf, RatgeberRumpf, Tabelle, Text,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('herzinsuffizienz-pflege', '25. April 2026')

const SECTIONS = [
  { id: 'zuhause', title: 'Herzinsuffizienz zuhause pflegen' },
  { id: 'alltag', title: 'Alltag & was zu beachten ist' },
  { id: 'wann-24h', title: 'Wann braucht es 24h-Pflege?' },
  { id: 'pflegegrad', title: 'Pflegegrad & Leistungen' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Herzinsuffizienz Pflege zuhause — was möglich ist 2026',
  description: 'Herzinsuffizienz Pflege zuhause: Was in welchem NYHA-Stadium möglich ist, worauf täglich geachtet werden muss und ab wann eine 24h-Betreuungskraft sinnvoll ist.',
  alternates: { canonical: 'https://primundus.de/herzinsuffizienz-pflege' },
  openGraph: {
    title: 'Herzinsuffizienz Pflege zuhause | Primundus',
    description: 'Was bei Herzinsuffizienz zuhause möglich ist und ab wann 24h-Pflege sinnvoll wird.',
    url: 'https://primundus.de/herzinsuffizienz-pflege',
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
    headline: 'Herzinsuffizienz Pflege zuhause 2026',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/herzinsuffizienz-pflege',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Krankheiten', item: 'https://primundus.de/krankheiten' },
      { '@type': 'ListItem', position: 3, name: 'Herzinsuffizienz Pflege', item: 'https://primundus.de/herzinsuffizienz-pflege' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Kann man bei Herzinsuffizienz zuhause gepflegt werden?', acceptedAnswer: { '@type': 'Answer', text: 'Ja — Herzinsuffizienz-Pflege zuhause ist in den meisten Fällen möglich. Wichtig ist die konsequente Medikamentengabe, tägliche Gewichtskontrolle, Flüssigkeitsbilanz und die Vermeidung von Überlastung. Eine 24h-Betreuungskraft überwacht diese Punkte rund um die Uhr.' } },
      { '@type': 'Question', name: 'Welchen Pflegegrad bekommt man bei Herzinsuffizienz?', acceptedAnswer: { '@type': 'Answer', text: 'Je nach NYHA-Stadium und Einschränkungen im Alltag: Leichte Herzinsuffizienz meist PG 1–2, moderate PG 2–3, schwere PG 3–4, schwerste PG 4–5. Entscheidend ist wie stark die körperliche Belastbarkeit und Selbstständigkeit eingeschränkt sind.' } },
    ],
  },
]

export default function HerzinsuffizienzPflege() {
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
            { label: "Herzinsuffizienz Pflege" },
          ]}
          augenbraue="Ratgeber Herzinsuffizienz"
          titel="Herzinsuffizienz Pflege zuhause — was möglich ist"
          einleitung="Herzinsuffizienz ist eine der häufigsten Ursachen für Pflegebedürftigkeit im Alter — und in den meisten Fällen ist die Pflege zuhause gut möglich. Entscheidend ist die konsequente Medikamentengabe, tägliche Gewichtskontrolle und Belastungsanpassung. Eine 24h-Betreuungskraft überwacht diese Punkte rund um die Uhr und erkennt Verschlechterungen frühzeitig."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="6 Min."
          blick={[
                'Herzinsuffizienz-Pflege zuhause ist in den meisten Fällen gut möglich',
                'Tägliche Gewichtskontrolle und Flüssigkeitsbilanz sind entscheidend',
                'Medikamentengabe: Pünktlichkeit und Dosierung kritisch — Betreuungskraft überwacht',
                'Pflegegrad 2–4 typisch je nach NYHA-Stadium und Einschränkungen',
                'Kassenzuschüsse: 347–800 €/Monat + 3.539 €/Jahr Entlastungsbudget',
                'Notfallzeichen kennen: Plötzliche Gewichtszunahme, Atemnot, Unterschenkelödeme',
              ]}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="zuhause" titel="Herzinsuffizienz zuhause pflegen — was möglich ist">
            <Text>
              Die Herzinsuffizienz wird nach NYHA (New York Heart Association) in vier Stadien eingeteilt — von NYHA I (keine Symptome bei normaler Belastung) bis NYHA IV (Symptome bereits in Ruhe). Je nach Stadium unterscheiden sich die Anforderungen an die häusliche Pflege erheblich.
            </Text>
            <Punkte
              punkte={[
                { title: 'NYHA I–II', desc: 'Pflege durch Angehörige meist ausreichend. Unterstützung bei schweren Haushaltsarbeiten, Begleitung zu Arztterminen, Medikamentenerinnerung. Selbstständigkeit weitgehend erhalten.' },
                { title: 'NYHA III', desc: 'Deutliche Einschränkung der Belastbarkeit — bereits bei leichter Aktivität Atemnot. Unterstützung bei Körperpflege, Kochen, Einkaufen. 24h-Präsenz empfehlenswert.' },
                { title: 'NYHA IV', desc: 'Symptome in Ruhe — vollständige Pflegeabhängigkeit. 24h-Betreuungskraft notwendig. Engmaschige ärztliche Kontrolle. Palliative Begleitung möglicherweise sinnvoll.' },
              ]}
            />
          </Abschnitt>

          <DunklerAbschnitt
            id="alltag"
            titel="Alltag bei Herzinsuffizienz — worauf täglich geachtet wird"
            einleitung="Bei Herzinsuffizienz gibt es tägliche Maßnahmen die konsequent eingehalten werden müssen. Eine Betreuungskraft übernimmt diese Überwachung zuverlässig und erkennt Alarmzeichen früher als Betroffene selbst."
            punkte={[
              { title: 'Tägliche Gewichtskontrolle', desc: 'Jeden Morgen zur gleichen Zeit wiegen — vor dem Frühstück, nach dem ersten Toilettengang. Mehr als 2 kg Gewichtszunahme in 2–3 Tagen kann auf Wasseransammlungen hinweisen — sofort Arzt informieren.' },
              { title: 'Flüssigkeitsbilanz', desc: 'Je nach ärztlicher Anweisung Trinkmenge begrenzen (oft 1,5–2 l/Tag). Betreuungskraft protokolliert Einfuhr und Ausscheidung, informiert Arzt bei Auffälligkeiten.' },
              { title: 'Medikamentengabe', desc: 'Pünktliche und korrekte Medikamentengabe ist entscheidend — ACE-Hemmer, Betablocker, Diuretika müssen exakt eingenommen werden. Betreuungskraft überwacht und erinnert.' },
              { title: 'Belastungsanpassung', desc: 'Körperliche Aktivität nach ärztlicher Anweisung — nicht zu wenig (schadet), nicht zu viel (überfordert). Spaziergänge planen, Treppen nur wenn medizinisch erlaubt.' },
              { title: 'Notfallzeichen erkennen', desc: 'Plötzliche Atemnot, starke Wassereinlagerungen in Beinen, Brustschmerzen, Bewusstlosigkeit — sofort Notarzt rufen. Betreuungskraft kennt diese Zeichen und handelt.' },
            ]}
          />

          <Abschnitt id="wann-24h" titel="Wann braucht es eine 24h-Betreuungskraft?">
            <Text>
              Bei Herzinsuffizienz ist eine professionelle 24h-Betreuung sinnvoll wenn:
            </Text>
            <HakenListe punkte={[
              'Tägliche Überwachung (Gewicht, Flüssigkeit, Medikamente) nicht zuverlässig durch Angehörige gewährleistet werden kann',
              'NYHA III oder IV — deutliche Einschränkung der Alltagsaktivitäten',
              'Wiederholte Krankenhausaufenthalte durch Dekompensation (Wasseransammlung)',
              'Angehörige können Überwachungspflichten nicht dauerhaft übernehmen',
              'Weitere Erkrankungen (Diabetes, Niereninsuffizienz) erhöhen den Pflegebedarf',
            ]} />
            <MehrDazu
              label="Kosten und Zuschüsse:"
              links={[{ href: "/kosten", text: "Was kostet 24h-Pflege?" }, { href: "/finanzierung", text: "Alle Kassenzuschüsse 2026" }]}
            />
          </Abschnitt>

          <Abschnitt id="pflegegrad" titel="Pflegegrad bei Herzinsuffizienz">
            <Text>
              Der Pflegegrad hängt nicht von der Diagnose ab — sondern davon wie stark die Selbstständigkeit im Alltag eingeschränkt ist. Bei Herzinsuffizienz ist die körperliche Belastbarkeit oft das entscheidende Kriterium.
            </Text>
            <Tabelle
              titel=""
              kopf={['NYHA Stadium', 'Typischer Pflegegrad', 'Pflegegeld/Monat']}
              zeilen={[
                ['NYHA I–II', 'PG 1–2', '— bis 347 €'],
                ['NYHA III', 'PG 2–3', '347–599 €'],
                ['NYHA IV', 'PG 3–5', '599–990 €'],
              ]}
              betont={2}
              fuss="Richtwerte — individuelle Einstufung durch MD · Stand 2026"
            />
            <MehrDazu
              label="Pflegegrad beantragen:"
              links={[{ href: "/pflegegrad-beantragen", text: "Schritt für Schritt Anleitung" }]}
            />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen">
            <Fragen
              fragen={[
                { q: 'Kann man bei Herzinsuffizienz zuhause gepflegt werden?', a: 'Ja — in den meisten Fällen ist Herzinsuffizienz-Pflege zuhause gut möglich. Wichtig sind tägliche Gewichtskontrolle, Flüssigkeitsbilanz, pünktliche Medikamentengabe und Belastungsanpassung. Eine 24h-Betreuungskraft überwacht diese Punkte zuverlässig.' },
                { q: 'Welchen Pflegegrad bekommt man bei Herzinsuffizienz?', a: 'Je nach NYHA-Stadium und Alltagseinschränkungen: NYHA I–II meist PG 1–2, NYHA III meist PG 2–3, NYHA IV meist PG 3–5. Der Pflegegrad hängt vom tatsächlichen Hilfebedarf ab, nicht von der Diagnose allein.' },
                { q: 'Was muss bei der Pflege von Herzinsuffizienz täglich beachtet werden?', a: 'Tägliche Gewichtskontrolle (Zunahme von 2+ kg = Arzt informieren), Flüssigkeitsbilanz nach ärztlicher Anweisung, pünktliche Medikamentengabe, Belastungsanpassung, Notfallzeichen (Atemnot, Ödeme, Brustschmerzen) erkennen.' },
                { q: 'Ab wann braucht man bei Herzinsuffizienz eine 24h-Betreuungskraft?', a: 'Ab NYHA III mit deutlichen Alltagseinschränkungen, bei wiederholten Krankenhausaufenthalten durch Dekompensation, wenn Überwachungspflichten nicht durch Angehörige gewährleistet werden können.' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="herzinsuffizienz-pflege" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
