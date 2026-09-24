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
import { ProduktBuehne } from '@/components/vertrauen/ProduktBuehne'
import { GARANTIE, VertrauensKarten, rechnerLink } from '@/components/vertrauen/Vertrauen'
import { VoraussetzungenListe } from '@/components/vertrauen/Voraussetzungen'
import { Abschnitt, Gegenueber, Kasten, MehrDazu, Punkte, Text } from '@/components/vorlage/Ratgeber'

const QUELLE =
  'text-pm-taupe-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors'
const LINK = 'text-pm-taupe font-semibold hover:underline'

// Kurz mit Absicht (23.09.2026): Der feste Text steht auf 187 Seiten; jeder Satz hier zaehlt in
// der Textgleichheit 187-fach. Gemessen mit der langen Fassung: Worms↔Bochum 77 % statt 67.
// Drei Saetze sagen, was es ist und was nicht — die Tiefe liegt auf den verlinkten Themenseiten.
/** Der Absatz unter „Was 24-Stunden-Pflege in <Ort> bedeutet" — seit 24.09. im Kopf der Ortsseite, direkt unter
 * Knopf und Sternen (Martin: „Zuhause bleiben in Worms klingt blöd … wäre nicht ‚was 24-Stunden-Pflege in Worms
 * bedeutet' sinnvoller?"). Die Ortsprosa, die vorher dort stand, steht jetzt im Abschnitt „Was in <Ort> anders ist". */
export function OrtWasBedeutetText() {
  return (
    <>
      Eine Betreuungskraft zieht in den Haushalt ein und hilft über den Tag verteilt bei dem, was anfällt — beim
      Aufstehen und Waschen, beim Kochen, beim Einkauf, beim Gang zum Arzt; bei Bedarf ist sie auch nachts da —
      regelmäßige nächtliche Einsätze müssen ausgeglichen werden und gehören in die Angaben im Rechner.
      Medizinische Aufgaben wie Spritzen oder Verbände übernimmt weiterhin der ambulante Pflegedienst. Unsere
      Betreuungskräfte sind bei uns angestellt — Ihr Vertrag läuft mit Primundus, Sie werden nicht Arbeitgeber.
      Woher sie kommen, steht auf der{' '}
      <a href="/pflegekraft-aus-polen" className={LINK}>Seite zu unseren Betreuungskräften</a>.
    </>
  )
}

/** Die vier Verweise, die bis zum 24.09. unter der Definition standen — Linklisten werden nie gekürzt (Regel 20.09.);
 * jetzt am Ende von „Was eine Betreuungskraft übernimmt". */
const GRUNDLAGEN_LINKS = [
  { href: '/24-stunden-pflege', text: 'Was 24-Stunden-Pflege ist und für wen sie passt' },
  { href: '/leistungen', text: 'Was eine Betreuungskraft übernimmt' },
  { href: '/pflegekraft-aus-polen', text: 'Polnische Pflegekräfte: Kosten, Recht und Ablauf' },
  // Stand 22.09.2026 dazugenommen: Die alten Ortsseiten hatten diesen Verweis in ihrer
  // eigenen Linkliste. Ohne ihn wuerde der Umbau auf diesen Baustein 192 interne Links
  // kappen — und interne Linklisten werden nie gekuerzt (Regel vom 20.09.).
  { href: '/pflegedienst-oder-24h-kraft', text: 'Betreuungskraft oder ambulanter Pflegedienst?' },
]

/** Die Definition als eigener Abschnitt — nur noch auf den Musterseiten München und Hamburg (eigener Aufbau);
 * die Vorlage OrtSeite zeigt den Text im Kopf. */
export function OrtWasBedeutet({ ort }: { ort: string }) {
  return (
    <Abschnitt id="was-bedeutet" titel={`Was 24-Stunden-Pflege in ${ort} bedeutet`}>
      <Text>
        <OrtWasBedeutetText />
      </Text>
      <MehrDazu label="Ausführlich auf den Themenseiten:" links={GRUNDLAGEN_LINKS} />
    </Abschnitt>
  )
}

