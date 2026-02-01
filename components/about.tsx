import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "./base/card";
import { withUtm } from "@/lib/utils/utm";

export default function About() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>About Me</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-foreground">
        <p>
          I'm a co-author of{" "}
          <Link
            className="font-medium text-primary hover:underline"
            href={withUtm("https://c15t.com", "about", "c15t")}
            target="_blank"
          >
            c15t
          </Link>
          , the open-source standard for consent management.
          As Founding Engineer at{" "}
          <Link
            className="font-medium text-primary hover:underline"
            href={withUtm("https://consent.io", "about", "consent")}
            target="_blank"
          >
            Consent
          </Link>
          , I'm building the infrastructure for compliant consent management.
        </p>
        <p>
          I care about developer experience, open source, and building tools
          people actually want to use.
        </p>
      </CardContent>
    </Card>
  );
}
