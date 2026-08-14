'use client'

import { dreams } from '@/data/story'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ChapterLabel } from '../Atmosphere'

function DreamOrb({
  dream,
  index,
}: {
  dream: (typeof dreams)[number]
  index: number
}) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  })
  const glow = useTransform(scrollYProgress, [0, 1], [0.25, 1])
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1])

  return (
    <motion.article
      ref={ref}
      style={{ opacity: glow, scale }}
      initial={{ filter: 'blur(8px)' }}
      whileInView={{ filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 1.3, delay: index * 0.08 }}
      className="dream-orb group relative overflow-hidden p-6 md:p-7"
    >
      <span className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-violet-400/15 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />
      <motion.span
        className="mb-5 block h-2.5 w-2.5 rounded-full bg-violet-100 shadow-[0_0_18px_rgba(237,233,254,1)]"
        animate={{ opacity: [0.35, 1, 0.35], scale: [1, 1.4, 1] }}
        transition={{ duration: 3.2 + index * 0.35, repeat: Infinity, ease: 'easeInOut' }}
      />
      <h3 className="font-display text-2xl text-violet-50 md:text-3xl">{dream.title}</h3>
      <p className="mt-3 font-body text-sm leading-relaxed text-violet-100/60">{dream.description}</p>
    </motion.article>
  )
}

export default function Dreams() {
  return (
    <section
      id="dreams"
      className="relative flex min-h-[100svh] w-full flex-col items-center justify-center px-6 py-28"
    >
      <ChapterLabel
        chapter="Chapter VI"
        title="Dreams"
        subtitle="A galaxy of things I want to build — waiting to ignite."
      />

      <div className="relative mx-auto grid w-full max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {dreams.map((dream, i) => (
          <DreamOrb key={dream.id} dream={dream} index={i} />
        ))}
      </div>
    </section>
  )
}
