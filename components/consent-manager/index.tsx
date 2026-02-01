import { ConsentManagerProvider } from "@c15t/nextjs";
import ConsentBanner from "./consent-banner";
import Analytics from "./analytics";

export default function ConsentManager({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ConsentManagerProvider
      options={{
        mode: "c15t",
        consentCategories: ["measurement"],
        backendURL: "/api/prawns",
      }}
    >
      <ConsentBanner />
      <Analytics />
      {children}
    </ConsentManagerProvider>
  );
}
