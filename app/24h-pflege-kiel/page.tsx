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
  { id: 'was-ist-24-stunden', title: "Was 24-Stunden-Betreuung in Kiel bedeutet" },
  { id: 'kosten-und-kassenzuschuesse-in', title: "Kosten & Kassenzuschüsse in Kiel 2026" },
  { id: 'polnische-betreuungskraefte-in-kiel', title: "Polnische Betreuungskräfte in Kiel" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause in Kiel ausmacht" },
  { id: 'einzugsgebiet-kiel', title: "Einzugsgebiet Kiel" },
  { id: 'werkzeuge', title: "Was es in Kiel kostet, und was die Pflegekasse dazugibt" },
  { id: 'so-arbeiten-wir', title: "So arbeiten wir" },
  { id: 'stimmen-vor-ort', title: "Familien aus Kiel über uns" },
  { id: 'haeufige-fragen-24h-pflege', title: "Häufige Fragen — 24h-Pflege in Kiel" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Kiel | 6× Testsieger | Primundus',
  description: 'Liebevolle Betreuung in Kiel und Entlastung für Angehörige. Geprüfte, verfügbare Betreuungskräfte & Preis sofort sehen – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-kiel' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Kiel | 6× Testsieger | Primundus',
    description: 'Liebevolle Betreuung in Kiel und Entlastung für Angehörige. Geprüfte, verfügbare Betreuungskräfte & Preis sofort sehen – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-kiel',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Kiel?', a: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Schleswig-Holstein (Eigenanteil rund 3.040 €/Monat, vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Kiel starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
  { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt zu festen Zeiten für einzelne Aufgaben. Eine 24h-Betreuungskraft lebt im Haushalt: Sie hilft bei Körperpflege und Alltag, ist bei Bedarf auch nachts da und versorgt den Haushalt mit. Bei Demenz zählt vor allem, dass es über Wochen dieselbe Person ist und niemand umziehen muss.' },
  { q: 'Ist 24h-Pflege über Primundus in Kiel rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
  { q: 'Wie viele ältere Menschen leben in Kiel?', a: '24.749 Einwohnerinnen und Einwohner sind 75 Jahre oder älter, das sind 9,9 Prozent — in Schleswig-Holstein 12,2 Prozent. Wichtiger für die Frage nach Betreuung ist aber, wer mit wem zusammenlebt: In 21,0 Prozent der Haushalte leben ausschließlich Menschen ab 65 (Schleswig-Holstein: 26,6 Prozent). In diesen Haushalten lebt niemand unter 65, der einspringen könnte. Hilfe kommt entweder von außen — oder vom Partner, der selbst über 65 ist. Genau dafür ist eine Betreuungskraft gedacht, die mit einzieht.' },
  { q: 'Wie wohnt man in Kiel — Haus oder Geschosswohnung?', a: 'Auf ein Gebäude kommen in Kiel im Schnitt 3,6 Wohnungen, in Schleswig-Holstein 1,8. 32,5 Prozent der Gebäude stehen frei, 46,0 Prozent stehen in geschlossener Reihe. 70,6 Prozent aller Wohnungen stammen aus der Zeit vor 1970. Für die Pflege zu Hause heißt das vor allem eins: Treppen sind in Kiel ein Thema, und wer sie nicht mehr schafft, braucht jemanden im Haus statt jemanden, der dreimal am Tag kommt.' },
  { q: 'Warum gibt es in Kiel so viele ambulante Pflegedienste?', a: 'Weil Heimplätze knapp sind. Kiel hat 54 ambulante Dienste bei nur 34 Pflegeheimen, und auf 1.000 Einwohner kommen 8,3 vollstationäre Plätze — im Land sind es 12,8, die dünnste Decke aller vier kreisfreien Städte Schleswig-Holsteins. Entsprechend werden hier 28,6 Prozent der Pflegebedürftigen ambulant betreut (Land: 21,3 Prozent). Kiel ist zudem der einzige Kreis in Schleswig-Holstein, in dem die ambulanten Dienste mehr Personal beschäftigen als die Heime. Zwischen 2021 und 2023 stieg die Zahl der Pflegebedürftigen um 11,9 Prozent, während 86 Heimplätze wegfielen.' },
  { q: 'Welches Einzugsgebiet wird in Kiel bedient?', a: 'Kiel und Umland: Neumünster, Rendsburg, Plön, Preetz und alle Gemeinden im Kreis Rendsburg-Eckernförde und Plön' },
  { q: 'Ist in einer Wohnung in Kiel Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Kiel hat im Schnitt 73,0 m², 42,1 % sind kleiner als 60 m². Das ist eng, deshalb klären wir vor der Zusage am Telefon, welches Zimmer frei wird — meist das ehemalige Kinder- oder Arbeitszimmer. 67,0 % der Gebäude in Kiel sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Schleswig-Holstein zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.040 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause bleiben bei Pflegegrad 3 ab ca. 923 € — nach Pflegegeld, anteiligem Entlastungsbudget und Steuerermäßigung. Das sind rund 2.117 € Unterschied im Monat, 25.404 € im Jahr.' },
]

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-kiel#service',
    name: 'Primundus — 24h-Pflege Kiel',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte in Kiel. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-kiel',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'City', name: 'Kiel' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Regionen', item: 'https://primundus.de/regionen' },
      { '@type': 'ListItem', position: 3, name: 'Kiel', item: 'https://primundus.de/24h-pflege-kiel' },
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
            { label: 'Kiel' },
          ]}
          augenbraue="24-Stunden-Pflege in Kiel"
          titel="24-Stunden-Pflege und Betreuung in Kiel"
          einleitung={<>Ob in Wik mit Blick auf die Förde, in Elmschenhagen oder drüben in Kronshagen: Kieler bleiben gern, wo das Wasser nah ist. Auch mit Pflegebedarf — eine Betreuungskraft von Primundus zieht mit ein, übernimmt Haushalt, Begleitung und die Nacht, und das vertraute Zuhause bleibt erhalten. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>}
          aktualisiert="28. August 2026"
          lesezeit="6 Min."
          blick={[
            'Preis bei Primundus: ab 2.150 €/Monat',
            'Ihr Eigenanteil bei Pflegegrad 3: ab ca. 923 €/Monat',
            'Pflegeheim in Schleswig-Holstein: Eigenanteil rund 3.040 €/Monat (vdek, 07/2026)',
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich',
          ]}
          blickTitel="Kiel auf einen Blick"
          person={<AnsprechpartnerinGross ort="Kiel" />}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist-24-stunden" titel="Was 24-Stunden-Betreuung in Kiel bedeutet">
            <Text>
              Eine Betreuungskraft zieht bei Ihnen ein, hilft bei Körperpflege, beim Essen und im Alltag, versorgt den Haushalt mit und ist bei Bedarf
              auch nachts da. Anders als beim ambulanten Dienst, der zweimal am Tag kommt und wieder geht. Und anders als im
              Heim, wo der Umzug ansteht. Das Zuhause in Kiel bleibt, der gewohnte Tagesablauf auch.
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

          <Abschnitt id="kosten-und-kassenzuschuesse-in" titel="Kosten & Kassenzuschüsse in Kiel 2026">
            <Tabelle
              titel="Kostenbeispiel — Pflegegrad 3 in Kiel"
              zeilen={[
                ['Kosten Primundus', 'ab 2.150 €/Monat'],
                ['− Pflegegeld PG 3', '− 599 €/Monat'],
                ['− Entlastungsbudget (anteilig)', '− ca. 295 €/Monat'],
                ['− Steuerermäßigung (20 %, bis 4.000 €/Jahr)', '− ca. 333 €/Monat'],
                [<strong key="e">Ihr Eigenanteil</strong>, <strong key="w">ab ca. 923 €/Monat</strong>],
              ]}
              betont={1}
              fuss="Eine Person, Werte aus unserem Kostenrechner, zzgl. An- und Abreise 125 € je Strecke · Pflegeheim in Schleswig-Holstein: Eigenanteil rund 3.040 €/Monat (vdek, 07/2026) — 24h-Pflege zuhause ist oft günstiger und erhält das Zuhause"
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
            <RechnerKasten src="ort-kiel" />
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-in-kiel" titel="Polnische Betreuungskräfte in Kiel">
            <Text>Wer in Kiel nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Sie kommen aus Polen und sind in Kiel und im gesamten Umland im Einsatz.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Was eine polnische Betreuungskraft kostet:</strong> ab 2.150 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen. Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro Eigenanteil — deutlich weniger als ein Heimplatz, der hier im Schnitt rund 3.040 Euro im Monat kostet.</Text>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Polnische Pflegekräfte — was sie kosten und wie es rechtlich läuft</a>.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause in Kiel ausmacht">
            <Text>Kiel geht einen anderen Weg als der Rest von Schleswig-Holstein. Während anderswo die Last überwiegend bei den Familien liegt, setzt diese Stadt auf ambulante Dienste:{' '} <strong className="text-pm-ink font-semibold">28,6 Prozent der Pflegebedürftigen werden von einem Pflegedienst betreut, im Land sind es 21,3 Prozent.</strong> Der Anteil derer, die allein von Angehörigen versorgt werden, liegt mit 43,4 Prozent dagegen unter dem Landeswert. Kiel hat 54 ambulante Dienste bei nur 34 Pflegeheimen — und ist der einzige Kreis in Schleswig-Holstein, in dem die ambulanten Dienste mehr Personal beschäftigen als die Heime.</Text>
            <Text>Das hat einen handfesten Hintergrund: Heimplätze sind hier knapp. Auf 1.000 Einwohner kommen in Kiel 8,3 vollstationäre Plätze, im Land 12,8 — die dünnste Decke aller vier kreisfreien Städte Schleswig-Holsteins. Und sie wird dünner.{' '} <strong className="text-pm-ink font-semibold">Zwischen 2021 und 2023 stieg die Zahl der Pflegebedürftigen um 11,9 Prozent, die Zahl der Heimplätze sank um 86.</strong> Der Zuwachs von rund 1.360 Menschen verteilte sich fast vollständig auf Pflegegeld und ambulante Dienste.</Text>
            <Text>Innerhalb der Stadt ist der Unterschied dramatisch.{' '} <strong className="text-pm-ink font-semibold">In Schilksee sind 44,4 Prozent der Einwohner über 65 und 18,7 Prozent über 80 — in Ravensberg 11,7 beziehungsweise 3,2 Prozent.</strong> Schilksee hat mehr über 64-Jährige als Menschen im Erwerbsalter und ein Durchschnittsalter von 55,8 Jahren; in Ravensberg sind es 37,2. Zwischen diesen beiden Kieler Stadtteilen liegen 18,6 Lebensjahre.</Text>
            <Text>Die Förde teilt die Stadt tatsächlich, und die Fähren gehören zum Nahverkehr — die Schwentinelinie fährt ganzjährig im Halbstundentakt zwischen West- und Ostufer. Für einen ambulanten Dienst, der von Westufer nach Wellingdorf oder Dietrichsdorf muss, bedeutet das entweder Fähre oder den Weg um den Fördekopf. Für eine Betreuungskraft, die im Haushalt lebt, spielt das keine Rolle. Steillagen sind in Kiel dagegen kein Thema — der höchste Punkt des Stadtgebiets liegt bei 74 Metern.</Text>
            <Text>Geriatrisch ist Kiel gut aufgestellt: Das Städtische Krankenhaus führt eine eigene Klinik für Geriatrie mit 2.135 stationären Fällen und eine Tagesklinik mit über 20 Plätzen, dazu ein Zentrum für Alterstraumatologie. Ein Hinweis, weil Portale es falsch einsortieren: Das ist eine{' '} <strong className="text-pm-ink font-semibold">Akutklinik, keine Reha-Einrichtung</strong>{' '} — eine eigenständige geriatrische Rehaklinik gibt es in Kiel nach unserer Recherche nicht. Lassen Sie sich vorher unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos und neutral.</Text>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-kiel" titel="Einzugsgebiet Kiel">
            <Text>Kiel und Umland: Neumünster, Rendsburg, Plön, Preetz und alle Gemeinden im Kreis Rendsburg-Eckernförde und Plön</Text>
            <NearbyCities current="kiel" />
          </Abschnitt>

          <OrtWerkzeuge ort={'Kiel'} land={'Schleswig-Holstein'} altbau={70.6} miete={7.64} />


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

            ort={'Kiel'}

            stimmen={DIREKT_ERHALTEN.filter((b) => ['k-20260504-christian', 'k-20260118-jens'].includes(b.id))}

          />


          <Abschnitt id="haeufige-fragen-24h-pflege" titel="Häufige Fragen — 24h-Pflege in Kiel">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand ohneBewertungen />
    </>
  )
}
