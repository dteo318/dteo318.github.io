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
    <Card className="bg-[#225945] pt-0 h-full flex flex-col">
      <div className="relative w-full h-48 bg-white rounded-t-xl">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain rounded-t-lg"
        />
      </div>
      <CardHeader className="flex-1 flex flex-col justify-start">
        <CardTitle className="text-2xl font-bold">{name}</CardTitle>
        <CardDescription className="pt-1 flex flex-wrap items-center gap-2">
          {technologies.map((tech) => (
            <SkillBadge
              skill={tech}
              key={tech}
              className="text-stone-300 hover:dark:text-[#FF9B71] hover:dark:border-[#FF9B71]"
            />
          ))}
        </CardDescription>
      </CardHeader>
      <CardContent className="font-light text-sm text-neutral-100">
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
