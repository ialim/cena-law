import { useState } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "../../utils/send-mail";

export interface ContactUsProps {
  title?: string;
  backgroundImage?: string;
  ctas?: string[];
}

type ContactFormValues = {
  fullname: string;
  email: string;
  available: string;
  message: string;
};

const ContactUs = ({
  title = "Make An Appointment",
  backgroundImage = "/images/covercontact_bg.png",
  ctas = ["Book Appointment"],
}: ContactUsProps) => {
  const [messageStatus, setMessageStatus] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>();
  const onSubmit = handleSubmit(async (data) => {
    const result = await sendEmail(data);
    setMessageStatus(result.ok);
    setTimeout(() => {
      setMessageStatus(!result.ok);
    }, 15000);
  });
  return (
    <div
      className=" items-start relative bg-no-repeat bg-cover bg-center text-white "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
        <div className=" mx-12 flex flex-col items-start justify-between py-40 lg:mx-48">
          <h5 className="font-GTSuper font-bold text-sm lg:text-center">
            Contact Us
          </h5>
          <h2 className="lg:text-center font-bold font-GTSuper text-4xl">
            {title}
          </h2>
          <form action="" onSubmit={onSubmit} className="my-10">
            <div>
              <div className="inline-flex flex-col w-full lg:w-80">
                <input
                  {...register("fullname", {
                    required: "This is required",
                    maxLength: {
                      value: 180,
                      message: "You exceeded the maximum length",
                    },
                  })}
                  type="text"
                  name="fullname"
                  id="fullname"
                  placeholder="Full Name"
                  className="my-2 border-brand-border border-2 bg-brand-input rounded-md py-3 pl-5 font-BasierCircle font-normal text-sm text-brand-secondary"
                />
                {errors.fullname && (
                  <p className="text-brand-primary text-sm font-thin font-BasierCircle">
                    {errors.fullname.message}
                  </p>
                )}
              </div>

              <div className="inline-flex flex-col w-full lg:w-80">
                <input
                  {...register("email", {
                    required: "This is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Enter a valid email",
                    },
                  })}
                  type="email"
                  id="email"
                  placeholder="example@gmail.com"
                  className="my-2 lg:ml-3 border-brand-border border-2 bg-brand-input rounded-md py-3 pl-5 font-BasierCircle font-normal text-sm text-brand-secondary"
                />
                {errors.email && (
                  <p className="lg:ml-3 text-brand-primary text-sm font-thin font-BasierCircle">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>
            <select
              placeholder="4:00 Available"
              {...register("available", { required: "This is required" })}
              id="available"
              onChange={() => {}}
              className="my-4 appearance-none border-brand-border border-2 bg-brand-input rounded-md py-3 pl-5 w-full font-BasierCircle font-normal text-sm text-brand-secondary"
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

            <textarea
              {...register("message", {
                required: "This is required",
                maxLength: {
                  value: 400,
                  message: "A maximum of 400 characters allowable",
                },
              })}
              id="message"
              placeholder="Message"
              className="my-4 border-brand-border border-2 bg-brand-input rounded-md py-3 pl-5 w-full font-BasierCircle font-normal text-sm text-brand-secondary h-36"
            />
            {errors.message && (
              <p className="text-brand-primary text-sm font-thin font-BasierCircle">
                {errors.message.message}
              </p>
            )}

            <div className="flex mt-6">
              {ctas &&
                ctas.map((cta, index) => (
                  <input
                    type="Submit"
                    key={index}
                    value={cta}
                    className="block rounded-sm bg-brand-primary px-9 py-3 font-bold font-BasierCircle text-sm text-center"
                  />
                ))}
            </div>
          </form>
        </div>
      </div>
      {messageStatus ? (
          <div
            className={` bg-brand-secondary font-BasierCircle text-white font-light text-sm rounded-lg p-3 my-3 mr-10 absolute top-11 animate-fadeInOut`}
          >
            Message successfully sent <br />
            One of our agents will contact you shortly thanks.
          </div>
        ) : (
          ""
        )}
    </div>
  );
};

export default ContactUs;
