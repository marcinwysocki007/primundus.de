import Image from 'next/image'

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
          {i > 0 && ' · '}
          <span className="whitespace-nowrap">{t}</span>
        </span>
      ))}
    </>
  )
}
const KNOPF =
  'inline-flex w-full sm:w-auto items-center justify-center text-center leading-snug min-h-[56px] px-4 sm:px-8 py-3 rounded-full bg-pm-coral hover:bg-pm-coral-deep text-white font-bold text-[17px] sm:text-[18px] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pm-taupe'

// Ansprechpartnerin, kompakt (Martin 14.09.: der lange Satz neben dem Siegel sah
// gequetscht aus). Drei kurze Zeilen statt eines Satzes über fünf Zeilen.
function Ansprechpartnerin({ gross = false }: { gross?: boolean }) {
  return (
    <div className="flex items-center gap-4">
      <Image
        src="/images/marta-kapcio.jpg"
        alt="Marta Kapcio, Ansprechpartnerin bei Primundus"
        width={gross ? 72 : 60}
        height={gross ? 72 : 60}
        className={`${gross ? 'w-[72px] h-[72px]' : 'w-[60px] h-[60px]'} rounded-full object-cover object-top flex-shrink-0`}
      />
      <div className="min-w-0">
        <p className="text-[17px] font-semibold leading-[1.4] text-pm-ink">Lieber erst sprechen?</p>
        <p className="text-[15px] leading-[1.45] text-pm-mute">Marta Kapcio, Ihre Ansprechpartnerin · täglich 8–20&nbsp;Uhr</p>
        <p className="mt-1.5 flex flex-wrap items-baseline gap-x-5 gap-y-1">
          <a href="tel:+4989200000830" className="text-[19px] font-bold text-pm-ink hover:text-pm-taupe-ink whitespace-nowrap">
            089 200 000 830
          </a>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="text-[16px] font-semibold text-pm-taupe-ink underline underline-offset-4 hover:text-pm-ink whitespace-nowrap">
            Per WhatsApp schreiben
          </a>
        </p>
      </div>
    </div>
  )
}

// Auszeichnung wie im Kostenrechner: Siegel groß mit Schatten, daneben nur die
// Auszeichnung (Martin 14.09.: „Preis-Leistungs-Sieger", kein „zum Beleg").
// Die Belegseite hängt am ganzen Siegel. Nie „DIE WELT" an „6×" hängen.
function Siegel() {
  return (
    <a href="/testsieger-24-stunden-pflege" className="group inline-flex items-center gap-4" aria-label="6× Preis-Leistungs-Sieger — mehr zur Auszeichnung">
      <Image
        src="/images/siegel-welt-2021-160.webp"
        alt="Siegel DIE WELT Service-Champions 2021"
        width={48}
        height={72}
        className="h-[72px] w-auto rounded-[5px] shadow-[0_2px_8px_rgba(0,0,0,0.2)] flex-shrink-0"
      />
      <span className="text-[19px] md:text-[21px] font-extrabold leading-[1.15] tracking-[-0.02em] text-pm-ink group-hover:text-pm-taupe-ink transition-colors">
        6× Preis-Leistungs-Sieger
      </span>
    </a>
  )
}

export function KontaktBand() {
  return (
    <aside className="bg-white border-t border-pm-line" aria-labelledby="kontaktbereich-titel">
      <div className="max-w-[1200px] mx-auto px-5 py-16 md:py-20 grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:gap-16 lg:items-center">
        <div className="min-w-0">
          <Siegel />
          <p id="kontaktbereich-titel" className="mt-7 text-[clamp(28px,3.6vw,42px)] font-extrabold leading-[1.1] tracking-[-0.034em] text-pm-ink [text-wrap:balance]">
            {TITEL}
          </p>
          <p className="mt-5 text-[18px] leading-[1.65] text-pm-body max-w-[54ch]">{TEXT}</p>
          <a href={RECHNER} referrerPolicy="no-referrer-when-downgrade" className={`mt-8 ${KNOPF}`}>
            Kosten &amp; Pflegekräfte ansehen
          </a>
          <p className="mt-3 text-[15px] text-pm-taupe-ink"><Zusagen teile={ZUSAGEN} /></p>
        </div>
        <div className="rounded-[20px] bg-pm-paper p-6 md:p-8">
          <Ansprechpartnerin gross />
        </div>
      </div>
    </aside>
  )
}

export function ArticleCTA() {
  return (
    <aside className="my-12 rounded-3xl bg-pm-shell px-5 py-8 sm:px-8 md:px-10 md:py-10" aria-labelledby="kontaktbereich-titel">
      <Siegel />
      <p id="kontaktbereich-titel" className="mt-6 text-[26px] md:text-[30px] leading-[1.2] font-bold text-pm-ink [text-wrap:balance]">
        {TITEL}
      </p>
      <p className="mt-3 text-[18px] leading-[1.65] text-pm-body max-w-[60ch]">{TEXT}</p>
      <a href={RECHNER} referrerPolicy="no-referrer-when-downgrade" className={`mt-6 ${KNOPF}`}>
        Kosten &amp; Pflegekräfte ansehen
      </a>
      <p className="mt-3 text-[15px] text-pm-taupe-ink"><Zusagen teile={ZUSAGEN} /></p>

      <div className="mt-8 pt-7 border-t border-pm-line">
        <Ansprechpartnerin />
      </div>
    </aside>
  )
}
