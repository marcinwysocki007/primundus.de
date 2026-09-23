// Die Vorlage der Standard-Ortsseiten (23.09.2026).
//
// Martin, nach dem Blick auf Worms: „Nicht der Inhalt, den ich erwarte: Wie läuft das ab? Wie
// funktioniert das? Was ist 24-Stunden-Pflege? Kein roter Faden." Die Reihenfolge hier ist die
// Reihenfolge der Fragen einer Tochter, deren Mutter nächste Woche aus dem Krankenhaus kommt
// (OpenAI-Kritik 23.09., abgestimmt mit dem abgenommenen München-Muster):
//
//   Kopf      Augenbraue „6× Testsieger DIE WELT" · H1 · Unterzeile wie im Rechner · Knopf,
//             Gesichter, Punkte, Sterne · „Zuhause bleiben in <Ort>" + örtlicher Absatz ·
//             „<Ort> in Zahlen" (nur örtliche Fakten) · Marta mit Siegel auf dem Foto
//   1  Was 24-Stunden-Pflege ist — und was nicht          [FEST]     OrtWasBedeutet + OrtAufgaben
//   2  So läuft es ab: von der Anfrage bis zur Anreise     [FEST]     OrtAblauf
//   3  Wer bei Ihnen einzieht — und wie Sie auswählen      [FEST]     OrtPassendeKraft
//   4  Was es in <Ort> kostet und was die Kasse zahlt      [ORT-Daten] OrtKosten (Heim-Eigenanteil je Land)
//   5  Was in <Ort> anders ist                             [ORT]      Ortsprosa (+ Kreis-Absatz)
//   6  Wohnen in <Ort>                                     [ORT-Daten] OrtWohnen (Zensus)
//   7  Wann Betreuung zu Hause sinnvoll ist                [ORT-Daten] OrtWannSinnvoll
//   8  Warum Familien in <Ort> Primundus wählen            [FEST]     OrtWarumPrimundus (die sechs USPs)
//   9  Wo Sie sich in <Ort> unabhängig beraten lassen      [ORT-Daten] OrtBeratung
//  10  Familien aus <Ort> über uns                         [ORT]      Stimmen (dunkel, Ort zuerst)
//  11  Häufige Fragen                                      [ORT+FEST] Fragen
//      Auch in Ihrer Nähe (Nachbarorte, eine Zeile)                    NearbyCities
//      Schluss                                                          KontaktBand
//
// FEST-Text steht einmal — in den Bausteinen. Was je Ort anders ist, kommt aus OrtDaten
// (lib/orte-daten.ts). Gefallen sind gegenüber der alten Vorlage: „Werkzeuge" (Links jetzt im
// Kosten-Abschnitt, vollständig), „So arbeiten wir" (falsche Vorteile; jetzt Ablauf + die sechs
// USPs), „Einzugsgebiet" als Abschnitt (jetzt eine Zeile), „24-Stunden-Pflege im Landkreis" als
// Abschnitt (jetzt ein Absatz in 5). Kein eigener Preis auf der Seite.
//
// SECTIONS für Seitenleiste und Handy-Pille werden aus derselben Liste abgeleitet, damit
// Verzeichnis und Anker nie auseinanderlaufen.
import { AnsprechpartnerinGross, KontaktBand } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { NearbyCities } from '@/components/NearbyCities'
import { OrtBeratung } from '@/components/orte/OrtBeratung'
import { OrtAblauf, OrtAufgaben, OrtPassendeKraft, OrtWarumPrimundus, OrtWasBedeutet } from '@/components/orte/OrtGrundlagen'
import { OrtKosten } from '@/components/orte/OrtKosten'
import { OrtWannSinnvoll } from '@/components/orte/OrtWannSinnvoll'
import { OrtWohnen } from '@/components/orte/OrtWohnen'
import { Stimmen } from '@/components/vertrauen/Vertrauen'
import { Abschnitt, Fragen, RatgeberKopf, RatgeberRumpf, StandardUnterzeile, Text } from '@/components/vorlage/Ratgeber'
import { HEIM_EIGENANTEIL, euroFormat } from '@/lib/heimkosten'
import { ORTE_BERATUNG } from '@/lib/orte-beratung'
import type { OrtDaten } from '@/lib/orte-daten'
import { ORTE_LAGE } from '@/lib/orte-lage'
import { DIREKT_ERHALTEN } from '@/lib/bewertungen-direkt'

const BASIS = 'https://primundus.de'

