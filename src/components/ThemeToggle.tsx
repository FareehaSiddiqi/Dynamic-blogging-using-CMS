"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="flex items-center justify-center"
    >
      <Sun
        className={`w-6 h-6 transition-transform duration-300 
          dark:rotate-0 dark:scale-100 
          rotate-[-90deg] scale-0`}
      />
      <Moon
        className={`w-6 h-6 transition-transform duration-300 
          dark:hidden 
          rotate-0 scale-100`}
      />
    </button>
  );
}
