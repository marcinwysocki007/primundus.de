// Vertrauens- und Kontaktbausteine für alle Seiten (Vorschlag 4, 18.09.2026).
// Martin zu den Vorschlägen 1–3: „wir sind ganz weit weg wieder von coolem Design wie auf den anderen", „die Testimonials
// müssen als fester Teil mit hier rein - so schön und horizontal scrollbar", „der Button ist nicht so breit wie die
// passenden Pflegekräfte, wie sonst immer", „rechts so kahl mit Marta", „dann fehlen die Sterne", zuletzt: „komplett den
// Faden verloren". Der Faden: Die Partnerseite ist die Vorlage (Martin 14.09.) — große Überschriften, dunkles Band, echte
// Produktbilder statt Stockfotos, Luft — und ruhig bauen: ein Blickfang, eine Stütze, ein Knopf (Martin 17.09., Preisseite).
// Inhalt wie im Rechner (Knopf, Plakette, vier Punkte, Sterne, Siegel, Marta mit Anrufen und WhatsApp).
import Image from 'next/image'
import type { ReactNode } from 'react'
import { GoogleLogo, Sterne, TrustpilotLogo } from '@/components/bewertungen/Sterne'
import { Karussell } from '@/components/vertrauen/Karussell'
import { ProduktBuehne } from '@/components/vertrauen/ProduktBuehne'
import { alleBewertungen, anzahlText, ladeDirekteBewertungen, schnitt, schnittText, type Bewertung } from '@/lib/bewertungen'
import { ladeGoogleDaten } from '@/lib/google-bewertungen'

export const GARANTIE = 'https://kostenrechner.primundus.de/bestpreisgarantie'
export const WHATSAPP = 'https://wa.me/4989200000830?text=Hallo%20Frau%20Kapcio%2C%20ich%20habe%20eine%20R%C3%BCckfrage%3A'
export const rechnerLink = (src: string) => `https://kostenrechner.primundus.de/?start=1&src=${src}`

const AUGENBRAUE = 'text-[11.5px] font-bold uppercase tracking-[.15em]'
const H2 = 'text-[clamp(28px,3.6vw,42px)] font-extrabold leading-[1.1] tracking-[-0.034em] [text-wrap:balance]'
const FOKUS = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pm-taupe'

// Die Punkte unter dem Rechner-Knopf (Rechner-Kopf seit 17.09.), als vierter die Bestpreisgarantie
const PUNKTE = ['Keine Vermittlungsgebühr', 'Kein Vertrag vor Ihrer Auswahl', 'Täglich kündbar, taggenau abgerechnet']
const KRAEFTE = ['/images/caregivers/pk-1.jpg', '/images/caregivers/pk-2.jpg', '/images/caregivers/pk-3.jpg', '/images/caregivers/pk-4.jpg']
// Zuerst die drei Stimmen zu den häufigsten Bedenken (fremde Person im Haus, Wechsel, Erreichbarkeit), dann neueste
const VORNE = ['k-20260814-andrea', 'k-20260624-ralf', 'k-20260208-andrea']
const MONATE = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']

export async function ladeStimmen(max = 9) {
  const [backend, google] = await Promise.all([ladeDirekteBewertungen(60 * 60), ladeGoogleDaten()])
  const alle = alleBewertungen(google.bewertungen, backend)
  const vorne = VORNE.map((id) => alle.find((b) => b.id === id)).filter((b): b is Bewertung => Boolean(b))
  const rest = alle
    .filter((b) => !VORNE.includes(b.id) && b.sterne >= 4 && (b.text ?? '').length >= 60 && (b.text ?? '').length <= 380)
    .sort((a, b) => b.sortierDatum.localeCompare(a.sortierDatum))
  return { schnitt: schnittText(schnitt(alle)), wert: schnitt(alle), anzahl: alle.length, stimmen: [...vorne, ...rest].slice(0, max) }
}
type Stand = Awaited<ReturnType<typeof ladeStimmen>>

