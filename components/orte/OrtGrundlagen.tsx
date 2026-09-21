// Die vier Erklärabschnitte der Ortsseite — was 24-Stunden-Pflege ist, wer was macht, wie es
// abläuft, wie man die passende Kraft findet (21.09.2026).
//
// Gemessen am 21.09.: Diese vier standen zusammen mit 753 Wörtern auf der Seite, davon 744 auf
// jeder anderen Ortsseite wörtlich gleich — 38 Prozent der gesamten Dublettenmasse. Martin:
// „Die Ähnlichkeit ist doch schädlich für die SEO-Positionierung." Stimmt, und Google fasst
// solche Seiten zusammen, statt sie einzeln zu ranken.
//
// Gestrichen wurde nur, was doppelt gesagt war — nichts, was der Leser braucht:
//
//  1. „Was bedeutet" begann mit einer Aufzählung dessen, was die Betreuungskraft tut
//     („beim Aufstehen und Waschen, beim Essen, beim Einkauf…"). Dieselbe Aufzählung steht
//     zwei Abschnitte weiter als Gegenüberstellung, dort besser lesbar. Eine Dublette auf
//     derselben Seite, gegen die kein Wettbewerber, sondern wir selbst angetreten sind.
//  2. „So läuft die Betreuung ab" erklärte jeden Schritt in drei bis vier Zeilen. Die
//     Schritte bleiben alle fünf, die Erklärungen sind auf das gekürzt, was man wirklich
//     wissen muss; ausführlich steht es auf /24-stunden-pflege, wohin der Abschnitt verlinkt.
//  3. „Passende Betreuungskraft" führte vier Fragen aus, die der Kasten darunter ohnehin
//     beantwortet.
//
// Nicht angetastet: die MehrDazu-Listen. Interne Linklisten werden nie gekürzt
// (Martins Regel vom 20.09.).
import { Abschnitt, Gegenueber, Kasten, MehrDazu, Schritte, Text } from '@/components/vorlage/Ratgeber'

const QUELLE =
  'text-pm-taupe-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors'
const LINK = 'text-pm-taupe font-semibold hover:underline'

export function OrtWasBedeutet({ ort }: { ort: string }) {
  return (
    <Abschnitt id="was-bedeutet" titel={`Was 24-Stunden-Pflege in ${ort} bedeutet`}>
      <Text>
        Eine Betreuungskraft zieht in den Haushalt ein und hilft über den Tag verteilt bei dem, was anfällt. Sie ist
        bei Bedarf auch nachts da. Die Behandlungspflege — Spritzen, Verbände, Katheter — bleibt beim ambulanten
        Pflegedienst, den der Arzt verordnet und die Krankenkasse bezahlt.
      </Text>
      <Text>
        Häufig wird in {ort} nach einer „polnischen Pflegekraft" gesucht. Gemeint ist genau das: eine Betreuungskraft,
        die mit im Haushalt lebt. Unsere Betreuungskräfte kommen aus{' '}
        <a href="/pflegekraft-aus-polen" className={LINK}>Polen</a> und sind bei uns angestellt — die
        Arbeitgeberpflichten liegen bei uns, Ihr Vertrag läuft mit Primundus. Jede Kraft wird nach ihrem Deutsch
        eingestuft; das Niveau steht im Profil, zusammen mit Erfahrung und Foto.
      </Text>
      <Text>
        „24-Stunden-Pflege" heißt: Jemand lebt im Haushalt und ist da. Gearbeitet wird in geregelten Zeiten mit Pausen
        und Ruhezeiten; in ihrer freien Zeit kann die Betreuungskraft das Haus verlassen, und ihre Nachtruhe braucht
        sie wie jeder andere auch. Wenn nachts regelmäßig mehrfach Hilfe nötig ist, gehört das in die Angaben im
        Kostenrechner — dann passen Preis und Auswahl dazu.
      </Text>
      <MehrDazu
        label="Ausführlich auf den Themenseiten:"
        links={[
          { href: '/24-stunden-pflege', text: 'Was 24-Stunden-Pflege ist und für wen sie passt' },
          { href: '/leistungen', text: 'Was eine Betreuungskraft übernimmt' },
          { href: '/pflegekraft-aus-polen', text: 'Polnische Pflegekräfte: Kosten, Recht und Ablauf' },
        ]}
      />
    </Abschnitt>
  )
}

