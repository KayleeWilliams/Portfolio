/**
 * Fetches the monthly download count for an npm package
 * @param packageName - The npm package name (e.g., "c15t")
 * @returns The number of downloads in the last month, or undefined if the fetch fails
 */
export async function fetchNpmDownloads(
	packageName: string
): Promise<number | undefined> {
	try {
		const response = await fetch(
			`https://api.npmjs.org/downloads/point/last-month/${packageName}`,
			{
				headers: {
					Accept: "application/json",
				},
				// Cache the response for 1 hour to avoid rate limits
				next: { revalidate: 3600 },
			}
		);

		if (!response.ok) {
			return;
		}

		const data = await response.json();
		return data.downloads;
	} catch {
		return;
	}
}
