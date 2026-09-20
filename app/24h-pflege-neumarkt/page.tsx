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
  { id: 'was-ist-24-stunden', title: "Was 24-Stunden-Betreuung in Neumarkt i.d.OPf. bedeutet" },
  { id: 'kosten-und-kassenzuschuesse-in', title: "Kosten & Kassenzuschüsse in Neumarkt in der Oberpfalz 2026" },
  { id: 'polnische-betreuungskraefte-in-neumarkt', title: "Polnische Betreuungskräfte in Neumarkt i.d.OPf." },
  { id: '24-stunden-pflege-im', title: "24-Stunden-Pflege im Landkreis Neumarkt in der Oberpfalz" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause in Neumarkt ausmacht" },
  { id: 'einzugsgebiet-neumarkt-in-der', title: "Einzugsgebiet Neumarkt in der Oberpfalz" },
  { id: 'werkzeuge', title: "Rechnen Sie Ihren Fall für Neumarkt i.d.OPf. durch" },
  { id: 'so-arbeiten-wir', title: "So arbeiten wir" },
  { id: 'haeufige-fragen-24h-pflege', title: "Häufige Fragen — 24h-Pflege in Neumarkt in der Oberpfalz" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Neumarkt i.d.OPf.: ab 2.150 € im Monat',
  description: '24-Stunden-Pflege in Neumarkt i.d.OPf.: ab 2.150 € im Monat, Eigenanteil bei Pflegegrad 3 ab ca. 923 €. Kräfte vorher ansehen, keine Gebühr, täglich kündbar.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-neumarkt' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege Neumarkt in der Oberpfalz — Betreuungskraft zuhause | Primundus',
    description: 'Geprüfte 24h-Betreuungskraft in Neumarkt in der Oberpfalz. Täglich kündbar, rechtssicher, startklar.',
    url: 'https://primundus.de/24h-pflege-neumarkt',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-neumarkt#service',
    name: 'Primundus — 24h-Pflege Neumarkt in der Oberpfalz',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte in Neumarkt in der Oberpfalz. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-neumarkt',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'City', name: 'Neumarkt in der Oberpfalz' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24h-Pflege Neumarkt in der Oberpfalz', item: 'https://primundus.de/24h-pflege-neumarkt' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was kostet eine 24h-Pflegekraft in Neumarkt in der Oberpfalz?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Bayern (Eigenanteil rund 3.200 €/Monat, vdek 07/2026).' },
      },
      {
        '@type': 'Question',
        name: 'Wie schnell kann eine 24h-Pflegekraft in Neumarkt in der Oberpfalz starten?',
        acceptedAnswer: { '@type': 'Answer', text: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
      },
      {
        '@type': 'Question',
        name: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
      },
      {
        '@type': 'Question',
        name: 'Ist 24h-Pflege über Primundus in Neumarkt in der Oberpfalz rechtssicher?',
        acceptedAnswer: { '@type': 'Answer', text: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
      },
      {
        '@type': 'Question',
        name: 'Wie ist die ambulante Versorgung im Landkreis Neumarkt?',
        acceptedAnswer: { '@type': 'Answer', text: 'Dünn. Für rund 138.000 Einwohner gibt es elf ambulante Pflegedienste; auf jeden kommen im Schnitt etwa 97 Pflegebedürftige, in Bayern sind es 58. Das ist einer der höchsten Werte der Oberpfalz. Wer kurzfristig Unterstützung braucht, merkt das sofort — die Dienste sind ausgelastet, und die Termine richten sich nach der Tour. Eine Betreuungskraft, die im Haus wohnt, hängt an keiner Tourenplanung.' },
      },
      {
        '@type': 'Question',
        name: 'Warum leben in Neumarkt so viele Pflegebedürftige im Heim?',
        acceptedAnswer: { '@type': 'Answer', text: 'Weil die Alternativen fehlen. Im Landkreis Neumarkt leben 20 Prozent aller Pflegebedürftigen in stationärer Dauerpflege, in Bayern sind es 17 und im Bund 14 Prozent. Zusammen mit der dünnen ambulanten Versorgung ergibt das für viele Familien ein Entweder-oder: alles selbst stemmen oder ins Heim. Die Betreuung im eigenen Zuhause ist der Weg dazwischen, und sie lässt sich mit dem Pflegegeld kombinieren.' },
      },
      {
        '@type': 'Question',
        name: 'Sind Neumarkter Wohnungen für Pflege zu Hause geeignet?',
        acceptedAnswer: { '@type': 'Answer', text: 'In aller Regel ja, barrierefrei sind sie aber selten. Im April 1945 lagen 92 Prozent der Bausubstanz im historischen Stadtkern in Trümmern — in der Marktstraße blieben zwei Häuser stehen. Was heute steht, ist deshalb fast durchweg Nachkriegsbau: Nur gut ein Prozent der Neumarkter Wohnungen stammt aus der Zeit vor 1919, im Bundesschnitt sind es dreizehn. Diese Häuser sind solide, entstanden aber vor jedem Gedanken an Barrierefreiheit. Für die Betreuungskraft genügt ein eigenes Zimmer.' },
      },
      {
        '@type': 'Question',
        name: 'Welches Einzugsgebiet wird in Neumarkt in der Oberpfalz bedient?',
        acceptedAnswer: { '@type': 'Answer', text: 'Neumarkt und Landkreis Neumarkt in der Oberpfalz: Parsberg, Velburg, Berching und alle Gemeinden im Landkreis Neumarkt' },
      },
    ],
  },
]

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Neumarkt in der Oberpfalz?', a: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Bayern (Eigenanteil rund 3.200 €/Monat, vdek 07/2026).' },
  { q: 'Gibt es in Bayern besondere Pflegeförderungen?', a: 'Ja: Bayerisches Landespflegegeld — 500 €/Jahr ab Pflegegrad 2 mit Hauptwohnsitz in Bayern (bis 2025: 1.000 €). Antrag beim Landesamt für Pflege (LfP Bayern), kumulierbar mit allen Pflegekassen-Leistungen.' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Neumarkt in der Oberpfalz starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
  { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
  { q: 'Ist 24h-Pflege über Primundus in Neumarkt in der Oberpfalz rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
  { q: 'Wie ist die ambulante Versorgung im Landkreis Neumarkt?', a: 'Dünn. Für rund 138.000 Einwohner gibt es elf ambulante Pflegedienste; auf jeden kommen im Schnitt etwa 97 Pflegebedürftige, in Bayern sind es 58. Das ist einer der höchsten Werte der Oberpfalz. Wer kurzfristig Unterstützung braucht, merkt das sofort — die Dienste sind ausgelastet, und die Termine richten sich nach der Tour. Eine Betreuungskraft, die im Haus wohnt, hängt an keiner Tourenplanung.' },
  { q: 'Warum leben in Neumarkt so viele Pflegebedürftige im Heim?', a: 'Weil die Alternativen fehlen. Im Landkreis Neumarkt leben 20 Prozent aller Pflegebedürftigen in stationärer Dauerpflege, in Bayern sind es 17 und im Bund 14 Prozent. Zusammen mit der dünnen ambulanten Versorgung ergibt das für viele Familien ein Entweder-oder: alles selbst stemmen oder ins Heim. Die Betreuung im eigenen Zuhause ist der Weg dazwischen, und sie lässt sich mit dem Pflegegeld kombinieren.' },
  { q: 'Sind Neumarkter Wohnungen für Pflege zu Hause geeignet?', a: 'In aller Regel ja, barrierefrei sind sie aber selten. Im April 1945 lagen 92 Prozent der Bausubstanz im historischen Stadtkern in Trümmern — in der Marktstraße blieben zwei Häuser stehen. Was heute steht, ist deshalb fast durchweg Nachkriegsbau: Nur gut ein Prozent der Neumarkter Wohnungen stammt aus der Zeit vor 1919, im Bundesschnitt sind es dreizehn. Diese Häuser sind solide, entstanden aber vor jedem Gedanken an Barrierefreiheit. Für die Betreuungskraft genügt ein eigenes Zimmer.' },
  { q: 'Welches Einzugsgebiet wird in Neumarkt in der Oberpfalz bedient?', a: 'Neumarkt und Landkreis Neumarkt in der Oberpfalz: Parsberg, Velburg, Berching und alle Gemeinden im Landkreis Neumarkt' },
  { q: 'Ist in einer Wohnung in Neumarkt i.d.OPf. Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Neumarkt i.d.OPf. hat im Schnitt 100,9 m², 16,6 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 86,3 % der Wohnungen in Neumarkt i.d.OPf. liegen in Ein- oder Zweifamilienhäusern; dort bietet sich oft eine ganze Etage an.' },
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
            { label: 'Neumarkt in der Oberpfalz' },
          ]}
          augenbraue="24-Stunden-Pflege in Neumarkt in der Oberpfalz"
          titel="24-Stunden-Pflege und Betreuung in Neumarkt i.d.OPf."
          einleitung={<>Wer in Neumarkt alt geworden ist — in der Altstadt, in Woffenbach oder draußen Richtung Berg und Berngau — möchte den Blick auf den Jura und den eigenen Garten nicht gegen ein Pflegeheim tauschen. Muss auch niemand: Eine Betreuungskraft von Primundus zieht mit ein und ist bei Bedarf auch nachts da. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>}
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
          blickTitel="Neumarkt in der Oberpfalz auf einen Blick"
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist-24-stunden" titel="Was 24-Stunden-Betreuung in Neumarkt i.d.OPf. bedeutet">
            <Text>
              Eine Betreuungskraft zieht bei Ihnen ein, führt den Haushalt, hilft bei Körperpflege und Alltag und ist bei Bedarf
              auch nachts da. Anders als beim ambulanten Dienst, der zweimal am Tag kommt und wieder geht. Und anders als im
              Heim, wo der Umzug ansteht. Das Zuhause in Neumarkt i.d.OPf. bleibt, der gewohnte Tagesablauf auch.
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

          <Abschnitt id="kosten-und-kassenzuschuesse-in" titel="Kosten & Kassenzuschüsse in Neumarkt in der Oberpfalz 2026">
            <Tabelle
              titel="Kostenbeispiel — Pflegegrad 3 in Neumarkt in der Oberpfalz"
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
            <RechnerKasten src="ort-neumarkt" />
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-in-neumarkt" titel="Polnische Betreuungskräfte in Neumarkt i.d.OPf.">
            <Text>Wer in Neumarkt i.d.OPf. nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Die meisten kommen aus Polen, einige aus Rumänien oder Bulgarien — und sie sind in Neumarkt i.d.OPf. und im gesamten Umland im Einsatz.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Was eine polnische Betreuungskraft kostet:</strong> ab 2.150 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen. Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro Eigenanteil — deutlich weniger als ein Heimplatz, der hier im Schnitt rund 3.200 Euro im Monat kostet.</Text>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Polnische Pflegekräfte — was sie kosten und wie es rechtlich läuft</a>.</Text>
          </Abschnitt>

          <Abschnitt id="24-stunden-pflege-im" titel="24-Stunden-Pflege im Landkreis Neumarkt in der Oberpfalz">
            <Text>Unsere Betreuungskräfte ziehen in Neumarkt i.d.OPf. und im Landkreis Neumarkt in der Oberpfalz ein — auch in den kleineren Gemeinden, in denen sonst kaum jemand anbietet. Die Anreise dauert überall gleich lang, der Preis ist derselbe.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause in Neumarkt ausmacht">
            <Text>Eine Zahl beschreibt die Lage im Landkreis Neumarkt besser als jede andere: Auf die rund 138.000 Einwohner kommen <strong className="text-pm-ink font-semibold">gerade einmal elf ambulante Pflegedienste</strong>. Jeder von ihnen versorgt im Schnitt rund 97 Pflegebedürftige — in Bayern sind es 58. Das ist einer der höchsten Werte der ganzen Oberpfalz. Wer hier kurzfristig Unterstützung braucht, merkt das sofort: Die Dienste sind ausgelastet, und die Termine richten sich nach der Tour.</Text>
            <Text>Entsprechend häufig endet der Weg im Heim. Im Landkreis leben 20 Prozent aller Pflegebedürftigen in stationärer Dauerpflege — in Bayern sind es 17, im Bund 14 Prozent. Das ist keine Frage der Vorliebe, sondern eine Frage fehlender Alternativen. Eine Betreuungskraft, die mit einzieht, ist genau diese Alternative: Sie hängt an keiner Tourenplanung, weil sie im Haus wohnt, und sie ist auch nachts und am Wochenende da.</Text>
            <Text>Dazu kommen die Entfernungen. Im Landkreis liegt der nächste Hausarzt im Schnitt fast 1.900 Meter entfernt, die nächste Apotheke fast 2.500 — deutlich weiter als im bayerischen Durchschnitt. Solange man Auto fährt, ist das kein Thema. Wenn der Führerschein wegfällt, wird daraus schnell die Frage, wer denn nun fährt. In der Stadt Neumarkt selbst ist die Lage besser, dafür ist die Stadt spürbar älter als ihr Umland: Über elf Prozent der Neumarkter sind über 75, im Landkreis sind es gut neun.</Text>
            <Text>Beim Wohnen prägt bis heute der April 1945. Im historischen Stadtkern lagen damals 92 Prozent der Bausubstanz in Trümmern; in der Marktstraße blieben zwei Häuser stehen. Was heute steht, ist deshalb fast durchweg Nachkriegsbau — <strong className="text-pm-ink font-semibold"> nur gut ein Prozent der Neumarkter Wohnungen stammt aus der Zeit vor 1919</strong>, im Bundesschnitt sind es dreizehn. Diese Häuser sind solide, aber sie entstanden vor jedem Gedanken an Barrierefreiheit. Und im Landkreis, wo mehr als sieben von zehn Wohnungen in Ein- oder Zweifamilienhäusern liegen, ist es meist die eigene Treppe, die zum Problem wird — in Freystadt, Berching oder Postbauer-Heng genauso wie in der Kernstadt.</Text>
            <Text>Bevor Sie etwas entscheiden, holen Sie sich eine neutrale Einschätzung: Die Fachstellen für Pflege- und Behindertenberatung in Bayern beraten kostenlos und unabhängig von Anbietern, auf Wunsch auch bei Ihnen zu Hause (§ 7a SGB XI). Dazu kommt das bayerische Landespflegegeld: 500 Euro im Jahr ab Pflegegrad 2, unabhängig davon, wer die Pflege übernimmt.</Text>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-neumarkt-in-der" titel="Einzugsgebiet Neumarkt in der Oberpfalz">
            <Text>Neumarkt und Landkreis Neumarkt in der Oberpfalz: Parsberg, Velburg, Berching und alle Gemeinden im Landkreis Neumarkt</Text>
            <NearbyCities current="neumarkt" />
          </Abschnitt>

          <OrtWerkzeuge ort={'Neumarkt i.d.OPf.'} land={'Bayern'} />


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

          <Abschnitt id="haeufige-fragen-24h-pflege" titel="Häufige Fragen — 24h-Pflege in Neumarkt in der Oberpfalz">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
