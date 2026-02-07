import Link from "next/link";
import { RiExternalLinkLine, RiStarLine } from "@remixicon/react";
import { getAllProjects } from "@/lib/get-all-projects";
import type { Project } from "@/types/project";
import { Card, CardContent, CardTitle } from "./base/card";
import { withUtm } from "@/lib/utils/utm";

export default function Projects() {
  return (
    <div>
      <ProjectCards />
    </div>
  );
}

async function ProjectCards() {
  const projects = await getAllProjects();
  const activeProjects = projects.filter((project) => project.active);
  const onlyC15t =
    activeProjects.length === 1 && activeProjects[0]?.slug === "c15t";

  if (activeProjects.length === 0 || onlyC15t) {
    return null;
  }

  return (
    <>
      <CardTitle className="mb-4 text-foreground">Open Source Work</CardTitle>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {activeProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const projectUrl = project.url || project.github || project.demo || "#";
  const urlWithUtm = projectUrl !== "#" 
    ? withUtm(projectUrl, "project-card", project.slug) 
    : "#";
  const githubWithUtm = project.github 
    ? withUtm(project.github, "project-card", `${project.slug}-github`) 
    : undefined;

  return (
    <Card key={project.slug}>
      <CardContent className="h-full pt-6">
        <div className="flex h-full flex-col">
          <Link
            className="group flex items-center justify-between font-semibold text-primary"
            href={urlWithUtm}
            rel={projectUrl !== "#" ? "noopener noreferrer" : undefined}
            target={projectUrl !== "#" ? "_blank" : undefined}
          >
            <span className="group-hover:underline">{project.title}</span>
            {project.stars && (
              <span className="flex items-center gap-1 text-muted-foreground text-sm">
                <RiStarLine className="size-4" />
                {project.stars?.toLocaleString()}
              </span>
            )}
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

            {githubWithUtm && (
              <Link
                className="flex items-center gap-2 text-primary text-sm hover:underline"
                href={githubWithUtm}
                rel="noopener noreferrer"
                target="_blank"
              >
                Github
                <RiExternalLinkLine className="size-4" />
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
