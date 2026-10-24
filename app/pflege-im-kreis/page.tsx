// /pflege-im-kreis — Kreisvergleich aus der amtlichen Pflegestatistik (Entwurf 02.10.2026, Digital-PR Konzept 1 und 2).
//
// Zweck: eine Quelle, die Redaktionen, Beratungsstellen und Familien für ihren Kreis zitieren und verlinken können —
// jeder Kreis hat den Anker #kreis-<Kreisschlüssel>. Konzept: seo-reports/analysen/linkaufbau-2026-10/digital-pr/
// konzepte.md (Fassung 2, OpenAI-Urteil „umsetzen, aber entschärfen"): amtliche Abgrenzung „zu Hause versorgt",
// keine Bedarfs- oder Mangelaussage aus der Platzdichte, Methodik sichtbar, kein Angebotsblock zwischen den Zahlen,
// ein Hinweis auf Primundus am Ende.
//
// Alle Zahlen kommen aus lib/pflege-kreise.ts (erzeugt von scripts/build-pflege-kreise.mjs); im Text steht keine
// Zahl von Hand, damit der nächste Datenstand nur neu gebaut werden muss. Die Kreise, die der Text nennt (München,
// Landkreis München, niedrigste und höchste Dichte), werden über ihren Kreisschlüssel gelesen.
import type { Metadata } from 'next'
import { KreisTabelle } from '@/components/pflege-kreise/KreisTabelle'
import { Kasten, Punkte, RatgeberKopf, Text } from '@/components/vorlage/Ratgeber'
import { SEKTION_H3, Sektion } from '@/components/vorlage/Sektion'
import { aktualisiertAm } from '@/lib/lastmod'
import { DEUTSCHLAND, KENNZAHLEN, KREISE, STAND, kreisNachAgs } from '@/lib/pflege-kreise'
import { anzahl, eineStelle, inKreisen, prozent, prozentText, veraenderung } from '@/lib/pflege-kreise-format'
import { ORG_ID, PERSON_MARTA_ID } from '@/lib/schema'

const AKTUALISIERT = aktualisiertAm('pflege-im-kreis', '2. Oktober 2026')
const URL = 'https://primundus.de/pflege-im-kreis'
const CSV = '/downloads/pflege-im-kreis-2023.csv'
const LINK = 'font-semibold text-pm-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink transition-colors'
const TABELLEN = [
  { code: '22411-02-05-4', name: 'Pflegebedürftige nach Leistungsart' },
  { code: '22411-01-02-4', name: 'Pflegeeinrichtungen, verfügbare Plätze, Personal' },
  { code: '12411-09-01-4', name: 'Bevölkerung nach Altersgruppen' },
]
const tabelleUrl = (code: string) => `https://www.regionalstatistik.de/genesis/online?operation=table&code=${code}`

const TITEL = 'Pflege im Kreis: Pflegebedürftige und Dauerpflegeplätze in allen 400 Kreisen'
const BESCHREIBUNG =
  'Pflegebedürftige, Anteil zu Hause versorgt, Dauerpflegeplätze je 100 Einwohner ab 80, Entwicklung seit 2019: amtliche Zahlen für alle 400 Kreise.'

export const metadata: Metadata = {
  title: 'Pflege im Kreis: Pflegestatistik und Dauerpflegeplätze je Kreis',
  description: BESCHREIBUNG,
  alternates: { canonical: URL },
  openGraph: {
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    title: 'Pflege im Kreis: Pflegestatistik und Dauerpflegeplätze je Kreis',
    description: BESCHREIBUNG,
    url: URL,
    siteName: 'Primundus',
    locale: 'de_DE',
    type: 'article',
  },
}

// Kreise, die der Text nennt — über den Schlüssel, nicht über den Namen
const muenchen = kreisNachAgs('09162')!
const lkMuenchen = kreisNachAgs('09184')!
const muenchenZusammen = ((muenchen.dp + lkMuenchen.dp) / (muenchen.a80 + lkMuenchen.a80)) * 100
const niedrigste = kreisNachAgs(KENNZAHLEN.niedrigsteD[0])!
const hoechste = kreisNachAgs(KENNZAHLEN.hoechsteD[0])!
const zuHause = KREISE.map((k) => k.zh)
const zhMin = Math.min(...zuHause)
const zhMax = Math.max(...zuHause)

