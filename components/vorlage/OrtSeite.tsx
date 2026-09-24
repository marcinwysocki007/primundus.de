// Die Vorlage der Standard-Ortsseiten (23.09.2026, Struktur vom 24.09.2026).
//
// Martin 23.09.: „Nicht der Inhalt, den ich erwarte: Wie läuft das ab? Was ist 24-Stunden-Pflege?
// Kein roter Faden." Und 24.09., nach drei Umbauten mit zwölf Abschnitten: „Kein roter Faden — teils
// sinnlos, teils Zusammengehöriges getrennt. Roter Faden: was das ist, wie es abläuft, was es kostet,
// welche Voraussetzungen, warum Primundus." Genau diese Reihenfolge (OpenAI-Plan 24.09. kam auf dieselbe):
//
//   Kopf   Augenbraue „6× Testsieger DIE WELT" · H1 · Unterzeile wie im Rechner · Knopf, Gesichter,
//          Punkte, Sterne · „Was 24-Stunden-Pflege in <Ort> bedeutet" (Definition) · Marta mit Siegel
//   1  Was eine Betreuungskraft bei Ihnen übernimmt        [FEST]      OrtAufgaben (+ 4 Themen-Links)
//   2  So läuft es ab: von der Anfrage bis zur Anreise     [FEST]      OrtAblauf (Rechner-Schritte mit Bild) + Störer 1
//   3  Was es in <Ort> kostet und was die Kasse zahlt      [ORT-Daten] OrtKosten (Preis-Frage, Heim-Eigenanteil je Land)
//   4  Passt 24-Stunden-Pflege zu Ihrer Situation?         [ORT-Daten] OrtPasstZuIhnen (Situationen + Voraussetzungen)
//   5  Warum Familien in <Ort> Primundus wählen            [FEST]      OrtWarumPrimundus (Portal-Mockup + Knopf, sechs USPs, zwei Kästen) + Störer 2
//   6  Familien aus <Ort> über uns                         [ORT]       Stimmen (dunkel, Ort zuerst)
//   7  Pflege vor Ort in <Ort>                             [ORT]       Einstiegsabsatz, Ortsprosa, Kreis-Satz,
//                                                                       H3 Wohnen (Handprosa), „<Ort> in Zahlen", H3 Beratung
//   8  Häufige Fragen                                      [ORT+FEST]  Fragen
//      Auch in Ihrer Nähe (Nachbarorte, eine Zeile)                    NearbyCities
//      Schluss                                                          KontaktBand
//
// FEST-Text steht einmal — in den Bausteinen; Ablauf und Voraussetzungen teilen sich den Wortlaut mit der
// Startseite (components/vertrauen/Ablauf.tsx, Voraussetzungen.tsx). Was je Ort anders ist, kommt aus
// OrtDaten (lib/orte-daten.ts). Kein eigener Preis auf der Seite. Gefallen am 24.09.: die Spalte „ambulanter
// Pflegedienst" und der § 38-Satz, „Wie Sie die passende Betreuungskraft finden" als Abschnitt (jetzt in 5),
// „Wann sinnvoll" und „Voraussetzungen" als zwei Abschnitte (jetzt 4), „Wohnen" und „Beratung" als H2 (jetzt H3 in 7).
//
// SECTIONS für Seitenleiste und Handy-Pille werden aus derselben Liste abgeleitet, damit
// Verzeichnis und Anker nie auseinanderlaufen.
import { AnsprechpartnerinGross, KontaktBand } from '@/components/ArticleCTA'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { NearbyCities } from '@/components/NearbyCities'
import { OrtBeratung } from '@/components/orte/OrtBeratung'
import { OrtAblauf, OrtAufgaben, OrtWarumPrimundus, OrtWasBedeutetText } from '@/components/orte/OrtGrundlagen'
import { OrtKosten } from '@/components/orte/OrtKosten'
import { OrtPasstZuIhnen } from '@/components/orte/OrtWannSinnvoll'
import { OrtWohnen } from '@/components/orte/OrtWohnen'
import { CtaStoerer } from '@/components/vertrauen/Stoerer'
import { Stimmen } from '@/components/vertrauen/Vertrauen'
import { Abschnitt, BlickKasten, Fragen, RatgeberKopf, RatgeberRumpf, StandardUnterzeile, Text, mitPosition } from '@/components/vorlage/Ratgeber'
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
  // „im Landkreis X" / „im Unterallgäu" — aber „in der StädteRegion Aachen": trägt der Kreisname seinen
  // Artikel schon („der …"), bleibt „in", sonst „im".
  const imKreis = d.kreis ? (d.kreis.startsWith('der ') ? `in ${d.kreis}` : `im ${d.kreis}`) : ''
  // 24.09. (Martin): „Was in Worms und im Landkreis anders ist — was ist das für ein Satz?" → „Pflege vor Ort in …"
  const ortTitel = d.kreis ? `Pflege vor Ort in ${d.ort} und ${imKreis}` : `Pflege vor Ort in ${d.ort}`
  const faqTitel = `Häufige Fragen zur 24-Stunden-Pflege in ${d.ort}`

  // Verzeichnis = genau die Überschriften der Bausteine (Prüfer 23.09.: zwei Sprungmarken liefen ins Leere).
  // Acht Abschnitte in der Reihenfolge der Fragen einer Tochter (Martin 24.09.: „was das ist, wie es abläuft,
  // was es kostet, welche Voraussetzungen, warum Primundus"). Die Definition steht im Kopf; Wohnen und
  // Beratung sind Unterabschnitte von „Pflege vor Ort" und stehen deshalb nicht im Verzeichnis.
  const sections = [
    { id: 'aufgaben', title: 'Was eine Betreuungskraft bei Ihnen übernimmt' },
    { id: 'ablauf', title: 'So läuft es ab: von der Anfrage bis zur Anreise' },
    { id: 'kosten-und-kassenzuschuesse-in', title: `Was es in ${d.ort} kostet und was die Kasse zahlt` },
    { id: 'passt-zu-ihnen', title: 'Passt 24-Stunden-Pflege zu Ihrer Situation?' },
    { id: 'warum-primundus', title: `Warum Familien in ${d.ort} Primundus wählen` },
    { id: 'stimmen-vor-ort', title: stimmenTitel },
    { id: 'was-die-pflege-zu', title: ortTitel },
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
          // Martin 24.09.: „Zuhause bleiben in Worms klingt blöd — und warum brauche ich die Info da oben? Wäre nicht
          // ‚was 24-Stunden-Pflege in Worms bedeutet' sinnvoller?" Deshalb hier die Definition; die Ortsprosa
          // (d.einleitung) und „<Ort> in Zahlen" stehen jetzt im Abschnitt „Was in <Ort> anders ist".
          einleitungTitel={`Was 24-Stunden-Pflege in ${d.ort} bedeutet`}
          einleitung={<OrtWasBedeutetText />}
          aktualisiert={d.aktualisiert}
          lesezeit={d.lesezeit ?? '6 Min.'}
          knopf={{ href: `https://kostenrechner.primundus.de/?start=1&src=${src}`, text: 'Preis & Betreuungskräfte ansehen' }}
          knopfOben
          unterzeile={<StandardUnterzeile ort={d.ort} />}
          person={<AnsprechpartnerinGross ort={d.ort} nummer={MUENCHNER_UMLAND.has(d.slug)} siegel={siegel} />}
        />

        <RatgeberRumpf abschnitte={sections} src={src}>
          {/* 1 — was sie tut (die Definition steht im Kopf) */}
          <OrtAufgaben />

          {/* 2 — der Ablauf: die drei Rechner-Schritte mit Bild, darunter der erste Störer (Position „ablauf") */}
          <OrtAblauf ort={d.ort} src={mitPosition(src, 'ablauf')} />

          {/* 3 — Kosten: Preis-Frage mit Knopf, Heim-Eigenanteil im Land, Kasse */}
          <OrtKosten slug={d.slug} ort={d.ort} land={d.land} />

          {/* 4 — passt das? Situationen + Voraussetzungen */}
          <OrtPasstZuIhnen slug={d.slug} ort={d.ort} />

          {/* 5 — warum wir: Portal-Mockup mit Knopf (Position „kraefte"), sechs Zusagen, zwei Kästen; danach der
              zweite Störer (Position „stoerer") — nach den Kosten steht schon der eigene Preis-Knopf */}
          <OrtWarumPrimundus ort={d.ort} src={mitPosition(src, 'kraefte')} mitKraeften />
          <CtaStoerer src={mitPosition(src, 'stoerer')} ort={d.ort} />

          {/* 6 — dunkel wie überall, Stimmen aus dem Ort zuerst */}
          <Stimmen eingebettet ort={d.ort} anzahl={3} titel={stimmenTitel} />

          {/* 7 — das Örtliche: der Absatz, der bis 24.09. im Kopf stand, die Ortsprosa, der Kreis-Satz, dann
              (Handprosa) „Wohnen in <Ort>" als H3, „<Ort> in Zahlen", zuletzt die unabhängige Beratung als H3 */}
          <Abschnitt id="was-die-pflege-zu" titel={ortTitel}>
            <Text>{d.einleitung}</Text>
            {d.vorOrt.inhalt}
            {d.kreis ? (
              <Text>
                {/* „im" passt für Landkreis (der), Unterallgäu und Westmünsterland (das); „für den ganzen" passte nur für „der" */}
                Das gilt auch {imKreis}: Unsere Betreuungskräfte ziehen in den kleineren Gemeinden ein, in denen sonst
                kaum jemand anbietet — zu denselben Bedingungen wie in {d.ort}.
              </Text>
            ) : null}
            {d.art === 'hand' ? <OrtWohnen slug={d.slug} ort={d.ort} als="h3" /> : null}
            {zahlen.length ? <BlickKasten titel={`${d.ort} in Zahlen`} punkte={zahlen} /> : null}
            <OrtBeratung slug={d.slug} ort={d.ort} als="h3" />
          </Abschnitt>

          {/* 8 — Fragen */}
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
