"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    console.log("Current theme:", theme);
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button
      variant="ghost"
      className="dark:hover:brightness-200"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] scale-0 transition-all dark:scale-100" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-100 transition-all dark:scale-0" />
    </Button>
  );
}
