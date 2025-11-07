"use client";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../base/card";
import { CookieBanner } from "@c15t/react";

export default function ConsentBanner() {
  return (
    <CookieBanner.Root>
      <Card className="mx-auto max-w-sm shadow-lg">
        <CardHeader>
          <CardTitle>Privacy & Cookies</CardTitle>
          <CardDescription>
            Hi! I use analytical cookies to understand how visitors interact
            with my portfolio. This helps me improve the site and see what's
            working. No personal data is collected, just basic usage statistics.
          </CardDescription>
        </CardHeader>
        <div className="mx-6 border-border border-t" />
        <CardFooter className="flex gap-3 pt-6">
          <CookieBanner.RejectButton
            asChild
            noStyle
            themeKey="banner.footer.accept-button"
          >
            <button
              autoFocus
              className="flex-1 rounded-lg border border-border bg-card px-4 py-2.5 font-medium text-card-foreground text-sm transition-all duration-200 ease-in-out hover:border-violet-200 hover:bg-violet-50 dark:hover:border-violet-800 dark:hover:bg-violet-950"
              type="button"
            >
              Reject Analytics
            </button>
          </CookieBanner.RejectButton>
          <CookieBanner.AcceptButton
            asChild
            noStyle
            themeKey="banner.footer.accept-button"
          >
            <button
              className="flex-1 rounded-lg border border-border bg-card px-4 py-2.5 font-medium text-card-foreground text-sm transition-all duration-200 ease-in-out hover:border-violet-200 hover:bg-violet-50 dark:hover:border-violet-800 dark:hover:bg-violet-950"
              type="button"
            >
              Accept Analytics
            </button>
          </CookieBanner.AcceptButton>
        </CardFooter>
      </Card>
    </CookieBanner.Root>
  );
}
