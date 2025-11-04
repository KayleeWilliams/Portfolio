"use client";

import { Card, CardContent } from "./base/card";

import { FaMoon, FaSun } from "react-icons/fa";
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
      <button
        className="aspect-square h-14"
        disabled
        onClick={() => null}
        type="button"
      >
        <Card className="h-full transition-all duration-300 ease-in-out hover:bg-violet-50 dark:hover:bg-violet-500">
          <CardContent className="flex h-full w-full items-center justify-center p-0">
            <div className="size-4" />
          </CardContent>
        </Card>
      </button>
    );
  }

  return (
    <button
      className="aspect-square h-14"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      type="button"
    >
      <Card className="h-full transition-all duration-300 ease-in-out hover:bg-violet-50 dark:hover:bg-violet-500">
        <CardContent className="flex h-full w-full items-center justify-center p-0">
          {resolvedTheme === "dark" ? (
            <FaSun className="size-4" />
          ) : (
            <FaMoon className="size-4" />
          )}
        </CardContent>
      </Card>
    </button>
  );
}
