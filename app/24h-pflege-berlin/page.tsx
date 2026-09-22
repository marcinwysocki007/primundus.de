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
  { id: 'was-ist-24-stunden', title: "Was 24-Stunden-Betreuung in Berlin bedeutet" },
  { id: 'kosten-und-kassenzuschuesse-in', title: "Kosten & Kassenzuschüsse in Berlin 2026" },
  { id: 'polnische-betreuungskraefte-in-berlin', title: "Polnische Betreuungskräfte in Berlin" },
  { id: '24-stunden-pflege-in', title: "24-Stunden-Pflege in allen Berliner Bezirken" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause in Berlin ausmacht" },
  { id: 'einzugsgebiet-berlin', title: "Einzugsgebiet Berlin" },
  { id: 'werkzeuge', title: "Was es in Berlin kostet, und was die Pflegekasse dazugibt" },
  { id: 'so-arbeiten-wir', title: "So arbeiten wir" },
  { id: 'stimmen-vor-ort', title: "Familien aus Berlin über uns" },
  { id: 'haeufige-fragen-24h-pflege', title: "Häufige Fragen — 24h-Pflege in Berlin" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Berlin | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare polnische Pflegekräfte und Preis direkt online sehen. Anreise in Berlin in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-berlin' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Berlin | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare polnische Pflegekräfte und Preis direkt online sehen. Anreise in Berlin in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-berlin',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Berlin?', a: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — oft günstiger als ein Heimplatz in Berlin (Eigenanteil rund 3.100 €/Monat, vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Berlin starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller. Primundus ist mit eigenen Betreuungskräften in ganz Berlin und im Umland.' },
  { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt zu festen Zeiten für einzelne Aufgaben. Eine 24h-Betreuungskraft lebt im Haushalt: Sie hilft bei Körperpflege und Alltag, ist bei Bedarf auch nachts da und versorgt den Haushalt mit. Bei Demenz zählt vor allem, dass es über Wochen dieselbe Person ist und niemand umziehen muss.' },
  { q: 'Funktioniert 24-Stunden-Pflege auch in einer Berliner Altbauwohnung?', a: 'Ja — und in Vierteln wie Prenzlauer Berg, wo zwei Drittel der Wohnungen aus der Zeit zwischen 1871 und 1914 stammen, ist sie oft die Lösung, die das Wohnenbleiben überhaupt erlaubt. Die Betreuungskraft braucht ein eigenes Zimmer; ansonsten stellt der Altbau keine besonderen Anforderungen. Entscheidend ist, dass jemand die Wege nach draußen übernimmt, sobald das Treppenhaus zur Hürde wird.' },
  { q: 'Gilt das Angebot in allen Berliner Bezirken?', a: 'Ja, in allen zwölf — und das ist wichtiger, als es klingt. Für die Pflege ist Berlin nicht eine Stadt, sondern zwölf sehr verschiedene: Der Altbau in Prenzlauer Berg, die Großsiedlung in Marzahn und das Einfamilienhaus in Kaulsdorf stellen ganz unterschiedliche Anforderungen an den Alltag. Rund 715.000 Berlinerinnen und Berliner sind über 65, viele davon leben allein. Der Preis ist in jedem Bezirk derselbe, Anfahrtskosten berechnen wir nicht.' },
  { q: 'Ist 24h-Pflege über Primundus in Berlin rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
  { q: 'Ist in einer Wohnung in Berlin Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Berlin hat im Schnitt 73,2 m², 39,3 % sind kleiner als 60 m². Das ist eng, deshalb klären wir vor der Zusage am Telefon, welches Zimmer frei wird — meist das ehemalige Kinder- oder Arbeitszimmer. 56,1 % der Gebäude in Berlin sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Berlin zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.100 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause bleiben bei Pflegegrad 3 ab ca. 923 € — nach Pflegegeld, anteiligem Entlastungsbudget und Steuerermäßigung. Das sind rund 2.177 € Unterschied im Monat, 26.124 € im Jahr.' },
]

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-berlin#service',
    name: 'Primundus — 24h-Pflege Berlin',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte in Berlin. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-berlin',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'State', name: 'Berlin' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Regionen', item: 'https://primundus.de/regionen' },
      { '@type': 'ListItem', position: 3, name: 'Berlin', item: 'https://primundus.de/24h-pflege-berlin' },
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
            { label: 'Berlin' },
          ]}
          augenbraue="24-Stunden-Pflege in Berlin"
          titel="24-Stunden-Pflege und Betreuung in Berlin"
          einleitung={<>Die Wohnung in Charlottenburg seit 40 Jahren, das Reihenhaus in Pankow, der Garten in Spandau: Berliner geben ihr Zuhause nicht auf — und Heimplätze mit kurzer Warteliste sind in der Stadt ohnehin rar. Eine Betreuungskraft von Primundus zieht stattdessen mit ein und ist bei Bedarf auch nachts da, von Steglitz bis Weißensee. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>}
          aktualisiert="27. August 2026"
          lesezeit="6 Min."
          blick={[
            'Preis bei Primundus: ab 2.150 €/Monat',
            'Ihr Eigenanteil bei Pflegegrad 3: ab ca. 923 €/Monat',
            'Pflegeheim in Berlin: Eigenanteil rund 3.100 €/Monat (vdek, 07/2026)',
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich',
          ]}
          blickTitel="Berlin auf einen Blick"
          person={<AnsprechpartnerinGross ort="Berlin" />}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist-24-stunden" titel="Was 24-Stunden-Betreuung in Berlin bedeutet">
            <Text>
              Eine Betreuungskraft zieht bei Ihnen ein, hilft bei Körperpflege, beim Essen und im Alltag, versorgt den Haushalt mit und ist bei Bedarf
              auch nachts da. Anders als beim ambulanten Dienst, der zweimal am Tag kommt und wieder geht. Und anders als im
              Heim, wo der Umzug ansteht. Das Zuhause in Berlin bleibt, der gewohnte Tagesablauf auch.
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

          <Abschnitt id="kosten-und-kassenzuschuesse-in" titel="Kosten & Kassenzuschüsse in Berlin 2026">
            <Tabelle
              titel="Kostenbeispiel — Pflegegrad 3 in Berlin"
              zeilen={[
                ['Kosten Primundus', 'ab 2.150 €/Monat'],
                ['− Pflegegeld PG 3', '− 599 €/Monat'],
                ['− Entlastungsbudget (anteilig)', '− ca. 295 €/Monat'],
                ['− Steuerermäßigung (20 %, bis 4.000 €/Jahr)', '− ca. 333 €/Monat'],
                [<strong key="e">Ihr Eigenanteil</strong>, <strong key="w">ab ca. 923 €/Monat</strong>],
              ]}
              betont={1}
              fuss="Eine Person, Werte aus unserem Kostenrechner, zzgl. An- und Abreise 125 € je Strecke · Pflegeheim in Berlin: Eigenanteil rund 3.100 €/Monat (vdek, 07/2026) — 24h-Pflege zuhause ist oft günstiger und erhält das Zuhause"
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
            <RechnerKasten src="ort-berlin" />
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-in-berlin" titel="Polnische Betreuungskräfte in Berlin">
            <Text>Wer in Berlin nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Sie kommen aus Polen und sind in Berlin und im gesamten Umland im Einsatz.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Was eine polnische Betreuungskraft kostet:</strong> ab 2.150 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen. Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro Eigenanteil — deutlich weniger als ein Heimplatz, der hier im Schnitt rund 3.020 Euro im Monat kostet.</Text>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Polnische Betreuungskräfte — das Entsendemodell erklärt</a>.</Text>
          </Abschnitt>

          <Abschnitt id="24-stunden-pflege-in" titel="24-Stunden-Pflege in allen Berliner Bezirken">
            <Text>Unsere Betreuungskräfte ziehen in ganz Berlin ein — in <a href="/24h-pflege-charlottenburg" className="text-pm-taupe font-semibold hover:underline">Charlottenburg-Wilmersdorf</a> ebenso wie in Steglitz-Zehlendorf, Pankow, Tempelhof-Schöneberg, Reinickendorf oder Spandau. Die Anreise dauert überall gleich lang, der Preis ist derselbe.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause in Berlin ausmacht">
            <Text>Für die Pflege ist Berlin keine Stadt, sondern zwölf sehr verschiedene. Wer in Prenzlauer Berg alt wird, wohnt mit hoher Wahrscheinlichkeit im Altbau: Zwei Drittel der Wohnungen dort stammen aus der Zeit zwischen 1871 und 1914, meist fünfgeschossige Häuser mit dreißig bis vierzig Parteien. Wer in Marzahn oder der Gropiusstadt wohnt, lebt in einer Großsiedlung mit ganz anderen Wegen. Und in Kaulsdorf oder Mahlsdorf steht das Einfamilienhaus mit Garten und Treppe ins Obergeschoss.</Text>
            <Text>Was alle drei gemeinsam haben: Irgendwann entscheidet nicht mehr die Wohnung, sondern die Frage, ob jemand da ist. Berlin gilt als junge Stadt — dabei leben hier rund 715.000 Menschen, die 65 oder älter sind. Viele von ihnen wohnen allein, oft seit Jahrzehnten in derselben Wohnung, und die Kinder sind über die Stadt verteilt oder längst weggezogen.</Text>
            <Text>Ambulante Dienste gibt es in Berlin viele, und die Wege sind kurz — die Stadt liegt im Urstromtal und ist überwiegend flach. Das Problem ist ein anderes: Ein Dienst kommt zu festen Zeiten und bleibt zwanzig Minuten. Er ist nicht da, wenn nachts jemand aufsteht und sich nicht mehr zurechtfindet, und er kocht nicht mit. Eine Betreuungskraft, die im Haushalt lebt, deckt genau die Stunden ab, die dazwischenliegen — in Pankow so wie in Spandau oder Köpenick.</Text>
            <Text>Bevor Sie sich festlegen, nutzen Sie die kostenlose Beratung: Die Pflegestützpunkte in Berlin beraten neutral, in jedem Bezirk und auf Wunsch bei Ihnen zu Hause. Der Anspruch darauf ist gesetzlich geregelt (§ 7a SGB XI) und unabhängig davon, für welchen Anbieter Sie sich danach entscheiden.</Text>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-berlin" titel="Einzugsgebiet Berlin">
            <Text>Alle Berliner Bezirke: Mitte, Charlottenburg-Wilmersdorf, Steglitz-Zehlendorf, Tempelhof-Schöneberg, Kreuzberg-Friedrichshain, Pankow, Treptow-Köpenick, Marzahn-Hellersdorf, Lichtenberg, Neukölln, Reinickendorf, Spandau</Text>
            <NearbyCities current="berlin" />
          </Abschnitt>

          <OrtWerkzeuge ort={'Berlin'} land={'Berlin'} altbau={61.9} miete={7.67} />


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

            ort={'Berlin'}

            stimmen={DIREKT_ERHALTEN.filter((b) => ['k-20260210-rainer'].includes(b.id))}

          />


          <Abschnitt id="haeufige-fragen-24h-pflege" titel="Häufige Fragen — 24h-Pflege in Berlin">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand ohneBewertungen />
    </>
  )
}