// Martin 23.09.: Die Nummer steht nur bei Hamburg (eigene Nummer) und im Münchner Umland (089…),
// überall sonst nur die Knöpfe. Umland = München und die angrenzenden Landkreise (ORTE_BERATUNG).
const MUENCHNER_UMLAND = new Set([
  'muenchen', 'unterschleissheim', 'dachau', 'freising', 'erding', 'ebersberg', 'vaterstetten', 'starnberg',
  'gauting', 'gilching', 'germering', 'landsberg', 'holzkirchen', 'miesbach', 'bad-toelz', 'wolfratshausen',
])

/** „<Ort> in Zahlen": nur, was je Ort anders ist — und nur, was es für diesen Ort gibt. Nie ein Ersatzwert. */
function ortsZahlen(d: OrtDaten): string[] {
  const lage = ORTE_LAGE[d.slug]
  const beratung = ORTE_BERATUNG[d.slug]
  const heim = HEIM_EIGENANTEIL[d.land]
  const zeilen: string[] = []
  if (heim) zeilen.push(`Heimplatz in ${d.land}: rund ${euroFormat(heim)} € Eigenanteil im Monat (vdek, 07/2026)`)
  if (lage?.ab75) zeilen.push(`${euroFormat(lage.ab75)} Menschen in ${d.ort} sind 75 oder älter (Zensus 2022)`)
  if (lage?.nurSeniorenAnteil) zeilen.push(`In ${lage.nurSeniorenAnteil.toLocaleString('de-DE')} % der Haushalte leben nur Seniorinnen und Senioren (Zensus 2022)`)
  if (beratung) {
    zeilen.push(
      beratung.kreisfrei
        ? `${d.ort} ist kreisfrei — Pflegeberatung über die Stadt und das Landesportal ${beratung.land}`
        : `Zuständig: ${beratung.kreis} — Pflegeberatung über den Kreis und das Landesportal ${beratung.land}`,
    )
  }
  return zeilen
}

