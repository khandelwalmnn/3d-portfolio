const roles = ['AI Engineer', 'React Native Developer', 'Builder', 'Problem Solver']

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-[88svh] w-full scroll-mt-24 flex-col items-start justify-center px-6 py-24 md:px-10"
    >
      <span className="tag-pill">Available for new projects</span>

      <h1 className="mt-6 font-display text-6xl leading-[1.02] text-[var(--paper)] md:text-8xl">
        Hey, I&apos;m
        <br />
        Manan.
      </h1>

      <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-[var(--paper)] md:text-xl">
        AI engineer and React Native developer. I build event-driven products, scrappy tools, and
        the odd game engine — currently at Badho Technologies.
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {roles.map((r) => (
          <span
            key={r}
            className="rounded-full border-2 px-3 py-1 font-mono text-xs"
            style={{ borderColor: 'var(--paper)', color: 'var(--paper)' }}
          >
            {r}
          </span>
        ))}
      </div>

      <div className="mt-9 flex flex-wrap gap-3">
        <a href="#projects" className="btn-hard">
          See the work
        </a>
        <a href="#contact" className="btn-hard btn-hard-dark">
          Say hi
        </a>
      </div>
    </section>
  )
}
