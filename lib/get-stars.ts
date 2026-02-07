const GITHUB_URL_PATTERN = /github\.com\/([^/]+)\/([^/]+)/;
const GIT_SUFFIX_PATTERN = /\.git$/;

export async function fetchStars(repoUrl: string): Promise<number | undefined> {
  try {
    const match = repoUrl.match(GITHUB_URL_PATTERN);

    if (!match) {
      return;
    }

    const [, owner, repo] = match;
    const cleanRepo = repo.replace(GIT_SUFFIX_PATTERN, "");

    // TODO: Add GitHub token for higher rate limits
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${cleanRepo}`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      return;
    }

    const data = await response.json();
    return data.stargazers_count;
  } catch {
    return;
  }
}
