import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaExternalLinkAlt } from "react-icons/fa";
import { getAllExperience } from "@/lib/get-all-experience";
import { formatDate } from "@/lib/utils/format-date";
import type { Experience } from "@/types/experience";
import { Card, CardContent, CardTitle } from "./base/card";

function ExperienceHeader({ experience }: { experience: Experience }) {
  return (
    <div className="group flex flex-row items-center gap-2">
      <Image
        alt={experience.company}
        className={`${experience.logoDark ? "dark:hidden" : ""}`}
        height={30}
        src={experience.logo}
        width={30}
      />
      {experience.logoDark && (
        <Image
          alt={experience.company}
          className="hidden dark:block"
          height={30}
          src={experience.logoDark}
          width={30}
        />
      )}
      <div>
        <p className="font-semibold">{experience.role}</p>
        <div className="flex flex-row items-center gap-2">
          <p
            className={`${
              experience.url ? "underline-offset-2 group-hover:underline" : ""
            }`}
          >
            {experience.company}
          </p>{" "}
          {experience.url && <FaExternalLinkAlt className="size-3" />}
        </div>
      </div>
    </div>
  );
}

export default async function ExperienceList() {
  const experience = await getAllExperience();
  return (
    <div className="space-y-4">
      <CardTitle className="text-foreground">Experience</CardTitle>

      <Card className="relative">
        <div className="-top-2 -right-[10px] lg:-top-1 lg:-right-[50px] absolute rotate-[4deg] rounded-full bg-violet-500 px-2 py-1 text-violet-50 text-xs lg:rotate-18">
          YOUR COMPANY HERE?
        </div>
        <CardContent className="space-y-3 pt-6">
          {experience.map((e) => (
            <div key={e.slug}>
              {e.url ? (
                <Link href={e.url}>
                  <ExperienceHeader experience={e} />
                </Link>
              ) : (
                <ExperienceHeader experience={e} />
              )}
              <div className="mt-1 mb-2 flex flex-row items-center gap-2 text-gray-600 dark:text-gray-400">
                <FaCalendarAlt className="size-3" />
                <p className="text-sm">
                  {formatDate(e.startDate)} -{" "}
                  {e.endDate ? formatDate(e.endDate) : "Present"}
                </p>
              </div>
              <p>{e.description}</p>

              <div className="mt-2 mb-1 flex flex-row items-center gap-2">
                <div className="w-full border-border border-t" />
                {!e.disableDetails && (
                  <Link
                    className="flex w-max items-center gap-2 text-nowrap text-primary text-sm underline-offset-2 hover:underline"
                    href={`/experience/${e.slug}`}
                  >
                    Learn More
                    <FaExternalLinkAlt className="size-3" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
