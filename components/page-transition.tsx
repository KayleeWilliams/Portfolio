"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useRef } from "react";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const isFirstRender = useRef(true);

  // Skip animation on first page load so content is visible immediately
  const shouldSkipInitial = isFirstRender.current;
  if (isFirstRender.current) {
    isFirstRender.current = false;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.main
        animate={{ opacity: 1, y: 0 }}
        exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
        initial={shouldSkipInitial || shouldReduceMotion ? false : { opacity: 0, y: 10 }}
        key={pathname}
        transition={{
          type: "spring",
          duration: 0.35,
          bounce: 0.15,
        }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
