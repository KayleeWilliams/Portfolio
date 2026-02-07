export function formatDownloads(downloads: number): string {
  const million = 1_000_000;
  const thousand = 1000;
  if (downloads >= million) {
    return `${(downloads / million).toFixed(1)}M`;
  }
  if (downloads >= thousand) {
    return `${(downloads / thousand).toFixed(1)}k`;
  }
  return downloads.toLocaleString();
}
