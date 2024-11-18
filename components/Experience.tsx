import { Card, CardContent, CardTitle } from "./base/Card";
import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";
interface Company {
  name: string;
  image: string;
  link?: string;
}

interface Experience {
  company: Company;
  jobTitle: string;
  startDate: string;
  endDate: string;
  description: string;
}

const experience: Experience[] = [
  {
    company: {
      name: "Everfund",
      image: "/everfund.webp",
    },
    jobTitle: "Full Stack Software Engineer",
    startDate: "Jun 2023",
    endDate: "Nov 2024",
    description:
      "Everfund is a fundraising platform that simplifies the process for nonprofits to raise money through multi-channel campaigns. It supports organizations of all sizes, including large nonprofits with smaller branches and chapters.",
  },
];

export default function Experience() {
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
                  src={e.company.image}
                  alt={e.company.name}
                  className="rounded"
                />
                <div>
                  <p className="font-bold">{e.jobTitle}</p>
                  <p>{e.company.name}</p>
                </div>
              </div>
              <div className="flex flex-row items-center gap-2 text-gray-600 mb-2 mt-1">
                <FaCalendarAlt className="size-3 text-gray-600" />
                <p className="text-sm">
                  {e.startDate} - {e.endDate}
                </p>
              </div>
              <p>{e.description}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
