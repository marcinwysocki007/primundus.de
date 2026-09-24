// Die Daten einer Standard-Ortsseite (23.09.2026) — alles, was je Ort anders ist.
//
// Bis zum 23.09. lag der komplette Text jeder Ortsseite als Kopie in ihrer page.tsx: 187 Dateien,
// davon rund 80 Prozent wortgleich. Jede Textrunde hiess ein Codemod-Lauf über 187 Dateien.
// Jetzt trägt die Seite nur noch das Örtliche (dieses Objekt) und ruft die Vorlage
// components/vorlage/OrtSeite.tsx auf, in der der feste Text genau einmal steht.
// Vorbild: components/vorlage/PflegegradSeite.tsx mit app/pflegegrad-3/page.tsx.
//
// Streng typisiert mit Absicht: Fehlt `land` oder `vorOrt`, scheitert check-tsc — nicht der Leser.
import type { ReactNode } from 'react'

export interface OrtDaten {
  /** Ordnername ohne „24h-pflege-": worms */
  slug: string
  /** Wie der Ort im Text heisst: Worms, Mülheim an der Ruhr */
  ort: string
  /** Bundesland — Schlüssel für den Heim-Eigenanteil (lib/heimkosten.ts). Nie aus ORTE_LAGE (dort teils leer). */
  land: string
  /** hand = recherchierte Vor-Ort-Prosa (61 Orte), erzeugt = Zensus-Prosa aus vorort_text.py (147) */
  art: 'hand' | 'erzeugt'
  /** Sichtbares Datum; hat Vorrang vor dem Git-Datum (lib/lastmod.ts) — je Stapel neu setzen */
  aktualisiert: string
  /** Lesezeit wie bisher angegeben */
  lesezeit?: string
  /** H1, falls sie vom Standard „24-Stunden-Pflege und Betreuung in <Ort>" abweicht */
  titel?: string
  /** Der örtliche Einstiegsabsatz — bis 24.09. im Kopf unter „Zuhause bleiben in <Ort>", seit 24.09. der erste
   * Absatz von „Was in <Ort> anders ist" (Martin: der Kopf erklärt, was 24-Stunden-Pflege ist; das Örtliche
   * steht beim Örtlichen). Ohne den alten Schlusssatz „Täglich kündbar, rechtssicher, Anreise …" (84 Seiten). */
  einleitung: ReactNode
  /**
   * Der Landkreis, wo die Seite einen nannte (131 Seiten): „Landkreis Alzey-Worms". Er steht in der
   * Überschrift von „Was in <Ort> anders ist" und in einem Satz der Vorlage. Der alte Absatz dazu
   * („Die Anreise dauert überall gleich lang, der Preis ist derselbe") war Schablone auf 122 Seiten
   * und ist bewusst nicht übernommen — OpenAI 23.09.: Leerformel.
   */
  kreis?: string
  /** „Was die Pflege zu Hause in <Ort> ausmacht" — die eigentliche Ortsprosa, wörtlich */
  vorOrt: {
    inhalt: ReactNode
    /** Der §-7a-Absatz, mit dem 185 Seiten enden; abgetrennt, weil Abschnitt „Beratung" dasselbe sagt */
    beratungsabsatz?: ReactNode
  }
  /** „Worms und Landkreis Alzey-Worms: Alzey, Osthofen …" — Text der alten Einzugsgebiet-Zeile */
  einzugsgebiet?: string
  /** Bewertungs-IDs, die vorn stehen sollen; ohne Angabe sucht die Vorlage nach ort */
  stimmen?: string[]
  /** Häufige Fragen — auch das FAQ-Markup wird daraus erzeugt */
  fragen: { q: string; a: string }[]
}
