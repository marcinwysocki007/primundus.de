import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import {
  RatgeberKopf, RatgeberRumpf, Abschnitt, DunklerAbschnitt, Text, Punkte, Kasten, HakenListe, Tabelle, MehrDazu, Fragen,
  RechnerKasten, Zwischentitel, Werte,
} from '@/components/vorlage/Ratgeber'
import { Beispieltag, HeimVsZuhause, KostenAufteilung, Preisfaktoren } from '@/components/grafik/Grafik'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'
import { ENTLASTUNGSBETRAG, ENTLASTUNGSBUDGET, PFLEGEGELD, PFLEGESACHLEISTUNGEN } from '@/lib/fakten'

// Neu in der Vorlage am 20.09.2026 (Martin: „bestmöglichen Content liefern, um auf die Top-3-Positionen zu kommen"). Vorher alte
// Optik mit „rund um die Uhr erreichbar", „200.000–300.000 Betreuungskräfte aus Polen" ohne Quelle und „sofort Ersatzkraft".
// Grundlage: Search Console (986 Impressionen, 0 Klicks, Position 37–75; alle Kosten-Suchen der Website landen hier: „pflegekraft
// aus polen kosten" 61, „kosten polnische pflegekraft" 60, „kosten polnische pflegekraft pflegegrad 3" 36, „polnische pflegekraft
// legal" 75, „polnische agentur" 24, „… privat" 11), Keyword-Planer („polnische pflegekraft" 1.600, „pflegekraft aus polen" 880,
// „kosten polnische pflegekraft pflegegrad 3" 720, „pflegekraft polen" 590, „polnische pflegekraft kosten" 390, „polnische
// haushaltshilfe" 210, „… erfahrungen" 210, „… agentur" 210, „… privat" 140 im Monat), Googles Fragen („Was zahlt die Pflegekasse
// für eine polnische Pflegekraft?", „Wer darf die 125 Euro abrechnen?", „Was kostet eine polnische 24-Stunden-Pflegekraft im
// Monat?", „Warum müssen polnische Pflegekräfte nach 3 Monaten zurück?"), Verfeinerungen (Pflegegrad 2–5, Zimmer, nachts, ohne
// Agentur, privat, Voraussetzungen, Erfahrungen) und die Seiten auf Platz 1–8 (742–4.012 Wörter; Anbieterpreise 2.490–2.990 €).
// Preise aus der Preiskonfiguration des Rechners (20.09.), Vertragsfakten aus dem Mustervertrag, Recht: VO (EG) 883/2004 Art. 12,
// § 35a EStG, §§ 36, 37, 42a, 45b SGB XI, SGB XII. Herkunft: unsere Betreuungskräfte kommen aus Polen; keine anderen Länder bewerben.

const AKTUALISIERT = aktualisiertAm('pflegekraft-aus-polen', '20. September 2026')
const RECHNER = 'https://kostenrechner.primundus.de/?start=1&src=apex-polen'
const MUSTERVERTRAG = 'https://kundenportal.primundus.de/primundus-mustervertrag.pdf'
const euro = (n: number) => n.toLocaleString('de-DE') + ' €'

const SECTIONS = [
  { id: 'kosten', title: 'Was sie im Monat kostet' },
  { id: 'pflegegrad', title: 'Kosten nach Pflegegrad' },
  { id: 'pflegekasse', title: 'Was die Kasse zahlt' },
  { id: 'legal', title: 'Legal beschäftigen: drei Wege' },
  { id: 'leistungen', title: 'Was sie tut, was nicht' },
  { id: 'zimmer', title: 'Zimmer und Alltag' },
  { id: 'auswahl', title: 'Auswahl, Start, Wechsel' },
  { id: 'erfahrungen', title: 'Erfahrungen und Sorgen' },
  { id: 'vergleich', title: 'Oder Pflegeheim?' },
  { id: 'faq', title: 'Häufige Fragen' },
]

