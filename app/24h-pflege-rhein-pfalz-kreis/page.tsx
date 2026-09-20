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
  { id: 'pflege-in-der-vorderpfalz', title: "Pflege in der Vorderpfalz: Nah an allem — und trotzdem zuhause" },
  { id: 'unser-einsatzgebiet-im-rhein', title: "Unser Einsatzgebiet im Rhein-Pfalz-Kreis" },
  { id: 'was-kostet-das-und', title: "Was kostet das — und was zahlt die Pflegekasse dazu?" },
  { id: 'polnische-betreuungskraefte-im-rhein', title: "Polnische Betreuungskräfte im Rhein-Pfalz-Kreis" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause in Rhein-Pfalz-Kreis ausmacht" },
  { id: 'einzugsgebiet-rhein-pfalz-kreis', title: "Einzugsgebiet Rhein-Pfalz-Kreis" },
  { id: 'werkzeuge', title: "Was es in Rhein-Pfalz-Kreis kostet, und was die Pflegekasse dazugibt" },
  { id: 'stimmen-vor-ort', title: "Familien aus der Region über uns" },
  { id: 'haeufige-fragen-aus-der', title: "Häufige Fragen aus der Region" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Rhein-Pfalz-Kreis ab 2.150 € im Monat',
  description:
    'Zu Hause bleiben statt ins Heim: In Rhein-Pfalz-Kreis zieht eine Betreuungskraft ein, hilft im Alltag und ist bei Bedarf auch nachts da. Ab 2.150 € im Monat.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-rhein-pfalz-kreis' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege im Rhein-Pfalz-Kreis | Primundus',
    description: 'Geprüfte 24h-Betreuungskraft im Rhein-Pfalz-Kreis. Täglich kündbar, rechtssicher, startklar.',
    url: 'https://primundus.de/24h-pflege-rhein-pfalz-kreis',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-rhein-pfalz-kreis#service',
    name: 'Primundus — 24h-Pflege Rhein-Pfalz-Kreis',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte im Rhein-Pfalz-Kreis. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-rhein-pfalz-kreis',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'AdministrativeArea', name: 'Rhein-Pfalz-Kreis' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24h-Pflege Rhein-Pfalz-Kreis', item: 'https://primundus.de/24h-pflege-rhein-pfalz-kreis' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was kostet eine 24h-Pflegekraft im Rhein-Pfalz-Kreis?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ab 2.150 Euro im Monat, je nach Pflegesituation. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei Pflegegrad 3 ab ca. 923 Euro selbst zu tragen.',
        },
      },
      {
        '@type': 'Question',
        name: 'Welche Orte im Rhein-Pfalz-Kreis deckt Primundus ab?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Den ganzen Kreis rund um Ludwigshafen: Schifferstadt, Limburgerhof, Mutterstadt, Maxdorf, Böhl-Iggelheim, Dudenhofen, Römerberg, Altrip und alle weiteren Gemeinden der Vorderpfalz.',
        },
      },
      {
        '@type': 'Question',
        name: 'Wie schnell kann die Betreuung in der Vorderpfalz starten?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Eine Anreise ist in 3 Tagen möglich. Preis und passende Betreuungskräfte sehen Sie sofort online, Bewerbungen kommen am selben Werktag.',
        },
      },
    ],
  },
]

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft im Rhein-Pfalz-Kreis?', a: 'Ab 2.150 Euro im Monat, je nach Pflegesituation. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei Pflegegrad 3 ab ca. 923 Euro selbst zu tragen.' },
  { q: 'Welche Orte im Rhein-Pfalz-Kreis deckt Primundus ab?', a: 'Den ganzen Kreis rund um Ludwigshafen: Schifferstadt, Limburgerhof, Mutterstadt, Maxdorf, Böhl-Iggelheim, Dudenhofen, Römerberg, Altrip und alle weiteren Gemeinden der Vorderpfalz.' },
  { q: 'Wie schnell kann die Betreuung in der Vorderpfalz starten?', a: 'Eine Anreise ist in 3 Tagen möglich. Preis und passende Betreuungskräfte sehen Sie sofort online, Bewerbungen kommen am selben Werktag.' },
  { q: 'Ist in einer Wohnung in Rhein-Pfalz-Kreis Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Rhein-Pfalz-Kreis hat im Schnitt 115,1 m², 8,6 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 90,0 % der Wohnungen in Rhein-Pfalz-Kreis liegen in Ein- oder Zweifamilienhäusern; dort bietet sich oft eine ganze Etage an.' },
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
            { label: 'Rhein-Pfalz-Kreis' },
          ]}
          augenbraue="24-Stunden-Pflege in Rhein-Pfalz-Kreis"
          titel="24h-Pflege im Rhein-Pfalz-Kreis — Betreuung im eigenen Zuhause"
          einleitung={<>Im Gemüsegarten Deutschlands wohnt man bodenständig: das Haus in Schifferstadt oder Mutterstadt, der Garten in Limburgerhof, die Felder vor der Tür. Viele haben ein Leben lang bei der BASF gearbeitet und möchten ihren Ruhestand genau hier verbringen — nicht im Heim. Eine Betreuungskraft von Primundus zieht mit ein und ist bei Bedarf auch nachts da. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>}
          aktualisiert="28. August 2026"
          lesezeit="6 Min."
          blick={[
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich',
          ]}
          blickTitel="Rhein-Pfalz-Kreis auf einen Blick"
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="pflege-in-der-vorderpfalz" titel="Pflege in der Vorderpfalz: Nah an allem — und trotzdem zuhause">
            <Text>Der Rhein-Pfalz-Kreis liegt zwischen Ludwigshafen, Speyer und den Weindörfern — die Kinder arbeiten oft in Mannheim oder bei der BASF, die Eltern wohnen im Eigenheim ein paar Orte weiter. Wenn plötzlich mehr Hilfe nötig ist, scheitert der Alltag selten an der Entfernung, sondern an der Zeit. Eine Betreuungskraft, die mit im Haus wohnt, löst genau das.</Text>
            <Punkte
              punkte={[
                { title: 'Eigenheim bleibt', desc: 'Haus und Garten müssen nicht aufgegeben werden' },
                { title: 'Vertraute Dörfer', desc: 'Bäcker, Verein, Nachbarschaft — alles bleibt' },
                { title: 'Nachts abgesichert', desc: 'Jemand ist da, wenn etwas passiert' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="unser-einsatzgebiet-im-rhein" titel="Unser Einsatzgebiet im Rhein-Pfalz-Kreis">
            <Text>Wir sind im gesamten Kreis im Einsatz: <strong>Schifferstadt</strong>, <strong>Limburgerhof</strong>,{' '} <strong>Mutterstadt</strong>, <strong>Maxdorf</strong>, <strong>Böhl-Iggelheim</strong>,{' '} <strong>Dudenhofen</strong>, <strong>Römerberg</strong>, <strong>Altrip</strong> und allen weiteren Gemeinden. Für die Nachbarstädte gibt es eigene Seiten:{' '} <a href="/24h-pflege-ludwigshafen" className="text-pm-taupe underline underline-offset-2">Ludwigshafen</a>,{' '} <a href="/24h-pflege-speyer" className="text-pm-taupe underline underline-offset-2">Speyer</a> und{' '} <a href="/24h-pflege-mannheim" className="text-pm-taupe underline underline-offset-2">Mannheim</a>.</Text>
          </Abschnitt>

          <Abschnitt id="was-kostet-das-und" titel="Was kostet das — und was zahlt die Pflegekasse dazu?">
            <Text>Eine 24h-Betreuung kostet über Primundus <strong>ab 2.150 Euro im Monat</strong>. Die Pflegekasse zahlt kräftig mit: Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei Pflegegrad 3{' '}<strong>ab ca. 923 Euro</strong> im Monat selbst zu tragen. Ihren genauen Preis für Ihre Situation zeigt der Kostenrechner in 2 Minuten.</Text>
            <RechnerKasten src="ort-rhein-pfalz-kreis" />
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-im-rhein" titel="Polnische Betreuungskräfte im Rhein-Pfalz-Kreis">
            <Text>Wer im Rhein-Pfalz-Kreis nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Die meisten kommen aus Polen, einige aus Rumänien oder Bulgarien — und sie sind im gesamten Kreisgebiet im Einsatz.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Der Kostenvergleich fällt im Rhein-Pfalz-Kreis deutlich aus: Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro Eigenanteil. Ein Heimplatz kostet in Rheinland-Pfalz im ersten Jahr im Schnitt rund 3.220 Euro im Monat — und die vertraute Wohnung bleibt dabei auf der Strecke.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Polnische Pflegekräfte — was sie kosten und wie es rechtlich läuft</a>.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause in Rhein-Pfalz-Kreis ausmacht">
            <Text>Knapp zwei von drei Haushalten in Rhein-Pfalz-Kreis wohnen im Eigentum — in Rheinland-Pfalz sind es 54,4 Prozent. Wer im eigenen Haus lebt, entscheidet über ein freies Zimmer selbst und muss niemanden fragen. Beim Platz steht Rhein-Pfalz-Kreis besser da als das Land: Nur 8,6 Prozent der Wohnungen liegen unter 60 Quadratmetern, in Rheinland-Pfalz sind es 15,4 Prozent. Das Zimmer für eine Betreuungskraft ist hier meist schon vorhanden.</Text>
            <Text>Die durchschnittliche Wohnung misst 115,1 Quadratmeter und damit rund 7 Quadratmeter mehr als im Schnitt von Rheinland-Pfalz (107,7). 34,3 Prozent der Haushalte bestehen aus einer Person, in Rheinland-Pfalz 40,4 Prozent.</Text>
            <Text>Altbau vor 1950 macht in Rhein-Pfalz-Kreis 15,6 Prozent des Bestands aus, in Rheinland-Pfalz 21,5 Prozent.</Text>
            <Text>In Zahlen: 17.908 Menschen in Rhein-Pfalz-Kreis sind 75 Jahre oder älter, und es gibt 74.069 Wohnungen in 48.337 Gebäuden. Ob darunter eine ist, in der eine Betreuungskraft ein eigenes Zimmer bekommt, entscheidet sich nicht an der Statistik, sondern an Ihrem Grundriss — und das klären wir vorab.</Text>
            <Text>Was davon auf Ihre Situation zutrifft, klären wir vor jeder Entscheidung — insbesondere die Frage nach dem eigenen Zimmer für die Betreuungskraft. Und lassen Sie sich unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos, trägerunabhängig und kommt auf Wunsch zu Ihnen nach Hause.</Text>
            <p className="text-[15px] leading-[1.6] text-pm-body/70">Zahlen zu Wohnen und Haushalten: Zensus 2022, Statistische Ämter des Bundes und der Länder, Stichtag 15. Mai 2022.</p>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-rhein-pfalz-kreis" titel="Einzugsgebiet Rhein-Pfalz-Kreis">
            <NearbyCities current="rhein-pfalz-kreis" />
          </Abschnitt>

          <OrtWerkzeuge ort={'Rhein-Pfalz-Kreis'} land={'Rheinland-Pfalz'} altbau={39.8} miete={6.91} />


          <OrtStimmen


            ort={'Rhein-Pfalz-Kreis'}


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
