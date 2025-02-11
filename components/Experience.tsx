import { Card, CardContent, CardTitle } from "./base/Card";
import Image from "next/image";
import { FaCalendarAlt, FaExternalLinkAlt } from "react-icons/fa";
import { getAllExperience } from "@/lib/getAllExperience";
import { formatDate } from "@/lib/utils/formatDate";
import Link from "next/link";

export default async function Experience() {
  const experience = await getAllExperience();
  return (
    <div className="space-y-4">
      <CardTitle className="text-foreground">Experience</CardTitle>

      <Card className="relative">
        <div className="absolute -top-2 -right-[10px] rotate-[4deg] lg:-top-1 lg:-right-[50px] lg:rotate-[18deg] bg-violet-500 text-violet-50 text-xs px-2 py-1 rounded-full">
          YOUR COMPANY HERE
        </div>
        <CardContent className="pt-6">
          {experience.map((e, i) => (
            <div key={i}>
              <div className="flex flex-row items-center gap-2">
                <Image
                  width={30}
                  height={30}
                  src={e.logo}
                  alt={e.company}
                  className="rounded"
                />
                <div>
                  <p className="font-semibold">{e.role}</p>
                  <p>{e.company}</p>
                </div>
              </div>
              <div className="flex flex-row items-center gap-2 text-gray-600 mb-2 mt-1">
                <FaCalendarAlt className="size-3 text-gray-600" />
                <p className="text-sm">
                  {formatDate(e.startDate)} -{" "}
                  {e.endDate ? formatDate(e.endDate) : "Present"}
                </p>
              </div>
              <p>{e.description}</p>

              <div className="flex items-center gap-2 justify-self-end">
                <Link
                  href={`/experience/${e.slug}`}
                  className="flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  Learn More
                </Link>
                <FaExternalLinkAlt className="size-3" />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
