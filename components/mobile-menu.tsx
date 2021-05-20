import Link from "next/link";

interface MobileMenuProps {
  navItems: string[];
}

const MobileMenu = ({
  navItems = ["home", "about us", "our practice", "our team"],
}: MobileMenuProps) => {
  return (
    <div className=" bg-brand-dark flex flex-col justify-between py-10 items-center">
      {navItems &&
        navItems.map((navItem, index) => (
          <div
            key={index}
            className="font-BasierCircle font-normal text-2xl mt-5 text-center"
          >
            <Link href="#">
              <a>{navItem[0].toUpperCase() + navItem.slice(1).toLowerCase()}</a>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default MobileMenu;