// Haken-Kachel der Partnerseite (.vt__ic)
function Haken({ klein = false }: { klein?: boolean }) {
  return (
    <span aria-hidden="true" className={`${klein ? 'h-[19px] w-[19px] rounded-[6px]' : 'h-[22px] w-[22px] rounded-[7px]'} flex flex-none items-center justify-center bg-pm-coral-tint text-pm-coral`}>
      <svg viewBox="0 0 12 12" className={klein ? 'h-2.5 w-2.5' : 'h-3 w-3'} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.5 6.3l2.3 2.2 4.7-5" />
      </svg>
    </span>
  )
}

export function Punkte({ klein = false }: { klein?: boolean }) {
  const zeile = `flex items-center ${klein ? 'gap-3 text-[15px]' : 'gap-2.5 text-[15px] min-[375px]:text-[15.5px] min-[390px]:gap-3 min-[390px]:text-[16.5px] min-[430px]:text-[17px] sm:text-[17px]'} font-medium leading-[1.4] text-pm-ink`
  return (
    <ul className={`grid ${klein ? 'gap-2.5' : 'gap-3'}`}>
      {PUNKTE.map((p) => (
        <li key={p} className={zeile}>
          <Haken klein={klein} />
          <span>{p}</span>
        </li>
      ))}
      <li className={zeile}>
        <Haken klein={klein} />
        <span>
          Bestpreisgarantie{' '}
          <a href={GARANTIE} className="whitespace-nowrap font-semibold text-pm-green-deep underline decoration-pm-green/40 underline-offset-4 hover:decoration-pm-green-deep">Mehr Infos</a>
        </span>
      </li>
    </ul>
  )
}

function SterneLink({ d, klein = false, dunkel = false }: { d: Stand; klein?: boolean; dunkel?: boolean }) {
  if (!d.anzahl) return null
  return (
    <a href="/erfahrungen" className={`group inline-flex flex-wrap items-center gap-x-2 gap-y-1 sm:gap-x-2.5 ${klein ? 'text-[15px]' : 'text-[15.5px] min-[375px]:text-[16px] min-[414px]:text-[16.5px] sm:text-[16.5px] lg:text-[16px] xl:text-[16.5px] max-[374px]:[&_svg]:h-4 max-[374px]:[&_svg]:w-4 max-sm:[&_svg]:h-[18px] max-sm:[&_svg]:w-[18px]'} ${dunkel ? 'text-pm-deep-body' : 'text-pm-body'}`}>
      <Sterne wert={d.wert} groesse={klein ? 17 : 20} />
      <span>
        <strong className={dunkel ? 'text-pm-deep-ink' : 'text-pm-ink'}>{d.schnitt}</strong> von 5 aus{' '}
        <span className={`whitespace-nowrap underline underline-offset-4 ${dunkel ? 'decoration-pm-deep-body/50 group-hover:decoration-pm-deep-ink' : 'decoration-pm-taupe/40 group-hover:decoration-pm-ink'}`}>{anzahlText(d.anzahl, 'Bewertung', 'Bewertungen')}</span>
      </span>
    </a>
  )
}

/** Der Aufruf, überall gleich: Knopf und Plakette gleich breit, darunter die vier Punkte und die Sterne.
 * punkte=false im Kopf der Kernseiten (Martin 18.09.: Plakette und Sterne unter den Knopf; die Punkte stehen dort im Kasten rechts). */
