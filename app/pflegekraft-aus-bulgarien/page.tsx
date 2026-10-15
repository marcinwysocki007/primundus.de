import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, Fragen, Gruppen, Kasten, Liste, MehrDazu, RatgeberKopf, RatgeberRumpf, RechnerKasten, Text, Zwischentitel,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'

// Neufassung 13.10.2026 als neutraler Ratgeber, Wortlaut aus dem Entwurf Fassung 6e
// (seo-reports/entwuerfe/pflegekraft-aus-bulgarien-2026-10-13.md): Primundus tritt nur als Herausgeber auf, ohne eigene
// Preise und ohne Aussage, ob Primundus Kräfte aus Bulgarien hat. Deshalb ist auch der Rahmen neutral (RechnerKasten,
// Seitenleiste und Schlussband mit `neutral`, Schlussband ohne Bewertungen). Reihenfolge nach den Suchanteilen
// (Search Console, 480 Tage): Fachkraft, 24 Stunden, Aufgaben, Erfahrungen, Sprache, Legal, danach Angebot, Pflegekasse,
// Anreise und Checkliste. Kein Länderpreis. Zahlen nur mit Quelle (Abschnitt „Quellen“).

const AKTUALISIERT = aktualisiertAm('pflegekraft-aus-bulgarien', '15. Oktober 2026')
const SRC = 'apex-pflegekraft-bulgarien'
const LINK = 'font-semibold text-pm-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors'

// Sprungmarke „arbeitszeit“ statt „24-stunden“: IDs mit Ziffer am Anfang brauchen in CSS-Selektoren eine Maskierung.
// „kosten“ bleibt als Sprungmarke für Links von außen, die Überschrift spricht vom Angebot.
const SECTIONS = [
  { id: 'fachkraft', title: 'Fachkraft oder Betreuungskraft' },
  { id: 'arbeitszeit', title: 'Was 24 Stunden heißt' },
  { id: 'aufgaben', title: 'Was sie im Haushalt übernimmt' },
  { id: 'erfahrungen', title: 'Erfahrungen' },
  { id: 'sprache', title: 'Deutsch und Kyrillisch' },
  { id: 'legal', title: 'Legal: drei Wege' },
  { id: 'kosten', title: 'Ein Angebot prüfen' },
  { id: 'kasse', title: 'Was die Pflegekasse zahlt' },
  { id: 'anreise', title: 'Anreise und Wechsel' },
  { id: 'checkliste', title: 'Checkliste' },
  { id: 'faq', title: 'Häufige Fragen' },
  { id: 'quellen', title: 'Quellen' },
]

