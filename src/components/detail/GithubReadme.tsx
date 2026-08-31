import { fetchGithubReadme } from '@/lib/github-readme'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export async function GithubReadme({ githubUrl }: { githubUrl: string }) {
  const markdown = await fetchGithubReadme(githubUrl)

  if (!markdown) {
    return (
      <div className="card-hard mt-10 p-6">
        <p className="font-body text-sm" style={{ color: 'var(--ink-soft)' }}>
          Could not load README from GitHub.
        </p>
      </div>
    )
  }

  return (
    <div className="readme-content card-hard mt-10 p-6 md:p-8">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </div>
  )
}
