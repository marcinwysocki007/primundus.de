import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, Fragen, HakenListe, Kasten, Liste, MehrDazu, Punkte, RatgeberKopf, RatgeberRumpf, Tabelle, Text,
} from '@/components/vorlage/Ratgeber'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

// Kernseite Kosten in der Seitenvorlage (Musterseite Kernseiten, 17.09.2026).
// Zahlen wie im Kostenrechner (pricing_config/subsidies, gelesen 17.09.): Grundpreis 2.150 € für
// eine Person, Pflegegrad 5 +50 €; Eigenanteil = Preis − Pflegegeld − Entlastungsbudget/12 −
// Steuervorteil (20 %, bis 4.000 €/Jahr). Entlastungsbetrag (131 €) nie abziehen (Martin 14.09.).
// Kost und Logis nicht beziffern, An- und Abreise 125 € je Strecke (Martin 17.09.). Kein „ab"-Rechenbeispiel
// als Spanne: ein konkreter Fall, den genauen Preis zeigt der Rechner (Martin 17.09.).

const AKTUALISIERT = aktualisiertAm('kosten', '17. September 2026')
const RECHNER = 'https://kostenrechner.primundus.de/?start=1&src=apex-kosten'

const SECTIONS = [
  { id: 'kosten-uebersicht', title: 'Was kostet 24h-Pflege?' },
  { id: 'kassenzuschuesse', title: 'Kassenzuschüsse 2026' },
  { id: 'pflegegrad-kosten', title: 'Kosten nach Pflegegrad' },
  { id: 'polnische-pflegekraft', title: 'Polnische Pflegekraft' },
  { id: 'vergleich', title: 'Vergleich: 24h-Pflege vs. Pflegeheim' },
  { id: 'eigenanteil', title: 'Eigenanteil senken' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Kosten 24h-Pflege 2026 — Preise, Zuschüsse & Vergleich',
  description: '24-Stunden-Pflege ab 2.150 € im Monat. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei Pflegegrad 3 ab ca. 923 €. Alle Zahlen 2026.',
  alternates: { canonical: 'https://primundus.de/kosten' },
  openGraph: {
    title: 'Kosten 24h-Pflege 2026 | Primundus',
    description: '24-Stunden-Pflege ab 2.150 € im Monat. Mit Kassenzuschüssen und Steuerermäßigung bleiben bei Pflegegrad 3 ab ca. 923 €.',
    url: 'https://primundus.de/kosten',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
    images: [{ url: '/images/primundus_logo_header.webp' }],
  },
}

const FRAGEN = [
  { q: 'Was kostet 24-Stunden-Pflege im Monat?', a: 'Bei Primundus ab 2.150 € im Monat für eine Person. Der genaue Preis richtet sich nach der Situation, zum Beispiel Hilfe in der Nacht oder Deutschkenntnisse der Betreuungskraft. Dazu kommen An- und Abreise mit 125 € je Strecke; Kost und Logis stellen Sie. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei Pflegegrad 3 ab ca. 923 € im Monat.' },
  { q: 'Was kostet 24-Stunden-Pflege bei Pflegegrad 3?', a: 'Bei Pflegegrad 3 zahlt die Pflegekasse 599 € Pflegegeld und anteilig ca. 295 € aus dem Entlastungsbudget; die Steuerermäßigung bringt bis zu 333 € im Monat. Bei Kosten ab 2.150 € im Monat bleiben damit ab ca. 923 € selbst zu tragen.' },
  { q: 'Was kostet eine polnische Pflegekraft im Monat?', a: 'Eine polnische Betreuungskraft kostet bei Primundus ab 2.150 € im Monat für eine Person — angestellt bei Primundus, legal über das Entsendemodell mit A1-Bescheinigung. Bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 € im Monat.' },
  { q: 'Was kostet eine 24-Stunden-Pflegekraft?', a: 'Eine 24-Stunden-Pflegekraft kostet bei Primundus ab 2.150 € im Monat, abhängig von Deutschkenntnissen und Pflegebedarf. Darin enthalten sind Lohn und Sozialabgaben der Betreuungskraft sowie Ersatz bei Ausfall; dazu kommen An- und Abreise mit 125 € je Strecke. Kost und Logis stellen Sie.' },
  { q: 'Was zahlt die Pflegekasse bei 24h-Pflege?', a: 'Pflegegeld (347–990 € im Monat je nach Pflegegrad) und das Entlastungsbudget (3.539 € im Jahr für Verhinderungs- und Kurzzeitpflege). Bei Pflegegrad 3 sind das 599 € plus anteilig ca. 295 € im Monat. Den Entlastungsbetrag (131 € im Monat) zahlt die Kasse nur für anerkannte Alltagshilfen, in der Regel nicht für die Betreuungskraft.' },
  { q: 'Ist 24h-Pflege günstiger als ein Pflegeheim?', a: 'Oft ja — der Pflegeheim-Eigenanteil liegt bundesweit bei Ø 3.364 € im Monat (2026). Bei der 24-Stunden-Pflege bleiben bei Pflegegrad 3 nach Kassenzuschüssen und Steuerermäßigung ab ca. 923 € im Monat. Und der Pflegebedürftige bleibt in seiner vertrauten Umgebung.' },
  { q: 'Was ist das Entlastungsbudget 2026?', a: '3.539 €/Jahr, seit Juli 2025 als gemeinsames Budget für Verhinderungs- und Kurzzeitpflege. Gilt für PG 2–5, flexibel aufteilbar, Vorpflegezeit entfällt. 2026 ist das erste volle Jahr ohne Übergangsregelungen. Achtung: verfällt am 31. Dezember.' },
  { q: 'Kann man Pflegekosten von der Steuer absetzen?', a: '20 % der Aufwendungen für haushaltsnahe Dienstleistungen, höchstens 4.000 € Steuerermäßigung im Jahr. Schon beim Einstiegspreis von 2.150 € im Monat (25.800 € im Jahr) wird dieses Maximum erreicht.' },
  { q: 'Wie kann ich den Eigenanteil senken?', a: 'Pflegegrad korrekt und vollständig beantragen, Entlastungsbudget voll ausschöpfen, steuerlich absetzen, Pflegehilfsmittel (42 €/Monat) beantragen, Wohnraumanpassungsförderung (bis 4.180 € je Maßnahme) nutzen.' },
]

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Was kostet 24h-Pflege? Kosten, Zuschüsse & Vergleich 2026',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-01-15',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/kosten',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24-Stunden-Pflege', item: 'https://primundus.de/24-stunden-pflege' },
      { '@type': 'ListItem', position: 3, name: 'Kosten', item: 'https://primundus.de/kosten' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FRAGEN.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  },
]

