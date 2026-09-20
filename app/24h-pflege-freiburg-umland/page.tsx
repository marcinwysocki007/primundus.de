import type { Metadata } from 'next'
import { OrtStimmen } from '@/components/orte/OrtStimmen'
import { DIREKT_ERHALTEN } from '@/lib/bewertungen-direkt'
import { Ansprechpartnerin, KontaktBand } from '@/components/ArticleCTA'
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
  { id: 'was-ist-24-stunden', title: "Was 24-Stunden-Betreuung in Freiburg & Umland bedeutet" },
  { id: 'kosten-und-kassenzuschuesse-in', title: "Kosten & Kassenzuschüsse in Breisach am Rhein 2026" },
  { id: 'polnische-betreuungskraefte-in-freiburg', title: "Polnische Betreuungskräfte in Freiburg & Umland" },
  { id: '24-stunden-pflege-im', title: "24-Stunden-Pflege im westlichen Breisgau-Hochschwarzwald" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause in Freiburg und im Umland ausmacht" },
  { id: 'einzugsgebiet-breisach-am-rhein', title: "Einzugsgebiet Breisach am Rhein" },
  { id: 'werkzeuge', title: "Was es in Freiburg & Umland kostet, und was die Pflegekasse dazugibt" },
  { id: 'so-arbeiten-wir', title: "So arbeiten wir" },
  { id: 'stimmen-vor-ort', title: "Familien aus der Region über uns" },
  { id: 'haeufige-fragen-24h-pflege', title: "Häufige Fragen — 24h-Pflege in Breisach am Rhein" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Freiburg & Umland | 6× Testsieger',
  description: 'Betreuung zu Hause durch geprüfte Kräfte, die Sie vorab sehen – und Entlastung für Angehörige. Ihren Preis sehen Sie sofort online, mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-freiburg-umland' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege Breisach am Rhein — Betreuungskraft zuhause | Primundus',
    description: 'Geprüfte 24h-Betreuungskraft in Breisach am Rhein. Täglich kündbar, rechtssicher, startklar.',
    url: 'https://primundus.de/24h-pflege-freiburg-umland',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Breisach am Rhein?', a: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Baden-Württemberg (Eigenanteil rund 3.660 €/Monat, vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Breisach am Rhein starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
  { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
  { q: 'Ist 24h-Pflege über Primundus in Breisach am Rhein rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
  { q: 'Ist unsere Wohnung in Freiburg überhaupt groß genug für eine Betreuungskraft?', a: 'Das ist in Freiburg tatsächlich die erste Frage. Die Stadt hat mit rund 81 Quadratmetern die kleinsten Wohnungen der Region — im Land sind es 99 —, und gut ein Drittel misst weniger als 60 Quadratmeter. Eine Betreuungskraft braucht ein eigenes Zimmer, das ist die Voraussetzung. In vielen Freiburger Wohnungen lässt sich das einrichten, in einer kleinen Zwei-Zimmer-Wohnung nicht. Wir klären das vorab mit Ihnen, bevor irgendetwas entschieden wird — und sagen es offen, wenn es nicht passt.' },
  { q: 'Wäre ein Umzug in eine altersgerechte Wohnung nicht einfacher?', a: 'In Freiburg leider selten. Die Stadt hat mit gut zwei Prozent die niedrigste Leerstandsquote aller 44 Stadt- und Landkreise Baden-Württembergs und gehört zu den vier teuersten Großstädten Deutschlands. Wer hier eine bezahlbare, barrierearme Wohnung sucht, sucht lange — und muss meist das gewohnte Viertel verlassen. Deshalb ist die praktikablere Frage in der Regel, wie das Leben in der vorhandenen Wohnung weitergehen kann.' },
  { q: 'Kommt eine Betreuungskraft auch in die Gemeinden im Schwarzwald?', a: 'Ja, und dort ist der Unterschied besonders groß. Zwischen der Rheinebene und dem Hochschwarzwald liegen über 1.300 Höhenmeter. Ein ambulanter Dienst, der Gemeinden am Berg anfährt, plant im Winter anders als im Sommer, und die Termine richten sich nach der Tour. Eine Betreuungskraft, die im Haus wohnt, ist davon unabhängig. Anfahrtskosten berechnen wir nicht, der Preis ist im Umland derselbe wie in der Stadt.' },
  { q: 'Welches Einzugsgebiet wird in Breisach am Rhein bedient?', a: 'Breisach und westlicher Breisgau-Hochschwarzwald: Freiburg-Umland, Vogtsburg, Ihringen, Kaiserstuhl und alle Gemeinden im westlichen Landkreis Breisgau-Hochschwarzwald' },
  { q: 'Ist in einer Wohnung in Freiburg & Umland Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Freiburg & Umland hat im Schnitt 80,8 m², 35,0 % sind kleiner als 60 m². Das ist eng, deshalb klären wir vor der Zusage am Telefon, welches Zimmer frei wird — meist das ehemalige Kinder- oder Arbeitszimmer. 55,1 % der Gebäude in Freiburg & Umland sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Baden-Württemberg zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.660 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause bleiben bei Pflegegrad 3 ab ca. 923 € — nach Pflegegeld, anteiligem Entlastungsbudget und Steuerermäßigung. Das sind rund 2.737 € Unterschied im Monat, 32.844 € im Jahr.' },
]

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-freiburg-umland#service',
    name: 'Primundus — 24h-Pflege Breisach am Rhein',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte in Breisach am Rhein. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-freiburg-umland',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'City', name: 'Breisach am Rhein' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24h-Pflege Breisach am Rhein', item: 'https://primundus.de/24h-pflege-freiburg-umland' },
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
            { label: 'Breisach am Rhein' },
          ]}
          augenbraue="24-Stunden-Pflege in Breisach am Rhein"
          titel="24-Stunden-Pflege und Betreuung in Freiburg & Umland"
          einleitung={<>Vom Kaiserstuhl bis ins Dreisamtal: Rund um Freiburg wohnt man mit Blick auf Reben und Schwarzwald — in Gundelfingen, Denzlingen, Bad Krozingen oder Kirchzarten. Damit das Zuhause auch mit Pflegebedarf bleibt, zieht eine Betreuungskraft von Primundus mit ein und ist bei Bedarf auch nachts da. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>}
          aktualisiert="27. August 2026"
          lesezeit="6 Min."
          blick={[
            'Preis bei Primundus: ab 2.150 €/Monat',
            'Ihr Eigenanteil bei Pflegegrad 3: ab ca. 923 €/Monat',
            'Pflegeheim in Baden-Württemberg: Eigenanteil rund 3.660 €/Monat (vdek, 07/2026)',
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich',
          ]}
          blickTitel="Breisach am Rhein auf einen Blick"
          person={<Ansprechpartnerin karte ort="Freiburg & Umland" titel="Ihre Ansprechpartnerin für Freiburg & Umland" />}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist-24-stunden" titel="Was 24-Stunden-Betreuung in Freiburg & Umland bedeutet">
            <Text>
              Eine Betreuungskraft zieht bei Ihnen ein, führt den Haushalt, hilft bei Körperpflege und Alltag und ist bei Bedarf
              auch nachts da. Anders als beim ambulanten Dienst, der zweimal am Tag kommt und wieder geht. Und anders als im
              Heim, wo der Umzug ansteht. Das Zuhause in Freiburg & Umland bleibt, der gewohnte Tagesablauf auch.
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

          <Abschnitt id="kosten-und-kassenzuschuesse-in" titel="Kosten & Kassenzuschüsse in Breisach am Rhein 2026">
            <Tabelle
              titel="Kostenbeispiel — Pflegegrad 3 in Breisach am Rhein"
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
            <RechnerKasten src="ort-freiburg-umland" />
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-in-freiburg" titel="Polnische Betreuungskräfte in Freiburg & Umland">
            <Text>Wer in Freiburg & Umland nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Sie kommen aus Polen und sind in Freiburg & Umland und im gesamten Umland im Einsatz.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Was eine polnische Betreuungskraft kostet:</strong> ab 2.150 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen. Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro Eigenanteil — deutlich weniger als ein Heimplatz, der hier im Schnitt rund 3.660 Euro im Monat kostet.</Text>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Polnische Betreuungskräfte — das Entsendemodell erklärt</a>.</Text>
          </Abschnitt>

          <Abschnitt id="24-stunden-pflege-im" titel="24-Stunden-Pflege im westlichen Breisgau-Hochschwarzwald">
            <Text>Unsere Betreuungskräfte ziehen in Freiburg & Umland und im westlichen Breisgau-Hochschwarzwald ein — auch in den kleineren Gemeinden, in denen sonst kaum jemand anbietet. Die Anreise dauert überall gleich lang, der Preis ist derselbe.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause in Freiburg und im Umland ausmacht">
            <Text>In Freiburg entscheidet die Wohnung. Die Stadt hat mit rund 81 Quadratmetern die kleinsten Wohnungen weit und breit — im Land sind es 99 —, und <strong className="text-pm-ink font-semibold"> gut ein Drittel aller Freiburger Wohnungen misst weniger als 60 Quadratmeter</strong>. Fast 60 Prozent liegen in Häusern mit sieben und mehr Parteien, und knapp drei Viertel der Freiburger wohnen zur Miete. Für Pflege zu Hause heißt das: Der Platz für ein Pflegebett, für Hilfsmittel und für ein eigenes Zimmer der Betreuungskraft ist hier die erste Frage, nicht die letzte.</Text>
            <Text>Umziehen ist dabei keine echte Option. Freiburg hat mit gut zwei Prozent die <strong className="text-pm-ink font-semibold"> niedrigste Leerstandsquote aller 44 Stadt- und Landkreise Baden-Württembergs</strong> und gehört zu den vier teuersten Großstädten Deutschlands. Wer hier eine bezahlbare, altersgerechte Wohnung sucht, sucht lange. Deshalb ist die Frage meist nicht, wohin jemand zieht, sondern wie das Leben in der vorhandenen Wohnung weitergehen kann.</Text>
            <Text>Das Umland ist in fast jedem Punkt das Gegenteil. In Breisgau-Hochschwarzwald und Emmendingen sind die Wohnungen mit gut 103 Quadratmetern deutlich größer, mehr als die Hälfte der Menschen wohnt im Eigentum, und in beiden Kreisen ist knapp die Hälfte aller Gebäude ein Ein- oder Zweifamilienhaus. Dort ist selten der Platz das Problem, sondern die Treppe ins Obergeschoss — und die Entfernung. Zwischen der Rheinebene und dem Hochschwarzwald liegen über 1.300 Höhenmeter; ein ambulanter Dienst, der Gemeinden am Berg anfährt, plant im Winter anders als im Sommer.</Text>
            <Text>Eine Zahl sollten Familien kennen, bevor es eilt: In Freiburg gibt es nur rund zwei Dutzend Kurzzeitpflegeplätze — für eine Stadt mit über 230.000 Einwohnern. Wer nach einem Krankenhausaufenthalt kurzfristig eine Überbrückung braucht, findet sie also selten. Eine Betreuungskraft, die mit einzieht, lässt sich dagegen in wenigen Tagen organisieren und ist von Anfang an eine dauerhafte Lösung, keine Überbrückung.</Text>
            <Text>Bevor Sie entscheiden, lassen Sie sich unabhängig beraten: Die Pflegestützpunkte in Baden-Württemberg beraten kostenlos und trägerunabhängig, auf Wunsch auch bei Ihnen zu Hause. Dieser Anspruch ist gesetzlich geregelt (§ 7a SGB XI) und gilt unabhängig davon, wofür Sie sich am Ende entscheiden.</Text>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-breisach-am-rhein" titel="Einzugsgebiet Breisach am Rhein">
            <Text>Breisach und westlicher Breisgau-Hochschwarzwald: Freiburg-Umland, Vogtsburg, Ihringen, Kaiserstuhl und alle Gemeinden im westlichen Landkreis Breisgau-Hochschwarzwald</Text>
            <NearbyCities current="freiburg-umland" />
          </Abschnitt>

          <OrtWerkzeuge ort={'Freiburg & Umland'} land={'Baden-Württemberg'} altbau={48.1} miete={9.74} />


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

            ort={'Freiburg & Umland'}

            herkunft="umgebung"

            stimmen={DIREKT_ERHALTEN.filter((b) => ['k-20260829-sabine', 'k-20260318-thomas'].includes(b.id))}

          />


          <Abschnitt id="haeufige-fragen-24h-pflege" titel="Häufige Fragen — 24h-Pflege in Breisach am Rhein">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
