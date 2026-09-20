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
  { id: 'was-ist-24-stunden', title: "Was 24-Stunden-Betreuung in Landshut bedeutet" },
  { id: 'kosten-und-kassenzuschuesse-in', title: "Kosten & Kassenzuschüsse in Landshut 2026" },
  { id: 'polnische-betreuungskraefte-in-landshut', title: "Polnische Betreuungskräfte in Landshut" },
  { id: '24-stunden-pflege-im', title: "24-Stunden-Pflege im Landkreis Landshut" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause in Landshut ausmacht" },
  { id: 'einzugsgebiet-landshut', title: "Einzugsgebiet Landshut" },
  { id: 'werkzeuge', title: "Was es für Ihre Eltern in Landshut kostet" },
  { id: 'so-arbeiten-wir', title: "So arbeiten wir" },
  { id: 'haeufige-fragen-24h-pflege', title: "Häufige Fragen — 24h-Pflege in Landshut" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege in in Landshut und im Landkreis',
  description: '24-Stunden-Pflege in in Landshut und im Landkreis: ab 2.150 € im Monat, bei Pflegegrad 3 ab ca. 923 € Eigenanteil. Kräfte vorher ansehen, täglich kündbar.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-landshut' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege Landshut — Betreuungskraft zuhause | Primundus',
    description: 'Geprüfte 24h-Betreuungskraft in Landshut. Täglich kündbar, rechtssicher, startklar.',
    url: 'https://primundus.de/24h-pflege-landshut',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-landshut#service',
    name: 'Primundus — 24h-Pflege Landshut',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte in Landshut. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-landshut',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'City', name: 'Landshut' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24h-Pflege Landshut', item: 'https://primundus.de/24h-pflege-landshut' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was kostet eine 24h-Pflegekraft in Landshut?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Bayern (Eigenanteil rund 3.200 €/Monat, vdek 07/2026).' },
      },
      {
        '@type': 'Question',
        name: 'Gibt es in Bayern besondere Pflegeförderungen?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ja: Bayerisches Landespflegegeld — 500 €/Jahr ab Pflegegrad 2 mit Hauptwohnsitz in Bayern (bis 2025: 1.000 €). Antrag beim Landesamt für Pflege (LfP Bayern), kumulierbar mit allen Pflegekassen-Leistungen.' },
      },
      {
        '@type': 'Question',
        name: 'Wie schnell kann eine 24h-Pflegekraft in Landshut starten?',
        acceptedAnswer: { '@type': 'Answer', text: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
      },
      {
        '@type': 'Question',
        name: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
      },
      {
        '@type': 'Question',
        name: 'Ist 24h-Pflege über Primundus in Landshut rechtssicher?',
        acceptedAnswer: { '@type': 'Answer', text: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
      },
      {
        '@type': 'Question',
        name: 'Kommt eine Betreuungskraft auch in die Dörfer im Landkreis Landshut?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ja, und dort wiegt der Unterschied am schwersten. Auf über 1.300 Quadratkilometern verteilen sich 35 Gemeinden mit im Schnitt gut 120 Einwohnern je Quadratkilometer — deutlich dünner besiedelt als Bayern insgesamt. Ambulante Dienste fahren entsprechend lange Touren, und die Termine richten sich nach der Route. Eine Betreuungskraft, die im Haus wohnt, braucht keine Anfahrt. Der Preis ist im Landkreis derselbe wie in der Stadt.' },
      },
      {
        '@type': 'Question',
        name: 'Gibt es in Bayern zusätzliche Leistungen zum Pflegegeld?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ja, das Landespflegegeld: 500 Euro im Jahr für Pflegebedürftige ab Pflegegrad 2, unabhängig davon, wer die Pflege übernimmt und ob zusätzlich Pflegegeld oder Sachleistungen fließen. Der Antrag läuft über das Landesamt für Pflege. Zusammen mit Pflegegeld und Entlastungsbetrag senkt das den Eigenanteil einer 24-Stunden-Betreuung spürbar.' },
      },
      {
        '@type': 'Question',
        name: 'Welches Einzugsgebiet wird in Landshut bedient?',
        acceptedAnswer: { '@type': 'Answer', text: 'Landshut und Landkreis Landshut: Rottenburg, Geisenhausen, Ergoldsbach und alle Gemeinden im Landkreis Landshut und Dingolfing-Landau' },
      },
    ],
  },
]

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Landshut?', a: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Bayern (Eigenanteil rund 3.200 €/Monat, vdek 07/2026).' },
  { q: 'Gibt es in Bayern besondere Pflegeförderungen?', a: 'Ja: Bayerisches Landespflegegeld — 500 €/Jahr ab Pflegegrad 2 mit Hauptwohnsitz in Bayern (bis 2025: 1.000 €). Antrag beim Landesamt für Pflege (LfP Bayern), kumulierbar mit allen Pflegekassen-Leistungen.' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Landshut starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
  { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
  { q: 'Ist 24h-Pflege über Primundus in Landshut rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
  { q: 'Kommt eine Betreuungskraft auch in die Dörfer im Landkreis Landshut?', a: 'Ja, und dort wiegt der Unterschied am schwersten. Auf über 1.300 Quadratkilometern verteilen sich 35 Gemeinden mit im Schnitt gut 120 Einwohnern je Quadratkilometer — deutlich dünner besiedelt als Bayern insgesamt. Ambulante Dienste fahren entsprechend lange Touren, und die Termine richten sich nach der Route. Eine Betreuungskraft, die im Haus wohnt, braucht keine Anfahrt. Der Preis ist im Landkreis derselbe wie in der Stadt.' },
  { q: 'Gibt es in Bayern zusätzliche Leistungen zum Pflegegeld?', a: 'Ja, das Landespflegegeld: 500 Euro im Jahr für Pflegebedürftige ab Pflegegrad 2, unabhängig davon, wer die Pflege übernimmt und ob zusätzlich Pflegegeld oder Sachleistungen fließen. Der Antrag läuft über das Landesamt für Pflege. Zusammen mit Pflegegeld und Entlastungsbetrag senkt das den Eigenanteil einer 24-Stunden-Betreuung spürbar.' },
  { q: 'Welches Einzugsgebiet wird in Landshut bedient?', a: 'Landshut und Landkreis Landshut: Rottenburg, Geisenhausen, Ergoldsbach und alle Gemeinden im Landkreis Landshut und Dingolfing-Landau' },
  { q: 'Ist in einer Wohnung in Landshut Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Landshut hat im Schnitt 89,8 m², 27,5 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 75,9 % der Wohnungen in Landshut liegen in Ein- oder Zweifamilienhäusern; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Bayern zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.200 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause bleiben bei Pflegegrad 3 ab ca. 923 € — nach Pflegegeld, anteiligem Entlastungsbudget und Steuerermäßigung. Das sind rund 2.277 € Unterschied im Monat, 27.324 € im Jahr.' },
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
            { label: 'Landshut' },
          ]}
          augenbraue="24-Stunden-Pflege in Landshut"
          titel="24-Stunden-Pflege und Betreuung in Landshut"
          einleitung={<>Zwischen Altstadt und Ergolding, in Altdorf oder draußen in Vilsbiburg: Wer in und um Landshut alt geworden ist, hängt an seinem Zuhause — am Garten, an den Nachbarn, am Blick auf die Burg Trausnitz. Eine Betreuungskraft von Primundus zieht mit ein, damit das so bleibt: 1:1-Betreuung, bei Bedarf auch nachts, täglich kündbar, Anreise in 3 Tagen möglich.</>}
          aktualisiert="27. August 2026"
          lesezeit="6 Min."
          blick={[
            'Preis bei Primundus: ab 2.150 €/Monat',
            'Ihr Eigenanteil bei Pflegegrad 3: ab ca. 923 €/Monat',
            'Pflegeheim in Bayern: Eigenanteil rund 3.200 €/Monat (vdek, 07/2026)',
            'Bayern: Landespflegegeld +500 €/Jahr',
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich',
          ]}
          blickTitel="Landshut auf einen Blick"
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist-24-stunden" titel="Was 24-Stunden-Betreuung in Landshut bedeutet">
            <Text>
              Eine Betreuungskraft zieht bei Ihnen ein, führt den Haushalt, hilft bei Körperpflege und Alltag und ist bei Bedarf
              auch nachts da. Anders als beim ambulanten Dienst, der zweimal am Tag kommt und wieder geht. Und anders als im
              Heim, wo der Umzug ansteht. Das Zuhause in Landshut bleibt, der gewohnte Tagesablauf auch.
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

          <Abschnitt id="kosten-und-kassenzuschuesse-in" titel="Kosten & Kassenzuschüsse in Landshut 2026">
            <Tabelle
              titel="Kostenbeispiel — Pflegegrad 3 in Landshut"
              zeilen={[
                ['Kosten Primundus', 'ab 2.150 €/Monat'],
                ['− Pflegegeld PG 3', '− 599 €/Monat'],
                ['− Entlastungsbudget (anteilig)', '− ca. 295 €/Monat'],
                ['− Steuerermäßigung (20 %, bis 4.000 €/Jahr)', '− ca. 333 €/Monat'],
                [<strong key="e">Ihr Eigenanteil</strong>, <strong key="w">ab ca. 923 €/Monat</strong>],
              ]}
              betont={1}
              fuss="Eine Person, Werte aus unserem Kostenrechner, zzgl. An- und Abreise 125 € je Strecke · Pflegeheim in Bayern: Eigenanteil rund 3.200 €/Monat (vdek, 07/2026) — 24h-Pflege zuhause ist oft günstiger und erhält das Zuhause"
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
            <Kasten ton="gruen" titel="Bayern-Vorteil: Landespflegegeld +500 €/Jahr">
              <Text>Bayern zahlt zusätzlich 1.000 €/Jahr (ca. 83 €/Monat) für alle PG 2–5 in häuslicher Pflege. Antrag beim Landesamt für Pflege (LfP Bayern) — kumulierbar mit allen Pflegekasse-Zuschüssen.</Text>
            </Kasten>
            <RechnerKasten src="ort-landshut" />
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-in-landshut" titel="Polnische Betreuungskräfte in Landshut">
            <Text>Wer in Landshut nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Die meisten kommen aus Polen, einige aus Rumänien oder Bulgarien — und sie sind in Landshut und im gesamten Umland im Einsatz.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Was eine polnische Betreuungskraft kostet:</strong> ab 2.150 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen. Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro Eigenanteil — deutlich weniger als ein Heimplatz, der hier im Schnitt rund 3.200 Euro im Monat kostet.</Text>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Polnische Pflegekräfte — Kosten, Recht und Ablauf</a>.</Text>
          </Abschnitt>

          <Abschnitt id="24-stunden-pflege-im" titel="24-Stunden-Pflege im Landkreis Landshut">
            <Text>Unsere Betreuungskräfte ziehen in Landshut und im Landkreis Landshut ein — auch in den kleineren Gemeinden, in denen sonst kaum jemand anbietet. Die Anreise dauert überall gleich lang, der Preis ist derselbe.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause in Landshut ausmacht">
            <Text>In Landshut selbst sind die Wege kurz. Der bebaute Teil der Stadt liegt auf den flachen Terrassen im Isartal, und wer in der Altstadt oder in Achdorf wohnt, hat Arzt, Apotheke und Bäcker in erreichbarer Nähe. Steil wird es erst am Rand, wo die Hügelketten ansteigen und die Burg Trausnitz über dem Hofberg liegt.</Text>
            <Text>Ganz anders sieht es im Landkreis aus. Auf über 1.300 Quadratkilometern verteilen sich 35 Gemeinden, im Schnitt gerade einmal gut 120 Einwohner je Quadratkilometer — deutlich dünner besiedelt als Bayern insgesamt. Wer in einem der Dörfer wohnt, für den bedeutet Pflege zu Hause vor allem eines: Jemand muss die Strecke fahren. Der ambulante Dienst legt lange Touren zurück und kommt, wann es der Plan hergibt. Und wenn der eigene Führerschein wegfällt, wird aus jedem Arzttermin ein organisatorisches Projekt.</Text>
            <Text>Genau dort liegt die Stärke einer Betreuungskraft, die mit einzieht: Sie ist keine Anfahrt, sie ist schon da — morgens, nachts und an dem Nachmittag, an dem sonst niemand vorbeikommt. Das gilt in Landshut ebenso wie in Ergolding, Essenbach, Altdorf oder Vilsbiburg. Landshut wächst seit Jahren kräftig, aber die Menschen, die hier alt werden, bleiben meist genau dort wohnen, wo sie ihr Leben verbracht haben.</Text>
            <Text>Bevor Sie sich entscheiden, holen Sie sich eine neutrale Einschätzung: Die Fachstellen für Pflege- und Behindertenberatung in Bayern beraten kostenlos und unabhängig von Anbietern, auf Wunsch auch bei Ihnen zu Hause (§ 7a SGB XI). Dazu kommt in Bayern das Landespflegegeld: 500 Euro im Jahr ab Pflegegrad 2, unabhängig davon, wer die Pflege übernimmt.</Text>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-landshut" titel="Einzugsgebiet Landshut">
            <Text>Landshut und Landkreis Landshut: Rottenburg, Geisenhausen, Ergoldsbach und alle Gemeinden im Landkreis Landshut und Dingolfing-Landau</Text>
            <NearbyCities current="landshut" />
          </Abschnitt>

          <OrtWerkzeuge ort={'Landshut'} land={'Bayern'} />


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

          <Abschnitt id="haeufige-fragen-24h-pflege" titel="Häufige Fragen — 24h-Pflege in Landshut">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
