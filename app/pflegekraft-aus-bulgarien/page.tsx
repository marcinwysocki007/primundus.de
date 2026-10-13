import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, Fragen, Gruppen, Kasten, Liste, MehrDazu, RatgeberKopf, RatgeberRumpf, RechnerKasten, Text, Werte, Zwischentitel,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

// Neufassung 13.10.2026 als neutraler Ratgeber: Primundus tritt nur als Herausgeber auf, ohne eigene Preise und ohne
// Aussage, ob Primundus Kräfte aus Bulgarien hat. Deshalb ist auch der Rahmen neutral (RechnerKasten, Seitenleiste und
// Schlussband mit `neutral`, Schlussband ohne Bewertungen). Zahlen nur mit Quelle (Abschnitt „Quellen“).

const AKTUALISIERT = aktualisiertAm('pflegekraft-aus-bulgarien', '13. Oktober 2026')
const SRC = 'apex-pflegekraft-bulgarien'
const LINK = 'font-semibold text-pm-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors'

// Sprungmarke „arbeitszeit“ statt „24-stunden“: IDs mit Ziffer am Anfang brauchen in CSS-Selektoren eine Maskierung
const SECTIONS = [
  { id: 'arbeitszeit', title: 'Was 24 Stunden heißt' },
  { id: 'fachkraft', title: 'Fachkraft oder Betreuungskraft' },
  { id: 'kosten', title: 'Was sie kostet' },
  { id: 'kasse', title: 'Was die Pflegekasse zahlt' },
  { id: 'legal', title: 'Legal mit A1' },
  { id: 'sprache', title: 'Deutsch und Kyrillisch' },
  { id: 'anreise', title: 'Anreise und Wechsel' },
  { id: 'erfahrungen', title: 'Erfahrungen' },
  { id: 'checkliste', title: 'Checkliste' },
  { id: 'faq', title: 'Häufige Fragen' },
  { id: 'quellen', title: 'Quellen' },
]

