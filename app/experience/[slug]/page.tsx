import { getExperience } from "@/lib/getExperience";
import { notFound } from "next/navigation";
import Company from "./Company";
import Details from "./Details";
import Tech from "./Tech";

export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const experience = await getExperience(slug);

  if (!experience) {
    notFound();
  }

  return (
    <>
      <Company experience={experience} />
      <Tech experience={experience} />
      <Details experience={experience} />
    </>
  );
}
