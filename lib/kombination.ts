// Kombinationsleistung nach § 38 SGB XI: Wer die Pflegesachleistungen nur zum Teil nutzt, bekommt das Pflegegeld um genau diesen
// Prozentsatz gekürzt. Reine Rechenfunktion, damit Seite (Server) und Rechner (Client) dieselbe Formel nutzen.
import { PFLEGEGELD, PFLEGESACHLEISTUNGEN } from '@/lib/fakten'

export type Grad = 2 | 3 | 4 | 5

/** Anteiliges Pflegegeld: Pflegegeld × (1 − genutzte Sachleistung / Sachleistungsbetrag), auf Cent gerundet */
export function anteiligesPflegegeld(grad: Grad, rechnung: number): { anteil: number; pflegegeld: number; kasseSach: number } {
  const sach = PFLEGESACHLEISTUNGEN[grad]
  const kasseSach = Math.min(Math.max(rechnung, 0), sach)
  const anteil = kasseSach / sach
  const pflegegeld = Math.round(PFLEGEGELD[grad] * (1 - anteil) * 100) / 100
  return { anteil, pflegegeld, kasseSach }
}
