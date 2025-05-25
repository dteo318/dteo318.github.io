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
        "Built and integrated a cross-team validation library in Java and TypeScript, improving data reliability and eliminating redundant code.",
      skills: ["Java", "TypeScript", "AWS"],
      employmentPeriod: "June 2024 - September 2024",
    },
    {
      employer: "BruinRent.io",
      jobTitle: "Lead Frontend Engineer",
      location: "Los Angeles, CA",
      description:
        "Revamped and led migration to a modern, responsive UI, significantly improving usability and driving user growth.",
      skills: ["TypeScript", "React.js", "Node.js", "Firebase"],
      employmentPeriod: "October 2023 - March 2024",
    },
    {
      employer: "Amazon",
      jobTitle: "Software Development Engineer Intern",
      location: "Irvine, CA",
      description:
        "Developed a RESTful API web service for Alexa Games using Java and AWS, enabling leaderboard features for third-party developers.",
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
        "Improved UI and increased test coverage by building React features and writing unit tests with Jest.",
      skills: ["TypeScript", "C#", "Azure"],
      employmentPeriod: "August 2022 - November 2022",
    },
    {
      employer: "Behaivior",
      jobTitle: "Software Engineer Intern",
      location: "Irvine, CA",
      description:
        "Built onboarding flow, recovery tracking UI, and optimized data access with GCP functions for a wearable-integrated app.",
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
        "Streamlined warehouse operations by analyzing movement patterns and inventory data, reducing costs and improving space efficiency.",
      skills: [
        "Python",
        "Scikit-learn",
        "PyTorch",
        "Pandas",
        "NumPy",
        "Matplotlib",
      ],
      employmentPeriod: "December 2020 - April 2021",
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
