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
  { id: 'was-ist-24-stunden', title: "Was 24-Stunden-Betreuung in Aalen bedeutet" },
  { id: 'kosten-und-kassenzuschuesse-in', title: "Kosten & Kassenzuschüsse in Aalen 2026" },
  { id: 'polnische-betreuungskraefte-in-aalen', title: "Polnische Betreuungskräfte in Aalen" },
  { id: '24-stunden-pflege-im', title: "24-Stunden-Pflege im Ostalbkreis" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause in Aalen ausmacht" },
  { id: 'einzugsgebiet-aalen', title: "Einzugsgebiet Aalen" },
  { id: 'werkzeuge', title: "Was es in Aalen kostet, und was die Pflegekasse dazugibt" },
  { id: 'so-arbeiten-wir', title: "So arbeiten wir" },
  { id: 'stimmen-vor-ort', title: "Familien aus der Region über uns" },
  { id: 'haeufige-fragen-24h-pflege', title: "Häufige Fragen — 24h-Pflege in Aalen" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Aalen | 6× Testsieger',
  description: 'Betreuung zu Hause durch geprüfte Kräfte, die Sie vorab sehen – und Entlastung für Angehörige. Ihren Preis sehen Sie sofort online, mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-aalen' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege Aalen — Betreuungskraft zuhause | Primundus',
    description: 'Geprüfte 24h-Betreuungskraft in Aalen. Täglich kündbar, rechtssicher, startklar.',
    url: 'https://primundus.de/24h-pflege-aalen',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Aalen?', a: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Baden-Württemberg (Eigenanteil rund 3.660 €/Monat, vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Aalen starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
  { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt zu festen Zeiten für einzelne Aufgaben. Eine 24h-Betreuungskraft lebt im Haushalt: Sie hilft bei Körperpflege und Alltag, ist bei Bedarf auch nachts da und versorgt den Haushalt mit. Bei Demenz zählt vor allem, dass es über Wochen dieselbe Person ist und niemand umziehen muss.' },
  { q: 'Ist 24h-Pflege über Primundus in Aalen rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
  { q: 'Wie viele ältere Menschen leben in Aalen?', a: '7.427 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 11,1 Prozent — in Baden-Württemberg 10,5 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 23,1 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Baden-Württemberg: 23,6 Prozent). In diesen Haushalten ist nachts niemand da, der einspringen könnte — genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Aalen — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Aalen im Schnitt 2,0 Wohnungen, in Baden-Württemberg 2,1. 72,7 Prozent der Gebäude stehen frei, 10,8 Prozent stehen in geschlossener Reihe. 44,5 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Aalen ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Was ist mit Kurzzeitpflege in Aalen, wenn ich selbst ausfalle?', a: 'Das ist in Aalen der wundeste Punkt. Die Zahl der Kurzzeitpflegeplätze in der Stadt ist von 40 im Jahr 2022 auf 22 im Jahr 2024 gefallen, also fast halbiert. Genau diese Plätze braucht man aber, wenn die pflegende Tochter selbst operiert wird oder zwei Wochen wegmuss. Bei einer Betreuung im Haushalt stellt sich die Frage anders: Fällt Ihre Betreuungskraft aus, stellen wir Ersatz, ohne dass für den Wechsel selbst etwas berechnet wird — es fallen lediglich die An- und Abreisekosten der neuen Kraft an. Ein Heimplatz muss dafür nicht gesucht werden.' },
  { q: 'Welches Einzugsgebiet wird in Aalen bedient?', a: 'Aalen und Ostalbkreis: Schwäbisch Gmünd, Ellwangen, Bopfingen, Heidenheim und alle Gemeinden im Ostalbkreis' },
  { q: 'Ist in einer Wohnung in Aalen Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Aalen hat im Schnitt 97,6 m², 17,9 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 83,6 % der Gebäude in Aalen sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Baden-Württemberg zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.660 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause bleiben bei Pflegegrad 3 ab ca. 923 € — nach Pflegegeld, anteiligem Entlastungsbudget und Steuerermäßigung. Das sind rund 2.737 € Unterschied im Monat, 32.844 € im Jahr.' },
]

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-aalen#service',
    name: 'Primundus — 24h-Pflege Aalen',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte in Aalen. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-aalen',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'City', name: 'Aalen' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Regionen', item: 'https://primundus.de/regionen' },
      { '@type': 'ListItem', position: 3, name: 'Aalen', item: 'https://primundus.de/24h-pflege-aalen' },
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
            { label: 'Aalen' },
          ]}
          augenbraue="24-Stunden-Pflege in Aalen"
          titel="24-Stunden-Pflege und Betreuung in Aalen"
          einleitung={<>Ob in Wasseralfingen, Unterkochen oder Fachsenfeld: Auf der Ostalb hält man an Haus und Hof fest — oft über Generationen. Eine Betreuungskraft von Primundus sorgt dafür, dass das Alter daran nichts ändert: Sie zieht mit ein und ist bei Bedarf auch nachts da. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>}
          aktualisiert="28. August 2026"
          lesezeit="6 Min."
          blick={[
            'Preis bei Primundus: ab 2.150 €/Monat',
            'Ihr Eigenanteil bei Pflegegrad 3: ab ca. 923 €/Monat',
            'Pflegeheim in Baden-Württemberg: Eigenanteil rund 3.660 €/Monat (vdek, 07/2026)',
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich',
          ]}
          blickTitel="Aalen auf einen Blick"
          person={<AnsprechpartnerinGross ort="Aalen" />}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist-24-stunden" titel="Was 24-Stunden-Betreuung in Aalen bedeutet">
            <Text>
              Eine Betreuungskraft zieht bei Ihnen ein, hilft bei Körperpflege, beim Essen und im Alltag, versorgt den Haushalt mit und ist bei Bedarf
              auch nachts da. Anders als beim ambulanten Dienst, der zweimal am Tag kommt und wieder geht. Und anders als im
              Heim, wo der Umzug ansteht. Das Zuhause in Aalen bleibt, der gewohnte Tagesablauf auch.
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

          <Abschnitt id="kosten-und-kassenzuschuesse-in" titel="Kosten & Kassenzuschüsse in Aalen 2026">
            <Tabelle
              titel="Kostenbeispiel — Pflegegrad 3 in Aalen"
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
            <RechnerKasten src="ort-aalen" />
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-in-aalen" titel="Polnische Betreuungskräfte in Aalen">
            <Text>Wer in Aalen nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Sie kommen aus Polen und sind in Aalen und im gesamten Umland im Einsatz.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Was eine polnische Betreuungskraft kostet:</strong> ab 2.150 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen. Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro Eigenanteil — deutlich weniger als ein Heimplatz, der hier im Schnitt rund 3.660 Euro im Monat kostet.</Text>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Polnische Pflegekräfte — Kosten, Recht und Ablauf</a>.</Text>
          </Abschnitt>

          <Abschnitt id="24-stunden-pflege-im" titel="24-Stunden-Pflege im Ostalbkreis">
            <Text>Unsere Betreuungskräfte ziehen in Aalen und im Ostalbkreis ein — auch in den kleineren Gemeinden, in denen sonst kaum jemand anbietet. Die Anreise dauert überall gleich lang, der Preis ist derselbe.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause in Aalen ausmacht">
            <Text>Der Ostalbkreis ist ein gutes Beispiel dafür, dass ein hoher Heim-Anteil nicht viele Heimplätze bedeutet.{' '} <strong className="text-pm-ink font-semibold">16,6 Prozent der Pflegebedürftigen leben hier im Heim, in Baden-Württemberg sind es 14,9 Prozent — bei den Plätzen je 1.000 Einwohner über 65 liegt der Kreis mit 43,8 aber nur im Landesschnitt (42,9).</strong>{' '} Der hohe Anteil kommt also nicht von einem großzügigen Angebot. Dazu passt die auffällig niedrige ambulante Quote: 13,1 Prozent gegen 16,4 Prozent im Land.</Text>
            <Text>Für die Stadt Aalen rechnet der Kreis in seiner Pflegebedarfsplanung selbst vor, wohin das führt.{' '} <strong className="text-pm-ink font-semibold">Bis 2035 sinkt der Platzbestand im Ostalbkreis von 2.938 auf 2.841 — vor allem, weil Doppelzimmer wegfallen müssen — während der Bedarf auf 3.340 steigt. 499 Plätze Lücke, in 31 von 42 Kommunen.</strong>{' '} Für Aalen selbst sind es 19 Plätze, für den Planungsraum Aalen 90. Die Zahl der Pflegebedürftigen im Kreis hat sich zwischen 2001 und 2021 mehr als verdoppelt und ist seither noch einmal um 12,8 Prozent gestiegen — der Wert von 2023 liegt bereits über dem, was für 2030 vorhergesagt war.</Text>
            <Text>Am härtesten trifft Angehörige eine andere Entwicklung:{' '} <strong className="text-pm-ink font-semibold">Die Kurzzeitpflegeplätze in Aalen sind von 40 im Jahr 2022 auf 22 im Jahr 2024 gefallen — fast halbiert.</strong> Kurzzeitpflege ist genau das, was häusliche Pflege überhaupt tragfähig macht: der Platz für die zwei Wochen, in denen die pflegende Tochter selbst im Krankenhaus liegt. Auch bei der Tagespflege liegt Aalen mit 2,9 Plätzen je 1.000 Ältere unter dem Kreiswert von 5,5, obwohl die Stadt das Zentrum ist.</Text>
            <Text>Aalen erstreckt sich über 18 mal 25 Kilometer, und die Teilorte liegen auf sehr verschiedenen Höhen: Die Rathäuser von Ebnat und Waldhausen stehen auf 613 und 611 Metern, rund 180 Meter über dem Marktplatz der Kernstadt auf 430 Metern — sie sitzen oben auf dem Albuch, während Aalen selbst im Kochertal liegt. Auf die Alterung wirkt sich das interessanterweise nicht aus: Waldhausen ist mit 20,8 Prozent über 65 einer der jüngsten Stadtbezirke. Überhaupt ist Aalen kleinräumig sehr ausgeglichen — zwischen Dewangen (24,5 Prozent) und Unterkochen (20,8) liegen nur 3,7 Prozentpunkte.</Text>
            <Text>Bei der Altersmedizin steht Aalen ungewöhnlich gut da:{' '} <strong className="text-pm-ink font-semibold">Das Ostalb-Klinikum deckt Akutgeriatrie (12 Betten), stationäre geriatrische Rehabilitation (45 Betten) und eine geriatrische Tagesklinik am selben Standort ab.</strong> Diese vollständige Kette an einem Ort ist selten — in vielen Städten liegen Akutstation und Reha zehn oder zwanzig Kilometer auseinander. Ein Hinweis dennoch: Die Reha wird von einer rechtlich eigenständigen Gesellschaft betrieben, weshalb manche Verzeichnisse sie als separates Haus führen.</Text>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-aalen" titel="Einzugsgebiet Aalen">
            <Text>Aalen und Ostalbkreis: Schwäbisch Gmünd, Ellwangen, Bopfingen, Heidenheim und alle Gemeinden im Ostalbkreis</Text>
            <NearbyCities current="aalen" />
          </Abschnitt>

          <OrtWerkzeuge ort={'Aalen'} land={'Baden-Württemberg'} altbau={44.5} miete={7.55} />


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

            ort={'Aalen'}

            herkunft="umgebung"

            stimmen={DIREKT_ERHALTEN.filter((b) => ['k-20260829-sabine', 'k-20260318-thomas'].includes(b.id))}

          />


          <Abschnitt id="haeufige-fragen-24h-pflege" titel="Häufige Fragen — 24h-Pflege in Aalen">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
