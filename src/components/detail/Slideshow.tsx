'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export function Slideshow({
  slides,
  alt,
  minSlides = 3,
}: {
  slides?: string[]
  alt: string
  minSlides?: number
}) {
  const total = Math.max(slides?.length ?? 0, minSlides)
  const [index, setIndex] = useState(0)

  const go = (delta: number) => setIndex((i) => (i + delta + total) % total)

  useEffect(() => {
    if (total <= 1) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') go(-1)
      if (e.key === 'ArrowRight') go(1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total])

  const src = slides?.[index]

  return (
    <div className="w-full">
      <div
        className="relative aspect-video w-full overflow-hidden rounded-2xl"
        style={{ border: '3px solid var(--ink)', background: 'var(--paper)' }}
      >
        {src ? (
          <Image
            src={src}
            alt={`${alt} — screenshot ${index + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 border-4 border-dashed" style={{ borderColor: 'var(--ink)' }}>
            <span className="font-display text-3xl" style={{ color: 'var(--ink-soft)' }}>+</span>
            <p className="px-6 text-center font-mono text-xs uppercase tracking-[0.1em]" style={{ color: 'var(--ink-soft)' }}>
              Screenshot {index + 1} — drop an image here
            </p>
          </div>
        )}

        {total > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous screenshot"
              className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full font-bold transition-transform hover:-translate-x-0.5"
              style={{ border: '2px solid var(--ink)', background: 'var(--paper)', color: 'var(--ink)' }}
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next screenshot"
              className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full font-bold transition-transform hover:translate-x-0.5"
              style={{ border: '2px solid var(--ink)', background: 'var(--paper)', color: 'var(--ink)' }}
            >
              →
            </button>
          </>
        )}
      </div>

      {total > 1 && (
        <div className="mt-4 flex items-center justify-center gap-2">
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to screenshot ${i + 1}`}
              className="h-2.5 rounded-full transition-all duration-300"
              style={{
                width: i === index ? '1.5rem' : '0.625rem',
                background: i === index ? 'var(--yellow)' : 'var(--paper)',
                border: '2px solid var(--ink)',
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}