// Sichtbare Fragen = Daten für das FAQ-Schema (eine Quelle, Zeichen für Zeichen gleich)
const FRAGEN = [
  { q: 'Was kostet eine Pflegekraft aus Bulgarien?', a: 'Die Verbraucherzentrale rechnet bei einer entsandten Kraft mit etwa 2.800 bis 3.500 € im Monat, bei einer Anstellung im Haushalt mit mindestens 2.800 €; dazu kommen Zimmer und Verpflegung. Ein Beispiel mit Pflegegrad 4 und einem Angebot über 3.400 €: Nach Pflegegeld und voller Steuerermäßigung zahlen Sie ca. 2.267 € selbst. Der Gemeinsame Jahresbetrag senkt diesen Betrag nicht; aus ihm zahlt die Kasse nur Ersatzpflege, wenn eine private Pflegeperson verhindert ist, und Kurzzeitpflege.' },
  { q: 'Sind bulgarische Pflegekräfte ausgebildete Pflegefachkräfte?', a: 'Manche haben eine Pflegeausbildung. In der Betreuung zu Hause arbeiten sie aber in der Regel als Betreuungskraft, solange sie keine deutsche Berufserlaubnis als Pflegefachkraft haben und nicht entsprechend angestellt sind. Erlaubt sind in der Betreuung zu Hause Hilfe im Haushalt, Begleitung im Alltag und Grundpflege. Spritzen und Verbände kann die Hausärztin als häusliche Krankenpflege verordnen; in der Regel übernimmt dann ein Pflegedienst diese Leistungen. Pflegefachfrau oder Pflegefachmann darf sich in Deutschland nur nennen, wer die behördliche Erlaubnis hat; dafür sind unter anderem Deutschkenntnisse nötig, in der Regel auf Niveau B2.' },
  { q: 'Ist eine bulgarische Pflegekraft legal?', a: 'Ja, wenn Vertrag und Alltag stimmen. Bulgarische Staatsangehörige dürfen seit 2014 ohne Arbeitserlaubnis in Deutschland arbeiten. Legal sind die Entsendung durch eine Firma in Bulgarien mit A1-Bescheinigung, die Anstellung bei Ihnen mit Anmeldung und eine echte Selbstständigkeit. Wohnt eine „selbstständige“ Kraft bei Ihnen und arbeitet nach Ihren Vorgaben, besteht die Gefahr der Scheinselbstständigkeit; dann gelten Sie als Arbeitgeber und zahlen die Sozialbeiträge nach.' },
  { q: 'Arbeitet eine 24-Stunden-Pflegekraft aus Bulgarien 24 Stunden am Tag?', a: 'Nein. Sie wohnt bei der pflegebedürftigen Person und ist deshalb in der Nähe, arbeitet aber nicht den ganzen Tag. Die Verbraucherzentrale nennt 48 Stunden pro Woche als Grenze. Hilft sie jede Nacht, braucht sie dafür einen Ausgleich, etwa freie Stunden am Tag, in denen Familie oder Pflegedienst übernehmen.' },
  { q: 'Zahlt die Pflegekasse eine Pflegekraft aus Bulgarien?', a: 'Nicht direkt. Die Pflegekasse zahlt das Pflegegeld an die pflegebedürftige Person, ab Pflegegrad 2 zwischen 347 und 990 € im Monat, und die kann es frei für eine Betreuungskraft einsetzen. Den Gemeinsamen Jahresbetrag von bis zu 3.539 € gibt es nur für Kurzzeitpflege und für zusätzliche Ersatzpflege, wenn eine private Pflegeperson verhindert ist. Beim Finanzamt gibt es bis zu 4.000 € Steuerermäßigung im Jahr, soweit Einkommensteuer anfällt.' },
  { q: 'Was macht eine Haushaltshilfe aus Bulgarien?', a: 'Eine Haushaltshilfe aus Bulgarien kocht, kauft ein und kümmert sich um die Wäsche. Ihrem Vater hilft sie beim Waschen, Anziehen und Essen und leistet ihm Gesellschaft. Spritzen und Verbände übernimmt auf Verordnung der Hausärztin ein Pflegedienst. Auch wenn sie bei Ihrem Vater wohnt, hat ihre Arbeitszeit eine Grenze; die Verbraucherzentrale nennt 48 Stunden pro Woche.' },
  { q: 'Welche Erfahrungen machen Familien mit bulgarischen Pflegekräften?', a: 'Verlässliche Berichte einzelner Familien gibt es kaum; was sich belegen lässt, gilt für alle Herkunftsländer. Für Vermittlungsagenturen gibt es nach dem Bericht der Bundesministerien von 2024 keine verbindlichen Mindeststandards; unklare Verträge, Sprachgrenzen und die schwer zu trennende Arbeits- und Ruhezeit nennt er als Schwachstellen. Vor dem Start helfen drei Prüfungen: Firma und A1-Bescheinigung, ein Videogespräch mit dem Medikationsplan und schriftlich festgelegte freie Zeiten.' },
  { q: 'Zahlt die Pflegekasse weiter, wenn mein Vater zur Pflege nach Bulgarien zieht?', a: 'Das Pflegegeld zahlt sie weiter, solange Ihr Vater in einem EU-Staat lebt und in der deutschen Pflegeversicherung versichert bleibt (§ 34 Abs. 1a SGB XI). Bulgarien gehört seit 2007 zur EU. Andere Leistungen der Pflegekasse ruhen bei einem Aufenthalt im Ausland. Sprechen Sie vor dem Umzug mit der Pflegekasse und klären Sie auch die Krankenversicherung.' },
]

const QUELLEN = [
  'Verbraucherzentrale: Ausländische Betreuungskräfte, wie geht das legal? (Kosten, 48-Stunden-Grenze, A1)',
  'Stiftung Warentest: Pflege zu Hause, Betreuungskräfte aus dem Ausland (Finanztest 8/2022)',
  'Abschlussbericht der Arbeitsgruppe von Bundesarbeitsministerium, Bundesgesundheitsministerium und Pflegebevollmächtigter zur Live-In-Betreuung, November 2024',
  'Pflegewegweiser NRW: So viel kostet eine ausländische Haushalts- und Betreuungskraft (Verhinderungspflege); Frage des Monats Mai 2023 (zusätzliche Stunden bei Kräften im Haushalt)',
  'GKV-Spitzenverband: Gemeinsames Rundschreiben zu den leistungsrechtlichen Vorschriften des SGB XI, 2026 (Verhinderungspflege)',
  'Bundesregierung: Gesetzentwurf zum Pflegeneuordnungsgesetz, 2026 (Pläne ab 2027)',
  'Gemeinsamer Bundesausschuss: Häusliche-Krankenpflege-Richtlinie, Nr. 26 (Medikamente)',
  'Anerkennung in Deutschland (Bundesinstitut für Berufsbildung): Pflegefachperson',
  'Bundesministerium für Arbeit und Soziales: Pressemitteilung vom Dezember 2013 zur Freizügigkeit ab 2014',
  'Europäische Union: Länderprofil Bulgarien; Your Europe: Stellen, die die A1-Bescheinigung ausstellen',
  'Deutsche Verbindungsstelle Krankenversicherung Ausland (DVKA): Länderseite Bulgarien, Entsendung von abhängig beschäftigten Personen',
  'Europäische Kommission: Rede „Kyrillisch, das dritte amtliche Alphabet der EU“ (Sofia, 2007)',
  'Gesetze: § 1 und § 2 Pflegeberufegesetz; § 34, § 36, § 37, § 39, § 42a, § 45b SGB XI; § 37 SGB V (häusliche Krankenpflege); § 35a EStG; § 7 SGB IV; § 110 SGB VII; Art. 12 Verordnung (EG) 883/2004',
  'Entfernungen: eigene Berechnung der Luftlinie zwischen den Stadtzentren',
]

