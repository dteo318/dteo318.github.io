import Section from "./Section";
import Timeline from "./Timeline";
import Title from "./Title";

export default function Experience() {
  return (
    <Section
      id="experience"
      className="px-12 pt-48 bg-[url('/layered-peaks-haikei-background.svg')]"
    >
      <Title title="Experience" />
      <Timeline />
    </Section>
  );
}
