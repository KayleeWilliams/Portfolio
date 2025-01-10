import Link from "next/link";
import Image from "next/image";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import { Card, CardContent } from "@/components/base/Card";
import Pill from "@/components/base/Pill";

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
];

export const Profile = () => {
  return (
    <Card className="h-fit">
      <CardContent className="pt-6">
        <div className="flex flex-col items-start gap-2 ">
          <div className="flex flex-row md:flex-col items-center md:items-start w-full gap-4">
            <div className="relative rounded-full md:mx-auto">
              <Image
                width={150}
                height={150}
                quality={100}
                src="/cat.jpeg"
                alt="Profile Picture"
                className="rounded-full size-12 md:size-60 object-cover object-top border-2 border-gray-200 hover:border-violet-500 transition-colors duration-200 shadow-md"
                priority
              />
              <Pill className="hidden md:block top-5 left-[3.5px] -rotate-[40deg]">
                MY CAT 🐱
              </Pill>
            </div>
            <div className="flex flex-col items-start justify-center">
              <h1 className="font-bold md:mt-4 text-xl md:text-2xl">
                Kaylee Williams
              </h1>
              <p className="text-sm md:text-base text-foreground">
                Software Engineer
              </p>
            </div>
          </div>
          <p className="mt-2 text-start text-sm text-foreground">
            Business-focused software engineer with extensive full-stack
            development experience across modern web and mobile technologies
          </p>

          <div className="mt-4 flex flex-col space-y-2 border-t border-border pt-4 w-full">
            {socials.map((s, i) => {
              const parts = s.link.split("/");
              const username = parts[parts.length - 1];

              return (
                <Link
                  key={i}
                  href={s.link}
                  target="_blank"
                  aria-label={`${s.name} Logo`}
                  className="cursor-pointer flex items-center gap-2 group"
                >
                  {s.icon}
                  <p className="text-sm text-foreground group-hover:text-primary transition-color duration-200 ease-linear">
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
};
