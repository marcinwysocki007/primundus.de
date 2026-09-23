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
  { id: 'was-ist-24-stunden', title: "Was 24-Stunden-Betreuung in Reutlingen bedeutet" },
  { id: 'kosten-und-kassenzuschuesse-in', title: "Kosten & Kassenzuschüsse in Reutlingen 2026" },
  { id: 'polnische-betreuungskraefte-in-reutlingen', title: "Polnische Betreuungskräfte in Reutlingen" },
  { id: '24-stunden-pflege-im', title: "24-Stunden-Pflege im Landkreis Reutlingen" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause in Reutlingen ausmacht" },
  { id: 'einzugsgebiet-reutlingen', title: "Einzugsgebiet Reutlingen" },
  { id: 'werkzeuge', title: "Was es in Reutlingen kostet, und was die Pflegekasse dazugibt" },
  { id: 'so-arbeiten-wir', title: "So arbeiten wir" },
  { id: 'stimmen-vor-ort', title: "Familien aus Reutlingen über uns" },
  { id: 'haeufige-fragen-24h-pflege', title: "Häufige Fragen — 24h-Pflege in Reutlingen" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Reutlingen | 6× Testsieger | Primundus',
  description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Reutlingen in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-reutlingen' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24-Stunden-Pflege in Reutlingen | 6× Testsieger | Primundus',
    description: 'Geprüfte, verfügbare Betreuungskräfte und Preis direkt online sehen. Anreise in Reutlingen in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/24h-pflege-reutlingen',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const FRAGEN = [
  { q: 'Was kostet eine 24h-Pflegekraft in Reutlingen?', a: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — deutlich günstiger als ein Heimplatz in Baden-Württemberg (Eigenanteil rund 3.660 €/Monat, vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Reutlingen starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller.' },
  { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt zu festen Zeiten für einzelne Aufgaben. Eine 24h-Betreuungskraft lebt im Haushalt: Sie hilft bei Körperpflege und Alltag, ist bei Bedarf auch nachts da und versorgt den Haushalt mit. Bei Demenz zählt vor allem, dass es über Wochen dieselbe Person ist und niemand umziehen muss.' },
  { q: 'Ist 24h-Pflege über Primundus in Reutlingen rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
  { q: 'Kommt eine Betreuungskraft auch nach Gönningen oder Bronnweiler?', a: 'Ja, und gerade dort lohnt es sich besonders. Zwischen den bewohnten Ortskernen Reutlingens liegen rund 215 Höhenmeter — Mittelstadt am Neckar auf 320, Gönningen am Fuß des Albtraufs auf 521 Metern. Gönningen ist flächenmäßig gut halb so groß wie die gesamte Kernstadt, hat aber nur 3.902 Einwohner. Für ambulante Dienste bedeutet das lange Fahrwege zwischen wenigen Terminen; für eine Betreuungskraft, die im Haus lebt, spielt die Entfernung schlicht keine Rolle. Anreise und Preis sind in allen zwölf Stadtbezirken gleich.' },
  { q: 'Wie ist die Pflegesituation in Reutlingen und Umgebung?', a: 'Auffällig familiär. Von den 16.341 Pflegebedürftigen im Landkreis Reutlingen werden 9.895 ausschließlich von Angehörigen versorgt — 60,6 Prozent gegenüber 55,9 Prozent in Baden-Württemberg. Ambulante Dienste (13,6 statt 16,4 Prozent) und Heimplätze (12,9 statt 14,9 Prozent) liegen entsprechend unter dem Landeswert. Seit 2021 ist die Zahl der Pflegebedürftigen um 16,7 Prozent gestiegen. Die Statistik wird nur auf Kreisebene erhoben, für die Stadt allein gibt es keine eigenen Zahlen.' },
  { q: 'Welches Einzugsgebiet wird in Reutlingen bedient?', a: 'Reutlingen und Landkreis Reutlingen: Tübingen, Metzingen, Bad Urach, Münsingen und alle Gemeinden im Landkreis Reutlingen und Tübingen' },
  { q: 'Ist in einer Wohnung in Reutlingen Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Reutlingen hat im Schnitt 92,1 m², 22,2 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 79,2 % der Gebäude in Reutlingen sind Ein- oder Zweifamilienhäuser; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Baden-Württemberg zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.660 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause bleiben bei Pflegegrad 3 ab ca. 923 € — nach Pflegegeld, anteiligem Entlastungsbudget und Steuerermäßigung. Das sind rund 2.737 € Unterschied im Monat, 32.844 € im Jahr.' },
]

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-reutlingen#service',
    name: 'Primundus — 24h-Pflege Reutlingen',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte in Reutlingen. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-reutlingen',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'City', name: 'Reutlingen' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Regionen', item: 'https://primundus.de/regionen' },
      { '@type': 'ListItem', position: 3, name: 'Reutlingen', item: 'https://primundus.de/24h-pflege-reutlingen' },
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
            { label: 'Reutlingen' },
          ]}
          augenbraue="24-Stunden-Pflege in Reutlingen"
          titel="24-Stunden-Pflege und Betreuung in Reutlingen"
          einleitung={<>Am Fuß der Achalm bleibt man verwurzelt: das Haus in Betzingen, die Wohnung in Sondelfingen, der Blick auf die Alb. Damit das auch mit Pflegebedarf so bleibt, zieht eine Betreuungskraft von Primundus mit ein und ist bei Bedarf auch nachts da — 1:1, ohne Heimumzug. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>}
          aktualisiert="27. August 2026"
          lesezeit="6 Min."
          knopf={{ href: 'https://kostenrechner.primundus.de/?start=1&src=ort-reutlingen', text: 'Preis & Betreuungskräfte ansehen' }}
          knopfSchlicht
          blick={[
            'Preis bei Primundus: ab 2.150 €/Monat',
            'Ihr Eigenanteil bei Pflegegrad 3: ab ca. 923 €/Monat',
            'Pflegeheim in Baden-Württemberg: Eigenanteil rund 3.660 €/Monat (vdek, 07/2026)',
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich',
          ]}
          blickTitel="Reutlingen auf einen Blick"
          person={<AnsprechpartnerinGross ort="Reutlingen" />}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist-24-stunden" titel="Was 24-Stunden-Betreuung in Reutlingen bedeutet">
            <Text>
              Eine Betreuungskraft zieht bei Ihnen ein, hilft bei Körperpflege, beim Essen und im Alltag, versorgt den Haushalt mit und ist bei Bedarf
              auch nachts da. Anders als beim ambulanten Dienst, der zweimal am Tag kommt und wieder geht. Und anders als im
              Heim, wo der Umzug ansteht. Das Zuhause in Reutlingen bleibt, der gewohnte Tagesablauf auch.
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

          <Abschnitt id="kosten-und-kassenzuschuesse-in" titel="Kosten & Kassenzuschüsse in Reutlingen 2026">
            <Tabelle
              titel="Kostenbeispiel — Pflegegrad 3 in Reutlingen"
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
            <RechnerKasten src="ort-reutlingen" />
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-in-reutlingen" titel="Polnische Betreuungskräfte in Reutlingen">
            <Text>Wer in Reutlingen nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Sie kommen aus Polen und sind in Reutlingen und im gesamten Umland im Einsatz.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Was eine polnische Betreuungskraft kostet:</strong> ab 2.150 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen. Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro Eigenanteil — deutlich weniger als ein Heimplatz, der hier im Schnitt rund 3.660 Euro im Monat kostet.</Text>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Polnische Pflegekräfte — was sie kosten und wie es rechtlich läuft</a>.</Text>
          </Abschnitt>

          <Abschnitt id="24-stunden-pflege-im" titel="24-Stunden-Pflege im Landkreis Reutlingen">
            <Text>Unsere Betreuungskräfte ziehen in Reutlingen und im Landkreis Reutlingen ein — auch in den kleineren Gemeinden, in denen sonst kaum jemand anbietet. Die Anreise dauert überall gleich lang, der Preis ist derselbe.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause in Reutlingen ausmacht">
            <Text>Reutlingen ist zwei Städte in einer, und das fällt erst auf, wenn jemand pflegebedürftig wird. In der Kernstadt leben rund 70.700 Menschen auf 2.780 Hektar. Gönningen, der südlichste Stadtbezirk, ist mit 1.568 Hektar flächenmäßig gut halb so groß wie die gesamte Kernstadt — und hat 3.902 Einwohner. Zwischen den bewohnten Ortskernen liegen rund 215 Höhenmeter: Mittelstadt am Neckar auf 320 Metern, Gönningen am Fuß des Albtraufs auf 521. Wer dort oben alt wird, hat für jeden Weg — Arzt, Apotheke, Einkauf — eine andere Rechnung aufzumachen als jemand in der Innenstadt.</Text>
            <Text>Die Pflegestatistik gibt es nur für den Landkreis, nicht für die Stadt allein. Sie zeigt aber etwas, das kaum jemand erwartet: <strong className="text-pm-ink font-semibold">Von den 16.341 Pflegebedürftigen im Kreis werden 9.895 ausschließlich von Angehörigen versorgt — 60,6 Prozent, ganz ohne Pflegedienst.</strong> In Baden-Württemberg sind es 55,9 Prozent. Beide professionellen Formen liegen entsprechend darunter: ambulant 13,6 statt 16,4 Prozent, vollstationär 12,9 statt 14,9. Hier wird also häufiger als sonst im Land allein gepflegt — von Töchtern, Söhnen und Ehepartnern, die das über Jahre neben Beruf und eigenem Haushalt stemmen. Dass die Zahl der Pflegebedürftigen seit 2021 um 16,7 Prozent gestiegen ist, macht die Sache nicht leichter.</Text>
            <Text>Beim Wohnen spielt Reutlingen der 24-Stunden-Betreuung in die Hände — allerdings nicht überall. Knapp die Hälfte der Haushalte wohnt im Eigentum (49,3 Prozent), und in den zwölf Stadtbezirken stehen überwiegend Ein- und Zweifamilienhäuser. Da ist das Gästezimmer meist schon vorhanden. In der Kernstadt sieht es anders aus: Ein Drittel aller Wohnungen liegt in Häusern mit sieben oder mehr Parteien, gut jede fünfte hat unter 60 Quadratmeter. Die durchschnittliche Reutlinger Wohnung misst 92 Quadratmeter und damit sieben weniger als der Landesschnitt. Ob eine Betreuungskraft einziehen kann, entscheidet sich also nicht an der Stadt, sondern am Stadtbezirk.</Text>
            <Text>Eine gute Nachricht gibt es seit Kurzem: Die akutgeriatrischen Betten liegen erst seit Mai 2023 im Klinikum am Steinenberg in der Stadt selbst — vorher musste man dafür in die Ermstalklinik nach Bad Urach. Wer nach einem Sturz oder Schlaganfall aus der Altersmedizin entlassen wird, steht damit zwar näher an zu Hause, aber vor derselben Frage: Wie geht es in der eigenen Wohnung weiter, wenn die Familie schon am Limit ist?</Text>
            <Text>Genau an dieser Stelle setzt eine Betreuungskraft an, die mit einziehen kann: Sie ist nachts da, führt den Haushalt und nimmt den Angehörigen die Dauerverantwortung ab — ohne dass jemand aus Gönningen oder Bronnweiler wegziehen muss. Bevor Sie sich festlegen, lassen Sie sich unabhängig beraten. Die Pflegeberatung ist kostenlos, neutral und kommt auf Wunsch zu Ihnen nach Hause (§ 7a SGB XI).</Text>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-reutlingen" titel="Einzugsgebiet Reutlingen">
            <Text>Reutlingen und Landkreis Reutlingen: Tübingen, Metzingen, Bad Urach, Münsingen und alle Gemeinden im Landkreis Reutlingen und Tübingen</Text>
            <NearbyCities current="reutlingen" />
          </Abschnitt>

          <OrtWerkzeuge ort={'Reutlingen'} land={'Baden-Württemberg'} altbau={45.9} miete={8.05} />


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

            ort={'Reutlingen'}

            stimmen={DIREKT_ERHALTEN.filter((b) => ['k-20250905-christine'].includes(b.id))}

          />


          <Abschnitt id="haeufige-fragen-24h-pflege" titel="Häufige Fragen — 24h-Pflege in Reutlingen">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand ohneBewertungen />
    </>
  )
}
