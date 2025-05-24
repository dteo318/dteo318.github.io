import Section from "./Section";
import Title from "./Title";
import { Button } from "./ui/button";
import Link from "next/link";
import GithubIcon from "./icons/GithubIcon";
import LinkedInIcon from "./icons/LinkedInIcon";
import EmailIcon from "./icons/EmailIcon";
import ResumeIcon from "./icons/ResumeIcon";

export default function Contact() {
  return (
    <Section id="contact" className="bg-[url('/wave-haikei-background.svg')]">
      <Title title="Contact Me" />
      <div className="grid items-center justify-center grid-cols-3 gap-6 pt-16 md:grid-cols-6 lg:pt-24">
        <Button
          asChild
          variant="secondary"
          className="col-span-3 hover:scale-115"
        >
          <Link href="/resume.pdf" download={true}>
            <ResumeIcon /> Download My Resume
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
        <Button asChild size="icon" className="hover:scale-105 hover:rotate-15">
          <Link href="mailto:danieltatloongteo@outlook.com">
            <EmailIcon />
          </Link>
        </Button>
      </div>
    </Section>
  );
}
