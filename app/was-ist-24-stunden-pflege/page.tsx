import type { Metadata } from 'next'
import { Sicher } from '@/components/Sicher'
import dynamic from 'next/dynamic'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, DunklerAbschnitt, Fragen, HakenListe, Kasten, MehrDazu, Punkte, RatgeberKopf, RatgeberRumpf, Tabelle, Text, Vorspann,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { KurzAntwort } from '@/components/KurzAntwort'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('was-ist-24-stunden-pflege', '21. August 2026')

const SECTIONS = [
  { id: 'leistungen',  title: 'Was leistet eine Betreuungskraft?' },
  { id: 'verbreitung', title: 'Wie verbreitet ist 24h-Pflege?' },
  { id: 'kosten',      title: 'Kosten & Kassenzuschüsse 2026' },
  { id: 'rechtliches', title: 'Ist 24h-Pflege legal?' },
  { id: 'wann',        title: 'Wann ist 24h-Pflege die richtige Wahl?' },
  { id: 'faq',         title: 'Häufige Fragen' },
]

// Links in den „Wann"-Punkten wie die Links der MehrDazu-Zeilen der Vorlage
const LINK = 'text-pm-taupe-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors'

const GrafikPflegestatistik = dynamic(
  () => import('@/components/charts/GrafikPflegestatistik').then(m => ({ default: m.GrafikPflegestatistik })),
  {
    loading: () => (
      <div className="my-10 h-[480px] bg-pm-paper rounded-2xl border border-pm-line animate-pulse" />
    ),
    ssr: false,
  }
)

const GrafikKostenvergleich = dynamic(
  () => import('@/components/charts/GrafikKostenvergleich').then(m => ({ default: m.GrafikKostenvergleich })),
  {
    loading: () => (
      <div className="my-10 h-[420px] bg-pm-paper rounded-2xl border border-pm-line animate-pulse" />
    ),
    ssr: false,
  }
)

