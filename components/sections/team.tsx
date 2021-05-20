import SectionContentContainer from "../section-content-container";
import TeamItem, { TeamItemProp } from "../team-item";

interface TeamProp {
  title: string;
  paragraph: string;
  team: TeamItemProp[];
}

const Team = ({
  title = "Meet Our Attorneys",
  paragraph = "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics ",
  team = [
    {
      fullname: "Ashley Fletcher",
      role: "Senior Partner",
      imgUrl: "/images/af.png",
      socials: [
        { name: "facebook", link: "/facebook" },
        { name: "instagram", link: "/instagram" },
        { name: "twitter", link: "/twitter" },
      ],
    },
    {
      fullname: "Rodney Stratton",
      role: "Partner",
      imgUrl: "/images/rs.png",
      socials: [
        { name: "facebook", link: "/facebook" },
        { name: "instagram", link: "/instagram" },
        { name: "twitter", link: "/twitter" },
      ],
    },
    {
      fullname: "Avie Beaton",
      role: "Partner",
      imgUrl: "/images/ab.png",
      socials: [
        { name: "facebook", link: "/facebook" },
        { name: "instagram", link: "/instagram" },
        { name: "twitter", link: "/twitter" },
      ],
    },
  ],
}: TeamProp) => {
  return (
    <SectionContentContainer header={title} paragraph={paragraph}>
      {team &&
        team.map(({ fullname, role, imgUrl, socials }, index) => (
          <TeamItem
            fullname={fullname}
            role={role}
            imgUrl={imgUrl}
            socials={socials}
            key={index}
          />
        ))}
    </SectionContentContainer>
  );
};

export default Team;
