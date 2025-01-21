"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/base/Card";
import { Experience } from "@/types/experience";
import Pill from "@/components/base/Pill";

export default function Tech({ experience }: { experience: Experience }) {
  // Split the tech array into two roughly equal parts
  const midPoint = Math.ceil(experience.tech.length / 2);
  const firstRow = experience.tech.slice(0, midPoint);
  const secondRow = experience.tech.slice(midPoint);

  return (
    <div className="relative ">
      <Pill className="absolute -top-1 -right-8 rotate-[5deg]">
        Some cool stuff, huh.
      </Pill>
      <Card>
        <CardHeader>
          <CardTitle>Technologies</CardTitle>
        </CardHeader>
        <CardContent className="relative overflow-hidden">
          <div className="absolute left-0 top-0 w-[100px] h-full bg-gradient-to-r from-white to-transparent z-10 rounded-lg" />
          <div className="absolute right-0 top-0 w-[100px] h-full bg-gradient-to-l from-white to-transparent z-10 rounded-lg " />

          {/* First row */}
          <div className="flex mb-4">
            <motion.div
              initial={{ x: "0%" }}
              animate={{ x: "-50%" }}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: "linear",
                repeatType: "loop",
              }}
              className="flex whitespace-nowrap"
            >
              {[...firstRow, ...firstRow].map((tech, i) => (
                <span key={i} className="mr-12">
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Second row */}
          <div className="flex">
            <motion.div
              initial={{ x: "-50%" }}
              animate={{ x: "0%" }}
              transition={{
                repeat: Infinity,
                duration: 25,
                ease: "linear",
                repeatType: "loop",
              }}
              className="flex whitespace-nowrap"
            >
              {[...secondRow, ...secondRow].map((tech, i) => (
                <span key={i} className="mr-12">
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
