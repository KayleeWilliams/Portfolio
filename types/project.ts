export type ProjectFrontmatter = {
  title: string;
  description: string;
  date: string;
  tags: string[];
  image: string;
  github?: string;
  demo?: string;
  featured?: boolean;

  /**
   * URL for the project
   * @default undefined
   */
  url?: string;

  /**
   * Display the number of stars for the repository
   * @default false
   */
  showStars?: boolean;

  /**
   * Stars count for the repository
   * @remarks
   * This is dynamically fetched from the repository if showStars is true
   */
  stars?: number;
};

export interface Project extends ProjectFrontmatter {
  slug: string;
  content: string;
}
