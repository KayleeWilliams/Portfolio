import { Card, CardContent } from "@/components/base/Card";
import * as runtime from "react/jsx-runtime";
import { Experience } from "@/types/experience";
import { compileMDX } from "next-mdx-remote/rsc";
import MarkdownComponents from "@/components/Markdown";

export default async function Details({
  experience,
}: {
  experience: Experience;
}) {
  // const sections = experience.content.split(/(?=^### .*$)/m).filter(Boolean);

  const { content } = await compileMDX({
    source: experience.content,
    options: { runtime },
    components: MarkdownComponents(),
  });

  return (
    <>
      {/* {sections.map(async (section, index) => {
        const { content } = await compileMDX({
          source: section,
          options: { runtime },
          components: MarkdownComponents(),
        });

        return (
          <Card key={index}>
            <CardContent className="prose prose-gray max-w-none py-6">
              {content}
            </CardContent>
          </Card>
        );
      })} */}

      <Card>
        <CardContent className="prose prose-gray max-w-none py-6">
          {content}
        </CardContent>
      </Card>
    </>
  );
}
