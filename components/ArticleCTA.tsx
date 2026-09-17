import Image from 'next/image'
import { BewertungsAuszug, BewertungsZeile } from '@/components/bewertungen/BewertungsAuszug'
import { Phone } from 'lucide-react'

// Kontaktbereich auf allen Ratgeber- und Vergleichsseiten (345 Seiten).
// Neu nach dem Optik-Plan vom 14.09.2026, Stufe 1 (Martin: „rest kannst du machen"):
// eine Botschaft, ein Knopf, eine Person. Vorher standen sieben Botschaften in
// fünf Kästen (Tipp-Kopf mit Frage, Häkchen, Beraterin, Siegel-Pille, drei Kacheln
// mit Linien-Symbolen, Logo-Band, Knopf). Keine Symbole, Schrift nach der neuen
// Skala (Fließtext 18 px, Kleingedrucktes 15 px), nur pm-Farben.
//
// referrerPolicy am Rechner-Knopf: Die Website sendet sonst nur „primundus.de"
// als Herkunft (strict-origin-when-cross-origin). So kommt die Unterseite im
// Kostenrechner an (websiteHerkunft → pfad) und steht in Lead und Team-Mail;
// damit sehen wir je Seite, was wirkt. Die Quelle bleibt apex-components, weil
// der Rechner nur apex-[a-z-] ohne Ziffern annimmt.
//
// KontaktBand: Schlussband der neuen Seitenvorlagen (Partnerseiten-Stil, volle
// Breite, Text links, Ansprechpartnerin rechts). Gleicher Wortlaut wie der Kasten.
// Eigener Baustein statt Variante: ArticleCTA behält seine Signatur (211 Seiten
// übergeben noch headline/subline, die der Kasten nie ausgewertet hat).

export const RECHNER = 'https://kostenrechner.primundus.de/?start=1&src=apex-components'
const WHATSAPP = 'https://wa.me/4989200000830?text=Hallo%20Frau%20Kapcio%2C%20ich%20habe%20eine%20R%C3%BCckfrage%3A'

const TITEL = 'Ihr Preis und passende Betreuungskräfte in 2 Minuten'
const TEXT =
  'Sie beantworten ein paar Fragen zur Pflegesituation. Danach sehen Sie den Monatspreis und die ' +
  'Betreuungskräfte, die dafür in Frage kommen, mit Foto, Erfahrung und Deutschniveau. Einen Vertrag ' +
  'gibt es erst, wenn Sie gewählt haben.'
// Zeile unter dem Knopf (Martin 14.09.: keinen Preis nennen, den zeigt der Rechner sofort;
// stattdessen Zusagen). Die Auszeichnung steht darüber am Siegel.
const ZUSAGEN = ['Keine Vermittlungsgebühr', 'täglich kündbar', 'Bestpreisgarantie']

// Einheiten nicht mitten im Wort umbrechen („keine / Vermittlungsgebühr"), nur am Trennpunkt
export function Zusagen({ teile }: { teile: string[] }) {
  return (
    <>
      {teile.map((t, i) => (
        <span key={t}>
          {/* Trennpunkt hängt am vorigen Teil, damit keine Zeile mit „·" beginnt */}
          <span className="whitespace-nowrap">{t}{i < teile.length - 1 ? ' ·' : ''}</span>
          {i < teile.length - 1 ? ' ' : ''}
        </span>
      ))}
    </>
  )
}
export const KNOPF =
  'inline-flex w-full sm:w-auto items-center justify-center text-center leading-snug min-h-[56px] px-4 sm:px-8 py-3 rounded-full bg-pm-coral hover:bg-pm-coral-deep text-white font-bold text-[17px] sm:text-[18px] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pm-taupe'

