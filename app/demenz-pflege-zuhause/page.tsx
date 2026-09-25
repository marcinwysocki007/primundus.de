import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import {
  RatgeberKopf, RatgeberRumpf, Abschnitt, DunklerAbschnitt, Text, Punkte,
  Kasten, HakenListe, Gegenueber, Tabelle, MehrDazu, Fragen, RechnerKasten, Zwischentitel,
} from '@/components/vorlage/Ratgeber'
import { DemenzPhasen, HeimVsZuhause, KostenAufteilung } from '@/components/grafik/Grafik'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'
import { ENTLASTUNGSBETRAG, ENTLASTUNGSBUDGET, PFLEGEGELD, PFLEGESACHLEISTUNGEN } from '@/lib/fakten'

// Musterseite der Ratgeber (Vorlage 14.09.2026), ausgebaut am 20.09.2026 (Martin: „bestmöglichen Content liefern, um auf die
// Top-3-Positionen zu kommen"). Grundlage: Search Console (1.071 Impressionen, 1 Klick, Position 30–38: „demenz pflege zu hause
// oder heim" 172, „24 stunden pflege demenz" 129, „demenz betreuung zu hause" 103, „demenz pflege zu hause" 84), Googles Fragen
// („Kann man einen Demenzkranken alleine zu Hause lassen?", „Was kostet Demenzbetreuung zu Hause?", „Wie lange kann man einen
// Demenzkranken zu Hause pflegen?", „Wann muss ein Demenzkranker ins Pflegeheim?", „Wo sind Demente am besten aufgehoben?",
// „Wird Demenz im Pflegeheim schlimmer?"), Verfeinerungen („10 Regeln im Umgang", „Stundenweise Betreuung", „Tagespflege",
// „gegen den Willen ins Heim", „Hilfe für Angehörige") und die Seiten auf Platz 1–8 (277–3.863 Wörter; vorn stehen die
// Ratgeber von miacosa und advita mit Verlauf, Kosten und Entscheidungshilfe). Der Keyword-Planer liefert für Demenz-Begriffe
// kaum Zahlen (Gesundheitsthema), die Search Console ist die Grundlage. Belege: BMG-Ratgeber Demenz (Stand März 2026: 87 % aller
// Pflegebedürftigen werden zu Hause gepflegt, Alzheimer-Telefon 030 259 37 95 14), Deutsche Alzheimer Gesellschaft (Infoblatt 1,
// August 2024: rund 1,8 Millionen Menschen mit Demenz Ende 2023, etwa 445.000 Neuerkrankungen 2023), § 41 Abs. 3 (Tagespflege
// ohne Anrechnung), § 45 (kostenlose Pflegekurse), § 45b SGB XI, § 1831 BGB (Unterbringung nur mit Genehmigung des
// Betreuungsgerichts). Preise und Eigenanteile wie auf /kosten (Rechner-Preiskonfiguration 20.09.2026).

const AKTUALISIERT = aktualisiertAm('demenz-pflege-zuhause', '20. September 2026')
const RECHNER = 'https://kostenrechner.primundus.de/?start=1&src=apex-demenz'
const euro = (n: number) => n.toLocaleString('de-DE') + ' €'

const SECTIONS = [
  { id: 'moeglich', title: 'Wie lange zu Hause möglich?' },
  { id: 'allein', title: 'Allein lassen?' },
  { id: 'alltag', title: 'Zehn Regeln für den Alltag' },
  { id: 'nachts', title: 'Nachts' },
  { id: 'pflege-24h', title: 'Wann 24h-Pflege?' },
  { id: 'kosten', title: 'Was Betreuung kostet' },
  { id: 'zuhause-oder-heim', title: 'Zu Hause oder Heim?' },
  { id: 'pflegegrad', title: 'Pflegegrad & Leistungen' },
  { id: 'entlastung', title: 'Entlastung für Angehörige' },
  { id: 'faq', title: 'Häufige Fragen' },
]

