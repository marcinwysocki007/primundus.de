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
  { id: 'was-ist-24-stunden', title: "Was 24-Stunden-Betreuung in Essen bedeutet" },
  { id: 'kosten-und-kassenzuschuesse-in', title: "Kosten & Kassenzuschüsse in Essen 2026" },
  { id: 'polnische-betreuungskraefte-in-essen', title: "Polnische Betreuungskräfte in Essen" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause in Essen ausmacht" },
  { id: 'einzugsgebiet-essen', title: "Einzugsgebiet Essen" },
  { id: 'werkzeuge', title: "Was es in Essen kostet, und was die Pflegekasse dazugibt" },
  { id: 'so-arbeiten-wir', title: "So arbeiten wir" },
  { id: 'stimmen-vor-ort', title: "Familien aus Essen über uns" },
  { id: 'haeufige-fragen-24h-pflege', title: "Häufige Fragen — 24h-Pflege in Essen" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Essen | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare polnische Pflegekräfte und Preis direkt online sehen. Anreise in Essen in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-essen' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Essen | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare polnische Pflegekräfte und Preis direkt online sehen. Anreise in Essen in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-essen',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Essen?', a: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Nordrhein-Westfalen (Eigenanteil rund 3.580 €/Monat, vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Essen starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
  { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt zu festen Zeiten für einzelne Aufgaben. Eine 24h-Betreuungskraft lebt im Haushalt: Sie hilft bei Körperpflege und Alltag, ist bei Bedarf auch nachts da und versorgt den Haushalt mit. Bei Demenz zählt vor allem, dass es über Wochen dieselbe Person ist und niemand umziehen muss.' },
  { q: 'Ist 24h-Pflege über Primundus in Essen rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
  { q: 'Wie viele ältere Menschen leben in Essen?', a: '63.398 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 11,1 Prozent — in Nordrhein-Westfalen 10,7 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 24,7 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Nordrhein-Westfalen: 24,2 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Essen — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Essen im Schnitt 3,5 Wohnungen, in Nordrhein-Westfalen 2,3. 22,2 Prozent der Gebäude stehen frei, 48,9 Prozent stehen in geschlossener Reihe. 70,8 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Essen ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Welches Einzugsgebiet wird in Essen bedient?', a: 'Essen und Umland: Mülheim an der Ruhr, Oberhausen, Bottrop, Gelsenkirchen, Bochum und alle Gemeinden im Ruhrgebiet südlich der Emscher' },
  { q: 'Ist in einer Wohnung in Essen Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Essen hat im Schnitt 78,6 m², 33,0 % sind kleiner als 60 m². Das ist eng, deshalb klären wir vor der Zusage am Telefon, welches Zimmer frei wird — meist das ehemalige Kinder- oder Arbeitszimmer. In Essen liegen 54,6 % der Wohnungen in Ein- oder Zweifamilienhäusern, der Rest sind Geschosswohnungen — dann zählt, welches Stockwerk und ob es einen Aufzug gibt.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Nordrhein-Westfalen zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.580 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause bleiben bei Pflegegrad 3 ab ca. 923 € — nach Pflegegeld, anteiligem Entlastungsbudget und Steuerermäßigung. Das sind rund 2.657 € Unterschied im Monat, 31.884 € im Jahr.' },
]

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-essen#service',
    name: 'Primundus — 24h-Pflege Essen',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte in Essen. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-essen',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'City', name: 'Essen' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Regionen', item: 'https://primundus.de/regionen' },
      { '@type': 'ListItem', position: 3, name: 'Essen', item: 'https://primundus.de/24h-pflege-essen' },
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
            { label: 'Essen' },
          ]}
          augenbraue="24-Stunden-Pflege in Essen"
          titel="24-Stunden-Pflege und Betreuung in Essen"
          einleitung={<>Rüttenscheid, Borbeck oder oben in Kettwig: Essener haben ihr Zuhause oft ein Arbeitsleben lang gehalten — von der Zeche bis zum Ruhestand. Eine Betreuungskraft von Primundus sorgt dafür, dass es dabei bleibt: Sie zieht mit ein, übernimmt Haushalt und Pflegealltag und ist auch nachts da. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>}
          aktualisiert="28. August 2026"
          lesezeit="6 Min."
          blick={[
            'Preis bei Primundus: ab 2.150 €/Monat',
            'Ihr Eigenanteil bei Pflegegrad 3: ab ca. 923 €/Monat',
            'Pflegeheim in Nordrhein-Westfalen: Eigenanteil rund 3.580 €/Monat (vdek, 07/2026)',
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich',
          ]}
          blickTitel="Essen auf einen Blick"
          person={<AnsprechpartnerinGross ort="Essen" />}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist-24-stunden" titel="Was 24-Stunden-Betreuung in Essen bedeutet">
            <Text>
              Eine Betreuungskraft zieht bei Ihnen ein, hilft bei Körperpflege, beim Essen und im Alltag, versorgt den Haushalt mit und ist bei Bedarf
              auch nachts da. Anders als beim ambulanten Dienst, der zweimal am Tag kommt und wieder geht. Und anders als im
              Heim, wo der Umzug ansteht. Das Zuhause in Essen bleibt, der gewohnte Tagesablauf auch.
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

          <Abschnitt id="kosten-und-kassenzuschuesse-in" titel="Kosten & Kassenzuschüsse in Essen 2026">
            <Tabelle
              titel="Kostenbeispiel — Pflegegrad 3 in Essen"
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
            <RechnerKasten src="ort-essen" />
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-in-essen" titel="Polnische Betreuungskräfte in Essen">
            <Text>Wer in Essen nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Sie kommen aus Polen und sind in Essen und im gesamten Umland im Einsatz.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Was eine polnische Betreuungskraft kostet:</strong> ab 2.150 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen. Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro Eigenanteil — deutlich weniger als ein Heimplatz, der hier im Schnitt rund 3.580 Euro im Monat kostet.</Text>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Pflegekraft aus Polen — Kosten, Recht und Ablauf</a>.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause in Essen ausmacht">
            <Text>Nur 22,2 Prozent der Gebäude stehen frei, in Nordrhein-Westfalen sind es 50,2 Prozent. Jedes zweite Gebäude in Essen ist ein Reihenhaus — in Nordrhein-Westfalen 27,2 Prozent. Ob Reihenhaus oder Mehrfamilienhaus im Block, gemeinsam ist ihnen die Treppe: Wenn das Treppensteigen zur täglichen Hürde wird, ist jemand im Haus oft die Alternative zum Umzug.</Text>
            <Text>In Essen wohnen nur 26,1 Prozent der Haushalte im Eigentum, in Nordrhein-Westfalen 40,6 Prozent. In eine größere Wohnung zu ziehen ist für die meisten keine Option — es muss also in der vorhandenen gehen. Essen ist städtischer gebaut, als der Landesschnitt vermuten lässt: Auf ein Gebäude kommen hier 3,5 Wohnungen, in Nordrhein-Westfalen 2,3. Mehr Geschosswohnung, weniger Haus mit Garten — und damit häufiger die Frage nach dem Stockwerk und der Treppe.</Text>
            <Text>Die durchschnittliche Wohnung misst 78,6 Quadratmeter gegenüber 92,7 in Nordrhein-Westfalen — rund 14 Quadratmeter weniger. Eine Betreuungskraft braucht ein eigenes Zimmer, und genau daran hakt es in Essen häufiger als anderswo. Jede dritte Wohnung ist kleiner als 60 Quadratmeter — in Nordrhein-Westfalen sind es 22,4 Prozent. Deshalb klären wir vorab am Telefon, was Ihre Wohnung hergibt, statt es später herauszufinden. 45,1 Prozent aller Wohnungen stammen aus den Jahren 1950 bis 1969, in Nordrhein-Westfalen sind es 33,6 Prozent. Das ist der Wiederaufbau — und der baute Treppenhäuser, die niemand für Rollatoren geplant hat.</Text>
            <Text>In Zahlen: 63.398 Menschen in Essen sind 75 Jahre oder älter, und es gibt 316.150 Wohnungen in 91.289 Gebäuden. Ob darunter eine ist, in der eine Betreuungskraft ein eigenes Zimmer bekommt, entscheidet sich nicht an der Statistik, sondern an Ihrem Grundriss — und das klären wir vorab.</Text>
            <Text>Was davon auf Ihre Situation zutrifft, klären wir vor jeder Entscheidung — insbesondere die Frage nach dem eigenen Zimmer für die Betreuungskraft. Und lassen Sie sich unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos, neutral und kommt auf Wunsch zu Ihnen nach Hause.</Text>
            <p className="text-[15px] leading-[1.6] text-pm-body/70">Zahlen zu Wohnen und Haushalten: Zensus 2022, Statistische Ämter des Bundes und der Länder, Stichtag 15. Mai 2022.</p>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-essen" titel="Einzugsgebiet Essen">
            <Text>Essen und Umland: Mülheim an der Ruhr, Oberhausen, Bottrop, Gelsenkirchen, Bochum und alle Gemeinden im Ruhrgebiet südlich der Emscher</Text>
            <NearbyCities current="essen" />
          </Abschnitt>

          <OrtWerkzeuge ort={'Essen'} land={'Nordrhein-Westfalen'} altbau={70.8} miete={6.72} />


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

            ort={'Essen'}

            stimmen={DIREKT_ERHALTEN.filter((b) => ['k-20260627-claudia', 'k-20260414-frank'].includes(b.id))}

          />


          <Abschnitt id="haeufige-fragen-24h-pflege" titel="Häufige Fragen — 24h-Pflege in Essen">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand ohneBewertungen />
    </>
  )
}
