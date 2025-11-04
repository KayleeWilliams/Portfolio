"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.main
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        initial={{ opacity: 0, y: -10 }}
        key={pathname}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          opacity: { duration: 0.2 },
        }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
