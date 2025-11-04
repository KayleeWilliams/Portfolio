"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import { Card, CardContent } from "@/components/base/card";
import { Profile } from "@/components/profile";
import Skills from "@/components/skills";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="space-y-6">
      <AnimatePresence mode="popLayout">
        {pathname !== "/" && (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            initial={{ opacity: 0, y: -10 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              opacity: { duration: 0.2 },
            }}
          >
            <Card className="transition-all duration-300 ease-in-out hover:bg-violet-50">
              <CardContent className="py-4">
                <Link
                  className="flex flex-row items-center justify-center gap-2 font-medium"
                  href="/"
                >
                  <FaArrowLeft className="size-4" />
                  Go Back
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div layout>
        <Profile />
      </motion.div>
      <motion.div className="hidden md:block" layout>
        <Skills />
      </motion.div>
    </div>
  );
}
