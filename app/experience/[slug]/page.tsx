import { notFound } from "next/navigation";
import { getAllExperience } from "@/lib/get-all-experience";
import { getExperience } from "@/lib/get-experience";
import Company from "./company";
import Details from "./details";
import Tech from "./tech";

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
