'use client'

import { journeyMilestones } from '@/data/story'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ChapterLabel } from '../Atmosphere'

function Lantern({ delay, left, top }: { delay: number; left: string; top: string }) {
  return (
    <motion.span
      className="absolute flex flex-col items-center"
      style={{ left, top }}
      animate={{ y: [0, -16, 0], opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 5.5 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      <span className="h-4 w-3 rounded-sm bg-gradient-to-b from-amber-100 to-amber-400/80 shadow-[0_0_22px_rgba(253,230,138,0.85)]" />
      <span className="mt-0.5 h-3 w-px bg-amber-200/30" />
    </motion.span>
  )
}

export default function JourneyTimeline() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const pathDraw = useTransform(scrollYProgress, [0.12, 0.72], [0, 1])

  return (
    <section
      ref={ref}
      id="journey"
      className="relative flex min-h-[140svh] w-full flex-col items-center px-6 py-28"
    >
      <ChapterLabel
        chapter="Chapter IV"
        title="Journey Timeline"
        subtitle="A lantern-lit path through milestones discovered in the dark."
      />

      <div className="relative w-full max-w-3xl">
        <Lantern delay={0} left="8%" top="6%" />
        <Lantern delay={1.2} left="82%" top="18%" />
        <Lantern delay={0.6} left="14%" top="42%" />
        <Lantern delay={1.8} left="78%" top="58%" />
        <Lantern delay={0.9} left="20%" top="78%" />

        <svg
          className="pointer-events-none absolute left-1/2 top-0 h-full w-28 -translate-x-1/2"
          viewBox="0 0 100 900"
          preserveAspectRatio="none"
          aria-hidden
        >
          <motion.path
            d="M50 20 C 18 140, 82 230, 50 360 C 18 490, 82 610, 50 880"
            fill="none"
            stroke="rgba(253,230,138,0.4)"
            strokeWidth="1.5"
            style={{ pathLength: pathDraw }}
          />
        </svg>

        <div className="relative space-y-28 py-10">
          {journeyMilestones.map((m, i) => (
            <motion.article
              key={m.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1] }}
              className={`glass-panel relative max-w-md p-6 md:p-7 ${
                i % 2 === 0 ? 'mr-auto' : 'ml-auto'
              }`}
            >
              <div
                className={`absolute top-9 h-3.5 w-3.5 rounded-full bg-amber-200 shadow-[0_0_18px_rgba(253,230,138,1)] ${
                  i % 2 === 0 ? '-right-8' : '-left-8'
                }`}
              />
              <p className="font-body text-[11px] tracking-[0.28em] text-amber-100/55 uppercase">
                {m.period}
              </p>
              <h3 className="mt-2 font-display text-2xl text-violet-50 md:text-3xl">{m.title}</h3>
              <p className="mt-1 font-body text-sm text-violet-200/70">{m.role}</p>
              <p className="mt-4 font-body text-sm leading-relaxed text-violet-100/65">{m.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {m.focus.map((f) => (
                  <span
                    key={f}
                    className="border border-amber-200/20 bg-amber-100/5 px-2.5 py-1 font-body text-[10px] tracking-wide text-amber-100/70 uppercase"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
