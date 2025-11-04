import fs from "node:fs";
import path from "node:path";
import dayjs from "dayjs";
import matter from "gray-matter";
import type { Experience, ExperienceFrontmatter } from "@/types/experience";

const experienceDirectory = path.join(process.cwd(), "content/experience");
const MDX_REGEX = /\.mdx$/;

export function getAllExperience(): Promise<Experience[]> {
  const fileNames = fs.readdirSync(experienceDirectory);

  const experiences = fileNames
    .filter((fileName) => {
      const fullPath = path.join(experienceDirectory, fileName);
      return fs.statSync(fullPath).isFile();
    })
    .map((fileName) => {
      const slug = fileName.replace(MDX_REGEX, "");
      const fullPath = path.join(experienceDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        content,
        ...(data as ExperienceFrontmatter),
      };
    });

  return Promise.resolve(
    experiences.sort((a, b) => dayjs(b.startDate).diff(dayjs(a.startDate)))
  );
}
