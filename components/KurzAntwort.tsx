// KurzAntwort — direkt zitierfähiger Antwortblock unter H1/H2.
// Prinzip aus dem AI-Search-Benchmark: KIs übernehmen kurze, in sich geschlossene
// Faktenantworten wörtlich. Frage als sichtbare Zeile, 1–3 Sätze Antwort, optional Stand.
export function KurzAntwort({
  frage,
  children,
  stand,
}: {
  frage: string
  children: React.ReactNode
  stand?: string
}) {
  return (
    <div className="bg-[#F3EFE9] border-l-4 border-pm-taupe rounded-r-xl px-5 py-4 mb-8">
      <p className="text-[13px] font-bold uppercase tracking-[0.06em] text-pm-taupe mb-1.5">{frage}</p>
      <p className="text-[15px] leading-relaxed text-pm-body">{children}</p>
      {stand && <p className="text-[12px] text-pm-mute mt-2">Stand: {stand}</p>}
    </div>
  )
}
