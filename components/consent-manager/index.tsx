"use client";

import { ConsentManagerProvider, useConsentManager } from "@c15t/react";
import ConsentBanner from "./consent-banner";
import { Databuddy } from "@databuddy/sdk/react";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import { useEffect, useState } from "react";
import type { Geo } from "@vercel/functions";

export default function ConsentManager({
  children,
}: {
  children: React.ReactNode;
}) {
  const [geo, setGeo] = useState<Geo | null>(null);

  useEffect(() => {
    fetch("/api/geo")
      .then((res) => res.json())
      .then((data) => setGeo(data));
  }, []);

  if (!geo) {
    return null;
  }

  return (
    <ConsentManagerProvider
      options={{
        mode: "offline",
        consentCategories: ["measurement"],
        overrides: {
          country: geo.country,
          region: geo.region,
        },
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

  const disabled = has("measurement");

  return (
    <>
      <Databuddy clientId="daQ10qMML80QHRKHOxy38" disabled={disabled} />
      {/* Vercel Analytics does not require consent */}
      <VercelAnalytics />
    </>
  );
}
