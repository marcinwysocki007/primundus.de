// Der Abschnitt „Wann Betreuung zu Hause sinnvoll ist" — mit dem Einstieg aus den Zahlen
// des Ortes (21.09.2026).
//
// Gemessen am 21.09.: Hamburg und München waren zu 67,7 % textgleich, dieser Abschnitt zu
// 86 %. Der Grund: Die vier Punkte darunter gelten überall gleich — zu Recht, ein Sturz ist
// in Cochem derselbe Sturz wie in Köln. Individuell ist die Ausgangslage davor, und die
// steht seit dem Zensus 2022 für jeden Ort bereit: 203 verschiedene Zahlenpaare auf 207
// Seiten.
//
// Benutzt wird genau EIN Wert (lib/orte-lage.ts, dort steht die Herleitung): die Anzahl
// der Haushalte, in denen ausschließlich Menschen ab 65 leben. Absolut, nicht in Prozent —
// „154.100 Haushalte" ist greifbarer als „19,5 Prozent", und den Prozentwert nennt die FAQ
// derselben Seite bereits. Die Zahl der Menschen ab 75 steht dort ebenfalls schon; sie hier
// zu wiederholen, war der erste Entwurf und ein Fehler.
//
// Kein Bundesvergleich. Wer sich die Kennzahl passend zum Ort aussucht — mal der Vergleich,
// wenn er günstig ausfällt, mal keiner — schreibt Werbung. Dieselbe Kennzahl überall, in
// derselben Form, ist Information.
import { VoraussetzungenListe } from '@/components/vertrauen/Voraussetzungen'
import { Abschnitt, Punkte, Text } from '@/components/vorlage/Ratgeber'
import { ORTE_LAGE } from '@/lib/orte-lage'

const de = (n: number) => n.toLocaleString('de-DE')
const H3 = 'text-[22px] font-extrabold leading-[1.2] tracking-[-0.02em] text-pm-ink [text-wrap:balance] md:text-[24px]'

/** Der Haushaltssatz und die vier Situationen — ohne Abschnitt, für „Passt 24-Stunden-Pflege zu Ihrer Situation?" */
export function WannSinnvollInhalt({ slug, ort }: { slug: string; ort: string }) {
  const lage = ORTE_LAGE[slug]
  return (
    <>
      {lage ? (
        <Text>
          In {ort} gibt es {de(lage.nurSeniorenHaushalte)} Haushalte, in denen niemand unter 65 lebt (Zensus 2022).
          In den meisten davon ist Betreuung kein Thema. Zum Thema wird sie in diesen vier Situationen:
        </Text>
      ) : null}
      <Punkte
        punkte={[
          {
            title: 'Wenn das Alleinleben unsicher wird',
            desc: 'Ein Sturz, vergessene Medikamente, nachts allein.',
          },
          {
            title: 'Bei Demenz',
            desc: 'Gewohnte Umgebung, über Wochen dieselbe Bezugsperson.',
          },
          {
            title: 'Nach einem Krankenhausaufenthalt',
            desc: 'Die Entlassung kommt oft schneller als die Versorgung.',
          },
          {
            title: 'Wenn Angehörige an ihre Grenze kommen',
            desc: 'Pflege neben Beruf und Familie geht eine Weile gut — nicht für immer.',
          },
        ]}
      />
    </>
  )
}

/** Eigener Abschnitt — nur noch auf den Musterseiten München und Hamburg. */
export function OrtWannSinnvoll({ slug, ort }: { slug: string; ort: string }) {
  return (
    <Abschnitt id="wann-sinnvoll" titel="Wann Betreuung zu Hause sinnvoll ist">
      <WannSinnvollInhalt slug={slug} ort={ort} />
    </Abschnitt>
  )
}

/**
 * „Passt 24-Stunden-Pflege zu Ihrer Situation?" (24.09., Martin: „Wann Betreuung sinnvoll ist und die
 * Voraussetzungen würde ich kombinieren") — erst die Situationen, dann, was das Zuhause braucht.
 */
export function OrtPasstZuIhnen({ slug, ort }: { slug: string; ort: string }) {
  return (
    <Abschnitt id="passt-zu-ihnen" titel="Passt 24-Stunden-Pflege zu Ihrer Situation?">
      <Text>
        Vier Situationen, in denen Familien sich für Betreuung zu Hause entscheiden — und vier Dinge, die das Zuhause
        dafür braucht.
      </Text>
      <h3 className={H3}>Wann Betreuung zu Hause sinnvoll ist</h3>
      <WannSinnvollInhalt slug={slug} ort={ort} />
      <h3 className={`${H3} mt-2`}>Was das Zuhause dafür braucht</h3>
      <VoraussetzungenListe />
    </Abschnitt>
  )
}
