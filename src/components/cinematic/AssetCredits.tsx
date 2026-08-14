'use client'

import { assetCredits } from '@/data/story'
import { motion } from 'framer-motion'

export default function AssetCredits() {
  return (
    <footer className="relative z-10 border-t border-violet-300/10 px-6 py-10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="font-body text-[10px] tracking-[0.35em] text-violet-300/40 uppercase">
          Visual credits
        </p>
        <ul className="mt-4 space-y-2 font-body text-xs leading-relaxed text-violet-200/45">
          {assetCredits.map((c) => (
            <li key={c.name}>
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-100/60 underline-offset-2 transition-colors hover:text-violet-100 hover:underline"
              >
                {c.name}
              </a>
              {' — '}
              {c.author} ({c.license}). {c.use}.
            </li>
          ))}
          <li>Soft nebula sprites — original assets generated for this experience.</li>
        </ul>
      </motion.div>
    </footer>
  )
}
