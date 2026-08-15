'use client'

import { journeyMilestones } from '@/data/story'
import { useReveal } from '@/hooks/use-reveal'
import Link from 'next/link'
import { SectionHeading } from './SectionHeading'

export default function Journey() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="journey" className="scroll-mt-24 px-6 py-24 md:px-10">
      <SectionHeading eyebrow="Journey" title="How I got here" />
      <div ref={ref} className="reveal mx-auto flex max-w-3xl flex-col gap-5">
        {journeyMilestones.map((m, i) => (
          <Link key={m.id} href={`/journey/${m.id}`} className="card-hard flex gap-5 p-6">
            <span className="font-display text-3xl" style={{ color: 'var(--ink-soft)' }}>
              0{i + 1}
            </span>
            <div className="flex-1">
              <p className="font-mono text-xs uppercase tracking-wide" style={{ color: 'var(--ink-soft)' }}>
                {m.period}
              </p>
              <h3 className="mt-1 font-display text-2xl">{m.title}</h3>
              <p className="font-body text-sm" style={{ color: 'var(--ink-soft)' }}>
                {m.role}
              </p>
              <p className="mt-3 font-body text-sm leading-relaxed">{m.summary}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {m.focus.map((f) => (
                  <span key={f} className="tag-pill-outline">
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
