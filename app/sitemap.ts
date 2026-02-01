import type { MetadataRoute } from "next";
import { getAllExperience } from "@/lib/get-all-experience";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const experiences = await getAllExperience();
  const experienceUrls = experiences
    .filter((e) => !e.disableDetails)
    .map((e) => ({
      url: `https://www.kaylee.dev/experience/${e.slug}`,
      lastModified: new Date(),
    }));

  return [
    { url: "https://www.kaylee.dev", lastModified: new Date(), priority: 1 },
    ...experienceUrls,
  ];
}
