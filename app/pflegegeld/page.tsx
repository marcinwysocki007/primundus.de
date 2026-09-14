import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, DunklerAbschnitt, Fragen, Kasten, MehrDazu, Punkte, RatgeberKopf, RatgeberRumpf, Schritte, Tabelle, Text,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('pflegegeld', '25. April 2026')

const SECTIONS = [
  { id: 'was-ist', title: 'Was ist Pflegegeld?' },
  { id: 'betraege', title: 'Beträge 2026 — alle Pflegegrade' },
  { id: 'anspruch', title: 'Wer hat Anspruch?' },
  { id: 'kombinieren', title: 'Pflegegeld kombinieren' },
  { id: 'beantragen', title: 'Pflegegeld beantragen' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflegegeld 2026 — Beträge, Anspruch & Kombinationen',
  description: 'Pflegegeld 2026: 347 € (PG 2) bis 990 € (PG 5) pro Monat. Wer Anspruch hat, wie es mit 24h-Pflege kombiniert wird und was sich 2026 geändert hat.',
  alternates: { canonical: 'https://primundus.de/pflegegeld' },
  openGraph: {
    title: 'Pflegegeld 2026 — Beträge & Anspruch | Primundus',
    description: 'Pflegegeld 2026: 347–990 €/Monat je nach Pflegegrad. Alle Beträge, Anspruchsvoraussetzungen und Kombinationsmöglichkeiten.',
    url: 'https://primundus.de/pflegegeld',
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
    headline: 'Pflegegeld 2026 — Beträge, Anspruch & Kombinationen',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/pflegegeld',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Finanzierung', item: 'https://primundus.de/finanzierung' },
      { '@type': 'ListItem', position: 3, name: 'Pflegegeld 2026', item: 'https://primundus.de/pflegegeld' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Wie hoch ist das Pflegegeld 2026?',
        acceptedAnswer: { '@type': 'Answer', text: 'Pflegegeld 2026: Pflegegrad 2 = 347 €/Monat, Pflegegrad 3 = 599 €/Monat, Pflegegrad 4 = 800 €/Monat, Pflegegrad 5 = 990 €/Monat. Die Beträge sind identisch zu 2025 — keine Erhöhung für 2026. Nächste Dynamisierung frühestens Januar 2028.' },
      },
      {
        '@type': 'Question',
        name: 'Wer hat Anspruch auf Pflegegeld?',
        acceptedAnswer: { '@type': 'Answer', text: 'Anspruch auf Pflegegeld haben Pflegebedürftige ab Pflegegrad 2, die zu Hause gepflegt werden — überwiegend durch Angehörige, Freunde oder andere nicht-professionelle Pflegepersonen. Bei Pflegeheimaufenthalt entfällt der Anspruch.' },
      },
      {
        '@type': 'Question',
        name: 'Kann man Pflegegeld und 24h-Pflege kombinieren?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ja — Pflegegeld wird auch dann ausgezahlt wenn eine 24h-Betreuungskraft im Haushalt lebt, solange die Pflege überwiegend durch private Personen (Angehörige) sichergestellt ist. Die Betreuungskraft unterstützt, die Familie bleibt Hauptpflegeperson.' },
      },
      {
        '@type': 'Question',
        name: 'Was hat sich beim Pflegegeld 2026 geändert?',
        acceptedAnswer: { '@type': 'Answer', text: 'Das Pflegegeld selbst hat sich 2026 nicht geändert — die 4,5%-Erhöhung galt ab Januar 2025 und bleibt unverändert. Was sich 2026 änderte: Das Entlastungsbudget (3.539 €/Jahr) ist seit Juli 2025 als gemeinsames Budget für Verhinderungs- und Kurzzeitpflege nutzbar — 2026 erstmals ohne Übergangsregelungen.' },
      },
      {
        '@type': 'Question',
        name: 'Was passiert mit dem Pflegegeld bei Krankenhausaufenthalt?',
        acceptedAnswer: { '@type': 'Answer', text: 'Bei vollstationärem Krankenhausaufenthalt wird das Pflegegeld für die ersten 4 Wochen weitergezahlt. Ab der 5. Woche entfällt es, da die Pflege durch das Krankenhaus übernommen wird.' },
      },
      {
        '@type': 'Question',
        name: 'Muss Pflegegeld versteuert werden?',
        acceptedAnswer: { '@type': 'Answer', text: 'Nein — Pflegegeld ist steuerfrei. Weder beim Pflegebedürftigen noch bei Angehörigen, die das Geld als Anerkennung erhalten, wird es als Einkommen angerechnet.' },
      },
    ],
  },
]

