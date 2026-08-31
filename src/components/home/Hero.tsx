import Image from 'next/image'

const roles = ['Backend Developer', 'React Native Developer', 'Builder', 'Problem Solver']

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-[88svh] w-full scroll-mt-24 flex-col items-start justify-center gap-10 px-6 py-24 md:flex-row md:items-center md:gap-12 md:px-10"
    >
      <div className="flex-1">
        <span className="tag-pill">Available for new projects</span>

        <h1 className="mt-6 font-display text-6xl leading-[1.02] text-[var(--paper)] md:text-8xl">
          Hey, I&apos;m
          <br />
          Manan.
        </h1>

        <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-[var(--paper)] md:text-xl">
          React Native developer and backend engineer. I build scalable mobile apps, event-driven
          systems, and scrappy tools — currently going deeper into backend engineering and AI.
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
      </div>

      <div className="card-hard relative aspect-[3/4] w-full max-w-xs shrink-0 overflow-hidden md:max-w-sm">
        <Image
          src="https://i.ibb.co/7x3XCfc8/IMG-20240827-222543.jpg"
          alt="Manan Khandelwal"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 384px"
        />
      </div>
    </section>
  )
}
