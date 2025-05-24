"use client";

import {
  VerticalTimeline as ExperienceTimeline,
  VerticalTimelineElement,
  VerticalTimelineProps,
} from "react-vertical-timeline-component";
import WorkIcon from "./icons/WorkIcon";

import "react-vertical-timeline-component/style.min.css";
import { Experience } from "./Experience";

interface TimelineProps extends VerticalTimelineProps {
  experiences?: Experience[];
}

const ExperienceElement = ({ exp }: { exp: Experience }) => {
  const { employer, jobTitle, location, description, skills } = exp;
  return (
    <>
      <h3 className="text-xl font-bold lg:text-3xl vertical-timeline-element-title text-slate-800 dark:text-stone-300">
        {employer}
      </h3>
      <h4 className="vertical-timeline-element-subtitle text-slate-800 dark:text-stone-300">
        <span className="font-semibold lg:text-lg">{jobTitle}</span> —{" "}
        {location}
      </h4>
      <p className="text-xs italic lg:text-sm text-slate-800 dark:text-stone-300">
        {description}
      </p>
      <p className="text-xs dark:text-stone-300 text-slate-800">
        {skills.join(" • ")}
      </p>
    </>
  );
};

const DarkTimeline = ({ experiences = [], ...props }: TimelineProps) => {
  return (
    <ExperienceTimeline lineColor={"#3EB68A"} {...props}>
      {experiences.map((exp, index) => (
        <VerticalTimelineElement
          key={index}
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#225945",
            color: "#e7e5e4",
            boxShadow: "none",
          }}
          contentArrowStyle={{
            borderRight: "7px solid #225945",
          }}
          date={exp.employmentPeriod}
          dateClassName={"text-stone-200"}
          iconStyle={{
            background: "#3EB68A",
          }}
          icon={<WorkIcon className="w-5 h-5" />}
        >
          <ExperienceElement exp={exp} />
        </VerticalTimelineElement>
      ))}
    </ExperienceTimeline>
  );
};

const LightTimeline = ({ experiences = [], ...props }: TimelineProps) => {
  return (
    <ExperienceTimeline lineColor={"#059669"} {...props}>
      {experiences.map((exp, index) => (
        <VerticalTimelineElement
          key={index}
          className="vertical-timeline-element--work dark:hidden"
          contentStyle={{
            background: "#fff",
            color: "#e7e5e4",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          }}
          contentArrowStyle={{
            borderRight: "7px solid #fff",
          }}
          date={exp.employmentPeriod}
          dateClassName="text-stone-600"
          iconStyle={{
            background: "#059669",
          }}
          icon={<WorkIcon className="w-5 h-5" />}
        >
          <ExperienceElement exp={exp} />
        </VerticalTimelineElement>
      ))}
    </ExperienceTimeline>
  );
};

export default function Timeline({
  experiences = [],
}: {
  experiences?: Experience[];
}) {
  return (
    <>
      <DarkTimeline experiences={experiences} className="hidden dark:block" />
      <LightTimeline experiences={experiences} className="dark:hidden" />
    </>
  );
}