export const metadata: Metadata = {
  title: 'Pflegekraft aus Bulgarien: was sie darf und was sie kostet',
  description: 'Eine Pflegekraft aus Bulgarien übernimmt Haushalt und Grundpflege. Die Verbraucherzentrale rechnet bei Entsendung mit etwa 2.800 bis 3.500 € im Monat.',
  alternates: { canonical: 'https://primundus.de/pflegekraft-aus-bulgarien' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Pflegekraft aus Bulgarien: was sie darf und was sie kostet',
    description: 'Fachkraft oder Betreuungskraft: was eine Kraft aus Bulgarien bei Ihnen darf und was nach Pflegegeld und Steuer bleibt.',
    url: 'https://primundus.de/pflegekraft-aus-bulgarien',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pflegekraft aus Bulgarien: was sie leisten darf und was sie kostet',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/pflegekraft-aus-bulgarien',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Organisation', item: 'https://primundus.de/organisation' },
      { '@type': 'ListItem', position: 3, name: 'Pflegekraft aus Bulgarien', item: 'https://primundus.de/pflegekraft-aus-bulgarien' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FRAGEN.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  },
]

export default function PflegekraftAusBulgarien() {
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
            { label: 'Organisation', href: '/organisation' },
            { label: 'Pflegekraft aus Bulgarien' },
          ]}
          augenbraue="Ratgeber Pflegekräfte"
          titel="Pflegekraft aus Bulgarien: was sie leisten darf und was sie kostet"
          einleitung="Bulgarische Betreuungskräfte dürfen seit 2014 ohne Arbeitserlaubnis bei Ihnen arbeiten. Sie übernehmen Haushalt, Betreuung und Grundpflege; für Spritzen und Verbände kommt in der Regel ein Pflegedienst. Für eine entsandte Kraft, die bei einer Firma im Ausland angestellt bleibt, rechnet die Verbraucherzentrale mit etwa 2.800 bis 3.500 € im Monat. Bei Pflegegrad 4 senken Pflegegeld und Steuerermäßigung den Betrag um bis zu 1.133 € im Monat. Bei einer Entsendung lassen Sie sich vor Arbeitsbeginn die A1-Bescheinigung für genau diese Kraft zeigen; sie belegt, dass für die Kraft das bulgarische Sozialversicherungsrecht gilt."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="13 Min."
          blickVerweise={[
            { href: '#arbeitszeit', titel: '24 Stunden', text: 'die Kraft wohnt bei Ihnen, arbeitet aber nicht den ganzen Tag' },
            { href: '#fachkraft', titel: 'Fachkraft', text: 'wann eine Krankenschwester aus Bulgarien als Pflegefachkraft arbeiten darf' },
            { href: '#kosten', titel: 'Kosten', text: 'ein Angebot über 3.400 €, Zeile für Zeile erklärt' },
            { href: '#kasse', titel: 'Pflegekasse', text: 'was sie zahlt, auch wenn Ihr Vater nach Bulgarien zieht' },
            { href: '#legal', titel: 'Legal', text: 'Entsendung mit A1-Bescheinigung, Anstellung bei Ihnen oder Selbstständigkeit' },
            { href: '#sprache', titel: 'Sprache', text: 'kyrillische Schrift, Deutschniveau und ein Test mit dem Medikationsplan' },
          ]}
        />

        <RatgeberRumpf abschnitte={SECTIONS} src={SRC} neutral>
          <Abschnitt id="arbeitszeit" titel="24-Stunden-Pflegekräfte aus Bulgarien: was „24 Stunden“ bedeutet">
            <Text>
              „24 Stunden“ heißt: Die Kraft wohnt bei Ihrem Vater. Arbeiten darf sie nicht den ganzen Tag. Die Verbraucherzentrale hält eine
              Betreuung über 24 Stunden durch eine einzige Person für legal nicht machbar und nennt 48 Stunden pro Woche als Grenze.
            </Text>
            <Text>
              Ein Beispiel: Ihr Vater steht jede Nacht zweimal auf und braucht Hilfe auf dem Weg ins Bad. Die Kraft hilft, weil sie im Haus
              ist. Für diese Nächte braucht sie einen Ausgleich, etwa freie Stunden am Nachmittag, in denen Sie oder ein Pflegedienst da sind.
              Sprechen Sie regelmäßige Hilfe in der Nacht vor Vertragsbeginn an: was sie kostet und welchen Ausgleich die Kraft bekommt.
            </Text>
            <Text>
              Die Arbeitsgruppe von Bundesarbeits- und Bundesgesundheitsministerium empfiehlt in ihrem Bericht von 2024 einen Pflege-Mix, bei
              dem sich Betreuungskraft, Familie und Pflegedienst die Aufgaben teilen.
            </Text>
            <Text>
              Zum Alltag der Kraft gehören Pausen und freie Zeit außer Haus; nachts schläft sie, wenn nichts ist. Sie braucht ein eigenes
              Zimmer, das sie abschließen kann, Verpflegung und Internet, um mit ihrer Familie in Bulgarien zu sprechen.
            </Text>
          </Abschnitt>

          <Abschnitt id="fachkraft" titel="Pflegefachkräfte aus Bulgarien: wann eine Kraft als Fachkraft arbeiten darf">
            <Text>
              „Pflegefachfrau“ und „Pflegefachmann“ sind in Deutschland geschützte Berufsbezeichnungen. Wer sie führen will, braucht eine
              Erlaubnis der zuständigen Behörde (§ 1 Pflegeberufegesetz). Voraussetzung sind unter anderem die nötigen Deutschkenntnisse
              (§ 2), in der Regel auf Niveau B2.
            </Text>
            <Text>
              Für Pflegeabschlüsse aus der EU gilt oft eine automatische Anerkennung. Die Behörde vergleicht dann nicht jede Ausbildung im
              Einzelnen, und das Verfahren dauert ab vollständigen Unterlagen höchstens drei Monate. Einen Antrag muss die Pflegekraft aber in
              jedem Fall stellen.
            </Text>
            <Zwischentitel>Für die Betreuung zu Hause</Zwischentitel>
            <Text>
              Ob eine Anzeige von Haushaltshilfe oder von Pflegekraft aus Bulgarien spricht: Erlaubt sind nach dem Bericht der
              Bundesministerien in beiden Fällen Haushalt, Betreuung und Grundpflege. In der Betreuung zu Hause arbeitet deshalb auch eine
              erfahrene Krankenschwester aus Bulgarien in der Regel als Betreuungskraft, solange sie nicht mit deutscher Berufserlaubnis als
              Pflegefachkraft angestellt ist. Sie hilft im Haushalt, begleitet Ihren Vater durch den Tag und übernimmt die Grundpflege:
              Waschen, Anziehen, Essen, Toilettengang.
            </Text>
            <Text>
              Fragen Sie trotzdem nach Ausbildung und Erfahrung, etwa mit Demenz oder nach einem Schlaganfall. Daran erkennen Sie, wie sicher
              die Kraft ist, beim Umlagern ebenso wie nachts, wenn Ihr Vater unruhig wird.
            </Text>
            <Text>
              Spritzen, Wundversorgung und das Stellen von Medikamenten sind Behandlungspflege. Verordnet die Hausärztin häusliche
              Krankenpflege, übernimmt das ein ambulanter Pflegedienst, und die Krankenkasse zahlt bis auf die gesetzliche Zuzahlung. Ohne
              Verordnung klären Sie mit der Hausärztin oder einem Pflegedienst, wer diese Aufgaben sicher übernimmt; die Betreuungskraft sollte
              es nicht tun.
            </Text>
            <Kasten augenbraue="Für Kliniken und Heime">
              <Text>
                Pflegefachkräfte aus Bulgarien brauchen für die Arbeit als Fachkraft die deutsche Erlaubnis. Den Weg zur Anerkennung und die
                zuständige Stelle zeigt das Portal „Anerkennung in Deutschland“ des Bundesinstituts für Berufsbildung.
              </Text>
            </Kasten>
          </Abschnitt>

          <Abschnitt id="kosten" titel="Was kostet eine bulgarische Pflegekraft?">
            <Text>
              Die Verbraucherzentrale rechnet bei Entsendung mit etwa 2.800 bis 3.500 € im Monat, bei einer Anstellung im Haushalt mit
              mindestens 2.800 €. Wie teuer ein Angebot ausfällt, hängt laut Verbraucherzentrale vom Hilfebedarf und von den
              Deutschkenntnissen ab. Ältere Zahlen von Stiftung Warentest lagen 2022 bei deutlich über 2.000 bis über 3.000 € im Monat
              (Finanztest 8/2022).
            </Text>
            <Zwischentitel>Ein Angebot Zeile für Zeile lesen</Zwischentitel>
            <Text>
              Angenommen, ein Anbieter nennt 3.400 € im Monat für Ihren Vater mit Pflegegrad 4. Gehen Sie das Angebot mit diesen Fragen durch:
            </Text>
            <Liste
              punkte={[
                'Steckt die Sozialversicherung der Kraft in Bulgarien im Preis? Die A1-Bescheinigung zeigt, dass für sie das bulgarische Sozialversicherungsrecht gilt; ob die Beiträge gezahlt werden, zeigt sie nicht.',
                'Kommt die Anreise bei jedem Wechsel dazu, oder steht sie im Preis?',
                'Welche Zuschläge gelten für Nächte, Feiertage oder eine zweite Person, und ab wann?',
                'Verlangt der Anbieter eine Vermittlungsgebühr oder eine Anzahlung?',
              ]}
            />
            <Text>Zimmer und Verpflegung stellen Sie zusätzlich.</Text>
            <Zwischentitel>Nach Pflegegeld und Steuer</Zwischentitel>
            <Werte
              zeilen={[
                ['3.400 €', 'Monatspreis laut Angebot, Beispielwert aus der Spanne der Verbraucherzentrale'],
                ['− 800 €', 'Pflegegeld bei Pflegegrad 4'],
                ['bis − 333 €', 'Steuerermäßigung, 4.000 € im Jahr geteilt durch 12, soweit Einkommensteuer anfällt; nur mit Rechnung und Überweisung'],
                ['ca. 2.267 €', 'bleiben im Monat bei voller Steuerermäßigung, dazu Zimmer, Verpflegung und, je nach Angebot, die Anreise'],
              ]}
            />
            <Text>
              Den Gemeinsamen Jahresbetrag für Kurzzeit- und Verhinderungspflege, oft Entlastungsbudget genannt, ziehen Sie hier nicht ab: Er
              senkt den Monatspreis nicht. Fällt wenig Einkommensteuer an, zahlen Sie entsprechend mehr selbst.
            </Text>
            <MehrDazu
              label="Alle Kosten und Zuschüsse:"
              links={[
                { href: '/kosten', text: 'Was 24-Stunden-Pflege insgesamt kostet' },
                { href: '/finanzierung', text: 'Alle Kassenzuschüsse 2026' },
              ]}
            />
            <RechnerKasten src={SRC} neutral />
          </Abschnitt>

          <Abschnitt id="kasse" titel="Zahlt die Pflegekasse eine bulgarische Pflegekraft?">
            <Text>
              Direkt nicht. Die Pflegekasse überweist das Pflegegeld an Ihren Vater, und er entscheidet, wofür er es ausgibt, auch für eine
              Betreuungskraft (§ 37 SGB XI). Bei Pflegegrad 2 sind es 347 € im Monat, bei Pflegegrad 5 sind es 990 €.
            </Text>
            <Text>
              Der Gemeinsame Jahresbetrag von bis zu 3.539 € (§ 42a SGB XI) deckt Ausnahmen. Daraus zahlt die Kasse Pflege und Betreuung in
              einer Kurzzeitpflege, etwa nach dem Krankenhaus, und die Verhinderungspflege, wenn eine private Pflegeperson ausfällt, etwa Sie
              während einer Kur. Den normalen Monatspreis einer Kraft, die schon im Haushalt lebt, erstattet sie daraus nicht. Abrechnen können
              Sie nur Kosten, die zusätzlich entstehen, während Sie verhindert sind, etwa getrennt berechnete Extra-Stunden innerhalb der
              48-Stunden-Woche der Kraft (§ 39 SGB XI). Klären Sie das vorher schriftlich mit der Kasse.
            </Text>
            <Text>
              Beim Finanzamt setzen Sie 20 Prozent der Kosten ab, höchstens 4.000 € im Jahr (§ 35a EStG). Bei einem Anbieter klappt das nur mit
              Rechnung und Überweisung. Das Gesetz verlangt die Zahlung auf ein Konto (§ 35a Abs. 5 EStG); überweisen Sie deshalb auch den Lohn
              einer selbst angestellten Kraft. Die Ermäßigung mindert die Einkommensteuer; wer wenig Steuern zahlt, spart entsprechend weniger.
            </Text>
            <Text>
              Pflegesachleistungen rechnen nur Pflegedienste und Einzelpersonen ab, die mit der Pflegekasse einen Vertrag geschlossen haben
              (§ 36 Abs. 4 SGB XI). Den Entlastungsbetrag von 131 € im Monat erstattet die Kasse nur für Tages- und Nachtpflege,
              Kurzzeitpflege, Pflegedienste und nach Landesrecht anerkannte Angebote, in der Regel nicht für die Betreuungskraft.
            </Text>
            <Text>
              <strong>Geplant ab 2027:</strong> Der Gesetzentwurf der Bundesregierung zum Pflegeneuordnungsgesetz sieht für Pflegegrad 4 dann
              890 € Pflegegeld im Monat vor, heute sind es 800 €. Verhinderungspflege und Gemeinsamer Jahresbetrag sollen als eigene Leistungen
              wegfallen, ihr Geld soll in die neuen Budgets fließen. Beschlossen ist das noch nicht; bis dahin gelten die Beträge oben.
            </Text>
            <Zwischentitel>Pflege in Bulgarien</Zwischentitel>
            <Text>
              Zieht Ihr Vater zur Pflege nach Bulgarien, zahlt die Pflegekasse das Pflegegeld weiter, solange er in einem EU-Staat lebt (§ 34
              Abs. 1a SGB XI). Voraussetzung ist, dass er in der deutschen Pflegeversicherung versichert bleibt. Andere Leistungen der
              Pflegekasse ruhen bei einem Aufenthalt im Ausland. Sprechen Sie vor dem Umzug mit der Pflegekasse.
            </Text>
            <MehrDazu label="Mehr dazu:" links={[{ href: '/pflegegeld', text: 'Pflegegeld 2026: alle Beträge je Pflegegrad' }]} />
          </Abschnitt>

          <Abschnitt id="legal" titel="Legal mit A1-Bescheinigung aus Bulgarien, Anstellung bei Ihnen oder als Selbstständige">
            <Text>
              Für bulgarische Staatsangehörige gilt seit 2014 die volle Freizügigkeit. Legal ist die Betreuung, wenn Vertrag und Alltag zu
              einem von drei Modellen passen.
            </Text>
            <Zwischentitel>Entsendung durch eine Firma in Bulgarien</Zwischentitel>
            <Text>
              Die Kraft ist bei einer bulgarischen Firma angestellt, bleibt dort versichert und arbeitet höchstens 24 Monate am Stück bei Ihnen
              (Art. 12 Verordnung (EG) 883/2004). Auch die Ablösung ist geregelt: Die Kraft darf niemanden ersetzen, der zuvor nach
              Deutschland entsandt war. Die Deutsche Verbindungsstelle Krankenversicherung Ausland (DVKA) beschreibt eine Ausnahme. Muss die
              Vorgängerin die Entsendung unplanmäßig abbrechen, etwa wegen schwerer Krankheit, darf eine Ersatzkraft die restliche geplante
              Zeit übernehmen. Die A1-Bescheinigung stellt in Bulgarien die Nationale Agentur für Einnahmen aus, kurz NAP. Die Firma beantragt
              sie für eine bestimmte Person und einen bestimmten Zeitraum. Die Verbraucherzentrale rät, sich die A1 vor Arbeitsbeginn zeigen
              zu lassen und eine Kopie abzuheften.
            </Text>
            <Zwischentitel>Anstellung bei Ihnen</Zwischentitel>
            <Text>
              Sie werden Arbeitgeber und übernehmen Anmeldung, Beiträge, Lohnabrechnung, Urlaub und den Ersatz bei Krankheit. Dafür bestimmen
              Sie den Ablauf selbst.
            </Text>
            <Zwischentitel>Selbstständigkeit</Zwischentitel>
            <Text>
              Das ist nur legal, wenn die Kraft frei über Zeit und Ablauf entscheidet und weitere Auftraggeber haben kann.
            </Text>
            <Text>
              <strong>Hinweis:</strong> Es besteht die Gefahr der Scheinselbstständigkeit, wenn eine „selbstständige“ Kraft bei Ihrem Vater
              wohnt, sich nach Ihren Vorgaben richtet und keine weiteren Auftraggeber hat, mit folgenden Konsequenzen für die Familie: Sie
              gelten als Arbeitgeber (§ 7 SGB IV) und zahlen die Sozialversicherungsbeiträge nach.
            </Text>
            <Text>
              <strong>Hinweis:</strong> Es besteht die Gefahr der Schwarzarbeit, wenn für die Kraft niemand Sozialbeiträge zahlt, etwa weil sie
              gegen bar und ohne Anmeldung bei Ihnen arbeitet, mit folgenden Konsequenzen für die Familie: Die Sozialversicherung fordert die
              Beiträge nach. Verletzt sich die Kraft in Ihrem Haushalt, kann die Unfallkasse ihre Kosten von Ihnen zurückverlangen (§ 110
              Abs. 1a SGB VII). Ohne Rechnung entfällt außerdem die Steuerermäßigung.
            </Text>
            <MehrDazu
              label="Mehr dazu:"
              links={[
                { href: '/pflegekraft-legal-beschaeftigen', text: 'Die drei Modelle im Vergleich' },
                { href: '/scheinselbststaendigkeit-pflege-vermeiden', text: 'Scheinselbstständigkeit in der Pflege vermeiden' },
              ]}
            />
            <MehrDazu
              label="Andere Herkunftsländer:"
              links={[
                { href: '/pflegekraft-aus-polen', text: 'Pflegekraft aus Polen' },
                { href: '/pflegekraft-aus-rumaenien', text: 'Pflegekraft aus Rumänien' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="sprache" titel="Deutsch und Kyrillisch: so prüfen Sie die Verständigung vorher">
            <Text>
              Bulgarisch schreibt man in kyrillischer Schrift; seit dem EU-Beitritt Bulgariens 2007 ist Kyrillisch das dritte amtliche
              Alphabet der EU. Für den Alltag bei Ihnen zählt, ob die Kraft Handschrift und den Medikationsplan sicher liest und am Telefon
              versteht, was die Hausärztin sagt.
            </Text>
            <Text>
              Sprachzertifikate folgen dem Europäischen Referenzrahmen, von Stufe A1 für Anfänger bis C2; mit der A1-Bescheinigung zur
              Sozialversicherung hat die Sprachstufe A1 nichts zu tun. Ein Gespräch zeigt Ihnen mehr als ein Kürzel im Lebenslauf:
            </Text>
            <Liste
              punkte={[
                'Prüfen Sie im Videogespräch mit einem anonymisierten Beispielplan, ob die Kraft Anweisungen sicher versteht. Den echten Medikationsplan Ihres Vaters besprechen Sie nur mit seiner Einwilligung und nur mit den zuständigen Personen. Das Stellen der Medikamente gehört zur Behandlungspflege; die Betreuungskraft sollte es nicht übernehmen. Klären Sie mit der Hausärztin oder einem Pflegedienst, wer es sicher ausführt; ans Einnehmen kann die Betreuungskraft erinnern.',
                'Legen Sie ihr einen handgeschriebenen Zettel vor, etwa Ihren Einkaufszettel, und lassen Sie ihn vorlesen.',
                'Fragen Sie, was die Kraft tut, wenn Ihr Vater stürzt. In der Antwort sollte die 112 vorkommen und der Satz, den sie am Telefon sagen würde.',
              ]}
            />
            <Text>
              Schreiben Sie Wichtiges zusätzlich auf: Notrufnummern, Name und Nummer der Hausärztin, Allergien und die Adresse Ihres Vaters
              für den Rettungsdienst. Hängen Sie den Zettel an den Kühlschrank; dort findet die Kraft ihn auch in der Aufregung.
            </Text>
          </Abschnitt>

          <Abschnitt id="anreise" titel="Anreise aus Bulgarien: rund 1.100 Kilometer Luftlinie bis München">
            <Text>
              Von Sofia nach München sind es rund 1.100 Kilometer Luftlinie, nach Berlin rund 1.300. Je weiter die Anreise, desto wichtiger
              wird die Frage, wie schnell Ersatz kommt, wenn die Kraft krank wird. Klären Sie vor dem Start, wie die Kraft anreist, wer die
              Fahrt bezahlt und wer hilft, bis eine Ersatzkraft da ist.
            </Text>
            <Text>
              In manchen Modellen wechseln sich zwei feste Kräfte ab. Der Bericht der Ministerien beschreibt ein solches Tandem zweier Kräfte,
              die beide beim Haushalt angestellt sind und sich etwa alle drei Monate abwechseln. Ihr Vater kennt dann beide, und jede Übergabe
              fällt leichter. Bei einer Entsendung gilt für den Wechsel die <a href="#legal" className={LINK}>Regel zur Ablösung</a> aus dem
              EU-Recht.
            </Text>
          </Abschnitt>

          <Abschnitt id="erfahrungen" titel="Erfahrungen mit bulgarischen Pflegekräften: worauf Familien achten">
            <Text>
              Prüfbare Erfahrungsberichte von Familien gibt es kaum. Belegen lässt sich, was der Bericht der Bundesministerien über den Markt
              schreibt.
            </Text>
            <Text>
              In einem Projekt mit der Diakonie Württemberg, das Familien beim Anstellen hilft, kommen die meisten Kräfte aus Rumänien,
              Bulgarien und Polen. Die Zahl der Vermittlungsagenturen ist nach dem Bericht von etwa 60 im Jahr 2009 auf 266 im Jahr 2017
              gestiegen; verbindliche Mindeststandards gibt es für sie nicht. Die Betreuung im Haushalt ist anfällig für schlechte
              Arbeitsbedingungen, unabhängig vom Herkunftsland. Gründe dafür sind undurchsichtige Verträge, Sprachgrenzen und die schwer zu
              trennende Arbeits- und Ruhezeit.
            </Text>
            <Zwischentitel>Vier Fragen an sich selbst</Zwischentitel>
            <Liste
              punkte={[
                'Kenne ich den Namen der Firma, bei der die Kraft angestellt ist?',
                'Weiß ich, wann sie frei hat, und hält sich die Familie daran?',
                'Hat sie ein eigenes Zimmer und Internet für Anrufe nach Hause?',
                'Gibt es jemanden, den die Kraft und ich bei Streit anrufen können?',
              ]}
            />
          </Abschnitt>

          <Abschnitt id="checkliste" titel="Checkliste für ein Angebot aus Bulgarien">
            <Gruppen
              haken
              gruppen={[
                {
                  title: 'Vertrag',
                  punkte: [
                    'Vertragspartner mit Name, Sitz und Land',
                    'Kündigung: Frist und Mindestlaufzeit',
                    'Ersatz bei Krankheit: wie schnell, und wer die Fahrt zahlt',
                  ],
                },
                {
                  title: 'Person',
                  punkte: [
                    'A1-Bescheinigung für genau diese Kraft und diesen Zeitraum (bei einer Firma in Bulgarien von der NAP), vor Arbeitsbeginn',
                    'Videogespräch vor der Zusage, mit dem Test am Medikationsplan',
                    'Erfahrung mit dem Krankheitsbild Ihres Vaters, etwa Demenz oder Parkinson',
                    'Zimmer zum Abschließen und Internet sind vorbereitet',
                  ],
                },
                {
                  title: 'Geld',
                  punkte: ['Alle Zuschläge schriftlich: Anreise, Nächte, Feiertage, Gebühren', 'Rechnung und Überweisung statt Bargeld'],
                },
                {
                  title: 'Pflege',
                  punkte: ['Für Spritzen und Verbände: ein Pflegedienst mit Verordnung der Hausärztin'],
                },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen zur Pflegekraft aus Bulgarien">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>

          <Abschnitt id="quellen" titel="Quellen">
            <Liste punkte={QUELLEN} />
          </Abschnitt>

          <Weiterlesen aktuell="pflegekraft-aus-bulgarien" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand src={SRC} neutral ohneBewertungen />
      </div>
    </>
  )
}
