import Section from "./Section";
import Timeline from "./Timeline";
import Title from "./Title";

export default function Experience() {
  return (
    <Section
      id="experience"
      className="flex flex-col items-center px-12 pt-48 gap-3 bg-[url('/layered-peaks-haikei-background.svg')] bg-no-repeat bg-center bg-cover"
    >
      <Title title="Experience" />
      <Timeline />
    </Section>
  );
}
