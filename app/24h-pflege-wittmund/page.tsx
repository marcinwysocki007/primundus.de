import type { Metadata } from 'next'
import { OrtStimmen } from '@/components/orte/OrtStimmen'
import { DIREKT_ERHALTEN } from '@/lib/bewertungen-direkt'
import { KontaktBand } from '@/components/ArticleCTA'
import { NearbyCities } from '@/components/NearbyCities'
import { OrtWerkzeuge } from '@/components/orte/OrtWerkzeuge'
import {
  Abschnitt, Fragen, Gegenueber, Kasten, Punkte, RatgeberKopf, RatgeberRumpf, RechnerKasten, Schritte, Tabelle, Text,
} from '@/components/vorlage/Ratgeber'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).

const SECTIONS = [
  { id: 'pflege-in-ostfriesland-weite', title: "Pflege in Ostfriesland: Weite Wege, knappe Plätze — und eine bessere Lösung" },
  { id: 'unser-einsatzgebiet-im-landkreis', title: "Unser Einsatzgebiet im Landkreis Wittmund" },
  { id: 'was-kostet-das-und', title: "Was kostet das — und was zahlt die Pflegekasse dazu?" },
  { id: 'polnische-betreuungskraefte-in-wittmund', title: "Polnische Betreuungskräfte in Wittmund" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause in Wittmund ausmacht" },
  { id: 'einzugsgebiet-landkreis-wittmund', title: "Einzugsgebiet Landkreis Wittmund" },
  { id: 'werkzeuge', title: "Was es in Wittmund kostet, und was die Pflegekasse dazugibt" },
  { id: 'stimmen-vor-ort', title: "Familien aus der Region über uns" },
  { id: 'haeufige-fragen-aus-dem', title: "Häufige Fragen aus dem Harlingerland" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Wittmund: zu Hause bleiben statt Heim',
  description:
    'Körperpflege, Kochen, Einkäufe, Begleitung, nachts jemand im Haus: Eine Betreuungskraft übernimmt das, was Angehörige allein nicht mehr schaffen.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-wittmund' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege in Wittmund & Harlingerland | Primundus',
    description: 'Geprüfte 24h-Betreuungskraft im Kreis Wittmund. Täglich kündbar, rechtssicher, startklar.',
    url: 'https://primundus.de/24h-pflege-wittmund',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-wittmund#service',
    name: 'Primundus — 24h-Pflege Wittmund',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte im Landkreis Wittmund. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-wittmund',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'AdministrativeArea', name: 'Landkreis Wittmund' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24h-Pflege Wittmund', item: 'https://primundus.de/24h-pflege-wittmund' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was kostet eine 24h-Pflegekraft in Wittmund?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ab 2.150 Euro im Monat, je nach Pflegesituation. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei Pflegegrad 3 ab ca. 923 Euro selbst zu tragen.',
        },
      },
      {
        '@type': 'Question',
        name: 'Welche Orte im Kreis Wittmund deckt Primundus ab?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Das ganze Harlingerland: Wittmund, Esens, Carolinensiel, Harlesiel, Neuharlingersiel, Westerholt, Friedeburg und alle Dörfer dazwischen — bis an die Küste.',
        },
      },
      {
        '@type': 'Question',
        name: 'Lohnt sich 24h-Pflege auch auf dem Land in Ostfriesland?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Gerade dort: Heimplätze sind rar und weit entfernt, ambulante Dienste haben lange Anfahrten. Eine Betreuungskraft, die mit im Haus wohnt, macht Wege überflüssig — und das Zuhause bleibt erhalten.',
        },
      },
    ],
  },
]

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Wittmund?', a: 'Ab 2.150 Euro im Monat, je nach Pflegesituation. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei Pflegegrad 3 ab ca. 923 Euro selbst zu tragen.' },
  { q: 'Welche Orte im Kreis Wittmund deckt Primundus ab?', a: 'Das ganze Harlingerland: Wittmund, Esens, Carolinensiel, Harlesiel, Neuharlingersiel, Westerholt, Friedeburg und alle Dörfer dazwischen — bis an die Küste.' },
  { q: 'Lohnt sich 24h-Pflege auch auf dem Land in Ostfriesland?', a: 'Gerade dort: Heimplätze sind rar und weit entfernt, ambulante Dienste haben lange Anfahrten. Eine Betreuungskraft, die mit im Haus wohnt, macht Wege überflüssig — und das Zuhause bleibt erhalten.' },
  { q: 'Ist in einer Wohnung in Wittmund Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Wittmund hat im Schnitt 106,9 m², 15,5 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 90,3 % der Wohnungen in Wittmund liegen in Ein- oder Zweifamilienhäusern; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Niedersachsen zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.010 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause bleiben bei Pflegegrad 3 ab ca. 923 € — nach Pflegegeld, anteiligem Entlastungsbudget und Steuerermäßigung. Das sind rund 2.087 € Unterschied im Monat, 25.044 € im Jahr.' },
]

