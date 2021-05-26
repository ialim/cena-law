import { Element } from "react-scroll";
import * as Scroll from "react-scroll";
import { useForm } from "react-hook-form";
import { sendEmail } from "../../utils/send-mail";
import { useState } from "react";

export interface HeroImageProps {
  title?: string;
  backgroundImage?: string;
  ctas?: string[];
  tagline?: string;
}

type ContactFormValues = {
  fullname: string;
  email: string;
  available: string;
  message: string;
};

const ScrollLink = Scroll.Link;

export const HeroImage = ({
  title = "Legal Professional Services",
  backgroundImage = "/images/cover.png",
  tagline = "We know how large objects will act, but things on a small scale.",
  ctas = ["Learn more"],
}: HeroImageProps) => {
  const [messageStatus, setMessageStatus] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>();
  const onSubmit = handleSubmit(async (data) => {
    const result = await sendEmail(data);
    console.log(data, result);
    setMessageStatus(result.ok);
    setTimeout(() => {
      setMessageStatus(!result.ok);
    }, 15000);
  });
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
                    <ScrollLink
                      to="our-practice"
                      spy={true}
                      smooth={true}
                      duration={1000}
                      className="block rounded-sm bg-brand-primary px-9 py-3 font-bold font-BasierCircle text-sm text-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                      key={index}
                    >
                      {cta}
                    </ScrollLink>
                  ))}
              </div>
            </div>
            <form
              onSubmit={onSubmit}
              className="py-8 px-10 bg-white mt-32 mb-24 rounded-md"
            >
              <h3 className="font-GTSuper font-bold text-center text-2xl text-brand-dark mb-10">
                Book Appointment
              </h3>
              <h6 className="text-brand-dark font-BasierCircle font-bold text-sm">
                Name*
              </h6>
              <input
                type="text"
                {...register("fullname", {
                  required: "This is required",
                  maxLength: {
                    value: 180,
                    message: "You exceeded the maximum length",
                  },
                })}
                id="fullname"
                placeholder="Full Name"
                className="my-2 border-brand-border border-2 bg-brand-input rounded-md py-3 pl-5 w-full lg:w-80 font-BasierCircle font-normal text-sm text-brand-secondary"
              />
              {errors.fullname && (
                <p className="text-brand-primary text-sm font-thin font-BasierCircle">
                  {errors.fullname.message}
                </p>
              )}
              <h6 className="text-brand-dark font-BasierCircle font-bold text-sm">
                Email*
              </h6>
              <input
                type="email"
                {...register("email", {
                  required: "This is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Enter a valid email",
                  },
                })}
                id="email"
                placeholder="example@gmail.com"
                className="my-2 border-brand-border border-2 bg-brand-input rounded-md py-3 pl-5 w-full lg:w-80 font-BasierCircle font-normal text-sm text-brand-secondary"
              />
              {errors.email && (
                <p className=" text-brand-primary text-sm font-thin font-BasierCircle">
                  {errors.email.message}
                </p>
              )}
              <h6 className="text-brand-dark font-BasierCircle font-bold text-sm">
                Time*
              </h6>
              <select
                placeholder="4:00 Available"
                {...register("available", { required: "This is required" })}
                id="available"
                onChange={() => {}}
                className="my-2 appearance-none border-brand-border border-2 bg-brand-input rounded-md py-3 pl-5 w-full lg:w-80 font-BasierCircle font-normal text-sm text-brand-secondary"
              >
                <option value="13:00">13:00 Available</option>
                <option value="14:00">14:00 Available</option>
                <option value="15:00">15:00 Available</option>
                <option value="16:00">16:00 Available</option>
                <option value="17:00">17:00 Available</option>
                <option value="18:00">18:00 Available</option>
              </select>
              {errors.available && (
                <p className="text-brand-primary text-sm font-thin font-BasierCircle">
                  {errors.available.message}
                </p>
              )}
              <h6 className="text-brand-dark font-BasierCircle font-bold text-sm">
                Message
              </h6>
              <textarea
                {...register("message", {
                  required: "This is required",
                  maxLength: {
                    value: 400,
                    message: "A maximum of 400 characters allowable",
                  },
                })}
                id="message"
                placeholder="Type here"
                className="my-2 border-brand-border border-2 bg-brand-input rounded-md py-3 pl-5 w-full lg:w-80 font-BasierCircle font-normal text-sm text-brand-secondary"
              />
              {errors.message && (
                <p className="text-brand-primary text-sm font-thin font-BasierCircle">
                  {errors.message.message}
                </p>
              )}
              <div className="mt-12 flex">
                <input
                  type="Submit"
                  value="Book Appointment"
                  className="py-4 w-full lg:px-28 lg:w-80 font-bold font-BasierCircle text-sm text-center rounded-md bg-brand-dark"
                />
              </div>
            </form>
          </div>
        </div>
        {messageStatus ? (
          <div
            className={`bg-brand-dark font-BasierCircle text-brand-muted font-light text-sm rounded-lg p-3 my-3 mr-10 absolute top-0 animate-fadeInOut`}
          >
            Message successfully sent <br />
            One of our agents will contact you shortly thanks.
          </div>
        ) : (
          ""
        )}
      </div>
    </Element>
  );
};