// Sichtbare Fragen = Daten für Google (eine Quelle)
const FRAGEN = [
  { q: 'Was kostet eine polnische Pflegekraft im Monat?', a: 'Bei Primundus ab 2.150 € im Monat für eine Person, ohne Vermittlungsgebühr; für ein Ehepaar ab 2.600 €. Mehr kostet es, wenn nachts Hilfe nötig ist, die Betreuungskraft besser Deutsch sprechen soll oder weitere Wünsche dazukommen. Dazu kommen An- und Abreise mit 125 € je Strecke; Kost und Logis stellen Sie. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei Pflegegrad 3 ab ca. 923 € im Monat.' },
  { q: 'Was kostet eine polnische Pflegekraft bei Pflegegrad 3?', a: 'Die Betreuung kostet ab 2.150 € im Monat. Davon gehen 599 € Pflegegeld ab, 295 € aus dem Entlastungsbudget (wenn die Kasse den Einsatz als Verhinderungspflege anerkennt) und bis zu 333 € Steuerermäßigung. Selbst zu tragen bleiben ab ca. 923 € im Monat. Bei Pflegegrad 2 sind es ab ca. 1.175 €, bei Pflegegrad 4 ab ca. 722 €, bei Pflegegrad 5 ab ca. 582 €.' },
  { q: 'Was zahlt die Pflegekasse für eine polnische Pflegekraft?', a: 'Die Pflegekasse zahlt die Betreuungskraft nicht direkt, aber Sie setzen ihre Leistungen dafür ein: das Pflegegeld (347 € bis 990 € im Monat ab Pflegegrad 2), das Entlastungsbudget von 3.539 € im Jahr für Verhinderungspflege, wenn die Kasse die Rechnung anerkennt, und Pflegehilfsmittel. Pflegesachleistungen gibt es nur für zugelassene Pflegedienste.' },
  { q: 'Wer darf den Entlastungsbetrag von 131 € abrechnen?', a: 'Nur Anbieter, die das Bundesland anerkannt hat: Tages- und Kurzzeitpflege, ambulante Pflegedienste und anerkannte Alltagshilfen. Eine Betreuungskraft, die mit im Haus wohnt, gehört in der Regel nicht dazu. Rechnen Sie den Entlastungsbetrag deshalb nicht in Ihren Eigenanteil ein.' },
  { q: 'Ist eine polnische Pflegekraft legal?', a: 'Ja, wenn sie sozialversichert ist und jemand ihre Beiträge nachweisbar zahlt. Bei uns ist die Betreuungskraft bei der PRIMUNDUS Sp. z o.o. angestellt und wird mit A1-Bescheinigung nach Deutschland entsandt; Sie schließen den Vertrag mit Primundus und werden nicht Arbeitgeber. Nicht legal ist eine „selbstständige" Kraft, die wie eine Angestellte bei Ihnen wohnt und nach Ihren Anweisungen arbeitet, ohne dass Sozialbeiträge fließen.' },
  { q: 'Warum müssen polnische Pflegekräfte nach 3 Monaten zurück?', a: 'Müssen sie nicht. Eine Regel „nach drei Monaten zurück" gibt es nicht; eine Entsendung innerhalb der EU darf bis zu 24 Monate dauern. Unsere Betreuungskräfte wechseln sich in der Regel alle 6 bis 8 Wochen ab, weil sie Familie in Polen haben und Erholung brauchen. Jeden Wechsel organisieren wir, und Sie wählen die nächste Betreuungskraft selbst aus.' },
  { q: 'Kann ich eine polnische Pflegekraft privat anstellen?', a: 'Ja. Sie werden dann Arbeitgeber: Anmeldung bei Sozialversicherung und Finanzamt, Lohn nach deutschem Recht, Urlaub, Lohnfortzahlung bei Krankheit, Ersatz bei Ausfall organisieren Sie selbst. Das passt, wenn Sie eine Betreuungskraft schon kennen und die Verwaltung nicht scheuen. Über uns entfällt das alles; der Preis ist trotzdem niedriger als bei den großen Anbietern.' },
  { q: 'Was kostet eine polnische Pflegekraft ohne Agentur?', a: 'Ohne Anbieter zahlen Sie den Lohn plus Sozialabgaben und tragen Ausfall, Urlaub und Ersatz selbst; seriös liegt das nicht unter dem Preis über einen Anbieter, der die Betreuungskraft angestellt hat. Angebote deutlich unter 2.000 € im Monat funktionieren fast immer über Scheinselbstständigkeit; das Risiko liegt bei Ihnen.' },
  { q: 'Welches Zimmer braucht eine polnische Pflegekraft?', a: 'Ein eigenes Zimmer mit Bett, Schrank, Tisch und Tür, die Mitbenutzung von Bad und Küche, Verpflegung, WLAN und einen Schlüssel. Das Zimmer muss nicht groß sein, aber abschließbar und beheizt. Pflegebett und Hilfsmittel für die betreute Person beantragen Sie bei der Pflegekasse.' },
  { q: 'Hilft eine polnische Pflegekraft auch nachts?', a: 'Ja, weil sie mit im Haus wohnt, ist sie bei Bedarf auch nachts da. Gelegentliche Nachteinsätze kosten 50 € im Monat mehr, einmal pro Nacht 100 €, mehrmals pro Nacht 300 €. Sie braucht wie jeder Mensch ihre Nachtruhe; wer jede Nacht mehrfach Hilfe braucht, sagt das im Kostenrechner an, dann passen Preis und Auswahl.' },
  { q: 'Kann ich die Kosten steuerlich absetzen?', a: 'Ja, als haushaltsnahe Dienstleistung nach § 35a EStG: 20 Prozent der Kosten, bis zu 4.000 € im Jahr, also bis zu 333 € im Monat. Voraussetzung: Rechnung und Überweisung, keine Barzahlung. Die Ermäßigung zieht das Finanzamt direkt von der Steuer ab.' },
  { q: 'Zahlt das Sozialamt eine polnische Pflegekraft?', a: 'Reichen Rente, Einkommen und Vermögen nicht, kann das Sozialamt Hilfe zur Pflege nach dem SGB XII leisten, auch zu Hause; ob es eine Betreuungskraft übernimmt, entscheidet es im Einzelfall. Kinder werden erst ab einem Bruttoeinkommen von 100.000 € im Jahr herangezogen. Stellen Sie den Antrag, bevor die Betreuung beginnt.' },
]

