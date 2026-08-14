'use client'

import { skillsConstellation } from '@/data/story'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChapterLabel } from '../Atmosphere'

type Skill = (typeof skillsConstellation)[number]

function toPct(skill: Skill) {
  return {
    left: 50 + skill.position.x * 14,
    top: 48 - skill.position.y * 16,
  }
}

function SkillStar({
  skill,
  index,
  connected,
  active,
  onHover,
}: {
  skill: Skill
  index: number
  connected: boolean
  active: boolean
  onHover: (skill: Skill | null) => void
}) {
  const { left, top } = toPct(skill)

  return (
    <motion.button
      type="button"
      className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer border-0 bg-transparent p-0"
      style={{ left: `${left}%`, top: `${top}%` }}
      initial={{ opacity: 0, scale: 0.3 }}
      animate={
        connected
          ? { opacity: 1, scale: active ? 1.25 : 1 }
          : { opacity: 0.3, scale: 0.65 }
      }
      transition={{ duration: 1.1, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => onHover(skill)}
      onMouseLeave={() => onHover(null)}
      onFocus={() => onHover(skill)}
      onBlur={() => onHover(null)}
      aria-label={skill.name}
    >
      <span className="relative flex h-3.5 w-3.5 items-center justify-center md:h-4 md:w-4">
        <span
          className={`absolute inset-[-6px] rounded-full blur-[8px] transition-opacity duration-500 ${
            active ? 'bg-violet-200/70 opacity-100' : 'bg-violet-300/35 opacity-70'
          }`}
        />
        <span className="relative h-full w-full rounded-full bg-violet-50 shadow-[0_0_22px_rgba(196,181,253,0.95)]" />
      </span>
      <span
        className={`mt-2.5 block whitespace-nowrap font-body text-[10px] tracking-[0.2em] uppercase transition-colors duration-500 md:text-xs ${
          active ? 'text-violet-50' : 'text-violet-100/55'
        }`}
      >
        {skill.name}
      </span>
    </motion.button>
  )
}

export default function SkillsConstellation() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { amount: 0.3, once: true })
  const [active, setActive] = useState<Skill | null>(null)

  // Hub connections from center skill (Postgres) outward for a true constellation
  const hub = skillsConstellation.find((s) => s.id === 'postgres') ?? skillsConstellation[4]
  const spokes = skillsConstellation.filter((s) => s.id !== hub.id)

  return (
    <section
      ref={ref}
      id="skills"
      className="relative flex min-h-[100svh] w-full flex-col items-center justify-center px-6 py-28"
    >
      <ChapterLabel
        chapter="Chapter II"
        title="Constellation of Skills"
        subtitle="Every star is a craft. Hover to read its light."
      />

      <div className="relative h-[440px] w-full max-w-4xl md:h-[540px]">
        <div className="constellation-glow pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-3xl" />

        <svg className="absolute inset-0 h-full w-full" aria-hidden>
          {spokes.map((skill, i) => {
            const a = toPct(hub)
            const b = toPct(skill)
            return (
              <motion.line
                key={skill.id}
                x1={`${a.left}%`}
                y1={`${a.top}%`}
                x2={`${b.left}%`}
                y2={`${b.top}%`}
                stroke={
                  active?.id === skill.id || active?.id === hub.id
                    ? 'rgba(237,233,254,0.55)'
                    : 'rgba(196,181,253,0.28)'
                }
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.35 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              />
            )
          })}
        </svg>

        {skillsConstellation.map((skill, i) => (
          <SkillStar
            key={skill.id}
            skill={skill}
            index={i}
            connected={inView}
            active={active?.id === skill.id}
            onHover={setActive}
          />
        ))}

        <AnimatePresence>
          {active && (
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.98 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="glass-panel pointer-events-none absolute bottom-0 left-1/2 z-10 w-[min(92%,380px)] -translate-x-1/2 p-5 text-left"
            >
              <p className="font-display text-2xl text-violet-50">{active.name}</p>
              <div className="mt-4 grid grid-cols-3 gap-2 font-body text-[11px] tracking-wide text-violet-200/70 uppercase">
                <div>
                  <p className="text-lg text-violet-100/95">{active.years}y</p>
                  <p className="mt-0.5 opacity-55">Experience</p>
                </div>
                <div>
                  <p className="text-lg text-violet-100/95">{active.projects}</p>
                  <p className="mt-0.5 opacity-55">Projects</p>
                </div>
                <div>
                  <p className="text-lg text-violet-100/95">{active.confidence}%</p>
                  <p className="mt-0.5 opacity-55">Confidence</p>
                </div>
              </div>
              <p className="mt-4 font-body text-sm leading-relaxed text-violet-100/65">{active.fact}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
