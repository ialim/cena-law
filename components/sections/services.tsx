import { Element } from "react-scroll";
import SectionContentContainer from "../section-content-container";
import ServiceItem from "../service-item";

export interface ServicesProp {
  title?: string;
  paragraph?: string;
  services?: {
    title: string;
    keynotes: string[];
  }[];
}

const Services = ({
  title = "Practice Advice",
  paragraph = "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics ",
  services = [
    {
      title: "Immigration",
      keynotes: [
        "- The best products start.",
        "- Design with real data.",
        "- Lightning fast prototyping.",
        "- Fastest way to organize.",
        "- Work at the speed of thought.",
      ],
    },
    {
      title: "Bailes & Warrants",
      keynotes: [
        "- The best products start.",
        "- Design with real data.",
        "- Lightning fast prototyping.",
        "- Fastest way to organize.",
        "- Work at the speed of thought.",
      ],
    },
    {
      title: "Drug Crimes",
      keynotes: [
        "- The best products start.",
        "- Design with real data.",
        "- Lightning fast prototyping.",
        "- Fastest way to organize.",
        "- Work at the speed of thought.",
      ],
    },
  ],
}: ServicesProp) => {
  return (
    <Element id="our-practice" name="our-practice">
      <SectionContentContainer header={title} paragraph={paragraph}>
        {services &&
          services.map(({ title, keynotes }, index) => (
            <ServiceItem title={title} keyNotes={keynotes} key={index} />
          ))}
      </SectionContentContainer>
    </Element>
  );
};

export default Services;
