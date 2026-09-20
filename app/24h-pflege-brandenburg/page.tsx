import type { Metadata } from 'next'
import { OrtWerkzeuge } from '@/components/orte/OrtWerkzeuge'
import { KontaktBand } from '@/components/ArticleCTA'
import { CitiesOfRegion } from '@/components/CityIndex'
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
  { id: 'was-ist-24h-pflege', title: "Was ist 24h-Pflege — und was unterscheidet sie von allem anderen?" },
  { id: 'fuer-wen-ist-24h', title: "Für wen ist 24h-Pflege die richtige Wahl?" },
  { id: 'was-macht-eine-betreuungskraft', title: "Was macht eine Betreuungskraft — und was ergänzt der Pflegedienst?" },
  { id: 'kosten-und-kassenzuschuesse-in', title: "Kosten & Kassenzuschüsse in Brandenburg 2026" },
  { id: 'polnische-betreuungskraefte-in-brandenburg', title: "Polnische Betreuungskräfte in Brandenburg" },
  { id: 'was-die-pflege-zu', title: "Was die Pflege zu Hause in Brandenburg ausmacht" },
  { id: 'einzugsgebiet-brandenburg', title: "Einzugsgebiet Brandenburg" },
  { id: 'werkzeuge', title: "Was es in Brandenburg kostet, und was die Pflegekasse dazugibt" },
  { id: 'so-arbeiten-wir', title: "So arbeiten wir" },
  { id: 'haeufige-fragen-24h-pflege', title: "Häufige Fragen — 24h-Pflege in Brandenburg" },
]

export const metadata: Metadata = {
  title: '24-Stunden-Pflege in Brandenburg: Preis sofort sehen',
  description: 'In Brandenburg zieht die Betreuungskraft bei Ihnen ein: Haushalt, Körperpflege, nachts bei Bedarf. Keine Vermittlungsgebühr, täglich kündbar.',
  alternates: { canonical: 'https://primundus.de/24h-pflege-brandenburg' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: '24h-Pflege Brandenburg | Primundus',
    description: 'Geprüfte 24h-Betreuungskraft in Brandenburg. Täglich kündbar, rechtssicher, startklar.',
    url: 'https://primundus.de/24h-pflege-brandenburg',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'website',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://primundus.de/24h-pflege-brandenburg#service',
    name: 'Primundus — 24h-Pflege Brandenburg',
    serviceType: '24-Stunden-Betreuung zu Hause',
    description: '24h-Betreuungskräfte in Brandenburg. Rechtssicher, täglich kündbar, startklar.',
    url: 'https://primundus.de/24h-pflege-brandenburg',
    provider: { '@id': 'https://primundus.de/#organization' },
    areaServed: { '@type': 'State', name: 'Brandenburg' },
    },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24h-Pflege Brandenburg', item: 'https://primundus.de/24h-pflege-brandenburg' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Warum sind Heimplätze in Brandenburg so knapp?',
        acceptedAnswer: { '@type': 'Answer', text: 'Weil das Angebot nicht mitgewachsen ist. Zwischen 2013 und 2023 hat sich die Zahl der Pflegebedürftigen in Brandenburg verdoppelt — rund 111.100 Menschen mehr —, während die Zahl der Dauerpflegeplätze um knapp sechs Prozent zunahm; 2023 ist sie erstmals gesunken. Brandenburg hat dadurch den niedrigsten Heimanteil aller Bundesländer (11,1 Prozent) und zugleich die wenigsten Plätze je Ältere (39 je 1.000 ab 65, Bund 47). Das Land nennt in seinem Pflegebericht zwei Gründe: stark gestiegene Eigenanteile und ein Angebot, das wegen fehlenden Personals zurückgeht. Besonders eng ist es in der Uckermark, in Elbe-Elster und in Ostprignitz-Ruppin.' },
      },
      {
        '@type': 'Question',
        name: 'Was kostet eine 24h-Pflegekraft in Brandenburg?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — oft günstiger als ein Heimplatz in Brandenburg (rund 3.020 €/Monat) oder Berlin (rund 3.100 €/Monat, vdek 07/2026).' },
      },
      {
        '@type': 'Question',
        name: 'Wie schnell kann eine 24h-Pflegekraft in Brandenburg starten?',
        acceptedAnswer: { '@type': 'Answer', text: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller. Primundus ist mit eigenen Betreuungskräften in ganz Brandenburg — auch in ländlichen Regionen.' },
      },
      {
        '@type': 'Question',
        name: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
      },
      {
        '@type': 'Question',
        name: 'Ist 24h-Pflege über Primundus in Brandenburg rechtssicher?',
        acceptedAnswer: { '@type': 'Answer', text: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
      },
    ],
  },
]

