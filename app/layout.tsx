import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { Sidebar } from "@/components/sidebar";
import Footer from "@/components/footer";
import "./globals.css";
import { PageTransition } from "@/components/page-transition";
import Providers from "./providers";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kaylee.dev"),
  title: {
    default: "Kaylee | Software Engineer",
    template: "%s | Kaylee",
  },
  description:
    "Kaylee Williams - Full-Stack Engineer building c15t and Consent. Open source contributor focused on developer experience.",
  keywords: [
    "Kaylee Williams",
    "software engineer",
    "full-stack developer",
    "open source",
    "c15t",
    "TypeScript",
    "React",
  ],
  authors: [{ name: "Kaylee Williams" }],
  creator: "Kaylee Williams",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.kaylee.dev",
    siteName: "Kaylee",
    title: "Kaylee | Software Engineer",
    description:
      "Kaylee Williams - Full-Stack Engineer building c15t and Consent.",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@kaylee_dev",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kaylee Williams",
  url: "https://www.kaylee.dev",
  jobTitle: "Full-Stack Engineer",
  sameAs: [
    "https://github.com/KayleeWilliams",
    "https://linkedin.com/in/kaylee-w",
    "https://x.com/kaylee_dev",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${nunito.variable} grid-background antialiased`}>
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>
          <div className="min-h-screen">
            <div className="container mx-auto max-w-(--breakpoint-lg) px-4 py-8">
              <div className="grid grid-cols-1 gap-0 md:grid-cols-3 md:gap-6">
                <div className="col-span-1">
                  <Sidebar />
                </div>
                <main className="md:col-span-2">
                  <PageTransition>
                    <div className="space-y-6">{children}</div>
                  </PageTransition>
                </main>
              </div>
            </div>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
