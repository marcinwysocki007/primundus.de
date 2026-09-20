import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import { NearbyCities } from '@/components/NearbyCities'
import { OrtWerkzeuge } from '@/components/orte/OrtWerkzeuge'
import {
  MehrDazu, Abschnitt, Fragen, Gegenueber, Kasten, Punkte, RatgeberKopf, RatgeberRumpf, RechnerKasten, Schritte, Tabelle, Text,
} from '@/components/vorlage/Ratgeber'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).

const SECTIONS = [
  { id: 'was-ist-24-stunden', title: "Was 24-Stunden-Betreuung in Erfurt bedeutet" },
  { id: 'kosten-und-kassenzuschuesse-in', title: "Kosten & Kassenzuschüsse in Erfurt 2026" },
  { id: 'polnische-betreuungskraefte-in-erfurt', title: "Polnische Betreuungskräfte in Erfurt" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause in Erfurt ausmacht" },
  { id: 'einzugsgebiet-erfurt', title: "Einzugsgebiet Erfurt" },
  { id: 'werkzeuge', title: "Was es für Ihre Eltern in Erfurt kostet" },
  { id: 'so-arbeiten-wir', title: "So arbeiten wir" },
  { id: 'haeufige-fragen-24h-pflege', title: "Häufige Fragen — 24h-Pflege in Erfurt" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Erfurt: ab 2.150 €, täglich kündbar',
  description: '24-Stunden-Pflege in Erfurt: ab 2.150 € im Monat, Eigenanteil bei Pflegegrad 3 ab ca. 923 €. Kräfte vorher ansehen, keine Gebühr, täglich kündbar.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-erfurt' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege Erfurt — Betreuungskraft zuhause | Primundus',
    description: 'Geprüfte 24h-Betreuungskraft in Erfurt. Täglich kündbar, rechtssicher, startklar.',
    url: 'https://primundus.de/24h-pflege-erfurt',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-erfurt#service',
    name: 'Primundus — 24h-Pflege Erfurt',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte in Erfurt. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-erfurt',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'City', name: 'Erfurt' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24h-Pflege Erfurt', item: 'https://primundus.de/24h-pflege-erfurt' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was kostet eine 24h-Pflegekraft in Erfurt?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Thüringen (Eigenanteil rund 3.000 €/Monat, vdek 07/2026).' },
      },
      {
        '@type': 'Question',
        name: 'Wie schnell kann eine 24h-Pflegekraft in Erfurt starten?',
        acceptedAnswer: { '@type': 'Answer', text: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
      },
      {
        '@type': 'Question',
        name: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
      },
      {
        '@type': 'Question',
        name: 'Ist 24h-Pflege über Primundus in Erfurt rechtssicher?',
        acceptedAnswer: { '@type': 'Answer', text: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
      },
      {
        '@type': 'Question',
        name: 'Erfurt gilt als jung — ist Pflege hier überhaupt ein großes Thema?',
        acceptedAnswer: { '@type': 'Answer', text: 'Der Anteil täuscht. Erfurt ist mit knapp 24 Prozent über 65 tatsächlich rund fünf Punkte jünger als Thüringen insgesamt, und die Pflegequote liegt entsprechend niedriger. In absoluten Zahlen leben hier aber rund 52.000 Menschen über 65 und über 16.000 über 80. Dazu kommt: Knapp die Hälfte aller Erfurter Haushalte sind Einpersonenhaushalte, deutlich mehr als im Land. Viele Ältere sind also auf sich gestellt.' },
      },
      {
        '@type': 'Question',
        name: 'Ist eine Erfurter Wohnung groß genug für eine Betreuungskraft?',
        acceptedAnswer: { '@type': 'Answer', text: 'Das ist in Erfurt tatsächlich die zentrale Frage. Mit gut 40 Quadratmetern Wohnfläche je Einwohner hat die Stadt den niedrigsten Wert aller zweiundzwanzig Thüringer Kreise, zwei Drittel aller Wohnungen liegen in Häusern mit sieben und mehr Parteien, und nur gut ein Fünftel der Erfurter wohnt im Eigentum. Eine Betreuungskraft braucht ein eigenes Zimmer — das ist die Voraussetzung. In vielen Erfurter Wohnungen lässt sich das einrichten, in kleinen Zwei-Zimmer-Wohnungen nicht. Wir klären das vorab mit Ihnen, bevor irgendetwas entschieden wird.' },
      },
      {
        '@type': 'Question',
        name: 'Altern die Erfurter Plattenbaugebiete besonders stark?',
        acceptedAnswer: { '@type': 'Answer', text: 'Erstaunlicherweise nicht. Der Reflex liegt nahe — die Erstbezieher vom Berliner Platz, aus dem Rieth oder vom Wiesenhügel sind heute alt. Die Vorausberechnung der Stadt zeigt aber das Gegenteil: In der Großwohnsiedlung Nord geht die Zahl der über 65-Jährigen bis 2045 zurück, während sie in der östlichen Innenstadt und in den eingemeindeten Dörfern kräftig steigt. Der Pflegebedarf wandert also eher in die Altbauviertel und an den Stadtrand.' },
      },
      {
        '@type': 'Question',
        name: 'Welches Einzugsgebiet wird in Erfurt bedient?',
        acceptedAnswer: { '@type': 'Answer', text: 'Erfurt und Umland: Gotha, Weimar, Arnstadt, Ilmenau und alle Gemeinden im Landkreis Gotha und Ilm-Kreis' },
      },
    ],
  },
]

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Erfurt?', a: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Thüringen (Eigenanteil rund 3.000 €/Monat, vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Erfurt starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
  { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
  { q: 'Ist 24h-Pflege über Primundus in Erfurt rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
  { q: 'Erfurt gilt als jung — ist Pflege hier überhaupt ein großes Thema?', a: 'Der Anteil täuscht. Erfurt ist mit knapp 24 Prozent über 65 tatsächlich rund fünf Punkte jünger als Thüringen insgesamt, und die Pflegequote liegt entsprechend niedriger. In absoluten Zahlen leben hier aber rund 52.000 Menschen über 65 und über 16.000 über 80. Dazu kommt: Knapp die Hälfte aller Erfurter Haushalte sind Einpersonenhaushalte, deutlich mehr als im Land. Viele Ältere sind also auf sich gestellt.' },
  { q: 'Ist eine Erfurter Wohnung groß genug für eine Betreuungskraft?', a: 'Das ist in Erfurt tatsächlich die zentrale Frage. Mit gut 40 Quadratmetern Wohnfläche je Einwohner hat die Stadt den niedrigsten Wert aller zweiundzwanzig Thüringer Kreise, zwei Drittel aller Wohnungen liegen in Häusern mit sieben und mehr Parteien, und nur gut ein Fünftel der Erfurter wohnt im Eigentum. Eine Betreuungskraft braucht ein eigenes Zimmer — das ist die Voraussetzung. In vielen Erfurter Wohnungen lässt sich das einrichten, in kleinen Zwei-Zimmer-Wohnungen nicht. Wir klären das vorab mit Ihnen, bevor irgendetwas entschieden wird.' },
  { q: 'Altern die Erfurter Plattenbaugebiete besonders stark?', a: 'Erstaunlicherweise nicht. Der Reflex liegt nahe — die Erstbezieher vom Berliner Platz, aus dem Rieth oder vom Wiesenhügel sind heute alt. Die Vorausberechnung der Stadt zeigt aber das Gegenteil: In der Großwohnsiedlung Nord geht die Zahl der über 65-Jährigen bis 2045 zurück, während sie in der östlichen Innenstadt und in den eingemeindeten Dörfern kräftig steigt. Der Pflegebedarf wandert also eher in die Altbauviertel und an den Stadtrand.' },
  { q: 'Welches Einzugsgebiet wird in Erfurt bedient?', a: 'Erfurt und Umland: Gotha, Weimar, Arnstadt, Ilmenau und alle Gemeinden im Landkreis Gotha und Ilm-Kreis' },
  { q: 'Ist in einer Wohnung in Erfurt Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Erfurt hat im Schnitt 74,3 m², 38,4 % sind kleiner als 60 m². Das ist eng, deshalb klären wir vor der Zusage am Telefon, welches Zimmer frei wird — meist das ehemalige Kinder- oder Arbeitszimmer. 65,9 % der Wohnungen in Erfurt liegen in Ein- oder Zweifamilienhäusern; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Thüringen zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.000 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause bleiben bei Pflegegrad 3 ab ca. 923 € — nach Pflegegeld, anteiligem Entlastungsbudget und Steuerermäßigung. Das sind rund 2.077 € Unterschied im Monat, 24.924 € im Jahr.' },
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
            { label: 'Erfurt' },
          ]}
          augenbraue="24-Stunden-Pflege in Erfurt"
          titel="24-Stunden-Pflege und Betreuung in Erfurt"
          einleitung={<>Die Wohnung in der Andreasvorstadt, das Haus in Hochheim, der Garten vor der Stadt: Erfurter bleiben gern, wo Dom und Krämerbrücke zum Alltag gehören. Wenn allein leben nicht mehr geht, zieht eine Betreuungskraft von Primundus mit ein — bei Bedarf auch nachts da, im vertrauten Zuhause. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>}
          aktualisiert="27. August 2026"
          lesezeit="6 Min."
          blick={[
            'Preis bei Primundus: ab 2.150 €/Monat',
            'Ihr Eigenanteil bei Pflegegrad 3: ab ca. 923 €/Monat',
            'Pflegeheim in Thüringen: Eigenanteil rund 3.000 €/Monat (vdek, 07/2026)',
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich',
          ]}
          blickTitel="Erfurt auf einen Blick"
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist-24-stunden" titel="Was 24-Stunden-Betreuung in Erfurt bedeutet">
            <Text>
              Eine Betreuungskraft zieht bei Ihnen ein, führt den Haushalt, hilft bei Körperpflege und Alltag und ist bei Bedarf
              auch nachts da. Anders als beim ambulanten Dienst, der zweimal am Tag kommt und wieder geht. Und anders als im
              Heim, wo der Umzug ansteht. Das Zuhause in Erfurt bleibt, der gewohnte Tagesablauf auch.
            </Text>
            <MehrDazu
              label="Ausführlich auf den Themenseiten:"
              links={[
                { href: '/24-stunden-pflege', text: 'Was 24-Stunden-Pflege ist und für wen sie passt' },
                { href: '/leistungen', text: 'Was eine Betreuungskraft übernimmt' },
                { href: '/pflegedienst-oder-24h-kraft', text: 'Betreuungskraft oder ambulanter Pflegedienst?' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="kosten-und-kassenzuschuesse-in" titel="Kosten & Kassenzuschüsse in Erfurt 2026">
            <Tabelle
              titel="Kostenbeispiel — Pflegegrad 3 in Erfurt"
              zeilen={[
                ['Kosten Primundus', 'ab 2.150 €/Monat'],
                ['− Pflegegeld PG 3', '− 599 €/Monat'],
                ['− Entlastungsbudget (anteilig)', '− ca. 295 €/Monat'],
                ['− Steuerermäßigung (20 %, bis 4.000 €/Jahr)', '− ca. 333 €/Monat'],
                [<strong key="e">Ihr Eigenanteil</strong>, <strong key="w">ab ca. 923 €/Monat</strong>],
              ]}
              betont={1}
              fuss="Eine Person, Werte aus unserem Kostenrechner, zzgl. An- und Abreise 125 € je Strecke · Pflegeheim in Thüringen: Eigenanteil rund 3.000 €/Monat (vdek, 07/2026) — 24h-Pflege zuhause ist oft günstiger und erhält das Zuhause"
            />
            <Tabelle
              titel="Was die Pflegekasse zahlt"
              kopf={['Pflegegrad', 'Pflegegeld je Monat', 'Entlastungsbudget je Jahr']}
              zeilen={[
                ['PG 2', '347 €', '3.539 €'],
                ['PG 3', '599 €', '3.539 €'],
                ['PG 4', '800 €', '3.539 €'],
                ['PG 5', '990 €', '3.539 €'],
              ]}
              betont={1}
              fuss="Stand 2026 · bundesweit einheitlich"
            />
            <RechnerKasten src="ort-erfurt" />
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-in-erfurt" titel="Polnische Betreuungskräfte in Erfurt">
            <Text>Wer in Erfurt nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Die meisten kommen aus Polen, einige aus Rumänien oder Bulgarien — und sie sind in Erfurt und im gesamten Umland im Einsatz.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Was eine polnische Betreuungskraft kostet:</strong> ab 2.150 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen. Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro Eigenanteil — deutlich weniger als ein Heimplatz, der hier im Schnitt rund 3.000 Euro im Monat kostet.</Text>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Polnische Betreuungskräfte — das Entsendemodell erklärt</a>.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause in Erfurt ausmacht">
            <Text>Erfurt ist deutlich jünger als sein Bundesland: Knapp 24 Prozent der Erfurter sind über 65, in Thüringen sind es fast 29. Das ist der Grund, warum die Pflegequote hier spürbar niedriger liegt als im Landesschnitt. In absoluten Zahlen sind es trotzdem rund 52.000 Menschen über 65 und über 16.000 über 80 — und <strong className="text-pm-ink font-semibold"> knapp die Hälfte aller Erfurter Haushalte sind Einpersonenhaushalte</strong>, deutlich mehr als im Land.</Text>
            <Text>Die eigentliche Besonderheit steckt aber im Wohnen. Nur <strong className="text-pm-ink font-semibold"> gut ein Fünftel der Erfurter wohnt im Eigentum</strong> — in Thüringen ist es knapp die Hälfte. Zwei Drittel aller Wohnungen liegen in Häusern mit sieben und mehr Parteien. Und der Wohnraum ist knapp: Mit gut 40 Quadratmetern je Einwohner hat Erfurt den niedrigsten Wert aller zweiundzwanzig Thüringer Kreise. Für Pflege zu Hause ist das der entscheidende Punkt, denn ein Pflegebett, Hilfsmittel und ein eigenes Zimmer für die Betreuungskraft brauchen Platz. Wer eine 74-Quadratmeter-Wohnung im vierten Stock hat, muss anders planen als jemand mit einem Haus.</Text>
            <Text>Ein verbreiteter Reflex trifft in Erfurt übrigens nicht zu. Man erwartet, dass die großen Plattenbausiedlungen mit ihren Erstbeziehern besonders schnell altern — am Berliner Platz, im Rieth, am Roten Berg, in Melchendorf oder am Wiesenhügel. Die Vorausberechnung der Stadt sagt das Gegenteil: In der Großwohnsiedlung Nord geht die Zahl der über 65-Jährigen bis 2045 zurück, während sie in der östlichen Innenstadt und in den Dörfern am Stadtrand kräftig zunimmt. Der Pflegebedarf wandert also eher in die Altbauviertel und in die eingemeindeten Dörfer.</Text>
            <Text>Geografisch ist Erfurt für ältere Menschen günstig. Die Stadt reicht zwar von etwa 160 bis 430 Metern, aber die Höhen sind Wald: Der Steigerwald ist seit Jahrzehnten Erholungsgebiet, der Petersberg ist Festung und Park. Gewohnt wird überwiegend im flachen Teil; nur die Bergdörfer im Süden wie Egstedt liegen wirklich hoch. Auch beim Nahverkehr steht Erfurt gut da — nahezu alle Stadtbahnhaltestellen sind barrierefrei ausgebaut, bei den Bushaltestellen knapp sechzig Prozent.</Text>
            <Text>Wenn es ernst wird, gibt es in Erfurt echte Altersmedizin: Das Helios Klinikum führt ein eigenes Zentrum für Geriatrie mit ausgeprägt alterstraumatologischem Schwerpunkt — die häufigsten Diagnosen sind Oberschenkel- und Schenkelhalsbrüche, also genau die Stürze, nach denen zu Hause nichts mehr wie vorher ist. Für die Zeit danach lohnt sich frühe Beratung: Die Pflegeberatung in Erfurt ist kostenlos, trägerunabhängig und auf Wunsch bei Ihnen zu Hause (§ 7a SGB XI).</Text>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-erfurt" titel="Einzugsgebiet Erfurt">
            <Text>Erfurt und Umland: Gotha, Weimar, Arnstadt, Ilmenau und alle Gemeinden im Landkreis Gotha und Ilm-Kreis</Text>
            <NearbyCities current="erfurt" />
          </Abschnitt>

          <OrtWerkzeuge ort={'Erfurt'} land={'Thüringen'} />


          <Abschnitt id="so-arbeiten-wir" titel="So arbeiten wir">
            <Punkte
              punkte={[
                { title: 'Keine Vertragsbindung', desc: 'Täglich kündbar – maximale Flexibilität für Sie' },
                { title: 'Tagesgenaue Abrechnung', desc: 'Kosten entstehen erst mit Anreise der Betreuungskraft' },
                { title: 'Kosten erst bei Start – keine Vorauszahlung', desc: 'Sie zahlen nur, wenn die Betreuungskraft vor Ort arbeitet' },
                { title: 'Persönlicher Ansprechpartner', desc: '7 Tage/Woche für Sie da' },
              ]}
            />
            <div className="bg-white rounded-[20px] shadow-lift p-6 md:p-8">
              <img
                src="/images/bestpreisgarantie-siegel.webp"
                alt="Primundus Bestpreisgarantie – 6× Preis-Leistungssieger"
                width={900}
                height={256}
                loading="lazy"
                className="h-[64px] md:h-[72px] w-auto mb-5"
              />
              <p className="text-[19px] md:text-[21px] font-bold leading-[1.3] tracking-[-0.015em] text-pm-ink [text-wrap:balance]">
                Bei uns zahlen Sie nie mehr als für ein vergleichbares Angebot.
              </p>
              <p className="mt-3 text-[17px] leading-[1.65] text-pm-body">
                Das können wir, weil unsere Betreuungskräfte bei uns angestellt sind und keine
                Vermittlungsgebühr anfällt.{' '}
                <a href="https://kostenrechner.primundus.de/bestpreisgarantie" className="font-semibold text-pm-taupe-ink underline underline-offset-4 hover:text-pm-ink">Was heißt vergleichbar?</a>
              </p>
            </div>
            <Schritte
              schritte={[
                { title: 'Ihren Preis sehen', desc: 'Wenige Fragen zur Pflegesituation und Ihre Kontaktdaten für die Angebotskopie — danach sehen Sie sofort Ihren Preis samt Zuschüssen.', tag: 'Dauert unter 2 Minuten', tagTon: 'gruen' },
                { title: 'Betreuungskräfte ansehen', desc: 'Direkt danach sehen Sie in Ihrem Kundenportal, wer zu Ihnen kommen könnte — in Ruhe und ohne Verpflichtung.', tag: 'Ihr Zugang kommt auch per E-Mail', tagTon: 'gruen' },
                { title: 'Auswählen und starten', desc: 'Sie entscheiden, wer es wird. Erst nach Ihrer Auswahl unterschreiben Sie den Vertrag — danach reist Ihre Betreuungskraft an, wenn nötig schon in 3 Tagen.', tag: 'Kein Vertrag vor Ihrer Auswahl', tagTon: 'gruen' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="haeufige-fragen-24h-pflege" titel="Häufige Fragen — 24h-Pflege in Erfurt">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
