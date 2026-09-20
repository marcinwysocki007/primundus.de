import type { Metadata } from 'next'
import { KontaktBand } from '@/components/ArticleCTA'
import { Sicher } from '@/components/Sicher'
import {
  Abschnitt, DunklerAbschnitt, Fragen, Kasten, MehrDazu, Punkte, RatgeberKopf, RatgeberRumpf, RechnerKasten, Schritte, Tabelle, Text,
  Zwischentitel,
} from '@/components/vorlage/Ratgeber'
import { KombinationsRechner } from '@/components/werkzeuge/KombinationsRechner'
import { anteiligesPflegegeld } from '@/lib/kombination'
import { KostenAufteilung } from '@/components/grafik/Grafik'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'
import { ENTLASTUNGSBETRAG, ENTLASTUNGSBUDGET, PFLEGEGELD, PFLEGESACHLEISTUNGEN } from '@/lib/fakten'
import { TAGESPFLEGE } from '@/lib/pflegegrad-inhalte'

// Pflegegeld-Seite neu (20.09.2026): „pflegegeld" ist mit 135.000 Suchen im Monat der größte Begriff des Themas, die Seite war mit
// 706 Wörtern und drei falschen Regeln (Beratungsbesuch, Krankenhaus vier Wochen, „im Voraus") nicht konkurrenzfähig (pflege.de 3.800,
// pflege-betreuer.de 3.600 Wörter). Jede Regel steht mit Paragraf im Text; alle Beträge kommen aus lib/fakten. Neu: Kombinations-Rechner
// nach § 38, Eigenanteil je Pflegegrad mit Betreuungskraft, Auszahlung, Krankenhaus (acht Wochen, § 34), Pflichten, Angehörige, 2028.

const AKTUALISIERT = aktualisiertAm('pflegegeld', '20. September 2026')
const euro = (n: number) => n.toLocaleString('de-DE') + ' €'
const euroCent = (n: number) => n.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' €'
const LINK = 'font-semibold text-pm-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors'
const GRADE = [2, 3, 4, 5] as const
const PREIS = { 2: 2150, 3: 2150, 4: 2150, 5: 2200 } as const
const eigen = (g: 2 | 3 | 4 | 5) => PREIS[g] - PFLEGEGELD[g] - 295 - 333
const halb = (g: 2 | 3 | 4 | 5) => anteiligesPflegegeld(g, PFLEGESACHLEISTUNGEN[g] / 2).pflegegeld

const SECTIONS = [
  { id: 'tabelle', title: 'Pflegegeld-Tabelle 2026' },
  { id: 'anspruch', title: 'Wer Pflegegeld bekommt' },
  { id: 'betreuungskraft', title: 'Mit Betreuungskraft im Haus' },
  { id: 'kombination', title: 'Pflegegeld und Pflegedienst' },
  { id: 'auszahlung', title: 'Auszahlung und Beginn' },
  { id: 'krankenhaus', title: 'Krankenhaus, Reha, Urlaub' },
  { id: 'pflichten', title: 'Beratungsbesuch und Pflichten' },
  { id: 'angehoerige', title: 'Pflegegeld für Angehörige' },
  { id: 'beantragen', title: 'Beantragen' },
  { id: 'erhoehung', title: 'Erhöhung 2027 und 2028' },
  { id: 'faq', title: 'Häufige Fragen' },
]

export const metadata: Metadata = {
  title: 'Pflegegeld 2026: Tabelle, Höhe je Pflegegrad, Auszahlung',
  description:
    'Pflegegeld 2026: 347, 599, 800 oder 990 € im Monat ab Pflegegrad 2. Wer es bekommt, wann es kommt, was bei Pflegedienst, Krankenhaus, Betreuungskraft gilt.',
  alternates: { canonical: 'https://primundus.de/pflegegeld' },
  openGraph: {
    title: 'Pflegegeld 2026: Tabelle, Höhe je Pflegegrad, Auszahlung',
    description: 'Pflegegeld 2026 ab Pflegegrad 2: Beträge, Anspruch, Auszahlung, Kombination mit Pflegedienst, Krankenhaus, Betreuungskraft im Haus.',
    url: 'https://primundus.de/pflegegeld',
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
    images: [{ url: '/images/primundus_logo_header.webp' }],
  },
}

