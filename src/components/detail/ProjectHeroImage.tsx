import Image from 'next/image'

export function ProjectHeroImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      className="relative aspect-video w-full overflow-hidden rounded-2xl"
      style={{ border: '3px solid var(--ink)', background: 'var(--paper)' }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 800px"
      />
    </div>
  )
}
