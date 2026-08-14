'use client'

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

type ScrollProgressContextValue = {
  progress: number
  chapter: number
}

const ScrollProgressContext = createContext<ScrollProgressContextValue>({
  progress: 0,
  chapter: 0,
})

export function useScrollProgress() {
  return useContext(ScrollProgressContext)
}

const CHAPTER_COUNT = 7

export function ScrollProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const next = max > 0 ? window.scrollY / max : 0
      setProgress(Math.min(1, Math.max(0, next)))
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const value = useMemo(
    () => ({
      progress,
      chapter: Math.min(CHAPTER_COUNT - 1, Math.floor(progress * CHAPTER_COUNT)),
    }),
    [progress],
  )

  return <ScrollProgressContext.Provider value={value}>{children}</ScrollProgressContext.Provider>
}
