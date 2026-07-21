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
    <div className="flex items-center gap-3 mb-8 pb-6 border-b border-[#E5E3DF]">
      <div className="w-10 h-10 rounded-full bg-[#8B7355] text-white flex items-center justify-center font-semibold text-[13px] flex-shrink-0">
        IW
      </div>
      <div className="text-[13px] leading-tight">
        <a href="/ueber-uns/#team" className="text-[#1C1C1C] font-semibold hover:text-[#8B7355] transition-colors">Ilka Wysocki</a>
        <p className="text-[#6B6B6B]">Pflegeberaterin bei Primundus · Aktualisiert am {updated}</p>
      </div>
    </div>
  )
}