export default function Page() {
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
            { label: 'Regionen', href: '/regionen' },
            { label: 'Landkreis Wittmund' },
          ]}
          augenbraue="24-Stunden-Pflege in Landkreis Wittmund"
          titel="24h-Pflege in Wittmund und dem Harlingerland — Betreuung im eigenen Zuhause"
          einleitung={<>Wer zwischen Wittmund, Esens und der Küste zuhause ist, hat meist ein Haus mit Geschichte — und keinen Grund, es im Alter zu verlassen. Doch Heimplätze sind hier rar, und der nächste Pflegedienst fährt weit. Die Lösung wohnt mit ein: Eine Betreuungskraft von Primundus ist bei Bedarf auch nachts da, im vertrauten Zuhause hinterm Deich. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>}
          aktualisiert="28. August 2026"
          lesezeit="6 Min."
          blick={[
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich',
          ]}
          blickTitel="Landkreis Wittmund auf einen Blick"
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="pflege-in-ostfriesland-weite" titel="Pflege in Ostfriesland: Weite Wege, knappe Plätze — und eine bessere Lösung">
            <Text>Im Harlingerland ist Pflege vor allem eine Frage der Entfernung: Die Kinder wohnen oft in Oldenburg, Bremen oder noch weiter — und ein Heimplatz bedeutet für Besucher jedes Mal eine halbe Tagesreise. Eine Betreuungskraft, die mit im Haus lebt, dreht das um: Die Hilfe ist immer da, die Familie kommt zu Besuch wie früher, und das Zuhause bleibt der Mittelpunkt.</Text>
            <Punkte
              punkte={[
                { title: 'Das Haus bleibt', desc: 'Kein Verkauf, keine Auflösung nach Generationen' },
                { title: 'Küste & Dorf vertraut', desc: 'Deich, Nachbarn, Teezeit — alles wie gewohnt' },
                { title: 'Keine weiten Wege mehr', desc: 'Die Hilfe wohnt im Haus, nicht 40 km entfernt' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="unser-einsatzgebiet-im-landkreis" titel="Unser Einsatzgebiet im Landkreis Wittmund">
            <Text>Wir sind im ganzen Harlingerland im Einsatz: <strong>Wittmund</strong>, <strong>Esens</strong>,{' '} <strong>Carolinensiel</strong> und <strong>Harlesiel</strong>, <strong>Neuharlingersiel</strong>,{' '} <strong>Westerholt</strong>, <strong>Friedeburg</strong> und allen Dörfern dazwischen — bis an die Nordseeküste. Auch{' '} <a href="/24h-pflege-oldenburg" className="text-pm-taupe underline underline-offset-2">Oldenburg</a>{' '} und <a href="/24h-pflege-bremerhaven" className="text-pm-taupe underline underline-offset-2">Bremerhaven</a>{' '} haben eigene Seiten.</Text>
          </Abschnitt>

          <Abschnitt id="was-kostet-das-und" titel="Was kostet das — und was zahlt die Pflegekasse dazu?">
            <Text>Eine 24h-Betreuung kostet über Primundus <strong>ab 2.150 Euro im Monat</strong>. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei Pflegegrad 3{' '}<strong>ab ca. 923 Euro</strong> selbst zu tragen — und anders als beim Heimplatz bleibt das Haus im Familienbesitz.</Text>
            <RechnerKasten src="ort-wittmund" />
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-in-wittmund" titel="Polnische Betreuungskräfte in Wittmund">
            <Text>Wer in Wittmund nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Sie kommen aus Polen und sind in Wittmund und im gesamten Umland im Einsatz.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Der Kostenvergleich fällt in Wittmund deutlich aus: Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro Eigenanteil. Ein Heimplatz kostet in Niedersachsen im ersten Jahr im Schnitt rund 3.010 Euro im Monat — und die vertraute Wohnung bleibt dabei auf der Strecke.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Pflegekraft aus Polen — Kosten, Recht und Ablauf</a>.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause in Wittmund ausmacht">
            <Text>Gut drei von fünf Haushalten in Wittmund wohnen im Eigentum — in Niedersachsen sind es 51,1 Prozent. Wer im eigenen Haus lebt, entscheidet über ein freies Zimmer selbst und muss niemanden fragen. 28,7 Prozent der Haushalte in Wittmund bestehen nur aus Menschen ab 65 — in Niedersachsen 25,0 Prozent. Wenn dort nachts etwas passiert, ist niemand da, der es mitbekommt. Das ist der Fall, für den eine Betreuungskraft im Haushalt gedacht ist.</Text>
            <Text>Reihenhäuser sind in Wittmund mit 4,4 Prozent seltener als in Niedersachsen (12,9 Prozent). 5,2 Prozent der Wohnungen stehen leer, in Niedersachsen 4,0 Prozent. Wo ein Zimmer fehlt, ist eine größere Wohnung hier eher zu finden als anderswo.</Text>
            <Text>In Zahlen: 6.648 Menschen in Wittmund sind 75 Jahre oder älter, und es gibt 31.761 Wohnungen in 23.407 Gebäuden. Ob darunter eine ist, in der eine Betreuungskraft ein eigenes Zimmer bekommt, entscheidet sich nicht an der Statistik, sondern an Ihrem Grundriss — und das klären wir vorab.</Text>
            <Text>Was davon auf Ihre Situation zutrifft, klären wir vor jeder Entscheidung — insbesondere die Frage nach dem eigenen Zimmer für die Betreuungskraft. Und lassen Sie sich unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos, trägerunabhängig und kommt auf Wunsch zu Ihnen nach Hause.</Text>
            <p className="text-[15px] leading-[1.6] text-pm-body/70">Zahlen zu Wohnen und Haushalten: Zensus 2022, Statistische Ämter des Bundes und der Länder, Stichtag 15. Mai 2022.</p>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-landkreis-wittmund" titel="Einzugsgebiet Landkreis Wittmund">
            <NearbyCities current="wittmund" />
          </Abschnitt>

          <OrtWerkzeuge ort={'Wittmund'} land={'Niedersachsen'} altbau={40.3} miete={6.35} />


          <OrtStimmen


            ort={'Wittmund'}


            herkunft="umgebung"


            stimmen={DIREKT_ERHALTEN.filter((b) => ['k-20260706-stefan', 'k-20260403-heike'].includes(b.id))}


          />



          <Abschnitt id="haeufige-fragen-aus-dem" titel="Häufige Fragen aus dem Harlingerland">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
