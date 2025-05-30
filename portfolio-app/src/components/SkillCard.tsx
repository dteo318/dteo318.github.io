import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SkillCard({
  skillIcon,
  skillName,
  technologies,
}: {
  skillIcon: React.ReactNode;
  skillName: string;
  technologies: string[];
}) {
  return (
    <Card className="hover:scale-110 transition-transform duration-300 ease-in-out dark:bg-[#225945]">
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="hidden w-8 h-8 sm:inline">{skillIcon}</CardTitle>
        <CardDescription className="text-sm font-bold sm:text-right lg:text-md text-slate-800 dark:text-stone-200">
          {skillName}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-xs sm:text-right lg:text-sm dark:font-light dark:text-stone-300">
          {technologies.join(" • ")}
        </p>
      </CardContent>
      {/* <CardFooter>
        <Progress value={50} />
      </CardFooter> */}
    </Card>
  );
}
