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
  { id: 'was-ist-24-stunden', title: "Was 24-Stunden-Betreuung in Witten bedeutet" },
  { id: 'kosten-und-kassenzuschuesse-in', title: "Kosten & Kassenzuschüsse in Witten 2026" },
  { id: 'polnische-betreuungskraefte-in-witten', title: "Polnische Betreuungskräfte in Witten" },
  { id: '24-stunden-pflege-im', title: "24-Stunden-Pflege im Ennepe-Ruhr-Kreis" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause in Witten ausmacht" },
  { id: 'einzugsgebiet-witten', title: "Einzugsgebiet Witten" },
  { id: 'werkzeuge', title: "Was es in Witten kostet, und was die Pflegekasse dazugibt" },
  { id: 'so-arbeiten-wir', title: "So arbeiten wir" },
  { id: 'stimmen-vor-ort', title: "Familien aus der Region über uns" },
  { id: 'haeufige-fragen-24h-pflege', title: "Häufige Fragen — 24h-Pflege in Witten" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Witten: zu Hause bleiben statt Heim',
  description: 'Körperpflege, Kochen, Einkäufe, Begleitung, nachts jemand im Haus: Eine Betreuungskraft übernimmt das, was Angehörige allein nicht mehr schaffen.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-witten' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege Witten — Betreuungskraft zuhause | Primundus',
    description: 'Geprüfte 24h-Betreuungskraft in Witten. Täglich kündbar, rechtssicher, startklar.',
    url: 'https://primundus.de/24h-pflege-witten',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Witten?', a: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Nordrhein-Westfalen (Eigenanteil rund 3.580 €/Monat, vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Witten starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
  { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
  { q: 'Ist 24h-Pflege über Primundus in Witten rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
  { q: 'Warum ist 24-Stunden-Betreuung in Witten so oft ein Thema?', a: 'Weil hier ungewöhnlich viele Menschen allein leben. Fast die Hälfte aller Wittener Haushalte sind Einpersonenhaushalte — damit gehört die Stadt zu den knapp zehn Kommunen mit den meisten Alleinlebenden in ganz Nordrhein-Westfalen. Gleichzeitig ist Witten älter als das Land: knapp 24 Prozent über 65, fast acht Prozent über 80. Wer allein lebt und in einem Haus mit Treppen wohnt, steht früher vor der Frage, wie es weitergeht.' },
  { q: 'Was bedeutet die Hanglage in Bommern oder Herbede für die Betreuung?', a: 'Sie ist in Witten ein echter Faktor, anders als in vielen Nachbarstädten. Zwischen der Ruhr und den Höhen des Ardeygebirges liegen rund 190 Höhenmeter, und diese Höhen sind bewohnt: Gut ein Viertel aller Wittener Adressen liegt über 150 Metern. Auffällig dabei: Gerade die hügeligen Stadtteile sind die ältesten — in Bommern ist fast jeder Zehnte über 80, in Witten-Mitte nur gut jeder Fünfzehnte. Eine Betreuungskraft übernimmt genau die Wege, die dort schwer geworden sind.' },
  { q: 'Gibt es in Witten eine geriatrische Klinik?', a: 'Ja, und das ist keineswegs selbstverständlich — viele vergleichbare Städte haben keine. Das Evangelische Krankenhaus Witten führt eine eigene Klinik für Geriatrie und Frührehabilitation, dazu eine geriatrische Tagesklinik. Für die Zeit nach einem Klinikaufenthalt ist trotzdem entscheidend, wer zu Hause da ist: Die Frührehabilitation endet, der Alltag geht weiter. Genau dort setzt eine Betreuungskraft an, die mit einzieht.' },
  { q: 'Welches Einzugsgebiet wird in Witten bedient?', a: 'Witten und Ennepe-Ruhr-Kreis: Hattingen, Sprockhövel, Herdecke, Schwelm und alle Gemeinden im Ennepe-Ruhr-Kreis' },
  { q: 'Ist in einer Wohnung in Witten Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Witten hat im Schnitt 84,6 m², 26,1 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 64,4 % der Gebäude in Witten sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Nordrhein-Westfalen zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.580 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause bleiben bei Pflegegrad 3 ab ca. 923 € — nach Pflegegeld, anteiligem Entlastungsbudget und Steuerermäßigung. Das sind rund 2.657 € Unterschied im Monat, 31.884 € im Jahr.' },
]

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-witten#service',
    name: 'Primundus — 24h-Pflege Witten',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte in Witten. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-witten',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'City', name: 'Witten' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24h-Pflege Witten', item: 'https://primundus.de/24h-pflege-witten' },
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
            { label: 'Witten' },
          ]}
          augenbraue="24-Stunden-Pflege in Witten"
          titel="24-Stunden-Pflege und Betreuung in Witten"
          einleitung={<>Zwischen Ruhr und Ardey-Wald wohnt man in Witten oft ein Leben lang — in Annen, Herbede oder Bommern, im Haus mit Garten oder der Wohnung nahe der Innenstadt. Damit das so bleiben kann, zieht eine Betreuungskraft von Primundus mit ein: bei Bedarf auch nachts da, 1:1, im eigenen Zuhause statt im Heim. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>}
          aktualisiert="27. August 2026"
          lesezeit="6 Min."
          blick={[
            'Preis bei Primundus: ab 2.150 €/Monat',
            'Ihr Eigenanteil bei Pflegegrad 3: ab ca. 923 €/Monat',
            'Pflegeheim in Nordrhein-Westfalen: Eigenanteil rund 3.580 €/Monat (vdek, 07/2026)',
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich',
          ]}
          blickTitel="Witten auf einen Blick"
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist-24-stunden" titel="Was 24-Stunden-Betreuung in Witten bedeutet">
            <Text>
              Eine Betreuungskraft zieht bei Ihnen ein, führt den Haushalt, hilft bei Körperpflege und Alltag und ist bei Bedarf
              auch nachts da. Anders als beim ambulanten Dienst, der zweimal am Tag kommt und wieder geht. Und anders als im
              Heim, wo der Umzug ansteht. Das Zuhause in Witten bleibt, der gewohnte Tagesablauf auch.
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

          <Abschnitt id="kosten-und-kassenzuschuesse-in" titel="Kosten & Kassenzuschüsse in Witten 2026">
            <Tabelle
              titel="Kostenbeispiel — Pflegegrad 3 in Witten"
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
            <RechnerKasten src="ort-witten" />
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-in-witten" titel="Polnische Betreuungskräfte in Witten">
            <Text>Wer in Witten nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Sie kommen aus Polen und sind in Witten und im gesamten Umland im Einsatz.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Was eine polnische Betreuungskraft kostet:</strong> ab 2.150 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen. Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro Eigenanteil — deutlich weniger als ein Heimplatz, der hier im Schnitt rund 3.580 Euro im Monat kostet.</Text>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Polnische Pflegekräfte — Kosten, Recht und Ablauf</a>.</Text>
          </Abschnitt>

          <Abschnitt id="24-stunden-pflege-im" titel="24-Stunden-Pflege im Ennepe-Ruhr-Kreis">
            <Text>Unsere Betreuungskräfte ziehen in Witten und im Ennepe-Ruhr-Kreis ein — auch in den kleineren Gemeinden, in denen sonst kaum jemand anbietet. Die Anreise dauert überall gleich lang, der Preis ist derselbe.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause in Witten ausmacht">
            <Text>In Witten fällt eine Zahl aus dem Rahmen: <strong className="text-pm-ink font-semibold"> Fast die Hälfte aller Haushalte sind Einpersonenhaushalte</strong> — damit gehört die Stadt zu den knapp zehn Kommunen mit den meisten Alleinlebenden in ganz Nordrhein-Westfalen. Gleichzeitig ist Witten älter als das Land: Knapp 24 Prozent der Einwohner sind über 65, fast acht Prozent über 80, beides über dem Landeswert. Viele ältere Wittener leben also allein — und genau daraus entsteht der Moment, in dem es zu Hause nicht mehr allein geht.</Text>
            <Text>Anders als in vielen Ruhrgebietsstädten ist hier auch das Gelände ein Faktor. Zwischen der Ruhr und den Höhen des Ardeygebirges liegen rund 190 Höhenmeter, und diese Höhen sind bewohnt: Gut ein Viertel aller Wittener Adressen liegt oberhalb von 150 Metern. Bemerkenswert ist, wie das mit dem Alter zusammenfällt. <strong className="text-pm-ink font-semibold"> In Bommern ist fast jeder Zehnte über 80, in Witten-Mitte nur gut jeder Fünfzehnte</strong> — und Bommern gehört zu den Stadtteilen mit der größten Höhenspanne. Wer dort wohnt, hat den Berg jeden Tag vor der Haustür, auch auf dem Weg zur Bushaltestelle.</Text>
            <Text>Beim Wohnen ist Witten keine Einfamilienhausstadt: Nur gut ein Viertel aller Wohnungen liegt in Ein- oder Zweifamilienhäusern, deutlich weniger als im Land, und nur knapp ein Drittel der Wohnungen wird von den Eigentümern selbst bewohnt. Der Bestand ist entsprechend alt — <strong className="text-pm-ink font-semibold">gut drei Viertel aller Wittener Wohnungen stammen aus der Zeit vor 1980</strong>. Am 19. März 1945 wurde die Innenstadt in etwa zwanzig Minuten zu rund 80 Prozent zerstört, rund 18.000 Menschen wurden obdachlos; die Außenstadtteile blieben dagegen weitgehend stehen. Deshalb steht in Bommern, Herbede oder Heven bis heute mehr Vorkriegsbausubstanz als im Landesdurchschnitt — schön, aber mit Treppen.</Text>
            <Text>Für die Versorgung ist der Ennepe-Ruhr-Kreis vergleichsweise gut aufgestellt: Auf einen ambulanten Pflegedienst kommen hier rund 68 Pflegebedürftige, weniger als im Land. Was ein Dienst trotzdem nicht leisten kann, ist Anwesenheit. Er kommt zu festen Zeiten und geht wieder. Eine Betreuungskraft, die mit einzieht, ist auch nachts da, übernimmt die Wege den Berg hinunter und führt den Haushalt mit — in Bommern und Herbede ebenso wie in Annen, Heven oder Stockum.</Text>
            <Text>Ein Vorteil vor Ort: Das Evangelische Krankenhaus Witten hat eine eigene Klinik für Geriatrie samt geriatrischer Tagesklinik — das ist keineswegs selbstverständlich, viele vergleichbare Städte haben keine. Für die Beratung im Vorfeld gilt: Die Pflegeberatung im Ennepe-Ruhr-Kreis ist kostenlos, trägerunabhängig und auf Wunsch bei Ihnen zu Hause (§ 7a SGB XI).</Text>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-witten" titel="Einzugsgebiet Witten">
            <Text>Witten und Ennepe-Ruhr-Kreis: Hattingen, Sprockhövel, Herdecke, Schwelm und alle Gemeinden im Ennepe-Ruhr-Kreis</Text>
            <NearbyCities current="witten" />
          </Abschnitt>

          <OrtWerkzeuge ort={'Witten'} land={'Nordrhein-Westfalen'} altbau={65.1} miete={5.88} />


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

            ort={'Witten'}

            herkunft="umgebung"

            stimmen={DIREKT_ERHALTEN.filter((b) => ['k-20260905-thomas', 'k-20260427-andreas'].includes(b.id))}

          />


          <Abschnitt id="haeufige-fragen-24h-pflege" titel="Häufige Fragen — 24h-Pflege in Witten">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
