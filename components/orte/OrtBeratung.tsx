// „Wo Sie sich unabhängig beraten lassen" — der Abschnitt, der nichts verkauft (21.09.2026).
//
// Martin am 21.09.: „Da muss man dem User die Informationen geben, die er braucht … die ihn
// überzeugen, und dann vielleicht erst Werbung macht." Das hier ist der Abschnitt, in dem
// wir Leute ausdrücklich woandershin schicken. Wer nach einem Sturz zum ersten Mal mit Pflege
// zu tun hat, weiß nicht, dass ihm nach § 7a SGB XI eine kostenlose Beratung zusteht — und er
// weiß vor allem nicht, WER zuständig ist. Genau daran hängen die meisten fest: Stadt oder
// Kreis? Die Antwort ist amtlich und steht für jeden unserer Orte fest.
//
// Was hier NICHT steht und warum: örtliche Telefonnummern der Pflegestützpunkte. Bayern und
// NRW stellen zusammen die Hälfte unserer Ortsseiten, und beide Landesportale führen ihre
// Stützpunkte in einer einzigen Tabelle ohne eigene Seite je Kreis (geprüft am 21.09.). Für
// 171 Kreise von Hand zu recherchieren hieße 171 Nummern, die dauerhaft stimmen müssen — bei
// Menschen, die in einer Notlage anrufen. Eine veraltete Nummer ist hier schlimmer als keine.
// München und Hamburg haben von Hand geprüfte Blöcke mit echten Adressen; die behalten sie.
//
// Alle 16 Landesportale am 21.09.2026 abgerufen und am Seitentitel bestätigt (schleswig-
// holstein.de liefert für falsche Pfade einen weichen 404 mit 200er-Status — deshalb der
// Titel als Prüfmerkmal, nicht der Statuscode). Schleswig-Holstein ist das einzige Land mit
// einer eigenen Seite je Kreis.
import type { ReactNode } from 'react'
import { Abschnitt, Text } from '@/components/vorlage/Ratgeber'
import { LAENDER, ORTE_BERATUNG, SH_KREIS_URL } from '@/lib/orte-beratung'

const LINK =
  'font-semibold text-pm-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors'

/** „zum Landkreis Dachau", aber „zur Städteregion Aachen" und „zur Region Hannover". */
const zuDem = (kreis: string) => (/^(Region|Städteregion) /.test(kreis) ? 'zur' : 'zum')

/** Kreisname → Slug der SH-Kreisseite; die Bezeichnung „Kreis " steht nicht in der URL. */
function shSlug(kreis: string): string {
  return kreis
    .replace(/^(Landkreis|Kreis) /, '')
    .replace(/ß/g, 'ss')
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/Ä/g, 'Ae')
    .replace(/Ö/g, 'Oe')
    .replace(/Ü/g, 'Ue')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

export function OrtBeratung({
  slug,
  ort,
  id = 'beratung',
  eigene,
}: {
  slug: string
  ort: string
  /** Abweichende Sprungmarke für Seiten, die schon eine haben. */
  id?: string
  /**
   * Von Hand geprüfte örtliche Anlaufstellen (München, Hamburg). Stehen vor den
   * bundesweiten Verweisen, weil ein Anruf in der eigenen Stadt mehr bringt als eine
   * Datenbank. Wo nichts übergeben wird, bleibt es beim geprüften Landesportal.
   */
  eigene?: ReactNode
}) {
  const b = ORTE_BERATUNG[slug]
  if (!b) return null
  const portal = LAENDER[b.land]

  const zustaendig = b.kreisfrei
    ? `${ort} ist kreisfrei — zuständig ist die Stadt selbst.`
    : `${ort} ist nicht kreisfrei und gehört ${zuDem(b.kreis)} ${b.kreis}. Erste Anlaufstelle ist deshalb der Kreis, nicht das Rathaus — daneben berät auch Ihre Pflegekasse.`

  // Schleswig-Holstein führt jeden Kreis auf einer eigenen Seite.
  const kreisUrl =
    b.land === 'Schleswig-Holstein' ? `${SH_KREIS_URL}${shSlug(b.kreis)}` : null

  return (
    <Abschnitt id={id} titel={`Wo Sie sich in ${ort} unabhängig beraten lassen`}>
      <Text>
        Bevor Sie sich für irgendetwas entscheiden, auch gegen uns: Die Pflegeberatung nach § 7a SGB XI ist kostenlos
        und kommt auf Wunsch zu Ihnen nach Hause. Das Gesetz verlangt ausdrücklich, dass sie neutral und unabhängig ist.
        Sie verkauft nichts — auch nicht uns.
      </Text>
      <Text>
        {zustaendig}{' '}
        {kreisUrl ? (
          <>
            Das Land führt den zuständigen Stützpunkt auf einer eigenen Seite:{' '}
            <a href={kreisUrl} target="_blank" rel="noopener noreferrer" className={LINK}>
              Pflegestützpunkt {b.kreis}
            </a>
            .
          </>
        ) : portal ? (
          <>
            Die Anlaufstellen in {b.land} stehen beim Land:{' '}
            <a href={portal.url} target="_blank" rel="noopener noreferrer" className={LINK}>
              {portal.name}
            </a>
            .
          </>
        ) : null}
      </Text>
      {eigene}
      {/* Der bundesweite Ausweg steht nur da, wo wir keine geprüfte Adresse aus der Stadt
          haben. Wer vier Anlaufstellen vor der Haustür genannt bekommt, braucht keine
          Datenbank — und 60 Wörter, die auf jeder Ortsseite gleich stehen, sind genau die
          Dublettenmasse, gegen die wir heute angetreten sind. */}
      {eigene ? null : (
        <Text>
          Zwei Stellen helfen bundesweit weiter: die{' '}
          <a href="https://www.zqp.de/beratung-pflege/" target="_blank" rel="noopener noreferrer" className={LINK}>
            Beratungsdatenbank des ZQP
          </a>{' '}
          sucht Beratungsstellen nach Postleitzahl, und das Pflegetelefon des Bundesseniorenministeriums ist unter{' '}
          <a href="tel:+493020179131" className={LINK}>
            030 20 17 91 31
          </a>{' '}
          montags bis donnerstags von 9 bis 18 Uhr erreichbar.
        </Text>
      )}
    </Abschnitt>
  )
}
