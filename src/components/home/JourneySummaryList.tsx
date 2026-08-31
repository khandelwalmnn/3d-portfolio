import type { JourneySummaryItem } from '@/data/story'

function pointKey(point: JourneySummaryItem, index: number) {
  return typeof point === 'string' ? point : `${point.text}-${point.link?.label ?? index}`
}

export function JourneySummaryList({
  summary,
  className = 'mt-3 list-disc space-y-1 pl-5 font-body text-sm leading-relaxed',
  linkClassName = 'font-bold underline underline-offset-2',
}: {
  summary: JourneySummaryItem[]
  className?: string
  linkClassName?: string
}) {
  return (
    <ul className={className}>
      {summary.map((point, index) => (
        <li key={pointKey(point, index)}>
          {typeof point === 'string' ? (
            point
          ) : (
            <>
              {point.text}
              {point.link ? (
                <>
                  {' '}
                  <a
                    href={point.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClassName}
                  >
                    {point.link.label}
                  </a>
                </>
              ) : null}
            </>
          )}
        </li>
      ))}
    </ul>
  )
}
