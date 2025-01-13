import { Card } from "@/components/base/Card";
import { FaCalendarAlt } from "react-icons/fa";
import { formatDate } from "@/lib/utils/formatDate";
import Image from "next/image";
import { Experience } from "@/types/experience";

export default function Company({ experience }: { experience: Experience }) {
  return (
    <Card className="py-6 px-6">
      <div className="flex flex-row items-center gap-2">
        <Image
          width={30}
          height={30}
          src={experience.logo}
          alt={experience.company}
          className="rounded"
        />
        <div>
          <p className="font-bold">{experience.role}</p>
          <p>{experience.company}</p>
        </div>
      </div>
      <div className="flex flex-row items-center gap-2 text-gray-600 mb-2 mt-1">
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
