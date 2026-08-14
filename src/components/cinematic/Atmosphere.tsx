'use client'

import { motion } from 'framer-motion'

export function ChapterLabel({ chapter, title, subtitle }: { chapter: string; title: string; subtitle: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.7 }}
      transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      className="mb-14 text-center md:mb-16"
    >
      <p className="font-body text-[11px] tracking-[0.45em] text-violet-300/45 uppercase">{chapter}</p>
      <h2 className="mt-3 font-display text-4xl text-violet-50 md:text-5xl lg:text-6xl">{title}</h2>
      <motion.div
        className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-violet-300/50 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.3 }}
      />
      <p className="mt-4 font-body text-sm text-violet-200/50 md:text-base">{subtitle}</p>
    </motion.div>
  )
}

export function TravelBridge({ label }: { label: string }) {
  return (
    <div className="pointer-events-none relative flex h-[32vh] items-center justify-center overflow-hidden" aria-hidden>
      <div className="warp-lines absolute inset-0 opacity-40" />
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.45 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1.8 }}
        className="relative z-10 font-body text-[10px] tracking-[0.5em] text-violet-200/60 uppercase"
      >
        {label}
      </motion.p>
    </div>
  )
}

export function RisingParticles({ count = 24 }: { count?: number }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="rise-particle"
          style={{
            left: `${(i * 37) % 100}%`,
            animationDelay: `${(i % 8) * 0.6}s`,
            animationDuration: `${8 + (i % 5) * 1.5}s`,
          }}
        />
      ))}
    </div>
  )
}

export function AmbientOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <span className="ambient-orb left-[12%] top-[20%]" />
      <span className="ambient-orb ambient-orb-delay left-[78%] top-[35%]" />
      <span className="ambient-orb left-[55%] top-[70%]" style={{ animationDelay: '2s' }} />
    </div>
  )
}
