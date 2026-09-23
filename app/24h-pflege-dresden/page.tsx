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
  { id: 'was-ist-24-stunden', title: "Was 24-Stunden-Betreuung in Dresden bedeutet" },
  { id: 'kosten-und-kassenzuschuesse-in', title: "Kosten & Kassenzuschüsse in Dresden 2026" },
  { id: 'polnische-betreuungskraefte-in-dresden', title: "Polnische Betreuungskräfte in Dresden" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause in Dresden ausmacht" },
  { id: 'einzugsgebiet-dresden', title: "Einzugsgebiet Dresden" },
  { id: 'werkzeuge', title: "Was es in Dresden kostet, und was die Pflegekasse dazugibt" },
  { id: 'so-arbeiten-wir', title: "So arbeiten wir" },  { id: 'stimmen-vor-ort', title: "Was Familien über uns sagen" },

  { id: 'haeufige-fragen-24h-pflege', title: "Häufige Fragen — 24h-Pflege in Dresden" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Dresden | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Dresden in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-dresden' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Dresden | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Dresden in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-dresden',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Dresden?', a: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Sachsen (Eigenanteil rund 2.990 €/Monat, vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Dresden starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
  { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt zu festen Zeiten für einzelne Aufgaben. Eine 24h-Betreuungskraft lebt im Haushalt: Sie hilft bei Körperpflege und Alltag, ist bei Bedarf auch nachts da und versorgt den Haushalt mit. Bei Demenz zählt vor allem, dass es über Wochen dieselbe Person ist und niemand umziehen muss.' },
  { q: 'Ist 24h-Pflege über Primundus in Dresden rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
  { q: 'Wie viele ältere Menschen leben in Dresden?', a: '69.125 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 12,4 Prozent — in Sachsen 13,8 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 24,5 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Sachsen: 29,1 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Dresden — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Dresden im Schnitt 5,1 Wohnungen, in Sachsen 2,7. 52,6 Prozent der Gebäude stehen frei, 29,0 Prozent stehen in geschlossener Reihe. 52,7 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Dresden ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'In welchen Dresdner Stadtteilen leben die meisten älteren Menschen?', a: 'Der Unterschied ist größer als in jeder anderen Stadt, die wir uns angesehen haben — Faktor sieben. In Johannstadt-Süd sind 36,3 Prozent der Einwohner über 65, in der Äußeren Neustadt 5,4 Prozent. Ebenfalls weit oben: Kleinpestitz/Mockritz mit 35,1 Prozent, Räcknitz/Zschertnitz und Hosterwitz/Pillnitz mit je 31,2 Prozent. Überraschend ist, dass die Plattenbausiedlungen nicht dazugehören: In Gorbitz und Prohlis leben weiterhin mehr Menschen im Erwerbsalter als über 65 — dort hat sich der Wandel als Wegzug ausgewirkt, nicht als Alterung. Unsere Betreuungskräfte kommen in jeden Stadtteil, Anreise und Preis sind überall gleich.' },
  { q: 'Welches Einzugsgebiet wird in Dresden bedient?', a: 'Dresden und Umland: Pirna, Freital, Radebeul, Meißen, Heidenau und alle Gemeinden im Landkreis Sächsische Schweiz-Osterzgebirge und Meißen' },
  { q: 'Ist in einer Wohnung in Dresden Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Dresden hat im Schnitt 71,2 m², 39,9 % sind kleiner als 60 m². Das ist eng, deshalb klären wir vor der Zusage am Telefon, welches Zimmer frei wird — meist das ehemalige Kinder- oder Arbeitszimmer. In Dresden liegen 54,8 % der Wohnungen in Ein- oder Zweifamilienhäusern, der Rest sind Geschosswohnungen — dann zählt, welches Stockwerk und ob es einen Aufzug gibt.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Sachsen zahlen Heimbewohner im ersten Jahr im Schnitt rund 2.990 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause bleiben bei Pflegegrad 3 ab ca. 923 € — nach Pflegegeld, anteiligem Entlastungsbudget und Steuerermäßigung. Das sind rund 2.067 € Unterschied im Monat, 24.804 € im Jahr.' },
]

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-dresden#service',
    name: 'Primundus — 24h-Pflege Dresden',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte in Dresden. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-dresden',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'City', name: 'Dresden' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Regionen', item: 'https://primundus.de/regionen' },
      { '@type': 'ListItem', position: 3, name: 'Dresden', item: 'https://primundus.de/24h-pflege-dresden' },
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
            { label: 'Dresden' },
          ]}
          augenbraue="24-Stunden-Pflege in Dresden"
          titel="24-Stunden-Pflege und Betreuung in Dresden"
          einleitung={<>Die Villa in Blasewitz, der Altbau in Striesen, das Häuschen am Elbhang in Loschwitz: Dresdner Zuhause sind zum Bleiben gebaut. Wenn allein leben nicht mehr geht, zieht eine Betreuungskraft von Primundus mit ein — bei Bedarf auch nachts da, mit Blick auf die Elbe statt auf Heimflure. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>}
          aktualisiert="28. August 2026"
          lesezeit="6 Min."
          knopf={{ href: 'https://kostenrechner.primundus.de/?start=1&src=ort-dresden', text: 'Preis & Betreuungskräfte ansehen' }}
          knopfOben
          blick={[
            'Preis bei Primundus: ab 2.150 €/Monat',
            'Ihr Eigenanteil bei Pflegegrad 3: ab ca. 923 €/Monat',
            'Pflegeheim in Sachsen: Eigenanteil rund 2.990 €/Monat (vdek, 07/2026)',
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich',
          ]}
          blickTitel="Dresden auf einen Blick"
          person={<AnsprechpartnerinGross ort="Dresden" />}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist-24-stunden" titel="Was 24-Stunden-Betreuung in Dresden bedeutet">
            <Text>
              Eine Betreuungskraft zieht bei Ihnen ein, hilft bei Körperpflege, beim Essen und im Alltag, versorgt den Haushalt mit und ist bei Bedarf
              auch nachts da. Anders als beim ambulanten Dienst, der zweimal am Tag kommt und wieder geht. Und anders als im
              Heim, wo der Umzug ansteht. Das Zuhause in Dresden bleibt, der gewohnte Tagesablauf auch.
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

          <Abschnitt id="kosten-und-kassenzuschuesse-in" titel="Kosten & Kassenzuschüsse in Dresden 2026">
            <Tabelle
              titel="Kostenbeispiel — Pflegegrad 3 in Dresden"
              zeilen={[
                ['Kosten Primundus', 'ab 2.150 €/Monat'],
                ['− Pflegegeld PG 3', '− 599 €/Monat'],
                ['− Entlastungsbudget (anteilig)', '− ca. 295 €/Monat'],
                ['− Steuerermäßigung (20 %, bis 4.000 €/Jahr)', '− ca. 333 €/Monat'],
                [<strong key="e">Ihr Eigenanteil</strong>, <strong key="w">ab ca. 923 €/Monat</strong>],
              ]}
              betont={1}
              fuss="Eine Person, Werte aus unserem Kostenrechner, zzgl. An- und Abreise 125 € je Strecke · Pflegeheim in Sachsen: Eigenanteil rund 2.990 €/Monat (vdek, 07/2026) — 24h-Pflege zuhause ist oft günstiger und erhält das Zuhause"
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
            <RechnerKasten src="ort-dresden" />
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-in-dresden" titel="Polnische Betreuungskräfte in Dresden">
            <Text>Wer in Dresden nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Sie kommen aus Polen und sind in Dresden und im gesamten Umland im Einsatz.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Was eine polnische Betreuungskraft kostet:</strong> ab 2.150 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen. Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro Eigenanteil — deutlich weniger als ein Heimplatz, der hier im Schnitt rund 2.990 Euro im Monat kostet.</Text>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Polnische Pflegekräfte — Kosten, Recht und Ablauf</a>.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause in Dresden ausmacht">
            <Text>Eine Zahl beschreibt die Dresdner Entwicklung besser als jede andere:{' '} <strong className="text-pm-ink font-semibold">Zwischen 2019 und 2023 stieg die Zahl der Pflegebedürftigen um 49 Prozent — von 29.536 auf 44.141. Die Zahl der Heimplätze sank im selben Zeitraum leicht.</strong> Der gesamte Zuwachs ist in die eigene Wohnung gegangen: Die ambulante Versorgung wuchs um 42 Prozent, die Zahl der allein von Angehörigen versorgten Menschen um 55 Prozent auf 22.850.</Text>
            <Text>Beim Heimangebot selbst ist Dresden unauffällig: 13,1 Prozent der Pflegebedürftigen leben stationär gegenüber 13,7 Prozent in Sachsen, und auch bei den Plätzen je 1.000 Senioren liegt die Stadt nur vier Prozent unter dem Landeswert. Anteil und Angebot zeigen hier ausnahmsweise dasselbe. Der eigentliche Unterschied zu Sachsen liegt woanders: Die Pflegequote beträgt 7,8 Prozent gegenüber 8,9 im Land — Dresden ist schlicht jünger.</Text>
            <Text>Der Stadtdurchschnitt taugt allerdings zu gar nichts.{' '} <strong className="text-pm-ink font-semibold">Zwischen dem ältesten und dem jüngsten Stadtteil liegt der Faktor sieben:</strong> In Johannstadt-Süd sind 36,3 Prozent der Einwohner über 65, in der Äußeren Neustadt 5,4 Prozent. Auch Kleinpestitz/Mockritz (35,1 Prozent), Räcknitz/Zschertnitz und Hosterwitz/Pillnitz (je 31,2) liegen weit oben. Bemerkenswert: Die Plattenbausiedlungen sind es <em>nicht</em>. In Gorbitz und Prohlis leben nach wie vor mehr Menschen im Erwerbsalter als über 65 — dort hat sich der demografische Wandel nicht als Alterung ausgewirkt, sondern als Wegzug. Gorbitz-Nord hat seit 1990 fast die Hälfte seiner Einwohner verloren.</Text>
            <Text>Ein Wort zur Lage: Der Elbhang zwischen Loschwitz und Weißem Hirsch ist bewohntes Villengebiet, und die Standseilbahn, die beide verbindet, überwindet 95 Höhenmeter bei bis zu 29 Prozent Steigung — sie gehört zum regulären Nahverkehr, nicht zum Ausflugsprogramm. Hosterwitz und Pillnitz am selben Hang gehören zu den ältesten Stadtteilen. Dass daraus konkrete Probleme im Pflegealltag folgen, ist plausibel, aber wir haben dafür keinen Beleg gefunden — deshalb steht es hier als Beobachtung, nicht als Befund.</Text>
            <Text>Geriatrisch ist Dresden gut versorgt. Das Krankenhaus St. Joseph-Stift führt die größte Akutgeriatrie der Stadt mit 54 Betten und einer Tagesklinik mit 13 Plätzen. Beim Städtischen Klinikum lohnt der genaue Blick:{' '} <strong className="text-pm-ink font-semibold">Akutgeriatrie und geriatrische Reha sitzen an zwei Standorten rund zehn Kilometer auseinander</strong> — die Akutstation in Neustadt/Trachau, die Reha in Löbtau. Das Sekretariat der Akutgeriatrie sitzt wiederum in Löbtau. Wer der Sekretariatsadresse folgt, landet am falschen Haus. Lassen Sie sich vorher unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos und neutral.</Text>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-dresden" titel="Einzugsgebiet Dresden">
            <Text>Dresden und Umland: Pirna, Freital, Radebeul, Meißen, Heidenau und alle Gemeinden im Landkreis Sächsische Schweiz-Osterzgebirge und Meißen</Text>
            <NearbyCities current="dresden" />
          </Abschnitt>

          <OrtWerkzeuge ort={'Dresden'} land={'Sachsen'} altbau={52.7} miete={6.92} />


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

          <OrtStimmen ort={'Dresden'} />


          <Abschnitt id="haeufige-fragen-24h-pflege" titel="Häufige Fragen — 24h-Pflege in Dresden">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand ohneBewertungen />
    </>
  )
}
