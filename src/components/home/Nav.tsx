'use client'

import { navLinks } from '@/data/story'
import { useEffect, useState } from 'react'

export default function Nav() {
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className="sticky top-4 z-40 mx-auto mt-4 flex w-[calc(100%-2rem)] max-w-3xl items-center justify-between rounded-full border-[3px] px-5 py-3"
      style={{ borderColor: 'var(--ink)', background: 'var(--paper)', boxShadow: '4px 4px 0 var(--ink)' }}
    >
      <a href="#hero" className="font-display text-lg text-[var(--ink)]">
        Manan
      </a>
      <nav className="hidden items-center gap-1 md:flex">
        {navLinks.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            className={`rounded-full px-3 py-1.5 font-body text-sm font-bold transition-colors ${
              active === l.id ? 'bg-[var(--ink)] text-[var(--paper)]' : 'text-[var(--ink)] hover:bg-[var(--yellow)]'
            }`}
          >
            {l.label}
          </a>
        ))}
      </nav>
      <a href="#contact" className="btn-hard btn-hard-dark px-4 py-2 text-xs md:hidden">
        Say hi
      </a>
    </header>
  )
}