export async function RechnerBlock({ src, sterne = true, punkte = true }: { src: string; sterne?: boolean; punkte?: boolean }) {
  const d = sterne ? await ladeStimmen(0) : null
  return (
    <div>
      <div className="flex w-full flex-col gap-3 sm:max-w-[420px]">
        <a
          href={rechnerLink(src)}
          referrerPolicy="no-referrer-when-downgrade"
          className={`flex min-h-[60px] w-full items-center justify-center rounded-full bg-pm-coral px-3 text-center text-[15.5px] font-bold text-white shadow-[0_10px_24px_-10px_rgba(231,111,99,0.75)] transition-colors hover:bg-pm-coral-deep min-[360px]:px-4 min-[360px]:text-[16.5px] min-[390px]:text-[17.5px] sm:text-[18px] ${FOKUS}`}
        >
          Preis &amp; Pflegekräfte ansehen&nbsp;→
        </a>
        <a
          href={rechnerLink(src)}
          referrerPolicy="no-referrer-when-downgrade"
          aria-label="Passende Pflegekräfte sofort verfügbar — jetzt ansehen"
          className={`flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full border border-pm-green/25 bg-pm-mint px-2.5 py-[6px] text-[13px] font-medium text-pm-green-deep transition-colors hover:border-pm-green/50 min-[400px]:text-[13.5px] min-[430px]:text-[14px] sm:gap-2.5 sm:text-[14.5px] md:gap-2 md:text-[14px] xl:gap-2.5 xl:text-[14.5px] ${FOKUS}`}
        >
          <span className="flex flex-none -space-x-2">
            {KRAEFTE.map((k, i) => (
              <Image key={k} src={k} alt="" width={28} height={28} className={`h-6 w-6 rounded-full border-2 border-pm-mint object-cover object-top sm:h-7 sm:w-7 md:h-6 md:w-6 xl:h-7 xl:w-7 ${i === 3 ? 'max-[379px]:hidden' : ''}`} />
            ))}
          </span>
          <span className="max-[359px]:hidden">Passende Pflegekräfte sofort verfügbar</span>
          <span className="hidden max-[359px]:inline">Passende Pflegekräfte verfügbar</span>
        </a>
      </div>
      {punkte && (
        <div className="mt-7">
          <Punkte />
        </div>
      )}
      {d && d.anzahl > 0 && (
        <div className={punkte ? 'mt-6' : 'mt-5'}>
          <SterneLink d={d} />
        </div>
      )}
    </div>
  )
}

/** Seitenleiste der Ratgeber (ab 1.024 px). */
export async function LeistenKarte({ src }: { src: string }) {
  const d = await ladeStimmen(0)
  return (
    <div className="rounded-[20px] bg-white p-5 shadow-lift">
      <p className="text-[17px] font-bold leading-[1.3] tracking-[-0.015em] text-pm-ink [text-wrap:balance]">In 2 Minuten wissen Sie, was es kostet und wer zu Ihnen passt</p>
      <a
        href={rechnerLink(src)}
        referrerPolicy="no-referrer-when-downgrade"
        className={`mt-4 flex min-h-[48px] items-center justify-center rounded-full bg-pm-coral px-4 text-center text-[15px] font-semibold text-white transition-colors hover:bg-pm-coral-deep ${FOKUS}`}
      >
        Preis &amp; Pflegekräfte ansehen
      </a>
      <div className="mt-5">
        <Punkte klein />
      </div>
      <div className="mt-5 border-t border-pm-line-soft pt-4">
        <SterneLink d={d} klein />
      </div>
    </div>
  )
}

function monat(b: Bewertung): string {
  const [j, m] = b.sortierDatum.split('-').map(Number)
  return j && m ? `${MONATE[m - 1]} ${j}` : ''
}

function initialen(name: string) {
  return name.split(/\s+/).map((t) => t[0] ?? '').join('').replace(/[^A-ZÄÖÜ]/g, '').slice(0, 2)
}

