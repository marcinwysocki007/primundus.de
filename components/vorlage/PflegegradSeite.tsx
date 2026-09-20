// Gemeinsamer Bau der fünf Pflegegrad-Seiten (20.09.2026). Der Text je Pflegegrad steht in lib/pflegegrad-inhalte.ts; hier nur die
// Reihenfolge der Abschnitte, die Tabellen aus lib/fakten und die Daten für Google. Beträge nie hart hineinschreiben.
import { KontaktBand } from '@/components/ArticleCTA'
import {
  Abschnitt, DunklerAbschnitt, Fragen, Kasten, MehrDazu, Punkte, RatgeberKopf, RatgeberRumpf, RechnerKasten, Schritte, Tabelle, Text,
} from '@/components/vorlage/Ratgeber'
import { Weiterlesen } from '@/components/Weiterlesen'
import { ArticleProgressBar } from '@/components/ArticleProgressBar'
import { ArticleTOC } from '@/components/ArticleTOC'
import { aktualisiertAm } from '@/lib/lastmod'
import { PERSON_MARTA_ID } from '@/lib/schema'
import { ENTLASTUNGSBETRAG, ENTLASTUNGSBUDGET, PFLEGEGELD, PFLEGESACHLEISTUNGEN } from '@/lib/fakten'
import { HEIM_LEISTUNG } from '@/lib/heimkosten'
import { ALLE_GRADE, INHALTE, TAGESPFLEGE, type Grad } from '@/lib/pflegegrad-inhalte'

const euro = (n: number) => n.toLocaleString('de-DE') + ' €'
const LINK = 'font-semibold text-pm-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors'
const l = (href: string, text: string) => <a href={href} className={LINK}>{text}</a>

export function pflegegradMetadata(grad: Grad) {
  const i = INHALTE[grad]
  return {
    title: i.titel,
    description: i.beschreibung,
    alternates: { canonical: `https://primundus.de/pflegegrad-${grad}` },
    openGraph: {
      title: i.titel,
      description: i.beschreibung,
      url: `https://primundus.de/pflegegrad-${grad}`,
      siteName: 'Primundus',
      locale: 'de_DE',
      type: 'article' as const,
      images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    },
  }
}

