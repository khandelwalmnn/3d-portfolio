function parseGithubRepo(githubUrl: string): { owner: string; repo: string } | null {
  const match = githubUrl.match(/github\.com\/([^/]+)\/([^/?#]+)/)
  if (!match) return null
  return { owner: match[1], repo: match[2].replace(/\.git$/, '') }
}

export async function fetchGithubReadme(githubUrl: string): Promise<string | null> {
  const parsed = parseGithubRepo(githubUrl)
  if (!parsed) return null

  const { owner, repo } = parsed
  const branches = ['master', 'main']

  for (const branch of branches) {
    const res = await fetch(
      `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/README.md`,
      { next: { revalidate: 3600 } },
    )
    if (res.ok) return res.text()
  }

  return null
}
