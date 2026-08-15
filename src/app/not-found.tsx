import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex min-h-svh w-full flex-col items-center justify-center px-6 text-center">
      <span className="tag-pill">Error 404</span>
      <h1 className="mt-6 font-display text-6xl text-[var(--paper)] md:text-8xl">Page not found.</h1>
      <p className="mt-5 max-w-md font-body text-base text-[var(--paper)]">
        That page wandered off. Let&apos;s get you back to the good stuff.
      </p>
      <Link href="/" className="btn-hard btn-hard-dark mt-9">
        Take me home
      </Link>
    </main>
  )
}
