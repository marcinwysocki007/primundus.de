'use client'

import { useEffect, useState } from 'react'

export function ArticleProgressBar() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div className="fixed top-16 md:top-[121px] left-0 right-0 z-40 h-[3px] bg-transparent">
      <div
        className="h-full bg-[#E76F63] transition-none"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
