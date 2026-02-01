import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/base/card";
import Pill from "@/components/base/pill";
import type { Experience } from "@/types/experience";

export default function Tech({ experience }: { experience: Experience }) {
  // Split the tech array into two roughly equal parts
  const midPoint = Math.ceil(experience.tech.length / 2);
  const firstRow = experience.tech.slice(0, midPoint);
  const secondRow = experience.tech.slice(midPoint);

  return (
    <div className="relative">
      <Pill className="-top-1 -right-8 absolute rotate-[5deg]">
        Some cool stuff, huh.
      </Pill>
      <Card>
        <CardHeader>
          <CardTitle>Technologies</CardTitle>
        </CardHeader>
        <CardContent className="relative overflow-hidden">
          <div className="absolute top-0 left-0 z-10 h-full w-[100px] rounded-lg bg-linear-to-r from-card to-transparent" />
          <div className="absolute top-0 right-0 z-10 h-full w-[100px] rounded-lg bg-linear-to-l from-card to-transparent" />

          {/* First row */}
          <div className="mb-4 flex">
            <div className="marquee-left-fast flex whitespace-nowrap">
              {[...firstRow, ...firstRow].map((tech, i) => {
                const key = `first-${tech}-${Math.floor(i / firstRow.length)}-${
                  i % firstRow.length
                }`;
                return (
                  <span className="mr-12" key={key}>
                    {tech}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Second row */}
          <div className="flex">
            <div className="marquee-right flex whitespace-nowrap">
              {[...secondRow, ...secondRow].map((tech, i) => {
                const key = `second-${tech}-${Math.floor(
                  i / secondRow.length
                )}-${i % secondRow.length}`;
                return (
                  <span className="mr-12" key={key}>
                    {tech}
                  </span>
                );
              })}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