function StimmeKarte({ b, schmal }: { b: Bewertung; schmal: boolean }) {
  return (
    <li className={`flex-none snap-start ${schmal ? 'w-[86%] sm:w-[62%] md:w-[calc(50%-10px)]' : 'w-[86%] sm:w-[60%] md:w-[calc(50%-10px)] lg:w-[360px]'}`}>
      <figure className="flex h-full flex-col rounded-[20px] bg-white p-6 md:p-7">
        <div className="flex items-center justify-between gap-3">
          <Sterne wert={b.sterne} groesse={18} label={`${b.sterne} von 5 Sternen`} />
          <span className="whitespace-nowrap text-[13px] text-pm-mute min-[360px]:text-[14px]">{monat(b)}</span>
        </div>
        <blockquote className="mt-4 flex-1 text-[17px] leading-[1.65] text-pm-ink [text-wrap:pretty] md:text-[18px]">„{b.text}“</blockquote>
        <figcaption className="mt-6 flex items-center gap-3 border-t border-pm-line-soft pt-5">
          <span aria-hidden="true" className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-pm-shell text-[14px] font-bold text-pm-taupe-ink">
            {initialen(b.name)}
          </span>
          <span className="min-w-0 flex-1 leading-[1.35]">
            <span className="block truncate text-[15.5px] font-semibold text-pm-ink">{b.name}</span>
            {b.ort && <span className="block truncate text-[14px] text-pm-mute">{b.ort}</span>}
          </span>
          {b.quelle === 'google' && (
            <span className="flex-none" aria-label="Google-Bewertung" role="img">
              <GoogleLogo groesse={20} />
            </span>
          )}
          {b.quelle === 'trustpilot' && (
            <span className="flex-none" aria-label="Trustpilot-Bewertung" role="img">
              <TrustpilotLogo groesse={20} />
            </span>
          )}
        </figcaption>
      </figure>
    </li>
  )
}

/** Bewertungen als wischbare Reihe auf dem dunklen Band der Partnerseite. eingebettet = in der Textspalte älterer Seiten. */
export async function Stimmen({ eingebettet = false }: { eingebettet?: boolean } = {}) {
  const d = await ladeStimmen()
  if (!d.stimmen.length) return null
  return (
    <section
      id="kundenstimmen"
      aria-labelledby="stimmen-titel"
      className={eingebettet ? 'my-12 scroll-mt-24 overflow-hidden bg-pm-deep max-md:-mx-5 md:rounded-[28px]' : 'scroll-mt-24 overflow-hidden bg-pm-deep'}
    >
      <div className={eingebettet ? 'px-5 py-12 md:px-10 md:py-14' : 'mx-auto max-w-[1200px] px-5 py-16 md:py-24'}>
        <Karussell
          dunkel
          rand={eingebettet ? '-mx-5 px-5 scroll-px-5 md:-mx-10 md:px-10 md:scroll-px-10' : '-mx-5 px-5 scroll-px-5 min-[1200px]:mr-[calc((1200px-100vw)/2-20px)] min-[1200px]:pr-[calc((100vw-1200px)/2+20px)]'}
          label="Bewertungen von Familien"
          kopf={
            <>
              <p className={`${AUGENBRAUE} text-pm-taupe-light`}>Erfahrungen von Familien</p>
              <h2 id="stimmen-titel" className={`mt-4 ${H2} text-pm-deep-ink`}>Das sagen unsere Familien</h2>
              <div className="mt-5">
                <SterneLink d={d} dunkel />
              </div>
            </>
          }
        >
          {d.stimmen.map((b) => (
            <StimmeKarte key={b.id} b={b} schmal={eingebettet} />
          ))}
        </Karussell>
        <a href="/erfahrungen" className="mt-9 inline-block text-[16px] font-semibold text-pm-deep-ink underline decoration-pm-deep-body/50 underline-offset-4 hover:decoration-pm-deep-ink">
          Alle {d.anzahl} Bewertungen lesen →
        </a>
      </div>
    </section>
  )
}

function TelefonSymbol() {
  return (
    <svg className="h-[18px] w-[18px] flex-none" fill="none" stroke="currentColor" strokeWidth="1.9" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  )
}

