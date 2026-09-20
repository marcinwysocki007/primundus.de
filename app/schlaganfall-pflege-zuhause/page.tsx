import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import {
  RatgeberKopf, RatgeberRumpf, Abschnitt, DunklerAbschnitt, Text, Punkte, Kasten, HakenListe, Gegenueber, Tabelle, MehrDazu, Fragen,
  RechnerKasten, Zwischentitel,
} from '@/components/vorlage/Ratgeber'
import { HeimVsZuhause, KostenAufteilung, SchlaganfallWeg } from '@/components/grafik/Grafik'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'
import { ENTLASTUNGSBETRAG, ENTLASTUNGSBUDGET, PFLEGEGELD, PFLEGESACHLEISTUNGEN } from '@/lib/fakten'

// Ausgebaut am 20.09.2026 (Martin: „bestmöglichen Content liefern, um auf die Top-3-Positionen zu kommen"). Grundlage: Search Console
// (534 Impressionen, 0 Klicks; nah an Seite 1: „schlaganfall ins heim" 76 Impr. auf Position 19, „24 stunden betreuung schlaganfall"
// 42 auf 16, „kurzzeitpflege nach schlaganfall" 20 auf 14, „schlaganfall intensivpflege zuhause" 12 auf 16; weiter hinten „kosten
// pflegeheim nach schlaganfall" 53 auf 59, „pflege nach schlaganfall" 37 auf 55, „pflegegrad nach schlaganfall"/„halbseitige lähmung
// pflegegrad" auf 29–75), Googles Fragen („Welche pflegerischen Maßnahmen nach einem Schlaganfall gibt es?", „Welche Pflegestufe gibt
// es nach einem Schlaganfall?", „Wann darf man nach einem Schlaganfall wieder nach Hause?", „Was kann man Schlaganfallpatienten Gutes
// tun?"), Verfeinerungen (Finanzielle Hilfe, Keine Reha, Schwerstpflegefall, Pflegefall, Kurzzeitpflege, gesetzliche Betreuung) und die
// Seiten auf Platz 1–8 (sanubi, Schlaganfall-Hilfe, curasenio, flintrehab, Pflegehelden-Blog). Der Keyword-Planer liefert für das
// Thema kaum Zahlen (Gesundheit). Belege: Stiftung Deutsche Schlaganfall-Hilfe (Factsheets: rund 270.000 Schlaganfälle im Jahr,
// ein Jahr danach rund 64 % pflegebedürftig, rund 15 % in einer Einrichtung), §§ 39e, 37c SGB V, §§ 18a, 42 SGB XI, lib/fakten.
// Raus: „Post-Stroke-Depression bei 30–40 %" ohne Quelle, „Entscheidungsfrist eine Woche" (richtig: Begutachtung am fünften Arbeitstag).

const AKTUALISIERT = aktualisiertAm('schlaganfall-pflege-zuhause', '20. September 2026')
const RECHNER = 'https://kostenrechner.primundus.de/?start=1&src=apex-schlaganfall'
const euro = (n: number) => n.toLocaleString('de-DE') + ' €'

const SECTIONS = [
  { id: 'weg', title: 'Klinik, Reha, nach Hause' },
  { id: 'folgen', title: 'Was bleibt, was zurückkommt' },
  { id: 'heim-oder-zuhause', title: 'Ins Heim oder nach Hause?' },
  { id: 'massnahmen', title: 'Zehn Maßnahmen zu Hause' },
  { id: 'pflegegrad', title: 'Pflegegrad nach Schlaganfall' },
  { id: 'kosten', title: 'Was die Pflege kostet' },
  { id: '24h', title: '24-Stunden-Pflege nach Schlaganfall' },
  { id: 'faq', title: 'Häufige Fragen' },
]

