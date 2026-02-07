export function withUtm(url: string, medium: string, content?: string): string {
  const params = new URLSearchParams({
    utm_source: "kaylee-portfolio",
    utm_medium: medium,
    ...(content && { utm_content: content }),
  });
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}${params.toString()}`;
}
