import Image from 'next/image'
import { BewertungsZeile } from '@/components/bewertungen/BewertungsAuszug'
import { Schluss, SchlussKasten, Stimmen } from '@/components/vertrauen/Vertrauen'
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
// Seit 20.09.2026 auch auf den Ortsseiten verwendet (Martin: „tatsächlich mit Marta groß, Ihre
// Ansprechpartnerin, wenn es um die 24-Stunden-Pflege in München geht, mit der entsprechenden
// Telefonnummer"). Deshalb exportiert — damit dort dieselbe Karte steht und keine zweite entsteht.
const nw = 'whitespace-nowrap'
export function Ansprechpartnerin({ karte = false, ort, titel }: { karte?: boolean; ort?: string; titel?: string }) {
  // Alt-Text trägt den Ort, wo einer gegeben ist. Eine Bilddatei, viele Alt-Texte — das Attribut
  // hängt am <img>, nicht an der Datei. Dieselbe Datei 207-mal zu kopieren brächte nichts: Google
  // führt bytegleiche Bilder zusammen, und 207 Dateinamen mit Stadtnamen sind ein Türseiten-Signal.
  const alt = ort
    ? `Marta Kapcio, Ansprechpartnerin für 24-Stunden-Pflege in ${ort}`
    : 'Marta Kapcio, Ansprechpartnerin bei Primundus'
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
      alt={alt}
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
        <p className="text-[15px] font-semibold leading-[1.4] text-pm-ink">{titel ?? 'Lieber erst sprechen?'}</p>
        <div className="mt-4 flex items-center gap-2.5 sm:gap-3.5">
          <Image
            src="/images/marta-kapcio.jpg"
            alt={alt}
            width={52}
            height={52}
            className="w-11 h-11 sm:w-[52px] sm:h-[52px] rounded-full object-cover object-top flex-shrink-0"
          />
          <div className="min-w-0 flex-1">
            <p className="text-[17px] font-bold leading-tight text-pm-ink whitespace-nowrap">Marta Kapcio</p>
            {/* Martin 20.09.: „mit der entsprechenden Telefonnummer" — die Nummer muss lesbar sein,
                nicht nur im Namen des Symbols stehen. Ohne eigenen Titel bleibt es bei der Rolle. */}
            {titel ? (
              <p className="mt-0.5 text-[14px] leading-[1.4] text-pm-body/70">
                <a href="tel:+4989200000830" className={`font-bold text-[16px] text-pm-ink hover:text-pm-taupe-ink ${nw}`}>089 200 000 830</a>
                <br />
                <span className={nw}>Täglich 8–20 Uhr</span>
              </p>
            ) : (
              <p className="mt-1 text-[14px] leading-[1.4] text-pm-body/70">
                Ansprechpartnerin
                <br />
                <span className={nw}>Täglich 8–20 Uhr</span>
              </p>
            )}
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

// Große Ansprechpartnerin für die Ortsseiten (Martin 20.09.2026: „ich will Marta groß im Bild,
// nicht den Kasten, sondern Marta als Person in den Vordergrund stellen bei den regionalen
// Seiten"). Die Seiten, die für „24 stunden pflege <ort>" vor uns stehen, führen alle einen
// Menschen mit Gesicht und Nummer; das Kartenpaket darüber zeigt Adressen und Sterne. Ein
// 52-px-Rundbild trägt dagegen nicht.
//
// Dieselben Daten und Ziele wie überall (Rufnummer, WhatsApp-Text, Foto) — nur die Darstellung
// ist eine andere. Nichts wird hier neu erfunden, deshalb steht es in derselben Datei.
export function AnsprechpartnerinGross({
  ort,
  telefon,
  telefonAnzeige,
  adresse,
}: {
  ort: string
  /** Eigene Rufnummer für diesen Ort (E.164), sonst die zentrale 089. */
  telefon?: string
  /** Wie die Nummer geschrieben wird. */
  telefonAnzeige?: string
  /** Niederlassung, die zu dieser Nummer gehört — nur setzen, wo es sie wirklich gibt. */
  adresse?: string
}) {
  // Hamburg hat eine eigene Niederlassung mit eigener Nummer (Martin 21.09.: „in Hamburg kannst du
  // die HH-Nummer machen und die Adresse"). Wo keine gesetzt ist, bleibt es bei der zentralen.
  const tel = telefon ?? '+4989200000830'
  const telText = telefonAnzeige ?? '089 200 000 830'
  return (
    <div className="bg-white rounded-[20px] shadow-lift overflow-hidden flex flex-col">
      {/* Eigener Zuschnitt (Martin 20.09.: „mit dem Bild so hinkriegen, dass das bündig ist, links
          und rechts"). Im Original marta-kapcio.jpg steht sie von x 48 bis 288 von 320 — links
          blieben 48 px, rechts 32 px weißer Hintergrund, sie wirkte in der großen Fläche wie
          hineingestellt. marta-kapcio-portrait.jpg ist auf das Motiv beschnitten (252 × 378) und
          füllt die Breite. Das runde Miniaturbild nutzt weiter das Original. */}
      <Image
        src="/images/marta-kapcio-gross.jpg"
        alt={`Marta Kapcio, Ansprechpartnerin für 24-Stunden-Pflege in ${ort}`}
        width={800}
        height={1200}
        priority
        sizes="(min-width: 1024px) 360px, 100vw"
        // Eigene Datei für die große Karte (Martin, 21.09.: Foto in 1066 × 1600 geliefert). Auf das
        // Motiv beschnitten und auf 800 × 1200 gebracht — bei 360 px Kartenbreite auf Retina exakt
        // die nötige Auflösung, 143 KB. next.config liefert Bilder unverändert aus, deshalb bleibt
        // marta-kapcio.jpg (320 × 480, 45 KB) für die Rundbilder in Kopfzeile und Schlussband.
        className="w-full h-[280px] sm:h-[300px] object-cover object-top"
      />
      <div className="p-6 md:p-7 flex-none">
        <p className="text-[11.5px] font-bold uppercase tracking-[.15em] text-pm-taupe">
          Ihre persönliche Ansprechpartnerin für {ort}
        </p>
        <p className="mt-2.5 text-[23px] md:text-[25px] font-extrabold leading-[1.15] tracking-[-0.02em] text-pm-ink">
          Marta Kapcio
        </p>
        {/* Bauplan 21.09.2026. „für München", nicht „in München": Marta sitzt nicht dort, die
            Niederlassung schon — das bleibt sauber getrennt. */}
        <p className="mt-1.5 text-[15.5px] leading-[1.5] text-pm-body/80">
          Sie haben Fragen zur Betreuung zu Hause? Marta hilft Ihnen persönlich weiter —{' '}
          <span className={nw}>täglich von 8 bis 20 Uhr.</span>
        </p>
        <a
          href={`tel:${tel}`}
          className={`mt-4 block text-[26px] md:text-[28px] font-extrabold leading-none tracking-[-0.02em] text-pm-ink hover:text-pm-taupe-ink transition-colors ${nw}`}
        >
          {telText}
        </a>
        <div className="mt-5 flex gap-2.5">
          <a
            href={`tel:${tel}`}
            className="flex-1 min-h-[48px] px-4 rounded-full bg-pm-ink hover:bg-pm-taupe-ink text-white font-bold text-[16px] flex items-center justify-center gap-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pm-taupe"
          >
            <Phone className="w-[18px] h-[18px]" aria-hidden="true" />
            Anrufen
          </a>
          {/* Beschriftet statt nur Symbol: Der schwebende WhatsApp-Knopf ist ebenfalls ein grüner
              Kreis und saß direkt daneben — zwei gleiche Kreise übereinander. */}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-h-[48px] px-4 rounded-full bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold text-[16px] flex items-center justify-center gap-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pm-taupe"
          >
            <svg viewBox="0 0 24 24" className="w-[22px] h-[22px]" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>
        </div>
        <p className="mt-4 text-[14px] leading-[1.45] text-pm-body/65">
          Von der ersten Frage bis zum Start Ihrer Betreuung.
        </p>
        {/* Bewertungssterne in den Kopf (Martin 22.09.: „und natürlich die bewertungs-sterne, wenn
            wir optisch was zeigen"). Gemessen am selben Tag: Auf den Ortsseiten standen sie erst bei
            86 bis 89 Prozent Scrolltiefe, unten im Schlussband — wer nicht bis zum Ende scrollt, sah
            nie, dass 126 Familien uns mit 4,9 bewertet haben.
            Warum hier und nicht am Knopf: 207 der 214 Ortsseiten haben gar keinen Knopf im Kopf,
            sondern Marta (`person` ohne `knopf`); ohne Knopf kein RechnerBlock und damit keine Sterne.
            Diese Karte ist auf allen 207 das optische Element im Kopf.
            BewertungsZeile holt den Stand selbst und liefert `null`, wenn keine Zahl da ist —
            ein Ersatzwert stünde sonst irgendwann veraltet auf 207 Seiten. */}
        <div className="mt-4 pt-4 border-t border-pm-line">
          <BewertungsZeile />
        </div>
        {/* Eigener Block mit Trennlinie: Die Adresse gehört zum Büro, nicht zu Marta — sonst liest
            es sich, als säße sie dort (OpenAI-Prüfung 21.09.). */}
        {adresse ? (
          <p className="mt-4 pt-4 border-t border-pm-line text-[14px] leading-[1.45] text-pm-body/65">
            <span className="font-semibold text-pm-ink">Büro {ort}</span><br />
            {adresse}
          </p>
        ) : null}
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

// Vorschlag 2 vom 17.09.2026 (Martin: „vereinheitliche es", „so schön und horizontal scrollbar", „cooles Design
// wie auf den anderen"): Seitenende = Bewertungen zum Wischen + Aufruf mit Punkten, Siegel und Marta (Telefon, WhatsApp).
// ohneBewertungen: auf /erfahrungen stehen die Bewertungen schon vollständig darüber
export function KontaktBand({ ohneBewertungen = false }: { ohneBewertungen?: boolean } = {}) {
  return <Schluss src="apex-components" ohneStimmen={ohneBewertungen} />
}

export function ArticleCTA() {
  return (
    <>
      <Stimmen eingebettet />
      <SchlussKasten src="apex-components" />
    </>
  )
}
