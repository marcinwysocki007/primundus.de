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
  { id: 'pflege-auf-dem-land', title: "Pflege auf dem Land: Warum Bleiben hier die bessere Lösung ist" },
  { id: 'unser-einsatzgebiet-im-kreis', title: "Unser Einsatzgebiet im Kreis Alzey-Worms" },
  { id: 'was-kostet-das-und', title: "Was kostet das — und was zahlt die Pflegekasse dazu?" },
  { id: 'polnische-betreuungskraefte-im-kreis', title: "Polnische Betreuungskräfte im Kreis Alzey-Worms" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause in Kreis Alzey-Worms ausmacht" },
  { id: 'einzugsgebiet-landkreis-alzey-worms', title: "Einzugsgebiet Landkreis Alzey-Worms" },
  { id: 'werkzeuge', title: "Was es in Kreis Alzey-Worms kostet, und was die Pflegekasse dazugibt" },
  { id: 'stimmen-vor-ort', title: "Familien aus der Region über uns" },
  { id: 'haeufige-fragen-aus-der', title: "Häufige Fragen aus der Region" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Kreis Alzey-Worms: zu Hause statt Heim',
  description:
    'Körperpflege, Kochen, Einkäufe, Begleitung, nachts jemand im Haus: Eine Betreuungskraft übernimmt das, was Angehörige allein nicht mehr schaffen.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-alzey-worms' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege im Kreis Alzey-Worms — Betreuung zuhause | Primundus',
    description: 'Geprüfte 24h-Betreuungskraft in Alzey-Worms. Täglich kündbar, rechtssicher, startklar.',
    url: 'https://primundus.de/24h-pflege-alzey-worms',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-alzey-worms#service',
    name: 'Primundus — 24h-Pflege Landkreis Alzey-Worms',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte im Landkreis Alzey-Worms. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-alzey-worms',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'AdministrativeArea', name: 'Landkreis Alzey-Worms' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24h-Pflege Alzey-Worms', item: 'https://primundus.de/24h-pflege-alzey-worms' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was kostet eine 24h-Pflegekraft im Kreis Alzey-Worms?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ab 2.150 Euro im Monat, je nach Pflegesituation. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei Pflegegrad 3 ab ca. 923 Euro selbst zu tragen — deutlich weniger als ein Heimplatz in Rheinhessen.',
        },
      },
      {
        '@type': 'Question',
        name: 'In welchen Orten des Kreises Alzey-Worms ist Primundus tätig?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Im gesamten Landkreis — unter anderem in Alzey, Wörrstadt, Osthofen, Westhofen, Gau-Odernheim, Wonsheim und allen umliegenden Gemeinden. Auch Worms und Mainz sind über eigene Seiten abgedeckt.',
        },
      },
      {
        '@type': 'Question',
        name: 'Wie schnell kann die Betreuung in Alzey-Worms starten?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Eine Anreise ist in 3 Tagen möglich. Preis und passende Betreuungskräfte sehen Sie sofort online, Bewerbungen kommen am selben Werktag.',
        },
      },
    ],
  },
]

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft im Kreis Alzey-Worms?', a: 'Ab 2.150 Euro im Monat, je nach Pflegesituation. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei Pflegegrad 3 ab ca. 923 Euro selbst zu tragen — deutlich weniger als ein Heimplatz in Rheinhessen.' },
  { q: 'In welchen Orten des Kreises Alzey-Worms ist Primundus tätig?', a: 'Im gesamten Landkreis — unter anderem in Alzey, Wörrstadt, Osthofen, Westhofen, Gau-Odernheim, Wonsheim und allen umliegenden Gemeinden. Auch Worms und Mainz sind über eigene Seiten abgedeckt.' },
  { q: 'Wie schnell kann die Betreuung in Alzey-Worms starten?', a: 'Eine Anreise ist in 3 Tagen möglich. Preis und passende Betreuungskräfte sehen Sie sofort online, Bewerbungen kommen am selben Werktag.' },
  { q: 'Ist in einer Wohnung in Kreis Alzey-Worms Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Kreis Alzey-Worms hat im Schnitt 117,4 m², 9,2 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 92,0 % der Gebäude in Kreis Alzey-Worms sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Rheinland-Pfalz zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.220 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause bleiben bei Pflegegrad 3 ab ca. 923 € — nach Pflegegeld, anteiligem Entlastungsbudget und Steuerermäßigung. Das sind rund 2.297 € Unterschied im Monat, 27.564 € im Jahr.' },
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
            { label: 'Landkreis Alzey-Worms' },
          ]}
          augenbraue="24-Stunden-Pflege in Landkreis Alzey-Worms"
          titel="24h-Pflege im Kreis Alzey-Worms — Betreuung im eigenen Zuhause"
          einleitung={<>Zwischen Alzey und dem Rhein leben viele Familien seit Generationen im eigenen Haus — mit Garten, Weinbergen vor der Tür und Nachbarn, die man beim Namen kennt. Wenn die Eltern Hilfe brauchen, soll genau das nicht verloren gehen. Eine Betreuungskraft von Primundus zieht mit ein und ist bei Bedarf auch nachts da: in Alzey, Wörrstadt, Osthofen und im ganzen Landkreis. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>}
          aktualisiert="28. August 2026"
          lesezeit="6 Min."
          blick={[
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich',
          ]}
          blickTitel="Landkreis Alzey-Worms auf einen Blick"
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="pflege-auf-dem-land" titel="Pflege auf dem Land: Warum Bleiben hier die bessere Lösung ist">
            <Text>Der Landkreis Alzey-Worms ist ländlich geprägt — und genau das macht den Umzug ins Heim oft besonders schwer: Das nächste Pflegeheim mit freiem Platz liegt schnell eine halbe Stunde entfernt, Besuche werden zur Tagesreise, und das vertraute Dorf fällt von einem Tag auf den anderen weg. Die 24h-Betreuung dreht das um: Nicht Ihre Mutter zieht zur Pflege — die Pflege zieht zu ihr.</Text>
            <Punkte
              punkte={[
                { title: 'Haus & Garten bleiben', desc: 'Kein Verkauf, kein Auflösen des Elternhauses' },
                { title: 'Vertrautes Umfeld', desc: 'Dorfgemeinschaft, Kirche, Nachbarn — alles bleibt' },
                { title: 'Familie in der Nähe', desc: 'Besuch ohne lange Wege — spontan vorbeikommen' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="unser-einsatzgebiet-im-kreis" titel="Unser Einsatzgebiet im Kreis Alzey-Worms">
            <Text>Wir sind im gesamten Landkreis im Einsatz: in <strong>Alzey</strong> und <strong> Wörrstadt</strong> genauso wie in <strong>Osthofen</strong>, <strong>Westhofen</strong>, <strong> Gau-Odernheim</strong>, <strong>Flonheim</strong>, <strong>Wöllstein</strong> und den kleineren Gemeinden dazwischen. Auch wenn Ihr Ort hier nicht steht: Rheinhessen ist unser Einsatzgebiet — fragen Sie einfach an. Für die Nachbarstädte gibt es eigene Seiten:{' '} <a href="/24h-pflege-worms" className="text-pm-taupe underline underline-offset-2">Worms</a> und{' '} <a href="/24h-pflege-mainz" className="text-pm-taupe underline underline-offset-2">Mainz</a>.</Text>
          </Abschnitt>

          <Abschnitt id="was-kostet-das-und" titel="Was kostet das — und was zahlt die Pflegekasse dazu?">
            <Text>Eine 24h-Betreuung kostet über Primundus <strong>ab 2.150 Euro im Monat</strong> — je nachdem, ob eine oder zwei Personen betreut werden, wie mobil Ihre Angehörigen sind und ob nachts Hilfe nötig ist. Die Pflegekasse zahlt kräftig mit: Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei Pflegegrad 3{' '}<strong>ab ca. 923 Euro</strong>{' '} im Monat selbst zu tragen. Zum Vergleich: Ein Heimplatz in Rheinland-Pfalz kostet im Schnitt rund 3.364 Euro Eigenanteil — ohne dass jemand rund um die Uhr nur für Ihre Mutter da wäre.</Text>
            <RechnerKasten src="ort-alzey-worms" />
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-im-kreis" titel="Polnische Betreuungskräfte im Kreis Alzey-Worms">
            <Text>Wer im Kreis Alzey-Worms nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Sie kommen aus Polen und sind im gesamten Kreisgebiet im Einsatz.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Der Kostenvergleich fällt im Kreis Alzey-Worms deutlich aus: Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro Eigenanteil. Ein Heimplatz kostet in Rheinland-Pfalz im ersten Jahr im Schnitt rund 3.220 Euro im Monat — und die vertraute Wohnung bleibt dabei auf der Strecke.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Pflegekraft aus Polen — Kosten, Recht und Ablauf</a>.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause in Kreis Alzey-Worms ausmacht">
            <Text>Knapp zwei von drei Haushalten in Kreis Alzey-Worms wohnen im Eigentum — in Rheinland-Pfalz sind es 54,4 Prozent. Wer im eigenen Haus lebt, entscheidet über ein freies Zimmer selbst und muss niemanden fragen. Die durchschnittliche Wohnung misst 117,4 Quadratmeter und damit rund 10 Quadratmeter mehr als im Schnitt von Rheinland-Pfalz (107,7).</Text>
            <Text>Nur 16,9 Prozent der Wohnungen stammen aus den Jahren 1950 bis 1969, in Rheinland-Pfalz sind es 25,9 Prozent. 33,8 Prozent der Haushalte bestehen aus einer Person, in Rheinland-Pfalz 40,4 Prozent.</Text>
            <Text>Beim Platz steht Kreis Alzey-Worms besser da als das Land: Nur 9,2 Prozent der Wohnungen liegen unter 60 Quadratmetern, in Rheinland-Pfalz sind es 15,4 Prozent. Das Zimmer für eine Betreuungskraft ist hier meist schon vorhanden. Gemessen am Landesschnitt ist Kreis Alzey-Worms jünger — 9,2 Prozent der Einwohner sind 75 oder älter — das sind 11.945 Menschen, in Rheinland-Pfalz 10,7 Prozent. Das heißt nicht, dass weniger Pflege gebraucht wird: Der Anteil ist niedrig, die absolute Zahl bleibt.</Text>
            <Text>In Zahlen: 11.945 Menschen in Kreis Alzey-Worms sind 75 Jahre oder älter, und es gibt 61.870 Wohnungen in 43.077 Gebäuden. Ob darunter eine ist, in der eine Betreuungskraft ein eigenes Zimmer bekommt, entscheidet sich nicht an der Statistik, sondern an Ihrem Grundriss — und das klären wir vorab.</Text>
            <Text>Was davon auf Ihre Situation zutrifft, klären wir vor jeder Entscheidung — insbesondere die Frage nach dem eigenen Zimmer für die Betreuungskraft. Und lassen Sie sich unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos, trägerunabhängig und kommt auf Wunsch zu Ihnen nach Hause.</Text>
            <p className="text-[15px] leading-[1.6] text-pm-body/70">Zahlen zu Wohnen und Haushalten: Zensus 2022, Statistische Ämter des Bundes und der Länder, Stichtag 15. Mai 2022.</p>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-landkreis-alzey-worms" titel="Einzugsgebiet Landkreis Alzey-Worms">
            <NearbyCities current="alzey-worms" />
          </Abschnitt>

          <OrtWerkzeuge ort={'Kreis Alzey-Worms'} land={'Rheinland-Pfalz'} altbau={39.6} miete={6.52} />


          <OrtStimmen


            ort={'Kreis Alzey-Worms'}


            herkunft="umgebung"


            stimmen={DIREKT_ERHALTEN.filter((b) => ['k-20260802-karin', 'k-20251031-martina'].includes(b.id))}


          />



          <Abschnitt id="haeufige-fragen-aus-der" titel="Häufige Fragen aus der Region">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
