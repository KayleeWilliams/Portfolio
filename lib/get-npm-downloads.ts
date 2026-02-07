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