export function OrtAufgaben() {
  return (
    <Abschnitt id="aufgaben" titel="Was eine Betreuungskraft übernimmt — und was der Pflegedienst">
      <Gegenueber
        seiten={[
          {
            titel: 'Die Betreuungskraft, die im Haushalt lebt',
            ton: 'gruen',
            punkte: [
              'Körperpflege, Aufstehen, Anziehen, Essen',
              'Kochen, Einkäufe, Wäsche, Ordnung in den Räumen',
              'Gesellschaft, Spaziergänge, Begleitung zum Arzt',
              'Über Wochen dieselbe Person — bei Bedarf auch nachts da',
            ],
          },
          {
            titel: 'Der ambulante Pflegedienst',
            ton: 'taupe',
            punkte: [
              'Spritzen, Verbände, Katheter — vom Arzt verordnet',
              'Kommt zu festen Zeiten, ein- bis dreimal am Tag',
              'Behandlungspflege zahlt die Krankenkasse',
              'Arbeitet mit der Betreuungskraft Hand in Hand',
            ],
          },
        ]}
      />
      <Text>
        Beides lässt sich verbinden: Kommt zusätzlich ein Pflegedienst, rechnet die Pflegekasse Pflegegeld und
        Sachleistung anteilig ab — Kombinationsleistung nach{' '}
        <a
          href="https://www.gesetze-im-internet.de/sgb_11/__38.html"
          target="_blank"
          rel="noopener noreferrer"
          className={QUELLE}
        >
          § 38 SGB XI
        </a>
        . Wie ein Tag mit Betreuungskraft aussieht, steht auf der Seite{' '}
        <a href="/leistungen" className={LINK}>Leistungen</a>.
      </Text>
    </Abschnitt>
  )
}

export function OrtAblauf() {
  return (
    <Abschnitt id="ablauf" titel="So läuft die Betreuung ab">
      <Schritte
        schritte={[
          {
            title: 'Bedarf klären',
            desc: 'Pflegegrad, Hilfe in der Nacht, gewünschtes Deutsch, Erfahrung mit Demenz. Danach sehen Sie Ihren Preis.',
            tag: 'Dauert unter 2 Minuten',
            tagTon: 'gruen',
          },
          {
            title: 'Betreuungskraft auswählen',
            desc: 'Sie sehen, wer in Frage kommt — mit Foto, Erfahrung und Deutschniveau — und entscheiden in Ruhe.',
            tag: 'Kein Vertrag vor Ihrer Auswahl',
            tagTon: 'gruen',
          },
          {
            title: 'Anreise',
            desc: 'Wenn es eilt, etwa nach einer Krankenhausentlassung.',
            tag: 'Anreise in 3 Tagen möglich',
            tagTon: 'gruen',
          },
          {
            title: 'Betreuung zu Hause',
            desc: 'Die Betreuungskraft zieht ein. Ein bis zwei Wochen brauchen beide Seiten für einen gemeinsamen Rhythmus.',
          },
          {
            title: 'Wechsel alle 6 bis 8 Wochen',
            desc: 'Jeden Wechsel organisieren wir, die nächste Kraft wählen Sie selbst aus. Fällt jemand aus, ist Ersatz in der Regel innerhalb von drei Tagen da.',
          },
        ]}
      />
      <MehrDazu
        label="Jeder Schritt im Einzelnen:"
        links={[
          { href: '/24-stunden-pflege', text: 'Ablauf, Verträge und was Sie vorbereiten sollten' },
          { href: '/ablauf', text: 'Von der Anfrage bis zur Anreise' },
        ]}
      />
    </Abschnitt>
  )
}

export function OrtPassendeKraft() {
  return (
    <Abschnitt id="passende-kraft" titel="Wie Sie die passende Betreuungskraft finden">
      <Text>
        Deutsch, Erfahrung mit Demenz oder Rollstuhl, Nachtbereitschaft — und ob der Mensch zu dem Menschen passt, um
        den es geht. Auf dem Papier lässt sich das schlecht beurteilen.
      </Text>
      <Kasten ton="gruen" titel="Bei Primundus sehen Sie die Betreuungskräfte vor Ihrer Entscheidung">
        <Text>
          Mit Foto, Erfahrung und Deutschniveau. Sie wählen aus, wer zu Ihrer Situation passt — einen Vertrag gibt es
          erst danach. Brauchen Sie eine andere Person, wechseln wir: Ersatz ist in der Regel innerhalb von drei Tagen
          da, ohne Gebühr — nur An- und Abreise fallen an.
        </Text>
      </Kasten>
    </Abschnitt>
  )
}
