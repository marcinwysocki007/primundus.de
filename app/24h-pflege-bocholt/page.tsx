import type { Metadata } from 'next'
import { OrtStimmen } from '@/components/orte/OrtStimmen'
import { DIREKT_ERHALTEN } from '@/lib/bewertungen-direkt'
import { AnsprechpartnerinGross, KontaktBand } from '@/components/ArticleCTA'
import { NearbyCities } from '@/components/NearbyCities'
import { OrtWerkzeuge } from '@/components/orte/OrtWerkzeuge'
import {
  MehrDazu, Abschnitt, Fragen, Gegenueber, Kasten, Punkte, RatgeberKopf, StandardUnterzeile, RatgeberRumpf, RechnerKasten, Schritte, Tabelle, Text,
} from '@/components/vorlage/Ratgeber'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).

const SECTIONS = [
  { id: 'was-ist-24-stunden', title: "Was 24-Stunden-Betreuung in Bocholt bedeutet" },
  { id: 'kosten-und-kassenzuschuesse-in', title: "Kosten & Kassenzuschüsse in Bocholt 2026" },
  { id: 'polnische-betreuungskraefte-in-bocholt', title: "Polnische Betreuungskräfte in Bocholt" },
  { id: '24-stunden-pflege-im', title: "24-Stunden-Pflege im Westmünsterland" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause in Bocholt ausmacht" },
  { id: 'einzugsgebiet-bocholt', title: "Einzugsgebiet Bocholt" },
  { id: 'werkzeuge', title: "Was es in Bocholt kostet, und was die Pflegekasse dazugibt" },
  { id: 'so-arbeiten-wir', title: "So arbeiten wir" },
  { id: 'stimmen-vor-ort', title: "Familien aus der Region über uns" },
  { id: 'haeufige-fragen-24h-pflege', title: "Häufige Fragen — 24h-Pflege in Bocholt" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege und Betreuung in Bocholt | 6× Testsieger',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Bocholt in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-bocholt' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege und Betreuung in Bocholt | 6× Testsieger',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Bocholt in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-bocholt',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Bocholt?', a: 'Das hängt vom Pflegebedarf und den Deutschkenntnissen der Betreuungskraft ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 €/Monat, dazu kommen bis zu 333 €/Monat Steuerermäßigung; ein Heimplatz in Nordrhein-Westfalen kostet im Schnitt rund 3.580 € Eigenanteil (vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Bocholt starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
  { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt zu festen Zeiten für einzelne Aufgaben. Eine 24h-Betreuungskraft lebt im Haushalt: Sie hilft bei Körperpflege und Alltag, ist bei Bedarf auch nachts da und versorgt den Haushalt mit. Bei Demenz zählt vor allem, dass es über Wochen dieselbe Person ist und niemand umziehen muss.' },
  { q: 'Ist 24h-Pflege über Primundus in Bocholt rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
  { q: 'Bocholt ist flach und fahrradfreundlich — reicht das nicht?', a: 'Die flache Lage hilft tatsächlich, und die Stadt selbst nennt sie in ihrem Mobilitätskonzept als guten Ausgangspunkt für Barrierefreiheit. In Bocholt werden über 40 Prozent aller Wege mit dem Rad zurückgelegt. Nur ist genau das Verkehrsmittel, das bei Gangunsicherheit, nachlassendem Sehvermögen oder Demenz als Erstes wegfällt — und danach bleibt ein Busangebot, das noch längst nicht durchgehend niederflurig ist. Die Flachheit verschiebt den Zeitpunkt, an dem es allein nicht mehr geht. Aufheben kann sie ihn nicht.' },
  { q: 'Sind Bocholter Wohnungen für Pflege zu Hause geeignet?', a: 'In aller Regel ja, barrierefrei sind sie aber selten. Am 22. März 1945 wurde Bocholt in fünfundzwanzig Minuten zu rund 85 Prozent zerstört — in der Altstadt blieben drei Häuser unversehrt. Was heute steht, ist deshalb fast vollständig Wiederaufbau- und Nachkriegsbestand: solide gebaut, aber zu einer Zeit, als niemand an Aufzüge oder bodengleiche Duschen dachte. Für die Betreuungskraft genügt ein eigenes Zimmer.' },
  { q: 'Kommt eine Betreuungskraft auch in die Bauerschaften und in den Kreis Borken?', a: 'Ja, und dort ist der Unterschied am deutlichsten. Bocholt ist die größte Stadt im Kreis Borken, aber nicht die Kreisstadt — das ist Borken selbst. Wer in Barlo, Stenern, Biemenhorst oder Richtung Isselburg und Rhede wohnt, kennt die längeren Wege: Ambulante Dienste fahren dort Touren, und die Termine richten sich nach der Route statt nach Ihrem Tagesablauf. Eine Betreuungskraft im Haus ist davon unabhängig, und Anfahrtskosten berechnen wir nicht.' },
  { q: 'Welches Einzugsgebiet wird in Bocholt bedient?', a: 'Bocholt und Westmünsterland: Rhede, Borken, Isselburg, Raesfeld und alle Gemeinden im Kreis Borken' },
  { q: 'Ist in einer Wohnung in Bocholt Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Bocholt hat im Schnitt 102,9 m², 15,2 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 87,4 % der Gebäude in Bocholt sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Nordrhein-Westfalen zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.580 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause zahlen Pflegegeld und anteiliges Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. 894 € im Monat, dazu kommen bis zu 333 € Steuerermäßigung — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten.' },
]

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-bocholt#service',
    name: 'Primundus — 24h-Pflege Bocholt',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte in Bocholt. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-bocholt',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'City', name: 'Bocholt' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Regionen', item: 'https://primundus.de/regionen' },
      { '@type': 'ListItem', position: 3, name: 'Bocholt', item: 'https://primundus.de/24h-pflege-bocholt' },
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
            { label: 'Bocholt' },
          ]}
          augenbraue="24-Stunden-Pflege in Bocholt"
          titel="24-Stunden-Pflege und Betreuung in Bocholt"
          einleitungTitel="Zuhause bleiben in Bocholt"
          einleitung={<>In Bocholt hat man sein Haus — in Biemenhorst, Mussum oder stadtnah an der Aa — und dort soll das Leben auch im Alter weitergehen, nicht in einem Heim. Eine Betreuungskraft von Primundus zieht mit ein und ist bei Bedarf auch nachts da, im ganzen Westmünsterland bis zur niederländischen Grenze. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>}
          aktualisiert="27. August 2026"
          lesezeit="6 Min."
          knopf={{ href: 'https://kostenrechner.primundus.de/?start=1&src=ort-bocholt', text: 'Preis & Betreuungskräfte ansehen' }}
          knopfOben
          unterzeile={<StandardUnterzeile ort="Bocholt" />}
          blick={[
            'Pflegegeld bei Pflegegrad 3: 599 €/Monat – auch mit Betreuungskraft',
            'Steuerermäßigung: 20 % der Kosten, bis 4.000 €/Jahr',
            'Pflegeheim in Nordrhein-Westfalen: Eigenanteil rund 3.580 €/Monat (vdek, 07/2026)',
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich',
          ]}
          blickTitel="Bocholt auf einen Blick"
          person={<AnsprechpartnerinGross ort="Bocholt" />}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist-24-stunden" titel="Was 24-Stunden-Betreuung in Bocholt bedeutet">
            <Text>
              Eine Betreuungskraft zieht bei Ihnen ein, hilft bei Körperpflege, beim Essen und im Alltag, versorgt den Haushalt mit und ist bei Bedarf
              auch nachts da. Anders als beim ambulanten Dienst, der zweimal am Tag kommt und wieder geht. Und anders als im
              Heim, wo der Umzug ansteht. Das Zuhause in Bocholt bleibt, der gewohnte Tagesablauf auch.
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

          <Abschnitt id="kosten-und-kassenzuschuesse-in" titel="Kosten & Kassenzuschüsse in Bocholt 2026">
            <Tabelle
              titel="Was Kasse und Finanzamt bei Pflegegrad 3 beisteuern"
              zeilen={[
                ['Pflegegeld PG 3', '599 €/Monat'],
                ['Entlastungsbudget (anteilig)', 'ca. 295 €/Monat'],
                ['Steuerermäßigung (20 %, bis 4.000 €/Jahr)', 'bis 333 €/Monat'],
                [<strong key="e">Zusammen</strong>, <strong key="w">bis zu ca. 1.227 €/Monat</strong>],
              ]}
              betont={1}
              fuss="Eine Person, Pflegegrad 3, Werte aus unserem Kostenrechner · Pflegeheim in Nordrhein-Westfalen: Eigenanteil rund 3.580 €/Monat (vdek, 07/2026) — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten"
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
            <RechnerKasten src="ort-bocholt" />
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-in-bocholt" titel="Polnische Betreuungskräfte in Bocholt">
            <Text>Wer in Bocholt nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Sie kommen aus Polen und sind in Bocholt und im gesamten Umland im Einsatz.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Was eine polnische Betreuungskraft kostet,</strong> hängt von der Pflegesituation und den Deutschkenntnissen ab — Ihren Preis zeigt der Kostenrechner in 2 Minuten. Pflegegeld und Entlastungsbudget zahlen bei Pflegegrad 3 zusammen bis zu ca. 894 Euro im Monat, dazu kommen bis zu 333 Euro Steuerermäßigung; ein Heimplatz kostet hier im Schnitt rund 3.580 Euro Eigenanteil.</Text>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Polnische Pflegekräfte — Kosten, Recht und Ablauf</a>.</Text>
          </Abschnitt>

          <Abschnitt id="24-stunden-pflege-im" titel="24-Stunden-Pflege im Westmünsterland">
            <Text>Unsere Betreuungskräfte ziehen in Bocholt und im Westmünsterland ein — auch in den kleineren Gemeinden, in denen sonst kaum jemand anbietet. Die Anreise dauert überall gleich lang, der Preis ist derselbe.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause in Bocholt ausmacht">
            <Text>Der Kreis Borken gilt als jung — Bocholt ist es nicht. <strong className="text-pm-ink font-semibold"> Gut sieben Prozent der Bocholter sind über 80</strong>, das ist der höchste Anteil aller siebzehn Kommunen des Kreises und liegt auf dem Niveau von Nordrhein-Westfalen insgesamt. Der Kreisdurchschnitt liegt darunter. Wer also vom „jungen Münsterland" auf die Stadt schließt, unterschätzt, wie viele Hochbetagte hier leben.</Text>
            <Text>Und die Versorgung ist knapp. Im Kreis Borken kommen auf jeden ambulanten Pflegedienst im Schnitt <strong className="text-pm-ink font-semibold">rund 108 Pflegebedürftige</strong> — in Nordrhein-Westfalen sind es 75, im Bund 71. Der Kreis Borken setzt stark auf ambulante Versorgung: Gut ein Viertel aller Pflegebedürftigen wird von einem Dienst betreut, im Land nur knapp ein Sechstel. Entsprechend ausgelastet sind die Dienste. Und der Kreis schreibt in seiner eigenen Pflegebedarfsplanung, dass es schwer sei, hier einen Kurzzeitpflegeplatz zu finden. Wer kurzfristig etwas braucht, merkt das sofort.</Text>
            <Text>Beim Wohnen prägt bis heute der 22. März 1945. In fünfundzwanzig Minuten wurde Bocholt zu rund 85 Prozent zerstört; in der Altstadt blieben drei Häuser unversehrt, und die Einwohnerzahl fiel von 35.000 auf etwa 8.000. In der Statistik zeigt sich das weniger an einem Übergewicht der fünfziger Jahre als am fehlenden Vorkriegsbestand: Nur knapp fünf Prozent der Bocholter Wohnungen stammen aus der Zeit vor 1919, in Nordrhein-Westfalen sind es gut zehn. Dafür ist der Bestand ungewöhnlich großzügig — fast 60 Prozent der Wohnungen liegen in Ein- oder Zweifamilienhäusern, die Eigentümerquote liegt bei über 50 Prozent, und eine Wohnung misst im Schnitt 103 Quadratmeter. Das heißt in der Praxis meist: eigenes Haus, eigene Treppe ins Obergeschoss, viel Fläche, die gepflegt werden will.</Text>
            <Text>Rundherum wird es schnell ländlich. Bocholt ist zwar die größte Stadt im Kreis Borken, aber nicht die Kreisstadt — das ist Borken selbst. Wer in einer der Bauerschaften wohnt, in Barlo, Stenern, Biemenhorst oder Richtung Isselburg und Rhede, kennt die längeren Wege: Ein ambulanter Dienst fährt hier Touren, und die Termine richten sich nach der Route. Eine Betreuungskraft, die im Haus wohnt, ist davon unabhängig. Anfahrtskosten berechnen wir nicht, der Preis ist überall derselbe.</Text>
            <Text>Ein Punkt, der im Ernstfall zählt: Eine geriatrische Fachabteilung gibt es am Bocholter Krankenhaus nicht. Wer nach einem Sturz oder Schlaganfall Altersmedizin braucht, wird nach Borken, Ahaus oder Gronau verlegt. Für die Zeit danach heißt das: Die Versorgung zu Hause sollte früh geklärt sein, nicht erst am Entlassungstag.</Text>
            <Text>Lassen Sie sich vorher unabhängig beraten: Die Pflegeberatung im Kreis Borken ist kostenlos, neutral und auf Wunsch bei Ihnen zu Hause. Dieser Anspruch steht Ihnen gesetzlich zu (§ 7a SGB XI) — unabhängig davon, für welchen Weg Sie sich danach entscheiden.</Text>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-bocholt" titel="Einzugsgebiet Bocholt">
            <Text>Bocholt und Westmünsterland: Rhede, Borken, Isselburg, Raesfeld und alle Gemeinden im Kreis Borken</Text>
            <NearbyCities current="bocholt" />
          </Abschnitt>

          <OrtWerkzeuge slug="bocholt" ort={'Bocholt'} land={'Nordrhein-Westfalen'} altbau={43.9} miete={6.57} />


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

            ort={'Bocholt'}

            stimmen={DIREKT_ERHALTEN.filter((b) => ['k-20260905-thomas', 'k-20260427-andreas'].includes(b.id))}

          />


          <Abschnitt id="haeufige-fragen-24h-pflege" titel="Häufige Fragen — 24h-Pflege in Bocholt">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand ohneBewertungen />
    </>
  )
}
