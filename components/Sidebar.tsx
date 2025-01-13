"use client";

import { Profile } from "@/components/Profile";
import Skills from "@/components/Skills";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { Card } from "@/components/base/Card";
import { CardContent } from "@/components/base/Card";
import { motion, AnimatePresence } from "framer-motion";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="space-y-6">
      <AnimatePresence mode="popLayout">
        {pathname !== "/" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              opacity: { duration: 0.2 },
            }}
          >
            <Card className="hover:bg-violet-50 transition-all duration-300 ease-in-out">
              <CardContent className="py-4">
                <Link
                  href="/"
                  className="flex flex-row items-center justify-center gap-2 font-medium"
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
      <motion.div layout className="hidden md:block">
        <Skills />
      </motion.div>
    </div>
  );
}
