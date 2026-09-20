// Kosten- und Werkzeug-Abschnitt für die Ortsseiten (20.09.2026).
//
// Martin am 20.09.:
//  1. „vielleicht auch dort ein Pflegegradrechner, ein Preisrechner, alle Rechner vielleicht auch von dort verlinken"
//  2. „Rechnen Sie Ihren Fall durch, hört sich doch komisch an, das ist doch kein Fall" — keine Behördensprache.
//  3. Der Preis hängt an der Pflegesituation und an den Wünschen an die Betreuungskraft; der Pflegegrad bestimmt nur den Zuschuss.
//  4. „und wenn es nicht die Eltern sind? kann für Angehörige sein oder nur Mutter" — also niemanden voraussetzen.
//  5. „es muss noch mehr Unterscheidung" — deshalb rechnet der Abschnitt mit den Zahlen des jeweiligen Orts: Baujahre des
//     Wohnungsbestands (Treppe, Aufzug, Bad) und Mietniveau kommen aus dem Zensus 2022 und sind je Stadt verschieden.
import { Abschnitt, MehrDazu, Punkte, Text } from '@/components/vorlage/Ratgeber'
import { HEIM_EIGENANTEIL, HEIM_EIGENANTEIL_BUND } from '@/lib/heimkosten'
import { PFLEGEGELD } from '@/lib/fakten'

const euro = (n: number) => n.toLocaleString('de-DE') + ' €'
const prozent = (n: number) => n.toLocaleString('de-DE', { minimumFractionDigits: 1, maximumFractionDigits: 1 }) + ' %'
const EIGEN_PG3 = 2150 - PFLEGEGELD[3] - 295 - 333
const LINK = 'text-pm-taupe-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors'

export function OrtWerkzeuge({
  ort,
  land,
  altbau,
  miete,
}: {
  ort: string
  land: string
  /** Anteil der Wohnungen, die vor 1970 gebaut wurden (Zensus 2022) */
  altbau?: number
  /** Nettokaltmiete je m² (Zensus 2022) */
  miete?: number
}) {
  const heim = HEIM_EIGENANTEIL[land] ?? HEIM_EIGENANTEIL_BUND
  const bayern = land === 'Bayern'

  return (
    <Abschnitt id="werkzeuge" titel={`Was es in ${ort} kostet, und was die Pflegekasse dazugibt`}>
      <Text>
        Zwei Dinge entscheiden darüber, was am Ende selbst zu zahlen ist. Das erste ist der Preis: Er beginnt bei 2.150 € im
        Monat und richtet sich danach, wie viel Hilfe nötig ist und was Sie von der Betreuungskraft erwarten — wie gut sie
        Deutsch spricht, ob sie Erfahrung mit Demenz hat, ob nachts jemand aufstehen muss, ob zwei Personen im Haushalt
        versorgt werden.
      </Text>
      <Text>
        Das zweite ist der Pflegegrad. Er bestimmt nicht den Preis, sondern das, was die Pflegekasse dazugibt: Pflegegeld,
        anteiliges Entlastungsbudget, dazu die Steuerermäßigung. Bei Pflegegrad 3 bleiben so ab ca. {euro(EIGEN_PG3)} im Monat
        übrig. Ein Heimplatz in {land} kostet im Vergleich rund {euro(heim)} Eigenanteil im Monat.
        {bayern ? ' Wer in Bayern wohnt, bekommt ab Pflegegrad 2 zusätzlich 500 € Landespflegegeld im Jahr.' : ''}
      </Text>
      {altbau !== undefined && (
        <Text>
          Was in {ort} dazukommt: {prozent(altbau)} der Wohnungen stammen aus der Zeit vor 1970.{' '}
          {altbau >= 60
            ? 'In diesem Bestand fehlt häufiger ein Aufzug, das Bad ist klein und die Treppe steil — genau die Punkte, an denen Alleinleben scheitert und jemand im Haus den Unterschied macht.'
            : 'Ein Teil davon hat keinen Aufzug und ein kleines Bad; das ist oft der Grund, warum es allein nicht mehr geht.'}
          {miete !== undefined
            ? ` Umziehen ist selten die Antwort: Neu vermietet wird in ${ort} für ${miete.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} € je Quadratmeter.`
            : ''}
        </Text>
      )}
      <Text>Wie beides bei Ihnen zusammenkommt, zeigen diese Rechner — kostenlos, ohne Anmeldung, in wenigen Minuten:</Text>
      <Punkte
        punkte={[
          {
            title: <a href={'https://kostenrechner.primundus.de/?start=1&src=ort-werkzeuge'} referrerPolicy="no-referrer-when-downgrade" className={LINK}>Preis und Betreuungskräfte ansehen</a>,
            desc: `Sie beschreiben die Situation in ${ort}, dann sehen Sie den Monatspreis und die Betreuungskräfte, die dafür in Frage kommen — mit Foto, Erfahrung und Deutschniveau.`,
          },
          {
            title: <a href="/pflegegrad-rechner" className={LINK}>Pflegegrad-Rechner</a>,
            desc: 'Noch kein Pflegegrad oder zu niedrig eingestuft? Die 64 Fragen des Medizinischen Dienstes, dieselben Punkte wie beim Gutachter. Ergebnis sofort, ohne E-Mail.',
          },
          {
            title: <a href="/zuschuss-rechner" className={LINK}>Zuschuss-Rechner</a>,
            desc: 'Was die Pflegekasse bei welchem Pflegegrad zahlt und wie viel davon zusammenkommt.',
          },
          {
            title: <a href="/pflegeheim-kosten-deutschland" className={LINK}>Pflegeheim-Kosten-Rechner</a>,
            desc: `Was ein Heimplatz in ${land} kostet, nach Pflegegrad und Heimjahr, und was daneben zu Hause bleibt.`,
          },
          {
            title: <a href="/vollmacht-generator" className={LINK}>Vorsorgevollmacht erstellen</a>,
            desc: 'Für den Fall, dass jemand nicht mehr selbst entscheiden kann: Vollmacht Schritt für Schritt ausfüllen und ausdrucken.',
          },
          {
            title: <a href="/pflegevertrag-generator" className={LINK}>Pflegevertrag prüfen</a>,
            desc: 'Was in einem Vertrag stehen muss und woran Sie unfaire Klauseln erkennen.',
          },
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
