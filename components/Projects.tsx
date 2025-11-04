import { getAllProjects } from "@/lib/getAllProjects";
import { Project } from "@/types/project";
import { Card, CardContent, CardTitle } from "./base/Card";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

export default function Projects() {
  return (
    <div>
      <CardTitle className="text-foreground mb-4">Featured Projects</CardTitle>
      <ProjectCards />
    </div>
  );
}

async function ProjectCards() {
  const projects = await getAllProjects();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card key={project.slug}>
      <CardContent className="pt-6 h-full">
        <div className="flex flex-col h-full">
          <Link
            href={project.github || project.demo || "#"}
            className="font-semibold text-primary hover:underline"
          >
            {project.title}
          </Link>
          <p className="text-sm text-muted-foreground mt-1 mb-4">
            {project.description}
          </p>

          <div className="mt-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} tag={tag} />
              ))}
            </div>

            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener refereer"
                className="flex items-center gap-2 text-sm text-primary hover:underline"
              >
                Github
                <FaExternalLinkAlt className="size-3" />
              </Link>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function Badge({ tag }: { tag: string }) {
  return (
    <div className="bg-violet-500/10 px-2 py-1 rounded-md text-violet-500 text-xs">
      {tag}
    </div>
  );
}
