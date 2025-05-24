import Section from "./Section";
import Timeline from "./Timeline";
import Title from "./Title";

export default function Experience() {
  return (
    <Section
      id="experience"
      className="lg:px-12 lg:pt-48 sm:bg-[url('/layered-peaks-haikei-background.svg')]"
    >
      <Title title="Experience" />
      <Timeline />
    </Section>
  );
}
