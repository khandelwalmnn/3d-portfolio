'use client'

import { skillsConstellation } from '@/data/story'
import { useReveal } from '@/hooks/use-reveal'
import { SectionHeading } from './SectionHeading'

export default function Skills() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="skills" className="scroll-mt-24 px-6 py-24 md:px-10">
      <SectionHeading eyebrow="Skills" title="What I reach for" />
      <div ref={ref} className="reveal grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {skillsConstellation.map((s) => (
          <div key={s.id} className="card-hard flex flex-col gap-3 p-5">
            <p className="font-display text-lg">{s.name}</p>
            <div className="flex flex-wrap items-baseline gap-2 font-mono text-[11px]" style={{ color: 'var(--ink-soft)' }}>
              <span>{s.years}y</span>
              <span>{s.projects} proj</span>
              <span>{s.confidence}%</span>
            </div>
            <p className="font-body text-xs leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
              {s.fact}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
