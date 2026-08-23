// Design-System-Bausteine (Etappe B, 23.08.2026) — mobile-first.
// Für Marketing-/Hub-Seiten und alles Neue; der Artikel-Bestand ist per
// Codemod auf dieselben pm-Tokens normalisiert und braucht keine Umstellung.
// Referenz-Look: Ratgeber-Linie (paper-Canvas, article-Breite, ink/body).
import type { ReactNode } from 'react'

const BREITEN = { narrow: 'max-w-narrow', article: 'max-w-article', wide: 'max-w-wide' } as const

export function PageShell({
  width = 'article',
  children,
  className = '',
}: { width?: keyof typeof BREITEN; children: ReactNode; className?: string }) {
  return (
    <div className="min-h-screen bg-pm-paper">
      <div className={`${BREITEN[width]} mx-auto px-5 py-10 md:py-16 ${className}`}>{children}</div>
    </div>
  )
}

export function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav className="text-sm text-pm-mute mb-6 flex items-center gap-2 flex-wrap" aria-label="Breadcrumb">
      {items.map((it, i) => (
        <span key={it.label} className="flex items-center gap-2">
          {i > 0 && <span aria-hidden="true">›</span>}
          {it.href ? (
            <a href={it.href} className="hover:text-pm-taupe transition-colors">{it.label}</a>
          ) : (
            <span className="text-pm-ink">{it.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-meta font-bold uppercase tracking-[0.1em] text-pm-taupe-light mb-4">{children}</p>
  )
}

export function PageTitle({ children, lead }: { children: ReactNode; lead?: ReactNode }) {
  return (
    <>
      <h1 className="text-h1 md:text-h1-lg font-bold text-pm-ink mb-6">{children}</h1>
      {lead && (
        <p className="text-lead md:text-lead-lg text-pm-body font-medium mb-10">{lead}</p>
      )}
    </>
  )
}

export function SectionHeading({ children, id, as: Tag = 'h2' }: { children: ReactNode; id?: string; as?: 'h2' | 'h3' }) {
  return (
    <Tag id={id} className="text-h2 md:text-h2-lg font-bold text-pm-ink mt-10 mb-4">{children}</Tag>
  )
}

export function CtaButton({
  href,
  children,
  variant = 'primary',
  size = 'lg',
  className = '',
}: {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary'
  size?: 'md' | 'lg'
  className?: string
}) {
  const basis = 'inline-flex items-center justify-center gap-2 font-bold rounded-full transition-all duration-200 w-full sm:w-auto'
  const groesse = size === 'lg' ? 'py-4 px-10 text-[16px]' : 'py-2.5 px-6 text-[14px]'
  const farbe =
    variant === 'primary'
      ? 'bg-pm-coral hover:bg-pm-coral-deep text-white shadow-sm hover:shadow-md'
      : 'bg-white border border-pm-line text-pm-ink hover:border-pm-taupe'
  return (
    <a href={href} className={`${basis} ${groesse} ${farbe} ${className}`}>{children}</a>
  )
}

export function Card({ children, tone = 'white', className = '' }: { children: ReactNode; tone?: 'white' | 'paper' | 'shell'; className?: string }) {
  const t =
    tone === 'white' ? 'bg-white border border-pm-line' : tone === 'paper' ? 'bg-pm-paper' : 'bg-pm-shell border border-pm-taupe/20'
  return <div className={`${t} rounded-2xl p-6 ${className}`}>{children}</div>
}

export function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="space-y-3">
      {items.map((f) => (
        <details key={f.q} className="bg-white rounded-xl border border-pm-line group">
          <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
            <h3 className="text-copy font-semibold text-pm-ink pr-4">{f.q}</h3>
            <span className="text-pm-taupe font-bold text-[20px] flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
          </summary>
          <div className="px-5 pb-4"><p className="text-copy text-pm-body">{f.a}</p></div>
        </details>
      ))}
    </div>
  )
}