export const metadata: Metadata = {
  title: 'Polnische Pflegekräfte: Kosten, Recht und Ablauf | 6× Testsieger',
  description: 'Geprüfte, verfügbare polnische Pflegekräfte und Preis direkt online sehen. Bei uns angestellt, Anreise in 3 Tagen möglich – mit Bestpreisgarantie.',
  alternates: { canonical: 'https://primundus.de/pflegekraft-aus-polen' },
  openGraph: {
    title: 'Polnische Pflegekräfte: Kosten, Recht und Ablauf | 6× Testsieger',
    description: 'Geprüfte, verfügbare polnische Pflegekräfte und Preis direkt online sehen. Bei uns angestellt, Anreise in 3 Tagen möglich – mit Bestpreisgarantie.',
    url: 'https://primundus.de/pflegekraft-aus-polen',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Polnische Pflegekraft: Was sie 2026 kostet, was die Kasse zahlt und wie Sie sie legal beschäftigen',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/pflegekraft-aus-polen',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: '24-Stunden-Pflege', item: 'https://primundus.de/24-stunden-pflege' },
      { '@type': 'ListItem', position: 3, name: 'Pflegekraft aus Polen', item: 'https://primundus.de/pflegekraft-aus-polen' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FRAGEN.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  },
]

const LINK = 'font-semibold text-pm-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors'
const l = (href: string, text: string) => <a href={href} className={LINK}>{text}</a>
const QUELLE = 'text-pm-taupe-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors'

