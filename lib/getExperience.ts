import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Experience, ExperienceFrontmatter } from "@/types/experience";

const experienceDirectory = path.join(process.cwd(), "content/experience");

export async function getExperience(slug: string): Promise<Experience | null> {
  const fullPath = path.join(experienceDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    content,
    ...(data as ExperienceFrontmatter),
  };
}