function WhatsAppSymbol() {
  return (
    <svg viewBox="0 0 24 24" className="h-[19px] w-[19px] flex-none" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

/** Marta als eigenes ruhiges Band: Foto, Frage, zwei Wege nebeneinander (wie ihre Karte im Rechner und im Kundenportal). */
export function MartaBand({ eingebettet = false }: { eingebettet?: boolean }) {
  const knopf = `inline-flex min-h-[54px] items-center justify-center gap-2.5 rounded-full px-5 text-[16.5px] font-bold transition-colors lg:px-6 ${FOKUS}`
  const lang = eingebettet ? 'hidden' : 'hidden whitespace-nowrap lg:inline'
  const kurz = eingebettet ? '' : 'lg:hidden'
  return (
    <div className={eingebettet ? 'max-md:-mx-5' : 'border-t border-pm-line bg-pm-shell'}>
      <div
        className={`flex flex-col gap-6 ${
          eingebettet
            ? 'bg-pm-shell px-5 py-8 md:rounded-[24px] md:px-8 md:py-7 lg:flex-row lg:flex-wrap lg:items-center lg:justify-between'
            : 'mx-auto max-w-[1200px] px-5 py-10 md:py-12 lg:flex-row lg:items-center lg:justify-between lg:gap-10'
        }`}
      >
        {/* Eingebettet: Knöpfe rutschen in die zweite Zeile, wenn die Spalte schmal ist (Vorlage mit Inhaltsleiste: Band 604–736 px;
            Martin 19.09.: „der eine Button klemmt“). Grundbreite = Foto + Überschrift, damit breite Spalten (820 px) einzeilig bleiben. */}
        <div className={`flex items-center gap-4 md:gap-5 ${eingebettet ? 'lg:grow lg:basis-[356px]' : ''}`}>
          <Image src="/images/marta-kapcio-gesicht.jpg" alt="Marta Kapcio" width={88} height={88} className="h-[68px] w-[68px] flex-none rounded-full object-cover md:h-[88px] md:w-[88px]" />
          <div className="min-w-0">
            <p className={`whitespace-nowrap text-[20px] font-extrabold leading-[1.15] tracking-[-0.025em] text-pm-ink min-[390px]:text-[22px] ${eingebettet ? 'md:text-[24px]' : 'md:text-[28px]'}`}>Lieber erst sprechen?</p>
            <p className="mt-1.5 text-[15.5px] leading-[1.45] text-pm-body min-[390px]:text-[16px] md:text-[17px]">
              Marta Kapcio, Ihre Beraterin · <span className="whitespace-nowrap">täglich 8–20 Uhr</span>
            </p>
          </div>
        </div>
        <div className="grid flex-none grid-cols-2 gap-3 sm:flex">
          <a href="tel:+4989200000830" aria-label="Marta Kapcio anrufen: 089 200 000 830" className={`${knopf} border-2 border-pm-ink/15 bg-white text-pm-ink hover:border-pm-taupe ${eingebettet ? 'sm:min-w-[150px]' : 'sm:min-w-[170px]'}`}>
            <TelefonSymbol />
            <span className={kurz}>Anrufen</span>
            <span className={lang}>089 200 000 830</span>
          </a>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className={`${knopf} bg-[#25D366] text-white hover:bg-[#1FB854] ${eingebettet ? 'sm:min-w-[150px]' : 'sm:min-w-[170px]'}`}>
            <WhatsAppSymbol />
            <span className={kurz}>WhatsApp</span>
            <span className={lang}>WhatsApp schreiben</span>
          </a>
        </div>
      </div>
    </div>
  )
}

const AUFRUF_TITEL = 'In 2 Minuten wissen\u00A0Sie, was es kostet und wer zu Ihnen passt.'
// Text wie im bisherigen Kontaktbereich (live, freigegeben), ohne den letzten Satz — „Kein Vertrag vor Ihrer Auswahl" steht als Punkt darunter
const AUFRUF_TEXT = 'Sie beantworten ein paar Fragen zur Pflegesituation. Danach sehen Sie den Monatspreis und die Betreuungskräfte, die dafür in Frage kommen, mit Foto, Erfahrung und Deutschniveau.'

/** Links der Aufruf, rechts das Produktbild: passende Pflegekräfte, wie das Kundenportal sie zeigt. Darunter Marta. */
export function SchlussAufruf({ src, titelId = 'schluss-titel' }: { src: string; titelId?: string; bild?: string }) {
  return (
    <aside aria-labelledby={titelId}>
      <div className="bg-white">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-5 py-16 md:grid-cols-[minmax(0,1fr)_300px] md:items-center md:gap-10 md:py-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,460px)] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_minmax(0,560px)] xl:gap-16">
          <div className="min-w-0">
            <p className={`${AUGENBRAUE} text-pm-taupe`}>Kostenlos und unverbindlich</p>
            <h2 id={titelId} className="mt-4 text-[clamp(30px,4vw,48px)] font-extrabold leading-[1.06] tracking-[-0.035em] text-pm-ink [text-wrap:balance]">
              {AUFRUF_TITEL}
            </h2>
            <p className="mt-5 max-w-[46ch] text-[18px] leading-[1.6] text-pm-body">{AUFRUF_TEXT}</p>
            <div className="mt-8">
              <RechnerBlock src={src} />
            </div>
          </div>
          <ProduktBuehne garantie={GARANTIE} />
        </div>
      </div>
      <MartaBand />
    </aside>
  )
}

