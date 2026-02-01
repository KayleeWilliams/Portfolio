import { RiGithubFill } from "@remixicon/react";
import Link from "next/link";
import { withUtm } from "@/lib/utils/utm";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="container mx-auto max-w-(--breakpoint-lg) px-4 pb-8">
      <div className="flex flex-col items-center gap-2 border-border border-t pt-6 text-center text-muted-foreground text-sm">
        <p>
          No cookie banner needed - this site uses privacy-first analytics.
          <br className="hidden sm:block" />{" "}
          <span className="text-foreground">
            But if it did, it'd use{" "}
            <Link
              className="font-medium text-primary hover:underline"
              href={withUtm("https://c15t.com", "footer", "c15t")}
              target="_blank"
            >
              c15t
            </Link>
            .
          </span>
        </p>
        <div className="flex items-center gap-3 text-muted-foreground/60">
          <Link
            className="flex items-center gap-1 transition-colors duration-150 hover:text-foreground"
            href={withUtm("https://github.com/KayleeWilliams/Portfolio", "footer", "view-source")}
            target="_blank"
          >
            <RiGithubFill className="size-4" />
            <span>View Source</span>
          </Link>
          <span>·</span>
          <p>© {currentYear} Kaylee Williams</p>
        </div>
      </div>
    </footer>
  );
}