// Sichtbare Fragen = Daten für das FAQ-Schema (eine Quelle, Zeichen für Zeichen gleich)
const FRAGEN = [
  { q: 'Sind bulgarische Pflegekräfte ausgebildete Pflegefachkräfte?', a: 'Manche haben eine Pflegeausbildung. In der Betreuung zu Hause arbeiten sie aber in der Regel als Betreuungskraft, solange sie nicht mit deutscher Berufserlaubnis als Pflegefachkraft angestellt sind. Erlaubt sind in der Betreuung zu Hause Hilfe im Haushalt, Begleitung im Alltag und Grundpflege. Spritzen und Verbände kann die Hausärztin als häusliche Krankenpflege verordnen; in der Regel übernimmt dann ein Pflegedienst diese Leistungen. Pflegefachfrau oder Pflegefachmann darf sich in Deutschland nur nennen, wer die behördliche Erlaubnis hat; dafür sind unter anderem Deutschkenntnisse nötig, in der Regel auf Niveau B2.' },
  { q: 'Wie wird eine Pflegefachkraft aus Bulgarien in Deutschland anerkannt?', a: 'Sie stellt einen Antrag bei der zuständigen Behörde; welche das ist, zeigt das Portal „Anerkennung in Deutschland“ des Bundesinstituts für Berufsbildung. Für Pflegeabschlüsse aus der EU gilt oft eine automatische Anerkennung; dann dauert das Verfahren ab vollständigen Unterlagen höchstens drei Monate. Für die Erlaubnis braucht sie außerdem die nötigen Deutschkenntnisse, in der Regel auf Niveau B2.' },
  { q: 'Arbeitet eine 24-Stunden-Pflegekraft aus Bulgarien 24 Stunden am Tag?', a: 'Nein. Sie wohnt bei der pflegebedürftigen Person und ist deshalb in der Nähe, arbeitet aber nicht den ganzen Tag. Die Verbraucherzentrale nennt 48 Stunden pro Woche als Grenze. Hilft sie jede Nacht, braucht sie dafür einen Ausgleich, etwa freie Stunden am Tag, in denen Familie oder Pflegedienst übernehmen. Vereinbarte Bereitschaft in der Nacht zählt als Arbeitszeit.' },
  { q: 'Was macht eine Haushaltshilfe aus Bulgarien?', a: 'Eine Haushaltshilfe aus Bulgarien kocht, kauft ein und kümmert sich um die Wäsche. Ihrem Vater hilft sie beim Waschen, Anziehen und Essen und leistet ihm Gesellschaft. Für Spritzen und Verbände kann die Hausärztin häusliche Krankenpflege verordnen; dann kommt in der Regel ein Pflegedienst. Auch wenn sie bei Ihrem Vater wohnt, hat ihre Arbeitszeit eine Grenze; die Verbraucherzentrale nennt 48 Stunden pro Woche.' },
  { q: 'Welche Erfahrungen machen Familien mit bulgarischen Pflegekräften?', a: 'Verlässliche Berichte einzelner Familien gibt es kaum; was sich belegen lässt, gilt für alle Herkunftsländer. Für Vermittlungsagenturen gibt es nach dem Bericht der Bundesministerien von 2024 keine verbindlichen Mindeststandards; unklare Verträge, Sprachgrenzen und die schwer zu trennende Arbeits- und Ruhezeit nennt er als Schwachstellen. Vor dem Start helfen drei Prüfungen: Firma und A1-Bescheinigung oder Antrag darauf (liegt erst der Antrag vor, wird die Bescheinigung nachgereicht), ein Videogespräch mit einem anonymisierten Beispielplan und schriftlich festgelegte freie Zeiten.' },
  { q: 'Ist eine bulgarische Pflegekraft legal?', a: 'Ja, wenn Vertrag und Alltag stimmen. Bulgarische Staatsangehörige dürfen seit 2014 ohne Arbeitserlaubnis in Deutschland arbeiten. Legal sind die Entsendung durch eine Firma in Bulgarien mit A1-Bescheinigung, die Anstellung bei Ihnen mit Anmeldung und eine echte Selbstständigkeit. Wohnt eine „selbstständige“ Kraft im Haushalt der pflegebedürftigen Person und arbeitet nach Ihren Vorgaben, besteht die Gefahr der Scheinselbstständigkeit; dann gelten Sie als Arbeitgeber und zahlen die Sozialbeiträge nach.' },
  { q: 'Zahlt die Pflegekasse eine Pflegekraft aus Bulgarien?', a: 'Nicht direkt. Die Pflegekasse zahlt das Pflegegeld an die pflegebedürftige Person, ab Pflegegrad 2 zwischen 347 und 990 € im Monat, und die kann es frei für eine Betreuungskraft einsetzen. Beim Finanzamt gibt es bis zu 4.000 € Steuerermäßigung im Jahr, mit Rechnung und Überweisung und soweit Einkommensteuer anfällt.' },
  { q: 'Zahlt die Pflegekasse weiter, wenn mein Vater zur Pflege nach Bulgarien zieht?', a: 'Das Pflegegeld zahlt sie weiter, solange Ihr Vater in einem EU-Staat lebt und in der deutschen Pflegeversicherung versichert bleibt (§ 34 Abs. 1a SGB XI). Bulgarien gehört seit 2007 zur EU. Andere Leistungen der Pflegekasse ruhen bei einem Aufenthalt im Ausland. Sprechen Sie vor dem Umzug mit der Pflegekasse und klären Sie auch die Krankenversicherung.' },
]