/** Seitenende aller Seiten: Bewertungen zum Wischen, dann Aufruf mit Produktbild, dann Marta. */
export function Schluss({ src, ohneStimmen = false }: { src: string; ohneStimmen?: boolean }) {
  return (
    <>
      {!ohneStimmen && <Stimmen />}
      <SchlussAufruf src={src} />
    </>
  )
}

/** Dasselbe in der Textspalte (51 ältere Seiten mit ArticleCTA): links der Aufruf, rechts die kompakte Bühne, darunter Marta. */
export function SchlussKasten({ src }: { src: string }) {
  return (
    <aside aria-labelledby="schluss-kasten-titel" className="my-12">
      <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_300px] md:items-center md:gap-9">
        <div className="min-w-0">
          <p className={`${AUGENBRAUE} text-pm-taupe`}>Kostenlos und unverbindlich</p>
          <p id="schluss-kasten-titel" className="mt-4 text-[clamp(28px,3.4vw,34px)] font-extrabold leading-[1.08] tracking-[-0.034em] text-pm-ink [text-wrap:balance]">
            {AUFRUF_TITEL}
          </p>
          <p className="mt-4 text-[18px] leading-[1.6] text-pm-body">{AUFRUF_TEXT}</p>
          <div className="mt-7">
            <RechnerBlock src={src} />
          </div>
        </div>
        <ProduktBuehne garantie={GARANTIE} kompakt />
      </div>
      <div className="mt-10">
        <MartaBand eingebettet />
      </div>
    </aside>
  )
}

/** Bestpreisgarantie und Testsieger auf der Startseite. Martin 18.09.: „Siegel links, rechts daneben die Erklärung, wie wir das
 * sonst haben (6× Testsieger, DIE WELT …), und dann Text darunter" — beide Karten gleich gebaut, Texte gleich lang, Siegel groß.
 * Rahmen und Pille wie live (17.09., „wie im Rechner"). */
