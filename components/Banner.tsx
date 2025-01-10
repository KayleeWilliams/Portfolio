"use client";

import { motion } from "framer-motion";
import { Card } from "./base/Card";

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
    <Card className="p-4 relative overflow-hidden">
      <div className="absolute left-0 top-0 w-[100px] h-full bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute right-0 top-0 w-[100px] h-full bg-gradient-to-l from-white to-transparent z-10" />

      <div className="flex">
        <motion.div
          initial={{ x: "0%" }}
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
            repeatType: "loop",
          }}
          className="flex whitespace-nowrap"
        >
          {bannerText.concat(bannerText).map((item, i) => (
            <span key={i} className="mr-12">
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </Card>
  );
}
