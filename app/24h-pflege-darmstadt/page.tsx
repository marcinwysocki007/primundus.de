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
  { id: 'was-ist-24-stunden', title: "Was 24-Stunden-Betreuung in Darmstadt bedeutet" },
  { id: 'kosten-und-kassenzuschuesse-in', title: "Kosten & Kassenzuschüsse in Darmstadt 2026" },
  { id: 'polnische-betreuungskraefte-in-darmstadt', title: "Polnische Betreuungskräfte in Darmstadt" },
  { id: '24-stunden-pflege-im', title: "24-Stunden-Pflege im Landkreis Darmstadt-Dieburg" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause in Darmstadt ausmacht" },
  { id: 'einzugsgebiet-darmstadt', title: "Einzugsgebiet Darmstadt" },
  { id: 'werkzeuge', title: "Was es in Darmstadt kostet, und was die Pflegekasse dazugibt" },
  { id: 'so-arbeiten-wir', title: "So arbeiten wir" },
  { id: 'stimmen-vor-ort', title: "Familien aus Darmstadt über uns" },
  { id: 'haeufige-fragen-24h-pflege', title: "Häufige Fragen — 24h-Pflege in Darmstadt" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Darmstadt: zu Hause bleiben statt Heim',
  description: 'Körperpflege, Kochen, Einkäufe, Begleitung, nachts jemand im Haus: Eine Betreuungskraft übernimmt das, was Angehörige allein nicht mehr schaffen.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-darmstadt' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege Darmstadt — Betreuungskraft zuhause | Primundus',
    description: 'Geprüfte 24h-Betreuungskraft in Darmstadt. Täglich kündbar, rechtssicher, startklar.',
    url: 'https://primundus.de/24h-pflege-darmstadt',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Darmstadt?', a: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Hessen (Eigenanteil rund 3.230 €/Monat, vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Darmstadt starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
  { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
  { q: 'Ist 24h-Pflege über Primundus in Darmstadt rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
  { q: 'Funktioniert 24-Stunden-Betreuung in einer Darmstädter Wohnung?', a: 'Das ist hier die entscheidende Frage, und wir beantworten sie ehrlich: Darmstadt ist räumlich die anspruchsvollste Stadt der Region. Die durchschnittliche Wohnung misst 81,8 Quadratmeter gegenüber 98,3 in Hessen, jede dritte hat unter 60, und 53,1 Prozent liegen in Häusern mit sieben oder mehr Parteien — eine Folge des Wiederaufbaus nach der Brandnacht 1944, aus der allein 20,9 Prozent des heutigen Wohnungsbestands stammen. Nur 29,5 Prozent der Haushalte wohnen im Eigentum. Notwendig ist ein eigenes, abschließbares Zimmer für die Betreuungskraft. Ist das da, funktioniert es wie überall; ist es nicht da, sagen wir Ihnen das vorher.' },
  { q: 'Darmstadt ist eine junge Stadt — lohnt sich das Thema hier überhaupt?', a: 'Die Quote täuscht. Mit 48 Pflegebedürftigen je 1.000 Einwohner hat Darmstadt die niedrigste Pflegequote aller 26 hessischen Kreise (Hessen: 67) — das liegt an den vielen Studierenden, nicht an geringerem Bedarf. In absoluten Zahlen sind 7.587 Menschen pflegebedürftig und 29.645 über 65 Jahre alt. Interessanter ist die Struktur: In Darmstadt wird seltener rein familiär gepflegt als im Umland (54,5 gegen 62,1 Prozent im Landkreis Darmstadt-Dieburg), dafür ist die ambulante Versorgung mit 19,4 Prozent überdurchschnittlich.' },
  { q: 'Gibt es in Darmstadt genug Heimplätze als Alternative?', a: 'Weniger, als viele annehmen. Zwar leben mit 14,4 Prozent etwas mehr Pflegebedürftige im Heim als in Hessen insgesamt (13,0 Prozent) — gemessen an der Zahl der über 65-Jährigen stehen aber nur 43 Plätze je 1.000 zur Verfügung, gegenüber 47 im Land. Der Landkreis Darmstadt-Dieburg liegt mit 34 noch deutlich darunter. Die Region ist insgesamt heimplatzarm, und die Stadt gleicht das nicht aus. Wer zu Hause bleiben möchte, hat dafür also nicht nur persönliche, sondern auch praktische Gründe.' },
  { q: 'Welches Einzugsgebiet wird in Darmstadt bedient?', a: 'Darmstadt und Landkreis Darmstadt-Dieburg: Griesheim, Weiterstadt, Dieburg, Reinheim, Groß-Umstadt und alle Gemeinden im Landkreis Darmstadt-Dieburg' },
  { q: 'Ist in einer Wohnung in Darmstadt Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Darmstadt hat im Schnitt 81,8 m², 33,5 % sind kleiner als 60 m². Das ist eng, deshalb klären wir vor der Zusage am Telefon, welches Zimmer frei wird — meist das ehemalige Kinder- oder Arbeitszimmer. 64,5 % der Gebäude in Darmstadt sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Hessen zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.230 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause bleiben bei Pflegegrad 3 ab ca. 923 € — nach Pflegegeld, anteiligem Entlastungsbudget und Steuerermäßigung. Das sind rund 2.307 € Unterschied im Monat, 27.684 € im Jahr.' },
]

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-darmstadt#service',
    name: 'Primundus — 24h-Pflege Darmstadt',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte in Darmstadt. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-darmstadt',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'City', name: 'Darmstadt' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24h-Pflege Darmstadt', item: 'https://primundus.de/24h-pflege-darmstadt' },
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
            { label: 'Darmstadt' },
          ]}
          augenbraue="24-Stunden-Pflege in Darmstadt"
          titel="24-Stunden-Pflege und Betreuung in Darmstadt"
          einleitung={<>Ob Jugendstilwohnung nahe der Mathildenhöhe, Haus in Bessungen oder Eberstadt: Darmstädter möchten im Alter dort bleiben, wo ihr Leben stattgefunden hat. Eine Betreuungskraft von Primundus macht das möglich — sie zieht mit ein, übernimmt Haushalt und Pflegealltag und ist auch nachts da, bis Arheilgen und ins Umland. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>}
          aktualisiert="27. August 2026"
          lesezeit="6 Min."
          blick={[
            'Preis bei Primundus: ab 2.150 €/Monat',
            'Ihr Eigenanteil bei Pflegegrad 3: ab ca. 923 €/Monat',
            'Pflegeheim in Hessen: Eigenanteil rund 3.230 €/Monat (vdek, 07/2026)',
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich',
          ]}
          blickTitel="Darmstadt auf einen Blick"
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist-24-stunden" titel="Was 24-Stunden-Betreuung in Darmstadt bedeutet">
            <Text>
              Eine Betreuungskraft zieht bei Ihnen ein, führt den Haushalt, hilft bei Körperpflege und Alltag und ist bei Bedarf
              auch nachts da. Anders als beim ambulanten Dienst, der zweimal am Tag kommt und wieder geht. Und anders als im
              Heim, wo der Umzug ansteht. Das Zuhause in Darmstadt bleibt, der gewohnte Tagesablauf auch.
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

          <Abschnitt id="kosten-und-kassenzuschuesse-in" titel="Kosten & Kassenzuschüsse in Darmstadt 2026">
            <Tabelle
              titel="Kostenbeispiel — Pflegegrad 3 in Darmstadt"
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
            <RechnerKasten src="ort-darmstadt" />
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-in-darmstadt" titel="Polnische Betreuungskräfte in Darmstadt">
            <Text>Wer in Darmstadt nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Sie kommen aus Polen und sind in Darmstadt und im gesamten Umland im Einsatz.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Was eine polnische Betreuungskraft kostet:</strong> ab 2.150 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen. Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro Eigenanteil — deutlich weniger als ein Heimplatz, der hier im Schnitt rund 3.230 Euro im Monat kostet.</Text>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Polnische Betreuungskräfte — das Entsendemodell erklärt</a>.</Text>
          </Abschnitt>

          <Abschnitt id="24-stunden-pflege-im" titel="24-Stunden-Pflege im Landkreis Darmstadt-Dieburg">
            <Text>Unsere Betreuungskräfte ziehen in Darmstadt und im Landkreis Darmstadt-Dieburg ein — auch in den kleineren Gemeinden, in denen sonst kaum jemand anbietet. Die Anreise dauert überall gleich lang, der Preis ist derselbe.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause in Darmstadt ausmacht">
            <Text>In der Nacht vom 11. auf den 12. September 1944 wurden 78 Prozent der Darmstädter Kernstadt zerstört. Das klingt nach Geschichtsbuch, steht aber bis heute in der Wohnungsstatistik — und es entscheidet mit darüber, ob eine 24-Stunden-Betreuung in einer Wohnung überhaupt funktioniert.{' '} <strong className="text-pm-ink font-semibold">20,9 Prozent aller Darmstädter Wohnungen stammen aus den 1950er-Jahren, in ganz Hessen sind es 12,3 Prozent.</strong> Das ist der Wiederaufbau, und der baute schnell und knapp: Die durchschnittliche Wohnung misst hier 81,8 Quadratmeter gegenüber 98,3 im Land, jede dritte hat unter 60 Quadratmeter, und 53,1 Prozent liegen in Häusern mit sieben oder mehr Parteien.</Text>
            <Text>Wir sagen das offen, weil es der ehrlichere Weg ist: Darmstadt ist für eine Betreuungskraft im Haushalt räumlich die anspruchsvollste Stadt der Region. Nur 29,5 Prozent der Haushalte wohnen im Eigentum — in Hessen sind es 46,6. Wer hier über eine 24-Stunden-Betreuung nachdenkt, sollte als Erstes klären, ob ein eigenes Zimmer für die Kraft frei wird. Wo es das gibt, funktioniert es genauso gut wie überall sonst. Wo nicht, sagen wir das lieber vorher als hinterher.</Text>
            <Text>Bei den Pflegezahlen ist Darmstadt ein Sonderfall — und wird deshalb leicht falsch gelesen. Mit 48 Pflegebedürftigen je 1.000 Einwohner hat die Stadt die niedrigste Pflegequote aller 26 hessischen Kreise (Land: 67). Das liegt an der jungen Universitätsstadt, nicht an weniger Bedarf: 7.587 Menschen sind pflegebedürftig, 29.645 sind über 65. Auffällig ist etwas anderes — in Darmstadt wird seltener rein familiär gepflegt als im Umland. 54,5 Prozent beziehen nur Pflegegeld, im Landkreis Darmstadt-Dieburg sind es 62,1. Dafür ist die ambulante Versorgung mit 19,4 Prozent besser als im Land (17,6), und ein ambulanter Dienst betreut hier im Schnitt 46 Menschen statt 70 wie im Landkreis.</Text>
            <Text>Ein verbreiteter Irrtum sei gleich mit ausgeräumt: Dass der Anteil der Heimbewohner in Darmstadt mit 14,4 Prozent über dem hessischen Wert von 13,0 liegt, heißt nicht, dass es hier viele Heimplätze gäbe. Gemessen an der Zahl der über 65-Jährigen sind es{' '} <strong className="text-pm-ink font-semibold">43 Plätze je 1.000 — weniger als die 47 im Land.</strong> Die ganze Region ist heimplatzarm; der Landkreis liegt mit 34 noch deutlich darunter. Wer einen Platz sucht, sucht hier länger.</Text>
            <Text>Dazu kommt, wie unterschiedlich die Stadtteile sind. Zwischen Darmstadt-Mitte und Wixhausen liegt beim Bevölkerungsdruck der Faktor 33 — 93 gegen 2,8 Einwohner je Hektar. Wixhausen und Eberstadt sind eigene Welten mit eigenen Wegen. Eine Betreuungskraft, die im Haushalt lebt, macht diesen Unterschied bedeutungslos: Sie ist da, unabhängig davon, wie weit der nächste Dienst fahren müsste. Die Akutgeriatrie der Stadt sitzt im AGAPLESION Elisabethenstift, das auch eine geriatrische Tagesklinik führt. Und bevor Sie entscheiden: Die Pflegeberatung nach § 7a SGB XI ist kostenlos, trägerunabhängig und kommt auf Wunsch zu Ihnen.</Text>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-darmstadt" titel="Einzugsgebiet Darmstadt">
            <Text>Darmstadt und Landkreis Darmstadt-Dieburg: Griesheim, Weiterstadt, Dieburg, Reinheim, Groß-Umstadt und alle Gemeinden im Landkreis Darmstadt-Dieburg</Text>
            <NearbyCities current="darmstadt" />
          </Abschnitt>

          <OrtWerkzeuge ort={'Darmstadt'} land={'Hessen'} altbau={57.7} miete={9.56} />


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

            ort={'Darmstadt'}

            herkunft="ort"

            stimmen={DIREKT_ERHALTEN.filter((b) => ['k-20250906-alexander'].includes(b.id))}

          />


          <Abschnitt id="haeufige-fragen-24h-pflege" titel="Häufige Fragen — 24h-Pflege in Darmstadt">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
