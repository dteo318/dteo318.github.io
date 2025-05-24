import ProjectCard from "./ProjectCard";
import Section from "./Section";
import Title from "./Title";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export default function Projects() {
  const projects = [
    {
      name: "Banking Platform",
      image: "/banking-cover.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel purus vel ex imperdiet sagittis in vitae mauris. In nibh.",
      githubLink: "https://github.com/dteo318/banking",
      technologies: [
        "Next.js",
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "Plaid",
        "Sentry.io",
        "Appwrite",
      ],
    },
    {
      name: "ShelterConnect",
      image: "/shelter-connect-cover.jpeg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel purus vel ex imperdiet sagittis in vitae mauris. In nibh.",
      githubLink: "https://github.com/dteo318/shelterconnect",
      technologies: [
        "Next.js",
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "MongoDB",
        "Stripe",
        "Google Maps API",
      ],
    },
    {
      name: "Tweeter",
      image: "/twitter-client-cover.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel purus vel ex imperdiet sagittis in vitae mauris. In nibh.",
      githubLink: "https://github.com/dteo318/TwitterClient",
      technologies: [
        "Java",
        "Android Studio",
        "Twitter API",
        "OAuth",
        "Parceler",
      ],
    },
    {
      name: "Burger Towers",
      image: "/burger-towers-cover.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel purus vel ex imperdiet sagittis in vitae mauris. In nibh.",
      githubLink: "https://github.com/dteo318/burger-towers",
      technologies: ["JavaScript", "WebGL", "tiny-graphics.js"],
    },
    {
      name: "Parstagram",
      image: "/parstagram-cover.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel purus vel ex imperdiet sagittis in vitae mauris. In nibh.",
      githubLink: "https://github.com/dteo318/Parstagram",
      technologies: ["Java", "Android Studio", "Parse Backend SDK"],
    },
  ];

  return (
    <Section
      id="projects"
      className="bg-[url('/wave-haikei-mobile-background.svg')] sm:bg-[url('/blob-scatter-haikei-background.svg')]"
    >
      <Title title="Projects" />
      <div className="flex flex-col items-center justify-center w-full pt-4 lg:pt-18 lg:grow max-w-2/3">
        <Carousel className="relative w-full lg:bottom-12">
          <CarouselContent>
            {projects.map(
              (
                { name, image, description, githubLink, technologies },
                index
              ) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <ProjectCard
                    name={name}
                    image={image}
                    description={description}
                    githubLink={githubLink}
                    technologies={technologies}
                  />
                </CarouselItem>
              )
            )}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </Section>
  );
}
