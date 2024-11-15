"use client";

import { useState } from "react";
import BentoGrid from "@/components/bento/BentoGrid";
import type { BentoItem as BentoItemType } from "@/types/bento";

const initialItems: BentoItemType[] = [
  {
    id: "1",
    type: "about",
    size: "medium",
    title: "About Me",
    description: "Full-stack developer passionate about...",
    image: "/me.jpg",
    socials: {
      github: "https://github.com/yourusername",
    },
  },
  {
    id: "2",
    type: "project",
    size: "large",
    title: "Portfolio Website",
    description: "Built with Next.js and TailwindCSS",
    tags: ["Next.js", "React", "TailwindCSS"],
    content: "# Project Details...",
  },
  {
    id: "3",
    type: "skills",
    size: "medium",
    categories: [
      {
        name: "Frontend",
        skills: ["React", "TypeScript", "TailwindCSS"],
      },
      {
        name: "Backend",
        skills: ["Node.js", "Python", "PostgreSQL"],
      },
    ],
  },
  {
    id: "4",
    type: "project",
    size: "large",
    title: "Portfolio Website 2",
    description: "Built with Next.js and TailwindCSS",
    tags: ["Next.js", "React", "TailwindCSS"],
    content: "# Project Details...",
  },
  // Add more items as needed
];

export default function Home() {
  const [items, setItems] = useState(initialItems);

  return (
    <div className="min-h-screen p-8">
      <BentoGrid items={items} setItems={setItems} />
    </div>
  );
}
