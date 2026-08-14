'use client'

import { workshopLines } from '@/data/story'
import { motion } from 'framer-motion'
import { ChapterLabel } from '../Atmosphere'

const holograms = [
  { label: 'model.infer()', x: '10%', y: '16%' },
  { label: 'architecture.svg', x: '70%', y: '20%' },
  { label: 'const dream =', x: '14%', y: '70%' },
  { label: 'await ship()', x: '66%', y: '74%' },
  { label: 'graph.optimize', x: '42%', y: '12%' },
]

function Petal({ i }: { i: number }) {
  const left = 5 + ((i * 19) % 90)
  const delay = (i % 8) * 0.55
  const duration = 9 + (i % 6) * 1.3

  return (
    <motion.span
      className="pointer-events-none absolute h-2.5 w-2 rounded-[100%] bg-pink-200/55 shadow-[0_0_8px_rgba(251,207,232,0.4)]"
      style={{ left: `${left}%`, top: '-4%' }}
      animate={{
        y: ['0vh', '115vh'],
        x: [0, i % 2 === 0 ? 50 : -50],
        rotate: [0, 220],
        opacity: [0, 0.8, 0.8, 0],
      }}
      transition={{ duration, delay, repeat: Infinity, ease: 'linear' }}
    />
  )
}

export default function Workshop() {
  return (
    <section
      id="workshop"
      className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden px-6 py-28"
    >
      {Array.from({ length: 18 }).map((_, i) => (
        <Petal key={i} i={i} />
      ))}

      <div className="relative z-10 w-full max-w-4xl">
        <ChapterLabel
          chapter="Chapter V"
          title="The Workshop"
          subtitle="Where nights turn into systems, and coffee into commits."
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="workshop-scene relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#3b2166]/35 via-[#1a0f2e]/75 to-[#0b0618]/95" />
          <div className="window-glow pointer-events-none absolute -right-10 top-0 h-48 w-48 rounded-full bg-violet-400/15 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-1/4 h-24 w-40 rounded-full bg-amber-300/10 blur-2xl" />

          {holograms.map((h, i) => (
            <motion.span
              key={h.label}
              className="absolute font-mono text-[10px] text-cyan-100/45 md:text-xs"
              style={{ left: h.x, top: h.y }}
              animate={{ opacity: [0.2, 0.65, 0.2], y: [0, -8, 0] }}
              transition={{ duration: 4.5 + i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
            >
              {h.label}
            </motion.span>
          ))}

          <div className="relative z-10 grid gap-6 p-6 md:grid-cols-[1.25fr_0.75fr] md:p-10">
            <div className="space-y-4">
              <div className="desk-surface rounded-sm border border-violet-300/15 bg-[#120a22]/75 p-4 shadow-[inset_0_0_40px_rgba(124,58,237,0.08)]">
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-body text-[10px] tracking-[0.3em] text-violet-300/50 uppercase">
                    Monitor
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-300/80 shadow-[0_0_8px_rgba(110,231,183,0.9)]" />
                    <span className="font-mono text-[10px] text-violet-300/40">live</span>
                  </span>
                </div>
                <div className="space-y-2 font-mono text-xs leading-relaxed text-violet-100/70">
                  {workshopLines.map((line, i) => (
                    <motion.p
                      key={line}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.25 + i * 0.18, duration: 0.9 }}
                    >
                      <span className="text-violet-400/55">{'// '}</span>
                      {line}
                    </motion.p>
                  ))}
                  <p>
                    <span className="cursor-blink text-violet-200">█</span>
                  </p>
                </div>
              </div>

              <div className="flex items-end gap-4">
                <div className="h-11 flex-1 rounded-sm border border-violet-300/10 bg-gradient-to-b from-violet-900/45 to-[#0b0618] shadow-inner">
                  <div className="flex h-full items-center justify-center gap-1 px-3 opacity-40">
                    {Array.from({ length: 14 }).map((_, i) => (
                      <span key={i} className="h-2 w-3 rounded-[1px] bg-violet-200/30" />
                    ))}
                  </div>
                </div>
                <div className="relative h-9 w-16">
                  <div className="absolute inset-x-1 bottom-0 h-7 rounded-full border border-amber-200/25 bg-gradient-to-b from-amber-100/35 to-amber-900/50 shadow-[0_0_24px_rgba(251,191,36,0.2)]" />
                  <div className="absolute left-1/2 top-0 h-2 w-5 -translate-x-1/2 rounded-t-sm bg-amber-100/20" />
                </div>
              </div>
              <p className="font-body text-[11px] tracking-[0.22em] text-violet-300/40 uppercase">
                Keyboard · Coffee · Terminal
              </p>
            </div>

            <div className="flex flex-col justify-center gap-4">
              <div className="glass-panel p-4">
                <p className="font-display text-xl text-violet-50">Currently</p>
                <p className="mt-2 font-body text-sm leading-relaxed text-violet-100/65">
                  Full Stack at Badho — React Native, event-driven backends, and AI-shaped product
                  surfaces for retailers across India.
                </p>
              </div>
              <div className="glass-panel p-4">
                <p className="font-body text-[11px] tracking-[0.25em] text-violet-300/50 uppercase">
                  Atmosphere
                </p>
                <p className="mt-2 font-body text-sm text-violet-100/65">
                  Soft glow. Quiet focus. Code floating like fireflies above the desk.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
