import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Project, ProjectFrontmatter } from "@/types/project";
import { fetchStars } from "./get-stars";

const projectsDirectory = path.join(process.cwd(), "content/projects");
const MDX_REGEX = /\.mdx$/;

export async function getAllProjects(): Promise<Project[]> {
  const fileNames = fs.readdirSync(projectsDirectory);

  const projectsWithoutStars = fileNames.map((fileName) => {
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

  // Fetch stars for projects that have showStars enabled
  const projects = await Promise.all(
    projectsWithoutStars.map(async (project) => {
      if (project.showStars && project.github) {
        const stars = await fetchStars(project.github);
        return { ...project, stars };
      }
      return project;
    })
  );

  return projects.sort((a, b) => {
    if (a.featured && !b.featured) {
      return -1;
    }
    if (!a.featured && b.featured) {
      return 1;
    }
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}
