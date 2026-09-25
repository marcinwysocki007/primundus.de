// Startseite nach dem Vorbild der Kostenrechner-Landingpage (Martin 17.09.2026: „primundus.de Startseite
// müssen wir so machen wie Kostenrechner-Seite, weil wir diesen optimiert haben. Bestpreisgarantie,
// Sternebewertungen, die Punkte etc."). Aufbau und Wortlaut wie kostenrechner.primundus.de, mit den
// Korrekturen der Website: Eigenanteil aus dem Rechner (ab ca. 923 € statt 1.500 €), Nächte „bei Bedarf
// auch nachts" statt „rund um die Uhr", Auszeichnung ohne „Vermittler", Sterne aus echten Bewertungen.
import Image from 'next/image'
import { RechnerBlock } from '@/components/vertrauen/Vertrauen'
import { ABLAUF_SCHRITTE } from '@/components/vertrauen/Ablauf'
import { VORAUSSETZUNGEN } from '@/components/vertrauen/Voraussetzungen'

export const RECHNER_START = 'https://kostenrechner.primundus.de/?start=1&src=apex-startseite'
const GARANTIE = 'https://kostenrechner.primundus.de/bestpreisgarantie'

const KNOPF =
  'inline-flex items-center justify-center gap-2 min-h-[58px] px-8 rounded-2xl bg-pm-coral hover:bg-pm-coral-deep text-white text-[18px] md:text-[19px] font-bold shadow-lift transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pm-taupe'
const AUGENBRAUE = 'text-[13px] md:text-[14px] font-bold uppercase tracking-[0.14em] text-pm-taupe'
const H2 = 'mt-3 text-[30px] md:text-[40px] font-extrabold leading-[1.1] tracking-[-0.03em] text-pm-ink [text-wrap:balance]'

