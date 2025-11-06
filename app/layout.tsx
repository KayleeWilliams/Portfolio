import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { Sidebar } from "@/components/sidebar";
import "./globals.css";
import { PageTransition } from "@/components/page-transistion";
import Providers from "./providers";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Kaylee's Portfolio",
  description:
    "Kaylee Williams' Software Engineering Portfolio, check out what I've been up to!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${nunito.variable} grid-background antialiased`}>
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
        </Providers>
      </body>
    </html>
  );
}
