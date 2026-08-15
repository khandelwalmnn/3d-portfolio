import { DetailHeader } from '@/components/detail/DetailHeader'
import { Slideshow } from '@/components/detail/Slideshow'
import { journeyMilestones } from '@/data/story'
import Image from 'next/image'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return journeyMilestones.map((m) => ({ slug: m.id }))
}

export default async function JourneyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const milestone = journeyMilestones.find((m) => m.id === slug)
  if (!milestone) notFound()

  return (
    <main className="min-h-svh w-full px-6 py-16 md:py-20">
      <div className="mx-auto max-w-3xl">
        <DetailHeader backHref="/#journey" backLabel="Back home" eyebrow="Role" />

        <Slideshow slides={milestone.slides} alt={milestone.title} />

        <div className="mt-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em]" style={{ color: 'rgba(251,247,236,0.65)' }}>
            {milestone.period}
          </p>
          <h1 className="mt-2 font-display text-4xl text-[var(--paper)] md:text-6xl">{milestone.title}</h1>
          <p className="mt-2 font-body text-base text-[var(--paper)]">{milestone.role}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {milestone.focus.map((f) => (
              <span key={f} className="tag-pill">
                {f}
              </span>
            ))}
          </div>
        </div>

        <div className="card-hard mt-10 p-7">
          <p className="font-mono text-xs uppercase tracking-[0.15em]" style={{ color: 'var(--ink-soft)' }}>
            Overview
          </p>
          <p className="mt-3 font-body text-sm leading-relaxed">{milestone.overview ?? milestone.summary}</p>
        </div>

        <div className="mt-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em]" style={{ color: 'rgba(251,247,236,0.65)' }}>
            What I built
          </p>

          {milestone.features && milestone.features.length > 0 ? (
            <div className="mt-6 space-y-6">
              {milestone.features.map((feature) => (
                <div key={feature.title} className="card-hard p-6">
                  <h3 className="font-display text-xl">{feature.title}</h3>
                  <p className="mt-2 font-body text-sm leading-relaxed">{feature.description}</p>
                  {feature.screenshots && feature.screenshots.length > 0 && (
                    <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3">
                      {feature.screenshots.map((src) => (
                        <div
                          key={src}
                          className="relative aspect-video overflow-hidden rounded-xl"
                          style={{ border: '2px solid var(--ink)' }}
                        >
                          <Image src={src} alt={feature.title} fill className="object-cover" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="card-hard mt-6 px-6 py-10 text-center" style={{ borderStyle: 'dashed' }}>
              <p className="font-mono text-xs uppercase tracking-[0.1em]" style={{ color: 'var(--ink-soft)' }}>
                Feature-by-feature breakdown coming soon
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
