import Link from "next/link";
import { SVG } from "../../svg";

interface AboutUsProp {
  title: string;
  paragraphs: string[];
  imgUrls: { name: string; imgUrl: string }[];
}

const { forwardArrow } = SVG;

const AbuotUs = ({
  title = "Who are we?",
  paragraphs = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentumdiam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non. Non commodo volutpat, pharetra, vel.",
    " As we proceed, this a sample text to show you what we need in this section. Just a quick description of what the firm is aboout. Nothing too fancy but dope.",
  ],
  imgUrls = [{ name: "weigh", imgUrl: "/images/Feature/Single/weigh.png" },{ name: "ceo", imgUrl: "/images/Feature/Single/ceo.png" }],
}: AboutUsProp) => {
  return (
    <div className="bg-white px-11 lg:px-40 py-16 flex flex-col lg:flex-row justify-evenly items-center">
      <div className="hidden lg:block">
        <div
          className="bg-brand-secondary rounded-full relative w-80"
          style={{ width: "32rem", height: "32rem" }}
        >
          <img className="rounded-md absolute inset-16" src={imgUrls[0].imgUrl} alt={imgUrls[0].name} />
          <img
            className="rounded-md absolute inset-52"
            src={imgUrls[1].imgUrl} alt={imgUrls[1].name}
          />
        </div>
      </div>
      <div className="lg:px-9 lg:w-2/4" >
        <h6 className="font-GTSuper font-bold text-5xl text-brand-dark">
          {title}
        </h6>
        {paragraphs &&
          paragraphs.map((paragraph, index) => (
            <p
              className="text-brand-dark font-BasierCircle font-normal text-lg mt-8"
              key={index}
            >
              {paragraph}
            </p>
          ))}
        <div className="mt-8 ">
          <Link href="#">
            <a className="font-bold font-GTSuper text-xl text-brand-primary">
              Learn more{" "}
              <span className="inline-block ml-1">{forwardArrow}</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AbuotUs;
