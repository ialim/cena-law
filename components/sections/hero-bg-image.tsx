import Link from "next/link";
import { SVG } from "../../svg";
import { Element } from "react-scroll";

interface HeroImageProps {
  title: string;
  backgroundImage: string;
  ctas: string[];
  tagline: string;
}

export const HeroImage = ({
  title = "Legal Professional Services",
  backgroundImage = "/images/cover.png",
  tagline = "We know how large objects will act, but things on a small scale.",
  ctas = ["Learn more"],
}: HeroImageProps) => {
  return (
    <Element id="home" name="home">
    <div
      className=" items-start relative bg-no-repeat bg-cover bg-center text-white "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
        <div className=" mx-11 lg:mx-48 flex lg:flex-row flex-col justify-between">
          <div className="flex flex-col justify-start items-center lg:items-start lg:w-screen box-border py-6 max-w-screen-sm">
            <div className="relative mt-40 font-GTSuper text-center lg:text-left font-bold text-6xl">
              {title}
            </div>
            <h4 className="relative mt-9 font-BasierCircle font-normal text-xl">
              {tagline}
            </h4>
            <div className="mt-12 flex">
              {ctas &&
                ctas.map((cta, index) => (
                  <Link href={`/`} key={index}>
                    <a
                      className="block rounded-sm bg-brand-primary px-9 py-3 font-bold font-BasierCircle text-sm text-center"
                      style={{
                        maxWidth: "fit-content",
                        transition: "transform 50ms ease-in-out",
                        transform: "scale(1)",
                      }}
                    >
                      {cta}
                    </a>
                  </Link>
                ))}
            </div>
          </div>
          <div className="py-8 px-10 bg-white mt-32 mb-24 rounded-md">
            <h3 className="font-GTSuper font-bold text-center text-2xl text-brand-dark mb-10">
              Book Appointment
            </h3>
            <h6 className="text-brand-dark font-BasierCircle font-bold text-sm">
              Name*
            </h6>
            <input
              type="text"
              name="fullname"
              id="fullname"
              placeholder="Full Name"
              className="my-2 border-brand-border border-2 bg-brand-input rounded-md py-3 pl-5 w-full lg:w-80 font-BasierCircle font-normal text-sm text-brand-secondary"
            />
            <h6 className="text-brand-dark font-BasierCircle font-bold text-sm">
              Email*
            </h6>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@gmail.com"
              className="my-2 border-brand-border border-2 bg-brand-input rounded-md py-3 pl-5 w-full lg:w-80 font-BasierCircle font-normal text-sm text-brand-secondary"
            />
            <h6 className="text-brand-dark font-BasierCircle font-bold text-sm">
              Time*
            </h6>
            <select
              name="time"
              id="available-time"
              onChange={() => {}}
              className="my-2 appearance-none border-brand-border border-2 bg-brand-input rounded-md py-3 pl-5 w-full lg:w-80 font-BasierCircle font-normal text-sm text-brand-secondary"
            >
              <option value="">4:00 Available</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="hamster">Hamster</option>
              <option value="parrot">Parrot</option>
              <option value="spider">Spider</option>
              <option value="goldfish">Goldfish</option>
            </select>
            <h6 className="text-brand-dark font-BasierCircle font-bold text-sm">
              Message
            </h6>
            <input
              type="text"
              name="message"
              id="message"
              placeholder="Type here"
              className="my-2 border-brand-border border-2 bg-brand-input rounded-md py-3 pl-5 w-full lg:w-80 font-BasierCircle font-normal text-sm text-brand-secondary"
            />
            <div className="mt-12 flex">
              <input
                type="Submit"
                value="Book Appointment"
                className="py-4 w-full lg:px-28 lg:w-80 font-bold font-BasierCircle text-sm text-center rounded-md bg-brand-dark"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </Element>
  );
};
