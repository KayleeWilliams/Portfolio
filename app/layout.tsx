import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Nunito } from "next/font/google";

import "./globals.css";

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
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
