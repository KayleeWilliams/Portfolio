import { RiDownloadLine, RiExternalLinkLine, RiStarFill } from "@remixicon/react";
import Link from "next/link";
import { fetchNpmDownloads } from "@/lib/get-npm-downloads";
import { fetchStars } from "@/lib/get-stars";
import { withUtm } from "@/lib/utils/utm";
import { Card, CardContent } from "./base/card";

const C15T_GITHUB = "https://github.com/c15t/c15t";
const C15T_NPM = "c15t";
const C15T_URL = "https://c15t.com";
const C15T_STATS = "https://c15t.com/stats";
const C15T_DOCS = "https://c15t.com/docs";

function formatDownloads(downloads: number): string {
  const million = 1_000_000;
  const thousand = 1000;
  if (downloads >= million) {
    return `${(downloads / million).toFixed(1)}M`;
  }
  if (downloads >= thousand) {
    return `${(downloads / thousand).toFixed(1)}k`;
  }
  return downloads.toLocaleString();
}

export default async function Hero() {
  const [stars, downloads] = await Promise.all([
    fetchStars(C15T_GITHUB),
    fetchNpmDownloads(C15T_NPM),
  ]);

  return (
    <Card className="border-violet-200 bg-linear-to-br from-violet-50 to-card dark:border-violet-500/30 dark:from-violet-950/20 dark:to-card">
      <CardContent className="pt-6">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h2 className="font-bold text-lg text-primary md:text-xl">c15t</h2>
            <p className="text-foreground text-sm md:text-base">
              The open-source standard for consent management. High-performance cookie banner with full developer control.
            </p>
          </div>

          {(stars || downloads) && (
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              {stars && (
                <div className="flex items-center gap-2">
                  <RiStarFill className="size-5 text-yellow-500" />
                  <span className="font-semibold text-foreground">
                    {stars.toLocaleString()}+ stars
                  </span>
                </div>
              )}
              {downloads && (
                <div className="flex items-center gap-2">
                  <RiDownloadLine className="size-5 text-violet-500" />
                  <span className="font-semibold text-foreground">
                    {formatDownloads(downloads)}+ monthly downloads
                  </span>
                </div>
              )}
            </div>
          )}

          <div className="flex flex-wrap gap-3">
            <Link
              className="ease inline-flex items-center gap-1.5 rounded-md bg-violet-500 px-4 py-2 font-medium text-sm text-white transition-[background-color] duration-150 hover:bg-violet-600 active:scale-[0.98]"
              href={withUtm(C15T_URL, "hero", "view-project")}
              target="_blank"
            >
              View Project
              <RiExternalLinkLine className="size-4" />
            </Link>
            <Link
              className="ease inline-flex items-center gap-1.5 rounded-md border border-violet-200 bg-white px-4 py-2 font-medium text-sm text-violet-600 transition-[background-color,border-color] duration-150 hover:border-violet-300 hover:bg-violet-50 active:scale-[0.98] dark:border-violet-500/30 dark:bg-transparent dark:text-violet-400 dark:hover:border-violet-500/50 dark:hover:bg-violet-500/10"
              href={withUtm(C15T_STATS, "hero", "view-stats")}
              target="_blank"
            >
              View Stats
              <RiExternalLinkLine className="size-4" />
            </Link>
            <Link
              className="ease inline-flex items-center gap-1.5 rounded-md border border-violet-200 bg-white px-4 py-2 font-medium text-sm text-violet-600 transition-[background-color,border-color] duration-150 hover:border-violet-300 hover:bg-violet-50 active:scale-[0.98] dark:border-violet-500/30 dark:bg-transparent dark:text-violet-400 dark:hover:border-violet-500/50 dark:hover:bg-violet-500/10"
              href={withUtm(C15T_DOCS, "hero", "read-docs")}
              target="_blank"
            >
              Read Docs
              <RiExternalLinkLine className="size-4" />
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
