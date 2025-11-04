import Image from "next/image";
import Link from "next/link";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import { Card, CardContent } from "@/components/base/card";
import Pill from "@/components/base/pill";

const socials = [
  {
    name: "Github",
    link: "https://github.com/KayleeWilliams",
    icon: <FaGithub className="size-4 text-violet-400" />,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/kaylee-w",
    icon: <FaLinkedin className="size-4 text-violet-400" />,
  },
  {
    name: "Twitter",
    link: "https://x.com/kaylee_dev",
    icon: <FaTwitter className="size-4 text-violet-400" />,
  },
];

export const Profile = () => (
  <Card className="h-fit">
    <CardContent className="pt-6">
      <div className="flex flex-col items-start gap-2">
        <div className="flex w-full flex-row items-center gap-4 md:flex-col md:items-start">
          <div className="relative rounded-full md:mx-auto">
            <Image
              alt="Profile Picture"
              className="size-12 rounded-full border-2 border-gray-200 object-cover object-top shadow-md transition-colors duration-200 hover:border-violet-500 md:size-60"
              height={150}
              priority
              quality={100}
              src="/cat.jpeg"
              width={150}
            />
            <Pill className="-rotate-[40deg] top-5 left-[3.5px] hidden md:block">
              MY CAT 🐱
            </Pill>
          </div>
          <div className="flex flex-col items-start justify-center">
            <h1 className="font-bold text-xl md:mt-4 md:text-2xl">
              Kaylee Williams
            </h1>
            <p className="text-foreground text-sm md:text-base">
              Full-Stack Engineer
            </p>
          </div>
        </div>
        <div className="mt-2 flex flex-col text-start text-foreground text-sm">
          <p>
            Founding Engineer at {""}
            <Link
              className="font-medium hover:underline"
              href="https://consent.io"
              target="_blank"
            >
              Consent
            </Link>
            .
          </p>
          <p>
            Co-Author of {""}
            <Link
              className="font-medium hover:underline"
              href="https://c15t.com"
              target="_blank"
            >
              c15t
            </Link>
            .
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