const QUELLE = 'text-pm-taupe-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors'

export default function Kosten() {
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
            { label: '24-Stunden-Pflege', href: '/24-stunden-pflege' },
            { label: 'Kosten' },
          ]}
          augenbraue="Kosten 2026"
          titel="Was kostet 24-Stunden-Pflege? Kosten & Zuschüsse 2026"
          einleitung={<>24-Stunden-Pflege kostet bei Primundus ab 2.150 € im Monat für eine Person. Pflegegeld, Entlastungsbudget und die Steuerermäßigung senken den Betrag, den Sie selbst tragen — bei Pflegegrad 3 auf ab ca. 923 € im Monat. Anreise schon in 3 Tagen möglich. Ihren Preis berechnet der <a href={RECHNER} className={QUELLE}>Kostenrechner in 2 Minuten</a>.</>}
          knopf={{ href: RECHNER, text: 'Kosten & Pflegekräfte ansehen' }}
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="7 Min."
          blick={[
            'Preis: ab 2.150 € im Monat für eine Person',
            'Pflegegeld: 347–990 € im Monat je nach Pflegegrad',
            'Entlastungsbudget: 3.539 € im Jahr für Verhinderungs- und Kurzzeitpflege',
            'Steuer: 20 % der Kosten absetzbar, bis 4.000 € Ersparnis im Jahr',
            'Dazu: An- und Abreise 125 € je Strecke; Kost und Logis stellen Sie',
            'Pflegeheim zum Vergleich: Eigenanteil Ø 3.364 € im Monat',
          ]}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="kosten-uebersicht" titel="Was kostet 24h-Pflege bei Primundus?">
            <Text>Der Grundpreis von 2.150 € im Monat gilt für die Betreuung einer Person. Mehr kostet es, wenn einer dieser Punkte zutrifft:</Text>
            <Liste
              punkte={[
                'Ein Ehepaar wird betreut',
                'Weitere Personen leben im Haushalt',
                'Der Pflegebedürftige ist auf den Rollstuhl angewiesen oder bettlägerig',
                'Die Betreuungskraft wird nachts gebraucht: gelegentlich, täglich oder mehrmals',
                'Bessere Deutschkenntnisse der Betreuungskraft',
                'Die Betreuungskraft soll einen Führerschein haben',
                'Sie wünschen eine Betreuerin',
                'Pflegegrad 5',
              ]}
            />
            <Text>
              Dazu kommen An- und Abreise der Betreuungskraft mit 125 € je Strecke, auch bei einem Wechsel der Kraft.
              Kost und Logis stellen Sie: ein eigenes Zimmer und Verpflegung. Ihren genauen Preis berechnet
              der <a href={RECHNER} className={QUELLE}>Kostenrechner</a> in unter 2 Minuten.
            </Text>
            <Tabelle
              titel="Beispiel: eine Person, Pflegegrad 3"
              zeilen={[
                ['Betreuung im Monat', 'ab 2.150 €'],
                ['Pflegegeld (Pflegegrad 3)', '− 599 €'],
                ['Entlastungsbudget (3.539 € im Jahr)', '− 295 €'],
                ['Steuerermäßigung (20 %, bis 4.000 € im Jahr)', '− 333 €'],
                [<strong key="s">Selbst zu tragen im Monat</strong>, <strong key="w">ab ca. 923 €</strong>],
              ]}
              betont={1}
              fuss="Stand September 2026, Werte aus unserem Kostenrechner · zzgl. An- und Abreise 125 € je Strecke"
            />
          </Abschnitt>

          <Abschnitt id="kassenzuschuesse" titel="Kassenzuschüsse 2026 — was zahlt die Pflegekasse?">
            <Text>
              Die Pflegekasse zahlt nicht direkt die Betreuungskraft — aber mehrere Leistungen lassen sich gezielt
              kombinieren, um den Eigenanteil zu senken.
            </Text>
            <Tabelle
              titel="Pflegegeld 2026 — alle Pflegegrade"
              kopf={['Pflegegrad', 'Pflegegeld je Monat']}
              zeilen={[
                ['Pflegegrad 2', '347 €'],
                ['Pflegegrad 3', '599 €'],
                ['Pflegegrad 4', '800 €'],
                ['Pflegegrad 5', '990 €'],
              ]}
              betont={1}
              fuss="Quelle: GKV-Spitzenverband · Stand 2026 · Keine Erhöhung für 2026, nächste Dynamisierung frühestens Jan. 2028"
            />
            <Kasten augenbraue="Neu ab Juli 2025 — Entlastungsbudget" titel="3.539 € pro Jahr — flexibel für Verhinderungs- und Kurzzeitpflege" ton="gruen">
              <HakenListe
                punkte={[
                  'Für PG 2–5 · ersetzt getrennte Verhinderungs- und Kurzzeitpflegebudgets',
                  'Flexibel aufteilbar — max. 8 Wochen pro Leistungsart',
                  'Vorpflegezeit entfällt — kein 6-Monats-Warten mehr',
                  '2026: erstes volles Jahr ohne Übergangsregelungen',
                  'Achtung: Nicht genutztes Budget verfällt am 31. Dezember',
                ]}
              />
            </Kasten>
            <MehrDazu label="Alle Zuschüsse kombinieren:" links={[{ href: '/finanzierung', text: 'Finanzierung der 24h-Pflege — vollständige Übersicht' }]} />
            <MehrDazu label="Pflegegeld im Detail:" links={[{ href: '/pflegegeld', text: 'Pflegegeld 2026 — Beträge & Anspruch' }]} />
          </Abschnitt>

          <Abschnitt id="pflegegrad-kosten" titel="Was kostet 24-Stunden-Pflege nach Pflegegrad?">
            <Text>
              Der Preis der Betreuung hängt kaum vom Pflegegrad ab, nur Pflegegrad 5 kostet 50 € mehr. Ihr Eigenanteil
              dagegen sinkt deutlich, denn mit dem Pflegegrad steigen die Kassenleistungen. Beim Grundpreis für eine
              Person bleibt nach Pflegegeld, anteiligem Entlastungsbudget und Steuerermäßigung:
            </Text>
            <Tabelle
              kopf={['Pflegegrad', 'Betreuung', 'Pflegegeld', 'Entlastungsbudget', 'Steuer', 'Selbst zu tragen']}
              zeilen={[
                ['Pflegegrad 2', 'ab 2.150 €', '− 347 €', '− 295 €', '− 333 €', 'ab ca. 1.175 €'],
                ['Pflegegrad 3', 'ab 2.150 €', '− 599 €', '− 295 €', '− 333 €', 'ab ca. 923 €'],
                ['Pflegegrad 4', 'ab 2.150 €', '− 800 €', '− 295 €', '− 333 €', 'ab ca. 722 €'],
                ['Pflegegrad 5', 'ab 2.200 €', '− 990 €', '− 295 €', '− 333 €', 'ab ca. 582 €'],
              ]}
              betont={5}
              fuss="Stand September 2026, Werte aus unserem Kostenrechner · zzgl. An- und Abreise 125 € je Strecke · Budget-Anteil setzt anerkannte Verhinderungspflege-Nutzung voraus"
            />
            <Text>
              Quellen:{' '}
              <a href="https://www.gesetze-im-internet.de/sgb_11/__37.html" target="_blank" rel="noopener noreferrer" className={QUELLE}>§ 37 SGB XI (Pflegegeld)</a>{' · '}
              <a href="https://www.gesetze-im-internet.de/sgb_11/__42a.html" target="_blank" rel="noopener noreferrer" className={QUELLE}>§ 42a SGB XI (gemeinsamer Jahresbetrag)</a>{' · '}
              <a href="https://www.gesetze-im-internet.de/estg/__35a.html" target="_blank" rel="noopener noreferrer" className={QUELLE}>§ 35a EStG (Steuerermäßigung)</a>{' · '}
              <a href="https://www.bundesgesundheitsministerium.de/themen/pflege/online-ratgeber-pflege/leistungen-der-pflegeversicherung/leistungen-im-ueberblick" target="_blank" rel="noopener noreferrer" className={QUELLE}>BMG-Leistungsübersicht</a>{' · '}
              Stand: September 2026
            </Text>
            <MehrDazu label="Ihr Preis:" links={[{ href: RECHNER, text: 'Preis samt Zuschüssen in 2 Minuten im Kostenrechner' }]} />
          </Abschnitt>

          <Abschnitt id="polnische-pflegekraft" titel="Was kostet eine polnische Pflegekraft?">
            <Text>
              Unsere Betreuungskräfte kommen überwiegend aus Polen — der Preis ab 2.150 € im Monat ist derselbe.
              Darin enthalten: Lohn und Sozialabgaben der Betreuungskraft, die Organisation der Einsätze und Ersatz bei
              Ausfall. Die Kraft ist bei Primundus angestellt und wird legal über das Entsendemodell mit
              A1-Bescheinigung beschäftigt.
            </Text>
            <MehrDazu label="Alles über Kosten, Rechtliches und Ablauf:" links={[{ href: '/pflegekraft-aus-polen', text: 'Pflegekraft aus Polen — der große Ratgeber' }]} />
          </Abschnitt>

          <Abschnitt id="vergleich" titel="24h-Pflege vs. Pflegeheim — was ist günstiger?">
            <Text>
              Der durchschnittliche Eigenanteil im Pflegeheim beträgt 2026 bundesweit <strong>3.364 Euro pro Monat</strong>{' '}
              (Quelle: vdek-Auswertung, Stand 1. Juli 2026). Bei der 24-Stunden-Pflege zuhause bleiben bei Pflegegrad 3
              nach Kassenzuschüssen und Steuerermäßigung ab ca. 923 € im Monat. Und der Pflegebedürftige bleibt in seiner
              vertrauten Umgebung.
            </Text>
            <Tabelle
              kopf={['', '24-Stunden-Pflege', 'Pflegeheim']}
              zeilen={[
                ['Selbst zu tragen im Monat', 'ab ca. 923 €', 'Ø 3.364 €'],
                ['Betreuung', '1:1-Betreuung', 'Pflegepersonal für mehrere Bewohner'],
                ['Wohnen', 'im eigenen Zuhause', 'Umzug ins Heim'],
              ]}
              betont={1}
              fuss="24-Stunden-Pflege: eine Person, Pflegegrad 3, Werte aus unserem Kostenrechner · Pflegeheim: bundesweiter Durchschnitt, vdek-Auswertung, Stand 1. Juli 2026"
            />
            <MehrDazu label="Vollständiger Vergleich:" links={[{ href: '/24h-pflege-vs-pflegeheim-kosten', text: '24h-Pflege vs. Pflegeheim — Kostenvergleich 2026' }]} />
          </Abschnitt>

          <Abschnitt id="eigenanteil" titel="Eigenanteil senken — alle Möglichkeiten">
            <Text>
              Mit der richtigen Kombination aller verfügbaren Leistungen lässt sich der monatliche Eigenanteil deutlich
              senken. Das sind die wichtigsten Stellschrauben:
            </Text>
            <Punkte
              punkte={[
                { title: '1. Pflegegrad korrekt beantragen', desc: <>Jede Pflegegrad-Stufe bedeutet hunderte Euro mehr Kassenzuschuss pro Monat. Wer zu niedrig eingestuft ist, verschenkt Geld. Im Zweifel: Widerspruch einlegen. <a href="/pflegegrad-beantragen" className={QUELLE}>Pflegegrad beantragen</a></> },
                { title: '2. Entlastungsbudget voll ausschöpfen', desc: <>3.539 €/Jahr verfallen, wenn sie nicht genutzt werden. Belege rechtzeitig einreichen, Pflegekasse nach anerkannten Anbietern fragen. <a href="/verhinderungspflege" className={QUELLE}>Verhinderungspflege & Entlastungsbudget</a></> },
                { title: '3. Steuerlich absetzen', desc: <>20 % der Betreuungskosten als haushaltsnahe Dienstleistung — max. 4.000 € Steuerersparnis pro Jahr. In der Steuererklärung in der Anlage Haushaltsnahe Aufwendungen eintragen. <a href="/pflege-steuerlich-absetzen" className={QUELLE}>Pflege steuerlich absetzen</a></> },
                { title: '4. Pflegehilfsmittel nutzen', desc: '42 €/Monat für Verbrauchsmittel (Handschuhe, Desinfektionsmittel) — direkt zur Pflegekasse beantragen, werden nach Hause geliefert.' },
                { title: '5. Wohnraumanpassung fördern lassen', desc: <>Bis 4.180 € je Maßnahme für Umbaumaßnahmen — Treppenlift, Badumbau, Türverbreiterung. Mehrfach nutzbar bei mehreren Maßnahmen. <a href="/wohnraumanpassung-foerderung" className={QUELLE}>Wohnraumanpassung Förderung</a></> },
              ]}
            />
            <MehrDazu label="Alle Tipps kompakt:" links={[{ href: '/eigenanteil-24h-pflege-senken', text: 'Eigenanteil senken — alle Möglichkeiten 2026' }]} />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen zu den Kosten der 24h-Pflege">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>

          <Abschnitt id="weitere-themen" titel="Alle Artikel zu Kosten und Finanzierung">
            <MehrDazu label="Zuschüsse & Leistungen:" links={[
              { href: '/pflegegeld', text: 'Pflegegeld 2026' },
              { href: '/entlastungsbetrag', text: 'Entlastungsbetrag' },
              { href: '/verhinderungspflege', text: 'Verhinderungspflege & Entlastungsbudget' },
              { href: '/pflegesachleistungen', text: 'Pflegesachleistungen' },
            ]} />
            <MehrDazu label="Eigenanteil senken:" links={[
              { href: '/eigenanteil-24h-pflege-senken', text: 'Alle Möglichkeiten' },
              { href: '/pflege-steuerlich-absetzen', text: 'Pflege steuerlich absetzen' },
              { href: '/kombinationsleistung-pflege', text: 'Kombinationsleistung nutzen' },
              { href: '/sozialhilfe-bei-pflegebedarf', text: 'Sozialhilfe bei Pflegebedarf' },
            ]} />
            <MehrDazu label="Finanzierung:" links={[
              { href: '/finanzierung', text: 'Finanzierung der 24h-Pflege' },
              { href: '/pflegeversicherung-leistungen-uebersicht', text: 'Pflegeversicherung: alle Leistungen' },
              { href: '/foerderungen-nach-bundesland', text: 'Förderungen nach Bundesland' },
              { href: '/kurzzeitpflege', text: 'Kurzzeitpflege nutzen' },
            ]} />
            <MehrDazu label="Vergleiche:" links={[
              { href: '/pflegeheim-kosten-deutschland', text: 'Pflegeheim-Kosten Deutschland' },
              { href: '/pflegeheim-kostenvergleich', text: 'Pflegeheim-Kostenvergleich' },
              { href: '/24h-pflege-vs-pflegeheim-kosten', text: '24h-Pflege vs. Pflegeheim: Kosten' },
            ]} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
