import { Card, CardContent, CardHeader, CardTitle } from "./base/card";
import Pill from "./base/pill";

type SkillCategory = {
  name: string;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  { name: "Languages", skills: ["TypeScript", "Python", "Swift"] },
  { name: "Frontend", skills: ["Next.js", "React", "HTML/CSS", "Vue.js"] },
  { name: "Backend", skills: ["Node.js", "Express", "Django", "Flask"] },
  { name: "Databases", skills: ["PostgreSQL", "MongoDB", "SQLite"] },
  { name: "Cloud & DevOps", skills: ["Google Cloud", "Docker"] },
  { name: "Tools", skills: ["Git", "Figma", "VS Code"] },
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
      <Pill className="-right-4 -rotate-[15deg] bottom-1">I ❤️ Learning</Pill>
    </Card>
  );
}
