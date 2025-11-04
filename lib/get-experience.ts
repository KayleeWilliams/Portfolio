import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Experience, ExperienceFrontmatter } from "@/types/experience";

const experienceDirectory = path.join(process.cwd(), "content/experience");

export function getExperience(slug: string): Promise<Experience | null> {
  const fullPath = path.join(experienceDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return Promise.resolve(null);
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return Promise.resolve({
    slug,
    content,
    ...(data as ExperienceFrontmatter),
  });
}
