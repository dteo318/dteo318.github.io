"use client";

import { useEffect, useState } from "react";
import { ModeToggle } from "./ModeToggle";

const NavListItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className="hover:text-teal-500 dark:hover:text-stone-200 duration-200 ease-in">
      {children}
    </li>
  );
};

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

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
          <NavListItem>
            <a href="#home">Home</a>
          </NavListItem>
          <NavListItem>
            <a href="#about">About</a>
          </NavListItem>
          <NavListItem>
            <a href="#experience">Experience</a>
          </NavListItem>
          <NavListItem>
            <a href="#projects">Projects</a>
          </NavListItem>
          <NavListItem>
            <a href="#skills">Skills</a>
          </NavListItem>
          <NavListItem>
            <a href="#contact">Contact</a>
          </NavListItem>
        </ul>
        <ModeToggle />
      </nav>
    </div>
  );
}
