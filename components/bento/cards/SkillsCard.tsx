import Card from '@/components/base/Card';
import type { SkillsItem } from '@/types/bento';

export default function SkillsCard({ categories }: SkillsItem) {
  return (
    <Card>
      <div className="space-y-4">
        {categories.map((category) => (
          <div key={category.name} className="space-y-2">
            <h3 className="font-semibold text-lg">{category.name}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
} 