import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, Fragen, Gruppen, HakenListe, Kasten, MehrDazu, RatgeberKopf, RatgeberRumpf, Text,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('hausnotruf-senioren', '25. April 2026')

const SECTIONS = [
  { id: 'was-ist', title: 'Was ist ein Hausnotruf?' },
  { id: 'arten', title: 'Arten von Hausnotruf-Systemen' },
  { id: 'kosten', title: 'Kosten & Kassenzuschuss' },
  { id: 'wann-sinnvoll', title: 'Wann ist ein Hausnotruf sinnvoll?' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Hausnotruf für Senioren — Kosten, Kassenzuschuss & Auswahl 2026 | Primundus',
  description: 'Hausnotruf für Senioren: Kosten ab 20 €/Monat, Kassenzuschuss möglich. Was ein Hausnotruf leistet, welche Systeme es gibt und wann er sinnvoll ist.',
  alternates: { canonical: 'https://primundus.de/hausnotruf-senioren' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Hausnotruf für Senioren 2026 | Primundus',
    description: 'Hausnotruf: Kosten, Kassenzuschuss und welche Systeme für wen geeignet sind.',
    url: 'https://primundus.de/hausnotruf-senioren',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Hausnotruf für Senioren — Kosten, Kassenzuschuss und Auswahl 2026',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/hausnotruf-senioren',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Alltag & Angehörige', item: 'https://primundus.de/alltag' },
      { '@type': 'ListItem', position: 3, name: 'Hausnotruf Senioren', item: 'https://primundus.de/hausnotruf-senioren' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was kostet ein Hausnotruf?', acceptedAnswer: { '@type': 'Answer', text: 'Ein klassischer Hausnotruf kostet typischerweise 20–50 € pro Monat (Anschluss + monatliche Grundgebühr). Mobilfunk-Hausnotruf (auch außerhalb der Wohnung nutzbar) kostet 30–80 €/Monat. Die Pflegekasse zahlt als Pflegehilfsmittel ab Pflegegrad 1 bis zu 25,50 € im Monat dazu.' } },
      { '@type': 'Question', name: 'Zahlt die Krankenkasse oder Pflegekasse den Hausnotruf?', acceptedAnswer: { '@type': 'Answer', text: 'Der Hausnotruf ist ein Pflegehilfsmittel: Ab Pflegegrad 1 übernimmt die Pflegekasse bis zu 25,50 € im Monat, wenn der Anbieter einen Vertrag mit der Pflegekasse hat. Bei manchen Pflegekassen ist auch eine direkte Kostenübernahme über den Anbieter möglich.' } },
    ],
  },
]

export default function HausnotrufSenioren() {
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
            { label: "Hausnotruf Senioren" },
          ]}
          augenbraue="Ratgeber Sicherheit"
          titel="Hausnotruf für Senioren — Kosten, Zuschuss & Auswahl"
          einleitung="Ein Hausnotruf gibt Senioren und Angehörigen Sicherheit — rund um die Uhr, auf Knopfdruck. Ab ca. 20 Euro pro Monat. Die Pflegekasse übernimmt ab Pflegegrad 1 bis zu 25,50 € im Monat. Und mit einer 24h-Betreuungskraft ist die direkte menschliche Hilfe im Notfall ohnehin im Haus."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="5 Min."
          blick={[
                'Klassischer Hausnotruf: 20–50 €/Monat — Knopf am Handgelenk oder als Anhänger',
                'Mobilfunk-Notruf: 30–80 €/Monat — auch außerhalb der Wohnung nutzbar',
                'GPS-Tracker: 30–80 €/Monat — besonders bei Demenz und Weglaufen wichtig',
                'Finanzierung: Pflegekasse zahlt ab Pflegegrad 1 bis zu 25,50 €/Monat (Pflegehilfsmittel)',
                'Mit 24h-Betreuungskraft: Kraft wohnt im Haus — Notruf als zusätzliche Absicherung',
                'Anbieter: DRK, Malteser, Johanniter, DUSSMANN, viele weitere',
              ]}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist" titel="Was ist ein Hausnotruf?">
            <Text>
              Ein Hausnotruf ist ein elektronisches System das es Senioren ermöglicht, im Notfall mit einem Knopfdruck Hilfe zu rufen. Der klassische Hausnotruf besteht aus einer Basisstation (am Festnetz oder per Mobilfunk) und einem Funksender als Armband oder Anhänger. Beim Drücken des Knopfes wird automatisch eine Notrufleitstelle kontaktiert.
            </Text>
            <Text>
              Die Leitstelle klärt zunächst per Mikrofon die Situation — und alarmiert dann je nach Bedarf Angehörige, den Rettungsdienst oder einen lokalen Ersthelfer. Das System funktioniert 24 Stunden am Tag, 7 Tage/Woche, auch wenn der Nutzer bewusstlos ist (automatische Sturzerkennung bei modernen Systemen).
            </Text>
          </Abschnitt>

          <Abschnitt id="arten" titel="Arten von Hausnotruf-Systemen">
            <Gruppen
              gruppen={[
                { title: 'Klassischer Hausnotruf (Festnetz/Mobilfunk)', zusatz: '20–50 €/Monat', punkte: [<><strong>Für wen:</strong> Senioren die hauptsächlich in der Wohnung sind</>, 'Funksender als Armband/Anhänger verbindet sich mit Basisstation. Funktioniert nur in Reichweite der Basisstation (typisch 50–80 m).'] },
                { title: 'Mobilfunk-Notruf (außer Haus nutzbar)', zusatz: '30–80 €/Monat', punkte: [<><strong>Für wen:</strong> Senioren die noch nach draußen gehen</>, 'Gerät mit eigenem Mobilfunk — funktioniert überall in Deutschland wo Empfang ist. Häufig mit GPS-Ortung kombiniert.'] },
                { title: 'GPS-Tracker (besonders bei Demenz)', zusatz: '30–80 €/Monat', punkte: [<><strong>Für wen:</strong> Menschen mit Demenz und Weglauf-Tendenz</>, 'Kleines Gerät (als Uhr, im Schuh, am Gürtel) ermöglicht Ortung jederzeit. Angehörige können Standort per App verfolgen.'] },
                { title: 'Smarte Pflaster/Wearables', zusatz: '40–100 €/Monat', punkte: [<><strong>Für wen:</strong> Hohes Sturzrisiko, Herzpatienten</>, 'Automatische Sturzerkennung, Herzfrequenzüberwachung, automatischer Notruf ohne Knopfdruck.'] },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="kosten" titel="Kosten & Kassenzuschuss">
            <Text>
              Ein Hausnotruf kostet typischerweise eine einmalige Anschlussgebühr (20–80 €) plus eine monatliche Grundgebühr (15–50 €). Viele Anbieter ohne Anschlussgebühr möglich.
            </Text>
            <Kasten titel="Kassenzuschuss: Hausnotruf als Pflegehilfsmittel" ton="gruen">
              <Text>Der Hausnotruf ist ein Pflegehilfsmittel: Ab Pflegegrad 1 übernimmt die Pflegekasse bis zu 25,50 € im Monat, wenn der Anbieter einen Vertrag mit der Pflegekasse hat. Welche Anbieter das sind, sagt die Pflegekasse.</Text>
            </Kasten>
            <MehrDazu
              label="Entlastungsbetrag richtig nutzen:"
              links={[{ href: "/entlastungsbetrag", text: "Entlastungsbetrag 2026 — 131 €/Monat" }]}
            />
          </Abschnitt>

          <Abschnitt id="wann-sinnvoll" titel="Wann ist ein Hausnotruf sinnvoll?">
            <Text>
              Ein Hausnotruf ist besonders empfehlenswert wenn:
            </Text>
            <HakenListe punkte={[
              'Erhöhtes Sturzrisiko durch eingeschränkte Mobilität oder Gleichgewichtsprobleme',
              'Herzerkrankungen oder andere akute Erkrankungen bei denen schnelle Hilfe entscheidend ist',
              'Der Senior zeitweise allein ist und Angehörige nicht sofort erreichbar sind',
              'Demenz ohne GPS-Tracking: GPS-Variante für Sicherheit beim Weglaufen',
              'Überbrückung bis zur Betreuungskraft — oder als ergänzende Sicherheit bei 24h-Pflege',
            ]} />
            <Kasten titel="Mit 24h-Betreuungskraft — Hausnotruf als zusätzliche Absicherung">
              <Text>Wenn eine 24h-Betreuungskraft dauerhaft im Haushalt lebt, ist menschliche Hilfe direkt im Haus. Ein zusätzlicher Hausnotruf kann trotzdem sinnvoll sein — als Absicherung für Momente wenn die Kraft kurz abwesend ist oder als Notfallweg direkt zum Rettungsdienst.</Text>
            </Kasten>
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen">
            <Fragen
              fragen={[
                { q: 'Was kostet ein Hausnotruf?', a: 'Klassischer Hausnotruf: 20–50 €/Monat. Mobilfunk-Notruf mit GPS: 30–80 €/Monat. Einmalige Anschlussgebühr 20–80 € (viele Anbieter ohne). Die Pflegekasse übernimmt ab Pflegegrad 1 bis zu 25,50 € im Monat.' },
                { q: 'Zahlt die Pflegekasse den Hausnotruf?', a: 'Ja — der Hausnotruf ist ein Pflegehilfsmittel. Ab Pflegegrad 1 übernimmt die Pflegekasse bis zu 25,50 € im Monat, wenn der Anbieter einen Vertrag mit der Pflegekasse hat.' },
                { q: 'Was ist der Unterschied zwischen Hausnotruf und GPS-Tracker?', a: 'Hausnotruf: Knopfdruck löst Notruf aus, funktioniert klassisch nur in der Wohnung. GPS-Tracker: Echtzeit-Ortung jederzeit, besonders für Demenzkranke mit Weglauftendenz.' },
                { q: 'Ist ein Hausnotruf bei 24h-Pflege noch nötig?', a: 'Nicht zwingend — aber als zusätzliche Absicherung sinnvoll. Die 24h-Betreuungskraft wohnt mit im Haus. Ein Notruf-System gibt zusätzliche Sicherheit für Momente wenn die Kraft kurz abwesend ist.' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="hausnotruf-senioren" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
