import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { getAllProjects } from "@/lib/get-all-projects";
import type { Project } from "@/types/project";
import { Card, CardContent, CardTitle } from "./base/card";

export default function Projects() {
  return (
    <div>
      <CardTitle className="mb-4 text-foreground">Featured Projects</CardTitle>
      <ProjectCards />
    </div>
  );
}

async function ProjectCards() {
  const projects = await getAllProjects();

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {projects
        .filter((project) => project.featured)
        .map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card key={project.slug}>
      <CardContent className="h-full pt-6">
        <div className="flex h-full flex-col">
          <Link
            className="font-semibold text-primary hover:underline"
            href={project.github || project.demo || "#"}
          >
            {project.title}
          </Link>
          <p className="mt-1 mb-4 text-muted-foreground text-sm">
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
                className="flex items-center gap-2 text-primary text-sm hover:underline"
                href={project.github}
                rel="noopener refereer"
                target="_blank"
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
    <div className="rounded-md bg-violet-500/10 px-2 py-1 text-violet-500 text-xs">
      {tag}
    </div>
  );
}
