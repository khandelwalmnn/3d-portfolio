'use client'

import { dreams } from '@/data/story'
import { useReveal } from '@/hooks/use-reveal'
import { SectionHeading } from './SectionHeading'

const dotColors = ['var(--pink)', 'var(--yellow)', 'var(--mint)']

export default function Dreams() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="dreams" className="scroll-mt-24 px-6 py-24 md:px-10">
      <SectionHeading eyebrow="Looking ahead" title="Dreams" />
      <div ref={ref} className="reveal grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {dreams.map((d, i) => (
          <div key={d.id} className="card-hard p-6">
            <span
              className="mb-4 block h-3 w-3 rounded-full border-2"
              style={{ background: dotColors[i % dotColors.length], borderColor: 'var(--ink)' }}
            />
            <h3 className="font-display text-xl">{d.title}</h3>
            <p className="mt-2 font-body text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
              {d.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