function Haken({ farbe = 'text-pm-coral' }: { farbe?: string }) {
  return (
    <svg className={`w-5 h-5 mt-[3px] flex-none ${farbe}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  )
}

function Kreuz() {
  return (
    <svg className="w-5 h-5 mt-[3px] flex-none text-pm-coral-ink/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" aria-hidden="true">
      <path d="M7 7l10 10M17 7L7 17" />
    </svg>
  )
}

function RechnerKnopf({ className = '' }: { className?: string }) {
  return (
    <a href={RECHNER_START} referrerPolicy="no-referrer-when-downgrade" className={`${KNOPF} ${className}`}>
      Preis &amp; Pflegekräfte ansehen <span aria-hidden="true">→</span>
    </a>
  )
}

// ── 1. Kopf ──────────────────────────────────────────────────────────────────────────────
// Wie im Rechner seit 17.09. (#728): drei Punkte + Bestpreisgarantie (im Baustein RechnerBlock), „Anreise in 3 Tagen
// möglich" steht in der Unterzeile

export function StartKopf() {
  return (
    <section className="bg-pm-paper">
      <div className="max-w-wide mx-auto lg:px-5 lg:pt-12 lg:pb-14 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,560px)] lg:gap-14 lg:items-center">
        {/* Bild: am Handy zuerst, am Computer rechts (wie im Rechner). Am Handy 12:5 (Martin 25.09.: „a ist gut“), damit
            der Knopf schon beim Erstbesuch über der Cookie-Leiste steht — iPhone 13: Knopf 485–545 px, Leiste ab 553 px;
            mit 8:5 lag er darunter. Das Testsieger-Siegel bleibt in Originalgröße („soll nicht kleiner“), die Bestpreis-Plakette
            ist am Handy 26 statt 34 px hoch („bestpreis ist mir etwas zu groß“). */}
        <div className="relative lg:order-2">
          <Image
            src="/images/PM-Header-Shooting_hero-v3.webp"
            alt="Betreuungskraft und Seniorin zu Hause im Wohnzimmer"
            width={1100}
            height={941}
            priority
            sizes="(min-width: 1024px) 560px, 100vw"
            className="w-full h-auto max-lg:aspect-[12/5] max-lg:max-h-[440px] max-lg:object-[50%_30%] object-cover lg:rounded-[24px]"
          />
          <div className="absolute left-4 bottom-4 md:left-5 md:bottom-5 flex items-end gap-3">
            <a href="/testsieger-24-stunden-pflege" aria-label="6× Testsieger DIE WELT — zur Auszeichnung">
              <Image src="/images/siegel-welt-2021-352.webp" alt="Siegel DIE WELT Service-Champions 2021" width={352} height={528} className="h-[92px] md:h-[118px] w-auto rounded-[5px] shadow-[0_4px_14px_rgba(0,0,0,0.25)]" />
            </a>
            <a href={GARANTIE} aria-label="Bestpreisgarantie — mehr Infos" className="bg-white/95 rounded-full px-2.5 py-1.5 shadow-[0_4px_14px_rgba(0,0,0,0.18)]">
              <Image src="/images/bestpreisgarantie-siegel.webp" alt="Primundus Bestpreisgarantie – 6× Preis-Leistungssieger" width={900} height={256} className="h-[26px] md:h-[40px] w-auto" />
            </a>
          </div>
        </div>

        <div className="px-5 pt-5 pb-10 lg:p-0 lg:order-1">
          {/* Augenbraue gehört zur H1: „24-Stunden-Pflege" bleibt Teil der Hauptüberschrift */}
          <h1>
            {/* Wie im Kostenrechner (Martin 24.09.: „warum … in der falschen Farbe und nicht wie im Kostenrechner?“):
                helle Koralle, 14 px halbfett, am Computer 18 px — dieselben Werte wie app/page.tsx im Rechner */}
            <span className="block text-[14px] lg:text-[18px] font-semibold uppercase tracking-[0.07em] lg:tracking-[0.06em] text-pm-coral">24-Stunden-Pflege vom Testsieger</span>
            <span className="sr-only">: </span>
            <span className="mt-2.5 lg:mt-3 block text-[36px] md:text-[50px] lg:text-[56px] font-extrabold leading-[1.04] tracking-[-0.035em] text-pm-ink [text-wrap:balance]">Ihre Eltern müssen nicht ins Heim.</span>
          </h1>
          {/* Die Unterzeile bleibt ÜBER dem Knopf (Martin 24.09.: „der Knopf soll doch nicht über den Untertext“) */}
          <p className="mt-5 text-[18px] md:text-[20px] leading-[1.55] text-pm-body max-w-[36rem]">
            Sehen Sie in 2 Minuten, <strong className="text-pm-ink">was es kostet</strong> und <strong className="text-pm-ink">welche Pflegekräfte verfügbar sind</strong>&nbsp;– <span className="whitespace-nowrap">Anreise in 3 Tagen möglich.</span>
          </p>
          {/* Knopf, Plakette, Punkte und Sterne: derselbe Baustein wie auf allen Seiten, Maße wie im Rechner-Kopf */}
          <div className="mt-7">
            <RechnerBlock src="apex-startseite" />
          </div>
        </div>
      </div>
    </section>
  )
}

// ── 2. Bekannt aus: seit 25.09. in components/vertrauen/BekanntAus.tsx (auch im Ratgeber-Kopf) ──
export { BekanntAus } from '@/components/vertrauen/BekanntAus'

// ── 3. Bestpreisgarantie und Testsieger: siehe VertrauensKarten in components/vertrauen/Vertrauen.tsx ─────────────

// ── 4. So funktioniert's ────────────────────────────────────────────────────────────────────
// Wortlaut wie im Rechner (HowItWorks.tsx) — seit 24.09. aus components/vertrauen/Ablauf.tsx, dieselbe Quelle wie
// die Ortsseiten (Martin 24.09.: „Ablauf ist der alte" — dort stand noch die Fassung vor „Kontakt zuerst").
const SCHRITTE = ABLAUF_SCHRITTE

export function SoFunktionierts() {
  return (
    <section className="bg-pm-shell px-5 py-16 lg:py-24">
      <div className="max-w-wide mx-auto">
        <p className={AUGENBRAUE}>So funktioniert&apos;s</p>
        <h2 className={H2}>In 2 Minuten zu Ihrem persönlichen Angebot</h2>
        <ol className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
          {SCHRITTE.map((s, i) => (
            <li key={s.titel} className="flex md:block gap-5">
              <span className="flex-none w-12 h-12 md:w-14 md:h-14 rounded-full bg-pm-cocoa text-white flex items-center justify-center text-[20px] font-bold">{i + 1}</span>
              <div className="md:mt-5">
                <p className="text-[19px] font-bold leading-[1.3] tracking-[-0.015em] text-pm-ink">{s.titel}</p>
                <p className="mt-2 text-[16.5px] leading-[1.6] text-pm-body">{s.text}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-pm-mint px-3 py-1 text-[13.5px] font-semibold text-pm-green-deep">✓ {s.marke}</span>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-12 text-center">
          <RechnerKnopf className="w-full sm:w-auto" />
        </div>
      </div>
    </section>
  )
}

// ── 5. Was ist 24-Stunden-Pflege? ───────────────────────────────────────────────────────────
const KONZEPT = [
  { titel: 'Leben zu Hause', text: 'Ihr Angehöriger bleibt in seiner vertrauten Umgebung, mit seinen Möbeln, Erinnerungen und Gewohnheiten.' },
  { titel: 'Persönliche Betreuung', text: 'Eine Bezugsperson, die sich nur um Ihren Angehörigen kümmert – keine wechselnden Schichten.' },
  { titel: 'Flexible Gestaltung', text: 'Der Tagesablauf richtet sich nach den Bedürfnissen und Wünschen Ihres Angehörigen.' },
  { titel: 'Entlastung für Familien', text: 'Sie können sich als Angehöriger zurücklehnen und wieder Zeit für sich selbst haben.' },
]

export function WasIst() {
  return (
    <section className="bg-white px-5 py-16 lg:py-24">
      <div className="max-w-[900px] mx-auto">
        <p className={`${AUGENBRAUE} text-center`}>Das Betreuungskonzept</p>
        <h2 className={`${H2} text-center`}>Was ist 24-Stunden-Pflege?</h2>
        <p className="mt-5 text-[18px] leading-[1.65] text-pm-body text-center max-w-[44rem] mx-auto">
          Bei der 24-Stunden-Betreuung zieht eine Betreuungskraft bei Ihrem pflegebedürftigen Angehörigen ein und unterstützt ihn im Alltag – im vertrauten Zuhause und bei Bedarf auch nachts.
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {KONZEPT.map((k) => (
            <li key={k.titel} className="bg-pm-paper rounded-[18px] p-6">
              <p className="text-[18px] font-bold text-pm-ink">{k.titel}</p>
              <p className="mt-2 text-[16.5px] leading-[1.6] text-pm-body">{k.text}</p>
            </li>
          ))}
        </ul>
        <p className="mt-5 rounded-[18px] border-l-4 border-pm-green bg-pm-mint p-5 text-[16.5px] leading-[1.6] text-pm-ink">
          <strong>Wichtig zu wissen:</strong> Die Betreuungskraft lebt im Haushalt und hat geregelte Arbeitszeiten mit Pausen und Ruhezeiten. Sie unterstützt bei alltäglichen Aufgaben, ersetzt aber keine medizinische Pflege durch Fachkräfte.
        </p>
      </div>
    </section>
  )
}

// ── 6. Voraussetzungen ──────────────────────────────────────────────────────────────────────
// Wortlaut seit 24.09. aus components/vertrauen/Voraussetzungen.tsx — dieselbe Quelle wie die Ortsseiten.

export function Voraussetzungen() {
  return (
    <section className="bg-pm-paper px-5 py-16 lg:py-24">
      <div className="max-w-[900px] mx-auto">
        <p className={`${AUGENBRAUE} text-center`}>Voraussetzungen</p>
        <h2 className={`${H2} text-center`}>Ist 24-Stunden-Pflege für Sie geeignet?</h2>
        <p className="mt-5 text-[18px] leading-[1.65] text-pm-body text-center max-w-[40rem] mx-auto">
          Die meisten Familien erfüllen die Voraussetzungen problemlos. Prüfen Sie selbst, ob die 24-Stunden-Betreuung für Ihre Situation passt:
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {VORAUSSETZUNGEN.map((v) => (
            <li key={v.titel} className="flex gap-3 bg-white rounded-[18px] shadow-lift p-6">
              <Haken farbe="text-pm-green" />
              <div>
                <p className="text-[18px] font-bold text-pm-ink">{v.titel}</p>
                <p className="mt-1.5 text-[16.5px] leading-[1.6] text-pm-body">{v.text}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-8 rounded-[20px] bg-pm-mint p-7 md:p-9 text-center">
          <p className="text-[22px] font-bold text-pm-ink">Sie sind unsicher?</p>
          <p className="mt-2 text-[17px] leading-[1.6] text-pm-body max-w-[36rem] mx-auto">Wir beraten Sie kostenlos und unverbindlich, ob die 24-Stunden-Betreuung für Ihre Situation die richtige Lösung ist.</p>
          <RechnerKnopf className="mt-6 w-full sm:w-auto" />
          <p className="mt-4 text-[16px] text-pm-body">
            Lieber sprechen? <a href="tel:+4989200000830" className="font-semibold text-pm-ink underline decoration-pm-taupe/40 underline-offset-4">089 200 000 830</a>
          </p>
        </div>
      </div>
    </section>
  )
}

// ── 7. Kostenvergleich ──────────────────────────────────────────────────────────────────────
export function HeimVergleich() {
  return (
    <section className="bg-white px-5 py-16 lg:py-24">
      <div className="max-w-[900px] mx-auto">
        <p className={`${AUGENBRAUE} text-center`}>Kostenvergleich</p>
        <h2 className={`${H2} text-center`}>24h-Pflege vs. Pflegeheim</h2>
        <p className="mt-5 text-[18px] leading-[1.65] text-pm-body text-center max-w-[40rem] mx-auto">
          Die 24-Stunden-Betreuung zu Hause ist nicht nur persönlicher, sondern meist auch deutlich günstiger als ein Pflegeheimplatz.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-[20px] border-2 border-pm-line bg-pm-paper p-7">
            <p className="text-[22px] font-bold text-pm-ink text-center">Pflegeheim</p>
            <ul className="mt-5 grid gap-2.5">
              {['Umzug in eine fremde Umgebung', 'Doppelzimmer möglich', 'Abläufe nach Dienstplan', 'Pflegepersonal für viele Bewohner'].map((p) => (
                <li key={p} className="flex gap-3 text-[16.5px] text-pm-body"><Kreuz /><span>{p}</span></li>
              ))}
            </ul>
            <div className="mt-6 border-t-2 border-pm-line pt-5 text-center">
              <p className="text-[15px] text-pm-body">Eigenanteil im Schnitt pro Monat</p>
              <p className="mt-1 text-[40px] font-extrabold tracking-[-0.02em] text-pm-coral-ink">3.364 €</p>
            </div>
          </div>
          <div className="relative rounded-[20px] border-2 border-pm-green/60 bg-pm-mint p-7">
            <span className="absolute -top-3.5 right-6 rounded-full bg-pm-green px-4 py-1 text-[12.5px] font-bold uppercase tracking-[0.08em] text-white">Empfohlen</span>
            <p className="text-[22px] font-bold text-pm-ink text-center">24h-Pflege zu Hause</p>
            <ul className="mt-5 grid gap-2.5">
              {['Im gewohnten Zuhause bleiben', '1:1-Betreuung, bei Bedarf auch nachts', 'Familie bleibt in der Nähe', 'Individuelle Tagesgestaltung'].map((p) => (
                <li key={p} className="flex gap-3 text-[16.5px] text-pm-ink"><Haken farbe="text-pm-green" /><span>{p}</span></li>
              ))}
            </ul>
            <div className="mt-6 border-t-2 border-pm-green/30 pt-5 text-center">
              <p className="text-[15px] text-pm-body">Selbst zu tragen bei Pflegegrad 3</p>
              <p className="mt-1 text-[40px] font-extrabold tracking-[-0.02em] text-pm-green-deep">ab ca. 923 €</p>
              <p className="text-[15px] font-semibold text-pm-green-deep">Beim Grundpreis rund 2.440 € weniger im Monat</p>
            </div>
          </div>
        </div>
        <p className="mt-6 text-[14.5px] leading-[1.6] text-pm-mute text-center max-w-[44rem] mx-auto">
          Pflegeheim: bundesweiter Durchschnitt, vdek, Stand 1. Juli 2026. 24-Stunden-Pflege: eine Person, nach Pflegegeld, Entlastungsbudget und Steuerermäßigung, Werte aus unserem Kostenrechner; zzgl. An- und Abreise.
        </p>
        <div className="mt-8 text-center">
          <RechnerKnopf className="w-full sm:w-auto" />
        </div>
      </div>
    </section>
  )
}

// ── 8. Rundum versorgt ──────────────────────────────────────────────────────────────────────
const AUFGABEN = ['Körperpflege & Hygiene', 'Mahlzeiten zubereiten', 'Arztbegleitung & Termine', 'Haushalt & Einkäufe', 'Gesellschaft & Gespräche', 'Medikamentenerinnerung']
const WARUM = [
  { titel: 'Testsieger DIE WELT · 6× in Folge', text: 'Mehrfach ausgezeichnet' },
  { titel: 'Täglich kündbar', text: 'Keine Mindestlaufzeit' },
  { titel: 'Taggenau abgerechnet', text: 'Sie zahlen nur die Tage mit Betreuung' },
  { titel: 'Zahlbar erst ab Einsatzbeginn', text: 'Keine Vorauszahlung' },
]

export function RundumVersorgt() {
  return (
    <section className="bg-pm-paper px-5 py-16 lg:py-24">
      <div className="max-w-wide mx-auto">
        <h2 className={`${H2} text-center`}>Rundum versorgt – zu Hause, im gewohnten Alltag</h2>
        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center">
          <Image src="/images/primundus_haeusliche_betreuung.webp" alt="Häusliche Betreuung bei Primundus" width={1536} height={1024} sizes="(min-width: 1024px) 560px, 100vw" className="w-full h-auto rounded-[20px] object-cover" />
          <div>
            <p className="text-[18px] leading-[1.65] text-pm-body">Ihre Betreuungskraft ist täglich für Ihren Angehörigen da – nicht nur für die Pflege, sondern für den ganzen Alltag:</p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {AUFGABEN.map((a) => (
                <li key={a} className="flex gap-3 text-[17px] text-pm-ink"><Haken farbe="text-pm-taupe" /><span>{a}</span></li>
              ))}
            </ul>
            <div className="mt-8 bg-white rounded-[20px] shadow-lift p-6 md:p-7">
              <p className="text-[20px] font-bold text-pm-taupe-ink text-center">Warum Primundus</p>
              <ul className="mt-5 grid grid-cols-2 gap-5">
                {WARUM.map((w) => (
                  <li key={w.titel} className="text-center">
                    <p className="text-[16px] font-bold leading-[1.35] text-pm-ink">{w.titel}</p>
                    <p className="mt-1 text-[14.5px] text-pm-body/80">{w.text}</p>
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-6 text-[16px] text-pm-body text-center">Sie gehen kein Risiko ein. Kein Vertrag auf Mindestlaufzeit, keine versteckten Kosten.</p>
            <div className="mt-5 text-center">
              <RechnerKnopf className="w-full sm:w-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
