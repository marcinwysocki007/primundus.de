import type { Metadata } from 'next'
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
  { id: 'was-ist-24-stunden', title: "Was 24-Stunden-Betreuung in Pforzheim bedeutet" },
  { id: 'kosten-und-kassenzuschuesse-in', title: "Kosten & Kassenzuschüsse in Pforzheim 2026" },
  { id: 'polnische-betreuungskraefte-in-pforzheim', title: "Polnische Betreuungskräfte in Pforzheim" },
  { id: '24-stunden-pflege-im', title: "24-Stunden-Pflege im Enzkreis" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause in Pforzheim ausmacht" },
  { id: 'einzugsgebiet-pforzheim', title: "Einzugsgebiet Pforzheim" },
  { id: 'werkzeuge', title: "Was es für Ihre Eltern in Pforzheim kostet" },
  { id: 'so-arbeiten-wir', title: "So arbeiten wir" },
  { id: 'haeufige-fragen-24h-pflege', title: "Häufige Fragen — 24h-Pflege in Pforzheim" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Pforzheim & Enzkreis: ab 2.150 €',
  description: '24-Stunden-Pflege in Pforzheim & Enzkreis: ab 2.150 € im Monat, bei Pflegegrad 3 ab ca. 923 € Eigenanteil. Kräfte vorher ansehen, täglich kündbar.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-pforzheim' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege Pforzheim — Betreuungskraft zuhause | Primundus',
    description: 'Geprüfte 24h-Betreuungskraft in Pforzheim. Täglich kündbar, rechtssicher, startklar.',
    url: 'https://primundus.de/24h-pflege-pforzheim',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-pforzheim#service',
    name: 'Primundus — 24h-Pflege Pforzheim',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte in Pforzheim. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-pforzheim',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'City', name: 'Pforzheim' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24h-Pflege Pforzheim', item: 'https://primundus.de/24h-pflege-pforzheim' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was kostet eine 24h-Pflegekraft in Pforzheim?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Baden-Württemberg (Eigenanteil rund 3.660 €/Monat, vdek 07/2026).' },
      },
      {
        '@type': 'Question',
        name: 'Wie schnell kann eine 24h-Pflegekraft in Pforzheim starten?',
        acceptedAnswer: { '@type': 'Answer', text: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
      },
      {
        '@type': 'Question',
        name: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
      },
      {
        '@type': 'Question',
        name: 'Ist 24h-Pflege über Primundus in Pforzheim rechtssicher?',
        acceptedAnswer: { '@type': 'Answer', text: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
      },
      {
        '@type': 'Question',
        name: 'Was bedeuten die Pforzheimer Höhenunterschiede für die Betreuung?',
        acceptedAnswer: { '@type': 'Answer', text: 'Zwischen dem tiefsten und dem höchsten Punkt der Stadt liegen rund 370 Höhenmeter. Die Innenstadt sitzt unten in den Talsohlen am Zusammenfluss von Enz, Nagold und Würm, große Teile des Stadtgebiets liegen mehrere hundert Meter darüber. Wer am Hang wohnt, für den beginnt jeder Weg mit einer Steigung — auch der zur Bushaltestelle. Eine Betreuungskraft übernimmt genau diese Wege und macht das Wohnenbleiben damit erst praktikabel.' },
      },
      {
        '@type': 'Question',
        name: 'Sind Pforzheimer Wohnungen aus der Nachkriegszeit für Pflege geeignet?',
        acceptedAnswer: { '@type': 'Answer', text: 'Meist ja, aber selten barrierefrei. Nach der Zerstörung von 1945 stammt knapp die Hälfte des Wohnungsbestands aus den Jahren 1949 bis 1978. Diese Häuser sind solide gebaut, entstanden aber lange vor jedem Gedanken an Barrierefreiheit — schmale Treppenhäuser ohne Aufzug gehören dazu. Für eine Betreuungskraft reicht ein eigenes Zimmer; die eigentliche Erleichterung liegt darin, dass jemand da ist und die Wege nach draußen übernimmt.' },
      },
      {
        '@type': 'Question',
        name: 'Welches Einzugsgebiet wird in Pforzheim bedient?',
        acceptedAnswer: { '@type': 'Answer', text: 'Pforzheim und Enzkreis: Mühlacker, Neuenbürg, Birkenfeld und alle Gemeinden im Enzkreis und Landkreis Calw' },
      },
    ],
  },
]

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Pforzheim?', a: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Baden-Württemberg (Eigenanteil rund 3.660 €/Monat, vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Pforzheim starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
  { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
  { q: 'Ist 24h-Pflege über Primundus in Pforzheim rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
  { q: 'Was bedeuten die Pforzheimer Höhenunterschiede für die Betreuung?', a: 'Zwischen dem tiefsten und dem höchsten Punkt der Stadt liegen rund 370 Höhenmeter. Die Innenstadt sitzt unten in den Talsohlen am Zusammenfluss von Enz, Nagold und Würm, große Teile des Stadtgebiets liegen mehrere hundert Meter darüber. Wer am Hang wohnt, für den beginnt jeder Weg mit einer Steigung — auch der zur Bushaltestelle. Eine Betreuungskraft übernimmt genau diese Wege und macht das Wohnenbleiben damit erst praktikabel.' },
  { q: 'Sind Pforzheimer Wohnungen aus der Nachkriegszeit für Pflege geeignet?', a: 'Meist ja, aber selten barrierefrei. Nach der Zerstörung von 1945 stammt knapp die Hälfte des Wohnungsbestands aus den Jahren 1949 bis 1978. Diese Häuser sind solide gebaut, entstanden aber lange vor jedem Gedanken an Barrierefreiheit — schmale Treppenhäuser ohne Aufzug gehören dazu. Für eine Betreuungskraft reicht ein eigenes Zimmer; die eigentliche Erleichterung liegt darin, dass jemand da ist und die Wege nach draußen übernimmt.' },
  { q: 'Welches Einzugsgebiet wird in Pforzheim bedient?', a: 'Pforzheim und Enzkreis: Mühlacker, Neuenbürg, Birkenfeld und alle Gemeinden im Enzkreis und Landkreis Calw' },
  { q: 'Ist in einer Wohnung in Pforzheim Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Pforzheim hat im Schnitt 85,4 m², 27,6 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 64,8 % der Wohnungen in Pforzheim liegen in Ein- oder Zweifamilienhäusern; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Baden-Württemberg zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.660 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause bleiben bei Pflegegrad 3 ab ca. 923 € — nach Pflegegeld, anteiligem Entlastungsbudget und Steuerermäßigung. Das sind rund 2.737 € Unterschied im Monat, 32.844 € im Jahr.' },
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
            { label: 'Pforzheim' },
          ]}
          augenbraue="24-Stunden-Pflege in Pforzheim"
          titel="24-Stunden-Pflege und Betreuung in Pforzheim"
          einleitung={<>Die Goldstadt lässt ihre Menschen nicht los: Wer in Brötzingen, auf dem Buckenberg oder in Huchenfeld sein Haus hat, will es im Alter nicht gegen ein Heimzimmer tauschen. Eine Betreuungskraft von Primundus zieht mit ein und ist bei Bedarf auch nachts da — zwischen Enz und Schwarzwaldrand, im vertrauten Zuhause. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>}
          aktualisiert="27. August 2026"
          lesezeit="6 Min."
          blick={[
            'Preis bei Primundus: ab 2.150 €/Monat',
            'Ihr Eigenanteil bei Pflegegrad 3: ab ca. 923 €/Monat',
            'Pflegeheim in Baden-Württemberg: Eigenanteil rund 3.660 €/Monat (vdek, 07/2026)',
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich',
          ]}
          blickTitel="Pforzheim auf einen Blick"
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist-24-stunden" titel="Was 24-Stunden-Betreuung in Pforzheim bedeutet">
            <Text>
              Eine Betreuungskraft zieht bei Ihnen ein, führt den Haushalt, hilft bei Körperpflege und Alltag und ist bei Bedarf
              auch nachts da. Anders als beim ambulanten Dienst, der zweimal am Tag kommt und wieder geht. Und anders als im
              Heim, wo der Umzug ansteht. Das Zuhause in Pforzheim bleibt, der gewohnte Tagesablauf auch.
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

          <Abschnitt id="kosten-und-kassenzuschuesse-in" titel="Kosten & Kassenzuschüsse in Pforzheim 2026">
            <Tabelle
              titel="Kostenbeispiel — Pflegegrad 3 in Pforzheim"
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
            <RechnerKasten src="ort-pforzheim" />
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-in-pforzheim" titel="Polnische Betreuungskräfte in Pforzheim">
            <Text>Wer in Pforzheim nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Die meisten kommen aus Polen, einige aus Rumänien oder Bulgarien — und sie sind in Pforzheim und im gesamten Umland im Einsatz.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Was eine polnische Betreuungskraft kostet:</strong> ab 2.150 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen. Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro Eigenanteil — deutlich weniger als ein Heimplatz, der hier im Schnitt rund 3.660 Euro im Monat kostet.</Text>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Pflegekraft aus Polen — Kosten, Recht und Ablauf</a>.</Text>
          </Abschnitt>

          <Abschnitt id="24-stunden-pflege-im" titel="24-Stunden-Pflege im Enzkreis">
            <Text>Unsere Betreuungskräfte ziehen in Pforzheim und im Enzkreis ein — auch in den kleineren Gemeinden, in denen sonst kaum jemand anbietet. Die Anreise dauert überall gleich lang, der Preis ist derselbe.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause in Pforzheim ausmacht">
            <Text>Zwischen dem tiefsten und dem höchsten Punkt Pforzheims liegen rund 370 Höhenmeter. Die Innenstadt sitzt unten in den Talsohlen, wo Enz, Nagold und Würm zusammenkommen; Büchenbronn und die Hochflächen liegen mehrere hundert Meter darüber. Deshalb erlebt jeder Pforzheimer seine Stadt anders, sobald das Gehen schwerfällt — je nachdem, ob er unten im Tal wohnt oder oben am Hang, wo schon der Weg zur Bushaltestelle eine Steigung ist.</Text>
            <Text>Beim Wohnen prägt bis heute der 23. Februar 1945 das Bild. In 22 Minuten wurden fast das gesamte Zentrum und vier Fünftel des Stadtgebiets zerstört. Was danach entstand, stammt überwiegend aus den Jahren 1949 bis 1978 — knapp die Hälfte aller Wohngebäude. Diese Häuser sind stabil und solide, aber sie wurden lange vor jedem Gedanken an Barrierefreiheit gebaut. Schmale Treppenhäuser ohne Aufzug und Bäder mit hoher Wannenkante gehören bei diesem Baualter oft dazu.</Text>
            <Text>Rund um die Stadt liegt der Enzkreis wie ein nach Süden geöffneter Ring — verwaltet von Pforzheim aus, aber ein eigener Raum, und ein deutlich älterer: Das Medianalter liegt dort bei 46 Jahren gegenüber 41 in der Stadt. Wer in Mühlacker, Neuenbürg oder Birkenfeld lebt, hat zudem längere Wege zu allem. Eine Betreuungskraft, die mit einzieht, ist von diesen Entfernungen unabhängig — und von den Höhenmetern zwischen Wohnung und Bushaltestelle ebenso.</Text>
            <Text>Verschaffen Sie sich zuerst einen neutralen Überblick: Die Pflegestützpunkte in Baden-Württemberg beraten kostenlos und unabhängig von Anbietern, auf Wunsch auch bei Ihnen zu Hause. Dieser Anspruch ist gesetzlich geregelt (§ 7a SGB XI) und gilt unabhängig davon, wofür Sie sich am Ende entscheiden.</Text>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-pforzheim" titel="Einzugsgebiet Pforzheim">
            <Text>Pforzheim und Enzkreis: Mühlacker, Neuenbürg, Birkenfeld und alle Gemeinden im Enzkreis und Landkreis Calw</Text>
            <NearbyCities current="pforzheim" />
          </Abschnitt>

          <OrtWerkzeuge ort={'Pforzheim'} land={'Baden-Württemberg'} />


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

          <Abschnitt id="haeufige-fragen-24h-pflege" titel="Häufige Fragen — 24h-Pflege in Pforzheim">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
