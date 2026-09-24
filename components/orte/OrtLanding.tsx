// Die Ortsseite in der Form des Kostenrechners (24.09.2026): dieselben Inhalte wie die Artikel-Bausteine in
// components/orte/*, aber als Sektionen voller Breite mit Luft, Karten und je einem Knopf — wie die Startseite.
//
// Martin 24.09.: „Müsste die Ortsseite nicht so aufgebaut werden wie der Kostenrechner? Super Header, sofort die
// Punkte, Schritt für Schritt, Störer, was ist 24-Stunden-Pflege, Voraussetzungen — viel ruhiger, viel klarer."
// Reihenfolge nach den Einwänden einer kalten Besucherin (Plan 24.09., Selbstkritik): Preis zuerst, dann Ablauf,
// dann was die Kraft tut, passt es, warum wir. Kein eigener Preis (23.09.), keine Nummer außer Hamburg/München-Umland.
import Image from 'next/image'
import { AblaufSpalten } from '@/components/vertrauen/Ablauf'
import { CtaStoerer } from '@/components/vertrauen/Stoerer'
import { ProduktBuehne } from '@/components/vertrauen/ProduktBuehne'
import { GARANTIE, MartaBand, VertrauensKarten, rechnerLink } from '@/components/vertrauen/Vertrauen'
import { VoraussetzungenListe } from '@/components/vertrauen/Voraussetzungen'
import { MehrDazu } from '@/components/vorlage/Ratgeber'
import { SEKTION_H3, SEKTION_KNOPF, Sektion } from '@/components/vorlage/Sektion'
import { HEIM_EIGENANTEIL, HEIM_EIGENANTEIL_BUND } from '@/lib/heimkosten'
import { PFLEGEGELD } from '@/lib/fakten'
import { ORTE_LAGE } from '@/lib/orte-lage'
import { AUFGABEN_PUNKTE, GRUNDLAGEN_LINKS, ZUSAGEN } from './OrtGrundlagen'
import { KOSTEN_ZAHLEN, KassenTabellen } from './OrtKosten'

const LINK = 'text-pm-taupe font-semibold hover:underline'

