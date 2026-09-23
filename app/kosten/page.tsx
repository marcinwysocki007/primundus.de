import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, Fragen, HakenListe, Kasten, MehrDazu, Punkte, RatgeberKopf, RatgeberRumpf, RechnerKasten, Tabelle, Text,
} from '@/components/vorlage/Ratgeber'
import { HeimVsZuhause, KostenAufteilung, Preisfaktoren } from '@/components/grafik/Grafik'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

// Kernseite Kosten, ausgebaut am 20.09.2026 (Martin: „bestmöglichen Content liefern, um auf die Top-3-Positionen zu kommen").
// Grundlage: Search Console (Kosten-Suchen landen bisher auf /pflegekraft-aus-polen, Position 37–60), Keyword-Planer
// („24 stunden pflege kosten" 1.300, „… kostenübernahme krankenkasse" 1.600, „was kostet …" 590, „kosten polnische
// pflegekraft pflegegrad 3" 720, „24 stunden pflege zu hause kosten" 480 im Monat), Google-Fragen („Wer übernimmt die
// Kosten?", „Was ist billiger, Heim oder 24-Stunden-Pflege?", „für 2 Personen", „Pflegegrad 3/4/5", „Rechner") und die
// Seiten auf Platz 1–5 (1.350–4.400 Wörter). Alle Preise aus der Preiskonfiguration des Kostenrechners (pricing_config,
// gelesen 20.09.): Grundpreis 2.150 €, Ehepaar +450, Deutsch kommunikativ +250 / gut +450, Nächte +50/+100/+300,
// Rollstuhl/bettlägerig +100, weitere Personen +200, Führerschein +100, Betreuerin gewünscht +100, Pflegegrad 5 +50.
// Eigenanteil = Preis − Pflegegeld − Entlastungsbudget/12 − Steuerermäßigung (Martin 14.09.); Entlastungsbetrag (131 €)
// nie abziehen; Kost und Logis nicht beziffern; An- und Abreise 125 € je Strecke, Wechseltag für beide Kräfte, neun
// Feiertage doppelt, Krankheitstage nicht berechnet (Mustervertrag, Martin 17.09.). CariFair-Zahlen von carifair.de.

const AKTUALISIERT = aktualisiertAm('kosten', '20. September 2026')
const RECHNER = 'https://kostenrechner.primundus.de/?start=1&src=apex-kosten'
const MUSTERVERTRAG = 'https://kundenportal.primundus.de/primundus-mustervertrag.pdf'

const SECTIONS = [
  { id: 'kosten-uebersicht', title: 'Was kostet 24h-Pflege?' },
  { id: 'preisfaktoren', title: 'Was den Preis bewegt' },
  { id: 'nebenkosten', title: 'Was dazukommt' },
  { id: 'pflegegrad-kosten', title: 'Kosten nach Pflegegrad' },
  { id: 'zwei-personen', title: 'Für zwei Personen' },
  { id: 'wer-zahlt', title: 'Wer zahlt: Kasse, Steuer, Amt' },
  { id: 'polnische-pflegekraft', title: 'Polnische Pflegekraft' },
  { id: 'vergleich', title: 'Vergleich mit dem Pflegeheim' },
  { id: 'eigenanteil', title: 'Eigenanteil senken' },
  { id: 'guenstiger', title: 'Günstiger nur mit Risiko' },
  { id: 'faq', title: 'Häufige Fragen' },
]

// Preise aus dem Snippet entfernt (23.09.2026). Sie standen hier im Titel UND in der
// Beschreibung, und in openGraph gleich noch einmal — die Regel „keine Preise im Snippet" war
// nie gegen den Bestand geprueft worden. Der Betrag bleibt im Text der Seite und im Rechner.
export const metadata: Metadata = {
  title: '24-Stunden-Pflege Kosten 2026: alle Zuschüsse im Überblick',
  description:
    'Was Pflegekasse, Steuer und Sozialamt zahlen und was bei Pflegegrad 2 bis 5 als Eigenanteil bleibt. Ihren Preis zeigt der Rechner in 2 Minuten.',
  alternates: { canonical: 'https://primundus.de/kosten' },
  openGraph: {
    title: '24-Stunden-Pflege Kosten 2026: alle Zuschüsse im Überblick',
    description: 'Alle Preisfaktoren, Zuschüsse der Pflegekasse, Steuer und was bei Pflegegrad 2 bis 5 selbst zu tragen bleibt.',
    url: 'https://primundus.de/kosten',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
  },
}

