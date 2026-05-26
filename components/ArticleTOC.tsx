'use client'

import { useEffect, useState, useRef } from 'react'

export interface TocSection {
  id: string
  title: string
}

interface ArticleTOCProps {
  sections: TocSection[]
}

export function ArticleTOC({ sections }: ArticleTOCProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? '')
  const [open, setOpen] = useState(false)
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Show TOC after scrolling 200px
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Track active section via IntersectionObserver
  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(id) },
        { rootMargin: '-20% 0px -70% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [sections])

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const activeSection = sections.find(s => s.id === activeId)

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 72
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
    setOpen(false)
  }

  if (!visible) return null

  return (
    <div
      ref={ref}
      className="fixed z-40 bottom-5 left-1/2 -translate-x-1/2 lg:bottom-8 lg:right-8 lg:left-auto lg:translate-x-0"
    >
      {/* Collapsed pill */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2.5 bg-white border border-[#E5E3DF] shadow-lg rounded-full px-4 py-2.5 text-[13px] font-semibold text-[#3D3D3D] hover:border-[#8B7355] transition-all"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#E76F63] flex-shrink-0" />
          <span className="max-w-[220px] truncate lg:max-w-[180px]">
            {activeSection?.title ?? 'Inhalt'}
          </span>
          <svg className="w-3.5 h-3.5 text-[#8B8B8B] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      )}

      {/* Expanded panel */}
      {open && (
        <div className="bg-white border border-[#E5E3DF] shadow-xl rounded-2xl overflow-hidden w-[280px]">
          <div className="flex items-center justify-between px-4 py-3 border-b border-[#F0EDE8]">
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#8B8B8B]">Inhaltsverzeichnis</p>
            <button onClick={() => setOpen(false)} className="text-[#8B8B8B] hover:text-[#3D3D3D] transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="py-2">
            {sections.map((s, i) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`w-full flex items-start gap-3 px-4 py-2.5 text-left transition-colors hover:bg-[#F8F7F5] ${
                  activeId === s.id ? 'text-[#E76F63]' : 'text-[#3D3D3D]'
                }`}
              >
                <span className={`text-[11px] font-bold mt-0.5 flex-shrink-0 ${activeId === s.id ? 'text-[#E76F63]' : 'text-[#B0A898]'}`}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className={`text-[13px] leading-snug ${activeId === s.id ? 'font-semibold' : 'font-normal'}`}>
                  {s.title}
                </span>
                {activeId === s.id && (
                  <span className="ml-auto w-1 h-4 bg-[#E76F63] rounded-full flex-shrink-0 mt-0.5" />
                )}
              </button>
            ))}
          </nav>
        </div>
      )}
    </div>
  )
}
