export type BaseItem = {
  id: string;
  size?: 'small' | 'medium' | 'large';
  priority?: number;
};

export type AboutMeItem = BaseItem & {
  type: 'about';
  title: string;
  description: string;
  image?: string;
  socials?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
};

export type ProjectItem = BaseItem & {
  type: 'project';
  title: string;
  description: string;
  image?: string;
  tags: string[];
  github?: string;
  demo?: string;
  content: string;
};

export type ContactItem = BaseItem & {
  type: 'contact';
  email: string;
  message?: string;
};

export type SkillsItem = BaseItem & {
  type: 'skills';
  categories: {
    name: string;
    skills: string[];
  }[];
};

export type BentoItem = 
  | AboutMeItem 
  | ProjectItem 
  | ContactItem 
  | SkillsItem; 