const FRAGEN = [
  { q: 'Wann darf man nach einem Schlaganfall wieder nach Hause?', a: 'Wenn die Akutbehandlung und in der Regel die Anschlussrehabilitation abgeschlossen sind und die Versorgung zu Hause steht: Hilfsmittel da, Therapien verordnet, jemand im Haus. Ist zu Hause noch nichts vorbereitet, überbrücken Übergangspflege im Krankenhaus (bis zu 10 Tage) oder Kurzzeitpflege (bis zu 8 Wochen im Jahr). Eine Betreuungskraft kann bei uns 3 Tage nach der Auswahl anreisen.' },
  { q: 'Muss man nach einem Schlaganfall ins Heim?', a: 'Nein. Ein Jahr nach dem Schlaganfall sind nach Angaben der Deutschen Schlaganfall-Hilfe rund 64 Prozent der Betroffenen pflegebedürftig, aber nur rund 15 Prozent leben in einer Einrichtung. Zu Hause geht es mit Pflegedienst und Therapien als Hausbesuch, bei größerem Hilfebedarf mit einer Betreuungskraft, die mit im Haus wohnt. Das Heim wird nötig, wenn Behandlungspflege rund um die Uhr durch Fachkräfte gebraucht wird.' },
  { q: 'Welchen Pflegegrad bekommt man nach einem Schlaganfall?', a: 'Das hängt von der Selbständigkeit ab, nicht von der Diagnose. Beispiel aus unserem Pflegegrad-Rechner: Halbseitenlähmung, Rollstuhl in der Wohnung, Hilfe beim Waschen, Anziehen und auf der Toilette, Medikamente zweimal täglich, zweimal Physiotherapie pro Woche ergeben rund 55 Punkte, also Pflegegrad 3. Mit Sprachstörung, Inkontinenz oder Bettlägerigkeit wird es Pflegegrad 4 oder 5.' },
  { q: 'Welche Pflegestufe gibt es nach einem Schlaganfall?', a: 'Pflegestufen gibt es seit 2017 nicht mehr; heute sind es die Pflegegrade 1 bis 5. Der Gutachter bewertet sechs Bereiche: Mobilität, Kognition, Verhalten, Selbstversorgung, Umgang mit Krankheit und Therapie, Alltagsgestaltung. Nach einem Schlaganfall bringen meist Mobilität und Selbstversorgung die Punkte, bei Aphasie auch die Kognition.' },
  { q: 'Welche pflegerischen Maßnahmen gibt es nach einem Schlaganfall?', a: 'Lagerung und Bewegung mit Einbeziehung der gelähmten Seite, sichere Transfers, Sturz-, Dekubitus- und Thromboseprophylaxe, sicheres Essen und Trinken bei Schluckstörung, Sprachförderung im Alltag, Medikamente und Blutdruck im Blick, die Therapien fortführen und die Wohnung anpassen. Die zehn wichtigsten Maßnahmen stehen oben auf dieser Seite.' },
  { q: 'Was kann man Schlaganfallpatienten Gutes tun?', a: 'Zeit und Geduld: einfache Sätze, Ja-Nein-Fragen, nichts vorsagen. Die betroffene Seite ansprechen und einbeziehen, statt sie zu schonen. Alltag zulassen, auch wenn er langsam geht: selbst essen, selbst anziehen, kleine Wege gehen. Und feste Kontakte halten; Rückzug und gedrückte Stimmung sind häufig und behandelbar.' },
  { q: 'Was kostet ein Pflegeheim nach einem Schlaganfall?', a: 'Der Eigenanteil im Pflegeheim liegt bundesweit bei durchschnittlich 3.364 € im Monat (vdek, Juli 2026), unabhängig von der Diagnose. Zum Vergleich: Eine Betreuungskraft im Haus kostet bei Primundus ab 2.150 € im Monat; nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei Pflegegrad 3 ab ca. 923 € selbst zu tragen.' },
  { q: 'Wer zahlt die Kurzzeitpflege nach dem Schlaganfall?', a: 'Die Pflegekasse aus dem Entlastungsbudget von 3.539 € im Jahr, ab Pflegegrad 2 und für bis zu 8 Wochen im Kalenderjahr. Unterkunft und Verpflegung zahlen Sie selbst. Liegt noch kein Pflegegrad vor, gibt es Kurzzeitpflege in bestimmten Fällen auch über die Krankenkasse; fragen Sie den Sozialdienst der Klinik.' },
  { q: 'Keine Reha nach dem Schlaganfall: was tun?', a: 'Rehabilitation ist ein Anspruch. Wird sie abgelehnt, legen Sie mit dem behandelnden Arzt Widerspruch ein. Läuft die Reha aus, gehen die Therapien zu Hause weiter: Physiotherapie, Ergotherapie und Logopädie verordnet der Hausarzt oder Neurologe, auch als Hausbesuch; die Krankenkasse zahlt.' },
  { q: 'Kann man nach einem schweren Schlaganfall zu Hause bleiben?', a: 'In den meisten Fällen ja, mit einer Betreuungskraft im Haus für Grundpflege, Haushalt und Begleitung und einem Pflegedienst für die Behandlungspflege. Die Grenze ist die außerklinische Intensivpflege, etwa bei Beatmung oder Trachealkanüle: Dann braucht es Pflegefachkräfte rund um die Uhr, die die Krankenkasse nach § 37c SGB V organisiert.' },
  { q: 'Wie fördert man die Erholung zu Hause?', a: 'Therapien weiterführen, am besten an mehreren Tagen der Woche, und das Geübte im Alltag anwenden: aufstehen, anziehen, essen, gehen. Bewegung und Tageslicht täglich, Blutdruck und Medikamente zuverlässig, Alkohol und Rauchen beenden. Vertraute Umgebung und Gespräche halten den Kopf wach; Depressionen früh ansprechen.' },
  { q: 'Was leistet eine 24-Stunden-Betreuungskraft nach einem Schlaganfall?', a: 'Körperpflege, Hilfe beim Aufstehen und Umsetzen, Essen anreichen und angedickte Speisen zubereiten, Erinnerung an Medikamente, Begleitung zu Therapien, Üben im Alltag, Haushalt und Gesellschaft. Sie wohnt mit im Haus und ist bei Bedarf auch nachts da. Behandlungspflege wie Spritzen oder Verbandwechsel übernimmt der Pflegedienst.' },
]

