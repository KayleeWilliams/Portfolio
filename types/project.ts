export type ProjectFrontmatter = {
  title: string;
  description: string;
  date: string;
  tags: string[];
  image: string;
  github?: string;
  demo?: string;
  featured?: boolean;
};

export interface Project extends ProjectFrontmatter {
  slug: string;
  content: string;
}
