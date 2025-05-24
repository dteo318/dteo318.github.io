import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "./ui/progress";

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
      <CardHeader className="flex justify-between items-center">
        <CardTitle className="w-8 h-8">{skillIcon}</CardTitle>
        <CardDescription className="text-md text-slate-800 dark:text-stone-200 font-bold text-right">
          {skillName}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm dark:font-light dark:text-stone-300 text-right">
          {technologies.join(" | ")}
        </p>
      </CardContent>
      {/* <CardFooter>
        <Progress value={50} />
      </CardFooter> */}
    </Card>
  );
}