const schemaMarkup = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: TITEL,
    description: BESCHREIBUNG,
    author: { '@id': PERSON_MARTA_ID },
    publisher: { '@id': ORG_ID },
    datePublished: '2026-10-02',
    dateModified: AKTUALISIERT.iso,
    mainEntityOfPage: URL,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Pflege im Kreis: Pflegestatistik für alle 400 Kreise und kreisfreien Städte',
    description:
      'Pflegebedürftige, Anteil der zu Hause Versorgten, verfügbare Plätze für vollstationäre Dauerpflege je 100 Einwohner ab 80 und Veränderung der vollstationär Versorgten 2019 bis 2023 für alle 400 Kreise und kreisfreien Städte in Deutschland. Berechnet aus der Regionaldatenbank Deutschland.',
    url: URL,
    inLanguage: 'de',
    isAccessibleForFree: true,
    creator: { '@id': ORG_ID },
    license: 'https://www.govdata.de/dl-de/by-2-0',
    creditText: 'Primundus auf Basis der Regionaldatenbank Deutschland, © Statistische Ämter des Bundes und der Länder, dl-de/by-2-0',
    isBasedOn: TABELLEN.map((t) => tabelleUrl(t.code)),
    temporalCoverage: '2019/2023',
    spatialCoverage: { '@type': 'Place', name: 'Deutschland' },
    variableMeasured: [
      'Pflegebedürftige',
      'Anteil zu Hause versorgt',
      'Plätze für vollstationäre Dauerpflege je 100 Einwohner ab 80',
      'Veränderung der vollstationär Versorgten 2019 bis 2023',
    ],
    distribution: [{ '@type': 'DataDownload', encodingFormat: 'text/csv', contentUrl: `https://primundus.de${CSV}` }],
    dateModified: AKTUALISIERT.iso,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://primundus.de/' },
      { '@type': 'ListItem', position: 2, name: 'Regionen', item: 'https://primundus.de/regionen' },
      { '@type': 'ListItem', position: 3, name: 'Pflege im Kreis', item: URL },
    ],
  },
]

/** Kennzahl als Kachel: Wert groß, darunter was er misst und der Vergleich */
function Kachel({ wert, text, zusatz }: { wert: string; text: string; zusatz: string }) {
  return (
    <div className="flex flex-col rounded-[20px] bg-white p-5 shadow-lift md:p-6">
      <dt className="order-2 mt-2 text-[16px] leading-[1.4] text-pm-body">{text}</dt>
      <dd className="order-1 text-[30px] font-extrabold leading-none tracking-[-0.02em] text-pm-ink sm:text-[34px] lg:text-[30px]">{wert}</dd>
      <dd className="order-3 mt-2 text-[14px] leading-[1.45] text-pm-mute">{zusatz}</dd>
    </div>
  )
}

