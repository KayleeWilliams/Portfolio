export type ExperienceFrontmatter = {
  company: string;
  role: string;
  description: string;
  date: string;
  url?: string;
  logo: string;
  logoDark?: string;
  tech: string[];
  startDate: string;
  endDate?: string;
  disableDetails?: boolean;
};

export interface Experience extends ExperienceFrontmatter {
  slug: string;
  content: string;
}
