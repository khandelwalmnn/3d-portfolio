'use client'

import { AmbientOrbs } from '../Atmosphere'
import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const bootLines = [
  'Initializing Systems...',
  'Loading Experience...',
  'Loading Projects...',
  'Loading Dreams...',
  'Ready.',
]

const roles = ['AI Engineer.', 'React Native Developer.', 'Builder.', 'Problem Solver.']

export default function Beginning() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { amount: 0.35 })
  const [phase, setPhase] = useState(0)
  const [bootIndex, setBootIndex] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current) return
    started.current = true
    const timers = [
      setTimeout(() => setPhase(1), 700),
      setTimeout(() => setPhase(2), 2600),
      setTimeout(() => setPhase(3), 4400),
      setTimeout(() => setPhase(4), 6000),
    ]
    return () => timers.forEach(clearTimeout)
  }, [inView])

  useEffect(() => {
    if (phase < 4) return
    if (bootIndex >= bootLines.length) return
    const t = setTimeout(() => setBootIndex((i) => i + 1), 650)
    return () => clearTimeout(t)
  }, [phase, bootIndex])

  return (
    <section
      ref={ref}
      id="beginning"
      className="relative flex min-h-[100svh] w-full flex-col items-center justify-center px-6 py-24"
    >
      <AmbientOrbs />
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 14, filter: 'blur(6px)' }}
          animate={phase >= 1 ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-xl tracking-wide text-violet-100/90 md:text-2xl"
        >
          Every engineer begins somewhere.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 14, filter: 'blur(6px)' }}
          animate={phase >= 2 ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 font-display text-lg text-violet-200/70 md:text-xl"
        >
          Welcome to my universe.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={phase >= 3 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 space-y-3"
        >
          <p className="font-display text-5xl text-violet-50 md:text-7xl">Hi.</p>
          <p className="font-display text-3xl text-violet-100/95 md:text-5xl">
            I&apos;m <span className="text-glow">Manan.</span>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 pt-3">
            {roles.map((role, i) => (
              <motion.span
                key={role}
                initial={{ opacity: 0 }}
                animate={phase >= 3 ? { opacity: 0.65 } : {}}
                transition={{ delay: 0.4 + i * 0.2, duration: 1 }}
                className="font-body text-[11px] tracking-[0.22em] text-violet-200/70 uppercase md:text-xs"
              >
                {role}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          animate={phase >= 4 ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="terminal-panel mt-16 w-full max-w-md text-left"
        >
          <div className="mb-3 flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-violet-400/45" />
            <span className="h-2.5 w-2.5 rounded-full bg-violet-400/25" />
            <span className="h-2.5 w-2.5 rounded-full bg-violet-400/15" />
            <span className="ml-auto font-mono text-[10px] tracking-wider text-violet-300/40">
              universe.sh
            </span>
          </div>
          <div className="font-mono text-sm leading-relaxed text-violet-100/80">
            {bootLines.slice(0, bootIndex).map((line) => (
              <motion.p
                key={line}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className={line === 'Ready.' ? 'text-emerald-200/90' : ''}
              >
                <span className="text-violet-400/70">{'> '}</span>
                {line}
              </motion.p>
            ))}
            {bootIndex >= bootLines.length && (
              <p className="mt-1">
                <span className="text-violet-400/70">{'> '}</span>
                <span className="cursor-blink">_</span>
              </p>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={bootIndex >= bootLines.length ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="mt-14 flex flex-col items-center gap-3"
        >
          <p className="font-body text-[10px] tracking-[0.4em] text-violet-200/45 uppercase">
            Scroll to travel
          </p>
          <motion.span
            className="scroll-cue"
            animate={{ y: [0, 8, 0], opacity: [0.35, 0.8, 0.35] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </section>
  )
}
