// Der Abschnitt „Die ersten Tage" — mit dem Einstieg aus den Bewertungen des Ortes
// (21.09.2026).
//
// Gemessen am 21.09.: Der Abschnitt war zwischen Hamburg und München zu 81 % gleich. Die
// Punkte darunter gelten überall — das Einspielen und der Wechsel. Was sich
// je Ort unterscheidet, ist der Beleg davor: Auf der Münchner Seite stand er von Hand
// geschrieben („eine davon mit drei Sternen"), Hamburg hatte keinen, weil dort alle drei
// fünf Sterne haben.
//
// Jetzt entsteht der Satz aus den Bewertungen selbst — derselben Quelle wie /erfahrungen
// und wie der Stimmen-Block weiter unten. 76 der 207 Orte haben eigene Rückmeldungen; die
// übrigen bekommen den Abschnitt ohne Zahlenbehauptung. Erfunden wird nichts, und die
// kritischen Stimmen werden mitgezählt statt weggelassen: Wer die drei Sterne verschweigt,
// verliert genau die Glaubwürdigkeit, für die der Abschnitt da ist.
//
// Martin am 21.09.: „Das mit der Uhrzeit ist doch unnötig.“ Stimmt — der Punkt erklärte,
// dass die Anreisezeit erst kurz vorher feststeht. Das ist eine Entschuldigung für eine
// Schwäche, ausgerechnet in dem Abschnitt, der beruhigen soll. Raus — und nebenbei
// 45 Wörter weniger, die auf allen 207 Seiten gleich lauten.
import { Abschnitt, Punkte, Text } from '@/components/vorlage/Ratgeber'
import { alleBewertungen } from '@/lib/bewertungen'

const ZAHLWORT = ['', 'Eine', 'Zwei', 'Drei', 'Vier', 'Fünf', 'Sechs', 'Sieben', 'Acht', 'Neun', 'Zehn']
const zahlwort = (n: number) => ZAHLWORT[n] ?? String(n)
const klein = (n: number) => zahlwort(n).toLowerCase()

/** „Vier Familien aus München haben uns bewertet, eine davon mit drei Sternen." — oder null. */
export function stimmenSatz(ort: string): string | null {
  const ausDemOrt = alleBewertungen().filter((b) => b.ort === ort)
  if (!ausDemOrt.length) return null

  const anzahl = ausDemOrt.length
  const kopf = `${zahlwort(anzahl)} ${anzahl === 1 ? 'Familie' : 'Familien'} aus ${ort} ${
    anzahl === 1 ? 'hat' : 'haben'
  } uns bewertet`

  // Alle Noten nennen, absteigend — auch die Bestnoten. Die erste Fassung zählte nur die
  // unter fünf Sternen auf („eine mit drei, zwei mit vier"), und dann fehlte bei vier
  // Bewertungen sichtbar eine. Unvollständig wirkt schlechter als kritisch.
  const stufen = Array.from(new Set(ausDemOrt.map((b) => b.sterne))).sort((a, b) => b - a)
  const sterne = (s: number) => (s === 1 ? 'einem Stern' : `${klein(s)} Sternen`)

  if (stufen.length === 1) {
    const alle = anzahl === 1 ? '' : anzahl === 2 ? 'beide ' : 'alle '
    return `${kopf}, ${alle}mit ${sterne(stufen[0])}.`
  }
  // „Sternen" nur beim letzten Glied, sonst steht es dreimal im selben Satz.
  const teile = stufen.map((s, i) => {
    const n = ausDemOrt.filter((b) => b.sterne === s).length
    const wieViele = n === 1 ? 'eine' : klein(n)
    return `${wieViele} mit ${i === stufen.length - 1 ? sterne(s) : klein(s)}`
  })
  return `${kopf}: ${teile.join(', ')}.`
}

export function OrtErsteTage({ ort }: { ort: string }) {
  const satz = stimmenSatz(ort)
  // 52 der 76 Orte mit eigenen Stimmen haben genau eine — dort muss der Folgesatz im
  // Singular stehen, sonst verrät die Grammatik den Textbaustein.
  const eine = satz?.startsWith('Eine Familie')
  const verweis = eine ? 'Ihre Rückmeldung steht' : 'Ihre Rückmeldungen stehen'

  return (
    <Abschnitt id="erste-tage" titel="Die ersten Tage: worauf es ankommt">
      <Text>
        {satz ? `${satz} ${verweis} weiter unten im Wortlaut. ` : ''}
        Die ersten Tage entscheiden darüber, wie die Monate danach laufen — worauf es dabei ankommt und wie
        wir Sie begleiten:
      </Text>
      <Punkte
        punkte={[
          {
            title: 'Ein gemeinsamer Rhythmus',
            desc: 'Zwei Menschen teilen sich plötzlich eine Wohnung: Wo steht was, wann wird gegessen, wie viel Nähe ist recht? Rechnen Sie mit ein bis zwei Wochen, bis sich das eingespielt hat — das ist normal.',
          },
          {
            title: 'Wenn es nicht passt',
            desc: 'Je schwerer der Pflegebedarf, desto wichtiger die richtige Person. Sagen Sie es früh: Den Ersatz organisieren wir in der Regel innerhalb von drei Tagen, ohne Gebühr — nur An- und Abreise fallen an. Und Sie bleiben frei: täglich kündbar.',
          },
        ]}
      />
    </Abschnitt>
  )
}
