import { Card, CardContent, CardHeader, CardTitle } from "./base/Card";

interface SkillCategory {
  name: string;
  skills: string[];
}

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
      <CardContent className=" grid grid-cols-2 gap-4 ">
        {skillCategories.map((category, i) => (
          <div key={i} className="flex flex-col flex-wrap">
            <p className="font-semibold">{category.name}</p>
            {category.skills.map((skill, j) => (
              <p key={j}>{skill}</p>
            ))}
          </div>
        ))}
      </CardContent>
      <div className="absolute -bottom-1 -right-4  -rotate-[15deg] bg-violet-500 text-violet-50 text-xs px-2 py-1 rounded-full">
        I ❤️ Learning
      </div>
    </Card>
  );
}