const FRAGEN = [
  { q: 'Warum sind Heimplätze in Brandenburg so knapp?', a: 'Weil das Angebot nicht mitgewachsen ist. Zwischen 2013 und 2023 hat sich die Zahl der Pflegebedürftigen in Brandenburg verdoppelt — rund 111.100 Menschen mehr —, während die Zahl der Dauerpflegeplätze um knapp sechs Prozent zunahm; 2023 ist sie erstmals gesunken. Brandenburg hat dadurch den niedrigsten Heimanteil aller Bundesländer (11,1 Prozent) und zugleich die wenigsten Plätze je Ältere (39 je 1.000 ab 65, Bund 47). Das Land nennt in seinem Pflegebericht zwei Gründe: stark gestiegene Eigenanteile und ein Angebot, das wegen fehlenden Personals zurückgeht. Besonders eng ist es in der Uckermark, in Elbe-Elster und in Ostprignitz-Ruppin.' },
  { q: 'Was kostet eine 24h-Pflegekraft in Brandenburg?', a: 'Ab 2.150 €/Monat über Primundus, dazu An- und Abreise mit 125 € je Strecke. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei PG 3 ab ca. 923 €/Monat — oft günstiger als ein Heimplatz in Brandenburg (rund 3.020 €/Monat) oder Berlin (rund 3.100 €/Monat, vdek 07/2026).' },
  { q: 'Wie schnell kann eine 24h-Pflegekraft in Brandenburg starten?', a: 'Eine Anreise ist schon in 3 Tagen möglich. Preis und Betreuungskräfte sehen Sie sofort online — ein Beratungsgespräch ist möglich, aber keine Voraussetzung. In dringenden Situationen geht es oft schneller. Primundus ist mit eigenen Betreuungskräften in ganz Brandenburg — auch in ländlichen Regionen.' },
  { q: 'Was ist der Unterschied zu einem ambulanten Pflegedienst?', a: 'Ein ambulanter Dienst kommt 1–3 Mal täglich und geht wieder. Eine 24h-Betreuungskraft lebt im Haushalt — ist bei Bedarf auch nachts da, führt den gesamten Haushalt und bietet bei Demenz oder hohem Pflegebedarf die einzige wirklich durchgehende Lösung.' },
  { q: 'Ist 24h-Pflege über Primundus in Brandenburg rechtssicher?', a: 'Vollständig. Entsendemodell mit A1-Bescheinigung aus EU-Heimatland — kein eigenes Arbeitsverhältnis, keine deutschen Sozialabgaben. Primundus arbeitet seit 20 Jahren ausschließlich in diesem Modell: null Rechtsprobleme für Kundenfamilien in 60.000+ Betreuungen.' },
  { q: 'Ist in einer Wohnung in Brandenburg Platz für eine Betreuungskraft?', a: 'Sie braucht ein eigenes, abschließbares Zimmer — ein Bad teilen Sie sich in der Regel. Eine Wohnung in Brandenburg hat im Schnitt 88,5 m², 27,4 % sind kleiner als 60 m². Meist lässt sich ein Zimmer frei machen, häufig das ehemalige Kinder- oder Arbeitszimmer. 86,7 % der Wohnungen in Brandenburg liegen in Ein- oder Zweifamilienhäusern; dort bietet sich oft eine ganze Etage an.' },
  { q: 'Was kostet ein Heimplatz statt Betreuung zu Hause?', a: 'In Deutschland insgesamt zahlen Heimbewohner im ersten Jahr im Schnitt rund 3.364 € Eigenanteil im Monat (vdek, Juli 2026). Zu Hause bleiben bei Pflegegrad 3 ab ca. 923 € — nach Pflegegeld, anteiligem Entlastungsbudget und Steuerermäßigung. Das sind rund 2.441 € Unterschied im Monat, 29.292 € im Jahr.' },
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
            { label: 'Brandenburg' },
          ]}
          augenbraue="24-Stunden-Pflege in Brandenburg"
          titel="24h-Pflege Brandenburg — Betreuungskraft zuhause"
          einleitung={<>Das Haus am Stadtrand von Potsdam, die Wohnung in Berlin, das Grundstück in der Uckermark: Rund um die Hauptstadt wohnen viele Eltern, deren Kinder mitten im Berliner Alltag stecken. Eine Betreuungskraft von Primundus zieht mit ein, wenn allein leben nicht mehr geht — bei Bedarf auch nachts da, im vertrauten Zuhause. Täglich kündbar, rechtssicher, Anreise in 3 Tagen möglich.</>}
          aktualisiert="28. August 2026"
          lesezeit="6 Min."
          blick={[
            'Preis bei Primundus: ab 2.150 €/Monat',
            'Ihr Eigenanteil bei Pflegegrad 3: ab ca. 923 €/Monat',
            'Pflegeheim Brandenburg: Eigenanteil Ø 2100–2600 €/Monat',
            'Täglich kündbar, keine Vermittlungsgebühr',
            'Anreise in 3 Tagen möglich',
          ]}
          blickTitel="Brandenburg auf einen Blick"
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist-24h-pflege" titel="Was ist 24h-Pflege — und was unterscheidet sie von allem anderen?">
            <Text>Bei der 24h-Pflege lebt eine Betreuungskraft dauerhaft im Haushalt. Sie ist bei Bedarf auch nachts da — nicht nur für zwei Stunden täglich wie ein ambulanter Dienst, und nicht in einer fremden Einrichtung wie im Pflegeheim. Das eigene Zuhause bleibt erhalten. Der gewohnte Alltag auch.</Text>
            <Punkte
              punkte={[
                { title: 'Eigenes Zuhause', desc: 'Vertraute Umgebung bleibt — kein Heimumzug' },
                { title: '1:1-Betreuung', desc: 'Eine Kraft, ein Mensch — keine wechselnden Gesichter' },
                { title: 'Nachts im Haus', desc: 'Da, wenn nachts Hilfe gebraucht wird' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="fuer-wen-ist-24h" titel="Für wen ist 24h-Pflege die richtige Wahl?">
            <Text>Viele Familien stehen irgendwann vor demselben Moment: Man merkt, dass es so nicht mehr geht — aber ein Pflegeheim fühlt sich falsch an. Genau für diese Situation ist die 24h-Betreuung zuhause die Antwort.</Text>
            <Punkte
              punkte={[
                { title: 'Selbstständigkeit lässt nach', desc: 'Alltägliches gelingt nicht mehr zuverlässig alleine — Anziehen, Kochen, Waschen, Orientierung' },
                { title: 'Familie kann nicht immer da sein', desc: 'Beruf, eigene Kinder, Entfernung — Angehörige wollen helfen, aber nicht rund um die Uhr' },
                { title: 'Pflegeheim ist keine Option', desc: 'Das eigene Zuhause, die gewohnten Möbel, der Garten — das soll bleiben' },
                { title: 'Nächtliche Unsicherheit', desc: 'Stürze, Toilettengänge, Orientierungslosigkeit — nachts ist niemand da' },
                { title: 'Demenz oder Orientierungsprobleme', desc: 'Vertraute Ansprechpartnerin nötig — keine wechselnden Gesichter' },
                { title: 'Nach Krankenhausaufenthalt', desc: 'Nach OP oder Schlaganfall: Wochen intensiver Unterstützung überbrücken' },
              ]}
            />
            <Kasten augenbraue="Wann 24h-Pflege alleine nicht ausreicht">
              <Text>Bei intensivem medizinischem Versorgungsbedarf arbeitet die Betreuungskraft in Kombination mit einem ambulanten Pflegedienst. Primundus koordiniert diese Zusammenarbeit auf Wunsch — so bleibt das Zuhause auch bei höherem Bedarf die Option.</Text>
            </Kasten>
            <Text>Nicht sicher ob 24h-Pflege die richtige Lösung ist? Primundus berät kostenlos und ehrlich — auch wenn das Ergebnis eine andere Empfehlung ist.</Text>
          </Abschnitt>

          <Abschnitt id="was-macht-eine-betreuungskraft" titel="Was macht eine Betreuungskraft — und was ergänzt der Pflegedienst?">
            <Gegenueber
              seiten={[
                { titel: 'Betreuungskraft übernimmt', ton: 'gruen', punkte: ['Körperpflege — Waschen, Ankleiden, Zahnpflege', 'Kochen — frisch, nach Vorlieben und Diät', 'Haushalt — Putzen, Einkaufen, Wäsche', 'Mobilisierung, Spaziergänge, Begleitung', 'Gesellschaft und Begleitung im Alltag', 'Medikamentenerinnerung', 'Arzt- und Therapietermine begleiten', 'Nachts im Haus — da, wenn Hilfe gebraucht wird'] },
                { titel: 'Ambulanter Pflegedienst ergänzt', ton: 'taupe', punkte: ['Injektionen (Insulin, Blutverdünner)', 'Verbandswechsel, Wundversorgung', 'Katheterversorgung', 'Ernährung über Magensonde', 'Beatmungspflege', 'Komplexe medizinische Versorgung'] },
              ]}
            />
            <Text><strong className="font-bold text-pm-ink">Beide gemeinsam machen häusliche Pflege auch bei hohem Bedarf möglich.</strong> Primundus koordiniert auf Wunsch die Zusammenarbeit mit einem ambulanten Pflegedienst.</Text>
          </Abschnitt>

          <Abschnitt id="kosten-und-kassenzuschuesse-in" titel="Kosten & Kassenzuschüsse in Brandenburg 2026">
            <Tabelle
              titel="Kostenbeispiel — Pflegegrad 3 in Brandenburg"
              zeilen={[
                ['Kosten Primundus', 'ab 2.150 €/Monat'],
                ['− Pflegegeld PG 3', '− 599 €/Monat'],
                ['− Entlastungsbudget (anteilig)', '− ca. 295 €/Monat'],
                ['− Steuerermäßigung (20 %, bis 4.000 €/Jahr)', '− ca. 333 €/Monat'],
                [<strong key="e">Ihr Eigenanteil</strong>, <strong key="w">ab ca. 923 €/Monat</strong>],
              ]}
              betont={1}
              fuss="Eine Person, Werte aus unserem Kostenrechner, zzgl. An- und Abreise 125 € je Strecke · Pflegeheim Brandenburg: Eigenanteil Ø 2100–2600 €/Monat — 24h-Pflege zuhause ist oft günstiger und erhält das Zuhause"
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
            <RechnerKasten src="land-brandenburg" />
          </Abschnitt>

          <Abschnitt id="polnische-betreuungskraefte-in-brandenburg" titel="Polnische Betreuungskräfte in Brandenburg">
            <Text>Wer in Brandenburg nach einer polnischen Pflegekraft sucht, meint fast immer dasselbe: jemanden, der im Haushalt lebt und bei Bedarf auch nachts da ist. Genau das leisten unsere Betreuungskräfte. Die meisten kommen aus Polen, einige aus Rumänien oder Bulgarien — und sie sind in ganz Brandenburg im Einsatz, in der Großstadt wie im kleinsten Dorf.</Text>
            <Kasten titel="Angestellt statt vermittelt">
              <Text>Das ist der Unterschied, der im Alltag zählt: Bei Primundus sind die Betreuungskräfte fest angestellt. Wir reichen sie nicht an Sie weiter, und Sie werden nicht zum Arbeitgeber. Die Kraft arbeitet mit A1-Bescheinigung im Entsendemodell in Deutschland, Ihr Vertrag läuft mit uns. Für Sie heißt das: keine Lohnabrechnung, keine Sozialabgaben, keine Arbeitgeberhaftung. Und wenn eine Kraft ausfällt, organisieren wir den Ersatz — ohne Zusatzkosten, es fallen lediglich die An- und Abreisekosten an.</Text>
            </Kasten>
            <Text><strong className="text-pm-ink font-semibold">Was eine polnische Betreuungskraft kostet:</strong> ab 2.150 Euro im Monat, je nach Pflegesituation und Deutschkenntnissen. Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 Euro Eigenanteil — deutlich weniger als ein Heimplatz, der in Brandenburg im ersten Jahr im Schnitt rund 3.020 Euro im Monat kostet.</Text>
            <Text><strong className="text-pm-ink font-semibold">Wie gut sprechen die Betreuungskräfte Deutsch?</strong> Das ist die häufigste Frage, und wir beantworten sie vor der Entscheidung: Jede Kraft wird eingestuft, und das Sprachniveau steht im Profil — zusammen mit Erfahrung und Foto. Sie sehen also, wen Sie bekommen, bevor Sie sich festlegen. Bei vielen Anbietern erfahren Familien das erst nach Vertragsabschluss.</Text>
            <Text>Wie das Entsendemodell rechtlich funktioniert, welche Unterlagen dazugehören und wie schnell es geht, steht ausführlich hier: <a href="/pflegekraft-aus-polen" className="text-pm-taupe font-semibold hover:underline">Polnische Betreuungskräfte — das Entsendemodell erklärt</a>.</Text>
          </Abschnitt>

          <Abschnitt id="was-die-pflege-zu" titel="Was die Pflege zu Hause in Brandenburg ausmacht">
            <Text>Brandenburg ist bei der Heimpflege das Schlusslicht Deutschlands — und zwar nach beiden Maßstäben, die man anlegen kann.{' '} <strong className="text-pm-ink font-semibold">11,1 Prozent der Pflegebedürftigen leben im Heim, der niedrigste Anteil aller sechzehn Länder. Und es gibt hier auch tatsächlich am wenigsten Plätze: 39 je 1.000 Einwohner über 65 gegen 47 im Bund.</strong> Das ist wichtig, weil ein niedriger Anteil sonst oft nur ein Rechenergebnis ist. Hier nicht: Beide Zahlen sagen dasselbe.</Text>
            <Text>Wie es dazu kam, lässt sich an einem Jahrzehnt ablesen.{' '} <strong className="text-pm-ink font-semibold">Zwischen 2013 und 2023 hat sich die Zahl der Pflegebedürftigen in Brandenburg verdoppelt — ein Plus von rund 111.100 Menschen —, während die Zahl der Dauerpflegeplätze um knapp sechs Prozent wuchs.</strong> Der Anteil der stationär Versorgten fiel von 22,4 auf 10,9 Prozent, er hat sich also halbiert. 2023 ist die Platzzahl erstmals sogar gesunken. Das Land nennt die Gründe in seinem eigenen Pflegebericht beim Namen: stark gestiegene Eigenanteile und ein Angebot, das wegen fehlenden Personals zurückgeht.</Text>
            <Text>Brandenburg hat darauf geantwortet, statt es geschehen zu lassen: Bei den ambulanten Diensten je 1.000 Ältere liegt das Land bundesweit auf Platz eins, und{' '} <strong className="text-pm-ink font-semibold">17,1 Prozent aller Pflegeplätze sind Tagespflegeplätze — der höchste Wert Deutschlands</strong> (Bund 10,7 Prozent), eine Verdopplung seit 2013. Wer hier zu Hause bleibt, ist damit nicht automatisch allein.</Text>
            <Text>Ein Landesdurchschnitt hilft in Brandenburg allerdings wenig, weil das Land in zwei Hälften zerfällt. In der Prignitz sind 129 von 1.000 Einwohnern pflegebedürftig, in Potsdam 54 — mehr als das Doppelte.{' '} <strong className="text-pm-ink font-semibold">Am schärfsten trifft es die Uckermark: Sie hat die zweithöchste Pflegequote des Landes und zugleich die wenigsten Heimplätze — 30 je 1.000 Ältere, gegen 51 in Brandenburg an der Havel.</strong> Der Landesbericht spricht offen von „weißen Flecken auf der Landkarte", wo eine wohnortnahe stationäre Versorgung nicht immer sicherzustellen sei.</Text>
            <Text>Wie ernst die Lage ist, zeigt am besten die Landesplanung selbst.{' '} <strong className="text-pm-ink font-semibold">Der Landespflegeplan Brandenburgs stammt vom 1. Dezember 1995 und ist bis heute die geltende Fassung.</strong> Er beziffert den Bedarf in „Pflegestufen III und IV" — einem System, das seit dem 1. Januar 2017 nicht mehr existiert — und rechnet mit einem Land, das damals etwa ein Fünftel der heutigen Pflegebedürftigen hatte. Gesteuert wird faktisch über den Pakt für Pflege und den jährlichen Pflegebericht. Das Land schreibt dazu selbst, weder es noch die Kommunen noch die Pflegekassen könnten eine Planung rechtlich durchsetzen.</Text>
            <Text>Und die Personalfrage ist nicht kleiner geworden: Pflege ist inzwischen das größte Berufsfeld des Brandenburger Arbeitsmarktes, und das Land erwartet bis 2040 dennoch eine Lücke von über 6.000 Fachkräften. Für Familien heißt das nüchtern: Auf ein wachsendes Angebot zu warten, ist kein Plan.</Text>
            <p className="text-[15px] leading-[1.6] text-pm-body/70">Pflegezahlen: Statistisches Bundesamt und Amt für Statistik Berlin-Brandenburg, Pflegestatistik 2023 (Stichtag 15. Dezember 2023). Entwicklung, Kreiswerte, Personalprognose: Ministerium für Gesundheit und Soziales, „Daten und Fakten zur Pflege im Land Brandenburg", 6. Ausgabe, Dezember 2025. Landespflegeplan vom 1. Dezember 1995, Brandenburgisches Vorschriftensystem.</p>
          </Abschnitt>

          <Abschnitt id="einzugsgebiet-brandenburg" titel="Einzugsgebiet Brandenburg">
            <Text>Potsdam, Cottbus, Brandenburg an der Havel, Frankfurt (Oder), Eberswalde, Oranienburg, Neuruppin und alle weiteren Städte und Gemeinden in Brandenburg</Text>
            <CitiesOfRegion region="brandenburg" />
          </Abschnitt>

          <OrtWerkzeuge ort={'Brandenburg'} land={'Deutschland insgesamt'} altbau={48.2} miete={6.21} />


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

          <Abschnitt id="haeufige-fragen-24h-pflege" titel="Häufige Fragen — 24h-Pflege in Brandenburg">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
