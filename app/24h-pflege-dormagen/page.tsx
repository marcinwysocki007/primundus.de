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
  { id: 'was-ist-24-stunden', title: "Was 24-Stunden-Betreuung in Dormagen bedeutet" },
  { id: 'kosten-und-kassenzuschuesse-in', title: "Kosten & Kassenzuschüsse in Dormagen 2026" },
  { id: 'polnische-betreuungskraefte-in-dormagen', title: "Polnische Betreuungskräfte in Dormagen" },
  { id: '24-stunden-pflege-im', title: "24-Stunden-Pflege im Rhein-Kreis Neuss" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause in Dormagen ausmacht" },
  { id: 'einzugsgebiet-dormagen', title: "Einzugsgebiet Dormagen" },
  { id: 'werkzeuge', title: "Was es in Dormagen kostet, und was die Pflegekasse dazugibt" },
  { id: 'so-arbeiten-wir', title: "So arbeiten wir" },
  { id: 'stimmen-vor-ort', title: "Familien aus der Region über uns" },
  { id: 'haeufige-fragen-24h-pflege', title: "Häufige Fragen — 24h-Pflege in Dormagen" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Dormagen: Preis und Kräfte sofort sehen',
  description: '24-Stunden-Pflege in Dormagen: Ihren Preis und die passenden Betreuungskräfte sehen Sie in 2 Minuten — mit Foto, Erfahrung und Deutschniveau. Täglich kündbar.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-dormagen' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege Dormagen — Betreuungskraft zuhause | Primundus',
    description: 'Geprüfte 24h-Betreuungskraft in Dormagen. Täglich kündbar, rechtssicher, startklar.',
    url: 'https://primundus.de/24h-pflege-dormagen',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-dormagen#service',
    name: 'Primundus — 24h-Pflege Dormagen',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte in Dormagen. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-dormagen',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'City', name: 'Dormagen' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24h-Pflege Dormagen', item: 'https://primundus.de/24h-pflege-dormagen' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was kostet eine 24h-Pflegekraft in Dormagen?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Nordrhein-Westfalen (Eigenanteil rund 3.580 €/Monat, vdek 07/2026).' },
      },
      {
        '@type': 'Question',
        name: 'Wie schnell kann eine 24h-Pflegekraft in Dormagen starten?',
        acceptedAnswer: { '@type': 'Answer', text: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
      },
      {
        '@type': 'Question',
        name: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
      },
      {
        '@type': 'Question',
        name: 'Ist 24h-Pflege über Primundus in Dormagen rechtssicher?',
        acceptedAnswer: { '@type': 'Answer', text: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
      },
      {
        '@type': 'Question',
        name: 'Wir pflegen bisher selbst — lohnt sich eine Betreuungskraft trotzdem?',
        acceptedAnswer: { '@type': 'Answer', text: 'Gerade dann. Im Rhein-Kreis Neuss beziehen rund 63 Prozent aller Pflegebedürftigen Pflegegeld — in Nordrhein-Westfalen sind es 59, bundesweit 55 Prozent. Hier pflegen also überdurchschnittlich viele Familien selbst. Eine Betreuungskraft ersetzt Sie nicht, sie entlastet Sie: Sie bleiben Tochter oder Sohn, statt rund um die Uhr Pflegekraft zu sein. Pflegegeld und Betreuung lassen sich dabei kombinieren.' },
      },
      {
        '@type': 'Question',
        name: 'Welche Hindernisse gibt es in Dormagener Wohnungen typischerweise?',
        acceptedAnswer: { '@type': 'Answer', text: 'Anders als bei einer Industriestadt vermutet, ist es selten der Altbau — nur rund sieben Prozent der Wohnungen stammen aus der Zeit vor 1950, und gut zwei Drittel der Gebäude sind Einfamilienhäuser. Dort ist meist die eigene Treppe ins Obergeschoss die Hürde. In Horrem kommt eine zweite hinzu: Bei den Zeilenbauten der sechziger und siebziger Jahre liegt schon das Erdgeschoss zwei bis sechs Stufen über dem Außengelände, und einen Aufzug haben nur wenige Häuser.' },
      },
      {
        '@type': 'Question',
        name: 'Welches Einzugsgebiet wird in Dormagen bedient?',
        acceptedAnswer: { '@type': 'Answer', text: 'Dormagen und Rhein-Kreis Neuss Mitte: Neuss-Nord, Grevenbroich-Ost und alle Gemeinden im mittleren Rhein-Kreis Neuss' },
      },
    ],
  },
]

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Dormagen?', a: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Nordrhein-Westfalen (Eigenanteil rund 3.580 €/Monat, vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Dormagen starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
  { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
  { q: 'Ist 24h-Pflege über Primundus in Dormagen rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
  { q: 'Wir pflegen bisher selbst — lohnt sich eine Betreuungskraft trotzdem?', a: 'Gerade dann. Im Rhein-Kreis Neuss beziehen rund 63 Prozent aller Pflegebedürftigen Pflegegeld — in Nordrhein-Westfalen sind es 59, bundesweit 55 Prozent. Hier pflegen also überdurchschnittlich viele Familien selbst. Eine Betreuungskraft ersetzt Sie nicht, sie entlastet Sie: Sie bleiben Tochter oder Sohn, statt rund um die Uhr Pflegekraft zu sein. Pflegegeld und Betreuung lassen sich dabei kombinieren.' },
  { q: 'Welche Hindernisse gibt es in Dormagener Wohnungen typischerweise?', a: 'Anders als bei einer Industriestadt vermutet, ist es selten der Altbau — nur rund sieben Prozent der Wohnungen stammen aus der Zeit vor 1950, und gut zwei Drittel der Gebäude sind Einfamilienhäuser. Dort ist meist die eigene Treppe ins Obergeschoss die Hürde. In Horrem kommt eine zweite hinzu: Bei den Zeilenbauten der sechziger und siebziger Jahre liegt schon das Erdgeschoss zwei bis sechs Stufen über dem Außengelände, und einen Aufzug haben nur wenige Häuser.' },
  { q: 'Welches Einzugsgebiet wird in Dormagen bedient?', a: 'Dormagen und Rhein-Kreis Neuss Mitte: Neuss-Nord, Grevenbroich-Ost und alle Gemeinden im mittleren Rhein-Kreis Neuss' },
  { q: 'Ist in einer Wohnung in Dormagen Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Dormagen hat im Schnitt 97,2 m², 13,5 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 81,0 % der Wohnungen in Dormagen liegen in Ein- oder Zweifamilienhäusern; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Nordrhein-Westfalen zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.580 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause bleiben bei Pflegegrad 3 ab ca. 923 € — nach Pflegegeld, anteiligem Entlastungsbudget und Steuerermäßigung. Das sind rund 2.657 € Unterschied im Monat, 31.884 € im Jahr.' },
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
            { label: 'Dormagen' },
          ]}
          augenbraue="24-Stunden-Pflege in Dormagen"
          titel="24-Stunden-Pflege und Betreuung in Dormagen"
          einleitung={<>Viele Dormagener Familien kennen das: Die Kinder arbeiten in Köln oder Düsseldorf, die Eltern wohnen in Nievenheim, Hackenbroich oder bei der alten Zollfeste in Zons — und brauchen plötzlich mehr Hilfe, als sich mit Besuchen am Wochenende leisten lässt. Eine Betreuungskraft von Primundus zieht mit ein und ist bei Bedarf auch nachts da. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>}
          aktualisiert="27. August 2026"
          lesezeit="6 Min."
          blick={[
            'Preis bei Primundus: ab 2.150 €/Monat',
            'Ihr Eigenanteil bei Pflegegrad 3: ab ca. 923 €/Monat',
            'Pflegeheim in Nordrhein-Westfalen: Eigenanteil rund 3.580 €/Monat (vdek, 07/2026)',
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich',
          ]}
          blickTitel="Dormagen auf einen Blick"
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist-24-stunden" titel="Was 24-Stunden-Betreuung in Dormagen bedeutet">
            <Text>
              Eine Betreuungskraft zieht bei Ihnen ein, führt den Haushalt, hilft bei Körperpflege und Alltag und ist bei Bedarf
              auch nachts da. Anders als beim ambulanten Dienst, der zweimal am Tag kommt und wieder geht. Und anders als im
              Heim, wo der Umzug ansteht. Das Zuhause in Dormagen bleibt, der gewohnte Tagesablauf auch.
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

          <Abschnitt id="kosten-und-kassenzuschuesse-in" titel="Kosten & Kassenzuschüsse in Dormagen 2026">
            <Tabelle
              titel="Kostenbeispiel — Pflegegrad 3 in Dormagen"
              zeilen={[
                ['Kosten Primundus', 'ab 2.150 €/Monat'],
                ['− Pflegegeld PG 3', '− 599 €/Monat'],
                ['− Entlastungsbudget (anteilig)', '− ca. 295 €/Monat'],
                ['− Steuerermäßigung (20 %, bis 4.000 €/Jahr)', '− ca. 333 €/Monat'],
                [<strong key="e">Ihr Eigenanteil</strong>, <strong key="w">ab ca. 923 €/Monat</strong>],
              ]}
              betont={1}
              fuss="Eine Person, Werte aus unserem Kostenrechner, zzgl. An- und Abreise 125 € je Strecke · Pflegeheim in Nordrhein-Westfalen: Eigenanteil rund 3.580 €/Monat (vdek, 07/2026) — 24h-Pflege zuhause ist oft günstiger und erhält das Zuhause"
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
            <RechnerKasten src="ort-dormagen" />
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-in-dormagen" titel="Polnische Betreuungskräfte in Dormagen">
            <Text>Wer in Dormagen nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Die meisten kommen aus Polen, einige aus Rumänien oder Bulgarien — und sie sind in Dormagen und im gesamten Umland im Einsatz.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Was eine polnische Betreuungskraft kostet:</strong> ab 2.150 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen. Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro Eigenanteil — deutlich weniger als ein Heimplatz, der hier im Schnitt rund 3.580 Euro im Monat kostet.</Text>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Polnische Pflegekräfte — was sie kosten und wie es rechtlich läuft</a>.</Text>
          </Abschnitt>

          <Abschnitt id="24-stunden-pflege-im" titel="24-Stunden-Pflege im Rhein-Kreis Neuss">
            <Text>Unsere Betreuungskräfte ziehen in Dormagen und im Rhein-Kreis Neuss ein — auch in den kleineren Gemeinden, in denen sonst kaum jemand anbietet. Die Anreise dauert überall gleich lang, der Preis ist derselbe.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause in Dormagen ausmacht">
            <Text>In Dormagen pflegen die Familien besonders oft selbst. Im Rhein-Kreis Neuss beziehen rund <strong className="text-pm-ink font-semibold">63 Prozent aller Pflegebedürftigen Pflegegeld</strong> — in Nordrhein-Westfalen sind es 59, bundesweit 55 Prozent. Pflegegeld bekommt, wer zu Hause von Angehörigen versorgt wird. Hinter dieser Zahl stehen also sehr viele Töchter, Söhne und Ehepartner, die das seit Jahren stemmen. Genau bei ihnen melden sich irgendwann die Grenzen: wenn der eigene Rücken nicht mehr mitmacht, wenn Nächte durchwacht werden, wenn der Urlaub seit Jahren ausfällt.</Text>
            <Text>Eine Betreuungskraft, die mit einzieht, ersetzt die Familie nicht — sie entlastet sie. Die Angehörigen bleiben Tochter oder Sohn, statt rund um die Uhr Pflegekraft zu sein. Und weil Pflegegeld und Betreuung sich kombinieren lassen, muss dafür niemand den bisherigen Weg komplett aufgeben.</Text>
            <Text>Beim Wohnen ist Dormagen anders, als man es einer Industriestadt zutrauen würde: Gründerzeit-Altbau gibt es hier kaum, nur etwa sieben Prozent der Wohnungen stammen aus der Zeit vor 1950. Gut zwei Drittel der Gebäude sind Einfamilienhäuser — die Barriere ist dort meist die eigene Treppe ins Obergeschoss. In Horrem, das zu großen Teilen als Werkssiedlung für das Chemiewerk entstand, kommt eine andere hinzu: Bei den Zeilenbauten der sechziger und siebziger Jahre liegt schon das Erdgeschoss zwei bis sechs Stufen über dem Außengelände, und einen Aufzug haben nur wenige Häuser. Ebenerdig ist die Stadt zwar — sie liegt flach am Rhein —, aber bis zur Wohnungstür hilft das nicht.</Text>
            <Text>Bevor Sie etwas entscheiden, lassen Sie sich unabhängig beraten: Die Pflegestützpunkte im Rhein-Kreis Neuss beraten kostenlos und trägerunabhängig, auf Wunsch auch bei Ihnen zu Hause. Dieser Anspruch steht Ihnen gesetzlich zu (§ 7a SGB XI) — und er gilt unabhängig davon, für welchen Weg Sie sich danach entscheiden.</Text>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-dormagen" titel="Einzugsgebiet Dormagen">
            <Text>Dormagen und Rhein-Kreis Neuss Mitte: Neuss-Nord, Grevenbroich-Ost und alle Gemeinden im mittleren Rhein-Kreis Neuss</Text>
            <NearbyCities current="dormagen" />
          </Abschnitt>

          <OrtWerkzeuge ort={'Dormagen'} land={'Nordrhein-Westfalen'} altbau={38.7} miete={7.35} />


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

            ort={'Dormagen'}

            herkunft="umgebung"

            stimmen={DIREKT_ERHALTEN.filter((b) => ['k-20260905-thomas', 'k-20260427-andreas'].includes(b.id))}

          />


          <Abschnitt id="haeufige-fragen-24h-pflege" titel="Häufige Fragen — 24h-Pflege in Dormagen">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
