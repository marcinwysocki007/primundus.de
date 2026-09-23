import type { Metadata } from 'next'
import { AnsprechpartnerinGross, KontaktBand } from '@/components/ArticleCTA'
import { NearbyCities } from '@/components/NearbyCities'
import { OrtStimmen } from '@/components/orte/OrtStimmen'
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
  { id: 'was-ist-24-stunden', title: "Was 24-Stunden-Betreuung in Dessau-Roßlau bedeutet" },
  { id: 'kosten-und-kassenzuschuesse-in', title: "Kosten & Kassenzuschüsse in Dessau-Roßlau 2026" },
  { id: 'polnische-betreuungskraefte-in-dessau', title: "Polnische Betreuungskräfte in Dessau-Roßlau" },
  { id: '24-stunden-pflege-im', title: "24-Stunden-Pflege im Landkreis Anhalt-Bitterfeld" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause in Dessau-Roßlau ausmacht" },
  { id: 'einzugsgebiet-dessau-rosslau', title: "Einzugsgebiet Dessau-Roßlau" },
  { id: 'werkzeuge', title: "Was es in Dessau-Roßlau kostet, und was die Pflegekasse dazugibt" },
  { id: 'so-arbeiten-wir', title: "So arbeiten wir" },  { id: 'stimmen-vor-ort', title: "Was Familien über uns sagen" },

  { id: 'haeufige-fragen-24h-pflege', title: "Häufige Fragen — 24h-Pflege in Dessau-Roßlau" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Dessau-Roßlau | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Dessau-Roßlau in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-dessau' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Dessau-Roßlau | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Dessau-Roßlau in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-dessau',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Dessau-Roßlau?', a: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Sachsen-Anhalt (Eigenanteil rund 2.890 €/Monat, vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Dessau-Roßlau starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
  { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt zu festen Zeiten für einzelne Aufgaben. Eine 24h-Betreuungskraft lebt im Haushalt: Sie hilft bei Körperpflege und Alltag, ist bei Bedarf auch nachts da und versorgt den Haushalt mit. Bei Demenz zählt vor allem, dass es über Wochen dieselbe Person ist und niemand umziehen muss.' },
  { q: 'Ist 24h-Pflege über Primundus in Dessau-Roßlau rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
  { q: 'Wie viele ältere Menschen leben in Dessau-Roßlau?', a: '13.463 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 17,7 Prozent — in Sachsen-Anhalt 13,8 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 34,5 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Sachsen-Anhalt: 29,4 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Dessau-Roßlau — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Dessau-Roßlau im Schnitt 2,7 Wohnungen, in Sachsen-Anhalt 2,1. 38,5 Prozent der Gebäude stehen frei, 34,0 Prozent stehen in geschlossener Reihe. 57,0 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Dessau-Roßlau ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Welches Einzugsgebiet wird in Dessau-Roßlau bedient?', a: 'Dessau-Roßlau und Landkreis Anhalt-Bitterfeld: Bitterfeld, Zerbst, Köthen und alle Gemeinden im Landkreis Anhalt-Bitterfeld' },
  { q: 'Ist in einer Wohnung in Dessau-Roßlau Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Dessau-Roßlau hat im Schnitt 77,7 m², 37,0 % sind kleiner als 60 m². Das ist eng, deshalb klären wir vor der Zusage am Telefon, welches Zimmer frei wird — meist das ehemalige Kinder- oder Arbeitszimmer. 76,8 % der Gebäude in Dessau-Roßlau sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Sachsen-Anhalt zahlen Heimbewohner im ersten Jahr im Schnitt rund 2.890 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause bleiben bei Pflegegrad 3 ab ca. 923 € — nach Pflegegeld, anteiligem Entlastungsbudget und Steuerermäßigung. Das sind rund 1.967 € Unterschied im Monat, 23.604 € im Jahr.' },
]

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-dessau#service',
    name: 'Primundus — 24h-Pflege Dessau-Roßlau',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte in Dessau-Roßlau. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-dessau',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'City', name: 'Dessau-Roßlau' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Regionen', item: 'https://primundus.de/regionen' },
      { '@type': 'ListItem', position: 3, name: 'Dessau-Roßlau', item: 'https://primundus.de/24h-pflege-dessau' },
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
            { label: 'Dessau-Roßlau' },
          ]}
          augenbraue="24-Stunden-Pflege in Dessau-Roßlau"
          titel="24-Stunden-Pflege und Betreuung in Dessau-Roßlau"
          einleitung={<>Ziebigk, die Bauhaus-Siedlung Törten oder stadtnah zwischen Elbe und Mulde: Dessauer wohnen mit Geschichte — und möchten darin alt werden. Eine Betreuungskraft von Primundus macht es möglich: Sie zieht mit ein und ist bei Bedarf auch nachts da. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>}
          aktualisiert="28. August 2026"
          lesezeit="6 Min."
          knopf={{ href: 'https://kostenrechner.primundus.de/?start=1&src=ort-dessau', text: 'Preis & Betreuungskräfte ansehen' }}
          knopfOben
          blick={[
            'Preis bei Primundus: ab 2.150 €/Monat',
            'Ihr Eigenanteil bei Pflegegrad 3: ab ca. 923 €/Monat',
            'Pflegeheim in Sachsen-Anhalt: Eigenanteil rund 2.890 €/Monat (vdek, 07/2026)',
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich',
          ]}
          blickTitel="Dessau-Roßlau auf einen Blick"
          person={<AnsprechpartnerinGross ort="Dessau-Roßlau" />}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist-24-stunden" titel="Was 24-Stunden-Betreuung in Dessau-Roßlau bedeutet">
            <Text>
              Eine Betreuungskraft zieht bei Ihnen ein, hilft bei Körperpflege, beim Essen und im Alltag, versorgt den Haushalt mit und ist bei Bedarf
              auch nachts da. Anders als beim ambulanten Dienst, der zweimal am Tag kommt und wieder geht. Und anders als im
              Heim, wo der Umzug ansteht. Das Zuhause in Dessau-Roßlau bleibt, der gewohnte Tagesablauf auch.
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

          <Abschnitt id="kosten-und-kassenzuschuesse-in" titel="Kosten & Kassenzuschüsse in Dessau-Roßlau 2026">
            <Tabelle
              titel="Kostenbeispiel — Pflegegrad 3 in Dessau-Roßlau"
              zeilen={[
                ['Kosten Primundus', 'ab 2.150 €/Monat'],
                ['− Pflegegeld PG 3', '− 599 €/Monat'],
                ['− Entlastungsbudget (anteilig)', '− ca. 295 €/Monat'],
                ['− Steuerermäßigung (20 %, bis 4.000 €/Jahr)', '− ca. 333 €/Monat'],
                [<strong key="e">Ihr Eigenanteil</strong>, <strong key="w">ab ca. 923 €/Monat</strong>],
              ]}
              betont={1}
              fuss="Eine Person, Werte aus unserem Kostenrechner, zzgl. An- und Abreise 125 € je Strecke · Pflegeheim in Sachsen-Anhalt: Eigenanteil rund 2.890 €/Monat (vdek, 07/2026) — 24h-Pflege zuhause ist oft günstiger und erhält das Zuhause"
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
            <RechnerKasten src="ort-dessau" />
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-in-dessau" titel="Polnische Betreuungskräfte in Dessau-Roßlau">
            <Text>Wer in Dessau-Roßlau nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Sie kommen aus Polen und sind in Dessau-Roßlau und im gesamten Umland im Einsatz.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Was eine polnische Betreuungskraft kostet:</strong> ab 2.150 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen. Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro Eigenanteil — deutlich weniger als ein Heimplatz, der hier im Schnitt rund 2.890 Euro im Monat kostet.</Text>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Polnische Pflegekräfte — was sie kosten und wie es rechtlich läuft</a>.</Text>
          </Abschnitt>

          <Abschnitt id="24-stunden-pflege-im" titel="24-Stunden-Pflege im Landkreis Anhalt-Bitterfeld">
            <Text>Unsere Betreuungskräfte ziehen in Dessau-Roßlau und im Landkreis Anhalt-Bitterfeld ein — auch in den kleineren Gemeinden, in denen sonst kaum jemand anbietet. Die Anreise dauert überall gleich lang, der Preis ist derselbe.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause in Dessau-Roßlau ausmacht">
            <Text>12,5 Prozent der Wohnungen stehen leer, in Sachsen-Anhalt 8,9 Prozent. Wo ein Zimmer fehlt, ist eine größere Wohnung hier eher zu finden als anderswo. Dessau-Roßlau ist älter als das Land: 17,7 Prozent der Einwohner sind 75 Jahre oder älter — das sind 13.463 Menschen, in Sachsen-Anhalt sind es 13,8 Prozent.</Text>
            <Text>Gut jeder dritte Haushalt in Dessau-Roßlau besteht nur aus Menschen ab 65 — in Sachsen-Anhalt 29,4 Prozent. Wenn dort nachts etwas passiert, ist niemand da, der es mitbekommt. Das ist der Fall, für den eine Betreuungskraft im Haushalt gedacht ist. Nur 38,5 Prozent der Gebäude stehen frei, in Sachsen-Anhalt sind es 58,6 Prozent.</Text>
            <Text>Jedes dritte Gebäude in Dessau-Roßlau ist ein Reihenhaus — in Sachsen-Anhalt 22,5 Prozent. Ob Reihenhaus oder Mehrfamilienhaus im Block, gemeinsam ist ihnen die Treppe: Wenn das Treppensteigen zur täglichen Hürde wird, ist jemand im Haus oft die Alternative zum Umzug. In Dessau-Roßlau wohnen nur 34,5 Prozent der Haushalte im Eigentum, in Sachsen-Anhalt 43,0 Prozent. In eine größere Wohnung zu ziehen ist für die meisten keine Option — es muss also in der vorhandenen gehen. Eine Betreuungskraft braucht ein eigenes Zimmer, und genau daran hakt es in Dessau-Roßlau häufiger als anderswo. Knapp zwei von fünf Wohnungen sind kleiner als 60 Quadratmeter — in Sachsen-Anhalt sind es 31,3 Prozent. Deshalb klären wir vorab am Telefon, was Ihre Wohnung hergibt, statt es später herauszufinden.</Text>
            <Text>In Zahlen: 13.463 Menschen in Dessau-Roßlau sind 75 Jahre oder älter, und es gibt 49.629 Wohnungen in 18.663 Gebäuden. Ob darunter eine ist, in der eine Betreuungskraft ein eigenes Zimmer bekommt, entscheidet sich nicht an der Statistik, sondern an Ihrem Grundriss — und das klären wir vorab.</Text>
            <Text>Was davon auf Ihre Situation zutrifft, klären wir vor jeder Entscheidung — insbesondere die Frage nach dem eigenen Zimmer für die Betreuungskraft. Und lassen Sie sich unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos, neutral und kommt auf Wunsch zu Ihnen nach Hause.</Text>
            <p className="text-[15px] leading-[1.6] text-pm-body/70">Zahlen zu Wohnen und Haushalten: Zensus 2022, Statistische Ämter des Bundes und der Länder, Stichtag 15. Mai 2022.</p>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-dessau-rosslau" titel="Einzugsgebiet Dessau-Roßlau">
            <Text>Dessau-Roßlau und Landkreis Anhalt-Bitterfeld: Bitterfeld, Zerbst, Köthen und alle Gemeinden im Landkreis Anhalt-Bitterfeld</Text>
            <NearbyCities current="dessau" />
          </Abschnitt>

          <OrtWerkzeuge ort={'Dessau-Roßlau'} land={'Sachsen-Anhalt'} altbau={57.0} miete={5.48} />


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

          <OrtStimmen ort={'Dessau-Roßlau'} />


          <Abschnitt id="haeufige-fragen-24h-pflege" titel="Häufige Fragen — 24h-Pflege in Dessau-Roßlau">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand ohneBewertungen />
    </>
  )
}