export default function Pflegegeld() {
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
            { label: "Startseite", href: "/" },
            { label: "Finanzierung", href: "/finanzierung" },
            { label: "Pflegegeld 2026" },
          ]}
          augenbraue="Ratgeber Pflegegeld"
          titel="Pflegegeld 2026 — Beträge, Anspruch & Kombinationen"
          einleitung="Pflegegeld 2026 beträgt 347 € (Pflegegrad 2) bis 990 € (Pflegegrad 5) pro Monat — identisch zu 2025. Die letzte Erhöhung um 4,5 % galt ab Januar 2025, die nächste Dynamisierung kommt frühestens Januar 2028. Neu seit Juli 2025: Das Entlastungsbudget von 3.539 €/Jahr für Verhinderungs- und Kurzzeitpflege — 2026 erstmals vollständig nutzbar."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="6 Min."
          blick={[
                'Pflegegeld 2026: 347 € (PG 2) · 599 € (PG 3) · 800 € (PG 4) · 990 € (PG 5)',
                'Keine Erhöhung 2026 — nächste Dynamisierung frühestens Januar 2028',
                'Anspruch ab Pflegegrad 2 bei häuslicher Pflege durch Angehörige',
                'Steuerfrei — weder beim Pflegebedürftigen noch bei Angehörigen',
                'Kombinierbar mit Sachleistungen, Entlastungsbetrag und 24h-Pflege',
                'Beratungspflicht: PG 2–3 halbjährlich · PG 4–5 vierteljährlich',
              ]}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="was-ist" titel="Was ist Pflegegeld?">
            <Text>
              Pflegegeld ist eine monatliche Geldleistung der Pflegeversicherung für Pflegebedürftige, die zu Hause von Angehörigen oder anderen privaten Personen gepflegt werden. Es dient als finanzielle Anerkennung für die Pflegeperson — der Pflegebedürftige erhält das Geld und gibt es in der Regel weiter.
            </Text>
            <Text>
              Im Gegensatz zu Pflegesachleistungen (die direkt an den Pflegedienst gezahlt werden) kann Pflegegeld frei verwendet werden. Es gibt keine Zweckbindung — die Pflegeperson entscheidet selbst wie sie das Geld einsetzt.
            </Text>
            <Punkte
              punkte={[
                { title: 'Pflegegeld vs. Pflegesachleistungen', desc: 'Pflegegeld bekommt die pflegebedürftige Person ausgezahlt und gibt es an Angehörige weiter. Pflegesachleistungen gehen direkt an den ambulanten Pflegedienst. Beides lässt sich anteilig kombinieren.' },
                { title: 'Pflegegeld vs. Entlastungsbetrag', desc: 'Der Entlastungsbetrag (131 €/Monat) ist zusätzlich zum Pflegegeld — er ist zweckgebunden für anerkannte Betreuungs- und Entlastungsangebote. Beide laufen parallel.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="betraege" titel="Pflegegeld Beträge 2026 — alle Pflegegrade">
            <Text>
              Die Beträge 2026 sind identisch zu 2025. Die letzte Erhöhung (+4,5 %) galt ab 1. Januar 2025. Eine weitere Anpassung ist gesetzlich frühestens für den 1. Januar 2028 vorgesehen.
            </Text>
            <Tabelle
              titel="Pflegegeld & Leistungen 2026 — vollständige Tabelle"
              kopf={['Pflegegrad', 'Pflegegeld/Monat', 'Sachleistungen/Monat', '+ Entlastungsbetrag', 'Gesamt möglich']}
              zeilen={[
                ['PG 1', '—', '—', '131 €', '131 €'],
                ['PG 2', '347 €', '796 €', '131 €', '478 €'],
                ['PG 3', '599 €', '1.497 €', '131 €', '730 €'],
                ['PG 4', '800 €', '1.859 €', '131 €', '931 €'],
                ['PG 5', '990 €', '2.299 €', '131 €', '1.121 €'],
              ]}
              betont={1}
              fuss="Quelle: GKV-Spitzenverband, SGB XI · Stand 2026 · Identisch zu 2025 · Nächste Dynamisierung frühestens Jan. 2028"
            />
            <Kasten augenbraue="Zusätzlich — Entlastungsbudget 2026" titel="3.539 €/Jahr für Verhinderungs- und Kurzzeitpflege" ton="gruen">
              <Text>Seit Juli 2025 gibt es ein gemeinsames Jahresbudget für Verhinderungs- und Kurzzeitpflege. 2026 ist das erste volle Jahr ohne Übergangsregelungen. Gilt für PG 2–5, flexibel aufteilbar. Wichtig: verfällt am 31. Dezember — nicht genutztes Budget geht verloren.</Text>
            </Kasten>
            <MehrDazu
              label="Entlastungsbudget im Detail:"
              links={[{ href: "/verhinderungspflege", text: "Verhinderungspflege & Entlastungsbudget 2026" }]}
            />
          </Abschnitt>

          <Abschnitt id="anspruch" titel="Wer hat Anspruch auf Pflegegeld?">
            <Text>
              Pflegegeld erhalten Pflegebedürftige, die alle drei dieser Voraussetzungen erfüllen:
            </Text>
            <Schritte
              schritte={[
                { title: 'Pflegegrad 2 oder höher', desc: 'Bei Pflegegrad 1 gibt es kein Pflegegeld — nur den Entlastungsbetrag (131 €/Monat). Ab PG 2 besteht Anspruch.' },
                { title: 'Häusliche Pflege', desc: 'Der Pflegebedürftige lebt zu Hause — nicht in einem Pflegeheim. Bei vollstationärer Heimunterbringung entfällt das Pflegegeld.' },
                { title: 'Pflege durch private Personen', desc: 'Die Pflege wird überwiegend durch Angehörige, Freunde oder andere nicht-professionelle Pflegepersonen sichergestellt — nicht ausschließlich durch einen Pflegedienst.' },
              ]}
            />
            <Tabelle
              titel="Wichtige Regeln beim Pflegegeld"
              zeilen={[
                ['Beratungseinsatz PG 2–3', 'Alle 6 Monate Pflicht — sonst Kürzung'],
                ['Beratungseinsatz PG 4–5', 'Alle 3 Monate Pflicht — sonst Kürzung'],
                ['Krankenhausaufenthalt', '4 Wochen weitergezahlt, danach entfällt es'],
                ['Steuerpflicht', 'Nein — Pflegegeld ist steuerfrei'],
                ['Anrechnung auf Bürgergeld', 'Nein — wird nicht als Einkommen angerechnet'],
                ['Auszahlung', 'Monatlich im Voraus direkt an den Pflegebedürftigen'],
              ]}
            />
            <MehrDazu
              label="Pflegegrad beantragen:"
              links={[{ href: "/pflegegrad-beantragen", text: "Pflegegrad beantragen — Schritt für Schritt" }]}
            />
          </Abschnitt>

          <DunklerAbschnitt
            id="kombinieren"
            titel="Pflegegeld kombinieren — alle Möglichkeiten"
            einleitung="Pflegegeld lässt sich mit mehreren anderen Leistungen kombinieren — das maximiert die Gesamtentlastung deutlich."
            punkte={[
              { title: 'Pflegegeld + Entlastungsbetrag', desc: 'Der Entlastungsbetrag (131 €/Monat) läuft vollständig parallel zum Pflegegeld — keine Anrechnung, keine Kürzung. Bei PG 3 zusammen: 730 €/Monat.' },
              { title: 'Pflegegeld + Pflegesachleistungen (Kombinationsleistung)', desc: 'Wer teilweise einen Pflegedienst nutzt, bekommt das Pflegegeld anteilig. Beispiel PG 3: 50 % Sachleistungen genutzt → noch 50 % Pflegegeld (ca. 299 €) erhalten. Zusammen oft mehr als nur Pflegegeld.' },
              { title: 'Pflegegeld + 24h-Betreuungskraft', desc: 'Auch bei einer 24h-Kraft aus einer Agentur wird Pflegegeld ausgezahlt — solange Angehörige als Hauptpflegeperson anerkannt sind und die Beratungseinsätze wahrgenommen werden.' },
              { title: 'Pflegegeld + Entlastungsbudget', desc: '3.539 €/Jahr (Entlastungsbudget) läuft zusätzlich zum Pflegegeld — für Verhinderungs- und Kurzzeitpflege wenn Angehörige Urlaub brauchen oder ausfallen.' },
            ]}
          >
            <MehrDazu
              label="Alle Zuschüsse optimal nutzen:"
              links={[{ href: "/finanzierung", text: "Finanzierung der 24h-Pflege — vollständige Übersicht" }, { href: "/eigenanteil-24h-pflege-senken", text: "Eigenanteil senken — alle Möglichkeiten" }]}
            />
          </DunklerAbschnitt>

          <Abschnitt id="beantragen" titel="Pflegegeld beantragen — so geht es">
            <Text>
              Pflegegeld wird nicht separat beantragt — es ist automatisch Teil des Pflegegradantrags. Wer einen Pflegegrad bekommt und zu Hause gepflegt wird, wählt zwischen Pflegegeld, Sachleistungen oder der Kombination.
            </Text>
            <Schritte
              schritte={[
                { title: 'Pflegegrad beantragen', desc: 'Bei der Pflegekasse (Krankenkasse) formlos schriftlich oder telefonisch. Leistungen gelten rückwirkend ab Antragsdatum.' },
                { title: 'MD-Begutachtung', desc: 'Der Medizinische Dienst kommt nach Hause und stellt den Pflegegrad fest.' },
                { title: 'Leistungsart wählen', desc: 'Nach dem Bescheid: Pflegegeld, Sachleistungen oder Kombination wählen. Die Pflegekasse berät — Beratung nach § 7a SGB XI ist kostenlos und Pflicht.' },
                { title: 'Beratungseinsätze wahrnehmen', desc: 'PG 2–3: halbjährlich · PG 4–5: vierteljährlich. Wird ein Termin versäumt, kann die Pflegekasse das Pflegegeld kürzen oder aussetzen.' },
              ]}
            />
            <MehrDazu
              label="Schritt für Schritt:"
              links={[{ href: "/pflegegrad-beantragen", text: "Pflegegrad beantragen — vollständige Anleitung" }]}
            />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen zum Pflegegeld 2026">
            <Fragen
              fragen={[
                { q: 'Wie hoch ist das Pflegegeld 2026?', a: 'PG 2: 347 €/Monat · PG 3: 599 €/Monat · PG 4: 800 €/Monat · PG 5: 990 €/Monat. Identisch zu 2025 — keine Erhöhung für 2026. Nächste Dynamisierung frühestens Januar 2028.' },
                { q: 'Wer hat Anspruch auf Pflegegeld?', a: 'Pflegebedürftige ab Pflegegrad 2, die zu Hause von Angehörigen oder privaten Pflegepersonen gepflegt werden. Bei Pflegeheimaufenthalt entfällt der Anspruch.' },
                { q: 'Was hat sich beim Pflegegeld 2026 geändert?', a: 'Das Pflegegeld selbst hat sich nicht geändert. Neu ist das Entlastungsbudget (3.539 €/Jahr seit Juli 2025), das Verhinderungs- und Kurzzeitpflege in einem flexiblen Topf zusammenfasst — 2026 erstmals vollständig ohne Übergangsregelungen nutzbar.' },
                { q: 'Kann man Pflegegeld und 24h-Pflege kombinieren?', a: 'Ja — Pflegegeld wird auch bei einer 24h-Betreuungskraft ausgezahlt, wenn Angehörige als Hauptpflegepersonen anerkannt sind und die Beratungseinsätze wahrgenommen werden.' },
                { q: 'Was passiert mit dem Pflegegeld bei Krankenhausaufenthalt?', a: 'Die ersten 4 Wochen wird Pflegegeld weitergezahlt. Ab der 5. Woche entfällt es, weil die Pflege vom Krankenhaus übernommen wird.' },
                { q: 'Muss Pflegegeld versteuert werden?', a: 'Nein — Pflegegeld ist vollständig steuerfrei, weder beim Pflegebedürftigen noch bei Angehörigen die es erhalten.' },
              ]}
            />
          </Abschnitt>


          <Weiterlesen aktuell="pflegegeld" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
