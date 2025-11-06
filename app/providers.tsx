"use client ";

import { Databuddy } from "@databuddy/sdk/react";
import ConsentManager from "../components/consent-manager";
import { ThemeProvider } from "next-themes";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      disableTransitionOnChange
      enableSystem
    >
      <ConsentManager>
        {children}
      </ConsentManager>
      <SpeedInsights />
    </ThemeProvider>
  );
}