const QUELLEN = [
  'Verbraucherzentrale: Ausländische Betreuungskräfte, wie geht das legal? (48-Stunden-Grenze, A1)',
  'Abschlussbericht der Arbeitsgruppe von Bundesarbeitsministerium, Bundesgesundheitsministerium und Pflegebevollmächtigter zur Live-In-Betreuung, November 2024',
  'Gemeinsamer Bundesausschuss: Häusliche-Krankenpflege-Richtlinie, Nr. 26 (Medikamente)',
  'Anerkennung in Deutschland (Bundesinstitut für Berufsbildung): Pflegefachperson',
  'Bundesministerium für Arbeit und Soziales: Pressemitteilung vom Dezember 2013 zur Freizügigkeit ab 2014',
  'Europäische Union: Länderprofil Bulgarien',
  'Deutsche Verbindungsstelle Krankenversicherung Ausland (DVKA): Länderseite Bulgarien, Entsendung von abhängig beschäftigten Personen',
  'Europäische Kommission: Rede „Kyrillisch, das dritte amtliche Alphabet der EU“ (Sofia, 2007)',
  'Gesetze: § 1 und § 2 Pflegeberufegesetz; § 34, § 37, § 39, § 42a SGB XI; § 37 SGB V (häusliche Krankenpflege); § 35a EStG; § 7 SGB IV; Art. 12 Verordnung (EG) 883/2004',
]

