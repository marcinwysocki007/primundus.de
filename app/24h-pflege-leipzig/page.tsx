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
  { id: 'was-ist-24-stunden', title: "Was 24-Stunden-Betreuung in Leipzig bedeutet" },
  { id: 'kosten-und-kassenzuschuesse-in', title: "Kosten & Kassenzuschüsse in Leipzig 2026" },
  { id: 'polnische-betreuungskraefte-in-leipzig', title: "Polnische Betreuungskräfte in Leipzig" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause in Leipzig ausmacht" },
  { id: 'einzugsgebiet-leipzig', title: "Einzugsgebiet Leipzig" },
  { id: 'werkzeuge', title: "Rechnen Sie Ihren Fall für Leipzig durch" },
  { id: 'so-arbeiten-wir', title: "So arbeiten wir" },
  { id: 'haeufige-fragen-24h-pflege', title: "Häufige Fragen — 24h-Pflege in Leipzig" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Leipzig: ab 2.150 €, täglich kündbar',
  description: '24-Stunden-Pflege in Leipzig: ab 2.150 € im Monat, Eigenanteil bei Pflegegrad 3 ab ca. 923 €. Kräfte vorher ansehen, keine Gebühr, täglich kündbar.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-leipzig' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege Leipzig — Betreuungskraft zuhause | Primundus',
    description: 'Geprüfte 24h-Betreuungskraft in Leipzig. Täglich kündbar, rechtssicher, startklar.',
    url: 'https://primundus.de/24h-pflege-leipzig',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-leipzig#service',
    name: 'Primundus — 24h-Pflege Leipzig',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte in Leipzig. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-leipzig',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'City', name: 'Leipzig' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24h-Pflege Leipzig', item: 'https://primundus.de/24h-pflege-leipzig' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was kostet eine 24h-Pflegekraft in Leipzig?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Sachsen (Eigenanteil rund 2.990 €/Monat, vdek 07/2026).' },
      },
      {
        '@type': 'Question',
        name: 'Wie schnell kann eine 24h-Pflegekraft in Leipzig starten?',
        acceptedAnswer: { '@type': 'Answer', text: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
      },
      {
        '@type': 'Question',
        name: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
      },
      {
        '@type': 'Question',
        name: 'Ist 24h-Pflege über Primundus in Leipzig rechtssicher?',
        acceptedAnswer: { '@type': 'Answer', text: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
      },
      {
        '@type': 'Question',
        name: 'Leipzig ist eine junge Stadt — ist Pflege hier überhaupt ein großes Thema?',
        acceptedAnswer: { '@type': 'Answer', text: 'Der Anteil täuscht. Leipzig ist mit einem Durchschnittsalter von 42 Jahren tatsächlich der jüngste Kreis Sachsens, aber in absoluten Zahlen leben hier rund 120.000 Menschen über 65 und gut 45.000 über 80 — mehr Hochbetagte, als der Landkreis Nordsachsen insgesamt zählt. Der niedrige Prozentwert kommt daher, dass die Stadt seit 2000 um etwa ein Drittel gewachsen ist, nicht daher, dass es wenige Ältere gäbe.' },
      },
      {
        '@type': 'Question',
        name: 'Funktioniert 24-Stunden-Pflege in einer Leipziger Altbauwohnung?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ja — und in Leipzig ist das der Normalfall. Rund ein Drittel aller Wohnungen stammt aus der Zeit vor 1919, knapp 90 Prozent liegen in Mehrfamilienhäusern, und nur gut 13 Prozent der Leipziger wohnen im Eigentum. Die typische Ausgangslage ist also: Mietwohnung im Gründerzeithaus, oft im zweiten oder dritten Stock. Für die Betreuungskraft braucht es ein eigenes Zimmer; alles Weitere richtet sich nach dem Alltag. Gerade wenn die Treppe zur Hürde wird, ist jemand im Haus oft die einzige Alternative zum Umzug.' },
      },
      {
        '@type': 'Question',
        name: 'Wie ist die ambulante Versorgung in Leipzig?',
        acceptedAnswer: { '@type': 'Answer', text: 'Angespannt, und zwar zunehmend. Die Zahl der Pflegebedürftigen in Leipzig hat sich seit 2013 mehr als verdoppelt, die stationären Plätze wuchsen im selben Zeitraum nur um gut ein Zehntel — der gesamte Zuwachs ist in die eigene Wohnung gegangen. Auf einen ambulanten Dienst kamen 2013 rund 43 Pflegebedürftige, heute sind es 81. Dazu kommen die Kosten: Die Zuzahlungen für ambulante Pflege stiegen in Sachsen seit 2015 um gut die Hälfte, ein Heimplatz verteuerte sich um mehr als das Doppelte.' },
      },
      {
        '@type': 'Question',
        name: 'Welches Einzugsgebiet wird in Leipzig bedient?',
        acceptedAnswer: { '@type': 'Answer', text: 'Leipzig und Umland: Markkleeberg, Schkeuditz, Taucha, Wurzen, Grimma und alle Gemeinden im Landkreis Leipzig und Nordsachsen' },
      },
    ],
  },
]

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Leipzig?', a: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Sachsen (Eigenanteil rund 2.990 €/Monat, vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Leipzig starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
  { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
  { q: 'Ist 24h-Pflege über Primundus in Leipzig rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
  { q: 'Leipzig ist eine junge Stadt — ist Pflege hier überhaupt ein großes Thema?', a: 'Der Anteil täuscht. Leipzig ist mit einem Durchschnittsalter von 42 Jahren tatsächlich der jüngste Kreis Sachsens, aber in absoluten Zahlen leben hier rund 120.000 Menschen über 65 und gut 45.000 über 80 — mehr Hochbetagte, als der Landkreis Nordsachsen insgesamt zählt. Der niedrige Prozentwert kommt daher, dass die Stadt seit 2000 um etwa ein Drittel gewachsen ist, nicht daher, dass es wenige Ältere gäbe.' },
  { q: 'Funktioniert 24-Stunden-Pflege in einer Leipziger Altbauwohnung?', a: 'Ja — und in Leipzig ist das der Normalfall. Rund ein Drittel aller Wohnungen stammt aus der Zeit vor 1919, knapp 90 Prozent liegen in Mehrfamilienhäusern, und nur gut 13 Prozent der Leipziger wohnen im Eigentum. Die typische Ausgangslage ist also: Mietwohnung im Gründerzeithaus, oft im zweiten oder dritten Stock. Für die Betreuungskraft braucht es ein eigenes Zimmer; alles Weitere richtet sich nach dem Alltag. Gerade wenn die Treppe zur Hürde wird, ist jemand im Haus oft die einzige Alternative zum Umzug.' },
  { q: 'Wie ist die ambulante Versorgung in Leipzig?', a: 'Angespannt, und zwar zunehmend. Die Zahl der Pflegebedürftigen in Leipzig hat sich seit 2013 mehr als verdoppelt, die stationären Plätze wuchsen im selben Zeitraum nur um gut ein Zehntel — der gesamte Zuwachs ist in die eigene Wohnung gegangen. Auf einen ambulanten Dienst kamen 2013 rund 43 Pflegebedürftige, heute sind es 81. Dazu kommen die Kosten: Die Zuzahlungen für ambulante Pflege stiegen in Sachsen seit 2015 um gut die Hälfte, ein Heimplatz verteuerte sich um mehr als das Doppelte.' },
  { q: 'Welches Einzugsgebiet wird in Leipzig bedient?', a: 'Leipzig und Umland: Markkleeberg, Schkeuditz, Taucha, Wurzen, Grimma und alle Gemeinden im Landkreis Leipzig und Nordsachsen' },
  { q: 'Ist in einer Wohnung in Leipzig Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Leipzig hat im Schnitt 72,1 m², 40,0 % sind kleiner als 60 m². Das ist eng, deshalb klären wir vor der Zusage am Telefon, welches Zimmer frei wird — meist das ehemalige Kinder- oder Arbeitszimmer. In Leipzig liegen 54,0 % der Wohnungen in Ein- oder Zweifamilienhäusern, der Rest sind Geschosswohnungen — dann zählt, welches Stockwerk und ob es einen Aufzug gibt.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Sachsen zahlen Heimbewohner im ersten Jahr im Schnitt rund 2.990 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause bleiben bei Pflegegrad 3 ab ca. 923 € — nach Pflegegeld, anteiligem Entlastungsbudget und Steuerermäßigung. Das sind rund 2.067 € Unterschied im Monat, 24.804 € im Jahr.' },
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
            { label: 'Leipzig' },
          ]}
          augenbraue="24-Stunden-Pflege in Leipzig"
          titel="24-Stunden-Pflege und Betreuung in Leipzig"
          einleitung={<>Gohlis, Schleußig, Connewitz: Leipzigs schöne Gründerzeitwohnungen haben oft eines gemeinsam — viele Treppen und keinen Aufzug. Trotzdem müssen Eltern deshalb nicht ins Heim: Eine Betreuungskraft von Primundus zieht mit ein, übernimmt Einkäufe, Haushalt und Begleitung und ist bei Bedarf auch nachts da — auch in Markkleeberg und Taucha. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>}
          aktualisiert="27. August 2026"
          lesezeit="6 Min."
          blick={[
            'Preis bei Primundus: ab 2.150 €/Monat',
            'Ihr Eigenanteil bei Pflegegrad 3: ab ca. 923 €/Monat',
            'Pflegeheim in Sachsen: Eigenanteil rund 2.990 €/Monat (vdek, 07/2026)',
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich',
          ]}
          blickTitel="Leipzig auf einen Blick"
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist-24-stunden" titel="Was 24-Stunden-Betreuung in Leipzig bedeutet">
            <Text>
              Eine Betreuungskraft zieht bei Ihnen ein, führt den Haushalt, hilft bei Körperpflege und Alltag und ist bei Bedarf
              auch nachts da. Anders als beim ambulanten Dienst, der zweimal am Tag kommt und wieder geht. Und anders als im
              Heim, wo der Umzug ansteht. Das Zuhause in Leipzig bleibt, der gewohnte Tagesablauf auch.
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

          <Abschnitt id="kosten-und-kassenzuschuesse-in" titel="Kosten & Kassenzuschüsse in Leipzig 2026">
            <Tabelle
              titel="Kostenbeispiel — Pflegegrad 3 in Leipzig"
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
            <RechnerKasten src="ort-leipzig" />
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-in-leipzig" titel="Polnische Betreuungskräfte in Leipzig">
            <Text>Wer in Leipzig nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Die meisten kommen aus Polen, einige aus Rumänien oder Bulgarien — und sie sind in Leipzig und im gesamten Umland im Einsatz.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Was eine polnische Betreuungskraft kostet:</strong> ab 2.150 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen. Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro Eigenanteil — deutlich weniger als ein Heimplatz, der hier im Schnitt rund 2.990 Euro im Monat kostet.</Text>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Polnische Betreuungskräfte — das Entsendemodell erklärt</a>.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause in Leipzig ausmacht">
            <Text>Leipzig ist der jüngste Kreis Sachsens — Durchschnittsalter 42 Jahre, während das Land bei 47 liegt. Das führt leicht in die Irre. Denn hinter dem niedrigen Anteil steht eine große absolute Zahl: <strong className="text-pm-ink font-semibold">rund 120.000 Leipzigerinnen und Leipziger sind über 65, gut 45.000 davon über 80.</strong> Das sind mehr Hochbetagte, als der ganze Landkreis Nordsachsen zählt. Der Prozentwert ist niedrig, weil die Stadt seit 2000 um rund ein Drittel gewachsen ist — nicht, weil es wenige alte Menschen gäbe.</Text>
            <Text>Dazu kommt, wie in Leipzig gewohnt wird. <strong className="text-pm-ink font-semibold"> Mehr als die Hälfte aller Haushalte sind Einpersonenhaushalte</strong>, und knapp 90 Prozent der Wohnungen liegen in Mehrfamilienhäusern. Nur gut 13 Prozent der Leipziger wohnen im Eigentum, der niedrigste Wert in ganz Sachsen. Das heißt in der Praxis: sehr viele ältere Menschen leben allein in einer Mietwohnung im Geschossbau — oft in einem Gründerzeithaus, denn rund ein Drittel aller Wohnungen stammt aus der Zeit vor 1919. Schöne Altbauten, aber mit Treppenhäusern, die für einen Rollator nie gedacht waren.</Text>
            <Text>Die Pflegestatistik zeigt, wohin sich das entwickelt hat. Die Zahl der Pflegebedürftigen in Leipzig hat sich seit 2013 mehr als verdoppelt, die stationäre Kapazität ist im selben Zeitraum aber nur um gut ein Zehntel gewachsen. Der gesamte Zuwachs ist also in die eigene Wohnung gegangen. Entsprechend belastet sind die Dienste: Kamen 2013 auf einen ambulanten Pflegedienst noch rund 43 Pflegebedürftige, sind es heute 81. Und die Kosten laufen mit — die Zuzahlungen für ambulante Pflege stiegen in Sachsen seit 2015 um gut die Hälfte, ein Heimplatz verteuerte sich um mehr als das Doppelte.</Text>
            <Text>Für die Pflege ist Leipzig zudem nicht eine Stadt, sondern viele. Zwischen dem ältesten und dem jüngsten Ortsteil liegen mehr als zwanzig Jahre Durchschnittsalter: In der Grünauer Siedlung und in Heiterblick sind die Menschen im Schnitt über 54, in Volkmarsdorf und Lindenau Mitte dreißig. Wer in Grünau, Lößnig oder Großzschocher alt wird, lebt in einer Umgebung, die selbst gealtert ist — Grünau hat seit den achtziger Jahren fast die Hälfte seiner Bewohner verloren. Geografisch ist die Stadt dagegen unproblematisch: Sie ist flach, die einzigen nennenswerten Erhebungen sind aufgeschüttete Trümmer- und Deponieberge und damit Ausflugsziele, keine Alltagswege.</Text>
            <Text>Eine Betreuungskraft, die mit einzieht, löst genau die Kombination, die in Leipzig so häufig ist: allein lebend, im Obergeschoss, ohne Angehörige um die Ecke. Bevor Sie entscheiden, lassen Sie sich unabhängig beraten — die Pflegeberatung in Leipzig ist kostenlos, trägerunabhängig und auf Wunsch bei Ihnen zu Hause (§ 7a SGB XI).</Text>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-leipzig" titel="Einzugsgebiet Leipzig">
            <Text>Leipzig und Umland: Markkleeberg, Schkeuditz, Taucha, Wurzen, Grimma und alle Gemeinden im Landkreis Leipzig und Nordsachsen</Text>
            <NearbyCities current="leipzig" />
          </Abschnitt>

          <OrtWerkzeuge ort={'Leipzig'} land={'Sachsen'} />


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

          <Abschnitt id="haeufige-fragen-24h-pflege" titel="Häufige Fragen — 24h-Pflege in Leipzig">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
