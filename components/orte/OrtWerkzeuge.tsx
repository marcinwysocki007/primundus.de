// Werkzeug-Abschnitt für die Ortsseiten (20.09.2026). Martin: „vielleicht auch dort ein Pflegegradrechner, ein Preisrechner,
// alle Rechner vielleicht auch von dort verlinken". Bisher stand auf den Ortsseiten nur der Preisrechner; der Pflegegrad-Rechner,
// der Zuschuss-Rechner, der Heim-Rechner und die Generatoren waren von dort aus nicht erreichbar.
// Die Einleitung rechnet mit dem Heim-Eigenanteil des jeweiligen Bundeslands, unterscheidet sich also je Ort.
import { Abschnitt, MehrDazu, Punkte, Text } from '@/components/vorlage/Ratgeber'
import { HEIM_EIGENANTEIL, HEIM_EIGENANTEIL_BUND } from '@/lib/heimkosten'
import { PFLEGEGELD } from '@/lib/fakten'

const euro = (n: number) => n.toLocaleString('de-DE') + ' €'
const EIGEN_PG3 = 2150 - PFLEGEGELD[3] - 295 - 333

export function OrtWerkzeuge({ ort, land }: { ort: string; land: string }) {
  const heim = HEIM_EIGENANTEIL[land] ?? HEIM_EIGENANTEIL_BUND
  const unterschied = heim - EIGEN_PG3

  return (
    <Abschnitt id="werkzeuge" titel={`Rechnen Sie Ihren Fall für ${ort} durch`}>
      <Text>
        Ein Heimplatz in {land} kostet im Schnitt rund {euro(heim)} Eigenanteil im Monat. Zu Hause bleiben bei Pflegegrad 3 ab
        ca. {euro(EIGEN_PG3)} — ein Unterschied von rund {euro(unterschied)} im Monat, also {euro(unterschied * 12)} im Jahr.
        Was in Ihrem Fall herauskommt, hängt vom Pflegegrad ab. Dafür sind diese Rechner da, alle kostenlos und ohne Anmeldung:
      </Text>
      <Punkte
        punkte={[
          {
            title: <a href="/pflegegrad-rechner" className="text-pm-taupe-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors">Pflegegrad-Rechner</a>,
            desc: 'Die 64 Fragen des Medizinischen Dienstes, dieselben Punkte wie beim Gutachter. Ergebnis sofort, ohne E-Mail.',
          },
          {
            title: <a href={`https://kostenrechner.primundus.de/?start=1&src=ort-werkzeuge`} referrerPolicy="no-referrer-when-downgrade" className="text-pm-taupe-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors">Preisrechner</a>,
            desc: `Ihr Monatspreis für ${ort} und die Betreuungskräfte, die dafür in Frage kommen — mit Foto, Erfahrung und Deutschniveau.`,
          },
          {
            title: <a href="/pflegeheim-kosten-deutschland" className="text-pm-taupe-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors">Pflegeheim-Kosten-Rechner</a>,
            desc: `Eigenanteil im Heim nach Bundesland, Pflegegrad und Heimjahr — für ${land} und daneben die Kosten zu Hause.`,
          },
          {
            title: <a href="/zuschuss-rechner" className="text-pm-taupe-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors">Zuschuss-Rechner</a>,
            desc: 'Welche Leistungen der Pflegekasse Ihnen zustehen und wie viel davon zusammenkommt.',
          },
          {
            title: <a href="/vollmacht-generator" className="text-pm-taupe-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors">Vorsorgevollmacht erstellen</a>,
            desc: 'Vollmacht Schritt für Schritt ausfüllen und ausdrucken. Ohne Anwalt, ohne Kosten.',
          },
          {
            title: <a href="/pflegevertrag-generator" className="text-pm-taupe-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors">Pflegevertrag prüfen</a>,
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
