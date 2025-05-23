"use client";

import {
  VerticalTimeline as ExperienceTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import WorkIcon from "./icons/WorkIcon";

import "react-vertical-timeline-component/style.min.css";

const Experience = ({
  employer,
  jobTitle,
  location,
  description,
  skills,
  employmentPeriod,
}: {
  employer: string;
  jobTitle: string;
  location: string;
  description: string;
  skills: string[];
  employmentPeriod: string;
}) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: "#225945",
        color: "#e7e5e4",
        boxShadow: "none",
      }}
      contentArrowStyle={{ borderRight: "7px solid #225945" }}
      date={employmentPeriod}
      dateClassName="text-stone-200"
      iconStyle={{ background: "#3EB68A", color: "#E7D8C9" }}
      icon={<WorkIcon className="w-5 h-5" />}
    >
      <h3 className="vertical-timeline-element-title text-3xl font-bold">
        {employer}
      </h3>
      <h4 className="vertical-timeline-element-subtitle ">
        <span className="font-semibold text-lg">{jobTitle}</span> — {location}
      </h4>
      <p className="text-sm italic">{description}</p>
      <p className="text-xs text-stone-300">{skills.join(" • ")}</p>
    </VerticalTimelineElement>
  );
};

export default function Timeline() {
  return (
    <ExperienceTimeline lineColor="#3EB68A">
      <Experience
        employer="Amazon"
        jobTitle="Software Development Engineer Intern"
        location="Seattle, WA"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut semper ex. Nunc finibus ligula id ex auctor lobortis. Integer."
        skills={["Java", "TypeScript", "AWS"]}
        employmentPeriod="June 2024 - September 2024"
      />
      <Experience
        employer="BruinRent.io"
        jobTitle="Lead Frontend Engineer"
        location="Los Angeles, CA"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut semper ex. Nunc finibus ligula id ex auctor lobortis. Integer."
        skills={["TypeScript", "React.js", "Node.js", "Firebase"]}
        employmentPeriod="October 2023 - March 2024"
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
      />
      <Experience
        employer="Cornerstone OnDemand"
        jobTitle="Full Stack Developer Intern"
        location="Irvine, CAa"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut semper ex. Nunc finibus ligula id ex auctor lobortis. Integer."
        skills={["TypeScript", "C#", "Azure"]}
        employmentPeriod="August 2022 - November 2022"
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
      />
    </ExperienceTimeline>
  );
}
