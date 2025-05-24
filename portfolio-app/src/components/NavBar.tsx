"use client";

import { useEffect, useState } from "react";
import { ModeToggle } from "./ModeToggle";
import { useScrollSpy } from "@/lib/hooks/useSpy";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const sectionIds = ["home", "about", "experience", "projects", "contact"];
  const activeId = useScrollSpy(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-20">
      <nav
        className={`flex items-center justify-center gap-4 p-4 z-50 w-full fixed transition-transform duration-300 ease-in-out ${
          isScrolled ? "translate-y-2" : "-translate-y-0"
        }`}
      >
        <ul className="flex gap-6 py-4 px-6 rounded-4xl font-semibold bg-stone-50 text-zinc-800 shadow-sm dark:bg-zinc-800 dark:text-zinc-400">
          {sectionIds.map((id) => (
            <li
              key={id}
              className={`hover:text-teal-500 dark:hover:text-stone-200 duration-200 ease-in ${
                activeId === id ? "text-[#32936F]" : ""
              }`}
            >
              <a href={`#${id}`}>{id}</a>
            </li>
          ))}
        </ul>
        <ModeToggle />
      </nav>
    </div>
  );
}