/** „Ist 24-Stunden-Pflege für Sie geeignet?" — die vier Voraussetzungen wie auf der Startseite und im Rechner
 * (Martin 24.09.: „Welche Voraussetzungen gibt es?" — fehlte auf der Ortsseite). */
export function OrtVoraussetzungen() {
  return (
    <Abschnitt id="voraussetzungen" titel="Ist 24-Stunden-Pflege für Sie geeignet?">
      <Text>
        Die meisten Familien erfüllen die Voraussetzungen problemlos. Prüfen Sie selbst, ob die 24-Stunden-Betreuung
        für Ihre Situation passt:
      </Text>
      <VoraussetzungenListe />
    </Abschnitt>
  )
}

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

/** ohneLinks: München/Hamburg zeigen die vier Verweise schon unter ihrer Definition (OrtWasBedeutet) */
export function OrtAufgaben({ ohneLinks = false }: { ohneLinks?: boolean } = {}) {
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
      {!ohneLinks && <MehrDazu label="Ausführlich auf den Themenseiten:" links={GRUNDLAGEN_LINKS} />}
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
      <AblaufListe mitBildern />
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

export function OrtPassendeKraft({ src }: { src: string }) {
  // Martin 24.09.: „Wie Sie die passende Pflegekraft finden — ganz nett, dass da ein Text steht, aber warum ist da
  // nicht ein Screenshot vom Portal wie auf der Partnerseite: reingehen, Pflegekräfte sehen, was es kostet, da ist
  // der Button, so sieht das aus." Deshalb die Bühne aus dem Schlussaufruf (Beispielprofile, wie das Kundenportal
  // sie zeigt) hier im Abschnitt, daneben die Zusage und der Knopf mit eigener Position (src …-kraefte).
  return (
    <Abschnitt id="passende-kraft" titel="Wie Sie die passende Betreuungskraft finden">
      <Text>
        Deutsch, Erfahrung mit Demenz oder Rollstuhl, Nachtbereitschaft — und ob der Mensch zu dem Menschen passt, um
        den es geht. Auf dem Papier lässt sich das schlecht beurteilen. Deshalb sehen Sie bei uns die Betreuungskräfte,
        bevor Sie sich entscheiden — so, wie das Kundenportal sie zeigt:
      </Text>
      {/* Am Handy zuerst das Bild, dann Zusage und Knopf; ab md Text links, Gerät rechts wie auf der Partnerseite */}
      <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_300px] md:items-center md:gap-8">
        <div className="md:order-last">
          <ProduktBuehne garantie={GARANTIE} kompakt />
        </div>
        <div className="min-w-0">
          <Kasten ton="gruen" titel="Bei Primundus sehen Sie die Betreuungskräfte vor Ihrer Entscheidung">
            <Text>
              Mit Foto, Erfahrung und Deutschniveau. Sie wählen aus, wer zu Ihrer Situation passt — einen Vertrag gibt es
              erst danach. Fällt eine Kraft aus, ist Ersatz in der Regel innerhalb von drei Tagen da; wünschen Sie einen
              Wechsel, organisieren wir ihn mit einer Woche Vorlauf.
            </Text>
            <a
              href={rechnerLink(src)}
              referrerPolicy="no-referrer-when-downgrade"
              className="flex min-h-[56px] items-center justify-center rounded-full bg-pm-coral px-5 text-center text-[16.5px] font-bold text-white shadow-[0_10px_24px_-10px_rgba(231,111,99,0.75)] transition-colors hover:bg-pm-coral-deep sm:self-start sm:px-7"
            >
              Preis &amp; Pflegekräfte ansehen&nbsp;→
            </a>
          </Kasten>
        </div>
      </div>
    </Abschnitt>
  )
}
