export interface ContactUsProps {
  title?: string;
  backgroundImage?: string;
  ctas?: string[];
}

const ContactUs = ({
  title = "Make An Appointment",
  backgroundImage = "/images/covercontact_bg.png",
  ctas = ["Book Appointment"],
}: ContactUsProps) => {
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
          <form action="" className="my-10">
            <div>
              <input
                type="text"
                name="fullname"
                id="fullname"
                placeholder="Full Name"
                className="my-2 border-brand-border border-2 bg-brand-input rounded-md py-3 pl-5 w-full lg:w-80 font-BasierCircle font-normal text-sm text-brand-secondary"
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@gmail.com"
                className="my-2 lg:ml-3 border-brand-border border-2 bg-brand-input rounded-md py-3 pl-5 w-full lg:w-80 font-BasierCircle font-normal text-sm text-brand-secondary"
              />
            </div>
            <select
              placeholder="4:00 Available"
              name="time"
              id="available-time"
              onChange={() => {}}
              className="my-4 appearance-none border-brand-border border-2 bg-brand-input rounded-md py-3 pl-5 w-full font-BasierCircle font-normal text-sm text-brand-secondary"
            >
              <option value="">4:00 Available</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="hamster">Hamster</option>
              <option value="parrot">Parrot</option>
              <option value="spider">Spider</option>
              <option value="goldfish">Goldfish</option>
            </select>
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              className="my-4 border-brand-border border-2 bg-brand-input rounded-md py-3 pl-5 w-full font-BasierCircle font-normal text-sm text-brand-secondary h-36"
            />
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
    </div>
  );
};

export default ContactUs;
