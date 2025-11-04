import { compileMDX } from "next-mdx-remote/rsc";
import { Card, CardContent } from "@/components/base/card";
import MarkdownComponents from "@/components/markdown";
import type { Experience } from "@/types/experience";

export default async function Details({
  experience,
}: {
  experience: Experience;
}) {
  // const sections = experience.content.split(/(?=^### .*$)/m).filter(Boolean);

  const { content } = await compileMDX({
    source: experience.content,
    components: MarkdownComponents(),
  });

  return (
    <Card>
      <CardContent className="prose prose-gray max-w-none py-6">
        {content}
      </CardContent>
    </Card>
  );
}
