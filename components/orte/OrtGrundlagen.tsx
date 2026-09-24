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
import { AblaufListe } from '@/components/vertrauen/Ablauf'
import { CtaStoerer } from '@/components/vertrauen/Stoerer'
import { VertrauensKarten } from '@/components/vertrauen/Vertrauen'
import { Abschnitt, Gegenueber, Kasten, MehrDazu, Punkte, Text } from '@/components/vorlage/Ratgeber'

const QUELLE =
  'text-pm-taupe-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors'
const LINK = 'text-pm-taupe font-semibold hover:underline'

// Kurz mit Absicht (23.09.2026): Der feste Text steht auf 187 Seiten; jeder Satz hier zaehlt in
// der Textgleichheit 187-fach. Gemessen mit der langen Fassung: Worms↔Bochum 77 % statt 67.
// Drei Saetze sagen, was es ist und was nicht — die Tiefe liegt auf den verlinkten Themenseiten.
export function OrtWasBedeutet({ ort }: { ort: string }) {
  return (
    <Abschnitt id="was-bedeutet" titel={`Was 24-Stunden-Pflege in ${ort} bedeutet`}>
      <Text>
        Eine Betreuungskraft zieht in den Haushalt ein und hilft über den Tag verteilt bei dem, was anfällt — beim
        Aufstehen und Waschen, beim Kochen, beim Einkauf, beim Gang zum Arzt; bei Bedarf ist sie auch nachts da —
        regelmäßige nächtliche Einsätze müssen ausgeglichen werden und gehören in die Angaben im Rechner.
        Medizinische Aufgaben wie Spritzen oder Verbände übernimmt weiterhin der ambulante Pflegedienst. Unsere
        Betreuungskräfte sind bei uns angestellt — Ihr Vertrag läuft mit Primundus, Sie werden nicht Arbeitgeber.
        Woher sie kommen, steht auf der{' '}
        <a href="/pflegekraft-aus-polen" className={LINK}>Seite zu unseren Betreuungskräften</a>.
      </Text>
      <MehrDazu
        label="Ausführlich auf den Themenseiten:"
        links={[
          { href: '/24-stunden-pflege', text: 'Was 24-Stunden-Pflege ist und für wen sie passt' },
          { href: '/leistungen', text: 'Was eine Betreuungskraft übernimmt' },
          { href: '/pflegekraft-aus-polen', text: 'Polnische Pflegekräfte: Kosten, Recht und Ablauf' },
          // Stand 22.09.2026 dazugenommen: Die alten Ortsseiten hatten diesen Verweis in ihrer
          // eigenen Linkliste. Ohne ihn wuerde der Umbau auf diesen Baustein 192 interne Links
          // kappen — und interne Linklisten werden nie gekuerzt (Regel vom 20.09.).
          { href: '/pflegedienst-oder-24h-kraft', text: 'Betreuungskraft oder ambulanter Pflegedienst?' },
        ]}
      />
    </Abschnitt>
  )
}