export default function PflegekraftAusPolen() {
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
            { label: 'Pflegekraft aus Polen' },
          ]}
          augenbraue="Pflegekraft aus Polen 2026"
          titel="Polnische Pflegekraft: Was sie 2026 kostet, was die Kasse zahlt und wie Sie sie legal beschäftigen"
          einleitung="Polnische Pflegekräfte sind bei uns fest angestellt und mit A1-Bescheinigung legal in Deutschland tätig — ohne Vermittlungsgebühr, und Sie werden nicht Arbeitgeber. Hier steht, was das kostet und woran Sie eine rechtssichere Anstellung erkennen."
          knopf={{ href: RECHNER, text: 'Preis & Pflegekräfte ansehen' }}
          knopfOben
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="11 Min."
          blick={[
            'Preis: ab 2.150 € im Monat für eine Person, ab 2.600 € für ein Ehepaar, keine Vermittlungsgebühr',
            'Selbst zu tragen bei Pflegegrad 3: ab ca. 923 € nach Pflegegeld, Entlastungsbudget und Steuer',
            'Legal: bei uns angestellt, Entsendung mit A1-Bescheinigung, Vertrag mit Primundus',
            'Sie sehen vorab, wer kommt: Profil mit Foto, Deutschkenntnissen und Erfahrung',
            'Anreise in 3 Tagen möglich, Wechsel alle 6 bis 8 Wochen, täglich kündbar',
            'Dazu: An- und Abreise 125 € je Strecke; Zimmer, Kost und Logis stellen Sie',
          ]}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="kosten" titel="Was kostet eine polnische Pflegekraft im Monat?">
            <Text>
              Der Grundpreis von 2.150 € im Monat gilt für die Betreuung einer Person. Die Betreuungskraft hat dann grundlegende
              Deutschkenntnisse und wird nachts nicht gebraucht. Es ist der Bruttopreis; Zuschüsse sind nicht eingerechnet. Was den Preis
              erhöht, legen wir offen; die Beträge kommen aus unserem Kostenrechner.
            </Text>
            <Preisfaktoren />
            <Text>
              Dazu kommen An- und Abreise der Betreuungskraft mit 125 € je Strecke, auch bei jedem Wechsel. An neun Feiertagen im Jahr gilt der
              doppelte Tagessatz. Ein eigenes Zimmer, Verpflegung und WLAN stellen Sie; das bezahlen Sie nicht an uns. Abgerechnet wird
              taggenau: Monatspreis geteilt durch 30, beim Grundpreis rund 72 € am Tag. Sie zahlen nur Tage, an denen die Betreuungskraft da ist.
            </Text>
            <Kasten augenbraue="Zum Vergleich" titel="Was polnische Pflegekräfte bei anderen Anbietern kosten">
              <Text>
                Bei den großen Anbietern beginnen die Preise 2026 zwischen rund 2.500 und 3.000 € im Monat, oft plus Vermittlungsgebühr. Wir liegen mit
                2.150 € darunter. Unsere Betreuungskräfte sind bei uns angestellt, und eine Gebühr fällt nicht an. Dazu kommt die Bestpreisgarantie:
                nie mehr als für ein vergleichbares Angebot. Angebote deutlich unter 2.000 € funktionieren fast immer über Scheinselbstständigkeit.
              </Text>
            </Kasten>
            <MehrDazu
              label="Alle Preise und Zuschüsse:"
              links={[{ href: '/kosten', text: '24-Stunden-Pflege Kosten 2026: Tabelle nach Pflegegrad' }]}
            />
            <RechnerKasten src="apex-polen" />
          </Abschnitt>

          <Abschnitt id="pflegegrad" titel="Kosten nach Pflegegrad 2, 3, 4 und 5">
            <Text>
              Der Pflegegrad ändert den Preis kaum (nur Pflegegrad 5 kostet 50 € mehr), aber er bestimmt, was die Pflegekasse dazugibt. Die
              Tabelle rechnet mit dem Grundpreis, dem Pflegegeld, dem anteiligen Entlastungsbudget und der Steuerermäßigung. Der Entlastungsbetrag
              von {euro(ENTLASTUNGSBETRAG)} fehlt bewusst: Die Kasse zahlt ihn in der Regel nicht für die Betreuungskraft.
            </Text>
            <Tabelle
              titel="Eine Person, Grundpreis, Stand 2026"
              kopf={['', 'PG 2', 'PG 3', 'PG 4', 'PG 5']}
              zeilen={[
                ['Betreuung ab', '2.150 €', '2.150 €', '2.150 €', '2.200 €'],
                ['Pflegegeld', `− ${euro(PFLEGEGELD[2])}`, `− ${euro(PFLEGEGELD[3])}`, `− ${euro(PFLEGEGELD[4])}`, `− ${euro(PFLEGEGELD[5])}`],
                ['Entlastungsbudget, anteilig', '− 295 €', '− 295 €', '− 295 €', '− 295 €'],
                ['Steuerermäßigung, bis zu', '− 333 €', '− 333 €', '− 333 €', '− 333 €'],
                ['Selbst zu tragen ab ca.', '1.175 €', '923 €', '722 €', '582 €'],
              ]}
              betont={[1, 2, 3, 4]}
              fuss={`Pflegegeld § 37 SGB XI. Entlastungsbudget ${euro(ENTLASTUNGSBUDGET)} im Jahr (§ 42a), anteilig 295 € im Monat, wenn die Kasse den Einsatz als Verhinderungspflege anerkennt. Steuerermäßigung § 35a EStG: 20 %, höchstens 4.000 € im Jahr. Dazu An- und Abreise 125 € je Strecke.`}
            />
            <KostenAufteilung />
            <Text>
              Für ein Ehepaar kostet die Betreuung ab 2.600 €. Beide Partner bekommen ihr eigenes Pflegegeld und ihr eigenes Entlastungsbudget;
              bei Pflegegrad 3 und 2 bleiben so ab ca. 731 € im Monat. Alle Rechenwege stehen auf der {l('/kosten', 'Kostenseite')}.
            </Text>
          </Abschnitt>

          <Abschnitt id="pflegekasse" titel="Was zahlt die Pflegekasse für eine polnische Pflegekraft?">
            <Text>
              Die Pflegekasse überweist der Betreuungskraft nichts. Sie zahlt Ihnen Leistungen, die Sie für die Betreuung einsetzen. Vier davon
              zählen, eine wird oft falsch versprochen:
            </Text>
            <Punkte
              punkte={[
                { title: `Pflegegeld: ${euro(PFLEGEGELD[2])} bis ${euro(PFLEGEGELD[5])} im Monat`, desc: 'Ab Pflegegrad 2, monatlich aufs Konto, frei verwendbar. Voraussetzung ist, dass die Pflege zu Hause gesichert ist, und das ist sie mit einer Betreuungskraft. Alle sechs Monate kommt ein Beratungsbesuch nach § 37 Abs. 3.' },
                { title: `Entlastungsbudget: ${euro(ENTLASTUNGSBUDGET)} im Jahr`, desc: 'Für Verhinderungs- und Kurzzeitpflege ab Pflegegrad 2. Erkennt die Kasse den Einsatz der Betreuungskraft als Verhinderungspflege an, weil die Pflegeperson aus der Familie verhindert ist, erstattet sie unsere Rechnung bis zum Budget. Fragen Sie vorher schriftlich nach.' },
                { title: 'Pflegehilfsmittel: 42 € im Monat, Wohnumfeld: bis 4.180 €', desc: 'Handschuhe, Bettschutz, Desinfektion zum Verbrauch; Badumbau, Treppenlift oder Türverbreiterung je Maßnahme. Beides ab Pflegegrad 1.' },
                { title: 'Steuer: bis 4.000 € im Jahr', desc: 'Das Finanzamt zieht 20 Prozent der Kosten von der Steuer ab, höchstens 4.000 € im Jahr (§ 35a EStG). Nur bei Rechnung und Überweisung.' },
                { title: `Entlastungsbetrag: ${euro(ENTLASTUNGSBETRAG)}, aber meist nicht für die Betreuungskraft`, desc: 'Die Kasse erstattet ihn nur gegen Rechnung eines vom Land anerkannten Anbieters: Tagespflege, Pflegedienst, anerkannte Alltagshilfen. Eine Betreuungskraft im Haus gehört in der Regel nicht dazu. Wer Ihnen die 131 € „einrechnet", rechnet schön.' },
              ]}
            />
            <Zwischentitel>Pflegedienst daneben, Landespflegegeld, Sozialamt</Zwischentitel>
            <Text>
              Pflegesachleistungen ({euro(PFLEGESACHLEISTUNGEN[2])} bis {euro(PFLEGESACHLEISTUNGEN[5])} im Monat) zahlt die Kasse nur an zugelassene Pflegedienste. Sie
              können sie neben der Betreuungskraft nutzen, zum Beispiel für die Behandlungspflege; dann sinkt das Pflegegeld anteilig
              (Kombinationsleistung). In Bayern kommt das Landespflegegeld von 500 € im Jahr ab Pflegegrad 2 dazu. Reicht das Geld nicht,
              prüft das Sozialamt Hilfe zur Pflege.
            </Text>
            <MehrDazu
              label="Weiter:"
              links={[
                { href: '/finanzierung', text: 'Alle Zuschüsse kombinieren' },
                { href: '/pflegegeld-und-24h-pflege-kombinieren', text: 'Pflegegeld und Betreuungskraft' },
                { href: '/verhinderungspflege', text: 'Verhinderungspflege nutzen' },
              ]}
            />
          </Abschnitt>

          <DunklerAbschnitt
            id="legal"
            titel="Polnische Pflegekraft legal beschäftigen: drei Wege"
            einleitung="Legal ist eine Betreuungskraft, wenn sie sozialversichert ist und jemand ihre Beiträge nachweisbar zahlt. Dafür gibt es drei Wege; nur zwei davon sind ohne Risiko."
            punkte={[
              { title: 'Entsendung (unser Modell)', desc: 'Die Betreuungskraft ist bei der PRIMUNDUS Sp. z o.o. angestellt, in Polen sozialversichert und wird nach Deutschland entsandt. Die A1-Bescheinigung belegt das. Sie schließen den Vertrag mit Primundus, werden nicht Arbeitgeber und kündigen täglich.' },
              { title: 'Selbst anstellen', desc: 'Sie werden Arbeitgeber: Anmeldung, Sozialabgaben, Lohn nach deutschem Recht, Urlaub, Lohnfortzahlung, Ersatz bei Ausfall. Legal, aber viel Verwaltung, und ohne Netz, wenn die Betreuungskraft ausfällt.' },
              { title: 'Selbstständige Betreuungskraft', desc: 'Nur legal, wenn sie wirklich selbstständig arbeitet: mehrere Auftraggeber, eigene Zeiteinteilung, eigenes Risiko. Wohnt sie bei Ihnen und arbeitet nach Ihren Anweisungen, ist das Scheinselbstständigkeit; Nachzahlungen und Strafen treffen Sie.' },
              { title: 'Der Mythos „nach drei Monaten zurück"', desc: 'Eine solche Regel gibt es nicht. Eine Entsendung innerhalb der EU darf bis zu 24 Monate dauern. Unsere Betreuungskräfte wechseln alle 6 bis 8 Wochen, weil sie Familie in Polen haben und Erholung brauchen, nicht weil das Gesetz es verlangt.' },
            ]}
          >
            <Kasten titel="Woran Sie ein legales Angebot erkennen">
              <HakenListe
                zweispaltig
                punkte={[
                  'A1-Bescheinigung für jede Betreuungskraft, vor der Anreise',
                  'Ihr Vertragspartner ist das Unternehmen, nicht die Betreuungskraft',
                  'Rechnung und Überweisung, kein Bargeld',
                  'Ersatz bei Ausfall ist geregelt, bei uns in der Regel innerhalb von 3 Tagen',
                  'Kündigung ohne Mindestlaufzeit, bei uns täglich',
                  'Der Vertrag liegt vorher offen: unser Mustervertrag zum Nachlesen',
                ]}
              />
            </Kasten>
            <MehrDazu
              label="Weiter:"
              links={[
                { href: '/rechtssicher', text: 'Entsendemodell und A1 im Detail' },
                { href: '/pflegekraft-legal-beschaeftigen', text: 'Pflegekraft legal beschäftigen' },
                { href: MUSTERVERTRAG, text: 'Mustervertrag (PDF)' },
              ]}
            />
          </DunklerAbschnitt>

          <Abschnitt id="leistungen" titel="Was eine polnische Pflegekraft tut, und was nicht">
            <Text>
              „Pflegekraft" ist der Suchbegriff, „Betreuungskraft" die richtige Bezeichnung: Sie übernimmt Grundpflege, Haushalt und Betreuung
              und lebt mit im Haus. Medizinische Behandlungspflege wie Spritzen, Verbände oder Infusionen bleibt beim ambulanten Pflegedienst,
              den der Arzt verordnet und die Krankenkasse zahlt.
            </Text>
            <Punkte
              punkte={[
                { title: 'Grundpflege', desc: 'Waschen, Duschen, Anziehen, Toilettengang, Hilfe beim Essen, Umlagern, Mobilisieren, Erinnerung an Medikamente.' },
                { title: 'Haushalt', desc: 'Kochen nach den Gewohnheiten des Hauses, Einkaufen, Wäsche, Putzen der genutzten Räume, Pflanzen und Haustier versorgen.' },
                { title: 'Betreuung und Begleitung', desc: 'Gespräche, Spaziergänge, Vorlesen, Spiele, Tagesstruktur; Begleitung zu Arzt, Friseur und Behörden, bei Führerschein auch mit dem Auto.' },
                { title: 'Nicht dabei', desc: 'Behandlungspflege, schwere Gartenarbeit, Renovierung, Betreuung weiterer Haushalte. Und: Sie ist ein Mensch mit Nachtruhe und freier Zeit, keine Kraft „rund um die Uhr".' },
              ]}
            />
            <Beispieltag />
            <MehrDazu
              label="Weiter:"
              links={[
                { href: '/leistungen', text: 'Alle Leistungen im Überblick' },
                { href: '/24-stunden-pflege', text: 'So funktioniert 24-Stunden-Pflege' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="zimmer" titel="Zimmer, Kost und Logis: was Sie bereitstellen">
            <Text>
              Die Betreuungskraft wohnt bei Ihnen. Das ist der Grund, warum sie bei Bedarf auch nachts da ist, und es ist der Teil der Kosten,
              der nicht auf unserer Rechnung steht.
            </Text>
            <Werte
              zeilen={[
                ['Zimmer', 'Eigenes Zimmer mit Bett, Schrank, Tisch und abschließbarer Tür, beheizt; es muss nicht groß sein.'],
                ['Bad und Küche', 'Mitbenutzung reicht. Ein eigenes Bad ist ein Plus, keine Bedingung.'],
                ['Verpflegung', 'Die Betreuungskraft isst mit; sie kocht für beide, Sie stellen die Lebensmittel.'],
                ['WLAN und Telefon', 'Für den Kontakt nach Hause. Ein Fernseher im Zimmer wird gern gesehen.'],
                ['Schlüssel und Notfallblatt', 'Hausschlüssel, Hausärztin, Medikamentenplan, Kontakte der Familie, Regel fürs Haushaltsgeld.'],
                ['Hilfsmittel', 'Pflegebett, Rollator, Duschhocker beantragen Sie für die betreute Person bei der Pflegekasse; wir helfen beim Antrag.'],
              ]}
            />
            <Kasten augenbraue="Nachts" titel="Hilfe in der Nacht">
              <Text>
                Weil die Betreuungskraft im Haus wohnt, ist sie bei Bedarf auch nachts da. Gelegentliche Nachteinsätze kosten 50 € im Monat mehr,
                einmal pro Nacht 100 €, mehrmals pro Nacht 300 €. Wer jede Nacht mehrfach Hilfe braucht, gibt das im Kostenrechner an; dann
                stimmen Preis und Auswahl, und die Betreuungskraft weiß vorher, was auf sie zukommt.
              </Text>
            </Kasten>
          </Abschnitt>

          <Abschnitt id="auswahl" titel="Auswahl, Start und Wechsel: so läuft es bei Primundus">
            <Punkte
              punkte={[
                { title: 'Sie sehen vorab, wer kommt', desc: 'Foto, Alter, Deutschkenntnisse, Jahre Erfahrung und die Zahl der Einsätze über Primundus stehen im Profil jeder Betreuungskraft, die sich bei Ihnen bewirbt. Bewerbungen kommen am selben Werktag.' },
                { title: 'Deutschkenntnisse in drei Stufen', desc: 'Grundlegend (im Grundpreis), kommunikativ (+250 €) oder gut (+450 €). Für Demenz und Alleinlebende lohnt sich mindestens „kommunikativ".' },
                { title: 'Anreise in 3 Tagen möglich', desc: 'Nach Ihrer Auswahl reist die Betreuungskraft an; wir organisieren Fahrt und Übergabe. Sie zahlen erst ab dem ersten Tag im Haus.' },
                { title: 'Wechsel alle 6 bis 8 Wochen', desc: 'Die nächste Betreuungskraft wählen Sie wieder selbst; die Übergabe läuft am Wechseltag im Haus. Der Wechsel kostet nichts extra, nur die An- und Abreise.' },
                { title: 'Ersatz und Kündigung', desc: 'Fällt eine Betreuungskraft aus, stellen wir Ersatz in der Regel innerhalb von 3 Tagen. Sie kündigen täglich, ohne Mindestlaufzeit; abgerechnet wird taggenau.' },
              ]}
            />
            <MehrDazu
              label="Weiter:"
              links={[
                { href: '/qualitaet', text: 'Wie wir Betreuungskräfte auswählen' },
                { href: '/ablauf', text: 'Ablauf von der Anfrage bis zur Anreise' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="erfahrungen" titel="Erfahrungen mit polnischen Pflegekräften: die vier Sorgen vor dem Start">
            <Punkte
              punkte={[
                { title: '„Verstehen wir uns?"', desc: 'Die Deutschstufe steht im Profil, und Sie sprechen vor der Entscheidung mit der Betreuungskraft. Für den Alltag reicht „kommunikativ"; wer viel reden möchte, wählt „gut".' },
                { title: '„Ein fremder Mensch im Haus."', desc: 'Nach ein paar Tagen ist es meist ein vertrauter Mensch. Passt es nicht, wechseln wir die Betreuungskraft; Sie sind nicht gebunden.' },
                { title: '„Was, wenn sie krank wird oder heimfährt?"', desc: 'Dann stellen wir Ersatz, in der Regel innerhalb von 3 Tagen. Krankheitstage berechnen wir nicht.' },
                { title: '„Wird sie fair behandelt?"', desc: 'Sie ist bei uns angestellt, sozialversichert, hat Nachtruhe, freie Zeit und einen festen Wechselrhythmus. Das ist auch Ihre Sicherheit: Wer fair beschäftigt ist, bleibt.' },
              ]}
            />
            <Text>
              Was Familien nach dem Start berichten, lesen Sie auf der Seite {l('/erfahrungen', 'Erfahrungen')}.
            </Text>
          </Abschnitt>

          <Abschnitt id="vergleich" titel="Polnische Pflegekraft oder Pflegeheim?">
            <Text>
              Der Eigenanteil im Pflegeheim liegt bundesweit bei durchschnittlich 3.364 € im Monat (vdek, Juli 2026), bei einer Betreuungskraft im
              Haus bei Pflegegrad 3 ab ca. 923 €. Dazu kommt, was sich nicht in Euro rechnet: die eigene Wohnung, ein Tagesablauf nach den
              eigenen Gewohnheiten und eine feste Bezugsperson statt wechselnder Schichten.
            </Text>
            <HeimVsZuhause />
            <MehrDazu
              label="Weiter:"
              links={[
                { href: '/24h-pflege-vs-pflegeheim-kosten', text: '24h-Pflege oder Pflegeheim: Kosten' },
                { href: '/pflegeheim-kosten-deutschland', text: 'Pflegeheim-Kosten je Bundesland' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen zur polnischen Pflegekraft">
            <Fragen fragen={FRAGEN} />
            <RechnerKasten src="apex-polen" />
            <Text>
              Quellen: Preiskonfiguration unseres Kostenrechners und {' '}
              <a href={MUSTERVERTRAG} className={QUELLE} target="_blank" rel="noopener">Mustervertrag</a> (Stand September 2026), VO (EG) 883/2004 Art. 12 (Entsendung bis 24 Monate),
              §§ 36, 37, 40, 42a, 45b SGB XI, § 35a EStG, SGB XII, Landesamt für Pflege Bayern, vdek-Statistik zum Heim-Eigenanteil (Juli 2026),
              Anbieterseiten (Stand 20. September 2026).
            </Text>
            <MehrDazu
              label="Betreuungskräfte aus anderen Ländern:"
              links={[
                { href: '/pflegekraft-aus-bulgarien', text: 'Pflegekraft aus Bulgarien' },
                { href: '/pflegekraft-aus-rumaenien', text: 'Pflegekraft aus Rumänien' },
              ]}
            />
          </Abschnitt>

          <Weiterlesen aktuell="pflegekraft-aus-polen" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
