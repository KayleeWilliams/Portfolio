import { Card, CardContent, CardHeader, CardTitle } from "./base/card";
import Pill from "./base/pill";

interface SkillCategory {
  name: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  { name: "Languages", skills: ["TypeScript", "Python", "Swift", "GraphQL"] },
  { name: "Frontend", skills: ["Next.js", "React", "HTML/CSS", "Vue.js"] },
  { name: "Backend", skills: ["Node.js", "Express", "Django", "Flask"] },
  { name: "Databases", skills: ["PostgreSQL", "MongoDB", "SQLite"] },
  { name: "Cloud & DevOps", skills: ["Vercel", "Google Cloud", "Docker"] },
  { name: "Tools", skills: ["Git", "Figma", "Playwright", "PostHog"] },
];

export default function Skills() {
  return (
    <Card className="relative">
      <CardHeader>
        <CardTitle>Skills</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4">
        {skillCategories.map((category) => (
          <div className="flex flex-col flex-wrap" key={category.name}>
            <p className="font-semibold">{category.name}</p>
            {category.skills.map((skill) => (
              <p key={skill}>{skill}</p>
            ))}
          </div>
        ))}
      </CardContent>
      <Pill className="-right-4 bottom-1 -rotate-15">I ❤️ Learning</Pill>
    </Card>
  );
}
