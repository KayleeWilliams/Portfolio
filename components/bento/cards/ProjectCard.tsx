import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import Link from "next/link";
import Card from "@/components/base/Card";
import { ProjectItem } from "@/types/bento";
interface ProjectCardProps extends ProjectItem {
  isExpanded?: boolean;
}

export default function ProjectCard({
  isExpanded = true,
  ...props
}: ProjectCardProps) {
  const { title, description, image, tags, github, demo, content } = props;

  return (
    <Card>
      <div className="space-y-4">
        {image && (
          <div className="relative h-48 w-full overflow-hidden rounded-lg">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}

        <div className="space-y-2">
          <h3 className="text-xl font-bold">{title}</h3>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {isExpanded ? (
            <div className="prose dark:prose-invert">
              <MDXRemote
                compiledSource={content}
                scope={undefined}
                frontmatter={{ title, description, tags, github, demo }}
              />
            </div>
          ) : (
            <p className="text-gray-600 dark:text-gray-300">{description}</p>
          )}

          <div className="flex gap-4 pt-4">
            {github && (
              <Link
                href={github}
                className="text-sm font-medium hover:underline"
                target="_blank"
              >
                GitHub →
              </Link>
            )}
            {demo && (
              <Link
                href={demo}
                className="text-sm font-medium hover:underline"
                target="_blank"
              >
                Live Demo →
              </Link>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
