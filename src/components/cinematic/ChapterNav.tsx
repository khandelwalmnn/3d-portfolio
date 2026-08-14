'use client'

import { chapters } from '@/data/story'
import { motion } from 'framer-motion'
import { useScrollProgress } from './ScrollProgress'

export default function ChapterNav() {
  const { progress, chapter } = useScrollProgress()

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-40 flex items-start justify-between px-5 py-5 md:px-8">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.75 }}
        transition={{ duration: 2.2, delay: 0.8 }}
        className="font-display text-sm tracking-[0.28em] text-violet-100/75"
      >
        MANAN
      </motion.p>

      <div className="pointer-events-auto hidden items-center gap-2.5 md:flex">
        {chapters.map((c, i) => (
          <a
            key={c.id}
            href={`#${c.id}`}
            className={`h-1.5 rounded-full transition-all duration-700 ${
              i === chapter
                ? 'w-5 bg-violet-100 shadow-[0_0_12px_rgba(237,233,254,0.95)]'
                : 'w-1.5 bg-violet-300/30 hover:bg-violet-200/60'
            }`}
            aria-label={c.label}
            title={c.label}
          />
        ))}
      </div>

      <div className="h-px w-16 overflow-hidden bg-violet-300/15 md:w-28">
        <div
          className="h-full bg-gradient-to-r from-violet-200/80 to-violet-100/50 transition-[width] duration-300 ease-out"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
    </div>
  )
}
