"use client";

import {
  VerticalTimeline as ExperienceTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import WorkIcon from "./icons/WorkIcon";

import "react-vertical-timeline-component/style.min.css";
import { useTheme } from "next-themes";

const Experience = ({
  employer,
  jobTitle,
  location,
  description,
  skills,
  employmentPeriod,
  darkMode = false,
}: {
  employer: string;
  jobTitle: string;
  location: string;
  description: string;
  skills: string[];
  employmentPeriod: string;
  darkMode?: boolean;
}) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: darkMode ? "#225945" : "#fff",
        color: "#e7e5e4",
        boxShadow: darkMode ? "none" : "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
      contentArrowStyle={{
        borderRight: `7px solid ${darkMode ? "#225945" : "#fff"}`,
      }}
      date={employmentPeriod}
      dateClassName={darkMode ? "text-stone-200" : "text-stone-600"}
      iconStyle={{
        background: darkMode ? "#3EB68A" : "#059669",
      }}
      icon={<WorkIcon className="w-5 h-5" />}
    >
      <h3 className="vertical-timeline-element-title text-slate-800 dark:text-stone-300 text-3xl font-bold">
        {employer}
      </h3>
      <h4 className="vertical-timeline-element-subtitle text-slate-800 dark:text-stone-300">
        <span className="font-semibold text-lg">{jobTitle}</span> — {location}
      </h4>
      <p className="text-sm italic text-slate-800 dark:text-stone-300">
        {description}
      </p>
      <p className="text-xs dark:text-stone-300 text-slate-800">
        {skills.join(" • ")}
      </p>
    </VerticalTimelineElement>
  );
};

export default function Timeline() {
  const { theme } = useTheme();
  const darkMode = theme === "dark";

  return (
    <ExperienceTimeline lineColor={theme === "dark" ? "#3EB68A" : "#059669"}>
      <Experience
        employer="Amazon"
        jobTitle="Software Development Engineer Intern"
        location="Seattle, WA"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut semper ex. Nunc finibus ligula id ex auctor lobortis. Integer."
        skills={["Java", "TypeScript", "AWS"]}
        employmentPeriod="June 2024 - September 2024"
        darkMode={darkMode}
      />
      <Experience
        employer="BruinRent.io"
        jobTitle="Lead Frontend Engineer"
        location="Los Angeles, CA"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut semper ex. Nunc finibus ligula id ex auctor lobortis. Integer."
        skills={["TypeScript", "React.js", "Node.js", "Firebase"]}
        employmentPeriod="October 2023 - March 2024"
        darkMode={darkMode}
      />
      <Experience
        employer="Amazon"
        jobTitle="Software Development Engineer Intern"
        location="Irvine, CA"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut semper ex. Nunc finibus ligula id ex auctor lobortis. Integer."
        skills={[
          "Java",
          "TypeScript",
          "API Gateway",
          "AWS Lambda",
          "DynamoDB",
          "CloudWatch",
          "CloudFormation",
        ]}
        employmentPeriod="June 2023 - September 2023"
        darkMode={darkMode}
      />
      <Experience
        employer="Cornerstone OnDemand"
        jobTitle="Full Stack Developer Intern"
        location="Irvine, CAa"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut semper ex. Nunc finibus ligula id ex auctor lobortis. Integer."
        skills={["TypeScript", "C#", "Azure"]}
        employmentPeriod="August 2022 - November 2022"
        darkMode={darkMode}
      />
      <Experience
        employer="Behaivior"
        jobTitle="Software Engineer Intern"
        location="Irvine, CA"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut semper ex. Nunc finibus ligula id ex auctor lobortis. Integer."
        skills={[
          "TypeScript",
          "React.js",
          "Firebase Functions",
          "Firestore",
          "GCP",
        ]}
        employmentPeriod="October 2021 - March 2022"
        darkMode={darkMode}
      />
      <Experience
        employer="Waypointe Management Consulting"
        jobTitle="Analyst"
        location="Singapore, Singapore"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut semper ex. Nunc finibus ligula id ex auctor lobortis. Integer."
        skills={[
          "Python",
          "Scikit-learn",
          "PyTorch",
          "Pandas",
          "NumPy",
          "Matplotlib",
        ]}
        employmentPeriod="October 2021 - March 2022"
        darkMode={darkMode}
      />
    </ExperienceTimeline>
  );
}