// „Warum Primundus" — stand bis zum 22.09.2026 nur auf der Muenchener Seite (22.09.2026).
//
// Die alten Ortsseiten hatten an dieser Stelle einen Abschnitt „So arbeiten wir" mit vier
// Punkten: keine Vertragsbindung, tagesgenaue Abrechnung, Kosten erst bei Start, persoenlicher
// Ansprechpartner. Alle vier sind hier enthalten — zusammengefasst und um das ergaenzt, was
// dort fehlte: die eigene Anstellung (der Unterschied, der im Alltag zaehlt), der Testsieger
// mit Quelle statt als blosse Behauptung, und Marta mit Namen statt „Ansprechpartner".
//
// Es geht also beim Umbau kein Argument verloren, es kommen welche dazu. Der Ortsname steht
// nur in der Ueberschrift — der Rest gilt ueberall gleich, und das ist ehrlich so: Diese
// Zusagen haengen nicht am Wohnort.
export function OrtWarumPrimundus({ ort }: { ort: string }) {
  // Die sechs Zusagen, die uns ausmachen (Martin 22./23.09.): Pflegekräfte sofort sehen,
  // Angebot sofort sehen, täglich kündbar, keine Vermittlungsgebühr, Bestpreisgarantie,
  // 6× Testsieger — in genau dieser Zahl, dazu Marta mit Namen. Bis zum 23.09. stand hier
  // eine andere Liste („keine Vertragsbindung, tagesgenaue Abrechnung, Kosten erst bei Start,
  // persönlicher Ansprechpartner") — Martin: „Unsere Vorteile da unten stimmen nicht."
  return (
    <Abschnitt id="warum-primundus" titel={`Warum Familien in ${ort} Primundus wählen`}>
      <Punkte
        punkte={[
          { title: 'Pflegekräfte sofort sehen', desc: 'Mit Foto, Erfahrung und Deutschniveau — vor Ihrer Entscheidung.' },
          { title: 'Angebot sofort sehen', desc: 'Ihren Preis zeigt der Rechner in 2 Minuten.' },
          { title: 'Täglich kündbar, taggenau abgerechnet', desc: 'Kosten erst ab Anreise, kein Vertrag vor Ihrer Auswahl.' },
          { title: 'Keine Vermittlungsgebühr', desc: 'Angestellt bei uns — Sie werden nicht Arbeitgeber.' },
          { title: '6× Testsieger bei DIE WELT', desc: 'Sechs Jahre in Folge, Kundenbefragung DIE WELT und ServiceValue — Preis und Qualität.' },
          { title: 'Eine feste Ansprechpartnerin', desc: 'Marta Kapcio und ihr Team, täglich von 8 bis 20 Uhr.' },
        ]}
      />
      {/* Die zwei Kästen wie im Rechner und auf der Startseite (Martin 24.09.: „Mir fehlen die beiden Boxen:
          Testsieger und Bestpreisgarantie wie auf dem Kostenrechner"). Der eigene Bestpreis-Kasten von hier ist
          darin aufgegangen — derselbe Wortlaut, dazu die Auszeichnung mit Siegel. */}
      <VertrauensKarten eingebettet />
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
        Beides lässt sich verbinden: Kommt zusätzlich ein Pflegedienst, teilt die Pflegekasse Pflegegeld und
        Sachleistung anteilig auf — die Kombinationsleistung nach{' '}
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

// Der Ablauf, wie ihn eine Tochter braucht (23.09.2026): je Schritt WER tut WAS und WANN. Fakten
// nur aus dem Bestand — Preis in 2 Minuten (Rechner), Bewerbungen am selben Werktag (seit 14.09.
// auf Rechner und primundus.de), Auswahl vor Vertrag, Anreise in 3 Tagen möglich, Wechsel alle
// 6 bis 8 Wochen, Ersatz in der Regel innerhalb von drei Tagen (Mustervertrag), Marta täglich
// 8 bis 20 Uhr. Der Ortsname steht in der Anreise-Zusage (Martins Regel vom 22.09.).
export function OrtAblauf({ ort, src }: { ort: string; src: string }) {
  // Die drei Schritte des Rechners (components/vertrauen/Ablauf.tsx) — dieselbe Quelle wie die Startseite.
  // Bis zum 24.09. standen hier fünf eigene Schritte aus der Zeit vor „Kontakt zuerst" („Danach sehen Sie
  // Ihren Preis" vor den Kontaktdaten); Martin 24.09.: „Ablauf ist der alte." Der Ort steht im Störer darunter.
  return (
    <Abschnitt id="ablauf" titel="So läuft es ab: von der Anfrage bis zur Anreise">
      <AblaufListe />
      <MehrDazu
        label="Jeder Schritt im Einzelnen:"
        links={[
          { href: '/24-stunden-pflege', text: 'Ablauf, Verträge und was Sie vorbereiten sollten' },
          { href: '/ablauf', text: 'Von der Anfrage bis zur Anreise' },
        ]}
      />
      <CtaStoerer src={src} ort={ort} />
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
          erst danach. Fällt eine Kraft aus, ist Ersatz in der Regel innerhalb von drei Tagen da; wünschen Sie einen
          Wechsel, organisieren wir ihn mit einer Woche Vorlauf.
        </Text>
      </Kasten>
    </Abschnitt>
  )
}
