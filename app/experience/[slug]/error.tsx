"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/base/card";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Failed to load experience</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-foreground">
          We couldn't load this experience. Please try again.
        </p>
        <button
          className="rounded-lg border border-border bg-card px-4 py-2.5 font-medium text-card-foreground text-sm transition-[background-color,border-color] duration-150 ease hover:border-violet-200 hover:bg-violet-50 active:scale-[0.97] dark:hover:border-violet-800 dark:hover:bg-violet-950"
          onClick={reset}
          type="button"
        >
          Try again
        </button>
      </CardContent>
    </Card>
  );
}
