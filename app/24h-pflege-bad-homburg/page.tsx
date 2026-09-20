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
  { id: 'was-ist-24-stunden', title: "Was 24-Stunden-Betreuung in Bad Homburg bedeutet" },
  { id: 'kosten-und-kassenzuschuesse-in', title: "Kosten & Kassenzuschüsse in Bad Homburg vor der Höhe 2026" },
  { id: 'polnische-betreuungskraefte-in-bad', title: "Polnische Betreuungskräfte in Bad Homburg" },
  { id: '24-stunden-pflege-im', title: "24-Stunden-Pflege im Hochtaunuskreis" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause in Bad Homburg ausmacht" },
  { id: 'einzugsgebiet-bad-homburg-vor', title: "Einzugsgebiet Bad Homburg vor der Höhe" },
  { id: 'werkzeuge', title: "Was es in Bad Homburg kostet, und was die Pflegekasse dazugibt" },
  { id: 'so-arbeiten-wir', title: "So arbeiten wir" },
  { id: 'stimmen-vor-ort', title: "Familien aus der Region über uns" },
  { id: 'haeufige-fragen-24h-pflege', title: "Häufige Fragen — 24h-Pflege in Bad Homburg vor der Höhe" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Bad Homburg & Hochtaunuskreis',
  description: '24-Stunden-Pflege in Bad Homburg & Hochtaunuskreis: ab 2.150 € im Monat, bei Pflegegrad 3 ab ca. 923 € Eigenanteil. Kräfte vorher ansehen, täglich kündbar.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-bad-homburg' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege Bad Homburg vor der Höhe — Betreuungskraft zuhause | Primundus',
    description: 'Geprüfte 24h-Betreuungskraft in Bad Homburg vor der Höhe. Täglich kündbar, rechtssicher, startklar.',
    url: 'https://primundus.de/24h-pflege-bad-homburg',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-bad-homburg#service',
    name: 'Primundus — 24h-Pflege Bad Homburg vor der Höhe',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte in Bad Homburg vor der Höhe. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-bad-homburg',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'City', name: 'Bad Homburg vor der Höhe' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24h-Pflege Bad Homburg vor der Höhe', item: 'https://primundus.de/24h-pflege-bad-homburg' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was kostet eine 24h-Pflegekraft in Bad Homburg vor der Höhe?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Hessen (Eigenanteil rund 3.230 €/Monat, vdek 07/2026).' },
      },
      {
        '@type': 'Question',
        name: 'Wie schnell kann eine 24h-Pflegekraft in Bad Homburg vor der Höhe starten?',
        acceptedAnswer: { '@type': 'Answer', text: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
      },
      {
        '@type': 'Question',
        name: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
      },
      {
        '@type': 'Question',
        name: 'Ist 24h-Pflege über Primundus in Bad Homburg vor der Höhe rechtssicher?',
        acceptedAnswer: { '@type': 'Answer', text: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
      },
      {
        '@type': 'Question',
        name: 'Wir pflegen bisher selbst — wann wird eine Betreuungskraft sinnvoll?',
        acceptedAnswer: { '@type': 'Answer', text: 'Im Hochtaunuskreis beziehen 61,7 Prozent aller Pflegebedürftigen ausschließlich Pflegegeld, werden also allein von Angehörigen versorgt; in Hessen sind es 58,6 Prozent. Gleichzeitig nutzen nur 15,2 Prozent einen ambulanten Dienst. Viele Familien hier stehen deshalb vor einem Entweder-oder. Eine Betreuungskraft, die mit einzieht, ist der Weg dazwischen: Sie übernimmt die Dauerbelastung, während Sie Angehörige bleiben. Pflegegeld und Betreuung lassen sich kombinieren.' },
      },
      {
        '@type': 'Question',
        name: 'Ist eine Bad Homburger Wohnung für Pflege zu Hause geeignet?',
        acceptedAnswer: { '@type': 'Answer', text: 'In aller Regel ja, barrierefrei ist sie aber meist nicht. Zwar sind drei Viertel der Gebäude in Bad Homburg Ein- oder Zweifamilienhäuser, doch zwei Drittel aller Wohnungen liegen in Mehrfamilienhäusern — und knapp die Hälfte des Bestands stammt aus den Jahren 1949 bis 1978, also aus einer Zeit vor jeder Barrierefreiheitsanforderung. Für die Betreuungskraft genügt ein eigenes Zimmer; entscheidend ist, dass jemand da ist und die Wege übernimmt.' },
      },
      {
        '@type': 'Question',
        name: 'Kommt eine Betreuungskraft auch in die Ortsteile und in den Hochtaunuskreis?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ja. Das ist außerhalb der Kernstadt besonders wichtig, denn der Kreis ist zweigeteilt: Bad Homburg kommt auf über 1.100 Einwohner je Quadratkilometer, das Usinger Land auf keine 300. Dort fahren ambulante Dienste lange Touren, und die Termine richten sich nach der Route. Eine Betreuungskraft im Haus ist davon unabhängig — in Ober-Erlenbach und Dornholzhausen ebenso wie in Oberursel, Friedrichsdorf oder Königstein. Anfahrtskosten berechnen wir nicht.' },
      },
      {
        '@type': 'Question',
        name: 'Welches Einzugsgebiet wird in Bad Homburg vor der Höhe bedient?',
        acceptedAnswer: { '@type': 'Answer', text: 'Bad Homburg und Hochtaunuskreis: Friedrichsdorf, Oberursel, Kronberg im Taunus, Königstein im Taunus und alle Gemeinden im Hochtaunuskreis' },
      },
    ],
  },
]

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Bad Homburg vor der Höhe?', a: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Hessen (Eigenanteil rund 3.230 €/Monat, vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Bad Homburg vor der Höhe starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
  { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
  { q: 'Ist 24h-Pflege über Primundus in Bad Homburg vor der Höhe rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
  { q: 'Wir pflegen bisher selbst — wann wird eine Betreuungskraft sinnvoll?', a: 'Im Hochtaunuskreis beziehen 61,7 Prozent aller Pflegebedürftigen ausschließlich Pflegegeld, werden also allein von Angehörigen versorgt; in Hessen sind es 58,6 Prozent. Gleichzeitig nutzen nur 15,2 Prozent einen ambulanten Dienst. Viele Familien hier stehen deshalb vor einem Entweder-oder. Eine Betreuungskraft, die mit einzieht, ist der Weg dazwischen: Sie übernimmt die Dauerbelastung, während Sie Angehörige bleiben. Pflegegeld und Betreuung lassen sich kombinieren.' },
  { q: 'Ist eine Bad Homburger Wohnung für Pflege zu Hause geeignet?', a: 'In aller Regel ja, barrierefrei ist sie aber meist nicht. Zwar sind drei Viertel der Gebäude in Bad Homburg Ein- oder Zweifamilienhäuser, doch zwei Drittel aller Wohnungen liegen in Mehrfamilienhäusern — und knapp die Hälfte des Bestands stammt aus den Jahren 1949 bis 1978, also aus einer Zeit vor jeder Barrierefreiheitsanforderung. Für die Betreuungskraft genügt ein eigenes Zimmer; entscheidend ist, dass jemand da ist und die Wege übernimmt.' },
  { q: 'Kommt eine Betreuungskraft auch in die Ortsteile und in den Hochtaunuskreis?', a: 'Ja. Das ist außerhalb der Kernstadt besonders wichtig, denn der Kreis ist zweigeteilt: Bad Homburg kommt auf über 1.100 Einwohner je Quadratkilometer, das Usinger Land auf keine 300. Dort fahren ambulante Dienste lange Touren, und die Termine richten sich nach der Route. Eine Betreuungskraft im Haus ist davon unabhängig — in Ober-Erlenbach und Dornholzhausen ebenso wie in Oberursel, Friedrichsdorf oder Königstein. Anfahrtskosten berechnen wir nicht.' },
  { q: 'Welches Einzugsgebiet wird in Bad Homburg vor der Höhe bedient?', a: 'Bad Homburg und Hochtaunuskreis: Friedrichsdorf, Oberursel, Kronberg im Taunus, Königstein im Taunus und alle Gemeinden im Hochtaunuskreis' },
  { q: 'Ist in einer Wohnung in Bad Homburg Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Bad Homburg hat im Schnitt 97,4 m², 23,7 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 74,8 % der Wohnungen in Bad Homburg liegen in Ein- oder Zweifamilienhäusern; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Hessen zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.230 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause bleiben bei Pflegegrad 3 ab ca. 923 € — nach Pflegegeld, anteiligem Entlastungsbudget und Steuerermäßigung. Das sind rund 2.307 € Unterschied im Monat, 27.684 € im Jahr.' },
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
            { label: 'Bad Homburg vor der Höhe' },
          ]}
          augenbraue="24-Stunden-Pflege in Bad Homburg vor der Höhe"
          titel="24-Stunden-Pflege und Betreuung in Bad Homburg"
          einleitung={<>Viele Bad Homburger haben ihr Berufsleben in Frankfurt verbracht — gewohnt wird aber am Kurpark, in Gonzenheim oder Kirdorf, und dort soll auch das Alter stattfinden. Wenn allein leben nicht mehr geht, zieht eine Betreuungskraft von Primundus mit ein und ist bei Bedarf auch nachts da. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>}
          aktualisiert="27. August 2026"
          lesezeit="6 Min."
          blick={[
            'Preis bei Primundus: ab 2.150 €/Monat',
            'Ihr Eigenanteil bei Pflegegrad 3: ab ca. 923 €/Monat',
            'Pflegeheim in Hessen: Eigenanteil rund 3.230 €/Monat (vdek, 07/2026)',
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich',
          ]}
          blickTitel="Bad Homburg vor der Höhe auf einen Blick"
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist-24-stunden" titel="Was 24-Stunden-Betreuung in Bad Homburg bedeutet">
            <Text>
              Eine Betreuungskraft zieht bei Ihnen ein, führt den Haushalt, hilft bei Körperpflege und Alltag und ist bei Bedarf
              auch nachts da. Anders als beim ambulanten Dienst, der zweimal am Tag kommt und wieder geht. Und anders als im
              Heim, wo der Umzug ansteht. Das Zuhause in Bad Homburg bleibt, der gewohnte Tagesablauf auch.
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

          <Abschnitt id="kosten-und-kassenzuschuesse-in" titel="Kosten & Kassenzuschüsse in Bad Homburg vor der Höhe 2026">
            <Tabelle
              titel="Kostenbeispiel — Pflegegrad 3 in Bad Homburg vor der Höhe"
              zeilen={[
                ['Kosten Primundus', 'ab 2.150 €/Monat'],
                ['− Pflegegeld PG 3', '− 599 €/Monat'],
                ['− Entlastungsbudget (anteilig)', '− ca. 295 €/Monat'],
                ['− Steuerermäßigung (20 %, bis 4.000 €/Jahr)', '− ca. 333 €/Monat'],
                [<strong key="e">Ihr Eigenanteil</strong>, <strong key="w">ab ca. 923 €/Monat</strong>],
              ]}
              betont={1}
              fuss="Eine Person, Werte aus unserem Kostenrechner, zzgl. An- und Abreise 125 € je Strecke · Pflegeheim in Hessen: Eigenanteil rund 3.230 €/Monat (vdek, 07/2026) — 24h-Pflege zuhause ist oft günstiger und erhält das Zuhause"
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
            <RechnerKasten src="ort-bad-homburg" />
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-in-bad" titel="Polnische Betreuungskräfte in Bad Homburg">
            <Text>Wer in Bad Homburg nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Die meisten kommen aus Polen, einige aus Rumänien oder Bulgarien — und sie sind in Bad Homburg und im gesamten Umland im Einsatz.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Was eine polnische Betreuungskraft kostet:</strong> ab 2.150 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen. Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro Eigenanteil — deutlich weniger als ein Heimplatz, der hier im Schnitt rund 3.230 Euro im Monat kostet.</Text>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Pflegekraft aus Polen — Kosten, Recht und Ablauf</a>.</Text>
          </Abschnitt>

          <Abschnitt id="24-stunden-pflege-im" titel="24-Stunden-Pflege im Hochtaunuskreis">
            <Text>Unsere Betreuungskräfte ziehen in Bad Homburg und im Hochtaunuskreis ein — auch in den kleineren Gemeinden, in denen sonst kaum jemand anbietet. Die Anreise dauert überall gleich lang, der Preis ist derselbe.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause in Bad Homburg ausmacht">
            <Text>In Bad Homburg ist eine Altersgruppe besonders stark vertreten: die der Hochbetagten. <strong className="text-pm-ink font-semibold"> Fast neun Prozent der Einwohner sind über 80</strong> — mehr als im Bundesschnitt und deutlich mehr als noch vor zehn Jahren. Bemerkenswert ist dabei, dass die Gruppe der 65- bis 79-Jährigen im gleichen Zeitraum kleiner geworden ist. Es sind also nicht mehr Ältere insgesamt, sondern mehr sehr alte Menschen — genau die Gruppe, bei der Alleinleben irgendwann nicht mehr trägt.</Text>
            <Text>Im Hochtaunuskreis zeigt die Pflegestatistik ein klares Muster: <strong className="text-pm-ink font-semibold"> 61,7 Prozent aller Pflegebedürftigen beziehen ausschließlich Pflegegeld</strong>, werden also von Angehörigen versorgt — in Hessen sind es 58,6 Prozent. Gleichzeitig nehmen nur 15,2 Prozent einen ambulanten Dienst in Anspruch, weniger als im Land. Die mittlere Lösung, bei der regelmäßig jemand ins Haus kommt, ist hier also schwächer ausgeprägt als anderswo. Viele Familien stehen damit vor einem Entweder-oder: alles selbst machen oder ins Heim.</Text>
            <Text>Beim Wohnen räumt ein Blick in die Zahlen mit einem Klischee auf. Bad Homburg gilt als wohlhabend, und der Kaufkraftindex bestätigt das. Trotzdem wohnen sechs von zehn Haushalten zur Miete, die Eigentümerquote liegt mit 41 Prozent unter dem hessischen Schnitt. Und: Zwar sind drei Viertel der Gebäude Ein- oder Zweifamilienhäuser, aber <strong className="text-pm-ink font-semibold"> zwei Drittel aller Wohnungen liegen in Mehrfamilienhäusern</strong>. Knapp die Hälfte des Bestands stammt aus den Jahren 1949 bis 1978 — solide gebaut, aber lange vor jedem Gedanken an Barrierefreiheit.</Text>
            <Text>Zur Lage noch ein weit verbreiteter Irrtum: Bad Homburg heißt „vor der Höhe", weil es am Fuß des Taunus liegt — die Höhen darüber gehören zwar zur Gemarkung, sind aber Wald. Gewohnt wird zwischen 137 und 250 Metern. Die Wege in der Stadt sind also meist machbar; anders sieht es in den Ortsteilen aus, die ihren dörflichen Charakter behalten haben, etwa in Ober-Erlenbach oder Dornholzhausen. Und im Kreis wird es schnell ländlich: Während Bad Homburg auf über 1.100 Einwohner je Quadratkilometer kommt, sind es rund um Usingen keine 300.</Text>
            <Text>Eine Betreuungskraft, die mit einzieht, füllt genau die Lücke zwischen „allein zurechtkommen" und „ins Heim ziehen". Sie ist nachts da, führt den Haushalt und begleitet zu Terminen. Bevor Sie sich entscheiden, lassen Sie sich unabhängig beraten: Die Pflegestützpunkte in Hessen beraten kostenlos und trägerunabhängig, auf Wunsch auch bei Ihnen zu Hause. Dieser Anspruch ist gesetzlich verankert (§ 7a SGB XI).</Text>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-bad-homburg-vor" titel="Einzugsgebiet Bad Homburg vor der Höhe">
            <Text>Bad Homburg und Hochtaunuskreis: Friedrichsdorf, Oberursel, Kronberg im Taunus, Königstein im Taunus und alle Gemeinden im Hochtaunuskreis</Text>
            <NearbyCities current="bad-homburg" />
          </Abschnitt>

          <OrtWerkzeuge ort={'Bad Homburg'} land={'Hessen'} altbau={49.6} miete={9.95} />


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

            ort={'Bad Homburg'}

            herkunft="umgebung"

            stimmen={DIREKT_ERHALTEN.filter((b) => ['k-20260605-daniel', 'k-20260327-marco'].includes(b.id))}

          />


          <Abschnitt id="haeufige-fragen-24h-pflege" titel="Häufige Fragen — 24h-Pflege in Bad Homburg vor der Höhe">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
