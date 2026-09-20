import type { Metadata } from 'next'
import { OrtStimmen } from '@/components/orte/OrtStimmen'
import { DIREKT_ERHALTEN } from '@/lib/bewertungen-direkt'
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
  { id: 'was-ist-24-stunden', title: "Was 24-Stunden-Betreuung in Worms bedeutet" },
  { id: 'kosten-und-kassenzuschuesse-in', title: "Kosten & Kassenzuschüsse in Worms 2026" },
  { id: 'polnische-betreuungskraefte-in-worms', title: "Polnische Betreuungskräfte in Worms" },
  { id: '24-stunden-pflege-im', title: "24-Stunden-Pflege im Landkreis Alzey-Worms" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause in Worms ausmacht" },
  { id: 'einzugsgebiet-worms', title: "Einzugsgebiet Worms" },
  { id: 'werkzeuge', title: "Was es in Worms kostet, und was die Pflegekasse dazugibt" },
  { id: 'so-arbeiten-wir', title: "So arbeiten wir" },
  { id: 'stimmen-vor-ort', title: "Familien aus Worms über uns" },
  { id: 'haeufige-fragen-24h-pflege', title: "Häufige Fragen — 24h-Pflege in Worms" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Worms: ab 2.150 €, täglich kündbar',
  description: '24-Stunden-Pflege in Worms: ab 2.150 € im Monat, Eigenanteil bei Pflegegrad 3 ab ca. 923 €. Kräfte vorher ansehen, keine Gebühr, täglich kündbar.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-worms' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege Worms — Betreuungskraft zuhause | Primundus',
    description: 'Geprüfte 24h-Betreuungskraft in Worms. Täglich kündbar, rechtssicher, startklar.',
    url: 'https://primundus.de/24h-pflege-worms',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-worms#service',
    name: 'Primundus — 24h-Pflege Worms',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte in Worms. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-worms',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'City', name: 'Worms' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24h-Pflege Worms', item: 'https://primundus.de/24h-pflege-worms' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was kostet eine 24h-Pflegekraft in Worms?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Rheinland-Pfalz (Eigenanteil rund 3.220 €/Monat, vdek 07/2026).' },
      },
      {
        '@type': 'Question',
        name: 'Wie schnell kann eine 24h-Pflegekraft in Worms starten?',
        acceptedAnswer: { '@type': 'Answer', text: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
      },
      {
        '@type': 'Question',
        name: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
      },
      {
        '@type': 'Question',
        name: 'Ist 24h-Pflege über Primundus in Worms rechtssicher?',
        acceptedAnswer: { '@type': 'Answer', text: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
      },
      {
        '@type': 'Question',
        name: 'Wie ist die Pflege-Versorgung in Worms im Vergleich?',
        acceptedAnswer: { '@type': 'Answer', text: 'Angespannt. Auf jeden der elf ambulanten Pflegedienste in Worms kommen im Schnitt rund 110 Pflegebedürftige, landesweit sind es 82. Gleichzeitig wird in Worms deutlich häufiger ambulant gepflegt als im Landesschnitt. Der Bedarf ist also hoch und die Kapazität knapp — das merken Familien vor allem dann, wenn sie kurzfristig etwas brauchen. Eine Betreuungskraft, die im Haus lebt, hängt an keiner Tourenplanung.' },
      },
      {
        '@type': 'Question',
        name: 'Sind Wormser Innenstadtwohnungen für Pflege zu Hause geeignet?',
        acceptedAnswer: { '@type': 'Answer', text: 'Meist ja, barrierefrei sind sie aber selten. Im Februar und März 1945 wurde gut ein Drittel des Wormser Gebäudebestands vollständig zerstört; die Innenstadt entstand danach neu, ein großer Teil der Wohnungen stammt aus den fünfziger Jahren. Solide gebaut, aber zu einer Zeit, als niemand an Aufzüge oder bodengleiche Duschen dachte. Für eine Betreuungskraft genügt ein eigenes Zimmer.' },
      },
      {
        '@type': 'Question',
        name: 'Welches Einzugsgebiet wird in Worms bedient?',
        acceptedAnswer: { '@type': 'Answer', text: 'Worms und Landkreis Alzey-Worms: Alzey, Osthofen, Monsheim und alle Gemeinden im Landkreis Alzey-Worms' },
      },
    ],
  },
]

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Worms?', a: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Rheinland-Pfalz (Eigenanteil rund 3.220 €/Monat, vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Worms starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
  { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
  { q: 'Ist 24h-Pflege über Primundus in Worms rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
  { q: 'Wie ist die Pflege-Versorgung in Worms im Vergleich?', a: 'Angespannt. Auf jeden der elf ambulanten Pflegedienste in Worms kommen im Schnitt rund 110 Pflegebedürftige, landesweit sind es 82. Gleichzeitig wird in Worms deutlich häufiger ambulant gepflegt als im Landesschnitt. Der Bedarf ist also hoch und die Kapazität knapp — das merken Familien vor allem dann, wenn sie kurzfristig etwas brauchen. Eine Betreuungskraft, die im Haus lebt, hängt an keiner Tourenplanung.' },
  { q: 'Sind Wormser Innenstadtwohnungen für Pflege zu Hause geeignet?', a: 'Meist ja, barrierefrei sind sie aber selten. Im Februar und März 1945 wurde gut ein Drittel des Wormser Gebäudebestands vollständig zerstört; die Innenstadt entstand danach neu, ein großer Teil der Wohnungen stammt aus den fünfziger Jahren. Solide gebaut, aber zu einer Zeit, als niemand an Aufzüge oder bodengleiche Duschen dachte. Für eine Betreuungskraft genügt ein eigenes Zimmer.' },
  { q: 'Welches Einzugsgebiet wird in Worms bedient?', a: 'Worms und Landkreis Alzey-Worms: Alzey, Osthofen, Monsheim und alle Gemeinden im Landkreis Alzey-Worms' },
  { q: 'Ist in einer Wohnung in Worms Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Worms hat im Schnitt 92,3 m², 22,6 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 78,4 % der Wohnungen in Worms liegen in Ein- oder Zweifamilienhäusern; dort bietet sich oft eine ganze Etage an.' },
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
            { label: 'Worms' },
          ]}
          augenbraue="24-Stunden-Pflege in Worms"
          titel="24-Stunden-Pflege und Betreuung in Worms"
          einleitung={<>Ob in der Innenstadt nahe dem Dom, in Pfeddersheim oder draußen in Herrnsheim: Die meisten Wormser wollen im Alter dort bleiben, wo sie ihr Leben verbracht haben. Eine Betreuungskraft von Primundus zieht mit ein und macht genau das möglich — bei Bedarf auch nachts da, im vertrauten Zuhause. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>}
          aktualisiert="27. August 2026"
          lesezeit="6 Min."
          blick={[
            'Preis bei Primundus: ab 2.150 €/Monat',
            'Ihr Eigenanteil bei Pflegegrad 3: ab ca. 923 €/Monat',
            'Pflegeheim in Rheinland-Pfalz: Eigenanteil rund 3.220 €/Monat (vdek, 07/2026)',
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich',
          ]}
          blickTitel="Worms auf einen Blick"
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist-24-stunden" titel="Was 24-Stunden-Betreuung in Worms bedeutet">
            <Text>
              Eine Betreuungskraft zieht bei Ihnen ein, führt den Haushalt, hilft bei Körperpflege und Alltag und ist bei Bedarf
              auch nachts da. Anders als beim ambulanten Dienst, der zweimal am Tag kommt und wieder geht. Und anders als im
              Heim, wo der Umzug ansteht. Das Zuhause in Worms bleibt, der gewohnte Tagesablauf auch.
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

          <Abschnitt id="kosten-und-kassenzuschuesse-in" titel="Kosten & Kassenzuschüsse in Worms 2026">
            <Tabelle
              titel="Kostenbeispiel — Pflegegrad 3 in Worms"
              zeilen={[
                ['Kosten Primundus', 'ab 2.150 €/Monat'],
                ['− Pflegegeld PG 3', '− 599 €/Monat'],
                ['− Entlastungsbudget (anteilig)', '− ca. 295 €/Monat'],
                ['− Steuerermäßigung (20 %, bis 4.000 €/Jahr)', '− ca. 333 €/Monat'],
                [<strong key="e">Ihr Eigenanteil</strong>, <strong key="w">ab ca. 923 €/Monat</strong>],
              ]}
              betont={1}
              fuss="Eine Person, Werte aus unserem Kostenrechner, zzgl. An- und Abreise 125 € je Strecke · Pflegeheim in Rheinland-Pfalz: Eigenanteil rund 3.220 €/Monat (vdek, 07/2026) — 24h-Pflege zuhause ist oft günstiger und erhält das Zuhause"
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
            <RechnerKasten src="ort-worms" />
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-in-worms" titel="Polnische Betreuungskräfte in Worms">
            <Text>Wer in Worms nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Die meisten kommen aus Polen, einige aus Rumänien oder Bulgarien — und sie sind in Worms und im gesamten Umland im Einsatz.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Was eine polnische Betreuungskraft kostet:</strong> ab 2.150 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen. Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro Eigenanteil — deutlich weniger als ein Heimplatz, der hier im Schnitt rund 3.220 Euro im Monat kostet.</Text>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Polnische Betreuungskräfte — das Entsendemodell erklärt</a>.</Text>
          </Abschnitt>

          <Abschnitt id="24-stunden-pflege-im" titel="24-Stunden-Pflege im Landkreis Alzey-Worms">
            <Text>Unsere Betreuungskräfte ziehen in Worms und im Landkreis Alzey-Worms ein — auch in den kleineren Gemeinden, in denen sonst kaum jemand anbietet. Die Anreise dauert überall gleich lang, der Preis ist derselbe.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause in Worms ausmacht">
            <Text>Worms liegt flach. Zwischen dem tiefsten Punkt bei Ibersheim und der westlichen Stadtgrenze zum Wonnegau liegen keine achtzig Höhenmeter — für jemanden mit Rollator oder Gehstock ist das eine gute Nachricht. Die Schwierigkeiten liegen hier woanders.</Text>
            <Text>Im Februar und März 1945 wurde gut ein Drittel des Wormser Gebäudebestands vollständig zerstört, ein weiteres knappes Drittel beschädigt; rund 15.000 Menschen verloren ihr Zuhause. Was in den Jahren danach entstand, folgte den Plänen für eine aufgelockerte, autogerechte Stadt: breitere Straßen, weniger Enge. Für die Pflege heißt das, dass ein großer Teil der Innenstadtwohnungen aus den fünfziger Jahren stammt — solide gebaut, aber zu einer Zeit, als niemand an Barrierefreiheit dachte. Ein Treppenhaus ohne Aufzug ist dort keine Seltenheit.</Text>
            <Text>Rund um die Kernstadt liegen die gewachsenen Ortsteile: Pfeddersheim, Herrnsheim, Abenheim, Rheindürkheim, Ibersheim. Dort wohnen viele Ältere im eigenen Haus, mit Garten und Treppe ins Obergeschoss. Der Landkreis Alzey-Worms ringsum ist ländlich geprägt, aber nicht menschenleer — die Wege sind länger als in der Stadt, doch nicht so weit wie in Niederbayern.</Text>
            <Text>Eine Zahl erklärt, warum viele Wormser Familien trotzdem nicht weiterkommen: Auf jeden der elf ambulanten Pflegedienste in Worms kommen im Schnitt rund 110 Pflegebedürftige — landesweit sind es 82. Die Dienste sind also spürbar stärker ausgelastet als anderswo in Rheinland-Pfalz, und das merkt man, wenn man kurzfristig etwas braucht. Umgekehrt wird in Worms deutlich häufiger ambulant gepflegt als im Landesschnitt. Der Bedarf ist da, die Kapazität knapp. Eine Betreuungskraft, die im Haus lebt, hängt an keiner Tour und übernimmt den Haushalt gleich mit.</Text>
            <Text>Wenn Sie zuerst wissen möchten, was Ihnen zusteht: Die Pflegestützpunkte in Rheinland-Pfalz beraten kostenlos und unabhängig von Anbietern, auf Wunsch auch bei Ihnen zu Hause. Dieser Anspruch ist gesetzlich verankert (§ 7a SGB XI) und gilt unabhängig davon, für welchen Anbieter Sie sich danach entscheiden.</Text>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-worms" titel="Einzugsgebiet Worms">
            <Text>Worms und Landkreis Alzey-Worms: Alzey, Osthofen, Monsheim und alle Gemeinden im Landkreis Alzey-Worms</Text>
            <NearbyCities current="worms" />
          </Abschnitt>

          <OrtWerkzeuge ort={'Worms'} land={'Rheinland-Pfalz'} altbau={54.8} miete={6.91} />


          <Abschnitt id="so-arbeiten-wir" titel="So arbeiten wir">
            <Punkte
              punkte={[
                { title: 'Keine Vertragsbindung', desc: 'Täglich kündbar – maximale Flexibilität für Sie' },
                { title: 'Tagesgenaue Abrechnung', desc: 'Kosten entstehen erst mit Anreise der Betreuungskraft' },
                { title: 'Kosten erst bei Start – keine Vorauszahlung', desc: 'Sie zahlen nur, wenn die Betreuungskraft vor Ort arbeitet' },
                { title: 'Persönlicher Ansprechpartner', desc: '7 Tage die Woche für Sie da' },
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

          <OrtStimmen

            ort={'Worms'}

            herkunft="ort"

            stimmen={DIREKT_ERHALTEN.filter((b) => ['k-20250307-reinhard'].includes(b.id))}

          />


          <Abschnitt id="haeufige-fragen-24h-pflege" titel="Häufige Fragen — 24h-Pflege in Worms">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
