import { SVG } from "../svg";

interface ServiceItemProps {
  title: string;
  keyNotes: string[];
}

const ServiceItem = ({ title, keyNotes }: ServiceItemProps) => {
  return (
    <div className="bg-brand-section rounded-xl mt-20 lg:w-96">
      <div className="flex flex-row py-8 px-12 justify-center items-center">
        {title && SVG[title.toLowerCase().replace(/ |&/g, "")]}
        <h3 className="font-bold font-GTSuper text-2xl text-brand-dark ml-4">
          {title}
        </h3>
      </div>
      <div className="bg-white py-8 px-12 rounded-xl text-center flex justify-center">
        <ul>
          {keyNotes.map((keynote, index) => (
            <li
              className="font-BasierCircle font-medium text-brand-secondary text-sm text-left"
              key={index}
            >
              {keynote}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceItem;
