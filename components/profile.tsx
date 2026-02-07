import type { ReactNode } from "react";
import { compileMDX } from "next-mdx-remote/rsc";
import Link from "next/link";
import {
  RiExternalLinkLine,
  RiGithubFill,
  RiTwitterFill,
  RiLinkedinFill,
} from "@remixicon/react";
import { Card, CardContent } from "@/components/base/card";
import FlipPhoto from "@/components/flip-photo";
import MarkdownComponents from "@/components/markdown";
import { getSiteContent } from "@/lib/get-site-content";
import { personConfig, socialConfig } from "@/lib/site-config";

const iconByName: Record<string, ReactNode> = {
  Github: <RiGithubFill className="size-4 text-violet-400" />,
  LinkedIn: <RiLinkedinFill className="size-4 text-violet-400" />,
  Twitter: <RiTwitterFill className="size-4 text-violet-400" />,
};

export default async function Profile() {
  const profile = await getSiteContent("profile");

  if (!profile) {
    return null;
  }

  const { content } = await compileMDX({
    source: profile.content,
    components: MarkdownComponents(),
  });

  return (
    <Card className="h-fit">
      <CardContent className="pt-6">
        <div className="flex flex-col items-start gap-2">
          <div className="flex w-full flex-row items-center gap-4 md:flex-col md:items-start">
            <FlipPhoto
              catPhoto="/cat.jpeg"
              className="rounded-full md:mx-auto"
              conferencePhoto="/conference.jpeg"
            />
            <div className="flex flex-col items-start justify-center">
              <h1 className="font-bold text-xl md:mt-4 md:text-2xl">
                {personConfig.name}
              </h1>
              <p className="text-foreground text-sm md:text-base">
                {personConfig.headline}
              </p>
            </div>
          </div>
          <div className="mt-2 text-start text-foreground text-sm">
            {content}
          </div>

          <div className="flex w-full flex-col space-y-2 border-border border-t pt-4">
            {socialConfig.map((social) => {
              const parts = social.url.split("/");
              const username = parts.at(-1);

              return (
                <Link
                  aria-label={`${social.name} Logo`}
                  className="group flex cursor-pointer items-center gap-2"
                  href={social.url}
                  key={social.name}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {iconByName[social.name] ?? (
                    <RiExternalLinkLine className="size-4 text-violet-400" />
                  )}
                  <p className="text-foreground text-sm transition-color duration-200 ease-linear group-hover:text-primary">
                    {username}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
