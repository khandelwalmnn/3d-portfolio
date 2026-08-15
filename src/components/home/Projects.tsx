'use client'

import { projects } from '@/data/story'
import { useReveal } from '@/hooks/use-reveal'
import Image from 'next/image'
import Link from 'next/link'
import { SectionHeading } from './SectionHeading'

const dotColors = ['var(--pink)', 'var(--yellow)', 'var(--mint)']

export default function Projects() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="projects" className="scroll-mt-24 px-6 py-24 md:px-10">
      <SectionHeading eyebrow="Projects" title="Worlds I've built" />
      <div ref={ref} className="reveal grid gap-6 md:grid-cols-3">
        {projects.map((project, i) => (
          <Link
            key={project.id}
            href={`/projects/${project.id}`}
            className="card-hard group block overflow-hidden"
          >
            <div
              className="relative aspect-[4/3] w-full overflow-hidden"
              style={{ borderBottom: '3px solid var(--ink)' }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority={i === 0}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-5">
              <span
                className="mb-3 block h-3 w-3 rounded-full border-2"
                style={{ background: dotColors[i % dotColors.length], borderColor: 'var(--ink)' }}
              />
              <h3 className="font-display text-2xl">{project.title}</h3>
              <p className="mt-1 font-body text-sm" style={{ color: 'var(--ink-soft)' }}>
                {project.subtitle}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tech.slice(0, 3).map((t) => (
                  <span key={t} className="tag-pill-outline">
                    {t}
                  </span>
                ))}
              </div>
              <p className="mt-4 font-mono text-xs" style={{ color: 'var(--ink-soft)' }}>
                View project →
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
