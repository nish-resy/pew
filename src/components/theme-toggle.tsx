"use client";

import { MoonStar, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false,
  );

  const dark = mounted && resolvedTheme === "dark";

  return (
    <Button
      aria-label={dark ? "Use light theme" : "Use dark theme"}
      onClick={() => setTheme(dark ? "light" : "dark")}
      size="icon"
      title={dark ? "Use light theme" : "Use dark theme"}
      type="button"
      variant="outline"
    >
      {dark ? <SunMedium className="size-4" /> : <MoonStar className="size-4" />}
    </Button>
  );
}
