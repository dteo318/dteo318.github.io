import Section from "./Section";
import Timeline from "./Timeline";

export default function Experience() {
  return (
    <Section
      id="experience"
      className="flex flex-col items-center px-12 pt-48 gap-3 bg-[url('/layered-peaks-haikei-background.svg')] bg-no-repeat bg-center bg-cover"
    >
      <h2 className="text-6xl font-bold text-center text-stone-300">
        Experience
      </h2>
      <hr className="w-1/6 h-1.5 bg-[#32936F] rounded-full" />
      <Timeline />
    </Section>
  );
}