// Häufige Fragen: EINE Liste für die sichtbaren Antworten und das FAQPage-JSON-LD.
const FRAGEN = [
  { q: 'Kann man Demenzkranke zu Hause pflegen?', a: 'Ja, in den meisten Phasen ist die Pflege zu Hause möglich und für viele Betroffene die bessere Wahl: Die vertraute Umgebung gibt Orientierung und Halt. 87 Prozent aller Pflegebedürftigen in Deutschland werden zu Hause gepflegt. Mit einer Betreuungskraft, die mit im Haus wohnt, bleibt die eigene Wohnung auch bei wachsendem Pflegebedarf erhalten.' },
  { q: 'Wie lange kann man einen Demenzkranken zu Hause pflegen?', a: 'Es gibt keine feste Grenze. In der frühen Phase reichen Angehörige, stundenweise Betreuung oder Tagespflege. In der mittleren Phase braucht die Person tagsüber jemanden im Haus, in der späten Phase vollständige Pflege. Mit einer Betreuungskraft im Haus und einem Pflegedienst für die Behandlungspflege bleiben viele Menschen mit Demenz bis zum Lebensende zu Hause.' },
  { q: 'Kann man einen Demenzkranken alleine zu Hause lassen?', a: 'In der frühen Phase für einige Stunden, wenn Herd und Türen gesichert sind und die Person Hilfe holen kann. Ab der mittleren Phase nicht mehr für längere Zeit: Weglaufen, vergessene Herdplatten und Stürze sind dann die typischen Gefahren. Nachts sollte jemand in Rufweite sein.' },
  { q: 'Was kostet Demenzbetreuung zu Hause?', a: 'Das hängt von der Form ab. Stundenweise Betreuung und Tagespflege zahlt die Pflegekasse über Entlastungsbetrag und Tagespflege-Budget weitgehend mit. Eine Betreuungskraft, die mit im Haus wohnt, kostet bei Primundus ab 2.150 € im Monat; nach Pflegegeld, Entlastungsbudget und Steuerermäßigung bleiben bei Pflegegrad 3 ab ca. 923 € selbst zu tragen. Der Eigenanteil im Pflegeheim liegt bundesweit bei durchschnittlich 3.364 € im Monat.' },
  { q: 'Ab wann braucht man 24-Stunden-Pflege bei Demenz?', a: 'Spätestens wenn die Person nicht mehr allein bleiben kann: bei Weglaufen, gefährlichem Vergessen wie einer eingeschalteten Herdplatte, unruhigen Nächten oder wenn die Angehörigen erschöpft sind. Dann ist eine Betreuungskraft, die mit im Haus wohnt, die Lösung, die das Zuhause erhält.' },
  { q: 'Wann muss ein Demenzkranker ins Pflegeheim?', a: 'Wenn die Sicherheit zu Hause auch mit Betreuungskraft nicht mehr gewährleistet ist: bei schwerer Fremdgefährdung, bei Behandlungspflege rund um die Uhr, die ein Pflegedienst zu Hause nicht leisten kann, oder wenn kein Zimmer für eine Betreuungskraft vorhanden ist. Gegen den Willen der Person ist eine Unterbringung nur über einen rechtlichen Betreuer und mit Genehmigung des Betreuungsgerichts möglich.' },
  { q: 'Wo sind Menschen mit Demenz am besten aufgehoben?', a: 'Dort, wo sie sich auskennen und feste Bezugspersonen haben. Bei Demenz wiegt das Vertraute schwerer als bei jeder anderen Erkrankung: die eigene Küche, der Blick aus dem Fenster, die gewohnten Wege. Zu Hause mit einer festen Betreuungskraft gibt es Zuwendung von einem vertrauten Gesicht; im Heim wechseln die Bezugspersonen im Schichtdienst.' },
  { q: 'Wird Demenz im Pflegeheim schlimmer?', a: 'Ein Umzug kann Verwirrtheit und Unruhe vorübergehend verstärken, weil alles Vertraute fehlt; viele Menschen brauchen Wochen für die Eingewöhnung. Die Krankheit selbst schreitet unabhängig vom Wohnort fort. Wer den Umzug vermeiden will, sorgt früh dafür, dass zu Hause jemand da ist.' },
  { q: 'Welchen Pflegegrad bekommt man bei Demenz?', a: 'Je nach Phase Pflegegrad 2 bis 5. Seit 2017 zählen Orientierung, Erinnern, nächtliche Unruhe und Abwehr von Pflege (Module 2 und 3) gleichwertig mit körperlichen Einschränkungen. Oft kommt Modul 4 dazu, weil Waschen und Anziehen ohne Anleitung nicht mehr zuverlässig stattfinden. Unser Pflegegrad-Rechner zeigt die Punkte vorab.' },
  { q: 'Was ist besser bei Demenz: Pflegeheim oder Pflegedienst?', a: 'Ein ambulanter Pflegedienst kommt für Körperpflege und Behandlungspflege zu festen Zeiten; die Stunden dazwischen und die Nächte bleiben offen. Das reicht in der frühen Phase, wenn Angehörige da sind. Ab der mittleren Phase braucht es Präsenz: eine Betreuungskraft im Haus, ergänzt um den Pflegedienst, oder das Heim.' },
  { q: 'Was hilft bei nächtlicher Unruhe?', a: 'Tageslicht und Bewegung am Tag, kein langer Mittagsschlaf, ein festes Abendritual, gedämpftes Licht und ein Nachtlicht zum Bad. Bleibt die Person nachts trotzdem wach, braucht sie jemanden, der ruhig zurück ins Bett begleitet. Eine Betreuungskraft, die mit im Haus wohnt, ist bei Bedarf auch nachts da; regelmäßige Nachteinsätze werden im Preis berücksichtigt.' },
  { q: 'Welche Hilfe bekommen pflegende Angehörige?', a: 'Kostenlose Pflegekurse der Pflegekasse, das Entlastungsbudget von 3.539 € im Jahr für Vertretung und Kurzzeitpflege, den Entlastungsbetrag von 131 € im Monat für Betreuungsgruppen und Alltagshilfen, Tagespflege zusätzlich zum Pflegegeld sowie das Alzheimer-Telefon der Deutschen Alzheimer Gesellschaft unter 030 259 37 95 14.' },
]

