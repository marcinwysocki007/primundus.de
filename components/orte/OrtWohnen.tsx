// „Wohnen in <Ort>" — die Wohn-Zahlen des Ortes an einer Stelle, mit Deutung (21.09.2026).
//
// Martin am 21.09.: „Die Ähnlichkeit ist doch schädlich für die SEO-Positionierung." Richtig,
// und dieser Abschnitt ist die Antwort darauf, die keine Wörter erfindet. Die Zahlen standen
// schon auf der Seite — verstreut in FAQ-Antworten, die niemand sucht, und in einem Halbsatz
// im Werkzeug-Kasten. Neu ist zweierlei:
//
// 1. Sie stehen im Fließtext, wo sie gelesen werden.
// 2. Der Satz, der die Zahl deutet, hängt vom WERT ab. Bisher stand unter jeder Zahl
//    derselbe Satz („dort bietet sich oft eine ganze Etage an") — 207-mal gleich, egal ob
//    die Wohnungen 73 oder 110 Quadratmeter haben. Jetzt bekommt München einen anderen Satz
//    als Cochem, weil München eine andere Stadt ist. Das ist keine Umformulierung derselben
//    Aussage, sondern eine andere Aussage.
//
// Verglichen wird mit dem Bundesland, nicht mit dem Bund — „kleiner als in Bayern" sagt einer
// Münchnerin mehr als „kleiner als in Deutschland". Bei Stadtstaaten steht der Bund, weil
// Hamburg gegen Hamburg zu vergleichen nichts aussagt (siehe lib/orte-lage.ts).
//
// Bezugsgrößen geprüft am 20./21.09.: flaeche, unter60 und Baujahre je WOHNUNG;
// efh_zfh_anteil, freistehend, reihenhaus und whg_je_gebaeude je GEBÄUDE; eigentum = Anteil
// der Haushalte im Eigentum; qmmiete = Bestandsmiete der vermieteten Wohnungen, nicht die
// Neuvermietung.
import { Abschnitt, Text } from '@/components/vorlage/Ratgeber'
import { ORTE_LAGE } from '@/lib/orte-lage'

const z = (n: number) => n.toLocaleString('de-DE')

const ORDNUNG = ['', '', 'zweite', 'dritte', 'vierte', 'fünfte', 'sechste', 'siebte', 'achte', 'neunte', 'zehnte']
/**
 * „jede dritte Wohnung" statt „33,4 Prozent der Wohnungen" — aber nur, wenn es wirklich
 * stimmt: Der Bruch wird zurückgerechnet und muss auf 1,2 Prozentpunkte genau passen.
 * Sonst bleibt die Prozentzahl stehen. Zweck ist nicht Abwechslung um ihrer selbst willen,
 * sondern die Sprache, in der man über so etwas spricht.
 */
function anteil(p: number, was: string): { text: string; verb: string } {
  const n = Math.round(100 / p)
  if (n >= 2 && n <= 10 && Math.abs(100 / n - p) <= 1.2)
    return { text: `jede ${ORDNUNG[n]} ${was}`, verb: 'ist' }
  return { text: `${z(p)} Prozent der ${was}en`, verb: 'sind' }
}

