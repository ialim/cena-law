import { SVG } from "../svg";

const { search } = SVG;

const Search = () => {
  return (
    <div className="bg-brand-dark  py-10 text-white mx-11 lg:mx-48">
      <form action="" className="flex justify-start items-center w-full border-white border-b-2">
        <button>{search}</button>
        <input type="search" id="search" placeholder="Search" className="bg-brand-dark text-white text-sm font-medium border-transparent w-full"/>
      </form>
    </div>
  );
};

export default Search;
