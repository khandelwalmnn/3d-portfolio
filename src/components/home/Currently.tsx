import { workshopLines } from '@/data/story'
import { SectionHeading } from './SectionHeading'

export default function Currently() {
  return (
    <section id="currently" className="scroll-mt-24 px-6 py-24 md:px-10">
      <SectionHeading eyebrow="Right now" title="Currently building" />
      <div className="card-hard mx-auto grid max-w-3xl gap-6 p-7 md:grid-cols-[1fr_1.1fr]">
        <p className="font-body text-sm leading-relaxed">
          Full Stack Developer at Badho Technologies — React Native, event-driven backends, and
          AI-shaped product surfaces for retailers across India.
        </p>
        <div
          className="rounded-2xl p-4 font-mono text-xs leading-relaxed"
          style={{ border: '3px solid var(--ink)', background: 'var(--ink)', color: 'var(--mint)' }}
        >
          {workshopLines.map((line) => (
            <p key={line}>&gt; {line}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