export function PflegegradSeite({ grad }: { grad: Grad }) {
  const i = INHALTE[grad]
  const AKTUALISIERT = aktualisiertAm(`pflegegrad-${grad}`, '20. September 2026')
  const RECHNER = `https://kostenrechner.primundus.de/?start=1&src=apex-pflegegrad-${grad}`
  const g = grad as 2 | 3 | 4 | 5

  const SECTIONS = [
    { id: 'bedeutung', title: `Was Pflegegrad ${grad} bedeutet` },
    { id: 'beispiel', title: 'Beispiel aus dem Rechner' },
    { id: 'leistungen', title: 'Leistungen 2026' },
    { id: 'versorgung', title: 'Versorgung und Kosten' },
    { id: 'beantragen', title: 'Beantragen' },
    ...(i.naechster ? [{ id: 'hoeher', title: `Höherstufung auf ${i.naechster.grad}` }] : []),
    { id: 'alle', title: 'Alle Pflegegrade' },
    { id: 'faq', title: 'Häufige Fragen' },
  ]

  const leistungen: string[][] =
    grad === 1
      ? [
          ['Pflegegeld', '–', 'erst ab Pflegegrad 2'],
          ['Pflegesachleistungen', '–', 'erst ab Pflegegrad 2'],
          ['Entlastungsbetrag', `${euro(ENTLASTUNGSBETRAG)} im Monat`, 'anerkannte Alltagshilfen, Betreuungsgruppen, Tagespflege; gegen Rechnung'],
          ['Pflegehilfsmittel zum Verbrauch', '42 € im Monat', 'Handschuhe, Bettschutz, Desinfektion'],
          ['Wohnumfeld', 'bis 4.180 € je Maßnahme', 'Badumbau, Haltegriffe, Treppenlift'],
          ['Hausnotruf', 'Zuschuss', 'technisches Pflegehilfsmittel'],
          ['Beratung zu Hause', 'alle sechs Monate', 'Anspruch, keine Pflicht (§ 37 Abs. 3)'],
          ['Pflegeheim', `${euro(ENTLASTUNGSBETRAG)} im Monat`, 'Zuschuss der Kasse (§ 43 Abs. 3)'],
        ]
      : [
          ['Pflegegeld', `${euro(PFLEGEGELD[g])} im Monat`, 'Angehörige oder Betreuungskraft pflegen zu Hause (§ 37)'],
          ['Pflegesachleistungen', `${euro(PFLEGESACHLEISTUNGEN[g])} im Monat`, 'ambulanter Pflegedienst (§ 36); mit Pflegegeld kombinierbar'],
          ['Entlastungsbetrag', `${euro(ENTLASTUNGSBETRAG)} im Monat`, 'anerkannte Alltagshilfen, Tagespflege; gegen Rechnung (§ 45b)'],
          ['Entlastungsbudget', `${euro(ENTLASTUNGSBUDGET)} im Jahr`, 'Verhinderungs- und Kurzzeitpflege (§ 42a)'],
          ['Tages- und Nachtpflege', `bis ${euro(TAGESPFLEGE[g])} im Monat`, 'zusätzlich, ohne Anrechnung auf das Pflegegeld (§ 41)'],
          ['Pflegehilfsmittel zum Verbrauch', '42 € im Monat', 'Handschuhe, Bettschutz, Desinfektion (§ 40)'],
          ['Wohnumfeld', 'bis 4.180 € je Maßnahme', 'Badumbau, Haltegriffe, Treppenlift (§ 40)'],
          ['Beratung zu Hause', grad >= 4 ? 'halbjährlich Pflicht, vierteljährlich möglich' : 'alle sechs Monate Pflicht', 'bei Pflegegeld (§ 37 Abs. 3)'],
          ['Pflegeheim', `${euro(HEIM_LEISTUNG[g])} im Monat`, 'Leistungsbetrag der Kasse an das Heim (§ 43)'],
        ]

  const schemaMarkup = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: i.h1,
      author: { '@id': PERSON_MARTA_ID },
      publisher: { '@type': 'Organization', name: 'Primundus', logo: 'https://primundus.de/images/primundus_logo_header.webp' },
      datePublished: '2026-04-25',
      dateModified: AKTUALISIERT.iso,
      mainEntityOfPage: `https://primundus.de/pflegegrad-${grad}`,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
        { '@type': 'ListItem', position: 2, name: 'Pflegegrade', item: 'https://primundus.de/pflegegrade' },
        { '@type': 'ListItem', position: 3, name: `Pflegegrad ${grad}`, item: `https://primundus.de/pflegegrad-${grad}` },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: i.fragen.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      <ArticleProgressBar />
      <div className="lg:hidden">
        <ArticleTOC sections={SECTIONS} />
      </div>

      <div className="bg-pm-paper">
        <RatgeberKopf
          pfad={[
            { label: 'Startseite', href: '/' },
            { label: 'Pflegegrade', href: '/pflegegrade' },
            { label: `Pflegegrad ${grad}` },
          ]}
          augenbraue={`Pflegegrad ${grad} · 2026`}
          titel={i.h1}
          einleitung={i.einleitung}
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="9 Min."
          blick={i.blick}
          blickTitel={`Auf einen Blick: Pflegegrad ${grad}`}
        />

        <RatgeberRumpf abschnitte={SECTIONS}>
          <Abschnitt id="bedeutung" titel={`Was Pflegegrad ${grad} bedeutet: ${i.punkte} Punkte`}>
            <Text>
              Pflegegrad {grad} steht im Gesetz für „{i.name}" (§ 15 SGB XI). Der Medizinische Dienst vergibt ihn, wenn die Begutachtung {i.punkte} Punkte
              ergibt. Die Punkte kommen aus sechs Modulen: Mobilität (10 %), Kognition und Verhalten (15 %), Selbstversorgung (40 %), Umgang mit
              Krankheit und Therapie (20 %), Alltag und Kontakte (15 %). Nicht die Diagnose zählt, sondern was die Person allein schafft. So sieht
              Pflegegrad {grad} im Alltag typischerweise aus:
            </Text>
            <Punkte punkte={i.typisch} />
          </Abschnitt>

          <Abschnitt id="beispiel" titel={`Beispiel: So kommen die Punkte für Pflegegrad ${grad} zusammen`}>
            <Text>
              Gerechnet mit unserem {l('/pflegegrad-rechner', 'Pflegegrad-Rechner')}, der dieselben 64 Kriterien und Punkte nutzt wie der Gutachter
              (Anlage 1 und 2 zu § 15 SGB XI).
            </Text>
            <Tabelle
              titel={i.beispiel.titel}
              kopf={['Modul', 'Einzelpunkte', 'Gewichtet']}
              zeilen={[...i.beispiel.zeilen.map((z) => [z.modul, z.punkte, z.gewichtet]), ['Gesamt', '', i.beispiel.gesamt]]}
              betont={2}
              fuss={i.beispiel.person}
            />
            <Kasten augenbraue="Was das Beispiel zeigt" titel={i.beispiel.fazit} />
          </Abschnitt>

          <Abschnitt id="leistungen" titel={`Leistungen bei Pflegegrad ${grad}: alle Beträge 2026`}>
            <Text>
              Die Beträge gelten seit dem 1. Januar 2025 und bleiben 2026 unverändert; die nächste gesetzliche Anpassung ist für 2028 vorgesehen.
              {grad >= 2 ? ' Pflegegeld und Sachleistungen lassen sich kombinieren: Wer die Hälfte der Sachleistungen nutzt, bekommt die Hälfte des Pflegegelds.' : ''}
            </Text>
            <Tabelle titel={`Pflegegrad ${grad}, Stand 2026`} kopf={['Leistung', 'Betrag', 'Wofür']} zeilen={leistungen} betont={1} fuss="§§ 36, 37, 40, 41, 42a, 43, 45b SGB XI. Bayern zahlt ab Pflegegrad 2 zusätzlich 500 € Landespflegegeld im Jahr." />
            <MehrDazu
              label="Weiter:"
              links={[
                { href: '/pflegegeld', text: 'Pflegegeld 2026' },
                { href: '/finanzierung', text: 'Alle Zuschüsse kombinieren' },
                { href: '/zuschuss-rechner', text: 'Zuschuss-Rechner' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="versorgung" titel={`Versorgung bei Pflegegrad ${grad}: was passt, was es kostet`}>
            <Punkte punkte={i.versorgung} />
            {i.eigenanteil !== null && (
              <Tabelle
                titel={`Betreuungskraft im Haus bei Pflegegrad ${grad}: eine Person, Grundpreis`}
                zeilen={[
                  ['Betreuung ab', euro(i.preis)],
                  ['Pflegegeld', grad >= 2 ? `− ${euro(PFLEGEGELD[g])}` : '–'],
                  ['Entlastungsbudget, anteilig', grad >= 2 ? '− 295 €' : '–'],
                  ['Steuerermäßigung, bis zu', '− 333 €'],
                  ['Selbst zu tragen ab ca.', euro(i.eigenanteil)],
                ]}
                betont={1}
                fuss="Preise aus unserem Kostenrechner, Stand September 2026. Entlastungsbudget, wenn die Kasse den Einsatz als Verhinderungspflege anerkennt. Dazu An- und Abreise 125 € je Strecke; Zimmer, Kost und Logis stellen Sie. Der Entlastungsbetrag ist nicht eingerechnet."
              />
            )}
            <RechnerKasten src={`apex-pflegegrad-${grad}`} />
            <MehrDazu
              label="Weiter:"
              links={[
                { href: '/kosten', text: 'Kosten der 24-Stunden-Pflege 2026' },
                { href: '/pflegeheim-kosten-deutschland', text: 'Pflegeheim-Kosten je Bundesland' },
              ]}
            />
          </Abschnitt>

          <Abschnitt id="beantragen" titel={`Pflegegrad ${grad} beantragen`}>
            <Text>
              Der Antrag geht formlos an die Pflegekasse; die Leistungen laufen ab dem Antragstag. Die Kasse muss spätestens 25 Arbeitstage nach dem
              Antrag entscheiden, im Krankenhaus wird spätestens am fünften Arbeitstag begutachtet.
            </Text>
            <Schritte
              schritte={[
                { title: 'Antrag stellen', desc: 'Schriftlich oder telefonisch bei der Pflegekasse Ihrer Krankenkasse: „Ich beantrage Leistungen der Pflegeversicherung." Datum notieren.' },
                { title: 'Rechner ausfüllen und Pflegetagebuch führen', desc: 'Unser Pflegegrad-Rechner zeigt vorab, wo die Punkte liegen; zwei Wochen Pflegetagebuch belegen, wobei Hilfe nötig ist, wie oft und wann.' },
                { title: 'Begutachtung', desc: 'Der Medizinische Dienst kommt nach Hause. Ein Angehöriger oder der Pflegedienst ist dabei; beschreiben Sie auch die schlechten Tage ehrlich.' },
                { title: 'Bescheid prüfen', desc: `Fällt der Pflegegrad niedriger aus als ${grad}, legen Sie innerhalb eines Monats Widerspruch ein und fordern das Gutachten an.` },
              ]}
            />
            <MehrDazu
              label="Weiter:"
              links={[
                { href: '/pflegegrad-beantragen', text: 'Pflegegrad beantragen: Schritt für Schritt' },
                { href: '/pflegegrad-begutachtung-vorbereiten', text: 'Begutachtung vorbereiten' },
                { href: '/widerspruch-pflegekasse-einlegen', text: 'Widerspruch einlegen' },
              ]}
            />
          </Abschnitt>

          {i.naechster && (
            <DunklerAbschnitt
              id="hoeher"
              titel={`Höherstufung auf Pflegegrad ${i.naechster.grad}`}
              einleitung={`Pflegegrad ${i.naechster.grad} beginnt ${i.naechster.fehlen}. Das bringt ${i.naechster.mehr}. Verschlechtert sich die Situation, stellen Sie jederzeit einen Antrag auf Höherstufung; eine Wartezeit gibt es nicht.`}
              punkte={[
                { title: 'Wann sich der Antrag lohnt', desc: 'Wenn in einem Modul die Stufe kippt: von „überwiegend selbständig" zu „überwiegend unselbständig" beim Waschen, Anziehen, Essen oder Umsetzen, oder wenn nächtliche Unruhe, Abwehr oder Orientierungsverlust dazukommen.' },
                { title: 'So läuft es', desc: 'Formlos bei der Pflegekasse „Höherstufung beantragen", neues Pflegetagebuch und aktuelle Arztberichte beilegen. Der Medizinische Dienst begutachtet erneut; bis zum Bescheid gilt der bisherige Pflegegrad weiter.' },
                { title: 'Vorher rechnen', desc: `Unser Pflegegrad-Rechner zeigt mit dem bisherigen Pflegegrad ${grad} als Vergleich, ob die Punkte für Pflegegrad ${i.naechster.grad} reichen.` },
              ]}
            >
              <MehrDazu
                label="Weiter:"
                links={[
                  { href: '/pflegegrad-erhoehen', text: 'Pflegegrad erhöhen: wann und wie' },
                  { href: `/pflegegrad-${i.naechster.grad}`, text: `Pflegegrad ${i.naechster.grad}: Leistungen und Beträge` },
                ]}
              />
            </DunklerAbschnitt>
          )}

          <Abschnitt id="alle" titel="Alle Pflegegrade im Vergleich">
            <Tabelle
              titel="Punkte und Pflegegeld je Pflegegrad, § 15 und § 37 SGB XI"
              kopf={['Pflegegrad', 'Punkte', 'Pflegegeld', 'Beeinträchtigung']}
              zeilen={ALLE_GRADE.map((a) => [a.grad === grad ? `Pflegegrad ${a.grad} (diese Seite)` : `Pflegegrad ${a.grad}`, a.punkte, a.pflegegeld, a.name])}
              betont={2}
            />
            <MehrDazu
              label="Die anderen Pflegegrade:"
              links={ALLE_GRADE.filter((a) => a.grad !== grad).map((a) => ({ href: `/pflegegrad-${a.grad}`, text: `Pflegegrad ${a.grad}` })).concat([{ href: '/pflegegrade', text: 'Übersicht aller Pflegegrade' }])}
            />
          </Abschnitt>

          <Abschnitt id="faq" titel={`Häufige Fragen zu Pflegegrad ${grad}`}>
            <Fragen fragen={i.fragen} />
            <Text>
              Quellen: § 15 SGB XI mit Anlage 1 und 2 (Punkte), §§ 36, 37, 40, 41, 42a, 43, 45b SGB XI (Leistungen), § 18a und § 18c SGB XI (Fristen),
              vdek-Statistik zum Heim-Eigenanteil (Juli 2026), Preise aus unserem <a href={RECHNER} className={LINK}>Kostenrechner</a>; gelesen am
              20. September 2026.
            </Text>
          </Abschnitt>

          <Weiterlesen aktuell={`pflegegrad-${grad}`} variante="vorlage" />
        </RatgeberRumpf>

        <KontaktBand />
      </div>
    </>
  )
}
