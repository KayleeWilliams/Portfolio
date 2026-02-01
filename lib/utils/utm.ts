/**
 * Adds UTM parameters to a URL for analytics tracking
 * @param url - The base URL to add parameters to
 * @param medium - The utm_medium value (e.g., 'hero', 'about', 'project-card')
 * @param content - Optional utm_content value for more specific tracking
 * @returns The URL with UTM parameters appended
 */
export function withUtm(url: string, medium: string, content?: string): string {
  const params = new URLSearchParams({
    utm_source: "kaylee-portfolio",
    utm_medium: medium,
    ...(content && { utm_content: content }),
  });
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}${params.toString()}`;
}
