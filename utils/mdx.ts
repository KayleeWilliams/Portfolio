import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { Project, ProjectFrontmatter } from '@/types/project';

const projectsDirectory = path.join(process.cwd(), 'content/projects');

export async function getAllProjects(): Promise<Project[]> {
  const fileNames = fs.readdirSync(projectsDirectory);
  
  const projects = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '');
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      slug,
      content,
      ...(data as ProjectFrontmatter),
    };
  });

  return projects.sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
} 