"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export type ColorTheme = "green" | "blue";

export const ThemeSwitcher: React.FC = () => {
  const [theme, setTheme] = useState<ColorTheme>("green");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("gimpex-theme-palette") as ColorTheme;
    if (savedTheme === "blue" || savedTheme === "green") {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      document.documentElement.setAttribute("data-theme", "green");
    }
  }, []);

  const handleSelectTheme = (newTheme: ColorTheme) => {
    setTheme(newTheme);
    localStorage.setItem("gimpex-theme-palette", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  if (!mounted) return null;

  return (
    <aside
      className="theme-dock"
      aria-label="Color Palette Switcher"
      role="region"
    >
      <div className="theme-dock-inner">
        <span className="theme-dock-label" title="Switch Color Palette">
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a7 7 0 0 0 7 7c0 2-2 3-2 3s.5 1 .5 2-1 2-2 2h-3.5a1.5 1.5 0 0 1-1.5-1.5c0-.8.5-1.5 1-2.5.5-1 1-1.5 1-3 0-3.9-3.1-7-7-7z" />
          </svg>
          <span className="sr-only">Theme:</span>
        </span>

        <button
          type="button"
          onClick={() => handleSelectTheme("green")}
          className={cn("theme-swatch", theme === "green" && "active")}
          title="Estate Green & Electric Lime (Default)"
          aria-label="Select Estate Green theme"
          aria-pressed={theme === "green"}
        >
          <span className="swatch-split swatch-green">
            <span className="swatch-half swatch-primary" />
            <span className="swatch-half swatch-accent" />
          </span>
          <span className="theme-name">Green</span>
        </button>

        <button
          type="button"
          onClick={() => handleSelectTheme("blue")}
          className={cn("theme-swatch", theme === "blue" && "active")}
          title="Cobalt Navy & Electric Cyan (Gimpex Logo Blue)"
          aria-label="Select Cobalt Navy theme"
          aria-pressed={theme === "blue"}
        >
          <span className="swatch-split swatch-blue">
            <span className="swatch-half swatch-primary" />
            <span className="swatch-half swatch-accent" />
          </span>
          <span className="theme-name">Blue</span>
        </button>
      </div>
    </aside>
  );
};
