import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, DunklerAbschnitt, Fragen, Kasten, MehrDazu, Punkte, RatgeberKopf, RatgeberRumpf, Text, Vorspann,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('palliativpflege-zuhause', '25. April 2026')

const SECTIONS = [
  { id: 'was-ist', title: 'Was ist Palliativpflege zuhause?' },
  { id: 'team', title: 'Das palliative Team' },
  { id: 'schmerz', title: 'Schmerztherapie & Symptomkontrolle' },
  { id: 'angehoerige', title: 'Unterstützung für Angehörige' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Palliativpflege zuhause — würdevoll bis zum Ende | Primundus',
  description: 'Palliativpflege zuhause: Was möglich ist, welches Team gebraucht wird und wie Angehörige in der letzten Lebensphase unterstützt werden können.',
  alternates: { canonical: 'https://primundus.de/palliativpflege-zuhause' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Palliativpflege zuhause | Primundus',
    description: 'Würdevolle Begleitung in der letzten Lebensphase zuhause — was möglich ist und was gebraucht wird.',
    url: 'https://primundus.de/palliativpflege-zuhause',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Palliativpflege zuhause — würdevoll bis zum Ende',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/palliativpflege-zuhause',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Krankheiten', item: 'https://primundus.de/krankheiten' },
      { '@type': 'ListItem', position: 3, name: 'Palliativpflege zuhause', item: 'https://primundus.de/palliativpflege-zuhause' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was ist Palliativpflege zuhause?', acceptedAnswer: { '@type': 'Answer', text: 'Palliativpflege zuhause bedeutet die würdevolle Begleitung und Versorgung von Menschen in der letzten Lebensphase im eigenen Zuhause. Ziel ist nicht Heilung, sondern Schmerzfreiheit, Komfort und Lebensqualität bis zum Tod. Sie umfasst Schmerztherapie, Symptomkontrolle, psychologische Begleitung und Unterstützung der Familie.' } },
      { '@type': 'Question', name: 'Ist Sterben zuhause möglich?', acceptedAnswer: { '@type': 'Answer', text: 'Ja — in Deutschland sterben schätzungsweise 25–30 % der Menschen zuhause. Mit dem richtigen Team (Hausarzt, SAPV-Team, palliative Pflegekraft, Hospizbegleiter) ist ein würdiges Sterben zuhause in den meisten Fällen möglich — und für viele der ausdrückliche Wunsch.' } },
    ],
  },
]

export default function PalliativpflegeZuhause() {
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
            { label: "Palliativpflege zuhause" },
          ]}
          augenbraue="Ratgeber Palliativpflege"
          titel="Palliativpflege zuhause — würdevoll bis zum Ende"
          einleitung="Die meisten Menschen möchten in ihrem Zuhause sterben — umgeben von vertrauten Menschen und Gegenständen. Mit dem richtigen Team ist das in den meisten Fällen möglich: Hausarzt, SAPV-Team, palliative Pflegekraft und Hospizbegleiter ermöglichen eine würdevolle letzte Lebensphase zuhause."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="7 Min."
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Vorspann>
            <Kasten titel="Was Palliativpflege bedeutet">
              <Text>Palliativpflege ist keine Aufgabe — es ist eine Haltung. Ziel ist nicht Lebensverlängerung um jeden Preis, sondern Schmerzfreiheit, Würde und Lebensqualität bis zum Tod. Und die Unterstützung der Menschen die jemanden begleiten.</Text>
            </Kasten>
          </Vorspann>

          <Abschnitt id="was-ist" titel="Was ist Palliativpflege zuhause?">
            <Text>
              Palliativpflege (von lateinisch "pallium" = Mantel) umfasst alle Maßnahmen die das Wohlbefinden und die Lebensqualität von Menschen mit unheilbarer Erkrankung verbessern — ohne auf Heilung abzuzielen.
            </Text>
            <Text>
              In Deutschland gibt es ein gut ausgebautes Netz an ambulanter Palliativversorgung. Die <strong>Spezialisierte Ambulante Palliativversorgung (SAPV)</strong> ist ein gesetzlicher Anspruch für Menschen mit unheilbarer Erkrankung — kostenlos und über den Hausarzt verordnet.
            </Text>
            <Punkte
              punkte={[
                { title: 'Schmerztherapie', desc: 'Effektive Schmerzfreiheit ist das wichtigste Ziel. Mit modernen Schmerzmitteln — auch Opioide — ist Schmerzfreiheit zuhause fast immer erreichbar. Der SAPV-Arzt passt die Therapie laufend an.' },
                { title: 'Symptomkontrolle', desc: 'Atemnot, Übelkeit, Angst, Unruhe — alle belastenden Symptome können gelindert werden. Das SAPV-Team ist 24h erreichbar für Anpassungen.' },
                { title: 'Psychologische Begleitung', desc: 'Für den Sterbenden und die Angehörigen. Palliativteam und Hospizbegleiter begleiten emotional durch die schwierigste Zeit.' },
                { title: 'Praktische Pflege', desc: 'Körperpflege, Lagerung, Mundpflege, Inkontinenzversorgung. Betreuungskraft und Pflegedienst arbeiten zusammen.' },
              ]}
            />
          </Abschnitt>

          <DunklerAbschnitt
            id="team"
            titel="Das palliative Team zuhause"
            einleitung="Palliativpflege zuhause ist Teamarbeit. Niemand muss das alleine stemmen."
            punkte={[
              { title: 'Hausarzt', desc: 'Koordiniert die medizinische Versorgung, verordnet SAPV wenn nötig, Ansprechpartner für Fragen. Hausbesuche sind in der Palliativsituation problemlos zu vereinbaren.' },
              { title: 'SAPV-Team (Spezialisierte Ambulante Palliativversorgung)', desc: 'Auf Verordnung des Hausarztes: Palliativarzt und -pflegekraft kommen nach Hause. Rund um die Uhr erreichbar. Kostenfrei über Krankenversicherung. Zugang: Hausarzt SAPV verordnen lassen.' },
              { title: 'Ambulanter Pflegedienst', desc: 'Übernimmt Grundpflege, Medikamentengabe, Verbandswechsel. Arbeitet mit SAPV-Team zusammen.' },
              { title: '24h-Betreuungskraft', desc: 'Rund um die Uhr vor Ort — Gesellschaft, praktische Unterstützung, Sicherheit. Entlastet Angehörige. Meldet Veränderungen sofort.' },
              { title: 'Hospizbegleiter', desc: 'Ehrenamtliche die sterbende Menschen und ihre Familien begleiten. Kostenlos über lokale Hospizdienste. Seelische Unterstützung, Dasein, Gespräche.' },
            ]}
          />

          <Abschnitt id="schmerz" titel="Schmerztherapie & Symptomkontrolle zuhause">
            <Text>
              Die Angst "zuhause nicht ausreichend versorgt zu sein" ist einer der Hauptgründe warum Menschen die letzte Phase im Krankenhaus oder Hospiz verbringen — obwohl sie zuhause sterben möchten. Diese Angst ist unbegründet: Mit SAPV ist medizinische Palliativversorgung zuhause auf Krankenhausniveau möglich.
            </Text>
            <Punkte
              punkte={[
                { title: 'Schmerzen', desc: 'Moderne Schmerztherapie nach WHO-Stufenschema. Opioide (Morphin) zuhause ist legal und sicher wenn ärztlich verordnet. Schmerzpflaster ermöglichen kontinuierliche Wirkung ohne Schlucken.' },
                { title: 'Atemnot', desc: 'Niedrig dosiertes Morphin lindert das Gefühl von Atemnot effektiv. Frische Luft, Ventilator, Lagerung. Anxiolytika bei begleitender Angst.' },
                { title: 'Übelkeit & Erbrechen', desc: 'Antiemetika nach ärztlicher Verordnung. Kleine Mahlzeiten, kein Essenszwang. Ingwertee kann helfen.' },
                { title: 'Unruhe & Angst', desc: 'Ruhige Atmosphäre, vertraute Personen, Musik. Bei starker Unruhe: medikamentöse Sedierung möglich und ethisch vertretbar.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="angehoerige" titel="Unterstützung für Angehörige">
            <Text>
              Palliativbegleitung ist auch Begleitung der Familie. Angehörige die einen sterbenden Menschen begleiten brauchen selbst Unterstützung — das ist kein Zeichen von Schwäche, sondern menschlich.
            </Text>
            <Punkte
              punkte={[
                { title: 'Entlastung durch Betreuungskraft', desc: 'Eine 24h-Betreuungskraft ist nachts da wenn Angehörige schlafen müssen. Sie übernimmt praktische Aufgaben damit Angehörige Energie für emotionale Begleitung haben.' },
                { title: 'Hospizbegleiter als Gesprächspartner', desc: 'Kostenlos, erfahren, ohne eigene Betroffenheit. Jemand mit dem man sprechen kann der zuhört ohne selbst zu leiden.' },
                { title: 'Psychologische Trauerbegleitung', desc: 'Viele Hospizdienste und Beratungsstellen bieten Trauerbegleitung auch schon während der Palliativphase an — nicht erst nach dem Tod.' },
                { title: 'Pflegezeit / Pflegeunterstützungsgeld', desc: 'Angehörige können für die Begleitung in der Sterbephase bezahlte Freistellung (Pflegeunterstützungsgeld) in Anspruch nehmen.' },
              ]}
            />
            <MehrDazu
              label="Mehr:"
              links={[{ href: "/burnout-pflegende-angehoerige", text: "Burnout pflegender Angehöriger" }, { href: "/pflege-und-beruf-vereinbaren", text: "Pflege und Beruf vereinbaren" }]}
            />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen">
            <Fragen
              fragen={[
                { q: 'Was ist Palliativpflege zuhause?', a: 'Würdevolle Begleitung und Versorgung in der letzten Lebensphase im eigenen Zuhause. Ziel: Schmerzfreiheit, Komfort und Lebensqualität bis zum Tod — nicht Heilung oder Lebensverlängerung.' },
                { q: 'Ist Sterben zuhause möglich?', a: 'Ja — mit dem richtigen Team (Hausarzt, SAPV-Team, Pflegekraft, Hospizbegleiter) ist würdiges Sterben zuhause in den meisten Fällen möglich. Ca. 25–30 % der Menschen in Deutschland sterben zuhause.' },
                { q: 'Was ist SAPV und wie bekommt man es?', a: 'Spezialisierte Ambulante Palliativversorgung — kostenloser gesetzlicher Anspruch für Menschen mit unheilbarer Erkrankung. Hausarzt verordnet SAPV. Team kommt nach Hause, ist 24h erreichbar.' },
                { q: 'Kann man Schmerzen zuhause ausreichend behandeln?', a: 'Ja — mit SAPV ist Schmerztherapie auf Krankenhausniveau zuhause möglich. Morphin und andere starke Schmerzmittel sind bei ärztlicher Verordnung zuhause legal und sicher anwendbar.' },
                { q: 'Wer unterstützt Angehörige in der Palliativphase?', a: 'SAPV-Team, Hospizbegleiter (kostenlos), psychologische Trauerbegleitung, Betreuungskraft die praktische Aufgaben übernimmt. Pflegeunterstützungsgeld bei Freistellung vom Beruf.' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="palliativpflege-zuhause" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
