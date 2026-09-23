// Der Kosten-Abschnitt der Ortsseiten (23.09.2026) — ohne unseren Preis, mit dem, was die
// Kasse zahlt, und dem Heim-Eigenanteil des Bundeslands als örtlicher Vergleichszahl.
//
// Warum ein Baustein statt Tabellen in 187 Seiten: Bis heute standen die Beträge 187-mal im
// Quelltext (Codemod 36 hat sie an einem Tag dreimal angefasst). Hier stehen sie einmal und
// kommen aus lib/fakten.ts — ändert sich das Pflegegeld, ändert sich eine Zeile.
//
// Martin, 23.09.: „Wir haben doch gesagt, unsere Preise werden nicht genannt" und „Was ist mit
// den Kosten fürs Pflegeheim? Das ist doch regional, das könnte man aufnehmen." Beides hier:
// kein 2.150, kein 923 — aber der Heim-Eigenanteil je Land (vdek, 07/2026) als eigener Satz.
//
// Die sechs Werkzeug-Links und die drei „Weiter"-Links aus dem alten OrtWerkzeuge bleiben
// vollständig (interne Linklisten werden nie gekürzt, Regel vom 20.09.) — nur ohne die sechs
// Beschreibungssätze, die auf jeder Seite gleich waren.
import { Abschnitt, Kasten, MehrDazu, Tabelle, Text } from '@/components/vorlage/Ratgeber'
import { ENTLASTUNGSBUDGET, PFLEGEGELD, STEUER_MAX_JAHR } from '@/lib/fakten'
import { HEIM_EIGENANTEIL, HEIM_EIGENANTEIL_BUND, euroFormat } from '@/lib/heimkosten'

// euroFormat liefert nur die Zahl (3.220); hier mit geschuetztem Leerzeichen und Euro-Zeichen, damit
// Betrag und Zeichen nie auf zwei Zeilen fallen (Martin sah 599 / EUR/Monat umgebrochen).
const eur = (betrag: number) => `${euroFormat(betrag)}\u00a0€`

const LINK = 'text-pm-taupe font-semibold hover:underline'

// Entlastungsbudget anteilig je Monat und der Deckel der Steuerermäßigung je Monat — dieselbe
// Rechnung wie im Kostenrechner (3.539 / 12 = ca. 295; 4.000 / 12 = 333).
const BUDGET_MONAT = Math.round(ENTLASTUNGSBUDGET / 12)
const STEUER_MONAT = Math.floor(STEUER_MAX_JAHR / 12)
const SUMME_PG3 = PFLEGEGELD[3] + BUDGET_MONAT + STEUER_MONAT

export function OrtKosten({ slug, ort, land }: { slug: string; ort: string; land: string }) {
  const heim = HEIM_EIGENANTEIL[land] ?? HEIM_EIGENANTEIL_BUND
  const heimWo = HEIM_EIGENANTEIL[land] ? `in ${land}` : 'in Deutschland'
  return (
    <Abschnitt id="kosten-und-kassenzuschuesse-in" titel={`Was es in ${ort} kostet und was die Kasse zahlt`}>
      <Text>
        Der Monatspreis hängt vom Pflegebedarf ab und davon, wie gut die Betreuungskraft Deutsch spricht — Ihren Preis
        zeigt der{' '}
        <a href={`https://kostenrechner.primundus.de/?start=1&src=ort-${slug}-kosten`} referrerPolicy="no-referrer-when-downgrade" className={LINK}>Kostenrechner in 2 Minuten</a>.
        Was Kasse und Finanzamt beisteuern, zeigt das Beispiel.
      </Text>
      <Tabelle
        titel="Was Kasse und Finanzamt bei Pflegegrad 3 beisteuern"
        zeilen={[
          ['Pflegegeld PG 3', `${eur(PFLEGEGELD[3])}/Monat`],
          ['Entlastungsbudget (anteilig)', `ca. ${eur(BUDGET_MONAT)}/Monat`],
          [`Steuerermäßigung (20 %, bis ${eur(STEUER_MAX_JAHR)}/Jahr)`, `bis ${eur(STEUER_MONAT)}/Monat`],
          [<strong key="z">Zusammen</strong>, <strong key="w">bis zu ca. {eur(SUMME_PG3)}/Monat</strong>],
        ]}
        betont={1}
        fuss="Eine Person, Pflegegrad 3 · Pflegegeld nach § 37 SGB XI, Entlastungsbudget nach § 39 und § 45b SGB XI, Steuerermäßigung nach § 35a EStG — was bei Ihnen bleibt, zeigt der Kostenrechner in 2 Minuten"
      />
      <Tabelle
        titel="Was die Pflegekasse zahlt"
        kopf={['Pflegegrad', 'Pflegegeld je Monat', 'Entlastungsbudget je Jahr']}
        zeilen={([2, 3, 4, 5] as const).map((pg) => [`PG ${pg}`, eur(PFLEGEGELD[pg]), eur(ENTLASTUNGSBUDGET)])}
        betont={1}
        fuss="Stand 2026 · bundesweit einheitlich"
      />
      {/* Die örtliche Vergleichszahl: der Eigenanteil im Heim, je Bundesland (vdek, 1. Heimjahr, 07/2026). */}
      <Kasten titel={`Zum Vergleich: ein Heimplatz ${heimWo}`}>
        <Text>
          Ein Heimplatz {heimWo} kostet im ersten Jahr im Schnitt rund <strong className="text-pm-ink">{eur(heim)} Eigenanteil im Monat</strong>{' '}
          (vdek, 07/2026) — nach allen Kassenleistungen, und die Wohnung bleibt dabei auf der Strecke. Zu Hause zahlen
          Pflegegeld und Entlastungsbudget bei Pflegegrad 3 zusammen bis zu ca. {eur(PFLEGEGELD[3] + BUDGET_MONAT)} im Monat,
          dazu kommen bis zu {eur(STEUER_MONAT)} Steuerermäßigung.
        </Text>
      </Kasten>
      {land === 'Bayern' && (
        <Kasten ton="gruen" titel="Bayern-Vorteil: Landespflegegeld 500 €/Jahr">
          <Text>
            Bayern zahlt zusätzlich 500 €/Jahr (ca. 42 €/Monat) ab Pflegegrad 2, wenn der Hauptwohnsitz in Bayern liegt
            (bis 2025: 1.000 €). Antrag beim Landesamt für Pflege (LfP Bayern) — kumulierbar mit allen Pflegekasse-Zuschüssen.
          </Text>
        </Kasten>
      )}
      <MehrDazu
        label="Rechnen und prüfen:"
        links={[
          { href: `https://kostenrechner.primundus.de/?start=1&src=ort-${slug}-kosten`, text: 'Preis und Betreuungskräfte ansehen' },
          { href: '/pflegegrad-rechner', text: 'Pflegegrad-Rechner' },
          { href: '/zuschuss-rechner', text: 'Zuschuss-Rechner' },
          { href: '/pflegeheim-kosten-deutschland', text: 'Pflegeheim-Kosten-Rechner' },
          { href: '/vollmacht-generator', text: 'Vorsorgevollmacht erstellen' },
          { href: '/pflegevertrag-generator', text: 'Pflegevertrag prüfen' },
        ]}
      />
      <MehrDazu
        label="Weiter:"
        links={[
          { href: '/kosten', text: 'Alle Kosten der 24-Stunden-Pflege 2026' },
          { href: '/pflegegeld', text: 'Pflegegeld: Höhe je Pflegegrad' },
          { href: '/finanzierung', text: 'Finanzierung: was die Kasse zahlt' },
        ]}
      />
    </Abschnitt>
  )
}
