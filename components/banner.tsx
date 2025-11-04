"use client";

import { motion } from "framer-motion";
import { Card } from "./base/card";

const bannerText = [
  <span key={0}>📚 Always Learning</span>,
  <span key={2}>🚀 React • TypeScript • Python</span>,
  <span key={3}>🎨 UI/UX Enthusiast</span>,
  <span key={4}>🔎 console.log(&quot;here?&quot;)</span>,
  <span key={5}>🌍 Love Building Useful Tools</span>,
  <span key={6}>🦆 Who is JSON?</span>,
  <span key={7}>💡 Can this be improved? Most likely.</span>,
];

export default function ScrollingBanner() {
  return (
    <Card className="relative overflow-hidden p-4">
      <div className="absolute top-0 left-0 z-10 h-full w-[100px] bg-gradient-to-r from-card to-transparent" />
      <div className="absolute top-0 right-0 z-10 h-full w-[100px] bg-gradient-to-l from-card to-transparent" />

      <div className="flex">
        <motion.div
          animate={{ x: "-50%" }}
          className="flex whitespace-nowrap"
          initial={{ x: "0%" }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 30,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          {bannerText.concat(bannerText).map((item, i) => {
            const originalIndex = i % bannerText.length;
            const key = `banner-${originalIndex}-${Math.floor(
              i / bannerText.length
            )}`;
            return (
              <span className="mr-12" key={key}>
                {item}
              </span>
            );
          })}
        </motion.div>
      </div>
    </Card>
  );
}