function VertrauensKarte({
  rahmen,
  pille,
  siegel,
  reihe,
  zeilen,
  text,
  link,
}: {
  rahmen: string
  pille: ReactNode
  siegel: ReactNode
  /** Siegel und Zeilen nebeneinander: das schmale WELT-Siegel immer, das breite Bestpreis-Siegel erst ab 1.024 px (Martin 18.09.) */
  reihe: string
  zeilen: [string, string, string]
  text: string
  link: ReactNode
}) {
  return (
    <div className={`relative flex flex-col rounded-[20px] border-2 bg-white p-6 pt-8 md:p-8 md:pt-9 ${rahmen}`}>
      {pille}
      <div className={`flex lg:min-h-[116px] ${reihe}`}>
        {siegel}
        <div className="min-w-0">
          <p className="text-[22px] font-extrabold leading-[1.2] tracking-[-0.02em] text-pm-ink min-[375px]:text-[24px]">{zeilen[0]}</p>
          <p className="mt-0.5 text-[17px] font-bold tracking-[0.02em] text-pm-taupe">{zeilen[1]}</p>
          <p className="text-[16px] text-pm-body/70">{zeilen[2]}</p>
        </div>
      </div>
      <p className="mt-5 text-[17px] leading-[1.6] text-pm-body">{text}</p>
      <div className="mt-3">{link}</div>
    </div>
  )
}

/** eingebettet: dieselben zwei Karten untereinander in der Textspalte einer Vorlagen-Seite (z. B. /ueber-uns) */
export function VertrauensKarten({ eingebettet = false }: { eingebettet?: boolean }) {
  const pille = 'absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-1 text-[12.5px] font-bold uppercase tracking-[0.08em]'
  const Huelle = eingebettet ? 'div' : 'section'
  return (
    <Huelle className={eingebettet ? 'pt-3' : 'bg-pm-paper px-5 pb-16 lg:pb-20'}>
      <div className={eingebettet ? 'grid gap-8' : 'mx-auto grid max-w-[1200px] gap-6 md:grid-cols-2'}>
        <VertrauensKarte
          rahmen="border-pm-green/60"
          reihe="flex-col items-start gap-4 lg:flex-row lg:items-center lg:gap-6"
          pille={<span className={`${pille} bg-pm-green text-white`}>★ 100 % Sorgenfrei</span>}
          siegel={
            <a href={GARANTIE} aria-label="Bestpreisgarantie — mehr Infos" className="flex-none">
              <Image src="/images/bestpreisgarantie-siegel.webp" alt="Primundus Bestpreisgarantie – 6× Preis-Leistungssieger" width={900} height={256} className="h-[62px] w-auto lg:h-[52px] xl:h-[62px]" />
            </a>
          }
          zeilen={['Bestpreisgarantie', '100 % Sorgenfrei', '6× Preis-Leistungssieger']}
          text="Bei uns zahlen Sie nie mehr als für ein vergleichbares Angebot. Das können wir, weil unsere Pflegekräfte bei uns angestellt sind und keine Vermittlungsgebühr anfällt."
          link={<a href={GARANTIE} className="font-semibold text-pm-green-deep underline decoration-pm-green/40 underline-offset-4 hover:decoration-pm-green-deep">Was heißt vergleichbar? Mehr Infos</a>}
        />
        <VertrauensKarte
          rahmen="border-pm-gold/70"
          reihe="flex-row items-center gap-4 sm:gap-6"
          pille={<span className={`${pille} bg-pm-gold text-pm-ink`}>★ Testsieger · 6× in Folge</span>}
          siegel={
            <a href="/testsieger-24-stunden-pflege" aria-label="Zur Auszeichnung" className="flex-none">
              <Image src="/images/siegel-welt-2021-352.webp" alt="Siegel DIE WELT Service-Champions 2021" width={352} height={528} className="h-[116px] w-auto rounded-[5px] shadow-[0_2px_10px_rgba(0,0,0,0.2)]" />
            </a>
          }
          zeilen={['6× Testsieger', 'DIE WELT', 'Preis & Qualität']}
          text="DIE WELT hat Primundus sechsmal in Folge ausgezeichnet. Grundlage ist eine der größten Kundenbefragungen Deutschlands: Familien bewerten, wie gut sie sich beraten, begleitet und betreut fühlen."
          link={<a href="/testsieger-24-stunden-pflege" className="font-semibold text-pm-taupe-ink underline decoration-pm-taupe/40 underline-offset-4 hover:decoration-pm-taupe-ink">Zur Auszeichnung</a>}
        />
      </div>
    </Huelle>
  )
}