// Sichtbare Fragen = Daten für Google (eine Quelle)
const FRAGEN: { q: string; a: string }[] = [
  {
    q: 'Wie hoch ist das Pflegegeld 2026?',
    a: `Pflegegrad 2: ${euro(PFLEGEGELD[2])}, Pflegegrad 3: ${euro(PFLEGEGELD[3])}, Pflegegrad 4: ${euro(PFLEGEGELD[4])}, Pflegegrad 5: ${euro(PFLEGEGELD[5])} im Monat (§ 37 SGB XI). Pflegegrad 1 bekommt kein Pflegegeld, aber den Entlastungsbetrag von ${euro(ENTLASTUNGSBETRAG)}. Die Beträge gelten seit dem 1. Januar 2025; im Gesetz steht für 2026 und 2027 keine Erhöhung, die nächste Anpassung ist für den 1. Januar 2028 vorgesehen (§ 30 SGB XI).`,
  },
  {
    q: 'Wer bekommt Pflegegeld?',
    a: 'Pflegebedürftige ab Pflegegrad 2, die zu Hause leben und ihre Pflege selbst organisieren: durch Angehörige, Nachbarn, Freunde oder eine selbst beschaffte Betreuungskraft. Das Geld geht an die pflegebedürftige Person, nicht an die Pflegeperson. Im Pflegeheim gibt es kein Pflegegeld.',
  },
  {
    q: 'Bekomme ich Pflegegeld, wenn eine Betreuungskraft bei uns wohnt?',
    a: 'Ja, in voller Höhe. § 37 SGB XI heißt „Pflegegeld für selbst beschaffte Pflegehilfen": Wer die Pflege zu Hause selbst sicherstellt, bekommt das Pflegegeld, auch mit einer Betreuungskraft im Haus. Die Beratungsbesuche gelten weiter. Pflegesachleistungen gibt es dafür nicht, die zahlt die Kasse nur an zugelassene Pflegedienste.',
  },
  {
    q: 'Wann wird das Pflegegeld ausgezahlt?',
    a: 'Monatlich, per Überweisung der Pflegekasse auf das Konto der pflegebedürftigen Person. Den Zahltag nennt der Bescheid oder die Kasse. Der Anspruch beginnt mit dem Antrag: Wer im laufenden Monat pflegebedürftig wird und noch in diesem Monat den Antrag stellt, bekommt das Geld ab dem Tag, an dem die Voraussetzungen vorliegen; ein späterer Antrag wirkt ab dem Ersten des Antragsmonats (§ 33 SGB XI).',
  },
  {
    q: 'Wird Pflegegeld rückwirkend gezahlt?',
    a: 'Nur bis zum Antragsmonat. Die Pflegekasse zahlt ab Antragstellung, frühestens ab dem Tag, an dem die Pflegebedürftigkeit vorlag; wer den Antrag später stellt, bekommt das Geld ab dem Ersten des Monats, in dem der Antrag einging (§ 33 Abs. 1 SGB XI). Deshalb zählt der Antragstag, nicht der Bescheid: Die Bearbeitung kann 25 Arbeitstage dauern, das Geld kommt dann rückwirkend.',
  },
  {
    q: 'Wird das Pflegegeld im Krankenhaus oder in der Reha weitergezahlt?',
    a: 'Ja, seit 2026 in den ersten acht Wochen einer vollstationären Krankenhausbehandlung oder Reha in voller Höhe (§ 34 Abs. 2 SGB XI), vorher waren es vier Wochen. Danach ruht es, bis die Person wieder zu Hause ist. Bei Kurzzeitpflege und Verhinderungspflege läuft die Hälfte des Pflegegeldes für bis zu acht Wochen im Jahr weiter (§ 37 Abs. 2).',
  },
  {
    q: 'Muss ich Pflegegeld versteuern?',
    a: 'Die pflegebedürftige Person nicht. Gibt sie das Geld an Angehörige oder an andere Menschen weiter, die aus sittlicher Pflicht pflegen, bleibt es bei diesen bis zur Höhe des Pflegegeldes steuerfrei (§ 3 Nr. 36 EStG). Wer ohne solche Bindung gegen Bezahlung pflegt, versteuert das Geld als Einkommen.',
  },
  {
    q: 'Wird Pflegegeld auf Bürgergeld oder Grundsicherung angerechnet?',
    a: 'Bei der pflegebedürftigen Person nicht: Leistungen der Pflegeversicherung bleiben bei Sozialleistungen, die vom Einkommen abhängen, unberücksichtigt (§ 13 Abs. 5 SGB XI). Für die Pflegeperson gilt: Weitergegebenes Pflegegeld zählt beim Unterhalt nicht (§ 13 Abs. 6); wie das Jobcenter es beim Bürgergeld der Pflegeperson behandelt, klären Sie dort.',
  },
  {
    q: 'Was passiert, wenn ich den Beratungsbesuch vergesse?',
    a: 'Die Pflegekasse muss das Pflegegeld dann angemessen kürzen und im Wiederholungsfall entziehen (§ 37 Abs. 6 SGB XI). Pflicht ist ein Besuch je Halbjahr ab Pflegegrad 2; Pflegegrad 4 und 5 dürfen vierteljährlich einen abrufen. Bis März 2027 darf jeder zweite Besuch per Video stattfinden, der erste muss zu Hause sein.',
  },
  {
    q: 'Kann ich Pflegegeld und Pflegedienst kombinieren?',
    a: `Ja, als Kombinationsleistung nach § 38 SGB XI. Nutzen Sie zum Beispiel 40 % der Sachleistungen über den Pflegedienst, bekommen Sie noch 60 % des Pflegegeldes. Bei Pflegegrad 3 sind das ${euroCent(anteiligesPflegegeld(3, PFLEGESACHLEISTUNGEN[3] * 0.4).pflegegeld)} statt ${euro(PFLEGEGELD[3])}. An die Aufteilung sind Sie sechs Monate gebunden; Tagespflege und der Entlastungsbetrag kommen ohne Kürzung dazu.`,
  },
  {
    q: 'Bekommen Kinder Pflegegeld?',
    a: 'Ja, in derselben Höhe wie Erwachsene. Kinder werden mit eigenen Maßstäben begutachtet: Es zählt, wie viel mehr Hilfe sie brauchen als ein gesundes Kind desselben Alters; Kinder bis 18 Monate bekommen einen Pflegegrad höher als ihre Punkte ergeben (§ 15 Abs. 6 und 7 SGB XI). Das Geld geht an das Kind, verwaltet von den Eltern.',
  },
  {
    q: 'Was passiert mit dem Pflegegeld im Pflegeheim?',
    a: `Es endet mit dem Einzug: Im Heim zahlt die Pflegekasse stattdessen einen Leistungsbetrag direkt an das Heim, bei Pflegegrad 3 sind das ${euro(1319)} im Monat (§ 43 SGB XI). Bis zum Umzugstag wird das Pflegegeld taggenau gerechnet, der Monat mit 30 Tagen (§ 37 Abs. 2).`,
  },
  {
    q: 'Wird das Pflegegeld 2027 erhöht?',
    a: 'Im Gesetz steht für 2027 keine Erhöhung. § 30 SGB XI regelt die letzte Anpassung zum 1. Januar 2025 (plus 4,5 %) und die nächste zum 1. Januar 2028 nach der Kerninflation der drei Vorjahre, höchstens im Umfang der Lohnentwicklung. Das Bundesgesundheitsministerium gibt die neuen Beträge im Bundesanzeiger bekannt.',
  },
  {
    q: 'Gibt es Pflegegeld bei Pflegegrad 1?',
    a: `Nein. Pflegegrad 1 bekommt den Entlastungsbetrag von ${euro(ENTLASTUNGSBETRAG)} im Monat für anerkannte Alltagshilfen, Tagespflege oder einen Pflegedienst, dazu Pflegehilfsmittel, Zuschüsse für den Umbau und einen Beratungsbesuch je Halbjahr auf Wunsch. Ab 27 Punkten in der Begutachtung beginnt Pflegegrad 2 mit ${euro(PFLEGEGELD[2])} Pflegegeld.`,
  },
]

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pflegegeld 2026: Tabelle, Höhe je Pflegegrad, Auszahlung',
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
    mainEntity: FRAGEN.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
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
            { label: 'Startseite', href: '/' },
            { label: 'Finanzierung', href: '/finanzierung' },
            { label: 'Pflegegeld 2026' },
          ]}
          augenbraue="Pflegegeld · 2026"
          titel="Pflegegeld 2026: Höhe je Pflegegrad, wer es bekommt, wann es kommt"
          einleitung={`Pflegegeld ist das Geld der Pflegekasse für alle, die zu Hause gepflegt werden und die Pflege selbst organisieren: ${euro(PFLEGEGELD[2])} bei Pflegegrad 2 bis ${euro(PFLEGEGELD[5])} bei Pflegegrad 5, jeden Monat, frei verwendbar, steuerfrei. Hier lesen Sie, wer es bekommt, wann es auf dem Konto ist, was bei Pflegedienst, Krankenhaus und Betreuungskraft im Haus gilt und was 2027 und 2028 passiert. Jede Regel steht mit Paragraf dabei.`}
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="11 Min."
          blick={[
            `Pflegegrad 2: ${euro(PFLEGEGELD[2])} · 3: ${euro(PFLEGEGELD[3])} · 4: ${euro(PFLEGEGELD[4])} · 5: ${euro(PFLEGEGELD[5])} im Monat (§ 37 SGB XI)`,
            'Anspruch ab Pflegegrad 2 bei Pflege zu Hause, auch mit Betreuungskraft im Haus',
            'Zahlung ab dem Antragsmonat, monatlich auf das Konto der pflegebedürftigen Person',
            'Im Krankenhaus und in der Reha acht Wochen weiter, im Pflegeheim nicht',
            'Beratungsbesuch je Halbjahr Pflicht, sonst kürzt die Kasse',
            'Keine Erhöhung 2026 und 2027; nächste Anpassung 1. Januar 2028 (§ 30 SGB XI)',
          ]}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="tabelle" titel="Pflegegeld-Tabelle 2026: alle Pflegegrade">
            <Text>
              Die Beträge stehen in § 37 SGB XI und gelten seit dem 1. Januar 2025 unverändert. Daneben sehen Sie, was die Kasse stattdessen an
              einen Pflegedienst zahlt (Pflegesachleistungen, § 36) und was zusätzlich dazukommt, ohne das Pflegegeld zu kürzen.
            </Text>
            <Tabelle
              titel="Pflegegeld und Leistungen je Pflegegrad, Stand 2026"
              kopf={['Pflegegrad', 'Pflegegeld', 'im Jahr', 'Sachleistungen', 'Tagespflege dazu', 'Entlastungsbetrag dazu']}
              zeilen={[
                ['Pflegegrad 1', 'keins', '–', '–', '–', euro(ENTLASTUNGSBETRAG)],
                ...GRADE.map((g) => [
                  `Pflegegrad ${g}`,
                  euro(PFLEGEGELD[g]),
                  euro(PFLEGEGELD[g] * 12),
                  `bis ${euro(PFLEGESACHLEISTUNGEN[g])}`,
                  `bis ${euro(TAGESPFLEGE[g])}`,
                  euro(ENTLASTUNGSBETRAG),
                ]),
              ]}
              betont={1}
              fuss={`§§ 36, 37, 41, 45b SGB XI. Sachleistungen zahlt die Kasse nur an zugelassene Pflegedienste; Tagespflege und Entlastungsbetrag werden nicht auf das Pflegegeld angerechnet. Dazu kommen ab Pflegegrad 2 ${euro(ENTLASTUNGSBUDGET)} im Jahr für Verhinderungs- und Kurzzeitpflege (§ 42a).`}
            />
            <Punkte
              punkte={[
                { title: 'Pflegegeld', desc: 'Geht an die pflegebedürftige Person, jeden Monat, ohne Nachweis, wofür es verwendet wird. Die meisten geben es an die Angehörigen weiter, die pflegen.' },
                { title: 'Pflegesachleistungen', desc: 'Werden nicht ausgezahlt: Die Kasse bezahlt damit die Rechnung eines zugelassenen Pflegedienstes bis zum Höchstbetrag. Beides lässt sich anteilig kombinieren (§ 38).' },
                { title: 'Entlastungsbetrag', desc: <>{euro(ENTLASTUNGSBETRAG)} im Monat für alle Pflegegrade, zweckgebunden für Tagespflege, Kurzzeitpflege, Pflegedienst oder anerkannte Alltagshilfen (§ 45b). Mehr dazu unter <a href="/entlastungsbetrag" className={LINK}>Entlastungsbetrag</a>.</> },
                { title: 'Landespflegegeld Bayern', desc: 'Wer in Bayern wohnt, bekommt ab Pflegegrad 2 zusätzlich 500 € im Jahr vom Landesamt für Pflege, unabhängig davon, ob zu Hause oder im Heim gepflegt wird.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="anspruch" titel="Wer Pflegegeld bekommt">
            <Text>
              § 37 SGB XI heißt im Gesetz „Pflegegeld für selbst beschaffte Pflegehilfen". Anspruch hat, wer alle drei Bedingungen erfüllt:
            </Text>
            <Schritte
              schritte={[
                { title: 'Pflegegrad 2, 3, 4 oder 5', desc: <>Bei Pflegegrad 1 gibt es kein Pflegegeld, sondern den Entlastungsbetrag. Welcher Pflegegrad realistisch ist, zeigt unser <a href="/pflegegrad-rechner" className={LINK}>Pflegegrad-Rechner</a> mit den 64 Fragen der Gutachter.</> },
                { title: 'Pflege zu Hause', desc: 'In der eigenen Wohnung, bei Angehörigen oder in einer Wohngemeinschaft. Im Pflegeheim endet das Pflegegeld; dort zahlt die Kasse den Leistungsbetrag nach § 43 direkt an das Heim.' },
                { title: 'Die Pflege ist selbst sichergestellt', desc: 'Durch Angehörige, Nachbarn, Freunde oder eine selbst beschaffte Betreuungskraft. Wer die Pflege komplett einem zugelassenen Pflegedienst überlässt, bekommt Sachleistungen statt Pflegegeld; wer beides nutzt, die Kombinationsleistung.' },
              ]}
            />
            <Zwischentitel>Auch Kinder, auch bei Demenz, auch ohne Diagnose</Zwischentitel>
            <Text>
              Das Pflegegeld hängt allein am Pflegegrad, nicht an der Krankheit. Menschen mit Demenz bekommen es genauso wie Menschen mit
              körperlichen Einschränkungen: Seit 2017 zählen Orientierung, Verhalten und Alltag in der Begutachtung genauso wie Gehen und Waschen.
              Kinder bekommen dieselben Beträge; Säuglinge bis 18 Monate werden einen Pflegegrad höher eingestuft, als ihre Punkte ergeben (§ 15 Abs. 7).
              Eine Diagnose ist keine Voraussetzung, entscheidend ist, wie viel Hilfe jemand im Alltag braucht.
            </Text>
            <MehrDazu
              label="Weiter:"
              links={[
                { href: '/pflegegrad-bei-demenz', text: 'Pflegegrad bei Demenz' },
                { href: '/pflegegrade', text: 'Alle Pflegegrade im Überblick' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="betreuungskraft" titel="Pflegegeld mit Betreuungskraft im Haus">
            <Text>
              Wohnt eine Betreuungskraft bei Ihnen, gilt die Pflege als selbst sichergestellt: Das Pflegegeld läuft in voller Höhe weiter, jeden
              Monat, und Sie setzen es für die Betreuung ein. Dazu kommt das Entlastungsbudget von {euro(ENTLASTUNGSBUDGET)} im Jahr, wenn die
              Kasse den Einsatz als Verhinderungspflege anerkennt. Die Steuerermäßigung für haushaltsnahe Dienstleistungen bringt weitere 20 %
              (§ 35a EStG, bis 4.000 € im Jahr). Pflegesachleistungen gibt es für die Betreuungskraft nicht; die zahlt die Kasse nur an
              zugelassene Pflegedienste. Der Entlastungsbetrag ist in der Regel ebenfalls nicht für sie einsetzbar.
            </Text>
            <Tabelle
              titel="Betreuungskraft im Haus: eine Person, Grundpreis, Stand September 2026"
              kopf={['Pflegegrad', 'Betreuung ab', 'Pflegegeld', 'Entlastungsbudget, anteilig', 'Steuerermäßigung, bis zu', 'Selbst zu tragen ab ca.']}
              zeilen={GRADE.map((g) => [`Pflegegrad ${g}`, euro(PREIS[g]), `− ${euro(PFLEGEGELD[g])}`, '− 295 €', '− 333 €', euro(eigen(g))])}
              betont={5}
              fuss="Preise aus unserem Kostenrechner. Entlastungsbudget 3.539 € durch zwölf Monate. Dazu An- und Abreise 125 € je Strecke; Zimmer, Kost und Logis stellen Sie. Rollstuhl oder Bettlägerigkeit +100 €, Nächte nach Bedarf +50 bis +300 €."
            />
            <Zwischentitel>Wer zahlt was: der Monatspreis aufgeteilt</Zwischentitel>
            <KostenAufteilung />
            <RechnerKasten src="apex-pflegegeld" />
            <MehrDazu
              label="Weiter:"
              links={[
                { href: '/pflegegeld-und-24h-pflege-kombinieren', text: 'Pflegegeld und Betreuungskraft: alle Zuschüsse zusammen' },
                { href: '/kosten', text: 'Kosten der 24-Stunden-Pflege 2026' },
                { href: '/finanzierung', text: 'Finanzierung: alle Kassenleistungen' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="kombination" titel="Pflegegeld und Pflegedienst: die Kombinationsleistung">
            <Text>
              Kommt ein Pflegedienst zum Beispiel morgens zum Waschen, rechnet er mit der Kasse über die Sachleistungen ab. Das Pflegegeld sinkt
              dann um genau den Prozentsatz, zu dem Sie die Sachleistungen nutzen (§ 38 SGB XI). Der Rechner zeigt, was bleibt.
            </Text>
            <Sicher name="Kombinations-Rechner" fallback={<Kasten><Text>Der Rechner lädt gerade nicht. Die Beispieltabelle unten zeigt die Kombination bei halber Sachleistung.</Text></Kasten>}>
              <KombinationsRechner />
            </Sicher>
            <Zwischentitel>Beispiel: halbe Sachleistung, halbes Pflegegeld</Zwischentitel>
            <Tabelle
              titel="Beispiel: die Hälfte der Sachleistungen über den Pflegedienst"
              kopf={['Pflegegrad', 'Pflegedienst-Rechnung', 'Genutzter Anteil', 'Pflegegeld, das bleibt', 'Kasse insgesamt']}
              zeilen={GRADE.map((g) => [
                `Pflegegrad ${g}`,
                euroCent(PFLEGESACHLEISTUNGEN[g] / 2),
                '50 %',
                euroCent(halb(g)),
                euroCent(PFLEGESACHLEISTUNGEN[g] / 2 + halb(g)),
              ])}
              betont={3}
              fuss="An die gewählte Aufteilung sind Sie sechs Monate gebunden. Die Kasse rechnet mit den tatsächlichen Monatsrechnungen; das Pflegegeld kann deshalb von Monat zu Monat schwanken."
            />
            <Punkte
              punkte={[
                { title: 'Ohne Kürzung dazu', desc: 'Tagespflege (§ 41 Abs. 3), der Entlastungsbetrag (§ 45b), Pflegehilfsmittel, Hausnotruf und Zuschüsse zum Umbau werden nicht auf das Pflegegeld angerechnet.' },
                { title: 'Behandlungspflege', desc: 'Spritzen, Verbände, Medikamente richten: verordnet der Arzt, zahlt die Krankenkasse nach SGB V. Das mindert das Pflegegeld nicht, auch wenn derselbe Pflegedienst kommt.' },
                { title: 'Verhinderungspflege', desc: 'Springt ein Pflegedienst ein, weil die Pflegeperson krank oder im Urlaub ist, läuft das über das Entlastungsbudget; das Pflegegeld wird dabei zur Hälfte weitergezahlt (§ 37 Abs. 2).' },
              ]}
            />
            <MehrDazu
              label="Weiter:"
              links={[
                { href: '/pflegesachleistungen', text: 'Pflegesachleistungen: was der Pflegedienst abrechnet' },
                { href: '/verhinderungspflege', text: 'Verhinderungspflege und Entlastungsbudget' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="auszahlung" titel="Auszahlung und Beginn">
            <Text>
              Die Pflegekasse überweist das Pflegegeld monatlich auf das Konto der pflegebedürftigen Person; den Zahltag nennt der Bescheid. Wann
              der Anspruch beginnt, regelt § 33 SGB XI:
            </Text>
            <Punkte
              punkte={[
                { title: 'Ab dem Antrag', desc: 'Leistungen gibt es ab Antragstellung, frühestens ab dem Tag, an dem die Pflegebedürftigkeit vorliegt. Wer den Antrag erst in einem späteren Monat stellt, bekommt das Geld ab dem Ersten des Antragsmonats. Der Antrag kann formlos sein, auch telefonisch; notieren Sie das Datum.' },
                { title: 'Rückwirkend nach dem Bescheid', desc: 'Die Kasse muss spätestens 25 Arbeitstage nach dem Antrag entscheiden (§ 18c). Dauert es länger, zahlt sie 70 € je angefangene Woche Verzug, wenn sie die Verzögerung zu vertreten hat. Das Pflegegeld für die Wartezeit kommt mit dem Bescheid nach.' },
                { title: 'Taggenau', desc: 'Besteht der Anspruch nicht den ganzen Monat, etwa beim Umzug ins Heim oder bei Beginn mitten im Monat, rechnet die Kasse den Monat mit 30 Tagen (§ 37 Abs. 2).' },
                { title: 'Im Todesfall', desc: 'Das Pflegegeld wird bis zum Ende des Monats gezahlt, in dem die pflegebedürftige Person gestorben ist. Nur was für spätere Monate überwiesen wurde, holt die Kasse zurück.' },
                { title: 'Im Ausland', desc: 'Bei Aufenthalten in der EU, im EWR und in der Schweiz läuft das Pflegegeld weiter; in anderen Ländern für bis zu acht Wochen im Kalenderjahr (§ 34 Abs. 1 und 1a).' },
                { title: 'Befristung', desc: 'Erwartet der Gutachter Besserung, kann die Kasse den Pflegegrad befristen, insgesamt höchstens drei Jahre. Sie muss vor Ablauf prüfen und rechtzeitig mitteilen, wie es weitergeht.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="krankenhaus" titel="Krankenhaus, Reha, Kurzzeitpflege, Urlaub">
            <Tabelle
              titel="Was mit dem Pflegegeld passiert"
              kopf={['Situation', 'Pflegegeld', 'Regel']}
              zeilen={[
                ['Krankenhaus oder Reha, vollstationär', 'acht Wochen in voller Höhe, danach ruht es', '§ 34 Abs. 2 SGB XI'],
                ['Kurzzeitpflege im Heim', 'die Hälfte, bis zu acht Wochen im Jahr', '§ 37 Abs. 2'],
                ['Verhinderungspflege (Pflegeperson krank oder im Urlaub)', 'die Hälfte, bis zu acht Wochen im Jahr', '§ 37 Abs. 2, § 39'],
                ['Tagespflege an einzelnen Tagen', 'volle Höhe, keine Anrechnung', '§ 41 Abs. 3'],
                ['Urlaub mit der pflegebedürftigen Person in der EU', 'volle Höhe', '§ 34 Abs. 1a'],
                ['Umzug ins Pflegeheim', 'endet am Umzugstag, taggenau', '§ 37 Abs. 2, § 43'],
              ]}
              betont={1}
            />
            <Text>
              Die Acht-Wochen-Regel gilt seit dem 1. Januar 2026; bis Ende 2025 waren es vier Wochen, und manche Ratgeber nennen noch die alte
              Frist. Wer nach dem Krankenhaus eine Betreuungskraft braucht, damit die Rückkehr nach Hause gelingt, findet den Ablauf unter{' '}
              <a href="/24-stunden-pflege-krankenhausaufenthalt" className={LINK}>Betreuung nach dem Krankenhaus</a>.
            </Text>
          </Abschnitt>

          <DunklerAbschnitt
            id="pflichten"
            titel="Beratungsbesuch und Pflichten"
            einleitung="Wer Pflegegeld bezieht, muss regelmäßig einen Beratungsbesuch abrufen. Er soll die Pflege zu Hause sichern und Angehörige entlasten, nicht kontrollieren; wer ihn versäumt, verliert Geld."
            punkte={[
              { title: 'Ein Besuch je Halbjahr', desc: 'Pflicht für Pflegegrad 2 bis 5 (§ 37 Abs. 3). Pflegegrad 4 und 5 dürfen vierteljährlich einen Besuch abrufen; Pflegegrad 1 hat halbjährlich Anspruch, aber keine Pflicht.' },
              { title: 'Auch per Video', desc: 'Bis zum 31. März 2027 darf auf Wunsch jeder zweite Besuch als Videokonferenz stattfinden. Der erste Besuch muss zu Hause sein.' },
              { title: 'Wer kommt', desc: 'Ein zugelassener Pflegedienst, eine anerkannte Beratungsstelle oder eine Pflegeberaterin der Kasse. Den Besuch bezahlt die Pflegekasse; Sie bekommen keine Rechnung.' },
              { title: 'Versäumt', desc: 'Die Kasse muss das Pflegegeld angemessen kürzen und im Wiederholungsfall entziehen (§ 37 Abs. 6). Ein Anruf beim Pflegedienst genügt, um den Termin nachzuholen.' },
              { title: 'Änderungen melden', desc: 'Umzug ins Heim, längerer Auslandsaufenthalt, Beginn eines Pflegedienstes oder eine Verschlechterung: Melden Sie es der Kasse, auch weil eine Verschlechterung meist einen höheren Pflegegrad bringt.' },
            ]}
          >
            <MehrDazu
              label="Weiter:"
              links={[
                { href: '/pflegegrad-erhoehen', text: 'Pflegegrad erhöhen: wann sich der Antrag lohnt' },
                { href: '/pflegegrad-aenderung-melden', text: 'Änderung der Pflegesituation melden' },
              ]}
            />
          </DunklerAbschnitt>

          <Abschnitt id="angehoerige" titel="Pflegegeld für Angehörige">
            <Text>
              Das Pflegegeld gehört der pflegebedürftigen Person. Gibt sie es an Tochter, Sohn, Partner oder Nachbarin weiter, gelten drei
              Regeln, die Angehörige entlasten:
            </Text>
            <Punkte
              punkte={[
                { title: 'Steuerfrei', desc: 'Bis zur Höhe des Pflegegeldes bleibt das Geld bei Angehörigen und bei Menschen, die aus sittlicher Pflicht pflegen, steuerfrei (§ 3 Nr. 36 EStG). Es muss nicht in der Steuererklärung stehen.' },
                { title: 'Kein Einkommen beim Unterhalt', desc: 'Weitergegebenes Pflegegeld zählt bei Unterhaltsansprüchen und -pflichten der Pflegeperson nicht mit (§ 13 Abs. 6 SGB XI).' },
                { title: 'Rente für die Pflegeperson', desc: 'Wer mindestens zehn Stunden in der Woche an mindestens zwei Tagen pflegt und höchstens 30 Stunden arbeitet, bekommt von der Pflegekasse Rentenbeiträge gezahlt (§ 44). Der Antrag läuft über die Pflegekasse, das Pflegegeld wird dadurch nicht kleiner.' },
                { title: 'Bis zu zehn Tage frei', desc: 'Bei einem plötzlichen Pflegefall dürfen Beschäftigte bis zu zehn Arbeitstage im Jahr der Arbeit fernbleiben und bekommen Pflegeunterstützungsgeld als Lohnersatz (§ 44a Abs. 3).' },
              ]}
            />
            <Kasten augenbraue="Ehrlich gesagt" titel="Pflegegeld ist kein Lohn">
              <Text>
                {euro(PFLEGEGELD[3])} bei Pflegegrad 3 ersetzen kein Gehalt. Wer Beruf und Pflege nicht mehr zusammenbekommt, hat drei Wege: Pflegedienst dazunehmen (das Pflegegeld sinkt anteilig), Tagespflege (ohne Kürzung) oder eine
                Betreuungskraft im Haus, bei der das Pflegegeld voll erhalten bleibt und die Familie wieder Familie sein kann.
              </Text>
            </Kasten>
          </Abschnitt>

          <Abschnitt id="beantragen" titel="Pflegegeld beantragen">
            <Text>
              Einen eigenen Antrag auf Pflegegeld gibt es nicht. Sie beantragen Leistungen der Pflegeversicherung, die Kasse stellt den Pflegegrad
              fest, und danach wählen Sie Pflegegeld, Sachleistungen oder die Kombination.
            </Text>
            <Schritte
              schritte={[
                { title: 'Antrag bei der Pflegekasse', desc: 'Formlos, schriftlich oder telefonisch, bei der Pflegekasse Ihrer Krankenkasse. Ab diesem Tag läuft der Anspruch. Auch ein Bevollmächtigter darf ihn stellen.' },
                { title: 'Begutachtung zu Hause', desc: 'Der Medizinische Dienst kommt und bewertet sechs Lebensbereiche mit 64 Fragen. Ein Pflegetagebuch der letzten zwei Wochen und ein Angehöriger beim Termin helfen; beschreiben Sie auch die schlechten Tage.' },
                { title: 'Bescheid innerhalb von 25 Arbeitstagen', desc: 'Mit dem Bescheid kommt das Gutachten. Fällt der Pflegegrad zu niedrig aus, haben Sie einen Monat für den Widerspruch.' },
                { title: 'Leistung wählen', desc: 'Pflegegeld, Sachleistungen oder beides anteilig. Die Kasse zahlt rückwirkend ab dem Antragstag und überweist danach monatlich.' },
              ]}
            />
            <MehrDazu
              label="Schritt für Schritt:"
              links={[
                { href: '/pflegegrad-beantragen', text: 'Pflegegrad beantragen' },
                { href: '/pflegegrad-begutachtung-vorbereiten', text: 'Begutachtung vorbereiten' },
                { href: '/widerspruch-pflegekasse-einlegen', text: 'Widerspruch einlegen' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="erhoehung" titel="Pflegegeld 2027 und 2028: was im Gesetz steht">
            <Text>
              Die Beträge steigen nicht jedes Jahr. § 30 SGB XI legt fest: plus 4,5 % zum 1. Januar 2025, die nächste Anpassung zum 1. Januar 2028
              in Höhe der Kerninflation der drei Vorjahre, höchstens im Umfang der Lohnentwicklung. Für 2026 und 2027 steht dort keine Erhöhung.
              Die neuen Beträge gibt das Bundesgesundheitsministerium im Bundesanzeiger bekannt. Was darüber hinaus politisch diskutiert wird,
              ist Stand September 2026 nicht Gesetz; wir aktualisieren diese Seite, sobald sich etwas ändert.
            </Text>
            <Punkte
              punkte={[
                { title: '1. Januar 2024', desc: 'plus 5 Prozent auf alle Pflegegeld-Beträge (Pflegeunterstützungs- und -entlastungsgesetz).' },
                { title: '1. Januar 2025', desc: <>plus 4,5 Prozent, seitdem gelten {euro(PFLEGEGELD[2])} bis {euro(PFLEGEGELD[5])} (§ 30 Abs. 1 SGB XI).</> },
                { title: '2026 und 2027', desc: 'keine Erhöhung im Gesetz; die Beträge bleiben, wie sie sind.' },
                { title: '1. Januar 2028', desc: 'nächste Anpassung nach der Kerninflation der drei Vorjahre, höchstens im Umfang der Lohnentwicklung. Die Höhe steht erst kurz vorher fest.' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="faq" titel="Häufige Fragen zum Pflegegeld">
            <Fragen fragen={FRAGEN} />
          </Abschnitt>

          <Weiterlesen aktuell="pflegegeld" variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