// Preis aus dem Snippet entfernt (23.09.2026, Martin: „keine kosten in den snippets").
// Der Betrag bleibt im Text der Seite und im Rechner — nur das Suchergebnis nennt ihn nicht.
export const metadata: Metadata = {
  title: 'Was ist 24-Stunden-Pflege? Definition, Kosten & Ablauf',
  description: 'Eine Betreuungskraft lebt im Haushalt und ist die meistgenutzte Alternative zum Pflegeheim. Was sie leistet, was sie kostet und wie sie abläuft.',
  alternates: {
    canonical: 'https://primundus.de/was-ist-24-stunden-pflege',
  },
  openGraph: {
    title: 'Was ist 24-Stunden-Pflege? | Primundus',
    description: 'Eine Betreuungskraft lebt im Haushalt und ist die meistgenutzte Alternative zum Pflegeheim. Was sie leistet, was sie kostet und wie sie abläuft.',
    url: 'https://primundus.de/was-ist-24-stunden-pflege',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
    images: [{ url: '/images/primundus_logo_header.webp' }],
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Was ist 24-Stunden-Pflege?',
    description: 'Definition, Leistungen, Kosten und aktuelle Kassenzuschüsse 2026 der 24h-Pflege in Deutschland.',
    author: { '@id': PERSON_MARTA_ID },
    publisher: {
      '@type': 'Organization',
      name: 'Primundus',
      logo: 'https://primundus.de/images/primundus_logo_header.webp',
    },
    datePublished: '2026-04-24',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/was-ist-24-stunden-pflege',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://primundus.de/ratgeber' },
      { '@type': 'ListItem', position: 3, name: 'Was ist 24-Stunden-Pflege?', item: 'https://primundus.de/was-ist-24-stunden-pflege' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was versteht man unter 24-Stunden-Pflege?',
        acceptedAnswer: { '@type': 'Answer', text: 'Eine Betreuungskraft zieht in den Haushalt des Pflegebedürftigen ein und ist bei Bedarf auch nachts vor Ort — für Grundpflege, Haushaltsführung und Gesellschaft. Die monatlichen Kosten beginnen bei 2.150 Euro. Sie ist die meistgenutzte Alternative zum Pflegeheim.' },
      },
      {
        '@type': 'Question',
        name: 'Was kostet 24-Stunden-Pflege 2026?',
        acceptedAnswer: { '@type': 'Answer', text: 'Die monatlichen Kosten beginnen bei 2.150 Euro. Das Pflegegeld (bis 990 €/Monat bei Pflegegrad 5) und das Entlastungsbudget (3.539 €/Jahr) der Pflegekasse senken die Eigenkosten erheblich, dazu sind 20 % der Kosten als haushaltsnahe Dienstleistung steuerlich absetzbar. Bei Pflegegrad 3 bleiben so ab ca. 923 € im Monat.' },
      },
      {
        '@type': 'Question',
        name: 'Was ist das Entlastungsbudget und was hat sich 2026 geändert?',
        acceptedAnswer: { '@type': 'Answer', text: 'Seit 1. Juli 2025 gibt es ein gemeinsames Entlastungsbudget von 3.539 Euro pro Jahr. Es fasst die frühere Verhinderungspflege und Kurzzeitpflege zusammen. 2026 ist das erste vollständige Kalenderjahr, in dem dieser Betrag ohne Übergangsregelungen nutzbar ist. Wichtig: Ungenutztes Budget verfällt am 31. Dezember.' },
      },
      {
        '@type': 'Question',
        name: 'Ist 24-Stunden-Pflege legal?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ja — über eine seriöse Agentur im Entsendemodell ist 24h-Pflege legal. Die Betreuungskraft ist im Heimatland sozialversichert und mit A1-Bescheinigung in Deutschland tätig. Scheinselbstständigkeit ist strafbar und kann zu Nachzahlungen führen.' },
      },
      {
        '@type': 'Question',
        name: 'Was ist der Unterschied zwischen 24h-Pflege und Pflegeheim?',
        acceptedAnswer: { '@type': 'Answer', text: 'Im Pflegeheim beträgt der Eigenanteil im Bundesdurchschnitt 3.364 Euro pro Monat (Quelle: vdek-Auswertung, Stand 1. Juli 2026) — ohne individuelle Betreuung und ohne die vertraute Umgebung. Bei der 24h-Pflege bleibt der Mensch zuhause, erhält persönliche Eins-zu-eins-Betreuung und zahlt oft vergleichbare oder geringere Gesamtkosten.' },
      },
      {
        '@type': 'Question',
        name: 'Wie schnell kann eine 24h-Betreuung beginnen?',
        acceptedAnswer: { '@type': 'Answer', text: 'Mit Primundus ist eine Anreise in 3 Tagen möglich: Preis und passende Betreuungskräfte sehen Sie sofort online, Bewerbungen kommen am selben Werktag — täglich kündbar, taggenaue Abrechnung.' },
      },
      {
        '@type': 'Question',
        name: 'Für welche Pflegesituationen ist 24h-Pflege geeignet?',
        acceptedAnswer: { '@type': 'Answer', text: '24h-Pflege ist geeignet ab Pflegegrad 2 — für Demenz, Alzheimer, nach Schlaganfall oder Operation, bei Parkinson, MS, Herzinsuffizienz, eingeschränkter Mobilität und Sturzrisiko.' },
      },
      {
        '@type': 'Question',
        name: 'Was ist der Unterschied zwischen Verhinderungspflege und Entlastungsbudget?',
        acceptedAnswer: { '@type': 'Answer', text: 'Seit Juli 2025 gibt es kein getrenntes Budget mehr für Verhinderungspflege und Kurzzeitpflege — beide wurden im gemeinsamen Entlastungsbudget von 3.539 Euro pro Jahr zusammengeführt. Der monatliche Entlastungsbetrag von 131 Euro ist davon getrennt und kann zusätzlich genutzt werden.' },
      },
    ],
  },
]

