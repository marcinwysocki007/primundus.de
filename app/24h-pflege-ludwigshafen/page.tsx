import type { Metadata } from 'next'
import { OrtStimmen } from '@/components/orte/OrtStimmen'
import { DIREKT_ERHALTEN } from '@/lib/bewertungen-direkt'
import { Ansprechpartnerin, KontaktBand } from '@/components/ArticleCTA'
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
  { id: 'was-ist-24-stunden', title: "Was 24-Stunden-Betreuung in Ludwigshafen bedeutet" },
  { id: 'kosten-und-kassenzuschuesse-in', title: "Kosten & Kassenzuschüsse in Ludwigshafen am Rhein 2026" },
  { id: 'polnische-betreuungskraefte-in-ludwigshafen', title: "Polnische Betreuungskräfte in Ludwigshafen" },
  { id: '24-stunden-pflege-im', title: "24-Stunden-Pflege im Rhein-Pfalz-Kreis" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause in Ludwigshafen ausmacht" },
  { id: 'einzugsgebiet-ludwigshafen-am-rhein', title: "Einzugsgebiet Ludwigshafen am Rhein" },
  { id: 'werkzeuge', title: "Was es in Ludwigshafen kostet, und was die Pflegekasse dazugibt" },
  { id: 'so-arbeiten-wir', title: "So arbeiten wir" },
  { id: 'stimmen-vor-ort', title: "Familien aus der Region über uns" },
  { id: 'haeufige-fragen-24h-pflege', title: "Häufige Fragen — 24h-Pflege in Ludwigshafen am Rhein" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Ludwigshafen | 6× Testsieger',
  description: 'Betreuung zu Hause durch geprüfte Kräfte, die Sie vorab sehen – und Entlastung für Angehörige. Ihren Preis sehen Sie sofort online, mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-ludwigshafen' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege Ludwigshafen am Rhein — Betreuungskraft zuhause | Primundus',
    description: 'Geprüfte 24h-Betreuungskraft in Ludwigshafen am Rhein. Täglich kündbar, rechtssicher, startklar.',
    url: 'https://primundus.de/24h-pflege-ludwigshafen',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Ludwigshafen am Rhein?', a: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Rheinland-Pfalz (Eigenanteil rund 3.220 €/Monat, vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Ludwigshafen am Rhein starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
  { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
  { q: 'Ist 24h-Pflege über Primundus in Ludwigshafen am Rhein rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
  { q: 'Wie viele ältere Menschen leben in Ludwigshafen?', a: '16.798 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 9,7 Prozent — in Rheinland-Pfalz 10,7 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 22,0 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Rheinland-Pfalz: 24,4 Prozent). In diesen Haushalten ist nachts niemand da, der einspringen könnte — genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Ludwigshafen — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Ludwigshafen im Schnitt 3,1 Wohnungen, in Rheinland-Pfalz 1,7. 31,0 Prozent der Gebäude stehen frei, 45,6 Prozent sind Reihenhäuser. 60,8 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Ludwigshafen ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Spricht die Betreuungskraft die Sprache, die zu Hause gesprochen wird?', a: 'In Ludwigshafen ist das eine der häufigsten Fragen, und die Zahlen erklären warum: 15,1 Prozent der Einwohner über 65 haben keine deutsche Staatsangehörigkeit — in Rheinland-Pfalz sind es 5,1 Prozent. Beides sind Höchstwerte im Land. In Nord-Hemshof sind sogar 41,8 Prozent der über 75-Jährigen Ausländer. Unsere Betreuungskräfte kommen aus Polen. Das Deutschniveau jeder Kraft wird eingestuft und steht vorab im Profil, zusammen mit Erfahrung und Foto. Bei anderen Herkunftssprachen sagen wir Ihnen ehrlich, was wir leisten können und was nicht.' },
  { q: 'Welches Einzugsgebiet wird in Ludwigshafen am Rhein bedient?', a: 'Ludwigshafen und Rhein-Pfalz-Kreis: Frankenthal, Speyer, Neustadt an der Weinstraße, Landau und alle Gemeinden im Rhein-Pfalz-Kreis' },
  { q: 'Ist in einer Wohnung in Ludwigshafen Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Ludwigshafen hat im Schnitt 84,8 m², 26,7 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 71,4 % der Gebäude in Ludwigshafen sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Rheinland-Pfalz zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.220 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause bleiben bei Pflegegrad 3 ab ca. 923 € — nach Pflegegeld, anteiligem Entlastungsbudget und Steuerermäßigung. Das sind rund 2.297 € Unterschied im Monat, 27.564 € im Jahr.' },
]

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-ludwigshafen#service',
    name: 'Primundus — 24h-Pflege Ludwigshafen am Rhein',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte in Ludwigshafen am Rhein. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-ludwigshafen',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'City', name: 'Ludwigshafen am Rhein' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24h-Pflege Ludwigshafen am Rhein', item: 'https://primundus.de/24h-pflege-ludwigshafen' },
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
            { label: 'Ludwigshafen am Rhein' },
          ]}
          augenbraue="24-Stunden-Pflege in Ludwigshafen am Rhein"
          titel="24-Stunden-Pflege und Betreuung in Ludwigshafen"
          einleitung={<>Ein Arbeitsleben bei der BASF, ein Zuhause in Friesenheim, Oggersheim oder der Gartenstadt: Ludwigshafener wissen, was sie sich aufgebaut haben — und wollen es im Alter nicht verlassen. Eine Betreuungskraft von Primundus zieht mit ein und ist bei Bedarf auch nachts da. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>}
          aktualisiert="28. August 2026"
          lesezeit="6 Min."
          blick={[
            'Preis bei Primundus: ab 2.150 €/Monat',
            'Ihr Eigenanteil bei Pflegegrad 3: ab ca. 923 €/Monat',
            'Pflegeheim in Rheinland-Pfalz: Eigenanteil rund 3.220 €/Monat (vdek, 07/2026)',
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich',
          ]}
          blickTitel="Ludwigshafen am Rhein auf einen Blick"
          person={<Ansprechpartnerin karte ort="Ludwigshafen" titel="Ihre Ansprechpartnerin für Ludwigshafen" />}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist-24-stunden" titel="Was 24-Stunden-Betreuung in Ludwigshafen bedeutet">
            <Text>
              Eine Betreuungskraft zieht bei Ihnen ein, führt den Haushalt, hilft bei Körperpflege und Alltag und ist bei Bedarf
              auch nachts da. Anders als beim ambulanten Dienst, der zweimal am Tag kommt und wieder geht. Und anders als im
              Heim, wo der Umzug ansteht. Das Zuhause in Ludwigshafen bleibt, der gewohnte Tagesablauf auch.
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

          <Abschnitt id="kosten-und-kassenzuschuesse-in" titel="Kosten & Kassenzuschüsse in Ludwigshafen am Rhein 2026">
            <Tabelle
              titel="Kostenbeispiel — Pflegegrad 3 in Ludwigshafen am Rhein"
              zeilen={[
                ['Kosten Primundus', 'ab 2.150 €/Monat'],
                ['− Pflegegeld PG 3', '− 599 €/Monat'],
                ['− Entlastungsbudget (anteilig)', '− ca. 295 €/Monat'],
                ['− Steuerermäßigung (20 %, bis 4.000 €/Jahr)', '− ca. 333 €/Monat'],
                [<strong key="e">Ihr Eigenanteil</strong>, <strong key="w">ab ca. 923 €/Monat</strong>],
              ]}
              betont={1}
              fuss="Eine Person, Werte aus unserem Kostenrechner, zzgl. An- und Abreise 125 € je Strecke · Pflegeheim in Rheinland-Pfalz: Eigenanteil rund 3.220 €/Monat (vdek, 07/2026) — 24h-Pflege zuhause ist oft günstiger und erhält das Zuhause"
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
            <RechnerKasten src="ort-ludwigshafen" />
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-in-ludwigshafen" titel="Polnische Betreuungskräfte in Ludwigshafen">
            <Text>Wer in Ludwigshafen nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Sie kommen aus Polen und sind in Ludwigshafen und im gesamten Umland im Einsatz.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Was eine polnische Betreuungskraft kostet:</strong> ab 2.150 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen. Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro Eigenanteil — deutlich weniger als ein Heimplatz, der hier im Schnitt rund 3.220 Euro im Monat kostet.</Text>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Polnische Pflegekräfte — was sie kosten und wie es rechtlich läuft</a>.</Text>
          </Abschnitt>

          <Abschnitt id="24-stunden-pflege-im" titel="24-Stunden-Pflege im Rhein-Pfalz-Kreis">
            <Text>Unsere Betreuungskräfte ziehen in Ludwigshafen und im Rhein-Pfalz-Kreis ein — auch in den kleineren Gemeinden, in denen sonst kaum jemand anbietet. Die Anreise dauert überall gleich lang, der Preis ist derselbe.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause in Ludwigshafen ausmacht">
            <Text>Ludwigshafen ist die kreisfreie Stadt in Rheinland-Pfalz, in der am wenigsten stationär gepflegt wird — und am wenigsten ambulant.{' '} <strong className="text-pm-ink font-semibold">13,2 Prozent im Heim und 16,1 Prozent mit Pflegedienst sind jeweils der niedrigste Wert aller zwölf kreisfreien Städte des Landes.</strong> Was übrig bleibt, tragen die Familien: 58,7 Prozent der Pflegebedürftigen werden ausschließlich von Angehörigen versorgt. Und das ist kein Rechenartefakt — auch die Zahl der Heimplätze je 1.000 Einwohner über 70 liegt mit 69 unter dem Landeswert von 71 und deutlich unter dem Schnitt der Städte von 78.</Text>
            <Text>Der Blick auf zwanzig Jahre macht deutlich, wie es dazu kam:{' '} <strong className="text-pm-ink font-semibold">Zwischen 2001 und 2021 stieg die Zahl der Pflegebedürftigen um 238 Prozent, die Zahl der Heimplätze nur um 52 Prozent.</strong>{' '} Der stationäre Anteil brach von 30,7 auf 13,2 Prozent ein. Praktisch der gesamte Zuwachs landete bei den Angehörigen.</Text>
            <Text>Ein zweiter Befund ist für Ludwigshafen besonders wichtig.{' '} <strong className="text-pm-ink font-semibold">15,1 Prozent der Einwohner über 65 haben keine deutsche Staatsangehörigkeit — in Rheinland-Pfalz sind es 5,1 Prozent, also ein Drittel davon.</strong> Beides sind Höchstwerte im Land. Kleinräumig ist das extrem konzentriert: In Nord-Hemshof sind 41,8 Prozent der über 75-Jährigen Ausländer, in Edigheim 4,5. Sprache und Gewohnheiten sind bei einer Betreuungskraft, die im Haushalt lebt, deshalb keine Nebenfrage. Das Deutschniveau jeder Kraft wird eingestuft und steht vorab im Profil, zusammen mit Erfahrung und Foto.</Text>
            <Text>Auch beim Alter zerfällt die Stadt. Insgesamt ist Ludwigshafen jung — 18,8 Prozent über 65 gegenüber 22,8 Prozent im Land. Zwischen den Stadtteilen liegt beim Anteil der über 75-Jährigen aber der Faktor drei: In West sind es 4,0 Prozent, in der Gartenstadt 13,0. Das Durchschnittsalter reicht von 36,3 Jahren in West bis 46,5 in Edigheim.</Text>
            <Text>Geriatrisch ist die Stadt versorgt: Das St. Marien- und St. Annastiftskrankenhaus führt eine Klinik für Geriatrie mit Alterstraumatologischem Zentrum und war nach eigenen Angaben die erste geriatrische Klinik in Rheinland-Pfalz mit dem Qualitätssiegel Geriatrie; dazu kommt das Krankenhaus zum Guten Hirten in Oggersheim. Für Beratung gibt es in Ludwigshafen fünf Pflegestützpunkte, jeweils für bestimmte Stadtteile zuständig — die Beratung dort ist kostenlos und trägerunabhängig (§ 7a SGB XI).</Text>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-ludwigshafen-am-rhein" titel="Einzugsgebiet Ludwigshafen am Rhein">
            <Text>Ludwigshafen und Rhein-Pfalz-Kreis: Frankenthal, Speyer, Neustadt an der Weinstraße, Landau und alle Gemeinden im Rhein-Pfalz-Kreis</Text>
            <NearbyCities current="ludwigshafen" />
          </Abschnitt>

          <OrtWerkzeuge ort={'Ludwigshafen'} land={'Rheinland-Pfalz'} altbau={60.8} miete={7.31} />


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

            ort={'Ludwigshafen'}

            herkunft="umgebung"

            stimmen={DIREKT_ERHALTEN.filter((b) => ['k-20260802-karin', 'k-20251031-martina'].includes(b.id))}

          />


          <Abschnitt id="haeufige-fragen-24h-pflege" titel="Häufige Fragen — 24h-Pflege in Ludwigshafen am Rhein">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