export const metadata: Metadata = {
  title: 'Pflegekräfte aus Bulgarien: Fachkraft oder Betreuungskraft?',
  description: 'Bulgarische Pflegekräfte helfen im Haushalt und bei der Grundpflege. Als Pflegefachkraft dürfen sie erst mit deutscher Erlaubnis arbeiten.',
  alternates: { canonical: 'https://primundus.de/pflegekraft-aus-bulgarien' },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Pflegekräfte aus Bulgarien: Fachkraft oder Betreuungskraft?',
    description: 'Eine Kraft aus Bulgarien übernimmt bei Ihnen Haushalt und Grundpflege; als Pflegefachkraft arbeiten darf sie erst mit deutscher Erlaubnis.',
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
    headline: 'Pflegekraft aus Bulgarien: was sie leisten darf und was „24 Stunden“ bei Ihnen heißt',
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
          titel="Pflegekraft aus Bulgarien: was sie leisten darf und was „24 Stunden“ bei Ihnen heißt"
          einleitung="Eine Pflegekraft aus Bulgarien wohnt bei Ihrem Vater, kocht, kauft ein, begleitet ihn durch den Tag und hilft beim Waschen, Anziehen und Essen. Sie ist bei Bedarf auch nachts vor Ort. Muss sie nachts auf Zuruf bereitstehen, zählt das als Arbeitszeit; regelmäßige Hilfe in der Nacht braucht einen Ausgleich. Als Grenze nennt die Verbraucherzentrale 48 Stunden pro Woche. Auch eine ausgebildete Krankenschwester arbeitet bei Ihnen in der Regel als Betreuungskraft. Spritzen, Verbände und das Stellen von Medikamenten gehören nicht zu ihren Aufgaben; dafür kann die Hausärztin häusliche Krankenpflege durch einen Pflegedienst verordnen. Seit 2014 brauchen bulgarische Staatsangehörige keine Arbeitserlaubnis; legal ist die Betreuung vor allem als Entsendung durch eine Firma oder als Anstellung bei Ihnen. Bei einer Entsendung lassen Sie sich vor dem ersten Arbeitstag die A1-Bescheinigung für genau diese Kraft oder den Antrag darauf zeigen; liegt erst der Antrag vor, wird die Bescheinigung nachgereicht."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="11 Min."
          blickVerweise={[
            { href: '#fachkraft', titel: 'Fachkraft', text: 'wann eine Krankenschwester aus Bulgarien als Pflegefachkraft arbeiten darf' },
            { href: '#arbeitszeit', titel: '24 Stunden', text: 'die Kraft wohnt bei Ihrem Vater, arbeitet aber nicht den ganzen Tag' },
            { href: '#aufgaben', titel: 'Aufgaben', text: 'was eine Haushaltshilfe aus Bulgarien übernimmt und wofür ein Pflegedienst kommt' },
            { href: '#erfahrungen', titel: 'Erfahrungen', text: 'welche Probleme der Bericht der Ministerien nennt, mit vier Fragen an sich selbst' },
            { href: '#legal', titel: 'Legal', text: 'Entsendung mit A1-Bescheinigung, Anstellung bei Ihnen oder Selbstständigkeit' },
            { href: '#kosten', titel: 'Angebot prüfen', text: 'vier Fragen an jedes Angebot, bevor Sie unterschreiben' },
          ]}
        />

        <RatgeberRumpf abschnitte={SECTIONS} src={SRC} neutral>
          <Abschnitt id="fachkraft" titel="Pflegefachkräfte aus Bulgarien: als Fachkraft nur mit deutscher Erlaubnis">
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
            <Text>
              In der Betreuung zu Hause arbeitet auch eine erfahrene Krankenschwester aus Bulgarien in der Regel als Betreuungskraft, solange
              sie nicht mit deutscher Berufserlaubnis als Pflegefachkraft angestellt ist. Fragen Sie trotzdem nach Ausbildung und Erfahrung,
              etwa mit Demenz oder nach einem Schlaganfall. Daran erkennen Sie, wie sicher die Kraft ist, beim Umlagern ebenso wie nachts, wenn
              Ihr Vater unruhig wird.
            </Text>
            <Kasten augenbraue="Für Kliniken und Heime">
              <Text>
                Pflegefachkräfte aus Bulgarien brauchen für die Arbeit als Fachkraft die deutsche Erlaubnis. Den Weg zur Anerkennung und die
                zuständige Stelle zeigt das Portal „Anerkennung in Deutschland“ des Bundesinstituts für Berufsbildung.
              </Text>
            </Kasten>
          </Abschnitt>

          <Abschnitt id="arbeitszeit" titel="24-Stunden-Pflegekräfte aus Bulgarien: wohnen im Haus, arbeiten höchstens 48 Stunden pro Woche">
            <Text>
              „24 Stunden“ heißt: Die Kraft wohnt bei Ihrem Vater. Arbeiten darf sie nicht den ganzen Tag. Die Verbraucherzentrale hält eine
              Betreuung über 24 Stunden durch eine einzige Person für legal nicht machbar und nennt 48 Stunden pro Woche als Grenze.
            </Text>
            <Text>
              Ein Beispiel: Ihr Vater steht jede Nacht zweimal auf und braucht Hilfe auf dem Weg ins Bad. Die Kraft hilft, weil sie im Haus
              ist. Für diese Nächte braucht sie einen Ausgleich, etwa freie Stunden am Nachmittag, in denen Sie oder ein Pflegedienst da sind.
              Wird vereinbart, dass sie nachts auf Zuruf helfen muss, zählt diese Bereitschaft als Arbeitszeit; sie gehört in die
              Wochenarbeitszeit und in die Vergütung. Sprechen Sie regelmäßige Hilfe in der Nacht vor Vertragsbeginn an: was sie kostet und
              welchen Ausgleich die Kraft bekommt.
            </Text>
            <Text>
              Die Arbeitsgruppe von Bundesarbeits- und Bundesgesundheitsministerium empfiehlt in ihrem Bericht von 2024 einen Pflege-Mix, bei
              dem sich Betreuungskraft, Familie und Pflegedienst die Aufgaben teilen.
            </Text>
            <Text>
              Zum Alltag der Kraft gehören Pausen und freie Zeit außer Haus. Ohne vereinbarte Nachtbereitschaft schläft sie nachts; bei Bedarf
              ist sie im Haus vor Ort. Sie braucht ein eigenes Zimmer, das sie abschließen kann, Verpflegung und Internet, um mit ihrer Familie
              in Bulgarien zu sprechen.
            </Text>
          </Abschnitt>

          <Abschnitt id="aufgaben" titel="Haushaltshilfe aus Bulgarien: Haushalt, Betreuung und Grundpflege">
            <Text>
              Der Bericht der Bundesministerien weist darauf hin, dass rechtlich nur Haushalt, Betreuung und Grundpflege erlaubt sind; Behandlungspflege gehört nicht dazu. Das gilt unabhängig davon, ob eine Anzeige von Haushaltshilfe oder von Pflegekraft spricht. Die Kraft kocht, kauft ein und kümmert sich um die
              Wäsche, begleitet Ihren Vater durch den Tag und übernimmt die Grundpflege: Waschen, Anziehen, Essen, Toilettengang.
            </Text>
            <Text>
              Spritzen, Wundversorgung und das Stellen von Medikamenten sind Behandlungspflege und gehören nicht zu den Aufgaben der
              Betreuungskraft. Ans Einnehmen kann sie erinnern. Die Hausärztin kann dafür häusliche Krankenpflege verordnen. Genehmigt die
              Krankenkasse sie, übernimmt ein ambulanter Pflegedienst diese Aufgaben, und Ihr Vater zahlt nur die gesetzliche Zuzahlung.
            </Text>
          </Abschnitt>

          <Abschnitt id="erfahrungen" titel="Erfahrungen mit bulgarischen Pflegekräften: ob es klappt, hängt an Vertrag, Sprache und Arbeitszeit">
            <Text>
              Prüfbare Erfahrungsberichte von Familien gibt es kaum. Belegen lässt sich, was der Bericht der Bundesministerien über den Markt
              schreibt.
            </Text>
            <Text>
              Für ein Anstellungsprojekt der Diakonie Württemberg nennt der Bericht vor allem Kräfte aus Rumänien, Bulgarien und Polen; das
              beschreibt dieses Projekt, nicht den ganzen Markt. Verbindliche Mindeststandards für Vermittlungsagenturen gibt es nach dem
              Bericht nicht. Die Betreuung im Haushalt ist anfällig für schlechte Arbeitsbedingungen, unabhängig vom Herkunftsland. Gründe
              dafür sind undurchsichtige Verträge, Sprachgrenzen und die schwer zu trennende Arbeits- und Ruhezeit.
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

          <Abschnitt id="sprache" titel="Deutsch und Kyrillisch: so prüfen Sie die Verständigung vorher">
            <Text>
              Bulgarisch schreibt man in kyrillischer Schrift. Für den Alltag bei Ihnen zählt, ob die Kraft Handschrift und den
              Medikationsplan sicher liest und am Telefon versteht, was die Hausärztin sagt.
            </Text>
            <Text>
              Die Sprachstufe A1 für Anfänger hat mit der A1-Bescheinigung zur Sozialversicherung nichts zu tun. Ein Gespräch zeigt Ihnen mehr
              als ein Kürzel im Lebenslauf:
            </Text>
            <Liste
              punkte={[
                'Prüfen Sie im Videogespräch mit einem anonymisierten Beispielplan, ob die Kraft Anweisungen sicher versteht. Den echten Medikationsplan Ihres Vaters besprechen Sie nur mit seiner Einwilligung und nur mit den zuständigen Personen.',
                'Legen Sie ihr einen handgeschriebenen Zettel vor, etwa Ihren Einkaufszettel, und lassen Sie ihn vorlesen.',
                'Fragen Sie, was die Kraft tut, wenn Ihr Vater stürzt. In der Antwort sollte die 112 vorkommen und der Satz, den sie am Telefon sagen würde.',
              ]}
            />
            <Text>
              Schreiben Sie Wichtiges zusätzlich auf: Notrufnummern, Name und Nummer der Hausärztin, Allergien und die Adresse Ihres Vaters
              für den Rettungsdienst. Hängen Sie den Zettel an den Kühlschrank; dort findet die Kraft ihn auch in der Aufregung.
            </Text>
          </Abschnitt>

          <Abschnitt id="legal" titel="Legal: Entsendung, Anstellung oder Selbstständigkeit">
            <Text>
              Für bulgarische Staatsangehörige gilt seit 2014 volle Freizügigkeit. Legal ist die Betreuung, wenn Vertrag und Alltag zu einem
              von drei Modellen passen.
            </Text>
            <Zwischentitel>Entsendung</Zwischentitel>
            <Text>
              Die Kraft ist bei einer bulgarischen Firma angestellt, bleibt dort versichert und arbeitet mit A1-Bescheinigung höchstens 24
              Monate am Stück bei Ihnen (Art. 12 Verordnung (EG) 883/2004). Sie darf nicht als Ersatz für eine andere entsandte Person eingesetzt werden.
            </Text>
            <Zwischentitel>Anstellung</Zwischentitel>
            <Text>
              Sie werden Arbeitgeber: Anmeldung, Beiträge, Arbeitszeitnachweise, Urlaub, Lohnfortzahlung bei Krankheit und
              Unfallversicherung liegen dann bei Ihnen.
            </Text>
            <Zwischentitel>Selbstständigkeit</Zwischentitel>
            <Text>Das ist nur legal, wenn die Kraft frei über Zeit und Ablauf entscheidet und weitere Auftraggeber haben kann.</Text>
            <Text>
              <strong>Hinweis:</strong> Es besteht die Gefahr der Scheinselbstständigkeit, wenn eine „selbstständige“ Kraft bei Ihrem Vater
              wohnt, nach Ihren Vorgaben arbeitet und keine weiteren Auftraggeber hat, mit folgenden Konsequenzen für die Familie: Sie gelten
              als Arbeitgeber und zahlen die Sozialversicherungsbeiträge nach.
            </Text>
            <Text>
              <strong>Hinweis:</strong> Es besteht die Gefahr von Schwarzarbeit, wenn die Kraft gegen bar und ohne Anmeldung bei Ihnen arbeitet, mit folgenden Konsequenzen für die Familie: Sozialversicherungsträger fordern Beiträge nach; die Steuerermäßigung nach § 35a EStG entfällt.
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

          <Abschnitt id="kosten" titel="Ein Angebot prüfen: vier Fragen, bevor Sie unterschreiben">
            <Text>Gehen Sie das Angebot mit diesen Fragen durch:</Text>
            <Liste
              punkte={[
                'Steckt die Sozialversicherung der Kraft in Bulgarien im Preis? Die A1-Bescheinigung zeigt, dass für sie das bulgarische Sozialversicherungsrecht gilt; ob die Beiträge gezahlt werden, zeigt sie nicht.',
                'Kommt die Anreise bei einem Wechsel dazu, oder steht sie im Preis?',
                'Welche Zuschläge gelten für Nächte, Feiertage oder eine zweite Person, und ab wann?',
                'Verlangt der Anbieter eine Vermittlungsgebühr oder eine Anzahlung?',
              ]}
            />
            <Text>Zimmer und Verpflegung stellen Sie zusätzlich.</Text>
            <MehrDazu
              label="Alle Kosten und Zuschüsse:"
              links={[
                { href: '/kosten', text: 'Was 24-Stunden-Pflege insgesamt kostet' },
                { href: '/finanzierung', text: 'Alle Kassenzuschüsse 2026' },
              ]}
            />
            <RechnerKasten src={SRC} neutral />
          </Abschnitt>

          <Abschnitt id="kasse" titel="Pflegekasse: Pflegegeld kann bei Umzug nach Bulgarien weiterlaufen">
            <Text>
              Ab Pflegegrad 2 zahlt die Pflegekasse Ihrem Vater Pflegegeld, das er auch für eine Betreuungskraft einsetzen kann (§ 37 SGB XI).
              Zieht er zur Pflege nach Bulgarien, läuft es weiter, solange er in der deutschen Pflegeversicherung versichert bleibt (§ 34
              Abs. 1a SGB XI). Das gilt für das Pflegegeld, nicht automatisch für andere Leistungen.
            </Text>
            <MehrDazu label="Mehr dazu:" links={[{ href: '/pflegegeld', text: 'Pflegegeld 2026: alle Beträge je Pflegegrad' }]} />
          </Abschnitt>

          <Abschnitt id="anreise" titel="Anreise aus Bulgarien: was Sie vor dem Start klären">
            <Text>
              Klären Sie vor dem Start, wie die Kraft anreist, wer die Fahrt bezahlt und wer hilft, bis eine Ersatzkraft da ist.
            </Text>
            <Text>
              In manchen Modellen wechseln sich zwei feste Kräfte ab. Der Bericht der Ministerien beschreibt ein solches Tandem zweier Kräfte,
              die beide beim Haushalt angestellt sind und sich etwa alle drei Monate abwechseln. Ihr Vater kennt dann beide, und jede Übergabe
              fällt leichter. Bei einer Entsendung gilt für den Wechsel die <a href="#legal" className={LINK}>Regel zur Ablösung</a> aus dem EU-Recht. Fällt die Vorgängerin unvorhergesehen aus, kann nach DVKA im Einzelfall Ersatz zulässig sein.
            </Text>
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
                    'A1-Bescheinigung oder Antrag darauf für genau diese Kraft und diesen Zeitraum, vor Arbeitsbeginn; liegt erst der Antrag vor, wird die Bescheinigung nachgereicht',
                    'Videogespräch vor der Zusage, mit einem anonymisierten Beispielplan',
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
