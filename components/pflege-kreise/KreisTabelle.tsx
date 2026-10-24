// Die Tabelle aller 400 Kreise auf /pflege-im-kreis (02.10.2026).
//
// Server-Baustein: Die Zeilen stehen als festes HTML auf der Seite, jede mit dem Anker #kreis-<Kreisschlüssel>, damit
// Redaktionen auf ihren Kreis verlinken können. Suche, Filter und Sortierung (KreisFilter) lesen nur die data-Attribute.
// Gewicht: Die Zellen tragen keine eigenen Klassen — die Gestaltung hängt einmal an der Tabelle (Kind-Selektoren), sonst
// stünde jede Klasse 2.000-mal im HTML. Am Handy wird jede Zeile ein Block: Name oben, darunter die vier Werte unter einer
// klebenden Beschriftungszeile.
import { Sicher } from '@/components/Sicher'
import { DEUTSCHLAND, KREISE, type PflegeKreis } from '@/lib/pflege-kreise'
import { anzahl, eineStelle, prozent, veraenderung } from '@/lib/pflege-kreise-format'
import { KreisFilter } from './KreisFilter'

// Sortierschlüssel ohne vorangestellte Art: „Landkreis München" steht neben „München"
const ohneArt = (name: string) => name.replace(/^(Landkreis|Kreis|Region|Regionalverband|Städteregion) /, '')

const LAENDER = Array.from(new Map(KREISE.map((k) => [k.ags.slice(0, 2), k.land])).entries())
  .map(([code, name]) => ({ code, name }))
  .sort((a, b) => a.name.localeCompare(b.name, 'de'))

const TABELLE = [
  'w-full border-collapse text-left text-[15.5px] md:text-[16px] leading-[1.4] text-pm-body [&_td]:[font-variant-numeric:tabular-nums]',
  // Kopf: klebt unter der Kopfzeile der Website (65 px, ab md 125 px, gemessen 02.10.2026)
  '[&_thead_th]:bg-white [&_thead_th]:px-3 [&_thead_th]:py-3 [&_thead_th]:align-bottom [&_thead_th]:text-[13.5px] [&_thead_th]:font-semibold [&_thead_th]:leading-[1.3] [&_thead_th]:text-pm-mute [&_thead_th]:border-b [&_thead_th]:border-pm-line',
  'sm:[&_thead_th]:sticky sm:[&_thead_th]:top-[65px] md:[&_thead_th]:top-[125px] sm:[&_thead_th]:z-[1]',
  '[&_thead_th:not(:first-child)]:text-right [&_thead_a]:text-pm-taupe-ink [&_thead_a]:no-underline',
  // Zeilen; Sprungziel unter Kopfzeile und Tabellenkopf (html hat schon scroll-padding-top 100 px)
  '[&_tbody_tr]:border-b [&_tbody_tr]:border-pm-line-soft [&_tr]:scroll-mt-[30px] md:[&_tr]:scroll-mt-[100px]',
  '[&_tr:target]:bg-pm-mint [&_tr:target_th]:bg-pm-mint',
  '[&_tbody_th]:px-3 [&_tbody_th]:py-3 [&_tbody_th]:font-semibold [&_tbody_th]:text-pm-ink [&_tbody_th]:align-top',
  '[&_tbody_th_a]:text-pm-ink [&_tbody_th_a]:no-underline hover:[&_tbody_th_a]:underline [&_tbody_th_a]:decoration-pm-taupe/40 [&_tbody_th_a]:underline-offset-4',
  '[&_tbody_th_span]:block [&_tbody_th_span]:mt-0.5 [&_tbody_th_span]:text-[13.5px] [&_tbody_th_span]:font-normal [&_tbody_th_span]:text-pm-mute',
  '[&_td]:px-3 [&_td]:py-3 [&_td]:text-right [&_td]:align-top [&_td]:whitespace-nowrap',
  // Gruppenzeilen der Bundesländer
  '[&_tr[data-gruppe]_th]:bg-pm-shell [&_tr[data-gruppe]_th]:pt-5 [&_tr[data-gruppe]_th]:pb-2 [&_tr[data-gruppe]_th]:text-[14px] [&_tr[data-gruppe]_th]:font-bold [&_tr[data-gruppe]_th]:uppercase [&_tr[data-gruppe]_th]:tracking-[.1em] [&_tr[data-gruppe]_th]:text-pm-taupe-ink',
  // Handy: Tabelle als Blöcke. Oben klebt eine Zeile mit den vier Beschriftungen, jede Kreiszeile hat den Namen über
  // vier Werten in denselben vier Spalten — so steht keine Beschriftung 400-mal im HTML und die Seite bleibt halb so lang.
  'max-sm:block max-sm:[&_thead]:block max-sm:[&_thead]:sticky max-sm:[&_thead]:top-[65px] max-sm:[&_thead]:z-[1] max-sm:[&_thead]:bg-white',
  'max-sm:[&_thead_tr]:grid max-sm:[&_thead_tr]:grid-cols-4 max-sm:[&_thead_th:first-child]:hidden',
  'max-sm:[&_thead_th]:px-1 max-sm:[&_thead_th]:py-2 max-sm:[&_thead_th]:text-[12.5px] max-sm:[&_thead_th]:leading-[1.25] max-sm:[&_thead_th]:[hyphens:manual]',
  'max-sm:[&_tbody]:block max-sm:[&_tbody_tr]:grid max-sm:[&_tbody_tr]:grid-cols-4 max-sm:[&_tbody_tr]:py-2.5',
  'max-sm:[&_tbody_tr[hidden]]:hidden max-sm:[&_tbody_th]:col-span-4 max-sm:[&_tbody_th]:px-1 max-sm:[&_tbody_th]:pt-0 max-sm:[&_tbody_th]:pb-1',
  'max-sm:[&_tbody_th_span]:inline max-sm:[&_tbody_th_span]:ml-1.5 max-sm:[&_tbody_th_span]:text-[13px]',
  'max-sm:[&_tr[data-gruppe]]:py-0 max-sm:[&_tr[data-gruppe]_th]:px-2',
  'max-sm:[&_td]:block max-sm:[&_td]:px-1 max-sm:[&_td]:py-0.5 max-sm:[&_td]:text-[15px] max-sm:[&_td]:font-semibold max-sm:[&_td]:text-pm-ink',
].join(' ')

