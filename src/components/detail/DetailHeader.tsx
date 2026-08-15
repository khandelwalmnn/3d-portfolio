import Link from 'next/link'

export function DetailHeader({
  backHref,
  backLabel,
  eyebrow,
}: {
  backHref: string
  backLabel: string
  eyebrow: string
}) {
  return (
    <div className="mb-10 flex items-center justify-between">
      <Link href={backHref} className="btn-hard text-xs">
        ← {backLabel}
      </Link>
      <span className="font-display text-lg text-[var(--paper)]">Manan</span>
      <span className="sr-only">{eyebrow}</span>
    </div>
  )
}
