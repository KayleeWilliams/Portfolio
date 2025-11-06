"use client";

import { ConsentManagerProvider, useConsentManager } from "@c15t/react";
import ConsentBanner from "./consent-banner";
import { Databuddy } from "@databuddy/sdk/react";

export default function ConsentManager({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ConsentManagerProvider
      options={{
        mode: "offline",
        consentCategories: ["measurement"],
      }}
    >
      <ConsentBanner />
      <Analytics />
      {children}
    </ConsentManagerProvider>
  );
}

function Analytics() {
  const { has } = useConsentManager();

  return (
    <Databuddy
      clientId="daQ10qMML80QHRKHOxy38"
      disabled={has("measurement")}
    />
  );
}
