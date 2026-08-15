import { DetailHeader } from '@/components/detail/DetailHeader'
import { Slideshow } from '@/components/detail/Slideshow'
import { projects } from '@/data/story'
import { FaGithub } from 'react-icons/fa'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }))
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find((p) => p.id === slug)
  if (!project) notFound()

  return (
    <main className="min-h-svh w-full px-6 py-16 md:py-20">
      <div className="mx-auto max-w-3xl">
        <DetailHeader backHref="/#projects" backLabel="Back home" eyebrow="Project" />

        <Slideshow slides={project.slides ?? [project.image]} alt={project.title} />

        <div className="mt-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em]" style={{ color: 'rgba(251,247,236,0.65)' }}>
            {project.subtitle}
          </p>
          <h1 className="mt-2 font-display text-4xl text-[var(--paper)] md:text-6xl">{project.title}</h1>
          <p className="mt-6 font-body text-base leading-relaxed text-[var(--paper)]">
            {project.description}
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="card-hard p-6">
            <p className="font-mono text-xs uppercase tracking-[0.15em]" style={{ color: 'var(--ink-soft)' }}>
              Architecture
            </p>
            <p className="mt-2 font-body text-sm leading-relaxed">{project.architecture}</p>
          </div>
          <div className="card-hard p-6">
            <p className="font-mono text-xs uppercase tracking-[0.15em]" style={{ color: 'var(--ink-soft)' }}>
              Challenges
            </p>
            <p className="mt-2 font-body text-sm leading-relaxed">{project.challenges}</p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="tag-pill">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-hard btn-hard-dark">
            <FaGithub /> GitHub
          </a>
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-hard">
            Live demo
          </a>
        </div>
      </div>
    </main>
  )
}
