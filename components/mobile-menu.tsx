import Link from "next/link";
import { useState } from "react";
import { SVG } from "../svg";
import * as Scroll from "react-scroll";

interface MobileMenuProps {
  navItems: string[];
}

const ScrollLink = Scroll.Link;
const {close} = SVG

const MobileMenu = ({
  navItems = ["home", "about us", "our practice", "our team"],
}: MobileMenuProps) => {
  const [closeMenu, setCloseMenu] = useState(false);
  const handleClick = () => {
    setCloseMenu(!closeMenu);
  };
  return (
    <div className={`bg-brand-dark absolute top-0 w-full flex flex-col justify-between py-10 items-center ${
        closeMenu ? "hidden" : ""
      }`}>
      <div className="flex flex-row w-full px-11 mb-24 lg:hidden justify-between">
        <Link href="/">
          <a className="font-bold font-GTSuper text-2xl">Cena Law</a>
        </Link>
        <button onClick={handleClick}>{close}</button>
      </div>
      {navItems &&
        navItems.map((navItem, index) => (
          <div
            key={index}
            className="font-BasierCircle font-normal text-2xl mt-5 text-center"
          >
            <ScrollLink
                  to={navItem.replace(/ /g, "-")}
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-brand-secondary"
                  activeClass="text-brand-primary"
                  onClick={handleClick}
                >
              {navItem[0].toUpperCase() + navItem.slice(1).toLowerCase()}
            </ScrollLink>
          </div>
        ))}
    </div>
  );
};

export default MobileMenu;
