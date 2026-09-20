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
  { id: 'was-ist-24-stunden', title: "Was 24-Stunden-Betreuung in Bad Nauheim bedeutet" },
  { id: 'kosten-und-kassenzuschuesse-in', title: "Kosten & Kassenzuschüsse in Bad Nauheim 2026" },
  { id: 'polnische-betreuungskraefte-in-bad', title: "Polnische Betreuungskräfte in Bad Nauheim" },
  { id: '24-stunden-pflege-im', title: "24-Stunden-Pflege im Wetteraukreis" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause in Bad Nauheim ausmacht" },
  { id: 'einzugsgebiet-bad-nauheim', title: "Einzugsgebiet Bad Nauheim" },
  { id: 'werkzeuge', title: "Was es in Bad Nauheim kostet, und was die Pflegekasse dazugibt" },
  { id: 'so-arbeiten-wir', title: "So arbeiten wir" },
  { id: 'stimmen-vor-ort', title: "Familien aus der Region über uns" },
  { id: 'haeufige-fragen-24h-pflege', title: "Häufige Fragen — 24h-Pflege in Bad Nauheim" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Bad Nauheim: zu Hause statt Heim',
  description: 'Körperpflege, Kochen, Einkäufe, Begleitung, nachts jemand im Haus: Eine Betreuungskraft übernimmt das, was Angehörige allein nicht mehr schaffen.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-bad-nauheim' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege Bad Nauheim — Betreuungskraft zuhause | Primundus',
    description: 'Geprüfte 24h-Betreuungskraft in Bad Nauheim. Täglich kündbar, rechtssicher, startklar.',
    url: 'https://primundus.de/24h-pflege-bad-nauheim',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-bad-nauheim#service',
    name: 'Primundus — 24h-Pflege Bad Nauheim',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte in Bad Nauheim. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-bad-nauheim',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'City', name: 'Bad Nauheim' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24h-Pflege Bad Nauheim', item: 'https://primundus.de/24h-pflege-bad-nauheim' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was kostet eine 24h-Pflegekraft in Bad Nauheim?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Hessen (Eigenanteil rund 3.230 €/Monat, vdek 07/2026).' },
      },
      {
        '@type': 'Question',
        name: 'Wie schnell kann eine 24h-Pflegekraft in Bad Nauheim starten?',
        acceptedAnswer: { '@type': 'Answer', text: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
      },
      {
        '@type': 'Question',
        name: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
      },
      {
        '@type': 'Question',
        name: 'Ist 24h-Pflege über Primundus in Bad Nauheim rechtssicher?',
        acceptedAnswer: { '@type': 'Answer', text: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
      },
      {
        '@type': 'Question',
        name: 'Liegt der hohe Altersschnitt in Bad Nauheim an den Kurgästen?',
        acceptedAnswer: { '@type': 'Answer', text: 'Nein. Kurgäste sind nicht mit Hauptwohnsitz gemeldet und tauchen in der Bevölkerungsstatistik gar nicht auf — die 14,5 Prozent Einwohner über 75 entstehen ohne sie. Der eigentliche Grund ist Zuzug: Bad Nauheim gewinnt jedes Jahr deutlich mehr Menschen über 65 hinzu, als es verliert, während Hessen in dieser Altersgruppe insgesamt leicht abgibt. Viele ziehen hierher, um älter zu werden — und haben ihre Familie dann nicht in der Nähe.' },
      },
      {
        '@type': 'Question',
        name: 'Wir überlegen zwischen Heimplatz und Betreuung zu Hause — was ist im Wetteraukreis üblich?',
        acceptedAnswer: { '@type': 'Answer', text: 'Der Wetteraukreis hält rund 60 Heimplätze je 1.000 Einwohner über 65 vor, fast ein Drittel mehr als Hessen im Schnitt. Gleichzeitig beziehen 60 Prozent aller Pflegebedürftigen ausschließlich Pflegegeld, werden also allein von Angehörigen versorgt, und nur 14 Prozent nutzen einen ambulanten Dienst. Viel Heim, viel Angehörigenpflege — und wenig dazwischen. Eine Betreuungskraft im eigenen Zuhause ist genau dieser fehlende Mittelweg.' },
      },
      {
        '@type': 'Question',
        name: 'Ist Bad Nauheim für ältere Menschen gut erschlossen?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ungewöhnlich gut. Die Stadt ist kompakt gebaut und liegt im flachen Talgrund der Wetterau; bis zum Hausarzt sind es im Schnitt gut 500 Meter, etwa halb so weit wie im Bundesdurchschnitt, zur Apotheke und zum Supermarkt ebenfalls deutlich weniger als anderswo. Was in Bad Nauheim fehlt, ist selten die Infrastruktur — es ist jemand im Haus, der beim Aufstehen hilft und nachts da ist.' },
      },
      {
        '@type': 'Question',
        name: 'Welches Einzugsgebiet wird in Bad Nauheim bedient?',
        acceptedAnswer: { '@type': 'Answer', text: 'Bad Nauheim und Wetteraukreis: Friedberg, Butzbach, Niddatal, Karben und alle Gemeinden im Wetteraukreis' },
      },
    ],
  },
]

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Bad Nauheim?', a: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Hessen (Eigenanteil rund 3.230 €/Monat, vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Bad Nauheim starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
  { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
  { q: 'Ist 24h-Pflege über Primundus in Bad Nauheim rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
  { q: 'Liegt der hohe Altersschnitt in Bad Nauheim an den Kurgästen?', a: 'Nein. Kurgäste sind nicht mit Hauptwohnsitz gemeldet und tauchen in der Bevölkerungsstatistik gar nicht auf — die 14,5 Prozent Einwohner über 75 entstehen ohne sie. Der eigentliche Grund ist Zuzug: Bad Nauheim gewinnt jedes Jahr deutlich mehr Menschen über 65 hinzu, als es verliert, während Hessen in dieser Altersgruppe insgesamt leicht abgibt. Viele ziehen hierher, um älter zu werden — und haben ihre Familie dann nicht in der Nähe.' },
  { q: 'Wir überlegen zwischen Heimplatz und Betreuung zu Hause — was ist im Wetteraukreis üblich?', a: 'Der Wetteraukreis hält rund 60 Heimplätze je 1.000 Einwohner über 65 vor, fast ein Drittel mehr als Hessen im Schnitt. Gleichzeitig beziehen 60 Prozent aller Pflegebedürftigen ausschließlich Pflegegeld, werden also allein von Angehörigen versorgt, und nur 14 Prozent nutzen einen ambulanten Dienst. Viel Heim, viel Angehörigenpflege — und wenig dazwischen. Eine Betreuungskraft im eigenen Zuhause ist genau dieser fehlende Mittelweg.' },
  { q: 'Ist Bad Nauheim für ältere Menschen gut erschlossen?', a: 'Ungewöhnlich gut. Die Stadt ist kompakt gebaut und liegt im flachen Talgrund der Wetterau; bis zum Hausarzt sind es im Schnitt gut 500 Meter, etwa halb so weit wie im Bundesdurchschnitt, zur Apotheke und zum Supermarkt ebenfalls deutlich weniger als anderswo. Was in Bad Nauheim fehlt, ist selten die Infrastruktur — es ist jemand im Haus, der beim Aufstehen hilft und nachts da ist.' },
  { q: 'Welches Einzugsgebiet wird in Bad Nauheim bedient?', a: 'Bad Nauheim und Wetteraukreis: Friedberg, Butzbach, Niddatal, Karben und alle Gemeinden im Wetteraukreis' },
  { q: 'Ist in einer Wohnung in Bad Nauheim Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Bad Nauheim hat im Schnitt 95,9 m², 22,4 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 74,1 % der Wohnungen in Bad Nauheim liegen in Ein- oder Zweifamilienhäusern; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Hessen zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.230 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause bleiben bei Pflegegrad 3 ab ca. 923 € — nach Pflegegeld, anteiligem Entlastungsbudget und Steuerermäßigung. Das sind rund 2.307 € Unterschied im Monat, 27.684 € im Jahr.' },
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
            { label: 'Bad Nauheim' },
          ]}
          augenbraue="24-Stunden-Pflege in Bad Nauheim"
          titel="24-Stunden-Pflege und Betreuung in Bad Nauheim"
          einleitung={<>Bad Nauheim ist zum Altwerden gemacht — Kurpark, Sprudelhof, kurze Wege. Und trotzdem kommt der Moment, in dem es allein in der Wohnung am Park oder im Haus in Steinfurth nicht mehr geht. Dann zieht eine Betreuungskraft von Primundus mit ein: bei Bedarf auch nachts da, damit das Zuhause Zuhause bleibt. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>}
          aktualisiert="27. August 2026"
          lesezeit="6 Min."
          blick={[
            'Preis bei Primundus: ab 2.150 €/Monat',
            'Ihr Eigenanteil bei Pflegegrad 3: ab ca. 923 €/Monat',
            'Pflegeheim in Hessen: Eigenanteil rund 3.230 €/Monat (vdek, 07/2026)',
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich',
          ]}
          blickTitel="Bad Nauheim auf einen Blick"
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist-24-stunden" titel="Was 24-Stunden-Betreuung in Bad Nauheim bedeutet">
            <Text>
              Eine Betreuungskraft zieht bei Ihnen ein, führt den Haushalt, hilft bei Körperpflege und Alltag und ist bei Bedarf
              auch nachts da. Anders als beim ambulanten Dienst, der zweimal am Tag kommt und wieder geht. Und anders als im
              Heim, wo der Umzug ansteht. Das Zuhause in Bad Nauheim bleibt, der gewohnte Tagesablauf auch.
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

          <Abschnitt id="kosten-und-kassenzuschuesse-in" titel="Kosten & Kassenzuschüsse in Bad Nauheim 2026">
            <Tabelle
              titel="Kostenbeispiel — Pflegegrad 3 in Bad Nauheim"
              zeilen={[
                ['Kosten Primundus', 'ab 2.150 €/Monat'],
                ['− Pflegegeld PG 3', '− 599 €/Monat'],
                ['− Entlastungsbudget (anteilig)', '− ca. 295 €/Monat'],
                ['− Steuerermäßigung (20 %, bis 4.000 €/Jahr)', '− ca. 333 €/Monat'],
                [<strong key="e">Ihr Eigenanteil</strong>, <strong key="w">ab ca. 923 €/Monat</strong>],
              ]}
              betont={1}
              fuss="Eine Person, Werte aus unserem Kostenrechner, zzgl. An- und Abreise 125 € je Strecke · Pflegeheim in Hessen: Eigenanteil rund 3.230 €/Monat (vdek, 07/2026) — 24h-Pflege zuhause ist oft günstiger und erhält das Zuhause"
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
            <RechnerKasten src="ort-bad-nauheim" />
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-in-bad" titel="Polnische Betreuungskräfte in Bad Nauheim">
            <Text>Wer in Bad Nauheim nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Sie kommen aus Polen und sind in Bad Nauheim und im gesamten Umland im Einsatz.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Was eine polnische Betreuungskraft kostet:</strong> ab 2.150 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen. Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro Eigenanteil — deutlich weniger als ein Heimplatz, der hier im Schnitt rund 3.230 Euro im Monat kostet.</Text>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Polnische Pflegekräfte — was sie kosten und wie es rechtlich läuft</a>.</Text>
          </Abschnitt>

          <Abschnitt id="24-stunden-pflege-im" titel="24-Stunden-Pflege im Wetteraukreis">
            <Text>Unsere Betreuungskräfte ziehen in Bad Nauheim und im Wetteraukreis ein — auch in den kleineren Gemeinden, in denen sonst kaum jemand anbietet. Die Anreise dauert überall gleich lang, der Preis ist derselbe.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause in Bad Nauheim ausmacht">
            <Text>Bad Nauheim ist eine ausgesprochen alte Stadt — und das liegt nicht an den Kurgästen. <strong className="text-pm-ink font-semibold"> 14,5 Prozent der Einwohner sind über 75</strong>, im Bundesschnitt sind es 11,1. Kurgäste tauchen in dieser Statistik gar nicht auf: Wer im Schnitt ein paar Wochen bleibt, ist hier nicht gemeldet. Der wahre Grund lässt sich in den Wanderungszahlen ablesen — Bad Nauheim gewinnt jedes Jahr deutlich mehr Menschen über 65 hinzu, als es verliert, während Hessen insgesamt in dieser Altersgruppe leicht verliert. Menschen ziehen hierher, um älter zu werden.</Text>
            <Text>Das hat eine Folge, die im Alltag wiegt: <strong className="text-pm-ink font-semibold">Fast jeder fünfte Haushalt in Bad Nauheim ist ein Mensch über 65, der allein lebt.</strong> Wer zugezogen ist, hat die Kinder oft nicht in der Nähe — und alte Freundschaften auch nicht. Wenn dann etwas passiert, ein Sturz, ein Krankenhausaufenthalt, fehlt genau das, was anderswo selbstverständlich ist: jemand, der nach dem Rechten sieht.</Text>
            <Text>Im Wetteraukreis zeigt die Pflegestatistik ein klares Muster. 60 Prozent aller Pflegebedürftigen beziehen ausschließlich Pflegegeld, werden also von Angehörigen versorgt — mehr als in Hessen. Zugleich nutzen nur 14 Prozent einen ambulanten Dienst, der niedrigste Wert im weiten Umkreis. Dafür hält der Kreis <strong className="text-pm-ink font-semibold"> 60 Heimplätze je 1.000 Einwohner über 65 bereit, fast ein Drittel mehr als Hessen im Schnitt</strong>. Viel Angehörigenpflege, viel Heim — und dazwischen wenig. Die Betreuung im eigenen Zuhause ist genau dieser fehlende Mittelweg.</Text>
            <Text>Praktisch spricht vieles dafür, hier zu bleiben. Bad Nauheim ist kompakt gebaut, die Stadt liegt im flachen Talgrund der Wetterau, und die Wege sind kurz: Bis zum Hausarzt sind es im Schnitt gut 500 Meter, halb so weit wie im Bundesdurchschnitt. Was fehlt, ist selten die Infrastruktur — es ist die Person im Haus. Genau die bringt eine Betreuungskraft mit: morgens beim Aufstehen, nachts, und an den Nachmittagen, an denen sonst niemand vorbeikommt.</Text>
            <Text>Bevor Sie sich entscheiden, lassen Sie sich unabhängig beraten: Die Pflegestützpunkte in Hessen beraten kostenlos und trägerunabhängig, auf Wunsch auch bei Ihnen zu Hause. Dieser Anspruch ist gesetzlich verankert (§ 7a SGB XI) und gilt unabhängig davon, für welchen Weg Sie sich danach entscheiden.</Text>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-bad-nauheim" titel="Einzugsgebiet Bad Nauheim">
            <Text>Bad Nauheim und Wetteraukreis: Friedberg, Butzbach, Niddatal, Karben und alle Gemeinden im Wetteraukreis</Text>
            <NearbyCities current="bad-nauheim" />
          </Abschnitt>

          <OrtWerkzeuge ort={'Bad Nauheim'} land={'Hessen'} altbau={49.7} miete={8.22} />


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

            ort={'Bad Nauheim'}

            herkunft="umgebung"

            stimmen={DIREKT_ERHALTEN.filter((b) => ['k-20260605-daniel', 'k-20260327-marco'].includes(b.id))}

          />


          <Abschnitt id="haeufige-fragen-24h-pflege" titel="Häufige Fragen — 24h-Pflege in Bad Nauheim">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
