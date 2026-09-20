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
  { id: 'was-ist-24-stunden', title: "Was 24-Stunden-Betreuung in Bietigheim-Bissingen bedeutet" },
  { id: 'kosten-und-kassenzuschuesse-in', title: "Kosten & Kassenzuschüsse in Bietigheim-Bissingen 2026" },
  { id: 'polnische-betreuungskraefte-in-bietigheim', title: "Polnische Betreuungskräfte in Bietigheim-Bissingen" },
  { id: '24-stunden-pflege-im', title: "24-Stunden-Pflege im nördlichen Landkreis Ludwigsburg" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause in Bietigheim-Bissingen ausmacht" },
  { id: 'einzugsgebiet-bietigheim-bissingen', title: "Einzugsgebiet Bietigheim-Bissingen" },
  { id: 'werkzeuge', title: "Was es in Bietigheim-Bissingen kostet, und was die Pflegekasse dazugibt" },
  { id: 'so-arbeiten-wir', title: "So arbeiten wir" },
  { id: 'stimmen-vor-ort', title: "Familien aus der Region über uns" },
  { id: 'haeufige-fragen-24h-pflege', title: "Häufige Fragen — 24h-Pflege in Bietigheim-Bissingen" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Bietigheim-Bissingen',
  description: 'Körperpflege, Kochen, Einkäufe, Begleitung, nachts jemand im Haus: Eine Betreuungskraft übernimmt das, was Angehörige allein nicht mehr schaffen.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-bietigheim-bissingen' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege Bietigheim-Bissingen — Betreuungskraft zuhause | Primundus',
    description: 'Geprüfte 24h-Betreuungskraft in Bietigheim-Bissingen. Täglich kündbar, rechtssicher, startklar.',
    url: 'https://primundus.de/24h-pflege-bietigheim-bissingen',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Bietigheim-Bissingen?', a: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Baden-Württemberg (Eigenanteil rund 3.660 €/Monat, vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Bietigheim-Bissingen starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
  { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
  { q: 'Ist 24h-Pflege über Primundus in Bietigheim-Bissingen rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
  { q: 'Wie viele ältere Menschen leben in Bietigheim-Bissingen?', a: '4.876 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 11,3 Prozent — in Baden-Württemberg 10,5 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 25,2 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Baden-Württemberg: 23,6 Prozent). In diesen Haushalten ist nachts niemand da, der einspringen könnte — genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Bietigheim-Bissingen — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Bietigheim-Bissingen im Schnitt 2,4 Wohnungen, in Baden-Württemberg 2,1. 53,5 Prozent der Gebäude stehen frei, 25,9 Prozent sind Reihenhäuser. 40,4 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Bietigheim-Bissingen ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Wie ist die Heimplatz-Lage in Bietigheim-Bissingen?', a: 'Besser als im Umland. Die Kreispflegeplanung rechnet je Kommune und kommt für Bietigheim-Bissingen auf 457 vorhandene Plätze bei einem Bedarf von 461 — praktisch ausgeglichen, während im gesamten Landkreis Ludwigsburg 920 Plätze fehlen. Zum Vergleich: Freiberg am Neckar fehlen 125, Gerlingen 99, Ditzingen 96. Knapp ist dagegen die Kurzzeitpflege: Im ganzen Landkreis gibt es nur 53 solitäre Plätze bei einem Bedarf von 162 — also genau das Angebot, das Angehörige brauchen, wenn sie selbst ausfallen. In der Stadt gibt es fünf Pflegeheime, vier Tagespflegen und drei ambulante Dienste.' },
  { q: 'Welches Einzugsgebiet wird in Bietigheim-Bissingen bedient?', a: 'Bietigheim-Bissingen und nördlicher Landkreis Ludwigsburg: Tamm, Sachsenheim, Besigheim, Bönnigheim und alle Gemeinden im nördlichen Landkreis Ludwigsburg' },
  { q: 'Ist in einer Wohnung in Bietigheim-Bissingen Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Bietigheim-Bissingen hat im Schnitt 94,9 m², 17,7 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 77,6 % der Gebäude in Bietigheim-Bissingen sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Baden-Württemberg zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.660 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause bleiben bei Pflegegrad 3 ab ca. 923 € — nach Pflegegeld, anteiligem Entlastungsbudget und Steuerermäßigung. Das sind rund 2.737 € Unterschied im Monat, 32.844 € im Jahr.' },
]

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-bietigheim-bissingen#service',
    name: 'Primundus — 24h-Pflege Bietigheim-Bissingen',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte in Bietigheim-Bissingen. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-bietigheim-bissingen',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'City', name: 'Bietigheim-Bissingen' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24h-Pflege Bietigheim-Bissingen', item: 'https://primundus.de/24h-pflege-bietigheim-bissingen' },
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
            { label: 'Bietigheim-Bissingen' },
          ]}
          augenbraue="24-Stunden-Pflege in Bietigheim-Bissingen"
          titel="24-Stunden-Pflege und Betreuung in Bietigheim-Bissingen"
          einleitung={<>Fachwerk-Altstadt, Buch oder Untermberg an Enz und Metter: Bietigheimer bleiben ihrem Zuhause treu. Eine Betreuungskraft von Primundus zieht mit ein, wenn Mutter oder Vater Hilfe brauchen, und ist bei Bedarf auch nachts da. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>}
          aktualisiert="28. August 2026"
          lesezeit="6 Min."
          blick={[
            'Preis bei Primundus: ab 2.150 €/Monat',
            'Ihr Eigenanteil bei Pflegegrad 3: ab ca. 923 €/Monat',
            'Pflegeheim in Baden-Württemberg: Eigenanteil rund 3.660 €/Monat (vdek, 07/2026)',
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich',
          ]}
          blickTitel="Bietigheim-Bissingen auf einen Blick"
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist-24-stunden" titel="Was 24-Stunden-Betreuung in Bietigheim-Bissingen bedeutet">
            <Text>
              Eine Betreuungskraft zieht bei Ihnen ein, führt den Haushalt, hilft bei Körperpflege und Alltag und ist bei Bedarf
              auch nachts da. Anders als beim ambulanten Dienst, der zweimal am Tag kommt und wieder geht. Und anders als im
              Heim, wo der Umzug ansteht. Das Zuhause in Bietigheim-Bissingen bleibt, der gewohnte Tagesablauf auch.
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

          <Abschnitt id="kosten-und-kassenzuschuesse-in" titel="Kosten & Kassenzuschüsse in Bietigheim-Bissingen 2026">
            <Tabelle
              titel="Kostenbeispiel — Pflegegrad 3 in Bietigheim-Bissingen"
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
            <RechnerKasten src="ort-bietigheim-bissingen" />
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-in-bietigheim" titel="Polnische Betreuungskräfte in Bietigheim-Bissingen">
            <Text>Wer in Bietigheim-Bissingen nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Sie kommen aus Polen und sind in Bietigheim-Bissingen und im gesamten Umland im Einsatz.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Was eine polnische Betreuungskraft kostet:</strong> ab 2.150 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen. Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro Eigenanteil — deutlich weniger als ein Heimplatz, der hier im Schnitt rund 3.660 Euro im Monat kostet.</Text>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Pflegekraft aus Polen — Kosten, Recht und Ablauf</a>.</Text>
          </Abschnitt>

          <Abschnitt id="24-stunden-pflege-im" titel="24-Stunden-Pflege im nördlichen Landkreis Ludwigsburg">
            <Text>Unsere Betreuungskräfte ziehen in Bietigheim-Bissingen und im nördlichen Landkreis Ludwigsburg ein — auch in den kleineren Gemeinden, in denen sonst kaum jemand anbietet. Die Anreise dauert überall gleich lang, der Preis ist derselbe.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause in Bietigheim-Bissingen ausmacht">
            <Text>Der Landkreis Ludwigsburg zeigt eine Entwicklung, die man einmal in Zahlen gesehen haben sollte:{' '} <strong className="text-pm-ink font-semibold">Zwischen 2017 und 2023 stieg die Zahl der Pflegebedürftigen um fast 60 Prozent — von 17.575 auf 28.077. Die Zahl der Menschen im Pflegeheim blieb dabei praktisch unverändert bei rund 4.000.</strong> Der Anteil der stationär Versorgten fiel dadurch von 22,8 auf 14,3 Prozent. Es sind nicht weniger Menschen ins Heim gezogen — es sind nur sehr viel mehr pflegebedürftig geworden, und die alle bleiben zu Hause.</Text>
            <Text>Bietigheim-Bissingen steht dabei besser da als das Umland. Die Kreispflegeplanung rechnet je Kommune, und für die Stadt kommt sie auf 457 vorhandene Plätze bei einem Bedarf von 461 — praktisch ausgeglichen, während{' '} <strong className="text-pm-ink font-semibold">im gesamten Landkreis 920 Plätze fehlen.</strong> In Freiberg am Neckar sind es minus 125, in Gerlingen minus 99, in Ditzingen minus 96. Wer hier wohnt, hat also vergleichsweise gute Karten.</Text>
            <Text>Eine Lücke gibt es trotzdem, und sie trifft genau die Familien, die zu Hause pflegen:{' '} <strong className="text-pm-ink font-semibold">Im ganzen Landkreis gibt es nur 53 solitäre Kurzzeitpflegeplätze</strong>, dem Bedarf von 162 steht also ein Defizit von 109 gegenüber. Kurzzeitpflege ist das, was Angehörige brauchen, wenn sie selbst krank werden oder in Urlaub fahren. Der Landkreis vermittelt 19 dieser Plätze inzwischen selbst. In der Stadt selbst gibt es fünf Pflegeheime, vier Tagespflegen mit 56 Plätzen und drei ambulante Dienste.</Text>
            <Text>Bemerkenswert ist, wohin der Landkreis sein Geld lenkt. Statt allein neue Heimplätze zu fördern, stellt er{' '} <strong className="text-pm-ink font-semibold">jährlich 150.000 Euro für dezentrale Quartiersmanager bereit — ausdrücklich, um die häusliche Pflege zu stärken und Angehörige zu entlasten.</strong> Das ist eine Antwort auf genau die Entwicklung oben: Wenn der Zuwachs ohnehin zu Hause bleibt, muss die Unterstützung dorthin. In Bietigheim-Bissingen gibt es außerdem 193 Wohnungen im Betreuten Wohnen — eine Zwischenstufe, die oft übersehen wird, wenn die Entscheidung zwischen „allein zu Hause" und „Heim" aufgemacht wird. Innerhalb des Kreises schwankt der Anteil der über 65-Jährigen übrigens zwischen 16,8 und 24,6 Prozent; die Ausgangslage ist von Gemeinde zu Gemeinde sehr verschieden.</Text>
            <Text>Zur Altersmedizin ein Hinweis, weil ältere Quellen in die Irre führen:{' '} <strong className="text-pm-ink font-semibold">Die Geriatrie zog im April 2020 von Marbach am Neckar nach Bietigheim.</strong> Sie ist heute Teil der Klinik für Innere Medizin am RKH Krankenhaus in der Riedstraße. Verwirrend ist außerdem der Name des Zentrums — es heißt „Geriatrisches Zentrum Ludwigsburg-Bietigheim" und wird auf den Seiten des Ludwigsburger Klinikums geführt, die Akutstation liegt aber in Bietigheim-Bissingen. Lassen Sie sich vor einer Entscheidung unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos und trägerunabhängig.</Text>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-bietigheim-bissingen" titel="Einzugsgebiet Bietigheim-Bissingen">
            <Text>Bietigheim-Bissingen und nördlicher Landkreis Ludwigsburg: Tamm, Sachsenheim, Besigheim, Bönnigheim und alle Gemeinden im nördlichen Landkreis Ludwigsburg</Text>
            <NearbyCities current="bietigheim-bissingen" />
          </Abschnitt>

          <OrtWerkzeuge ort={'Bietigheim-Bissingen'} land={'Baden-Württemberg'} altbau={40.4} miete={8.95} />


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

            ort={'Bietigheim-Bissingen'}

            herkunft="umgebung"

            stimmen={DIREKT_ERHALTEN.filter((b) => ['k-20260829-sabine', 'k-20260318-thomas'].includes(b.id))}

          />


          <Abschnitt id="haeufige-fragen-24h-pflege" titel="Häufige Fragen — 24h-Pflege in Bietigheim-Bissingen">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