export const metadata: Metadata = {
  title: 'Pflege nach Schlaganfall zu Hause: Reha, Pflegegrad, Kosten',
  description: 'Pflege nach Schlaganfall zu Hause: wann es nach Hause geht, Heim oder zu Hause, zehn Maßnahmen, Pflegegrad mit Beispiel, Kosten, Kurzzeitpflege als Brücke.',
  alternates: { canonical: 'https://primundus.de/schlaganfall-pflege-zuhause' },
  openGraph: {
    title: 'Pflege nach Schlaganfall zu Hause: ins Heim oder nach Hause?',
    description: 'Wann es nach Hause geht, zehn Maßnahmen, Pflegegrad mit Beispiel, Kosten und Kurzzeitpflege als Brücke.',
    url: 'https://primundus.de/schlaganfall-pflege-zuhause',
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
    headline: 'Pflege nach Schlaganfall zu Hause: Wann es nach Hause geht, was zu tun ist und was es kostet',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/schlaganfall-pflege-zuhause',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Krankheiten', item: 'https://primundus.de/krankheiten' },
      { '@type': 'ListItem', position: 3, name: 'Pflege nach Schlaganfall', item: 'https://primundus.de/schlaganfall-pflege-zuhause' },
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

export default function SchlaganfallPflegeZuhause() {
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
            { label: 'Krankheiten', href: '/krankheiten' },
            { label: 'Pflege nach Schlaganfall' },
          ]}
          augenbraue="Ratgeber Schlaganfall"
          titel="Pflege nach Schlaganfall zu Hause: Wann es nach Hause geht, was zu tun ist und was es kostet"
          einleitung="Rund 270.000 Menschen erleiden in Deutschland jedes Jahr einen Schlaganfall. Ein Jahr danach sind rund zwei Drittel der Betroffenen pflegebedürftig, aber nur etwa jeder Siebte lebt in einer Einrichtung. Die meisten werden zu Hause versorgt. Hier lesen Sie, wie der Weg von der Klinik nach Hause läuft, wann das Heim wirklich nötig ist, welche zehn Maßnahmen zu Hause zählen, welchen Pflegegrad es gibt und was die Pflege kostet."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="11 Min."
          blick={[
            'Nach Klinik und Reha nach Hause: Übergangspflege (10 Tage) oder Kurzzeitpflege (8 Wochen) als Brücke',
            'Ins Heim nur, wenn Fachkräfte rund um die Uhr Behandlungspflege leisten müssen',
            'Pflegegrad: Beispiel Halbseitenlähmung mit Rollstuhl = rund 55 Punkte, Pflegegrad 3',
            'Begutachtung im Krankenhaus spätestens am fünften Arbeitstag nach dem Antrag',
            'Betreuungskraft im Haus ab 2.150 € im Monat, bei Pflegegrad 3 ab ca. 923 € selbst zu tragen',
            'Anreise in 3 Tagen möglich, auch direkt aus Klinik oder Reha',
          ]}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="weg" titel="Der Weg nach dem Schlaganfall: Klinik, Reha, nach Hause">
            <Text>
              Nach dem Schlaganfall entscheidet sich in wenigen Wochen, wie das Leben danach aussieht. Die vier Stationen sind bei fast allen
              gleich; was sich unterscheidet, ist die Dauer und wie gut die Übergänge vorbereitet sind.
            </Text>
            <SchlaganfallWeg />
            <Zwischentitel>Wann darf man wieder nach Hause?</Zwischentitel>
            <Text>
              Wenn die Ärzte die Akutphase für abgeschlossen halten, die Anschlussrehabilitation beendet ist und die Versorgung zu Hause steht.
              Dazu gehören die Hilfsmittel (Pflegebett, Rollstuhl, Duschhocker), die verordneten Therapien und ein Mensch, der im Haus ist,
              solange die Person nicht allein bleiben kann. Der Sozialdienst der Klinik hilft beim Entlassmanagement; er beantragt Reha,
              Hilfsmittel und den Pflegegrad, wenn Sie ihn darum bitten.
            </Text>
            <Kasten augenbraue="Keine Reha bewilligt?" titel="Rehabilitation ist ein Anspruch, kein Gefallen">
              <Text>
                Wird die Anschlussrehabilitation abgelehnt, legen Sie mit dem behandelnden Arzt Widerspruch ein. Läuft die Reha aus, gehen die
                Therapien zu Hause weiter: Physiotherapie, Ergotherapie und Logopädie verordnet der Hausarzt oder Neurologe, auch als Hausbesuch,
                und die Krankenkasse zahlt sie. Wer Fortschritte macht, bekommt weitere Verordnungen; fragen Sie danach.
              </Text>
            </Kasten>
          </Abschnitt>

          <Abschnitt id="folgen" titel="Was nach einem Schlaganfall bleibt, und was zurückkommt">
            <Text>
              Art, Schwere und Ort der Hirnschädigung bestimmen die Folgen. Viele Betroffene gewinnen durch die Reha und durch Üben im Alltag
              Fähigkeiten zurück, manche vollständig. Was bleibt, entscheidet über die Pflege zu Hause:
            </Text>
            <Punkte
              punkte={[
                { title: 'Halbseitenlähmung (Hemiparese, Hemiplegie)', desc: 'Die häufigste Folge, von leichter Schwäche bis zur vollständigen Lähmung einer Seite. Physiotherapie und tägliches Üben bringen oft Kraft und Kontrolle zurück; die gelähmte Seite gehört in jede Bewegung einbezogen, nicht geschont.' },
                { title: 'Sprachstörung (Aphasie)', desc: 'Verstehen oder Sprechen ist gestört, das Denken meist nicht. Logopädie und geduldige Gespräche mit vertrauten Menschen wirken; nichts vorsagen, Ja-Nein-Fragen stellen, Zeit lassen.' },
                { title: 'Schluckstörung (Dysphagie)', desc: 'Gefährlich, weil Nahrung in die Lunge geraten kann. Aufrecht sitzen, kleine Bissen, angedickte Getränke, keine Ablenkung beim Essen; die Logopädie legt fest, was erlaubt ist.' },
                { title: 'Aufmerksamkeit, Gedächtnis, Orientierung', desc: 'Oft vorübergehend eingeschränkt. Feste Abläufe, Ruhe und Aufgaben, die gelingen, helfen; Überforderung erschöpft.' },
                { title: 'Inkontinenz', desc: 'Nach schweren Schlaganfällen häufig, oft rückläufig. Toilettentraining zu festen Zeiten, Hilfsmittel von der Pflegekasse; bei anhaltender Inkontinenz zählt sie im Pflegegrad.' },
                { title: 'Gedrückte Stimmung', desc: 'Antriebslosigkeit und Traurigkeit nach dem Schlaganfall sind häufig und behandelbar. Sprechen Sie den Hausarzt an, wenn sie länger als zwei Wochen anhalten; Bewegung, Tageslicht und Kontakte gehören zur Behandlung.' },
              ]}
            />
            <MehrDazu
              label="Mehr dazu:"
              links={[
                { href: '/pflegegrad-nach-schlaganfall', text: 'Pflegegrad nach Schlaganfall' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="heim-oder-zuhause" titel="Nach dem Schlaganfall ins Heim oder nach Hause?">
            <Text>
              Die Frage kommt oft schon in der Klinik, und oft zu früh. Drei Dinge entscheiden: Braucht die Person Behandlungspflege durch
              Fachkräfte rund um die Uhr? Ist die Wohnung erreichbar und anpassbar? Und ist jemand da, tagsüber und nachts? Nur die erste Frage
              zwingt ins Heim; die beiden anderen lassen sich lösen.
            </Text>
            <Gegenueber
              seiten={[
                { titel: 'Zu Hause geht, wenn', ton: 'gruen', punkte: ['Therapien als Hausbesuch verordnet sind', 'Der Pflegedienst Behandlungspflege übernimmt (Spritzen, Verbände, Katheter)', 'Jemand im Haus ist: Angehörige oder eine Betreuungskraft', 'Bad und Zugang angepasst werden können (bis 4.180 € von der Pflegekasse)', 'Der Eigenanteil tragbar ist: bei Pflegegrad 3 ab ca. 923 € im Monat'] },
                { titel: 'Das Heim ist nötig, wenn', ton: 'taupe', punkte: ['Beatmung, Trachealkanüle oder andere Intensivpflege Fachkräfte rund um die Uhr verlangen', 'Schwere Verhaltensstörungen die Sicherheit gefährden', 'Die Wohnung nicht erreichbar gemacht werden kann und kein Umzug möglich ist', 'Niemand im Haus sein kann und kein Zimmer für eine Betreuungskraft frei ist'] },
              ]}
            />
            <HeimVsZuhause />
            <Text>
              Die Kurzzeitpflege ist die Brücke, nicht die Entscheidung: bis zu 8 Wochen im Jahr aus dem Entlastungsbudget, während zu Hause
              das Bad umgebaut, die Hilfsmittel geliefert und die Betreuung organisiert werden. Wer die Entscheidung fürs Heim in der Kurzzeitpflege
              trifft, sollte vorher rechnen und {l('/kurzzeitpflege', 'die Kurzzeitpflege')} wirklich als Übergang nutzen.
            </Text>
            <MehrDazu
              label="Weiter:"
              links={[
                { href: '/24h-pflege-vs-pflegeheim-kosten', text: '24h-Pflege oder Pflegeheim: Kosten' },
                { href: '/pflegeheim-kostenvergleich', text: 'Pflegeheim-Kostenvergleich' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="massnahmen" titel="Pflege nach Schlaganfall zu Hause: die zehn wichtigsten Maßnahmen">
            <Text>
              Das lernen Angehörige im kostenlosen Pflegekurs der Pflegekasse (§ 45 SGB XI), viele Kassen bieten ihn speziell für Schlaganfall an.
              Die zehn Punkte, auf die es im Alltag ankommt:
            </Text>
            <Punkte
              punkte={[
                { title: '1. Die betroffene Seite einbeziehen', desc: 'Von der gelähmten Seite ansprechen, Nachttisch dorthin stellen, beim Waschen und Anziehen mit der schwachen Seite beginnen. Das Gehirn lernt nur, was es benutzt.' },
                { title: '2. Sicher umsetzen', desc: 'Vom Bett auf den Stuhl über die starke Seite, Rollstuhl bremsen, feste Schuhe. Wer den Transfer im Pflegekurs übt, schont seinen Rücken und verhindert Stürze.' },
                { title: '3. Stürze verhindern', desc: 'Teppiche, Kabel und Schwellen weg, Haltegriffe im Bad, Nachtlicht, Rollator oder Gehstock griffbereit. Nach jedem Sturz den Arzt informieren.' },
                { title: '4. Lagern und bewegen', desc: 'Alle zwei bis drei Stunden die Lage wechseln, Fersen frei lagern, Arme und Beine bewegen: gegen Druckgeschwüre, Thrombosen und versteifte Gelenke.' },
                { title: '5. Sicher essen und trinken', desc: 'Aufrecht sitzen, kleine Portionen, angedickte Getränke bei Schluckstörung, nach dem Essen noch eine halbe Stunde sitzen bleiben. Husten und feuchte Stimme sind Warnzeichen.' },
                { title: '6. Sprache fördern', desc: 'Langsam sprechen, ein Gedanke pro Satz, Zeit lassen, nicht korrigieren. Die Logopädie gibt Übungen für den Alltag mit.' },
                { title: '7. Medikamente und Blutdruck', desc: 'Blutverdünner, Blutdruck- und Cholesterinsenker sind der Schutz vor dem nächsten Schlaganfall. Wochenspender, feste Zeiten, Blutdruck regelmäßig messen und notieren.' },
                { title: '8. Therapien durchhalten', desc: 'Physiotherapie, Ergotherapie und Logopädie als Hausbesuch, und die Übungen zwischen den Terminen. Fortschritte kommen über Monate, nicht Tage.' },
                { title: '9. Wohnung anpassen', desc: 'Badumbau, Haltegriffe, Rampe oder Treppenlift: bis 4.180 € je Maßnahme von der Pflegekasse, Pflegebett und Rollstuhl über die Krankenkasse mit Rezept.' },
                { title: '10. Die Stimmung im Blick', desc: 'Rückzug, Schlaflosigkeit und Reizbarkeit sind Zeichen einer Depression nach dem Schlaganfall. Sie ist behandelbar; der Hausarzt ist die erste Adresse.' },
              ]}
            />
            <MehrDazu
              label="Weiter:"
              links={[
                { href: '/hilfsmittel-rollstuhl-beantragen', text: 'Rollstuhl und Hilfsmittel beantragen' },
                { href: '/pflegegrad-begutachtung-vorbereiten', text: 'Begutachtung vorbereiten' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="pflegegrad" titel="Pflegegrad nach Schlaganfall: ein Beispiel aus dem Rechner">
            <Text>
              Der Pflegegrad hängt nicht von der Diagnose ab, sondern davon, was die Person allein schafft. Nach einem Schlaganfall bringen meist
              die Mobilität und die Selbstversorgung die Punkte, bei Sprachstörung auch die Kognition, bei Spritzen und Therapien der Umgang mit
              Krankheit. Ein Beispiel, gerechnet mit unserem {l('/pflegegrad-rechner', 'Pflegegrad-Rechner')} nach dem amtlichen Punktesystem:
            </Text>
            <Tabelle
              titel="Beispiel: Halbseitenlähmung, Rollstuhl in der Wohnung, Hilfe beim Waschen, Anziehen und auf der Toilette"
              kopf={['Modul', 'Einzelpunkte', 'Gewichtet']}
              zeilen={[
                ['Mobilität: Umsetzen und Gehen überwiegend unselbständig, Treppe unselbständig', '9 von 15', '7,5'],
                ['Kognition und Verhalten: ohne Einschränkung', '0', '0'],
                ['Selbstversorgung: Waschen, Anziehen, Toilette überwiegend unselbständig, Essen überwiegend selbständig', '23 von 54', '30'],
                ['Krankheit und Therapie: Medikamente 2× täglich, Physiotherapie 2× pro Woche', '3 von 15', '10'],
                ['Alltag und Kontakte: Tagesablauf, Beschäftigung, Planung überwiegend selbständig', '4 von 18', '7,5'],
                ['Gesamt', '', '55 Punkte = Pflegegrad 3'],
              ]}
              betont={2}
              fuss="Anlage 1 und 2 zu § 15 SGB XI. Mit Sprachstörung (Modul 2), Inkontinenz oder Bettlägerigkeit (Modul 4) steigt das Ergebnis auf Pflegegrad 4 oder 5. Über den Pflegegrad entscheidet die Pflegekasse nach der Begutachtung."
            />
            <Text>
              Stellen Sie den Antrag noch aus der Klinik: Die Leistungen laufen ab dem Antragstag, und im Krankenhaus oder in der Reha muss der
              Medizinische Dienst spätestens am fünften Arbeitstag nach dem Antrag begutachten (§ 18a Abs. 5 SGB XI). Mit Pflegegrad 2 gibt es
              {' '}{euro(PFLEGEGELD[2])} Pflegegeld im Monat, mit Pflegegrad 3 {euro(PFLEGEGELD[3])}, mit Pflegegrad 4 {euro(PFLEGEGELD[4])}, mit Pflegegrad 5 {euro(PFLEGEGELD[5])}; dazu der
              Entlastungsbetrag von {euro(ENTLASTUNGSBETRAG)} ab Pflegegrad 1 und das Entlastungsbudget von {euro(ENTLASTUNGSBUDGET)} im Jahr ab Pflegegrad 2.
            </Text>
            <MehrDazu
              label="Weiter:"
              links={[
                { href: '/pflegegrad-rechner', text: 'Pflegegrad berechnen' },
                { href: '/pflegegrad-beantragen', text: 'Pflegegrad beantragen' },
                { href: '/pflegegrad-nach-schlaganfall', text: 'Pflegegrad nach Schlaganfall im Detail' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="kosten" titel="Was die Pflege nach dem Schlaganfall kostet">
            <Text>
              Vier Wege, vier Rechnungen. Behandlungspflege durch den Pflegedienst zahlt die Krankenkasse auf Verordnung; Grundpflege durch den
              Pflegedienst geht über die Pflegesachleistungen ({euro(PFLEGESACHLEISTUNGEN[2])} bis {euro(PFLEGESACHLEISTUNGEN[5])} im Monat). Die Kurzzeitpflege kommt aus dem
              Entlastungsbudget. Für das Heim und die Betreuungskraft im Haus zählt der Eigenanteil:
            </Text>
            <KostenAufteilung />
            <Text>
              Im Pflegeheim liegt der Eigenanteil bundesweit bei durchschnittlich 3.364 € im Monat (vdek, Juli 2026). Eine Betreuungskraft im Haus
              kostet bei Primundus ab 2.150 €; bei Pflegegrad 3 bleiben nach Pflegegeld, Entlastungsbudget und Steuerermäßigung ab ca. 923 €.
              Der Preis steigt, wenn nachts Hilfe nötig ist oder die Person auf den Rollstuhl angewiesen oder bettlägerig ist (+100 €); alle
              Preisfaktoren stehen auf der {l('/kosten', 'Kostenseite')}.
            </Text>
            <RechnerKasten src="apex-schlaganfall" />
          </Abschnitt>

          <DunklerAbschnitt
            id="24h"
            titel="24-Stunden-Pflege nach Schlaganfall: wann und wie"
            einleitung="Eine Betreuungskraft, die mit im Haus wohnt, ist nach dem Schlaganfall die häufigste Lösung für Familien, die den Angehörigen zu Hause versorgen wollen. Bei uns kann sie 3 Tage nach der Auswahl anreisen, auch direkt aus Klinik oder Reha."
            punkte={[
              { title: 'Was sie übernimmt', desc: 'Körperpflege, Hilfe beim Aufstehen und Umsetzen, Essen anreichen und angedickt zubereiten, Erinnerung an Medikamente, Begleitung zu Therapien und Ärzten, Üben im Alltag, Haushalt, Gesellschaft. Bei Bedarf auch nachts.' },
              { title: 'Was der Pflegedienst übernimmt', desc: 'Spritzen, Verbandwechsel, Katheter, Blutzucker: die Behandlungspflege verordnet der Arzt, die Krankenkasse zahlt. Beides zusammen deckt fast jede Situation nach dem Schlaganfall ab.' },
              { title: 'Erfahrung auswählen', desc: 'Im Profil jeder Betreuungskraft stehen Jahre der Erfahrung und die Einsätze über Primundus. Für Schluckstörung, Rollstuhl oder Bettlägerigkeit wählen Sie eine Betreuungskraft mit entsprechender Erfahrung; wir sagen Ihnen, worauf Sie achten.' },
              { title: 'Die Grenze: Intensivpflege', desc: 'Beatmung, Trachealkanüle oder ständige Überwachung sind außerklinische Intensivpflege nach § 37c SGB V durch Pflegefachkräfte, organisiert von der Krankenkasse. Das leistet keine Betreuungskraft, auch keine „Intensivpflege zu Hause" eines Betreuungsanbieters.' },
            ]}
          >
            <Kasten titel="So schnell geht es nach der Klinik">
              <HakenListe
                zweispaltig
                punkte={[
                  'Heute: Kostenrechner ausfüllen, Preis und Bewerbungen am selben Werktag',
                  'Sie sehen Profile mit Foto, Deutschkenntnissen und Erfahrung und wählen selbst',
                  'Anreise in 3 Tagen möglich; wir organisieren Fahrt und Übergabe',
                  'Täglich kündbar, taggenaue Abrechnung, keine Vermittlungsgebühr',
                  'Wechsel alle 6 bis 8 Wochen, Ersatz in der Regel innerhalb von 3 Tagen',
                  'Behandlungspflege bleibt beim Pflegedienst, Therapien beim Therapeuten',
                ]}
              />
            </Kasten>
            <MehrDazu
              label="Weiter:"
              links={[
                { href: '/24-stunden-pflege', text: 'So funktioniert 24-Stunden-Pflege' },
                { href: '/kosten', text: 'Kosten und Zuschüsse 2026' },
              ]}
            />
          </DunklerAbschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen zur Pflege nach Schlaganfall">
            <Fragen fragen={FRAGEN} />
            <Text>
              Quellen: Stiftung Deutsche Schlaganfall-Hilfe (Factsheets: Schlaganfälle und Pflegebedürftigkeit), §§ 37c, 39e SGB V, §§ 15, 18a, 42, 45
              SGB XI mit Anlage 1 und 2, Leistungsbeträge 2026 nach SGB XI, vdek-Statistik zum Heim-Eigenanteil (Juli 2026), Preise aus unserem
              Kostenrechner; gelesen am 20. September 2026.
            </Text>
          </Abschnitt>

          <Weiterlesen aktuell="schlaganfall-pflege-zuhause" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
