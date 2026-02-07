import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/base/card";
import Pill from "@/components/base/pill";
import { getRecentGitHubActivity } from "@/lib/get-github-activity";

export default async function OSSActivity({ username }: { username: string }) {
  const repos = await getRecentGitHubActivity(username);

  if (repos.length === 0) {
    return null;
  }

  return (
    <Card className="relative">
      <Pill className="-top-2 -right-[10px] rotate-[4deg] lg:-top-1 lg:-right-[24px] lg:rotate-16">
        PAST 30 DAYS
      </Pill>
      <CardHeader>
        <CardTitle>OSS Contributions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="divide-y divide-border">
          {repos.map((repo) => {
            return (
              <div className="py-3 first:pt-0 last:pb-0" key={repo.repo}>
                <div className="min-w-0">
                  <div className="flex items-center justify-between gap-3">
                    <Link
                      className="truncate font-medium text-primary hover:underline"
                      href={`https://github.com/${repo.repo}`}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {repo.repo}
                    </Link>
                    {repo.additions || repo.deletions ? (
                      <p className="shrink-0 font-medium text-xs">
                        <span className="text-emerald-500">
                          +{repo.additions.toLocaleString()}
                        </span>{" "}
                        <span className="text-rose-500">
                          -{repo.deletions.toLocaleString()}
                        </span>
                      </p>
                    ) : null}
                  </div>
                  <p className="mt-1 text-muted-foreground text-xs">
                    {[
                      repo.openedPrs > 0
                        ? `${repo.openedPrs} PR opened`
                        : undefined,
                      repo.mergedPrs > 0
                        ? `${repo.mergedPrs} merged`
                        : undefined,
                      repo.reviews > 0 ? `${repo.reviews} reviews` : undefined,
                      repo.reviewComments > 0
                        ? `${repo.reviewComments} comments`
                        : undefined,
                      repo.issuesOpened > 0
                        ? `${repo.issuesOpened} issues`
                        : undefined,
                      repo.commits > 0 ? `${repo.commits} commits` : undefined,
                    ]
                      .filter(Boolean)
                      .join(" · ")}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
