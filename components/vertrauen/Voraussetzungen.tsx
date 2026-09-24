// Die vier Voraussetzungen — EINE Quelle für Startseite und Ortsseiten (24.09.2026).
//
// Wortlaut wie im Rechner (RequirementsSection) und auf der Startseite seit 17.09. Martin 24.09. zur Ortsseite:
// „Was ist 24-Stunden-Pflege? Welche Voraussetzungen gibt es? Wie läuft das ab?" — die Voraussetzungen fehlten dort
// ganz. Ändert sich der Wortlaut, ändert er sich hier, und beide Seitenarten folgen.

export const VORAUSSETZUNGEN = [
  { titel: 'Eigenes Zimmer', text: 'Die Betreuungskraft benötigt ein eigenes, abschließbares Zimmer mit Bett.' },
  { titel: 'Grundausstattung', text: 'Küche, Bad/WC und Internetanschluss sollten vorhanden sein.' },
  { titel: 'Mobilität', text: 'Ihr Angehöriger sollte noch eine gewisse Grundmobilität haben, z. B. mit Unterstützung gehen können.' },
  { titel: 'Keine Intensivpflege', text: 'Medizinische Behandlungspflege übernimmt ein ambulanter Pflegedienst.' },
]

function Haken() {
  return (
    <svg className="mt-[3px] h-5 w-5 flex-none text-pm-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  )
}

/** Die vier Punkte als Karten, zwei nebeneinander ab sm — für die Textspalte der Vorlagen-Seiten. */
export function VoraussetzungenListe() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {VORAUSSETZUNGEN.map((v) => (
        <li key={v.titel} className="flex gap-3 rounded-[18px] bg-white p-5 shadow-lift md:p-6">
          <Haken />
          <div>
            <p className="text-[18px] font-bold leading-[1.3] text-pm-ink">{v.titel}</p>
            <p className="mt-1.5 text-[16.5px] leading-[1.6] text-pm-body">{v.text}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}
