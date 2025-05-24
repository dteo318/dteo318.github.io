import Section from "./Section";
import Timeline from "./Timeline";
import Title from "./Title";

export interface Experience {
  employer: string;
  jobTitle: string;
  location: string;
  description: string;
  skills: string[];
  employmentPeriod: string;
}

export default function Experience() {
  const experiences: Experience[] = [
    {
      employer: "Amazon",
      jobTitle: "Software Development Engineer Intern",
      location: "Seattle, WA",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut semper ex. Nunc finibus ligula id ex auctor lobortis. Integer.",
      skills: ["Java", "TypeScript", "AWS"],
      employmentPeriod: "June 2024 - September 2024",
    },
    {
      employer: "BruinRent.io",
      jobTitle: "Lead Frontend Engineer",
      location: "Los Angeles, CA",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut semper ex. Nunc finibus ligula id ex auctor lobortis. Integer.",
      skills: ["TypeScript", "React.js", "Node.js", "Firebase"],
      employmentPeriod: "October 2023 - March 2024",
    },
    {
      employer: "Amazon",
      jobTitle: "Software Development Engineer Intern",
      location: "Irvine, CA",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut semper ex. Nunc finibus ligula id ex auctor lobortis. Integer.",
      skills: [
        "Java",
        "TypeScript",
        "API Gateway",
        "AWS Lambda",
        "DynamoDB",
        "CloudWatch",
        "CloudFormation",
      ],
      employmentPeriod: "June 2023 - September 2023",
    },
    {
      employer: "Cornerstone OnDemand",
      jobTitle: "Full Stack Developer Intern",
      location: "Irvine, CAa",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut semper ex. Nunc finibus ligula id ex auctor lobortis. Integer.",
      skills: ["TypeScript", "C#", "Azure"],
      employmentPeriod: "August 2022 - November 2022",
    },
    {
      employer: "Behaivior",
      jobTitle: "Software Engineer Intern",
      location: "Irvine, CA",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut semper ex. Nunc finibus ligula id ex auctor lobortis. Integer.",
      skills: [
        "TypeScript",
        "React.js",
        "Firebase Functions",
        "Firestore",
        "GCP",
      ],
      employmentPeriod: "October 2021 - March 2022",
    },
    {
      employer: "Waypointe Management Consulting",
      jobTitle: "Analyst",
      location: "Singapore, Singapore",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut semper ex. Nunc finibus ligula id ex auctor lobortis. Integer.",
      skills: [
        "Python",
        "Scikit-learn",
        "PyTorch",
        "Pandas",
        "NumPy",
        "Matplotlib",
      ],
      employmentPeriod: "October 2021 - March 2022",
    },
  ];

  return (
    <Section
      id="experience"
      className="lg:px-12 lg:pt-48 sm:bg-[url('/layered-peaks-haikei-background.svg')]"
    >
      <Title title="Experience" />
      <Timeline experiences={experiences} />
    </Section>
  );
}
