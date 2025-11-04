import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";
import { Card } from "@/components/base/card";
import { formatDate } from "@/lib/utils/format-date";
import type { Experience } from "@/types/experience";

export default function Company({ experience }: { experience: Experience }) {
  return (
    <Card className="px-6 py-6">
      <div className="flex flex-row items-center gap-2">
        <Image
          alt={experience.company}
          className="rounded"
          height={30}
          src={experience.logo}
          width={30}
        />
        <div>
          <p className="font-bold">{experience.role}</p>
          <p>{experience.company}</p>
        </div>
      </div>
      <div className="mt-1 mb-2 flex flex-row items-center gap-2 text-gray-600">
        <FaCalendarAlt className="size-3 text-gray-600" />
        <p className="text-sm">
          {formatDate(experience.startDate)} -{" "}
          {experience.endDate ? formatDate(experience.endDate) : "Present"}
        </p>
      </div>
      <p>{experience.description}</p>
    </Card>
  );
}
