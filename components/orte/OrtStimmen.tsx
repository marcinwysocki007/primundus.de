// Echte Kundenstimmen aus genau diesem Ort auf der Ortsseite (20.09.2026).
//
// Martin am 20.09.: „die anderen sind indexiert aber nicht positioniert — wir brauchen besseren, individuellen Content".
// Die Seiten, die für „24 stunden pflege <ort>" vorn stehen (promedica24, diadema, sencurina, betreuung-24-koeln), haben eines
// gemeinsam: örtlichen Beleg — eine Ansprechpartnerin vor Ort, ein Familienbetrieb, ein lokaler Name. Unser ehrlicher Beleg sind
// 120 Rückmeldungen aus 76 Städten, die bisher nur auf /erfahrungen standen. Hier steht die Stimme aus der Stadt, um die es geht;
// gibt es keine, steht die aus der Nachbarschaft oder dem Bundesland — und das wird dazugeschrieben, nichts wird umetikettiert.
import { Abschnitt, Text } from '@/components/vorlage/Ratgeber'
import { Sterne } from '@/components/bewertungen/Sterne'
import type { Bewertung } from '@/lib/bewertungen'

export function OrtStimmen({ ort, stimmen, herkunft }: { ort: string; stimmen: Bewertung[]; herkunft: 'ort' | 'umgebung' }) {
  if (!stimmen.length) return null
  return (
    <Abschnitt id="stimmen-vor-ort" titel={herkunft === 'ort' ? `Familien aus ${ort} über uns` : `Familien aus der Region über uns`}>
      <Text>
        {herkunft === 'ort'
          ? `Diese Rückmeldungen kommen von Familien aus ${ort}. Wortlaut, Vorname und Anfangsbuchstabe wie eingegangen, nichts gekürzt und nichts geglättet.`
          : `Aus ${ort} selbst liegt uns noch keine Rückmeldung vor. Diese hier kommen aus der näheren Umgebung — Wortlaut unverändert.`}
      </Text>
      <div className="grid gap-4 sm:grid-cols-2">
        {stimmen.map((b) => (
          <figure key={b.id} className="bg-white rounded-[18px] shadow-lift p-6 flex flex-col">
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
        Alle Rückmeldungen im Wortlaut, auch die kritischen, stehen auf{' '}
        <a href="/erfahrungen" className="font-semibold text-pm-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors">
          Erfahrungen mit Primundus
        </a>
        .
      </Text>
    </Abschnitt>
  )
}