export default function WasIst24StundenPflege() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      <ArticleProgressBar />
      <div className="lg:hidden">
        <ArticleTOC sections={SECTIONS} />
      </div>

      <div className="bg-pm-paper">
        <RatgeberKopf
          pfad={[
            { label: "Startseite", href: "/" },
            { label: "Ratgeber", href: "/ratgeber" },
            { label: "Was ist 24-Stunden-Pflege?" },
          ]}
          augenbraue="Ratgeber 24-Stunden-Pflege"
          titel="Was ist 24-Stunden-Pflege?"
          einleitung=""
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="8 Min."
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Vorspann>
            <KurzAntwort frage="Andere Namen für dasselbe Modell">
              24-Stunden-Pflege wird auch „Live-in-Betreuung“ oder „Betreuung in häuslicher Gemeinschaft“ genannt: Eine Betreuungskraft wohnt im Haushalt und unterstützt rund um den Alltag. Gemeint ist Betreuung und Grundpflege — nicht medizinische Behandlungspflege und keine 24-stündige Arbeitszeit am Stück.
            </KurzAntwort>
            <Text>
              24-Stunden-Pflege bedeutet: Eine Betreuungskraft zieht in den Haushalt des Pflegebedürftigen ein und ist bei Bedarf auch nachts vor Ort — für Grundpflege, Haushaltsführung und Gesellschaft. Die monatlichen Kosten beginnen bei 2.150 Euro. Sie ist die meistgenutzte Alternative zum Pflegeheim und ermöglicht es, in der vertrauten Umgebung zu bleiben.
            </Text>
            <Kasten augenbraue="Auf einen Blick">
              <HakenListe punkte={[
                'Betreuungskraft lebt dauerhaft im Haushalt — bei Bedarf auch nachts vor Ort',
                'Kosten bei Primundus: ab 2.150 €/Monat, je nach Pflegebedarf',
                'Pflegekasse zahlt: Pflegegeld bis 990 €/Monat + Entlastungsbudget 3.539 €/Jahr (seit Juli 2025)',
                'Geeignet bei Demenz, nach Schlaganfall, bei Parkinson und vielen weiteren Situationen',
                'Rechtlich sicher über Entsendemodell mit A1-Bescheinigung',
                'Anreise in 3 Tagen möglich — täglich kündbar',
              ]} />
            </Kasten>
          </Vorspann>

          <DunklerAbschnitt
            id="leistungen"
            titel="Was leistet eine 24-Stunden-Betreuungskraft?"
            einleitung="Eine 24h-Betreuungskraft übernimmt Grundpflege, Haushaltsführung und soziale Betreuung — alles was der pflegebedürftige Mensch nicht mehr alleine schafft. Sie ist keine Krankenschwester, aber deutlich mehr als eine Haushaltshilfe."
            punkte={[
              { title: 'Grundpflege', desc: 'Körperhygiene, Ankleiden, Nahrungsaufnahme, Lagerung und Mobilisierung. Bei Menschen mit Demenz, nach Schlaganfall oder mit eingeschränkter Beweglichkeit bildet das den Kern des Alltags.' },
              { title: 'Haushaltsführung', desc: 'Kochen, Einkaufen, Reinigen, Wäsche, Begleitung zu Arztterminen. Die Betreuungskraft führt den Haushalt selbständig und entlastet damit Angehörige vollständig.' },
              { title: 'Betreuung und Gesellschaft', desc: 'Gespräche, Spaziergänge, Tagesstruktur — besonders bei Demenz ist menschliche Nähe entscheidend für das Wohlbefinden.' },
            ]}
          >
            <Text>
              <strong>Nicht enthalten:</strong> Medizinische Behandlungspflege (z.B. Verbandswechsel, Injektionen) darf die Betreuungskraft nur mit nachgewiesener Qualifikation leisten. In diesen Fällen arbeitet sie mit einem ambulanten Pflegedienst zusammen.
            </Text>
            <MehrDazu
              label="Alle Leistungen im Detail:"
              links={[{ href: "/leistungen", text: "Was Primundus leistet — vollständige Übersicht" }]}
            />
          </DunklerAbschnitt>

          <Abschnitt id="verbreitung" titel="Wie viele Menschen nutzen 24h-Pflege in Deutschland?">
            <Text>
              Schätzungsweise 300.000 bis 400.000 Haushalte nutzen aktuell eine 24-Stunden-Betreuung durch Kräfte aus EU-Ländern — bei einem Marktpotenzial von über 5 Millionen häuslich versorgten Pflegebedürftigen ist das erst der Anfang.
            </Text>
            <Text>
              Ende 2024 waren rund 6 Millionen Menschen in Deutschland pflegebedürftig. <strong>86 Prozent</strong> werden zu Hause versorgt — nur 14 Prozent in Pflegeheimen. Allein seit 2021 stieg die Zahl der Pflegebedürftigen um 15 Prozent.
            </Text>
            <Tabelle
              titel="Pflegestatistik Deutschland — Stand 2024"
              zeilen={[
                ['Pflegebedürftige gesamt', '~6,0 Millionen'],
                ['Davon zu Hause versorgt', '86 % — ca. 5,1 Mio.'],
                ['Davon im Pflegeheim', '14 % — ca. 0,9 Mio.'],
                ['Haushalte mit 24h-Betreuungskraft', '300.000–400.000 (Schätzung)'],
                ['Wachstum seit 2021', '+15 %'],
                ['Prognose bis 2050', 'über 7 Millionen'],
              ]}
              fuss="Quelle: Statistisches Bundesamt (Destatis), Pflegestatistik 2024"
            />
            <Sicher name="Grafik Pflegestatistik">
              <GrafikPflegestatistik />
            </Sicher>
          </Abschnitt>

          <Abschnitt id="kosten" titel="Was kostet 24-Stunden-Pflege — und was zahlt die Kasse 2026?">
            <Text>
              24-Stunden-Pflege kostet bei Primundus ab 2.150 Euro im Monat — je nach Pflegesituation und Deutschkenntnissen der Betreuungskraft. Das Pflegeheim kostet im Vergleich durchschnittlich <strong>3.364 Euro Eigenanteil pro Monat</strong> — ohne persönliche Eins-zu-eins-Betreuung und ohne die vertraute Umgebung.
            </Text>
            <MehrDazu
              label="Alle Preise und Zuschüsse:"
              links={[{ href: "/kosten", text: "Was 24-Stunden-Pflege kostet: Preise, Zuschüsse und Eigenanteil" }]}
            />
            <MehrDazu
              label="Vollständiger Kostenvergleich:"
              links={[{ href: "/24h-pflege-vs-pflegeheim-kosten", text: "24h-Pflege vs. Pflegeheim — was ist günstiger?" }]}
            />
            <Sicher name="Grafik Kostenvergleich">
              <GrafikKostenvergleich />
            </Sicher>
            <Kasten augenbraue="Neu 2026 — Entlastungsbudget" titel="3.539 Euro pro Jahr — flexibel für Verhinderungs- und Kurzzeitpflege" ton="gruen">
              <HakenListe punkte={[
                'Ein Budget statt zwei — flexibel für Verhinderungs- und Kurzzeitpflege nutzbar',
                'Vorpflegezeit entfällt — die frühere 6-Monats-Voraussetzung ist abgeschafft',
                'Pflegegeld läuft weiter — während der Nutzung wird es zur Hälfte weitergezahlt',
                'Verfallsfrist beachten — ungenutztes Budget verfällt am 31. Dezember',
              ]} />
            </Kasten>
            <MehrDazu
              label="Wie das Entlastungsbudget kombiniert wird:"
              links={[{ href: "/finanzierung", text: "Finanzierung der 24h-Pflege — alle Zuschüsse 2026" }]}
            />
            <MehrDazu
              label="Steuerlich absetzbar:"
              links={[{ href: "/pflege-steuerlich-absetzen", text: "Pflege steuerlich absetzen — was geht 2026?" }]}
            />
          </Abschnitt>

          <Abschnitt id="rechtliches" titel="Ist 24-Stunden-Pflege legal?">
            <Text>
              Ja — 24-Stunden-Pflege ist legal, wenn die Betreuungskraft über eine seriöse Agentur im Entsendemodell beschäftigt wird. Die <strong>A1-Bescheinigung</strong> weist nach, dass sie in ihrem Heimatland sozialversichert ist und EU-rechtlich in Deutschland tätig sein darf. Es gibt drei Beschäftigungsmodelle:
            </Text>
            <Punkte
              punkte={[
                { title: 'Entsendemodell (empfohlen)', desc: 'Die Kraft ist bei einer Agentur im Heimatland angestellt und wird für 6–8 Wochen entsandt. Für die Familie: kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben, klare Vertragslage.' },
                { title: 'Direktanstellung', desc: 'Die Familie stellt selbst als Arbeitgeberin an. Rechtlich eindeutig — aber mit erheblichem Aufwand (Lohnabrechnung, Sozialversicherung, Urlaubsvertretung).' },
                { title: 'Scheinselbstständigkeit (unbedingt vermeiden)', desc: 'Wer eine Kraft "freiberuflich" beauftragt, die faktisch weisungsgebunden im Haushalt lebt, riskiert Nachzahlungen von Sozialabgaben und Bußgelder.' },
              ]}
            />
            <MehrDazu
              label="Alle Modelle im Vergleich:"
              links={[{ href: "/pflegekraft-legal-beschaeftigen", text: "Pflegekraft legal beschäftigen — die 3 Wege" }]}
            />
            <MehrDazu
              label="Was im Vertrag stehen muss:"
              links={[{ href: "/pflegevertrag-aufsetzen", text: "Pflegevertrag aufsetzen — worauf achten?" }]}
            />
          </Abschnitt>

          <Abschnitt id="wann" titel="Wann ist 24h-Pflege die richtige Wahl?">
            <Text>
              24h-Pflege ist die richtige Wahl, wenn der pflegebedürftige Mensch in seiner vertrauten Umgebung bleiben möchte — unabhängig vom Pflegegrad.
            </Text>
            <Punkte
              punkte={[
                { title: 'Demenz und Alzheimer', desc: <>Tagesstruktur, Orientierung und konstante Bezugsperson — eine feste Betreuungskraft zuhause bietet das besser als jede Einrichtung.<br /><a href="/demenz-pflege-zuhause" className={LINK}>Demenzpflege zuhause — was ist möglich?</a></> },
                { title: 'Nach Schlaganfall oder Operation', desc: <>Kontinuierliche Unterstützung in der Reha-Phase ermöglicht Entlassung aus dem Krankenhaus ohne Umzug ins Heim.<br /><a href="/pflege-nach-op" className={LINK}>Pflege nach OP — Organisation und Kosten</a></> },
                { title: 'Parkinson, MS, Herzinsuffizienz', desc: <>Chronische Erkrankungen mit schwankendem Tagesverlauf — eine feste Kraft kennt die Muster und reagiert richtig.<br /><a href="/parkinson-pflege-zuhause" className={LINK}>Parkinson Pflege zuhause</a></> },
                { title: 'Sturzgefahr und eingeschränkte Mobilität', desc: <>Prävention, Mobilisierung, sichere Begleitung — rund um die Uhr.<br /><a href="/sturzpraevention-senioren" className={LINK}>Sturzprävention bei Senioren</a></> },
              ]}
            />
            <MehrDazu
              label="Direkter Vergleich:"
              links={[{ href: "/24h-pflege-vs-pflegeheim-kosten", text: "24h-Pflege vs. Pflegeheim — was passt besser?" }]}
            />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen zur 24-Stunden-Pflege">
            <Fragen
              fragen={[
                { q: 'Was versteht man unter 24-Stunden-Pflege?', a: '24-Stunden-Pflege bedeutet, dass eine Betreuungskraft dauerhaft im Haushalt des Pflegebedürftigen lebt und bei Bedarf auch nachts vor Ort ist — für Grundpflege, Haushaltsführung und soziale Betreuung. Sie ist die intensivste Form der häuslichen Pflege und die beliebteste Alternative zum Pflegeheim in Deutschland.' },
                { q: 'Was kostet 24-Stunden-Pflege 2026?', a: 'Die monatlichen Kosten beginnen bei 2.150 Euro. Das Pflegegeld (bis 990 €/Monat bei Pflegegrad 5) und das Entlastungsbudget (3.539 €/Jahr) der Pflegekasse senken die Eigenkosten erheblich, dazu sind 20 % der Kosten als haushaltsnahe Dienstleistung steuerlich absetzbar. Bei Pflegegrad 3 bleiben so ab ca. 923 € im Monat.' },
                { q: 'Was ist das Entlastungsbudget und was hat sich 2026 geändert?', a: 'Seit 1. Juli 2025 gibt es ein gemeinsames Entlastungsbudget von 3.539 Euro pro Jahr. Es fasst die frühere Verhinderungspflege und Kurzzeitpflege zusammen. 2026 ist das erste vollständige Kalenderjahr, in dem dieser Betrag ohne Übergangsregelungen nutzbar ist. Die Vorpflegezeit von 6 Monaten entfällt. Wichtig: Ungenutztes Budget verfällt am 31. Dezember.' },
                { q: 'Ist 24-Stunden-Pflege legal?', a: 'Ja — über eine seriöse Agentur im Entsendemodell ist 24h-Pflege absolut legal. Die A1-Bescheinigung belegt die Sozialversicherung im Heimatland. Scheinselbstständigkeit ist dagegen strafbar und kann zu hohen Nachzahlungen von Sozialabgaben führen.' },
                { q: 'Was ist der Unterschied zwischen 24h-Pflege und Pflegeheim?', a: 'Im Pflegeheim beträgt der Eigenanteil im Bundesdurchschnitt 3.364 Euro pro Monat — ohne individuelle Eins-zu-eins-Betreuung und ohne die vertraute Umgebung. Bei der 24h-Pflege bleibt der Mensch zuhause, erhält persönliche Betreuung rund um die Uhr und zahlt oft vergleichbare oder geringere Gesamtkosten.' },
                { q: 'Wie schnell kann eine 24h-Betreuung beginnen?', a: 'Mit Primundus ist eine Anreise in 3 Tagen möglich: Preis und passende Betreuungskräfte sehen Sie sofort online, Bewerbungen kommen am selben Werktag — täglich kündbar, taggenaue Abrechnung.' },
                { q: 'Für welche Pflegesituationen ist 24h-Pflege geeignet?', a: '24h-Pflege ist geeignet ab Pflegegrad 2 — für Demenz, Alzheimer, nach Schlaganfall oder Operation, bei Parkinson, MS, Herzinsuffizienz, eingeschränkter Mobilität und Sturzrisiko. Sie funktioniert überall dort, wo kontinuierliche Präsenz wichtiger ist als stationäre medizinische Versorgung.' },
                { q: 'Was ist der Unterschied zwischen Verhinderungspflege und Entlastungsbudget?', a: 'Seit Juli 2025 gibt es kein getrenntes Budget mehr für Verhinderungspflege und Kurzzeitpflege — beide wurden im gemeinsamen Entlastungsbudget von 3.539 Euro pro Jahr zusammengeführt. Der monatliche Entlastungsbetrag von 131 Euro ist davon getrennt und kann zusätzlich für anerkannte Betreuungsleistungen eingesetzt werden.' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="was-ist-24-stunden-pflege" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
