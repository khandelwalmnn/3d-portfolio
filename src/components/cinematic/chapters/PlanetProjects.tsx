'use client'

import { projectPlanets } from '@/data/story'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { ChapterLabel } from '../Atmosphere'

type Project = (typeof projectPlanets)[number]

function ProjectPortal({
  project,
  index,
  onSelect,
}: {
  project: Project
  index: number
  onSelect: (p: Project) => void
}) {
  return (
    <motion.button
      type="button"
      onClick={() => onSelect(project)}
      aria-label={`Open ${project.title}`}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 1.2, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -10 }}
      className="group relative w-full max-w-sm border-0 bg-transparent p-0 text-left"
    >
      <span
        className="pointer-events-none absolute -inset-6 rounded-full opacity-40 blur-3xl transition-opacity duration-700 group-hover:opacity-70"
        style={{ background: project.color }}
      />

      <span className="project-portal relative block overflow-hidden">
        <span className="relative block aspect-[4/3] overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 90vw, 320px"
          />
          <span
            className="pointer-events-none absolute inset-0"
            style={{
              background: `linear-gradient(to top, #0b0618f2 0%, transparent 55%), radial-gradient(circle at 30% 20%, ${project.color}44, transparent 55%)`,
            }}
          />
          <span className="absolute left-3 top-3 font-mono text-[10px] tracking-[0.25em] text-violet-100/50 uppercase">
            0{index + 1}
          </span>
        </span>

        <span className="relative block px-4 pb-5 pt-4">
          <span className="font-display text-2xl text-violet-50 md:text-3xl">{project.title}</span>
          <span className="mt-1 block font-body text-[11px] tracking-[0.2em] text-violet-200/50 uppercase">
            {project.subtitle}
          </span>
          <span className="mt-4 flex flex-wrap gap-1.5">
            {project.tech.slice(0, 3).map((t) => (
              <span
                key={t}
                className="border border-violet-300/15 bg-violet-500/10 px-2 py-0.5 font-body text-[10px] text-violet-100/65"
              >
                {t}
              </span>
            ))}
          </span>
          <span className="mt-4 block font-body text-[10px] tracking-[0.3em] text-violet-300/40 uppercase transition-colors duration-500 group-hover:text-violet-100/70">
            Enter memory →
          </span>
        </span>
      </span>
    </motion.button>
  )
}

function ProjectDetail({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <button
        type="button"
        className="absolute inset-0 bg-[#070412]/85 backdrop-blur-md"
        onClick={onClose}
        aria-label="Close project"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="glass-panel relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto p-6 md:p-8"
        style={{ boxShadow: `0 0 80px ${project.color}33` }}
      >
        <div className="relative mb-6 aspect-[16/9] overflow-hidden rounded-sm">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 640px"
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: `linear-gradient(to top, #0b0618f0, transparent 50%), radial-gradient(circle at 70% 20%, ${project.color}55, transparent 55%)`,
            }}
          />
        </div>

        <p className="font-body text-xs tracking-[0.3em] text-violet-300/60 uppercase">
          {project.subtitle}
        </p>
        <h3 className="mt-2 font-display text-4xl text-violet-50">{project.title}</h3>
        <p className="mt-4 font-body text-sm leading-relaxed text-violet-100/70">{project.description}</p>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <div>
            <p className="font-body text-xs tracking-[0.25em] text-violet-300/50 uppercase">
              Architecture
            </p>
            <p className="mt-2 font-body text-sm text-violet-100/65">{project.architecture}</p>
          </div>
          <div>
            <p className="font-body text-xs tracking-[0.25em] text-violet-300/50 uppercase">
              Challenges
            </p>
            <p className="mt-2 font-body text-sm text-violet-100/65">{project.challenges}</p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="border border-violet-300/20 bg-violet-500/10 px-3 py-1 font-body text-[11px] tracking-wide text-violet-100/80"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glow-btn inline-flex items-center gap-2"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="glow-btn-ghost inline-flex items-center gap-2"
          >
            Demo
          </a>
          <button type="button" onClick={onClose} className="glow-btn-ghost ml-auto">
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function PlanetProjects() {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <section
      id="projects"
      className="relative flex min-h-[100svh] w-full flex-col items-center justify-center px-6 py-28"
    >
      <ChapterLabel
        chapter="Chapter III"
        title="Worlds I've Built"
        subtitle="Memories floating in the night. Click one to step inside."
      />

      <div className="relative flex w-full max-w-5xl flex-col items-center gap-10 md:flex-row md:items-end md:justify-center md:gap-8">
        {projectPlanets.map((project, i) => (
          <div
            key={project.id}
            className={i === 1 ? 'md:-translate-y-8' : i === 2 ? 'md:translate-y-4' : ''}
          >
            <ProjectPortal project={project} index={i} onSelect={setSelected} />
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selected && <ProjectDetail project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  )
}
