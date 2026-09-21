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
import { Abschnitt, Punkte, Text } from '@/components/vorlage/Ratgeber'
import { ORTE_LAGE } from '@/lib/orte-lage'

const de = (n: number) => n.toLocaleString('de-DE')

export function OrtWannSinnvoll({ slug, ort }: { slug: string; ort: string }) {
  const lage = ORTE_LAGE[slug]

  return (
    <Abschnitt id="wann-sinnvoll" titel="Wann Betreuung zu Hause sinnvoll ist">
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
            desc: 'Ein Sturz, vergessene Medikamente, nachts allein in der Wohnung. Jemand im Haus nimmt Ihnen genau diese Sorge.',
          },
          {
            title: 'Bei Demenz',
            desc: 'Gewohnte Umgebung, gewohnte Abläufe und über Wochen dieselbe Bezugsperson. Ein Umzug nimmt bei Demenz genau die Orientierung, die noch trägt.',
          },
          {
            title: 'Nach einem Krankenhausaufenthalt',
            desc: 'Die Entlassung kommt oft schneller als die Versorgung. Eine Betreuungskraft kann in wenigen Tagen da sein.',
          },
          {
            title: 'Wenn Angehörige an ihre Grenze kommen',
            desc: 'Pflege neben Beruf und eigener Familie geht eine Weile gut. Eine Betreuungskraft gibt Ihnen viel vom Alltag zurück, ohne dass jemand ausziehen muss.',
          },
        ]}
      />
      <Text>
        Manchmal reicht ein ambulanter Pflegedienst, manchmal eine Tagespflege. Wenn das so ist, sagen wir es Ihnen am
        Telefon — dann sparen Sie sich die Betreuungskraft, und wir haben Ihnen trotzdem geholfen.
      </Text>
    </Abschnitt>
  )
}
