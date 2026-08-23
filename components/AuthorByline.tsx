interface AuthorBylineProps {
  /** Sichtbares Aktualisierungsdatum, z. B. "25. April 2026" */
  updated: string
}

/**
 * Autoren-Byline für Ratgeber-Artikel (E-E-A-T-Signal).
 * Ergänzt sichtbar Autor + Aktualisierungsdatum; das maschinenlesbare
 * Pendant (author/dateModified) liegt im Article-JSON-LD der jeweiligen Seite.
 */
export function AuthorByline({ updated }: AuthorBylineProps) {
  return (
    <div className="flex items-center gap-3 mb-8 pb-6 border-b border-pm-line">
      <img src="/images/marta-kapcio.jpg" alt="Marta Kapcio" width={40} height={40} className="w-10 h-10 rounded-full object-cover object-top flex-shrink-0" />
      <div className="text-[13px] leading-tight">
        <a href="/ueber-uns#team" className="text-pm-ink font-semibold hover:text-pm-taupe transition-colors">Marta Kapcio</a>
        <p className="text-[#6B6B6B]">Pflegeberaterin bei Primundus · Aktualisiert am {updated}</p>
      </div>
    </div>
  )
}
