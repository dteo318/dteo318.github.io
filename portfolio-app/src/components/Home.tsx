import Link from "next/link";
import CodeIcon from "./icons/CodeIcon";
import Section from "./Section";
import { Button } from "./ui/button";
import BracketsIcon from "./icons/BracketsIcon";
import GithubIcon from "./icons/GithubIcon";
import LinkedInIcon from "./icons/LinkedInIcon";
import SkillBadge from "./SkillBadge";

export default function Home() {
  return (
    <Section
      id="home"
      className="gap-6 justify-center bg-[url('/blob-haikei-background.svg')]"
    >
      <CodeIcon className="h-22 w-22 sm:h-28 sm:w-28 lg:h-32 lg:w-32" />
      <h1 className="text-5xl font-bold text-center sm:text-7xl lg:text-8xl text-slate-800 dark:text-stone-300">
        Daniel Teo
      </h1>
      <p className="text-center text-md sm:text-lg lg:text-xl dark:font-extralight">
        Software Engineer with expertise in{" "}
        <span className="font-bold text-emerald-600 dark:text-[#02d9a9]">
          Java
        </span>{" "}
        and{" "}
        <span className="font-bold text-emerald-600 dark:text-[#02d9a9]">
          TypeScript
        </span>
      </p>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <SkillBadge skill="Java" />
        <SkillBadge skill="TypeScript" />
        <SkillBadge skill="Python" />
        <SkillBadge skill="React.js" />
        <SkillBadge skill="PostgreSQL" />
      </div>
      <div className="flex items-center justify-center gap-4">
        <Button asChild variant="secondary" className="hover:scale-115">
          <Link href="#projects">
            <BracketsIcon /> View Projects
          </Link>
        </Button>
        <Button asChild size="icon" className="hover:scale-105 hover:rotate-15">
          <Link href="https://github.com/dteo318">
            <GithubIcon />
          </Link>
        </Button>
        <Button
          asChild
          size="icon"
          className="hover:scale-105 hover:-rotate-15"
        >
          <Link href="https://www.linkedin.com/in/danieltatloongteo/">
            <LinkedInIcon />
          </Link>
        </Button>
      </div>
    </Section>
  );
}
