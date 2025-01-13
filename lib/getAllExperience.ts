import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Experience, ExperienceFrontmatter } from "@/types/experience";
import dayjs from "dayjs";
const experienceDirectory = path.join(process.cwd(), "content/experience");

export async function getAllExperience(): Promise<Experience[]> {
  const fileNames = fs.readdirSync(experienceDirectory);

  const experiences = fileNames
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(experienceDirectory, fileName);
      if (fs.statSync(fullPath).isFile()) {
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);

        return {
          slug,
          content,
          ...(data as ExperienceFrontmatter),
        };
      }
    })
    .filter((experience): experience is Experience => experience !== undefined);

  return experiences.sort((a, b) => {
    return dayjs(b.startDate).diff(dayjs(a.startDate));
  });
}
