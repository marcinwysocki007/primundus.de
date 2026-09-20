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
  { id: 'was-ist-24-stunden', title: "Was 24-Stunden-Betreuung in Oldenburg bedeutet" },
  { id: 'kosten-und-kassenzuschuesse-in', title: "Kosten & Kassenzuschüsse in Oldenburg 2026" },
  { id: 'polnische-betreuungskraefte-in-oldenburg', title: "Polnische Betreuungskräfte in Oldenburg" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause in Oldenburg ausmacht" },
  { id: 'einzugsgebiet-oldenburg', title: "Einzugsgebiet Oldenburg" },
  { id: 'werkzeuge', title: "Was es in Oldenburg kostet, und was die Pflegekasse dazugibt" },
  { id: 'so-arbeiten-wir', title: "So arbeiten wir" },
  { id: 'stimmen-vor-ort', title: "Familien aus Oldenburg über uns" },
  { id: 'haeufige-fragen-24h-pflege', title: "Häufige Fragen — 24h-Pflege in Oldenburg" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Oldenburg | 6× Testsieger',
  description: 'Betreuung zu Hause durch geprüfte Kräfte, die Sie vorab sehen – und Entlastung für Angehörige. Ihren Preis sehen Sie sofort online, mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-oldenburg' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege Oldenburg — Betreuungskraft zuhause | Primundus',
    description: 'Geprüfte 24h-Betreuungskraft in Oldenburg. Täglich kündbar, rechtssicher, startklar.',
    url: 'https://primundus.de/24h-pflege-oldenburg',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Oldenburg?', a: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Niedersachsen (Eigenanteil rund 3.010 €/Monat, vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Oldenburg starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
  { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
  { q: 'Ist 24h-Pflege über Primundus in Oldenburg rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
  { q: 'Ist in einer Oldenburger Wohnung Platz für eine Betreuungskraft?', a: 'Häufiger als in vielen anderen Städten. 81 Prozent der Gebäude in Oldenburg sind Ein- oder Zweifamilienhäuser, 69 Prozent stehen frei — der Bestand ist zudem jung, fast jede fünfte Wohnung wurde nach 2000 gebaut. Das Gästezimmer ist also oft schon vorhanden. Es gilt aber nicht überall: Rund 27 Prozent der Wohnungen haben unter 60 Quadratmeter, und nur 36,3 Prozent der Haushalte wohnen im Eigentum (Niedersachsen: 51,1). Notwendig ist ein eigenes, abschließbares Zimmer. Was Ihre Wohnung hergibt, klären wir vorab.' },
  { q: 'Wie ist die Pflegesituation in Oldenburg?', a: 'In Oldenburg leben 10.606 Menschen mit Pflegebedarf, 35.882 Einwohner sind über 65. Bemerkenswert ist der Heimanteil: Mit 13,3 Prozent liegt er unter dem niedersächsischen Wert von 14,5 Prozent und deutlich unter dem Landkreis Oldenburg (16,6 Prozent) — die Stadt trägt die Heimversorgung fürs Umland also nicht mit. Die häusliche Pflege entspricht mit 56,0 Prozent reinem Pflegegeld dem Landesschnitt. Die auf den ersten Blick niedrige Pflegequote (61 je 1.000 Einwohner gegenüber 76 im Land) liegt an der jungen Universitätsstadt, nicht an geringerem Bedarf.' },
  { q: 'Kommen die Betreuungskräfte auch in die äußeren Stadtbezirke?', a: 'Ja, und dort zahlt es sich besonders aus. Oldenburg ist zwar insgesamt dicht besiedelt, doch zwischen den Stadtbezirken liegt der Faktor 23: In Ziegelhof/Ehnern leben 44,8 Menschen je Hektar, in Neuenwege/Kloster Blankenburg 2,0 — knapp 2.000 Einwohner auf fast zehn Quadratkilometern, mitten im Stadtgebiet. Für einen ambulanten Dienst bedeuten Bornhorst, Etzhorn oder Neuenwege lange Fahrten für kurze Einsätze. Eine Betreuungskraft, die im Haus lebt, hat diese Wege nicht. Anreise und Preis sind überall gleich.' },
  { q: 'Welches Einzugsgebiet wird in Oldenburg bedient?', a: 'Oldenburg und Umland: Delmenhorst, Westerstede, Cloppenburg, Wildeshausen und alle Gemeinden im Landkreis Oldenburg und Ammerland' },
]

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-oldenburg#service',
    name: 'Primundus — 24h-Pflege Oldenburg',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte in Oldenburg. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-oldenburg',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'City', name: 'Oldenburg' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24h-Pflege Oldenburg', item: 'https://primundus.de/24h-pflege-oldenburg' },
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
            { label: 'Oldenburg' },
          ]}
          augenbraue="24-Stunden-Pflege in Oldenburg"
          titel="24-Stunden-Pflege und Betreuung in Oldenburg"
          einleitung={<>In Eversten, Osternburg oder Ofenerdiek wohnt man gern mit Garten und Fahrradweg vor der Tür — und möchte genau dort auch alt werden. Wenn allein leben nicht mehr geht, zieht eine Betreuungskraft von Primundus mit ein: bei Bedarf auch nachts da, im vertrauten Zuhause, auch im Ammerland und Umland. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>}
          aktualisiert="27. August 2026"
          lesezeit="6 Min."
          blick={[
            'Preis bei Primundus: ab 2.150 €/Monat',
            'Ihr Eigenanteil bei Pflegegrad 3: ab ca. 923 €/Monat',
            'Pflegeheim in Niedersachsen: Eigenanteil rund 3.010 €/Monat (vdek, 07/2026)',
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich',
          ]}
          blickTitel="Oldenburg auf einen Blick"
          person={<Ansprechpartnerin karte ort="Oldenburg" titel="Ihre Ansprechpartnerin für Oldenburg" />}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist-24-stunden" titel="Was 24-Stunden-Betreuung in Oldenburg bedeutet">
            <Text>
              Eine Betreuungskraft zieht bei Ihnen ein, führt den Haushalt, hilft bei Körperpflege und Alltag und ist bei Bedarf
              auch nachts da. Anders als beim ambulanten Dienst, der zweimal am Tag kommt und wieder geht. Und anders als im
              Heim, wo der Umzug ansteht. Das Zuhause in Oldenburg bleibt, der gewohnte Tagesablauf auch.
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

          <Abschnitt id="kosten-und-kassenzuschuesse-in" titel="Kosten & Kassenzuschüsse in Oldenburg 2026">
            <Tabelle
              titel="Kostenbeispiel — Pflegegrad 3 in Oldenburg"
              zeilen={[
                ['Kosten Primundus', 'ab 2.150 €/Monat'],
                ['− Pflegegeld PG 3', '− 599 €/Monat'],
                ['− Entlastungsbudget (anteilig)', '− ca. 295 €/Monat'],
                ['− Steuerermäßigung (20 %, bis 4.000 €/Jahr)', '− ca. 333 €/Monat'],
                [<strong key="e">Ihr Eigenanteil</strong>, <strong key="w">ab ca. 923 €/Monat</strong>],
              ]}
              betont={1}
              fuss="Eine Person, Werte aus unserem Kostenrechner, zzgl. An- und Abreise 125 € je Strecke · Pflegeheim in Niedersachsen: Eigenanteil rund 3.010 €/Monat (vdek, 07/2026) — 24h-Pflege zuhause ist oft günstiger und erhält das Zuhause"
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
            <RechnerKasten src="ort-oldenburg" />
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-in-oldenburg" titel="Polnische Betreuungskräfte in Oldenburg">
            <Text>Wer in Oldenburg nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Sie kommen aus Polen und sind in Oldenburg und im gesamten Umland im Einsatz.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Was eine polnische Betreuungskraft kostet:</strong> ab 2.150 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen. Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro Eigenanteil — deutlich weniger als ein Heimplatz, der hier im Schnitt rund 3.010 Euro im Monat kostet.</Text>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Polnische Betreuungskräfte — das Entsendemodell erklärt</a>.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause in Oldenburg ausmacht">
            <Text>Oldenburg kam durch den Krieg nahezu unbeschadet — 1,4 Prozent der Stadt wurden zerstört, 130 Wohnhäuser, die Innenstadt blieb stehen. Trotzdem hat Oldenburg heute weniger alte Wohnungen als Städte, die in Trümmern lagen: 16,0 Prozent stammen aus der Zeit vor 1950. Der Grund ist ein anderer. 1946 überschritt die Stadt durch den Zuzug von Flüchtlingen und Vertriebenen erstmals die 100.000-Einwohner-Marke, und was danach gebaut wurde, überwiegt den alten Bestand bei Weitem. Für die Pflege zu Hause ist das eine gute Nachricht: <strong className="text-pm-ink font-semibold">81 Prozent der Gebäude sind Ein- oder Zweifamilienhäuser, 69 Prozent stehen frei.</strong> Ein Zimmer für eine Betreuungskraft ist hier häufiger vorhanden als anderswo.</Text>
            <Text>Das gilt allerdings nicht für die ganze Stadt. Oldenburg ist mit rund 1.714 Einwohnern je Quadratkilometer dichter besiedelt, als das Bild der Einfamilienhäuser vermuten lässt, und zwischen den neun Stadtbezirken liegen Welten: Im Bezirk Ziegelhof/Ehnern leben 44,8 Menschen je Hektar, im Bezirk Neuenwege/Kloster Blankenburg 2,0 — knapp 2.000 Einwohner auf fast zehn Quadratkilometern, also Landkreis-Verhältnisse innerhalb der Stadtgrenze. Rund 27 Prozent der Wohnungen haben unter 60 Quadratmeter, und nur 36,3 Prozent der Haushalte wohnen im Eigentum, deutlich weniger als in Niedersachsen mit 51,1. Ob eine Betreuungskraft einziehen kann, hängt also auch hier am konkreten Grundriss.</Text>
            <Text>Die Pflegezahlen halten eine Überraschung bereit. In Oldenburg leben 10.606 Menschen mit Pflegebedarf. Der Anteil derer, die vollstationär im Heim versorgt werden, liegt mit 13,3 Prozent <em>unter</em> dem niedersächsischen Wert von 14,5 — und deutlich unter dem Landkreis Oldenburg mit 16,6 Prozent. Der sonst übliche Effekt, dass eine Stadt die Heimversorgung fürs Umland mitträgt, zeigt sich hier also nicht. Die häusliche Pflege entspricht mit 56,0 Prozent reinem Pflegegeld ziemlich genau dem Landesschnitt (55,4). Ein Hinweis zur Einordnung: Die niedrige Pflegequote der Stadt (61 je 1.000 Einwohner gegenüber 76 im Land) bedeutet keinen geringeren Bedarf — Oldenburg ist Universitätsstadt mit jüngerer Bevölkerung. 35.882 Menschen hier sind über 65.</Text>
            <Text>Medizinisch ist Oldenburg gut aufgestellt: Die Universitätsklinik für Geriatrie am Klinikum Oldenburg deckt die Akutversorgung ab, und mit der geriatrischen Rehabilitation im Reha-Zentrum gibt es die Anschlussbehandlung am selben Ort. Was nach der Entlassung kommt, ist trotzdem die Frage, an der es meistens hängt. Eine Betreuungskraft, die mit einzieht, ist nachts da, führt den Haushalt und macht es möglich, dass jemand in seinem eigenen Haus bleibt — auch draußen in Bornhorst oder Neuenwege, wo ein ambulanter Dienst weite Wege für wenige Termine fahren müsste. Lassen Sie sich vorher unabhängig beraten: Die Pflegeberatung nach § 7a SGB XI ist kostenlos, trägerunabhängig und kommt auf Wunsch zu Ihnen nach Hause.</Text>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-oldenburg" titel="Einzugsgebiet Oldenburg">
            <Text>Oldenburg und Umland: Delmenhorst, Westerstede, Cloppenburg, Wildeshausen und alle Gemeinden im Landkreis Oldenburg und Ammerland</Text>
            <NearbyCities current="oldenburg" />
          </Abschnitt>

          <OrtWerkzeuge ort={'Oldenburg'} land={'Niedersachsen'} altbau={41.0} miete={7.79} />


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

            ort={'Oldenburg'}

            herkunft="ort"

            stimmen={DIREKT_ERHALTEN.filter((b) => ['k-20260105-sven'].includes(b.id))}

          />


          <Abschnitt id="haeufige-fragen-24h-pflege" titel="Häufige Fragen — 24h-Pflege in Oldenburg">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
