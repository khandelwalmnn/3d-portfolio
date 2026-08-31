export function YouTubeEmbed({ videoId, title }: { videoId: string; title: string }) {
  return (
    <div
      className="relative aspect-video w-full overflow-hidden rounded-2xl"
      style={{ border: '3px solid var(--ink)', background: 'var(--paper)' }}
    >
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
      />
    </div>
  )
}
