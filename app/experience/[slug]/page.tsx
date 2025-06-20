import { getExperience } from "@/lib/getExperience";
import { notFound } from "next/navigation";
import Company from "./Company";
import Details from "./Details";
import Tech from "./Tech";
import { getAllExperience } from "@/lib/getAllExperience";

export const revalidate = 3600;
export const dynamicParams = false;
export const dynamic = "force-static";

export async function generateStaticParams() {
  const experiences = await getAllExperience();
  return experiences.map((e) => ({
    slug: e.slug,
  }));
}

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
