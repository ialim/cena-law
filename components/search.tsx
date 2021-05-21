import Link from "next/link";
import { useState } from "react";
import { SVG } from "../svg";

const { search, close } = SVG;

const Search = () => {
  const [closeSearch, setCloseSearch] = useState(false);
  const handleClick = () => {
    setCloseSearch(!closeSearch);
  };
  return (
    <div
      className={`bg-brand-dark absolute top-0 py-10 w-full text-white px-11 lg:px-48 ${
        closeSearch ? "hidden" : ""
      }`}
    >
      <div className="flex flex-row lg:hidden justify-between">
        <Link href="/">
          <a className="font-bold font-GTSuper text-2xl">Cena Law</a>
        </Link>
        <button onClick={handleClick}>{close}</button>
      </div>
      <div className="flex flex-row justify-between">
        <form
          action=""
          className="flex justify-start items-center w-full lg:w-11/12 mt-24 lg:mt-0 border-white border-b-2"
        >
          <button>{search}</button>
          <input
            type="search"
            id="search"
            placeholder="Search"
            className="bg-brand-dark text-white text-sm font-medium border-transparent w-full"
          />
        </form>
        <button onClick={handleClick} className="hidden lg:block">
          {close}
        </button>
      </div>
    </div>
  );
};

export default Search;