export default function PflegeImKreisPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />

      <div className="bg-pm-paper">
        <RatgeberKopf
          pfad={[
            { label: 'Startseite', href: '/' },
            { label: 'Regionen', href: '/regionen' },
            { label: 'Pflege im Kreis' },
          ]}
          augenbraue={`Pflegestatistik · Stand ${STAND.sichtbar}`}
          titel={TITEL}
          einleitung={`Die Tabelle zeigt für alle ${KENNZAHLEN.kreise} Kreise und kreisfreien Städte die Zahl der Pflegebedürftigen und den Anteil, der in der Pflegestatistik als zu Hause versorgt gilt. Dazu kommen die Dauerpflegeplätze der Pflegeheime je 100 Einwohner ab 80 und die Entwicklung seit ${STAND.vergleich}. Alle Zahlen stammen aus der amtlichen Pflegestatistik.`}
          aktualisiert={AKTUALISIERT.sichtbar}
          lesezeit="6 Min."
        />
      </div>

      <Sektion
        id="das-wichtigste"
        augenbraue="Deutschland, Ende 2023"
        titel={`${Math.round(DEUTSCHLAND.zh)} von 100 Pflegebedürftigen gelten als zu Hause versorgt`}
        einleitung="In der Pflegestatistik gilt als zu Hause versorgt, wer nicht vollstationär im Pflegeheim lebt. Das sind Menschen, die nur Pflegegeld bekommen und meist von Angehörigen gepflegt werden, Menschen mit ambulantem Pflegedienst und Menschen mit Pflegegrad 1 ohne Leistungen eines ambulanten Dienstes oder Pflegeheims."
      >
        <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Kachel wert={anzahl(DEUTSCHLAND.p)} text="Pflegebedürftige in Deutschland" zusatz={`Stand ${STAND.sichtbar}`} />
          <Kachel wert={prozent(DEUTSCHLAND.zh)} text="gelten als zu Hause versorgt" zusatz={`Spanne der Kreiswerte: ${eineStelle(zhMin)} bis ${prozent(zhMax)}`} />
          <Kachel
            wert={eineStelle(DEUTSCHLAND.d)}
            text="Dauerpflegeplätze je 100 Einwohner ab 80"
            zusatz={`Spanne der Kreiswerte: ${eineStelle(niedrigste.d)} bis ${eineStelle(hoechste.d)}`}
          />
          <Kachel
            wert={veraenderung(DEUTSCHLAND.ch)}
            text={`vollstationär im Heim Versorgte: Veränderung ${STAND.vergleich} bis 2023`}
            zusatz={`${anzahl(DEUTSCHLAND.v19)} → ${anzahl(DEUTSCHLAND.v)}`}
          />
        </dl>

        <div className="mt-10 flex max-w-[46rem] flex-col gap-6">
          <Text>
            Ohne die Gruppe mit Pflegegrad 1 ohne Leistungen, die {STAND.vergleich} nicht vollständig erfasst war, stieg die Zahl der
            Pflegebedürftigen von Ende {STAND.vergleich} bis Ende 2023 um {prozentText(DEUTSCHLAND.chOhnePg1)}. Die Zahl der
            vollstationär im Heim Versorgten sank im selben Zeitraum um {prozentText(Math.abs(DEUTSCHLAND.ch))}.
            In {KENNZAHLEN.gesunken} der {KENNZAHLEN.kreise} Kreise ging sie zurück, in {KENNZAHLEN.gestiegen} stieg sie
            {KENNZAHLEN.gleich ? `, in ${inKreisen(KENNZAHLEN.gleich)} blieb sie gleich` : ''}. Die Statistik
            zeigt nicht, welche Rolle Kosten, Personal, die Pandemie, Wünsche der Familien oder das Platzangebot dabei spielen.
          </Text>
          <Kasten augenbraue="Was die Zahlen nicht zeigen" titel="Kein Maß für Bedarf oder Mangel">
            <Text>
              Die Zahlen zeigen, wie viele Pflegebedürftige die Statistik in einem Kreis zu Hause und im Heim zählt. Wer im Heim
              lebt oder von einem ambulanten Dienst versorgt wird, zählt dort, wo das Heim oder der Dienst seinen Sitz hat.
              Freie Plätze, Kosten, Wartezeiten und den Bedarf an Pflege erfasst die Statistik nicht. Wenige Dauerpflegeplätze je
              100 Einwohner ab 80 belegen deshalb nicht, dass Plätze fehlen, und viele nicht, dass es genug gibt.
            </Text>
          </Kasten>
          <h3 className={SEKTION_H3}>So lesen Sie eine Zeile: München</h3>
          <Text>
            Ende 2023 waren in München {anzahl(muenchen.p)} Menschen pflegebedürftig. Von ihnen wurden {prozentText(muenchen.zh)}{' '}
            zu Hause versorgt, knapp weniger als im Bund mit {prozentText(DEUTSCHLAND.zh)}. Auf 100 Einwohner ab 80 kamen{' '}
            {eineStelle(muenchen.d)} Dauerpflegeplätze, im Bund {eineStelle(DEUTSCHLAND.d)}. Das ist eine der drei niedrigsten
            Platzdichten der {KENNZAHLEN.kreise} Kreise; einen Mangel belegt das allein nicht. Plätze zählen dort, wo das Heim
            steht, und Heime nehmen auch Menschen aus anderen Kreisen auf. Deshalb gehört das Umland zum Vergleich: Der Landkreis
            München hat {eineStelle(lkMuenchen.d)} Plätze je 100 Einwohner ab 80, Stadt und Landkreis zusammen haben{' '}
            {eineStelle(Math.round(muenchenZusammen * 10) / 10)}.
          </Text>
        </div>
      </Sektion>

      <Sektion
        id="alle-kreise"
        ton="weiss"
        breite="wide"
        augenbraue="Tabelle"
        titel={`Alle ${KENNZAHLEN.kreise} Kreise im Vergleich`}
        einleitung="Suchen Sie nach Kreis oder Stadt, oder wählen Sie ein Bundesland. Jeder Kreis hat einen eigenen Link: Klicken Sie auf den Kreisnamen, dann können Sie den Link aus der Adresszeile kopieren."
      >
        <KreisTabelle />
        <div className="mt-8 flex max-w-[52rem] flex-col gap-3 text-[15px] leading-[1.6] text-pm-body">
          <p>
            ¹ alle außer den vollstationär im Heim Versorgten · ² verfügbare Plätze für die vollstationäre Dauerpflege · ³ Ende
            2023 gegenüber Ende {STAND.vergleich}. Erklärungen unter{' '}
            <a href="#methodik" className={LINK}>
              So sind die Zahlen entstanden
            </a>
            .
          </p>
          <p>
            Alle Werte zum Herunterladen:{' '}
            <a href={CSV} download className={LINK}>
              Tabelle als CSV
            </a>{' '}
            ({KENNZAHLEN.kreise} Kreise und Deutschland, Semikolon-getrennt, mit Quellenangabe).
          </p>
        </div>
      </Sektion>

      <Sektion id="methodik" augenbraue="Methodik" titel="So sind die Zahlen entstanden">
        <Punkte
          punkte={[
            {
              title: <span id="methodik-quelle">Quelle und Stand</span>,
              desc: (
                <>
                  Pflegestatistik der Statistischen Ämter des Bundes und der Länder, Kreisergebnisse aus der Regionaldatenbank
                  Deutschland. Pflegeheime und ambulante Dienste melden zum 15. Dezember, die Pflegekassen die Empfänger von
                  Pflegegeld zum 31. Dezember. Die Einwohnerzahlen sind der Stand vom 31. Dezember 2023. Sie beruhen auf dem Zensus
                  2022. Die Pflegestatistik erscheint alle zwei Jahre; Kreiswerte für Dezember 2025 sind noch nicht veröffentlicht.
                </>
              ),
            },
            {
              title: <span id="methodik-zu-hause" className="md:scroll-mt-[40px]">Zu Hause versorgt ¹</span>,
              desc: (
                <>
                  Alle Pflegebedürftigen außer denen, die vollstationär im Pflegeheim leben, in Dauer- oder Kurzzeitpflege. Das
                  Statistische Bundesamt grenzt genauso ab. Ob jemand allein, mit Angehörigen oder in einer Wohngemeinschaft
                  lebt, erfasst die Statistik nicht.
                </>
              ),
            },
            {
              title: <span id="methodik-plaetze" className="md:scroll-mt-[40px]">Dauerpflegeplätze je 100 Einwohner ab 80 ²</span>,
              desc: (
                <>
                  Verfügbare Plätze in Pflegeheimen für die vollstationäre Dauerpflege, geteilt durch die Einwohner ab 80 Jahren.
                  Andere Heimplätze zählen nicht mit. Die Altersgrenze ist eine Näherung, weil auch Jüngere im Heim leben. Ob
                  Plätze frei sind, was sie kosten und wen ein Heim aufnimmt, zeigt der Wert nicht.
                </>
              ),
            },
            {
              title: <span id="methodik-standort">Wo jemand gezählt wird</span>,
              desc: (
                <>
                  Wer im Pflegeheim lebt oder von einem ambulanten Dienst versorgt wird, zählt in dem Kreis, in dem das Heim oder
                  der Dienst seinen Sitz hat. Wer nur Pflegegeld bekommt, zählt an seinem Wohnort. Städte mit vielen Heimen
                  wirken deshalb heimlastig, ihr Umland häuslicher. Vergleichen Sie Städte mit ihrem Umland zusammen oder Kreise
                  gleicher Art untereinander; dafür gibt es über der Tabelle den Filter „Art des Kreises“.
                </>
              ),
            },
            {
              title: <span id="methodik-veraenderung" className="md:scroll-mt-[40px]">Veränderung seit {STAND.vergleich} ³</span>,
              desc: (
                <>
                  Vollstationär im Heim Versorgte (Dauer- und Kurzzeitpflege) Ende 2023 gegenüber Ende {STAND.vergleich}. Für alle Pflegebedürftigen
                  vergleichen wir keine Kreise, weil die Gruppe mit Pflegegrad 1 ohne Leistungen {STAND.vergleich} nicht
                  vollständig erfasst war; die Bundeszahl oben ist ohne diese Gruppe gerechnet. Anteile an der Bevölkerung
                  vergleichen wir nicht über die Jahre: Die Einwohnerzahlen für {STAND.vergleich} beruhen auf dem Zensus 2011,
                  die für 2023 auf dem Zensus 2022.
                </>
              ),
            },
            {
              title: <span id="methodik-gebietsstand">Gebietsstand</span>,
              desc: (
                <>
                  Die Zahlen gelten für die Kreise, wie sie Ende 2023 bestanden. Eisenach gehört seit Juli 2021 zum
                  Wartburgkreis; für den Vergleich mit {STAND.vergleich} sind beide zusammengezählt. Hanau ist seit 1. Januar
                  2026 kreisfrei und in den Zahlen von 2023 noch Teil des Main-Kinzig-Kreises.
                </>
              ),
            },
            {
              title: <span id="methodik-rundung">Rundung</span>,
              desc: (
                <>
                  Anteile und Plätze je 100 Einwohner sind auf eine Nachkommastelle gerundet, Veränderungen aus den
                  ungerundeten Zahlen berechnet. Leere Felder in der Tabelle zum Herunterladen sind in der Quelle aus Gründen
                  der Geheimhaltung gesperrt.
                </>
              ),
            },
          ]}
        />
      </Sektion>

      <Sektion id="quellen" ton="weiss" augenbraue="Quellen und Zitieren" titel="Die Daten dürfen Sie mit Quellenangabe verwenden">
        <div className="flex max-w-[46rem] flex-col gap-6">
          <Text>
            Die Zahlen stammen von den Statistischen Ämtern des Bundes und der Länder und stehen unter der{' '}
            <a href="https://www.govdata.de/dl-de/by-2-0" rel="license noopener" className={LINK}>
              Datenlizenz Deutschland – Namensnennung – Version 2.0
            </a>
            . Anteile, Plätze je 100 Einwohner ab 80 und Veränderungen hat Primundus daraus berechnet. Die Tabellen der
            Regionaldatenbank Deutschland:
          </Text>
          <ul className="border-t border-pm-line">
            {TABELLEN.map((t) => (
              <li key={t.code} className="border-b border-pm-line py-3 text-[17px] leading-[1.6] text-pm-body">
                <a href={tabelleUrl(t.code)} rel="noopener" className={LINK}>
                  {t.code}
                </a>{' '}
                {t.name}
              </li>
            ))}
          </ul>
          <Kasten augenbraue="Zitiervorschlag">
            <Text>
              Primundus, „Pflege im Kreis“, Stand {STAND.sichtbar}, primundus.de/pflege-im-kreis. Datenbasis: Statistische Ämter
              des Bundes und der Länder, Regionaldatenbank Deutschland, dl-de/by-2-0.
            </Text>
          </Kasten>
          <h3 className={SEKTION_H3}>Über diese Auswertung</h3>
          <Text>
            Primundus bietet Betreuung zu Hause an; die Betreuungskräfte sind bei Primundus angestellt. Diese Seite enthält
            nur amtliche Zahlen und unsere Berechnungen daraus, keine Schätzungen. Fragen zur Auswertung beantworten wir über
            die{' '}
            <a href="/kontakt" className={LINK}>
              Kontaktseite
            </a>
            .
          </Text>
        </div>
      </Sektion>

    </>
  )
}
