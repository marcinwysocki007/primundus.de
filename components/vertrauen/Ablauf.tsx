// Die drei Schritte des Rechners — EINE Quelle für Startseite und Ortsseiten (24.09.2026).
//
// Wortlaut wie im Rechner (CAapp HowItWorks.tsx). „Preis zuerst" (17.09.) ist seit 19.09. 10:32 aus: erst die
// Kontaktdaten, dann Preis und Pflegekräfte. 23.09. (Martin „alles auf ja", OpenAI-Prüfung): „für die Kopie des
// Angebots" war vorgeschoben — die Kontaktdaten sind die Voraussetzung für Preis und Pflegekräfte, die Kopie per
// Mail ist ein Zusatz.
//
// Bis zum 24.09. lag der Wortlaut in der Startseite, und die Ortsseiten hatten in OrtAblauf eine eigene, ältere
// Fassung (fünf Schritte, „Danach sehen Sie Ihren Preis" vor den Kontaktdaten). Martin 24.09.: „Ablauf ist der
// alte." Ändert sich der Rechner, ändert sich hier ein Array — und jede Seite folgt (Memory ablauf-texte-folgen-rechner).
import type { ReactNode } from 'react'

const MUSTERVERTRAG = 'https://kundenportal.primundus.de/primundus-mustervertrag.pdf'

export const ABLAUF_SCHRITTE: { titel: string; text: ReactNode; marke: string }[] = [
  {
    titel: 'Sofort Angebot und Pflegekräfte einsehen',
    text: (
      <>
        Sie machen wenige preisrelevante Angaben und hinterlassen Ihre Kontaktdaten. Sofort danach sehen Sie Ihr Angebot
        samt Zuschüssen und Steuervorteilen sowie die passenden Pflegekräfte. Eine Kopie kommt zusätzlich per E-Mail.
      </>
    ),
    marke: 'Unter 2 Minuten',
  },
  {
    titel: 'Profil vervollständigen — Bewerbungen erhalten',
    text: (
      <>
        Passt das für Sie, ergänzen Sie die Angaben zu Ihrem Angehörigen. Dann bewerben sich Pflegekräfte bei Ihnen — mit
        Foto, Erfahrung und Verfügbarkeit.
      </>
    ),
    marke: 'Bewerbungen am selben Werktag',
  },
  {
    titel: 'Aussuchen — erst dann der Vertrag',
    text: (
      <>
        Sie entscheiden, wer es wird. Erst nach Ihrer Auswahl kommt der Betreuungsvertrag — den{' '}
        <a href={MUSTERVERTRAG} className="font-semibold text-pm-ink underline decoration-pm-taupe/40 underline-offset-4">
          Mustervertrag
        </a>{' '}
        können Sie jederzeit vorher lesen. Danach reist Ihre Betreuungskraft an.
      </>
    ),
    marke: 'Anreise in 3 Tagen möglich',
  },
]

/**
 * Die drei Schritte untereinander, wie der Rechner sie am Handy zeigt: Zahl im braunen Kreis, Verbindungslinie zum
 * nächsten Schritt, Titel, Text, grüne Marke. Für die Textspalte der Vorlagen-Seiten (Ortsseiten); die Startseite
 * setzt dieselben Schritte in drei Spalten (SoFunktionierts).
 */
export function AblaufListe() {
  return (
    <ol className="mt-2">
      {ABLAUF_SCHRITTE.map((s, i) => {
        const letzter = i === ABLAUF_SCHRITTE.length - 1
        return (
          <li key={s.titel} className="flex gap-5">
            <div className="flex flex-none flex-col items-center">
              <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-pm-cocoa text-[20px] font-bold text-white md:h-14 md:w-14">
                {i + 1}
              </span>
              {!letzter && <span aria-hidden="true" className="mt-1.5 w-0.5 flex-1 bg-pm-line" />}
            </div>
            <div className={`min-w-0 pt-2 md:pt-3 ${letzter ? '' : 'pb-9'}`}>
              <p className="text-[19px] font-bold leading-[1.3] tracking-[-0.015em] text-pm-ink">{s.titel}</p>
              <p className="mt-2 text-[16.5px] leading-[1.6] text-pm-body">{s.text}</p>
              <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-pm-mint px-3 py-1 text-[13.5px] font-semibold text-pm-green-deep">
                ✓ {s.marke}
              </span>
            </div>
          </li>
        )
      })}
    </ol>
  )
}