function Zeile({ k }: { k: PflegeKreis }) {
  const zusatz = k.art === 'Stadtstaat' ? 'Stadtstaat' : k.typ === 'kreisfrei' ? `${k.art} · ${k.land}` : k.land
  return (
    <tr
      id={`kreis-${k.ags}`}
      data-q={k.such}
      data-land={k.ags.slice(0, 2)}
      data-typ={k.typ === 'kreisfrei' ? 's' : 'k'}
      data-p={k.p}
      data-z={(((k.p - k.v) / k.p) * 100).toFixed(2)}
      data-d={((k.dp / k.a80) * 100).toFixed(3)}
      data-v={k.v19 ? (((k.v - k.v19) / k.v19) * 100).toFixed(2) : ''}
    >
      <th scope="row">
        <a href={`#kreis-${k.ags}`}>{k.name}</a>
        <span>{zusatz}</span>
      </th>
      <td>{anzahl(k.p)}</td>
      <td>{prozent(k.zh)}</td>
      <td>{eineStelle(k.d)}</td>
      <td>{veraenderung(k.ch)}</td>
    </tr>
  )
}

export function KreisTabelle() {
  // Bundesland alphabetisch, darin nach Name ohne Art — die Stadt steht vor dem gleichnamigen Landkreis
  const gruppen = LAENDER.map((l) => ({
    ...l,
    kreise: KREISE.filter((k) => k.ags.startsWith(l.code)).sort(
      (a, b) => ohneArt(a.name).localeCompare(ohneArt(b.name), 'de') || (a.typ === 'kreisfrei' ? -1 : 1),
    ),
  }))
  return (
    <div className="flex flex-col gap-6">
      <Sicher name="KreisFilter">
        <KreisFilter laender={LAENDER} gesamt={KREISE.length} />
      </Sicher>
      <table id="kreis-tabelle" className={TABELLE}>
        <caption className="sr-only">
          Pflege in den 400 Kreisen und kreisfreien Städten, Stand Dezember 2023: Pflegebedürftige, Anteil zu Hause
          versorgt, Dauerpflegeplätze je 100 Einwohner ab 80 und Veränderung der vollstationär Versorgten seit 2019
        </caption>
        <thead>
          <tr>
            <th scope="col" className="w-[34%]">Kreis</th>
            {/* Am Handy kürzere Beschriftungen (vier schmale Spalten), ab sm die vollen */}
            <th scope="col">Pflege&shy;bedürftige</th>
            <th scope="col">
              zu Hause<span className="max-sm:hidden"> versorgt</span> <a href="#methodik-zu-hause" aria-label="Erklärung: zu Hause versorgt">¹</a>
            </th>
            <th scope="col">
              <span className="sm:hidden">Dauer&shy;pflege&shy;plätze je 100 ab 80</span>
              <span className="max-sm:hidden">Dauerpflege&shy;plätze je 100 Einwohner ab 80</span>{' '}
              <a href="#methodik-plaetze" aria-label="Erklärung: Dauerpflegeplätze">²</a>
            </th>
            <th scope="col">
              <span className="sm:hidden">voll&shy;stationär 2019 → 2023</span>
              <span className="max-sm:hidden">vollstationär Versorgte 2019 → 2023</span>{' '}
              <a href="#methodik-veraenderung" aria-label="Erklärung: Veränderung seit 2019">³</a>
            </th>
          </tr>
        </thead>
        <tbody className="font-semibold [&_th]:bg-pm-shell [&_td]:bg-pm-shell [&_td]:text-pm-ink [&_tr]:border-b-2 [&_tr]:border-pm-line">
          <tr id="kreis-deutschland">
            <th scope="row">
              Deutschland
              <span>alle 400 Kreise</span>
            </th>
            <td>{anzahl(DEUTSCHLAND.p)}</td>
            <td>{prozent(DEUTSCHLAND.zh)}</td>
            <td>{eineStelle(DEUTSCHLAND.d)}</td>
            <td>{veraenderung(DEUTSCHLAND.ch)}</td>
          </tr>
        </tbody>
        <tbody id="kreis-zeilen">
          {gruppen.map((g) => [
            <tr key={g.code} data-gruppe={g.code}>
              <th scope="colgroup" colSpan={5}>
                {g.name}
              </th>
            </tr>,
            ...g.kreise.map((k) => <Zeile key={k.ags} k={k} />),
          ])}
        </tbody>
      </table>
    </div>
  )
}