function Haken({ farbe = 'text-pm-green' }: { farbe?: string }) {
  return (
    <svg className={`mt-[3px] h-5 w-5 flex-none ${farbe}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  )
}

function Kreuz() {
  return (
    <svg className="mt-[3px] h-5 w-5 flex-none text-pm-coral-ink/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" aria-hidden="true">
      <path d="M7 7l10 10M17 7L7 17" />
    </svg>
  )
}

function Knopf({ src, className = '' }: { src: string; className?: string }) {
  return (
    <a href={rechnerLink(src)} referrerPolicy="no-referrer-when-downgrade" className={`${SEKTION_KNOPF} ${className}`}>
      Preis &amp; Pflegekräfte ansehen <span aria-hidden="true">→</span>
    </a>
  )
}

/** 2 · Kosten: Heimplatz im Land gegen zu Hause — ohne eigenen Preis, mit den Zuschüssen, die wir nennen dürfen */
export function OrtKostenLanding({ slug, ort, land, src }: { slug: string; ort: string; land: string; src: string }) {
  const heim = HEIM_EIGENANTEIL[land] ?? HEIM_EIGENANTEIL_BUND
  const heimWo = HEIM_EIGENANTEIL[land] ? `in ${land}` : 'in Deutschland'
  const { eur, summePg3 } = KOSTEN_ZAHLEN
  return (
    <Sektion
      id="kosten-und-kassenzuschuesse-in"
      augenbraue="Kosten"
      titel={`Was es in ${ort} kostet und was die Kasse zahlt`}
      einleitung="Der Monatspreis hängt vom Pflegebedarf ab und davon, wie gut die Betreuungskraft Deutsch spricht. Der Kostenrechner zeigt ihn Ihnen in 2 Minuten — samt Zuschüssen der Pflegekasse und Steuervorteil."
      ton="weiss"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-[20px] border-2 border-pm-line bg-pm-paper p-7">
          <p className="text-[22px] font-bold text-pm-ink">Pflegeheim {heimWo}</p>
          <ul className="mt-5 grid gap-2.5">
            {['Umzug in eine fremde Umgebung', 'Doppelzimmer möglich', 'Abläufe nach Dienstplan', 'Pflegepersonal für viele Bewohner'].map((p) => (
              <li key={p} className="flex gap-3 text-[16.5px] text-pm-body"><Kreuz /><span>{p}</span></li>
            ))}
          </ul>
          <div className="mt-6 border-t-2 border-pm-line pt-5">
            {/* OpenAI-Prüfung 24.09.: Eigenanteil (was man zahlt) und Zuschuss (was man bekommt) sind verschiedene
                Größen — deshalb beide Zahlen ausdrücklich so beschriftet, nicht als zwei „Preise" nebeneinander. */}
            <p className="text-[15px] text-pm-body">Das zahlen Sie selbst — im Schnitt pro Monat</p>
            <p className="mt-1 text-[40px] font-extrabold tracking-[-0.02em] text-pm-coral-ink">{eur(heim)}</p>
            <p className="text-[14px] text-pm-mute">Eigenanteil im ersten Heimjahr nach allen Kassenleistungen (vdek, 07/2026)</p>
          </div>
        </div>
        <div className="relative rounded-[20px] border-2 border-pm-green/60 bg-pm-mint p-7">
          <span className="absolute -top-3.5 right-6 rounded-full bg-pm-green px-4 py-1 text-[12.5px] font-bold uppercase tracking-[0.08em] text-white">Zu Hause</span>
          <p className="text-[22px] font-bold text-pm-ink">24-Stunden-Pflege zu Hause</p>
          <ul className="mt-5 grid gap-2.5">
            {['Im gewohnten Zuhause bleiben', '1:1-Betreuung, bei Bedarf auch nachts', 'Familie bleibt in der Nähe', 'Individuelle Tagesgestaltung'].map((p) => (
              <li key={p} className="flex gap-3 text-[16.5px] text-pm-ink"><Haken /><span>{p}</span></li>
            ))}
          </ul>
          <div className="mt-6 border-t-2 border-pm-green/30 pt-5">
            <p className="text-[15px] text-pm-body">Das bekommen Sie dazu — Zuschüsse bei Pflegegrad 3</p>
            <p className="mt-1 text-[40px] font-extrabold tracking-[-0.02em] text-pm-green-deep">bis zu ca. {eur(summePg3)}</p>
            <p className="text-[14px] text-pm-mute">im Monat von Pflegekasse und Finanzamt</p>
            <p className="mt-2 text-[15px] font-semibold text-pm-green-deep">Ihren Monatspreis sehen Sie sofort im Rechner</p>
          </div>
          <div className="mt-6">
            <Knopf src={src} className="w-full sm:w-auto" />
          </div>
        </div>
      </div>
      <p className="mt-6 max-w-[44rem] text-[14.5px] leading-[1.6] text-pm-mute">
        Pflegeheim: Eigenanteil im ersten Heimjahr {heimWo}, vdek, Stand 1. Juli 2026. Zuschüsse zu Hause: Pflegegeld {eur(PFLEGEGELD[3])} nach
        § 37 SGB XI, Entlastungsbudget anteilig ca. {eur(KOSTEN_ZAHLEN.budgetMonat)} nach § 39 und § 45b SGB XI, Steuerermäßigung bis {eur(KOSTEN_ZAHLEN.steuerMonat)} nach
        § 35a EStG — eine Person, Pflegegrad 3. Der Eigenanteil im Heim und die Zuschüsse zu Hause sind verschiedene Größen:
        Was zu Hause nach Zuschüssen bei Ihnen bleibt, zeigt der Kostenrechner.
      </p>
      <div className="mt-12 flex max-w-[46rem] flex-col gap-6">
        <KassenTabellen slug={slug} land={land} />
      </div>
    </Sektion>
  )
}

/** 3 · Ablauf: die drei Rechner-Schritte in drei Spalten mit Bild, dahinter das eine dunkle Band */
export function OrtAblaufLanding({ ort, src }: { ort: string; src: string }) {
  return (
    <>
      <Sektion id="ablauf" augenbraue="So funktioniert's" titel="So läuft es ab: von der Anfrage bis zur Anreise" ton="shell" breite="wide">
        <AblaufSpalten />
        <div className="mt-10 lg:mt-14">
          <MehrDazu
            label="Jeder Schritt im Einzelnen:"
            links={[
              { href: '/24-stunden-pflege', text: 'Ablauf, Verträge und was Sie vorbereiten sollten' },
              { href: '/ablauf', text: 'Von der Anfrage bis zur Anreise' },
            ]}
          />
        </div>
      </Sektion>
      <CtaStoerer src={src} ort={ort} band />
    </>
  )
}

/** 4 · Was die Betreuungskraft tut: Bild links, die vier Punkte rechts, dazu die Themen-Links */
export function OrtAufgabenLanding() {
  return (
    <Sektion id="aufgaben" augenbraue="Das Betreuungskonzept" titel="Was eine Betreuungskraft bei Ihnen übernimmt" ton="papier" breite="wide">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <Image
          src="/images/primundus_haeusliche_betreuung.webp"
          alt="Häusliche Betreuung bei Primundus"
          width={1536}
          height={1024}
          sizes="(min-width: 1024px) 540px, 100vw"
          className="h-auto w-full rounded-[24px] object-cover"
          loading="lazy"
        />
        <div>
          <ul className="grid gap-5">
            {AUFGABEN_PUNKTE.map((p) => (
              <li key={p.title} className="flex gap-3">
                <Haken farbe="text-pm-taupe" />
                <div>
                  <p className="text-[18px] font-bold text-pm-ink">{p.title}</p>
                  <p className="mt-1 text-[16.5px] leading-[1.6] text-pm-body">{p.desc}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[16.5px] leading-[1.6] text-pm-body">
            Wie ein Tag mit Betreuungskraft aussieht, steht auf der Seite{' '}
            <a href="/leistungen" className={LINK}>Leistungen</a>.
          </p>
          <div className="mt-4">
            <MehrDazu label="Ausführlich auf den Themenseiten:" links={GRUNDLAGEN_LINKS} />
          </div>
        </div>
      </div>
    </Sektion>
  )
}

const SITUATIONEN = [
  { title: 'Wenn das Alleinleben unsicher wird', desc: 'Ein Sturz, vergessene Medikamente, nachts allein.' },
  { title: 'Bei Demenz', desc: 'Gewohnte Umgebung, über Wochen dieselbe Bezugsperson.' },
  { title: 'Nach einem Krankenhausaufenthalt', desc: 'Die Entlassung kommt oft schneller als die Versorgung.' },
  { title: 'Wenn Angehörige an ihre Grenze kommen', desc: 'Pflege neben Beruf und Familie geht eine Weile gut — nicht für immer.' },
]

/** 5 · Passt das? Situationen und Voraussetzungen als Karten, dann „Sie sind unsicher?" ohne Nummer */
export function OrtPasstLanding({ slug, ort, src }: { slug: string; ort: string; src: string }) {
  const lage = ORTE_LAGE[slug]
  const de = (n: number) => n.toLocaleString('de-DE')
  return (
    <Sektion
      id="passt-zu-ihnen"
      augenbraue="Passt das?"
      titel="Passt 24-Stunden-Pflege zu Ihrer Situation?"
      einleitung="Vier Situationen, in denen Familien sich für Betreuung zu Hause entscheiden — und vier Dinge, die das Zuhause dafür braucht."
      ton="weiss"
    >
      <h3 className={SEKTION_H3}>Wann Betreuung zu Hause sinnvoll ist</h3>
      {lage ? (
        <p className="mt-3 max-w-[44rem] text-[16.5px] leading-[1.6] text-pm-body">
          In {ort} gibt es {de(lage.nurSeniorenHaushalte)} Haushalte, in denen niemand unter 65 lebt (Zensus 2022). In den meisten davon ist
          Betreuung kein Thema. Zum Thema wird sie in diesen vier Situationen:
        </p>
      ) : null}
      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        {SITUATIONEN.map((p) => (
          <li key={p.title} className="rounded-[18px] bg-pm-paper p-6">
            <p className="text-[18px] font-bold text-pm-ink">{p.title}</p>
            <p className="mt-1.5 text-[16.5px] leading-[1.6] text-pm-body">{p.desc}</p>
          </li>
        ))}
      </ul>
      <h3 className={`${SEKTION_H3} mt-12`}>Was das Zuhause dafür braucht</h3>
      <div className="mt-6">
        <VoraussetzungenListe />
      </div>
      {/* Wie der Kasten der Startseite, dann Marta wie überall (MartaBand-Standard; Martin 24.09.: „bei der Frage, ob
          man helfen kann, fehlt Marta mit Bild wie sonst auch immer") — eingebettet zeigt keine Nummer. */}
      <div className="mt-8 rounded-[20px] bg-pm-mint p-7 md:p-9">
        <p className="text-[22px] font-bold text-pm-ink">Sie sind unsicher?</p>
        <p className="mt-2 max-w-[36rem] text-[17px] leading-[1.6] text-pm-body">
          Wir beraten Sie kostenlos und unverbindlich, ob die 24-Stunden-Betreuung für Ihre Situation die richtige Lösung ist.
        </p>
        <Knopf src={src} className="mt-6 w-full sm:w-auto" />
      </div>
      <div className="mt-6">
        <MartaBand eingebettet />
      </div>
    </Sektion>
  )
}

/** 6 · Warum wir: drei Sätze, das Gerät daneben, die sechs Zusagen als Karten, die zwei Kästen.
 * Martin 24.09.: „Da muss stehen: Primundus ist ein Direktanbieter, 6× in Folge ausgezeichnet, Pflegekräfte und Preis
 * direkt online sehen — nicht dieser unnötige Text am Anfang, der auch noch doppelt ist." */
export function OrtWarumLanding({ ort, src }: { ort: string; src: string }) {
  return (
    <Sektion id="warum-primundus" augenbraue="Warum Primundus" titel={`Warum Familien in ${ort} Primundus wählen`} ton="papier" breite="wide">
      <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_300px] md:items-center md:gap-12">
        <div className="min-w-0">
          <p className="max-w-[40rem] text-[19px] leading-[1.6] text-pm-ink md:text-[21px]">
            Primundus ist ein Direktanbieter: Die Betreuungskräfte sind bei uns angestellt. DIE WELT hat uns sechsmal in Folge
            als Testsieger ausgezeichnet. Pflegekräfte und Preis sehen Sie direkt online — bevor Sie einen Vertrag
            unterschreiben.
          </p>
          <div className="mt-7">
            <Knopf src={src} className="w-full sm:w-auto" />
          </div>
        </div>
        <ProduktBuehne garantie={GARANTIE} kompakt />
      </div>
      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ZUSAGEN.map((z) => (
          <li key={z.title} className="rounded-[18px] bg-white p-6 shadow-lift">
            <p className="text-[18px] font-bold leading-[1.3] text-pm-ink">{z.title}</p>
            <p className="mt-1.5 text-[16px] leading-[1.6] text-pm-body">{z.desc}</p>
          </li>
        ))}
      </ul>
      <div className="mt-12">
        <VertrauensKarten raster />
      </div>
    </Sektion>
  )
}

