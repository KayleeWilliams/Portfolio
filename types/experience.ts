export interface ExperienceFrontmatter {
  company: string;
  role: string;
  description: string;
  date: string;
  logo: string;
  tech: string[];
  startDate: string;
  endDate?: string;
}

export interface Experience extends ExperienceFrontmatter {
  slug: string;
  content: string;
}
