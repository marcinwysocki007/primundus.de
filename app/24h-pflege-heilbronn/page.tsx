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
  { id: 'was-ist-24-stunden', title: "Was 24-Stunden-Betreuung in Heilbronn bedeutet" },
  { id: 'kosten-und-kassenzuschuesse-in', title: "Kosten & Kassenzuschüsse in Heilbronn 2026" },
  { id: 'polnische-betreuungskraefte-in-heilbronn', title: "Polnische Betreuungskräfte in Heilbronn" },
  { id: '24-stunden-pflege-im', title: "24-Stunden-Pflege im Landkreis Heilbronn" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause in Heilbronn ausmacht" },
  { id: 'einzugsgebiet-heilbronn', title: "Einzugsgebiet Heilbronn" },
  { id: 'werkzeuge', title: "Rechnen Sie Ihren Fall für Heilbronn durch" },
  { id: 'so-arbeiten-wir', title: "So arbeiten wir" },
  { id: 'haeufige-fragen-24h-pflege', title: "Häufige Fragen — 24h-Pflege in Heilbronn" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Heilbronn — Stadt- und Landkreis',
  description: '24-Stunden-Pflege in Heilbronn — Stadt- und Landkreis: ab 2.150 € im Monat, bei Pflegegrad 3 ab ca. 923 € Eigenanteil. Kräfte vorher ansehen, täglich kündbar.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-heilbronn' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege Heilbronn — Betreuungskraft zuhause | Primundus',
    description: 'Geprüfte 24h-Betreuungskraft in Heilbronn. Täglich kündbar, rechtssicher, startklar.',
    url: 'https://primundus.de/24h-pflege-heilbronn',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-heilbronn#service',
    name: 'Primundus — 24h-Pflege Heilbronn',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte in Heilbronn. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-heilbronn',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'City', name: 'Heilbronn' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24h-Pflege Heilbronn', item: 'https://primundus.de/24h-pflege-heilbronn' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was kostet eine 24h-Pflegekraft in Heilbronn?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Baden-Württemberg (Eigenanteil rund 3.660 €/Monat, vdek 07/2026).' },
      },
      {
        '@type': 'Question',
        name: 'Wie schnell kann eine 24h-Pflegekraft in Heilbronn starten?',
        acceptedAnswer: { '@type': 'Answer', text: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
      },
      {
        '@type': 'Question',
        name: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
      },
      {
        '@type': 'Question',
        name: 'Ist 24h-Pflege über Primundus in Heilbronn rechtssicher?',
        acceptedAnswer: { '@type': 'Answer', text: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
      },
      {
        '@type': 'Question',
        name: 'Warum wird 24-Stunden-Pflege in Heilbronn zunehmend nachgefragt?',
        acceptedAnswer: { '@type': 'Answer', text: 'Wegen der Dynamik, nicht wegen des Bestands. Heilbronn ist mit einem Durchschnittsalter von 42 Jahren jünger als der Bundesschnitt — aber die Gruppe der über 80-Jährigen ist zwischen 2014 und 2023 um 31 Prozent gewachsen, während die 65- bis 79-Jährigen sogar weniger wurden. Es gibt also deutlich mehr Hochbetagte, und damit mehr Familien, bei denen es zu Hause allein nicht mehr geht.' },
      },
      {
        '@type': 'Question',
        name: 'Ist eine Heilbronner Nachkriegswohnung für Pflege geeignet?',
        acceptedAnswer: { '@type': 'Answer', text: 'In aller Regel ja, barrierefrei ist sie meist nicht. Die Altstadt wurde am 4. Dezember 1944 in 37 Minuten zu großen Teilen zerstört; heute stammen nur rund zwei Prozent der Wohnungen aus der Zeit vor 1900, dafür etwa die Hälfte aus den Jahren 1946 bis 1977. Die Stadt selbst nennt den Mangel an barrierearmem Wohnraum als eine ihrer größten Herausforderungen. Für eine Betreuungskraft genügt ein eigenes Zimmer.' },
      },
      {
        '@type': 'Question',
        name: 'Welches Einzugsgebiet wird in Heilbronn bedient?',
        acceptedAnswer: { '@type': 'Answer', text: 'Heilbronn und Landkreis Heilbronn: Bad Rappenau, Brackenheim, Neckarsulm, Öhringen und alle Gemeinden im Landkreis Heilbronn' },
      },
    ],
  },
]

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Heilbronn?', a: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Baden-Württemberg (Eigenanteil rund 3.660 €/Monat, vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Heilbronn starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
  { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
  { q: 'Ist 24h-Pflege über Primundus in Heilbronn rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
  { q: 'Warum wird 24-Stunden-Pflege in Heilbronn zunehmend nachgefragt?', a: 'Wegen der Dynamik, nicht wegen des Bestands. Heilbronn ist mit einem Durchschnittsalter von 42 Jahren jünger als der Bundesschnitt — aber die Gruppe der über 80-Jährigen ist zwischen 2014 und 2023 um 31 Prozent gewachsen, während die 65- bis 79-Jährigen sogar weniger wurden. Es gibt also deutlich mehr Hochbetagte, und damit mehr Familien, bei denen es zu Hause allein nicht mehr geht.' },
  { q: 'Ist eine Heilbronner Nachkriegswohnung für Pflege geeignet?', a: 'In aller Regel ja, barrierefrei ist sie meist nicht. Die Altstadt wurde am 4. Dezember 1944 in 37 Minuten zu großen Teilen zerstört; heute stammen nur rund zwei Prozent der Wohnungen aus der Zeit vor 1900, dafür etwa die Hälfte aus den Jahren 1946 bis 1977. Die Stadt selbst nennt den Mangel an barrierearmem Wohnraum als eine ihrer größten Herausforderungen. Für eine Betreuungskraft genügt ein eigenes Zimmer.' },
  { q: 'Welches Einzugsgebiet wird in Heilbronn bedient?', a: 'Heilbronn und Landkreis Heilbronn: Bad Rappenau, Brackenheim, Neckarsulm, Öhringen und alle Gemeinden im Landkreis Heilbronn' },
  { q: 'Ist in einer Wohnung in Heilbronn Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Heilbronn hat im Schnitt 87,3 m², 22,4 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 68,0 % der Wohnungen in Heilbronn liegen in Ein- oder Zweifamilienhäusern; dort bietet sich oft eine ganze Etage an.' },
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
            { label: 'Heilbronn' },
          ]}
          augenbraue="24-Stunden-Pflege in Heilbronn"
          titel="24-Stunden-Pflege und Betreuung in Heilbronn"
          einleitung={<>Das Haus mit Blick auf die Weinberge am Wartberg, die Wohnung in Böckingen oder Sontheim: Heilbronner geben ihr Zuhause nicht leichtfertig auf — schon gar nicht für ein Pflegeheim mit Warteliste. Eine Betreuungskraft von Primundus zieht stattdessen mit ein und ist bei Bedarf auch nachts da, auch im ganzen Landkreis. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>}
          aktualisiert="27. August 2026"
          lesezeit="6 Min."
          blick={[
            'Preis bei Primundus: ab 2.150 €/Monat',
            'Ihr Eigenanteil bei Pflegegrad 3: ab ca. 923 €/Monat',
            'Pflegeheim in Baden-Württemberg: Eigenanteil rund 3.660 €/Monat (vdek, 07/2026)',
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich',
          ]}
          blickTitel="Heilbronn auf einen Blick"
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist-24-stunden" titel="Was 24-Stunden-Betreuung in Heilbronn bedeutet">
            <Text>
              Eine Betreuungskraft zieht bei Ihnen ein, führt den Haushalt, hilft bei Körperpflege und Alltag und ist bei Bedarf
              auch nachts da. Anders als beim ambulanten Dienst, der zweimal am Tag kommt und wieder geht. Und anders als im
              Heim, wo der Umzug ansteht. Das Zuhause in Heilbronn bleibt, der gewohnte Tagesablauf auch.
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

          <Abschnitt id="kosten-und-kassenzuschuesse-in" titel="Kosten & Kassenzuschüsse in Heilbronn 2026">
            <Tabelle
              titel="Kostenbeispiel — Pflegegrad 3 in Heilbronn"
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
            <RechnerKasten src="ort-heilbronn" />
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-in-heilbronn" titel="Polnische Betreuungskräfte in Heilbronn">
            <Text>Wer in Heilbronn nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Die meisten kommen aus Polen, einige aus Rumänien oder Bulgarien — und sie sind in Heilbronn und im gesamten Umland im Einsatz.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Was eine polnische Betreuungskraft kostet:</strong> ab 2.150 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen. Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro Eigenanteil — deutlich weniger als ein Heimplatz, der hier im Schnitt rund 3.660 Euro im Monat kostet.</Text>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Polnische Pflegekräfte — was sie kosten und wie es rechtlich läuft</a>.</Text>
          </Abschnitt>

          <Abschnitt id="24-stunden-pflege-im" titel="24-Stunden-Pflege im Landkreis Heilbronn">
            <Text>Unsere Betreuungskräfte ziehen in Heilbronn und im Landkreis Heilbronn ein — auch in den kleineren Gemeinden, in denen sonst kaum jemand anbietet. Die Anreise dauert überall gleich lang, der Preis ist derselbe.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause in Heilbronn ausmacht">
            <Text>Heilbronn gilt als junge Stadt, und das stimmt auch: Mit einem Durchschnittsalter von 42 Jahren liegt sie unter dem Bundesschnitt, und sie wächst kräftig. Die Zahl, auf die es für die Pflege ankommt, ist trotzdem eine andere. Zwischen 2014 und 2023 ist die Gruppe der über 80-Jährigen in Heilbronn um <strong className="text-pm-ink font-semibold">31 Prozent gewachsen</strong> — während die Gruppe der 65- bis 79-Jährigen sogar kleiner wurde. Es sind also nicht mehr Ältere insgesamt, sondern deutlich mehr Hochbetagte. Und hochbetagt heißt: der Punkt, an dem es allein nicht mehr geht, rückt näher.</Text>
            <Text>Dazu kommt, wie in Heilbronn gewohnt wird. Am 4. Dezember 1944 wurde die Stadt in 37 Minuten zu fast zwei Dritteln zerstört; von den historischen Gebäuden blieben kaum zwei Dutzend. Heute stammen nur rund zwei Prozent der Wohnungen aus der Zeit vor 1900 — dafür etwa die Hälfte aus den Jahren 1946 bis 1977. Das sind solide Wohnungen, gebaut in einer Zeit, in der Barrierefreiheit kein Thema war. Die Stadt selbst nennt den Mangel an barrierearmem Wohnraum ausdrücklich als eine der großen Herausforderungen auf dem hiesigen Wohnungsmarkt.</Text>
            <Text>Wer im Osten wohnt, kennt zusätzlich die Steigungen: Zwischen dem Neckartal und den Heilbronner Bergen mit ihren Weinlagen liegen über 200 Höhenmeter, während es im Westen Richtung Gartacher Feld eben bleibt. Und im Landkreis, der die Stadt vollständig umschließt, ist es dünner besiedelt — rund 320 Einwohner je Quadratkilometer gegen etwa 1.300 in der Stadt. In Neckarsulm, Bad Rappenau oder Eppingen sind die Wege zum nächsten Dienst länger. Eine Betreuungskraft, die mit einzieht, ist von beidem unabhängig: von der Entfernung und von der Treppe.</Text>
            <Text>Verschaffen Sie sich zuerst einen neutralen Überblick: Die Pflegestützpunkte in Baden-Württemberg beraten kostenlos und unabhängig von Anbietern, auf Wunsch auch bei Ihnen zu Hause. Dieser Anspruch ist gesetzlich geregelt (§ 7a SGB XI) und gilt unabhängig davon, wofür Sie sich am Ende entscheiden.</Text>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-heilbronn" titel="Einzugsgebiet Heilbronn">
            <Text>Heilbronn und Landkreis Heilbronn: Bad Rappenau, Brackenheim, Neckarsulm, Öhringen und alle Gemeinden im Landkreis Heilbronn</Text>
            <NearbyCities current="heilbronn" />
          </Abschnitt>

          <OrtWerkzeuge ort={'Heilbronn'} land={'Baden-Württemberg'} />


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

          <Abschnitt id="haeufige-fragen-24h-pflege" titel="Häufige Fragen — 24h-Pflege in Heilbronn">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