export function OrtWohnen({ slug, ort }: { slug: string; ort: string }) {
  const lage = ORTE_LAGE[slug]
  if (!lage) return null
  const { wohnen: w, landWohnen: lw, land } = lage
  const bezug = land && lw.flaeche !== undefined ? land : 'Deutschland'

  // ── Platz für ein eigenes Zimmer ────────────────────────────────────────────
  let platz: string | null = null
  if (w.flaeche !== undefined && w.unter60 !== undefined) {
    const kleiner = lw.flaeche !== undefined && w.flaeche < lw.flaeche - 5
    const groesser = lw.flaeche !== undefined && w.flaeche > lw.flaeche + 5
    const vergleich = lw.flaeche !== undefined ? ` gegenüber ${z(lw.flaeche)} in ${bezug}` : ''
    const klein60 = anteil(w.unter60, 'Wohnung')
    if (kleiner) {
      platz =
        `Eine Wohnung in ${ort} misst im Schnitt ${z(w.flaeche)} Quadratmeter${vergleich}, und ` +
        `${klein60.text} ${klein60.verb} kleiner als 60 m². Ein eigenes Zimmer für die Betreuungskraft ist hier ` +
        `die erste Frage, die sich stellt — und sie entscheidet sich an Ihrem Grundriss, nicht am Durchschnitt.`
    } else if (groesser) {
      platz =
        `Eine Wohnung in ${ort} misst im Schnitt ${z(w.flaeche)} Quadratmeter${vergleich}. Der Platz für ` +
        `ein eigenes Zimmer ist in den meisten Haushalten da; häufiger fehlt es an einem zweiten Bad als am Zimmer.`
    } else {
      platz =
        `Eine Wohnung in ${ort} misst im Schnitt ${z(w.flaeche)} Quadratmeter${vergleich}; ` +
        `${klein60.text} ${klein60.verb} kleiner als 60 m². Ob ein eigenes Zimmer frei ist, hängt damit am Einzelfall.`
    }
  }

  // ── Bauform und Treppen: EINE Aussage ─────────────────────────────────────
  // Erst standen Bauform und Treppe getrennt. Für Hamburg kam dabei „40,7 Prozent in
  // geschlossener Reihe" direkt neben „66,8 Prozent der Gebäude haben höchstens zwei
  // Wohnungen" zu stehen — beides stimmt (ein Zweifamilienhaus kann im Blockrand stehen),
  // liest sich aber wie ein Widerspruch. GPT-5 hat das am 21.09. angemerkt, zu Recht.
  // Jetzt entscheidet die Bebauungsdichte, welche Geschichte erzählt wird, und die zweite
  // Zahl kommt als Nebensatz dazu, statt als eigene Behauptung.
  // „reihenhaus" ist im Zensus die Bauweise „gereihtes Haus" = beidseitig angebaut, in
  // Großstädten der Gründerzeit-Block. Deshalb nie „Reihenhaus" schreiben (Fehlfund 20.09.).
  let bau: string | null = null
  const reihe = w.reihenhaus !== undefined && w.reihenhaus >= 30
  if (w.whg_je_gebaeude !== undefined && w.whg_je_gebaeude >= 4) {
    bau =
      `Auf ein Gebäude kommen ${z(w.whg_je_gebaeude)} Wohnungen — ${ort} ist Geschosswohnungsbau` +
      (reihe ? `, ${z(w.reihenhaus!)} Prozent der Gebäude stehen im geschlossenen Block` : '') +
      `. Die tägliche Hürde ist hier oft das Treppenhaus, wenn kein Aufzug da ist, weniger die Treppe in der Wohnung.`
  } else if (w.efh_zfh_anteil !== undefined && w.efh_zfh_anteil >= 65) {
    bau =
      `${z(w.efh_zfh_anteil)} Prozent der Gebäude haben höchstens zwei Wohnungen` +
      (w.freistehend !== undefined && w.freistehend >= 55
        ? `, die meisten davon freistehend mit eigenem Eingang`
        : reihe
          ? `, viele davon an beiden Seiten angebaut`
          : '') +
      `. Schlafzimmer und Bad liegen dann häufig im Obergeschoss — die Treppe im Haus ist oft der Grund, warum es allein nicht mehr geht.`
  } else if (w.whg_je_gebaeude !== undefined) {
    bau =
      `Auf ein Gebäude kommen in ${ort} ${z(w.whg_je_gebaeude)} Wohnungen. Ob die Treppe zum Problem wird, ` +
      `hängt hier stärker vom einzelnen Haus ab als vom Ortsbild.`
  }

  // ── Bausubstanz ─────────────────────────────────────────────────────────────
  let baujahr: string | null = null
  if (w.vor1970 !== undefined) {
    baujahr =
      w.vor1970 >= 50
        ? `${z(w.vor1970)} Prozent der Wohnungen stammen aus der Zeit vor 1970 — ein Bestand, in dem Bäder schmal ` +
          `sind, Badewannenränder hoch und Aufzüge häufig fehlen.`
        : `${z(w.vor1970)} Prozent der Wohnungen stammen aus der Zeit vor 1970 — ein vergleichsweise junger Bestand, ` +
          `in dem Bäder und Zugänge häufiger schon barrierearm sind.`
  }

  // ── Bleiben oder umziehen ───────────────────────────────────────────────────
  let bleiben: string | null = null
  if (w.eigentum !== undefined) {
    if (w.eigentum >= 45) {
      bleiben =
        `${z(w.eigentum)} Prozent der Haushalte in ${ort} wohnen im Eigentum. Ein Umzug heißt hier fast immer, ` +
        `das Haus aufzugeben, in dem jemand den größten Teil seines Lebens verbracht hat.`
    } else if (w.qmmiete !== undefined) {
      bleiben =
        `Nur ${z(w.eigentum)} Prozent der Haushalte wohnen im Eigentum, und schon die Bestandsmiete liegt bei ` +
        `${z(w.qmmiete)} Euro je Quadratmeter (Zensus 2022). Wer umzieht, zahlt die Neuvermietungsmiete — die ` +
        `kleinere Wohnung ist deshalb nicht zwingend die günstigere.`
    } else {
      bleiben = `${z(w.eigentum)} Prozent der Haushalte in ${ort} wohnen im Eigentum.`
    }
  }

  const erste = [platz, bau].filter(Boolean)
  const zweite = [baujahr, bleiben].filter(Boolean)
  if (!erste.length && !zweite.length) return null

  return (
    <Abschnitt id="wohnen" titel={`Wohnen in ${ort}: was das für die Betreuung heißt`}>
      {erste.length ? <Text>{erste.join(' ')}</Text> : null}
      {zweite.length ? <Text>{zweite.join(' ')}</Text> : null}
      <Text>
        Alle Zahlen aus dem Zensus 2022. Sie beschreiben den Ort, nicht Ihre Wohnung.
      </Text>
    </Abschnitt>
  )
}
