export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-10 md:mb-14">
      <p
        className="font-mono text-xs uppercase tracking-[0.25em]"
        style={{ color: 'rgba(251,247,236,0.65)' }}
      >
        {eyebrow}
      </p>
      <h2 className="mt-2 font-display text-4xl text-[var(--paper)] md:text-6xl">{title}</h2>
    </div>
  )
}
