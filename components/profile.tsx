import Link from "next/link";

import { RiGithubFill, RiTwitterFill, RiLinkedinFill } from "@remixicon/react";
import { Card, CardContent } from "@/components/base/card";
import FlipPhoto from "@/components/flip-photo";
import { withUtm } from "@/lib/utils/utm";

const socials = [
  {
    name: "Github",
    link: "https://github.com/KayleeWilliams",
    icon: <RiGithubFill className="size-4 text-violet-400" />,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/kaylee-w",
    icon: <RiLinkedinFill className="size-4 text-violet-400" />,
  },
  {
    name: "Twitter",
    link: "https://x.com/kaylee_dev",
    icon: <RiTwitterFill className="size-4 text-violet-400" />,
  },
];

export const Profile = () => (
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
              Kaylee Williams
            </h1>
            <p className="text-foreground text-sm md:text-base">
              Full-Stack Engineer - Open Source
            </p>
          </div>
        </div>
        <div className="mt-2 flex flex-col text-start text-foreground text-sm">
          <p>
            Building{" "}
            <Link
              className="font-medium hover:underline"
              href={withUtm("https://c15t.com", "profile", "c15t")}
              target="_blank"
            >
              c15t
            </Link>
            {" "}&{" "}
            <Link
              className="font-medium hover:underline"
              href={withUtm("https://consent.io", "profile", "consent")}
              target="_blank"
            >
              Consent
            </Link>
            .
          </p>
          <p className="text-muted-foreground">
            Open-source consent management infrastructure.
          </p>
        </div>

        <div className="mt-4 flex w-full flex-col space-y-2 border-border border-t pt-4">
          {socials.map((s) => {
            const parts = s.link.split("/");
            const username = parts.at(-1);

            return (
              <Link
                aria-label={`${s.name} Logo`}
                className="group flex cursor-pointer items-center gap-2"
                href={s.link}
                key={s.name}
                target="_blank"
              >
                {s.icon}
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
