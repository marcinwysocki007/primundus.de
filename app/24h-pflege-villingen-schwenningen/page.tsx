import type { Metadata } from 'next'
import { OrtStimmen } from '@/components/orte/OrtStimmen'
import { DIREKT_ERHALTEN } from '@/lib/bewertungen-direkt'
import { AnsprechpartnerinGross, KontaktBand } from '@/components/ArticleCTA'
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
  { id: 'was-ist-24-stunden', title: "Was 24-Stunden-Betreuung in Villingen-Schwenningen bedeutet" },
  { id: 'kosten-und-kassenzuschuesse-in', title: "Kosten & Kassenzuschüsse in Villingen-Schwenningen 2026" },
  { id: 'polnische-betreuungskraefte-in-villingen', title: "Polnische Betreuungskräfte in Villingen-Schwenningen" },
  { id: '24-stunden-pflege-im', title: "24-Stunden-Pflege im Schwarzwald-Baar-Kreis" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause in Villingen-Schwenningen ausmacht" },
  { id: 'einzugsgebiet-villingen-schwenningen', title: "Einzugsgebiet Villingen-Schwenningen" },
  { id: 'werkzeuge', title: "Was es in Villingen-Schwenningen kostet, und was die Pflegekasse dazugibt" },
  { id: 'so-arbeiten-wir', title: "So arbeiten wir" },
  { id: 'stimmen-vor-ort', title: "Familien aus der Region über uns" },
  { id: 'haeufige-fragen-24h-pflege', title: "Häufige Fragen — 24h-Pflege in Villingen-Schwenningen" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Villingen-Schwenningen | 6× Testsieger',
  description: 'Betreuung zu Hause durch geprüfte Kräfte, die Sie vorab sehen – und Entlastung für Angehörige. Ihren Preis sehen Sie sofort online, mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-villingen-schwenningen' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege Villingen-Schwenningen — Betreuungskraft zuhause | Primundus',
    description: 'Geprüfte 24h-Betreuungskraft in Villingen-Schwenningen. Täglich kündbar, rechtssicher, startklar.',
    url: 'https://primundus.de/24h-pflege-villingen-schwenningen',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Villingen-Schwenningen?', a: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Baden-Württemberg (Eigenanteil rund 3.660 €/Monat, vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Villingen-Schwenningen starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
  { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt zu festen Zeiten für einzelne Aufgaben. Eine 24h-Betreuungskraft lebt im Haushalt: Sie hilft bei Körperpflege und Alltag, ist bei Bedarf auch nachts da und versorgt den Haushalt mit. Bei Demenz zählt vor allem, dass es über Wochen dieselbe Person ist und niemand umziehen muss.' },
  { q: 'Ist 24h-Pflege über Primundus in Villingen-Schwenningen rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
  { q: 'Wie viele ältere Menschen leben in Villingen-Schwenningen?', a: '9.923 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 11,3 Prozent — in Baden-Württemberg 10,5 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 24,8 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Baden-Württemberg: 23,6 Prozent). In diesen Haushalten ist nachts niemand da, der einspringen könnte — genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Villingen-Schwenningen — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Villingen-Schwenningen im Schnitt 2,6 Wohnungen, in Baden-Württemberg 2,1. 53,8 Prozent der Gebäude stehen frei, 21,3 Prozent stehen in geschlossener Reihe. 51,8 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Villingen-Schwenningen ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Macht es einen Unterschied, ob ich in Villingen oder in Schwenningen wohne?', a: 'Für unsere Betreuung nicht — Anreise und Preis sind in beiden Stadtteilen und in allen zehn Ortschaften gleich. Statistisch gibt es den Unterschied aber: Villingen liegt beim Durchschnittsalter bei 44,1 Jahren, Schwenningen bei 42,1, die Ortschaften bei 45,1. Die beiden fast gleich großen Zentren (Villingen 41.136, Schwenningen 36.915 Einwohner) liegen rund fünf Kilometer auseinander und altern unterschiedlich schnell. In der Gesamtstadt leben 19.752 Menschen über 65, das sind 22,1 Prozent.' },
  { q: 'Welches Einzugsgebiet wird in Villingen-Schwenningen bedient?', a: 'Villingen-Schwenningen und Schwarzwald-Baar-Kreis: Donaueschingen, Blumberg, Triberg und alle Gemeinden im Schwarzwald-Baar-Kreis' },
  { q: 'Ist in einer Wohnung in Villingen-Schwenningen Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Villingen-Schwenningen hat im Schnitt 91,9 m², 20,4 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 73,1 % der Gebäude in Villingen-Schwenningen sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Baden-Württemberg zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.660 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause bleiben bei Pflegegrad 3 ab ca. 923 € — nach Pflegegeld, anteiligem Entlastungsbudget und Steuerermäßigung. Das sind rund 2.737 € Unterschied im Monat, 32.844 € im Jahr.' },
]

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-villingen-schwenningen#service',
    name: 'Primundus — 24h-Pflege Villingen-Schwenningen',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte in Villingen-Schwenningen. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-villingen-schwenningen',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'City', name: 'Villingen-Schwenningen' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Regionen', item: 'https://primundus.de/regionen' },
      { '@type': 'ListItem', position: 3, name: 'Villingen-Schwenningen', item: 'https://primundus.de/24h-pflege-villingen-schwenningen' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    // Aus FRAGEN erzeugt — ausgezeichnet wird genau das, was auf der Seite steht.
    mainEntity: FRAGEN.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  },
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
            { label: 'Villingen-Schwenningen' },
          ]}
          augenbraue="24-Stunden-Pflege in Villingen-Schwenningen"
          titel="24-Stunden-Pflege und Betreuung in Villingen-Schwenningen"
          einleitung={<>Zwei Städte, ein Zuhause: Ob im Villinger Zähringerviertel oder auf der Schwenninger Seite Richtung Neckarquelle — wer hier alt geworden ist, bleibt gern. Eine Betreuungskraft von Primundus zieht mit ein, wenn es allein nicht mehr geht, und ist bei Bedarf auch nachts da, auch im Umland vom Schwarzwald bis zur Baar. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>}
          aktualisiert="28. August 2026"
          lesezeit="6 Min."
          blick={[
            'Preis bei Primundus: ab 2.150 €/Monat',
            'Ihr Eigenanteil bei Pflegegrad 3: ab ca. 923 €/Monat',
            'Pflegeheim in Baden-Württemberg: Eigenanteil rund 3.660 €/Monat (vdek, 07/2026)',
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich',
          ]}
          blickTitel="Villingen-Schwenningen auf einen Blick"
          person={<AnsprechpartnerinGross ort="Villingen-Schwenningen" />}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist-24-stunden" titel="Was 24-Stunden-Betreuung in Villingen-Schwenningen bedeutet">
            <Text>
              Eine Betreuungskraft zieht bei Ihnen ein, hilft bei Körperpflege, beim Essen und im Alltag, versorgt den Haushalt mit und ist bei Bedarf
              auch nachts da. Anders als beim ambulanten Dienst, der zweimal am Tag kommt und wieder geht. Und anders als im
              Heim, wo der Umzug ansteht. Das Zuhause in Villingen-Schwenningen bleibt, der gewohnte Tagesablauf auch.
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

          <Abschnitt id="kosten-und-kassenzuschuesse-in" titel="Kosten & Kassenzuschüsse in Villingen-Schwenningen 2026">
            <Tabelle
              titel="Kostenbeispiel — Pflegegrad 3 in Villingen-Schwenningen"
              zeilen={[
                ['Kosten Primundus', 'ab 2.150 €/Monat'],
                ['− Pflegegeld PG 3', '− 599 €/Monat'],
                ['− Entlastungsbudget (anteilig)', '− ca. 295 €/Monat'],
                ['− Steuerermäßigung (20 %, bis 4.000 €/Jahr)', '− ca. 333 €/Monat'],
                [<strong key="e">Ihr Eigenanteil</strong>, <strong key="w">ab ca. 923 €/Monat</strong>],
              ]}
              betont={1}
              fuss="Eine Person, Werte aus unserem Kostenrechner, zzgl. An- und Abreise 125 € je Strecke · Pflegeheim in Baden-Württemberg: Eigenanteil rund 3.660 €/Monat (vdek, 07/2026) — 24h-Pflege zuhause ist oft günstiger und erhält das Zuhause"
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
            <RechnerKasten src="ort-villingen-schwenningen" />
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-in-villingen" titel="Polnische Betreuungskräfte in Villingen-Schwenningen">
            <Text>Wer in Villingen-Schwenningen nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Sie kommen aus Polen und sind in Villingen-Schwenningen und im gesamten Umland im Einsatz.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Was eine polnische Betreuungskraft kostet:</strong> ab 2.150 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen. Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro Eigenanteil — deutlich weniger als ein Heimplatz, der hier im Schnitt rund 3.660 Euro im Monat kostet.</Text>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Polnische Betreuungskräfte — das Entsendemodell erklärt</a>.</Text>
          </Abschnitt>

          <Abschnitt id="24-stunden-pflege-im" titel="24-Stunden-Pflege im Schwarzwald-Baar-Kreis">
            <Text>Unsere Betreuungskräfte ziehen in Villingen-Schwenningen und im Schwarzwald-Baar-Kreis ein — auch in den kleineren Gemeinden, in denen sonst kaum jemand anbietet. Die Anreise dauert überall gleich lang, der Preis ist derselbe.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause in Villingen-Schwenningen ausmacht">
            <Text>Villingen-Schwenningen ist pflegerisch nicht eine Stadt, sondern zwei Einzugsgebiete. Die beiden historischen Zentren liegen rund fünf Kilometer auseinander und sind fast gleich groß — Villingen mit 41.136, Schwenningen mit 36.915 Einwohnern —, und sie altern unterschiedlich:{' '} <strong className="text-pm-ink font-semibold">Villingen liegt beim Durchschnittsalter bei 44,1 Jahren, Schwenningen bei 42,1, die zehn Ortschaften bei 45,1.</strong> Wer für Marbach oder Herzogenweiler plant, plant unter anderen Vorzeichen als für die Schwenninger Innenstadt.</Text>
            <Text>In der Stadt leben 19.752 Menschen über 65, das sind 22,1 Prozent. Die Pflegezahlen selbst gibt es in Baden-Württemberg nur für den Kreis: Im Schwarzwald-Baar-Kreis sind 13.617 Menschen pflegebedürftig — eine Pflegequote von 6,4 Prozent gegenüber 5,6 im Land, und ein Zuwachs von 16 Prozent gegenüber 2021. 55,2 Prozent werden allein von Angehörigen versorgt, 16,8 Prozent von einem ambulanten Dienst, 16,1 Prozent leben im Heim — letzteres etwas mehr als im Land mit 14,9 Prozent.</Text>
            <Text>Eine Einschränkung sagen wir dazu, statt sie zu überspielen: Ob hinter dem höheren Heimanteil auch mehr Heimplätze stehen, lässt sich für diesen Kreis nicht belegen — Baden-Württemberg veröffentlicht die Platzzahlen nicht kreisscharf. In anderen Regionen zeigen diese beiden Kennzahlen oft in entgegengesetzte Richtungen. Wir rechnen das nicht hoch, sondern lassen die Frage offen.</Text>
            <Text>Geriatrisch ist die Lage gemischt. Das Schwarzwald-Baar Klinikum führt keine eigenständige geriatrische Fachabteilung, sondern einen geriatrischen Schwerpunkt — einen konsiliarischen Dienst, der die geriatrische Frührehabilitation in der Inneren Medizin und der Unfallchirurgie leitet. Eine geriatrische Rehaklinik gibt es dagegen am Ort, Am Klosterwald; sie firmiert unter zwei Namen, ist aber eine Adresse. Lassen Sie sich vor einer Entscheidung unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos und trägerunabhängig.</Text>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-villingen-schwenningen" titel="Einzugsgebiet Villingen-Schwenningen">
            <Text>Villingen-Schwenningen und Schwarzwald-Baar-Kreis: Donaueschingen, Blumberg, Triberg und alle Gemeinden im Schwarzwald-Baar-Kreis</Text>
            <NearbyCities current="villingen-schwenningen" />
          </Abschnitt>

          <OrtWerkzeuge ort={'Villingen-Schwenningen'} land={'Baden-Württemberg'} altbau={51.8} miete={7.12} />


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

            ort={'Villingen-Schwenningen'}

            herkunft="umgebung"

            stimmen={DIREKT_ERHALTEN.filter((b) => ['k-20260829-sabine', 'k-20260318-thomas'].includes(b.id))}

          />


          <Abschnitt id="haeufige-fragen-24h-pflege" titel="Häufige Fragen — 24h-Pflege in Villingen-Schwenningen">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
