import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Nunito } from "next/font/google";
import { Sidebar } from "@/components/Sidebar";
import "./globals.css";
import { PageTransition } from "@/components/PageTransition";

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
    <html lang="en">
      <body className={`${nunito.variable} grid-background antialiased`}>
        <div className="min-h-screen">
          <div className="container max-w-screen-lg mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
        <SpeedInsights />
      </body>
    </html>
  );
}
