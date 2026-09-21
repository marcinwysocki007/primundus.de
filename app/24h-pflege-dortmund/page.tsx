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
  { id: 'was-ist-24-stunden', title: "Was 24-Stunden-Betreuung in Dortmund bedeutet" },
  { id: 'kosten-und-kassenzuschuesse-in', title: "Kosten & Kassenzuschüsse in Dortmund 2026" },
  { id: 'polnische-betreuungskraefte-in-dortmund', title: "Polnische Betreuungskräfte in Dortmund" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause in Dortmund ausmacht" },
  { id: 'einzugsgebiet-dortmund', title: "Einzugsgebiet Dortmund" },
  { id: 'werkzeuge', title: "Was es in Dortmund kostet, und was die Pflegekasse dazugibt" },
  { id: 'so-arbeiten-wir', title: "So arbeiten wir" },
  { id: 'stimmen-vor-ort', title: "Familien aus Dortmund über uns" },
  { id: 'haeufige-fragen-24h-pflege', title: "Häufige Fragen — 24h-Pflege in Dortmund" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Dortmund | 6× Testsieger | Primundus',
  description: 'Liebevolle Betreuung in Dortmund und Entlastung für Angehörige. Geprüfte Betreuungskräfte & Preis sofort sehen – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-dortmund' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Dortmund | 6× Testsieger | Primundus',
    description: 'Liebevolle Betreuung in Dortmund und Entlastung für Angehörige. Geprüfte Betreuungskräfte & Preis sofort sehen – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-dortmund',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Dortmund?', a: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Nordrhein-Westfalen (Eigenanteil rund 3.580 €/Monat, vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Dortmund starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
  { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt zu festen Zeiten für einzelne Aufgaben. Eine 24h-Betreuungskraft lebt im Haushalt: Sie hilft bei Körperpflege und Alltag, ist bei Bedarf auch nachts da und versorgt den Haushalt mit. Bei Demenz zählt vor allem, dass es über Wochen dieselbe Person ist und niemand umziehen muss.' },
  { q: 'Ist 24h-Pflege über Primundus in Dortmund rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
  { q: 'Funktioniert 24-Stunden-Pflege auch in einer alten Zechensiedlung?', a: 'Ja. In Oberdorstfeld, der Alten Kolonie in Eving oder der Müsersiedlung in Derne stehen kleine Häuser mit Garten aus der Zeit um die vorletzte Jahrhundertwende. Sie sind eng und haben Treppen, waren also nie für einen Rollstuhl gedacht — trotzdem will kaum jemand dort weg. Für die Betreuungskraft braucht es ein eigenes Zimmer; alles Weitere richtet sich nach dem Alltag vor Ort. Genau in solchen Häusern ist eine Betreuung im Haus oft die einzige Alternative zum Umzug.' },
  { q: 'Gilt das Angebot auch im Umland von Dortmund?', a: 'Ja, im gesamten Einzugsgebiet. Bemerkenswert ist dabei: Dortmund ist jünger als sein Umland. In der Stadt ist gut jeder Fünfte über 65, in den Kreisen Unna, Recklinghausen und im Ennepe-Ruhr-Kreis jeweils rund ein Viertel. Wer in Lünen, Kamen oder Castrop-Rauxel lebt, findet dichte Versorgung vor — aber ein ambulanter Dienst kommt zu festen Zeiten, nicht dann, wenn nachts jemand aufsteht.' },
  { q: 'Welches Einzugsgebiet wird in Dortmund bedient?', a: 'Dortmund und Umland: Bochum, Herne, Castrop-Rauxel, Lünen, Unna, Schwerte, Witten und alle Gemeinden im Kreis Unna' },
  { q: 'Ist in einer Wohnung in Dortmund Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Dortmund hat im Schnitt 79,7 m², 30,8 % sind kleiner als 60 m². Das ist eng, deshalb klären wir vor der Zusage am Telefon, welches Zimmer frei wird — meist das ehemalige Kinder- oder Arbeitszimmer. 61,1 % der Gebäude in Dortmund sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Nordrhein-Westfalen zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.580 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause bleiben bei Pflegegrad 3 ab ca. 923 € — nach Pflegegeld, anteiligem Entlastungsbudget und Steuerermäßigung. Das sind rund 2.657 € Unterschied im Monat, 31.884 € im Jahr.' },
]

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-dortmund#service',
    name: 'Primundus — 24h-Pflege Dortmund',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte in Dortmund. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-dortmund',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'City', name: 'Dortmund' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Regionen', item: 'https://primundus.de/regionen' },
      { '@type': 'ListItem', position: 3, name: 'Dortmund', item: 'https://primundus.de/24h-pflege-dortmund' },
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
            { label: 'Dortmund' },
          ]}
          augenbraue="24-Stunden-Pflege in Dortmund"
          titel="24-Stunden-Pflege und Betreuung in Dortmund"
          einleitung={<>Hörde, Aplerbeck, Mengede oder das Kreuzviertel: Dortmunder hängen an ihrem Viertel — am Bäcker um die Ecke, am Kleingarten, an Borsigplatz-Erinnerungen. Wenn die Eltern Hilfe brauchen, muss deshalb niemand quer durch die Stadt ins Heim ziehen: Eine Betreuungskraft von Primundus zieht mit ein und ist bei Bedarf auch nachts da. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>}
          aktualisiert="27. August 2026"
          lesezeit="6 Min."
          blick={[
            'Preis bei Primundus: ab 2.150 €/Monat',
            'Ihr Eigenanteil bei Pflegegrad 3: ab ca. 923 €/Monat',
            'Pflegeheim in Nordrhein-Westfalen: Eigenanteil rund 3.580 €/Monat (vdek, 07/2026)',
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich',
          ]}
          blickTitel="Dortmund auf einen Blick"
          person={<AnsprechpartnerinGross ort="Dortmund" />}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist-24-stunden" titel="Was 24-Stunden-Betreuung in Dortmund bedeutet">
            <Text>
              Eine Betreuungskraft zieht bei Ihnen ein, hilft bei Körperpflege, beim Essen und im Alltag, versorgt den Haushalt mit und ist bei Bedarf
              auch nachts da. Anders als beim ambulanten Dienst, der zweimal am Tag kommt und wieder geht. Und anders als im
              Heim, wo der Umzug ansteht. Das Zuhause in Dortmund bleibt, der gewohnte Tagesablauf auch.
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

          <Abschnitt id="kosten-und-kassenzuschuesse-in" titel="Kosten & Kassenzuschüsse in Dortmund 2026">
            <Tabelle
              titel="Kostenbeispiel — Pflegegrad 3 in Dortmund"
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
            <RechnerKasten src="ort-dortmund" />
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-in-dortmund" titel="Polnische Betreuungskräfte in Dortmund">
            <Text>Wer in Dortmund nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Sie kommen aus Polen und sind in Dortmund und im gesamten Umland im Einsatz.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Was eine polnische Betreuungskraft kostet:</strong> ab 2.150 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen. Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro Eigenanteil — deutlich weniger als ein Heimplatz, der hier im Schnitt rund 3.580 Euro im Monat kostet.</Text>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Polnische Pflegekräfte — Kosten, Recht und Ablauf</a>.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause in Dortmund ausmacht">
            <Text>In Dortmund wird gerade die Generation pflegebedürftig, die den Strukturwandel selbst erlebt hat. Auf Minister Stein in Eving wurde 1987 die letzte Kohle gefördert, auf Gneisenau 1985; die Stahlproduktion in Hörde endete 2001. Wer damals als junger Mann unter Tage oder am Hochofen stand, ist heute Ende siebzig. Viele von ihnen wohnen noch genau dort, wo sie damals eingezogen sind.</Text>
            <Text>Das prägt die Wohnsituation bis heute. In den alten Zechensiedlungen — Oberdorstfeld, der Alten Kolonie in Eving, der Müsersiedlung in Derne — stehen kleine Häuser mit Garten, gebaut um die vorletzte Jahrhundertwende. Sie sind eng, sie haben Treppen, und sie waren nie für einen Rollstuhl gedacht. Trotzdem will kaum jemand dort weg, und das ist verständlich: Es ist nicht nur eine Wohnung, es ist die eigene Geschichte. In den Gründerzeitvierteln wie dem Kreuzviertel oder rund um die Kaiserstraße stellt sich dieselbe Frage in vier bis fünf Obergeschossen.</Text>
            <Text>Zwei Dinge überraschen viele: Dortmund ist nicht flach — zwischen Derne im Norden und dem Klusenberg bei Syburg liegen gut 200 Höhenmeter. Und die Stadt ist jünger als ihr Umland: In Dortmund ist gut jeder Fünfte über 65, in den Kreisen Unna, Recklinghausen und im Ennepe-Ruhr-Kreis ist es jeweils rund ein Viertel. Wer dort lebt, in Lünen, Kamen oder Castrop-Rauxel, findet zwar dichte Versorgung vor — aber ein ambulanter Dienst kommt zu festen Zeiten, nicht dann, wenn nachts jemand aufsteht.</Text>
            <Text>Wenn Sie erst einmal Klarheit über Ihre Ansprüche wollen: Die Pflegestützpunkte und Pflegeberatungsstellen in Dortmund beraten kostenlos und unabhängig von Anbietern, auf Wunsch auch bei Ihnen zu Hause. Der Anspruch darauf ist gesetzlich geregelt (§ 7a SGB XI) — unabhängig davon, für welchen Weg Sie sich danach entscheiden.</Text>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-dortmund" titel="Einzugsgebiet Dortmund">
            <Text>Dortmund und Umland: Bochum, Herne, Castrop-Rauxel, Lünen, Unna, Schwerte, Witten und alle Gemeinden im Kreis Unna</Text>
            <NearbyCities current="dortmund" />
          </Abschnitt>

          <OrtWerkzeuge ort={'Dortmund'} land={'Nordrhein-Westfalen'} altbau={65.5} miete={6.45} />


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

            ort={'Dortmund'}

            stimmen={DIREKT_ERHALTEN.filter((b) => ['k-20260512-martin', 'k-20251223-karin'].includes(b.id))}

          />


          <Abschnitt id="haeufige-fragen-24h-pflege" titel="Häufige Fragen — 24h-Pflege in Dortmund">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand ohneBewertungen />
    </>
  )
}
