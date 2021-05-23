import Link from "next/link";
import { useState } from "react";
import { SVG } from "../svg";
import MobileMenu from "./mobile-menu";
import Search from "./search";
import * as Scroll from "react-scroll";

export interface NavProps {
  navItems?: string[];
  title?: string;
}

const ScrollLink = Scroll.Link;
const { search, hambuger } = SVG;

export const Nav = ({
  navItems = ["home", "about us", "our practice", "our team"],
  title = "Cena Law",
}: NavProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const onClick = () => {
    setShowMenu(!showMenu);
  };
  const onClickSearch = () => {
    setShowSearch(!showSearch);
  };
  return (
    <nav className="items-center text-white bg-brand-dark">
      <div className="flex flex-row justify-between items-center h-24 mx-11 lg:mx-48">
        <div className="justify-center">
          <Link href="/">
            <a className="font-bold font-GTSuper text-2xl">{title}</a>
          </Link>
        </div>
        <div className="flex flex-row justify-between w-1/5 lg:w-2/5">
          {navItems &&
            navItems.map((navItem, index) => (
              <div
                key={index}
                className="font-BasierCircle hidden lg:block font-semibold text-sm text-center"
              >
                <ScrollLink
                  to={navItem.replace(/ /g, "-")}
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-brand-secondary"
                  activeClass="text-brand-primary"
                >
                  {navItem[0].toUpperCase() + navItem.slice(1).toLowerCase()}
                </ScrollLink>
              </div>
            ))}
          <div>
            <button onClick={onClickSearch}>{search}</button>
          </div>
          <div className="lg:hidden">
            <button onClick={onClick}>{hambuger}</button>
          </div>
        </div>
      </div>
      {showMenu && <MobileMenu navItems={navItems} />}
      {showSearch && <Search />}
    </nav>
  );
};
