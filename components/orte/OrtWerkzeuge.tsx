// Werkzeug-Abschnitt für die Ortsseiten (20.09.2026). Martin: „vielleicht auch dort ein Pflegegradrechner, ein Preisrechner,
// alle Rechner vielleicht auch von dort verlinken". Bisher stand auf den Ortsseiten nur der Preisrechner; der Pflegegrad-Rechner,
// der Zuschuss-Rechner, der Heim-Rechner und die Generatoren waren von dort aus nicht erreichbar.
//
// Korrektur am 20.09. nach Martins Hinweis: Der Preis hängt NICHT am Pflegegrad, sondern an der Pflegesituation und daran, was
// die Familie von der Betreuungskraft erwartet (Deutsch, Nächte, zweite Person). Der Pflegegrad bestimmt nur, wie viel die
// Pflegekasse dazugibt. Und: keine Behördensprache — es geht um Eltern, nicht um „Fälle".
import { Abschnitt, MehrDazu, Punkte, Text } from '@/components/vorlage/Ratgeber'
import { HEIM_EIGENANTEIL, HEIM_EIGENANTEIL_BUND } from '@/lib/heimkosten'
import { PFLEGEGELD } from '@/lib/fakten'

const euro = (n: number) => n.toLocaleString('de-DE') + ' €'
const EIGEN_PG3 = 2150 - PFLEGEGELD[3] - 295 - 333
const LINK = 'text-pm-taupe-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors'

export function OrtWerkzeuge({ ort, land }: { ort: string; land: string }) {
  const heim = HEIM_EIGENANTEIL[land] ?? HEIM_EIGENANTEIL_BUND

  return (
    <Abschnitt id="werkzeuge" titel={`Was es für Ihre Eltern in ${ort} kostet`}>
      <Text>
        Zwei Dinge entscheiden darüber, was Sie am Ende selbst zahlen. Das erste ist der Preis: Er beginnt bei 2.150 € im Monat
        und richtet sich danach, wie viel Hilfe Ihre Mutter oder Ihr Vater braucht und was Sie sich von der Betreuungskraft
        wünschen — wie gut sie Deutsch spricht, ob sie Erfahrung mit Demenz hat, ob nachts jemand aufstehen muss, ob zwei
        Personen im Haushalt versorgt werden.
      </Text>
      <Text>
        Das zweite ist der Pflegegrad. Er bestimmt nicht den Preis, sondern das, was die Pflegekasse dazugibt: Pflegegeld,
        anteiliges Entlastungsbudget, dazu die Steuerermäßigung. Bei Pflegegrad 3 bleiben so ab ca. {euro(EIGEN_PG3)} im Monat
        übrig. Ein Heimplatz in {land} kostet im Vergleich rund {euro(heim)} Eigenanteil im Monat.
      </Text>
      <Text>
        Wie beides bei Ihnen zusammenkommt, zeigen diese Rechner — kostenlos, ohne Anmeldung, in wenigen Minuten:
      </Text>
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
            desc: 'Was die Pflegekasse bei Ihrem Pflegegrad zahlt und wie viel davon zusammenkommt.',
          },
          {
            title: <a href="/pflegeheim-kosten-deutschland" className={LINK}>Pflegeheim-Kosten-Rechner</a>,
            desc: `Was ein Heimplatz in ${land} kostet, nach Pflegegrad und Heimjahr, und was daneben zu Hause bleibt.`,
          },
          {
            title: <a href="/vollmacht-generator" className={LINK}>Vorsorgevollmacht erstellen</a>,
            desc: 'Wenn Ihre Eltern nicht mehr selbst entscheiden können: Vollmacht Schritt für Schritt ausfüllen und ausdrucken.',
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
