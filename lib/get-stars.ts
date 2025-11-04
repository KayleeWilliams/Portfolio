const GITHUB_URL_PATTERN = /github\.com\/([^/]+)\/([^/]+)/;
const GIT_SUFFIX_PATTERN = /\.git$/;

/**
 * Fetches the star count for a GitHub repository
 * @param repoUrl - The GitHub repository URL (e.g., "https://github.com/owner/repo")
 * @returns The number of stars, or undefined if the fetch fails
 */
export async function fetchStars(repoUrl: string): Promise<number | undefined> {
  try {
    // Extract owner and repo name from the URL
    const match = repoUrl.match(GITHUB_URL_PATTERN);

    if (!match) {
      return;
    }

    const [, owner, repo] = match;

    // Remove .git suffix if present
    const cleanRepo = repo.replace(GIT_SUFFIX_PATTERN, "");

    // Fetch repository data from GitHub API
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${cleanRepo}`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          // Optional: Add GitHub token for higher rate limits
          // Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
        // Cache the response for 1 hour to avoid rate limits
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
