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
  { id: 'was-ist-24-stunden', title: "Was 24-Stunden-Betreuung in Moers bedeutet" },
  { id: 'kosten-und-kassenzuschuesse-in', title: "Kosten & Kassenzuschüsse in Moers 2026" },
  { id: 'polnische-betreuungskraefte-in-moers', title: "Polnische Betreuungskräfte in Moers" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause in Moers ausmacht" },
  { id: 'einzugsgebiet-moers', title: "Einzugsgebiet Moers" },
  { id: 'werkzeuge', title: "Was es in Moers kostet, und was die Pflegekasse dazugibt" },
  { id: 'so-arbeiten-wir', title: "So arbeiten wir" },
  { id: 'stimmen-vor-ort', title: "Familien aus Moers über uns" },
  { id: 'haeufige-fragen-24h-pflege', title: "Häufige Fragen — 24h-Pflege in Moers" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Moers | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare polnische Pflegekräfte für Moers und Preis direkt online sehen. Anreise in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-moers' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Moers | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare polnische Pflegekräfte für Moers und Preis direkt online sehen. Anreise in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-moers',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Moers?', a: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Pflegeheim in Moers.' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Moers starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
  { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt zu festen Zeiten für einzelne Aufgaben. Eine 24h-Betreuungskraft lebt im Haushalt: Sie hilft bei Körperpflege und Alltag, ist bei Bedarf auch nachts da und versorgt den Haushalt mit. Bei Demenz zählt vor allem, dass es über Wochen dieselbe Person ist und niemand umziehen muss.' },
  { q: 'Ist 24h-Pflege über Primundus in Moers rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
  { q: 'Wie viele ältere Menschen leben in Moers?', a: '11.863 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 11,8 Prozent — in Nordrhein-Westfalen 10,7 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 27,6 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Nordrhein-Westfalen: 24,2 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Moers — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Moers im Schnitt 2,1 Wohnungen, in Nordrhein-Westfalen 2,3. 33,6 Prozent der Gebäude stehen frei, 33,4 Prozent stehen in geschlossener Reihe. 54,4 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Moers ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Bekommt man in Moers einen Heimplatz in der eigenen Stadt?', a: 'Häufig nicht. Von den 758 Moerserinnen und Moersern, die stationär gepflegt werden, leben nur 492 in Moers selbst — 266, also gut jeder Dritte, mussten die Stadt verlassen. Moers hat die dünnste Heimplatz-Ausstattung im gesamten Kreis Wesel: Auf einen Platz kommen hier 8,8 Einwohner über 80, im Kreisschnitt 6,8. Die 873 Plätze der Stadt sind zwar die zweithöchste absolute Zahl im Kreis, Moers ist aber auch die mit Abstand größte Kommune. Die Auslastung lag zuletzt bei 97 Prozent. Für viele Familien ist die Betreuung zu Hause deshalb die Lösung, die den Lebensmittelpunkt erhält.' },
  { q: 'Welches Einzugsgebiet wird in Moers bedient?', a: 'Moers und Umland: Duisburg, Krefeld, Kamp-Lintfort, Rheinberg, Xanten und alle Gemeinden im Kreis Wesel am Niederrhein' },
  { q: 'Ist in einer Wohnung in Moers Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Moers hat im Schnitt 90,0 m², 19,0 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 78,8 % der Gebäude in Moers sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Nordrhein-Westfalen zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.580 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause bleiben bei Pflegegrad 3 ab ca. 923 € — nach Pflegegeld, anteiligem Entlastungsbudget und Steuerermäßigung. Das sind rund 2.657 € Unterschied im Monat, 31.884 € im Jahr.' },
]

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-moers#service',
    name: 'Primundus — 24h-Pflege Moers',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte in Moers. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-moers',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'City', name: 'Moers' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Regionen', item: 'https://primundus.de/regionen' },
      { '@type': 'ListItem', position: 3, name: 'Moers', item: 'https://primundus.de/24h-pflege-moers' },
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
            { label: 'Moers' },
          ]}
          augenbraue="24-Stunden-Pflege in Moers"
          titel="24-Stunden-Pflege und Betreuung in Moers"
          einleitung={<>Am Niederrhein gibt man sein Zuhause nicht her: das Haus in Kapellen, die Wohnung in Asberg, den Garten in Repelen. Eine Betreuungskraft von Primundus sorgt dafür, dass es dabei bleibt — sie zieht mit ein, übernimmt Haushalt und Pflegealltag und ist auch nachts da. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>}
          aktualisiert="28. August 2026"
          lesezeit="6 Min."
          blick={[
            'Preis bei Primundus: ab 2.150 €/Monat',
            'Ihr Eigenanteil bei Pflegegrad 3: ab ca. 923 €/Monat',
            'Pflegeheim in Nordrhein-Westfalen: Eigenanteil rund 3.580 €/Monat (vdek, 07/2026)',
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich',
          ]}
          blickTitel="Moers auf einen Blick"
          person={<AnsprechpartnerinGross ort="Moers" />}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist-24-stunden" titel="Was 24-Stunden-Betreuung in Moers bedeutet">
            <Text>
              Eine Betreuungskraft zieht bei Ihnen ein, hilft bei Körperpflege, beim Essen und im Alltag, versorgt den Haushalt mit und ist bei Bedarf
              auch nachts da. Anders als beim ambulanten Dienst, der zweimal am Tag kommt und wieder geht. Und anders als im
              Heim, wo der Umzug ansteht. Das Zuhause in Moers bleibt, der gewohnte Tagesablauf auch.
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

          <Abschnitt id="kosten-und-kassenzuschuesse-in" titel="Kosten & Kassenzuschüsse in Moers 2026">
            <Tabelle
              titel="Kostenbeispiel — Pflegegrad 3 in Moers"
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
            <RechnerKasten src="ort-moers" />
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-in-moers" titel="Polnische Betreuungskräfte in Moers">
            <Text>Wer in Moers nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Sie kommen aus Polen und sind in Moers und im gesamten Umland im Einsatz.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Was eine polnische Betreuungskraft kostet:</strong> ab 2.150 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen. Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro Eigenanteil — deutlich weniger als ein Heimplatz, der hier im Schnitt rund 3.580 Euro im Monat kostet.</Text>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Polnische Betreuungskräfte — das Entsendemodell erklärt</a>.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause in Moers ausmacht">
            <Text>Eine Zahl aus dem Pflegeplan des Kreises Wesel beschreibt die Moerser Lage genauer als jede andere:{' '} <strong className="text-pm-ink font-semibold">Von den 758 Moerserinnen und Moersern, die stationär gepflegt werden, leben nur 492 in der eigenen Stadt. 266 mussten Moers verlassen</strong> — gut jeder Dritte. Der Grund ist kein Zufall: Moers ist die Kommune mit der dünnsten Heimplatz-Ausstattung im ganzen Kreis. Auf einen Platz kommen hier 8,8 Einwohner über 80, im Kreisschnitt 6,8. Die 873 Plätze der Stadt klingen nach viel — Moers ist aber auch die mit Abstand größte Kommune des Kreises.</Text>
            <Text>Dass es eng ist, zeigt auch die Auslastung: 97 Prozent der Moerser Plätze waren zuletzt belegt. Und die Nachfrage kommt zusätzlich von außen — auf einen auswärtigen Bewohner kommen in Moerser Heimen 2,5 aus dem Kreis, im Kreisschnitt sind es 3,1. Kurzzeitpflege gibt es in der ganzen Stadt in nur einer solitären Einrichtung mit 15 Plätzen. Kreisweit waren zuletzt von 201 als frei gemeldeten Plätzen tatsächlich nur 125 unmittelbar verfügbar.</Text>
            <Text>Wie stark der Bedarf mit dem Alter steigt, zeigt der Kreis in einer Zahlenreihe, die man sich merken sollte: Von den 70- bis 80-Jährigen sind 20,5 Prozent pflegebedürftig, von den 80- bis 85-Jährigen 48,7 Prozent, von den 85- bis 90-Jährigen 74,4 Prozent —{' '} <strong className="text-pm-ink font-semibold">und von den über 90-Jährigen praktisch alle.</strong> Im Kreis Wesel werden 59,6 Prozent aller Pflegebedürftigen allein von Angehörigen versorgt.</Text>
            <Text>Innerhalb von Moers verteilt sich das Alter sehr ungleich, und zwar anders als man denkt. Am ältesten ist Schwafheim: 16,6 Prozent der Einwohner sind über 75, Durchschnittsalter 50,0 Jahre. Am jüngsten ist{' '} <strong className="text-pm-ink font-semibold">Meerbeck mit 8,1 Prozent und einem Durchschnittsalter von 41,5 Jahren — ausgerechnet die alte Bergarbeitersiedlung der Zeche Rheinpreußen.</strong> Wer erwartet, dass Zechensiedlungen überaltert sind, liegt hier falsch; Meerbeck hat sich über Zuwanderung verjüngt.</Text>
            <Text>Zur Geriatrie ein Hinweis, der Angehörigen eine Fahrt erspart. Im Krankenhausplan Nordrhein-Westfalen ist keinem der beiden Moerser Krankenhäuser die Leistungsgruppe Geriatrie zugewiesen; das St. Josef Krankenhaus Moers führt geriatrische Leistungen innerhalb der Inneren Medizin. Besonders leicht zu verwechseln:{' '} <strong className="text-pm-ink font-semibold">Das St. Josef-Hospital in Xanten hat die Geriatrie — das St. Josef Krankenhaus in Moers nicht.</strong> Beide gehören demselben Träger, die Namen sind fast gleich, die Häuser liegen rund 30 Kilometer auseinander. Und das Reha-Zentrum Niederrhein steht in Wesel, nicht in Moers. Lassen Sie sich vorher unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos und neutral.</Text>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-moers" titel="Einzugsgebiet Moers">
            <Text>Moers und Umland: Duisburg, Krefeld, Kamp-Lintfort, Rheinberg, Xanten und alle Gemeinden im Kreis Wesel am Niederrhein</Text>
            <NearbyCities current="moers" />
          </Abschnitt>

          <OrtWerkzeuge ort={'Moers'} land={'Nordrhein-Westfalen'} altbau={54.4} miete={6.26} />


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

            ort={'Moers'}

            stimmen={DIREKT_ERHALTEN.filter((b) => ['k-20250527-volker'].includes(b.id))}

          />


          <Abschnitt id="haeufige-fragen-24h-pflege" titel="Häufige Fragen — 24h-Pflege in Moers">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand ohneBewertungen />
    </>
  )
}
