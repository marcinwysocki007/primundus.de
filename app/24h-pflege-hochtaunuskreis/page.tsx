import type { Metadata } from 'next'
import { OrtStimmen } from '@/components/orte/OrtStimmen'
import { DIREKT_ERHALTEN } from '@/lib/bewertungen-direkt'
import { AnsprechpartnerinGross, KontaktBand } from '@/components/ArticleCTA'
import { NearbyCities } from '@/components/NearbyCities'
import { OrtWerkzeuge } from '@/components/orte/OrtWerkzeuge'
import {
  Abschnitt, Fragen, Gegenueber, Kasten, Punkte, RatgeberKopf, RatgeberRumpf, RechnerKasten, Schritte, Tabelle, Text,
} from '@/components/vorlage/Ratgeber'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'

// Ortsseite in der Seitenvorlage (16.09.2026): Kopf mit „Auf einen Blick", Seitenleiste
// mit Inhaltsverzeichnis, Flächen statt Kästen, keine Emoji, Fließtext 17 px.
// Erzeugt von scripts/codemods/13-ortsseiten.py — Texte unverändert bis auf die
// Nachtaussage (Martin 14.09.) und die Bestpreisgarantie statt der Prozent-Pille (16.09.).

const SECTIONS = [
  { id: 'pflege-im-taunus-gute', title: "Pflege im Taunus: Gute Heime, lange Wartelisten, hohe Preise" },
  { id: 'unser-einsatzgebiet-im-hochtaunuskreis', title: "Unser Einsatzgebiet im Hochtaunuskreis" },
  { id: 'was-kostet-das-und', title: "Was kostet das — und was zahlt die Pflegekasse dazu?" },
  { id: 'polnische-betreuungskraefte-im-hochtaunuskreis', title: "Polnische Betreuungskräfte im Hochtaunuskreis" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause in Hochtaunuskreis ausmacht" },
  { id: 'einzugsgebiet-hochtaunuskreis', title: "Einzugsgebiet Hochtaunuskreis" },
  { id: 'werkzeuge', title: "Was es in Hochtaunuskreis kostet, und was die Pflegekasse dazugibt" },
  { id: 'stimmen-vor-ort', title: "Familien aus der Region über uns" },
  { id: 'haeufige-fragen-aus-der', title: "Häufige Fragen aus der Region" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege im Hochtaunuskreis | 6× Testsieger',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Hochtaunuskreis in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-hochtaunuskreis' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege im Hochtaunuskreis | 6× Testsieger',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Hochtaunuskreis in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-hochtaunuskreis',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft im Hochtaunuskreis?', a: 'Ab 2.150 Euro im Monat — und damit oft weniger als ein Heimplatz im Taunus, wo die Eigenanteile zu den höchsten in Hessen gehören. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei Pflegegrad 3 ab ca. 923 Euro selbst zu tragen.' },
  { q: 'Welche Orte im Hochtaunuskreis deckt Primundus ab?', a: 'Den ganzen Kreis: Bad Homburg, Oberursel, Königstein, Kronberg, Friedrichsdorf, Steinbach, Schmitten, Usingen, Neu-Anspach, Wehrheim und alle Gemeinden im Usinger Land.' },
  { q: 'Wie schnell kann eine Betreuungskraft im Taunus starten?', a: 'Eine Anreise ist in 3 Tagen möglich. Preis und passende Betreuungskräfte sehen Sie sofort online, Bewerbungen kommen am selben Werktag.' },
  { q: 'Ist in einer Wohnung in Hochtaunuskreis Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Hochtaunuskreis hat im Schnitt 106,2 m², 17,9 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 82,2 % der Gebäude in Hochtaunuskreis sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Hessen zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.230 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause bleiben bei Pflegegrad 3 ab ca. 923 € — nach Pflegegeld, anteiligem Entlastungsbudget und Steuerermäßigung. Das sind rund 2.307 € Unterschied im Monat, 27.684 € im Jahr.' },
]

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-hochtaunuskreis#service',
    name: 'Primundus — 24h-Pflege Hochtaunuskreis',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte im Hochtaunuskreis. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-hochtaunuskreis',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'AdministrativeArea', name: 'Hochtaunuskreis' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Regionen', item: 'https://primundus.de/regionen' },
      { '@type': 'ListItem', position: 3, name: 'Hochtaunuskreis', item: 'https://primundus.de/24h-pflege-hochtaunuskreis' },
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
            { label: 'Hochtaunuskreis' },
          ]}
          augenbraue="24-Stunden-Pflege in Hochtaunuskreis"
          titel="24h-Pflege im Hochtaunuskreis — Betreuung im eigenen Zuhause"
          einleitung={<>Viele, die im Taunus alt geworden sind, haben ihr Haus über Jahrzehnte aufgebaut — in Oberursel, Königstein oder einem der Dörfer im Usinger Land. Wenn plötzlich Pflege nötig wird, stellt sich nicht die Frage nach dem „ob", sondern nach dem „wie": Heim — oder zuhause bleiben? Eine Betreuungskraft von Primundus zieht mit ein und macht das Zuhausebleiben möglich. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>}
          aktualisiert="28. August 2026"
          lesezeit="6 Min."
          knopf={{ href: 'https://kostenrechner.primundus.de/?start=1&src=ort-hochtaunuskreis', text: 'Preis & Betreuungskräfte ansehen' }}
          knopfOben
          blick={[
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich',
          ]}
          blickTitel="Hochtaunuskreis auf einen Blick"
          person={<AnsprechpartnerinGross ort="Hochtaunuskreis" />}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="pflege-im-taunus-gute" titel="Pflege im Taunus: Gute Heime, lange Wartelisten, hohe Preise">
            <Text>Der Hochtaunuskreis gehört zu den Regionen mit den höchsten Heimkosten in Hessen — und trotzdem sind die Wartelisten lang. Viele Familien pendeln zwischen Frankfurt und dem Elternhaus im Taunus und merken: So geht es auf Dauer nicht. Die 24h-Betreuung ist der dritte Weg — persönlicher als jedes Heim, planbarer als jeder ambulante Dienst, und ohne Warteliste.</Text>
            <Punkte
              punkte={[
                { title: 'Zuhause bleiben', desc: 'Haus, Garten und Nachbarschaft bleiben erhalten' },
                { title: 'Keine Warteliste', desc: 'Anreise in 3 Tagen möglich statt Monaten Wartezeit' },
                { title: 'Oft günstiger als das Heim', desc: 'Gerade im Taunus mit seinen hohen Heimkosten' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="unser-einsatzgebiet-im-hochtaunuskreis" titel="Unser Einsatzgebiet im Hochtaunuskreis">
            <Text>Wir sind im ganzen Kreis im Einsatz: <a href="/24h-pflege-bad-homburg" className="text-pm-taupe underline underline-offset-2">Bad Homburg</a>,{' '} <strong>Oberursel</strong>, <strong>Königstein</strong>, <strong>Kronberg</strong>,{' '} <strong>Friedrichsdorf</strong>, <strong>Steinbach</strong> — und genauso im Usinger Land:{' '} <strong>Usingen</strong>, <strong>Neu-Anspach</strong>, <strong>Wehrheim</strong>,{' '} <strong>Schmitten</strong>, <strong>Grävenwiesbach</strong>. Auch{' '} <a href="/24h-pflege-eschborn" className="text-pm-taupe underline underline-offset-2">Eschborn</a> und{' '} <a href="/24h-pflege-frankfurt" className="text-pm-taupe underline underline-offset-2">Frankfurt</a>{' '} haben eigene Seiten.</Text>
          </Abschnitt>

          <Abschnitt id="was-kostet-das-und" titel="Was kostet das — und was zahlt die Pflegekasse dazu?">
            <Text>Eine 24h-Betreuung kostet über Primundus <strong>ab 2.150 Euro im Monat</strong> — abhängig davon, ob eine oder zwei Personen betreut werden, wie mobil Ihre Angehörigen sind und ob nachts Hilfe nötig ist. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei Pflegegrad 3{' '}<strong>ab ca. 923 Euro</strong> selbst zu tragen. Gerade im Hochtaunuskreis, wo Heimplätze besonders teuer sind, rechnet sich das Zuhausebleiben doppelt.</Text>
            <RechnerKasten src="ort-hochtaunuskreis" />
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-im-hochtaunuskreis" titel="Polnische Betreuungskräfte im Hochtaunuskreis">
            <Text>Wer im Hochtaunuskreis nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Sie kommen aus Polen und sind im gesamten Kreisgebiet im Einsatz.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Der Kostenvergleich fällt im Hochtaunuskreis deutlich aus: Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro Eigenanteil. Ein Heimplatz kostet in Hessen im ersten Jahr im Schnitt rund 3.230 Euro im Monat — und die vertraute Wohnung bleibt dabei auf der Strecke.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Polnische Betreuungskräfte — das Entsendemodell erklärt</a>.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause in Hochtaunuskreis ausmacht">
            <Text>34,0 Prozent der Wohnungen wurden zwischen 1970 und 1989 gebaut, in Hessen 25,5 Prozent. Gut jeder vierte Haushalt in Hochtaunuskreis besteht nur aus Menschen ab 65 — in Hessen 23,1 Prozent. Wenn dort nachts etwas passiert, ist niemand da, der es mitbekommt. Das ist der Fall, für den eine Betreuungskraft im Haushalt gedacht ist.</Text>
            <Text>Hochtaunuskreis ist älter als das Land: 12,6 Prozent der Einwohner sind 75 Jahre oder älter — das sind 30.010 Menschen, in Hessen sind es 10,5 Prozent. Die durchschnittliche Wohnung misst 106,2 Quadratmeter und damit rund 8 Quadratmeter mehr als im Schnitt von Hessen (98,3).</Text>
            <Text>Altbau vor 1950 macht in Hochtaunuskreis 13,9 Prozent des Bestands aus, in Hessen 20,4 Prozent. Mit 9,23 Euro Nettokaltmiete je Quadratmeter wohnt es sich in Hochtaunuskreis teurer als im Schnitt von Hessen (8,21 Euro).</Text>
            <Text>In Zahlen: 30.010 Menschen in Hochtaunuskreis sind 75 Jahre oder älter, und es gibt 116.461 Wohnungen in 55.882 Gebäuden. Ob darunter eine ist, in der eine Betreuungskraft ein eigenes Zimmer bekommt, entscheidet sich nicht an der Statistik, sondern an Ihrem Grundriss — und das klären wir vorab.</Text>
            <Text>Was davon auf Ihre Situation zutrifft, klären wir vor jeder Entscheidung — insbesondere die Frage nach dem eigenen Zimmer für die Betreuungskraft. Und lassen Sie sich unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos, neutral und kommt auf Wunsch zu Ihnen nach Hause.</Text>
            <p className="text-[15px] leading-[1.6] text-pm-body/70">Zahlen zu Wohnen und Haushalten: Zensus 2022, Statistische Ämter des Bundes und der Länder, Stichtag 15. Mai 2022.</p>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-hochtaunuskreis" titel="Einzugsgebiet Hochtaunuskreis">
            <NearbyCities current="hochtaunuskreis" />
          </Abschnitt>

          <OrtWerkzeuge ort={'Hochtaunuskreis'} land={'Hessen'} altbau={41.8} miete={9.23} />


          <OrtStimmen


            ort={'Hochtaunuskreis'}

            stimmen={DIREKT_ERHALTEN.filter((b) => ['k-20260605-daniel', 'k-20260327-marco'].includes(b.id))}


          />



          <Abschnitt id="haeufige-fragen-aus-der" titel="Häufige Fragen aus der Region">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand ohneBewertungen />
    </>
  )
}
