"use client";

import { Card, CardContent } from "./base/card";

import { RiMoonLine, RiSunLine } from "@remixicon/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const [isMounted, setIsMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <button aria-label="Toggle theme" disabled type="button">
        <Card className="aspect-square h-14 transition-[background-color] duration-150 ease hover:bg-violet-50 dark:hover:bg-violet-500">
          <CardContent className="flex h-full w-full items-center justify-center p-0">
            <div className="size-4" />
          </CardContent>
        </Card>
      </button>
    );
  }

  return (
    <button
      aria-label={resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      type="button"
    >
      <Card className="aspect-square h-14 transition-[background-color] duration-150 ease hover:bg-violet-50 active:scale-[0.97] dark:hover:bg-violet-500">
        <CardContent className="flex h-full w-full items-center justify-center p-0">
          {resolvedTheme === "dark" ? (
            <RiSunLine className="size-4" />
          ) : (
            <RiMoonLine className="size-4" />
          )}
        </CardContent>
      </Card>
    </button>
  );
}
