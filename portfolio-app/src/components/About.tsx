import BracketsIcon from "./icons/BracketsIcon";
import Section from "./Section";
import SkillCard from "./SkillCard";
import Title from "./Title";

export default function About() {
  return (
    <Section
      id="about"
      className="flex flex-col items-center p-8 gap-3 bg-[url('/blob-scene-haikei-background.svg')] bg-no-repeat bg-center bg-cover"
    >
      <Title title="About Me" />
      <div className="flex justify-between items-center py-12 px-16">
        <p className="w-1/3 text-lg font-light text-stone-300">
          Hi 👋🏼 I’m Daniel—a software engineer at Amazon with a Computer Science
          degree from UCLA. I’ve worked across the stack, building scalable
          backend systems, API integrations, and intuitive web experiences. My
          background includes experience at both startups and large companies,
          giving me a solid understanding of writing clean, maintainable code in
          fast-paced environments. I’m especially interested in system design,
          developer tools, and building products that solve real-world problems!
        </p>
        <div className="max-w-3/5 grid grid-cols-3 gap-6">
          <SkillCard
            skillIcon={<BracketsIcon />}
            skillName="Backend Development"
            technologies={["Java", "Python", "Node.js"]}
          />
          <SkillCard
            skillIcon={<BracketsIcon />}
            skillName="Web Development"
            technologies={[
              "React",
              "Next.js",
              "HTML",
              "CSS",
              "JavaScript",
              "TypeScript",
            ]}
          />
          <SkillCard
            skillIcon={<BracketsIcon />}
            skillName="Database Design"
            technologies={["PostgreSQL", "MongoDB", "DynamoDB", "MySQL"]}
          />
          <SkillCard
            skillIcon={<BracketsIcon />}
            skillName="Libraries"
            technologies={[]}
          />
          <SkillCard
            skillIcon={<BracketsIcon />}
            skillName="Software Engineering"
            technologies={[]}
          />
          <SkillCard
            skillIcon={<BracketsIcon />}
            skillName="Professional Experience"
            technologies={["1 Year"]}
          />
        </div>
      </div>
    </Section>
  );
}
