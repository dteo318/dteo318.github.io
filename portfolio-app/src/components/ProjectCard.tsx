import SkillBadge from "./SkillBadge";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import NewTabIcon from "./icons/NewTabIcon";
import Image from "next/image";

export default function ProjectCard({
  name,
  image,
  description,
  githubLink,
  technologies,
}: {
  name: string;
  image: string;
  description: string;
  githubLink: string;
  technologies: string[];
}) {
  return (
    <Card className="dark:bg-[#225945] pt-0 h-full flex flex-col">
      <div className="relative w-full bg-white h-36 lg:h-48 rounded-t-xl">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain rounded-t-lg"
        />
      </div>
      <CardHeader className="flex flex-col justify-start flex-1">
        <CardTitle className="text-xl font-bold lg:text-2xl">{name}</CardTitle>
        <CardDescription className="flex flex-wrap items-center gap-2 pt-1">
          {technologies.map((tech) => (
            <SkillBadge
              skill={tech}
              key={tech}
              className="text-xs dark:text-stone-300 hover:text-emerald-600 hover:border-emerald-600 hover:dark:text-[#FF9B71] hover:dark:border-[#FF9B71]"
            />
          ))}
        </CardDescription>
      </CardHeader>
      <CardContent className="text-xs lg:text-sm dark:font-light dark:text-neutral-100">
        {description}
      </CardContent>
      <CardFooter>
        <Button asChild size="icon" className="hover:scale-105 hover:rotate-15">
          <a target="_blank" href={githubLink}>
            <NewTabIcon />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
