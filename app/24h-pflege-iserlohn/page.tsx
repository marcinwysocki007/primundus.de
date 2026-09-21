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
  { id: 'was-ist-24-stunden', title: "Was 24-Stunden-Betreuung in Iserlohn bedeutet" },
  { id: 'kosten-und-kassenzuschuesse-in', title: "Kosten & Kassenzuschüsse in Iserlohn 2026" },
  { id: 'polnische-betreuungskraefte-in-iserlohn', title: "Polnische Betreuungskräfte in Iserlohn" },
  { id: '24-stunden-pflege-im', title: "24-Stunden-Pflege im Märkischen Kreis" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause in Iserlohn ausmacht" },
  { id: 'einzugsgebiet-iserlohn', title: "Einzugsgebiet Iserlohn" },
  { id: 'werkzeuge', title: "Was es in Iserlohn kostet, und was die Pflegekasse dazugibt" },
  { id: 'so-arbeiten-wir', title: "So arbeiten wir" },
  { id: 'stimmen-vor-ort', title: "Familien aus der Region über uns" },
  { id: 'haeufige-fragen-24h-pflege', title: "Häufige Fragen — 24h-Pflege in Iserlohn" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Iserlohn | 6× Testsieger',
  description: 'Betreuung zu Hause durch geprüfte Kräfte, die Sie vorab sehen – und Entlastung für Angehörige. Ihren Preis sehen Sie sofort online, mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-iserlohn' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege Iserlohn — Betreuungskraft zuhause | Primundus',
    description: 'Geprüfte 24h-Betreuungskraft in Iserlohn. Täglich kündbar, rechtssicher, startklar.',
    url: 'https://primundus.de/24h-pflege-iserlohn',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Iserlohn?', a: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Nordrhein-Westfalen (Eigenanteil rund 3.580 €/Monat, vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Iserlohn starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
  { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt zu festen Zeiten für einzelne Aufgaben. Eine 24h-Betreuungskraft lebt im Haushalt: Sie hilft bei Körperpflege und Alltag, ist bei Bedarf auch nachts da und versorgt den Haushalt mit. Bei Demenz zählt vor allem, dass es über Wochen dieselbe Person ist und niemand umziehen muss.' },
  { q: 'Ist 24h-Pflege über Primundus in Iserlohn rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
  { q: 'Funktioniert 24-Stunden-Pflege auch in einem Iserlohner Altbau?', a: 'Ja, und hier stellt sich die Frage häufiger als anderswo. Weil Iserlohn im Krieg weitgehend verschont blieb, steht viel alte Bausubstanz — mit engen Treppenhäusern und selten einem Aufzug. Für die Betreuungskraft braucht es lediglich ein eigenes Zimmer. Der eigentliche Gewinn liegt darin, dass jemand im Haus ist und die Wege nach draußen übernimmt, sobald die Treppe zur Hürde wird.' },
  { q: 'Was bedeutet die Höhenlage für die Betreuung in Iserlohn?', a: 'Zwischen der Ruhr im Norden und dem Rüssenberg im Süden liegen rund 390 Höhenmeter — Iserlohn ist eine Sauerlandstadt, keine Stadt der Ebene. Wer am Hang wohnt, für den beginnt jeder Weg mit einer Steigung, auch der zur Bushaltestelle. Viele Ältere bleiben deshalb irgendwann einfach zu Hause. Eine Betreuungskraft übernimmt diese Wege: einkaufen, zum Arzt begleiten, Termine organisieren — und hält damit den Alltag offen.' },
  { q: 'Kommt eine Betreuungskraft auch in die Stadtteile und Nachbarorte?', a: 'Ja. Letmathe ist mit rund 24.800 Einwohnern der mit Abstand größte Stadtteil, dazu kommen Hennen, Kesbern, Sümmern und die kleineren Ortslagen. Auch in Hemer, Menden, Altena und Lüdenscheid sind unsere Betreuungskräfte im Einsatz. Die Anreise dauert überall gleich lang, Anfahrtskosten berechnen wir nicht, und der Preis ist derselbe wie in der Kernstadt.' },
  { q: 'Welches Einzugsgebiet wird in Iserlohn bedient?', a: 'Iserlohn und Märkischer Kreis: Lüdenscheid, Hemer, Menden, Plettenberg und alle Gemeinden im Märkischen Kreis' },
  { q: 'Ist in einer Wohnung in Iserlohn Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Iserlohn hat im Schnitt 88,7 m², 23,5 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 72,0 % der Gebäude in Iserlohn sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Nordrhein-Westfalen zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.580 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause bleiben bei Pflegegrad 3 ab ca. 923 € — nach Pflegegeld, anteiligem Entlastungsbudget und Steuerermäßigung. Das sind rund 2.657 € Unterschied im Monat, 31.884 € im Jahr.' },
]

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-iserlohn#service',
    name: 'Primundus — 24h-Pflege Iserlohn',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte in Iserlohn. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-iserlohn',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'City', name: 'Iserlohn' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Regionen', item: 'https://primundus.de/regionen' },
      { '@type': 'ListItem', position: 3, name: 'Iserlohn', item: 'https://primundus.de/24h-pflege-iserlohn' },
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
            { label: 'Iserlohn' },
          ]}
          augenbraue="24-Stunden-Pflege in Iserlohn"
          titel="24-Stunden-Pflege und Betreuung in Iserlohn"
          einleitung={<>Die Waldstadt lässt man nicht gern los: das eigene Haus in Letmathe oder Hennen, der Blick ins Grüne am Seilersee, die Nachbarn von nebenan. Wenn Mutter oder Vater mehr Hilfe brauchen, als die Familie leisten kann, zieht eine Betreuungskraft von Primundus mit ein — und ist bei Bedarf auch nachts da. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>}
          aktualisiert="27. August 2026"
          lesezeit="6 Min."
          blick={[
            'Preis bei Primundus: ab 2.150 €/Monat',
            'Ihr Eigenanteil bei Pflegegrad 3: ab ca. 923 €/Monat',
            'Pflegeheim in Nordrhein-Westfalen: Eigenanteil rund 3.580 €/Monat (vdek, 07/2026)',
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich',
          ]}
          blickTitel="Iserlohn auf einen Blick"
          person={<AnsprechpartnerinGross ort="Iserlohn" />}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist-24-stunden" titel="Was 24-Stunden-Betreuung in Iserlohn bedeutet">
            <Text>
              Eine Betreuungskraft zieht bei Ihnen ein, hilft bei Körperpflege, beim Essen und im Alltag, versorgt den Haushalt mit und ist bei Bedarf
              auch nachts da. Anders als beim ambulanten Dienst, der zweimal am Tag kommt und wieder geht. Und anders als im
              Heim, wo der Umzug ansteht. Das Zuhause in Iserlohn bleibt, der gewohnte Tagesablauf auch.
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

          <Abschnitt id="kosten-und-kassenzuschuesse-in" titel="Kosten & Kassenzuschüsse in Iserlohn 2026">
            <Tabelle
              titel="Kostenbeispiel — Pflegegrad 3 in Iserlohn"
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
            <RechnerKasten src="ort-iserlohn" />
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-in-iserlohn" titel="Polnische Betreuungskräfte in Iserlohn">
            <Text>Wer in Iserlohn nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Sie kommen aus Polen und sind in Iserlohn und im gesamten Umland im Einsatz.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Was eine polnische Betreuungskraft kostet:</strong> ab 2.150 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen. Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro Eigenanteil — deutlich weniger als ein Heimplatz, der hier im Schnitt rund 3.580 Euro im Monat kostet.</Text>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Pflegekraft aus Polen — Kosten, Recht und Ablauf</a>.</Text>
          </Abschnitt>

          <Abschnitt id="24-stunden-pflege-im" titel="24-Stunden-Pflege im Märkischen Kreis">
            <Text>Unsere Betreuungskräfte ziehen in Iserlohn und im Märkischen Kreis ein — auch in den kleineren Gemeinden, in denen sonst kaum jemand anbietet. Die Anreise dauert überall gleich lang, der Preis ist derselbe.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause in Iserlohn ausmacht">
            <Text>Iserlohn liegt im Sauerland, nicht im Ruhrgebiet — und das ist keine Wortklauberei, sondern spürbar. Zwischen der Ruhr im Norden auf gut 100 Metern und dem Rüssenberg im Süden auf fast 500 Metern liegen rund <strong className="text-pm-ink font-semibold">390 Höhenmeter</strong>. Das Stadtzentrum sitzt auf etwa 250 Metern, das südliche Stadtdrittel ist waldbeherrscht. Wer hier wohnt, kennt Steigungen. Sobald das Gehen schwerfällt, entscheidet die Adresse darüber, wie weit man noch kommt.</Text>
            <Text>Beim Wohnen unterscheidet sich Iserlohn deutlich von den meisten Städten der Region: Die Stadt blieb im Zweiten Weltkrieg weitgehend verschont — sie wurde Mitte April 1945 kampflos übergeben. Wo andernorts der Wiederaufbau der fünfziger Jahre das Straßenbild prägt, steht in Iserlohn viel gewachsene alte Bausubstanz. Schön, aber eben auch: enge Treppenhäuser, hohe Stufen, selten ein Aufzug. Genau diese Häuser wollen die Menschen nicht verlassen, wenn sie älter werden.</Text>
            <Text>Dazu kommt die demografische Entwicklung. Iserlohn ist die größte Stadt des Märkischen Kreises und des gesamten Sauerlandes, aber die Einwohnerzahl geht seit dem Höchststand um die Jahrtausendwende zurück — von knapp 99.500 im Jahr 1999 auf rund 92.000 heute. Wenn eine Stadt schrumpft, sind es meist die Jüngeren, die gehen. Zurück bleiben Eltern und Großeltern, deren Kinder in Dortmund, Hagen oder weiter entfernt arbeiten. Hilfe am Wochenende ist dann möglich; Hilfe am Dienstagmorgen um sieben nicht.</Text>
            <Text>Eine Betreuungskraft, die mit einzieht, schließt genau diese Lücke. Sie ist morgens da, nachts, und an den langen Nachmittagen, an denen sonst niemand vorbeikommt. Sie übernimmt die Wege, die durch die Hanglage schwierig geworden sind, und führt den Haushalt mit. Das gilt in Letmathe, dem mit Abstand größten Stadtteil, ebenso wie in Hennen, Kesbern oder Sümmern — und ebenso in den Nachbarstädten Hemer, Menden und Altena. Anfahrtskosten berechnen wir nicht, der Preis ist überall derselbe.</Text>
            <Text>Bevor Sie sich festlegen, lassen Sie sich unabhängig beraten: Die Pflegeberatung im Märkischen Kreis ist kostenlos, trägerunabhängig und auf Wunsch bei Ihnen zu Hause. Dieser Anspruch steht Ihnen gesetzlich zu (§ 7a SGB XI) — unabhängig davon, für welchen Weg Sie sich danach entscheiden.</Text>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-iserlohn" titel="Einzugsgebiet Iserlohn">
            <Text>Iserlohn und Märkischer Kreis: Lüdenscheid, Hemer, Menden, Plettenberg und alle Gemeinden im Märkischen Kreis</Text>
            <NearbyCities current="iserlohn" />
          </Abschnitt>

          <OrtWerkzeuge ort={'Iserlohn'} land={'Nordrhein-Westfalen'} altbau={59.8} miete={5.69} />


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

            ort={'Iserlohn'}

            herkunft="umgebung"

            stimmen={DIREKT_ERHALTEN.filter((b) => ['k-20260905-thomas', 'k-20260427-andreas'].includes(b.id))}

          />


          <Abschnitt id="haeufige-fragen-24h-pflege" titel="Häufige Fragen — 24h-Pflege in Iserlohn">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
