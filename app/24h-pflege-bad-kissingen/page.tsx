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
  { id: 'was-ist-24-stunden', title: "Was 24-Stunden-Betreuung in Bad Kissingen bedeutet" },
  { id: 'kosten-und-kassenzuschuesse-in', title: "Kosten & Kassenzuschüsse in Bad Kissingen 2026" },
  { id: 'polnische-betreuungskraefte-in-bad', title: "Polnische Betreuungskräfte in Bad Kissingen" },
  { id: '24-stunden-pflege-im', title: "24-Stunden-Pflege im Landkreis Bad Kissingen" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause in Bad Kissingen ausmacht" },
  { id: 'einzugsgebiet-bad-kissingen', title: "Einzugsgebiet Bad Kissingen" },
  { id: 'werkzeuge', title: "Was es in Bad Kissingen kostet, und was die Pflegekasse dazugibt" },
  { id: 'so-arbeiten-wir', title: "So arbeiten wir" },
  { id: 'stimmen-vor-ort', title: "Familien aus der Region über uns" },
  { id: 'haeufige-fragen-24h-pflege', title: "Häufige Fragen — 24h-Pflege in Bad Kissingen" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Bad Kissingen: zu Hause statt Heim',
  description: 'Körperpflege, Kochen, Einkäufe, Begleitung, nachts jemand im Haus: Eine Betreuungskraft übernimmt das, was Angehörige allein nicht mehr schaffen.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-bad-kissingen' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege Bad Kissingen — Betreuungskraft zuhause | Primundus',
    description: 'Geprüfte 24h-Betreuungskraft in Bad Kissingen. Täglich kündbar, rechtssicher, startklar.',
    url: 'https://primundus.de/24h-pflege-bad-kissingen',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Bad Kissingen?', a: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Bayern (Eigenanteil rund 3.200 €/Monat, vdek 07/2026).' },
  { q: 'Gibt es in Bayern besondere Pflegeförderungen?', a: 'Ja: Bayerisches Landespflegegeld — 500 €/Jahr ab Pflegegrad 2 mit Hauptwohnsitz in Bayern (bis 2025: 1.000 €). Antrag beim Landesamt für Pflege (LfP Bayern), kumulierbar mit allen Pflegekassen-Leistungen.' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Bad Kissingen starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
  { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
  { q: 'Ist 24h-Pflege über Primundus in Bad Kissingen rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
  { q: 'Warum ist 24-Stunden-Pflege in Bad Kissingen so häufig ein Thema?', a: 'Weil hier besonders viele hochbetagte Menschen allein leben. Bad Kissingen ist nach dem Landesamt für Statistik die zweitälteste Gemeinde Unterfrankens: Jeder achte Einwohner ist über 80, in Bayern nur jeder fünfzehnte. Dazu kommt, dass fast die Hälfte aller Haushalte Einpersonenhaushalte sind. Wenn dann jemand nach einem Klinikaufenthalt nach Hause kommt, ist niemand da — genau diese Lücke schließt eine Betreuungskraft, die mit einzieht.' },
  { q: 'Es gibt doch so viele Kliniken in Bad Kissingen — reicht das nicht?', a: 'Für die Behandlung ja, für den Alltag danach nicht. Über ein Dutzend Reha-Kliniken und ein Krankenhaus mit eigener Akutgeriatrie sorgen dafür, dass im Landkreis mehr als jeder vierte Beschäftigte in der Gesundheitswirtschaft arbeitet — der höchste Anteil aller bayerischen Kreise. Nur endet all das an der eigenen Wohnungstür. Die Kliniken decken die Wochen ab, in denen behandelt wird, nicht die Monate danach.' },
  { q: 'Welches Einzugsgebiet wird in Bad Kissingen bedient?', a: 'Bad Kissingen und Landkreis Bad Kissingen: Hammelburg, Münnerstadt, Bad Brückenau und alle Gemeinden im Landkreis Bad Kissingen' },
  { q: 'Ist in einer Wohnung in Bad Kissingen Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Bad Kissingen hat im Schnitt 93,1 m², 22,5 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 75,0 % der Gebäude in Bad Kissingen sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Bayern zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.200 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause bleiben bei Pflegegrad 3 ab ca. 923 € — nach Pflegegeld, anteiligem Entlastungsbudget und Steuerermäßigung. Das sind rund 2.277 € Unterschied im Monat, 27.324 € im Jahr.' },
]

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-bad-kissingen#service',
    name: 'Primundus — 24h-Pflege Bad Kissingen',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte in Bad Kissingen. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-bad-kissingen',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'City', name: 'Bad Kissingen' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24h-Pflege Bad Kissingen', item: 'https://primundus.de/24h-pflege-bad-kissingen' },
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
            { label: 'Bad Kissingen' },
          ]}
          augenbraue="24-Stunden-Pflege in Bad Kissingen"
          titel="24-Stunden-Pflege und Betreuung in Bad Kissingen"
          einleitung={<>Bad Kissingen kennt sich mit gutem Altwerden aus — Kurgarten, Rosengarten, kurze Wege, Kurtradition seit Generationen. Wenn es allein in der Wohnung am Kurpark oder im Haus in Garitz nicht mehr geht, zieht eine Betreuungskraft von Primundus mit ein: bei Bedarf auch nachts da, damit das Zuhause bleibt, was es ist. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>}
          aktualisiert="27. August 2026"
          lesezeit="6 Min."
          blick={[
            'Preis bei Primundus: ab 2.150 €/Monat',
            'Ihr Eigenanteil bei Pflegegrad 3: ab ca. 923 €/Monat',
            'Pflegeheim in Bayern: Eigenanteil rund 3.200 €/Monat (vdek, 07/2026)',
            'Bayern: Landespflegegeld +500 €/Jahr',
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich',
          ]}
          blickTitel="Bad Kissingen auf einen Blick"
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist-24-stunden" titel="Was 24-Stunden-Betreuung in Bad Kissingen bedeutet">
            <Text>
              Eine Betreuungskraft zieht bei Ihnen ein, führt den Haushalt, hilft bei Körperpflege und Alltag und ist bei Bedarf
              auch nachts da. Anders als beim ambulanten Dienst, der zweimal am Tag kommt und wieder geht. Und anders als im
              Heim, wo der Umzug ansteht. Das Zuhause in Bad Kissingen bleibt, der gewohnte Tagesablauf auch.
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

          <Abschnitt id="kosten-und-kassenzuschuesse-in" titel="Kosten & Kassenzuschüsse in Bad Kissingen 2026">
            <Tabelle
              titel="Kostenbeispiel — Pflegegrad 3 in Bad Kissingen"
              zeilen={[
                ['Kosten Primundus', 'ab 2.150 €/Monat'],
                ['− Pflegegeld PG 3', '− 599 €/Monat'],
                ['− Entlastungsbudget (anteilig)', '− ca. 295 €/Monat'],
                ['− Steuerermäßigung (20 %, bis 4.000 €/Jahr)', '− ca. 333 €/Monat'],
                [<strong key="e">Ihr Eigenanteil</strong>, <strong key="w">ab ca. 923 €/Monat</strong>],
              ]}
              betont={1}
              fuss="Eine Person, Werte aus unserem Kostenrechner, zzgl. An- und Abreise 125 € je Strecke · Pflegeheim in Bayern: Eigenanteil rund 3.200 €/Monat (vdek, 07/2026) — 24h-Pflege zuhause ist oft günstiger und erhält das Zuhause"
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
            <Kasten ton="gruen" titel="Bayern-Vorteil: Landespflegegeld +500 €/Jahr">
              <Text>Bayern zahlt zusätzlich 500 €/Jahr (ca. 42 €/Monat) ab Pflegegrad 2, wenn der Hauptwohnsitz in Bayern liegt (bis 2025: 1.000 €). Antrag beim Landesamt für Pflege (LfP Bayern) — kumulierbar mit allen Pflegekasse-Zuschüssen.</Text>
            </Kasten>
            <RechnerKasten src="ort-bad-kissingen" />
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-in-bad" titel="Polnische Betreuungskräfte in Bad Kissingen">
            <Text>Wer in Bad Kissingen nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Sie kommen aus Polen und sind in Bad Kissingen und im gesamten Umland im Einsatz.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Was eine polnische Betreuungskraft kostet:</strong> ab 2.150 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen. Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro Eigenanteil — deutlich weniger als ein Heimplatz, der hier im Schnitt rund 3.200 Euro im Monat kostet.</Text>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Polnische Pflegekräfte — Kosten, Recht und Ablauf</a>.</Text>
          </Abschnitt>

          <Abschnitt id="24-stunden-pflege-im" titel="24-Stunden-Pflege im Landkreis Bad Kissingen">
            <Text>Unsere Betreuungskräfte ziehen in Bad Kissingen und im Landkreis Bad Kissingen ein — auch in den kleineren Gemeinden, in denen sonst kaum jemand anbietet. Die Anreise dauert überall gleich lang, der Preis ist derselbe.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause in Bad Kissingen ausmacht">
            <Text>Bad Kissingen ist eine der ältesten Städte Bayerns — nach Zahlen des Landesamts für Statistik die zweitälteste Gemeinde Unterfrankens. Das Durchschnittsalter liegt bei gut 49 Jahren gegenüber 44 im Land, fast jeder Dritte ist über 65, und <strong className="text-pm-ink font-semibold">jeder achte Einwohner ist über 80</strong> — in Bayern ist es nur jeder fünfzehnte.</Text>
            <Text>Das liegt übrigens nicht an den Kurgästen, wie oft vermutet wird: Wer im Schnitt sechs Tage bleibt, wird nirgends als Einwohner gezählt. Die gemeldete Bevölkerung ist tatsächlich so alt. Und noch eine Zahl gehört dazu: <strong className="text-pm-ink font-semibold">Fast die Hälfte aller Haushalte sind Einpersonenhaushalte</strong>. Viele hochbetagte Menschen in Bad Kissingen leben also allein — und zwar überwiegend im flachen Talkern, der ältesten Ecke der Stadt, nicht in den höher gelegenen Ortsteilen.</Text>
            <Text>Kaum irgendwo gibt es dabei so viel Gesundheitsversorgung auf engem Raum: über ein Dutzend Reha-Kliniken, dazu das Krankenhaus mit eigener Akutgeriatrie. Im Landkreis arbeitet mehr als jeder vierte Beschäftigte in der Gesundheitswirtschaft — der höchste Anteil aller bayerischen Kreise. Nur endet all das an der eigenen Wohnungstür. Die Kliniken decken die Wochen ab, in denen behandelt wird, nicht die Monate danach. Wer allein lebt und nach einer Reha nach Hause kommt, steht genau vor dieser Lücke — und sie ist es, die eine Betreuungskraft schließt, die mit einzieht.</Text>
            <Text>Bevor Sie sich entscheiden, lassen Sie sich neutral beraten: Die Fachstellen für Pflege- und Behindertenberatung in Bayern beraten kostenlos und unabhängig von Anbietern, auf Wunsch auch bei Ihnen zu Hause (§ 7a SGB XI). Dazu kommt das bayerische Landespflegegeld von 500 Euro im Jahr ab Pflegegrad 2, unabhängig davon, wer die Pflege übernimmt.</Text>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-bad-kissingen" titel="Einzugsgebiet Bad Kissingen">
            <Text>Bad Kissingen und Landkreis Bad Kissingen: Hammelburg, Münnerstadt, Bad Brückenau und alle Gemeinden im Landkreis Bad Kissingen</Text>
            <NearbyCities current="bad-kissingen" />
          </Abschnitt>

          <OrtWerkzeuge ort={'Bad Kissingen'} land={'Bayern'} altbau={47.0} miete={6.3} />


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

            ort={'Bad Kissingen'}

            herkunft="umgebung"

            stimmen={DIREKT_ERHALTEN.filter((b) => ['k-20260823-michael', 'k-20260416-barbara'].includes(b.id))}

          />


          <Abschnitt id="haeufige-fragen-24h-pflege" titel="Häufige Fragen — 24h-Pflege in Bad Kissingen">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