export const metadata: Metadata = {
  title: 'Demenz zu Hause pflegen: wie lange, was es kostet, wann Heim',
  description: 'Demenz zu Hause pflegen oder ins Heim? Wie lange häusliche Pflege möglich ist, was Betreuung kostet, wann 24-Stunden-Pflege hilft und was die Kasse zahlt.',
  alternates: { canonical: 'https://primundus.de/demenz-pflege-zuhause' },
  openGraph: {
    title: 'Demenz zu Hause pflegen oder ins Heim? Was möglich ist und was es kostet',
    description: 'Wie lange Pflege zu Hause bei Demenz möglich ist, wann 24-Stunden-Pflege hilft und welche Leistungen die Pflegekasse zahlt.',
    url: 'https://primundus.de/demenz-pflege-zuhause',
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
    headline: 'Demenz zu Hause pflegen oder ins Heim? Was möglich ist, was es kostet, wann 24-Stunden-Pflege hilft',
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
    datePublished: '2026-04-25',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: 'https://primundus.de/demenz-pflege-zuhause',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Krankheiten', item: 'https://primundus.de/krankheiten' },
      { '@type': 'ListItem', position: 3, name: 'Demenz zu Hause pflegen', item: 'https://primundus.de/demenz-pflege-zuhause' },
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

export default function DemenzPflegeZuhause() {
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
            { label: 'Demenz zu Hause pflegen' },
          ]}
          augenbraue="Ratgeber Demenz"
          titel="Demenz: zu Hause pflegen oder ins Heim? Was möglich ist, was es kostet, wann 24-Stunden-Pflege hilft"
          einleitung="Rund 1,8 Millionen Menschen in Deutschland leben mit Demenz, und 87 Prozent aller Pflegebedürftigen werden zu Hause gepflegt. Die Pflege zu Hause ist in den meisten Phasen möglich und für die Betroffenen meist die bessere Wahl: Das Vertraute gibt Orientierung. Hier lesen Sie, wie lange das geht, wann jemand im Haus sein muss, was Betreuung kostet und wann das Heim die richtige Entscheidung ist."
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="12 Min."
          blick={[
            'Pflege zu Hause ist bei Demenz in den meisten Phasen möglich; 87 % aller Pflegebedürftigen leben zu Hause',
            'Allein lassen: früh stundenweise, ab der mittleren Phase nicht mehr',
            '24-Stunden-Pflege spätestens bei Weglaufen, Herdgefahr, Nachtunruhe oder erschöpften Angehörigen',
            'Betreuungskraft im Haus ab 2.150 € im Monat, bei Pflegegrad 3 ab ca. 923 € selbst zu tragen',
            'Pflegegrad 2 bis 5 je nach Phase; Orientierung und Verhalten zählen seit 2017 voll',
            'Pflegeheim erst, wenn die Sicherheit zu Hause nicht mehr zu halten ist',
          ]}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="moeglich" titel="Wie lange ist Demenzpflege zu Hause möglich?">
            <Text>
              Es gibt keine feste Grenze. Was die Person braucht, hängt von der Phase ab, nicht vom Kalender. Die häufigste Ursache ist die
              Alzheimer-Krankheit; sie schreitet über Jahre fort, und die Hilfe wächst mit. Wer früh die passende Unterstützung holt, bleibt
              länger zu Hause, oft bis zum Lebensende.
            </Text>
            <DemenzPhasen />
            <Punkte
              punkte={[
                { title: 'Frühe Phase: Angehörige reichen, Entlastung einplanen', desc: 'Gedächtnis, Wortfindung und Orientierung an fremden Orten lassen nach. Zu Hause klappt der Alltag mit Erinnerungshilfen, festen Zeiten und jemandem, der nach dem Rechten sieht. Jetzt den Pflegegrad beantragen, eine Vorsorgevollmacht erstellen und Entlastung aufbauen: stundenweise Betreuung, Tagespflege, Pflegekurs.' },
                { title: 'Mittlere Phase: jemand muss da sein', desc: 'Die Person findet sich auch zu Hause nicht mehr sicher zurecht, braucht Anleitung beim Waschen und Anziehen, läuft weg oder ist nachts wach. Angehörige allein schaffen das selten über Monate. Entweder eine Betreuungskraft wohnt mit im Haus, oder Tagespflege und Pflegedienst füllen die Lücken, solange nachts jemand aus der Familie da ist.' },
                { title: 'Späte Phase: vollständige Pflege', desc: 'Sprache und Erkennen gehen verloren, Inkontinenz und Schluckstörungen kommen dazu, oft Bettlägerigkeit. Zu Hause geht das mit einer Betreuungskraft für Grundpflege und Betreuung und einem Pflegedienst für die Behandlungspflege. Das Heim wird nötig, wenn die medizinische Versorgung zu Hause nicht mehr zu sichern ist.' },
              ]}
            />
            <MehrDazu
              label="Mehr dazu:"
              links={[
                { href: '/pflegegrad-bei-demenz', text: 'Pflegegrad bei Demenz' },
                { href: '/vollmacht-generator', text: 'Vorsorgevollmacht erstellen' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="allein" titel="Kann man einen Demenzkranken allein zu Hause lassen?">
            <Text>
              In der frühen Phase ja, für einige Stunden, wenn drei Dinge stimmen: Die Person kann Hilfe holen, Herd und Türen sind gesichert,
              und sie findet zurück, wenn sie das Haus verlässt. Ab der mittleren Phase nicht mehr für längere Zeit. Die typischen Unfälle
              passieren nicht, weil jemand unaufmerksam war, sondern weil die Person die Gefahr nicht mehr erkennt: die Herdplatte, die
              Haustür im Winter, die Treppe im Dunkeln.
            </Text>
            <Kasten augenbraue="Sicherheit zu Hause" titel="Zehn Handgriffe, die Unfälle verhindern">
              <HakenListe
                zweispaltig
                punkte={[
                  'Herd mit Abschaltautomatik oder Herdwächter',
                  'Rauchmelder in jedem Raum, Wasserkocher mit Abschaltung',
                  'Nachtlicht im Flur und im Bad, Bewegungsmelder',
                  'Teppichkanten, Kabel und Schwellen entfernen',
                  'Haltegriffe und Duschsitz im Bad, rutschfeste Matten',
                  'Medikamente in einem Wochenspender, Vorräte wegschließen',
                  'Hausnotruf oder Telefon mit Fototasten',
                  'Zettel mit Name, Adresse und Telefonnummer in der Jacke',
                  'GPS-Uhr oder Tracker, wenn die Person allein rausgeht',
                  'Nachbarn und Geschäfte in der Straße einweihen',
                ]}
              />
            </Kasten>
            <Text>
              Wer die Wohnung umbaut, bekommt von der Pflegekasse bis zu 4.180 € je Maßnahme, zum Beispiel für den Badumbau; Pflegehilfsmittel
              zum Verbrauch zahlt sie mit 42 € im Monat. Beides gilt ab Pflegegrad 1.
            </Text>
          </Abschnitt>

          <Abschnitt id="alltag" titel="Alltag mit Demenz: zehn Regeln für den Umgang">
            <Text>
              Die Regeln gelten für Angehörige wie für eine Betreuungskraft. Sie machen den Tag ruhiger, weil sie Streit um Dinge vermeiden,
              die die Person nicht mehr ändern kann.
            </Text>
            <Punkte
              punkte={[
                { title: '1. Nicht widersprechen, nicht korrigieren', desc: 'Wer „Das haben wir doch gestern besprochen" sagt, erzeugt Scham und Wut. Die Welt der Person gelten lassen und auf das Gefühl dahinter eingehen.' },
                { title: '2. Kurze Sätze, eine Frage auf einmal', desc: 'Namen nennen, Blickkontakt, langsam sprechen, warten. Statt „Was möchtest du anziehen?" lieber „Die blaue oder die graue Bluse?".' },
                { title: '3. Feste Zeiten', desc: 'Aufstehen, Mahlzeiten, Spaziergang, Schlafengehen immer zur gleichen Zeit. Vorhersehbarkeit ersetzt das Gedächtnis.' },
                { title: '4. Vertrautes bewahren', desc: 'Möbel stehen lassen, Lieblingsmusik, der eigene Stammplatz, das gewohnte Geschirr. Was früher selbstverständlich war, gibt jetzt Halt.' },
                { title: '5. Gefühle ernst nehmen, nicht die Fakten', desc: 'Wer nach der verstorbenen Mutter fragt, sucht Geborgenheit. „Sie fehlt dir" hilft, „Sie ist seit 20 Jahren tot" verletzt.' },
                { title: '6. Aufgaben geben, die gelingen', desc: 'Wäsche falten, Gemüse waschen, Tisch decken, Fotos sortieren. Gebraucht zu werden hält länger fit als jede Beschäftigungstherapie.' },
                { title: '7. Bewegung und Tageslicht', desc: 'Täglich raus, auch bei schlechtem Wetter. Das stabilisiert den Schlaf und beugt Stürzen vor.' },
                { title: '8. Reize dosieren', desc: 'Kein Fernseher als Dauergeräusch, keine großen Runden, ein Gespräch nach dem anderen. Zu viel auf einmal macht unruhig oder aggressiv.' },
                { title: '9. Bei Vorwürfen ruhig bleiben', desc: 'Beschuldigungen („Du hast mein Geld gestohlen") sind Krankheit, nicht Meinung. Nicht rechtfertigen, kurz aus der Situation gehen, später mit etwas Angenehmem zurückkommen.' },
                { title: '10. Selbst Hilfe holen', desc: 'Pflegekurs, Selbsthilfegruppe, feste Auszeiten. Wer sich nicht entlastet, hält die Pflege nicht durch, und die Person spürt die Anspannung.' },
              ]}
            />
            <MehrDazu
              label="Vertiefung:"
              links={[
                { href: '/tagesstruktur-demenz', text: 'Tagesstruktur bei Demenz' },
                { href: '/kommunikation-mit-demenzkranken', text: 'Kommunikation mit Demenzkranken' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="nachts" titel="Nachts: Unruhe, Umherwandern, Tag-Nacht-Umkehr">
            <Text>
              Die Nächte entscheiden oft darüber, ob die Pflege zu Hause durchzuhalten ist. Viele Menschen mit Demenz stehen nachts auf, suchen
              etwas, wollen zur Arbeit oder nach Hause, obwohl sie zu Hause sind. Angehörige schlafen dann seit Monaten nicht durch.
            </Text>
            <Punkte
              punkte={[
                { title: 'Den Tag so gestalten, dass die Nacht ruhig wird', desc: 'Tageslicht am Vormittag, Bewegung, kein Mittagsschlaf über 30 Minuten, abends kein Kaffee und keine großen Mahlzeiten, ein festes Abendritual mit gedämpftem Licht.' },
                { title: 'Die Nacht sicher machen', desc: 'Nachtlicht zum Bad, Bewegungsmelder am Bett, Haustür gesichert, Straßenkleidung außer Sicht. Wer aufsteht, wird ruhig begleitet und nicht diskutiert.' },
                { title: 'Ärztlich abklären', desc: 'Schmerzen, Harndrang, Schlafapnoe oder Medikamente können die Ursache sein. Beruhigungsmittel sind das letzte Mittel und erhöhen die Sturzgefahr.' },
                { title: 'Jemand im Haus', desc: 'Eine Betreuungskraft, die mit im Haus wohnt, ist bei Bedarf auch nachts da. Nachteinsätze kosten mehr, gestaffelt nach gelegentlich, einmal pro Nacht und mehrmals pro Nacht; den Preis zeigt der Rechner.' },
              ]}
            />
          </Abschnitt>

          <DunklerAbschnitt
            id="pflege-24h"
            titel="Wann braucht es 24-Stunden-Pflege bei Demenz?"
            einleitung="Spätestens wenn eines dieser Zeichen auftritt, muss tagsüber jemand im Haus sein und nachts jemand in Rufweite: durch Angehörige oder durch eine Betreuungskraft, die mit im Haus wohnt."
            punkte={[
              { title: 'Weglaufen', desc: 'Die Person verlässt die Wohnung, ohne es zu merken, auch nachts. Türsicherung und Präsenz sind dann Pflicht.' },
              { title: 'Nachtunruhe', desc: 'Schlafen am Tag, wach in der Nacht. Das bringt Angehörige schneller an die Grenze als jede körperliche Pflege.' },
              { title: 'Gefährliches Vergessen', desc: 'Herdplatte, Medikamente doppelt oder gar nicht, Stürze durch Orientierungslosigkeit. Ständige Aufsicht nötig.' },
              { title: 'Angehörige erschöpft', desc: 'Wer seit Monaten nicht durchschläft und nie frei hat, wird selbst krank. Dann ist Hilfe im Haus die Lösung, auch für die Beziehung.' },
            ]}
          >
            <Kasten titel="Was eine Primundus-Betreuungskraft bei Demenz übernimmt">
              <HakenListe
                zweispaltig
                punkte={[
                  'Tagesstruktur halten und Rituale konsequent einhalten',
                  'Wohnt mit im Haus: tagsüber im Einsatz, bei Bedarf auch nachts da',
                  'Sicherheit im Haushalt, Begleitung bei Spaziergängen',
                  'Körperpflege, Mahlzeiten, Erinnerung an Medikamente',
                  'Zuwendung, Gespräch, Beschäftigung',
                  'Angehörige haben wieder freie Abende und ruhige Nächte',
                ]}
              />
              <Text>
                Nicht dabei: Behandlungspflege wie Spritzen oder Verbandwechsel; die übernimmt der ambulante Pflegedienst auf ärztliche
                Verordnung, bezahlt von der Krankenkasse.
              </Text>
            </Kasten>
            <MehrDazu
              label="Weiterlesen:"
              links={[
                { href: '/24-stunden-pflege', text: 'So funktioniert 24-Stunden-Pflege' },
                { href: '/burnout-pflegende-angehoerige', text: 'Wenn Angehörige nicht mehr können' },
              ]}
            />
          </DunklerAbschnitt>

          <Abschnitt id="kosten" titel="Was kostet Demenzbetreuung zu Hause?">
            <Text>
              Die Kosten hängen von der Form der Betreuung ab, und bei jeder Form zahlt die Pflegekasse einen anderen Teil. Die Tabelle zeigt,
              was 2026 üblich ist und was die Kasse dazugibt.
            </Text>
            <Tabelle
              titel="Betreuungsformen bei Demenz im Vergleich (2026)"
              kopf={['Form', 'Was die Kasse zahlt', 'Für wen']}
              zeilen={[
                ['Angehörige pflegen selbst', `Pflegegeld ${euro(PFLEGEGELD[2])} bis ${euro(PFLEGEGELD[5])} im Monat ab Pflegegrad 2`, 'Frühe Phase, wenn jemand aus der Familie Zeit hat'],
                ['Stundenweise Betreuung (Alltagsbegleiter, Betreuungsgruppe)', `Entlastungsbetrag ${euro(ENTLASTUNGSBETRAG)} im Monat für anerkannte Angebote, ab Pflegegrad 1`, 'Frühe Phase, ein paar Stunden Entlastung pro Woche'],
                ['Tagespflege', `Bis ${euro(PFLEGESACHLEISTUNGEN[2])} (PG 2) bis ${euro(PFLEGESACHLEISTUNGEN[5])} (PG 5) im Monat, zusätzlich zum Pflegegeld`, 'Frühe und mittlere Phase, wenn abends und nachts Familie da ist'],
                ['Ambulanter Pflegedienst', `Pflegesachleistungen ${euro(PFLEGESACHLEISTUNGEN[2])} bis ${euro(PFLEGESACHLEISTUNGEN[5])} im Monat`, 'Körperpflege und Behandlungspflege zu festen Zeiten'],
                ['Betreuungskraft im Haus (24-Stunden-Pflege)', `Pflegegeld, Entlastungsbudget ${euro(ENTLASTUNGSBUDGET)} im Jahr, Steuerermäßigung bis 4.000 € im Jahr`, 'Mittlere und späte Phase; Preis bei Primundus ab 2.150 € im Monat'],
                ['Pflegeheim', 'Leistungsbetrag je Pflegegrad plus Zuschlag; Eigenanteil bundesweit Ø 3.364 € im Monat', 'Wenn Sicherheit oder Medizin zu Hause nicht mehr zu leisten sind'],
              ]}
              fuss="§§ 36, 37, 41, 42a, 45b SGB XI. Tagespflege wird nach § 41 Abs. 3 nicht auf das Pflegegeld angerechnet. Heim-Eigenanteil: vdek, Stand Juli 2026."
            />
            <Zwischentitel>Betreuungskraft im Haus: was selbst zu tragen bleibt</Zwischentitel>
            <Text>
              Für die Betreuungskraft im Haus rechnen wir so: Preis ab 2.150 € im Monat, davon gehen Pflegegeld, das anteilige Entlastungsbudget
              (295 € im Monat, wenn die Kasse den Einsatz als Verhinderungspflege anerkennt) und die Steuerermäßigung (bis 333 € im Monat) ab.
              Was bleibt, zeigt die Grafik je Pflegegrad; Ihren Preis berechnet der {' '}
              <a href={RECHNER} className={QUELLE}>Kostenrechner in 2 Minuten</a>.
            </Text>
            <KostenAufteilung />
            <MehrDazu
              label="Alle Zahlen:"
              links={[
                { href: '/kosten', text: 'Kosten der 24-Stunden-Pflege 2026' },
                { href: '/finanzierung', text: 'Alle Zuschüsse kombinieren' },
                { href: '/tagespflege-vs-24h-betreuung', text: 'Tagespflege oder 24h-Betreuung?' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="zuhause-oder-heim" titel="Demenz: zu Hause pflegen oder ins Heim?">
            <Text>
              Die Frage stellt sich in fast jeder Familie, und sie hat keine pauschale Antwort. Was sich sagen lässt: Bei Demenz wiegt das
              Vertraute schwerer als bei jeder anderen Erkrankung. Wer die eigene Küche, den Blick aus dem Fenster und die gewohnten Wege
              verliert, verliert Orientierung. Zu Hause mit einer festen Betreuungskraft gibt es Zuwendung von einem vertrauten Gesicht; im
              Heim wechseln die Bezugspersonen im Schichtdienst.
            </Text>
            <Gegenueber
              seiten={[
                { titel: 'Was für das Zuhause spricht', ton: 'gruen', punkte: ['Vertraute Umgebung gibt Orientierung und Ruhe', 'Eine feste Bezugsperson statt wechselnder Schichten', 'Tagesablauf nach den eigenen Gewohnheiten', 'Angehörige bleiben nah und werden trotzdem entlastet', 'Bei Pflegegrad 3 ab ca. 923 € selbst zu tragen, im Heim Ø 3.364 €'] },
                { titel: 'Wann das Heim die bessere Wahl ist', ton: 'taupe', punkte: ['Schwere Fremdgefährdung, die auch eine anwesende Betreuungskraft nicht auffangen kann', 'Behandlungspflege rund um die Uhr, die ein Pflegedienst zu Hause nicht leisten kann', 'Kein Zimmer für eine Betreuungskraft, keine Angehörigen in der Nähe', 'Die Person wünscht es selbst, solange sie entscheiden kann', 'Geschützte Demenz-Wohnbereiche sind auf Weglauftendenz eingerichtet'] },
              ]}
            />
            <HeimVsZuhause />
            <Zwischentitel>Wann das Heim die richtige Entscheidung ist</Zwischentitel>
            <Text>
              Nicht die Diagnose entscheidet, sondern drei Fragen: Ist die Person zu Hause sicher, auch nachts? Ist die medizinische
              Versorgung zu Hause zu leisten? Und halten die Angehörigen es durch? Lautet eine Antwort dauerhaft nein und lässt sich das
              auch mit einer Betreuungskraft im Haus nicht ändern, ist das Heim der bessere Ort. Ein Umzug ist dann keine Niederlage,
              sondern Schutz.
            </Text>
            <Kasten augenbraue="Rechtlich" titel="Gegen den Willen ins Heim?">
              <Text>
                Nur in engen Grenzen. Eine Unterbringung, die die Freiheit entzieht, darf ein rechtlicher Betreuer nur veranlassen, wenn sich die
                Person sonst erheblich schadet, und nur mit Genehmigung des Betreuungsgerichts (§ 1831 BGB). Ohne Vorsorgevollmacht oder
                Betreuung kann niemand aus der Familie diese Entscheidung treffen. Deshalb gehört die {l('/vollmacht-generator', 'Vorsorgevollmacht')} in
                die frühe Phase.
              </Text>
            </Kasten>
            <Text>
              „Wird Demenz im Heim schlimmer?" Die Krankheit schreitet unabhängig vom Wohnort fort. Ein Umzug kann Verwirrtheit und Unruhe aber
              vorübergehend verstärken, weil alles Vertraute fehlt; viele brauchen Wochen für die Eingewöhnung. Wer das vermeiden will, sorgt
              früh dafür, dass zu Hause jemand da ist.
            </Text>
            <MehrDazu
              label="Zahlen im Detail:"
              links={[
                { href: '/pflegeheim-kosten-deutschland', text: 'Pflegeheim-Kosten je Bundesland' },
                { href: '/24h-pflege-vs-pflegeheim-kosten', text: '24h-Pflege oder Pflegeheim: was ist besser?' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="pflegegrad" titel="Pflegegrad bei Demenz und Leistungen 2026">
            <Text>
              Seit 2017 zählt bei der Begutachtung nicht mehr die Minutenzahl der Hilfe, sondern die Selbständigkeit in sechs Bereichen.
              Orientierung, Erinnern und Verhalten (Module 2 und 3) wiegen 15 Prozent, die Selbstversorgung 40 Prozent. Wer beim Waschen
              und Anziehen Anleitung braucht, gilt dort als „überwiegend unselbständig", auch wenn die Hände noch alles könnten. Deshalb
              erreichen Menschen mit Demenz heute meist höhere Pflegegrade als früher.
            </Text>
            <Tabelle
              titel="Typische Pflegegrade bei Demenz und Leistungen 2026"
              kopf={['Phase', 'Typischer Pflegegrad', 'Pflegegeld', 'Entlastungsbetrag']}
              zeilen={[
                ['Leicht', 'Pflegegrad 2–3', `${PFLEGEGELD[2]}–${PFLEGEGELD[3]} €`, euro(ENTLASTUNGSBETRAG)],
                ['Mittelschwer', 'Pflegegrad 3–4', `${PFLEGEGELD[3]}–${PFLEGEGELD[4]} €`, euro(ENTLASTUNGSBETRAG)],
                ['Schwer', 'Pflegegrad 4–5', `${PFLEGEGELD[4]}–${PFLEGEGELD[5]} €`, euro(ENTLASTUNGSBETRAG)],
              ]}
              betont={2}
              fuss={`Richtwerte; die Einstufung trifft die Pflegekasse nach der Begutachtung. Dazu ab Pflegegrad 2: Entlastungsbudget ${euro(ENTLASTUNGSBUDGET)} im Jahr, Tagespflege bis zum Sachleistungsbetrag.`}
            />
            <Text>
              Vor dem Antrag lohnt der Blick auf die Punkte: Unser {l('/pflegegrad-rechner', 'Pflegegrad-Rechner')} stellt dieselben 64 Fragen wie der
              Gutachter und zeigt, wie viele Punkte in den Modulen 2 und 3 zusammenkommen. Zwei Wochen Pflegetagebuch vor dem Termin
              machen den Unterschied, weil der Gutachter die Nächte nicht sieht.
            </Text>
            <MehrDazu
              label="Weiter:"
              links={[
                { href: '/pflegegrad-bei-demenz', text: 'Pflegegrad bei Demenz: Einstufung und Tipps' },
                { href: '/pflegegrad-beantragen', text: 'Pflegegrad beantragen' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="entlastung" titel="Entlastung für Angehörige: was die Kasse zahlt und wer hilft">
            <Text>
              Wer einen Menschen mit Demenz pflegt, trägt die Last rund um die Uhr, auch nachts. Diese Hilfen stehen Ihnen zu, und die
              meisten werden zu selten genutzt:
            </Text>
            <Punkte
              punkte={[
                { title: 'Kostenloser Pflegekurs', desc: 'Die Pflegekasse muss Angehörigen unentgeltlich Schulungen anbieten (§ 45 SGB XI), auch zu Hause und speziell zu Demenz. Fragen Sie bei Ihrer Kasse oder der Alzheimer-Gesellschaft vor Ort.' },
                { title: 'Entlastungsbudget: 3.539 € im Jahr', desc: 'Für Vertretung, wenn Sie krank sind oder Urlaub brauchen, und für Kurzzeitpflege; ab Pflegegrad 2, seit Juli 2025 ein gemeinsamer Topf.' },
                { title: 'Entlastungsbetrag: 131 € im Monat', desc: 'Für Betreuungsgruppen, Alltagsbegleiter und Haushaltshilfen, die das Land anerkannt hat; ab Pflegegrad 1. Nicht genutzte Beträge können Sie im Jahr ansparen und bis zum Ende des folgenden Halbjahres nutzen.' },
                { title: 'Tagespflege zusätzlich zum Pflegegeld', desc: 'Ein oder mehrere Tage pro Woche in einer Tagespflege, ohne dass das Pflegegeld sinkt (§ 41 Abs. 3 SGB XI). Für viele Familien die Brücke in der mittleren Phase.' },
                { title: 'Pflegeberatung', desc: 'Kostenlos bei Pflegestützpunkten und der Pflegekasse (§ 7a SGB XI): welche Leistungen zusammenpassen, welche Angebote es vor Ort gibt.' },
                { title: 'Alzheimer-Telefon: 030 259 37 95 14', desc: 'Die Deutsche Alzheimer Gesellschaft berät Angehörige am Telefon und vermittelt Selbsthilfegruppen und Helferkreise in Ihrer Nähe.' },
              ]}
            />
            <RechnerKasten src="apex-demenz" />
            <Text>
              Quellen: Ratgeber Demenz des Bundesministeriums für Gesundheit (Stand März 2026), Deutsche Alzheimer Gesellschaft (Infoblatt 1,
              August 2024), §§ 7a, 36, 37, 41, 42a, 45, 45b SGB XI, § 1831 BGB, vdek-Statistik zum Heim-Eigenanteil (Juli 2026); gelesen am
              20. September 2026.
            </Text>
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen zur Demenzpflege zu Hause">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>

          <Weiterlesen aktuell="demenz-pflege-zuhause" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
