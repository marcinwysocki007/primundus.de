import type { Metadata } from 'next'
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
  { id: 'was-ist-24-stunden', title: "Was 24-Stunden-Betreuung in Saarbrücken bedeutet" },
  { id: 'kosten-und-kassenzuschuesse-in', title: "Kosten & Kassenzuschüsse in Saarbrücken 2026" },
  { id: 'polnische-betreuungskraefte-in-saarbruecken', title: "Polnische Betreuungskräfte in Saarbrücken" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause in Saarbrücken ausmacht" },
  { id: 'einzugsgebiet-saarbruecken', title: "Einzugsgebiet Saarbrücken" },
  { id: 'werkzeuge', title: "Was es in Saarbrücken kostet, und was die Pflegekasse dazugibt" },
  { id: 'so-arbeiten-wir', title: "So arbeiten wir" },
  { id: 'haeufige-fragen-24h-pflege', title: "Häufige Fragen — 24h-Pflege in Saarbrücken" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Saarbrücken | 6× Testsieger',
  description: 'Betreuung zu Hause durch geprüfte Kräfte, die Sie vorab sehen – und Entlastung für Angehörige. Ihren Preis sehen Sie sofort online, mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-saarbruecken' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege Saarbrücken — Betreuungskraft zuhause | Primundus',
    description: 'Geprüfte 24h-Betreuungskraft in Saarbrücken. Täglich kündbar, rechtssicher, startklar.',
    url: 'https://primundus.de/24h-pflege-saarbruecken',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Saarbrücken?', a: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Saarland (Eigenanteil rund 3.690 €/Monat, vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Saarbrücken starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
  { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt zu festen Zeiten für einzelne Aufgaben. Eine 24h-Betreuungskraft lebt im Haushalt: Sie hilft bei Körperpflege und Alltag, ist bei Bedarf auch nachts da und versorgt den Haushalt mit. Bei Demenz zählt vor allem, dass es über Wochen dieselbe Person ist und niemand umziehen muss.' },
  { q: 'Ist 24h-Pflege über Primundus in Saarbrücken rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
  { q: 'Lohnt sich 24-Stunden-Pflege, wenn es in Saarbrücken genug ambulante Dienste gibt?', a: 'Die Frage ist berechtigt — der Regionalverband ist dicht besiedelt, ambulante Dienste sind erreichbar. Der Unterschied liegt nicht in der Entfernung, sondern in der Anwesenheit. Ein Dienst kommt zu festen Zeiten und bleibt zwanzig Minuten. Er ist nicht da, wenn nachts jemand aufsteht, er kocht nicht mit und er merkt nicht, wenn tagsüber etwas nicht stimmt. Wo es um Begleitung über den ganzen Tag geht, ersetzt kein Einsatzplan jemanden, der im Haus wohnt.' },
  { q: 'Was bedeutet die Hanglage für die Betreuung in Saarbrücken?', a: 'Zwischen der Stadtmitte auf rund 230 Metern und Wohnlagen wie dem Eschberg auf 340 Metern liegen gut hundert Höhenmeter — auf kurzer Strecke. Wer dort oben oder in einer der Hanglagen über der Saar wohnt, merkt jede Steigung, sobald das Gehen schwerer fällt. Eine Betreuungskraft übernimmt die Wege nach draußen: einkaufen, Arzttermine, Begleitung. Damit bleibt der Alltag möglich, ohne dass jemand die vertraute Wohnung aufgeben muss.' },
  { q: 'Welches Einzugsgebiet wird in Saarbrücken bedient?', a: 'Saarbrücken und Umland: Neunkirchen, Homburg, Völklingen, Saarlouis und alle Gemeinden im Saarpfalz-Kreis und Landkreis Saarlouis' },
  { q: 'Ist in einer Wohnung in Saarbrücken Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Saarbrücken hat im Schnitt 85,7 m², 28,9 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 69,7 % der Gebäude in Saarbrücken sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Saarland zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.690 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause bleiben bei Pflegegrad 3 ab ca. 923 € — nach Pflegegeld, anteiligem Entlastungsbudget und Steuerermäßigung. Das sind rund 2.767 € Unterschied im Monat, 33.204 € im Jahr.' },
]

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-saarbruecken#service',
    name: 'Primundus — 24h-Pflege Saarbrücken',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte in Saarbrücken. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-saarbruecken',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'City', name: 'Saarbrücken' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24h-Pflege Saarbrücken', item: 'https://primundus.de/24h-pflege-saarbruecken' },
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
            { label: 'Saarbrücken' },
          ]}
          augenbraue="24-Stunden-Pflege in Saarbrücken"
          titel="24-Stunden-Pflege und Betreuung in Saarbrücken"
          einleitung={<>Von St. Johann über Dudweiler bis Burbach: Saarbrücker bleiben ihrem Viertel treu — oft ein Leben lang. Damit das auch mit Pflegebedarf so bleibt, zieht eine Betreuungskraft von Primundus mit ein: bei Bedarf auch nachts da, im vertrauten Zuhause statt im Heim, auch im Umland bis Völklingen und Sulzbach. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>}
          aktualisiert="27. August 2026"
          lesezeit="6 Min."
          blick={[
            'Preis bei Primundus: ab 2.150 €/Monat',
            'Ihr Eigenanteil bei Pflegegrad 3: ab ca. 923 €/Monat',
            'Pflegeheim in Saarland: Eigenanteil rund 3.690 €/Monat (vdek, 07/2026)',
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich',
          ]}
          blickTitel="Saarbrücken auf einen Blick"
          person={<AnsprechpartnerinGross ort="Saarbrücken" />}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist-24-stunden" titel="Was 24-Stunden-Betreuung in Saarbrücken bedeutet">
            <Text>
              Eine Betreuungskraft zieht bei Ihnen ein, hilft bei Körperpflege, beim Essen und im Alltag, versorgt den Haushalt mit und ist bei Bedarf
              auch nachts da. Anders als beim ambulanten Dienst, der zweimal am Tag kommt und wieder geht. Und anders als im
              Heim, wo der Umzug ansteht. Das Zuhause in Saarbrücken bleibt, der gewohnte Tagesablauf auch.
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

          <Abschnitt id="kosten-und-kassenzuschuesse-in" titel="Kosten & Kassenzuschüsse in Saarbrücken 2026">
            <Tabelle
              titel="Kostenbeispiel — Pflegegrad 3 in Saarbrücken"
              zeilen={[
                ['Kosten Primundus', 'ab 2.150 €/Monat'],
                ['− Pflegegeld PG 3', '− 599 €/Monat'],
                ['− Entlastungsbudget (anteilig)', '− ca. 295 €/Monat'],
                ['− Steuerermäßigung (20 %, bis 4.000 €/Jahr)', '− ca. 333 €/Monat'],
                [<strong key="e">Ihr Eigenanteil</strong>, <strong key="w">ab ca. 923 €/Monat</strong>],
              ]}
              betont={1}
              fuss="Eine Person, Werte aus unserem Kostenrechner, zzgl. An- und Abreise 125 € je Strecke · Pflegeheim in Saarland: Eigenanteil rund 3.690 €/Monat (vdek, 07/2026) — 24h-Pflege zuhause ist oft günstiger und erhält das Zuhause"
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
            <RechnerKasten src="ort-saarbruecken" />
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-in-saarbruecken" titel="Polnische Betreuungskräfte in Saarbrücken">
            <Text>Wer in Saarbrücken nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Sie kommen aus Polen und sind in Saarbrücken und im gesamten Umland im Einsatz.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Was eine polnische Betreuungskraft kostet:</strong> ab 2.150 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen. Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro Eigenanteil — deutlich weniger als ein Heimplatz, der hier im Schnitt rund 3.690 Euro im Monat kostet.</Text>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Pflegekraft aus Polen — Kosten, Recht und Ablauf</a>.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause in Saarbrücken ausmacht">
            <Text>Saarbrücken liegt im Tal, aber gewohnt wird auch weit darüber. Die Stadtmitte liegt auf rund 230 Metern, der Eschberg auf 340 — gut zwei Kilometer Luftlinie, gut hundert Meter Höhenunterschied. Wer dort oben wohnt oder in einer der Hanglagen über der Saar, merkt das jeden Tag ein bisschen deutlicher, sobald die Puste nachlässt. Selbst das Klinikum steht auf dem Winterberg.</Text>
            <Text>Dazu kommt der Wohnungsbestand. Im Nauwieser Viertel und in den gewachsenen Straßen von St. Johann stehen viele Häuser aus der Zeit zwischen 1860 und 1920 — schöne Altbauten mit hohen Decken, aber eben auch mit Treppenhäusern, die für einen Rollator nie gedacht waren. Eine Wohnung im dritten Stock ohne Aufzug ist jahrzehntelang kein Thema und dann plötzlich das größte.</Text>
            <Text>Anders als in vielen ländlichen Kreisen liegt es hier nicht an weiten Wegen: Der Regionalverband Saarbrücken ist dicht besiedelt, ambulante Dienste sind erreichbar. Was sie nicht leisten können, ist Anwesenheit. Zweimal zwanzig Minuten am Tag helfen beim Waschen — aber nicht nachts um drei, und nicht an dem langen Nachmittag, an dem sonst niemand kommt. Genau diese Lücke schließt eine Betreuungskraft, die mit einzieht. Das gilt in Saarbrücken ebenso wie in Völklingen, Sulzbach oder Riegelsberg.</Text>
            <Text>Bevor Sie sich festlegen, lassen Sie sich unabhängig beraten: Die Pflegestützpunkte im Saarland beraten kostenlos und trägerunabhängig, auf Wunsch auch bei Ihnen zu Hause. Dieser Anspruch steht Ihnen gesetzlich zu (§ 7a SGB XI) — ganz gleich, für welchen Anbieter Sie sich danach entscheiden.</Text>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-saarbruecken" titel="Einzugsgebiet Saarbrücken">
            <Text>Saarbrücken und Umland: Neunkirchen, Homburg, Völklingen, Saarlouis und alle Gemeinden im Saarpfalz-Kreis und Landkreis Saarlouis</Text>
            <NearbyCities current="saarbruecken" />
          </Abschnitt>

          <OrtWerkzeuge ort={'Saarbrücken'} land={'Saarland'} altbau={67.2} miete={6.71} />


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

          <Abschnitt id="haeufige-fragen-24h-pflege" titel="Häufige Fragen — 24h-Pflege in Saarbrücken">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