// Ansprechpartnerin (Martin 14.09.: der lange Satz neben dem Siegel sah gequetscht aus).
// kompakt = Zeile im Kasten; karte = Visitenkarte im Schlussband. Umbrüche nur
// zwischen den Einheiten, nie in „8– / 20 Uhr".
const nw = 'whitespace-nowrap'
function Ansprechpartnerin({ karte = false }: { karte?: boolean }) {
  const telefon = (
    <a href="tel:+4989200000830" className={`font-bold text-pm-ink hover:text-pm-taupe-ink ${nw} ${karte ? 'text-[22px]' : 'text-[19px]'}`}>
      089 200 000 830
    </a>
  )
  const whatsapp = (
    <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className={`text-[16px] font-semibold text-pm-taupe-ink underline underline-offset-4 hover:text-pm-ink ${nw}`}>
      Per WhatsApp schreiben
    </a>
  )
  const foto = (groesse: number) => (
    <Image
      src="/images/marta-kapcio.jpg"
      alt="Marta Kapcio, Ansprechpartnerin bei Primundus"
      width={groesse}
      height={groesse}
      style={{ width: groesse, height: groesse }}
      className="rounded-full object-cover object-top flex-shrink-0"
    />
  )
  if (karte) {
    // Martin 17.09.: „nicht geil … lieber Icon für Telefon und WhatsApp rechts, dann wird es schmaler".
    // Nummer steht im Kopf der Seite und im Namen des Anruf-Knopfs (Screenreader, Tooltip).
    return (
      <div>
        <p className="text-[15px] font-semibold leading-[1.4] text-pm-ink">Lieber erst sprechen?</p>
        <div className="mt-4 flex items-center gap-2.5 sm:gap-3.5">
          <Image
            src="/images/marta-kapcio.jpg"
            alt="Marta Kapcio, Ansprechpartnerin bei Primundus"
            width={52}
            height={52}
            className="w-11 h-11 sm:w-[52px] sm:h-[52px] rounded-full object-cover object-top flex-shrink-0"
          />
          <div className="min-w-0 flex-1">
            <p className="text-[17px] font-bold leading-tight text-pm-ink whitespace-nowrap">Marta Kapcio</p>
            <p className="mt-1 text-[14px] leading-[1.4] text-pm-body/70">
              Ansprechpartnerin
              <br />
              <span className={nw}>Täglich 8–20 Uhr</span>
            </p>
          </div>
          <div className="flex gap-2 flex-none">
            <a
              href="tel:+4989200000830"
              aria-label="Marta Kapcio anrufen: 089 200 000 830"
              title="089 200 000 830"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-pm-line text-pm-ink flex items-center justify-center hover:border-pm-taupe hover:text-pm-taupe-ink transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pm-taupe"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Marta Kapcio per WhatsApp schreiben"
              title="Per WhatsApp schreiben"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#25D366] hover:bg-[#1ebe5a] text-white flex items-center justify-center transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pm-taupe"
            >
              <svg viewBox="0 0 24 24" className="w-[22px] h-[22px]" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="flex items-start sm:items-center gap-4">
      {foto(60)}
      <div className="min-w-0">
        <p className="text-[17px] font-semibold leading-[1.4] text-pm-ink">Lieber erst sprechen?</p>
        <p className="text-[15px] leading-[1.45] text-pm-body/70">
          <span className={nw}>Marta Kapcio,</span> <span className={nw}>Ihre Ansprechpartnerin,</span> <span className={nw}>täglich 8–20 Uhr</span>
        </p>
        <p className="mt-1.5 flex flex-wrap items-baseline gap-x-5 gap-y-1">
          {telefon}
          {whatsapp}
        </p>
      </div>
    </div>
  )
}

// Auszeichnung wie im Kostenrechner und in den Mails: Siegel mit Schatten, Trennstrich,
// drei Zeilen (fett / sandbraun / grau). Martin 15.09.: eine Zeile neben dem hohen
// Siegel sah verloren aus; Wortlaut „wie im Rechner … überall so machen auf primundus.de".
// Die Auszeichnungsseite hängt am ganzen Block. Kurze Zeilen, passen auch bei 320 px.
const AUSZEICHNUNG = ['6× Testsieger', 'DIE WELT', 'Preis & Qualität']
function Siegel({ klein = false }: { klein?: boolean }) {
  const [oben, mitte, unten] = AUSZEICHNUNG
  return (
    <a href="/testsieger-24-stunden-pflege" className={`group inline-flex items-center ${klein ? 'gap-3' : 'gap-4'}`} aria-label={`${AUSZEICHNUNG.join(', ')} — mehr zur Auszeichnung`}>
      <Image
        src="/images/siegel-welt-2021-160.webp"
        alt="Siegel DIE WELT Service-Champions 2021"
        width={48}
        height={72}
        className={`${klein ? 'h-[56px]' : 'h-[72px]'} w-auto rounded-[5px] shadow-[0_2px_8px_rgba(0,0,0,0.2)] flex-shrink-0`}
      />
      <span aria-hidden className="w-px self-stretch my-1 bg-pm-line flex-shrink-0" />
      <span className="flex flex-col min-w-0">
        <span className={`${klein ? 'text-[16px]' : 'text-[19px] sm:text-[21px]'} font-extrabold leading-[1.2] tracking-[-0.02em] text-pm-ink group-hover:text-pm-taupe-ink transition-colors whitespace-nowrap`}>{oben}</span>
        <span className={`mt-0.5 ${klein ? 'text-[14px]' : 'text-[16px] sm:text-[17px]'} font-bold leading-[1.3] tracking-[0.02em] text-pm-taupe whitespace-nowrap`}>{mitte}</span>
        <span className={`${klein ? 'text-[13px]' : 'text-[15px]'} leading-[1.35] text-pm-body/70 whitespace-nowrap`}>{unten}</span>
      </span>
    </a>
  )
}

// Siegel und Bewertungen immer bei Marta, wie im Signatur-Block der Kundenmails (Martin 17.09.2026:
// „das Siegel immer bei ihr wie in den Mails", Bewertungen „unter dem Kontakt von Marta").
function MartaVertrauen() {
  return (
    <div className="mt-5 pt-5 border-t border-pm-line flex flex-col gap-3.5">
      <Siegel klein />
      <BewertungsZeile />
    </div>
  )
}

// ohneBewertungen: auf /erfahrungen stehen die Bewertungen schon vollständig darüber
export function KontaktBand({ ohneBewertungen = false }: { ohneBewertungen?: boolean } = {}) {
  return (
    <>
    {!ohneBewertungen && <BewertungsAuszug />}
    <aside className="bg-white border-t border-pm-line" aria-labelledby="kontaktbereich-titel">
      <div className="max-w-[1200px] mx-auto px-5 py-16 md:py-20 grid gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-16 lg:items-center">
        <div className="min-w-0">
          <p id="kontaktbereich-titel" className="text-[clamp(28px,3.6vw,42px)] font-extrabold leading-[1.1] tracking-[-0.034em] text-pm-ink [text-wrap:balance]">
            {TITEL}
          </p>
          <p className="mt-5 text-[18px] leading-[1.65] text-pm-body max-w-[54ch]">{TEXT}</p>
          <a href={RECHNER} referrerPolicy="no-referrer-when-downgrade" className={`mt-8 ${KNOPF}`}>
            Kosten &amp; Pflegekräfte ansehen
          </a>
          <p className="mt-3 text-[15px] text-pm-taupe-ink"><Zusagen teile={ZUSAGEN} /></p>
        </div>
        <div className="min-w-0 rounded-[20px] bg-pm-paper p-4 sm:p-5 md:p-6 max-w-[420px]">
          <Ansprechpartnerin karte />
          <MartaVertrauen />
        </div>
      </div>
    </aside>
    </>
  )
}

export function ArticleCTA() {
  return (
    <aside className="my-12 rounded-3xl bg-pm-shell px-5 py-8 sm:px-8 md:px-10 md:py-10" aria-labelledby="kontaktbereich-titel">
      <p id="kontaktbereich-titel" className="text-[26px] md:text-[30px] leading-[1.2] font-bold text-pm-ink [text-wrap:balance]">
        {TITEL}
      </p>
      <p className="mt-3 text-[18px] leading-[1.65] text-pm-body max-w-[60ch]">{TEXT}</p>
      <a href={RECHNER} referrerPolicy="no-referrer-when-downgrade" className={`mt-6 ${KNOPF}`}>
        Kosten &amp; Pflegekräfte ansehen
      </a>
      <p className="mt-3 text-[15px] text-pm-taupe-ink"><Zusagen teile={ZUSAGEN} /></p>

      <div className="mt-8 pt-7 border-t border-pm-line">
        <Ansprechpartnerin />
        <MartaVertrauen />
      </div>

      <BewertungsAuszug variante="kasten" />
    </aside>
  )
}
