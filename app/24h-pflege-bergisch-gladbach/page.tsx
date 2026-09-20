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
  { id: 'was-ist-24-stunden', title: "Was 24-Stunden-Betreuung in Bergisch Gladbach bedeutet" },
  { id: 'kosten-und-kassenzuschuesse-in', title: "Kosten & Kassenzuschüsse in Bergisch Gladbach 2026" },
  { id: 'polnische-betreuungskraefte-in-bergisch', title: "Polnische Betreuungskräfte in Bergisch Gladbach" },
  { id: '24-stunden-pflege-im', title: "24-Stunden-Pflege im Rheinisch-Bergischen Kreis" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause in Bergisch Gladbach ausmacht" },
  { id: 'einzugsgebiet-bergisch-gladbach', title: "Einzugsgebiet Bergisch Gladbach" },
  { id: 'werkzeuge', title: "Was es in Bergisch Gladbach kostet, und was die Pflegekasse dazugibt" },
  { id: 'so-arbeiten-wir', title: "So arbeiten wir" },
  { id: 'stimmen-vor-ort', title: "Familien aus der Region über uns" },
  { id: 'haeufige-fragen-24h-pflege', title: "Häufige Fragen — 24h-Pflege in Bergisch Gladbach" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Bergisch Gladbach: zu Hause statt Heim',
  description: 'Körperpflege, Kochen, Einkäufe, Begleitung, nachts jemand im Haus: Eine Betreuungskraft übernimmt das, was Angehörige allein nicht mehr schaffen.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-bergisch-gladbach' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege Bergisch Gladbach — Betreuungskraft zuhause | Primundus',
    description: 'Geprüfte 24h-Betreuungskraft in Bergisch Gladbach. Täglich kündbar, rechtssicher, startklar.',
    url: 'https://primundus.de/24h-pflege-bergisch-gladbach',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-bergisch-gladbach#service',
    name: 'Primundus — 24h-Pflege Bergisch Gladbach',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte in Bergisch Gladbach. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-bergisch-gladbach',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'City', name: 'Bergisch Gladbach' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24h-Pflege Bergisch Gladbach', item: 'https://primundus.de/24h-pflege-bergisch-gladbach' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was kostet eine 24h-Pflegekraft in Bergisch Gladbach?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Nordrhein-Westfalen (Eigenanteil rund 3.580 €/Monat, vdek 07/2026).' },
      },
      {
        '@type': 'Question',
        name: 'Wie schnell kann eine 24h-Pflegekraft in Bergisch Gladbach starten?',
        acceptedAnswer: { '@type': 'Answer', text: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
      },
      {
        '@type': 'Question',
        name: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
      },
      {
        '@type': 'Question',
        name: 'Ist 24h-Pflege über Primundus in Bergisch Gladbach rechtssicher?',
        acceptedAnswer: { '@type': 'Answer', text: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
      },
      {
        '@type': 'Question',
        name: 'Was tun, wenn die Kinder nicht in Bergisch Gladbach wohnen?',
        acceptedAnswer: { '@type': 'Answer', text: 'Das ist hier die häufigste Ausgangslage. Bergisch Gladbach hat einen überdurchschnittlich hohen Anteil Hochbetagter, und zugleich ziehen junge Erwachsene zum Studium weg — die Eltern werden also hier alt, während die Kinder in Köln, Düsseldorf oder weiter entfernt wohnen. Kümmern über Entfernung funktioniert im Alltag nicht: Niemand kann morgens beim Anziehen helfen und abends nachsehen, ob der Herd aus ist. Eine Betreuungskraft, die im Haus wohnt, übernimmt genau das — und die Angehörigen bleiben Angehörige.' },
      },
      {
        '@type': 'Question',
        name: 'Gilt das Angebot auch in Kürten, Overath oder Odenthal?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ja, im gesamten Rheinisch-Bergischen Kreis. Dort ist es sogar besonders relevant: Bergisch Gladbach ist rund viermal so dicht besiedelt wie Kürten oder Overath. Wer in den dünner besiedelten Gemeinden lebt, wartet auf einen ambulanten Dienst, der lange Touren fährt. Eine Betreuungskraft im Haus ist davon unabhängig — der Preis ist derselbe wie in der Kreisstadt, Anfahrtskosten berechnen wir nicht.' },
      },
      {
        '@type': 'Question',
        name: 'Welches Einzugsgebiet wird in Bergisch Gladbach bedient?',
        acceptedAnswer: { '@type': 'Answer', text: 'Bergisch Gladbach und Rheinisch-Bergischer Kreis: Overath, Rösrath, Kürten, Odenthal und alle Gemeinden im Rheinisch-Bergischen Kreis' },
      },
    ],
  },
]

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Bergisch Gladbach?', a: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Nordrhein-Westfalen (Eigenanteil rund 3.580 €/Monat, vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Bergisch Gladbach starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
  { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
  { q: 'Ist 24h-Pflege über Primundus in Bergisch Gladbach rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
  { q: 'Was tun, wenn die Kinder nicht in Bergisch Gladbach wohnen?', a: 'Das ist hier die häufigste Ausgangslage. Bergisch Gladbach hat einen überdurchschnittlich hohen Anteil Hochbetagter, und zugleich ziehen junge Erwachsene zum Studium weg — die Eltern werden also hier alt, während die Kinder in Köln, Düsseldorf oder weiter entfernt wohnen. Kümmern über Entfernung funktioniert im Alltag nicht: Niemand kann morgens beim Anziehen helfen und abends nachsehen, ob der Herd aus ist. Eine Betreuungskraft, die im Haus wohnt, übernimmt genau das — und die Angehörigen bleiben Angehörige.' },
  { q: 'Gilt das Angebot auch in Kürten, Overath oder Odenthal?', a: 'Ja, im gesamten Rheinisch-Bergischen Kreis. Dort ist es sogar besonders relevant: Bergisch Gladbach ist rund viermal so dicht besiedelt wie Kürten oder Overath. Wer in den dünner besiedelten Gemeinden lebt, wartet auf einen ambulanten Dienst, der lange Touren fährt. Eine Betreuungskraft im Haus ist davon unabhängig — der Preis ist derselbe wie in der Kreisstadt, Anfahrtskosten berechnen wir nicht.' },
  { q: 'Welches Einzugsgebiet wird in Bergisch Gladbach bedient?', a: 'Bergisch Gladbach und Rheinisch-Bergischer Kreis: Overath, Rösrath, Kürten, Odenthal und alle Gemeinden im Rheinisch-Bergischen Kreis' },
  { q: 'Ist in einer Wohnung in Bergisch Gladbach Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Bergisch Gladbach hat im Schnitt 98,5 m², 18,2 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 80,2 % der Gebäude in Bergisch Gladbach sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Nordrhein-Westfalen zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.580 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause bleiben bei Pflegegrad 3 ab ca. 923 € — nach Pflegegeld, anteiligem Entlastungsbudget und Steuerermäßigung. Das sind rund 2.657 € Unterschied im Monat, 31.884 € im Jahr.' },
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
            { label: 'Bergisch Gladbach' },
          ]}
          augenbraue="24-Stunden-Pflege in Bergisch Gladbach"
          titel="24-Stunden-Pflege und Betreuung in Bergisch Gladbach"
          einleitung={<>In Bensberg, Refrath oder Paffrath wohnen viele, deren Kinder täglich nach Köln pendeln — und die ihr Haus im Grünen um nichts in der Welt aufgeben wollen. Müssen sie auch nicht: Eine Betreuungskraft von Primundus zieht mit ein und ist bei Bedarf auch nachts da, wenn allein leben nicht mehr geht. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>}
          aktualisiert="27. August 2026"
          lesezeit="6 Min."
          blick={[
            'Preis bei Primundus: ab 2.150 €/Monat',
            'Ihr Eigenanteil bei Pflegegrad 3: ab ca. 923 €/Monat',
            'Pflegeheim in Nordrhein-Westfalen: Eigenanteil rund 3.580 €/Monat (vdek, 07/2026)',
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich',
          ]}
          blickTitel="Bergisch Gladbach auf einen Blick"
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist-24-stunden" titel="Was 24-Stunden-Betreuung in Bergisch Gladbach bedeutet">
            <Text>
              Eine Betreuungskraft zieht bei Ihnen ein, führt den Haushalt, hilft bei Körperpflege und Alltag und ist bei Bedarf
              auch nachts da. Anders als beim ambulanten Dienst, der zweimal am Tag kommt und wieder geht. Und anders als im
              Heim, wo der Umzug ansteht. Das Zuhause in Bergisch Gladbach bleibt, der gewohnte Tagesablauf auch.
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

          <Abschnitt id="kosten-und-kassenzuschuesse-in" titel="Kosten & Kassenzuschüsse in Bergisch Gladbach 2026">
            <Tabelle
              titel="Kostenbeispiel — Pflegegrad 3 in Bergisch Gladbach"
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
            <RechnerKasten src="ort-bergisch-gladbach" />
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-in-bergisch" titel="Polnische Betreuungskräfte in Bergisch Gladbach">
            <Text>Wer in Bergisch Gladbach nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Sie kommen aus Polen und sind in Bergisch Gladbach und im gesamten Umland im Einsatz.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Was eine polnische Betreuungskraft kostet:</strong> ab 2.150 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen. Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro Eigenanteil — deutlich weniger als ein Heimplatz, der hier im Schnitt rund 3.580 Euro im Monat kostet.</Text>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Pflegekraft aus Polen — Kosten, Recht und Ablauf</a>.</Text>
          </Abschnitt>

          <Abschnitt id="24-stunden-pflege-im" titel="24-Stunden-Pflege im Rheinisch-Bergischen Kreis">
            <Text>Unsere Betreuungskräfte ziehen in Bergisch Gladbach und im Rheinisch-Bergischen Kreis ein — auch in den kleineren Gemeinden, in denen sonst kaum jemand anbietet. Die Anreise dauert überall gleich lang, der Preis ist derselbe.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause in Bergisch Gladbach ausmacht">
            <Text>Bergisch Gladbach ist eine ältere Stadt, als viele denken. Das Medianalter liegt bei 49 Jahren, jeder Vierte ist über 65, und fast jeder Zehnte ist über 80 — deutlich mehr als im Bundesschnitt. Gleichzeitig ziehen junge Erwachsene zum Studium weg. Für viele Familien heißt das: Die Eltern werden hier alt, die Kinder wohnen in Köln, Düsseldorf oder noch weiter weg.</Text>
            <Text>Genau diese Konstellation führt zu den Anrufen, die wir am häufigsten bekommen. Nicht, weil sich niemand kümmern will, sondern weil Kümmern über Entfernung nicht funktioniert. Wer eine Stunde entfernt arbeitet, kann nicht morgens beim Anziehen helfen und abends nachsehen, ob der Herd aus ist. Eine Betreuungskraft, die im Haus wohnt, übernimmt genau das — und die Angehörigen bleiben Angehörige, statt zum Pflegedienst auf Abruf zu werden.</Text>
            <Text>Dazu kommt die Lage am ansteigenden Westrand der Bergischen Höhen: Zwischen dem tiefsten und dem höchsten Punkt des Stadtgebiets liegen über 200 Höhenmeter. Was in Refrath eben ist, ist in Herkenrath oder Sand eine Steigung. Und im Kreis wird es dünner: Bergisch Gladbach ist rund viermal so dicht besiedelt wie Kürten oder Overath. Wer dort lebt, wartet auf einen ambulanten Dienst, der lange Touren fährt — eine Betreuungskraft im Haus ist davon unabhängig. Das gilt ebenso in Odenthal, Rösrath oder Burscheid.</Text>
            <Text>Wenn Sie erst einmal sortieren möchten, was Ihnen zusteht: Die Pflegestützpunkte im Rheinisch-Bergischen Kreis beraten kostenlos und unabhängig von Anbietern, auf Wunsch auch bei Ihnen zu Hause. Der Anspruch darauf ist gesetzlich verankert (§ 7a SGB XI).</Text>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-bergisch-gladbach" titel="Einzugsgebiet Bergisch Gladbach">
            <Text>Bergisch Gladbach und Rheinisch-Bergischer Kreis: Overath, Rösrath, Kürten, Odenthal und alle Gemeinden im Rheinisch-Bergischen Kreis</Text>
            <NearbyCities current="bergisch-gladbach" />
          </Abschnitt>

          <OrtWerkzeuge ort={'Bergisch Gladbach'} land={'Nordrhein-Westfalen'} altbau={42.3} miete={8.12} />


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

          <OrtStimmen

            ort={'Bergisch Gladbach'}

            herkunft="umgebung"

            stimmen={DIREKT_ERHALTEN.filter((b) => ['k-20260905-thomas', 'k-20260427-andreas'].includes(b.id))}

          />


          <Abschnitt id="haeufige-fragen-24h-pflege" titel="Häufige Fragen — 24h-Pflege in Bergisch Gladbach">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