// Sichtbare Fragen = Daten für Google (eine Quelle)
const FRAGEN = [
  {
    q: 'Was kostet 24-Stunden-Pflege im Monat?',
    a: 'Bei Primundus ab 2.150 € im Monat für eine Person, bei einem Ehepaar ab 2.600 €. Der genaue Preis hängt davon ab, ob nachts Hilfe nötig ist, wie gut die Betreuungskraft Deutsch spricht und ob Sie weitere Wünsche haben. Nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei Pflegegrad 3 ab ca. 923 € im Monat selbst zu tragen.',
  },
  {
    q: 'Was kostet 24-Stunden-Pflege pro Tag?',
    a: 'Wir rechnen taggenau ab: Der Monatspreis wird durch 30 geteilt. Beim Grundpreis von 2.150 € sind das rund 72 € am Tag. Sie zahlen nur für Tage, an denen die Betreuungskraft bei Ihnen ist; Krankheitstage berechnen wir nicht.',
  },
  {
    q: 'Was kostet 24-Stunden-Pflege bei Pflegegrad 3?',
    a: 'Die Betreuung kostet ab 2.150 € im Monat. Bei Pflegegrad 3 zahlt die Pflegekasse 599 € Pflegegeld und, wenn sie den Einsatz als Verhinderungspflege anerkennt, anteilig 295 € aus dem Entlastungsbudget. Die Steuerermäßigung bringt bis zu 333 € im Monat. Selbst zu tragen bleiben ab ca. 923 €.',
  },
  {
    q: 'Was kostet 24-Stunden-Pflege bei Pflegegrad 4 und 5?',
    a: 'Bei Pflegegrad 4 bleiben nach Pflegegeld (800 €), Entlastungsbudget (295 €) und Steuerermäßigung (333 €) ab ca. 722 € im Monat. Bei Pflegegrad 5 kostet die Betreuung ab 2.200 €; nach 990 € Pflegegeld, 295 € Budget und 333 € Steuer bleiben ab ca. 582 €.',
  },
  {
    q: 'Was kostet 24-Stunden-Pflege für 2 Personen?',
    a: 'Für ein Ehepaar kostet die Betreuung ab 2.600 € im Monat, 450 € mehr als für eine Person. Dafür bekommen beide Partner ihr eigenes Pflegegeld und ihr eigenes Entlastungsbudget. Bei Pflegegrad 3 und 2 bleiben so ab ca. 731 € im Monat selbst zu tragen.',
  },
  {
    q: 'Wer übernimmt die Kosten für eine 24-Stunden-Pflege?',
    a: 'Einen Teil die Pflegekasse: Pflegegeld ab Pflegegrad 2, 347 bis 990 € im Monat. Dazu das Entlastungsbudget von 3.539 € im Jahr, wenn sie den Einsatz als Verhinderungspflege anerkennt. Einen Teil das Finanzamt: 20 % der Kosten, höchstens 4.000 € im Jahr. Den Rest tragen Sie selbst. Reicht das Einkommen nicht, kann das Sozialamt mit Hilfe zur Pflege einspringen.',
  },
  {
    q: 'Zahlt die Krankenkasse die 24-Stunden-Pflege?',
    a: 'Nein. Die Krankenkasse zahlt nur medizinische Behandlungspflege, etwa Spritzen oder Verbandswechsel durch einen Pflegedienst. Für die Betreuungskraft ist die Pflegekasse zuständig, mit Pflegegeld und Entlastungsbudget. Ob AOK, TK, Barmer oder DAK: Die Leistungen der Pflegekasse sind gesetzlich gleich.',
  },
  {
    q: 'Zahlt das Sozialamt die 24-Stunden-Pflege?',
    a: 'Wenn Rente, Einkommen und Vermögen nicht reichen, kann das Sozialamt Hilfe zur Pflege nach dem SGB XII leisten, auch für die Pflege zu Hause. Es prüft dafür Einkommen und Vermögen des Pflegebedürftigen. Kinder werden nur herangezogen, wenn sie mehr als 100.000 € brutto im Jahr verdienen.',
  },
  {
    q: 'Kann ich die 24-Stunden-Pflege von der Steuer absetzen?',
    a: 'Ja. 20 % der Kosten können Sie als haushaltsnahe Dienstleistung von der Steuer abziehen, höchstens 4.000 € im Jahr. Schon beim Grundpreis von 2.150 € im Monat erreichen Sie den Höchstbetrag. Sie tragen die Kosten in der Steuererklärung in der Anlage Haushaltsnahe Aufwendungen ein.',
  },
  {
    q: 'Was kostet eine polnische Pflegekraft im Monat?',
    a: 'Bei Primundus ab 2.150 € im Monat für eine Person. Unsere Betreuungskräfte kommen aus Polen, sind bei uns angestellt und in Polen sozialversichert; für jeden Einsatz liegt eine A1-Bescheinigung vor. Bei Pflegegrad 3 bleiben nach den Zuschüssen ab ca. 923 € im Monat.',
  },
  {
    q: 'Was ist billiger, Pflegeheim oder 24-Stunden-Pflege?',
    a: 'Meist die Betreuung zu Hause. Der Eigenanteil im Pflegeheim liegt 2026 im Bundesdurchschnitt bei 3.364 € im Monat. Bei der 24-Stunden-Pflege bleiben bei Pflegegrad 3 ab ca. 923 € im Monat, und Ihr Angehöriger bleibt in seiner Wohnung.',
  },
  {
    q: 'Geht 24-Stunden-Pflege auch ohne Pflegegrad?',
    a: 'Ja, die Betreuung selbst setzt keinen Pflegegrad voraus. Ohne Pflegegrad gibt es aber kein Pflegegeld und kein Entlastungsbudget; nur die Steuerermäßigung bleibt. Wir empfehlen, den Pflegegrad parallel zu beantragen.',
  },
  {
    q: 'Gibt es auch eine 8- oder 12-Stunden-Betreuung zu Hause?',
    a: 'Bei uns nicht: Unsere Betreuungskräfte wohnen im Haushalt. Für stundenweise Hilfe sind ambulante Pflegedienste und anerkannte Alltagshelfer da. Deren Kosten rechnet die Pflegekasse über Pflegesachleistungen und den Entlastungsbetrag von 131 € im Monat ab.',
  },
  {
    q: 'Stimmt es, dass die Caritas 24-Stunden-Betreuung für 1.850 € anbietet?',
    a: 'Nein, die Zahl stammt aus alten Berichten. Beim Caritas-Modell CariFair sind Sie selbst Arbeitgeber der Betreuungskraft. Nach Angaben von CariFair kostet das rund 2.730 € Bruttogehalt im Monat. Dazu kommen etwa 600 € Sozialabgaben und 170 € für die Koordination, bei 38,5 Wochenstunden.',
  },
]

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Was kostet 24-Stunden-Pflege? Kosten und Zuschüsse 2026',
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
          titel="Was kostet 24-Stunden-Pflege? Kosten und Zuschüsse 2026"
          einleitung={<>24-Stunden-Pflege kostet bei Primundus <strong className="text-pm-ink">ab 2.150 € im Monat</strong> für eine Person, ab 2.600 € für ein Ehepaar. Pflegegeld, Entlastungsbudget und Steuerermäßigung senken den Betrag, den Sie selbst tragen: bei Pflegegrad 3 auf <strong className="text-pm-ink">ab ca. 923 € im Monat</strong>. Hier stehen alle Preisfaktoren, alles, was dazukommt, und wer welchen Teil zahlt.</>}
          knopf={{ href: RECHNER, text: 'Preis & Pflegekräfte ansehen' }}
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="12 Min."
          blick={[
            'Preis: ab 2.150 € im Monat für eine Person, ab 2.600 € für ein Ehepaar',
            'Dazu: An- und Abreise 125 € je Strecke; Kost und Logis stellen Sie',
            'Pflegegeld: 347 bis 990 € im Monat je nach Pflegegrad',
            'Entlastungsbudget: 3.539 € im Jahr, anteilig 295 € im Monat',
            'Steuer: 20 % der Kosten, bis 4.000 € Ersparnis im Jahr',
            'Pflegeheim zum Vergleich: Eigenanteil Ø 3.364 € im Monat',
          ]}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="kosten-uebersicht" titel="Was kostet 24-Stunden-Pflege bei Primundus?">
            <Text>
              Die Kosten der 24-Stunden-Pflege bestehen aus dem Monatspreis, der An- und Abreise und Kost und Logis. Der
              Grundpreis liegt bei 2.150 € im Monat. Er gilt für eine Person, die noch mobil ist oder mit Rollator geht.
              Nachts braucht sie keine Hilfe, und es gibt keine besonderen Wünsche an die Betreuungskraft. Im Preis
              enthalten sind Lohn und Sozialabgaben der Betreuungskraft, die Organisation der Einsätze, der Ersatz bei
              Krankheit und Ihre Ansprechpartnerin in Deutschland. Eine Vermittlungsgebühr oder Anzahlung gibt es nicht.
            </Text>
            <Text>
              Der Preis ist ein Bruttopreis, in ganz Deutschland gleich, ob in München, Berlin oder auf dem Land. Was die
              Pflegekasse und das Finanzamt beisteuern, ziehen Sie davon ab. So sieht das bei Pflegegrad 3 aus:
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
              fuss="Stand September 2026, Werte aus unserem Kostenrechner · zzgl. An- und Abreise 125 € je Strecke · Budget-Anteil setzt voraus, dass Ihre Kasse den Einsatz als Verhinderungspflege anerkennt"
            />
            <Text>
              Abgerechnet wird taggenau: Der Monatspreis geteilt durch 30 ergibt den Tagessatz, beim Grundpreis rund 72 €.
              Sie zahlen erst, wenn die Betreuungskraft da ist, und nur für die Tage, an denen sie da ist. Der Vertrag ist
              täglich kündbar.
            </Text>
            <RechnerKasten src="apex-kosten" />
          </Abschnitt>

          <Abschnitt id="preisfaktoren" titel="Was den Preis bewegt: alle Preisfaktoren">
            <Text>
              Der Kostenrechner stellt Ihnen ein paar Fragen zur Pflegesituation. Jede Antwort hat einen festen Aufschlag,
              den wir hier offenlegen. Es gibt keine versteckten Posten, und die Antworten, die den Preis nicht ändern,
              sehen Sie auch: Pflegegrad 1 bis 4, die Erfahrung der Betreuungskraft und ein Rollator.
            </Text>
            <Preisfaktoren />
            <Punkte
              punkte={[
                { title: 'Nachts Hilfe', desc: 'Braucht Ihr Angehöriger nachts regelmäßig Hilfe, etwa bei Demenz oder beim Gang zur Toilette, kostet das mehr. Gelegentlich sind es 50 €, einmal pro Nacht 100 €, mehrmals pro Nacht 300 €. Die Betreuungskraft hat dann tagsüber mehr Ruhezeit.' },
                { title: 'Deutschkenntnisse', desc: 'Grundlegende Kenntnisse sind im Grundpreis enthalten. Eine Betreuungskraft, die sich flüssig unterhält („kommunikativ“), kostet 250 € mehr, gute Deutschkenntnisse 450 €. Bei Demenz ist das oft wichtiger als bei rein körperlichem Hilfebedarf.' },
                { title: 'Zwei Personen', desc: 'Ein Ehepaar kostet 450 € mehr als eine Person. Leben weitere Personen im Haushalt, für die die Betreuungskraft mitkocht und mitwäscht, sind es 200 € mehr.' },
                { title: 'Mobilität', desc: 'Ist Ihr Angehöriger auf den Rollstuhl angewiesen oder bettlägerig, kostet die Betreuung 100 € mehr, weil Umlagern und Transfers Zeit und Kraft brauchen.' },
                { title: 'Wünsche', desc: 'Ein Führerschein kostet 100 € mehr, der ausdrückliche Wunsch nach einer Frau ebenfalls 100 €. Pflegegrad 5 kostet 50 € mehr.' },
              ]}
            />
            <Text>
              Ein Beispiel: Eine Person mit Pflegegrad 4, bettlägerig, einmal pro Nacht Hilfe, Betreuungskraft mit
              kommunikativem Deutsch. Der Preis liegt bei 2.150 + 100 + 100 + 250 = 2.600 € im Monat. Nach 800 € Pflegegeld,
              295 € Entlastungsbudget und 333 € Steuerermäßigung bleiben ab ca. 1.172 € selbst zu tragen.
            </Text>
          </Abschnitt>

          <Abschnitt id="nebenkosten" titel="Was dazukommt, und was nicht">
            <Text>
              Der Monatspreis ist der Preis. Drei Posten kommen dazu, alle stehen so im Vertrag, den Sie vor der Entscheidung
              lesen können:
            </Text>
            <Punkte
              punkte={[
                { title: 'An- und Abreise', desc: 'Die Betreuungskraft wird zu Ihnen gebracht und wieder abgeholt. Das kostet 125 € je Strecke. Beim Wechsel alle 6 bis 8 Wochen fallen also 250 € an. Am Wechseltag berechnen wir den Tagessatz für beide Betreuungskräfte, weil An- und Abreisetag Arbeitstage sind.' },
                { title: 'Kost und Logis', desc: 'Die Betreuungskraft wohnt bei Ihnen: ein eigenes Zimmer, Verpflegung, Küche und Bad zur Mitbenutzung, Internet. Das stellen Sie, wie bei einem Mitbewohner.' },
                { title: 'Feiertage', desc: 'An neun gesetzlichen Feiertagen im Jahr gilt der doppelte Tagessatz. Welche das sind, steht im Vertrag.' },
              ]}
            />
            <Kasten augenbraue="Nicht im Preis, aber auch nicht Ihr Problem" titel="Was wir nicht berechnen">
              <HakenListe
                punkte={[
                  'Keine Vermittlungsgebühr, keine Anzahlung, keine Aufnahmegebühr',
                  'Keine Krankheitstage: Fällt die Betreuungskraft aus, zahlen Sie für diese Tage nichts',
                  'Keine Mindestlaufzeit und keine Kündigungsfrist: täglich kündbar',
                  'Kein Aufpreis für die Organisation des Wechsels oder für Ihre Ansprechpartnerin',
                ]}
              />
              <MehrDazu label="Alles im Wortlaut:" links={[{ href: MUSTERVERTRAG, text: 'Mustervertrag als PDF' }, { href: '/leistungen', text: 'Was die Betreuungskraft übernimmt' }]} />
            </Kasten>
          </Abschnitt>

          <Abschnitt id="pflegegrad-kosten" titel="Was kostet 24-Stunden-Pflege nach Pflegegrad?">
            <Text>
              Der Preis der Betreuung hängt kaum vom Pflegegrad ab, nur Pflegegrad 5 kostet 50 € mehr. Ihr Eigenanteil dagegen
              sinkt mit jedem Pflegegrad, denn das Pflegegeld steigt. Beim Grundpreis für eine Person bleibt nach Pflegegeld,
              anteiligem Entlastungsbudget und Steuerermäßigung:
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
              fuss="Stand September 2026, Werte aus unserem Kostenrechner · zzgl. An- und Abreise 125 € je Strecke · Budget-Anteil setzt anerkannte Verhinderungspflege voraus"
            />
            <KostenAufteilung />
            <Punkte
              punkte={[
                { title: 'Ohne Pflegegrad', desc: 'Die Betreuung ist auch ohne Pflegegrad möglich, es gibt dann aber kein Pflegegeld und kein Entlastungsbudget. Beantragen Sie den Pflegegrad parallel; er wird ab dem Antragsmonat gezahlt.' },
                { title: 'Pflegegrad 1', desc: 'Kein Pflegegeld und kein Entlastungsbudget. Der Entlastungsbetrag von 131 € im Monat gilt für anerkannte Alltagshilfen, in der Regel nicht für die Betreuungskraft. Ab Pflegegrad 2 lohnt sich die Betreuung finanziell deutlich mehr.' },
                { title: 'Pflegegrad 2 bis 5', desc: 'Pflegegeld und Entlastungsbudget kommen direkt zu Ihrem Angehörigen; der Preis für die Betreuung bleibt gleich. Wer zu niedrig eingestuft ist, verschenkt jeden Monat Geld: Ein Widerspruch oder ein Antrag auf Höherstufung lohnt sich.' },
              ]}
            />
            <Text>
              Quellen:{' '}
              <a href="https://www.gesetze-im-internet.de/sgb_11/__37.html" target="_blank" rel="noopener noreferrer" className={QUELLE}>§ 37 SGB XI (Pflegegeld)</a>{' · '}
              <a href="https://www.gesetze-im-internet.de/sgb_11/__42a.html" target="_blank" rel="noopener noreferrer" className={QUELLE}>§ 42a SGB XI (gemeinsamer Jahresbetrag)</a>{' · '}
              <a href="https://www.gesetze-im-internet.de/estg/__35a.html" target="_blank" rel="noopener noreferrer" className={QUELLE}>§ 35a EStG (Steuerermäßigung)</a>{' · '}
              <a href="https://www.bundesgesundheitsministerium.de/themen/pflege/online-ratgeber-pflege/leistungen-der-pflegeversicherung/leistungen-im-ueberblick" target="_blank" rel="noopener noreferrer" className={QUELLE}>BMG-Leistungsübersicht</a>{' · '}
              Stand: September 2026
            </Text>
            <MehrDazu label="Mehr dazu:" links={[{ href: '/pflegegrade', text: 'Alle Pflegegrade 2026' }, { href: '/pflegegrad-beantragen', text: 'Pflegegrad beantragen' }, { href: '/pflegegrad-erhoehen', text: 'Pflegegrad erhöhen' }]} />
          </Abschnitt>

          <Abschnitt id="zwei-personen" titel="Was kostet 24-Stunden-Pflege für zwei Personen?">
            <Text>
              Werden beide Partner betreut, kostet die Betreuung ab 2.600 € im Monat, also 450 € mehr als für eine Person.
              Eine Betreuungskraft versorgt beide. Dafür hat jeder Partner mit Pflegegrad seinen eigenen Anspruch auf
              Pflegegeld und Entlastungsbudget; die Steuerermäßigung gibt es einmal je Haushalt.
            </Text>
            <Tabelle
              titel="Beispiel: Ehepaar, Pflegegrad 3 und Pflegegrad 2"
              zeilen={[
                ['Betreuung im Monat (Ehepaar)', 'ab 2.600 €'],
                ['Pflegegeld (599 € + 347 €)', '− 946 €'],
                ['Entlastungsbudget (2 × 295 €)', '− 590 €'],
                ['Steuerermäßigung (einmal je Haushalt)', '− 333 €'],
                [<strong key="s">Selbst zu tragen im Monat</strong>, <strong key="w">ab ca. 731 €</strong>],
              ]}
              betont={1}
              fuss="Stand September 2026, Werte aus unserem Kostenrechner · zzgl. An- und Abreise 125 € je Strecke · Budget-Anteil setzt anerkannte Verhinderungspflege für beide voraus"
            />
            <Text>
              Für zwei Personen ist die Betreuung zu Hause damit oft weniger als ein Viertel dessen, was zwei Heimplätze
              kosten würden. Braucht einer der beiden nachts Hilfe oder ist bettlägerig, gelten die Aufschläge von oben.
            </Text>
          </Abschnitt>

          <Abschnitt id="wer-zahlt" titel="Wer zahlt die 24-Stunden-Pflege? Pflegekasse, Krankenkasse, Steuer, Sozialamt">
            <Text>
              Die Pflegekasse zahlt die Betreuungskraft nicht direkt. Sie zahlt Leistungen an Ihren Angehörigen, die Sie
              für die Betreuung einsetzen. Das Finanzamt beteiligt sich über die Steuer. Die Krankenkasse zahlt nichts,
              und das Sozialamt nur, wenn das Geld nicht reicht.
            </Text>
            <Punkte
              punkte={[
                { title: 'Pflegekasse: Pflegegeld', desc: 'Ab Pflegegrad 2, monatlich 347 € (Pflegegrad 2), 599 € (3), 800 € (4) oder 990 € (5). Es wird an den Pflegebedürftigen gezahlt, wenn die Pflege zu Hause selbst organisiert ist, mit Angehörigen oder einer Betreuungskraft.' },
                { title: 'Pflegekasse: Entlastungsbudget', desc: '3.539 € im Jahr für Verhinderungs- und Kurzzeitpflege, ab Pflegegrad 2. Sie können es für die Betreuungskraft einsetzen, wenn Ihre Kasse den Einsatz als Verhinderungspflege anerkennt; anteilig sind das 295 € im Monat. Fragen Sie vorher bei Ihrer Kasse nach.' },
                { title: 'Pflegekasse: Pflegehilfsmittel', desc: '42 € im Monat für Verbrauchsmittel wie Handschuhe und Desinfektionsmittel, ab Pflegegrad 1. Der Entlastungsbetrag von 131 € im Monat gilt für anerkannte Alltagshilfen, in der Regel nicht für die Betreuungskraft.' },
                { title: 'Krankenkasse', desc: 'Zahlt für die Betreuung nichts. Sie zahlt medizinische Behandlungspflege durch einen ambulanten Pflegedienst, etwa Spritzen, Verbände oder das Stellen von Medikamenten. Beides lässt sich gut kombinieren.' },
                { title: 'Finanzamt', desc: '20 % der Kosten als haushaltsnahe Dienstleistung, höchstens 4.000 € Ersparnis im Jahr. Schon beim Grundpreis erreichen Sie den Höchstbetrag. Eintragen in der Anlage Haushaltsnahe Aufwendungen der Steuererklärung.' },
                { title: 'Sozialamt', desc: 'Reichen Rente, Einkommen und Vermögen nicht, kann das Sozialamt Hilfe zur Pflege nach dem SGB XII leisten, auch zu Hause. Kinder werden erst ab einem Bruttoeinkommen von 100.000 € im Jahr herangezogen.' },
              ]}
            />
            <Kasten augenbraue="Entlastungsbudget" titel="3.539 € im Jahr, flexibel für Verhinderungs- und Kurzzeitpflege" ton="gruen">
              <HakenListe
                punkte={[
                  'Ab Pflegegrad 2, seit Juli 2025 ein gemeinsamer Jahresbetrag statt zwei getrennter Budgets',
                  'Frei aufteilbar, höchstens acht Wochen je Leistungsart',
                  'Keine Vorpflegezeit mehr: Anspruch ab dem ersten Tag mit Pflegegrad 2',
                  '2026 ist das erste volle Jahr ohne Übergangsregelungen',
                  'Nicht genutztes Budget verfällt am 31. Dezember',
                ]}
              />
            </Kasten>
            <Text>
              Ob AOK, TK, Barmer, DAK oder eine private Pflegeversicherung: Die Leistungen der Pflegekasse sind gesetzlich
              gleich, nur die Formulare unterscheiden sich. Landeszuschüsse kommen dazu, zum Beispiel das Bayerische
              Landespflegegeld von 500 € im Jahr ab Pflegegrad 2.
            </Text>
            <MehrDazu label="Mehr dazu:" links={[{ href: '/finanzierung', text: 'Alle Zuschüsse 2026 im Überblick' }, { href: '/pflegegeld', text: 'Pflegegeld 2026' }, { href: '/verhinderungspflege', text: 'Verhinderungspflege und Entlastungsbudget' }, { href: '/sozialhilfe-bei-pflegebedarf', text: 'Sozialhilfe bei Pflegebedarf' }]} />
          </Abschnitt>

          <Abschnitt id="polnische-pflegekraft" titel="Was kostet eine polnische Pflegekraft?">
            <Text>
              Unsere Betreuungskräfte kommen aus Polen, und der Preis ab 2.150 € im Monat gilt für sie. Darin enthalten sind
              Lohn und Sozialabgaben: Die Betreuungskraft ist bei uns angestellt und in Polen sozialversichert, für jeden
              Einsatz liegt eine A1-Bescheinigung vor. Sie werden nicht Arbeitgeber und zahlen weder Lohnsteuer noch
              Sozialabgaben.
            </Text>
            <Text>
              Wer bei „polnische Pflegekraft“ einen Preis unter 2.000 € liest, sollte fragen, wer der Arbeitgeber ist. Bei
              selbstständigen Kräften gilt die Familie in der Regel als Arbeitgeber, mit Nachforderungen der
              Sozialversicherung für bis zu vier Jahre. Bei Pflegegrad 3 bleiben bei uns nach den Zuschüssen ab ca. 923 €
              im Monat, bei Pflegegrad 4 ab ca. 722 €.
            </Text>
            <MehrDazu label="Mehr dazu:" links={[{ href: '/pflegekraft-aus-polen', text: 'Pflegekraft aus Polen: Ablauf, Recht, Kosten' }, { href: '/rechtssicher', text: 'Entsendemodell und A1-Bescheinigung' }]} />
          </Abschnitt>

          <Abschnitt id="vergleich" titel="24-Stunden-Pflege oder Pflegeheim: Was ist günstiger?">
            <Text>
              Der durchschnittliche Eigenanteil im Pflegeheim beträgt 2026 bundesweit 3.364 € im Monat im ersten Jahr
              (vdek-Auswertung, Stand 1. Juli 2026). Bei der 24-Stunden-Pflege zu Hause bleiben bei Pflegegrad 3 nach
              Kassenzuschüssen und Steuerermäßigung ab ca. 923 € im Monat. Und Ihr Angehöriger bleibt in seiner Wohnung,
              mit einer Betreuungskraft für sich allein.
            </Text>
            <HeimVsZuhause />
            <Tabelle
              kopf={['', '24-Stunden-Pflege', 'Pflegeheim']}
              zeilen={[
                ['Selbst zu tragen im Monat', 'ab ca. 923 €', 'Ø 3.364 €'],
                ['Betreuung', '1:1, bei Bedarf auch nachts', 'Pflegepersonal für mehrere Bewohner'],
                ['Wohnen', 'im eigenen Zuhause', 'Umzug ins Heim'],
                ['Kündigung', 'täglich', 'mit Frist zum Monatsende'],
              ]}
              betont={1}
              fuss="24-Stunden-Pflege: eine Person, Pflegegrad 3, Werte aus unserem Kostenrechner, zzgl. An- und Abreise · Pflegeheim: bundesweiter Durchschnitt, vdek-Auswertung, Stand 1. Juli 2026"
            />
            <MehrDazu label="Vollständiger Vergleich:" links={[{ href: '/24h-pflege-vs-pflegeheim-kosten', text: '24h-Pflege gegen Pflegeheim: Kostenvergleich 2026' }, { href: '/pflegeheim-kosten-deutschland', text: 'Pflegeheim-Kosten nach Bundesland' }]} />
          </Abschnitt>

          <Abschnitt id="eigenanteil" titel="Eigenanteil senken: alle Möglichkeiten">
            <Text>
              Mit der richtigen Kombination aller Leistungen sinkt der Betrag, den Sie selbst tragen, um mehrere hundert
              Euro im Monat. Das sind die Stellschrauben:
            </Text>
            <Punkte
              punkte={[
                { title: '1. Pflegegrad richtig beantragen', desc: <>Jede Stufe bedeutet hunderte Euro mehr Pflegegeld im Monat. Wer zu niedrig eingestuft ist, verschenkt Geld. Im Zweifel Widerspruch einlegen. <a href="/pflegegrad-beantragen" className={QUELLE}>Pflegegrad beantragen</a></> },
                { title: '2. Entlastungsbudget ausschöpfen', desc: <>3.539 € im Jahr verfallen, wenn sie nicht genutzt werden. Klären Sie mit Ihrer Kasse vorab, dass der Einsatz als Verhinderungspflege gilt, und reichen Sie die Rechnungen ein. <a href="/verhinderungspflege" className={QUELLE}>Verhinderungspflege und Entlastungsbudget</a></> },
                { title: '3. Steuerermäßigung nutzen', desc: <>20 % der Betreuungskosten, höchstens 4.000 € im Jahr. Die Rechnungen per Überweisung bezahlen, nicht bar, sonst erkennt das Finanzamt sie nicht an. <a href="/pflege-steuerlich-absetzen" className={QUELLE}>Pflege steuerlich absetzen</a></> },
                { title: '4. Pflegehilfsmittel beantragen', desc: '42 € im Monat für Verbrauchsmittel, direkt bei der Pflegekasse. Sie werden nach Hause geliefert.' },
                { title: '5. Wohnraumanpassung fördern lassen', desc: <>Bis 4.180 € je Maßnahme für Umbauten wie Badumbau oder Treppenlift, bei mehreren Maßnahmen mehrfach. <a href="/wohnraumanpassung-foerderung" className={QUELLE}>Wohnraumanpassung: Förderung</a></> },
                { title: '6. Landeszuschüsse prüfen', desc: <>Bayern zahlt 500 € Landespflegegeld im Jahr ab Pflegegrad 2, andere Länder haben eigene Programme. <a href="/foerderungen-nach-bundesland" className={QUELLE}>Förderungen nach Bundesland</a></> },
              ]}
            />
            <MehrDazu label="Alle Tipps:" links={[{ href: '/eigenanteil-24h-pflege-senken', text: 'Eigenanteil senken: alle Möglichkeiten 2026' }]} />
          </Abschnitt>

          <Abschnitt id="guenstiger" titel="Günstiger geht es nur auf eigenes Risiko">
            <Text>
              Angebote unter 2.000 € im Monat gibt es, meist von „selbstständigen“ Betreuungskräften oder über private
              Vermittlung. Wer im Haushalt wohnt, weisungsgebunden arbeitet und nur einen Auftraggeber hat, ist in der Regel
              scheinselbstständig. Dann gelten Sie als Arbeitgeber: Sozialversicherungsbeiträge können für bis zu vier
              Jahre nachgefordert werden, dazu Bußgelder. Der Preisvorteil ist dann schnell aufgebraucht.
            </Text>
            <Text>
              Auch die oft zitierten 1.850 € der Caritas gibt es so nicht. Beim Modell CariFair sind Sie selbst Arbeitgeber.
              Nach Angaben von{' '}
              <a href="https://carifair.de/fuer-pflegebeduerftigeund-angehoerige/kosten" target="_blank" rel="noopener noreferrer" className={QUELLE}>CariFair</a>{' '}
              zahlen Sie dort rund 2.730 € Bruttogehalt, dazu etwa 600 € Sozialabgaben und 170 € Koordination im Monat.
              Die Betreuungskraft arbeitet dafür 38,5 Stunden in der Woche. Bei den großen Anbietern beginnen die Preise
              2026 zwischen rund 2.500 und 3.000 € im Monat. Wir liegen mit 2.150 € darunter, weil unsere Betreuungskräfte
              bei uns angestellt sind und keine Vermittlungsgebühr anfällt. Dazu kommt die Bestpreisgarantie: nie mehr als
              für ein vergleichbares Angebot.
            </Text>
            <MehrDazu label="Mehr dazu:" links={[{ href: '/scheinselbststaendigkeit-pflege-vermeiden', text: 'Scheinselbstständigkeit vermeiden' }, { href: '/anbieter-vergleich', text: 'Anbieter im Vergleich: Preise, Gebühren, Vertragsbindung' }]} />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen zu den Kosten der 24-Stunden-Pflege">
            <Fragen fragen={FRAGEN} />
            <MehrDazu label="Ihr Preis:" links={[{ href: RECHNER, text: 'Preis und passende Pflegekräfte in 2 Minuten' }]} />
          </Abschnitt>

          <Abschnitt id="weitere-themen" titel="Alle Artikel zu Kosten und Finanzierung">
            <MehrDazu label="Zuschüsse und Leistungen:" links={[
              { href: '/pflegegeld', text: 'Pflegegeld 2026' },
              { href: '/entlastungsbetrag', text: 'Entlastungsbetrag' },
              { href: '/verhinderungspflege', text: 'Verhinderungspflege und Entlastungsbudget' },
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
              { href: '/pflegeheim-kosten-deutschland', text: 'Pflegeheim-Kosten je Bundesland' },
              { href: '/24h-pflege-vs-pflegeheim-kosten', text: '24h-Pflege gegen Pflegeheim: Kosten' },
            ]} />
          </Abschnitt>
        </RatgeberRumpf>
      </div>

      <KontaktBand />
    </>
  )
}
