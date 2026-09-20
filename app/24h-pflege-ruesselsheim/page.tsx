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
  { id: 'was-ist-24-stunden', title: "Was 24-Stunden-Betreuung in Rüsselsheim bedeutet" },
  { id: 'kosten-und-kassenzuschuesse-in', title: "Kosten & Kassenzuschüsse in Rüsselsheim am Main 2026" },
  { id: 'polnische-betreuungskraefte-in-ruesselsheim', title: "Polnische Betreuungskräfte in Rüsselsheim" },
  { id: '24-stunden-pflege-im', title: "24-Stunden-Pflege im Kreis Groß-Gerau" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause in Rüsselsheim ausmacht" },
  { id: 'einzugsgebiet-ruesselsheim-am-main', title: "Einzugsgebiet Rüsselsheim am Main" },
  { id: 'werkzeuge', title: "Was es in Rüsselsheim kostet, und was die Pflegekasse dazugibt" },
  { id: 'so-arbeiten-wir', title: "So arbeiten wir" },
  { id: 'stimmen-vor-ort', title: "Familien aus der Region über uns" },
  { id: 'haeufige-fragen-24h-pflege', title: "Häufige Fragen — 24h-Pflege in Rüsselsheim am Main" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Rüsselsheim | 6× Testsieger',
  description: 'Betreuung zu Hause durch geprüfte Kräfte, die Sie vorab sehen – und Entlastung für Angehörige. Ihren Preis sehen Sie sofort online, mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-ruesselsheim' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege Rüsselsheim am Main — Betreuungskraft zuhause | Primundus',
    description: 'Geprüfte 24h-Betreuungskraft in Rüsselsheim am Main. Täglich kündbar, rechtssicher, startklar.',
    url: 'https://primundus.de/24h-pflege-ruesselsheim',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Rüsselsheim am Main?', a: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Hessen (Eigenanteil rund 3.230 €/Monat, vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Rüsselsheim am Main starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
  { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
  { q: 'Ist 24h-Pflege über Primundus in Rüsselsheim am Main rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
  { q: 'Wie viele ältere Menschen leben in Rüsselsheim?', a: '6.362 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 9,9 Prozent — in Hessen 10,5 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 22,1 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Hessen: 23,1 Prozent). In diesen Haushalten ist nachts niemand da, der einspringen könnte — genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Rüsselsheim — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Rüsselsheim im Schnitt 2,8 Wohnungen, in Hessen 2,2. 65,7 Prozent der Gebäude stehen frei, 16,9 Prozent sind Reihenhäuser. 54,2 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Rüsselsheim ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Wie schwer ist es, in Rüsselsheim einen Heimplatz zu bekommen?', a: 'Schwerer als fast überall sonst in Hessen. Der Kreis Groß-Gerau hat 36 vollstationäre Heimplätze je 1.000 Einwohner über 65 — in Hessen sind es 47, also fast ein Viertel mehr. Nur zwei Kreise im Regierungsbezirk Darmstadt liegen darunter. Dazu passt, dass hier 63,9 Prozent aller Pflegebedürftigen ausschließlich von Angehörigen versorgt werden (Hessen: 58,6 Prozent) und ambulante Dienste mit 12,9 Prozent deutlich seltener zum Einsatz kommen als landesweit (17,6 Prozent). Für viele Familien ist die Betreuung zu Hause deshalb nicht die zweitbeste Lösung, sondern die einzige, die sich planen lässt.' },
  { q: 'Welches Einzugsgebiet wird in Rüsselsheim am Main bedient?', a: 'Rüsselsheim und Groß-Gerau: Groß-Gerau, Mörfelden-Walldorf, Gernsheim und alle Gemeinden im Kreis Groß-Gerau' },
  { q: 'Ist in einer Wohnung in Rüsselsheim Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Rüsselsheim hat im Schnitt 84,6 m², 25,5 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 73,4 % der Gebäude in Rüsselsheim sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Hessen zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.230 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause bleiben bei Pflegegrad 3 ab ca. 923 € — nach Pflegegeld, anteiligem Entlastungsbudget und Steuerermäßigung. Das sind rund 2.307 € Unterschied im Monat, 27.684 € im Jahr.' },
]

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-ruesselsheim#service',
    name: 'Primundus — 24h-Pflege Rüsselsheim am Main',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte in Rüsselsheim am Main. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-ruesselsheim',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'City', name: 'Rüsselsheim am Main' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24h-Pflege Rüsselsheim am Main', item: 'https://primundus.de/24h-pflege-ruesselsheim' },
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
            { label: 'Rüsselsheim am Main' },
          ]}
          augenbraue="24-Stunden-Pflege in Rüsselsheim am Main"
          titel="24-Stunden-Pflege und Betreuung in Rüsselsheim"
          einleitung={<>Ein Arbeitsleben bei Opel, ein Zuhause in Königstädten oder Bauschheim: Rüsselsheimer wissen, was sie sich erarbeitet haben — und bleiben. Eine Betreuungskraft von Primundus zieht mit ein und ist bei Bedarf auch nachts da. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>}
          aktualisiert="28. August 2026"
          lesezeit="6 Min."
          blick={[
            'Preis bei Primundus: ab 2.150 €/Monat',
            'Ihr Eigenanteil bei Pflegegrad 3: ab ca. 923 €/Monat',
            'Pflegeheim in Hessen: Eigenanteil rund 3.230 €/Monat (vdek, 07/2026)',
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich',
          ]}
          blickTitel="Rüsselsheim am Main auf einen Blick"
          person={<Ansprechpartnerin karte ort="Rüsselsheim" titel="Ihre Ansprechpartnerin für Rüsselsheim" />}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist-24-stunden" titel="Was 24-Stunden-Betreuung in Rüsselsheim bedeutet">
            <Text>
              Eine Betreuungskraft zieht bei Ihnen ein, führt den Haushalt, hilft bei Körperpflege und Alltag und ist bei Bedarf
              auch nachts da. Anders als beim ambulanten Dienst, der zweimal am Tag kommt und wieder geht. Und anders als im
              Heim, wo der Umzug ansteht. Das Zuhause in Rüsselsheim bleibt, der gewohnte Tagesablauf auch.
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

          <Abschnitt id="kosten-und-kassenzuschuesse-in" titel="Kosten & Kassenzuschüsse in Rüsselsheim am Main 2026">
            <Tabelle
              titel="Kostenbeispiel — Pflegegrad 3 in Rüsselsheim am Main"
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
            <RechnerKasten src="ort-ruesselsheim" />
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-in-ruesselsheim" titel="Polnische Betreuungskräfte in Rüsselsheim">
            <Text>Wer in Rüsselsheim nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Sie kommen aus Polen und sind in Rüsselsheim und im gesamten Umland im Einsatz.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Was eine polnische Betreuungskraft kostet:</strong> ab 2.150 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen. Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro Eigenanteil — deutlich weniger als ein Heimplatz, der hier im Schnitt rund 3.230 Euro im Monat kostet.</Text>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Polnische Pflegekräfte — Kosten, Recht und Ablauf</a>.</Text>
          </Abschnitt>

          <Abschnitt id="24-stunden-pflege-im" titel="24-Stunden-Pflege im Kreis Groß-Gerau">
            <Text>Unsere Betreuungskräfte ziehen in Rüsselsheim und im Kreis Groß-Gerau ein — auch in den kleineren Gemeinden, in denen sonst kaum jemand anbietet. Die Anreise dauert überall gleich lang, der Preis ist derselbe.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause in Rüsselsheim ausmacht">
            <Text>Im Kreis Groß-Gerau ruht die Pflege stärker auf den Familien als in jedem anderen hessischen Kreis, den wir uns angesehen haben.{' '} <strong className="text-pm-ink font-semibold">63,9 Prozent der 16.707 Pflegebedürftigen beziehen ausschließlich Pflegegeld</strong>, werden also allein von Angehörigen versorgt — in Hessen sind es 58,6 Prozent. Ambulante Dienste kommen dagegen selten zum Einsatz: 12,9 Prozent gegenüber 17,6 im Land.</Text>
            <Text>Das ist keine freie Entscheidung, sondern hat auch mit dem Angebot zu tun. Der Kreis hat{' '} <strong className="text-pm-ink font-semibold">36 Heimplätze je 1.000 Einwohner über 65, in Hessen sind es 47</strong> — fast ein Viertel weniger. Nur zwei Kreise im Regierungsbezirk Darmstadt liegen darunter. Anteil und Platzdichte zeigen hier in dieselbe Richtung, aber die Dichte ist der härtere Engpass. Wer in Rüsselsheim einen Heimplatz sucht, sucht in einem der knappsten Märkte Hessens.</Text>
            <Text>Rüsselsheim selbst ist dabei jung: 12.865 Einwohner sind über 65, das sind 18,4 Prozent gegenüber 21,3 Prozent in Hessen; das Durchschnittsalter liegt bei 42,1 Jahren. Aber der Durchschnitt verdeckt hier besonders viel.{' '} <strong className="text-pm-ink font-semibold">Zwischen den Stadtbezirken liegt beim Anteil der über 60-Jährigen der Faktor drei</strong> — in Alt-Bauschheim sind es 35,8 Prozent, im Wohngebiet Blauer See II 11,4. Das Muster ist deutlich: Die eingemeindeten Dörfer Bauschheim, Königstädten und Haßloch sind alt, die Großsiedlungen der Kernstadt und die Neubaugebiete sind jung.</Text>
            <Text>Ein zweiter Punkt gehört dazu: 32,5 Prozent der Rüsselsheimer haben keine deutsche Staatsangehörigkeit — in einem Kreis, dessen Pflege zu fast zwei Dritteln über Angehörige läuft. Sprache und Gewohnheiten sind bei einer Betreuungskraft, die im Haushalt lebt, deshalb kein Nebenthema. Das Deutschniveau jeder Kraft wird eingestuft und steht vorab im Profil, zusammen mit Erfahrung und Foto.</Text>
            <Text>Topografisch ist Rüsselsheim ohne Bedeutung für den Pflegealltag — zwischen dem höchsten und dem tiefsten Punkt des Stadtgebiets liegen 22 Meter. Geriatrisch ist die Stadt versorgt: Das GPR Klinikum führt eine eigenständige Geriatrische Klinik mit 40 Betten. Ein Hinweis, weil Verzeichnisse dem Haus hinterherhinken: Es hieß früher Stadtkrankenhaus Rüsselsheim — dieselbe Einrichtung, nicht ein zweites Haus. Lassen Sie sich vor einer Entscheidung unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos und trägerunabhängig.</Text>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-ruesselsheim-am-main" titel="Einzugsgebiet Rüsselsheim am Main">
            <Text>Rüsselsheim und Groß-Gerau: Groß-Gerau, Mörfelden-Walldorf, Gernsheim und alle Gemeinden im Kreis Groß-Gerau</Text>
            <NearbyCities current="ruesselsheim" />
          </Abschnitt>

          <OrtWerkzeuge ort={'Rüsselsheim'} land={'Hessen'} altbau={54.2} miete={8.12} />


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

            ort={'Rüsselsheim'}

            herkunft="umgebung"

            stimmen={DIREKT_ERHALTEN.filter((b) => ['k-20260605-daniel', 'k-20260327-marco'].includes(b.id))}

          />


          <Abschnitt id="haeufige-fragen-24h-pflege" titel="Häufige Fragen — 24h-Pflege in Rüsselsheim am Main">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
