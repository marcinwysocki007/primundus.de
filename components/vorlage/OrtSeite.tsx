// Die Vorlage der Standard-Ortsseiten (23.09.2026; Landingpage-Form seit 24.09.2026).
//
// Martin 24.09., 14:20: „Müsste die Ortsseite nicht so aufgebaut werden wie der Kostenrechner? Super Header,
// sofort die Punkte, Schritt für Schritt, Störer, was ist 24-Stunden-Pflege, Voraussetzungen — viel ruhiger,
// viel klarer." Der Unterschied war das Layout: Ratgeber-Spalte mit Seitenleiste gegen Sektionen voller Breite.
// Jetzt die Form der Startseite (components/vorlage/Sektion.tsx), Reihenfolge nach den Einwänden einer kalten
// Besucherin (Plan 24.09., Selbstkritik: Preis vor Ablauf, weil 3.182 Ortsseiten-Impressionen „Kosten" tragen):
//
//   Kopf   Brotkrumen · „6× Testsieger DIE WELT" · H1 · Unterzeile · Knopf, Gesichter, Punkte, Sterne ·
//          „Was 24-Stunden-Pflege in <Ort> bedeutet" (Definition) · Marta mit Siegel      RatgeberKopf
//   1  Bekannt aus                                                   BekanntAus (Startseite)
//   2  Was es in <Ort> kostet und was die Kasse zahlt               OrtKostenLanding (Heim im Land gegen Zuschüsse zu Hause, Tabellen)
//   3  So läuft es ab                                                OrtAblaufLanding (3 Spalten mit Bild) + das eine dunkle Band
//   4  Was eine Betreuungskraft bei Ihnen übernimmt                  OrtAufgabenLanding (Bild + Punkte + Themen-Links)
//   5  Passt 24-Stunden-Pflege zu Ihrer Situation?                   OrtPasstLanding (Situationen, Voraussetzungen, „Sie sind unsicher?")
//   6  Warum Familien in <Ort> Primundus wählen                      OrtWarumLanding (Kräfte-Kasten + Knopf, sechs Zusagen, zwei Kästen)
//   7  Das sagen unsere Familien / Familien aus <Ort> über uns       Stimmen (dunkel, Ort zuerst)
//   8  Pflege vor Ort in <Ort>                                       Lesespalte: Einstieg, Ortsprosa, Kreis, H3 Wohnen, Zahlen, H3 Beratung
//   9  Häufige Fragen + Nachbarorte                                  Fragen, NearbyCities
//      Schluss                                                       KontaktBand (Bühne, Marta)
//
// Kein Verzeichnis, keine Seitenleiste, keine Handy-Pille mehr. Knopfpositionen: kopf, kosten, ablauf, passt,
// kraefte, schluss. Die Artikel-Bausteine (OrtAufgaben, OrtAblauf, OrtKosten, OrtPasstZuIhnen, OrtWarumPrimundus)
// laufen weiter auf München/Hamburg. FEST-Text steht einmal in den Bausteinen; Ablauf und Voraussetzungen teilen
// den Wortlaut mit der Startseite. Was je Ort anders ist, kommt aus OrtDaten (lib/orte-daten.ts). Kein eigener Preis.
import { AnsprechpartnerinGross, KontaktBand } from '@/components/ArticleCTA'
import { NearbyCities } from '@/components/NearbyCities'
import { OrtBeratung } from '@/components/orte/OrtBeratung'
import { OrtWasBedeutetText } from '@/components/orte/OrtGrundlagen'
import { OrtAblaufLanding, OrtAufgabenLanding, OrtKostenLanding, OrtPasstLanding, OrtWarumLanding } from '@/components/orte/OrtLanding'
import { BekanntAus } from '@/components/vertrauen/BekanntAus'
import { OrtWohnen } from '@/components/orte/OrtWohnen'
import { Stimmen } from '@/components/vertrauen/Vertrauen'
import { BlickKasten, Fragen, RatgeberKopf, StandardUnterzeile, Text, mitPosition } from '@/components/vorlage/Ratgeber'
import { Sektion } from '@/components/vorlage/Sektion'
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
          knopf={{ href: `https://kostenrechner.primundus.de/?start=1&src=${src}`, text: 'Preis & Pflegekräfte ansehen' }}
          knopfOben
          logos={false}
          unterzeile={<StandardUnterzeile ort={d.ort} />}
          person={
            d.telefon ? (
              <AnsprechpartnerinGross ort={d.ort} telefon={d.telefon.nummer} telefonAnzeige={d.telefon.anzeige} adresse={d.telefon.adresse} siegel={siegel} />
            ) : (
              <AnsprechpartnerinGross ort={d.ort} nummer={MUENCHNER_UMLAND.has(d.slug)} siegel={siegel} />
            )
          }
        />

      </div>

      {/* Landingpage-Form (24.09., Martin: „wie der Kostenrechner — viel ruhiger, viel klarer"): Sektionen voller
          Breite statt Textspalte mit Seitenleiste. Reihenfolge nach den Einwänden einer kalten Besucherin:
          Beweise im Kopf → Preis → Ablauf → was sie tut → passt es → warum wir → Stimmen → Ort → Fragen. */}
      <BekanntAus />
      <OrtKostenLanding slug={d.slug} ort={d.ort} land={d.land} src={mitPosition(src, 'kosten')} />
      <OrtAblaufLanding ort={d.ort} src={mitPosition(src, 'ablauf')} />
      <OrtAufgabenLanding />
      <OrtPasstLanding slug={d.slug} ort={d.ort} src={mitPosition(src, 'passt')} />
      <OrtWarumLanding ort={d.ort} src={mitPosition(src, 'kraefte')} />
      <Stimmen ort={d.ort} anzahl={6} titel={stimmenTitel} />

      {/* Das Örtliche als ruhige Lesespalte: der Absatz, der bis 24.09. im Kopf stand, die Ortsprosa, der Kreis-Satz,
          dann (Handprosa) „Wohnen in <Ort>" als H3, „<Ort> in Zahlen", zuletzt die unabhängige Beratung als H3 */}
      <Sektion id="was-die-pflege-zu" augenbraue="Vor Ort" titel={ortTitel} ton="weiss" breite="lese" ausrichtung="links">
        <div className="flex flex-col gap-6">
          <Text>{d.einleitung}</Text>
          {d.vorOrt.inhalt}
          {d.kreis ? (
            <Text>
              {/* „im" passt für Landkreis (der), Unterallgäu und Westmünsterland (das); „für den ganzen" passte nur für „der" */}
              Das gilt auch {imKreis}: Unsere Betreuungskräfte ziehen in den kleineren Gemeinden ein, in denen sonst
              kaum jemand anbietet — zu denselben Bedingungen wie in {d.ort}.
            </Text>
          ) : null}
          {(d.wohnenBaustein ?? d.art === 'hand') ? <OrtWohnen slug={d.slug} ort={d.ort} als="h3" /> : null}
          {zahlen.length ? <BlickKasten titel={`${d.ort} in Zahlen`} punkte={zahlen} /> : null}
          <OrtBeratung slug={d.slug} ort={d.ort} als="h3" eigene={d.beratungEigene} />
        </div>
      </Sektion>

      <Sektion id="haeufige-fragen-24h-pflege" titel={faqTitel} ton="papier" breite="lese" ausrichtung="links">
        <Fragen fragen={d.fragen} />
        {/* Nachbarorte: eine Zeile, die Verlinkung zwischen den Ortsseiten bleibt */}
        <div className="pt-12">
          {d.einzugsgebiet ? <Text>{d.einzugsgebiet}</Text> : null}
          <div className="mt-6">
            <NearbyCities current={d.slug} />
          </div>
        </div>
      </Sektion>

      <KontaktBand ohneBewertungen src={`${src}-schluss`} />
    </>
  )
}