// Siegel auf dem Foto (Martin 23.09., Abnahme Stopp 1: „mach mal Siegel auf dem Foto … das ist ganz gut")
export function OrtSeite({ daten: d, siegel = 'foto' }: { daten: OrtDaten; siegel?: 'foto' | 'karte' }) {
  const url = `${BASIS}/24h-pflege-${d.slug}`
  const titel = d.titel ?? `24-Stunden-Pflege und Betreuung in ${d.ort}`
  const src = `ort-${d.slug}`

  // Abschnittsfolge = Verzeichnis (Seitenleiste am Rechner, Pille am Handy).
  // Ehrliche Überschrift über den Stimmen: „Familien aus <Ort>" nur, wenn mindestens zwei Stimmen
  // wirklich aus dem Ort kommen (Prüfer 23.09.: sonst steht „aus Worms" über Düsseldorf und Bonn).
  const ausDemOrt = DIREKT_ERHALTEN.filter((b) => b.ort === d.ort).length
  const stimmenTitel = ausDemOrt >= 2 ? `Familien aus ${d.ort} über uns` : 'Das sagen unsere Familien'
  const ortTitel = d.kreis ? `Was in ${d.ort} und im ${d.kreis} anders ist` : `Was in ${d.ort} anders ist`
  const faqTitel = `Häufige Fragen zur 24-Stunden-Pflege in ${d.ort}`

  // Verzeichnis = genau die Überschriften der Bausteine (Prüfer 23.09.: zwei Sprungmarken liefen ins Leere).
  const sections = [
    { id: 'was-bedeutet', title: `Was 24-Stunden-Pflege in ${d.ort} bedeutet` },
    { id: 'aufgaben', title: 'Was eine Betreuungskraft übernimmt — und was der Pflegedienst' },
    { id: 'ablauf', title: 'So läuft es ab: von der Anfrage bis zur Anreise' },
    { id: 'passende-kraft', title: 'Wie Sie die passende Betreuungskraft finden' },
    { id: 'kosten-und-kassenzuschuesse-in', title: `Was es in ${d.ort} kostet und was die Kasse zahlt` },
    { id: 'was-die-pflege-zu', title: ortTitel },
    { id: 'wohnen', title: `Wohnen in ${d.ort}: was das für die Betreuung heißt` },
    { id: 'wann-sinnvoll', title: 'Wann Betreuung zu Hause sinnvoll ist' },
    { id: 'warum-primundus', title: `Warum Familien in ${d.ort} Primundus wählen` },
    { id: 'beratung', title: `Wo Sie sich in ${d.ort} unabhängig beraten lassen` },
    { id: 'stimmen-vor-ort', title: stimmenTitel },
    { id: 'haeufige-fragen-24h-pflege', title: faqTitel },
  ]

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${url}#service`,
      name: `Primundus — 24h-Pflege ${d.ort}`,
      serviceType: '24-Stunden-Betreuung zu Hause',
      description: `24h-Betreuungskräfte in ${d.ort}. Rechtssicher, täglich kündbar, startklar.`,
      url,
      provider: { '@id': `${BASIS}/#organization` },
      areaServed: { '@type': 'City', name: d.ort },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Startseite', item: `${BASIS}/` },
        { '@type': 'ListItem', position: 2, name: 'Regionen', item: `${BASIS}/regionen` },
        { '@type': 'ListItem', position: 3, name: d.ort, item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      // Aus den Fragen der Seite erzeugt — ausgezeichnet wird genau das, was auf der Seite steht.
      mainEntity: d.fragen.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ]

  const zahlen = ortsZahlen(d)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ArticleProgressBar />
      <div className="lg:hidden">
        <ArticleTOC sections={sections} />
      </div>

      <div className="bg-pm-paper">
        <RatgeberKopf
          pfad={[{ label: 'Startseite', href: '/' }, { label: 'Regionen', href: '/regionen' }, { label: d.ort }]}
          augenbraue="6× Testsieger DIE WELT"
          titel={titel}
          einleitungTitel={`Zuhause bleiben in ${d.ort}`}
          einleitung={d.einleitung}
          aktualisiert={d.aktualisiert}
          lesezeit={d.lesezeit ?? '6 Min.'}
          knopf={{ href: `https://kostenrechner.primundus.de/?start=1&src=${src}`, text: 'Preis & Betreuungskräfte ansehen' }}
          knopfOben
          unterzeile={<StandardUnterzeile ort={d.ort} />}
          blick={zahlen.length ? zahlen : undefined}
          blickTitel={`${d.ort} in Zahlen`}
          person={<AnsprechpartnerinGross ort={d.ort} nummer={MUENCHNER_UMLAND.has(d.slug)} siegel={siegel} />}
        />

        <RatgeberRumpf abschnitte={sections} src={src}>
          {/* 1 — was das ist, und was nicht */}
          <OrtWasBedeutet ort={d.ort} />
          <OrtAufgaben />

          {/* 2 — der Ablauf */}
          <OrtAblauf ort={d.ort} />

          {/* 3 — wer kommt, wie man auswählt */}
          <OrtPassendeKraft />

          {/* 4 — Kosten, Kasse, Heim-Eigenanteil im Land */}
          <OrtKosten slug={d.slug} ort={d.ort} land={d.land} />

          {/* 5 — die Ortsprosa; der Kreis-Absatz davor, wo es einen gibt */}
          <Abschnitt id="was-die-pflege-zu" titel={ortTitel}>
            {d.vorOrt.inhalt}
            {d.kreis ? (
              <Text>
                Das gilt für den ganzen {d.kreis}: Unsere Betreuungskräfte ziehen auch in den kleineren Gemeinden ein, in
                denen sonst kaum jemand anbietet — zu denselben Bedingungen wie in {d.ort}.
              </Text>
            ) : null}
          </Abschnitt>

          {/* 6, 7 — Zensus je Ort */}
          <OrtWohnen slug={d.slug} ort={d.ort} />
          <OrtWannSinnvoll slug={d.slug} ort={d.ort} />

          {/* 8 — die sechs USPs */}
          <OrtWarumPrimundus ort={d.ort} />

          {/* 9 — unabhängige Beratung, Kreis und Landesportal */}
          <OrtBeratung slug={d.slug} ort={d.ort} />

          {/* 10 — dunkel wie überall, Stimmen aus dem Ort zuerst */}
          <Stimmen eingebettet ort={d.ort} anzahl={3} titel={stimmenTitel} />

          {/* 11 — Fragen */}
          <Abschnitt id="haeufige-fragen-24h-pflege" titel={faqTitel}>
            <Fragen fragen={d.fragen} />
          </Abschnitt>

          {/* Nachbarorte: eine Zeile, die Verlinkung zwischen den Ortsseiten bleibt */}
          <div className="pt-14 md:pt-16">
            {d.einzugsgebiet ? <Text>{d.einzugsgebiet}</Text> : null}
            <div className="mt-6">
              <NearbyCities current={d.slug} />
            </div>
          </div>
        </RatgeberRumpf>
      </div>

      <KontaktBand ohneBewertungen src={`${src}-schluss`} />
    </>
  )
}
