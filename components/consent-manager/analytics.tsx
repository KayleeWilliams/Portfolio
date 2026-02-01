"use client";

import { useConsentManager } from "@c15t/nextjs";
import { Databuddy } from "@databuddy/sdk/react";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";

export default function Analytics() {
  const { has } = useConsentManager();

  const disabled = has("measurement");

  return (
    <>
      <Databuddy clientId="daQ10qMML80QHRKHOxy38" disabled={disabled} />
      <VercelAnalytics />
    </>
  );
}