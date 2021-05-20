import Link from "next/link";
import { SVG } from "../svg";

export interface TeamItemProp {
  fullname: string;
  role: string;
  imgUrl: string;
  socials: {
    name: string;
    link: string;
  }[];
}

const TeamItem = ({ fullname, role, imgUrl, socials }: TeamItemProp) => {
  return (
    <div className="bg-white mt-20">
      <img src={imgUrl} alt={fullname} />
      <div className="flex flex-col items-center justify-center my-8">
        <h5 className="font-GTSuper font-bold text-base text-brand-dark">
          {fullname}
        </h5>
        <h6 className="font-BasierCircle font-bold text-sm text-brand-secondary">
          {role}
        </h6>
        <div className="flex mt-1">
          {socials &&
            socials.map(({ name, link }, index) => (
              <Link href={link} key={index}>
                <a className="mr-2" style={{color: "#252B42"}}>
                  <span className="sr-only">{name}</span>
                  {SVG[name.toLowerCase()].dark}
                </a>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TeamItem;
