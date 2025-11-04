import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Project, ProjectFrontmatter } from "@/types/project";

const projectsDirectory = path.join(process.cwd(), "content/projects");
const MDX_REGEX = /\.mdx$/;

export function getAllProjects(): Promise<Project[]> {
  const fileNames = fs.readdirSync(projectsDirectory);

  const projects = fileNames.map((fileName) => {
    const slug = fileName.replace(MDX_REGEX, "");
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      ...(data as ProjectFrontmatter),
    };
  });

  return Promise.resolve(
    projects.sort((a, b) => {
      if (a.featured && !b.featured) {
        return -1;
      }
      if (!a.featured && b.featured) {
        return 1;
      }
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
  );
}
