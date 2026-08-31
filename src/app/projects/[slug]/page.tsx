import { DetailHeader } from '@/components/detail/DetailHeader'
import { GithubReadme } from '@/components/detail/GithubReadme'
import { ProjectHeroImage } from '@/components/detail/ProjectHeroImage'
import { Slideshow } from '@/components/detail/Slideshow'
import { YouTubeEmbed } from '@/components/detail/YouTubeEmbed'
import { projects } from '@/data/story'
import { getYoutubeVideoId } from '@/lib/youtube'
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

  const slides = project.slides ?? [project.image]
  const youtubeId = getYoutubeVideoId(project.demo)

  return (
    <main className="min-h-svh w-full px-6 py-16 md:py-20">
      <div className="mx-auto max-w-3xl">
        <DetailHeader backHref="/#projects" backLabel="Back home" eyebrow="Project" />

        {project.githubReadme && youtubeId ? (
          <YouTubeEmbed videoId={youtubeId} title={project.title} />
        ) : project.githubReadme ? (
          <ProjectHeroImage src={project.image} alt={project.title} />
        ) : (
          <Slideshow slides={slides} alt={project.title} minSlides={slides.length} />
        )}

        <div className="mt-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em]" style={{ color: 'rgba(251,247,236,0.65)' }}>
            {project.subtitle}
          </p>
          <h1 className="mt-2 font-display text-4xl text-[var(--paper)] md:text-6xl">{project.title}</h1>
          <p className="mt-6 font-body text-base leading-relaxed text-[var(--paper)]">
            {project.description}
          </p>
        </div>

        {project.githubReadme ? (
          <GithubReadme githubUrl={project.github} />
        ) : (
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
        )}

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
            {youtubeId ? 'Watch demo' : 'Live demo'}
          </a>
        </div>
      </div>
    </main>
  )
}
