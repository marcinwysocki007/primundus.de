// Echte Kundenstimmen auf der Ortsseite — die aus dem Ort zuerst (20./21.09.2026).
//
// Martin am 21.09.: „Kundenstimmen haben wir doch unsere Erfahrungen mit über 120 — das ist immer
// die zentrale Quelle, die benutzt wird. Natürlich kannst du die aus Hamburg sichtbar zeigen als
// erstes." Und danach: „Ich will keine Zuordnung Land und Stimmen — es sollen immer die Zahl aller
// gezeigt werden, einzig die Reihenfolge kann dann die aus dem Ort zeigen."
//
// Und: „Hier ist doch die Quelle: primundus.de/erfahrungen." Deshalb zieht der Baustein aus
// `alleBewertungen()` — genau dem, was /erfahrungen zeigt (direkt erhaltene Rückmeldungen plus
// Google-Rezensionen). Es steht immer dieselbe Anzahl Karten; gefiltert wird nichts, nur sortiert:
// Wer aus diesem Ort schreibt, steht vorn, dahinter die neuesten.
//
// Vorher zeigte die Ortsseite ausschließlich die zwei bis vier Stimmen aus der Stadt; auf 21 von
// 207 Seiten blieb der Abschnitt dadurch ganz leer. Jede Karte nennt den Ort der Familie, deshalb
// sieht man auf einen Blick, welche von hier kommt und welche von anderswo. Nichts wird
// umetikettiert.
import { Abschnitt, Text } from '@/components/vorlage/Ratgeber'
import { Sterne } from '@/components/bewertungen/Sterne'
import { alleBewertungen } from '@/lib/bewertungen'
import type { Bewertung } from '@/lib/bewertungen'

export function OrtStimmen({
  ort,
  stimmen,
  anzahl = 6,
}: {
  ort: string
  /** Stimmen, die vorn stehen sollen. Ohne Angabe sucht der Baustein die aus diesem Ort. */
  stimmen?: Bewertung[]
  /** Wie viele Karten insgesamt stehen — immer dieselbe Zahl, unabhängig vom Ort. */
  anzahl?: number
}) {
  // Dieselbe Quelle wie /erfahrungen: die direkt erhaltenen Rückmeldungen plus die
  // Google-Rezensionen, neueste zuerst (lib/bewertungen, alleBewertungen).
  const quelle = alleBewertungen()
  const vorn = stimmen?.length ? stimmen : quelle.filter((b) => b.ort === ort)
  const rest = quelle.filter((b) => !vorn.some((e) => e.id === b.id))
  const alle = [...vorn, ...rest].slice(0, anzahl)
  if (!alle.length) return null

  const ausDemOrt = alle.filter((b) => b.ort === ort).length
  const zahlwort = ['', 'Eine', 'Zwei', 'Drei', 'Vier', 'Fünf', 'Sechs'][ausDemOrt] ?? String(ausDemOrt)

  return (
    <Abschnitt id="stimmen-vor-ort" titel={ausDemOrt ? `Familien aus ${ort} über uns` : 'Was Familien über uns sagen'}>
      <Text>
        {ausDemOrt
          ? `${zahlwort} davon ${ausDemOrt === 1 ? 'kommt' : 'kommen'} von Familien aus ${ort} und ${ausDemOrt === 1 ? 'steht' : 'stehen'} deshalb vorn, dahinter die neuesten aus dem Bundesgebiet. Bei jeder steht, woher sie kommt. Wortlaut, Vorname und Anfangsbuchstabe wie eingegangen, nichts gekürzt und nichts geglättet.`
          : `Aus ${ort} selbst liegt uns noch keine Rückmeldung vor — hier stehen die neuesten aus dem Bundesgebiet. Bei jeder steht, woher sie kommt. Wortlaut unverändert, nichts umetikettiert.`}
      </Text>
      <div className="grid gap-4 sm:grid-cols-2">
        {alle.map((b) => (
          <figure
            key={b.id}
            className={`bg-white rounded-[18px] shadow-lift p-6 flex flex-col ${b.ort === ort ? 'ring-1 ring-pm-taupe/30' : ''}`}
          >
            <Sterne wert={b.sterne} />
            <blockquote className="mt-3 flex-1 text-[16.5px] leading-[1.6] text-pm-body">„{b.text}"</blockquote>
            <figcaption className="mt-4 text-[14.5px] text-pm-mute">
              <span className="font-semibold text-pm-ink">{b.name}</span>
              {b.ort ? `, ${b.ort}` : ''}
              {b.zeit ? ` · ${b.zeit}` : ''}
            </figcaption>
          </figure>
        ))}
      </div>
      <Text>
        Alle {quelle.length} Bewertungen im Wortlaut, auch die kritischen, stehen auf{' '}
        <a href="/erfahrungen" className="font-semibold text-pm-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors">
          Erfahrungen mit Primundus
        </a>
        .
      </Text>
    </Abschnitt>
  )
}
