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
  { id: 'was-ist-24-stunden', title: "Was 24-Stunden-Betreuung in Neubrandenburg bedeutet" },
  { id: 'kosten-und-kassenzuschuesse-in', title: "Kosten & Kassenzuschüsse in Neubrandenburg 2026" },
  { id: 'polnische-betreuungskraefte-in-neubrandenburg', title: "Polnische Betreuungskräfte in Neubrandenburg" },
  { id: '24-stunden-pflege-in', title: "24-Stunden-Pflege in der Mecklenburgischen Seenplatte" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause in Neubrandenburg ausmacht" },
  { id: 'einzugsgebiet-neubrandenburg', title: "Einzugsgebiet Neubrandenburg" },
  { id: 'werkzeuge', title: "Was es in Neubrandenburg kostet, und was die Pflegekasse dazugibt" },
  { id: 'so-arbeiten-wir', title: "So arbeiten wir" },
  { id: 'stimmen-vor-ort', title: "Familien aus der Region über uns" },
  { id: 'haeufige-fragen-24h-pflege', title: "Häufige Fragen — 24h-Pflege in Neubrandenburg" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Neubrandenburg | 6× Testsieger',
  description: 'Betreuung zu Hause durch geprüfte Kräfte, die Sie vorab sehen – und Entlastung für Angehörige. Ihren Preis sehen Sie sofort online, mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-neubrandenburg' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege Neubrandenburg — Betreuungskraft zuhause | Primundus',
    description: 'Geprüfte 24h-Betreuungskraft in Neubrandenburg. Täglich kündbar, rechtssicher, startklar.',
    url: 'https://primundus.de/24h-pflege-neubrandenburg',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Neubrandenburg?', a: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Mecklenburg-Vorpommern (Eigenanteil rund 3.030 €/Monat, vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Neubrandenburg starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
  { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt zu festen Zeiten für einzelne Aufgaben. Eine 24h-Betreuungskraft lebt im Haushalt: Sie hilft bei Körperpflege und Alltag, ist bei Bedarf auch nachts da und versorgt den Haushalt mit. Bei Demenz zählt vor allem, dass es über Wochen dieselbe Person ist und niemand umziehen muss.' },
  { q: 'Ist 24h-Pflege über Primundus in Neubrandenburg rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
  { q: 'Wie viele ältere Menschen leben in Neubrandenburg?', a: '8.291 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 13,9 Prozent — in Mecklenburg-Vorpommern 12,6 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 30,3 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Mecklenburg-Vorpommern: 28,5 Prozent). In diesen Haushalten ist nachts niemand da, der einspringen könnte — genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Neubrandenburg — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Neubrandenburg im Schnitt 4,4 Wohnungen, in Mecklenburg-Vorpommern 2,2. 43,0 Prozent der Gebäude stehen frei, 41,2 Prozent stehen in geschlossener Reihe. 25,9 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Neubrandenburg ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Welches Einzugsgebiet wird in Neubrandenburg bedient?', a: 'Neubrandenburg und Mecklenburgische Seenplatte: Waren, Demmin, Altentreptow und alle Gemeinden im Landkreis Mecklenburgische Seenplatte' },
  { q: 'Ist in einer Wohnung in Neubrandenburg Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Neubrandenburg hat im Schnitt 69,7 m², 37,7 % sind kleiner als 60 m². Das ist eng, deshalb klären wir vor der Zusage am Telefon, welches Zimmer frei wird — meist das ehemalige Kinder- oder Arbeitszimmer. 64,0 % der Gebäude in Neubrandenburg sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Mecklenburg-Vorpommern zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.030 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause bleiben bei Pflegegrad 3 ab ca. 923 € — nach Pflegegeld, anteiligem Entlastungsbudget und Steuerermäßigung. Das sind rund 2.107 € Unterschied im Monat, 25.284 € im Jahr.' },
]

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-neubrandenburg#service',
    name: 'Primundus — 24h-Pflege Neubrandenburg',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte in Neubrandenburg. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-neubrandenburg',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'City', name: 'Neubrandenburg' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Regionen', item: 'https://primundus.de/regionen' },
      { '@type': 'ListItem', position: 3, name: 'Neubrandenburg', item: 'https://primundus.de/24h-pflege-neubrandenburg' },
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
            { label: 'Neubrandenburg' },
          ]}
          augenbraue="24-Stunden-Pflege in Neubrandenburg"
          titel="24-Stunden-Pflege und Betreuung in Neubrandenburg"
          einleitung={<>Hinter den vier Toren oder draußen am Tollensesee: Neubrandenburger bleiben, wo sie verwurzelt sind. Eine Betreuungskraft von Primundus zieht mit ein, wenn Mutter oder Vater Hilfe brauchen, und ist bei Bedarf auch nachts da. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>}
          aktualisiert="28. August 2026"
          lesezeit="6 Min."
          blick={[
            'Preis bei Primundus: ab 2.150 €/Monat',
            'Ihr Eigenanteil bei Pflegegrad 3: ab ca. 923 €/Monat',
            'Pflegeheim in Mecklenburg-Vorpommern: Eigenanteil rund 3.030 €/Monat (vdek, 07/2026)',
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich',
          ]}
          blickTitel="Neubrandenburg auf einen Blick"
          person={<AnsprechpartnerinGross ort="Neubrandenburg" />}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist-24-stunden" titel="Was 24-Stunden-Betreuung in Neubrandenburg bedeutet">
            <Text>
              Eine Betreuungskraft zieht bei Ihnen ein, hilft bei Körperpflege, beim Essen und im Alltag, versorgt den Haushalt mit und ist bei Bedarf
              auch nachts da. Anders als beim ambulanten Dienst, der zweimal am Tag kommt und wieder geht. Und anders als im
              Heim, wo der Umzug ansteht. Das Zuhause in Neubrandenburg bleibt, der gewohnte Tagesablauf auch.
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

          <Abschnitt id="kosten-und-kassenzuschuesse-in" titel="Kosten & Kassenzuschüsse in Neubrandenburg 2026">
            <Tabelle
              titel="Kostenbeispiel — Pflegegrad 3 in Neubrandenburg"
              zeilen={[
                ['Kosten Primundus', 'ab 2.150 €/Monat'],
                ['− Pflegegeld PG 3', '− 599 €/Monat'],
                ['− Entlastungsbudget (anteilig)', '− ca. 295 €/Monat'],
                ['− Steuerermäßigung (20 %, bis 4.000 €/Jahr)', '− ca. 333 €/Monat'],
                [<strong key="e">Ihr Eigenanteil</strong>, <strong key="w">ab ca. 923 €/Monat</strong>],
              ]}
              betont={1}
              fuss="Eine Person, Werte aus unserem Kostenrechner, zzgl. An- und Abreise 125 € je Strecke · Pflegeheim in Mecklenburg-Vorpommern: Eigenanteil rund 3.030 €/Monat (vdek, 07/2026) — 24h-Pflege zuhause ist oft günstiger und erhält das Zuhause"
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
            <RechnerKasten src="ort-neubrandenburg" />
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-in-neubrandenburg" titel="Polnische Betreuungskräfte in Neubrandenburg">
            <Text>Wer in Neubrandenburg nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Sie kommen aus Polen und sind in Neubrandenburg und im gesamten Umland im Einsatz.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Was eine polnische Betreuungskraft kostet:</strong> ab 2.150 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen. Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro Eigenanteil — deutlich weniger als ein Heimplatz, der hier im Schnitt rund 3.030 Euro im Monat kostet.</Text>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Polnische Betreuungskräfte — das Entsendemodell erklärt</a>.</Text>
          </Abschnitt>

          <Abschnitt id="24-stunden-pflege-in" titel="24-Stunden-Pflege in der Mecklenburgischen Seenplatte">
            <Text>Unsere Betreuungskräfte ziehen in Neubrandenburg und in der Mecklenburgischen Seenplatte ein — auch in den kleineren Gemeinden, in denen sonst kaum jemand anbietet. Die Anreise dauert überall gleich lang, der Preis ist derselbe.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause in Neubrandenburg ausmacht">
            <Text>Neubrandenburg ist städtischer gebaut, als der Landesschnitt vermuten lässt: Auf ein Gebäude kommen hier 4,4 Wohnungen, in Mecklenburg-Vorpommern 2,2. Mehr Geschosswohnung, weniger Haus mit Garten — und damit häufiger die Frage nach dem Stockwerk und der Treppe. 51,8 Prozent der Wohnungen wurden zwischen 1970 und 1989 gebaut, in Mecklenburg-Vorpommern 26,1 Prozent.</Text>
            <Text>Altbau vor 1950 macht in Neubrandenburg 7,5 Prozent des Bestands aus, in Mecklenburg-Vorpommern 27,8 Prozent. In Neubrandenburg wohnen nur 20,0 Prozent der Haushalte im Eigentum, in Mecklenburg-Vorpommern 39,5 Prozent. In eine größere Wohnung zu ziehen ist für die meisten keine Option — es muss also in der vorhandenen gehen.</Text>
            <Text>Gut zwei von fünf Gebäuden in Neubrandenburg ist ein Reihenhaus — in Mecklenburg-Vorpommern 17,6 Prozent. Ob Reihenhaus oder Mehrfamilienhaus im Block, gemeinsam ist ihnen die Treppe: Wenn das Treppensteigen zur täglichen Hürde wird, ist jemand im Haus oft die Alternative zum Umzug. Die durchschnittliche Wohnung misst 69,7 Quadratmeter gegenüber 82,5 in Mecklenburg-Vorpommern — rund 13 Quadratmeter weniger. Nur 43,0 Prozent der Gebäude stehen frei, in Mecklenburg-Vorpommern sind es 63,6 Prozent.</Text>
            <Text>In Zahlen: 8.291 Menschen in Neubrandenburg sind 75 Jahre oder älter, und es gibt 37.419 Wohnungen in 8.555 Gebäuden. Ob darunter eine ist, in der eine Betreuungskraft ein eigenes Zimmer bekommt, entscheidet sich nicht an der Statistik, sondern an Ihrem Grundriss — und das klären wir vorab.</Text>
            <Text>Was davon auf Ihre Situation zutrifft, klären wir vor jeder Entscheidung — insbesondere die Frage nach dem eigenen Zimmer für die Betreuungskraft. Und lassen Sie sich unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos, trägerunabhängig und kommt auf Wunsch zu Ihnen nach Hause.</Text>
            <p className="text-[15px] leading-[1.6] text-pm-body/70">Zahlen zu Wohnen und Haushalten: Zensus 2022, Statistische Ämter des Bundes und der Länder, Stichtag 15. Mai 2022.</p>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-neubrandenburg" titel="Einzugsgebiet Neubrandenburg">
            <Text>Neubrandenburg und Mecklenburgische Seenplatte: Waren, Demmin, Altentreptow und alle Gemeinden im Landkreis Mecklenburgische Seenplatte</Text>
            <NearbyCities current="neubrandenburg" />
          </Abschnitt>

          <OrtWerkzeuge ort={'Neubrandenburg'} land={'Mecklenburg-Vorpommern'} altbau={25.9} miete={5.49} />


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

          <OrtStimmen

            ort={'Neubrandenburg'}

            herkunft="umgebung"

            stimmen={DIREKT_ERHALTEN.filter((b) => ['k-20250221-klaus'].includes(b.id))}

          />


          <Abschnitt id="haeufige-fragen-24h-pflege" titel="Häufige Fragen — 24h-Pflege in Neubrandenburg">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
